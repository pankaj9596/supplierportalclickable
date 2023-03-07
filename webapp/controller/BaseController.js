sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "com/spm/suppilerportal/utils/dataUtil",
    "sap/ui/core/UIComponent",
    "sap/ui/core/Fragment",
    "sap/m/Dialog",
	  "sap/m/Button",
    "sap/m/library",
    "sap/ui/core/library",
    "sap/m/Text",    
    "sap/m/CheckBox",
    "./Handler"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, dataUtil, UIComponent, Fragment,Dialog,Button,mobileLibrary,coreLibrary,Text,CheckBox,Handler) {
        "use strict";

      // shortcut for sap.m.ButtonType
      var ButtonType = mobileLibrary.ButtonType;

      // shortcut for sap.m.DialogType
      var DialogType = mobileLibrary.DialogType;
      var DialogType = mobileLibrary.DialogType;

      // shortcut for sap.ui.core.ValueState
	  var ValueState = coreLibrary.ValueState;
    //var that = this;

    var Input = mobileLibrary.Input;      

        return Controller.extend("com.spm.suppilerportal.controller.BaseController", {
            getRouter: function () {
                return UIComponent.getRouterFor(this);
            },
            getModel: function (sName) {
                return this.getView().getModel(sName);
            },
            setModel: function (oModel, sName) {
                return this.getView().setModel(oModel, sName);
            },
            onPressHomePage: function (oEvent) {
                this.getRouter().navTo("GenericTilesView",true);

            },
            getUIControl: function (id, fragmentId) {
                var view = this.getView();
                var control = (fragmentId) ? Fragment.byId(fragmentId, id) : (view.byId(id)) ? view.byId(id) : sap.ui.getCore().byId(id);
                return control;
            },
            handleUserPress:function (oEvent) {
                var oButton = oEvent.getSource(),
                  oView = this.getView();
                var that = this;
                var oModel = this.getOwnerComponent().getModel("oUserDataModel")
                if (!this._pQuickView) {
                  this._pQuickView = Fragment.load({
                    id: that.createId("UserInforDialog"),
                    name: "com.spm.suppilerportal.fragments.QuickViewAvatarConfiguration",
                    controller: this
                  }).then(function (oQuickView) {
                    oQuickView.setModel(oModel);
                    oView.addDependent(oQuickView);
                    return oQuickView;
                  }.bind(this));
                }                
                this._pQuickView.then(function(oQuickView) {
                  oQuickView.openBy(oButton);
                });
              },

              onLogoutPress: function (oEvent) {
                var that = this;
                this.sBusyDialog = new sap.m.BusyDialog();                
                if (!this.oApproveDialog) {
                  this.oApproveDialog = new Dialog({
                    type: DialogType.Message,
                    title: "Are you sure you want to sign out?",
                    titleAlignment: "Center",
                    state: ValueState.Warning,
                    content: new CheckBox({ text: "Sign out from All Devices?" }),
                    beginButton: new Button({                      
                      text: "Cancel",
                      press: function () {                        
                        this.oApproveDialog.close();
                      }.bind(this)
                    }),
                    endButton: new Button({
                      type: ButtonType.Emphasized,
                      text: "Yes",
                      press: function () {
                        this.sBusyDialog.open();
                        that.getLogout(oEvent);
                        this.oApproveDialog.close();
                      }.bind(this)
                    })
                  });
                }
          
                this.oApproveDialog.open();
              },
              
              onProxPress: function (oEvent) {
                var that = this;
                if (!this.oProxyDialog) {
                  this.oProxyDialog = new Dialog({
                    type: DialogType.Message,
                    title: "Are you sure you want Proxy as?",
                    titleAlignment: "Center",
                    state: ValueState.Warning,
                    content: new Input({ required: true }),
                    beginButton: new Button({                      
                      text: "Cancel",
                      press: function () {                        
                        this.oProxyDialog.close();
                      }.bind(this)
                    }),
                    endButton: new Button({
                      type: ButtonType.Emphasized,
                      text: "Yes",
                      press: function () {
                        that.getLogout(oEvent);
                        this.oProxyDialog.close();
                      }.bind(this)
                    })
                  });
                }
          
                this.oProxyDialog.open();
              },

              getLogout:function(oEvent){                                
                var oModel = this.getOwnerComponent().getModel("oUserDataModel");                                    
                    // WARNING: For GET requests, body is set to null by browsers.
              var that = this,              
              _fnRequestLoad = function (e) {
                if (this.status === 200 && this.readyState === 4) {
                  if(that.sBusyDialog){
                    that.sBusyDialog.close();   
                  }
                  sessionStorage.setItem("oSelectedApp", "");
                  document.cookie = "refreshToken=; Path=/;";
                  document.cookie = "accessToken=;";
                  document.cookie = "expiryToken=;";
                  that.getRouter().navTo("RouteLandingView",true);
                } else {
                  if(that.sBusyDialog){
                    that.sBusyDialog.close();
                  }  
                    Handler._fnErrorMessageDialog(this.response.message);                     
                }
            },
            _fnRequestError = function (e) {
                Handler._fnErrorMessageDialog(this.response);
            },            
            requestObject = {
              requestType: "GET",
              load: _fnRequestLoad,
              error: _fnRequestError,                
              requestURL: that.oApproveDialog && that.oApproveDialog.getContent()[0].getSelected() ? "allDevicelogout" : "logout",
              requestAuth: "refreshToken"
              }
                                  
            // if( that.oApproveDialog.getContent()[0].getSelected() ){
            //   var oConfigModel = that.getModel("oConfigModel");  
              
            //   var oPayloaddata = JSON.stringify({
            //     "refreshToken": oConfigModel.getProperty("/Authorization")                
            //   });
            //   requestObject.requestType = "POST";
            //   Handler._fnGetXhrRequest(that, requestObject, oPayloaddata);
            // }  
            // else{
              Handler._fnGetXhrRequest(that, requestObject, "LOGOUT");
            //}

            },

            getCookie:function(cname) {
              let name = cname + "=";
              let decodedCookie = decodeURIComponent(document.cookie);
              let ca = decodedCookie.split(';');
              for(let i = 0; i <ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                  c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                  return c.substring(name.length, c.length);
                }
              }
              return "";
            },
            
              gotoHome:function(reqType){
                var that = this;
                //Check if the user details are available or Access token is available
                if(!reqType && !this.getCookie("accessToken")){   //sessionStorage.getItem("oSelectedApp")
                  that.getRouter().navTo("RouteLandingView",true);
                }
                else if(( this.getCookie("accessToken"))){ //sessionStorage.getItem("oSelectedApp") 
                  if(!this.getOwnerComponent().getModel("oUserDataModel")){                        
                  var oConfigModel = this.getModel("oConfigModel");
                    oConfigModel.setProperty("/Authorization",this.getCookie("accessToken"));//JSON.parse(sessionStorage.getItem("oSelectedApp")).accessToken);   
                    oConfigModel.setProperty("/refreshToken",this.getCookie("refreshToken"));//JSON.parse(sessionStorage.getItem("oSelectedApp")).refreshToken);
                    oConfigModel.setProperty("/expiry",this.getCookie("expiryToken"));//JSON.parse(sessionStorage.getItem("oSelectedApp")).expiresIn);               
                    var sessData = { "accessToken":this.getCookie("accessToken") };
                    sessionStorage.setItem("oSelectedApp", JSON.stringify(sessData) );
                  }
                  if(reqType){
                    this.getRouter().navTo("GenericTilesView",true);
                  }
                  else{                  
              var _fnRequestLoad = function (e) {
                if (this.status === 200 && this.readyState === 4) {   
                  //Set the Application Model
                  var useroModel = dataUtil.createJsonModel();
                    useroModel.setData({
                      "userInfo": this.response// JSON.parse(sessionStorage.getItem("oSelectedApp"))                        
                  });
                  that.getOwnerComponent().setModel(useroModel, "oUserDataModel");   
                  that.fnSessionTimeOut();
                  that.fnresfreshToken();
                  that.setApplication(this.response.applicationList);
                  //that.setUserRole(this.response.rolesList);
                } else {
                    if(this.status === 403){
                      that.getLogout();       
                    }
                    else{
                      Handler._fnErrorMessageDialog(this.response.message); 
                    }
                    
                               
                }
            },
            _fnRequestError = function (e) {
                Handler._fnErrorMessageDialog(this.response);
            },            
            requestObject = {
              requestType: "GET",
              load: _fnRequestLoad,
              error: _fnRequestError,                
              requestURL: "getUserInfo",
              requestAuth: "Authorization"
              }
           
              Handler._fnGetXhrRequest(that, requestObject, "");
            }
                }
                else{
                  //that.getRouter().navTo("RouteLandingView",true);
                }
              },
              // Session Timeout idle: 1080000, 240000
            fnSessionTimeOut: function () {
              var that = this;                                  
              var refreshTime = this.getCookie("expiryToken") * 3333;
                  
              this.idleTime = 0;
              $(document).ready(function () {
                // Increment the idle time counter every minute.
                var idleInterval = setInterval(function(){that.timerIncrement(that)}, refreshTime); // 1 minute
        
                // Zero the idle timer on mouse movement.
                $(this).mousemove(function (e) {
                  this.idleTime = 0;
                });
                $(this).keypress(function (e) {
                  this.idleTime = 0;
                });
            });
        
              
          },
         timerIncrement:function(that) {
          that.idleTime = that.idleTime + 1;
            if (that.idleTime > 1) { // 20 minutes
              if(that.getOwnerComponent().getModel("oUserDataModel") && this.getCookie("accessToken")){
                that.getLogout();   
              }
            }
        },
          fnresfreshToken: function () {
            var that = this;
            if(this.getOwnerComponent().getModel("oUserDataModel") && this.getCookie("accessToken")){
            var refreshTime = this.getCookie("expiryToken")  * 3333;
            var timer = setInterval(function () {                           
              var _fnRequestLoad = function (e) {
                if (this.status === 200 && this.readyState === 4) {   
                  //Set the Access / Refresh token
                  var oConfigModel = that.getModel("oConfigModel");
                  oConfigModel.setProperty("/Authorization",this.response.accessToken);   
                  oConfigModel.setProperty("/refreshToken",this.response.refreshToken);     
                  oConfigModel.setProperty("/expiry",this.response.expiresIn);                                      
                  //sessionStorage.setItem("oSelectedApp", JSON.stringify(this.response));
                  document.cookie = "refreshToken" + "=" + this.response.refreshToken +"; " +" Path=/;";
                  document.cookie = "accessToken" + "=" + this.response.accessToken +";";
                  document.cookie = "expiryToken" + "=" + this.response.expiresIn +";"; 
                  var sessData = {"accessToken" : this.response.accessToken};
                  sessionStorage.setItem("oSelectedApp", JSON.stringify(sessData) );
                } else {
                  that.getRouter().navTo("RouteLandingView",true);
                  //Handler._fnErrorMessageDialog(this.response.message);                     
                }
            },
            _fnRequestError = function (e) {
                Handler._fnErrorMessageDialog(this.response);
            },            
            requestObject = {
              requestType: "GET",
              load: _fnRequestLoad,
              error: _fnRequestError,                
              requestURL: "refreshTokenUrl",
              requestAuth: "refreshToken"
              }
           
              Handler._fnGetXhrRequest(that, requestObject, "LOGOUT");


            }, refreshTime);          
            }
        },
        setApplication:function(aApplicationList){
          var isMobile = this.getOwnerComponent()
            .getModel("device")
            .getProperty("/system/phone")
            ? true
            : false;
          var oGenericTile = this.getView().byId("tileApplicationHomePage");
          var oGenericTileText = this.getView().byId("txtBottomTile");
          var sCount = 18;
          var sWidth = sap.ui.Device.resize.width;
          var sHeight = sap.ui.Device.resize.height;
          if (isMobile) {
            if (sHeight > 800) {
              sCount = 28;
            } else if (sHeight > 700) {
              sCount = 24;
            } else {
              sCount = 20;
            }

            oGenericTile.addStyleClass("mobileGenericTile");
            oGenericTile.addStyleClass("mobileTextLineClamp");
            oGenericTile.addStyleClass("mobileMGTHdrContent");
            oGenericTileText.addStyleClass("mobileTileBottomTextColor");
          } else {
            if (sHeight > 800) {
              sCount = 36;
            } else if (sHeight > 700) {
              sCount = 30;
            } else if (sHeight > 650) {
              sCount = 24;
            } else {
              sCount = 18;
            }
            oGenericTile.addStyleClass("desktopGenericTile");
            oGenericTile.addStyleClass("desktopTextLineClamp");
            oGenericTile.addStyleClass("desktopMGTHdrContent");
            oGenericTileText.addStyleClass("desktopTileBottomTextColor");
          }          

          // var aApplicationList = [
          //   {
          //     BackgroundImage: sap.ui.require.toUrl(
          //       "com/spm/suppilerportal/css/image/New Supplier Registration/New Supplier Registration128.png"
          //     ),
          //     AppName: "Supplier Onboarding forms",
          //     HeaderCount: "2",
          //     URL: "https://supplierportal-teh7la6xqa-as.a.run.app/index.html#/SupplierOnboarding",
          //   },
          //   {
          //     BackgroundImage: sap.ui.require.toUrl(
          //       "com/spm/suppilerportal/css/image/Supplier Master/Supplier Master128.png"
          //     ),
          //     AppName: "Retailer Request Approval",
          //     AppNameTooltip: "Retailer Request Approval",
          //     HeaderCount: "3",
          //     URL: "https://supplierportal-teh7la6xqa-as.a.run.app/index.html#/FlexibleColumnLayout/1",
          //   },
          //   {
          //     BackgroundImage: sap.ui.require.toUrl(
          //       "com/spm/suppilerportal/css/image/Vendor Master/Vendor Master128.png"
          //     ),
          //     AppName: "Vendor Master",
          //     HeaderCount: "6",
          //     URL: "https://supplierportal-teh7la6xqa-as.a.run.app/index.html#/FlexibleColumnLayout/2",
          //   },
          //   {
          //     BackgroundImage: sap.ui.require.toUrl(
          //       "com/spm/suppilerportal/css/image/NPI/NPI128.png"
          //     ),
          //     AppName: "New Product Introduction",
          //     HeaderCount: "12",
          //     URL: "https://npi-teh7la6xqa-as.a.run.app/index.html",
          //   },
          //   {
          //     BackgroundImage: sap.ui.require.toUrl(
          //       "com/spm/suppilerportal/css/image/View Invoice/View Invoice128.png"
          //     ),
          //     AppName: "Email Template",
          //     HeaderCount: "6",
          //     URL: "https://emaildmstemplate-teh7la6xqa-as.a.run.app/index.html",
          //   },
          //   {
          //     BackgroundImage: sap.ui.require.toUrl(
          //       "com/spm/suppilerportal/css/image/View Invoice/View Invoice128.png"
          //     ),
          //     AppName: "Workflow Template",
          //     HeaderCount: "6",
          //     URL: "https://workflowconfig-teh7la6xqa-as.a.run.app/index.html",
          //   },
          //   {
          //     BackgroundImage: sap.ui.require.toUrl(
          //       "com/spm/suppilerportal/css/image/View Invoice/View Invoice128.png"
          //     ),
          //     AppName: "Form Builder",
          //     HeaderCount: "6",
          //     URL: "https://portlet-teh7la6xqa-as.a.run.app/index.html",
          //   },
          //   {
          //     BackgroundImage: sap.ui.require.toUrl(
          //       "com/spm/suppilerportal/css/image/View Invoice/View Invoice128.png"
          //     ),
          //     AppName: "Workflow Template",
          //     HeaderCount: "6",
          //     URL: "https://workflowconfig-teh7la6xqa-as.a.run.app/index.html",
          //   },
          //   {
          //     BackgroundImage: sap.ui.require.toUrl(
          //       "com/spm/suppilerportal/css/image/Supplier Leads/Supplier Leads128.png"
          //     ),
          //     AppName: "Supplier Leads",
          //     HeaderCount: "22",
          //   },
          //   {
          //     BackgroundImage: sap.ui.require.toUrl(
          //       "com/spm/suppilerportal/css/image/ASN Creation/ASN Creation128.png"
          //     ),
          //     AppName: "ASN Creation",
          //     HeaderCount: "34",
          //     URL: "https://deliveryasn-teh7la6xqa-as.a.run.app/index.html",
          //   },
          //   {
          //     BackgroundImage: sap.ui.require.toUrl(
          //       "com/spm/suppilerportal/css/image/Create Invoice/Create Invoice128.png"
          //     ),
          //     AppName: "Create Invoice",
          //     HeaderCount: "776",
          //   },
          //   {
          //     BackgroundImage: sap.ui.require.toUrl(
          //       "com/spm/suppilerportal/css/image/Customer Support/Customer Support128.png"
          //     ),
          //     AppName: "Customer Support",
          //     HeaderCount: "6",
          //   },
          //   {
          //     BackgroundImage: sap.ui.require.toUrl(
          //       "com/spm/suppilerportal/css/image/Delivery Schedule/Delivery Schedule128.png"
          //     ),
          //     AppName: "Delivery Schedule",
          //     HeaderCount: "6",
          //   },
          //   {
          //     BackgroundImage: sap.ui.require.toUrl(
          //       "com/spm/suppilerportal/css/image/Files/Files128.png"
          //     ),
          //     AppName: "Files",
          //     HeaderCount: "6",
          //   },
          //   {
          //     BackgroundImage: sap.ui.require.toUrl(
          //       "com/spm/suppilerportal/css/image/Invoice Correction/Correct Invoice128.png"
          //     ),
          //     AppName: "Invoice Correction",
          //     HeaderCount: "6",
          //   },
          //   {
          //     BackgroundImage: sap.ui.require.toUrl(
          //       "com/spm/suppilerportal/css/image/New PO/New PO128.png"
          //     ),
          //     AppName: "New PO",
          //     HeaderCount: "6",
          //   },
          //   {
          //     BackgroundImage: sap.ui.require.toUrl(
          //       "com/spm/suppilerportal/css/image/Notifications/Notifications128.png"
          //     ),
          //     AppName: "Notifications",
          //     HeaderCount: "6",
          //   },
          //   {
          //     BackgroundImage: sap.ui.require.toUrl(
          //       "com/spm/suppilerportal/css/image/NPI Bulk Upload/NPI Bulk Upload128.png"
          //     ),
          //     AppName: "NPI Bulk Upload",
          //     HeaderCount: "6",
          //   },
          //   {
          //     BackgroundImage: sap.ui.require.toUrl(
          //       "com/spm/suppilerportal/css/image/Payment Dashboard/Payment Dashboard128.png"
          //     ),
          //     AppName: "Payment Dashboard",
          //     HeaderCount: "6",
          //   },
          //   {
          //     BackgroundImage: sap.ui.require.toUrl(
          //       "com/spm/suppilerportal/css/image/Payment Status/Payment Status128.png"
          //     ),
          //     AppName: "Payment Status",
          //     HeaderCount: "6",
          //   },
          //   {
          //     BackgroundImage: sap.ui.require.toUrl(
          //       "com/spm/suppilerportal/css/image/PO Status/PO Status128.png"
          //     ),
          //     AppName: "PO Status",
          //     HeaderCount: "6",
          //   },
          //   {
          //     BackgroundImage: sap.ui.require.toUrl(
          //       "com/spm/suppilerportal/css/image/Price Master/Price Master128.png"
          //     ),
          //     AppName: "Price Master",
          //     HeaderCount: "6",
          //   },
          //   {
          //     BackgroundImage: sap.ui.require.toUrl(
          //       "com/spm/suppilerportal/css/image/Product Master/Product Master128.png"
          //     ),
          //     AppName: "Product Master",
          //     HeaderCount: "6",
          //   },
          //   {
          //     BackgroundImage: sap.ui.require.toUrl(
          //       "com/spm/suppilerportal/css/image/Purchase Order/Purchase Order128.png"
          //     ),
          //     AppName: "Purchase Order",
          //     HeaderCount: "6",
          //     URL: "https://order2pay-teh7la6xqa-as.a.run.app/index.html",
          //   },
          //   {
          //     BackgroundImage: sap.ui.require.toUrl(
          //       "com/spm/suppilerportal/css/image/Review NPI/NPI128.png"
          //     ),
          //     AppName: "Review NPI",
          //     HeaderCount: "6",
          //     URL:"https://npiapproval-teh7la6xqa-as.a.run.app/index.html"
          //   },
          //   {
          //     BackgroundImage: sap.ui.require.toUrl(
          //       "com/spm/suppilerportal/css/image/Sales Reports/Sales Reports128.png"
          //     ),
          //     AppName: "Sales Reports",
          //     HeaderCount: "6",
          //   },
          //   {
          //     BackgroundImage: sap.ui.require.toUrl(
          //       "com/spm/suppilerportal/css/image/Switcher/Switcher128.png"
          //     ),
          //     AppName: "Switcher",
          //     HeaderCount: "6",
          //   },
          //   {
          //     BackgroundImage: sap.ui.require.toUrl(
          //       "com/spm/suppilerportal/css/image/Vendor Scorecard/Vendor Scorecard128.png"
          //     ),
          //     AppName: "Vendor Scorecard",
          //     HeaderCount: "6",
          //   },
          //   {
          //     BackgroundImage: sap.ui.require.toUrl(
          //       "com/spm/suppilerportal/css/image/View ASN/View ASN128.png"
          //     ),
          //     AppName: "View ASN",
          //     HeaderCount: "6",
          //   },
          //   {
          //     BackgroundImage: sap.ui.require.toUrl(
          //       "com/spm/suppilerportal/css/image/View Invoice/View Invoice128.png"
          //     ),
          //     AppName: "View Invoice",
          //     HeaderCount: "6",
          //   },
          // ];

          var aCarousel = [];
          var aApplicationPerLayout = [];
          var counter = 0;
          for (var i = 0; i < aApplicationList.length; i++) {
            counter = counter + 1;
            aApplicationPerLayout.push(aApplicationList[i]);
            if (counter === sCount) {
              aCarousel.push({
                ApplicationPerLayout: aApplicationPerLayout,
              });
              counter = 0;
              aApplicationPerLayout = [];
            }
            if (i === aApplicationList.length - 1 && counter >= 1) {
              aCarousel.push({
                ApplicationPerLayout: aApplicationPerLayout,
              });
            }
          }
          var objCar = {
            Carousel: aCarousel,
          };
          var oModel = new JSONModel();
          oModel.setData(objCar);
          this.getView().setModel(oModel, "ApplicationModel");
        }
        });

    });
