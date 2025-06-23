(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DLB_DLGCANCEL");
            this.set_titletext("계약해약");
            this.getSetter("maxwidth").set("610");
            this.getSetter("maxheight").set("460");
            if (Form == this.constructor)
            {
                this._setFormPosition(580,410);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DLBPR_CANCEL_HANDLE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CHASU\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CANCEL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CANCEL\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RETURN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_RETURN\" type=\"STRING\" size=\"256\"/><Column id=\"AM_BUNYANGPLAN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_BUNYANGGET\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_FORFEIT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_MISULEASE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_RETURN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_HANDLER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_RETURN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"VALUE\">처리</Col><Col id=\"CODE\">Y</Col></Row><Row><Col id=\"VALUE\">대체</Col><Col id=\"CODE\">X</Col></Row><Row><Col id=\"VALUE\">미처리</Col><Col id=\"CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,"350","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","13","97.42%","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            obj.set_text("계약해약");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CANCEL","0","134","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("해약사유");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_RETURN","0","196","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("지급일자");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","staDS_CANCEL:-1","134",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg5","staDT_RETURN:-1","196","155","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_RETURN","staBg5:-1","196","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("전표처리여부");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_01_00","staTY_RETURN:-1","196",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE00","0","50","97.07%","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            obj.set_text("해약정보");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_CANCEL","0","105","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("해약일자");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_01","staDT_CANCEL:-1","105","155","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTRACTOR","staBg2_01:-1","105","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("해약자명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_02","staDS_CONTRACTOR:-1","105",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_CANCEL","staDT_CANCEL:5","109","108","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_CONTRACTOR","staDS_CONTRACTOR:5","109","163","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_value("");
            obj.set_maxlength("40");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_CANCEL","staDS_CANCEL:5","138","443","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_maxlength("30");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE00_00","0","171","97.07%","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            obj.set_text("지급정보");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_RETURN","staDT_RETURN:5","200","108","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_BUNYANGPLAN","0","225","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_text("약정보증금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg5_00","staAM_BUNYANGPLAN:-1","225","155","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_BUNYANGGET","staBg5_00:-1","225","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("수납보증금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_01_00_00","staAM_BUNYANGGET:-1","225",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_BUNYANGPLAN","staAM_BUNYANGPLAN:5","229","122","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_BUNYANGGET","412","229","133","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_FORFEIT","0","254","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_text("위약금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg5_00_00_00","staAM_FORFEIT:-1","254",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_FORFEIT","staAM_FORFEIT:5","258","122","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_format("###,###,###,###,##0");
            obj.set_limitbymask("both");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_RETURN","0","283","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_text("지급금액");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg66","staAM_RETURN:-1","283",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_RETURN","staAM_RETURN:5","287","122","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_format("###,###,###,###,##0");
            obj.set_limitbymask("both");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_HANDLER","0","312","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_text("해약처리자");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg77","staDS_HANDLER:-1","312",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_HANDLER","staDS_HANDLER:5","316","122","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_value("");
            obj.set_maxlength("5");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDONG","0","76","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_text("동층호");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1_00","staDONG:-1","76",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_DONG","staDONG:5","80","50","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","txtNO_DONG:10","79","19","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_text("동");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_FLOOR","sta00:6","80","30","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00_00","txtNO_FLOOR:9","79","19","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_text("층");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_HO","sta00_00:7","80","50","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","txtNO_HO:10","79","19","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_text("호");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_RETURN","staTY_RETURN:5","199","160","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsTY_RETURN");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","mskAM_FORFEIT:6","257","19","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00","mskAM_RETURN:6","286","19","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00_00","mskAM_BUNYANGPLAN:6","228","19","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00_00_00","mskAM_BUNYANGGET:6","228","19","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnConf","39.14%","361","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btnExt");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","51.72%","361","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취소");
            obj.set_cssclass("btnExt");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","38",null,"2","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("sta00");
            obj.set_border("0px none, 0px none, 1px solid black");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divData.form.txtDS_CONTRACTOR","value","dsData","DS_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.txtDS_CANCEL","value","dsData","DS_CANCEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.txtDS_HANDLER","value","dsData","DS_HANDLER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.calDT_CANCEL","value","dsData","DT_CANCEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.calDT_RETURN","value","dsData","DT_RETURN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.mskAM_BUNYANGPLAN","value","dsData","AM_BUNYANGPLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.mskAM_BUNYANGGET","value","dsData","AM_BUNYANGGET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.mskAM_FORFEIT","value","dsData","AM_FORFEIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.mskAM_RETURN","value","dsData","AM_RETURN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.txtNO_DONG","value","dsData","NO_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.txtNO_FLOOR","value","dsData","NO_FLOOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.txtNO_HO","value","dsData","NO_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.rdoTY_RETURN","value","dsData","TY_RETURN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DLB_DLGCANCEL.xfdl", function() {
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
        	this.dsData.setColumn(0, "CD_ACNTUNIT"	 , this.getOwnerFrame().CD_ACNTUNIT.substr(0, 6));
        	this.dsData.setColumn(0, "TY_GUBUN"		 , this.getOwnerFrame().CD_ACNTUNIT.substr(6, 1));
        	this.dsData.setColumn(0, "NO_CHASU"		 , this.getOwnerFrame().CD_ACNTUNIT.substr(7, 2));
        	this.dsData.setColumn(0, "NO_DONG"		 , this.getOwnerFrame().NO_DONG);
        	this.dsData.setColumn(0, "NO_FLOOR"		 , this.getOwnerFrame().NO_FLOOR);
        	this.dsData.setColumn(0, "NO_HO"		 , this.getOwnerFrame().NO_HO);
        	this.dsData.setColumn(0, "DS_CONTRACTOR" , this.getOwnerFrame().DS_CONTRACTOR);			//해약자명
        	this.dsData.setColumn(0, "AM_BUNYANGPLAN", this.getOwnerFrame().AM_BUNYANGPLAN);		//약정보증금
        	this.dsData.setColumn(0, "AM_BUNYANGGET" , this.getOwnerFrame().AM_BUNYANGGET);			//수납보증금
        	this.dsData.setColumn(0, "AM_MISULEASE"	 , this.getOwnerFrame().AM_MISULEASE);			//중도대출상환금
        	this.dsData.setColumn(0, "AM_FORFEIT"	 , nexacro.toNumber(this.getOwnerFrame().AM_BUNYANGPLAN,0) / 10);	//위약금(약정보증금의 10%)
        	this.dsData.setColumn(0, "DS_HANDLER"	 , this.AuthClient.DS_HNAME);					//해약처리자
        	this.dsData.setColumn(0, "TY_RETURN"	 , "Y");	//전표처리여부(처리)

        	var toDay = this.gfnGetDate();
        	this.dsData.setColumn(0, "DT_CANCEL"	, toDay); 	//해약일자
        	this.dsData.setColumn(0, "DT_RETURN"	, toDay);	//지급일자

        	//지급금액 계산
        	this.fnAmReturnCalc();

        	var titletxt  = this.FormInfo.NM_FORM  +"(";
        		titletxt += this.dsData.getColumn(0, "NO_DONG")  +" 동 ";
        		titletxt += this.dsData.getColumn(0, "NO_FLOOR") +" 층 ";
        		titletxt += this.dsData.getColumn(0, "NO_HO")    +" 호)";

        	this.staTITLE.set_text(titletxt);

        	this.calDT_CANCEL.setFocus();
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
        	this.staTITLE 			= this.divData.form.staTITLE;
        	this.txtNO_DONG         = this.divData.form.txtNO_DONG;
        	this.txtNO_FLOOR        = this.divData.form.txtNO_FLOOR;
        	this.txtNO_HO           = this.divData.form.txtNO_HO;
        	this.calDT_CANCEL 		= this.divData.form.calDT_CANCEL;
        	this.txtDS_CONTRACTOR 	= this.divData.form.txtDS_CONTRACTOR;
        	this.txtDS_CANCEL 		= this.divData.form.txtDS_CANCEL;
        	this.rdoTY_RETURN 		= this.divData.form.rdoTY_RETURN;
        	this.mskAM_BUNYANGPLAN 	= this.divData.form.mskAM_BUNYANGPLAN;
        	this.mskAM_BUNYANGGET 	= this.divData.form.mskAM_BUNYANGGET;
        	this.mskAM_FORFEIT 		= this.divData.form.mskAM_FORFEIT;
        	this.mskAM_RETURN 		= this.divData.form.mskAM_RETURN;
        	this.calDT_RETURN 		= this.divData.form.calDT_RETURN;
        	this.txtDS_HANDLER 		= this.divData.form.txtDS_HANDLER;
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
        	this.dsInsert.addColumn("CD_ACNTUNIT"	, "string");
        	this.dsInsert.addColumn("TY_GUBUN"	 	, "string");
        	this.dsInsert.addColumn("NO_CHASU"	 	, "string");
        	this.dsInsert.addColumn("NO_DONG"	 	, "string");
        	this.dsInsert.addColumn("NO_FLOOR"	 	, "string");
        	this.dsInsert.addColumn("NO_HO"		 	, "string");
        	this.dsInsert.addColumn("DT_CANCEL"	 	, "string");
        	this.dsInsert.addColumn("AM_INCOME"	 	, "BIGDECIMAL");
        	this.dsInsert.addColumn("DS_REMARK"	 	, "string");
        	this.dsInsert.addColumn("DT_RETURN"	 	, "string");
        	this.dsInsert.addColumn("TY_RETURN"	 	, "string");
        	this.dsInsert.addColumn("AM_INTEREST"	, "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_FORFEIT" 	, "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_LEASE"	 	, "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_DELAY"	 	, "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_RETURN"	 	, "BIGDECIMAL");
        	this.dsInsert.addColumn("DS_OWNER"	 	, "string");
        	this.dsInsert.addColumn("DS_BANK_CANCEL", "string");
        	this.dsInsert.addColumn("DS_GUJA_CANCEL", "string");
        	this.dsInsert.addColumn("DS_HANDLER"	, "string");
        	this.dsInsert.addColumn("ID_INSERT"		, "string");
        	this.dsInsert.addColumn("CD_DEPT_BH"	, "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

         /************************************************************************
         * 콤보 이벤트
         ************************************************************************/


        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValidate = function() {
        	if (this.gfnIsNull(this.dsData.getColumn(0, "DT_CANCEL"))) {
        		this.gfnAlert("해약일자를 입력하지 않았습니다.");
        		this.calDT_CANCEL.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.dsData.getColumn(0, "DS_CANCEL"))) {
        		this.gfnAlert("해약사유를 입력하지 않았습니다.");
        		this.txtDS_CANCEL.setFocus();
        		return false;
        	}

        	//전표처리여부가 처리일경우
        	if(this.dsData.getColumn(0, "TY_RETURN") == "Y"){
        		if (this.gfnIsNull(this.dsData.getColumn(0, "DT_RETURN"))) {
        			this.gfnAlert("지급일자를 입력하지 않았습니다.");
        			this.calDT_RETURN.setFocus();
        			return false;
        		}
        	}

        	if (this.gfnIsNull(this.gfnTrim(this.dsData.getColumn(0, "DS_HANDLER")))) {
        		this.gfnAlert("해약처리자를 입력하지 않았습니다.");
        		this.txtDS_HANDLER.setFocus();
        		return false;
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
        	if (svcID == "save") {
        		if(errorCode == 0){
        			this.getParentContext().close(true);
        		}else{
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

        this.dsData_oncolumnchanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){
        		if(e.columnid =="AM_FORFEIT"){
        			//지급금액 계산
        			this.fnAmReturnCalc();
        		}
        	}
        };

        //확인버튼
        this.btnConf_onclick = function(obj,e)
        {
        	if(!this.fnSaveValidate()) return;

        	this.gfnConfirm("해약처리를 계속 진행하시겠습니까?", "btnConf_callback");
        };

        this.btnConf_callback = function(strID, val) {
        	if (!val) return;

        	this.dsInsert.clearData();
        	var nrow = this.dsInsert.addRow();

        	this.dsInsert.setColumn(nrow, "CD_ACNTUNIT"		, this.dsData.getColumn(0, "CD_ACNTUNIT"));
        	this.dsInsert.setColumn(nrow, "TY_GUBUN"		, this.dsData.getColumn(0, "TY_GUBUN"));
        	this.dsInsert.setColumn(nrow, "NO_CHASU"		, this.dsData.getColumn(0, "NO_CHASU"));
        	this.dsInsert.setColumn(nrow, "NO_DONG"			, this.dsData.getColumn(0, "NO_DONG"));
        	this.dsInsert.setColumn(nrow, "NO_FLOOR"		, this.dsData.getColumn(0, "NO_FLOOR"));
        	this.dsInsert.setColumn(nrow, "NO_HO"			, this.dsData.getColumn(0, "NO_HO"));

        	this.dsInsert.setColumn(nrow, "DT_CANCEL"  		, this.dsData.getColumn(0, "DT_CANCEL"));			//해약일자
        	this.dsInsert.setColumn(nrow, "AM_INCOME"   	, this.dsData.getColumn(0, "AM_BUNYANGGET"));		//수납보증금
        	this.dsInsert.setColumn(nrow, "DS_REMARK"   	, this.dsData.getColumn(0, "DS_CANCEL"));			//해약사유
        	this.dsInsert.setColumn(nrow, "DT_RETURN"   	, this.dsData.getColumn(0, "DT_RETURN"));			//지급일자
        	this.dsInsert.setColumn(nrow, "TY_RETURN"   	, this.dsData.getColumn(0, "TY_RETURN"));			//전표처리여부
        	this.dsInsert.setColumn(nrow, "AM_INTEREST"   	, 0);												//지급이자
        	this.dsInsert.setColumn(nrow, "AM_FORFEIT"   	, this.dsData.getColumn(0, "AM_FORFEIT"));			//위약금
            this.dsInsert.setColumn(nrow, "AM_LEASE"   		, this.dsData.getColumn(0, "AM_MISULEASE"));		//중도대출상환금_1
        	this.dsInsert.setColumn(nrow, "AM_DELAY" 		, 0);												//연체금액
        	this.dsInsert.setColumn(nrow, "AM_RETURN" 		, this.dsData.getColumn(0, "AM_RETURN"));			//지급금액
        	this.dsInsert.setColumn(nrow, "DS_OWNER" 		, "");												//예금주
        	this.dsInsert.setColumn(nrow, "DS_BANK_CANCEL"  , "");												//환불은행명
        	this.dsInsert.setColumn(nrow, "DS_GUJA_CANCEL"  , "");												//환불 계좌번호
        	this.dsInsert.setColumn(nrow, "DS_HANDLER"  	, this.dsData.getColumn(0, "DS_HANDLER"));			//해약처리자
        	this.dsInsert.setColumn(nrow, "ID_INSERT"		, this.AuthClient.ID_USER);							//등록자ID
        	this.dsInsert.setColumn(nrow, "CD_DEPT_BH"  	, this.AuthClient.CD_DEPT);							//로그인부서

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
        }

        //취소버튼
        this.btnCancel_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };

        //지급금액 계산
        this.fnAmReturnCalc = function ()
        {
        	var amBunYangGet = nexacro.toNumber(this.dsData.getColumn(0, "AM_BUNYANGGET"),0);	//약정보증금
        	var amForfeit    = nexacro.toNumber(this.dsData.getColumn(0, "AM_FORFEIT"),0);		//위약금
        	var amReturn     = amBunYangGet - amForfeit;

        	this.dsData.setColumn(0, "AM_RETURN", amReturn);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnConf.addEventHandler("onclick",this.btnConf_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.dsData.addEventHandler("oncolumnchanged",this.dsData_oncolumnchanged,this);
        };
        this.loadIncludeScript("DLB_DLGCANCEL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
