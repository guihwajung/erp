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
            this.set_titletext("입주예정관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_IPJUSTART1\" type=\"STRING\" size=\"256\"/><Column id=\"DT_IPJUEND1\" type=\"STRING\" size=\"256\"/><Column id=\"DT_IPJUSTART2\" type=\"STRING\" size=\"256\"/><Column id=\"DT_IPJUEND2\" type=\"STRING\" size=\"256\"/><Column id=\"YN_JUNGSAN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_IPJU\" type=\"STRING\" size=\"256\"/><Column id=\"TM_PLAN_FR\" type=\"STRING\" size=\"256\"/><Column id=\"TM_PLAN_TO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ELEV\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ELEV\" type=\"STRING\" size=\"256\"/><Column id=\"TV_LIVING\" type=\"STRING\" size=\"256\"/><Column id=\"YN_REGISTRYFEE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_LOAN\" type=\"STRING\" size=\"256\"/><Column id=\"YN_LAWPAPER\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DRDPR_ADJUST_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DRDPR_ADJUST_UPDATE</Col></Row><Row><Col id=\"TARGET\">selectSub</Col><Col id=\"SP\">DRDPR_IPJUSCHEDULE_SELECT</Col></Row><Row><Col id=\"TARGET\">report</Col><Col id=\"SP\">DRDPR_IPJU_REPORT</Col></Row><Row><Col id=\"TARGET\">report1</Col><Col id=\"SP\">DZZPR_IMAGE_SELECT</Col></Row><Row><Col id=\"TARGET\">report2</Col><Col id=\"SP\">DRDPR_IPJUTRANSFEF_REPORT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_UNIONMEMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_JUNGSAN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">A</Col><Col id=\"DS_CODE\">예정</Col></Row><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">확정(정산)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTM_PLAN_FR", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">7</Col><Col id=\"VALUE\">7</Col></Row><Row><Col id=\"CODE\">8</Col><Col id=\"VALUE\">8</Col></Row><Row><Col id=\"CODE\">9</Col><Col id=\"VALUE\">9</Col></Row><Row><Col id=\"CODE\">10</Col><Col id=\"VALUE\">10</Col></Row><Row><Col id=\"CODE\">11</Col><Col id=\"VALUE\">11</Col></Row><Row><Col id=\"CODE\">12</Col><Col id=\"VALUE\">12</Col></Row><Row><Col id=\"CODE\">13</Col><Col id=\"VALUE\">13</Col></Row><Row><Col id=\"CODE\">14</Col><Col id=\"VALUE\">14</Col></Row><Row><Col id=\"CODE\">15</Col><Col id=\"VALUE\">15</Col></Row><Row><Col id=\"CODE\">16</Col><Col id=\"VALUE\">16</Col></Row><Row><Col id=\"CODE\">17</Col><Col id=\"VALUE\">17</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTM_PLAN_TO", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">7</Col><Col id=\"VALUE\">7</Col></Row><Row><Col id=\"CODE\">8</Col><Col id=\"VALUE\">8</Col></Row><Row><Col id=\"CODE\">9</Col><Col id=\"VALUE\">9</Col></Row><Row><Col id=\"CODE\">10</Col><Col id=\"VALUE\">10</Col></Row><Row><Col id=\"CODE\">11</Col><Col id=\"VALUE\">11</Col></Row><Row><Col id=\"CODE\">12</Col><Col id=\"VALUE\">12</Col></Row><Row><Col id=\"CODE\">13</Col><Col id=\"VALUE\">13</Col></Row><Row><Col id=\"CODE\">14</Col><Col id=\"VALUE\">14</Col></Row><Row><Col id=\"CODE\">15</Col><Col id=\"VALUE\">15</Col></Row><Row><Col id=\"CODE\">16</Col><Col id=\"VALUE\">16</Col></Row><Row><Col id=\"CODE\">17</Col><Col id=\"VALUE\">17</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_LIVING", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">O</Col><Col id=\"DS_CODE\">본인</Col></Row><Row><Col id=\"CD_CODE\">L</Col><Col id=\"DS_CODE\">전세</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_REGISTRYFEE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">납입</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">미납</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_LOAN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">융자</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">무융자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_LAWPAPER", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">구비</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">미구비</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList4", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("사업지코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_ACNTUNIT","staCD_ACNTUNIT:0.0","10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ACNTUNIT","ctxtCD_ACNTUNIT:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_DONG","ctxtDS_ACNTUNIT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("동층호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_DONG","staNO_DONG:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_FLOOR","ctxtNO_DONG:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_HO","ctxtNO_FLOOR:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_UNIONMEMBER","ctxtNO_HO:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("조합원번호");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_UNIONMEMBER","staNO_UNIONMEMBER:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_value("");
            obj.set_visible("false");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,"240","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTopTitle","0","0","100.00%","22",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("입주예정관리");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","staTopTitle:5","100.00%","5",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Button("btnConf",null,"5","70","20","105",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_text("입주증출력");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDT_IPJUPLANSTART","0","divSplitter:10","130","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("예정입주기간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDT_IPJUPLANSTART","staDT_IPJUPLANSTART:-1","divSplitter:10","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtDT_IPJUPLANSTART","staDT_IPJUPLANSTART:5","staBgDT_IPJUPLANSTART:-25","80","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("43");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta00","txtDT_IPJUPLANSTART:10","staBgDT_IPJUPLANSTART:-25","10","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_text("~");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtDT_IPJUPLANEND","sta00:5","staBgDT_IPJUPLANSTART:-25","80","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("43");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDT_IPJUSTART","staBgDT_IPJUPLANSTART:-1","divSplitter:10","130","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("입주기간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDT_IPJUSTART","staDT_IPJUSTART:-1","divSplitter:10","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtDT_IPJUSTART","staDT_IPJUSTART:5","staBgDT_IPJUSTART:-25","80","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("43");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta01","txtDT_IPJUSTART:10","staBgDT_IPJUSTART:-25","10","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_text("~");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtDT_IPJUEND","sta01:5","staBgDT_IPJUSTART:-25","80","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("43");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staYN_JUNGSAN","0","staDT_IPJUPLANSTART:0","130","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("입주확정여부");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgYN_JUNGSAN","staYN_JUNGSAN:-1","staDT_IPJUPLANSTART:0","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("rdoYN_JUNGSAN","staYN_JUNGSAN:5","staYN_JUNGSAN:-25","133","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("66");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_JUNGSAN");
            obj.getSetter("requiredYN").set("Y");
            obj.getSetter("requiredMsg").set("입주확정여부");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDT_IPJU","staBgYN_JUNGSAN:-1","staBgDT_IPJUSTART:0","130","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("입주(예정)일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDT_IPJU","staDT_IPJU:-1","staBgDT_IPJUSTART:0","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_IPJU","staDT_IPJU:5","staBgDT_IPJU:-25","105","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("16");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTM_PLAN","0","staYN_JUNGSAN:0","130","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("입주예정시간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgTM_PLAN","staTM_PLAN:-1","staYN_JUNGSAN:0","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Combo("cboTM_PLAN_FR","staTM_PLAN:5","staBgTM_PLAN:-25","50","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("13");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTM_PLAN_FR");
            obj.set_text("7");
            obj.set_index("0");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta03","cboTM_PLAN_FR:5","staBgTM_PLAN:-25","10","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_text("시");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta04","sta03:5","staBgTM_PLAN:-25","10","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_text("~");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Combo("cboTM_PLAN_TO","sta04:5","staBgTM_PLAN:-25","50","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("13");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTM_PLAN_TO");
            obj.set_text("7");
            obj.set_index("0");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta05","cboTM_PLAN_TO:5","staBgTM_PLAN:-25","10","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_text("시");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staElev","staBgTM_PLAN:-1","staDT_IPJU:0","130","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("Elevator");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgElev","staElev:-1","staDT_IPJU:0","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("cfElev","staElev:5","staBgElev:-25","220","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.getSetter("CodeFindName").set("DRX_CFElevator_CodeFind");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("59");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            obj.getSetter("requiredYN").set("Y");
            obj.getSetter("requiredMsg").set("Elevator");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTY_LIVING","0","staTM_PLAN:0","130","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("입주구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgTY_LIVING","staTY_LIVING:-1","staTM_PLAN:0","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("rdoTY_LIVING","staTY_LIVING:5","staBgTY_LIVING:-25","133","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("66");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_LIVING");
            obj.getSetter("requiredYN").set("Y");
            obj.getSetter("requiredMsg").set("입주구분");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staYN_REGISTRYFEE","staBgTY_LIVING:-1","staElev:0","130","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("등기제비용 납입여부");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgYN_REGISTRYFEE","staYN_REGISTRYFEE:-1","staElev:0","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("rdoYN_REGISTRYFEE","staYN_REGISTRYFEE:5","staBgYN_REGISTRYFEE:-25","133","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("66");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_REGISTRYFEE");
            obj.getSetter("requiredYN").set("Y");
            obj.getSetter("requiredMsg").set("등기제비용 납입여부");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staYN_LOAN","0","staTY_LIVING:0","130","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("융자확인여부");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgYN_LOAN","staYN_LOAN:-1","staTY_LIVING:0","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("rdoYN_LOAN","staYN_LOAN:5","staBgYN_LOAN:-25","133","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("66");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_LOAN");
            obj.getSetter("requiredYN").set("Y");
            obj.getSetter("requiredMsg").set("융자확인여부");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staYN_LAWPAPER","staBgYN_LOAN:-1","staYN_REGISTRYFEE:0","130","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("취득서류 구비여부");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgYN_LAWPAPER","staYN_LAWPAPER:-1","staYN_REGISTRYFEE:0","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("rdoYN_LAWPAPER","staYN_LAWPAPER:5","staBgYN_LAWPAPER:-25","133","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("66");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_LAWPAPER");
            obj.getSetter("requiredYN").set("Y");
            obj.getSetter("requiredMsg").set("취득서류 구비여부");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTopTitle2","0","staYN_LAWPAPER:10","100.00%","22",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("입주예정일자현황");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divSplitter2","0","staTopTitle2:5","100.00%","5",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta06","220","207","80","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("46");
            obj.set_text("입주예정일");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","sta06:11","207","105","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("43");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta07","ctclDT_FROM:10","207","10","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("44");
            obj.set_text("~");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","sta07:10","207","105","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("16");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Button("btnSearch","ctclDT_TO:15","207","70","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("47");
            obj.set_text("조회");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Button("btnConf2",null,"5","95","20","5",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("48");
            obj.set_text("주택인도증서");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divDataTop:10",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item00","divSearch.form.ctxtCD_ACNTUNIT","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item01","divSearch.form.ctxtDS_ACNTUNIT","value","dsSearch","DS_ACNTUNIT");
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

            obj = new BindItem("item21","divSearch.form.ctxtNO_UNIONMEMBER","value","dsSearch","NO_UNIONMEMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item05","divData.form.divDataTop.form.txtDT_IPJUPLANSTART","value","dsList","DT_IPJUSTART1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item06","divData.form.divDataTop.form.txtDT_IPJUPLANEND","value","dsList","DT_IPJUEND1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item07","divData.form.divDataTop.form.txtDT_IPJUSTART","value","dsList","DT_IPJUSTART2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item08","divData.form.divDataTop.form.txtDT_IPJUEND","value","dsList","DT_IPJUEND2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item09","divData.form.divDataTop.form.rdoYN_JUNGSAN","value","dsList","YN_JUNGSAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataTop.form.ctclDT_IPJU","value","dsList","DT_IPJU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataTop.form.cboTM_PLAN_FR","value","dsList","TM_PLAN_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataTop.form.cboTM_PLAN_TO","value","dsList","TM_PLAN_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divDataTop.form.cfElev.form.CDTextBox","value","dsList","NO_ELEV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divDataTop.form.cfElev.form.DSTextBox","value","dsList","DS_ELEV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divDataTop.form.rdoTY_LIVING","value","dsList","TY_LIVING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divDataTop.form.rdoYN_REGISTRYFEE","value","dsList","YN_REGISTRYFEE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divDataTop.form.rdoYN_LOAN","value","dsList","YN_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divDataTop.form.rdoYN_LAWPAPER","value","dsList","YN_LAWPAPER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divDataTop.form.ctclDT_FROM","value","dsList","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divDataTop.form.ctclDT_TO","value","dsList","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DRD_IPJUSCHEDULE.xfdl", function() {
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
        	this.dxGrid = this.divData.form.divDataBottom.form.objGrid;
        	this.ctxtCD_ACNTUNIT = this.divSearch.form.ctxtCD_ACNTUNIT;
        	this.ctxtDS_ACNTUNIT = this.divSearch.form.ctxtDS_ACNTUNIT;
        	this.ctxtNO_DONG = this.divSearch.form.ctxtNO_DONG;
        	this.ctxtNO_FLOOR = this.divSearch.form.ctxtNO_FLOOR;
        	this.ctxtNO_HO = this.divSearch.form.ctxtNO_HO;
        	this.ctxtNO_UNIONMEMBER = this.divSearch.form.ctxtNO_UNIONMEMBER;
            this.txtDT_IPJUPLANSTART = this.divData.form.divDataTop.form.txtDT_IPJUPLANSTART;
            this.txtDT_IPJUPLANEND = this.divData.form.divDataTop.form.txtDT_IPJUPLANEND;
            this.txtDT_IPJUSTART = this.divData.form.divDataTop.form.txtDT_IPJUSTART;
            this.txtDT_IPJUEND = this.divData.form.divDataTop.form.txtDT_IPJUEND;
            this.rdoYN_JUNGSAN = this.divData.form.divDataTop.form.rdoYN_JUNGSAN;
            this.ctclDT_IPJU = this.divData.form.divDataTop.form.ctclDT_IPJU;
            this.cboTM_PLAN_FR = this.divData.form.divDataTop.form.cboTM_PLAN_FR;
            this.cboTM_PLAN_TO = this.divData.form.divDataTop.form.cboTM_PLAN_TO;
            this.cfElev       = this.divData.form.divDataTop.form.cfElev;
            this.rdoTY_LIVING = this.divData.form.divDataTop.form.rdoTY_LIVING;
            this.rdoYN_REGISTRYFEE = this.divData.form.divDataTop.form.rdoYN_REGISTRYFEE;
            this.rdoYN_LOAN = this.divData.form.divDataTop.form.rdoYN_LOAN;
            this.rdoYN_LAWPAPER = this.divData.form.divDataTop.form.rdoYN_LAWPAPER;
            this.ctclDT_FROM = this.divData.form.divDataTop.form.ctclDT_FROM;
            this.ctclDT_TO = this.divData.form.divDataTop.form.ctclDT_TO;
        	this.btnConf = this.divData.form.divDataTop.form.btnConf;
        	this.btnConf2 = this.divData.form.divDataTop.form.btnConf2;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList2, "DR", "DRD_IPJUSCHEDULE");
        	this.cfElev.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

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

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_ACNTUNIT", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("NO_CHASU", "string");
        	this.dsUpdate.addColumn("NO_DONG", "string");
        	this.dsUpdate.addColumn("NO_FLOOR", "string");
        	this.dsUpdate.addColumn("NO_HO", "string");
        	this.dsUpdate.addColumn("NO_UNIONMEMBER", "string");
        	this.dsUpdate.addColumn("YN_REGISTRYFEE", "string");
        	this.dsUpdate.addColumn("TY_LIVING", "string");
        	this.dsUpdate.addColumn("DT_IPJU", "string");
        	this.dsUpdate.addColumn("YN_JUNGSAN", "string");
        	this.dsUpdate.addColumn("YN_LOAN", "string");
        	this.dsUpdate.addColumn("YN_LAWPAPER", "string");
        	this.dsUpdate.addColumn("TM_PLAN_FR", "string");
        	this.dsUpdate.addColumn("TM_PLAN_TO", "string");
        	this.dsUpdate.addColumn("NO_ELEV", "string");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");

            this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelectSub.addColumn("TY_GUBUN", "string");
        	this.dsSelectSub.addColumn("NO_CHASU", "string");
        	this.dsSelectSub.addColumn("NO_DONG", "string");
        	this.dsSelectSub.addColumn("DT_FROM", "string");
        	this.dsSelectSub.addColumn("DT_TO", "string");
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
        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
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
        this.fnSelectSub = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();
        	this.dsSelectSub.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelectSub.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelectSub.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelectSub.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelectSub.setColumn(0, "DT_FROM", this.dsList.getColumn(0, "DT_FROM"));
        	this.dsSelectSub.setColumn(0, "DT_TO", this.dsList.getColumn(0, "DT_TO"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
         	var inData      = "selectSub=dsSelectSub";
         	var outData     = "dsList=selectSub0";
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
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	//if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();
        	this.dsUpdate.clearData();

        // 	for (var i = 0; i < this.dsList.rowcount; i++) {
        // 		var flag = this.gfnGetFlag(this.dsList, i);
        //		switch(flag) {
        			//case "I":
        //			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        				this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        				this.dsUpdate.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        				this.dsUpdate.setColumn(nrow, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        				this.dsUpdate.setColumn(nrow, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        				this.dsUpdate.setColumn(nrow, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        				this.dsUpdate.setColumn(nrow, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        				this.dsUpdate.setColumn(nrow, "YN_REGISTRYFEE", this.dsList.getColumn(0, "YN_REGISTRYFEE"));
        				this.dsUpdate.setColumn(nrow, "TY_LIVING", this.dsList.getColumn(0, "TY_LIVING"));
        				this.dsUpdate.setColumn(nrow, "DT_IPJU", this.dsList.getColumn(0, "DT_IPJU"));
        				this.dsUpdate.setColumn(nrow, "YN_JUNGSAN", this.dsList.getColumn(0, "YN_JUNGSAN"));
        				this.dsUpdate.setColumn(nrow, "YN_LOAN", this.dsList.getColumn(0, "YN_LOAN"));
        				this.dsUpdate.setColumn(nrow, "YN_LAWPAPER", this.dsList.getColumn(0, "YN_LAWPAPER"));
        				this.dsUpdate.setColumn(nrow, "TM_PLAN_FR", this.dsList.getColumn(0, "TM_PLAN_FR"));
        				this.dsUpdate.setColumn(nrow, "TM_PLAN_TO", this.dsList.getColumn(0, "TM_PLAN_TO"));
        				this.dsUpdate.setColumn(nrow, "NO_ELEV", this.dsList.getColumn(0, "NO_ELEV"));
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        //				break;
        			//case "D":

        //		}
        //	}
        	if (this.dsUpdate.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate";
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
        	this.gfnExcelExport(this.dxGrid1);
        };

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_DONG"))) {
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctxtNO_DONG.setFocus();
        		}
        		validate = false;
        		this.gfnAlert("동층호를 입력하세요!", "fnVaidateCallback");

        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_FLOOR"))) {
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctxtNO_FLOOR.setFocus();
        		}
        		validate = false;
        		this.gfnAlert("동층호를 입력하세요!", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_HO"))) {
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctxtNO_HO.setFocus();
        		}
        		validate = false;
        		this.gfnAlert("동층호를 입력하세요!", "fnVaidateCallback");
        	}
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

        		if (this.dsList.getColumn(0, "YN_JUNGSAN") == "A")
        		{
        			this.btnConf.set_enable(false);
        			this.btnConf2.set_enable(false);
        		}

        		//if (this.dsList.rowcount == 0) {
        			//this.dsList.addRow();
        // 			this.dsList.setColumn(0, "YN_JUNGSAN", "A");			//입주확정여부
        // 			this.dsList.setColumn(0, "DT_IPJU", this.gfnGetDate());	//입주예정일자
        // 			this.dsList.setColumn(0, "TM_PLAN_FR", "7");   			//입주예정시간FROM
        // 			this.dsList.setColumn(0, "TM_PLAN_TO", "7");			//입주예정시간TO
        // 			this.dsList.setColumn(0, "TY_LIVING", "O");				//입주구분
        // 			this.dsList.setColumn(0, "YN_REGISTRYFEE", "Y");		//등기제비용 납부여부
        // 			this.dsList.setColumn(0, "YN_LOAN", "Y");				//융자확인여부
        // 			this.dsList.setColumn(0, "YN_LAWPAPER", "Y");			//취득서류구비여부
        // 			this.dsList.setColumn(0, "DT_FROM", this.gfnAddMonth(this.gfnGetDate(),-3));
        // 			this.dsList.setColumn(0, "DT_TO", this.gfnGetDate());	//입주예정일자
        		//}
        	}
        	else if (svcID == "save") {
        		this.FormBtns.Select.click();
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "cfElev") {
        		dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0,"CD_ACNTUNIT"));
        		dsUserParam.setColumn(nrow, "NO_DONG", this.dsSearch.getColumn(0,"NO_DONG"));
        	}
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
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_top(e.clienty);
        		this.divData.form.resetScroll();
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };


        this.dsSearch_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.dsList.clearData();
        	}
        }


        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue)
        	{

        		//this.fnSetButton();
        		this.gfnSetFormStatus(this, "U");
        	}
        };

        //입주증출력
        this.divData_btnConf_onclick = function(obj,e)
        {
        	this.ipjuReport(); //입주증출력
        }

        //주택인도증서
        this.divData_divDataTop_btnConf2_onclick = function(obj,e)
        {
        	this.ipjuTransfef(); //주택인도증서
        };

        this.ipjuReport = function() {

        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("CD_ACNTUNIT", "string");
        	this.dsReport.addColumn("TY_GUBUN", "string");
        	this.dsReport.addColumn("NO_CHASU", "string");
        	this.dsReport.addColumn("NO_DONG", "string");
        	this.dsReport.addColumn("NO_FLOOR", "string");
        	this.dsReport.addColumn("NO_HO", "string");
        	this.dsReport.addColumn("ID_USER", "string");

        	this.dsReport.clearData();
        	this.dsReport.addRow();

        	this.dsReport.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsReport.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsReport.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsReport.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsReport.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsReport.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsReport.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        // 	var strSvcId    = "report";
        // 	var strSvcType  = "grid";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "report=dsReport";
        // 	var outData     = "dsList3=report0";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// trabsaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); 	// 통신방법 정의 [생략가능]

        	this.dsReport1 = new Dataset();
        	this.dsReport1.addColumn("CD_CORP", "string");
        	this.dsReport1.addColumn("AUTH_CD_CORP", "string");

        	this.dsReport1.clearData();
        	this.dsReport1.addRow();

        	this.dsReport1.setColumn(0, "CD_CORP", "");
        	this.dsReport1.setColumn(0, "AUTH_CD_CORP", this.AuthClient.CD_CORP);

        // 	var strSvcId    = "report";
        // 	var strSvcType  = "grid";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "report1=dsReport1";
        // 	var outData     = "dsList4=report0";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// trabsaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); 	// 통신방법 정의 [생략가능]

        	var inProc		= "_dsProc";
        	//var inParam 	= "params=dsReport1";	// 조회SP이외 사용할 정보
        	var inParam 	= "";						// 필요없는 경우 생략
        	var inData      = "report=dsReport report1=dsReport1";
        	var reportpath  = "/db/dbs/DBS_IPJU_REPORT.ozr";

        	trace("DBS_IPJU_REPORT!!!!!!!!!!!!!!!!!!!!!");

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        };


        this.ipjuTransfef = function() {

        	this.dsReport2 = new Dataset();
        	this.dsReport2.addColumn("CD_ACNTUNIT", "string");
        	this.dsReport2.addColumn("TY_GUBUN", "string");
        	this.dsReport2.addColumn("NO_CHASU", "string");
        	this.dsReport2.addColumn("NO_DONG", "string");
        	this.dsReport2.addColumn("NO_FLOOR", "string");
        	this.dsReport2.addColumn("NO_HO", "string");
        	this.dsReport2.addColumn("ID_USER", "string");

        	this.dsReport2.clearData();
        	this.dsReport2.addRow();

        	this.dsReport2.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsReport2.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsReport2.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsReport2.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsReport2.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsReport2.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsReport2.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "select";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "report2=dsReport2";
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

        	//var inProc		= "_dsProc";
        	//var inParam 	= "params=dsReport1";	// 조회SP이외 사용할 정보
        	var inParam 	= "";						// 필요없는 경우 생략
        	var inData      = "report2=dsReport2";
        	var reportpath  = "/db/dbs/DBS_IPJUTRANSFEF_REPORT.ozr";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        };

        //입주 예정일 조회
        this.divData_btnSearch_onclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.dsList.getColumn(0, "DT_FROM")) || this.gfnIsNull(this.dsList.getColumn(0, "DT_TO"))) {
        		this.gfnAlert("입주예정일을 입력하세요.");
        	}else{
        		this.fnSelectSub();
        	}
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divDataTop.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataTop.form.btnConf.addEventHandler("onclick",this.divData_btnConf_onclick,this);
            this.divData.form.divDataTop.form.cboTM_PLAN_FR.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divData.form.divDataTop.form.cboTM_PLAN_TO.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divData.form.divDataTop.form.divSplitter2.addEventHandler("ondrag",this.divData_divSplitter2_ondrag,this);
            this.divData.form.divDataTop.form.btnSearch.addEventHandler("onclick",this.divData_btnSearch_onclick,this);
            this.divData.form.divDataTop.form.btnConf2.addEventHandler("onclick",this.divData_divDataTop_btnConf2_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DRD_IPJUSCHEDULE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
