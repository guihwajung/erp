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
            this.set_titletext("국민연금 확정 및 전표발행");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DSBPR_KOOKMIN_LIST_SELECT</Col></Row><Row><Col id=\"TARGET\">costtoja</Col><Col id=\"SP\">DSBPR_KOOKMIN_COSTTOJA</Col></Row><Row><Col id=\"TARGET\">costtoja_cancel</Col><Col id=\"SP\">DSBPR_KOOKMIN_COSTTOJA_DELETE</Col></Row><Row><Col id=\"TARGET\">slip</Col><Col id=\"SP\">DSBPR_AUTOSLIP_ISSUE_KOOKMIN</Col></Row><Row><Col id=\"TARGET\">slip_cancel</Col><Col id=\"SP\">DSBPR_AUTOSLIP_ISSUE_CANCEL</Col></Row><Row><Col id=\"TARGET\">confirm</Col><Col id=\"SP\">DSBPR_KOOKMIN_LIST_CONFIRM</Col></Row><Row><Col id=\"TARGET\">cancel</Col><Col id=\"SP\">DSBPR_KOOKMIN_LIST_CANCEL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_ERPKEY\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SLIP_JIGUB\" type=\"STRING\" size=\"256\"/><Column id=\"AM_KOOKMIN_USER\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_KOOKMIN_COMPANY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_DKCOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_KOOKMIN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_KOOKMIN_BACK_USER\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_KOOKMIN_BACK_COMPANY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_DKCOST_BACK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COST_BACK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMMENT_BACK\" type=\"STRING\" size=\"256\"/><Column id=\"AM_KOOKMIN_BACK\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_KOOKMIN_TOTAL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_COST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COST_BACK\" type=\"STRING\" size=\"256\"/><Column id=\"BELNR\" type=\"STRING\" size=\"256\"/><Column id=\"GJAHR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장/부서 코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","220","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFDEPTCORP");
            obj.getSetter("CDTextWidth").set("60");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccfCD_SITE:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","500","0","5","100%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,"0","54","24","divSplitter:5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnConfirm",null,"0","54","24","btnCancel:5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("확정");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","btnConfirm:5",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_ERPKEY","0","0","1","1",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("8");
            obj.set_value("");
            obj.set_enable("false");
            obj.set_visible("false");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("divDataRight01","0","0",null,"135","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","677","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight01.form);
            obj.set_taborder("0");
            obj.set_text("사용자 분담금 및 Network 지정");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.form.divDataRight01.addChild(obj.name, obj);

            obj = new Static("staAM_KOOKMIN_USER","0","staTitle:5","90","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight01.form);
            obj.set_taborder("1");
            obj.set_text("가입자부담분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divDataRight.form.divDataRight01.addChild(obj.name, obj);

            obj = new Static("staBg01","staAM_KOOKMIN_USER:-1","staTitle:5","250","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataRight01.addChild(obj.name, obj);

            obj = new Static("staAM_KOOKMIN_COMPANY","staBg01:-1","staTitle:5","90","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight01.form);
            obj.set_taborder("3");
            obj.set_text("사용자부담분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divDataRight.form.divDataRight01.addChild(obj.name, obj);

            obj = new Static("staBg02","staAM_KOOKMIN_COMPANY:-1","staTitle:5","250","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight01.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataRight01.addChild(obj.name, obj);

            obj = new Static("staCD_COST","0","staAM_KOOKMIN_USER:-1","90","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight01.form);
            obj.set_taborder("5");
            obj.set_text("공종코드");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.form.divDataRight01.addChild(obj.name, obj);

            obj = new Static("staBg03","staCD_COST:-1","staBg01:-1","250","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataRight01.addChild(obj.name, obj);

            obj = new Static("staAM_KOOKMIN","staBg03:-1","staAM_KOOKMIN_USER:-1","90","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight01.form);
            obj.set_taborder("7");
            obj.set_text("납부금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divDataRight.form.divDataRight01.addChild(obj.name, obj);

            obj = new Static("staBg04","staAM_KOOKMIN:-1","staBg02:-1","250","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight01.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataRight01.addChild(obj.name, obj);

            obj = new Static("staDS_COMMENT","0","staCD_COST:-1","90","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight01.form);
            obj.set_taborder("9");
            obj.set_text("적요");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.form.divDataRight01.addChild(obj.name, obj);

            obj = new Static("staBg05","staDS_COMMENT:-1","staBg03:-1","588","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight01.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataRight01.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_KOOKMIN_USER","staAM_KOOKMIN_USER:5","staTitle:10","240","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight01.form);
            obj.set_taborder("11");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.divDataRight01.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_KOOKMIN_COMPANY","staAM_KOOKMIN_COMPANY:5","staTitle:10","240","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight01.form);
            obj.set_taborder("12");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.divDataRight01.addChild(obj.name, obj);

            obj = new Div("ccfCD_COST","staCD_COST:5","ctxtAM_KOOKMIN_USER:9","240","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight01.form);
            obj.getSetter("CodeFindName").set("DWX_CFCOST_TREE_01");
            obj.getSetter("CDTextWidth").set("120");
            obj.set_taborder("13");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divDataRight.form.divDataRight01.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_KOOKMIN","staAM_KOOKMIN:5","ctxtAM_KOOKMIN_USER:9","240","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight01.form);
            obj.set_taborder("14");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.divDataRight01.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_COMMENT","staDS_COMMENT:5","ccfCD_COST:9","578","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight01.form);
            obj.set_taborder("15");
            obj.set_value("");
            this.divData.form.divDataRight.form.divDataRight01.addChild(obj.name, obj);

            obj = new Div("divDataRight02","0","divDataRight01:5",null,"135","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","677","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight02.form);
            obj.set_taborder("0");
            obj.set_text("환급분 처리");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.form.divDataRight02.addChild(obj.name, obj);

            obj = new Static("staAM_KOOKMIN_BACK_USER","0","staTitle:5","90","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight02.form);
            obj.set_taborder("1");
            obj.set_text("가입자부담분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divDataRight.form.divDataRight02.addChild(obj.name, obj);

            obj = new Static("staBg01","staAM_KOOKMIN_BACK_USER:-1","staTitle:5","250","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight02.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataRight02.addChild(obj.name, obj);

            obj = new Static("staAM_KOOKMIN_BACK_COMPANY","staBg01:-1","staTitle:5","90","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight02.form);
            obj.set_taborder("3");
            obj.set_text("사용자부담분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divDataRight.form.divDataRight02.addChild(obj.name, obj);

            obj = new Static("staBg02","staAM_KOOKMIN_BACK_COMPANY:-1","staTitle:5","250","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight02.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataRight02.addChild(obj.name, obj);

            obj = new Static("staCD_COST_BACK","0","staAM_KOOKMIN_BACK_USER:-1","90","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight02.form);
            obj.set_taborder("5");
            obj.set_text("공종코드");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.form.divDataRight02.addChild(obj.name, obj);

            obj = new Static("staBg03","staCD_COST_BACK:-1","staBg01:-1","250","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight02.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataRight02.addChild(obj.name, obj);

            obj = new Static("staAM_KOOKMIN_BACK","staBg03:-1","staAM_KOOKMIN_BACK_USER:-1","90","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight02.form);
            obj.set_taborder("7");
            obj.set_text("환급금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divDataRight.form.divDataRight02.addChild(obj.name, obj);

            obj = new Static("staBg04","staAM_KOOKMIN_BACK:-1","staBg02:-1","250","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight02.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataRight02.addChild(obj.name, obj);

            obj = new Static("staDS_COMMENT_BACK","0","staCD_COST_BACK:-1","90","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight02.form);
            obj.set_taborder("9");
            obj.set_text("적요");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.form.divDataRight02.addChild(obj.name, obj);

            obj = new Static("staBg05","staDS_COMMENT_BACK:-1","staBg03:-1","588","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight02.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataRight02.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_KOOKMIN_BACK_USER","staAM_KOOKMIN_BACK_USER:5","staTitle:10","240","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight02.form);
            obj.set_taborder("11");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("false");
            this.divData.form.divDataRight.form.divDataRight02.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_KOOKMIN_BACK_COMPANY","staAM_KOOKMIN_BACK_COMPANY:5","staTitle:10","240","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight02.form);
            obj.set_taborder("12");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("false");
            this.divData.form.divDataRight.form.divDataRight02.addChild(obj.name, obj);

            obj = new Div("ccfCD_COST_BACK","staCD_COST_BACK:5","ctxtAM_KOOKMIN_BACK_USER:9","240","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight02.form);
            obj.getSetter("CodeFindName").set("DWX_CFCOST_TREE_01");
            obj.getSetter("CDTextWidth").set("120");
            obj.set_taborder("13");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divDataRight.form.divDataRight02.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_KOOKMIN_BACK","staAM_KOOKMIN_BACK:5","ctxtAM_KOOKMIN_BACK_USER:9","240","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight02.form);
            obj.set_taborder("14");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.divDataRight02.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_COMMENT_BACK","staDS_COMMENT_BACK:5","ccfCD_COST_BACK:9","578","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight02.form);
            obj.set_taborder("15");
            obj.set_value("");
            this.divData.form.divDataRight.form.divDataRight02.addChild(obj.name, obj);

            obj = new Div("divDataRight03","0","divDataRight02:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","677","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight03.form);
            obj.set_taborder("0");
            obj.set_text("내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.form.divDataRight03.addChild(obj.name, obj);

            obj = new Static("staAM_KOOKMIN_TOTAL","0","staTitle:5","90","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight03.form);
            obj.set_taborder("1");
            obj.set_text("최종납부금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divDataRight.form.divDataRight03.addChild(obj.name, obj);

            obj = new Static("staBg00","staAM_KOOKMIN_TOTAL:-1","staTitle:5","250","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight03.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataRight03.addChild(obj.name, obj);

            obj = new Static("staDT_SLIP","staBg00:-1","staTitle:5","90","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight03.form);
            obj.set_taborder("3");
            obj.set_text("전기일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divDataRight.form.divDataRight03.addChild(obj.name, obj);

            obj = new Static("staBg01","staDT_SLIP:-1","staTitle:5","250","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight03.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataRight03.addChild(obj.name, obj);

            obj = new Static("staNO_SLIP","0","staAM_KOOKMIN_TOTAL:-1","90","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight03.form);
            obj.set_taborder("5");
            obj.set_text("발생전표번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divDataRight.form.divDataRight03.addChild(obj.name, obj);

            obj = new Static("staBg02","staNO_SLIP:-1","staBg00:-1","250","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight03.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataRight03.addChild(obj.name, obj);

            obj = new Static("staNO_SLIP_JIGUB","staBg02:-1","staDT_SLIP:-1","90","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight03.form);
            obj.set_taborder("7");
            obj.set_text("SAP전표번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divDataRight.form.divDataRight03.addChild(obj.name, obj);

            obj = new Static("staBg03","staNO_SLIP_JIGUB:-1","staBg01:-1","250","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight03.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataRight03.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_KOOKMIN_TOTAL","staAM_KOOKMIN_TOTAL:5","staTitle:10","240","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight03.form);
            obj.set_taborder("9");
            obj.set_value("");
            obj.set_format("#,0");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.divDataRight03.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_SLIP","staDT_SLIP:5","staTitle:10","110","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight03.form);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divDataRight.form.divDataRight03.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_SLIP","staNO_SLIP:5","ctxtAM_KOOKMIN_TOTAL:9","240","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight03.form);
            obj.set_taborder("11");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.divDataRight03.addChild(obj.name, obj);

            obj = new Edit("ctxtBELNR","staNO_SLIP_JIGUB:5","ctclDT_SLIP:9","240","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRight03.form);
            obj.set_taborder("12");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.divDataRight03.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divDataRight.form.ctxtNO_ERPKEY","value","dsList1","NO_ERPKEY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divDataRight.form.divDataRight01.form.ctxtAM_KOOKMIN_USER","value","dsList1","AM_KOOKMIN_USER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataRight.form.divDataRight01.form.ctxtAM_KOOKMIN_COMPANY","value","dsList1","AM_KOOKMIN_COMPANY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataRight.form.divDataRight01.form.ccfCD_COST.form.CDTextBox","value","dsList1","CD_DKCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataRight.form.divDataRight01.form.ccfCD_COST.form.DSTextBox","value","dsList1","DS_COST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataRight.form.divDataRight01.form.ctxtAM_KOOKMIN","value","dsList1","AM_KOOKMIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataRight.form.divDataRight01.form.ctxtDS_COMMENT","value","dsList1","DS_COMMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataRight.form.divDataRight02.form.ctxtAM_KOOKMIN_BACK_USER","value","dsList1","AM_KOOKMIN_BACK_USER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataRight.form.divDataRight02.form.ctxtAM_KOOKMIN_BACK_COMPANY","value","dsList1","AM_KOOKMIN_BACK_COMPANY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataRight.form.divDataRight02.form.ccfCD_COST_BACK.form.CDTextBox","value","dsList1","CD_DKCOST_BACK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataRight.form.divDataRight02.form.ccfCD_COST_BACK.form.DSTextBox","value","dsList1","DS_COST_BACK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divDataRight.form.divDataRight02.form.ctxtDS_COMMENT_BACK","value","dsList1","DS_COMMENT_BACK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divDataRight.form.divDataRight02.form.ctxtAM_KOOKMIN_BACK","value","dsList1","AM_KOOKMIN_BACK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divDataRight.form.divDataRight03.form.ctxtAM_KOOKMIN_TOTAL","value","dsList1","AM_KOOKMIN_TOTAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divDataRight.form.divDataRight03.form.ctclDT_SLIP","value","dsList1","DT_SLIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divDataRight.form.divDataRight03.form.ctxtNO_SLIP","value","dsList1","NO_SLIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divDataRight.form.divDataRight03.form.ctxtBELNR","value","dsList1","BELNR");
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
        this.registerScript("DSB_KOOKMIN.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this._check = false; // 가입자부담분과 사용자부담분이 같은지 체크.

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

        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "YM_WORK", today.substr(0, 6));

        	this.btnCostToja.set_enable(false); //원가투자
        	this.btnCostTojaCancel.set_enable(false); //원가투자취소
        	this.btnSlip.set_enable(false); //전표발행
        	this.btnSlipCancel.set_enable(false); //전표발행취소
        	this.btnShowSlip.set_enable(false); // 전표조회
        	this.btnSapslip.set_enable(false); // 전표발행(SAP)
        	this.btnSapslipCncl.set_enable(false); //전표취소(SAP)
        	this.btnConfirm.set_enable(false); // 확정 (좌측)
        	this.btnCancel.set_enable(false); //취소 (좌측)
        	this.btnJundo.set_enable(false); //전도금처리
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Save.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnCostToja = this.gfnFormButtonAdd("btnCostToja", "fnCostToja");
        	this.btnCostTojaCancel = this.gfnFormButtonAdd("btnCostTojaCancel", "fnCostTojaCancel");
        	this.btnSlip = this.gfnFormButtonAdd("btnSlip", "fnSlip");
        	this.btnSlipCancel = this.gfnFormButtonAdd("btnSlipCancel", "fnSlipCancel");
        	this.btnShowSlip = this.gfnFormButtonAdd("btnShowSlip", "fnShowSlip");
        	this.btnSapslip= this.gfnFormButtonAdd("btnSapslip", "fnSapslip"); //전표발행(SAP)
        	this.btnSapslipCncl= this.gfnFormButtonAdd("btnSapslipCncl", "fnSapslipCncl"); //전표취소(SAP)
        	this.btnJundo = this.gfnFormButtonAdd("btnJundo", "fnJundo");
        // 	this.btnConfirm = this.gfnFormButtonAdd("btnConfirm", "fnConfirm");
        // 	this.btnCancel = this.gfnFormButtonAdd("btnCancel", "fnCancel");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfCD_COST = this.divData.form.divDataRight.form.divDataRight01.form.ccfCD_COST;
        	this.ccfCD_COST_BACK = this.divData.form.divDataRight.form.divDataRight02.form.ccfCD_COST_BACK;

        	this.btnConfirm = this.divData.form.btnConfirm;
        	this.btnCancel = this.divData.form.btnCancel;
        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DS", "DSB_KOOKMIN");
        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);

        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_COST.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_COST_BACK.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_COST.AfterCDTextChanged = "ccfCD_COST_AfterCDTextChanged";
        	this.ccfCD_COST_BACK.AfterCDTextChanged = "ccfCD_COST_BACK_AfterCDTextChanged";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");

        	this.dsCost = new Dataset();
        	this.dsCost.addColumn("CD_SITE", "string");
        	this.dsCost.addColumn("YM_WORK", "string");
        	this.dsCost.addColumn("DT_SLIP", "string");
        	this.dsCost.addColumn("AM_KOOKMIN_USER", "bigdecimal");
        	this.dsCost.addColumn("AM_KOOKMIN_COMPANY", "bigdecimal");
        	this.dsCost.addColumn("CD_COST", "string");
        	this.dsCost.addColumn("DS_COST", "string");
        	this.dsCost.addColumn("DS_COMMENT", "string");
        	this.dsCost.addColumn("AM_KOOKMIN", "bigdecimal");
        	this.dsCost.addColumn("AM_KOOKMIN_BACK_USER", "bigdecimal");
        	this.dsCost.addColumn("AM_KOOKMIN_BACK_COMPANY", "bigdecimal");
        	this.dsCost.addColumn("CD_COST_BACK", "string");
        	this.dsCost.addColumn("DS_COST_BACK", "string");
        	this.dsCost.addColumn("DS_COMMENT_BACK", "string");
        	this.dsCost.addColumn("AM_KOOKMIN_BACK", "bigdecimal");
        	this.dsCost.addColumn("AM_KOOKMIN_TOTAL", "bigdecimal");
        	this.dsCost.addColumn("ID_CREATE", "string");

        	this.dsCostDelete = new Dataset();
        	this.dsCostDelete.addColumn("CD_SITE", "string");
        	this.dsCostDelete.addColumn("YM_WORK", "string");
        	this.dsCostDelete.addColumn("DT_DATE", "string");
        	this.dsCostDelete.addColumn("NO_ERPKEY", "string");

        	this.dsSlip = new Dataset();
        	this.dsSlip.addColumn("CD_CORP", "string");
        	this.dsSlip.addColumn("CD_SITE", "string");
        	this.dsSlip.addColumn("YM_WORK", "string");
        	this.dsSlip.addColumn("CD_DEPT_BH", "string");
        	this.dsSlip.addColumn("DT_ACCOUNT", "string");
        	this.dsSlip.addColumn("DT_REQUEST", "string");
        	this.dsSlip.addColumn("NO_ERPKEY", "string");
        	this.dsSlip.addColumn("ID_USER", "string");

        	this.dsSlipCancel = new Dataset();
        	this.dsSlipCancel.addColumn("NO_ERPKEY", "string");
        	this.dsSlipCancel.addColumn("ID_USER", "string");
        	this.dsSlipCancel.addColumn("CD_GUBUN", "string");

        	this.dsConfirm = new Dataset();
        	this.dsConfirm.addColumn("CD_SITE", "string");
        	this.dsConfirm.addColumn("YM_WORK", "string");
        	this.dsConfirm.addColumn("NO_ID", "string");
        	this.dsConfirm.addColumn("YM_KOOKMIN", "string");
        	this.dsConfirm.addColumn("AM_KOOKMIN", "bigdecimal");

        	this.dsCancel = new Dataset();
        	this.dsCancel.addColumn("CD_SITE", "string");
        	this.dsCancel.addColumn("YM_WORK", "string");
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));

        	this.dsList1.clearData();

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0 dsList1=select1";
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
        	//this.gfnGridAdd(this.dxGrid);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
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
         * 서브 버튼 이벤트
         ************************************************************************/

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnCostTojaValidate = function()
        {
        	var validate = true;

        	if(this.gfnIsNull(this.dsList1.getColumn(0, "CD_DKCOST")))
        	{
        		this.fnCostValidate = function()
        		{
        			this.divData.form.divDataRight.form.divDataRight01.form.ccfCD_COST.form.CDTextBox.setFocus();
        		}

        		validate = false;

        		this.gfnAlert("사용자분담금 및 Network 지정의 공종코드를 입력해주세요.", "fnCostValidate");
        	}
        	else if(this.gfnIsNull(this.dsList1.getColumn(0, "DS_COMMENT")))
        	{
        		this.fnCostValidate = function()
        		{
        			this.divData.form.divDataRight.form.divDataRight01.form.ctxtDS_COMMENT.setFocus();
        		}

        		validate = false;

        		this.gfnAlert("사용자분담금 및 Network 지정의 적요를 입력해주세요.", "fnCostValidate");
        	}
        	// 환급분 처리의 가입자부담금, 사용자부담분이 0원인 경우 환급분처리의 공종코드, 적요는 불필요하다.
        	else if(this.dsList1.getColumn(0, "AM_KOOKMIN_BACK_USER") == 0 && this.dsList1.getColumn(0, "AM_KOOKMIN_BACK_COMPANY") == 0)
        	{
        		return true;
        	}
        	else if(this.gfnIsNull(this.dsList1.getColumn(0, "CD_DKCOST_BACK")))
        	{
        		this.fnCostValidate = function()
        		{
        			this.divData.form.divDataRight.form.divDataRight02.form.ccfCD_COST_BACK.form.CDTextBox.setFocus();
        		}

        		validate = false;

        		this.gfnAlert("환급분 처리의 공종코드를 입력해주세요.", "fnCostValidate");
        	}

        	else if(this.gfnIsNull(this.dsList1.getColumn(0, "DS_COMMENT_BACK")))
        	{
        		this.fnCostValidate = function()
        		{
        			this.divData.form.divDataRight.form.divDataRight02.form.ctxtDS_COMMENT_BACK.setFocus();
        		}

        		validate = false;

        		this.gfnAlert("환급분 처리의 적요를 입력해주세요.", "fnCostValidate");
        	}
        	else if(nexacro.toNumber(this.dsList1.getColumn(0, "AM_KOOKMIN_BACK_USER"),0) != nexacro.toNumber(this.dsList1.getColumn(0, "AM_KOOKMIN_BACK_COMPANY"),0))
        	{
        		if(_check == false)
        		{
        			validate = false;

        			var msg = "환급분 처리의 가입자부담분과 사용자부담분 금액이 상이합니다."
        					+ "\n계속 진행하시겠습니까?";
        			this.gfnConfirm(msg, "fnKOOKMIN_BACK_callback");
        		}
        	}
        	return validate;
        }

        this.fnKOOKMIN_BACK_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		_check = true;
        		this.fnCostToja();
        	}
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
        		//this.gfnGridAfterSelect(this.dxGrid);
        		this.fnSetBtnEnable();

        		if(this.dsList1.rowcount > 0)
        		{
        			var am_kookmin_back_user = nexacro.toNumber(this.dsList1.getColumn(0, "AM_KOOKMIN_BACK_USER"),0);
        			var am_kookmin_back_company= nexacro.toNumber(this.dsList1.getColumn(0, "AM_KOOKMIN_BACK_COMPANY"),0);

        			if(am_kookmin_back_user == am_kookmin_back_company)
        			{
        				_check = true;
        			}
        			else
        			{
        				_check = false;
        			}

        			// 환급분 처리의 필수체크 표시
        			if(am_kookmin_back_user == 0 && am_kookmin_back_company)
        			{
        				this.fnChangeUnderline(false);
        			}
        			else
        			{
        				this.fnChangeUnderline(true);
        			}

        			this.dsList1.setColumn(0, "AM_KOOKMIN_TOTAL", nexacro.toNumber(this.dsList1.getColumn(0, "AM_KOOKMIN"),0) - nexacro.toNumber(this.dsList1.getColumn(0, "AM_KOOKMIN_BACK"),0));
        		}

        		return;
        	}

        	if(errorCode == 0){
        		if(svcID == "costtoja")
        		{
        			this.fnCostCallback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("원가투자가 정상처리되었습니다.", "fnCostCallback");
        		}
        		else if(svcID == "costtoja_cancel")
        		{
        			this.fnCostCallback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("원가투자취소가 정상처리되었습니다.", "fnCostCallback");
        		}
        		else if(svcID == "slip")
        		{
        			this.fnSlipCallback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("전표발행이 정상처리되었습니다.", "fnSlipCallback");
        		}
        		else if(svcID == "slip_cancel")
        		{
        			this.fnSlipCallback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("전표발행취소가 정상처리되었습니다.", "fnSlipCallback");
        		}
        		else if(svcID == "confirm")
        		{
        			this.fnCallback_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("확정이 정상처리되었습니다.", "fnCallback_callback");
        		}
        		else if(svcID == "cancel")
        		{
        			this.fnCallback_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("확정취소가 정상처리되었습니다.", "fnCallback_callback");
        		}
        	}
        	else
        	{
        		this.gfnAlert(errorMsg);
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_SITE") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.objApp.gdsUserInfo.getColumn(0, "CD_CORP"));
        	}else if(id == "ccfCD_COST" || id == "ccfCD_COST_BACK")
        	{
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE") || this.dsSearch.getColumn(0, "CD_SITE") == ""))
        		{
        			this.gfnAlert("현장코드를 먼저 입력해주십시오.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "CD_GBIMOK", "");
        		dsUserParam.setColumn(nrow, "CD_STDAGG", "");
        	}
        	return true;
        }

        this.ccfCD_COST_AfterCDTextChanged = function(id, codeFindData) {
        	// 코드,명칭 외 추가 컬럼 처리
        	var arr = codeFindData;

        	var cd_cost = "";
        	var cd_dkcost = "";
        	var ds_cost = "";
        	if (arr.length > 0) {
        		cd_cost = arr[0]["CD_COST"];
        		cd_dkcost = arr[0]["CD_DKCOST"];
        		ds_cost = arr[0]["DS_COST"];
        	}

        	this.dsList1.setColumn(0, "CD_DKCOST", cd_dkcost);
        	this.dsList1.setColumn(0, "CD_COST", cd_cost);
        	this.dsList1.setColumn(0, "DS_COST", ds_cost);
        }

        this.ccfCD_COST_BACK_AfterCDTextChanged = function(id, codeFindData) {
        	// 코드,명칭 외 추가 컬럼 처리
        	var arr = codeFindData;

        	var cd_cost = "";
        	var cd_dkcost = "";
        	var ds_cost = "";
        	if (arr.length > 0) {
        		cd_cost = arr[0]["CD_COST"];
        		cd_dkcost = arr[0]["CD_DKCOST"];
        		ds_cost = arr[0]["DS_COST"];
        	}

        	this.dsList1.setColumn(0, "CD_DKCOST_BACK", cd_dkcost);
        	this.dsList1.setColumn(0, "CD_COST_BACK", cd_cost);
        	this.dsList1.setColumn(0, "DS_COST_BACK", ds_cost);
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        	}
        }

        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_left(e.clientx);
        		this.divData.form.resetScroll();
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };


        this.fnCostToja = function(obj,e) {
        	if(!this.fnCostTojaValidate()) return;

        	this.dsCost.clearData();
        	var nrow = this.dsCost.addRow();

        	this.dsCost.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsCost.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        	this.dsCost.setColumn(nrow, "DT_SLIP", this.dsList1.getColumn(0, "DT_SLIP"));
        	this.dsCost.setColumn(nrow, "AM_KOOKMIN_USER", this.dsList1.getColumn(0, "AM_KOOKMIN_USER"));
        	this.dsCost.setColumn(nrow, "AM_KOOKMIN_COMPANY", this.dsList1.getColumn(0, "AM_KOOKMIN_COMPANY"));
        	this.dsCost.setColumn(nrow, "CD_COST", this.dsList1.getColumn(0, "CD_COST"));
        	this.dsCost.setColumn(nrow, "DS_COST", this.dsList1.getColumn(0, "DS_COST"));
        	this.dsCost.setColumn(nrow, "DS_COMMENT", this.dsList1.getColumn(0, "DS_COMMENT"));
        	this.dsCost.setColumn(nrow, "AM_KOOKMIN", this.dsList1.getColumn(0, "AM_KOOKMIN"));
        	this.dsCost.setColumn(nrow, "AM_KOOKMIN_BACK_USER", this.dsList1.getColumn(0, "AM_KOOKMIN_BACK_USER"));
        	this.dsCost.setColumn(nrow, "AM_KOOKMIN_BACK_COMPANY", this.dsList1.getColumn(0, "AM_KOOKMIN_BACK_COMPANY"));
        	this.dsCost.setColumn(nrow, "CD_COST_BACK", this.dsList1.getColumn(0, "CD_COST_BACK"));
        	this.dsCost.setColumn(nrow, "DS_COST_BACK", this.dsList1.getColumn(0, "DS_COST_BACK"));
        	this.dsCost.setColumn(nrow, "DS_COMMENT_BACK", this.dsList1.getColumn(0, "DS_COMMENT_BACK"));
        	this.dsCost.setColumn(nrow, "AM_KOOKMIN_BACK", this.dsList1.getColumn(0, "AM_KOOKMIN_BACK"));
        	this.dsCost.setColumn(nrow, "AM_KOOKMIN_TOTAL", this.dsList1.getColumn(0, "AM_KOOKMIN_TOTAL"));
        	this.dsCost.setColumn(nrow, "ID_CREATE", this.AuthClient.ID_SABUN);

        	if (this.dsCost.rowcount == 0) return;

        	var strSvcId    = "costtoja";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "costtoja=dsCost";
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

        this.fnCostTojaCancel = function(obj,e) {
        	this.dsCostDelete.clearData();
        	var nrow = this.dsCostDelete.addRow();

        	this.dsCostDelete.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsCostDelete.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        	this.dsCostDelete.setColumn(nrow, "DT_DATE", this.dsList1.getColumn(0, "DT_SLIP"));
        	this.dsCostDelete.setColumn(nrow, "NO_ERPKEY", this.dsList1.getColumn(0, "NO_ERPKEY"));

        	if (this.dsCostDelete.rowcount == 0) return;

        	var strSvcId    = "costtoja_cancel";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "costtoja_cancel=dsCostDelete";
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

        this.fnSlip = function(obj,e) {
        	this.gfnConfirm("전표발행을 진행하시겠습니까?", "fnSlip_callback");
        }

        this.fnSlip_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.dsSlip.clearData();
        		var nrow = this.dsSlip.addRow();

        		this.dsSlip.setColumn(nrow, "CD_CORP", "01");
        		this.dsSlip.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsSlip.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        		this.dsSlip.setColumn(nrow, "CD_DEPT_BH", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsSlip.setColumn(nrow, "DT_ACCOUNT", this.dsList1.getColumn(0, "DT_SLIP"));
        		this.dsSlip.setColumn(nrow, "DT_REQUEST", "");
        		this.dsSlip.setColumn(nrow, "NO_ERPKEY", this.dsList1.getColumn(0, "NO_ERPKEY"));
        		this.dsSlip.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        		if (this.dsSlip.rowcount == 0) return;

        		var strSvcId    = "slip";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "slip=dsSlip";
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

        this.fnSlipCancel = function(obj,e) {

        	this.gfnConfirm("전표발행취소를 진행하시겠습니까?", "fnSlipCancel_callback");
        }

        this.fnSlipCancel_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.dsSlipCancel.clearData();
        		var nrow = this.dsSlipCancel.addRow();

        		this.dsSlipCancel.setColumn(nrow, "NO_ERPKEY", this.dsList1.getColumn(0, "NO_ERPKEY"));
        		this.dsSlipCancel.setColumn(nrow, "ID_USER", this.AuthClient.ID_SABUN);
        		this.dsSlipCancel.setColumn(nrow, "CD_GUBUN", "K");

        		if (this.dsSlipCancel.rowcount == 0) return;

        		var strSvcId    = "slip_cancel";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "slip_cancel=dsSlipCancel";
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


        this.fnSapslip = function(obj,e) {
        	this.gfnConfirm("전표발행(SAP)을 진행하시겠습니까?", "fnSapslip_callback");
        }

        this.fnSapslip_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		var no_erpkey = this.dsList1.getColumn(0, "NO_ERPKEY");
        		var cd_trade = this.dsList1.getColumn(0, "NO_SLIP");
        		var id_user = this.AuthClient.ID_USER;
        		this.gfnSlipIssue(no_erpkey, cd_trade, id_user, "fnSapslipOk_callback");
        	}
        }

        // gfnSlipIssue 전표발행 성공시 실행할 callback
        this.fnSapslipOk_callback = function() {
        	this.FormBtns.Select.click();
        	/*
        	this.fnSlipMsgCallback = function()
        	{
        		this.FormBtns.Select.click();
        	}
        	this.gfnAlert("전표발행(SAP)이 정상처리되었습니다.", "fnSlipMsgCallback");
        	*/
        }


        this.fnSapslipCncl = function(obj,e) {

        	this.gfnConfirm("전표발행취소(SAP)를 진행하시겠습니까?", "fnSapslipCncl_callback");
        }

        this.fnSapslipCncl_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		var no_erpkey = this.dsList1.getColumn(0, "NO_ERPKEY");
        		var cd_trade = this.dsList1.getColumn(0, "NO_SLIP");
        		var id_user = this.AuthClient.ID_USER;
        		var sap_slip = this.dsList1.getColumn(0, "BELNR");		// SAP 전표번호
        		var sap_slip_year = this.dsList1.getColumn(0, "GJAHR");	// SAP 전표의 회계연도
        		var sap_comp = "HD00";

        		this.gfnSlipCancel(no_erpkey, cd_trade, id_user, sap_comp, sap_slip, sap_slip_year, "fnSlipCancelOk_callback");
        	}

        }


        // gfnSlipCancel 전표취소 성공시 실행할 callback
        this.fnSlipCancelOk_callback = function() {
        	this.FormBtns.Select.click();
        	/*
        	this.fnSlipMsgCallback = function()
        	{
        		this.FormBtns.Select.click();
        	}
        	this.gfnAlert("전표발행취소(SAP)가 정상처리되었습니다.", "fnSlipMsgCallback");
        	*/
        }


        this.fnSetBtnEnable = function() {

        	this.btnCostToja.set_enable(false); //원가투자
        	this.btnCostTojaCancel.set_enable(false); //원가투자취소
        	this.btnSlip.set_enable(false); //전표발행
        	this.btnSlipCancel.set_enable(false); //전표발행취소
        	this.btnShowSlip.set_enable(false); //전표조회
        	this.btnSapslip.set_enable(false); // 전표발행(SAP)
        	this.btnSapslipCncl.set_enable(false); //전표취소(SAP)
        	this.btnConfirm.set_enable(false); // 확정
        	this.btnCancel.set_enable(false); //확정취소
        	this.btnJundo.set_enable(false); //전도금처리

        	var dt_Slip = this.dsList1.getColumn(0, "DT_SLIP"); //전기일자
        	var no_Slip = this.dsList1.getColumn(0, "NO_SLIP"); //현장발생전표
        	var no_BELNR = this.dsList1.getColumn(0, "BELNR"); // SAP전표번호

        	if(dt_Slip == "" || this.gfnIsNull(dt_Slip))
        	{
        		if(this.dsList.getColumn(0, "TY_CONFIRM") == 1)
        		{
        			this.btnConfirm.set_enable(false);
        			this.btnCancel.set_enable(true);
        		}
        		else
        		{
        			this.btnConfirm.set_enable(true);
        			this.btnCancel.set_enable(false);
        		}
        	}
        	else
        	{
        		this.btnConfirm.set_enable(false);
        		this.btnCancel.set_enable(false);
        	}

        	//전기 일자가 없다면.
        	if(dt_Slip == "" || this.gfnIsNull(dt_Slip))
        	{
        		// 원가투자 버튼만 활성화.
        		this.btnCostToja.set_enable(true);
        		this.divData.form.divDataRight.form.divDataRight03.form.ctclDT_SLIP.set_readonly(false);

        		if(this.dsList1.rowcount == 0)
        		{
        			this.dsList1.clearData();
        			this.dsList1.addRow();
        		}

        		this.dsList1.setColumn(0, "DT_SLIP", this.gfnGetDate());
        		return;
        	}
        	else
        	{
        		this.divData.form.divDataRight.form.divDataRight03.form.ctclDT_SLIP.set_readonly(true);
        		// 전기일자가 있으면서 발생전표가 없을 경우
        		if(no_Slip == "" || this.gfnIsNull(no_Slip))
        		{
        			//원가투자취소, 전표발행 버튼 활성화
        			this.btnCostTojaCancel.set_enable(true); //원가투자취소
        			this.btnSlip.set_enable(true); //전표발행
        		}
        		else
        		{
        			// 전기일자, 발생전표가 있고 지급전표가 없는 경우
        			if(no_BELNR == "" || this.gfnIsNull(no_BELNR))
        			{
        				// 전표발행취소 버튼을 활성화한다.
        				this.btnSlipCancel.set_enable(true);
        				this.btnShowSlip.set_enable(true);
        			}
        		}
        	}

        	// 현장발생전표에 값이 있으면서 SAP전표번호에 값이 없으면 전표발행(SAP) 활성화
        	if(!this.gfnIsNull(no_Slip)){
        		if (this.gfnIsNull(this.dsList1.getColumn(0, "BELNR"))) {
        			this.btnSapslip.set_enable(true);
        		}
        		this.btnShowSlip.set_enable(true);
        	}

        	// SAP전표번호에 값이 있을경우 전표취소(SAP) 활성화
        	if (!this.gfnIsNull(this.dsList1.getColumn(0, "BELNR"))) {
        	    this.btnSapslipCncl.set_enable(true);
        		this.btnJundo.set_enable(true);
        	}
        }

        // 전표 조회 버튼
        this.fnShowSlip = function(obj,e) {
        	var param = {};
        	param.CD_TRADE = this.dsList1.getColumn(0, "NO_SLIP");

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);
        }




        this.fnConfirm = function(obj,e) {
        	if(this.dsList.rowcount < 1) return;
        	if(this.dsList.findRow("TY_CONFIRM", "1", 0) < 0)
        	{
        		this.gfnAlert("데이터를 선택해주세요.");
        		return;
        	}

        	this.gfnConfirm("확정을 진행하시겠습니까?", "fnConfirm_callback");
        }

        this.fnConfirm_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.dsConfirm.clearData();

        		for(var i = 0 ; i < this.dsList.rowcount; i++)
        		{
        			if(this.dsList.getColumn(i, "TY_CONFIRM") == 1)
        			{
        				var nrow = this.dsConfirm.addRow();
        				this.dsConfirm.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsConfirm.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        				this.dsConfirm.setColumn(nrow, "NO_ID", this.dsList.getColumn(i, "NO_ID"));
        				this.dsConfirm.setColumn(nrow, "YM_KOOKMIN", this.dsList.getColumn(i, "YM_KOOKMIN"));
        				this.dsConfirm.setColumn(nrow, "AM_KOOKMIN", this.dsList.getColumn(i, "AM_KOOKMIN"));
        			}
        		}

        		if (this.dsConfirm.rowcount == 0) return;

        		var strSvcId    = "confirm";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "confirm=dsConfirm";
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


        this.fnCancel = function(obj,e) {
        	if(this.dsList.rowcount < 1) return;
        	if(this.dsList.findRow("TY_CONFIRM", "1", 0) < 0)
        	{
        		this.gfnAlert("데이터를 선택해주세요.");
        		return;
        	}

        	this.gfnConfirm("확정취소를 진행하시겠습니까?", "fnCancel_callback");
        }

        this.fnCancel_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.dsCancel.clearData();

        		var nrow = this.dsCancel.addRow();
        		this.dsCancel.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsCancel.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));

        		if (this.dsCancel.rowcount == 0) return;

        		var strSvcId    = "cancel";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "cancel=dsCancel";
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


        // 전도금처리 버튼
        this.fnJundo = function(obj,e) {
        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.YM_WORK = this.dsSearch.getColumn(0, "YM_WORK");
        	param.TY_GUBUN = "K";

        	this.gfnFormOpen("DSB", "DSB_JUNDO", "", param, 630, 230);
        }


        this.dsList1_onvaluechanged = function(obj,e)
        {
        	if(e.newvalue != e.oldvalue)
        	{
        		if(e.columnid == "AM_KOOKMIN_BACK")
        		{

        			var am_kookmin = nexacro.toNumber(this.dsList1.getColumn(0, "AM_KOOKMIN"),0);
        			this.dsList1.setColumn(0, "AM_KOOKMIN_TOTAL", am_kookmin - nexacro.toNumber(e.newvalue,0));
        		}
        		else if(e.columnid == "AM_KOOKMIN_BACK_USER")
        		{
        			var am_kookmin_back_company = nexacro.toNumber(this.dsList1.getColumn(0, "AM_KOOKMIN_BACK_COMPANY"), 0);
        			this.dsList1.setColumn(0, "AM_KOOKMIN_BACK", nexacro.toNumber(e.newvalue,0) + am_kookmin_back_company);

        			if(e.newvalue != am_kookmin_back_company) _check = false;
        			else _check = true;

        			if(e.newvalue == 0 && am_kookmin_back_company == 0)
        			{
        				this.fnChangeUnderline(false);
        			}
        			else
        			{
        				this.fnChangeUnderline(true);
        			}
        		}
        		else if(e.columnid == "AM_KOOKMIN_BACK_COMPANY")
        		{
        			var am_kookmin_back_user = nexacro.toNumber(this.dsList1.getColumn(0, "AM_KOOKMIN_BACK_USER"), 0);
        			this.dsList1.setColumn(0, "AM_KOOKMIN_BACK", nexacro.toNumber(e.newvalue,0) + am_kookmin_back_user);

        			if(e.newvalue != am_kookmin_back_user) _check = false;
        			else _check = true;

        			if(e.newvalue == 0 && am_kookmin_back_user == 0)
        			{
        				this.fnChangeUnderline(false);
        			}
        			else
        			{
        				this.fnChangeUnderline(true);
        			}
        		}
        	}
        };

        this.fnChangeUnderline = function(val)
        {
        	if(val == true)
        	{
        		this.divData.form.divDataRight.form.divDataRight02.form.staCD_COST_BACK.set_textDecoration('underline');
        		this.divData.form.divDataRight.form.divDataRight02.form.staDS_COMMENT_BACK.set_textDecoration('underline');
        	}
        	else
        	{
        		this.divData.form.divDataRight.form.divDataRight02.form.staCD_COST_BACK.set_textDecoration('none');
        		this.divData.form.divDataRight.form.divDataRight02.form.staDS_COMMENT_BACK.set_textDecoration('none');
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.fnCancel,this);
            this.divData.form.btnConfirm.addEventHandler("onclick",this.fnConfirm,this);
            this.dsList1.addEventHandler("onvaluechanged",this.dsList1_onvaluechanged,this);
        };
        this.loadIncludeScript("DSB_KOOKMIN.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
