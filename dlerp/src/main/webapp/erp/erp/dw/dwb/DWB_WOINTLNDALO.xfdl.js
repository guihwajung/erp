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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWBPR_WOINTLNDALO_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWBPR_WOINTLNDALO_SAVE</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DWBPR_WOINTLNDALO_EXECUTE</Col></Row><Row><Col id=\"TARGET\">sapauto</Col><Col id=\"SP\">DWZPR_SAP_AUTOSLIP_ISSUE_SELECT</Col></Row><Row><Col id=\"TARGET\">sapcancel</Col><Col id=\"SP\">DWZPR_SAP_AUTOSLIP_CANCEL_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YR_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SELOBJ\" type=\"STRING\" size=\"256\"/><Column id=\"M1_IN_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"M2_IN_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"M3_IN_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YR_WORK\"/><Col id=\"NO_SEQ\"/><Col id=\"CD_SITE\"/><Col id=\"YM_WORK\"/><Col id=\"CD_VENDOR\"/><Col id=\"YN_SELOBJ\">N</Col><Col id=\"M1_IN_VAL\"/><Col id=\"M2_IN_VAL\"/><Col id=\"M3_IN_VAL\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSap", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("기준년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","0.0","sta00:10.0","350","24.0",null,null,null,"353",null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("AutoSet").set("false");
            obj.getSetter("CDTextWidth").set("80");
            obj.getSetter("fittocontents").set("true");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ccfCD_SITE:0.0","sta00:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("업체코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","staCD_CORP:0.0","sta00:10.0","270","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("tclYR_WORK","0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","0.0","sta00:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("현장코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_SEQ","tclYR_WORK:0.0","10.0","287","24.0",null,null,null,"287",null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.getSetter("fittocontents").set("true");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccfNO_SEQ:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("기성년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("tclYM_WORK","staYM_WORK:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_SELOBJ","tclYM_WORK:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("선정대상");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divSearch.addChild(obj.name, obj);

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
            obj = new BindItem("item4","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.tclYR_WORK.form.TextBox","value","dsSearch","YR_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfNO_SEQ.form.CDTextBox","value","dsSearch","NO_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.tclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.chkYN_SELOBJ","value","dsSearch","YN_SELOBJ");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DWB_WOINTLNDALO.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.execGubun = "";	// 버튼클릭 구분값(본사확정, 본사확정취소, 전표발행, 전표취소)
        //this.m1InVal = "";	// 기성년월 값 셋팅될때 그리드의 헤더명(M-1 컬럼명)을 담는다
        //this.m2InVal = "";	// 기성년월 값 셋팅될때 그리드의 헤더명(M-2 컬럼명)을 담는다
        //this.m3InVal = "";	// 기성년월 값 셋팅될때 그리드의 헤더명(M-3 컬럼명)을 담는다

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

        	this.dsSearch.setColumn(0, "YR_WORK",  this.gfnGetDate().substr(0,4));	// 기준년도 현재월로 셋팅
        	//this.dsSearch.setColumn(0, "YM_WORK",  this.gfnGetDate().substr(0,6));	// 기성년월 현재월로 셋팅

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().YM_WORK) && !this.gfnIsNull(this.getOwnerFrame().YR_WORK) && !this.gfnIsNull(this.getOwnerFrame().NO_SEQ)) {
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.divSearch.form.CD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		this.dsSearch.setColumn(0, "YR_WORK", this.getOwnerFrame().YR_WORK);
        		this.dsSearch.setColumn(0, "NO_SEQ", this.getOwnerFrame().NO_SEQ);
        		this.divSearch.form.NO_SEQ.form.DSTextBox.set_value(this.getOwnerFrame().DT_REQPERD);
        		this.dsSearch.setColumn(0, "YM_WORK", this.getOwnerFrame().YM_WORK);

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
        	//this.FormBtns.Select.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        // 	this.btn1 = this.gfnFormButtonAdd("btnLndEng", "fnLndEng");
        // 	this.btn2 = this.gfnFormButtonAdd("btnHqDcn", "fnHqDcn");
        // 	this.btn3 = this.gfnFormButtonAdd("btnHqDcnCnc", "fnHqDcnCnc");
        // 	this.btn4 = this.gfnFormButtonAdd("btnSlipIssue", "fnSlipIssue");
        // 	this.btn5 = this.gfnFormButtonAdd("btnSlipSearch", "fnSlipSearch");
        // 	this.btn6 = this.gfnFormButtonAdd("btnSlipCancel", "fnSlipCancel");
        // 	this.btn7 = this.gfnFormButtonAdd("btnSlipIssueSap", "fnSlipIssueSap");
        // 	this.btn8 = this.gfnFormButtonAdd("btnSlipCancelSap", "fnSlipCancelSap");
        };


        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.tclYR_WORK = this.divSearch.form.tclYR_WORK;
        	this.ccfNO_SEQ = this.divSearch.form.ccfNO_SEQ;
        	this.tclYM_WORK = this.divSearch.form.tclYM_WORK;
        	this.chkYN_SELOBJ = this.divSearch.form.chkYN_SELOBJ;
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfCD_VENDOR = this.divSearch.form.ccfCD_VENDOR;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//this.ccfCD_SITE.CodeFindName = "DOX_CFSITE";		// 현장코드(검색조건_공통 현장코드 아님)
        	this.ccfNO_SEQ.CodeFindName = "DWX_CFWOINTLND_01";		// 대여차순
        	this.ccfCD_VENDOR.CodeFindName = "DWX_CFVENDOR_DH";		// 업체코드

        	//this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfNO_SEQ.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.chkYN_SELOBJ.set_width("0");

        	this.ccfNO_SEQ.AfterCDTextChanged = "ccfNO_SEQ_AfterCDTextChanged";
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWB_WOINTLNDALO", "DS_VENDOR", "GR_TREE");

        	var colYN_OBJ = this.dxGrid.getBindCellIndex("body", "YN_OBJ");
        	var displaytype = this.dxGrid.getCellProperty("body", colYN_OBJ, "displaytype");
        	displaytype = "expr:" + displaytype.replace("expr:","").replace("'checkboxcontrol'", "YN_OBJVIEW=='Y'?'checkboxcontrol':'none'");
        	this.dxGrid.setCellProperty("body", colYN_OBJ, "displaytype", displaytype);
        	// 테스트용 그리드 헤더 클릭했을때 클릭한 헤더의 셀 인덱스를 확인하기 위함
        	//this.dxGrid.addEventHandler("onheadclick", this.fnGrid_headclick, this);

        };

        // 테스트용 그리드 헤더 클릭했을때 클릭한 헤더의 셀 인덱스를 확인하기 위함
        this.fnGrid_headclick = function(obj,e)
        {
            alert("e.cell=>" + e.cell);
        };


        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("YR_WORK", "string");
        	this.dsSelect.addColumn("NO_SEQ", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");
        	this.dsSelect.addColumn("YN_SELOBJ", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("YR_WORK", "string");
        	this.dsSave.addColumn("NO_SEQ", "string");
        	this.dsSave.addColumn("YM_WORK", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("NO_HADOCONT", "string");
        	this.dsSave.addColumn("AM_GISUNG_TMON", "bigdecimal");
        	this.dsSave.addColumn("AM_ASMEVALHQ", "bigdecimal");
        	this.dsSave.addColumn("YN_OBJ", "string");
        	this.dsSave.addColumn("RM_REF", "string");
        	this.dsSave.addColumn("NO_SLIP", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("TY_WRK", "string");
        	this.dsExec.addColumn("ID_USER", "string");
        	this.dsExec.addColumn("YR_WORK", "string");
        	this.dsExec.addColumn("NO_SEQ", "string");
        	this.dsExec.addColumn("YM_WORK", "string");
        	this.dsExec.addColumn("CD_VENDOR", "string");
        	this.dsExec.addColumn("CD_DEPT", "string");
        	this.dsExec.addColumn("NO_SLIP", "string");

        	this.dsSapAuto = new Dataset();
        	this.dsSapAuto.addColumn("TY_WRK", "string");
        	this.dsSapAuto.addColumn("CD_AUTOSLIP", "string");
        	this.dsSapAuto.addColumn("NO_ERPKEY", "string");

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
        	this.dsSelect.setColumn(0, "YR_WORK", this.dsSearch.getColumn(0, "YR_WORK").substr(0,4));
        	this.dsSelect.setColumn(0, "NO_SEQ", this.dsSearch.getColumn(0, "NO_SEQ"));
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        	this.dsSelect.setColumn(0, "YN_SELOBJ", "");

        	/*
        	if(this.dsSearch.getColumn(0, "YN_SELOBJ") == "Y"){
        		this.dsSelect.setColumn(0, "YN_SELOBJ", this.dsSearch.getColumn(0, "YN_SELOBJ"));
        	}else{
        		this.dsSelect.setColumn(0, "YN_SELOBJ", "");
        	}
        	*/
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
        	var nrow = this.gfnGridAdd(this.dxGrid, "bottom"); // top (default), bottom, current
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
        	// 그리드 필수항목 체크``
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
        				this.dsSave.setColumn(nrow, "TY_WRK", "U");
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "YR_WORK", this.dsSearch.getColumn(0, "YR_WORK"));
        				this.dsSave.setColumn(nrow, "NO_SEQ", this.dsSearch.getColumn(0, "NO_SEQ"));
        				this.dsSave.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsSave.setColumn(nrow, "NO_HADOCONT", this.dsList.getColumn(i, "NO_HADOCONT"));
        				this.dsSave.setColumn(nrow, "AM_GISUNG_TMON", this.dsList.getColumn(i, "AM_GISUNG_TMON"));
        				this.dsSave.setColumn(nrow, "AM_ASMEVALHQ", this.dsList.getColumn(i, "AM_ASMEVALHQ"));
        				this.dsSave.setColumn(nrow, "YN_OBJ", this.dsList.getColumn(i, "YN_OBJ"));
        				this.dsSave.setColumn(nrow, "RM_REF", this.dsList.getColumn(i, "RM_REF"));
        				this.dsSave.setColumn(nrow, "NO_SLIP", this.dsList.getColumn(i, "NO_SLIP"));
        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

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
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	저장 후 실행처리
         */
        this.fnExec = function(tyWrk, cdVendor, noSlip) {

        	this.dsExec.clearData();

        	this.dsExec.addRow();

        	this.dsExec.setColumn(0, "TY_WRK", tyWrk);
        	this.dsExec.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	this.dsExec.setColumn(0, "YR_WORK", this.dsSearch.getColumn(0, "YR_WORK"));
        	this.dsExec.setColumn(0, "NO_SEQ", this.dsSearch.getColumn(0, "NO_SEQ"));
        	this.dsExec.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsExec.setColumn(0, "CD_VENDOR", cdVendor);
        	this.dsExec.setColumn(0, "CD_DEPT", this.AuthClient.CD_DEPT);
        	this.dsExec.setColumn(0, "NO_SLIP", noSlip);

        	if (this.dsExec.rowcount == 0) return;

        	var strSvcId    = "exec";
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"YR_WORK"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.tclYR_WORK.form.TextBox.setFocus();
        		}
        		this.gfnAlert("기준년월은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0,"NO_SEQ"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfNO_SEQ.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("대여차수는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0,"YM_WORK"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.tclYM_WORK.form.TextBox.setFocus();
        		}
        		this.gfnAlert("기성년월은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}

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
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "exec") {
        		if (errorCode == 0) {
        			if(this.execGubun == "btnHqDcn"){
        				this.gfnAlert("본사확정 정상 처리되었습니다.");
        			}else if(this.execGubun == "btnHqDcnCnc"){
        				this.gfnAlert("본사확정취소 정상 처리되었습니다.");
        			}else if(this.execGubun == "btnSlipIssue"){
        				this.gfnAlert("전표발행이 정상 처리되었습니다.");
        			}else if(this.execGubun == "btnSlipCancel"){
        				this.gfnAlert("전표취소가 정상 처리되었습니다.");
        			}

        			this.execGubun = "";
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfNO_SEQ") {
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "YR_WORK"))) {
         			this.gfnAlert("기준년도를 먼저 입력하세요.");
         			return false;
         		}

        		dsUserParam.setColumn(nrow, "YR_WORK", this.dsSearch.getColumn(0, "YR_WORK"));
        	}else if (id == "ccfCD_VENDOR") {
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
         			this.gfnAlert("업체코드를 입력하기 전에 현장코드를 먼저 입력하세요.");
         			return false;
         		}
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "TY_VENDOR", "WOINTLND");
        	}

        	return true;
        }



        // 대여차순 선택시 기성년월 셋팅
        this.ccfNO_SEQ_AfterCDTextChanged = function(id, codeFindData) {
           // 코드,명칭 외 추가 컬럼 처리
           var arr = codeFindData; //this.ccfCD_DEPT_ORG.form.SelectedData; 둘다 사용가능
           var ds_ymWork = "";

           if (arr.length > 0) {
              ds_ymWork = arr[0]["YM_WORK"];
           }

           this.dsSearch.setColumn(0, "YM_WORK", ds_ymWork);

           // 기성년월이 null 이면 그리드 헤더 명을 아래와 같이 변경한다
           if(this.gfnIsNull(this.dsSearch.getColumn(0,"YM_WORK"))) return;

           var ymWork = new Date();

           //ymWork.setFullYear(this.divSearch.form.tclYM_WORK.getYear());
           //ymWork.setMonth(this.divSearch.form.tclYM_WORK.getMonth()-1);
           //ymWork.setDate(this.divSearch.form.tclYM_WORK.getDay());
           ymWork.setFullYear(this.dsSearch.getColumn(0, "YM_WORK").substr(0,4));
           ymWork.setMonth(nexacro.toNumber(this.dsSearch.getColumn(0, "YM_WORK").substr(4,2))+1);
           ymWork.setDate(this.dsSearch.getColumn(0, "YM_WORK").substr(6,2));

           var year = ymWork.getFullYear().toString().padLeft(4, "0");
           //var month = (ymWork.getMonth()+1).toString().padLeft(2, "0");
           var month = (ymWork.getMonth()).toString().padLeft(2, "0");
           var day = ymWork.getDate().toString().padLeft(2, "0");
           //var amGisungM3 = this.dxGrid.getBindCellIndex("head", "AM_GISUNG_M_3");
           //this.dxGrid.setCellProperty("head", amGisungM3, "text", year + "-" + month);


           // 해당 헤더컬럼 인덱스 구하기

           var mTNm = "확정기성금액";
           var m1Nm = "M-1";
           var m2Nm = "M-2";
           var m3Nm = "M-3";
           var mTIdx = 0;
           var m1Idx = 0;
           var m2Idx = 0;
           var m3Idx = 0;

           for(var i=0; i < this.dxGrid.getCellCount("head"); i++) {
              if(this.dxGrid.getCellText(-1,i).startsWith(mTNm)){
                 mTIdx = i;
              }
              if(this.dxGrid.getCellText(-1,i) == m1Nm){
                 m1Idx = i;
              }
              if(this.dxGrid.getCellText(-1,i) == m2Nm){
                 m2Idx = i;
              }
              if(this.dxGrid.getCellText(-1,i) == m3Nm){
                 m3Idx = i;
              }
           }
           if(m1Idx == 0 && m2Idx == 0 && m3Idx == 0) {
              m1Idx = this._m1Idx;
              m2Idx = this._m2Idx;
              m3Idx = this._m3Idx;
           } else {
              this._m1Idx = m1Idx;
              this._m2Idx = m2Idx;
              this._m3Idx = m3Idx;
           }

           // 확정기성금액 (기성년월)
           this.dxGrid.setCellProperty("head", mTIdx, "text", mTNm + "\r\n(" + year + "-" + month + ")");

           // 'M-1' 헤더 컬럼명 변경(최종적으로 [기성년월-1] 이다)
           ymWork = new Date(ymWork.getFullYear(), ymWork.getMonth()-1, 1);
           year = ymWork.getFullYear().toString().padLeft(4, "0");
           month = (ymWork.getMonth()).toString().padLeft(2, "0");
           //this.dxGrid.setCellProperty("head", 28, "text", year + "-" + month);
           this.dxGrid.setCellProperty("head", m1Idx, "text", year + "-" + month);
           this.dsSearch.setColumn(0,"M1_IN_VAL", year + "-" + month);   // 기성년월 값 셋팅될때 그리드의 헤더명(M-1 컬럼명)을 셋팅하기위해 값을 담아두고 초기화시 사용한다

           // 'M-2' 헤더 컬럼명 변경(-1씩 순차적으로 누적 감소해준다_최종적으로 [기성년월-2] 이다)
           ymWork = new Date(ymWork.getFullYear(), ymWork.getMonth()-1, 1);
           year = ymWork.getFullYear().toString().padLeft(4, "0");
           month = (ymWork.getMonth()).toString().padLeft(2, "0");
           this.dxGrid.setCellProperty("head", m2Idx, "text", year + "-" + month);
           //this.dxGrid.setCellProperty("head", 27, "text", year + "-" + month);
           this.dsSearch.setColumn(0,"M2_IN_VAL", year + "-" + month);   // 기성년월 값 셋팅될때 그리드의 헤더명(M-2 컬럼명)을 셋팅하기위해 값을 담아두고 초기화시 사용한다

           // 'M-3' 헤더 컬럼명 변경(-1씩 순차적으로 누적 감소해준다_최종적으로 [기성년월-3] 이다)
           ymWork = new Date(ymWork.getFullYear(), ymWork.getMonth()-1, 1);
           year = ymWork.getFullYear().toString().padLeft(4, "0");
           month = (ymWork.getMonth()).toString().padLeft(2, "0");
           this.dxGrid.setCellProperty("head", m3Idx, "text", year + "-" + month);
           //this.dxGrid.setCellProperty("head", 26, "text", year + "-" + month);
           this.dsSearch.setColumn(0,"M3_IN_VAL", year + "-" + month); // 기성년월 값 셋팅될때 그리드의 헤더명(M-3 컬럼명)을 셋팅하기위해 값을 담아두고 초기화시 사용한다
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_EnterCell = function(obj, row, cell) {
        	// 수정가능 true, false 처리하려는 컬럼에 대해서만 return 처리할것.
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);	// 클릭한 cell의 컬럼명

        	// 클릭했을때 클릭한 cell을 수정 가능 or 불가능 상태로 만든다.
        	// YN_EDIT 값이 Y일때만 수정가능상태
        	if(this.dsList.getColumn(row, "YN_EDIT") == "N") {
        		return false;
        	}
        }


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        //
        //   // 대여금약정서 버튼 클릭시 이벤트
        //  this.fnLndEng = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        // 	// 선택된 row가 있을 경우에만 팝업을 띄움
        // 	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        //
        // 	var param = {};
        // 	//param.NO_SLIP = this.dsList.getColumn(this.dsList.rowposition, "NO_SLIP");
        //
        // 	// 화면 오픈.
        // 	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        // 	// 타 모듈 화면 호출시 지정할것.
        //
        // 	this.gfnAlert("추후 개발 진행 예정입니다.");
        // 	//this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWA_RISKDTLS", "", param);
        // }
        //
        // // 본사확정 버튼 클릭
        //  this.fnHqDcn = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        // 	// 선택된 row가 있을 경우에만 팝업을 띄움
        // 	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        //
        // 	var tyWrk = "HQDCN";
        // 	var cdVendor = "";
        // 	var noSlip = "";
        //
        // 	this.execGubun = "btnHqDcn";
        // 	this.fnExec(tyWrk, cdVendor, noSlip);
        // }
        //
        // // 본사확정취소 버튼 클릭
        //  this.fnHqDcnCnc = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        // 	// 선택된 row가 있을 경우에만 팝업을 띄움
        // 	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        //
        // 	var tyWrk = "HQDCNCNC";
        // 	var cdVendor = "";
        // 	var noSlip = "";
        //
        // 	this.execGubun = "btnHqDcnCnc";
        // 	this.fnExec(tyWrk, cdVendor, noSlip);
        // }
        //
        //  // 전표발행 버튼 클릭
        //  this.fnSlipIssue = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        // 	// 선택된 row가 있을 경우에만 팝업을 띄움
        // 	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        //
        // 	var yrWork = this.dsSearch.getColumn(0, "YR_WORK");	// 기준년도
        // 	var noSeq = this.dsSearch.getColumn(0, "NO_SEQ");	// 대여차수
        //
        // 	this.gfnConfirm("기준년도 : " + yrWork + " 년도, 대여차수 : " + noSeq + " 차\r\n무이자대여전표는 선정대상 기준으로 일괄 발행됩니다.\r\n\r\n무이자대여 전표발행 하시겠습니까?", "dsList_slipIssue_callback");
        // }
        //
        // // 전표발행 버튼 클릭 후 callback
        // this.dsList_slipIssue_callback = function(strId, val)
        // {
        // 	if(val == true) {
        // 		var tyWrk = "SLPPUB";
        // 		var cdVendor = this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR");
        // 		var noSlip = this.dsList.getColumn(this.dsList.rowposition, "NO_SLIP");
        //
        // 		this.execGubun = "btnSlipIssue";
        // 		this.fnExec(tyWrk, cdVendor, noSlip);
        // 	}
        // }
        //
        //  // 전표조회 버튼 클릭시 팝업화면 호출
        //  this.fnSlipSearch = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        // 	// 선택된 row가 있을 경우에만 팝업을 띄움
        // 	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        //
        // 	var param = {};
        // 	param.NO_ERPKEY = this.dsList.getColumn(this.dsList.rowposition, "NO_ERPKEY");
        //
        // 	// 화면 오픈.
        // 	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        // 	// 타 모듈 화면 호출시 지정할것.
        // 	this.gfnFormOpen("DHA", "DHA_ERPKEY_SLIP", "", param);
        // }
        //
        //  // 전표취소 버튼 클릭
        //  this.fnSlipCancel = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        // 	// 선택된 row가 있을 경우에만 팝업을 띄움
        // 	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        //
        // 	var yrWork = this.dsSearch.getColumn(0, "YR_WORK");	// 기준년도
        // 	var noSeq = this.dsSearch.getColumn(0, "NO_SEQ");	// 대여차수
        //
        // 	var cdSite = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");	// 현장코드
        // 	var dsSite = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");	// 현장명
        // 	var cdVendor = this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR");	// 업체코드
        // 	var dsVendor = this.dsList.getColumn(this.dsList.rowposition, "DS_VENDOR");	// 업체명
        //
        // 	this.gfnConfirm("기준년도 : " + yrWork + " 년도, 대여차수 : " + noSeq + " 차\r\n업체코드 : [" + cdVendor + "] " + dsVendor + "\r\n무이자대여 전표취소는 건별 취소처리 됩니다.\r\n\r\n해당 무이자대여 전표취소 하시겠습니까?", "dsList_slipCancel_callback");
        // }
        //
        // // 전표취소 버튼 클릭 후 callback
        // this.dsList_slipCancel_callback = function(strId, val)
        // {
        // 	if(val == true) {
        // 		var tyWrk = "SLPCNC";
        // 		var cdVendor = this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR");
        // 		var noSlip = this.dsList.getColumn(this.dsList.rowposition, "NO_SLIP");
        //
        // 		this.execGubun = "btnSlipCancel";
        // 		this.fnExec(tyWrk, cdVendor, noSlip);
        // 	}
        // }
        //
        //
        // /*
        //  *	전표발행(SAP)
        //  */
        //  this.fnSlipIssueSap = function() {
        //
        // 	if(this.dsList.findRow("YN_OBJ", "Y") < 0){
        // 		this.gfnAlert("전표발행 하실 정보를 선택하시기 바랍니다.");
        // 		return false;
        // 	}
        //
        // 	var chkCnt = 0;
        // 	for (var i = 0; i < this.dsList.rowcount; i++) {
        // 		if(this.dsList.getColumn(i, "YN_OBJ") == "Y"){
        // 			chkCnt = chkCnt + 1;
        // 		}
        // 	}
        //
        // 	var msg = "기준년도 : " +  this.dsSearch.getColumn(0, "YR_WORK") + " 년도, 대여차수 : " + this.dsSearch.getColumn(0, "NO_SEQ")
        // 			+ "\n발행건수 : [" + chkCnt + "] "
        // 			+ "\n\n무이자대여(업체선정) 전표발행(SAP) 하시겠습니까?";
        //
        // 	this.gfnConfirm(msg, "fnSlipIssueSap_Confirm");
        // }
        //
        //
        // this.fnSlipIssueSap_Confirm = function(strId, val) {
        // 	if(val == true) {
        // 		this.dsSapAuto.clearData();
        //
        // 		var arrOut = [];
        // 		this._cntChk = 0;
        // 		for (var i = 0; i < this.dsList.rowcount; i++) {
        // 			if(this.dsList.getColumn(i, "YN_OBJ") == "Y"){
        // 				var nrow = this.dsSapAuto.addRow();
        //
        // 				this.dsSapAuto.setColumn(nrow, "TY_WRK", "Q");
        // 				this.dsSapAuto.setColumn(nrow, "CD_AUTOSLIP", "DWB0004");
        // 				this.dsSapAuto.setColumn(nrow, "NO_ERPKEY", this.dsList.getColumn(i, "NO_ERPKEY"));
        //
        // 				// 체크박스 다중건 조회 건수에 맞게 리턴 dataset 추가
        // 				arrOut.push("dsListSap" + i + "=sapauto" + i);
        // 				this["dsListSap"+i] = new Dataset();
        // 				this._cntChk++;
        // 			}
        // 		}
        //
        // 		var strSvcId    = "sapauto";
        // 		var strSvcType  = "select";
        // 		var inProc		= "_dsProc";
        // 		var inData      = "sapauto=dsSapAuto";
        // 		var outData     = arrOut.join(' ');
        // 		var strArg      = "";
        // 		var callBackFnc = "fnSlipIssueSap_Callback";
        //
        // 		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 							strSvcType , 	// transaction을 요청할 구분
        // 							inProc,			// Procedure 정보 Dataset 이름
        // 							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 							strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 							callBackFnc); // 통신방법 정의 [생략가능]
        // 	}
        // }
        //
        // /*
        //  *	전표취소(SAP)
        //  */
        // this.fnSlipCancelSap = function() {
        // 	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        //
        // 	var yrWork = this.dsSearch.getColumn(0, "YR_WORK");	// 기준년도
        // 	var noSeq = this.dsSearch.getColumn(0, "NO_SEQ");	// 대여차수
        //
        // 	var cdSite = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");	// 현장코드
        // 	var dsSite = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");	// 현장명
        // 	var cdVendor = this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR");	// 업체코드
        // 	var dsVendor = this.dsList.getColumn(this.dsList.rowposition, "DS_VENDOR");	// 업체명
        //
        // 	this.gfnConfirm("기준년도 : " + yrWork + " 년도, 대여차수 : " + noSeq + " 차\r\n업체코드 : [" + cdVendor + "] " + dsVendor + "\r\n무이자대여 전표취소는 건별 취소처리 됩니다.\r\n\r\n해당 무이자대여 전표취소(SAP) 하시겠습니까?", "fnSlipIssueSap_Callback");
        // }
        //
        // this.dsList_slipCancelSap_callback = function(strId, val) {
        // 	if(val == true) {
        // 		this.dsSapAuto.clearData();
        // 		this.dsSapAuto.addRow();
        //
        // 		this.dsSapAuto.setColumn(0, "TY_WRK", "Q");
        // 		this.dsSapAuto.setColumn(0, "CD_AUTOSLIP", "DWB0004");
        // 		this.dsSapAuto.setColumn(0, "NO_ERPKEY", this.dsList.getColumn(this.dsList.rowposition, "NO_ERPKEY"));
        //
        // 		var strSvcId    = "sapcancel";
        // 		var strSvcType  = "select";
        // 		var inProc		= "_dsProc";
        // 		var inData      = "sapcancel=dsSapAuto";
        // 		var outData     = "dsListSap=sapcancel0";
        // 		var strArg      = "";
        // 		var callBackFnc = "fnSlipIssueSap_Callback";
        //
        // 		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 							strSvcType , 	// transaction을 요청할 구분
        // 							inProc,			// Procedure 정보 Dataset 이름
        // 							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 							strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 							callBackFnc); // 통신방법 정의 [생략가능]
        // 	}
        // }
        //
        // /*
        //  *	전표(SAP) CALLBACK
        //  */
        // this.fnSlipIssueSap_Callback = function(svcID, errorCode, errorMsg) {
        // 	if(errorCode != 0) {
        // 		this.gfnAlert(errorMsg);
        // 		return false;
        // 	}
        //
        // 	if(svcID == "sapauto") {
        // 		if (this.dsListSap.rowcount > 0) {
        // 			// 전표발행(SAP) 다중건 처리용 Dataset 생성
        // 			var ds = new Dataset();
        // 			ds.addColumn("NO_ERPKEY", "string");
        // 			ds.addColumn("CD_TRADE", "string");
        // 			ds.addColumn("ID_USER", "string");
        //
        // 			for(var i = 0; i < this.dsListSap.rowcount; i++) {
        // 				var nrow = ds.addRow();
        // 				ds.setColumn(nrow, "NO_ERPKEY", this.dsListSap.getColumn(i, "NO_ERPKEY"));
        // 				ds.setColumn(nrow, "CD_TRADE", this.dsListSap.getColumn(i, "CD_TRADE"));
        // 				ds.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        // 			}
        //
        // 			// 전표발행(SAP) 다중건 처리
        // 			this.gfnSlipIssueDs(ds, "fnSlipIssueSap_Complete");
        // 		}
        // 	}
        // 	else if(svcID == "sapcancel") {
        // 		if (this.dsListSap.rowcount > 0) {
        // 			// 전표취소(SAP) 다중건 처리용 Dataset 생성
        // 			var ds = new Dataset();
        // 			ds.addColumn("NO_ERPKEY", "string");
        // 			ds.addColumn("CD_TRADE", "string");
        // 			ds.addColumn("ID_USER", "string");
        // 			ds.addColumn("BUKRS", "string");
        // 			ds.addColumn("BELNR", "string");
        // 			ds.addColumn("GJAHR", "string");
        //
        // 			for(var i = 0; i < this.dsListSap.rowcount; i++) {
        // 				var nrow = ds.addRow();
        // 				ds.setColumn(nrow, "NO_ERPKEY", this.dsListSap.getColumn(i, "NO_ERPKEY"));
        // 				ds.setColumn(nrow, "CD_TRADE", this.dsListSap.getColumn(i, "CD_TRADE"));
        // 				ds.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        // 				ds.setColumn(nrow, "BUKRS", this.dsListSap.getColumn(i, "BUKRS"));
        // 				ds.setColumn(nrow, "BELNR", this.dsListSap.getColumn(i, "BELNR"));
        // 				ds.setColumn(nrow, "GJAHR", this.dsListSap.getColumn(i, "GJAHR"));
        // 			}
        //
        // 			// 전표취소(SAP) 다중건 처리
        // 			this.gfnSlipCancelDs(ds, "fnSlipCancelSap_Complete");
        // 		}
        // 	}
        // }
        //
        // this.fnSlipIssueSap_Complete = function() {
        // 	this.fnSelect();
        // }
        //
        // this.fnSlipCancelSap_Complete = function() {
        // 	this.fnSelect();
        // }
        //
        //


        // row 선택이 변경된 후 이벤트(해당 row의 데이터기준으로 버튼 활성화 or 비활성화 처리)
        this.dsList_onrowposchanged = function(obj,e)
        {
        	var nRow = this.dsList.rowposition;

        // 	// 대여금약정서 버튼 활성화 or 비활성화 처리
        // 	if(this.dsList.getColumn(nRow, "BTN_LNDENGG") == "Y"){
        // 		this.btn1.set_enable(true);
        // 	}else{
        // 		this.btn1.set_enable(false);
        // 	}
        // 	// 본사확정 버튼 활성화 or 비활성화 처리
        // 	if(this.dsList.getColumn(nRow, "BTN_HQDCN") == "Y"){
        // 		this.btn2.set_enable(true);
        // 	}else{
        // 		this.btn2.set_enable(false);
        // 	}
        // 	// 본사확정취소 버튼 활성화 or 비활성화 처리
        // 	if(this.dsList.getColumn(nRow, "BTN_HDDCNCNC") == "Y"){
        // 		this.btn3.set_enable(true);
        // 	}else{
        // 		this.btn3.set_enable(false);
        // 	}
        // 	// 전표발행 버튼 활성화 or 비활성화 처리
        // 	if(this.dsList.getColumn(nRow, "BTN_SLIPISSUE") == "Y"){
        // 		this.btn4.set_enable(true);
        // 	}else{
        // 		this.btn4.set_enable(false);
        // 	}
        // 	// 전표조회 버튼 활성화 or 비활성화 처리
        // 	if(this.dsList.getColumn(nRow, "BTN_SLIPSEARCH") == "Y"){
        // 		this.btn5.set_enable(true);
        // 	}else{
        // 		this.btn5.set_enable(false);
        // 	}
        // 	// 전표취소 버튼 활성화 or 비활성화 처리
        // 	if(this.dsList.getColumn(nRow, "BTN_SLIPCANCEL") == "Y"){
        // 		this.btn6.set_enable(true);
        // 	}else{
        // 		this.btn6.set_enable(false);
        // 	}
        // 	// 전표발행(SAP) 버튼 활성화 or 비활성화 처리
        // 	if(this.dsList.getColumn(nRow, "BTN_SLIPCANCEL") == "Y"){
        // 		this.btn7.set_enable(true);
        // 	}else{
        // 		this.btn7.set_enable(false);
        // 	}
        // 	// 전표취소(SAP) 버튼 활성화 or 비활성화 처리
        // 	if(this.dsList.getColumn(nRow, "BTN_SLIPCANCEL") == "Y"){
        // 		this.btn8.set_enable(true);
        // 	}else{
        // 		this.btn8.set_enable(false);
        // 	}
        };


        // 임시 테스트용임 추후 삭제해도 됨
        this.divSearch_btn00_onclick = function(obj,e)
        {
        	var ymWork = new Date();

        	//ymWork.setFullYear(this.divSearch.form.tclYM_WORK.getYear());
        	//ymWork.setMonth(this.divSearch.form.tclYM_WORK.getMonth()-1);
        	//ymWork.setDate(this.divSearch.form.tclYM_WORK.getDay());
        	ymWork.setFullYear(this.dsSearch.getColumn(0, "YM_WORK").substr(0,4));
        	ymWork.setMonth(this.dsSearch.getColumn(0, "YM_WORK").substr(4,2) - 1);
        	ymWork.setDate(this.dsSearch.getColumn(0, "YM_WORK").substr(6,2));
        	ymWork.addMonth(-3);

        	var year = ymWork.getFullYear().toString().padLeft(4, "0");
        	var month = (ymWork.getMonth()+1).toString().padLeft(2, "0");
        	var day = ymWork.getDate().toString().padLeft(2, "0");

        	alert(year+month+day);

        };


        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWB_WOINTLNDALO.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
