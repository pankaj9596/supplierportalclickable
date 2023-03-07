sap.ui.define(
  [
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "com/spm/suppilerportal/utils/dataUtil",
    "sap/ui/Device",
    "sap/ui/core/Fragment",
  ],
  // /**
  //  * @param {typeof sap.ui.core.mvc.Controller} Controller
  //  */
  function (BaseController, JSONModel, dataUtil, Device,Fragment) {
    "use strict";

    return BaseController.extend(
      "com.spm.suppilerportal.controller.GenericTilesView",
      {
        _onObjectMatched: function (oEvent) {
          this.gotoHome();
        },
        onInit: function () {          
          this.getRouter().getRoute("GenericTilesView").attachPatternMatched(this._onObjectMatched, this);                  
          this._fnCoreApplicationModel();
        },
        _fnCoreApplicationModel: function () {
          var obj = {};
          obj.URL = "";
          var oModel = new JSONModel();
          oModel.setData(obj);
          this.getOwnerComponent().setModel(oModel, "CoreRoutingModel");
          sap.ui.getCore().setModel(oModel, "SapCoreRoutingModel");
        },

        onImageClick: function (oEvent) {
          var sText = oEvent
            .getSource()
            .getBindingContext("ApplicationModel")
            .getObject().appName;
          var sUrl = oEvent
            .getSource()
            .getBindingContext("ApplicationModel")
            .getObject().URL;
          var oSelectedApp = oEvent
            .getSource()
            .getBindingContext("ApplicationModel")
            .getObject();
          this.getOwnerComponent()
            .getModel("CoreRoutingModel")
            .setProperty("/selectedApplication", oSelectedApp);
          //this._fnSetCookies(oSelectedApp);
          this.getRouter().navTo("IframeApp");

          // switch (sText) {
          //   case "Supplier Onboarding forms":
          //     this.getRouter().navTo("SupplierOnboarding");
          //     break;

          //   case "Retailer Request Approval":
          //     this.getRouter().navTo("FlexibleColumnLayout", { Type: "1" });
          //     break;
          //   case "Vendor Master":
          //     this.getRouter().navTo("FlexibleColumnLayout", { Type: "2" });
          //     break;
          //   case "New Product Introduction":
          //     this.getRouter().navTo("NewProductIntroduction");
          //     break;

          //   default:
          //     break;
          // }
        },
        _fnSetCookies: function (oSelectedApp) {
          let date = new Date();
          date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);
          const expires = "expires=" + date.toUTCString();
          document.cookie =
            "selectedApp" +
            "=" +
            JSON.stringify(oSelectedApp) +
            "; " +
            expires +
            "; path=/";
          sessionStorage.setItem("oSelectedApp", JSON.stringify(oSelectedApp));
          window.parent.postMessage(
            { message: "getAppData", value: oSelectedApp },
            "*"
          );
        },
        //handleUserPress:function (oEvent) {
        //  this.oUserPress(oEvent);
          // var oButton = oEvent.getSource(),
          //   oView = this.getView();
          // var that = this;
          // if (!this._pQuickView) {
          //   this._pQuickView = Fragment.load({
          //     id: that.createId("UserInforDialog"),
          //     name: "com.spm.suppilerportal.fragments.QuickViewAvatarConfiguration",
          //     controller: this
          //   }).then(function (oQuickView) {
          //     oQuickView.setModel(this.oModel);
          //     oView.addDependent(oQuickView);
          //     return oQuickView;
          //   }.bind(this));
          // }
          // // var fragement = sap.ui.xmlfragment("com.spm.suppilerportal.fragments.QuickViewAvatarConfiguration", this);
          // // fragement.setPlacement(sap.m.PlacementType.Left);
          // this._pQuickView.then(function(oQuickView) {
          //   oQuickView.openBy(oButton);
          // });
        //},
      }
    );
  }
);
