sap.ui.define([
    "sap/ui/core/ValueState"
], function (ValueState) {
    "use strict";

    return {

        /**
         * Rounds the number unit value to 2 digits
         * @public
         * @param {string} sValue the number string to be rounded
         * @returns {string} sValue with 2 digits rounded
         */
        onRadioButton: function (sVal) {
            if (sVal === "" || sVal === undefined) {
                return sVal = -1;
            } else {
                return sVal;
            }
        },
        onColumnVisible: function (sVal) {

            switch (sVal) {
                case "TwoColumnsMidExpanded":
                case "MidColumnFullScreen":
                    return false;
                default:
                    return true;
            }
        }
    };

});