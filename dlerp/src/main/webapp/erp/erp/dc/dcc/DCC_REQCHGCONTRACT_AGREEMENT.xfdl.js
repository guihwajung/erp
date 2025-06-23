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
                this._setFormPosition(1000,490);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCCPR_REQCHGCONTRACT_AGREEMENT_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DCCPR_REQCHGCONTRACT_AGREEMENT_SAVE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DCCPR_REQCHGCONTRACT_APPROVE_AGREEMENT_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HADOCONT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HADOCONT\" type=\"STRING\" size=\"256\"/><Column id=\"SN_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"ID_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"RM_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TT_DOKUB\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TT_SILHENG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TT_HADO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TT_HADO_VAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DT_KONGSA_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_KONGSA_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_AGREEMENT\" type=\"STRING\" size=\"256\"/><Column id=\"RM_AGREEMENT\" type=\"STRING\" size=\"256\"/><Column id=\"ADDFILE_SIGN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TT_TOTAL\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"RM_AGREEMENT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDS_STATUS", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">01</Col><Col id=\"DS_CODE\">합의요청</Col></Row><Row><Col id=\"CD_CODE\">02</Col><Col id=\"DS_CODE\">합의반려</Col></Row><Row><Col id=\"CD_CODE\">03</Col><Col id=\"DS_CODE\">합의완료</Col></Row><Row><Col id=\"CD_CODE\">07</Col><Col id=\"DS_CODE\">임의합의요청</Col></Row><Row><Col id=\"CD_CODE\">08</Col><Col id=\"DS_CODE\">임의합의반려</Col></Row><Row><Col id=\"CD_CODE\">09</Col><Col id=\"DS_CODE\">임의합의완료</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BID\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUBCON\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HADOCONT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HADOCONT\" type=\"STRING\" size=\"256\"/><Column id=\"SN_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"ID_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"RM_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TT_DOKUB\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TT_SILHENG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TT_HADO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TT_HADO_VAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DT_KONGSA_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_KONGSA_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_AGREEMENT\" type=\"STRING\" size=\"256\"/><Column id=\"RM_AGREEMENT\" type=\"STRING\" size=\"256\"/><Column id=\"ADDFILE_SIGN\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("변경계약합의요청");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnInit",null,"10","80","20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("합의초기화");
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

            obj = new Static("staNO_HADOCONT","staBgCD_SITE:-1","40","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgNO_HADOCONT","staNO_HADOCONT:-1","40","230","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSN_SEQ","staBgNO_HADOCONT:-1","40","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("차수");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgSN_SEQ","staSN_SEQ:-1","40","242","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","0","staCD_SITE:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("업체");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_VENDOR","staCD_VENDOR:-1","staBgCD_SITE:-1","545","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_STATUS","staBgCD_VENDOR:-1","staNO_HADOCONT:-1","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_STATUS","staDS_STATUS:-1","staBgNO_HADOCONT:-1","242","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_REQUEST","0","staCD_VENDOR:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("합의요청일시");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDT_REQUEST","staDT_REQUEST:-1","staBgCD_VENDOR:-1","230","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_REQUEST","staBgDT_REQUEST:-1","staDS_STATUS:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("합의요청자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgID_REQUEST","staID_REQUEST:-1","staBgDS_STATUS:-1","230","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSPACE00","staBgID_REQUEST:-1","staDS_STATUS:-1","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgSPACE00","staSPACE00:-1","staBgDS_STATUS:-1","242","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_TT_DOKUB","0","staDT_REQUEST:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("변경도급금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_TT_DOKUB","staAM_TT_DOKUB:-1","staBgDT_REQUEST:-1","230","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_TT_SILHENG","staBgAM_TT_DOKUB:-1","staID_REQUEST:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("변경예산금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_TT_SILHENG","staAM_TT_SILHENG:-1","staBgID_REQUEST:-1","230","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_KONGSA","staBgAM_TT_SILHENG:-1","staID_REQUEST:-1","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("변경공사일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDT_KONGSA","staDT_KONGSA:-1","staBgID_REQUEST:-1","242","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_TT_HADO","0","staAM_TT_DOKUB:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("변경공급액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_TT_HADO","staAM_TT_HADO:-1","staBgAM_TT_DOKUB:-1","230","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_TT_HADO_VAT","staBgAM_TT_HADO:-1","staAM_TT_SILHENG:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_text("변경부가세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_TT_HADO_VAT","staAM_TT_HADO_VAT:-1","staBgAM_TT_SILHENG:-1","230","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_TT_TOTAL","staBgAM_TT_HADO_VAT:-1","staAM_TT_SILHENG:-1","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_text("변경총액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_TT_TOTAL","staAM_TT_TOTAL:-1","staBgAM_TT_SILHENG:-1","242","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRM_REQUEST","0","staAM_TT_HADO:-1","87","90",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_text("합의요청내용");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgRM_REQUEST","staRM_REQUEST:-1","staBgAM_TT_HADO:-1","875","90",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLEBottom","0","staRM_REQUEST:5","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_text("합의");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_AGREEMENT","0","staTITLEBottom:5","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_text("합의일시");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDT_AGREEMENT","staDT_AGREEMENT:-1","staTITLEBottom:5","875","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRM_AGREEMENT","0","staBgDT_AGREEMENT:-1","87","90",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_text("합의내용");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgRM_AGREEMENT","staRM_AGREEMENT:-1","staBgDT_AGREEMENT:-1","875","90",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
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

            obj = new Edit("edtNO_HADOCONT","staNO_HADOCONT:5","staTITLE:15","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_HADOCONT","edtNO_HADOCONT:2","staTITLE:15","128","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtSN_SEQ","staSN_SEQ:5","staTITLE:15","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_VENDOR","staCD_VENDOR:5","edtCD_SITE:9","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_VENDOR","edtCD_VENDOR:2","edtCD_SITE:9","443","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboDS_STATUS","staDS_STATUS:5","edtCD_SITE:9","230","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_innerdataset("dsDS_STATUS");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_readonly("true");
            obj.set_text("합의요청");
            obj.set_value("01");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("edtDT_REQUEST","staDT_REQUEST:5","edtCD_VENDOR:9","220","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_readonly("true");
            obj.set_type("string");
            obj.set_format("####/##/## ##:##:##");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtID_REQUEST","staID_REQUEST:5","edtCD_VENDOR:9","220","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_TT_DOKUB","staAM_TT_DOKUB:5","edtDT_REQUEST:9","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_format("9,990");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_DOKUB_WON","ctxtAM_TT_DOKUB:5","edtID_REQUEST:6","27","23",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_TT_SILHENG","staAM_TT_SILHENG:5","edtDT_REQUEST:9","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_format("9,990");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_TT_SILHENG_WON","ctxtAM_TT_SILHENG:5","edtID_REQUEST:6","27","23",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_KONGSA_FROM","staDT_KONGSA:5","edtDT_REQUEST:9","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDASH01","ctclDT_KONGSA_FROM:5","edtDT_REQUEST:9","12","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclTO_WORK","staDASH01:5","edtDT_REQUEST:9","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_TT_HADO","staAM_TT_HADO:5","ctxtAM_TT_DOKUB:9","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_format("#,0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_HADO_WON","ctxtAM_TT_HADO:5","ctxtAM_TT_DOKUB:6","27","23",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_TT_HADO_VAT","staAM_TT_HADO_VAT:5","ctxtAM_TT_DOKUB:9","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_format("#,0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_TT_HADO_VAT_WON","ctxtAM_TT_HADO_VAT:5","ctxtAM_TT_DOKUB:6","27","23",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_TT_TOTAL","staAM_TT_TOTAL:5","ctxtAM_TT_DOKUB:9","212","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_format("#,0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_TT_TOTAL_WON","ctxtAM_TT_TOTAL:5","ctxtAM_TT_DOKUB:6","27","23",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("ctxtRM_REQUEST","staRM_REQUEST:5","ctxtAM_TT_HADO:9","863","80",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_value("");
            obj.set_wordWrap("char");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("edtDT_AGREEMENT","staDT_AGREEMENT:5","staTITLEBottom:10","220","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("50");
            obj.set_readonly("true");
            obj.set_format("####/##/## ##:##:##");
            obj.set_type("string");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("ctxtRM_AGREEMENT","staRM_AGREEMENT:5","edtDT_AGREEMENT:9","863","80",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("51");
            obj.set_value("");
            obj.set_wordWrap("char");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","41.74%","ctxtRM_AGREEMENT:20","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("52");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","51.45%","ctxtRM_AGREEMENT:20","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("53");
            obj.set_text("취소");
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

            obj = new BindItem("item2","divData.form.edtNO_HADOCONT","value","dsData","NO_HADOCONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.edtDS_HADOCONT","value","dsData","DS_HADOCONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.edtSN_SEQ","value","dsData","SN_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.edtCD_VENDOR","value","dsData","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.edtDS_VENDOR","value","dsData","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.ccboDS_STATUS","value","dsData","DS_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.edtDT_REQUEST","value","dsData","DT_REQUEST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.edtID_REQUEST","value","dsData","DS_REQUEST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.ctxtAM_TT_DOKUB","value","dsData","AM_TT_DOKUB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.ctxtAM_TT_SILHENG","value","dsData","AM_TT_SILHENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.ctxtAM_TT_HADO","value","dsData","AM_TT_HADO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.ctxtAM_TT_HADO_VAT","value","dsData","AM_TT_HADO_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.ctxtAM_TT_TOTAL","value","dsData","AM_TT_TOTAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.ctxtRM_REQUEST","value","dsData","RM_REQUEST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.edtDT_AGREEMENT","value","dsData","DT_AGREEMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.ctxtRM_AGREEMENT","value","dsData","RM_AGREEMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.ctclDT_KONGSA_FROM","value","dsData","DT_KONGSA_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.ctclTO_WORK","value","dsData","DT_KONGSA_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DCC_REQCHGCONTRACT_AGREEMENT.xfdl", function() {
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
        	this.dsData.setColumn(0, "NO_HADOCONT", this.getOwnerFrame().NO_HADOCONT);
        	this.dsData.setColumn(0, "DS_HADOCONT", this.getOwnerFrame().DS_HADOCONT);
        	this.dsData.setColumn(0, "SN_SEQ", this.getOwnerFrame().SN_SEQ);
        	this.dsData.setColumn(0, "CD_VENDOR", this.getOwnerFrame().CD_VENDOR);
        	this.dsData.setColumn(0, "DS_VENDOR", this.getOwnerFrame().DS_VENDOR);
        	this.dsData.setColumn(0, "AM_TT_DOKUB", this.getOwnerFrame().AM_TT_DOKUB);
        	this.dsData.setColumn(0, "AM_TT_SILHENG", this.getOwnerFrame().AM_TT_SILHENG);
        	this.dsData.setColumn(0, "AM_TT_HADO", this.getOwnerFrame().AM_TT_HADO);
        	this.dsData.setColumn(0, "AM_TT_HADO_VAT", this.getOwnerFrame().AM_TT_HADO_VAT);
        	this.dsData.setColumn(0, "AM_TT_TOTAL", nexacro.toNumber(this.getOwnerFrame().AM_TT_HADO,0) + nexacro.toNumber(this.getOwnerFrame().AM_TT_HADO_VAT,0));
        	this.dsData.setColumn(0, "DT_KONGSA_FROM", this.getOwnerFrame().DT_KONGSA_FROM);
        	this.dsData.setColumn(0, "DT_KONGSA_TO", this.getOwnerFrame().DT_KONGSA_TO);

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
        	this.btnInit = this.gfnFormButtonAdd("btnInit", "fnInit");
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
        	this.dsSelect.addColumn("NO_HADOCONT", "string");
        	this.dsSelect.addColumn("SN_SEQ", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("NO_HADOCONT", "string");
        	this.dsSave.addColumn("SN_SEQ", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("ID_REQUEST", "string");
        	this.dsSave.addColumn("RM_REQUEST", "string");
        	this.dsSave.addColumn("AM_TT_DOKUB", "bigdecimal");
        	this.dsSave.addColumn("AM_TT_SILHENG", "bigdecimal");
        	this.dsSave.addColumn("AM_TT_HADO", "bigdecimal");
        	this.dsSave.addColumn("AM_TT_HADO_VAT", "bigdecimal");
        	this.dsSave.addColumn("DT_KONGSA_FROM", "string");
        	this.dsSave.addColumn("DT_KONGSA_TO", "string");
        	this.dsSave.addColumn("DS_STATUS", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_SITE", "string");
        	this.dsDelete.addColumn("NO_HADOCONT", "string");
        	this.dsDelete.addColumn("SN_SEQ", "string");
        	this.dsDelete.addColumn("CD_VENDOR", "string");
        	this.dsDelete.addColumn("ID_REQUEST", "string");
        	this.dsDelete.addColumn("DS_STATUS", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsData.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "NO_HADOCONT", this.dsData.getColumn(0, "NO_HADOCONT"));
        	this.dsSelect.setColumn(0, "SN_SEQ", this.dsData.getColumn(0, "SN_SEQ"));
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
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "select") {
        		if(this.dsList.rowcount > 0)
        		{
        			var am_tt_dokub = this.dsData.getColumn(0, "AM_TT_DOKUB");
        			var am_tt_silheng = this.dsData.getColumn(0, "AM_TT_SILHENG");

        			//this.dsList.setColumn(0, "AM_TT_DOKUB", this.dsData.getColumn(0, "AM_TT_DOKUB"));
        			//this.dsList.setColumn(0, "AM_TT_SILHENG", this.dsData.getColumn(0, "AM_TT_SILHENG"));
        			this.dsList.setColumn(0, "AM_TT_HADO", this.dsData.getColumn(0, "AM_TT_HADO"));
        			this.dsList.setColumn(0, "AM_TT_HADO_VAT", this.dsData.getColumn(0, "AM_TT_HADO_VAT"));
        			this.dsList.setColumn(0, "DT_KONGSA_FROM", this.dsData.getColumn(0, "DT_KONGSA_FROM"));
        			this.dsList.setColumn(0, "DT_KONGSA_TO", this.dsData.getColumn(0, "DT_KONGSA_TO"));

        			this.dsList.setColumn(0, "AM_TOTAL", this.dsData.getColumn(0, "AM_TOTAL"));
        			this.dsData.copyRow(0, this.dsList, 0);

        			this.dsData.setColumn(0, "AM_TT_DOKUB", am_tt_dokub);
        			this.dsData.setColumn(0, "AM_TT_SILHENG", am_tt_silheng);

        		}
        		else
        		{
        			this.dsData.setColumn(0, "ID_REQUEST", this.AuthClient.ID_USER);
        			this.dsData.setColumn(0, "DS_REQUEST", this.AuthClient.DS_HNAME);
        		}
        	}
        	else if (svcID == "save") {
        		if(errorCode == 0)
        		{
        			this.fnCallback_callback = function()
        			{
        				// this.close()가 작동하지 않았고,
        				// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        				this.getParentContext().close(true);
        			}
        			this.gfnAlert("합의요청이 정상처리되었습니다.", "fnCallback_callback");
        		}else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "delete") {
        		if(errorCode == 0)
        		{
        			this.fnCallback_callback = function()
        			{
        				this.getParentContext().close(true);
        			}

        			this.gfnAlert("합의 초기화가 정상처리되었습니다.", "fnCallback_callback");
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
        	this.dsSave.clearData();
        	var nrow = this.dsSave.addRow();

        	this.dsSave.setColumn(nrow, "CD_SITE", this.dsData.getColumn(0, "CD_SITE"));
        	this.dsSave.setColumn(nrow, "NO_HADOCONT", this.dsData.getColumn(0, "NO_HADOCONT"));
        	this.dsSave.setColumn(nrow, "SN_SEQ", this.dsData.getColumn(0, "SN_SEQ"));
        	this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsData.getColumn(0, "CD_VENDOR"));
        	this.dsSave.setColumn(nrow, "ID_REQUEST", this.dsData.getColumn(0, "ID_REQUEST"));
        	this.dsSave.setColumn(nrow, "RM_REQUEST", this.dsData.getColumn(0, "RM_REQUEST"));
        	this.dsSave.setColumn(nrow, "AM_TT_DOKUB", this.dsData.getColumn(0, "AM_TT_DOKUB"));
        	this.dsSave.setColumn(nrow, "AM_TT_SILHENG", this.dsData.getColumn(0, "AM_TT_SILHENG"));
        	this.dsSave.setColumn(nrow, "AM_TT_HADO", this.dsData.getColumn(0, "AM_TT_HADO"));
        	this.dsSave.setColumn(nrow, "AM_TT_HADO_VAT", this.dsData.getColumn(0, "AM_TT_HADO_VAT"));
        	this.dsSave.setColumn(nrow, "DT_KONGSA_FROM", this.dsData.getColumn(0, "DT_KONGSA_FROM"));
        	this.dsSave.setColumn(nrow, "DT_KONGSA_TO", this.dsData.getColumn(0, "DT_KONGSA_TO"));
        	this.dsSave.setColumn(nrow, "DS_STATUS", "01");

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

        // 합의 초기화
        this.fnInit = function(obj,e)
        {
        	this.gfnConfirm("현재까지 진행된 합의를 초기화하시겠습니까?","fnInit_callback");
        }

        this.fnInit_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.dsDelete.clearData();
        		var nrow = this.dsDelete.addRow();

        		this.dsDelete.setColumn(nrow, "CD_SITE", this.dsData.getColumn(0, "CD_SITE"));
        		this.dsDelete.setColumn(nrow, "NO_HADOCONT", this.dsData.getColumn(0, "NO_HADOCONT"));
        		this.dsDelete.setColumn(nrow, "SN_SEQ", this.dsData.getColumn(0, "SN_SEQ"));
        		this.dsDelete.setColumn(nrow, "CD_VENDOR", this.dsData.getColumn(0, "CD_VENDOR"));
        		this.dsDelete.setColumn(nrow, "ID_REQUEST", this.AuthClient.ID_USER);
        		this.dsDelete.setColumn(nrow, "DS_STATUS", "");

        		var strSvcId    = "delete";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "delete=dsDelete";
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
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnInit.addEventHandler("onclick",this.fnInit,this);
            this.divData.form.staCD_SITE.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staCD_VENDOR.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staDT_REQUEST.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staAM_TT_DOKUB.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staAM_TT_HADO.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staRM_REQUEST.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staRM_AGREEMENT.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.divData.form.ctxtRM_REQUEST.addEventHandler("onchanged",this.divData_ctxtRM_REQUEST_onchanged,this);
        };
        this.loadIncludeScript("DCC_REQCHGCONTRACT_AGREEMENT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
