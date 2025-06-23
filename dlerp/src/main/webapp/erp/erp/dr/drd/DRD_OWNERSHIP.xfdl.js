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
            this.set_titletext("소유권이전");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DRDPR_OWNERSHIP_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DRDPR_OWNERSHIP_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DRDPR_OWNERSHIP_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DRDPR_OWNERSHIP_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_RECEIPT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">본인</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_RECEIPTLAND", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">확인</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">미확인</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_UNIONMEMBER\" type=\"STRING\" size=\"256\"/><Column id=\"YN_OPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_SCRIVENER\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CHARGER\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"YN_RECEIPT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_RECEIPTPLAN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONF\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RECEIPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR2\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR3\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR4\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR5\" type=\"STRING\" size=\"256\"/><Column id=\"AM_LOAN1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_LOAN2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_LOAN3\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_LOAN4\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_LOAN5\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("사업지코드");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNTUNIT","staCD_ACNTUNIT:0.0","10.0","350","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DRX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("2");
            obj.getSetter("FitToContents").set("true");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("readonly").set("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ccfCD_ACNTUNIT:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("동층호/성명");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_DONG","sta00:0.0","10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_maxlength("4");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_FLOOR","ctxtNO_DONG:0.0","10.0","40","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_maxlength("2");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_HO","ctxtNO_FLOOR:0.0","10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_maxlength("3");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","5%","100.00%","5",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,"100%","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTopTitle","0","10",null,"22","5",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("소유권이전정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDS_SCRIVENER","0","staTopTitle:15","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("법무사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDS_SCRIVENER","staDS_SCRIVENER:-1","staTopTitle:15","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_SCRIVENER","staDS_SCRIVENER:4","staTopTitle:20","150","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("11");
            obj.set_autoselect("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staNO_TEL","0","staDS_SCRIVENER:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("☎(전화)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgNO_TEL","staNO_TEL:-1","staDS_SCRIVENER:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_TEL","staNO_TEL:4","staBgDS_SCRIVENER:4","150","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("11");
            obj.set_autoselect("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDS_CHARGER","0","staBgNO_TEL:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("3");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDS_CHARGER","staDS_CHARGER:-1","staNO_TEL:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_CHARGER","staDS_CHARGER:4","staBgNO_TEL:4","150","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("11");
            obj.set_autoselect("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDS_REMARK","staBgDS_SCRIVENER:-1","staTopTitle:15","150","88",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDS_REMARK","staDS_REMARK:-1","staTopTitle:15","300","88",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new TextArea("txtDS_REMARK","staDS_REMARK:4","staTopTitle:19","290","80",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("76");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staYN_RECEIPT","0","staBgDS_CHARGER:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("소유권이전확인(건물)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgYN_RECEIPT","staYN_RECEIPT:-1","staBgDS_CHARGER:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("rdoYN_RECEIPT","staYN_RECEIPT:4","staBgDS_CHARGER:4","150","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("50");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_RECEIPT");
            obj.getSetter("requiredYN").set("Y");
            obj.getSetter("requiredMsg").set("소유권이전확인(건물)");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_CONF","rdoYN_RECEIPT:10","staBgDS_CHARGER:4","105","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staYN_RECEIPTLAND","staBgDS_SCRIVENER:-1","staBgDS_REMARK:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("소유권이전확인(대지)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgYN_RECEIPTLAND","staYN_RECEIPTLAND:-1","staBgDS_CHARGER:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("rdoYN_RECEIPTLAND","staYN_RECEIPTLAND:4","staBgDS_CHARGER:4","150","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("50");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_RECEIPTLAND");
            obj.getSetter("requiredYN").set("Y");
            obj.getSetter("requiredMsg").set("소유권이전확인(대지)");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_RECEIPT","rdoYN_RECEIPTLAND:10","staBgDS_CHARGER:4","105","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR1","0","staBgYN_RECEIPT:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("융자설정사 - 1순위");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgCD_VENDOR1","staCD_VENDOR1:-1","staBgYN_RECEIPT:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("cfCD_VENDOR1","staCD_VENDOR1:4","staBgYN_RECEIPT:4","280","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.getSetter("CodeFindName").set("DRX_CFRentVendor_CodeFind");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("57");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            obj.getSetter("requiredYN").set("Y");
            obj.getSetter("requiredMsg").set("융자설정사 - 1순위");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR2","0","staBgCD_VENDOR1:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("융자설정사 - 2순위");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgCD_VENDOR2","staCD_VENDOR2:-1","staBgCD_VENDOR1:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("cfCD_VENDOR2","staCD_VENDOR2:4","staCD_VENDOR1:4","280","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.getSetter("CodeFindName").set("DRX_CFRentVendor_CodeFind");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("57");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            obj.getSetter("requiredYN").set("Y");
            obj.getSetter("requiredMsg").set("융자설정사 - 2순위");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR3","0","staBgCD_VENDOR2:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("융자설정사 - 3순위");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgCD_VENDOR3","staCD_VENDOR3:-1","staBgCD_VENDOR2:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("cfCD_VENDOR3","staCD_VENDOR3:4","staCD_VENDOR2:4","280","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.getSetter("CodeFindName").set("DRX_CFRentVendor_CodeFind");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("57");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            obj.getSetter("requiredYN").set("Y");
            obj.getSetter("requiredMsg").set("융자설정사 - 3순위");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR4","0","staBgCD_VENDOR3:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("융자설정사 - 4순위");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgCD_VENDOR4","staCD_VENDOR4:-1","staBgCD_VENDOR3:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("cfCD_VENDOR4","staCD_VENDOR4:4","staCD_VENDOR3:4","280","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.getSetter("CodeFindName").set("DRX_CFRentVendor_CodeFind");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("57");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            obj.getSetter("requiredYN").set("Y");
            obj.getSetter("requiredMsg").set("융자설정사 - 4순위");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR5","0","staBgCD_VENDOR4:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("융자설정사 - 5순위");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgCD_VENDOR5","staCD_VENDOR5:-1","staBgCD_VENDOR4:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("cfCD_VENDOR5","staCD_VENDOR5:4","staCD_VENDOR4:4","280","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.getSetter("CodeFindName").set("DRX_CFRentVendor_CodeFind");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("57");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            obj.getSetter("requiredYN").set("Y");
            obj.getSetter("requiredMsg").set("융자설정사 - 5순위");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staAM_LOAN1","staBgCD_VENDOR1:-1","staBgYN_RECEIPTLAND:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("융자금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgAM_LOAN1","staAM_LOAN1:-1","staBgYN_RECEIPTLAND:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtAM_LOAN1","staAM_LOAN1:4","staYN_RECEIPTLAND:4","150","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("11");
            obj.set_autoselect("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staAM_LOAN2","staBgCD_VENDOR1:-1","staBgAM_LOAN1:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("융자금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgAM_LOAN2","staAM_LOAN2:-1","staBgAM_LOAN1:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtAM_LOAN2","staAM_LOAN2:4","staAM_LOAN1:4","150","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("11");
            obj.set_autoselect("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staAM_LOAN3","staBgCD_VENDOR2:-1","staBgAM_LOAN2:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("융자금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgAM_LOAN3","staAM_LOAN3:-1","staBgAM_LOAN2:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtAM_LOAN3","staAM_LOAN3:4","staAM_LOAN2:4","150","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("11");
            obj.set_autoselect("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staAM_LOAN4","staBgCD_VENDOR3:-1","staBgAM_LOAN3:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("융자금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgAM_LOAN4","staAM_LOAN4:-1","staBgAM_LOAN3:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtAM_LOAN4","staAM_LOAN4:4","staAM_LOAN3:4","150","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("11");
            obj.set_autoselect("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staAM_LOAN5","staBgCD_VENDOR4:-1","staBgAM_LOAN4:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("융자금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgAM_LOAN5","staAM_LOAN5:-1","staBgAM_LOAN4:-1","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtAM_LOAN5","staAM_LOAN5:4","staAM_LOAN4:4","150","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("11");
            obj.set_autoselect("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item00","divSearch.form.ccfCD_ACNTUNIT.form.CDTextBox","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item01","divSearch.form.ccfCD_ACNTUNIT.form.DSTextBox","value","dsSearch","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item02","divSearch.form.ctxtNO_DONG","value","dsSearch","NO_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item03","divSearch.form.ctxtNO_FLOOR","value","dsSearch","NO_FLOOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item04","divSearch.form.ctxtNO_HO","value","dsSearch","NO_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item05","divData.form.divDataTop.form.ctxtDS_SCRIVENER","value","dsList","DS_SCRIVENER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item06","divData.form.divDataTop.form.ctxtNO_TEL","value","dsList","NO_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item07","divData.form.divDataTop.form.ctxtDS_CHARGER","value","dsList","DS_CHARGER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item08","divData.form.divDataTop.form.txtDS_REMARK","value","dsList","DS_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item09","divData.form.divDataTop.form.rdoYN_RECEIPT","value","dsList","YN_RECEIPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataTop.form.rdoYN_RECEIPTLAND","value","dsList","YN_RECEIPTLAND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataTop.form.ctclDT_CONF","value","dsList","DT_CONF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataTop.form.ctclDT_RECEIPT","value","dsList","DT_RECEIPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divDataTop.form.cfCD_VENDOR1.form.CDTextBox","value","dsList","CD_VENDOR1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divDataTop.form.cfCD_VENDOR1.form.DSTextBox","value","dsList","DS_VENDOR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divDataTop.form.cfCD_VENDOR2.form.CDTextBox","value","dsList","CD_VENDOR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divDataTop.form.cfCD_VENDOR2.form.DSTextBox","value","dsList","DS_VENDOR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divDataTop.form.cfCD_VENDOR3.form.CDTextBox","value","dsList","CD_VENDOR3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divDataTop.form.cfCD_VENDOR3.form.DSTextBox","value","dsList","DS_VENDOR3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divDataTop.form.cfCD_VENDOR4.form.CDTextBox","value","dsList","CD_VENDOR4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divDataTop.form.cfCD_VENDOR4.form.DSTextBox","value","dsList","DS_VENDOR4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divDataTop.form.cfCD_VENDOR5.form.CDTextBox","value","dsList","CD_VENDOR5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divDataTop.form.cfCD_VENDOR5.form.DSTextBox","value","dsList","DS_VENDOR5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divDataTop.form.ctxtAM_LOAN1","value","dsList","AM_LOAN1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.divDataTop.form.ctxtAM_LOAN2","value","dsList","AM_LOAN2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.divDataTop.form.ctxtAM_LOAN3","value","dsList","AM_LOAN3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.divDataTop.form.ctxtAM_LOAN4","value","dsList","AM_LOAN4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.divDataTop.form.ctxtAM_LOAN5","value","dsList","AM_LOAN5");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DRD_OWNERSHIP.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        	this.dsSearch.setColumn(0, "DS_ACNTUNIT", this.getOwnerFrame().DS_ACNTUNIT);
        	this.dsSearch.setColumn(0, "NO_DONG", this.getOwnerFrame().NO_DONG);
        	this.dsSearch.setColumn(0, "NO_FLOOR", this.getOwnerFrame().NO_FLOOR);
        	this.dsSearch.setColumn(0, "NO_HO", this.getOwnerFrame().NO_HO);
        	this.dsSearch.setColumn(0, "NO_UNIONMEMBER", this.getOwnerFrame().NO_UNIONMEMBER);
        	this.dsSearch.setColumn(0, "YN_OPTION", this.getOwnerFrame().YN_OPTION);

        	this.FormBtns.Select.click();
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
        	this.ccfCD_ACNTUNIT = this.divSearch.form.ccfCD_ACNTUNIT;
        	this.ctxtNO_DONG = this.divSearch.form.ctxtNO_DONG;
        	this.ctxtNO_FLOOR = this.divSearch.form.ctxtNO_FLOOR;
        	this.ctxtNO_HO = this.divSearch.form.ctxtNO_HO;
        	this.ctxtDS_SCRIVENER = this.divData.form.divDataTop.form.ctxtDS_SCRIVENER;
        	this.ctxtNO_TEL = this.divData.form.divDataTop.form.ctxtNO_TEL;
        	this.ctxtDS_CHARGER = this.divData.form.divDataTop.form.ctxtDS_CHARGER;
        	this.txtDS_REMARK = this.divData.form.divDataTop.form.txtDS_REMARK;
        	this.ctclDT_CONF = this.divData.form.divDataTop.form.ctclDT_CONF;
        	this.ctclDT_RECEIPT = this.divData.form.divDataTop.form.ctclDT_RECEIPT;
        	this.rdoYN_RECEIPT = this.divData.form.divDataTop.form.rdoYN_RECEIPT;
        	this.rdoYN_RECEIPTLAND = this.divData.form.divDataTop.form.rdoYN_RECEIPTLAND;
        	this.cfCD_VENDOR1 = this.divData.form.divDataTop.form.cfCD_VENDOR1;
        	this.cfCD_VENDOR2 = this.divData.form.divDataTop.form.cfCD_VENDOR2;
        	this.cfCD_VENDOR3 = this.divData.form.divDataTop.form.cfCD_VENDOR3;
        	this.cfCD_VENDOR4 = this.divData.form.divDataTop.form.cfCD_VENDOR4;
        	this.cfCD_VENDOR5 = this.divData.form.divDataTop.form.cfCD_VENDOR5;
        	this.ctxtAM_LOAN1 = this.divData.form.divDataTop.form.ctxtAM_LOAN1;
        	this.ctxtAM_LOAN2 = this.divData.form.divDataTop.form.ctxtAM_LOAN2;
        	this.ctxtAM_LOAN3 = this.divData.form.divDataTop.form.ctxtAM_LOAN3;
        	this.ctxtAM_LOAN4 = this.divData.form.divDataTop.form.ctxtAM_LOAN4;
        	this.ctxtAM_LOAN5 = this.divData.form.divDataTop.form.ctxtAM_LOAN5;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.cfCD_VENDOR1.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_VENDOR2.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_VENDOR3.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_VENDOR4.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_VENDOR5.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
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
        	this.dsSelect.addColumn("NO_UNIONMEMBER", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_ACNTUNIT", "string");
        	this.dsInsert.addColumn("TY_GUBUN", "string");
        	this.dsInsert.addColumn("NO_CHASU", "string");
        	this.dsInsert.addColumn("NO_DONG", "string");
        	this.dsInsert.addColumn("NO_FLOOR", "string");
        	this.dsInsert.addColumn("NO_HO", "string");
        	this.dsInsert.addColumn("NO_UNIONMEMBER", "string");
        	this.dsInsert.addColumn("DS_SCRIVENER", "string");
        	this.dsInsert.addColumn("NO_TEL", "string");
        	this.dsInsert.addColumn("DS_CHARGER", "string");
        	this.dsInsert.addColumn("DS_REMARK", "string");
        	this.dsInsert.addColumn("YN_RECEIPT", "string");
        	this.dsInsert.addColumn("DT_CONF", "string");
        	this.dsInsert.addColumn("YN_RECEIPTLAND", "string");
        	this.dsInsert.addColumn("DT_RECEIPT", "string");
        	this.dsInsert.addColumn("CD_VENDOR1", "string");
        	this.dsInsert.addColumn("AM_LOAN1", "bigdecimal");
        	this.dsInsert.addColumn("CD_VENDOR2", "string");
        	this.dsInsert.addColumn("AM_LOAN2", "bigdecimal");
        	this.dsInsert.addColumn("CD_VENDOR3", "string");
        	this.dsInsert.addColumn("AM_LOAN3", "bigdecimal");
        	this.dsInsert.addColumn("CD_VENDOR4", "string");
        	this.dsInsert.addColumn("AM_LOAN4", "bigdecimal");
        	this.dsInsert.addColumn("CD_VENDOR5", "string");
        	this.dsInsert.addColumn("AM_LOAN5", "bigdecimal");
        	this.dsInsert.addColumn("ID_INSERT", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_ACNTUNIT", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("NO_CHASU", "string");
        	this.dsUpdate.addColumn("NO_DONG", "string");
        	this.dsUpdate.addColumn("NO_FLOOR", "string");
        	this.dsUpdate.addColumn("NO_HO", "string");
        	this.dsUpdate.addColumn("NO_UNIONMEMBER", "string");
        	this.dsUpdate.addColumn("DS_SCRIVENER", "string");
        	this.dsUpdate.addColumn("NO_TEL", "string");
        	this.dsUpdate.addColumn("DS_CHARGER", "string");
        	this.dsUpdate.addColumn("DS_REMARK", "string");
        	this.dsUpdate.addColumn("YN_RECEIPT", "string");
        	this.dsUpdate.addColumn("DT_CONF", "string");
        	this.dsUpdate.addColumn("YN_RECEIPTLAND", "string");
        	this.dsUpdate.addColumn("DT_RECEIPT", "string");
        	this.dsUpdate.addColumn("CD_VENDOR1", "string");
        	this.dsUpdate.addColumn("AM_LOAN1", "bigdecimal");
        	this.dsUpdate.addColumn("CD_VENDOR2", "string");
        	this.dsUpdate.addColumn("AM_LOAN2", "bigdecimal");
        	this.dsUpdate.addColumn("CD_VENDOR3", "string");
        	this.dsUpdate.addColumn("AM_LOAN3", "bigdecimal");
        	this.dsUpdate.addColumn("CD_VENDOR4", "string");
        	this.dsUpdate.addColumn("AM_LOAN4", "bigdecimal");
        	this.dsUpdate.addColumn("CD_VENDOR5", "string");
        	this.dsUpdate.addColumn("AM_LOAN5", "bigdecimal");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_ACNTUNIT", "string");
        	this.dsDelete.addColumn("TY_GUBUN", "string");
        	this.dsDelete.addColumn("NO_CHASU", "string");
        	this.dsDelete.addColumn("NO_DONG", "string");
        	this.dsDelete.addColumn("NO_FLOOR", "string");
        	this.dsDelete.addColumn("NO_HO", "string");
        	this.dsDelete.addColumn("NO_UNIONMEMBER", "string");
        };

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

        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.gfnNvl(this.dsSearch.getColumn(0, "CD_ACNTUNIT"),"").substr(0,6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.gfnNvl(this.dsSearch.getColumn(0, "CD_ACNTUNIT"),"").substr(6,1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.gfnNvl(this.dsSearch.getColumn(0, "CD_ACNTUNIT"),"").substr(7,2));
        	this.dsSelect.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelect.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsSelect.setColumn(0, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));

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
        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	this.gfnsetformstatus(this, "I");
        	this.divData.form.divDataTop.set_enable(true);
        	this.dsList.setColumn(0, "DT_CONF", this.gfnGetDate());
        	this.dsList.setColumn(0, "DT_RECEIPT", this.gfnGetDate());
        	this.rdoYN_RECEIPT.set_value("Y");
        	this.rdoYN_RECEIPTLAND.set_value("Y");
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnsetformstatus(this, "D");
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.fnSaveValidate()) return;
        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();
        	var flag = this.gfnGetFormStatus(this);
        	switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
        				this.dsInsert.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        				this.dsInsert.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "NO_CHASU"));
        				this.dsInsert.setColumn(nrow, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        				this.dsInsert.setColumn(nrow, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        				this.dsInsert.setColumn(nrow, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        				this.dsInsert.setColumn(nrow, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        				this.dsInsert.setColumn(nrow, "DS_SCRIVENER", this.dsList.getColumn(0, "DS_SCRIVENER"));
        				this.dsInsert.setColumn(nrow, "NO_TEL", this.dsList.getColumn(0, "NO_TEL"));
        				this.dsInsert.setColumn(nrow, "DS_CHARGER", this.dsList.getColumn(0, "DS_CHARGER"));
        				this.dsInsert.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(0, "DS_REMARK"));
        				this.dsInsert.setColumn(nrow, "YN_RECEIPT", this.dsList.getColumn(0, "YN_RECEIPT"));
        				this.dsInsert.setColumn(nrow, "DT_CONF", this.dsList.getColumn(0, "DT_CONF"));
        				this.dsInsert.setColumn(nrow, "YN_RECEIPTLAND", this.dsList.getColumn(0, "YN_RECEIPTLAND"));
        				this.dsInsert.setColumn(nrow, "DT_RECEIPT", this.dsList.getColumn(0, "DT_RECEIPT"));
        				this.dsInsert.setColumn(nrow, "CD_VENDOR1", this.dsList.getColumn(0, "CD_VENDOR1"));
        				this.dsInsert.setColumn(nrow, "AM_LOAN1", this.dsList.getColumn(0, "AM_LOAN1"));
        				this.dsInsert.setColumn(nrow, "CD_VENDOR2", this.dsList.getColumn(0, "CD_VENDOR2"));
        				this.dsInsert.setColumn(nrow, "AM_LOAN2", this.dsList.getColumn(0, "AM_LOAN2"));
        				this.dsInsert.setColumn(nrow, "CD_VENDOR3", this.dsList.getColumn(0, "CD_VENDOR3"));
        				this.dsInsert.setColumn(nrow, "AM_LOAN3", this.dsList.getColumn(0, "AM_LOAN3"));
        				this.dsInsert.setColumn(nrow, "CD_VENDOR4", this.dsList.getColumn(0, "CD_VENDOR4"));
        				this.dsInsert.setColumn(nrow, "AM_LOAN4", this.dsList.getColumn(0, "AM_LOAN4"));
        				this.dsInsert.setColumn(nrow, "CD_VENDOR5", this.dsList.getColumn(0, "CD_VENDOR5"));
        				this.dsInsert.setColumn(nrow, "AM_LOAN5", this.dsList.getColumn(0, "AM_LOAN5"));
        				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_ACNTUNIT", this.dsList.getColumn(0, "CD_ACNTUNIT"));
        				this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(0, "TY_GUBUN"));
        				this.dsUpdate.setColumn(nrow, "NO_CHASU", this.dsList.getColumn(0, "NO_CHASU"));
        				this.dsUpdate.setColumn(nrow, "NO_DONG", this.dsList.getColumn(0, "NO_DONG"));
        				this.dsUpdate.setColumn(nrow, "NO_FLOOR", this.dsList.getColumn(0, "NO_FLOOR"));
        				this.dsUpdate.setColumn(nrow, "NO_HO", this.dsList.getColumn(0, "NO_HO"));
        				this.dsUpdate.setColumn(nrow, "NO_UNIONMEMBER", this.dsList.getColumn(0, "NO_UNIONMEMBER"));
        				this.dsUpdate.setColumn(nrow, "DS_SCRIVENER", this.dsList.getColumn(0, "DS_SCRIVENER"));
        				this.dsUpdate.setColumn(nrow, "NO_TEL", this.dsList.getColumn(0, "NO_TEL"));
        				this.dsUpdate.setColumn(nrow, "DS_CHARGER", this.dsList.getColumn(0, "DS_CHARGER"));
        				this.dsUpdate.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(0, "DS_REMARK"));
        				this.dsUpdate.setColumn(nrow, "YN_RECEIPT", this.dsList.getColumn(0, "YN_RECEIPT"));
        				this.dsUpdate.setColumn(nrow, "DT_CONF", this.dsList.getColumn(0, "DT_CONF"));
        				this.dsUpdate.setColumn(nrow, "YN_RECEIPTLAND", this.dsList.getColumn(0, "YN_RECEIPTLAND"));
        				this.dsUpdate.setColumn(nrow, "DT_RECEIPT", this.dsList.getColumn(0, "DT_RECEIPT"));
        				this.dsUpdate.setColumn(nrow, "CD_VENDOR1", this.dsList.getColumn(0, "CD_VENDOR1"));
        				this.dsUpdate.setColumn(nrow, "AM_LOAN1", this.dsList.getColumn(0, "AM_LOAN1"));
        				this.dsUpdate.setColumn(nrow, "CD_VENDOR2", this.dsList.getColumn(0, "CD_VENDOR2"));
        				this.dsUpdate.setColumn(nrow, "AM_LOAN2", this.dsList.getColumn(0, "AM_LOAN2"));
        				this.dsUpdate.setColumn(nrow, "CD_VENDOR3", this.dsList.getColumn(0, "CD_VENDOR3"));
        				this.dsUpdate.setColumn(nrow, "AM_LOAN3", this.dsList.getColumn(0, "AM_LOAN3"));
        				this.dsUpdate.setColumn(nrow, "CD_VENDOR4", this.dsList.getColumn(0, "CD_VENDOR4"));
        				this.dsUpdate.setColumn(nrow, "AM_LOAN4", this.dsList.getColumn(0, "AM_LOAN4"));
        				this.dsUpdate.setColumn(nrow, "CD_VENDOR5", this.dsList.getColumn(0, "CD_VENDOR5"));
        				this.dsUpdate.setColumn(nrow, "AM_LOAN5", this.dsList.getColumn(0, "AM_LOAN5"));
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_ACNTUNIT", this.dsList.getColumn(0, "CD_ACNTUNIT"));
        				this.dsDelete.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(0, "TY_GUBUN"));
        				this.dsDelete.setColumn(nrow, "NO_CHASU", this.dsList.getColumn(0, "NO_CHASU"));
        				this.dsDelete.setColumn(nrow, "NO_DONG", this.dsList.getColumn(0, "NO_DONG"));
        				this.dsDelete.setColumn(nrow, "NO_FLOOR", this.dsList.getColumn(0, "NO_FLOOR"));
        				this.dsDelete.setColumn(nrow, "NO_HO", this.dsList.getColumn(0, "NO_HO"));
        				this.dsDelete.setColumn(nrow, "NO_UNIONMEMBER", this.dsList.getColumn(0, "NO_UNIONMEMBER"));
        				break;
        		}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

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
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

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
        	var validate = true;
        	return validate;
        };

        this.fnSaveValidate = function() {
        	var validate = true;
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
        	if (svcID == "select") {
        		if (this.dsList.rowcount == 0) {
        			this.dsList.addRow();
        			this.divData.form.divDataTop.set_enable(false);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow)  {
        	if (id == "cfCD_VENDOR1" || "cfCD_VENDOR2" || "cfCD_VENDOR3" || "cfCD_VENDOR4" || "cfCD_VENDOR5") {
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	return true;
        };
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
        	}
        };
        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this, "U");
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataTop.addEventHandler("onkeydown",this.divData_divDataTop_onkeydown,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DRD_OWNERSHIP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
