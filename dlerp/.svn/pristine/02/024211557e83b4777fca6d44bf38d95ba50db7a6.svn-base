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
            this.set_titletext("");
            this.getSetter("maxwidth").set("500");
            this.getSetter("maxheight").set("580");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,580);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"YM_IMPOSE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_IN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BILL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DT_IN\"/><Col id=\"DT_FROM\"/><Col id=\"DT_TO\"/><Col id=\"CD_ACNTUNIT\"/><Col id=\"DS_ACNTUNIT\"/><Col id=\"NO_DONG\"/><Col id=\"NO_FLOOR\"/><Col id=\"NO_HO\"/><Col id=\"YM_IMPOSE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DLCPR_IMPOSE_PERSON</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DLCPR_PER_IMPOSE</Col></Row><Row><Col id=\"SP\">DZXPR_COMBO_SELECT</Col><Col id=\"TARGET\">combo</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DAY_NAPGI\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DAY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("<ColumnInfo><Column id=\"미수월수연체료\" type=\"STRING\" size=\"256\"/><Column id=\"미수원금\" type=\"STRING\" size=\"256\"/><Column id=\"미수연체료\" type=\"STRING\" size=\"256\"/><Column id=\"월임대료\" type=\"STRING\" size=\"256\"/><Column id=\"납기후연체료\" type=\"STRING\" size=\"256\"/><Column id=\"월보증수수료\" type=\"STRING\" size=\"256\"/><Column id=\"미수보증수수료\" type=\"STRING\" size=\"256\"/><Column id=\"미수보증연체료\" type=\"STRING\" size=\"256\"/><Column id=\"납기후보증연체료\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_TYPE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100.00%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("임대료 개별 부과");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSubTITLE","5","staTITLE:0",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("세대별 부과된 임대료를 개별 취소합니다");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","10","staSubTITLE:5","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("사업지코드");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_ACNTUNIT","staCD_ACNTUNIT:-1","staSubTITLE:5","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_DONG","10","staCD_ACNTUNIT:28","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("동층호");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgNO_DONG","staNO_DONG:-1","staBgCD_ACNTUNIT:28","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYM_IMPOSE","10","staNO_DONG:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("부과년월");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgYM_IMPOSE","staYM_IMPOSE:-1","staBgNO_DONG:-1","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_FROM_TO","10","staYM_IMPOSE:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("부과기간");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDT_FROM_TO","staDT_FROM_TO:-1","staBgYM_IMPOSE:-1","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_IN","10","staDT_FROM_TO:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("납기내일자");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDT_IN","staDT_FROM_TO:-1","staBgDT_FROM_TO:-1","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("cbtnImoseReView","289","staDT_IN:55","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("임대료부과내역보기");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYM_MISU","10","cbtnImoseReView:5","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("미수월수");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgYM_MISU","staCD_ACNTUNIT:-1","cbtnImoseReView:5","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_MISU","10","staYM_MISU:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("미수원금");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_MISU","staCD_ACNTUNIT:-1","staBgYM_MISU:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_MISUASSU","staBgAM_MISU:-1","staYM_MISU:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("미수보증수수료");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_MISUASSU","staAM_MISUASSU:-1","staBgYM_MISU:-1","102","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_DELAYIMPOSE","10","staAM_MISU:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("부과연체료");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_DELAYIMPOSE","staAM_DELAYIMPOSE:-1","staBgAM_MISU:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_DELAYRECEIVABLE_ASSU","staBgAM_DELAYIMPOSE:-1","staAM_MISUASSU:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_text("미수보증연체료");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_DELAYRECEIVABLE_ASSU","staAM_DELAYRECEIVABLE_ASSU:-1","staBgAM_MISUASSU:-1","102","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_MLEASE","10","staAM_DELAYIMPOSE:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_text("임대료");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_MLEASE","staAM_MLEASE:-1","staBgAM_DELAYIMPOSE:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_ASSU","staBgAM_MLEASE:-1","staAM_DELAYRECEIVABLE_ASSU:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_text("보증수수료");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_ASSU","staAM_ASSU:-1","staBgAM_DELAYRECEIVABLE_ASSU:-1","102","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_DELAY","10","staAM_MLEASE:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_text("연체료");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_DELAY","staAM_DELAY:-1","staBgAM_MLEASE:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_ASSU_DELAY","staBgAM_DELAY:-1","staAM_ASSU:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_text("보증연체료");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_ASSU_DELAY","staAM_ASSU_DELAY:-1","staBgAM_ASSU:-1","102","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNTUNIT","staCD_ACNTUNIT:5","staSubTITLE:10","200","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DLX_CFLEASESITE_CODEFIND_DAEBANG");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("34");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_DONG","staNO_DONG:5","ccfCD_ACNTUNIT:38","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_maxlength("4");
            obj.set_inputtype("normal,number");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_FLOOR","ctxtNO_DONG:5","ccfCD_ACNTUNIT:38","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_maxlength("2");
            obj.set_inputtype("normal,number");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_HO","ctxtNO_FLOOR:5","ccfCD_ACNTUNIT:38","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_maxlength("3");
            obj.set_inputtype("normal,number");
            this.divData.addChild(obj.name, obj);

            obj = new Button("cbtnNO_DONGHO","ctxtNO_HO:5","ccfCD_ACNTUNIT:38","25","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_cssclass("btn_CF_Search");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ctclYM_IMPOSE","staYM_IMPOSE:5","cbtnNO_DONGHO:9","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","staDT_FROM_TO:5","ctclYM_IMPOSE:9","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_FROM_range","ctclDT_FROM:5","ctclYM_IMPOSE:9","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_text("~");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","staDT_FROM_range:5","ctclYM_IMPOSE:9","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_IN","staDT_IN:5","ctclDT_FROM:9","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtYM_MISU","staYM_MISU:5","cbtnImoseReView:10","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_value("");
            obj.set_inputtype("normal,number");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_MISU","staAM_MISU:5","ctxtYM_MISU:9","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_value("");
            obj.set_format("#,#0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_MISUASSU","staAM_MISUASSU:5","ctxtYM_MISU:9","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            obj.set_value("");
            obj.set_format("#,#0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_DELAYIMPOSE","staAM_DELAYIMPOSE:5","ctxtAM_MISU:9","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_value("");
            obj.set_format("#,#0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_DELAYRECEIVABLE_ASSU","staAM_DELAYRECEIVABLE_ASSU:5","ctxtAM_MISUASSU:9","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj.set_value("");
            obj.set_format("#,#0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_MLEASE","staAM_MLEASE:5","ctxtAM_DELAYIMPOSE:9","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_value("");
            obj.set_format("#,#0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_ASSU","staAM_ASSU:5","ctxtAM_DELAYRECEIVABLE_ASSU:9","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("50");
            obj.set_value("");
            obj.set_format("#,#0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_DELAY","staAM_DELAY:5","ctxtAM_MLEASE:9","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("51");
            obj.set_value("");
            obj.set_format("#,#0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_ASSU_DELAY","staAM_ASSU_DELAY:5","ctxtAM_ASSU:9","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("52");
            obj.set_value("");
            obj.set_format("#,#0");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","30.00%","staAM_DELAY:20","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("53");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30","staAM_DELAY:20","60","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("54");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","10","94","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("구분");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","109","94","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboTY_TYPE","115","99","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTY_TYPE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_IN00","10","239","100","41",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("55");
            obj.set_text("세금계산서  발행일자");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDT_IN00","109","239","300","41",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_BILL","115","249","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("57");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ccfCD_ACNTUNIT.form.CDTextBox","value","dsList","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ccfCD_ACNTUNIT.form.DSTextBox","value","dsList","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ctxtNO_DONG","value","dsList","NO_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ctxtNO_FLOOR","value","dsList","NO_FLOOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ctxtNO_HO","value","dsList","NO_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.ctclYM_IMPOSE.form.TextBox","value","dsList","YM_IMPOSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.ctclDT_FROM","value","dsList","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.ctclDT_TO","value","dsList","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.ctclDT_IN","value","dsList","DT_IN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.ctxtYM_MISU","value","dsList1","미수월수연체료");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.ctxtAM_MISU","value","dsList1","미수원금");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.ctxtAM_DELAYIMPOSE","value","dsList1","미수연체료");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.ctxtAM_MLEASE","value","dsList1","월임대료");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.ctxtAM_DELAY","value","dsList1","납기후연체료");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.ctxtAM_MISUASSU","value","dsList1","미수보증수수료");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.ctxtAM_DELAYRECEIVABLE_ASSU","value","dsList1","미수보증연체료");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.ctxtAM_ASSU","value","dsList1","월보증수수료");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.ctxtAM_ASSU_DELAY","value","dsList1","납기후보증연체료");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.ccboTY_TYPE","value","dsList","TY_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.ctclDT_BILL","value","dsList","DT_BILL");
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
        this.registerScript("DLC_PERLEASEIMPOSE.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this._onload = true; // 최초 화면로드 판단.

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();
        	this.fnSetCombo();

        	this.dsList.setColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        	this.dsList.setColumn(0, "DS_ACNTUNIT", this.getOwnerFrame().DS_ACNTUNIT);
        	this.dsList.setColumn(0, "NO_DONG", this.getOwnerFrame().NO_DONG);
        	this.dsList.setColumn(0, "NO_FLOOR", this.getOwnerFrame().NO_FLOOR);
        	this.dsList.setColumn(0, "NO_HO", this.getOwnerFrame().NO_HO);
        	this.dsList.setColumn(0, "YM_IMPOSE", this.getOwnerFrame().YM_IMPOSE);

        	this.dsList1.setColumn(0, "미수월수연체료", 0);
        	this.dsList1.setColumn(0, "미수원금", 0);
        	this.dsList1.setColumn(0, "미수보증수수료", 0);
        	this.dsList1.setColumn(0, "미수연체료", 0);
        	this.dsList1.setColumn(0, "미수보증연체료", 0);
        	this.dsList1.setColumn(0, "월임대료", 0);
        	this.dsList1.setColumn(0, "월보증수수료", 0);
        	this.dsList1.setColumn(0, "납기후연체료", 0);
        	this.dsList1.setColumn(0, "납기후보증연체료", 0);

        	if(this.gfnIsNull(this.dsList.getColumn(0, "YM_IMPOSE")))
        	{
        		this.dsList.setColumn(0, "YM_IMPOSE", this.gfnGetDate().substr(0,6));
        	}

        	this.dsSearch.setColumn(0, "DAY_NAPGI", this.getOwnerFrame().Day_NAPGI);
        	this.dsSearch.setColumn(0, "YN_DAY", this.getOwnerFrame().YN_DAY);

        	if(this.dsSearch.getColumn(0, "YN_DAY") == "Y")
        	{
        		this.divData.form.ctclDT_IN.set_enable(false);
        	}
        	else
        	{
        		this.divData.form.ctclDT_IN.set_enable(true);
        	}

        	if(!this.gfnIsNull(this.dsSearch.getColumn(0, "DAY_NAPGI")) && this.dsSearch.getColumn(0, "DAY_NAPGI") != "00")
        	{
        		var strDate = this.dsList.getColumn(0, "YM_IMPOSE") + this.dsSearch.getColumn(0, "DAY_NAPGI");
        		strDate = this.gfnAddMonth(strDate, 1);

        		if(this.dsSearch.getColumn(0, "YN_DAY") != "Y")
        		{
        			this.dsList.setColumn(0, "DT_IN", strDate);
        		}
        	}

        	this._onload = false;
        };


        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_ACNTUNIT = this.divData.form.ccfCD_ACNTUNIT;
        	this.ccboTY_TYPE = this.divData.form.ccboTY_TYPE;
        };

        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DL");
        	this.dsCombo.setColumn(0, "CD_TYPE", "C1");



        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_TYPE=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,false); // 통신방법 정의 [생략가능]
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("NO_CHASU", "string");
        	this.dsSelect.addColumn("NO_DONG", "string");
        	this.dsSelect.addColumn("NO_FLOOR", "string");
        	this.dsSelect.addColumn("NO_HO", "string");
        	this.dsSelect.addColumn("DT_FROM", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
        	this.dsSelect.addColumn("DT_IN", "string");
        	this.dsSelect.addColumn("YM_IMPOSE", "string");
        	this.dsSelect.addColumn("ID_INSERT", "string");
        	this.dsSelect.addColumn("TY_TYPE", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_ACNTUNIT", "string");
        	this.dsInsert.addColumn("TY_GUBUN", "string");
        	this.dsInsert.addColumn("NO_CHASU", "string");
        	this.dsInsert.addColumn("NO_DONG", "string");
        	this.dsInsert.addColumn("NO_FLOOR", "string");
        	this.dsInsert.addColumn("NO_HO", "string");
        	this.dsInsert.addColumn("YM_IMPOSE", "string");
        	this.dsInsert.addColumn("DT_FROM", "string");
        	this.dsInsert.addColumn("DT_TO", "string");
        	this.dsInsert.addColumn("DT_IN", "string");
        	this.dsInsert.addColumn("MM_AR", "int");
        	this.dsInsert.addColumn("AM_RECEIVABLE", "bigdecimal");
        	this.dsInsert.addColumn("AM_DELAYRECEIVABLE", "bigdecimal");
        	this.dsInsert.addColumn("AM_LEASE", "bigdecimal");
        	this.dsInsert.addColumn("AM_DELAY", "bigdecimal");
        	this.dsInsert.addColumn("AM_ASSU", "bigdecimal");
        	this.dsInsert.addColumn("AM_RECEIVABLE_ASSU", "bigdecimal");
        	this.dsInsert.addColumn("AM_DELAYRECEIVABLE_ASSU", "bigdecimal");
        	this.dsInsert.addColumn("AM_DELAY_ASSU", "bigdecimal");
        	this.dsInsert.addColumn("ID_INSERT", "string");
        	this.dsInsert.addColumn("TY_TYPE", "string");
        	this.dsInsert.addColumn("DT_BILL", "string");
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACNTUNIT.AfterCDTextChanged = "fnAfterCDTextChanged";
        };
        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsList.getColumn(0, "CD_ACNTUNIT"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divData.form.ccfCD_ACNTUNIT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("사업지코드를 입력하세요.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsList.getColumn(0, "TY_TYPE")))
        	{
        		this.fnVaidateCallback = function() {
        			this.divData.form.ccboTY_TYPE.form.TextBox.setFocus();
        		}
        		validate = false;
        		this.gfnAlert("구분을 입력하지 않았습니다.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsList.getColumn(0, "NO_DONG")))
        	{
        		this.fnVaidateCallback = function() {
        			this.divData.form.ctxtNO_DONG.form.TextBox.setFocus();
        		}
        		validate = false;
        		this.gfnAlert("동을 입력하지 않았습니다.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsList.getColumn(0, "NO_FLOOR")))
        	{
        		this.fnVaidateCallback = function() {
        			this.divData.form.ctxtNO_FLOOR.form.TextBox.setFocus();
        		}
        		validate = false;
        		this.gfnAlert("층을 입력하지 않았습니다.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsList.getColumn(0, "NO_HO")))
        	{
        		this.fnVaidateCallback = function() {
        			this.divData.form.ctxtNO_HO.form.TextBox.setFocus();
        		}
        		validate = false;
        		this.gfnAlert("호를 입력하지 않았습니다.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsList.getColumn(0, "YM_IMPOSE")))
        	{
        		this.fnVaidateCallback = function() {
        			this.divData.form.ctclYM_IMPOSE.form.TextBox.setFocus();
        		}
        		validate = false;
        		this.gfnAlert("부과년월을 입력하지 않았습니다.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsList.getColumn(0, "DT_FROM")))
        	{
        		this.fnVaidateCallback = function() {
        			this.divData.form.ctclDT_FROM.setFocus();
        		}
        		validate = false;
        		this.gfnAlert("부과기간(시작일)을 입력하지 않았습니다.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsList.getColumn(0, "DT_TO")))
        	{
        		this.fnVaidateCallback = function() {
        			this.divData.form.ctclDT_TO.setFocus();
        		}
        		validate = false;
        		this.gfnAlert("부과기간(종료일)을 입력하지 않았습니다.", "fnVaidateCallback");
        	}
        	else if (this.dsSearch.getColumn(0, "YN_DAY") == "N" && this.gfnIsNull(this.dsList.getColumn(0, "DT_IN")))
        	{
        		this.fnVaidateCallback = function() {
        			this.divData.form.ctclDT_IN.form.TextBox.setFocus();
        		}
        		validate = false;
        		this.gfnAlert("납기내일자를 입력하지 않았습니다.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsList.getColumn(0, "DT_BILL")))
        	{
        		this.fnVaidateCallback = function() {
        			this.divData.form.ctclDT_BILL.setFocus();
        		}
        		validate = false;
        		this.gfnAlert("세금계산서 발행일자를 입력하지 않았습니다.", "fnVaidateCallback");
        	}
        	else if (this.gfnGetDiffMonth(this.dsList.getColumn(0, "DT_FROM"), this.dsList.getColumn(0, "DT_TO")) < 0)
        	{
        		this.fnVaidateCallback = function() {
        			this.divData.form.ctclDT_TO.setFocus();
        		}
        		validate = false;
        		this.gfnAlert("부과기간종료일은 부과기간시작일보다 커야합니다.", "fnVaidateCallback");
        	}

        	return validate;
        }

        this.fnSaveValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsList1.getColumn(0, "미수월수연체료"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divData.form.ctxtYM_MISU.setFocus();
        		}
        		this.gfnAlert("미수월수가 입력되지 않았습니다.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsList1.getColumn(0, "미수원금")))
        	{
        		this.fnVaidateCallback = function() {
        			this.divData.form.ctxtAM_MISU.setFocus();
        		}
        		validate = false;
        		this.gfnAlert("미수원금이 입력되지 않았습니다.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsList1.getColumn(0, "미수연체료")))
        	{
        		this.fnVaidateCallback = function() {
        			this.divData.form.ctxtAM_DELAYIMPOSE.setFocus();
        		}
        		validate = false;
        		this.gfnAlert("부과연체료가 입력되지 않았습니다.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsList1.getColumn(0, "월임대료")))
        	{
        		this.fnVaidateCallback = function() {
        			this.divData.form.ctxtAM_MLEASE.setFocus();
        		}
        		validate = false;
        		this.gfnAlert("임대료가 입력되지 않았습니다.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsList1.getColumn(0, "납기후연체료")))
        	{
        		this.fnVaidateCallback = function() {
        			this.divData.form.ctxtAM_DELAY.setFocus();
        		}
        		validate = false;
        		this.gfnAlert("연체료가 입력되지 않았습니다.", "fnVaidateCallback");
        	}

        	return validate;
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_ACNTUNIT") {
        		dsUserParam.setColumn(nrow, "FLAG", "A");
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "ID_GROUP", this.FormInfo.ID_GROUP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_TOTALCHASU", "");
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if (id == "ccfCD_ACNTUNIT") {
        		var arr = codeFindData;

        		if(arr.length > 0)
        		{
        			this.dsSearch.setColumn(0, "YN_DAY", arr[0]["YN_DAY"]);
        		}

        		if(this.dsSearch.getColumn(0, "YN_DAY") == "Y")
        		{
        			this.dsList.setColumn(0, "DT_IN", this.dsList.getColumn(0, "DT_TO"));
        			this.divData.form.ctclDT_IN.set_enable(false);
        		}
        		else
        		{
        			var dt_in = this.gfnGetLastDate(this.gfnAddMonth(this.dsList.getColumn(0, "DT_FROM"),1).substr(0,6));
        			this.divData.form.ctclDT_IN.set_enable(true);
        		}
        	}
        	return true;
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return;
        	}

        	if(svcID == "select") {
        		if(this.dsList1.rowcount == 0)
        		{
        			this.dsList1.addRow();
        		}
        	}
        	else if(svcID == "save"){
        		if (errorCode == 0) {
        			this.getParentContext().close(true);

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.btnOK_onclick = function(obj,e)
        {
        	if(!this.fnSelectValidate()) return;
        	if(!this.fnSaveValidate()) return;

        	var msg = this.dsList.getColumn(0, "NO_DONG") + " 동 "
        	        + this.dsList.getColumn(0, "NO_FLOOR") + " 층 "
        			+ this.dsList.getColumn(0, "NO_HO") + " 호 "
        			+ this.dsList.getColumn(0, "YM_IMPOSE") + "월분 임대료를 부과하시겠습니까? ";

        	this.gfnConfirm(msg, "fnOkConfirm");
        };

        this.fnOkConfirm = function(strId, val)
        {
        	if(val == true)
        	{
        		this.fnSave();
        	}
        }


        this.btnCANCLE_onclick = function(obj,e)
        {
        	// 취소
        	this.getParentContext().close(false);
        };


        this.divData_cbtnNO_DONGHO_onclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.dsList.getColumn(0, "CD_ACNTUNIT")))
        	{
        		this.gfnAlert("사업지코드 (을)를 먼저 입력 하셔야 합니다.");
        		return false;
        	}

        	var param = {};

        	param.CD_ACNTUNIT = this.dsList.getColumn(0, "CD_ACNTUNIT");
        	param.FLAG		  = "1";
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRI_DONGHOCONTRACT", "fnDonghoPopupCallback", param);
        };


        this.fnDonghoPopupCallback = function(svcID, val) {
        	if (!val) return;

        	var json = JSON.parse(val);
        	if (json.DONG.length > 0) {
        		this.dsList.setColumn(0, "NO_DONG", json.DONG);
        		this.dsList.setColumn(0, "NO_FLOOR", json.FLOOR);
        		this.dsList.setColumn(0, "NO_HO", json.HO);
        	}
        	else {
        		this.dsList.setColumn(0, "NO_DONG", "");
        		this.dsList.setColumn(0, "NO_FLOOR", "");
        		this.dsList.setColumn(0, "NO_HO", "");
        	}
        }

        this.fnSave = function()
        {
        	this.dsInsert.clearData();
        	var nrow = this.dsInsert.addRow();

        	this.dsInsert.setColumn(nrow, "CD_ACNTUNIT", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        	this.dsInsert.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        	this.dsInsert.setColumn(nrow, "NO_CHASU", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        	this.dsInsert.setColumn(nrow, "NO_DONG", this.dsList.getColumn(0, "NO_DONG"));
        	this.dsInsert.setColumn(nrow, "NO_FLOOR", this.dsList.getColumn(0, "NO_FLOOR"));
        	this.dsInsert.setColumn(nrow, "NO_HO", this.dsList.getColumn(0, "NO_HO"));
        	this.dsInsert.setColumn(nrow, "YM_IMPOSE", this.dsList.getColumn(0, "YM_IMPOSE"));
        	this.dsInsert.setColumn(nrow, "DT_FROM", this.dsList.getColumn(0, "DT_FROM"));
        	this.dsInsert.setColumn(nrow, "DT_TO", this.dsList.getColumn(0, "DT_TO"));
        	this.dsInsert.setColumn(nrow, "DT_IN", this.dsList.getColumn(0, "DT_IN"));
        	this.dsInsert.setColumn(nrow, "MM_AR", this.dsList1.getColumn(0, "미수월수연체료"));
        	this.dsInsert.setColumn(nrow, "AM_RECEIVABLE", this.dsList1.getColumn(0, "미수원금"));
        	this.dsInsert.setColumn(nrow, "AM_DELAYRECEIVABLE", this.dsList1.getColumn(0, "미수연체료"));
        	this.dsInsert.setColumn(nrow, "AM_LEASE", this.dsList1.getColumn(0, "월임대료"));
        	this.dsInsert.setColumn(nrow, "AM_DELAY", this.dsList1.getColumn(0, "납기후연체료"));
        	this.dsInsert.setColumn(nrow, "AM_ASSU", this.dsList1.getColumn(0, "월보증수수료"));
        	this.dsInsert.setColumn(nrow, "AM_RECEIVABLE_ASSU", this.dsList1.getColumn(0, "미수보증수수료"));
        	this.dsInsert.setColumn(nrow, "AM_DELAYRECEIVABLE_ASSU", this.dsList1.getColumn(0, "미수보증연체료"));
        	this.dsInsert.setColumn(nrow, "AM_DELAY_ASSU", this.dsList1.getColumn(0, "납기후보증연체료"));
        	this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        	this.dsInsert.setColumn(nrow, "TY_TYPE", this.dsList.getColumn(0, "TY_TYPE"));
        	this.dsInsert.setColumn(nrow, "DT_BILL", this.dsList.getColumn(0, "DT_BILL"));

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.divData_ctxtNO_DONG_onkillfocus = function(obj,e) {
        	if (this.gfnIsNull(this.dsList.getColumn(0, "NO_DONG"))) return;
        	if (nexacro.isNumeric(this.dsList.getColumn(0, "NO_DONG"))) {
        		this.dsList.setColumn(0, "NO_DONG", this.dsList.getColumn(0, "NO_DONG").padLeft(4, "0"));
        	}
        };


        this.divData_ctxtNO_FLOOR_onkillfocus = function(obj,e) {
        	if (this.gfnIsNull(this.dsList.getColumn(0, "NO_FLOOR"))) return;
        	if (nexacro.isNumeric(this.dsList.getColumn(0, "NO_FLOOR"))) {
        		this.dsList.setColumn(0, "NO_FLOOR", this.dsList.getColumn(0, "NO_FLOOR").padLeft(2, "0"));
        	}
        };

        this.divData_ctxtNO_HO_onkillfocus = function(obj,e) {
        	if (this.gfnIsNull(this.dsList.getColumn(0, "NO_HO"))) return;
        	if (nexacro.isNumeric(this.dsList.getColumn(0, "NO_HO"))) {
        		this.dsList.setColumn(0, "NO_HO", this.dsList.getColumn(0, "NO_HO").padLeft(3, "0"));
        	}
        };

        // 임대료부과내역보기 버튼 클릭.
        this.divData_cbtnImoseReView_onclick = function(obj,e)
        {
        	if(!this.fnSelectValidate()) return;

        	this.dsSelect.clearData();
        	var nrow = this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsList.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        	this.dsSelect.setColumn(0, "NO_DONG", this.dsList.getColumn(0, "NO_DONG"));
        	this.dsSelect.setColumn(0, "NO_FLOOR", this.dsList.getColumn(0, "NO_FLOOR"));
        	this.dsSelect.setColumn(0, "NO_HO", this.dsList.getColumn(0, "NO_HO"));
        	this.dsSelect.setColumn(0, "DT_FROM", this.dsList.getColumn(0, "DT_FROM"));
        	this.dsSelect.setColumn(0, "DT_TO", this.dsList.getColumn(0, "DT_TO"));
        	this.dsSelect.setColumn(0, "DT_IN", this.dsList.getColumn(0, "DT_IN"));
        	this.dsSelect.setColumn(0, "YM_IMPOSE", this.dsList.getColumn(0, "YM_IMPOSE"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList1=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		if(e.columnid == "YM_IMPOSE")
        		{
        			if(this.gfnIsNull(e.newvalue)) return;
        			if(e.newvalue.length != 6) return;

        			this.dsList.setColumn(0, "DT_FROM", e.newvalue + "01");
        			this.dsList.setColumn(0, "DT_TO",this.gfnGetLastDate(e.newvalue));

        			if(this.gfnIsNull(this.dsSearch.getColumn(0, "DAY_NAPGI")) || this._onload != true)
        			{
        				if(this.dsSearch.getColumn(0, "YN_DAY") == "Y")
        				{
        					this.dsList.setColumn(0, "DT_IN", this.dsList.getColumn(0, "DT_TO"));
        				}
        				else
        				{
        					this.dsList.setColumn(0, "DT_IN", this.gfnGetLastDate(this.gfnAddMonth(this.dsList.getColumn(0, "DT_FROM"),1).substr(0,6)));
        				}
        			}
        			else if(this.dsSearch.getColumn(0, "YN_DAY") == "N" && this._onload == true)
        			{
        				this.dsList.setColumn(0, "DT_IN", this.dsSearch.getColumn(0, "DAY_NAPGI"));
        			}
        		}
        		else if(e.columnid == "DT_TO")
        		{
        			if(this.dsSearch.getColumn(0, "YN_DAY") == "Y")
        			{
        				this.dsList.setColumn(0, "DT_IN", e.newvalue);
        			}
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.cbtnImoseReView.addEventHandler("onclick",this.divData_cbtnImoseReView_onclick,this);
            this.divData.form.ctxtNO_DONG.addEventHandler("onkillfocus",this.divData_ctxtNO_DONG_onkillfocus,this);
            this.divData.form.cbtnNO_DONGHO.addEventHandler("onclick",this.divData_cbtnNO_DONGHO_onclick,this);
            this.divData.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divData.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsList1.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsTY_TYPE.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DLC_PERLEASEIMPOSE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
