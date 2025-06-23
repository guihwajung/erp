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
            this.set_titletext("I/F 전표발행");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_IFSLIP_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHAPR_IFSLIP_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHAPR_IFSLIP_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHAPR_IFSLIP_DELETE</Col></Row><Row><Col id=\"TARGET\">issueSlip</Col><Col id=\"SP\">DHAPR_IFSLIP_DIV</Col></Row><Row><Col id=\"SP\">DHAPR_IFSLIP_CANCELSLIP</Col><Col id=\"TARGET\">cancelSlip</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SLIP1\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SLIP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DT_FROM\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo00","0.0","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta05","rdo00:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","sta05:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta06","ctclDT_TO:0.0","10.0","131.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("회계일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","sta06:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","ctclDT_TO:0.0","10.0","131.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("전표번호");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtNO_SLIP","sta02:0.0","10.0","190","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_maxlength("20");
            obj.set_inputtype("number");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","txtNO_SLIP:0.0","10.0","131.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("전표발행 여부");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboYN_SLIP","sta00:0.0","10.0","98","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_ccboYN_SLIP_innerdataset = new nexacro.NormalDataset("divSearch_form_ccboYN_SLIP_innerdataset", obj);
            divSearch_form_ccboYN_SLIP_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"datacolumn\">발행</Col><Col id=\"codecolumn\">Y</Col></Row><Row><Col id=\"datacolumn\">미발행</Col><Col id=\"codecolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_ccboYN_SLIP_innerdataset);
            obj.set_text("cbo00");
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
            obj = new BindItem("item2","divSearch.form.ctclDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.txtNO_SLIP","value","dsSearch","NO_SLIP1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccboYN_SLIP","value","dsSearch","YN_SLIP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DHA_IF.xfdl", function() {
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

        	this.ctclDT_FROM.setFocus();

        	var toDay = this.gfnGetDate();

        	//회계년월
        	this.ctclDT_FROM.set_value(toDay);	//현재일자
        	this.ctclDT_TO.set_value(toDay);	//현재일자

        	this.ccboYN_SLIP.set_value("N");	//기본 미발행

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
        	this.btnIssueSlip  = this.gfnFormButtonAdd("IssueSlip", "fnIssueSlip"); 	//전표발행 버튼
        	this.btnCancelSlip = this.gfnFormButtonAdd("CancelSlip", "fnCancelSlip"); 	//전표취소 버튼
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctclDT_FROM = this.divSearch.form.ctclDT_FROM;
        	this.ctclDT_TO = this.divSearch.form.ctclDT_TO;
        	this.txtNO_SLIP = this.divSearch.form.txtNO_SLIP;
        	this.ccboYN_SLIP = this.divSearch.form.ccboYN_SLIP;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHA_IF");
        	//this.dxGrid.set_selecttype("cell");

        	//그리드 코드파인더 이벤트
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged     = "fnGrid_AfterCDTextChanged";

        	this.dsList.addEventHandler("oncolumnchanged", this.dsList_ColumnChanged, this);

        	//검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_Valuechanged, this);
        	//불공제사유 활성 처리
        	var colTY_VATBGJE = this.dxGrid.getBindCellIndex("body", "TY_VATBGJE");
        	this.dxGrid.setCellProperty("body", colTY_VATBGJE, "edittype", "expr:YN_VATBGJE == 'Y' ? 'combo' : 'none'");

        	//법인카드번호 활성 처리
        	var colNO_CARD = this.dxGrid.getBindCellIndex("body", "NO_CARD");
        	this.dxGrid.setCellProperty("body", colNO_CARD, "expandshow", "expr:(CD_PROOF == '16' || CD_PROOF == '17' || CD_PROOF == '18' || CD_PROOF == '19') ? 'show' : 'hide'");
        	this.dxGrid.setCellProperty("body", colNO_CARD, "edittype", "expr:(CD_PROOF == '16' || CD_PROOF == '17' || CD_PROOF == '18' || CD_PROOF == '19') ? 'text' : 'none'");
        	//현금영수증 활성 처리
        	var colNO_CASH = this.dxGrid.getBindCellIndex("body", "NO_CASH");
        	this.dxGrid.setCellProperty("body", colNO_CASH, "edittype", "expr:CD_PROOF == '22' ? 'text' : 'none'");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("DT_FROM", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
        	this.dsSelect.addColumn("ID_INSERT", "string");
        	//this.dsSelect.addColumn("HEADER_ID", "string");
        	this.dsSelect.addColumn("NO_SLIP1", "string");
        	this.dsSelect.addColumn("YN_SLIP", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("HEADER_ID"		, "string");
        	this.dsInsert.addColumn("HEADER_SEQ"	, "string");
        	this.dsInsert.addColumn("DT_ACCOUNT"	, "string");
        	this.dsInsert.addColumn("CD_DEPT_BE"	, "string");
        	this.dsInsert.addColumn("CD_ACCOUNT"	, "string");
        	this.dsInsert.addColumn("AM_DR"			, "bigdecimal");
        	this.dsInsert.addColumn("AM_CR"			, "bigdecimal");
        	this.dsInsert.addColumn("DS_REM"		, "string");
        	this.dsInsert.addColumn("CD_VENDOR"		, "string");
        	this.dsInsert.addColumn("DS_VENDOR"		, "string");
        	this.dsInsert.addColumn("NO_REF"		, "string");
        	this.dsInsert.addColumn("CD_PROOF"		, "string");
        	this.dsInsert.addColumn("AM_SUPPLY"		, "bigdecimal");
        	this.dsInsert.addColumn("AM_VAT"		, "bigdecimal");
        	this.dsInsert.addColumn("TY_ISSUE"		, "string");
        	this.dsInsert.addColumn("TY_VATBGJE"	, "string");
        	this.dsInsert.addColumn("NO_CARD"		, "string");
        	this.dsInsert.addColumn("NO_CASH"		, "string");
        	this.dsInsert.addColumn("NO_SLIP1"       , "string");
        	this.dsInsert.addColumn("NO_SLIP2"       , "string");
        	this.dsInsert.addColumn("CD_SAUP"       , "string");
        	this.dsInsert.addColumn("ID_USER"       , "string");
        	this.dsInsert.addColumn("NO_SJC"		, "string");
        	this.dsInsert.addColumn("TY_VENDOR"     , "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("HEADER_ID"		, "string");
        	this.dsUpdate.addColumn("HEADER_SEQ"	, "string");
        	this.dsUpdate.addColumn("DT_ACCOUNT"	, "string");
        	this.dsUpdate.addColumn("CD_DEPT_BE"	, "string");
        	this.dsUpdate.addColumn("CD_ACCOUNT"	, "string");
        	this.dsUpdate.addColumn("AM_DR"			, "bigdecimal");
        	this.dsUpdate.addColumn("AM_CR"			, "bigdecimal");
        	this.dsUpdate.addColumn("DS_REM"		, "string");
        	this.dsUpdate.addColumn("CD_VENDOR"		, "string");
        	this.dsUpdate.addColumn("NO_REF"		, "string");
        	this.dsUpdate.addColumn("CD_PROOF"		, "string");
        	this.dsUpdate.addColumn("AM_SUPPLY"		, "bigdecimal");
        	this.dsUpdate.addColumn("AM_VAT"		, "bigdecimal");
        	this.dsUpdate.addColumn("TY_ISSUE"		, "string");
        	this.dsUpdate.addColumn("TY_VATBGJE"	, "string");
        	this.dsUpdate.addColumn("NO_CARD"		, "string");
        	this.dsUpdate.addColumn("NO_CASH"		, "string");
        	this.dsUpdate.addColumn("TY_FORM"       , "string");
        	this.dsUpdate.addColumn("NO_SJC"		, "string");
        	this.dsUpdate.addColumn("TY_VENDOR"     , "string");
        	this.dsUpdate.addColumn("DS_VENDOR"     , "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("HEADER_ID"		, "string");
        	this.dsDelete.addColumn("HEADER_SEQ"	, "string");

        	this.dsIssueSlip = new Dataset();
        	this.dsIssueSlip.addColumn("CD_CORP"    , "string");
        	this.dsIssueSlip.addColumn("CD_SITE_BH" , "string");
        	this.dsIssueSlip.addColumn("ID_INSERT"  , "string");
        	this.dsIssueSlip.addColumn("ID_USER"    , "string");
        	this.dsIssueSlip.addColumn("DT_FROM"	, "string");
        	this.dsIssueSlip.addColumn("DT_TO"		, "string");
        	this.dsIssueSlip.addColumn("TY_FORM"    , "string");
        	this.dsIssueSlip.addColumn("NO_SLIP1"   , "string");

        	this.dsCancelSlip = new Dataset();
        	this.dsCancelSlip.addColumn("CD_TRADE"	, "string");

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

        	this.dsSelect.setColumn(0, "CD_CORP"	, this.AuthClient.CD_CORP);
        	this.dsSelect.setColumn(0, "DT_FROM"	, this.ctclDT_FROM.value);
        	this.dsSelect.setColumn(0, "DT_TO"	    , this.ctclDT_TO.value);
        	this.dsSelect.setColumn(0, "ID_INSERT"	, this.AuthClient.ID_USER);
        	this.dsSelect.setColumn(0, "NO_SLIP1"	, this.txtNO_SLIP.value);
        	this.dsSelect.setColumn(0, "YN_SLIP"	, this.ccboYN_SLIP.value);

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

        	if(this.dsList.rowcount == 0){
        		return;
        	}


        	var nRow = this.gfnGridAdd(this.dxGrid, "bottom", true);

        	var preRow = nRow-1;

        	this.dsList.set_enableevent(false);

        	var headerSeq = nexacro.toNumber(this.dsList.getColumn(preRow, "HEADER_SEQ"), 0) + 1;
        	this.dsList.setColumn(nRow, "HEADER_ID"  , this.dsList.getColumn(preRow, "HEADER_ID"));
        	this.dsList.setColumn(nRow, "HEADER_SEQ" , headerSeq);
        	this.dsList.setColumn(nRow, "CD_SAUP"	 , this.dsList.getColumn(preRow, "CD_SAUP"));	//상단에 사업코드

        	this.dsList.set_enableevent(true);
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

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "HEADER_ID"  			, this.dsList.getColumn(i, "HEADER_ID"));		//거래번호
        				this.dsInsert.setColumn(nrow, "HEADER_SEQ"  		, this.dsList.getColumn(i, "HEADER_SEQ"));		//거래번호 순번
        				this.dsInsert.setColumn(nrow, "DT_ACCOUNT"  		, this.dsList.getColumn(i, "DT_ACCOUNT"));		//회계일자
        				this.dsInsert.setColumn(nrow, "CD_DEPT_BE"  		, this.dsList.getColumn(i, "CD_DEPT_BE"));		//귀속부서
        				this.dsInsert.setColumn(nrow, "CD_ACCOUNT"   		, this.dsList.getColumn(i, "CD_ACCOUNT"));		//계정코드
        				this.dsInsert.setColumn(nrow, "AM_DR"   			, this.dsList.getColumn(i, "AM_DR"));			//차변
        				this.dsInsert.setColumn(nrow, "AM_CR"   			, this.dsList.getColumn(i, "AM_CR"));			//대변
        				this.dsInsert.setColumn(nrow, "DS_REM"   			, this.dsList.getColumn(i, "DS_REM"));			//적요
        				this.dsInsert.setColumn(nrow, "CD_VENDOR"   		, this.dsList.getColumn(i, "CD_VENDOR"));			//거래처코드(사업자번호)
        				this.dsInsert.setColumn(nrow, "DS_VENDOR"   		, this.dsList.getColumn(i, "DS_VENDOR"));		//거래처명
        				this.dsInsert.setColumn(nrow, "NO_REF"   			, this.dsList.getColumn(i, "NO_REF"));			//계좌번호
        				this.dsInsert.setColumn(nrow, "CD_PROOF"   			, this.dsList.getColumn(i, "CD_PROOF"));		//세금코드
        				this.dsInsert.setColumn(nrow, "AM_SUPPLY"   		, this.dsList.getColumn(i, "AM_SUPPLY"));		//공급가
        				this.dsInsert.setColumn(nrow, "AM_VAT"   			, this.dsList.getColumn(i, "AM_VAT"));			//부가세
        				this.dsInsert.setColumn(nrow, "TY_ISSUE"   			, this.dsList.getColumn(i, "TY_ISSUE"));		//전자여부
        				this.dsInsert.setColumn(nrow, "TY_VATBGJE"   		, this.dsList.getColumn(i, "TY_VATBGJE"));		//매입세액볼공제사유
        				this.dsInsert.setColumn(nrow, "NO_CARD"   			, this.dsList.getColumn(i, "NO_CARD"));			//카드번호(법인카드)
        				this.dsInsert.setColumn(nrow, "NO_CASH"   			, this.dsList.getColumn(i, "NO_CASH"));			//현금영수증
        				this.dsInsert.setColumn(nrow, "NO_SLIP1"   			, this.dsList.getColumn(i, "NO_SLIP1"));		//IF전표번호
        				this.dsInsert.setColumn(nrow, "NO_SLIP2"   			, this.dsList.getColumn(i, "NO_SLIP2"));		//IF전표번호
        				this.dsInsert.setColumn(nrow, "CD_SAUP"   			, this.dsList.getColumn(i, "CD_SAUP"));			//사업번호
        				this.dsInsert.setColumn(nrow, "ID_USER"  		    , this.AuthClient.ID_USER);						//사용자 아이디
        				this.dsInsert.setColumn(nrow, "NO_SJC"   			, this.dsList.getColumn(i, "NO_SJC"));			//사업자번호
        				this.dsInsert.setColumn(nrow, "TY_VENDOR"   		, this.dsList.getColumn(i, "TY_VENDOR"));		//거래처타입
        				break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "HEADER_ID"  			, this.dsList.getColumn(i, "HEADER_ID"));		//거래번호
        				this.dsUpdate.setColumn(nrow, "HEADER_SEQ"  		, this.dsList.getColumn(i, "HEADER_SEQ"));		//거래번호 순번
        				this.dsUpdate.setColumn(nrow, "DT_ACCOUNT"  		, this.dsList.getColumn(i, "DT_ACCOUNT"));		//회계일자
        				this.dsUpdate.setColumn(nrow, "CD_DEPT_BE"  		, this.dsList.getColumn(i, "CD_DEPT_BE"));		//귀속부서
        				this.dsUpdate.setColumn(nrow, "CD_ACCOUNT"   		, this.dsList.getColumn(i, "CD_ACCOUNT"));		//계정코드
        				this.dsUpdate.setColumn(nrow, "AM_DR"   			, this.dsList.getColumn(i, "AM_DR"));			//차변
        				this.dsUpdate.setColumn(nrow, "AM_CR"   			, this.dsList.getColumn(i, "AM_CR"));			//대변
        				this.dsUpdate.setColumn(nrow, "DS_REM"   			, this.dsList.getColumn(i, "DS_REM"));			//적요
        				this.dsUpdate.setColumn(nrow, "CD_VENDOR"   		, this.dsList.getColumn(i, "CD_VENDOR"));			//거래처코드(사업자번호)
        				this.dsUpdate.setColumn(nrow, "NO_REF"   			, this.dsList.getColumn(i, "NO_REF"));			//계좌번호
        				this.dsUpdate.setColumn(nrow, "CD_PROOF"   			, this.dsList.getColumn(i, "CD_PROOF"));		//세금코드
        				this.dsUpdate.setColumn(nrow, "AM_SUPPLY"   		, this.dsList.getColumn(i, "AM_SUPPLY"));		//공급가
        				this.dsUpdate.setColumn(nrow, "AM_VAT"   			, this.dsList.getColumn(i, "AM_VAT"));			//부가세
        				this.dsUpdate.setColumn(nrow, "TY_ISSUE"   			, this.dsList.getColumn(i, "TY_ISSUE"));		//전자여부
        				this.dsUpdate.setColumn(nrow, "TY_VATBGJE"   		, this.dsList.getColumn(i, "TY_VATBGJE"));		//매입세액볼공제사유
        				this.dsUpdate.setColumn(nrow, "NO_CARD"   			, this.dsList.getColumn(i, "NO_CARD"));			//카드번호(법인카드)
        				this.dsUpdate.setColumn(nrow, "NO_CASH"   			, this.dsList.getColumn(i, "NO_CASH"));			//현금영수증
        				this.dsUpdate.setColumn(nrow, "TY_FORM"   			, "1");			//폼아이디(일반)
        				this.dsUpdate.setColumn(nrow, "NO_SJC"   			, this.dsList.getColumn(i, "NO_SJC"));			//사업자번호
        				this.dsUpdate.setColumn(nrow, "TY_VENDOR"   		, this.dsList.getColumn(i, "TY_VENDOR"));		//거래처타입
        				this.dsUpdate.setColumn(nrow, "DS_VENDOR"   		, this.dsList.getColumn(i, "DS_VENDOR"));		//거래처명
        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "HEADER_ID"  			, this.dsList.getColumn(i, "HEADER_ID"));		//거래번호
        				this.dsDelete.setColumn(nrow, "HEADER_SEQ"  		, this.dsList.getColumn(i, "HEADER_SEQ"));		//거래번호 순번
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
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
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

        	if(this.gfnIsNull(this.ctclDT_FROM.value)){
        		this.gfnAlert("회계일자(시작일)은 필수입니다.");
        		this.ctclDT_FROM.setFocus();
        		validate = false;
        	}

        	if(this.gfnIsNull(this.ctclDT_TO.value)){
        		this.gfnAlert("회계일자(종료일)은 필수입니다.");
        		this.ctclDT_TO.setFocus();
        		validate = false;
        	}

        	if(this.gfnGetDiffDate(this.ctclDT_FROM.value, this.ctclDT_TO.value) <= -1){
        		this.gfnAlert("회계일자의 시작일은 종료일보다 작아야 합니다.");
        		this.ctclDT_FROM.setFocus();
        		validate = false;
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
        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "issueSlip") {
        		if (errorCode == 0) {
        			this.gfnAlert("전표가 발행 되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "cancelSlip") {
        		if (errorCode == 0) {
        			this.gfnAlert("전표가 취소 되었습니다.");
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


        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        // 	switch(id) {
        // 		case "ccfCD_CORP":	//법인코드
        // 			this.ccfID_USER.form.fnCodeFindClear();
        // 		break;
        // 	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	switch(id) {
        		case "DHX_CFACCOUNT":	//계정코드
        			dsUserParam.setColumn(nrow, "YN_SLIP", "Y");
        		break;
        		case "DHX_CFVENDOR":	//거래처코드
        			dsUserParam.setColumn(nrow, "TY_VENDOR" , "");		//거래처구분
        			dsUserParam.setColumn(nrow, "YN_RELATED", "");		//관계사여부
        		break;
        		case "DHX_CFACNTUNIT":	//귀속부서
        			dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");		//상위부서
        			dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "");				//전표발행여부
        			//dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);			//법인코드
        			dsUserParam.setColumn(nrow, "CD_CORP"		, this.AuthClient.CD_CORP);			//법인코드
        			dsUserParam.setColumn(nrow, "YN_USE"		, "Y");				//사용여부
        			dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");				//현장/본사여부
        		break;
        		case "DHX_COMMON_CODEFIND_SELECT" :
        			var amdr = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition, "AM_DR"),0);	//차변금액
        			var amCr = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition, "AM_CR"),0);	//대변금액

        			var cdType = "V10";
        			if(amdr == 0 && amCr > 0){
        				cdType = "V11";
        			}else if(amdr > 0 && amCr == 0){
        				cdType = "V10";
        			}

        			dsUserParam.setColumn(nrow, "DS_ETC1" , "XXX");
        			dsUserParam.setColumn(nrow, "CD_SYSTEM", "DH");
        			dsUserParam.setColumn(nrow, "CD_TYPE"  , cdType);

        		break;
        		case "DFX_CFCARD_CODEFIND" :	//신용카드
        			dsUserParam.setColumn(nrow, "CD_DEPT"     , "");
        			dsUserParam.setColumn(nrow, "CD_SUABUN"   , "");
        			//dsUserParam.setColumn(nrow, "CD_CORP" 	  , cdCorp);
        			dsUserParam.setColumn(nrow, "CD_CORP" 	  , this.AuthClient.CD_CORP);
        		break;

        	}

        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	var rowPos = this.dsList.rowposition;

        	switch(id) {
        		case "DHX_CFACCOUNT":	//계정코드
        			if (arrData.length > 0) {
        				this.dsList.setColumn(rowPos, "CD_PROOF"   , "");
        				this.dsList.setColumn(rowPos, "YN_VATBGJE" , "");
        				this.dsList.setColumn(rowPos, "NO_CARD"    , "");
        				this.dsList.setColumn(rowPos, "DS_CARD"    , "");
        				this.dsList.setColumn(rowPos, "NO_CASH"    , "");
        				this.dsList.setColumn(rowPos, "TY_VATBGJE" , "");
        				this.dsList.setColumn(rowPos, "TY_ISSUE"   , "");
        				this.dsList.setColumn(rowPos, "YN_VAT_ACNT", this.gfnNvl(arrData[0]["YN_VAT_ACNT"],"N"));
        			}
        		break;
        		case "DHX_COMMON_CODEFIND_SELECT":	//증빙구분
         			if (arrData.length > 0) {
        				this.dsList.setColumn(rowPos, "YN_VATBGJE", (arrData[0]["DS_ETC3"] == "Y" ? "Y" : "N"));
        				this.dsList.setColumn(rowPos, "NO_CARD"   , "");
        				this.dsList.setColumn(rowPos, "DS_CARD"   , "");
        				this.dsList.setColumn(rowPos, "NO_CASH"   , "");
        				this.dsList.setColumn(rowPos, "TY_VATBGJE", "");
        			}
        		break;
        		case "DHX_CFVENDOR":	//거래처코드
        			if (arrData.length > 0) {
        				this.dsList.setColumn(rowPos, "NO_SJC", this.gfnNvl(arrData[0]["NO_SJC"],""));
        			}
        		break;
         	}
        };

        //그리드 값변경 이벤트
        this.dsList_ColumnChanged = function(obj, e)
        {
        	if(e.columnid == "AM_SUPPLY"){	//공급가
        		var am_supply = nexacro.round(nexacro.toNumber(e.newvalue,0) * 0.1);

        		obj.setColumn(e.row, "AM_VAT", am_supply);
        	}
        	if(e.columnid == "AM_DR" || e.columnid == "AM_CR"){	//차변 대변 금액 초기화
        		obj.setColumn(e.row, (e.columnid == "AM_DR" ? "AM_CR" : "AM_DR"), "");
        	}
        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        //검색조건 변경 이벤트
        this.dsSearch_Valuechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        //전표발행 처리
        this.fnIssueSlip = function (obj,e)
        {
        	if(this.gfnIsNull(this.ctclDT_FROM.value)){
        		this.gfnAlert("회계일자(시작일)은 필수입니다.");
        		this.ctclDT_FROM.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.ctclDT_TO.value)){
        		this.gfnAlert("회계일자(종료일)은 필수입니다.");
        		this.ctclDT_TO.setFocus();
        		return;
        	}

        	if(this.gfnGetDiffDate(this.ctclDT_FROM.value, this.ctclDT_TO.value) <= -1){
        		this.gfnAlert("회계일자의 시작일은 종료일보다 작아야 합니다.");
        		this.ctclDT_FROM.setFocus();
        		return;
        	}

        	this.gfnConfirm("전표발행 하시겠습니까?", "fnIssueSlip_callback");

        };

        this.fnIssueSlip_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsIssueSlip.clearData();
        		var nRow = this.dsIssueSlip.addRow();

        		//처리할 데이터 담기
        		this.dsIssueSlip.setColumn(nRow, "CD_CORP"		, this.AuthClient.CD_CORP);
        		this.dsIssueSlip.setColumn(nRow, "CD_SITE_BH" 	, this.AuthClient.CD_DEPT);
        		this.dsIssueSlip.setColumn(nRow, "ID_INSERT" 	, this.AuthClient.ID_USER);
        		this.dsIssueSlip.setColumn(nRow, "ID_USER" 		, this.AuthClient.ID_USER);
        		this.dsIssueSlip.setColumn(nRow, "DT_FROM"		, this.ctclDT_FROM.value);
        		this.dsIssueSlip.setColumn(nRow, "DT_TO"	    , this.ctclDT_TO.value);
        		this.dsIssueSlip.setColumn(nRow, "NO_SLIP1"		, this.txtNO_SLIP.value);
        		this.dsIssueSlip.setColumn(nRow, "TY_FORM"		, "1");

        		var strSvcId    = "issueSlip";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "issueSlip=dsIssueSlip";
        		var outData     = "";
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
        };


        //전표취소 처리
        this.fnCancelSlip = function (obj,e)
        {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	trace("CD_TRADE >>> "+this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"));

        	if (this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"))) {
        		this.gfnAlert("전표번호는 필수입니다.");
        		return;
        	}

        	this.gfnConfirm("전표를 취소하시겠습니까?", "fnCancelSlip_callback");

        };

        this.fnCancelSlip_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsCancelSlip.clearData();
        		var nRow = this.dsCancelSlip.addRow();

        		//처리할 데이터 담기
        		this.dsCancelSlip.setColumn(nRow, "CD_TRADE", this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"));

        		var strSvcId    = "cancelSlip";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "cancelSlip=dsCancelSlip";
        		var outData     = "";
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
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };
        this.loadIncludeScript("DHA_IF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
