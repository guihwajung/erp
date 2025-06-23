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
            this.set_titletext("Simulation");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCZPR_FB_SIMULATION_DETAIL_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"YN_READONLY\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FIXEDROWS\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FROZENCOL\" type=\"STRING\" size=\"256\"/><Column id=\"YN_AUTOFILTER\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"YN_GROUPPANNEL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YN_READONLY\">N</Col><Col id=\"NO_FIXEDROWS\">1</Col><Col id=\"NO_FROZENCOL\">0</Col><Col id=\"YN_AUTOFILTER\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridSpec", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_WIDTH\" type=\"INT\" size=\"256\"/><Column id=\"YN_READONLY\" type=\"STRING\" size=\"256\"/><Column id=\"YN_ESSENTIAL\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CELLTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_ALIGN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_INPUT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HEADER1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HEADER2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HEADER3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"45","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DCZ_FB_SIMULATION_DETAIL.xfdl", function() {
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
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnCreate = this.gfnFormButtonAdd("btnCreate", "fnSimulationCreate");
        	this.btnSave = this.gfnFormButtonAdd("btnSave", "fnSimulationSave");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//this.fnAddFlagRow();
        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCZ_FB_SIMULATION_DETAIL");

        	this.gfnGridSet(this, this.dxGrid, this.dsGridInfo, this.dsGridSpec);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("NO_ID_FB", "string");
        	this.dsSelect.addColumn("DT_FEEDBACK", "string");
        	this.dsSelect.addColumn("CD_LICCOST", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "NO_ID_FB", "");
        	this.dsSelect.setColumn(0, "DT_FEEDBACK", "");
        	this.dsSelect.setColumn(0, "CD_LICCOST", "");

        	this.dsList.clear();
        	this.dsList.set_filterstr("");

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsInfo=select0 dsList=select1";
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
        	var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크
        // 	if (!this.gfnGridValidate(this.dxGrid)) return;
        //
        // 	this.dxGrid.updateToDataset();
        //
        // 	this.dsInsert.clearData();
        // 	this.dsUpdate.clearData();
        // 	this.dsDelete.clearData();
        //
        // 	for (var i = 0; i < this.dsList.rowcount; i++) {
        // 		var flag = this.gfnGetFlag(this.dsList, i);
        // 		switch(flag) {
        // 			case "I":
        // 				var nrow = this.dsInsert.addRow();
        // 				break;
        //
        // 			case "U":
        // 				var nrow = this.dsUpdate.addRow();
        // 				break;
        //
        // 			case "D":
        // 				var nrow = this.dsDelete.addRow();
        //
        // 				break;
        // 		}
        // 	}
        //
        // 	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;
        //
        	// save SP 한개로 사용하는 경우
        	/*
        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_FLAG", flag);
        				this.dsSave.setColumn(nrow, "NO_IDX", this.dsList.getColumn(i, "NO_IDX"));
        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;
        	*/

        // 	var strSvcId    = "save";
        // 	var strSvcType  = "save";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
        // 	//var inData      = "save=dsSave";
        // 	var outData     = "";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// transaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        	/*
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SYSTEM"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SYSTEM.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("시스템을 입력하세요.", "fnVaidateCallback");
        	}
        	*/
        	return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		this.fnSetSubGrid();
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };


        this.fnSetSubGrid = function() {
        	this.dsGridSpec.clearData();
        	this.SUB_GRID_PK = [];

        	var no_fixedrows = 1;
        	if (this.dsInfo.rowcount > 0) {
        		var ds = this.dsInfo;

        		// Flag
        		//this.fnAddFlagRow();

        		for(var i = 0; i < ds.rowcount; i++) {
        // 			var CD_COLID = ds.getColumn(i, "CD_COLID");
        // 			var DS_COLID = ds.getColumn(i, "DS_COLID");
        //
        // 			if(this.gfnIsNull(CD_COLID) && this.gfnIsNull(DS_COLID)) continue;
        //
        // 			var DS_COLID2 = ds.getColumn(i, "DS_COLID2");
        // 			var DS_COLID3 = ds.getColumn(i, "DS_COLID3");
        // 			var LN_COL = ds.getColumn(i, "LN_COL");
        // 			var DS_ORICOL = ds.getColumn(i, "DS_ORICOL");
        // 			var TY_PK = ds.getColumn(i, "TY_PK");
        // 			var TY_TYPE = ds.getColumn(i, "TY_TYPE");
        // 			var TY_NOTNULL = ds.getColumn(i, "TY_NOTNULL");
        // 			var CD_LEN = ds.getColumn(i, "CD_LEN");
        // 			var CD_REGEXP1 = ds.getColumn(i, "CD_REGEXP1");
        // 			var TY_INPUT = ds.getColumn(i, "TY_INPUT");
        // 			var TY_ALIGN = ds.getColumn(i, "TY_ALIGN");
        // 			var DS_COMBOLIS = ds.getColumn(i, "DS_COMBOLIS");
        // 			var CD_CODEFIND = ds.getColumn(i, "CD_CODEFIND");
        // 			var NM_CODEFIND = ds.getColumn(i, "NM_CODEFIND");
        // 			var DS_RESULTALIAS = ds.getColumn(i, "DS_RESULTALIAS");
        // 			var YN_SHOW = ds.getColumn(i, "YN_SHOW");
        // 			var YN_UPDATE = ds.getColumn(i, "YN_UPDATE");
        // 			var YN_READONLY = "Y";

        			var DS_FIELD = ds.getColumn(i, "DS_FIELD");
        			var DS_HEADER1 = ds.getColumn(i, "DS_HEADER1");
        			var DS_HEADER2 = ds.getColumn(i, "DS_HEADER2");
        			var DS_HEADER3 = ds.getColumn(i, "DS_HEADER3");
        			var NO_WIDTH = ds.getColumn(i, "NO_WIDTH");
        			var YN_READONLY = ds.getColumn(i, "YN_READONLY");
        			var YN_ESSENTIAL = ds.getColumn(i, "YN_ESSENTIAL");
        			var TY_CELLTYPE = ds.getColumn(i, "TY_CELLTYPE");
        			var TY_ALIGN = ds.getColumn(i, "TY_ALIGN");
        			var TY_INPUT = ds.getColumn(i, "TY_INPUT");


        			if (no_fixedrows < 2 && !this.gfnIsNull(DS_HEADER2)) {
        				no_fixedrows = 2;
        			}
        			if (no_fixedrows < 3 && !this.gfnIsNull(DS_HEADER3)) {
        				no_fixedrows = 3;
        			}

        // 			if(TY_PK == "Y") {
        // 				this.SUB_GRID_PK.push(CD_COLID);
        // 			}
        //
        // 			if(YN_SHOW == "N") {
        // 				LN_COL = 0;
        // 			}
        // 			if(YN_UPDATE == "Y") {
        // 				YN_READONLY = "N";
        // 			} else if(YN_UPDATE == "U") {
        // 				YN_READONLY = "U";
        // 			}
        			if(TY_INPUT == "CHECKBOX") {
        				TY_INPUT = "CHECKBOX_YN";
        			}

        			var nrow = this.dsGridSpec.addRow();
        			this.dsGridSpec.setColumn(nrow, "NO_WIDTH", NO_WIDTH);
        			this.dsGridSpec.setColumn(nrow, "DS_FIELD", DS_FIELD);
        			this.dsGridSpec.setColumn(nrow, "DS_HEADER1", DS_HEADER1);
        			this.dsGridSpec.setColumn(nrow, "DS_HEADER2", DS_HEADER2);
        			this.dsGridSpec.setColumn(nrow, "DS_HEADER3", DS_HEADER3);
        			this.dsGridSpec.setColumn(nrow, "YN_READONLY", YN_READONLY);
        			this.dsGridSpec.setColumn(nrow, "YN_ESSENTIAL", YN_ESSENTIAL);
        			this.dsGridSpec.setColumn(nrow, "TY_CELLTYPE", TY_CELLTYPE);
        			this.dsGridSpec.setColumn(nrow, "TY_ALIGN", TY_ALIGN);
        			this.dsGridSpec.setColumn(nrow, "TY_INPUT", TY_INPUT);


        // 			this.dsGridSpec.setColumn(nrow, "NO_WIDTH", LN_COL);
        // 			this.dsGridSpec.setColumn(nrow, "YN_READONLY", YN_READONLY);
        // 			this.dsGridSpec.setColumn(nrow, "YN_ESSENTIAL", TY_NOTNULL);
        // 			this.dsGridSpec.setColumn(nrow, "TY_CELLTYPE", TY_TYPE);
        // 			this.dsGridSpec.setColumn(nrow, "TY_ALIGN", TY_ALIGN);
        // 			this.dsGridSpec.setColumn(nrow, "TY_INPUT", TY_INPUT);
        // 			this.dsGridSpec.setColumn(nrow, "DS_FIELD", CD_COLID);
        // 			this.dsGridSpec.setColumn(nrow, "DS_HEADER1", DS_COLID);
        // 			this.dsGridSpec.setColumn(nrow, "DS_HEADER2", DS_COLID2);
        // 			this.dsGridSpec.setColumn(nrow, "DS_HEADER3", DS_COLID3);
        // 			this.dsGridSpec.setColumn(nrow, "DS_COMBOLIST", (this.gfnIsNull(CD_REGEXP1) ? DS_COMBOLIS : CD_REGEXP1));
        // 			this.dsGridSpec.setColumn(nrow, "CD_CODEFIND", CD_CODEFIND);
        // 			this.dsGridSpec.setColumn(nrow, "NM_CODEFIND", NM_CODEFIND);
        // 			this.dsGridSpec.setColumn(nrow, "DS_RESULTALIAS", DS_RESULTALIAS);
        			//this.dsGridSpecSub.setColumn(nrow, "NO_MAXLENGTH", CD_LEN);
        			//this.dsGridSpecSub.setColumn(nrow, "NO_GROUP", );
        			//this.dsGridSpecSub.setColumn(nrow, "NO_MERGE", );
        			//this.dsGridSpecSub.setColumn(nrow, "TY_SUMMARY", );
        			//this.dsGridSpecSub.setColumn(nrow, "AT_COLBACK", );
        			//this.dsGridSpecSub.setColumn(nrow, "AT_COLFORE", );
        			//this.dsGridSpecSub.setColumn(nrow, "AT_READONLY", );
        		}
        	}
        	//this.dsGridInfo.setColumn(0, "NO_FIXEDROWS", no_fixedrows);
        	this.gfnGridSet(this, this.dxGrid, this.dsGridInfo, this.dsGridSpec);
        }

        // this.fnAddFlagRow = function() {
        // 	var nrow = this.dsGridSpec.addRow();
        // 	this.dsGridSpec.setColumn(nrow, "NO_WIDTH", 20);
        // 	this.dsGridSpec.setColumn(nrow, "YN_READONLY", "Y");
        // 	this.dsGridSpec.setColumn(nrow, "YN_ESSENTIAL", "N");
        // 	this.dsGridSpec.setColumn(nrow, "TY_CELLTYPE", "TEXT");
        // 	this.dsGridSpec.setColumn(nrow, "TY_ALIGN", "CENTER");
        // 	this.dsGridSpec.setColumn(nrow, "TY_INPUT", "KEYIN");
        // 	this.dsGridSpec.setColumn(nrow, "DS_FIELD", this.ucFlag);
        // };


        this.fnSimulationCreate = function(obj,e) {

        }

        this.fnSimulationSave = function(obj,e) {

        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCZ_FB_SIMULATION_DETAIL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
