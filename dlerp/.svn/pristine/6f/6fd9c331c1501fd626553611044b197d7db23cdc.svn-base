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
            this.set_titletext("세무단위관리-상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_SELFACNT_DETAILSELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHVPR_SELFACNT_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHVPR_SELFACNT_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHVPR_SELFACNT_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTAXUNITY", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">YES</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">NO</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_DEPT_SELFACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_SELFACNT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_TAXUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DAEPYO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SJC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UPJONG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UPTAE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ZIP1\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ZIP2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REM\" type=\"STRING\" size=\"256\"/><Column id=\"AT_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"NO_PAY\" type=\"STRING\" size=\"256\"/><Column id=\"OPEN_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"YN_TOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"BK_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"BK_NO\" type=\"STRING\" size=\"256\"/><Column id=\"YMD_CLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TAXOFFICE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SAUP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"AT_BIZ\" type=\"STRING\" size=\"256\"/><Column id=\"AT_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"AT_SERVICE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_OFFICE\" type=\"STRING\" size=\"256\"/><Column id=\"BK_CODE1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BANK\" type=\"STRING\" size=\"256\"/><Column id=\"BK_NO1\" type=\"STRING\" size=\"256\"/><Column id=\"BK_LOCATION1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_UPJONG1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UPJONG1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_UPJONG2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UPJONG2\" type=\"STRING\" size=\"256\"/><Column id=\"CD_UPJONG3\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UPJONG3\" type=\"STRING\" size=\"256\"/><Column id=\"CD_UPJONG5\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UPJONG5\" type=\"STRING\" size=\"256\"/><Column id=\"CD_UPJONG6\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UPJONG6\" type=\"STRING\" size=\"256\"/><Column id=\"ID_HOMETAX\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DAMDANG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_BONSA", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">YES</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">NO</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SELFACNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SELFACNT","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("세무단위");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_SELFACNT","staCD_SELFACNT:0.0","10.0","79","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_SELFACNT","ctxtCD_SELFACNT:10.0","10.0","199","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_textAlign("center");
            obj.set_inputfilter("none");
            obj.set_inputtype("normal");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","10","1260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("일반사항");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_SELFACNT","0","staTITLE:5","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("세무단위코드");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_TAXUNIT","0","staCD_DEPT_SELFACNT:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("세무단위여부");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SELFACNT","0","staYN_TAXUNIT:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("세무단위명");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","staDS_SELFACNT:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("법인번호");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_DAEPYO","0","staCD_CORP:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("대표자명");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_TEL","0","staDS_DAEPYO:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("담당자명/TEL");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_DEPT_SELFACNT","staCD_DEPT_SELFACNT:-1","staTITLE:5","1164","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgYN_TAXUNIT","staYN_TAXUNIT:-1","staBgCD_DEPT_SELFACNT:-1","1164","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_SELFACNT","staDS_SELFACNT:-1","staBgYN_TAXUNIT:-1","528","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_CORP","staCD_CORP:-1","staBgDS_SELFACNT:-1","528","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_DAEPYO","staDS_DAEPYO:-1","staBgCD_CORP:-1","528","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgNO_TEL","staNO_TEL:-1","staBgDS_DAEPYO:-1","528","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_SLIP","staBgDS_SELFACNT:-1","staYN_TAXUNIT:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("전표발행세무서");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_SJC","staBgCD_CORP:-1","staCD_DEPT_SLIP:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("사업자번호");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTEL_CORP","staBgDS_DAEPYO:-1","staNO_SJC:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("사업장전화번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_EMAIL","staBgNO_TEL:-1","staTEL_CORP:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("담당자 EMAIL");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_DEPT_SLIP","staCD_DEPT_SLIP:-1","staBgYN_TAXUNIT:-1","528","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgNO_SJC","staNO_SJC:-1","staBgCD_DEPT_SLIP:-1","528","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgTEL_CORP","staTEL_CORP:-1","staBgNO_SJC:-1","528","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_EMAIL","staDS_EMAIL:-1","staBgTEL_CORP:-1","528","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_SELFACNT","staCD_DEPT_SELFACNT:5","staTITLE:10","70","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_enable("true");
            obj.set_textAlign("center");
            obj.set_maxlength("20");
            obj.set_inputtype("alpha,number");
            obj.set_inputfilter("comma,dot,sign");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("crdoTAXUNITY","staYN_TAXUNIT:5","ctxtCD_SELFACNT:9","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_innerdataset("dsTAXUNITY");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_SELFACNT","staDS_SELFACNT:5","crdoTAXUNITY:9","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_textAlign("left");
            obj.set_inputfilter("none");
            obj.set_inputtype("normal");
            obj.set_maxlength("30");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_SLIP","staCD_DEPT_SLIP:5","crdoTAXUNITY:9","300","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DHX_CFALLVENDOR_CODEFIND");
            obj.getSetter("CDTextWidth").set("85");
            obj.set_taborder("24");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:5","txtDS_SELFACNT:9","240","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("25");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_CORP","ccfCD_CORP:3","txtDS_SELFACNT:9","199","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_textAlign("left");
            obj.set_inputfilter("none");
            obj.set_inputtype("normal");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfNO_SJC","staNO_SJC:5","ccfCD_DEPT_SLIP:9","300","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DZX_CFCOMPANYCORP");
            obj.getSetter("CDTextWidth").set("85");
            obj.set_taborder("27");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_DAEPYO","staDS_DAEPYO:5","ccfCD_CORP:9","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_textAlign("left");
            obj.set_inputfilter("none");
            obj.set_inputtype("normal");
            obj.set_maxlength("10");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtTEL_CORP","staTEL_CORP:5","ccfNO_SJC:9","300","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_textAlign("left");
            obj.set_inputfilter("none");
            obj.set_inputtype("number");
            obj.set_maxlength("14");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_EMAIL","staDS_EMAIL:5","txtDS_DAEPYO:9","300","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_textAlign("left");
            obj.set_inputtype("alpha,number,symbol");
            obj.set_maxlength("30");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE_MID","0","staNO_TEL:0","1260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_text("사업자관련사항");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_ZIP","0","staTITLE_MID:5","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_text("주소");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAT_TAX","0","staNO_ZIP:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_text("담당세무서명");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_TAXOFFICE","0","staAT_TAX:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_text("담당세무서코드");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staOPEN_YMD","0","staCD_TAXOFFICE:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_text("개업일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_OFFICE","0","staOPEN_YMD:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_text("담당구청");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgNO_ZIP","staNO_ZIP:-1","staTITLE_MID:5","528","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAT_TAX","staAT_TAX:-1","staBgNO_ZIP:-1","258","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_TAXOFFICE","staCD_TAXOFFICE:-1","staBgAT_TAX:-1","258","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgOPEN_YMD","staOPEN_YMD:-1","staBgCD_TAXOFFICE:-1","258","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("99");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_OFFICE","staDS_OFFICE:-1","staBgOPEN_YMD:-1","528","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAT_SERVICE","staBgAT_TAX:-1","staNO_ZIP:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_text("세무대리 명칭");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAT_BIZ","staBgCD_TAXOFFICE:-1","staAT_SERVICE:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_text("세무대리 사업번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAT_TEL","staBgOPEN_YMD:-1","staAT_BIZ:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_text("세무대리 전화번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAT_SERVICE","staAT_SERVICE:-1","staBgNO_ZIP:-1","152","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAT_BIZ","staAT_BIZ:-1","staBgAT_SERVICE:-1","152","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAT_TEL","staAT_TEL:-1","staBgAT_BIZ:-1","152","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_UPTAE","staBgNO_ZIP:-1","staTITLE_MID:5","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_text("업태");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_UPJONG","staBgAT_SERVICE:-1","staDS_UPTAE:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj.set_text("업종");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBK_VENDOR","staBgAT_BIZ:-1","staDS_UPJONG:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_text("거래은행");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBK_NO","staBgAT_TEL:-1","staBK_VENDOR:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("50");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_REM","staBgDS_OFFICE:-1","staBK_NO:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("51");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_UPTAE","staDS_UPTAE:-1","staTITLE_MID:5","528","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_UPJONG","staDS_UPJONG:-1","staBgDS_UPTAE:-1","528","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgBK_VENDOR","staBK_VENDOR:-1","staBgDS_UPJONG:-1","528","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgBK_NO","staBK_NO:-1","staBgBK_VENDOR:-1","528","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_REM","staDS_REM:-1","staBK_NO:-1","528","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfNO_ZIP","staNO_ZIP:5","staTITLE_MID:10","511","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("57");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_UPTAE","staDS_UPTAE:5","staTITLE_MID:10","270","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("58");
            obj.set_textAlign("left");
            obj.set_inputfilter("none");
            obj.set_inputtype("normal");
            obj.set_maxlength("100");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtAT_TAX","staAT_TAX:5","ccfNO_ZIP:9","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("59");
            obj.set_textAlign("left");
            obj.set_inputfilter("none");
            obj.set_inputtype("normal");
            obj.set_maxlength("10");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtAT_SERVICE","staAT_SERVICE:5","ccfNO_ZIP:9","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("60");
            obj.set_inputtype("normal");
            obj.set_textAlign("left");
            obj.set_maxlength("10");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_UPJONG","staDS_UPTAE:5","ctxtDS_UPTAE:9","270","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("61");
            obj.set_textAlign("left");
            obj.set_inputfilter("none");
            obj.set_inputtype("normal");
            obj.set_maxlength("100");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtAT_BIZ","staAT_BIZ:5","ctxtAT_SERVICE:9","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("63");
            obj.set_inputtype("number");
            obj.set_textAlign("left");
            obj.set_maxlength("20");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtBK_VENDOR","staBK_VENDOR:5","ctxtDS_UPJONG:9","270","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("64");
            obj.set_textAlign("left");
            obj.set_inputfilter("none");
            obj.set_inputtype("normal");
            obj.set_maxlength("10");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtAT_TEL","staAT_TEL:5","ctxtAT_BIZ:9","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("66");
            obj.set_inputtype("number");
            obj.set_textAlign("left");
            obj.set_maxlength("20");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtBK_NO","staBK_NO:5","ctxtBK_VENDOR:9","270","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("67");
            obj.set_textAlign("left");
            obj.set_inputfilter("none");
            obj.set_inputtype("number");
            obj.set_maxlength("30");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_TAXOFFICE","staCD_TAXOFFICE:5","ctxtAT_TAX:9","79","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("62");
            obj.set_enable("true");
            obj.set_textAlign("center");
            obj.set_maxlength("3");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclOPEN_YMD","staOPEN_YMD:5","ctxtCD_TAXOFFICE:9","115","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("65");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_OFFICE","staDS_OFFICE:5","ctclOPEN_YMD:9","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("68");
            obj.set_textAlign("left");
            obj.set_inputfilter("none");
            obj.set_inputtype("normal");
            obj.set_maxlength("20");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_REM","staDS_REM:5","ctxtBK_NO:9","270","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("69");
            obj.set_textAlign("left");
            obj.set_inputfilter("none");
            obj.set_inputtype("normal");
            obj.set_maxlength("10");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE_BOTTOM","0","433","1260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("70");
            obj.set_text("부가가치세(과세,비과세표준명세/환급금 계좌정보)");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_UPJONG1","0","staTITLE_BOTTOM:5","110","88",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("71");
            obj.set_text("(과세)업종코드/\r\n\r\n업태/업종");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_verticalAlign("top");
            obj.set_wordWrap("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBK_CODE1","0","staCD_UPJONG1:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("72");
            obj.set_text("은행명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYMD_CLOSE","0","staBK_CODE1:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("73");
            obj.set_text("폐업일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_UPJONG1","staCD_UPJONG1:-1","staTITLE_BOTTOM:5","528","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_UPJONG2","staCD_UPJONG1:-1","staBgCD_UPJONG1:-1","528","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_UPJONG3","staCD_UPJONG1:-1","staBgCD_UPJONG2:-1","528","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgBK_CODE1","staBK_CODE1:-1","staBgCD_UPJONG3:-1","258","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgYMD_CLOSE","staYMD_CLOSE:-1","staBgBK_CODE1:-1","258","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBK_LOCATION1","staBgBK_CODE1:-1","staCD_UPJONG1:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("79");
            obj.set_text("지점");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CORP_ENG","staBgYMD_CLOSE:-1","staBK_LOCATION1:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("80");
            obj.set_text("영문법인");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgBK_LOCATION1","staBK_LOCATION1:-1","staBgCD_UPJONG3:-1","172","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("81");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_CORP_ENG","staDS_CORP_ENG:-1","staBgBK_LOCATION1:-1","172","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_UPJONG5","staBgCD_UPJONG1:-1","staTITLE_BOTTOM:5","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("83");
            obj.set_text("(면세)업종코드/");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_UPJONG6","staBgCD_UPJONG2:-1","staCD_UPJONG5:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("84");
            obj.set_text("업태/업종");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_HOMETAX","staBgCD_UPJONG3:-1","staCD_UPJONG6:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("85");
            obj.set_text("ID(HOMETAX)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBK_NO1","staBgBK_LOCATION1:-1","staID_HOMETAX:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("86");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CLOSE","staBgDS_CORP_ENG:-1","staBK_NO1:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("87");
            obj.set_text("폐업사유");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_UPJONG5","staCD_UPJONG5:-1","staTITLE_BOTTOM:5","528","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_UPJONG6","staCD_UPJONG6:-1","staBgCD_UPJONG5:-1","528","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("89");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgID_HOMETAX","staID_HOMETAX:-1","staBgCD_UPJONG6:-1","528","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgBK_NO1","staBK_NO1:-1","staBgID_HOMETAX:-1","528","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("91");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_CLOSE","staDS_CLOSE:-1","staBgBK_NO1:-1","528","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("92");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_UPJONG1","staCD_UPJONG1:5","staTITLE_BOTTOM:10","511","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DHX_CFTUJAUPJONG");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("93");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_UPJONG2","staCD_UPJONG1:5","ccfCD_UPJONG1:9","511","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DHX_CFTUJAUPJONG");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("94");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_UPJONG3","staCD_UPJONG1:5","ccfCD_UPJONG2:9","511","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DHX_CFTUJAUPJONG");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("95");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_UPJONG5","staCD_UPJONG5:5","staTITLE_BOTTOM:10","300","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DHX_CFTUJAUPJONG");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("96");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_UPJONG6","staCD_UPJONG6:5","ccfCD_UPJONG5:9","300","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DHX_CFTUJAUPJONG");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("97");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtID_HOMETAX","staID_HOMETAX:5","ccfCD_UPJONG6:9","300","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("98");
            obj.set_enable("true");
            obj.set_textAlign("left");
            obj.set_maxlength("20");
            obj.set_inputtype("number,alpha,symbol");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfBK_CODE1","staBK_CODE1:5","ccfCD_UPJONG3:9","241","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DHX_CFBANKCODE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("100");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtBK_LOCATION1","staBK_LOCATION1:5","ccfCD_UPJONG3:9","155","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("101");
            obj.set_textAlign("left");
            obj.set_enable("true");
            obj.set_maxlength("15");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtBK_NO1","staBK_NO1:5","ctxtID_HOMETAX:9","270","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("102");
            obj.set_textAlign("left");
            obj.set_inputfilter("none");
            obj.set_inputtype("number");
            obj.set_maxlength("30");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSPACE00","ctxtBK_NO1:5","ctxtID_HOMETAX:9","93","15",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("103");
            obj.set_text("\'-\' 포함입력");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclYMD_CLOSE","staYMD_CLOSE:5","ccfBK_CODE1:9","115","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("104");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_CORP_ENG","staDS_CORP_ENG:5","ctxtBK_LOCATION1:9","156","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("105");
            obj.set_textAlign("left");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_CLOSE","staDS_CLOSE:5","ctxtBK_NO1:9","300","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("106");
            obj.set_textAlign("left");
            obj.set_inputtype("normal");
            obj.set_maxlength("25");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_TEL","317","195","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("107");
            obj.set_textAlign("left");
            obj.set_inputfilter("none");
            obj.set_inputtype("number");
            obj.set_maxlength("14");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_DAMDANG","115","195","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("108");
            obj.set_textAlign("left");
            obj.set_inputfilter("none");
            obj.set_inputtype("normal");
            obj.set_maxlength("10");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctxtCD_SELFACNT","value","dsSearch","CD_SELFACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ctxtCD_SELFACNT","value","dsList","CD_DEPT_SELFACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.crdoTAXUNITY","value","dsList","YN_TAXUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.txtDS_SELFACNT","value","dsList","DS_DEPT_SELFACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ccfCD_DEPT_SLIP.form.CDTextBox","value","dsList","CD_DEPT_SLIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.ccfCD_DEPT_SLIP.form.DSTextBox","value","dsList","DS_DEPT_SLIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.ccfCD_CORP.form.CDTextBox","value","dsList","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.ccfCD_CORP.form.DSTextBox","value","dsList","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.ctxtNO_CORP","value","dsList","NO_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.ccfNO_SJC.form.CDTextBox","value","dsList","NO_SJC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.ccfNO_SJC.form.DSTextBox","value","dsList","DS_SAUP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.txtDS_DAEPYO","value","dsList","DS_DAEPYO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.txtTEL_CORP","value","dsList","TEL_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.txtDS_EMAIL","value","dsList","DS_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.ccfNO_ZIP.form.CDTextBox","value","dsList","NO_ZIP1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.ccfNO_ZIP.form.DSTextBox","value","dsList","DS_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.ctxtAT_TAX","value","dsList","AT_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.ctxtCD_TAXOFFICE","value","dsList","CD_TAXOFFICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.ctclOPEN_YMD","value","dsList","OPEN_YMD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.ctxtDS_OFFICE","value","dsList","DS_OFFICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.ctxtAT_SERVICE","value","dsList","AT_SERVICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.ctxtAT_BIZ","value","dsList","AT_BIZ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.ctxtAT_TEL","value","dsList","AT_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.ctxtDS_UPTAE","value","dsList","DS_UPTAE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.ctxtDS_UPJONG","value","dsList","DS_UPJONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.ctxtBK_VENDOR","value","dsList","BK_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.ctxtBK_NO","value","dsList","BK_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.ctxtDS_REM","value","dsList","DS_REM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.ccfCD_UPJONG1.form.CDTextBox","value","dsList","CD_UPJONG1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.ccfCD_UPJONG1.form.DSTextBox","value","dsList","DS_UPJONG1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.ccfCD_UPJONG2.form.CDTextBox","value","dsList","CD_UPJONG2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.ccfCD_UPJONG2.form.DSTextBox","value","dsList","DS_UPJONG2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.ccfCD_UPJONG3.form.CDTextBox","value","dsList","CD_UPJONG3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.ccfCD_UPJONG3.form.DSTextBox","value","dsList","DS_UPJONG3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.ccfBK_CODE1.form.CDTextBox","value","dsList","BK_CODE1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.ccfBK_CODE1.form.DSTextBox","value","dsList","DS_BANK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.ctxtBK_LOCATION1","value","dsList","BK_LOCATION1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.ctclYMD_CLOSE","value","dsList","YMD_CLOSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divData.form.ctxtDS_CORP_ENG","value","dsList","DS_CORP_ENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divData.form.ccfCD_UPJONG5.form.CDTextBox","value","dsList","CD_UPJONG5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divData.form.ccfCD_UPJONG5.form.DSTextBox","value","dsList","DS_UPJONG5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divData.form.ccfCD_UPJONG6.form.CDTextBox","value","dsList","CD_UPJONG6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divData.form.ccfCD_UPJONG6.form.DSTextBox","value","dsList","DS_UPJONG6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divData.form.ctxtID_HOMETAX","value","dsList","ID_HOMETAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divData.form.ctxtBK_NO1","value","dsList","BK_NO1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divData.form.ctxtDS_CLOSE","value","dsList","DS_CLOSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divData.form.txtNO_TEL","value","dsList","NO_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.txtDS_DAMDANG","value","dsList","DS_DAMDANG");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHV_SELFACNTDETAIL.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetButton();
        	this.fnSetParameter();
        	this.fnSetEvent();

        	if(this.getOwnerFrame().IUD_FLAG == "I") {
        		this.fnAdd();
        		this.divSearch.form.ctxtCD_SELFACNT.setFocus();
        	}
        	else if(this.getOwnerFrame().IUD_FLAG == "U") {
        		this.dsSearch.setColumn(0, "CD_SELFACNT", this.getOwnerFrame().CD_DEPT_SELFACNT);
        		this.divSearch.form.ctxtDS_SELFACNT.set_value(this.getOwnerFrame().DS_DEPT_SELFACNT);
        		this.divData.form.ctxtCD_SELFACNT.set_enable(false);
        		this.FormBtns.Select.click();
        	} else {
        		this.FormBtns.Select.set_enable(false);
        		this.FormBtns.Add.set_enable(true);
        		this.FormBtns.Del.set_enable(false);
        	}
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	// 코드파인드들만 선언.
        	this.ccfCD_DEPT_SLIP	=	this.divData.form.ccfCD_DEPT_SLIP;
        	this.ccfCD_CORP			=	this.divData.form.ccfCD_CORP;
        	this.ccfNO_SJC			=	this.divData.form.ccfNO_SJC;
        	this.ccfNO_ZIP			=	this.divData.form.ccfNO_ZIP;
        	this.ccfCD_UPJONG1		=	this.divData.form.ccfCD_UPJONG1;
        	this.ccfCD_UPJONG2		=	this.divData.form.ccfCD_UPJONG2;
        	this.ccfCD_UPJONG3		=	this.divData.form.ccfCD_UPJONG3;
        	this.ccfCD_UPJONG5		=	this.divData.form.ccfCD_UPJONG5;
        	this.ccfCD_UPJONG6		=	this.divData.form.ccfCD_UPJONG6;
        	this.ccfBK_CODE1		=	this.divData.form.ccfBK_CODE1;
        };

        this.fnSetButton = function() {

        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        }

        this.fnAdd = function() {

        	if(this.dsList.findRow(this.ucFlag, "I") > -1){
        		this.gfnAlert("신규 추가된 데이터가 이미 있습니다.");
        		return;
        	}

        	this.dsSearch.setColumn(0, "CD_SELFACNT", "");
        	this.divSearch.form.ctxtDS_SELFACNT.set_value("");

        	this.dsList.clearData();

        	var nRow = this.dsList.addRow();
        	this.dsList.setColumn(nRow, this.ucFlag, "I");

        	this.gfnSetFormStatus(this, "I");
        	this.FormBtns.Select.set_enable(false);
        	this.FormBtns.Del.set_enable(false);

        	this.divData.form.ctxtCD_SELFACNT.set_enable(true);

        }
        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {

        };

        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SELFACNT", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_SELFACNT", "string");
        	this.dsInsert.addColumn("DS_SELFACNT", "string");
        	this.dsInsert.addColumn("YN_TAXUNIT", "string");
        	this.dsInsert.addColumn("DS_DAEPYO", "string");
        	this.dsInsert.addColumn("NO_SJC", "string");
        	this.dsInsert.addColumn("DS_UPJONG", "string");
        	this.dsInsert.addColumn("DS_UPTAE", "string");
        	this.dsInsert.addColumn("DS_ADDR", "string");
        	this.dsInsert.addColumn("NO_ZIP1", "string");
        	this.dsInsert.addColumn("NO_ZIP2", "string");
        	this.dsInsert.addColumn("NO_TEL", "string");
        	this.dsInsert.addColumn("DS_REM", "string");
        	this.dsInsert.addColumn("AT_TAX", "string");
        	this.dsInsert.addColumn("NO_CORP", "string");
        	this.dsInsert.addColumn("TEL_CORP", "string");
        	this.dsInsert.addColumn("NO_PAY", "string");
        	this.dsInsert.addColumn("OPEN_YMD", "string");
        	this.dsInsert.addColumn("YN_TOTAL", "string");
        	this.dsInsert.addColumn("BK_VENDOR", "string");
        	this.dsInsert.addColumn("BK_NO", "string");
        	this.dsInsert.addColumn("YMD_CLOSE", "string");
        	this.dsInsert.addColumn("DS_CLOSE", "string");
        	this.dsInsert.addColumn("CD_TAXOFFICE", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");
        	this.dsInsert.addColumn("CD_DEPT_SLIP", "string");
        	this.dsInsert.addColumn("DS_DEPT_SLIP", "string");
        	this.dsInsert.addColumn("AT_BIZ", "string");
        	this.dsInsert.addColumn("AT_TEL", "string");
        	this.dsInsert.addColumn("DS_EMAIL", "string");
        	this.dsInsert.addColumn("AT_SERVICE", "string");
        	this.dsInsert.addColumn("DS_OFFICE", "string");
        	this.dsInsert.addColumn("BK_CODE1", "string");
        	this.dsInsert.addColumn("BK_NO1", "string");
        	this.dsInsert.addColumn("BK_LOCATION1", "string");
        	this.dsInsert.addColumn("CD_UPJONG1", "string");
        	this.dsInsert.addColumn("CD_UPJONG2", "string");
        	this.dsInsert.addColumn("CD_UPJONG3", "string");
        	this.dsInsert.addColumn("CD_UPJONG4", "string");
        	this.dsInsert.addColumn("CD_UPJONG5", "string");
        	this.dsInsert.addColumn("CD_UPJONG6", "string");
        	this.dsInsert.addColumn("ID_HOMETAX", "string");
        	this.dsInsert.addColumn("DS_CORP_ENG", "string");
        	this.dsInsert.addColumn("DS_DAMDANG", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_SELFACNT", "string");
        	this.dsUpdate.addColumn("DS_SELFACNT", "string");
        	this.dsUpdate.addColumn("YN_TAXUNIT", "string");
        	this.dsUpdate.addColumn("DS_DAEPYO", "string");
        	this.dsUpdate.addColumn("NO_SJC", "string");
        	this.dsUpdate.addColumn("DS_UPJONG", "string");
        	this.dsUpdate.addColumn("DS_UPTAE", "string");
        	this.dsUpdate.addColumn("DS_ADDR", "string");
        	this.dsUpdate.addColumn("NO_ZIP1", "string");
        	this.dsUpdate.addColumn("NO_ZIP2", "string");
        	this.dsUpdate.addColumn("NO_TEL", "string");
        	this.dsUpdate.addColumn("DS_REM", "string");
        	this.dsUpdate.addColumn("AT_TAX", "string");
        	this.dsUpdate.addColumn("NO_CORP", "string");
        	this.dsUpdate.addColumn("TEL_CORP", "string");
        	this.dsUpdate.addColumn("NO_PAY", "string");
        	this.dsUpdate.addColumn("OPEN_YMD", "string");
        	this.dsUpdate.addColumn("YN_TOTAL", "string");
        	this.dsUpdate.addColumn("BK_VENDOR", "string");
        	this.dsUpdate.addColumn("BK_NO", "string");
        	this.dsUpdate.addColumn("YMD_CLOSE", "string");
        	this.dsUpdate.addColumn("DS_CLOSE", "string");
        	this.dsUpdate.addColumn("CD_TAXOFFICE", "string");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");
        	this.dsUpdate.addColumn("CD_DEPT_SLIP", "string");
        	this.dsUpdate.addColumn("DS_DEPT_SLIP", "string");
        	this.dsUpdate.addColumn("AT_BIZ", "string");
        	this.dsUpdate.addColumn("AT_TEL", "string");
        	this.dsUpdate.addColumn("DS_EMAIL", "string");
        	this.dsUpdate.addColumn("AT_SERVICE", "string");
        	this.dsUpdate.addColumn("DS_OFFICE", "string");
        	this.dsUpdate.addColumn("BK_CODE1", "string");
        	this.dsUpdate.addColumn("BK_NO1", "string");
        	this.dsUpdate.addColumn("BK_LOCATION1", "string");
        	this.dsUpdate.addColumn("CD_UPJONG1", "string");
        	this.dsUpdate.addColumn("CD_UPJONG2", "string");
        	this.dsUpdate.addColumn("CD_UPJONG3", "string");
        	this.dsUpdate.addColumn("CD_UPJONG4", "string");
        	this.dsUpdate.addColumn("CD_UPJONG5", "string");
        	this.dsUpdate.addColumn("CD_UPJONG6", "string");
        	this.dsUpdate.addColumn("ID_HOMETAX", "string");
        	this.dsUpdate.addColumn("DS_CORP_ENG", "string");
        	this.dsUpdate.addColumn("DS_DAMDANG", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_SELFACNT", "string");
        }

        this.fnSetEvent = function() {

        	this.ccfCD_CORP.BeforeUserDataSetParam		= "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged			= "fnAfterCDTextChanged";

        	// DHX_CFVENDORBYCORP
        	this.ccfCD_DEPT_SLIP.BeforeUserDataSetParam	= "fnBeforeUserDataSetParam";

        	this.ccfCD_UPJONG1.AfterCDTextChanged		= "fnAfterCDTextChanged";
        	this.ccfCD_UPJONG2.AfterCDTextChanged		= "fnAfterCDTextChanged";
        	this.ccfCD_UPJONG3.AfterCDTextChanged		= "fnAfterCDTextChanged";
        	this.ccfCD_UPJONG5.AfterCDTextChanged		= "fnAfterCDTextChanged";
        	this.ccfCD_UPJONG6.AfterCDTextChanged		= "fnAfterCDTextChanged";

        	this.ccfNO_SJC.BeforeUserDataSetParam 		= "fnBeforeUserDataSetParam";
        	this.ccfNO_SJC.AfterCDTextChanged			= "fnAfterCDTextChanged";

        }

        this.fnCallback = function(svcID, errorCode, errorMsg) {

        	if(svcID == "select") {
        		if(this.dsList.rowcount > 0) {
        			this.dsList.set_enableevent(false);

        			var no_addr = this.gfnNvl(this.dsList.getColumn(0, "NO_ZIP1"), "").trim() + this.gfnNvl(this.dsList.getColumn(0, "NO_ZIP2"),"").trim();

        			if(no_addr.length == 6)
        			{
        				no_addr = no_addr.substr(0,3) + "-" + no_addr.substr(3,3);
        			}

        			if(this.gfnNvl(this.dsList.getColumn(0, "BK_CODE1"),"") != "")
        			{
        				this.ccfBK_CODE1.form.fnCodeFindLoad();
        			}

        			this.dsList.setColumn(0, "NO_ZIP1", no_addr);

        			this.dsList.set_enableevent(true);

        			this.gfnSetFormStatus(this, "Q");
        		}
        		else {
        			this.gfnSetFormStatus(this);
        		}
        	} else if(svcID == "insert" || svcID == "update" || svcID == "delete") {

        		if (errorCode == 0) {
        			if(svcID == "update") {
        				this.dsSearch.setColumn(0, "CD_SELFACNT", this.dsList.getColumn(0, "CD_DEPT_SELFACNT"));
        				this.divSearch.form.ctxtDS_SELFACNT.set_value(this.dsList.getColumn(0, "DS_DEPT_SELFACNT"));
        				this.FormBtns.Select.click();

        			}
        			else if(svcID == "insert") {
        				this.dsSearch.setColumn(0, "CD_SELFACNT", this.dsList.getColumn(0, "CD_DEPT_SELFACNT"));
        				this.divSearch.form.ctxtDS_SELFACNT.set_value(this.dsList.getColumn(0, "DS_DEPT_SELFACNT"));
        				this.FormBtns.Select.click();
        			}
        			else if(svcID == "delete"){
        				this.gfnAlert("삭제되었습니다.", "fnClose_callback");
        			}

        		} else {

        			this.gfnAlert(errorMsg);

        		}

        	}

        }

        // 삭제 메시지 후 창을 닫기 위한 콜백함수.
        this.fnClose_callback = function(strID)
        {
        	this.getParentContext().close(true);
        }

        this.fnSelect = function() {

        	if(!this.fnSelectValidate()) return;
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_SELFACNT", this.dsSearch.getColumn(0, "CD_SELFACNT"));

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

        this.fnDel = function() {

        	this.gfnSetFormStatus(this, "D");

        	if(!this.fnDelValidate()) return;

        	this.gfnConfirm("삭제하시겠습니까?", "fnDelCallback");
        }

        this.fnDelCallback = function(strId, val) {

        	if(val == false) return;

        	this.saveTransaction();

        }

        this.fnSave = function() {

        	if(!this.fnSaveValidate()) return;

        	var flag = this.gfnGetFormStatus(this);

        // 	if(flag == "Q") {
        // 		this.gfnSetFormStatus(this, "U");
        // 	}

        	this.saveTransaction();

        }

        this.saveTransaction = function() {

        	var flag = this.gfnGetFormStatus(this);

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	var strSvcId    = "";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	switch(flag) {
        		case "I" :

        			var nrow = this.dsInsert.addRow();
        			this.dsInsert.setColumn(nrow, "CD_SELFACNT", this.dsList.getColumn(0, "CD_DEPT_SELFACNT"));
        			this.dsInsert.setColumn(nrow, "DS_SELFACNT", this.dsList.getColumn(0, "DS_DEPT_SELFACNT"));
        			this.dsInsert.setColumn(nrow, "YN_TAXUNIT", this.dsList.getColumn(0, "YN_TAXUNIT"));
        			this.dsInsert.setColumn(nrow, "DS_DAEPYO", this.dsList.getColumn(0, "DS_DAEPYO"));
        			this.dsInsert.setColumn(nrow, "NO_SJC", this.gfnNvl(this.dsList.getColumn(0, "NO_SJC"),"").replace("-", ""));
        			this.dsInsert.setColumn(nrow, "DS_UPJONG", this.dsList.getColumn(0, "DS_UPJONG"));
        			this.dsInsert.setColumn(nrow, "DS_UPTAE", this.dsList.getColumn(0, "DS_UPTAE"));
        			this.dsInsert.setColumn(nrow, "DS_ADDR", this.dsList.getColumn(0, "DS_ADDR"));
        			var no_zip1 = this.gfnNvl(this.dsList.getColumn(0, "NO_ZIP1"),"").replace("-","");
        			this.dsInsert.setColumn(nrow, "NO_ZIP1", no_zip1.length == 0 ? "" : no_zip1.substr(0,3));
        			this.dsInsert.setColumn(nrow, "NO_ZIP2", no_zip1.length == 0 ? "" : (no_zip1.length == 6) ? no_zip1.substr(3,3) : no_zip1.substr(3,2));
        			this.dsInsert.setColumn(nrow, "NO_TEL", this.dsList.getColumn(0, "NO_TEL"));
        			this.dsInsert.setColumn(nrow, "DS_REM", this.dsList.getColumn(0, "DS_REM"));
        			this.dsInsert.setColumn(nrow, "AT_TAX", this.dsList.getColumn(0, "AT_TAX"));
        			this.dsInsert.setColumn(nrow, "NO_CORP", this.gfnNvl(this.dsList.getColumn(0, "NO_CORP"),"").replace("-",""));
        			this.dsInsert.setColumn(nrow, "TEL_CORP", this.dsList.getColumn(0, "TEL_CORP"));
        			this.dsInsert.setColumn(nrow, "NO_PAY", this.dsList.getColumn(0, "NO_PAY"));
        			this.dsInsert.setColumn(nrow, "OPEN_YMD", this.dsList.getColumn(0, "OPEN_YMD"));
        			this.dsInsert.setColumn(nrow, "YN_TOTAL", this.dsList.getColumn(0, "YN_TOTAL"));
        			this.dsInsert.setColumn(nrow, "BK_VENDOR", this.dsList.getColumn(0, "BK_VENDOR"));
        			this.dsInsert.setColumn(nrow, "BK_NO", this.dsList.getColumn(0, "BK_NO"));
        			this.dsInsert.setColumn(nrow, "YMD_CLOSE", this.dsList.getColumn(0, "YMD_CLOSE"));
        			this.dsInsert.setColumn(nrow, "DS_CLOSE", this.dsList.getColumn(0, "DS_CLOSE"));
        			this.dsInsert.setColumn(nrow, "CD_TAXOFFICE", this.dsList.getColumn(0, "CD_TAXOFFICE"));
        			this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        			this.dsInsert.setColumn(nrow, "CD_DEPT_SLIP", this.gfnNvl(this.dsList.getColumn(0, "CD_DEPT_SLIP"),"").replace("-",""));
        			this.dsInsert.setColumn(nrow, "DS_DEPT_SLIP", this.dsList.getColumn(0, "DS_DEPT_SLIP"));
        			this.dsInsert.setColumn(nrow, "AT_BIZ", this.dsList.getColumn(0, "AT_BIZ"));
        			this.dsInsert.setColumn(nrow, "AT_TEL", this.dsList.getColumn(0, "AT_TEL"));
        			this.dsInsert.setColumn(nrow, "DS_EMAIL", this.dsList.getColumn(0, "DS_EMAIL"));
        			this.dsInsert.setColumn(nrow, "AT_SERVICE", this.dsList.getColumn(0, "AT_SERVICE"));
        			this.dsInsert.setColumn(nrow, "DS_OFFICE", this.dsList.getColumn(0, "DS_OFFICE"));
        			this.dsInsert.setColumn(nrow, "BK_CODE1", this.dsList.getColumn(0, "BK_CODE1"));
        			this.dsInsert.setColumn(nrow, "BK_NO1", this.dsList.getColumn(0, "BK_NO1"));
        			this.dsInsert.setColumn(nrow, "BK_LOCATION1", this.dsList.getColumn(0, "BK_LOCATION1"));
        			this.dsInsert.setColumn(nrow, "CD_UPJONG1", this.dsList.getColumn(0, "CD_UPJONG1"));
        			this.dsInsert.setColumn(nrow, "CD_UPJONG2", this.dsList.getColumn(0, "CD_UPJONG2"));
        			this.dsInsert.setColumn(nrow, "CD_UPJONG3", this.dsList.getColumn(0, "CD_UPJONG3"));
        			this.dsInsert.setColumn(nrow, "CD_UPJONG4", this.dsList.getColumn(0, "CD_UPJONG4"));
        			this.dsInsert.setColumn(nrow, "CD_UPJONG5", this.dsList.getColumn(0, "CD_UPJONG5"));
        			this.dsInsert.setColumn(nrow, "CD_UPJONG6", this.dsList.getColumn(0, "CD_UPJONG6"));
        			this.dsInsert.setColumn(nrow, "ID_HOMETAX", this.dsList.getColumn(0, "ID_HOMETAX"));
        			this.dsInsert.setColumn(nrow, "DS_CORP_ENG", this.dsList.getColumn(0, "DS_CORP_ENG"));
        			this.dsInsert.setColumn(nrow, "DS_DAMDANG", this.dsList.getColumn(0, "DS_DAMDANG"));


        			strSvcId = "insert";
        			inData = "insert=dsInsert";

        			break;

        		case "U" :

        			var nrow = this.dsUpdate.addRow();

        			//자산기본정보
        			this.dsUpdate.setColumn(nrow, "CD_SELFACNT", this.dsList.getColumn(0, "CD_DEPT_SELFACNT"));
        			this.dsUpdate.setColumn(nrow, "DS_SELFACNT", this.dsList.getColumn(0, "DS_DEPT_SELFACNT"));
        			this.dsUpdate.setColumn(nrow, "YN_TAXUNIT", this.dsList.getColumn(0, "YN_TAXUNIT"));
        			this.dsUpdate.setColumn(nrow, "DS_DAEPYO", this.dsList.getColumn(0, "DS_DAEPYO"));
        			this.dsUpdate.setColumn(nrow, "NO_SJC", this.gfnNvl(this.dsList.getColumn(0, "NO_SJC"),"").replace("-",""));
        			this.dsUpdate.setColumn(nrow, "DS_UPJONG", this.dsList.getColumn(0, "DS_UPJONG"));
        			this.dsUpdate.setColumn(nrow, "DS_UPTAE", this.dsList.getColumn(0, "DS_UPTAE"));
        			this.dsUpdate.setColumn(nrow, "DS_ADDR", this.dsList.getColumn(0, "DS_ADDR"));
        			var no_zip1 = this.gfnNvl(this.dsList.getColumn(0, "NO_ZIP1"),"").replace("-","");
        			this.dsUpdate.setColumn(nrow, "NO_ZIP1", no_zip1.length == 0 ? "" : no_zip1.substr(0,3));
        			this.dsUpdate.setColumn(nrow, "NO_ZIP2", no_zip1.length == 0 ? "" : (no_zip1.length == 6) ? no_zip1.substr(3,3) : no_zip1.substr(3,2));
        			this.dsUpdate.setColumn(nrow, "NO_TEL", this.dsList.getColumn(0, "NO_TEL"));
        			this.dsUpdate.setColumn(nrow, "DS_REM", this.dsList.getColumn(0, "DS_REM"));
        			this.dsUpdate.setColumn(nrow, "AT_TAX", this.dsList.getColumn(0, "AT_TAX"));
        			this.dsUpdate.setColumn(nrow, "NO_CORP", this.gfnNvl(this.dsList.getColumn(0, "NO_CORP"),"").replace("-",""));
        			this.dsUpdate.setColumn(nrow, "TEL_CORP", this.dsList.getColumn(0, "TEL_CORP"));
        			this.dsUpdate.setColumn(nrow, "NO_PAY", this.dsList.getColumn(0, "NO_PAY"));
        			this.dsUpdate.setColumn(nrow, "OPEN_YMD", this.dsList.getColumn(0, "OPEN_YMD"));
        			this.dsUpdate.setColumn(nrow, "YN_TOTAL", this.dsList.getColumn(0, "YN_TOTAL"));
        			this.dsUpdate.setColumn(nrow, "BK_VENDOR", this.dsList.getColumn(0, "BK_VENDOR"));
        			this.dsUpdate.setColumn(nrow, "BK_NO", this.dsList.getColumn(0, "BK_NO"));
        			this.dsUpdate.setColumn(nrow, "YMD_CLOSE", this.dsList.getColumn(0, "YMD_CLOSE"));
        			this.dsUpdate.setColumn(nrow, "DS_CLOSE", this.dsList.getColumn(0, "DS_CLOSE"));
        			this.dsUpdate.setColumn(nrow, "CD_TAXOFFICE", this.dsList.getColumn(0, "CD_TAXOFFICE"));
        			this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        			this.dsUpdate.setColumn(nrow, "CD_DEPT_SLIP", this.gfnNvl(this.dsList.getColumn(0, "CD_DEPT_SLIP"),"").replace("-",""));
        			this.dsUpdate.setColumn(nrow, "DS_DEPT_SLIP", this.dsList.getColumn(0, "DS_DEPT_SLIP"));
        			this.dsUpdate.setColumn(nrow, "AT_BIZ", this.dsList.getColumn(0, "AT_BIZ"));
        			this.dsUpdate.setColumn(nrow, "AT_TEL", this.dsList.getColumn(0, "AT_TEL"));
        			this.dsUpdate.setColumn(nrow, "DS_EMAIL", this.dsList.getColumn(0, "DS_EMAIL"));
        			this.dsUpdate.setColumn(nrow, "AT_SERVICE", this.dsList.getColumn(0, "AT_SERVICE"));
        			this.dsUpdate.setColumn(nrow, "DS_OFFICE", this.dsList.getColumn(0, "DS_OFFICE"));
        			this.dsUpdate.setColumn(nrow, "BK_CODE1", this.dsList.getColumn(0, "BK_CODE1"));
        			this.dsUpdate.setColumn(nrow, "BK_NO1", this.dsList.getColumn(0, "BK_NO1"));
        			this.dsUpdate.setColumn(nrow, "BK_LOCATION1", this.dsList.getColumn(0, "BK_LOCATION1"));
        			this.dsUpdate.setColumn(nrow, "CD_UPJONG1", this.dsList.getColumn(0, "CD_UPJONG1"));
        			this.dsUpdate.setColumn(nrow, "CD_UPJONG2", this.dsList.getColumn(0, "CD_UPJONG2"));
        			this.dsUpdate.setColumn(nrow, "CD_UPJONG3", this.dsList.getColumn(0, "CD_UPJONG3"));
        			this.dsUpdate.setColumn(nrow, "CD_UPJONG4", this.dsList.getColumn(0, "CD_UPJONG4"));
        			this.dsUpdate.setColumn(nrow, "CD_UPJONG5", this.dsList.getColumn(0, "CD_UPJONG5"));
        			this.dsUpdate.setColumn(nrow, "CD_UPJONG6", this.dsList.getColumn(0, "CD_UPJONG6"));
        			this.dsUpdate.setColumn(nrow, "ID_HOMETAX", this.dsList.getColumn(0, "ID_HOMETAX"));
        			this.dsUpdate.setColumn(nrow, "DS_CORP_ENG", this.dsList.getColumn(0, "DS_CORP_ENG"));
        			this.dsUpdate.setColumn(nrow, "DS_DAMDANG", this.dsList.getColumn(0, "DS_DAMDANG"));

        			strSvcId = "update";
        			inData = "update=dsUpdate";

        			break;

        		case "D" :

        			var nrow = this.dsDelete.addRow();

        			this.dsDelete.setColumn(nrow, "CD_SELFACNT", this.dsList.getColumn(0, "CD_DEPT_SELFACNT"));

        			strSvcId = "delete";
        			inData = "delete=dsDelete";

        			break;
        	}

        	if(this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        }

        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        this.fnPrint = function() {
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if(id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}
        	else if(id == "ccfCD_DEPT_SLIP")
        	{
        		if(this.gfnIsNull(this.dsList.getColumn(0, "CD_CORP")))
        		{
        			this.gfnAlert("법인번호를 먼저 선택하십시오");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));

        // 		dsUserParam.setColumn(nrow, "TY_VENDOR", "F");
        // 		dsUserParam.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        	}
        	// 파인건설과 코드파인드가 다른듯..?
        	else if(id == "ccfNO_SJC") {
        		if(this.gfnIsNull(this.dsList.getColumn(0, "CD_CORP")))
        		{
        			this.gfnAlert("법인번호를 먼저 선택하십시오");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	//일반사항 - 법인코드(DZX_CFCORP)
        	if(id == "ccfCD_CORP") {
        		this.ccfCD_DEPT_SLIP.form.fnCodeFindClear();
        		if(arr.length > 0) {
        			this.dsList.setColumn(0, "NO_CORP", arr[0]["NO_CORP"]);

        		} else {
        			this.dsList.setColumn(0, "NO_CORP", "");
        		}
        	}
        	else if(id == "ccfCD_UPJONG1" || id == "ccfCD_UPJONG2" || id == "ccfCD_UPJONG3" || id == "ccfCD_UPJONG5" || id == "ccfCD_UPJONG6")
        	{
        		if(arr.length > 0) {
        			var num = id.substr(id.length-1, 1);

        			this.dsList.set_enableevent(false);
        			this.dsList.setColumn(0, "CD_UPJONG" + num, arr[0]["CD_UPJONG"]);
        			this.dsList.setColumn(0, "DS_UPJONG" + num, arr[0]["DS_UPTAE"] + "/" + arr[0]["DS_UPJONG"]);
        			this.dsList.set_enableevent(true);
        		}
        	}
        	else if(id == "ccfNO_SJC")
        	{
        		if(arr.length > 0)
        		{
        			this.dsList.setColumn(0, "DS_DAEPYO", arr[0][""]);
        		}
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSelectValidate = function() {
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SELFACNT"))) {
        		this.divSearch.form.ctxtCD_SELFACNT.setFocus();
        		this.gfnAlert("세무단위코드가 입력되지않았습니다.");
        		return false;
         	}
        	return true;
        }

        this.fnDelValidate = function() {
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SELFACNT"))) {
        		this.divSearch.form.ctxtCD_SELFACNT.setFocus();
        		this.gfnAlert("세무단위코드가 입력되지않았습니다.");
        		return false;
         	}
        	return true;
        }

        this.fnSaveValidate = function() {

        	var strMsg = "";

        	if(this.gfnIsNull(this.dsList.getColumn(0, "CD_DEPT_SELFACNT"))) {
        		strMsg += "세무단위코드가 입력되지 않았습니다.\n";
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "DS_DEPT_SELFACNT"))) {
        		strMsg += "세무단위명이 입력되지 않았습니다.\n";
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "DS_DAEPYO"))) {
        		strMsg += "대표자명이 입력되지 않았습니다.\n";
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "CD_CORP"))) {
        		strMsg += "법인번호가 입력되지 않았습니다.\n";
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "NO_ZIP1"))) {
        		strMsg += "우편번호를 확인하십시요.\n";
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "DS_ADDR"))) {
        		strMsg += "주소가 입력되지 않았습니다.\n";
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "CD_DEPT_SLIP"))) {
        		strMsg += "전표발행세무서가 입력되지 않았습니다.\n";
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "NO_SJC"))) {
        		strMsg += "사업자번호가 입력되지 않았습니다.\n";
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "AT_TAX"))) {
        		strMsg += "담당세무서명이 입력되지 않았습니다.\n";
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "CD_TAXOFFICE"))) {
        		strMsg += "담당세무서코드가 입력되지 않았습니다.\n";
        	}

        	if(this.gfnNvl(this.dsList.getColumn(0, "CD_TAXOFFICE"),"").length !=3) {
        		strMsg += "담당세무서코드는 3자리 입니다.\n";
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "DS_UPTAE"))) {
        		strMsg += "업태가 입력되지 않았습니다.\n";
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "DS_UPJONG"))) {
        		strMsg += "업종이 입력되지 않았습니다.\n";
        	}

        	if(!this.gfnIsNull(this.dsList.getColumn(0, "OPEN_YMD")) && !this.gfnIsNull(this.dsList.getColumn(0, "YMD_CLOSE"))){

        		if(this.dsList.getColumn(0, "OPEN_YMD") > this.dsList.getColumn(0, "YMD_CLOSE")) {
        			strMsg += "폐업일은 개업일 이전일 수 없습니다.\n";
        		}

        	}

        	if(strMsg.length > 0) {
        		this.gfnAlert(strMsg);
        		return false;
        	}

        	return true;
        }
        this.dsList_onvaluechanged = function(obj,e)
        {
        // 	if(!this.gfnIsNull(this.divSearch.form.ctxtCD_SELFACNT.text)){
        // 		this.gfnSetFormStatus(this, "U");
        // 	} else {
        // 		this.gfnSetFormStatus(this, "I");
        // 	}

        	if(this.gfnDsIsUpdated(obj)){
        		var rowType = obj.getRowType(e.row);
        		this.gfnSetFormStatus(this, (rowType == 2 ? "I" : "U"));
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staCD_DEPT_SELFACNT.addEventHandler("onclick",this.staDS_CONTENT_onclick,this);
            this.divData.form.ccfCD_DEPT_SLIP.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.ccfCD_CORP.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.ccfNO_SJC.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.ccfNO_ZIP.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.staCD_UPJONG1.addEventHandler("onclick",this.divData_staDS_CONTENT16_onclick,this);
            this.divData.form.ccfCD_UPJONG1.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.ccfCD_UPJONG2.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.ccfCD_UPJONG3.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.ccfCD_UPJONG5.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.ccfCD_UPJONG6.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.ccfBK_CODE1.addEventHandler("onclick",this.Common_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DHV_SELFACNTDETAIL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
