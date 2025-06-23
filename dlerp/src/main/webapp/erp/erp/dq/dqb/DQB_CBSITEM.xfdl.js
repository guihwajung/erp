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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DQBPR_CBSMENU_TREE_SELECT</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DQBPR_CBSITEM_SELECT</Col></Row><Row><Col id=\"TARGET\">d_insert</Col><Col id=\"SP\">DQBPR_CBSITEM_INSERT</Col></Row><Row><Col id=\"TARGET\">d_update</Col><Col id=\"SP\">DQBPR_CBSITEM_UPDATE</Col></Row><Row><Col id=\"TARGET\">d_delete</Col><Col id=\"SP\">DQBPR_CBSITEM_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_LV1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_LV1\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("CBS 코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CBS","sta00:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","35%","0","5","100%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_text("CBS 메뉴");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("CBS ITEM");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","sta02:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CBS.form.CDTextBox","value","dsSearch","CD_LV1");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DQB_CBSITEM.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	//this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	// 화면 오픈시 조회함
        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	// 서브 버튼 사용(2개 그리드 중간에 있는 파란선) 상단에 공통 셋트가 하나더 생긴다
        	//this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter); // divSplitter sync
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btn1 = this.gfnFormButtonAdd("Detail", "fnDetail1");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CBS = this.divSearch.form.ccfCD_CBS;
        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataRight.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CBS.CodeFindName = "DQX_CBSMENU";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DQ", "DQB_CBSITEM_TREE", "DS_CBS", "TREE_LEVEL");
        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);

        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DQ", "DQB_CBSITEM");
        	//this.dxGridSub.BeforeUserDataSetParam = "fnGridSub_BeforeUserDataSetParam";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_LV1", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_CBS", "string");

        		this.dsInsertSub = new Dataset();
        	this.dsInsertSub.addColumn("CD_CBS", "string");
        	this.dsInsertSub.addColumn("CD_ITEM", "string");
        	this.dsInsertSub.addColumn("DS_CBS", "string");
        	this.dsInsertSub.addColumn("SZ_CBS", "string");
        	this.dsInsertSub.addColumn("UT_CBS", "string");
        	this.dsInsertSub.addColumn("SN_NO", "string");
        	this.dsInsertSub.addColumn("CD_ITEMREG", "string");
        	this.dsInsertSub.addColumn("ID_UPDATE", "string");
        	this.dsInsertSub.addColumn("ID_DAM1", "string");
        	this.dsInsertSub.addColumn("ID_DAM2", "string");
        	this.dsInsertSub.addColumn("CD_COST", "string");
        	this.dsInsertSub.addColumn("CD_CM", "string");
        	this.dsInsertSub.addColumn("YN_NOSHOW", "string");

        	this.dsUpdateSub = new Dataset();
        	this.dsUpdateSub.addColumn("SN_ITEM", "string");
        	this.dsUpdateSub.addColumn("CD_CBS", "string");
        	this.dsUpdateSub.addColumn("CD_ITEM", "string");
        	this.dsUpdateSub.addColumn("DS_CBS", "string");
        	this.dsUpdateSub.addColumn("SZ_CBS", "string");
        	this.dsUpdateSub.addColumn("UT_CBS", "string");
        	this.dsUpdateSub.addColumn("ID_UPDATE", "string");
        	this.dsUpdateSub.addColumn("ID_DAM1", "string");
        	this.dsUpdateSub.addColumn("ID_DAM2", "string");
        	this.dsUpdateSub.addColumn("CD_COST", "string");
        	this.dsUpdateSub.addColumn("CD_CM", "string");
        	this.dsUpdateSub.addColumn("YN_NOSHOW", "string");

        	this.dsDeleteSub = new Dataset();
        	this.dsDeleteSub.addColumn("CD_CBS", "string");
        	this.dsDeleteSub.addColumn("CD_ITEM", "string");
        	this.dsDeleteSub.addColumn("ID_UPDATE", "string");
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

        	this.dsSelect.setColumn(0, "CD_LV1", this.dsSearch.getColumn(0, "CD_LV1"));

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
        	if(this.dsList.getColumn(this.dsList.rowposition, "CNT") < 1) {
        		this.gfnAlert("자리수 항목값이 0 이하일 경우에는 신규입력 할수 없습니다.");
        		return;
        	}
        	else if(this.dsList.getColumn(this.dsList.rowposition, "YN_ITEM") == '') {
        		this.gfnAlert("CBS메뉴(구조)관리 화면에서 규격/비규격 설정을 하셔야 신규입력이 가능합니다.");
        		return;
        	}


        	var nrow = this.gfnGridAdd(this.dxGridSub);

        	this.dsListSub.set_enableevent(false);
        	this.dsListSub.setColumn(nrow, "CD_ITEMREG", this.dsList.getColumn(this.dsList.rowposition, "ITEMREG"));
        	this.dsListSub.set_enableevent(true);
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

        	var cd_cbs = this.dsList.getColumn(this.dsList.rowposition, "CD_CBS");
        	var cnt = this.dsList.getColumn(this.dsList.rowposition, "CNT");

        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		if(cnt != this.dsListSub.getColumn(i, "CD_ITEM").length){
        			this.gfnAlert("ITEM코드 항목 값의 자리수는 [" + cnt + "]자리수로 해야합니다.");
        			return;
        		}

        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsertSub.addRow();
        				this.dsInsertSub.setColumn(nrow, "CD_CBS", cd_cbs);
        				this.dsInsertSub.setColumn(nrow, "CD_ITEM", this.dsListSub.getColumn(i, "CD_ITEM"));
        				this.dsInsertSub.setColumn(nrow, "DS_CBS", this.dsListSub.getColumn(i, "DS_CBS"));
        				this.dsInsertSub.setColumn(nrow, "SZ_CBS", this.dsListSub.getColumn(i, "SZ_CBS"));
        				this.dsInsertSub.setColumn(nrow, "UT_CBS", this.dsListSub.getColumn(i, "UT_CBS"));
        				this.dsInsertSub.setColumn(nrow, "SN_NO", this.dsListSub.getColumn(i, "SN_NO"));
        				this.dsInsertSub.setColumn(nrow, "CD_ITEMREG", this.dsListSub.getColumn(i, "CD_ITEMREG"));
        				this.dsInsertSub.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				//this.dsInsertSub.setColumn(nrow, "ID_DAM1", this.dsListSub.getColumn(i, "ID_DAM1"));
        				//this.dsInsertSub.setColumn(nrow, "ID_DAM2", this.dsListSub.getColumn(i, "ID_DAM2"));
        				this.dsInsertSub.setColumn(nrow, "CD_COST", this.dsListSub.getColumn(i, "CD_COST"));
        				this.dsInsertSub.setColumn(nrow, "CD_CM", this.dsListSub.getColumn(i, "CD_CM"));
        				this.dsInsertSub.setColumn(nrow, "YN_NOSHOW", this.dsListSub.getColumn(i, "YN_NOSHOW"));
        				break;



        			case "U":
        				var nrow = this.dsUpdateSub.addRow();
        				this.dsUpdateSub.setColumn(nrow, "SN_ITEM", this.dsListSub.getColumn(i, "SN_ITEM"));
        				this.dsUpdateSub.setColumn(nrow, "CD_CBS", cd_cbs);
        				this.dsUpdateSub.setColumn(nrow, "CD_ITEM", this.dsListSub.getColumn(i, "CD_ITEM"));
        				this.dsUpdateSub.setColumn(nrow, "DS_CBS", this.dsListSub.getColumn(i, "DS_CBS"));
        				this.dsUpdateSub.setColumn(nrow, "SZ_CBS", this.dsListSub.getColumn(i, "SZ_CBS"));
        				this.dsUpdateSub.setColumn(nrow, "UT_CBS", this.dsListSub.getColumn(i, "UT_CBS"));
        				this.dsUpdateSub.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				//this.dsUpdateSub.setColumn(nrow, "ID_DAM1", this.dsListSub.getColumn(i, "ID_DAM1"));
        				//this.dsUpdateSub.setColumn(nrow, "ID_DAM2", this.dsListSub.getColumn(i, "ID_DAM2"));
        				this.dsUpdateSub.setColumn(nrow, "CD_COST", this.dsListSub.getColumn(i, "CD_COST"));
        				this.dsUpdateSub.setColumn(nrow, "CD_CM", this.dsListSub.getColumn(i, "CD_CM"));
        				this.dsUpdateSub.setColumn(nrow, "YN_NOSHOW", this.dsListSub.getColumn(i, "YN_NOSHOW"));
        				break;

        			case "D":
        				var nrow = this.dsDeleteSub.addRow();
        				this.dsDeleteSub.setColumn(nrow, "CD_CBS", this.dsListSub.getColumn(i, "CD_CBS"));
        				this.dsDeleteSub.setColumn(nrow, "CD_ITEM", this.dsListSub.getColumn(i, "CD_ITEM"));
        				this.dsDeleteSub.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
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
        	this.gfnExcelExport(this.dxGrid);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }

        /************************************************************************
         * 서브 버튼 이벤트
         ************************************************************************/
        // 디테일 그리드 조회
        this.fnSelectSub = function() {

        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return;

        	// 왼쪽 그리드의 자리수 컬럼이 0 이면 조회하지 않는다
        	if (this.dsList.getColumn(this.dsList.rowposition, "CNT") < 1) {
        		this.dsListSub.clearData();
        		return;
        	}

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	// 디테일 데이터셋 데이터 삭제
        	this.dsListSub.clearData();

        	// 디테일 파마리터 데이터셋 셋팅
        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();

        	this.dsSelectSub.setColumn(0, "CD_CBS", this.dsList.getColumn(this.dsList.rowposition, "CD_CBS"));

        	var strSvcId    = "detail";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "d_select=dsSelectSub";
        	var outData     = "dsListSub=d_select0";
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



        this.fnExcelSub = function() {
        	this.gfnExcelExport(this.dxGridSub);
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
        		this.gfnGridAfterSelect(this.dxGridSub);
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			// 저장 후에 메인 select가 실행된게 아니라 sub select가 실행된거라서 화면form상태가 수정상태로 남아있다. 그래서 조회(Q)상태로 초기화시키고 조회함
        			this.gfnSetFormStatus(this, "Q");	// 이부분 처리하지 않으면 저장후에 바로 화면 닫을때 변경된 데이터있다고 메시지 나옴
        			this.FormBtns.SubSelect.click();
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
        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		// 마스터 그리드 클릭 이벤트(디테일 그리드 조회)
        		this.FormBtns.SubSelect.click();
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



        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        	}
        }

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
        	if(e.oldvalue != e.newvalue){
        	this.gfnGridClear(this.dxGrid);
        	this.gfnGridClear(this.dxGridSub);
        	}
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
        this.loadIncludeScript("DQB_CBSITEM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
