sap.ui.define(
  [
    "./BaseController",
  ],
  function (BaseController) {
    "use strict";

    return BaseController.extend("com.spm.suppilerportal.controller.App", {
      onInit() {
        var oModel = this.getOwnerComponent().getModel("oFiexibleLayout");
        if (sap.ui.Device.system.desktop) {
          oModel.setProperty("/Width", "45rem");
        } else {
          oModel.setProperty("/Width", "100%");
        }
      }
    });
  }
);
