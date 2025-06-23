(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DLC_CARDDEPOSIT");
            this.set_titletext("카드보증금관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DLCPR_CARDDEPOSIT_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DLCPR_CARDDEPOSIT_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DLCPR_CARDDEPOSIT_UPDATE</Col></Row><Row><Col id=\"SP\">DLCPR_CARDDEPOSIT_DELETE</Col><Col id=\"TARGET\">delete</Col></Row><Row><Col id=\"SP\">DLCPR_CARDDEPOSIT_REFUND_SELECT</Col><Col id=\"TARGET\">d_select</Col></Row><Row><Col id=\"SP\">DLCPR_CARDDEPOSIT_REFUND_INSERT</Col><Col id=\"TARGET\">d_insert</Col></Row><Row><Col id=\"SP\">DLCPR_CARDDEPOSIT_REFUND_UPDATE</Col><Col id=\"TARGET\">d_update</Col></Row><Row><Col id=\"SP\">DLCPR_CARDDEPOSIT_REFUND_DELETE</Col><Col id=\"TARGET\">d_delete</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_UNIONMEMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NO_FLOOR\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("사업지코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNTUNIT","staCD_ACNTUNIT:0.0","10.0","400","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DLX_CFLEASESITE_S_CODEFIND2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDONGHO","ccfCD_ACNTUNIT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("동층호");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_DONG","staDONGHO:0.0","10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_FLOOR","ctxtNO_DONG:0.0","10.0","30","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_HO","ctxtNO_FLOOR:0.0","10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("cbtnDONG_SEARCH","ctxtNO_HO:0.0","10.0","25",null,null,"8",null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_CF_Search");
            obj.set_tabstop("10.0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT","cbtnDONG_SEARCH:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("납부기간");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","staDT:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ctclDT_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","ctclDT_FROM:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","49.92%","100.00%","5",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter:4",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staGridTitle1","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("카드보증금 정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","staGridTitle1:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter:6",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSaveSub",null,"0","60","22","0",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_enable("false");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnDeleteSub",null,"0","60","22","btnSaveSub:5",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_enable("false");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("staGridTitle2","0","0",null,"22","btnDeleteSub:5",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("카드보증금 환불내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","staGridTitle2:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnAddSub",null,"0","60","22","130",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("4");
            obj.set_text("입력");
            obj.set_enable("false");
            this.divData.form.divDataBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.ccfCD_ACNTUNIT.form.CDTextBox","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_ACNTUNIT.form.DSTextBox","value","dsSearch","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctxtNO_FLOOR","value","dsSearch","NO_FLOOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctxtNO_DONG","value","dsSearch","NO_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ctxtNO_HO","value","dsSearch","NO_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ctclDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DLC_CARDDEPOSIT.xfdl", function() {
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
         ************************************************************************/
        this.fnSetButton = function() {

        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_ACNTUNIT  = this.divSearch.form.ccfCD_ACNTUNIT;
        	this.ctxtNO_DONG     = this.divSearch.form.ctxtNO_DONG;
        	this.ctxtNO_FLOOR    = this.divSearch.form.ctxtNO_FLOOR;
        	this.ctxtNO_HO       = this.divSearch.form.ctxtNO_HO;
        	this.cbtnDONG_SEARCH = this.divSearch.form.cbtnDONG_SEARCH;
        	this.ctxtNO_HO       = this.divSearch.form.ctxtNO_HO;
        	this.ctclDT_FROM     = this.divSearch.form.ctclDT_FROM;
        	this.ctclDT_TO       = this.divSearch.form.ctclDT_TO;
        	this.staGridTitle1   = this.divData.form.divDataTop.form.staGridTitle1;
        	this.staGridTitle2   = this.divData.form.divDataBottom.form.staGridTitle2;
        	this.btnAddSub   	 = this.divData.form.divDataBottom.form.btnAddSub;
        	this.btnDeleteSub    = this.divData.form.divDataBottom.form.btnDeleteSub;
        	this.btnSaveSub      = this.divData.form.divDataBottom.form.btnSaveSub;

        	this.dxGrid    = this.divData.form.divDataTop.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataBottom.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DL", "DLC_CARDDEPOSIT");
        	this.dxGrid.set_selecttype("cell");

        	this.dsList.addEventHandler("onrowposchanged", this.dsList_onrowposchanged, this);
        	this.dsList.addEventHandler("oncolumnchanged", this.dsList_oncolumnchanged, this);

        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DL", "DLC_CARDDEPOSIT_REFUND");

        	this.dsListSub.addEventHandler("oncolumnchanged", this.dsListSub_oncolumnchanged, this);

        	this.ccfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACNTUNIT.AfterCDTextChanged = "fnAfterCDTextChanged";
        }
        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT"	, "string");
        	this.dsSelect.addColumn("TY_GUBUN"   	, "string");
        	this.dsSelect.addColumn("NO_CHASU"   	, "string");
        	this.dsSelect.addColumn("NO_DONG"   	, "string");
        	this.dsSelect.addColumn("NO_FLOOR"   	, "string");
        	this.dsSelect.addColumn("NO_HO"   		, "string");
        	this.dsSelect.addColumn("NO_UNIONMEMBER", "string");
        	this.dsSelect.addColumn("DT_FROM" 	 	, "string");
        	this.dsSelect.addColumn("DT_TO" 	 	, "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_ACNTUNIT"	, "string");
        	this.dsInsert.addColumn("TY_GUBUN"	 	, "string");
        	this.dsInsert.addColumn("NO_CHASU"	 	, "string");
        	this.dsInsert.addColumn("NO_DONG"	 	, "string");
        	this.dsInsert.addColumn("NO_HOSU"	 	, "string");
        	this.dsInsert.addColumn("CNT_FREE"	 	, "INT");
        	this.dsInsert.addColumn("CNT_CHARGE"	, "INT");
        	this.dsInsert.addColumn("AM_DEPOSIT"	, "BIGDECIMAL");
        	this.dsInsert.addColumn("DT_RECEIPT"	, "string");
        	this.dsInsert.addColumn("DS_REMARK"	 	, "string");
        	this.dsInsert.addColumn("ID_INSERT"	 	, "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_ACNTUNIT"	, "string");
        	this.dsUpdate.addColumn("TY_GUBUN"	 	, "string");
        	this.dsUpdate.addColumn("NO_CHASU"	 	, "string");
        	this.dsUpdate.addColumn("NO_DONG"	 	, "string");
        	this.dsUpdate.addColumn("NO_HOSU"	 	, "string");
        	this.dsUpdate.addColumn("CNT_FREE"	 	, "INT");
        	this.dsUpdate.addColumn("CNT_CHARGE"	, "INT");
        	this.dsUpdate.addColumn("AM_DEPOSIT"	, "BIGDECIMAL");
        	this.dsUpdate.addColumn("DT_RECEIPT"	, "string");
        	this.dsUpdate.addColumn("DS_REMARK"	 	, "string");
        	this.dsUpdate.addColumn("ID_UPDATE"	    , "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_ACNTUNIT", "string");
        	this.dsDelete.addColumn("TY_GUBUN"   , "string");
        	this.dsDelete.addColumn("NO_CHASU"   , "string");
        	this.dsDelete.addColumn("NO_DONG"    , "string");
        	this.dsDelete.addColumn("NO_HOSU"    , "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_ACNTUNIT" , "string");
        	this.dsSelectSub.addColumn("TY_GUBUN"    , "string");
        	this.dsSelectSub.addColumn("NO_CHASU"    , "string");
        	this.dsSelectSub.addColumn("NO_DONG"     , "string");
        	this.dsSelectSub.addColumn("NO_HOSU"     , "string");

        	this.dsInsertSub = new Dataset();
        	this.dsInsertSub.addColumn("CD_ACNTUNIT" , "string");
        	this.dsInsertSub.addColumn("TY_GUBUN"	 , "string");
        	this.dsInsertSub.addColumn("NO_CHASU"	 , "string");
        	this.dsInsertSub.addColumn("NO_DONG"	 , "string");
        	this.dsInsertSub.addColumn("NO_HOSU"	 , "string");
        	this.dsInsertSub.addColumn("DT_REFUND"	 , "string");
        	this.dsInsertSub.addColumn("AM_REFUND"	 , "BIGDECIMAL");
        	this.dsInsertSub.addColumn("DS_REMARK"	 , "string");
        	this.dsInsertSub.addColumn("ID_INSERT"	 , "string");

        	this.dsUpdateSub = new Dataset();
        	this.dsUpdateSub.addColumn("CD_ACNTUNIT" , "string");
        	this.dsUpdateSub.addColumn("TY_GUBUN"	 , "string");
        	this.dsUpdateSub.addColumn("NO_CHASU"	 , "string");
        	this.dsUpdateSub.addColumn("NO_DONG"	 , "string");
        	this.dsUpdateSub.addColumn("NO_HOSU"	 , "string");
        	this.dsUpdateSub.addColumn("NO_SEQ"	 	 , "INT");
        	this.dsUpdateSub.addColumn("DT_REFUND"	 , "string");
        	this.dsUpdateSub.addColumn("AM_REFUND"	 , "BIGDECIMAL");
        	this.dsUpdateSub.addColumn("DS_REMARK"	 , "string");
        	this.dsUpdateSub.addColumn("ID_UPDATE"	 , "string");

        	this.dsDeleteSub = new Dataset();
        	this.dsDeleteSub.addColumn("CD_ACNTUNIT" , "string");
        	this.dsDeleteSub.addColumn("TY_GUBUN"	 , "string");
        	this.dsDeleteSub.addColumn("NO_CHASU"	 , "string");
        	this.dsDeleteSub.addColumn("NO_DONG"	 , "string");
        	this.dsDeleteSub.addColumn("NO_HOSU"	 , "string");
        	this.dsDeleteSub.addColumn("NO_SEQ"	 	 , "INT");

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

        	this.dsListSub.clearData();

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_ACNTUNIT" 	, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN"   	, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU"    	, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect.setColumn(0, "NO_DONG"     	, this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect.setColumn(0, "NO_FLOOR"       , this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelect.setColumn(0, "NO_HO"     	 	, this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsSelect.setColumn(0, "NO_UNIONMEMBER" , this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        	this.dsSelect.setColumn(0, "DT_FROM"     	, this.dsSearch.getColumn(0, "DT_FROM"));
        	this.dsSelect.setColumn(0, "DT_TO"    	 	, this.dsSearch.getColumn(0, "DT_TO"));

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
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid);

        	this.btnAddSub.set_enable(false);
        	this.btnDeleteSub.set_enable(false);
        	this.btnSaveSub.set_enable(false);

        	this.dsListSub.clearData();
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);

        	var flag = this.gfnGetFlag(this.dsList, this.dsList.rowposition);
        	if(flag != "D"){
        		this.dsList_onrowposchanged(this.dsList, nexacro.DSRowPosChangeEventInfo);
        	}else{
        		this.btnAddSub.set_enable(false);
        		this.btnDeleteSub.set_enable(false);
        		this.btnSaveSub.set_enable(false);
        	}
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	if (!this.fnSaveValidate()) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);

        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_ACNTUNIT" 	, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        				this.dsInsert.setColumn(nrow, "TY_GUBUN"		, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        				this.dsInsert.setColumn(nrow, "NO_CHASU"		, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        				this.dsInsert.setColumn(nrow, "NO_DONG"			, this.dsList.getColumn(i, "NO_DONG"));			//동
        				this.dsInsert.setColumn(nrow, "NO_HOSU"			, this.dsList.getColumn(i, "HOSU"));			//호
        				this.dsInsert.setColumn(nrow, "CNT_FREE"		, this.dsList.getColumn(i, "CNT_FREE"));		//주차수량(무료)
        				this.dsInsert.setColumn(nrow, "CNT_CHARGE"		, this.dsList.getColumn(i, "CNT_CHARGE"));		//주차수량(유료)
        				this.dsInsert.setColumn(nrow, "AM_DEPOSIT"		, this.dsList.getColumn(i, "AM_DEPOSIT"));		//카드보증금
        				this.dsInsert.setColumn(nrow, "DT_RECEIPT"		, this.dsList.getColumn(i, "DT_RECEIPT"));		//수납일
        				this.dsInsert.setColumn(nrow, "DS_REMARK"		, this.dsList.getColumn(i, "DS_REMARK"));		//비고
        				this.dsInsert.setColumn(nrow, "ID_INSERT"		, this.AuthClient.ID_USER);						//등록자ID
        				break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_ACNTUNIT" 	, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        				this.dsUpdate.setColumn(nrow, "TY_GUBUN"		, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        				this.dsUpdate.setColumn(nrow, "NO_CHASU"		, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        				this.dsUpdate.setColumn(nrow, "NO_DONG"			, this.dsList.getColumn(i, "NO_DONG"));			//동
        				this.dsUpdate.setColumn(nrow, "NO_HOSU"			, this.dsList.getColumn(i, "HOSU"));			//호
        				this.dsUpdate.setColumn(nrow, "CNT_FREE"		, this.dsList.getColumn(i, "CNT_FREE"));		//주차수량(무료)
        				this.dsUpdate.setColumn(nrow, "CNT_CHARGE"		, this.dsList.getColumn(i, "CNT_CHARGE"));		//주차수량(유료)
        				this.dsUpdate.setColumn(nrow, "AM_DEPOSIT"		, this.dsList.getColumn(i, "AM_DEPOSIT"));		//카드보증금
        				this.dsUpdate.setColumn(nrow, "DT_RECEIPT"		, this.dsList.getColumn(i, "DT_RECEIPT"));		//수납일
        				this.dsUpdate.setColumn(nrow, "DS_REMARK"		, this.dsList.getColumn(i, "DS_REMARK"));		//비고
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE"		, this.AuthClient.ID_USER);						//수정자ID
        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_ACNTUNIT"		, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        				this.dsDelete.setColumn(nrow, "TY_GUBUN"		, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        				this.dsDelete.setColumn(nrow, "NO_CHASU"		, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        				this.dsDelete.setColumn(nrow, "NO_DONG"			, this.dsList.getColumn(i, "NO_DONG"));
        				this.dsDelete.setColumn(nrow, "NO_HOSU"			, this.dsList.getColumn(i, "HOSU"));
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
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
        	var arrGrid = [this.dxGrid, this.dxGridSub];
        	var arrSheetName = [this.staGridTitle1.text, this.staGridTitle2.text];

        	this.gfnExcelExportMulti(arrGrid, arrSheetName);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }

        /************************************************************************
         * 서브 버튼 이벤트
         ************************************************************************/
        this.fnSelectSub = function() {
        	if (this.dxGrid.rowcount == 0) return false;

        	this.dsListSub.clearData();

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();
        	this.dsSelectSub.setColumn(0, "CD_ACNTUNIT" , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelectSub.setColumn(0, "TY_GUBUN"	, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelectSub.setColumn(0, "NO_CHASU"	, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelectSub.setColumn(0, "NO_DONG"		, this.dsList.getColumn(this.dsList.rowposition, "NO_DONG"));
        	this.dsSelectSub.setColumn(0, "NO_HOSU"		, this.dsList.getColumn(this.dsList.rowposition, "HOSU"));

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
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
        }

        this.fnAddSub = function() {
        	this.gfnGridAdd(this.dxGridSub);
        }
        this.fnDelSub = function() {
        	this.gfnGridDel(this.dxGridSub);

        	//카드보증금정보 금액계산
        	this.fnAmCalc();
        }
        this.fnSaveSub = function() {
        	if (!this.gfnGridValidate(this.dxGridSub)) return;

        	if (!this.fnSaveValidateSub()) return;

        	this.dxGridSub.updateToDataset();

        	this.dsInsertSub.clearData();
        	this.dsUpdateSub.clearData();
        	this.dsDeleteSub.clearData();

        	var noDong = this.dsList.getColumn(this.dsList.rowposition, "NO_DONG");
        	var noHoSu = this.dsList.getColumn(this.dsList.rowposition, "HOSU");

        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsertSub.addRow();
        				this.dsInsertSub.setColumn(nrow, "CD_ACNTUNIT" 	, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        				this.dsInsertSub.setColumn(nrow, "TY_GUBUN"		, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        				this.dsInsertSub.setColumn(nrow, "NO_CHASU"		, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        				this.dsInsertSub.setColumn(nrow, "NO_DONG"	 	, noDong);
        				this.dsInsertSub.setColumn(nrow, "NO_HOSU"		, noHoSu);
        				this.dsInsertSub.setColumn(nrow, "DT_REFUND"	, this.dsListSub.getColumn(i, "DT_REFUND"));
        				this.dsInsertSub.setColumn(nrow, "AM_REFUND"	, this.dsListSub.getColumn(i, "AM_REFUND"));
        				this.dsInsertSub.setColumn(nrow, "DS_REMARK"	, this.dsListSub.getColumn(i, "DS_REMARK"));
        				this.dsInsertSub.setColumn(nrow, "ID_INSERT"	, this.AuthClient.ID_USER);
        				break;
        			case "U":
        				var nrow = this.dsUpdateSub.addRow();
        				this.dsUpdateSub.setColumn(nrow, "CD_ACNTUNIT" 	, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        				this.dsUpdateSub.setColumn(nrow, "TY_GUBUN"		, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        				this.dsUpdateSub.setColumn(nrow, "NO_CHASU"		, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        				this.dsUpdateSub.setColumn(nrow, "NO_DONG"	 	, noDong);
        				this.dsUpdateSub.setColumn(nrow, "NO_HOSU"		, noHoSu);
        				this.dsUpdateSub.setColumn(nrow, "NO_SEQ"		, this.dsListSub.getColumn(i, "NO_SEQ"));
        				this.dsUpdateSub.setColumn(nrow, "DT_REFUND"	, this.dsListSub.getColumn(i, "DT_REFUND"));
        				this.dsUpdateSub.setColumn(nrow, "AM_REFUND"	, this.dsListSub.getColumn(i, "AM_REFUND"));
        				this.dsUpdateSub.setColumn(nrow, "DS_REMARK"	, this.dsListSub.getColumn(i, "DS_REMARK"));
        				this.dsUpdateSub.setColumn(nrow, "ID_UPDATE"	, this.AuthClient.ID_USER);
        				break;
        			case "D":
        				var nrow = this.dsDeleteSub.addRow();
        				this.dsDeleteSub.setColumn(nrow, "CD_ACNTUNIT" 	, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        				this.dsDeleteSub.setColumn(nrow, "TY_GUBUN"		, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        				this.dsDeleteSub.setColumn(nrow, "NO_CHASU"		, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        				this.dsDeleteSub.setColumn(nrow, "NO_DONG"	 	, noDong);
        				this.dsDeleteSub.setColumn(nrow, "NO_HOSU"		, noHoSu);
        				this.dsDeleteSub.setColumn(nrow, "NO_SEQ"		, this.dsListSub.getColumn(i, "NO_SEQ"));
        				break;
        		}
        	}

        	if (this.dsInsertSub.rowcount == 0 && this.dsUpdateSub.rowcount == 0 && this.dsDeleteSub.rowcount == 0) return;

        	var strSvcId    = "savesub";
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
        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
          */
        this.fnSelectValidate = function() {
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))){
        		this.gfnAlert("사업지코드은(는) 필수입니다.");
        		this.ccfCD_ACNTUNIT.form.CDTextBox.setFocus();
        		return false;
        	}

        	if(!this.gfnIsNull(this.dsSearch.getColumn(0, "DT_FROM")) && !this.gfnIsNull(this.dsSearch.getColumn(0, "DT_TO"))){
        		if(this.gfnGetDiffDate(this.dsSearch.getColumn(0, "DT_FROM"), this.dsSearch.getColumn(0, "DT_TO")) <= -1){
        			this.gfnAlert("납부기간의 범위가 올바르지 않습니다.");
        			this.ctclDT_FROM.setFocus();
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
        	} else if (svcID == "detail") {
        		this.gfnGridAfterSelect(this.dxGridSub);

        		var flag = this.gfnGetFlag(this.dsList, this.dsList.rowposition);
        		if(flag == "I"){
        			this.btnAddSub.set_enable(false);
        			this.btnDeleteSub.set_enable(false);
        			this.btnSaveSub.set_enable(false);
        		}else{
        			this.btnAddSub.set_enable(true);
        			this.btnDeleteSub.set_enable(true);
        			this.btnSaveSub.set_enable(true);
        		}
        	} else if(svcID == "save"){
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "savesub") {
        		if (errorCode == 0) {
        			this.FormBtns.SubSelect.click();
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
        	// 사업지코드
        	if (id == "ccfCD_ACNTUNIT") {
        		dsUserParam.setColumn(nrow, "CD_DEPT"  	, this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "GR_SEARCH"	, this.FormInfo.GR_SEARCH);
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	// 사업지코드
        	if (id == "ccfCD_ACNTUNIT") {
        		this.dsSearch.setColumn(0, "NO_DONG" , "");
        		this.dsSearch.setColumn(0, "NO_FLOOR", "");
        		this.dsSearch.setColumn(0, "NO_HO"   , "");
        	}
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         //카드보증금정보 데이터셋 로우 변경이벤트
        this.dsList_onrowposchanged = function(obj,e)
        {
        	this.FormBtns.SubSelect.click();
        };

        //카드보증금 정보 데이터셋 데이터 변경이벤트
        this.dsList_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "AM_DEPOSIT"){	//카드보증금
        		//카드보증금정보 금액계산
        		this.fnAmCalc();
        	}
        };

        //카드보증금 환불내역 데이터셋 데이터 변경이벤트
        this.dsListSub_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "AM_REFUND"){	//환불금액
        		//카드보증금정보 금액계산
        		this.fnAmCalc();
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
        		this.gfnGridClear(this.dxGridSub);

        		this.btnAddSub.set_enable(false);
        		this.btnDeleteSub.set_enable(false);
        		this.btnSaveSub.set_enable(false);
        	}
        };

        //저장 Validate 체크
        this.fnSaveValidate = function ()
        {
        	for(var i=0;i<this.dsList.rowcount;i++){
        		//신규 데이터만 체크한다
        		if(this.gfnGetFlag(this.dsList, i) == "I"){
        			var noDong = this.gfnTrim(this.dsList.getColumn(i, "NO_DONG"));
        			var noHosu = this.gfnTrim(this.dsList.getColumn(i, "HOSU"));
        			if(this.dsList.getCaseCount("NO_DONG == '"+noDong+"' && HOSU =='"+noHosu+"'") > 1){
        				this.gfnAlert("동/호가 중복되었습니다.");
        				return false;
        			}
        		}
        	}
        	return true;
        };

        //저장 Validate 체크
        this.fnSaveValidateSub = function ()
        {
        	var amRefundSum = this.dsListSub.getCaseSum(this.ucFlag + " != 'D'", "AM_REFUND");
        	var amDeposit   = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition, "AM_DEPOSIT"),0); // 카드보조금

        	if(amRefundSum > amDeposit){
        		this.gfnAlert("환불금액의 합계는 카드보증금보다 클수없습니다.");
        		return false;
        	}
        	return true;
        };

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

        this.divSearch_cbtnDONG_SEARCH_onclick = function(obj,e)
        {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_ACNTUNIT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("사업지를 입력해주세요!", "fnVaidateCallback");
        		return;
        	}

        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.FLAG = "1";

        	this.gfnFormOpen("DRI", "DRI_DONGHOCONTRACT", "fnPopupCallback", param);
        };

        this.fnPopupCallback = function(svcID, val) {
        	if (!val) return;

        	var json = JSON.parse(val);
        	if (json.DONG.length > 0) {
        		this.dsSearch.setColumn(0, "NO_DONG" , json.DONG);
        		this.dsSearch.setColumn(0, "NO_FLOOR", json.FLOOR);
        		this.dsSearch.setColumn(0, "NO_HO"	 , json.HO);
        	}
        }

        //카드보증금정보 금액계산
        this.fnAmCalc = function ()
        {
        	var amRefundSum = this.dsListSub.getCaseSum(this.ucFlag + " != 'D'", "AM_REFUND");
        	var amDeposit   = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition, "AM_DEPOSIT"),0); // 카드보조금

        	this.dsList.set_enableevent(false);
        	this.dsList.setColumn(this.dsList.rowposition, "AM_REFUND", amRefundSum);			//카드보증금정보(환불금)
        	this.dsList.setColumn(this.dsList.rowposition, "AM_REMAIN", amDeposit-amRefundSum);	//카드보증금정보(잔여보증금)
        	this.dsList.set_enableevent(true);

        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cbtnDONG_SEARCH.addEventHandler("onclick",this.divSearch_cbtnDONG_SEARCH_onclick,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataBottom.form.btnSaveSub.addEventHandler("onclick",this.fnSaveSub,this);
            this.divData.form.divDataBottom.form.btnDeleteSub.addEventHandler("onclick",this.fnDelSub,this);
            this.divData.form.divDataBottom.form.btnAddSub.addEventHandler("onclick",this.fnAddSub,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DLC_CARDDEPOSIT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
