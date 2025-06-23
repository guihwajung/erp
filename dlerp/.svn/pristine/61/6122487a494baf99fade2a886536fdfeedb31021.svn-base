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
            this.set_titletext("전표발행");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_SLIP_DETAIL</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHAPR_SLIP_XISSUESLIP</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHAPR_SLIP_XISSUESLIP</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHAPR_SLIP_XISSUESLIP</Col></Row><Row><Col id=\"TARGET\">slipDelete</Col><Col id=\"SP\">DHAPR_SLIP_CANCEL</Col></Row><Row><Col id=\"TARGET\">selectNewCode</Col><Col id=\"SP\">DHAPR_SLIPNO_XSELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">callDF</Col><Col id=\"SP\">DFLPR_INCOMESLIP_SLIP</Col></Row><Row><Col id=\"TARGET\">fileDelete</Col><Col id=\"SP\">DZZPR_FILEMANAGER_SAVE</Col></Row><Row><Col id=\"TARGET\">fileSelect</Col><Col id=\"SP\">DZZPR_FILEMANAGER_SELECT</Col></Row><Row><Col id=\"TARGET\">combo2</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">selectTax</Col><Col id=\"SP\">DHXPR_TAX_INFO_SELECT</Col></Row><Row><Col id=\"TARGET\">selectDtReq</Col><Col id=\"SP\">DHAPR_SLIP_DT_MIBUL_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SLIP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStatus", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SLIP", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNewCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_TRADE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFileList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_APP", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTax", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDtReq", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChkCdApp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"110.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","sta01:0.0","10.0","219","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta03","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("회계일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_ACCOUNT","sta03:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta04","0.0","sta01:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("발행부서");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfACNTUNIT","0.0","sta04:10.0","219","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta05","ccfACNTUNIT:0.0","sta01:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("작성일");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","calDT_ACCOUNT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("전표구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_SLIP","sta00:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsTY_SLIP");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_color("royalblue");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta06","ccboTY_SLIP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("전표번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtCD_TRADE","sta06:0.0","10.0","160","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_color("royalblue");
            obj.set_font("bold 12px/normal \"Dotum\"");
            obj.set_readonly("true");
            obj.set_text("20190910010000000006");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtDT_UPDATE","sta05:0.0","sta01:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta07","txtDT_UPDATE:0.0","sta01:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtDS_HNAME","sta07:0.0","sta01:10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","txtDS_HNAME:0.0","sta01:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("결재상태");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCD_APP","sta02:0.0","sta01:10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_innerdataset("dsCD_APP");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_enable("false");
            obj.set_color("royalblue");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta08","txtCD_TRADE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("승인여부");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta09","ccboCD_APP:0.0","sta01:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("자동전표명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtDS_AUTOSLIP","sta09:0.0","sta01:10.0","177","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboYN_APPR","txtCD_TRADE:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            obj.set_enable("false");
            var divSearch_form_ccboYN_APPR_innerdataset = new nexacro.NormalDataset("divSearch_form_ccboYN_APPR_innerdataset", obj);
            divSearch_form_ccboYN_APPR_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">승인</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미승인</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_ccboYN_APPR_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","64.88%","100.00%","5",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_Splitter");
            obj.set_cursor("ns-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter:7",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","0",null,"22","0",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("관리항목");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Div("divTotal","0",null,null,"32","0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("2");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("sta03","316","2",null,"30","0",null,null,null,null,null,this.divData.form.divDataBottom.form.divTotal.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataBottom.form.divTotal.addChild(obj.name, obj);

            obj = new Static("sta31","94","2","130","30",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divTotal.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataBottom.form.divTotal.addChild(obj.name, obj);

            obj = new Static("sta21","0","2","95","30",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divTotal.form);
            obj.set_taborder("8");
            obj.set_text("차대차액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataBottom.form.divTotal.addChild(obj.name, obj);

            obj = new MaskEdit("mskSUM_CRDR","sta21:5","7","115","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divTotal.form);
            obj.set_taborder("7");
            obj.set_enable("false");
            obj.set_format("#,###");
            this.divData.form.divDataBottom.form.divTotal.addChild(obj.name, obj);

            obj = new Static("sta11","94","-18","94","30",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divTotal.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("false");
            this.divData.form.divDataBottom.form.divTotal.addChild(obj.name, obj);

            obj = new Static("sta01","0","-18","95","30",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divTotal.form);
            obj.set_taborder("11");
            obj.set_text("전표마감일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            obj.set_visible("false");
            this.divData.form.divDataBottom.form.divTotal.addChild(obj.name, obj);

            obj = new Static("sta00","mskSUM_CRDR:8","2","95","30",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divTotal.form);
            obj.set_taborder("12");
            obj.set_text("합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataBottom.form.divTotal.addChild(obj.name, obj);

            obj = new Static("sta04","sta00:18","7","60","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divTotal.form);
            obj.set_taborder("13");
            obj.set_text("차변");
            this.divData.form.divDataBottom.form.divTotal.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_DR","sta04:-26","7","115","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divTotal.form);
            obj.set_taborder("5");
            obj.set_limitbymask("both");
            obj.set_readonly("true");
            obj.set_format("#,###");
            obj.set_background("#aacee2");
            this.divData.form.divDataBottom.form.divTotal.addChild(obj.name, obj);

            obj = new Static("sta05","mskAM_DR:21","7","60","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divTotal.form);
            obj.set_taborder("4");
            obj.set_text("대변");
            this.divData.form.divDataBottom.form.divTotal.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_CR","mskAM_DR:55","7","115","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divTotal.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_limitbymask("both");
            obj.set_format("#,###");
            obj.set_background("#fdf2dc");
            this.divData.form.divDataBottom.form.divTotal.addChild(obj.name, obj);

            obj = new Static("sta06","mskAM_CR:21","7","60","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divTotal.form);
            obj.set_taborder("2");
            obj.set_text("건수");
            this.divData.form.divDataBottom.form.divTotal.addChild(obj.name, obj);

            obj = new MaskEdit("mskCOUNT","sta06:-26","7","65","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divTotal.form);
            obj.set_taborder("1");
            obj.set_format("#,###");
            obj.set_limitbymask("both");
            obj.set_readonly("true");
            obj.set_background("yellow");
            this.divData.form.divDataBottom.form.divTotal.addChild(obj.name, obj);

            obj = new Edit("txtDT_MAGAM","100","-13","80","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form.divTotal.form);
            obj.set_taborder("10");
            obj.set_maxlength("7");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.set_text("2019-09-02");
            this.divData.form.divDataBottom.form.divTotal.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","sta02:5",null,null,"0","divTotal:4",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter:5",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("전표정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:4",null,null,"0","1",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Button("btnAddRow",null,"0","87","20","0",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_text("신규 행 추가");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("mskAddCnt",null,"0","90","20","92",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("3");
            obj.set_limitbymask("both");
            obj.set_format("###");
            this.divData.form.divDataTop.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfACNTUNIT.form.CDTextBox","value","dsSearch","ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccboTY_SLIP","value","dsSearch","TY_SLIP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHA_ISSUESLIP_back.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.FileManager = {};

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//
        	this.V_IUD_FLAG = "I";		//등록/수정/삭제 전역변수
        	this.V_CD_TRADE = "";		//전표번호 전역변수
        	this.V_CD_AUTOSLIP = "";	//자동전표번호
        	this.V_YN_DF = "";			//자금 입금내역 전표발행 전역변수
        	this.V_NO_INCONFIRM = "";	//자금 입금확인번호 전역 변수

        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();
        	this.fnSetCombo();

        	//그리드 헤더 초기화
        	this.fnGridHeaderReset();

        	if (this.gfnIsNull(this.getOwnerFrame().CD_TRADE)) {
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}

        // 	if (nexacro.toNumber(this.FormInfo.GR_SEARCH) > 1) {
        // 		this.ccfCD_CORP.form.set_readonly(true);
        // 	}

        // 	if (nexacro.toNumber(this.FormInfo.GR_SEARCH) >= 7) {
        // 		this.ccfACNTUNIT.form.set_readonly(true);
        // 	}

        	//항번 색상 처리
        	var colNO_VIEW = this.dxGrid.getBindCellIndex("body", "NO_VIEW");
        	this.dxGrid.setCellProperty("body", colNO_VIEW, "background", "darkgreen");
        	this.dxGrid.setCellProperty("body", colNO_VIEW, "color", "yellow");

        	this.dsSearch.set_enableevent(false);
        	this.ccfACNTUNIT.form.CDTextBox.set_value(this.AuthClient.CD_DEPT);
        	this.ccfACNTUNIT.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);
        	this.dsSearch.set_enableevent(true);


        	//입금내역 전표발행(자금)을 통해 들어온경우
        	if(this.getOwnerFrame().YN_DF == "Y"){
        		this.fnDFSetting();
        	}else{
        		//다른화면에서 들어왔을 경우
        		if(!this.gfnIsNull(this.getOwnerFrame().CD_TRADE)) {
        			this.V_IUD_FLAG = this.getOwnerFrame().IUD_FLAG;
        			this.V_CD_TRADE = nexacro.replaceAll(this.gfnNvl(this.gfnAllTrim(this.getOwnerFrame().CD_TRADE)),"-","");


        			this.txtCD_TRADE.set_value(this.V_CD_TRADE);

        			this.FormBtns.Select.set_enable(true);

        			//this.fnSelect();
        			this.FormBtns.Select.click();

        			this.gfnGridAdd(this.dxGridSub, null, false);
        		}else{
        			//전표구분 대체전표로 임시 처리
        			this.ccboTY_SLIP.set_value("01");
        		}

        		//발행일자 현재일자 셋팅
        		this.calDT_ACCOUNT.set_value(this.gfnGetDate());
        	}

        	//버튼처리
        	//this.fnSetButtonEnable(this.V_IUD_FLAG);
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	this.FormBtns.Add.set_enable(true);
        	this.FormBtns.Select.set_enable(false);

        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnTaxView     = this.gfnFormButtonAdd("btnTaxView"   	 , "fnTaxView");		//세금계산서 보기
        	this.btnRequestList = this.gfnFormButtonAdd("btnRequestList" , "fnRequestList");	//출금요청
        	this.btnApprove     = this.gfnFormButtonAdd("btnApprove"     , "fnApprove");		//전표결제
        	this.btnSchApprove  = this.gfnFormButtonAdd("btnSchApprove"  , "fnSchApprove");		//결제조회
        	this.btnSlipCopy    = this.gfnFormButtonAdd("btnSlipCopy"    , "fnSlipCopy");		//전표복사
        	this.btnDFPopup     = this.gfnFormButtonAdd("btnDFPopup"     , "fnDFPopup");		//자금집행현황
        	this.btnSlipNew     = this.gfnFormButtonAdd("btnSlipNew"     , "fnSlipNew");  		//새전표
        	this.btnSlipDelete  = this.gfnFormButtonAdd("btnSlipDelete"  , "fnSlipDelete");		//전표삭제
        	this.btnSlipBanje   = this.gfnFormButtonAdd("btnBanje"       , "fnSlipBanje");		//반제전표

        	this.btnSlipDelete.set_enable(false);
        	this.btnSchApprove.set_enable(false);
        	this.btnApprove.set_enable(false);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.calDT_ACCOUNT = this.divSearch.form.calDT_ACCOUNT;
        	this.ccboTY_SLIP = this.divSearch.form.ccboTY_SLIP;
        	this.txtCD_TRADE = this.divSearch.form.txtCD_TRADE;
        	this.ccfACNTUNIT = this.divSearch.form.ccfACNTUNIT;
        	this.txtDT_UPDATE = this.divSearch.form.txtDT_UPDATE;
        	this.txtDS_HNAME = this.divSearch.form.txtDS_HNAME;
        	this.ccboCD_APP = this.divSearch.form.ccboCD_APP;

        	this.ccboYN_APPR = this.divSearch.form.ccboYN_APPR;
        	this.txtDS_AUTOSLIP = this.divSearch.form.txtDS_AUTOSLIP;

        	this.mskAddCnt = this.divData.form.divDataTop.form.mskAddCnt;
        	this.btnAddRow = this.divData.form.divDataTop.form.btnAddRow;

        	this.txtDT_MAGAM = this.divData.form.divDataBottom.form.divTotal.form.txtDT_MAGAM;
        	this.mskSUM_CRDR = this.divData.form.divDataBottom.form.divTotal.form.mskSUM_CRDR;
        	this.mskAM_DR = this.divData.form.divDataBottom.form.divTotal.form.mskAM_DR;
        	this.mskAM_CR = this.divData.form.divDataBottom.form.divTotal.form.mskAM_CR;
        	this.mskCOUNT = this.divData.form.divDataBottom.form.divTotal.form.mskCOUNT;

        	this.dxGrid = this.divData.form.divDataTop.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataBottom.form.objGridSub;

        	this.vFileCnt = 0;

        	this.FileManager = {};
        	this.FileManager.CD_GUBUN = "DH03";
        	//this.FileManager.CD_DIR = [cdDir];
        	this.FileManager.IS_READONLY = false;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_CORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

         	this.ccfACNTUNIT.CodeFindName = "DHX_CFACNTUNIT2";
         	this.ccfACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHA_ISSUESLIP");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged     = "fnGrid_AfterCDTextChanged";
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dxGrid.addEventHandler("oncelldblclick", this.fnGrid_CellDblclick, this);
        	this.dxGrid.addEventHandler("onkeydown", this.fnGrid_onkeydown, this);

        	this.dxGrid.EnterCell = "fnGrid_EnterCell";

        	this.dsList.addEventHandler("oncolumnchanged", this.dsList_ColumnChanged, this);
        	this.dsList.addEventHandler("onrowposchanged", this.dsList_Rowposchanged, this);

        	// BUTTON, BUTTON-IN 처리
        	this.dxGrid.ExpandUp = "fnGrid_ExpandUp";

        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DH", "DHA_ISSUESLIP1");
        	this.dxGridSub.BeforeUserDataSetParam = "fnGridSub_BeforeUserDataSetParam";
        	this.dxGridSub.AfterCDTextChanged     = "fnGridSub_AfterCDTextChanged";
        	this.dsListSub.addEventHandler("oncolumnchanged", this.dsListSub_ColumnChanged, this);

        	//검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_Valuechanged, this);

        	//헤더 클릭 이벤트 삭제(소팅 막기 위해 처리)
        	this.dxGrid.removeEventHandlerLookup("onheadclick", "gfnGrid_onheadclick", this);

        	var colYN_VAT = this.dxGrid.getBindCellIndex("body", "YN_VAT");
        	//증빙자료 부가세 없을경우 콤보박스 비활성 처리
        	//this.dxGrid.setCellProperty("body", colYN_VAT, "edittype", "expr:!dataset.parent.gfnIsNull(YN_DF) || dataset.parent.gfnIsNull(FLAG_V) || FLAG_V =='D' || !dataset.parent.fnGridReadOnly(rowidx) ? 'none':'combo'");
        	this.dxGrid.setCellProperty("body", colYN_VAT, "edittype", "none");

        // 	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "ISSUE_ID"), "expandshow", "expr:!dataset.parent.fnGridReadOnly(rowidx) ?'hide':'show'");		//전자세금계산서(돋보기버튼)
        // 	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "ISSUE_ID"), "edittype", "expr:!dataset.parent.fnGridReadOnly(rowidx) ? 'none':'text'");		//전자세금계산서
        // 	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "DT_ACCOUNT"), "edittype", "expr:!dataset.parent.fnGridReadOnly(rowidx) || !dataset.parent.gfnIsNull(ISSUE_ID) ? 'none':'date'");		//회계일자
        // 	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "CD_ACCOUNT"), "expandshow", "expr:!dataset.parent.fnGridReadOnly(rowidx) ?'hide':'show'");	//계정코드(돋보기버튼)
        // 	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "CD_ACCOUNT"), "edittype", "expr:!dataset.parent.fnGridReadOnly(rowidx) ? 'none':'text'");		//계정코드
        // 	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "DS_REM"), "edittype", "expr:!dataset.parent.fnGridReadOnly(rowidx) ? 'none':'text'");			//적요
        // 	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "AM_DR"), "edittype", "expr:!dataset.parent.fnGridReadOnly(rowidx) ? 'none':'mask'");			//차변
        // 	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "AM_CR"), "edittype", "expr:!dataset.parent.fnGridReadOnly(rowidx) ? 'none':'mask'");			//대변
        // 	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "CD_VENDOR"), "expandshow", "expr:!dataset.parent.fnGridReadOnly(rowidx) ?'hide':'show'");		//거래처코드(돋보기버튼)
        // 	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "CD_VENDOR"), "edittype", "expr:!dataset.parent.fnGridReadOnly(rowidx) ? 'none':'text'");		//거래처코드
        // 	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "CD_DEPT_BE"), "expandshow", "expr:!dataset.parent.fnGridReadOnly(rowidx) ?'hide':'show'");	//귀속부서(돋보기버튼)
        // 	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "CD_DEPT_BE"), "edittype", "expr:!dataset.parent.fnGridReadOnly(rowidx) ? 'none':'text'");		//귀속부서
        };

        this.fnGrid_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);

        	if(colnm == "ISSUE_ID" || colnm == "DT_ACCOUNT" || colnm == "CD_ACCOUNT" || colnm == "DS_REM" || colnm == "AM_DR" || colnm == "AM_CR" || colnm == "CD_VENDOR" || colnm == "CD_DEPT_BE"){
        		//자동전표
        		if(!this.gfnIsNull(this.dsList.getColumn(row, "CD_AUTOSLIP"))){
        			return false;
        		}
        		//승인전표
        		if(this.dsList.getColumn(row, "YN_APPR") == "Y"){
        			return false;
        		}
        		//결재상태 결재중, 결재완료
        		if(this.dsList.getColumn(row, "CD_APP") == "1" || this.dsList.getColumn(row, "CD_APP") == "2"){
        			return false;
        		}

        		//신규가 아닐경우
        		//if(this.dsList.getColumn(currow, this.ucFlag) != "I"){
        		if(this.dsList.getColumn(row, "TY_CLOSING") != "02"){	//결산전표가 아닐경우
        			if(this.dsList.getColumn(row, "CD_ACCOUNT") == "112411" || this.dsList.getColumn(row, "CD_ACCOUNT") == "211511"){	//선급부가세/선수부가세일경우
        				var amVat = nexacro.toNumber(this.dsList.getColumn(row, "AM_DR"),0) + nexacro.toNumber(this.dsList.getColumn(row, "AM_CR"),0);
        				if(amVat > 0 || amVat < 0){
        					return false;
        				}
        			}
        		}

        		if(colnm == "AM_DR" || colnm == "AM_CR" || colnm == "CD_VENDOR"){
        			if(!this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(row, "ISSUE_ID")))){
        				return false;
        			}
        		}

        		if(colnm == "CD_DEPT_BE"){
        			//반제전표일 경우 귀속부서 수정불가
        			if(!this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(row, "CD_SLIP_MI")))){
        				return false;
        			}
        		}
        	}else{
        		if(colnm == "FILE_ATTACH"){
        			return true;
        		}else{
        			return false;
        		}
        	}
        	return true;
        }

        this.fnGridReadOnly = function (currow)
        {
        	//자동전표
        	if(!this.gfnIsNull(this.dsList.getColumn(currow, "CD_AUTOSLIP"))){
        		return false;
        	}
        	//승인전표
        	if(this.dsList.getColumn(currow, "YN_APPR") == "Y"){
        		return false;
        	}
        	//결재상태 결재중, 결재완료
        	if(this.dsList.getColumn(currow, "CD_APP") == "1" || this.dsList.getColumn(currow, "CD_APP") == "2"){
        		return false;
        	}

        	//신규가 아닐경우
        	//if(this.dsList.getColumn(currow, this.ucFlag) != "I"){
        	if(this.dsList.getColumn(currow, "TY_CLOSING") != "02"){	//결산전표가 아닐경우
        		if(this.dsList.getColumn(currow, "CD_ACCOUNT") == "112411" || this.dsList.getColumn(currow, "CD_ACCOUNT") == "211511"){	//선급부가세/선수부가세일경우
        			var amVat = nexacro.toNumber(this.dsList.getColumn(currow, "AM_DR"),0) + nexacro.toNumber(this.dsList.getColumn(currow, "AM_CR"),0);
        			if(amVat > 0 || amVat < 0){
        				return false;

        			}
        		}
        	}

        	return true;
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_TRADE", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_TRADE", "string");

        	this.dsSaveDF = new Dataset();
        	this.dsSaveDF.addColumn("NO_INCONFIRM", "string");
        	this.dsSaveDF.addColumn("NO_SLIP"	  , "string");
        	this.dsSaveDF.addColumn("ID_USER"	  , "string");

        	this.dsSelectNewCode = new Dataset();
        	this.dsSelectNewCode.addColumn("IN_PARAM", "string");
        	this.dsSelectNewCode.addColumn("IN_DT_ACCOUNT", "string");


        	//등록 데이터셋
         	this.dsSave = new Dataset();
        	this.dsSave.addColumn("S_FLAG", "string");
        	this.dsSave.addColumn("ISSUE_ID", "string");
        	this.dsSave.addColumn("CD_TRADE", "string");
        	this.dsSave.addColumn("CUR_SLIP_NO", "string");
        	this.dsSave.addColumn("NO_VIEW", "BIGDECIMAL");
        	this.dsSave.addColumn("DT_ACCOUNT", "string");
        	this.dsSave.addColumn("CD_DEPT_BH", "string");
        	this.dsSave.addColumn("CD_DEPT_BE", "string");
        	this.dsSave.addColumn("CD_ACCOUNT", "string");
        	this.dsSave.addColumn("SEMOK_CD", "string");
        	this.dsSave.addColumn("SEMOK_DS", "string");
        	this.dsSave.addColumn("TY_CRDR", "string");
        	this.dsSave.addColumn("AM_ACCOUNT", "BIGDECIMAL");
        	this.dsSave.addColumn("TY_VENDOR", "string");
        	this.dsSave.addColumn("DS_REM", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("DS_VENDOR", "string");
        	this.dsSave.addColumn("YN_LASTSLIP", "string");
        	this.dsSave.addColumn("YN_APPR", "string");
        	this.dsSave.addColumn("CD_SLIP_MI", "string");
        	this.dsSave.addColumn("YN_COPY", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("YN_VAT", "string");
        	this.dsSave.addColumn("FLAG_V", "string");
        	this.dsSave.addColumn("CD_VATDEPT_ACNT", "string");
        	this.dsSave.addColumn("TY_SALEBUY", "string");
        	this.dsSave.addColumn("CD_PROOF", "string");		//증빙코드
        	this.dsSave.addColumn("TY_VATBGJE", "string");		//불공제코드
        	this.dsSave.addColumn("CD_VATACCOUNT", "string");
        	this.dsSave.addColumn("TY_VATVENDOR", "string");
        	this.dsSave.addColumn("CD_VATVENDOR", "string");
        	this.dsSave.addColumn("DS_VATVENDOR", "string");
        	this.dsSave.addColumn("AM_SUPPLY", "BIGDECIMAL");
        	this.dsSave.addColumn("AM_VAT", "BIGDECIMAL");
        	this.dsSave.addColumn("AM_SERVICE", "BIGDECIMAL");
        	this.dsSave.addColumn("NO_CREDIT", "string");
        	this.dsSave.addColumn("DS_VATREM", "string");
        	this.dsSave.addColumn("CK_OMIT", "string");
        	this.dsSave.addColumn("DT_PROOF", "string");
        	this.dsSave.addColumn("TY_ISSUE", "string");

        	this.dsSave.addColumn("TY_ETC1", "string");
        	this.dsSave.addColumn("CD_ETC1", "string");
        	this.dsSave.addColumn("DS_ETC1", "string");
        	this.dsSave.addColumn("TY_ETC2", "string");
        	this.dsSave.addColumn("CD_ETC2", "string");
        	this.dsSave.addColumn("DS_ETC2", "string");
        	this.dsSave.addColumn("TY_REF", "string");
        	this.dsSave.addColumn("NO_REF", "string");
        	this.dsSave.addColumn("DS_REF", "string");
        	this.dsSave.addColumn("TY_REF2", "string");
        	this.dsSave.addColumn("NO_REF2", "string");
        	this.dsSave.addColumn("DS_REF2", "string");
        	this.dsSave.addColumn("AM_REF1", "BIGDECIMAL");
        	this.dsSave.addColumn("AM_REF2", "BIGDECIMAL");
        	this.dsSave.addColumn("DT_REF1", "string");
        	this.dsSave.addColumn("DT_REF2", "string");
        	this.dsSave.addColumn("RT_REF1", "BIGDECIMAL");
        	this.dsSave.addColumn("RT_REF2", "BIGDECIMAL");
        	this.dsSave.addColumn("CD_GONGJONG", "string");
        	this.dsSave.addColumn("DS_GONGJONG", "string");
        	this.dsSave.addColumn("ID_INSERT", "string");
        	this.dsSave.addColumn("TY_CLOSING", "string");

        	//전표삭제용 데이터셋
        	this.dsSlipDelete = new Dataset();
        	this.dsSlipDelete.addColumn("CD_TRADE", "string");

        	//파일폴더명변경용 데이터셋
        	this.dsRnameList = new Dataset();
        	this.dsRnameList.addColumn("PATH_ORG", "string");
        	this.dsRnameList.addColumn("PATH_NEW", "string");
        	this.dsRnameList.addColumn("SAVE_YN", "string");

        	this.dsFileUpdate = new Dataset();
        	this.dsFileUpdate.addColumn("CD_REF1", "string");
        	this.dsFileUpdate.addColumn("NEW_CD_REF1", "string");

        	this.dsFileSave = new Dataset();	//파일삭제용 데이터셋
        	this.dsFileSave.addColumn("TY_SAVE", "string");
        	this.dsFileSave.addColumn("CD_GUBUN", "string");
        	this.dsFileSave.addColumn("NO_SEQ", "string");
        	this.dsFileSave.addColumn("CD_REF1", "string");

        	this.dsDeleteList = new Dataset();	//파일삭제용 데이터셋
        	this.dsDeleteList.addColumn("filepath", "string");
        	this.dsDeleteList.addColumn("filename", "string");

        	//세금계산서 조회용 데이터셋
        	this.dsSelectTax = new Dataset();
        	this.dsSelectTax.addColumn("ISSUE_ID"  , "string");
        	this.dsSelectTax.addColumn("TY_SALEBUY", "string");

        	this.dsSelectDtReq = new Dataset();
        	this.dsSelectDtReq.addColumn("CD_TRADE", "string");
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

        	this.dsSelect.setColumn(0, "CD_TRADE", this.txtCD_TRADE.value);

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
        	if(!this.fnCheckValidate()) return;

        	var nRow = this.gfnGridAdd(this.dxGrid, "bottom", true);

        	this.dsList.set_enableevent(false);
         	var cdCorp = this.ccfCD_CORP.form.CDTextBox.value;
         	this.dsList.setColumn(nRow, "CD_CORP"   , cdCorp);						//법인코드
        	this.dsList.setColumn(nRow, "CD_TRADE"	, this.txtCD_TRADE.value);		//거래번호
        	this.dsList.setColumn(nRow, "DT_ACCOUNT", this.calDT_ACCOUNT.value);	//발행일자
        	this.dsList.setColumn(nRow, "AM_DR"		, "");							//차변금액
        	this.dsList.setColumn(nRow, "AM_CR"		, "");							//대변금액
        	this.dsList.setColumn(nRow, "CD_ACCOUNT", "");							//계정코드
        	this.dsList.setColumn(nRow, "CD_DEPT_BH", this.ccfACNTUNIT.form.CDTextBox.value);	//발행부서
         	this.dsList.setColumn(nRow, "TY_CLOSING", this.ccboTY_SLIP.value);		//전표구분
         	this.dsList.setColumn(nRow, "YN_VAT"  	, "N");							//부가세여부

        	//수정일 경우 전표번호 채번
        	if(this.V_IUD_FLAG == "U"){
        		var cdSlip = this.fnSetCdSlip(this.txtCD_TRADE.value);
        		this.dsList.setColumn(nRow, "CD_SLIP"   , cdSlip);
        		this.dsList.setColumn(nRow, "FILE_DIR"  , cdSlip);

        		this.FormBtns.Select.set_enable(true);
        	}else{
        		this.FormBtns.Select.set_enable(false);
        	}

        	//항번 셋팅
        	this.fnNoViewSetting();

        	this.dsList.set_enableevent(true);

        	//하단 관리항목 로우 추가
        	if(this.dsListSub.rowcount == 0){
        		this.gfnGridAdd(this.dxGridSub, null, false);
        	}

        	this.gfnSetEnable(this.btnDFPopup, false);

        	var colISSUE_ID = this.dxGrid.getBindCellIndex("body", "ISSUE_ID");
        	this.dxGrid.setCellPos(colISSUE_ID, nRow);
        	this.dxGrid.showEditor(true);

        	return nRow;
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	var rPos = this.dsList.rowposition;

        	//상단 데이터가 증빙데이터일 경우
        	if(this.dsList.getColumn((rPos-1), "YN_VAT") == "Y"){
        		if(this.dsList.getColumn(rPos, "CD_ACCOUNT") == "112411" || this.dsList.getColumn(rPos, "CD_ACCOUNT") == "211511"){	//선급부가세/선수부가세일경우
        			this.gfnAlert("부가세계정은 삭제할수 없습니다. 증빙팝업에서 삭제처리하세요.");
        			return;
        		}
        	}

        	if(this.dsList.getColumn(rPos, "YN_VAT") == "Y"){
        		if(this.dsList.getColumn((rPos+1), "CD_ACCOUNT") == "112411" || this.dsList.getColumn((rPos+1), "CD_ACCOUNT") == "211511"){	//선급부가세/선수부가세일경우
        			this.gfnAlert("증빙팝업에서 부가세 삭제 후 처리 가능합니다.");
        			return;
        		}
        	}

        	this.gfnGridDel(this.dxGrid);

        	if(this.dsList.rowcount == 0){
        		this.dsListSub.clearData();
        	}

         	var rCnt = this.dsList.rowcount;

         	if(rCnt > 0){
         		this.dxGrid.setCellPos(4, rCnt-1);
         	}

        	//수정일 경우 전표번호 채번
        	if(this.V_IUD_FLAG == "U"){
        		this.FormBtns.Select.set_enable(true);
        	}else{
        		this.FormBtns.Select.set_enable(false);
        	}

        	//항번 셋팅
        	this.fnNoViewSetting();
        	//하단 계산
        	this.fnCalcSlip();

        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if(this.dsList.rowcount == 0) return;

        	if (!this.gfnGridValidate(this.dxGrid)) return;
        	if (!this.fnDataValidate()) return;

        	this.dxGrid.updateToDataset();

        	//신규 처리
        	if(this.gfnIsNull(this.txtCD_TRADE.value)){
        		//거래번호/전표번호 채번
        		this.fnSelectNewCode();
        	}else{
        		this.fnSave2();
        	}
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
        	if (this.gfnIsNull(this.txtCD_TRADE.value)) {
        		validate = false;
        		this.gfnAlert("전표번호가 없습니다.");
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
        	switch(svcID) {
        	case "select" :
        		this.gfnGridAfterSelect(this.dxGrid);


        		if(this.dsList.rowcount > 0){
        			this.fnCalcSlip();

        			this.dsSearch.set_enableevent(false);

        			//다른화면에서 넘어 왔을경우 검색조건 셋팅
        			if (!this.gfnIsNull(this.getOwnerFrame().CD_TRADE)) {
        				this.ccfCD_CORP.form.CDTextBox.set_value(this.dsList.getColumn(0, "CD_CORP"));
        				this.ccfCD_CORP.form.DSTextBox.set_value(this.dsList.getColumn(0, "DS_CORP"));
        				this.ccfACNTUNIT.form.CDTextBox.set_value(this.dsList.getColumn(0, "CD_DEPT_BH"));
        				this.ccfACNTUNIT.form.DSTextBox.set_value(this.dsList.getColumn(0, "DS_DEPT_BH"));
        				this.calDT_ACCOUNT.set_value(this.dsList.getColumn(0, "DT_ACCOUNT_H"));
        			}

        			//입금전표일 경우
        			if(this.dsList.getColumn(0, "TY_CLOSING") == "03"){
        				this.dsTY_SLIP.filter("");
        			}else{
        				this.dsTY_SLIP.filter("CD_CODE != '03'");
        			}

        			this.ccboTY_SLIP.set_value(this.dsList.getColumn(0, "TY_CLOSING"));

        			this.dsSearch.set_enableevent(true);

        			this.ccboYN_APPR.set_value(this.dsList.getColumn(0, "YN_APPR"));
        			this.txtDS_AUTOSLIP.set_value(this.dsList.getColumn(0, "DS_AUTOSLIP"));

        			this.txtDT_UPDATE.set_value(this.dsList.getColumn(0, "DT_INSERT"));
        			this.txtDS_HNAME.set_value(this.dsList.getColumn(0, "DS_INSERT"));
        			this.ccboCD_APP.set_value(this.dsList.getColumn(0, "CD_APP"));

        			//자동전표 여부
        			this.V_CD_AUTOSLIP = this.dsList.getColumn(0, "CD_AUTOSLIP");


        			var vFlag = "";

        			if(!this.gfnIsNull(this.V_CD_AUTOSLIP)){	//자동전표일 경우
        				vFlag = "S"; //조회용
        			}else{
        				if(this.dsList.getColumn(0, "YN_APPR") == "Y"){	//승인 전표일경우
        					vFlag = "S"; //조회용
        				}else{
        					//결재중/결재완료
        					if(this.dsList.getColumn(0, "CD_APP") == "1" || this.dsList.getColumn(0, "CD_APP") == "2"){
        						vFlag = "S"; //조회용
        					}else{
        						vFlag = "U"; //수정가능
        					}
        				}

        			}
        			//자동 전표가 아니고 승인이 안되어 있을 경우
        // 			if(this.gfnIsNull(this.V_CD_AUTOSLIP) && this.dsList.getColumn(0, "YN_APPR") != "Y"){
        // 				vFlag = "U";
        // 			}else{
        // 				vFlag = "S";
        // 				if(this.dsList.getColumn(0, "YN_APPR") == "Y"){
        // 					vFlag = "A";
        // 				}
        // 			}

        			//입금전표일 경우
        			if(this.dsList.getColumn(0, "TY_CLOSING") == "03"){
        				vFlag = "S";
        			}

        			//전역변수에 상태값 담기
        			this.V_IUD_FLAG = vFlag;


        			this.fnSetButtonEnable(vFlag);

        			//파일 조회
        			this.fnFileSelect();
        		}else{
        			this.V_IUD_FLAG = "N";
        		}

        		// 전표결제, 결제조회 버튼 활성화 여부
        		if( !this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition , "NO_DOC")) ){
        			this.btnSchApprove.set_enable(true);
        		} else {
        			this.btnSchApprove.set_enable(false);
        		}

        		break;
        	case "selectSub" :
        		this.gfnGridAfterSelect(this.dxGridSub);
        		break;
        	case "combo" :
        		if(this.gfnIsNull(this.getOwnerFrame().CD_TRADE)){
        			if(this.gfnIsNull(this.getOwnerFrame().YN_DF)){
        				this.dsTY_SLIP.filter("CD_CODE != '03'");
        			}else{
        				this.dsTY_SLIP.filter("");
        			}
        		}

        		break;
        	case "newCode" :
        		if (errorCode == 0) {

        			//검색조건 전표번호 셋팅
        			this.txtCD_TRADE.set_value(this.dsNewCode.getColumn(0, "CD_TRADE"));

        			//this.dsRnameList.clearData();

        			this.dsList.set_enableevent(false);
        			for(var i = 0;i<this.dsList.rowcount;i++){
        				if(this.gfnGetFlag(this.dsList, i) == "I"){	//신규 데이터만
        					//전표번호 셋팅
        					var cdSlip = this.fnSetCdSlip(this.dsNewCode.getColumn(0, "CD_TRADE"));
        					this.dsList.setColumn(i, "CD_TRADE", this.dsNewCode.getColumn(0, "CD_TRADE"));
        					this.dsList.setColumn(i, "CD_SLIP" , cdSlip);

        					var fileDir = this.dsList.getColumn(i, "FILE_DIR");
        					if(!this.gfnIsNull(fileDir)){
        						if(fileDir.indexOf("TEMP") > -1){	//임시 업로드한 파일이 있을경우

        							var nRow = this.dsRnameList.addRow();
        							this.dsRnameList.setColumn(nRow, "PATH_ORG", fileDir);
        							this.dsRnameList.setColumn(nRow, "PATH_NEW", cdSlip);
        							this.dsRnameList.setColumn(nRow, "SAVE_YN" , "N");
        						}
        					}
        				}
        			}
        			this.dsList.set_enableevent(true);

        			this.fnSave2();

        			this.dsNewCode.clearData();

        			//this.V_IUD_FLAG = "U";	//전역 플래그 수정으로 변경

        			//this.fnSetButtonEnable(this.V_IUD_FLAG);
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        		break;
        	case "save" :
        		if (errorCode == 0) {

        			if(this.V_IUD_FLAG == "N"){
        				this.V_IUD_FLAG = "U";	//전역 플래그 수정으로 변경
        			}

        			this.fnSetButtonEnable(this.V_IUD_FLAG);

        			//파일명변경 처리

        			if(this.dsRnameList.rowcount > 0) {;
        				this.fnFileMove();
        			}else{
        				this.FormBtns.Select.click();
        			}

        			//자금 입금내역 전표일 경우 저장 후 프로시저 호출
        			if(this.V_YN_DF == "Y"){
        				this.fnDFProcCall();
        			}
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        		break;
        	case "slipDelete" :
        		if (errorCode == 0) {
        			//전표번호 초기화
        			this.txtCD_TRADE.set_value("");

        			this.gfnSetFormStatus(this);	// 폼상태 초기화
        			this.gfnGridClear(this.dxGrid);
        			this.gfnGridClear(this.dxGridSub);
        			this.FormBtns.Add.set_enable(true);

        			//this.txtDT_MAGAM.set_value("");
        			this.mskSUM_CRDR.set_value("");
        			this.mskAM_DR.set_value("");
        			this.mskAM_CR.set_value("");
        			this.mskCOUNT.set_value("");

        			this.V_IUD_FLAG = "I";

        			//첨부파일 삭제
        			this.fnFileDelete();

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        		break;
        	case "fileSelect" :
        		trace("파일 조회 완료!!");
        	    break;

        	case "selectTax" :
        		if (errorCode == 0) {
        			if(this.dsTax.rowcount > 0){
        				var url = this.gfnGetConfig("DH" , "TAX_URL");
        				url = url+"Tax/TaxView.jsp?";
        				url += "invseq="+this.dsTax.getColumn(0, "INV_SEQ");
        				url += "&status="+this.dsTax.getColumn(0, "STATUS");
        				url += "&burks=" +this.dsTax.getColumn(0, "BUKRS");

        				window.open(url, "_blank", "width=790,height=600,menubar=no,scrollbars=no,resizable=no,status=no");
        			}else{
        				this.gfnAlert("세금계산서 정보가 없습니다.");
        			}
        		}else{
        			this.gfnAlert(errorMsg);
        		}
        		break;
        	case "selectDtReq" :
        		if (errorCode == 0) {

        			var dtReq = "";
        			if(this.dsDtReq.rowcount > 0){
        				dtReq = this.dsDtReq.getColumn(0, "DT_REQ");
        			}

        			var cdApp = "";
        			if(this.dsChkCdApp.rowcount > 0){
        				cdApp = this.dsChkCdApp.getColumn(0, "CD_APP");
        			}

        			if(cdApp == "1" || cdApp == "2"){
        				this.gfnAlert("이미 결재상신 중 입니다.");
        				return;
        			}

        			var dtAccount = this.dsList.getColumn(0, "DT_ACCOUNT");
        			dtAccount = dtAccount.substr(0,4)+"-" + dtAccount.substr(4,2) + "-" + dtAccount.substr(6,2);

        			var txtSubject = this.gfnNvl(this.dsList.getColumn(0, "DS_CORP"),"");									//법인명
        			txtSubject += " / "+ (this.gfnIsNull(this.dsList.getColumn(0, "CD_AUTOSLIP")) ? "일반전표" : this.dsList.getColumn(0, "DS_AUTOSLIP"));
        			txtSubject += " / "+ this.gfnNvl(this.dsList.getColumn(0, "DS_INSERT"),"");								//작성자
        			txtSubject += " / "+ nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(0, "DS_DEPT_BH"),""),"&","");	//발행부서
        			txtSubject += " / "+ this.gfnNvl(dtAccount,"");	                                						//회계일자
        			txtSubject += " / 자금 : "+ this.gfnNvl(dtReq,"");														//자금요청일
        			txtSubject += " / "+ nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(0, "DS_REM"),""),"&","");		//대표적요
        			txtSubject += " / "+ this.gfnAppendComma(nexacro.toNumber(this.dsList.getSum("AM_DR"),0));				//금액

        			var url = this.gfnGetConfig("DZ" , "GW_APROVAL_URL");
        			url = url+"approval/legacy/goFormLink.do?mode=DRAFT&legacyFormID=WF_FORM_ERP_SLIP";
        			url += "&subject="+encodeURI(txtSubject);
        			url += "&dataType=proc";
        			url += "&empno="+this.AuthClient.ID_USER;
        			url += "&P_DS_KEY1="+this.txtCD_TRADE.value;  // 전표번호
        			url += "&P_DS_KEY2=&P_DS_KEY3=&P_DS_KEY4=&P_DS_KEY5=";

        			window.open(url, "_blank", "width=790,height=600,menubar=no,scrollbars=no,resizable=no,status=no");
        		}else{
        			this.gfnAlert(errorMsg);
        		}
        		break;
        	}
        }

        this.fnMsgCallback = function() {
        	this.FormBtns.Select.click();
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	switch(id) {
        		case "ccfCD_CORP":	//법인코드
        			this.ccfACNTUNIT.form.fnCodeFindClear();
        		break;
        	}
        }

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}
        	if (id == "ccfACNTUNIT") {
        		var cdCorp = this.ccfCD_CORP.form.CDTextBox.value;
        		if (!this.gfnIsNull(cdCorp)) {
        			dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");		//상위부서
        			dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "");				//전표발행여부
        			dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);			//법인코드
        			dsUserParam.setColumn(nrow, "YN_USE"		, "Y");				//사용여부
        			dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");				//현장/본사여부
        			dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        			dsUserParam.setColumn(nrow, "GR_SEARCH"	    , this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);
        		}else{
        			this.gfnAlert("법인코드는 필수입력 값입니다.");
        			return false;
        		}
        	}

        	return true;
        };

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
        	var cdCorp = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        	switch(id) {
        		case "DHX_CFEBILLBUY_ESERO":	//전자세금계산서
        			dsUserParam.setColumn(nrow, "CD_CORP"   , cdCorp);
        			dsUserParam.setColumn(nrow, "TY_SALEBUY", "I");	//매입만
        		break;
        		case "DHX_CFACCOUNT":	//계정코드
        			dsUserParam.setColumn(nrow, "YN_SLIP", "Y");
        		break;
        		case "DHX_CFALLVENDOR_CODEFIND":	//거래처코드
        			dsUserParam.setColumn(nrow, "CD_CORP" , cdCorp);
        		break;
        		case "DHX_CFACNTUNIT":	//귀속부서
        			dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");			//상위부서
        			dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");			//전표발행여부
        			dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);		//법인코드
        			dsUserParam.setColumn(nrow, "YN_USE"		, "Y");			//사용여부
        			dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");			//현장/본사여부
        		break;
        	}

        	return true;
        }

        this.fnGridSub_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
        	var cdCorp  = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        	var cdVendor  = this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR");
        	var cdAccount = this.dsList.getColumn(this.dsList.rowposition, "CD_ACCOUNT");

        	switch(id) {
        		case "DHX_CFETC_CODEFIND1":	//ETC1
        		case "DHX_CFETC_CODEFIND2":	//ETC2
        		case "DHX_CFETC_CODEFIND4":	//REF2
        			var cfDiv = this.gfnRight(id, 1);
        			if(cfDiv == "1"){
        				colTyName = "TY_ETC1";
        			}else if(cfDiv == "2"){
        				colTyName = "TY_ETC2";
        			}else if(cfDiv == "3"){
        				colTyName = "TY_REF";
        			}else{
        				colTyName = "TY_REF2";
        			}

        			var TyVendor  = this.dsListSub.getColumn(this.dsListSub.rowposition, colTyName);

        			if(this.gfnIsNull(cdVendor)){
        				this.gfnAlert("전표정보에 거래처코드를 먼저 선택 하세요");
        				return false;
        			}

        			if(this.gfnIsNull(TyVendor)){
        				this.gfnAlert("구분을 선택 하세요");
        				return false;
        			}

        			dsUserParam.setColumn(nrow, "TY_VENDOR"   , TyVendor);
        			dsUserParam.setColumn(nrow, "CD_VENDOR"   , cdVendor);
        			dsUserParam.setColumn(nrow, "CD_CORP" 	  , cdCorp);
        		break;
        		case "DHX_CFETC_CODEFIND3":	//REF1 20200520 관리항목이 계좌번호 인 경우 CD_VENDOR = 상단 계정코드값
        			var cfDiv = this.gfnRight(id, 1);
        			if(cfDiv == "1"){
        				colTyName = "TY_ETC1";
        			}else if(cfDiv == "2"){
        				colTyName = "TY_ETC2";
        			}else if(cfDiv == "3"){
        				colTyName = "TY_REF";
        			}else{
        				colTyName = "TY_REF2";
        			}

        			var TyVendor  = this.dsListSub.getColumn(this.dsListSub.rowposition, colTyName);

        			if(this.gfnIsNull(cdVendor)){
        				this.gfnAlert("전표정보에 거래처코드를 먼저 선택 하세요");
        				return false;
        			}

        			if(this.gfnIsNull(TyVendor)){
        				this.gfnAlert("구분을 선택 하세요");
        				return false;
        			}
        			dsUserParam.setColumn(nrow, "TY_VENDOR"   , TyVendor);
        			if(TyVendor == "H"){ //계좌번호
        				dsUserParam.setColumn(nrow, "CD_VENDOR"   , cdAccount); //계정코드
        			} else {
        				dsUserParam.setColumn(nrow, "CD_VENDOR"   , cdVendor);
        			}
        			dsUserParam.setColumn(nrow, "CD_CORP" 	  , cdCorp);
        		break;
        		case "DWX_CFTREESHCOST_01":	//공종코드
        			//dsUserParam.setColumn(nrow, "CD_SITE"	, cdDeptBe);	//현장코드
        			//dsUserParam.setColumn(nrow, "CD_GBIMOK"	, "");		//비목
        		break;
        	}

        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	var rowPos = this.dsList.rowposition;

        	switch(id) {
        		case "DHX_CFEBILLBUY_ESERO":	//전자세금계산서번호
        			if (arrData.length > 0) {
        				var issueDate = nexacro.replaceAll(this.gfnNvl(arrData[0]["ISSUE_DATE"],""),"-","");
        				this.dsList.set_enableevent(false);


        				this.dsList.setColumn(rowPos, "DT_ACCOUNT"	, issueDate);	//회계일자
        				this.dsList.setColumn(rowPos, "CD_VENDOR" 	, arrData[0]["CD_VENDOR"]);		//거래처코드
        				this.dsList.setColumn(rowPos, "DS_VENDOR" 	, arrData[0]["DS_VENDOR"]);		//거래처명
        				this.dsList.setColumn(rowPos, "TY_VENDOR" 	, arrData[0]["TY_VENDOR"]);		//거래처구분
        				this.dsList.setColumn(rowPos, "TY_CRDR"	  	, arrData[0]["TY_CRDR"]);		//차대구분
        				this.dsList.setColumn(rowPos, "TY_SALEBUY"	, arrData[0]["TY_SALEBUY"]);	//거래구분
        				this.dsList.setColumn(rowPos, "AM_SUPPLY"	, arrData[0]["CHARGETOTAL"]);	//공급가액
        				this.dsList.setColumn(rowPos, "AM_VAT"		, arrData[0]["TAXTOTAL"]);		//부가세
        				this.dsList.setColumn(rowPos, "TY_ISSUE"	, "E");		//발행구분(전자발행)
        				this.dsList.setColumn(rowPos, "DT_PROOF"    , issueDate);		//부가세 증빙일자

        				if(arrData[0]["TY_SALEBUY"] == "I"){	//매입
        					this.dsList.setColumn(rowPos, "AM_DR", arrData[0]["CHARGETOTAL"]);	//차변
        					this.dsList.setColumn(rowPos, "AM_CR", "");	//대변
        				}else{
        					this.dsList.setColumn(rowPos, "AM_DR", "");	//차변
        					this.dsList.setColumn(rowPos, "AM_CR", arrData[0]["CHARGETOTAL"]);	//대변
        				}

        				//증빙구분이 Y일경우
        				if(this.dsList.getColumn(rowPos, "YN_VAT") == "Y"){
        					if(this.dsList.getColumn(rowPos+1, "CD_ACCOUNT") == "112411" || this.dsList.getColumn(rowPos+1, "CD_ACCOUNT") == "211511"){
        						this.dsList.setColumn(rowPos+1, "DT_ACCOUNT"	, issueDate);	//회계일자
        						this.dsList.setColumn(rowPos+1, "CD_VENDOR" 	, arrData[0]["CD_VENDOR"]);		//거래처코드
        						this.dsList.setColumn(rowPos+1, "DS_VENDOR" 	, arrData[0]["DS_VENDOR"]);		//거래처명
        						this.dsList.setColumn(rowPos+1, "TY_VENDOR" 	, arrData[0]["TY_VENDOR"]);		//거래처구분
        						this.dsList.setColumn(rowPos, "CD_VATVENDOR" 	, arrData[0]["CD_VENDOR"]);		//부가세 거래처코드
        						this.dsList.setColumn(rowPos, "DS_VATVENDOR" 	, arrData[0]["DS_VENDOR"]);		//부가세 거래처명
        						this.dsList.setColumn(rowPos, "TY_VATVENDOR" 	, arrData[0]["TY_VENDOR"]);		//부가세 거래처구분

        						if(this.dsList.getColumn(rowPos, "TY_CRDR") == "D"){	//차대가 차변일경우
        							this.dsList.setColumn(rowPos+1, "AM_DR", arrData[0]["TAXTOTAL"]);	//차변
        							this.dsList.setColumn(rowPos+1, "AM_CR", "");	//대변
        						}else{
        							this.dsList.setColumn(rowPos+1, "AM_DR", "");	//차변
        							this.dsList.setColumn(rowPos+1, "AM_CR", arrData[0]["TAXTOTAL"]);	//대변
        						}
        						//하단 금액 계산
        						this.fnCalcSlip();

        						if(this.gfnGetFlag(this.dsList, (rowPos+1)) != "I"){
        							this.dsList.setColumn((rowPos+1), this.ucFlag , "U");
        						}
        					}
        				}


        				this.dsList.set_enableevent(true);

        				var colCD_ACCOUNT = this.dxGrid.getBindCellIndex("body", "CD_ACCOUNT");
        				this.dxGrid.setCellPos(colCD_ACCOUNT);
        				this.dxGrid.showEditor(true);
        			}
        		break;
        		case "DHX_CFACCOUNT":	//계정코드
        			//계정코드 변경시 관리항목 컬럼 초기화
        			this.dsList.set_enableevent(false);
        			this.dsList.setColumn(rowPos, "CD_ETC1", "");
        			this.dsList.setColumn(rowPos, "DS_ETC11", "");
        			this.dsList.setColumn(rowPos, "CD_ETC2", "");
        			this.dsList.setColumn(rowPos, "DS_ETC21", "");
        			this.dsList.setColumn(rowPos, "NO_REF", "");
        			this.dsList.setColumn(rowPos, "DS_REF", "");
        			this.dsList.setColumn(rowPos, "NO_REF2", "");
        			this.dsList.setColumn(rowPos, "DS_REF2", "");
        			this.dsList.setColumn(rowPos, "AM_REF1", "");
        			this.dsList.setColumn(rowPos, "AM_REF2", "");
        			this.dsList.setColumn(rowPos, "DT_REF1", "");
        			this.dsList.setColumn(rowPos, "DT_REF2", "");
        			this.dsList.setColumn(rowPos, "RT_REF1", "");
        			this.dsList.setColumn(rowPos, "RT_REF2", "");
        			this.dsList.set_enableevent(true);

        			//자금에서 들어온 경우
        			if(this.dsList.getColumn(rowPos, "YN_DF") == "Y"){
        				this.fnSetGridEtcData();
        			}

        			//관리항목 그리드 셋팅
        			this.fnEtcGridSetting(rowPos);

        			if(nexacro.toNumber(this.dsList.getColumn(rowPos, "AM_DR"),0) != 0){	// 차변에 금액이 있을경우 차대구분 차변으로 변경
        				this.dsList.setColumn(rowPos, "TY_CRDR", "D");
        			}
        			if(nexacro.toNumber(this.dsList.getColumn(rowPos, "AM_CR"),0) != 0){	// 대변에 금액이 있을경우 차대구분 대변으로 변경
        				this.dsList.setColumn(rowPos, "TY_CRDR", "C");
        			}

        			if (arrData.length > 0) {
        				//부가세 계정 변경
        				this.dsList.set_enableevent(false);
        				this.dsList.setColumn(rowPos, "CD_VATACCOUNT", arrData[0]["CD_ACCOUNT"] +"|"+ arrData[0]["DS_ACCOUNT"]);
        				this.dsList.set_enableevent(true);
        			}

        			if(this.dsList.getColumn(rowPos, "YN_VAT_ADD") != "Y"){

        				var colDS_REM = this.dxGrid.getBindCellIndex("body", "DS_REM");
        				//this.dsList.set_rowposition(rowPos);
        				this.dxGrid.setCellPos(colDS_REM);
        				this.dxGrid.showEditor(true);
        			}else{
        				this.dsList.set_rowposition((rowPos+1));

        				var colCD_ACCOUNT = this.dxGrid.getBindCellIndex("body", "CD_ACCOUNT");
        				this.dxGrid.setCellPos(colCD_ACCOUNT, (rowPos+1));
        				this.dxGrid.showEditor(true);
        			}


        		break;
        		case "DHX_CFALLVENDOR_CODEFIND":	//거래처

         			var colCD_DEPT_BE = this.dxGrid.getBindCellIndex("body", "CD_DEPT_BE");

         			this.dxGrid.setCellPos(colCD_DEPT_BE, rowPos);
        //			this.dxGrid.showEditor(true);
        			if (arrData.length > 0) {
        				//부가세 거래처 변경
        				this.dsList.set_enableevent(false);
        				this.dsList.setColumn(rowPos, "TY_VATVENDOR", arrData[0]["TY_VENDOR"]);
        				this.dsList.setColumn(rowPos, "CD_VATVENDOR", arrData[0]["CD_VENDOR"]);
        				this.dsList.setColumn(rowPos, "DS_VATVENDOR", arrData[0]["DS_VENDOR"]);

        				var tySaleBuy = this.dsList.getColumn(rowPos, "TY_SALEBUY");
        				var fAcnt = this.dsList.findRowExpr("currow == "+(rowPos+1)+" && CD_ACCOUNT == "+(tySaleBuy == "I" ? "112411" : "211511")+"'");
        				if(fAcnt > -1){
        					this.dsList.setColumn((rowPos+1), "TY_VENDOR" , arrData[0]["TY_VENDOR"]);
        					this.dsList.setColumn((rowPos+1), "CD_VENDOR" , arrData[0]["CD_VENDOR"]);
        					this.dsList.setColumn((rowPos+1), "DS_VENDOR" , arrData[0]["DS_VENDOR"]);

        					if(this.gfnGetFlag(this.dsList, (rowPos+1)) != "I"){
        						this.dsList.setColumn((rowPos+1), this.ucFlag , "U");
        					}
        				}
        				this.dsList.set_enableevent(true);
        			}

        		break;
        		case "DHX_CFACNTUNIT":	//귀속부서
        			if (arrData.length > 0) {
        				//부가세 귀속부서 변경
        				this.dsList.set_enableevent(false);
        				//this.dsList.setColumn(rowPos, "CD_VATDEPT_ACNT" , arrData[0]["CD_DEPT_ACNT"] +"|"+ arrData[0]["DS_DEPT_ACNT"]);			//부가세 귀속부서
        				this.dsList.setColumn(rowPos, "CD_DEPT_ACNT_BON", arrData[0]["CD_DEPT_ACNT_BON"]);	//본사귀속부서코드
        				this.dsList.setColumn(rowPos, "DS_DEPT_ACNT_BON", arrData[0]["DS_DEPT_ACNT_BON"]);	//본사귀속부서명

        				var tySaleBuy = this.dsList.getColumn(rowPos, "TY_SALEBUY");
        				var fAcnt = this.dsList.findRowExpr("currow == "+(rowPos+1)+" && CD_ACCOUNT == "+(tySaleBuy == "I" ? "112411" : "211511")+"'");
        				if(fAcnt > -1){
         					if(this.dsList.getColumn(rowPos, "TY_SALEBUY") == "I"){	//매입일경우
         						if(!this.gfnIsNull(this.dsList.getColumn(rowPos, "CD_DEPT_BUY"))){
        							var cdDeptAcnt = arrData[0]["CD_DEPT_BUY"];
        							var dsDeptAcnt = arrData[0]["DS_DEPT_BUY"];
        						}else{
        							var cdDeptAcnt = arrData[0]["CD_DEPT_ACNT"];
        							var dsDeptAcnt = arrData[0]["DS_DEPT_ACNT"];
        						}
        						this.dsList.setColumn(rowPos, "CD_VATDEPT_ACNT", cdDeptAcnt +"|"+ dsDeptAcnt);	//부가세 발의부서
        					}


        					this.dsList.setColumn((rowPos+1), "CD_DEPT_BE" , arrData[0]["CD_DEPT_ACNT"]);	//부가세 귀속부서코드
        					this.dsList.setColumn((rowPos+1), "DS_DEPT"    , arrData[0]["DS_DEPT_ACNT"]);	//부가세 귀속부서명

        					this.dsList.setColumn((rowPos+1), "CD_DEPT_BUY", arrData[0]["CD_DEPT_BUY"]);	//부가세 매입귀속부서코드
        					this.dsList.setColumn((rowPos+1), "DS_DEPT_BUY", arrData[0]["DS_DEPT_BUY"]);	//부가세 매입귀속부서명
        					this.dsList.setColumn((rowPos+1), "CD_DEPT_ACNT_BON", arrData[0]["CD_DEPT_ACNT_BON"]);	//부가세 본사귀속부서코드
        					this.dsList.setColumn((rowPos+1), "DS_DEPT_ACNT_BON", arrData[0]["DS_DEPT_ACNT_BON"]);	//부가세 본사귀속부서명

        					if(this.gfnGetFlag(this.dsList, (rowPos+1)) != "I"){
        						this.dsList.setColumn((rowPos+1), this.ucFlag , "U");
        					}

        				}
        				this.dsList.set_enableevent(true);
        			}
        		break;
         	}

        };

        this.fnGridSub_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	var rowPos = this.dsListSub.rowposition;

        	switch(id) {
        		case "DHX_CFETC_CODEFIND1":
        		case "DHX_CFETC_CODEFIND2":
        		case "DHX_CFETC_CODEFIND3":
        		case "DHX_CFETC_CODEFIND4":
        			//데이터 복사 처리
        			this.fnCopyData(this.dsListSub, rowPos);
        		break;
         	}
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		//this.FormBtns.SubSelect.click();
        		//관리항목 데이터 셋팅

        		obj.oldrow = -1;
        	}
        };

        //그리드 더블클릭 이벤트
        this.fnGrid_CellDblclick = function(obj,e)
        {
        	var colName = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);

        	if(colName == "YN_VAT"){	//증빙일 경우
        		this.fnCallVatPopup();
        	}
        };

        //그리드 값변경 이벤트
        this.dsList_ColumnChanged = function(obj, e)
        {

        	//전자세금계산서번호
        	if(e.columnid == "ISSUE_ID"){
        		if(e.newvalue != e.oldvalue && this.gfnIsNull(e.newvalue)){
        			//obj.setColumn(e.row, "TY_SALEBUY" , "");		//거래구분 초기화
        			obj.setColumn(e.row, "TY_ISSUE"   , "P");		//발행구분(일반)
        		}
        	}

        	if(e.columnid == "AM_DR" || e.columnid == "AM_CR"){	//차변 OR 대변 수정시
        		var colIdAm = (e.columnid == "AM_DR" ? "AM_CR" : "AM_DR");
        		var tyCrdr = (e.columnid == "AM_DR" ? "D" : "C");

        		obj.setColumn(e.row, colIdAm     , "");			//금액
        		obj.setColumn(e.row, "TY_CRDR"  , tyCrdr);		//TY_CRDR
        		obj.setColumn(e.row, "AM_SUPPLY", e.newvalue);	//부가세공급가

        		var vatRate   = nexacro.toNumber(obj.getColumn(e.row, "VAT_RATE") ,0);	//부가세율
        		if(!this.gfnIsNull(obj.getColumn(e.row, "VAT_RATE"))){
        			var amVat = (vatRate == 0 ? 0 : nexacro.floor(nexacro.toNumber(e.newvalue ,0) / vatRate));
        			obj.setColumn(e.row, "AM_VAT", amVat);	//부가세

        			if(this.gfnGetFlag(obj, e.row) != "D"){
        				var nextCdAcnt = obj.getColumn((e.row+1), "CD_ACCOUNT");
        				if(nextCdAcnt == "112411"){	//선급부가세일경우
        					obj.setColumn((e.row+1), "AM_DR"	, amVat);	//차변
        					obj.setColumn((e.row+1), "AM_CR"	, "");		//대변

        					if(this.gfnGetFlag(obj, e.row) != "I"){
        						obj.setColumn((e.row+1), this.ucFlag, "U");		//상태값
        					}
        				}
        				if(nextCdAcnt == "211511"){	//선수부가세일경우
        					obj.setColumn((e.row+1), "AM_DR"	, "");		//차변
        					obj.setColumn((e.row+1), "AM_CR"	, amVat);	//대변
        					if(this.gfnGetFlag(obj, e.row) != "I"){
        						obj.setColumn((e.row+1), this.ucFlag, "U");		//상태값
        					}
        				}
        	// 			if(nextCdAcnt == "112411" || nextCdAcnt == "211511"){	//선급부가세/선수부가세일경우
        	// 				obj.setColumn((e.row+1), e.columnid, amVat);	//부가세
        	// 				obj.setColumn((e.row+1), this.ucFlag, "U");		//상태값
        	// 			}
        			}
        		}

        		//하단 금액 계산
        		this.fnCalcSlip();

        		if(this.fnBjDataCheck(e.row)){
        			//반제전표 코드가 없으면 반제전표 팝업 호출
        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(e.row, "CD_SLIP_MI")))){
        				//this.dxGrid.removeEventHandler("onkeydown", this._grd_onkeydown, this);


        				var nIndex = this.dxGrid.findEventHandler("onkeydown", this.fnGrid_onkeydown, this );

        				if(nIndex > -1) this.dxGrid.removeEventHandler("onkeydown", this.fnGrid_onkeydown, this);
        				this.btnSlipBanje.click();
        			}
        		}

        	}

        	//적요
        	if(e.columnid == "DS_REM"){
        		obj.setColumn(e.row, "DS_VATREM" , e.newvalue);		//부가세적요

        		var tySaleBuy = obj.getColumn(e.row, "TY_SALEBUY");
        		var fAcnt = obj.findRowExpr("currow == "+(e.row+1)+" && CD_ACCOUNT == "+(tySaleBuy == "I" ? "112411" : "211511")+"'");
        		if(fAcnt > -1){
        			obj.setColumn((e.row+1), e.columnid , e.newvalue);

        			if(this.gfnGetFlag(obj, (e.row+1)) != "I"){
        				obj.setColumn((e.row+1), this.ucFlag , "U");
        			}
        		}
        	}

        	//회계일자
        	if(e.columnid == "DT_ACCOUNT"){
        		obj.setColumn(e.row, "DT_PROOF" , e.newvalue);		//부가세 증빙일자

        		var tySaleBuy = obj.getColumn(e.row, "TY_SALEBUY");
        		var fAcnt = obj.findRowExpr("currow == "+(e.row+1)+" && CD_ACCOUNT == "+(tySaleBuy == "I" ? "112411" : "211511")+"'");
        		if(fAcnt > -1){
        			obj.setColumn((e.row+1), e.columnid , e.newvalue);
        			if(this.gfnGetFlag(obj, (e.row+1)) != "I"){
        				obj.setColumn((e.row+1), this.ucFlag , "U");
        			}
        		}
        	}

        	//증빙
        /*	if(e.columnid == "YN_VAT"){
        		var ynVatOrg = obj.getOrgColumn(e.row, e.columnid);
        		var tySaleBuy = obj.getColumn(e.row, "TY_SALEBUY");	//거래구분
        		var fAcnt = obj.findRowExpr("currow == "+(e.row+1)+" && CD_ACCOUNT == "+(tySaleBuy == "I" ? "112411" : "211511")+"'");

        		if(e.newvalue == "N" && ynVatOrg == "Y"){
        			if(fAcnt > -1){
        				if(this.gfnGetFlag(obj, e.row) == "I"){
        					obj.deleteRow((e.row+1));
        				}else{
        					this.dsList.setColumn(fAcnt, this.ucFlag, "D");

        					this.dsList.setColumn(e.row, "YN_VAT", "N");
        					this.dsList.setColumn(e.row, "FLAG_V", "D");
        				}
        			}
        		}else{
        			if(fAcnt > -1){
        				if(this.gfnGetFlag(obj, e.row) != "I"){
        					this.dsList.setColumn(fAcnt, this.ucFlag, obj.getOrgColumn(e.row, this.ucFlag));

        					this.dsList.setColumn(e.row, "YN_VAT", ynVatOrg);
        					this.dsList.setColumn(e.row, "FLAG_V", obj.getOrgColumn(e.row, "FLAG_V"));
        				}else{
        					obj.deleteRow((e.row+1));
        				}
        			}
        		}

        	}*/

        	//데이터가 수정되면 전표복사 비활성
        	this.btnSlipCopy.set_enable(false);
        }

        //관리항목 그리드 값변경 이벤트
        this.dsListSub_ColumnChanged = function(obj, e)
        {
        	var colId = e.columnid;
        	var tyCol = colId.substring(0, 2);

        	if(tyCol == "TY"){
        		var tyMng = colId.substring(colId.indexOf("_")+1, colId.length);
        		if(e.oldvalue != e.newvalue){
        			var colCd = (tyMng.indexOf("REF") > -1 ? "NO_"+tyMng : "CD_"+tyMng);
        			obj.setColumn(e.row, colCd, "");
        			obj.setColumn(e.row, "DS_"+tyMng, "");
        		}
        	}

        	this.fnCopyData(obj, e.row);

        	//데이터가 수정되면 전표복사 비활성
        	this.btnSlipCopy.set_enable(false);
        }

        //그리드 로우변경 이벤트
        this.dsList_Rowposchanged = function(obj,e)
        {

        	this.fnEtcGridSetting(e.newrow);

        	if(this.gfnGetFlag(obj, e.newrow) == "I"){
        		this.gfnSetEnable(this.btnDFPopup, false);
        	}else{
        		//미수/미불구분이 미불(0)일경우
        		if(obj.getColumn(e.newrow, "TY_ACCOUNT") == "0"){
        			this.gfnSetEnable(this.btnDFPopup, true);
        		}else{
        			this.gfnSetEnable(this.btnDFPopup, false);
        		}
        	}

        	// 전표결제, 결제조회 버튼 활성화 여부
        // 	if( !this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition , "NO_DOC")) ){
        // 		this.btnSchApprove.set_enable(true);
        // 	} else {
        // 		this.btnSchApprove.set_enable(false);
        // 	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
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

        /************************************************************************
         * 서브 버튼 이벤트
         ************************************************************************/


        this.fnDataValidate = function(){
        	var sExpr = this.ucFlag +" != 'D' && "+ this.ucFlag + " != 'DU'";	//삭제 데이터 제외
        	var amDrSum = nexacro.toNumber(this.dsList.getCaseSum(sExpr , "AM_DR"),0);	//차변금액 합
        	var amCrSum = nexacro.toNumber(this.dsList.getCaseSum(sExpr , "AM_CR"),0);	//대변금액 합

        	var dtJigub = this.dsList.getCaseMax("!dataset.parent.gfnIsNull(CD_SLIP_MI) && TY_BOND == '채무'", "DT_JIGUB");

        	//var fRow = this.dsList.findRowExpr("!dataset.parent.gfnIsNull(CD_SLIP_MI) && TY_BOND == '채무'");
        	//var dtJigub = this.dsList.getColumn(fRow, "DT_JIGUB");

        	if(amDrSum != amCrSum){
        		this.gfnAlert("차대 밸런스가 맞지 않습니다.");
        		return false;
        	}

        	var sMsg = " 필수입력값입니다.\n";
        	var strRowMsg = "", strRowEtcMsg = "", noView = "";
        	var bjAmChk = false, cdSlipMiChk = false, chkVat = false, chkDtJigub = false;
        	var chkRow = -1;
        	for(var i=0;i<this.dsList.rowcount;i++){
        		if(!this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "CD_SLIP_MI")))){	//반제 전표 체크(반제전표 코드가 있을경우)
        			cdSlipMiChk = true;

        		}else{
        			if(!this.gfnIsNull(dtJigub)){
        				if(this.gfnGetDiffDate(dtJigub, this.dsList.getColumn(i, "DT_ACCOUNT")) < 0){
        					chkDtJigub = true;
        				}
        			}
        		}

        		if(this.gfnGetFlag(this.dsList, i) != "D"){	//삭제 데이터가 아닌경우
        			//미수미불 구분이 미불이 아닐경우 && 차대구분이 대변일 경우(원래는 차변)
        			//if(nexacro.toNumber(this.dsList.getColumn(i, "TY_ACCOUNT"),0) > 0 ){
        			if(!this.gfnIsNull(this.dsList.getColumn(i, "TY_ACCOUNT"))){
        				var tyCrdrAcnt = this.dsList.getColumn(i, "TY_CRDR_ACNT");

        				//해당 계정의 차대구분에 금액이 없을경우
        				if(tyCrdrAcnt == "D" && nexacro.toNumber(this.dsList.getColumn(i , "AM_DR"),0) == 0){	//차변
        					bjAmChk = true;
        					chkRow = i;
        				}else if(tyCrdrAcnt == "C" && nexacro.toNumber(this.dsList.getColumn(i , "AM_CR"),0) == 0){	//대변
        					bjAmChk = true;
        					chkRow = i;
        				}
        			}

        			//전자세금계산서 번호가 있고 증빙을 입력 안했을경우
        			if(!this.gfnIsNull(this.dsList.getColumn(i, "ISSUE_ID")) && this.dsList.getColumn(i, "YN_VAT") == "N"){
        				chkVat = true;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "DT_ACCOUNT")))){
        				strRowMsg += (i + 1) + "행: [" + "작성일자" + "]"+sMsg;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "CD_ACCOUNT")))){
        				strRowMsg += (i + 1) + "행: [" + "계정코드" + "]"+sMsg;
        			}

        			if(this.dsList.getColumn(i, "TY_CRDR") == "D"){
        				if(nexacro.toNumber(this.dsList.getColumn(i, "AM_DR"),0) == 0){
        					strRowMsg += (i + 1) + "행: [" + "차변금액" + "]"+sMsg;
        				}
        			}else if(this.dsList.getColumn(i, "TY_CRDR") == "C"){
        				if(nexacro.toNumber(this.dsList.getColumn(i, "AM_CR"),0) == 0){
        					strRowMsg += (i + 1) + "행: [" + "대변금액" + "]"+sMsg;
        				}
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "CD_VENDOR")))){
        				strRowMsg += (i + 1) + "행: [" + "거래처" + "]"+sMsg;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "CD_DEPT_BE")))){
        				strRowMsg += (i + 1) + "행: [" + "귀속부서" + "]"+sMsg;
        			}

        			noView = this.dxGrid.getCellText(i, this.dxGrid.getBindCellIndex("body", "NO_VIEW"));

        			//*********************** 관리항목 체크 ***************************//
        			if(this.dsList.getColumn(i, "CK_ETC1_MO") == "M"){	//기타1
        				if(this.gfnIsNull(this.dsList.getColumn(i, "CD_ETC1"))){
        					var headTxt = this.dsList.getColumn(i, "DS_ETC1");
        					strRowEtcMsg += "[항번"+ noView + "-관리항목] [" + headTxt + "]"+sMsg;
        				}
        			}

        			if(this.dsList.getColumn(i, "CK_ETC2_MO") == "M"){	//기타2
        				if(this.gfnIsNull(this.dsList.getColumn(i, "CD_ETC2"))){
        					var headTxt = this.dsList.getColumn(i, "DS_ETC2");
        					strRowEtcMsg += "[항번"+ noView + "-관리항목] [" + headTxt + "]"+sMsg;
        				}
        			}

        			if(this.dsList.getColumn(i, "CK_REFNO_MO") == "M"){	//참고번호1
        				if(this.gfnIsNull(this.dsList.getColumn(i, "NO_REF"))){
        					var headTxt = this.dsList.getColumn(i, "DS_REFNO");
        					strRowEtcMsg += "[항번"+ noView + "-관리항목] [" + headTxt + "]"+sMsg;
        				}
        			}

        			if(this.dsList.getColumn(i, "CK_REFNO2_MO") == "M"){	//참고번호2
        				if(this.gfnIsNull(this.dsList.getColumn(i, "NO_REF2"))){
        					var headTxt = this.dsList.getColumn(i, "DS_REFNO2");
        					strRowEtcMsg += "[항번"+ noView + "-관리항목] [" + headTxt + "]"+sMsg;
        				}
        			}

        			if(this.dsList.getColumn(i, "CK_REFAM1_MO") == "M"){	//참고금액1
        				if(this.gfnIsNull(this.dsList.getColumn(i, "AM_REF1"))){
        					var headTxt = this.dsList.getColumn(i, "DS_REFAM1");
        					strRowEtcMsg += "[항번"+ noView + "-관리항목] [" + headTxt + "]"+sMsg;
        				}
        			}

        			if(this.dsList.getColumn(i, "CK_REFAM2_MO") == "M"){	//참고금액2
        				if(this.gfnIsNull(this.dsList.getColumn(i, "AM_REF2"))){
        					var headTxt = this.dsList.getColumn(i, "DS_REFAM2");
        					strRowEtcMsg += "[항번"+ noView + "-관리항목] [" + headTxt + "]"+sMsg;
        				}
        			}

        			if(this.dsList.getColumn(i, "CK_REFDT1_MO") == "M"){	//참고일자1
        				if(this.gfnIsNull(this.dsList.getColumn(i, "DT_REF1"))){
        					var headTxt = this.dsList.getColumn(i, "DS_REFDT1");
        					strRowEtcMsg += "[항번"+ noView + "-관리항목] [" + headTxt + "]"+sMsg;
        				}
        			}

        			if(this.dsList.getColumn(i, "CK_REFDT2_MO") == "M"){	//참고일자2
        				if(this.gfnIsNull(this.dsList.getColumn(i, "DT_REF2"))){
        					var headTxt = this.dsList.getColumn(i, "DS_REFDT2");
        					strRowEtcMsg += "[항번"+ noView + "-관리항목] [" + headTxt + "]"+sMsg;
        				}
        			}

        			if(this.dsList.getColumn(i, "CK_REFRT1_MO") == "M"){	//참고율1
        				if(this.gfnIsNull(this.dsList.getColumn(i, "RT_REF1"))){
        					var headTxt = this.dsList.getColumn(i, "DS_REFRT1");
        					strRowEtcMsg += "[항번"+ noView + "-관리항목] [" + headTxt + "]"+sMsg;
        				}
        			}

        			if(this.dsList.getColumn(i, "CK_REFRT2_MO") == "M"){	//참고율2
        				if(this.gfnIsNull(this.dsList.getColumn(i, "RT_REF2"))){
        					var headTxt = this.dsList.getColumn(i, "DS_REFRT2");
        					strRowEtcMsg += "[항번"+ noView + "-관리항목] [" + headTxt + "]"+sMsg;
        				}
        			}

        			if(this.dsList.getColumn(i, "CK_GONGJONG_MO") == "M"){	//공종코드
        				if(this.gfnIsNull(this.dsList.getColumn(i, "CD_GONGJONG1"))){
        					var headTxt = "공종";
        					strRowEtcMsg += "[항번"+ noView + "-관리항목] [" + headTxt + "]"+sMsg;
        				}
        			}
        		}
        	}

        	//결산전표가 아닐경우
        	if(this.ccboTY_SLIP.value != "02"){
        		if(cdSlipMiChk == false && bjAmChk == true){
        			var cdAccount = this.dsList.getColumn(chkRow, "CD_ACCOUNT");
        			var DsAccount = this.dsList.getColumn(chkRow, "DS_ACCOUNT");

        			this.gfnAlert("계정 "+ cdAccount + "(" +DsAccount + ")" +  " 반제전표가 입력되지 않았습니다.\n반제전표를 등록하세요.");
        			return false;
        		}
        		//반제전표가 있고 채무 데이터일 경우 지급일자 체크
        		if(cdSlipMiChk == true && chkDtJigub == true){
        			this.gfnAlert("지급일["+dtJigub+"]"+" 회계일자는 지급일자와 같거나 커야합니다.");
        			return false;
        		}
        	}

        	if(chkVat){
        		this.gfnAlert("증빙자료가 입력되지 않았습니다.\n증방자료를 등록하세요.");
        		return false;
        	}

        	if(!this.gfnIsNull(strRowMsg)){
        		this.gfnAlert(strRowMsg);
        		return false;
        	}

        	if(!this.gfnIsNull(strRowEtcMsg)){
        		this.gfnAlert(strRowEtcMsg);
        		return false;
        	}

        	return true;
        }

        //관리항목 그리드 셋팅
        this.fnEtcGridSetting = function (row)
        {
        	var objGrid = this.dxGridSub;

        	//그리드 헤더 초기화
        	this.fnGridHeaderReset();

        	objGrid.set_enableredraw(false);
        	this.dsListSub.set_enableevent(false);

        	var arrType  = ["ETC1", "ETC2", "REFNO", "REFNO2", "REFAM1", "REFAM2", "REFDT1", "REFDT2", "REFRT1", "REFRT2", "GONGJONG"];
        	var arrType2 = ["ETC1", "ETC2", "REF", "REF2", "REF1", "REF2", "REF1", "REF2", "REF1", "REF2", "GONGJONG"];

        	var topIdx = 2;
        	var ckMoNm = "", tyNm = "", cdNm= "", dsNm = "";
        	for(var i=0;i<arrType.length;i++){
        		ckMoNm = "CK_" + arrType[i] + "_MO";
        		tyNm = "TY_" + arrType2[i];
        		cdNm = (arrType[i].indexOf("REFNO") > -1 ?  "NO_" : "CD_") + arrType2[i];
        		dsNm = "DS_" + arrType2[i];

        		if(!this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(row, ckMoNm)))){	//값이 있을경우
        			var textLine = "none";
        			var headerText = this.dsList.getColumn(row, "DS_"+arrType[i]);
        			if(this.dsList.getColumn(row, ckMoNm) == "M"){	//필수일 경우
        				textLine = "underline";
        			}

        			var sType = "", subColIdx = 0;
        			switch(arrType[i]) {
        				case "REFAM1" :
        					sType = "AM";
        					headerText = "참고금액1";
        					subColIdx = 25;
        					break;
        				case "REFAM2" :
        					sType = "AM";
        					headerText = "참고금액2";
        					subColIdx = 26;
        					break;
        				case "REFDT1":
        					sType = "DT";
        					headerText = "참고일1";
        					subColIdx = 27;
        					break;
        				case "REFDT2":
        					sType = "DT";
        					headerText = "참고일2";
        					subColIdx = 28;
        					break;
        				case "REFRT1":
        					sType = "RT";
        					headerText = "참고율1";
        					subColIdx = 29;
        					break;
        				case "REFRT2":
        					sType = "RT";
        					headerText = "참고율2";
        					subColIdx = 30;
        					break;
        				case "GONGJONG":
        					sType = "DS";
        					headerText = "공종";
        					subColIdx = 31;
        					break;
        			}

        			//헤더 상단 설정
        			objGrid.setCellProperty("head", this.gfnGetHeadCellIndex(objGrid, cdNm), "textDecoration", textLine);
        			objGrid.setCellProperty("head", topIdx, "text", headerText);

        			//헤더 텍스트 값이 있을경우 서브 헤더 텍스트 셋팅
        			if(!this.gfnIsNull(sType)){
        				var subText = this.dsList.getColumn(row, "DS_"+arrType[i]);
        				objGrid.setCellProperty("head", subColIdx, "text", subText);
        				objGrid.setCellProperty("head", subColIdx, "textDecoration", textLine);

        				//공종일 경우
        				if(sType == "DS"){
        					objGrid.setCellProperty("head", subColIdx, "text", "공종코드");
        					objGrid.setCellProperty("head", (subColIdx)+1, "text", "공종명");
        				}
        			}

        			//기타/참고번호 서브헤더 텍스트 셋팅
        			if(arrType[i].indexOf("ETC") > -1 || arrType[i].indexOf("REFNO") > -1){
        				objGrid.setCellProperty("head", this.gfnGetHeadCellIndex(objGrid, tyNm), "text", "구분");
        				objGrid.setCellProperty("head", this.gfnGetHeadCellIndex(objGrid, cdNm), "text", "코드");
        				objGrid.setCellProperty("head", this.gfnGetHeadCellIndex(objGrid, dsNm), "text", "명칭");
        			}

        			//사이즈 조정
        			if(arrType[i].indexOf("ETC") > -1 || arrType[i].indexOf("REFNO") > -1){
        				objGrid.setFormatColProperty(objGrid.getBindCellIndex("body", tyNm), "size", 90);	//구분
        				objGrid.setFormatColProperty(objGrid.getBindCellIndex("body", cdNm), "size", 100);	//코드
        				objGrid.setFormatColProperty(objGrid.getBindCellIndex("body", dsNm), "size", 110);	//명칭
        			}else if(arrType[i].indexOf("GONGJONG") > -1){
        				objGrid.setFormatColProperty(objGrid.getBindCellIndex("body", "CD_"+arrType[i]), "size", 90);
        				objGrid.setFormatColProperty(objGrid.getBindCellIndex("body", "DS_"+arrType[i]), "size", 100);
        			}else{
        				objGrid.setFormatColProperty(objGrid.getBindCellIndex("body", sType +"_"+ arrType2[i]), "size", 100);
        			}

        		}
        		topIdx++;

        		if(this.dsList.rowcount > 0){
        			this.dsListSub.setColumn(0, "TY_ETC1", this.dsList.getColumn(row, "TY_ETC1"));
        			this.dsListSub.setColumn(0, "CD_ETC1", this.dsList.getColumn(row, "CD_ETC1"));
        			this.dsListSub.setColumn(0, "DS_ETC1", this.dsList.getColumn(row, "DS_ETC11"));

        			this.dsListSub.setColumn(0, "TY_ETC2", this.dsList.getColumn(row, "TY_ETC2"));
        			this.dsListSub.setColumn(0, "CD_ETC2", this.dsList.getColumn(row, "CD_ETC2"));
        			this.dsListSub.setColumn(0, "DS_ETC2", this.dsList.getColumn(row, "DS_ETC21"));

        			this.dsListSub.setColumn(0, "TY_REF", this.dsList.getColumn(row, "TY_REF"));
        			this.dsListSub.setColumn(0, "NO_REF", this.dsList.getColumn(row, "NO_REF"));
        			this.dsListSub.setColumn(0, "DS_REF", this.dsList.getColumn(row, "DS_REF"));

        			this.dsListSub.setColumn(0, "TY_REF2", this.dsList.getColumn(row, "TY_REF2"));
        			this.dsListSub.setColumn(0, "NO_REF2", this.dsList.getColumn(row, "NO_REF2"));
        			this.dsListSub.setColumn(0, "DS_REF2", this.dsList.getColumn(row, "DS_REF2"));

        			this.dsListSub.setColumn(0, "AM_REF1", this.dsList.getColumn(row, "AM_REF1"));
        			this.dsListSub.setColumn(0, "AM_REF2", this.dsList.getColumn(row, "AM_REF2"));
        			this.dsListSub.setColumn(0, "DT_REF1", this.dsList.getColumn(row, "DT_REF1"));
        			this.dsListSub.setColumn(0, "DT_REF2", this.dsList.getColumn(row, "DT_REF2"));
        			this.dsListSub.setColumn(0, "RT_REF1", this.dsList.getColumn(row, "RT_REF1"));
        			this.dsListSub.setColumn(0, "RT_REF2", this.dsList.getColumn(row, "RT_REF2"));

        			this.dsListSub.setColumn(0, "CD_GONGJONG", this.dsList.getColumn(row, "CD_GONGJONG2"));
        			this.dsListSub.setColumn(0, "DS_GONGJONG", this.dsList.getColumn(row, "DS_GONGJONG2"));
        		}

        	}


        	this.dsListSub.set_enableevent(true);
        	objGrid.set_enableredraw(true);
        };

        //그리드 헤더 초기화
        this.fnGridHeaderReset = function ()
        {
        	var cellCnt = this.dxGridSub.getCellCount("head");

        	this.dxGridSub.set_enableredraw(false);
        	for(var i=0;i<cellCnt;i++){
        		if(i > 1){
        			this.dxGridSub.setCellProperty("head", i, "textDecoration", "none");
        			this.dxGridSub.setCellProperty("head", i, "text", "");
        			this.dxGridSub.setFormatColProperty(i, "size", 0);
        		}
        	}
        	this.dxGridSub.set_enableredraw(true);
        };


        //콤보박스 코드 조회
        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo2 = new Dataset();
        	this.dsCombo2.addColumn("CD_SYSTEM", "string");
        	this.dsCombo2.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DH");
        	this.dsCombo.setColumn(0, "CD_TYPE",  "A09");

        	this.dsCombo2.addRow();
        	this.dsCombo2.setColumn(0, "CD_SYSTEM", "DZ");
        	this.dsCombo2.setColumn(0, "CD_TYPE",  "ZG");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo combo2=dsCombo2";
        	var outData     = "dsTY_SLIP=combo0 dsCD_APP=combo20";
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

        //검색조건 변경 이벤트
        this.dsSearch_Valuechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        		//this.FormBtns.Add.set_enable(true);
        		//폼 클리어
        		this.fnClearForm();

        		this.fnCalcSlip();
        	}
        };

        //하단 금액 계산
        this.fnCalcSlip = function ()
        {
        	var sExpr = this.ucFlag +" != 'D' && "+ this.ucFlag + " != 'DU'";	//삭제 데이터 제외

        	//삭제로우를 제외한 합계
        	var amDrSum = nexacro.toNumber(this.dsList.getCaseSum(sExpr, "AM_DR"), 0);
        	var amCrSum = nexacro.toNumber(this.dsList.getCaseSum(sExpr, "AM_CR"), 0);
        	var totCnt = nexacro.toNumber(this.dsList.getCaseCount(sExpr), 0);

        	this.mskAM_DR.set_value(amDrSum);				//차변합
        	this.mskAM_CR.set_value(amCrSum);				//대변합
        	this.mskSUM_CRDR.set_value(Math.abs(amDrSum-amCrSum));	//차액
        	this.mskCOUNT.set_value(totCnt);				//건수
        };

        //새전표
        this.fnSlipNew = function (obj,e)
        {
        	if(!this.fnCheckValidate()) return;

        	//if(this.getOwnerFrame().YN_DF == "Y"){
        		this.dsTY_SLIP.filter("CD_CODE != '03'");
        	//}

        	this.V_IUD_FLAG = "I";

        	//폼 클리어
        	this.fnClearForm();

        	this.ccboTY_SLIP.set_value("01");	//대체전표

        	if(this.AuthClient.CD_ROLE == "R15" || this.AuthClient.CD_ROLE == "R16" || this.AuthClient.CD_ROLE == "R28" || this.AuthClient.CD_ROLE == "R99"){
        		this.ccboTY_SLIP.set_enable(true);
        	}else{
        		this.ccboTY_SLIP.set_enable(false);
        	}

        	this.fnAdd();
        }

        //폼 클리어
        this.fnClearForm = function ()
        {

        	//전표번호 초기화
        	this.txtCD_TRADE.set_value("");

        	this.gfnSetFormStatus(this);	// 폼상태 초기화
        	this.gfnGridClear(this.dxGrid);
        	this.gfnGridClear(this.dxGridSub);

        	//this.txtDT_MAGAM.set_value("");
        	this.mskSUM_CRDR.set_value("");
        	this.mskAM_DR.set_value("");
        	this.mskAM_CR.set_value("");
        	this.ccboCD_APP.set_value("");
        	this.txtDS_HNAME.set_value("");
        	this.txtDT_UPDATE.set_value("");
        	this.mskCOUNT.set_value(this.dsList.rowcount);

        	this.btnSlipDelete.set_enable(false);
        	this.btnRequestList.set_enable(false);
        	this.btnSchApprove.set_enable(false);
        	this.btnApprove.set_enable(false);
        	this.btnSlipCopy.set_enable(false);

        	this.dxGrid.info = "N";
        	this.dxGridSub.info = "N";

        	this.FormBtns.Add.set_enable(true);
        	this.FormBtns.Select.set_enable(false);
        };

        //항번 채번
        this.fnNoViewSetting = function ()
        {

        	var noView = 1;
        	//this.dsList.set_enableevent(false);
        	for(var i = 0;i<this.dsList.rowcount;i++){
        		//삭제가 아닌 데이터만
        		if(this.gfnGetFlag(this.dsList, i) != "D"){
        			this.dsList.setColumn(i, "NO_VIEW", noView);
        			noView++;
        		}

        	}
        	//this.dsList.set_enableevent(true);
        };

        //전표번호 셋팅
        this.fnSetCdSlip = function (cdTrade)
        {
        	var nextCdSlip = "";
        	var cdSlip = 0;

         	var maxCdSlip = 0;
         	for(var i = 0;i<this.dsList.rowcount;i++){
        		if(!this.gfnIsNull(this.dsList.getColumn(i, "CD_SLIP"))){
        			cdSlip = nexacro.toNumber(this.gfnRight(this.dsList.getColumn(i, "CD_SLIP"), 5),0);

        			if (maxCdSlip < cdSlip){
        				maxCdSlip = cdSlip;
        			}
        		}
         	}
        	maxCdSlip += 1;

        	nextCdSlip = cdTrade + (maxCdSlip.toString()).padLeft(5, "0");

        	return nextCdSlip;
        };

        //전표번호 채번
        this.fnSelectNewCode = function ()
        {
        	this.dsSelectNewCode.clearData();
        	this.dsSelectNewCode.addRow();

        	this.dsSelectNewCode.setColumn(0, "IN_PARAM"     , this.ccfACNTUNIT.form.CDTextBox.value);
        	this.dsSelectNewCode.setColumn(0, "IN_DT_ACCOUNT", this.calDT_ACCOUNT.value);

        	var strSvcId    = "newCode";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectNewCode=dsSelectNewCode";
        	var outData     = "dsNewCode=selectNewCode0";
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

        this.fnSave2 = function ()
        {

        	this.dsSave.clearData();

        	var lastRow = this.fnLastRow();	//마지막 등록 수정 삭제 로우

        	var cdSlip = "", curSlipNo = "", noView = 0;

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);

        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				cdSlip = this.dsList.getColumn(i, "CD_SLIP");
        				noView = this.dsList.getColumn(i, "NO_VIEW");
        				if(!this.gfnIsNull(cdSlip)){
        					curSlipNo = cdSlip.substring(cdSlip.length - 5, cdSlip.length);
        				}

        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "S_FLAG"		, flag);													//플래그
        				this.dsSave.setColumn(nrow, "ISSUE_ID"		, this.dsList.getColumn(i, "ISSUE_ID"));					//전자세금계산서번호
        				this.dsSave.setColumn(nrow, "CD_TRADE"		, this.dsList.getColumn(i, "CD_TRADE"));					//거래번호
        				this.dsSave.setColumn(nrow, "CUR_SLIP_NO"	, curSlipNo);												//전표번호
        				this.dsSave.setColumn(nrow, "NO_VIEW"		, this.dsList.getColumn(i, "NO_VIEW"));						//전표보이는순번
        				this.dsSave.setColumn(nrow, "DT_ACCOUNT"	, this.dsList.getColumn(i, "DT_ACCOUNT"));					//회계일자
        				this.dsSave.setColumn(nrow, "CD_DEPT_BH"	, this.gfnNvl(this.dsList.getColumn(i, "CD_DEPT_BH"),""));	//발행부서
        				this.dsSave.setColumn(nrow, "CD_DEPT_BE"	, this.dsList.getColumn(i, "CD_DEPT_BE"));					//발의부서(회계부서)
        				this.dsSave.setColumn(nrow, "CD_ACCOUNT"	, this.dsList.getColumn(i, "CD_ACCOUNT"));					//계정코드
        				this.dsSave.setColumn(nrow, "SEMOK_CD"		, this.gfnNvl(this.dsList.getColumn(i, "SEMOK_CD"),""));	//세목코드
        				this.dsSave.setColumn(nrow, "SEMOK_DS"		, this.gfnNvl(this.dsList.getColumn(i, "SEMOK_DS"),""));	//세목명
        				this.dsSave.setColumn(nrow, "TY_CRDR"		, this.dsList.getColumn(i, "TY_CRDR"));						//차대구분

        				var amAccount = 0;
        				if(this.dsList.getColumn(i, "TY_CRDR") == "D"){
        					amAccount = nexacro.toNumber(this.dsList.getColumn(i, "AM_DR"));
        				}else{
        					amAccount = nexacro.toNumber(this.dsList.getColumn(i, "AM_CR"));
        				}

        				this.dsSave.setColumn(nrow, "AM_ACCOUNT"	, amAccount);								//회계금액
        				this.dsSave.setColumn(nrow, "DS_REM"		, this.dsList.getColumn(i, "DS_REM"));		//적요
        				this.dsSave.setColumn(nrow, "TY_VENDOR"		, this.dsList.getColumn(i, "TY_VENDOR"));	//거래처종류
        				this.dsSave.setColumn(nrow, "CD_VENDOR"		, this.dsList.getColumn(i, "CD_VENDOR"));	//거래처코드
        				this.dsSave.setColumn(nrow, "DS_VENDOR"		, this.dsList.getColumn(i, "DS_VENDOR"));	//거래처명

        				this.dsSave.setColumn(nrow, "YN_LASTSLIP"	, (i == lastRow ? "Y" : "" ));		//마지막전표여부

        				var yn_appr = "";
        				if(flag == "I"){
        					yn_appr = "N";
        				}else{
        					yn_appr = this.dsList.getColumn(i, "YN_APPR");
        				}
        				this.dsSave.setColumn(nrow, "YN_APPR", yn_appr);	//승인여부
        				this.dsSave.setColumn(nrow, "CD_SLIP_MI", this.gfnNvl(this.dsList.getColumn(i, "CD_SLIP_MI"),""));
        				this.dsSave.setColumn(nrow, "YN_COPY", this.gfnNvl(this.dsList.getColumn(i, "YN_COPY"),""));	//전표복사여부
        				this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));	//법인코드

        				//부가세항목
        				this.dsSave.setColumn(nrow, "YN_VAT", this.gfnNvl(this.dsList.getColumn(i, "YN_VAT"),""));						//부가여부
        				this.dsSave.setColumn(nrow, "FLAG_V", this.gfnNvl(this.dsList.getColumn(i, "FLAG_V"),""));						//부가세플래그(입력-I, 수정-U, 삭제 D)
        				this.dsSave.setColumn(nrow, "CD_VATDEPT_ACNT", this.gfnNvl(this.dsList.getColumn(i, "CD_VATDEPT_ACNT"),""));	//부가세발의부서
        				this.dsSave.setColumn(nrow, "TY_SALEBUY", this.gfnNvl(this.dsList.getColumn(i, "TY_SALEBUY"),""));				//거래구분/매입/매출
        				this.dsSave.setColumn(nrow, "CD_PROOF", this.gfnNvl(this.dsList.getColumn(i, "CD_PROOF"),""));					//증빙코드
        				this.dsSave.setColumn(nrow, "TY_VATBGJE", this.gfnNvl(this.dsList.getColumn(i, "TY_VATBGJE"),""));				//불공제코드
        				this.dsSave.setColumn(nrow, "CD_VATACCOUNT", this.gfnNvl(this.dsList.getColumn(i, "CD_VATACCOUNT"),""));		//부가세계정
        				this.dsSave.setColumn(nrow, "TY_VATVENDOR", this.gfnNvl(this.dsList.getColumn(i, "TY_VATVENDOR"),""));			//부가세거래처구분
        				this.dsSave.setColumn(nrow, "CD_VATVENDOR", this.gfnNvl(this.dsList.getColumn(i, "CD_VATVENDOR"),""));			//부가세거래처코드
        				this.dsSave.setColumn(nrow, "DS_VATVENDOR", this.gfnNvl(this.dsList.getColumn(i, "DS_VATVENDOR"),""));			//부가세거래처명칭
        				this.dsSave.setColumn(nrow, "AM_SUPPLY", this.gfnNvl(this.dsList.getColumn(i, "AM_SUPPLY"),""));				//공급가
        				this.dsSave.setColumn(nrow, "AM_VAT", this.gfnNvl(this.dsList.getColumn(i, "AM_VAT"),""));						//부가세
        				this.dsSave.setColumn(nrow, "AM_SERVICE", this.gfnNvl(this.dsList.getColumn(i, "AM_SERVICE"),""));				//봉사료
        				this.dsSave.setColumn(nrow, "NO_CREDIT", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(i, "NO_CREDIT"),""),"-",""));		//신용카드번호
        				this.dsSave.setColumn(nrow, "DS_VATREM", this.gfnNvl(this.dsList.getColumn(i, "DS_VATREM"),""));				//부가세 적요
        				this.dsSave.setColumn(nrow, "CK_OMIT", this.gfnNvl(this.dsList.getColumn(i, "CK_OMIT"),""));					//누락여부(부가세)
        				this.dsSave.setColumn(nrow, "DT_PROOF", this.gfnNvl(this.dsList.getColumn(i, "DT_PROOF"),""));					//부가세증빙일자
        				this.dsSave.setColumn(nrow, "TY_ISSUE", this.gfnNvl(this.dsList.getColumn(i, "TY_ISSUE"),""));					//세금계산서발행구분

        				//관리항목
        				this.dsSave.setColumn(nrow, "TY_ETC1", this.gfnNvl(this.dsList.getColumn(i, "TY_ETC1"),""));	//기타1종류
        				this.dsSave.setColumn(nrow, "CD_ETC1", this.gfnNvl(this.dsList.getColumn(i, "CD_ETC1"),""));	//기타1코드
        				this.dsSave.setColumn(nrow, "DS_ETC1", this.gfnNvl(this.dsList.getColumn(i, "DS_ETC11"),""));	//기타1명칭
        				this.dsSave.setColumn(nrow, "TY_ETC2", this.gfnNvl(this.dsList.getColumn(i, "TY_ETC2"),""));	//기타2종류
        				this.dsSave.setColumn(nrow, "CD_ETC2", this.gfnNvl(this.dsList.getColumn(i, "CD_ETC2"),""));	//기타2코드
        				this.dsSave.setColumn(nrow, "DS_ETC2", this.gfnNvl(this.dsList.getColumn(i, "DS_ETC21"),""));	//기타2명칭
        				this.dsSave.setColumn(nrow, "TY_REF", this.gfnNvl(this.dsList.getColumn(i, "TY_REF"),""));	//참고번호1종류
        				this.dsSave.setColumn(nrow, "NO_REF", this.gfnNvl(this.dsList.getColumn(i, "NO_REF"),""));	//참고번호1
        				this.dsSave.setColumn(nrow, "DS_REF", this.gfnNvl(this.dsList.getColumn(i, "DS_REF"),""));	//참고번호1명칭
        				this.dsSave.setColumn(nrow, "TY_REF2", this.gfnNvl(this.dsList.getColumn(i, "TY_REF2"),""));	//참고번호2종류
        				this.dsSave.setColumn(nrow, "NO_REF2", this.gfnNvl(this.dsList.getColumn(i, "NO_REF2"),""));	//참고번호2
        				this.dsSave.setColumn(nrow, "DS_REF2", this.gfnNvl(this.dsList.getColumn(i, "DS_REF2"),""));	//참고번호2명칭
        				this.dsSave.setColumn(nrow, "AM_REF1", this.gfnNvl(this.dsList.getColumn(i, "AM_REF1"),""));	//참고금액1
        				this.dsSave.setColumn(nrow, "AM_REF2", this.gfnNvl(this.dsList.getColumn(i, "AM_REF2"),""));	//참고금액2
        				this.dsSave.setColumn(nrow, "DT_REF1", this.gfnNvl(this.dsList.getColumn(i, "DT_REF1"),""));	//참고일자1
        				this.dsSave.setColumn(nrow, "DT_REF2", this.gfnNvl(this.dsList.getColumn(i, "DT_REF2"),""));	//참고일자2
        				this.dsSave.setColumn(nrow, "RT_REF1", this.gfnNvl(this.dsList.getColumn(i, "RT_REF1"),""));	//참고율1
        				this.dsSave.setColumn(nrow, "RT_REF2", this.gfnNvl(this.dsList.getColumn(i, "RT_REF2"),""));	//참고율2
        				this.dsSave.setColumn(nrow, "CD_GONGJONG", this.gfnNvl(this.dsList.getColumn(i, "CD_GONGJONG"),""));	//공종코드
        				this.dsSave.setColumn(nrow, "DS_GONGJONG", this.gfnNvl(this.dsList.getColumn(i, "DS_GONGJONG"),""));	//공종명칭
        				this.dsSave.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);	//입력자사번

        				this.dsSave.setColumn(nrow, "TY_CLOSING", this.gfnNvl(this.dsList.getColumn(i, "TY_CLOSING"),""));	//전표구분

        				break;

        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsSave";
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

        this.fnLastRow = function ()
        {
        	var lastRow = -1;
        	for (var i = this.dsList.rowcount - 1; i >= 0; i--){
        		if(!this.gfnIsNull(this.dsList.getColumn(i , this.ucFlag))){
        			lastRow = i;
        			break;
        		}
        	}
        	return lastRow;
        };

        this.fnCopyData = function (objDs, row)
        {
        	var mappingCol = "TY_ETC1=TY_ETC1,CD_ETC1=CD_ETC1,DS_ETC11=DS_ETC1,"
        	    mappingCol+= "TY_ETC2=TY_ETC2,CD_ETC2=CD_ETC2,DS_ETC21=DS_ETC2,"
        		mappingCol+= "TY_REF=TY_REF,NO_REF=NO_REF,DS_REF=DS_REF,"
        		mappingCol+= "TY_REF2=TY_REF2,NO_REF2=NO_REF2,DS_REF2=DS_REF2,"
        		mappingCol+= "AM_REF1=AM_REF1,AM_REF2=AM_REF2,"
        		mappingCol+= "DT_REF1=DT_REF1,DT_REF2=DT_REF2,"
        		mappingCol+= "RT_REF1=RT_REF1,RT_REF2=RT_REF2,"
        		mappingCol+= "CD_GONGJONG=CD_GONGJONG,DS_GONGJONG=DS_GONGJONG";

        	this.dsList.copyRow(this.dsList.rowposition, objDs, row, mappingCol);
        };

        //전표취소 처리
        this.fnSlipDelete = function (obj,e)
        {
        	if (this.gfnIsNull(this.gfnTrim(this.txtCD_TRADE.value))) {
        		this.gfnAlert("전표번호는 필수입니다.");
        		this.txtCD_TRADE.setFocus();
        		return;
        	}

        	this.gfnConfirm("전표를 삭제하시겠습니까?", "fnSlipDelete_callback");

        };

        this.fnSlipDelete_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsSlipDelete.clearData();
        		var nRow = this.dsSlipDelete.addRow();

        		//처리할 데이터 담기
        		this.dsSlipDelete.setColumn(nRow, "CD_TRADE"   , this.txtCD_TRADE.value);

        		var strSvcId    = "slipDelete";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "slipDelete=dsSlipDelete";
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

        //버튼처리
        this.fnSetButtonEnable = function (flag)
        {

        	this.FormBtns.Excel.set_enable(true);

        	switch(flag) {
        	case "S" :
        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Save.set_enable(false);
        		this.FormBtns.Del.set_enable(false);

        		this.btnRequestList.set_enable(false);
        		this.btnSlipDelete.set_enable(false);
        		this.btnSlipNew.set_enable(false);
        		this.btnSlipDelete.set_enable(false);
        		this.btnSlipBanje.set_enable(false);
        		this.btnDFPopup.set_enable(false);
        		this.btnSlipCopy.set_enable(true);

        		//this.dxGrid.info = "Y";
        		this.dxGridSub.info = "Y";

        		this.ccfCD_CORP.set_enable(false);
        		this.calDT_ACCOUNT.set_enable(false);
        		this.ccfACNTUNIT.set_enable(false);
        		this.ccboTY_SLIP.set_enable(false);
        		this.mskAddCnt.set_visible(false);
        		this.btnAddRow.set_visible(false);
        		break;
        	case "I" :
        		this.FormBtns.Add.set_enable(true);
        		this.btnSlipNew.set_enable(true);
        		this.btnRequestList.set_enable(false);
        		this.btnSlipDelete.set_enable(false);
        		this.btnSlipBanje.set_enable(true);
        		this.btnSlipCopy.set_enable(false);
        		this.btnDFPopup.set_enable(false);
        		this.mskAddCnt.set_visible(true);
        		this.btnAddRow.set_visible(true);

        		if(this.AuthClient.CD_ROLE == "R15" || this.AuthClient.CD_ROLE == "R16" || this.AuthClient.CD_ROLE == "R28"){
        			this.ccboTY_SLIP.set_enable(true);
        		}else{
        			this.ccboTY_SLIP.set_enable(false);
        		}

        		//this.dxGrid.info = "N";
        		this.dxGridSub.info = "N";
        		break;
        	case "U" :
        		this.FormBtns.Add.set_enable(true);
        		this.FormBtns.Del.set_enable(true);
        		this.FormBtns.Excel.set_enable(true);
        		this.btnSlipNew.set_enable(true);
        		this.btnSlipDelete.set_enable(true);
        		this.btnSlipBanje.set_enable(true);
        		this.btnSlipCopy.set_enable(true);
        		this.btnDFPopup.set_enable(false);
        		this.btnRequestList.set_enable(true);

        		this.mskAddCnt.set_visible(true);
        		this.btnAddRow.set_visible(true);

        		this.ccboTY_SLIP.set_enable(false);

        		//this.dxGrid.info = "N";
        		this.dxGridSub.info = "N";
        		break;
        	case "A" :
        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Save.set_enable(false);
        		this.FormBtns.Del.set_enable(false);
        		this.btnRequestList.set_enable(false);
        		this.btnSlipNew.set_enable(true);
        		this.btnSlipDelete.set_enable(false);
        		this.btnSlipBanje.set_enable(false);
        		this.btnSlipCopy.set_enable(true);
        		this.btnDFPopup.set_enable(false);

        		this.ccboTY_SLIP.set_enable(false);
        		this.mskAddCnt.set_visible(false);
        		this.btnAddRow.set_visible(false);
        		//this.dxGrid.info = "Y";
        		this.dxGridSub.info = "Y";
        		break;
        	}

        	// 전표결제 버튼 활성화 여부
        	var nRow = this.dsList.findRowExpr("CD_APP == '1' || CD_APP == '2'");

        	if( !this.gfnIsNull(this.txtCD_TRADE.value) && nRow == -1){
        		this.btnApprove.set_enable(true);
        	} else {
        		this.btnApprove.set_enable(false);
        	}
        };

        //그리드 키다운 이벤트
        this.fnGrid_onkeydown = function(obj,e){
        	var colId = this.gfnGridGetBindColumnNameByIndex(obj, obj.getCellPos());


        	if(this.V_IUD_FLAG == "S") document.removeEventListener("paste", this._gfnGridPasteCallback);

        	if(e.keycode == 86){	// paste
        		if(this.dsList.getColumn(this.dsList.rowposition, "TY_CLOSING") != "02"){	//결산전표가 아닐경우
        			var fAcnt = this.dsList.findRowExpr("currow == "+(this.dsList.rowposition)+" && (CD_ACCOUNT == '112411' || CD_ACCOUNT == '211511')");

        			if(fAcnt > -1){
        				document.removeEventListener("paste", this._gfnGridPasteCallback);
        			}
        		}
        	}
         	if(e.keycode == 119){	//F8일경우
        		if (colId == "YN_VAT"){	//증빙
        			this.fnCallVatPopup();	//부가세 팝업 호출
        		}
         	}
         	if(e.keycode == 13){	//엔터일경우
        		if (colId == "AM_DR" || colId == "AM_CR"){	//차대변 금액
        			if(this.fnBjDataCheck(this.dsList.rowposition)){
        				//반제전표 코드가 없으면 반제전표 팝업 호출
        				if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP_MI")))){
        					this.btnSlipBanje.click();
        				}
        			}
        		}

        		if (colId == "DS_DEPT" || colId == "YN_VAT"){	//귀속부서명/증빙
        			this.fnAddData(this.dsList.rowposition, "KEY");
        		}
         	}
        	//Ctrl + 엔터일 경우
        	if(e.ctrlkey && e.keycode == 13){
        		var rowPos = this.dsList.rowposition;
        		var flag = this.gfnGetFlag(this.dsList, rowPos);
        		var tRowPos = this.dsList.rowposition -1;

        		obj.removeEventHandler("onkeydown", this._grd_onkeydown, this);

        		var cellIdx = 0;
        		if(flag != "D"){
        			if (colId == "YN_VAT"){	//증빙
        				this.fnCallVatPopup();	//부가세 팝업 호출
        			}

        			var fAcnt = this.dsList.findRowExpr("currow == "+(rowPos)+" && (CD_ACCOUNT == '112411' || CD_ACCOUNT == '211511')");

        			if(this.dsList.getColumn(rowPos, "TY_CLOSING") == "02"){	//결산전표일 경우 복사기능 가능
        				fAcnt = -1;
        			}

        			//선급부가세/선수부가세가 아닐경우
        			if(fAcnt == -1){
        				if(this.dsList.rowposition > 0 && tRowPos > -1){
        					switch(colId) {
        						case "CD_ACCOUNT" :
        							this.dsList.set_enableevent(false);
        							this.dsList.setColumn(rowPos, "CD_ACCOUNT", this.dsList.getColumn(tRowPos, "CD_ACCOUNT"));
        							this.dsList.setColumn(rowPos, "DS_ACCOUNT", this.dsList.getColumn(tRowPos, "DS_ACCOUNT"));
        							this.dsList.setColumn(rowPos, "TY_ACCOUNT", this.dsList.getColumn(tRowPos, "TY_ACCOUNT"));

        							this.dsList.setColumn(rowPos, "YN_CONSTCOST", this.dsList.getColumn(tRowPos, "YN_CONSTCOST"));
        							this.dsList.setColumn(rowPos, "CD_SEMOK", this.dsList.getColumn(tRowPos, "CD_SEMOK"));
        							this.dsList.setColumn(rowPos, "DS_SEMOK", this.dsList.getColumn(tRowPos, "DS_SEMOK"));
        							this.dsList.setColumn(rowPos, "TY_CRDR", this.dsList.getColumn(tRowPos, "TY_CRDR"));

        							this.dsList.setColumn(rowPos, "CK_ETC1_MO", this.dsList.getColumn(tRowPos, "CK_ETC1_MO"));
        							this.dsList.setColumn(rowPos, "DS_ETC1", this.dsList.getColumn(tRowPos, "DS_ETC1"));
        							this.dsList.setColumn(rowPos, "TY_ETC1_FLAG", this.dsList.getColumn(tRowPos, "TY_ETC1_FLAG"));

        							this.dsList.setColumn(rowPos, "CK_ETC2_MO", this.dsList.getColumn(tRowPos, "CK_ETC2_MO"));
        							this.dsList.setColumn(rowPos, "DS_ETC2", this.dsList.getColumn(tRowPos, "DS_ETC2"));
        							this.dsList.setColumn(rowPos, "TY_ETC2_FLAG", this.dsList.getColumn(tRowPos, "TY_ETC2_FLAG"));

        							this.dsList.setColumn(rowPos, "CK_REFNO_MO", this.dsList.getColumn(tRowPos, "CK_REFNO_MO"));
        							this.dsList.setColumn(rowPos, "DS_REFNO", this.dsList.getColumn(tRowPos, "DS_REFNO"));
        							this.dsList.setColumn(rowPos, "TY_REFNO_FLAG", this.dsList.getColumn(tRowPos, "TY_REFNO_FLAG"));

        							this.dsList.setColumn(rowPos, "CK_REFNO2_MO", this.dsList.getColumn(tRowPos, "CK_REFNO2_MO"));
        							this.dsList.setColumn(rowPos, "DS_REFNO2", this.dsList.getColumn(tRowPos, "DS_REFNO2"));
        							this.dsList.setColumn(rowPos, "TY_REFNO2_FLAG", this.dsList.getColumn(tRowPos, "TY_REFNO2_FLAG"));

        							this.dsList.setColumn(rowPos, "CK_REFAM1_MO", this.dsList.getColumn(tRowPos, "CK_REFAM1_MO"));
        							this.dsList.setColumn(rowPos, "DS_REFAM1", this.dsList.getColumn(tRowPos, "DS_REFAM1"));
        							this.dsList.setColumn(rowPos, "CK_REFAM2_MO", this.dsList.getColumn(tRowPos, "CK_REFAM2_MO"));
        							this.dsList.setColumn(rowPos, "DS_REFAM2", this.dsList.getColumn(tRowPos, "DS_REFAM2"));

        							this.dsList.setColumn(rowPos, "CK_REFDT1_MO", this.dsList.getColumn(tRowPos, "CK_REFDT1_MO"));
        							this.dsList.setColumn(rowPos, "DS_REFDT1", this.dsList.getColumn(tRowPos, "DS_REFDT1"));

        							this.dsList.setColumn(rowPos, "CK_REFDT2_MO", this.dsList.getColumn(tRowPos, "CK_REFDT2_MO"));
        							this.dsList.setColumn(rowPos, "DS_REFDT2", this.dsList.getColumn(tRowPos, "DS_REFDT2"));

        							this.dsList.setColumn(rowPos, "CK_REFRT1_MO", this.dsList.getColumn(tRowPos, "CK_REFRT1_MO"));
        							this.dsList.setColumn(rowPos, "DS_REFRT1", this.dsList.getColumn(tRowPos, "DS_REFRT1"));

        							this.dsList.setColumn(rowPos, "CK_REFRT2_MO", this.dsList.getColumn(tRowPos, "CK_REFRT2_MO"));
        							this.dsList.setColumn(rowPos, "DS_REFRT2", this.dsList.getColumn(tRowPos, "DS_REFRT2"));

        							this.dsList.setColumn(rowPos, "TY_ETC1", this.dsList.getColumn(tRowPos, "TY_ETC1"));
        							this.dsList.setColumn(rowPos, "TY_ETC2", this.dsList.getColumn(tRowPos, "TY_ETC2"));
        							this.dsList.setColumn(rowPos, "TY_REF", this.dsList.getColumn(tRowPos, "TY_REF"));
        							this.dsList.setColumn(rowPos, "TY_REF2", this.dsList.getColumn(tRowPos, "TY_REF2"));
        							this.dsList.setColumn(rowPos, "YN_VAT_ACNT", this.dsList.getColumn(tRowPos, "YN_VAT_ACNT"));

        							//상태값 변경
        							if(this.gfnGetFlag(this.dsList, rowPos) != "I"){
        								this.dsList.setColumn(rowPos, this.ucFlag, "U");
        								this.gfnSetFormStatus(this, "U");
        							}

        							cellIdx = this.dxGrid.getBindCellIndex("body", "DS_REM");

        							this.dxGrid.setCellPos(cellIdx, rowPos);

        							this.fnEtcGridSetting(rowPos);
        							this.dsList.set_enableevent(true);
        							break;
        						case "CD_VENDOR" :
        							this.dsList.set_enableevent(false);
        							this.dsList.setColumn(rowPos, "CD_VENDOR", this.dsList.getColumn(tRowPos, "CD_VENDOR"));
        							this.dsList.setColumn(rowPos, "DS_VENDOR", this.dsList.getColumn(tRowPos, "DS_VENDOR"));
        							this.dsList.setColumn(rowPos, "TY_VENDOR", this.dsList.getColumn(tRowPos, "TY_VENDOR"));
        							this.dsList.set_enableevent(true);

        							//상태값 변경
        							if(this.gfnGetFlag(this.dsList, rowPos) != "I"){
        								this.dsList.setColumn(rowPos, this.ucFlag, "U");
        								this.gfnSetFormStatus(this, "U");
        							}

        							cellIdx = this.dxGrid.getBindCellIndex("body", "CD_DEPT_BE");
        							this.dxGrid.setCellPos(cellIdx, rowPos);
        							break;
        						case "CD_DEPT_BE" :
        							//반제전표일 경우 귀속부서 복사 불가
        							if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(rowPos, "CD_SLIP_MI")))){
        								this.dsList.set_enableevent(false);
        								this.dsList.setColumn(rowPos, "CD_DEPT_BE", this.dsList.getColumn(tRowPos, "CD_DEPT_BE"));
        								this.dsList.setColumn(rowPos, "DS_DEPT"   , this.dsList.getColumn(tRowPos, "DS_DEPT"));

        								//매입귀속부서
        								this.dsList.setColumn(rowPos, "CD_DEPT_BUY", this.dsList.getColumn(tRowPos, "CD_DEPT_BUY"));
        								this.dsList.setColumn(rowPos, "DS_DEPT_BUY", this.dsList.getColumn(tRowPos, "DS_DEPT_BUY"));
        								//본사귀속부서
        								this.dsList.setColumn(rowPos, "CD_DEPT_ACNT_BON", this.dsList.getColumn(tRowPos, "CD_DEPT_ACNT_BON"));
        								this.dsList.setColumn(rowPos, "DS_DEPT_ACNT_BON", this.dsList.getColumn(tRowPos, "DS_DEPT_ACNT_BON"));

        								this.dsList.set_enableevent(true);

        								var cdVatDeptAcnt = this.dsList.getColumn(tRowPos, "CD_VATDEPT_ACNT").split("|");	//부가세 귀속부서
        								if(this.gfnIsNull(cdVatDeptAcnt[0])){

        									var cdDept = "", dsDept = "";

        									if(this.dsList.getColumn(rowPos, "TY_SALEBUY") == "O"){	//거래구분이 매출일 경우
        										cdDept = this.dsList.getColumn(tRowPos, "CD_DEPT_BE");		//귀속부서코드
        										dsDept = this.dsList.getColumn(tRowPos, "DS_DEPT");			//귀속부서명
        									}else{
        										if(!this.gfnIsNull(this.dsList.getColumn(tRowPos, "CD_DEPT_BUY"))){		//매입부서가 있을경우
        											cdDept = this.dsList.getColumn(tRowPos, "CD_DEPT_BUY");			//매입부서코드
        											dsDept = this.dsList.getColumn(tRowPos, "DS_DEPT_BUY");			//매입부서명
        										}else{
        											cdDept = this.dsList.getColumn(tRowPos, "CD_DEPT_BE");		//귀속부서코드
        											dsDept = this.dsList.getColumn(tRowPos, "DS_DEPT");			//귀속부서명
        										}
        									}
        									this.dsList.setColumn(rowPos, "CD_VATDEPT_ACNT", cdDept +"|"+ dsDept);

        									var cdAccount = this.dsList.getColumn((rowPos+1), "CD_ACCOUNT");

        									//하단에 데이터가 부가세계정일 경우 동일하게 적용
        									if(cdAccount == "112411" || cdAccount == "211511"){
        										this.dsList.setColumn((rowPos+1), "CD_DEPT_BE", this.dsList.getColumn(tRowPos, "CD_DEPT_BE"));
        										this.dsList.setColumn((rowPos+1), "DS_DEPT"   , this.dsList.getColumn(tRowPos, "DS_DEPT"));

        										//매입귀속부서
        										this.dsList.setColumn((rowPos+1), "CD_DEPT_BUY", this.dsList.getColumn(tRowPos, "CD_DEPT_BUY"));
        										this.dsList.setColumn((rowPos+1), "DS_DEPT_BUY", this.dsList.getColumn(tRowPos, "DS_DEPT_BUY"));
        										//본사귀속부서
        										this.dsList.setColumn((rowPos+1), "CD_DEPT_ACNT_BON", this.dsList.getColumn(tRowPos, "CD_DEPT_ACNT_BON"));
        										this.dsList.setColumn((rowPos+1), "DS_DEPT_ACNT_BON", this.dsList.getColumn(tRowPos, "DS_DEPT_ACNT_BON"));

        										this.dsList.setColumn((rowPos+1), this.ucFlag, "U");
        									}
        								}

        								//상태값 변경
        								if(this.gfnGetFlag(this.dsList, rowPos) != "I"){
        									this.dsList.setColumn(rowPos, this.ucFlag, "U");
        									this.gfnSetFormStatus(this, "U");
        								}
        							}
        							cellIdx = this.dxGrid.getBindCellIndex("body", "YN_VAT");
        							this.dxGrid.setCellPos(cellIdx, rowPos);
        							break;
        						case "DT_ACCOUNT" :	//회계일자
        						case "DS_REM" :		//적요
        						case "AM_DR" :		//차변금액
        						case "AM_CR" :		//대변금액
        							if(colId == "DT_ACCOUNT"){
        								cellIdx = this.dxGrid.getBindCellIndex("body", "CD_ACCOUNT");
        								this.dsList.setColumn(rowPos, colId, this.dsList.getColumn(tRowPos, colId));
        							}else if(colId == "DS_REM"){
        								if(this.dsList.getColumn(rowPos, "TY_CRDR") == "D"){
        									cellIdx = this.dxGrid.getBindCellIndex("body", "AM_DR");
        								}else{
        									cellIdx = this.dxGrid.getBindCellIndex("body", "AM_CR");
        								}
        								this.dsList.setColumn(rowPos, colId, this.dsList.getColumn(tRowPos, colId));
        							}else{
        								cellIdx = this.dxGrid.getBindCellIndex("body", "CD_VENDOR");
        								this.dsList.setColumn(rowPos, "TY_CRDR", this.dsList.getColumn(tRowPos, "TY_CRDR"));

        								var totAM_DR = 0, totAM_CR = 0, totAM_DRCR = 0;
        								for(var i=0;i<this.dsList.rowcount;i++){
        									if(this.gfnGetFlag(this.dsList, i) != "D"){
        										if(i != rowPos){
        											totAM_DR += nexacro.toNumber(this.dsList.getColumn(i, "AM_DR"),0);
        											totAM_CR += nexacro.toNumber(this.dsList.getColumn(i, "AM_CR"),0);
        											totAM_DRCR = Math.abs(totAM_DR - totAM_CR);
        										}
        									}
        								}
        								if(totAM_DR == totAM_CR){
        									this.dsList.setColumn(rowPos, colId, this.dsList.getColumn(tRowPos, colId));
        								}else if(totAM_DR > totAM_CR){
        									this.dsList.setColumn(rowPos, "AM_CR", totAM_DRCR);
        									this.dsList.setColumn(rowPos, "TY_CRDR", "C");
        								}else{
        									this.dsList.setColumn(rowPos, "AM_DR", totAM_DRCR);
        									this.dsList.setColumn(rowPos, "TY_CRDR", "D");
        								}
        							}

        							if(this.fnBjDataCheck(rowPos)){
        								//반제전표 코드가 없으면 반제전표 팝업 호출
        								if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(rowPos, "CD_SLIP_MI")))){
        									this.btnSlipBanje.click();
        								}
        							}

        							break;

        					}
        				}
        			}
        		}
        		obj.addEventHandler("onkeydown", this._grd_onkeydown, this);
        	}
        }

        //반제전표
        this.fnSlipBanje = function (obj,e)
        {
        	//if(!this.fnCheckValidate()) return;

        	var param = {};
        	param.CD_CORP    = this.ccfCD_CORP.form.CDTextBox.value;
        	param.DS_CORP    = this.ccfCD_CORP.form.DSTextBox.value;
        	param.CD_DEPT_BH = this.ccfACNTUNIT.form.CDTextBox.value;
        	param.DS_DEPT_BH = this.ccfACNTUNIT.form.DSTextBox.value;
        	param.CD_ACCOUNT = this.dsList.getColumn(this.dsList.rowposition, "CD_ACCOUNT");
        	param.DS_ACCOUNT = this.dsList.getColumn(this.dsList.rowposition, "DS_ACCOUNT");
        	param.GR_SEARCH  = this.FormInfo.GR_SEARCH;

        	var sPopupCallBack = "fnBanjeSlipPopupCallback";

        	this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DHA_ISSUESLIPMIKYULDLG", sPopupCallBack, param, 1280, 500);
        }

        //반제전표 팝업 콜백
        this.fnBanjeSlipPopupCallback = function(svcID, val) {
        	//var nIndex1 = this.dxGrid.findEventHandler("onkeydown", this._grd_onkeydown, this );
        	//if(nIndex1 == -1) this.dxGrid.addEventHandler("onkeydown", this._grd_onkeydown, this);

        	var nIndex2 = this.dxGrid.findEventHandler("onkeydown", this.fnGrid_onkeydown, this );
        	if(nIndex2 == -1) this.dxGrid.addEventHandler("onkeydown", this.fnGrid_onkeydown, this);


        	this.dsReturn.clearData();

         	if(!this.gfnIsNull(val)) {
        		this.dsReturn.loadXML(val);

        		var rowCnt = this.dsList.rowcount;
        		var rowPos = this.dsList.rowposition;

        		//this.dsList.set_enableevent(false);

        		var nRow = 0;
        	 	//for(var i = this.dsReturn.rowcount-1;i>=0;i--){
        		for(var i =0;i<this.dsReturn.rowcount;i++){
        			var cdSlip = this.dsReturn.getColumn(i, "CD_SLIP");	//반제전표의 전표번호
        			var fRow = this.dsList.findRowExpr(this.ucFlag +" == 'I' && CD_SLIP_MI == '"+cdSlip+"'");	//이미 등록한 반제전표가 있을경우 덮어 씌우기
        			if(fRow > -1){
        				nRow = fRow;
        			}else{
        				if(rowCnt == 0){
        					nRow = this.dsList.addRow();
        				}else{
        					nRow = this.dsList.addRow();
        					//현재 로우가 반제전표를 등록해야할 데이터일 경우
        // 					if(this.fnBjDataCheck(rowPos)){
        // 						nRow = rowPos;
        // 					}else{
        // 						//nRow = this.dsList.insertRow(rowPos);
        // 						nRow = this.dsList.addRow();
        // 					}
        					rowPos++;
        				}
        			}


        			this.dsList.copyRow(nRow, this.dsReturn, i);

        			var cdSlip  = "";
        			var cdTrade = "";
        			if(!this.gfnIsNull(this.txtCD_TRADE.value)){
        				cdSlip = this.fnSetCdSlip(this.txtCD_TRADE.value);
        				cdTrade = this.txtCD_TRADE.value;
        			}
        			this.dsList.setColumn(nRow, "CD_SLIP"   	, cdSlip);
        			this.dsList.setColumn(nRow, "FILE_DIR"  	, cdSlip);
        			this.dsList.setColumn(nRow, "CD_TRADE"  	, cdTrade);
        			this.dsList.setColumn(nRow, "DT_ACCOUNT"  	, this.calDT_ACCOUNT.value);
        			this.dsList.setColumn(nRow, "TY_CLOSING"	, this.ccboTY_SLIP.value);						//전표구분
        			this.dsList.setColumn(nRow, "CD_CORP"   	, this.ccfCD_CORP.form.CDTextBox.value);		//법인코드
        			this.dsList.setColumn(nRow, "CD_SLIP_MI"   	, this.dsReturn.getColumn(i, "CD_SLIP"));		//반제전표의 전표번호
        			this.dsList.setColumn(nRow, "CD_DEPT_BH"   	, this.ccfACNTUNIT.form.CDTextBox.value);		//발행부서
        			//this.dsList.setColumn(nRow, "DS_ACCOUNT"   	, this.dsReturn.getColumn(i, "DS_ACCOUNT"));	//반제전표의 계정명

        // 			this.dsList.setColumn(nRow, "CD_DEPT_BH"   	, this.ccfACNTUNIT.form.CDTextBox.value);
        // 			this.dsList.setColumn(nRow, "CD_DEPT_BE"   	, this.dsReturn.getColumn(i, "CD_DEPT_BE"));
        // 			this.dsList.setColumn(nRow, "DS_DEPT"   	, this.dsReturn.getColumn(i, "DS_DEPT"));
        //
        // 			this.dsList.setColumn(nRow, "CD_VENDOR"   	, this.dsReturn.getColumn(i, "CD_VENDOR"));
        // 			this.dsList.setColumn(nRow, "DS_VENDOR"   	, this.dsReturn.getColumn(i, "DS_VENDOR"));
        // 			this.dsList.setColumn(nRow, "DS_REM"   		, this.dsReturn.getColumn(i, "DS_REM"));

        			this.dsList.setColumn(nRow, "YN_VAT"  		, "N");
        			this.dsList.setColumn(nRow, "YN_APPR"  		, "N");

        			var amYy = "CR";	//대변
        			//차변일경우
        			if(this.dsReturn.getColumn(i, "TY_CRDR") == "D") {
        				amYy = "DR";
        			}

        			this.dsList.setColumn(nRow, "AM_"+amYy      , this.dsReturn.getColumn(i, "AM_REMAIN"));	//반제금액 금액에 넣기

        	 	}

        		//this.dsList.set_enableevent(true);

        		this.gfnSetFormStatus(this, "I");

        		//항번 셋팅
        		this.fnNoViewSetting();

        		//하단 관리항목 로우 추가
        		if(this.dsListSub.rowcount == 0){
        			this.gfnGridAdd(this.dxGridSub, null, false);
        		}

        		var colDT_ACCOUNT = this.dxGrid.getBindCellIndex("body", "DT_ACCOUNT");
        		this.dxGrid.setCellPos(colDT_ACCOUNT, nRow);

        		//관리항목 셋팅
        		this.fnEtcGridSetting(nRow);

        		//하단 계산
        		this.fnCalcSlip();

         	}
        };

        //필수값 체크
        this.fnCheckValidate = function()
        {
        	//법인코드 체크
        	if(this.gfnIsNull(this.gfnTrim(this.ccfCD_CORP.form.CDTextBox.value))){
        		this.gfnAlert("법인코드를 입력하세요");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}

        	//법인코드 체크
        	if(this.gfnIsNull(this.gfnTrim(this.calDT_ACCOUNT.value))){
        		this.gfnAlert("회계일자를 입력하세요");
        		this.calDT_ACCOUNT.setFocus();
        		return false;
        	}

        	//발행부서 체크
        	if(this.gfnIsNull(this.gfnTrim(this.ccfACNTUNIT.form.CDTextBox.value))){
        		this.gfnAlert("발행부서를 입력하세요");
        		this.ccfACNTUNIT.form.CDTextBox.setFocus();
        		return false;
        	}

        	return true;
        };

        //필수값 체크
        this.fnVatCheckValidate = function(row)
        {
        	var colNm = "";
        	//회계일자
        	if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(row, "DT_ACCOUNT")))){
        		colNm += "회계일자";
        	}

        	//적요
        	if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(row, "DS_REM")))){
        		colNm += (colNm.length > 0 ? ", " : "") +"적요";
        	}

        	var tyCrDr = this.dsList.getColumn(row, "TY_CRDR");


        	//금액
        	if(!this.gfnIsNull(tyCrDr)){
        		if(this.gfnIsNull(this.dsList.getColumn(row, "AM_"+tyCrDr+"R"))){
        			if(tyCrDr == "D"){

        				colNm += (colNm.length > 0 ? ", " : "") + "차변금액";
        			}else{
        				colNm += (colNm.length > 0 ? ", " : "") + "대변금액";
        			}
        		}
        	}

        	//거래처
        	if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(row, "CD_VENDOR")))){
        		colNm += (colNm.length > 0 ? ", " : "") + "거래처";
        	}

        	//귀속부서
        	if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(row, "CD_DEPT_BE")))){
        		colNm += (colNm.length > 0 ? ", " : "") + "귀속부서";
        	}

        	if(!this.gfnIsNull(colNm)){
        		this.gfnAlert("[미입력 항목] " + colNm);
        		return false;
        	}
        	return true;
        };

        //부가세 팝업 콜백
        this.fnVatRegPopupCallback = function(svcID, val) {
        	this.dsReturn.clearData();

         	if(!this.gfnIsNull(val)) {
        		if(val != "DEL"){
        			this.dsReturn.loadXML(val);

        			var rowCnt = this.dsList.rowcount;
        			var rowPos = this.dsList.rowposition;

        			var amVat = nexacro.toNumber(this.dsReturn.getColumn(0, "AM_VAT"), 0);	//부가세
        			var tySaleBuy  = this.dsReturn.getColumn(0, "TY_SALEBUY");				//거래구분

        			//부가세 데이터 존재여부
        			var fRow = this.dsList.findRowExpr("!dataset.parent.gfnIsNull(NO_VAT) && NO_VAT == '"+this.dsReturn.getColumn(0, "NO_VAT")+"'");


        			//부가세가 이미 등록되어 있을경우(부가세 수정일 경우)
        			if(fRow > -1){
        				this.dsList.copyRow(fRow, this.dsReturn, this.dsReturn.rowposition);

        				//부가세 계정 로우 찾아서 덮어 씌우기
        				var fAcnt = this.dsList.findRowExpr("currow == "+(fRow+1)+" && CD_ACCOUNT == "+(tySaleBuy == "I" ? "112411" : "211511")+"'");

        				if(fAcnt > -1){
        					var tyCrdr = this.dsList.getColumn(fRow, "TY_CRDR");	//차대구분
        					this.dsList.setColumn(fRow, "YN_VAT" , "Y");	//부가세여부
        					this.dsList.setColumn(fRow, "FLAG_V" , "U");	//부가세 플래그(수정)
        					this.dsList.setColumn(fRow, "DS_REM"  , this.dsReturn.getColumn(0, "DS_VATREM"));		//적요
        					this.dsList.setColumn(fAcnt, "DS_REM" , this.dsReturn.getColumn(0, "DS_VATREM"));		//적요
        					//this.dsList.setColumn(fRow, "DT_ACCOUNT"  , this.dsReturn.getColumn(0, "DT_PROOF"));		//회계일자
        					this.dsList.setColumn(fRow, "CD_PROOF", this.dsReturn.getColumn(0, "CD_PROOF"));		//증빙코드

        					//부가세가 있을경우
        					if(amVat > 0 || amVat < 0){
        						if(this.dsList.getColumn(fAcnt, this.ucFlag) != "I"){
        							this.dsList.setColumn(fAcnt, this.ucFlag, "U");
        						}
        						this.dsList.setColumn(fAcnt, (tyCrdr == "D" ? "AM_DR" : "AM_CR") , amVat);
        						//this.dsList.setColumn(fRow, "FLAG_V", "U");
        					}else{

        						this.dsList.setColumn(fAcnt, this.ucFlag, "D");

        						this.dsList.setColumn(fRow, "YN_VAT", "N");
        						this.dsList.setColumn(fRow, "FLAG_V", "D");
        					}
        				}else{
        					var nRow = this.gfnGridAdd(this.dxGrid, "current_bottom", true);
        					var cdCorp = this.ccfCD_CORP.form.CDTextBox.value;
        					this.dsList.setColumn(nRow, "CD_CORP"   , cdCorp);									//법인코드
        					this.dsList.setColumn(nRow, "CD_DEPT_BH", this.ccfACNTUNIT.form.CDTextBox.value);	//발행부서
        					this.dsList.setColumn(nRow, "TY_CLOSING", this.ccboTY_SLIP.value);					//전표구분
        					//부가세가 있을경우
        					if(amVat > 0 || amVat < 0){
        						this.fnVatDataSet(fRow, nRow, tySaleBuy);
        					}else{
        						if(this.gfnGetFlag(this.dsList, nRow) == "I"){
        							this.dsList.deleteRow(nRow);
        						}
        					}

        				}

        				this.gfnSetFormStatus(this, "U");

        				//항번 셋팅
        				this.fnNoViewSetting();

        				//관리항목 셋팅
        				this.fnEtcGridSetting(fRow);
        			}else{	//부가세 신규등록일 경우
        				this.dsList.set_enableevent(false);

        				this.dsList.copyRow(rowPos, this.dsReturn, this.dsReturn.rowposition);

        				this.dsList.set_enableevent(true);

        				this.dsList.setColumn(rowPos, "YN_VAT" 		, "Y");
        				this.dsList.setColumn(rowPos, "DS_REM" 		, this.dsReturn.getColumn(0, "DS_VATREM"));		//적요
        				this.dsList.setColumn(rowPos, "DT_ACCOUNT"  , this.dsReturn.getColumn(0, "DT_PROOF"));		//회계일자
        				this.dsList.setColumn(rowPos, "CD_PROOF"    , this.dsReturn.getColumn(0, "CD_PROOF"));		//증빙코드

        				if(this.dsList.getColumn(rowPos, "FLAG_V") != "U"){
        					this.dsList.setColumn(rowPos, "FLAG_V" , this.V_IUD_FLAG);
        				}

        				//기등록한 부가세 데이터가 있는지 체크
        				var fRow = this.dsList.findRow("NO_VIEW_VAT", this.dsReturn.getColumn(0, "NO_VIEW"));

        				if(fRow == -1){
        					var nRow = this.gfnGridAdd(this.dxGrid, "current_bottom", true);
        				}else{
        					//기 등록된 부가세 삭제 처리
        					this.dsList.set_enableevent(false);
        					this.dsList.deleteRow(fRow);
        					this.dsList.set_enableevent(true);

        					var nRow = this.gfnGridAdd(this.dxGrid, "current_bottom", true);
        				}

        				var cdCorp = this.ccfCD_CORP.form.CDTextBox.value;
        				this.dsList.setColumn(nRow, "CD_CORP"   , cdCorp);									//법인코드
        				this.dsList.setColumn(nRow, "CD_DEPT_BH", this.ccfACNTUNIT.form.CDTextBox.value);	//발행부서
        				this.dsList.setColumn(nRow, "TY_CLOSING", this.ccboTY_SLIP.value);					//전표구분


        				//부가세가 있을경우
        				if(amVat > 0 || amVat < 0){
        					this.fnVatDataSet(rowPos, nRow, tySaleBuy);
        				}else{
        					if(this.gfnGetFlag(this.dsList, nRow) == "I"){
        						this.dsList.deleteRow(nRow);

        						nRow = rowPos;
        					}

        					//this.dsList.setColumn(nRow, "NO_VIEW_VAT" , this.dsList.getColumn(rowPos, "NO_VIEW"));
        					//this.dsList.setColumn(nRow, "YN_VAT" 	  , "N");
        				}

        				this.gfnSetFormStatus(this, "I");

        				//항번 셋팅
        				this.fnNoViewSetting();

        				//하단 관리항목 로우 추가
        				if(this.dsListSub.rowcount == 0){
        					this.gfnGridAdd(this.dxGridSub, null, false);
        				}
        				//관리항목 셋팅
        				this.fnEtcGridSetting(nRow);
        			}

        			var colDT_ACCOUNT = this.dxGrid.getBindCellIndex("body", "DT_ACCOUNT");
        			this.dxGrid.setCellPos(colDT_ACCOUNT, nRow);

        			//하단 계산
        			this.fnCalcSlip();

        			this.fnAddData(nRow);
        		}else{	//삭제일경우
        			var rowPos = this.dsList.rowposition;
        			var tySaleBuy = this.dsList.getColumn(rowPos, "TY_SALEBUY");	//거래구분
        			var fAcnt = this.dsList.findRowExpr("currow == "+(rowPos+1)+" && CD_ACCOUNT == "+(tySaleBuy == "I" ? "112411" : "211511")+"'");

        			if(this.gfnGetFlag(this.dsList, rowPos) == "I"){
        				this.dsList.deleteRow((rowPos+1));
        				this.dsList.setColumn(rowPos, "CD_VATDEPT_ACNT"	, "");		//부가세 귀속부서
        				this.dsList.setColumn(rowPos, "CD_VATACCOUNT"	, "");		//부가세계정
        				this.dsList.setColumn(rowPos, "CD_VATVENDOR"	, "");		//부가세 거래처코드
        				this.dsList.setColumn(rowPos, "DS_VATVENDOR"	, "");		//부가세 거래처명
        				this.dsList.setColumn(rowPos, "TY_VATVENDOR"	, "");		//부가세 거래처구분
        				this.dsList.setColumn(rowPos, "CD_PROOF"		, "");		//증빙코드
        				this.dsList.setColumn(rowPos, "TY_VATBGJE"		, "");		//불공제사유
        				this.dsList.setColumn(rowPos, "NO_CREDIT"		, "");		//신용카드번호
        				this.dsList.setColumn(rowPos, "YN_VAT"			, "N");		//부가세여부
        				this.dsList.setColumn(rowPos, "FLAG_V"			, "");
        			}else{
        				if(fAcnt > -1){
        					this.dsList.setColumn(fAcnt, this.ucFlag, "D");
        				}
        				this.dsList.setColumn(rowPos, "YN_VAT", "N");
        				this.dsList.setColumn(rowPos, "FLAG_V", "D");
        			}

        // 			}else{
        // 				if(fAcnt > -1){
        // 					if(this.gfnGetFlag(obj, e.row) != "I"){
        // 						this.dsList.setColumn(fAcnt, this.ucFlag, obj.getOrgColumn(e.row, this.ucFlag));
        //
        // 						this.dsList.setColumn(e.row, "YN_VAT", ynVatOrg);
        // 						this.dsList.setColumn(e.row, "FLAG_V", obj.getOrgColumn(e.row, "FLAG_V"));
        // 					}else{
        // 						obj.deleteRow((e.row+1));
        // 					}
        // 				}
        //		}
        		}


        	}
        };

        this.fnVatDataSet = function (rowPos, nRow, tySaleBuy)
        {
        	var tyCrdr = this.dsList.getColumn(rowPos, "TY_CRDR");	//차대구분
        	var amVat = nexacro.toNumber(this.dsReturn.getColumn(0, "AM_VAT"), 0);

        	var cdAccount = "", dsAccount = "";
        	if(tySaleBuy == "I"){	//매입
        		cdAccount = "112411";
        		dsAccount = "선급부가세";
        		tyCrdr = "D";
        	}else if(tySaleBuy == "O"){	//매출
        		cdAccount = "211511";
        		dsAccount = "선수부가세";
        		tyCrdr = "C";
        	}

        	this.dsList.setColumn(nRow, "YN_VAT_ADD" , "Y");
        	this.dsList.setColumn(nRow, "CD_ACCOUNT" , cdAccount);
        	this.dsList.setColumn(nRow, "DS_ACCOUNT" , dsAccount);

        	this.dsList.set_enableevent(false);
        	this.dsList.setColumn(nRow, (tyCrdr == "D" ? "AM_DR" : "AM_CR") , amVat);
        	this.dsList.setColumn(nRow, "TY_CRDR" 	  , tyCrdr);
        	this.dsList.setColumn(nRow, "DT_ACCOUNT"  , this.dsReturn.getColumn(0, "DT_PROOF"));
        	this.dsList.setColumn(nRow, "CD_VENDOR"   , this.dsList.getColumn(rowPos, "CD_VENDOR"));
        	this.dsList.setColumn(nRow, "DS_VENDOR"   , this.dsList.getColumn(rowPos, "DS_VENDOR"));
        	this.dsList.setColumn(nRow, "TY_VENDOR"   , this.dsList.getColumn(rowPos, "TY_VENDOR"));
        	this.dsList.setColumn(nRow, "CD_DEPT_BE"  , this.dsList.getColumn(rowPos, "CD_DEPT_BE"));
        	this.dsList.setColumn(nRow, "DS_DEPT" 	  , this.dsList.getColumn(rowPos, "DS_DEPT"));
        	this.dsList.setColumn(nRow, "NO_VIEW_VAT" , this.dsList.getColumn(rowPos, "NO_VIEW"));
        	this.dsList.setColumn(nRow, "DS_REM" 	  , this.dsReturn.getColumn(0, "DS_VATREM"));		//적요
        	this.dsList.setColumn(nRow, "YN_VAT" 	  , "N");

        	this.dsList.setColumn(nRow, "CD_DEPT_BUY" 	  	, this.dsReturn.getColumn(0, "CD_DEPT_BUY"));		//매입귀속부서
        	this.dsList.setColumn(nRow, "DS_DEPT_BUY" 	  	, this.dsReturn.getColumn(0, "DS_DEPT_BUY"));		//매입귀속부서명
        	this.dsList.setColumn(nRow, "CD_DEPT_ACNT_BON" 	, this.dsReturn.getColumn(0, "CD_DEPT_ACNT_BON"));	//본사귀속부서
        	this.dsList.setColumn(nRow, "DS_DEPT_ACNT_BON" 	, this.dsReturn.getColumn(0, "DS_DEPT_ACNT_BON"));	//본사귀속부서명


        	//수정일 경우 전표번호 채번
        	if(this.V_IUD_FLAG == "U"){
        		var cdSlip = this.fnSetCdSlip(this.txtCD_TRADE.value);
        		this.dsList.setColumn(nRow, "CD_TRADE"  , this.txtCD_TRADE.value);
        		this.dsList.setColumn(nRow, "CD_SLIP"   , cdSlip);
        	}
        	this.dsList.set_enableevent(true);
        };

        //부가세 팝업 호출
        this.fnCallVatPopup = function ()
        {
        	var rPos = this.dsList.rowposition;

        	//부가세 계정일 경우
        	if(this.dsList.getColumn(rPos, "YN_VAT_ACNT") == "Y"){

        		//승인전표는 부가세 추가 안되게 처리
        		//if(this.dsList.getColumn(rPos, "YN_APPR") == "Y" && this.dsList.getColumn(rPos, "YN_VAT") == "N") return;

        		if(!this.fnVatCheckValidate(rPos)) return;

        		var tyCrdr  = this.dsList.getColumn(rPos, "TY_CRDR");	//차대변구분
        		var dtProof = this.dsList.getColumn(rPos, "DT_PROOF");	//증빙일자
        		if(this.gfnIsNull(dtProof)){
        			dtProof = this.dsList.getColumn(rPos, "DT_ACCOUNT");	//회계일자
        		}

        		var param = {};
        		param.P_IUD_FLAG  	= this.V_IUD_FLAG;	//등록,수정,조회 구분
        		param.P_GUBUN  		= "SLIP";	//팝업구분
        		param.P_CD_SLIP  	= this.dsList.getColumn(rPos, "CD_SLIP")				//전표번호
        		param.P_CD_AUTOSLIP = this.dsList.getColumn(rPos, "CD_AUTOSLIP")			//자동전표번호
        		param.P_YN_VAT  	= this.dsList.getColumn(rPos, "YN_VAT");				//부가세여부
        		param.P_NO_VIEW     = this.dsList.getColumn(rPos, "NO_VIEW");				//항번
        		param.P_YN_APPR     = this.dsList.getColumn(rPos, "YN_APPR");				//승인여부
        		param.P_CD_APP      = this.dsList.getColumn(rPos, "CD_APP");				//결재상태코드
        		param.P_NO_VAT      = this.dsList.getColumn(rPos, "NO_VAT");				//부가세번호
        		param.P_ISSUE_ID 	= this.dsList.getColumn(rPos, "ISSUE_ID");				//전자세금계산서번호
        		param.P_FILE_DIR    = this.dsList.getColumn(rPos, "FILE_DIR");				//첨부파일경로
        		param.P_CD_DEPT     = this.dsList.getColumn(rPos, "CD_DEPT_BE");			//귀속부서코드
        		param.P_DS_DEPT     = this.dsList.getColumn(rPos, "DS_DEPT");				//귀속부서명
        		param.CD_DEPT_BUY   = this.dsList.getColumn(rPos, "CD_DEPT_BUY");			//매입귀속부서코드
        		param.DS_DEPT_BUY   = this.dsList.getColumn(rPos, "DS_DEPT_BUY");			//매입귀속부서명
        		param.CD_DEPT_ACNT_BON = this.dsList.getColumn(rPos, "CD_DEPT_ACNT_BON");	//본사귀속부서코드
        		param.DS_DEPT_ACNT_BON = this.dsList.getColumn(rPos, "DS_DEPT_ACNT_BON");	//본사귀속부서명


        		//부가세가 발행이 N이고 증빙구분이 없을 경우(처음 부가세 팝업 띄울경우 부가세 팝업에서 확인을 안눌렀을 경우)
        		if(this.dsList.getColumn(rPos, "YN_VAT") == "N" && this.gfnIsNull(this.dsList.getColumn(rPos, "CD_PROOF"))){

        			//전자세금계산서번호가 있을경우
        			if(!this.gfnIsNull(this.dsList.getColumn(rPos, "ISSUE_ID"))){
        				param.TY_SALEBUY 	= this.dsList.getColumn(rPos, "TY_SALEBUY");	//거래구분
        				param.TY_ISSUE 		= this.dsList.getColumn(rPos, "TY_ISSUE");		//발행구분
        				param.AM_SUPPLY 	= this.dsList.getColumn(rPos, "AM_SUPPLY");		//공급가
        				param.AM_VAT 		= this.dsList.getColumn(rPos, "AM_VAT");		//부가세
        			}else{
        				param.TY_SALEBUY 	= "I";		//거래구분
        				param.AM_SUPPLY 	= this.dsList.getColumn(rPos, "AM_"+tyCrdr+"R");	//금액
        			}

        			param.YN_VAT 		= "N";		//부가세여부
        			param.CD_CORP 		= this.dsList.getColumn(rPos, "CD_CORP");			//회사코드

        			if(!this.gfnIsNull(this.dsList.getColumn(rPos, "CD_DEPT_BUY"))){		//매입부서가 있을경우
        				param.CD_DEPT = this.dsList.getColumn(rPos, "CD_DEPT_BUY");			//매입부서코드
        				param.DS_DEPT = this.dsList.getColumn(rPos, "DS_DEPT_BUY");			//매입부서명
        			}else{
        				param.CD_DEPT 		= this.dsList.getColumn(rPos, "CD_DEPT_BE");		//귀속부서코드
        				param.DS_DEPT 		= this.dsList.getColumn(rPos, "DS_DEPT");			//귀속부서명
        			}
        			param.CD_ACCOUNT 	= this.dsList.getColumn(rPos, "CD_ACCOUNT");		//계정코드
        			param.DS_ACCOUNT 	= this.dsList.getColumn(rPos, "DS_ACCOUNT");		//계정명

        			param.TY_VENDOR 	= this.dsList.getColumn(rPos, "TY_VENDOR");			//거래처구분
        			param.CD_VENDOR 	= this.dsList.getColumn(rPos, "CD_VENDOR");			//거래처코드
        			param.DS_VENDOR 	= this.dsList.getColumn(rPos, "DS_VENDOR");			//거래처명
        			param.NO_SJC 	    = this.dsList.getColumn(rPos, "NO_SJC");			//사업자/주민번호
        			param.DS_REM 		= this.dsList.getColumn(rPos, "DS_REM");			//적요
        			param.DT_PROOF 		= dtProof;											//회계일자
        			param.TY_CRDR 		= tyCrdr;											//차대변구분
        		}else  if(this.dsList.getColumn(rPos, "YN_VAT") == "N" && !this.gfnIsNull(this.dsList.getColumn(rPos, "CD_PROOF"))){

        			param.YN_VAT 		= this.dsList.getColumn(rPos, "YN_VAT");			//부가세여부
        			param.CD_CORP 		= this.dsList.getColumn(rPos, "CD_CORP");			//회사코드
        			var cdVatDeptAcnt = this.dsList.getColumn(rPos, "CD_VATDEPT_ACNT").split("|");	//부가세 귀속부서
        			param.CD_DEPT 		= cdVatDeptAcnt[0];		//귀속부서코드
        			param.DS_DEPT 		= cdVatDeptAcnt[1];		//귀속부서명
        			param.TY_SALEBUY 	= this.dsList.getColumn(rPos, "TY_SALEBUY");		//거래구분
        			param.CD_PROOF 		= this.dsList.getColumn(rPos, "CD_PROOF");			//증빙코드
        			param.DS_PROOF 		= this.dsList.getColumn(rPos, "DS_PROOF");			//증빙코드명
        			param.VAT_RATE 		= this.dsList.getColumn(rPos, "VAT_RATE");			//부가세율
        			param.YN_VATBGJE 	= this.dsList.getColumn(rPos, "YN_VATBGJE");		//불공제여부
        			param.TY_VATBGJE 	= this.dsList.getColumn(rPos, "TY_VATBGJE");		//불공제사유

        			var cdAccount = this.dsList.getColumn(rPos, "CD_VATACCOUNT").split("|");

        			param.CD_ACCOUNT 	= cdAccount[0];	//부가세 계정코드
        			param.DS_ACCOUNT 	= cdAccount[1];	//부가세 계정명
        			param.TY_VENDOR 	= this.dsList.getColumn(rPos, "TY_VENDOR");			//거래처구분
        			param.CD_VENDOR 	= this.dsList.getColumn(rPos, "CD_VENDOR");			//거래처코드
        			param.DS_VENDOR 	= this.dsList.getColumn(rPos, "DS_VENDOR");			//거래처명
        			param.NO_SJC 	    = this.dsList.getColumn(rPos, "NO_SJC");			//사업자/주민번호
        			param.AM_SUPPLY 	= this.dsList.getColumn(rPos, "AM_SUPPLY");			//공급가액
        			param.AM_VAT 		= this.dsList.getColumn(rPos, "AM_VAT");			//부가세액
        			param.AM_SERVICE 	= this.dsList.getColumn(rPos, "AM_SERVICE");		//봉사료
        			param.NO_CREDIT 	= this.dsList.getColumn(rPos, "NO_CREDIT");			//카드번호
        			param.DT_PROOF 		= dtProof;	//회계일자
        			param.DS_REM 		= this.dsList.getColumn(rPos, "DS_VATREM");			//적요
        			param.CK_OMIT 		= this.dsList.getColumn(rPos, "CK_OMIT");			//누락여부
        			param.TY_ISSUE 		= this.dsList.getColumn(rPos, "TY_ISSUE");			//발행구분
        		}else{
        			param.YN_VAT 		= this.dsList.getColumn(rPos, "YN_VAT");			//부가세여부
        			param.CD_CORP 		= this.dsList.getColumn(rPos, "CD_CORP");			//회사코드

        			var cdVatDeptAcnt = this.dsList.getColumn(rPos, "CD_VATDEPT_ACNT").split("|");	//부가세 귀속부서
        			param.CD_DEPT 		= cdVatDeptAcnt[0];		//귀속부서코드
        			param.DS_DEPT 		= cdVatDeptAcnt[1];		//귀속부서명

        			param.TY_SALEBUY 	= this.dsList.getColumn(rPos, "TY_SALEBUY");		//거래구분
        			param.CD_PROOF 		= this.dsList.getColumn(rPos, "CD_PROOF");			//증빙코드
        			param.DS_PROOF 		= this.dsList.getColumn(rPos, "DS_PROOF");			//증빙코드명
        			param.VAT_RATE 		= this.dsList.getColumn(rPos, "VAT_RATE");			//부가세율
        			param.YN_VATBGJE 	= this.dsList.getColumn(rPos, "YN_VATBGJE");		//불공제여부
        			param.TY_VATBGJE 	= this.dsList.getColumn(rPos, "TY_VATBGJE");		//불공제사유

        			var cdAccount = this.dsList.getColumn(rPos, "CD_VATACCOUNT").split("|");

        			param.CD_ACCOUNT 	= cdAccount[0];	//부가세 계정코드
        			param.DS_ACCOUNT 	= cdAccount[1];	//부가세 계정명
        			param.TY_VENDOR 	= this.dsList.getColumn(rPos, "TY_VENDOR");			//거래처구분
        			param.CD_VENDOR 	= this.dsList.getColumn(rPos, "CD_VENDOR");			//거래처코드
        			param.DS_VENDOR 	= this.dsList.getColumn(rPos, "DS_VENDOR");			//거래처명
        			param.NO_SJC 	    = this.dsList.getColumn(rPos, "NO_SJC");			//사업자/주민번호
        			param.AM_SUPPLY 	= this.dsList.getColumn(rPos, "AM_SUPPLY");			//공급가액
        			param.AM_VAT 		= this.dsList.getColumn(rPos, "AM_VAT");			//부가세액
        			param.AM_SERVICE 	= this.dsList.getColumn(rPos, "AM_SERVICE");		//봉사료
        			param.NO_CREDIT 	= this.dsList.getColumn(rPos, "NO_CREDIT");			//카드번호
        			param.DT_PROOF 		= dtProof;	//회계일자
        			param.DS_REM 		= this.dsList.getColumn(rPos, "DS_VATREM");			//적요
        			param.CK_OMIT 		= this.dsList.getColumn(rPos, "CK_OMIT");			//누락여부
        			param.TY_ISSUE 		= this.dsList.getColumn(rPos, "TY_ISSUE");			//발행구분
        		}

        		var sPopupCallBack = "fnVatRegPopupCallback";

        		this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DHA_ISSUEVATDLG", sPopupCallBack, param, 550, 630);

        	}
        };

        //자금 입금내역 전표발행 셋팅
        this.fnDFSetting = function ()
        {
        	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "ISSUE_ID"), "edittype", "expr:YN_DF =='Y' ? 'none':'text'");
        	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "ISSUE_ID"), "expandshow", "expr:YN_DF =='Y'? 'hide':'show'");
        	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "DT_ACCOUNT"), "edittype", "expr:YN_DF =='Y' ? 'none':'date'");
        	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "CD_ACCOUNT"), "edittype", "expr:YN_DF =='Y'? 'none':'text'");
        	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "CD_ACCOUNT"), "expandshow", "expr:YN_DF =='Y'? 'hide':'show'");
        	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "AM_DR"), "edittype", "expr:YN_DF =='Y'? 'none':'text'");
        	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "AM_CR"), "edittype", "expr:YN_DF =='Y'? 'none':'text'");
        	//this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "CD_VENDOR"), "edittype", "expr:YN_DF =='Y'? 'none':'text'");
        	//this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "CD_VENDOR"), "expandshow", "expr:YN_DF =='Y'? 'hide':'show'");
        	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "CD_DEPT_BE"), "edittype", "expr:YN_DF =='Y'? 'none':'text'");
        	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "CD_DEPT_BE"), "expandshow", "expr:YN_DF =='Y'? 'hide':'show'");

        	this.V_IUD_FLAG = "I";

        	this.V_YN_DF 		= this.getOwnerFrame().YN_DF;			//자금여부

        	//전표구분
        	this.ccboTY_SLIP.set_value("03");	//입금전표
        	this.ccboTY_SLIP.set_enable(false);

        	if(!this.gfnIsNull(this.getOwnerFrame().DF_INFO)){

        		var arrDF_INFO = this.getOwnerFrame().DF_INFO.split(",");

        		this.V_NO_INCONFIRM = arrDF_INFO[0];	//입금확인번호(NO_INCONFIRM)

        		//폼 클리어
        		this.fnClearForm();

        		//검색조건 셋팅
        		this.calDT_ACCOUNT.set_value(arrDF_INFO[3]);

        		//법인코드
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.getOwnerFrame().CD_CORP);
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.getOwnerFrame().DS_CORP);

        		//귀속부서코드
        		//this.ccfACNTUNIT.form.CDTextBox.set_value(arrDF_INFO[1]);
        		//this.ccfACNTUNIT.form.DSTextBox.set_value(arrDF_INFO[2]); //2020.06.01 변경

        		//발행부서코드
        		this.ccfACNTUNIT.form.CDTextBox.set_value(arrDF_INFO[25]);
        		this.ccfACNTUNIT.form.DSTextBox.set_value(arrDF_INFO[26]);

        		this.calDT_ACCOUNT.set_enable(false);
        		this.ccfCD_CORP.form.set_readonly(true);
        		this.ccfACNTUNIT.form.set_readonly(true);

        		//첫번째 로우 추가
        		var row0 = this.gfnGridAdd(this.dxGrid, "bottom", true);

        		this.dsList.setColumn(row0, "CD_ACCOUNT"    , arrDF_INFO[6]);	//계정코드(CD_ACCOUNT)

        		this.dsList.set_enableevent(false);

        		//전표정보
        		this.dsList.setColumn(row0, "CD_CORP" 		, this.getOwnerFrame().CD_CORP);	//법인코드
        		this.dsList.setColumn(row0, "CD_DEPT_BH"    , arrDF_INFO[1]);	//발행부서(귀속부서)
        		this.dsList.setColumn(row0, "TY_CLOSING"    , this.ccboTY_SLIP.value);	//전표구분
        		this.dsList.setColumn(row0, "YN_DF"  		, "Y");
        		this.dsList.setColumn(row0, "FLAG_V"  		, "I");
        		this.dsList.setColumn(row0, "YN_IMG"  		, "N");
        		this.dsList.setColumn(row0, "YN_VAT"   		, "N");
        		this.dsList.setColumn(row0, "YN_BANJE"  	, "N");

        		this.dsList.setColumn(row0, "CD_DEPT_BE"  	, arrDF_INFO[1]);		//귀속부서
        		this.dsList.setColumn(row0, "DS_DEPT"  	  	, arrDF_INFO[2]);		//귀속부서명
        		this.dsList.setColumn(row0, "DT_ACCOUNT"  	, arrDF_INFO[3]);		//회계일자
        		this.dsList.setColumn(row0, "AM_DR"    		, nexacro.toNumber(arrDF_INFO[4]));	//차변금액
        		this.dsList.setColumn(row0, "AM_CR"  		, "");					//대변금액
        		this.dsList.setColumn(row0, "DS_REM"  		, arrDF_INFO[5]);		//적요
        		this.dsList.setColumn(row0, "TY_VENDOR"  	, arrDF_INFO[7]);		//거래처구분
        		this.dsList.setColumn(row0, "CD_VENDOR"  	, arrDF_INFO[8]);		//거래처코드
        		this.dsList.setColumn(row0, "DS_VENDOR"  	, arrDF_INFO[9]);		//거래처명
        		this.dsList.setColumn(row0, "TY_CRDR"  		, "D");					//차대구분
        		this.dsList.setColumn(row0, "CD_SLIP_MI"  	, arrDF_INFO[24]);		//반제전표번호

        		this.dsList.set_enableevent(true);

        		//두번째로우 추가
         		var row1 = this.gfnGridAdd(this.dxGrid, "bottom", true);
        		this.dsList.set_enableevent(false);
        		this.dsList.setColumn(row1, "DT_ACCOUNT"  , this.gfnGetDate());
        		//this.dsList.setColumn(row1, "CD_DEPT_BE"  , this.AuthClient.CD_DEPT);
        		this.dsList.setColumn(row1, "CD_DEPT_BH"  , arrDF_INFO[1]);
        		//this.dsList.setColumn(row1, "DS_DEPT"  	  , this.AuthClient.DS_DEPT);
        		this.dsList.setColumn(row1, "CD_CORP"  	  , this.getOwnerFrame().CD_CORP);
        		this.dsList.setColumn(row1, "TY_CLOSING"  , this.ccboTY_SLIP.value);	//전표구분
        		this.dsList.setColumn(row1, "YN_VAT"  	  , "N");
        		this.dsList.setColumn(row1, "YN_DF"  	  , "N");

        		//항번 셋팅
        		this.fnNoViewSetting();

        		this.dsList.set_enableevent(true);

        		//하단 관리항목 로우 추가
        		if(this.dsListSub.rowcount == 0){
        			this.gfnGridAdd(this.dxGridSub, null, false);
        		}

        		//하단 금액 계산
        		this.fnCalcSlip();
        	}
        };

        //자금 관리항목 데이터 셋팅
        this.fnSetGridEtcData = function ()
        {
        	if(!this.gfnIsNull(this.getOwnerFrame().DF_INFO)){
        		var arrDF_INFO = this.getOwnerFrame().DF_INFO.split(",");
        		//관리항목
        		this.dsList.setColumn(0, "TY_ETC1"  	, arrDF_INFO[10]);
        		this.dsList.setColumn(0, "CD_ETC1"  	, arrDF_INFO[11]);
        		this.dsList.setColumn(0, "DS_ETC11"  	, arrDF_INFO[12]);
        		this.dsList.setColumn(0, "TY_ETC2"  	, arrDF_INFO[13]);
        		this.dsList.setColumn(0, "CD_ETC2"  	, arrDF_INFO[14]);
        		this.dsList.setColumn(0, "DS_ETC21"  	, arrDF_INFO[15]);

        		this.dsList.setColumn(0, "TY_REF"  		, arrDF_INFO[16]);
        		this.dsList.setColumn(0, "NO_REF"  		, arrDF_INFO[17]);
        		this.dsList.setColumn(0, "DS_REF"  		, arrDF_INFO[18]);

        		this.dsList.setColumn(0, "TY_REF2"  	, arrDF_INFO[19]);
        		this.dsList.setColumn(0, "NO_REF2"  	, arrDF_INFO[20]);
        		this.dsList.setColumn(0, "DS_REF2"  	, arrDF_INFO[21]);

        		this.dsList.setColumn(0, "DT_REF1"  	, arrDF_INFO[22]);
        		this.dsList.setColumn(0, "DT_REF2"  	, arrDF_INFO[23]);
        	}
        }

        //자금 프로시저 호출
        this.fnDFProcCall = function ()
        {
        	this.dsSaveDF.clearData();

        	var nRow = this.dsSaveDF.addRow();
        	this.dsSaveDF.setColumn(nRow, "NO_INCONFIRM", this.V_NO_INCONFIRM);		//입금확인번호
        	this.dsSaveDF.setColumn(nRow, "NO_SLIP"	    , this.txtCD_TRADE.value);	//전표번호
        	this.dsSaveDF.setColumn(nRow, "ID_USER"	    , this.AuthClient.ID_USER);	//사용자ID

        	var strSvcId    = "callDF";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "callDF=dsSaveDF";
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
        };

        //반제 데이터 체크
        this.fnBjDataCheck = function (rowPos)
        {

        	var bjChk = false;

        	var tyAccount  = this.dsList.getColumn(rowPos, "TY_ACCOUNT");						//미수미불구분
        	var tyCrdrAcnt = this.dsList.getColumn(rowPos, "TY_CRDR_ACNT");						//계정의 차대구분
        	var amDr = nexacro.toNumber(this.dsList.getColumn(rowPos , "AM_DR"),0);				//차변금액
        	var amCr = nexacro.toNumber(this.dsList.getColumn(rowPos , "AM_CR"),0);				//대변금액

        	//결산전표가 아닐경우
        	if(this.ccboTY_SLIP.value != "02"){
        		if(!this.gfnIsNull(tyAccount)){	//미수미불구분이 있을경우
        		//if(tyAccount > 0){	//미수미불구분이 미불(0)이 아닐경우
        			//해당 계정의 차대구분에 금액이 없을경우
        			if(tyCrdrAcnt == "D"){	//차변
        				if(amDr == 0 && amCr != 0){
        					bjChk = true;
        				}
        			}else if(tyCrdrAcnt == "C"){	//대변
        				if(amCr == 0 && amCr != 0){
        					bjChk = true;
        				}
        			}
        		}
        	}
        	return bjChk;
        };

        //자금집행현황 팝업
        this.fnDFPopup = function (obj,e)
        {
         	var param = {};
         	param.CD_SLIP = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP"));
         	this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DHA_ISSUESLIPDFDLG", "fnSlipDFPopupCallback", param, 630, 450);
        };

        //전표복사 팝업
        this.fnSlipCopy = function (obj,e)
        {
         	var param = {};
         	param.CD_SLIP = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP"));
         	this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DHA_ISSUESLIPCOPYDLG", "fnSlipCopyPopupCallback", param, 320, 170);
        };

        //전표복사 팝업 콜백
        this.fnSlipCopyPopupCallback = function(svcID, val) {

         	if(!this.gfnIsNull(val)) {
        		this.V_IUD_FLAG = "I";

        		//this.dxGrid.info = "N";
        		this.dxGridSub.info = "N";

        		this.dsList.set_enableevent(false);

        		for(var i=0;i<this.dsList.rowcount;i++){
        			this.dsList.setColumn(i, this.ucFlag   , "I");		//상태값(신규)
        			this.dsList.setColumn(i, "CD_TRADE"    , "");		//전표번호
        			this.dsList.setColumn(i, "CD_SLIP"     , "");		//전표번호
        			this.dsList.setColumn(i, "ISSUE_ID"    , "");		//전자세금계산서번호

        			this.dsList.setColumn(i, "DT_ACCOUNT"  , val);		//회계일자
        			this.dsList.setColumn(i, "DT_PROOF"    , val);		//부가세 증빙일자
        			this.dsList.setColumn(i, "YN_APPR"     , "N");		//승인여부
        			this.dsList.setColumn(i, "CD_DEPT_BH"  , this.ccfACNTUNIT.form.CDTextBox.value);	//20200506 발행부서 수정 this.AuthClient.CD_DEPT
        			this.dsList.setColumn(i, "FILE_ATTACH" , "");		//전표번호
        			this.dsList.setColumn(i, "CD_AUTOSLIP" , "");		//자동전표번호
        			this.dsList.setColumn(i, "CD_APP"      , "");		//결재상태

        			var flag = "";
        			if(this.dsList.getColumn(i, "YN_VAT") == "Y"){
        				flag = "I";
        			}

        			this.dsList.setColumn(i, "FLAG_V" , flag);
        		}

        		this.txtCD_TRADE.set_value("");
        		this.ccboCD_APP.set_value("");
        		this.txtDS_HNAME.set_value("");
        		this.txtDT_UPDATE.set_value("");

        		this.dsList.set_enableevent(true);

        		this.gfnSetFormStatus(this, "U");

        		this.fnSetButtonEnable("I");

        		this.btnApprove.set_enable(false);
        		this.btnSchApprove.set_enable(false);
        		this.FormBtns.Select.set_enable(false);
        		this.btnSlipCopy.set_enable(false);
        		this.ccboTY_SLIP.set_enable(false);
        	}
        };


        // 전표결제 버튼 클릭
        this.fnApprove = function (obj,e)
        {
        	var cdTrade  = this.gfnTrim(this.txtCD_TRADE.value);
        	if(this.gfnIsNull(cdTrade)){
        		this.gfnAlert("전표번호는 필수입니다.");
        		return;
        	}

        	this.dsSelectDtReq.clearData();
        	var nRow = this.dsSelectDtReq.addRow();

        	this.dsSelectDtReq.setColumn(nRow, "CD_TRADE", cdTrade);

        	var strSvcId    = "selectDtReq";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectDtReq=dsSelectDtReq";
        	var outData     = "dsDtReq=selectDtReq0 dsChkCdApp=selectDtReq1";
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

        // 결제조회 버튼 클릭
        this.fnSchApprove = function (obj,e)
        {
        	//if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var url = this.gfnGetConfig("DZ" , "GW_APROVAL_URL");
        	url = url+"approval/approval_Form.do?";
        	if(this.gfnIsNull(this.dsList.getColumn(0 , "NO_DOC"))){
        		this.gfnAlert("결재 정보가 존재하지 않습니다.");
        		return;
        	}
        	url +="forminstanceID="+this.dsList.getColumn(0 , "NO_DOC");
        	url +="&processID="+this.dsList.getColumn(0 , "DS_DOC");

        	window.open(url, "_blank", "width=790,height=1000,menubar=no,scrollbars=no,resizable=no,status=no");
        };

        //파일이동
        this.fnFileMove = function() {

        	if(this.dsRnameList.rowcount == 0) return;

        	for (var i = 0; i < this.dsRnameList.rowcount; i++) {
        		var fileManager = {};
        		fileManager.CD_GUBUN = "DH03";
        		fileManager.CD_DIR = [ this.dsRnameList.getColumn(i, "PATH_ORG") ];
        		fileManager.MV_DIR = [ this.dsRnameList.getColumn(i, "PATH_NEW") ];
        		// CD_DIR 만 지정시 CD_DIR 배열 순대로 키1,키2,키3 까지 자동지정
        		// 저장되는 디렉토리와 키값이 다른경우 CD_REF 추가로 사용
        		fileManager.CD_REF = [ this.dsRnameList.getColumn(i, "PATH_ORG") ];
        		fileManager.MV_REF = [ this.dsRnameList.getColumn(i, "PATH_NEW") ];

        		fileManager.IS_DELETE = true;

        		this.gfnMoveFile(fileManager, "fnFileMoveCallback");
        	}
        };

        this.fnFileMoveCallback = function(svcID, errorCode, errorMsg) {

        	if (errorCode == 0) {
        		this.vFileCnt++;
        	} else {
        		this.gfnAlert(errorMsg);
        		return;
        	}

        	//전체건 처리 되었을 경우 데이터셋 클리어
        	if(this.dsRnameList.rowcount == this.vFileCnt){
        		this.dsRnameList.clearData();
        		this.vFileCnt = 0;
        		this.FormBtns.Select.click();
        	}
        };

        this.fnFileDelete = function() {
        	this.dsDeleteList.clearData();

        	for( var i=0; i<this.dsFileList.rowcount;i++)
        	{
        		var nrow = this.dsDeleteList.addRow();
        		this.dsDeleteList.setColumn(nrow, "filepath", this.dsFileList.getColumn(i, "DS_PATH"));
        		this.dsDeleteList.setColumn(nrow, "filename", this.dsFileList.getColumn(i, "NM_FILE"));
        	}

        	var strSvcId    = "deletefile";
        	var strSvcType  = "file/deleteFile";
        	var inProc		= "";
        	var inData      = "input=dsDeleteList";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnDeleteCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnDeleteCallback = function(svcID, errorCode, errorMsg) {
        	if(svcID == "deletefile") {
        		if (errorCode == 0) {
        			this.fnFileDataDelete();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "fileDelete") {

        	}
        }

        this.fnFileDataDelete = function() {

        	this.dsFileSave.clearData();

        	for(var i=0;i<this.dsFileList.rowcount;i++){
        		var nrow = this.dsFileSave.addRow();

        // 		var dsPath = this.dsFileList.getColumn(i, "DS_PATH");
        // 		var cdRef1 = dsPath.substring(dsPath.lastIndexOf("\\")+1, dsPath.length);

        		this.dsFileSave.setColumn(nrow, "TY_SAVE" , "D");
        		this.dsFileSave.setColumn(nrow, "NO_SEQ"  , "0");
        		this.dsFileSave.setColumn(nrow, "CD_GUBUN", "DH03");
        		this.dsFileSave.setColumn(nrow, "CD_REF1" , this.dsFileList.getColumn(i, "CD_REF1"));
        	}

        	if (this.dsFileSave.rowcount == 0) return;

        	var strSvcId    = "fileDelete";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "fileDelete=dsFileSave";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnDeleteCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        //파일 조회
        this.fnFileSelect = function ()
        {
        	this.dsFileSelect = new Dataset();
        	this.dsFileSelect.addColumn("CD_GUBUN", "string");
        	this.dsFileSelect.addColumn("CD_REF1", "string");

        	this.dsFileSelect.clearData();
        	this.dsFileSelect.addRow();
        	this.dsFileSelect.setColumn(0, "CD_GUBUN", "DH03");     // 첨부파일 구분
        	this.dsFileSelect.setColumn(0, "CD_REF1", this.txtCD_TRADE.value + "%");		//파일경로 구분

        	var strSvcId    = "fileSelect";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "fileSelect=dsFileSelect";
        	var outData     = "dsFileList=fileSelect0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnAddData = function (rowPos, type)
        {
        	var sExpr = this.ucFlag +" != 'D' && "+ this.ucFlag + " != 'DU'";	//삭제 데이터 제외
        	var amDrSum = nexacro.toNumber(this.dsList.getCaseSum(sExpr , "AM_DR"),0);	//차변금액 합
        	var amCrSum = nexacro.toNumber(this.dsList.getCaseSum(sExpr , "AM_CR"),0);	//대변금액 합

        	if(amDrSum != amCrSum){
        		//이미 추가된 로우가 있을경우
        		var fRow = this.dsList.findRowAs(this.ucFlag, "I", (rowPos+1));

        		if(fRow > -1){
        			return;
        		}

        		var nRow = this.fnAdd();	//추가
        		var tRowPos = nRow -1;

        		this.dsList.set_enableevent(false);
        		this.dsList.setColumn(nRow, "DT_ACCOUNT" , this.dsList.getColumn(tRowPos, "DT_ACCOUNT"));	//회계일자
        		this.dsList.setColumn(nRow, "DS_REM" 	 , this.dsList.getColumn(tRowPos, "DS_REM"));	//적요
        		this.dsList.setColumn(nRow, "CD_VENDOR"  , this.dsList.getColumn(tRowPos, "CD_VENDOR"));	//거래처코드
        		this.dsList.setColumn(nRow, "DS_VENDOR"  , this.dsList.getColumn(tRowPos, "DS_VENDOR"));	//거래처명
        		this.dsList.setColumn(nRow, "TY_VENDOR"  , this.dsList.getColumn(tRowPos, "TY_VENDOR"));	//거래처구분
        		this.dsList.setColumn(nRow, "CD_DEPT_BE" , this.dsList.getColumn(tRowPos, "CD_DEPT_BE"));	//귀속부서코드
        		this.dsList.setColumn(nRow, "DS_DEPT"    , this.dsList.getColumn(tRowPos, "DS_DEPT"));	//귀속부서명

        		//매입귀속부서
        		this.dsList.setColumn(nRow, "CD_DEPT_BUY", this.dsList.getColumn(tRowPos, "CD_DEPT_BUY"));
        		this.dsList.setColumn(nRow, "DS_DEPT_BUY", this.dsList.getColumn(tRowPos, "DS_DEPT_BUY"));
        		//본사귀속부서
        		this.dsList.setColumn(nRow, "CD_DEPT_ACNT_BON", this.dsList.getColumn(tRowPos, "CD_DEPT_ACNT_BON"));
        		this.dsList.setColumn(nRow, "DS_DEPT_ACNT_BON", this.dsList.getColumn(tRowPos, "DS_DEPT_ACNT_BON"));
        		this.dsList.set_enableevent(true);

        		this.dsList.set_rowposition(nRow);

        		var colIdx = this.dxGrid.getBindCellIndex("body", "CD_ACCOUNT");
        		if(type == "KEY"){
        			colIdx = this.dxGrid.getBindCellIndex("body", "DT_ACCOUNT");
        		}
        		this.dxGrid.setCellPos(colIdx, nRow);
        		this.dxGrid.showEditor(true);
        	}
        };

        this.fnGrid_ExpandUp = function(obj, e) {


        	//삭제데이터, 결재완료 데이터일 경우 리턴
        	//if(this.gfnGetFlag(this.dsList, e.row) == "D" || this.dsList.getColumn(e.row, "CD_APP") == "2"){
        	if(this.gfnGetFlag(this.dsList, e.row) == "D"){
        		return;
        	}

        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);

        	if(colnm == "FILE_ATTACH") {
        		var cdDir = "";
        		if(this.gfnGetFlag(this.dsList, e.row) == "I"){
        			if(this.gfnIsNull(this.dsList.getColumn(e.row, "FILE_DIR"))){
        				cdDir = "TEMP_"+this.gfnGetDate("milli");
        			}else{
        				cdDir = this.dsList.getColumn(e.row, "FILE_DIR");
        			}
        		}else{
        			cdDir = this.dsList.getColumn(e.row, "CD_SLIP");
        		}


        		this.FileManager.CD_DIR = [cdDir];
        		this.gfnFileManager(this.FileManager, "fnFileCallback");
        	}
        };

        this.fnFileCallback = function(strID, val) {
        	// val.IsChange : 변경여부, val.Cnt : 파일개수


        	// 파일개수를 다시 셋팅
        	this.dsList.set_enableevent(false);
        	if(val.Cnt == 0) {
        		this.dsList.setColumn(this.dsList.rowposition, "FILE_DIR", "");
        	} else {
        		if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP"))){
        			this.dsList.setColumn(this.dsList.rowposition, "FILE_DIR", this.FileManager.CD_DIR);
        		}
        	}


        	if(val.IsChange){
        		this.dsList.setColumn(this.dsList.rowposition, "FILE_ATTACH", "첨부(" + val.Cnt + ")");
        	}

        	this.dsList.set_enableevent(true);
        };

        //자금신청 이동
        this.fnRequestList = function (obj,e)
        {
         	var param = {};
         	param.CD_CORP = this.ccfCD_CORP.form.CDTextBox.value;
        	param.DS_CORP = this.ccfCD_CORP.form.DSTextBox.value;
        	param.CD_DEPTOPER = this.dsList.getColumn(0, "CD_DEPT_BH");
        	param.DS_DEPTOPER = this.dsList.getColumn(0, "DS_DEPT_BH");
        	param.CD_TRADE = this.dsList.getColumn(0, "CD_TRADE");
        	param.DT_REQ_FROM = this.dsList.getMin("DT_ACCOUNT");
        	param.DT_REQ_TO = this.dsList.getMax("DT_ACCOUNT");

         	this.gfnFormOpen("DFB", "DFB_REQUESTLIST", "fnSlipDFCallback", param);
        };

        //세금계산서 보기
        this.fnTaxView = function (obj,e)
        {

        	var issueId   = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "ISSUE_ID"));
        	var tySalebuy = this.dsList.getColumn(this.dsList.rowposition, "TY_SALEBUY");
        	if(this.gfnIsNull(issueId)){
        		this.gfnAlert("전자세금계산서번호는 필수입니다.");
        		return;
        	}

        	//세금계산서 정보 조회
        	this.fnSelectTax(issueId, tySalebuy);
        };

        //세금계산서 정보 조회
        this.fnSelectTax = function (issueId, tySalebuy)
        {
        	this.dsSelectTax.clearData();
        	var nRow = this.dsSelectTax.addRow();

        	this.dsSelectTax.setColumn(nRow, "ISSUE_ID"  , issueId);		//세금계산서번호
        	this.dsSelectTax.setColumn(nRow, "TY_SALEBUY", tySalebuy);		//매입/매출구분

        	var strSvcId    = "selectTax";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectTax=dsSelectTax";
        	var outData     = "dsTax=selectTax0";
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

        this.divData_divDataTop_btnAddRow_onclick = function(obj,e)
        {
        	if(!this.fnCheckValidate()) return;

        	var addCnt = nexacro.toNumber(this.mskAddCnt.value,0);
        	if(addCnt == 0){
        		this.gfnAlert("추가할 갯수를 입력하세요.");
        		this.mskAddCnt.setFocus();
        		return;
        	}

        	var cdCorp = this.ccfCD_CORP.form.CDTextBox.value;

        	this.dsList.set_enableevent(false);

        	for(var i=0;i<addCnt;i++){
        		var nRow = this.dsList.addRow();
        		this.dsList.setColumn(nRow, "CD_CORP"   , cdCorp);						//법인코드
        		this.dsList.setColumn(nRow, "CD_TRADE"	, this.txtCD_TRADE.value);		//거래번호
        		this.dsList.setColumn(nRow, "DT_ACCOUNT", this.calDT_ACCOUNT.value);	//발행일자
        		this.dsList.setColumn(nRow, "AM_DR"		, "0");							//차변금액
        		this.dsList.setColumn(nRow, "AM_CR"		, "0");							//대변금액
        		this.dsList.setColumn(nRow, "CD_ACCOUNT", "");							//계정코드
        		this.dsList.setColumn(nRow, "CD_DEPT_BH", this.ccfACNTUNIT.form.CDTextBox.value);	//발행부서
        		this.dsList.setColumn(nRow, "TY_CLOSING", this.ccboTY_SLIP.value);		//전표구분
        		this.dsList.setColumn(nRow, "YN_VAT"  	, "N");							//부가세여부
        		this.dsList.setColumn(nRow, this.ucFlag, "I");

        		//수정일 경우 전표번호 채번
        		if(this.V_IUD_FLAG == "U"){
        			var cdSlip = this.fnSetCdSlip(this.txtCD_TRADE.value);
        			this.dsList.setColumn(nRow, "CD_SLIP"   , cdSlip);
        			this.dsList.setColumn(nRow, "FILE_DIR"  , cdSlip);
        		}

        		//항번 셋팅
        		this.fnNoViewSetting();
        	}

        	this.dsList.set_enableevent(true);

        	if(this.V_IUD_FLAG == "U"){
        		this.FormBtns.Select.set_enable(true);
        	}else{
        		this.FormBtns.Select.set_enable(false);
        	}

        	//하단 관리항목 로우 추가
        	if(this.dsListSub.rowcount == 0){
        		this.gfnGridAdd(this.dxGridSub, null, false);
        	}

        	this.gfnSetFormStatus(this, "I");

        	this.gfnSetEnable(this.btnDFPopup, false);


        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataTop.form.btnAddRow.addEventHandler("onclick",this.divData_divDataTop_btnAddRow_onclick,this);
        };
        this.loadIncludeScript("DHA_ISSUESLIP_back.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
