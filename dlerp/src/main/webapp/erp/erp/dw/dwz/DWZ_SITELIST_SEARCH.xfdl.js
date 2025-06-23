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
            this.set_titletext("프로젝트목록조회");
            this.getSetter("maxwidth").set("900");
            this.getSetter("maxheight").set("600");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWZPR_SITE_SELECT_ADVANCED</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_COMMON_SAVE_01</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAR_SITE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SAUP\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CONST\" type=\"STRING\" size=\"256\"/><Column id=\"AR_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BALJU\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BONBU\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SAUPCENTER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SALE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_INCMSTRT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","0","0","100%","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("※프로젝트 속성검색");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            obj.set_font("bold 10pt \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnClear",null,"5","50","20","5",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("초기화");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"5","50","20","btnClear:5",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("조회");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0.0","staTITLE:10.0",null,"142.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTY_SAUP","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("사업유형");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfTY_SAUP","staTY_SAUP:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DQ_01");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_CONST","ccfTY_SAUP:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("상품유형");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfTY_CONST","staTY_CONST:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DQ_02");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staAR_SITE","ccfTY_CONST:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("지역구분");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboAR_SITE","staAR_SITE:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsAR_SITE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_BALJU","0.0","staTY_SAUP:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("계약구분");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfTY_BALJU","staTY_BALJU:0.0","staTY_SAUP:10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DW_04");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_BONBU","ccfTY_BALJU:0.0","staTY_SAUP:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("사업본부");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_BONBU","staCD_BONBU:0.0","staTY_SAUP:10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DW_01");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SAUPCENTER","ccfCD_BONBU:0.0","staTY_SAUP:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("사업관리팀");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SAUPCENTER","staCD_SAUPCENTER:0.0","staTY_SAUP:10.0","180","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DW_14");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SALE","0.0","staCD_BONBU:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("매출구분");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SALE","staCD_SALE:0.0","staCD_BONBU:10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DW_15");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_INCMSTRT","ccfCD_SALE:0.0","staCD_BONBU:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("수입구조");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_INCMSTRT","staCD_INCMSTRT:0.0","staCD_BONBU:10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DW_17");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_FROM_TO","ccfCD_INCMSTRT:0.0","staCD_BONBU:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("공사기간");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","staDT_FROM_TO:0.0","staCD_BONBU:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_range","ctclDT_FROM:0.0","staCD_BONBU:10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","sta_range:0.0","staCD_BONBU:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","50",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","35%","objGrid:20","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","55%","objGrid:20","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfTY_SAUP.form.CDTextBox","value","dsSearch","TY_SAUP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfTY_CONST.form.CDTextBox","value","dsSearch","TY_CONST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccboAR_SITE","value","dsSearch","AR_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfTY_BALJU.form.CDTextBox","value","dsSearch","TY_BALJU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_BONBU.form.CDTextBox","value","dsSearch","CD_BONBU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_SAUPCENTER.form.CDTextBox","value","dsSearch","CD_SAUPCENTER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_SALE.form.CDTextBox","value","dsSearch","CD_SALE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfCD_INCMSTRT.form.CDTextBox","value","dsSearch","CD_INCMSTRT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ctclDT_FROM","value","dsSearch","DT_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DWZ_SITELIST_SEARCH.xfdl", function() {
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

        	this.fnSetCombo();

        	// 이전 화면에서 받아와서 최초 재조회때만 조회. (CD_SITE 있을때만.)
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE))
        	{
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);

        		this.FormBtns.Select.click();
        	}

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	//this.FormBtns.Select.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnSearch = this.gfnFormButtonAdd("btnSearch", "fnSelect");
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
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWZ_SITE_SEARCH");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("TY_SAUP", "string");
        	this.dsSelect.addColumn("TY_CONST", "string");
        	this.dsSelect.addColumn("AR_SITE", "string");
        	this.dsSelect.addColumn("TY_BALJU", "string");
        	this.dsSelect.addColumn("CD_BONBU", "string");
        	this.dsSelect.addColumn("CD_SAUPCENTER", "string");
        	this.dsSelect.addColumn("CD_SALE", "string");
        	this.dsSelect.addColumn("CD_INCMSTRT", "string");
        	this.dsSelect.addColumn("DT_FR", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "TY_WRK", "");
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "TY_SAUP", this.dsSearch.getColumn(0, "TY_SAUP"));
        	this.dsSelect.setColumn(0, "TY_CONST", this.dsSearch.getColumn(0, "TY_CONST"));
        	this.dsSelect.setColumn(0, "AR_SITE", this.dsSearch.getColumn(0, "AR_SITE"));
        	this.dsSelect.setColumn(0, "TY_BALJU", this.dsSearch.getColumn(0, "TY_BALJU"));
        	this.dsSelect.setColumn(0, "CD_BONBU", this.dsSearch.getColumn(0, "CD_BONBU"));
        	this.dsSelect.setColumn(0, "CD_SAUPCENTER", this.dsSearch.getColumn(0, "CD_SAUPCENTER"));
        	this.dsSelect.setColumn(0, "CD_SALE", this.dsSearch.getColumn(0, "CD_SALE"));
        	this.dsSelect.setColumn(0, "CD_INCMSTRT", this.dsSearch.getColumn(0, "CD_INCMSTRT"));
        	this.dsSelect.setColumn(0, "DT_FR", this.dsSearch.getColumn(0, "DT_FR"));
        	this.dsSelect.setColumn(0, "DT_TO", this.dsSearch.getColumn(0, "DT_TO"));

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
        /************************************************************************
         * Validate
         ************************************************************************/

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		if(errorCode == 0)
        		{
        			if(this.dsSearch.getColumn(0, "CD_SITE") != "")
        			{
        				this.dsSearch.set_enableevent(false);
        				this.dsSearch.setColumn(0, "CD_SITE", "");
        				this.dsSearch.set_enableevent(true);
        			}
        		}else
        		{
        			this.gfnAlert(errorMsg);
        		}
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

        // 확인 버튼 클릭
        this.divData_btnOk_onclick = function(obj,e)
        {
        	var cd_site = "";
        	var row = -1;

        	while(1)
        	{
        		row = this.dsList.findRow("chk", "1", row+1);

        		if(row < 0) break;

        		cd_site += this.dsList.getColumn(row, "CD_SITE") + ",";
        	}

        	if(cd_site != "")
        	{
        		cd_site = cd_site.substr(0, cd_site.length-1);
        	}

        	this.getParentContext().close(cd_site);
        };

        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close();
        };

        this.fnSetCombo = function() {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");
        	this.dsCombo.addColumn("YN_USE", "string");
        	this.dsCombo.addColumn("YN_MAND", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DW");
        	this.dsCombo.setColumn(0, "CD_TYPE", "09");
        	this.dsCombo.setColumn(0, "YN_USE", "Y");
        	this.dsCombo.setColumn(0, "YN_MAND", "Y");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsAR_SITE=combo0";
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

        //조회 버튼
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.FormBtns.Select.click();
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.btnClear_onclick = function(obj,e)
        {
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();

        	this.divSearch.form.ccfTY_SAUP.form.DSTextBox.set_value("");
        	this.divSearch.form.ccfTY_CONST.form.DSTextBox.set_value("");
        	this.divSearch.form.ccfTY_BALJU.form.DSTextBox.set_value("");
        	this.divSearch.form.ccfCD_BONBU.form.DSTextBox.set_value("");
        	this.divSearch.form.ccfCD_SAUPCENTER.form.DSTextBox.set_value("");
        	this.divSearch.form.ccfCD_SALE.form.DSTextBox.set_value("");
        	this.divSearch.form.ccfCD_INCMSTRT.form.DSTextBox.set_value("");

        	this.gfnGridClear(this.dxGrid);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnClear.addEventHandler("onclick",this.btnClear_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWZ_SITELIST_SEARCH.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
