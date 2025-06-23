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
            this.set_titletext("학자금 승인");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList0", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select0</Col><Col id=\"SP\">DABPR_TUITION_APPROVAL_SELECT</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DABPR_FITNESS_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DAZPR_COMMONCODE_COMBO</Col></Row><Row><Col id=\"TARGET\">insert0</Col><Col id=\"SP\">DABPR_TUITION_APPROVAL_SAVE</Col></Row><Row><Col id=\"TARGET\">update0</Col><Col id=\"SP\">DABPR_TUITION_APPROVAL_SAVE</Col></Row><Row><Col id=\"TARGET\">delete0</Col><Col id=\"SP\">DABPR_TUITION_APPROVAL_SAVE</Col></Row><Row><Col id=\"TARGET\">saveSms0</Col><Col id=\"SP\">DABPR_TUITION_MSG_INSERT</Col></Row><Row><Col id=\"TARGET\">insert1</Col><Col id=\"SP\">DABPR_FITNESS_SAVE</Col></Row><Row><Col id=\"TARGET\">update1</Col><Col id=\"SP\">DABPR_FITNESS_SAVE</Col></Row><Row><Col id=\"TARGET\">delete1</Col><Col id=\"SP\">DABPR_FITNESS_SAVE</Col></Row><Row><Col id=\"TARGET\">saveSms1</Col><Col id=\"SP\">DABPR_FITNESS_MSG_INSERT</Col></Row><Row><Col id=\"TARGET\">approval</Col><Col id=\"SP\">DABPR_TUITION_APPROVAL</Col></Row><Row><Col id=\"TARGET\">cancel</Col><Col id=\"SP\">DABPR_TUITION_APPROVAL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"YY_TUITION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TUITION\" type=\"STRING\" size=\"256\"/><Column id=\"TY_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTuition", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">%</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">01</Col><Col id=\"DS_CODE\">1분기</Col></Row><Row><Col id=\"CD_CODE\">02</Col><Col id=\"DS_CODE\">2분기</Col></Row><Row><Col id=\"CD_CODE\">03</Col><Col id=\"DS_CODE\">3분기</Col></Row><Row><Col id=\"CD_CODE\">04</Col><Col id=\"DS_CODE\">4분기</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_STATUS", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">%</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">결재완료</Col></Row><Row><Col id=\"CD_CODE\">3</Col><Col id=\"DS_CODE\">반려 및 취소</Col></Row><Row><Col id=\"CD_CODE\">4</Col><Col id=\"DS_CODE\">승인</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("30");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:0.0","10.0","359","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","ccfCD_DEPT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","10.0","180","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_TUITION","0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("지급분기");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCD_TUITION","staCD_TUITION:0.0","staCD_CORP:10.0","89","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTuition");
            obj.set_text("전체");
            obj.set_value("%");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYY_WORK","cboCD_TUITION:0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("지급년월");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_STATUS","staYY_WORK:0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("승인여부");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_STATUS","staTY_STATUS:0.0","staCD_CORP:10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTY_STATUS");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYY_TUITION","staYY_WORK:0.0","staCD_CORP:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Tab("tabData","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.tabData);
            obj.set_text("학자금");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("바디스타");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid2","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","this.divSearch.form.cboCD_TUITION","value","dsSearch","CD_TUITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","this.divSearch.form.cboTY_STATUS","value","dsSearch","TY_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ctclYY_TUITION.form.TextBox","value","dsSearch","YY_TUITION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_TUITION_APPROVAL.xfdl", function() {
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
        	//this.fnSetCombo();

        	this.fnReset();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Select.set_enable(false);
        	this.FormBtns.Reset.set_enable(true);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btn1 = this.gfnFormButtonAdd("btnPeriodSetting", "fnPeriodSetting");	// 기간설정
        	this.btn2 = this.gfnFormButtonAdd("btnApproval", "fnApproval");				// 승인
        	this.btn3 = this.gfnFormButtonAdd("btnCancel", "fnCancel");					// 반려취소
        	this.btn4 = this.gfnFormButtonAdd("btnPayApply", "fnPayApply");				// 급여적용
        	this.btn6 = this.gfnFormButtonAdd("btnIssueSlip" , "fnIssueSlip"); 			// 전표발행 버튼
        	this.btn7 = this.gfnFormButtonAdd("btnCancelSlip", "fnCancelSlip"); 		// 전표취소 버튼
        	this.btn5 = this.gfnFormButtonAdd("btnSearchSlip", "fnSearchSlip"); 		// 전표조회 버튼
        	this.btn6 = this.gfnFormButtonAdd("btnSendSms", "fnSendSms");				// SMS알림
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;

        	this.cboCD_TUITION = this.divSearch.form.cboCD_TUITION;
        	this.cboTY_STATUS = this.divSearch.form.cboTY_STATUS;
        	this.ctclYY_TUITION = this.divSearch.form.ctclYY_TUITION;

        	this.dxGrid = this.divData.form.tabData.tab1.form.objGrid;
        	this.dxGrid2 = this.divData.form.tabData.tab2.form.objGrid2;

        	this.grSearch = this.FormInfo.GR_SEARCH;		// 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;		// 그룹코드
        	//this.dxGrid2.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_CORP.CodeFindName = "DAX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_DEPT.CodeFindName = "DAX_CFDEPT";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfID_SABUN.CodeFindName = "DAX_CFBASEINFO";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList0, "DA", "DAB_TUITION_APPROVAL");
        	this.gfnGridInit(this.dxGrid2, this.dsList1, "DA", "DAB_FITNESS");

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	//this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        	this.dxGrid2.BeforeUserDataSetParam = "fnGrid2_BeforeUserDataSetParam";
        	//this.dxGrid2.AfterCDTextChanged = "fnGrid2_AfterCDTextChanged";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YY_TUITION", "string");	// 탭1 조회용
        	this.dsSelect.addColumn("YM_FITNESS", "string");	// 탭2 조회용
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("CD_TUITION", "string");
        	this.dsSelect.addColumn("TY_STATUS", "string");

        	this.dsInsert0 = new Dataset();
        	this.dsInsert0.addColumn("TY_GUBUN", "string");
        	this.dsInsert0.addColumn("ID_PERSON", "bigdecimal");
        	this.dsInsert0.addColumn("YY_TUITION", "string");
        	this.dsInsert0.addColumn("CD_TUITION", "string");
        	this.dsInsert0.addColumn("NO_SEQ", "bigdecimal");
        	this.dsInsert0.addColumn("CD_CORP", "string");
        	this.dsInsert0.addColumn("ID_SABUN", "string");
        	this.dsInsert0.addColumn("CD_DEPT", "string");
        	this.dsInsert0.addColumn("DT_REQUEST", "string");
        	this.dsInsert0.addColumn("CD_CONTACT", "string");
        	this.dsInsert0.addColumn("NM_RECEIVER", "string");
        	this.dsInsert0.addColumn("DS_SPECIALTY", "string");
        	this.dsInsert0.addColumn("CD_SCHOLARSHIP", "string");
        	this.dsInsert0.addColumn("CD_SCHOOL", "string");
        	this.dsInsert0.addColumn("DS_SCHOOL", "string");
        	this.dsInsert0.addColumn("DS_SCHOOL_GRADE", "string");
        	this.dsInsert0.addColumn("AM_REQUEST", "bigdecimal");
        	this.dsInsert0.addColumn("AM_APPROVAL", "bigdecimal");
        	this.dsInsert0.addColumn("TY_STATUS", "string");
        	this.dsInsert0.addColumn("ID_USER", "string");

        	this.dsUpdate0 = new Dataset();
        	this.dsUpdate0.addColumn("TY_GUBUN", "string");
        	this.dsUpdate0.addColumn("ID_PERSON", "bigdecimal");
        	this.dsUpdate0.addColumn("YY_TUITION", "string");
        	this.dsUpdate0.addColumn("CD_TUITION", "string");
        	this.dsUpdate0.addColumn("NO_SEQ", "bigdecimal");
        	this.dsUpdate0.addColumn("CD_CORP", "string");
        	this.dsUpdate0.addColumn("ID_SABUN", "string");
        	this.dsUpdate0.addColumn("CD_DEPT", "string");
        	this.dsUpdate0.addColumn("DT_REQUEST", "string");
        	this.dsUpdate0.addColumn("CD_CONTACT", "string");
        	this.dsUpdate0.addColumn("NM_RECEIVER", "string");
        	this.dsUpdate0.addColumn("DS_SPECIALTY", "string");
        	this.dsUpdate0.addColumn("CD_SCHOLARSHIP", "string");
        	this.dsUpdate0.addColumn("CD_SCHOOL", "string");
        	this.dsUpdate0.addColumn("DS_SCHOOL", "string");
        	this.dsUpdate0.addColumn("DS_SCHOOL_GRADE", "string");
        	this.dsUpdate0.addColumn("AM_REQUEST", "bigdecimal");
        	this.dsUpdate0.addColumn("AM_APPROVAL", "bigdecimal");
        	this.dsUpdate0.addColumn("TY_STATUS", "string");
        	this.dsUpdate0.addColumn("ID_USER", "string");

        	this.dsDelete0 = new Dataset();
        	this.dsDelete0.addColumn("TY_GUBUN", "string");
        	this.dsDelete0.addColumn("ID_PERSON", "bigdecimal");
        	this.dsDelete0.addColumn("YY_TUITION", "string");
        	this.dsDelete0.addColumn("CD_TUITION", "string");
        	this.dsDelete0.addColumn("NO_SEQ", "bigdecimal");
        	this.dsDelete0.addColumn("CD_CORP", "string");
        	this.dsDelete0.addColumn("ID_SABUN", "string");
        	this.dsDelete0.addColumn("CD_DEPT", "string");
        	this.dsDelete0.addColumn("DT_REQUEST", "string");
        	this.dsDelete0.addColumn("CD_CONTACT", "string");
        	this.dsDelete0.addColumn("NM_RECEIVER", "string");
        	this.dsDelete0.addColumn("DS_SPECIALTY", "string");
        	this.dsDelete0.addColumn("CD_SCHOLARSHIP", "string");
        	this.dsDelete0.addColumn("CD_SCHOOL", "string");
        	this.dsDelete0.addColumn("DS_SCHOOL", "string");
        	this.dsDelete0.addColumn("DS_SCHOOL_GRADE", "string");
        	this.dsDelete0.addColumn("AM_REQUEST", "bigdecimal");
        	this.dsDelete0.addColumn("AM_APPROVAL", "bigdecimal");
        	this.dsDelete0.addColumn("TY_STATUS", "string");
        	this.dsDelete0.addColumn("ID_USER", "string");

        	this.dsSelect2 = new Dataset();
        	this.dsSelect2.addColumn("CD_CORP", "string");
        	this.dsSelect2.addColumn("CD_DEPT", "string");
        	this.dsSelect2.addColumn("ID_SABUN", "string");
        	this.dsSelect2.addColumn("YM_FITNESS", "string");

        	this.dsInsert1 = new Dataset();
        	this.dsInsert1.addColumn("TY_GUBUN", "string");
        	this.dsInsert1.addColumn("ID_PERSON", "bigdecimal");
        	this.dsInsert1.addColumn("YM_FITNESS", "string");
        	this.dsInsert1.addColumn("CD_CORP", "string");
        	this.dsInsert1.addColumn("ID_SABUN", "string");
        	this.dsInsert1.addColumn("CD_DEPT", "string");
        	this.dsInsert1.addColumn("AM_FITNESS", "bigdecimal");
        	this.dsInsert1.addColumn("DS_REMARK", "string");
        	this.dsInsert1.addColumn("ID_USER", "string");

        	this.dsUpdate1 = new Dataset();
        	this.dsUpdate1.addColumn("TY_GUBUN", "string");
        	this.dsUpdate1.addColumn("ID_PERSON", "bigdecimal");
        	this.dsUpdate1.addColumn("YM_FITNESS", "string");
        	this.dsUpdate1.addColumn("CD_CORP", "string");
        	this.dsUpdate1.addColumn("ID_SABUN", "string");
        	this.dsUpdate1.addColumn("CD_DEPT", "string");
        	this.dsUpdate1.addColumn("AM_FITNESS", "bigdecimal");
        	this.dsUpdate1.addColumn("DS_REMARK", "string");
        	this.dsUpdate1.addColumn("ID_USER", "string");

        	this.dsDelete1 = new Dataset();
        	this.dsDelete1.addColumn("TY_GUBUN", "string");
        	this.dsDelete1.addColumn("ID_PERSON", "bigdecimal");
        	this.dsDelete1.addColumn("YM_FITNESS", "string");
        	this.dsDelete1.addColumn("CD_CORP", "string");
        	this.dsDelete1.addColumn("ID_SABUN", "string");
        	this.dsDelete1.addColumn("CD_DEPT", "string");
        	this.dsDelete1.addColumn("AM_FITNESS", "bigdecimal");
        	this.dsDelete1.addColumn("DS_REMARK", "string");
        	this.dsDelete1.addColumn("ID_USER", "string");

        	this.dsExcute = new Dataset();
        	//this.dsExcute.addColumn("TY_GUBUN", "string");
        	this.dsExcute.addColumn("TY_FLAG", "string");
        	this.dsExcute.addColumn("ID_PERSON", "bigdecimal");
        	this.dsExcute.addColumn("YY_TUITION", "string");
        	this.dsExcute.addColumn("CD_TUITION", "string");
        	this.dsExcute.addColumn("NO_SEQ", "bigdecimal");
        	this.dsExcute.addColumn("ID_USER", "string");

        	this.dsCancelSlip = new Dataset();
        	this.dsCancelSlip.addColumn("CD_TRADE", "string");		//전표번호
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	//if (!this.fnSelectValidate()) return false;
        	var tidx = this.divData.form.tabData.tabindex;
        //	trace(">>>>>>>탭index:"+tidx);
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        // 	this.dsSelect2.clearData();
        // 	this.dsSelect2.addRow();

        	if(tidx == 0){
        		//this.fnSelectTab2();
        		this.dsSelect.setColumn(0, "YY_TUITION", this.ctclYY_TUITION.form.TextBox.value);
        		this.dsSelect.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		this.dsSelect.setColumn(0, "CD_DEPT", this.ccfCD_DEPT.form.CDTextBox.value);
        		this.dsSelect.setColumn(0, "ID_SABUN", this.ccfID_SABUN.form.CDTextBox.value);
        		this.dsSelect.setColumn(0, "CD_TUITION", this.cboCD_TUITION.value);
        		this.dsSelect.setColumn(0, "TY_STATUS", this.cboTY_STATUS.value);

        	}else{

        		this.dsSelect.setColumn(0, "YM_FITNESS", this.ctclYY_TUITION.form.TextBox.value);
        		this.dsSelect.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		this.dsSelect.setColumn(0, "CD_DEPT", this.ccfCD_DEPT.form.CDTextBox.value);
        		this.dsSelect.setColumn(0, "ID_SABUN", this.ccfID_SABUN.form.CDTextBox.value);
        	}

        // 	this.dsSelect.setColumn(0, "YY_TUITION", this.ctclYY_TUITION.form.TextBox.value);
        // 	this.dsSelect.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        // 	this.dsSelect.setColumn(0, "CD_DEPT", this.ccfCD_DEPT.form.CDTextBox.value);
        // 	this.dsSelect.setColumn(0, "ID_SABUN", this.ccfID_SABUN.form.CDTextBox.value);
        // 	this.dsSelect.setColumn(0, "CD_TUITION", this.cboCD_TUITION.value);
        // 	this.dsSelect.setColumn(0, "TY_STATUS", this.cboTY_STATUS.value);
        //
        // 	this.dsSelect2.setColumn(0, "YM_FITNESS", this.ctclYY_TUITION.form.TextBox.value);
        // 	this.dsSelect2.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        // 	this.dsSelect2.setColumn(0, "CD_DEPT", this.ccfCD_DEPT.form.CDTextBox.value);
        // 	this.dsSelect2.setColumn(0, "ID_SABUN", this.ccfID_SABUN.form.CDTextBox.value);

        //	trace("조회조건>>>>"+this.dsSelect.saveXML());
        	var strSvcId    = "select"+tidx;
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select"+tidx+"=dsSelect";
        	var outData     = "dsList"+tidx+"=select"+tidx+"0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        // 	var strSvcId    = "select";
        // 	var strSvcType  = "grid";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "select0=dsSelect select1=dsSelect2";
        // 	var outData     = "dsList0=select00 dsList1=select10";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	switch(this.divData.form.tabData.tabindex) {
        		case 0:
        			var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        			//var nrow = this.dsList0.addRow();
        			this.dsList0.setColumn(nrow, "YY_TUITION", this.ctclYY_TUITION.form.TextBox.value.substr(0,4));
        			var cdTuition = this.cboCD_TUITION.value;
        			if(cdTuition != '%' && cdTuition != ''){
        				this.dsList0.setColumn(nrow, "CD_TUITION", this.cboCD_TUITION.value);
        			}

        			break;
        		case 1:
        			var nrow = this.gfnGridAdd(this.dxGrid2); // top (default), bottom, current
        			this.dsList1.setColumn(nrow, "YM_FITNESS", this.ctclYY_TUITION.form.TextBox.value);
        			break;
        	}
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	switch(this.divData.form.tabData.tabindex) {
        		case 0:
        			var nrow = this.dsList0.rowposition;
        			if ( this.dsList0.getColumn(nrow, "TY_STATUS") == "4"){
        				this.gfnAlert("승인 상태 이므로 수정 및 삭제가 불가합니다");
        				return;
        			}

        			this.gfnGridDel(this.dxGrid);
        			break;
        		case 1:
        			this.gfnGridDel(this.dxGrid2);
        			break;
        	}
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	switch(this.divData.form.tabData.tabindex) {
        		case 0:
        		case 1:
        			this.savefnname = eval("this.fnSaveAction"+this.divData.form.tabData.tabindex);
        			this.savefnname();
        			break;
        	}
        }

        this.fnSaveAction0 = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert0.clearData();
        	this.dsUpdate0.clearData();
        	this.dsDelete0.clearData();

        	//trace("this.dsList :: " + this.dsList0.saveXML());

        	for (var i = 0; i < this.dsList0.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList0, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert0.addRow();

        				this.dsInsert0.setColumn(nrow, "TY_GUBUN", flag);
        				this.dsInsert0.setColumn(nrow, "ID_PERSON", this.dsList0.getColumn(i, "ID_PERSON"));
        				this.dsInsert0.setColumn(nrow, "YY_TUITION", this.ctclYY_TUITION.form.TextBox.value.substr(0,4));
        				this.dsInsert0.setColumn(nrow, "CD_TUITION", this.dsList0.getColumn(i, "CD_TUITION"));
        				/**
        				if(this.dsList0.getColumn(i, "CD_TUITION") == '%' || this.dsList0.getColumn(i, "CD_TUITION") == ''){
        					this.dsInsert0.setColumn(nrow, "CD_TUITION", this.dsList0.getColumn(i, "CD_TUITION"));
        				}else{
        					this.dsInsert0.setColumn(nrow, "CD_TUITION", this.cboCD_TUITION.value);
        				}
        				**/
        				//this.dsInsert0.setColumn(nrow, "NO_SEQ", this.dsList0.getColumn(i, "NO_SEQ"));
        				this.dsInsert0.setColumn(nrow, "CD_CORP", this.dsList0.getColumn(i, "CD_CORP"));
        				this.dsInsert0.setColumn(nrow, "ID_SABUN", this.dsList0.getColumn(i, "ID_SABUN"));
        				this.dsInsert0.setColumn(nrow, "CD_DEPT", this.dsList0.getColumn(i, "CD_DEPT"));
        				this.dsInsert0.setColumn(nrow, "DT_REQUEST", this.gfnGetDate().substr(0,8));
        				this.dsInsert0.setColumn(nrow, "CD_CONTACT", this.dsList0.getColumn(i, "CD_CONTACT"));
        				this.dsInsert0.setColumn(nrow, "NM_RECEIVER", this.dsList0.getColumn(i, "NM_RECEIVER"));
        				this.dsInsert0.setColumn(nrow, "DS_SPECIALTY", this.dsList0.getColumn(i, "DS_SPECIALTY"));
        				this.dsInsert0.setColumn(nrow, "CD_SCHOLARSHIP", this.dsList0.getColumn(i, "CD_SCHOLARSHIP"));
        				//this.dsInsert0.setColumn(nrow, "CD_SCHOOL", this.dsList0.getColumn(i, "CD_SCHOOL"));
        				this.dsInsert0.setColumn(nrow, "DS_SCHOOL", this.dsList0.getColumn(i, "DS_SCHOOL"));
        				this.dsInsert0.setColumn(nrow, "DS_SCHOOL_GRADE", this.dsList0.getColumn(i, "DS_SCHOOL_GRADE"));
        				this.dsInsert0.setColumn(nrow, "AM_REQUEST", this.dsList0.getColumn(i, "AM_REQUEST"));
        				this.dsInsert0.setColumn(nrow, "AM_APPROVAL", this.dsList0.getColumn(i, "AM_APPROVAL"));
        				this.dsInsert0.setColumn(nrow, "TY_STATUS", this.dsList0.getColumn(i, "TY_STATUS"));
        				this.dsInsert0.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        				break;
        			case "U":
        				var nrow = this.dsUpdate0.addRow();

        				this.dsUpdate0.setColumn(nrow, "TY_GUBUN", flag);
        				this.dsUpdate0.setColumn(nrow, "ID_PERSON", this.dsList0.getColumn(i, "ID_PERSON"));
        				this.dsUpdate0.setColumn(nrow, "YY_TUITION", this.dsList0.getColumn(i, "YY_TUITION"));
        				this.dsUpdate0.setColumn(nrow, "CD_TUITION", this.dsList0.getColumn(i, "CD_TUITION"));
        				this.dsUpdate0.setColumn(nrow, "NO_SEQ", this.dsList0.getColumn(i, "NO_SEQ"));
        				this.dsUpdate0.setColumn(nrow, "CD_CORP", this.dsList0.getColumn(i, "CD_CORP"));
        				this.dsUpdate0.setColumn(nrow, "ID_SABUN", this.dsList0.getColumn(i, "ID_SABUN"));
        				this.dsUpdate0.setColumn(nrow, "CD_DEPT", this.dsList0.getColumn(i, "CD_DEPT"));
        				this.dsUpdate0.setColumn(nrow, "DT_REQUEST", this.dsList0.getColumn(i, "DT_REQUEST"));
        				this.dsUpdate0.setColumn(nrow, "CD_CONTACT", this.dsList0.getColumn(i, "CD_CONTACT"));
        				this.dsUpdate0.setColumn(nrow, "NM_RECEIVER", this.dsList0.getColumn(i, "NM_RECEIVER"));
        				this.dsUpdate0.setColumn(nrow, "DS_SPECIALTY", this.dsList0.getColumn(i, "DS_SPECIALTY"));
        				this.dsUpdate0.setColumn(nrow, "CD_SCHOLARSHIP", this.dsList0.getColumn(i, "CD_SCHOLARSHIP"));
        				//this.dsUpdate0.setColumn(nrow, "CD_SCHOOL", this.dsList0.getColumn(i, "CD_SCHOOL"));
        				this.dsUpdate0.setColumn(nrow, "DS_SCHOOL", this.dsList0.getColumn(i, "DS_SCHOOL"));
        				this.dsUpdate0.setColumn(nrow, "DS_SCHOOL_GRADE", this.dsList0.getColumn(i, "DS_SCHOOL_GRADE"));
        				this.dsUpdate0.setColumn(nrow, "AM_REQUEST", this.dsList0.getColumn(i, "AM_REQUEST"));
        				this.dsUpdate0.setColumn(nrow, "AM_APPROVAL", this.dsList0.getColumn(i, "AM_APPROVAL"));
        				this.dsUpdate0.setColumn(nrow, "TY_STATUS", this.dsList0.getColumn(i, "TY_STATUS"));
        				this.dsUpdate0.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        				break;
        			case "D":
        				var nrow = this.dsDelete0.addRow();

        				this.dsDelete0.setColumn(nrow, "TY_GUBUN", flag);
        				this.dsDelete0.setColumn(nrow, "ID_PERSON", this.dsList0.getColumn(i, "ID_PERSON"));
        				this.dsDelete0.setColumn(nrow, "YY_TUITION", this.dsList0.getColumn(i, "YY_TUITION"));
        				this.dsDelete0.setColumn(nrow, "CD_TUITION", this.dsList0.getColumn(i, "CD_TUITION"));
        				this.dsDelete0.setColumn(nrow, "NO_SEQ", this.dsList0.getColumn(i, "NO_SEQ"));

        				break;
        		}
        	}

        	if (this.dsInsert0.rowcount == 0 && this.dsUpdate0.rowcount == 0 && this.dsDelete0.rowcount == 0) return;

        	var strSvcId    = "save0";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert0=dsInsert0 update0=dsUpdate0 delete0=dsDelete0";
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

        this.fnSaveAction1 = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid2)) return;

        	this.dxGrid2.updateToDataset();

        	this.dsInsert1.clearData();
        	this.dsUpdate1.clearData();
        	this.dsDelete1.clearData();

        	//trace("this.dsList :: " + this.dsList1.saveXML());

        	for (var i = 0; i < this.dsList1.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList1, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert1.addRow();

        				this.dsInsert1.setColumn(nrow, "TY_GUBUN", flag);
        				this.dsInsert1.setColumn(nrow, "ID_PERSON", this.dsList1.getColumn(i, "ID_PERSON"));
        				this.dsInsert1.setColumn(nrow, "YM_FITNESS", this.dsList1.getColumn(i, "YM_FITNESS"));
        				//this.dsInsert1.setColumn(nrow, "YM_FITNESS", this.ctclYY_TUITION.form.TextBox.value);

        				this.dsInsert1.setColumn(nrow, "CD_CORP", this.dsList1.getColumn(i, "CD_CORP"));
        				this.dsInsert1.setColumn(nrow, "ID_SABUN", this.dsList1.getColumn(i, "ID_SABUN"));
        				this.dsInsert1.setColumn(nrow, "CD_DEPT", this.dsList1.getColumn(i, "CD_DEPT"));
        				this.dsInsert1.setColumn(nrow, "AM_FITNESS", this.dsList1.getColumn(i, "AM_FITNESS"));
        				this.dsInsert1.setColumn(nrow, "DS_REMARK", this.dsList1.getColumn(i, "DS_REMARK"));
        				this.dsInsert1.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        				break;
        			case "U":
        				var nrow = this.dsUpdate1.addRow();

        				this.dsUpdate1.setColumn(nrow, "TY_GUBUN", flag);
        				this.dsUpdate1.setColumn(nrow, "ID_PERSON", this.dsList1.getColumn(i, "ID_PERSON"));
        				this.dsUpdate1.setColumn(nrow, "YM_FITNESS", this.dsList1.getColumn(i, "YM_FITNESS"));
        				this.dsUpdate1.setColumn(nrow, "CD_CORP", this.dsList1.getColumn(i, "CD_CORP"));
        				this.dsUpdate1.setColumn(nrow, "ID_SABUN", this.dsList1.getColumn(i, "ID_SABUN"));
        				this.dsUpdate1.setColumn(nrow, "CD_DEPT", this.dsList1.getColumn(i, "CD_DEPT"));
        				this.dsUpdate1.setColumn(nrow, "AM_FITNESS", this.dsList1.getColumn(i, "AM_FITNESS"));
        				this.dsUpdate1.setColumn(nrow, "DS_REMARK", this.dsList1.getColumn(i, "DS_REMARK"));
        				this.dsUpdate1.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        				break;
        			case "D":
        				var nrow = this.dsDelete1.addRow();

        				this.dsDelete1.setColumn(nrow, "TY_GUBUN", flag);
        				this.dsDelete1.setColumn(nrow, "ID_PERSON", this.dsList1.getColumn(i, "ID_PERSON"));
        				this.dsDelete1.setColumn(nrow, "YM_FITNESS", this.dsList1.getColumn(i, "YM_FITNESS"));
        				//this.dsDelete1.setColumn(nrow, "CD_CORP", this.dsList1.getColumn(i, "CD_CORP"));
        				this.dsDelete1.setColumn(nrow, "ID_SABUN", this.dsList1.getColumn(i, "ID_SABUN"));

        				break;
        		}
        	}

        	if (this.dsInsert1.rowcount == 0 && this.dsUpdate1.rowcount == 0 && this.dsDelete1.rowcount == 0) return;

        	var strSvcId    = "save1";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert1=dsInsert1 update1=dsUpdate1 delete1=dsDelete1";
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
        	switch(this.divData.form.tabData.tabindex) {
        		case 0:
        			this.gfnExcelExport(this.dxGrid);
        			break;
        		case 1:
        			this.gfnExcelExport(this.dxGrid2);
        			break;
        	}
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }

        /*
         *	초기화 버튼
         */
        this.fnReset  = function() {
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();

        	//지급년월(현재월)
        	this.divSearch.form.ctclYY_TUITION.form.TextBox.set_value(this.gfnGetDate().substr(0,6));

        	this.cboCD_TUITION.set_index(0);
        	this.cboTY_STATUS.set_index(0);

        	this.FormBtns.Select.click();
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        	if(this.gfnIsNull(this.ctclYY_TUITION.form.TextBox.value)){
        		validate = false;
        		this.gfnAlert("지급년월을 입력하세요");
        		this.ctclYY_TUITION.form.TextBox.setFocus();
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
        // 	if (svcID == "select") {
        // 		this.gfnGridAfterSelect(this.dxGrid);
        // 		this.gfnGridAfterSelect(this.dxGrid2);
        // 	}
        	if (svcID == "select0") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	 else if (svcID == "select1") {
        		this.gfnGridAfterSelect(this.dxGrid2);
        	 }
        	else if(svcID == "combo"){
        		this.cboTY_STATUS.set_index(0);
         	}
        	else if(svcID == "save0"){
        		if (errorCode == 0) {
        			this.gfnAlert("작업이 완료되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "save1"){
        		if (errorCode == 0) {
        			this.gfnAlert("작업이 완료되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "approval"){
        		//this.gfnGridInit(this.dxGrid, this.dsList0, "DA", "DAB_TUITION_APPROVAL");
        		if (errorCode == 0) {
        			this.gfnAlert("작업이 완료되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "cancel"){
        		if (errorCode == 0) {
        			this.gfnAlert("작업이 완료되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "saveSms"){
        		if (errorCode == 0) {
        			this.gfnAlert("작업이 완료되었습니다.");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}

        	this.fnSetButton();
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	//trace("코드파인드 id:"+id);
        	switch(id) {
        		case "ccfCD_CORP":
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			break;
        		case "ccfCD_DEPT":
        			var cd_corp = this.ccfCD_CORP.form.CDTextBox.value;
        			//var cd_corp = this.gfnNvl(this.ccfCD_CORP.form.CDTextBox.value, this.AuthClient.CD_CORP)

        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "CD_CORP", this.gfnNvl(this.ccfCD_CORP.form.CDTextBox.value,this.AuthClient.CD_CORP));
        			dsUserParam.setColumn(nrow, "YN_CURRENT", "");

        			break;
        		case "ccfID_SABUN":
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "TY_RETIRE", "%");	// 재직구분
        			break;
        		case "DAX_CFBASEINFO_ALL":
        			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", "%");
        			dsUserParam.setColumn(nrow, "YN_CORP", "Y");
        			dsUserParam.setColumn(nrow, "TY_RETIRE", "%");	// 재직구분
        			break;

        		default:
        	}

        	return true;

        };

        this.fnAfterCDTextChanged = function(id) {
        	this.fnSearchInit();
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	//trace('grid_코드파인드_식별id: ' + id);

        	switch(id) {

        	case "ID_SABUN":     // 사번,부서,법인	ID_SABUN	DAX_CFBASEINFO
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
                dsUserParam.setColumn(nrow, "CD_DEPT", "%");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        	break;

        	case "CD_CONTACT":	//관계코드(FA)	CD_CONTACT	DAX_CFCOMMONCODE_FA
                 dsUserParam.setColumn(nrow, "CD_PREFIX", 'FA'); // 관계코드
        	break;

        	case "CD_SCHOLARSHIP":	//학력코드	CD_SCHOLARSHIP	DAX_CFCOMMONCODE_SA
                 dsUserParam.setColumn(nrow, "CD_PREFIX", 'SA'); // 학력코드
        	break;

        // 	case "CD_SCHOOL":	//학교코드	(사용안함)
        //      dsUserParam.setColumn(nrow, "CD_PREFIX", 'SD'); // 학교코드
        // 	break;

        	default:
        	}
        	return true;

        };

        this.fnGrid2_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	//trace('grid2_코드파인드_식별id: ' + id);

        	switch(id) {

        	case "ID_SABUN":     // 사번,부서,법인
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
                dsUserParam.setColumn(nrow, "CD_DEPT", "%");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        	break;

        	default:

        	}
        	return true;

        };

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
        		this.gfnGridClear(this.dxGrid2);
        	}
        };

        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("TY_SEL", "string");
        	this.dsCombo.addColumn("CD_PREFIX", "string");
        	this.dsCombo.addColumn("CD_UPPREFIX", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "TY_SEL", "A");
        	this.dsCombo.setColumn(0, "CD_PREFIX", "GW");
        	this.dsCombo.setColumn(0, "CD_UPPREFIX", "");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_STATUS=combo0";
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

        // 기간설정
        this.fnPeriodSetting = function(obj,e) {
        	// TODO 기간설정 기능 추가
        	//if(!this.gfnGridIsRow(this.dxGrid)) return;
        	var param = {};
        	//param.NO_ACCOUNT = this.dsList0.getColumn(this.dsList0.rowposition,"NO_ACCOUNT");
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAB_TUITION_PERIOD", "", param, this.getOffsetWidth(), this.getOffsetHeight());
        }

        // 학자금 승인처리
        this.fnApproval = function(obj,e) {
        	// TODO 계획생성 기능 추가
        	if(this.divData.form.tabData.tabindex == 0) {
        		//if(!this.gfnGridIsRow(this.dxGrid)) return;
        		if(!this.fnCheckFlag(this.dxGrid)) return;
        		this.gfnConfirm("선택한 학자금 내역을 승인하시겠습니까?", "fnApprovalCallback");
        	}
        }

        // 학자금 승인처리 Callback
        this.fnApprovalCallback = function(strId, val) {
        	if(val == false) return;

        	//this.dxGrid.updateToDataset();
        	this.dsExcute.clearData();

        	var chkCount = 0;
        	for (var i = 0; i < this.dsList0.rowcount; i++) {
        // 		var flag = this.gfnGetFlag(this.dsList0, i);
        // 		switch(flag) {
        // 			case "U":
        				var chkVal = this.dsList0.getColumn(i, "CHK");
        				if(chkVal == 1){
        					chkCount++;
        					var nrow = this.dsExcute.addRow();

        					this.dsExcute.setColumn(nrow, "TY_FLAG", "4");	//승인일때는 4  반려 · 취소일때 2
        					this.dsExcute.setColumn(nrow, "ID_PERSON", this.dsList0.getColumn(i, "ID_PERSON"));
        					this.dsExcute.setColumn(nrow, "YY_TUITION", this.dsList0.getColumn(i, "YY_TUITION"));
        					this.dsExcute.setColumn(nrow, "CD_TUITION", this.dsList0.getColumn(i, "CD_TUITION"));
        					this.dsExcute.setColumn(nrow, "NO_SEQ", this.dsList0.getColumn(i, "NO_SEQ"));
        					this.dsExcute.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
         				}
        //
        // 				break;
        //		}
        	}

        	if(chkCount == 0) return;

        	var strSvcId    = "approval";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "approval=dsExcute";
        	//var outData     = "dsResult=approval0";
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

        // 학자금 반려취소
        this.fnCancel = function(obj,e) {
        	// TODO 계획생성 기능 추가
        	if(this.divData.form.tabData.tabindex == 0) {
        		//if(!this.gfnGridIsRow(this.dxGrid)) return;
        		if(!this.fnCheckFlag(this.dxGrid)) return;
        		this.gfnConfirm("선택한 학자금 내역을 승인취소하시겠습니까?", "fnCancelCallback");
        	}
        }

        // 학자금 반려취소 Callback
        this.fnCancelCallback = function(strId, val) {
        	if(val == false) return;

        	this.dsExcute.clearData();

        	var chkCount = 0;

        	for (var i = 0; i < this.dsList0.rowcount; i++) {
        // 		var flag = this.gfnGetFlag(this.dsList0, i);
        // 		switch(flag) {
        // 			case "U":
        				var chkVal = this.dsList0.getColumn(i, "CHK");
        				if(chkVal == 1){
        					chkCount++;
        					var nrow = this.dsExcute.addRow();

        					this.dsExcute.setColumn(nrow, "TY_FLAG", "3");	//승인일때는 4  반려 · 취소일때 3
        					this.dsExcute.setColumn(nrow, "ID_PERSON", this.dsList0.getColumn(i, "ID_PERSON"));
        					this.dsExcute.setColumn(nrow, "YY_TUITION", this.dsList0.getColumn(i, "YY_TUITION"));
        					this.dsExcute.setColumn(nrow, "CD_TUITION", this.dsList0.getColumn(i, "CD_TUITION"));
        					this.dsExcute.setColumn(nrow, "NO_SEQ", this.dsList0.getColumn(i, "NO_SEQ"));
        					this.dsExcute.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				}

        // 				break;
        // 		}
        	}

        	if(chkCount == 0) return;

        	var strSvcId    = "cancel";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "approval=dsExcute";
        	//var outData     = "dsResult=approval0";
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

        this.fnCheckFlag = function(objGrid) {
        	var chkCount = 0;
        	//var objDs = objGrid.getBindDataset();
        	for (var i = 0; i < this.dsList0.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList0, i);
        		//if(flag == "U") {
        			var chkVal = this.dsList0.getColumn(i, "CHK");
        			if(chkVal == 1){
        				chkCount++;
        			}
        		//}
        	}

        	if(chkCount == 0) {
        		return false;
        	}else{
        		return true;
        	}
        }

        //급여적용
        this.fnPayApply = function(obj,e) {
        	var param = {};
        	var tidx = this.divData.form.tabData.tabindex;

        	param.GB_SALARY = tidx == 0 ? "T" : "F"; //t:학자금 f:바디스타
        	param.YY_TUITION = tidx == 0 ? this.dsList0.getColumn(this.dsList0.rowposition, "YY_TUITION") : "";
        	param.CD_TUITION = tidx == 0 ? this.dsList0.getColumn(this.dsList0.rowposition, "CD_TUITION") : "";
        	param.YM_FITNESS = tidx == 0 ? "" : this.dsList1.getColumn(this.dsList1.rowposition, "YM_FITNESS");
        	param.YM_SALARY = tidx == 0 ? this.dsList0.getColumn(this.dsList0.rowposition, "YM_SALARY") : this.dsList1.getColumn(this.dsList1.rowposition, "YM_SALARY");
        	param.CD_CORP = tidx == 0 ? this.dsList0.getColumn(this.dsList0.rowposition, "CD_CORP") : this.dsList1.getColumn(this.dsList1.rowposition, "CD_CORP");
        	param.DS_CORP = tidx == 0 ? this.dsList0.getColumn(this.dsList0.rowposition, "DS_CORP") : this.dsList1.getColumn(this.dsList1.rowposition, "DS_CORP");
        	param.DT_SALARY = tidx == 0 ? this.dsList0.getColumn(this.dsList0.rowposition, "DT_SALARY") : this.dsList1.getColumn(this.dsList1.rowposition, "DT_SALARY");

        	this.gfnFormOpenNonAuth("DAB", "DAB_TUITION_SALARY_DLG", "fnPayApplyCallback", param);
        }

        this.fnPayApplyCallback = function(strId, val)  {
        	if(val != false) {
        		this.FormBtns.Select.click();
        	}
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGrid2);
        		this.fnSetButton();
        	}
        };

        this.divData_tabData_onchanged = function(obj,e)
        {
        	// 탭 변경시 조회처리시
        // 	if(e.preindex != e.postindex) {
        // 		this.FormBtns.Select.click();
        // 	}
        };

        this.divData_tabData_tab1_objGrid_oncellclick = function(obj,e)
        {
        	var row = obj.currentrow;
        	var tyStatus = this.dsList0.getColumn(row, "TY_STATUS"); 	// 4:승인 2:반려
        	var cdScholarship = this.dsList0.getColumn(row, "CD_SCHOLARSHIP");
        //	var cdSchool = this.dsList0.getColumn(row, "CD_SCHOOL");
        	var dsSchoolEditable = false;
        	var curRowType = this.dsList0.getRowType(row) ;
        	var strEditType = obj.getCurEditType();

        // 	if( row >= 0 ){
        // 		if(cdSchool == 'ZZ'){
        // 			if(curRowType == '2'){
        // 				dsSchoolEditable = true;
        // 			}else if(curRowType == '1' || curRowType == '4'){
        // 				if(tyStatus != '2'){
        // 					dsSchoolEditable = true;
        // 				}else{
        // 					dsSchoolEditable = false;
        // 				}
        // 			}else{
        // 				dsSchoolEditable = false;
        // 			}
        // 		}else{
        // 			dsSchoolEditable = false;
        // 		}
        // 	}

        	//trace("row:[" + row + "] curROwType:[" + curRowType +"] TY_STATUS:[" + tyStatus + "] strEditType:["+strEditType+"] cdSchool:["+cdSchool+"] cdScholarship:["+cdScholarship+"] dsSchoolEditable:[" + dsSchoolEditable + "]" ) ;

        	obj.setCellProperty("body", obj.getBindCellIndex("body", "CD_CONTACT"), "edittype", "expr:" + row + " >= 0 && (" + curRowType + " == '1' || " + curRowType + " == '4') && TY_STATUS =='4'?'none':'text'");
        	obj.setCellProperty("body", obj.getBindCellIndex("body", "CD_CONTACT"), "expandshow", "expr:" + row + " >= 0 && (" + curRowType + " == '1' || " + curRowType + " == '4') && TY_STATUS =='4'?'hide':'show'");
        	obj.setCellProperty("body", obj.getBindCellIndex("body", "NM_RECEIVER"), "edittype", "expr:" + row + " >= 0 && (" + curRowType + " == '1' || " + curRowType + " == '4') && TY_STATUS =='4'?'none':'text'");
        	obj.setCellProperty("body", obj.getBindCellIndex("body", "DS_SPECIALTY"), "edittype", "expr:" + row + " >= 0 && (" + curRowType + " == '1' || " + curRowType + " == '4') && TY_STATUS =='4'?'none':'text'");
        	obj.setCellProperty("body", obj.getBindCellIndex("body", "CD_SCHOLARSHIP"), "edittype", "expr:" + row + " >= 0 && (" + curRowType + " == '1' || " + curRowType + " == '4') && TY_STATUS =='4'?'none':'text'");
        	obj.setCellProperty("body", obj.getBindCellIndex("body", "CD_SCHOLARSHIP"), "expandshow", "expr:" + row + " >= 0 && (" + curRowType + " == '1' || " + curRowType + " == '4') && TY_STATUS =='4'?'hide':'show'");
        // 	obj.setCellProperty("body", obj.getBindCellIndex("body", "CD_SCHOOL"), "edittype", "expr:" + row + " >= 0 && (" + curRowType + " == '1' || " + curRowType + " == '4') && TY_STATUS =='4'?'none':'text'");
        // 	obj.setCellProperty("body", obj.getBindCellIndex("body", "CD_SCHOOL"), "expandshow", "expr:" + row + " >= 0 && (" + curRowType + " == '1' || " + curRowType + " == '4') && TY_STATUS =='4'?'hide':'show'");
        	obj.setCellProperty("body", obj.getBindCellIndex("body", "DS_SCHOOL"), "edittype", "expr:" + row + " >= 0 && (" + curRowType + " == '1' || " + curRowType + " == '4') && TY_STATUS =='4'?'none':'text'");
        	//obj.setCellProperty("body", obj.getBindCellIndex("body", "DS_SCHOOL"), "edittype", "expr:" + dsSchoolEditable + " == false?'none':'text'");
        	obj.setCellProperty("body", obj.getBindCellIndex("body", "DS_SCHOOL_GRADE"), "edittype", "expr:" + row + " >= 0 && (" + curRowType + " == '1' || " + curRowType + " == '4') && TY_STATUS =='4'?'none':'text'");
        	obj.setCellProperty("body", obj.getBindCellIndex("body", "AM_REQUEST"), "edittype", "expr:" + row + " >= 0 && (" + curRowType + " == '1' || " + curRowType + " == '4') && TY_STATUS =='4'?'none':'mask'");
        	obj.setCellProperty("body", obj.getBindCellIndex("body", "AM_APPROVAL"), "edittype", "expr:" + row + " >= 0 && (" + curRowType + " == '1' || " + curRowType + " == '4') && TY_STATUS =='4'?'none':'mask'");


        	obj.setCellProperty("body", obj.getBindCellIndex("body", "DS_DEPT"), "edittype", "expr:" + row + " >= 0 && (" + curRowType + " == '1' || " + curRowType + " == '4') && TY_STATUS =='4'?'none':'text'");
        	//trace(">>>>row:[" + row + "] curROwType:[" + curRowType +"] TY_STATUS:[" + tyStatus + "] strEditType:["+strEditType+"]" ) ;

        	//this.fnTab1GridSetting(obj.getDatasetRow(e.row));
        };

        this.divData_tabData_tab1_objGrid_oncellposchanged = function(obj,e)
        {
        	var row = obj.currentrow;
        	var tyStatus = this.dsList0.getColumn(row, "TY_STATUS"); // 4:승인 2:반려
        	var cdScholarship = this.dsList0.getColumn(row, "CD_SCHOLARSHIP");
        //	var cdSchool = this.dsList0.getColumn(row, "CD_SCHOOL");
        	var dsSchoolEditable = false;
        	var curRowType = this.dsList0.getRowType(row) ;
        	var strEditType = obj.getCurEditType();

        // 	if( row >= 0 ){
        // 		if(cdSchool == 'ZZ'){
        // 			if(curRowType == '2'){
        // 				dsSchoolEditable = true;
        // 			}else if(curRowType == '1' || curRowType == '4'){
        // 				if(tyStatus != '2'){
        // 					dsSchoolEditable = true;
        // 				}else{
        // 					dsSchoolEditable = false;
        // 				}
        // 			}else{
        // 				dsSchoolEditable = false;
        // 			}
        // 		}else{
        // 			dsSchoolEditable = false;
        // 		}
        // 	}

        	//trace("objGrid_oncellposchanged row:[" + row + "] curROwType:[" + curRowType +"] TY_STATUS:[" + tyStatus + "] strEditType:["+strEditType+"] cdSchool:["+cdSchool+"] cdScholarship:["+cdScholarship+"] dsSchoolEditable:[" + dsSchoolEditable + "]" ) ;

        	obj.setCellProperty("body", obj.getBindCellIndex("body", "CD_CONTACT"), "edittype", "expr:" + row + " >= 0 && (" + curRowType + " == '1' || " + curRowType + " == '4') && TY_STATUS =='4'?'none':'text'");
        	obj.setCellProperty("body", obj.getBindCellIndex("body", "CD_CONTACT"), "expandshow", "expr:" + row + " >= 0 && (" + curRowType + " == '1' || " + curRowType + " == '4') && TY_STATUS =='4'?'hide':'show'");
        	obj.setCellProperty("body", obj.getBindCellIndex("body", "NM_RECEIVER"), "edittype", "expr:" + row + " >= 0 && (" + curRowType + " == '1' || " + curRowType + " == '4') && TY_STATUS =='4'?'none':'text'");
        	obj.setCellProperty("body", obj.getBindCellIndex("body", "DS_SPECIALTY"), "edittype", "expr:" + row + " >= 0 && (" + curRowType + " == '1' || " + curRowType + " == '4') && TY_STATUS =='4'?'none':'text'");
        	obj.setCellProperty("body", obj.getBindCellIndex("body", "CD_SCHOLARSHIP"), "edittype", "expr:" + row + " >= 0 && (" + curRowType + " == '1' || " + curRowType + " == '4') && TY_STATUS =='4'?'none':'text'");
        	obj.setCellProperty("body", obj.getBindCellIndex("body", "CD_SCHOLARSHIP"), "expandshow", "expr:" + row + " >= 0 && (" + curRowType + " == '1' || " + curRowType + " == '4') && TY_STATUS =='4'?'hide':'show'");
        // 	obj.setCellProperty("body", obj.getBindCellIndex("body", "CD_SCHOOL"), "edittype", "expr:" + row + " >= 0 && (" + curRowType + " == '1' || " + curRowType + " == '4') && TY_STATUS =='4'?'none':'text'");
        // 	obj.setCellProperty("body", obj.getBindCellIndex("body", "CD_SCHOOL"), "expandshow", "expr:" + row + " >= 0 && (" + curRowType + " == '1' || " + curRowType + " == '4') && TY_STATUS =='4'?'hide':'show'");
        	obj.setCellProperty("body", obj.getBindCellIndex("body", "DS_SCHOOL"), "edittype", "expr:" + row + " >= 0 && (" + curRowType + " == '1' || " + curRowType + " == '4') && TY_STATUS =='4'?'none':'text'");
        	//obj.setCellProperty("body", obj.getBindCellIndex("body", "DS_SCHOOL"), "edittype", "expr:" + dsSchoolEditable + " == false?'none':'text'");
        	obj.setCellProperty("body", obj.getBindCellIndex("body", "DS_SCHOOL_GRADE"), "edittype", "expr:" + row + " >= 0 && (" + curRowType + " == '1' || " + curRowType + " == '4') && TY_STATUS =='4'?'none':'text'");
        	obj.setCellProperty("body", obj.getBindCellIndex("body", "AM_REQUEST"), "edittype", "expr:" + row + " >= 0 && (" + curRowType + " == '1' || " + curRowType + " == '4') && TY_STATUS =='4'?'none':'mask'");
        	obj.setCellProperty("body", obj.getBindCellIndex("body", "AM_APPROVAL"), "edittype", "expr:" + row + " >= 0 && (" + curRowType + " == '1' || " + curRowType + " == '4') && TY_STATUS =='4'?'none':'mask'");


        	obj.setCellProperty("body", obj.getBindCellIndex("body", "DS_DEPT"), "edittype", "expr:" + row + " >= 0 && (" + curRowType + " == '1' || " + curRowType + " == '4') && TY_STATUS =='4'?'none':'text'");




        	//trace(">>>>objGrid_oncellposchanged row:[" + row + "] curROwType:[" + curRowType +"] TY_STATUS:[" + tyStatus + "] strEditType:["+strEditType+"]" ) ;

        };

        this.divData_tabData_tab2_objGrid2_oncellclick = function(obj,e)
        {
        	var row = obj.currentrow;
        	var ynSalary = this.dsList1.getColumn(row, "YN_SALARY");
        	var curRowType = this.dsList1.getRowType(row) ;
        	var strEditType = obj.getCurEditType();

        	//trace("objGrid2_oncellclick row:[" + row + "] curROwType:[" + curRowType +"] YN_SALARY:[" + ynSalary + "] strEditType:["+strEditType+"]" ) ;

        	obj.setCellProperty("body", obj.getBindCellIndex("body", "AM_FITNESS"), "edittype", "expr:" + row + " >= 0 && (" + curRowType + " == '1' || " + curRowType + " == '4') && YN_SALARY =='Y'?'none':'mask'");
        	obj.setCellProperty("body", obj.getBindCellIndex("body", "DS_REMARK"), "edittype", "expr:" + row + " >= 0 && (" + curRowType + " == '1' || " + curRowType + " == '4') && YN_SALARY =='Y'?'none':'text'");

        };

        this.divData_tabData_tab2_objGrid2_oncellposchanged = function(obj,e)
        {
        	var row = obj.currentrow;
        	var ynSalary = this.dsList1.getColumn(row, "YN_SALARY");
        	var curRowType = this.dsList1.getRowType(row) ;
        	var strEditType = obj.getCurEditType();

        	//trace("objGrid2_oncellposchanged row:[" + row + "] curROwType:[" + curRowType +"] YN_SALARY:[" + ynSalary + "] strEditType:["+strEditType+"]" ) ;

        	obj.setCellProperty("body", obj.getBindCellIndex("body", "AM_FITNESS"), "edittype", "expr:" + row + " >= 0 && (" + curRowType + " == '1' || " + curRowType + " == '4') && YN_SALARY =='Y'?'none':'mask'");
        	obj.setCellProperty("body", obj.getBindCellIndex("body", "DS_REMARK"), "edittype", "expr:" + row + " >= 0 && (" + curRowType + " == '1' || " + curRowType + " == '4') && YN_SALARY =='Y'?'none':'text'");

        };

        this.fnTab1GridSetting = function(nrow){
        	if(this.dsList0.getColumn(nrow, "TY_STATUS") == "4"){	// 승인
        	}else{
        	}
        };

        // 전표발행
        this.fnIssueSlip = function(obj,e) {
        	this.fnSlipFormOpen("ISSUE");
        }

        //전표취소 처리
        this.fnCancelSlip = function (obj,e)
        {
        	this.fnSlipFormOpen("CANCEL");
        	/*
        	var CD_TRADE = this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE");
        	if (this.gfnIsNull(this.gfnTrim(CD_TRADE))) {
        		this.gfnAlert("전표번호는 필수입니다.");
        		return;
        	}

        	this.gfnConfirm("전표를 취소하시겠습니까?", "fnCancelSlip_callback");
        	*/

        };

        // 전표 발행/취소 팝업호출
        this.fnSlipFormOpen = function(tyAutoslip)  {
        	var param = {};
        	var tidx = this.divData.form.tabData.tabindex;
        	var nRowIdx0 = this.dsList0.rowposition;	// 학자금
        	var nRowIdx1 = this.dsList1.rowposition;	// 바디스타

        	param.TY_AUTOSLIP = tyAutoslip;	// ISSUE:전표발행 CANCEL:전표취소
        	param.GB_SALARY = (tidx == 0) ? "T" : "F"; // T:학자금 F:바디스타
        	param.YY_TUITION = (tidx == 0) ? this.dsList0.getColumn(nRowIdx0, "YY_TUITION") : "";
        	param.CD_TUITION = (tidx == 0) ? this.dsList0.getColumn(nRowIdx0, "CD_TUITION") : "";
        	param.YM_FITNESS = (tidx == 0) ? "" : this.dsList1.getColumn(nRowIdx1, "YM_FITNESS");
        	param.CD_CORP = (tidx == 0) ? this.dsList0.getColumn(nRowIdx0, "CD_CORP") : this.dsList1.getColumn(nRowIdx1, "CD_CORP");
        	param.DS_CORP = (tidx == 0) ? this.dsList0.getColumn(nRowIdx0, "DS_CORP") : this.dsList1.getColumn(nRowIdx1, "DS_CORP");
        	param.GR_SEARCH = this.FormInfo.GR_SEARCH;

        	this.gfnFormOpenNonAuth("DAB", "DAB_TUITION_ISSUE_SLIP_DLG", "fnSlipFormOpenCallback", param);
        }

        // 전표발행/취소 팝업호출 Callback
        this.fnSlipFormOpenCallback = function(strId, val)  {
        	if(val) {
        		this.gfnAlert("정상 처리되었습니다.");
        		this.FormBtns.Select.click();
        	}
        };

        //전표 조회
        this.fnSearchSlip = function (obj,e)
        {
        	var tidx = this.divData.form.tabData.tabindex;
        	var nRowIdx = (tidx == 0) ? this.dsList0.rowposition : this.dsList1.rowposition;
        	if(nRowIdx == -1 ) return;

        	var CD_TRADE =  (tidx == 0) ? this.dsList0.getColumn(nRowIdx, "CD_TRADE") : this.dsList1.getColumn(nRowIdx, "CD_TRADE");
        	if (this.gfnIsNull(this.gfnTrim(CD_TRADE))) {	// 전표번호
        		this.gfnAlert("전표번호는 필수입니다.");
        		return;
        	}

        	var param = {};
        	param.IUD_FLAG = "S";
        	param.CD_TRADE = this.gfnTrim(CD_TRADE);	// 전표번호
        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnPopupCallBack", param, this.getOffsetWidth(), this.getOffsetHeight());
        };

        // SMS알림
        this.fnSendSms = function (obj,e){
        	var tidx = this.divData.form.tabData.tabindex;
        	var objDs = (tidx == 0) ? this.dsList0 : this.dsList1;

        	trace("SMS rowcount->" + objDs.rowcount);
        	var arrChk = [];
        	for(var i = 0; i < objDs.rowcount; i++) {
        		if(objDs.getColumn(i, "CHK") == 1 && objDs.getColumn(i, this.ucFlag) != "#") {
        			arrChk.push(i);
        		}
        	}

        	if(arrChk.length == 0){
        		this.gfnAlert("선택한 자료가 없습니다. SMS 알림대상건을 선택하세요!");
        		return false;
        	}

        	this.dsSms = new Dataset();
        	this.dsSms.addColumn("ID_PERSON", "bigdecimal");
        	this.dsSms.addColumn("ID_SABUN", "string");
        	this.dsSms.addColumn("ID_LOGIN", "string");

        	this.dsSms.addColumn("YY_TUITION", "string");
        	this.dsSms.addColumn("CD_TUITION", "string");
        	this.dsSms.addColumn("NO_SEQ", "bigdecimal");

        	this.dsSms.addColumn("YM_FITNESS", "string");

        	this.dsSms.clearData();

        	for(var i = 0; i < objDs.rowcount; i++){
        		if(objDs.getColumn(i, "CHK") != 1 ) continue;

        		var nrow = this.dsSms.addRow();

        		this.dsSms.setColumn(nrow, "ID_PERSON", objDs.getColumn(i, "ID_PERSON"));
        		this.dsSms.setColumn(nrow, "ID_SABUN", objDs.getColumn(i, "ID_SABUN"));
        		this.dsSms.setColumn(nrow, "ID_LOGIN", this.AuthClient.ID_USER);
        		if(tidx == 0){	// 학자금
        			this.dsSms.setColumn(nrow, "YY_TUITION", objDs.getColumn(i, "YY_TUITION"));	// 지급년도
        			this.dsSms.setColumn(nrow, "CD_TUITION", objDs.getColumn(i, "CD_TUITION"));	// 지급분기
        			this.dsSms.setColumn(nrow, "NO_SEQ", objDs.getColumn(i, "NO_SEQ"));	// 순번
        		}else{
        			this.dsSms.setColumn(nrow, "YM_FITNESS", objDs.getColumn(i, "YM_FITNESS"));	// 관리년월
        		}
        	}

        	trace("SMS알림 :" + this.dsSms.saveXML());

        	if (this.dsSms.rowcount == 0) return;

        	// saveSms0 : DABPR_TUITION_MSG_INSERT
        	// saveSms1 : DABPR_FITNESS_MSG_INSERT

        	var strSvcId    = "saveSms";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "saveSms"+tidx+"=dsSms";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]

        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboCD_TUITION.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.cboTY_STATUS.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.divData.form.tabData.tab1.form.objGrid.addEventHandler("oncellclick",this.divData_tabData_tab1_objGrid_oncellclick,this);
            this.divData.form.tabData.tab1.form.objGrid.addEventHandler("oncellposchanged",this.divData_tabData_tab1_objGrid_oncellposchanged,this);
            this.divData.form.tabData.tab2.form.objGrid2.addEventHandler("oncellclick",this.divData_tabData_tab2_objGrid2_oncellclick,this);
            this.divData.form.tabData.tab2.form.objGrid2.addEventHandler("oncellposchanged",this.divData_tabData_tab2_objGrid2_oncellposchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAB_TUITION_APPROVAL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
