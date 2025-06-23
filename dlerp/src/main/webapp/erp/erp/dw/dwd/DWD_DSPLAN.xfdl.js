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
            this.set_titletext("기성공정율계획등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWDPR_DSPLAN_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWDPR_DSPLAN_SAVE</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DWDPR_DSPLAN_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YR_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staYR_MAGAM","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("계획년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYR_WORK","staYR_MAGAM:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_FLAG00",null,"10.0","92.0","24.0","4",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("(단위 : 천원)");
            obj.set_textDecoration("none");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ctclYR_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","sta00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","1",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctclYR_WORK.form.TextBox","value","dsSearch","YR_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DWD_DSPLAN.xfdl", function() {
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

        	var year1 = this.gfnGetDate().substr(0,4);
        	this.dsSearch.setColumn(0, "YR_WORK", year1);

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().DS_SITE)) {
        		if(!this.gfnIsNull(this.getOwnerFrame().YM_WORK))
        		{
        			var year1 = this.gfnGetDate().substr(0,4);
        			this.dsSearch.setColumn(0, "YR_WORK", year1);
        		}
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		this.FormBtns.Select.click();
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnEnd = this.gfnFormButtonAdd("btnEnd", "fnEnd");
        	this.btnCancel = this.gfnFormButtonAdd("btnCancel", "fnCancel");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWD_DSPLAN");

        	// 셀 수정가능 여부
        	//this.dxGrid.EnterCell = "fnGrid_EnterCell";
        	//this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	// 그리드 코드파인드 설정
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	//this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        	//this.dsList.addEventHandler("oncolumnchanged", this.fnGrid_ColumnChanged, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// 조회 Master
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("YR_WORK", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("ID_USER", "string");
        	this.dsSelect.addColumn("AUTH_CD_CORP", "string");

        	// 저장 Master
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("YR_WORK", "string");
        	this.dsSave.addColumn("TY_GUBUN", "string");
        	this.dsSave.addColumn("AM_GISUNG_01", "bigdecimal");
        	this.dsSave.addColumn("AM_GISUNG_02", "bigdecimal");
        	this.dsSave.addColumn("AM_GISUNG_03", "bigdecimal");
        	this.dsSave.addColumn("AM_GISUNG_04", "bigdecimal");
        	this.dsSave.addColumn("AM_GISUNG_05", "bigdecimal");
        	this.dsSave.addColumn("AM_GISUNG_06", "bigdecimal");
        	this.dsSave.addColumn("AM_GISUNG_07", "bigdecimal");
        	this.dsSave.addColumn("AM_GISUNG_08", "bigdecimal");
        	this.dsSave.addColumn("AM_GISUNG_09", "bigdecimal");
        	this.dsSave.addColumn("AM_GISUNG_10", "bigdecimal");
        	this.dsSave.addColumn("AM_GISUNG_11", "bigdecimal");
        	this.dsSave.addColumn("AM_GISUNG_12", "bigdecimal");
        	this.dsSave.addColumn("RM_BIGO", "string");

        	// 마감
        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("TY_WRK", "string");
        	this.dsExec.addColumn("ID_USER", "string");
        	this.dsExec.addColumn("CD_SITE", "string");
        	this.dsExec.addColumn("YR_WORK", "string");
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

        	this.dsSelect.setColumn(0, "TY_WRK", "Q");
        	this.dsSelect.setColumn(0, "YR_WORK", this.dsSearch.getColumn(0, "YR_WORK"));
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	this.dsSelect.setColumn(0, "AUTH_CD_CORP", this.AuthClient.CD_CORP);

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
        // 	if(this.dsList.findRow(this.ucFlag, "I") > -1){
        // 		this.gfnAlert("신규 추가된 데이터가 이미 있습니다.");
        // 		return;
        // 	}
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
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "CD_SITE", (this.dsSearch.getColumn(0, "CD_SITE") == "") ? this.dsList.getColumn(i, "CD_SITE") : this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "YR_WORK", this.dsSearch.getColumn(0, "YR_WORK"));
        				this.dsSave.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i, "TY_GUBUN"));

        				this.dsSave.setColumn(nrow, "AM_GISUNG_01", this.dsList.getColumn(i, "AM_GISUNG_01"));
        				this.dsSave.setColumn(nrow, "AM_GISUNG_02", this.dsList.getColumn(i, "AM_GISUNG_02"));
        				this.dsSave.setColumn(nrow, "AM_GISUNG_03", this.dsList.getColumn(i, "AM_GISUNG_03"));
        				this.dsSave.setColumn(nrow, "AM_GISUNG_04", this.dsList.getColumn(i, "AM_GISUNG_04"));
        				this.dsSave.setColumn(nrow, "AM_GISUNG_05", this.dsList.getColumn(i, "AM_GISUNG_05"));
        				this.dsSave.setColumn(nrow, "AM_GISUNG_06", this.dsList.getColumn(i, "AM_GISUNG_06"));
        				this.dsSave.setColumn(nrow, "AM_GISUNG_07", this.dsList.getColumn(i, "AM_GISUNG_07"));
        				this.dsSave.setColumn(nrow, "AM_GISUNG_08", this.dsList.getColumn(i, "AM_GISUNG_08"));
        				this.dsSave.setColumn(nrow, "AM_GISUNG_09", this.dsList.getColumn(i, "AM_GISUNG_09"));
        				this.dsSave.setColumn(nrow, "AM_GISUNG_10", this.dsList.getColumn(i, "AM_GISUNG_10"));
        				this.dsSave.setColumn(nrow, "AM_GISUNG_11", this.dsList.getColumn(i, "AM_GISUNG_11"));
        				this.dsSave.setColumn(nrow, "AM_GISUNG_12", this.dsList.getColumn(i, "AM_GISUNG_12"));
        				this.dsSave.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				break;
        		}
        	}
        	if (this.dsSave.rowcount == 0) {
        		return;
        	}

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        this.fnEnd = function() {
        	this.gfnConfirm("마감 하시겠습니까?", "fnExec", "END");
        }

        this.fnCancel = function() {
        	this.gfnConfirm("마감취소 하시겠습니까?", "fnExec", "CAN");
        }

        this.fnExec = function(strID, val) {
        	if(val == true) {
        		this.dsExec.clearData();

        		this.dsExec.addRow();

        		this.dsExec.setColumn(0, "TY_WRK", strID);
        		this.dsExec.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        		this.dsExec.setColumn(0, "CD_SITE", (this.dsSearch.getColumn(0, "CD_SITE") == "") ? this.dsList.getColumn(this.dsList.rowposition, "CD_SITE") : this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsExec.setColumn(0, "YR_WORK", this.dsSearch.getColumn(0, "YR_WORK"));

        		if (this.dsExec.rowcount == 0) return;

        		var strSvcId    = strID;
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "exec=dsExec";
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
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YR_WORK"))) {
        		this.gfnAlert("계획년도를 입력 하세요.");
        		this.ctclYR_WORK.form.TextBox.setFocus();
        		return false;
        	}

        	if (this.FormInfo.GR_SEARCH  >= "7") {
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        			this.gfnAlert("현장코드를 입력 하세요.");
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        			return false;
        		}
        	}

        	return true;
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
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.fnBtnCheckAll();
        	} else if(svcID == "save") {
        		if (errorCode == 0) {

        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "END") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "CAN") {
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
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	switch(id) {
        		case "ccfCD_CORP":	//법인코드
        			this.ccfSN_SEQ.form.fnCodeFindClear();
        		break;
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
        	return true;
        }

        this.fnGrid_AfterCDTextChanged=function(id, codeFindData){

        };

        // cell 클릭했을때 이벤트(해당 cell에 대한 이벤트를 건다)
        this.fnGrid_EnterCell = function(obj, row, cell) {

        }

        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if (!this.gfnGridIsRow(this.dxGrid)) return;

        	if(this.dsList.getColumn(e.row, "YN_MAGAM") == "Y") {
        		this.btnEnd.set_enable(false); 		// 마감
        		this.btnCancel.set_enable(true); 	// 마감취소
        	}
        	else {
        		this.btnEnd.set_enable(true); 		// 마감
        		this.btnCancel.set_enable(false); 	// 마감취소
        	}
        };

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

        this.fnBtnCheckAll = function()
        {
        	// 버튼 상태
        	this.gfnBtnCheck(this.btnEnd, this.dsList);
        	this.gfnBtnCheck(this.btnCancel, this.dsList);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWD_DSPLAN.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
