sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "com/spm/suppilerportal/utils/dataUtil",
    "sap/ui/core/UIComponent",
    "sap/ui/core/Fragment",
    "../model/formatter",
    "com/spm/suppilerportal/utils/serviceUtil",
    "sap/m/MessageBox",
    "com/spm/suppilerportal/model/models"
],
/**
 * @param {typeof sap.ui.core.mvc.Controller} Controller
 */
function (Controller, JSONModel, dataUtil, UIComponent, Fragment, formatter, serviceUtil, MessageBox, models) {
    // formatter
    "use strict";

    return Controller.extend("com.spm.suppilerportal.controller.FlexibleColumnLayout", {
        onInit: function () {
            this.getRouter().getRoute("FlexibleColumnLayout").attachPatternMatched(this._onObjectMatched, this);

        },

        _onObjectMatched: function (oEvent) {
            var sType = oEvent.getParameter("arguments").Type;
            var oFlexiModel = this.getOwnerComponent().getModel("oFiexibleLayout");
            if (sap.ui.Device.system.phone) {
                oFlexiModel.setProperty("/bColumnVisible", false);
            }
            this.getOwnerComponent().getModel("oFiexibleLayout").setProperty("/Type", sType);
            if (sType == "1") {
                this._fnFetchSupplierRegistrationList();
            }else if(sType == "2"){
                this._fnFetchSupplierOnboardingList();
            }
        },
        _fnFetchSupplierOnboardingList: function(){
            var response = [];
            var oFlexiModel = this.getOwnerComponent().getModel("oFiexibleLayout");
            var oLocalData = models.fnSupplierOnBoarding().getData();
                    oLocalData.VEND_MSTR_ID = "2023VND00001";
                    oLocalData.CREATED_ON = new Date();
                    oLocalData.CONTSEQLIST.push(oLocalData.CONTSEQID);       
                    oLocalData.ATTACHMENTSSET.push(oLocalData.ATTACHMENTS);       
                    response.push(oLocalData);
                    oFlexiModel.setProperty("/SuppOnBoarding", response);
        },
        _fnFetchSupplierRegistrationList: function () {
            var sRelativePath = "/supplier/guest";
            serviceUtil._fnGetData(
                sRelativePath,
                function (xhr, textStatus, response) {
                    var oFlexiModel = this.getOwnerComponent().getModel("oFiexibleLayout");

                    var oLocalData = models.fnSupplierRegistration().getData();
                    oLocalData.GST_REG_ID = "2023GST00001";
                    oLocalData.CREATED_ON = new Date();
                    response.push(oLocalData);
                    oFlexiModel.setProperty("/SupRegis", response);
                }.bind(this),
                function (xhr, textStatus, errorThrown) {
                    var sErrorMessage = "Failed to create requests..!!";
                    if (xhr.status === 500) {
                        sErrorMessage = "Failed to load data..!!";
                    } else if (xhr.status === 400) {
                        sErrorMessage = xhr.responseJSON.message;
                    }
                    MessageBox.error(sErrorMessage);
                }
            );
        },
        onStateChange: function (oEvent) {
            var sLayout = oEvent.getParameter("layout");
            this.getOwnerComponent().getModel("oFiexibleLayout").setProperty("/Span", "");
            this.getOwnerComponent().getModel("oFiexibleLayout").setProperty("/layout", sLayout);
            switch (sLayout) {
            case "TwoColumnsMidExpanded":
            case "MidColumnFullScreen":
                this.getOwnerComponent().getModel("oFiexibleLayout").setProperty("/bColumnVisible", false);
                this.getOwnerComponent().getModel("oFiexibleLayout").setProperty("/Span", "XL6 L6 M8 S12");
                break;
            case "TwoColumnsBeginExpanded":
                this.getOwnerComponent().getModel("oFiexibleLayout").setProperty("/bColumnVisible", true);
                this.getOwnerComponent().getModel("oFiexibleLayout").setProperty("/Span", "X8 L8 M12 S12");
                break;
            default:
                this.getOwnerComponent().getModel("oFiexibleLayout").setProperty("/Span", "");
                break;

            }

        }

    });
});