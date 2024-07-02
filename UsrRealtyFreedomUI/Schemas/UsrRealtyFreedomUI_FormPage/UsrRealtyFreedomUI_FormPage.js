define("UsrRealtyFreedomUI_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealtyFreedomUI"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "11090527-1e85-45ff-add9-c51ff4b37a78",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "ActionsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_ikubgm9_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"menuItems": [],
					"clickMode": "menu",
					"icon": "actions-button-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItem_CalcAvgPrice",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_nurzbuk_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrCalculateAveragePriceProcess",
							"processRunType": "ForTheSelectedPage",
							"recordIdProcessParameterName": "RealtyIdParameter"
						}
					},
					"icon": "calculator-button-icon"
				},
				"parentName": "ActionsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_aczl6h9_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "MyPushButtonRequest"
					},
					"clickMode": "default",
					"icon": "message-composer-checkmark"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrPrice",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_fwmbajn",
					"labelPosition": "auto",
					"control": "$PDS_UsrPrice_fwmbajn"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Currency",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCurrency_dse0ptz",
					"labelPosition": "auto",
					"control": "$PDS_UsrCurrency_dse0ptz",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_a5535kk",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_a5535kk_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Currency",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrArea",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrArea_ht2vtid",
					"labelPosition": "auto",
					"control": "$PDS_UsrArea_ht2vtid"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrCommission",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCommission_dicd5mh",
					"labelPosition": "auto",
					"control": "$PDS_UsrCommission_dicd5mh",
					"readonly": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "UsrTotalReservedMinutes",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrTotalReservedMinutes_bku0pot",
					"labelPosition": "auto",
					"control": "$PDS_UsrTotalReservedMinutes_bku0pot"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "UsrMinutesLeft",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 7,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrMinutesLeft_jfrrxkp",
					"labelPosition": "auto",
					"control": "$PDS_UsrMinutesLeft_jfrrxkp",
					"readonly": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "ComboBox_7wxnw94",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrType_alkekqj",
					"labelPosition": "auto",
					"control": "$PDS_UsrType_alkekqj",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_9b9zugl",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_9b9zugl_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_7wxnw94",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrOfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOfferType_x6d8a6g",
					"labelPosition": "auto",
					"control": "$PDS_UsrOfferType_x6d8a6g",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_rcbu1cp",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_rcbu1cp_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrOfferType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrComment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_nh54lg8",
					"labelPosition": "auto",
					"control": "$PDS_UsrComment_nh54lg8",
					"multiline": false,
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrManager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_2esns79",
					"labelPosition": "auto",
					"control": "$PDS_UsrManager_2esns79",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_qnhou16",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_qnhou16_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrManager",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrCommissionPercent",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrOfferTypeUsrCommissionPercent",
					"control": "$PDS_UsrOfferTypeUsrCommissionPercent",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "UsrNumber",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrNumber_opzm6jv",
					"labelPosition": "auto",
					"control": "$PDS_UsrNumber_opzm6jv",
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"multiline": false,
					"readonly": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_tf0ledm",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_tf0ledm_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_qwh6ttj",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_tf0ledm",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_a06t4yu",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_qwh6ttj",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_bo50r7q",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_bo50r7q_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisitFreedomUI",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_a06t4yu",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_ea0gbgi",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_ea0gbgi_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_mmvjbviDS"
						}
					}
				},
				"parentName": "FlexContainer_a06t4yu",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_xbhnj4a",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_xbhnj4a_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_a06t4yu",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_ef0fcbt",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_ef0fcbt_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_mmvjbvi"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_xbhnj4a",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_zorf7vy",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_zorf7vy_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisitFreedomUI"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_xbhnj4a",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_9qir5y9",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_9qir5y9_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_mmvjbvi"
					]
				},
				"parentName": "FlexContainer_a06t4yu",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_6bza2il",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_tf0ledm",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_Visits",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_mmvjbvi",
					"activeRow": "$GridDetail_mmvjbvi_ActiveRow",
					"selectionState": "$GridDetail_mmvjbvi_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_mmvjbvi_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_mmvjbviDS_Id",
					"columns": [
						{
							"id": "06baa08e-1d2e-f777-a651-de613ebdb544",
							"code": "GridDetail_mmvjbviDS_UsrDateAndTime",
							"path": "UsrDateAndTime",
							"caption": "#ResourceString(GridDetail_mmvjbviDS_UsrDateAndTime)#",
							"dataValueType": 7,
							"width": 158
						},
						{
							"id": "d6d533b4-9f93-07b7-244d-f37dab6e4889",
							"code": "GridDetail_mmvjbviDS_UsrPotentialCustomer",
							"path": "UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_mmvjbviDS_UsrPotentialCustomer)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact",
							"width": 183
						},
						{
							"id": "1d9029fd-817b-076e-a681-5305db03f78a",
							"code": "GridDetail_mmvjbviDS_UsrComment",
							"path": "UsrComment",
							"caption": "#ResourceString(GridDetail_mmvjbviDS_UsrComment)#",
							"dataValueType": 28,
							"width": 166
						},
						{
							"id": "d77ab13d-8233-4de2-bae7-bd3d348ac226",
							"code": "GridDetail_mmvjbviDS_UsrManager",
							"path": "UsrManager",
							"caption": "#ResourceString(GridDetail_mmvjbviDS_UsrManager)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact",
							"width": 131
						},
						{
							"id": "b71fcf7a-f9cd-50ea-320a-a562827a52d7",
							"code": "GridDetail_mmvjbviDS_UsrMinutes",
							"path": "UsrMinutes",
							"caption": "#ResourceString(GridDetail_mmvjbviDS_UsrMinutes)#",
							"dataValueType": 4
						}
					],
					"bulkActions": []
				},
				"parentName": "GridContainer_6bza2il",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_mmvjbvi_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_mmvjbviDS",
							"filters": "$GridDetail_mmvjbvi | crt.ToCollectionFilters : 'GridDetail_mmvjbvi' : $GridDetail_mmvjbvi_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_mmvjbvi_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "GridDetail_Visits",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_mmvjbvi_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_mmvjbviDS",
							"filters": "$GridDetail_mmvjbvi | crt.ToCollectionFilters : 'GridDetail_mmvjbvi' : $GridDetail_mmvjbvi_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_mmvjbvi_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_mmvjbvi_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_mmvjbvi_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_mmvjbvi",
							"filters": "$GridDetail_mmvjbvi | crt.ToCollectionFilters : 'GridDetail_mmvjbvi' : $GridDetail_mmvjbvi_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_mmvjbvi_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_Visits",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_mmvjbvi_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_mmvjbviDS",
							"filters": "$GridDetail_mmvjbvi | crt.ToCollectionFilters : 'GridDetail_mmvjbvi' : $GridDetail_mmvjbvi_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_mmvjbvi_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_Visits",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrArea_ht2vtid": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 100,
									"message": "#ResourceString(AreaCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrCurrency_dse0ptz": {
						"modelConfig": {
							"path": "PDS.UsrCurrency"
						}
					},
					"PDS_UsrPrice_fwmbajn": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 50,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrColumn5_258rpnz": {
						"modelConfig": {
							"path": "PDS.UsrColumn5"
						}
					},
					"PDS_UsrOfferType_x6d8a6g": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_UsrComment_nh54lg8": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrManager_2esns79": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrNumber_opzm6jv": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"PDS_UsrType_alkekqj": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrCommission_dicd5mh": {
						"modelConfig": {
							"path": "PDS.UsrCommission"
						}
					},
					"PDS_UsrOfferTypeUsrCommissionPercent": {
						"modelConfig": {
							"path": "PDS.UsrOfferTypeUsrCommissionPercent"
						}
					},
					"GridDetail_mmvjbvi": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_mmvjbviDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_mmvjbviDS_UsrDateAndTime": {
									"modelConfig": {
										"path": "GridDetail_mmvjbviDS.UsrDateAndTime"
									}
								},
								"GridDetail_mmvjbviDS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_mmvjbviDS.UsrPotentialCustomer"
									}
								},
								"GridDetail_mmvjbviDS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_mmvjbviDS.UsrComment"
									}
								},
								"GridDetail_mmvjbviDS_UsrManager": {
									"modelConfig": {
										"path": "GridDetail_mmvjbviDS.UsrManager"
									}
								},
								"GridDetail_mmvjbviDS_UsrMinutes": {
									"modelConfig": {
										"path": "GridDetail_mmvjbviDS.UsrMinutes"
									}
								},
								"GridDetail_mmvjbviDS_Id": {
									"modelConfig": {
										"path": "GridDetail_mmvjbviDS.Id"
									}
								}
							}
						}
					},
					"PDS_UsrTotalReservedMinutes_bku0pot": {
						"modelConfig": {
							"path": "PDS.UsrTotalReservedMinutes"
						}
					},
					"PDS_UsrMinutesLeft_jfrrxkp": {
						"modelConfig": {
							"path": "PDS.UsrMinutesLeft"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_mmvjbviDS": [
							{
								"attributePath": "UsrParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealtyFreedomUI",
							"attributes": {
								"UsrOfferTypeUsrCommissionPercent": {
									"path": "UsrOfferType.UsrCommissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_mmvjbviDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisitFreedomUI",
							"attributes": {
								"UsrDateAndTime": {
									"path": "UsrDateAndTime"
								},
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"UsrComment": {
									"path": "UsrComment"
								},
								"UsrManager": {
									"path": "UsrManager"
								},
								"UsrMinutes": {
									"path": "UsrMinutes"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "MyPushButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					this.console.log("Button works...");
					//Terrasoft.showInformation("My button was pressed.");
					var price = await request.$context.PDS_UsrPrice_fwmbajn;
					this.console.log("Price = "+ price);
					request.$context.PDS_UsrPrice_fwmbajn = price * 0.2;
					// lookup value operations:
					//debugger;
					var realtyTypeObject = await request.$context.PDS_UsrOfferType_x6d8a6g;
					if (realtyTypeObject)
						{
							var typeName = realtyTypeObject.displayValue;
							var typeId = realtyTypeObject.value;
							this.console.log("Type id: " + typeId + ", type name: " + typeName);
						}
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
					}
			},
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {
					if (request.attributeName === 'PDS_UsrPrice_fwmbajn' ||
					request.attributeName === 'PDS_UsrOfferTypeUsrCommissionPercent' ) {
						var price = await request.$context.PDS_UsrPrice_fwmbajn;
						var percent = await request.$context.PDS_UsrOfferTypeUsrCommissionPercent;
						var commission = price * percent / 100;
						request.$context.PDS_UsrCommission_dicd5mh = commission;
					} /* Call the next handler if it exists and return. */
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			"usr.DGValidator":{
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value>= minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						}
						else{
							result = {
								"usr.DGValidator": {
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
			
		}/**SCHEMA_VALIDATORS*/
	};
});