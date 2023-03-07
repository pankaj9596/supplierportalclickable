sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		fnNPI: function () {
			var oNPI = new JSONModel({
				ID: "",
				PRODUCT_ID: "",
				VENDOR_MASTER_ID: "",
				VENDOR_CODE: "",
				PART_NUMBER: "",
				PARENT_FLAG: "",
				RETURN_POLICY: "",
				AVG_LEAD_TIME: "",
				SEL_DEPT_LEVEL1_CODE: "",
				SEL_DEPT_LEVEL1_DESC: "",
				SEL_DEPT_LEVEL2_CODE: "",
				SEL_DEPT_LEVEL2_DESC: "",
				IS_NEW_VENDOR: "",
				IS_VENDOR_APPROVED: "",
				URGENT: "",
				MARKET_EXP_AMOUNT: "",
				MARKET_START_DATE: "",
				MARKET_END_DATE: "",
				PRODUCT_VARIANT_LIST: [{
					ID: 20698,
					S_NO: 1,
					PRODUCT_ID: "",
					FULL_VARIANT_DESC: "",
					SHORT_VARIANT_DESC: "",
					VARIANT_STATUS: "",
					VARIANT_DELETION_REMARKS: "",
					VARIANT_DELETION_STATUS: 0,
					VARIANT_COMMENTS: "",
					FPOL_VARIANT_DESC: "",
					STORE_COUNT: 0,
					CLASS_CODE: "",
					SUB_CLASS_CODE: "",
					EFF_DATE_STOCK_TO_STORE: null,
					CARTON_PER_OUTER_CASE: "",
					OUTER_CASE_DIMENSION_LENGTH: "0",
					OUTER_CASE_DIMENSION_WIDTH: "0",
					OUTER_CASE_DIMENSION_HIEGHT: "0",
					PACK_SIZE: "",
					PACK_SIZE_UOM: "",
					COUNTRY_CODE: "",
					COUNTRY_NAME: "",
					VARIANT_UOM_LIST: [{
						ID: "1",
						PRODUCT_ID: "",
						VARIANT_ID: "",
						UOM: "",
						UOM_NO_CONV: "",
						UOM_UNIT: "",
						EAN_CATEGORY: "",
						ORDERING_UOM: "",
						BARCODE: "",
						WEIGHT: "",
						WIDTH: "",
						DEPTH: "",
						HEIGHT: "",
						BUN: false,
						OUN: false,
						DI: "",
						SUN: "",
						MN_GTIN: "",
						NET_WEIGHT: "",
						WT_UNIT: "",
						ADD_SALES_UNIT: "",
						VALID_FROM: "",
						VALID_TO: "",
						Button: false,
						Volume: ""
					}],
					VARIANRT_PRICING_LIST: [{
						ID: "1",
						PRODUCT_ID: "",
						VENDOR_ID: "",
						VARIANT_ID: "",
						SALES_ORG: "",
						SALES_ORG_DESC: "",
						DIST_CHANNEL: "",
						DIST_CHANNEL_DESC: "",
						PRICE_TYPE: "",
						UNIT_COST_PRICE: "",
						COST_PRICE: "",
						COST_PRICE_MISC: "",
						MISC_UNIT_CP: "",
						CP_CURRENCY: "",
						FOREIGN_UNIT_CP: "",
						FOREIGN_CP: "",
						UNIT_SALES_PRICE: "",
						SP_NO_GST: "",
						SP_W_GST: "",
						GP: "",
						GP_PERCENT: "",
						INTRO_PERIOD_FROM: "",
						INTRO_PERIOD_TO: "",
						CP_UOM: "",
						SP_UOM: "",
						Button: false
					}]
				}],
				PRODUCT_DATA: {
					PRODUCT_TREND: "",
					PRODUCT_ORIGINALITY: "",
					PRODUCT_ID: "",
					PRODUCT_CODE: "",
					PRODUCT_SHORT_DESC: "",
					PRODUCT_FULL_DESC: "",
					MCH_MAIN_KEY: "",
					DEPARTMENT_CODE: "",
					CLASS_CODE: "",
					SUB_CLASS_CODE: "",
					PRODUCT_TYPE: "",
					PRODUCT_STYLE: "",
					PRODUCT_COLOR: "",
					PRODUCT_SIZE: "",
					BRAND_GROUP: "",
					BRAND_CODE: "",
					SEASON_YEAR: "",
					PRODUCT_LISTING: "",
					PRODUCT_STATUS: "",
					PRODUCT_FORMAT: "",
					SEASON_CODE: "",
					PHASE_CODE: "",
					PRODUCT_CATEGORY: "",
					MFR_CODE: "",
					MFR_DESC: "",
					PRIVATE_FLAG: "",
					MERCHANDISE_FLAG: "",
					TAX_CODE: "",
					COUNTRY_OF_ORIGIN: "",
					SHELF_LIFE: "",
					BUYER_LEVEL1_CODE: "",
					BUYER_LEVEL2_CODE: "",
					BUYER_LEVEL3_CODE: "",
					BUYER_LEVEL4_CODE: "",
					BUYER_LEVEL5_CODE: "",
					BUYER_LEVEL6_CODE: "",
					IS_VIA_MASSUPLOAD: ""
				},
				PRODUCT_COMPARISION: [],
				PRODUCT_UOM_LIST: [{
					ID: "1",
					PRODUCT_ID: "",
					VARIANT_ID: "",
					UOM: "",
					UOM_NO_CONV: "",
					UOM_UNIT: "",
					EAN_CATEGORY: "",
					ORDERING_UOM: "",
					BARCODE: "",
					WEIGHT: "",
					WIDTH: "",
					DEPTH: "",
					HEIGHT: "",
					BUN: false,
					OUN: false,
					DI: "",
					SUN: "",
					MN_GTIN: "",
					NET_WEIGHT: "",
					WT_UNIT: "",
					ADD_SALES_UNIT: "",
					VALID_FROM: "",
					VALID_TO: "",
					Button: false,
					Volume: ""
				}],
				PRODUCT_PRICING_LIST: [{
					ID: "1",
					PRODUCT_ID: "",
					VENDOR_ID: "",
					VARIANT_ID: "",
					SALES_ORG: "",
					SALES_ORG_DESC: "",
					DIST_CHANNEL: "",
					DIST_CHANNEL_DESC: "",
					PRICE_TYPE: "",
					UNIT_COST_PRICE: "",
					COST_PRICE: "",
					COST_PRICE_MISC: "",
					MISC_UNIT_CP: "",
					CP_CURRENCY: "",
					FOREIGN_UNIT_CP: "",
					FOREIGN_CP: "",
					UNIT_SALES_PRICE: "",
					SP_NO_GST: "",
					SP_W_GST: "",
					GP: "",
					GP_PERCENT: "",
					INTRO_PERIOD_FROM: "",
					INTRO_PERIOD_TO: "",
					CP_UOM: "",
					SP_UOM: "",
					Button: false
				}],
				PRODUCT_MARKETING_LIST: [

				],
				PRODUCT_PROPOSED_LISTING: [

				],
				PRODUCT_JUSTIFICATION: {
					ID: "",
					PRODUCT_ID: "",
					JUSTIFICATION: ""
				},
				PRODUCT_ATTACHMENT: [

				],
				PRODUCT_ATTACHMENT_FORM: {
					ID: "",
					PRODUCT_ID: "",
					VENDOR_ID: "",
					VARIANT_ID: "",
					ATTACHMENT_TYPE: "",
					DISPLAY_DOCUMENT_NAME: "",
					DOCUMENT_NAME: "",
					DOCUMENT_URL: "",
					DOC_EXPIRY_DATE: "",
					CREATED_BY: "",
					CREATED_ON: "",
					SOURCE_PATH: ""
				},
				PRODUCT_ATTRIBUTE_LIST: [

				],
				COMMENT_LIST: {
					ID: "",
					PRODUCT_ID: "",
					VENDOR_ID: "",
					COMMENT: "",
					USER_ID: "",
					USER_NAME: "",
					USER_ROLE_TYPE: "",
					COMMENT_DATE: "",
					COMMENT_TYPE: ""
				},
				PRODUCT_FORECAST: {
					FORECAST_ATTIBUTES: [

					],
					FORECAST_MONTHS: [

					],
					ID: "",
					PRODUCT_ID: "",
					COMPETING_PRODMSTRSEQID_1: "",
					COMPETING_PRODMSTRSEQID_1_DESC: "",
					COMPETING_PRODMSTRQID_2: "",
					COMPETING_PRODMSTRQID_2_DESC: "",
					COMPETING_PRODMSTRQID_3: "",
					COMPETING_PRODMSTRQID_3_DESC: ""
				}
			});
			return oNPI;

		},
		fnSupplierOnBoarding: function () {
			var oNestle = {
				"DATE": new Date(),
				"VEND_MSTR_ID": "",
				"RETAILER_ID": "RT0002",
				"COMPANY_NAME": "Nestle Philippines Inc",
				"BUSINESS_ENTITY": "Corporation",
				"BUSINESS_CODE": "1002",
				"EMAIL_ID": "NestlePh@gmail.com",
				"VENDOR_CLAIM": "Null",
				"VENDOR_ACCOUNT_GROUP": "Manufacturer",
				
				"PURCHASE_ORDER_CURRENCY": "USD",
				"GCS": "10",
				"GCS_TEXT": "Group 1",
				"TZ_EWM_RELATED": "",
				"NATURE_OF_BUSINESS": "20",
				"NATURE_OF_BUSINESS_TEXT": "Manufacturer",
				"WEBSITE": "www.nestle.com.ph",
				"DELIVER_LEAD_DAYS": "15",
				"DEPARTMENT": "50",
				"DEPARTMENT_TEXT": "Beverages",
				"SUB_DEPARTMENT": "206",
				"SUB_DEPARTMENT_TEXT": "Coffee",
				"EXISTING_ASSOC_MF": -1,
				"ADDSEQID": {
					"ADDRESS_ID": "",
					"ADDRESS_CODE": "",
					"ADDRESS_LINE_1": "Nestle Phillippines Inc",
					"ADDRESS_LINE_2": "Rockwell Center",
					"ADDRESS_LINE_3": "Makati",
					"CITY": "Manila",
					"STATE": "MNL",
					"STATE_TEXT": "Manila",
					"POSTAL_CODE": "1200",
					"COUNTRY_CODE": "PHL",
					"COUNTRY_CODE_TEXT": "Philippines",
					"ADDRESS_TYPE": "10",
					"ADDRESS_TYPE_TEXT": "Registered Office Address"
				},
				"CONTSEQID": {
					"RETAILER_ID": "",
					"OBJECT_ID": "",
					"OBJECT_TYPE": "10",
					"OBJECT_TYPE_TEXT": "Primary",
					"FIRST_NAME": "Johnathan",
					"MIDDLE_NAME": "",
					"LAST_NAME": "Wick",
					"POSITION": "Supply Chain Manager",
					"DEPARTMENT": "Food",
					"PHONE_NUMBER": "+1 789099090",
					"EMAIL_ADDRESS": "Johnathan@unilever.com",
					"FAX_NUMBER": "",
					"EXT_NUMBER": "",
				},
				"CONTSEQLIST": [

				],
				"RTV_ALLOWED": "Yes",
				"RTV_ALLOWED_TEXT": "Yes",
				"RTV_REMARKS": "",
				"CREDIT_PERIOD": "40",
				"CREDIT_PERIOD_TEXT": "Within 45 Days",
				"SHIP_CONDITION": "10",
				"SHIP_CONDITION_TEXT": "Weekday",
				"CASH_MGMT_GRP": "10",
				"CASH_MGMT_GRP_TEXT": "SCM",
				"SORT_KEY": "Yes",
				"REMARKS": "",
				"ADDITIONAL_INFO": "",
				"BANKSEQID": {
					"BANKSEQID": "",
					"RETSEQID": "",
					"OBJECT_ID": "",
					"OBJECT_TYPE": "",
					"PAYMENT_TYPE": "EBT",
					"PAYMENT_TYPE_TEXT": "Electronic Bank Transfer",
					"TAX_TYPE": "20",
					"TAX_TYPE_TEXT": "Revenue",
					"WHT_PERCENT": "10",
					"TAX_NUMBER": "1002",
					"VAT": "VAT08",
					"GST_NUMBER": "GST10002",
					"CHEQUE_DELIVERY_METHOD": "NA",
					"HOLD_PAYMENT": "NA",
					"TERMS_ACCEPTED": "YES",
					"CHEQUE_PAYEE_NAME": "Nestle Phillippines",
					"CHEQUE_COLL_LOC": "Registered Office",
					"CHEQUE_DEL_METHOD": "",
					"PAYMENT_GROUP_KEY": "",
					"CURRENCY": "USD",
					"BANK_NAME": "Philippine National Bank",
					"ACCOUNT_NUMBER": "10000000",
					"IFSC_CODE": "PHNBC00010",
					"ACCOUNT_HOLDER_NAME": "Nestle Phillippines",
					"VALID_FROM": "01/01/2021",
					"VALID_TO": "31/12/2032",
					"Terms of Trade": "NA",
					"REF_DEPOSIT_FEE": "NA",
					"RECON_ACCOUNT": "",
					"EXEMPTION_PERIOD": "",
				},
				"ATTACHMENTS": {
					"VEND_MSTR_ID": "",
					"RETSEQID": "",
					"DOCUMENT_TYPE": "10",
					"DOCUMENT_TYPE_TEXT": "Tax Registration Document",
					"DOC_DESCRIPTION": "Registration Document",
					"DOC_EXPIRY": "31/12/2026",
					"File": "Registration Document.pdf"
				},
				"ATTACHMENTSSET": []
			};
			var oUnilever = {
				"DATE": new Date(),
				"VEND_MSTR_ID": "",
				"RETAILER_ID": "RT0001",
				"COMPANY_NAME": "Unilever Corporation",
				"BUSINESS_ENTITY": "Corporation",
				"BUSINESS_CODE": "1001",
				"EMAIL_ID": "Unilever@gmail.com",
				"VENDOR_CLAIM": "Null",
				"VENDOR_ACCOUNT_GROUP": "Manufacturer",
				"PURCHASE_ORDER_CURRENCY": "USD",
				"GCS": "",
				"TZ_EWM_RELATED": "",
				"NATURE_OF_BUSINESS": "Manufacturer",
				"WEBSITE": "www.Unilever.com",
				"DELIVER_LEAD_DAYS": "10",
				"DEPARTMENT": "Beverages",
				"SUB_DEPARTMENT": "RTD Beverages",
				"EXISTING_ASSOC_MF": -1,
				"ADDSEQID": {
					"ADDSEQID": "",
					"ADDRESS_CODE": "",
					"ADDRESS_LINE_1": "Unilever HQ",
					"ADDRESS_LINE_2": "Englewood Cliffs",
					"ADDRESS_LINE_3": "",
					"CITY": "New Jersey",
					"STATE": "New Jersey",
					"POSTAL_CODE": "08701",
					"COUNTRY_CODE": "USA",
					"ADDRESS_TYPE": "Registered Office Address"
				},
				"CONTSEQID": {
					"RETSEQID": "",
					"OBJECT_ID": "",
					"OBJECT_TYPE": "",
					"FIRST_NAME": "Johnathan",
					"MIDDLE_NAME": "",
					"LAST_NAME": "Wick",
					"POSITION": "Supply Chain Manager",
					"DEPARTMENT": "Food",
					"PHONE_NUMBER": "+1 789099090",
					"EMAIL_ADDRESS": "Johnathan@unilever.com",
					"FAX_NUMBER": "",
					"EXT_NUMBER": "",
				},
				"CONTSEQLIST": [

				],
				"RTV_ALLOWED": "Yes",
				"RTV_REMARKS": "",
				"CREDIT_PERIOD": "60",
				"SHIP_CONDITION": "As per agreement",
				"CASH_MGMT_GRP": "SCM",
				"SORT_KEY": "",
				"REMARKS": "",
				"ADDITIONAL_INFO": "",
				"BANKSEQID": {
					"BANKSEQID": "",
					"RETSEQID": "",
					"OBJECT_ID": "",
					"OBJECT_TYPE": "",
					"PAYMENT_TYPE": "Cheque",
					"TAX_TYPE": "Direct Tax",
					"WHT_PERCENT": "10",
					"TAX_NUMBER": "1001",
					"VAT": "VAT10",
					"GST_NUMBER": "GST10001",
					"CHEQUE_DELIVERY_METHOD": "Mail",
					"HOLD_PAYMENT": "NA",
					"TERMS_ACCEPTED": "YES",
					"CHEQUE_PAYEE_NAME": "Unilever Corp",
					"CHEQUE_COLL_LOC": "Registered Office",
					"CHEQUE_DEL_METHOD": "",
					"PAYMENT_GROUP_KEY": "",
					"CURRENCY": "USD",
					"BANK_NAME": "JPMorgan Chase",
					"ACCOUNT_NUMBER": "10000005",
					"IFSC_CODE": "JPMC00010",
					"ACCOUNT_HOLDER_NAME": "Unilever Corp",
					"VALID_FROM": "01/01/2020",
					"VALID_TO": "31/12/2030",
					"Terms of Trade": "NA",
					"REF_DEPOSIT_FEE": "NA",
					"RECON_ACCOUNT": "",
					"EXEMPTION_PERIOD": "",
				},
				"ATTACHMENTS": {
					"VENDMSTRSEQID": "",
					"RETSEQID": "",
					"DOCUMENT_TYPE": "Registration Document",
					"DOC_DESCRIPTION": "Registration Document",
					"DOC_EXPIRY": "31/12/2025",
					"File": "Registration Document.pdf"
				},
				"ATTACHMENTSSET": []
			};
			var oSupplierOnBoarding = new JSONModel(oNestle);
			return oSupplierOnBoarding;

		},
		fnFlexiable: function () {
			var oFlexable = new JSONModel({
				layout: "OneColumn",
				previousLayout: "",
				Type: "",
				bColumnVisible: true,
				Span: "",
				SupRegis: [],
				SuppOnBoarding: [],
				actionButtonsInfo: {
					midColumn: {
						fullScreen: false,
						exitFullScreen: true,
						closeColumn: false
					}
				}
			});
			return oFlexable;
		},
		fnSupplierRegistration: function () {
			// We have 2 dataset
			var oNestle = {
				"date": new Date(),
				"RETAILER_ID": "RT0002",
				"COMPANY_NAME": "Nestle Philippines Inc",
				"EMAIL_ID": "NestlePh@gmail.com",
				"WEBSITE": "www.nestle.com.ph",
				"REMARKS": "Registration Process",
				"ADDITIONAL_INFO": "",
				"PH_COUNTRY_CODE": "+63",
				"PHONE_NUMBER": "505050505",
				"ALT_PH_COUNTRY_CODE": "+63",
				"ALTERNATE_PHN_NUMBER": "505050506",
				"FAX_NUMBER": "",
				"NATURE_OF_BUSINESS": "20",
					"NATURE_OF_BUSINESS_TEXT": "Manufacturer",
				"DEPARTMENT": "50",
				"DEPARTMENT_TEXT": "Beverages",
				"SUBDEPARTMENT": "206",
				"SUB_DEPARTMENT_TEXT": "Coffee",
				"PRIMARY_CONTACT_NAME": "Andrea",
				"ADDRESS": {
					// "ADDSEQID": "",
					"ADDRESS_CODE": "",
					"ADDRESS_LINE_1": "Nestle Phillippines Inc",
					"ADDRESS_LINE_2": "Rockwell Center",
					"ADDRESS_LINE_3": "Makati",
					"CITY": "Manila",
					"STATE": "MNL",
					"STATE_TEXT": "Manial",
					"POSTAL_CODE": "1200",
					"COUNTRY_CODE": "PHL",
					"COUNTRY_CODE_TEXT": "Philippines",
					"ADDRESS_TYPE": "10",
					"ADDRESS_TYPE_TEXT": "Registered Office Address"
				}
			};
			var oUnilever = {
				"date": new Date(),
				"RETAILER_ID": "RT0001",
				"COMPANY_NAME": "Unilever Corporation",
				"EMAIL_ID": "Unilever@gmail.com",
				"WEBSITE": "www.Unilever.com",
				"REMARKS": "Registration Process",
				"ADDITIONAL_INFO": "",
				"PH_COUNTRY_CODE": "+1",
				"PHONE_NUMBER": "789099090",
				"ALT_PH_COUNTRY_CODE": "+1",
				"ALTERNATE_PHN_NUMBER": "+1 789099091",
				"FAX_NUMBER": "",
				"NATURE_OF_BUSINESS": "20",
				"DEPARTMENT": "50",
				"SUBDEPARTMENT": "206",
				"PRIMARY_CONTACT_NAME": "Johnathan Wick",
				"ADDRESS": {
					// "ADDSEQID": "",
					"ADDRESS_CODE": "",
					"ADDRESS_LINE_1": "Unilever HQ",
					"ADDRESS_LINE_2": "Englewood Cliffs",
					"ADDRESS_LINE_3": "",
					"CITY": "New Jersey",
					"STATE": "NJ",
					"POSTAL_CODE": "08701",
					"COUNTRY_CODE": "USA",
					"ADDRESS_TYPE": "10"
				}
			};
			var oSupplierRegistration = new JSONModel(oNestle);
			return oSupplierRegistration;
		},
		fnUOMForm: function () {
			var oUOMForm = new JSONModel({
				"uom": [{
					"Title": [{
						"title": "Uom Data"
					}],
					"controls": [{
							"Controltype": "Input",
							"value": "{oNPI>/PRODUCT_UOM_LIST>/UOM}",
							"width": "100%",
							"Label": "Uom",
							"required": true,
							"maxLength": 20,
							"fieldGroupIds": "fgInput",
							"valueStateText": "Please input valid value",
							"linebreak": true,
							"Labelvisible": true,
							"span": "XL6 L6 M6 S12",
							"Event": false,
							"change": "onGetVolume"
						}, {
							"Controltype": "Input",
							"value": "{oNPI>/PRODUCT_UOM_LIST>/UOM_NO_CONV}",
							"width": "100%",
							"Label": "UoM Quantity",
							"required": true,
							"maxLength": 20,
							"fieldGroupIds": "fgInput",
							"valueStateText": "Please input valid value",
							"linebreak": false,
							"Labelvisible": true,
							"span": "XL6 L6 M6 S12",
							"Event": false,
							"change": "onGetVolume"
						}, {
							"Controltype": "Text",
							"value": "EA",
							"width": "100%",
							"Label": "Lower Unit",
							"required": false,
							"maxLength": 20,
							"fieldGroupIds": "fgInput",
							"valueStateText": "Please input valid value",
							"linebreak": true,
							"Labelvisible": true,
							"span": "XL6 L6 M6 S12",
							"Event": false
						}, {
							"Controltype": "CheckBox",
							"value": "{oNPI>/PRODUCT_UOM_LIST>/BUN}",
							"width": "100%",
							"Label": "Base Unit",
							"required": true,
							"fieldGroupIds": "fgInput",
							"linebreak": false,
							"Labelvisible": false,
							"span": "XL6 L6 M6 S12",
							"Event": false
						}, {
							"Controltype": "CheckBox",
							"value": "{oNPI>/PRODUCT_UOM_LIST>/OUN}",
							"width": "100%",
							"Label": "Order Unit",
							"required": true,
							"fieldGroupIds": "fgInput",
							"linebreak": true,
							"Labelvisible": false,
							"span": "XL6 L6 M6 S12",
							"Event": false
						}, {
							"Controltype": "Input",
							"value": "{oNPI>/PRODUCT_UOM_LIST>/BARCODE}",
							"width": "100%",
							"Label": "Barcode",
							"required": true,
							"maxLength": 20,
							"fieldGroupIds": "fgInput",
							"valueStateText": "Please input valid value",
							"linebreak": false,
							"Labelvisible": true,
							"span": "XL6 L6 M6 S12",
							"Event": false,
							"change": "onGetVolume"
						}, {
							"Controltype": "Input",
							"value": "{oNPI>/PRODUCT_UOM_LIST>/WEIGHT}",
							"width": "100%",
							"Label": "Gross Weight",
							"required": true,
							"maxLength": 20,
							"fieldGroupIds": "fgInput",
							"valueStateText": "Please input valid value",
							"linebreak": true,
							"Labelvisible": true,
							"span": "XL6 L6 M6 S12",
							"Event": false,
							"change": "onGetVolume"
						}, {
							"Controltype": "Input",
							"value": "{oNPI>/PRODUCT_UOM_LIST>/NET_WEIGHT}",
							"width": "100%",
							"Label": "Net Weight",
							"required": true,
							"maxLength": 20,
							"fieldGroupIds": "fgInput",
							"valueStateText": "Please input valid value",
							"linebreak": false,
							"Labelvisible": true,
							"span": "XL6 L6 M6 S12",
							"Event": false,
							"change": "onGetVolume"
						}, {
							"Controltype": "Input",
							"value": "{oNPI>/PRODUCT_UOM_LIST>/WT_UNIT}",
							"width": "100%",
							"Label": "Net Weight Unit",
							"required": true,
							"maxLength": 20,
							"fieldGroupIds": "fgInput",
							"valueStateText": "Please input valid value",
							"linebreak": true,
							"Labelvisible": true,
							"span": "XL6 L6 M6 S12",
							"Event": false,
							"change": "onGetVolume"
						}, {
							"Controltype": "Input",
							"value": "{oNPI>/PRODUCT_UOM_LIST>/DEPTH}",
							"width": "100%",
							"Label": "Depth",
							"required": true,
							"maxLength": 20,
							"fieldGroupIds": "fgInput",
							"valueStateText": "Please input valid value",
							"linebreak": false,
							"Labelvisible": true,
							"span": "XL6 L6 M6 S12",
							"change": "onGetVolume",
							"Event": true
						}, {
							"Controltype": "Input",
							"value": "{oNPI>/PRODUCT_UOM_LIST>/WIDTH}",
							"width": "100%",
							"Label": "Width",
							"required": true,
							"maxLength": 20,
							"fieldGroupIds": "fgInput",
							"valueStateText": "Please input valid value",
							"linebreak": true,
							"Labelvisible": true,
							"span": "XL6 L6 M6 S12",
							"change": "onGetVolume",
							"Event": true
						}, {
							"Controltype": "Input",
							"value": "{oNPI>/PRODUCT_UOM_LIST/HEIGHT}",
							"width": "100%",
							"Label": "Height",
							"required": true,
							"maxLength": 20,
							"fieldGroupIds": "fgInput",
							"valueStateText": "Please input valid value",
							"linebreak": false,
							"span": "XL6 L6 M6 S12",
							"change": "onGetVolume",
							"Event": true
						}, {
							"Controltype": "Text",
							"value": "",
							"width": "100%",
							"Label": "Volume",
							"required": false,
							"maxLength": 20,
							"fieldGroupIds": "fgInput",
							"valueStateText": "Please input valid value",
							"linebreak": true,
							"Labelvisible": true,
							"span": "XL6 L6 M6 S12",
							"Event": false
						}

					]
				}]

			});
			return oUOMForm;
		},
		fnEmptyUOMForm: function () {
			var oEmptyUOMForm = new JSONModel({
				"uom": [{
					"Title": [{
						"title": "Uom Data"
					}],
					"controls": [{
							"Controltype": "Input",
							"value": "{oNPI>/PRODUCT_UOM_LIST>/UOM}",
							"width": "100%",
							"Label": "Uom",
							"required": true,
							"maxLength": 20,
							"fieldGroupIds": "fgInput",
							"valueStateText": "Please input valid value",
							"linebreak": true,
							"Labelvisible": true,
							"span": "XL6 L6 M6 S12",
							"Event": false,
							"change": "onGetVolume"
						}, {
							"Controltype": "Input",
							"value": "{oNPI>/PRODUCT_UOM_LIST>/UOM_NO_CONV}",
							"width": "100%",
							"Label": "UoM Quantity",
							"required": true,
							"maxLength": 20,
							"fieldGroupIds": "fgInput",
							"valueStateText": "Please input valid value",
							"linebreak": false,
							"Labelvisible": true,
							"span": "XL6 L6 M6 S12",
							"Event": false,
							"change": "onGetVolume"
						}, {
							"Controltype": "Text",
							"value": "EA",
							"width": "100%",
							"Label": "Lower Unit",
							"required": false,
							"maxLength": 20,
							"fieldGroupIds": "fgInput",
							"valueStateText": "Please input valid value",
							"linebreak": true,
							"Labelvisible": true,
							"span": "XL6 L6 M6 S12",
							"Event": false
						}, {
							"Controltype": "CheckBox",
							"value": "{oNPI>/PRODUCT_UOM_LIST>/BUN}",
							"width": "100%",
							"Label": "Base Unit",
							"required": true,
							"fieldGroupIds": "fgInput",
							"linebreak": false,
							"Labelvisible": false,
							"span": "XL6 L6 M6 S12",
							"Event": false
						}, {
							"Controltype": "CheckBox",
							"value": "{oNPI>/PRODUCT_UOM_LIST>/OUN}",
							"width": "100%",
							"Label": "Order Unit",
							"required": true,
							"fieldGroupIds": "fgInput",
							"linebreak": true,
							"Labelvisible": false,
							"span": "XL6 L6 M6 S12",
							"Event": false
						}, {
							"Controltype": "Input",
							"value": "{oNPI>/PRODUCT_UOM_LIST>/BARCODE}",
							"width": "100%",
							"Label": "Barcode",
							"required": true,
							"maxLength": 20,
							"fieldGroupIds": "fgInput",
							"valueStateText": "Please input valid value",
							"linebreak": false,
							"Labelvisible": true,
							"span": "XL6 L6 M6 S12",
							"Event": false,
							"change": "onGetVolume"
						}, {
							"Controltype": "Input",
							"value": "{oNPI>/PRODUCT_UOM_LIST>/WEIGHT}",
							"width": "100%",
							"Label": "Gross Weight",
							"required": true,
							"maxLength": 20,
							"fieldGroupIds": "fgInput",
							"valueStateText": "Please input valid value",
							"linebreak": true,
							"Labelvisible": true,
							"span": "XL6 L6 M6 S12",
							"Event": false,
							"change": "onGetVolume"
						}, {
							"Controltype": "Input",
							"value": "{oNPI>/PRODUCT_UOM_LIST>/NET_WEIGHT}",
							"width": "100%",
							"Label": "Net Weight",
							"required": true,
							"maxLength": 20,
							"fieldGroupIds": "fgInput",
							"valueStateText": "Please input valid value",
							"linebreak": false,
							"Labelvisible": true,
							"span": "XL6 L6 M6 S12",
							"Event": false,
							"change": "onGetVolume"
						}, {
							"Controltype": "Input",
							"value": "{oNPI>/PRODUCT_UOM_LIST>/WT_UNIT}",
							"width": "100%",
							"Label": "Net Weight Unit",
							"required": true,
							"maxLength": 20,
							"fieldGroupIds": "fgInput",
							"valueStateText": "Please input valid value",
							"linebreak": true,
							"Labelvisible": true,
							"span": "XL6 L6 M6 S12",
							"Event": false,
							"change": "onGetVolume"
						}, {
							"Controltype": "Input",
							"value": "{oNPI>/PRODUCT_UOM_LIST>/DEPTH}",
							"width": "100%",
							"Label": "Depth",
							"required": true,
							"maxLength": 20,
							"fieldGroupIds": "fgInput",
							"valueStateText": "Please input valid value",
							"linebreak": false,
							"Labelvisible": true,
							"span": "XL6 L6 M6 S12",
							"change": "onGetVolume",
							"Event": true
						}, {
							"Controltype": "Input",
							"value": "{oNPI>/PRODUCT_UOM_LIST>/WIDTH}",
							"width": "100%",
							"Label": "Width",
							"required": true,
							"maxLength": 20,
							"fieldGroupIds": "fgInput",
							"valueStateText": "Please input valid value",
							"linebreak": true,
							"Labelvisible": true,
							"span": "XL6 L6 M6 S12",
							"change": "onGetVolume",
							"Event": true
						}, {
							"Controltype": "Input",
							"value": "{oNPI>/PRODUCT_UOM_LIST/HEIGHT}",
							"width": "100%",
							"Label": "Height",
							"required": true,
							"maxLength": 20,
							"fieldGroupIds": "fgInput",
							"valueStateText": "Please input valid value",
							"linebreak": false,
							"span": "XL6 L6 M6 S12",
							"change": "onGetVolume",
							"Event": true
						}, {
							"Controltype": "Text",
							"value": "",
							"width": "100%",
							"Label": "Volume",
							"required": false,
							"maxLength": 20,
							"fieldGroupIds": "fgInput",
							"valueStateText": "Please input valid value",
							"linebreak": true,
							"Labelvisible": true,
							"span": "XL6 L6 M6 S12",
							"Event": false
						}

					]
				}]

			});
			return oEmptyUOMForm;
		},
		fnPayload: function () {
			var oPayload = new JSONModel({
				"Header": [{
					ACTION_CODE: "",
					REQ_TYPE: "",
					RETSEQID: "",
					TITLESEQID: "",
					FIRST_NAME: "",
					MIDDLE_NAME: "",
					LAST_NAME: "",
					COMPANY_NAME: "",
					EMAIL_ID: "",
					ALT_EMAIL_ID: "",
					REGISTRATION_DATE: new Date(),
					STORE_COUNT: "",
					EMP_COUNT: "",
					PH_COUNTRY_CODE: "",
					PHONE_NUMBER: "",
					ALT_PH_COUNTRY_CODE: "",
					ALT_PHN_NUMBER: "",
					WEBSITE: "",
					OWNERSHIP_TYPE: "",
					REMARKS: "",
					ADDITIONAL_INFO: "",
					BUSINESS_CODE: "",
					BUSINESS_DESC: "",
					CONCESSIONAIRE_SUPPORT: false,
					STORE_FORMAT: "",
					LOGO: "",
					HEADER_1: "",
					SUBHEADER_1: "",
					SUBHEADER_2: "",
					BACKGROUND_IMAGE: "",
					FAX_NUMBER: "",
					TELE_FAX_NUMBER: "",
					PRIMARY_CONTACT_NAME: "",
					ADDRESS: []
				}],
				"businessCode": [{
					"BUSSEQID": "BUS_00001",
					"RETSEQID": "2022_RET_00001",
					"BUS_CODE": "10",
					"LABEL_CODE": "Distributor",
					"CODE_DESC": "Distributor"
				}, {
					"BUSSEQID": "BUS_00002",
					"RETSEQID": "2022_RET_00001",
					"BUS_CODE": "20",
					"LABEL_CODE": "Manufacturer",
					"CODE_DESC": "Manufacturer"
				}, {
					"BUSSEQID": "BUS_00003",
					"RETSEQID": "2022_RET_00001",
					"BUS_CODE": "30",
					"LABEL_CODE": "License",
					"CODE_DESC": "License"
				}, {
					"BUSSEQID": "BUS_00004",
					"RETSEQID": "2022_RET_00001",
					"BUS_CODE": "40",
					"LABEL_CODE": "Wholesaler",
					"CODE_DESC": "Wholesaler"
				}, {
					"BUSSEQID": "BUS_00005",
					"RETSEQID": "2022_RET_00001",
					"BUS_CODE": "50",
					"LABEL_CODE": "Importer",
					"CODE_DESC": "Importer"
				}, {
					"BUSSEQID": "BUS_00006",
					"RETSEQID": "2022_RET_00001",
					"BUS_CODE": "60",
					"LABEL_CODE": "Broker",
					"CODE_DESC": "Broker"
				}, {
					"BUSSEQID": "BUS_00007",
					"RETSEQID": "2022_RET_00001",
					"BUS_CODE": "70",
					"LABEL_CODE": "Service Provider",
					"CODE_DESC": "Service Provider"
				}],
				"ownerShip": [{
					"RETSEQID": "2022_RET_00001",
					"OBJECT_ID": "2022_OBM_00001",
					"OBJECT_TYPE": "OWNSHIP",
					"OBJECT_CODE": "10",
					"label_code": "Coporation",
					"CODE_DESC": "Ownership Type for Corporation",
					"VALID_FROM": "2022-11-12T16:06:54.000Z",
					"VALID_TO": "2037-12-31T15:52:00.000Z"
				}, {
					"RETSEQID": "2022_RET_00001",
					"OBJECT_ID": "2022_OBM_00002",
					"OBJECT_TYPE": "OWNSHIP",
					"OBJECT_CODE": "20",
					"label_code": "Joint Venture",
					"CODE_DESC": "Ownership Type for Joint Venture",
					"VALID_FROM": "2022-11-12T16:06:58.000Z",
					"VALID_TO": "2037-12-31T15:52:00.000Z"
				}, {
					"RETSEQID": "2022_RET_00001",
					"OBJECT_ID": "2022_OBM_00003",
					"OBJECT_TYPE": "OWNSHIP",
					"OBJECT_CODE": "30",
					"label_code": "Limited Liability Corporation",
					"CODE_DESC": "Ownership Type for Limited Liability Corporation",
					"VALID_FROM": "2022-11-12T16:09:15.000Z",
					"VALID_TO": "2037-12-31T15:52:00.000Z"
				}, {
					"RETSEQID": "2022_RET_00001",
					"OBJECT_ID": "2022_OBM_00004",
					"OBJECT_TYPE": "OWNSHIP",
					"OBJECT_CODE": "40",
					"label_code": "Limited Liability Partnership",
					"CODE_DESC": "Ownership Type for Limited Liability Partnership",
					"VALID_FROM": "2022-11-12T16:09:19.000Z",
					"VALID_TO": "2037-12-31T15:52:00.000Z"
				}, {
					"RETSEQID": "2022_RET_00001",
					"OBJECT_ID": "2022_OBM_00005",
					"OBJECT_TYPE": "OWNSHIP",
					"OBJECT_CODE": "50",
					"label_code": "Partnership",
					"CODE_DESC": "Ownership Type for Partnership",
					"VALID_FROM": "2022-11-12T16:09:23.000Z",
					"VALID_TO": "2037-12-31T15:52:00.000Z"
				}, {
					"RETSEQID": "2022_RET_00001",
					"OBJECT_ID": "2022_OBM_00006",
					"OBJECT_TYPE": "OWNSHIP",
					"OBJECT_CODE": "60",
					"label_code": "Sole Proprietorship",
					"CODE_DESC": "Ownership Type for Sole Proprietorship",
					"VALID_FROM": "2022-11-12T16:09:28.000Z",
					"VALID_TO": "2037-12-31T15:52:00.000Z"
				}],
				"storeFormat": [{
					"RETSEQID": "2022_RET_00001",
					"OBJECT_ID": "2022_OBM_00007",
					"OBJECT_TYPE": "STOREFMT",
					"OBJECT_CODE": "10",
					"LABEL_CODE": "Outlet Store",
					"CODE_DESC": "Store Format",
					"VALID_FROM": "2022-11-14T16:37:23.000Z",
					"VALID_TO": "2037-12-31T15:52:00.000Z"
				}, {
					"RETSEQID": "2022_RET_00001",
					"OBJECT_ID": "2022_OBM_00008",
					"OBJECT_TYPE": "STOREFMT",
					"OBJECT_CODE": "20",
					"LABEL_CODE": "Convention",
					"CODE_DESC": "Store Format",
					"VALID_FROM": "2022-11-14T16:37:30.000Z",
					"VALID_TO": "2037-12-31T15:52:00.000Z"
				}, {
					"RETSEQID": "2022_RET_00001",
					"OBJECT_ID": "2022_OBM_00009",
					"OBJECT_TYPE": "STOREFMT",
					"OBJECT_CODE": "30",
					"LABEL_CODE": "Warehouse",
					"CODE_DESC": "Store Format",
					"VALID_FROM": "2022-11-14T16:37:33.000Z",
					"VALID_TO": "2037-12-31T15:52:00.000Z"
				}],
				"subdepartment": [{
					"SUBDEPSEQID": "SUBDEPT_00001",
					"DEPSEQID": "DEPT_00001",
					"SUB_DEPT_CODE": "10",
					"SUB_DEPT_DESC": "Water"
				}, {
					"SUBDEPSEQID": "SUBDEPT_00002",
					"DEPSEQID": "DEPT_00001",
					"SUB_DEPT_CODE": "20",
					"SUB_DEPT_DESC": "Coffee"
				}, {
					"SUBDEPSEQID": "SUBDEPT_00003",
					"DEPSEQID": "DEPT_00001",
					"SUB_DEPT_CODE": "30",
					"SUB_DEPT_DESC": "Carbonated Soft Drink"
				}, {
					"SUBDEPSEQID": "SUBDEPT_00004",
					"DEPSEQID": "DEPT_00002",
					"SUB_DEPT_CODE": "40",
					"SUB_DEPT_DESC": "Cookies"
				}, {
					"SUBDEPSEQID": "SUBDEPT_00005",
					"DEPSEQID": "DEPT_00002",
					"SUB_DEPT_CODE": "50",
					"SUB_DEPT_DESC": "Confectionary"
				}, {
					"SUBDEPSEQID": "SUBDEPT_00006",
					"DEPSEQID": "DEPT_00003",
					"SUB_DEPT_CODE": "60",
					"SUB_DEPT_DESC": "Fragrances"
				}, {
					"SUBDEPSEQID": "SUBDEPT_00007",
					"DEPSEQID": "DEPT_00003",
					"SUB_DEPT_CODE": "70",
					"SUB_DEPT_DESC": "Laundry"
				}],

				"department": [{
					"DEPSEQID": "DEPT_00001",
					"DEPT_CODE": "10",
					"DEPT_DESC": "Beverages"
				}, {
					"DEPSEQID": "DEPT_00002",
					"DEPT_CODE": "20",
					"DEPT_DESC": "Grocery"
				}, {
					"DEPSEQID": "DEPT_00003",
					"DEPT_CODE": "30",
					"DEPT_DESC": "Personal Care"
				}],
				"addressType": [{
					"RETSEQID": "2022_RET_00001",
					"OBJECT_ID": "2022_OBM_00010",
					"OBJECT_TYPE": "ADRTYPE",
					"OBJECT_CODE": "10",
					"LABEL_CODE": "Registered Office Address",
					"CODE_DESC": "",
					"VALID_FROM": "2022-11-17T07:56:42.000Z",
					"VALID_TO": "2037-12-31T15:52:00.000Z",
					"PH_TYPE": "ALL"
				}, {
					"RETSEQID": "2022_RET_00001",
					"OBJECT_ID": "2022_OBM_00011",
					"OBJECT_TYPE": "ADRTYPE",
					"OBJECT_CODE": "20",
					"LABEL_CODE": "Regional Office Address",
					"CODE_DESC": "",
					"VALID_FROM": "2022-11-17T07:56:42.000Z",
					"VALID_TO": "2037-12-31T15:52:00.000Z",
					"PH_TYPE": "ALL"
				}, {
					"RETSEQID": "2022_RET_00001",
					"OBJECT_ID": "2022_OBM_00012",
					"OBJECT_TYPE": "ADRTYPE",
					"OBJECT_CODE": "30",
					"LABEL_CODE": "Correspondence Address",
					"CODE_DESC": "",
					"VALID_FROM": "2022-11-17T07:56:42.000Z",
					"VALID_TO": "2037-12-31T15:52:00.000Z",
					"PH_TYPE": "ALL"
				}, {
					"RETSEQID": "2022_RET_00001",
					"OBJECT_ID": "2022_OBM_00013",
					"OBJECT_TYPE": "ADRTYPE",
					"OBJECT_CODE": "40",
					"LABEL_CODE": "Payment Address",
					"CODE_DESC": "",
					"VALID_FROM": "2022-11-17T07:56:42.000Z",
					"VALID_TO": "2037-12-31T15:52:00.000Z",
					"PH_TYPE": "SUPPLIER"
				}, {
					"RETSEQID": "2022_RET_00001",
					"OBJECT_ID": "2022_OBM_00014",
					"OBJECT_TYPE": "ADRTYPE",
					"OBJECT_CODE": "50",
					"LABEL_CODE": "Warehouse Address",
					"CODE_DESC": "",
					"VALID_FROM": "2022-11-17T07:56:42.000Z",
					"VALID_TO": "2037-12-31T15:52:00.000Z",
					"PH_TYPE": "ALL"
				}, {
					"RETSEQID": "2022_RET_00001",
					"OBJECT_ID": "2022_OBM_00015",
					"OBJECT_TYPE": "ADRTYPE",
					"OBJECT_CODE": "60",
					"LABEL_CODE": "Distribution Centre",
					"CODE_DESC": "",
					"VALID_FROM": "2022-11-17T07:56:42.000Z",
					"VALID_TO": "2037-12-31T15:52:00.000Z",
					"PH_TYPE": "ALL"
				}, {
					"RETSEQID": "2022_RET_00001",
					"OBJECT_ID": "2022_OBM_00016",
					"OBJECT_TYPE": "ADRTYPE",
					"OBJECT_CODE": "70",
					"LABEL_CODE": "Store Address",
					"CODE_DESC": "",
					"VALID_FROM": "2022-11-17T07:56:42.000Z",
					"VALID_TO": "2037-12-31T15:52:00.000Z",
					"PH_TYPE": "RETAILER"
				}, {
					"RETSEQID": "2022_RET_00001",
					"OBJECT_ID": "2022_OBM_00017",
					"OBJECT_TYPE": "ADRTYPE",
					"OBJECT_CODE": "80",
					"LABEL_CODE": "Other Address",
					"CODE_DESC": "",
					"VALID_FROM": "2022-11-17T07:56:42.000Z",
					"VALID_TO": "2037-12-31T15:52:00.000Z",
					"PH_TYPE": "ALL"
				}],
				"payment-method": [{
					"PAYMENT_ID": "PT001",
					"PAYMENT_CODE": "10",
					"LABEL_CODE": "Cash",
					"CODE_DESC": "Cash"
				}, {
					"PAYMENT_ID": "PT002",
					"PAYMENT_CODE": "20",
					"LABEL_CODE": "Cheque",
					"CODE_DESC": "Cheque"
				}, {
					"PAYMENT_ID": "PT003",
					"PAYMENT_CODE": "30",
					"LABEL_CODE": "Internet Banking",
					"CODE_DESC": "Internet Banking"
				}],
				"countryCode": [{
					"COUNTRY_CODE": "+1",
					"COUNTRY_NAME": "USA"
				}, {
					"COUNTRY_CODE": "+60",
					"COUNTRY_NAME": "Malaysia"
				}, {
					"COUNTRY_CODE": "+62",
					"COUNTRY_NAME": "Indonesia"
				}, {
					"COUNTRY_CODE": "+63",
					"COUNTRY_NAME": "Philipines"
				}, {
					"COUNTRY_CODE": "+65",
					"COUNTRY_NAME": "Singapore"
				}, {
					"COUNTRY_CODE": "+66",
					"COUNTRY_NAME": "Thailand"
				}, {
					"COUNTRY_CODE": "+84",
					"COUNTRY_NAME": "Vietnam"
				}, {
					"COUNTRY_CODE": "+91",
					"COUNTRY_NAME": "India"
				}]

			});
			return oPayload;
		},
		fnMasterData: function () {
			var oMasterData = {
				"TITLE": [{
					"RETAILER_ID": "2023RET000001",
					"TITLE_CODE": "01",
					"LABEL_CODE": "Mr.",
					"CODE_DESC": "Mister"
				}, {
					"RETAILER_ID": "2023RET000001",
					"TITLE_CODE": "02",
					"LABEL_CODE": "Mrs.",
					"CODE_DESC": "Mistress"
				}],
				"BUSINESS_CODE": [{
					"BUSINESS_ID": "BUS_00001",
					"RETAILER_ID": "2022_RET_00001",
					"BUS_CODE": "10",
					"LABEL_CODE": "Distributor",
					"CODE_DESC": "Distributor"
				}, {
					"BUSINESS_ID": "BUS_00002",
					"RETAILER_ID": "2022_RET_00001",
					"BUS_CODE": "20",
					"LABEL_CODE": "Manufacturer",
					"CODE_DESC": "Manufacturer"
				}, {
					"BUSINESS_ID": "BUS_00003",
					"RETAILER_ID": "2022_RET_00001",
					"BUS_CODE": "30",
					"LABEL_CODE": "License",
					"CODE_DESC": "License"
				}, {
					"BUSINESS_ID": "BUS_00004",
					"RETAILER_ID": "2022_RET_00001",
					"BUS_CODE": "40",
					"LABEL_CODE": "Wholesaler",
					"CODE_DESC": "Wholesaler"
				}, {
					"BUSINESS_ID": "BUS_00005",
					"RETAILER_ID": "2022_RET_00001",
					"BUS_CODE": "50",
					"LABEL_CODE": "Importer",
					"CODE_DESC": "Importer"
				}, {
					"BUSINESS_ID": "BUS_00006",
					"RETAILER_ID": "2022_RET_00001",
					"BUS_CODE": "60",
					"LABEL_CODE": "Broker",
					"CODE_DESC": "Broker"
				}, {
					"BUSINESS_ID": "BUS_00007",
					"RETAILER_ID": "2022_RET_00001",
					"BUS_CODE": "70",
					"LABEL_CODE": "Service Provider",
					"CODE_DESC": "Service Provider"
				}],
				"OWNERSHIP_TYPE": [{
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "01",
					"OBJECT_TYPE": "OWNSHIP",
					"OBJECT_CODE": "10",
					"PH_TYPE": "",
					"LABEL_CODE": "CORPORATION",
					"CODE_DESC": "OWNERSHIP TYPE FOR CORPORATION",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}, {
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "02",
					"OBJECT_TYPE": "OWNSHIP",
					"OBJECT_CODE": "20",
					"PH_TYPE": "",
					"LABEL_CODE": "JOINT VENTURE",
					"CODE_DESC": "OWNERSHIP TYPE FOR JOINT VENTURE",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}, {
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "03",
					"OBJECT_TYPE": "OWNSHIP",
					"OBJECT_CODE": "30",
					"PH_TYPE": "",
					"LABEL_CODE": "LIMITED LIABILITY CORPORATION",
					"CODE_DESC": "OWNERSHIP TYPE FOR LIMITED LIABILITY CORPORATION",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}, {
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "04",
					"OBJECT_TYPE": "OWNSHIP",
					"OBJECT_CODE": "40",
					"PH_TYPE": "",
					"LABEL_CODE": "LIMITED LIABILITY PARTNERSHIP",
					"CODE_DESC": "OWNERSHIP TYPE FOR LIMITED LIABILITY PARTNERSHIP",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}, {
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "05",
					"OBJECT_TYPE": "OWNSHIP",
					"OBJECT_CODE": "50",
					"PH_TYPE": "",
					"LABEL_CODE": "PARTNERSHIP",
					"CODE_DESC": "OWNERSHIP TYPE FOR PARTNERSHIP",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}, {
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "06",
					"OBJECT_TYPE": "OWNSHIP",
					"OBJECT_CODE": "60",
					"PH_TYPE": "",
					"LABEL_CODE": "SOLE PROPRIETORSHIP",
					"CODE_DESC": "OWNERSHIP TYPE FOR SOLE PROPRIETORSHIP",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}],
				"STOREFMT_TYPE": [{
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "07",
					"OBJECT_TYPE": "STOREFMT",
					"OBJECT_CODE": "10",
					"PH_TYPE": "",
					"LABEL_CODE": "OUTLET STORE",
					"CODE_DESC": "STORE FORMAT",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}, {
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "08",
					"OBJECT_TYPE": "STOREFMT",
					"OBJECT_CODE": "20",
					"PH_TYPE": "",
					"LABEL_CODE": "CONVENTION",
					"CODE_DESC": "STORE FORMAT",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}, {
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "09",
					"OBJECT_TYPE": "STOREFMT",
					"OBJECT_CODE": "30",
					"PH_TYPE": "",
					"LABEL_CODE": "WAREHOUSE",
					"CODE_DESC": "STORE FORMAT",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}],
				"ADR_TYPE": [{
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "10",
					"OBJECT_TYPE": "ADRTYPE",
					"OBJECT_CODE": "10",
					"PH_TYPE": "ALL",
					"LABEL_CODE": "REGISTERED OFFICE ADDRESS",
					"CODE_DESC": "",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}, {
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "11",
					"OBJECT_TYPE": "ADRTYPE",
					"OBJECT_CODE": "20",
					"PH_TYPE": "ALL",
					"LABEL_CODE": "REGIONAL OFFICE ADDRESS",
					"CODE_DESC": "",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}, {
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "12",
					"OBJECT_TYPE": "ADRTYPE",
					"OBJECT_CODE": "30",
					"PH_TYPE": "ALL",
					"LABEL_CODE": "CORRESPONDENCE ADDRESS",
					"CODE_DESC": "",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}, {
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "13",
					"OBJECT_TYPE": "ADRTYPE",
					"OBJECT_CODE": "40",
					"PH_TYPE": "SUPPLIER",
					"LABEL_CODE": "PAYMENT ADDRESS",
					"CODE_DESC": "",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}, {
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "14",
					"OBJECT_TYPE": "ADRTYPE",
					"OBJECT_CODE": "50",
					"PH_TYPE": "ALL",
					"LABEL_CODE": "WAREHOUSE ADDRESS",
					"CODE_DESC": "",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}, {
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "15",
					"OBJECT_TYPE": "ADRTYPE",
					"OBJECT_CODE": "60",
					"PH_TYPE": "ALL",
					"LABEL_CODE": "DISTRIBUTION CENTRE",
					"CODE_DESC": "",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}, {
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "16",
					"OBJECT_TYPE": "ADRTYPE",
					"OBJECT_CODE": "70",
					"PH_TYPE": "RETAILER",
					"LABEL_CODE": "STORE ADDRESS",
					"CODE_DESC": "",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}, {
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "17",
					"OBJECT_TYPE": "ADRTYPE",
					"OBJECT_CODE": "80",
					"PH_TYPE": "ALL",
					"LABEL_CODE": "OTHER ADDRESS",
					"CODE_DESC": "",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}],
				"VENDOR_TYPE": [{
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "18",
					"OBJECT_TYPE": "VENDTYPE",
					"OBJECT_CODE": "10",
					"PH_TYPE": "NULL",
					"LABEL_CODE": "OUTRIGHT",
					"CODE_DESC": "VENDOR TYPE",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}, {
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "19",
					"OBJECT_TYPE": "VENDTYPE",
					"OBJECT_CODE": "20",
					"PH_TYPE": "NULL",
					"LABEL_CODE": "CONCESSIONAIRE",
					"CODE_DESC": "VENDOR TYPE",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}],
				"CASH_MGMT_GRP_TYPE": [{
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "101",
					"OBJECT_TYPE": "CASH_MGMT_GRP_TYPE",
					"OBJECT_CODE": "10",
					"PH_TYPE": "NULL",
					"LABEL_CODE": "SCM",
					"CODE_DESC": "SCM",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}],
				"EMPCNT_TYPE": [{
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "20",
					"OBJECT_TYPE": "EMPCNT",
					"OBJECT_CODE": "10",
					"PH_TYPE": "NULL",
					"LABEL_CODE": "1 - 50",
					"CODE_DESC": "VERY SMALL SIZE OF EMPLOYEE",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}, {
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "21",
					"OBJECT_TYPE": "EMPCNT",
					"OBJECT_CODE": "20",
					"PH_TYPE": "NULL",
					"LABEL_CODE": "50 - 100",
					"CODE_DESC": "SMALL SIZE OF EMPLOYEE",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}, {
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "22",
					"OBJECT_TYPE": "EMPCNT",
					"OBJECT_CODE": "30",
					"PH_TYPE": "NULL",
					"LABEL_CODE": "100 - 200",
					"CODE_DESC": "MEDIUM SIZE OF EMPLOYEE",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}, {
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "23",
					"OBJECT_TYPE": "EMPCNT",
					"OBJECT_CODE": "40",
					"PH_TYPE": "NULL",
					"LABEL_CODE": "200 - 1000",
					"CODE_DESC": "LARGE SIZE OF EMPLOYEE",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}, {
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "24",
					"OBJECT_TYPE": "EMPCNT",
					"OBJECT_CODE": "50",
					"PH_TYPE": "NULL",
					"LABEL_CODE": ">1000",
					"CODE_DESC": "VERY LARGE SIZE OF EMPLOYEE",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}],
				"CONTACT_TYPE": [{
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "25",
					"OBJECT_TYPE": "CONTACTTYPE",
					"OBJECT_CODE": "10",
					"PH_TYPE": "NULL",
					"LABEL_CODE": "PRIMARY",
					"CODE_DESC": "PRIMARY CONTACT",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}, {
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "26",
					"OBJECT_TYPE": "CONTACTTYPE",
					"OBJECT_CODE": "20",
					"PH_TYPE": "NULL",
					"LABEL_CODE": "CHAIRMAN",
					"CODE_DESC": "CHAIRMAN CONTACT",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}, {
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "27",
					"OBJECT_TYPE": "CONTACTTYPE",
					"OBJECT_CODE": "30",
					"PH_TYPE": "NULL",
					"LABEL_CODE": "DIRECTORS",
					"CODE_DESC": "DIRECTORS CONTACT",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}, {
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "28",
					"OBJECT_TYPE": "CONTACTTYPE",
					"OBJECT_CODE": "40",
					"PH_TYPE": "NULL",
					"LABEL_CODE": "SOLE PROPRIETORSHIP",
					"CODE_DESC": "SOLE PROP CONTACT",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}, {
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "29",
					"OBJECT_TYPE": "CONTACTTYPE",
					"OBJECT_CODE": "50",
					"PH_TYPE": "NULL",
					"LABEL_CODE": "PARTNERSHIP HOLDERS",
					"CODE_DESC": "PARTNERSHIP HOLDERS CONTACT",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}],
				"CREDIT_PERIOD_TYPE": [{
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "30",
					"OBJECT_TYPE": "CREDITPERIOD",
					"OBJECT_CODE": "10",
					"PH_TYPE": "NULL",
					"LABEL_CODE": "PAYABLE IMMEDIATELY",
					"CODE_DESC": "PAYABLE IMMEDIATELY",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}, {
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "31",
					"OBJECT_TYPE": "CREDITPERIOD",
					"OBJECT_CODE": "20",
					"PH_TYPE": "NULL",
					"LABEL_CODE": "WITHIN 15 DAYS",
					"CODE_DESC": "<15 DAYS",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}, {
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "32",
					"OBJECT_TYPE": "CREDITPERIOD",
					"OBJECT_CODE": "30",
					"PH_TYPE": "NULL",
					"LABEL_CODE": "WITHIN 30 DAYS",
					"CODE_DESC": "<30 DAYS",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}, {
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "33",
					"OBJECT_TYPE": "CREDITPERIOD",
					"OBJECT_CODE": "40",
					"PH_TYPE": "NULL",
					"LABEL_CODE": "WITHIN 45 DAYS",
					"CODE_DESC": "<45 DAYS",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}, {
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "34",
					"OBJECT_TYPE": "CREDITPERIOD",
					"OBJECT_CODE": "50",
					"PH_TYPE": "NULL",
					"LABEL_CODE": "WITHIN 60 DAYS",
					"CODE_DESC": "<60 DAYS",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}],
				"SHIP_CONDITION_TYPE": [{
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "35",
					"OBJECT_TYPE": "SHOPCONDITIONS",
					"OBJECT_CODE": "10",
					"PH_TYPE": "NULL",
					"LABEL_CODE": "WEEKDAY",
					"CODE_DESC": "WEEKDAY",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}, {
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "36",
					"OBJECT_TYPE": "SHOPCONDITIONS",
					"OBJECT_CODE": "20",
					"PH_TYPE": "NULL",
					"LABEL_CODE": "WEEKEND",
					"CODE_DESC": "WEEKEND",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}, {
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "37",
					"OBJECT_TYPE": "SHOPCONDITIONS",
					"OBJECT_CODE": "30",
					"PH_TYPE": "NULL",
					"LABEL_CODE": "RETURNS",
					"CODE_DESC": "RETURNS",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}],
				"RECONCACCOUNTS_TYPE": [{
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "38",
					"OBJECT_TYPE": "RECONCACCOUNTS",
					"OBJECT_CODE": "10",
					"PH_TYPE": "NULL",
					"LABEL_CODE": "YES",
					"CODE_DESC": "YES",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}, {
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "39",
					"OBJECT_TYPE": "RECONCACCOUNTS",
					"OBJECT_CODE": "20",
					"PH_TYPE": "NULL",
					"LABEL_CODE": "NO",
					"CODE_DESC": "NO",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}],
				"T_MCH_MAIN_KEY": [{
					"RETAILER_ID": "2023RET000001",
					"MCH_MAIN_KEY_ID": "01",
					"MCH_MAIN_KEY_LABEL_CODE": "FMCG",
					"MCH_MAIN_KEY_DESC": "FMCG",
					"ACTIVE": 1,
					"DELETED": 0,
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31",
					"CREATED_BY": "PANKAJ",
					"CREATED_ON": "2023-01-01",
					"MODIFIED_BY": "PANKAJ",
					"MODIFIED_ON": "2023-01-01"
				}],
				"T_MCH_DPARTMENT": [{
					"MCH_MAIN_KEY_ID": "01",
					"RETAILER_ID": "2023RET000001",
					"MCH_DEPT_KEY_ID": "50",
					"MCH_DEPT_LABEL_CODE": "BEVERAGES",
					" MCH_DEPT_DESC": "BEVERAGES",
					"ACTIVE": 1,
					"DELETED": 0,
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31",
					"CREATED_BY": "PANKAJ",
					"CREATED_ON": "2023-01-01",
					"MODIFIED_BY": "PANKAJ",
					"MODIFIED_ON": "2023-01-01"
				}, {
					"MCH_MAIN_KEY_ID": "01",
					"RETAILER_ID": "2023RET000001",
					"MCH_DEPT_KEY_ID": "51",
					"MCH_DEPT_LABEL_CODE": "GROCERY",
					" MCH_DEPT_DESC": "GROCERY",
					"ACTIVE": 1,
					"DELETED": 0,
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31",
					"CREATED_BY": "PANKAJ",
					"CREATED_ON": "2023-01-01",
					"MODIFIED_BY": "PANKAJ",
					"MODIFIED_ON": "2023-01-01"
				}],
				"T_MCH_CLASS": [{
					"RETAILER_ID": "2023RET000001",
					"MCH_DEPT_KEY_ID": "50",
					"MCH_CLASS_KEY_ID": "201",
					"MCH_CLASS_LABEL_CODE": "CARBONATED SOFT DRINK",
					"MCH_CLASS_DECS": "CARBONATED SOFT DRINK",
					"ACTIVE": 1,
					"DELETED": 0,
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31",
					"CREATED_BY": "PANKAJ",
					"CREATED_ON": "2023-01-01",
					"MODIFIED_BY": "PANKAJ",
					"MODIFIED_ON": "2023-01-01"
				}, {
					"RETAILER_ID": "2023RET000001",
					"MCH_DEPT_KEY_ID": "50",
					"MCH_CLASS_KEY_ID": "206",
					"MCH_CLASS_LABEL_CODE": "COFFEE",
					"MCH_CLASS_DECS": "COFFEE",
					"ACTIVE": 1,
					"DELETED": 0,
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31",
					"CREATED_BY": "PANKAJ",
					"CREATED_ON": "2023-01-01",
					"MODIFIED_BY": "PANKAJ",
					"MODIFIED_ON": "2023-01-01"
				}, {
					"RETAILER_ID": "2023RET000001",
					"MCH_DEPT_KEY_ID": "51",
					"MCH_CLASS_KEY_ID": "210",
					"MCH_CLASS_LABEL_CODE": "OATS",
					"MCH_CLASS_DECS": "OATS",
					"ACTIVE": 1,
					"DELETED": 0,
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31",
					"CREATED_BY": "PANKAJ",
					"CREATED_ON": "2023-01-01",
					"MODIFIED_BY": "PANKAJ",
					"MODIFIED_ON": "2023-01-01"
				}, {
					"RETAILER_ID": "2023RET000001",
					"MCH_DEPT_KEY_ID": "51",
					"MCH_CLASS_KEY_ID": "217",
					"MCH_CLASS_LABEL_CODE": "CEREALS",
					"MCH_CLASS_DECS": "CEREALS",
					"ACTIVE": 1,
					"DELETED": 0,
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31",
					"CREATED_BY": "PANKAJ",
					"CREATED_ON": "2023-01-01",
					"MODIFIED_BY": "PANKAJ",
					"MODIFIED_ON": "2023-01-01"
				}],
				"T_MCH_SUB_CATEGORY_1": [{
					"RETAILER_ID": "2023RET000001",
					"MCH_CLASS_KEY_ID": "201",
					"MCH_SUB_CATG_1_ID": "501",
					"MCH_SUB_CATG_1_LABEL_CODE": "PET",
					"MCH_SUB_CATG_1_DESC": "BEVERAGES CARBONATED SOFT DRINK",
					"ACTIVE": 1,
					"DELETED": 0,
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31",
					"CREATED_BY": "PANKAJ",
					"CREATED_ON": "2023-01-01",
					"MODIFIED_BY": "PANKAJ",
					"MODIFIED_ON": "2023-01-01"
				}, {
					"RETAILER_ID": "2023RET000001",
					"MCH_CLASS_KEY_ID": "201",
					"MCH_SUB_CATG_1_ID": "502",
					"MCH_SUB_CATG_1_LABEL_CODE": "CAN",
					"MCH_SUB_CATG_1_DESC": "BEVERAGES CARBONATED SOFT DRINK",
					"ACTIVE": 1,
					"DELETED": 0,
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31",
					"CREATED_BY": "PANKAJ",
					"CREATED_ON": "2023-01-01",
					"MODIFIED_BY": "PANKAJ",
					"MODIFIED_ON": "2023-01-01"
				}, {
					"RETAILER_ID": "2023RET000001",
					"MCH_CLASS_KEY_ID": "201",
					"MCH_SUB_CATG_1_ID": "503",
					"MCH_SUB_CATG_1_LABEL_CODE": "BOTTLE",
					"MCH_SUB_CATG_1_DESC": "BEVERAGES CARBONATED SOFT DRINK",
					"ACTIVE": 1,
					"DELETED": 0,
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31",
					"CREATED_BY": "PANKAJ",
					"CREATED_ON": "2023-01-01",
					"MODIFIED_BY": "PANKAJ",
					"MODIFIED_ON": "2023-01-01"
				}, {
					"RETAILER_ID": "2023RET000001",
					"MCH_CLASS_KEY_ID": "206",
					"MCH_SUB_CATG_1_ID": "504",
					"MCH_SUB_CATG_1_LABEL_CODE": "BLACK",
					"MCH_SUB_CATG_1_DESC": "BEVERAGES COFFEE",
					"ACTIVE": 1,
					"DELETED": 0,
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31",
					"CREATED_BY": "PANKAJ",
					"CREATED_ON": "2023-01-01",
					"MODIFIED_BY": "PANKAJ",
					"MODIFIED_ON": "2023-01-01"
				}, {
					"RETAILER_ID": "2023RET000001",
					"MCH_CLASS_KEY_ID": "206",
					"MCH_SUB_CATG_1_ID": "505",
					"MCH_SUB_CATG_1_LABEL_CODE": "MIXES",
					"MCH_SUB_CATG_1_DESC": "BEVERAGES COFFEE",
					"ACTIVE": 1,
					"DELETED": 0,
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31",
					"CREATED_BY": "PANKAJ",
					"CREATED_ON": "2023-01-01",
					"MODIFIED_BY": "PANKAJ",
					"MODIFIED_ON": "2023-01-01"
				}, {
					"RETAILER_ID": "2023RET000001",
					"MCH_CLASS_KEY_ID": "206",
					"MCH_SUB_CATG_1_ID": "506",
					"MCH_SUB_CATG_1_LABEL_CODE": "RTD",
					"MCH_SUB_CATG_1_DESC": "BEVERAGES COFFEE",
					"ACTIVE": 1,
					"DELETED": 0,
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31",
					"CREATED_BY": "PANKAJ",
					"CREATED_ON": "2023-01-01",
					"MODIFIED_BY": "PANKAJ",
					"MODIFIED_ON": "2023-01-01"
				}, {
					"RETAILER_ID": "2023RET000001",
					"MCH_CLASS_KEY_ID": "210",
					"MCH_SUB_CATG_1_ID": "510",
					"MCH_SUB_CATG_1_LABEL_CODE": "INSTANT",
					"MCH_SUB_CATG_1_DESC": "GROCERY OATS",
					"ACTIVE": 1,
					"DELETED": 0,
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31",
					"CREATED_BY": "PANKAJ",
					"CREATED_ON": "2023-01-01",
					"MODIFIED_BY": "PANKAJ",
					"MODIFIED_ON": "2023-01-01"
				}, {
					"RETAILER_ID": "2023RET000001",
					"MCH_CLASS_KEY_ID": "210",
					"MCH_SUB_CATG_1_ID": "511",
					"MCH_SUB_CATG_1_LABEL_CODE": "READY TO EAT",
					"MCH_SUB_CATG_1_DESC": "GROCERY OATS",
					"ACTIVE": 1,
					"DELETED": 0,
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31",
					"CREATED_BY": "PANKAJ",
					"CREATED_ON": "2023-01-01",
					"MODIFIED_BY": "PANKAJ",
					"MODIFIED_ON": "2023-01-01"
				}, {
					"RETAILER_ID": "2023RET000001",
					"MCH_CLASS_KEY_ID": "210",
					"MCH_SUB_CATG_1_ID": "512",
					"MCH_SUB_CATG_1_LABEL_CODE": "QUICK COOK",
					"MCH_SUB_CATG_1_DESC": "GROCERY OATS",
					"ACTIVE": 1,
					"DELETED": 0,
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31",
					"CREATED_BY": "PANKAJ",
					"CREATED_ON": "2023-01-01",
					"MODIFIED_BY": "PANKAJ",
					"MODIFIED_ON": "2023-01-01"
				}, {
					"RETAILER_ID": "2023RET000001",
					"MCH_CLASS_KEY_ID": "210",
					"MCH_SUB_CATG_1_ID": "513",
					"MCH_SUB_CATG_1_LABEL_CODE": "HOT MIX",
					"MCH_SUB_CATG_1_DESC": "GROCERY OATS",
					"ACTIVE": 1,
					"DELETED": 0,
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31",
					"CREATED_BY": "PANKAJ",
					"CREATED_ON": "2023-01-01",
					"MODIFIED_BY": "PANKAJ",
					"MODIFIED_ON": "2023-01-01"
				}, {
					"RETAILER_ID": "2023RET000001",
					"MCH_CLASS_KEY_ID": "217",
					"MCH_SUB_CATG_1_ID": "514",
					"MCH_SUB_CATG_1_LABEL_CODE": "INSTANT",
					"MCH_SUB_CATG_1_DESC": "GROCERY CEREALS",
					"ACTIVE": 1,
					"DELETED": 0,
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31",
					"CREATED_BY": "PANKAJ",
					"CREATED_ON": "2023-01-01",
					"MODIFIED_BY": "PANKAJ",
					"MODIFIED_ON": "2023-01-01"
				}, {
					"RETAILER_ID": "2023RET000001",
					"MCH_CLASS_KEY_ID": "217",
					"MCH_SUB_CATG_1_ID": "515",
					"MCH_SUB_CATG_1_LABEL_CODE": "READY TO EAT",
					"MCH_SUB_CATG_1_DESC": "GROCERY CEREALS",
					"ACTIVE": 1,
					"DELETED": 0,
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31",
					"CREATED_BY": "PANKAJ",
					"CREATED_ON": "2023-01-01",
					"MODIFIED_BY": "PANKAJ",
					"MODIFIED_ON": "2023-01-01"
				}, {
					"RETAILER_ID": "2023RET000001",
					"MCH_CLASS_KEY_ID": "217",
					"MCH_SUB_CATG_1_ID": "516",
					"MCH_SUB_CATG_1_LABEL_CODE": "QUICK COOK",
					"MCH_SUB_CATG_1_DESC": "GROCERY CEREALS",
					"ACTIVE": 1,
					"DELETED": 0,
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31",
					"CREATED_BY": "PANKAJ",
					"CREATED_ON": "2023-01-01",
					"MODIFIED_BY": "PANKAJ",
					"MODIFIED_ON": "2023-01-01"
				}, {
					"RETAILER_ID": "2023RET000001",
					"MCH_CLASS_KEY_ID": "217",
					"MCH_SUB_CATG_1_ID": "517",
					"MCH_SUB_CATG_1_LABEL_CODE": "HOT MIX",
					"MCH_SUB_CATG_1_DESC": "GROCERY CEREALS",
					"ACTIVE": 1,
					"DELETED": 0,
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31",
					"CREATED_BY": "PANKAJ",
					"CREATED_ON": "2023-01-01",
					"MODIFIED_BY": "PANKAJ",
					"MODIFIED_ON": "2023-01-01"
				}],
				"T_STATE": [{
					"COUNTRY_CODE": "IND",
					"STATE_CODE": "UP",
					"STATE_NAME": "UTTAR PRADESH",
					"STATE_DESC": "STATE OF INDIA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "IND",
					"STATE_CODE": "MH",
					"STATE_NAME": "MAHARASHTRA",
					"STATE_DESC": "STATE OF INDIA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "IND",
					"STATE_CODE": "BR",
					"STATE_NAME": "BIHAR",
					"STATE_DESC": "STATE OF INDIA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "IND",
					"STATE_CODE": "WB",
					"STATE_NAME": "WEST BENGAL",
					"STATE_DESC": "STATE OF INDIA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "IND",
					"STATE_CODE": "AP",
					"STATE_NAME": "ANDHRA PRADESH",
					"STATE_DESC": "STATE OF INDIA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "IND",
					"STATE_CODE": "MP",
					"STATE_NAME": "MADHYA PRADESH",
					"STATE_DESC": "STATE OF INDIA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "IND",
					"STATE_CODE": "TN",
					"STATE_NAME": "TAMIL NADU",
					"STATE_DESC": "STATE OF INDIA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "IND",
					"STATE_CODE": "RJ",
					"STATE_NAME": "RAJASTHAN",
					"STATE_DESC": "STATE OF INDIA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "IND",
					"STATE_CODE": "KA",
					"STATE_NAME": "KARNATAKA",
					"STATE_DESC": "STATE OF INDIA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "IND",
					"STATE_CODE": "GJ",
					"STATE_NAME": "GUJARAT",
					"STATE_DESC": "STATE OF INDIA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "USA",
					"STATE_CODE": "AL",
					"STATE_NAME": "ALABAMA",
					"STATE_DESC": "STATE OF USA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "USA",
					"STATE_CODE": "AK",
					"STATE_NAME": "ALASKA",
					"STATE_DESC": "STATE OF USA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "USA",
					"STATE_CODE": "CA",
					"STATE_NAME": "CALIFORNIA",
					"STATE_DESC": "STATE OF USA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "USA",
					"STATE_CODE": "FL",
					"STATE_NAME": "FLORIDA",
					"STATE_DESC": "STATE OF USA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "USA",
					"STATE_CODE": "HI",
					"STATE_NAME": "HAWAII",
					"STATE_DESC": "STATE OF USA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "USA",
					"STATE_CODE": "IL",
					"STATE_NAME": "ILLINOIS",
					"STATE_DESC": "STATE OF USA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "USA",
					"STATE_CODE": "IN",
					"STATE_NAME": "INDIANA",
					"STATE_DESC": "STATE OF USA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "USA",
					"STATE_CODE": "NJ",
					"STATE_NAME": "NEW JERSEY",
					"STATE_DESC": "STATE OF USA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "USA",
					"STATE_CODE": "KS",
					"STATE_NAME": "KANSAS",
					"STATE_DESC": "STATE OF USA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "USA",
					"STATE_CODE": "MI",
					"STATE_NAME": "MICHIGAN",
					"STATE_DESC": "STATE OF USA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "USA",
					"STATE_CODE": "NE",
					"STATE_NAME": "NEBRASKA",
					"STATE_DESC": "STATE OF USA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "IDN",
					"STATE_CODE": "AC",
					"STATE_NAME": "ACEH",
					"STATE_DESC": "PROVINCES OF INDONESIA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "IDN",
					"STATE_CODE": "BA",
					"STATE_NAME": "BALI",
					"STATE_DESC": "PROVINCES OF INDONESIA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "IDN",
					"STATE_CODE": "BT",
					"STATE_NAME": "BANTEN",
					"STATE_DESC": "PROVINCES OF INDONESIA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "IDN",
					"STATE_CODE": "BE",
					"STATE_NAME": "BENGKULU",
					"STATE_DESC": "PROVINCES OF INDONESIA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "IDN",
					"STATE_CODE": "JT",
					"STATE_NAME": "JAWA TENGAH",
					"STATE_DESC": "PROVINCES OF INDONESIA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "IDN",
					"STATE_CODE": "PT",
					"STATE_NAME": "PAPUA TENGAH",
					"STATE_DESC": "PROVINCES OF INDONESIA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "IDN",
					"STATE_CODE": "JI",
					"STATE_NAME": "JAWA TIMUR",
					"STATE_DESC": "PROVINCES OF INDONESIA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "IDN",
					"STATE_CODE": "GO",
					"STATE_NAME": "GORONTALO",
					"STATE_DESC": "PROVINCES OF INDONESIA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "IDN",
					"STATE_CODE": "PE",
					"STATE_NAME": "HIGHLAND PAPUA",
					"STATE_DESC": "PROVINCES OF INDONESIA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "IDN",
					"STATE_CODE": "JA",
					"STATE_NAME": "JAMBI",
					"STATE_DESC": "PROVINCES OF INDONESIA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "MYS",
					"STATE_CODE": "JHR",
					"STATE_NAME": "JOHOR",
					"STATE_DESC": "STATE OF MALAYSIA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "MYS",
					"STATE_CODE": "KDH",
					"STATE_NAME": "KEDAH",
					"STATE_DESC": "STATE OF MALAYSIA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "MYS",
					"STATE_CODE": "KTN",
					"STATE_NAME": "KELANTAN",
					"STATE_DESC": "STATE OF MALAYSIA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "MYS",
					"STATE_CODE": "MLK",
					"STATE_NAME": "MALACCA",
					"STATE_DESC": "STATE OF MALAYSIA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "MYS",
					"STATE_CODE": "NSN",
					"STATE_NAME": "NEGERI SEMBILIAN",
					"STATE_DESC": "STATE OF MALAYSIA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "MYS",
					"STATE_CODE": "PHG",
					"STATE_NAME": "PAHANG",
					"STATE_DESC": "STATE OF MALAYSIA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "MYS",
					"STATE_CODE": "PNG",
					"STATE_NAME": "PENANG",
					"STATE_DESC": "STATE OF MALAYSIA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "MYS",
					"STATE_CODE": "PRK",
					"STATE_NAME": "PERAK",
					"STATE_DESC": "STATE OF MALAYSIA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "MYS",
					"STATE_CODE": "PLS",
					"STATE_NAME": "PERLIS",
					"STATE_DESC": "STATE OF MALAYSIA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "MYS",
					"STATE_CODE": "SBH",
					"STATE_NAME": "SABAH",
					"STATE_DESC": "STATE OF MALAYSIA",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "PHL",
					"STATE_CODE": "ABR",
					"STATE_NAME": "ABRA",
					"STATE_DESC": "STATE OF PHILIPPINES",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "PHL",
					"STATE_CODE": "MNL",
					"STATE_NAME": "MANILA",
					"STATE_DESC": "STATE OF PHILIPPINES",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "PHL",
					"STATE_CODE": "AKL",
					"STATE_NAME": "AKLAN",
					"STATE_DESC": "STATE OF PHILIPPINES",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "PHL",
					"STATE_CODE": "ALB",
					"STATE_NAME": "ALBAY",
					"STATE_DESC": "STATE OF PHILIPPINES",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "PHL",
					"STATE_CODE": "ANT",
					"STATE_NAME": "ANTIQUE",
					"STATE_DESC": "STATE OF PHILIPPINES",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "PHL",
					"STATE_CODE": "AUR",
					"STATE_NAME": "AURORA",
					"STATE_DESC": "STATE OF PHILIPPINES",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "PHL",
					"STATE_CODE": "BAS",
					"STATE_NAME": "BASILAN",
					"STATE_DESC": "STATE OF PHILIPPINES",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "PHL",
					"STATE_CODE": "BAN",
					"STATE_NAME": "BATAAN",
					"STATE_DESC": "STATE OF PHILIPPINES",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "PHL",
					"STATE_CODE": "NCO",
					"STATE_NAME": "COTABATO",
					"STATE_DESC": "STATE OF PHILIPPINES",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "PHL",
					"STATE_CODE": "KAL",
					"STATE_NAME": "KALINGA",
					"STATE_DESC": "STATE OF PHILIPPINES",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "PHL",
					"STATE_CODE": "LUN",
					"STATE_NAME": "LA UNION",
					"STATE_DESC": "STATE OF PHILIPPINES",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "SGP",
					"STATE_CODE": "SGP",
					"STATE_NAME": "SINGAPORE",
					"STATE_DESC": "SINGAPORE",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "VNM",
					"STATE_CODE": "VNM",
					"STATE_NAME": "VIETNAM",
					"STATE_DESC": "VIETNAM",
					"ACTIVE": 1
				}, {
					"COUNTRY_CODE": "THA",
					"STATE_CODE": "THA",
					"STATE_NAME": "THAILAND",
					"STATE_DESC": "THAILAND",
					"ACTIVE": 1
				}],
				"T_PHN_CODE": [{
					"COUNTRY_CODE": "IDN",
					"COUNTRY_NAME": "Indonesia",
					"PHN_CODE": "+62",
					"PHN_CODE_DESC": "Dialing code for Indonesia"
				}, {
					"COUNTRY_CODE": "IND",
					"COUNTRY_NAME": "India",
					"PHN_CODE": "+91",
					"PHN_CODE_DESC": "Dialing code for India"
				}, {
					"COUNTRY_CODE": "MYS",
					"COUNTRY_NAME": "Malaysia",
					"PHN_CODE": "+60",
					"PHN_CODE_DESC": "Dialing code for Malaysia"
				}, {
					"COUNTRY_CODE": "PHL",
					"COUNTRY_NAME": "Philippines",
					"PHN_CODE": "+63",
					"PHN_CODE_DESC": "Dialing code for Philippines"
				}, {
					"COUNTRY_CODE": "SGP",
					"COUNTRY_NAME": "Singapore",
					"PHN_CODE": "+65",
					"PHN_CODE_DESC": "Dialing code for Singapore"
				}, {
					"COUNTRY_CODE": "THA",
					"COUNTRY_NAME": "Thailand",
					"PHN_CODE": "+66",
					"PHN_CODE_DESC": "Dialing code for Thailand"
				}, {
					"COUNTRY_CODE": "USA",
					"COUNTRY_NAME": "United States of America",
					"PHN_CODE": "+1",
					"PHN_CODE_DESC": "Dialing code for USA"
				}, {
					"COUNTRY_CODE": "VNM",
					"COUNTRY_NAME": "Vietnam",
					"PHN_CODE": "+84",
					"PHN_CODE_DESC": "Dialing code for Vietnam"
				}],
				"T_CURRENCY": [{
					"CURRENCY_CODE": "356",
					"CURRENCY_NAME": "INR",
					"CURRENCY_DESC": "INDIA CURRENCY INDIAN RUPEE",
					"ACTIVE": 1
				}, {
					"CURRENCY_CODE": "840",
					"CURRENCY_NAME": "USD",
					"CURRENCY_DESC": "USA CURRENCY US DOLLAR",
					"ACTIVE": 1
				}, {
					"CURRENCY_CODE": "360",
					"CURRENCY_NAME": "IDR",
					"CURRENCY_DESC": "INDONESIA CURRENCY RUPIAH",
					"ACTIVE": 1
				}, {
					"CURRENCY_CODE": "458",
					"CURRENCY_NAME": "MYR",
					"CURRENCY_DESC": "MALAYSIA CURRENCY RINGGIT",
					"ACTIVE": 1
				}, {
					"CURRENCY_CODE": "608",
					"CURRENCY_NAME": "PHP",
					"CURRENCY_DESC": "PHILIPPINES CURRENCY PHILIPPINE PESO or PISO",
					"ACTIVE": 1
				}, {
					"CURRENCY_CODE": "702",
					"CURRENCY_NAME": "SGD",
					"CURRENCY_DESC": "SINGAPORE CURRENCY SINGAPORE DOLLAR",
					"ACTIVE": 1
				}, {
					"CURRENCY_CODE": "704",
					"CURRENCY_NAME": "VND",
					"CURRENCY_DESC": "VIETNAM CURRENCY VIETNAMESE DONG",
					"ACTIVE": 1
				}, {
					"CURRENCY_CODE": "764",
					"CURRENCY_NAME": "THB",
					"CURRENCY_DESC": "THAILAND CURRENCY THAI BHAT",
					"ACTIVE": 1
				}],
				"T_PAYMENT": [{
					"RETAILER_ID": "2023RET000001",
					"PAYMENT_ID": "001",
					"PAYMENT_CODE": "CA",
					"LABEL_CODE": "CASH",
					"CODE_DESC": "CASH PAYMENT"
				}, {
					"RETAILER_ID": "2023RET000001",
					"PAYMENT_ID": "002",
					"PAYMENT_CODE": "CHQ",
					"LABEL_CODE": "CHEQUE",
					"CODE_DESC": "CHEQUE PAYMENT"
				}, {
					"RETAILER_ID": "2023RET000001",
					"PAYMENT_ID": "003",
					"PAYMENT_CODE": "EBT",
					"LABEL_CODE": "ELECTRONIC BANK TRANSFER",
					"CODE_DESC": "ELECTRONIC BANK TRANSFER PAYMENT"
				}, {
					"RETAILER_ID": "2023RET000001",
					"PAYMENT_ID": "004",
					"PAYMENT_CODE": "ACH",
					"LABEL_CODE": "AUTOMATED CLEARING HOUSE",
					"CODE_DESC": "AUTOMATED CLEARING HOUSE PAYMENT"
				}, {
					"RETAILER_ID": "2023RET000001",
					"PAYMENT_ID": "005",
					"PAYMENT_CODE": "CC",
					"LABEL_CODE": "CREDIT CARD",
					"CODE_DESC": "CARD PAYMENT"
				}, {
					"RETAILER_ID": "2023RET000001",
					"PAYMENT_ID": "006",
					"PAYMENT_CODE": "BOE",
					"LABEL_CODE": "BILL OF EXCHANGE",
					"CODE_DESC": "BILL OF EXCHANGE PAYMENT"
				}],
				"T_OPTION_SELECTION": [{
					"CODE": "Yes",
					"LABEL_CODE": "YES"
				}, {
					"CODE": "No",
					"LABEL_CODE": "NO"
				}],
				"WHT_TAX_TYPE": [{
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "39",
					"OBJECT_TYPE": "WHT_TAX",
					"OBJECT_CODE": "10",
					"PH_TYPE": "NULL",
					"LABEL_CODE": "Intake Kind",
					"CODE_DESC": "Intake Kind",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}, {
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "40",
					"OBJECT_TYPE": "WHT_TAX",
					"OBJECT_CODE": "20",
					"PH_TYPE": "NULL",
					"LABEL_CODE": "Revenue",
					"CODE_DESC": "Revenue",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}, {
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "41",
					"OBJECT_TYPE": "WHT_TAX",
					"OBJECT_CODE": "30",
					"PH_TYPE": "NULL",
					"LABEL_CODE": "GNP",
					"CODE_DESC": "GNP",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}],
				"WHT_TAX_PERCENTAGE_TYPE": [{
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "42",
					"OBJECT_TYPE": "WHT_TAX_PERCENTAGE",
					"OBJECT_CODE": "10",
					"PH_TYPE": "NULL",
					"LABEL_CODE": "8",
					"CODE_DESC": "8",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}, {
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "43",
					"OBJECT_TYPE": "WHT_TAX_PERCENTAGE",
					"OBJECT_CODE": "20",
					"PH_TYPE": "NULL",
					"LABEL_CODE": "10",
					"CODE_DESC": "10",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}, {
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "44",
					"OBJECT_TYPE": "WHT_TAX_PERCENTAGE",
					"OBJECT_CODE": "30",
					"PH_TYPE": "NULL",
					"LABEL_CODE": "12",
					"CODE_DESC": "12",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}],
				"WHT_TAX_CODE_TYPE": [{
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "42",
					"OBJECT_TYPE": "WHT_TAX_CODE",
					"OBJECT_CODE": "10",
					"PH_TYPE": "NULL",
					"LABEL_CODE": "WHTTAX8",
					"CODE_DESC": "WHTTAX8",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}, {
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "43",
					"OBJECT_TYPE": "WHT_TAX_CODE",
					"OBJECT_CODE": "20",
					"PH_TYPE": "NULL",
					"LABEL_CODE": "WHTTAX10",
					"CODE_DESC": "WHTTAX10",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}, {
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "44",
					"OBJECT_TYPE": "WHT_TAX_CODE",
					"OBJECT_CODE": "30",
					"PH_TYPE": "NULL",
					"LABEL_CODE": "WHTTAX12",
					"CODE_DESC": "WHTTAX12",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}],
				"GCS_TYPE": [{
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "42",
					"OBJECT_TYPE": "GCS",
					"OBJECT_CODE": "10",
					"PH_TYPE": "NULL",
					"LABEL_CODE": "Group 1",
					"CODE_DESC": "Group 1",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}, {
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "43",
					"OBJECT_TYPE": "GCS",
					"OBJECT_CODE": "20",
					"PH_TYPE": "NULL",
					"LABEL_CODE": "Group 2",
					"CODE_DESC": "Group 2",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}, {
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "44",
					"OBJECT_TYPE": "GCS",
					"OBJECT_CODE": "30",
					"PH_TYPE": "NULL",
					"LABEL_CODE": "Group 3",
					"CODE_DESC": "Group 3",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}],
				"DOCUMENT_TYPE": [{
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "42",
					"OBJECT_TYPE": "DOCUMENT",
					"OBJECT_CODE": "10",
					"PH_TYPE": "NULL",
					"LABEL_CODE": "Tax Registration Document",
					"CODE_DESC": "Tax Registration Document",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}, {
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "43",
					"OBJECT_TYPE": "DOCUMENT",
					"OBJECT_CODE": "20",
					"PH_TYPE": "NULL",
					"LABEL_CODE": "Passbook",
					"CODE_DESC": "Passbook",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}, {
					"RETAILER_ID": "2023RET000001",
					"OBJECT_ID": "44",
					"OBJECT_TYPE": "DOCUMENT",
					"OBJECT_CODE": "30",
					"PH_TYPE": "NULL",
					"LABEL_CODE": "Proprietorship Document",
					"CODE_DESC": "Proprietorship Document",
					"VALID_FROM": "2023-01-01",
					"VALID_TO": "9999-12-31"
				}],
			};
			var oMasterDataModel = new JSONModel(oMasterData);
			return oMasterDataModel;
		}
	};
});