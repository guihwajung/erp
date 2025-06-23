(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DLB_LOANREPLY");
            this.set_titletext("융자신청관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DRBPR_LOANAPPLY_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DRBPR_LOANAPPLY_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DRBPR_LOANAPPLY_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DRBPR_LOANAPPLY_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_ACNTUNIT\"/><Col id=\"DS_ACNTUNIT\"/><Col id=\"NO_DONG\"/><Col id=\"NO_FLOOR\"/><Col id=\"NO_HO\"/><Col id=\"DT_FROM\"/><Col id=\"DT_TO\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("사업지코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNTUNIT","staCD_ACNTUNIT:0.0","10.0","400","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DLX_CFLEASESITE_CODEFIND");
            obj.set_taborder("0");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staContent","ccfCD_ACNTUNIT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("동층호");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_DONG","staContent:0.0","10.0","50","24.0","15",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_FLOOR","ctxtNO_DONG:0.0","10.0","30","24.0","15",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_HO","ctxtNO_FLOOR:0.0","10.0","50","24.0","15",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("BtnSearch","ctxtNO_HO:0.0","10.0","25",null,null,"8",null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_CF_Search");
            obj.set_tabstop("10.0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_REQ","BtnSearch:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("신청기간");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","staDT_REQ:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staRANGE","ctclDT_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","staRANGE:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_ACNTUNIT.form.CDTextBox","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_ACNTUNIT.form.DSTextBox","value","dsSearch","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctxtNO_DONG","value","dsSearch","NO_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctxtNO_FLOOR","value","dsSearch","NO_FLOOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctxtNO_HO","value","dsSearch","NO_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctclDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DLB_LOANAPPLY.xfdl", function() {
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
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {

        	this.btnExcelUpload = this.gfnFormButtonAdd("ExcelUpload", "fnExcelUpload"); 	// 엑셀업로드
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ccfCD_ACNTUNIT = this.divSearch.form.ccfCD_ACNTUNIT;	// 사업지코드
        	this.BtnSearch      = this.divSearch.form.BtnSearch;		// 동층호 돋보기버튼
        	this.ctclDT_FROM    = this.divSearch.form.ctclDT_FROM;		// 신청기간(시작)
        	this.ctclDT_TO      = this.divSearch.form.ctclDT_TO;		// 신청기간(종료)

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACNTUNIT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DL", "DLB_LOANAPPLY");

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	this.dxGrid.set_enableredraw(false);
        	this.gfnGridColumnColor(this.dxGrid, "YN_APPLY", "Blue", "YN_APPLY == '완료'");
        	this.gfnGridColumnColor(this.dxGrid, "YN_APPLY", "Red" , "YN_APPLY == '미완료'");
        	this.dxGrid.set_enableredraw(true);

        	// 동층호 팝업 호출.
        	this.BtnSearch.addEventHandler("onclick", this.divSearch_cbtnNO_DONGHO_onclick, this);

        	//조회기간
        	this.dsSearch.setColumn(0, "DT_FROM", this.gfnAddMonth(this.gfnGetDate(), -3));	// 3개월 이전
        	this.dsSearch.setColumn(0, "DT_TO"  , this.gfnGetDate());

        	this.dsSearch.setColumn(0, "CD_ACNTUNIT", this.UserInfo.DR_SPACE01);
        	this.dsSearch.setColumn(0, "DS_ACNTUNIT", this.UserInfo.DR_SPACE02);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT"   , "string");
        	this.dsSelect.addColumn("TY_GUBUN"      , "string");
        	this.dsSelect.addColumn("NO_CHASU"      , "string");
        	this.dsSelect.addColumn("NO_DONG"       , "string");
        	this.dsSelect.addColumn("NO_FLOOR"      , "string");
        	this.dsSelect.addColumn("NO_HO"         , "string");
        	this.dsSelect.addColumn("NO_UNIONMEMBER", "string");
        	this.dsSelect.addColumn("DT_FROM"       , "string");
        	this.dsSelect.addColumn("DT_TO"         , "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_ACNTUNIT"   , "string");
        	this.dsInsert.addColumn("TY_GUBUN"      , "string");
        	this.dsInsert.addColumn("NO_CHASU"      , "string");
        	this.dsInsert.addColumn("NO_DONG"		, "string");
        	this.dsInsert.addColumn("NO_HOSU"		, "string");
        	this.dsInsert.addColumn("NO_UNIONMEMBER", "string");
        	this.dsInsert.addColumn("TY_LOAN"		, "string");
        	this.dsInsert.addColumn("NO_LOAN"		, "string");
        	this.dsInsert.addColumn("AM_APPLY"		, "bigdecimal");
        	this.dsInsert.addColumn("DT_APPLY"		, "string");
        	this.dsInsert.addColumn("CD_VENDOR"  	, "string");
        	this.dsInsert.addColumn("TY_INTEREST"	, "string");
        	this.dsInsert.addColumn("DS_REMARK"		, "string");
        	this.dsInsert.addColumn("ID_INSERT"		, "string");
        	this.dsInsert.addColumn("AM_REPLY"		, "bigdecimal");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_ACNTUNIT"   , "string");
        	this.dsUpdate.addColumn("TY_GUBUN"      , "string");
        	this.dsUpdate.addColumn("NO_CHASU"      , "string");
        	this.dsUpdate.addColumn("NO_DONG"		, "string");
        	this.dsUpdate.addColumn("NO_HOSU"		, "string");
        	this.dsUpdate.addColumn("NO_UNIONMEMBER", "string");
        	this.dsUpdate.addColumn("TY_LOAN"		, "string");
        	this.dsUpdate.addColumn("NO_LOAN"		, "string");
        	this.dsUpdate.addColumn("AM_APPLY"		, "bigdecimal");
        	this.dsUpdate.addColumn("DT_APPLY"		, "string");
        	this.dsUpdate.addColumn("CD_VENDOR"  	, "string");
        	this.dsUpdate.addColumn("TY_INTEREST"	, "string");
        	this.dsUpdate.addColumn("DS_REMARK"		, "string");
        	this.dsUpdate.addColumn("ID_UPDATE"		, "string");
        	this.dsUpdate.addColumn("AM_REPLY"		, "bigdecimal");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_ACNTUNIT"   , "string");
        	this.dsDelete.addColumn("TY_GUBUN"      , "string");
        	this.dsDelete.addColumn("NO_CHASU"      , "string");
        	this.dsDelete.addColumn("NO_DONG"		, "string");
        	this.dsDelete.addColumn("NO_HOSU"		, "string");
        	this.dsDelete.addColumn("NO_UNIONMEMBER", "string");
        	this.dsDelete.addColumn("TY_LOAN"		, "string");
        	this.dsDelete.addColumn("NO_LOAN"		, "string");
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

        	this.dsSelect.setColumn(0, "CD_ACNTUNIT"   , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect.setColumn(0, "NO_DONG"       , this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect.setColumn(0, "NO_FLOOR"      , this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelect.setColumn(0, "NO_HO"         , this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsSelect.setColumn(0, "NO_UNIONMEMBER", "");
        	this.dsSelect.setColumn(0, "DT_FROM"       , this.dsSearch.getColumn(0, "DT_FROM"));
        	this.dsSelect.setColumn(0, "DT_TO"         , this.dsSearch.getColumn(0, "DT_TO"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	this.gfnGridAdd(this.dxGrid);
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        	if (!this.gfnGridValidate(this.dxGrid)) return false;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I" :
        					var nRow = this.dsInsert.addRow();

        					this.dsInsert.setColumn(nRow, "CD_ACNTUNIT"   , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        					this.dsInsert.setColumn(nRow, "TY_GUBUN"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        					this.dsInsert.setColumn(nRow, "NO_CHASU"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        					this.dsInsert.setColumn(nRow, "NO_DONG"       , this.dsList.getColumn(i, "NO_DONG"));
        					this.dsInsert.setColumn(nRow, "NO_HOSU"       , this.dsList.getColumn(i, "HOSU"));
        					this.dsInsert.setColumn(nRow, "NO_UNIONMEMBER", "");
        					this.dsInsert.setColumn(nRow, "TY_LOAN"       , this.dsList.getColumn(i, "TY_LOAN") || "");
        					this.dsInsert.setColumn(nRow, "NO_LOAN"       , this.dsList.getColumn(i, "NO_LOAN"));
        					this.dsInsert.setColumn(nRow, "AM_APPLY"      , this.dsList.getColumn(i, "AM_APPLY"));
        					this.dsInsert.setColumn(nRow, "DT_APPLY"      , this.dsList.getColumn(i, "DT_APPLY"));
        					this.dsInsert.setColumn(nRow, "CD_VENDOR"     , this.dsList.getColumn(i, "CD_VENDOR") || "");
        					this.dsInsert.setColumn(nRow, "TY_INTEREST"   , this.dsList.getColumn(i, "TY_INTEREST"));
        					this.dsInsert.setColumn(nRow, "DS_REMARK"     , this.dsList.getColumn(i, "DS_REMARK") || "");
        					this.dsInsert.setColumn(nRow, "ID_INSERT"     , this.AuthClient.ID_USER);
        					this.dsInsert.setColumn(nRow, "AM_REPLY"      , this.dsList.getColumn(i, "AM_REPLY") || "");
        				break;
        			case "U" :
        					var nRow = this.dsUpdate.addRow();

        					this.dsUpdate.setColumn(nRow, "CD_ACNTUNIT"   , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        					this.dsUpdate.setColumn(nRow, "TY_GUBUN"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        					this.dsUpdate.setColumn(nRow, "NO_CHASU"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        					this.dsUpdate.setColumn(nRow, "NO_DONG"       , this.dsList.getColumn(i, "NO_DONG"));
        					this.dsUpdate.setColumn(nRow, "NO_HOSU"       , this.dsList.getColumn(i, "HOSU"));
        					this.dsUpdate.setColumn(nRow, "NO_UNIONMEMBER", "");
        					this.dsUpdate.setColumn(nRow, "TY_LOAN"       , this.dsList.getColumn(i, "TY_LOAN"));
        					this.dsUpdate.setColumn(nRow, "NO_LOAN"       , this.dsList.getColumn(i, "NO_LOAN"));
        					this.dsUpdate.setColumn(nRow, "AM_APPLY"      , this.dsList.getColumn(i, "AM_APPLY"));
        					this.dsUpdate.setColumn(nRow, "DT_APPLY"      , this.dsList.getColumn(i, "DT_APPLY"));
        					this.dsUpdate.setColumn(nRow, "CD_VENDOR"     , this.dsList.getColumn(i, "CD_VENDOR"));
        					this.dsUpdate.setColumn(nRow, "TY_INTEREST"   , this.dsList.getColumn(i, "TY_INTEREST"));
        					this.dsUpdate.setColumn(nRow, "DS_REMARK"     , this.dsList.getColumn(i, "DS_REMARK"));
        					this.dsUpdate.setColumn(nRow, "ID_UPDATE"     , this.AuthClient.ID_USER);
        					this.dsUpdate.setColumn(nRow, "AM_REPLY"      , this.dsList.getColumn(i, "AM_REPLY"));
        				break;
        			case "D" :
        					var nRow = this.dsDelete.addRow();

        					this.dsDelete.setColumn(nRow, "CD_ACNTUNIT"   , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        					this.dsDelete.setColumn(nRow, "TY_GUBUN"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        					this.dsDelete.setColumn(nRow, "NO_CHASU"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        					this.dsDelete.setColumn(nRow, "NO_DONG"       , this.dsList.getColumn(i, "NO_DONG"));
        					this.dsDelete.setColumn(nRow, "NO_HOSU"       , this.dsList.getColumn(i, "HOSU"));
        					this.dsDelete.setColumn(nRow, "NO_UNIONMEMBER", "");
        					this.dsDelete.setColumn(nRow, "TY_LOAN"       , this.dsList.getColumn(i, "TY_LOAN"));
        					this.dsDelete.setColumn(nRow, "NO_LOAN"       , this.dsList.getColumn(i, "NO_LOAN"));
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

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) {
        		this.gfnAlert("사업지코드를 입력하지 않았습니다.");
        		this.ccfCD_ACNTUNIT.form.CDTextBox.setFocus();
        		return false;
        	}

        	if(!this.gfnIsNull(this.dsSearch.getColumn(0, "DT_FROM")) && !this.gfnIsNull(this.dsSearch.getColumn(0, "DT_TO"))){
        		if(this.gfnGetDiffDate(this.dsSearch.getColumn(0, "DT_FROM"), this.dsSearch.getColumn(0, "DT_TO")) <= -1){
        			this.gfnAlert("신청기간의 범위가 올바르지 않습니다.");
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
        this.fnCallback = function(svcID, errorCode, errorMsg) {

        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		if(this.FormInfo.TY_AUTH != "R"){
        			this.btnExcelUpload.set_enable(true);
        		}
        	}
        	if (svcID == "save") {
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

        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	// 사업지코드
        	if (id == "ccfCD_ACNTUNIT") {
        		dsUserParam.setColumn(nrow, "FLAG"  		, "A");
        		dsUserParam.setColumn(nrow, "CD_DEPT"  		, this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER"  		, this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "ID_GROUP" 		, this.FormInfo.ID_GROUP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH"		, this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_TOTALCHASU" , "");
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

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	// 융자사코드
        	if (id == "DRX_CFFINANCING_CODEFIND") {
        		dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(nrow, "CD_ACNTUNIT"));
        		dsUserParam.setColumn(nrow, "YN_OPTION"  , "N");
        	}

        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        //그리드 더블 클릭 이벤트 - 자산정보
        this.fnGrid_Celldblclick = function(obj,e) {

        	this.btnDetailView.click();
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

        // 엑셀업로드
        this.fnExcelUpload = function() {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) {
        		this.gfnAlert("사업지코드를 먼저 선택하세요.");
        		this.ccfCD_ACNTUNIT.form.CDTextBox.setFocus();
        		return;
        	}

        	this.gfnExcelImport("dsList", "Sheet1", "A2", "fnExcelImportCallback", "import", this);
        }

        this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet) {
        	this.dsList.clearData();
        	for (var i = 0; i < this.dsList.getColCount(); ++i)
        	{
        		sColumnId = "Column" + i;
        		var sColumnNm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, i);
        		if (sColumnNm != "" && sColumnId != sColumnNm)
        		{
        			dsOut.updateColID(sColumnId, sColumnNm);
        		}
        	}

        	// 양식이 일치하고 엑셀내역을 기존데이터에 Insert하지 않고
        	// 엑셀내역 그대로 그리드 반영할 시 copyData
        	//this.dsListSub.copyData(dsOut);

        	//이자구분 콤보 데이터셋
        	var dsTY_INTEREST = this.objects[this.dxGrid.getCellProperty("body", this.dxGrid.getBindCellIndex("body", "TY_INTEREST"), "combodataset")];

        	this.dsList.set_enableevent(false);
        	for (var i = 0; i < dsOut.rowcount; ++i) {
        		var nrow = this.dsList.addRow();
        		// 양식이 일치하는 경우 copyRow
        		//this.dsList.copyRow(nrow, dsOut, i);

        		this.dsList.setColumn(nrow, this.ucFlag		, "I");
        		this.dsList.setColumn(nrow, "NO_DONG"  		, this.gfnTrim(dsOut.getColumn(i, "NO_DONG")));				//동
        		this.dsList.setColumn(nrow, "HOSU"     		, this.gfnTrim(dsOut.getColumn(i, "HOSU")));				//호
        		this.dsList.setColumn(nrow, "DS_CONTRACTOR" , dsOut.getColumn(i, "DS_CONTRACTOR"));						//계약자명
        		this.dsList.setColumn(nrow, "NO_LOAN"     	, this.gfnTrim(dsOut.getColumn(i, "NO_LOAN")));				//차수
        		this.dsList.setColumn(nrow, "CD_VENDOR"     , this.gfnTrim(dsOut.getColumn(i, "CD_VENDOR")));			//융자사코드
        		this.dsList.setColumn(nrow, "DS_VENDOR"     , dsOut.getColumn(i, "DS_VENDOR"));							//융자사명
        		this.dsList.setColumn(nrow, "AM_APPLY"      , this.gfnTrim(dsOut.getColumn(i, "AM_APPLY")));			//신청금액
        		this.dsList.setColumn(nrow, "AM_REPLY"      , this.gfnTrim(dsOut.getColumn(i, "AM_REPLY")));			//상환금액
        		this.dsList.setColumn(nrow, "DS_REMARK"     , dsOut.getColumn(i, "DS_REMARK"));							//비고
        		this.dsList.setColumn(nrow, "DT_APPLY" 		, this.gfnTrim(nexacro.replaceAll(dsOut.getColumn(i, "DT_APPLY"),"-","")));	//신청일자

        		//이자구분명으로 코드 찾아서 넣어주기
        		if(!this.gfnIsNull(dsTY_INTEREST)){
        			var tyInterest = this.gfnTrim(dsOut.getColumn(i, "TY_INTEREST"));
        			if(!nexacro.isAlpha(tyInterest)){
        				var fRow = dsTY_INTEREST.findRow("TEXT", tyInterest);

        				this.dsList.setColumn(nrow, "TY_INTEREST", (fRow == -1 ? dsOut.getColumn(i, "TY_INTEREST") : dsTY_INTEREST.getColumn(fRow, "CODE")));		//구분
        			}else{
        				this.dsList.setColumn(nrow, "TY_INTEREST", this.gfnTrim(dsOut.getColumn(i, "TY_INTEREST")));		//이자구분
        			}
        		}
        	}
        	this.dsList.set_enableevent(true);

        	this.gfnSetFormStatus(this, "I");
        };

        this.divSearch_cbtnNO_DONGHO_onclick = function(obj,e)
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

        	this.gfnFormOpen("DRI", "DRI_DONGHOBATCHRECEIPT", "fnPopupCallback", param);
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.BtnSearch.addEventHandler("onclick",this.divSearch_cbtnNO_DONGHO_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DLB_LOANAPPLY.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
