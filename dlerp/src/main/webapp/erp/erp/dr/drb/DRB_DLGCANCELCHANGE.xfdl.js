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
            this.set_titletext("일정등록");
            this.getSetter("maxwidth").set("630");
            this.getSetter("maxheight").set("350");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,310);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DRBPR_PROVISIONAL_CANCEL</Col></Row><Row><Col id=\"SP\">DRBPR_PROVISIONAL_TRANSFER</Col><Col id=\"TARGET\">exec</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_STATE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CHANGED\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PROVISIONAL\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PLANCONTRACT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PROVISIONAL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BANK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NO_JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SUPPLIED\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TY_STATE\"/><Col id=\"DT_CHANGED\"/><Col id=\"DT_PROVISIONAL\"/><Col id=\"DT_PLANCONTRACT\"/><Col id=\"AM_PROVISIONAL\"/><Col id=\"CD_GUJA\"/><Col id=\"DS_BANK\"/><Col id=\"NO_GUJA\"/><Col id=\"DS_NAME\"/><Col id=\"NO_JUMIN\"/><Col id=\"NO_TEL\"/><Col id=\"YN_SUPPLIED\">N</Col><Col id=\"DS_ADDR1\"/><Col id=\"DS_ADDR2\"/><Col id=\"CD_ACNTUNIT\"/><Col id=\"NO_HO\"/><Col id=\"NO_FLOOR\"/><Col id=\"NO_DONG\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_SUPPLIED", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">지급</Col><Col id=\"CD_CODE\">Y</Col></Row><Row><Col id=\"DS_CODE\">미지급</Col><Col id=\"CD_CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("계약내역");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE","0","65","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("가계약일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SILHENG","0","staDS_SITE:-1","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("가계약금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_APPROVAL","0","123","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_CONFIRM","0","staTY_APPROVAL:-1","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","staDS_SITE:-1","65","128","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","staDS_SILHENG:-1","94","128","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3","staTY_APPROVAL:-1","123","128","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg4","staDT_CONFIRM:-1","staBg3:-1","128","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","32.50%","246","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","52.50%","246","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_PROVISIONAL","116","70","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg00","111","36","128","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE00","0","36","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtTY_STATE","115","41","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_PROVISIONAL","115","99","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_limitbymask("both");
            obj.set_format("###,###,###,###,###");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_NAME","115","128","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg01","111","181","483","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_CONFIRM00","0","181","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_TEL","115","157","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_ADDR1","115","186","223","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_ADDR2","341","186","245","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_START01","221","99","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg02","349","36","245","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE01","238","36","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_text("해약일자");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg03","349","65","245","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE02","238","65","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_text("본계약예정일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg04","349","94","245","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE03","238","94","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_text("입금계좌");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_CHANGED","353","41","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_GUJA","353","99","27","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_PLANCONTRACT","353","70","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_BANK","383","99","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_GUJA","486","99","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg05","349","123","245","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE04","238","123","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg06","349","152","245","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE05","238","152","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_text("지급여부");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_SUPPLIED","353","158","222","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_innerdataset("dsYN_SUPPLIED");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("계속근로");
            obj.set_value("Y");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_JUMIN","353","128","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divData.form.rdoYN_SUPPLIED","value","dsData","YN_SUPPLIED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.tclDT_PROVISIONAL","value","dsData","DT_PROVISIONAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.edtTY_STATE","value","dsData","TY_STATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.mskAM_PROVISIONAL","value","dsData","AM_PROVISIONAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.edtDS_NAME","value","dsData","DS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.edtNO_TEL","value","dsData","NO_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.edtDS_ADDR1","value","dsData","DS_ADDR1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.edtDS_ADDR2","value","dsData","DS_ADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.edtCD_GUJA","value","dsData","CD_GUJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.tclDT_CHANGED","value","dsData","DT_CHANGED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.tclDT_PLANCONTRACT","value","dsData","DT_PLANCONTRACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.edtDS_BANK","value","dsData","DS_BANK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.edtNO_GUJA","value","dsData","NO_GUJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.edtNO_JUMIN","value","dsData","NO_JUMIN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DRB_DLGCANCELCHANGE.xfdl", function() {
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

        	this.staTITLE.set_text("가게약해약관리 (" + this.getOwnerFrame().DONG + "동 " + this.getOwnerFrame().FLOOR + " 층 " + this.getOwnerFrame().HO + " 호)");

        	this.dsData.setColumn(0, "TY_STATE", "해약");

        	this.dsData.setColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        	this.dsData.setColumn(0, "NO_DONG", this.getOwnerFrame().DONG);
        	this.dsData.setColumn(0, "NO_FLOOR", this.getOwnerFrame().FLOOR);
        	this.dsData.setColumn(0, "NO_HO", this.getOwnerFrame().HO);
        	this.dsData.setColumn(0, "DT_PROVISIONAL", this.getOwnerFrame().txtDT_PROVISIONAL);
        	this.dsData.setColumn(0, "DT_PLANCONTRACT", this.getOwnerFrame().txtDT_PLANCONTRACT);
        	this.dsData.setColumn(0, "AM_PROVISIONAL", this.getOwnerFrame().txtAM_PROVISIONAL);
        	this.dsData.setColumn(0, "CD_GUJA", this.getOwnerFrame().txtCD_GUJA);
        	this.dsData.setColumn(0, "DS_BANK", this.getOwnerFrame().txtDS_BANK);
        	this.dsData.setColumn(0, "NO_GUJA", this.getOwnerFrame().txtNO_GUJA);
        	this.dsData.setColumn(0, "DS_NAME", this.getOwnerFrame().txtDS_NAME);
        	this.dsData.setColumn(0, "NO_JUMIN", this.getOwnerFrame().txtNO_JUMIN);
        	this.dsData.setColumn(0, "NO_TEL", this.getOwnerFrame().txtNO_TEL);
        	this.dsData.setColumn(0, "DS_ADDR1", this.getOwnerFrame().txtDS_ADDR1);
        	this.dsData.setColumn(0, "DS_ADDR2", this.getOwnerFrame().txtDS_ADDR2);


        	//적용년도 셋팅
        	/*
        	var today = this.gfnGetDate();
        	this.dsData.setColumn(0, "YM_BASE", today.substring(0,6));
        	this.dsData.setColumn(0, "DT_PLANFROM", today);
        	this.dsData.setColumn(0, "DT_PLANTO", today);
        	*/
        	//this.fnTycorpEnable();


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

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	//this.dxGrid = this.divData.form.objGrid;


        	this.staTITLE = this.divData.form.staTITLE;
        	this.edtTY_STATE = this.divData.form.edtTY_STATE;
        	this.tclDT_CHANGED = this.divData.form.tclDT_CHANGED;
        	this.tclDT_PROVISIONAL = this.divData.form.tclDT_PROVISIONAL;
        	this.tclDT_PLANCONTRACT = this.divData.form.tclDT_PLANCONTRACT;
        	this.mskAM_PROVISIONAL = this.divData.form.mskAM_PROVISIONAL;
        	this.edtCD_GUJA = this.divData.form.edtCD_GUJA;
        	this.edtDS_BANK = this.divData.form.edtDS_BANK;
        	this.edtNO_GUJA = this.divData.form.edtNO_GUJA;
        	this.edtDS_NAME = this.divData.form.edtDS_NAME;
        	this.edtNO_JUMIN = this.divData.form.edtNO_JUMIN;
        	this.edtNO_TEL = this.divData.form.edtNO_TEL;
        	this.rdoYN_SUPPLIED = this.divData.form.rdoYN_SUPPLIED;
        	this.edtDS_ADDR1 = this.divData.form.edtDS_ADDR1;
        	this.edtDS_ADDR2 = this.divData.form.edtDS_ADDR2;
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
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_ACNTUNIT", "string");
        	this.dsSave.addColumn("TY_GUBUN", "string");
        	this.dsSave.addColumn("NO_CHASU", "string");
        	this.dsSave.addColumn("NO_PROVISIONAL", "string");
        	this.dsSave.addColumn("NO_DONG", "string");
        	this.dsSave.addColumn("NO_FLOOR", "string");
        	this.dsSave.addColumn("NO_HO", "string");
        	this.dsSave.addColumn("DT_CHANGED", "string");
        	this.dsSave.addColumn("YN_SUPPLIED", "string");
        	this.dsSave.addColumn("ID_UPDATE", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("CD_ACNTUNIT", "string");
        	this.dsExec.addColumn("TY_GUBUN", "string");
        	this.dsExec.addColumn("NO_CHASU", "string");
        	this.dsExec.addColumn("NO_PROVISIONAL", "string");
        	this.dsExec.addColumn("NO_DONG", "string");
        	this.dsExec.addColumn("NO_FLOOR", "string");
        	this.dsExec.addColumn("NO_HO", "string");
        	this.dsExec.addColumn("DT_CHANGED", "string");
        	this.dsExec.addColumn("NO_TRANSDONG", "string");
        	this.dsExec.addColumn("NO_TRANSFLOOR", "string");
        	this.dsExec.addColumn("NO_TRANSHO", "string");
        	this.dsExec.addColumn("ID_UPDATE", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

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
        	if (svcID == "save") {
        		if(errorCode == 0)
        		{
        			this.fnExec();
        		}else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "exec") {
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
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if(id == "cfCD_CORP") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}

        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        // 확인 버튼 클릭
        this.divData_btnOk_onclick = function(obj,e)
        {
        	if (!this.fnSaveValidate()) return false;

        	this.dsSave.clearData();
        	this.dsSave.addRow();

        	this.dsSave.setColumn(0, "CD_ACNTUNIT", this.dsData.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSave.setColumn(0, "TY_GUBUN", this.dsData.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSave.setColumn(0, "NO_CHASU", this.dsData.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSave.setColumn(0, "NO_PROVISIONAL", this.dsData.getColumn(0, "NO_PROVISIONAL"));
        	this.dsSave.setColumn(0, "NO_DONG", this.dsData.getColumn(0, "NO_DONG"));
        	this.dsSave.setColumn(0, "NO_FLOOR", this.dsData.getColumn(0, "NO_FLOOR"));
        	this.dsSave.setColumn(0, "NO_HO", this.dsData.getColumn(0, "NO_HO"));
        	this.dsSave.setColumn(0, "DT_CHANGED", this.dsData.getColumn(0, "DT_CHANGED"));
        	this.dsSave.setColumn(0, "YN_SUPPLIED", this.dsData.getColumn(0, "YN_SUPPLIED"));
        	this.dsSave.setColumn(0, "ID_UPDATE", this.AuthClient.ID_USER);

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
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

        this.fnExec = function(obj,e)
        {
        	if (!this.fnSaveValidate()) return false;

        	this.dsExec.clearData();
        	this.dsExec.addRow();

        	this.dsExec.setColumn(0, "CD_ACNTUNIT", this.dsData.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsExec.setColumn(0, "TY_GUBUN", this.dsData.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsExec.setColumn(0, "NO_CHASU", this.dsData.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsExec.setColumn(0, "NO_PROVISIONAL", this.dsData.getColumn(0, "NO_PROVISIONAL"));
        	this.dsExec.setColumn(0, "NO_DONG", this.dsData.getColumn(0, "NO_DONG"));
        	this.dsExec.setColumn(0, "NO_FLOOR", this.dsData.getColumn(0, "NO_FLOOR"));
        	this.dsExec.setColumn(0, "NO_HO", this.dsData.getColumn(0, "NO_HO"));
        	this.dsExec.setColumn(0, "DT_CHANGED", this.dsData.getColumn(0, "DT_CHANGED"));
        	this.dsExec.setColumn(0, "NO_TRANSDONG", "");
        	this.dsExec.setColumn(0, "NO_TRANSFLOOR", "");
        	this.dsExec.setColumn(0, "NO_TRANSHO", "");
        	this.dsExec.setColumn(0, "ID_UPDATE", this.AuthClient.ID_USER);

        	var strSvcId    = "exec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "exec=dsExec";
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


        this.fnSaveValidate = function() {
        	var validate = true;


        	if (this.gfnIsNull(this.dsData.getColumn(0,"DT_CHANGED"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.tclDT_CHANGED.setFocus();
        		}
        		this.gfnAlert("해약일자는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}
        	else if (this.dsData.getColumn(0,"DT_CHANGED") < this.dsData.getColumn(0,"DT_PROVISIONAL")) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.tclDT_CHANGED.setFocus();
        		}
        		this.gfnAlert("해약일자는 가계약일자보다 크거나 같아야 합니다!", "fnVaidateCallback");
        	}


        	return validate;
        }

        this.dsData_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		//if(e.columnid == "TY_CORP") {
        			//this.fnTycorpEnable();
        		//}
        	}
        };

        this.fnTycorpEnable = function()
        {
        	if(this.dsData.getColumn(0,"TY_CORP") == "Y"){
        		this.cfCD_CORP.set_enable(false);
        		this.dsData.setColumn(0, "CD_CORP", "");
        		this.cfCD_CORP.form.DSTextBox.set_value("");
        	}else{
        		this.cfCD_CORP.set_enable(true);
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staDS_SITE.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.divData.form.mskAM_PROVISIONAL.addEventHandler("onchanged",this.divData_mskAM_PAYMENTAMT_onchanged,this);
            this.divData.form.staDT_START01.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.staDS_SITE01.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staDS_SITE02.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staDS_SITE03.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staDS_SITE04.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staDS_SITE05.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
        };
        this.loadIncludeScript("DRB_DLGCANCELCHANGE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
