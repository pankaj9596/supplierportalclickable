sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "com/spm/suppilerportal/utils/dataUtil",
    "sap/ui/core/UIComponent"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, dataUtil, UIComponent) {
        "use strict";

        return Controller.extend("com.spm.suppilerportal.controller.ErrorHandler", {
            constructor: function (oComponent) {
                this._oResourceBundle = oComponent.getModel("i18n").getResourceBundle();
                this._oComponent = oComponent;
                this._oModel = oComponent.getModel();
                this._bMessageOpen = false;
                this._oModel.attachMetadataFailed(function (oEvent) {
                    var oParams = oEvent.getParameters();
                    this._fnGetServiceMessage(oParams);
                }, this);
                // this event handles all the failure request across this application 
                this._oModel.attachRequestFailed(function (oEvent) {
                    var oParams = oEvent.getParameters();
                    //Bypass the failures that has alternate handling in the application.
                    if (oParams.response.statusCode === "404" && oParams.response.responseText.indexOf("ZGECAMC001/016") !== -1) {
                        return;
                    }
                    // An entity that was not found in the service is also throwing a 404 error in oData.
                    // We already cover this case with a notFound target so we skip it here.
                    // A request that cannot be sent to the server is a technical error that we have to handle though
                    if (oParams.response.statusCode === "404" || oParams.response.statusCode === "400" || (oParams.response.statusCode === 404 &&
                        oParams.response.responseText.indexOf(
                            "Cannot POST") === 0)) {
                        this._fnGetServiceMessage(oParams.response);
                    } else {
                        this._fnGetServiceMessage(oParams.response);
                        //this._showServiceError(this._oResourceBundle.getText("MSG_EXCEPTION"));
                    }
                }, this);
            },
            _fnGetServiceMessage: function (sDetails) {
                var vMsg = "";
                var bErrorMSG = false;
                var sStatus = sDetails.statusCode;
                // This is to read the response from the server then show error message	
                if (sStatus === "401") {
                    this._fnErrorCodeFrontend(sDetails, "An unexpected error has occurred. Contact your administrator");
                } else if (sStatus === "400" || sStatus === "404" || sStatus === "403" || sStatus === "404") {
                    this._fnErrorCodeFrontend(sDetails, vMsg);
                } else {
                    this._fnErrorCodeBackend(sDetails, vMsg);
                }

            },

            _fnErrorCodeFrontend: function (sDetails, vMsg) {
                try {
                    vMsg = jQuery.parseJSON(sDetails.responseText).error.message.value;
                } catch (oErr) {
                    vMsg = this._oResourceBundle.getText("EXCEPTION_MSG");
                }
                var oModel = new sap.ui.model.json.JSONModel({
                    "Title": this._oResourceBundle.getText("MSG_ERROR"),
                    "SubTitle": vMsg,
                    "BtnOkText": this._oResourceBundle.getText("txtOK")
                });

            },
            _fnErrorCodeBackend: function (sDetails, vMsg) {
                try {
                    vMsg = jQuery.parseJSON(sDetails.responseText).error.message.value;
                } catch (oErr) {
                    try {
                        vMsg = 'Transaction ID: ' + jQuery.parseXML(sDetails.responseText).querySelector("transactionid").textContent;
                        //	vMsg = jQuery.parseXML(sDetails.responseText).querySelector("message").textContent;
                    } catch (oErr) {
                        //	vMsg = this._oResourceBundle.getText("EXCEPTION_MSG");
                    }
                }
                var oModel = new sap.ui.model.json.JSONModel({
                    "Title": this._oResourceBundle.getText("EXCEPTION_MSG1"),
                    "SubTitle": this._oResourceBundle.getText("EXCEPTION_MSG2"),
                    "SubTitle2": vMsg,
                    "BtnOkText": this._oResourceBundle.getText("txtOK")
                });

            },
        });
    });
