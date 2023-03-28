sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "com/spm/suppilerportal/utils/dataUtil",
    "sap/ui/core/UIComponent",
    "sap/ui/core/Fragment",
    "./Handler"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, dataUtil, UIComponent, Fragment, Handler) {
        "use strict";

        return Controller.extend("com.spm.suppilerportal.controller.LandingView", {
            _onObjectMatched: function (oEvent) {
                this.gotoHome("login");
            },
            onInit: function () {
                // var isMobile = this.getOwnerComponent().getModel("device").getProperty("/system/phone") ? true : false;
                // if(!isMobile){
                //     var oGenericTile = this.getView().byId("page");
                //     oGenericTile.addStyleClass("BgLoginImage");
                // }    

                this.getRouter().getRoute("RouteLandingView").attachPatternMatched(this._onObjectMatched, this);
                var oModel = dataUtil.createJsonModel();

                oModel.setData({
                    "sNext": true,
                    "sSubmit": false,
                    "sLogoImage": sap.ui.require.toUrl("com/spm/suppilerportal/css/image/logo.jpeg")
                });

                this.getView().setModel(oModel, "oLanding");
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
            onfnForgotPassword: function (oEvent) {
                //this.getRouter().navTo("SupplierSignup");
            },
            onSignUp: function (oEvent) {
                this.getRouter().navTo("SupplierRegistration");
            },
            onfnpresssubmit: function () {
                jQuery.sap.require("sap.m.MessageBox");
                var oModel = this.getView().getModel("oLanding"),
                    sName = oModel.getProperty("/sUserName"),
                    sPassword = oModel.getProperty("/sPassword");
                if (sName !== undefined && sName !== null && sPassword !== undefined && sPassword !== null) {
                    // WARNING: For GET requests, body is set to null by browsers.
                    var that = this,
                        oModel = dataUtil.createJsonModel(),
                        _fnRequestLoad = function (e) {
                            if (this.status === 200 && this.readyState === 4) {
                                console.log(this.response);
                                oModel.setData({
                                    "userInfo": this.response,
                                });
                                that.getOwnerComponent().setModel(oModel, "oUserDataModel");
                                var oConfigModel = that.getModel("oConfigModel");
                                oConfigModel.setProperty("/Authorization", this.response.accessToken);
                                oConfigModel.setProperty("/refreshToken", this.response.refreshToken);
                                oConfigModel.setProperty("/expiry", this.response.expiresIn);
                                //xhr.setRequestHeader('Cookie', 'refreshToken=' + oConfigModel.getProperty("/" + requestObject.requestAuth) + ";Path=/; HttpOnly");
                                //document.cookie = "refreshToken" + "=" + this.response.refreshToken +"; " +" Path=/; Domain=.wstkn7335q-as.a.run.app";                    
                                document.cookie = "refreshToken" + "=" + this.response.refreshToken + "; " + " Path=/;";
                                document.cookie = "accessToken" + "=" + this.response.accessToken + ";";
                                document.cookie = "expiryToken" + "=" + this.response.expiresIn + ";";
                                // let date = new Date();
                                //     date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);
                                //     const expires = "expires=" + date.toUTCString();
                                //     document.cookie =
                                //         "selectedApp" +
                                //         "=" +
                                //         JSON.stringify(this.response.accessToken) +
                                //         "; " +
                                //         expires +
                                //         "; path=/";
                                var sessData = { "accessToken": this.response.accessToken };
                                sessionStorage.setItem("oSelectedApp", JSON.stringify(sessData));

                                that.getRouter().navTo("GenericTilesView");
                            } else {
                                Handler._fnErrorMessageDialog(this.response.message);
                                //   that.getRouter().navTo("GenericTilesView");
                            }
                        },
                        _fnRequestError = function (e) {
                            Handler._fnErrorMessageDialog(this.response);
                        },
                        requestObject = {
                            requestType: "POST",
                            load: _fnRequestLoad,
                            error: _fnRequestError,
                            requestURL: "authentication",
                            requestAuth: this.getCookie("refreshToken")
                        }
                    var oPayloaddata = JSON.stringify({
                        "userName": sName,
                        "password": sPassword
                    });
                    Handler._fnGetXhrRequest(that, requestObject, oPayloaddata);

                } else {
                    sap.m.MessageBox.error("Please enter a valid user name/password");
                }
            },
            onCancelForm: function () {
                this._oSignUp.close();
            },


            onAfterRendering: function () {
                var that = this;
                jQuery("input").on("keydown",
                    function (evt) {
                        if (evt.keyCode == 13) {
                            that.onfnpresssubmit();
                        }
                    });
            }
        });
    });
