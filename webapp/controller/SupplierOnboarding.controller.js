sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "com/spm/suppilerportal/utils/dataUtil",
    "sap/ui/core/UIComponent",
    "sap/ui/core/Fragment",
    "com/spm/suppilerportal/model/models",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, dataUtil, UIComponent, Fragment, models) {
        "use strict";

        return Controller.extend("com.spm.suppilerportal.controller.SupplierOnboarding", {
            onInit: function () {


                /************************************Handling CSS for DEVICE Responsiveness*****************************/
                var isMobile = this.getOwnerComponent().getModel("device").getProperty("/system/phone") ? true : false;
                if (isMobile) {
                    this.getUIControl("flxBoxAccountInfo").addStyleClass("flexBoxHavingSimpleformInside");
                    this.getUIControl("flxBoxBasicInformation").addStyleClass("flexBoxHavingSimpleformInside");
                    this.getUIControl("flxBoxAddress").addStyleClass("flexBoxHavingSimpleformInside");
                    this.getUIControl("flxBoxContactList").addStyleClass("flexBoxHavingSimpleformInside");
                    this.getUIControl("flxBoxDepartment").addStyleClass("flexBoxHavingSimpleformInside");
                    this.getUIControl("flxBoxOtherInfo").addStyleClass("flexBoxHavingSimpleformInside");
                    this.getUIControl("flxBoxPaymentInfo").addStyleClass("flexBoxHavingSimpleformInside");
                    this.getUIControl("flxBoxReviewLog").addStyleClass("flexBoxHavingSimpleformInside");
                    this.getUIControl("flxBoxStatutoryDocuments").addStyleClass("flexBoxHavingSimpleformInside");
                    this.getUIControl("flxBoxWithholdingTax").addStyleClass("flexBoxHavingSimpleformInside");

                }


                var oModel = dataUtil.createJsonModel();
                oModel.setData({
                    "sNext": true,
                    "sSubmit": false,
                    "sLogoImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/logo.jpeg")
                });
                this.getView().setModel(oModel, "oLanding");
                var oModel = new sap.ui.model.json.JSONModel({
                    "Designation": "",
                    "Name": "",
                    "LandPhoneNo": "",
                    "MobileNo": "",
                    "Email": "",
                    "aContact": [],
                    "sStep1": true,
                    "sStep2": false,
                    "sStep3": false,
                    "sStep4": false,
                    "sStep5": false,
                    "sStep6": false,
                    "sStep7": false,
                    "sStep8": false,
                    "sStep9": false,
                    "sStep10": false
                });
                this.getView().setModel(oModel, "genericTileModel");
                this.setModel(new JSONModel(models.fnSupplierOnBoarding().getData()), "oSOModel");
                this.getRouter().getRoute("SupplierOnboarding").attachPatternMatched(this._onObjectMatched, this);
            },
            _onObjectMatched: function (oEvent) {
                this.onfnnextpress1();
                var oItems = this.getView().byId("idMP").getContent();
                for (var key in oItems) {
                    if (key > parseInt(1)) {
                        this.getView().byId("idMP").getContent()[key].removeStyleClass("classPurpledot2");
                        this.getView().byId("idMP").getContent()[key].removeStyleClass("classPurpledot");

                    }
                }
                if (sap.ui.Device.system.phone) {
                    for (var key1 in this.getView().byId("idMP").getContent()) {
                        this.getView().byId("idMP").getContent()[key1].removeStyleClass("suplierCss");
                        this.getView().byId("idMP").getContent()[key1].addStyleClass("suplierCssMobile");
                    }
                }
                if (sap.ui.Device.system.tablet) {
                    for (var key1 in this.getView().byId("idMP").getContent()) {
                        this.getView().byId("idMP").getContent()[key1].removeStyleClass("suplierCss");
                        this.getView().byId("idMP").getContent()[key1].addStyleClass("suplierCssTablet");
                    }
                }
                this.setModel(new JSONModel(models.fnSupplierOnBoarding().getData()), "oSOModel");
            },
            onEditPreview: function (oEvent, sProperty) {
                var oModel = this.getView().getModel("genericTileModel");
                oModel.setProperty(sProperty, true);
            },
            onfnnextpress1: function () {
                var oModel = this.getView().getModel("genericTileModel");
                oModel.setProperty("/sStep1", true);
                oModel.setProperty("/sStep3", false);
                oModel.setProperty("/sStep2", false);
                oModel.setProperty("/sStep4", false);
                oModel.setProperty("/sStep5", false);
                oModel.setProperty("/sStep6", false);
                oModel.setProperty("/sStep7", false);
                oModel.setProperty("/sStep8", false);
                oModel.setProperty("/sStep9", false);
                oModel.setProperty("/sStep10", false);
            },
            onfnnextpress2: function () {
                var oModel = this.getView().getModel("genericTileModel");
                oModel.setProperty("/sStep1", false);
                oModel.setProperty("/sStep3", false);
                oModel.setProperty("/sStep2", true);
                oModel.setProperty("/sStep4", false);
                oModel.setProperty("/sStep5", false);
                oModel.setProperty("/sStep6", false);
                oModel.setProperty("/sStep7", false);
                oModel.setProperty("/sStep8", false);
                oModel.setProperty("/sStep9", false);
                oModel.setProperty("/sStep10", false);
                this.getView().byId("idMP").getContent()[2].addStyleClass("classPurpledot");
                this.getView().byId("idMP").getContent()[1].addStyleClass("classPurpledot2");

            },
            onfnnextpress3: function () {
                var oModel = this.getView().getModel("genericTileModel");
                oModel.setProperty("/sStep1", false);
                oModel.setProperty("/sStep3", true);
                oModel.setProperty("/sStep2", false);
                oModel.setProperty("/sStep4", false);
                oModel.setProperty("/sStep5", false);
                oModel.setProperty("/sStep6", false);
                oModel.setProperty("/sStep7", false);
                oModel.setProperty("/sStep8", false);
                oModel.setProperty("/sStep9", false);
                oModel.setProperty("/sStep10", false);
                this.getView().byId("idMP").getContent()[2].addStyleClass("classPurpledot2");
                this.getView().byId("idMP").getContent()[3].addStyleClass("classPurpledot");


            },

            onfnnextpress6: function () {
                var oModel = this.getView().getModel("genericTileModel");
                oModel.setProperty("/sStep1", false);
                oModel.setProperty("/sStep4", false);
                oModel.setProperty("/sStep3", false);
                oModel.setProperty("/sStep2", false);
                oModel.setProperty("/sStep5", false);
                oModel.setProperty("/sStep6", true);
                oModel.setProperty("/sStep7", false);
                oModel.setProperty("/sStep8", false);
                oModel.setProperty("/sStep9", false);
                oModel.setProperty("/sStep10", false);
                this.getView().byId("idMP").getContent()[5].addStyleClass("classPurpledot2");
                this.getView().byId("idMP").getContent()[6].addStyleClass("classPurpledot");


            },
            onfnnextpress5: function () {
                var oModel = this.getView().getModel("genericTileModel");
                oModel.setProperty("/sStep1", false);
                oModel.setProperty("/sStep4", false);
                oModel.setProperty("/sStep3", false);
                oModel.setProperty("/sStep2", false);
                oModel.setProperty("/sStep5", true);
                oModel.setProperty("/sStep6", false);
                oModel.setProperty("/sStep7", false);
                oModel.setProperty("/sStep8", false);
                oModel.setProperty("/sStep9", false);
                oModel.setProperty("/sStep10", false);
                this.getView().byId("idMP").getContent()[4].addStyleClass("classPurpledot2");
                this.getView().byId("idMP").getContent()[5].addStyleClass("classPurpledot");


            },
            onfnnextpress4: function () {
                var oModel = this.getView().getModel("genericTileModel");
                oModel.setProperty("/sStep1", false);
                oModel.setProperty("/sStep4", true);
                oModel.setProperty("/sStep3", false);
                oModel.setProperty("/sStep2", false);
                oModel.setProperty("/sStep5", false);
                oModel.setProperty("/sStep6", false);
                oModel.setProperty("/sStep7", false);
                oModel.setProperty("/sStep8", false);
                oModel.setProperty("/sStep9", false);
                oModel.setProperty("/sStep10", false);

                this.getView().byId("idMP").getContent()[3].addStyleClass("classPurpledot2");
                this.getView().byId("idMP").getContent()[4].addStyleClass("classPurpledot");


            },
            onfnnextpress7: function () {
                var oModel = this.getView().getModel("genericTileModel");
                oModel.setProperty("/sStep1", false);
                oModel.setProperty("/sStep4", false);
                oModel.setProperty("/sStep3", false);
                oModel.setProperty("/sStep2", false);
                oModel.setProperty("/sStep5", false);
                oModel.setProperty("/sStep6", false);
                oModel.setProperty("/sStep7", true);
                oModel.setProperty("/sStep8", false);
                oModel.setProperty("/sStep9", false);
                oModel.setProperty("/sStep10", false);

                this.getView().byId("idMP").getContent()[6].addStyleClass("classPurpledot2");
                this.getView().byId("idMP").getContent()[7].addStyleClass("classPurpledot");


            },
            onfnnextpress8: function () {
                var oModel = this.getView().getModel("genericTileModel");
                oModel.setProperty("/sStep1", false);
                oModel.setProperty("/sStep4", false);
                oModel.setProperty("/sStep3", false);
                oModel.setProperty("/sStep2", false);
                oModel.setProperty("/sStep5", false);
                oModel.setProperty("/sStep6", false);
                oModel.setProperty("/sStep7", false);
                oModel.setProperty("/sStep8", true);
                oModel.setProperty("/sStep9", false);
                oModel.setProperty("/sStep10", false);

                this.getView().byId("idMP").getContent()[7].addStyleClass("classPurpledot2");
                this.getView().byId("idMP").getContent()[8].addStyleClass("classPurpledot");


            },
            onfnnextpress9: function () {
                var oModel = this.getView().getModel("genericTileModel");
                oModel.setProperty("/sStep1", false);
                oModel.setProperty("/sStep4", false);
                oModel.setProperty("/sStep3", false);
                oModel.setProperty("/sStep2", false);
                oModel.setProperty("/sStep5", false);
                oModel.setProperty("/sStep6", false);
                oModel.setProperty("/sStep7", false);
                oModel.setProperty("/sStep8", false);
                oModel.setProperty("/sStep9", true);
                oModel.setProperty("/sStep10", false);

                this.getView().byId("idMP").getContent()[8].addStyleClass("classPurpledot2");
                this.getView().byId("idMP").getContent()[9].addStyleClass("classPurpledot");


            },
            onfnnextpress10: function () {
                var oModel = this.getView().getModel("genericTileModel");
                oModel.setProperty("/sStep1", false);
                oModel.setProperty("/sStep4", false);
                oModel.setProperty("/sStep3", false);
                oModel.setProperty("/sStep2", false);
                oModel.setProperty("/sStep5", false);
                oModel.setProperty("/sStep6", false);
                oModel.setProperty("/sStep7", false);
                oModel.setProperty("/sStep8", false);
                oModel.setProperty("/sStep9", false);
                oModel.setProperty("/sStep10", true);

                this.getView().byId("idMP").getContent()[9].addStyleClass("classPurpledot2");
                this.getView().byId("idMP").getContent()[10].addStyleClass("classPurpledot");


            },
            onfnnextpress11: function () {
                var that = this;
                if (!that.oPreviewDialog) {
                    that.PreviewDialog = Fragment.load({
                        id: that.createId("fSignUpDialog"),
                        name: "com.spm.suppilerportal.fragments.Preview",
                        controller: that
                    }).then(function (oDialog) {
                        that.oPreviewDialog = oDialog;
                        that.getView().addDependent(that.oPreviewDialog);
                        that.getView().getModel("oLanding").setProperty("/sSubmit", false);
                        var oModel = that.getView().getModel("genericTileModel");
                        oModel.setProperty("/sStep1", false);
                        oModel.setProperty("/sStep3", false);
                        oModel.setProperty("/sStep2", false);
                        oModel.setProperty("/sStep4", false);
                        oModel.setProperty("/sStep5", false);
                        oModel.setProperty("/sStep6", false);
                        oModel.setProperty("/sStep7", false);
                        oModel.setProperty("/sStep8", false);
                        oModel.setProperty("/sStep9", false);
                        oModel.setProperty("/sStep10", false);
                    });
                }
                that.PreviewDialog.then(function (oDialog) {
                    that.oPreviewDialog.open();

                }.bind(that));
            },
            onPressAddContact: function (oEvent) {
                var oData = this.getView().getModel("oSOModel"),
                    aContact = oData.getProperty("/CONTSEQLIST");
                if (aContact === undefined || aContact === null) {
                    aContact = [];
                }
                var oObject = {
                    "OBJECT_TYPE": oData.getProperty("/CONTSEQID/OBJECT_TYPE"),
                    "FIRST_NAME": oData.getProperty("/CONTSEQID/FIRST_NAME"),
                    "POSITION": oData.getProperty("/CONTSEQID/POSITION"),
                    "EMAIL_ADDRESS": oData.getProperty("/CONTSEQID/EMAIL_ADDRESS"),
                    "PHONE_NUMBER": oData.getProperty("/CONTSEQID/PHONE_NUMBER"),
                    "FAX_NUMBER": oData.getProperty("/CONTSEQID/FAX_NUMBER"),
                    "EXT_NUMBER": oData.getProperty("/CONTSEQID/EXT_NUMBER"),
                    "INPUT": false,
                    "TEXT": true
                };
                aContact.push(oObject);
                oData.setProperty("/CONTSEQID/OBJECT_TYPE", "");
                oData.setProperty("/CONTSEQID/FIRST_NAME", "");
                oData.setProperty("/CONTSEQID/POSITION", "");
                oData.setProperty("/CONTSEQID/EMAIL_ADDRESS", "");
                oData.setProperty("/CONTSEQID/PHONE_NUMBER", "");
                oData.setProperty("/CONTSEQID/FAX_NUMBER", "");
                oData.setProperty("/CONTSEQID/EXT_NUMBER", "");
                this.getView().getModel("oSOModel").setProperty("/CONTSEQLIST", aContact);

            },
            onEditAttachmentTable: function (oEvent) {
                var sPath = oEvent.getSource().getBindingContext("oSOModel").getPath();
                this.getView().getModel("oSOModel").setProperty(sPath + "/INPUT", true);
                this.getView().getModel("oSOModel").setProperty(sPath + "/TEXT", false);
            },
            onSaveAttachmentTable: function (oEvent) {
                var sPath = oEvent.getSource().getBindingContext("oSOModel").getPath();
                this.getView().getModel("oSOModel").setProperty(sPath + "/INPUT", false);
                this.getView().getModel("oSOModel").setProperty(sPath + "/TEXT", true);
            },
            onDeleteAttachmentTable: function (oEvent) {
                var sPath = oEvent.getSource().getBindingContext("oSOModel").getPath();
                var sIndex = oEvent.getSource().getBindingContext("oSOModel").getPath().split("/")[2];
                this.getView().getModel("oSOModel").getData().CONTSEQLIST.splice(parseInt(sIndex), 1);
            },
            onEditContactTable: function (oEvent) {
                var sPath = oEvent.getSource().getBindingContext("oSOModel").getPath();
                this.getView().getModel("oSOModel").setProperty(sPath + "/INPUT", true);
                this.getView().getModel("oSOModel").setProperty(sPath + "/TEXT", false);
            },
            onSaveContactTable: function (oEvent) {
                var sPath = oEvent.getSource().getBindingContext("oSOModel").getPath();
                this.getView().getModel("oSOModel").setProperty(sPath + "/INPUT", false);
                this.getView().getModel("oSOModel").setProperty(sPath + "/TEXT", true);
            },
            onDeleteContactTable: function (oEvent) {
                var sPath = oEvent.getSource().getBindingContext("oSOModel").getPath();
                var sIndex = oEvent.getSource().getBindingContext("oSOModel").getPath().split("/")[2];
                this.getView().getModel("oSOModel").getData().ATTACHMENTSSET.splice(parseInt(sIndex), 1);
            },
            getResourceBundle: function () {
                return this.getOwnerComponent().getModel("i18n").getResourceBundle();
            },
            onClickNext: function () {
                this.getView().getModel("oLanding").setProperty("/sNext", false);
                this.getView().getModel("oLanding").setProperty("/sSubmit", true);
                this.getView().byId("idIconTabBar").setSelectedKey("Contact");
            },
            onClickSubmit: function () {
                this.getView().getModel("oLanding").setProperty("/sNext", true);
                this.getView().getModel("oLanding").setProperty("/sSubmit", false);
                this.onCancelForm();
            },
            getRouter: function () {
                return sap.ui.core.UIComponent.getRouterFor(this);
            },

            onfnpresssubmit: function (oEvent) {
                jQuery.sap.require("sap.m.MessageBox");
                var that = this;
                var oData = this.getView().getModel("oFiexibleLayout").getProperty("/SuppOnBoarding");
                oData.push(this.getView().getModel("oSOModel").getData());
                sap.m.MessageBox.success("Request Submittted", {
                    actions: [sap.m.MessageBox.Action.OK],
                    emphasizedAction: sap.m.MessageBox.Action.OK,
                    onClose: function (sAction) {
                        that.onCancelForm();
                        window.parent.location.replace("https://supplierportal-wstkn7335q-as.a.run.app/index.html#/GenericTilesView")
                        // that.getOwnerComponent().getRouter().navTo("GenericTilesView");

                    }
                });
            },
            onCancelForm: function () {
                this.oPreviewDialog.close();
                this.oPreviewDialog.destroy();
                this.oPreviewDialog = undefined;
            },
            AddAttachments: function (oEvent) {
                var oData = this.getView().getModel("oSOModel"),
                    aAttachments = oData.getProperty("/ATTACHMENTSSET");
                if (aAttachments === undefined || aAttachments === null) {
                    aAttachments = [];
                }
                var oObject = {
                    "VENDMSTRSEQID": oData.getProperty("/ATTACHMENTS/VENDMSTRSEQID"),
                    "RETSEQID": oData.getProperty("/ATTACHMENTS/RETSEQID"),
                    "DOCUMENT_TYPE": oData.getProperty("/ATTACHMENTS/DOCUMENT_TYPE"),
                    "DOC_DESCRIPTION": oData.getProperty("/ATTACHMENTS/DOC_DESCRIPTION"),
                    "DOC_EXPIRY": oData.getProperty("/ATTACHMENTS/DOC_EXPIRY"),
                    "File": oData.getProperty("/ATTACHMENTS/File"),
                    "INPUT": false,
                    "TEXT": true
                };
                aAttachments.push(oObject);
                oData.setProperty("/ATTACHMENTS/VENDMSTRSEQID", "");
                oData.setProperty("/ATTACHMENTS/RETSEQID", "");
                oData.setProperty("/ATTACHMENTS/DOCUMENT_TYPE", "");
                oData.setProperty("/ATTACHMENTS/DOC_DESCRIPTION", "");
                oData.setProperty("/ATTACHMENTS/DOC_EXPIRY", "");
                oData.setProperty("/ATTACHMENTS/File", "");
                this.getView().getModel("oSOModel").setProperty("/ATTACHMENTSSET", aAttachments);
            }
        });
    });
