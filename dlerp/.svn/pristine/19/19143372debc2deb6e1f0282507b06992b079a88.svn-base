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
            this.set_titletext("이행상황신고서");
            if (Form == this.constructor)
            {
                this._setFormPosition(1307,760);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"NM_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_INWON\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TOTSUPPLY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_INCOMETAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_RESTAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SPECIALTAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ADDTAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_RETURNTAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_NAPINCOMETAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_NAPSPECIALTAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_NAPRESTAX\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("<ColumnInfo><Column id=\"FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"NM_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_INWON\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TOTSUPPLY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_INCOMETAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_RESTAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SPECIALTAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ADDTAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_RETURNTAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_NAPINCOMETAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_NAPSPECIALTAX\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("<ColumnInfo><Column id=\"FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"NM_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_INWON\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TOTSUPPLY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_FIXTAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_BEFTAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_BEFTAX_NOW\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_BEFTAX_BEF\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_DEDCOLLECTTAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_RETURNTAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_RETURNAPPLY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PARTDECOTAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList4", this);
            obj._setContents("<ColumnInfo><Column id=\"FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SJC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SJC\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SUCCESSION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SUCCESSION_BASIS\" type=\"STRING\" size=\"256\"/><Column id=\"YM_IMPUTE_SUCC\" type=\"STRING\" size=\"256\"/><Column id=\"YM_SUPPLY_SUCC\" type=\"STRING\" size=\"256\"/><Column id=\"AM_WOLRETURNTAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_PAYSTATUS_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHVPR_PAYSTATUS_INSERT</Col></Row><Row><Col id=\"TARGET\">r_select</Col><Col id=\"SP\">DHVPR_RETURNAPPLY_SELECT</Col></Row><Row><Col id=\"TARGET\">r_insert</Col><Col id=\"SP\">DHVPR_RETURNAPPLY_INSERT</Col></Row><Row><Col id=\"TARGET\">s_select</Col><Col id=\"SP\">DHVPR_SUCCESSIONSPEC_SELECT</Col></Row><Row><Col id=\"TARGET\">s_insert</Col><Col id=\"SP\">DHVPR_SUCCESSIONSPEC_INSERT</Col></Row><Row><Col id=\"TARGET\">e_select</Col><Col id=\"SP\">DAUPR_TAXSINGO_SELECT</Col></Row><Row><Col id=\"TARGET\">ESingo</Col><Col id=\"SP\">DHVPR_WITHHOLDING_FILE</Col></Row><Row><Col id=\"TARGET\">g_select1</Col><Col id=\"SP\">DHVPR_RETURNINCOMETAX_SELECT</Col></Row><Row><Col id=\"TARGET\">g_select2</Col><Col id=\"SP\">DHVPR_RETURNPAYMENT_SELECT</Col></Row><Row><Col id=\"TARGET\">g_select3</Col><Col id=\"SP\">DHVPR_RETURNJOJUNG_SELECT</Col></Row><Row><Col id=\"TARGET\">g_insert1</Col><Col id=\"SP\">DHVPR_RETURNINCOMETAX_INSERT</Col></Row><Row><Col id=\"TARGET\">g_insert2</Col><Col id=\"SP\">DHVPR_RETURNPAYMENT_INSERT</Col></Row><Row><Col id=\"TARGET\">g_insert3</Col><Col id=\"SP\">DHVPR_RETURNJOJUNG_INSERT</Col></Row><Row><Col id=\"TARGET\">g_delete1</Col><Col id=\"SP\">DHVPR_RETURNINCOMETAX_DELETE</Col></Row><Row><Col id=\"TARGET\">g_delete2</Col><Col id=\"SP\">DHVPR_RETURNPAYMENT_DELETE</Col></Row><Row><Col id=\"TARGET\">u_insert1</Col><Col id=\"SP\">DHVPR_UNRETURNLIST_INSERT</Col></Row><Row><Col id=\"TARGET\">u_insert2</Col><Col id=\"SP\">DHVPR_UNRETURNJOJUNG_INSERT</Col></Row><Row><Col id=\"TARGET\">u_delete1</Col><Col id=\"SP\">DHVPR_UNRETURNLIST_DELETE</Col></Row><Row><Col id=\"TARGET\">u_delete2</Col><Col id=\"SP\">DHVPR_UNRETURNJOJUNG_DELETE</Col></Row><Row><Col id=\"TARGET\">u_select1</Col><Col id=\"SP\">DHVPR_UNRETURNLIST_SELECT</Col></Row><Row><Col id=\"TARGET\">u_select2</Col><Col id=\"SP\">DHVPR_UNRETURNJOJUNG_SELECT</Col></Row><Row><Col id=\"TARGET\">r_delete</Col><Col id=\"SP\">DHVPR_RETURNAPPLY_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YM_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"YM_TO\" type=\"STRING\" size=\"256\"/><Column id=\"YM_JFROM\" type=\"STRING\" size=\"256\"/><Column id=\"YM_JTO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_SELFACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_SELFACNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"YM_FROM\"/><Col id=\"YM_TO\"/><Col id=\"YM_JFROM\"/><Col id=\"YM_JTO\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSINGO", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">매월</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"VALUE\">반기</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBATCH", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">여</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">부</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSAUPJA", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">여</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">부</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSUBWRITE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">부표작성함</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">부표작성안함</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsText", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList5", this);
            obj._setContents("<ColumnInfo><Column id=\"FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"YM_JIGUB\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_INWON\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TOTSUPPLY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_INCOMETAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SPECIALTAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ADDTAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NO_ID\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGResult1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGiGubun", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">연말</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">중도</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">0.주/현</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">1.종/전</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">14</Col><Col id=\"VALUE\">근로소득</Col></Row><Row><Col id=\"CODE\">21</Col><Col id=\"VALUE\">퇴직소득</Col></Row><Row><Col id=\"CODE\">13</Col><Col id=\"VALUE\">사업소득</Col></Row><Row><Col id=\"CODE\">16</Col><Col id=\"VALUE\">기타소득</Col></Row><Row><Col id=\"CODE\">17</Col><Col id=\"VALUE\">연금소득</Col></Row><Row><Col id=\"CODE\">11</Col><Col id=\"VALUE\">이자소득</Col></Row><Row><Col id=\"CODE\">12</Col><Col id=\"VALUE\">배당소득</Col></Row><Row><Col id=\"CODE\">22</Col><Col id=\"VALUE\">양도소득</Col></Row><Row><Col id=\"CODE\">31</Col><Col id=\"VALUE\">법인세</Col></Row><Row><Col id=\"CODE\">24</Col><Col id=\"VALUE\">금융투자소득세</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGResult2", this);
            obj._setContents("<ColumnInfo><Column id=\"AM_INCOMETAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_INCOMETAX_GI\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SPECIALTAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SPECIALTAX_GI\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_INCOMETAX_CHA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SPECIALTAX_CHA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YN_REASON1\" type=\"STRING\" size=\"256\"/><Column id=\"YN_REASON2\" type=\"STRING\" size=\"256\"/><Column id=\"YN_REASON3\" type=\"STRING\" size=\"256\"/><Column id=\"YN_REASON4\" type=\"STRING\" size=\"256\"/><Column id=\"YN_REASON5\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REASON\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList6", this);
            obj._setContents("<ColumnInfo><Column id=\"FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ID_RESIDENT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PREPAY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PREPAY\" type=\"STRING\" size=\"256\"/><Column id=\"AM_INCOMETAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SPECIALTAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NO_ID\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList7", this);
            obj._setContents("<ColumnInfo><Column id=\"FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"AM_INCOMETAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_INCOMETAX_GI\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SPECIALTAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SPECIALTAX_GI\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_INCOMETAX_CHA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SPECIALTAX_CHA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_PREPAY\" type=\"STRING\" size=\"256\"/><Column id=\"YN_REASON1\" type=\"STRING\" size=\"256\"/><Column id=\"YN_REASON2\" type=\"STRING\" size=\"256\"/><Column id=\"YN_REASON3\" type=\"STRING\" size=\"256\"/><Column id=\"YN_REASON4\" type=\"STRING\" size=\"256\"/><Column id=\"YN_REASON5\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REASON\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList8", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList9", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("법인코드");
            obj.set_usedecorate("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("귀속기간");
            obj.set_usedecorate("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_FROM","staYM:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enableevent("true");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staWAVE","ctclYM_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_TO","staWAVE:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enableevent("true");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM00","ctclYM_TO:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("지급기간");
            obj.set_usedecorate("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_JFROM","staYM00:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enableevent("true");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staWAVE00","ctclYM_JFROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_JTO","staWAVE00:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enableevent("true");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_SELFACNT","ctclYM_JTO:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("세무단위");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_SELFACNT","staCD_DEPT_SELFACNT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFSELFACNT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","29","1260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("원천징수의무자");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Tab("tabData","0","staTITLE:65",null,null,"0","10",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.tabData);
            obj.set_text("근로소득");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid","5","7",null,null,"5","119",null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"170\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\"/><Cell col=\"1\" rowspan=\"3\" text=\"구분\"/><Cell col=\"2\" rowspan=\"3\" text=\"코드\"/><Cell col=\"3\" colspan=\"6\" text=\"원 천 징 수 내 역\"/><Cell col=\"9\" rowspan=\"3\" text=\"6.당월조정&#13;&#10;환급세액\"/><Cell col=\"10\" colspan=\"3\" text=\"납 부 세 액\"/><Cell row=\"1\" col=\"3\" colspan=\"2\" text=\"소득지급(과세미달, 비과세)\"/><Cell row=\"1\" col=\"5\" colspan=\"4\" text=\"징 수 세 액\"/><Cell row=\"1\" col=\"10\" rowspan=\"2\" text=\"7.소득세 등&#13;&#10;(가산세포함)\"/><Cell row=\"1\" col=\"11\" rowspan=\"2\" text=\"8.농어촌특별세\"/><Cell row=\"1\" col=\"12\" rowspan=\"2\" text=\"지방소득세 등&#13;&#10;(가산세포함)\"/><Cell row=\"2\" col=\"3\" text=\"1.인원\"/><Cell row=\"2\" col=\"4\" text=\"2.총지급액\"/><Cell row=\"2\" col=\"5\" text=\"3.소득세등\"/><Cell row=\"2\" col=\"6\" text=\"지방소득세 등\"/><Cell row=\"2\" col=\"7\" text=\"4.농어촌특별세\"/><Cell row=\"2\" col=\"8\" text=\"5.가산세\"/></Band><Band id=\"body\"><Cell text=\"bind:FLAG\"/><Cell col=\"1\" text=\"bind:NM_GUBUN\" textAlign=\"center\" background=\"#59a7ea\" border=\"1px solid #ffffff\" color=\"#ffffff\" font=\"normal 700 12px/normal &quot;Dotum&quot;\" tooltiptext=\"bind:NM_GUBUN\"/><Cell col=\"2\" text=\"bind:CD_GUBUN\" textAlign=\"center\" background=\"#59a7ea\" border=\"1px solid #ffffff\" color=\"#ffffff\" font=\"normal 700 12px/normal &quot;Dotum&quot;\"/><Cell col=\"3\" text=\"bind:NO_INWON\" edittype=\"mask\" maskeditformat=\"###,###,###,###,###\" maskeditlimitbymask=\"both\" textAlign=\"right\" displaytype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskedittrimtype=\"both\"/><Cell col=\"4\" text=\"bind:AM_TOTSUPPLY\" edittype=\"mask\" maskeditformat=\"###,###,###,###,###\" maskeditlimitbymask=\"both\" textAlign=\"right\" displaytype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskedittrimtype=\"both\"/><Cell col=\"5\" text=\"bind:AM_INCOMETAX\" edittype=\"mask\" maskeditformat=\"###,###,###,###,###\" maskeditlimitbymask=\"both\" textAlign=\"right\" displaytype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskedittrimtype=\"both\"/><Cell col=\"6\" text=\"bind:AM_RESTAX\" edittype=\"mask\" maskeditformat=\"###,###,###,###,###\" maskeditlimitbymask=\"both\" textAlign=\"right\" displaytype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskedittrimtype=\"both\"/><Cell col=\"7\" text=\"bind:AM_SPECIALTAX\" edittype=\"mask\" maskeditformat=\"###,###,###,###,###\" maskeditlimitbymask=\"both\" textAlign=\"right\" displaytype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskedittrimtype=\"both\"/><Cell col=\"8\" text=\"bind:AM_ADDTAX\" edittype=\"mask\" maskeditformat=\"###,###,###,###,###\" maskeditlimitbymask=\"both\" textAlign=\"right\" displaytype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskedittrimtype=\"both\"/><Cell col=\"9\" text=\"bind:AM_RETURNTAX\" edittype=\"mask\" maskeditformat=\"###,###,###,###,###\" maskeditlimitbymask=\"both\" textAlign=\"right\" displaytype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskedittrimtype=\"both\"/><Cell col=\"10\" text=\"bind:AM_NAPINCOMETAX\" edittype=\"mask\" maskeditformat=\"###,###,###,###,###\" maskeditlimitbymask=\"both\" textAlign=\"right\" displaytype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskedittrimtype=\"both\"/><Cell col=\"11\" text=\"bind:AM_NAPSPECIALTAX\" edittype=\"mask\" maskeditformat=\"###,###,###,###,###\" maskeditlimitbymask=\"both\" textAlign=\"right\" displaytype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskedittrimtype=\"both\"/><Cell col=\"12\" text=\"bind:AM_NAPRESTAX\" edittype=\"mask\" maskeditformat=\"###,###,###,###,###\" maskeditlimitbymask=\"both\" textAlign=\"right\" displaytype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskedittrimtype=\"both\"/></Band></Format></Formats>");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_BEFORETAX","5","objGrid:31","125","57",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("28");
            obj.set_text("(12) 전월\r\n미환급세액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_REQUESTTAX","staAM_BEFORETAX:-1","staAM_BEFORETAX:-57","125","57",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("29");
            obj.set_text("(13) 기환급\r\n신청한세액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_JAN","staAM_REQUESTTAX:-1","staAM_REQUESTTAX:-57","125","57",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("30");
            obj.set_text("(14) 차감잔액\r\n((12)-(13))");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_ILBANRETURN","staAM_JAN:-1","staAM_JAN:-57","125","57",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("31");
            obj.set_text("(15) 일반\r\n환급");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_SINTAC","staAM_ILBANRETURN:-1","staAM_ILBANRETURN:-57","125","57",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("32");
            obj.set_text("(16) 신탁재산\r\n(금융회사 등)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_GITA","staAM_SINTAC:-1","staAM_SINTAC:-34","125","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("33");
            obj.set_text("금융\r\n회사 등");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_GITA2","staAM_GITA:-1","staAM_GITA:-34","125","34",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("34");
            obj.set_text("합병 등");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_SETTLE","staAM_GITA2:-1","staAM_GITA2:-80","135","80",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("35");
            obj.set_text("(18) 조정대상\r\n환급세액\r\n((14)+(15)+(16)+(17))");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_RETURNTAXSUM","staAM_SETTLE:-1","staAM_SETTLE:-80","115","80",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("36");
            obj.set_text("(19) 당월조정\r\n환급세액계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_WOLRETURNTAX","staAM_RETURNTAXSUM:-1","staAM_RETURNTAXSUM:-80","125","80",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("37");
            obj.set_text("(20) 차월이월\r\n환급세액\r\n((18)-(19))");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_RETURNAPPLY","staAM_WOLRETURNTAX:-1","staAM_WOLRETURNTAX:-80","125","80",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("38");
            obj.set_text("(20) 환급신청액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBgAM_BEFORETAX","staAM_BEFORETAX:-125","staAM_BEFORETAX:-1","125","27",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBgAM_REQUESTTAX","staAM_REQUESTTAX:-125","staAM_REQUESTTAX:-1","125","27",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBgAM_JAN","staAM_JAN:-125","staAM_JAN:-1","125","27",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBgAM_ILBANRETURN","staAM_ILBANRETURN:-125","staAM_ILBANRETURN:-1","125","27",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBgAM_SINTAC","staAM_SINTAC:-125","staAM_SINTAC:-1","125","27",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBgAM_GITA","staAM_GITA:-125","staAM_GITA:-1","125","27",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBgAM_GITA2","staAM_GITA2:-125","staAM_GITA2:-1","125","27",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBgAM_SETTLE","staAM_SETTLE:-135","staAM_SETTLE:-1","135","27",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBgAM_RETURNTAXSUM","staAM_RETURNTAXSUM:-115","staAM_RETURNTAXSUM:-1","115","27",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBgAM_WOLRETURNTAX","staAM_WOLRETURNTAX:-125","staAM_WOLRETURNTAX:-1","125","27",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staBgAM_RETURNAPPLY","staAM_RETURNAPPLY:-125","staAM_RETURNAPPLY:-1","125","27",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_BEFORETAX","staAM_BEFORETAX:-120","staAM_BEFORETAX:2","115","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("73");
            obj.set_format("###,###,###,###,###");
            obj.set_limitbymask("both");
            obj.set_enable("false");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_REQUESTTAX","staAM_REQUESTTAX:-120","staAM_REQUESTTAX:2","115","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("73");
            obj.set_format("###,###,###,###");
            obj.set_limitbymask("both");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_JAN","staAM_JAN:-120","staAM_JAN:2","115","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("73");
            obj.set_format("###,###,###,###,###");
            obj.set_limitbymask("both");
            obj.set_enable("false");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_ILBANRETURN","staAM_ILBANRETURN:-120","staAM_ILBANRETURN:2","115","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("73");
            obj.set_format("###,###,###,###");
            obj.set_limitbymask("both");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_SINTAC","staAM_SINTAC:-120","staAM_SINTAC:2","115","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("73");
            obj.set_format("###,###,###,###");
            obj.set_limitbymask("both");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_GITA","staAM_GITA:-120","staAM_GITA:2","115","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("73");
            obj.set_format("###,###,###,###");
            obj.set_limitbymask("both");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_GITA2","staAM_GITA2:-120","staAM_GITA2:2","115","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("73");
            obj.set_format("###,###,###,###");
            obj.set_limitbymask("both");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_SETTLE","staAM_SETTLE:-130","staAM_SETTLE:2","125","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("73");
            obj.set_format("###,###,###,###,###");
            obj.set_limitbymask("both");
            obj.set_enable("false");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_RETURNTAXSUM","staAM_RETURNTAXSUM:-110","staAM_RETURNTAXSUM:2","105","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("73");
            obj.set_format("###,###,###,###");
            obj.set_limitbymask("both");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_WOLRETURNTAX","staAM_WOLRETURNTAX:-120","staAM_WOLRETURNTAX:2","115","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("73");
            obj.set_format("###,###,###,###,###");
            obj.set_limitbymask("both");
            obj.set_enable("false");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_RETURNAPPLY","staAM_RETURNAPPLY:-120","staAM_RETURNAPPLY:2","115","20",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("73");
            obj.set_format("###,###,###,###,###");
            obj.set_limitbymask("integer");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_BEFORETAX00","5","objGrid:8","373",null,null,"staAM_BEFORETAX:-1",null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("34");
            obj.set_text("전월 미환급 세액의 계산");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_BEFORETAX01","377","objGrid:8","497",null,null,"staAM_SINTAC:-1",null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("35");
            obj.set_text("당월 발생 환급세액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("staAM_BEFORETAX02","625","staAM_BEFORETAX01:-1","249",null,null,"staAM_GITA:-1",null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("36");
            obj.set_text("(17) 그밖의 환급세액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("부표작성");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid2","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"320\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"48\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\"/><Cell col=\"1\" rowspan=\"2\" text=\"소득구분\"/><Cell col=\"2\" rowspan=\"2\" text=\"코드\"/><Cell col=\"3\" colspan=\"2\" text=\"소 득 지 급\"/><Cell col=\"5\" colspan=\"4\" text=\"징 수 세 액\"/><Cell col=\"9\" rowspan=\"2\" text=\"6.조 정&#13;&#10;환급세액\"/><Cell col=\"10\" colspan=\"2\" text=\"납 부 세 액\"/><Cell row=\"1\" col=\"3\" text=\"1.인원\"/><Cell row=\"1\" col=\"4\" text=\"2.총지급액\"/><Cell row=\"1\" col=\"5\" text=\"3.소득세등\"/><Cell row=\"1\" col=\"6\" text=\"주민세등\"/><Cell row=\"1\" col=\"7\" text=\"4.농어촌특별세\"/><Cell row=\"1\" col=\"8\" text=\"5.가산세\"/><Cell row=\"1\" col=\"10\" text=\"7.소득세 등&#13;&#10;(가산세)\"/><Cell row=\"1\" col=\"11\" text=\"8.농어촌특별세\"/></Band><Band id=\"body\"><Cell text=\"bind:FLAG\" background=\"#59a7ea\" border=\"1px solid #ffffff\" color=\"#ffffff\" font=\"normal 700 12px/normal &quot;Dotum&quot;\"/><Cell col=\"1\" text=\"bind:NM_GUBUN\" background=\"#59a7ea\" border=\"1px solid #ffffff\" color=\"#ffffff\" font=\"normal 700 12px/normal &quot;Dotum&quot;\" tooltiptext=\"bind:NM_GUBUN\"/><Cell col=\"2\" text=\"bind:CD_GUBUN\" background=\"#59a7ea\" border=\"1px solid #ffffff\" color=\"#ffffff\" font=\"normal 700 12px/normal &quot;Dotum&quot;\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:NO_INWON\" displaytype=\"mask\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskeditformat=\"###,###,###,###,###\" maskedittrimtype=\"both\" maskeditlimitbymask=\"both\"/><Cell col=\"4\" text=\"bind:AM_TOTSUPPLY\" displaytype=\"mask\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskeditformat=\"###,###,###,###,###\" maskedittrimtype=\"both\" maskeditlimitbymask=\"both\"/><Cell col=\"5\" text=\"bind:AM_INCOMETAX\" displaytype=\"mask\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskeditformat=\"###,###,###,###,###\" maskedittrimtype=\"both\" maskeditlimitbymask=\"both\"/><Cell col=\"6\" text=\"bind:AM_RESTAX\" displaytype=\"mask\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskeditformat=\"###,###,###,###,###\" maskedittrimtype=\"both\" maskeditlimitbymask=\"both\"/><Cell col=\"7\" text=\"bind:AM_SPECIALTAX\" displaytype=\"mask\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskeditformat=\"###,###,###,###,###\" maskedittrimtype=\"both\" maskeditlimitbymask=\"both\"/><Cell col=\"8\" text=\"bind:AM_ADDTAX\" displaytype=\"mask\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskeditformat=\"###,###,###,###,###\" maskedittrimtype=\"both\" maskeditlimitbymask=\"both\"/><Cell col=\"9\" text=\"bind:AM_RETURNTAX\" displaytype=\"mask\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskeditformat=\"###,###,###,###,###\" maskedittrimtype=\"both\" maskeditlimitbymask=\"both\"/><Cell col=\"10\" text=\"bind:AM_NAPINCOMETAX\" displaytype=\"mask\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskeditformat=\"###,###,###,###,###\" maskedittrimtype=\"both\" maskeditlimitbymask=\"both\"/><Cell col=\"11\" text=\"bind:AM_NAPSPECIALTAX\" displaytype=\"mask\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskeditformat=\"###,###,###,###,###\" maskedittrimtype=\"both\" maskeditlimitbymask=\"both\"/></Band></Format></Formats>");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Tabpage("tab3",this.divData.form.tabData);
            obj.set_text("환급신청");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid3","5","32",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsGResult");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/></Columns><Rows><Row size=\"48\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"소득의&#13;&#10;종 류\"/><Cell col=\"2\" text=\"소득구분\"/><Cell col=\"3\" text=\"코드\"/><Cell col=\"4\" text=\"인 원\"/><Cell col=\"5\" text=\"소 득&#13;&#10;지급액\"/><Cell col=\"6\" text=\"결정세액\"/><Cell col=\"7\" text=\"계\"/><Cell col=\"8\" text=\"기납부세액&#13;&#10;(주, 현)\"/><Cell col=\"9\" text=\"기납부세액&#13;&#10;(종, 전)\"/><Cell col=\"10\" text=\"차 감&#13;&#10;세액\"/><Cell col=\"11\" text=\"분 납&#13;&#10;금액\"/><Cell col=\"12\" text=\"조정환급&#13;&#10;세 액\"/><Cell col=\"13\" text=\"환 급&#13;&#10;신청액\"/></Band><Band id=\"body\"><Cell text=\"bind:FLAG\" background=\"#59a7ea\" border=\"1px solid #ffffff\" color=\"#ffffff\" font=\"normal 700 12px/normal &quot;Dotum&quot;\"/><Cell col=\"1\" text=\"bind:NM_GUBUN\" background=\"#59a7ea\" border=\"1px solid #ffffff\" color=\"#ffffff\" font=\"normal 700 12px/normal &quot;Dotum&quot;\"/><Cell col=\"2\" text=\"bind:CD_GUBUN\" background=\"#59a7ea\" border=\"1px solid #ffffff\" color=\"#ffffff\" font=\"normal 700 12px/normal &quot;Dotum&quot;\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:CD_CODE\" textAlign=\"center\" edittype=\"text\" displaytype=\"text\" editautoselect=\"false\"/><Cell col=\"4\" text=\"bind:NO_INWON\" displaytype=\"mask\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskeditformat=\"###,###,###,###,###\" maskedittrimtype=\"both\" maskeditlimitbymask=\"both\"/><Cell col=\"5\" text=\"bind:AM_TOTSUPPLY\" displaytype=\"mask\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskeditformat=\"###,###,###,###,###\" maskedittrimtype=\"both\" maskeditlimitbymask=\"both\"/><Cell col=\"6\" text=\"bind:AM_FIXTAX\" displaytype=\"mask\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskeditformat=\"###,###,###,###,###\" maskedittrimtype=\"both\" maskeditlimitbymask=\"both\"/><Cell col=\"7\" text=\"bind:AM_BEFTAX\" displaytype=\"mask\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskeditformat=\"###,###,###,###,###\" maskedittrimtype=\"both\" maskeditlimitbymask=\"both\"/><Cell col=\"8\" text=\"bind:AM_BEFTAX_NOW\" displaytype=\"mask\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskeditformat=\"###,###,###,###,###\" maskedittrimtype=\"both\" maskeditlimitbymask=\"both\"/><Cell col=\"9\" text=\"bind:AM_BEFTAX_BEF\" displaytype=\"mask\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskeditformat=\"###,###,###,###,###\" maskedittrimtype=\"both\" maskeditlimitbymask=\"both\"/><Cell col=\"10\" text=\"bind:AM_DEDCOLLECTTAX\" displaytype=\"mask\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskeditformat=\"###,###,###,###,###\" maskedittrimtype=\"both\" maskeditlimitbymask=\"both\"/><Cell col=\"11\" text=\"bind:AM_PARTDECOTAX\" displaytype=\"mask\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskeditformat=\"###,###,###,###,###\" maskedittrimtype=\"both\" maskeditlimitbymask=\"both\"/><Cell col=\"12\" text=\"bind:AM_RETURNTAX\" displaytype=\"mask\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskeditformat=\"###,###,###,###,###\" maskedittrimtype=\"both\" maskeditlimitbymask=\"both\"/><Cell col=\"13\" text=\"bind:AM_RETURNAPPLY\" displaytype=\"mask\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskeditformat=\"###,###,###,###,###\" maskedittrimtype=\"both\" maskeditlimitbymask=\"both\"/></Band></Format></Formats>");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","1",null,"30","0",null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("1");
            obj.set_text("원천징수세액환급신청서 부표");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Button("btnRemove","staTITLE:-114","8","50","22",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Button("btnAdd","staTITLE:-167","8","50","22",null,null,null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("3");
            obj.set_text("입력");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Tabpage("tab4",this.divData.form.tabData);
            obj.set_text("승계명세");
            obj.set_enable("false");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid4","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList4");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"0\"/></Columns><Rows><Row size=\"48\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\"/><Cell col=\"1\" rowspan=\"2\" text=\"승계대산&#13;&#10;사업자등록번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"상호\"/><Cell col=\"3\" colspan=\"2\" text=\"차월이월환급세액&#13;&#10;승계근거\"/><Cell col=\"5\" colspan=\"3\" text=\"승계대상 차월이월 환급세액 내역\"/><Cell col=\"8\" rowspan=\"2\"/><Cell row=\"1\" col=\"3\" text=\"일자\"/><Cell row=\"1\" col=\"4\" text=\"근거\"/><Cell row=\"1\" col=\"5\" text=\"귀속연월\"/><Cell row=\"1\" col=\"6\" text=\"지급연월\"/><Cell row=\"1\" col=\"7\" text=\"차월이월환급세액\"/></Band><Band id=\"body\"><Cell text=\"bind:FLAG\"/><Cell col=\"1\" text=\"bind:NO_SJC\"/><Cell col=\"2\" text=\"bind:DS_SJC\"/><Cell col=\"3\" text=\"bind:DT_SUCCESSION\"/><Cell col=\"4\" text=\"bind:CD_SUCCESSION_BASIS\"/><Cell col=\"5\" text=\"bind:YM_IMPUTE_SUCC\"/><Cell col=\"6\" text=\"bind:YM_SUPPLY_SUCC\"/><Cell col=\"7\" text=\"bind:AM_WOLRETURNTAX\" edittype=\"mask\" displaytype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskeditformat=\"###,###,###,###,###\" maskedittrimtype=\"both\" maskeditlimitbymask=\"both\"/><Cell col=\"8\" text=\"bind:CD_SEQ\"/></Band></Format></Formats>");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Tabpage("tab5",this.divData.form.tabData);
            obj.set_text("기납부세액");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","1",null,"30","0",null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("1");
            obj.set_text("원천징수 신고납부 현황");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Grid("objGrid5","5","staTITLE:1",null,"142","5",null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList3");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"소득의&#13;&#10;구분\"/><Cell col=\"2\" text=\"귀속연월\"/><Cell col=\"3\" text=\"지급연월\"/><Cell col=\"4\" text=\"코드\"/><Cell col=\"5\" text=\"인원\"/><Cell col=\"6\" text=\"총지급액\"/><Cell col=\"7\" text=\"1.소득세등&#13;&#10;징수\"/><Cell col=\"8\" text=\"2.농특세&#13;&#10;징수\"/><Cell col=\"9\" text=\"가산세&#13;&#10; 징수\"/></Band><Band id=\"body\"><Cell text=\"bind:FLAG\" color=\"#ffffff\" wordWrap=\"none\"/><Cell col=\"1\" text=\"bind:CD_GUBUN\" textAlign=\"center\" combodataset=\"dsCD_GUBUN\" combocodecol=\"CODE\" combodatacol=\"VALUE\" comboautoselect=\"true\" combotype=\"dropdown\" combopopuptype=\"center\"/><Cell col=\"2\" text=\"bind:YM_JIGUB\" displaytype=\"date\" calendarautoselect=\"true\" calendardateformat=\"yyyy-MM\" calendareditformat=\"yyyy-MM\"/><Cell col=\"3\" text=\"bind:CD_CODE\" displaytype=\"text\" calendardateformat=\"yyyy-MM\" calendarautoselect=\"true\" calendareditformat=\"yyyy-MM\"/><Cell col=\"4\" text=\"bind:NO_INWON\" displaytype=\"text\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskeditformat=\"###,###,###,###,###\" maskedittrimtype=\"both\" maskeditlimitbymask=\"both\"/><Cell col=\"5\" text=\"bind:AM_TOTSUPPLY\" displaytype=\"mask\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskeditformat=\"###,###,###,###,###\" maskedittrimtype=\"both\" maskeditlimitbymask=\"both\"/><Cell col=\"6\" text=\"bind:AM_INCOMETAX\" displaytype=\"mask\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskeditformat=\"###,###,###,###,###\" maskedittrimtype=\"both\" maskeditlimitbymask=\"both\"/><Cell col=\"7\" text=\"bind:AM_SPECIALTAX\" displaytype=\"mask\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskeditformat=\"###,###,###,###,###\" maskedittrimtype=\"both\" maskeditlimitbymask=\"both\"/><Cell col=\"8\" text=\"bind:AM_ADDTAX\" displaytype=\"mask\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskeditformat=\"###,###,###,###,###\" maskedittrimtype=\"both\" maskeditlimitbymask=\"both\"/><Cell col=\"9\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/></Band></Format></Formats>");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Static("staTITLE00","0","objGrid5:1",null,"30","0",null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("2");
            obj.set_text("지급명세서 기납부세액 현황");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Grid("objGrid6","5","staTITLE00:1",null,"183","5",null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("3");
            obj.set_binddataset("dsList3");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\"/><Cell col=\"1\" rowspan=\"2\" text=\"소득의&#13;&#10;구분\"/><Cell col=\"2\" rowspan=\"2\" text=\"사 번\"/><Cell col=\"3\" rowspan=\"2\" text=\"성 명\"/><Cell col=\"4\" rowspan=\"2\" text=\"주민번호\"/><Cell col=\"5\" colspan=\"5\" text=\"주/현(종/전)근무지\"/><Cell row=\"1\" col=\"5\" text=\"구분\" combodataset=\"dsTY_GUBUN\" combocodecol=\"CODE\" combodatacol=\"VALUE\"/><Cell row=\"1\" col=\"6\" text=\"근무지명\"/><Cell row=\"1\" col=\"7\" text=\"사업자번호\"/><Cell row=\"1\" col=\"8\" text=\"3.소득세등\"/><Cell row=\"1\" col=\"9\" text=\"4.농특세\"/></Band><Band id=\"body\"><Cell text=\"bind:FLAG\"/><Cell col=\"1\" text=\"bind:CD_GUBUN\" textAlign=\"center\" combodataset=\"dsCD_GUBUN\" combocodecol=\"CODE\" combodatacol=\"VALUE\" calendarautoselect=\"false\" comboautoselect=\"true\" combotype=\"dropdown\"/><Cell col=\"2\" text=\"bind:ID_SABUN\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:DS_NAME\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:NO_ID\" textAlign=\"center\" comboautoselect=\"true\"/><Cell col=\"5\" text=\"bind:TY_GUBUN\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:DS_PREPAY\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:CD_PREPAY\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:AM_INCOMETAX\" displaytype=\"mask\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskeditformat=\"###,###,###,###,###\" maskedittrimtype=\"both\" maskeditlimitbymask=\"both\"/><Cell col=\"9\" text=\"bind:AM_SPECIALTAX\" displaytype=\"mask\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskeditformat=\"###,###,###,###,###\" maskedittrimtype=\"both\" maskeditlimitbymask=\"both\"/></Band></Format></Formats>");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Button("btnIncomtax","staTITLE:-296","8","126","22",null,null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("4");
            obj.set_text("신고현황 불러오기");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Radio("rdoGiGubun2","staTITLE00:-436","182","123","20",null,null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsGiGubun");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_text("연말");
            obj.set_value("Y");
            obj.set_index("0");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Button("btnGiData","rdoGiGubun2:17","181","126","22",null,null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("6");
            obj.set_text("기납부세액 불러오기");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Div("divJojung","5","objGrid6:2","1172","106",null,null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("7");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Static("sta00","0","0","364","27",null,null,null,null,null,null,this.divData.form.tabData.tab5.form.divJojung.form);
            obj.set_taborder("0");
            obj.set_text("소득세  등");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab5.form.divJojung.addChild(obj.name, obj);

            obj = new Static("staBg05","0","52","122","27",null,null,null,null,null,null,this.divData.form.tabData.tab5.form.divJojung.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab5.form.divJojung.addChild(obj.name, obj);

            obj = new Static("sta00_00","363","0","424","27",null,null,null,null,null,null,this.divData.form.tabData.tab5.form.divJojung.form);
            obj.set_taborder("2");
            obj.set_text("농어촌특별세 등");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab5.form.divJojung.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","786","0","362","53",null,null,null,null,null,null,this.divData.form.tabData.tab5.form.divJojung.form);
            obj.set_taborder("3");
            obj.set_text("사유");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab5.form.divJojung.addChild(obj.name, obj);

            obj = new Static("sta00_01","0","26","122","27",null,null,null,null,null,null,this.divData.form.tabData.tab5.form.divJojung.form);
            obj.set_taborder("15");
            obj.set_text("1. 소득세  등 합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab5.form.divJojung.addChild(obj.name, obj);

            obj = new Static("sta00_01_00","121","26","122","27",null,null,null,null,null,null,this.divData.form.tabData.tab5.form.divJojung.form);
            obj.set_taborder("16");
            obj.set_text("3. 주소득세등합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab5.form.divJojung.addChild(obj.name, obj);

            obj = new Static("sta00_01_01","242","26","122","27",null,null,null,null,null,null,this.divData.form.tabData.tab5.form.divJojung.form);
            obj.set_taborder("17");
            obj.set_text("차이금액(③-①)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab5.form.divJojung.addChild(obj.name, obj);

            obj = new Static("staBg05_00","121","52","122","27",null,null,null,null,null,null,this.divData.form.tabData.tab5.form.divJojung.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab5.form.divJojung.addChild(obj.name, obj);

            obj = new Static("staBg05_00_00","242","52","122","27",null,null,null,null,null,null,this.divData.form.tabData.tab5.form.divJojung.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab5.form.divJojung.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00","363","26","142","27",null,null,null,null,null,null,this.divData.form.tabData.tab5.form.divJojung.form);
            obj.set_taborder("20");
            obj.set_text("②농특세 합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab5.form.divJojung.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_01","504","26","142","27",null,null,null,null,null,null,this.divData.form.tabData.tab5.form.divJojung.form);
            obj.set_taborder("21");
            obj.set_text("④ 주 농특세 합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab5.form.divJojung.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_02","645","26","142","27",null,null,null,null,null,null,this.divData.form.tabData.tab5.form.divJojung.form);
            obj.set_taborder("22");
            obj.set_text("차이금액(④-②)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab5.form.divJojung.addChild(obj.name, obj);

            obj = new Static("staBg05_00_00_00","363","52","142","27",null,null,null,null,null,null,this.divData.form.tabData.tab5.form.divJojung.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab5.form.divJojung.addChild(obj.name, obj);

            obj = new Static("staBg05_00_00_01","504","52","142","27",null,null,null,null,null,null,this.divData.form.tabData.tab5.form.divJojung.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab5.form.divJojung.addChild(obj.name, obj);

            obj = new Static("staBg05_00_00_02","645","52","142","27",null,null,null,null,null,null,this.divData.form.tabData.tab5.form.divJojung.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab5.form.divJojung.addChild(obj.name, obj);

            obj = new Static("staBg05_00_00_03","786","52","362","27",null,null,null,null,null,null,this.divData.form.tabData.tab5.form.divJojung.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab5.form.divJojung.addChild(obj.name, obj);

            obj = new Static("sta00_01_02","0","78","122","27",null,null,null,null,null,null,this.divData.form.tabData.tab5.form.divJojung.form);
            obj.set_taborder("27");
            obj.set_text("사유내용");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.tabData.tab5.form.divJojung.addChild(obj.name, obj);

            obj = new Static("staBg05_00_00_03_00","121","78","1027","27",null,null,null,null,null,null,this.divData.form.tabData.tab5.form.divJojung.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.tabData.tab5.form.divJojung.addChild(obj.name, obj);

            obj = new CheckBox("chkReson1","819","58","50","17",null,null,null,null,null,null,this.divData.form.tabData.tab5.form.divJojung.form);
            obj.set_taborder("9");
            obj.set_text("중퇴");
            this.divData.form.tabData.tab5.form.divJojung.addChild(obj.name, obj);

            obj = new CheckBox("chkReson2","879","58","50","17",null,null,null,null,null,null,this.divData.form.tabData.tab5.form.divJojung.form);
            obj.set_taborder("10");
            obj.set_text("전입");
            this.divData.form.tabData.tab5.form.divJojung.addChild(obj.name, obj);

            obj = new CheckBox("chkReson3","939","58","50","17",null,null,null,null,null,null,this.divData.form.tabData.tab5.form.divJojung.form);
            obj.set_taborder("11");
            obj.set_text("전출");
            this.divData.form.tabData.tab5.form.divJojung.addChild(obj.name, obj);

            obj = new CheckBox("chkReson4","999","58","50","17",null,null,null,null,null,null,this.divData.form.tabData.tab5.form.divJojung.form);
            obj.set_taborder("12");
            obj.set_text("합병");
            this.divData.form.tabData.tab5.form.divJojung.addChild(obj.name, obj);

            obj = new CheckBox("chkReson5","1059","58","50","17",null,null,null,null,null,null,this.divData.form.tabData.tab5.form.divJojung.form);
            obj.set_taborder("13");
            obj.set_text("기타");
            this.divData.form.tabData.tab5.form.divJojung.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_INCOMTAX","4","sta00_01:2","115","20",null,null,null,null,null,null,this.divData.form.tabData.tab5.form.divJojung.form);
            obj.set_taborder("4");
            obj.set_format("###,###,###,###");
            obj.set_limitbymask("both");
            this.divData.form.tabData.tab5.form.divJojung.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_INCOMTAX_GI","124","sta00_01_00:2","115","20",null,null,null,null,null,null,this.divData.form.tabData.tab5.form.divJojung.form);
            obj.set_taborder("5");
            obj.set_format("###,###,###,###");
            obj.set_limitbymask("both");
            this.divData.form.tabData.tab5.form.divJojung.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_INCOMTAX_DIFF","246","sta00_01_01:2","115","20",null,null,null,null,null,null,this.divData.form.tabData.tab5.form.divJojung.form);
            obj.set_taborder("6");
            obj.set_format("###,###,###,###");
            obj.set_limitbymask("both");
            this.divData.form.tabData.tab5.form.divJojung.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_SPECIALTAX","374","sta00_01_01_00:2","115","20",null,null,null,null,null,null,this.divData.form.tabData.tab5.form.divJojung.form);
            obj.set_taborder("7");
            obj.set_format("###,###,###,###");
            obj.set_limitbymask("both");
            this.divData.form.tabData.tab5.form.divJojung.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_SPECIALTAX_GI","519","sta00_01_01_01:2","115","20",null,null,null,null,null,null,this.divData.form.tabData.tab5.form.divJojung.form);
            obj.set_taborder("8");
            obj.set_format("###,###,###,###");
            obj.set_limitbymask("both");
            this.divData.form.tabData.tab5.form.divJojung.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_SPECIALTAX_DIFF","664","sta00_01_01_02:2","115","20",null,null,null,null,null,null,this.divData.form.tabData.tab5.form.divJojung.form);
            obj.set_taborder("14");
            obj.set_format("###,###,###,###");
            obj.set_limitbymask("both");
            this.divData.form.tabData.tab5.form.divJojung.addChild(obj.name, obj);

            obj = new Edit("txtDS_REASON","124","82","660","20",null,null,null,null,null,null,this.divData.form.tabData.tab5.form.divJojung.form);
            obj.set_taborder("29");
            obj.set_textAlign("left");
            obj.set_inputfilter("none");
            obj.set_inputtype("normal");
            obj.set_maxlength("10");
            this.divData.form.tabData.tab5.form.divJojung.addChild(obj.name, obj);

            obj = new Button("btnAdd","btnIncomtax:3","8","50","22",null,null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("8");
            obj.set_text("입력");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Button("btnRemove","btnIncomtax:56","8","50","22",null,null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("9");
            obj.set_text("삭제");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Button("btnGiAdd","btnGiData:3","181","50","22",null,null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("10");
            obj.set_text("입력");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Button("btnGiRemove","btnGiData:56","181","50","22",null,null,null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("11");
            obj.set_text("삭제");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Tabpage("tab6",this.divData.form.tabData);
            obj.set_text("전월미환급세액");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","1",null,"30","0",null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("0");
            obj.set_text("환급 신청 시 전월 미환급세액 명세");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Grid("objGrid8","5","32",null,"149","5",null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsList3");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"귀속연월\"/><Cell col=\"2\" text=\"지급연월\"/><Cell col=\"3\" text=\"신고구분\"/><Cell col=\"4\" text=\"세목코드\"/><Cell col=\"5\" text=\"세목\"/><Cell col=\"6\" text=\"1.발생환급세액\"/><Cell col=\"7\" text=\"2.같은세목의 납부할세액\"/><Cell col=\"8\" text=\"3.당월발생환급세액(1-2)\"/></Band><Band id=\"body\"><Cell text=\"bind:FLAG\" color=\"#ffffff\" wordWrap=\"none\"/><Cell col=\"1\" text=\"bind:CD_GUBUN\" textAlign=\"center\" combodataset=\"dsCD_GUBUN\" combocodecol=\"CODE\" combodatacol=\"VALUE\" comboautoselect=\"true\" combotype=\"dropdown\" combopopuptype=\"center\"/><Cell col=\"2\" text=\"bind:YM_JIGUB\" displaytype=\"date\" calendarautoselect=\"true\" calendardateformat=\"yyyy-MM\" calendareditformat=\"yyyy-MM\"/><Cell col=\"3\" text=\"bind:CD_CODE\" displaytype=\"text\" calendardateformat=\"yyyy-MM\" calendarautoselect=\"true\" calendareditformat=\"yyyy-MM\"/><Cell col=\"4\" text=\"bind:NO_INWON\" displaytype=\"text\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskeditformat=\"###,###,###,###,###\" maskedittrimtype=\"both\" maskeditlimitbymask=\"both\"/><Cell col=\"5\" text=\"bind:AM_TOTSUPPLY\" displaytype=\"mask\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskeditformat=\"###,###,###,###,###\" maskedittrimtype=\"both\" maskeditlimitbymask=\"both\"/><Cell col=\"6\" text=\"bind:AM_INCOMETAX\" displaytype=\"mask\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskeditformat=\"###,###,###,###,###\" maskedittrimtype=\"both\" maskeditlimitbymask=\"both\"/><Cell col=\"7\" text=\"bind:AM_SPECIALTAX\" displaytype=\"mask\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskeditformat=\"###,###,###,###,###\" maskedittrimtype=\"both\" maskeditlimitbymask=\"both\"/><Cell col=\"9\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/></Band></Format></Formats>");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Static("staTITLE00","0","184",null,"28","0",null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("2");
            obj.set_text("환급세액 조정 현황");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Grid("objGrid9","5","212",null,"283","5",null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("3");
            obj.set_binddataset("dsList3");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"귀속연월\"/><Cell col=\"2\" text=\"지급연월\"/><Cell col=\"3\" text=\"4.전월미환급세액\"/><Cell col=\"4\" text=\"5.기환급세액\"/><Cell col=\"5\" text=\"6.차감잔액\"/><Cell col=\"6\" text=\"7.당월발생&#13;&#10;환급세액\"/><Cell col=\"7\" text=\"8.조정대상&#13;&#10;환급세액\"/><Cell col=\"8\" text=\"9.당월조정&#13;&#10;환급세액\"/><Cell col=\"9\" text=\"10.차월이월&#13;&#10; 환급세액\"/></Band><Band id=\"body\"><Cell text=\"bind:FLAG\" color=\"#ffffff\" wordWrap=\"none\"/><Cell col=\"1\" text=\"bind:CD_GUBUN\" textAlign=\"center\" combodataset=\"dsCD_GUBUN\" combocodecol=\"CODE\" combodatacol=\"VALUE\" comboautoselect=\"true\" combotype=\"dropdown\" combopopuptype=\"center\"/><Cell col=\"2\" text=\"bind:YM_JIGUB\" displaytype=\"date\" calendarautoselect=\"true\" calendardateformat=\"yyyy-MM\" calendareditformat=\"yyyy-MM\"/><Cell col=\"3\" text=\"bind:CD_CODE\" displaytype=\"text\" calendardateformat=\"yyyy-MM\" calendarautoselect=\"true\" calendareditformat=\"yyyy-MM\"/><Cell col=\"4\" text=\"bind:NO_INWON\" displaytype=\"text\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskeditformat=\"###,###,###,###,###\" maskedittrimtype=\"both\" maskeditlimitbymask=\"both\"/><Cell col=\"5\" text=\"bind:AM_TOTSUPPLY\" displaytype=\"mask\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskeditformat=\"###,###,###,###,###\" maskedittrimtype=\"both\" maskeditlimitbymask=\"both\"/><Cell col=\"6\" text=\"bind:AM_INCOMETAX\" displaytype=\"mask\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskeditformat=\"###,###,###,###,###\" maskedittrimtype=\"both\" maskeditlimitbymask=\"both\"/><Cell col=\"7\" text=\"bind:AM_SPECIALTAX\" displaytype=\"mask\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskeditformat=\"###,###,###,###,###\" maskedittrimtype=\"both\" maskeditlimitbymask=\"both\"/><Cell col=\"8\" text=\"bind:AM_ADDTAX\" displaytype=\"mask\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditclipmode=\"includespace\" maskeditformat=\"###,###,###,###,###\" maskedittrimtype=\"both\" maskeditlimitbymask=\"both\"/><Cell col=\"9\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/></Band></Format></Formats>");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Button("btnUnAdd1","staTITLE:-167","8","50","22",null,null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("4");
            obj.set_text("입력");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Button("btnUnRemove1","btnUnAdd1:3","8","50","22",null,null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("5");
            obj.set_text("삭제");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Button("btnUnAdd2","staTITLE00:-167","188","50","22",null,null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("6");
            obj.set_text("입력");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Button("btnUnRemove2","btnUnAdd2:3","188","50","22",null,null,null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("7");
            obj.set_text("삭제");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Static("staSINGO","0","0","130","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("신고구분");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgSINGO","staSINGO:-1","staSINGO:-27","400","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYM_IMPUTE","staBgSINGO:-1","staBgSINGO:-27","130","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("귀속연월");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgYM_IMPUTE","staYM_IMPUTE:-1","staYM_IMPUTE:-27","125","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYM_SUPPLY","staBgYM_IMPUTE:-1","staBgYM_IMPUTE:-27","130","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("지급연월");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgYM_SUPPLY","staYM_SUPPLY:-1","staYM_SUPPLY:-27","125","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_ENTER","staBgYM_SUPPLY:-1","staBgYM_SUPPLY:-27","130","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("제출일자");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDT_ENTER","staDT_ENTER:-1","staDT_ENTER:-27","125","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNM_SANGHO","0","staTITLE:5","130","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("법인명(상호)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgNM_SANGHO","staNM_SANGHO:-1","staNM_SANGHO:-27","125","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNM_BOSS","staBgNM_SANGHO:-1","staBgNM_SANGHO:-27","130","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("대표자(성명)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgNM_BOSS","staNM_BOSS:-1","staNM_BOSS:-27","125","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_TEL","staBgNM_BOSS:-1","staBgNM_BOSS:-27","130","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgNO_TEL","staNO_TEL:-1","staNO_TEL:-27","125","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBATCH","staBgNO_TEL:-1","staBgNO_TEL:-27","130","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_text("일괄납부여부");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgBATCH","staBATCH:-1","staBATCH:-27","125","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSAUPJA","staBgBATCH:-1","staBgBATCH:-27","130","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_text("사업자단위과세여부");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgSAUPJA","staSAUPJA:-1","staSAUPJA:-27","125","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_SAUP","staNM_SANGHO:-130","staNM_SANGHO:-1","130","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgNO_SAUP","staNO_SAUP:-1","staNO_SAUP:-27","125","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staADDR","staBgNO_SAUP:-1","staBgNO_SAUP:-27","130","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_text("사업장소재지");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgADDR","staADDR:-1","staADDR:-27","884","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoSINGO","staSINGO:5","staSINGO:-23","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsSINGO");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ctclYM_IMPUTE","staYM_IMPUTE:5","staYM_IMPUTE:-23","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enableevent("true");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ctclYM_SUPPY","staYM_SUPPLY:5","staYM_SUPPLY:-23","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enableevent("true");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ccfDT_ENTER","staDT_ENTER:5","staDT_ENTER:-23","115","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNM_SANGHO","staNM_SANGHO:5","staNM_SANGHO:-23","115","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNM_BOSS","staNM_BOSS:5","staNM_BOSS:-23","115","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_TEL","staNO_TEL:5","staNO_TEL:-23","115","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_SAUP","staNO_SAUP:5","staNO_SAUP:-24","115","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtADDR","staADDR:5","staADDR:-23","750","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoBATCH","staBATCH:5","staBATCH:-23","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_innerdataset("dsBATCH");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoSAUPJA","staSAUPJA:5","staSAUPJA:-23","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_innerdataset("dsSAUPJA");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoSUBWRITE","567","127","217","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_innerdataset("dsSUBWRITE");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divData.addChild(obj.name, obj);

            obj = new CheckBox("chkSINGO02","rdoSINGO:20","rdoSINGO:-20","45","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("수정");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new CheckBox("chkSINGO03","chkSINGO02:5","chkSINGO02:-20","45","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("연말");
            this.divData.addChild(obj.name, obj);

            obj = new CheckBox("chkSINGO04","chkSINGO03:5","chkSINGO03:-20","70","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("환급신청");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new CheckBox("chkSINGO05","chkSINGO04:5","chkSINGO04:-20","70","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("승계명세");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclYM_FROM.form.TextBox","value","dsSearch","YM_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclYM_TO.form.TextBox","value","dsSearch","YM_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclYM_JFROM.form.TextBox","value","dsSearch","YM_JFROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctclYM_JTO.form.TextBox","value","dsSearch","YM_JTO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_DEPT_SELFACNT.form.CDTextBox","value","dsSearch","CD_DEPT_SELFACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_DEPT_SELFACNT.form.DSTextBox","value","dsSearch","DS_DEPT_SELFACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.tabData.tab5.form.divJojung.form.mskAM_INCOMTAX","value","dsList7","AM_INCOMETAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.tabData.tab5.form.divJojung.form.mskAM_INCOMTAX_GI","value","dsList7","AM_INCOMETAX_GI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.tabData.tab5.form.divJojung.form.mskAM_INCOMTAX_DIFF","value","dsList7","AM_INCOMETAX_CHA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.tabData.tab5.form.divJojung.form.mskAM_SPECIALTAX","value","dsList7","AM_SPECIALTAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.tabData.tab5.form.divJojung.form.mskAM_SPECIALTAX_GI","value","dsList7","AM_SPECIALTAX_GI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.tabData.tab5.form.divJojung.form.mskAM_SPECIALTAX_DIFF","value","dsList7","AM_SPECIALTAX_CHA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.tabData.tab5.form.divJojung.form.chkReson1","value","dsList7","YN_REASON1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.tabData.tab5.form.divJojung.form.chkReson2","value","dsList7","YN_REASON2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.tabData.tab5.form.divJojung.form.chkReson3","value","dsList7","YN_REASON3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.tabData.tab5.form.divJojung.form.chkReson4","value","dsList7","YN_REASON4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.tabData.tab5.form.divJojung.form.chkReson5","value","dsList7","YN_REASON5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.tabData.tab5.form.divJojung.form.txtDS_REASON","value","dsList7","DS_REASON");
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
        this.registerScript("DHV_PAYSTATUS.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        var context = "/";
        if (nexacro.getEnvironmentVariable("evContextPath") != undefined) {
        	context = nexacro.getEnvironmentVariable("evContextPath");
        }

        this.fileConfig = {
        	host : this.gfnGetServerUrl(),
        	downloadUrl : context + "file/downloadText.do",
        	allowTypes : ["txt"],
        	maxCount : 1,
        	maxSize : "200MB",
        	maxTotalSize : "200MB"
        };

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

        	this.ccfCD_CORP.form.CDTextBox.setFocus();

        	//법인코드 세션에 코드로 셋팅
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        	// 세무단위 초기값 설정
        	this.dsSearch.setColumn(0, "CD_DEPT_SELFACNT", this.UserInfo.CD_DEPT_SELFACNT);
        	this.divSearch.form.ccfCD_DEPT_SELFACNT.form.fnCodeFindLoad();

        	// 환급신청 임시숨김처리
        // 	this.divData.form.tabData.tab3.set_tabbuttonheight(1);
        // 	this.divData.form.tabData.tab3.set_tabbuttonwidth(1);

        	// 승계명세 임시숨김처리
        	this.divData.form.tabData.tab4.set_tabbuttonheight(1);
        	this.divData.form.tabData.tab4.set_tabbuttonwidth(1);

        	this.setJojungForm = "";
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

        	this.btnData = this.gfnFormButtonAdd("Data", "fnData", "데이터 불러오기");
        	this.btnESingo = this.gfnFormButtonAdd("ESingo", "fnESingo", "전자신고");
        	this.btnSoduk = this.gfnFormButtonAdd("Soduk", "fnSoduk", "소득자료 집계");

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ctclYM_FROM = this.divSearch.form.ctclYM_FROM;
        	this.ctclYM_TO = this.divSearch.form.ctclYM_TO;
        	this.ctclYM_JFROM = this.divSearch.form.ctclYM_JFROM;
        	this.ctclYM_JTO = this.divSearch.form.ctclYM_JTO;
        	this.ccfCD_DEPT_SELFACNT = this.divSearch.form.ccfCD_DEPT_SELFACNT;

        	this.rdoSINGO = this.divData.form.rdoSINGO;
        	this.chkSINGO02 = this.divData.form.chkSINGO02;
        	this.chkSINGO03 = this.divData.form.chkSINGO03;
        	this.chkSINGO04 = this.divData.form.chkSINGO04;
        	this.chkSINGO05 = this.divData.form.chkSINGO05;

        	this.ctclYM_IMPUTE = this.divData.form.ctclYM_IMPUTE;
        	this.ctclYM_SUPPY = this.divData.form.ctclYM_SUPPY;
        	this.ccfDT_ENTER = this.divData.form.ccfDT_ENTER;
        	this.edtNM_SANGHO = this.divData.form.edtNM_SANGHO;
        	this.edtNM_BOSS = this.divData.form.edtNM_BOSS;
        	this.edtNO_TEL = this.divData.form.edtNO_TEL;
        	this.rdoBATCH = this.divData.form.rdoBATCH;
        	this.rdoSAUPJA = this.divData.form.rdoSAUPJA;
        	this.edtNO_SAUP = this.divData.form.edtNO_SAUP;
        	this.edtADDR = this.divData.form.edtADDR;
        	this.rdoSUBWRITE = this.divData.form.rdoSUBWRITE;

        	this.tabData = this.divData.form.tabData;

        	this.mskAM_BEFORETAX = this.tabData.tab1.form.mskAM_BEFORETAX;
        	this.mskAM_REQUESTTAX = this.tabData.tab1.form.mskAM_REQUESTTAX;
        	this.mskAM_JAN = this.tabData.tab1.form.mskAM_JAN;
        	this.mskAM_ILBANRETURN = this.tabData.tab1.form.mskAM_ILBANRETURN;
        	this.mskAM_SINTAC = this.tabData.tab1.form.mskAM_SINTAC;
        	this.mskAM_GITA = this.tabData.tab1.form.mskAM_GITA;
        	this.mskAM_GITA2 = this.tabData.tab1.form.mskAM_GITA2;
        	this.mskAM_SETTLE = this.tabData.tab1.form.mskAM_SETTLE;
        	this.mskAM_RETURNTAXSUM = this.tabData.tab1.form.mskAM_RETURNTAXSUM;
        	this.mskAM_WOLRETURNTAX = this.tabData.tab1.form.mskAM_WOLRETURNTAX;
        	this.mskAM_RETURNAPPLY = this.tabData.tab1.form.mskAM_RETURNAPPLY;

        	this.mskAM_INCOMETAX = this.divData.form.tabData.tab5.form.divJojung.form.mskAM_INCOMTAX;
        	this.mskAM_INCOMETAX_GI = this.divData.form.tabData.tab5.form.divJojung.form.mskAM_INCOMTAX_GI;
        	this.mskAM_INCOMETAX_DIFF = this.divData.form.tabData.tab5.form.divJojung.form.mskAM_INCOMTAX_DIFF;
        	this.mskAM_SPECIALTAX = this.divData.form.tabData.tab5.form.divJojung.form.mskAM_SPECIALTAX;
        	this.mskAM_SPECIALTAX_GI = this.divData.form.tabData.tab5.form.divJojung.form.mskAM_SPECIALTAX_GI;
        	this.mskAM_SPECIALTAX_DIFF = this.divData.form.tabData.tab5.form.divJojung.form.mskAM_SPECIALTAX_DIFF;
        	this.chkReson1 = this.divData.form.tabData.tab5.form.divJojung.form.chkReson1;
        	this.chkReson2 = this.divData.form.tabData.tab5.form.divJojung.form.chkReson2;
        	this.chkReson3 = this.divData.form.tabData.tab5.form.divJojung.form.chkReson3;
        	this.chkReson4 = this.divData.form.tabData.tab5.form.divJojung.form.chkReson4;
        	this.chkReson5 = this.divData.form.tabData.tab5.form.divJojung.form.chkReson5;
        	this.txtDS_REASON = this.divData.form.tabData.tab5.form.divJojung.form.txtDS_REASON;


        	this.dxGrid = this.tabData.tab1.form.objGrid;
        	this.dxGrid2 = this.tabData.tab2.form.objGrid2;
        	this.dxGrid3 = this.tabData.tab3.form.objGrid3;
        	this.dxGrid4 = this.tabData.tab4.form.objGrid4;
        	this.dxGrid5 = this.tabData.tab5.form.objGrid5;
        	this.dxGrid6 = this.tabData.tab5.form.objGrid6;
        	this.dxGrid8 = this.tabData.tab6.form.objGrid8;
        	this.dxGrid9 = this.tabData.tab6.form.objGrid9;

        	//근로소득탭 상수처리
        	this.ucA01 = 0;    //근로소득-간이세액
        	this.ucA02 = 1;    //근로소득-중도퇴사
        	this.ucA03 = 2;    //근로소득-일용근로
        	this.ucA04 = 3;    //근로소득-연말정산
        	this.ucA05 = 4;    //근로소득-연말정산
        	this.ucA06 = 5;    //근로소득-연말정산
        	this.ucA10 = 6;    //근로소득-가감계
        	this.ucA21 = 7;    //퇴직소득-연금계좌
        	this.ucA22 = 8;    //퇴직소득-그외
        	this.ucA20 = 9;    //퇴직소득-가감계
        	this.ucA25 = 10;    //사업소득-매월징수
        	this.ucA26 = 11;    //사업소득-연말정산
        	this.ucA30 = 12;    //사업소득-가감계
        	this.ucA41 = 13;    //기타소득-연금계좌
        	this.ucA42 = 14;    //기타소득-그외
        	this.ucA40 = 15;    //기타소득-가감계
        	this.ucA48 = 16;    //연금소득-연금계좌
        	this.ucA45 = 17;    //연금소득-공적연금(매월)
        	this.ucA46 = 18;    //연금소득-연말정산
        	this.ucA47 = 19;    //연금소득-가감계
        	this.ucA50 = 20;    //이자소득
        	this.ucA60 = 21;    //배당소득
        	this.ucA69 = 22;    //저축해지 추징세액 등
        	this.ucA70 = 23;    //비거주자 양도소득
        	this.ucA80 = 24;    //내.외국인법인원천
        	this.ucA90 = 25;    //수정신고(세액)
        	this.ucA99 = 26;    //총합계

        	this.getDataFlag = false;
        	this.strAmBeforetax = 0;
        	this.strAmBeforetaxOrg = 0;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_CORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_DEPT_SELFACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	//this.ctclYM_JTO.AfterCDTextChanged = "fnCalAfterCDTextChanged";
        	this.ctclYM_SUPPY.AfterCDTextChanged = "fnCalAfterCDTextChanged";

        	var toYm = this.gfnGetDate().substring(0, 6);

        	this.ctclYM_FROM.form.TextBox.set_value(toYm);
        	this.ctclYM_TO.form.TextBox.set_value(toYm);
        	this.ctclYM_JFROM.form.TextBox.set_value(toYm);
        	this.ctclYM_JTO.form.TextBox.set_value(toYm);

        	this.rdoSINGO.set_index(0);
        	this.ctclYM_IMPUTE.form.TextBox.set_value(toYm);
        	this.ctclYM_SUPPY.form.TextBox.set_value(toYm);

        	// 그리드 초기화
        	this.setDxGrid();
        	this.setDxGrid2();
        	//this.setDxGrid3();
        	this.setDxGrid4();
        	this.gfnGridInit(this.dxGrid3, this.dsList3, "DH", "DHV_RETURNAPPLY");
        	this.gfnGridInit(this.dxGrid5, this.dsList5, "DH", "DHV_RETURNINCOMTAX");
        	this.gfnGridInit(this.dxGrid6, this.dsList6, "DH", "DHV_RETURNPAYMENT");
        	this.gfnGridInit(this.dxGrid8, this.dsList8, "DH", "DHV_UNRETURNLIST");
        	this.gfnGridInit(this.dxGrid9, this.dsList9, "DH", "DHV_UNRETURNJOJUNG");


        	this.dxGrid6.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	this.dxGrid9.EnterCell = "fnGrid_EnterCell";
        	this.dxGrid9.setCellProperty("body", this.dxGrid9.getBindCellIndex("body", "AM_UNRETURN"), "cssclass", "expr: currow==0 ? 'BACK_ReadOnly' : ''");
        	this.dxGrid9.setCellProperty("body", this.dxGrid9.getBindCellIndex("body", "AM_GIRETURN"), "cssclass", "expr: currow==0 ? 'BACK_ReadOnly' : ''");
        	this.dxGrid9.setCellProperty("body", this.dxGrid9.getBindCellIndex("body", "AM_CHARETURN"), "cssclass", "expr: currow==0 ? 'BACK_ReadOnly' : ''");

        	//헤더 클릭 이벤트 삭제(소팅 막기 위해 처리)
        	this.dxGrid.removeEventHandlerLookup("onheadclick", "gfnGrid_onheadclick", this);
        	//헤더 클릭 이벤트 삭제(소팅 막기 위해 처리)
        	this.dxGrid2.removeEventHandlerLookup("onheadclick", "gfnGrid_onheadclick", this);
        	//헤더 클릭 이벤트 삭제(소팅 막기 위해 처리)
        	this.dxGrid3.removeEventHandlerLookup("onheadclick", "gfnGrid_onheadclick", this);
        	//헤더 클릭 이벤트 삭제(소팅 막기 위해 처리)
        	this.dxGrid4.removeEventHandlerLookup("onheadclick", "gfnGrid_onheadclick", this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	//근로소득, 부표작성 파라미터
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("OUT_CD_CORP", "string");
         	this.dsSelect.addColumn("OUT_YMFR_IMPUTE", "string");
         	this.dsSelect.addColumn("OUT_YMTO_IMPUTE", "string");
        	this.dsSelect.addColumn("OUT_YMFR_SUPPLY", "string");
        	this.dsSelect.addColumn("OUT_YMTO_SUPPLY", "string");
        	this.dsSelect.addColumn("OUT_GB_SINGO1", "string");

        	//데이터가져오기 파라미러
        	this.dsSelect2 = new Dataset();
        	this.dsSelect2.addColumn("OUT_CD_CORP", "string");
         	this.dsSelect2.addColumn("OUT_YMFR_IMPUTE", "string");
         	this.dsSelect2.addColumn("OUT_YMTO_IMPUTE", "string");
        	this.dsSelect2.addColumn("OUT_YMFR_SUPPLY", "string");
        	this.dsSelect2.addColumn("OUT_YMTO_SUPPLY", "string");
        	this.dsSelect2.addColumn("OUT_GB_SINGO1", "string");

        	this.dsSelectFile = new Dataset();
        	this.dsSelectFile.addColumn("OUT_CD_CORP", "string");
        	this.dsSelectFile.addColumn("OUT_YM_IMPUTE", "string");
        	this.dsSelectFile.addColumn("OUT_GB_SINGO1", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("OUT_CD_CORP", "string");
        	this.dsInsert.addColumn("OUT_YM_IMPUTE", "string");
        	this.dsInsert.addColumn("YM_SUPPLY", "string");
        	this.dsInsert.addColumn("GB_SINGO1", "string");
        	this.dsInsert.addColumn("GB_SINGO2", "string");
        	this.dsInsert.addColumn("GB_SINGO3", "string");
        	this.dsInsert.addColumn("YN_BATCH", "string");
        	this.dsInsert.addColumn("CD_GUBUN", "string");
        	this.dsInsert.addColumn("NO_INWON", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_TOTSUPPLY", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_INCOMETAX", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_SPECIALTAX", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_ADDTAX", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_RETURNTAX", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_NAPINCOMETAX", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_NAPSPECIALTAX", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_BEFORETAX", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_REQUESTTAX", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_JAN", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_ILBANRETURN", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_SINTAC", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_GITA", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_SETTLE", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_RETURNTAXSUM", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_WOLRETURNTAX", "BIGDECIMAL");
        	this.dsInsert.addColumn("DT_ENTER", "string");
        	this.dsInsert.addColumn("YN_SUBWRITE", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");
        	this.dsInsert.addColumn("AM_RESTAX", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_NAPRESTAX", "BIGDECIMAL");
        	this.dsInsert.addColumn("GB_SINGO4", "string");
        	this.dsInsert.addColumn("GB_SINGO5", "string");
        	this.dsInsert.addColumn("YN_SAUPJA", "string");
        	this.dsInsert.addColumn("AM_RETURNAPPLY", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_GITA2", "BIGDECIMAL");

        	//환급신청 탭 파라미터
        	this.dsRSelect = new Dataset();
        	this.dsRSelect.addColumn("OUT_CD_CORP", "string");
        	this.dsRSelect.addColumn("OUT_YM_IMPUTE", "string");
        	this.dsRSelect.addColumn("OUT_GB_SINGO1", "string");
        	this.dsRSelect.addColumn("OUT_YM_SUPPLY", "string");

        	this.dsRInsert = new Dataset();
        	this.dsRInsert.addColumn("OUT_CD_CORP", "string");
        	this.dsRInsert.addColumn("OUT_YM_IMPUTE", "string");
        	this.dsRInsert.addColumn("YM_SUPPLY", "string");
        	this.dsRInsert.addColumn("GB_SINGO1", "string");
        	this.dsRInsert.addColumn("GB_SINGO2", "string");
        	this.dsRInsert.addColumn("GB_SINGO3", "string");
        	this.dsRInsert.addColumn("YN_BATCH", "string");
        	this.dsRInsert.addColumn("CD_GUBUN", "string");
        	this.dsRInsert.addColumn("NM_GUBUN", "string");
        	this.dsRInsert.addColumn("CD_CODE", "string");
        	this.dsRInsert.addColumn("NO_INWON", "BIGDECIMAL");
        	this.dsRInsert.addColumn("AM_TOTSUPPLY", "BIGDECIMAL");
        	this.dsRInsert.addColumn("AM_FIXTAX", "BIGDECIMAL");
        	this.dsRInsert.addColumn("AM_BEFTAX", "BIGDECIMAL");
        	this.dsRInsert.addColumn("AM_BEFTAX_NOW", "BIGDECIMAL");
        	this.dsRInsert.addColumn("AM_BEFTAX_BEF", "BIGDECIMAL");
        	this.dsRInsert.addColumn("AM_DEDCOLLECTTAX", "BIGDECIMAL");
        	this.dsRInsert.addColumn("AM_PARTDECOTAX", "BIGDECIMAL");
        	this.dsRInsert.addColumn("AM_RETURNTAX", "BIGDECIMAL");
        	this.dsRInsert.addColumn("AM_RETURNAPPLY", "BIGDECIMAL");
        	this.dsRInsert.addColumn("ID_INSERT", "string");

        	this.dsRDelete = new Dataset();
        	this.dsRDelete.addColumn("OUT_CD_CORP", "string");
        	this.dsRDelete.addColumn("OUT_YM_IMPUTE", "string");
        	this.dsRDelete.addColumn("GB_SINGO1", "string");
        	this.dsRDelete.addColumn("CD_GUBUN", "string");
        	this.dsRDelete.addColumn("OUT_YM_SUPPLY", "string");

        	//승계명세 파라미터
        	this.dsSSelect = new Dataset();
        	this.dsSSelect.addColumn("OUT_CD_CORP", "string");
        	this.dsSSelect.addColumn("OUT_YM_IMPUTE", "string");
        	this.dsSSelect.addColumn("OUT_GB_SINGO1", "string");
        	this.dsSSelect.addColumn("OUT_YM_SUPPLY", "string");

        	this.dsSInsert = new Dataset();
        	this.dsSInsert.addColumn("OUT_CD_CORP", "string");
        	this.dsSInsert.addColumn("OUT_YM_IMPUTE", "string");
        	this.dsSInsert.addColumn("GB_SINGO1", "string");
        	this.dsSInsert.addColumn("NO_SJC", "string");
        	this.dsSInsert.addColumn("DS_SJC", "string");
        	this.dsSInsert.addColumn("DT_SUCCESSION", "string");
        	this.dsSInsert.addColumn("CD_SUCCESSION_BASIS", "string");
        	this.dsSInsert.addColumn("YM_IMPUTE_SUCC", "string");
        	this.dsSInsert.addColumn("YM_SUPPLY_SUCC", "string");
        	this.dsSInsert.addColumn("AM_WOLRETURNTAX", "BIGDECIMAL");
        	this.dsSInsert.addColumn("CD_SEQ", "string");
        	this.dsSInsert.addColumn("ID_INSERT", "string");

        	//전자신고용
        	this.dsESingo = new Dataset();
        	this.dsESingo.addColumn("OUT_CD_SELFACNT", "string"); //   IN      VARCHAR2,      -- 법인코드
        	this.dsESingo.addColumn("OUT_YM_IMPUTE", "string"); //   IN      VARCHAR2,      -- 귀속년월
        	this.dsESingo.addColumn("OUT_YM_SUPPLY", "string"); //	  IN      VARCHAR2,	   --지급년월
        	this.dsESingo.addColumn("OUT_GB_SINGO1", "string"); //   IN      VARCHAR2,

        	//기납부세액명세서 탭
            this.dsGInsert = new Dataset();
        	this.dsGInsert.addColumn("OUT_CD_CORP", "string");
        	this.dsGInsert.addColumn("OUT_YM_IMPUTE", "string");
        	this.dsGInsert.addColumn("YM_SUPPLY", "string");
        	this.dsGInsert.addColumn("GB_SINGO1", "string");
        	this.dsGInsert.addColumn("GB_SINGO2", "string");
        	this.dsGInsert.addColumn("GB_SINGO3", "string");
        	this.dsGInsert.addColumn("CD_GUBUN", "string");
        	this.dsGInsert.addColumn("NM_GUBUN", "string");
        	this.dsGInsert.addColumn("YM_WORK", "string");
        	this.dsGInsert.addColumn("YM_JIGUB", "string");
        	this.dsGInsert.addColumn("CD_CODE", "string");
        	this.dsGInsert.addColumn("NO_INWON", "BIGDECIMAL");
        	this.dsGInsert.addColumn("AM_TOTSUPPLY", "BIGDECIMAL");
        	this.dsGInsert.addColumn("AM_INCOMETAX", "BIGDECIMAL");
        	this.dsGInsert.addColumn("AM_SPECIALTAX", "BIGDECIMAL");
        	this.dsGInsert.addColumn("AM_ADDTAX", "BIGDECIMAL");
        	this.dsGInsert.addColumn("NO_ID", "BIGDECIMAL");
        	this.dsGInsert.addColumn("ID_INSERT", "string");

        	this.dsGInsert1 = new Dataset();
        	this.dsGInsert1.addColumn("OUT_CD_CORP", "string");
        	this.dsGInsert1.addColumn("OUT_YM_IMPUTE", "string");
        	this.dsGInsert1.addColumn("YM_SUPPLY", "string");
        	this.dsGInsert1.addColumn("GB_SINGO1", "string");
        	this.dsGInsert1.addColumn("GB_SINGO2", "string");
        	this.dsGInsert1.addColumn("GB_SINGO3", "string");
        	this.dsGInsert1.addColumn("CD_GUBUN", "string");
        	this.dsGInsert1.addColumn("NM_GUBUN", "string");
        	this.dsGInsert1.addColumn("ID_SABUN", "string");
        	this.dsGInsert1.addColumn("DS_NAME", "string");
        	this.dsGInsert1.addColumn("ID_RESIDENT", "string");
        	this.dsGInsert1.addColumn("TY_GUBUN", "string");
        	this.dsGInsert1.addColumn("CD_PREPAY", "string");
        	this.dsGInsert1.addColumn("DS_PREPAY", "string");
        	this.dsGInsert1.addColumn("AM_INCOMETAX", "BIGDECIMAL");
        	this.dsGInsert1.addColumn("AM_SPECIALTAX", "BIGDECIMAL");
        	this.dsGInsert1.addColumn("NO_ID", "BIGDECIMAL");
        	this.dsGInsert1.addColumn("ID_INSERT", "string");

        	this.dsGInsert2 = new Dataset();
        	this.dsGInsert2.addColumn("OUT_CD_CORP", "string");
        	this.dsGInsert2.addColumn("OUT_YM_IMPUTE", "string");
        	this.dsGInsert2.addColumn("YM_SUPPLY", "string");
        	this.dsGInsert2.addColumn("GB_SINGO1", "string");
        	this.dsGInsert2.addColumn("GB_SINGO2", "string");
        	this.dsGInsert2.addColumn("GB_SINGO3", "string");
        	this.dsGInsert2.addColumn("AM_INCOMETAX", "BIGDECIMAL");
        	this.dsGInsert2.addColumn("AM_INCOMETAX_GI", "BIGDECIMAL");
        	this.dsGInsert2.addColumn("AM_SPECIALTAX", "BIGDECIMAL");
        	this.dsGInsert2.addColumn("AM_SPECIALTAX_GI", "BIGDECIMAL");
        	this.dsGInsert2.addColumn("AM_INCOMETAX_CHA", "BIGDECIMAL");
        	this.dsGInsert2.addColumn("AM_SPECIALTAX_CHA", "BIGDECIMAL");
        	this.dsGInsert2.addColumn("YN_REASON1", "string");
        	this.dsGInsert2.addColumn("YN_REASON2", "string");
        	this.dsGInsert2.addColumn("YN_REASON3", "string");
        	this.dsGInsert2.addColumn("YN_REASON4", "string");
        	this.dsGInsert2.addColumn("YN_REASON5", "string");
        	this.dsGInsert2.addColumn("DS_REASON", "string");
        	this.dsGInsert2.addColumn("ID_INSERT", "string");

        	this.dsGDelete = new Dataset();
        	this.dsGDelete.addColumn("NO_ID", "BIGDECIMAL");

        	this.dsGDelete1 = new Dataset();
        	this.dsGDelete1.addColumn("NO_ID", "BIGDECIMAL");

        	//전월미환급세액 조정명세서
        	this.dsUInsert1 = new Dataset();
        	this.dsUInsert1.addColumn("OUT_CD_CORP", "string");
        	this.dsUInsert1.addColumn("OUT_YM_IMPUTE", "string");
        	this.dsUInsert1.addColumn("YM_SUPPLY", "string");
        	this.dsUInsert1.addColumn("GB_SINGO1", "string");
        	this.dsUInsert1.addColumn("GB_SINGO2", "string");
        	this.dsUInsert1.addColumn("GB_SINGO3", "string");
        	this.dsUInsert1.addColumn("CD_GUBUN", "string");
        	this.dsUInsert1.addColumn("NM_GUBUN", "string");
        	this.dsUInsert1.addColumn("YM_WORK", "string");
        	this.dsUInsert1.addColumn("YM_JIGUB", "string");
        	this.dsUInsert1.addColumn("TY_GUBUN", "string");
        	this.dsUInsert1.addColumn("AM_RETURNTAX", "BIGDECIMAL");
        	this.dsUInsert1.addColumn("AM_NAPBUTAX", "BIGDECIMAL");
        	this.dsUInsert1.addColumn("AM_BEFORETAX", "BIGDECIMAL");
        	this.dsUInsert1.addColumn("NO_ID", "BIGDECIMAL");
        	this.dsUInsert1.addColumn("ID_INSERT", "string");

        	this.dsUInsert2 = new Dataset();
        	this.dsUInsert2.addColumn("OUT_CD_CORP", "string");
        	this.dsUInsert2.addColumn("OUT_YM_IMPUTE", "string");
        	this.dsUInsert2.addColumn("YM_SUPPLY", "string");
        	this.dsUInsert2.addColumn("GB_SINGO1", "string");
        	this.dsUInsert2.addColumn("GB_SINGO2", "string");
        	this.dsUInsert2.addColumn("GB_SINGO3", "string");
        	this.dsUInsert2.addColumn("YM_WORK", "string");
        	this.dsUInsert2.addColumn("YM_JIGUB", "string");
        	this.dsUInsert2.addColumn("NO_SEQ", "BIGDECIMAL");
        	this.dsUInsert2.addColumn("AM_UNRETURN", "BIGDECIMAL");
        	this.dsUInsert2.addColumn("AM_GIRETURN", "BIGDECIMAL");
        	this.dsUInsert2.addColumn("AM_CHARETURN", "BIGDECIMAL");
        	this.dsUInsert2.addColumn("AM_DANGRETURN", "BIGDECIMAL");
        	this.dsUInsert2.addColumn("AM_JOJUNGRETURN", "BIGDECIMAL");
        	this.dsUInsert2.addColumn("AM_DANGJOJUNGRETURN", "BIGDECIMAL");
        	this.dsUInsert2.addColumn("AM_RETURNTAX", "BIGDECIMAL");
        	this.dsUInsert2.addColumn("NO_ID", "BIGDECIMAL");
        	this.dsUInsert2.addColumn("ID_INSERT", "string");

        	this.dsUDelete1 = new Dataset();
        	this.dsUDelete1.addColumn("NO_ID", "BIGDECIMAL");

        	this.dsUDelete2 = new Dataset();
        	this.dsUDelete2.addColumn("NO_ID", "BIGDECIMAL");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	//this.fnSaveValidate();

        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);
        	this.gfnGridBeforeSelect(this.dxGrid2);
        	this.gfnGridBeforeSelect(this.dxGrid3);
        	this.gfnGridBeforeSelect(this.dxGrid4);
        	this.gfnGridBeforeSelect(this.dxGrid5);
        	this.gfnGridBeforeSelect(this.dxGrid6);
        	this.gfnGridBeforeSelect(this.dxGrid8);
        	this.gfnGridBeforeSelect(this.dxGrid9);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsResult=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "OUT_CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "OUT_YMFR_IMPUTE", this.ctclYM_FROM.form.TextBox.value);
        	this.dsSelect.setColumn(0, "OUT_YMTO_IMPUTE", this.ctclYM_TO.form.TextBox.value);
        	this.dsSelect.setColumn(0, "OUT_YMFR_SUPPLY", this.ctclYM_JFROM.form.TextBox.value);
        	this.dsSelect.setColumn(0, "OUT_YMTO_SUPPLY", this.ctclYM_JTO.form.TextBox.value);
        	this.dsSelect.setColumn(0, "OUT_GB_SINGO1", this.rdoSINGO.value);

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        }

        this.fnSelectReturn = function() {

        	var strSvcId    = "r_select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "r_select=dsRSelect";
        	var outData     = "dsList3=r_select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.dsRSelect.clearData();
        	this.dsRSelect.addRow();

        	this.dsRSelect.setColumn(0, "OUT_CD_CORP"  , this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsRSelect.setColumn(0, "OUT_YM_IMPUTE", this.ctclYM_IMPUTE.form.TextBox.value);
        	this.dsRSelect.setColumn(0, "OUT_GB_SINGO1", this.rdoSINGO.value);
        	this.dsRSelect.setColumn(0, "OUT_YM_SUPPLY", this.ctclYM_SUPPY.form.TextBox.value);

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        }

        this.fnSelectSuccession = function() {

        	var strSvcId    = "s_select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "s_select=dsSSelect";
        	var outData     = "dsSResult=s_select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.dsSSelect.clearData();
        	this.dsSSelect.addRow();

        	this.dsSSelect.setColumn(0, "OUT_CD_CORP"  , this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsSSelect.setColumn(0, "OUT_YM_IMPUTE", this.ctclYM_IMPUTE.form.TextBox.value);
        	this.dsSSelect.setColumn(0, "OUT_GB_SINGO1", this.rdoSINGO.value);
        	this.dsSSelect.setColumn(0, "OUT_YM_SUPPLY", this.ctclYM_SUPPY.form.TextBox.value);

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        //기납부세액명세서탭 조회
        this.fnSelectReturnGi = function() {

        	var strSvcId    = "g_select";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "g_select1=dsRSelect g_select2=dsRSelect  g_select3=dsRSelect";
        	var outData     = "dsList5=g_select10 dsList6=g_select20 dsList7=g_select30";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.dsRSelect.clearData();
        	this.dsRSelect.addRow();

        	this.dsRSelect.setColumn(0, "OUT_CD_CORP"  , this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsRSelect.setColumn(0, "OUT_YM_IMPUTE", this.ctclYM_IMPUTE.form.TextBox.value);
        	this.dsRSelect.setColumn(0, "OUT_GB_SINGO1", this.rdoSINGO.value);
        	this.dsRSelect.setColumn(0, "OUT_YM_SUPPLY", this.ctclYM_SUPPY.form.TextBox.value);

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        }

        //전월미환급세액 조정명세서 조회
        this.fnSelectUnReturn = function() {

        	var strSvcId    = "u_select";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "u_select1=dsRSelect u_select2=dsRSelect";
        	var outData     = "dsList8=u_select10 dsList9=u_select20";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.dsRSelect.clearData();
        	this.dsRSelect.addRow();

        	this.dsRSelect.setColumn(0, "OUT_CD_CORP"  , this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsRSelect.setColumn(0, "OUT_YM_IMPUTE", this.ctclYM_IMPUTE.form.TextBox.value);
        	this.dsRSelect.setColumn(0, "OUT_GB_SINGO1", this.rdoSINGO.value);
        	this.dsRSelect.setColumn(0, "OUT_YM_SUPPLY", this.ctclYM_SUPPY.form.TextBox.value);

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
        this.fnAdd = function(obj) {
        trace(" fnAdd=>" + obj );
        var nrow = this.gfnGridAdd(this.dxGrid5, "bottom", true);
        // 	switch(this.tabData.tabindex) {
        // 		case 0:
        // 			var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        // 			break;
        // 		case 1:
        // 			var nrow = this.gfnGridAdd(this.dxGrid2); // top (default), bottom, current
        // 			break;
        // 	}
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {

        // 	switch(this.tabData.tabindex) {
        // 		case 0:
        // 			this.gfnGridDel(this.dxGrid);
        // 			break;
        // 		case 1:
        // 			this.gfnGridDel(this.dxGrid2);
        // 			break;
        // 	}
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        	if (!this.fnSaveValidate()) return false;
        	if (!this.gfnGridValidate(this.dxGrid4)) return;
        	if (!this.gfnGridValidate(this.dxGrid5)) return;
        	if (!this.gfnGridValidate(this.dxGrid6)) return;
        	if (!this.gfnGridValidate(this.dxGrid8)) return;
        	if (!this.gfnGridValidate(this.dxGrid9)) return;

        	this.dxGrid.updateToDataset();
         	this.dxGrid2.updateToDataset();
         	this.dxGrid3.updateToDataset();
         	this.dxGrid4.updateToDataset();
        	this.dxGrid5.updateToDataset();
        	this.dxGrid6.updateToDataset();
        	this.dxGrid8.updateToDataset();
        	this.dxGrid9.updateToDataset();

         	this.dsInsert.clearData();
        	this.dsRInsert.clearData();
        	this.dsRDelete.clearData();
        	this.dsSInsert.clearData();
        	this.dsGInsert.clearData();
        	this.dsGInsert1.clearData();
        	this.dsGInsert2.clearData();
        	this.dsGDelete.clearData();
        	this.dsGDelete1.clearData();
        	this.dsUInsert1.clearData();
        	this.dsUInsert2.clearData();
        	this.dsUDelete1.clearData();
        	this.dsUDelete2.clearData();

        	var nrow = -1;

        	//근로소득
        	            // 구분		1. 인원		2.총지급액     3. 소득세액    4.농어촌특별세  5. 가산세	6.환급세	   7. 납부소득세		8. 납부농특세
        	var keys = ["CD_GUBUN", "NO_INWON", "AM_TOTSUPPLY", "AM_INCOMETAX", "AM_SPECIALTAX", "AM_ADDTAX", "AM_RETURNTAX", "AM_NAPINCOMETAX", "AM_NAPSPECIALTAX"];

        	for(var i = 0 ; i < this.dsList.rowcount ; i ++) {

        		//if(this.dsList.getColumn(i, "FLAG") == "U") {

        			nrow = this.dsInsert.addRow();

        			this.dsInsert.setColumn(nrow, "OUT_CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			this.dsInsert.setColumn(nrow, "OUT_YM_IMPUTE", this.ctclYM_IMPUTE.form.TextBox.value);
        			this.dsInsert.setColumn(nrow, "YM_SUPPLY", this.ctclYM_SUPPY.form.TextBox.value);
        			this.dsInsert.setColumn(nrow, "GB_SINGO1", this.rdoSINGO.value);
        			this.dsInsert.setColumn(nrow, "GB_SINGO2", this.chkSINGO02.value ? "Y" : "N");
        			this.dsInsert.setColumn(nrow, "GB_SINGO3", this.chkSINGO03.value ? "Y" : "N");
        			this.dsInsert.setColumn(nrow, "YN_BATCH", this.rdoBATCH.value);

        			for(var j = 0 ; j < keys.length ; j++) {
        				this.dsInsert.setColumn(nrow, keys[j], this.dsList.getColumn(i, keys[j]));
        			}

        			this.dsInsert.setColumn(nrow, "AM_BEFORETAX", this.gfnIsNull(this.mskAM_BEFORETAX.value) ? 0 : Number(this.mskAM_BEFORETAX.value));
        			this.dsInsert.setColumn(nrow, "AM_REQUESTTAX", this.gfnIsNull(this.mskAM_REQUESTTAX.value) ? 0 : Number(this.mskAM_REQUESTTAX.value));
        			this.dsInsert.setColumn(nrow, "AM_JAN", this.gfnIsNull(this.mskAM_JAN.value) ? 0 : Number(this.mskAM_JAN.value));
        			this.dsInsert.setColumn(nrow, "AM_ILBANRETURN", this.gfnIsNull(this.mskAM_ILBANRETURN.value) ? 0 : Number(this.mskAM_ILBANRETURN.value));
        			this.dsInsert.setColumn(nrow, "AM_SINTAC", this.gfnIsNull(this.mskAM_SINTAC.value) ? 0 : Number(this.mskAM_SINTAC.value));
        			this.dsInsert.setColumn(nrow, "AM_GITA", this.gfnIsNull(this.mskAM_GITA.value) ? 0 : Number(this.mskAM_GITA.value));
        			this.dsInsert.setColumn(nrow, "AM_SETTLE", this.gfnIsNull(this.mskAM_SETTLE.value) ? 0 : Number(this.mskAM_SETTLE.value));
        			this.dsInsert.setColumn(nrow, "AM_RETURNTAXSUM", this.gfnIsNull(this.mskAM_RETURNTAXSUM.value) ? 0 : Number(this.mskAM_RETURNTAXSUM.value));
        			this.dsInsert.setColumn(nrow, "AM_WOLRETURNTAX", this.gfnIsNull(this.mskAM_WOLRETURNTAX.value) ? 0 : Number(this.mskAM_WOLRETURNTAX.value));
        			this.dsInsert.setColumn(nrow, "DT_ENTER", this.ccfDT_ENTER.value);

        			this.dsInsert.setColumn(nrow, "YN_SUBWRITE", this.rdoSUBWRITE.value);
        			this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        			this.dsInsert.setColumn(nrow, "AM_RESTAX", this.dsList.getColumn(i, "AM_RESTAX"));
        			this.dsInsert.setColumn(nrow, "AM_NAPRESTAX", this.dsList.getColumn(i, "AM_NAPRESTAX"));
        			this.dsInsert.setColumn(nrow, "GB_SINGO4", this.chkSINGO04.value ? "Y" : "N");
        			this.dsInsert.setColumn(nrow, "GB_SINGO5", this.chkSINGO05.value ? "Y" : "N");
        			this.dsInsert.setColumn(nrow, "YN_SAUPJA", this.rdoSAUPJA.value);
        			this.dsInsert.setColumn(nrow, "AM_RETURNAPPLY", this.mskAM_RETURNAPPLY.value);
        			this.dsInsert.setColumn(nrow, "AM_GITA2", this.mskAM_GITA2.value);

        		//}

        	}

        	//부표작성
        	for(var i = 0 ; i < this.dsList2.rowcount ; i ++) {

        		if(this.dsList2.getColumn(i, "FLAG") == "U") {

        			nrow = this.dsInsert.addRow();

        			this.dsInsert.setColumn(nrow, "OUT_CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			this.dsInsert.setColumn(nrow, "OUT_YM_IMPUTE", this.ctclYM_IMPUTE.form.TextBox.value);
        			this.dsInsert.setColumn(nrow, "YM_SUPPLY", this.ctclYM_SUPPY.form.TextBox.value);
        			this.dsInsert.setColumn(nrow, "GB_SINGO1", this.rdoSINGO.value);
        			this.dsInsert.setColumn(nrow, "GB_SINGO2", this.chkSINGO02.value ? "Y" : "N");
        			this.dsInsert.setColumn(nrow, "GB_SINGO3", this.chkSINGO03.value ? "Y" : "N");
        			this.dsInsert.setColumn(nrow, "YN_BATCH", this.rdoBATCH.value);

        			for(var j = 0 ; j < keys.length ; j++) {
        				this.dsInsert.setColumn(nrow, keys[j], this.dsList2.getColumn(i, keys[j]));
        			}

        			this.dsInsert.setColumn(nrow, "AM_BEFORETAX", this.gfnIsNull(this.mskAM_BEFORETAX.value) ? 0 : Number(this.mskAM_BEFORETAX.value));
        			this.dsInsert.setColumn(nrow, "AM_REQUESTTAX", this.gfnIsNull(this.mskAM_REQUESTTAX.value) ? 0 : Number(this.mskAM_REQUESTTAX.value));
        			this.dsInsert.setColumn(nrow, "AM_JAN", this.gfnIsNull(this.mskAM_JAN.value) ? 0 : Number(this.mskAM_JAN.value));
        			this.dsInsert.setColumn(nrow, "AM_ILBANRETURN", this.gfnIsNull(this.mskAM_ILBANRETURN.value) ? 0 : Number(this.mskAM_ILBANRETURN.value));
        			this.dsInsert.setColumn(nrow, "AM_SINTAC", this.gfnIsNull(this.mskAM_SINTAC.value) ? 0 : Number(this.mskAM_SINTAC.value));
        			this.dsInsert.setColumn(nrow, "AM_GITA", this.gfnIsNull(this.mskAM_GITA.value) ? 0 : Number(this.mskAM_GITA.value));
        			this.dsInsert.setColumn(nrow, "AM_SETTLE", this.gfnIsNull(this.mskAM_SETTLE.value) ? 0 : Number(this.mskAM_SETTLE.value));
        			this.dsInsert.setColumn(nrow, "AM_RETURNTAXSUM", this.gfnIsNull(this.mskAM_RETURNTAXSUM.value) ? 0 : Number(this.mskAM_RETURNTAXSUM.value));
        			this.dsInsert.setColumn(nrow, "AM_WOLRETURNTAX", this.gfnIsNull(this.mskAM_WOLRETURNTAX.value) ? 0 : Number(this.mskAM_WOLRETURNTAX.value));
        			this.dsInsert.setColumn(nrow, "DT_ENTER", this.ccfDT_ENTER.value);

        			this.dsInsert.setColumn(nrow, "YN_SUBWRITE", this.rdoSUBWRITE.value);
        			this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        			this.dsInsert.setColumn(nrow, "AM_RESTAX", this.dsList2.getColumn(i, "AM_RESTAX"));
        			this.dsInsert.setColumn(nrow, "AM_NAPRESTAX", "");
        			this.dsInsert.setColumn(nrow, "GB_SINGO4", this.chkSINGO04.value ? "Y" : "N");
        			this.dsInsert.setColumn(nrow, "GB_SINGO5", this.chkSINGO05.value ? "Y" : "N");
        			this.dsInsert.setColumn(nrow, "YN_SAUPJA", this.rdoSAUPJA.value);
        			this.dsInsert.setColumn(nrow, "AM_RETURNAPPLY", this.mskAM_RETURNAPPLY.value);
        			this.dsInsert.setColumn(nrow, "AM_GITA2", this.mskAM_GITA2.value);

        		}

        	}

        	//환급신청
        	keys = ["CD_GUBUN", "CD_CODE", "NM_GUBUN", "NO_INWON", "AM_TOTSUPPLY", "AM_FIXTAX", "AM_BEFTAX", "AM_BEFTAX_NOW", "AM_BEFTAX_BEF", "AM_DEDCOLLECTTAX", "AM_PARTDECOTAX","AM_RETURNTAX", "AM_RETURNAPPLY"];

        	for(var i = 0 ; i < this.dsList3.rowcount ; i ++) {

        		if(this.gfnGetFlag(this.dsList3, i) == "U" || this.gfnGetFlag(this.dsList3, i) == "I") {

        			nrow = this.dsRInsert.addRow();

        			this.dsRInsert.setColumn(nrow, "OUT_CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			this.dsRInsert.setColumn(nrow, "OUT_YM_IMPUTE", this.ctclYM_IMPUTE.form.TextBox.value);
        			this.dsRInsert.setColumn(nrow, "YM_SUPPLY", this.ctclYM_SUPPY.form.TextBox.value);
        			this.dsRInsert.setColumn(nrow, "GB_SINGO1", this.rdoSINGO.value);
        			this.dsRInsert.setColumn(nrow, "GB_SINGO2", this.chkSINGO02.value ? "Y" : "N");
        			this.dsRInsert.setColumn(nrow, "GB_SINGO3", this.chkSINGO03.value ? "Y" : "N");
        			this.dsRInsert.setColumn(nrow, "YN_BATCH", this.rdoBATCH.value);

        			for(var j = 0 ; j < keys.length ; j++) {
        				this.dsRInsert.setColumn(nrow, keys[j], this.dsList3.getColumn(i, keys[j]));
        			}

        			this.dsRInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        		}else if(this.gfnGetFlag(this.dsList3, i) == "D") {
        			nrow = this.dsRDelete.addRow();
        			this.dsRDelete.setColumn(nrow, "OUT_CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			this.dsRDelete.setColumn(nrow, "OUT_YM_IMPUTE", this.ctclYM_IMPUTE.form.TextBox.value);
        			this.dsRDelete.setColumn(nrow, "GB_SINGO1", this.rdoSINGO.value);
        			this.dsRDelete.setColumn(nrow, "CD_GUBUN", this.dsList3.getColumn(i, "CD_GUBUN"));
        			this.dsRDelete.setColumn(nrow, "OUT_YM_SUPPLY", this.ctclYM_SUPPY.form.TextBox.value);
        		}
        	}

        	//승계명세
        	keys = ["NO_SJC", "DS_SJC", "DT_SUCCESSION", "CD_SUCCESSION_BASIS", "YM_IMPUTE_SUCC", "YM_SUPPLY_SUCC", "AM_WOLRETURNTAX"];

        	for(var i = 0 ; i < this.dsList4.rowcount ; i ++) {

        		if(this.dsList4.getColumn(i, "FLAG") == "U") {

        			nrow = this.dsSInsert.addRow();

        			this.dsSInsert.setColumn(nrow, "OUT_CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			this.dsSInsert.setColumn(nrow, "OUT_YM_IMPUTE", this.ctclYM_IMPUTE.form.TextBox.value);
        			this.dsSInsert.setColumn(nrow, "GB_SINGO1", this.rdoSINGO.value);

        			for(var j = 0 ; j < keys.length ; j++) {
        				this.dsSInsert.setColumn(nrow, keys[j], this.dsList4.getColumn(i, keys[j]));
        			}

        			this.dsSInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        		}

        	}

        	//기납부세액명세서 - 원천징수현황
        	keys = [ "CD_GUBUN", "NM_GUBUN", "YM_WORK", "YM_JIGUB", "CD_CODE", "NO_INWON", "AM_TOTSUPPLY", "AM_INCOMETAX", "AM_SPECIALTAX", "AM_ADDTAX" , "NO_ID"];

        	for(var i = 0 ; i < this.dsList5.rowcount ; i ++) {
        		if(this.gfnGetFlag(this.dsList5, i) == "U" || this.gfnGetFlag(this.dsList5, i) == "I") {

        			nrow = this.dsGInsert.addRow();

        			this.dsGInsert.setColumn(nrow, "OUT_CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			this.dsGInsert.setColumn(nrow, "OUT_YM_IMPUTE", this.ctclYM_IMPUTE.form.TextBox.value);
        			this.dsGInsert.setColumn(nrow, "YM_SUPPLY", this.ctclYM_SUPPY.form.TextBox.value);
        			this.dsGInsert.setColumn(nrow, "GB_SINGO1", this.rdoSINGO.value);
        			this.dsGInsert.setColumn(nrow, "GB_SINGO2", this.chkSINGO02.value ? "Y" : "N");
        			this.dsGInsert.setColumn(nrow, "GB_SINGO3", this.chkSINGO03.value ? "Y" : "N");

        			for(var j = 0 ; j < keys.length ; j++) {

        				this.dsGInsert.setColumn(nrow, keys[j], this.dsList5.getColumn(i, keys[j]));
        			}

        			this.dsGInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        		} else if(this.gfnGetFlag(this.dsList5, i)=="D") {
        			nrow = this.dsGDelete.addRow();
        			this.dsGDelete.setColumn(nrow, "NO_ID",  this.dsList5.getColumn(i,"NO_ID"));
        		}
        	}

        	//기납부세액명세서 - 기납부세액
        	keys = ["CD_GUBUN", "NM_GUBUN", "ID_SABUN", "DS_NAME", "ID_RESIDENT", "TY_GUBUN", "CD_PREPAY", "DS_PREPAY", "AM_INCOMETAX", "AM_SPECIALTAX", "NO_ID"];

        	for(var i = 0 ; i < this.dsList6.rowcount ; i ++) {

        		if(this.gfnGetFlag(this.dsList6, i) == "U" || this.gfnGetFlag(this.dsList6, i) == "I") {

        			nrow = this.dsGInsert1.addRow();

        			this.dsGInsert1.setColumn(nrow, "OUT_CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			this.dsGInsert1.setColumn(nrow, "OUT_YM_IMPUTE", this.ctclYM_IMPUTE.form.TextBox.value);
        			this.dsGInsert1.setColumn(nrow, "YM_SUPPLY", this.ctclYM_SUPPY.form.TextBox.value);
        			this.dsGInsert1.setColumn(nrow, "GB_SINGO1", this.rdoSINGO.value);
        			this.dsGInsert1.setColumn(nrow, "GB_SINGO2", this.chkSINGO02.value ? "Y" : "N");
        			this.dsGInsert1.setColumn(nrow, "GB_SINGO3", this.chkSINGO03.value ? "Y" : "N");

        			for(var j = 0 ; j < keys.length ; j++) {
        				this.dsGInsert1.setColumn(nrow, keys[j], this.dsList6.getColumn(i, keys[j]));
        			}

        			this.dsGInsert1.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        		} else if(this.gfnGetFlag(this.dsList6, i) =="D") {
        			nrow = this.dsGDelete1.addRow();
        			this.dsGDelete1.setColumn(nrow, "NO_ID",  this.dsList6.getColumn(i,"NO_ID"));
        		}
        	}
        	//기납부세액명세서 - 조정 차이
        	if(this.setJojungForm = "U") {

        		  trace(" 기납부 this.gfnGetFlag(this.dsList7, i)=>" +this.dsList7.getColumn(0, "AM_INCOMETAX") );
        			nrow = this.dsGInsert2.addRow();

        			this.dsGInsert2.setColumn(nrow, "OUT_CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			this.dsGInsert2.setColumn(nrow, "OUT_YM_IMPUTE", this.ctclYM_IMPUTE.form.TextBox.value);
        			this.dsGInsert2.setColumn(nrow, "YM_SUPPLY", this.ctclYM_SUPPY.form.TextBox.value);
        			this.dsGInsert2.setColumn(nrow, "GB_SINGO1", this.rdoSINGO.value);
        			this.dsGInsert2.setColumn(nrow, "GB_SINGO2", this.chkSINGO02.value ? "Y" : "N");
        			this.dsGInsert2.setColumn(nrow, "GB_SINGO3", this.chkSINGO03.value ? "Y" : "N");
        			this.dsGInsert2.setColumn(nrow, "AM_INCOMETAX",  this.dsList7.getColumn(0, "AM_INCOMETAX"));
        			this.dsGInsert2.setColumn(nrow, "AM_INCOMETAX_GI", this.dsList7.getColumn(0, "AM_INCOMETAX_GI"));
        			this.dsGInsert2.setColumn(nrow, "AM_SPECIALTAX", this.dsList7.getColumn(0, "AM_SPECIALTAX"));
        			this.dsGInsert2.setColumn(nrow, "AM_SPECIALTAX_GI", this.dsList7.getColumn(0, "AM_SPECIALTAX_GI"));
        			this.dsGInsert2.setColumn(nrow, "AM_SPECIALTAX_GI", this.dsList7.getColumn(0, "AM_SPECIALTAX_GI"));
        			this.dsGInsert2.setColumn(nrow, "AM_INCOMETAX_CHA", this.dsList7.getColumn(0, "AM_INCOMETAX_CHA"));
        			this.dsGInsert2.setColumn(nrow, "AM_SPECIALTAX_CHA", this.dsList7.getColumn(0, "AM_SPECIALTAX_CHA"));
        			this.dsGInsert2.setColumn(nrow, "YN_REASON1", this.chkReson1.value ? "Y" : "N");
        			this.dsGInsert2.setColumn(nrow, "YN_REASON2", this.chkReson2.value ? "Y" : "N");
        			this.dsGInsert2.setColumn(nrow, "YN_REASON3", this.chkReson3.value ? "Y" : "N");
        			this.dsGInsert2.setColumn(nrow, "YN_REASON4", this.chkReson4.value ? "Y" : "N");
        			this.dsGInsert2.setColumn(nrow, "YN_REASON5", this.chkReson5.value ? "Y" : "N");
        			this.dsGInsert2.setColumn(nrow, "DS_REASON", this.txtDS_REASON.value);
        			this.dsGInsert2.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        	}

        	//전월미환급세액 조정명세서_전월미환급세액 명세
        	for(var i = 0 ; i < this.dsList8.rowcount ; i ++) {

        		if(this.gfnGetFlag(this.dsList8, i) == "U" || this.gfnGetFlag(this.dsList8, i) == "I") {

        			nrow = this.dsUInsert1.addRow();

        			this.dsUInsert1.setColumn(nrow, "OUT_CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			this.dsUInsert1.setColumn(nrow, "OUT_YM_IMPUTE", this.ctclYM_IMPUTE.form.TextBox.value);
        			this.dsUInsert1.setColumn(nrow, "YM_SUPPLY", this.ctclYM_SUPPY.form.TextBox.value);
        			this.dsUInsert1.setColumn(nrow, "GB_SINGO1", this.rdoSINGO.value);
        			this.dsUInsert1.setColumn(nrow, "GB_SINGO2", this.chkSINGO02.value ? "Y" : "N");
        			this.dsUInsert1.setColumn(nrow, "GB_SINGO3", this.chkSINGO03.value ? "Y" : "N");
        			this.dsUInsert1.setColumn(nrow, "CD_GUBUN", this.dsList8.getColumn(i, "CD_GUBUN"));
        			this.dsUInsert1.setColumn(nrow, "YM_WORK", this.dsList8.getColumn(i, "YM_WORK"));
        			this.dsUInsert1.setColumn(nrow, "YM_JIGUB", this.dsList8.getColumn(i, "YM_JIGUB"));
        			this.dsUInsert1.setColumn(nrow, "TY_GUBUN", this.dsList8.getColumn(i, "TY_GUBUN"));
        			this.dsUInsert1.setColumn(nrow, "AM_RETURNTAX", this.dsList8.getColumn(i, "AM_RETURNTAX"));
        			this.dsUInsert1.setColumn(nrow, "AM_NAPBUTAX", this.dsList8.getColumn(i, "AM_NAPBUTAX"));
        			this.dsUInsert1.setColumn(nrow, "AM_BEFORETAX", this.dsList8.getColumn(i, "AM_BEFORETAX"));
        			this.dsUInsert1.setColumn(nrow, "NO_ID", this.dsList8.getColumn(i, "NO_ID"));
        			this.dsUInsert1.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        		} else if(this.gfnGetFlag(this.dsList8, i) =="D") {
        			nrow = this.dsUDelete1.addRow();
        			this.dsUDelete1.setColumn(nrow, "NO_ID",  this.dsList8.getColumn(i,"NO_ID"));
        		}
        	}
        	//전월미환급세액 조정명세서_조정현황
        	for(var i = 0 ; i < this.dsList9.rowcount ; i ++) {

        		if(this.gfnGetFlag(this.dsList9, i) == "U" || this.gfnGetFlag(this.dsList9, i) == "I") {

        			nrow = this.dsUInsert2.addRow();

        			this.dsUInsert2.setColumn(nrow, "OUT_CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			this.dsUInsert2.setColumn(nrow, "OUT_YM_IMPUTE", this.ctclYM_IMPUTE.form.TextBox.value);
        			this.dsUInsert2.setColumn(nrow, "YM_SUPPLY", this.ctclYM_SUPPY.form.TextBox.value);
        			this.dsUInsert2.setColumn(nrow, "GB_SINGO1", this.rdoSINGO.value);
        			this.dsUInsert2.setColumn(nrow, "GB_SINGO2", this.chkSINGO02.value ? "Y" : "N");
        			this.dsUInsert2.setColumn(nrow, "GB_SINGO3", this.chkSINGO03.value ? "Y" : "N");
        			this.dsUInsert2.setColumn(nrow, "YM_WORK", this.dsList9.getColumn(i, "YM_WORK"));
        			this.dsUInsert2.setColumn(nrow, "YM_JIGUB", this.dsList9.getColumn(i, "YM_JIGUB"));
        			this.dsUInsert2.setColumn(nrow, "NO_SEQ", this.dsList9.getColumn(i, "NO_SEQ"));
        			this.dsUInsert2.setColumn(nrow, "AM_UNRETURN", this.dsList9.getColumn(i, "AM_UNRETURN"));
        			this.dsUInsert2.setColumn(nrow, "AM_GIRETURN", this.dsList9.getColumn(i, "AM_GIRETURN"));
        			this.dsUInsert2.setColumn(nrow, "AM_CHARETURN", this.dsList9.getColumn(i, "AM_CHARETURN"));
        			this.dsUInsert2.setColumn(nrow, "AM_DANGRETURN", this.dsList9.getColumn(i, "AM_DANGRETURN"));
        			this.dsUInsert2.setColumn(nrow, "AM_JOJUNGRETURN", this.dsList9.getColumn(i, "AM_JOJUNGRETURN"));
        			this.dsUInsert2.setColumn(nrow, "AM_DANGJOJUNGRETURN", this.dsList9.getColumn(i, "AM_DANGJOJUNGRETURN"));
        			this.dsUInsert2.setColumn(nrow, "AM_RETURNTAX", this.dsList9.getColumn(i, "AM_RETURNTAX"));
        			this.dsUInsert2.setColumn(nrow, "NO_ID", this.dsList9.getColumn(i, "NO_ID"));
        			this.dsUInsert2.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        		} else if(this.gfnGetFlag(this.dsList9, i) =="D") {
        			nrow = this.dsUDelete2.addRow();
        			this.dsUDelete2.setColumn(nrow, "NO_ID",  this.dsList9.getColumn(i,"NO_ID"));
        		}
        	}

        	if(this.dsInsert.rowcount == 0 && this.dsRInsert.rowcount == 0 && this.dsSInsert.rowcount == 0 && this.dsRDelete.rowcount == 0 &&
        	   this.dsGInsert.rowcount == 0 && this.dsGInsert1.rowcount == 0 && this.dsGInsert1.rowcount == 0 &&
        	   this.dsGDelete.rowcount == 0 && this.dsGDelete1.rowcount == 0 &&
        	   this.dsUInsert1.rowcount == 0 && this.dsUDelete1.rowcount == 0 &&
        	   this.dsUInsert2.rowcount == 0 && this.dsUDelete2.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	//var inData      = "g_insert1=dsGInsert g_insert2=dsGInsert1 g_insert3=dsGInsert2 g_delete1=dsGDelete g_delete2=dsGDelete1";
        	var inData      = "insert=dsInsert r_insert=dsRInsert s_insert=dsSInsert g_insert1=dsGInsert g_insert2=dsGInsert1 g_insert3=dsGInsert2 g_delete1=dsGDelete g_delete2=dsGDelete1 u_insert1=dsUInsert1 u_insert2=dsUInsert2 u_delete1=dsUDelete1 u_delete2=dsUDelete2 r_delete=dsRDelete";
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


        this.divData_tabData_tap5_btnAdd_onclick = function(obj,e)
        {
        	var nrow = this.gfnGridAdd(this.dxGrid5, "bottom", true);
        };

        this.divData_tabData_tap5_btnRemove_onclick = function(obj,e)
        {
        	this.gfnGridDel(this.dxGrid5);
        	this.fnSetJojung();
        };


        this.divData_tabData_tap5_btnGiAdd_onclick = function(obj,e)
        {
        	var nrow = this.gfnGridAdd(this.dxGrid6, "bottom", true);
        };

        this.divData_tabData_tap5_btnGiRemove_onclick = function(obj,e)
        {
        	this.gfnGridDel(this.dxGrid6);
        	this.fnSetJojung();
        };

        this.divData_tabData_tab3_btnAdd_onclick = function(obj,e)
        {
        	var nrow = this.gfnGridAdd(this.dxGrid3, "bottom", true);
        };

        this.divData_tabData_tab3_btnRemove_onclick = function(obj,e)
        {
        	this.gfnGridDel(this.dxGrid3);
        };

        this.divData_tabData_tab6_btnUnAdd1_onclick = function(obj,e)
        {
        	var nrow = this.gfnGridAdd(this.dxGrid8, "bottom", true);
        };

        this.divData_tabData_tab6_btnUnRemove1_onclick = function(obj,e)
        {
        	this.gfnGridDel(this.dxGrid8);
        };

        this.divData_tabData_tab6_btnUnAdd2_onclick = function(obj,e)
        {
        	var nrow = this.gfnGridAdd(this.dxGrid9, "bottom", true);
        	trace(" divData_tabData_tab6_btnUnAdd2_onclick nrow=>" + nrow);

        	if (nrow != 0)
        	{
        		this.dsList9.setColumn(nrow, "AM_UNRETURN" , this.dsList9.getColumn(nrow-1, "AM_RETURNTAX"));
        	}
        };

        this.divData_tabData_tab6_btnUnRemove2_onclick = function(obj,e)
        {
        	this.gfnGridDel(this.dxGrid9);
        };


        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        // 	switch(this.tabData.tabindex) {
        // 		case 0:
        // 			this.gfnExcelExport(this.dxGrid);
        // 			break;
        // 		case 1:
        // 			this.gfnExcelExport(this.dxGrid2);
        // 			break;
        // 	}
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

        	if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.gfnAlert("법인코드를 입력하세요!");
        		return false;
        	}

        // 	if(this.gfnIsNull(this.ctclYM_FROM.form.TextBox.value)) {
        // 		this.gfnAlert("귀속기간을 입력하세요!");
        // 		return false;
        // 	}
        //
        // 	if(this.gfnIsNull(this.ctclYM_TO.form.TextBox.value)) {
        // 		this.gfnAlert("귀속기간을 입력하세요!");
        // 		return false;
        // 	}

        	if(this.gfnIsNull(this.ctclYM_JFROM.form.TextBox.value)) {
        		this.gfnAlert("지급기간을 입력하세요!");
        		return false;
        	}

        	if(this.gfnIsNull(this.ctclYM_JTO.form.TextBox.value)) {
        		this.gfnAlert("지급기간을 입력하세요!");
        		return false;
        	}

        	return true;
        };

        this.fnSaveValidate = function() {

        	//근로소득
        // 	for(var i = 0 ; i < this.dsList.rowcount ; i++) {
        // 		for(var j = 0 ; j < this.dsList.getColCount() ; j++) {
        // 			if(this.dxGridValidate(i, this.dsList.getColID(j)) == false) {
        // 				return false;
        // 			}
        // 		}
        // 	}
        //
        // 	//부표작성
        // 	for(var i = 0 ; i < this.dsList2.rowcount ; i++) {
        // 		for(var j = 0 ; j < this.dsList2.getColCount() ; j++) {
        // 			if(this.dxGrid2Validate(i, this.dsList2.getColID(j)) == false) {
        // 				return false;
        // 			}
        // 		}
        // 	}
        //
        // 	//환급신청
        // 	for(var i = 0 ; i < this.dsList3.rowcount ; i++) {
        // 		for(var j = 0 ; j < this.dsList3.getColCount() ; j++) {
        // 			if(this.dxGrid3Validate(i, this.dsList3.getColID(j)) == false) {
        // 				return false;
        // 			}
        // 		}
        // 	}

        	//승계명세
        // 	for(var i = 0 ; i < this.dsList4.rowcount ; i++) {
        // 		for(var j = 0 ; j < this.dsList4.getColCount() ; j++) {
        // 			if(this.dxGrid4Validate(i, this.dsList4.getColID(j)) == false) {
        // 				return false;
        // 			}
        // 		}
        // 	}

        	//기납부세액 명세서
        	for(var i = 0 ; i < this.dsList6.rowcount ; i++) {
        	  if(this.dsList6.getColumn(i, this.ucFlag) == "U" || this.dsList6.getColumn(i, this.ucFlag) == "I"){
        		for(var j = 0 ; j < this.dsList6.getColCount() ; j++) {
        			if(this.dxGrid6Validate(i, this.dsList6.getColID(j)) == false) {
        				return false;
        			}
        		}
        	  }
        	}


        	var totalA04 = nexacro.toNumber(this.dsList.getColumn(this.ucA04, "AM_INCOMETAX"),0) + nexacro.toNumber(this.dsList.getColumn(this.ucA04, "AM_SPECIALTAX"),0) + nexacro.toNumber(this.dsList.getColumn(this.ucA04, "AM_ADDTAX"),0);
        	var totalA05 = nexacro.toNumber(this.dsList.getColumn(this.ucA05, "AM_INCOMETAX"),0) + nexacro.toNumber(this.dsList.getColumn(this.ucA05, "AM_SPECIALTAX"),0) + nexacro.toNumber(this.dsList.getColumn(this.ucA05, "AM_ADDTAX"),0);
        	var totalA06 = nexacro.toNumber(this.dsList.getColumn(this.ucA06, "AM_INCOMETAX"),0) + nexacro.toNumber(this.dsList.getColumn(this.ucA06, "AM_SPECIALTAX"),0) + nexacro.toNumber(this.dsList.getColumn(this.ucA06, "AM_ADDTAX"),0);

        	trace("totalA04 :: "+totalA04);
        	trace("totalA05 :: "+totalA05);
        	trace("totalA06 :: "+totalA06);

        	if(totalA04 != (totalA05 + totalA06)) {
        		this.gfnAlert("A04의 징수세액란 입력값은 A05(징수세액) + A06(징수세액) 계산값과 동일하게 들어가야 합니다.");
        		return false;
        	}

        	var strMsg = "";
        	var ret = true;

        	if(this.rdoSINGO.index == -1) {
        		strMsg += "신고구분을 선택해 주십시오.\n";
        		ret = false;
        	}

        	if(this.rdoBATCH.index == -1) {
        		strMsg += "일괄납부여부를 선택해 주십시오.\n";
        		ret = false;
        	}

        	if(this.rdoSAUPJA.index == -1) {
        		strMsg += "사업자단위과세여부를 선택해 주십시오.\n";
        		ret = false;
        	}

        	if(this.rdoSUBWRITE.index == -1) {
        		strMsg += "부표작성여부를 선택해 주십시오.\n";
        		ret = false;
        	}

        	if(this.gfnIsNull(this.ctclYM_SUPPY.form.TextBox.value)) {
        		strMsg += "지급연월을 입력하여 주십시오.\n";
        		ret = false;
        	}

        	if(this.gfnIsNull(this.ccfDT_ENTER.value)) {
        		strMsg += "제출일자를 입력하여 주십시오.\n";
        		ret = false;
        	}

        	if(ret == false) {
        		this.gfnAlert(strMsg);
        		return false;
        	}

        	return true;

        }

        this.dxGridValidate = function(row, colId) {

        	this.dxGrid.updateToDataset();

        	if(this.dsList.rowcount < row ) return true;

        	if(colId == "NO_INWON" && row == this.ucA05) {
        		var a = this.gfnIsNull(this.dsList.getColumn(row, colId)) ? 0 : Number(this.dsList.getColumn(row, colId));
        		var b = this.gfnIsNull(this.dsList.getColumn(row, colId)) ? 0 : Number(this.dsList.getColumn(row - 1, colId));

        		if(a > b) {
        			this.gfnAlert("A05의 인원수는 A04(합계)의 인원수보다 같거나 작아야 합니다.");
        			this.dsList.setColumn(row, colId, "0");
        			return false;
        		}
        	}

        	if(colId == "NO_INWON" || colId == "AM_TOTSUPPLY" || colId == "AM_INCOMETAX" || colId == "AM_RESTAX" || colId == "AM_SPECIALTAX" ||
        	   colId == "AM_ADDTAX" || colId == "AM_NAPINCOMETAX" || colId == "AM_NAPSPECIALTAX" )
        	{
        		this.sbAmSumCalcA(colId);
        	}

        	return true;
        }

        this.dxGrid2Validate = function(row, colId) {

        	this.dxGrid2.updateToDataset();

        	//if(this.dsList2.rowcount < row || this.gfnIsNull(this.dsList2.getColumn(row, colId))) return true;
        	if(this.dsList2.rowcount < row) return true;

        	if(colId == "NO_INWON" || colId == "AM_TOTSUPPLY" || colId == "AM_INCOMETAX" || colId == "AM_RESTAX" || colId == "AM_SPECIALTAX" ||
        	   colId == "AM_ADDTAX" || colId == "AM_RETURNTAX" || colId == "AM_NAPINCOMETAX" || colId == "AM_NAPSPECIALTAX" )
        	{
        // 		if(this.dsList2.getColumn(row, colId).length >= 15) {
        // 			this.dsList2.setColumn(row, colId, "0");
        // 			return false;
        // 		}

        		this.sbAmSumCalcB(row, colId);

        // 		if(nexacro.toNumber(this.dsList2.getColumn(row, colId),0) != 0) {
        //
        // 		} else {
        // 			this.dsList2.setColumn(row, colId, "0");
        // 		}
        	}

        	return true;
        }

        this.dxGrid3Validate = function(row, colId) {

        	this.dxGrid3.updateToDataset();

        	if(this.dsList3.rowcount < row || this.gfnIsNull(this.dsList3.getColumn(row, colId))) return true;

        	if(this.dsList3.getColumn(row, colId).length >= 15) {
        		this.dsList3.setColumn(row, colId, "0");
        		return false;
        	}

        	this.sbAmSumCalcReturn(row, colId);

        	return true;
        }

        this.dxGrid4Validate = function(row, colId) {

        	this.dxGrid4.updateToDataset();

        	if(this.dsList4.rowcount < row || this.gfnIsNull(this.dsList4.getColumn(row, colId))) return true;

        	if(colId == "AM_WOLRETURNTAX") {
        		if(this.dsList4.getColumn(row, colId).length >= 15) {
        			this.dsList4.setColumn(row, colId, "0");
        			return false;
        		}
        	}

        	return true;
        }


        this.dxGrid5Validate = function(row, colId) {

        	this.dxGrid5.updateToDataset();

        	if(this.dsList5.rowcount < row || this.gfnIsNull(this.dsList5.getColumn(row, colId))) return true;

        	if(this.dsList5.getColumn(row, colId).length >= 15) {
        		this.dsList5.setColumn(row, colId, "0");
        		return false;
        	}

        	if(Number(this.dsList5.getColumn(row, colId)) != 0) {
        		//this.sbAmSumCalcReturn(colId);
        	} else {
        		this.dsList5.setColumn(row, colId, "0");
        	}

        	return true;
        }


        this.dxGrid6Validate = function(row, colId) {

        	this.dxGrid6.updateToDataset();

        	if(this.dsList6.rowcount < row || this.gfnIsNull(this.dsList6.getColumn(row, colId))) return true;

        	if (colId == "CD_PREPAY")
        	{
        	    trace(" CD_PREPAY=>" + this.dsList6.getColumn(row, colId));
        		if (!this.gfnIsBzIdNo(this.dsList6.getColumn(row, colId)))
        		{
        			this.gfnAlert((row + 1) +"행: 사업자등록번호 형식이 맞지 않습니다. (" + this.dsList6.getColumn(row, colId)+")");
        			return false;
        		}
        	} else if (colId =="DS_PREPAY") {
        	    trace(" DS_PREPAY=>" + this.dsList6.getColumn(row, colId));
        		if (!this.gfnIsKoreanChar(nexacro.replaceAll(nexacro.replaceAll(nexacro.replaceAll(this.dsList6.getColumn(row, colId), '(', ''), ' ', ''), ')', '')))
        		{
        			this.gfnAlert((row + 1) +"행: 근무지명은 한글로 입력해야 합니다.( "+this.dsList6.getColumn(row, colId)+")" );
        			return false;
        		}
        	}

        	if(Number(this.dsList6.getColumn(row, colId)) != 0) {

        	} else {
        		this.dsList6.setColumn(row, colId, "0");
        	}

        	return true;
        }

        this.dxGrid8Validate = function(row, colId) {

        	this.dxGrid8.updateToDataset();

        	if(this.dsList8.rowcount < row || this.gfnIsNull(this.dsList8.getColumn(row, colId))) return true;

        	if(Number(this.dsList8.getColumn(row, colId)) != 0) {

        	} else {
        		this.dsList8.setColumn(row, colId, "0");
        	}

        	return true;
        }


        this.dxGri98Validate = function(row, colId) {

        	this.dxGrid9.updateToDataset();

        	if(this.dsList9.rowcount < row || this.gfnIsNull(this.dsList9.getColumn(row, colId))) return true;

        	if(Number(this.dsList9.getColumn(row, colId)) != 0) {

        	} else {
        		this.dsList9.setColumn(row, colId, "0");
        	}

        	return true;
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {

        	if(svcID == "select") {
        		this.makeData();
        	}

        	if(svcID == "s_select") {
        		this.makeSuccessionData();
        	}

        	if(svcID == "r_select") {
        		//this.makeReturnData();
        		this.gfnGridAfterSelect(this.dxGrid3);
        	}

        	if(svcID == "e_select") {
        		this.makeFnData();

        		this.gfnSetFormStatus(this, "I");

        		//trace("saveXML :: "+this.dsList.saveXML());
        	}
        	if(svcID == "g_select") {
        		this.gfnGridAfterSelect(this.dxGrid5);
        		this.gfnGridAfterSelect(this.dxGrid6);
        		this.makeGiData();
        		this.setJojungForm = "";

        		//trace("saveXML :: "+this.dsList.saveXML());
        	}

        	if(svcID == "u_select") {
        		this.gfnGridAfterSelect(this.dxGrid8);
        		this.gfnGridAfterSelect(this.dxGrid9);

        		//trace("saveXML :: "+this.dsList.saveXML());
        	}

        	if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}

        	if(svcID == "ESingo") {
        		if(errorCode == 0) {
        			this.fnFileDownload();
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        // 데이터 불러오기 collback
        this.fnDataCallBack = function(strId, val) {

        	if(val == false) return;

        	this.clearDivData();

        	this.dsSelect2.clearData();
        	this.dsSelect2.addRow();

        	this.dsSelect2.setColumn(0, "OUT_CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
         	this.dsSelect2.setColumn(0, "OUT_YMFR_IMPUTE", this.ctclYM_FROM.form.TextBox.value);
         	this.dsSelect2.setColumn(0, "OUT_YMTO_IMPUTE", this.ctclYM_TO.form.TextBox.value);
        	this.dsSelect2.setColumn(0, "OUT_YMFR_SUPPLY", this.ctclYM_JFROM.form.TextBox.value);
        	this.dsSelect2.setColumn(0, "OUT_YMTO_SUPPLY", this.ctclYM_JTO.form.TextBox.value);
        	this.dsSelect2.setColumn(0, "OUT_GB_SINGO1", this.rdoSINGO.value);

        	var strSvcId    = "e_select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "e_select=dsSelect2";
        	var outData     = "dsResult=e_select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "OUT_CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
         	this.dsSelect.setColumn(0, "OUT_YMFR_IMPUTE", this.ctclYM_FROM.form.TextBox.value);
         	this.dsSelect.setColumn(0, "OUT_YMTO_IMPUTE", this.ctclYM_TO.form.TextBox.value);
        	this.dsSelect.setColumn(0, "OUT_YMFR_SUPPLY", this.ctclYM_JFROM.form.TextBox.value);
        	this.dsSelect.setColumn(0, "OUT_YMTO_SUPPLY", this.ctclYM_JTO.form.TextBox.value);
        	this.dsSelect.setColumn(0, "OUT_GB_SINGO1", this.rdoSINGO.value);

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}

        	if(id == "ccfCD_DEPT_SELFACNT") {
        // 		if (this.gfnIsNull(cdCorp)) {
        // 			this.gfnAlert("법인코드를 먼저 선택하세요.");
        // 			this.ccfCD_CORP.form.CDTextBox.setFocus();
        // 			return false;
        // 		}
        //
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        }

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID

         	if (id == "DHX_CFIDSABUN2") {
         		dsUserParam.setColumn(nrow, "CD_CORP",  this.ccfCD_CORP.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "YN_OFFICER",  "");
         	}

        	return true;
        };

        this.dsSearch_onvaluechanged = function(obj,e) {

        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.clearDivData();

        		this.dsSearch.set_enableevent(false);

        		switch(e.columnid) {
        			case "YM_FROM" :
        				this.ctclYM_TO.form.TextBox.set_value(e.newvalue);
        				this.ctclYM_IMPUTE.form.TextBox.set_value(e.newvalue);
        				this.ctclYM_JFROM.form.TextBox.set_value(e.newvalue);
        				this.ctclYM_JTO.form.TextBox.set_value(this.ctclYM_TO.form.TextBox.value);
        				this.ctclYM_SUPPY.form.TextBox.set_value(this.ctclYM_JTO.form.TextBox.value);
        				break;
        			case "YM_TO" :
        				this.ctclYM_JTO.form.TextBox.set_value(e.newvalue);
        				this.ctclYM_SUPPY.form.TextBox.set_value(this.ctclYM_JTO.form.TextBox.value);
        				break;
        			case "YM_JFROM" :
        				this.ctclYM_JTO.form.TextBox.set_value(e.newvalue);
        				this.ctclYM_SUPPY.form.TextBox.set_value(this.ctclYM_JTO.form.TextBox.value);
        				//this.ctclYM_IMPUTE.form.TextBox.set_value(e.newvalue);
        				break;
        			case "YM_JTO" :
        				//this.ctclYM_IMPUTE.form.TextBox.set_value(e.newvalue);
        				this.ctclYM_SUPPY.form.TextBox.set_value(e.newvalue);
        				break;
        		}

        		this.dsSearch.set_enableevent(true);
        	}
        }


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         this.fnGrid_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);

        	trace("fnGrid_EnterCell colnm=>" + colnm + ", row = " + row);
        	if((colnm == "AM_UNRETURN" || colnm == "AM_GIRETURN" ) && (row == 0)) {
        		return false;
        	} else if (colnm == "AM_CHARETURN" || colnm == "AM_JOJUNGRETURN" || colnm == "AM_RETURNTAX" ) {
        		return false;
        	}
        	return true;
        }

        this.clearDivData = function() {

        	this.dsList.clearData();
        	this.setDxGrid();

        	this.dsList2.clearData();
        	this.setDxGrid2();

        	this.dsList3.clearData();
        	//this.setDxGrid3();

        	this.dsList4.clearData();
        	this.setDxGrid4();
        	this.dsList5.clearData();
        	this.dsList6.clearData();
        	this.dsList7.clearData();
        	this.dsList8.clearData();
        	this.dsList9.clearData();
        // 	this.setDxGrid8();
        // 	this.setDxGrid9();

        	this.mskAM_BEFORETAX.set_value("");
        	this.mskAM_REQUESTTAX.set_value("");
        	this.mskAM_JAN.set_value("");
        	this.mskAM_ILBANRETURN.set_value("");
        	this.mskAM_SINTAC.set_value("");
        	this.mskAM_GITA.set_value("");
        	this.mskAM_GITA2.set_value("");
        	this.mskAM_SETTLE.set_value("");
        	this.mskAM_RETURNTAXSUM.set_value("");
        	this.mskAM_WOLRETURNTAX.set_value("");
        	this.mskAM_RETURNAPPLY.set_value("");

        	this.mskAM_INCOMETAX.set_value("");
        	this.mskAM_INCOMETAX_GI.set_value("");
        	this.mskAM_INCOMETAX_DIFF.set_value("");
        	this.mskAM_SPECIALTAX.set_value("");
        	this.mskAM_SPECIALTAX_GI.set_value("");
        	this.mskAM_SPECIALTAX_DIFF.set_value("");
        	this.txtDS_REASON.set_value("");
        	this.chkReson1.set_value(false);
        	this.chkReson2.set_value(false);
        	this.chkReson3.set_value(false);
        	this.chkReson4.set_value(false);
        	this.chkReson5.set_value(false);

            this.setJojungForm =  ""
        }

        //sbAM_SumCalcA
        this.sbAmSumCalcA = function(amIncomeTax) {
           // trace("amIncomeTax =>" + amIncomeTax + ":" + this.getDataFlag);
        	this.dsList.set_enableevent(false);

        	var tempValue = 0;

        	if((amIncomeTax == "AM_NAPRESTAX" || amIncomeTax == "AM_NAPINCOMETAX" || amIncomeTax == "AM_NAPSPECIALTAX") == false) {

        		//근로소득-가감계
        		if(amIncomeTax == "AM_INCOMETAX" || amIncomeTax == "AM_SPECIALTAX" || amIncomeTax == "AM_ADDTAX" ) {

        			//연말정산 납부 = 연말정산 합계 - 연말정산 분납
        			tempValue = 0;
        			tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA04, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA04, amIncomeTax));
        			tempValue -= this.gfnIsNull(this.dsList.getColumn(this.ucA05, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA05, amIncomeTax));

        			this.dsList.setColumn(this.ucA06, amIncomeTax, tempValue);

        			tempValue = 0;
        			tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA01, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA01, amIncomeTax));
        			tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA02, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA02, amIncomeTax));
        			tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA03, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA03, amIncomeTax));
        			tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA04, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA04, amIncomeTax));
        			tempValue -= this.gfnIsNull(this.dsList.getColumn(this.ucA05, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA05, amIncomeTax));

        			this.dsList.setColumn(this.ucA10, amIncomeTax, tempValue);

        			tempValue = 0;
        			tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA04, "AM_SPECIALTAX")) ? 0 : Number(this.dsList.getColumn(this.ucA04, "AM_SPECIALTAX"));
        			tempValue -= this.gfnIsNull(this.dsList.getColumn(this.ucA05, "AM_SPECIALTAX")) ? 0 : Number(this.dsList.getColumn(this.ucA05, "AM_SPECIALTAX"));

        			this.dsList.setColumn(this.ucA06, "AM_SPECIALTAX", tempValue);

        			tempValue = 0;
        			tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA04, "AM_ADDTAX")) ? 0 : Number(this.dsList.getColumn(this.ucA04, "AM_ADDTAX"));
        			tempValue -= this.gfnIsNull(this.dsList.getColumn(this.ucA05, "AM_ADDTAX")) ? 0 : Number(this.dsList.getColumn(this.ucA05, "AM_ADDTAX"));

        			this.dsList.setColumn(this.ucA06, "AM_ADDTAX", tempValue);

        		} else if (amIncomeTax == "NO_INWON"){

        			tempValue = 0;
        			tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA01, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA01, amIncomeTax));
        			tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA02, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA02, amIncomeTax));
        			tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA03, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA03, amIncomeTax));
        			tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA04, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA04, amIncomeTax));
        			this.dsList.setColumn(this.ucA10, amIncomeTax,  tempValue);
        			trace(" NO_INWON  this.ucA10 =>" + tempValue);

        		} else {

        			tempValue = 0;
        			tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA01, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA01, amIncomeTax));
        			tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA02, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA02, amIncomeTax));
        			tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA03, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA03, amIncomeTax));
        			tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA04, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA04, amIncomeTax));
        			tempValue -= this.gfnIsNull(this.dsList.getColumn(this.ucA05, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA05, amIncomeTax));

        // 			if (tempValue > this.dsList.getColumn(this.ucA10, "AM_INCOMETAX"))
        // 			{
        // 				this.dsList.setColumn(this.ucA10, amIncomeTax,  this.dsList.getColumn(this.ucA10, "AM_INCOMETAX"));
        // 			}
        // 			else
        // 			{
        				this.dsList.setColumn(this.ucA10, amIncomeTax,  tempValue);
        			//}


        			trace(amIncomeTax + " else this.ucA10 =>" + tempValue);
        		}

        		//퇴직소득-가감계
        		tempValue = 0;
        		tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA21, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA21, amIncomeTax));
        		tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA22, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA22, amIncomeTax));

        		this.dsList.setColumn(this.ucA20, amIncomeTax, tempValue);

        		//사업소득-가감계
        		tempValue = 0;
        		tempValue = (this.gfnIsNull(this.dsList.getColumn(this.ucA25, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA25, amIncomeTax))) +
        					(this.gfnIsNull(this.dsList.getColumn(this.ucA26, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA26, amIncomeTax)));

        		this.dsList.setColumn(this.ucA30, amIncomeTax, tempValue);

        		//기타소득-가감계
        		tempValue = 0;
        		tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA41, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA41, amIncomeTax));
        		tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA42, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA42, amIncomeTax));

        		this.dsList.setColumn(this.ucA40, amIncomeTax, tempValue);

        		//연금소득-가감계
        		tempValue = 0;
        		tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA48, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA48, amIncomeTax));
        		tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA45, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA45, amIncomeTax));
        		tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA46, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA46, amIncomeTax));

        		this.dsList.setColumn(this.ucA47, amIncomeTax, tempValue);

        		if (this.getDataFlag == false) {
        			this.strAmBeforetax = this.strAmBeforetaxOrg;
        		} else {
        			this.dsList.setColumn(this.ucA10, "AM_RETURNTAX", this.strAmBeforetax);
        		}

        		//A10 근로소득-가감계
        		//A20 퇴직소득
        		//A30 사업소득-가감계
        		//A40 기타소득
        		//A47 연금소득 - 가감계
        		//A50 이자소득
        		//A60 배당소득
        		//A69 저축해지추징세액
        		//A70 양도소득
        		//A80 법인원천
        		var rows = [this.ucA10, this.ucA20, this.ucA30, this.ucA40, this.ucA47, this.ucA50, this.ucA60, this.ucA69, this.ucA70, this.ucA80];

        		var tempAmIncomeTax;
        		var tempAmAddtax;

        		for(var i = 0 ; i < rows.length ; i++) {

        			tempAmIncomeTax = this.gfnIsNull(this.dsList.getColumn(rows[i], "AM_INCOMETAX")) ? 0 : Number(this.dsList.getColumn(rows[i], "AM_INCOMETAX"));
        			tempAmAddtax = this.gfnIsNull(this.dsList.getColumn(rows[i], "AM_ADDTAX")) ? 0 : Number(this.dsList.getColumn(rows[i], "AM_ADDTAX"));

        			if((tempAmIncomeTax + tempAmAddtax) > 0) {

        				if(rows[i] == this.ucA20) {
        					this.dsList.setColumn(rows[i], "AM_NAPRESTAX", this.gfnIsNull(this.dsList.getColumn(rows[i], "AM_RESTAX")) ? 0 : this.dsList.getColumn(rows[i], "AM_RESTAX"));
        				} else {

        					if(this.strAmBeforetax >= (tempAmIncomeTax + tempAmAddtax)) {
        						this.dsList.setColumn(rows[i], "AM_NAPRESTAX", 0);
        						this.strAmBeforetax = this.strAmBeforetax -(tempAmIncomeTax + tempAmAddtax);
        					} else {
        					    this.dsList.setColumn(rows[i], "AM_NAPRESTAX", this.gfnIsNull(this.dsList.getColumn(rows[i], "AM_RESTAX")) ? 0 : this.dsList.getColumn(rows[i], "AM_RESTAX"));
        					}
        				}

        			} else {
        				this.dsList.setColumn(rows[i], "AM_RETURNTAX", 0);
        				this.dsList.setColumn(rows[i], "AM_NAPINCOMETAX", 0);
        				this.dsList.setColumn(rows[i], "AM_NAPRESTAX", 0);
        			}
        		}
        	}


        	if (amIncomeTax == "AM_NAPINCOMETAX") {
        		tempValue = 0;
        		tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA01, "AM_INCOMETAX"))  ? 0 : Number(this.dsList.getColumn(this.ucA01, "AM_INCOMETAX"));
        		tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA02, "AM_INCOMETAX"))  ? 0 : Number(this.dsList.getColumn(this.ucA02, "AM_INCOMETAX"));
        		tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA03, "AM_INCOMETAX"))  ? 0 : Number(this.dsList.getColumn(this.ucA03, "AM_INCOMETAX"));
        		tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA06, "AM_INCOMETAX"))  ? 0 : Number(this.dsList.getColumn(this.ucA06, "AM_INCOMETAX"));
        		tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA01, "AM_ADDTAX"))  ? 0 : Number(this.dsList.getColumn(this.ucA01, "AM_ADDTAX"));
        		tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA02, "AM_ADDTAX"))  ? 0 : Number(this.dsList.getColumn(this.ucA02, "AM_ADDTAX"));
        		tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA03, "AM_ADDTAX"))  ? 0 : Number(this.dsList.getColumn(this.ucA03, "AM_ADDTAX"));
        		tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA06, "AM_ADDTAX"))  ? 0 : Number(this.dsList.getColumn(this.ucA06, "AM_ADDTAX"));
        // 		tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA04, amIncomeTax)) || this.dsList.getColumn(this.ucA04, amIncomeTax) < 0 ? 0 : Number(this.dsList.getColumn(this.ucA04, amIncomeTax));
        // 		tempValue -= this.gfnIsNull(this.dsList.getColumn(this.ucA05, amIncomeTax)) || this.dsList.getColumn(this.ucA05, amIncomeTax) < 0 ? 0 : Number(this.dsList.getColumn(this.ucA05, amIncomeTax));
        		this.dsList.setColumn(this.ucA10, amIncomeTax,  tempValue > 0 ? tempValue : 0 );

        	   //this.dsList.setColumn(this.ucA10, amIncomeTax, tempValue);
        		trace("AM_NAPINCOMETAX 02 =>" +  this.dsList.getColumn(this.ucA10, "AM_NAPINCOMETAX"));
        		trace("AM_INCOMETAX 02 =>" +  this.dsList.getColumn(this.ucA10, "AM_INCOMETAX"));
        		trace("tempValue 02 =>" +  tempValue);
        	}
        	tempValue = 0;
        	if (amIncomeTax =="AM_INCOMETAX"){
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA10, amIncomeTax)) || this.dsList.getColumn(this.ucA10, amIncomeTax) < 0 ? 0 : Number(this.dsList.getColumn(this.ucA10, amIncomeTax));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA20, amIncomeTax)) || this.dsList.getColumn(this.ucA20, amIncomeTax) < 0 ? 0 : Number(this.dsList.getColumn(this.ucA20, amIncomeTax));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA30, amIncomeTax)) || this.dsList.getColumn(this.ucA30, amIncomeTax) < 0 ? 0 : Number(this.dsList.getColumn(this.ucA30, amIncomeTax));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA40, amIncomeTax)) || this.dsList.getColumn(this.ucA40, amIncomeTax) < 0 ? 0 : Number(this.dsList.getColumn(this.ucA40, amIncomeTax));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA47, amIncomeTax)) || this.dsList.getColumn(this.ucA47, amIncomeTax) < 0 ? 0 : Number(this.dsList.getColumn(this.ucA47, amIncomeTax));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA50, amIncomeTax)) || this.dsList.getColumn(this.ucA50, amIncomeTax) < 0 ? 0 : Number(this.dsList.getColumn(this.ucA50, amIncomeTax));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA60, amIncomeTax)) || this.dsList.getColumn(this.ucA60, amIncomeTax) < 0 ? 0 : Number(this.dsList.getColumn(this.ucA60, amIncomeTax));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA69, amIncomeTax)) || this.dsList.getColumn(this.ucA69, amIncomeTax) < 0 ? 0 : Number(this.dsList.getColumn(this.ucA69, amIncomeTax));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA70, amIncomeTax)) || this.dsList.getColumn(this.ucA70, amIncomeTax) < 0 ? 0 : Number(this.dsList.getColumn(this.ucA70, amIncomeTax));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA80, amIncomeTax)) || this.dsList.getColumn(this.ucA80, amIncomeTax) < 0 ? 0 : Number(this.dsList.getColumn(this.ucA80, amIncomeTax));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA90, amIncomeTax)) || this.dsList.getColumn(this.ucA90, amIncomeTax) < 0 ? 0 : Number(this.dsList.getColumn(this.ucA90, amIncomeTax));
        	}
        	else {
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA10, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA10, amIncomeTax));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA20, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA20, amIncomeTax));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA30, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA30, amIncomeTax));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA40, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA40, amIncomeTax));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA47, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA47, amIncomeTax));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA50, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA50, amIncomeTax));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA60, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA60, amIncomeTax));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA69, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA69, amIncomeTax));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA70, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA70, amIncomeTax));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA80, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA80, amIncomeTax));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA90, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA90, amIncomeTax));
        	}
        	this.dsList.setColumn(this.ucA99, amIncomeTax, tempValue);

        // 	if(amIncomeTax == "AM_INCOMETAX" || amIncomeTax == "AM_ADDTAX" ) {
        // 		this.newLogic();
        // 	}
        // 	else if(amIncomeTax == "AM_RETURNTAX") {
        //
        // 		tempValue = 0;
        // 		tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA10, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA10, amIncomeTax));
        // 		tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA20, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA20, amIncomeTax));
        // 		tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA30, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA30, amIncomeTax));
        // 		tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA40, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA40, amIncomeTax));
        // 		tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA47, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA47, amIncomeTax));
        // 		tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA50, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA50, amIncomeTax));
        // 		tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA60, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA60, amIncomeTax));
        // 		tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA69, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA69, amIncomeTax));
        // 		tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA70, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA70, amIncomeTax));
        // 		tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA80, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA80, amIncomeTax));
        // 		tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA90, amIncomeTax)) ? 0 : Number(this.dsList.getColumn(this.ucA90, amIncomeTax));
        //
        // 		this.mskAM_RETURNTAXSUM.set_value(tempValue);
        //
        // 		this.sbAmCalSum(); // 전월미환급 세액등 계산
        //
        // 	}
        	this.newLogic()
        	tempValue = 0;
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA10, "AM_RETURNTAX")) ? 0 : Number(this.dsList.getColumn(this.ucA10, "AM_RETURNTAX"));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA20, "AM_RETURNTAX")) ? 0 : Number(this.dsList.getColumn(this.ucA20, "AM_RETURNTAX"));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA30, "AM_RETURNTAX")) ? 0 : Number(this.dsList.getColumn(this.ucA30, "AM_RETURNTAX"));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA40, "AM_RETURNTAX")) ? 0 : Number(this.dsList.getColumn(this.ucA40, "AM_RETURNTAX"));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA47, "AM_RETURNTAX")) ? 0 : Number(this.dsList.getColumn(this.ucA47, "AM_RETURNTAX"));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA50, "AM_RETURNTAX")) ? 0 : Number(this.dsList.getColumn(this.ucA50, "AM_RETURNTAX"));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA60, "AM_RETURNTAX")) ? 0 : Number(this.dsList.getColumn(this.ucA60, "AM_RETURNTAX"));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA69, "AM_RETURNTAX")) ? 0 : Number(this.dsList.getColumn(this.ucA69, "AM_RETURNTAX"));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA70, "AM_RETURNTAX")) ? 0 : Number(this.dsList.getColumn(this.ucA70, "AM_RETURNTAX"));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA80, "AM_RETURNTAX")) ? 0 : Number(this.dsList.getColumn(this.ucA80, "AM_RETURNTAX"));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA90, "AM_RETURNTAX")) ? 0 : Number(this.dsList.getColumn(this.ucA90, "AM_RETURNTAX"));
        	this.dsList.setColumn(this.ucA99, "AM_RETURNTAX", tempValue);
        	trace(" this.ucA99 AM_RETURNTAX=>" +tempValue );
        	this.mskAM_RETURNTAXSUM.set_value(tempValue);
        	this.sbAmCalSum();

        	tempValue = 0;
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA10, "AM_NAPINCOMETAX")) || this.gfnIsNull(this.dsList.getColumn(this.ucA10, "AM_NAPINCOMETAX")) < 0 ? 0 : Number(this.dsList.getColumn(this.ucA10, "AM_NAPINCOMETAX"));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA20, "AM_NAPINCOMETAX")) || this.gfnIsNull(this.dsList.getColumn(this.ucA20, "AM_NAPINCOMETAX")) < 0 ? 0 : Number(this.dsList.getColumn(this.ucA20, "AM_NAPINCOMETAX"));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA30, "AM_NAPINCOMETAX")) || this.gfnIsNull(this.dsList.getColumn(this.ucA30, "AM_NAPINCOMETAX")) < 0 ? 0 : Number(this.dsList.getColumn(this.ucA30, "AM_NAPINCOMETAX"));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA40, "AM_NAPINCOMETAX")) || this.gfnIsNull(this.dsList.getColumn(this.ucA40, "AM_NAPINCOMETAX")) < 0 ? 0 : Number(this.dsList.getColumn(this.ucA40, "AM_NAPINCOMETAX"));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA47, "AM_NAPINCOMETAX")) || this.gfnIsNull(this.dsList.getColumn(this.ucA47, "AM_NAPINCOMETAX")) < 0 ? 0 : Number(this.dsList.getColumn(this.ucA47, "AM_NAPINCOMETAX"));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA50, "AM_NAPINCOMETAX")) || this.gfnIsNull(this.dsList.getColumn(this.ucA50, "AM_NAPINCOMETAX")) < 0 ? 0 : Number(this.dsList.getColumn(this.ucA50, "AM_NAPINCOMETAX"));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA60, "AM_NAPINCOMETAX")) || this.gfnIsNull(this.dsList.getColumn(this.ucA60, "AM_NAPINCOMETAX")) < 0 ? 0 : Number(this.dsList.getColumn(this.ucA60, "AM_NAPINCOMETAX"));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA69, "AM_NAPINCOMETAX")) || this.gfnIsNull(this.dsList.getColumn(this.ucA69, "AM_NAPINCOMETAX")) < 0 ? 0 : Number(this.dsList.getColumn(this.ucA69, "AM_NAPINCOMETAX"));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA70, "AM_NAPINCOMETAX")) || this.gfnIsNull(this.dsList.getColumn(this.ucA70, "AM_NAPINCOMETAX")) < 0 ? 0 : Number(this.dsList.getColumn(this.ucA70, "AM_NAPINCOMETAX"));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA80, "AM_NAPINCOMETAX")) || this.gfnIsNull(this.dsList.getColumn(this.ucA80, "AM_NAPINCOMETAX")) < 0 ? 0 : Number(this.dsList.getColumn(this.ucA80, "AM_NAPINCOMETAX"));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA90, "AM_NAPINCOMETAX")) || this.gfnIsNull(this.dsList.getColumn(this.ucA90, "AM_NAPINCOMETAX")) < 0 ? 0 : Number(this.dsList.getColumn(this.ucA90, "AM_NAPINCOMETAX"));

        	this.dsList.setColumn(this.ucA99, "AM_NAPINCOMETAX", tempValue);

        	tempValue = 0;
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA10, "AM_NAPRESTAX")) ? 0 : Number(this.dsList.getColumn(this.ucA10, "AM_NAPRESTAX"));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA20, "AM_NAPRESTAX")) ? 0 : Number(this.dsList.getColumn(this.ucA20, "AM_NAPRESTAX"));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA30, "AM_NAPRESTAX")) ? 0 : Number(this.dsList.getColumn(this.ucA30, "AM_NAPRESTAX"));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA40, "AM_NAPRESTAX")) ? 0 : Number(this.dsList.getColumn(this.ucA40, "AM_NAPRESTAX"));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA47, "AM_NAPRESTAX")) ? 0 : Number(this.dsList.getColumn(this.ucA47, "AM_NAPRESTAX"));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA50, "AM_NAPRESTAX")) ? 0 : Number(this.dsList.getColumn(this.ucA50, "AM_NAPRESTAX"));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA60, "AM_NAPRESTAX")) ? 0 : Number(this.dsList.getColumn(this.ucA60, "AM_NAPRESTAX"));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA69, "AM_NAPRESTAX")) ? 0 : Number(this.dsList.getColumn(this.ucA69, "AM_NAPRESTAX"));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA70, "AM_NAPRESTAX")) ? 0 : Number(this.dsList.getColumn(this.ucA70, "AM_NAPRESTAX"));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA80, "AM_NAPRESTAX")) ? 0 : Number(this.dsList.getColumn(this.ucA80, "AM_NAPRESTAX"));
        	tempValue += this.gfnIsNull(this.dsList.getColumn(this.ucA90, "AM_NAPRESTAX")) ? 0 : Number(this.dsList.getColumn(this.ucA90, "AM_NAPRESTAX"));

        	this.dsList.setColumn(this.ucA99, "AM_NAPRESTAX", tempValue);

        	this.dsList.set_enableevent(true);
        }

        //newLogic
        this.newLogic = function() {

        	//this.dsList.set_enableevent(false);

        	var tempAmIlbanreturnMinus = 0;
        	var tempAmIlbanreturnPlus = 0;

        	//A10 근로소득-가감계
        	//A20 퇴직소득
        	//A30 사업소득-가감계
        	//A40 기타소득
        	//A47 연금소득-가감계
        	//A50 이자소득
        	//A60 배당소득
        	//A69 저축해지 추징세액
        	//A70 비거주자 양도소득
        	//A80 법인원천
        	//A90 수정신고(세액)

        	var rows = [this.ucA10, this.ucA20, this.ucA30, this.ucA40, this.ucA47, this.ucA50, this.ucA60, this.ucA69, this.ucA70, this.ucA80, this.ucA90];
        	var tempValue;

        	for(var i = 0 ; i < rows.length ; i++) {

        		tempValue = 0;
        		tempValue = this.gfnNvl(Number(this.dsList.getColumn(rows[i], "AM_INCOMETAX")) ,0)+ this.gfnNvl(Number(this.dsList.getColumn(rows[i], "AM_ADDTAX")),0);

        		if(tempValue < 0) {
        			tempAmIlbanreturnMinus = tempAmIlbanreturnMinus;
        		} else {
        			tempAmIlbanreturnPlus = tempAmIlbanreturnPlus + tempValue;
        		}
        	}

        	this.sbAmCalSum();  // 전월미환급세액 분배처리

        	var AM_SETTLE = this.gfnIsNull(this.mskAM_SETTLE.value) ? 0 : Number(this.mskAM_SETTLE.value);// this.gfnIsNull(this.mskAM_SETTLE.value) ? 0 : Number(this.mskAM_SETTLE.value); // 전월미환급세액
        	var AM_ILBANRETURN = tempAmIlbanreturnPlus;  // 이번달 납부액

        	var abFlag = "";

        	for(var i = 0 ; i < rows.length ; i++) {
        		tempIncomeTax = Number(this.dsList.getColumn(rows[i], "AM_INCOMETAX")) < 0 || this.gfnIsNull(this.dsList.getColumn(rows[i], "AM_INCOMETAX")) ? 0 : this.gfnNvl(Number(this.dsList.getColumn(rows[i], "AM_INCOMETAX")),0);
        		tempAddTax = Number(this.dsList.getColumn(rows[i], "AM_ADDTAX")) < 0 || this.gfnIsNull(this.dsList.getColumn(rows[i], "AM_ADDTAX")) ? 0 : this.gfnNvl(Number(this.dsList.getColumn(rows[i], "AM_ADDTAX")),0);
        		tempValue = tempIncomeTax + tempAddTax;
        		// 미환급액 - 납부액  > 0   // 미환급이 납부액보다 많을때
        		if(AM_SETTLE - tempValue >= 0) {
        			abFlag = "6";
        		} else {
        			abFlag = "7";
        		}
        // 		trace("abFlag: " + abFlag+ "i => "+ i );
        // 	    trace("tempValue1: " + tempValue);
        // 		trace("AM_SETTLE: " + AM_SETTLE);
        		if(abFlag == "6") {
        			if(tempValue > 0) {  // 소득세 납부액이 있으면
        				this.dsList.setColumn(rows[i], "AM_RETURNTAX", tempValue);
        				this.dsList.setColumn(rows[i], "AM_NAPINCOMETAX", 0);
        				AM_SETTLE = AM_SETTLE - tempValue;
        			} else {			 // 소득세 납부액이 없을때
        				this.dsList.setColumn(rows[i], "AM_RETURNTAX", 0);
        				this.dsList.setColumn(rows[i], "AM_NAPINCOMETAX", 0);
        			}
        		} else if(abFlag == "7") {		// 납부액이 있을때
        			if(tempValue > 0) {		    // 소득세 납부액이 있으면

        				if(AM_SETTLE < tempValue) {			// 납부액이 환급액보다 크면
        					this.dsList.setColumn(rows[i], "AM_RETURNTAX", AM_SETTLE);  // 환급액
        					this.dsList.setColumn(rows[i], "AM_NAPINCOMETAX", tempValue - AM_SETTLE);  // 납부액 = 납부액- 환급액
        					trace("AM_NAPINCOMETAX 00=> " + this.dsList.getColumn(rows[i], "AM_NAPINCOMETAX"));
        					AM_SETTLE = 0;
        				} else {
        					this.dsList.setColumn(rows[i], "AM_RETURNTAX", 0);
        					this.dsList.setColumn(rows[i], "AM_NAPINCOMETAX", 0);
        					trace("AM_NAPINCOMETAX 99=> " + this.dsList.getColumn(rows[i], "AM_NAPINCOMETAX"));
        					AM_SETTLE = AM_SETTLE - tempValue;
        				}
        			}
        		}
        	}

        	//this.dsList.set_enableevent(true);
        }

        //sbAM_SumCalcReturn
        this.sbAmSumCalcReturn = function(row , col) {
            trace(" sbAmSumCalcReturn=>" + col);
        	this.dsList3.set_enableevent(false);

        	var AM_BEFTAX_NOW = 0;
        	var AM_BEFTAX_BEF = 0;
        	var AM_CHA = 0;
        	var AM_PART = 0;
        	var AM_JOJUNG = 0;

        	if (col == "AM_FIXTAX" || col == "AM_BEFTAX_NOW" || col == "AM_BEFTAX_BEF" )
        	{
        		AM_FIXTAX =  this.gfnIsNull(this.dsList3.getColumn(row, "AM_FIXTAX")) ? 0 : nexacro.toNumber(this.dsList3.getColumn(row, "AM_FIXTAX"));
        		AM_BEFTAX_NOW = this.gfnIsNull(this.dsList3.getColumn(row, "AM_BEFTAX_NOW")) ? 0 : nexacro.toNumber(this.dsList3.getColumn(row, "AM_BEFTAX_NOW"));
        		AM_BEFTAX_BEF = this.gfnIsNull(this.dsList3.getColumn(row, "AM_BEFTAX_BEF")) ? 0 : nexacro.toNumber(this.dsList3.getColumn(row, "AM_BEFTAX_BEF"));
        		this.dsList3.setColumn(row, "AM_DEDCOLLECTTAX" , AM_FIXTAX - AM_BEFTAX_NOW - AM_BEFTAX_BEF);
        		this.dsList3.setColumn(row, "AM_BEFTAX", AM_BEFTAX_NOW + AM_BEFTAX_BEF);
        	}
        	if (col == "AM_PARTDECOTAX" || col == "AM_RETURNTAX" || col == "AM_DEDCOLLECTTAX")
        	{
        		AM_PART = this.gfnIsNull(this.dsList3.getColumn(row, "AM_PARTDECOTAX")) ? 0 : nexacro.toNumber(this.dsList3.getColumn(row, "AM_PARTDECOTAX"));
        		AM_CHA = this.gfnIsNull(this.dsList3.getColumn(row, "AM_DEDCOLLECTTAX")) ? 0 : nexacro.toNumber(this.dsList3.getColumn(row, "AM_DEDCOLLECTTAX"));
        		AM_JOJUNG = this.gfnIsNull(this.dsList3.getColumn(row, "AM_RETURNTAX")) ? 0 : nexacro.toNumber(this.dsList3.getColumn(row, "AM_RETURNTAX"));
        		this.dsList3.setColumn(row, "AM_RETURNAPPLY", -AM_CHA + AM_PART - AM_JOJUNG );
        	}

        	this.dsList3.set_enableevent(true);

        }

        //sbAM_SumCalcB
        this.sbAmSumCalcB = function(row, amIncomeTax) {

        	if(this.gfnIsNull(this.dsList2.getColumn(row, "CD_GUBUN"))) return;

        	this.dsList2.set_enableevent(false);

        	var CD_GUBUN = this.dsList2.getColumn(row, "CD_GUBUN");

        	var AM_BEFORETAX = 0;

        	var AM_RETURNTAX = 0;

        	var tempAmIncomeTax = 0;

        	if(Number(CD_GUBUN.substring(1)) >= 1 && Number(CD_GUBUN.substring(1)) < 40) { // 1 ~39

        		AM_BEFORETAX = this.gfnIsNull(this.mskAM_SETTLE.value) ? 0 : Number(this.mskAM_SETTLE.value);

        		var rows = [4, 5, 8, 9, 12, 14, 15, 16, 17];

        		for(var i = 0 ; i < rows.length ; i++) {
        			AM_RETURNTAX = this.gfnIsNull(this.dsList.getColumn(rows[i], "AM_RETURNTAX")) ? 0 : this.dsList.getColumn(rows[i], "AM_RETURNTAX");
        			AM_BEFORETAX = AM_BEFORETAX - AM_RETURNTAX;
        		}

        		//이자배당소득계
        		if(amIncomeTax != "AM_RETURNTAX" && amIncomeTax != "AM_NAPINCOMETAX" && amIncomeTax != "AM_NAPSPECIALTAX") {

        			tempAmIncomeTax = 0;

        			for(var i = 0 ; i < 40 ; i++) {
        				tempAmIncomeTax = tempAmIncomeTax + (this.gfnIsNull(this.dsList2.getColumn(i, amIncomeTax)) ? 0 : this.dsList2.getColumn(i, amIncomeTax));
        			}

        			//값이 변경되었을경우
        			if(this.dsList2.getOrgColumn(40, amIncomeTax) != tempAmIncomeTax){
        				this.dsList2.setColumn(40, "FLAG", "U");	//상태값 변경
        			}

        			this.dsList2.setColumn(40, amIncomeTax, tempAmIncomeTax);

        			trace("@@ amIncomeTax :: "+amIncomeTax);

        			//소득세 변경시 납부세액 소득세에도 합계 표시
        			if(amIncomeTax == "AM_INCOMETAX"){
        				this.dsList2.setColumn(40, "AM_NAPINCOMETAX", tempAmIncomeTax);
        			}
        		}

        	} else if(Number(CD_GUBUN.substring(1)) >= 44 && Number(CD_GUBUN.substring(1)) <= 53) { // 44 ~ 53

        		AM_BEFORETAX = this.gfnIsNull(this.mskAM_SETTLE.value) ? 0 : Number(this.mskAM_SETTLE.value);

        		var rows = [4, 5, 8, 9, 12, 13, 14, 16, 17];

        		for(var i = 0 ; i < rows.length ; i++) {
        			AM_RETURNTAX = this.gfnIsNull(this.dsList.getColumn(rows[i], "AM_RETURNTAX")) ? 0 : this.dsList.getColumn(rows[i], "AM_RETURNTAX");
        			AM_BEFORETAX = AM_BEFORETAX - AM_RETURNTAX;
        		}

        		//해지추징계
        		if(amIncomeTax != "AM_SPECIALTAX" && amIncomeTax != "AM_RETURNTAX" && amIncomeTax != "AM_NAPINCOMETAX" && amIncomeTax != "AM_NAPSPECIALTAX") {

        			tempAmIncomeTax = 0;

        			for(var i = 42 ; i < 48 ; i++) {
        				tempAmIncomeTax = tempAmIncomeTax + (this.gfnIsNull(this.dsList2.getColumn(i, amIncomeTax)) ? 0 : this.dsList2.getColumn(i, amIncomeTax));
        			}
        			//값이 변경되었을경우
        			if(this.dsList2.getOrgColumn(48, amIncomeTax) != tempAmIncomeTax){
        				this.dsList2.setColumn(48, "FLAG", "U");	//상태값 변경
        			}

        			this.dsList2.setColumn(48, amIncomeTax, tempAmIncomeTax);

        			//소득세 변경시 납부세액 소득세에도 합계 표시
        			if(amIncomeTax == "AM_INCOMETAX"){
        				this.dsList2.setColumn(48, "AM_NAPINCOMETAX", tempAmIncomeTax);
        			}

        		}

        	}

        	//비거주자계
        	tempAmIncomeTax = 0;

        	for(var i = 49 ; i < 58 ; i++) {
        		tempAmIncomeTax = tempAmIncomeTax + (this.gfnIsNull(this.dsList2.getColumn(i, amIncomeTax)) ? 0 : this.dsList2.getColumn(i, amIncomeTax));
        	}

        	//값이 변경되었을경우
        	if(this.dsList2.getOrgColumn(58, amIncomeTax) != tempAmIncomeTax){
        		this.dsList2.setColumn(58, "FLAG", "U");	//상태값 변경
        	}

        	this.dsList2.setColumn(58, amIncomeTax, tempAmIncomeTax);
        	//소득세 변경시 납부세액 소득세에도 합계 표시
        	if(amIncomeTax == "AM_INCOMETAX"){
        		this.dsList2.setColumn(58, "AM_NAPINCOMETAX", tempAmIncomeTax);
        	}

        	//법인세계
        	if(amIncomeTax != "AM_SPECIALTAX" && amIncomeTax != "AM_NAPSPECIALTAX") {
        	trace(" 법인원천 amIncomeTax=>" + amIncomeTax);
        		var sumAmIncomeTax = 0;
        		var tempReturnTax = 0;
        		var returnTax = 0 ;
        		var incomeTax = 0 ;
        		for(var i = 59 ; i < 73 ; i++) {
        			returnTax = (this.gfnIsNull(this.dsList2.getColumn(i, "AM_RETURNTAX")) ? 0 : this.dsList2.getColumn(i, "AM_RETURNTAX"));
        			incomeTax = (this.gfnIsNull(this.dsList2.getColumn(i, "AM_INCOMETAX")) ? 0 : this.dsList2.getColumn(i, "AM_INCOMETAX")) + (this.gfnIsNull(this.dsList2.getColumn(i, "AM_ADDTAX")) ? 0 : this.dsList2.getColumn(i, "AM_ADDTAX"));;
        			sumAmIncomeTax = sumAmIncomeTax + incomeTax;
        			tempReturnTax = tempReturnTax + returnTax;
        			tempAmIncomeTax = tempAmIncomeTax + (this.gfnIsNull(this.dsList2.getColumn(i, amIncomeTax)) ? 0 : this.dsList2.getColumn(i, amIncomeTax));
        			if ((amIncomeTax == "AM_INCOMETAX" || amIncomeTax == "AM_RETURNTAX" ) && i != 64 ) {
        				this.dsList2.setColumn(i, "AM_NAPINCOMETAX", incomeTax - returnTax );
        			}
        		}


        		//값이 변경되었을경우
        		if(this.dsList2.getOrgColumn(73, amIncomeTax) != tempAmIncomeTax){
        			this.dsList2.setColumn(73, "FLAG", "U");	//상태값 변경
        		}

        		this.dsList2.setColumn(73, amIncomeTax, tempAmIncomeTax);
        		//법인 원천도 값 변경 처리 24.2.19
        		this.dsList.setColumn(this.ucA80, "AM_RETURNTAX", tempAmIncomeTax);
        		this.dsList.setColumn(this.ucA80, amIncomeTax, tempAmIncomeTax);

        		//소득세 변경시 납부세액 소득세에도 합계 표시
        		if(amIncomeTax == "AM_INCOMETAX" || amIncomeTax == "AM_RETURNTAX"){
        			//this.dsList2.setColumn(73, amIncomeTax, tempAmIncomeTax);
        			this.dsList2.setColumn(73, "AM_NAPINCOMETAX", sumAmIncomeTax - tempReturnTax );
        			this.dsList.setColumn(this.ucA80, "AM_INCOMETAX", sumAmIncomeTax);
        			this.dsList.setColumn(this.ucA80, "AM_RETURNTAX", tempReturnTax);
        			this.dsList.setColumn(this.ucA80, "AM_NAPINCOMETAX", sumAmIncomeTax - tempReturnTax);
        			trace("1 AM_NAPINCOMETAX=>" + sumAmIncomeTax - tempReturnTax);
        			trace("1 AM_RETURNTAX=>" + tempReturnTax );
        			trace("1 AM_INCOMETAX=>" + sumAmIncomeTax );
        		}
        	}

        	this.sbAmSumCalcA(amIncomeTax);

        	this.dsList2.set_enableevent(true);
        }

        //sbAM_CalSum  전월미환급 세액등의 계산로직
        this.sbAmCalSum = function() {

        	var amtTemp = 0;
        	var amtRerurn = 0;

        	var AM_BEFORETAX = this.gfnIsNull(this.mskAM_BEFORETAX.value) ? 0 : Number(this.mskAM_BEFORETAX.value);
        	var AM_REQUESTTAX = this.gfnIsNull(this.mskAM_REQUESTTAX.value) ? 0 : Number(this.mskAM_REQUESTTAX.value);

        	amtTemp = AM_BEFORETAX - AM_REQUESTTAX;
        	this.mskAM_JAN.set_value(amtTemp == 0 ? "" : amtTemp);

        	var AM_JAN = this.gfnIsNull(this.mskAM_JAN.value) ? 0 : Number(this.mskAM_JAN.value);
        	var AM_ILBANRETURN = this.gfnIsNull(this.mskAM_ILBANRETURN.value) ? 0 : Number(this.mskAM_ILBANRETURN.value);
        	var AM_SINTAC = this.gfnIsNull(this.mskAM_SINTAC.value) ? 0 : Number(this.mskAM_SINTAC.value);
        	var AM_GITA = this.gfnIsNull(this.mskAM_GITA.value) ? 0 : Number(this.mskAM_GITA.value);
        	var AM_GITA2 = this.gfnIsNull(this.mskAM_GITA2.value) ? 0 : Number(this.mskAM_GITA2.value);

        	amtTemp = AM_JAN + AM_ILBANRETURN + AM_SINTAC + AM_GITA + AM_GITA2;
        	this.mskAM_SETTLE.set_value(amtTemp == 0 ? "" : amtTemp);

        	amtTemp = 0;
        	var rows = [this.ucA10, this.ucA20, this.ucA30, this.ucA40, this.ucA47, this.ucA50, this.ucA60, this.ucA69, this.ucA70, this.ucA80, this.ucA90];

        	for(var i = 0 ; i < rows.length ; i++) {
        		amtTemp = amtTemp + this.gfnIsNull(this.dsList.getColumn(rows[i], "AM_RETURNTAX")) ? 0 : this.dsList.getColumn(rows[i], "AM_RETURNTAX");
        		amtTemp = amtTemp + this.gfnIsNull(this.dsList.getColumn(rows[i], "AM_RETURNTAX")) ? 0 : this.dsList.getColumn(rows[i], "AM_RETURNTAX");
        		amtRerurn += this.gfnIsNull(this.dsList.getColumn(rows[i], "AM_INCOMETAX")) || this.dsList.getColumn(rows[i], "AM_INCOMETAX") > 0 ? 0 : this.dsList.getColumn(rows[i], "AM_INCOMETAX");
        	}
        	this.mskAM_ILBANRETURN.set_value(this.gfnIsNull(amtRerurn) ? 0 :  amtRerurn * -1 );
        	//this.mskAM_RETURNTAXSUM.set_value(amtTemp == 0 ? "" : amtTemp);

        	var AM_SETTLE = this.gfnIsNull(this.mskAM_SETTLE.value) ? 0 : Number(this.mskAM_SETTLE.value);
        	var AM_RETURNTAXSUM = this.gfnIsNull(this.mskAM_RETURNTAXSUM.value) ? 0 : Number(this.mskAM_RETURNTAXSUM.value);

        	amtTemp = AM_SETTLE - AM_RETURNTAXSUM;

        	this.mskAM_WOLRETURNTAX.set_value(amtTemp == 0 ? "" : amtTemp);
        }


        this.fnData = function(obj,e) {

        	if(!this.fnSelectValidate()) return;

        	//데이터 불러오기
        	this.gfnConfirm("초기화 후 불러온 데이터를 저장합니다.\n작업을 진행하시겠습니까?", "fnDataCallBack");
        }

        this.fnESingoValidate = function() {
        	var strMsg = "";

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        		strMsg = "법인코드를 입력하세요!";
        		this.gfnAlert(strMsg);
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}
        	if(this.gfnIsNull(this.ctclYM_IMPUTE.form.TextBox.value)) {
        		strMsg = "귀속년월을 입력하세요!";
        		this.gfnAlert(strMsg);
        		this.ctclYM_IMPUTE.form.TextBox.setFocus();
        		return false;
        	}
        	if(this.gfnIsNull(this.ctclYM_SUPPY.form.TextBox.value)) {
        		strMsg = "지급년월을 입력하세요!";
        		this.gfnAlert(strMsg);
        		this.ctclYM_SUPPY.form.TextBox.setFocus();
        		return false;
        	}
        	if(this.gfnIsNull(this.rdoSINGO.value)) {
        		strMsg = "신고구분을 입력하세요!";
        		this.gfnAlert(strMsg);
        		this.rdoSINGO.setFocus();
        		return false;
        	}

        	return true;
        }

        this.fnESingo = function() {
        	if(!this.fnESingoValidate()) return;

        	this.gfnConfirm("전자 신고 작업을 진행하시겠습니까?", "fnESingoCallBack");
        };


        this.fnESingoCallBack = function(strId, val) {
        	if(!val) return;

        	//전자신고
        	//DHVPR_WITHHOLDING_FILE

        	this.dsESingo.clearData();
        	var nrow = this.dsESingo.addRow();
        	this.dsESingo.setColumn(nrow, "OUT_CD_SELFACNT", this.dsSearch.getColumn(0, "CD_CORP")); //   IN      VARCHAR2,      -- 법인코드
        	this.dsESingo.setColumn(nrow, "OUT_YM_IMPUTE", this.ctclYM_IMPUTE.form.TextBox.value); //   IN      VARCHAR2,      -- 귀속년월
        	this.dsESingo.setColumn(nrow, "OUT_YM_SUPPLY", this.ctclYM_SUPPY.form.TextBox.value); //	 IN      VARCHAR2,	   --지급년월
        	this.dsESingo.setColumn(nrow, "OUT_GB_SINGO1", this.rdoSINGO.value); //   IN      VARCHAR2,     --신고구분

        	//trace(this.dsESingo.saveXML());


        	var strSvcId    = "ESingo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "ESingo=dsESingo";
        	var outData     = "dsText=ESingo0";
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

        this.fnFileDownload = function () {
        //trace("this.dsText.rowcount", this.dsText.rowcount);
        //trace("this.dsText.saveXML", this.dsText.saveXML());

        	if (this.dsText.rowcount <= 0) {
        		return false;
        	}

        // 	var sNM_FILE = ""; //yyyymmdd.201
        // 	sNM_FILE = this.gfnGetDate()+".201";
        //
        // 	var fileManager = {};
        // 		//텍스트로 변환할 DATASET..
        // 		fileManager.DS_TEXT = this.dsText;
        // 		//CELL & ROW 사이 구분자 및 이스케이프 시퀀스.. 예) 줄바꿈 : "\n", 수평탭 : "\t", 수직탭 : "\f" 등 특수문자 및 일반문자..
        // 		fileManager.ES_CELL = "";
        // 		fileManager.ES_ROW  = "\n";	//줄바꿈
        // 		//확인영역(TEXTAREA) 수정 가능 여부... true / false(default)
        // 		fileManager.IS_READONLY  = true;
        // 		//Download 시 기본 파일명 지정.. default : TEXT_FILE_DOWNLOAD
        // 		fileManager.NM_FILE  = sNM_FILE;
        // 		//TEXT 적용 할 CELL INDEX 선택.. default : 전체, [] : 전체, [0,3,5] : 선택된 CELL
        // 		fileManager.INX_CELL  = [];
        // 		//미리보기 여부 true, false
        // 		fileManager.IS_VISIBLE = false;
        // 	this.gfnTextManager(fileManager, "fnFileCallback");

        	var data="";
        	for(var i=0;i<this.dsText.rowcount;i++){
        		data = data + this.dsText.getColumn(i,"ROWDATA");
        		if(i == this.dsText.rowcount -1){
        			;
        		}else{
        			data = data + "\n";
        		}
        	}
        	//trace("data==>", data);

        	var sFilename = this.gfnGetDate()+"C103900.01"; //yyyyMMdd(오늘날짜)C103900.01
        	var sFilecont = data;
        	var encodeFileName = encodeURIComponent(sFilename);

        	var surl = this.fileConfig.host+ this.fileConfig.downloadUrl; // + encodeFileName;
        	this.FileDownTransfer00.set_url(surl);
        	this.FileDownTransfer00.setPostData("fileCont", sFilecont);
        	this.FileDownTransfer00.setPostData("fileName", encodeFileName);
        	this.FileDownTransfer00.setPostData("fileEncoding", "EUC-KR");

        	if( system.navigatorname =="nexacro"){
        		this.FileDownTransfer00.set_downloadfilename(sFilename);
        	}
        	this.FileDownTransfer00.download();
        }

        this.fnSoduk = function(obj,e) {
        	//소득자료 집계

        	var param = {};
        	param.YM_IMPUTE_FR = this.dsSearch.getColumn(0, "YM_FROM");
        	param.YM_IMPUTE_TO = this.dsSearch.getColumn(0, "YM_TO");
        	param.CD_DEPT_SELFACNT = this.dsSearch.getColumn(0, "CD_DEPT_SELFACNT");
        	param.DS_DEPT_SELFACNT = this.dsSearch.getColumn(0, "DS_DEPT_SELFACNT");
        	param.YM_SUPPLY_FR = this.dsSearch.getColumn(0, "YM_JFROM");
        	param.YM_SUPPLY_TO = this.dsSearch.getColumn(0, "YM_JTO");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHV_DEFRAYMENTTOTAL_SLIP", "", param);

        	/*
        	DHV_DEFRAYMENTTOTAL_SLIP 화면 열기
        	화면 파라미터

        	hashTable.Add("CD_SELFACNT", this.ccfSELFACNT.CDTextValue.Trim());
        	hashTable.Add("DS_SELFACNT", this.ccfSELFACNT.DSTextValue.Trim());
        	hashTable.Add("YM_FROM", this.tclYM_FROM.TextInCalendar.Trim());
        	hashTable.Add("YM_TO", this.tclYM_TO.TextInCalendar.Trim());
        	hashTable.Add("YM_JFROM", this.tclYM_JFROM.TextInCalendar.Trim());
        	hashTable.Add("YM_JTO", this.tclYM_JTO.TextInCalendar.Trim());
        	*/
        }
        // 조회후 data
        this.makeData = function() {

        	this.dsList.clearData();
        	this.setDxGrid();

        	this.dsList2.clearData();
        	this.setDxGrid2();

        	if(this.dsResult.rowcount > 0) {

        		this.edtNM_SANGHO.set_value(this.dsResult.getColumn(0, "DS_DEPT_SELFACNT"));
        		this.edtNM_BOSS.set_value(this.dsResult.getColumn(0, "DS_DAEPYO"));
        		this.edtNO_TEL.set_value(this.dsResult.getColumn(0, "NO_TEL"));

        		if(this.dsResult.getColumn(0, "YN_BATCH") == "Y") {
        			this.rdoBATCH.set_index(0);
        		} else {
        			this.rdoBATCH.set_index(1);
        		}

        		if(this.dsResult.getColumn(0, "YN_SAUPJA") == "Y") {
        			this.rdoSAUPJA.set_index(0);
        		} else {
        			this.rdoSAUPJA.set_index(1);
        		}

        		this.edtNO_SAUP.set_value(this.dsResult.getColumn(0, "NO_SJC"));
        		this.edtADDR.set_value(this.dsResult.getColumn(0, "DS_ADDR"));

        		if(this.dsResult.getColumn(0, "GB_SINGO1") == "2") {
        			this.rdoSINGO.set_index(1);
        		} else {
        			this.rdoSINGO.set_index(0);
        		}

        		this.chkSINGO02.set_value(this.dsResult.getColumn(0, "GB_SINGO2") == "Y" ? true : false);
        		this.chkSINGO03.set_value(this.dsResult.getColumn(0, "GB_SINGO3") == "Y" ? true : false);
        		this.chkSINGO04.set_value(this.dsResult.getColumn(0, "GB_SINGO4") == "Y" ? true : false);
        		this.chkSINGO05.set_value(this.dsResult.getColumn(0, "GB_SINGO5") == "Y" ? true : false);

        		if(this.dsResult.getColumn(0, "YN_SUBWRITE") == "Y") {
        			this.rdoSUBWRITE.set_index(0);
        		} else {
        			this.rdoSUBWRITE.set_index(1);
        		}

        		this.ctclYM_SUPPY.form.TextBox.set_value(this.dsResult.getColumn(0, "YM_SUPPLY"));

        		if(this.gfnIsNull(this.dsResult.getColumn(0, "DT_ENTER"))) {
        			this.ccfDT_ENTER.set_value(this.gfnGetDate());
        		} else {
        			this.ccfDT_ENTER.set_value(this.dsResult.getColumn(0, "DT_ENTER"));
        		}

        		this.mskAM_BEFORETAX.set_value(this.dsResult.getColumn(0, "AM_BEFORETAX"));
        		this.strAmBeforetax = this.gfnIsNull(this.mskAM_BEFORETAX.value) ? 0 : Number(this.mskAM_BEFORETAX.value);
        		this.strAmBeforetaxOrg = this.gfnIsNull(this.mskAM_BEFORETAX.value) ? 0 : Number(this.mskAM_BEFORETAX.value);

        		this.mskAM_REQUESTTAX.set_value(this.dsResult.getColumn(0, "AM_REQUESTTAX"));
        		this.mskAM_JAN.set_value(this.dsResult.getColumn(0, "AM_JAN"));
        		this.mskAM_ILBANRETURN.set_value(this.dsResult.getColumn(0, "AM_ILBANRETURN"));
        		this.mskAM_SINTAC.set_value(this.dsResult.getColumn(0, "AM_SINTAC"));
        		this.mskAM_GITA.set_value(this.dsResult.getColumn(0, "AM_GITA"));
        		this.mskAM_GITA2.set_value(this.dsResult.getColumn(0, "AM_GITA2"));
        		this.mskAM_SETTLE.set_value(this.dsResult.getColumn(0, "AM_SETTLE"));
        		this.mskAM_RETURNTAXSUM.set_value(this.dsResult.getColumn(0, "AM_RETURNTAXSUM"));
        		this.mskAM_WOLRETURNTAX.set_value(this.dsResult.getColumn(0, "AM_WOLRETURNTAX"));
        		this.mskAM_RETURNAPPLY.set_value(this.dsResult.getColumn(0, "AM_RETURNAPPLY"));

        		//그리드 관련 정보
        		var keys = ["NO_INWON", "AM_TOTSUPPLY", "AM_INCOMETAX", "AM_RESTAX", "AM_SPECIALTAX", "AM_ADDTAX", "AM_RETURNTAX", "AM_NAPINCOMETAX", "AM_NAPSPECIALTAX", "AM_NAPRESTAX"];
        		var x = 0;

        		this.dsList.set_enableevent(false);

        		//근로소득 그리드 세팅
        		if(Number(this.dsResult.getColumn(0, "CNT")) > 0) {
        			for(var i = 0 ; i < this.dsResult.rowcount ; i++) {
        				if(this.dsResult.getColumn(i, "CD_GUBUN").substring(0, 1) == "A") {
        					for(var j = 0 ; j < keys.length ; j++) {
        						this.dsList.setColumn(x, keys[j], this.dsResult.getColumn(i, keys[j]));
        					}
        					x++;
        				}
        			}
        		}

        		this.dsList.set_enableevent(true);

        		this.dsList2.set_enableevent(false);

        		//부표작성 그리드 세팅
        		if(this.dsResult.getColumn(0, "YN_SUBWRITE") == "Y") {
        			keys = ["NO_INWON", "AM_TOTSUPPLY", "AM_INCOMETAX", "AM_RESTAX", "AM_SPECIALTAX", "AM_ADDTAX", "AM_RETURNTAX", "AM_NAPINCOMETAX", "AM_NAPSPECIALTAX"];
        			x = 0;

        			for(var i = 0 ; i < this.dsResult.rowcount ; i++) {
        				if(this.dsResult.getColumn(i, "CD_GUBUN").substring(0, 1) == "C") {
        					for(var j = 0 ; j < keys.length ; j++) {
        						this.dsList2.setColumn(x, keys[j], this.dsResult.getColumn(i, keys[j]));
        					}
        					x++;
        				}
        			}
        		}

        		this.dsList2.set_enableevent(true);

        		if(Number(this.dsResult.getColumn(0, "CNT")) == 0) {
        			this.getDataFlag = true;
        			this.tabData.set_tabindex(0);
        			this.gfnAlert("귀속년월(" + this.ctclYM_IMPUTE.form.TextBox.value + ") 신고서가 존재하지 않습니다.\n작성하여 주십시오!" );
        		} else {
        			this.getDataFlag = false;
        			this.fnSelectReturn();  //환급신청 조회
        			this.fnSelectSuccession();  //승계명세 조회
        			this.fnSelectReturnGi(); //기납부세액명세서서 조회
        			this.fnSelectUnReturn(); //전월미환급세액 조정명세서 조회
        		}

        	} else {
        		this.gfnAlert("자료가 존재하지 않습니다.");
        	}

        }
        // 환급신청 조회
        // this.makeReturnData = function() {
        //
        // 	this.dsList3.clearData();
        // 	this.setDxGrid3();
        //
        // 	if(this.dsRResult.rowcount > 0) {
        //
        // 		var keys = ["CD_CODE", "NO_INWON", "AM_TOTSUPPLY", "AM_FIXTAX", "AM_BEFTAX", "AM_BEFTAX_NOW", "AM_BEFTAX_BEF", "AM_DEDCOLLECTTAX","AM_PARTDECOTAX", "AM_RETURNTAX", "AM_RETURNAPPLY"];
        //
        // 		this.dsList3.set_enableevent(false);
        // 		for(var i = 0 ; i < this.dsRResult.rowcount ; i++) {
        // 			for(var j = 0 ; j < keys.length ; j++) {
        // 				this.dsList3.setColumn(i, keys[j], this.dsRResult.getColumn(i, keys[j]));
        // 			}
        // 		}
        // 		this.dsList3.set_enableevent(true);
        // 	}
        // }
        //승계명세 조회
        this.makeSuccessionData = function() {

        	this.dsList4.clearData();
        	this.setDxGrid4();

        	if(this.dsSResult.rowcount > 0) {

        		var keys = ["NO_SJC", "DS_SJC", "DT_SUCCESSION", "CD_SUCCESSION_BASIS", "YM_IMPUTE_SUCC", "YM_SUPPLY_SUCC", "AM_WOLRETURNTAX", "CD_SEQ"];

        		this.dsList4.set_enableevent(false);
        		for(var i = 0 ; i < this.dsSResult.rowcount ; i++) {
        			for(var j = 0 ; j < keys.length ; j++) {
        				this.dsList4.setColumn(i, keys[j], this.dsSResult.getColumn(i, keys[j]));
        			}
        		}
        		this.dsList4.set_enableevent(true);
        	}
        }
        // 기납부세액명세서 조회
        this.makeGiData = function() {

        	if(this.dsList7.rowcount > 0) {
        		this.dsList7.set_enableevent(false);
        		this.chkReson1.set_value(this.dsList7.getColumn(0, "YN_REASON1") == "Y" ? true : false);
        		this.chkReson2.set_value(this.dsList7.getColumn(0, "YN_REASON2") == "Y" ? true : false);
        		this.chkReson3.set_value(this.dsList7.getColumn(0, "YN_REASON3") == "Y" ? true : false);
        		this.chkReson4.set_value(this.dsList7.getColumn(0, "YN_REASON4") == "Y" ? true : false);
        		this.chkReson5.set_value(this.dsList7.getColumn(0, "YN_REASON5") == "Y" ? true : false);
        		this.dsList7.set_enableevent(true);
        	}
        }

        // data 불러오기 조회 후 data 작성
        this.makeFnData = function() {

        	this.dsList.clearData();
        	this.setDxGrid();

        	if(this.dsResult.rowcount > 0) {

        		this.dsList.set_enableevent(false);

        		var jrow = 0;

        		for(var i = 0 ; i < this.dsResult.rowcount ; i++) {

        			switch(this.dsResult.getColumn(i, "TY_SODUK")) {
        				case "A01" : jrow = this.ucA01; break;
        				case "A02" : jrow = this.ucA02; break;
        				case "A03" : jrow = this.ucA03; break;
        				case "A04" : jrow = this.ucA04; break;
        				case "A05" : jrow = this.ucA05; break;
        				case "A06" : jrow = this.ucA06; break;
        				case "A21" : jrow = this.ucA21; break;
        				case "A22" : jrow = this.ucA22; break;
        				case "A25" : jrow = this.ucA25; break;
        				case "A26" : jrow = this.ucA26; break;
        				case "A41" : jrow = this.ucA41; break;
        				case "A42" : jrow = this.ucA42; break;
        				case "A48" : jrow = this.ucA48; break;
        				case "A45" : jrow = this.ucA45; break;
        				case "A46" : jrow = this.ucA46; break;
        				case "A50" : jrow = this.ucA50; break;
        				case "A60" : jrow = this.ucA60; break;
        				case "A69" : jrow = this.ucA69; break;
        				case "A70" : jrow = this.ucA70; break;
        				case "A80" : jrow = this.ucA80; break;
        				case "A90" : jrow = this.ucA90; break;
        			}

        			this.dsList.setColumn(jrow, "NO_INWON", this.dsResult.getColumn(i, "INWON"));		//인원
        			this.dsList.setColumn(jrow, "AM_TOTSUPPLY", this.dsResult.getColumn(i, "SALARY"));	//총지급액
        			this.dsList.setColumn(jrow, "AM_INCOMETAX", this.dsResult.getColumn(i, "TAXSUM"));	//소득세
        			this.dsList.setColumn(jrow, "AM_RESTAX", this.dsResult.getColumn(i, "RESTAXSUM"));	//주민세

        		}

        		this.dsList.set_enableevent(true);

        		this.sbAmSumCalcA("NO_INWON");		//인원
        		this.sbAmSumCalcA("AM_TOTSUPPLY");	//총지급액
        		this.sbAmSumCalcA("AM_INCOMETAX");	//소득세
        		this.sbAmSumCalcA("AM_RESTAX");		//주민세

        		this.mskAM_BEFORETAX.set_value(this.dsResult.getColumn(0, "AM_BEFORETAX"));
        		this.strAmBeforetax = this.gfnIsNull(this.mskAM_BEFORETAX.value) ? 0 : Number(this.mskAM_BEFORETAX.value);

        		var rows = [this.ucA10, this.ucA20, this.ucA30, this.ucA40, this.ucA47, this.ucA50, this.ucA60, this.ucA69, this.ucA70, this.ucA80];
        //
        // 		var tmpAmIncometax;
        // 		var tmpAmAddtax;
        //
        // 		this.dsList.set_enableevent(false);
        // 		for(var i = 0 ; i < rows.length ; i++) {
        //
        // 			tmpAmIncometax = this.gfnIsNull(this.dsList.getColumn(rows[i], "AM_INCOMETAX")) || this.dsList.getColumn(rows[i], "AM_INCOMETAX") < 0 ? 0 : Number(this.dsList.getColumn(rows[i], "AM_INCOMETAX"));
        // 			tmpAmAddtax = this.gfnIsNull(this.dsList.getColumn(rows[i], "AM_ADDTAX")) ? 0 : Number(this.dsList.getColumn(rows[i], "AM_ADDTAX"));
        // 			trace("tmpAmIncometax2: " + tmpAmIncometax);
        // 			if(tmpAmIncometax + tmpAmAddtax > 0) {
        //
        // 				if(this.strAmBeforetax >= (tmpAmIncometax + tmpAmAddtax)) {
        //
        // 					this.dsList.setColumn(rows[i], "AM_RETURNTAX", (tmpAmIncometax + tmpAmAddtax));	//당월조정 환급세액
        // 					this.dsList.setColumn(rows[i], "AM_NAPINCOMETAX", "0");							//납부소득세
        // 					this.strAmBeforetax = this.strAmBeforetax - (tmpAmIncometax + tmpAmAddtax);
        // 					trace("AM_NAPINCOMETAX 03 =>" +  this.dsList.getColumn(rows[i], "AM_NAPINCOMETAX"));
        //
        // 				} else if (this.strAmBeforetax == 0) {
        // 					this.dsList.setColumn(rows[i], "AM_RETURNTAX", "0");
        // 					this.dsList.setColumn(rows[i], "AM_NAPINCOMETAX", (tmpAmIncometax + tmpAmAddtax));
        // 					trace("AM_NAPINCOMETAX 04 =>" +  this.dsList.getColumn(rows[i], "AM_NAPINCOMETAX"));
        // 				} else {
        // 					this.dsList.setColumn(rows[i], "AM_RETURNTAX", this.strAmBeforetax);
        // 					this.dsList.setColumn(rows[i], "AM_NAPINCOMETAX", ((tmpAmIncometax + tmpAmAddtax) - this.strAmBeforetax));
        // 					trace("AM_NAPINCOMETAX 05 =>" +  this.dsList.getColumn(this.ucA10, "AM_NAPINCOMETAX"));
        // 				}
        // 			}
        // 		}

        		for(var i = 0 ; i < rows.length ; i++) {
        		//	this.dsList.setColumn(rows[i], "AM_NAPINCOMETAX", this.dsList.getColumn(rows[i], "AM_INCOMETAX"));
        			this.dsList.setColumn(rows[i], "AM_NAPRESTAX"	, this.dsList.getColumn(rows[i], "AM_RESTAX"));
        		}

        		this.dsList.set_enableevent(true);

        		this.sbAmSumCalcA("AM_NAPINCOMETAX");
        		this.sbAmSumCalcA("AM_NAPRESTAX");
        		this.sbAmCalSum();
        		this.newLogic();

        		this.ctclYM_SUPPY.form.TextBox.set_value(this.ctclYM_JTO.form.TextBox.value);

        		//this.dsList.set_enableevent(true);

        	} else {
        		this.gfnAlert("불러올 자료가 존재하지 않습니다.");
        	}

        }
        //****************************************************************************
        //   그리드 셋팅
        //********************************************************************************
        this.setDxGrid = function() {

        	this.dsList.set_enableevent(false);

        	var nrow;

        	nrow = this.dsList.addRow();
        	this.dsList.setColumn(nrow, "NM_GUBUN", "근로소득-간이세액");
        	this.dsList.setColumn(nrow, "CD_GUBUN", "A01");

        	nrow = this.dsList.addRow();
        	this.dsList.setColumn(nrow, "NM_GUBUN", "근로소득-중도퇴사");
        	this.dsList.setColumn(nrow, "CD_GUBUN", "A02");

        	nrow = this.dsList.addRow();
        	this.dsList.setColumn(nrow, "NM_GUBUN", "근로소득-일용근로");
        	this.dsList.setColumn(nrow, "CD_GUBUN", "A03");

        	nrow = this.dsList.addRow();
        	this.dsList.setColumn(nrow, "NM_GUBUN", "근로소득-연말정산-합계");
        	this.dsList.setColumn(nrow, "CD_GUBUN", "A04");

        	nrow = this.dsList.addRow();
        	this.dsList.setColumn(nrow, "NM_GUBUN", "근로소득-연말정산-분납");
        	this.dsList.setColumn(nrow, "CD_GUBUN", "A05");

        	nrow = this.dsList.addRow();
        	this.dsList.setColumn(nrow, "NM_GUBUN", "근로소득-연말정산-납부");
        	this.dsList.setColumn(nrow, "CD_GUBUN", "A06");

        	nrow = this.dsList.addRow();
        	this.dsList.setColumn(nrow, "NM_GUBUN", "근로소득-가 감 계");
        	this.dsList.setColumn(nrow, "CD_GUBUN", "A10");

        	nrow = this.dsList.addRow();
        	this.dsList.setColumn(nrow, "NM_GUBUN", "퇴직소득-연금계좌");
        	this.dsList.setColumn(nrow, "CD_GUBUN", "A21");

        	nrow = this.dsList.addRow();
        	this.dsList.setColumn(nrow, "NM_GUBUN", "퇴직소득-그    외");
        	this.dsList.setColumn(nrow, "CD_GUBUN", "A22");

        	nrow = this.dsList.addRow();
        	this.dsList.setColumn(nrow, "NM_GUBUN", "퇴직소득-가 감 계");
        	this.dsList.setColumn(nrow, "CD_GUBUN", "A20");

        	nrow = this.dsList.addRow();
        	this.dsList.setColumn(nrow, "NM_GUBUN", "사업소득-매월징수");
        	this.dsList.setColumn(nrow, "CD_GUBUN", "A25");

        	nrow = this.dsList.addRow();
        	this.dsList.setColumn(nrow, "NM_GUBUN", "사업소득-연말정산");
        	this.dsList.setColumn(nrow, "CD_GUBUN", "A26");

        	nrow = this.dsList.addRow();
        	this.dsList.setColumn(nrow, "NM_GUBUN", "사업소득-가 감 계");
        	this.dsList.setColumn(nrow, "CD_GUBUN", "A30");

        	nrow = this.dsList.addRow();
        	this.dsList.setColumn(nrow, "NM_GUBUN", "기타소득-연금계좌");
        	this.dsList.setColumn(nrow, "CD_GUBUN", "A41");

        // 	nrow = this.dsList.addRow();
        // 	this.dsList.setColumn(nrow, "NM_GUBUN", "기타소득-종교인-매월징수");
        // 	this.dsList.setColumn(nrow, "CD_GUBUN", "A43");
        //
        // 	nrow = this.dsList.addRow();
        // 	this.dsList.setColumn(nrow, "NM_GUBUN", "기타소득-종교인-연말정산");
        // 	this.dsList.setColumn(nrow, "CD_GUBUN", "A44");
        //
        // 	nrow = this.dsList.addRow();
        // 	this.dsList.setColumn(nrow, "NM_GUBUN", "기타소득-가상자산");
        // 	this.dsList.setColumn(nrow, "CD_GUBUN", "A49");

        	nrow = this.dsList.addRow();
        	this.dsList.setColumn(nrow, "NM_GUBUN", "기타소득-그    외");
        	this.dsList.setColumn(nrow, "CD_GUBUN", "A42");

        	nrow = this.dsList.addRow();
        	this.dsList.setColumn(nrow, "NM_GUBUN", "기타소득-가 감 계");
        	this.dsList.setColumn(nrow, "CD_GUBUN", "A40");

        	nrow = this.dsList.addRow();
        	this.dsList.setColumn(nrow, "NM_GUBUN", "연금소득-연금계좌");
        	this.dsList.setColumn(nrow, "CD_GUBUN", "A48");

        	nrow = this.dsList.addRow();
        	this.dsList.setColumn(nrow, "NM_GUBUN", "연금소득-매월징수");
        	this.dsList.setColumn(nrow, "CD_GUBUN", "A45");

        	nrow = this.dsList.addRow();
        	this.dsList.setColumn(nrow, "NM_GUBUN", "연금소득-연말정산");
        	this.dsList.setColumn(nrow, "CD_GUBUN", "A46");

        	nrow = this.dsList.addRow();
        	this.dsList.setColumn(nrow, "NM_GUBUN", "연금소득-가 감 계");
        	this.dsList.setColumn(nrow, "CD_GUBUN", "A47");

        	nrow = this.dsList.addRow();
        	this.dsList.setColumn(nrow, "NM_GUBUN", "이 자 소 득");
        	this.dsList.setColumn(nrow, "CD_GUBUN", "A50");

        	nrow = this.dsList.addRow();
        	this.dsList.setColumn(nrow, "NM_GUBUN", "배 당 소 득");
        	this.dsList.setColumn(nrow, "CD_GUBUN", "A60");

        // 	nrow = this.dsList.addRow();
        // 	this.dsList.setColumn(nrow, "NM_GUBUN", "금융 투자 소득");
        // 	this.dsList.setColumn(nrow, "CD_GUBUN", "A71");

        	nrow = this.dsList.addRow();
        	this.dsList.setColumn(nrow, "NM_GUBUN", "저축해지 추징세액");
        	this.dsList.setColumn(nrow, "CD_GUBUN", "A69");

        	nrow = this.dsList.addRow();
        	this.dsList.setColumn(nrow, "NM_GUBUN", "비거주자 양도소득");
        	this.dsList.setColumn(nrow, "CD_GUBUN", "A70");

        	nrow = this.dsList.addRow();
        	this.dsList.setColumn(nrow, "NM_GUBUN", "법 인 원 천");
        	this.dsList.setColumn(nrow, "CD_GUBUN", "A80");

        	nrow = this.dsList.addRow();
        	this.dsList.setColumn(nrow, "NM_GUBUN", "수정신고(세액)");
        	this.dsList.setColumn(nrow, "CD_GUBUN", "A90");

        	nrow = this.dsList.addRow();
        	this.dsList.setColumn(nrow, "NM_GUBUN", "총   합   계");
        	this.dsList.setColumn(nrow, "CD_GUBUN", "A99");

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsList.set_enableevent(true);

        	var exprArray = [];
        	exprArray.push('currow == ' + this.ucA06);
        	exprArray.push('currow == ' + this.ucA90);

        	this.dxGrid.setCellProperty("body" , this.dxGrid.getBindCellIndex("body", "NO_INWON"), "cssclass", 'expr: ' + exprArray.join(' || ') + ' ? "BACK_ReadOnly" : ""');

        	exprArray = [];
        	exprArray.push('currow == ' + this.ucA05);
        	exprArray.push('currow == ' + this.ucA06);
        	exprArray.push('currow == ' + this.ucA69);
        	exprArray.push('currow == ' + this.ucA90);

        	this.dxGrid.setCellProperty("body" , this.dxGrid.getBindCellIndex("body", "AM_TOTSUPPLY"), "cssclass", 'expr: ' + exprArray.join(' || ') + ' ? "BACK_ReadOnly" : ""');

        	exprArray = [];
        	exprArray.push('currow == ' + this.ucA03);
        	exprArray.push('(currow >= ' + this.ucA21 + ' && currow <= ' + this.ucA25 + ' )');
        	exprArray.push('(currow >= ' + this.ucA41 + ' && currow <= ' + this.ucA47 + ' )');
        	exprArray.push('(currow >= ' + this.ucA69 + ' && currow <= ' + this.ucA80 + ' )');

        	this.dxGrid.setCellProperty("body" , this.dxGrid.getBindCellIndex("body", "AM_SPECIALTAX"), "cssclass", 'expr: ' + exprArray.join(' || ') + ' ? "BACK_ReadOnly" : ""');

        	exprArray = [];
        	exprArray.push('(currow >= ' + this.ucA01 + ' && currow <= ' + this.ucA06 + ' )');
        	exprArray.push('(currow >= ' + this.ucA25 + ' && currow <= ' + this.ucA26 + ' )');
        	exprArray.push('(currow >= ' + this.ucA48 + ' && currow <= ' + this.ucA46 + ' )');

        	this.dxGrid.setCellProperty("body" , this.dxGrid.getBindCellIndex("body", "AM_NAPINCOMETAX"), "cssclass", 'expr: ' + exprArray.join(' || ') + ' ? "BACK_ReadOnly" : ""');

        	exprArray = [];
        	exprArray.push('(currow >= ' + this.ucA01 + ' && currow <= ' + this.ucA06 + ' )');
        	exprArray.push('(currow >= ' + this.ucA21 + ' && currow <= ' + this.ucA22 + ' )');
        	exprArray.push('(currow >= ' + this.ucA25 + ' && currow <= ' + this.ucA26 + ' )');
        	exprArray.push('(currow >= ' + this.ucA41 + ' && currow <= ' + this.ucA42 + ' )');
        	exprArray.push('(currow >= ' + this.ucA48 + ' && currow <= ' + this.ucA46 + ' )');
        	this.dxGrid.setCellProperty("body" , this.dxGrid.getBindCellIndex("body", "AM_RETURNTAX"), "cssclass", 'expr: ' + exprArray.join(' || ') + ' ? "BACK_ReadOnly" : ""');

        	exprArray = [];
        	exprArray.push('(currow >= ' + this.ucA01 + ' && currow <= ' + this.ucA06 + ' )');
        	exprArray.push('(currow >= ' + this.ucA21 + ' && currow <= ' + this.ucA26 + ' )');
        	exprArray.push('(currow >= ' + this.ucA41 + ' && currow <= ' + this.ucA47 + ' )');
        	exprArray.push('(currow >= ' + this.ucA69 + ' && currow <= ' + this.ucA80 + ' )');

        	this.dxGrid.setCellProperty("body" , this.dxGrid.getBindCellIndex("body", "AM_NAPSPECIALTAX"), "cssclass", 'expr: ' + exprArray.join(' || ') + ' ? "BACK_ReadOnly" : ""');

        	exprArray = [];
        	exprArray.push('(currow >= ' + this.ucA01 + ' && currow <= ' + this.ucA90 + ' )');

        	this.dxGrid.setCellProperty("body" , this.dxGrid.getBindCellIndex("body", "AM_RESTAX"), "cssclass", 'expr: ' + exprArray.join(' || ') + ' ? "BACK_GangJo" : ""');
        	this.dxGrid.setCellProperty("body" , this.dxGrid.getBindCellIndex("body", "AM_NAPRESTAX"), "cssclass", 'expr: ' + exprArray.join(' || ') + ' ? "BACK_GangJo" : ""');

        	exprArray = [];
        	exprArray.push('currow == ' + this.ucA06);
        	exprArray.push('currow == ' + this.ucA21);
        	exprArray.push('currow == ' + this.ucA41);
        	exprArray.push('currow == ' + this.ucA48);
        	exprArray.push('currow == ' + this.ucA90);

        	this.dxGrid.setCellProperty("body" , this.dxGrid.getBindCellIndex("body", "NO_INWON"), "edittype", 'expr: ' + exprArray.join(' || ') + ' ? "none" : "mask"');

        	exprArray = [];
        	exprArray.push('currow == ' + this.ucA05);
        	exprArray.push('currow == ' + this.ucA06);
        	exprArray.push('currow == ' + this.ucA21);
        	exprArray.push('currow == ' + this.ucA41);
        	exprArray.push('currow == ' + this.ucA48);
        	exprArray.push('currow == ' + this.ucA69);
        	exprArray.push('currow == ' + this.ucA90);

        	this.dxGrid.setCellProperty("body" , this.dxGrid.getBindCellIndex("body", "AM_TOTSUPPLY"), "edittype", 'expr: ' + exprArray.join(' || ') + ' ? "none" : "mask"');

        	exprArray = [];
        	exprArray.push('currow == ' + this.ucA03);
        	exprArray.push('currow == ' + this.ucA20);
        	exprArray.push('currow == ' + this.ucA21);
        	exprArray.push('currow == ' + this.ucA25);
        	exprArray.push('currow == ' + this.ucA40);
        	exprArray.push('currow == ' + this.ucA41);
        	exprArray.push('currow == ' + this.ucA45);
        	exprArray.push('currow == ' + this.ucA46);
        	exprArray.push('currow == ' + this.ucA47);
        	exprArray.push('currow == ' + this.ucA48);
        	exprArray.push('currow == ' + this.ucA69);
        	exprArray.push('currow == ' + this.ucA70);
        	exprArray.push('currow == ' + this.ucA80);

        	this.dxGrid.setCellProperty("body" , this.dxGrid.getBindCellIndex("body", "AM_SPECIALTAX"), "edittype", 'expr: ' + exprArray.join(' || ') + ' ? "none" : "mask"');

        	exprArray = [];
        	exprArray.push('currow == ' + this.ucA01);
        	exprArray.push('currow == ' + this.ucA02);
        	exprArray.push('currow == ' + this.ucA03);
        	exprArray.push('currow == ' + this.ucA04);
        	exprArray.push('currow == ' + this.ucA21);
        	exprArray.push('currow == ' + this.ucA25);
        	exprArray.push('currow == ' + this.ucA26);
        	exprArray.push('currow == ' + this.ucA41);
        	exprArray.push('currow == ' + this.ucA45);
        	exprArray.push('currow == ' + this.ucA46);
        	exprArray.push('currow == ' + this.ucA48);

        	this.dxGrid.setCellProperty("body" , this.dxGrid.getBindCellIndex("body", "AM_RETURNTAX"), "edittype", 'expr: ' + exprArray.join(' || ') + ' ? "none" : "mask"');
        	this.dxGrid.setCellProperty("body" , this.dxGrid.getBindCellIndex("body", "AM_NAPINCOMETAX"), "edittype", 'expr: ' + exprArray.join(' || ') + ' ? "none" : "mask"');

        	exprArray = [];
        	exprArray.push('currow == ' + this.ucA01);
        	exprArray.push('currow == ' + this.ucA02);
        	exprArray.push('currow == ' + this.ucA03);
        	exprArray.push('currow == ' + this.ucA04);
        	exprArray.push('currow == ' + this.ucA20);
        	exprArray.push('currow == ' + this.ucA21);
        	exprArray.push('currow == ' + this.ucA25);
        	exprArray.push('currow == ' + this.ucA26);
        	exprArray.push('currow == ' + this.ucA40);
        	exprArray.push('currow == ' + this.ucA41);
        	exprArray.push('currow == ' + this.ucA45);
        	exprArray.push('currow == ' + this.ucA46);
        	exprArray.push('currow == ' + this.ucA47);
        	exprArray.push('currow == ' + this.ucA48);
        	exprArray.push('currow == ' + this.ucA69);
        	exprArray.push('currow == ' + this.ucA70);

        	this.dxGrid.setCellProperty("body" , this.dxGrid.getBindCellIndex("body", "AM_NAPSPECIALTAX"), "edittype", 'expr: ' + exprArray.join(' || ') + ' ? "none" : "mask"');

        	exprArray = [];
        	exprArray.push('currow == ' + this.ucA21);
        	exprArray.push('currow == ' + this.ucA41);
        	exprArray.push('currow == ' + this.ucA48);

        	this.dxGrid.setCellProperty("body" , this.dxGrid.getBindCellIndex("body", "AM_INCOMETAX"), "edittype", 'expr: ' + exprArray.join(' || ') + ' ? "none" : "mask"');
        	this.dxGrid.setCellProperty("body" , this.dxGrid.getBindCellIndex("body", "AM_RESTAX"), "edittype", 'expr: ' + exprArray.join(' || ') + ' ? "none" : "mask"');
        	this.dxGrid.setCellProperty("body" , this.dxGrid.getBindCellIndex("body", "AM_ADDTAX"), "edittype", 'expr: ' + exprArray.join(' || ') + ' ? "none" : "mask"');

        }

        this.setDxGrid2 = function() {

        	this.dsList2.set_enableevent(false);

        	var nrow;

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 비과세소득 장기주택마련저축");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C01");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 비과세소득 생계형저축");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C02");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 비과세소득 개인연금저축");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C03");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 비과세소득 장기저축성보험차익");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C05");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 비과세소득 조합 등 예탁금");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C06");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 비과세소득 조합 등 출자금");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C07");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 비과세소득 농어가목돈마련저축");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C08");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 비과세소득 우리사주 배당소득");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C10");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 비과세소득 농업회사법인 배당소득");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C20");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 비과세소득 영농ㆍ영어조합법인 배당소득");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C23");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 비과세소득 미분양투자신탁등 배당소득");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C28");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 비과세소득 재형저축 이자ㆍ배당소득");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C40");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 비과세소득 기타 비과세이자소득");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C19");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 비과세소득 기타 비과세배당소득");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C29");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 세금특례 이자소득(5,30%)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C11");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 세금특례 사회기반시설투융자회사 배당소득(5%)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C31");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 세금특례 해외자원개발투자회사 등 배당소득(5%)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C33");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 세금특례 선박투자회사 배당소득(5%)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C34");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 세금특례 영농ㆍ영어조합법인 배당소득");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C54");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 세금특례 농업회사법인 배당소득");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C55");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 세금특례 부동산집합투자기구등 집합투자증권의 배당소득");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C56");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 세금특례 고위험ㆍ고수익투자신탁 배당소득");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C57");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 세금우대 이자소득(9%)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C12");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 세금우대 배당소득(9%)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C22");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 일반세율(14%)분리과세 기타 분리과세 이자소득(14%)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C13");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 일반세율(14%)분리과세 직장공제회 초과반환금(기본)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C18");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 일반세율(14%)분리과세 사회기반시설투ㆍ융자회사 배당소득(14%)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C36");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 일반세율(14%)분리과세 해외자원개발투자회사 등 배당소득(14%)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C37");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 일반세율(14%)분리과세 미분양주택투자신탁 등 배당소득(14%)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C38");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 일반세율(14%)분리과세 선박투자회사 배당소득(14%)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C52");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 일반세율(14%)분리과세 부동산집합투자기구등 집합투자증권의 배당소득");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C58");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 일반세율(14%)분리과세 기타 분리과세 배당소득(14%)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C39");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 일반과세 이자소득");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C14");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 일반과세 배당소득");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C24");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 고배당기업 배당소득(9%)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C91");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 고배당기업 배당소득(25%)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C92");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 비실명소득 비실명이자소득");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C15");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 비실명소득 비실명배당소득");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C25");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 비영업대금이익(25%)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C16");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 출자공동사업자(25%)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C26");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 이자배당소득 계");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C30");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 근로 파견근로에 대한 대가");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C59");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 해지추징세액 벤처기업투자신탁(3.5%)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C41");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 해지추징세액 장기주택마련저축(4,8%)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C42");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 해지추징세액 연금저축(2%)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C43");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 해지추징세액 소기업ㆍ소상공인공제부금(2%)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C44");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 해지추징세액 주택청약종합저축 (6%)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C45");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 해지추징세액 장기집합투자증권저축 (6%)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C46");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "거주자 개인 해지추징세액 계");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C50");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "비거주자 개인 이자(제한)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C61");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "비거주자 개인 배당(제한)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C62");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "비거주자 개인 사업 선박 등 임대,사업(2％)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C63");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "비거주자 개인 사업 인적용역(20％)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C64");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "비거주자 개인 사업 사용료(제한)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C65");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "비거주자 개인 양도 유가증권양도(10 ,20％)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C66");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "비거주자 개인 양도 부동산양도(10,20％)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C67");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "비거주자 개인 기타(20％)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C68");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "비거주자 개인 근로 파견근로에 대한 대가");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C69");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "비거주자 개인 비거주자 계");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C70");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "법인원천 내국법인 이자(14％)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C71");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "법인원천 내국법인 투자신탁의이익(14％)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C72");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "법인원천 내국법인 신탁재산 분배(14％)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C73");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "법인원천 내국법인 수탁회사징수분(14％)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C74");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "법인원천 내국법인 비영업대금의 이익(25%)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C75");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "법인원천 내국법인 비과세 법인소득");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C76");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "법인원천 외국법인 국내원천소득 이자(제한)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C81");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "법인원천 외국법인 국내원천소득 배당(제한)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C82");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "법인원천 외국법인 국내원천소득 선박등 임대,사업(2％)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C83");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "법인원천 외국법인 국내원천소득 인적용역(20％)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C84");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "법인원천 외국법인 국내원천소득 사용료(제한)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C85");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "법인원천 외국법인 국내원천소득 유가증권양도(10,20％)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C86");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "법인원천 외국법인 국내원천소득 부동산양도(10,20％)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C87");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "법인원천 외국법인 국내원천소득 기타(20％)");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C88");

        	nrow = this.dsList2.addRow();
        	this.dsList2.setColumn(nrow, "NM_GUBUN", "법인원천 법인세계");
        	this.dsList2.setColumn(nrow, "CD_GUBUN", "C90");

        	this.gfnGridBeforeSelect(this.dxGrid2);

        	this.dsList2.set_enableevent(true);

        // 	var exprArray = [];
        //
        // 	exprArray.push('currow == 40');
        // 	exprArray.push('currow == 58');
        // 	exprArray.push('currow == 73');
        //
        // 	this.dxGrid2.setCellProperty("body" , this.dxGrid2.getBindCellIndex("body", "NO_INWON"), "cssclass", 'expr: ' + exprArray.join(' || ') + ' ? "BACK_ReadOnly" : ""');
        //
        	exprArray = [];

        	exprArray.push('(currow >= 0 && currow <= 39 )');
        	exprArray.push('(currow >= 42 && currow <= 47 )');
        	exprArray.push('currow == 64');
        	//exprArray.push('(currow >= 64 && currow <= 73 )');

        	this.dxGrid2.setCellProperty("body" , this.dxGrid2.getBindCellIndex("body", "AM_RETURNTAX"), "cssclass", 'expr: ' + exprArray.join(' || ') + ' ? "BACK_ReadOnly" : ""');
        	this.dxGrid2.setCellProperty("body" , this.dxGrid2.getBindCellIndex("body", "AM_NAPINCOMETAX"), "cssclass", 'expr: ' + exprArray.join(' || ') + ' ? "BACK_ReadOnly" : ""');


        	exprArray = [];
        	exprArray.push('(currow >= 0 && currow <= 3 )');
        	exprArray.push('(currow >= 5 && currow <= 9 )');
        	exprArray.push('currow == 64');
        	this.dxGrid2.setCellProperty("body" , this.dxGrid2.getBindCellIndex("body", "AM_INCOMETAX"), "cssclass", 'expr: ' + exprArray.join(' || ') + ' ? "BACK_ReadOnly" : ""');
        	this.dxGrid2.setCellProperty("body" , this.dxGrid2.getBindCellIndex("body", "AM_RESTAX"), "cssclass", 'expr: ' + exprArray.join(' || ') + ' ? "BACK_ReadOnly" : ""');
        	//this.dxGrid2.setCellProperty("body" , this.dxGrid2.getBindCellIndex("body", "AM_SPECIALTAX"), "cssclass", 'expr: ' + exprArray.join(' || ') + ' ? "BACK_ReadOnly" : ""');
        	this.dxGrid2.setCellProperty("body" , this.dxGrid2.getBindCellIndex("body", "AM_ADDTAX"), "cssclass", 'expr: ' + exprArray.join(' || ') + ' ? "BACK_ReadOnly" : ""');

        	exprArray = [];
        	exprArray.push('(currow >= 42 && currow <= 47 )');
        	exprArray.push('currow == 48');
        	this.dxGrid2.setCellProperty("body" , this.dxGrid2.getBindCellIndex("body", "AM_TOTSUPPLY"), "cssclass", 'expr: ' + exprArray.join(' || ') + ' ? "BACK_ReadOnly" : ""');
        	//this.dxGrid2.setCellProperty("body" , this.dxGrid2.getBindCellIndex("body", "AM_SPECIALTAX"), "cssclass", 'expr: ' + exprArray.join(' || ') + ' ? "BACK_ReadOnly" : ""');
        	//this.dxGrid2.setCellProperty("body" , this.dxGrid2.getBindCellIndex("body", "AM_NAPSPECIALTAX"), "cssclass", 'expr: ' + exprArray.join(' || ') + ' ? "BACK_ReadOnly" : ""');

        	exprArray = [];
        	exprArray.push('(currow >= 0 && currow <= 3 )');
        	exprArray.push('(currow >= 5 && currow <= 9 )');
        	exprArray.push('(currow >= 18 && currow <= 19 )');
        	exprArray.push('(currow >= 24 && currow <= 39 )');
        	exprArray.push('(currow >= 42 && currow <= 48 )');
        	exprArray.push('(currow >= 59 && currow <= 73 )');
        	this.dxGrid2.setCellProperty("body" , this.dxGrid2.getBindCellIndex("body", "AM_SPECIALTAX"), "cssclass", 'expr: ' + exprArray.join(' || ') + ' ? "BACK_ReadOnly" : ""');
        	//this.dxGrid2.setCellProperty("body" , this.dxGrid2.getBindCellIndex("body", "AM_NAPSPECIALTAX"), "cssclass", 'expr: ' + exprArray.join(' || ') + ' ? "BACK_ReadOnly" : ""');

        	exprArray = [];
        	exprArray.push('(currow >= 0 && currow <= 39 )');
        	exprArray.push('(currow >= 42 && currow <= 48 )');
        	exprArray.push('(currow >= 59 && currow <= 73 )');
        	this.dxGrid2.setCellProperty("body" , this.dxGrid2.getBindCellIndex("body", "AM_NAPSPECIALTAX"), "cssclass", 'expr: ' + exprArray.join(' || ') + ' ? "BACK_ReadOnly" : ""');

        }

        this.setDxGrid3 = function() {

        	this.dsList3.set_enableevent(false);

        	var nrow;

        	nrow = this.dsList3.addRow();
        	this.dsList3.setColumn(nrow, "NM_GUBUN", "근로소득");
        	this.dsList3.setColumn(nrow, "CD_GUBUN", "14");

        	nrow = this.dsList3.addRow();
        	this.dsList3.setColumn(nrow, "NM_GUBUN", "퇴직소득");
        	this.dsList3.setColumn(nrow, "CD_GUBUN", "21");

        	nrow = this.dsList3.addRow();
        	this.dsList3.setColumn(nrow, "NM_GUBUN", "사업소득");
        	this.dsList3.setColumn(nrow, "CD_GUBUN", "13");

        	nrow = this.dsList3.addRow();
        	this.dsList3.setColumn(nrow, "NM_GUBUN", "기타소득");
        	this.dsList3.setColumn(nrow, "CD_GUBUN", "16");

        	nrow = this.dsList3.addRow();
        	this.dsList3.setColumn(nrow, "NM_GUBUN", "연금소득");
        	this.dsList3.setColumn(nrow, "CD_GUBUN", "17");

        	nrow = this.dsList3.addRow();
        	this.dsList3.setColumn(nrow, "NM_GUBUN", "이자소득");
        	this.dsList3.setColumn(nrow, "CD_GUBUN", "11");

        	nrow = this.dsList3.addRow();
        	this.dsList3.setColumn(nrow, "NM_GUBUN", "배당소득");
        	this.dsList3.setColumn(nrow, "CD_GUBUN", "12");

        	nrow = this.dsList3.addRow();
        	this.dsList3.setColumn(nrow, "NM_GUBUN", "양도소득");
        	this.dsList3.setColumn(nrow, "CD_GUBUN", "22");

        	nrow = this.dsList3.addRow();
        	this.dsList3.setColumn(nrow, "NM_GUBUN", "법인세");
        	this.dsList3.setColumn(nrow, "CD_GUBUN", "31");

        	nrow = this.dsList3.addRow();
        	this.dsList3.setColumn(nrow, "NM_GUBUN", "금융투자소득세");
        	this.dsList3.setColumn(nrow, "CD_GUBUN", "24");

        	nrow = this.dsList3.addRow();
        	this.dsList3.setColumn(nrow, "NM_GUBUN", "수정신고");
        	this.dsList3.setColumn(nrow, "CD_GUBUN", "90");

        // 	nrow = this.dsList3.addRow();
        // 	this.dsList3.setColumn(nrow, "NM_GUBUN", "소득 계");
        // 	this.dsList3.setColumn(nrow, "CD_GUBUN", "99");

        	this.gfnGridBeforeSelect(this.dxGrid3);

        	this.dsList3.set_enableevent(true);
        }

        this.setDxGrid4 = function() {

        	this.dsList4.set_enableevent(false);

        	var nrow;

        	nrow = this.dsList4.addRow();
        	this.dsList4.setColumn(nrow, "CD_SEQ", "1");

        	nrow = this.dsList4.addRow();
        	this.dsList4.setColumn(nrow, "CD_SEQ", "2");

        	nrow = this.dsList4.addRow();
        	this.dsList4.setColumn(nrow, "CD_SEQ", "3");

        	nrow = this.dsList4.addRow();
        	this.dsList4.setColumn(nrow, "CD_SEQ", "4");

        	nrow = this.dsList4.addRow();
        	this.dsList4.setColumn(nrow, "CD_SEQ", "5");

        	nrow = this.dsList4.addRow();
        	this.dsList4.setColumn(nrow, "CD_SEQ", "6");

        	nrow = this.dsList4.addRow();
        	this.dsList4.setColumn(nrow, "CD_SEQ", "7");

        	nrow = this.dsList4.addRow();
        	this.dsList4.setColumn(nrow, "CD_SEQ", "8");

        	nrow = this.dsList4.addRow();
        	this.dsList4.setColumn(nrow, "CD_SEQ", "9");

        	this.gfnGridBeforeSelect(this.dxGrid4);

        	this.dsList4.set_enableevent(true);
        }

        this.divData_tabData_onchanged = function(obj,e) {

        	if(e.postindex == 1) {
        		if(this.rdoSUBWRITE.value != "Y") {
        			this.tabData.set_tabindex(0);
        			this.gfnAlert("부표를 작성하시려면 부표작성함을 선택해 주십시오.");
        		}
        	}

        	if(e.postindex == 2) {
        		if(this.chkSINGO04.value != true) {
        			this.tabData.set_tabindex(0);
        			this.gfnAlert("환급신청서부표를 작성하시려면 환급신청을 선택해 주십시오.");
        		}
        	}

        	if(e.postindex == 3) {
        // 승계명세 임시주석처리
        // 		if(this.chkSINGO05.value != true) {
        // 			this.tabData.set_tabindex(0);
        // 			this.gfnAlert("승계명세 작성하시려면 승계명세를 선택해 주십시오.");
        // 		}
        	}

        	if(e.postindex == 4) {
        		if(this.chkSINGO04.value != true) {
        			this.tabData.set_tabindex(0);
        			this.gfnAlert("기납부세액명세서를 작성하시려면 환급신청을 선택해 주십시오.");
        		}
        	}
        };

        this.mask_onkillfocus = function(obj,e) {

        //	var val = this.gfnIsNull(obj.value) ? "" : obj.value;

        // 	if(val.length >= 15) {
        // 		obj.set_value(0);
        // 		obj.setFocus();
        // 	}

        	//this.sbAmCalSum();
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.dsList_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "FLAG" || e.columnid == "NM_GUBUN" || e.columnid == "CD_GUBUN") {
        		return;
        	}

        	trace("dsList_oncolumnchanged");
        	this.dxGridValidate(e.row, e.columnid);

        	if(e.columnid == "AM_NAPRESTAX"){
        		trace("AM_NAPRESTAX 지방소득세");
        		this.sbAmSumCalcA("AM_NAPRESTAX");
        	}

        	//당월조정환급세액
        	if(e.columnid == "AM_RETURNTAX"){
        		var amIncomTax  = nexacro.toNumber(obj.getColumn(obj.rowposition, "AM_INCOMETAX"),0) + nexacro.toNumber(obj.getColumn(obj.rowposition, "AM_ADDTAX"),0);	//소득세
        		var amReturnTax = nexacro.toNumber(e.newvalue,0);	//당월조정환급세액

        		if ( amIncomTax <= 0) {
        		   obj.setColumn(e.row, "AM_RETURNTAX", 0);
        		   obj.setColumn(e.row, "AM_NAPINCOMETAX", 0);
        		 } else if (amIncomTax < amReturnTax) {
        		   obj.setColumn(e.row, "AM_RETURNTAX", amIncomTax);
        		   obj.setColumn(e.row, "AM_NAPINCOMETAX", 0);
        		   amReturnTax = amIncomTax ;
        		 } else {
        		   obj.setColumn(e.row, "AM_NAPINCOMETAX", (amIncomTax - amReturnTax));
        		 }

        		//당월조정환급세액 총계계산
        		obj.setColumn(this.ucA99, "AM_RETURNTAX", this.fnGetRowSum("AM_RETURNTAX"));
        		this.mskAM_RETURNTAXSUM.set_value(this.fnGetRowSum("AM_RETURNTAX"));
        		this.sbAmCalSum();
        		//소득세등(가산세포함) 계산
         		//this.sbAmSumCalcA("AM_RETURNTAX");
        // 		this.sbAmSumCalcA("AM_NAPINCOMETAX");
        		//obj.setColumn(e.row, "AM_NAPINCOMETAX", (amIncomTax - amReturnTax));
        		//소득세등(가산세포함) 총계 계산
        		obj.setColumn(this.ucA99, "AM_NAPINCOMETAX", this.fnGetRowSum("AM_NAPINCOMETAX"));

        // 		if (e.row == this.ucA50 || e.row == this.ucA60 || e.row == this.ucA69 || e.row == this.ucA70 || e.row == this.ucA80 ) // 부표의 있는 항목의 값수정시
        // 		{
        // 		    trace(" 법인 원천세의 환급세액 변경시 e.row=>" + e.row);
        // 			this.sbAmSumCalcB(e.row, e.columnid);
        // 		}
        	}

        	if(e.oldvalue != e.newvalue) {
        		this.dsList.setColumn(e.row, "FLAG" , "U");
        		this.gfnSetFormStatus(this, "I");
        	}

        };

        this.fnGetRowSum = function (colId)
        {
        	var rowSum = 0;

        	rowSum += nexacro.toNumber(this.dsList.getColumn(this.ucA10, colId),0);
        	rowSum += nexacro.toNumber(this.dsList.getColumn(this.ucA20, colId),0);
        	rowSum += nexacro.toNumber(this.dsList.getColumn(this.ucA30, colId),0);
        	rowSum += nexacro.toNumber(this.dsList.getColumn(this.ucA40, colId),0);
        	rowSum += nexacro.toNumber(this.dsList.getColumn(this.ucA47, colId),0);
        	rowSum += nexacro.toNumber(this.dsList.getColumn(this.ucA50, colId),0);
        	rowSum += nexacro.toNumber(this.dsList.getColumn(this.ucA60, colId),0);
        	rowSum += nexacro.toNumber(this.dsList.getColumn(this.ucA69, colId),0);
        	rowSum += nexacro.toNumber(this.dsList.getColumn(this.ucA70, colId),0);
        	rowSum += nexacro.toNumber(this.dsList.getColumn(this.ucA80, colId),0);
        	rowSum += nexacro.toNumber(this.dsList.getColumn(this.ucA90, colId),0);

        	return rowSum;

        };

        this.fnSetJojung = function(colID){
        trace(" fnSetJojung rowcount =>" + this.dsList7.rowcount);
        var sExpr = this.ucFlag +" != 'D' && "+ this.ucFlag + " != 'DU'";	//삭제 데이터 제외
        var sExpr1 = this.ucFlag +" != 'D' && "+ this.ucFlag + " != 'DU'" + " && TY_GUBUN == '0'";	//삭제 데이터 제외
        	if (colID = "AM_INCOMETAX" || this.gfnIsNull(colID) ) {
        		var amASum = nexacro.toNumber(this.gfnIsNull(sExpr,this.dsList5.getCaseSum("AM_INCOMETAX")) ? 0 : this.dsList5.getCaseSum(sExpr,"AM_INCOMETAX"),0);	//원천징수합
        		var amBSum = nexacro.toNumber(this.gfnIsNull(sExpr1,this.dsList6.getCaseSum("AM_INCOMETAX")) ? 0 : this.dsList6.getCaseSum(sExpr1,"AM_INCOMETAX") ,0);	//기납세액합
        		var amCha = amBSum - amASum
        		if ( this.dsList7.rowcount == 0 ) {
        			this.dsList7.clearData();
        			var nRow = this.dsList7.addRow();
        			this.dsList7.setColumn(nRow, this.ucFlag, "I");

        			this.gfnSetFormStatus(this, "I");

        		}
        		trace(" fnSetJojung amCha=>" + amCha);
        		this.mskAM_INCOMTAX = amASum;
        		this.mskAM_INCOMTAX_GI = amBSum;
        		this.mskAM_INCOMTAX_DIFF = amCha;

        		this.dsList7.setColumn(0, "AM_INCOMETAX_CHA" , amCha);
        		this.dsList7.setColumn(0, "AM_INCOMETAX" , amASum);
        		this.dsList7.setColumn(0, "AM_INCOMETAX_GI" , amBSum);
        	}
        	if (colID = "AM_SPECIALTAX" || this.gfnIsNull(colID)) {
        		var amASum = nexacro.toNumber(this.gfnIsNull(this.dsList5.getCaseSum(sExpr,"AM_SPECIALTAX")) ? 0 : this.dsList5.getCaseSum(sExpr,"AM_SPECIALTAX"),0);	//원천징수합
        		var amBSum = nexacro.toNumber(this.gfnIsNull(this.dsList6.getCaseSum(sExpr1,"AM_SPECIALTAX")) ? 0 : this.dsList6.getCaseSum(sExpr1,"AM_SPECIALTAX"),0);	//기납세액합
        		var amCha = amBSum - amASum
        		if ( this.dsList7.rowcount == 0 ) {
        			this.dsList7.clearData();
        			var nRow = this.dsList7.addRow();
        			this.dsList7.setColumn(nRow, this.ucFlag, "I");

        			this.gfnSetFormStatus(this, "I");
        		}
        		this.mskAM_SPECIALTAX = amASum;
        		this.mskAM_SPECIALTAX_GI = amBSum;
        		this.mskAM_SPECIALTAX_DIFF =amCha;
        		this.dsList7.setColumn(0, "AM_SPECIALTAX_CHA" , amCha);
        		this.dsList7.setColumn(0, "AM_SPECIALTAX" , amASum);
        		this.dsList7.setColumn(0, "AM_SPECIALTAX_GI" , amBSum);
        	}
        trace(" fnSetJojung rowcount2 =>" + this.dsList7.rowcount);
        }

        this.dsList2_oncolumnchanged = function(obj,e)
        {
        	trace("dsList2_oncolumnchanged!!!!");

        	if(e.columnid == "FLAG" || e.columnid == "NM_GUBUN" || e.columnid == "CD_GUBUN") {
        		return;
        	}

        	this.dxGrid2Validate(e.row, e.columnid);

        	if(e.oldvalue != e.newvalue) {
        		this.dsList2.setColumn(e.row, "FLAG" , "U");
        		this.gfnSetFormStatus(this, "I");
        	}
        };

        this.dsList3_oncolumnchanged = function(obj,e)
        {
        	trace("dsList3_oncolumnchanged!!!!");
        	if(e.columnid == "FLAG" || e.columnid == "NM_GUBUN" || e.columnid == "CD_GUBUN") {
        		return;
        	}

        	this.dxGrid3Validate(e.row, e.columnid);

        	if(e.oldvalue != e.newvalue) {
        		this.dsList3.setColumn(e.row, "FLAG" , "U");
        		this.gfnSetFormStatus(this, "I");
        	}
        };

        this.dsList4_oncolumnchanged = function(obj,e)
        {
        	trace("dsList4_oncolumnchanged!!!!");
        	if(e.columnid == "CD_SEQ") {
        		return;
        	}

        	this.dxGrid4Validate(e.row, e.columnid);

        	if(e.oldvalue != e.newvalue) {
        		this.dsList4.setColumn(e.row, "FLAG" , "U");
        		this.gfnSetFormStatus(this, "I");
        	}
        };

        this.dsList5_oncolumnchanged = function(obj,e)
        {
        	trace("dsList5_oncolumnchanged!!!!");
        	if(e.columnid == "FLAG" || e.columnid == "NM_GUBUN" || e.columnid == "CD_GUBUN") {
        		return;
        	}

        	this.dxGrid5Validate(e.row, e.columnid);

        	if(e.columnid == "AM_INCOMETAX" || e.columnid == "AM_SPECIALTAX" ) {
        	    this.fnSetJojung(e.columnid);
        	}

        // 	if(e.oldvalue != e.newvalue) {
        // 		//this.dsList5.setColumn(e.row, "FLAG" , "U");
        // 		this.gfnSetFormStatus(this, "I");
        // 	}
        };

        this.dsList6_oncolumnchanged = function(obj,e)
        {
        	trace("dsList6_oncolumnchanged!!!!");
        	if(e.columnid == "FLAG" || e.columnid == "NM_GUBUN" || e.columnid == "CD_GUBUN") {
        		return;
        	}

        	this.dxGrid6Validate(e.row, e.columnid);

        	if(e.columnid == "AM_INCOMETAX" || e.columnid == "AM_SPECIALTAX" ) {
        	    this.fnSetJojung(e.columnid);
        	}

        // 	if(e.oldvalue != e.newvalue) {
        // 		//this.dsList6.setColumn(e.row, "FLAG" , "U");
        // 		this.gfnSetFormStatus(this, "I");
        // 	}
        };

        this.dsList7_oncolumnchanged = function(obj,e)
        {
        trace("dsList7_oncolumnchanged!!!!");
        	if(e.columnid == "FLAG" ) {
        		return;
        	}

        	if(this.gfnDsIsUpdated(obj)){
        		var rowType = obj.getRowType(e.row);
        		this.setJojungForm =  "U";
        		this.gfnSetFormStatus(this, (rowType == 2 ? "I" : "U"));
        	}
        	//this.dxGrid7Validate(e.row, e.columnid);

        // 	if(e.oldvalue != e.newvalue) {
        // 		this.dsList7.setColumn(e.row, "FLAG" , "U");
        // 		this.gfnSetFormStatus(this, "I");
        // 	}
        };

        this.dsList8_oncolumnchanged = function(obj,e)
        {
            trace("dsList8_oncolumnchanged!!!!");
        	if(e.columnid == "FLAG") {
        		return;
        	}

        	if(e.columnid == "AM_RETURNTAX" || e.columnid == "AM_NAPBUTAX" ) {
        	    var amUnSum = nexacro.toNumber(this.gfnIsNull(this.dsList8.getColumn(this.dsList8.rowposition, "AM_RETURNTAX")) ? 0 : this.dsList8.getColumn(this.dsList8.rowposition, "AM_RETURNTAX"));
        		var amGiSum =  nexacro.toNumber(this.gfnIsNull(this.dsList8.getColumn(this.dsList8.rowposition, "AM_NAPBUTAX")) ? 0 : this.dsList8.getColumn(this.dsList8.rowposition, "AM_NAPBUTAX"));
        		var amCha = amUnSum - amGiSum; // 차감잔액  = 전월미환급세액 - 기환급세액

        		this.dsList8.setColumn(this.dsList8.rowposition,"AM_BEFORETAX" , amCha);
        	}
        };

        this.dsList9_oncolumnchanged = function(obj,e)
        {
            trace("dsList9_oncolumnchanged!!!!");
        	if(e.columnid == "FLAG") {
        		return;
        	}

        	if(e.columnid == "AM_UNRETURN" || e.columnid == "AM_GIRETURN" || e.columnid=="AM_DANGRETURN" || e.columnid=="AM_DANGJOJUNGRETURN" ) {
        	    var amUnSum = nexacro.toNumber(this.gfnIsNull(this.dsList9.getColumn(this.dsList9.rowposition, "AM_UNRETURN")) ? 0 : this.dsList9.getColumn(this.dsList9.rowposition, "AM_UNRETURN"));
        		var amGiSum =  nexacro.toNumber(this.gfnIsNull(this.dsList9.getColumn(this.dsList9.rowposition, "AM_GIRETURN")) ? 0 : this.dsList9.getColumn(this.dsList9.rowposition, "AM_GIRETURN"));
        		var amCha = amUnSum - amGiSum; // 차감잔액  = 전월미환급세액 - 기환급세액

        		var amDangSum =  nexacro.toNumber(this.gfnIsNull(this.dsList9.getColumn(this.dsList9.rowposition, "AM_DANGRETURN")) ? 0 : this.dsList9.getColumn(this.dsList9.rowposition, "AM_DANGRETURN"));
        		var amJoSum =  amCha + amDangSum; //조정대상환급세액  = 차감잔액 + 당월발생환급세액

        		var amDangJoSum =  nexacro.toNumber(this.gfnIsNull(this.dsList9.getColumn(this.dsList9.rowposition, "AM_DANGJOJUNGRETURN")) ? 0 : this.dsList9.getColumn(this.dsList9.rowposition, "AM_DANGJOJUNGRETURN"));
        		var amReSum =  amJoSum  - amDangJoSum; // 차월이월 환급세액 = 조정대상환급세액 - 당월조정환급세액

        		this.dsList9.setColumn(this.dsList9.rowposition,"AM_CHARETURN" , amCha); // 차감잔액
        		this.dsList9.setColumn(this.dsList9.rowposition,"AM_JOJUNGRETURN" , amJoSum); //조정대상환급세액
        		this.dsList9.setColumn(this.dsList9.rowposition,"AM_RETURNTAX" , amReSum); // 차월이월 환급세액
        	}
        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fn_OnChanged = function(obj,e)
        {
        	if(e.postvalue != e.prevalue){
        		if(this.dsResult.rowcount > 0){
        			this.gfnSetFormStatus(this, "U");
        		}
        		this.sbAmCalSum();
        	}
        };

        this.divData_ccfDT_ENTER_onchanged = function(obj,e)
        {
        	if(e.postvalue != e.prevalue){
        		if(this.dsResult.rowcount > 0){
        			this.gfnSetFormStatus(this, "U");
        		}
        	}
        };

        this.fn_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != e.prevalue){
        		if(this.dsResult.rowcount > 0){
        			this.gfnSetFormStatus(this, "U");
        		}
        	}
        };

        this.fnCalAfterCDTextChanged = function (id)
        {
        	if(id == "ctclYM_SUPPY"){
        		if(this.dsResult.rowcount > 0){
        			this.gfnSetFormStatus(this, "U");
        		}
        	}
        };

        this.fn_chk_onchanged = function(obj,e)
        {
        	if(e.postvalue != e.prevalue){
        		if(this.dsResult.rowcount > 0){
        			this.gfnSetFormStatus(this, "U");
        		}
        	}
        };

        this.fn_jojungItem_onchanged = function(obj,e)
        {
        	if(e.postvalue != e.prevalue){
        		if(this.dsGResult2.rowcount > 0){
        			this.gfnSetFormStatus(this, "U");
        		}
        	}
        };

        this.divData_tabData_tab1_mskAM_RETURNTAXSUM_onchanged = function(obj,e)
        {
        	if(e.postvalue != e.prevalue){
        		if(this.dsResult.rowcount > 0){
        			this.gfnSetFormStatus(this, "U");

        			var amSettle =  nexacro.toNumber(this.mskAM_SETTLE.value,0);
        			var amWolretuntex = amSettle - nexacro.toNumber(e.postvalue,0);

        			this.mskAM_WOLRETURNTAX.set_value(amWolretuntex);
        		}
        	}
        };

        //원천징수신고내역 버튼 클릭
        this.divData_tabData_tab5_btnIncomtax_onclick = function(obj,e)
        {
        	var param = {};
        	param.CD_CORP    = this.ccfCD_CORP.form.CDTextBox.value;
        	param.DS_CORP    = this.ccfCD_CORP.form.DSTextBox.value;
        	param.YR_WORK = this.dsSearch.getColumn(0, "YM_FROM").substr(0,4) - 1;

        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DHV_RETURNINCOMETAXDLG", sPopupCallBack, param, 800, 600);
        };

        //원천징수신고내역 팝업 콜백(확인 버튼)
        this.fnPopupCallback = function(svcID, val) {
        	this.fnPopupSetData(val);
        };

        //원천징수신고내역 팝업 콜백 데이터 셋팅
        this.fnPopupSetData = function(val){
        	var nIndex2 = this.dxGrid5.findEventHandler("onkeydown", this.fnGrid_onkeydown, this );
        	if(nIndex2 == -1) this.dxGrid5.addEventHandler("onkeydown", this.fnGrid_onkeydown, this);
        	var banFlag = "I";

        	this.dsResultIncomeTax = new Dataset();
        	this.dsResultIncomeTax.clearData();

         	if(!this.gfnIsNull(val)) {
        		this.dsResultIncomeTax.loadXML(val);

        		var rowCnt = this.dsList5.rowcount;
        		var rowPos = this.dsList5.rowposition;

        		this.dsList5.set_enableevent(false);

        		var nRow = 0;
        		trace("원천징수신고내역 리턴->" + rowPos);
        		trace("원천징수신고내역->" + this.dsResultIncomeTax.saveXML());

        		for(var i = 0 ; i < this.dsResultIncomeTax.rowcount ; i++){

        			nRow = this.dsList5.addRow();
        			banFlag = "I";

        			this.dsList5.setColumn(nRow, "CD_GUBUN"   	, this.dsResultIncomeTax.getColumn(i, "CD_GUBUN"));
        			this.dsList5.setColumn(nRow, "NM_GUBUN"  	, this.dsResultIncomeTax.getColumn(i, "CD_GUBUN"));
        			this.dsList5.setColumn(nRow, "YM_WORK"  	, this.dsResultIncomeTax.getColumn(i, "YM_IMPUTE"));
        			this.dsList5.setColumn(nRow, "YM_JIGUB"  	,this.dsResultIncomeTax.getColumn(i, "YM_SUPPLY"));
        			this.dsList5.setColumn(nRow, "CD_CODE"	, this.dsResultIncomeTax.getColumn(i, "CD_CODE"));
        			this.dsList5.setColumn(nRow, "NO_INWON"   	, this.dsResultIncomeTax.getColumn(i, "NO_INWON"));
        			this.dsList5.setColumn(nRow, "AM_TOTSUPPLY"  , this.dsResultIncomeTax.getColumn(i, "AM_TOTSUPPLY"));
        			this.dsList5.setColumn(nRow, "AM_INCOMETAX"  , this.dsResultIncomeTax.getColumn(i, "AM_INCOMETAX"));
        			this.dsList5.setColumn(nRow, "AM_SPECIALTAX" , this.dsResultIncomeTax.getColumn(i, "AM_SPECIALTAX"));
        			this.dsList5.setColumn(nRow, "AM_ADDTAX"  	 , this.dsResultIncomeTax.getColumn(i, "AM_ADDTAX"));

        			this.dsList5.setColumn(nRow, this.ucFlag , banFlag);

        	 	}
        		//trace("FLAG 1 =>" + this.dsList.getColumn(this.dsList.rowposition, this.ucFlag));
        		this.dsList5.set_enableevent(true);
        		this.fnSetJojung("AM_INCOMETAX");

        		this.gfnSetFormStatus(this, banFlag);
        		//trace("FLAG 2 =>" + this.dsList.getColumn(this.dsList.rowposition, this.ucFlag));
         	}
        }
        //기납부세액 불러오기
        this.divData_tabData_tab5_btnGiData_onclick = function(obj,e)
        {
        	var param = {};
        	param.CD_CORP    = this.ccfCD_CORP.form.CDTextBox.value;
        	param.DS_CORP    = this.ccfCD_CORP.form.DSTextBox.value;
        	param.YR_WORK = this.dsSearch.getColumn(0, "YM_FROM").substr(0,4) -1;
        	param.TY_GUBUN   = this.divData.form.tabData.tab5.form.rdoGiGubun2.value;

        	var sPopupCallBack = "fnPaymentPopupCallback";
        	this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DHV_RETURNPAYMENTDLG", sPopupCallBack, param, 800, 600);
        };

        //기납부세액 팝업 콜백(확인 버튼)
        this.fnPaymentPopupCallback = function(svcID, val) {
        	this.fnPopupPaymentSetData(val);
        };

        //기납부세액 팝업 콜백 데이터 셋팅
        this.fnPopupPaymentSetData = function(val){
        // 	var nIndex2 = this.dxGrid6.findEventHandler("onkeydown", this.fnGrid_onkeydown, this );
        // 	if(nIndex2 == -1) this.dxGrid6.addEventHandler("onkeydown", this.fnGrid_onkeydown, this);
        	var banFlag = "I";

        	this.dsResultPayment = new Dataset();
        	this.dsResultPayment.clearData();

         	if(!this.gfnIsNull(val)) {
        		this.dsResultPayment.loadXML(val);

        		var rowCnt = this.dsList6.rowcount;
        		var rowPos = this.dsList6.rowposition;

        		this.dsList6.set_enableevent(false);

        		var nRow = 0;

        		trace("기납부세액->" + this.dsResultPayment.saveXML());

        		for(var i = 0 ; i < this.dsResultPayment.rowcount ; i++){

        			nRow = this.dsList6.addRow();
        			banFlag = "I";
        			trace("기납부세액 리턴->" + rowPos);
        			this.dsList6.setColumn(nRow, "CD_GUBUN"   	, this.dsResultPayment.getColumn(i, "CD_GUBUN"));
        			this.dsList6.setColumn(nRow, "NM_GUBUN"  	, this.dsResultPayment.getColumn(i, "CD_GUBUN"));
        			this.dsList6.setColumn(nRow, "ID_SABUN"  	, this.dsResultPayment.getColumn(i, "ID_SABUN"));
        			this.dsList6.setColumn(nRow, "DS_NAME"  	, this.dsResultPayment.getColumn(i, "DS_HNAME"));
        			this.dsList6.setColumn(nRow, "ID_RESIDENT"	, this.dsResultPayment.getColumn(i, "ID_RESIDENT"));
        			this.dsList6.setColumn(nRow, "TY_GUBUN"   	, "0");
        			this.dsList6.setColumn(nRow, "CD_PREPAY"  , "");
        			this.dsList6.setColumn(nRow, "DS_PREPAY"  , "");
        			this.dsList6.setColumn(nRow, "AM_INCOMETAX" , this.dsResultPayment.getColumn(i, "AM_INCTAXBEF"));
        			this.dsList6.setColumn(nRow, "AM_SPECIALTAX" , this.dsResultPayment.getColumn(i, "AM_SPECIALTAX"));
        			this.dsList6.setColumn(nRow, this.ucFlag , banFlag);
        		    if (!this.gfnIsNull(this.dsResultPayment.getColumn(i, "DS_PREPAY1")))
        		    {
        		    	nRow = this.dsList6.addRow();
        				this.dsList6.setColumn(nRow, "CD_GUBUN"   	, this.dsResultPayment.getColumn(i, "CD_GUBUN"));
        				this.dsList6.setColumn(nRow, "NM_GUBUN"  	, this.dsResultPayment.getColumn(i, "CD_GUBUN"));
        				this.dsList6.setColumn(nRow, "ID_SABUN"  	, this.dsResultPayment.getColumn(i, "ID_SABUN"));
        				this.dsList6.setColumn(nRow, "DS_NAME"  	, this.dsResultPayment.getColumn(i, "DS_HNAME"));
        				this.dsList6.setColumn(nRow, "ID_RESIDENT"	, this.dsResultPayment.getColumn(i, "ID_RESIDENT"));
        				this.dsList6.setColumn(nRow, "TY_GUBUN"   	, this.dsResultPayment.getColumn(i, "TY_GUBUN1"));
        				this.dsList6.setColumn(nRow, "CD_PREPAY"  , this.dsResultPayment.getColumn(i, "CD_PREPAY1").replace(/\-/gi,''));
        				this.dsList6.setColumn(nRow, "DS_PREPAY"  , this.dsResultPayment.getColumn(i, "DS_PREPAY1"));
        				this.dsList6.setColumn(nRow, "AM_INCOMETAX" , this.dsResultPayment.getColumn(i, "AM_INCTAXBEF1"));
        				this.dsList6.setColumn(nRow, "AM_SPECIALTAX", this.dsResultPayment.getColumn(i, "AM_SPECIALTAX1"));
        				this.dsList6.setColumn(nRow, this.ucFlag , banFlag);
        		    }
        		    if (!this.gfnIsNull(this.dsResultPayment.getColumn(i, "DS_PREPAY2")))
        		    {
        		    	nRow = this.dsList6.addRow();
        				this.dsList6.setColumn(nRow, "CD_GUBUN"   	, this.dsResultPayment.getColumn(i, "CD_GUBUN"));
        				this.dsList6.setColumn(nRow, "NM_GUBUN"  	, this.dsResultPayment.getColumn(i, "CD_GUBUN"));
        				this.dsList6.setColumn(nRow, "ID_SABUN"  	, this.dsResultPayment.getColumn(i, "ID_SABUN"));
        				this.dsList6.setColumn(nRow, "DS_NAME"  	, this.dsResultPayment.getColumn(i, "DS_HNAME"));
        				this.dsList6.setColumn(nRow, "ID_RESIDENT"	, this.dsResultPayment.getColumn(i, "ID_RESIDENT"));
        				this.dsList6.setColumn(nRow, "TY_GUBUN"   	, this.dsResultPayment.getColumn(i, "TY_GUBUN2"));
        				this.dsList6.setColumn(nRow, "CD_PREPAY"  , this.dsResultPayment.getColumn(i, "CD_PREPAY2").replace(/\-/gi, ""));
        				this.dsList6.setColumn(nRow, "DS_PREPAY"  , this.dsResultPayment.getColumn(i, "DS_PREPAY2"));
        				this.dsList6.setColumn(nRow, "AM_INCOMETAX" , this.dsResultPayment.getColumn(i, "AM_INCTAXBEF2"));
        				this.dsList6.setColumn(nRow, "AM_SPECIALTAX", this.dsResultPayment.getColumn(i, "AM_SPECIALTAX2"));
        				this.dsList6.setColumn(nRow, this.ucFlag , banFlag);
        		    }
        	 	}
        		trace("FLAG 1 =>" + this.dsList6.getColumn(this.dsList6.rowposition, this.ucFlag));
        		this.dsList6.set_enableevent(true);
        		this.fnSetJojung();

        		this.gfnSetFormStatus(this, banFlag);
        		//trace("FLAG 2 =>" + this.dsList.getColumn(this.dsList.rowposition, this.ucFlag));
         	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccfCD_DEPT_SELFACNT.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.divData.form.tabData.tab1.form.objGrid.addEventHandler("onselectchanged",this.divData_tabData_tab1_objGrid_onselectchanged,this);
            this.divData.form.tabData.tab1.form.mskAM_BEFORETAX.addEventHandler("onkillfocus",this.mask_onkillfocus,this);
            this.divData.form.tabData.tab1.form.mskAM_BEFORETAX.addEventHandler("onchanged",this.fn_OnChanged,this);
            this.divData.form.tabData.tab1.form.mskAM_REQUESTTAX.addEventHandler("onkillfocus",this.mask_onkillfocus,this);
            this.divData.form.tabData.tab1.form.mskAM_REQUESTTAX.addEventHandler("onchanged",this.fn_OnChanged,this);
            this.divData.form.tabData.tab1.form.mskAM_ILBANRETURN.addEventHandler("onkillfocus",this.mask_onkillfocus,this);
            this.divData.form.tabData.tab1.form.mskAM_ILBANRETURN.addEventHandler("onchanged",this.fn_OnChanged,this);
            this.divData.form.tabData.tab1.form.mskAM_SINTAC.addEventHandler("onkillfocus",this.mask_onkillfocus,this);
            this.divData.form.tabData.tab1.form.mskAM_SINTAC.addEventHandler("onchanged",this.fn_OnChanged,this);
            this.divData.form.tabData.tab1.form.mskAM_GITA.addEventHandler("onkillfocus",this.mask_onkillfocus,this);
            this.divData.form.tabData.tab1.form.mskAM_GITA.addEventHandler("onchanged",this.fn_OnChanged,this);
            this.divData.form.tabData.tab1.form.mskAM_GITA2.addEventHandler("onkillfocus",this.mask_onkillfocus,this);
            this.divData.form.tabData.tab1.form.mskAM_GITA2.addEventHandler("onchanged",this.fn_OnChanged,this);
            this.divData.form.tabData.tab1.form.mskAM_RETURNTAXSUM.addEventHandler("onkillfocus",this.mask_onkillfocus,this);
            this.divData.form.tabData.tab1.form.mskAM_RETURNTAXSUM.addEventHandler("onchanged",this.divData_tabData_tab1_mskAM_RETURNTAXSUM_onchanged,this);
            this.divData.form.tabData.tab1.form.mskAM_WOLRETURNTAX.addEventHandler("onchanged",this.fn_OnChanged,this);
            this.divData.form.tabData.tab3.form.staTITLE.addEventHandler("onclick",this.divData_tabData_tab3_staTITLE_onclick,this);
            this.divData.form.tabData.tab3.form.btnRemove.addEventHandler("onclick",this.divData_tabData_tab3_btnRemove_onclick,this);
            this.divData.form.tabData.tab3.form.btnAdd.addEventHandler("onclick",this.divData_tabData_tab3_btnAdd_onclick,this);
            this.divData.form.tabData.tab5.form.btnIncomtax.addEventHandler("onclick",this.divData_tabData_tab5_btnIncomtax_onclick,this);
            this.divData.form.tabData.tab5.form.rdoGiGubun2.addEventHandler("onitemchanged",this.fn_onitemchanged,this);
            this.divData.form.tabData.tab5.form.btnGiData.addEventHandler("onclick",this.divData_tabData_tab5_btnGiData_onclick,this);
            this.divData.form.tabData.tab5.form.divJojung.form.chkReson1.addEventHandler("onchanged",this.fn_jojungItem_onchanged,this);
            this.divData.form.tabData.tab5.form.divJojung.form.chkReson2.addEventHandler("onchanged",this.fn_jojungItem_onchanged,this);
            this.divData.form.tabData.tab5.form.divJojung.form.chkReson3.addEventHandler("onchanged",this.fn_jojungItem_onchanged,this);
            this.divData.form.tabData.tab5.form.divJojung.form.chkReson4.addEventHandler("onchanged",this.fn_jojungItem_onchanged,this);
            this.divData.form.tabData.tab5.form.divJojung.form.chkReson5.addEventHandler("onchanged",this.fn_jojungItem_onchanged,this);
            this.divData.form.tabData.tab5.form.divJojung.form.mskAM_INCOMTAX.addEventHandler("onkillfocus",this.mask_onkillfocus,this);
            this.divData.form.tabData.tab5.form.divJojung.form.mskAM_INCOMTAX.addEventHandler("onchanged",this.fn_jojungItem_onchanged,this);
            this.divData.form.tabData.tab5.form.divJojung.form.mskAM_INCOMTAX_GI.addEventHandler("onkillfocus",this.mask_onkillfocus,this);
            this.divData.form.tabData.tab5.form.divJojung.form.mskAM_INCOMTAX_GI.addEventHandler("onchanged",this.fn_jojungItem_onchanged,this);
            this.divData.form.tabData.tab5.form.divJojung.form.mskAM_INCOMTAX_DIFF.addEventHandler("onkillfocus",this.mask_onkillfocus,this);
            this.divData.form.tabData.tab5.form.divJojung.form.mskAM_INCOMTAX_DIFF.addEventHandler("onchanged",this.fn_jojungItem_onchanged,this);
            this.divData.form.tabData.tab5.form.divJojung.form.mskAM_SPECIALTAX.addEventHandler("onkillfocus",this.mask_onkillfocus,this);
            this.divData.form.tabData.tab5.form.divJojung.form.mskAM_SPECIALTAX.addEventHandler("onchanged",this.fn_jojungItem_onchanged,this);
            this.divData.form.tabData.tab5.form.divJojung.form.mskAM_SPECIALTAX_GI.addEventHandler("onkillfocus",this.mask_onkillfocus,this);
            this.divData.form.tabData.tab5.form.divJojung.form.mskAM_SPECIALTAX_GI.addEventHandler("onchanged",this.fn_jojungItem_onchanged,this);
            this.divData.form.tabData.tab5.form.divJojung.form.mskAM_SPECIALTAX_DIFF.addEventHandler("onkillfocus",this.mask_onkillfocus,this);
            this.divData.form.tabData.tab5.form.divJojung.form.mskAM_SPECIALTAX_DIFF.addEventHandler("onchanged",this.fn_jojungItem_onchanged,this);
            this.divData.form.tabData.tab5.form.btnAdd.addEventHandler("onclick",this.divData_tabData_tap5_btnAdd_onclick,this);
            this.divData.form.tabData.tab5.form.btnRemove.addEventHandler("onclick",this.divData_tabData_tap5_btnRemove_onclick,this);
            this.divData.form.tabData.tab5.form.btnGiAdd.addEventHandler("onclick",this.divData_tabData_tap5_btnGiAdd_onclick,this);
            this.divData.form.tabData.tab5.form.btnGiRemove.addEventHandler("onclick",this.divData_tabData_tap5_btnGiRemove_onclick,this);
            this.divData.form.tabData.tab6.form.btnUnAdd1.addEventHandler("onclick",this.divData_tabData_tab6_btnUnAdd1_onclick,this);
            this.divData.form.tabData.tab6.form.btnUnRemove1.addEventHandler("onclick",this.divData_tabData_tab6_btnUnRemove1_onclick,this);
            this.divData.form.tabData.tab6.form.btnUnAdd2.addEventHandler("onclick",this.divData_tabData_tab6_btnUnAdd2_onclick,this);
            this.divData.form.tabData.tab6.form.btnUnRemove2.addEventHandler("onclick",this.divData_tabData_tab6_btnUnRemove2_onclick,this);
            this.divData.form.rdoSINGO.addEventHandler("onitemchanged",this.fn_onitemchanged,this);
            this.divData.form.ccfDT_ENTER.addEventHandler("onchanged",this.divData_ccfDT_ENTER_onchanged,this);
            this.divData.form.rdoBATCH.addEventHandler("onitemchanged",this.fn_onitemchanged,this);
            this.divData.form.rdoSAUPJA.addEventHandler("onitemchanged",this.fn_onitemchanged,this);
            this.divData.form.rdoSUBWRITE.addEventHandler("onitemchanged",this.fn_onitemchanged,this);
            this.divData.form.chkSINGO02.addEventHandler("onchanged",this.fn_chk_onchanged,this);
            this.divData.form.chkSINGO03.addEventHandler("onchanged",this.fn_chk_onchanged,this);
            this.divData.form.chkSINGO04.addEventHandler("onchanged",this.fn_chk_onchanged,this);
            this.divData.form.chkSINGO05.addEventHandler("onchanged",this.fn_chk_onchanged,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsList2.addEventHandler("oncolumnchanged",this.dsList2_oncolumnchanged,this);
            this.dsList3.addEventHandler("oncolumnchanged",this.dsList3_oncolumnchanged,this);
            this.dsList4.addEventHandler("oncolumnchanged",this.dsList4_oncolumnchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsList5.addEventHandler("oncolumnchanged",this.dsList5_oncolumnchanged,this);
            this.dsList6.addEventHandler("oncolumnchanged",this.dsList6_oncolumnchanged,this);
            this.dsList7.addEventHandler("oncolumnchanged",this.dsList7_oncolumnchanged,this);
            this.dsList8.addEventHandler("oncolumnchanged",this.dsList8_oncolumnchanged,this);
            this.dsList9.addEventHandler("oncolumnchanged",this.dsList9_oncolumnchanged,this);
        };
        this.loadIncludeScript("DHV_PAYSTATUS.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
