(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DRB_DLGCANCEL");
            this.set_titletext("계약해약");
            this.getSetter("maxwidth").set("650");
            this.getSetter("maxheight").set("550");
            if (Form == this.constructor)
            {
                this._setFormPosition(580,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DRBPR_CANCEL_HANDLE_PARADISE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CHASU\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_UNIONMEMBER\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CANCEL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CANCEL\" type=\"STRING\" size=\"256\"/><Column id=\"AM_BUNYANG\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RETURN\" type=\"STRING\" size=\"256\"/><Column id=\"AM_RECEIPT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_DISCOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_REALRECEIPT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_DELAY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_FORFEIT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_INTEREST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_LOAN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_LOANINTEREST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_RETURN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_REFUND\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_HANDLER\" type=\"STRING\" size=\"256\"/><Column id=\"TY_RETURN\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DELAY\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DISCOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,"430","0",null,null,null,null,null,this);
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

            obj = new Static("staDS_CANCEL","0","104","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("해약사유");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staREFUND","0","167","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("환불처리");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_BUNYANG","0","196","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("공급금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","staDS_CANCEL:-1","104",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3_00","staREFUND:-1","167",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg5","staAM_BUNYANG:-1","196","155","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_RETURN","staBg5:-1","196","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("지급일자");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_01_00","staDT_RETURN:-1","196",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE00","0","50","97.07%","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            obj.set_text("해약정보");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_01","126","75","155","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTRACTOR","staBg2_01:-1","75","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("해약자명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_02","staDS_CONTRACTOR:-1","75",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_CANCEL","0","75","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("해약일자");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_CANCEL","staDT_CANCEL:5","79","108","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_CONTRACTOR","staDS_CONTRACTOR:5","79","163","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_value("");
            obj.set_maxlength("40");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_CANCEL","staDS_CANCEL:5","108","443","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_maxlength("20");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE00_00","0","142","97.07%","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            obj.set_text("지급정보");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_RETURN","staDT_RETURN:5","200","108","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg5_00","126","225","155","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_DISCOUNT","staBg5_00:-1","225","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_text("할인료");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_01_00_00","staAM_DISCOUNT:-1","225",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_RECEIPT","0","225","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_text("입금원금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_BUNYANG","staAM_BUNYANG:5","200","142","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_RECEIPT","staAM_RECEIPT:5","229","142","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_DISCOUNT","staAM_DISCOUNT:5","229","153","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_REALRECEIPT","0","254","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_text("실수납금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg5_00_00","staAM_REALRECEIPT:-1","254","155","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_REALRECEIPT","staAM_REALRECEIPT:5","258","142","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_DELAY","staBg5_00_00:-1","254","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_text("연체료");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_01_00_00_00","staAM_DELAY:-1","254",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_DELAY","staAM_DELAY:5","258","153","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_FORFEIT","0","283","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_text("위약금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg5_00_00_00","staAM_FORFEIT:-1","283","155","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_FORFEIT","staAM_FORFEIT:5","287","142","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_format("###,###,###,###,##0");
            obj.set_limitbymask("both");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_INTEREST","staBg5_00_00_00:-1","283","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_text("지급이자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_01_00_00_00_00","staAM_INTEREST:-1","283",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_INTEREST","staAM_INTEREST:5","287","153","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_format("###,###,###,###,##0");
            obj.set_limitbymask("both");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_LOAN","0","312","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_text("중도대출상환금_1");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg5_00_00_00_00","staAM_LOAN:-1","312","155","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_LOAN","staAM_LOAN:5","316","142","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_format("###,###,###,###,##0");
            obj.set_limitbymask("both");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_LOANINTEREST","staBg5_00_00_00_00:-1","312","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_text("상환/이자_1");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_01_00_00_00_00_00","staAM_LOANINTEREST:-1","312",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_LOANINTEREST","staAM_LOANINTEREST:5","316","153","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_format("###,###,###,###,##0");
            obj.set_limitbymask("both");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_REFUND","0","341","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            obj.set_text("환불금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg5_00_00_00_00_00","staAM_REFUND:-1","341",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_REFUND","staAM_REFUND:5","345","142","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_HANDLER","0","370","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_text("해약처리자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg5_00_00_00_00_00_00","staDS_HANDLER:-1","370",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_HANDLER","staDS_HANDLER:5","374","142","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("51");
            obj.set_value("");
            obj.set_maxlength("40");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new CheckBox("chkDELAY","staREFUND:8","173","65","17",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("연체료");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divData.addChild(obj.name, obj);

            obj = new CheckBox("chkDISCOUNT","chkDELAY:15","173","65","17",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("할인료");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnConf","39.14%","431","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btnExt");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","50.00%","431","60","30",null,null,null,null,null,null,this);
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

            obj = new BindItem("item3","divData.form.chkDELAY","value","dsData","YN_DELAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.mskAM_BUNYANG","value","dsData","AM_BUNYANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.calDT_RETURN","value","dsData","DT_RETURN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.mskAM_RECEIPT","value","dsData","AM_RECEIPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.mskAM_DISCOUNT","value","dsData","AM_DISCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.mskAM_REALRECEIPT","value","dsData","AM_REALRECEIPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.mskAM_DELAY","value","dsData","AM_DELAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.mskAM_FORFEIT","value","dsData","AM_FORFEIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.mskAM_INTEREST","value","dsData","AM_INTEREST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.mskAM_LOAN","value","dsData","AM_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.mskAM_LOANINTEREST","value","dsData","AM_LOANINTEREST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.mskAM_REFUND","value","dsData","AM_REFUND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.chkDISCOUNT","value","dsData","YN_DISCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DRB_DLGCANCEL.xfdl", function() {
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
        	this.dsData.setColumn(0, "NO_DONG"		 , this.getOwnerFrame().DONG);
        	this.dsData.setColumn(0, "NO_FLOOR"		 , this.getOwnerFrame().FLOOR)
        	this.dsData.setColumn(0, "NO_HO"		 , this.getOwnerFrame().HO);
        	this.dsData.setColumn(0, "NO_UNIONMEMBER", this.getOwnerFrame().NO_UNIONMEMBER);
        	this.dsData.setColumn(0, "DS_CONTRACTOR" , this.getOwnerFrame().DS_CONTRACTOR);		//해약자명
        	this.dsData.setColumn(0, "AM_BUNYANG"	 , this.getOwnerFrame().AM_BUNYANG);		//공급금액
        	this.dsData.setColumn(0, "AM_RECEIPT"	 , this.getOwnerFrame().AM_RECEIPT);		//입금원금
        	this.dsData.setColumn(0, "AM_DISCOUNT"	 , this.getOwnerFrame().AM_DISCOUNT);		//할인료
        	this.dsData.setColumn(0, "AM_DELAY"	 	 , this.getOwnerFrame().AM_DELAY);			//연체료
        	this.dsData.setColumn(0, "AM_REALRECEIPT", this.getOwnerFrame().AM_REALRECEIPT); 	//실수납금
        	this.dsData.setColumn(0, "AM_FORFEIT"	 , this.getOwnerFrame().AM_FORFEIT);		//위약금
        	this.dsData.setColumn(0, "DS_HANDLER"	 , this.AuthClient.DS_HNAME);				//해약처리자

        	var toDay = this.gfnGetDate();
        	this.dsData.setColumn(0, "DT_CANCEL"	, toDay); 	//해약일자
        	this.dsData.setColumn(0, "DT_RETURN"	, toDay);	//지급일자

        	var titletxt  = this.FormInfo.NM_FORM  +"(";
        		titletxt += this.dsData.getColumn(0, "NO_DONG")  +" 동 ";
        		titletxt += this.dsData.getColumn(0, "NO_FLOOR") +" 층 ";
        		titletxt += this.dsData.getColumn(0, "NO_HO")    +" 호)";

        	this.staTITLE.set_text(titletxt);

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
        	this.calDT_CANCEL 		= this.divData.form.calDT_CANCEL;
        	this.txtDS_CONTRACTOR 	= this.divData.form.txtDS_CONTRACTOR;
        	this.txtDS_CANCEL 		= this.divData.form.txtDS_CANCEL;
        	this.chkDELAY 			= this.divData.form.chkDELAY;
        	this.chkDISCOUNT 		= this.divData.form.chkDISCOUNT;
        	this.mskAM_BUNYANG 		= this.divData.form.mskAM_BUNYANG;
        	this.calDT_RETURN 		= this.divData.form.calDT_RETURN;
        	this.mskAM_RECEIPT 		= this.divData.form.mskAM_RECEIPT;
        	this.mskAM_DISCOUNT 	= this.divData.form.mskAM_DISCOUNT;
        	this.mskAM_REALRECEIPT	= this.divData.form.mskAM_REALRECEIPT;
        	this.mskAM_DELAY 		= this.divData.form.mskAM_DELAY;
        	this.mskAM_FORFEIT 		= this.divData.form.mskAM_FORFEIT;
        	this.mskAM_INTEREST 	= this.divData.form.mskAM_INTEREST;
        	this.mskAM_LOAN 		= this.divData.form.mskAM_LOAN;
        	this.mskAM_LOANINTEREST = this.divData.form.mskAM_LOANINTEREST;
        	this.mskAM_REFUND 		= this.divData.form.mskAM_REFUND;
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
        	this.dsInsert.addColumn("CD_ACNTUNIT", "string");
        	this.dsInsert.addColumn("TY_GUBUN", "string");
        	this.dsInsert.addColumn("NO_CHASU", "string");
        	this.dsInsert.addColumn("NO_DONG", "string");
        	this.dsInsert.addColumn("NO_FLOOR", "string");
        	this.dsInsert.addColumn("NO_HO", "string");
        	this.dsInsert.addColumn("NO_UNIONMEMBER", "string");
        	this.dsInsert.addColumn("DT_CANCEL", "string");
        	this.dsInsert.addColumn("DS_CANCEL", "string");
        	this.dsInsert.addColumn("DT_RETURN", "string");
        	this.dsInsert.addColumn("TY_RETURN", "string");
        	this.dsInsert.addColumn("AM_FORFEIT", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_INTEREST", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_LOAN", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_LOANINTEREST", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_DELAY", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_DISCOUNT", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_RETURN", "BIGDECIMAL");
        	this.dsInsert.addColumn("DS_OWNER", "string");
        	this.dsInsert.addColumn("DS_BANK_CANCEL", "string");
        	this.dsInsert.addColumn("DS_GUJA_CANCEL", "string");
        	this.dsInsert.addColumn("CD_BANKVENDOR", "string");
        	this.dsInsert.addColumn("DS_HANDLER", "string");
        	this.dsInsert.addColumn("CD_DEPT_BH", "string");
        	this.dsInsert.addColumn("CD_FINANCING", "string");
        	this.dsInsert.addColumn("YN_CHKD", "string");
        	this.dsInsert.addColumn("AM_LOAN2", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_LOANINTEREST2", "BIGDECIMAL");
        	this.dsInsert.addColumn("CD_BANKVENDOR2", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");
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
        	var validate = true;

        	if (this.gfnIsNull(this.dsData.getColumn(0, "DT_CANCEL"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.calDT_CANCEL.setFocus();
        		}
        		this.gfnAlert("해약일자를 입력하지 않았습니다.", "fnVaidateCallback");
        		return;
        	}

        	if (this.gfnIsNull(this.dsData.getColumn(0, "DS_CANCEL"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.txtDS_CANCEL.setFocus();
        		}
        		this.gfnAlert("해약사유를 입력하지 않았습니다.", "fnVaidateCallback");
        		return;
        	}

        	if (this.gfnIsNull(this.dsData.getColumn(0, "DT_RETURN"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.calDT_RETURN.setFocus();
        		}
        		this.gfnAlert("지급일자를 입력하지 않았습니다.", "fnVaidateCallback");
        		return;
        	}

        	return validate;
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
        		if(e.columnid =="YN_DELAY" || e.columnid =="YN_DISCOUNT" || e.columnid =="AM_FORFEIT" ||
        		   e.columnid =="AM_INTEREST" || e.columnid =="AM_LOAN" || e.columnid =="AM_LOANINTEREST"){

        			var amReceipt      = nexacro.toNumber(this.dsData.getColumn(0, "AM_RECEIPT"),0);													//입금원금
        			var amForfeit      = nexacro.toNumber((e.columnid =="AM_FORFEIT" ? e.newvalue :this.dsData.getColumn(0, "AM_FORFEIT")),0);			//위약금
        			var amInterest 	   = nexacro.toNumber((e.columnid =="AM_INTEREST" ? e.newvalue :this.dsData.getColumn(0, "AM_INTEREST")),0);		//지급이자
        			var amLoan     	   = nexacro.toNumber((e.columnid =="AM_LOAN" ? e.newvalue :this.dsData.getColumn(0, "AM_LOAN")),0);				//중도대출상환금_1
        			var amLoanInterest = nexacro.toNumber((e.columnid =="AM_LOANINTEREST" ? e.newvalue :this.dsData.getColumn(0, "AM_LOANINTEREST")),0);//상환/이자_1
        			var amDelay        = nexacro.toNumber(this.dsData.getColumn(0, "AM_DELAY"),0);			//연체료
        			var amDiscount     = nexacro.toNumber(this.dsData.getColumn(0, "AM_DISCOUNT"),0);		//할인료
        			var ynDely         = (e.columnid =="YN_DELAY" ? e.newvalue :this.dsData.getColumn(0, "YN_DELAY"))
        			var ynDiscount     = (e.columnid =="YN_DISCOUNT" ? e.newvalue :this.dsData.getColumn(0, "YN_DISCOUNT"))

        			if(ynDely != "Y"){
        				amDelay = 0;
        			}
        			if(ynDiscount != "Y"){
        				amDiscount = 0;
        			}

        			var amRefund = amReceipt + amInterest - (amForfeit + amLoan + amLoanInterest) + amDelay - amDiscount;

        			//환불금액 = 입금원금 + 지급이자 - (위약금 + 중도대출상환금_1 + 상환/이자_1) + 연체료 - 할인료
        			this.dsData.setColumn(0, "AM_REFUND", amRefund);

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
        	this.dsInsert.setColumn(nrow, "NO_UNIONMEMBER"  , this.dsData.getColumn(0, "NO_UNIONMEMBER"));

        	this.dsInsert.setColumn(nrow, "DT_CANCEL"  		, this.dsData.getColumn(0, "DT_CANCEL"));			//해약일자
        	this.dsInsert.setColumn(nrow, "DS_CANCEL"   	, this.dsData.getColumn(0, "DS_CANCEL"));			//해약사유
        	this.dsInsert.setColumn(nrow, "DT_RETURN"   	, this.dsData.getColumn(0, "DT_RETURN"));			//지급일자

        	this.dsInsert.setColumn(nrow, "TY_RETURN"   	, "Y");
        	this.dsInsert.setColumn(nrow, "AM_FORFEIT"   	, this.dsData.getColumn(0, "AM_FORFEIT"));			//위약금
        	this.dsInsert.setColumn(nrow, "AM_INTEREST"   	, this.dsData.getColumn(0, "AM_INTEREST"));			//지급이자
        	this.dsInsert.setColumn(nrow, "AM_LOAN"   		, this.dsData.getColumn(0, "AM_LOAN"));				//중도대출상환금_1
        	this.dsInsert.setColumn(nrow, "AM_LOANINTEREST" , this.dsData.getColumn(0, "AM_LOANINTEREST"));		//상환/이자_1
        	this.dsInsert.setColumn(nrow, "AM_RETURN" 		, this.dsData.getColumn(0, "AM_REFUND"));			//환불금액
        	this.dsInsert.setColumn(nrow, "AM_DELAY" 		, this.dsData.getColumn(0, "AM_DELAY"));			//연체금액
        	this.dsInsert.setColumn(nrow, "AM_DISCOUNT" 	, this.dsData.getColumn(0, "AM_DISCOUNT"));			//할인금액

        	this.dsInsert.setColumn(nrow, "DS_OWNER" 		, "");												//예금주
        	this.dsInsert.setColumn(nrow, "DS_BANK_CANCEL"  , "");												//환불은행명
        	this.dsInsert.setColumn(nrow, "DS_GUJA_CANCEL"  , "");												//환불 계좌번호
        	this.dsInsert.setColumn(nrow, "CD_BANKVENDOR"  	, "");												//환불은행(은행)_1
        	this.dsInsert.setColumn(nrow, "DS_HANDLER"  	, this.dsData.getColumn(0, "DS_HANDLER"));			//해약처리자
        	this.dsInsert.setColumn(nrow, "CD_DEPT_BH"  	, this.AuthClient.CD_DEPT);							//로그인부서
        	this.dsInsert.setColumn(nrow, "CD_FINANCING"  	, "");												//DF_SPACE01
        	this.dsInsert.setColumn(nrow, "YN_CHKD"  		, "N");												//대체처리 여부
        	this.dsInsert.setColumn(nrow, "ID_INSERT"		, this.AuthClient.ID_USER);							//등록자ID
        	this.dsInsert.setColumn(nrow, "AM_LOAN2"  		, 0);												//대위변제원금2
        	this.dsInsert.setColumn(nrow, "AM_LOANINTEREST2", 0);												//대위변제상환/이자2
        	this.dsInsert.setColumn(nrow, "CD_BANKVENDOR2"  , "");												//환불은행(은행)_2

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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnConf.addEventHandler("onclick",this.btnConf_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.dsData.addEventHandler("oncolumnchanged",this.dsData_oncolumnchanged,this);
        };
        this.loadIncludeScript("DRB_DLGCANCEL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
