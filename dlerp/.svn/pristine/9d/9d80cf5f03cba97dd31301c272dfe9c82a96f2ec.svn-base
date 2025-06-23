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
            this.set_titletext("신규사용자등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DSAPR_NEWCHECK_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_IDS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NO_IDS\"/><Col id=\"CD_SITE\"/><Col id=\"YM_WORK\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"val1\" type=\"STRING\" size=\"256\"/><Column id=\"val2\" type=\"STRING\" size=\"256\"/><Column id=\"val3\" type=\"STRING\" size=\"256\"/><Column id=\"val4\" type=\"STRING\" size=\"256\"/><Column id=\"val5\" type=\"STRING\" size=\"256\"/><Column id=\"val6\" type=\"STRING\" size=\"256\"/><Column id=\"val7\" type=\"STRING\" size=\"256\"/><Column id=\"val8\" type=\"STRING\" size=\"256\"/><Column id=\"val9\" type=\"STRING\" size=\"256\"/><Column id=\"val10\" type=\"STRING\" size=\"256\"/><Column id=\"val11\" type=\"STRING\" size=\"256\"/><Column id=\"val12\" type=\"STRING\" size=\"256\"/><Column id=\"val13\" type=\"STRING\" size=\"256\"/><Column id=\"val14\" type=\"STRING\" size=\"256\"/><Column id=\"val15\" type=\"STRING\" size=\"256\"/><Column id=\"val16\" type=\"STRING\" size=\"256\"/><Column id=\"val17\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"val1\"/><Col id=\"val2\"/><Col id=\"val3\"/><Col id=\"val4\"/><Col id=\"val5\"/><Col id=\"val6\"/><Col id=\"val7\"/><Col id=\"val8\"/><Col id=\"val9\"/><Col id=\"val10\"/><Col id=\"val11\"/><Col id=\"val12\"/><Col id=\"val13\"/><Col id=\"val14\"/><Col id=\"val15\"/><Col id=\"val16\"/><Col id=\"val17\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("새등록자");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staVal1","0","40","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("사업장관리번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staVal2","0","staVal1:-1","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("일용근로소득신고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","staVal1:-1","40","461","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","staVal2:-1","staBg1:-1","461","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","32.50%","360","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("신고서출력");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","52.50%","360","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtVal1","staVal1:4","staBg1:-25","258","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtVal2","staVal2:112","staBg2:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staVal3","0","staVal2:-1","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("하수급인관리번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00","staVal3:-1","staBg2:-1","461","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtVal3","staVal3:4","staBg2_00:-25","258","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new CheckBox("chk00","staVal2:6","staBg2:-25","104","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("사업자등록번호");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staVal4","0","127","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("보험사무대행기관번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_00","139","127","27%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_00_00","439","127","161","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staVal5","300","127","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("보험사무대행기관명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staVal6","0","156","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("휴대전화");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_00_01","139","156","27%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staVal7","300","156","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("FAX번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_00_00_00","439","156","161","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staVal8","0","185","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("고용관리책임자성명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_00_01_00","139","185","27%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staVal9","300","185","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_00_00_00_00","439","185","161","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staVal10","0","214","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_00_01_00_00","139","214","27%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staVal11","300","214","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_text("직무내용");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_00_00_00_00_00","439","214","161","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staVal12","0","243","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_text("근무지");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_00_01_00_00_00","139","243","27%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staVal17","300","243","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_text("지역명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_00_00_00_00_00_00","439","243","161","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staValYYYYMMDD","0","301","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_text("신고년월일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_00_01_00_00_00_00","139","301","461","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtVal4","144","132","152","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtVal5","445","132","151","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtVal6","144","161","152","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtVal7","445","161","151","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtVal8","144","190","152","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtVal9","445","190","151","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtVal10","144","219","152","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtVal17","445","248","151","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtVal13","144","306","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","207","300","20","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_text("년");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtVal14","234","306","40","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00_00","277","300","20","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            obj.set_text("월");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtVal15","304","306","40","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","347","300","20","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj.set_text("일");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staVal16","0","272","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_text("신고인");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_00_01_00_00_00_00_00","139","272","461","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtVal16","144","277","152","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("51");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboVal11","445","219","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("52");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divData_form_ccboVal11_innerdataset = new nexacro.NormalDataset("divData_form_ccboVal11_innerdataset", obj);
            divData_form_ccboVal11_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">01.인사/노무</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">02.회계/세무/경리</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">03.경영/관리</Col></Row><Row><Col id=\"codecolumn\">04</Col><Col id=\"datacolumn\">04.홍보/영업</Col></Row><Row><Col id=\"codecolumn\">05</Col><Col id=\"datacolumn\">05.기술/기능</Col></Row><Row><Col id=\"codecolumn\">06</Col><Col id=\"datacolumn\">06.기타</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_ccboVal11_innerdataset);
            obj.set_text("01.인사/노무");
            obj.set_value("01");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboVal12","144","248","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("53");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divData_form_ccboVal12_innerdataset = new nexacro.NormalDataset("divData_form_ccboVal12_innerdataset", obj);
            divData_form_ccboVal12_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">본사</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">해당 사업장(현장)</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">다른 사업장(현장)</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_ccboVal12_innerdataset);
            obj.set_text("본사");
            obj.set_value("01");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divData.form.edtVal1","value","dsList","val1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.edtVal2","value","dsList","val2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.edtVal3","value","dsList","val3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.edtVal4","value","dsList","val4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.edtVal5","value","dsList","val5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.edtVal6","value","dsList","val6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.edtVal7","value","dsList","val7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.edtVal8","value","dsList","val8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.edtVal9","value","dsList","val9");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.edtVal10","value","dsList","val10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.edtVal17","value","dsList","val17");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.edtVal13","value","dsList","val13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.edtVal14","value","dsList","val14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.edtVal15","value","dsList","val15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.edtVal16","value","dsList","val16");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.ccboVal12","value","dsList","val12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.ccboVal11","value","dsList","val11");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DSB_GUNRO_REPORT.xfdl", function() {
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

        	// 이전 화면에서 데이터 받기.
        	this.dsData.setColumn(0, "NO_IDS", this.getOwnerFrame().NO_IDS);
        	this.dsData.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        	this.dsData.setColumn(0, "YM_WORK", this.getOwnerFrame().YM_WORK);
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
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        };
        /*
         *	저장 Validate
         */
        this.fnSaveValidate = function() {
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
        		if(errorCode == 0)
        		{
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
        	var param = {};

        	var sitecd =  this.getOwnerFrame().CD_SITE;
        	var idnos = this.getOwnerFrame().NO_IDS;
        	var workym = this.getOwnerFrame().YM_WORK;

        	var val1 = this.dsList.getColumn(0, "val1");
        	var val2 = this.dsList.getColumn(0, "val2");
        	var val3 = this.dsList.getColumn(0, "val3");
        	var val4 = this.dsList.getColumn(0, "val4");
        	var val5 = this.dsList.getColumn(0, "val5");
        	var val6 = this.dsList.getColumn(0, "val6");
        	var val7 = this.dsList.getColumn(0, "val7");
        	var val8 = this.dsList.getColumn(0, "val8");
        	var val9 = this.dsList.getColumn(0, "val9");
        	var val10 = this.dsList.getColumn(0, "val10");
        	var val11 = this.dsList.getColumn(0, "val11");
        	var val12 = this.dsList.getColumn(0, "val12");
        	var val13 = this.dsList.getColumn(0, "val13");
        	var val14 = this.dsList.getColumn(0, "val14");
        	var val15 = this.dsList.getColumn(0, "val15");
        	var val16 = this.dsList.getColumn(0, "val16");
        	var val17 = this.dsList.getColumn(0, "val17");

        	var strReportName = "/ds/cmbd0124jl.ozr";

        	param.REPORT_NAME = strReportName;
        	param.JSONPARAM = "{\"sitecd\":\""+ sitecd
        	             + "\", \"idnos\":\"" + idnos
        				 + "\", \"workym\":\"" + workym
        				 + "\", \"val1\":\"" + val1
        				 + "\", \"val2\":\"" + val2
        				 + "\", \"val3\":\"" + val3
        				 + "\", \"val4\":\"" + val4
        				 + "\", \"val5\":\"" + val5
        				 + "\", \"val6\":\"" + val6
        				 + "\", \"val7\":\"" + val7
        				 + "\", \"val8\":\"" + val8
        				 + "\", \"val9\":\"" + val9
        				 + "\", \"val10\":\"" + val10
        				 + "\", \"val11\":\"" + val11
        				 + "\", \"val12\":\"" + val12
        				 + "\", \"val13\":\"" + val13
        				 + "\", \"val14\":\"" + val14
        				 + "\", \"val15\":\"" + val15
        				 + "\", \"val16\":\"" + val16
        				 + "\", \"val17\":\"" + val17
        				 + "\"}";

        	console.log(param);
        	this.gfnFormOpenNonAuth("DZU", "DZU_OZ", "", param, 900, 650);
        };

        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staVal1.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
        };
        this.loadIncludeScript("DSB_GUNRO_REPORT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
