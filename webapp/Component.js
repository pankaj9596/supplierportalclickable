/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */
sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "com/spm/suppilerportal/model/models",
    "./controller/ErrorHandler",
],
    function (UIComponent, Device, models, ErrorHandler) {
        "use strict";

        return UIComponent.extend("com.spm.suppilerportal.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);
                // enable routing
                this.getRouter().initialize();
                this._oErrorHandler = new ErrorHandler(this);
                // set the device model
                this.setModel(models.createDeviceModel(), "device");
                this.setModel(models.fnSupplierRegistration(), "oSRModel");
                this.setModel(models.fnSupplierOnBoarding(), "oSOModel");
                this.setModel(models.fnFlexiable(), "oFiexibleLayout");
				this.setModel(models.fnNPI(), "oNPI");
                // this.setModel(models.fnPayload(), "oMainModel");
                this.setModel(models.fnMasterData(), "oMainModel");
            },
            destroy: function () {
                this._oErrorHandler.destroy();
                // call the base component's destroy function
                UIComponent.prototype.destroy.apply(this, arguments);
            },
            getContentDensityClass: function () {
                if (this._sContentDensityClass === undefined) {
                    // check whether FLP has already set the content density class; do nothing in this case
                    if (jQuery(document.body).hasClass("sapUiSizeCozy") || jQuery(document.body).hasClass("sapUiSizeCompact")) {
                        this._sContentDensityClass = "";
                    } else if (!Device.support.touch) { // apply "compact" mode if touch is not supported
                        this._sContentDensityClass = "sapUiSizeCozy";
                    } else {
                        // "cozy" in case of touch support; default for most sap.m controls, but needed for desktop-first controls like sap.ui.table.Table
                        this._sContentDensityClass = "sapUiSizeCozy";
                    }
                }
                return this._sContentDensityClass;
            },


        });
    }
);