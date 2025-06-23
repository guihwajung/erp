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
            this.set_titletext("별도계약 해약관리");
            this.getSetter("maxwidth").set("590");
            this.getSetter("maxheight").set("630");
            if (Form == this.constructor)
            {
                this._setFormPosition(570,610);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"AM_INTEREST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_LOAN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_LOANINTEREST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_RECEIPT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONTRACT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTRACT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_BUNYANG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_DISCOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_DELAY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_FORFEIT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DT_CANCEL\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RETURN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_RETURN\" type=\"STRING\" size=\"256\"/><Column id=\"NM_OPENER\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BANK\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_DELAY\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_DISCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_REFUND\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SUBRTBANK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUBRTBANK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CANCEL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"AM_INTEREST\">0</Col><Col id=\"AM_LOAN\">0</Col><Col id=\"AM_LOANINTEREST\">0</Col><Col id=\"AM_RECEIPT\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DRFPR_CANCEL_HANDLE_SHINYOUNG</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_RECEIPT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">처리</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">대체처리</Col></Row><Row><Col id=\"CD_CODE\">3</Col><Col id=\"DS_CODE\">미처리</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0","540","550",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","20","100.00%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("해약처리");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSunapInfo","0","staTITLE:5",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_text("해약정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","0","staSunapInfo:5","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","sta00:-1","staSunapInfo:5",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","sta00:-1","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("해약일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","sta02:-1","sta01:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","0","sta02:70","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("전표처리여부");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta05","sta04:-1","sta03:70",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","0","sta04:-1","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("환불처리");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07","sta06:-1","sta05:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta08","0","sta06:-1","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("공급금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta09","sta08:-1","sta07:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta10","0","sta08:-1","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("입금원금");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta11","sta10:-1","sta09:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta12","0","sta10:-1","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("위약금");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta13","sta12:-1","sta11:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta14","0","sta12:-1","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("대위변제원금");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta15","sta14:-1","sta13:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta16","0","sta14:-1","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("환불금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta17","sta16:-1","sta15:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta18","0","sta16:-1","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("환불은행/계좌(고객)");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta19","sta18:-1","sta17:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","184","510","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30","510","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("crdoTY_RETURN","135","sta03:75","228","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_direction("vertical");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_RECEIPT");
            obj.set_fittocontents("width");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSunapInfo00","0","185",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_text("지급정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02_00","0","443","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_text("환불은행");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03_00","129","443",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02_01","0","140","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_text("해약사유");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03_01","129","140",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_RETURN","385","245","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02_02","270","240","111","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_text("지급일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new CheckBox("cchkYN_DELAY","135","245","65","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_text("연체료");
            this.divData.addChild(obj.name, obj);

            obj = new CheckBox("cchkYN_DISCOUNT","cchkYN_DELAY:0","245","69","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_text("할인료");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_BUNYANG","135","274","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_RECEIPT","134","304","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_FORFEIT","134","332","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_LOAN","134","361","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_REFUND","134","390","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02_02_00","270","269","111","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_text("할인료");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02_02_00_00","270","298","111","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_text("연체료");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02_02_00_01","270","327","111","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_text("지급이자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02_02_00_02","270","356","111","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_text("상환/이자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_DISCOUNT","386","274","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_DELAY","385","304","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_INTEREST","385","332","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_LOANINTEREST","385","361","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_CANCEL","134","116","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02_02_01","270","111","111","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_text("해약자명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_SUBRTBANK","134","419","300","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DRX_CFACCOUNT_BYCASH");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("50");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_GUJA","134","448","300","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DRX_CFFINANCING_CODEFIND");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("32");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_CONTRACT","134","87","78","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("52");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_CONTRACT","218","87","194","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("53");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_CANCEL","134","145","396","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("54");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_CONTRACTOR","385","116","145","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("55");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.crdoTY_RETURN","value","dsList","TY_RETURN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.txtNO_CONTRACT","value","dsList","NO_CONTRACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.txtDS_CONTRACT","value","dsList","DS_CONTRACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.txtDS_CANCEL","value","dsList","DS_CANCEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.txtDS_CONTRACTOR","value","dsList","DS_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.txtAM_BUNYANG","value","dsList","AM_BUNYANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.txtAM_RECEIPT","value","dsList","AM_RECEIPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.txtAM_FORFEIT","value","dsList","AM_FORFEIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.txtAM_LOAN","value","dsList","AM_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.txtAM_DISCOUNT","value","dsList","AM_DISCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.txtAM_DELAY","value","dsList","AM_DELAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.txtAM_INTEREST","value","dsList","AM_INTEREST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.txtAM_LOANINTEREST","value","dsList","AM_LOANINTEREST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.cchkYN_DELAY","value","dsList","CHK_DELAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.cchkYN_DISCOUNT","value","dsList","CHK_DISCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.ctclDT_CANCEL","value","dsList","DT_CANCEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.ctclDT_RETURN","value","dsList","DT_RETURN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.txtAM_REFUND","value","dsList","AM_REFUND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.ccfCD_SUBRTBANK.form.CDTextBox","value","dsList","CD_SUBRTBANK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.ccfCD_SUBRTBANK.form.DSTextBox","value","dsList","DS_SUBRTBANK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.ccfCD_GUJA.form.CDTextBox","value","dsList","CD_GUJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.ccfCD_GUJA.form.DSTextBox","value","dsList","DS_GUJA");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DRF_DLGCANCELACC.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	this.CD_ACNTUNIT 	= this.getOwnerFrame().CD_ACNTUNIT;
        	this.NO_DONG     	= this.getOwnerFrame().NO_DONG;
        	this.NO_FLOOR    	= this.getOwnerFrame().NO_FLOOR;
        	this.NO_HO          = this.getOwnerFrame().NO_HO;
        	this.Title 	        = this.getOwnerFrame().Title;

        	this.dsList.setColumn(0, "AM_INTEREST"	  , 0);
        	this.dsList.setColumn(0, "AM_LOAN"	      , 0);
        	this.dsList.setColumn(0, "AM_LOANINTEREST", 0);
        	this.dsList.setColumn(0, "AM_RECEIPT"	  , this.getOwnerFrame().AM_RECEIPT);
        	this.dsList.setColumn(0, "DS_CONTRACTOR"  , this.getOwnerFrame().DS_CONTRACTOR);
        	this.dsList.setColumn(0, "NO_CONTRACT"	  , this.getOwnerFrame().NO_CONTRACT);
        	this.dsList.setColumn(0, "DS_CONTRACT"	  , this.getOwnerFrame().DS_CONTRACT);
        	this.dsList.setColumn(0, "AM_BUNYANG"	  , this.getOwnerFrame().AM_BUNYANG);
        	this.dsList.setColumn(0, "AM_DISCOUNT"	  , this.getOwnerFrame().AM_DISCOUNT);
        	this.dsList.setColumn(0, "AM_DELAY"		  , this.getOwnerFrame().AM_DELAY);
        	this.dsList.setColumn(0, "AM_FORFEIT"	  , this.getOwnerFrame().AM_FORFEIT);
        	this.dsList.setColumn(0, "DT_CANCEL"	  , this.gfnGetDate());
        	this.dsList.setColumn(0, "DT_RETURN"	  , this.gfnGetDate());
        	this.dsList.setColumn(0, "TY_RETURN"	  , "1");

        	this.txtNO_CONTRACT.set_readonly(true);
        	this.txtDS_CONTRACT.set_readonly(true);
        	this.txtDS_CONTRACTOR.set_readonly(true);
        	this.rdoTY_RETURN.set_enable(false);
        	this.txtAM_BUNYANG.set_readonly(true);
        	this.txtAM_RECEIPT.set_readonly(true);
        	this.txtAM_DISCOUNT.set_readonly(true);
        	this.txtAM_DELAY.set_readonly(true);
        	this.txtAM_REFUND.set_readonly(true);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.txtNO_CONTRACT 	= this.divData.form.txtNO_CONTRACT;
        	this.txtDS_CONTRACT 	= this.divData.form.txtDS_CONTRACT;
        	this.txtDS_CONTRACTOR 	= this.divData.form.txtDS_CONTRACTOR;
        	this.crdoTY_RETURN 		= this.divData.form.crdoTY_RETURN;
        	this.ctclDT_RETURN 		= this.divData.form.ctclDT_RETURN;
        	this.txtAM_FORFEIT  	= this.divData.form.txtAM_FORFEIT;
        	this.txtAM_BUNYANG      = this.divData.form.txtAM_BUNYANG;
        	this.txtAM_RECEIPT      = this.divData.form.txtAM_RECEIPT;
        	this.txtAM_DISCOUNT     = this.divData.form.txtAM_DISCOUNT;
        	this.txtAM_DELAY        = this.divData.form.txtAM_DELAY;
        	this.txtAM_REFUND       = this.divData.form.txtAM_REFUND;
        	this.txtAM_INTEREST 	= this.divData.form.txtAM_INTEREST;
        	this.txtAM_LOAN 		= this.divData.form.txtAM_LOAN;
        	this.txtAM_LOANINTEREST = this.divData.form.txtAM_LOANINTEREST;
        	this.ccfCD_SUBRTBANK 	= this.divData.form.ccfCD_SUBRTBANK;
        	this.ccfCD_GUJA 		= this.divData.form.ccfCD_GUJA;
        	this.cchkYN_DELAY		= this.divData.form.cchkYN_DELAY;
        	this.cchkYN_DISCOUNT	= this.divData.form.cchkYN_DISCOUNT;
        	this.ctclDT_CANCEL		= this.divData.form.ctclDT_CANCEL;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_GUJA.BeforeUserDataSetParam      = "fnBeforeUserDataSetParam";
        	this.ccfCD_SUBRTBANK.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	/* 수정 후*/
        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_ACNTUNIT", "string"); 		// 사업자번호
        	this.dsInsert.addColumn("TY_GUBUN", "string"); 			// 구분 A: 아파트 S: 상가
        	this.dsInsert.addColumn("NO_CHASU", "string"); 			// 차수
        	this.dsInsert.addColumn("NO_DONG", "string");			// 동
        	this.dsInsert.addColumn("NO_FLOOR", "string");			// 층
        	this.dsInsert.addColumn("NO_HO", "string");				// 호
        	this.dsInsert.addColumn("NO_UNIONMEMBER", "string");	// 조합원번호

        	this.dsInsert.addColumn("DT_CANCEL", "string");			// 해약일자
        	this.dsInsert.addColumn("DS_CANCEL", "string");			// 해약사유
        	this.dsInsert.addColumn("DT_RETURN", "string");			// 지급일자
        	this.dsInsert.addColumn("TY_RETURN", "string");			// 지급여부(Y:지급, N:미지급)
        	this.dsInsert.addColumn("AM_DISCOUNT", "bigint");		// 할인금
        	this.dsInsert.addColumn("AM_DELAY", "bigint");			// 연체료
        	this.dsInsert.addColumn("AM_FORFEIT", "bigint");		// 위약금
        	this.dsInsert.addColumn("AM_INTEREST", "bigint");		// 지급이자
        	this.dsInsert.addColumn("AM_LOAN", "bigint");			// 대위변제원금
        	this.dsInsert.addColumn("AM_LOANINTEREST", "bigint");	// 대위변제상환/이자
        	this.dsInsert.addColumn("AM_RETURN", "bigint");			// 환불금액(지급금액)

        	// 추가됨
        	this.dsInsert.addColumn("DS_OWNER", "string");			// 예금주
        	this.dsInsert.addColumn("DS_BANK_CANCEL", "string");	// 환불은행
        	this.dsInsert.addColumn("DS_GUJA_CANCEL", "string");	// 환불은행/계좌(고객)
        	this.dsInsert.addColumn("CD_BANKVENDOR", "string");		// 대위변제환불은행코드(회계거래처테이블조인)
        	this.dsInsert.addColumn("DS_HANDLER", "string");		// 해약처리자 (입력자명)
        	this.dsInsert.addColumn("CD_DEPT_BH", "string");		// 발행부서
        	this.dsInsert.addColumn("CD_FINANCING", "string");		// 재경팀
        	this.dsInsert.addColumn("YN_CHKD", "string");			// 대체전표 처리여부
        	this.dsInsert.addColumn("ID_INSERT", "string");			// 입력자ID
        	this.dsInsert.addColumn("NO_CONTRACT", "string");		// 계약번호

        	//this.dsInsert.addColumn("DS_CONTRACT", "string");		// 품목명
        	//this.dsInsert.addColumn("DS_CONTRACTOR", "string");	// 해약자명
        	//this.dsInsert.addColumn("YN_Delay", "string");		// 환불처리 연체료 체크
        	//this.dsInsert.addColumn("YN_Discount", "string");		// 환불처리 할인료 체크
        	//this.dsInsert.addColumn("AM_BUNYANG", "string");		// 공급금액
        	//this.dsInsert.addColumn("AM_RECEIPT", "string");		// 입금원금
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValidate = function() {
        	//해약일자
        	if (this.gfnIsNull(this.dsList.getColumn(0, "DT_CANCEL"))) {
        		this.gfnAlert("해약일자를 입력하지 않았습니다.");
        		return false;
        	}

        	//해약사유
        	if (this.gfnIsNull(this.dsList.getColumn(0, "DS_CANCEL"))) {
        		this.gfnAlert("해약사유를 입력하지 않았습니다.");
        		return false;
        	}

        	//지급일자
        	if (this.gfnIsNull(this.dsList.getColumn(0, "DT_RETURN"))) {
        		this.gfnAlert("지급일자를 입력하지 않았습니다.");
        		return false;
        	}

        	//환불금액
        	if(this.gfnIsNull(this.dsList.getColumn(0, "AM_RETURN")) > 0)
        	{
        		//환불은행/계좌(고객)
        		if (this.gfnIsNull(this.dsList.getColumn(0, "CD_SUBRTBANK"))) {
        			this.gfnAlert("환불은행/계좌(고객)를 선택하지 않았습니다.");
        			return false;
        		}

        		//환불은행
        		if (this.gfnIsNull(this.dsList.getColumn(0, "CD_GUJA"))) {
        			this.gfnAlert("환불은행을 선택하지 않았습니다.");
        			return false;
        		}
        	}

        	return true;
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_SUBRTBANK") {
        		dsUserParam.setColumn(nrow, "TY_CASH", "20");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        	}

        	if (id == "ccfCD_GUJA") {
        		dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.CD_ACNTUNIT);
        		dsUserParam.setColumn(nrow, "YN_OPTION"  , "N");
        	}
        	return true;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if(svcID == "insert"){
        		if (errorCode != 0) {
        			this.gfnAlert(errorMsg);
        		}
         	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsList_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		if(e.columnid == "TY_RETURN") {
        			switch (e.newvalue) {
        				case "1":	// 처리
        				case "2":	// 대체처리
        					this.ctclDT_RETURN.set_enable(true);
        					this.txtAM_FORFEIT.set_readonly(false);
        					this.txtAM_INTEREST.set_readonly(false);
        					this.txtAM_LOAN.set_readonly(false);
        					this.txtAM_LOANINTEREST.set_readonly(false);
        					// this.txtNM_OPENER.set_readonly(false);
        					this.ccfCD_GUJA.set_enable(true);
        					this.ccfCD_SUBRTBANK.set_enable(true);

        					this.sta02.set_textDecoration("underline");	// 지급일자.

        					break;
        				case "3":	// 미처리
        					this.ctclDT_RETURN.set_enable(false);
        					this.txtAM_FORFEIT.set_readonly(true);
        					this.txtAM_INTEREST.set_readonly(true);
        					this.txtAM_LOAN.set_readonly(true);
        					this.txtAM_LOANINTEREST.set_readonly(true);
        					//this.txtNM_OPENER.set_readonly(true);
        					this.ccfCD_GUJA.set_enable(false);
        					this.ccfCD_SUBRTBANK.set_enable(false);

        					this.dsList.setColumn(0, "DT_RETURN"  	  , "");
        					this.dsList.setColumn(0, "AM_FORFEIT" 	  , 0);
        					this.dsList.setColumn(0, "AM_INTEREST"	  , 0);
        					this.dsList.setColumn(0, "AM_LOAN"		  , 0);
        					this.dsList.setColumn(0, "AM_LOANINTEREST", 0);
        					this.dsList.setColumn(0, "AM_REFUND"	  , 0);

        					this.dsList.setColumn(0, "NM_OPENER"	  , "");
        					this.dsList.setColumn(0, "DS_GUJA_CANCEL" , "");
        					this.dsList.setColumn(0, "DS_BANK_CANCEL" , "");
        					this.dsList.setColumn(0, "CD_SUBRTBANK"   , "");
        					this.dsList.setColumn(0, "DS_SUBRTBANK"   , "");

        					this.sta02.set_textDecoration("none");	// 지급일자.

        					break;
        			}
        		}

        		if(e.columnid == "NM_OPENER") {
        			this.dsList.setColumn(0, "YN_DELAY"   , "Y");
        			this.dsList.setColumn(0, "YN_DISCOUNT", "Y");
        			this.dsList.setColumn(0, "CD_GUJA"	  , "");
        		}

        		switch(e.columnid) {
        			case "AM_FORFEIT":
        			case "AM_INTEREST":
        			case "AM_LOAN":
        			case "AM_LOANINTEREST":
        			case "CHK_DELAY":
        				if(e.newvalue == "0") this.dsList.setColumn(0, "AM_DELAY", 0);
        			case "CHK_DISCOUNT":
        				if(e.newvalue == "0") this.dsList.setColumn(0, "AM_DISCOUNT", 0);

        				//환불금액 = 입금원금 + 지급이자 - (위약금 + 대출원금 + 상환이자) + 연체료 - 환불금
        				this.dsList.setColumn(0, "AM_REFUND", this.dsList.getColumn(0, "AM_RECEIPT") +
        													  this.dsList.getColumn(0, "AM_INTEREST") -
        													  this.dsList.getColumn(0, "AM_FORFEIT") +
        													  this.dsList.getColumn(0, "AM_LOAN") +
        													  this.dsList.getColumn(0, "AM_LOANINTEREST") +
        													  this.dsList.getColumn(0, "AM_DELAY") -
        													  this.dsList.getColumn(0, "AM_DISCOUNT"));
        				trace(this.dsList.saveXML());
        				break;
        		}
        	}
        };

        this.fnInsert = function() {
        	this.dsInsert.clearData();
        	this.dsInsert.addRow();

        	/* 수정 후 */
        	this.dsInsert.setColumn(0, "CD_ACNTUNIT", this.CD_ACNTUNIT);	// 사업자번호
        	this.dsInsert.setColumn(0, "TY_GUBUN", "");	// 구분 A: 아파트 S: 상가
        	this.dsInsert.setColumn(0, "NO_CHASU", "");	// 차수
        	this.dsInsert.setColumn(0, "NO_DONG", this.NO_DONG);	// 동
        	this.dsInsert.setColumn(0, "NO_FLOOR", this.NO_FLOOR);	// 층
        	this.dsInsert.setColumn(0, "NO_HO", this.NO_HO);	// 호
        	this.dsInsert.setColumn(0, "NO_UNIONMEMBER", "");	// 조합원번호

        	this.dsInsert.setColumn(0, "DT_CANCEL", this.dsList.getColumn(0, "DT_CANCEL"));	// 해약일자
        	this.dsInsert.setColumn(0, "DS_CANCEL", this.dsList.getColumn(0, "DS_CANCEL"));	// 해약사유
        	this.dsInsert.setColumn(0, "DT_RETURN", this.dsList.getColumn(0, "DT_RETURN"));	// 지급일자
        	this.dsInsert.setColumn(0, "TY_RETURN", this.dsList.getColumn(0, "TY_RETURN") == "1" ? "Y" : "N");	// 지급여부(Y:지급, N:미지급)
        	this.dsInsert.setColumn(0, "AM_DISCOUNT", this.dsList.getColumn(0, "AM_DISCOUNT"));	// 할인금
        	this.dsInsert.setColumn(0, "AM_DELAY", this.dsList.getColumn(0, "AM_DELAY"));	// 연체료
        	this.dsInsert.setColumn(0, "AM_FORFEIT", this.dsList.getColumn(0, "AM_FORFEIT"));	// 위약금
        	this.dsInsert.setColumn(0, "AM_INTEREST", this.dsList.getColumn(0, "AM_INTEREST"));	// 지급이자
        	this.dsInsert.setColumn(0, "AM_LOAN", this.dsList.getColumn(0, "AM_LOAN"));	// 대위변제원금
        	this.dsInsert.setColumn(0, "AM_LOANINTEREST", this.dsList.getColumn(0, "AM_LOANINTEREST"));	// 대위변제상환/이자
        	this.dsInsert.setColumn(0, "AM_REFUND", this.dsList.getColumn(0, "AM_RETURN"));	// 환불금액(지급금액)

        	// 추가 된 부분
        	this.dsInsert.setColumn(0, "DS_OWNER", "");			// 예금주
        	this.dsInsert.setColumn(0, "DS_BANK_CANCEL", "");	// 환불은행
        	this.dsInsert.setColumn(0, "DS_GUJA_CANCEL", "");	// 환불은행/계좌(고객)
        	this.dsInsert.setColumn(0, "CD_BANKVENDOR", "");	// 대위변제환불은행코드(회계거래처테이블조인)
        	this.dsInsert.setColumn(0, "DS_HANDLER", "");		// 해약처리자 (입력자명)
        	this.dsInsert.setColumn(0, "CD_DEPT_BH", "");		// 발행부서
        	this.dsInsert.setColumn(0, "CD_FINANCING", "");		// 재경팀
        	this.dsInsert.setColumn(0, "YN_CHKD", this.dsList.getColumn(0, "TY_RETURN") == "2" ? "Y" : "N");	// 대체전표 처리여부
        	this.dsInsert.setColumn(0, "ID_INSERT", this.AuthClient.ID_USER);	// 입력자ID
        	this.dsInsert.setColumn(0, "NO_CONTRACT", this.dsList.getColumn(0, "NO_CONTRACT"));		// 계약번호

        	//this.dsInsert.setColumn(0, "DS_CONTRACT", this.dsList.getColumn(0, "DS_CONTRACT"));	// 품목명
        	//this.dsInsert.setColumn(0, "DS_CONTRACTOR", this.dsList.getColumn(0, "DS_CONTRACTOR"));	// 해약자명
        	//this.dsInsert.setColumn(0, "YN_Delay", this.dsList.getColumn(0, "CHK_DELAY"));	// 환불처리 연체료 체크
        	//this.dsInsert.setColumn(0, "YN_Discount", this.dsList.getColumn(0, "CHK_DISCOUNT"));	// 환불처리 할인료 체크
        	//this.dsInsert.setColumn(0, "AM_BUNYANG", this.dsList.getColumn(0, "AM_BUNYANG"));	// 공급금액
        	//this.dsInsert.setColumn(0, "AM_RECEIPT", this.dsList.getColumn(0, "AM_RECEIPT"));	// 입금원금
        	//this.dsInsert.setColumn(0, "CD_SUBRTBANK", this.dsList.getColumn(0, "CD_SUBRTBANK"));	// 환불은행/계좌(고객)
        	//this.dsInsert.setColumn(0, "CD_GUJA", this.dsList.getColumn(0, "CD_GUJA"));	// 환불은행

        	/* 수정전
        	this.dsInsert.setColumn(0, "CD_ACNTUNIT"	, this.CD_ACNTUNIT.substr(0, 6));
        	this.dsInsert.setColumn(0, "TY_GUBUN"		, this.CD_ACNTUNIT.substr(6, 1));
        	this.dsInsert.setColumn(0, "NO_CHASU"		, this.CD_ACNTUNIT.substr(7, 2));
        	this.dsInsert.setColumn(0, "NO_DONG" 		, this.NO_DONG);
        	this.dsInsert.setColumn(0, "NO_FLOOR"		, this.NO_FLOOR);
        	this.dsInsert.setColumn(0, "NO_HO"			, this.NO_HO);
        	this.dsInsert.setColumn(0, "NO_UNIONMEMBER" , this.NO_UNIONMEMBER);
        	this.dsInsert.setColumn(0, "DT_CANCEL"		, this.dsList.getColumn(0, "DT_CANCEL"));
        	this.dsInsert.setColumn(0, "DS_CANCEL"		, this.dsList.getColumn(0, "DS_CANCEL"));
        	this.dsInsert.setColumn(0, "DT_RETURN" 		, this.dsList.getColumn(0, "DT_RETURN"));
        	this.dsInsert.setColumn(0, "TY_RETURN"		, this.dsList.getColumn(0, "TY_RETURN") == "1" ? "Y" : "N");
        	this.dsInsert.setColumn(0, "AM_DISCOUNT" 	, this.dsList.getColumn(0, "AM_DISCOUNT"));
        	this.dsInsert.setColumn(0, "AM_DELAY"		, this.dsList.getColumn(0, "AM_DELAY"));
        	this.dsInsert.setColumn(0, "AM_FORFEIT"		, this.dsList.getColumn(0, "AM_FORFEIT"));
        	this.dsInsert.setColumn(0, "AM_INTEREST"	, this.dsList.getColumn(0, "AM_INTEREST"));
        	this.dsInsert.setColumn(0, "AM_LOAN"		, this.dsList.getColumn(0, "AM_LOAN"));
        	this.dsInsert.setColumn(0, "AM_LOANINTEREST", this.dsList.getColumn(0, "AM_LOANINTEREST"));
        	this.dsInsert.setColumn(0, "AM_RETURN"		, this.dsList.getColumn(0, "AM_RETURN"));
        	this.dsInsert.setColumn(0, "DS_OWNER"		, this.dsList.getColumn(0, "CD_SUBRTBANK"));
        	this.dsInsert.setColumn(0, "DS_BANK_CANCEL"	, this.dsList.getColumn(0, "DS_SUBRTBANK"));
        	this.dsInsert.setColumn(0, "DS_GUJA_CANCEL"	, this.dsList.getColumn(0, "DS_GUJA"));
        	this.dsInsert.setColumn(0, "CD_BANKVENDOR"	, this.dsList.getColumn(0, "CD_GUJA"));
        	this.dsInsert.setColumn(0, "DS_HANDLER"		, this.AuthClient.DS_HNAME);
        	this.dsInsert.setColumn(0, "CD_DEPT_BH"		, this.AuthClient.CD_DEPT);
        	this.dsInsert.setColumn(0, "CD_FINANCING"	, this.UserInfo.DF_SPACE01);
        	this.dsInsert.setColumn(0, "YN_CHKD"		, this.dsList.getColumn(0, "TY_RETURN") == "2" ? "Y" : "N");
        	this.dsInsert.setColumn(0, "NO_CONTRACT"	, this.dsList.getColumn(0, "NO_CONTRACT"));
        	this.dsInsert.setColumn(0, "YN_DELAY"		, this.cchkYN_DELAY.value == true ? "Y" : "N");
        	this.dsInsert.setColumn(0, "YN_DISCOUNT"	, this.cchkYN_DISCOUNT.value == true ? "Y" : "N");
        	this.dsInsert.setColumn(0, "ID_INSERT"  	, this.AuthClient.ID_USER);
        	*/
        	var strSvcId    = "insert";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        this.btnOK_onclick = function(obj,e) {
        	if(!this.fnSaveValidate()) return;

        	var strMsg = "";

        	if(this.dsList.getColumn(0, "TY_RETIURN") == "1") {
        		strMsg = "계약해약 및 자동으로 해약전표를 발행합니다.\n계속 진행하시겠습니까?";
        	} else {
        		strMsg = "계약해약을 하시겠습니까?";
        	}
        	this.gfnConfirm(strMsg, function(strId, val) {
        		if(val) {
        			this.fnInsert();
        		}
        	});
        };

        this.btnCANCLE_onclick = function(obj,e) {
        	this.getParentContext().close(false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staTITLE.addEventHandler("onclick",this.divData_staTITLE_onclick,this);
            this.divData.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divData.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.divData.form.ctclDT_RETURN.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.ctclDT_CANCEL.addEventHandler("onchanged",this.fnSearchInit,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DRF_DLGCANCELACC.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
