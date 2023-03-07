sap.ui.define([], function () {
    "use strict";
    return {
        ManditoryFields: function (that, ID) {
            var bValid = ID !== undefined ? true : false;
            this.clearStates(that);
            var bInvalid = false;
            //#1: Inputs fields
            var oFields = that.getView().getControlsByFieldGroupId("InputField");
            oFields.forEach(function (oField) {
                try {
                    if (bValid && oField.getId().indexOf(ID) === -1) {
                        return;
                    }
                    if (validateField(oField, "InputField")) {
                        if (validateField(oField, "InputFieldEntry")) {
                            bInvalid = ErrorState(oField, that);
                        }
                    }
                } catch (e) { }
            });

            //#2: Combobox
            oFields = that.getView().getControlsByFieldGroupId("ComboboxField");
            oFields.forEach(function (oField) {
                try {
                    if (bValid && oField.getId().indexOf(ID) === -1) {
                        return;
                    }
                    if (validateField(oField, "ComboboxField")) {
                        if (validateField(oField, "ComboboxFieldEntry")) {
                            bInvalid = ErrorStateDropDown(oField, that);
                        }
                    } else if (oField.getValueState() === "Error") {
                        bInvalid = true;
                    }
                } catch (e) { }
            });
            //#3:Radio button
            oFields = that.getView().getControlsByFieldGroupId("RadioButtonField");
            oFields.forEach(function (oField) {
                try {
                    if (bValid && oField.getId().indexOf(ID) === -1) {
                        return;
                    }
                    if (validateField(oField, "RadioButtonFieldEntry")) {
                        bInvalid = ErrorStateOnly(oField, that);
                    }
                } catch (e) { }
            });
            //#4: Radio button group
            oFields = that.getView().getControlsByFieldGroupId("RadioButtonGroup");
            oFields.forEach(function (oField) {
                try {
                    if (bValid && oField.getId().indexOf(ID) === -1) {
                        return;
                    }
                    if (validateField(oField, "RadioButtonGroupEntry")) {
                        bInvalid = ErrorStateOnly(oField, that);
                    }

                } catch (e) { }
            });
            //#5: Date
            oFields = that.getView().getControlsByFieldGroupId("DateField");
            oFields.forEach(function (oField) {
                try {
                    if (bValid && oField.getId().indexOf(ID) === -1) {
                        return;
                    }
                    if (oField.getVisible() && oField.getEnabled() && oField.getValueState() !== "Error" && oField.getRequired()) {
                        if (oField.getDateValue() === "" || oField.getDateValue() === null || oField.getDateValue() === undefined) {
                            bInvalid = ErrorState(oField, that);
                        }
                    } else if (oField.getValueState() === "Error") {
                        bInvalid = true;
                    }
                } catch (e) { }
            });
            //#6: Email
            oFields = that.getView().getControlsByFieldGroupId("Email");
            oFields.forEach(function (oField) {
                try {
                    if (bValid && oField.getId().indexOf(ID) === -1) {
                        return;
                    }
                    if (validateField(oField, "Email")) {
                        if (oField.getRequired()) {
                            if (validateField(oField, "EmailEntryReq")) {
                                bInvalid = ErrorState(oField, that);
                            }
                        } else if (oField.getValue().length > 0) {
                            if (validateField(oField, "EmailEntry")) {
                                bInvalid = ErrorState(oField, that);
                            }
                        }
                    } else if (oField.getValueState() === "Error") {
                        bInvalid = true;
                    }
                } catch (e) { }
            });
            //#7:Mobile number
            oFields = that.getView().getControlsByFieldGroupId("MobileNumber");
            oFields.forEach(function (oField) {
                try {
                    if (bValid && oField.getId().indexOf(ID) === -1) {
                        return;
                    }
                    if (validateField(oField, "MobileNumber")) {
                        if (oField.getRequired()) {
                            if (validateField(oField, "MobileNumberEntryReq")) {
                                bInvalid = ErrorState(oField, that);
                            }
                        } else if (oField.getValue().length > 0) {
                            if (validateField(oField, "MobileNumberEntry")) {
                                bInvalid = ErrorState(oField, that);
                            }
                        }
                    } else if (oField.getValueState() === "Error") {
                        bInvalid = true;
                    }
                } catch (e) { }
            });
            //#15: Number
            oFields = that.getView().getControlsByFieldGroupId("Number");
            oFields.forEach(function (oField) {
                try {
                    if (bValid && oField.getId().indexOf(ID) === -1) {
                        return;
                    }
                    if (validateField(oField, "Number")) {
                        if (oField.getRequired()) {
                            if (validateField(oField, "NumberEntryReq")) {
                                bInvalid = ErrorState(oField, that);
                            }
                        } else if (oField.getValue().length > 0) {
                            if (validateField(oField, "NumberEntry")) {
                                bInvalid = ErrorState(oField, that);
                            }
                        }
                    } else if (oField.getValueState() === "Error") {
                        bInvalid = true;
                    }
                } catch (e) { }
            });
            var test = true;
            if (bInvalid) {
                oFields = that.getView().getControlsByFieldGroupId();
                for (var i = 0; i < oFields.length; i++) {
                    try {
                        if (oFields[i].getValueState() === "Error") {
                            Focus(oFields[i]);
                            break;
                        }
                    } catch (e) { }
                }
            }

            return bInvalid;
        },

        // Clear States
        clearStates: function (that) {
            var fields = ["InputField", "ComboboxField", "DateField", "Email", "Number", "MobileNumber",
                "RadioButtonGroup",
                "RadioButtonField"
            ];
            fields.forEach(function (field) {
                var oFields = that.getView().getControlsByFieldGroupId(field);
                oFields.forEach(function (oField) {
                    clearErrorState(oField);
                });
            });
        }
    };

    // Validation on fields specific

    function validateField(oField, fieldGroup) {
        if (fieldGroup === "InputField" && bValidField(oField)) {
            return (oField.getRequired() && oField.getValueState() !== "Error");
        } else if ((fieldGroup === "ComboboxField" || fieldGroup === "MobileNumber" || fieldGroup ===
            "Email" || fieldGroup === "Number" ||
            fieldGroup === "fgCurrency" || fieldGroup === "DateField") &&
            bValidField(oField)) {
            return (oField.getValueState() !== "Error");
        } else if (fieldGroup === "InputFieldEntry" && bValidField(oField)) {
            return (oField.getValue() === undefined || oField.getValue().trim() === "");
        } else if (fieldGroup === "ComboboxFieldEntry" && bValidField(oField)) {
            return (oField.getSelectedItemId() === "" || oField.getSelectedKey() === "" || oField.getSelectedKey() === undefined);
        } else if (fieldGroup === "RadioButtonFieldEntry" && bValidField(oField)) {
            return (oField.getSelected() === false);
        } else if (fieldGroup === "RadioButtonGroupEntry" && bValidField(oField)) {
            return (oField.getSelectedIndex() === -1);
        } else if (fieldGroup === "MobileNumberEntryReq" && bValidField(oField)) {
            return bValidFieldEntry(oField, "mobile");
        } else if (fieldGroup === "MobileNumberEntry" && bValidField(oField)) {
            return (!getPattern("mobile").test(oField.getValue()));
        } else if (fieldGroup === "EmailEntryReq" && bValidField(oField)) {
            return bValidFieldEntry(oField, "email");
        } else if (fieldGroup === "EmailEntry" && bValidField(oField)) {
            return (!getPattern("email").test(oField.getValue()));
        } else if (fieldGroup === "NumberEntryReq" && bValidField(oField)) {
            return bValidFieldEntry(oField, "Numaric");
        } else if (fieldGroup === "NumberEntry" && bValidField(oField)) {
            return (!getPattern("Numaric").test(oField.getValue()));
        } else if (fieldGroup === "fgDateEntry" && bValidField(oField)) {
            return (oField.getValue() === undefined || oField.getDateValue().trim() === "" || oField.getDateValue() === null || oField.getDateValue() ===
                undefined);
        }
    }

    function bValidField(oField) {
        try {
            return (oField.getVisible()) ? (oField.getEnabled() && oField.getEditable()) : false;
        } catch (e) {
            return true;
        }

    }


    function bValidFieldEntry(oField, pattern) {
        try {
            return (oField.getValue() === undefined || oField.getValue().trim() === "" || !getPattern(pattern).test(oField.getValue()));
        } catch (e) {
            return false;
        }
    }
    // Focus on fields
    function Focus(oField) {
        try {
            oField.focus();
            return false;
        } catch (e) {
            return true;
        }
    }

    function ErrorMessage(id, that) {
        try {
            var errorMessage = "ERROR_";
            if (id !== null && id !== undefined) {
                var tempid = id.split("--")[id.split("--").length - 1];
                errorMessage += tempid;
            }
            errorMessage = that.getResourceBundle().getText(errorMessage);
            errorMessage = errorMessage.indexOf("ERROR_") === 0 ? that.getResourceBundle().getText("ERROR_GENERIC") : errorMessage;
            errorMessage = errorMessage.indexOf("ERROR_") === 0 ? "Invalid Entry" : errorMessage;
            return errorMessage;
        } catch (e) {
            return "Invalid Entry";
        }
    }


    function ErrorState(oField, that) {
        try {
            oField.setValueState("Error");
            if (oField.getValueStateText() !== undefined && oField.getValueStateText() !== "" && oField.getValueStateText().length > 1) {
                oField.setValueStateText(oField.getValueStateText());
            } else {
                oField.setValueStateText(ErrorMessage(oField.getId(), that));
            }

            return true;
        } catch (e) { }
    }

    function ErrorStateDropDown(oField, that) {
        var sKey = oField.getSelectedKey();
        var sValue = oField.getValue();
        try {
            oField.setValueState("Error");
            if (oField.getValueStateText() !== undefined && oField.getValueStateText() !== "" && oField.getValueStateText().length > 1 &&
                !sKey && sValue !== "") {
                oField.setValueStateText(oField.getValueStateText());
            } else {
                oField.setValueStateText(ErrorMessage(oField.getId(), that));
            }

            return true;
        } catch (e) { }
    }

    function ErrorStateOnly(oField, that) {
        try {
            oField.setValueState("Error");
            return true;
        } catch (e) { }
    }

    function setDateErrorState(oField, type) {
        try {
            var msg = "";
            if (type === "SG") {
                msg = "Start date is greater than End date";
            } else if (type === "EL") {
                msg = "End date is lower than Start date";
            } else {
                msg = "Invalid date";
            }
            oField.setValueState("Error");
            oField.setValueStateText(msg);
            return true;
        } catch (e) { }
    }
    // Clearing the ValueState
    function clearErrorState(oField) {
        try {
            if (oField.getValueState() === "Error" && oField.getVisible() && oField.getEnabled()) {
                oField.setValueState("None");
            }
        } catch (e) { }
    }
    function getPattern(patternName) {
        if (patternName === "Numaric") {
            return /^\d+$/;
        } else if (patternName === "email") {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        } else if (patternName === "mobile") {
            return /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]{8,10}$/g;
        } else if (patternName === "Empty") {
            return /\S+/;
        } else if (patternName === "Decimal") {
            return /\S+/;
        }
    }

}, /* bExport= */ true);