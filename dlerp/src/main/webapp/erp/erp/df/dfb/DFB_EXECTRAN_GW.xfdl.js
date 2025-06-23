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
            this.set_titletext("예금간 대체 계획 수립");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DFBPR_EXECPLAN_SELECT</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DFBPR_EXECPLAN1_SELECT</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DFBPR_EXECPLAN2_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DFBPR_EXECPLAN_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DFBPR_EXECPLAN_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DFBPR_EXECPLAN_DELETE</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DFBPR_EXECPLAN_CREATE</Col></Row><Row><Col id=\"TARGET\">cms</Col><Col id=\"SP\">DFBPR_EXECPLAN_CMS</Col></Row><Row><Col id=\"TARGET\">branch</Col><Col id=\"SP\">DFBPR_BRANCH_INSERT</Col></Row><Row><Col id=\"TARGET\">bracnchcancel</Col><Col id=\"SP\">DFBPR_BRANCH_DELETE</Col></Row><Row><Col id=\"TARGET\">change</Col><Col id=\"SP\">DFBPR_EXECPLAN2_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_INTOUT", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PLAN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_MINUS\" type=\"STRING\" size=\"256\"/><Column id=\"CT_PLAN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PLAN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_MINUS", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">전체</Col><Col id=\"CD_CODE\"/></Row><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">Y</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRetrunCp", this);
            obj._setContents("<ColumnInfo><Column id=\"CT_PLAN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRetrunCpI", this);
            obj._setContents("<ColumnInfo><Column id=\"CT_PLAN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRetrunCpU", this);
            obj._setContents("<ColumnInfo><Column id=\"CT_PLAN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRetrunCpD", this);
            obj._setContents("<ColumnInfo><Column id=\"CT_PLAN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfCD_CORP","staCD_CORP:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","cfCD_CORP:0.0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("집행일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_PLAN","sta00:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","0","staCD_CORP:10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfNO_ACCOUNT","sta01:0.0","staCD_CORP:10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("110");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","cfNO_ACCOUNT:0.0","staCD_CORP:10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("생성차수");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfCFPLAN","sta02:0.0","staCD_CORP:10.0","199","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("60");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta03","cfCFPLAN:0.0","staCD_CORP:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("과부족여부");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_MINUS","sta03:0.0","staCD_CORP:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_MINUS");
            obj.set_visible("false");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:5",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","55.47%","5","5",null,null,"0",null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divSplitter2","0","57.99%",null,"5","divSplitter:5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter2:5",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","20",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("sta00","0","0",null,"22","0",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("1");
            obj.set_text("이체계획");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","5",null,null,"divSplitter:5","divSplitter2:5",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","0","0",null,"22","0",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("계좌별 예상 잔액");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Grid("objGrid1","0","20",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","0","0",null,"22","280",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("출금승인내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Grid("objGrid2","0","20",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta03",null,"-2","50","18","196",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("2");
            obj.set_text("변경차수");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edt00",null,"1","95","22","95",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_inputtype("number");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btn00",null,"1","84","22","3",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("차수변경");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.calDT_PLAN","value","dsSearch","DT_PLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cfNO_ACCOUNT.form.CDTextBox","value","dsSearch","NO_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboYN_MINUS","value","dsSearch","YN_MINUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cfCFPLAN.form.CDTextBox","value","dsSearch","CT_PLAN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DFB_EXECTRAN_GW.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        var ct_plan_no = "";

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
        //   	this.FormBtns.Add.set_enable(false);
        //   	this.FormBtns.Save.set_enable(false);
        //   	this.FormBtns.Del.set_enable(false);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnDataCreat = this.gfnFormButtonAdd("btnDataCreat", "fnDataCreat", "자료생성");
        	this.btnUPloadExecl = this.gfnFormButtonAdd("btnUPloadExecl", "fnUPloadExecl", "엑셀업로드");
        	this.btnElctrncPmntUp = this.gfnFormButtonAdd("btnElctrncPmntUp", "fnElctrncPmntUp", "전자결재상신");
        	this.btnElctrncPmntSrch = this.gfnFormButtonAdd("btnElctrncPmntSrch", "fnElctrncPmntSrch", "전자결재조회");
        	this.btnAmtIlboPrnt = this.gfnFormButtonAdd("btnAmtIlboPrnt", "fnAmtIlboPrnt", "브랜치전송");
        	this.btnBranchCancel = this.gfnFormButtonAdd("btnBranchCancel", "fnBranchCancel", "전송전삭제");
        	this.btnOfflineExec = this.gfnFormButtonAdd("btnOfflineExec", "fnOfflineExec", "오프라인처리");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	// 조회조건
        	this.cfCD_CORP  = this.divSearch.form.cfCD_CORP;	// 법인코드
        	this.calDT_PLAN = this.divSearch.form.calDT_PLAN;	// 집행일자
        	this.cfNO_ACCOUNT = this.divSearch.form.cfNO_ACCOUNT;	// 계좌번호
        	this.cboYN_MINUS = this.divSearch.form.cboYN_MINUS;	// 과부족여부
            this.cfCFPLAN = this.divSearch.form.cfCFPLAN;       // 생성차수 2021.12.15

        	this.dxGrid = this.divData.form.divDataBottom.form.objGrid;			// 그리드(이체계획)
        	this.dxGrid1 = this.divData.form.divDataTop.form.objGrid1;			// 그리드(계좌별예상잔액)
        	this.dxGrid2 = this.divData.form.divDataRight.form.objGrid2;		// 그리드(출금승인내역)

        	this.grSearch = this.FormInfo.GR_SEARCH;			// 권한?
        	this.cdGroup = this.gfnIsNull(this.AuthClient.CD_GROUP) ? "" : this.AuthClient.CD_GROUP;			// 그룹코드
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.cfCD_CORP.CodeFindName = "DZX_CFCORP";
        	this.cfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.cfNO_ACCOUNT.CodeFindName = "DFX_CFNO_ACCOUNT";
        	this.cfNO_ACCOUNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfNO_ACCOUNT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.cfCFPLAN.CodeFindName = "DFX_CFPLAN";
        	this.cfCFPLAN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCFPLAN.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFB_EXECPLAN");		// 이체계획
        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DF", "DFB_EXECPLAN1");	// 계좌별예상잔액
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DF", "DFB_EXECPLAN2");	// 출금승인내역

        	// 그리드 코드파인드
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";


        	// 법인코드 init
        	if (this.gfnIsNull(this.cfCD_CORP.form.CDTextBox.value)) {
        		this.cfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.cfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}

        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "DT_PLAN", today);


        	// 권한체크
        	if (nexacro.toNumber(this.grSearch) >= 2) {
        		this.cfCD_CORP.set_enable(false);
        	}

        	this.cboYN_MINUS.set_index(0);

        	// 법인코드 포커스
        	this.cfCD_CORP.form.CDTextBox.setFocus();

        	this.btnElctrncPmntUp.set_enable(false)
        	this.btnElctrncPmntSrch.set_enable(false)
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("DT_PLAN", "string");
        	this.dsSelect.addColumn("NO_ACCOUNT", "string");
        	this.dsSelect.addColumn("YN_MINUS", "string");    // 과부족여부
        	this.dsSelect.addColumn("CT_PLAN", "string");     // 생성차수 2021.12.15

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("DT_PLAN", "string");
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("NO_IN", "string");
        	this.dsInsert.addColumn("TY_IN", "string");
        	this.dsInsert.addColumn("CD_INBANK", "string");
        	this.dsInsert.addColumn("CD_INSIDEBANK", "string");
        	this.dsInsert.addColumn("AM_IN", "bigdecimal");
        	this.dsInsert.addColumn("TY_PLAN", "string");
        	this.dsInsert.addColumn("NO_OUT", "string");
        	this.dsInsert.addColumn("TY_OUT", "string");
        	this.dsInsert.addColumn("CD_OUTBANK", "string");
        	this.dsInsert.addColumn("CD_OUTSIDEBANK", "string");
        	this.dsInsert.addColumn("RM_BIGO", "string");
        	this.dsInsert.addColumn("ID_USER", "string");
        	this.dsInsert.addColumn("CT_PLAN", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("DT_PLAN", "string");
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("NO_IN", "string");
        	this.dsUpdate.addColumn("TY_IN", "string");
        	this.dsUpdate.addColumn("CD_INBANK", "string");
        	this.dsUpdate.addColumn("CD_INSIDEBANK", "string");
        	this.dsUpdate.addColumn("AM_IN", "bigdecimal");
        	this.dsUpdate.addColumn("TY_PLAN", "string");
        	this.dsUpdate.addColumn("NO_OUT", "string");
        	this.dsUpdate.addColumn("TY_OUT", "string");
        	this.dsUpdate.addColumn("CD_OUTBANK", "string");
        	this.dsUpdate.addColumn("CD_OUTSIDEBANK", "string");
        	this.dsUpdate.addColumn("RM_BIGO", "string");
        	this.dsUpdate.addColumn("SN_PLAN", "bigdecimal");
        	this.dsUpdate.addColumn("ID_USER", "string");
        	this.dsUpdate.addColumn("CT_PLAN", "string");


        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("DT_PLAN", "string");
        	this.dsDelete.addColumn("CD_CORP", "string");
        	this.dsDelete.addColumn("SN_PLAN", "bigdecimal");
        	this.dsDelete.addColumn("ID_USER", "string");
        	this.dsDelete.addColumn("CT_PLAN", "string");

        	this.dsCms = new Dataset();
        	this.dsCms.addColumn("SEQ_EXEC", "bigdecimal");
        	this.dsCms.addColumn("GB_SEND", "string");
        	this.dsCms.addColumn("ID_USER", "string");

        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("CD_CORP", "string");
        	this.dsCreate.addColumn("DT_PLAN", "string");
        	this.dsCreate.addColumn("ID_USER", "string");
        	this.dsCreate.addColumn("CT_PLAN", "string");

        	this.dsBranchCancel = new Dataset();
        	this.dsBranchCancel.addColumn("SEQ_EXEC", "bigdecimal");
        	this.dsBranchCancel.addColumn("ID_USER", "string");
        	this.dsBranchCancel.addColumn("GB_SEND", "string");

        	this.dsChange = new Dataset();
        	this.dsChange.addColumn("SN_PLAN", "string");
        	this.dsChange.addColumn("CT_PLAN", "string");
        	this.dsChange.addColumn("CD_CORP", "string");
        	this.dsChange.addColumn("DT_PLAN", "string");
        	this.dsChange.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid1);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "DT_PLAN", this.dsSearch.getColumn(0, "DT_PLAN"));
        	this.dsSelect.setColumn(0, "NO_ACCOUNT", this.dsSearch.getColumn(0, "NO_ACCOUNT"));
        	this.dsSelect.setColumn(0, "YN_MINUS", this.dsSearch.getColumn(0, "YN_MINUS"));
        	this.dsSelect.setColumn(0, "CT_PLAN", this.dsSearch.getColumn(0, "CT_PLAN"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select1=dsSelect select=dsSelect select2=dsSelect";
        	var outData     = "dsList1=select10 dsList=select0 dsList2=select20";
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
        	var nrow = this.gfnGridAdd(this.dxGrid);
        	this.dsList.set_enableevent(false);

        	this.dsList.setColumn(nrow, "CD_CORP", this.dsList1.getColumn(this.dsList1.rowposition, "CD_CORP"));				// 법인코드
        	this.dsList.setColumn(nrow, "DS_CORP", this.dsList1.getColumn(this.dsList1.rowposition, "DS_CORP"));				// 법인코드
        	this.dsList.setColumn(nrow, "NO_IN", this.dsList1.getColumn(this.dsList1.rowposition, "NO_IN"));					// 입금계좌
        	this.dsList.setColumn(nrow, "TY_IN", this.dsList1.getColumn(this.dsList1.rowposition, "TY_IN"));					// 입금계좌구분
        	this.dsList.setColumn(nrow, "CD_INBANK", this.dsList1.getColumn(this.dsList1.rowposition, "CD_INBANK"));			// 입금은행
        	this.dsList.setColumn(nrow, "DS_INBANK", this.dsList1.getColumn(this.dsList1.rowposition, "DS_BANK"));				// 입금은행명
        	this.dsList.setColumn(nrow, "CD_INSIDEBANK", this.dsList1.getColumn(this.dsList1.rowposition, "CD_INSIDEBANK"));	// 입금계좌거래처
        	this.dsList.setColumn(nrow, "DS_INGUBUN", this.dsList1.getColumn(this.dsList1.rowposition, "DS_GUBUN"));			// 구분
        	this.dsList.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);    												// 사용자

        	this.dsList.set_enableevent(true);

        	this.dsList.set_rowposition(nrow);
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
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	if (this.gfnIsNull(this.cfCFPLAN.form.CDTextBox.value)){
        	    this.alert("생성차수를 입력하세요.")
        		return;
        	}

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "DT_PLAN", this.calDT_PLAN.value);
        				this.dsInsert.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsInsert.setColumn(nrow, "NO_IN", this.dsList.getColumn(i, "NO_IN"));
        				this.dsInsert.setColumn(nrow, "TY_IN", this.dsList.getColumn(i, "TY_IN"));
        				this.dsInsert.setColumn(nrow, "CD_INBANK", this.dsList.getColumn(i, "CD_INBANK"));
        				this.dsInsert.setColumn(nrow, "CD_INSIDEBANK", this.dsList.getColumn(i, "CD_INSIDEBANK"));
        				this.dsInsert.setColumn(nrow, "AM_IN", this.dsList.getColumn(i, "AM_IN"));
        				this.dsInsert.setColumn(nrow, "TY_PLAN", this.dsList.getColumn(i, "TY_PLAN"));
        				this.dsInsert.setColumn(nrow, "NO_OUT", this.dsList.getColumn(i, "NO_OUT"));
        				this.dsInsert.setColumn(nrow, "TY_OUT", this.dsList.getColumn(i, "TY_OUT"));
        				this.dsInsert.setColumn(nrow, "CD_OUTBANK", this.dsList.getColumn(i, "CD_OUTBANK"));
        				this.dsInsert.setColumn(nrow, "CD_OUTSIDEBANK", this.dsList.getColumn(i, "CD_OUTSIDEBANK"));
        				this.dsInsert.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsInsert.setColumn(nrow, "ID_USER", this.dsList.getColumn(i, "ID_USER"));
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "DT_PLAN", this.calDT_PLAN.value);
        				this.dsUpdate.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsUpdate.setColumn(nrow, "NO_IN", this.dsList.getColumn(i, "NO_IN"));
        				this.dsUpdate.setColumn(nrow, "TY_IN", this.dsList.getColumn(i, "TY_IN"));
        				this.dsUpdate.setColumn(nrow, "CD_INBANK", this.dsList.getColumn(i, "CD_INBANK"));
        				this.dsUpdate.setColumn(nrow, "CD_INSIDEBANK", this.dsList.getColumn(i, "CD_INSIDEBANK"));
        				this.dsUpdate.setColumn(nrow, "AM_IN", this.dsList.getColumn(i, "AM_IN"));
        				this.dsUpdate.setColumn(nrow, "TY_PLAN", this.dsList.getColumn(i, "TY_PLAN"));
        				this.dsUpdate.setColumn(nrow, "NO_OUT", this.dsList.getColumn(i, "NO_OUT"));
        				this.dsUpdate.setColumn(nrow, "TY_OUT", this.dsList.getColumn(i, "TY_OUT"));
        				this.dsUpdate.setColumn(nrow, "CD_OUTBANK", this.dsList.getColumn(i, "CD_OUTBANK"));
        				this.dsUpdate.setColumn(nrow, "CD_OUTSIDEBANK", this.dsList.getColumn(i, "CD_OUTSIDEBANK"));
        				this.dsUpdate.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsUpdate.setColumn(nrow, "SN_PLAN", this.dsList.getColumn(i, "SN_PLAN"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "DT_PLAN", this.calDT_PLAN.value);
        				this.dsDelete.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsDelete.setColumn(nrow, "SN_PLAN", this.dsList.getColumn(i, "SN_PLAN"));
        				this.dsDelete.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
        	var outData     = "dsRetrunCpI=insert dsRetrunCpU=update dsRetrunCpD=delete";
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

        	if (this.gfnIsNull(this.calDT_PLAN.value)) {
        		this.gfnAlert("집행일자를 입력 하세요.");
        		this.calDT_PLAN.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.cfCFPLAN.form.CDTextBox.value)) {
        		this.gfnAlert("생성차수를 입력 하세요.");
        		this.cfCFPLAN.setFocus();
        		return false;
        	}
        	return true;
        };

        /*
         *	팝업 Validate
         */

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid1);
        		this.gfnGridAfterSelect(this.dxGrid);
        	} else if (svcID == "selectDtl") {
        		this.gfnGridAfterSelect(this.dxGrid2);
        		if (errorCode == 0) {

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        		    if(!this.gfnIsNull(this.dsRetrunCpI.getColumn(0, "CT_PLAN"))){
        			   this.dsSearch.setColumn(0, "CT_PLAN",this.dsRetrunCpI.getColumn(0, "CT_PLAN"));
        			   this.cfCFPLAN.form.fnCodeFindLoad();
        			   this.FormBtns.Select.click();
        			   return;
        			}
        		    if(!this.gfnIsNull(this.dsRetrunCpU.getColumn(0, "CT_PLAN"))){
        			   this.dsSearch.setColumn(0, "CT_PLAN",this.dsRetrunCpU.getColumn(0, "CT_PLAN"));
        			   this.cfCFPLAN.form.fnCodeFindLoad();
        			   this.FormBtns.Select.click();
        			   return;
        			}
        			if(!this.gfnIsNull(this.dsRetrunCpD.getColumn(0, "CT_PLAN"))){
        			   this.dsSearch.setColumn(0, "CT_PLAN",this.dsRetrunCpD.getColumn(0, "CT_PLAN"));
        			   this.cfCFPLAN.form.fnCodeFindLoad();
        			   this.FormBtns.Select.click();
        			   return;
        			}

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	// 자료생성
        	} else if (svcID == "create") {
        		this.gfnAlert("정상적으로 처리되었습니다.", "","dataCreate", "fnMsgCallback");

        	// cms
        	} else if (svcID == "cms") {
        		this.gfnAlert("정상적으로 처리되었습니다.", "","cms", "fnMsgCallback");
        	} else if(svcID == "combo") {

        	}else if(svcID == "change") {
        		this.gfnAlert("정상적으로 처리되었습니다.", "","change", "fnMsgCallback");
        	}
        }

        this.fnMsgCallback = function(strId, strVal) {
        	switch(strId) {
        		case "dataCreate":
        		    if(!this.gfnIsNull(this.dsRetrunCp.getColumn(0, "CT_PLAN"))){
        			   this.dsSearch.setColumn(0, "CT_PLAN",this.dsRetrunCp.getColumn(0, "CT_PLAN"));
        			   this.cfCFPLAN.form.fnCodeFindLoad();
        			}
        		case "cms":
        			this.FormBtns.Select.click();
        		case "change":
        			this.divData.form.edt00.set_value();
        			this.FormBtns.Select.click();
        		break;
        	}
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

        	// 계좌번호(조회조건)
        	case "cfNO_ACCOUNT":
        		dsUserParam.setColumn(nrow, "GUBUN", "MAIN");
        		dsUserParam.setColumn(nrow, "CD_CORP", (this.gfnIsNull(cdCorp) ? "" : cdCorp));
        		break;

        	// 생성차수(조회조건) 2021.12.15
        	case "cfCFPLAN":
        		dsUserParam.setColumn(nrow, "DT_PLAN", this.calDT_PLAN.value);
        		dsUserParam.setColumn(nrow, "CD_CORP", (this.gfnIsNull(cdCorp) ? "" : cdCorp));
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
        		break;
        	// 계좌번호(조회조건)
        	case "cfNO_ACCOUNT":
        		break;
        	// 생성차수(조회조건) 2021.12.15
        	case "cfCFPLAN":

        	    var YN_EAPPR = arr[0]["YN_EAPPR"];
        	    var YN_ESRCH = arr[0]["YN_ESRCH"];

        	    this.ct_plan_no = arr[0]["NO_APPR"];

        		if(YN_EAPPR == "Y") this.btnElctrncPmntUp.set_enable(true);
        		else this.btnElctrncPmntUp.set_enable(false);

        		if(YN_ESRCH == "Y") this.btnElctrncPmntSrch.set_enable(true);
        		else this.btnElctrncPmntSrch.set_enable(false);

        		break;

        	default:
        	}
        	return true;



        }




        this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow) {
        	var cdCorp = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");

        	// 계좌번호
        	if (id == "DFX_CFNO_ACCOUNT") {
        		dsUserParam.setColumn(nrow, "GUBUN", "MAIN");
        		dsUserParam.setColumn(nrow, "CD_CORP", (this.gfnIsNull(cdCorp) ? "" : cdCorp));
        	}

        	if (id == "DFX_CFNO_ACCOUNT1") {
        		dsUserParam.setColumn(nrow, "GUBUN", "MAIN");
        		dsUserParam.setColumn(nrow, "CD_CORP", (this.gfnIsNull(cdCorp) ? "" : cdCorp));
        	}

        	// 생성차수 2021.12.15
        	if (id == "cfCFPLAN") {
        		dsUserParam.setColumn(nrow, "DT_PLAN");
        		dsUserParam.setColumn(nrow, "CD_CORP", (this.gfnIsNull(cdCorp) ? "" : cdCorp));
        	}

        	return true;

        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if (id == "DFX_CFCORP") {
        		this.dsList.setColumn(this.dsList.rowposition, "NO_IN", "");
        		this.dsList.setColumn(this.dsList.rowposition, "TY_IN", "");
        		this.dsList.setColumn(this.dsList.rowposition, "CD_INBANK", "");
        		this.dsList.setColumn(this.dsList.rowposition, "DS_INBANK", "");
        		this.dsList.setColumn(this.dsList.rowposition, "CD_INSIDEBANK", "");

        		this.dsList.setColumn(this.dsList.rowposition, "NO_OUT", "");
        		this.dsList.setColumn(this.dsList.rowposition, "TY_OUT", "");
        		this.dsList.setColumn(this.dsList.rowposition, "CD_OUTBANK", "");
        		this.dsList.setColumn(this.dsList.rowposition, "DS_OUTBANK", "");
        		this.dsList.setColumn(this.dsList.rowposition, "CD_OUTSIDEBANK", "");
        	}

        	if (id == "DFX_CFNO_ACCOUNT") {
        		if (arr.length > 0) {
        			trace("NO_ACCOUNT :: " + arr[0]["NO_ACCOUNT"]);
        			trace("TY_GUBUN :: " + arr[0]["TY_GUBUN"]);
        			trace("CD_BANK :: " + arr[0]["CD_BANK"]);
        			trace("DS_BANK :: " + arr[0]["DS_BANK"]);
        			trace("CD_MANAGEBANK :: " + arr[0]["CD_MANAGEBANK"]);
        		}
        	}

        	if (id == "DFX_CFNO_ACCOUNT1") {
        	}

        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

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

        // 자료생성
        this.fnDataCreat = function(obj,e) {

        	this.dsCreate.clearData();

        	var nrow = this.dsCreate.addRow();

        	this.dsCreate.setColumn(nrow, "CD_CORP", this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));	// 법인코드
        	this.dsCreate.setColumn(nrow, "DT_PLAN", this.calDT_PLAN.value);										// 집행일자
        	this.dsCreate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);                                      // 사용자
        	this.dsCreate.setColumn(nrow, "CT_PLAN", this.dsList.getColumn(this.dsList.rowposition, "CT_PLAN"));	// 생성차수

        	if (this.dsCreate.rowcount == 0) return;

        	var strSvcId    = "create";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "create=dsCreate";
        	var outData     = "dsRetrunCp=create";
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

        // 전자결재상신
        this.fnElctrncPmntUp = function(obj,e) {

        // 	if(!this.gfnGridIsRow(this.dxGrid)) return;
        //
        //
        // 	var nICnt = this.dsList.findRow(this.ucFlag,"I");
        // 	var nUCnt = this.dsList.findRow(this.ucFlag,"U");
        // 	var nDCnt = this.dsList.findRow(this.ucFlag,"D");
        //
        // 	if( nICnt > -1|| nUCnt > -1 || nDCnt > -1) {
        // 		this.gfnAlert("저장 후 처리하세요.", "");
        // 		return;
        // 	}

            var strFormId = "DSMEC_PAYMENT_PLAN";
        	var strSubject = "예금간 대체 계획 상신";
        	strSubject = encodeURI(strSubject);
        	var url = this.gfnGetConfig("DZ" , "GW_APROVAL_URL");
        	url = url + "approval/legacy/goFormLink.do?legacyFormID=" + strFormId;
        	url += "&mode=DRAFT";
        	url += "&ID_USER=" + this.AuthClient.ID_USER;
        	url += "&DS_KEY1=" + this.dsSearch.getColumn(0, "DT_PLAN");	// 집행일자
        	url += "&DS_KEY2=" + this.dsSearch.getColumn(0, "CD_CORP");	// 법인코드
        	url += "&DS_KEY3=" + this.dsSearch.getColumn(0, "CT_PLAN"); // 생성차수 2021.12.15
        	url += "&DS_KEY4="
        	url += "&DS_KEY5="
        	url += "&RTN_TITLE=" + strSubject;

        	var new_window = window.open(url,"_blank", "width=790,height=1000,menubar=no,scrollbars=no,resizable=no,status=no");
        	new_window.onbeforeunload = this.fnAprvDialogCallback();

        }

         this.fnAprvDialogCallback = function(svcID, value) {
        	// 리턴값
        	//if(value){
        		// 결재완료, 결재취소, 결재상신 후에는 재조회를 한다
        		this.FormBtns.Select.click();
        	//}
        };

        // 전자결재조회
        this.fnElctrncPmntSrch = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var nICnt = this.dsList.findRow(this.ucFlag,"I");
        	var nUCnt = this.dsList.findRow(this.ucFlag,"U");
        	var nDCnt = this.dsList.findRow(this.ucFlag,"D");

        	if( nICnt > -1|| nUCnt > -1 || nDCnt > -1) {
        		this.gfnAlert("저장 후 처리하세요.", "");
        		return;
        	}

        	if(this.gfnIsNull(this.ct_plan_no)){
        		this.gfnAlert("결재번호 정보가 존재하지 않습니다.");
        		return;
        	}

            var url = this.gfnGetConfig("DZ" , "GW_APROVAL_URL");
        	url = url+"approval/legacy/goFormLink.do?";
        	url +="mode=complete";
        	url +="&ID_USER=" + this.AuthClient.ID_USER;
        	url +="&fiid=" + this.ct_plan_no;
        	var new_window = window.open(url,"_blank", "width=790,height=1000,menubar=no,scrollbars=no,resizable=no,status=no");
        	new_window.onbeforeunload = this.fnAprvDialogCallback();

        }

        // 브랜치전송
        this.fnAmtIlboPrnt = function(obj,e) {

        	if ( this.gfnIsNull(this.calDT_PLAN.value) ) {
        		this.gfnAlert("브랜치전송 시 집행일자는 필수입력 입니다.");
        		this.calDT_PLAN.setFocus();
        		return false;
        	}
        	if(this.dsList.findRow("CHK",1) < 0){
        		this.gfnAlert("선택된 항목이 없습니다.");
        		return false;
        	}
        	this.dsCms.clearData();
        	for(var i =0;i<this.dsList.rowcount;i++){
        		if(this.dsList.getColumn(i, "CHK") == 1){
        			var nrow = this.dsCms.addRow();

        			this.dsCms.setColumn(nrow, "SEQ_EXEC", this.dsList.getColumn(i, "SN_PLAN"));
        			this.dsCms.setColumn(nrow, "GB_SEND", this.calDT_PLAN.value);
        			this.dsCms.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		}
        	}

        	if (this.dsCms.rowcount == 0) return;

        	var strSvcId    = "cms";
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

        // 전송전삭제
        this.fnBranchCancel = function(obj,e) {

        	if(this.dsList.findRow("CHK",1) < 0){
        		this.gfnAlert("선택된 항목이 없습니다.");
        		return false;
        	}

        	this.dsBranchCancel.clearData();
        	for(var i =0;i<this.dsList.rowcount;i++){
        		if(this.dsList.getColumn(i, "CHK") == 1){
        			var nrow = this.dsBranchCancel.addRow();

        			this.dsBranchCancel.setColumn(nrow, "SEQ_EXEC", this.dsList.getColumn(i, "SN_PLAN"));
        			this.dsBranchCancel.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			this.dsBranchCancel.setColumn(nrow, "GB_SEND", this.dsSearch.getColumn(0,"DT_PLAN"));
        		}
        	}

        	if (this.dsBranchCancel.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "bracnchcancel=dsBranchCancel";
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

        			this.dsCms.setColumn(nrow, "SEQ_EXEC", this.dsList.getColumn(i, "SN_PLAN"));
        			this.dsCms.setColumn(nrow, "GB_SEND", "OFFDECH");
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

        // 공통코드콤보
        this.fnSetCombo = function() {

        };


        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGrid1);
        		this.gfnGridClear(this.dxGrid2);
        		if(e.columnid == "CD_CORP" || e.columnid == "DT_PLAN"){
        			this.dsSearch.setColumn(0, "CT_PLAN", "");
        			this.cfCFPLAN.form.DSTextBox.set_value("");
        		}
        		if(e.columnid == "CT_PLAN"){
        			this.btnElctrncPmntUp.set_enable(false)
        			this.btnElctrncPmntSrch.set_enable(false)
        		}
        	}
        };


        this.divData_cboTY_INTOUT_onitemchanged = function(obj,e)
        {

        	this.fnSetBtn(e.postvalue);

        	this.FormBtns.Select.click();
        };

        // 버튼설정(입력,삭제)
        this.fnSetBtn = function(cboVal) {
        	if (cboVal == "NO") {
        		this.FormBtns.Add.set_enable(true);
        		this.FormBtns.Del.set_enable(true);
        	} else {
        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Del.set_enable(false);
        	}
        }

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };

        this.divData_divSplitter2_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter2");
        	return true;
        };

        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_left(e.clientx);
        		this.divData.form.resetScroll();
        	}

        	if(e.userdata == "splitter2") {
        		this.divData.form.divSplitter2.set_top(e.clienty);
        		this.divData.form.resetScroll();
        	}
        };


        // 엑셀 업로드 버튼 이벤트
        this.fnUPloadExecl = function(obj,e) {
        	this.dsList.clearData();
        	this.gfnExcelImport("dsList","sheet1","A2","fnExcelImportCallback","import",this);
        }


        /*
         *	엑셀업로드 Callback
         */
        this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet) {

        	// 다중 시트 처리시 양식의 해당 시트여부를 체크하고자 할땐 dsSheet 시트명 체크
        // 	if (dsSheet.rowcount > 1) {
        // 		trace(dsSheet.getColumn(1, "sheetname"));
        // 	}

        	// 엑셀 양식과 그리드 컬럼이 그대로 일치 하는경우 아래와 같이 처리.
        	// 아닌경우는 이부분 주석처리
        	if (dsOut.rowcount == 0)  {
        		this.gfnAlert("엑셀파일에 내용이 없습니다.");
        		return false;
        	}

        	for (var i=0; i< this.dsList.getColCount(); i++)
        	{
        		sColumnId = "Column"+i;

        		var sColumnNm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, i);
        		if (sColumnNm != "" && sColumnId != sColumnNm)
        		{
        			dsOut.updateColID(sColumnId, sColumnNm);
        		}
        	}

        	// 양식이 일치하고 엑셀내역을 기존데이터에 Insert하지 않고
        	// 엑셀내역 그대로 그리드 반영할 시 copyData
        	//this.dsList.copyData(dsOut);

        	this.dsList.set_enableevent(false);
        	for (var i=0; i< dsOut.rowcount; i++) {
        		for (var j=0; j< dsOut.colcount; j++) {
        			if (!this.gfnIsNull(dsOut.getColumn(i,j)) ){
        				dsOut.setColumn(i,j,nexacro.trim(dsOut.getColumn(i,j)));
        				//var strColID = dsOut.getColID( j );
        				//if ( strColID == "DT_TRADE" || strColID == "DT_EXPIRY" ){
        				//	dsOut.setColumn(i,j,dsOut.getColumn(i,j).replace(/\-/g,''));
        				//}
        			}
        		}
        		var nrow = this.dsList.addRow();
        		this.dsList.setColumn(nrow, this.ucFlag, "I");

        		// 양식이 일치하는 경우 copyRow
        		this.dsList.copyRow(nrow, dsOut, i);

        	}

        	this.dsList.set_enableevent(true);
        	this.gfnSetFormStatus(this, "I");
        };

        this.divData_btn00_onclick = function(obj,e)
        {
        	if (this.gfnIsNull(this.divData.form.edt00.text)){
        	    this.alert("변경차수를 입력하세요.")
        		return;
        	}
        	if(this.dsList2.findRow("CHK",1) < 0){
        		this.gfnAlert("선택된 항목이 없습니다.");
        		return false;
        	}

        	this.dsChange.clearData();

        	for(var i =0;i<this.dsList2.rowcount;i++){
        		if(this.dsList2.getColumn(i, "CHK") == 1){
        			var nrow = this.dsChange.addRow();
        			this.dsChange.setColumn(nrow, "CD_CORP", this.dsList2.getColumn(i, "CD_CORP"));
        			this.dsChange.setColumn(nrow, "SN_PLAN", this.dsList2.getColumn(i, "SN_PLAN"));
        			this.dsChange.setColumn(nrow, "DT_PLAN", this.dsSearch.getColumn(0, "DT_PLAN"));
        			this.dsChange.setColumn(nrow, "CT_PLAN", this.divData.form.edt00.text);
        			this.dsChange.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		}
        	}

        	if (this.dsChange.rowcount == 0) return;

        	var strSvcId    = "change";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "change=dsChange";
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

        this.dsList2_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		// 체크박스 변경시 업데이트상태되지 않게 처리
        		if(e.columnid == "CHK") {
        			this.dsList2.set_enableevent(false);
        			this.dsList2.setColumn(e.row, this.ucFlag, "");
        			this.dsList2.set_enableevent(true);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divSplitter2.addEventHandler("ondrag",this.divData_divSplitter2_ondrag,this);
            this.divData.form.btn00.addEventHandler("onclick",this.divData_btn00_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsList2.addEventHandler("onvaluechanged",this.dsList2_onvaluechanged,this);
        };
        this.loadIncludeScript("DFB_EXECTRAN_GW.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
