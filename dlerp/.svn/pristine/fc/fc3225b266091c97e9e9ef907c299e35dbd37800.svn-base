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
            this.set_titletext("채권가압류");
            if (Form == this.constructor)
            {
                this._setFormPosition(1500,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZAPR_CLAIMQRY_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DZAPR_CLAIM_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DZAPR_CLAIM_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DZAPR_CLAIM_DELETE</Col></Row><Row><Col id=\"TARGET\">selectsite</Col><Col id=\"SP\">DZAPR_CLAIM_SITE_SELECT</Col></Row><Row><Col id=\"TARGET\">insertsite</Col><Col id=\"SP\">DZAPR_CLAIM_SITE_INSERT</Col></Row><Row><Col id=\"TARGET\">updatesite</Col><Col id=\"SP\">DZAPR_CLAIM_SITE_UPDATE</Col></Row><Row><Col id=\"TARGET\">deletesite</Col><Col id=\"SP\">DZAPR_CLAIM_SITE_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_SITECHECK", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">적용현장</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"NAME\">전사적용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_TERMINATE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">Yes</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"NAME\">No</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CREDITOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RDEPT\" type=\"STRING\" size=\"256\"/><Column id=\"FR_RECEIPT\" type=\"STRING\" size=\"256\"/><Column id=\"TO_RECEIPT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_TERMINATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_VENDOR\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_WF_SchLabelE");
            obj.set_text("법인코드");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0","10","230","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFCORP_STD");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","ccfCD_CORP:0","10","79","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("채무자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","staCD_VENDOR:0","10","250","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DFX_CFVENDOR");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_CREDITOR","ccfCD_VENDOR:0","10","79","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("채권자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_CREDITOR","staDS_CREDITOR:0","10","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_RDEPT","ctxtDS_CREDITOR:0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("관련현장");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_RDEPT","staDS_RDEPT:0","10","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_RECEIPT","ctxtDS_RDEPT:0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("접수일자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclFR_RECEIPT","staDT_RECEIPT:0","10","110","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_RECEIPT_DASH","ctclFR_RECEIPT:0","10","20","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclTO_RECEIPT","staDT_RECEIPT_DASH:0","10","110","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_TERMINATE","ctclTO_RECEIPT:0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("해지구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboYN_TERMINATE","staYN_TERMINATE:0","10","60","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsYN_TERMINATE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:20",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","30%","0","23",null,null,"0",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_background("url(\'theme://images/slt_WF_SplitterV.png\') no-repeat center center");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:6","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_scrollbartype("auto");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:6","0",null,null,"0","0","1021",null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta11","114","28",null,"34","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_cssclass("sta_WF_tablebgT");
            obj.set_text("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta03","114","61",null,"34","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta00","0","-3",null,"22","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_text("채권/채무관리");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta33_00","114","193","907","34",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta06","114","94","376","34",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta27","114","127","376","34",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta30","114","160","376","34",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta33","114","226",null,"34","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta35","114","259",null,"34","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta07","114","292",null,"34","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta43","114","325",null,"34","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta03_00","603","93",null,"101","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staNO_RECEIPT","0","28","115","34",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_text("접수번호");
            obj.set_cssclass("sta_WF_tablelabelT");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtNO_RECEIPT","119","33","198","24",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("7");
            obj.set_maxlength("15");
            obj.set_enable("false");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staDT_RECEIPT","489","28","115","34",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_text("접수일자");
            obj.set_cssclass("sta_WF_tablelabelTE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Calendar("tclDT_RECEIPT","608","33","120","24",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staDT_INPUT","732","28","115","34",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_text("입력일자");
            obj.set_cssclass("sta_WF_tablelabelTE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Calendar("tclDT_INPUT","851","33","120","24",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staNO_CASE","0","61","115","34",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_text("사건번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtNO_CASE","119","66","112","24",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("10");
            obj.set_maxlength("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staDS_CASE","235","61","81","34",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_text("사건명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtDS_CASE","320","66","165","24",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("11");
            obj.set_maxlength("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staID_INPUTSABUN","489","61","115","34",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_text("입력자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtID_INPUTSABUN","608","66","143","24",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("12");
            obj.set_maxlength("15");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtDS_INPUTSABUN","755","66","241","24",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("13");
            obj.set_maxlength("15");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staDS_BIGO","0","94","115","34",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_text("채권내용");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtDS_BIGO","119","99","366","24",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("14");
            obj.set_maxlength("100");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staDS_BALSONGCHO","0","127","115","34",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_text("발송처");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtDS_BALSONGCHO","119","132","366","24",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("15");
            obj.set_maxlength("100");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staDS_CREDITOR","0","160","115","34",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_text("채권자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtDS_CREDITOR","119","165","366","24",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("16");
            obj.set_maxlength("100");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","0","193","115","34",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_text("채무자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("cfCD_VENDOR","119","198","228","24",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("CodeFindName").set("DFX_CFVENDOR");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("17");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtNO_SJC","351","198","134","24",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("18");
            obj.set_maxlength("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0","226","115","34",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_text("해당현장");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Radio("rdoYN_SITECHECK","121","231","153","24",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("19");
            obj.set_innerdataset("dsYN_SITECHECK");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_direction("vertical");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staRM_BIGO","489","94","115","100",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new TextArea("txtRM_BIGO","608","99","388","90",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("21");
            obj.set_maxlength("100");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staDS_SITE_DTL","0","259","115","34",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_text("현장비고");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtDS_SITE_DTL","119","264","366","24",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("22");
            obj.set_maxlength("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staDS_VENDOR2","489","193","115","34",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_text("제3채무자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtDS_VENDOR2","608","198","388","24",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("23");
            obj.set_maxlength("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staAM_CLAIM","0","292","115","34",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_text("청구액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_CLAIM","119","297","112","24",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("24");
            obj.set_format("##,###,###,###,##0.####");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staYN_DISHONOR","235","292","115","34",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_text("부도여부");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Radio("rdoYN_DISHONOR","355","297","108","24",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("25");
            obj.set_innerdataset("dsYN");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_direction("vertical");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staDS_BIGOCANCEL","489","259","115","34",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_text("해지사유");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtDS_BIGOCANCEL","608","264","388","24",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("26");
            obj.set_maxlength("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staYN_TRANSFER","0","325","115","34",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_text("양도여부");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Radio("rdoYN_TRANSFER","120","330","105","24",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("27");
            obj.set_innerdataset("dsYN");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_direction("vertical");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staDS_BIGOJIGUEB","489","325","115","34",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_text("지급가능사유");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtDS_BIGOJIGUEB","608","330","388","24",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("28");
            obj.set_maxlength("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staYN_TERMINATE","489","226","115","34",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_text("해지구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Radio("rdoYN_TERMINATE","610","233","118","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("29");
            obj.set_innerdataset("dsYN");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_direction("vertical");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staYN_PROVISIONAL","235","325","115","34",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_text("가압류여부");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Radio("rdoYN_PROVISIONAL","355","330","108","24",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("30");
            obj.set_innerdataset("dsYN");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_direction("vertical");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staYN_JIGUEB","732","226","115","34",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_text("지급가능여부");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Radio("rdoYN_JIGUEB","851","233","106","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("31");
            obj.set_innerdataset("dsYN");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_direction("vertical");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta00_00","1","369",null,"22","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_text("적용현장");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_taborder("59");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"363","60","26","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("7");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_function");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"363","60","26","btnSave:4",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btnInsert",null,"363","60","26","btnDelete:4",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("4");
            obj.set_text("등록");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Grid("objGrid2","0","394",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_scrollbartype("auto");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staDT_HAEJI","489","292","115","34",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_text("해지일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_taborder("63");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Calendar("tclDT_HAEJI","608","297","120","24",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("64");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_VENDOR.form.DSTextBox","value","dsSearch","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctxtDS_CREDITOR","value","dsSearch","DS_CREDITOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctxtDS_RDEPT","value","dsSearch","DS_RDEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ctclFR_RECEIPT","value","dsSearch","FR_RECEIPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ctclTO_RECEIPT","value","dsSearch","TO_RECEIPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ccboYN_TERMINATE","value","dsSearch","YN_TERMINATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataRight.form.txtNO_RECEIPT","value","dsList","NO_RECEIPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataRight.form.tclDT_RECEIPT","value","dsList","DT_RECEIPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataRight.form.tclDT_INPUT","value","dsList","DT_INPUT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataRight.form.txtID_INPUT","value","dsList","ID_INPUT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","divData.form.divDataRight.form.txtDS_INPUT","value","dsList","DS_INPUT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divDataRight.form.txtDS_CASE","value","dsList","DS_CASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divDataRight.form.txtDS_BALSONGCHO","value","dsList","DS_BALSONGCHO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divDataRight.form.txtAM_CLAIM","value","dsList","AM_CLAIM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divDataRight.form.cfCD_VENDOR.form.CDTextBox","value","dsList","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","divData.form.divDataRight.form.cfCD_VENDOR.form.DSTextBox","value","dsList","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","divData.form.divDataRight.form.txtNO_SJC","value","dsList","NO_SJC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divDataRight.form.txtDS_CREDITOR","value","dsList","DS_CREDITOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divDataRight.form.rdoYN_SITECHECK","value","dsList","YN_SITECHECK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divDataRight.form.rdoYN_TERMINATE","value","dsList","YN_TERMINATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divDataRight.form.rdoYN_DISHONOR","value","dsList","YN_DISHONOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divDataRight.form.txtDS_BIGO","value","dsList","DS_BIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.divDataRight.form.txtDS_BIGOCANCEL","value","dsList","DS_BIGOCANCEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.divDataRight.form.txtRM_BIGO","value","dsList","RM_BIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.divDataRight.form.rdoYN_JIGUEB","value","dsList","YN_JIGUEB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.divDataRight.form.txtDS_VENDOR2","value","dsList","DS_VENDOR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.divDataRight.form.txtAM_CLAIM","value","dsList","AM_CLAIM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.divDataRight.form.rdoYN_TRANSFER","value","dsList","YN_TRANSFER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.divDataRight.form.rdoYN_PROVISIONAL","value","dsList","YN_PROVISIONAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.divDataRight.form.txtDS_SITE_DTL","value","dsList","DS_SITE_DTL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.divDataRight.form.txtDS_BIGOJIGUEB","value","dsList","DS_BIGOJIGUEB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.divDataRight.form.txtNO_CASE","value","dsList","NO_CASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divDataRight.form.tclDT_HAEJI","value","dsList","DT_HAEJI");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DZA_CLAIMQRY.xfdl", function() {
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
        	this.gfnSetElements();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	// 공통코드 세팅.
        	this.gfnLoadCommonCode([{col: "YN_TERMINATE", code: "DZYN", yn_all: "A"}]);
        	this.dsSearch.setColumn(0, "YN_TERMINATE", "");

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_CORP)) {
        		this.dsSearch.setColumn(0, "CD_CORP"     , this.getOwnerFrame().CD_CORP);
        		this.dsSearch.setColumn(0, "DS_CORP"     , this.getOwnerFrame().DS_CORP);
        		this.dsSearch.setColumn(0, "CD_VENDOR"   , this.getOwnerFrame().CD_VENDOR);
        		this.dsSearch.setColumn(0, "DS_VENDOR"   , this.getOwnerFrame().DS_VENDOR);
        		this.dsSearch.setColumn(0, "FR_RECEIPT"  , this.getOwnerFrame().FR_RECEIPT);
        		this.dsSearch.setColumn(0, "TO_RECEIPT"  , this.getOwnerFrame().TO_RECEIPT);
        		this.dsSearch.setColumn(0, "YN_TERMINATE", this.getOwnerFrame().YN_TERMINATE);
        		this.dsSearch.setColumn(0, "DS_CREDITOR" , this.getOwnerFrame().DS_CREDITOR);
        		this.dsSearch.setColumn(0, "DS_RDEPT"    , this.getOwnerFrame().DS_RDEPT);

        		this.FormBtns.Select.click();
        	}

        	this.fnSetSiteBtns();
        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관
         ************************************************************************/
        this.fnSetExtendButton = function() {};

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function()
        {
        	this.btnSave   = this.divData.form.divDataRight.form.btnSave;
        	this.btnDelete = this.divData.form.divDataRight.form.btnDelete;
        	this.btnInsert = this.divData.form.divDataRight.form.btnInsert;

        	this.dxGrid  = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGrid2 = this.divData.form.divDataRight.form.objGrid2;
        	this.cdGroup = this.gfnIsNull(this.AuthClient.CD_GROUP) ? "" : this.AuthClient.CD_GROUP;	// 그룹코드
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_VENDOR.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";

        	this.ccfCD_VENDOR.AfterCDTextChanged     = "fnAfterCDTextChanged";
        	this.cfCD_VENDOR.AfterCDTextChanged      = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid , this.dsList , "DF", "DZA_CLAIMQRY");
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DF", "DZA_CLAIM_SITE");

        	this.dxGrid2.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";

        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	this.dsSearch.setColumn(0, "FR_RECEIPT", "20000101");
        	this.dsSearch.setColumn(0, "TO_RECEIPT", this.gfnGetDate());
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_VENDOR"   	 , "string");
        	this.dsSelect.addColumn("FR_RECEIPT"  	 , "string");
        	this.dsSelect.addColumn("TO_RECEIPT"  	 , "string");
        	this.dsSelect.addColumn("YN_TERMINATE"	 , "string");
        	this.dsSelect.addColumn("CD_CORP"     	 , "string");
        	this.dsSelect.addColumn("DS_CREDITOR" 	 , "string");
        	this.dsSelect.addColumn("DS_RDEPT"    	 , "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("NO_RECEIPT"     , "string");
        	this.dsInsert.addColumn("DT_RECEIPT"     , "string");
        	this.dsInsert.addColumn("DT_INPUT"       , "string");
        	this.dsInsert.addColumn("ID_INPUT"       , "string");
        	this.dsInsert.addColumn("NO_CASE"        , "string");
        	this.dsInsert.addColumn("DS_CASE"        , "string");
        	this.dsInsert.addColumn("DS_BALSONGCHO"  , "string");
        	this.dsInsert.addColumn("AM_CLAIM"       , "bigdecimal");
        	this.dsInsert.addColumn("AM_PAY"         , "bigdecimal");
        	this.dsInsert.addColumn("CD_VENDOR"      , "string");
        	this.dsInsert.addColumn("DS_CREDITOR"    , "string");
        	this.dsInsert.addColumn("DT_LASTPAY"     , "string");
        	this.dsInsert.addColumn("DT_REQUESTPAY"  , "string");
        	this.dsInsert.addColumn("YN_SITECHECK"   , "string");
        	this.dsInsert.addColumn("DS_RESERVEDSITE", "string");
        	this.dsInsert.addColumn("YN_TERMINATE"   , "string");
        	this.dsInsert.addColumn("YN_DISHONOR"    , "string");
        	this.dsInsert.addColumn("DS_BIGO"        , "string");
        	this.dsInsert.addColumn("NO_TERMINATION" , "string");
        	this.dsInsert.addColumn("DS_BIGOCANCEL"  , "string");
        	this.dsInsert.addColumn("CD_CORP"        , "string");
        	this.dsInsert.addColumn("RM_BIGO"        , "string");
        	this.dsInsert.addColumn("YN_JIGUEB"      , "string");
        	this.dsInsert.addColumn("DS_VENDOR2"     , "string");
        	this.dsInsert.addColumn("RM_AMT"         , "string");
        	this.dsInsert.addColumn("CD_ACNTUNIT"    , "string");
        	this.dsInsert.addColumn("CD_ROOM"        , "string");
        	this.dsInsert.addColumn("YN_TRANSFER"    , "string");
        	this.dsInsert.addColumn("YN_PROVISIONAL" , "string");
        	this.dsInsert.addColumn("YN_SALE"        , "string");
        	this.dsInsert.addColumn("DS_SITE_DTL"    , "string");
        	this.dsInsert.addColumn("DS_BIGOJIGUEB"  , "string");
        	this.dsInsert.addColumn("DT_HAEJI"       , "string");
        	this.dsInsert.addColumn("ID_USER"        , "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("NO_RECEIPT"     , "string");
        	this.dsUpdate.addColumn("DT_RECEIPT"     , "string");
        	this.dsUpdate.addColumn("DT_INPUT"       , "string");
        	this.dsUpdate.addColumn("ID_INPUT"       , "string");
        	this.dsUpdate.addColumn("NO_CASE"        , "string");
        	this.dsUpdate.addColumn("DS_CASE"        , "string");
        	this.dsUpdate.addColumn("DS_BALSONGCHO"  , "string");
        	this.dsUpdate.addColumn("AM_CLAIM"       , "bigdecimal");
        	this.dsUpdate.addColumn("AM_PAY"         , "bigdecimal");
        	this.dsUpdate.addColumn("CD_VENDOR"      , "string");
        	this.dsUpdate.addColumn("DS_CREDITOR"    , "string");
        	this.dsUpdate.addColumn("DT_LASTPAY"     , "string");
        	this.dsUpdate.addColumn("DT_REQUESTPAY"  , "string");
        	this.dsUpdate.addColumn("YN_SITECHECK"   , "string");
        	this.dsUpdate.addColumn("DS_RESERVEDSITE", "string");
        	this.dsUpdate.addColumn("YN_TERMINATE"   , "string");
        	this.dsUpdate.addColumn("YN_DISHONOR"    , "string");
        	this.dsUpdate.addColumn("DS_BIGO"        , "string");
        	this.dsUpdate.addColumn("NO_TERMINATION" , "string");
        	this.dsUpdate.addColumn("DS_BIGOCANCEL"  , "string");
        	this.dsUpdate.addColumn("RM_BIGO"        , "string");
        	this.dsUpdate.addColumn("CD_CORP"        , "string");
        	this.dsUpdate.addColumn("YN_JIGUEB"      , "string");
        	this.dsUpdate.addColumn("DS_VENDOR2"     , "string");
        	this.dsUpdate.addColumn("RM_AMT"         , "string");
        	this.dsUpdate.addColumn("CD_ACNTUNIT"    , "string");
        	this.dsUpdate.addColumn("CD_ROOM"        , "string");
        	this.dsUpdate.addColumn("YN_TRANSFER"    , "string");
        	this.dsUpdate.addColumn("YN_PROVISIONAL" , "string");
        	this.dsUpdate.addColumn("YN_SALE"        , "string");
        	this.dsUpdate.addColumn("DS_SITE_DTL"    , "string");
        	this.dsUpdate.addColumn("DS_BIGOJIGUEB"  , "string");
        	this.dsUpdate.addColumn("DT_HAEJI"       , "string");
        	this.dsUpdate.addColumn("ID_USER"        , "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_CORP"        , "string");
        	this.dsDelete.addColumn("NO_RECEIPT"     , "string");

        	this.dsSiteSelect = new Dataset();
        	this.dsSiteSelect.addColumn("CD_CORP"    , "string");
        	this.dsSiteSelect.addColumn("NO_RECEIPT" , "string");
        	this.dsSiteSelect.addColumn("NO_CASE"  	 , "string");

        	this.dsSiteInsert = new Dataset();
        	this.dsSiteInsert.addColumn("CD_CORP" 	 , "string");
        	this.dsSiteInsert.addColumn("NO_RECEIPT" , "string");
        	this.dsSiteInsert.addColumn("NO_CASE"	 , "string");
        	this.dsSiteInsert.addColumn("CD_SITE"	 , "string");
        	this.dsSiteInsert.addColumn("DS_BIGO"	 , "string");
        	this.dsSiteInsert.addColumn("ID_USER"	 , "string");

        	this.dsSiteUpdate = new Dataset()
        	this.dsSiteUpdate.addColumn("CD_CORP"	 , "string");
        	this.dsSiteUpdate.addColumn("NO_RECEIPT" , "string");
        	this.dsSiteUpdate.addColumn("NO_CASE"	 , "string");
        	this.dsSiteUpdate.addColumn("CD_SITE"	 , "string");
        	this.dsSiteUpdate.addColumn("DS_BIGO"	 , "string");
        	this.dsSiteUpdate.addColumn("ID_USER"	 , "string");

        	this.dsSiteDelete = new Dataset()
        	this.dsSiteDelete.addColumn("CD_CORP"	 , "string");
        	this.dsSiteDelete.addColumn("NO_RECEIPT" , "string");
        	this.dsSiteDelete.addColumn("NO_CASE"	 , "string");
        	this.dsSiteDelete.addColumn("CD_SITE"	 , "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_VENDOR"   , this.dsSearch.getColumn(0, "CD_VENDOR"));
        	this.dsSelect.setColumn(0, "FR_RECEIPT"  , this.dsSearch.getColumn(0, "FR_RECEIPT"));
        	this.dsSelect.setColumn(0, "TO_RECEIPT"  , this.dsSearch.getColumn(0, "TO_RECEIPT"));
        	this.dsSelect.setColumn(0, "YN_TERMINATE", this.dsSearch.getColumn(0, "YN_TERMINATE"));
        	this.dsSelect.setColumn(0, "CD_CORP"     , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "DS_CREDITOR" , this.dsSearch.getColumn(0, "DS_CREDITOR"));
        	this.dsSelect.setColumn(0, "DS_RDEPT"    , this.dsSearch.getColumn(0, "DS_RDEPT"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        /*
          *	적용현장 조회 버튼
          */
        this.fnSiteSelect = function() {

        	this.gfnGridBeforeSelect(this.dxGrid2);

        	this.dsSiteSelect.clearData();
        	this.dsSiteSelect.addRow();

        	this.dsSiteSelect.setColumn(0, "CD_CORP"   , this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));
        	this.dsSiteSelect.setColumn(0, "NO_RECEIPT", this.dsList.getColumn(this.dsList.rowposition, "NO_RECEIPT"));
        	this.dsSiteSelect.setColumn(0, "NO_CASE"   , this.dsList.getColumn(this.dsList.rowposition, "NO_CASE"));

        	var strSvcId    = "selectsite";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectsite=dsSiteSelect";
        	var outData     = "dsList2=selectsite0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid);

        	this.fnInsertSetter();
        };

        this.fnInsertSetter = function() {

        	this.fnEnableSetter(true);

        	// 입력폼 세팅.
        	this.dsList.set_enableevent(false);
        	this.dsList.setColumn(this.dsList.rowposition, "YN_SITECHECK"  , "N");	// 해당현장
        	this.dsList.setColumn(this.dsList.rowposition, "YN_DISHONOR"   , "N");	// 부도여부
        	this.dsList.setColumn(this.dsList.rowposition, "YN_TRANSFER"   , "N");	// 양도여부
        	this.dsList.setColumn(this.dsList.rowposition, "YN_PROVISIONAL", "N");	// 가압류여부
        	this.dsList.setColumn(this.dsList.rowposition, "YN_TERMINATE"  , "N");	// 해지구분
        	this.dsList.setColumn(this.dsList.rowposition, "YN_JIGUEB"     , "N");	// 지급가능여부

        	this.dsList.setColumn(this.dsList.rowposition, "AM_CLAIM"      , 0);	// 청구액

        	this.dsList.setColumn(this.dsList.rowposition, "DT_RECEIPT"    , this.gfnGetDate());
        	this.dsList.setColumn(this.dsList.rowposition, "DT_INPUT"      , this.gfnGetDate());

        	this.dsList.setColumn(this.dsList.rowposition, "ID_INPUT" , this.AuthClient.ID_USER);
        	this.dsList.setColumn(this.dsList.rowposition, "DS_INPUT" , this.AuthClient.DS_HNAME);
        	this.dsList.set_enableevent(true);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크
        	if (!this.fnSaveValidate()) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	trace("222");

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        					if(i == this.dsList.rowposition) {
        						var nrow = this.dsInsert.addRow();
        						this.dsInsert.setColumn(nrow, "NO_RECEIPT"     , this.dsList.getColumn(i, "NO_RECEIPT"));
        						this.dsInsert.setColumn(nrow, "DT_RECEIPT"     , this.dsList.getColumn(i, "DT_RECEIPT"));
        						this.dsInsert.setColumn(nrow, "DT_INPUT"       , this.dsList.getColumn(i, "DT_INPUT"));
        						this.dsInsert.setColumn(nrow, "NO_CASE"        , this.dsList.getColumn(i, "NO_CASE"));
        						this.dsInsert.setColumn(nrow, "ID_INPUT"       , this.dsList.getColumn(i, "ID_INPUT"));
        						this.dsInsert.setColumn(nrow, "DS_CASE"        , this.dsList.getColumn(i, "DS_CASE"));
        						this.dsInsert.setColumn(nrow, "DS_BALSONGCHO"  , this.dsList.getColumn(i, "DS_BALSONGCHO"));
        						this.dsInsert.setColumn(nrow, "AM_CLAIM"       , this.dsList.getColumn(i, "AM_CLAIM"));
        						this.dsInsert.setColumn(nrow, "AM_PAY"         , 0);
        						this.dsInsert.setColumn(nrow, "CD_VENDOR"      , this.dsList.getColumn(i, "CD_VENDOR"));
        						this.dsInsert.setColumn(nrow, "DS_CREDITOR"    , this.dsList.getColumn(i, "DS_CREDITOR"));
        						this.dsInsert.setColumn(nrow, "DT_LASTPAY"     , 0);
        						this.dsInsert.setColumn(nrow, "DT_REQUESTPAY"  , 0);
        						this.dsInsert.setColumn(nrow, "YN_SITECHECK"   , this.dsList.getColumn(i, "YN_SITECHECK"));
        						this.dsInsert.setColumn(nrow, "DS_RESERVEDSITE", "");
        						this.dsInsert.setColumn(nrow, "YN_TERMINATE"   , this.dsList.getColumn(i, "YN_TERMINATE"));
        						this.dsInsert.setColumn(nrow, "YN_DISHONOR"    , this.dsList.getColumn(i, "YN_DISHONOR"));
        						this.dsInsert.setColumn(nrow, "DS_BIGO"        , this.dsList.getColumn(i, "DS_BIGO"));
        						this.dsInsert.setColumn(nrow, "NO_TERMINATION" , "");
        						this.dsInsert.setColumn(nrow, "DS_BIGOCANCEL"  , this.dsList.getColumn(i, "DS_BIGOCANCEL"));
        						this.dsInsert.setColumn(nrow, "CD_CORP"        , this.dsSearch.getColumn(0, "CD_CORP"));
        						this.dsInsert.setColumn(nrow, "RM_BIGO"        , this.dsList.getColumn(i, "RM_BIGO"));
        						this.dsInsert.setColumn(nrow, "YN_JIGUEB"      , this.dsList.getColumn(i, "YN_JIGUEB"));
        						this.dsInsert.setColumn(nrow, "DS_VENDOR2"     , this.dsList.getColumn(i, "DS_VENDOR2"));
        						this.dsInsert.setColumn(nrow, "RM_AMT"         , this.dsList.getColumn(i, "RM_AMT"));
        						this.dsInsert.setColumn(nrow, "CD_ACNTUNIT"    , this.dsList.getColumn(i, "CD_ACNTUNIT"));
        						this.dsInsert.setColumn(nrow, "CD_ROOM"        , this.dsList.getColumn(i, "CD_ROOM"));
        						this.dsInsert.setColumn(nrow, "YN_TRANSFER"    , this.dsList.getColumn(i, "YN_TRANSFER"));
        						this.dsInsert.setColumn(nrow, "YN_PROVISIONAL" , this.dsList.getColumn(i, "YN_PROVISIONAL"));
        						this.dsInsert.setColumn(nrow, "YN_SALE"        , this.dsList.getColumn(i, "YN_SALE"));
        						this.dsInsert.setColumn(nrow, "DS_SITE_DTL"    , this.dsList.getColumn(i, "DS_SITE_DTL"));
        						this.dsInsert.setColumn(nrow, "DS_BIGOJIGUEB"  , this.dsList.getColumn(i, "DS_BIGOJIGUEB"));
        						this.dsInsert.setColumn(nrow, "DT_HAEJI"       , this.dsList.getColumn(i, "DT_HAEJI"));
        						this.dsInsert.setColumn(nrow, "ID_USER"        , this.AuthClient.ID_USER);
        					}
        				break;

        			case "U":
        					var nrow = this.dsUpdate.addRow();
        					this.dsUpdate.setColumn(nrow, "NO_RECEIPT"     , this.dsList.getColumn(i, "NO_RECEIPT"));
        					this.dsUpdate.setColumn(nrow, "DT_RECEIPT"     , this.dsList.getColumn(i, "DT_RECEIPT"));
        					this.dsUpdate.setColumn(nrow, "DT_INPUT"       , this.dsList.getColumn(i, "DT_INPUT"));
        					this.dsUpdate.setColumn(nrow, "NO_CASE"        , this.dsList.getColumn(i, "NO_CASE"));
        					this.dsUpdate.setColumn(nrow, "ID_INPUT"       , this.dsList.getColumn(i, "ID_INPUT"));
        					this.dsUpdate.setColumn(nrow, "DS_CASE"        , this.dsList.getColumn(i, "DS_CASE"));
        					this.dsUpdate.setColumn(nrow, "DS_BALSONGCHO"  , this.dsList.getColumn(i, "DS_BALSONGCHO"));
        					this.dsUpdate.setColumn(nrow, "AM_CLAIM"       , this.dsList.getColumn(i, "AM_CLAIM"));
        					this.dsUpdate.setColumn(nrow, "AM_PAY"         , 0);
        					this.dsUpdate.setColumn(nrow, "CD_VENDOR"      , this.dsList.getColumn(i, "CD_VENDOR"));
        					this.dsUpdate.setColumn(nrow, "DS_CREDITOR"    , this.dsList.getColumn(i, "DS_CREDITOR"));
        					this.dsUpdate.setColumn(nrow, "DT_LASTPAY"     , 0);
        					this.dsUpdate.setColumn(nrow, "DT_REQUESTPAY"  , 0);
        					this.dsUpdate.setColumn(nrow, "YN_SITECHECK"   , this.dsList.getColumn(i, "YN_SITECHECK"));
        					this.dsUpdate.setColumn(nrow, "DS_RESERVEDSITE", "");
        					this.dsUpdate.setColumn(nrow, "YN_TERMINATE"   , this.dsList.getColumn(i, "YN_TERMINATE"));
        					this.dsUpdate.setColumn(nrow, "YN_DISHONOR"    , this.dsList.getColumn(i, "YN_DISHONOR"));
        					this.dsUpdate.setColumn(nrow, "DS_BIGO"        , this.dsList.getColumn(i, "DS_BIGO"));
        					this.dsUpdate.setColumn(nrow, "NO_TERMINATION" , "");
        					this.dsUpdate.setColumn(nrow, "DS_BIGOCANCEL"  , this.dsList.getColumn(i, "DS_BIGOCANCEL"));
        					this.dsUpdate.setColumn(nrow, "RM_BIGO"        , this.dsList.getColumn(i, "RM_BIGO"));
        					this.dsUpdate.setColumn(nrow, "CD_CORP"        , this.dsSearch.getColumn(0, "CD_CORP"));
        					this.dsUpdate.setColumn(nrow, "YN_JIGUEB"      , this.dsList.getColumn(i, "YN_JIGUEB"));
        					this.dsUpdate.setColumn(nrow, "DS_VENDOR2"     , this.dsList.getColumn(i, "DS_VENDOR2"));
        					this.dsUpdate.setColumn(nrow, "RM_AMT"         , this.dsList.getColumn(i, "RM_AMT"));
        					this.dsUpdate.setColumn(nrow, "CD_ACNTUNIT"    , this.dsList.getColumn(i, "CD_ACNTUNIT"));
        					this.dsUpdate.setColumn(nrow, "CD_ROOM"        , this.dsList.getColumn(i, "CD_ROOM"));
        					this.dsUpdate.setColumn(nrow, "YN_TRANSFER"    , this.dsList.getColumn(i, "YN_TRANSFER"));
        					this.dsUpdate.setColumn(nrow, "YN_PROVISIONAL" , this.dsList.getColumn(i, "YN_PROVISIONAL"));
        					this.dsUpdate.setColumn(nrow, "YN_SALE"        , this.dsList.getColumn(i, "YN_SALE"));
        					this.dsUpdate.setColumn(nrow, "DS_SITE_DTL"    , this.dsList.getColumn(i, "DS_SITE_DTL"));
        					this.dsUpdate.setColumn(nrow, "DS_BIGOJIGUEB"  , this.dsList.getColumn(i, "DS_BIGOJIGUEB"));
        					this.dsUpdate.setColumn(nrow, "DT_HAEJI"       , this.dsList.getColumn(i, "DT_HAEJI"));
        					this.dsInsert.setColumn(nrow, "ID_USER"        , this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        					this.dsDelete.setColumn(nrow, "CD_CORP"        , this.dsSearch.getColumn(0, "CD_CORP"));
        					this.dsDelete.setColumn(nrow, "NO_RECEIPT"     , this.dsList.getColumn(i, "NO_RECEIPT"));
        				break;
        		}
        	}

        	trace("333");

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	trace("444");

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        // 계획 저장
        this.fnSaveSite = function() {

        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid2)) return;

        	this.dxGrid2.updateToDataset();

        	this.dsSiteInsert.clearData();
        	this.dsSiteUpdate.clearData();
        	this.dsSiteDelete.clearData();

        	for (var i = 0; i < this.dsList2.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList2, i);
        		switch(flag) {
        			case "I":
        					var nrow = this.dsSiteInsert.addRow();
        					this.dsSiteInsert.setColumn(nrow, "CD_CORP"   	, this.dsList2.getColumn(i, "CD_CORP"));
        					this.dsSiteInsert.setColumn(nrow, "NO_RECEIPT"	, this.dsList2.getColumn(i, "NO_RECEIPT"));
        					this.dsSiteInsert.setColumn(nrow, "NO_CASE"     , this.dsList2.getColumn(i, "NO_CASE"));
        					this.dsSiteInsert.setColumn(nrow, "CD_SITE"		, this.dsList2.getColumn(i, "CD_SITE"));
        					this.dsSiteInsert.setColumn(nrow, "DS_BIGO"		, this.dsList2.getColumn(i, "DS_BIGO"));
        					this.dsSiteInsert.setColumn(nrow, "ID_USER"		, this.AuthClient.ID_USER);

        				break;

        			case "U":
        					var nrow = this.dsSiteUpdate.addRow();
        					this.dsSiteUpdate.setColumn(nrow, "CD_CORP"		, this.dsList2.getColumn(i, "CD_CORP"));
        					this.dsSiteUpdate.setColumn(nrow, "NO_RECEIPT"	, this.dsList2.getColumn(i, "NO_RECEIPT"));
        					this.dsSiteUpdate.setColumn(nrow, "NO_CASE"		, this.dsList2.getColumn(i, "NO_CASE"));
        					this.dsSiteUpdate.setColumn(nrow, "CD_SITE"		, this.dsList2.getColumn(i, "CD_SITE"));
        					this.dsSiteUpdate.setColumn(nrow, "DS_BIGO"		, this.dsList2.getColumn(i, "DS_BIGO"));
        					this.dsSiteUpdate.setColumn(nrow, "ID_USER"		, this.AuthClient.ID_USER);
        				break;

        			case "D":
        					var nrow = this.dsSiteDelete.addRow();
        					this.dsSiteDelete.setColumn(nrow, "CD_CORP"		, this.dsList2.getColumn(i, "CD_CORP"));
        					this.dsSiteDelete.setColumn(nrow, "NO_RECEIPT"	, this.dsList2.getColumn(i, "NO_RECEIPT"));
        					this.dsSiteDelete.setColumn(nrow, "NO_CASE"		, this.dsList2.getColumn(i, "NO_CASE"));
        					this.dsSiteDelete.setColumn(nrow, "CD_SITE"		, this.dsList2.getColumn(i, "CD_SITE"));
        				break;
        		}
        	}

        	if (this.dsSiteInsert.rowcount == 0 && this.dsSiteUpdate.rowcount == 0 && this.dsSiteDelete.rowcount == 0) return;

        	var strSvcId    = "savesite";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insertsite=dsSiteInsert updatesite=dsSiteUpdate deletesite=dsSiteDelete";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        		this.gfnAlert("법인코드를 입력 하세요.");
        		this.ccfCD_CORP.setFocus();
        		return false;
        	}

        	return true;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	if (svcID == "selectsite") {
        		this.gfnGridAfterSelect(this.dxGrid2);
        	}
        	}else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "savesite") {
        		if (errorCode == 0) {
        			this.fnSiteSelect();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if(id == "ccfCD_VENDOR") {
        		dsUserParam.setColumn(nrow, "TY_VENDOR1", "F");
        		dsUserParam.setColumn(nrow, "CD_CORP"   , this.dsSearch.getColumn(0, "CD_CORP"));
        	}

        	if(id == "cfCD_VENDOR") {
        		dsUserParam.setColumn(nrow, "TY_VENDOR1", "F");
        		dsUserParam.setColumn(nrow, "CD_CORP"   , this.dsSearch.getColumn(0, "CD_CORP"));
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	switch(id) {

        		// 금융기관거래처(전표발행지점)
        		case "cfCD_VENDOR":
        				if(arr.length > 0) {

        					this.dsList.set_enableevent(false);
        					this.dsList.setColumn(this.dsList.rowposition, "NO_SJC", arr[0]["NO_SJC"]);
        					this.dsList.set_enableevent(true);
        				}
        			break;

        		default:
        	}
        	return true;
        }

        this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow) {
        	var cdCorp = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");

        	// 귀속부서
        	if (id == "DFX_CFACNTUNIT") {
        		dsUserParam.setColumn(nrow, "CD_GROUP", this.cdGroup);
        		dsUserParam.setColumn(nrow, "CD_CORP" , this.gfnIsNull(cdCorp) ? this.dsSearch.getColumn(0, "CD_CORP") : cdCorp);
        	}
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {

        		this.fnSiteSelect();
        		this.fnSetSiteBtns();

        		this.dsList.set_enableevent(false);

        		// 해지구분
        		this.txtDS_BIGOCANCEL.set_enable(this.dsList.getColumn(e.row, "YN_TERMINATE") == "Y" ? true : false);
        		if(this.dsList.getColumn(e.row, "YN_TERMINATE") == "N") this.dsList.setColumn(e.row, "DS_BIGOCANCEL", "");

        		// 해지일자
        		this.tclDT_HAEJI.set_enable(this.dsList.getColumn(e.row, "YN_TERMINATE") == "Y" ? true : false);
        		if(this.dsList.getColumn(e.row, "YN_TERMINATE") == "N") this.dsList.setColumn(e.row, "DT_HAEJI", "");

        		// 지급가능여부
        		this.txtDS_BIGOJIGUEB.set_enable(this.dsList.getColumn(e.row, "YN_JIGUEB") == "Y" ? true : false);
        		if(this.dsList.getColumn(e.row, "YN_JIGUEB") == "N") this.dsList.setColumn(e.row, "DS_BIGOJIGUEB", "");

        		this.dsList.set_enableevent(true);

        		obj.oldrow = -1;
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		if(e.columnid == "CD_CORP") {
        			this.ccfCD_VENDOR.form.fnCodeFindClear(false);
        		}
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };

        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_left(e.clientx);
        		this.divData.form.resetScroll();
        	}
        };

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {

        		this.dsList.set_enableevent(false);

        		// 해당현장
        		if(e.columnid == "YN_SITECHECK") {
        			this.fnSetSiteBtns();
        		}

        		// 해지구분, 해지일자
        		if(e.columnid == "YN_TERMINATE") {
        			this.txtDS_BIGOCANCEL.set_enable(e.newvalue == "Y" ? true : false);
        			this.tclDT_HAEJI.set_enable(e.newvalue == "Y" ? true : false);
        			if(e.newvalue == "N") {
        				this.dsList.setColumn(this.dsList.rowposition, "DS_BIGOCANCEL", "");
        				this.dsList.setColumn(this.dsList.rowposition, "DT_HAEJI", "");
        			}
        		}

        		// 지급가능여부
        		if(e.columnid == "YN_JIGUEB") {
        			this.txtDS_BIGOJIGUEB.set_enable(e.newvalue == "Y" ? true : false);
        			if(e.newvalue == "N") this.dsList.setColumn(this.dsList.rowposition, "DS_BIGOJIGUEB", "");
        		}

        		this.dsList.set_enableevent(true);
        	}
        };

        this.fnSaveValidate = function() {

        	if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR"))) {
        		this.gfnAlert("채무자를 입력하세요.");
        		this.cfCD_VENDOR.form.TextBox.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "DS_CREDITOR"))) {
        		this.gfnAlert("채권자를 입력하세요.");
        		this.txtDS_CREDITOR.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "DT_RECEIPT"))) {
        		this.gfnAlert("접수일자를 입력하세요.");
        		this.tclDT_RECEIPT.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "DS_BIGO"))) {
        		this.gfnAlert("채권내용을 입력하세요.");
        		this.txtDS_BIGO.setFocus();
        		return false;
        	}

        	// 수정상태일 경우만 적용현장 필수.
        	var flag = this.gfnGetFlag(this.dsList, this.dsList.rowposition);
         	if(flag == "U" && this.dsList.getColumn(this.dsList.rowposition, "YN_SITECHECK") == "Y") {
         		if(this.dsList2.rowcount < 1) {
         			this.gfnAlert("현장을 입력하세요.");
         			return false;
         		}
         	}

        	if(this.dsList.getColumn(this.dsList.rowposition, "YN_TERMINATE") == "Y" && this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "DS_BIGOCANCEL"))) {
        		this.gfnAlert("해지사유를 입력하세요.");
        		this.txtDS_BIGOCANCEL.setFocus();
        		return false;
        	}

        	if(this.dsList.getColumn(this.dsList.rowposition, "YN_JIGUEB") == "Y" && this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "DS_BIGOJIGUEB"))) {
        		this.gfnAlert("지급가능 사유를 입력하세요.");
        		this.txtDS_BIGOJIGUEB.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "DS_BIGO"))) {
        		this.gfnAlert("채권내용을 입력하세요.");
        		this.txtDS_BIGO.setFocus();
        		return false;
        	}

        	return true;
        }

        this.fnEnableSetter = function($BOOL) {

        	this.tclDT_RECEIPT.set_enable($BOOL);		// 접수일자
        	this.txtNO_CASE.set_enable($BOOL);			// 사건번호
        	this.txtDS_CASE.set_enable($BOOL);			// 사건명
        	this.txtDS_BIGO.set_enable($BOOL);			// 채권내용
        	this.txtDS_BALSONGCHO.set_enable($BOOL);	// 발송처
        	this.txtDS_CREDITOR.set_enable($BOOL);		// 채권자
        	this.cfCD_VENDOR.set_enable($BOOL);			// 채무자
        	this.rdoYN_SITECHECK.set_enable($BOOL);		// 해당현장
        	this.txtRM_BIGO.set_enable($BOOL);			// 비고
        	this.txtDS_SITE_DTL.set_enable($BOOL);		// 현장비고
        	this.txtDS_VENDOR2.set_enable($BOOL);		// 제3채무자
        	this.txtAM_CLAIM.set_enable($BOOL);			// 청구액
        	this.rdoYN_DISHONOR.set_enable($BOOL);		// 부도여부
        	this.rdoYN_TRANSFER.set_enable($BOOL);		// 양도여부
        	this.rdoYN_PROVISIONAL.set_enable($BOOL);	// 가압류여부
        	this.rdoYN_TERMINATE.set_enable($BOOL);		// 해지구분
        	this.rdoYN_JIGUEB.set_enable($BOOL);		// 지급가능여부

        	if(!this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "NO_RECEIPT"))) {
        		this.txtNO_CASE.set_enable(false);
        	}

        	this.txtDS_BIGOCANCEL.set_enable(this.dsList.getColumn(this.dsList.rowposition, "YN_TERMINATE") == "Y" ? true : false);		// 해지구분
        	this.tclDT_HAEJI.set_enable(this.dsList.getColumn(this.dsList.rowposition, "YN_TERMINATE") == "Y" ? true : false);			// 해지일자
        	this.txtDS_BIGOJIGUEB.set_enable(this.dsList.getColumn(this.dsList.rowposition, "YN_JIGUEB") == "Y" ? true : false);		// 지급가능여부
        }

        // 등록
        this.divData_divDataRight_btnInsert_onclick = function(obj,e)
        {
        	var nrow = this.gfnGridAdd(this.dxGrid2, "bottom");
        	this.dsList2.set_enableevent(false);

        	var row = this.dsList.rowposition;

         	this.dsList2.setColumn(nrow, "CD_CORP"   , this.dsList.getColumn(row, "CD_CORP"));			// 법인코드
        	this.dsList2.setColumn(nrow, "NO_RECEIPT", this.dsList.getColumn(row, "NO_RECEIPT"));		// 접수번호
        	this.dsList2.setColumn(nrow, "NO_CASE"   , this.dsList.getColumn(row, "NO_CASE"));			// 사건번호

        	this.dsList2.set_enableevent(true);

        	this.dsList2.set_rowposition(nrow);
        	this.dxGrid2.setCellPos(1);
        };

        // 삭제
        this.divData_divDataRight_btnDelete_onclick = function(obj,e)
        {
        	this.gfnGridDel(this.dxGrid2);
        };

        // 저장
        this.divData_divDataRight_btnSave_onclick = function(obj,e)
        {
        	this.fnSaveSite();
        	this.fnSave();
        };

        // 적용현장 버튼 세팅.
        this.fnSetSiteBtns = function() {
        	this.btnSave.set_enable(false);
        	this.btnDelete.set_enable(false);
        	this.btnInsert.set_enable(false);

        	var flag = this.gfnGetFlag(this.dsList, this.dsList.rowposition);

        	var ds   = this.dsList;
        	var row  = this.dsList.rowposition;

        	if(flag != 'I' && ds.getColumn(row, "YN_SITECHECK") == "Y") {		// 적용현장
        		this.btnSave.set_enable(true);
        		this.btnDelete.set_enable(true);
        		this.btnInsert.set_enable(true);
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataRight.form.btnSave.addEventHandler("onclick",this.divData_divDataRight_btnSave_onclick,this);
            this.divData.form.divDataRight.form.btnDelete.addEventHandler("onclick",this.divData_divDataRight_btnDelete_onclick,this);
            this.divData.form.divDataRight.form.btnInsert.addEventHandler("onclick",this.divData_divDataRight_btnInsert_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsList2.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DZA_CLAIMQRY.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
