sap.ui.define([
	"sap/ui/base/Object",
	"sap/m/MessageBox",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/BusyIndicator",
	"sap/m/library",
	"sap/ui/core/library",
	"sap/m/Dialog",
	"sap/m/Button",
	"sap/m/Text",
	"sap/ui/core/Fragment"
], function (UI5Object, MessageBox, JSONModel, BusyIndicator, mobileLibrary, coreLibrary, Dialog, Button, Text, Fragment) {
	"use strict";

	// shortcut for sap.m.ButtonType
	var ButtonType = mobileLibrary.ButtonType;

	// shortcut for sap.m.DialogType
	var DialogType = mobileLibrary.DialogType;

	// shortcut for sap.ui.core.ValueState
	var ValueState = coreLibrary.ValueState;

	return {


		/** 
		 * Generic Confirmation handler Method with multiple subTitle. 
		 * @public
		 */
		_fnShowConfirmationDialog: function (that, oFragmentId, oMessage) {
			if (that._oConfimationFragment !== undefined) {
				this._clearDialog(that._oConfimationFragment);
			}
			var oModel = new JSONModel({
				Id: oFragmentId,
				Title: "Confirm",
				Message: oMessage
			});
			that._pDialog = Fragment.load({
				id: that.createId(oFragmentId),
				name: "workflowconfig.WORKFLOWCONFIG.fragments.Common.GenericConfirm",
				controller: that
			}).then(function (oDialog) {
				that._oConfimationFragment = oDialog;
				that.getView().addDependent(that._oConfimationFragment);
				that._oConfimationFragment.setModel(oModel);
				that._oConfimationFragment.open();
				that._oConfimationFragment.setEscapeHandler(function () {
					return;
				});
			});
		},

		_clearDialog: function (oDialog) {
			try {
				oDialog.destroy();
				oDialog = undefined;
			} catch (e) { }
		},

		_fnCloseConfirmationDialog: function () {

			try {
				this._oConfimationFragment.close();
				this._oConfimationFragment.destroy();
			} catch (e) { }
		},

		/** 
		 * Generic Success handler Method, which is called when OData response is success. 
		 * @public
		 */
		_fnSuccessMessageDialog: function (that, oMessage, _fnCallBackMethod) {
			that.oSuccessMessageDialog = new Dialog({
				type: DialogType.Message,
				title: "Success",
				titleAlignment: "Center",
				state: ValueState.Success,
				content: new Text({
					text: oMessage
				}),
				beginButton: new Button({
					type: ButtonType.Emphasized,
					text: "OK",
					press: _fnCallBackMethod
				})
			});

			that.oSuccessMessageDialog.open();
		},

		/** 
		 * Generic Error handler Method, which is called when OData response is error. 
		 * @public
		 */

		_fnErrorMessageDialog: function (oMessage) {
			this.oErrorMessageDialog = new Dialog({
				type: DialogType.Message,
				title: "Error",
				titleAlignment: "Center",
				state: ValueState.Error,
				content: new Text({
					text: oMessage
				}),
				beginButton: new Button({
					type: ButtonType.Emphasized,
					text: "OK",
					press: function () {
						this.oErrorMessageDialog.destroy();
					}.bind(this)
				})
			});

			this.oErrorMessageDialog.open();
		},

		_fnGetXhrRequest: function (that, requestObject, data) {
			var oConfigModel = that.getModel("oConfigModel"),
				xhr = new XMLHttpRequest();
			xhr.withCredentials = false;
			
			// Set response state handlers
			if (requestObject.readystatechange !== undefined && requestObject.readystatechange !== null)
				xhr.addEventListener("readystatechange", requestObject.readystatechange);
			if (requestObject.load !== undefined && requestObject.load !== null)
				xhr.addEventListener("load", requestObject.load);
			if (requestObject.error !== undefined && requestObject.error !== null)
				xhr.addEventListener("error", requestObject.error);
			
			xhr.open(requestObject.requestType, oConfigModel.getProperty("/domain") + oConfigModel.getProperty("/" + requestObject.requestURL));
			
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.setRequestHeader("Access-Control-Allow-Origin", "https://sp-teh7la6xqa-as.a.run.app");
			xhr.setRequestHeader("Domain", "https://sp-teh7la6xqa-as.a.run.app");
			xhr.setRequestHeader("Access-Control-Allow-Credentials", "true");
			xhr.setRequestHeader('Access-Control-Allow-Headers','Origin, Content-Type, Accept, Authorization, X-Request-With');
			xhr.setRequestHeader("Access-Control-Allow-Methods",'GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS');
			if(data === "LOGOUT"){				
				//xhr.setRequestHeader('Cookie', 'refreshToken=' + oConfigModel.getProperty("/" + requestObject.requestAuth) + ";Domain=sp-teh7la6xqa-as.a.run.app");
				//xhr.setRequestHeader("Authorization", 'refreshToken=' + oConfigModel.getProperty("/" + requestObject.requestAuth) + ";Path=/; HttpOnly");
				xhr.setRequestHeader("Authorization", oConfigModel.getProperty("/" + requestObject.requestAuth));
				data = "";
			}
			else{
				xhr.setRequestHeader("Authorization", oConfigModel.getProperty("/" + requestObject.requestAuth));
			}
			xhr.responseType = "json";
			if (data !== undefined && data !== null) {
				xhr.send(data);
			} else {
				xhr.send();
			}
		}

	};

});