sap.ui.define([
    "sap/base/Log"
], function (Log) {
    "use strict";
    return {
        fnBasePath: "https://spusermgmt-teh7la6xqa-as.a.run.app",
        // fnBasePath: "http://localhost:8080",
        fnCreate: function (sPath, oParameters, oPayLoad, oObjectId, ref) {
            try {
                if (oObjectId) {
                    var srvPayload = {};
                    srvPayload.sPath = sPath;
                    srvPayload.oParameters = oParameters;
                    srvPayload.oPayLoad = oPayLoad;
                    signoffUtil.onSignOffClk(oObjectId, oParameters, ref, function (srPayload, user) {
                        this._fnPostData(srPayload.sPath, srPayload.oParameters, srPayload.oPayLoad, user);
                    }.bind(this, srvPayload));

                    return;
                }
                this._fnPostData(sPath, oParameters, oPayLoad, function (response) {
                    console.log("Request successful: ", response);
                }, function (xhr, textStatus, errorThrown) {
                    console.log("Request failed: ", xhr, textStatus, errorThrown);
                });
            } catch (e) {
                Log.error("Exception in fnCreate function");
            }
        },
        _fnPostData: function (sPath, oPayLoad, successCallback, errorCallback) {
            try {

                var settings = {
                    "url": this.fnBasePath + sPath,
                    "method": "POST",
                    "timeout": 0,
                    "dataType": "json",
                    "contentType": "application/json",
                    "data": JSON.stringify(
                        oPayLoad
                    )
                };

                $.ajax(settings)
                    .done(function (response, textStatus, xhr) {
                        if (successCallback) {
                            successCallback(xhr, textStatus, response);
                        }
                    }).fail(function (xhr, textStatus, errorThrown) {
                        if (errorCallback) {
                            errorCallback(xhr, textStatus, errorThrown);
                        }
                    });
            } catch (e) {
                Log.error("Exception in _fnPostData function");
            }
        },
        _fnGetData: function (sPath, successCallback, errorCallback) {
            try {

                var settings = {
                    "url": this.fnBasePath + sPath,
                    "method": "GET",
                    "timeout": 0,
                    "dataType": "json",
                    "contentType": "application/json"
                };

                $.ajax(settings)
                    .done(function (response, textStatus, xhr) {
                        if (successCallback) {
                            successCallback(xhr, textStatus, response);
                        }
                    }).fail(function (xhr, textStatus, errorThrown) {
                        if (errorCallback) {
                            errorCallback(xhr, textStatus, errorThrown);
                        }
                    });
            } catch (e) {
                Log.error("Exception in _fnPostData function");
            }
        },
        fnCheckForParameters: function (oParameters) {
            try {
                var isQueryParam = false;
                if (!oParameters) {
                    oParameters = {};
                }
                if (!oParameters.success) {
                    oParameters.success = function () { };
                }
                if (!oParameters.error) {
                    oParameters.error = function () { };
                }
                if (oParameters.filter) {
                    isQueryParam = true;
                }
                if (oParameters.expand) {
                    isQueryParam = true;
                }
                if (!oParameters.queryParam) {
                    oParameters.queryParam = "";
                }

                if (isQueryParam) {
                    oParameters.queryParam = "?";
                    oParameters.queryParam = oParameters.queryParam + (oParameters.expand === undefined ? "" : "$expand=" + oParameters.expand);
                    oParameters.queryParam = oParameters.queryParam + (oParameters.filter === undefined ? "" : "" + oParameters.filter);

                }
                if (!isQueryParam) {
                    // oParameters.queryParam = "?";


                }
                return oParameters;
            } catch (e) {
                Log.error("Exception in fnCheckForParameters function");
            }
        },

        fnEncryptDetails: function (user, xhr) {
            try {
                var act = user.activity === undefined ? "99" : user.activity;
                var bioid = user.bioid === undefined ? "" : user.bioid;
                var signAuth = dataUtil._AESHexEncript(user.username + ":" + user.password + ":" + user.objid + ":" + bioid + ":" + act);
                xhr.setRequestHeader("signAuth", signAuth);
                xhr.setRequestHeader("uname", user.username);
            } catch (e) {
                Log.error("Exception in fnEncryptDetails function");
            }
        },
    };
}, true); // <-- Enables accessing this module via global name "path.to.my.formatter"