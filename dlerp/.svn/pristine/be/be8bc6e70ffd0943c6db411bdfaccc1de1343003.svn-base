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
            this.set_titletext("매출부가세엑셀업로드");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_HOMETAX_EXCEL_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHVPR_HOMETAX_EXCEL_INSERT</Col></Row><Row><Col id=\"TARGET\">send</Col><Col id=\"SP\">DHVPR_HOMETAX_EXCEL_SEND</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YR_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SEND\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BILL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YR_TAX\"/><Col id=\"NO_TAX\"/><Col id=\"YN_SEND\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Edit("edtYM_END","0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta04","edtYM_END:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("계산서구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staWAVE","sta04:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_BILL","sta04:0.0","10.0","85","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            var divSearch_form_ccboTY_BILL_innerdataset = new nexacro.NormalDataset("divSearch_form_ccboTY_BILL_innerdataset", obj);
            divSearch_form_ccboTY_BILL_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">B</Col><Col id=\"datacolumn\">계산서</Col></Row><Row><Col id=\"codecolumn\">V</Col><Col id=\"datacolumn\">세금계산서</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_ccboTY_BILL_innerdataset);
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_MAGAM","ccboTY_BILL:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("작성년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYEAR","staYM_MAGAM:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_enableevent("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_TAX","ctclYEAR:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("작성기수");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cedtNO_TAX","staNO_TAX:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cedtNO_TAX_innerdataset = new nexacro.NormalDataset("divSearch_form_cedtNO_TAX_innerdataset", obj);
            divSearch_form_cedtNO_TAX_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1기예정</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">1기확정</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">2기예정</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">2기확정</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cedtNO_TAX_innerdataset);
            obj.set_text("1기예정");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtYM_START","cedtNO_TAX:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ccboTY_BILL:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("전송여부");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboYN_SEND","sta00:0.0","10.0","75","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            var divSearch_form_ccboYN_SEND_innerdataset = new nexacro.NormalDataset("divSearch_form_ccboYN_SEND_innerdataset", obj);
            divSearch_form_ccboYN_SEND_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">전송</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미전송</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_ccboYN_SEND_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta08","ccboYN_SEND:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","sta08:0.0","10.0","239","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("12");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
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
            obj = new BindItem("item4","divSearch.form.ccboTY_BILL","value","dsSearch","TY_BILL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.cedtNO_TAX","value","dsSearch","NO_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclYEAR.form.TextBox","value","dsSearch","YR_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccboYN_SEND","value","dsSearch","YN_SEND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
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
        this.registerScript("DHV_HOMETAX_EXCEL.xfdl", function() {
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

        	this.ctclYEAR.setFocus();

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
        	this.btnExcelUpload = this.gfnFormButtonAdd("ExcelUpload", "fnExcelUpload"); 	//엑셀업로드 버튼
        	this.btnDataSend    = this.gfnFormButtonAdd("DataSend", "fnDataSend"); 			//전송 버튼

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctclYEAR = this.divSearch.form.ctclYEAR;
        	this.cedtNO_TAX = this.divSearch.form.cedtNO_TAX;
        	this.edtYM_START = this.divSearch.form.edtYM_START;
        	this.edtYM_END = this.divSearch.form.edtYM_END;
        	this.ccboYN_SEND = this.divSearch.form.ccboYN_SEND;
        	this.ccboTY_BILL = this.divSearch.form.ccboTY_BILL;
        	this.dxGrid = this.divData.form.objGrid;
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;	// 법인코드

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHV_HOMETAX_EXCEL");

        	//검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_Valuechanged, this);

        	var toDay = this.gfnGetDate();
        	//검색조건 기본일자 셋팅
        	this.ctclYEAR.form.TextBox.set_value(toDay.substr(0,4));	//현재년

        	//작성기수 1기예정
        	this.cedtNO_TAX.set_value("1");

        	this.ccboTY_BILL.set_index(0);
        	//전송구분 미전송
        	this.ccboYN_SEND.set_value("N");

        	// 법인코드
        	this.ccfCD_CORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YR_TAX", "string");
        	this.dsSelect.addColumn("YM_START", "string");
        	this.dsSelect.addColumn("YM_END", "string");
        	this.dsSelect.addColumn("YN_SEND", "string");
        	this.dsSelect.addColumn("TY_BILL", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("TY_BILL", "string");				//계산서구분(1)
        	this.dsInsert.addColumn("ISSUE_DATE", "string");			//작성일자(8)
        	this.dsInsert.addColumn("ISSUE_ID", "string");				//승인번호(30)
        	this.dsInsert.addColumn("ISSUE_DT", "string");				//발급일자(8)
        	this.dsInsert.addColumn("TRANS_DATE", "string");			//전송일자(8)
        	this.dsInsert.addColumn("SU_ID", "string");					//공급자사업자등록번호(16)
        	this.dsInsert.addColumn("SU_NAME", "string");				//공급자사업자등록번호(100)
        	this.dsInsert.addColumn("SU_REPRES", "string");				//공급자 대표자명(80)
        	this.dsInsert.addColumn("SU_ADDR", "string");				//공급자 주소(160)
        	this.dsInsert.addColumn("IP_ID", "string");					//공급받는자 사업자등록번호(16)
        	this.dsInsert.addColumn("IP_NAME", "string");				//공급받는자 상호(100)
        	this.dsInsert.addColumn("IP_REPRES", "string");				//공급받는자 대표자명(80)
        	this.dsInsert.addColumn("IP_ADDR", "string");				//공급받는자 주소(160)
        	this.dsInsert.addColumn("GRANDTOTAL", "BIGDECIMAL");		//합계금액(22)
        	this.dsInsert.addColumn("CHARGETOTAL", "BIGDECIMAL");		//공급가액(22)
        	this.dsInsert.addColumn("TAXTOTAL", "BIGDECIMAL");			//세액(22)
        	this.dsInsert.addColumn("DS_PROOF", "string");				//전자세금계산서분류(50)
        	this.dsInsert.addColumn("TY_PROOF", "string");				//전자세금계산서종류(30)
        	this.dsInsert.addColumn("TY_PROOF2", "string");				//발급유형(30)
        	this.dsInsert.addColumn("DS_REM", "string");				//비고(100)
        	this.dsInsert.addColumn("PURP_CODE", "string");				//영수/청구구분(30)
        	this.dsInsert.addColumn("SU_EMAIL", "string");				//공급자 이메일(70)
        	this.dsInsert.addColumn("IP_EMAIL", "string");				//공급받는자 이메일1(70)
        	this.dsInsert.addColumn("IP_EMAIL2", "string");				//공급받는자 이메일2(70)
        	this.dsInsert.addColumn("GOOD_DATE", "string");				//품목일자(8)
        	this.dsInsert.addColumn("GOOD_NAME", "string");				//품목명(150)
        	this.dsInsert.addColumn("GOOD_INFO", "string");				//품목규격(30)
        	this.dsInsert.addColumn("GOOD_QUAN", "BIGDECIMAL");			//품목수량(22)
        	this.dsInsert.addColumn("GOOD_UNIAMOUNT", "BIGDECIMAL");	//품목단가(22)
        	this.dsInsert.addColumn("GOOD_INVAMOUNT", "BIGDECIMAL");	//품목공급가액(22)
        	this.dsInsert.addColumn("GOOD_TAXAMOUNT", "BIGDECIMAL");	//품목세액(22)
        	this.dsInsert.addColumn("GOOD_DESC", "string");				//품목비고(100)
        	this.dsInsert.addColumn("ID_USER", "string");				//사용자아이디(20)

        	//전송용 데이터셋
        	this.dsSend = new Dataset();
        	this.dsSend.addColumn("YR_TAX"    , "string");
        	this.dsSend.addColumn("YM_START"  , "string");
        	this.dsSend.addColumn("YM_END"    , "string");
        	this.dsSend.addColumn("ID_USER"   , "string");

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

        	this.dsSelect.setColumn(0, "YR_TAX"		, this.ctclYEAR.form.TextBox.value);
        	this.dsSelect.setColumn(0, "YM_START"	, (this.edtYM_START.value).replace("-",""));
        	this.dsSelect.setColumn(0, "YM_END"		, (this.edtYM_END.value).replace("-",""));
        	this.dsSelect.setColumn(0, "YN_SEND"	, this.ccboYN_SEND.value);
        	this.dsSelect.setColumn(0, "TY_BILL"	, this.ccboTY_BILL.value);
        	this.dsSelect.setColumn(0, "CD_CORP"	, this.ccfCD_CORP.form.CDTextBox.value);

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

        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {

        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);

        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "TY_BILL"		    , this.dsList.getColumn(i, "TY_BILL"));			//계산서유형
        				this.dsInsert.setColumn(nrow, "ISSUE_DATE"		, this.dsList.getColumn(i, "ISSUE_DATE"));		//작성일자
        				this.dsInsert.setColumn(nrow, "ISSUE_ID"	    , this.dsList.getColumn(i, "ISSUE_ID"));		//승인번호
        				this.dsInsert.setColumn(nrow, "ISSUE_DT"		, this.dsList.getColumn(i, "ISSUE_DT"));		//발급일자
        				this.dsInsert.setColumn(nrow, "TRANS_DATE"	    , this.dsList.getColumn(i, "TRANS_DATE"));		//전송일자
        				this.dsInsert.setColumn(nrow, "SU_ID"			, this.dsList.getColumn(i, "SU_ID"));			//공급자 사업자등록번호
        				this.dsInsert.setColumn(nrow, "SU_NAME"			, this.dsList.getColumn(i, "SU_NAME"));			//공급자 상호
        				this.dsInsert.setColumn(nrow, "SU_REPRES"		, this.dsList.getColumn(i, "SU_REPRES"));		//공급자 대표자명
        				this.dsInsert.setColumn(nrow, "SU_ADDR"			, this.dsList.getColumn(i, "SU_ADDR"));			//공급자 주소
        				this.dsInsert.setColumn(nrow, "IP_ID"			, this.dsList.getColumn(i, "IP_ID"));			//공급받는자 사업자등록번호
        				this.dsInsert.setColumn(nrow, "IP_NAME"			, this.dsList.getColumn(i, "IP_NAME"));			//공급받는자 상호
        				this.dsInsert.setColumn(nrow, "IP_REPRES"		, this.dsList.getColumn(i, "IP_REPRES"));		//공급받는자 대표자명
        				this.dsInsert.setColumn(nrow, "IP_ADDR"			, this.dsList.getColumn(i, "IP_ADDR"));			//공급받는자 주소
        				this.dsInsert.setColumn(nrow, "GRANDTOTAL"		, this.dsList.getColumn(i, "GRANDTOTAL"));		//합계금액
        				this.dsInsert.setColumn(nrow, "CHARGETOTAL"		, this.dsList.getColumn(i, "CHARGETOTAL"));		//공급가액
        				this.dsInsert.setColumn(nrow, "TAXTOTAL"		, this.dsList.getColumn(i, "TAXTOTAL"));		//세액
        				this.dsInsert.setColumn(nrow, "DS_PROOF"		, this.dsList.getColumn(i, "DS_PROOF"));		//전자세금계산서분류
        				this.dsInsert.setColumn(nrow, "TY_PROOF"		, this.dsList.getColumn(i, "TY_PROOF"));		//전자세금계산서종류
        				this.dsInsert.setColumn(nrow, "TY_PROOF2"		, this.dsList.getColumn(i, "TY_PROOF2"));		//발급유형
        				this.dsInsert.setColumn(nrow, "DS_REM"			, this.dsList.getColumn(i, "DS_REM"));			//비고
        				this.dsInsert.setColumn(nrow, "PURP_CODE"		, this.dsList.getColumn(i, "PURP_CODE"));		//영수/청구 구분
        				this.dsInsert.setColumn(nrow, "SU_EMAIL"		, this.dsList.getColumn(i, "SU_EMAIL"));		//공급자 이메일
        				this.dsInsert.setColumn(nrow, "IP_EMAIL"		, this.dsList.getColumn(i, "IP_EMAIL"));		//공급받는자 이메일1
        				this.dsInsert.setColumn(nrow, "IP_EMAIL2"		, this.dsList.getColumn(i, "IP_EMAIL2"));		//공급받는자 이메일2
        				this.dsInsert.setColumn(nrow, "GOOD_DATE"		, this.dsList.getColumn(i, "GOOD_DATE"));		//품목일자
        				this.dsInsert.setColumn(nrow, "GOOD_NAME"		, this.dsList.getColumn(i, "GOOD_NAME"));		//품목명
        				this.dsInsert.setColumn(nrow, "GOOD_INFO"		, this.dsList.getColumn(i, "GOOD_INFO"));		//품목규격
        				this.dsInsert.setColumn(nrow, "GOOD_QUAN"		, this.dsList.getColumn(i, "GOOD_QUAN"));		//품목수량
        				this.dsInsert.setColumn(nrow, "GOOD_UNIAMOUNT"	, this.dsList.getColumn(i, "GOOD_UNIAMOUNT"));	//품목단가
        				this.dsInsert.setColumn(nrow, "GOOD_INVAMOUNT"	, this.dsList.getColumn(i, "GOOD_INVAMOUNT"));	//품목공급가액
        				this.dsInsert.setColumn(nrow, "GOOD_TAXAMOUNT"	, this.dsList.getColumn(i, "GOOD_TAXAMOUNT"));	//품목세액
        				this.dsInsert.setColumn(nrow, "GOOD_DESC"		, this.dsList.getColumn(i, "GOOD_DESC"));		//품목비고
        				this.dsInsert.setColumn(nrow, "ID_USER"  		, this.AuthClient.ID_USER);						//사용자 아이디
        				break;

        		}
        	}

        	if (this.dsInsert.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert";
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
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        // 법인코드
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	switch(id) {

        	case "ccfCD_CORP": // 법인코드
        		this.gfnGridClear(this.dxGrid);
        		break;
        	default:
        	}
        	return true;

        }


        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {

        	if (this.gfnIsNull(this.ctclYEAR.form.TextBox.value)) {
        		this.gfnAlert("작성년도는 필수입니다.");
        		this.ctclYEAR.form.TextBox.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.cedtNO_TAX.value)) {
        		this.gfnAlert("작성기수는 필수입니다.");
        		this.cedtNO_TAX.setFocus();
        		return false;
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
        	switch(svcID) {
        		case "select":
        			this.gfnGridAfterSelect(this.dxGrid);


        		break;
        		case "save":
        			if (errorCode == 0) {
        				this.FormBtns.Select.click();
        			} else {
        				this.gfnAlert(errorMsg);
        			}
        		break;
        		case "send":
        			if (errorCode == 0) {
        				this.gfnAlert("전송 되었습니다.");
        				this.FormBtns.Select.click();
        			} else {
        				this.gfnAlert(errorMsg);
        			}
        		break;
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

        //검색조건 변경 이벤트
        this.dsSearch_Valuechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {

        		switch(e.columnid) {
        			case "YR_TAX" :
        				this.setTaxDt(e.newvalue, this.cedtNO_TAX.value);
        				break;
        			case "NO_TAX" :
        				this.setTaxDt(this.ctclYEAR.form.TextBox.value, e.newvalue);
        				break;
        		}

        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.setTaxDt = function(ymMagam, noTax) {

        	var dtFrom;
        	var dtTo;

        	trace("들어옴222!!!");

        	if(this.gfnIsNull(ymMagam) || this.gfnIsNull(noTax)) {

        		dtFrom = "";
        		dtTo = "";

        	} else {

        		switch(noTax) {
        			case "1" :
        				dtFrom = ymMagam + "-01";
        				dtTo = ymMagam + "-03";
        				break;
        			case "2" :
        				dtFrom = ymMagam + "-04";
        				dtTo = ymMagam + "-06";
        				break;
        			case "3" :
        				dtFrom = ymMagam + "-07";
        				dtTo = ymMagam + "-09";
        				break;
        			case "4" :
        				dtFrom = ymMagam + "-10";
        				dtTo = ymMagam + "-12";
        				break;
        			default :
        				dtFrom = "";
        				dtTo = "";
        				break;
        		}
        	}

        	this.edtYM_START.set_value(dtFrom);
        	this.edtYM_END.set_value(dtTo);

        }

        //엑셀업로드 처리
        this.fnExcelUpload = function (obj,e)
        {
        	if(!this.fnSelectValidate()) return;

        	this.gfnExcelImport("dsList", "", "A7", "fnExcelImportCallback", "import", this);

        };


        /*
         *	엑셀업로드 Callback
         */
        this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet) {

        	// 엑셀 양식과 그리드 컬럼이 그대로 일치 하는경우 아래와 같이 처리.
        	// 아닌경우는 이부분 주석처리
        	if (dsOut.rowcount == 0)  {
        		this.gfnAlert("엑셀파일에 내용이 없습니다.");
        		return false;
        	}

        	this.dsList.clearData();

        	for (var i=0; i< this.dsList.getColCount(); i++)
        	{
        		sColumnId = "Column"+i;
        		var sColumnNm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, i);
        		if (sColumnNm != "" && sColumnId != sColumnNm)
        		{
        			//dsOut.updateColID(sColumnId, sColumnNm);
        		}
        	}


        	// 양식이 일치하고 엑셀내역을 기존데이터에 Insert하지 않고
        	// 엑셀내역 그대로 그리드 반영할 시 copyData
        	//this.dsList.copyData(dsOut);

        	trace("getColCount :: "+dsOut.getColCount());

        	var oDsColCnt = dsOut.getColCount();
        	this.dsList.set_enableevent(false);
        	for (var i=0; i< dsOut.rowcount; i++) {
        		var nrow = this.dsList.addRow();
        		this.dsList.setColumn(nrow, this.ucFlag		, "I");
        		this.dsList.setColumn(nrow, "ISSUE_DATE"	, this.gfnRemoveSpecialChar(this.gfnNvl(dsOut.getColumn(i, "Column0"),"")));	//작성일자
        		this.dsList.setColumn(nrow, "ISSUE_ID"	    , this.gfnRemoveSpecialChar(this.gfnNvl(dsOut.getColumn(i, "Column1"),"")));	//승인번호
        		this.dsList.setColumn(nrow, "ISSUE_DT"		, this.gfnRemoveSpecialChar(this.gfnNvl(dsOut.getColumn(i, "Column2"),"")));	//발급일자
        		this.dsList.setColumn(nrow, "TRANS_DATE"	, this.gfnRemoveSpecialChar(this.gfnNvl(dsOut.getColumn(i, "Column3"),"")));	//전송일자
        		this.dsList.setColumn(nrow, "SU_ID"			, this.gfnRemoveSpecialChar(this.gfnNvl(dsOut.getColumn(i, "Column4"),"")));	//공급자 사업자등록번호
        		this.dsList.setColumn(nrow, "SU_NAME"		, dsOut.getColumn(i, "Column6"));		//공급자 상호
        		this.dsList.setColumn(nrow, "SU_REPRES"		, dsOut.getColumn(i, "Column7"));		//공급자 대표자명
        		this.dsList.setColumn(nrow, "SU_ADDR"		, dsOut.getColumn(i, "Column8"));		//공급자 주소
        		this.dsList.setColumn(nrow, "IP_ID"			, this.gfnRemoveSpecialChar(this.gfnNvl(dsOut.getColumn(i, "Column9"),"")));	//공급받는자 사업자등록번호
        		this.dsList.setColumn(nrow, "IP_NAME"		, dsOut.getColumn(i, "Column11"));		//공급받는자 상호
        		this.dsList.setColumn(nrow, "IP_REPRES"		, dsOut.getColumn(i, "Column12"));		//공급받는자 대표자명
        		this.dsList.setColumn(nrow, "IP_ADDR"		, dsOut.getColumn(i, "Column13"));		//공급받는자 주소
        		this.dsList.setColumn(nrow, "GRANDTOTAL"	, dsOut.getColumn(i, "Column14"));		//합계금액
        		this.dsList.setColumn(nrow, "CHARGETOTAL"	, dsOut.getColumn(i, "Column15"));		//공급가액

        		if(oDsColCnt == 31){
        			this.dsList.setColumn(nrow, "TAXTOTAL"		, "0");		//세액
        			this.dsList.setColumn(nrow, "DS_PROOF"		, dsOut.getColumn(i, "Column16"));		//전자세금계산서분류
        			this.dsList.setColumn(nrow, "TY_PROOF"		, dsOut.getColumn(i, "Column17"));		//전자세금계산서종류
        			this.dsList.setColumn(nrow, "TY_PROOF2"		, dsOut.getColumn(i, "Column18"));		//발급유형
        			this.dsList.setColumn(nrow, "DS_REM"		, dsOut.getColumn(i, "Column19"));		//비고
        			this.dsList.setColumn(nrow, "PURP_CODE"		, dsOut.getColumn(i, "Column20"));		//영수/청구 구분
        			this.dsList.setColumn(nrow, "SU_EMAIL"		, dsOut.getColumn(i, "Column21"));		//공급자 이메일
        			this.dsList.setColumn(nrow, "IP_EMAIL"		, dsOut.getColumn(i, "Column22"));		//공급받는자 이메일1
        			this.dsList.setColumn(nrow, "IP_EMAIL2"		, dsOut.getColumn(i, "Column23"));		//공급받는자 이메일2
        			this.dsList.setColumn(nrow, "GOOD_DATE"		, this.gfnRemoveSpecialChar(this.gfnNvl(dsOut.getColumn(i, "Column24"),"")));	//품목일자
        			this.dsList.setColumn(nrow, "GOOD_NAME"		, dsOut.getColumn(i, "Column25"));		//품목명
        			this.dsList.setColumn(nrow, "GOOD_INFO"		, dsOut.getColumn(i, "Column26"));		//품목규격
        			this.dsList.setColumn(nrow, "GOOD_QUAN"		, dsOut.getColumn(i, "Column27"));		//품목수량
        			this.dsList.setColumn(nrow, "GOOD_UNIAMOUNT", dsOut.getColumn(i, "Column28"));		//품목단가
        			this.dsList.setColumn(nrow, "GOOD_INVAMOUNT", dsOut.getColumn(i, "Column29"));		//품목공급가액
        			this.dsList.setColumn(nrow, "GOOD_TAXAMOUNT", "0");		//품목세액
        			this.dsList.setColumn(nrow, "GOOD_DESC"		, dsOut.getColumn(i, "Column30"));		//품목비고
        			this.dsList.setColumn(nrow, "TY_BILL"		, "B");		//타입(B:계산서)
        		}else{
        			this.dsList.setColumn(nrow, "TAXTOTAL"		, dsOut.getColumn(i, "Column16"));		//세액
        			this.dsList.setColumn(nrow, "DS_PROOF"		, dsOut.getColumn(i, "Column17"));		//전자세금계산서분류
        			this.dsList.setColumn(nrow, "TY_PROOF"		, dsOut.getColumn(i, "Column18"));		//전자세금계산서종류
        			this.dsList.setColumn(nrow, "TY_PROOF2"		, dsOut.getColumn(i, "Column19"));		//발급유형
        			this.dsList.setColumn(nrow, "DS_REM"		, dsOut.getColumn(i, "Column20"));		//비고
        			this.dsList.setColumn(nrow, "PURP_CODE"		, dsOut.getColumn(i, "Column21"));		//영수/청구 구분
        			this.dsList.setColumn(nrow, "SU_EMAIL"		, dsOut.getColumn(i, "Column22"));		//공급자 이메일
        			this.dsList.setColumn(nrow, "IP_EMAIL"		, dsOut.getColumn(i, "Column23"));		//공급받는자 이메일1
        			this.dsList.setColumn(nrow, "IP_EMAIL2"		, dsOut.getColumn(i, "Column24"));		//공급받는자 이메일2
        			this.dsList.setColumn(nrow, "GOOD_DATE"		, this.gfnRemoveSpecialChar(this.gfnNvl(dsOut.getColumn(i, "Column25"),"")));	//품목일자
        			this.dsList.setColumn(nrow, "GOOD_NAME"		, dsOut.getColumn(i, "Column26"));		//품목명
        			this.dsList.setColumn(nrow, "GOOD_INFO"		, dsOut.getColumn(i, "Column27"));		//품목규격
        			this.dsList.setColumn(nrow, "GOOD_QUAN"		, dsOut.getColumn(i, "Column28"));		//품목수량
        			this.dsList.setColumn(nrow, "GOOD_UNIAMOUNT", dsOut.getColumn(i, "Column29"));		//품목단가
        			this.dsList.setColumn(nrow, "GOOD_INVAMOUNT", dsOut.getColumn(i, "Column30"));		//품목공급가액
        			this.dsList.setColumn(nrow, "GOOD_TAXAMOUNT", dsOut.getColumn(i, "Column31"));		//품목세액
        			this.dsList.setColumn(nrow, "GOOD_DESC"		, dsOut.getColumn(i, "Column32"));		//품목비고
        			this.dsList.setColumn(nrow, "TY_BILL"		, "V");		//타입(V:세금계산서)
        		}

        	}
        	this.dsList.set_enableevent(true);

        	trace("saveXML :: "+this.dsList.saveXML());

        	this.gfnSetFormStatus(this, "I");
        };

        //전송 처리
        this.fnDataSend = function (obj,e)
        {
        	if(!this.fnSelectValidate()) return;

        	this.gfnConfirm("자료를 전송하시겠습니까?", "fnDataSend_callback");

        };

        this.fnDataSend_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsSend.clearData();
        		var nRow = this.dsSend.addRow();

        		//처리할 데이터 담기
        		this.dsSend.setColumn(nRow, "YR_TAX"	, this.ctclYEAR.form.TextBox.value);
        		this.dsSend.setColumn(nRow, "YM_START"	, (this.edtYM_START.value).replace("-",""));
        		this.dsSend.setColumn(nRow, "YM_END"	, (this.edtYM_END.value).replace("-",""));
        		this.dsSend.setColumn(nRow, "ID_USER"	, this.AuthClient.ID_USER);

        		var strSvcId    = "send";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "send=dsSend";
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
        };
        this.loadIncludeScript("DHV_HOMETAX_EXCEL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
