(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZZPR_MDM_MASTER_SELECT_WITH_USER_CAT_D</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DZZPR_MDM_DETAIL_SELECT_WITH_USER</Col></Row><Row><Col id=\"TARGET\">d_insert</Col><Col id=\"SP\">DZZPR_MDM_DETAIL_INSERT</Col></Row><Row><Col id=\"TARGET\">d_update</Col><Col id=\"SP\">DZZPR_MDM_DETAIL_UPDATE</Col></Row><Row><Col id=\"TARGET\">d_delete</Col><Col id=\"SP\">DZZPR_MDM_DETAIL_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSubInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridInfoSub", this);
            obj._setContents("<ColumnInfo><Column id=\"YN_READONLY\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FIXEDROWS\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FROZENCOL\" type=\"STRING\" size=\"256\"/><Column id=\"YN_AUTOFILTER\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"YN_GROUPPANNEL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YN_READONLY\">N</Col><Col id=\"NO_FIXEDROWS\">1</Col><Col id=\"NO_FROZENCOL\">0</Col><Col id=\"YN_AUTOFILTER\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridSpecSub", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_WIDTH\" type=\"INT\" size=\"256\"/><Column id=\"YN_READONLY\" type=\"STRING\" size=\"256\"/><Column id=\"YN_ESSENTIAL\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CELLTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_ALIGN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_INPUT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HEADER1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HEADER2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HEADER3\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMBOLIST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CODEFIND\" type=\"STRING\" size=\"256\"/><Column id=\"NM_CODEFIND\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RESULTALIAS\" type=\"STRING\" size=\"256\"/><Column id=\"NO_MAXLENGTH\" type=\"INT\" size=\"256\"/><Column id=\"NO_GROUP\" type=\"INT\" size=\"256\"/><Column id=\"NO_MERGE\" type=\"INT\" size=\"256\"/><Column id=\"TY_SUMMARY\" type=\"STRING\" size=\"256\"/><Column id=\"AT_COLBACK\" type=\"STRING\" size=\"256\"/><Column id=\"AT_COLFORE\" type=\"STRING\" size=\"256\"/><Column id=\"AT_READONLY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CAT_01\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SYSTEM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_MASTER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCAT_01","0.0","10.0","79.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("대분류");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCAT_01","staCAT_01:0","10.0","99","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DQX_CAT_01");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","400","0","5","100%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsListSub");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCAT_01.form.CDTextBox","value","dsSearch","CAT_01");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DQZ_MDM_MASTERINFO_CAT_D.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	if(!this.gfnIsNull(this.getOwnerFrame().CAT_01)) {
        		this.dsSearch.setColumn(0, "CAT_01", this.getOwnerFrame().CAT_01);
        		this.dsSearch.setColumn(0, "CD_SYSTEM", this.getOwnerFrame().CD_SYSTEM);
        		this.dsSearch.setColumn(0, "CD_MASTER", this.getOwnerFrame().CD_MASTER);

        		//this.divSearch.form.ccfCD_SYSTEM.form.set_readonly(true);
        		//this.divSearch.form.ccfCD_SYSTEM.form.fnCodeFindLoad();	// 코드값 변경후 명칭 로딩을 위한 강제 로딩
        		this.FormBtns.Select.click();
        	}

        	this.ccfCAT_01.form.DSTextBox.setOffsetWidth(0);

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnExcelUpload = this.gfnFormButtonAdd("ExcelUpload", "fnExcelUpload");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCAT_01 = this.divSearch.form.ccfCAT_01;
        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataRight.form.objGridSub;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DQ", "DQZ_MDM_MASTERINFO_CAT");
        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);

        	// sub그리드 dataset을 셋팅정보와 같이 받아오다보니
        	// 처음 sub 그리드 셋팅시만 dataset onload 이벤트가 안타는 문제가 있어서 빈 그리드 셋팅
        	this.fnAddFlagRow();
        	this.gfnGridSet(this, this.dxGridSub, this.dsGridInfoSub, this.dsGridSpecSub);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SYSTEM", "string");
        	this.dsSelect.addColumn("CD_MASTER", "string");
        	this.dsSelect.addColumn("ID_USER", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_SYSTEM", "string");
        	this.dsSelectSub.addColumn("CD_MASTER", "string");
        	this.dsSelectSub.addColumn("ID_USER", "string");
        	this.dsSelectSub.addColumn("CD_DEPT", "string");

        	this.dsInsertSub = new Dataset();
        	this.dsInsertSub.addColumn("CD_SYSTEM", "string");
        	this.dsInsertSub.addColumn("CD_MASTER", "string");
        	this.dsInsertSub.addColumn("Values", "string");
        	this.dsInsertSub.addColumn("Keys", "string");
        	this.dsInsertSub.addColumn("ID_USER", "string");

        	this.dsUpdateSub = new Dataset();
        	this.dsUpdateSub.addColumn("CD_SYSTEM", "string");
        	this.dsUpdateSub.addColumn("CD_MASTER", "string");
        	this.dsUpdateSub.addColumn("Values", "string");
        	this.dsUpdateSub.addColumn("Keys", "string");
        	this.dsUpdateSub.addColumn("ID_USER", "string");

        	this.dsDeleteSub = new Dataset();
        	this.dsDeleteSub.addColumn("CD_SYSTEM", "string");
        	this.dsDeleteSub.addColumn("CD_MASTER", "string");
        	this.dsDeleteSub.addColumn("Keys", "string");
        	this.dsDeleteSub.addColumn("ID_USER", "string");


        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_SYSTEM", this.dsSearch.getColumn(0, "CD_SYSTEM"));
        	this.dsSelect.setColumn(0, "CD_MASTER", this.dsSearch.getColumn(0, "CD_MASTER"));
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	this.dsSelect.setColumn(0, "CD_DEPT", this.AuthClient.CD_DEPT);

        	this.dsListSub.clear();

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGridSub); // top (default), bottom, current
        	if (this.dsList.getColumn(this.dsList.rowposition, "TY_COMMON") == "Y")
        	{
        		this.dsListSub.set_enableevent(false);
        		this.dsListSub.setColumn(nrow, "CD_SYSTEM", this.dsList.getColumn(this.dsList.rowposition, "CD_SYSTEM"));
        		this.dsListSub.setColumn(nrow, "CD_TYPE", this.dsList.getColumn(this.dsList.rowposition, "CD_MASTER"));
        		this.dsListSub.set_enableevent(true);
        	}

        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGridSub);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGridSub)) return;

        	this.dxGridSub.updateToDataset();

        	this.dsInsertSub.clearData();
        	this.dsUpdateSub.clearData();
        	this.dsDeleteSub.clearData();

        	var cd_system = this.dsList.getColumn(this.dsList.rowposition, "CD_SYSTEM");
        	var cd_master = this.dsList.getColumn(this.dsList.rowposition, "CD_MASTER");
        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		switch(flag) {
        			case "I":
        				var insert_keys = [];
        				var insert_values = [];
        				for(var c = 0; c < this.dsListSub.colcount; c++) {
        					var colnm = this.dsListSub.colinfos[c].name;
        					var type = this.dsListSub.colinfos[c].type.toUpperCase();
        					if(colnm == this.ucFlag || colnm == this.ucSort) continue;
        					var val = this.dsListSub.getColumn(i, colnm);
        					if(this.gfnIsNull(val)) {
        						val = "NULL";
        					}
        					if(colnm == "CD_SYSTEM") {
        						val = cd_system;
        					}
        					if(colnm == "CD_TYPE") {
        						val = cd_master;
        					}

        					if(val == "NULL" || type == "INT" || type == "BIGDECIMAL" || type == "FLOAT") {
        						insert_values.push(val);
        					} else {
        						// 따옴표 들어간 경우 문제가 있을듯.. ' -> '' or '''' 변환처리필요
        						insert_values.push("'" + val.replace(/\'/g, "''") + "'");
        					}

        					insert_keys.push(colnm);
        				}

        				var nrow = this.dsInsertSub.addRow();
        				this.dsInsertSub.setColumn(nrow, "CD_SYSTEM", cd_system);
        				this.dsInsertSub.setColumn(nrow, "CD_MASTER", cd_master);
        				this.dsInsertSub.setColumn(nrow, "Values", insert_values.join(','));
        				this.dsInsertSub.setColumn(nrow, "Keys", insert_keys.join(','));
        				this.dsInsertSub.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;

        			case "U":
        				var update_keys = [];
        				var update_values = [];
        				for(var c = 0; c < this.dsListSub.colcount; c++) {
        					var colnm = this.dsListSub.colinfos[c].name;
        					var type = this.dsListSub.colinfos[c].type.toUpperCase();
        					if(colnm == this.ucFlag || colnm == this.ucSort) continue;

        					// PK 키 체크
        					if(this.gfnIsExistInArray(this.SUB_GRID_PK, colnm)) {
        						//if(update_keys.length == 0) update_keys.push("");
        						if(type == "INT" || type == "BIGDECIMAL" || type == "FLOAT") {
        							update_keys.push(colnm + " = " + this.dsListSub.getColumn(i, colnm));
        						} else {
        							update_keys.push(colnm + " = '" + this.dsListSub.getColumn(i, colnm) + "'");
        						}
        					} else {
        						var val = this.dsListSub.getColumn(i, colnm);
        						if(this.gfnIsNull(val)) {
        							val = "NULL";
        						}
        						if(val == "NULL" || type == "INT" || type == "BIGDECIMAL" || type == "FLOAT") {
        							update_values.push(colnm + " = " + val);
        						} else {
        							update_values.push(colnm + " = '" + val.replace(/\'/g, "''") + "'");
        						}

        					}
        				}

        				var nrow = this.dsUpdateSub.addRow();
        				this.dsUpdateSub.setColumn(nrow, "CD_SYSTEM", cd_system);
        				this.dsUpdateSub.setColumn(nrow, "CD_MASTER", cd_master);
        				this.dsUpdateSub.setColumn(nrow, "Values", update_values.join(','));
        				this.dsUpdateSub.setColumn(nrow, "Keys", update_keys.join(' AND '));
        				this.dsUpdateSub.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var delete_keys = [];
        				for(var c = 0; c < this.dsListSub.colcount; c++) {
        					var colnm = this.dsListSub.colinfos[c].name;
        					var type = this.dsListSub.colinfos[c].type.toUpperCase();
        					if(colnm == this.ucFlag || colnm == this.ucSort) continue;
        					// PK 키 체크
        					if(this.gfnIsExistInArray(this.SUB_GRID_PK, colnm)) {
        						//if(delete_keys.length == 0) delete_keys.push("");
        						if(type == "INT" || type == "BIGDECIMAL" || type == "FLOAT") {
        							delete_keys.push(colnm + " = " + this.dsListSub.getColumn(i, colnm));
        						} else {
        							delete_keys.push(colnm + " = '" + this.dsListSub.getColumn(i, colnm) + "'");
        						}
        					}
        				}

        				var nrow = this.dsDeleteSub.addRow();
        				this.dsDeleteSub.setColumn(nrow, "CD_SYSTEM", cd_system);
        				this.dsDeleteSub.setColumn(nrow, "CD_MASTER", cd_master);
        				this.dsDeleteSub.setColumn(nrow, "Keys", delete_keys.join(' AND '));
        				this.dsDeleteSub.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsInsertSub.rowcount == 0 && this.dsUpdateSub.rowcount == 0 && this.dsDeleteSub.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "d_insert=dsInsertSub d_update=dsUpdateSub d_delete=dsDeleteSub";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGridSub);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }


        /************************************************************************
         * Validate
         ************************************************************************/

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if (svcID == "detail") {
        		this.fnSetSubGrid();
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }


        this.fnSelectSub = function() {
        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return false;

        	var cd_system = this.dsList.getColumn(this.dsList.rowposition, "CD_SYSTEM");
        	var cd_master = this.dsList.getColumn(this.dsList.rowposition, "CD_MASTER");

        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();
        	this.dsSelectSub.setColumn(0, "CD_SYSTEM", cd_system);
        	this.dsSelectSub.setColumn(0, "CD_MASTER", cd_master);
        	this.dsSelectSub.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	this.dsSelectSub.setColumn(0, "CD_DEPT", this.AuthClient.CD_DEPT);

        	this.dsListSub.clear();
        	this.dsListSub.set_filterstr("");

        	var strSvcId    = "detail";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "d_select=dsSelectSub";
        	var outData     = "dsSubInfo=d_select0 dsListSub=d_select1";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnSetSubGrid = function() {
        	this.dsGridSpecSub.clearData();
        	this.SUB_GRID_PK = [];

        	var no_fixedrows = 1;
        	if (this.dsSubInfo.rowcount > 0) {
        		var ds = this.dsSubInfo;

        		// Flag
        		this.fnAddFlagRow();

        		for(var i = 0; i < ds.rowcount; i++) {
        			var CD_COLID = ds.getColumn(i, "CD_COLID");
        			var DS_COLID = ds.getColumn(i, "DS_COLID");

        			if(this.gfnIsNull(CD_COLID) && this.gfnIsNull(DS_COLID)) continue;

        			var DS_COLID2 = ds.getColumn(i, "DS_COLID2");
        			var DS_COLID3 = ds.getColumn(i, "DS_COLID3");
        			var LN_COL = ds.getColumn(i, "LN_COL");
        			var DS_ORICOL = ds.getColumn(i, "DS_ORICOL");
        			var TY_PK = ds.getColumn(i, "TY_PK");
        			var TY_TYPE = ds.getColumn(i, "TY_TYPE");
        			var TY_NOTNULL = ds.getColumn(i, "TY_NOTNULL");
        			var CD_LEN = ds.getColumn(i, "CD_LEN");
        			var CD_REGEXP1 = ds.getColumn(i, "CD_REGEXP1");
        			var TY_INPUT = ds.getColumn(i, "TY_INPUT");
        			var TY_ALIGN = ds.getColumn(i, "TY_ALIGN");
        			var DS_COMBOLIS = ds.getColumn(i, "DS_COMBOLIS");
        			var CD_CODEFIND = ds.getColumn(i, "CD_CODEFIND");
        			var NM_CODEFIND = ds.getColumn(i, "NM_CODEFIND");
        			var DS_RESULTALIAS = ds.getColumn(i, "DS_RESULTALIAS");
        			var YN_SHOW = ds.getColumn(i, "YN_SHOW");
        			var YN_UPDATE = ds.getColumn(i, "YN_UPDATE");
        			var YN_READONLY = "Y";

        			if (no_fixedrows < 2 && !this.gfnIsNull(DS_COLID2)) {
        				no_fixedrows = 2;
        			}
        			if (no_fixedrows < 3 && !this.gfnIsNull(DS_COLID3)) {
        				no_fixedrows = 3;
        			}

        			if(TY_PK == "Y") {
        				this.SUB_GRID_PK.push(CD_COLID);
        			}

        			if(YN_SHOW == "N") {
        				LN_COL = 0;
        			}
        			if(YN_UPDATE == "Y") {
        				YN_READONLY = "N";
        			} else if(YN_UPDATE == "U") {
        				YN_READONLY = "U";
        			}
        			if(TY_INPUT == "CHECKBOX") {
        				TY_INPUT = "CHECKBOX_YN";
        			}

        			var nrow = this.dsGridSpecSub.addRow();
        			this.dsGridSpecSub.setColumn(nrow, "NO_WIDTH", LN_COL);
        			this.dsGridSpecSub.setColumn(nrow, "YN_READONLY", YN_READONLY);
        			this.dsGridSpecSub.setColumn(nrow, "YN_ESSENTIAL", TY_NOTNULL);
        			this.dsGridSpecSub.setColumn(nrow, "TY_CELLTYPE", TY_TYPE);
        			this.dsGridSpecSub.setColumn(nrow, "TY_ALIGN", TY_ALIGN);
        			this.dsGridSpecSub.setColumn(nrow, "TY_INPUT", TY_INPUT);
        			this.dsGridSpecSub.setColumn(nrow, "DS_FIELD", CD_COLID);
        			this.dsGridSpecSub.setColumn(nrow, "DS_HEADER1", DS_COLID);
        			this.dsGridSpecSub.setColumn(nrow, "DS_HEADER2", DS_COLID2);
        			this.dsGridSpecSub.setColumn(nrow, "DS_HEADER3", DS_COLID3);
        			this.dsGridSpecSub.setColumn(nrow, "DS_COMBOLIST", (this.gfnIsNull(CD_REGEXP1) ? DS_COMBOLIS : CD_REGEXP1));
        			this.dsGridSpecSub.setColumn(nrow, "CD_CODEFIND", CD_CODEFIND);
        			this.dsGridSpecSub.setColumn(nrow, "NM_CODEFIND", NM_CODEFIND);
        			this.dsGridSpecSub.setColumn(nrow, "DS_RESULTALIAS", DS_RESULTALIAS);
        			//this.dsGridSpecSub.setColumn(nrow, "NO_MAXLENGTH", CD_LEN);
        			//this.dsGridSpecSub.setColumn(nrow, "NO_GROUP", );
        			//this.dsGridSpecSub.setColumn(nrow, "NO_MERGE", );
        			//this.dsGridSpecSub.setColumn(nrow, "TY_SUMMARY", );
        			//this.dsGridSpecSub.setColumn(nrow, "AT_COLBACK", );
        			//this.dsGridSpecSub.setColumn(nrow, "AT_COLFORE", );
        			//this.dsGridSpecSub.setColumn(nrow, "AT_READONLY", );
        		}
        	}
        	this.dsGridInfoSub.setColumn(0, "NO_FIXEDROWS", no_fixedrows);
        	this.gfnGridSet(this, this.dxGridSub, this.dsGridInfoSub, this.dsGridSpecSub);
        // 	this.dxGridSub.BeforeUserDataSetParam = "fnGridSub_BeforeUserDataSetParam";
        }

        this.fnAddFlagRow = function() {
        	var nrow = this.dsGridSpecSub.addRow();
        	this.dsGridSpecSub.setColumn(nrow, "NO_WIDTH", 20);
        	this.dsGridSpecSub.setColumn(nrow, "YN_READONLY", "Y");
        	this.dsGridSpecSub.setColumn(nrow, "YN_ESSENTIAL", "N");
        	this.dsGridSpecSub.setColumn(nrow, "TY_CELLTYPE", "TEXT");
        	this.dsGridSpecSub.setColumn(nrow, "TY_ALIGN", "CENTER");
        	this.dsGridSpecSub.setColumn(nrow, "TY_INPUT", "KEYIN");
        	this.dsGridSpecSub.setColumn(nrow, "DS_FIELD", this.ucFlag);
        };
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		this.fnSelectSub();
        		obj.oldrow = -1;
        	}
        };

        this.dsList_canrowposchange = function(obj,e) {
        	var can_rowchange = true;
        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		if (flag == "I" || flag == "U" || flag == "D") {
        			can_rowchange = false;
        			break;
        		}
        	}
        	if(!can_rowchange) {
        		this._row = e.newrow;
        		this.gfnConfirm("변경된 데이터가 있습니다.\r\n계속 진행하시겠습니까?", "dsList_canrowposchange_callback");
        	}
        	return can_rowchange;
        }

        this.dsList_canrowposchange_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsList.set_enableevent(false);
        		this.dsList.set_rowposition(this._row);
        		this.dsList.set_enableevent(true);
        	}
        }

        /*
         *	서브 그리드 코드파인드
         */
        this.fnGridSub_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	if (id == "DZX_CFUSERGROUP") {
        		var cd_system = this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_SYSTEM");
        		if(this.gfnIsNull(cd_system)) {
        			this.gfnAlert("시스템코드를 먼저 입력하세요.");
        			return false;
        		}
         		dsUserParam.setColumn(nrow, "CD_MODULE", this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_SYSTEM"));
         	}
        	return true;
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.divData_ondragmove = function(obj,e)
        {
           if(e.userdata == "splitter") {
              this.divData.form.divSplitter.set_left(e.clientx);
              this.divData.form.resetScroll();
           }
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
           e.set_userdata("splitter");
           return true;
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };


        /*
         *	엑셀업로드
         */
        this.fnExcelUpload = function() {
        	// this.gfnExcelImport("적용할Dataset명","sheet명","데이터시작좌표","콜백함수명","구분ID",현재폼);
        	// sheet명 없으면 첫번째 sheet
        	this.gfnExcelImport("dsListSub","","A2","fnExcelImportCallback","import",this);
        	//this.gfnExcelImport("dsListSub","sheet1","A2","fnExcelImportCallback","import",this);
        }

        this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet) {
        	// 다중 시트 처리시 양식의 해당 시트여부를 체크하고자 할땐 dsSheet 시트명 체크
        // 	if (dsSheet.rowcount > 1) {
        // 		trace(dsSheet.getColumn(1, "sheetname"));
        // 	}

        	// 엑셀 양식과 그리드 컬럼이 그대로 일치 하는경우 아래와 같이 처리.
        	// 아닌경우는 이부분 주석처리
        	for (var i=0; i< this.dsListSub.getColCount(); i++)
        	{
        		sColumnId = "Column"+i;
        		var sColumnNm = this.gfnGridGetBindColumnNameByIndex(this.dxGridSub, i);
        		if (sColumnNm != "" && sColumnId != sColumnNm)
        		{
        			dsOut.updateColID(sColumnId, sColumnNm);
        		}
        	}

        	// 양식이 일치하고 엑셀내역을 기존데이터에 Insert하지 않고
        	// 엑셀내역 그대로 그리드 반영할 시 copyData
        	//this.dsListSub.copyData(dsOut);

        	this.dsListSub.set_enableevent(false);
        	for (var i=0; i<dsOut.rowcount; i++) {
        		var nrow = this.dsListSub.addRow();
        		this.dsListSub.setColumn(nrow, this.ucFlag, "I");

        		// 양식이 일치하는 경우 copyRow
        		this.dsListSub.copyRow(nrow, dsOut, i);

        		// 양식과 일치하지 않는 경우 아래와 같이 컬럼별로 처리.
        // 		this.dsListSub.setColumn(nrow, "CD_SYSTEM", dsOut.getColumn(i, "Column1"));
        // 		this.dsListSub.setColumn(nrow, "CD_TYPE", dsOut.getColumn(i, "Column2"));

        	}
        	this.dsListSub.set_enableevent(true);

        	this.gfnSetFormStatus(this, "I");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DQZ_MDM_MASTERINFO_CAT_D.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
