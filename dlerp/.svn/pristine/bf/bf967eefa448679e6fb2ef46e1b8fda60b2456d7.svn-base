(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAV_YEARENDSTAT");
            this.set_titletext("연말정산 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYnClose", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAVPR_YEARENDSTAT_SELECT</Col></Row><Row><Col id=\"TARGET\">closeCheck</Col><Col id=\"SP\">DAVPR_CLOSE_CHECK</Col></Row><Row><Col id=\"TARGET\">close</Col><Col id=\"SP\">DAVPR_YEAREND_CLOSE</Col></Row><Row><Col id=\"TARGET\">closeCancel</Col><Col id=\"SP\">DAVPR_YEAREND_CLOSE_CANCEL</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DAVPR_YEARENDSTAT_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DAVPR_YEARENDSTAT_DELETE</Col></Row><Row><Col id=\"TARGET\">yearEnd</Col><Col id=\"SP\">DAVPR_YEARENDSUBST_SELECT</Col></Row><Row><Col id=\"TARGET\">yearEnd_sub</Col><Col id=\"SP\">DAVPR_YEARENDSUBSTSUB1_SELECT</Col></Row><Row><Col id=\"TARGET\">Pension</Col><Col id=\"SP\">DAVPR_YEARENDSUBSTPENSIONRPT_SELECT</Col></Row><Row><Col id=\"TARGET\">houseRpt</Col><Col id=\"SP\">DAVPR_YEARENDSUBSTHOUSERPT_SELECT</Col></Row><Row><Col id=\"TARGET\">houseMonth</Col><Col id=\"SP\">DAVPR_HOUSEMONTH_SELECT</Col></Row><Row><Col id=\"TARGET\">houseMoney</Col><Col id=\"SP\">DAVPR_HOUSEMONEY_SELECT</Col></Row><Row><Col id=\"TARGET\">houseRent</Col><Col id=\"SP\">DAVPR_HOUSERENT_SELECT</Col></Row><Row><Col id=\"TARGET\">Medical</Col><Col id=\"SP\">DAVPR_MEDICALSUBST_PRINT</Col></Row><Row><Col id=\"TARGET\">Give</Col><Col id=\"SP\">DAVPR_GIVESUBST_PRINT</Col></Row><Row><Col id=\"TARGET\">Give_sub</Col><Col id=\"SP\">DAVPR_GIVESUBST_RPT_SELECT</Col></Row><Row><Col id=\"TARGET\">Give_sub2</Col><Col id=\"SP\">DAVPR_GIVESUBST_RPT2_SELECT</Col></Row><Row><Col id=\"TARGET\">Card</Col><Col id=\"SP\">DAVPR_CARDSUBSTRPT_SELECT</Col></Row><Row><Col id=\"TARGET\">Card1</Col><Col id=\"SP\">DAVPR_CARDSUBSTRPT1_SELECT</Col></Row><Row><Col id=\"TARGET\">dsAuthForm</Col><Col id=\"SP\">DZZPR_DOTNET_AUTHORITYFORM_SELECT_NEW</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsParamAuthForm", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_MODULE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsParamBtnInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_MODULE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_FORM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthForm", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBtnInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.addChild(obj.name, obj);

            obj = new Static("staYY_BASE","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("적용년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYY_BASE","staYY_BASE:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_enableevent("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ctclYY_BASE:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_CLOSE","ccfCD_CORP:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("입력완료여부");
            obj.set_rtl("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_CLOSE","staYN_CLOSE:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            var divSearch_form_cboYN_CLOSE_innerdataset = new nexacro.NormalDataset("divSearch_form_cboYN_CLOSE_innerdataset", obj);
            divSearch_form_cboYN_CLOSE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col><Col id=\"codecolumn\">%</Col></Row><Row><Col id=\"datacolumn\">완료</Col><Col id=\"codecolumn\">Y</Col></Row><Row><Col id=\"datacolumn\">미완료</Col><Col id=\"codecolumn\"/></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboYN_CLOSE_innerdataset);
            obj.set_text("전체");
            obj.set_value("%");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN","cboYN_CLOSE:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("구분");
            obj.set_rtl("false");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdoTY_GUBUN","staTY_GUBUN:0.0","10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            var divSearch_form_rdoTY_GUBUN_innerdataset = new nexacro.NormalDataset("divSearch_form_rdoTY_GUBUN_innerdataset", obj);
            divSearch_form_rdoTY_GUBUN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">E</Col><Col id=\"datacolumn\">임직원</Col></Row><Row><Col id=\"codecolumn\">T</Col><Col id=\"datacolumn\">노무자</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_rdoTY_GUBUN_innerdataset);
            obj.set_text("임직원");
            obj.set_value("E");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_HNAME","0.0","staYY_BASE:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_RESIDENT","staDS_HNAME:0.0","ctclYY_BASE:10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFEMP");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","ccfID_RESIDENT:0.0","staYY_BASE:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("부서");
            obj.set_rtl("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:0.0","ccfCD_CORP:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("12");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFDEPT");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_MAGAM","ccfCD_DEPT:0.0","staYN_CLOSE:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("마감여부");
            obj.set_rtl("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_MID","0.0","staYY_BASE:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_visible("false");
            var divSearch_form_cboYN_MID_innerdataset = new nexacro.NormalDataset("divSearch_form_cboYN_MID_innerdataset", obj);
            divSearch_form_cboYN_MID_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">연말정산</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">중도정산</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboYN_MID_innerdataset);
            obj.set_text("연말정산");
            obj.set_value("N");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtYEAR_END_CLOSE","staYN_MAGAM:0.0","staYY_BASE:10.0","30","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_readonly("false");
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

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAV_YEARENDSTAT.xfdl", function() {
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

        	//적용년도(현재)
        	//var thisYear = this.gfnGetDate().substr(0,4);
        	//this.ctclYY_BASE.form.TextBox.set_value(thisYear);gh
        	var beforeYear = this.gfnAddDate(this.gfnGetDate(), -365).substr(0,4);
        	this.ctclYY_BASE.form.TextBox.set_value(beforeYear);

        	// 법인코드 및 법인명 기본세팅
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
            this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        // 	//성명
        // 	this.ccfID_RESIDENT.form.CDTextBox.set_value(this.AuthClient.ID_USER);
        //     this.ccfID_RESIDENT.form.DSTextBox.set_value(this.AuthClient.DS_HNAME);

        // 	//부서
        // 	this.ccfCD_DEPT.form.CDTextBox.set_value(this.AuthClient.CD_DEPT);
        //  this.ccfCD_DEPT.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);

        	//노무자 삭제
        	this.rdoTY_GUBUN.getInnerDataset().deleteRow(1);

        	//확장버튼
        	this.fnSetExtendButtonCtrl(false);

        	this.FormBtns.Select.click();

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Print.set_enable(false);
        	this.FormBtns.Reset.set_enable(true);

        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnInitYearEnd 		= this.gfnFormButtonAdd("InitYearEnd", 		"fnExtBtnEvent", "기초정보생성");
        	this.btnInputData 			= this.gfnFormButtonAdd("InputData",	 	"fnExtBtnEvent", "소득공제정보");
        	this.btnPreCompany 			= this.gfnFormButtonAdd("PreCompany", 		"fnExtBtnEvent", "전근무지정보");
        	this.btnCalcTax 			= this.gfnFormButtonAdd("CalcTax", 			"fnExtBtnEvent", "세액계산");
        	this.btnYearEnd 			= this.gfnFormButtonAdd("YearEnd", 			"fnExtBtnEvent", "결과조회");
        	//this.btnYearEndSubstRpt		= this.gfnFormButtonAdd("YearEndSubstRpt", 	"fnExtBtnEvent", "공제신고서별출력");

        	this.btnYearEndReceiptRpt 	= this.gfnFormButtonAdd("YearEndReceiptRpt","fnExtBtnEvent", "원천징수영수증출력");
        	this.btnYearEndCollect 		= this.gfnFormButtonAdd("YearEndCollect", 	"fnExtBtnEvent", "원천징수부출력");
        	this.btnClose 				= this.gfnFormButtonAdd("Close", 			"fnExtBtnEvent", "마감");
        	this.btnCloseCancel			= this.gfnFormButtonAdd("CloseCancel", 		"fnExtBtnEvent", "마김해제");
        	//this.btnInputCancel 		= this.gfnFormButtonAdd("InputCancel", 		"fnExtBtnEvent", "입력해제");
        	this.btnYearendTrans 		= this.gfnFormButtonAdd("YearendTrans", 	"fnExtBtnEvent", "급여이관");

        };
        this.fnSetExtendButtonCtrl = function(enTF){
        	this.btnInitYearEnd.set_enable(enTF);
        	this.btnInputData.set_enable(enTF);
        	this.btnPreCompany.set_enable(enTF);
        	this.btnCalcTax.set_enable(enTF);
        	this.btnYearEnd.set_enable(enTF);
        	//this.btnYearEndSubstRpt.set_enable(enTF);
        	this.btnYearendTrans.set_enable(enTF);
        	this.btnYearEndReceiptRpt.set_enable(enTF);
        	this.btnYearEndCollect.set_enable(enTF);
        	this.btnClose.set_enable(enTF);
        	this.btnCloseCancel.set_enable(enTF);
        	//this.btnInputCancel.set_enable(enTF);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	//적용년도
        	this.ctclYY_BASE = this.divSearch.form.ctclYY_BASE;

        	//법인코드
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;

        	//입력완료여부
        	this.cboYN_CLOSE = this.divSearch.form.cboYN_CLOSE;

        	//임직원구분
        	this.rdoTY_GUBUN = this.divSearch.form.rdoTY_GUBUN;

        	//성명(주민번호)
        	this.ccfID_RESIDENT = this.divSearch.form.ccfID_RESIDENT;

        	//부서
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;

        	//마감여부
        	this.edtYEAR_END_CLOSE = this.divSearch.form.edtYEAR_END_CLOSE;

        	//중도정산여부
        	this.cboYN_MID = this.divSearch.form.cboYN_MID;

        	//그리드
        	this.dxGrid = this.divData.form.objGrid;

        	this.grSearch = this.FormInfo.GR_SEARCH;					          // 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;					          // 그룹코드
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAV_YEARENDSTAT");

        	//this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	//this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	//조회

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YY_BASE", "string");
        	this.dsSelect.addColumn("MM_BASE", "string");
        	this.dsSelect.addColumn("NO_APPLY", "int");
        	this.dsSelect.addColumn("YN_MID", "string");
        	this.dsSelect.addColumn("YN_CLOSE", "string");
        	this.dsSelect.addColumn("FR_RESIDENT", "string");
        	this.dsSelect.addColumn("TO_RESIDENT", "string");
        	this.dsSelect.addColumn("CD_ORG2", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");

        	this.dsSelectChk = new Dataset();
        	this.dsSelectChk.addColumn("CD_CORP", "string");
        	this.dsSelectChk.addColumn("ID_RESIDENT", "string");
        	this.dsSelectChk.addColumn("ID_SABUN", "string");
        	this.dsSelectChk.addColumn("YY_BASE", "string");
        	this.dsSelectChk.addColumn("MM_BASE", "string");
        	this.dsSelectChk.addColumn("NO_APPLY", "int");
        	this.dsSelectChk.addColumn("YN_MID", "string");

        	//수정
        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("ID_RESIDENT", "string");
        	this.dsUpdate.addColumn("YY_BASE", "string");
        	this.dsUpdate.addColumn("MM_BASE", "string");
        	this.dsUpdate.addColumn("NO_APPLY", "int");
        	this.dsUpdate.addColumn("YN_MID", "string");
        	this.dsUpdate.addColumn("ID_SABUN", "string");
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("YN_CLOSE", "string");
        	this.dsUpdate.addColumn("GR_SEARCH", "string");
        	this.dsUpdate.addColumn("TY_AUTH", "string");
        	this.dsUpdate.addColumn("GR_DEPT", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");

        	//삭제
        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("ID_RESIDENT", "string");
        	this.dsDelete.addColumn("ID_SABUN", "string");
        	this.dsDelete.addColumn("YY_BASE", "string");
        	this.dsDelete.addColumn("MM_BASE", "string");
        	this.dsDelete.addColumn("NO_APPLY", "int");
        	this.dsDelete.addColumn("YN_MID", "string");
        	this.dsDelete.addColumn("CD_CORP", "string");

        	// 마감, 마감취소
        	this.dsClose = new Dataset();
        	this.dsClose.addColumn("CD_CORP", "string");
        	this.dsClose.addColumn("YY_BASE", "string");
        	this.dsClose.addColumn("MM_BASE", "string");
        	this.dsClose.addColumn("NO_APPLY", "string");
        	this.dsClose.addColumn("YN_MID", "string");
        	this.dsClose.addColumn("ID_INSERT", "string");

        };

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

        	this.dsSelect.setColumn(0, "YY_BASE", this.ctclYY_BASE.form.TextBox.value);
        	this.dsSelect.setColumn(0, "MM_BASE", "12");
        	this.dsSelect.setColumn(0, "NO_APPLY", 1);
        	this.dsSelect.setColumn(0, "YN_MID", this.cboYN_MID.value);
        	this.dsSelect.setColumn(0, "YN_CLOSE", this.cboYN_CLOSE.value);
        	this.dsSelect.setColumn(0, "FR_RESIDENT", nexacro.replaceAll(this.ccfID_RESIDENT.form.CDTextBox.value, "-", ""));
        	this.dsSelect.setColumn(0, "TO_RESIDENT", nexacro.replaceAll(this.ccfID_RESIDENT.form.CDTextBox.value, "-", ""));
        	this.dsSelect.setColumn(0, "CD_ORG2", this.ccfCD_DEPT.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.rdoTY_GUBUN.value);
        	this.dsSelect.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);

        	this.dsSelectChk.clearData();
        	this.dsSelectChk.addRow();

        	this.dsSelectChk.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsSelectChk.setColumn(0, "ID_RESIDENT", "");
        	this.dsSelectChk.setColumn(0, "ID_SABUN", "");
        	this.dsSelectChk.setColumn(0, "YY_BASE", this.ctclYY_BASE.form.TextBox.value);
        	this.dsSelectChk.setColumn(0, "MM_BASE", "12");
        	this.dsSelectChk.setColumn(0, "NO_APPLY", 1);
        	this.dsSelectChk.setColumn(0, "YN_MID", this.cboYN_MID.value);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect closeCheck=dsSelectChk";
        	var outData     = "dsList=select0 dsYnClose=closeCheck0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        //	this.gfnGridAdd(this.dxGrid);
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
        	//  그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();

         				this.dsUpdate.setColumn(nrow, "ID_RESIDENT", nexacro.replaceAll(this.dsList.getColumn(i, "ID_RESIDENT"), "-", ""));
        				this.dsUpdate.setColumn(nrow, "YY_BASE", this.ctclYY_BASE.form.TextBox.value);
        				this.dsUpdate.setColumn(nrow, "MM_BASE", "12");
        				this.dsUpdate.setColumn(nrow, "NO_APPLY", this.dsList.getColumn(i, "NO_APPLY"));
        				this.dsUpdate.setColumn(nrow, "YN_MID", this.cboYN_MID.value);
        				this.dsUpdate.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        				this.dsUpdate.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        				this.dsUpdate.setColumn(nrow, "YN_CLOSE", this.dsList.getColumn(i, "YN_CLOSE"));
        				this.dsUpdate.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        				this.dsUpdate.setColumn(nrow, "TY_AUTH", this.FormInfo.TY_AUTH);
        				this.dsUpdate.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();

        				this.dsDelete.setColumn(nrow, "ID_RESIDENT", nexacro.replaceAll(this.dsList.getColumn(i, "ID_RESIDENT"), "-", ""));
        				this.dsDelete.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        				this.dsDelete.setColumn(nrow, "YY_BASE", this.ctclYY_BASE.form.TextBox.value);
        				this.dsDelete.setColumn(nrow, "MM_BASE", "12");
        				this.dsDelete.setColumn(nrow, "NO_APPLY", this.dsList.getColumn(i, "NO_APPLY"));
        				this.dsDelete.setColumn(nrow, "YN_MID", this.cboYN_MID.value);
        				this.dsDelete.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        				break;
        		}
        	}

        	if (this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate delete=dsDelete";
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
        };

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        };

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        	//this.fnSelectRpt();
        /*
        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("CD_CORP", "string");
        	this.dsReport.addColumn("YY_BASE", "string");
        	this.dsReport.addColumn("NO_APPLY", "string");
        	this.dsReport.addColumn("ID_RESIDENT", "string");
        	this.dsReport.addColumn("TY_ORDERBY", "string");
        	this.dsReport.addColumn("YN_MID", "string");

        	this.dsReport.clearData();
        	var nrow = this.dsReport.addRow();
        	this.dsReport.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsReport.setColumn(nrow, "YY_BASE", this.ctclYY_BASE.form.TextBox.value);
        	this.dsReport.setColumn(nrow, "NO_APPLY", "1");
        	this.dsReport.setColumn(nrow, "ID_RESIDENT", this.dsList.getColumn(this.dsList.rowposition, "ID_RESIDENT").replace(/-/g,""));
        	this.dsReport.setColumn(nrow, "TY_ORDERBY", "1");
        	this.dsReport.setColumn(nrow, "YN_MID", "Y");

        	trace(this.dsReport.saveXML());

        	var inProc		= "_dsProc";
        	var inParam 	= "";
        	var inData      = "yearEnd=dsReport yearEnd_sub=dsReport Pension=dsReport houseRpt=dsReport houseMonth=dsReport houseMoney=dsReport houseRent=dsReport"; //
        	var reportpath  = "/da/dav/DAV_YEAREND.ozr";
        	trace(this.dsReport.saveXML());

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        */

        };

        /*
        this.fnSelectRpt = function() {

        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("CD_CORP", "string");
        	this.dsReport.addColumn("YY_BASE", "string");
        	this.dsReport.addColumn("MM_BASE", "string");
        	this.dsReport.addColumn("YY_BASE_TO", "string");
        	this.dsReport.addColumn("MM_BASE_TO", "string");
        	this.dsReport.addColumn("NO_APPLY", "string");
        	this.dsReport.addColumn("ID_RESIDENT", "string");
        	this.dsReport.addColumn("ID_SABUN", "string");
        	this.dsReport.addColumn("TY_ORDERBY", "string");
        	this.dsReport.addColumn("YN_MID", "string");

        	this.dsReport.clearData();
        	var nrow = this.dsReport.addRow();
        	this.dsReport.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsReport.setColumn(nrow, "YY_BASE", this.ctclYY_BASE.form.TextBox.value);
        	this.dsReport.setColumn(nrow, "MM_BASE", "12");
        	this.dsReport.setColumn(nrow, "YY_BASE_TO", this.ctclYY_BASE.form.TextBox.value);
        	this.dsReport.setColumn(nrow, "MM_BASE_TO", "12");
        	this.dsReport.setColumn(nrow, "NO_APPLY", "1");
        	this.dsReport.setColumn(nrow, "ID_RESIDENT", this.dsList.getColumn(this.dsList.rowposition, "ID_RESIDENT").replace(/-/g,""));
        	this.dsReport.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN"));
        	this.dsReport.setColumn(nrow, "TY_ORDERBY", "1");
        	this.dsReport.setColumn(nrow, "YN_MID", "N");

        	trace(this.dsReport.saveXML());

        	var inProc		= "_dsProc";
        	var inParam 	= "";
        	// 공제신고서, 연금저축, 월세소득, 의료비, 기부금, 신용카드
        	var inData      = "yearEnd=dsReport yearEnd_sub=dsReport Pension=dsReport houseRpt=dsReport houseMonth=dsReport houseMoney=dsReport houseRent=dsReport Medical=dsReport Give=dsReport Give_sub=dsReport Give_sub2=dsReport Card=dsReport Card1=dsReport";
        	// sp 호출순서 Give_sub > yearEnd > yearEnd_sub > Give > houseRpt > Give_sub2 > houseMoney > houseMonth > Pension > Card1 > houseRent > Medical > Card
        	// 10 > 1 > 2 > 9 > 4 > 11 > 6 > 5 > 3 > 13 > 7 > 8 > 12


        	// 공제신고서, 연금저축, 월세액
        	//var inData      = "yearEnd=dsReport yearEnd_sub=dsReport Pension=dsReport houseRpt=dsReport houseMonth=dsReport houseMoney=dsReport houseRent=dsReport";


        	var reportpath  = "/da/dav/DAV_YEAREND.ozr";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);

        }
        */


        /*
         *	리셋 버튼
         */
        this.fnReset = function() {
        	this.ctclYY_BASE.form.TextBox.set_value("");
        	this.ccfCD_CORP.form.CDTextBox.set_value("");
        	this.ccfCD_CORP.form.DSTextBox.set_value("");
        	this.cboYN_CLOSE.set_value("%");
        	this.rdoTY_GUBUN.set_value("E");
        	this.ccfID_RESIDENT.form.CDTextBox.set_value("");
        	this.ccfID_RESIDENT.form.DSTextBox.set_value("");
        	this.ccfCD_DEPT.form.CDTextBox.set_value("");
        	this.ccfCD_DEPT.form.DSTextBox.set_value("");
        	//this.cboYN_MAGAM.set_value("Y");
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {

         	var validate = true;

        	//적용년도
        	if (this.gfnIsNull(this.ctclYY_BASE.form.TextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.ctclYY_BASE.form.TextBox.setFocus();
        		}
        		this.gfnAlert("적용년도를 입력하세요.");
        		return false;
        	}

        	//법인
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.", "fnVaidateCallback");
        	}

         	return validate;
        };
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, args)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		var numCnt = 0;
        		if(this.dsList.rowcount == 1 && this.gfnGetFlag(this.dsList, 0) == "#"){
        			numCnt = 1;
        		}

        		if(this.dsList.rowcount > numCnt){	// 필터로우가 있기때문에 데이터가 없어도 rowcount는 1 이다
        			this.btnInputData.set_enable(true);
        			this.btnPreCompany.set_enable(true);
        			this.btnYearEnd.set_enable(true);
        			this.btnYearEndReceiptRpt.set_enable(true);
        			this.btnYearEndCollect.set_enable(true);
        			this.btnCalcTax.set_enable(true);
        			this.btnYearendTrans.set_enable(true);
        		}else{
        			this.btnInputData.set_enable(false);
        			this.btnPreCompany.set_enable(false);
        			this.btnYearEnd.set_enable(false);
        			this.btnYearEndReceiptRpt.set_enable(false);
        			this.btnYearEndCollect.set_enable(false);
        			this.btnCalcTax.set_enable(false);
        			this.btnYearendTrans.set_enable(false);
        		}
        		this.btnInitYearEnd.set_enable(true);


        		if(this.dsYnClose.rowcount > 0){
        			if(this.dsYnClose.getColumn(0,"YEAREND_CLOSE") == "Y"){
        				this.edtYEAR_END_CLOSE.set_value("Y");
        			}else{
        				this.edtYEAR_END_CLOSE.set_value("N");
        			}
        		}else{
        			this.edtYEAR_END_CLOSE.set_value("N");
        		}

        		//확장버튼
        		if(this.edtYEAR_END_CLOSE.value == "Y"){
        			this.btnClose.set_enable(false);
        			this.btnCloseCancel.set_enable(true);
        			this.btnInitYearEnd.set_enable(false);
        			this.btnCalcTax.set_enable(false);
        			this.FormBtns.Del.set_enable(false);
        			this.FormBtns.Save.set_enable(false);
        			this.btnYearendTrans.set_enable(false);

        		}else if(this.edtYEAR_END_CLOSE.value == "N"){
        			if(this.dsList.rowcount > numCnt){
        				this.btnClose.set_enable(true);
        				this.btnCloseCancel.set_enable(false);
        				this.btnInitYearEnd.set_enable(true);
        				this.btnCalcTax.set_enable(true);
        				this.btnYearendTrans.set_enable(true);
        			}else{
        				this.btnClose.set_enable(false);
        				this.btnCloseCancel.set_enable(false);
        				this.btnInitYearEnd.set_enable(true);
        				this.btnCalcTax.set_enable(false);
        				this.btnYearendTrans.set_enable(false);
        			}
        		}

        		if(this.FormInfo.TY_AUTH == "R"){
        			this.btnInputData.set_enable(false);
        			this.btnCalcTax.set_enable(false);
        			this.btnYearendTrans.set_enable(false);
        		}

        		/*
        		this.fnSetButton();

        		var closeYn = this.dsYnClose.getColumn(0,"YEAREND_CLOSE");

        		this.fnSetButton();
        		//확장버튼
        		if(closeYn == "Y"){
        			this.fnSetExtendButtonCtrl(false);
        		}else{
        			this.fnSetExtendButtonCtrl(true);
        		}
        		*/
        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "close") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == "authform") {
        		if (this.dsAuthForm.rowcount > 0) {

        			// 폼 정보
        			this.objForm.CD_MODULE = this.dsAuthForm.getColumn(0, "CD_MODULE");
        			this.objForm.ID_FORM = this.dsAuthForm.getColumn(0, "ID_FORM");
        			this.objForm.NM_FORM = this.dsAuthForm.getColumn(0, "NM_FORM");
        			this.objForm.ID_GROUP = this.dsAuthForm.getColumn(0, "ID_GROUP");
        			this.objForm.GR_SEARCH = this.dsAuthForm.getColumn(0, "GR_SEARCH");
        			this.objForm.TY_AUTH = this.dsAuthForm.getColumn(0, "TY_AUTH");
        			this.objForm.DS_FORM = this.dsAuthForm.getColumn(0, "DS_FORM");
        			this.objForm.CD_ROLE = this.dsAuthForm.getColumn(0, "CD_ROLE");
        			this.objForm.TY_MENU = this.dsAuthForm.getColumn(0, "TY_MENU");
        			this.objForm.DS_PARAM = this.dsAuthForm.getColumn(0, "DS_PARAM");

        			// 버튼 정보
        			this.objForm.BtnInfo = [];
        			for(var i = 0; i < this.dsBtnInfo.rowcount; i++) {
        				var json = {};
        				json.ID_BUTTON = this.dsBtnInfo.getColumn(i, "ID_BUTTON");
        				json.DS_BUTTON = this.dsBtnInfo.getColumn(i, "DS_BUTTON");
        				json.TY_BUTTON = this.dsBtnInfo.getColumn(i, "TY_BUTTON");
        				json.RM_BUTTON = this.dsBtnInfo.getColumn(i, "RM_BUTTON");
        				json.YN_VISIBLE = this.dsBtnInfo.getColumn(i, "YN_VISIBLE");
        				json.YN_ENABLED = this.dsBtnInfo.getColumn(i, "YN_ENABLED");
        				json.YN_QUERYX = this.dsBtnInfo.getColumn(i, "YN_QUERYX");
        				json.YN_UPDATEBLOCK = this.dsBtnInfo.getColumn(i, "YN_UPDATEBLOCK");
        				json.SN_ORDER = this.dsBtnInfo.getColumn(i, "SN_ORDER");
        				this.objForm.BtnInfo.push(json);
        			}

        			var json = this.gfnArgsToJson(args);
        			if (json.type == "popup" || json.type == "dialog") {
        				if(this.objForm.TY_MENU == "Dialog") {
        					json.type = "dialog";
        				}
        				this.objForm.CD_MODULE = json.cd_module;
        				this.objForm.ID_FORM = json.id_form;
        				this.objForm.POP_WIDTH = this.gfnIsNull(json.width) ? 0: nexacro.toNumber(json.width);
        				this.objForm.POP_HEIGHT = this.gfnIsNull(json.height) ? 0: nexacro.toNumber(json.height);
        				this.objForm.POP_CALLBACK = this.gfnIsNull(json.callback) ? "": json.callback;
        				this.objForm.POP_ARGS = json;

        				this.gfnCallPopup(this.objForm, json.type);
        			}
        			else if (json.type == "ext") {
        				// 외부 다이렉트 화면 접근
        				var func = this.objApp.gvMainFrame.form.lookupFunc(json.callback);
        				if (func != null) {
        					func.call(this.objForm);
        				}
        			}
        			else {
        				this.gfnCallNew(this.objForm);
        			}
        		}
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			break;

        		case "ccfID_RESIDENT"://성명 - 주민번호
        			if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        				this.fnBeforeUserCallback = function() {
        						this.ccfCD_CORP.form.CDTextBox.setFocus();
        					}
        					this.gfnAlert("법인코드를 입력하세요.", "fnBeforeUserCallback");
        					return false;
        			}
        			dsUserParam.setColumn(nrow, "GUBUN", this.rdoTY_GUBUN.value);
        			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			break;

        		case "ccfCD_DEPT"://부서코드
        			if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        				this.fnBeforeUserCallback = function() {
        						this.ccfCD_CORP.form.CDTextBox.setFocus();
        					}
        					this.gfnAlert("법인코드를 입력하세요.", "fnBeforeUserCallback");
        					return false;
        			}
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);	// 로그인부서
        			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			dsUserParam.setColumn(nrow, "YN_CURRENT", "Y");
        			break;

        		default:
         	}
         	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	var arr = codeFindData;

        	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			this.ccfID_RESIDENT.form.CDTextBox.set_value("");
        			this.ccfID_RESIDENT.form.DSTextBox.set_value("");
        			this.ccfCD_DEPT.form.CDTextBox.set_value("");
        			this.ccfCD_DEPT.form.DSTextBox.set_value("");
        			break;

        		case "ccfID_RESIDENT"://성명
        			//this.ccfID_RESIDENT.form.CDTextBox.set_value(arr[0]["DS_HNAME"]);
        			//this.ccfID_RESIDENT.form.DSTextBox.set_value(arr[0]["ID_RESIDENT"]);
        			//this.ccfCD_DEPT.form.CDTextBox.set_value(arr[0]["CD_DEPT"]);
        			//this.ccfCD_DEPT.form.DSTextBox.set_value(arr[0]["DS_DEPT"]);
        			break;

        		case "ccfCD_DEPT"://부서
        // 			this.ccfID_RESIDENT.form.CDTextBox.set_value("");
        // 			this.ccfID_RESIDENT.form.DSTextBox.set_value("");
        			break;

        		default:
        	}

        	this.fnSearchInit();
        };


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        this.fnExtBtnEvent = function(btn){

        	var param = {};
        	var btnUrl;

        	// 필터로우가 있기때문에 데이터가 없어도 rowcount는 1 이다(필터로우 삭제할경우 0)
        	var numCnt = 0;
        	if(this.dsList.rowcount == 1 && this.gfnGetFlag(this.dsList, 0) == "#"){
        		numCnt = 1;
        	}

        	switch(btn.id){
        		case "btnExt_InitYearEnd": //기초정보생성
        			var Gubun_T = "N"; //노무자
        			var Gubun_E = "Y"; //임직원
        			var Gubun_All = "Y"; //전체
        			var Gubun_One = "N"; //특정주민번호
        			var CD_DEPT = "";
        			var DS_DEPT = "";
        			var ID_RESIDENT = "";
        			var DS_HNAME = "";
        			var NO_APPLY = "1";
        			var YN_QUERY = "Y";
        			var ID_SABUN = "";

        			var YN_MID = this.cboYN_MID.value;
        			var CD_CORP = this.ccfCD_CORP.form.CDTextBox.value;
        			var DS_CORP = this.ccfCD_CORP.form.DSTextBox.value;
        			var WORK_BASE = this.ctclYY_BASE.form.TextBox.value;

        			if(this.dsList.rowcount > numCnt){	// 필터로우가 있기때문에 데이터가 없어도 rowcount는 1 이다
        				Gubun_One = "Y";
        				YN_QUERY = "Y";
        				ID_RESIDENT = this.dsList.getColumn(this.dsList.rowposition, "ID_RESIDENT");
        				DS_HNAME = this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME");
        			}

        			if(this.dsList.rowcount > numCnt){	// 필터로우가 있기때문에 데이터가 없어도 rowcount는 1 이다
        				if(this.dsList.getColumn(this.dsList.rowposition, "GUBUN") != "임직원"){	// 노무자
        					Gubun_T = "Y";
        					CD_DEPT = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT");
        					DS_DEPT = this.dsList.getColumn(this.dsList.rowposition, "DS_ORG2");
        					ID_RESIDENT = this.dsList.getColumn(this.dsList.rowposition, "ID_RESIDENT");
        					DS_NAME = this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME");
        					ID_SABUN =this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN");
        				}else{
        					Gubun_E = "Y";
        					ID_SABUN =this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN");
        					ID_RESIDENT = this.dsList.getColumn(this.dsList.rowposition, "ID_RESIDENT");
        					DS_NAME = this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME");
        					NO_APPLY = this.dsList.getColumn(this.dsList.rowposition, "NO_APPLY");
        				}
        			}

        			param={
        				Gubun_T: Gubun_T,
        				Gubun_E: Gubun_E,
        				Gubun_All: Gubun_All,
        				Gubun_One: Gubun_One,
        				CD_DEPT: CD_DEPT,
        				DS_DEPT: DS_DEPT,
        				ID_RESIDENT: ID_RESIDENT,
        				DS_HNAME: DS_HNAME,
        				NO_APPLY: NO_APPLY,
        				WORK_BASE: WORK_BASE,
        				YN_MID: YN_MID,
        				CD_CORP: CD_CORP,
        				DS_CORP: DS_CORP,
        				YN_QUERY: YN_QUERY,
        				ID_SABUN: ID_SABUN
        				};
        			btnUrl = "DAV_INITYEARENDDLG";
        			this.gfnFormOpen(this.FormInfo.CD_MODULE, btnUrl, "fnPopupCallback", param);
        			break;
        		case "btnExt_InputData": //소득공제정보
        			var Gubun_T = "N"; //노무자
        			var Gubun_E = "N"; //임직원
        			var Gubun_All = "N"; //전체
        			var CD_DEPT = "";
        			var DS_DEPT = "";
        			var ID_RESIDENT = "";
        			var DS_NAME = "";
        			var ID_SABUN = "";
        			var NO_APPLY = "1";
        			var YN_MID = this.cboYN_MID.value;
        			var CD_CORP = this.ccfCD_CORP.form.CDTextBox.value;
        			var DS_CORP = this.ccfCD_CORP.form.DSTextBox.value;
        			var WORK_BASE = this.ctclYY_BASE.form.TextBox.value;

        			if(this.dsList.rowcount > numCnt){	// 필터로우가 있기때문에 데이터가 없어도 rowcount는 1 이다
        				if(this.dsList.getColumn(this.dsList.rowposition, "GUBUN") != "임직원"){	// 노무자
        					Gubun_T = "Y";
        					CD_DEPT = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT");
        					DS_DEPT = this.dsList.getColumn(this.dsList.rowposition, "DS_ORG2");
        					ID_RESIDENT = this.dsList.getColumn(this.dsList.rowposition, "ID_RESIDENT");
        					DS_NAME = this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME");
        					ID_SABUN =this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN");
        				}else{
        					Gubun_E = "Y";
        					ID_SABUN =this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN");
        					ID_RESIDENT = this.dsList.getColumn(this.dsList.rowposition, "ID_RESIDENT");
        					DS_NAME = this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME");
        					NO_APPLY = this.dsList.getColumn(this.dsList.rowposition, "NO_APPLY");
        				}
        			}

        			param={
        				Gubun_T: Gubun_T,
        				Gubun_E: Gubun_E,
        				Gubun_All: Gubun_All,
        				CD_DEPT: CD_DEPT,
        				DS_DEPT: DS_DEPT,
        				ID_RESIDENT: ID_RESIDENT,
        				DS_NAME: DS_NAME,
        				ID_SABUN: ID_SABUN,
        				NO_APPLY: NO_APPLY,
        				YN_MID: YN_MID,
        				CD_CORP: CD_CORP,
        				DS_CORP: DS_CORP,
        				WORK_BASE: WORK_BASE
        				};
        			btnUrl = "DAV_INPUTDATA";
        			//this.fnMenuOpen(this.FormInfo.CD_MODULE, btnUrl, "소득공제정보", param);
        			this.gfnFormOpen(this.FormInfo.CD_MODULE, btnUrl, "", param);
        			break;
        		case "btnExt_PreCompany": //전근무지정보
        			var Gubun_T = "N"; //노무자
        			var Gubun_E = "N"; //임직원
        			var Gubun_All = "N"; //전체
        			var CD_DEPT = "";
        			var DS_DEPT = "";
        			var ID_RESIDENT = "";
        			var DS_NAME = "";
        			var ID_SABUN = "";
        			var NO_APPLY = "1";
        			var YN_MID = this.cboYN_MID.value;
        			var CD_CORP = this.ccfCD_CORP.form.CDTextBox.value;
        			var DS_CORP = this.ccfCD_CORP.form.DSTextBox.value;
        			var YR_BASE = this.ctclYY_BASE.form.TextBox.value;

        			if(this.dsList.rowcount > numCnt){	// 필터로우가 있기때문에 데이터가 없어도 rowcount는 1 이다
        				if(this.dsList.getColumn(this.dsList.rowposition, "GUBUN") != "임직원"){	// 노무자
        					Gubun_T = "Y";
        					CD_DEPT = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT");
        					DS_DEPT = this.dsList.getColumn(this.dsList.rowposition, "DS_ORG2");
        					ID_RESIDENT = this.dsList.getColumn(this.dsList.rowposition, "ID_RESIDENT");
        					DS_NAME = this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME");
        					ID_SABUN = this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN");
        				}else{
        					Gubun_E = "Y";
        				}
        				ID_RESIDENT = this.dsList.getColumn(this.dsList.rowposition, "ID_RESIDENT");
        				ID_SABUN = this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN");
        				DS_NAME = this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME");
        				NO_APPLY = this.dsList.getColumn(this.dsList.rowposition, "NO_APPLY");
        			}

        			param={
        				Gubun_T: Gubun_T,
        				Gubun_E: Gubun_E,
        				Gubun_All: Gubun_All,
        				CD_DEPT: CD_DEPT,
        				DS_DEPT: DS_DEPT,
        				ID_RESIDENT: ID_RESIDENT,
        				DS_NAME: DS_NAME,
        				ID_SABUN: ID_SABUN,
        				NO_APPLY: NO_APPLY,
        				YN_MID: YN_MID,
        				CD_CORP: CD_CORP,
        				DS_CORP: DS_CORP,
        				YR_BASE: YR_BASE
        				};
        			btnUrl = "DAV_PRECOMPANY";
        			//this.fnMenuOpen(this.FormInfo.CD_MODULE, btnUrl, "전근무지 정보", param);
        			this.gfnFormOpen(this.FormInfo.CD_MODULE, btnUrl, "", param);
        			break;
        		case "btnExt_CalcTax": //세액계산
        			var Gubun_T = "N"; //노무자
        			var Gubun_E = "N"; //임직원
        			var Gubun_All = "N"; //전체
        			var Gubun_One = "N"; //특정주민번호
        			var CD_DEPT = "";
        			var DS_DEPT = "";
        			var ID_RESIDENT = "";
        			var ID_SABUN = "";
        			var DS_HNAME = "";
        			var NO_APPLY = "";
        			var YN_QUERY = "Y";

        			var YN_MID = this.cboYN_MID.value;
        			var CD_CORP = this.ccfCD_CORP.form.CDTextBox.value;
        			var DS_CORP = this.ccfCD_CORP.form.DSTextBox.value;
        			var WORK_BASE = this.ctclYY_BASE.form.TextBox.value;

        			if(this.dsList.getColumn(this.dsList.rowposition, "GUBUN") != "임직원"){	// 노무자
        				Gubun_T = "Y";
        				Gubun_E = "N"; //임직원
        				Gubun_All = "N"; //전체
        				Gubun_One = "Y";
        				CD_DEPT = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT");
        				DS_DEPT = this.dsList.getColumn(this.dsList.rowposition, "DS_ORG2");
        				ID_RESIDENT =this.dsList.getColumn(this.dsList.rowposition, "ID_RESIDENT");
        				DS_HNAME = this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME");
        				NO_APPLY = this.dsList.getColumn(this.dsList.rowposition, "NO_APPLY");
        			}else{
        				Gubun_E = "Y";
        				Gubun_T = "N"; //임직원
        				Gubun_All = "N"; //전체
        				Gubun_One = "Y";
        				ID_RESIDENT = this.dsList.getColumn(this.dsList.rowposition, "ID_RESIDENT");
        				ID_SABUN = this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN");
        				DS_HNAME = this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME");
        				NO_APPLY = this.dsList.getColumn(this.dsList.rowposition, "NO_APPLY");
        			}

        			param={
        				Gubun_T: Gubun_T,
        				Gubun_E: Gubun_E,
        				Gubun_All: Gubun_All,
        				Gubun_One: Gubun_One,
        				CD_DEPT: CD_DEPT,
        				DS_DEPT: DS_DEPT,
        				ID_RESIDENT: ID_RESIDENT,
        				ID_SABUN: ID_SABUN,
        				DS_HNAME: DS_HNAME,
        				NO_APPLY: NO_APPLY,
        				WORK_BASE: WORK_BASE,
        				YN_MID: YN_MID,
        				CD_CORP: CD_CORP,
        				DS_CORP: DS_CORP,
        				YN_QUERY: YN_QUERY
        				};
        			btnUrl = "DAV_CALCTAXDLG";
        			this.gfnFormOpen(this.FormInfo.CD_MODULE, btnUrl, "fnPopupCallback", param);
        			break;
        		case "btnExt_YearEnd": //결과조회
        			var Gubun_T = "N"; //노무자
        			var Gubun_E = "N"; //임직원
        			var Gubun_All = "N"; //전체
        			var CD_DEPT = "";
        			var DS_DEPT = "";
        			var ID_RESIDENT = "";
        			var DS_NAME = "";
        			var ID_SABUN = "";
        			var NO_APPLY = "1";
        			var YN_MID = this.cboYN_MID.value;
        			var CD_CORP = this.ccfCD_CORP.form.CDTextBox.value;
        			var DS_CORP = this.ccfCD_CORP.form.DSTextBox.value;
        			var YR_BASE = this.ctclYY_BASE.form.TextBox.value;

        			if(this.dsList.rowcount > numCnt){	// 필터로우가 있기때문에 데이터가 없어도 rowcount는 1 이다
        				if(this.dsList.getColumn(this.dsList.rowposition, "GUBUN") != "임직원"){	// 노무자
        					Gubun_T = "Y";
        					Gubun_E = "N"; //임직원
        					Gubun_All = "N"; //전체

        					CD_DEPT = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT");
        					DS_DEPT = this.dsList.getColumn(this.dsList.rowposition, "DS_ORG2");
        					ID_RESIDENT = this.dsList.getColumn(this.dsList.rowposition, "ID_RESIDENT");
        					DS_NAME = this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME");
        					ID_SABUN = this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN");
        				}else{
        					Gubun_T = "N";
        					Gubun_E = "Y"; //임직원
        					Gubun_All = "N"; //전체

        					ID_RESIDENT = this.dsList.getColumn(this.dsList.rowposition, "ID_RESIDENT");
        					ID_SABUN = this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN");
        					DS_NAME = this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME");
        					NO_APPLY = this.dsList.getColumn(this.dsList.rowposition, "NO_APPLY");
        				}

        			}

        			param={
        				Gubun_T: Gubun_T,
        				Gubun_E: Gubun_E,
        				Gubun_All: Gubun_All,
        				CD_DEPT: CD_DEPT,
        				DS_DEPT: DS_DEPT,
        				ID_RESIDENT: ID_RESIDENT,
        				DS_NAME: DS_NAME,
        				ID_SABUN: ID_SABUN,
        				NO_APPLY: NO_APPLY,
        				YN_MID: YN_MID,
        				CD_CORP: CD_CORP,
        				DS_CORP: DS_CORP,
        				YR_BASE: YR_BASE,
        				YearEndClose: this.edtYEAR_END_CLOSE.value,
        				WORK_BASE: this.ctclYY_BASE.form.TextBox.value //this.dsList.getColumn(this.dsList.rowposition, "YM_BASE")
        				};
        			btnUrl = "DAV_YEAREND";
        			this.gfnFormOpen(this.FormInfo.CD_MODULE, btnUrl, "fnFormCallback", param);
        			//this.fnMenuOpen(this.FormInfo.CD_MODULE, btnUrl, "결과조회", param);
        			break;
        		/*
        		case "btnExt_YearEndSubstRpt": // 공제서별 출력 (20200325 추가)
        			param={
        				WORK_BASE: this.ctclYY_BASE.form.TextBox.value,
        				CD_CORP: this.ccfCD_CORP.form.CDTextBox.value,
        				DS_CORP: this.ccfCD_CORP.form.DSTextBox.value
        				//YN_MID: this.cboYN_MID.value
        				};
        			btnUrl = "DAV_YEARENDSUBSTRPT_DLG";
        			this.gfnFormOpen(this.FormInfo.CD_MODULE, btnUrl, "fnPopupCallback", param);
        		break;
        		*/
        		case "btnExt_YearendTrans": //급여이관
        			param={
        				YN_MID: this.cboYN_MID.value,
        				YR_BASE: this.ctclYY_BASE.form.TextBox.value,
        				ID_SABUN: this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN"),
        				ID_RESIDENT: this.dsList.getColumn(this.dsList.rowposition, "ID_RESIDENT"),
        				DS_HNAME: this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME"),
        				NO_APPLY: this.dsList.getColumn(this.dsList.rowposition, "NO_APPLY"),
        				CD_CORP: this.ccfCD_CORP.form.CDTextBox.value,
        				DS_CORP: this.ccfCD_CORP.form.DSTextBox.value
        				};
        			//btnUrl = "DAV_YEARENDTRANSDLG";
        			btnUrl = "DAV_SALARYBASE"; //2022.02.22 이걸로 변경함
        			this.gfnFormOpen(this.FormInfo.CD_MODULE, btnUrl, "fnPopupCallback", param);
        			break;

        		case "btnExt_YearEndReceiptRpt": //원천징수영수증출력
        			param={
        				WORK_BASE: this.ctclYY_BASE.form.TextBox.value,
        				CD_CORP: this.ccfCD_CORP.form.CDTextBox.value,
        				DS_CORP: this.ccfCD_CORP.form.DSTextBox.value,
        				DS_HNAME: this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME"),
        				ID_RESIDENT: this.dsList.getColumn(this.dsList.rowposition, "ID_RESIDENT"),
        				YN_MID: this.cboYN_MID.value,
        				JUMP_FORM: "연말"
        				};
        			btnUrl = "DAV_YEARENDRECEIPTRPT_DLG";
        			this.gfnFormOpen(this.FormInfo.CD_MODULE, btnUrl, "", param);
        			break;
        		case "btnExt_YearEndCollect": //원천징수부출력
        			param={
        				WORK_BASE: this.ctclYY_BASE.form.TextBox.value + "12",
        				CD_CORP: this.ccfCD_CORP.form.CDTextBox.value,
        				DS_CORP: this.ccfCD_CORP.form.DSTextBox.value,
        				DS_HNAME: this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME"),
        				ID_RESIDENT: this.dsList.getColumn(this.dsList.rowposition, "ID_RESIDENT"),
        				YN_MID: this.cboYN_MID.value
        				};
        			//btnUrl = "DAU_YEARENDCOLLECT_DLG";
        			btnUrl = "DAV_YEARENDCOLLECT_DLG";
        			this.gfnFormOpen("DAV", btnUrl, "", param);
        			break;
        		case "btnExt_Close": //마감
        			var mes = "법인 " + this.ccfCD_CORP.form.CDTextBox.value + " 의 " + this.ctclYY_BASE.form.TextBox.value.substr(0,4) + "년도 연말정산을 마감합니다.  마감작업을 계속 수행하시겠습니까?";
        			this.gfnConfirm(mes, "fnConfirmClCallback");
        			break;
        		case "btnExt_CloseCancel": //마김해제
        			var mes = "법인 " + this.ccfCD_CORP.form.CDTextBox.value + " 의 " + this.ctclYY_BASE.form.TextBox.value.substr(0,4) + "년도 연말정산 마감을 해제합니다.  마감해제 작업을 계속 수행하시겠습니까?";
        			this.gfnConfirm(mes, "fnConfirmClCanClCallback");
        			break;
        		/*
        		case "btnExt_InputCancel": //입력해제
        			this.fnInputCancel();
        			break;
        		*/

        		default:
        	}
        };

        this.fnPopupCallback = function(strId, val) {
        	/*
        	if(strId.indexOf("DAV_CALCTAXDLG") > 0) {
        		if (val == true) {
        			this.gfnAlert("세액계산이 완료되었습니다.");
        		}
        	}else if(strId.indexOf("DAV_YEARENDTRANSDLG") > 0 ) {
        		if (val == true) {
        			this.gfnAlert("급여이관작업이 완료되었습니다.");
        		}
        	}
        	*/
        	this.FormBtns.Select.click();
        };

        this.fnFormCallback = function(strId, val) {
        	this.FormBtns.Select.click();
        }


        this.fnConfirmClCallback = function(strId, val)  {
        	if(val) {
        		this.fnClose("Y");
        	}
        };

        this.fnConfirmClCanClCallback = function(strId, val)  {
        	if(val) {
        		this.fnClose("N");
        	}
        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		// 폼상태 초기화
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);

        		this.edtYEAR_END_CLOSE.set_value("");
        	}
        };

        //마감
        this.fnClose = function(strClose){
        	this.dsClose.clearData();
        	var nrow = this.dsClose.addRow();

        	this.dsClose.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsClose.setColumn(nrow, "YY_BASE", this.ctclYY_BASE.form.TextBox.value);
        	this.dsClose.setColumn(nrow, "MM_BASE", "12");
        	this.dsClose.setColumn(nrow, "NO_APPLY", 1);
        	this.dsClose.setColumn(nrow, "YN_MID", this.cboYN_MID.value);
        	this.dsClose.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        	var inData ="";

        	if(strClose== "Y"){
        		inData = "close=dsClose";
        	}else{
        		inData = "closeCancel=dsClose";
        	}

        	var strSvcId    = "close";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
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
        };

        //입력해제
        this.fnInputCancel = function(){

        };

        this.dsList_onvaluechanged = function(obj,e)
        {
        	//this.fnSetButton();
        };

        this.fnMenuOpen = function(cd_module, id_form, nm_form, objArg) {
        	var authArg = "";

        	var id_win = cd_module + "#" + id_form;
        	var winid = this.objApp.gdsOpenMenu.lookup("ID_WIN", id_win, "ID_WIN");

        	if (!this.gfnIsNull(winid))
        	{
        		if (this.objApp.gvFormLimit == 1 && this.objApp.gvMdiFrame.form.isActiveFrame(winid) == true)
        		{
        			return false;
        		}
        		else if (this.objApp.gvFormLimit > 1 && this.objApp.gvFormLimit <= this.objApp.gvMdiFrame.form.isActiveFrameCount(winid)) {
        			this.objApp.gvMdiFrame.form.isActiveFrame(winid);
        			alert(this.objApp.gvFormLimit + "개 초과하여 같은 화면을 열수 없습니다");
        			return false;
        		}
        	}

        	//열린메뉴 체크( application.gvMax = 15)
        	if( this.objApp.gvMax <= this.objApp.gdsOpenMenu.getRowCount() ){

        		this.gfnAlert(this.objApp.gvMax +"개 초과하여 화면을 열수 없습니다");
        		return false;
        	}

        	this.objForm = {
        		CD_MODULE: cd_module,
        		ID_FORM: id_form,
        		NM_FORM: nm_form,
        		DS_FORM: "",
        		ID_GROUP: "",
        		GR_SEARCH: "",
        		TY_AUTH: "",
        		CD_ROLE: "",
        		Args : objArg
        	};

        	// 인증정보
        	this.fnAuthForm(this, cd_module, id_form, authArg);
        };

        this.fnAuthForm = function(objForm, cd_module, id_form, strArg)
        {
        	if(strArg == null) strArg = "";
        	this.objForm.CUR_FORM = objForm;

        	var dsUser = this.objApp.gdsUserInfo;
        	this._dsParamAuthForm.clearData();
        	this._dsParamAuthForm.addRow();
        	this._dsParamAuthForm.setColumn(0, "ID_USER", dsUser.getColumn(0, "ID_USER"));
        	this._dsParamAuthForm.setColumn(0, "CD_DEPT", dsUser.getColumn(0, "CD_DEPT"));
        	this._dsParamAuthForm.setColumn(0, "CD_CORP", dsUser.getColumn(0, "CD_CORP"));
        	this._dsParamAuthForm.setColumn(0, "ID_FORM", id_form);
        	this._dsParamAuthForm.setColumn(0, "CD_MODULE", cd_module);

        	this._dsParamBtnInfo.clearData();
        	this._dsParamBtnInfo.addRow();
        	this._dsParamBtnInfo.setColumn(0, "CD_CORP", dsUser.getColumn(0, "CD_CORP"));
        	this._dsParamBtnInfo.setColumn(0, "CD_DEPT", dsUser.getColumn(0, "CD_DEPT"));
        	this._dsParamBtnInfo.setColumn(0, "ID_SABUN", dsUser.getColumn(0, "ID_USER"));
        	this._dsParamBtnInfo.setColumn(0, "CD_MODULE", cd_module);
        	this._dsParamBtnInfo.setColumn(0, "ID_FORM", id_form);

        	var strSvcId    = "authform";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "dsAuthForm=_dsParamAuthForm dsBtnInfo=_dsParamBtnInfo";
        	var outData     = "dsAuthForm=dsAuthForm0 dsBtnInfo=dsBtnInfo0"; //"dsList=dsLogin1 dsList2=dsLogin2";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };
        this.DAV_YEARENDSTAT_onbeforeclose = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onbeforeclose",this.DAV_YEARENDSTAT_onbeforeclose,this);
            this.divSearch.form.cboYN_CLOSE.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.rdoTY_GUBUN.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DAV_YEARENDSTAT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
