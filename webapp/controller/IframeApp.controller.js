sap.ui.define(
  [
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "com/spm/suppilerportal/utils/dataUtil",
    "sap/ui/Device",
  ],
  // /**
  //  * @param {typeof sap.ui.core.mvc.Controller} Controller
  //  */
  function (BaseController, JSONModel, dataUtil, Device) {
    "use strict";

    return BaseController.extend(
      "com.spm.suppilerportal.controller.IframeApp",
      {
        onInit: function () {
          debugger;
          this.getRouter()
            .getRoute("IframeApp")
            .attachPatternMatched(this._onObjectMatched, this);
        },
        // onAfterRendering : function(){
        //   debugger;
        //   var oSelectedApp = this.getOwnerComponent().getModel("CoreRoutingModel").getProperty("/selectedApplication");
        //   var oHtmlFrame = this.getView().byId("appIframe");
        //       // oHtmlFrame.setSrc(oSelectedApp.URL);
        //       var oFrameContent = oHtmlFrame.$()[0];
        //   console.log(oFrameContent);
        //   oFrameContent.setAttribute("src", oSelectedApp.URL);
        // },
        _onObjectMatched: function (oEvent) {
          //debugger;
          this.gotoHome();
          var oCoreRoutingModel = this.getOwnerComponent().getModel("CoreRoutingModel");
          
          if (oCoreRoutingModel) {
            var that = this;
            this.sBusyDialog = new sap.m.BusyDialog();
            this.sBusyDialog.open();
            setTimeout(function () {
              that.sBusyDialog.close();
            }, 4000);
            var oSelectedApp = oCoreRoutingModel.getProperty("/selectedApplication");
            var oPage = this.getView().byId("iFrameAppPage");
            oPage.removeAllContent();
            oPage.addContent(
              new sap.ui.core.HTML({
                content:
                  '<iframe src="' +
                  oSelectedApp.URL +
                  "\" frameBorder='0' width='100%' height='100%' target='_top' loading='lazy' allowfullscreen=true ></iframe>",
              })
            );
            
          } else {
            this.onPressHomePage();
          }
        },
        onFrameLoad: function () {
          //await new Promise(function(resolve){setTimeout(resolve, 2000)});
          var that = this;
          var timer = 4000;
          var idleInterval = setInterval(function(){that.sBusyDialog.close();}, timer); // 1 minute
          //this.sBusyDialog.close();
        },  
        onExit: function () {
          var oPage = this.getView().byId("iFrameAppPage");
          oPage.destroyContent();
        },
      }
    );
  }
);
