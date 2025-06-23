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
            this.set_titletext("공사비수금");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">미수청구</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONTRCT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_POLY_CONST_CONTRCT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ORD_FIRM\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"NO_CONTRCT\"/><Col id=\"NO_POLY_CONST_CONTRCT\"/><Col id=\"DS_DEPT\"/><Col id=\"CD_ORD_FIRM\"/><Col id=\"TY_GUBUN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DOZPR_CONST_PRICE_DEMAND_SELECT</Col></Row><Row><Col id=\"TARGET\">d_save</Col><Col id=\"SP\">DOZPR_CONST_PRICE_COLLECT_SAVE</Col></Row><Row><Col id=\"TARGET\">d_exec</Col><Col id=\"SP\">DOZPR_CONST_PRICE_COLLECT_EXECUTE</Col></Row><Row><Col id=\"SP\">DOZPR_CONST_PRICE_COLLECT_SELECT</Col><Col id=\"TARGET\">d_select</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","sta00:0.0","10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtNO_POLY_CONST_CONTRCT","ccfCD_SITE:0.0","10.0","48","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtDS_DEPT","txtNO_POLY_CONST_CONTRCT:0.0","10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","txtDS_DEPT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("발주처");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ORD_FIRM","txtDS_DEPT:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdoTY_GUBUN","ccfCD_ORD_FIRM:0.0","10.0","169","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsTY_GUBUN");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_text("전체");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","50%","100%","5",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter:5",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("공사비청구내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","0",null,"22","btnTest:5",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("공사비수금내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","sta02:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_SITE.form.DSTextBox","value","dsSearch","NO_CONTRCT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.txtNO_POLY_CONST_CONTRCT","value","dsSearch","NO_POLY_CONST_CONTRCT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.txtDS_DEPT","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_ORD_FIRM.form.CDTextBox","value","dsSearch","CD_ORD_FIRM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.rdoTY_GUBUN","value","dsSearch","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DWU_CONSTCOLLECT.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.execGubun = "";   // 저장후 전표 처리인지 전표발행 버튼 클릭후 전표 처리인지 구분(값이 'btnExec'이면 전표발행 버튼, 'btnSave'이면 저장 버튼, 'btnExecCan'이면 전표취소 버튼)

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
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Save.set_enable(true);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
           this.btn0 = this.gfnFormButtonAdd("btnScntDebt", "fnbtnScntDebt");
           this.btn1 = this.gfnFormButtonAdd("btnSlipIssue", "fnSlipIssue");
           this.btn2 = this.gfnFormButtonAdd("btnSlipSearch", "fnSlipSearch");
           this.btn3 = this.gfnFormButtonAdd("btnSlipCancel", "fnSlipCancel");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

           this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
           this.txtNO_POLY_CONST_CONTRCT = this.divSearch.form.txtNO_POLY_CONST_CONTRCT;
           this.txtDS_DEPT = this.divSearch.form.txtDS_DEPT;
           this.ccfCD_ORD_FIRM = this.divSearch.form.ccfCD_ORD_FIRM;

           this.dxGrid = this.divData.form.divDataTop.form.objGrid;
           this.dxGridSub = this.divData.form.divDataBottom.form.objGridSub;
        };


        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
           this.ccfCD_SITE.CodeFindName = "DOX_CFSITE";      // 현장코드(검색조건_공통 현장코드 아님)
           this.ccfCD_ORD_FIRM.CodeFindName = "DOX_CFORDFIRM_TWO";    //발주처

           this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWU_CONSTCOLLECTDEMAND");
           this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

           this.dxGrid.set_selecttype("cell");
           this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
           this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);

           this.gfnGridInit(this.dxGridSub, this.dsListSub, "DW", "DWU_CONSTCOLLECT");

           this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
           this.ccfCD_ORD_FIRM.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

           this.ccfCD_SITE.AfterCDTextChanged = "ccfCD_SITE_AfterCDTextChanged";

           // 그리드 onkeyup 이벤트
           this.dxGridSub.addEventHandler("onkeyup", this.fnGridSub_OnKeyUp, this);

           // 그리드에서 차수 컬럼 숫자만 입력되게 처리함
           this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex( "body", "NO_DIV_DEMAND"), "editinputtype", "digit" );

        }


        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

           this.dsSelect = new Dataset();
           this.dsSelect.addColumn("TY_WRK", "string");
           this.dsSelect.addColumn("CD_FIELD", "string");
           this.dsSelect.addColumn("NO_CONTRCT", "string");
           this.dsSelect.addColumn("NO_POLY_CONST_CONTRCT", "string");
           this.dsSelect.addColumn("CD_ORD_FIRM", "string");
           this.dsSelect.addColumn("GU_SEARCH", "string");

           this.dsSelectSub = new Dataset();
           this.dsSelectSub.addColumn("TY_WRK", "string");
           this.dsSelectSub.addColumn("CD_FIELD", "string");
           this.dsSelectSub.addColumn("NO_CONTRCT", "string");
           this.dsSelectSub.addColumn("NO_POLY_CONST_CONTRCT", "string");
           this.dsSelectSub.addColumn("CD_ORD_FIRM", "string");
           this.dsSelectSub.addColumn("DT_DEMAND", "string");
           this.dsSelectSub.addColumn("NO_DEMAND", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_FIELD", "string");
        	this.dsSave.addColumn("NO_CONTRCT", "string");
        	this.dsSave.addColumn("NO_POLY_CONST_CONTRCT", "string");
        	this.dsSave.addColumn("CD_ORD_FIRM", "string");
        	this.dsSave.addColumn("DT_DEMAND", "string");
        	this.dsSave.addColumn("NO_DEMAND", "string");
        	this.dsSave.addColumn("NO_COLLECT", "string");
        	this.dsSave.addColumn("DT_COLLECT", "string");
        	this.dsSave.addColumn("DIV_COLLECT", "string");
        	this.dsSave.addColumn("YN_CASH", "string");
        	this.dsSave.addColumn("AM_COLLECT", "bigdecimal");
        	this.dsSave.addColumn("AM_COLLECT_SUPPLY", "bigdecimal");
        	this.dsSave.addColumn("AM_COLLECT_VAT", "bigdecimal");
        	this.dsSave.addColumn("AM_COLLECT_TXFR_SUPPLY", "bigdecimal");
        	this.dsSave.addColumn("AM_ARREARAGE", "bigdecimal");
        	this.dsSave.addColumn("AM_COMMISSION", "bigdecimal");
        	this.dsSave.addColumn("AM_DISCOUNT", "bigdecimal");
        	this.dsSave.addColumn("AM_UNEMPINSURANCE", "bigdecimal");
        	this.dsSave.addColumn("AM_MISU_ETC", "bigdecimal");
        	this.dsSave.addColumn("AM_MIJI_ETC", "bigdecimal");
        	this.dsSave.addColumn("NO_ACCOUNT", "string");
        	this.dsSave.addColumn("NO_NOTES", "string");
        	this.dsSave.addColumn("DT_TRUST", "string");
        	this.dsSave.addColumn("DT_EXPIRATION", "string");
        	this.dsSave.addColumn("NO_SLIP_HEADOFFICE", "string");
        	this.dsSave.addColumn("NO_SLIP_FIELD", "string");
        	this.dsSave.addColumn("NO_INCONFIRM", "string");
        	this.dsSave.addColumn("YN_FBSCHK", "string");
        	this.dsSave.addColumn("DS_RM", "string");
        	this.dsSave.addColumn("CD_TRADE", "string");
        	this.dsSave.addColumn("ERP_NUM", "string");
        	this.dsSave.addColumn("YN_SLIPTYPE", "string");
        	this.dsSave.addColumn("AM_SUM_SUBCON", "bigdecimal");
        	this.dsSave.addColumn("AM_COLLECT_PART", "bigdecimal");
        	this.dsSave.addColumn("AM_COLLECT_SUPPLY_PART", "bigdecimal");
        	this.dsSave.addColumn("AM_COLLECT_VAT_PART", "bigdecimal");
        	this.dsSave.addColumn("AM_COLLECT_TXFR_SUPPLY_PART", "bigdecimal");
        	this.dsSave.addColumn("AM_COLLECT_OTHER", "bigdecimal");
        	this.dsSave.addColumn("AM_COLLECT_SUPPLY_OTHER", "bigdecimal");
        	this.dsSave.addColumn("AM_COLLECT_VAT_OTHER", "bigdecimal");
        	this.dsSave.addColumn("AM_COLLECT_TXFR_SUPPLY_OTHER", "bigdecimal");
        	this.dsSave.addColumn("YN_AMBIG_SUSPRECPT_RPAY", "string");
        	this.dsSave.addColumn("DIV_BOOK", "string");
        	this.dsSave.addColumn("SN_SEQ", "int");
        	this.dsSave.addColumn("CD_BUZEI", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("TY_WRK", "string");
        	this.dsExec.addColumn("ID_USER", "string");
        	this.dsExec.addColumn("CD_FIELD", "string");
        	this.dsExec.addColumn("NO_CONTRCT", "string");
        	this.dsExec.addColumn("NO_POLY_CONST_CONTRCT", "string");
        	this.dsExec.addColumn("CD_ORD_FIRM", "string");
        	this.dsExec.addColumn("DT_DEMAND", "string");
        	this.dsExec.addColumn("NO_DEMAND", "string");
        	this.dsExec.addColumn("NO_COLLECT", "string");
        	this.dsExec.addColumn("CD_DEPT", "string");
        	this.dsExec.addColumn("CD_SLIP", "string");

        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *   조회 버튼
          */
        this.fnSelect = function() {
           if (!this.fnSelectValidate()) return false;

           this.gfnGridBeforeSelect(this.dxGrid);

           this.dsSelect.clearData();
           this.dsSelect.addRow();

           this.dsSelect.setColumn(0, "TY_WRK", "Q");
           this.dsSelect.setColumn(0, "CD_FIELD", this.dsSearch.getColumn(0, "CD_SITE"));
           this.dsSelect.setColumn(0, "NO_CONTRCT", this.ccfCD_SITE.form.DSTextBox.value);
           this.dsSelect.setColumn(0, "NO_POLY_CONST_CONTRCT", this.txtNO_POLY_CONST_CONTRCT.value);
           this.dsSelect.setColumn(0, "CD_ORD_FIRM", this.ccfCD_ORD_FIRM.form.CDTextBox.value);
           this.dsSelect.setColumn(0, "GU_SEARCH", this.dsSearch.getColumn(0, "TY_GUBUN"));


           var strSvcId    = "select";
           var strSvcType  = "grid";
           var inProc      = "_dsProc";
           var inData      = "select=dsSelect";
           var outData     = "dsList=select0";
           var strArg      = "";
           var callBackFnc = "fnCallback";

           this.gfnTransaction( strSvcId ,    // transaction을 구분하기 위한 svc id값
                          strSvcType ,    // transaction을 요청할 구분
                          inProc,         // Procedure 정보 Dataset 이름
                          inData ,       // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
                          outData ,       // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
                          strArg,          // 입력갑스로 보낼 arguments, strFormData="20120607"
                          callBackFnc); // 통신방법 정의 [생략가능]
        }



        /************************************************************************
         * 서브 버튼 이벤트
         ************************************************************************/
        this.fnSelectSub = function() {

           if (this.dsSearch.getColumn(0, "CD_SITE") == "") {
        		this.gfnAlert("현장코드를 입력하세요.");
        	return;
        	}

        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return false;

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	// 디테일 데이터셋 데이터 삭제
        	this.dsListSub.clearData();

        	// 디테일 파마리터 데이터셋 셋팅
        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();

            this.dsSelectSub.setColumn(0, "TY_WRK", "Q");
            this.dsSelectSub.setColumn(0, "CD_FIELD", this.dsSearch.getColumn(0, "CD_SITE"));
            this.dsSelectSub.setColumn(0, "NO_CONTRCT", this.dsSearch.getColumn(0, "NO_CONTRCT"));
            this.dsSelectSub.setColumn(0, "NO_POLY_CONST_CONTRCT", this.dsSearch.getColumn(0, "NO_POLY_CONST_CONTRCT"));
            this.dsSelectSub.setColumn(0, "CD_ORD_FIRM", this.dsList.getColumn(this.dsList.rowposition, "CD_ORD_FIRM"));
            this.dsSelectSub.setColumn(0, "DT_DEMAND", this.dsList.getColumn(this.dsList.rowposition, "DT_DEMAND"));
        	this.dsSelectSub.setColumn(0, "NO_DEMAND", this.dsList.getColumn(this.dsList.rowposition, "NO_DEMAND"));


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



        /*
         *	서브 저장 버튼
         */
        this.fnSave = function() {
        		if(this.dsListSub.rowcount < 1) return;
        		if (!this.gfnGridValidate(this.dxGridSub)) return;

        		this.dxGridSub.updateToDataset();
        		this.dsSave.clearData();

        		for (var i = 0; i < this.dsListSub.rowcount; i++) {
        			var flag = this.gfnGetFlag(this.dsListSub, i);
        			switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        			var nrow = this.dsSave.addRow();
        			this.dsSave.setColumn(nrow, "TY_WRK", flag);
        			this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			this.dsSave.setColumn(nrow, "CD_FIELD", this.dsSearch.getColumn(0, "CD_SITE"));
        			this.dsSave.setColumn(nrow, "NO_CONTRCT", this.dsSearch.getColumn(0, "NO_CONTRCT"));
        			this.dsSave.setColumn(nrow, "NO_POLY_CONST_CONTRCT", this.dsSearch.getColumn(0, "NO_POLY_CONST_CONTRCT"));
        			this.dsSave.setColumn(nrow, "CD_ORD_FIRM", this.dsList.getColumn(this.dsList.rowposition, "CD_ORD_FIRM"));
        			this.dsSave.setColumn(nrow, "DT_DEMAND", this.dsList.getColumn(this.dsList.rowposition, "DT_DEMAND"));
        			this.dsSave.setColumn(nrow, "NO_DEMAND", this.dsList.getColumn(this.dsList.rowposition, "NO_DEMAND"));
        			this.dsSave.setColumn(nrow, "NO_COLLECT", this.dsListSub.getColumn(i, "NO_COLLECT"));
        			this.dsSave.setColumn(nrow, "DT_COLLECT", this.dsListSub.getColumn(i, "DT_COLLECT"));
        			this.dsSave.setColumn(nrow, "DIV_COLLECT", this.dsListSub.getColumn(i, "DIV_COLLECT"));
        			this.dsSave.setColumn(nrow, "YN_CASH", this.dsListSub.getColumn(i, "YN_CASH"));
        			this.dsSave.setColumn(nrow, "AM_COLLECT", this.dsListSub.getColumn(i, "AM_COLLECT"));
        			this.dsSave.setColumn(nrow, "AM_COLLECT_SUPPLY", this.dsListSub.getColumn(i, "AM_COLLECT_SUPPLY"));
        			this.dsSave.setColumn(nrow, "AM_COLLECT_VAT", this.dsListSub.getColumn(i, "AM_COLLECT_VAT"));
        			this.dsSave.setColumn(nrow, "AM_COLLECT_TXFR_SUPPLY", this.dsListSub.getColumn(i, "AM_COLLECT_TXFR_SUPPLY"));
        			this.dsSave.setColumn(nrow, "AM_ARREARAGE", this.dsListSub.getColumn(i, "AM_ARREARAGE"));
        			this.dsSave.setColumn(nrow, "AM_COMMISSION", this.dsListSub.getColumn(i, "AM_COMMISSION"));
        			this.dsSave.setColumn(nrow, "AM_DISCOUNT", this.dsListSub.getColumn(i, "AM_DISCOUNT"));
        			this.dsSave.setColumn(nrow, "AM_UNEMPINSURANCE", this.dsListSub.getColumn(i, "AM_UNEMPINSURANCE"));
        			this.dsSave.setColumn(nrow, "AM_MISU_ETC", this.dsListSub.getColumn(i, "AM_MISU_ETC"));
        			this.dsSave.setColumn(nrow, "AM_MIJI_ETC", this.dsListSub.getColumn(i, "AM_MIJI_ETC"));
        			this.dsSave.setColumn(nrow, "NO_ACCOUNT", this.dsListSub.getColumn(i, "NO_ACCOUNT"));
        			this.dsSave.setColumn(nrow, "NO_NOTES", this.dsListSub.getColumn(i, "NO_NOTES"));
        			this.dsSave.setColumn(nrow, "DT_TRUST", this.dsListSub.getColumn(i, "DT_TRUST"));
        			this.dsSave.setColumn(nrow, "DT_EXPIRATION", this.dsListSub.getColumn(i, "DT_EXPIRATION"));
        			this.dsSave.setColumn(nrow, "NO_SLIP_HEADOFFICE", this.dsListSub.getColumn(i, "NO_SLIP_HEADOFFICE"));
        			this.dsSave.setColumn(nrow, "NO_SLIP_FIELD", this.dsListSub.getColumn(i, "NO_SLIP_FIELD"));
        			this.dsSave.setColumn(nrow, "NO_INCONFIRM", this.dsListSub.getColumn(i, "NO_INCONFIRM"));
        			this.dsSave.setColumn(nrow, "YN_FBSCHK", this.dsListSub.getColumn(i, "YN_FBSCHK"));
        			this.dsSave.setColumn(nrow, "DS_RM", this.dsListSub.getColumn(i, "DS_RM"));
        			this.dsSave.setColumn(nrow, "CD_TRADE", this.dsListSub.getColumn(i, "CD_TRADE"));
        			this.dsSave.setColumn(nrow, "ERP_NUM", this.dsListSub.getColumn(i, "ERP_NUM"));
        			this.dsSave.setColumn(nrow, "YN_SLIPTYPE", this.dsListSub.getColumn(i, "YN_SLIPTYPE"));
        			this.dsSave.setColumn(nrow, "AM_SUM_SUBCON", this.dsListSub.getColumn(i, "AM_SUM_SUBCON"));
        			this.dsSave.setColumn(nrow, "AM_COLLECT_PART", this.dsListSub.getColumn(i, "AM_COLLECT_PART"));
        			this.dsSave.setColumn(nrow, "AM_COLLECT_SUPPLY_PART", this.dsListSub.getColumn(i, "AM_COLLECT_SUPPLY_PART"));
        			this.dsSave.setColumn(nrow, "AM_COLLECT_VAT_PART", this.dsListSub.getColumn(i, "AM_COLLECT_VAT_PART"));
        			this.dsSave.setColumn(nrow, "AM_COLLECT_TXFR_SUPPLY_PART", this.dsListSub.getColumn(i, "AM_COLLECT_TXFR_SUPPLY_PART"));
        			this.dsSave.setColumn(nrow, "AM_COLLECT_OTHER", this.dsListSub.getColumn(i, "AM_COLLECT_OTHER"));
        			this.dsSave.setColumn(nrow, "AM_COLLECT_SUPPLY_OTHER", this.dsListSub.getColumn(i, "AM_COLLECT_SUPPLY_OTHER"));
        			this.dsSave.setColumn(nrow, "AM_COLLECT_VAT_OTHER", this.dsListSub.getColumn(i, "AM_COLLECT_VAT_OTHER"));
        			this.dsSave.setColumn(nrow, "AM_COLLECT_TXFR_SUPPLY_OTHER", this.dsListSub.getColumn(i, "AM_COLLECT_TXFR_SUPPLY_OTHER"));
        			this.dsSave.setColumn(nrow, "YN_AMBIG_SUSPRECPT_RPAY", this.dsListSub.getColumn(i, "YN_AMBIG_SUSPRECPT_RPAY"));
        			this.dsSave.setColumn(nrow, "DIV_BOOK", this.dsListSub.getColumn(i, "DIV_BOOK"));
        			this.dsSave.setColumn(nrow, "SN_SEQ", this.dsListSub.getColumn(i, "SN_SEQ"));
        			this.dsSave.setColumn(nrow, "CD_BUZEI", this.dsListSub.getColumn(i, "CD_BUZEI"));
        			break;
        		}
        	}

          if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
            var inData     = "d_save=dsSave";
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
         *   입력 버튼
         */
        this.fnAdd = function() {

           var nrow = this.gfnGridAdd(this.dxGridSub, "bottom"); // top (default), bottom, current

           this.dsListSub.set_enableevent(false);
           this.dsListSub.setColumn(nrow, "YN_EDIT", "Y");
           this.dsListSub.setColumn(nrow, "CD_ORD_FIRM", this.dsList.getColumn(this.dsList.rowposition, "CD_ORD_FIRM"));   // 발주처코드
           this.dsListSub.setColumn(nrow, "DS_ORD_FIRM", this.dsList.getColumn(this.dsList.rowposition, "DS_ORD_FIRM")); //  // 발주처명
           this.dsListSub.set_enableevent(true);

        }
        /*
         *	저장 후 실행처리
         */
        this.fnExec = function(tyWrk, cdOrdFirm, dtDemand, noDemand, cdSlip, noCollect) {

        	this.dsExec.clearData();
        	this.dsExec.addRow();

        	this.dsExec.setColumn(0, "TY_WRK", tyWrk);
        	this.dsExec.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	this.dsExec.setColumn(0, "CD_FIELD", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsExec.setColumn(0, "NO_CONTRCT", this.dsSearch.getColumn(0, "NO_CONTRCT"));
        	this.dsExec.setColumn(0, "NO_POLY_CONST_CONTRCT", this.dsSearch.getColumn(0, "NO_POLY_CONST_CONTRCT"));
        	this.dsExec.setColumn(0, "CD_ORD_FIRM", cdOrdFirm);
        	this.dsExec.setColumn(0, "DT_DEMAND", dtDemand);
        	this.dsExec.setColumn(0, "NO_DEMAND", noDemand);
        	this.dsExec.setColumn(0, "NO_COLLECT", noCollect);
        	this.dsExec.setColumn(0, "CD_DEPT", this.AuthClient.CD_DEPT);
        	this.dsExec.setColumn(0, "CD_SLIP", cdSlip);

        	if (this.dsExec.rowcount == 0) return;

        	var strSvcId    = "exec";
        	var strSvcType  = "save";
        	var inProc     = "_dsProc";
        	var inData      = "d_exec=dsExec";
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
         *   삭제 버튼
        */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGridSub);
        }

        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGridSub);
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *   조회 Validate
         */
        this.fnSelectValidate = function() {
           var validate = true;

           if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
              validate = false;
              // Alert후 실행할 처리
              this.fnVaidateCallback = function() {
                 this.ccfCD_SITE.form.CDTextBox.setFocus();
              }
              this.gfnAlert("현장코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
           }

           return validate;

        };
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *   콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
           if (svcID == "select") {
              this.gfnGridAfterSelect(this.dxGrid);
           }
           else if(svcID == "save") {
              if (errorCode == 0) {
                 var tyWrk = "UPD";
                 var cdOrdFirm = "";
                 var dtDemand = "";
        		 var noCollect = "";
                 var noDemand = "";
                 var cdSlip = "";
                 var cdSlip = "";

                 this.execGubun = "btnSave";
                 this.fnExec(tyWrk, cdOrdFirm, dtDemand, noDemand, cdSlip, noCollect);
              } else {
                 this.gfnAlert(errorMsg);
              }
           }
           else if(svcID == "exec") {
              if (errorCode == 0) {
                 if(this.execGubun == "btnExec"){
                    this.gfnAlert("전표발행이 정상 처리되었습니다.");
                 }else if(this.execGubun == "btnExecCan"){
                    this.gfnAlert("전표취소가 정상 처리되었습니다.");
                 }

                 this.execGubun = "";

        		 this.FormBtns.SubSelect.click();
        		 this.gfnSetFormStatus(this, "Q");
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

           if (id == "ccfCD_SITE") {
              dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
              dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
              dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
           } else if (id == "ccfCD_ORD_FIRM") {
              dsUserParam.setColumn(nrow, "CD_FIELD", this.dsSearch.getColumn(0, "CD_SITE"));
              dsUserParam.setColumn(nrow, "NO_CONTRCT", this.dsSearch.getColumn(0, "NO_CONTRCT"));
              dsUserParam.setColumn(nrow, "NO_POLY_CONST_CONTRCT", this.dsSearch.getColumn(0, "NO_POLY_CONST_CONTRCT"));
              dsUserParam.setColumn(nrow, "CLASS_ORD_DMD", "ORD");
           }

           return true;
        }

        this.ccfCD_SITE_AfterCDTextChanged = function(id, codeFindData) {
           // 코드,명칭 외 추가 컬럼 처리
           var arr = codeFindData; //this.ccfCD_DEPT_ORG.form.SelectedData; 둘다 사용가능
           var ds_noPolyConstContrct = "";
           var ds_dsDept = "";

           if (arr.length > 0) {
              ds_noPolyConstContrct = arr[0]["NO_POLY_CONST_CONTRCT"];
              ds_dsDept = arr[0]["DS_DEPT"];

           }

           this.dsSearch.setColumn(0, "NO_POLY_CONST_CONTRCT", ds_noPolyConstContrct);
           this.dsSearch.setColumn(0, "DS_DEPT", ds_dsDept);
        }
        /************************************************************************
         * 그리드 이벤트
         *********************************************************************** */

         this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
           // 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
            //그리드 발주처 코드파인드
           if (id == "DOX_CFORDFIRM_TWO") {

              var cd_site = this.dsSearch.getColumn(0, "CD_SITE");
              if(this.gfnIsNull(cd_site)) {
                 this.gfnAlert("현장코드를 먼저 입력하세요.");
                 return false;
              }

              dsUserParam.setColumn(nrow, "CD_FIELD", this.dsSearch.getColumn(0, "CD_SITE"));
              dsUserParam.setColumn(nrow, "NO_CONTRCT", this.dsSearch.getColumn(0, "NO_CONTRCT"));
              dsUserParam.setColumn(nrow, "NO_POLY_CONST_CONTRCT", this.dsSearch.getColumn(0, "NO_POLY_CONST_CONTRCT"));
              dsUserParam.setColumn(nrow, "CLASS_ORD_DMD", "ORD");
            }
           return true;
        }

        // 그리드 OnKeyUp 이벤트
        this.fnGridSub_OnKeyUp = function(obj,e)
        {
        /*	데이터셋이벤트로 처리하여 일단 주석처리 2019-05-28 sh Lee
        	var nIndex = this.dxGridSub.getCellPos();
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGridSub, nIndex);	// 클릭한 cell의 컬럼명
        	//alert(colnm);

        	this.dxGridSub.updateToDataset();

        	var nRow = this.dsListSub.rowposition;

        	if(colnm == "AM_COLLECT_SUPPLY") {	//  공급가
        		//부가세
        		this.dsListSub.setColumn(nRow, "AM_COLLECT_VAT", nexacro.floor(nexacro.toNumber(this.dsListSub.getColumn(nRow, "AM_COLLECT_SUPPLY"),0)) * 0.1);

        		// 기성금액 합계
        		this.dsListSub.setColumn(nRow, "AM_COLLECT", nexacro.toNumber(this.dsListSub.getColumn(nRow, "AM_COLLECT_SUPPLY"),0) + nexacro.toNumber(this.dsListSub.getColumn(nRow, "AM_COLLECT_VAT"),0) + nexacro.toNumber(this.dsListSub.getColumn(nRow, "AM_COLLECT_TXFR_SUPPLY"),0) );
        	}*/
        };


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

        //하도직불
         this.fnbtnScntDebt = function(obj,e) {
           // 선택된 row가 있을 경우에만 팝업을 띄움
           if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

           var cdSite = this.dsSearch.getColumn(0, "CD_SITE");   // 현장코드
           var dsSite = this.dsSearch.getColumn(0, "DS_SITE");   // 현장명
           var noContrct = this.dsSearch.getColumn(0, "NO_CONTRCT");   // 공사계약차수
           var noPolyConstContrct = this.dsSearch.getColumn(0, "NO_POLY_CONST_CONTRCT");   // 차수계약차수
           var dsDept = this.dsSearch.getColumn(0, "DS_DEPT");   // 현장명

           var cdOrdFirm = this.dsList.getColumn(this.dsList.rowposition, "CD_ORD_FIRM");   // 발주처코드
           var dsOrdFirm = this.dsList.getColumn(this.dsList.rowposition, "DS_ORD_FIRM");   // 발주처명
           var dtDemand = this.dsList.getColumn(this.dsList.rowposition, "DT_DEMAND");      // 청구일자
           var noDemand = this.dsList.getColumn(this.dsList.rowposition, "NO_DEMAND");      // 청구회차
           var noCollect = this.dsListSub.getColumn(this.dsListSub.rowposition, "NO_COLLECT");      // 수금회차


          this.gfnAlert("추후진행예정 팝업화면입니다.");
          //this.gfnFormOpen("DWU", "DWU_SCNTDEBT", "", param);


        }

         // 전표발행 버튼 클릭
         this.fnSlipIssue = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var cdSite = this.dsSearch.getColumn(0, "CD_SITE");	// 현장코드
        	var noContrct = this.dsSearch.getColumn(0, "NO_CONTRCT");	// 차수
        	var noPolyConstContrct = this.dsSearch.getColumn(0, "NO_POLY_CONST_CONTRCT");	// 차수계약차수
        	var dsDept = this.dsSearch.getColumn(0, "DS_DEPT");	// 현장명

        	var cdOrdFirm = this.dsList.getColumn(this.dsList.rowposition, "CD_ORD_FIRM");	// 발주처코드
        	var dsOrdFirm = this.dsList.getColumn(this.dsList.rowposition, "DS_ORD_FIRM");	// 발주처명
        	var dtDemand = this.dxGrid.getCellText(this.dsList.rowposition, this.dxGrid.getBindCellIndex( "body", "DT_DEMAND"));	// 청구일자
        	var noDemand = this.dsList.getColumn(this.dsList.rowposition, "NO_DEMAND");		// 청구회차
        	var noCollect = this.dsListSub.getColumn(this.dsListSub.rowposition, "NO_COLLECT");		// 수금회차


        	this.gfnConfirm("현장코드 : [" + cdSite + "][" + noContrct + "][" + noPolyConstContrct + "] " + dsDept + "\r\n발주처 : [" + cdOrdFirm + "] " + dsOrdFirm + "\r\n청구일자 : " + dtDemand + ", 청구회차 : " + noDemand +  ", 수금회차 : " + noCollect +  "\r\n \r\n공사비수금 전표발행 하시겠습니까?", "dsList_slipIssue_callback");
        }

        // 전표발행 버튼 클릭 후 callback
        this.dsList_slipIssue_callback = function(strId, val)
        {
           if(val == true) {
              var tyWrk = "SLPPUB";

              var cdOrdFirm = this.dsList.getColumn(this.dsList.rowposition, "CD_ORD_FIRM");
              var dtDemand = this.dsList.getColumn(this.dsList.rowposition, "DT_DEMAND");
              var noDemand = this.dsList.getColumn(this.dsList.rowposition, "NO_DEMAND");
              var cdSlip = this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE");
              var noCollect = this.dsListSub.getColumn(this.dsListSub.rowposition, "NO_COLLECT");

              this.execGubun = "btnExec";

              this.fnExec(tyWrk, cdOrdFirm, dtDemand, noDemand, cdSlip, noCollect);
           }
        }

         // 전표조회 버튼 클릭시 팝업화면 호출
         this.fnSlipSearch = function(obj,e) {
           // 선택된 row가 있을 경우에만 팝업을 띄움
           if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

           var param = {};
           param.NO_SLIP = this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_TRADE");

           // 화면 오픈.
           // CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
           // 타 모듈 화면 호출시 지정할것.

           this.gfnAlert("추후진행예정 팝업화면입니다.");
           //this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWA_RISKDTLS", "", param);
        }

         // 전표취소 버튼 클릭
         this.fnSlipCancel = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var cdSite = this.dsSearch.getColumn(0, "CD_SITE");	// 현장코드
        	var noContrct = this.dsSearch.getColumn(0, "NO_CONTRCT");	// 차수
        	var noPolyConstContrct = this.dsSearch.getColumn(0, "NO_POLY_CONST_CONTRCT");	// 차수계약차수
        	var dsDept = this.dsSearch.getColumn(0, "DS_DEPT");	// 현장명

        	var cdOrdFirm = this.dsList.getColumn(this.dsList.rowposition, "CD_ORD_FIRM");	// 발주처코드
        	var dsOrdFirm = this.dsList.getColumn(this.dsList.rowposition, "DS_ORD_FIRM");	// 발주처명
        	//var dtDemand = this.dsList.getColumn(this.dsList.rowposition, "DT_DEMAND");		// 청구일자
        	var dtDemand = this.dxGrid.getCellText(this.dsList.rowposition, this.dxGrid.getBindCellIndex( "body", "DT_DEMAND"));	// 청구일자
        	var noDemand = this.dsList.getColumn(this.dsList.rowposition, "NO_DEMAND");		// 청구회차
        	var noCollect = this.dsListSub.getColumn(this.dsListSub.rowposition, "NO_COLLECT");		// 수금회차

        	this.gfnConfirm("현장코드 : [" + cdSite + "][" + noContrct + "][" + noPolyConstContrct + "] " + dsDept + "\r\n발주처 : [" + cdOrdFirm + "] " + dsOrdFirm + "\r\n청구일자 : " + dtDemand + ", 청구회차 : " + noDemand + ", 수금회차 : " + noCollect +  "\r\n \r\n공사비수금 전표취소 하시겠습니까?", "dsList_slipCancel_callback");
        }

        // 전표취소 버튼 클릭 후 callback
        this.dsList_slipCancel_callback = function(strId, val)
        {
        	if(val == true) {
        		var tyWrk = "SLPCNC";
        		var cdOrdFirm = this.dsList.getColumn(this.dsList.rowposition, "CD_ORD_FIRM");
        		var dtDemand = this.dsList.getColumn(this.dsList.rowposition, "DT_DEMAND");
        		var noDemand = this.dsList.getColumn(this.dsList.rowposition, "NO_DEMAND");
        		var cdSlip = this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE");
        		var noCollect = this.dsListSub.getColumn(this.dsListSub.rowposition, "NO_COLLECT");

        		this.execGubun = "btnExecCan";
        		this.fnExec(tyWrk, cdOrdFirm, dtDemand, noDemand, cdSlip, noCollect);
        	}
        }


        this.dsSearch_onvaluechanged = function(obj,e)
        {
           if(e.oldvalue != e.newvalue) {
        	   if(e.columnid != "TY_GUBUN"){
        			 this.gfnSetFormStatus(this);   // 폼상태 초기화
        		  this.gfnGridClear(this.dxGrid);
        		  this.gfnGridClear(this.dxGridSub);
        		  //this.dsSearch.setColumn(0, "CD_ORD_FIRM", "");
        		  this.divSearch.form.ccfCD_ORD_FIRM.form.CDTextBox.set_value("");
        		  this.divSearch.form.ccfCD_ORD_FIRM.form.DSTextBox.set_value("");
        	   }
           }
        };


        this.fnSearchInit = function(obj,e) {
           if(e == null || (e.pretext != e.posttext)) {
              this.gfnSetFormStatus(this);
              this.gfnGridClear(this.dxGrid);
              }
        }


        this.divData_ondragmove = function(obj,e)
        {
           if(e.userdata == "splitter") {
              this.divData.form.divSplitter.set_top(e.clienty);
              this.divData.form.resetScroll();
           }
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
           e.set_userdata("splitter");
           return true;
        };

        this.dsListSub_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "AM_COLLECT_SUPPLY") {	//  공급가
        		//부가세
        		this.dsListSub.setColumn(e.row, "AM_COLLECT_VAT", nexacro.floor(nexacro.toNumber(this.dsListSub.getColumn(e.row, "AM_COLLECT_SUPPLY"),0)) * 0.1);

        		// 기성금액 합계
        		this.dsListSub.setColumn(e.row, "AM_COLLECT", nexacro.toNumber(this.dsListSub.getColumn(e.row, "AM_COLLECT_SUPPLY"),0) + nexacro.toNumber(this.dsListSub.getColumn(e.row, "AM_COLLECT_VAT"),0) + nexacro.toNumber(this.dsListSub.getColumn(e.row, "AM_COLLECT_TXFR_SUPPLY"),0) );
        	}else if(e.columnid == "AM_COLLECT" || e.columnid == "AM_COMMISSION" || e.columnid == "AM_ARREARAGE" || e.columnid == "AM_DISCOUNT" || e.columnid == "AM_MISU_ETC"){
        		//수금예정금액
        		var colval = nexacro.toNumber(this.dsListSub.getColumn(e.row, "AM_COLLECT"),0) + ((nexacro.toNumber(this.dsListSub.getColumn(e.row, "AM_COMMISSION"),0)* -1)+nexacro.toNumber(this.dsListSub.getColumn(e.row, "AM_ARREARAGE"),0)+(nexacro.toNumber(this.dsListSub.getColumn(e.row, "AM_DISCOUNT"),0)* -1)+nexacro.toNumber(this.dsListSub.getColumn(e.row, "AM_MISU_ETC"),0));
        		this.dsListSub.setColumn(e.row, "AM_COLLECTSCH", nexacro.floor(colval));
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.txtNO_POLY_CONST_CONTRCT.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.txtDS_DEPT.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.dsList.addEventHandler("canrowposchange",this.dsList_canrowposchange,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsListSub.addEventHandler("oncolumnchanged",this.dsListSub_oncolumnchanged,this);
        };
        this.loadIncludeScript("DWU_CONSTCOLLECT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
