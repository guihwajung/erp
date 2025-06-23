(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAV_MIDTARGET");
            this.set_titletext("중도정산 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAVPR_MIDTARGET_SELECT</Col></Row><Row><Col id=\"TARGET\">closeCheck</Col><Col id=\"SP\">DAVPR_CLOSE_CHECK</Col></Row><Row><Col id=\"TARGET\">insert-x</Col><Col id=\"SP\">DAVPR_MIDTARGET_INSERT</Col></Row><Row><Col id=\"TARGET\">update-x</Col><Col id=\"SP\">DAVPR_MIDTARGET_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete-x</Col><Col id=\"SP\">DAVPR_MIDTARGET_DELETE</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAVPR_MIDTARGET_SAVE</Col></Row><Row><Col id=\"TARGET\">retireInfoHis</Col><Col id=\"SP\">DAVPR_MIDTARGET_CREATE</Col></Row><Row><Col id=\"SP\">DAVPR_RETIRETHIS_INSERT</Col><Col id=\"TARGET\">retireInfoInsert</Col></Row><Row><Col id=\"SP\">DAVPR_FIXEDTAXUPDATE</Col><Col id=\"TARGET\">fixedTax</Col></Row><Row><Col id=\"TARGET\">close</Col><Col id=\"SP\">DAVPR_YEAREND_CLOSE</Col></Row><Row><Col id=\"TARGET\">closeCancel</Col><Col id=\"SP\">DAVPR_YEAREND_CLOSE_CANCEL</Col></Row><Row><Col id=\"TARGET\">cdKey</Col><Col id=\"SP\">DAVPR_YEAREND_CDKEY_INSERT</Col></Row><Row><Col id=\"TARGET\">chkAutoSlip</Col><Col id=\"SP\">DAVPR_YEAREND_CHKAUTOSLIP</Col></Row><Row><Col id=\"TARGET\">cancelAutoSlip</Col><Col id=\"SP\">DAVPR_YEAREND_AUTOSLIP_CANCEL</Col></Row><Row><Col id=\"TARGET\">dsAuthForm</Col><Col id=\"SP\">DZZPR_DOTNET_AUTHORITYFORM_SELECT_NEW</Col></Row><Row><Col id=\"TARGET\">slipCalc</Col><Col id=\"SP\">DAVPR_YEAREND_AUTOSLIP_CANCEL</Col></Row><Row><Col id=\"TARGET\">retirethisSel</Col><Col id=\"SP\">DAVPR_RETIRETHIS_SELECT</Col></Row><Row><Col id=\"TARGET\">retirethisIn</Col><Col id=\"SP\">DAVPR_RETIRETHIS_INSERT</Col></Row></Rows>");
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


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("법인");
            obj.set_visible("true");
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

            obj = new Static("staYM_BASE","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("작업년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_BASE","staYM_BASE:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnRetireInfo",null,"10.0","150","24.0","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("퇴직자 정보가져오기");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_MID","btnRetireInfo:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_visible("false");
            var divSearch_form_cboYN_MID_innerdataset = new nexacro.NormalDataset("divSearch_form_cboYN_MID_innerdataset", obj);
            divSearch_form_cboYN_MID_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">중도정산</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">연말정산</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboYN_MID_innerdataset);
            obj.set_text("중도정산");
            obj.set_value("Y");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtYEAR_END_CLOSE","cboYN_MID:0.0","10.0","30","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_readonly("false");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.getSetter("BeforeUserDataSetParam").set("fnGrid_BeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnGrid_AfterCDTextChanged");
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
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DAV_MIDTARGET.xfdl", function() {
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

        	//작업년월(현재월)
        	this.ctclYM_BASE.form.TextBox.set_value(this.gfnGetDate().substr(0,6));

        	// 법인코드 및 법인명 기본세팅
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
            this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        	//this.FormBtns.Select.click();

        	this.btnInitYearEnd.set_enable(false);
        	this.btnPreCompany.set_enable(false);
        	this.btnCalcTax.set_enable(false);

        	this.btnYearEnd.set_enable(false);
        	this.btnYearEndReceiptRpt.set_enable(false);
        	this.btnYearEndCollect.set_enable(false);

        //20210730 Blocked
        // 	this.btnInsetSlip.set_enable(false);
        // 	this.btnCancelSlip.set_enable(false);
        // 	this.btnSelectSlip.set_enable(false);

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	// this.FormBtns.Add.set_enable(false);
        	// this.FormBtns.Del.set_enable(false);
        	//this.FormBtns.Reset.set_enable(true);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnInitYearEnd = this.gfnFormButtonAdd("InitYearEnd", "fnExtBtnEvent", "기초정보생성");
        	//this.btnInputData = this.gfnFormButtonAdd("InputData", "fnExtBtnEvent", "소득공제정보");
        	this.btnPreCompany 	= this.gfnFormButtonAdd("PreCompany", "fnExtBtnEvent", "전근무지정보");
        	this.btnCalcTax = this.gfnFormButtonAdd("CalcTax", "fnExtBtnEvent", "세액계산");
        	this.btnYearEnd = this.gfnFormButtonAdd("YearEnd", "fnExtBtnEvent", "결과조회");
        	this.btnYearEndReceiptRpt = this.gfnFormButtonAdd("YearEndReceiptRpt", "fnExtBtnEvent", "원천징수영수증출력");
        	this.btnYearEndCollect = this.gfnFormButtonAdd("YearEndCollect", "fnExtBtnEvent", "원천징수부출력");

        	//20210730 Blocked
        // 	this.btnInsetSlip = this.gfnFormButtonAdd("InsetSlip", "fnExtBtnEvent", "전표발행");
        // 	this.btnCancelSlip = this.gfnFormButtonAdd("CancelSlip", "fnExtBtnEvent", "전표취소");
        // 	this.btnSelectSlip = this.gfnFormButtonAdd("SelectSlip", "fnExtBtnEvent", "전표조회");

        	//this.btnEsign = this.gfnFormButtonAdd("Esign", "fnExtBtnEvent", "결재의뢰");
        	//this.btnSelectEsign = this.gfnFormButtonAdd("SelectEsign", "fnExtBtnEvent", "결재조회");

        	// 20200416 주석 this.btnFixedTaxUpdate = this.gfnFormButtonAdd("FixedTaxUpdate", "fnExtBtnEvent", "세액조정");
        };



        this.fnSetButtonEnableSet = function() {

        }
        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	//작업년월
        	this.ctclYM_BASE = this.divSearch.form.ctclYM_BASE;

        	//법인코드
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;

        	//작업구분
        	this.cboYN_MID = this.divSearch.form.cboYN_MID;

        	this.edtYEAR_END_CLOSE = this.divSearch.form.edtYEAR_END_CLOSE;

        	//그리드
        	this.dxGrid = this.divData.form.objGrid;

        	this.grSearch = this.FormInfo.GR_SEARCH;					          // 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;					          // 그룹코드
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAV_MIDTARGET");

        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	//조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YM_BASE", "string");
        	this.dsSelect.addColumn("NO_APPLY", "int");
        	this.dsSelect.addColumn("GUBUN", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("YM_BASE", "string");
        	this.dsSave.addColumn("NO_APPLY", "bigdecimal");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("DT_START", "string");
        	this.dsSave.addColumn("DT_END", "string");
        	this.dsSave.addColumn("ID_INSERT", "string");


        // 	//입력
        // 	this.dsInsert = new Dataset();
        // 	this.dsInsert.addColumn("YM_BASE", "string");
        // 	this.dsInsert.addColumn("NO_APPLY", "int");
        // 	this.dsInsert.addColumn("ID_RESIDENT", "string");
        // 	this.dsInsert.addColumn("ID_SABUN", "string");
        // 	this.dsInsert.addColumn("CD_DEPT", "string");
        // 	this.dsInsert.addColumn("CD_CORP", "string");
        // 	this.dsInsert.addColumn("CD_PAYSTEP", "string");
        // 	this.dsInsert.addColumn("DT_START", "string");
        // 	this.dsInsert.addColumn("DT_END", "string");
        // 	this.dsInsert.addColumn("ID_INSERT", "string");
        // 	//수정
        // 	this.dsUpdate = new Dataset();
        // 	this.dsUpdate.addColumn("YM_BASE", "string");
        // 	this.dsUpdate.addColumn("NO_APPLY", "int");
        // 	this.dsUpdate.addColumn("ID_RESIDENT", "string");
        // 	this.dsUpdate.addColumn("DT_START", "string");
        // 	this.dsUpdate.addColumn("DT_END", "string");
        // 	this.dsUpdate.addColumn("ID_UPDATE", "string");
        // 	this.dsUpdate.addColumn("CD_CORP", "string");
        // 	this.dsUpdate.addColumn("CD_NATIONALITY", "string");
        // 	this.dsUpdate.addColumn("YN_HOUSEHOLDER", "string");
        // 	//삭제
        // 	this.dsDelete = new Dataset();
        // 	this.dsDelete.addColumn("YM_BASE", "string");
        // 	this.dsDelete.addColumn("NO_APPLY", "int");
        // 	this.dsDelete.addColumn("ID_RESIDENT", "string");
        // 	this.dsDelete.addColumn("CD_CORP", "string");

        	this.dsSlipCalc = new Dataset();
        	this.dsSlipCalc.addColumn("YM_BASE", "string");
        	this.dsSlipCalc.addColumn("ID_RESIDENT", "string");
        	this.dsSlipCalc.addColumn("CD_CORP", "string");


        	//결정세액
        	this.dsFixedTaxUpdate = new Dataset();
        	this.dsFixedTaxUpdate.addColumn("CD_CORP", "string");
        	this.dsFixedTaxUpdate.addColumn("ID_RESIDENT", "string");
        	this.dsFixedTaxUpdate.addColumn("ID_SABUN", "string");
        	this.dsFixedTaxUpdate.addColumn("YM_BASE", "string");
        	this.dsFixedTaxUpdate.addColumn("NO_APPLY", "bigdecimal");
        	this.dsFixedTaxUpdate.addColumn("ID_UPDATE", "string");

        	//퇴직자정보 가져오기
        // 	this.dsRetiSel = new Dataset();
        // 	this.dsRetiSel.addColumn("YM_BASE", "string");
        // 	this.dsRetiSel.addColumn("CD_CORP", "string");
        // 	this.dsRetiSel.addColumn("GUBUN", "string");
        // 	this.dsRetiSel.addColumn("ID_INSERT", "string");
        	this.dsRetiIn = new Dataset();
        	this.dsRetiIn.addColumn("YM_BASE", "string");
        	this.dsRetiIn.addColumn("CD_CORP", "string");
        	this.dsRetiIn.addColumn("GUBUN", "string");
        	this.dsRetiIn.addColumn("ID_INSERT", "string");


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

        	this.dsSelect.setColumn(0, "YM_BASE", this.ctclYM_BASE.form.TextBox.value);
        	this.dsSelect.setColumn(0, "NO_APPLY", 1);
        	this.dsSelect.setColumn(0, "GUBUN", "E");
        	this.dsSelect.setColumn(0, "CD_DEPT", "");
        	this.dsSelect.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
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
        	var nrow = this.gfnGridAdd(this.dxGrid);

        	this.btnInitYearEnd.set_enable(false);
        	this.btnPreCompany.set_enable(false);
        	this.btnCalcTax.set_enable(false);
        //20210730 Blocked
        // 	this.btnInsetSlip.set_enable(false);
        // 	this.btnCancelSlip.set_enable(false);
        // 	this.btnSelectSlip.set_enable(false);

        	this.dsList.setColumn(nrow, "YM_BASE", this.ctclYM_BASE.form.TextBox.value);
        	this.dsList.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsList.setColumn(nrow, "DS_CORP", this.ccfCD_CORP.form.DSTextBox.value);


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

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "YM_BASE", this.dsList.getColumn(i, "YM_BASE"));
        				this.dsSave.setColumn(nrow, "NO_APPLY", this.dsList.getColumn(i, "NO_APPLY"));
        				this.dsSave.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        				this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsSave.setColumn(nrow, "DT_START", this.dsList.getColumn(i, "DT_START"));
        				this.dsSave.setColumn(nrow, "DT_END", this.dsList.getColumn(i, "DT_END"));
        				this.dsSave.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
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
        };


        // this.fnSave = function() {
        // //  그리드 필수항목 체크
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
        //
        // 		/*
        // 		if(flag == "U"){
        // 			if(this.dsList.getColumn(i, "YN_UPDATE") != "Y"){
        // 				this.gfnAlert("국적코드, 세대주여부 저장전에 반드시 기초정보생성이 필요합니다.");
        // 				return;
        // 			}
        // 		}
        // 		*/
        //
        // 		switch(flag) {
        // 			case "I":
        // 				var nrow = this.dsInsert.addRow();
        //
        // 				this.dsInsert.setColumn(nrow, "YM_BASE", this.ctclYM_BASE.form.TextBox.value);
        // 				//this.dsInsert.setColumn(nrow, "NO_APPLY", this.dsList.getColumn(i, "NO_APPLY"));
        // 				this.dsInsert.setColumn(nrow, "NO_APPLY", 1);
        // 				this.dsInsert.setColumn(nrow, "ID_RESIDENT", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(i, "ID_RESIDENT"),""), "-", ""));
        // 				this.dsInsert.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        // 				this.dsInsert.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        // 				this.dsInsert.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        // 				this.dsInsert.setColumn(nrow, "CD_PAYSTEP", this.dsList.getColumn(i, "CD_PAYSTEP"));
        // 				this.dsInsert.setColumn(nrow, "DT_START", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(i, "DT_START"),""), "-", ""));
        // 				this.dsInsert.setColumn(nrow, "DT_END", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(i, "DT_END"),""), "-", ""));
        // 				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        // 				break;
        // 			case "U":
        // 				var nrow = this.dsUpdate.addRow();
        //
        // 				this.dsUpdate.setColumn(nrow, "YM_BASE", this.ctclYM_BASE.form.TextBox.value);
        // 				this.dsUpdate.setColumn(nrow, "NO_APPLY", this.dsList.getColumn(i, "NO_APPLY"));
        // 				this.dsUpdate.setColumn(nrow, "ID_RESIDENT", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(i, "ID_RESIDENT"),""), "-", ""));
        // 				this.dsUpdate.setColumn(nrow, "DT_START", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(i, "DT_START"),""), "-", ""));
        // 				this.dsUpdate.setColumn(nrow, "DT_END", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(i, "DT_END"),""), "-", ""));
        // 				this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        // 				this.dsUpdate.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        // 				this.dsUpdate.setColumn(nrow, "CD_NATIONALITY", this.dsList.getColumn(i, "CD_NATIONALITY"));
        // 				this.dsUpdate.setColumn(nrow, "YN_HOUSEHOLDER", this.dsList.getColumn(i, "YN_HOUSEHOLDER"));
        // 				break;
        // 			case "D":
        // 				var nrow = this.dsDelete.addRow();
        //
        // 				this.dsDelete.setColumn(nrow, "YM_BASE", this.ctclYM_BASE.form.TextBox.value);
        // 				this.dsDelete.setColumn(nrow, "NO_APPLY", this.dsList.getColumn(i, "NO_APPLY"));
        // 				this.dsDelete.setColumn(nrow, "ID_RESIDENT", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(i, "ID_RESIDENT"),""), "-", ""));
        // 				this.dsDelete.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        // 				break;
        // 		}
        // 	}
        //
        // 	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;
        //
        // 	var strSvcId    = "save";
        // 	var strSvcType  = "save";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
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
        // };



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
        };
        /*
         *	리셋 버튼
         */
        this.fnReset = function() {
        	this.ctclYM_BASE.form.TextBox.set_value("");
        	this.ccfCD_CORP.form.CDTextBox.set_value("");
        	this.ccfCD_CORP.form.DSTextBox.set_value("");
        };
        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {

         	var validate = true;

        	//작업년월
        	if (this.gfnIsNull(this.ctclYM_BASE.form.TextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.ctclYM_BASE.form.TextBox.setFocus();
        		}
        		this.gfnAlert("작업년월을 입력하세요.");
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

        		// 필터로우가 있기때문에 데이터가 없어도 rowcount는 1 이다(필터로우 삭제할경우 0)
        		var numCnt = 0;
        		if(this.dsList.rowcount == 1 && this.gfnGetFlag(this.dsList, 0) == "#"){
        			numCnt = 1;
        		}

        		if(this.dsList.rowcount > numCnt){
        			this.btnInitYearEnd.set_enable(true);
        			this.btnPreCompany.set_enable(true);
        			this.btnCalcTax.set_enable(true);
        			this.btnYearEnd.set_enable(true);
        			this.btnYearEndReceiptRpt.set_enable(true);
        			this.btnYearEndCollect.set_enable(true);

        			if(this.dsList.getColumn(0, "YN_SLIP") == "Y"){
        			//20210730 Blocked
        // 				this.btnInsetSlip.set_enable(false);
        // 				this.btnCancelSlip.set_enable(true);
        // 				this.btnSelectSlip.set_enable(true);
        			}else{
        			//20210730 Blocked
        // 				this.btnInsetSlip.set_enable(true);
        // 				this.btnCancelSlip.set_enable(false);
        // 				this.btnSelectSlip.set_enable(false);
        			}
        		}else{
        			this.btnInitYearEnd.set_enable(false);
        			this.btnPreCompany.set_enable(false);
        			this.btnCalcTax.set_enable(false);
        			this.btnYearEnd.set_enable(false);
        			this.btnYearEndReceiptRpt.set_enable(false);
        			this.btnYearEndCollect.set_enable(false);

        			//20210730 Blocked
        // 			this.btnInsetSlip.set_enable(false);
        // 			this.btnCancelSlip.set_enable(false);
        // 			this.btnSelectSlip.set_enable(false);
        		}

        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if (svcID == "slipCalc") {
        		if(errorCode == 0){
        			this.fnSlipVaidateCallback = function() {
        				this.FormBtns.Select.click();
        			}
        			this.gfnAlert("전표취소작업에 성공하였습니다.", "fnSlipVaidateCallback");
        		}else{
        			this.gfnAlert(errorMsg);
        		}
        // 	}else if (svcID == "retirethisSel") {
        // 		if(this.dsList2.rowcount > 0){
        // 			this.fnRetirethisSave();
        // 		}else{
        // 			this.gfnAlert("적용년도 기준 추가입력 대상 퇴직자가 존재하지 않습니다.");
        // 		}
        	}else if(svcID == "retirethisIn") {
        		if (errorCode == 0) {
        			this.fnRetirethisInCallback = function() {
        				this.FormBtns.Select.click();
        			}
        			this.gfnAlert("작업이 완료되었습니다.", "fnRetirethisInCallback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}


        	// 요밑은 사용않함
        	else if(svcID =="retireInfoHis"){ // 퇴직자 정보 생성
        		if (errorCode == 0) {
        			this.gfnAlert("퇴직자 정보 입력이 완료되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "fixedTax"){
        		if (errorCode == 0) {
        			this.gfnAlert("세액 조정이 완료되었습니다.");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if (svcID == "authform") {
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

         	default:
         	}
         	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	this.fnSearchInit();

        };

        //그리드 코드파인드
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){

        	switch(id) {
        		case "DAX_CFBASEINFO_ALL":
        			dsUserParam.setColumn(nrow, "CD_CORP", this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "YN_CORP", "Y");
        			dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        			break;

        		default:
        	}

        	return true;
        };
        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        };
        /************************************************************************
        * 그리드 이벤트
        ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {

        		if(this.dsList.getColumn(this.dsList.rowposition, "YN_CALTAX") == "Y"){
        			if(this.dsList.getColumn(this.dsList.rowposition, "YN_SLIP") == "Y"){
        			//20210730 Blocked
        // 				this.btnInsetSlip.set_enable(false);
        // 				this.btnCancelSlip.set_enable(true);
        // 				this.btnSelectSlip.set_enable(true);
        			}else{
        			//20210730 Blocked
        // 				this.btnInsetSlip.set_enable(true);
        // 				this.btnCancelSlip.set_enable(false);
        // 				this.btnSelectSlip.set_enable(false);
        			}
        		}else{
        		//20210730 Blocked
        // 			this.btnInsetSlip.set_enable(false);
        // 			this.btnCancelSlip.set_enable(false);
        // 			this.btnSelectSlip.set_enable(false);
        		}

        		obj.oldrow = -1;
        	}
        };
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
        			var Gubun_E = "N"; //임직원
        			var Gubun_All = "N"; //전체
        			var Gubun_One = "N"; //특정주민번호
        			var CD_DEPT = "";
        			var DS_DEPT = "";
        			var ID_RESIDENT = "";
        			var DS_HNAME = "";
        			var NO_APPLY = "";
        			var YN_QUERY = "Y";
        			var ID_SABUN = "";

        			var YN_MID = this.cboYN_MID.value;
        			var CD_CORP = this.ccfCD_CORP.form.CDTextBox.value;
        			var DS_CORP = this.ccfCD_CORP.form.DSTextBox.value;
        			var WORK_BASE = this.ctclYM_BASE.form.TextBox.value;

        			Gubun_E = "Y";
        			Gubun_All = "Y";
        			NO_APPLY = "1";

        			if(this.dsList.rowcount > numCnt){	// 필터로우가 있기때문에 데이터가 없어도 rowcount는 1 이다
        				Gubun_One = "Y";
        				YN_QUERY = "Y";
        				ID_RESIDENT = this.dsList.getColumn(this.dsList.rowposition, "ID_RESIDENT");
        				DS_HNAME = this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME");
        				NO_APPLY = this.dsList.getColumn(this.dsList.rowposition, "NO_APPLY");
        				ID_SABUN = this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN");
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
        			var YR_BASE = this.ctclYM_BASE.form.TextBox.value;

        			if(this.dsList.rowcount > numCnt){	// 필터로우가 있기때문에 데이터가 없어도 rowcount는 1 이다
        				if(this.dsList.getColumn(this.dsList.rowposition, "GUBUN") != "임직원"){	// 노무자
        					Gubun_T = "Y";
        					CD_DEPT = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT");
        					DS_DEPT = this.dsList.getColumn(this.dsList.rowposition, "DS_DEPT");
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
        				YR_BASE: YR_BASE,
        				WORK_BASE: this.dsList.getColumn(this.dsList.rowposition, "YM_BASE")
        				};
        			btnUrl = "DAV_PRECOMPANY";
        			//this.fnMenuOpen(this.FormInfo.CD_MODULE, btnUrl, "전근무지 정보", param);
        			this.gfnFormOpen(this.FormInfo.CD_MODULE, btnUrl, "", param);
        			break;
        		/*
        		case "btnExt_InputData": //소득공제정보
        			param={
        				WORK_BASE: this.ctclYM_BASE.form.TextBox.value,
        				CD_CORP: this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"),
        				DS_CORP: this.dsList.getColumn(this.dsList.rowposition, "DS_CORP"),
        				YN_MID: this.cboYN_MID.value,
        				ID_RESIDENT: this.dsList.getColumn(this.dsList.rowposition, "ID_RESIDENT"),
        				DS_HNAME:this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME"),
        				ID_SABUN:this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN")
        				};
        			btnUrl = "DAV_INPUTDATA";
        			this.fnMenuOpen(this.FormInfo.CD_MODULE, btnUrl, "소득공제정보", param);
        			break;
        		*/
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
        			var WORK_BASE = this.ctclYM_BASE.form.TextBox.value;

        			if(this.dsList.getColumn(this.dsList.rowposition, "GUBUN") != "임직원"){	// 노무자
        				Gubun_T = "Y";
                        Gubun_One = "Y";
        				CD_DEPT = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT");
        				DS_DEPT = this.dsList.getColumn(this.dsList.rowposition, "DS_DEPT");
        				ID_RESIDENT =this.dsList.getColumn(this.dsList.rowposition, "ID_RESIDENT");
        				DS_HNAME = this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME");
        				NO_APPLY = this.dsList.getColumn(this.dsList.rowposition, "NO_APPLY");
        			}else{
        				Gubun_E = "Y";
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
        			var YR_BASE = this.ctclYM_BASE.form.TextBox.value;

        			if(this.dsList.rowcount > numCnt){	// 필터로우가 있기때문에 데이터가 없어도 rowcount는 1 이다
        				if(this.dsList.getColumn(this.dsList.rowposition, "GUBUN") != "임직원"){	// 노무자
        					Gubun_T = "Y";

        					CD_DEPT = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT");
        					DS_DEPT = this.dsList.getColumn(this.dsList.rowposition, "DS_DEPT");
        					ID_RESIDENT = this.dsList.getColumn(this.dsList.rowposition, "ID_RESIDENT");
        					DS_NAME = this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME");
        					ID_SABUN = this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN");
        				}else{
        					Gubun_E = "Y";

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
        				WORK_BASE: this.dsList.getColumn(this.dsList.rowposition, "YM_BASE")
        				};
        			btnUrl = "DAV_YEAREND";
        			//this.fnMenuOpen(this.FormInfo.CD_MODULE, btnUrl, "결과조회", param);
        			this.gfnFormOpen(this.FormInfo.CD_MODULE, btnUrl, "fnFormCallback", param);
        			break;
        		case "btnExt_YearEndReceiptRpt": //원천징수영수증출력
        			param={
        				WORK_BASE: this.ctclYM_BASE.form.TextBox.value,
        				CD_CORP: this.ccfCD_CORP.form.CDTextBox.value,
        				DS_CORP: this.ccfCD_CORP.form.DSTextBox.value,
        				DS_HNAME:this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME"),
        				ID_RESIDENT: this.dsList.getColumn(this.dsList.rowposition, "ID_RESIDENT"),
        				ID_SABUN: this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN"),
        				YN_MID: this.cboYN_MID.value,
        				JUMP_FORM: "중도"
        				};
        			btnUrl = "DAV_YEARENDRECEIPTRPT_DLG";
        			this.gfnFormOpen(this.FormInfo.CD_MODULE, btnUrl, "", param);
        			break;
        		case "btnExt_YearEndCollect": //원천징수부출력
        			param={
        				WORK_BASE: this.ctclYM_BASE.form.TextBox.value,
        				CD_CORP: this.ccfCD_CORP.form.CDTextBox.value,
        				DS_CORP: this.ccfCD_CORP.form.DSTextBox.value,
        				DS_HNAME:this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME"),
        				ID_RESIDENT: this.dsList.getColumn(this.dsList.rowposition, "ID_RESIDENT"),
        				ccboYN_MID: this.cboYN_MID.value
        				};
        			//btnUrl = "DAU_YEARENDCOLLECT_DLG";
        			btnUrl = "DAV_YEARENDCOLLECT_DLG";
        			this.gfnFormOpen("DAV", btnUrl, "", param);
        			break;
        		case "btnExt_InsetSlip": //전표발행
        			if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        			if(this.dsList.getColumn(this.dsList.rowposition, "YN_SLIP") != "N"){
        				this.gfnAlert("전표발행할 대상이 아닙니다.");
        				return;
        			}

        			this.gfnConfirm("전표발행 하시겠습니까?", "fnSlip_callback");
        			break;
        		case "btnExt_CancelSlip": //전표취소
        			if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        			this.gfnConfirm("근로중도정산 자동전표를 취소 하시겠습니까?", "fnExec_callback");
        			break;
        		case "btnExt_SelectSlip": //전표조회
        			if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        			if (this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE")))) {
        				this.gfnAlert("전표번호는 필수입니다.");
        				return;
        			}

        			var cdSlip = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE")).substr(0,14);

        			var param = {};
        			param.IUD_FLAG = "S";
        			param.CD_TRADE = cdSlip;
        			this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnFormCallback", param, this.getOffsetWidth(), this.getOffsetHeight());
        			break;
        		case "btnExt_Esign": //결재의뢰
        			this.gfnAlert("결재의뢰 준비중");
        			break;
        		case "btnExt_SelectEsign": //결재조회
        			this.gfnAlert("결재조회 준비중");
        			break;
        		/*
        		case "btnExt_FixedTaxUpdate": //세액조정
        			this.fnFixedTaxUpdate();
        			break;
        		*/
        		default:
        	}
        };

        this.fnPopupCallback = function(strId, val) {
        	/*
        	if(strId.indexOf("DAV_INITYEARENDDLG") > 0) {
        		if (val == true) {
        			this.gfnAlert("정산 기초정보 생성이 완료되었습니다.");
        		}
        	}else if(strId.indexOf("DAV_CALCTAXDLG") > 0) {
        		if (val == true) {
        			this.gfnAlert("세액계산이 완료되었습니다.");
        			this.FormBtns.Select.click();
        		}
        	}
        	*/
        	this.FormBtns.Select.click();
        };

        this.fnFormCallback = function(strId, val) {
        	this.FormBtns.Select.click();
        }

        // 전표발행 버튼 클릭 후 callback
        this.fnSlip_callback = function(strId, val)
        {
        	if(val == true) {
        		param={
        				ID_SABUN: this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN"),
        				YM_BASE: this.ctclYM_BASE.form.TextBox.value,
        				CD_CORP: this.ccfCD_CORP.form.CDTextBox.value
        				};
        		btnUrl = "DAV_YEARENDAUTOSLIP_DLG";
        		//this.fnMenuOpen(this.FormInfo.CD_MODULE, btnUrl, "결과조회", param);
        		this.gfnFormOpen(this.FormInfo.CD_MODULE, btnUrl, "fnFormCallback", param);
        	}
        }

        // 전표취소 버튼 클릭 후 callback
        this.fnExec_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsSlipCalc.clearData();
        		this.dsSlipCalc.addRow();

        		this.dsSlipCalc.setColumn(0, "YM_BASE", this.ctclYM_BASE.form.TextBox.value);
        		this.dsSlipCalc.setColumn(0, "ID_RESIDENT", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "ID_RESIDENT"),""), "-", ""));
        		this.dsSlipCalc.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);

        		var strSvcId    = "slipCalc";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "slipCalc=dsSlipCalc";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}
        }
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

        		this.btnInitYearEnd.set_enable(false);
        		this.btnPreCompany.set_enable(false);
        		this.btnCalcTax.set_enable(false);

        		this.btnYearEnd.set_enable(false);
        		this.btnYearEndReceiptRpt.set_enable(false);
        		this.btnYearEndCollect.set_enable(false);

        //20210730 Blocked
        // 		this.btnInsetSlip.set_enable(false);
        // 		this.btnCancelSlip.set_enable(false);
        // 		this.btnSelectSlip.set_enable(false);
        	}
        };

        //퇴직자 정보 가져오기
        this.divSearch_btnRetireInfo_onclick = function(obj,e)
        {
        	//this.gfnConfirm((this.ctclYM_BASE.form.TextBox.value).substr(0,4)+"년 "+(this.ctclYM_BASE.form.TextBox.value).substr(4,6)+"월 퇴직자 정보를 입력합니다. 이전에 입력된 자료는 보존되며 추가정보만 입력됩니다. \n작업을 계속 수행하시겠습니까?", "fnRetireInfoCallback");
        	this.gfnConfirm((this.ctclYM_BASE.form.TextBox.value).substr(0,4)+"년 "+(this.ctclYM_BASE.form.TextBox.value).substr(4,6)+"월 퇴직자 정보를 입력합니다. 이전에 입력된 자료는 보존되며 추가정보만 입력됩니다. \n작업을 계속 수행하시겠습니까?", "fnRetirethisSave");
        };

        // this.fnRetireInfoCallback = function(svcID, value){
        // 	if(value) {
        // 		//퇴직자 정보 입력 - retireInfo
        // 		this.dsRetiSel.clearData();
        // 		this.dsRetiSel.addRow();
        //
        // 		this.dsRetiSel.setColumn(0, "YM_BASE", this.ctclYM_BASE.form.TextBox.value);
        // 		this.dsRetiSel.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        // 		this.dsRetiSel.setColumn(0, "GUBUN", "E");
        //
        //
        // 		var strSvcId    = "retirethisSel";
        // 		var strSvcType  = "grid";
        // 		var inProc		= "_dsProc";
        // 		var inData      = "retirethisSel=dsRetiSel";
        // 		var outData     = "dsList2=retirethisSel0";
        // 		var strArg      = "";
        // 		var callBackFnc = "fnCallback";
        //
        // 		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 							strSvcType , 	// trabsaction을 요청할 구분
        // 							inProc,			// Procedure 정보 Dataset 이름
        // 							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 							strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 							callBackFnc); // 통신방법 정의 [생략가능]
        //  	}
        // };


        // 퇴직자정보입력 생성
        this.fnRetirethisSave = function(strId, val)
        {
        	if(val == true) {
        		this.dsRetiIn.clearData();
        		this.dsRetiIn.addRow();

        		this.dsRetiIn.setColumn(0, "YM_BASE", this.ctclYM_BASE.form.TextBox.value);
        		this.dsRetiIn.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		this.dsRetiIn.setColumn(0, "GUBUN", "E");
        		this.dsRetiIn.setColumn(0, "ID_INSERT", this.AuthClient.ID_USER);

        		var strSvcId    = "retirethisIn";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "retirethisIn=dsRetiIn";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}
        }


        /*
        //세액조정
        this.fnFixedTaxUpdate = function(){
        	this.gfnConfirm("사간전보 대상자의 결정세액 조정 작업을 진행합니다.\n작업을 계속 수행하시겠습니까? ","fnFixedTaxUpdateCallback");
        };
        this.fnFixedTaxUpdateCallback = function(id, val){

        	if(val) {

        		var rowPos = this.dsList.rowposition;
        		this.dsFixedTaxUpdate.clearData();
        		var nrow = this.dsFixedTaxUpdate.addRow();

        		this.dsFixedTaxUpdate.setColumn(nrow, "CD_CORP", this.dsList.getColumn(rowPos, "CD_CORP"));
        		this.dsFixedTaxUpdate.setColumn(nrow, "ID_RESIDENT", this.dsList.getColumn(rowPos, "ID_RESIDENT"));
        		this.dsFixedTaxUpdate.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(rowPos, "ID_SABUN"));
        		this.dsFixedTaxUpdate.setColumn(nrow, "YM_BASE", this.dsList.getColumn(rowPos, "YM_BASE"));
        		this.dsFixedTaxUpdate.setColumn(nrow, "NO_APPLY", this.dsList.getColumn(rowPos, "NO_APPLY"));
        		this.dsFixedTaxUpdate.setColumn(nrow, "ID_UPDATE", this.dsList.getColumn(rowPos, "ID_UPDATE"));

        		var strSvcId    = "fixedTax";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "fixedTax=dsFixedTaxUpdate";
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
        };
        */



        /*
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
        */


        //시작일 종료일 체크
        this.dsList_cancolumnchange = function(obj,e)
        {
        	if(e.columnid == "DT_START"){
        		var dtEnd = this.dsList.getColumn(e.row, "DT_END")==null?"99991231":this.dsList.getColumn(e.row, "DT_END");
        		if(dtEnd < e.newvalue){
        			this.gfnAlert("시작일이 종료일보다 클 수 없습니다.");
        			return false;
        		}
        	}else if(e.columnid == "DT_END"){
        		var dtStart = this.dsList.getColumn(e.row, "DT_START")==null?"00000101":this.dsList.getColumn(e.row, "DT_START");
        		if(dtStart > e.newvalue){
        			this.gfnAlert("종료일이 시작일보다 작을 수 없습니다.");
        			return false;
        		}
        	}

        	return true;
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnRetireInfo.addEventHandler("onclick",this.divSearch_btnRetireInfo_onclick,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
            this.dsList2.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DAV_MIDTARGET.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
