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
            this.set_titletext("예산 전용/변경");
            if (Form == this.constructor)
            {
                this._setFormPosition(1120,705);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsListFrom", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListTo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DIQPR_DIVERT_BUDGET_SELECT</Col></Row><Row><Col id=\"TARGET\">selectMon</Col><Col id=\"SP\">DIQPR_DIVERT_DTL_MONTHS_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DIQPR_DIVERT_DTL_SAVE</Col></Row><Row><Col id=\"TARGET\">saveMon</Col><Col id=\"SP\">DIQPR_DIVERT_DTL_MONTHS_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ_MST\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ_DTL\" type=\"STRING\" size=\"256\"/><Column id=\"YR_BUDGET\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"GR_SEARCH\" type=\"STRING\" size=\"256\"/><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/><Column id=\"YN_READONLY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YR_BUDGET\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ_MST\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DIVERT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COST\" type=\"STRING\" size=\"256\"/><Column id=\"NM_POS\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ_DTL\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_CD_COST\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_CD_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_DS_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_CD_ACTIVE\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_DS_ACTIVE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_MONTH\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MM_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"MM_TO\" type=\"STRING\" size=\"256\"/><Column id=\"TO_CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"TO_CD_COST\" type=\"STRING\" size=\"256\"/><Column id=\"TO_CD_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DS_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TO_CD_ACTIVE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DS_ACTIVE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_AVAILABLE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_BUDGET\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_AFTERRES\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_DIVERT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TORESERVE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TOAFTERRES\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YN_DUPLICATE\" type=\"STRING\" size=\"256\"/><Column id=\"AP_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"YM_MAGAM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_MAGAM\" type=\"STRING\" size=\"256\"/><Column id=\"NO_APRV\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NO_DOC\" type=\"STRING\" size=\"256\"/><Column id=\"ST_APRV\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PUBC\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PUBC\" type=\"STRING\" size=\"256\"/><Column id=\"ID_APPR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_APPR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail1","0","0",null,"210","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","0","10","150","22",null,null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("13");
            obj.set_text("가용예산항목");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new Static("sta80","sta03:10","10","30","25",null,null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("9");
            obj.set_text("년도");
            obj.set_visible("false");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new Edit("txtYR_BUDGET","sta80:5","10","50","25",null,null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new Static("sta85","txtYR_BUDGET:5","10","50","25",null,null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("6");
            obj.set_text("SEQ_DTL");
            obj.set_visible("false");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new Edit("edtSEQ_DTL","sta85:5","10","70","25",null,null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("34");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new Static("sta81","edtSEQ_DTL:5","10","50","25",null,null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("7");
            obj.set_text("중복여부");
            obj.set_visible("false");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new Edit("txtYN_DUPLICATE","sta81:5","10","50","25",null,null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new Button("btn00","txtYN_DUPLICATE:5","10","40","22",null,null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("38");
            obj.set_text("TEST");
            obj.set_visible("false");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new Static("sta52","0","sta03:5","115","35",null,null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("4");
            obj.set_text("예산변경번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new Static("sta53","sta52:-1","sta03:5","408","35",null,null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new Edit("txtSEQ_MST","sta52:5","sta53:-30","100","25",null,null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new Static("sta54","sta53:-1","sta03:5","115","35",null,null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("8");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new Static("sta55","sta53:113","sta03:5",null,"35","5",null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new Radio("rdoTY_GUBUN","sta54:5","sta53:-30","220","25",null,null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("37");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divData_form_divDetail1_form_rdoTY_GUBUN_innerdataset = new nexacro.NormalDataset("divData_form_divDetail1_form_rdoTY_GUBUN_innerdataset", obj);
            divData_form_divDetail1_form_rdoTY_GUBUN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">전용(세목 변경)</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">변경(월 변경)</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_divDetail1_form_rdoTY_GUBUN_innerdataset);
            obj.set_text("전용");
            obj.set_value("1");
            obj.set_index("0");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new Static("sta18","854","37","115","35",null,null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("42");
            obj.set_text("마감월");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("false");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new Static("sta19","968","37",null,"35","5",null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new Div("ctclYM_MAGAM","sta18:5","sta53:-30","80","25",null,null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enable("false");
            obj.set_visible("false");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new Static("sta04","0","sta52:-1","115","35",null,null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("14");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new Static("sta05","sta04:-1","sta52:-1","408","35",null,null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new Static("sta06","sta05:-1","sta52:-1","115","35",null,null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("18");
            obj.set_text("변경사유");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new Static("sta07","sta06:-1","sta52:-1",null,"35","5",null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new Static("sta08","0","sta04:-1","115","35",null,null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("21");
            obj.set_text("비목코드");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new Static("sta09","sta08:-1","sta05:-1","408","35",null,null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new Static("sta10","sta09:-1","sta06:-1","115","35",null,null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("25");
            obj.set_text("세목코드");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new Static("sta11","sta10:-1","sta07:-1",null,"35","5",null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new Static("sta12","0","sta08:-1","115","35",null,null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("27");
            obj.set_text("변경전 확정예산");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new Static("sta13","sta12:-1","sta09:-1","150","35",null,null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new Static("sta01","sta13:-1","sta09:-1","110","35",null,null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("5");
            obj.set_text("변경가능금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new Static("sta16","sta01:-1","sta09:-1","150","35",null,null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new Static("sta02","sta16:-1","sta10:-1","115","35",null,null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("11");
            obj.set_text("변경해줄금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new Static("sta17","sta02:-1","sta10:-1","150","35",null,null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new Static("sta14","sta17:-1","sta10:-1","115","35",null,null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("29");
            obj.set_text("변경후 확정예산");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new Static("sta15","sta14:-1","sta11:-1",null,"35","5",null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new Edit("txtDS_REM","sta06:5","sta07:-30",null,"25","15",null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("35");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new Div("cfCD_DEPT","sta08:5","sta05:-30","300","25",null,null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.getSetter("CodeFindName").set("DIX_ACNTUNIT_AUTH");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("20");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new Edit("edtCD_COST","55","sta04:-30","45","25",null,null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("31");
            obj.set_visible("false");
            obj.set_readonly("true");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new Div("cfCD_ACCOUNT","sta08:5","sta09:-30","300","25",null,null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.getSetter("CodeFindName").set("DIX_CFBIMOK_DIVERT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("22");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new Div("cfCD_ACTIVE","sta10:5","sta11:-30",null,"25","15",null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.getSetter("CodeFindName").set("DIX_CFSEMOK_DIVERT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("24");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_BUDGET","sta12:5","sta13:-30","135","25",null,null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("36");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_DIVERT","sta02:5","sta17:-30","135","25",null,null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("12");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_AVAILABLE","sta01:5","sta16:-30","135","25",null,null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("10");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_AFTERRES","sta14:5","sta15:-30","135","25",null,null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("39");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new Static("sta20","0","sta12:10","400","22",null,null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("32");
            obj.set_text("월별확정예산(From)");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new Div("divComDist",null,"sta12:10","500","25","5",null,null,null,null,null,this.divData.form.divDetail1.form);
            obj.set_taborder("33");
            obj.set_enable("false");
            obj.set_visible("false");
            this.divData.form.divDetail1.addChild(obj.name, obj);

            obj = new Button("btnComDistEqually2",null,"0","80","25","0",null,null,null,null,null,this.divData.form.divDetail1.form.divComDist.form);
            obj.set_taborder("0");
            obj.set_text("기간계산");
            this.divData.form.divDetail1.form.divComDist.addChild(obj.name, obj);

            obj = new Static("sta01","0","2","80","20",null,null,null,null,null,null,this.divData.form.divDetail1.form.divComDist.form);
            obj.set_taborder("1");
            obj.set_text("자동삭감금액");
            this.divData.form.divDetail1.form.divComDist.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_MONTH","sta01:5","2","120","20",null,null,null,null,null,null,this.divData.form.divDetail1.form.divComDist.form);
            obj.set_taborder("2");
            obj.set_format("#,##0");
            this.divData.form.divDetail1.form.divComDist.addChild(obj.name, obj);

            obj = new Static("sta00","txtAM_MONTH:10","2","30","20",null,null,null,null,null,null,this.divData.form.divDetail1.form.divComDist.form);
            obj.set_taborder("3");
            obj.set_text("기간");
            this.divData.form.divDetail1.form.divComDist.addChild(obj.name, obj);

            obj = new MaskEdit("txtMM_FROM","sta00:5","2","50","20",null,null,null,null,null,null,this.divData.form.divDetail1.form.divComDist.form);
            obj.set_taborder("4");
            obj.set_format("#,###");
            this.divData.form.divDetail1.form.divComDist.addChild(obj.name, obj);

            obj = new Static("sta02","txtMM_FROM:5","2","30","20",null,null,null,null,null,null,this.divData.form.divDetail1.form.divComDist.form);
            obj.set_taborder("5");
            obj.set_text("월 ~");
            this.divData.form.divDetail1.form.divComDist.addChild(obj.name, obj);

            obj = new MaskEdit("txtMM_TO","sta02:5","2","50","20",null,null,null,null,null,null,this.divData.form.divDetail1.form.divComDist.form);
            obj.set_taborder("6");
            obj.set_format("#,###");
            this.divData.form.divDetail1.form.divComDist.addChild(obj.name, obj);

            obj = new Static("sta03","txtMM_TO:5","2","20","20",null,null,null,null,null,null,this.divData.form.divDetail1.form.divComDist.form);
            obj.set_taborder("7");
            obj.set_text("월");
            this.divData.form.divDetail1.form.divComDist.addChild(obj.name, obj);

            obj = new Div("divData1","0","divDetail1:3",null,"185","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divData1.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divData1.addChild(obj.name, obj);

            obj = new Div("divDetail2","0","divData1:3",null,"166","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta21","0","0",null,"22","0",null,null,null,null,null,this.divData.form.divDetail2.form);
            obj.set_taborder("0");
            obj.set_text("변경예산항목(변경해줄 일반예산항목 선택)");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDetail2.addChild(obj.name, obj);

            obj = new Static("sta22","0","sta21:10","120","35",null,null,null,null,null,null,this.divData.form.divDetail2.form);
            obj.set_taborder("1");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDetail2.addChild(obj.name, obj);

            obj = new Static("sta23","sta22:-1","sta21:10","400","35",null,null,null,null,null,null,this.divData.form.divDetail2.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDetail2.addChild(obj.name, obj);

            obj = new Static("sta26","0","sta22:-1","120","35",null,null,null,null,null,null,this.divData.form.divDetail2.form);
            obj.set_taborder("4");
            obj.set_text("비목코드");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDetail2.addChild(obj.name, obj);

            obj = new Static("sta27","sta26:-1","sta23:-1","400","35",null,null,null,null,null,null,this.divData.form.divDetail2.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDetail2.addChild(obj.name, obj);

            obj = new Static("sta28","sta27:-1","66","120","35",null,null,null,null,null,null,this.divData.form.divDetail2.form);
            obj.set_taborder("6");
            obj.set_text("세목코드");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDetail2.addChild(obj.name, obj);

            obj = new Static("sta29","sta28:-1","66",null,"35","5",null,null,null,null,null,this.divData.form.divDetail2.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.form.divDetail2.addChild(obj.name, obj);

            obj = new Static("sta30","0","sta26:-1","120","35",null,null,null,null,null,null,this.divData.form.divDetail2.form);
            obj.set_taborder("8");
            obj.set_text("가용전 확정예산");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDetail2.addChild(obj.name, obj);

            obj = new Static("sta31","sta30:-1","sta27:-1","400","35",null,null,null,null,null,null,this.divData.form.divDetail2.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDetail2.addChild(obj.name, obj);

            obj = new Static("sta32","sta31:-1","sta28:-1","120","35",null,null,null,null,null,null,this.divData.form.divDetail2.form);
            obj.set_taborder("10");
            obj.set_text("가용후 확정예산");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDetail2.addChild(obj.name, obj);

            obj = new Static("sta33","sta32:-1","sta29:-1",null,"35","5",null,null,null,null,null,this.divData.form.divDetail2.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDetail2.addChild(obj.name, obj);

            obj = new Static("sta38","0","sta30:5",null,"22","0",null,null,null,null,null,this.divData.form.divDetail2.form);
            obj.set_taborder("12");
            obj.set_text("월별확정예산(To)");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDetail2.addChild(obj.name, obj);

            obj = new Div("cfCD_DEPT_TO","sta26:5","sta23:-30","300","25",null,null,null,null,null,null,this.divData.form.divDetail2.form);
            obj.getSetter("CodeFindName").set("DIX_ACNTUNIT_AUTH");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("13");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            this.divData.form.divDetail2.addChild(obj.name, obj);

            obj = new Edit("edtCD_COST_TO","cfCD_DEPT_TO:10","sta23:-30","60","25",null,null,null,null,null,null,this.divData.form.divDetail2.form);
            obj.set_taborder("20");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.divData.form.divDetail2.addChild(obj.name, obj);

            obj = new Div("cfCD_ACCOUNT_TO","sta30:5","sta27:-30","300","25",null,null,null,null,null,null,this.divData.form.divDetail2.form);
            obj.getSetter("CodeFindName").set("DIX_CFBIMOK_BUDGET");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("14");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divDetail2.addChild(obj.name, obj);

            obj = new Div("cfCD_ACTIVE_TO","sta32:5","sta29:-30",null,"25","15",null,null,null,null,null,this.divData.form.divDetail2.form);
            obj.getSetter("CodeFindName").set("DIX_CFSEMOK_BUDGET");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("15");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divDetail2.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_TORESERVE","125","sta31:-30","150","25",null,null,null,null,null,null,this.divData.form.divDetail2.form);
            obj.set_taborder("16");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.form.divDetail2.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_TOAFTERRES","643","sta33:-30","150","25",null,null,null,null,null,null,this.divData.form.divDetail2.form);
            obj.set_taborder("17");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.divData.form.divDetail2.addChild(obj.name, obj);

            obj = new Button("btnCopyFromBudget",null,"sta30:5","85","25","5",null,null,null,null,null,this.divData.form.divDetail2.form);
            obj.set_taborder("19");
            obj.set_text("From예산복사");
            this.divData.form.divDetail2.addChild(obj.name, obj);

            obj = new Button("btnComDistEqually",null,"sta30:5","80","25","btnCopyFromBudget:10",null,null,null,null,null,this.divData.form.divDetail2.form);
            obj.set_taborder("18");
            obj.set_text("균등배분");
            obj.set_visible("false");
            this.divData.form.divDetail2.addChild(obj.name, obj);

            obj = new Button("btnFile","803","sta33:-30","60","24",null,null,null,null,null,null,this.divData.form.divDetail2.form);
            obj.set_taborder("2");
            obj.set_text("첨부");
            obj.set_visible("false");
            this.divData.form.divDetail2.addChild(obj.name, obj);

            obj = new Div("divData2","0","divDetail2:3",null,"125","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid2","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divData2.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divData2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.divDetail1.form.txtSEQ_MST","value","dsDetail","SEQ_MST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.divDetail1.form.edtSEQ_DTL","value","dsDetail","SEQ_DTL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divDetail1.form.txtYR_BUDGET","value","dsDetail","YR_BUDGET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divDetail1.form.txtDS_TITLE","value","dsDetail","DS_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDetail1.form.rdoTY_GUBUN","value","dsDetail","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDetail1.form.cfCD_DEPT.form.CDTextBox","value","dsDetail","FROM_CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDetail1.form.cfCD_DEPT.form.DSTextBox","value","dsDetail","FROM_DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDetail1.form.edtCD_COST","value","dsDetail","FROM_CD_COST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDetail1.form.cfCD_ACCOUNT.form.CDTextBox","value","dsDetail","FROM_CD_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDetail1.form.cfCD_ACCOUNT.form.DSTextBox","value","dsDetail","FROM_DS_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDetail1.form.cfCD_ACTIVE.form.CDTextBox","value","dsDetail","FROM_CD_ACTIVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDetail1.form.cfCD_ACTIVE.form.DSTextBox","value","dsDetail","FROM_DS_ACTIVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDetail2.form.cfCD_DEPT_TO.form.CDTextBox","value","dsDetail","TO_CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divDetail2.form.cfCD_DEPT_TO.form.DSTextBox","value","dsDetail","TO_DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divDetail2.form.cfCD_ACCOUNT_TO.form.CDTextBox","value","dsDetail","TO_CD_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divDetail2.form.cfCD_ACCOUNT_TO.form.DSTextBox","value","dsDetail","TO_DS_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divDetail2.form.cfCD_ACTIVE_TO.form.CDTextBox","value","dsDetail","TO_CD_ACTIVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divDetail2.form.cfCD_ACTIVE_TO.form.DSTextBox","value","dsDetail","TO_DS_ACTIVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divDetail2.form.edtCD_COST_TO","value","dsDetail","TO_CD_COST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divDetail1.form.txtAM_AVAILABLE","value","dsDetail","AM_AVAILABLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divDetail1.form.txtAM_DIVERT","value","dsDetail","AM_DIVERT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divDetail1.form.txtAM_BUDGET","value","dsDetail","AM_BUDGET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divDetail1.form.txtAM_AFTERRES","value","dsDetail","AM_AFTERRES");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.divDetail2.form.txtAM_TORESERVE","value","dsDetail","AM_TORESERVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.divDetail2.form.txtAM_TOAFTERRES","value","dsDetail","AM_TOAFTERRES");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.divDetail1.form.divComDist.form.txtAM_MONTH","value","dsDetail","AM_MONTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.divDetail1.form.divComDist.form.txtMM_FROM","value","dsDetail","MM_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.divDetail1.form.divComDist.form.txtMM_TO","value","dsDetail","MM_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divDetail1.form.txtDS_REM","value","dsDetail","DS_REM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.divDetail1.form.txtYN_DUPLICATE","value","dsDetail","YN_DUPLICATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.divDetail1.form.ctclYM_MAGAM.form.TextBox","value","dsDetail","YM_MAGAM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DIQ_BUDGETTOBUDGET.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.GridData = [];

        this.nRowPlanY = 0;		// 확정예산  (조회)
        this.nRowPlanN = 1;		// 실적		  (조회)
        this.nRowBudget = 2;	// 가용예산  (조회)
        this.nRowChange = 3;	// 변경금액  (입력)
        this.nRowBalance = 4;	// 변경후금액(조회)

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

        	this.dsSearch.setColumn(0, "SEQ_MST", this.getOwnerFrame().SEQ_MST);
        	this.dsSearch.setColumn(0, "SEQ_DTL", this.getOwnerFrame().SEQ_DTL);
        	this.dsSearch.setColumn(0, "TY_GUBUN", this.getOwnerFrame().TY_GUBUN);

        	this.dsSearch.setColumn(0, "ID_USER", this.getOwnerFrame().ID_USER);
        	this.dsSearch.setColumn(0, "GR_SEARCH", this.getOwnerFrame().GR_SEARCH);
        	// 전자결재 상세 조회시 Y값으로 넘어옴
        	this.dsSearch.setColumn(0, "YN_READONLY", this.getOwnerFrame().YN_READONLY);

        	// 전자결재 조회시
        	var SEQ_MST = this.gfnGetParam("SEQ_MST");
            var SEQ_DTL = this.gfnGetParam("SEQ_DTL");
        	var TY_GUBUN = this.gfnGetParam("TY_GUBUN");
        // 	if(!this.gfnIsNull(SEQ_MST)){
        // 		var nRow = this.dsSearch.addRow();
        // 		this.dsSearch.setColumn(nRow, "SEQ_MST", SEQ_MST);
        // 		this.dsSearch.setColumn(nRow, "SEQ_DTL", SEQ_DTL);
        // 		this.dsSearch.setColumn(nRow, "TY_GUBUN", TY_GUBUN);
        // 	}

        trace(this.dsSearch.saveXML());

        	this.fnSelect();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel

        	var SEQ_DTL = this.gfnNvl(this.dsSearch.getColumn(0, "SEQ_DTL"), this.dsDetail.getColumn(0, "SEQ_DTL"));
        	var bEnable = (this.gfnIsNull(SEQ_DTL)) ? false : true;
        	this.FormBtns.Del.set_enable(bEnable);
        	//this.FormBtns.Select.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btn1 = this.gfnFormButtonAdd("BTN_EXTENSION", "fnExtension");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.divDetail1 = this.divData.form.divDetail1;
        	this.divDetail2 = this.divData.form.divDetail2;

        	this.txtYR_BUDGET = this.divData.form.divDetail1.form.txtYR_BUDGET;
        	this.txtSEQ_MST = this.divData.form.divDetail1.form.txtSEQ_MST;
        	this.txtDS_TITLE = this.divData.form.divDetail1.form.txtDS_TITLE;
        	this.txtAM_AVAILABLE = this.divData.form.divDetail1.form.txtAM_AVAILABLE;
        	this.txtAM_DIVERT = this.divData.form.divDetail1.form.txtAM_DIVERT;
        	this.edtSEQ_DTL = this.divData.form.divDetail1.form.edtSEQ_DTL;

        	this.cfCD_DEPT = this.divData.form.divDetail1.form.cfCD_DEPT;
        	this.cfCD_ACCOUNT = this.divData.form.divDetail1.form.cfCD_ACCOUNT;
        	this.cfCD_ACTIVE = this.divData.form.divDetail1.form.cfCD_ACTIVE;

        	// 월별확정예산(To)
        	this.cfCD_DEPT_TO = this.divData.form.divDetail2.form.cfCD_DEPT_TO;
        	this.cfCD_ACCOUNT_TO = this.divData.form.divDetail2.form.cfCD_ACCOUNT_TO;
        	this.cfCD_ACTIVE_TO = this.divData.form.divDetail2.form.cfCD_ACTIVE_TO;

        	this.btnFile = this.divData.form.divDetail2.form.btnFile;

        	// 금액분배 기간계산
        	this.divComDist = this.divData.form.divDetail1.form.divComDist;
        	this.btnComDistEqually2 = this.divComDist.form.btnComDistEqually2;
        	this.btnComDistEqually = this.divData.form.divDetail2.form.btnComDistEqually;
        	this.btnCopyFromBudget = this.divData.form.divDetail2.form.btnCopyFromBudget;

        	this.dxGrid = this.divData.form.divData1.form.objGrid;
        	this.dxGrid2 = this.divData.form.divData2.form.objGrid2;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.cfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_ACCOUNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_ACTIVE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.cfCD_DEPT_TO.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_ACCOUNT_TO.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_ACTIVE_TO.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.cfCD_DEPT.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfCD_ACCOUNT.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfCD_ACTIVE.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.cfCD_DEPT_TO.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfCD_ACCOUNT_TO.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfCD_ACTIVE_TO.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsListFrom, "DI", "DIQ_BUDGETTOBUDGET");
        	this.gfnGridInit(this.dxGrid2, this.dsListTo, "DI", "DIQ_BUDGETTOBUDGET");

        	/*
        	-- 예산변경 금액구분 TY_GUBUN 공통코드 I03
        	-- 01	FROM_확정예산
        	-- 02	FROM_실적
        	-- 03	FROM_가용예산
        	-- 04	FROM_변경금액
        	-- 05	FROM_변경후금액
        	-- 06	TO_확정금액
        	-- 07	TO_변경금액
        	-- 08	TO_변경후금액
        	*/
        	this.gfnGridColumnColor(this.dxGrid, "", "BACK_ReadOnly", "TY_GUBUN=='01'", true);	// FROM_확정예산
        	this.gfnGridColumnColor(this.dxGrid, "", "BACK_ReadOnly", "TY_GUBUN=='02'", true);	// FROM_실적
        	this.gfnGridColumnColor(this.dxGrid, "", "BACK_ReadOnly", "TY_GUBUN=='03'", true);	// FROM_가용예산
        	this.gfnGridColumnColor(this.dxGrid, "", "BACK_ReadOnly", "TY_GUBUN=='05'", true);	//FROM_변경후금액

        	this.gfnGridColumnColor(this.dxGrid2, "", "BACK_ReadOnly", "TY_GUBUN=='06'", true);	// TO_확정금액
        	this.gfnGridColumnColor(this.dxGrid2, "", "BACK_ReadOnly", "TY_GUBUN=='08'", true);	// TO_변경후금액

        // 	this.gfnGridColumnColor(this.dxGrid, "", "BACK_ReadOnly", "DS_GUBUN=='확정예산'", true);
        // 	this.gfnGridColumnColor(this.dxGrid, "", "BACK_ReadOnly", "DS_GUBUN=='실적'", true);
        // 	this.gfnGridColumnColor(this.dxGrid, "", "BACK_ReadOnly", "DS_GUBUN=='가용예산'", true);
        // 	this.gfnGridColumnColor(this.dxGrid, "", "BACK_ReadOnly", "DS_GUBUN=='변경후금액'", true);
        //
        // 	this.gfnGridColumnColor(this.dxGrid2, "", "BACK_ReadOnly", "DS_GUBUN=='확정금액'", true);
        // 	this.gfnGridColumnColor(this.dxGrid2, "", "BACK_ReadOnly", "DS_GUBUN=='변경후금액'", true);

        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit"
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        	this.dxGrid2.AfterEdit = "fnGrid2_AfterEdit";
        	this.dxGrid2.EnterCell = "fnGrid2_EnterCell";

        	this.dxGrid.sort = "false";
        	this.dxGrid2.sort = "false";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("SEQ_MST", "int");
        	this.dsSelect.addColumn("SEQ_DTL", "int");
        	this.dsSelect.addColumn("TY_GUBUN", "string");

        	this.dsBudgetSelect = new Dataset();
        	this.dsBudgetSelect.addColumn("SEQ_MST", "int");
        	this.dsBudgetSelect.addColumn("SEQ_DTL", "int");
        	this.dsBudgetSelect.addColumn("DS_GUBUN", "string");
        	this.dsBudgetSelect.addColumn("YR_BUDGET", "string");
        	this.dsBudgetSelect.addColumn("CD_DEPT", "string");
        	this.dsBudgetSelect.addColumn("CD_ACCOUNT", "string");
        	this.dsBudgetSelect.addColumn("CD_ACTIVE", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("YR_BUDGET", "string");
        	this.dsSave.addColumn("SEQ_MST", "int");
        	this.dsSave.addColumn("SEQ_DTL", "int");
        	this.dsSave.addColumn("TY_GUBUN", "string");
        	this.dsSave.addColumn("FROM_CD_DEPT", "string");
        	this.dsSave.addColumn("FROM_CD_ACCOUNT", "string");
        	this.dsSave.addColumn("FROM_CD_ACTIVE", "string");
        	this.dsSave.addColumn("FROM_AM_BEFORE", "bigdecimal");
        	this.dsSave.addColumn("FROM_AM_DIVERT", "bigdecimal");
        	this.dsSave.addColumn("DS_REM", "string");
        	this.dsSave.addColumn("TO_CD_DEPT", "string");
        	this.dsSave.addColumn("TO_CD_ACCOUNT", "string");
        	this.dsSave.addColumn("TO_CD_ACTIVE", "string");
        	this.dsSave.addColumn("TO_AM_BEFORE", "bigdecimal");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("SEQ_DTL_NEW", "int");	// OUTPUT

        	this.dsSaveMon = new Dataset();
        	this.dsSaveMon.addColumn("TY_SAVE", "string");
        	this.dsSaveMon.addColumn("YR_BUDGET", "string");
        	this.dsSaveMon.addColumn("SEQ_MST", "int");
        	this.dsSaveMon.addColumn("SEQ_DTL", "int");
        	this.dsSaveMon.addColumn("TY_GUBUN", "string");
        	this.dsSaveMon.addColumn("AM_JAN", "bigdecimal");
        	this.dsSaveMon.addColumn("AM_FEB", "bigdecimal");
        	this.dsSaveMon.addColumn("AM_MAR", "bigdecimal");
        	this.dsSaveMon.addColumn("AM_APR", "bigdecimal");
        	this.dsSaveMon.addColumn("AM_MAY", "bigdecimal");
        	this.dsSaveMon.addColumn("AM_JUN", "bigdecimal");
        	this.dsSaveMon.addColumn("AM_JUL", "bigdecimal");
        	this.dsSaveMon.addColumn("AM_AUG", "bigdecimal");
        	this.dsSaveMon.addColumn("AM_SEP", "bigdecimal");
        	this.dsSaveMon.addColumn("AM_OCT", "bigdecimal");
        	this.dsSaveMon.addColumn("AM_NOV", "bigdecimal");
        	this.dsSaveMon.addColumn("AM_DEC", "bigdecimal");
        	this.dsSaveMon.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	trace("[DB] 1 예산변경관리 편성금액 조회 fnSelect");

        	if (!this.fnSelectValidate()) return false;

        	this.dsListFrom.clearData();
        	this.dsListTo.clearData();

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "SEQ_MST", this.dsSearch.getColumn(0, "SEQ_MST"));
        	this.dsSelect.setColumn(0, "SEQ_DTL", this.dsSearch.getColumn(0, "SEQ_DTL"));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsDetail=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        // 예산변경관리 편성금액 조회(데이터 수정시)
        this.fnBudgetDivertSelect = function(DS_GUBUN){

        	trace("[DB] 2 예산변경관리 편성금액 DETAIL 테이블에서 저장된 데이터 조회 fnBudgetDivertSelect" + " / DS_GUBUN=>" + DS_GUBUN);

        	// DS_GUBUN : FROM/TO
            var COL_CD_DEPT = (DS_GUBUN == "FROM") ? "FROM_CD_DEPT" : "TO_CD_DEPT";
            var COL_CD_ACCOUNT = (DS_GUBUN == "FROM") ? "FROM_CD_ACCOUNT" : "TO_CD_ACCOUNT";
            var COL_CD_ACTIVE = (DS_GUBUN == "FROM") ? "FROM_CD_ACTIVE" : "TO_CD_ACTIVE";

        	this.dsBudgetSelect.clearData();
        	this.dsBudgetSelect.addRow();

        	this.dsBudgetSelect.setColumn(0, "SEQ_MST", this.dsDetail.getColumn(0, "SEQ_MST"));
        	this.dsBudgetSelect.setColumn(0, "SEQ_DTL", this.dsDetail.getColumn(0, "SEQ_DTL"));
        	this.dsBudgetSelect.setColumn(0, "DS_GUBUN", DS_GUBUN);
        	this.dsBudgetSelect.setColumn(0, "YR_BUDGET", this.dsDetail.getColumn(0, "YR_BUDGET"));
        	this.dsBudgetSelect.setColumn(0, "CD_DEPT", this.dsDetail.getColumn(0, COL_CD_DEPT));
        	this.dsBudgetSelect.setColumn(0, "CD_ACCOUNT", this.dsDetail.getColumn(0, COL_CD_ACCOUNT));
        	this.dsBudgetSelect.setColumn(0, "CD_ACTIVE", this.dsDetail.getColumn(0, COL_CD_ACTIVE));

        	var strSvcId    = "selectDivertBudget";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectMon=dsBudgetSelect";
        	var outData 	= (DS_GUBUN == "FROM") ? "dsListFrom=selectMon0" : "dsListTo=selectMon0";
        	//var outData     = "dsListFrom=selectBudget0 dsListTo=selectBudget1";
        	//var strArg      = DS_GUBUN;
        	var strArg      = "gubun=" + DS_GUBUN;
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        // 예산변경관리 편성금액 조회(코드파인드 변경시)
        this.fnBudgetSelect = function(DS_GUBUN){

        	trace("[DB] 3 코드파인더 세목 변경되고! 편성금액 뷰테이블 조회 fnBudgetSelect"+ " / DS_GUBUN=>" + DS_GUBUN);

        	// DS_GUBUN : FROM/TO
            var COL_CD_DEPT = (DS_GUBUN == "FROM") ? "FROM_CD_DEPT" : "TO_CD_DEPT";
            var COL_CD_ACCOUNT = (DS_GUBUN == "FROM") ? "FROM_CD_ACCOUNT" : "TO_CD_ACCOUNT";
            var COL_CD_ACTIVE = (DS_GUBUN == "FROM") ? "FROM_CD_ACTIVE" : "TO_CD_ACTIVE";

        	this.dsBudgetSelect.clearData();
        	this.dsBudgetSelect.addRow();

        	this.dsBudgetSelect.setColumn(0, "SEQ_MST", this.dsDetail.getColumn(0, "SEQ_MST"));
        	//this.dsBudgetSelect.setColumn(0, "SEQ_DTL", this.dsDetail.getColumn(0, "SEQ_DTL"));
        	this.dsBudgetSelect.setColumn(0, "SEQ_DTL", "");
        	this.dsBudgetSelect.setColumn(0, "DS_GUBUN", DS_GUBUN);
        	this.dsBudgetSelect.setColumn(0, "YR_BUDGET", this.dsDetail.getColumn(0, "YR_BUDGET"));
        	this.dsBudgetSelect.setColumn(0, "CD_DEPT", this.dsDetail.getColumn(0, COL_CD_DEPT));
        	this.dsBudgetSelect.setColumn(0, "CD_ACCOUNT", this.dsDetail.getColumn(0, COL_CD_ACCOUNT));
        	this.dsBudgetSelect.setColumn(0, "CD_ACTIVE", this.dsDetail.getColumn(0, COL_CD_ACTIVE));

        	var strSvcId    = "selectBudget";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectMon=dsBudgetSelect";
        	var outData 	= (DS_GUBUN == "FROM") ? "dsListFrom=selectMon0" : "dsListTo=selectMon0";
        	//var outData     = "dsListFrom=selectBudget0 dsListTo=selectBudget1";
        	//var strArg      = DS_GUBUN;
        	var strArg      = "gubun=" + DS_GUBUN;

        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	return;

        	if (!this.fnValidate()) return;

        	//var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        	var nrow = this.gfnGridAdd(this.dxGrid, "bottom", true);
        	this.dsList.setColumn(nrow, "SEQ_CARD", this.dsDetail.getColumn(0, "SEQ_CARD"));
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
        // 	var AP_STATUS = this.dsDetail.getColumn(0, "AP_STATUS");
        // 	var bApStatus = (AP_STATUS == "02" || AP_STATUS == "05") ? true : false;

        	// 전자결재상태 ST_APRV 공통코드 DZ - DZ_APRV
        	// 1임시저장    2결재상신    3결재중    4결재완료    5반려    6상신취소    7작성취소
        	var AP_STATUS = this.dsDetail.getColumn(0, "ST_APRV");
        	trace("결재상태->" + AP_STATUS);
        	if(AP_STATUS == "1" || AP_STATUS == "2" || AP_STATUS == "3" || AP_STATUS == "4") {
        		this.gfnAlert("결재중/결재완료중인 데이터는 삭제가 불가능합니다.");
        		return false;
        	}

        	var YN_DUPLICATE = this.dsDetail.getColumn(0, "YN_DUPLICATE");
        	var ChkMsg =  (this.gfnNvl(YN_DUPLICATE, "N") == "Y") ? "중복된 세목코드가 있어 전체 데이터가 삭제됩니다. " : "";
        	this.gfnConfirm( ChkMsg + "삭제하시겠습니까?", function(sSvcId, val) {
        		if (val) {

        			this.dsSave.clearData();
        			var nrow = this.dsSave.addRow();

        			var SEQ_DTL = this.dsDetail.getColumn(0, "SEQ_DTL");
        			var flag = "D";

        			this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        			this.dsSave.setColumn(nrow, "YR_BUDGET", this.dsDetail.getColumn(0, "YR_BUDGET"));
        			this.dsSave.setColumn(nrow, "SEQ_MST", this.dsDetail.getColumn(0, "SEQ_MST"));
        			this.dsSave.setColumn(nrow, "SEQ_DTL", this.dsDetail.getColumn(0, "SEQ_DTL"));

        			this.dsSave.setColumn(nrow, "TY_GUBUN", this.dsDetail.getColumn(0, "TY_GUBUN"));
        			this.dsSave.setColumn(nrow, "FROM_CD_DEPT", this.dsDetail.getColumn(0, "FROM_CD_DEPT"));
        			this.dsSave.setColumn(nrow, "FROM_CD_ACCOUNT", this.dsDetail.getColumn(0, "FROM_CD_ACCOUNT"));
        			this.dsSave.setColumn(nrow, "FROM_CD_ACTIVE", this.dsDetail.getColumn(0, "FROM_CD_ACTIVE"));
        			this.dsSave.setColumn(nrow, "FROM_AM_BEFORE", this.dsDetail.getColumn(0, "AM_BUDGET"));
        			this.dsSave.setColumn(nrow, "FROM_AM_DIVERT", this.dsDetail.getColumn(0, "AM_DIVERT"));
        			this.dsSave.setColumn(nrow, "DS_REM", this.dsDetail.getColumn(0, "DS_REM"));
        			this.dsSave.setColumn(nrow, "TO_CD_DEPT", this.dsDetail.getColumn(0, "TO_CD_DEPT"));
        			this.dsSave.setColumn(nrow, "TO_CD_ACCOUNT", this.dsDetail.getColumn(0, "TO_CD_ACCOUNT"));
        			this.dsSave.setColumn(nrow, "TO_CD_ACTIVE", this.dsDetail.getColumn(0, "TO_CD_ACTIVE"));
        			this.dsSave.setColumn(nrow, "TO_AM_BEFORE", this.dsDetail.getColumn(0, "AM_TORESERVE"));
        			this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			//this.dsSave.setColumn(nrow, "SEQ_DTL_NEW", ""); OUTPUT

        			if (this.dsSave.rowcount == 0){
        				this.gfnAlert('msg.save.nochange');
        				return;
        			}

        			//trace(this.dsSave.saveXML());

        			var strSvcId    = "delete";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "save=dsSave";
        			var outData     = "dsResult=save";
        			var strArg      = "";
        			var callBackFnc = "fnCallback";

        			this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        								strSvcType, 	// transaction을 요청할 구분
        								inProc,			// Procedure 정보 Dataset 이름
        								inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        								outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        								strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        								callBackFnc); 	// 통신방법 정의 [생략가능]
        		}
        	});
        }

        /*
         *	저장 버튼 (DHQPR_DIVERT_DTL_SAVE)
         */
        this.fnSave = function() {

        	if (!this.fnSaveValidate()) return false;

        	this.gfnConfirm("저장하시겠습니까?", function(sSvcId, val) {
        		if (val) {

        			this.dxGrid.updateToDataset();
        			this.dxGrid2.updateToDataset();

        			this.dsSave.clearData();
        			var nrow = this.dsSave.addRow();

        			var SEQ_DTL = this.dsDetail.getColumn(0, "SEQ_DTL");
        			var flag = (this.gfnIsNull(SEQ_DTL)) ? "I" : "U";

        			this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        			this.dsSave.setColumn(nrow, "YR_BUDGET", this.dsDetail.getColumn(0, "YR_BUDGET"));
        			this.dsSave.setColumn(nrow, "SEQ_MST", this.dsDetail.getColumn(0, "SEQ_MST"));
        			this.dsSave.setColumn(nrow, "SEQ_DTL", this.dsDetail.getColumn(0, "SEQ_DTL"));
        			this.dsSave.setColumn(nrow, "TY_GUBUN", this.dsDetail.getColumn(0, "TY_GUBUN"));
        			this.dsSave.setColumn(nrow, "FROM_CD_DEPT", this.dsDetail.getColumn(0, "FROM_CD_DEPT"));
        			this.dsSave.setColumn(nrow, "FROM_CD_ACCOUNT", this.dsDetail.getColumn(0, "FROM_CD_ACCOUNT"));
        			this.dsSave.setColumn(nrow, "FROM_CD_ACTIVE", this.dsDetail.getColumn(0, "FROM_CD_ACTIVE"));
        			this.dsSave.setColumn(nrow, "FROM_AM_BEFORE", this.dsDetail.getColumn(0, "AM_BUDGET"));
        			this.dsSave.setColumn(nrow, "FROM_AM_DIVERT", this.dsDetail.getColumn(0, "AM_DIVERT"));
        			this.dsSave.setColumn(nrow, "DS_REM", this.dsDetail.getColumn(0, "DS_REM"));
        			this.dsSave.setColumn(nrow, "TO_CD_DEPT", this.dsDetail.getColumn(0, "TO_CD_DEPT"));
        			this.dsSave.setColumn(nrow, "TO_CD_ACCOUNT", this.dsDetail.getColumn(0, "TO_CD_ACCOUNT"));
        			this.dsSave.setColumn(nrow, "TO_CD_ACTIVE", this.dsDetail.getColumn(0, "TO_CD_ACTIVE"));
        			this.dsSave.setColumn(nrow, "TO_AM_BEFORE", this.dsDetail.getColumn(0, "AM_TORESERVE"));
        			this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        			//this.dsSave.setColumn(nrow, "SEQ_DTL_NEW", ""); OUTPUT

        			if (this.dsSave.rowcount == 0){
        				this.gfnAlert('msg.save.nochange');
        				return;
        			}

        			var strSvcId    = "save";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "save=dsSave";
        			var outData     = "dsResult=save";
        			var strArg      = "";
        			var callBackFnc = "fnCallback";

        			this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        								strSvcType, 	// transaction을 요청할 구분
        								inProc,			// Procedure 정보 Dataset 이름
        								inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        								outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        								strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        								callBackFnc); 	// 통신방법 정의 [생략가능]
        		}
        	});
        };

        // 월별확정예산 저장 (DHQPR_DIVERT_DTL_MONTHS_SAVE)
        this.fnSaveMon = function() {

        	this.dxGrid.updateToDataset();
        	this.dxGrid2.updateToDataset();

        	this.dsSaveMon.clearData();

        	// FROM
        	var objDs = this.dsListFrom;
        	for (var i = 0; i < this.dsListFrom.rowcount; i++) {
        		var nrow = this.dsSaveMon.addRow();
        		this.dsSaveMon.setColumn(nrow, "TY_SAVE", "I");
        		this.dsSaveMon.setColumn(nrow, "YR_BUDGET", this.dsDetail.getColumn(0, "YR_BUDGET"));
        		this.dsSaveMon.setColumn(nrow, "SEQ_MST", this.dsDetail.getColumn(0, "SEQ_MST"));
        		this.dsSaveMon.setColumn(nrow, "SEQ_DTL", this.dsDetail.getColumn(0, "SEQ_DTL"));
        		this.dsSaveMon.setColumn(nrow, "TY_GUBUN", objDs.getColumn(i, "TY_GUBUN"));
        		this.dsSaveMon.setColumn(nrow, "AM_JAN", objDs.getColumn(i, "AM_JAN"));
        		this.dsSaveMon.setColumn(nrow, "AM_FEB", objDs.getColumn(i, "AM_FEB"));
        		this.dsSaveMon.setColumn(nrow, "AM_MAR", objDs.getColumn(i, "AM_MAR"));
        		this.dsSaveMon.setColumn(nrow, "AM_APR", objDs.getColumn(i, "AM_APR"));
        		this.dsSaveMon.setColumn(nrow, "AM_MAY", objDs.getColumn(i, "AM_MAY"));
        		this.dsSaveMon.setColumn(nrow, "AM_JUN", objDs.getColumn(i, "AM_JUN"));
        		this.dsSaveMon.setColumn(nrow, "AM_JUL", objDs.getColumn(i, "AM_JUL"));
        		this.dsSaveMon.setColumn(nrow, "AM_AUG", objDs.getColumn(i, "AM_AUG"));
        		this.dsSaveMon.setColumn(nrow, "AM_SEP", objDs.getColumn(i, "AM_SEP"));
        		this.dsSaveMon.setColumn(nrow, "AM_OCT", objDs.getColumn(i, "AM_OCT"));
        		this.dsSaveMon.setColumn(nrow, "AM_NOV", objDs.getColumn(i, "AM_NOV"));
        		this.dsSaveMon.setColumn(nrow, "AM_DEC", objDs.getColumn(i, "AM_DEC"));
        		this.dsSaveMon.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}

        	// TO
        	var objDs = this.dsListTo;
        	for (var i = 0; i < this.dsListTo.rowcount; i++) {
        		var nrow = this.dsSaveMon.addRow();
        		this.dsSaveMon.setColumn(nrow, "TY_SAVE", "I");
        		this.dsSaveMon.setColumn(nrow, "YR_BUDGET", this.dsDetail.getColumn(0, "YR_BUDGET"));
        		this.dsSaveMon.setColumn(nrow, "SEQ_MST", this.dsDetail.getColumn(0, "SEQ_MST"));
        		this.dsSaveMon.setColumn(nrow, "SEQ_DTL", this.dsDetail.getColumn(0, "SEQ_DTL"));
        		this.dsSaveMon.setColumn(nrow, "TY_GUBUN", objDs.getColumn(i, "TY_GUBUN"));
        		this.dsSaveMon.setColumn(nrow, "AM_JAN", objDs.getColumn(i, "AM_JAN"));
        		this.dsSaveMon.setColumn(nrow, "AM_FEB", objDs.getColumn(i, "AM_FEB"));
        		this.dsSaveMon.setColumn(nrow, "AM_MAR", objDs.getColumn(i, "AM_MAR"));
        		this.dsSaveMon.setColumn(nrow, "AM_APR", objDs.getColumn(i, "AM_APR"));
        		this.dsSaveMon.setColumn(nrow, "AM_MAY", objDs.getColumn(i, "AM_MAY"));
        		this.dsSaveMon.setColumn(nrow, "AM_JUN", objDs.getColumn(i, "AM_JUN"));
        		this.dsSaveMon.setColumn(nrow, "AM_JUL", objDs.getColumn(i, "AM_JUL"));
        		this.dsSaveMon.setColumn(nrow, "AM_AUG", objDs.getColumn(i, "AM_AUG"));
        		this.dsSaveMon.setColumn(nrow, "AM_SEP", objDs.getColumn(i, "AM_SEP"));
        		this.dsSaveMon.setColumn(nrow, "AM_OCT", objDs.getColumn(i, "AM_OCT"));
        		this.dsSaveMon.setColumn(nrow, "AM_NOV", objDs.getColumn(i, "AM_NOV"));
        		this.dsSaveMon.setColumn(nrow, "AM_DEC", objDs.getColumn(i, "AM_DEC"));
        		this.dsSaveMon.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}

        	var strSvcId    = "saveMon";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "saveMon=dsSaveMon";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        // 월별확정예산 삭제 (DHQPR_DIVERT_DTL_MONTHS_SAVE)
        this.fnDeleteMon = function() {

        	this.dxGrid.updateToDataset();
        	this.dxGrid2.updateToDataset();

        	this.dsSaveMon.clearData();
        	var nrow = this.dsSaveMon.addRow();
        	this.dsSaveMon.setColumn(nrow, "TY_SAVE", "D");
        	this.dsSaveMon.setColumn(nrow, "YR_BUDGET", this.dsDetail.getColumn(0, "YR_BUDGET"));
        	this.dsSaveMon.setColumn(nrow, "SEQ_MST", this.dsDetail.getColumn(0, "SEQ_MST"));
        	this.dsSaveMon.setColumn(nrow, "SEQ_DTL", this.dsDetail.getColumn(0, "SEQ_DTL"));
        	this.dsSaveMon.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "deleteMon";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "saveMon=dsSaveMon";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
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
        	var validate = true;
        	return validate;
        };

        /*
         *	저장 Validate
         */
        this.fnSaveValidate = function () {
        	var validate = true;
        	var msg = "";

        	// 구분 TY_GUBUN : (1변경,2전용,3추가)
        	var tyGubun = this.dsDetail.getColumn(0, "TY_GUBUN");
        	if  ( tyGubun == "2" && (this.dsDetail.getColumn(0, "FROM_CD_ACCOUNT") == this.dsDetail.getColumn(0, "TO_CD_ACCOUNT"))
        	   && (this.dsDetail.getColumn(0, "FROM_CD_ACTIVE") == this.dsDetail.getColumn(0, "TO_CD_ACTIVE"))){
        		msg += "같은 세목코드 값이 입력되어있습니다 구분코드를 확인하세요.\n";
        		validate = false;
        	}

        	if (this.gfnIsNull(this.dsDetail.getColumn(0, "DS_REM"))) {
        		msg += "변경사유를 입력하세요.\n";
        		validate = false;
        	}

        	var s = this.dxGrid.getBindCellIndex("body", "AM_JAN");
        	var e = this.dxGrid.getBindCellIndex("body", "AM_TOT");
        	var iCheck = 0;
        	for (var i = s; i <= e; i++) {
        		var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, i);
        		// 월별확정예산(FROM) 변경후금액
        		if (nexacro.toNumber(this.dsListFrom.getColumn(4, colnm)) < 0) {
        			iCheck++;
        		}
        	}

        	if (iCheck > 0) {
        		msg += "월별 전용금액에 (-)가 있으므로 변경할 수 없습니다.!\n";
        		validate = false;
        	}
        	var nAmTot1 = nexacro.toNumber(this.gfnNvl(this.dsListFrom.getColumn(4, "AM_TOT"),0));
        	var nAmAfterRes = nexacro.toNumber(this.gfnNvl(this.dsDetail.getColumn(0, "AM_AFTERRES"),0));

        	trace("변경후 확정예산(From)->" + this.gfnAppendComma(nAmTot1));
        	trace("월별확정예산(From)->" + this.gfnAppendComma(nAmAfterRes));

        // 	if (nAmTot1 != nAmAfterRes) {
        // 		msg += "변경후 확정예산(From) " + this.gfnAppendComma(nAmTot1) + " 과 월별확정예산(From) "
        // 			    + this.gfnAppendComma(nAmAfterRes) + " 의 합계금액이 일치하지 않습니다!\n";
        // 		validate = false;
        // 	}

        	// 변경해줄금액
        	var amDivert = nexacro.toNumber(this.gfnNvl(this.dsDetail.getColumn(0, "AM_DIVERT"),0));
        	// 월별확정예산(From) 변경금액
        	var nAmTot3 = nexacro.toNumber(this.gfnNvl(this.dsListFrom.getColumn(3, "AM_TOT"),0));
        	if (amDivert != nAmTot3) {
        		msg += "변경해줄금액 " + this.gfnAppendComma(amDivert) + " 과 월별확정예산(From) 변경금액"
        			    + this.gfnAppendComma(nAmTot3) + " 의 합계금액이 일치하지 않습니다!\n";
        		validate = false;
        	}

        	var nAmTot2 = nexacro.toNumber(this.gfnNvl(this.dsListTo.getColumn(2, "AM_TOT"),0));
        	var nAmToAfterRes = nexacro.toNumber(this.gfnNvl(this.dsDetail.getColumn(0, "AM_TOAFTERRES"),0));

        	trace("가용후 확정예산(To)->" + this.gfnAppendComma(nAmTot2));
        	trace("월별가용예산(To)->" + this.gfnAppendComma(nAmToAfterRes));
        	//this.gfnAppendComma(nAmTot)

        	if (nAmTot2 != nAmToAfterRes) {
        		//msg += "가용후 확정예산(To) "+this.gfnAppendComma(nAmTot2)+" 과 월별가용예산(To) " +this.gfnAppendComma(nAmToAfterRes)+" 의 합계금액이 일치하지 않습니다!\n";
        		msg += "전용(from) 금액 "+this.gfnAppendComma(amDivert)+" 과 전용(to) 금액 " +this.gfnAppendComma(nAmTot2)+"이 일치하지 않습니다.!\n";
        		validate = false;
        	}

        	if (this.gfnIsNull(this.dsDetail.getColumn(0, "TO_CD_DEPT"))) {
        		msg += "변경예산 부서코드를 입력하세요.\n";
        		validate = false;
        	}
        	if (this.gfnIsNull(this.dsDetail.getColumn(0, "TO_CD_ACCOUNT"))) {
        		msg += "변경예산 비목코드를 입력하세요.\n";
        		validate = false;
        	}
        	if (this.gfnIsNull(this.dsDetail.getColumn(0, "TO_CD_ACTIVE"))) {
        		msg += "변경예산 세목코드를 입력하세요.\n";
        		validate = false;
        	}

        	if (!validate) {
        		this.gfnAlert(msg);
        	}
        	return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        //this.fnCallback = function(svcID, errorCode, errorMsg)
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg)
        {
        	if (errorCode != 0){
        		this.gfnAlert(errorMsg);
        	}

        	switch(svcID) {

        		case "select":
        			//trace("[fnCallback] select조회콜백 dsDetail.saveXML" + this.dsDetail.saveXML());
        			var SEQ_MST = this.gfnNvl(this.dsSearch.getColumn(0, "SEQ_MST"), this.dsDetail.getColumn(0, "SEQ_MST"));
        			var SEQ_DTL = this.gfnNvl(this.dsSearch.getColumn(0, "SEQ_DTL"), this.dsDetail.getColumn(0, "SEQ_DTL"));

        			// 마감월 처리
        			this.fnSetMagamMonthReadOnly(this.dxGrid);
        			this.fnSetMagamMonthReadOnly(this.dxGrid2);

         			// 세목코드 중복이면 수정X, 삭제시 전체삭제
        			var YN_DUPLICATE = this.dsDetail.getColumn(0, "YN_DUPLICATE");
        // 				AP_STATUS : 전자결재 상태 (A11)
        // 				00	결재전	01	임시저장	02	결재중
        // 				04	반려	05	결재완료	06	상신취소
        //  		var AP_STATUS = this.dsDetail.getColumn(0, "AP_STATUS");
        // 			var bApStatus = (AP_STATUS == "02" || AP_STATUS == "05") ? true : false;
        // 			var bRead = (this.dsSearch.getColumn(0, "YN_READONLY") == "Y") ? true : false;

        			// 전자결재상태 ST_APRV 공통코드 DZ - DZ_APRV
        			// 1임시저장    2결재상신    3결재중    4결재완료    5반려    6상신취소    7작성취소
         			var AP_STATUS = this.dsDetail.getColumn(0, "ST_APRV");
        			var bApStatus = (AP_STATUS == "1" || AP_STATUS == "2" || AP_STATUS == "3" || AP_STATUS == "4") ? true : false;
        			var bRead = (this.dsSearch.getColumn(0, "YN_READONLY") == "Y") ? true : false;

        			trace(bRead + "콜백에서 결제상태 확인"
        			+ "ST_APRV->" + AP_STATUS + "\n"
        			+ "bApStatus->" + bApStatus + "\n"
        			+ "bRead->" + bRead + "\n"

        			);

        			var bEnable = ( bRead || bApStatus || (YN_DUPLICATE == "Y" && !this.gfnIsNull(SEQ_DTL))) ? false : true;
        			var ynReadOnly = (bRead || bApStatus || (YN_DUPLICATE == "Y" && !this.gfnIsNull(SEQ_DTL))) ? "Y" : "N";

         			this.gfnSetAllEnable(this.divDetail1, bEnable);
         			this.gfnSetAllEnable(this.divDetail2, bEnable);
        			this.cfCD_DEPT.set_enable(false);
        			this.cfCD_DEPT_TO.set_enable(false);

        			var tyGubun = this.dsDetail.getColumn(0, "TY_GUBUN");	// 구분 TY_GUBUN : (1변경,2전용,3추가)
        			var bCfEnable = (tyGubun == "1") ? false : true;
        			this.cfCD_DEPT_TO.set_enable(bEnable);
        			this.cfCD_ACCOUNT_TO.set_enable(bCfEnable);
        			this.cfCD_ACTIVE_TO.set_enable(bCfEnable);

        			// 파일 셋팅
        			var FILE_CNT = nexacro.toNumber(this.dsDetail.getColumn(0, "FILE_CNT"));
        			var FILE_ATTACH = (FILE_CNT > 0 ) ? "첨부(" + FILE_CNT+ ")" : "첨부";
        			this.btnFile.set_enable(true);
        			this.btnFile.set_text(FILE_ATTACH);

        			this.dxGrid.info = ynReadOnly;
        			this.dxGrid2.info = ynReadOnly;

        			// 신규등록이면 MST에 등록된 부서를 넣어줌
        			if(this.gfnIsNull(SEQ_DTL)){
        				this.dsDetail.setColumn(0, "FROM_CD_DEPT", this.dsDetail.getColumn(0, "CD_DEPT"));
        				this.dsDetail.setColumn(0, "FROM_DS_DEPT", this.dsDetail.getColumn(0, "DS_DEPT"));
        				this.dsDetail.setColumn(0, "FROM_CD_COST", this.dsDetail.getColumn(0, "CD_COST"));

        				this.dsDetail.setColumn(0, "TO_CD_DEPT", this.dsDetail.getColumn(0, "CD_DEPT"));
        				this.dsDetail.setColumn(0, "TO_DS_DEPT", this.dsDetail.getColumn(0, "DS_DEPT"));
        				this.dsDetail.setColumn(0, "TO_CD_COST", this.dsDetail.getColumn(0, "CD_COST"));

        				this.fnSetButton();

        			}else{
        				// 예산변경관리 편성금액 조회
        				this.fnBudgetDivertSelect("FROM");
        				this.fnBudgetDivertSelect("TO");
        			}

        		break;

        		case "selectDivertBudget":	// DIQT_DIVERT_MONTHS_DETAIL 테이블에서 조회
        		case "selectBudget"	:		// DIQV_BUDGET_ALL 테이블에서 조회

        			var json = this.gfnArgsToJson(strArg);
        			var strArg = json.gubun;

        			trace("[fnCallback] 저장된 예산 내역 조회 selectDivertBudget strArg->" + strArg);

        			if(strArg == "FROM"){
        				// 월별확정예산(From)
        				this.fnSetBudgetFrom();
        			}
        			if(strArg == "TO"){
        				// 구분이 변경일때 코드파인드 변경할때는 FROM 데이터 복사해주기
        				var YnCopyRow4Data = (svcID == "selectDivertBudget") ? "N" : "Y";
        				// 월별확정예산(To)
        				this.fnSetBudgetTo(YnCopyRow4Data);
        			}
        			this.fnSetButton();
        		break;

        		case "save":
        			var NewSeqDtl = this.dsResult.getColumn(0, "SEQ_DTL_NEW");
        			this.dsDetail.setColumn(0, "SEQ_DTL", NewSeqDtl);
        			this.dsSearch.setColumn(0, "SEQ_DTL", NewSeqDtl);
        			this.dsSearch.setColumn(0, "TY_GUBUN", this.dsDetail.getColumn(0, "TY_GUBUN"));

        			this.fnSaveMon();
        		break;

        		case "saveMon":
        			this.fnSaveAlert = function(){
        				this.getParentContext().opener.fnSelect();
        				this.gfnSetFormStatus(this);
        				this.fnSelect();
        			}
        			this.gfnAlert("작업이 성공적으로 수행되었습니다!", "fnSaveAlert");
        		break;

        		case "delete":
        			var NewSeqDtl = this.dsResult.getColumn(0, "SEQ_DTL_NEW");
        			var seqDtl = this.dsDetail.getColumn(0, "SEQ_DTL");

        			this.fnDeleteMon();
        		break;
        		case "deleteMon":
        			this.fnDelAlert = function(){
        				//this.getParentContext().opener.fnSelect();
        				this.getParentContext().close(true);
        			}
        			this.gfnAlert("작업이 성공적으로 수행되었습니다!", "fnDelAlert");
        		break;
        	}
        }

        // 월별확정예산(From)
        this.fnSetBudgetFrom = function(){

        	trace("fnSetBudgetFrom 월별확정예산(From) 시작");

        	this.fnGridSum("GRDDATA");

        	this.dsDetail.setColumn(0, "AM_BUDGET", this.dsListFrom.getColumn(0, "AM_TOT"));	// AM_CUR
        	this.dsDetail.setColumn(0, "AM_AFTERRES", this.dsListFrom.getColumn(2, "AM_TOT")); 	// AM_AVAILABLE
        	this.dsDetail.setColumn(0, "AM_AVAILABLE", this.dsListFrom.getColumn(2, "AM_TOT"));

        	var amAvailable = nexacro.toNumber(this.dsDetail.getColumn(0, "AM_AVAILABLE"));
        	var amBudget = nexacro.toNumber(this.dsDetail.getColumn(0, "AM_BUDGET"));
        	var amDivert = nexacro.toNumber(this.dsDetail.getColumn(0, "AM_DIVERT"));

        	//this.dsDetail.setColumn(0, "AM_AFTERRES", amBudget - amDivert);
        	// 변경후 확정예산 = 변경가능금액 - 변경해줄금액
        	this.dsDetail.setColumn(0, "AM_AFTERRES", amAvailable - amDivert);
        }

        // 월별확정예산(To)
        this.fnSetBudgetTo  = function(YnCopyRow4Data){

        //trace("[fnSetBudgetTo] 월별확정예산(To) 변경해줄금액!!! " + nexacro.toNumber(this.gfnNvl(this.dsDetail.getColumn(0, "AM_DIVERT"),0)));
        this.dsDetail.set_enableevent(false);
        	// 가용전 확정예산
        	this.dsDetail.setColumn(0, "AM_TORESERVE", nexacro.toNumber(this.dsListFrom.getColumn(0, "AM_TOT")));

        	if (this.dsDetail.getColumn(0, "FROM_CD_DEPT") == this.dsDetail.getColumn(0, "TO_CD_DEPT")
        		&& this.dsDetail.getColumn(0, "FROM_CD_ACCOUNT") == this.dsDetail.getColumn(0, "TO_CD_ACCOUNT")
        		&& this.dsDetail.getColumn(0, "FROM_CD_ACTIVE") == this.dsDetail.getColumn(0, "TO_CD_ACTIVE")) {

        		var amDef = nexacro.toNumber(this.gfnNvl(this.dsListFrom.getColumn(0, "AM_TOT"),0));		// 현재예산
        		var amDivert = nexacro.toNumber(this.gfnNvl(this.dsDetail.getColumn(0, "AM_DIVERT"),0));	// 변경해줄금액

        		// 가용전 확정예산
        		this.dsDetail.setColumn(0, "AM_TORESERVE", amDef - amDivert);
        		// 가용후 확정예산
        		this.dsDetail.setColumn(0, "AM_TOAFTERRES", amDef);

        		// 가용후 확정예산
        		//this.dsDetail.setColumn(0, "AM_TOAFTERRES", this.dsDetail.getColumn(0, "AM_TORESERVE"));

        		//var SEQ_DTL = this.dsDetail.getColumn(0, "SEQ_DTL");
        		//if(this.gfnIsNull(SEQ_DTL)){

        		// 구분이 변경일때
        		// YnCopyRow4Data == "N" 데이터 조회시에서 DETAIL 테이블에서 가져오고
        		// YnCopyRow4Data == "Y" 코드파인드 변경할때는 FROM 데이터 복사해주기
        		if(YnCopyRow4Data == "Y"){
        			// FROM에 있는 확정예산을 넣어주기
        			var s = this.dxGrid2.getBindCellIndex("body", "AM_JAN");
        			var e = this.dxGrid2.getBindCellIndex("body", "AM_TOT");
        			this.dsListTo.set_enableevent(false);
        			for (var i = s; i <= e; i++) {
        				var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid2, i);
        				//this.dsListTo.setColumn(0, colnm, this.dsListFrom.getColumn(2, colnm));
        				this.dsListTo.setColumn(0, colnm, this.dsListFrom.getColumn(4, colnm));
        			}
        			this.dsListTo.set_enableevent(true);
        			this.fnGridSum("GRDTO");
        		}
        	}else {

        		var amDef = nexacro.toNumber(this.gfnNvl(this.dsListTo.getColumn(0, "AM_TOT"),0));			// 현재예산
        		var amDivert = nexacro.toNumber(this.gfnNvl(this.dsDetail.getColumn(0, "AM_DIVERT"),0));	// 변경해줄금액

        		// 가용전 확정예산
        		this.dsDetail.setColumn(0, "AM_TORESERVE", amDef);
        		// 가용후 확정예산
        		this.dsDetail.setColumn(0, "AM_TOAFTERRES", amDef + amDivert);

        	}
        this.dsDetail.set_enableevent(true);

        	if (this.dsListTo.rowcount > 0) {
        		this.btnComDistEqually.set_enable(true);
        	}
        	else {
        		this.btnComDistEqually.set_enable(false);
        	}

        	if (this.dsListTo.rowcount > 0) {

        		// 월별확정예산 TO

        		this.dsListTo.setColumn(1, this.ucFlag, "");
        		this.gfnSetFormStatus(this, "Q");

        		this.fnGridSum("GRDTO");

        	}else{
        		this.gfnSetFormStatus(this, "U");
        		this.fnGridSum("GRDTO");
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        trace("코드파인드 이벤트->" + id);
        	switch(id) {
        		// 부서
        		case "cfCD_DEPT":
        		case "cfCD_DEPT_TO":
        			var idSabun = this.dsSearch.getColumn(0, "ID_USER");
        			var grSerch = this.dsSearch.getColumn(0, "GR_SEARCH");

        			dsUserParam.setColumn(nrow, "ID_SABUN", idSabun);
        			dsUserParam.setColumn(nrow, "YN_USE", "Y");
        			dsUserParam.setColumn(nrow, "YR_BUDGET", this.dsDetail.getColumn(0, "YR_BUDGET"));
        			dsUserParam.setColumn(nrow, "GR_SEARCH", grSerch);
        			//dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "CD_DEPT", "");
        			dsUserParam.setColumn(nrow, "TY_DEPTGUBUN", "");	// TY_GUBUN : B본사 / H현장 / S수주영업비
        		break;

        		// 비목코드(FROM)
        		case "cfCD_ACCOUNT":
        			var YR_BUDGET = this.dsDetail.getColumn(this.dsDetail.rowposition, "YR_BUDGET");
        			var TO_CD_DEPT = this.dsDetail.getColumn(this.dsDetail.rowposition, "TO_CD_DEPT");
        			var CD_DEPT = (id == "cfCD_ACCOUNT") ? this.dsDetail.getColumn(this.dsDetail.rowposition, "FROM_CD_DEPT") : TO_CD_DEPT;
        			if(this.gfnIsNull(CD_DEPT)) {
        				this.gfnAlert("부서를 선택하세요.");
        				return false;
        			}
        			/*
        			var TO_CD_COST = this.dsDetail.getColumn(this.dsDetail.rowposition, "TO_CD_COST");
         			var CD_COST = (id == "cfCD_ACCOUNT") ? this.dsDetail.getColumn(this.dsDetail.rowposition, "FROM_CD_COST") : TO_CD_COST;
         			if(this.gfnIsNull(CD_COST)) {
         				this.gfnAlert("부서를 선택하세요.");
         				return false;
         			}
        			*/

        			dsUserParam.setColumn(nrow, "YR_ACCOUNT", YR_BUDGET);
        			dsUserParam.setColumn(nrow, "CD_DEPTOFFICER", CD_DEPT);

        		break;

        		// 비목코드(TO)
        		case "cfCD_ACCOUNT_TO":
        			var YR_BUDGET = this.dsDetail.getColumn(this.dsDetail.rowposition, "YR_BUDGET");
        			var CD_DEPT = this.dsDetail.getColumn(this.dsDetail.rowposition, "TO_CD_DEPT");
        // 			if(this.gfnIsNull(CD_DEPT)) {
        // 				this.gfnAlert("부서를 선택하세요.");
        // 				return false;
        // 			}

        			if (this.gfnIsNull(this.dsDetail.getColumn(0, "YR_BUDGET"))) {
        				this.gfnAlert("회계년도를 먼저 입력하세요.");
        				return false;
        			}

        			dsUserParam.setColumn(nrow, "YR_ACCOUNT", YR_BUDGET);

        		break;

        		// 세목코드(FROM)
        		case "cfCD_ACTIVE":
        			var YR_BUDGET = this.dsDetail.getColumn(this.dsDetail.rowposition, "YR_BUDGET");

        			var TO_CD_ACCOUNT = this.dsDetail.getColumn(this.dsDetail.rowposition, "TO_CD_ACCOUNT");
        			var CD_ACCOUNT = (id == "cfCD_ACTIVE") ? this.dsDetail.getColumn(this.dsDetail.rowposition, "FROM_CD_ACCOUNT") : TO_CD_ACCOUNT;

        			var TO_CD_DEPT = this.dsDetail.getColumn(this.dsDetail.rowposition, "TO_CD_DEPT");
        			var CD_DEPT = (id == "cfCD_ACTIVE") ?  this.dsDetail.getColumn(this.dsDetail.rowposition, "FROM_CD_DEPT") : TO_CD_DEPT;

        			if(this.gfnIsNull(CD_DEPT)) {
        				this.gfnAlert("부서를 선택하세요.");
        				return false;
        			}

        			if(this.gfnIsNull(CD_ACCOUNT)) {
        				this.gfnAlert("비목을 선택하세요.");
        				return false;
        			}

        			dsUserParam.setColumn(nrow, "YR_ACCOUNT", YR_BUDGET);
        			dsUserParam.setColumn(nrow, "CD_DEPTOFFICER", CD_DEPT);
        			dsUserParam.setColumn(nrow, "CD_BIMOK", CD_ACCOUNT);

        		break;

        		// 세목코드(TO)
        		case "cfCD_ACTIVE_TO":
        			var YR_BUDGET = this.dsDetail.getColumn(this.dsDetail.rowposition, "YR_BUDGET");
        			var CD_ACCOUNT = this.gfnNvl(this.dsDetail.getColumn(this.dsDetail.rowposition, "TO_CD_ACCOUNT"), "");
        			var CD_DEPT = this.dsDetail.getColumn(this.dsDetail.rowposition, "TO_CD_DEPT");

        			if (this.gfnIsNull(YR_BUDGET)) {
        				this.gfnAlert("회계년도를 먼저 입력하세요.");
        				return false;
         			}

        			if (this.gfnIsNull(CD_ACCOUNT)) {
        				this.gfnAlert("비목코드를 먼저 입력하세요.");
        				return false;
        			}

        			dsUserParam.setColumn(nrow, "YR_ACCOUNT", YR_BUDGET);
        			dsUserParam.setColumn(nrow, "CD_BIMOK", CD_ACCOUNT);

        		break;
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	var rowPos = this.dsDetail.rowposition;
        	var tyGubun = this.dsDetail.getColumn(rowPos, "TY_GUBUN");	// 구분 TY_GUBUN : (1변경,2전용,3추가)
        	switch(id) {

        		// 부서 FROM
        		case "cfCD_DEPT":
        			var CD_COST = (arrData.length > 0) ? arrData[0]["CD_COST"] : "";
        			var CD_DEPT = (arrData.length > 0) ? arrData[0]["CD_DEPT"] : "";
        			var DS_DEPT = (arrData.length > 0) ? arrData[0]["DS_DEPT"] : "";
        			this.dsDetail.setColumn(rowPos, "FROM_CD_COST", CD_COST);

        			this.cfCD_ACCOUNT.form.fnCodeFindClear();
        			this.cfCD_ACTIVE.form.fnCodeFindClear();

        			this.gfnGridClear(this.dxGrid);

        			this.dsDetail.setColumn(0, "AM_BUDGET", 0);
        			this.dsDetail.setColumn(0, "AM_AFTERRES", 0);
        			this.dsDetail.setColumn(0, "AM_AVAILABLE", 0);

        			this.dsDetail.setColumn(rowPos, "TO_CD_DEPT", CD_DEPT);
        			this.dsDetail.setColumn(rowPos, "TO_DS_DEPT", DS_DEPT);
        			this.dsDetail.setColumn(rowPos, "TO_CD_COST", CD_COST);

        			this.fnCopyDataTyGun();

        		break;

        		// 부서 TO
        		case "cfCD_DEPT_TO":
        			var CD_COST = (arrData.length > 0) ? arrData[0]["CD_COST"] : "";
        			this.dsDetail.setColumn(rowPos, "TO_CD_COST", CD_COST);

        			this.cfCD_ACCOUNT_TO.form.fnCodeFindClear();
        			this.cfCD_ACTIVE_TO.form.fnCodeFindClear();

        			this.btnComDistEqually.set_enable(false);

        			this.gfnGridClear(this.dxGrid2);

        			this.dsDetail.setColumn(0, "AM_TOAFTERRES", 0);
        			this.dsDetail.setColumn(0, "AM_TORESERVE", 0);
        		break;

        		// 비목 FROM
        		case "cfCD_ACCOUNT":
        			if (arrData.length > 0) {}

        			this.cfCD_ACTIVE.form.fnCodeFindClear();

        			this.btnComDistEqually.set_enable(false);
        			this.gfnGridClear(this.dxGrid);

        			this.fnCopyDataTyGun();

        			this.dsDetail.setColumn(0, "AM_BUDGET", 0);
        			this.dsDetail.setColumn(0, "AM_AFTERRES", 0);
        			this.dsDetail.setColumn(0, "AM_AVAILABLE", 0);
        		break;

        		// 비목 TO
        		case "cfCD_ACCOUNT_TO":
        			this.cfCD_ACTIVE_TO.form.fnCodeFindClear();
        			this.gfnGridClear(this.dxGrid2);

        			this.dsDetail.setColumn(0, "AM_TORESERVE", 0);
        			this.dsDetail.setColumn(0, "AM_TOAFTERRES", 0);
        		break;

        		// 세목코드 FROM
        		case "cfCD_ACTIVE":
        			// 구분 변경 셋팅
        			this.fnCopyDataTyGun();

        			if (arrData.length > 0) {
        				// 예산변경관리 편성금액 조회
        				this.fnBudgetSelect("FROM");
        				//this.FormBtns.Select.click();
        			}else {
        				this.gfnGridClear(this.dxGrid);

        				this.btnComDistEqually.set_enable(false);

        				this.dsDetail.setColumn(0, "AM_BUDGET", 0);
        				this.dsDetail.setColumn(0, "AM_AFTERRES", 0);
        				this.dsDetail.setColumn(0, "AM_AVAILABLE", 0);

         				this.dsDetail.set_enableevent(false);
        				this.dsDetail.setColumn(0, "AM_DIVERT", 0);
        				this.dsDetail.set_enableevent(true);
        				/*
        				// 구분 TY_GUBUN : (1변경,2전용,3추가)
        				var tyGubun = this.dsDetail.getColumn(0, "TY_GUBUN");
        				if  (tyGubun == "1"){
        					//TO
        					this.btnComDistEqually.set_enable(false);
        					this.gfnGridClear(this.dxGrid2);
        					this.dsDetail.setColumn(0, "AM_TORESERVE", 0);
        					this.dsDetail.setColumn(0, "AM_TOAFTERRES", 0);
        				}
        				*/
        			}

        		break;

        		// 세목코드 TO
        		case "cfCD_ACTIVE_TO":
        			if (arrData.length > 0) {
        				this.gfnGridClear(this.dxGrid2);

        				// 예산변경관리 편성금액 조회
        				this.fnBudgetSelect("TO");
        			}else {
        				this.btnComDistEqually.set_enable(false);
        				this.gfnGridClear(this.dxGrid2);
        				this.dsDetail.setColumn(0, "AM_TORESERVE", 0);
        				this.dsDetail.setColumn(0, "AM_TOAFTERRES", 0);
        			}
        		break;
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_AfterEdit = function(obj,e) {

        	if (e.oldvalue != e.newvalue) {
        		var nNewValue = nexacro.toNumber(e.newvalue);
        		if ( e.newvalue < 0) {
        			this.gfnAlert("변경금액은 0보다 커야합니다.");
        			obj.setColumn(e.row, e.columnid, 0);
        			return false;
        		}
        	}

        	this.fnGridSum("GRDDATA");
        // 	if (nexacro.toNumber(e.newvalue) > nexacro.toNumber(this.dsDetail.getColumn(0, "AM_AVAILABLE"))) {
        // 		this.gfnAlert("변경해줄금액이 변경가능액보다 클 수 없습니다.");
        // 		this.dsDetail.setColumn(0, "AM_DIVERT", 0);
        // 		return;
        // 	}

        	if (this.dsDetail.getColumn(0, "FROM_CD_DEPT") == this.dsDetail.getColumn(0, "TO_CD_DEPT")
        		&& this.dsDetail.getColumn(0, "FROM_CD_ACCOUNT") == this.dsDetail.getColumn(0, "TO_CD_ACCOUNT")
        		&& this.dsDetail.getColumn(0, "FROM_CD_ACTIVE") == this.dsDetail.getColumn(0, "TO_CD_ACTIVE")) {

        		var s = this.dxGrid2.getBindCellIndex("body", "AM_JAN");
        		var e = this.dxGrid2.getBindCellIndex("body", "AM_TOT");
        		for (var i = s; i <= e; i++) {
        			var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid2, i);
        			//월별확정예산(From) 변경후금액-> 월별확정예산(To) 확정금액
        			this.dsListTo.setColumn(0, colnm, this.dsListFrom.getColumn(4, colnm));
        		}
        		this.fnGridSum("GRDTO");
        	}
        	this.gfnSetFormStatus(this, "U");
        	this.fnSetButton();
        }

        this.fnGrid_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);
        	var objDs = obj.getBindDataset();

        	// 월별확정예산(From) 변경금액
        	if (row != 3) {
        		return false;
        	}

        // 	// 마감일자
        // 	var YM_MAGAM = this.dsDetail.getColumn(0, "YM_MAGAM");
        // 	var DS_MAGAM = "AM_"+ this.dsDetail.getColumn(0, "DS_MAGAM");
        // 	var s = obj.getBindCellIndex("body", "AM_JAN");
        // 	var e = obj.getBindCellIndex("body", DS_MAGAM);
        // 	for (var i = s; i <= e; i++) {
        // 		var magamColnm = this.gfnGridGetBindColumnNameByIndex(obj, i);
        // 		if(colnm == magamColnm) return false;
        // 	}

        	var YN_DUPLICATE = this.dsDetail.getColumn(0, "YN_DUPLICATE");
        	var SEQ_DTL = this.dsDetail.getColumn(0, "SEQ_DTL");
        // 	var AP_STATUS = this.dsDetail.getColumn(0, "AP_STATUS");
        // 	var bApStatus = (AP_STATUS == "02" || AP_STATUS == "05") ? true : false;
        // 		AP_STATUS : 전자결재 상태 (A11)
        // 		00	결재전	01	임시저장	02	결재중
        // 		04	반려	05	결재완료	06	상신취소

        	// 전자결재상태 ST_APRV 공통코드 DZ - DZ_APRV
        	// 1임시저장    2결재상신    3결재중    4결재완료    5반려    6상신취소    7작성취소
        	var AP_STATUS = this.dsDetail.getColumn(0, "ST_APRV");
        	var bApStatus = (AP_STATUS == "1" || AP_STATUS == "2" || AP_STATUS == "3" || AP_STATUS == "4") ? true : false;
        	if (bApStatus == true || (YN_DUPLICATE == "Y" && !this.gfnIsNull(SEQ_DTL))) {
        		return false;
        	}
        }

        this.fnGrid2_AfterEdit = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		var nNewValue = nexacro.toNumber(e.newvalue);
        		if ( e.newvalue < 0) {
        			this.gfnAlert("변경금액은 0보다 커야합니다.");
        			obj.setColumn(e.row, e.columnid, 0);
        			return false;
        		}
        	}

        	this.btnComDistEqually.set_enable(true);
        	this.fnGridSum("GRDTO");
        	this.gfnSetFormStatus(this, "U");
        	this.fnSetButton();
        }

        this.fnGrid2_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid2, cell);
        	if (row != 1) {
        		return false;
        	}

        // 	// 마감일자
        // 	var YM_MAGAM = this.dsDetail.getColumn(0, "YM_MAGAM");
        // 	var DS_MAGAM = "AM_"+ this.dsDetail.getColumn(0, "DS_MAGAM");
        // 	var s = obj.getBindCellIndex("body", "AM_JAN");
        // 	var e = obj.getBindCellIndex("body", DS_MAGAM);
        // 	for (var i = s; i <= e; i++) {
        // 		var magamColnm = this.gfnGridGetBindColumnNameByIndex(obj, i);
        // 		if(colnm == magamColnm) return false;
        // 	}

        	var YN_DUPLICATE = this.dsDetail.getColumn(0, "YN_DUPLICATE");
        	var SEQ_DTL = this.dsDetail.getColumn(0, "SEQ_DTL");
        // 	var AP_STATUS = this.dsDetail.getColumn(0, "AP_STATUS");
        // 	var bApStatus = (AP_STATUS == "02" || AP_STATUS == "05") ? true : false;
        // 		AP_STATUS : 전자결재 상태 (A11)
        // 		00	결재전	01	임시저장	02	결재중
        // 		04	반려	05	결재완료	06	상신취소

        	// 전자결재상태 ST_APRV 공통코드 DZ - DZ_APRV
        	// 1임시저장    2결재상신    3결재중    4결재완료    5반려    6상신취소    7작성취소
        	var AP_STATUS = this.dsDetail.getColumn(0, "ST_APRV");
        	var bApStatus = (AP_STATUS == "1" || AP_STATUS == "2" || AP_STATUS == "3" || AP_STATUS == "4") ? true : false;
        	if (bApStatus == true || (YN_DUPLICATE == "Y" && !this.gfnIsNull(SEQ_DTL))) {
        		return false;
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsDetail_onvaluechanged = function(obj,e)
        {
        	trace("dsDetail_onvaluechanged->" + e.columnid + " / e.newvalue->" + e.newvalue);

        	if (e.oldvalue == e.newvalue) return;
        // 		this.gfnSetFormStatus(this);	// 폼상태 초기화
        // 		this.gfnGridClear(this.dxGrid);

        	switch(e.columnid) {
        		case "AM_DIVERT":
        	// 		if (nexacro.toNumber(e.newvalue) == 0) {
        	// 			this.gfnAlert("변경해줄 금액을 입력해 주십시요!");
        	// 			this.txtAM_DIVERT.setFocus();
        	// 			return;
        	// 		}

        	// 		if (nexacro.toNumber(e.newvalue) > nexacro.toNumber(this.dsDetail.getColumn(0, "AM_AVAILABLE"))) {
        	// 			this.gfnAlert("변경해줄금액이 변경가능액보다 클 수 없습니다.");
        	// 			this.dsDetail.set_enableevent(false);
        	// 			this.dsDetail.setColumn(0, "AM_DIVERT", 0);
        	// 			this.dsDetail.set_enableevent(true);
        	// 			return;
        	// 		}

        			var amAvailable = nexacro.toNumber(this.dsDetail.getColumn(0, "AM_AVAILABLE"));
        			var amBudget = nexacro.toNumber(this.dsDetail.getColumn(0, "AM_BUDGET"));
        			var amDivert = nexacro.toNumber(this.dsDetail.getColumn(0, "AM_DIVERT"));

        			//this.dsDetail.setColumn(0, "AM_AFTERRES", amBudget - amDivert);
        			// 변경후 확정예산 = 변경가능금액 - 변경해줄금액
        			this.dsDetail.setColumn(0, "AM_AFTERRES", amAvailable - amDivert);

        			this.btnComDistEqually2.set_enable(true);
        			this.divComDist.set_enable(true);
        			this.dsDetail.setColumn(0, "AM_MONTH", amDivert);

        	// 			this.cfCD_DEPT_TO.form.fnCodeFindClear();
        	// 			this.dsDetail.setColumn(0, "CD_COST_TO", "");
        	// 			this.cfCD_ACCOUNT_TO.form.fnCodeFindClear();
        	// 			this.cfCD_ACTIVE_TO.form.fnCodeFindClear();

        			this.btnComDistEqually.set_enable(false);
        			//this.gfnGridClear(this.dxGrid2);

        			this.dsDetail.setColumn(0, "AM_TOAFTERRES", 0);
        			this.dsDetail.setColumn(0, "AM_TORESERVE", 0);

        			// 월별확정예산(To)
        			// 구분이 변경일때
        			// YnCopyRow4Data == "N" 데이터 조회시에서 DETAIL 테이블에서 가져오고
        			// YnCopyRow4Data == "Y" 코드파인드 변경할때는 FROM 데이터 복사해주기
        			var YnCopyRow4Data = "Y" ;
        			this.fnSetBudgetTo(YnCopyRow4Data);
        		break;

        		case "TY_GUBUN":
        			// 구분 변경 셋팅
        			this.fnCopyDataTyGun();
        		break;
        	}
        	this.gfnSetFormStatus(this, "U");
        };

        this.dsDetail_cancolumnchange = function(obj,e)
        {
        	//trace("dsDetail_cancolumnchange->" + e.columnid);
        	if (e.oldvalue != e.newvalue) {
        		if (e.columnid == "TY_GUBUN") {
        			var CD_DEPT = this.dsDetail.getColumn(0, "FROM_CD_DEPT");
        			var CD_ACCOUNT = this.dsDetail.getColumn(0, "FROM_CD_ACCOUNT");
        			var CD_ACTIVE = this.dsDetail.getColumn(0, "FROM_CD_ACTIVE");

        			if(this.gfnIsNull(CD_DEPT) || this.gfnIsNull(CD_ACCOUNT) || this.gfnIsNull(CD_ACTIVE)){
        				this.gfnAlert("부서/비목코드/세목코드를 입력하세요");
        				return false;
        			}
        		}
        	}
        };

        this.divData_divDetail1_btn00_onclick = function(obj,e)
        {
        	var YR_BUDGET  = '2022'
        	var CD_DEPT    = 'A0200802'
        	var DS_DEPT = "정보전략팀"
        	var CD_COST = "52050"

        	var CD_ACCOUNT = '52050117'
        	var DS_ACCOUNT ="복리후생비(기타)"

        	var CD_ACTIVE  = '4230'
        	var DS_ACTIVE = "유지보수";
        	var DS_GUBUN = 'FROM'

        	this.dsDetail.setColumn(0, "FROM_CD_DEPT", CD_DEPT);
        	this.dsDetail.setColumn(0, "FROM_CD_COST", CD_COST);

        	this.dsDetail.setColumn(0, "FROM_CD_ACCOUNT", CD_ACCOUNT);
        	this.dsDetail.setColumn(0, "FROM_DS_ACCOUNT", DS_ACCOUNT);
        	this.dsDetail.setColumn(0, "FROM_CD_ACTIVE", CD_ACTIVE);
        	this.dsDetail.setColumn(0, "FROM_DS_ACTIVE", DS_ACTIVE);
        };

        this.fnGridSum = function(p) {

        	if (p == "GRDDATA") {

        		this.dsListFrom.set_enableevent(false);

        		//2	가용예산 (확정예산 - 실적)
        		var s = this.dxGrid.getBindCellIndex("body", "AM_JAN");
        		var e = this.dxGrid.getBindCellIndex("body", "AM_DEC");
        		for (var i = s; i <= e; i++) {
        			var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, i);
        			this.dsListFrom.setColumn(2, colnm, nexacro.toNumber(this.gfnNvl(this.dsListFrom.getColumn(0, colnm),0)) - nexacro.toNumber(this.gfnNvl(this.dsListFrom.getColumn(1, colnm),0)));
        		}

        		var row3 = [];
        		row3.push(2);
        		var sum3 = this.dsListFrom.getRowsSum(row3, "AM_JAN+AM_FEB+AM_MAR+AM_APR+AM_MAY+AM_JUN+AM_JUL+AM_AUG+AM_SEP+AM_OCT+AM_NOV+AM_DEC");
        		this.dsListFrom.setColumn(2, "AM_TOT", sum3);

        		//3	변경금액
        		var row4 = [];
        		row4.push(3);
        		var row3Sum = 0;
        		for (var i = s; i <= e; i++) {
        			var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, i);
        			row3Sum += nexacro.toNumber(this.gfnNvl(this.dsListFrom.getColumn(row4, colnm),0));
        		}
        		this.dsListFrom.setColumn(3, "AM_TOT", row3Sum);
        		// 변경해줄금액
        		this.dsDetail.setColumn(0, "AM_DIVERT", row3Sum);

        		//4	변경후금액 = (확정예산 - 변경금액)
        		for (var i = s; i <= e; i++) {
        			var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, i);
        			this.dsListFrom.setColumn(4, colnm, nexacro.toNumber(this.gfnNvl(this.dsListFrom.getColumn(0, colnm),0)) - nexacro.toNumber(this.gfnNvl(this.dsListFrom.getColumn(3, colnm),0)));
        		}

        		var row5 = [];
        		row5.push(4);
        		var sum5 = this.dsListFrom.getRowsSum(row5, "AM_JAN+AM_FEB+AM_MAR+AM_APR+AM_MAY+AM_JUN+AM_JUL+AM_AUG+AM_SEP+AM_OCT+AM_NOV+AM_DEC");
        		this.dsListFrom.setColumn(4, "AM_TOT", sum5);

        		this.dsListFrom.set_enableevent(true);

        	}
        	else if (p == "GRDTO") {
        		this.dsListTo.set_enableevent(false);

        		var s = this.dxGrid2.getBindCellIndex("body", "AM_JAN");
        		var e = this.dxGrid2.getBindCellIndex("body", "AM_DEC");

        // 		var row1 = [];
        // 		row1.push(0);
        // 		var sum1 = this.dsListTo.getRowsSum(row1, "AM_JAN+AM_FEB+AM_MAR+AM_APR+AM_MAY+AM_JUN+AM_JUL+AM_AUG+AM_SEP+AM_OCT+AM_NOV+AM_DEC");
        // 		this.dsListTo.setColumn(0, "AM_TOT", sum1);

        		var row1Sum = 0;
        		for (var i = s; i <= e; i++) {
        			var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid2, i);
        			row1Sum += nexacro.toNumber(this.gfnNvl(this.dsListTo.getColumn(1, colnm),0));
        		}
        		this.dsListTo.setColumn(1, "AM_TOT", row1Sum);

        		for (var i = s; i <= e; i++) {
        			var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid2, i);
        			this.dsListTo.setColumn(2, colnm, nexacro.toNumber(this.gfnNvl(this.dsListTo.getColumn(0, colnm),0)) + nexacro.toNumber(this.gfnNvl(this.dsListTo.getColumn(1, colnm),0)));
        		}

        		var row3 = [];
        		row3.push(2);
        		var sum3 = this.dsListTo.getRowsSum(row3, "AM_JAN+AM_FEB+AM_MAR+AM_APR+AM_MAY+AM_JUN+AM_JUL+AM_AUG+AM_SEP+AM_OCT+AM_NOV+AM_DEC");
        		this.dsListTo.setColumn(2, "AM_TOT", sum3);

        		this.dsListTo.set_enableevent(true);
        	}
        }

        // 기간계산
        this.btnComDistEqually2_onclick = function(obj,e) {
        	if (this.gfnIsNull(this.dsDetail.getColumn(0, "MM_FROM")) || this.gfnIsNull(this.dsDetail.getColumn(0, "MM_TO"))) {
        		this.gfnAlert("기간을 입력하세요.");
        		return;
        	}

        	var mmFrom = nexacro.toNumber(this.dsDetail.getColumn(0, "MM_FROM"));
        	var mmTo = nexacro.toNumber(this.dsDetail.getColumn(0, "MM_TO"));

        	if (mmFrom > mmTo) {
        		this.gfnAlert("기간을 잘못 입력하셨습니다.");
        		return;
        	}

        	if (1 > mmFrom || 12 < mmTo) {
        		this.gfnAlert("기간을 잘못 입력하셨습니다.");
        		return;
        	}

        	var amDivert = nexacro.toNumber(this.dsDetail.getColumn(0, "AM_MONTH"));

        	if (this.dsListFrom.rowcount > 0) {
        		var s = this.dxGrid.getBindCellIndex("body", "AM_JAN");
        		var e = this.dxGrid.getBindCellIndex("body", "AM_DEC");
        		for (var i = s; i <= e; i++) {
        			var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, i);
        			if (i >= mmFrom + 1 && i <= mmTo + 1) {
        				this.dsListFrom.setColumn(3, colnm, amDivert);	// 변경금액

        				if (nexacro.toNumber(this.dsListFrom.getColumn(1, colnm)) < 0) {
        					this.gfnAlert("월별확정금액은 0보다 커야합니다.");
        					return;
        				}
        				//forecolor red?
        			}
        			else {
        				this.dsListFrom.setColumn(3, colnm, 0);
        				//forecolor black?
        			}
        		}

        		this.fnGridSum("GRDDATA");
        	}
        };

        // FROM예산 복사
        this.btnCopyFromBudget_onclick = function(obj,e)
        {
        	if (nexacro.toNumber(this.dsDetail.getColumn(0, "AM_DIVERT")) == 0) {
        		this.fnVaidateCallback = function() {
        			this.txtAM_DIVERT.setFocus();
        		}
        		this.gfnAlert("변경해줄 금액을 입력해 주십시요!", "fnVaidateCallback");
        		return;
        	}

        	if (this.gfnIsNull(this.dsDetail.getColumn(0, "TO_CD_COST"))) {
        		this.gfnAlert("변경예산항목 세목코드를 먼저 입력하세요.");
        		return false;
        	}

        	if (this.dsListTo.rowcount > 0) {
        		var s = this.dxGrid2.getBindCellIndex("body", "AM_JAN");
        		var e = this.dxGrid2.getBindCellIndex("body", "AM_DEC");
        		for (var i = s; i <= e; i++) {
        			var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid2, i);
        			this.dsListTo.setColumn(1, colnm, nexacro.toNumber(this.gfnNvl(this.dsListFrom.getColumn(3, colnm),0)));
        		}
        		this.fnGridSum("GRDTO");
        	}
        };

        // 구분 변경 셋팅
        this.fnCopyDataTyGun = function(){
        	var tyGubun = this.dsDetail.getColumn(0, "TY_GUBUN");	// 구분 TY_GUBUN : (1변경,2전용,3추가)

        	//trace("[fnCopyDataTyGun] 구분 변경 셋팅 tyGubun->" + tyGubun);
        	var CD_DEPT = this.dsDetail.getColumn(0, "FROM_CD_DEPT");
        	var DS_DEPT = this.dsDetail.getColumn(0, "FROM_DS_DEPT");
        	var CD_COST = this.dsDetail.getColumn(0, "FROM_CD_COST");
        	var CD_ACCOUNT = this.dsDetail.getColumn(0, "FROM_CD_ACCOUNT");
        	var DS_ACCOUNT = this.dsDetail.getColumn(0, "FROM_DS_ACCOUNT");
        	var CD_ACTIVE = this.dsDetail.getColumn(0, "FROM_CD_ACTIVE");
        	var DS_ACTIVE = this.dsDetail.getColumn(0, "FROM_DS_ACTIVE");

        	if(tyGubun == "1"){	// 변경
        		this.dsDetail.setColumn(0, "TO_CD_DEPT", CD_DEPT);
        		this.dsDetail.setColumn(0, "TO_DS_DEPT", DS_DEPT);
        		this.dsDetail.setColumn(0, "TO_CD_COST", CD_COST);
        		this.dsDetail.setColumn(0, "TO_CD_ACCOUNT", CD_ACCOUNT);
        		this.dsDetail.setColumn(0, "TO_DS_ACCOUNT", DS_ACCOUNT);
        		this.dsDetail.setColumn(0, "TO_CD_ACTIVE", CD_ACTIVE);
        		this.dsDetail.setColumn(0, "TO_DS_ACTIVE", DS_ACTIVE);
        	}else{
        		// 구분 TY_GUBUN : (1변경,2전용,3추가)
        		this.cfCD_ACCOUNT_TO.form.fnCodeFindClear();
        		this.cfCD_ACTIVE_TO.form.fnCodeFindClear();
        	}

        	if(this.gfnIsNull(CD_ACTIVE) || tyGubun == "2"){
        		this.gfnGridClear(this.dxGrid2);
        		this.dsDetail.setColumn(0, "AM_TORESERVE", 0);
        		this.dsDetail.setColumn(0, "AM_TOAFTERRES", 0);
        	}

        	var bEnable = (tyGubun == "1")? false : true;
        	this.cfCD_DEPT_TO.set_enable(bEnable);
        	this.cfCD_ACCOUNT_TO.set_enable(bEnable);
        	this.cfCD_ACTIVE_TO.set_enable(bEnable);
        }

        // 파일첨부
        this.divData_divDetail2_btnFile_onclick = function(obj,e)
        {
        	var objDs = this.dsDetail;
        	var sCdDir = "";

        	// 최초 작성시엔 SEQ가 없기 때문에 저장 후에 파일 첨부를 진행하여야 함.
        	// CD_DIR에 넣어줄 값이 없기에 저장 후 진행!
        	var SEQ_MST = this.gfnNvl(this.dsSearch.getColumn(0, "SEQ_MST"), this.dsDetail.getColumn(0, "SEQ_MST"));
        	var SEQ_DTL = this.gfnNvl(this.dsSearch.getColumn(0, "SEQ_DTL"), this.dsDetail.getColumn(0, "SEQ_DTL"));
        //	var AP_STATUS = this.dsDetail.getColumn(0, "AP_STATUS");
        //	var readOnlyFlag = (AP_STATUS == "02" || AP_STATUS == "05") ? true : false;
        // 	AP_STATUS : 전자결재 상태 (A11)
        // 	00	결재전	01	임시저장	02	결재중
        // 	04	반려	05	결재완료	06	상신취소
        	// 전자결재상태 ST_APRV 공통코드 DZ - DZ_APRV
        	// 1임시저장    2결재상신    3결재중    4결재완료    5반려    6상신취소    7작성취소
        	var AP_STATUS = this.dsDetail.getColumn(0, "ST_APRV");
        	var readOnlyFlag = (AP_STATUS == "1" || AP_STATUS == "2" || AP_STATUS == "3" || AP_STATUS == "4") ? true : false;
        	if(this.gfnIsNull(SEQ_MST) || this.gfnIsNull(SEQ_DTL)){
        	//if(this.gfnGetFlag(objDs, e.row) == "I"){
        		this.gfnAlert("저장 후 파일첨부 진행.");
        		return false;
        	}

        	var fileManager = {};
        	fileManager.CD_GUBUN = "DI01";
        	fileManager.CD_DIR = [SEQ_MST, SEQ_DTL];
        	fileManager.IS_READONLY = readOnlyFlag;

        	this.gfnFileManager(fileManager, "fnFileCallback");
        };

        this.fnFileCallback = function(strID, val) {
        	var objDs = this.dsDetail;
        	// val.IsChange : 변경여부, val.Cnt : 파일개수

        	// 파일개수를 다시 셋팅
        	if(val.Cnt == 0) {
        		this.btnFile.set_text("첨부");
        	}else{
        		this.btnFile.set_text("첨부(" + val.Cnt + ")");
        	}
        };

        // 마감월 처리
        this.fnSetMagamMonthReadOnly = function(objGrid) {
        	var YM_MAGAM = this.dsDetail.getColumn(0, "YM_MAGAM");
        	var DS_MAGAM = "AM_"+ this.dsDetail.getColumn(0, "DS_MAGAM");
        	var s = objGrid.getBindCellIndex("body", "AM_JAN");
        	var e = objGrid.getBindCellIndex("body", DS_MAGAM);
        	for (var i = s; i <= e; i++) {
        		var magamColnm = this.gfnGridGetBindColumnNameByIndex(objGrid, i);

        // 		var sGetProperty = objGrid.getCellProperty( "body", i, "cssclass" );
        // 		var sSetProperty = sGetProperty.replace(": '')", ": 'BACK_ReadOnly')");
        // 		objGrid.setCellProperty( "body", i , "cssclass" , sSetProperty );

        		//this.gfnGridColumnColor(objGrid, magamColnm, "BACK_ReadOnly", true);
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.divDetail1.form.btn00.addEventHandler("onclick",this.divData_divDetail1_btn00_onclick,this);
            this.divData.form.divDetail1.form.txtDS_REM.addEventHandler("onchanged",this.divDetail1_txtDS_REM_onchanged,this);
            this.divData.form.divDetail1.form.txtAM_AVAILABLE.addEventHandler("onchanged",this.divData_divDetail1_txtAM_AVAILABLE_onchanged,this);
            this.divData.form.divDetail1.form.divComDist.form.btnComDistEqually2.addEventHandler("onclick",this.btnComDistEqually2_onclick,this);
            this.divData.form.divDetail2.form.txtAM_TORESERVE.addEventHandler("onchanged",this.divData_divDetail2_txtAM_TORESERVE_onchanged,this);
            this.divData.form.divDetail2.form.btnCopyFromBudget.addEventHandler("onclick",this.btnCopyFromBudget_onclick,this);
            this.divData.form.divDetail2.form.btnComDistEqually.addEventHandler("onclick",this.btnComDistEqually_onclick,this);
            this.divData.form.divDetail2.form.btnFile.addEventHandler("onclick",this.divData_divDetail2_btnFile_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsDetail.addEventHandler("onvaluechanged",this.dsDetail_onvaluechanged,this);
        };
        this.loadIncludeScript("DIQ_BUDGETTOBUDGET.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
