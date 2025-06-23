(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DWB_ETAX_LIST");
            this.set_titletext("전자세금계산서관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_ETAXLIST_SELECT_DONGBU_NEW</Col></Row><Row><Col id=\"SP\">DZXPR_COMBO_SELECT</Col><Col id=\"TARGET\">combo</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DHVPR_XXSB_DTI_MAIN_INSERT</Col></Row><Row><Col id=\"TARGET\">email</Col><Col id=\"SP\">DHVPR_ETAXLIST_UPDATE</Col></Row><Row><Col id=\"TARGET\">billing</Col><Col id=\"SP\">DHVPR_XXSB_DTI_MAIN_INSERT_JUNGSAN</Col></Row><Row><Col id=\"TARGET\">billingCancle</Col><Col id=\"SP\">DHVPR_XXSB_DTI_MAIN_INSERT_JUNGSAN_CANCEL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_SALEBUY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VATPROOF\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SYSTEM\" type=\"STRING\" size=\"256\"/><Column id=\"ID_TRANS\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SLIPAPPR\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YR_WORK\"/><Col id=\"TY_SALEBUY\">I</Col><Col id=\"TY_GUBUN\">Y</Col><Col id=\"YN_SLIPAPPR\">Y</Col><Col id=\"TY_STATUS\">X</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCdVatproof", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SYSTEM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SYSTEM\">DH</Col><Col id=\"CD_TYPE\">004</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput0", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEmail", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DAMDANG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMAIL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBillingReq", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"NEXT_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"ID_TRANS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBillingCancelReq", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"NEXT_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"ID_TRANS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("증빙기간");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","0.0","sta00:10.0","269","24.0",null,null,null,"353",null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("AutoSet").set("true");
            obj.getSetter("CDTextWidth").set("80");
            obj.getSetter("fittocontents").set("true");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ccfCD_SITE:0.0","sta00:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("업체코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","staCD_CORP:0.0","sta00:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("현장코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("증빙구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_FR","staYM_WORK:0.0","10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_TO","calDT_FR:0.0","10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00_00","calDT_TO:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCD_VATPROOF","sta00_00:0.0","10.0","136","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cboCD_VATPROOF_innerdataset = new nexacro.NormalDataset("divSearch_form_cboCD_VATPROOF_innerdataset", obj);
            divSearch_form_cboCD_VATPROOF_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"datacolumn\">세금계산서</Col><Col id=\"codecolumn\">A</Col></Row><Row><Col id=\"datacolumn\">계산서</Col><Col id=\"codecolumn\">B</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboCD_VATPROOF_innerdataset);
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK00","cboCD_VATPROOF:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_STATUS","staYM_WORK00:0.0","10.0","136","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsCdVatproof");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK00_00","cboTY_STATUS:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("전표승인여부");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_SLIPAPPR","staYM_WORK00_00:0.0","10.0","136","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cboYN_SLIPAPPR_innerdataset = new nexacro.NormalDataset("divSearch_form_cboYN_SLIPAPPR_innerdataset", obj);
            divSearch_form_cboYN_SLIPAPPR_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">승인</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미승인</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboYN_SLIPAPPR_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","staCD_CORP:0.0","sta00:10.0","269","24.0",null,null,null,"353",null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DWX_CFVENDOR_DH");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("13");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK00_00_00","ccfCD_VENDOR:0.0","sta00:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("시스템구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_GUBUN","staYM_WORK00_00_00:0.0","sta00:10.0","136","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cboTY_GUBUN_innerdataset = new nexacro.NormalDataset("divSearch_form_cboTY_GUBUN_innerdataset", obj);
            divSearch_form_cboTY_GUBUN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">외주</Col><Col id=\"codecolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">J</Col><Col id=\"datacolumn\">자재</Col></Row><Row><Col id=\"codecolumn\">P</Col><Col id=\"datacolumn\">기타</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboTY_GUBUN_innerdataset);
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","90",null,null,"0","0",null,null,null,null,this);
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
            obj = new BindItem("item0","divSearch.form.calDT_FR","value","dsSearch","DT_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.calDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboCD_VATPROOF","value","dsSearch","CD_VATPROOF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboYN_SLIPAPPR","value","dsSearch","YN_SLIPAPPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.cboTY_STATUS","value","dsSearch","TY_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.cboTY_GUBUN","value","dsSearch","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DWB_ETAX_LIST.xfdl", function() {
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
        	this.fnComboSelect();

        	var currentDate = this.gfnGetDate("date");
        	var firstDate = this.gfnGetFirstDate(currentDate);
        	this.divSearch.form.calDT_FR.set_value(firstDate);
        	this.divSearch.form.calDT_TO.set_value(currentDate);
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE))
        	{
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {

        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnEtaxView = this.gfnFormButtonAdd("btnEtaxView", "fnEtaxView");
        	this.btnEtaxEmail = this.gfnFormButtonAdd("btnEtaxEmail", "fnEtaxEmail");
        	this.btnEtaxIssue = this.gfnFormButtonAdd("btnEtaxIssue", "fnEtaxIssue");
        	this.btn1 = this.gfnFormButtonAdd("btnEtaxDtlSearch", "fnEtaxDtlSearch");
        	this.btn3 = this.gfnFormButtonAdd("btnSlipSearch", "fnSlipSearch");
        	this.btnBilling = this.gfnFormButtonAdd("btnBilling", "fnBilling");
        	this.btnBillingCancel = this.gfnFormButtonAdd("btnBillingCancel", "fnBillingCancel");

        	this.btn3.set_enable(false);
        	this.btnBilling.set_enable(false);
        	this.btnBillingCancel.set_enable(false);
        };


        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
         	this.divSearch.form.ccfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHV_ETAXLIST_SELECT");

        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";

        	var id_group = this.FormInfo.ID_GROUP;
        	if(id_group == "A" || id_group == "0")
        	{
        		this.divSearch.form.ccfCD_SITE.set_enable(true);
        	}
        	else
        	{
        		this.divSearch.form.ccfCD_SITE.set_enable(false);
        	}
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("NO_VAT", "string");
        	this.dsSave.addColumn("ID_TRANS","string");
        };


        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	var strSvcId    = "select";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSearch";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	//var nrow = this.gfnGridAdd(this.dxGrid, "bottom"); // top (default), bottom, current
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
        this.fnSave = function()
        {
        	this.dsSave.clearData();
        	var nrow = this.dsSave.addRow();
        	var noVat = "";

        	for(var i = 0; i < this.dsList.rowcount; i++)
        	{
        		if(this.dsList.getColumn(i, "CHK") != 1) continue;

        		noVat = noVat + this.dsList.getColumn(i, "NO_VAT") + ";";
        	}

        	this.dsSave.setColumn(nrow,"NO_VAT", noVat);
        	this.dsSave.setColumn(nrow,"ID_TRANS",this.AuthClient.ID_USER);

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "dsOutput0=save";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
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
        };

         /*
          *	조회 버튼
          */
        this.fnComboSelect = function() {
        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCdVatproof=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        };

         /*
          *	이메일변경
          */
        this.fnEtaxEmail = function() {
        	var tempDS = new Dataset;
        	tempDS.copyData(this.dsList, false);
        	tempDS.filter("CHK == 1");

        	if (tempDS.rowcount > 0)
        	{
        		this.dsEmail.copyData(tempDS, true);

        		var nIdx1 = this.dsEmail.findRowExprNF( "YN_ISSUE != '미발행'" );
        		if (nIdx1 > -1)
        		{
        			this.gfnAlert("미발행건만 수정 가능합니다.");
        			return;
        		}

        		var nIdx2 = this.dsEmail.findRowExprNF( "DS_DAMDANG == null || DS_DAMDANG == undefined || DS_DAMDANG.trim().length == 0" );
        		if (nIdx2 > -1)
        		{
        			this.gfnAlert("거래처 담당자명을 입력해주세요.");
        			return;
        		}

        		var nIdx3 = this.dsEmail.findRowExprNF( "DS_EMAIL == null || DS_EMAIL == undefined || DS_EMAIL.trim().length == 0" );
        		if (nIdx3 > -1)
        		{
        			this.gfnAlert("거래처 담당자 이메일주소를 입력해주세요.");
        			return;
        		}

        		var strSvcId    = "email";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "email=dsEmail";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        	}
        	else
        	{
        		this.gfnAlert("선택된 데이터가 없습니다.");
        	}
        };


        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	/*
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))){
        		this.gfnAlert("현장코드를 입력하세요.");
        		return false;
        	}
        	*/

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
        		if(this.dsList.rowcount > 0){
        			this.btn3.set_enable(true);
        		}else{
        			this.btn3.set_enable(false);
        		}
        		this.gfnGridAfterSelect(this.dxGrid);

        		this.fnCstBtnSet(this.dsSearch);
        	}
        	else if (svcID == "save") {
        		if (errorCode == 0) {
        			this.fnSend();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == "combo") {
        		this.dsCdVatproof.insertRow(0);
        		this.dsCdVatproof.setColumn(0, "CD_CODE", "");
        		this.dsCdVatproof.setColumn(0, "DS_CODE", "전체");

        		this.dsSearch.setColumn(0, "ID_TRANS", this.AuthClient.ID_USER);
        		this.divSearch.form.cboTY_STATUS.set_index(0);
        	}
        	else if (svcID == "email") {
        		this.FormBtns.Select.click();
        	} else if(svcID == "saveBilling"){
        		this.FormBtns.Select.click();
        	} else if(svcID == "saveBillingCancel"){
        		this.FormBtns.Select.click();
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_VENDOR") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")))
        		{
        			this.gfnAlert("현장코드를 먼저 입력해주세요.");
        			return;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "TY_VENDOR", "");
        	}
        	return true;
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e, event)
        {
        	if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);

        		var event = nexacro.KeyEventInfo;

        		var rows = this.dxGrid.getSelectedDatasetRows();

        		this.dsList.set_enableevent(false);
        		for(var i = 0; i < this.dsList.rowcount; i++)
        		{
        			var check = false;

        			if(this.gfnGetFlag(this.dsList, i) != "#")
        			{
        				if(colnm == "CHK")
        				{
        					check = true;
        					break;
        				}

        				if(rows.length > 0)
        				{
        					for(var j = 0; j < rows.length ; j++)
        					{
        						if(i == e.row || i == rows[j])
        						{
        							check = true;
        							this.dsList.setColumn(i, "CHK", 1);
        						}
        					}
        				}
        				else
        				{
        					if(i == e.row)
        					{
        						check = true;
        						this.dsList.setColumn(i, "CHK", 1);
        					}
        				}

        				if(check == false)
        				{
        					this.dsList.setColumn(i, "CHK", 0);
        				}
        			}
        		}
        		this.dsList.set_enableevent(true);

        		obj.oldrow = -1;
        	}
        }

        // cell 클릭했을때 이벤트(해당 cell에 대한 이벤트를 건다)
        this.fnGrid_EnterCell = function(obj, row, cell) {
        	// 수정가능 true, false 처리하려는 컬럼에 대해서만 return 처리할것.
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);	// 클릭한 cell의 컬럼명

        	if(colnm == "CHK") {
        		return;
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnEtaxView = function()
        {
        	var strBATCH_ID = this.dsList.getColumn(this.dsList.rowposition, "INTERFACE_BATCH_ID");
        	var strYN_ISSUE = this.dsList.getColumn(this.dsList.rowposition, "YN_ISSUE");
        	if (!this.gfnIsNull(strBATCH_ID) && strYN_ISSUE != '정산')
        	{
        		var smartBillUrl = this.gfnGetConfig("DZ", "SMART_BILL_URL");
        		smartBillUrl = smartBillUrl + "callSB_V3/XXSB_DTI_PRINT.asp?BATCH_ID=" + strBATCH_ID;
        		window.open(smartBillUrl, 'watchwin', 'height=768, width=1024, status=no, scrollbars=auto, resizable=yes');
        	}
        };

        this.fnEtaxIssue = function(obj,e)
        {
        	//this.gfnAlert("세금계산서 전송기능은 2020년 6월 22일부터 이용하실 수 있습니다.");
        	//return false;

        	var msg = "선택하신 (세금)계산서를 전송 하시겠습니까?";
        	this.gfnConfirm(msg, "fnEtaxIssue_callback", "");
        };

        this.fnEtaxIssue_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.fnSave();
        	}
        }

        this.fnSend = function()
        {
        	var strBATCH_ID = this.dsOutput0.getColumn(0, "INTERFACE_BATCH_ID_RETRUN");
        	var strSmartId = this.dsList.getColumn(0, "SMART_ID");
        	var strSmartPwd = this.dsList.getColumn(0, "SMART_PASSWORD");

        	if(this.gfnIsNull(strSmartId))
        	{
        		this.gfnAlert("스마트빌 아이디가 존재하지 않습니다.");
        		return;
        	}

        	if(this.gfnIsNull(strBATCH_ID)) return;

        	var smartBillUrl = this.gfnGetConfig("DZ", "SMART_BILL_URL");

        	smartBillUrl = smartBillUrl + "callSB_V3/XXSB_DTI_ISSUE.asp?BATCH_ID=" + strBATCH_ID + "&ID=" + strSmartId + "&PASS=" + strSmartPwd;

        	// console.log(smartBillUrl);

        	window.open(smartBillUrl, 'watchwin', 'height=768, width=1024, status=no, scrollbars=auto, resizable=yes');
        }

        //정산
        this.fnBilling = function(obj,e){
        	var str = "";
        	var chkCnt = 0;
        	for(var i=0; i < this.dsList.getRowCount(); i++){
        		if("1" == this.dsList.getColumn(i, "CHK")){
        			trace(this.dsList.getColumn(i, "NO_VAT"));
        			str += nexacro.trim(this.dsList.getColumn(i, "NO_VAT")) + ";";
        			chkCnt++;
        		}
        	}

        	if(str == ""){
        		this.gfnAlert("정산할 데이터를 선택해주세요.");
        		return;
        	}

        	this.gfnConfirm(chkCnt + "개의 데이터를 정산처리 하시겟습니까?", function(strId, val){
        		if(val){
        			this.dsBillingReq.setColumn(0, "NO_VAT", str.substring(0, str.length-1));
        			this.dsBillingReq.setColumn(0, "NEXT_STATUS", "Z");
        			this.dsBillingReq.setColumn(0, "ID_TRANS", this.objApp.gdsUserInfo.getColumn(0, "ID_USER"));


        			var strSvcId    = "saveBilling";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "billing=dsBillingReq";
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
        	}, "");
        }


        //정산
        this.fnBillingCancel = function(obj,e){
        	var str = "";
        	var chkCnt = 0;
        	for(var i=0; i < this.dsList.getRowCount(); i++){
        		if("1" == this.dsList.getColumn(i, "CHK")){
        			trace(this.dsList.getColumn(i, "NO_VAT"));
        			str += nexacro.trim(this.dsList.getColumn(i, "NO_VAT")) + ";";
        			chkCnt++;
        		}
        	}

        	if(str == ""){
        		this.gfnAlert("정산취소할 데이터를 선택해주세요.");
        		return;
        	}

        	this.gfnConfirm(chkCnt + "개의 데이터를 정산취소처리 하시겟습니까?", function(strId, val){
        		if(val){
        			this.dsBillingCancelReq.setColumn(0, "NO_VAT", str.substring(0, str.length-1));
        			this.dsBillingCancelReq.setColumn(0, "NEXT_STATUS", "Z");
        			this.dsBillingCancelReq.setColumn(0, "ID_TRANS", this.objApp.gdsUserInfo.getColumn(0, "ID_USER"));


        			var strSvcId    = "saveBillingCancel";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "billingCancle=dsBillingCancelReq";
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
        	}, "");
        }


        this.fnSlipSearch = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) {
        		this.gfnAlert("전표조회할 데이터를 선택하세요.");
        		return false;
        	}

        	var param = {};

        	//param.NO_ERPKEY = this.dsList.getColumn(this.dsList.rowposition, "NO_ERPKEY");
        	 param.CD_TRADE = nexacro.replaceAll(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP"),"-","");

        	//this.gfnFormOpen("DHA", "DHA_ERPKEY_SLIP", "", param);
        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);
        };

        this.fnEtaxDtlSearch = function(obj,e) {

        	if (!this.gfnGridIsRow(this.dxGrid)) {
        		this.gfnAlert("상세조회할 데이터를 선택하세요.");
        		return false;
        	}

        	var param = {};

        	param.YN_ISSUE = this.dsList.getColumn(this.dsList.rowposition, "YN_ISSUE");	// 전송상태
        	param.NO_VAT = this.dsList.getColumn(this.dsList.rowposition, "NO_VAT");		// 증빙번호
        	param.CONVERSATION_ID = this.dsList.getColumn(this.dsList.rowposition, "CONVERSATION_ID");	// 세금 계산서번호
        	param.ID_TRANS = this.objApp.gdsUserInfo.getColumn(0, "ID_USER");	// 로그인 ID

        	this.gfnFormOpen("DWB", "DWB_ETAX", "fnDialogCallback", param, 1030, 680);
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.btn3.set_enable(false);
        		this.fnCstBtnSet(obj);
        	}

        	if(e.columnid == "CD_SITE" || e.columnid == "YM_WORK"){
        	  this.fnComboSelect();
            }

        	trace(e.columnid + ":" + e.newvalue);
        };

        this.fnCstBtnSet = function(obj){
        	//TY_STATUS -- X 미발행 A 저장 Z정산 T역발행거부
            //YN_SLIPAPPR -- Y 승인

        	var sTY_STATUS = obj.getColumn(0, "TY_STATUS");
        	var sYN_SLIPAPPR = obj.getColumn(0, "YN_SLIPAPPR");
        	if(("X" === sTY_STATUS || "A" === sTY_STATUS || "T" == sTY_STATUS) && "Y" === sYN_SLIPAPPR){
        		this.btnEtaxIssue.set_enable(true);
        		if("X" === sTY_STATUS){
        			this.btnBilling.set_enable(true);
        		} else {
        			this.btnBilling.set_enable(false);
        		}
        	} else {
        		this.btnEtaxIssue.set_enable(false);
        		this.btnBilling.set_enable(false);
        	}

        	if("Z" === sTY_STATUS){
        		this.btnBillingCancel.set_enable(true);
        	} else {
        		this.btnBillingCancel.set_enable(false);
        	}
        }

        this.divData_objGrid_oncelldblclick = function(obj,e)
        {
        	var nCol1 = obj.getBindCellIndex('body', 'DS_EMAIL');
        	var nCol2 = obj.getBindCellIndex('body', 'DS_DAMDANG');
        	if (e.col != nCol1 && e.col != nCol2)
        	{
        		this.fnSlipSearch();
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsEmail.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };
        this.loadIncludeScript("DWB_ETAX_LIST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
