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
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(970,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCBPR_ESTIMATION_AGREEMENT_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DCBPR_ESTIMATION_AGREEMENT_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BID\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUBCON\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"ID_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQUEST\" type=\"DATETIME\" size=\"256\"/><Column id=\"RM_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"AM_MATERIAL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_LABOR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_COST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TOTAL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DT_AGREEMENT\" type=\"DATETIME\" size=\"256\"/><Column id=\"RM_AGREEMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REQUEST\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_STATUS\">01</Col><Col id=\"RM_AGREEMENT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDS_STATUS", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">01</Col><Col id=\"DS_CODE\">합의요청</Col></Row><Row><Col id=\"CD_CODE\">02</Col><Col id=\"DS_CODE\">합의반려</Col></Row><Row><Col id=\"CD_CODE\">03</Col><Col id=\"DS_CODE\">합의완료</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BID\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUBCON\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BID\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUBCON\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"ID_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQUEST\" type=\"DATETIME\" size=\"256\"/><Column id=\"RM_REQUET\" type=\"STRING\" size=\"256\"/><Column id=\"AM_MATERIAL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_LABOR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_COST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TOTAL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DT_AGREEMENT\" type=\"DATETIME\" size=\"256\"/><Column id=\"RM_AGREEMENT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("합의요청");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnInit","865","10","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("합의초기화");
            obj.set_cssclass("btnExt");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0","40","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_SITE","staCD_SITE:-1","40","230","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_BID","staBgCD_SITE:-1","40","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("입찰번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgNO_BID","staNO_BID:-1","40","230","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","staBgNO_BID:-1","40","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("업체");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_VENDOR","staCD_VENDOR:-1","40","230","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_REQUEST","0","staCD_SITE:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("합의요청일시");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDT_REQUEST","staDT_REQUEST:-1","staBgCD_SITE:-1","230","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_REQUEST","staBgDT_REQUEST:-1","staNO_BID:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("합의요청자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgID_REQUEST","staID_REQUEST:-1","staBgNO_BID:-1","230","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_STATUS","staBgID_REQUEST:-1","staCD_VENDOR:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_STATUS","staDS_STATUS:-1","staBgCD_VENDOR:-1","230","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_MATERIAL","0","staDT_REQUEST:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("재료비총액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_MATERIAL","staAM_MATERIAL:-1","staBgDT_REQUEST:-1","230","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_LABOR","staBgAM_MATERIAL:-1","staID_REQUEST:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("노무비총액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_LABOR","staAM_LABOR:-1","staBgID_REQUEST:-1","230","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_COST","staBgAM_LABOR:-1","staDS_STATUS:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("경비총액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_COST","staAM_COST:-1","staBgDS_STATUS:-1","230","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_TOTAL","0","staAM_COST:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("합의요청총액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_TOTAL","staAM_TOTAL:-1","staBgAM_COST:-1","860","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRM_REQUEST","0","staBgAM_TOTAL:-1","87","90",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("합의요청내용");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgRM_REQUEST","staRM_REQUEST:-1","staBgAM_TOTAL:-1","860","90",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLEBottom","0","staBgRM_REQUEST:5","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("합의");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_AGREEMENT","0","staTITLEBottom:5","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_text("합의일시");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDT_AGREEMENT","staDT_AGREEMENT:-1","staTITLEBottom:5","860","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRM_AGREEMENT","0","staBgDT_AGREEMENT:-1","87","90",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_text("합의내용");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgRM_AGREEMENT","staRM_AGREEMENT:-1","staBgDT_AGREEMENT:-1","860","90",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_SITE","staCD_SITE:5","staTITLE:15","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_SITE","edtCD_SITE:2","staTITLE:15","128","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_BID","staNO_BID:5","staTITLE:15","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_SUBCON","edtNO_BID:2","staTITLE:15","128","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_VENDOR","staCD_VENDOR:5","staTITLE:15","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_VENDOR","edtCD_VENDOR:2","staTITLE:15","128","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("edtDT_REQUEST","staDT_REQUEST:5","edtCD_SITE:9","220","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_readonly("true");
            obj.set_type("string");
            obj.set_format("####/##/## ##:##:##");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtID_REQUEST","staNO_BID:5","edtCD_SITE:9","220","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboDS_STATUS","staDS_STATUS:5","edtCD_SITE:9","220","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_innerdataset("dsDS_STATUS");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_readonly("true");
            obj.set_text("합의요청");
            obj.set_value("01");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_MATERIAL","staAM_MATERIAL:5","edtDT_REQUEST:9","220","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_format("#,0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LABOR","staAM_LABOR:5","edtDT_REQUEST:9","220","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_format("#,0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_COST","staAM_COST:5","edtDT_REQUEST:9","220","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_format("#,0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_TOTAL","staAM_TOTAL:5","ctxtAM_MATERIAL:9","220","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_format("#,0");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("ctxtRM_REQUEST","staRM_REQUEST:5","ctxtAM_TOTAL:9","850","80",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_value("");
            obj.set_wordWrap("char");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("edtDT_AGREEMENT","staDT_AGREEMENT:5","staTITLEBottom:10","220","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_readonly("true");
            obj.set_format("####/##/## ##:##:##");
            obj.set_type("string");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("ctxtRM_AGREEMENT","staRM_AGREEMENT:5","edtDT_AGREEMENT:9","850","80",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_value("");
            obj.set_wordWrap("char");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","41.74%","ctxtRM_AGREEMENT:20","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_text("확인");
            obj.set_enable("true");
            obj.set_cssclass("btnExt");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","51.45%","ctxtRM_AGREEMENT:20","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_text("취소");
            obj.set_cssclass("btnExt");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_WORK","0","staNO_BID:28","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("유찰유형");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_REASON","0","staNO_BID:28","87","90",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("특기사항");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3","staTY_WORK:-1","staBg2:28",null,"30","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg4","86","127",null,"90","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboTY_WORK","staTY_WORK:5","edtNO_BID:38","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_innerdataset("dsTY_WORK");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("edtDS_FALLREASON","staDS_REASON:5","edtNO_BID:38",null,"80","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.edtCD_SITE","value","dsData","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.edtDS_SITE","value","dsData","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.edtNO_BID","value","dsData","NO_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.edtDS_SUBCON","value","dsData","DS_SUBCON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.edtCD_VENDOR","value","dsData","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.edtDS_VENDOR","value","dsData","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.edtDT_REQUEST","value","dsData","DT_REQUEST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.edtID_REQUEST","value","dsData","DS_REQUEST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.ccboDS_STATUS","value","dsData","DS_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.ctxtAM_MATERIAL","value","dsData","AM_MATERIAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.ctxtAM_LABOR","value","dsData","AM_LABOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.ctxtAM_COST","value","dsData","AM_COST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.ctxtAM_TOTAL","value","dsData","AM_TOTAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.edtDT_AGREEMENT","value","dsData","DT_AGREEMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.ctxtRM_AGREEMENT","value","dsData","RM_AGREEMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.ctxtRM_REQUEST","value","dsData","RM_REQUEST");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DCB_ESTIMATION_AGREEMENT.xfdl", function() {
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
        	this.dsData.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        	this.dsData.setColumn(0, "DS_SITE", this.getOwnerFrame().DS_SITE);
        	this.dsData.setColumn(0, "NO_BID", this.getOwnerFrame().NO_BID);
        	this.dsData.setColumn(0, "DS_SUBCON", this.getOwnerFrame().DS_SUBCON);
        	this.dsData.setColumn(0, "CD_VENDOR", this.getOwnerFrame().CD_VENDOR);
        	this.dsData.setColumn(0, "DS_VENDOR", this.getOwnerFrame().DS_VENDOR);
        	this.dsData.setColumn(0, "AM_MATERIAL", this.getOwnerFrame().AM_MATERIAL);
        	this.dsData.setColumn(0, "AM_LABOR", this.getOwnerFrame().AM_LABOR);
        	this.dsData.setColumn(0, "AM_COST", this.getOwnerFrame().AM_COST);
        	this.dsData.setColumn(0, "AM_TOTAL", nexacro.toNumber(this.getOwnerFrame().AM_MATERIAL,0) +  nexacro.toNumber(this.getOwnerFrame().AM_LABOR,0) + nexacro.toNumber(this.getOwnerFrame().AM_COST,0));

        	this.FormBtns.Select.click();
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
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("NO_BID", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("NO_BID", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("ID_REQUEST", "string");
        	this.dsSave.addColumn("DT_REQUEST", "datetime");
        	this.dsSave.addColumn("RM_REQUEST", "string");
        	this.dsSave.addColumn("AM_MATERIAL", "bigdecimal");
        	this.dsSave.addColumn("AM_LABOR", "bigdecimal");
        	this.dsSave.addColumn("AM_COST", "bigdecimal");
        	this.dsSave.addColumn("AM_TOTAL", "bigdecimal");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	//if (!this.fnSelectValidate()) return false;

        	//this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsData.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "NO_BID", this.dsData.getColumn(0, "NO_BID"));
        	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsData.getColumn(0, "CD_VENDOR"));

        	var strSvcId    = "select";
        	var strSvcType  = "select";
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
        /************************************************************************
         * Validate
         ************************************************************************/

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg)
        {
        	if(svcID == "select") {
        		if(this.dsList.rowcount > 0)
        		{
        			this.dsList.setColumn(0, "AM_MATERIAL", this.dsData.getColumn(0, "AM_MATERIAL"));
        			this.dsList.setColumn(0, "AM_LABOR", this.dsData.getColumn(0, "AM_LABOR"));
        			this.dsList.setColumn(0, "AM_COST", this.dsData.getColumn(0, "AM_COST"));
        			this.dsList.setColumn(0, "AM_TOTAL", this.dsData.getColumn(0, "AM_TOTAL"));
        			this.dsData.copyRow(0, this.dsList, 0);

        			if(this.dsData.getColumn(0, "DS_STATUS") != "01" && this.dsData.getColumn(0, "DS_STATUS") != "02")
        			{
        				this.divData.form.btnOk.set_enable(false);
        			}
        		}
        		else
        		{
        			this.dsData.setColumn(0, "ID_REQUEST", this.AuthClient.ID_USER);
        			this.dsData.setColumn(0, "DS_REQUEST", this.AuthClient.DS_HNAME);
        			//this.dsData.setColumn(0, "DT_REQUEST", this.gfnGetDate("time"));
        		}
        	}
        	else if (svcID == "save") {
        		if(errorCode == 0)
        		{
        			var returnMsg = true;

        			if(strArg == "D") returnMsg = "D";
        			// this.close()가 작동하지 않았고,
        			// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        			this.getParentContext().close(returnMsg);
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
        	// 빈값으로 보내면 생성/저장
        	this.fnSave("");
        };

        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };

        this.divData_ctxtRM_REQUEST_onchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue)
        	{
        		this.dsData.setColumn(0, "RM_REQUEST", e.postvalue);
        	}
        };

        this.fnSave = function(ty_wrk)
        {
        	this.dsSave.clearData();
        	var nrow = this.dsSave.addRow();

        	this.dsSave.setColumn(nrow, "TY_WRK", ty_wrk);
        	this.dsSave.setColumn(nrow, "CD_SITE", this.dsData.getColumn(0, "CD_SITE"));
        	this.dsSave.setColumn(nrow, "NO_BID", this.dsData.getColumn(0, "NO_BID"));
        	this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsData.getColumn(0, "CD_VENDOR"));
        	this.dsSave.setColumn(nrow, "ID_REQUEST", this.dsData.getColumn(0, "ID_REQUEST"));
        	this.dsSave.setColumn(nrow, "DT_REQUEST", this.dsData.getColumn(0, "DT_REQUEST"));
        	this.dsSave.setColumn(nrow, "RM_REQUEST", this.dsData.getColumn(0, "RM_REQUEST"));
        	this.dsSave.setColumn(nrow, "AM_MATERIAL", this.dsData.getColumn(0, "AM_MATERIAL"));
        	this.dsSave.setColumn(nrow, "AM_LABOR", this.dsData.getColumn(0, "AM_LABOR"));
        	this.dsSave.setColumn(nrow, "AM_COST", this.dsData.getColumn(0, "AM_COST"));
        	this.dsSave.setColumn(nrow, "AM_TOTAL", this.dsData.getColumn(0, "AM_TOTAL"));

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "";
        	var strArg      = ty_wrk;
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]


        }

        this.divData_btnInit_onclick = function(obj,e)
        {
        	this.gfnConfirm("합의초기화를 진행하시겠습니까?","fnInit_callback");
        };

        this.fnInit_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.fnSave("D");
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnInit.addEventHandler("onclick",this.divData_btnInit_onclick,this);
            this.divData.form.staCD_SITE.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staDT_REQUEST.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staAM_MATERIAL.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staRM_REQUEST.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staRM_AGREEMENT.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.ctxtRM_REQUEST.addEventHandler("onchanged",this.divData_ctxtRM_REQUEST_onchanged,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
        };
        this.loadIncludeScript("DCB_ESTIMATION_AGREEMENT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
