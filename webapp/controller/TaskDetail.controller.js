sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "com/spm/suppilerportal/utils/dataUtil",
    "sap/ui/core/UIComponent",
    "sap/ui/core/Fragment",
    "../model/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, dataUtil, UIComponent, Fragment, formatter) {
        "use strict";

        return Controller.extend("com.spm.suppilerportal.controller.TaskDetail", {
            onInit: function () {
                var oModel = dataUtil.createJsonModel();
                oModel.setData({
                    "bEdit": false,
                    "bDisplay": true
                });
                this.getView().setModel(oModel, "oVendorMaster");
                this.oModel = this.getView().getModel("oVendorMaster");
                this.getRouter().getRoute("TaskDetail").attachPatternMatched(this._onObjectMatched, this);

            },
            _onObjectMatched: function (oEvent) {

            },
            handleFullScreen: function (oEvent) {
                this.getOwnerComponent().getModel("oFiexibleLayout").setProperty("/Span", "XL6 L6 M8 S12");
                var bFullScreen = this.getModel("oFiexibleLayout").getProperty("/actionButtonsInfo/midColumn/fullScreen");
                this.getModel("oFiexibleLayout").setProperty("/actionButtonsInfo/midColumn/fullScreen", !bFullScreen);
                if (!bFullScreen) {
                    // store current layout and go full screen
                    this.getModel("oFiexibleLayout").setProperty("/previousLayout", this.getModel("oFiexibleLayout").getProperty("/layout"));
                    this.getModel("oFiexibleLayout").setProperty("/layout", "MidColumnFullScreen");
                } else {
                    // reset to previous layout
                    this.getModel("oFiexibleLayout").setProperty("/layout", this.getModel("oFiexibleLayout").getProperty("/previousLayout"));
                }
            },
            handleClose: function (oEvent) {
                this.getOwnerComponent().getModel("oFiexibleLayout").setProperty("/layout", "OneColumn");
            },
            onEditScreen: function (oEvent) {
                this.oModel.setProperty("/bEdit", true);
                this.oModel.setProperty("/bDisplay", false);
            },
            onDisplayScreen: function (oEvent) {
                this.oModel.setProperty("/bEdit", false);
                this.oModel.setProperty("/bDisplay", true);
            },
            onFooterButtonPress: function (oEvent, sAction) {
                this.oRejectDialog = new sap.m.Dialog({
                    title: sAction,
                    type: sap.m.DialogType.Message,
                    content: [
                        new sap.m.Label({
                            required: sAction === "Reject" ? true : false,
                            text: sAction === "Approve" ? "Do you want to Approve this?" : "Do you want to Reject this?",
                            labelFor: "rejectionNote"
                        }),
                        new sap.m.TextArea("rejectionNote", {
                            width: "100%",
                            placeholder: "Add note (optional)"
                        })
                    ],
                    beginButton: new sap.m.Button({
                        type: sap.m.ButtonType.Emphasized,
                        text: sAction,
                        press: function () {
                            var sText = sap.ui.getCore().byId("rejectionNote").getValue();
                            if (sText === "" && sAction === "Reject") {
                                sap.ui.getCore().byId("rejectionNote").setValueState("Error");
                                sap.ui.getCore().byId("rejectionNote").setValueStateText("Please enter remarks");
                                sap.m.MessageToast.show("Please enter remarks");
                                return;
                            } else {
                                sap.ui.getCore().byId("rejectionNote").setValueState("None");
                            }
                            sap.m.MessageToast.show("Note is: " + sText);
                            this.oRejectDialog.close();
                            this.oRejectDialog.destroy();
                            this.oRejectDialog = undefined;
                            this.getOwnerComponent().getModel("oFiexibleLayout").setProperty("/layout", "OneColumn");
                        }.bind(this)
                    }),
                    endButton: new sap.m.Button({
                        text: "Cancel",
                        press: function () {
                            this.oRejectDialog.close();
                            this.oRejectDialog.destroy();
                            this.oRejectDialog = undefined;
                        }.bind(this)
                    })
                });
                this.oRejectDialog.open();
            },

        });
    });
