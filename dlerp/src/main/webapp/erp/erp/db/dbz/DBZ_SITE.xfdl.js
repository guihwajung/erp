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
            this.set_titletext("공사개요-개설");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBZPR_SITE_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DBZPR_SITE_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DBZPR_SITE_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SAUPGBN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">01</Col><Col id=\"DS_CODE\">자체현장</Col></Row><Row><Col id=\"CD_CODE\">02</Col><Col id=\"DS_CODE\">LH현장</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","419","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFMAINSITE");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:24",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","100.00%","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("50");
            obj.set_text("사업부문");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","staTitle:5","100%","5",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem01","0","divSplitter:5","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("93");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar01","staItem01:-1","staItem01:-30","600","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("147");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtCD_SITE","staItem01:5","staItem01:-25","180","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem02","0","staItem01:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("73");
            obj.set_text("현장명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar02","staItem02:-1","staItem02:-30","600","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("142");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_SITE","staItem02:5","staItem02:-25","395","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem03","0","staItem02:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("105");
            obj.set_text("공사명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar03","staItem03:-1","staItem03:-30","600","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("138");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_KONGSA","staItem03:5","staItem03:-25","395","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem04","0","staItem03:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("85");
            obj.set_text("현장주소");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar04","staItem04:-1","staItem04:-30","600","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("133");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtAT_SITE","staItem04:5","staItem04:-25","395","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem05","0","staItem04:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("89");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar05","staItem05:-1","staItem05:-30","600","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("129");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_TEL","staItem05:5","staItem05:-25","180","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem06","0","staItem05:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("92");
            obj.set_text("발주처");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar06","staItem06:-1","staItem06:-30","600","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("124");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_CLIENT","staItem06:5","staItem06:-25","180","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem07","0","staItem06:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("87");
            obj.set_text("감리자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar07","staItem07:-1","staItem07:-30","600","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("120");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_GAMRI1","staItem07:5","staItem07:-25","395","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem08","0","staItem07:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("75");
            obj.set_text("건축규모");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar08","staItem08:-1","staItem08:-30","600","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("121");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtSZ_GYGCH","staItem08:5","staItem08:-25","395","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem09","0","staItem08:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("91");
            obj.set_text("공기");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar09","staItem08:-1","staItem09:-30","600","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("125");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_FROM","staItem09:5","staItem09:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("53");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","calDT_FROM:10","staItem09:-30","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("104");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_TO","sta01:5","staItem09:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("63");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem10","staBar01:-1","divSplitter:5","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("106");
            obj.set_text("현장소장");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar10","staItem10:-1","staItem10:-30","600","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("127");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNM_SOJANG","staItem10:5","staItem10:-25","180","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem11","staBar02:-1","staItem10:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("97");
            obj.set_text("기전담당자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar11","staItem11:-1","staItem11:-30","600","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("130");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNM_CHONGMU","staItem11:5","staItem11:-25","180","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem12","staBar03:-1","staItem11:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("88");
            obj.set_text("공무담당자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar12","staItem12:-1","staItem12:-30","600","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("134");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNM_GONGMU","staItem12:5","staItem12:-25","180","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem13","staBar04:-1","staItem12:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("82");
            obj.set_text("공사담당자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar13","staItem13:-1","staItem13:-30","600","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("137");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNM_GYDRINNAME","staItem13:5","staItem13:-25","180","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem14","staBar05:-1","staItem13:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("76");
            obj.set_text("팩스번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar14","staItem14:-1","staItem14:-30","600","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("143");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_FAX","staItem14:5","staItem14:-25","180","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem15","staBar06:-1","staItem14:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("78");
            obj.set_text("설계자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar15","staItem15:-1","staItem15:-30","600","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("149");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_DESIGN","staItem15:5","staItem15:-25","397","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem16","staBar07:-1","staItem15:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("101");
            obj.set_text("시공사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar16","staItem16:-1","staItem16:-30","600","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("152");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_SIGONG","staItem16:5","staItem16:-25","397","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem17","staBar07:-1","staItem16:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("103");
            obj.set_text("사업구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar17","staItem17:-1","staItem17:-30","600","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("151");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboTY_SAUPGBN","staItem17:5","staItem17:-25","178","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTY_SAUPGBN");
            obj.set_text("");
            obj.set_value("0");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem18","staBar09:-1","staItem17:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("99");
            obj.set_text("종합평가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar18","staItem18:-1","staItem18:-30","600","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("150");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtPT_GYPYUNGGA","staItem18:5","staItem18:-25","180","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem19","0","staItem09:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("95");
            obj.set_text("입주예정일자");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar19","staItem19:-1","staItem19:-30","341","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("148");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_OJUNGONG","staItem19:5","staItem19:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("51");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem20","0","staItem19:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("84");
            obj.set_text("준공일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar20","staItem20:-1","staItem20:-30","341","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("146");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_JUNGONG","staItem20:5","staItem20:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("52");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem21","calDT_JUNGONG:10","calDT_JUNGONG:-25","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("79");
            obj.set_text("년차");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_YEAR","staItem21:5","staItem21:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem22","0","staItem20:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("72");
            obj.set_text("보증기간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar22","staItem22:-1","staItem22:-30","341","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("145");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_FRWARRANTY","staItem22:5","staItem22:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("54");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","calDT_FRWARRANTY:10","staItem22:-30","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("102");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_TOWARRANTY","sta02:5","staItem22:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("67");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem23","0","staItem22:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("71");
            obj.set_text("공사금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar23","staItem23:-1","staItem23:-30","341","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("144");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_DOGEUB_PROV","staItem23:5","staItem23:-25","180","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_format("#,#0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem24","0","staItem23:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("74");
            obj.set_text("세대수");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar24","staItem24:-1","staItem24:-30","341","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("140");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_SDS","staItem24:5","staItem24:-25","180","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_format("#,#0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem25","0","staItem24:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("77");
            obj.set_text("분양세대수");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar25","staItem25:-1","staItem25:-30","341","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("139");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_BSDS","staItem25:5","staItem25:-25","180","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_format("#,#0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem26","0","staItem25:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("80");
            obj.set_text("임대세대수");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar26","staItem26:-1","staItem26:-30","341","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("136");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_ISDS","staItem26:5","staItem26:-25","180","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_format("#,#0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem27","0","staItem26:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("83");
            obj.set_text("센터코드");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar27","staItem27:-1","staItem27:-30","341","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("135");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_BUNSO","staItem27:5","staItem27:-25","325","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DBX_CFBUNSO");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("38");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem28","staBar19:-1","staItem09:-1","169","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("86");
            obj.set_text("하자보수충당금 설정총액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar28","staItem28:-1","staItem28:-30","790","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("131");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_ASTOTAL","staItem28:5","staItem28:-25","180","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_format("#,#0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle02","staBar22:-1","staItem28:-1","200","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_text("연차별하자보수충당금액");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem29","staBar23:94","staTitle02:6","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("90");
            obj.set_text("하자보수비");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem30","staItem29:-1","staTitle02:6","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("110");
            obj.set_text("일반관리비");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem31","staItem30:-1","staTitle02:6","285","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("107");
            obj.set_text("하자기간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem32","staItem31:-1","staTitle02:6","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("109");
            obj.set_text("보증금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem33","staItem32:-1","staTitle02:6","297","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("108");
            obj.set_text("보증기관");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem34","439","385","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("111");
            obj.set_text("1년차");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar34","staItem34:-1","staItem34:-30","864","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("128");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAm_1AS","staItem34:5","staItem34:-25","85","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.getSetter("inputtype").set("number");
            obj.set_format("#,#0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAm_1AS_JUN","txtAm_1AS:8","staItem34:-25","85","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.getSetter("inputtype").set("number");
            obj.set_format("#,#0");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_1ASFR","txtAm_1AS_JUN:10","staItem34:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("55");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","calDT_1ASFR:8","staItem34:-30","50","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("100");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_1ASTO","sta03:8","staItem34:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("60");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_1GUARANTY","calDT_1ASTO:8","staItem34:-25","85","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.getSetter("inputtype").set("number");
            obj.set_format("#,#0");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_1ASBOJUNG","txtAM_1GUARANTY:8","staItem34:-25","286","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem35","439","staItem34:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("116");
            obj.set_text("2년차");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar35","staItem35:-1","staItem35:-30","864","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("126");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAm_2AS","staItem35:5","staItem35:-25","85","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.getSetter("inputtype").set("number");
            obj.set_format("#,#0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAm_2AS_JUN","txtAm_2AS:8","staItem35:-25","85","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.getSetter("inputtype").set("number");
            obj.set_format("#,#0");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_2ASFR","txtAm_2AS_JUN:10","staItem35:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("58");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","calDT_2ASFR:8","staItem35:-30","50","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("94");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_2ASTO","sta04:8","staItem35:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("59");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_2GUARANTY","calDT_2ASTO:8","staItem35:-25","85","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.getSetter("inputtype").set("number");
            obj.set_format("#,#0");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_2ASBOJUNG","txtAM_2GUARANTY:8","staItem35:-25","286","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem36","439","staItem35:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("113");
            obj.set_text("3년차");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar36","staItem36:-1","staItem36:-30","864","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("122");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAm_3AS","staItem36:5","staItem36:-25","85","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.getSetter("inputtype").set("number");
            obj.set_format("#,#0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAm_3AS_JUN","txtAm_3AS:8","staItem36:-25","85","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.getSetter("inputtype").set("number");
            obj.set_format("#,#0");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_3ASFR","txtAm_3AS_JUN:10","staItem36:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("57");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta05","calDT_3ASFR:8","staItem36:-30","50","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("96");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_3ASTO","sta05:8","staItem36:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("68");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_3GUARANTY","calDT_3ASTO:8","staItem36:-25","85","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.getSetter("inputtype").set("number");
            obj.set_format("#,#0");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_3ASBOJUNG","txtAM_3GUARANTY:8","staItem36:-25","286","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem37","439","staItem36:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("114");
            obj.set_text("4년차");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar37","staItem37:-1","staItem37:-30","864","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("123");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAm_4AS","staItem37:5","staItem37:-25","85","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.getSetter("inputtype").set("number");
            obj.set_format("#,#0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAm_4AS_JUN","txtAm_4AS:8","staItem37:-25","85","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.getSetter("inputtype").set("number");
            obj.set_format("#,#0");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_4ASFR","txtAm_4AS_JUN:10","staItem37:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("65");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","calDT_4ASFR:8","staItem37:-30","50","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("98");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_4ASTO","sta06:8","staItem37:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("56");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_4GUARANTY","calDT_4ASTO:8","staItem37:-25","85","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.getSetter("inputtype").set("number");
            obj.set_format("#,#0");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_4ASBOJUNG","txtAM_4GUARANTY:8","staItem37:-25","286","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem38","439","staItem37:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("115");
            obj.set_text("5년차");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar38","staItem38:-1","staItem38:-30","864","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("132");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAm_5AS","staItem38:5","staItem38:-25","85","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.getSetter("inputtype").set("number");
            obj.set_format("#,#0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAm_5AS_JUN","txtAm_5AS:8","staItem38:-25","85","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.getSetter("inputtype").set("number");
            obj.set_format("#,#0");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_5ASFR","txtAm_5AS_JUN:10","staItem38:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("61");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07","calDT_5ASFR:8","staItem38:-30","50","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("81");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_5ASTO","sta07:8","staItem38:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("64");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_5GUARANTY","calDT_5ASTO:8","staItem38:-25","85","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.getSetter("inputtype").set("number");
            obj.set_format("#,#0");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_5ASBOJUNG","txtAM_5GUARANTY:8","staItem38:-25","286","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem39","439","staItem38:-1","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("112");
            obj.set_text("10년차");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar39","staItem39:-1","staItem39:-30","864","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("141");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAm_10AS","staItem39:5","staItem39:-25","85","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.getSetter("inputtype").set("number");
            obj.set_format("#,#0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAm_10AS_JUN","txtAm_10AS:8","staItem39:-25","85","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.getSetter("inputtype").set("number");
            obj.set_format("#,#0");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_10ASFR","txtAm_10AS_JUN:10","staItem39:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("66");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta08","calDT_10ASFR:8","staItem39:-30","50","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("70");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_10ASTO","sta08:8","staItem39:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("62");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_10GUARANTY","calDT_10ASTO:8","staItem39:-25","85","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.getSetter("inputtype").set("number");
            obj.set_format("#,#0");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_10ASBOJUNG","txtAM_10GUARANTY:8","staItem39:-25","286","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_inputtype("number");
            obj.getSetter("format").set("#,#0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem40","0","staItem39:-1","100","73",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("117");
            obj.set_text("특기사항");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar40","staItem40:-1","staItem39:-1","1298","73",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("118");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("taxRM_GYBIGO","staItem40:5","staItem40:-67","1285","61",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("69");
            obj.set_autoselect("false");
            obj.set_enableevent("true");
            obj.set_accessibilitydesclevel("all");
            obj.set_wordWrap("char");
            obj.set_maxlength("500");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem19_00","220","298","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("119");
            obj.set_text("인수일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_TAKEOVER","325","303","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("153");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item00","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item01","divSearch.form.ccfCD_SITE.form.DSTextBox","value","dsSearch","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item02","divData.form.txtCD_SITE","value","dsList","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item03","divData.form.txtDS_SITE","value","dsList","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item04","divData.form.txtDS_KONGSA","value","dsList","DS_KONGSA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item05","divData.form.txtAT_SITE","value","dsList","AT_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item06","divData.form.txtNO_TEL","value","dsList","NO_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item07","divData.form.txtDS_CLIENT","value","dsList","DS_CLIENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item08","divData.form.txtDS_GAMRI1","value","dsList","DS_GAMRI1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item09","divData.form.txtSZ_GYGCH","value","dsList","SZ_GYGCH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.calDT_FROM","value","dsList","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.calDT_TO","value","dsList","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.txtNM_SOJANG","value","dsList","NM_SOJANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item99","divData.form.txtNM_GONGMU","value","dsList","NM_GONGMU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.txtNM_CHONGMU","value","dsList","NM_CHONGMU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.txtNM_GYDRINNAME","value","dsList","NM_GYDRINNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.txtNO_FAX","value","dsList","NO_FAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.txtDS_DESIGN","value","dsList","DS_DESIGN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.txtDS_SIGONG","value","dsList","DS_SIGONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.cboTY_SAUPGBN","value","dsList","CD_BUMUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.txtPT_GYPYUNGGA","value","dsList","PT_GYPYUNGGA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.calDT_OJUNGONG","value","dsList","DT_OJUNGONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.calDT_JUNGONG","value","dsList","DT_JUNGONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.txtDS_YEAR","value","dsList","DS_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.calDT_FRWARRANTY","value","dsList","DT_FRWARRANTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.calDT_TOWARRANTY","value","dsList","DT_TOWARRANTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.txtAM_DOGEUB_PROV","value","dsList","AM_DOGEUB_PROV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.txtAM_SDS","value","dsList","AM_SDS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.txtAM_BSDS","value","dsList","AM_BSDS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.txtAM_ISDS","value","dsList","AM_ISDS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.ccfCD_BUNSO.form.CDTextBox","value","dsList","CD_BUNSO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.ccfCD_BUNSO.form.DSTextBox","value","dsList","DS_BUNSO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.txtAM_ASTOTAL","value","dsList","AM_ASTOTAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.txtAm_1AS","value","dsList","AM_1AS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.txtAm_2AS","value","dsList","AM_2AS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.txtAm_3AS","value","dsList","AM_3AS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.txtAm_4AS","value","dsList","AM_4AS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.txtAm_5AS","value","dsList","AM_5AS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.txtAm_10AS","value","dsList","AM_10AS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.txtAm_1AS_JUN","value","dsList","AM_1AS_JUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divData.form.txtAm_2AS_JUN","value","dsList","AM_2AS_JUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divData.form.txtAm_3AS_JUN","value","dsList","AM_3AS_JUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divData.form.txtAm_4AS_JUN","value","dsList","AM_4AS_JUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divData.form.txtAm_5AS_JUN","value","dsList","AM_5AS_JUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divData.form.txtAm_10AS_JUN","value","dsList","AM_10AS_JUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divData.form.calDT_1ASFR","value","dsList","DT_1ASFR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divData.form.calDT_2ASFR","value","dsList","DT_2ASFR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divData.form.calDT_3ASFR","value","dsList","DT_3ASFR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divData.form.calDT_4ASFR","value","dsList","DT_4ASFR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divData.form.calDT_5ASFR","value","dsList","DT_5ASFR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divData.form.calDT_10ASFR","value","dsList","DT_10ASFR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","divData.form.calDT_1ASTO","value","dsList","DT_1ASTO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","divData.form.calDT_2ASTO","value","dsList","DT_2ASTO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","divData.form.calDT_3ASTO","value","dsList","DT_3ASTO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","divData.form.calDT_4ASTO","value","dsList","DT_4ASTO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","divData.form.calDT_5ASTO","value","dsList","DT_5ASTO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","divData.form.calDT_10ASTO","value","dsList","DT_10ASTO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","divData.form.txtAM_1GUARANTY","value","dsList","AM_1GUARANTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","divData.form.txtAM_2GUARANTY","value","dsList","AM_2GUARANTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","divData.form.txtAM_3GUARANTY","value","dsList","AM_3GUARANTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","divData.form.txtAM_4GUARANTY","value","dsList","AM_4GUARANTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","divData.form.txtAM_5GUARANTY","value","dsList","AM_5GUARANTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","divData.form.txtAM_10GUARANTY","value","dsList","AM_10GUARANTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","divData.form.txtDS_1ASBOJUNG","value","dsList","DS_1ASBOJUNG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","divData.form.txtDS_2ASBOJUNG","value","dsList","DS_2ASBOJUNG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","divData.form.txtDS_3ASBOJUNG","value","dsList","DS_3ASBOJUNG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","divData.form.txtDS_4ASBOJUNG","value","dsList","DS_4ASBOJUNG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","divData.form.txtDS_5ASBOJUNG","value","dsList","DS_5ASBOJUNG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","divData.form.txtDS_10ASBOJUNG","value","dsList","DS_10ASBOJUNG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","divData.form.taxRM_GYBIGO","value","dsList","RM_GYBIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.calDT_TAKEOVER","value","dsList","DT_TAKEOVER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DBZ_SITE.xfdl", function() {
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

        	//다른 화면에서 들어왔을경우
           if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE)){
              this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        	  this.dsSearch.setColumn(0, "DS_SITE", this.getOwnerFrame().DS_SITE);

              this.FormBtns.Select.click();
           }
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.WorkBtn1 = this.gfnFormButtonAdd("WorkBtn1", "fnWorkBtn");   //동호정보
        	this.WorkBtn2 = this.gfnFormButtonAdd("WorkBtn2", "fnWorkBtn");   //협력업체정보
        	this.WorkBtn3 = this.gfnFormButtonAdd("WorkBtn3", "fnWorkBtn");   //하자보수이행증권
        	this.WorkBtn4 = this.gfnFormButtonAdd("WorkBtn4", "fnWorkBtn");   //ELEV정보
        	this.WorkBtn5 = this.gfnFormButtonAdd("WorkBtn5", "fnWorkBtn");   //첨부파일
        	this.WorkBtn6 = this.gfnFormButtonAdd("WorkBtn6", "fnWorkBtn");   //현장정보
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfCD_BUNSO = this.divData.form.ccfCD_BUNSO;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_BUNSO.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_BUNSO.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.dsList.addEventHandler("oncolumnchanged", this.dsList_oncolumnchanged, this);
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);

        	//this.dsList.setColumn(0, "CD_BUMUN", "02");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_SITE", "string");
        	this.dsUpdate.addColumn("NM_SOJANG", "string");
        	this.dsUpdate.addColumn("DS_SITE", "string");
        	this.dsUpdate.addColumn("NM_CHONGMU", "string");
        	this.dsUpdate.addColumn("DS_KONGSA", "string");
        	this.dsUpdate.addColumn("NM_GONGMU", "string");
        	this.dsUpdate.addColumn("AT_SITE", "string");
        	this.dsUpdate.addColumn("NO_TEL", "string");
        	this.dsUpdate.addColumn("NM_GYDRINNAME", "string");
        	this.dsUpdate.addColumn("NO_FAX", "string");
        	this.dsUpdate.addColumn("NM_SAFETY", "string");
        	this.dsUpdate.addColumn("DS_CLIENT", "string");
        	this.dsUpdate.addColumn("NM_QUALITY_1", "string");
        	this.dsUpdate.addColumn("DS_DESIGN", "string");
        	this.dsUpdate.addColumn("NM_QUALITY_2", "string");
        	this.dsUpdate.addColumn("DS_GAMRI1", "string");
        	this.dsUpdate.addColumn("NM_QUALITY_3", "string");
        	this.dsUpdate.addColumn("NM_QUALITY_4", "string");
        	this.dsUpdate.addColumn("SZ_GYGCH", "string");
        	this.dsUpdate.addColumn("DT_FROM", "string");
        	this.dsUpdate.addColumn("DT_TO", "string");
        	this.dsUpdate.addColumn("AM_DOGEUB_PROV", "bigdecimal");
        	this.dsUpdate.addColumn("DT_OJUNGONG", "string");
        	this.dsUpdate.addColumn("PT_GYPYUNGGA", "bigdecimal");
        	this.dsUpdate.addColumn("AM_SDS", "bigdecimal");
        	this.dsUpdate.addColumn("NM_BS", "string");
        	this.dsUpdate.addColumn("CD_BUNSO", "string");
        	this.dsUpdate.addColumn("NM_AS", "string");
        	this.dsUpdate.addColumn("ID_KISUNG", "string");
        	this.dsUpdate.addColumn("RM_GYBIGO", "string");
        	this.dsUpdate.addColumn("CD_BUMUN", "string");
        	this.dsUpdate.addColumn("DT_FRWARRANTY", "string");
        	this.dsUpdate.addColumn("DT_TOWARRANTY", "string");
        	this.dsUpdate.addColumn("DS_SIGONG", "string");
        	this.dsUpdate.addColumn("AM_BSDS", "bigdecimal");
        	this.dsUpdate.addColumn("AM_ISDS", "bigdecimal");
        	this.dsUpdate.addColumn("AM_1AS", "bigdecimal");
        	this.dsUpdate.addColumn("AM_2AS", "bigdecimal");
        	this.dsUpdate.addColumn("AM_3AS", "bigdecimal");
        	this.dsUpdate.addColumn("AM_4AS", "bigdecimal");
        	this.dsUpdate.addColumn("AM_5AS", "bigdecimal");
        	this.dsUpdate.addColumn("AM_10AS", "bigdecimal");
        	this.dsUpdate.addColumn("AM_1AS_JUN", "bigdecimal");
        	this.dsUpdate.addColumn("AM_2AS_JUN", "bigdecimal");
        	this.dsUpdate.addColumn("AM_3AS_JUN", "bigdecimal");
        	this.dsUpdate.addColumn("AM_4AS_JUN", "bigdecimal");
        	this.dsUpdate.addColumn("AM_5AS_JUN", "bigdecimal");
        	this.dsUpdate.addColumn("AM_10AS_JUN", "bigdecimal");
        	this.dsUpdate.addColumn("DT_1ASFR", "string");
        	this.dsUpdate.addColumn("DT_1ASTO", "string");
        	this.dsUpdate.addColumn("DT_2ASFR", "string");
        	this.dsUpdate.addColumn("DT_2ASTO", "string");
        	this.dsUpdate.addColumn("DT_3ASFR", "string");
        	this.dsUpdate.addColumn("DT_3ASTO", "string");
        	this.dsUpdate.addColumn("DT_4ASFR", "string");
        	this.dsUpdate.addColumn("DT_4ASTO", "string");
        	this.dsUpdate.addColumn("DT_5ASFR", "string");
        	this.dsUpdate.addColumn("DT_5ASTO", "string");
        	this.dsUpdate.addColumn("DT_10ASFR", "string");
        	this.dsUpdate.addColumn("DT_10ASTO", "string");
        	this.dsUpdate.addColumn("DS_1ASBOJUNG", "string");
        	this.dsUpdate.addColumn("DS_2ASBOJUNG", "string");
        	this.dsUpdate.addColumn("DS_3ASBOJUNG", "string");
        	this.dsUpdate.addColumn("DS_4ASBOJUNG", "string");
        	this.dsUpdate.addColumn("DS_5ASBOJUNG", "string");
        	this.dsUpdate.addColumn("DS_10ASBOJUNG", "string");
        	this.dsUpdate.addColumn("YN_1AS", "string");
        	this.dsUpdate.addColumn("YN_2AS", "string");
        	this.dsUpdate.addColumn("YN_3AS", "string");
        	this.dsUpdate.addColumn("YN_4AS", "string");
        	this.dsUpdate.addColumn("YN_5AS", "string");
        	this.dsUpdate.addColumn("YN_10AS", "string");
        	this.dsUpdate.addColumn("DT_JUNGONGHJ", "string");
        	this.dsUpdate.addColumn("AM_ASTOTAL", "bigdecimal");
        	this.dsUpdate.addColumn("AM_1GUARANTY", "bigdecimal");
        	this.dsUpdate.addColumn("AM_2GUARANTY", "bigdecimal");
        	this.dsUpdate.addColumn("AM_3GUARANTY", "bigdecimal");
        	this.dsUpdate.addColumn("AM_4GUARANTY", "bigdecimal");
        	this.dsUpdate.addColumn("AM_5GUARANTY", "bigdecimal");
        	this.dsUpdate.addColumn("AM_10GUARANTY", "bigdecimal");
        	this.dsUpdate.addColumn("TY_SAUPGBN", "string");
        	this.dsUpdate.addColumn("DT_TAKEOVER", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_SITE", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	if (!this.fnSelectValidate()) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0,"CD_SITE"));

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
        	var param = {};
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DBZ_DLG_SITE", "fnAddCallback", param);
        };

        this.fnAddCallback = function(svcID, val) {
        	if(!this.gfnIsNull(val) && val != false) {
        		var json = JSON.parse(val);
         		this.dsSearch.setColumn(0, "CD_SITE", json.CD_SITE);
         		this.dsSearch.setColumn(0, "DS_SITE", json.DS_SITE);
        		this.FormBtns.Select.click();
        	}
        };
        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnConfirm("현장관련정보가 모두 삭제됩니다\n삭제 하시겠습니까?", "fnDialogCallback");
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if( this.dsList.rowcount == 0 ) return;
        	if (!this.fnSaveValidate()) return;

        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();
        	var nRowType = this.dsList.getRowType( 0 );

        	switch(nRowType) {
        		case Dataset.ROWTYPE_UPDATE:
        			var nrow = this.dsUpdate.addRow();
        			this.dsUpdate.copyRow(nrow,this.dsList,0);
        			//this.dsUpdate.copyRow(nrow,this.dsList,0, "DT_JUNGONG=DT_JUNGONGHJ");
        			this.dsUpdate.setColumn(nrow, "DT_JUNGONGHJ", this.dsList.getColumn(0, "DT_JUNGONG"));
        			this.dsUpdate.setColumn(nrow, "DT_TAKEOVER", this.dsList.getColumn(0, "DT_TAKEOVER"));
        			break;

        		case Dataset.ROWTYPE_DELETE:
        			var nrow = this.dsDelete.addRow();
        			this.dsDelete.setColumn(nrow, "CD_SITE", this.dsList.getColumn(0, "CD_SITE"));
        			this.dsList.set_updatecontrol(true);
        			break;
        	}

        	if (this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate delete=dsDelete";
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
        };

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        };

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
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력 하셔야 합니다.", "fnVaidateCallback");
        	}

        	return validate;
        };

        /*
         *	저장 Validate
         */
        this.fnSaveValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        		this.divSearch.form.ccfCD_SITE.form.CDTextBox.setFocus();
        		this.gfnAlert("현장코드는 반드시 입력 하셔야 합니다.");
        		validate = false;
        	}else if (this.gfnIsNull(this.dsList.getColumn(0, "CD_BUNSO"))) {
        		this.divData.form.ccfCD_BUNSO.setFocus();
        		this.gfnAlert("센터코드는 반드시 입력 하셔야 합니다.");
        		validate = false;
        	}else if (this.gfnIsNull(this.dsList.getColumn(0, "DS_BUNSO"))) {
        		this.divData.form.ccfCD_BUNSO.setFocus();
        		this.gfnAlert("현장명칭은 반드시 입력 하셔야 합니다.");
        		validate = false;
        	}else if (this.gfnIsNull(this.dsList.getColumn(0, "DT_OJUNGONG"))) {
        		this.divData.form.calDT_OJUNGONG.setFocus();
        		this.gfnAlert("입주예정일자는 반드시 입력 하셔야 합니다.");
        		validate = false;
        	}else if(!this.gfnIsNull(this.dsList.getColumn(0, "AM_ASTOTAL")))	{
        // 		var AM_1AS = parseInt(this.dsList.getColumn(0, "AM_1AS"));
        // 		var AM_2AS = parseInt(this.dsList.getColumn(0, "AM_2AS"));
        // 		var AM_3AS = parseInt(this.dsList.getColumn(0, "AM_3AS"));
        // 		var AM_4AS = parseInt(this.dsList.getColumn(0, "AM_4AS"));
        // 		var AM_5AS = parseInt(this.dsList.getColumn(0, "AM_5AS"));
        // 		var AM_10AS = parseInt(this.dsList.getColumn(0, "AM_10AS"));
        // 		var AM_ASTOTAL = parseInt(this.dsList.getColumn(0, "AM_ASTOTAL"));

        		var AM_1AS = this.dsList.getColumn(0, "AM_1AS");
        		var AM_2AS = this.dsList.getColumn(0, "AM_2AS");
        		var AM_3AS = this.dsList.getColumn(0, "AM_3AS");
        		var AM_4AS = this.dsList.getColumn(0, "AM_4AS");
        		var AM_5AS = this.dsList.getColumn(0, "AM_5AS");
        		var AM_10AS = this.dsList.getColumn(0, "AM_10AS");
        		var AM_ASTOTAL = this.dsList.getColumn(0, "AM_ASTOTAL");

        		if(AM_ASTOTAL < AM_1AS + AM_2AS + AM_3AS + AM_4AS + AM_5AS + AM_10AS){
        			this.gfnAlert("보증금액합계가 하자보수비 설정총액을 초과할 수 없습니다.");
        			validate = false;
        		}
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

        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return;
        	}

        	if (svcID == "select") {
        		if (this.dsList.rowcount > 0) {

        			trace("afterselect>>>" + this.dsList.saveXML());

        			this.gfnGridAfterSelect(this.dxGrid);
        			this.fnSetBtn(true);
        		}else {
        			this.fnSetBtn(false);
        		}
        	} else if(svcID == "save") {

        		trace("aftersave>>>" + this.dsList.saveXML());

        		var nRowType = this.dsList.getRowType( 0 );
        		if (nRowType == Dataset.ROWTYPE_DELETE ){
        			this.ccfCD_SITE.form.fnCodeFindClear();
        		} else {
        			this.FormBtns.Select.click();
        		}
        		this.dsList.clearData();
        	}
        }

        /*
         *	Confirm Dialog CallBack
         */
        this.fnDialogCallback = function(svcID, value){
        	if(value) {
        		this.dsList.set_updatecontrol(false);
        		var bSucc = this.dsList.setRowType(0,Dataset.ROWTYPE_DELETE);
        		this.FormBtns.Save.click();
        	}
        }

        this.fnPopupCallback = function(strId, val) {
        	if(!this.gfnIsNull(val)) {
        		this.dsSearch.setColumn(0, "CD_SITE", val);
        		//this.ccfCD_SITE.form.CDTextBox.set_value(val);
        		this.FormBtns.Select.click();
        	}
        }

        /*
         *	첨부파일 콜백 처리
         */
        this.fnFileCallback = function() {
        };
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        /*
         * 코드파인드 변경전
         */
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_SITE") {
        		dsUserParam.setColumn(nrow, "CD_GROUP", this.AuthClient.CD_DEPT);
        	}else if(id == "ccfCD_BUNSO"){

        	}
        	return true;
        };

        /*
         * 코드파인드 변경후
         */
        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if (id == "ccfCD_SITE") {
        		var arr = codeFindData;
        		if(arr.length > 0) {
        			this.objApp.DB_SPACE01 = this.dsSearch.getColumn(0, "CD_SITE");
        			this.objApp.DB_SPACE02 = this.ccfCD_SITE.form.DSTextBox.value;
        		}
        	}
        };

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        /*
         *	동호정보, 협력업체정보, 하자보수이행증권, ELEV정보, 첨부파일 버튼정보
         */
         this.fnWorkBtn = function(obj,e) {
        	if(this.dsList.rowcount == 0) return;

        	var param = {};
        	var id_form = "";

        	if( obj.id == "btnExt_WorkBtn1"){
        		id_form = "DBZ_DONGHO";
        	} else if( obj.id == "btnExt_WorkBtn2") {
        		id_form = "DBZ_SITEHADO";
        	} else if( obj.id == "btnExt_WorkBtn3") {
        		id_form = "DBZ_SITESTOCK";
        	} else if( obj.id == "btnExt_WorkBtn4") {
        		id_form = "DBZ_ELEV";
        	} else if( obj.id == "btnExt_WorkBtn5") {
        		this.fnAddFile();
        		return true;
        	} else if( obj.id == "btnExt_WorkBtn6") {
        		id_form = "DWZ_SITE";
        		param.CD_SITE = this.dsList.getColumn(0,"CD_SITE");
        	    param.DS_SITE = this.dsList.getColumn(0,"DS_SITE");
        	}
        	param.CF_CD_SITE = this.dsList.getColumn(0,"CD_SITE");
        	param.CF_DS_SITE = this.dsList.getColumn(0,"DS_SITE");
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, id_form, "", param);
        };

        /*
         *	첨부파일 버튼
         */
        this.fnAddFile = function (){
        	if(this.dsList.rowcount == 0) return;

        	var fileManager = {};
        	fileManager.CD_GUBUN = "DB02";
        	fileManager.CD_DIR = [ this.dsList.getColumn(this.dsList.rowposition,"CD_SITE") ];
        	// CD_DIR 만 지정시 CD_DIR 배열 순대로 키1,키2,키3 까지 자동지정
        	// 저장되는 디렉토리와 키값이 다른경우 CD_REF 추가로 사용
        	//fileManager.CD_REF = [ "A1" ];
        	// 권한 및 상태에 따라 업로드,삭제 가능여부 지정 (기본: true)
        	if (this.FormInfo.TY_AUTH == "R") {
        		fileManager.IS_READONLY = true;
        	} else {
        		fileManager.IS_READONLY = false;
        	}
        	this.gfnFileManager(fileManager, "fnFileCallback");
        };
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         /*
        	버튼 enable 설정
         */
         this.fnSetBtn = function(val) {
        	this.WorkBtn1.set_enable(val);
        	this.WorkBtn2.set_enable(val);
        	this.WorkBtn3.set_enable(val);
        	this.WorkBtn4.set_enable(val);
        	this.WorkBtn5.set_enable(val);
         };

        /*
         *	조회 조건 변경시 초기화
         */
        this.dsSearch_onvaluechanged = function(obj,e)
        {

        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.dsList.clearData();
        	}
        };

        /*
         *	조회데이터 변경시 저장버튼 활성화
         */
        this.dsList_oncolumnchanged = function(obj,e)
        {
        	var nRowType =obj.getRowType(e.row);

        	if( nRowType == Dataset.ROWTYPE_INSERT || nRowType == Dataset.ROWTYPE_UPDATE || nRowType == Dataset.ROWTYPE_DELETE ){
        		this.gfnSetFormStatus(this, "U");
        	} else if( nRowType == Dataset.ROWTYPE_NORMAL ){
        		this.gfnSetFormStatus(this, "");
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.addEventHandler("onactivate",this.form_onactivate,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
        };
        this.loadIncludeScript("DBZ_SITE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
