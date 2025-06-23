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
            this.set_titletext("현설참석여부");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,990);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_BID\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUBCON\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_PR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LICCOST\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"ONOFF_EXPLAIN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_EXPLAIN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SITESABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITESABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SITETEL\" type=\"STRING\" size=\"256\"/><Column id=\"AT_SITEEXPLAIN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"ONOFF\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BIDMAGAM\" type=\"STRING\" size=\"256\"/><Column id=\"ID_BIDDAM1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BIDDAM1\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BIDDAM1TEL\" type=\"STRING\" size=\"256\"/><Column id=\"EM_BIDDAM1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCBPR_EXPLAIN_SITE_SELECT</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DCBPR_EXPLAIN_JOINBID_SITE_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DCBPR_EXPLAIN_SITE_UPDATE</Col></Row><Row><Col id=\"TARGET\">update2</Col><Col id=\"SP\">DCBPR_EXPLAIN_JOINBID_SITE_UPDATE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_PR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequired", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("<ColumnInfo/>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsONOFF_EXPLAIN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHOUR", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">00</Col><Col id=\"DS_CODE\">00</Col></Row><Row><Col id=\"CD_CODE\">01</Col><Col id=\"DS_CODE\">01</Col></Row><Row><Col id=\"CD_CODE\">02</Col><Col id=\"DS_CODE\">02</Col></Row><Row><Col id=\"CD_CODE\">03</Col><Col id=\"DS_CODE\">03</Col></Row><Row><Col id=\"CD_CODE\">04</Col><Col id=\"DS_CODE\">04</Col></Row><Row><Col id=\"CD_CODE\">05</Col><Col id=\"DS_CODE\">05</Col></Row><Row><Col id=\"CD_CODE\">06</Col><Col id=\"DS_CODE\">06</Col></Row><Row><Col id=\"CD_CODE\">07</Col><Col id=\"DS_CODE\">07</Col></Row><Row><Col id=\"CD_CODE\">08</Col><Col id=\"DS_CODE\">08</Col></Row><Row><Col id=\"CD_CODE\">09</Col><Col id=\"DS_CODE\">09</Col></Row><Row><Col id=\"CD_CODE\">10</Col><Col id=\"DS_CODE\">10</Col></Row><Row><Col id=\"CD_CODE\">11</Col><Col id=\"DS_CODE\">11</Col></Row><Row><Col id=\"CD_CODE\">12</Col><Col id=\"DS_CODE\">12</Col></Row><Row><Col id=\"CD_CODE\">13</Col><Col id=\"DS_CODE\">13</Col></Row><Row><Col id=\"CD_CODE\">14</Col><Col id=\"DS_CODE\">14</Col></Row><Row><Col id=\"CD_CODE\">15</Col><Col id=\"DS_CODE\">15</Col></Row><Row><Col id=\"CD_CODE\">16</Col><Col id=\"DS_CODE\">16</Col></Row><Row><Col id=\"CD_CODE\">17</Col><Col id=\"DS_CODE\">17</Col></Row><Row><Col id=\"CD_CODE\">18</Col><Col id=\"DS_CODE\">18</Col></Row><Row><Col id=\"CD_CODE\">19</Col><Col id=\"DS_CODE\">19</Col></Row><Row><Col id=\"CD_CODE\">20</Col><Col id=\"DS_CODE\">20</Col></Row><Row><Col id=\"CD_CODE\">21</Col><Col id=\"DS_CODE\">21</Col></Row><Row><Col id=\"CD_CODE\">22</Col><Col id=\"DS_CODE\">22</Col></Row><Row><Col id=\"CD_CODE\">23</Col><Col id=\"DS_CODE\">23</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMINUTE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">00</Col><Col id=\"DS_CODE\">00</Col></Row><Row><Col id=\"CD_CODE\">05</Col><Col id=\"DS_CODE\">05</Col></Row><Row><Col id=\"CD_CODE\">10</Col><Col id=\"DS_CODE\">10</Col></Row><Row><Col id=\"CD_CODE\">15</Col><Col id=\"DS_CODE\">15</Col></Row><Row><Col id=\"CD_CODE\">20</Col><Col id=\"DS_CODE\">20</Col></Row><Row><Col id=\"CD_CODE\">25</Col><Col id=\"DS_CODE\">25</Col></Row><Row><Col id=\"CD_CODE\">30</Col><Col id=\"DS_CODE\">30</Col></Row><Row><Col id=\"CD_CODE\">35</Col><Col id=\"DS_CODE\">35</Col></Row><Row><Col id=\"CD_CODE\">40</Col><Col id=\"DS_CODE\">40</Col></Row><Row><Col id=\"CD_CODE\">45</Col><Col id=\"DS_CODE\">45</Col></Row><Row><Col id=\"CD_CODE\">50</Col><Col id=\"DS_CODE\">50</Col></Row><Row><Col id=\"CD_CODE\">55</Col><Col id=\"DS_CODE\">55</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTempTime", this);
            obj._setContents("<ColumnInfo><Column id=\"EXPLAIN_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"EXPLAIN_MINUTE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staNO_BID","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("입찰번호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_BID","staNO_BID:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_PR","ctxtNO_BID:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("구매요청번호");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_PR","staNO_PR:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DCX_CFBID_NOPR");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divData01","0","0",null,"245","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"22","5",null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("0");
            obj.set_text("입찰정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staNO_BID","0","staTitle:5","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("0");
            obj.set_text("입찰번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBgNO_BID","staNO_BID:-1","staTitle:5","220","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staNO_PR","staBgNO_BID:-1","staTitle:5","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("2");
            obj.set_text("구매요청번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBgNO_PR","staNO_PR:-1","staTitle:5","220","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","staBgNO_PR:-1","staTitle:5","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("5");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBgCD_SITE","staCD_SITE:-1","staTitle:5","220","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staCD_LICCOST","staBgCD_SITE:-1","staTitle:5","115","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("7");
            obj.set_text("공종코드");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBgCD_LICCOST","staCD_LICCOST:-1","staTitle:5","250","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staONOFF","0","staNO_BID:-1","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("9");
            obj.set_text("입찰방식");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBgONOFF","staONOFF:-1","staNO_BID:-1","220","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staDT_BIDMAGAM","staBgONOFF:-1","staNO_BID:-1","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_text("입찰마감일시");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBgDT_BIDMAGAM","staDT_BIDMAGAM:-1","staNO_BID:-1","220","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staID_BIDDAM1","staBgDT_BIDMAGAM:-1","staNO_BID:-1","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("13");
            obj.set_text("입찰담당자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBgID_BIDDAM1","staID_BIDDAM1:-1","staNO_BID:-1","220","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staNO_BIDDAM1TEL","staBgID_BIDDAM1:-1","staNO_BID:-1","115","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("15");
            obj.set_text("입찰담당자 연락처");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBgNO_BIDDAM1TEL","staNO_BIDDAM1TEL:-1","staNO_BID:-1","250","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staDT_FROM","0","staONOFF:-1","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("17");
            obj.set_text("공사기간");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBgDT_FROM","staDT_FROM:-1","staONOFF:-1","548","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staONOFF_EXPLAIN","staBgDT_FROM:-1","staONOFF:-1","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("19");
            obj.set_text("현장설명유형");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBgONOFF_EXPLAIN","staONOFF_EXPLAIN:-1","staONOFF:-1","220","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staDT_EXPLAIN","staBgONOFF_EXPLAIN:-1","staONOFF:-1","115","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("22");
            obj.set_text("현장설명일시");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBgDT_EXPLAIN","staDT_EXPLAIN:-1","staONOFF:-1","250","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staID_SITESABUN","0","staDT_FROM:-1","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("21");
            obj.set_text("현장담당자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBgID_SITESABUN","staID_SITESABUN:-1","staDT_FROM:-1","220","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staNO_SITETEL","staBgID_SITESABUN:-1","staDT_FROM:-1","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("25");
            obj.set_text("현장담당자전화");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBgNO_SITETEL","staNO_SITETEL:-1","staDT_FROM:-1","220","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staAT_SITEEXPLAIN","staBgNO_SITETEL:-1","staDT_FROM:-1","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("27");
            obj.set_text("현장설명주소");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBgAT_SITEEXPLAIN","staAT_SITEEXPLAIN:-1","staDT_FROM:-1","583","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staRM_BIGO","0","staID_SITESABUN:-1","110","90",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("29");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBgRM_BIGO","staRM_BIGO:-1","staID_SITESABUN:-1","1239","90",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_BID","staNO_BID:5","staTitle:10","90","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("31");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_SUBCON","ctxtNO_BID:3","staTitle:10","117","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("32");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_PR","staNO_PR:5","staTitle:10","210","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("33");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_SITE","staCD_SITE:5","staTitle:10","90","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("34");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_SITE","ctxtCD_SITE:3","staTitle:10","117","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("37");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_LICCOST","staCD_LICCOST:5","staTitle:10","90","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("35");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_LICCOST","ctxtCD_LICCOST:3","staTitle:10","147","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("36");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("ctxtONOFF","staONOFF:5","ctxtNO_BID:9","210","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("38");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_BIDMAGAM","staDT_BIDMAGAM:5","ctxtNO_BID:9","210","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("39");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("ctxtID_BIDDAM1","staID_BIDDAM1:5","ctxtNO_BID:9","90","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("40");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_BIDDAM1","ctxtID_BIDDAM1:3","ctxtNO_BID:9","117","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("41");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_BIDDAM1TEL","staNO_BIDDAM1TEL:5","ctxtNO_BID:9","90","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("42");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("ctxtEM_BIDDAM1","ctxtNO_BIDDAM1TEL:3","ctxtNO_BID:9","147","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("43");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","staDT_FROM:5","ctxtONOFF:9","105","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("44");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("sta_range","ctclDT_FROM:10","ctxtONOFF:9","10","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("45");
            obj.set_text("~");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","sta_range:10","ctxtONOFF:9","105","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("46");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("cboONOFF_EXPLAIN","staONOFF_EXPLAIN:5","ctxtONOFF:9","210","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("47");
            obj.set_innerdataset("dsONOFF_EXPLAIN");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_EXPLAIN","staDT_EXPLAIN:5","ctxtONOFF:9","105","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("48");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("ccboDT_EXPLAIN_HOUR","ctclDT_EXPLAIN:3","ctxtONOFF:9","45","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("49");
            obj.set_innerdataset("dsHOUR");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_readonly("false");
            obj.set_text("00");
            obj.set_value("00");
            obj.set_index("0");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staDT_EXPLAIN_HOUR","ccboDT_EXPLAIN_HOUR:3","ctxtONOFF:9","20","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("50");
            obj.set_text("시");
            obj.getSetter("readonly").set("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Combo("ccboDT_EXPLAIN_MINUTE","staDT_EXPLAIN_HOUR:3","ctxtONOFF:9","45","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("51");
            obj.set_innerdataset("dsMINUTE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_readonly("false");
            obj.set_text("00");
            obj.set_value("00");
            obj.set_index("0");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staDT_EXPLAIN_MINUTE","ccboDT_EXPLAIN_MINUTE:3","ctxtONOFF:9","20","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("52");
            obj.set_text("분");
            obj.getSetter("readonly").set("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Div("ccfID_SITESABUN","staID_SITESABUN:5","ctclDT_FROM:9","210","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.getSetter("CodeFindName").set("DZX_CFUSER");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("53");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_SITETEL","staNO_SITETEL:5","ctclDT_FROM:9","210","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("54");
            obj.set_value("");
            obj.set_readonly("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("ctxtAT_SITEEXPLAIN","staAT_SITEEXPLAIN:5","ctclDT_FROM:9","573","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("55");
            obj.set_value("");
            obj.set_readonly("false");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new TextArea("ctxtRM_BIGO","staRM_BIGO:5","ccfID_SITESABUN:9","1229","80",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("56");
            obj.set_value("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Div("divData02","0","divData01:10",null,"300","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"22","5",null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("3");
            obj.set_text("현설참석여부 확인");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","staTitle:5","1338",null,null,"0",null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divData02.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",0,0,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("현설참석여부");

                p.divSearch.set_taborder("1");
                p.divSearch.set_cssclass("div_SEARCH_Bg");
                p.divSearch.set_formscrolltype("none");
                p.divSearch.move("0.0","10.0",null,"46.0","0",null);

                p.divData.set_taborder("0");
                p.divData.set_cssclass("div_DATA_Bg");
                p.divData.set_text("");
                p.divData.move("0","divSearch:10",null,null,"0","0");
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("default0","",0,0,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divSearch.set_taborder("1");
                p.divSearch.set_cssclass("div_SEARCH_Bg");
                p.divSearch.set_formscrolltype("none");
                p.divSearch.move("0","0",null,"45","0",null);

                p.divData.set_taborder("0");
                p.divData.set_cssclass("div_DATA_Bg");
                p.divData.set_text("");
                p.divData.move("0","divSearch:10",null,null,"0","0");
            	}
            );
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctxtNO_BID","value","dsSearch","NO_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfNO_PR.form.CDTextBox","value","dsSearch","NO_PR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divData01.form.ctxtNO_BID","value","dsList","NO_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divData01.form.ctxtDS_SUBCON","value","dsList","DS_SUBCON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divData01.form.ctxtCD_SITE","value","dsList","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divData01.form.ctxtDS_SITE","value","dsList","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divData01.form.ctxtNO_PR","value","dsList","NO_PR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divData01.form.ctxtCD_LICCOST","value","dsList","CD_LICCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divData01.form.ctxtDS_LICCOST","value","dsList","DS_LICCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divData01.form.ctxtONOFF","value","dsList","ONOFF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divData01.form.ctxtDT_BIDMAGAM","value","dsList","DT_BIDMAGAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divData01.form.ctxtID_BIDDAM1","value","dsList","ID_BIDDAM1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divData01.form.ctxtDS_BIDDAM1","value","dsList","DS_BIDDAM1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divData01.form.ctxtNO_BIDDAM1TEL","value","dsList","NO_BIDDAM1TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divData01.form.ctxtEM_BIDDAM1","value","dsList","EM_BIDDAM1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divData01.form.ctclDT_FROM","value","dsList","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divData01.form.ctclDT_TO","value","dsList","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divData01.form.cboONOFF_EXPLAIN","value","dsList","ONOFF_EXPLAIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divData01.form.ctclDT_EXPLAIN","value","dsList","DT_EXPLAIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divData01.form.ccfID_SITESABUN.form.CDTextBox","value","dsList","ID_SITESABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divData01.form.ccfID_SITESABUN.form.DSTextBox","value","dsList","DS_SITESABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divData01.form.ctxtNO_SITETEL","value","dsList","NO_SITETEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divData01.form.ctxtAT_SITEEXPLAIN","value","dsList","AT_SITEEXPLAIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divData01.form.ctxtRM_BIGO","value","dsList","DS_BIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.divData01.form.ccboDT_EXPLAIN_HOUR","value","dsTempTime","EXPLAIN_HOUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.divData01.form.ccboDT_EXPLAIN_MINUTE","value","dsTempTime","EXPLAIN_MINUTE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCB_EXPLAIN_JOINBID_SITE.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.singFormStat = "Q";	// 싱글폼 데이터 수정시 변경됨(싱글폼데이터와 그리드데이터를 같이 저장할지 각각 따로 저장할지 구분하기 위한변수)

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

        	this.fnSetCombo();

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().NO_BID)) {
        		this.dsSearch.setColumn(0, "NO_BID", this.getOwnerFrame().NO_BID);

        		if(!this.gfnIsNull(this.getOwnerFrame().NO_PR))
        		this.dsSearch.setColumn(0, "NO_PR", this.getOwnerFrame().NO_PR);

        		this.FormBtns.Select.click();
        	}
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
        	this.ccfNO_PR = this.divSearch.form.ccfNO_PR;
        	this.divData.form.divData01.form.ccfID_SITESABUN.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.dxGrid = this.divData.form.divData02.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfNO_PR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGrid, this.dsList2, "DC", "DCB_EXPLAIN_JOINBID_SITE");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("NO_BID", "string");
        	this.dsSelect.addColumn("NO_PR", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("NO_BID", "string");
        	this.dsUpdate.addColumn("NO_PR", "string");
        	this.dsUpdate.addColumn("DT_FROM", "string");
        	this.dsUpdate.addColumn("DT_TO", "string");
        	this.dsUpdate.addColumn("ONOFF_EXPLAIN", "string");
        	this.dsUpdate.addColumn("DT_EXPLAIN", "string");
        	this.dsUpdate.addColumn("ID_SITESABUN", "string");
        	this.dsUpdate.addColumn("NO_SITETEL", "string");
        	this.dsUpdate.addColumn("AT_SITEEXPLAIN", "string");
        	this.dsUpdate.addColumn("DS_BIGO", "string");

        	this.dsUpdate2 = new Dataset();
        	this.dsUpdate2.addColumn("NO_BID", "string");
        	this.dsUpdate2.addColumn("NO_PR", "string");
        	this.dsUpdate2.addColumn("CD_VENDOR", "string");
        	this.dsUpdate2.addColumn("YN_JOIN", "string");
        	this.dsUpdate2.addColumn("DS_CONTACTNAME", "string");
        	this.dsUpdate2.addColumn("DS_CONTACTTEL", "string");
        	this.dsUpdate2.addColumn("DS_CONTACTEMAIL", "string");
        	this.dsUpdate2.addColumn("DS_BIGO", "string");
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

        	this.dsSelect.setColumn(0, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        	this.dsSelect.setColumn(0, "NO_PR", this.dsSearch.getColumn(0, "NO_PR"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect select2=dsSelect";
        	var outData     = "dsList=select0 dsList2=select20";
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


        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnConfirm("삭제하시겠습니까?", "fnDel_callback");
        }

        this.fnDel_callback = function(strId, val) {
        	if(val == true) {

        		this.dsDelete.clearData();
        		var nrow = this.dsDelete.addRow();
        		this.dsDelete.setColumn(nrow, "CD_SITE", this.dsList.getColumn(0, "CD_SITE"));
        		this.dsDelete.setColumn(nrow, "NO_BID", this.dsList.getColumn(0, "NO_BID"));

        		if (this.dsDelete.rowcount == 0) return;

        		var strSvcId    = "save";
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
        							strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 싱글폼(Dataset) 필수입력 체크

        	var arr_in = [];

        	var update = false;
        	if (this.dsList.rowcount > 0) {
        		// 싱글폼쪽 update 유무 체크
        		/*
        		if(this.dsList.getRowType(0) == Dataset.ROWTYPE_UPDATE) {
        			update = true;
        		}
        		*/

        		if(this.singFormStat == "Q") {
        			update = true;
        		}
        		this.singFormStat = "Q";	// 초기화
        	}

        	//alert(update);return;
        	if (update) {
        		// 싱글폼 변경 내역이 있으면 필수값 체크
        		if (!this.gfnDataValidate(this.dsList, this.dsRequired)) return;
        		arr_in.push("update=dsUpdate");

        		this.dsUpdate.clearData();
        		var nrow = this.dsUpdate.addRow();
        		this.dsUpdate.setColumn(nrow, "NO_BID", this.dsList.getColumn(0, "NO_BID"));
        		this.dsUpdate.setColumn(nrow, "NO_PR", this.dsList.getColumn(0, "NO_PR"));
        		this.dsUpdate.setColumn(nrow, "DT_FROM", this.dsList.getColumn(0, "DT_FROM"));
        		this.dsUpdate.setColumn(nrow, "DT_TO", this.dsList.getColumn(0, "DT_TO"));
        		this.dsUpdate.setColumn(nrow, "ONOFF_EXPLAIN", this.dsList.getColumn(0, "ONOFF_EXPLAIN"));
        		this.dsUpdate.setColumn(nrow, "DT_EXPLAIN", this.dsList.getColumn(0, "DT_EXPLAIN")+ this.dsTempTime.getColumn(0, "EXPLAIN_HOUR") + this.dsTempTime.getColumn(0, "EXPLAIN_MINUTE"));
        		this.dsUpdate.setColumn(nrow, "ID_SITESABUN", this.dsList.getColumn(0, "ID_SITESABUN"));
        		this.dsUpdate.setColumn(nrow, "NO_SITETEL", this.dsList.getColumn(0, "NO_SITETEL"));
        		this.dsUpdate.setColumn(nrow, "AT_SITEEXPLAIN", this.dsList.getColumn(0, "AT_SITEEXPLAIN"));
        		this.dsUpdate.setColumn(nrow, "DS_BIGO", this.dsList.getColumn(0, "DS_BIGO"));
        	}

        	// 현설참석목록
        	this.dsUpdate2.clearData();
        	for (var i = 0; i < this.dsList2.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList2, i);
        		if(flag == "U") {
        			var nrow = this.dsUpdate2.addRow();
        			this.dsUpdate2.setColumn(nrow, "NO_BID", this.dsList.getColumn(0, "NO_BID"));
        			this.dsUpdate2.setColumn(nrow, "NO_PR", this.dsList.getColumn(0, "NO_PR"));
        			this.dsUpdate2.setColumn(nrow, "CD_VENDOR", this.dsList2.getColumn(i, "CD_VENDOR"));
        			this.dsUpdate2.setColumn(nrow, "YN_JOIN", this.dsList2.getColumn(i, "YN_JOIN"));
        			this.dsUpdate2.setColumn(nrow, "DS_CONTACTNAME", this.dsList2.getColumn(i, "DS_CONTACTNAME"));
        			this.dsUpdate2.setColumn(nrow, "DS_CONTACTTEL", this.dsList2.getColumn(i, "DS_CONTACTTEL"));
        			this.dsUpdate2.setColumn(nrow, "DS_CONTACTEMAIL", this.dsList2.getColumn(i, "DS_CONTACTEMAIL"));
        			this.dsUpdate2.setColumn(nrow, "DS_BIGO", this.dsList2.getColumn(i, "DS_BIGO"));
        		}
        	}

        	if(this.dsUpdate2.rowcount > 0) {
        		arr_in.push("update2=dsUpdate2");
        	}

        	if (this.dsUpdate.rowcount == 0 && this.dsUpdate2.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = arr_in.join(' ');
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
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	var nrow = this.gfnExcelExport(this.dxGrid);
        }

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
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"NO_BID"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctxtNO_BID.setFocus();
        		}
        		this.gfnAlert("입찰번호를 입력하세요.", "fnVaidateCallback");
        	}
        // 	else if (this.gfnIsNull(this.dsSearch.getColumn(0,"NO_BID"))) {
        // 		validate = false;
        // 		// Alert후 실행할 처리
        // 		this.fnVaidateCallback = function() {
        // 			this.divSearch.form.ccfNO_BID.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("구매요청번호를 입력하세요.", "fnVaidateCallback");
        // 	}
        	return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg)
        {
        	if (svcID == "select") {
        		if(!this.gfnIsNull(this.dsList.getColumn(0, "DT_EXPLAIN")))
        		{
        			if(this.dsList.getColumn(0, "DT_EXPLAIN").length > 8)
        			{
        				this.dsTempTime.clearData();
        				this.dsTempTime.addRow();
        				this.dsTempTime.setColumn(0, "EXPLAIN_HOUR", this.dsList.getColumn(0, "DT_EXPLAIN").substr(8,2));
        				this.dsTempTime.setColumn(0, "EXPLAIN_MINUTE", this.dsList.getColumn(0, "DT_EXPLAIN").substr(10,2));
        				this.dsList.setColumn(0, "DT_EXPLAIN", this.dsList.getColumn(0, "DT_EXPLAIN").substr(0,8));

        				// 폼상태 초기화
        				this.gfnSetFormStatus(this);
        			}
        			else
        			{
        				this.dsTempTime.clearData();
        				this.dsTempTime.addRow();
        			}
        		}
        		else
        		{
        			if(this.dsList.rowcount > 0)
        			{
        				this.dsTempTime.clearData();
        				this.dsTempTime.addRow();
        			}
        		}

        		this.fnBtnCheckAll();
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "execute") {
        		if (errorCode == 0) {
        			this.fnExecute_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			var msg = "";
        			var json = this.gfnArgsToJson(strArg);

        			if(json.gubun == "A") msg = "발주의뢰";
        			else if(json.gubun == "R") msg = "발주의뢰취소";

        			msg += "를 정상적으로 완료하였습니다.";

        			this.gfnAlert(msg, "","","fnExecute_callback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfNO_PR"){
         		if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_BID"))) {
         			this.gfnAlert("입찰번호를 먼저 입력하세요.");
         			return false;
         		}
        		dsUserParam.setColumn(nrow, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData){
        	var arr = codeFindData;
        	if(id == "ccfID_SITESABUN"){
        		if(arr.length > 0){
        			this.dsList.setColumn(0, "NO_SITETEL", arr[0].PHONE);
        		}
        	}
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.dsList.clearData();	// 싱글폼데이터 초기화
        		this.dsList2.clearData();
        	}
        };

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this, "U");	// 폼상태 초기화

        	}
        };


        this.fnSetCombo = function()
        {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DC");
         	this.dsCombo.setColumn(0, "CD_TYPE", "C15");

        // 	this.dsCombo.addRow();
        // 	this.dsCombo.setColumn(0, "CD_SYSTEM", "DM");
        // 	this.dsCombo.setColumn(0, "CD_TYPE", "H08");
        //
        // 	this.dsCombo.addRow();
        // 	this.dsCombo.setColumn(1, "CD_SYSTEM", "DC");
        // 	this.dsCombo.setColumn(1, "CD_TYPE", "50");
        //
        // 	this.dsCombo.addRow();
        // 	this.dsCombo.setColumn(2, "CD_SYSTEM", "DC");
        // 	this.dsCombo.setColumn(2, "CD_TYPE", "C07");


        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsONOFF_EXPLAIN=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallbackCombo";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnBtnCheckAll = function()
        {
        	//this.gfnBtnCheck(this.btnNonAttendMail, this.dsList);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsList2.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsTempTime.addEventHandler("onvaluechanged",this.dsTempTime_onvaluechanged,this);
        };
        this.loadIncludeScript("DCB_EXPLAIN_JOINBID_SITE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
