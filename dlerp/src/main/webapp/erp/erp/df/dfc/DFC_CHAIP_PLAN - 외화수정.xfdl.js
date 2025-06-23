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
            this.set_titletext("차입금거래 전표발행");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DFCPR_CHAIPPLAN_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DFCPR_CHAIPPLAN_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DFCPR_CHAIPPLAN_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DFCPR_CHAIPPLAN_DELETE</Col></Row><Row><Col id=\"TARGET\">ezacalc</Col><Col id=\"SP\">DFCPR_CHAIPPLAN_EZACALC</Col></Row><Row><Col id=\"TARGET\">autoslip</Col><Col id=\"SP\">DFCPR_CHAIPPLAN_AUTOSLIP</Col></Row><Row><Col id=\"TARGET\">autoslipx</Col><Col id=\"SP\">DFCPR_CHAIPPLAN_AUTOSLIPX</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo2</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo3</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">branch</Col><Col id=\"SP\">DFBPR_BRANCH_INSERT</Col></Row><Row><Col id=\"TARGET\">bracnchcancel</Col><Col id=\"SP\">DFBPR_BRANCH_DELETE</Col></Row><Row><Col id=\"TARGET\">branch</Col><Col id=\"SP\">DFBPR_BRANCH_INSERT</Col></Row><Row><Col id=\"TARGET\">linkslip</Col><Col id=\"SP\">DFCPR_CHAIPPLAN_LINKSLIP</Col></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DT_TRADE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DT_TRADE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CHAIP\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PLAN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TRADE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TRAN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfCD_CORP","sta04:0.0","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("60");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","cfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("거래일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calFR_DT_TRADE","sta00:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_TILDE","calFR_DT_TRADE:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calTO_DT_TRADE","staCD_TILDE:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","calTO_DT_TRADE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("발행여부");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_SLIP","sta02:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_SLIP");
            obj.set_text("진행중");
            obj.set_value("N");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","0.0","sta04:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("관리번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfNO_CHAIP","sta01:0.0","sta04:10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta03","cfNO_CHAIP:0.0","sta04:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("실적구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_PLAN","sta03:0.0","sta04:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_PLAN");
            obj.set_text("진행중");
            obj.set_value("N");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta05","cboTY_PLAN:0.0","sta04:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("거래구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_TRADE","sta05:0.0","sta04:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new BindItem("item5","divSearch.form.cfNO_CHAIP.form.CDTextBox","value","dsSearch","NO_CHAIP");
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
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DFC_CHAIP_PLAN - 외화수정.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        var chkArr;			// 그리드chk index
        var tmSlip = "";	// 병합전표발행KEY
        var noTrade = "";	// 거래내역번호
        var noAccount = "";	// 계좌번호 20200407 추가
        var tyGubun = "";	// 20200407 추가
        var cdBank = "";	// 20200407 추가

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

        	this.btnChngInfoInsert = this.gfnFormButtonAdd("btnChngInfoInsert", "fnChngInfoInsert") //, "변동정보등록");
        	this.btnEzaCalc = this.gfnFormButtonAdd("btnEzaCalc", "fnEzaCalc") //, "이자계산");
        	this.btnBtchInfChng = this.gfnFormButtonAdd("btnBtchInfChng", "fnBtchInfChng") //, "일괄정보변경");
        	this.btnSlipPub = this.gfnFormButtonAdd("btnSlipPub", "fnSlipPub") //, "전표발행");
        	this.btnSlipConnect = this.gfnFormButtonAdd("btnSlipConnect", "fnSlipConnect") //, "전표연결");
        	this.btnSlipSelect = this.gfnFormButtonAdd("btnSlipSelect", "fnSlipSelect") //, "전표조회");
        	this.btnSlipCncl = this.gfnFormButtonAdd("btnSlipCncl", "fnSlipCncl") //, "전표취소");
        	this.btnAmtIlboPrnt = this.gfnFormButtonAdd("btnAmtIlboPrnt", "fnAmtIlboPrnt") //, "CMS전송");
        	//this.btnBranchCancel = this.gfnFormButtonAdd("btnBranchCancel", "fnBranchCancel", "전송전삭제");
        	this.btnOfflineExec = this.gfnFormButtonAdd("btnOfflineExec", "fnOfflineExec") //, "오프라인처리");

        	this.btnCurrCalc = this.gfnFormButtonAdd("btnCurrCalc", "fnCurrCalc") //환율 적용
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
        	this.cfNO_CHAIP = this.divSearch.form.cfNO_CHAIP;				// 관리번호
        	this.cboTY_PLAN = this.divSearch.form.cboTY_PLAN;				// 실적구분
        	this.cboTY_TRADE = this.divSearch.form.cboTY_TRADE;				// 거래구분

        	this.dxGrid = this.divData.form.objGrid;						// 그리드
        	this.grSearch = this.FormInfo.GR_SEARCH;						// 권한?
        	this.cdGroup = this.gfnIsNull(this.AuthClient.CD_GROUP) ? "" : this.AuthClient.CD_GROUP;						// 그룹코드
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.cfCD_CORP.CodeFindName = "DZX_CFCORP";					// 법인코드(조회조건)
        	this.cfNO_CHAIP.CodeFindName = "DFX_CFNO_CHAIP";			// 관리번호(조회조건)

        	this.cfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfNO_CHAIP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.cfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfNO_CHAIP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFC_CHAIPPLAN");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        	this.dxGrid.AfterAllCheck = "fnGrid_AfterAllCheck";
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";

        	// 법인코드 init
        	if (this.gfnIsNull(this.cfCD_CORP.form.CDTextBox.value)) {
        		this.cfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.cfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}

        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "FR_DT_TRADE", today);
        	this.dsSearch.setColumn(0, "TO_DT_TRADE", today);


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
        	this.dsSelect.addColumn("NO_CHAIP", "string");
        	this.dsSelect.addColumn("YN_SLIP", "string");
        	this.dsSelect.addColumn("TY_PLAN", "string");
        	this.dsSelect.addColumn("TY_TRADE", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("NO_CHAIP", "string");
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
        	this.dsInsert.addColumn("YN_ETC", "string");
        	this.dsInsert.addColumn("RM_BIGO", "string");
        	this.dsInsert.addColumn("ID_USER", "string");
        	this.dsInsert.addColumn("RM_ETC", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("NO_CHAIP", "string");
        	this.dsUpdate.addColumn("TY_TRADE", "string");
        	this.dsUpdate.addColumn("DT_TRADE", "string");
        	this.dsUpdate.addColumn("AM_WONGEUM", "bigdecimal");
        	this.dsUpdate.addColumn("AM_TRADE", "bigdecimal");
        	this.dsUpdate.addColumn("RT_EZA", "bigdecimal");
        	this.dsUpdate.addColumn("AM_EZA", "bigdecimal");
        	this.dsUpdate.addColumn("FR_EZA", "string");
        	this.dsUpdate.addColumn("TO_EZA", "string");
        	this.dsUpdate.addColumn("AM_CORP", "bigdecimal");
        	this.dsUpdate.addColumn("AM_JUMIN", "bigdecimal");
        	this.dsUpdate.addColumn("AM_ETC", "bigdecimal");
        	this.dsUpdate.addColumn("YN_ETC", "string");
        	this.dsUpdate.addColumn("RM_BIGO", "string");
        	this.dsUpdate.addColumn("NO_SEQ", "bigdecimal");
        	//this.dsUpdate.addColumn("TM_SLIP", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");
        	this.dsUpdate.addColumn("RM_ETC", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("NO_CHAIP", "string");
        	this.dsDelete.addColumn("NO_SEQ", "bigdecimal");

        	this.dsEzaCalc = new Dataset();
        	this.dsEzaCalc.addColumn("NO_CHAIP", "string");
        	this.dsEzaCalc.addColumn("NO_SEQ", "string");
        	this.dsEzaCalc.addColumn("ID_USER", "string");

        	this.dsAutoSlip = new Dataset();
        	this.dsAutoSlip.addColumn("TM_SLIP", "string");
        	this.dsAutoSlip.addColumn("YN_SLIP", "string");
        	this.dsAutoSlip.addColumn("CD_CORP", "string");
        	this.dsAutoSlip.addColumn("NO_TRADE", "string");
        	this.dsAutoSlip.addColumn("NO_CHAIP", "string");
        	this.dsAutoSlip.addColumn("NO_SEQ", "bigdecimal");
        	this.dsAutoSlip.addColumn("NO_ACCOUNT", "string"); // 20200407 계좌번호
        	this.dsAutoSlip.addColumn("TY_GUBUN", "string");
        	this.dsAutoSlip.addColumn("CD_BANK", "string");
        	this.dsAutoSlip.addColumn("ID_USER", "string");

        	this.dsAutoSlipx = new Dataset();
        	this.dsAutoSlipx.addColumn("NO_SLIP", "string");
        	this.dsAutoSlipx.addColumn("ID_USER", "string");

        	this.dsLinkSlip = new Dataset();
        	this.dsLinkSlip.addColumn("NO_CHAIP", "string");
        	this.dsLinkSlip.addColumn("NO_SEQ", "bigdecimal");
        	this.dsLinkSlip.addColumn("NO_SLIP", "string");
        	this.dsLinkSlip.addColumn("ID_USER", "string");

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
        	this.dsSelect.setColumn(0, "NO_CHAIP", this.cfNO_CHAIP.form.CDTextBox.value);
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
        				this.dsInsert.setColumn(nrow, "NO_CHAIP", this.dsList.getColumn(i, "NO_CHAIP"));
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
        				this.dsInsert.setColumn(nrow, "YN_ETC", this.gfnNvl(this.dsList.getColumn(i, "YN_ETC"), "Y"));
        				this.dsInsert.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsInsert.setColumn(nrow, "RM_ETC", this.dsList.getColumn(i, "RM_ETC"));
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "NO_CHAIP", this.dsList.getColumn(i, "NO_CHAIP"));
        				this.dsUpdate.setColumn(nrow, "TY_TRADE", this.dsList.getColumn(i, "TY_TRADE"));
        				this.dsUpdate.setColumn(nrow, "DT_TRADE", this.dsList.getColumn(i, "DT_TRADE"));
        				this.dsUpdate.setColumn(nrow, "AM_WONGEUM", this.dsList.getColumn(i, "AM_WONGEUM"));
        				this.dsUpdate.setColumn(nrow, "AM_TRADE", this.dsList.getColumn(i, "AM_TRADE"));
        				this.dsUpdate.setColumn(nrow, "RT_EZA", this.dsList.getColumn(i, "RT_EZA"));
        				this.dsUpdate.setColumn(nrow, "AM_EZA", this.dsList.getColumn(i, "AM_EZA"));
        				this.dsUpdate.setColumn(nrow, "FR_EZA", this.dsList.getColumn(i, "FR_EZA"));
        				this.dsUpdate.setColumn(nrow, "TO_EZA", this.dsList.getColumn(i, "TO_EZA"));
        				this.dsUpdate.setColumn(nrow, "AM_CORP", this.dsList.getColumn(i, "AM_CORP"));
        				this.dsUpdate.setColumn(nrow, "AM_JUMIN", this.dsList.getColumn(i, "AM_JUMIN"));
        				this.dsUpdate.setColumn(nrow, "AM_ETC", this.dsList.getColumn(i, "AM_ETC"));
        				this.dsUpdate.setColumn(nrow, "YN_ETC", this.gfnNvl(this.dsList.getColumn(i, "YN_ETC"), "Y"));
        				this.dsUpdate.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsUpdate.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsUpdate.setColumn(nrow, "RM_ETC", this.dsList.getColumn(i, "RM_ETC"));
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "NO_CHAIP", this.dsList.getColumn(i, "NO_CHAIP"));
        				this.dsDelete.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	svcId = this.gfnIsNull(svcId) ? "save" : svcId;
        	//trace("svcId :: " + svcId);
        	//trace(this.dsUpdate.saveXML());

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
        	case "DFC_DLG_CHAIP_PLAN_CHG":
        		var fndRow = this.dsList.findRow("CHK", 1);
        		if (this.dsList.rowcount == 0 || fndRow <= -1) {
        			this.gfnAlert("일괄변경 대상 거래정보를 체크 하시기 바랍니다!");
        //			if (this.dsList.rowcount > 0) {
        //				this.dsList.set_rowposition(0);
        //				this.dxGrid.setCellPos(1);
        //			}
        			return false;
        		}
        		break;


        	case "DFC_DLG_CHAIP_OUTSLIP":	// 출금전표발행
        	case "DFC_DLG_CHAIP_INSLIP":	// 입금전표발행
        		var fndRow = this.dsList.findRow("CHK", 1);
        		if (this.dsList.rowcount == 0 || fndRow <= -1) {
        			this.gfnAlert("전표발행 대상 거래정보를 체크 하시기 바랍니다!");
        //			if (this.dsList.rowcount > 0) {
        //				this.dsList.set_rowposition(0);
        //				this.dxGrid.setCellPos(1);
        //			}
        			return false;
        		}

        		// 체크된 데이터중 거래구분 차입, 이자, 상환 건수
        		var chaipCnt = this.dsList.getCaseCount("CHK == 1 && TY_TRADE == '차입'");
        		var ezaCnt = this.dsList.getCaseCount("CHK == 1 && TY_TRADE == '이자'");
        		var sangCnt = this.dsList.getCaseCount("CHK == 1 && TY_TRADE == '상환'");
        		var totalCnt = chaipCnt + ezaCnt + sangCnt;


        		// 총건수가 1보다 크고(다중선택) 차입, 이자, 상환 건수 모두 총건수보다 작으면 다른 거래구분을 선택한것으로 간주.
        		//if ( totalCnt > 1 && (totalCnt != chaipCnt && totalCnt != ezaCnt && totalCnt != sangCnt) ) {



        		// 이자 건수가 0보다 크거나 상환 건수가 0보다 클경우 차입 건수는 0보다 크면 안됨
        		if ( totalCnt > 1 && (ezaCnt > 0 ||  sangCnt > 0) && chaipCnt > 0 ) {
        			this.gfnAlert("거래구분은 하나의 종류만 선택 가능합니다.");
        			return false;
        		}

        		if (chaipCnt > 1) {
        			this.gfnAlert("거래구분[차입]은 한건만 선택 가능합니다.");
        			return false;
        		}

        		if ( this.dsList.findRowExpr("CHK == 1 && TY_TRADE == ''") != -1 ) {
        			this.gfnAlert("거래구분은 필수 입력 항목 입니다.");
        			return false;
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

        	} else if (svcID == "autoslipN") {
        		if (errorCode == 0) {
        			this.fnAutoSlip("Y");
        		}
        	} else if (svcID == "autoslipY") {
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
        				this.cfNO_CHAIP.form.CDTextBox.set_value(this.getOwnerFrame().NO_CHAIP);
        				this.calFR_DT_TRADE.set_value(this.getOwnerFrame().DT_FROM);
        				this.calTO_DT_TRADE.set_value(this.getOwnerFrame().DT_TO);
        				this.cboTY_TRADE.set_index(0);
        			}

        			// from 차입금약정등록
        			if (this.getOwnerFrame().OWNER_ID == "DFC_CHAIP_REGISTRATION") {
        				this.cfCD_CORP.form.CDTextBox.set_value(this.getOwnerFrame().CD_CORP);		// 법인코드
        				this.cfCD_CORP.form.DSTextBox.set_value(this.getOwnerFrame().DS_CORP);		// 법인코드명
        				this.calFR_DT_TRADE.set_value(this.getOwnerFrame().DT_FROM);				// 차입기간
        				this.calTO_DT_TRADE.set_value(this.getOwnerFrame().DT_TO);					// 차입기간
        				this.cfNO_CHAIP.form.CDTextBox.set_value(this.getOwnerFrame().NO_CHAIP);	// 관리번호
        				this.cfNO_CHAIP.form.DSTextBox.set_value(this.getOwnerFrame().NM_CHAIP);	// 관리번호
        				this.cboTY_TRADE.set_index(0);												// 거래구분:전체
        			}

        			this.dsSearch.set_enableevent(true);

        			this.FormBtns.Select.click();
        		}

        	}
        }

        this.fnPopCallBack = function(svcID, val) {

        	// 변동정보등록
        	if (svcID.indexOf("DFC_CHAIPCHG") > -1) {
        		this.FormBtns.Select.click();
        	}

        // 	if (svcID.indexOf("DHA_ISSUESLIP") > -1) {
        // 		this.FormBtns.Select.click();
        // 	} 20200318 주석추가

        	if (val != false) {
        		var json = JSON.parse(val);

        		// 거래정보 일괄변경팝업 콜백

        		if (svcID.indexOf("DFC_DLG_CHAIP_PLAN_CHG") > -1) {
        			this.dsList.set_enableevent(false);

        			for (var i=0; i < this.dsList.rowcount; i++) {
        				// 선택된 대상만 변경
        				if (this.dsList.getColumn(i, "CHK") == 1) {
        					this.dsList.setColumn(i, this.ucFlag, "U");

        					if ( !this.gfnIsNull(json.TY_TRADE) ) {
        						this.dsList.setColumn(i, "TY_TRADE", json.TY_TRADE);	// 거래구분
        					}

        					if ( !this.gfnIsNull(json.DT_TRADE) ) {
        						this.dsList.setColumn(i, "DT_TRADE", json.DT_TRADE);		// 거래일자
        					}

        					if ( !this.gfnIsNull(json.AM_WONGEUM) ) {
        						this.dsList.setColumn(i, "AM_WONGEUM", json.AM_WONGEUM);	// 원금
        					}

        					if ( !this.gfnIsNull(json.RT_EZA) ) {
        						this.dsList.setColumn(i, "RT_EZA", json.RT_EZA);			// 이율
        					}

        					if ( !this.gfnIsNull(json.AM_EZA) ) {
        						this.dsList.setColumn(i, "AM_EZA", json.AM_EZA);			// 이자금액
        					}

        					if ( !this.gfnIsNull(json.FR_EZA) ) {
        						this.dsList.setColumn(i, "FR_EZA", json.FR_EZA);			// 이자기간(from)
        					}

        					if ( !this.gfnIsNull(json.TO_EZA) ) {
        						this.dsList.setColumn(i, "TO_EZA", json.TO_EZA);			// 이자기간(to)
        					}
        				}
        			}

        			this.gfnSetFormStatus(this, "U");
        			this.dsList.set_enableevent(true);
        		}

        		// 출금 전표발행팝업 콜백
        		if (svcID.indexOf("DFC_DLG_CHAIP_OUTSLIP") > -1) {
        			noAccount = "";
        			tyGubun = "";
        			cdBank = "";
        			noAccount = json.NO_ACCOUNT;
        			tyGubun = json.TY_GUBUN;
        			cdBank = json.CD_BANK;
        			this.fnAutoSlip("N");
        		}

        		// 전표연결
        		if (svcID.indexOf("DFC_DLG_LINKSLIP") > -1) {
        			this.fnLinkSlip(json.NO_SLIP);
        		}

        		// 입금 전표발행팝업 콜백
        		if (svcID.indexOf("DFC_DLG_CHAIP_INSLIP") > -1) {
        			noTrade = "";
        			noTrade = json.NO_TRADE;
        			this.fnAutoSlip("N");
        		}

        		//브랜치 전송
        		if(svcID.indexOf("DFB_DLG_BRANCH") > -1){
        			this.dsCms.clearData();

        			for(var i =0;i<this.dsList.rowcount;i++){
        				if(this.dsList.getColumn(i, "CHK") == 1){
        					var nrow = this.dsCms.addRow();

        					this.dsCms.setColumn(nrow, "SEQ_EXEC", this.dsList.getColumn(i, "NO_CHAIP"));
        					this.dsCms.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        					this.dsCms.setColumn(nrow, "GB_SEND", "CHAIP");

        					this.dsCms.setColumn(nrow, "NO_IN", json.NO_IN);
        					this.dsCms.setColumn(nrow, "TY_IN", json.TY_IN);
        					this.dsCms.setColumn(nrow, "CD_IN", json.CD_IN);
        					this.dsCms.setColumn(nrow, "CD_OWNER", json.CD_OWNER);
        					this.dsCms.setColumn(nrow, "NO_OUT", json.NO_OUT);
        					this.dsCms.setColumn(nrow, "TY_OUT", json.TY_OUT);
        					this.dsCms.setColumn(nrow, "CD_OUT", json.CD_OUT);

        					//신규 추가
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
        				this.dsAutoSlip.setColumn(nrow, "NO_CHAIP", this.dsList.getColumn(i, "NO_CHAIP"));
        				this.dsAutoSlip.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsAutoSlip.setColumn(nrow, "NO_ACCOUNT", this.gfnIsNull(noAccount) ? "" : noAccount); //20200407 계좌번호 추가
        				this.dsAutoSlip.setColumn(nrow, "TY_GUBUN", this.gfnIsNull(tyGubun) ? "" : tyGubun); //20200407
        				this.dsAutoSlip.setColumn(nrow, "CD_BANK", this.gfnIsNull(cdBank) ? "" : cdBank); //20200407
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
        		this.dsAutoSlip.setColumn(nrow, "NO_ACCOUNT", this.gfnIsNull(noAccount) ? "" : noAccount); //20200407 계좌번호 추가
        		this.dsAutoSlip.setColumn(nrow, "TY_GUBUN", this.gfnIsNull(tyGubun) ? "" : tyGubun); //20200407
        		this.dsAutoSlip.setColumn(nrow, "CD_BANK", this.gfnIsNull(cdBank) ? "" : cdBank); //20200407
        		this.dsAutoSlip.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}

        	if (this.dsAutoSlip.rowcount == 0) return;

        	var strSvcId    = "autoslip" + slipYn;
        	var strSvcType  = "save";
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

        /*
         * 전표연결
         */
        this.fnLinkSlip = function(slipNo) {

        	this.dsLinkSlip.clearData();

        	for (var i=0; i < this.dsList.rowcount; i++) {
        		if (this.dsList.getColumn(i, "CHK") == 1) {
        			var nrow = this.dsLinkSlip.addRow();
        			this.dsLinkSlip.setColumn(nrow, "NO_CHAIP", this.dsList.getColumn(i, "NO_CHAIP"));
        			this.dsLinkSlip.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        			this.dsLinkSlip.setColumn(nrow, "NO_SLIP", slipNo);
        			this.dsLinkSlip.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		}
        	}

        	if (this.dsLinkSlip.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "linkslip=dsLinkSlip";
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
        	case "cfNO_CHAIP":
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
        	case "cfNO_CHAIP":
        		this.fnSearchInit();
        		break;

        	default:
        	}
        	return true;
        }



        this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow) {
        	var cdCorp = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");

        	// 관리번호
        	if (id == "DFX_CFNO_CHAIP") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnIsNull(cdCorp) ? this.dsSearch.getColumn(0, "CD_CORP") : cdCorp);
        	}
        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	// 관리번호
        	if (id == "DFX_CFNO_CHAIP") {
        		if(arr.length > 0) {
        			this.dsList.setColumn(this.dsList.rowposition, "CD_CORP", arr[0]["CD_CORP1"]);
        			this.dsList.setColumn(this.dsList.rowposition, "DS_CORP", arr[0]["DS_CORP"]);
        			this.dsList.setColumn(this.dsList.rowposition, "DS_CHAIP", arr[0]["DS_CHAIP"]);
        			this.dsList.setColumn(this.dsList.rowposition, "CD_CHABANK", arr[0]["CD_CHABANK"]);
        			this.dsList.setColumn(this.dsList.rowposition, "DS_VENDOR", arr[0]["DS_VENDOR"]);
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

        // 변동정보등록
        this.fnChngInfoInsert = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;
        	var param = {};

        	param.CD_CORP = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        	param.DS_CORP = this.dsList.getColumn(this.dsList.rowposition, "DS_CORP");
        	//param.DT_FROM = this.dsList.getColumn(this.dsList.rowposition, "FR_CHAIP");
        	param.NO_CHAIP = this.dsList.getColumn(this.dsList.rowposition,"NO_CHAIP");
        	param.NM_CHAIP = this.dsList.getColumn(this.dsList.rowposition,"NM_CHAIP");
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DFC_CHAIPCHG", "fnPopCallBack", param, this.getOffsetWidth(), this.getOffsetHeight());
        }

        // 전표연결
        this.fnSlipConnect = function() {
        	var popId = "DFC_DLG_LINKSLIP";
        	if (!this.fnPopupValidate(popId)) {
        		return false;
        	}

        	var chkRow = this.dsList.findRow("CHK", 1);

        	var param = {};
        	param.CD_CORP = this.dsList.getColumn(chkRow, "CD_CORP");	// 법인코드
        	param.DT_TRADE = this.dsList.getColumn(chkRow, "DT_TRADE");	// 거래일자
        	var width = 450;
        	var height = 160;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, popId, "fnPopCallBack", param, width, height);
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
        				this.dsEzaCalc.setColumn(nrow, "NO_CHAIP", this.dsList.getColumn(i, "NO_CHAIP"));
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

        // 일괄정보변경
        this.fnBtchInfChng = function(obj,e) {
        	var popId = "DFC_DLG_CHAIP_PLAN_CHG";
        	if (!this.fnPopupValidate(popId)) {
        		return false;
        	}

        	var param = {};
        	//param.CD_CORP = this.ccfCD_CORP.form.CDTextBox.value;
        	//param.DS_CORP = this.ccfCD_CORP.form.DSTextBox.value;

        	var width = 425;
        	var height = 410;

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DFC_DLG_CHAIP_PLAN_CHG", "fnPopCallBack", param, width, height);
        }

        // 전표발행
        this.fnSlipPub = function(obj,e) {


        	var popId = "DFC_DLG_CHAIP_INSLIP";
        	if (!this.fnPopupValidate(popId)) {
        		return false;
        	}

        	var chaipCnt = this.dsList.findRowExpr("CHK == 1 && TY_TRADE == '차입'");
        	var eZaSangCnt = this.dsList.findRowExpr("CHK == 1 && (TY_TRADE == '이자' || TY_TRADE == '상환' || TY_TRADE == '상환(전환)' || TY_TRADE == '상환(대환-상환)' || TY_TRADE == '상환(대환)' || TY_TRADE == '상환(전환)'  || TY_TRADE == '상환(초과환불)' )");


        	var param = {};

        	if (chaipCnt >= 1) {
        		popId = "DFC_DLG_CHAIP_INSLIP";

        		var width = 430;
        		var height = 360;

        		param.AM_TRADE = this.dsList.getCaseSum("CHK == 1", "AM_TRADE");					// 차입금액
        		param.AM_EZA = this.dsList.getCaseSum("CHK == 1", "AM_EZA");						// 이자금액

        		var amCorp = this.dsList.getCaseSum("CHK == 1", "AM_CORP");							// 법인세
        		var amJumin = this.dsList.getCaseSum("CHK == 1", "AM_JUMIN");						// 주민세
        		param.AM_CORP_JUMIN = amCorp + amJumin;

        		param.AM_ETC = this.dsList.getCaseSum("CHK == 1", "AM_ETC");						// 부대비용

        		// 차입금액 - 이자금액 - 부대비용 + 법인세 + 주민세
        		param.AM_TOTAL = param.AM_TRADE - param.AM_EZA - param.AM_ETC + amCorp + amJumin;	// 입금예상금액
        		param.CD_CORP = this.dsList.getColumn(chaipCnt, "CD_CORP");					// 법인코드
        		param.NO_ACCOUNT_CHA = this.dsList.getColumn(chaipCnt, "NO_ACCOUNT_CHA");	// 차입계좌
        		param.DT_TRADE = this.dsList.getColumn(chaipCnt, "DT_TRADE");				// 거래일자
        	}
        	//if (eZaSangCnt != -1) {
        	else {
        		popId = "DFC_DLG_CHAIP_OUTSLIP";
        		var width = 430;
        		var height = 360;

        		param.AM_EZA = this.dsList.getCaseSum("CHK == 1", "AM_EZA");						// 이자금액

        		var amCorp = this.dsList.getCaseSum("CHK == 1", "AM_CORP");							// 법인세
        		var amJumin = this.dsList.getCaseSum("CHK == 1", "AM_JUMIN");						// 주민세
        		param.AM_CORP_JUMIN = amCorp + amJumin;

        		param.AM_ETC = this.dsList.getCaseSum("CHK == 1", "AM_ETC");						// 부대비용
        		param.AM_TRADE = this.dsList.getCaseSum("CHK == 1", "AM_TRADE");					// 상환금액

        		// 상환금액 + 이자금액 + 부대비용 - 법인세 - 주민세
        		param.AM_TOTAL = param.AM_TRADE + param.AM_EZA + param.AM_ETC - amCorp - amJumin;	// 출금예상금액
        		param.CD_CORP = this.dsList.getColumn(eZaSangCnt, "CD_CORP");						// 법인코드
        		param.NO_ACCOUNT = this.dsList.getColumn(this.dsList.rowposition, "NO_ACCOUNT");	//
        		param.DS_BANK = this.dsList.getColumn(this.dsList.rowposition, "DS_BANK");			//
        		param.TY_GUBUN = this.dsList.getColumn(this.dsList.rowposition, "TY_GUBUN");		//
        		param.CD_BANK = this.dsList.getColumn(this.dsList.rowposition, "CD_BANK");			//
        	}


        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, popId, "fnPopCallBack", param, width, height);

        }

        // 전표조회 및 전표취소 validation check
        this.fnSlipValidation = function() {
        	var chkCnt = this.dsList.getCaseCount("CHK == 1");
        	if (chkCnt == 0) {
        		return false;
        	}


        	for ( var i=0; i < this.dsList.rowcount; i++ ) {
        		if ( this.dsList.getColumn(i, "CHK") == 1 ) {
        			if ( this.gfnIsNull(this.dsList.getColumn(i, "NO_SLIP") )) {
        				this.gfnAlert("발행된 전표가 없습니다.");
        				return false;
        			}
        		}
        	}
        	return true;
        }

        // 전표조회
        this.fnSlipSelect = function(obj,e) {

        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
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

        	this.gfnConfirm("전표취소 처리 하시겠습니까?","fnSlipCncl_callback");
        }


        this.fnSlipCncl_callback = function(strId, val) {

        	if (val) {
        		this.dsAutoSlipx.clearData();

        		for (var i=0; i < this.dsList.rowcount; i++) {
        			if (this.dsList.getColumn(i, "CHK") == 1) {
        				var nrow = this.dsAutoSlipx.addRow();
        				this.dsAutoSlipx.setColumn(nrow, "NO_SLIP", this.dsList.getColumn(i, "NO_SLIP"));
        				this.dsAutoSlipx.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			}
        		}

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


        // 공통코드콤보
        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");
        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(0, "CD_TYPE", "Z1");

        	this.dsCombo2 = new Dataset();
        	this.dsCombo2.addColumn("CD_SYSTEM", "string");
        	this.dsCombo2.addColumn("CD_TYPE", "string");
        	this.dsCombo2.addRow();
        	this.dsCombo2.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo2.setColumn(0, "CD_TYPE", "CA");

        	this.dsCombo3 = new Dataset();
        	this.dsCombo3.addColumn("CD_SYSTEM", "string");
        	this.dsCombo3.addColumn("CD_TYPE", "string");
        	this.dsCombo3.addRow();
        	this.dsCombo3.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo3.setColumn(0, "CD_TYPE", "CB");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo combo2=dsCombo2 combo3=dsCombo3";
        	var outData     = "dsYN_SLIP=combo0 dsTY_PLAN=combo20 dsTY_TRADE=combo30";
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

        // this.dsList_oncolumnchanged = function(obj:nexacro.NormalDataset,e:nexacro.DSColChangeEventInfo)
        // {
        //
        // 	// 체크시 거래구분이 다르거나 거래구분이 없는 경우 체크
        // 	if (e.columnid == "CHK") {
        // 		this.dsList.set_enableevent(false);
        //
        // 		// 체크된 데이터중 거래구분 차입, 이자, 상환 건수
        // 		var chaipCnt = obj.getCaseCount("CHK == 1 && TY_TRADE == '차입'");
        // 		var ezaCnt = obj.getCaseCount("CHK == 1 && TY_TRADE == '이자'");
        // 		var sangCnt = obj.getCaseCount("CHK == 1 && TY_TRADE == '상환'");
        // 		var totalCnt = chaipCnt + ezaCnt + sangCnt;
        //
        // // 		trace("chaipCnt :: " + chaipCnt);
        // // 		trace("ezaCnt :: " + ezaCnt);
        // // 		trace("sangCnt :: " + sangCnt);
        // // 		trace("totalCnt :: " + totalCnt);
        //
        // 		// 총건수가 1보다 크고(다중선택) 차입, 이자, 상환 건수 모두 총건수보다 작으면 다른 거래구분을 선택한것으로 간주.
        // 		if ( totalCnt > 1 && (totalCnt != chaipCnt && totalCnt != ezaCnt && totalCnt != sangCnt) ) {
        // 			this.gfnAlert("거래구분은 하나의 종류만 선택 가능합니다.");
        // 			obj.setColumn(e.row, "CHK", 0);
        // 			this.dsList.set_enableevent(true);
        // 			return false;
        // 		}
        //
        // 		if ( this.dsList.findRowExpr("CHK == 1 && TY_TRADE == ''") != -1 ) {
        // 			this.gfnAlert("거래구분은 필수 입력 항목 입니다.");
        // 			obj.setColumn(e.row, "CHK", 0);
        // 			this.dxGrid.setCellPos(11);
        // 			this.dsList.set_enableevent(true);
        // 			return false;
        // 		}
        //
        // 		this.dsList.set_enableevent(true);
        // 	}
        // };

        this.divData_objGrid_oncellclick = function(obj,e)
        {
        	// chk
        // 	if (e.cell == 1) {
        // 		this.dsList.set_enableevent(false);
        //
        // 		// 체크된 데이터중 거래구분 차입, 이자, 상환 건수
        // 		var chaipCnt = this.dsList.getCaseCount("CHK == 1 && TY_TRADE == '차입'");
        // 		var ezaCnt = this.dsList.getCaseCount("CHK == 1 && TY_TRADE == '이자'");
        // 		var sangCnt = this.dsList.getCaseCount("CHK == 1 && TY_TRADE == '상환'");
        // 		var totalCnt = chaipCnt + ezaCnt + sangCnt;
        //
        // 		if (chaipCnt > 1) {
        // 			this.gfnAlert("거래구분[차입]은 한건만 선택 가능합니다.");
        // 			this.dsList.setColumn(e.row, "CHK", 0);
        // 			this.dsList.setColumn(e.row, this.ucFlag, "");
        // 			this.dsList.set_enableevent(true);
        // 			return false;
        // 		}
        //
        // 		// 총건수가 1보다 크고(다중선택) 차입, 이자, 상환 건수 모두 총건수보다 작으면 다른 거래구분을 선택한것으로 간주.
        // 		if ( totalCnt > 1 && (totalCnt != chaipCnt && totalCnt != ezaCnt && totalCnt != sangCnt) ) {
        // 			this.gfnAlert("거래구분은 하나의 종류만 선택 가능합니다.");
        // 			this.dsList.setColumn(e.row, "CHK", 0);
        // 			this.dsList.setColumn(e.row, this.ucFlag, "");
        // 			this.dsList.set_enableevent(true);
        // 			return false;
        // 		}
        //
        // 		if ( this.dsList.findRowExpr("CHK == 1 && TY_TRADE == ''") != -1 ) {
        // 			this.gfnAlert("거래구분은 필수 입력 항목 입니다.");
        // 			this.dsList.setColumn(e.row, "CHK", 0);
        // 			this.dsList.setColumn(e.row, this.ucFlag, "");
        // 			this.dxGrid.setCellPos(11);
        // 			this.dsList.set_enableevent(true);
        // 			return false;
        // 		}
        // 		//this.fnSetRowstatus();
        // 		this.dsList.set_enableevent(true);
        // 	}
        };

        this.fnGrid_AfterAllCheck = function(obj, cell, check)
        {
        // 	// chk
        // 	if (cell == 1) {
        // 		this.dsList.set_enableevent(false);
        //
        // 		// 체크된 데이터중 거래구분 차입, 이자, 상환 건수
        // 		var chaipCnt = this.dsList.getCaseCount("CHK == 1 && TY_TRADE == '차입'");
        // 		var ezaCnt = this.dsList.getCaseCount("CHK == 1 && TY_TRADE == '이자'");
        // 		var sangCnt = this.dsList.getCaseCount("CHK == 1 && TY_TRADE == '상환'");
        // 		var totalCnt = chaipCnt + ezaCnt + sangCnt;
        //
        // 		if (chaipCnt > 1) {
        // 			this.gfnAlert("거래구분[차입]은 한건만 선택 가능합니다.");
        // 			this.dxGrid.setCellProperty("head", cell, "text", 0);
        // 			for (var i=0; i < this.dsList.rowcount; i++) {
        // 				this.dsList.setColumn(i, "CHK", 0);
        // 				this.dsList.setColumn(i, this.ucFlag, "");
        // 			}
        //
        // 			this.dsList.set_enableevent(true);
        // 			return false;
        // 		}
        //
        // 		// 총건수가 1보다 크고(다중선택) 차입, 이자, 상환 건수 모두 총건수보다 작으면 다른 거래구분을 선택한것으로 간주.
        // 		if ( totalCnt > 1 && (totalCnt != chaipCnt && totalCnt != ezaCnt && totalCnt != sangCnt) ) {
        // 			this.gfnAlert("거래구분은 하나의 종류만 선택 가능합니다.");
        // 			this.dxGrid.setCellProperty("head", cell, "text", 0);
        // 			for (var i=0; i < this.dsList.rowcount; i++) {
        // 				this.dsList.setColumn(i, "CHK", 0);
        // 				this.dsList.setColumn(i, this.ucFlag, "");
        // 			}
        //
        //  			this.dsList.set_enableevent(true);
        // 			return false;
        // 		}
        //
        // 		if ( this.dsList.findRowExpr("CHK == 1 && TY_TRADE == ''") != -1 ) {
        // 			var fndRow = this.dsList.findRowExpr("CHK == 1 && TY_TRADE == ''");
        //
        //
        // 			this.gfnAlert("거래구분은 필수 입력 항목 입니다.");
        // 			this.dxGrid.setCellProperty("head", cell, "text", 0);
        // 			for (var i=0; i < this.dsList.rowcount; i++) {
        // 				this.dsList.setColumn(i, "CHK", 0);
        // 				this.dsList.setColumn(i, this.ucFlag, "");
        // 			}
        // 			this.dxGrid.setCellPos(11, fndRow);
        // 			this.dsList.set_enableevent(true);
        // 			return false;
        // 		}
        // 		//this.fnSetRowstatus();
        // 		this.dsList.set_enableevent(true);
        // 	}
        }

        this.fnSetRowstatus = function() {
        	var chk = this.dsList.getColumn(this.dsList.rowposition, "CHK");

        	if (chk == 0) {
        		this.dsList.setColumn(this.dsList.rowposition, this.ucFlag, "");
        	}
        }
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        };

        // 브랜치전송
        this.fnAmtIlboPrnt = function(obj,e) {
        	if(this.dsList.findRow("CHK",1) < 0){
        		this.gfnAlert("선택된 항목이 없습니다.");
        		return false;
        	}
        	var param = {};
        	param.CD_CORP = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));	// 법인코드

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

        			this.dsCms.setColumn(nrow, "SEQ_EXEC", this.dsList.getColumn(i, "NO_CHAIP"));
        			this.dsCms.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        			this.dsCms.setColumn(nrow, "GB_SEND", "CHAIP");
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
        			this.dsCms.setColumn(nrow, "SEQ_EXEC", this.dsList.getColumn(i, "NO_CHAIP"));
        			this.dsCms.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        			this.dsCms.setColumn(nrow, "GB_SEND", "OFFCHAIP");
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.calFR_DT_TRADE.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.calTO_DT_TRADE.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.cboYN_SLIP.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.cboTY_PLAN.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.cboTY_TRADE.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divData.form.objGrid.addEventHandler("oncellclick",this.divData_objGrid_oncellclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DFC_CHAIP_PLAN - 외화수정.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
