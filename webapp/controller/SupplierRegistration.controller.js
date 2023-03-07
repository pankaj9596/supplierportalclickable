sap.ui.define(
	[
		"./BaseController",
		"sap/ui/model/json/JSONModel",
		"com/spm/suppilerportal/utils/dataUtil",
		"com/spm/suppilerportal/utils/serviceUtil",
		"sap/ui/core/UIComponent",
		"sap/ui/core/Fragment",
		"../model/mandatoryfields",
		"com/spm/suppilerportal/model/models",
		"sap/m/MessageBox",
	],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (
		Controller,
		JSONModel,
		dataUtil,
		serviceUtil,
		UIComponent,
		Fragment,
		mandatoryfields,
		models,
		MessageBox
	) {
		"use strict";

		return Controller.extend(
			"com.spm.suppilerportal.controller.SupplierRegistration", {
				onInit: function () {
					var oModel = dataUtil.createJsonModel();
					oModel.setData({
						sNext: true,
						sSubmit: false,
						sLogoImage: sap.ui.require.toUrl(
							"com/spm/suppilerportal/css/image/logo.jpeg"
						),
					});
					this.getView().setModel(oModel, "oLanding");
					var oModel = new sap.ui.model.json.JSONModel({
						Designation: "",
						Name: "",
						LandPhoneNo: "",
						MobileNo: "",
						Email: "",
						aContact: [],
						sStep1: true,
						sStep2: false,
						sStep3: false,
					});
					this.getView().setModel(oModel, "genericTileModel");
					this.getRouter()
						.getRoute("SupplierRegistration")
						.attachPatternMatched(this._onObjectMatched, this);
				},
				_onObjectMatched: function (oEvent) {
					this.gotoHome("register");
					var oModel = this.getView().getModel("genericTileModel");
					oModel.setProperty("/sStep1", true);
					oModel.setProperty("/sStep3", false);
					oModel.setProperty("/sStep2", false);
					this.getView()
						.byId("idMP")
						.getContent()[2]
						.removeStyleClass("classPurpledot");
					this.getView()
						.byId("idMP")
						.getContent()[1]
						.removeStyleClass("classPurpledot2");
					if (sap.ui.Device.system.phone) {
						for (var key in this.getView().byId("idMP").getContent()) {
							this.getView()
								.byId("idMP")
								.getContent()[key].removeStyleClass("vendorCss");
							this.getView()
								.byId("idMP")
								.getContent()[key].addStyleClass("vendorCssMobile");
						}
					}
					if (sap.ui.Device.system.tablet) {
						for (var key in this.getView().byId("idMP").getContent()) {
							this.getView()
								.byId("idMP")
								.getContent()[key].removeStyleClass("vendorCss");
							this.getView()
								.byId("idMP")
								.getContent()[key].addStyleClass("vendorCssTablet");
						}
					}

					this.setModel(
						new JSONModel(models.fnSupplierRegistration().getData()),
						"oSRModel"
					);
				},
				onfnnextpress1: function () {
					var oModel = this.getView().getModel("genericTileModel");
					oModel.setProperty("/sStep1", true);
					oModel.setProperty("/sStep3", false);
					oModel.setProperty("/sStep2", false);
				},
				onfnnextpress2: function () {
					var that = this;
					// mandatoryfields.clearStates(that);
					// if (mandatoryfields.ManditoryFields(that,"")) {
					//     return;
					// }
					var oModel = this.getView().getModel("genericTileModel");
					oModel.setProperty("/sStep1", false);
					oModel.setProperty("/sStep3", false);
					oModel.setProperty("/sStep2", true);
					this.getView()
						.byId("idMP")
						.getContent()[2]
						.addStyleClass("classPurpledot");
					this.getView()
						.byId("idMP")
						.getContent()[1]
						.addStyleClass("classPurpledot2");
				},
				onfnnextpress3: function () {
					var oModel = this.getView().getModel("genericTileModel");
					oModel.setProperty("/sStep1", false);
					oModel.setProperty("/sStep3", true);
					oModel.setProperty("/sStep2", false);
					this.getView()
						.byId("idMP")
						.getContent()[2]
						.addStyleClass("classPurpledot2");
					this.getView()
						.byId("idMP")
						.getContent()[3]
						.addStyleClass("classPurpledot");
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
                var oData = this.getView().getModel("oFiexibleLayout").getProperty("/SupRegis");
                oData.push(this.getView().getModel("oSRModel").getData());
                sap.m.MessageBox.success("Request Submitted", {
                    actions: [sap.m.MessageBox.Action.OK],
                    emphasizedAction: sap.m.MessageBox.Action.OK,
                    onClose: function (sAction) {
                        that.getOwnerComponent().getRouter().navTo("RouteLandingView");
                    }
                });
                
                // autual integration
				/*	var aPayload = [];
					var oPayload = Object.assign({},
						this.getView().getModel("oSRModel").getData()
					);
					delete oPayload.date;
					aPayload.push(oPayload);
					var sRelativePath = "/supplier/guest";
					serviceUtil._fnPostData(
						sRelativePath,
						aPayload,
						function (xhr, textStatus, response) {
							MessageBox.success("Registration is successfully completed..!!", {
								actions: [sap.m.MessageBox.Action.OK],
								emphasizedAction: sap.m.MessageBox.Action.OK,
								onClose: function (sAction) {
									that.getOwnerComponent().getRouter().navTo("RouteLandingView");
								},
							});
						},
						function (xhr, textStatus, errorThrown) {
							var sErrorMessage = "Failed to create requests..!!";
							if (xhr.status === 500) {
								sErrorMessage = "Registration is not successfully completed..!! Please try again..!!";
							} else if (xhr.status === 400) {
								sErrorMessage = xhr.responseJSON.message;
							}
							MessageBox.error(sErrorMessage);
						}
					);*/
				},
			}
		);
	}
);