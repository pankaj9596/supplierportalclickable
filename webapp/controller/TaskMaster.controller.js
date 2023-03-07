sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "com/spm/suppilerportal/utils/dataUtil",
    "sap/ui/core/UIComponent",
    "sap/ui/core/Fragment",
    "sap/ui/model/Sorter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "../model/formatter",
    "com/spm/suppilerportal/utils/serviceUtil"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, dataUtil, UIComponent, Fragment, Sorter, Filter, FilterOperator, formatter,serviceUtil) {
        "use strict";

        return Controller.extend("com.spm.suppilerportal.controller.TaskMaster", {
            onInit: function () {
                var oModel = dataUtil.createJsonModel();
                oModel.setData({
                    "MasterList": [
                        {
                            Code: "0001",
                            Name: "Unilever",
                            Department: "Household",
                            PrimaryContact: "John",
                            Email: "John@gmail.com",
                            Phone: "123456"
                        },
                        {
                            Code: "0002",
                            Name: "NTUC",
                            Department: "Retail",
                            PrimaryContact: "Abhishek",
                            Email: "Abhishek@gmail.com",
                            Phone: "999999"
                        },
                        {
                            Code: "0003",
                            Name: "NUS",
                            Department: "Retail",
                            PrimaryContact: "Pankaj",
                            Email: "Pankaj@gmail.com",
                            Phone: "9898999"
                        },
                        {
                            Code: "0004",
                            Name: "Gaint",
                            Department: "Retail",
                            PrimaryContact: "Om",
                            Email: "Om@gmail.com",
                            Phone: "996790"
                        }
                    ]
                });

                this.getView().setModel(oModel, "oMasterList");
                this.getRouter().getRoute("TaskMaster").attachPatternMatched(this._onObjectMatched, this);

            },
            _onObjectMatched: function (oEvent) {
                var oFlexiModel = this.getView().getModel("oFiexibleLayout");
                if (sap.ui.Device.system.phone) {
                    oFlexiModel.setProperty("/bColumnVisible", false);
                }
               

            },
            
            onPress: function (oEvent) {
                var oFlexiModel = this.getView().getModel("oFiexibleLayout");
                var sVal;
                oFlexiModel.setProperty("/oSelectedValues", oEvent.getSource().getBindingContext("oFiexibleLayout").getObject());
                if (oFlexiModel.getData().Type !== "1") {
                    if (oEvent.getSource().getBindingContext("oFiexibleLayout").getObject().EXISTING_ASSOC_MF === "") {
                        sVal = -1;
                    } else {
                        sVal = oEvent.getSource().getBindingContext("oFiexibleLayout").getObject().EXISTING_ASSOC_MF;
                    }
                    oFlexiModel.setProperty("/oSelectedValues/EXISTING_ASSOC_MF", sVal);
                }

                oFlexiModel.setProperty("/bColumnVisible", false);
                oFlexiModel.setProperty("/layout", "TwoColumnsMidExpanded");
                this.getOwnerComponent().getRouter().navTo("TaskDetail", { TaskType: "1" });
            },
            onPressSortConfirm: function (oEvent) {
                var sPath, bDescending, aSorters = [],
                    oTable = this.getView().byId("idMastertable"),
                    oSortParams = oEvent.getParameters(),
                    oBinding = oTable.getBinding("items");
                sPath = oSortParams.sortItem.getKey();
                bDescending = oSortParams.sortDescending;
                aSorters.push(new Sorter(sPath, bDescending));
                oBinding.sort(aSorters);
            },
            onPressOverviewTableSort: function (oEvent) {
                var that = this;
                if (!that._sortDialog) {
                    that._pDialog = Fragment.load({
                        name: "com.spm.suppilerportal.fragments.TableSorting",
                        controller: that
                    }).then(function (oDialog) {
                        that._sortDialog = oDialog;
                        that.getView().addDependent(that._sortDialog);
                    });
                }
                that._pDialog.then(function (oDialog) {
                    that._sortDialog.open();
                }.bind(that));

            },
            onSearch: function (oEvent) {
                var oTableSearchState = [],
                    sQuery = oEvent.getParameter("query");
                if (sQuery && sQuery.length > 0) {
                    oTableSearchState = [
                        new Filter("Code", FilterOperator.Contains, sQuery),
                        new Filter("Name", FilterOperator.Contains, sQuery),
                        new Filter("Department", FilterOperator.Contains, sQuery),
                        new Filter("PrimaryContact", FilterOperator.Contains, sQuery),
                        new Filter("Email", FilterOperator.Contains, sQuery),
                        new Filter("Phone", FilterOperator.Contains, sQuery)
                    ];
                }

                this.getView().byId("idMastertable").getBinding("items").filter(oTableSearchState, "Application");
            },
        });
    });
