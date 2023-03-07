/*global QUnit*/

sap.ui.define([
	"comspm/suppilerportal/controller/LandingView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("LandingView Controller");

	QUnit.test("I should test the LandingView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
