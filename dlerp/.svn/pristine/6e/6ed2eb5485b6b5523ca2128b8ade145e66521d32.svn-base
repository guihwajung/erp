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
            this.set_titletext("예적금 거래 전표발행");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DFFPR_YEJUKUMPLAN_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DFFPR_YEJUKUMPLAN_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DFFPR_YEJUKUMPLAN_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DFFPR_YEJUKUMPLAN_DELETE</Col></Row><Row><Col id=\"TARGET\">ezacalc</Col><Col id=\"SP\">DFFPR_YEJUKUMPLAN_EZACALC</Col></Row><Row><Col id=\"TARGET\">autoslip</Col><Col id=\"SP\">DFFPR_YEJUKUMPLAN_AUTOSLIP_NEW</Col></Row><Row><Col id=\"TARGET\">autoslipx</Col><Col id=\"SP\">DFFPR_YEJUKUMPLAN_AUTOSLIPX</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">branch</Col><Col id=\"SP\">DFBPR_BRANCH_INSERT</Col></Row><Row><Col id=\"TARGET\">bracnchcancel</Col><Col id=\"SP\">DFBPR_BRANCH_DELETE</Col></Row><Row><Col id=\"TARGET\">selectExc</Col><Col id=\"SP\">DHXPR_CURRENCY_EXCHAGE</Col></Row><Row><Col id=\"TARGET\">sliplink</Col><Col id=\"SP\">DFFPR_YEJUKUM_SLIPLINK</Col></Row><Row><Col id=\"TARGET\">sliplinkX</Col><Col id=\"SP\">DFFPR_YEJUKUM_SLIPLINKX</Col></Row><Row><Col id=\"TARGET\">excellog</Col><Col id=\"SP\">DZZPR_TRAN_LOG_INSERT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_SLIP", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_PLAN", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_TRADE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DT_TRADE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DT_TRADE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"NO_YEJUKUM\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PLAN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TRADE\" type=\"STRING\" size=\"256\"/><Column id=\"NM_YEJUKUM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TRAN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRtEx", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">Y</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","0","44","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("실적구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_PLAN","91","44","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_PLAN");
            obj.set_text("진행중");
            obj.set_value("N");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta04","0","10","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfCD_CORP","sta04:0","10.0","295","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","cfCD_CORP:17","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("거래일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfNO_YEJUKUM","492","44","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","402","44","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("관리번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calFR_DT_TRADE","492","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_TILDE","calFR_DT_TRADE:0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calTO_DT_TRADE","staCD_TILDE:0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","760","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("전표발행");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_SLIP","sta02:0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_SLIP");
            obj.set_text("진행중");
            obj.set_value("N");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta05","190","44","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("거래구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_TRADE","sta05:0","44","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_TRADE");
            obj.set_text("진행중");
            obj.set_value("N");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
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
            obj = new BindItem("item0","divSearch.form.cfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cfNO_YEJUKUM.form.CDTextBox","value","dsSearch","NO_YEJUKUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.calFR_DT_TRADE","value","dsSearch","FR_DT_TRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.calTO_DT_TRADE","value","dsSearch","TO_DT_TRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboYN_SLIP","value","dsSearch","YN_SLIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.cboTY_PLAN","value","dsSearch","TY_PLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.cboTY_TRADE","value","dsSearch","TY_TRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cfNO_YEJUKUM.form.DSTextBox","value","dsSearch","NM_YEJUKUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.cfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DFF_PLANSILJUK.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        var chkArr;			// 그리드chk index
        var tmSlip = "";	// 병합전표발행KEY
        var noTrade = "";	// 거래내역번호
        var noTran = "";	// 관리번호 20200406 추가

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
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	// 입력,저장,삭제 버튼 비활성화 처리
        //  	this.FormBtns.Add.set_enable(false);
        //  	this.FormBtns.Save.set_enable(false);
        //  	this.FormBtns.Del.set_enable(false);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnBtchInfChng = this.gfnFormButtonAdd("btnBtchInfChng", "fnBtchInfChng");
        	this.btnEzaCalc = this.gfnFormButtonAdd("btnEzaCalc", "fnEzaCalc");
        	this.btnSlipPub = this.gfnFormButtonAdd("btnSlipPub", "fnSlipPub");
        	this.btnSlipSelect = this.gfnFormButtonAdd("btnSlipSelect", "fnSlipSelect");
        	this.btnSlipCncl = this.gfnFormButtonAdd("btnSlipCncl", "fnSlipCncl");
        	this.btnAmtIlboPrnt = this.gfnFormButtonAdd("btnAmtIlboPrnt", "fnAmtIlboPrnt");
        	//this.btnBranchCancel = this.gfnFormButtonAdd("btnBranchCancel", "fnBranchCancel", "전송전삭제");
        	this.btnOfflineExec = this.gfnFormButtonAdd("btnOfflineExec", "fnOfflineExec");
        	this.btnSlipLink    = this.gfnFormButtonAdd("btnSlipLink", "fnSlipLink"); 					// 전표연결
        	this.btnSlipLinkCancel 	= this.gfnFormButtonAdd("btnSlipLinkCancel", "fnSlipLinkCancel"); 	// 전표연결취소
        	this.btnChg = this.gfnFormButtonAdd("btnChg", "fnChg"); //변동정보 조회
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	// 조회조건
        	this.cfCD_CORP  = this.divSearch.form.cfCD_CORP;				// 법인코드
        	this.calFR_DT_TRADE = this.divSearch.form.calFR_DT_TRADE;		// 거래일자(from)
        	this.calTO_DT_TRADE = this.divSearch.form.calTO_DT_TRADE;		// 거래일자(to)
        	this.cboYN_SLIP = this.divSearch.form.cboYN_SLIP;				// 발행여부
        	this.cfNO_YEJUKUM = this.divSearch.form.cfNO_YEJUKUM;			// 관리번호
        	this.cboTY_PLAN = this.divSearch.form.cboTY_PLAN;				// 실적구분
        	this.cboTY_TRADE = this.divSearch.form.cboTY_TRADE;				// 거래구분

        	this.dxGrid = this.divData.form.objGrid;						// 그리드
        	this.grSearch = this.FormInfo.GR_SEARCH;						// 권한?
        	this.cdGroup = this.gfnIsNull(this.AuthClient.CD_GROUP) ? "" : this.AuthClient.CD_GROUP; // 그룹코드
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.cfCD_CORP.CodeFindName = "DZX_CFCORP";					// 법인코드(조회조건)
        	this.cfNO_YEJUKUM.CodeFindName = "DFX_CFNO_YEJUKUM";			// 관리번호(조회조건)

        	this.cfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfNO_YEJUKUM.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.cfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfNO_YEJUKUM.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFF_PLANSILJUK");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        	this.dxGrid.AfterAllCheck = "fnGrid_AfterAllCheck";
        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";
        	this.dsList.addEventHandler("oncolumnchanged", this.dsList_ColumnChanged, this);


        	// 타화면에서 호출 및 파라미터 존재시 자동 조회
        	if(!this.gfnIsNull(this.getOwnerFrame().NO_YEJUKUM)) {
        		trace("관리번호->" + this.getOwnerFrame().NO_YEJUKUM);
        		trace("날짜1->" + this.getOwnerFrame().DT_TO);
        		trace("날짜2->" + this.getOwnerFrame().DT_FROM);
        		trace("법인->" + this.getOwnerFrame().CD_CORP);

        		this.dsSearch.setColumn(0, "NO_YEJUKUM", this.getOwnerFrame().NO_YEJUKUM);
        		this.dsSearch.setColumn(0, "NM_YEJUKUM", this.getOwnerFrame().NM_YEJUKUM);

        		this.dsSearch.setColumn(0, "TO_DT_TRADE", this.getOwnerFrame().DT_TO);
        		this.dsSearch.setColumn(0, "FR_DT_TRADE", this.getOwnerFrame().DT_FROM);

        		this.dsSearch.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);
        		this.dsSearch.setColumn(0, "DS_CORP", this.getOwnerFrame().DS_CORP);

        	}else{
        		var today = this.gfnGetDate();
        		this.dsSearch.setColumn(0, "FR_DT_TRADE", today);
        		this.dsSearch.setColumn(0, "TO_DT_TRADE", today);
        	}

        	// 법인코드 init
        	if (this.gfnIsNull(this.cfCD_CORP.form.CDTextBox.value)) {
        		this.cfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.cfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}

        	// 권한체크
        	if (nexacro.toNumber(this.grSearch) >= 2) {
        		this.cfCD_CORP.set_enable(false);
        	}

        	// 기준일자 포커스추가
        	this.cfCD_CORP.form.CDTextBox.setFocus();
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("FR_TRADE", "string");
        	this.dsSelect.addColumn("TO_TRADE", "string");
        	this.dsSelect.addColumn("NO_YEJUKUM", "string");
        	this.dsSelect.addColumn("YN_SLIP", "string");
        	this.dsSelect.addColumn("TY_PLAN", "string");
        	this.dsSelect.addColumn("TY_TRADE", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("NO_YEJUKUM", "string");
        	this.dsInsert.addColumn("TY_TRADE", "string");
        	this.dsInsert.addColumn("DT_TRADE", "string");
        	this.dsInsert.addColumn("AM_WONGEUM", "bigdecimal");
        	this.dsInsert.addColumn("AM_TRADE", "bigdecimal");
        	this.dsInsert.addColumn("RT_EZA", "bigdecimal");
        	this.dsInsert.addColumn("AM_EZA", "bigdecimal");
        	this.dsInsert.addColumn("FR_EZA", "string");
        	this.dsInsert.addColumn("TO_EZA", "string");
        	this.dsInsert.addColumn("AM_CORP", "bigdecimal");
        	this.dsInsert.addColumn("AM_JUMIN", "bigdecimal");
        	this.dsInsert.addColumn("AM_ETC", "bigdecimal");
        	this.dsInsert.addColumn("RM_BIGO", "string");
        	this.dsInsert.addColumn("ID_USER", "string");
        	this.dsInsert.addColumn("CD_CURR", "string");
        	this.dsInsert.addColumn("AM_TRADE_KRW", "bigdecimal");
        	this.dsInsert.addColumn("AM_EZA_KRW", "bigdecimal");
        	this.dsInsert.addColumn("AM_ETC_KRW", "bigdecimal");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("TY_TRADE", "string");
        	this.dsUpdate.addColumn("DT_TRADE", "string");
        	this.dsUpdate.addColumn("AM_WONGEUM", "bigdecimal");
        	this.dsUpdate.addColumn("NO_YEJUKUM", "string");
        	this.dsUpdate.addColumn("AM_TRADE", "bigdecimal");
        	this.dsUpdate.addColumn("RT_EZA", "bigdecimal");
        	this.dsUpdate.addColumn("AM_EZA", "bigdecimal");
        	this.dsUpdate.addColumn("FR_EZA", "string");
        	this.dsUpdate.addColumn("TO_EZA", "string");
        	this.dsUpdate.addColumn("AM_CORP", "bigdecimal");
        	this.dsUpdate.addColumn("AM_JUMIN", "bigdecimal");
        	this.dsUpdate.addColumn("AM_ETC", "bigdecimal");
        	this.dsUpdate.addColumn("RM_BIGO", "string");
        	this.dsUpdate.addColumn("NO_SEQ", "bigdecimal");
        	//this.dsUpdate.addColumn("TM_SLIP", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");
        	this.dsUpdate.addColumn("CD_CURR", "string");
        	this.dsUpdate.addColumn("AM_TRADE_KRW", "bigdecimal");
        	this.dsUpdate.addColumn("AM_EZA_KRW", "bigdecimal");
        	this.dsUpdate.addColumn("AM_ETC_KRW", "bigdecimal");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("NO_YEJUKUM", "string");
        	this.dsDelete.addColumn("NO_SEQ", "bigdecimal");

        	this.dsEzaCalc = new Dataset();
        	this.dsEzaCalc.addColumn("NO_YEJUKUM", "string");
        	this.dsEzaCalc.addColumn("NO_SEQ", "string");
        	this.dsEzaCalc.addColumn("ID_USER", "string");

        	this.dsAutoSlip = new Dataset();
        	this.dsAutoSlip.addColumn("TM_SLIP", "string");
        	this.dsAutoSlip.addColumn("YN_SLIP", "string");
        	this.dsAutoSlip.addColumn("CD_CORP", "string");
        	this.dsAutoSlip.addColumn("NO_TRADE", "string");
        	this.dsAutoSlip.addColumn("NO_YEJUKUM", "string");
        	this.dsAutoSlip.addColumn("NO_SEQ", "bigdecimal");
        	//this.dsAutoSlip.addColumn("NO_ACCOUNT_DCHE", "string");
        	//this.dsAutoSlip.addColumn("TY_GUBUN", "string");
        	//this.dsAutoSlip.addColumn("NO_TRAN", "string"); // 20200406 관리번호 추가
        	this.dsAutoSlip.addColumn("ID_USER", "string");

        	this.dsAutoSlipx = new Dataset();
        	this.dsAutoSlipx.addColumn("NO_SLIP", "string");
        	this.dsAutoSlipx.addColumn("ID_USER", "string");

        	this.dsCms = new Dataset();
        	this.dsCms.addColumn("SEQ_EXEC", "string");
        	this.dsCms.addColumn("NO_SEQ", "string");
        	this.dsCms.addColumn("GB_SEND", "string");

        	this.dsCms.addColumn("NO_IN", "string");
        	this.dsCms.addColumn("TY_IN", "string");
        	this.dsCms.addColumn("CD_IN", "string");
        	this.dsCms.addColumn("CD_OWNER", "string");
        	this.dsCms.addColumn("NO_OUT", "string");
        	this.dsCms.addColumn("TY_OUT", "string");
        	this.dsCms.addColumn("CD_OUT", "string");
        	this.dsCms.addColumn("TY_TRAN", "string");

        	this.dsCms.addColumn("ID_USER", "string");

        	this.dslinkSlip = new Dataset();
        	this.dslinkSlip.addColumn("CD_CORP", "string");
        	this.dslinkSlip.addColumn("NO_YEJUKUM", "string");
        	this.dslinkSlip.addColumn("NO_SEQ", "string");
        	this.dslinkSlip.addColumn("CD_SLIP", "string");
        	this.dslinkSlip.addColumn("ID_USER", "string");

        	this.dslinkCancel = new Dataset();
        	this.dslinkCancel.addColumn("CD_CORP", "string");
        	this.dslinkCancel.addColumn("NO_YEJUKUM", "string");
        	this.dslinkCancel.addColumn("NO_SEQ", "string");
        	this.dslinkCancel.addColumn("CD_TRADE", "string");
        	this.dslinkCancel.addColumn("ID_USER", "string");

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
        	this.dsSelect.setColumn(0, "CD_CORP", this.cfCD_CORP.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "FR_TRADE", this.calFR_DT_TRADE.value);
        	this.dsSelect.setColumn(0, "TO_TRADE", this.calTO_DT_TRADE.value);
        	this.dsSelect.setColumn(0, "NO_YEJUKUM", this.cfNO_YEJUKUM.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "YN_SLIP", this.cboYN_SLIP.value);
        	this.dsSelect.setColumn(0, "TY_PLAN", this.cboTY_PLAN.value);
        	this.dsSelect.setColumn(0, "TY_TRADE", this.cboTY_TRADE.value);

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
        	var nRow = this.gfnGridAdd(this.dxGrid);

        	// 실적구분: 신규는 무조건 계획으로 set(insert sp에 '계획'으로 하드코딩)
        	this.dsList.setColumn(nRow, "NO_YEJUKUM", this.dsSearch.getColumn(0, "NO_YEJUKUM"));
        	this.dsList.setColumn(nRow, "TY_PLAN", "계획");
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
        this.fnSave = function(svcId) {
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
        				this.dsInsert.setColumn(nrow, "NO_YEJUKUM", this.dsList.getColumn(i, "NO_YEJUKUM"));
        				this.dsInsert.setColumn(nrow, "TY_TRADE", this.dsList.getColumn(i, "TY_TRADE"));
        				this.dsInsert.setColumn(nrow, "DT_TRADE", this.dsList.getColumn(i, "DT_TRADE"));
        				this.dsInsert.setColumn(nrow, "AM_WONGEUM", this.dsList.getColumn(i, "AM_WONGEUM"));
        				this.dsInsert.setColumn(nrow, "AM_TRADE", this.dsList.getColumn(i, "AM_TRADE"));
        				this.dsInsert.setColumn(nrow, "RT_EZA", this.dsList.getColumn(i, "RT_EZA"));
        				this.dsInsert.setColumn(nrow, "AM_EZA", this.dsList.getColumn(i, "AM_EZA"));
        				this.dsInsert.setColumn(nrow, "FR_EZA", this.dsList.getColumn(i, "FR_EZA"));
        				this.dsInsert.setColumn(nrow, "TO_EZA", this.dsList.getColumn(i, "TO_EZA"));
        				this.dsInsert.setColumn(nrow, "AM_CORP", this.dsList.getColumn(i, "AM_CORP"));
        				this.dsInsert.setColumn(nrow, "AM_JUMIN", this.dsList.getColumn(i, "AM_JUMIN"));
        				this.dsInsert.setColumn(nrow, "AM_ETC", this.dsList.getColumn(i, "AM_ETC"));
        				this.dsInsert.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsInsert.setColumn(nrow, "CD_CURR", this.dsList.getColumn(i, "CD_CURR"));
        				this.dsInsert.setColumn(nrow, "AM_TRADE_KRW", this.dsList.getColumn(i, "AM_TRADE_KRW"));
        				this.dsInsert.setColumn(nrow, "AM_EZA_KRW", this.dsList.getColumn(i, "AM_EZA_KRW"));
        				this.dsInsert.setColumn(nrow, "AM_ETC_KRW", this.dsList.getColumn(i, "AM_ETC_KRW"));
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "TY_TRADE", this.dsList.getColumn(i, "TY_TRADE"));
        				this.dsUpdate.setColumn(nrow, "DT_TRADE", this.dsList.getColumn(i, "DT_TRADE"));
        				this.dsUpdate.setColumn(nrow, "AM_WONGEUM", this.dsList.getColumn(i, "AM_WONGEUM"));
        				this.dsUpdate.setColumn(nrow, "NO_YEJUKUM", this.dsList.getColumn(i, "NO_YEJUKUM"));
        				this.dsUpdate.setColumn(nrow, "AM_TRADE", this.dsList.getColumn(i, "AM_TRADE"));
        				this.dsUpdate.setColumn(nrow, "RT_EZA", this.dsList.getColumn(i, "RT_EZA"));
        				this.dsUpdate.setColumn(nrow, "AM_EZA", this.dsList.getColumn(i, "AM_EZA"));
        				this.dsUpdate.setColumn(nrow, "FR_EZA", this.dsList.getColumn(i, "FR_EZA"));
        				this.dsUpdate.setColumn(nrow, "TO_EZA", this.dsList.getColumn(i, "TO_EZA"));
        				this.dsUpdate.setColumn(nrow, "AM_CORP", this.dsList.getColumn(i, "AM_CORP"));
        				this.dsUpdate.setColumn(nrow, "AM_JUMIN", this.dsList.getColumn(i, "AM_JUMIN"));
        				this.dsUpdate.setColumn(nrow, "AM_ETC", this.dsList.getColumn(i, "AM_ETC"));
        				this.dsUpdate.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsUpdate.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsUpdate.setColumn(nrow, "TM_SLIP", this.dsList.getColumn(i, "TM_SLIP"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsUpdate.setColumn(nrow, "CD_CURR", this.dsList.getColumn(i, "CD_CURR"));
        				this.dsUpdate.setColumn(nrow, "AM_TRADE_KRW", this.dsList.getColumn(i, "AM_TRADE_KRW"));
        				this.dsUpdate.setColumn(nrow, "AM_EZA_KRW", this.dsList.getColumn(i, "AM_EZA_KRW"));
        				this.dsUpdate.setColumn(nrow, "AM_ETC_KRW", this.dsList.getColumn(i, "AM_ETC_KRW"));
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "NO_YEJUKUM", this.dsList.getColumn(i, "NO_YEJUKUM"));
        				this.dsDelete.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	svcId = this.gfnIsNull(svcId) ? "save" : svcId;

        	var strSvcId    = svcId;
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

        	if (this.gfnIsNull(this.calFR_DT_TRADE.value)) {
        		this.gfnAlert("거래일자(FROM)을 입력 하세요.");
        		this.calFR_DT_TRADE.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.calTO_DT_TRADE.value)) {
        		this.gfnAlert("거래일자(TO)을 입력 하세요.");
        		this.calTO_DT_TRADE.setFocus();
        		return false;
        	}

        	if ( !this.gfnIsNull(this.calFR_DT_TRADE.value) && !this.gfnIsNull(this.calTO_DT_TRADE.value) ) {
        		if ( this.calFR_DT_TRADE.value > this.calTO_DT_TRADE.value ) {
        			this.gfnAlert("거래일자가 잘못 입력 되었습니다..");
        			this.calFR_DT_TRADE.setFocus();
        			return false;
        		}
        	}

        	return true;
        };

        /*
         *	팝업 Validate
         */
        this.fnPopupValidate = function(popId) {

        	switch(popId) {

        	// 거래정보일괄변경
        	case "DFF_DLG_PLANSILJUK_CHG":
        		var fndRow = this.dsList.findRow("CHK", 1);
        		if (this.dsList.rowcount == 0 || fndRow <= -1) {
        			this.gfnAlert("일괄변경 대상 거래정보를 체크 하시기 바랍니다!");
        			return false;
        		}
        		break;


        	case "DFF_DLG_INOUTSLIP":	// 만기대체전표발행
        		var fndRow = this.dsList.findRow("CHK", 1);
        		var totalCnt = this.dsList.getCaseCount("CHK == 1");
        		if (this.dsList.rowcount == 0 || fndRow <= -1) {
        			this.gfnAlert("전표발행 대상 거래정보를 체크 하시기 바랍니다!");
        			return false;
        		}

        		var manCnt = this.dsList.getCaseCount("CHK == 1 && (TY_TRADE == '만기대체' || TY_TRADE == '대체입금')");
        		if ( manCnt == 1 || ( manCnt != 0 && (manCnt % 2) != 0 ))
        		{
        			this.gfnAlert("만기대체시에는 대체 입금건을 같이 선택해 주세요!.");
        			return false;
        		}

        		var cntSlip = this.dsList.getCaseCount("CHK == 1 && YN_SLIP == 'Y' ");
        		//var CD_SLIP = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "NO_SLIP"));

        		trace(cntSlip + "전표발행->" );

        		if( cntSlip > 0 ){
        			this.gfnAlert("이미 전표발행된 자료가 존재합니다");
        			return;
        		}

        		var DT_TRADE1 = "";
        		var DT_TRADE2 = "";
        		if (totalCnt > 1) {
        			var row = this.dsList.rowposition;
        			var arrRows = this.dsList.extractRows("CHK == 1");
        			for (var i=0; i < arrRows.length; i++) {
        				//trace("[" + i + "] :: " + arrRows[i]);
        				DT_TRADE1 = this.dsList.getColumn(arrRows[i], "DT_TRADE");
        				for (var j=0; j < arrRows.length; j++) {
        					if (i != j) {
        						DT_TRADE2 = this.dsList.getColumn(arrRows[j], "DT_TRADE");
        						if ( DT_TRADE1 != DT_TRADE2 ) {
        							this.gfnAlert("이전에 선택하신 [거래일자]와 \n현재 선택하신 [거래일자]가 동일하지 않습니다.!!!");
        							this.dsList.setColumn(row, "CHK", 0);
        							return false;
        						}
        					}
        				}
        			}
        		}
        		if ( this.dsList.findRowExpr("CHK == 1 && TY_TRADE == ''") != -1 ) {
        			this.gfnAlert("거래구분은 필수 입력 항목 입니다.");
        			return false;
        		}

        		break;

        	case "DFF_DLG_INSLIP":	// 입금전표발행
        		var fndRow = this.dsList.findRow("CHK", 1);
        		if (this.dsList.rowcount == 0 || fndRow <= -1) {
        			this.gfnAlert("전표발행 대상 거래정보를 체크 하시기 바랍니다!");
        			return false;
        		}

        		var cntSlip = this.dsList.getCaseCount("CHK == 1 && YN_SLIP == 'Y' ");
        		//var CD_SLIP = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "NO_SLIP"));

        		trace(cntSlip + "전표발행->" );

        		if( cntSlip > 0 ){
        			this.gfnAlert("이미 전표발행된 자료가 존재합니다");
        			return;
        		}

        		var inCnt = this.dsList.getCaseCount("CHK == 1 && TY_TRADE == '입금'");
        		var outCnt = this.dsList.getCaseCount("CHK == 1 && (TY_TRADE == '출금' || TY_TRADE == '해약' || TY_TRADE == '만기' || TY_TRADE == '이자')");
        		var wonCnt = this.dsList.getCaseCount("CHK == 1 && TY_TRADE == '원금'");
        		var manCnt = this.dsList.getCaseCount("CHK == 1 && (TY_TRADE == '만기대체' || TY_TRADE == '대체입금')");
        		var totalCnt = this.dsList.getCaseCount("CHK == 1");

        		// 총건수가 1보다 크고(다중선택) 입금, 이자, 출금, 해약, 만기건수 모두 총건수와 다르면 다른 거래구분을 선택한것으로 간주.
        // 		if ( totalCnt > 1 && (totalCnt != inCnt && totalCnt != outCnt && totalCnt != manCnt && totalCnt != wonCnt) ) {
        // 			this.gfnAlert("거래구분은 같은 종류만 선택 가능합니다.");
        // 			return false;
        // 		}
        //
        // 		trace(" totalCnt =>" + totalCnt + ",  manCnt = " + manCnt);
        // 		if ( manCnt == 1 || ( manCnt != 0 && (manCnt % 2) != 0 ))
        // 		{
        // 			this.gfnAlert("만기대체시에는 대체 입금건을 같이 선택해 주세요!.");
        // 			return false;
        // 		}

        		var DT_TRADE1 = "";
        		var DT_TRADE2 = "";
        		var NO_ACCOUNT_DCHE1 = "";
        		var NO_ACCOUNT_DCHE2 = "";
        		if (totalCnt > 1) {
        			var row = this.dsList.rowposition;
        			var arrRows = this.dsList.extractRows("CHK == 1");
        			for (var i=0; i < arrRows.length; i++) {
        				//trace("[" + i + "] :: " + arrRows[i]);
        				DT_TRADE1 = this.dsList.getColumn(arrRows[i], "DT_TRADE");
        				NO_ACCOUNT_DCHE1 = this.dsList.getColumn(arrRows[i], "NO_ACCOUNT_DCHE");
        				for (var j=0; j < arrRows.length; j++) {
        					if (i != j) {
        						DT_TRADE2 = this.dsList.getColumn(arrRows[j], "DT_TRADE");
        						if ( DT_TRADE1 != DT_TRADE2 ) {
        							this.gfnAlert("이전에 선택하신 [거래일자]와 \n현재 선택하신 [거래일자]가 동일하지 않습니다.!!!");
        							this.dsList.setColumn(row, "CHK", 0);
        							return false;
        						}
        						NO_ACCOUNT_DCHE2 = this.dsList.getColumn(arrRows[j], "NO_ACCOUNT_DCHE");
        						if ( NO_ACCOUNT_DCHE1 != NO_ACCOUNT_DCHE2 ) {
        							this.gfnAlert("이전에 선택하신 [입출금계좌]와 \n현재 선택하신 [입출금계좌]가 동일하지 않습니다.!!!");
        							this.dsList.setColumn(row, "CHK", 0);
        							return false;
        						}
        					}
        				}
        			}
        		}

        		if ( this.dsList.findRowExpr("CHK == 1 && TY_TRADE == ''") != -1 ) {
        			this.gfnAlert("거래구분은 필수 입력 항목 입니다.");
        			return false;
        		}

        		break;
        	case "DFF_DLG_LINKSLIP":	// 전표연결
        		var fndRow = this.dsList.findRow("CHK", 1);
        		var totalCnt = this.dsList.getCaseCount("CHK == 1");

        		if (this.dsList.rowcount == 0 || fndRow <= -1) {
        			this.gfnAlert("전표연결 대상 거래정보를 체크 하시기 바랍니다!");
        			return false;
        		}

        		var cntSlip = this.dsList.getCaseCount("CHK == 1 && YN_SLIP == 'Y' ");
        		//var CD_SLIP = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "NO_SLIP"));

        		trace(cntSlip + "전표연결->" );

        		if( cntSlip > 0 ){
        			this.gfnAlert("이미 전표발행된 자료가 존재합니다");
        			return;
        		}

        		var DT_TRADE1 = "";
        		var DT_TRADE2 = "";
        		if (totalCnt > 1) {
        			var row = this.dsList.rowposition;
        			var arrRows = this.dsList.extractRows("CHK == 1");
        			for (var i=0; i < arrRows.length; i++) {
        				//trace("[" + i + "] :: " + arrRows[i]);
        				DT_TRADE1 = this.dsList.getColumn(arrRows[i], "DT_TRADE");
        				for (var j=0; j < arrRows.length; j++) {
        					if (i != j) {
        						DT_TRADE2 = this.dsList.getColumn(arrRows[j], "DT_TRADE");
        						if ( DT_TRADE1 != DT_TRADE2 ) {
        							this.gfnAlert("이전에 선택하신 [거래일자]와 \n현재 선택하신 [거래일자]가 동일하지 않습니다.!!!");
        							this.dsList.setColumn(row, "CHK", 0);
        							return false;
        						}
        					}
        				}
        			}
        		}
        		break;

        	default:
        	}

        	return true;
        }
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
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}

        	// 전표발행전처리콜백
        	} else if (svcID == "autoslipN") {
        		if (errorCode == 0) {
        			this.fnAutoSlip("Y");
        		}
        	} else if (svcID == "autoslipY") {
        		trace(" errorCode=>" + errorCode + ",  errorMsg => " + errorMsg);
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "combo") {

        		//  조회조건(발행여부)
        		var iRow = this.dsYN_SLIP.insertRow(0);
        		this.dsYN_SLIP.setColumn(iRow, "CD_CODE", "");
        		this.dsYN_SLIP.setColumn(iRow, "DS_CODE", "전체");
        		this.cboYN_SLIP.set_index(0);

        		//  조회조건(실적구분)
        		var iRow = this.dsTY_PLAN.insertRow(0);
        		this.dsTY_PLAN.setColumn(iRow, "CD_CODE", "");
        		this.dsTY_PLAN.setColumn(iRow, "DS_CODE", "전체");
        		this.cboTY_PLAN.set_index(0);

        		//  조회조건(거래구분)
        		var iRow = this.dsTY_TRADE.insertRow(0);
        		this.dsTY_TRADE.setColumn(iRow, "CD_CODE", "");
        		this.dsTY_TRADE.setColumn(iRow, "DS_CODE", "전체");
        		this.cboTY_TRADE.set_index(0);


        		if ( !this.gfnIsNull(this.getOwnerFrame().OWNER_ID) ) {
        			this.dsSearch.set_enableevent(false);

        			// from 재무만기현황
        			if (this.getOwnerFrame().OWNER_ID == "DFB_FINANCE_QUERY") {
        				this.cfCD_CORP.form.CDTextBox.set_value(this.getOwnerFrame().CD_CORP);
        				this.cfCD_CORP.form.DSTextBox.set_value(this.getOwnerFrame().DS_CORP);
        				this.cfNO_YEJUKUM.form.CDTextBox.set_value(this.getOwnerFrame().CD_YEJUKUM);
        				this.calFR_DT_TRADE.set_value(this.getOwnerFrame().DT_FROM);
        				this.calTO_DT_TRADE.set_value(this.getOwnerFrame().DT_TO);
        				this.cboTY_TRADE.set_index(0);
        			} else
        			 {
        				this.cfCD_CORP.form.CDTextBox.set_value(this.getOwnerFrame().CD_CORP);
        				this.cfCD_CORP.form.DSTextBox.set_value(this.getOwnerFrame().DS_CORP);
        				this.cfNO_YEJUKUM.form.CDTextBox.set_value(this.getOwnerFrame().NO_YEJUKUM);
        				this.cfNO_YEJUKUM.form.DSTextBox.set_value(this.getOwnerFrame().NM_YEJUKUM);
        				this.calFR_DT_TRADE.set_value(this.getOwnerFrame().DT_FROM);
        				this.calTO_DT_TRADE.set_value(this.getOwnerFrame().DT_TO);
        				this.cboTY_TRADE.set_index(0);
        			}

        			this.dsSearch.set_enableevent(true);

        			this.FormBtns.Select.click();
        		}

        	}else if(svcID == "selectExc") {
        		if (errorCode == 0) {
        			if (this.dsRtEx.rowcount > 0)
        			{
        				this.dsList.setColumn(this.dsList.rowposition , "RT_EXCH", this.dsRtEx.getColumn(0, "RT_KRW_EXCH"));
        			}else{
        				if (this.dsList.getColumn(this.dsList.rowposition,"CD_CURR") =='KRW') {
        					this.dsList.setColumn(this.dsList.rowposition, "RT_EXCH", 1);
        				} else {
        					this.dsList.setColumn(this.dsList.rowposition, "RT_EXCH", 0);
        				}
        			}
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        // 	else if (svcID == "excel")
        // 	{
        // 		if (errorCode == 0) {
        // 			//this.FormBtns.Select.click();
        // 		} else {
        // 			this.gfnAlert(errorMsg);
        // 		}
        // 	}
        }

        this.fnPopCallBack = function(svcID, val) {

        	if (svcID.indexOf("DHA_ISSUESLIP") > -1) {
        		//this.FormBtns.Select.click();
        		return;
        	}
        	// 변동정보 연결
        	if (svcID.indexOf("DFF_DEPOSIT_CHG") > -1) {
        		this.FormBtns.Select.click();
        		return;
        	}

        	if (val != false) {
        		var json = JSON.parse(val);

        		// 거래정보 일괄변경팝업 콜백

        		if (svcID.indexOf("DFF_DLG_PLANSILJUK_CHG") > -1) {
        			this.dsList.set_enableevent(false);

        			for (var i=0; i < this.dsList.rowcount; i++) {
        				// 선택된 대상만 변경
        				if (this.dsList.getColumn(i, "CHK") == 1) {
        					this.dsList.setColumn(i, this.ucFlag, "U");

        					if ( !this.gfnIsNull(json.TY_TRADE) ) {
        						this.dsList.setColumn(i, "TY_TRADE", json.TY_TRADE);	// 거래구분
        					}


        					if ( !this.gfnIsNull(json.DT_TRADE) ) {
        						this.dsList.setColumn(i, "DT_TRADE", json.DT_TRADE);	// 거래일자
        					}

        					if ( !this.gfnIsNull(json.AM_WONGEUM) ) {
        						this.dsList.setColumn(i, "AM_WONGEUM", json.AM_WONGEUM);// 원금
        					}

        					if ( !this.gfnIsNull(json.RT_EZA) ) {
        						this.dsList.setColumn(i, "RT_EZA", json.RT_EZA);		// 이율
        					}

        					if ( !this.gfnIsNull(json.AM_EZA) ) {
        						this.dsList.setColumn(i, "AM_EZA", json.AM_EZA);		// 이자금액
        					}

        					if ( !this.gfnIsNull(json.FR_EZA) ) {
        						this.dsList.setColumn(i, "FR_EZA", json.FR_EZA);		// 이자기간(from)
        					}

        					if ( !this.gfnIsNull(json.TO_EZA) ) {
        						this.dsList.setColumn(i, "TO_EZA", json.TO_EZA);		// 이자기간(to)
        					}
        				}
        			}

        			this.gfnSetFormStatus(this, "U");
        			this.dsList.set_enableevent(true);
        		}

        		// 출금 전표발행팝업 콜백
        		if (svcID.indexOf("DFF_DLG_OUTSLIP") > -1) {
        			this.fnAutoSlip("N");
        		}

        		// 만기대체 전표발행 팝업 콜백
        		if (svcID.indexOf("DFF_DLG_INOUTSLIP") > -1) {
        			noTrade = "";
        			noTrade = json.NO_TRADE;
        			this.fnAutoSlip("N");
        		}

        		// 입금 전표발행팝업 콜백
        		if (svcID.indexOf("DFF_DLG_INSLIP") > -1) {
        			noTrade = "";
        			noTrade = json.NO_TRADE;
        			this.fnAutoSlip("N");
        		}

        		// 대체 전표발행(20200406 추가) 콜백
        		if (svcID.indexOf("DFF_DLG_TRANSLIP") > -1) {
        			noTran = "";
        			noTran = json.NO_TRAN;
        			this.fnAutoSlip("N");
        		}

        		//브랜치 전송
        		if(svcID.indexOf("DFB_DLG_BRANCH") > -1){
        			this.dsCms.clearData();
        			for(var i =0;i<this.dsList.rowcount;i++){
        				if(this.dsList.getColumn(i, "CHK") == 1){
        				var nrow = this.dsCms.addRow();

        				this.dsCms.setColumn(nrow, "SEQ_EXEC", this.dsList.getColumn(i, "NO_YEJUKUM"));
        				this.dsCms.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsCms.setColumn(nrow, "GB_SEND", "YEJUKUM");

        				this.dsCms.setColumn(nrow, "NO_IN", json.NO_IN);
        				this.dsCms.setColumn(nrow, "TY_IN", json.TY_IN);
        				this.dsCms.setColumn(nrow, "CD_IN", json.CD_IN);
        				this.dsCms.setColumn(nrow, "CD_OWNER", json.CD_OWNER);
        				this.dsCms.setColumn(nrow, "NO_OUT", json.NO_OUT);
        				this.dsCms.setColumn(nrow, "TY_OUT", json.TY_OUT);
        				this.dsCms.setColumn(nrow, "CD_OUT", json.CD_OUT);
        				this.dsCms.setColumn(nrow, "TY_TRAN", json.TY_TRAN);
        				this.dsCms.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				}
        			}

        			if (this.dsCms.rowcount == 0) return;

        			var strSvcId    = "save";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "branch=dsCms";
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

        	}
        }


        /*
         * 전표발행
         */
        this.fnAutoSlip = function(slipYn) {

        	this.dsAutoSlip.clearData();

        	// 전표발행
        	if (slipYn == "N") {

        		tmSlip = this.AuthClient.ID_USER + this.gfnGetDate("milli");

        		for (var i=0; i < this.dsList.rowcount; i++) {
        			if (this.dsList.getColumn(i, "CHK") == 1) {
        				var nrow = this.dsAutoSlip.addRow();
        				this.dsAutoSlip.setColumn(nrow, "TM_SLIP", tmSlip);
        				this.dsAutoSlip.setColumn(nrow, "YN_SLIP", slipYn);
        				this.dsAutoSlip.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsAutoSlip.setColumn(nrow, "NO_TRADE", this.gfnIsNull(noTrade) ? "" : noTrade);
        				this.dsAutoSlip.setColumn(nrow, "NO_YEJUKUM", this.dsList.getColumn(i, "NO_YEJUKUM"));
        				this.dsAutoSlip.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsAutoSlip.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			}
        		}
        	// 전표발행후처리
        	} else {
        		var nrow = this.dsAutoSlip.addRow();
        		this.dsAutoSlip.setColumn(nrow, "TM_SLIP", tmSlip);
        		this.dsAutoSlip.setColumn(nrow, "YN_SLIP", slipYn);
        		this.dsAutoSlip.setColumn(nrow, "CD_CORP", this.dsList.getColumn(this.dsList.findRow("CHK", 1), "CD_CORP"));
        		this.dsAutoSlip.setColumn(nrow, "NO_TRADE", this.gfnIsNull(noTrade) ? "" : noTrade);
        		//this.dsAutoSlip.setColumn(nrow, "NO_TRAN", this.gfnIsNull(noTran) ? "" : noTran); // 20200406 관리번호 추가P_NO_TRAN
        		this.dsAutoSlip.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}

        	if (this.dsAutoSlip.rowcount == 0) return;

        	//trace(slipYn);
        	var strSvcId    = "autoslip" + slipYn;
        	var strSvcType  = "savesel";
        	var inProc		= "_dsProc";
        	var inData      = "autoslip=dsAutoSlip";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	var cdCorp = this.cfCD_CORP.form.CDTextBox.value;

        	switch(id) {

        	// 법인코드(조회조건)
        	case "cfCD_CORP":
        		dsUserParam.setColumn(nrow, "CD_GROUP", this.cdGroup);
        		break;

        	// 관리번호(조회조건)
        	case "cfNO_YEJUKUM":
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnIsNull(cdCorp) ? "" : cdCorp);
        		break;

        	default:
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	var arr = codeFindData;

        	switch(id) {

        	// 법인코드(조회조건)
        	case "cfCD_CORP":
        		this.fnSearchInit();
        		break;

        	// 관리번호(조회조건)
        	case "cfNO_YEJUKUM":
        		this.fnSearchInit();
        		break;

        	default:
        	}
        	return true;
        }



        this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow) {
        	var cdCorp = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");

        	// 관리번호
        	if (id == "DFX_CFNO_YEJUKUM") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnIsNull(cdCorp) ? this.dsSearch.getColumn(0, "CD_CORP") : cdCorp);
        	}
        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	// 관리번호
        	if (id == "DFX_CFNO_YEJUKUM") {
        		if(arr.length > 0) {
        			this.dsList.setColumn(this.dsList.rowposition, "CD_CORP", arr[0]["CD_CORP1"]);			// 법인코드
        			this.dsList.setColumn(this.dsList.rowposition, "DS_CORP", arr[0]["DS_CORP"]);			// 법인명
        			this.dsList.setColumn(this.dsList.rowposition, "DS_BANKITEM", arr[0]["DS_BANKITEM"]);	// 금융상품
        			this.dsList.setColumn(this.dsList.rowposition, "NM_YEJUKUM", arr[0]["NM_YEJUKUM"]);		// 예적금명
        			this.dsList.setColumn(this.dsList.rowposition, "NO_ACCOUNT", arr[0]["NO_ACCOUNT"]);		// 계좌번호
        			this.dsList.setColumn(this.dsList.rowposition, "CD_VENDOR", arr[0]["CD_VENDOR"]);		// 금융기관코드
        			this.dsList.setColumn(this.dsList.rowposition, "DS_VENDOR", arr[0]["DS_VENDOR"]);		// 금융기관명
        			this.dsList.setColumn(this.dsList.rowposition, "CD_CURR", arr[0]["CD_CURR"]);		// 가입통화
        			if (arr[0]["CD_CURR"] =='KRW') {
        				this.dsList.setColumn(this.dsList.rowposition, "RT_EXCH", 1);
        			} else {
        				this.dsList.setColumn(this.dsList.rowposition, "RT_EXCH", 0);
        			}
        			if (!this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "DT_TRADE"))){
        				this.fnSetRtExchange();
        				if(this.dsList.getColumn(this.dsList.rowposition , "AM_TRADE") > 0){
        					this.fnSetRtExchangeCallback(this.dsList.rowposition, "AM_TRADE");
        				}
        				if (this.dsList.getColumn(this.dsList.rowposition , "AM_EZA") > 0)
        				{
        					this.fnSetRtExchangeCallback(this.dsList.rowposition, "AM_EZA");
        				}
        				if (this.dsList.getColumn(this.dsList.rowposition , "AM_ETC") > 0)
        				{
        					this.fnSetRtExchangeCallback(this.dsList.rowposition, "AM_ETC");
        				}
        			}
        		}
        	}
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         // 셀 수정가능 여부 (반드시 EnterCell에서 처리할것)
         // cell 수정안되는것만 return false 할것
         // 마지막에 return true 해버리면 전체 컬럼 수정가능해져버림
        this.fnGrid_EnterCell = function(obj, row, cell) {
        	var colunm = this.gfnGridGetBindColumnNameByIndex(obj, cell);
        	var ynSlip = this.dsList.getColumn(row, "YN_SLIP");

        	if (colunm == "CHK"){
        		return true;
        	}else if (ynSlip == "Y"){
        		return false;
        	}else {
        		// 공통 > Setting > 그리드정보 에서 셋팅한 내용대로
        		var nGrdSpcRow = this.dsGridSpec.findRow( "DS_FIELD", colunm);
        		var YN_READONLY = this.dsGridSpec.getColumn(nGrdSpcRow, "YN_READONLY");

        		var rowFlag = this.gfnGetFlag(this.dsList, row);

        		if(YN_READONLY == "N") return true;
        		if(YN_READONLY == "U" && rowFlag == "I"){	// flag 가 입력일때만 입력가능
        			return true;
        		}
        	}
        	return false;

        }

        //그리드 값변경 이벤트
        this.dsList_ColumnChanged = function(obj, e)
        {
        	trace("그리드 값변경 이벤트 " + e.columnid + "/" + e.newvalue)
        	if(e.newvalue == e.oldvalue) { return;}
        	//
        	if(e.columnid == "DT_TRADE"){

        		if ( !this.gfnIsNull(this.dsList.getColumn(e.row , "CD_CURR")) )
        		{
        			this.fnSetRtExchange();
        			if (this.dsList.getColumn(e.row , "AM_TRADE") > 0)
        			{
        				if ( this.dsList.getColumn(e.row , "TY_TRADE")=="입금" || this.dsList.getColumn(e.row , "TY_TRADE")=="대체입금" )
        				{
        					this.fnSetRtExchangeCallback(e.row, "AM_TRADE");
        				}else{
        					this.fnSetAmOutKrw(e.row, this.dsList.getColumn(e.row, "AM_TRADE"), this.dsList.getColumn(e.row, "DT_TRADE"));
        				}
        			}
        			if (this.dsList.getColumn(e.row , "AM_EZA") > 0)
        			{
        				this.fnSetRtExchangeCallback(e.row, "AM_EZA");
        			}
        			if (this.dsList.getColumn(e.row , "AM_ETC") > 0)
        			{
        				this.fnSetRtExchangeCallback(e.row, "AM_ETC");
        			}
        		}
        	}else if(e.columnid == "RT_EXCH")
        	{
        		if (this.dsList.getColumn(e.row , "AM_TRADE") > 0)
        		{
        			if ( this.dsList.getColumn(e.row , "TY_TRADE")=="입금" || this.dsList.getColumn(e.row , "TY_TRADE")=="대체입금" )
        			{
        				this.fnSetRtExchangeCallback(e.row, "AM_TRADE");
        			}else
        			{
        				this.fnSetAmOutKrw(e.row, this.dsList.getColumn(e.row, "AM_TRADE"), this.dsList.getColumn(e.row, "DT_TRADE"));
        			}
        		}
        		if (this.dsList.getColumn(e.row , "AM_EZA") > 0)
        		{
        			this.fnSetRtExchangeCallback(e.row, "AM_EZA");
        		}
        		if (this.dsList.getColumn(e.row , "AM_ETC") > 0)
        		{
        			this.fnSetRtExchangeCallback(e.row, "AM_ETC");
        		}
        	}else if(e.columnid == "AM_EZA")
        	{
        		this.fnSetRtExchangeCallback(e.row, e.columnid);

        	}else if(e.columnid == "AM_TRADE")
        	{	if(this.dsList.getColumn(e.row , "TY_TRADE")=="입금" || this.dsList.getColumn(e.row , "TY_TRADE")=="대체입금"){
        			this.fnSetRtExchangeCallback(e.row , e.columnid);
        		} else {
        			this.fnSetAmOutKrw(e.row, e.newvalue, this.dsList.getColumn(e.row, "DT_TRADE"));
        		}
        	}else if(e.columnid == "TY_TRADE")
        	{
        	    if (this.dsList.getColumn(e.row , "AM_TRADE") > 0){
        			if( e.newvalue =="입금" || e.newvalue =="대체입금" || this.dsList.getColumn(e.row , "CD_CURR")=="KRW" ){
        				this.fnSetRtExchangeCallback(e.row ,"AM_TRADE");
        			} else {
        				this.fnSetAmOutKrw(e.row, this.dsList.getColumn(e.row, "AM_TRADE"), this.dsList.getColumn(e.row, "DT_TRADE"));
        			}
        		}
        	}
        }

        this.fnGrid_AfterEdit = function(obj,e) {
        trace("fnGrid_AfterEdit");

        }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        // 일괄정보변경
        this.fnBtchInfChng = function(obj,e) {
        	var popId = "DFF_DLG_PLANSILJUK_CHG";
        	if (!this.fnPopupValidate(popId)) {
        		return false;
        	}

        	var param = {};

        	var width = 425;
        	var height = 380;

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DFF_DLG_PLANSILJUK_CHG", "fnPopCallBack", param, width, height);
        }


        // 환율 가져오기
        this.fnSetRtExchange = function ()
        {
        	this.dsExchange = new Dataset();
        	this.dsExchange.addColumn("TY_GUBUN", "string");
        	this.dsExchange.addColumn("CN_ROW", "int");
        	this.dsExchange.addColumn("VALUE", "string");
        	this.dsExchange.addColumn("MIN_VALUE", "string");
        	this.dsExchange.addColumn("DT_BASE", "string");
        	this.dsExchange.addColumn("CD_LOCAL_CURR", "string");
        	this.dsExchange.addColumn("CD_EXEC_CURR", "string");

        	this.dsExchange.addRow();
        	this.dsExchange.setColumn(0, "TY_GUBUN", "");
        	this.dsExchange.setColumn(0, "CN_ROW", 0);
        	this.dsExchange.setColumn(0, "VALUE", "");
        	this.dsExchange.setColumn(0, "MIN_VALUE", "");
        	this.dsExchange.setColumn(0, "DT_BASE", this.dsList.getColumn(this.dsList.rowposition, "DT_TRADE"));
        	this.dsExchange.setColumn(0, "CD_LOCAL_CURR", "KRW");
        	this.dsExchange.setColumn(0, "CD_EXEC_CURR", this.dsList.getColumn(this.dsList.rowposition, "CD_CURR"));

        	var strSvcId    = "selectExc";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectExc=dsExchange";
        	var outData     = "dsRtEx=selectExc0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]


        };

        //환율 계산 처리
        this.fnSetRtExchangeCallback = function(row , column)
        {
        	var rtExchange = this.dsList.getColumn(row, "RT_EXCH");

        	trace("fnSetRtExchangeCallback rtExchage=>" + rtExchange);

        	var amContKrw = nexacro.toNumber(this.dsList.getColumn(row, column )) * rtExchange;

        	this.dsList.setColumn(row, column+"_KRW", this.fnGetTrunc(amContKrw, 1));

        };

        // 예적금만기액 원화계산
        this.fnSetAmOutKrw = function(vRow, val, vDate){
        	trace(" fnSetAmOutKrw=>" +vDate + ":" + val );
        // 	var noYeajukum = this.dsList.getColumn(vRow , "NO_YEAJUKUM");
        // 	var sExpr = this.ucFlag +" != 'D' && "+ this.ucFlag + " != 'DU'" + "&& NO_YEAJUKUM =='" + noYeajukum +"' && DT_TRADE < '" + vDate+ "' && (TY_TRADE=='입금' || TY_TRADE =='대체입금' )"  ;
        // 	var sExpr1 = this.ucFlag +" != 'D' && "+ this.ucFlag + " != 'DU'" + "&& NO_YEAJUKUM =='"+ noYeajukum +"' && DT_TRADE < '" + vDate+ "' && (TY_TRADE!='입금' && TY_TRADE !='대체입금' )"  ;
        // 	var amInKrw = this.dsList.getCaseSum(sExpr , "AM_TRADE_KRW");
        // 	var amOutKrw =  this.dsList.getCaseSum(sExpr1 , "AM_TRADE_KRW");
        // 	var amIn = this.dsList.getCaseSum(sExpr , "AM_TRADE");
        // 	var amOut =  this.dsList.getCaseSum(sExpr1 , "AM_TRADE");

        // 	var amJanKrw = amInKrw - amOutKrw; // 현잔액 원화
        // 	var amJan = amIn - amOut;   // 현잔액 가입통화
        	var amJanKrw = this.dsList.getColumn(vRow, "AM_JAN_KRW");
        	var amJan = this.dsList.getColumn(vRow , "AM_JAN");
        	var amCurrent = val ;       // 현 입력액

        	if ( amCurrent == 0 || this.gfnIsNull(amCurrent))
        	{
        		amCurrentKrw = 0;
        	} else {
        		amCurrentKrw = this.fnGetTrunc(amJanKrw * amCurrent / amJan, 1);
        	}

        	trace(" fnSetAmOutKrw=>" +amCurrentKrw + "::" + amJanKrw);
        	this.dsList.setColumn(vRow, "AM_TRADE_KRW" ,  amCurrentKrw);
        }

        // 이자계산
        this.fnEzaCalc = function(obj,e) {

        	if(this.dsList.findRow("CHK",1) < 0){
        		this.gfnAlert("선택된 항목이 없습니다.");
        		return false;
        	}

        	this.gfnConfirm("이자계산을 하시겠습니까?","fnEzaCalc_callback");
        }

        this.fnEzaCalc_callback = function(strId, val) {

        	if (val) {
        		this.dsEzaCalc.clearData();

        		for (var i=0; i < this.dsList.rowcount; i++) {
        			if (this.dsList.getColumn(i, "CHK") == 1) {
        				var nrow = this.dsEzaCalc.addRow();
        				this.dsEzaCalc.setColumn(nrow, "NO_YEJUKUM", this.dsList.getColumn(i, "NO_YEJUKUM"));
        				this.dsEzaCalc.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsEzaCalc.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			}
        		}

        		if (this.dsEzaCalc.rowcount == 0) return;

        		var strSvcId    = "save";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "ezacalc=dsEzaCalc";
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
        }

        // 전표발행
        this.fnSlipPub = function(obj,e) {

        	var popId = "DFF_DLG_INSLIP";
        	if (!this.fnPopupValidate(popId)) {
        		return false;
        	}

        	noTrade = "";	// 거래내역번호
        	noTran = "";
        // 	var chaipCnt = this.dsList.findRowExpr("CHK == 1 && TY_TRADE == '차입'");
        // 	var eZaSangCnt = this.dsList.findRowExpr("CHK == 1 && (TY_TRADE == '이자' || TY_TRADE == '상환')");


        	var vRow = this.dsList.findRowExpr("CHK == 1");
        	// 출금전표발행일시 거래구분이 입금만...
        	var inCnt = this.dsList.findRowExpr("CHK == 1 && TY_TRADE == '입금'");
        	// 입금전표발행일시 거래구분이 출금/해약/만기/이자 만...
        	var outCnt = this.dsList.findRowExpr("CHK == 1 && (TY_TRADE == '출금' || TY_TRADE == '해약' || TY_TRADE == '만기' || TY_TRADE == '이자')");
        	// 2019.12.10 원금추가
        	var wanCnt = this.dsList.findRowExpr("CHK == 1 && TY_TRADE == '원금'");
        	// 거래구분이 만기대체 또는 대체입금일 경우 20200406 추가
        	var daCnt = this.dsList.findRowExpr("CHK == 1 && (TY_TRADE == '만기대체' || TY_TRADE == '대체입금' )");
        	// 입금전표의 경우 대체계좌가 입금분류 계좌가 아닐경우 입금분류내역 확인 하지않음.
        	var ynIncome = this.dsList.findRowExpr("CHK == 1 && YN_INCOME == 'Y' && (TY_TRADE == '출금' || TY_TRADE == '해약' || TY_TRADE == '만기' || TY_TRADE == '이자' || TY_TRADE == '만기대체')");

        	var param = {};

        	// 입금전표발행(거래구분 : 출금/해약/만기/이자)
        	if (outCnt != -1 && daCnt == -1 && inCnt == -1) {

        		popId = "DFF_DLG_INSLIP";

        		var width = 430;
        		var height = 370;

        		param.AM_TRADE = this.dsList.getCaseSum("CHK == 1", "AM_TRADE");						// 거래금액
        		param.AM_EZA = this.dsList.getCaseSum("CHK == 1", "AM_EZA");							// 이자금액
        		var amCorp = this.dsList.getCaseSum("CHK == 1", "AM_CORP");								// 법인세
        		var amJumin = this.dsList.getCaseSum("CHK == 1", "AM_JUMIN");							// 주민세
        		param.AM_CORP_JUMIN = amCorp + amJumin;													// 법인/주민세
        		param.AM_ETC = this.dsList.getCaseSum("CHK == 1", "AM_ETC");							// 부대비용

        		// 입금예상금액(거래금액 + 이자금액 - 법인/주민세 - 부대비용)
        		param.AM_TOTAL = param.AM_TRADE + param.AM_EZA - param.AM_CORP_JUMIN - param.AM_ETC;

        		param.CD_CORP = this.dsList.getColumn(vRow, "CD_CORP");				// 법인코드

        		// todo 추후 계좌 컬럼 확인하여 수정해야함
        		param.NO_ACCOUNT = this.dsList.getColumn(vRow,"NO_ACCOUNT_DCHE");		// 계좌
        		param.DT_TRADE = this.dsList.getColumn(vRow, "DT_TRADE");			// 거래일자
        		param.CT_INCOME = ynIncome;											// 입금분류 건수

        	}

        	// 출금전표발행(거래구분 : 입금)
        	else if (inCnt != -1 && daCnt == -1 && outCnt == -1) {
        		popId = "DFF_DLG_OUTSLIP";
        		var width = 430;
        		var height = 330;

        		param.AM_EZA = this.dsList.getCaseSum("CHK == 1", "AM_EZA");				// 이자금액
        		var amCorp = this.dsList.getCaseSum("CHK == 1", "AM_CORP");					// 법인세
        		var amJumin = this.dsList.getCaseSum("CHK == 1", "AM_JUMIN");				// 주민세
        		param.AM_CORP_JUMIN = amCorp + amJumin;										// 법인/주민세
        		param.AM_ETC = this.dsList.getCaseSum("CHK == 1", "AM_ETC");				// 부대비용
        		param.AM_TOTAL = this.dsList.getCaseSum("CHK == 1", "AM_TRADE");			// 출금금액

        		// 출금예상금액(출금금액 + 이자금액 - 법인/주민세 - 부대비용)
        		param.AM_PRE_TOTAL = param.AM_TOTAL + param.AM_EZA - param.AM_CORP_JUMIN - param.AM_ETC;

        		param.CD_CORP = this.dsList.getColumn(vRow, "CD_CORP");	// 법인코드
        	}

        	else if (wanCnt != -1) {
        		this.fnAutoSlip("N");
        		return;
        	}

        	// 거래구분(만기대체, 대체입금) 20200406 추가
        	else  {
        		popId = "DFF_DLG_INOUTSLIP";

        		var width = 400;
        		var height = 375;

        		param.AM_INTRADE = this.dsList.getCaseSum("CHK == 1 && (TY_TRADE=='대체입금' || TY_TRADE == '입금')", "AM_TRADE");
        		param.AM_OUTTRADE = this.dsList.getCaseSum("CHK == 1 && (TY_TRADE=='만기대체' || TY_TRADE=='만기' || TY_TRADE=='출금'  || TY_TRADE=='해약')", "AM_TRADE");	// 거래금액
        		param.AM_EZA = this.dsList.getCaseSum("CHK == 1", "AM_EZA");							// 이자금액
        		var amCorp = this.dsList.getCaseSum("CHK == 1", "AM_CORP");								// 법인세
        		var amJumin = this.dsList.getCaseSum("CHK == 1", "AM_JUMIN");							// 주민세
        		param.AM_CORP_JUMIN = amCorp + amJumin;													// 법인/주민세
        		param.AM_ETC = this.dsList.getCaseSum("CHK == 1", "AM_ETC");							// 부대비용
        		param.AM_EZAINCOME = param.AM_EZA - param.AM_CORP_JUMIN;

        		// 입금예상금액(거래금액 + 이자금액 - 법인/주민세 - 부대비용)

        		param.AM_INCOME = param.AM_OUTTRADE;    //입금예상액
        // 		if (param.AM_INCOME < 0)
        // 		{
        		    param.AM_OUT = param.AM_INTRADE;   //출금예상액
        			//param.AM_INCOME = 0;								   //입금예상액
        		//}
        		trace(" param.AM_INCOME=>" +param.AM_INCOME );
        		param.CD_CORP = this.dsList.getColumn(vRow, "CD_CORP");				// 법인코드

        		// todo 추후 계좌 컬럼 확인하여 수정해야함
        		param.NO_ACCOUNT = this.dsList.getColumn(vRow,"NO_ACCOUNT_DCHE");		// 계좌
        		param.DT_TRADE = this.dsList.getColumn(vRow, "DT_TRADE");			    // 거래일자
        		param.CT_INCOME = ynIncome;
        	}

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen('DFF', popId, "fnPopCallBack", param, width, height);

        }

        //  전표취소 전표조회 validation check
        this.fnSlipValidation = function() {

        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if ( this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "NO_SLIP") )) {
        		this.gfnAlert("발행된 전표가 없습니다.");
        		return false;
        	}

        	return true;
        }

        // 전표조회
        this.fnSlipSelect = function(obj,e) {


        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.fnSlipValidation()) {
        		return false;
        	}
        	//var chkRow = this.dsList.findRow("CHK", 1);
        	var param = {};
        	param.CD_TRADE = this.dsList.getColumn(this.dsList.rowposition, "NO_SLIP");
        	param.IUD_FLAG = "S";
        	param.strYN_JUNDO_START = "";

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	//trace("this.FormInfo.CD_MODULE :: " + this.FormInfo.CD_MODULE);
        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnPopCallBack", param);

        }

        // 전표취소
        this.fnSlipCncl = function(obj,e) {

        	if (!this.fnSlipValidation()) {
        		return false;
        	}

        	if (this.dsList.getColumn(this.dsList.rowposition, "YN_CONNECT") == "Y") {
        		this.gfnAlert("전표 연결 자료입니다. 취소할 수 없습니다.");
        		return false;
        	}

        	this.gfnConfirm("전표취소 처리 하시겠습니까?","fnSlipCncl_callback");
        }

        this.fnSlipCncl_callback = function(strId, val) {

        	if (val) {
        		this.dsAutoSlipx.clearData();

        		var nrow = this.dsAutoSlipx.addRow();
        		this.dsAutoSlipx.setColumn(nrow, "NO_SLIP", this.dsList.getColumn(this.dsList.rowposition, "NO_SLIP"));
        		this.dsAutoSlipx.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        		if (this.dsAutoSlipx.rowcount == 0) return;

        		var strSvcId    = "save";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "autoslipx=dsAutoSlipx";
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
        }


        //전표연결
        this.fnSlipLink = function (obj,e)
        {
        	if (!this.fnPopupValidate("DFF_DLG_LINKSLIP")) {
        		return false;
        	}

        	var param = {};
        		param.AM_TRADE = this.dsList.getCaseSum("CHK == 1", "AM_TRADE");		// 거래금액
        		param.AM_EZA = this.dsList.getCaseSum("CHK == 1", "AM_EZA");			// 이자금액
        // // 		var amCorp = this.dsList.getCaseSum("CHK == 1", "AM_CORP");				// 법인세
        // // 		var amJumin = this.dsList.getCaseSum("CHK == 1", "AM_JUMIN");			// 주민세
        // // 		param.AM_CORP_JUMIN = amCorp + amJumin;									// 법인/주민세
        // // 		param.AM_ETC = this.dsList.getCaseSum("CHK == 1", "AM_ETC");			// 부대비용

        		param.CD_CORP = this.dsList.getCaseMax("CHK == 1", "CD_CORP");			// 법인코드
        		param.DT_TRADE = this.dsList.getCaseMax("CHK == 1", "DT_TRADE");		// 거래일자

        	var sPopupCallBack = "fnSlipLinkPopupCallback";

        	this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DFF_DLG_LINKSLIP", sPopupCallBack, param, 430, 250);

        };

        //전표연결 팝업 콜백
        this.fnSlipLinkPopupCallback = function(svcID, val) {

        	if(val){
        	this.dslinkSlip.clearData();
        	var json = JSON.parse(val);
        	for(var i =0;i<this.dsList.rowcount;i++){
        		if(this.dsList.getColumn(i, "CHK") == 1){
        		var nrow = this.dslinkSlip.addRow();

        		this.dslinkSlip.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        		this.dslinkSlip.setColumn(nrow, "NO_YEJUKUM", this.dsList.getColumn(i, "NO_YEJUKUM"));
        		this.dslinkSlip.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        		this.dslinkSlip.setColumn(nrow, "CD_SLIP", json.CD_TRADE);
        		this.dslinkSlip.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		}
        	}

        	if (this.dslinkSlip.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "sliplink=dslinkSlip";
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

        //전표연결 취소
        this.fnSlipLinkCancel = function (obj,e)
        {

         	if(this.dsList.getColumn(this.dsList.rowposition, "YN_CONNECT") != "Y"){
         		this.gfnAlert("전표 연결 데이터를 선택하세요.");
         		return;
         	}

        	this.gfnConfirm("연결을 취소하시겠습니까?", "fnSlipLinkCancel_callback");
        };

        this.fnSlipLinkCancel_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dslinkCancel.clearData();
        		var nRow = this.dslinkCancel.addRow();

        		//처리할 데이터 담기
        		this.dslinkCancel.setColumn(nRow, "CD_CORP", this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));
        		this.dslinkCancel.setColumn(nRow, "NO_YEJUKUM", this.dsList.getColumn(this.dsList.rowposition, "NO_YEJUKUM"));
        		this.dslinkCancel.setColumn(nRow, "NO_SEQ"  , this.dsList.getColumn(this.dsList.rowposition, "NO_SEQ"));
        		this.dslinkCancel.setColumn(nRow, "CD_TRADE", this.dsList.getColumn(this.dsList.rowposition, "NO_SLIP"));
        		this.dslinkCancel.setColumn(nRow, "ID_USER", this.AuthClient.ID_USER);

        		var strSvcId    = "save";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "sliplinkX=dslinkCancel";
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

        // 변동정보 조회
        this.fnChg = function(obj,e) {

        	if(!this.gfnGridIsRow(this.dxGrid)) return;
        	var param = {};

        	param.CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");
        	param.DS_CORP = this.dsSearch.getColumn(0, "DS_CORP");
        	param.DT_FROM = this.dsList.getColumn(this.dsList.rowposition, "DT_CONT");
        	param.NO_YEJUKUM = this.dsList.getColumn(this.dsList.rowposition,"NO_YEJUKUM");
        	param.NM_YEJUKUM = this.dsList.getColumn(this.dsList.rowposition,"NM_YEJUKUM");

        	this.gfnFormOpen("DFF", "DFF_DEPOSIT_CHG", "fnPopCallBack", param, this.getOffsetWidth(), this.getOffsetHeight());
        }

        // 공통코드콤보
        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(0, "CD_TYPE", "Z1");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(1, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(1, "CD_TYPE", "FA");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(2, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(2, "CD_TYPE", "FB");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsYN_SLIP=combo0 dsTY_PLAN=combo1 dsTY_TRADE=combo2";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        this.divData_objGrid_oncellclick = function(obj,e)
        {

        };

        this.fnGrid_AfterAllCheck = function(obj, cell, check)
        {

        }

        this.fnSetRowstatus = function() {
        	var chk = this.dsList.getColumn(this.dsList.rowposition, "CHK");

        	if (chk == 0) {
        		this.dsList.setColumn(this.dsList.rowposition, this.ucFlag, "");
        	}
        }

        // 브랜치전송
        this.fnAmtIlboPrnt = function(obj,e) {
        	if(this.dsList.findRow("CHK",1) < 0){
        		this.gfnAlert("선택된 항목이 없습니다.");
        		return false;
        	}

        	if(this.dsList.getCaseCount("CHK == '1'") > 1){
        		this.gfnAlert("CMS 전송 은 한건씩 선택하세요.");
        		return false;
        	}

        	var nrow = this.dsList.findRow("CHK",1);
        	if(this.dsList.getColumn(nrow, "TY_TRADE") != "입금" ){
        		this.gfnAlert("거래구분이 입금이 아니면 CMS 전송 할 수 없습니다.");
        		return false;
        	}

        	var param = {};
        	param.CD_CORP = this.gfnTrim(this.dsList.getColumn(nrow, "CD_CORP"));	// 법인코드
        	param.NO_IN = this.gfnTrim(this.dsList.getColumn(nrow, "NO_ACCOUNT"));	// 입금계좌
        	param.TY_IN = this.gfnTrim(this.dsList.getColumn(nrow, "TY_GUBUN"));	// 입금계좌
        	param.CD_IN = this.gfnTrim(this.dsList.getColumn(nrow, "CD_BANK"));	// 입금계좌
        	param.DS_IN = this.gfnTrim(this.dsList.getColumn(nrow, "NM_OPENER"));	// 입금계좌
        	param.CD_OWNER = this.gfnTrim(this.dsList.getColumn(nrow, "CD_VENDOR"));	// 입금계좌
        	param.NO_OUT = this.gfnTrim(this.dsList.getColumn(nrow, "NO_ACCOUNT_DCHE"));	// 출금계좌
        	param.TY_OUT = this.gfnTrim(this.dsList.getColumn(nrow, "TY_OUT_GUBUN"));	// 출금계좌
        	param.CD_OUT = this.gfnTrim(this.dsList.getColumn(nrow, "CD_OUT_BANK"));	// 출금계좌
        	param.DS_OUT = this.gfnTrim(this.dsList.getColumn(nrow, "NM_OUT_OPENER"));	// 출금계좌
        	param.TY_TRAN = this.dsList.getColumn(nrow, "CD_CURR") =="KRW" ? "01" : "02" ;	// 전송구분

        	this.gfnFormOpen("DFB", "DFB_DLG_BRANCH", "fnPopCallBack", param);
        };

        // 전송전삭제
        this.fnBranchCancel = function(obj,e) {

        	if(this.dsList.findRow("CHK",1) < 0){
        		this.gfnAlert("선택된 항목이 없습니다.");
        		return false;
        	}

        	this.dsCms.clearData();
        	for(var i =0;i<this.dsList.rowcount;i++){
        		if(this.dsList.getColumn(i, "CHK") == 1){
        			var nrow = this.dsCms.addRow();

        			this.dsCms.setColumn(nrow, "SEQ_EXEC", this.dsList.getColumn(i, "NO_YEJUKUM"));
        			this.dsCms.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        			this.dsCms.setColumn(nrow, "GB_SEND", "YEJUKUM");
        			this.dsCms.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		}
        	}

        	if (this.dsCms.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "bracnchcancel=dsCms";
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
        };

        // 오프라인처리
        this.fnOfflineExec = function(obj,e) {

        	if(this.dsList.findRow("CHK",1) < 0){
        		this.gfnAlert("선택된 항목이 없습니다.");
        		return false;
        	}
        	this.dsCms.clearData();
        	for(var i =0;i<this.dsList.rowcount;i++){
        		if(this.dsList.getColumn(i, "CHK") == 1){
        			var nrow = this.dsCms.addRow();
        			this.dsCms.setColumn(nrow, "SEQ_EXEC", this.dsList.getColumn(i, "NO_YEJUKUM"));
        			this.dsCms.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        			this.dsCms.setColumn(nrow, "GB_SEND", "OFFYEJUKUM");
        			this.dsCms.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        		}
        	}

        	if (this.dsCms.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "branch=dsCms";
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
        };

        // 원단위 절사
        this.fnGetTrunc = function(amVal, vCnt){
        	var returnVal = this.gfnNvl(amVal, 0);
        	if(returnVal > 0){
        		returnVal = Math.floor(amVal/vCnt) * vCnt;
        	}
        	return returnVal;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboTY_PLAN.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.calFR_DT_TRADE.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.calTO_DT_TRADE.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.cboYN_SLIP.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.cboTY_TRADE.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divData.form.objGrid.addEventHandler("oncellclick",this.divData_objGrid_oncellclick,this);
        };
        this.loadIncludeScript("DFF_PLANSILJUK.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
