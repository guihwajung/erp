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
            this.set_titletext("주택-약정관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1310,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DOAPR_CIVL_PROJ_BID_RLT_SELECT</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DOAPR_CIVL_PROJ_CO_BID_SELECT</Col></Row><Row><Col id=\"TARGET\">select3</Col><Col id=\"SP\">DOAPR_CIVL_PROJ_CO_CONTRCT_BID_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DOAPR_CIVL_PROJ_BID_RLT_MERGE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DOAPR_CIVL_PROJ_BID_RLT_DELETE</Col></Row><Row><Col id=\"TARGET\">selectCharge</Col><Col id=\"SP\">DOAPR_PROJ_YNCHARGE_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BID_RECOG\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DESIGN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DT_FIX\" type=\"STRING\" size=\"256\"/><Column id=\"AM_FIX_SUP\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_FIX_VAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ESTM_CAL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ESTM_SUP\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ESTM_VAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_BID_CAL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_BID_SUP\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_BID_VAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NO_BID_CO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FCT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ESTM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_INIT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_INIT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_BID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_SC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_BID_OUR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RT_BID_OUR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_BID_RLT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BID_RLT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONT_SCHD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ENTY\" type=\"STRING\" size=\"256\"/><Column id=\"TY_ENTY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_OPNI\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"AM_FIX_SUP\">0</Col><Col id=\"AM_DESIGN\">0</Col><Col id=\"AM_FIX_VAT\">0</Col><Col id=\"AM_ESTM_CAL\">0</Col><Col id=\"AM_ESTM_SUP\">0</Col><Col id=\"AM_ESTM_VAT\">0</Col><Col id=\"AM_BID_CAL\">0</Col><Col id=\"AM_BID_SUP\">0</Col><Col id=\"AM_BID_VAT\">0</Col><Col id=\"AM_ESTM\">0</Col><Col id=\"AM_INIT\">0</Col><Col id=\"RT_INIT\">0</Col><Col id=\"RT_BID\">0</Col><Col id=\"RT_SC\">0</Col><Col id=\"AM_BID_OUR\">0</Col><Col id=\"RT_BID_OUR\">0</Col><Col id=\"DS_BID_RLT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROJ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_BID_RLT", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_ENTY", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRcvYNCharge", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"YN_EXISTS\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_PROJ","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("프로젝트코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_PROJ","0.0","staCD_PROJ:10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_PROJ","ctxtCD_PROJ:0.0","staCD_PROJ:10.0","186","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:5","1310",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta24","124","249","1158","90",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_BID_RECOG","5","17","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("수주인식");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","124","17","307","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_DESIGN","430","17","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("설계금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta18","549","17","307","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta11","124","133","307","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_BID_CO","5","133","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_text("입찰참여사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_FIX","5","46","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_text("수주확정");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","124","46","307","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_FIX_SUP","430","46","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_text("수주확정 공급가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","549","46","307","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta09","549","104","307","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_BID_SUP","430","104","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_text("낙찰가격 공급가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_ESTM_CAL","5","75","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_text("예정가격");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta05","124","75","307","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CLS01","430","75","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_text("예정가격 공급가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","549","75","307","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta08","124","104","307","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_BID_CAL","5","104","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_text("낙찰가격");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07","974","75","308","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CLS_CONST01","855","75","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_text("예정가격 부가세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","974","46","308","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_FIX_VAT","855","46","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_text("수주확정 부가세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_BID_VAT","855","104","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_text("낙찰가격 부가세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta10","974","104","308","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","974","17","308","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_BID_RLT","855","17","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_text("입찰결과");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_FCT","430","133","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_text("난이도계수");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta12","549","133","307","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_ENTY","855","133","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("51");
            obj.set_text("참가방법");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta13","974","133","308","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_ESTM","5","162","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("53");
            obj.set_text("추정가격");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta14","124","162","1158","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_INIT","5","191","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("55");
            obj.set_text("기초금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta17","124","191","307","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRT_INIT","430","191","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("57");
            obj.set_text("기초금액 사정율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta19","549","191","165","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRT_BID","713","191","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("61");
            obj.set_text("낙찰사 투찰율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta15","832","191","166","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRT_SC","997","191","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("65");
            obj.set_text("추첨예가 사정율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta20","1116","191","166","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_BID_OUR","5","220","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("69");
            obj.set_text("당사투찰가격");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta21","124","220","307","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRT_BID_OUR","430","220","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("71");
            obj.set_text("당사투찰율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta22","549","220","733","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_OPNI","5","249","120","90",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("75");
            obj.set_text("의견");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtDS_OPNI","129","254","1148","80",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_maxlength("1000");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTab1Title","5","349","100","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("77");
            obj.set_text("투찰사 목록");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrd1","5","378","715","202",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("78");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTab1Title00","736","349","140","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("79");
            obj.set_text("낙찰 공동도급사");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrd2","730","378","551","202",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("80");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_DESIGN","554","22","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,##0");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            obj.set_displaynulltext("0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_FIX_SUP","554","51","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,##0");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            obj.set_displaynulltext("0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_ESTM_CAL","129","80","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,##0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_displaynulltext("0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_ESTM_SUP","554","80","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,##0");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            obj.set_displaynulltext("0 ");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_BID_CAL","129","109","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,##0");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_displaynulltext("0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_BID_SUP","554","109","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,##0");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            obj.set_displaynulltext("0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtNO_BID_CO","129","138","140","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            obj.set_displaynulltext(" ");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta16","274","138","41","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_text("(개사)");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtNO_FCT","554","138","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#.###");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            obj.set_displaynulltext("0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_FIX_VAT","979","51","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,##0");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            obj.set_displaynulltext("0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_ESTM_VAT","979","80","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,##0");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            obj.set_displaynulltext("0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_BID_VAT","979","109","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,##0");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            obj.set_displaynulltext("0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_ESTM","129","167","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,##0");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            obj.set_displaynulltext("0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_INIT","129","196","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,##0");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            obj.set_displaynulltext("0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_INIT","554","196","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("58");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("0.###");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_displaynulltext("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta23","639","196","41","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("59");
            obj.set_text("%");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_BID","837","196","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("62");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("0.###");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_displaynulltext("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta26","922","196","41","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("63");
            obj.set_text("%");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_SC","1121","196","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("66");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("0.###");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_displaynulltext("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta27","1206","196","41","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("67");
            obj.set_text("%");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_BID_OUR","129","225","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,##0");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            obj.set_displaynulltext("0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtRT_BID_OUR","554","225","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("72");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("0.###");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_displaynulltext("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta25","639","225","41","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("73");
            obj.set_text("%");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divFile","5","584","1277","150",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_url("cmm::cmmFileManager.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnPopCoBid","634","349","88","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("투찰사 관리");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnPopCoContrctBid","1161","349","121","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("낙찰공동도급사 관리");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_BID_RECOG","129","22","110","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("20200101");
            obj.set_enable("true");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FIX","129","51","110","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("20200101");
            obj.set_enable("true");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccfTY_ENTY","979","138","140","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_ENTY");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccfTY_BID_RLT","979","22","140","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_BID_RLT");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctxtCD_PROJ","value","dsSearch","CD_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctxtDS_PROJ","value","dsSearch","DS_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ctxtAM_DESIGN","value","dsDetail","AM_DESIGN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.ctxtAM_FIX_SUP","value","dsDetail","AM_FIX_SUP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.ctxtAM_ESTM_CAL","value","dsDetail","AM_ESTM_CAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.ctxtAM_ESTM_SUP","value","dsDetail","AM_ESTM_SUP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.ctxtAM_BID_CAL","value","dsDetail","AM_BID_CAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.ctxtAM_BID_SUP","value","dsDetail","AM_BID_SUP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.ctxtNO_BID_CO","value","dsDetail","NO_BID_CO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.ctxtNO_FCT","value","dsDetail","NO_FCT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.ctxtAM_FIX_VAT","value","dsDetail","AM_FIX_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.ctxtAM_ESTM_VAT","value","dsDetail","AM_ESTM_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.ctxtAM_BID_VAT","value","dsDetail","AM_BID_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.tabData.tab4.form.ctxtAM_ESTM_SUP","value","dsDetail","AM_ESTM_SUP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.tabData.tab4.form.ctxtAM_ESTM_VAT","value","dsDetail","AM_ESTM_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.ctxtAM_ESTM","value","dsDetail","AM_ESTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.tabData.tab4.form.ctxtAM_ESTM_CAL","value","dsDetail","AM_ESTM_CAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.ctxtAM_INIT","value","dsDetail","AM_INIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.ctxtRT_INIT","value","dsDetail","RT_INIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.tabData.tab4.form.ctxtRT_BID_OUR","value","dsDetail","RT_BID_OUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.ctxtRT_BID","value","dsDetail","RT_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.ctxtRT_SC","value","dsDetail","RT_SC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.ctxtAM_BID_OUR","value","dsDetail","AM_BID_OUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.ctxtRT_BID_OUR","value","dsDetail","RT_BID_OUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.txtDS_OPNI","value","dsDetail","DS_OPNI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.ctclDT_BID_RECOG","value","dsDetail","DT_BID_RECOG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ctclDT_FIX","value","dsDetail","DT_FIX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ccfTY_ENTY","value","dsDetail","TY_ENTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.ccfTY_BID_RLT","value","dsDetail","TY_BID_RLT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmFileManager.xfdl");
        };
        
        // User Script
        this.registerScript("DOB_CIVL_BID_RLT.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.BID_RLT_GUBUN = this.getOwnerFrame().BID_RLT_GUBUN;

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//
        	this.fnSetButton();
        	this.fnSetExtendButton();

        	this.fnSetVariable();
        	this.fnSetParameter();
        	this.fnSetEvent();

        	this.fnSetCombo();

        	// 파일관리자 - 조회전에는 disable
        	this.divData.form.divFile.form.set_enable(false);
        	// 첨부파일
        	this.dsSearch.setColumn(0, "CD_PROJ", this.getOwnerFrame().CD_PROJ);
        	this.dsSearch.setColumn(0, "DS_PROJ", this.getOwnerFrame().DS_PROJ);

        	if(this.BID_RLT_GUBUN == "U"){
        		this.gfnSetFormStatus(this, "");
        		this.fnSetButton();
        		this.fnSelect();
        	}else{
        		this.fnAdd();
        		this.gfnSetFormStatus(this, "I");
        		this.fnSetButton();
        	}
        };

        /************************************************************************
         * 담당자 여부 검사
         ************************************************************************/
         this.fnGetYNCharge = function(){

        	this.dsReqYNCharge = new Dataset();
        	this.dsReqYNCharge.addColumn("CD_PROJ", "string");
        	this.dsReqYNCharge.addColumn("ID_USER", "string");

        	this.dsReqYNCharge.addRow();
        	this.dsReqYNCharge.setColumn(0, "CD_PROJ", this.getOwnerFrame().CD_PROJ);
        	this.dsReqYNCharge.setColumn(0, "ID_USER", this.objApp.gdsUserInfo.getColumn(0, "ID_USER"));

        	var strSvcId    = "selectCharge";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        		inData      = "selectCharge=dsReqYNCharge";
        		outData     = "dsRcvYNCharge=selectCharge0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,false); // 통신방법 정의 [생략가능]
         }


        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	this.FormBtns.Select.set_enable(false);
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Save.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        	//this.FormBtns.Excel.set_enable(false);
        	//this.FormBtns.Print.set_enable(false);

        	if(this.FormInfo.TY_AUTH == "R") {
        		this.FormBtns.Select.set_enable(true);
        		return;
        	}

        	var frmStatus = this.gfnGetFormStatus(this);

        	switch(frmStatus) {
        	case "I":
        		this.FormBtns.Select.set_enable(false);
        		this.FormBtns.Save.set_enable(true);
        		this.FormBtns.Del.set_enable(false);

        		this.divData.form.btnPopCoBid.set_enable(false);
        		this.divData.form.btnPopCoContrctBid.set_enable(false);
        		break;
        	case "U":
        		this.FormBtns.Select.set_enable(true);
        		this.FormBtns.Save.set_enable(true);
        		this.FormBtns.Del.set_enable(true);

        		this.divData.form.btnPopCoBid.set_enable(false);
        		this.divData.form.btnPopCoContrctBid.set_enable(false);
        		break;
        	case "D":
        		break;
        	default: /*기본(조회완료)*/
        		this.FormBtns.Select.set_enable(true);
        		this.FormBtns.Save.set_enable(false);
        		this.FormBtns.Del.set_enable(true);

        		this.divData.form.btnPopCoBid.set_enable(true);
        		this.divData.form.btnPopCoContrctBid.set_enable(true);
        	}
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
        	this.CD_CORP = "";

        	this.ccfTY_BID_RLT = this.divData.form.ccfTY_BID_RLT;
        	this.ccfTY_ENTY = this.divData.form.ccfTY_ENTY;

        	//투찰사 목록
        	this.dxGrid1 = this.divData.form.objGrd1;
        	//낙찰 공동도급사 목록
        	this.dxGrid2 = this.divData.form.objGrd2;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfTY_BID_RLT.AfterCDTextChanged = "fnCodeFinder_AfterCDTextChanged";	//입찰결과
        	this.ccfTY_ENTY.AfterCDTextChanged = "fnCodeFinder_AfterCDTextChanged";	//참가방법

        	//this.ccfID_USER_EXPL.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DO", "DOA_CO_BID");
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DO", "DOA_CO_CONTRCT_BID");

        	this.dxGrid1.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid2.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        };


        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow)  {
        	if(id == "ccfTY_BID_RLT"){
        	}
        	return true;
         }

         this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow)  {
        	dsUserParam.setColumn(nrow, "CD_CORP", "");
        	dsUserParam.setColumn(nrow, "CD_SITE", "");
        	dsUserParam.setColumn(nrow, "TY_VENDOR", "CIVL");
        	return true;
         }

        this.fnCodeFinder_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(arr.length > 0)
        	{
        		switch(id)
        		{
        			case "":
        			break;
        		}
        	}
        }
        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSave = new Dataset();

        	this.dsSave.addColumn("CD_PROJ","string");
        	this.dsSave.addColumn("DT_BID_RECOG","string");
        	this.dsSave.addColumn("AM_DESIGN","bigdecimal");
        	this.dsSave.addColumn("DT_FIX","string");
        	this.dsSave.addColumn("AM_FIX_SUP","bigdecimal");
        	this.dsSave.addColumn("AM_FIX_VAT","bigdecimal");
        	this.dsSave.addColumn("AM_ESTM_SUP","bigdecimal");
        	this.dsSave.addColumn("AM_ESTM_VAT","bigdecimal");
        	this.dsSave.addColumn("AM_BID_SUP","bigdecimal");
        	this.dsSave.addColumn("AM_BID_VAT","bigdecimal");
        	this.dsSave.addColumn("NO_BID_CO","bigdecimal");
        	this.dsSave.addColumn("NO_FCT","bigdecimal");
        	this.dsSave.addColumn("AM_ESTM","bigdecimal");
        	this.dsSave.addColumn("AM_INIT","bigdecimal");
        	this.dsSave.addColumn("RT_INIT","bigdecimal");
        	this.dsSave.addColumn("RT_BID","bigdecimal");
        	this.dsSave.addColumn("RT_SC","bigdecimal");
        	this.dsSave.addColumn("AM_BID_OUR","bigdecimal");
        	this.dsSave.addColumn("RT_BID_OUR","bigdecimal");
        	this.dsSave.addColumn("TY_BID_RLT","string");
        	this.dsSave.addColumn("DT_CONT_SCHD","string");
        	this.dsSave.addColumn("TY_ENTY","string");
        	this.dsSave.addColumn("DS_OPNI","string");
        	this.dsSave.addColumn("ID_FILE_ATTCH", "string");
        	this.dsSave.addColumn("ID_USER", "string");

        	this.dsSave.addRow();
        }



        /************************************************************************
         * 콤보 이벤트 설정
         ************************************************************************/
        this.fnSetCombo = function() {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();	// 입찰결과
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(0, "CD_TYPE", "32");

        	this.dsCombo.addRow();	// 참가방법
        	this.dsCombo.setColumn(1, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(1, "CD_TYPE", "33");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_BID_RLT=combo0 dsTY_ENTY=combo1";
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
         * 트렌젝션 버튼 이벤트
         ************************************************************************/
        this.fnSelect = function(obj,e){

        	this.dsSelect = new Dataset();

        	this.dsSelect.addColumn("CD_PROJ", "string");
        	this.dsSelect.addColumn("YN_READ", "string");

        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        	this.dsSelect.setColumn(0, "YN_READ", "Y");

        	var strSvcId    = "select";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select1=dsSelect select2=dsSelect select3=dsSelect";
        	var outData     = "dsDetail=select10 dsList1=select20 dsList2=select30";
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

        this.fnSave = function(obj,e){
        	this.dsSave.copyRow(0, this.dsDetail, 0);

        	this.dsSave.setColumn(0, "CD_PROJ", this.dsDetail.getColumn(0, "CD_PROJ"));
        	this.dsSave.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

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
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,false); // 통신방법 정의 [생략가능]
        }

        this.fnDel = function(obj,e){
        	this.gfnConfirm("삭제 하시겠습니까?", function(strId, val){

        		if(val == true) {
        			var strSvcId    = "delete";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "delete=dsDetail";
        			var outData     = "";
        			var strArg      = "";
        			var callBackFnc = "fnCallback";

        			this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        								strSvcType , 	// transaction을 요청할 구분
        								inProc,			// Procedure 정보 Dataset 이름
        								inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        								outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        								strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        								callBackFnc,false); // 통신방법 정의 [생략가능]
        		}
        	});
        }


        this.fnAdd = function() {
        	this.dsDetail.set_enableevent(false);
        	this.dsDetail.setColumn(0, "CD_PROJ", this.getOwnerFrame().CD_PROJ);
        	this.dsDetail.set_enableevent(true);
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg){
        	if(svcID == "select") {

        		this.divData.form.divFile.form.set_enable(true);
        		// 첨부파일
        		//var cd_site = this.ccfCD_SITE.form.CDTextBox.value;
        		if(!this.gfnIsNull(this.dsDetail.getColumn(0, "CD_PROJ"))){
        			var fileManager = {};
        			fileManager.CD_GUBUN = "DOC3";
        			fileManager.CD_DIR = [ this.dsDetail.getColumn(0, "CD_PROJ") ];
        			fileManager.CD_REF1 = this.dsDetail.getColumn(0, "CD_PROJ");

        			if(this.FormInfo.TY_AUTH == "R") {
        				fileManager.IS_READONLY = true;
        			} else {
        				fileManager.IS_READONLY = false;
        			}
        			// div FileManager 셋팅
        			this.divData.form.divFile.form.setFileManager(fileManager);
        		}
        		// 예정가격 계산.
        		var AM_ESTM_SUP = this.dsDetail.getColumn(0, "AM_ESTM_SUP");
        		var AM_ESTM_VAT = this.dsDetail.getColumn(0, "AM_ESTM_VAT");
        		// 낙찰가격 계산.
        		var AM_BID_SUP = this.dsDetail.getColumn(0, "AM_BID_SUP");
        		var AM_BID_VAT = this.dsDetail.getColumn(0, "AM_BID_VAT");

        		this.dsDetail.set_enableevent(false);
        		this.dsDetail.setColumn(0, "AM_ESTM_CAL", AM_ESTM_SUP + AM_ESTM_VAT);
        		this.dsDetail.setColumn(0, "AM_BID_CAL", AM_BID_SUP + AM_BID_VAT);
        		this.dsDetail.set_enableevent(true);


        	} else if(svcID == "save") {
        		this.BID_RLT_GUBUN = "U";
        		this.FormBtns.Select.click();
        	} else if(svcID == "delete") {
        		this.getParentContext().close(true);
        	}
        	this.fnSetButton();
        };


        this.fnDialogCallback = function(svcID, value) {
        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	데이터 변경시 이벤트( 공통버튼 활성화 여부 )
         */
        this.dsDetail_onvaluechanged = function(obj,e){
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this, "U");
        		this.fnSetButton();

        		/************************
        		* 가격변경 이벤트
        		************************/
        		this.dsDetail.set_enableevent(false);
        		if(e.columnid == "AM_ESTM_SUP"){
        			// 예정가격 공급가
        			var AM_ESTM_SUP = this.dsDetail.getColumn(0, "AM_ESTM_SUP");
        			// 예정가격 부가세
        			var AM_ESTM_VAT = this.dsDetail.getColumn(0, "AM_ESTM_SUP")*0.1;
        			this.dsDetail.setColumn(0, "AM_ESTM_VAT", AM_ESTM_VAT);
        			// 낙찰가격
        			var AM_BID_CAL = this.dsDetail.getColumn(0, "AM_BID_CAL");
        			// 기초금액
        			var AM_INIT = this.dsDetail.getColumn(0, "AM_INIT");
        			// 당사투찰가격
        			var AM_BID_OUR = this.dsDetail.getColumn(0, "AM_BID_OUR");
        			// 예정가격
        			var AM_ESTM_CAL = nexacro.toNumber(AM_ESTM_SUP) + nexacro.toNumber(AM_ESTM_VAT);
        			// 낙찰사 투찰율 계산
        			var RT_BID = AM_ESTM_CAL==0 ? 0:(AM_BID_CAL/AM_ESTM_CAL) * 100;

        			// 낙찰사 투찰율 세팅
        			this.dsDetail.setColumn(0, "RT_BID", RT_BID);
        			// 예정가격 세팅
        			this.dsDetail.setColumn(0, "AM_ESTM_CAL", AM_ESTM_CAL);
        			// 추첨예가 사정율 세팅
        			this.dsDetail.setColumn(0, "RT_SC", AM_INIT==0 ? 0:nexacro.round(((AM_ESTM_CAL - AM_INIT) / AM_INIT) * 100,3));
        			// 당사투찰율 세팅
        			this.dsDetail.setColumn(0, "RT_BID_OUR", AM_ESTM_CAL==0 ? 0:nexacro.round((AM_BID_OUR / AM_ESTM_CAL) * 100,3));
        		} else if(e.columnid == "AM_ESTM_VAT"){	/* 예정가격 변경시 */
        			// 예정가격 공급가
        			var AM_ESTM_SUP = this.dsDetail.getColumn(0, "AM_ESTM_SUP");
        			// 예정가격 부가세
        			var AM_ESTM_VAT = this.dsDetail.getColumn(0, "AM_ESTM_VAT");
        			// 낙찰가격
        			var AM_BID_CAL = this.dsDetail.getColumn(0, "AM_BID_CAL");
        			// 기초금액
        			var AM_INIT = this.dsDetail.getColumn(0, "AM_INIT");
        			// 당사투찰가격
        			var AM_BID_OUR = this.dsDetail.getColumn(0, "AM_BID_OUR");
        			// 예정가격
        			var AM_ESTM_CAL = nexacro.toNumber(AM_ESTM_SUP) + nexacro.toNumber(AM_ESTM_VAT);
        			// 낙찰사 투찰율 계산
        			var RT_BID =  AM_ESTM_CAL==0 ? 0:nexacro.round((AM_BID_CAL/AM_ESTM_CAL) * 100,3);

        			// 낙찰사 투찰율 세팅
        			this.dsDetail.setColumn(0, "RT_BID", RT_BID);
        			// 예정가격 세팅
        			this.dsDetail.setColumn(0, "AM_ESTM_CAL", AM_ESTM_CAL);
        			// 추첨예가 사정율 세팅
        			this.dsDetail.setColumn(0, "RT_SC", AM_INIT==0 ? 0:nexacro.round(((AM_ESTM_CAL - AM_INIT) / AM_INIT) * 100,3));
        			// 당사투찰율 세팅
        			this.dsDetail.setColumn(0, "RT_BID_OUR",AM_ESTM_CAL==0 ? 0: nexacro.round((AM_BID_OUR / AM_ESTM_CAL) * 100,3));

        		} else if(e.columnid == "AM_BID_SUP"){
        			// 낙찰가격 공급가
        			var AM_BID_SUP = this.dsDetail.getColumn(0, "AM_BID_SUP");
        			// 낙찰가격 부가세
        			var AM_BID_VAT = this.dsDetail.getColumn(0, "AM_BID_SUP")*0.1;
        			// 낙찰가격
        			var AM_BID_CAL = nexacro.toNumber(AM_BID_SUP) + nexacro.toNumber(AM_BID_VAT);
        			// 예정가격
        			var AM_ESTM_CAL = this.dsDetail.getColumn(0, "AM_ESTM_CAL");
        			// 낙찰사 투찰율 계산
        			var RT_BID = AM_ESTM_CAL==0 ? 0: nexacro.round((AM_BID_CAL/AM_ESTM_CAL) * 100,3);

        			// 낙찰사 투찰율 세팅
        			this.dsDetail.setColumn(0, "RT_BID", RT_BID);
        			// 낙찰가격 세팅
        			this.dsDetail.setColumn(0, "AM_BID_CAL", AM_BID_CAL);
        			//// 낙찰가격 부가세 셋팅
        			this.dsDetail.setColumn(0, "AM_BID_VAT", AM_BID_VAT);
        		} else if(e.columnid == "AM_BID_VAT"){	/* 낙찰가격 변경시 */
        			// 낙찰가격 공급가
        			var AM_BID_SUP = this.dsDetail.getColumn(0, "AM_BID_SUP");
        			// 낙찰가격 부가세
        			var AM_BID_VAT = this.dsDetail.getColumn(0, "AM_BID_VAT");
        			// 낙찰가격
        			var AM_BID_CAL = nexacro.toNumber(AM_BID_SUP) + nexacro.toNumber(AM_BID_VAT);
        			// 예정가격
        			var AM_ESTM_CAL = this.dsDetail.getColumn(0, "AM_ESTM_CAL");
        			// 낙찰사 투찰율 계산
        			var RT_BID =AM_ESTM_CAL==0 ? 0:  nexacro.round((AM_BID_CAL/AM_ESTM_CAL) * 100,3);

        			// 낙찰사 투찰율 세팅
        			this.dsDetail.setColumn(0, "RT_BID", RT_BID);
        			// 낙찰가격 세팅
        			this.dsDetail.setColumn(0, "AM_BID_CAL", AM_BID_CAL);
        		} else if(e.columnid == "AM_INIT"){	/* 기초금액 변경시 */
        			// 기초금액
        			var AM_INIT = this.dsDetail.getColumn(0, "AM_INIT");
        			// 설계금액
        			var AM_DESIGN = this.dsDetail.getColumn(0, "AM_DESIGN");
        			// 예정가격
        			var AM_ESTM_CAL = this.dsDetail.getColumn(0, "AM_ESTM_CAL");

        			// 기초금액 사정율 세팅
        			this.dsDetail.setColumn(0, "RT_INIT",AM_DESIGN==0 ? 0:  nexacro.round(((AM_INIT - AM_DESIGN) / AM_DESIGN) * 100,3));
        			// 추첨예가 사정율 세팅
        			this.dsDetail.setColumn(0, "RT_SC",AM_INIT==0 ? 0: nexacro.round(((AM_ESTM_CAL - AM_INIT) / AM_INIT) * 100,3));

        		} else if(e.columnid == "AM_BID_OUR"){ /* 당사투찰가격 변경시 */
        			// 당사투찰가격
        			var AM_BID_OUR = this.dsDetail.getColumn(0, "AM_BID_OUR");
        			// 예정가격
        			var AM_ESTM_CAL = this.dsDetail.getColumn(0, "AM_ESTM_CAL");

        			// 당사투찰율 세팅
        			this.dsDetail.setColumn(0, "RT_BID_OUR",AM_ESTM_CAL==0 ? 0: nexacro.round((AM_BID_OUR / AM_ESTM_CAL) * 100,3));

        		} else if(e.columnid == "AM_DESIGN"){
        			// 설계금액
        			var AM_DESIGN = this.dsDetail.getColumn(0, "AM_DESIGN");
        			// 기초금액
        			var AM_INIT = this.dsDetail.getColumn(0, "AM_INIT");

        			// 기초금액 사정율 세팅
        			this.dsDetail.setColumn(0, "RT_INIT",AM_DESIGN==0 ? 0: nexacro.round(((AM_INIT - AM_DESIGN) / AM_DESIGN) * 100,3));
        		} else if(e.columnid == "AM_FIX_SUP"){
        			// 수주확정
        			var AM_FIX_VAT = this.dsDetail.getColumn(0, "AM_FIX_SUP")*0.1;
        			this.dsDetail.setColumn(0, "AM_FIX_VAT", AM_FIX_VAT);
        		}
        		this.dsDetail.set_enableevent(true);
        	}
        };
        /*
         *	투찰사 관리 팝업 호출 버튼
         */
        this.divData_btnPopCoBid_onclick = function(obj,e){
        	var param = {
        		CD_PROJ 	: this.dsSearch.getColumn(0, "CD_PROJ"),
        		DS_PROJ		: this.dsSearch.getColumn(0, "DS_PROJ"),
        		AM_ESTM_CAL	: this.dsDetail.getColumn(0, "AM_ESTM_CAL")
        	}

        	this.gfnFormOpen("DOB", "DOB_CIVL_BID_CO", "fnDialogCallback", param, 835, 590);
        };

        /*
         *	공동도급사 관리 팝업 호출 버튼
         */
        this.divData_btnPopCoContrctBid_onclick = function(obj,e){
        	var param = {
        		CD_PROJ 	: this.dsSearch.getColumn(0, "CD_PROJ"),
        		DS_PROJ		: this.dsSearch.getColumn(0, "DS_PROJ")
        	}

        	this.gfnFormOpen("DOB", "DOB_CIVL_BID_CO_CONT", "fnDialogCallback", param, 635, 600);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnPopCoBid.addEventHandler("onclick",this.divData_btnPopCoBid_onclick,this);
            this.divData.form.btnPopCoContrctBid.addEventHandler("onclick",this.divData_btnPopCoContrctBid_onclick,this);
            this.dsDetail.addEventHandler("onvaluechanged",this.dsDetail_onvaluechanged,this);
        };
        this.loadIncludeScript("DOB_CIVL_BID_RLT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
