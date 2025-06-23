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
            this.set_titletext("미등록사승인요청(외주)");
            if (Form == this.constructor)
            {
                this._setFormPosition(610,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DCAPR_REGIST_TEMP_REQ_LIST_DC_INSERT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo1</Col><Col id=\"SP\">DCXPR_LICCOST_COMBO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"YR_REQ\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SJC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PRESIDENT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BUMUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DAEPYO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACCT_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REGION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UPTAE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UPJONG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_BUMUN\">01</Col><Col id=\"CD_LICCOST\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_BUMUN", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_LICCOST", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","98.69%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("미등록사 승인요청");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYR_REQ","5","40","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("년도");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_SJC","5","staYR_REQ:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("사업자등록번호");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_VENDOR","5","staNO_SJC:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("회사명");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","staYR_REQ:-1","40","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","staNO_SJC:-1","69","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3","staDS_VENDOR:-1","staBg2:-1","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_PRESIDENT","staBg1:-1","40","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("대표자");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg4","staDS_PRESIDENT:-1","40","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg04","104","243","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgNO_HP01","382","243","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DAEPYO","staBg2:-1","staDS_PRESIDENT:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("주민등록번호");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg5","staCD_DAEPYO:-1","69","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_BUMUN","5","127","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("공종");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_HP","staBg3:-1","staCD_DAEPYO:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("전화번호");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgNO_HP","staNO_HP:-1","98","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg01","staCD_BUMUN:-1","staBgNO_HP:-1","438","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_EMAIL","5","staCD_BUMUN:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("협력사 메일");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg02","staDS_EMAIL:-1","staBg01:-1","438","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_REGION","5","staDS_EMAIL:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("지역");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg00","staDS_REGION:-1","staBg02:-1","438","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_ZIP","5","staDS_REGION:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("우편번호");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg03","104","staBg00:-1","438","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNM_BUSINESS","5","staNO_ZIP:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("업태");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNM_SECTORS","staBg04:-1","staBg03:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_text("업종");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtYR_REQ","staYR_REQ:5","45","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_PRESIDENT","staDS_PRESIDENT:5","45","148","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_SJC","staNO_SJC:5","edtYR_REQ:9","147","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_DAEPYO","staCD_DAEPYO:5","edtDS_PRESIDENT:9","148","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_VENDOR","staDS_VENDOR:5","edtNO_SJC:9","147","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_HP","staNO_HP:5","edtCD_DAEPYO:9","148","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboCD_BUMUN","staCD_BUMUN:5","edtDS_VENDOR:9","95","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_innerdataset("dsCD_BUMUN");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboCD_LICCOST","ccboCD_BUMUN:3","edtDS_VENDOR:9","95","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_innerdataset("dsCD_LICCOST");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_EMAIL","staDS_EMAIL:5","ccboCD_BUMUN:9","426","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfDS_REGION","staDS_REGION:5","edtDS_EMAIL:9","426","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DQ_S05");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("34");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfNO_ZIP","staNO_ZIP:5","ccfDS_REGION:9","426","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("35");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNM_BUSINESS","staNM_BUSINESS:5","ccfNO_ZIP:9","147","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNM_SECTORS","staNM_SECTORS:5","ccfNO_ZIP:9","148","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","25.41%","staBg04:30","110","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_text("미등록사 승인요청");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","55.08%","staBgNO_HP01:30","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ccboCD_BUMUN","value","dsData","CD_BUMUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ccboCD_LICCOST","value","dsData","CD_LICCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.edtYR_REQ","value","dsData","YR_REQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.edtNO_SJC","value","dsData","NO_SJC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.edtDS_PRESIDENT","value","dsData","DS_PRESIDENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.edtDS_VENDOR","value","dsData","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.edtDS_EMAIL","value","dsData","DS_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.edtCD_DAEPYO","value","dsData","CD_DAEPYO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.edtNO_HP","value","dsData","NO_HP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.ccfDS_REGION.form.CDTextBox","value","dsData","DS_REGION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.ccfNO_ZIP.form.CDTextBox","value","dsData","NO_ZIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.ccfNO_ZIP.form.DSTextBox","value","dsData","DS_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.edtNM_BUSINESS","value","dsData","DS_UPTAE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.edtNM_SECTORS","value","dsData","DS_UPJONG");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCA_REGIST_TEMP_REQ_DC_DLG.xfdl", function() {
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

        	this.dsData.setColumn(0, "YR_REQ", this.gfnGetDate().substr(0,4));
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Select.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.edtYR_REQ = this.divData.form.edtYR_REQ;
        	this.edtNO_SJC = this.divData.form.edtNO_SJC;
        	this.edtDS_PRESIDENT = this.divData.form.edtDS_PRESIDENT;
        	this.edtDS_VENDOR = this.divData.form.edtDS_VENDOR;
        	this.ccboCD_BUMUN = this.divData.form.ccboCD_BUMUN;
        	this.ccboCD_LICCOST = this.divData.form.ccboCD_LICCOST;
        	this.edtDS_EMAIL = this.divData.form.edtDS_EMAIL;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("YR_REQ", "string");
        	this.dsInsert.addColumn("NO_SJC", "string");
        	this.dsInsert.addColumn("DS_PRESIDENT", "string");
        	this.dsInsert.addColumn("DS_VENDOR", "string");
        	this.dsInsert.addColumn("CD_BUMUN", "string");
        	this.dsInsert.addColumn("CD_LICCOST", "string");
        	this.dsInsert.addColumn("DS_EMAIL", "string");
        	this.dsInsert.addColumn("NO_HP", "string");
        	this.dsInsert.addColumn("ID_USER", "string");
        	this.dsInsert.addColumn("CD_DAEPYO", "string");
        	this.dsInsert.addColumn("CD_ACCT_GROUP", "string");
        	this.dsInsert.addColumn("NO_ZIP", "string");
        	this.dsInsert.addColumn("DS_ADDR", "string");
        	this.dsInsert.addColumn("DS_REGION", "string");
        	this.dsInsert.addColumn("DS_UPJONG", "string");
        	this.dsInsert.addColumn("DS_UPTAE", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsData.getColumn(0,"NO_SJC"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.edtNO_SJC.form.setFocus();
        		}
        		this.gfnAlert("사업자등록번호를 입력하세요.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsData.getColumn(0,"DS_PRESIDENT"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.edtDS_PRESIDENT.form.setFocus();
        		}
        		this.gfnAlert("대표자명을 입력하세요.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsData.getColumn(0, "DS_VENDOR"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.edtDS_VENDOR.setFocus();
        		}
        		this.gfnAlert("화사명을 입력하세요.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsData.getColumn(0, "CD_BUMUN"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccboCD_BUMUN.setFocus();
        		}
        		this.gfnAlert("품목을 선택하세요.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsData.getColumn(0, "DS_EMAIL"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.edtDS_EMAIL.setFocus();
        		}
        		this.gfnAlert("이메일을 입력하세요.", "fnVaidateCallback");
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
        	if (svcID == "save") {
        		if(errorCode == 0)
        		{
        			// this.close()가 작동하지 않았고,
        			// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        			this.getParentContext().close(true);
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
        	if (!this.fnValidate()) return false
        	this.dsInsert.clearData();
        	var nrow = this.dsInsert.addRow();

        	this.dsInsert.setColumn(nrow, "YR_REQ", this.dsData.getColumn(0, "YR_REQ"));
        	this.dsInsert.setColumn(nrow, "NO_SJC", this.dsData.getColumn(0, "NO_SJC"));
        	this.dsInsert.setColumn(nrow, "DS_PRESIDENT", this.dsData.getColumn(0, "DS_PRESIDENT"));
        	this.dsInsert.setColumn(nrow, "DS_VENDOR", this.dsData.getColumn(0, "DS_VENDOR"));
        	this.dsInsert.setColumn(nrow, "CD_BUMUN", this.dsData.getColumn(0, "CD_BUMUN"));
        	this.dsInsert.setColumn(nrow, "CD_LICCOST", this.dsData.getColumn(0, "CD_LICCOST"));
        	this.dsInsert.setColumn(nrow, "DS_EMAIL", this.dsData.getColumn(0, "DS_EMAIL"));
        	this.dsInsert.setColumn(nrow, "NO_HP", this.dsData.getColumn(0, "NO_HP"));
        	this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsInsert.setColumn(nrow, "CD_DAEPYO", this.dsData.getColumn(0, "CD_DAEPYO"));
        	this.dsInsert.setColumn(nrow, "CD_ACCT_GROUP", "");
        	this.dsInsert.setColumn(nrow, "NO_ZIP", this.dsData.getColumn(0, "NO_ZIP"));
        	this.dsInsert.setColumn(nrow, "DS_ADDR", this.dsData.getColumn(0, "DS_ADDR"));
        	this.dsInsert.setColumn(nrow, "DS_REGION", this.dsData.getColumn(0, "DS_REGION"));
        	this.dsInsert.setColumn(nrow, "DS_UPJONG", this.dsData.getColumn(0, "DS_UPJONG"));
        	this.dsInsert.setColumn(nrow, "DS_UPTAE", this.dsData.getColumn(0, "DS_UPTAE"));

        	if (this.dsInsert.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert";
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


        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };


        this.fnSetCombo = function()
        {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	//부문
        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(0, "CD_TYPE", "C01");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCD_BUMUN=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallbackCombo";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnCallbackCombo = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "combo") {
        		this.dsCD_BUMUN.insertRow(0);
        		this.dsCD_BUMUN.setColumn(0, "CD_CODE", "");
        		this.dsCD_BUMUN.setColumn(0, "DS_CODE", "전체");
        		this.divData.form.ccboCD_BUMUN.set_index(0);
        	}
        };

        this.fnSetCombo1 = function(cd_bumun)
        {
           this.dsCombo1 = new Dataset();
           this.dsCombo1.addColumn("CD_BUMUN", "string");

           //품목
           this.dsCombo1.addRow();
           this.dsCombo1.setColumn(0, "CD_BUMUN", cd_bumun);

           var strSvcId    = "combo1";
           var strSvcType  = "select";
           var inProc      = "_dsProc";
           var inData      = "combo1=dsCombo1";
           var outData     = "dsCD_LICCOST=combo10";
           var strArg      = "";
           var callBackFnc = "fnCallbackCombo1";

           this.gfnTransaction( strSvcId ,    // transaction을 구분하기 위한 svc id값
                          strSvcType ,    // transaction을 요청할 구분
                          inProc,         // Procedure 정보 Dataset 이름
                          inData ,       // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
                          outData ,       // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
                          strArg,       // 입력값으로 보낼 arguments, strFormData="20120607"
                          callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnCallbackCombo1 = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "combo1") {

        		this.dsCD_LICCOST.insertRow(0);
        		this.dsCD_LICCOST.setColumn(0, "CD_CODE", "");
        		this.dsCD_LICCOST.setColumn(0, "DS_CODE", "전체");
        		//this.divData.form.dsCD_LICCOST.set_index(0);
        	}
        };

        this.divSearch_ccboCD_BUMUN_onitemchanged = function(obj,e)
        {
           //e.postvalue
           if(e.prevalue != e.postvalue) {
              this.fnSetCombo1(e.postvalue);
           }
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.divData.form.staYR_REQ.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staBg2.addEventHandler("onclick",this.divData_staBg2_onclick,this);
            this.divData.form.staBg4.addEventHandler("onclick",this.divData_staBg2_onclick,this);
            this.divData.form.staBgNO_HP01.addEventHandler("onclick",this.divData_staBg2_onclick,this);
            this.divData.form.staBg5.addEventHandler("onclick",this.divData_staBg2_onclick,this);
            this.divData.form.staBgNO_HP.addEventHandler("onclick",this.divData_staBg2_onclick,this);
            this.divData.form.ccboCD_BUMUN.addEventHandler("onitemchanged",this.divSearch_ccboCD_BUMUN_onitemchanged,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
        };
        this.loadIncludeScript("DCA_REGIST_TEMP_REQ_DC_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
