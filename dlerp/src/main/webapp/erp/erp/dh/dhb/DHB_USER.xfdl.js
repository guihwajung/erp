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
            this.set_titletext("회계사용자관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"GR_ORGANIZE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SITE_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"YN_MAGAM_MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"YN_MAGAM_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_INSERT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_UPDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_INSERT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_UPDATE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SLIPACCEPT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DEPT_MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DEPT_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DEPT_FS\" type=\"STRING\" size=\"256\"/><Column id=\"YN_BUDGET\" type=\"STRING\" size=\"256\"/><Column id=\"YN_USE1\" type=\"STRING\" size=\"256\"/><Column id=\"YN_USE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHBPR_USER_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHBPR_USER_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHBPR_USER_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHBPR_USER_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_ACNT","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_ACNT","staCD_DEPT_ACNT:0.0","10.0","270","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("60");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","180",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divDataTop:10",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta36","694","30","100","59",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("기타참고정보");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("sta37","sta36:-1","30","324","30",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("sta38","sta36:-1","59","324","30",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("sta39","697","2","406","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("3");
            obj.set_text("부서정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new CheckBox("YN_SLIPACCEPT","sta36:10","35","97","19",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("4");
            obj.set_text("전표발행여부");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_value("");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new CheckBox("YN_DEPT_MONTH","YN_SLIPACCEPT:7","35","87","19",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("5");
            obj.set_text("월마감여부");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_value("");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new CheckBox("YN_DEPT_VAT","YN_DEPT_MONTH:7","35","107","19",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("6");
            obj.set_text("부가세관리여부");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_value("");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new CheckBox("YN_USE1","sta36:10","64","87","19",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("7");
            obj.set_text("사용여부");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_value("");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new CheckBox("YN_BUDGET","YN_USE1:17","64","97","19",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("8");
            obj.set_text("예산관리");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_value("");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("sta00","11","31","119","30",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("9");
            obj.set_text("사용자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("sta05","11","60","119","30",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("10");
            obj.set_text("사용자권한등급");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("sta06","11","89","119","30",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("11");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("sta07","11","118","119","30",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("12");
            obj.set_text("수정자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("sta09","129","31","204","30",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("sta15","129","60","204","30",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("sta17","129","89","204","30",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("sta24","129","118","204","30",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("sta25","332","31","87","30",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("17");
            obj.set_text("등록일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("sta27","332","60","87","30",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("18");
            obj.set_text("수정일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("sta40","418","31","204","30",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("sta41","418","60","204","30",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("sta42","10","4","614","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("21");
            obj.set_text("사용자정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Edit("GR_ORGANIZE","140","65","182","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("22");
            obj.set_readonly("true");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Edit("DT_UPDATE","427","65","187","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("23");
            obj.set_readonly("true");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Edit("ID_INSERT","140","94","183","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("24");
            obj.set_readonly("true");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Edit("ID_UPDATE","139","123","184","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("25");
            obj.set_readonly("true");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Edit("DT_INSERT","427","36","187","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("26");
            obj.set_readonly("true");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Edit("ID_SABUN","140","36","89","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("27");
            obj.set_readonly("true");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Edit("DS_NAME","234","36","88","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("28");
            obj.set_readonly("true");
            this.divData.form.divDataBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.divDataBottom.form.YN_SLIPACCEPT","value","dsList","YN_SLIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.divDataBottom.form.YN_DEPT_MONTH","value","dsList","YN_MAGAM_MONTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divDataBottom.form.YN_DEPT_VAT","value","dsList","YN_MAGAM_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divDataBottom.form.YN_USE1","value","dsList","YN_USE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataBottom.form.YN_BUDGET","value","dsList","YN_BUDGET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataBottom.form.GR_ORGANIZE","value","dsList","GR_ORGANIZE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataBottom.form.DT_UPDATE","value","dsList","DT_UPDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataBottom.form.ID_INSERT","value","dsList","ID_INSERT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataBottom.form.ID_UPDATE","value","dsList","ID_UPDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataBottom.form.DT_INSERT","value","dsList","DT_INSERT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataBottom.form.ID_SABUN","value","dsList","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataBottom.form.DS_NAME","value","dsList","DS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch.form.ccfCD_DEPT_ACNT.form.CDTextBox","value","dsSearch","CD_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHB_USER.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	//this.fnSetButton();
        	//this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_CORP) && !this.gfnIsNull(this.getOwnerFrame().CD_DEPT_ACNT))
        	{
        		this.dsSearch.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.getOwnerFrame().DS_CORP);
        		this.dsSearch.setColumn(0, "CD_DEPT_ACNT", this.getOwnerFrame().CD_DEPT_ACNT);
        		this.ccfCD_DEPT_ACNT.form.DSTextBox.set_value(this.getOwnerFrame().DS_DEPT_ACNT);

        		this.FormBtns.Select.click();
        	}

        	else{
        		this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		//this.dsSearch.setColumn(0, "CD_DEPT_ACNT", this.UserInfo.LEVCD_DEPT_ACNT_DOWN);
        		//this.divSearch.form.ccfCD_DEPT_ACNT.form.fnCodeFindLoad();
        	}

        // 	if(this.FormInfo.GR_SEARCH  > 1){
        // 		this.divSearch.form.ccfCD_CORP.set_enable(false);
        // 	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
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
            this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPT_ACNT = this.divSearch.form.ccfCD_DEPT_ACNT;
        	this.YN_SLIPACCEPT = this.divData.form.divDataBottom.form.YN_SLIPACCEPT;
        	this.YN_BUDGET = this.divData.form.divDataBottom.form.YN_BUDGET;
        	this.YN_DEPT_MONTH = this.divData.form.divDataBottom.form.YN_DEPT_MONTH;
        	this.YN_DEPT_VAT = this.divData.form.divDataBottom.form.YN_DEPT_VAT;
        	this.YN_USE1 = this.divData.form.divDataBottom.form.YN_USE1;
        	this.dxGrid = this.divData.form.divDataTop.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_DEPT_ACNT.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_DEPT_ACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	//this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT_ACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHB_USER");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("ID_SABUN", "string");
        	this.dsInsert.addColumn("DS_HNAME", "string");
        	this.dsInsert.addColumn("GR_ORGANIZE", "string");
        	this.dsInsert.addColumn("CD_DEPT_ACNT", "string");
        	this.dsInsert.addColumn("YN_SLIP", "string");
        	this.dsInsert.addColumn("YN_MAGAM_MONTH", "string");
        	this.dsInsert.addColumn("YN_MAGAM_VAT", "string");
        	this.dsInsert.addColumn("YN_MAGAM_FS", "string");
        	this.dsInsert.addColumn("YN_JUNDO", "string");
        	this.dsInsert.addColumn("YN_USE", "string");
        	this.dsInsert.addColumn("YN_CHARGE", "string");
        	this.dsInsert.addColumn("YN_MANAGE", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");
        	this.dsInsert.addColumn("YN_SLIP_OK", "string");
        	this.dsInsert.addColumn("YN_SITE_SLIP", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("ID_SABUN", "string");
        	this.dsUpdate.addColumn("GR_ORGANIZE", "string");
        	this.dsUpdate.addColumn("CD_DEPT_ACNT", "string");
        	this.dsUpdate.addColumn("YN_SLIP", "string");
        	this.dsUpdate.addColumn("YN_MAGAM_MONTH", "string");
        	this.dsUpdate.addColumn("YN_MAGAM_VAT", "string");
        	this.dsUpdate.addColumn("YN_MAGAM_FS", "string");
        	this.dsUpdate.addColumn("YN_JUNDO", "string");
        	this.dsUpdate.addColumn("YN_USE", "string");
        	this.dsUpdate.addColumn("YN_CHARGE", "string");
        	this.dsUpdate.addColumn("YN_MANAGE", "string");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");
        	this.dsUpdate.addColumn("YN_SLIP_OK", "string");
        	this.dsUpdate.addColumn("YN_SITE_SLIP", "string");
        	this.dsUpdate.addColumn("CD_DEPT_WORKER", "string");
        	this.dsUpdate.addColumn("CD_DEPT", "string")

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("ID_SABUN", "string");
        	this.dsDelete.addColumn("CD_DEPT_ACNT", "string");

        	this.dsSelectUser = new Dataset();
        	this.dsSelectUser.addColumn("ID_USER", "string");
        	this.dsSelectUser.addColumn("CD_DEPT", "string");
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

        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "CD_DEPT_ACNT",this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        	//this.dsSelect.setColumn(0, "CD_SYSTEM", this.dsSearch.getColumn(0, "CD_SYSTEM"));

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
        	var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        	this.dsList.set_enableevent(false);
        	this.dsList.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsList.setColumn(nrow, "DS_CORP", this.ccfCD_CORP.form.DSTextBox.value);
        	this.dsList.setColumn(nrow, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        	this.dsList.setColumn(nrow, "DS_DEPT_ACNT", this.ccfCD_DEPT_ACNT.form.DSTextBox.value);
        	this.dsList.setColumn(nrow, "YN_MANAGE", "N");
        	this.dsList.setColumn(nrow, "YN_SLIP_OK", "N");
        	this.dsList.set_enableevent(true);
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

        	// 그리드 필수항목 체크
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
        				this.dsInsert.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        				this.dsInsert.setColumn(nrow, "DS_HNAME", this.dsList.getColumn(i, "DS_NAME"));
        				this.dsInsert.setColumn(nrow, "GR_ORGANIZE", this.dsList.getColumn(i, "GR_ORGANIZE"));
        				this.dsInsert.setColumn(nrow, "CD_DEPT_ACNT", this.dsList.getColumn(i, "CD_DEPT_ACNT"));
        				this.dsInsert.setColumn(nrow, "YN_SLIP", this.dsList.getColumn(i, "YN_SLIP"));
        				this.dsInsert.setColumn(nrow, "YN_MAGAM_MONTH", this.dsList.getColumn(i, "YN_MAGAM_MONTH"));
        				this.dsInsert.setColumn(nrow, "YN_MAGAM_VAT", this.dsList.getColumn(i, "YN_MAGAM_VAT"));
        				this.dsInsert.setColumn(nrow, "YN_MAGAM_FS", this.dsList.getColumn(i, "YN_MAGAM_FS"));
        				this.dsInsert.setColumn(nrow, "YN_JUNDO", this.dsList.getColumn(i, "YN_JNDO"));
        				this.dsInsert.setColumn(nrow, "YN_USE", this.dsList.getColumn(i, "YN_USE"));
        				this.dsInsert.setColumn(nrow, "YN_CHARGE", this.dsList.getColumn(i, "YN_CHARGE"));
        				this.dsInsert.setColumn(nrow, "YN_MANAGE", this.dsList.getColumn(i, "YN_MANAGE"));
        				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				this.dsInsert.setColumn(nrow, "YN_SLIP_OK", this.dsList.getColumn(i, "YN_SLIP_OK"));
        				this.dsInsert.setColumn(nrow, "YN_SITE_SLIP", this.dsList.getColumn(i, "YN_SLIP"));
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        				this.dsUpdate.setColumn(nrow, "GR_ORGANIZE", this.dsList.getColumn(i, "GR_ORGANIZE"));
        				this.dsUpdate.setColumn(nrow, "CD_DEPT_ACNT", this.dsList.getColumn(i, "CD_DEPT_ACNT"));
        				this.dsUpdate.setColumn(nrow, "YN_SLIP", this.dsList.getColumn(i, "YN_SLIP"));
        				this.dsUpdate.setColumn(nrow, "YN_MAGAM_MONTH", this.dsList.getColumn(i, "YN_MAGAM_MONTH"));
        				this.dsUpdate.setColumn(nrow, "YN_MAGAM_VAT", this.dsList.getColumn(i, "YN_MAGAM_VAT"));
        				this.dsUpdate.setColumn(nrow, "YN_MAGAM_FS", this.dsList.getColumn(i, "YN_MAGAM_FS"));
        				this.dsUpdate.setColumn(nrow, "YN_JUNDO", this.dsList.getColumn(i, "YN_JNDO"));
        				this.dsUpdate.setColumn(nrow, "YN_USE", this.dsList.getColumn(i, "YN_USE"));
        				this.dsUpdate.setColumn(nrow, "YN_CHARGE", this.dsList.getColumn(i, "YN_CHARGE"));
        				this.dsUpdate.setColumn(nrow, "YN_MANAGE", this.dsList.getColumn(i, "YN_MANAGE"));
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				this.dsUpdate.setColumn(nrow, "YN_SLIP_OK", this.dsList.getColumn(i, "YN_SLIP_OK"));
        				this.dsUpdate.setColumn(nrow, "YN_SITE_SLIP", this.dsList.getColumn(i, "YN_SLIP"));
        				this.dsUpdate.setColumn(nrow, "CD_DEPT_WORKER", this.AuthClient.CD_DEPT);
        				this.dsUpdate.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));

        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        				this.dsDelete.setColumn(nrow, "CD_DEPT_ACNT", this.dsList.getColumn(i, "CD_DEPT_ACNT"));
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
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
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.", "fnVaidateCallback");
        		return false;
        	}

        // 	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT_ACNT"))) {
        // 		// Alert후 실행할 처리
        // 		this.fnVaidateCallback = function() {
        // 			this.ccfCD_DEPT_ACNT.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("귀속부서를 입력하세요.", "fnVaidateCallback");
        // 		return false;
        // 	}
        //
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
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_CORP") {
        		//dsUserParam.setColumn(nrow, "LEVLV_DEPT", this.UserInfo.LEVLV_DEPT_ACNT);
        		//dsUserParam.setColumn(nrow, "LEVCD_DEPT", this.UserInfo.LEVCD_DEPT_ACNT);
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}
        	if (id == "ccfCD_DEPT_ACNT") {
        		 var cdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        		if(this.gfnIsNull(cdCorp)) {
        			this.gfnAlert("법인코드를 먼저 입력하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");						//전표발행여부
        		dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);					//법인코드
        		dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        		dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER", this.AuthClient.LEVCD_DEPT_UPPER);
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_CORP") {
        		this.ccfCD_DEPT_ACNT.form.fnCodeFindClear();
        	}
        }

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
        	if (id == "DHX_CFCORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}
         	if (id == "DHX_CFUSERBYCORP") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
         	}

         	if (id == "DHX_CFIDSABUN") {
        		var cdCorp = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        		dsUserParam.setColumn(nrow, "YN_OFFICER", "01");
        		//dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        		dsUserParam.setColumn(nrow, "CD_CORP", "");
         	}

        	if (id == "DHX_CFACNTUNIT") {
        		var cdCorp = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        		if(this.gfnIsNull(cdCorp)) {
        			this.gfnAlert("법인코드를 먼저 입력하세요.");
        			return false;
        		}
        		//var cdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");						//전표발행여부
        		dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);					//법인코드
        		dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        		dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER", this.AuthClient.LEVCD_DEPT_UPPER);
         	}
        	return true;
        };

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	if(id == "DHX_CFCORP") {
        		this.dsList.setColumn(this.dsList.rowposition, "CD_DEPT_ACNT", "");
        		this.dsList.setColumn(this.dsList.rowposition, "DS_DEPT_ACNT", "");
        	}

        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		this.FormBtns.SubSelect.click();
        		obj.oldrow = -1;
        	}
        };

        this.dsList_canrowposchange = function(obj,e) {
        	var can_rowchange = true;
        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		if (flag == "I" || flag == "U" || flag == "D") {
        			can_rowchange = false;
        			break;
        		}
        	}
        	if(!can_rowchange) {
        		this._row = e.newrow;
        		this.gfnConfirm("변경된 데이터가 있습니다.\r\n계속 진행하시겠습니까?", "dsList_canrowposchange_callback");
        	}
        	return can_rowchange;
        }

        this.dsList_canrowposchange_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsList.set_enableevent(false);
        		this.dsList.set_rowposition(this._row);
        		this.dsList.set_enableevent(true);
        	}
        }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.divDataBottom.form.sta00.addEventHandler("onclick",this.Static_onclick,this);
            this.divData.form.divDataBottom.form.sta05.addEventHandler("onclick",this.Static_onclick,this);
            this.divData.form.divDataBottom.form.sta06.addEventHandler("onclick",this.Static_onclick,this);
            this.divData.form.divDataBottom.form.sta07.addEventHandler("onclick",this.Static_onclick,this);
            this.divData.form.divDataBottom.form.sta42.addEventHandler("onclick",this.sta08_onclick,this);
            this.divData.form.divDataBottom.form.GR_ORGANIZE.addEventHandler("onchanged",this.divData_divDataBottom_edt14_onchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHB_USER.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
