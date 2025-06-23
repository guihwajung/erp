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
            this.set_titletext("교육신청서");
            this.getSetter("maxwidth").set("860");
            this.getSetter("maxheight").set("890");
            if (Form == this.constructor)
            {
                this._setFormPosition(770,830);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_EDU\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REPORT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REPORT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_EDU\" type=\"STRING\" size=\"256\"/><Column id=\"CD_EDUSUB\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EDUSUB\" type=\"STRING\" size=\"256\"/><Column id=\"FR_EDUCATION\" type=\"STRING\" size=\"256\"/><Column id=\"TO_EDUCATION\" type=\"STRING\" size=\"256\"/><Column id=\"TT_EDUCATION\" type=\"FLOAT\" size=\"256\"/><Column id=\"CD_EDU_INOUT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_EDU_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EDU_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_EDU_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EDU_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EDUCATION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EDU_ORGAN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EDU_PLACE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DOCUMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EFFECT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LANGUAGE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_EXAM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EXAM\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICENSE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LICENSE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_LICENSE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ORGAN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_LICENSE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_EDUCATION\" type=\"FLOAT\" size=\"256\"/><Column id=\"YN_RETURN\" type=\"STRING\" size=\"256\"/><Column id=\"AM_RETURN\" type=\"FLOAT\" size=\"256\"/><Column id=\"AM_SUPPORT\" type=\"FLOAT\" size=\"256\"/><Column id=\"TY_PAY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BANK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BANK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_APRV\" type=\"int\" size=\"256\"/><Column id=\"ST_APRV\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DOC\" type=\"STRING\" size=\"256\"/><Column id=\"ID_APRV\" type=\"STRING\" size=\"256\"/><Column id=\"DT_APRV\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"YN_EDUCATION\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_BE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ISSUE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ACCOUNT\" type=\"bigdecimal\" size=\"256\"/><Column id=\"AM_VAT\" type=\"bigdecimal\" size=\"256\"/><Column id=\"CD_TRADE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DUTY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DUTY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_EMPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_APRV\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_DOC_Q\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_INIT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CURR\" type=\"STRING\" size=\"256\"/><Column id=\"AM_EXEC\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DABPR_EDU_REQ_SAVE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DABPR_EDU_REQ_DELETE</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DABPR_EDU_REQ_SELECT</Col></Row><Row><Col id=\"TARGET\">insertTarget</Col><Col id=\"SP\">DABPR_EDU_REQTARGET_INSERT</Col></Row><Row><Col id=\"TARGET\">deleteTarget</Col><Col id=\"SP\">DABPR_EDU_REQTARGET_DELETE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DABPR_EDUBASE_COMBO</Col></Row><Row><Col id=\"TARGET\">aprv_execute</Col><Col id=\"SP\">DABPR_EDU_REQ_APRV_EXCUTE</Col></Row><Row><Col id=\"SP\">DAXPR_COMMONCODE_CODEFIND</Col><Col id=\"TARGET\">combo1</Col></Row><Row><Col id=\"TARGET\">combo2</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">select_Limit</Col><Col id=\"SP\">DABPR_EDU_REQ_APRV_VALIDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequired", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">CD_CORP</Col><Col id=\"DS_FIELD\">법인</Col></Row><Row><Col id=\"CD_FIELD\">CD_DEPT</Col><Col id=\"DS_FIELD\">부서</Col></Row><Row><Col id=\"CD_FIELD\">ID_SABUN</Col><Col id=\"DS_FIELD\">사번</Col></Row><Row><Col id=\"CD_FIELD\">CD_LOAN</Col><Col id=\"DS_FIELD\">대출유형</Col></Row><Row><Col id=\"CD_FIELD\">AM_REQUEST</Col><Col id=\"DS_FIELD\">대출금액</Col></Row><Row><Col id=\"CD_FIELD\">NO_LOANREQUEST</Col><Col id=\"DS_FIELD\">상환기간</Col></Row><Row><Col id=\"CD_FIELD\">DS_REMARK</Col><Col id=\"DS_FIELD\">대출사유</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTarget", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NO_EDU\" type=\"STRING\" size=\"256\"/><Column id=\"FR_EDUCATION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REPORT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEDUSUB", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SUBCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUBCODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPAY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">계좌이체</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">무료교육</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_CURR", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLimit", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle1","0","0","359","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("교육신청서");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("divData","0","staTitle1:0",null,"745","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staBg2_01","79","87",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg","79","0",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebgT");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","79","58",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00","89","29",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_EDU_PLACE","89","116",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","89","145",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","0","0","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablelabelTE");
            obj.set_text("교육신청자 ");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_EFFECT00","0","staID_SABUN:293","135","120",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("55");
            obj.set_text("교육대상자");
            obj.set_cssclass("sta_WF_tablelabelTE");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divGrid","staDS_EFFECT00:-5","staBg:263",null,"150","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_text("div00");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfID_SABUN_TARGET","120","34","247","20",null,null,null,null,null,null,this.divData.form.divGrid.form);
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_MUITY");
            obj.getSetter("CDTextWidth").set("90");
            obj.getSetter("FitToContents").set("false");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("AutoSet").set("false");
            obj.set_visible("true");
            obj.set_tabstop("false");
            this.divData.form.divGrid.addChild(obj.name, obj);

            obj = new Static("staBg","0","30",null,"120","0",null,null,null,null,null,this.divData.form.divGrid.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebgT");
            obj.set_textAlign("right");
            this.divData.form.divGrid.addChild(obj.name, obj);

            obj = new Button("btnRemove",null,"5","60","20","5",null,null,null,null,null,this.divData.form.divGrid.form);
            obj.set_taborder("6");
            obj.set_text("삭제");
            this.divData.form.divGrid.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"5","60","20","btnRemove:5",null,null,null,null,null,this.divData.form.divGrid.form);
            obj.set_taborder("3");
            obj.set_text("추가");
            this.divData.form.divGrid.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","30",null,null,"3","0",null,null,null,null,this.divData.form.divGrid.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divGrid.addChild(obj.name, obj);

            obj = new Static("staDesc01","480","6",null,"20","btnAdd:10",null,null,null,null,null,this.divData.form.divGrid.form);
            obj.set_taborder("4");
            obj.set_text("명");
            this.divData.form.divGrid.addChild(obj.name, obj);

            obj = new Static("staCnt","420","6",null,"20","staDesc01:6",null,null,null,null,null,this.divData.form.divGrid.form);
            obj.set_taborder("7");
            obj.set_text("0");
            obj.set_textAlign("right");
            this.divData.form.divGrid.addChild(obj.name, obj);

            obj = new Static("staDesc02","396","6",null,"20","staCnt:4",null,null,null,null,null,this.divData.form.divGrid.form);
            obj.set_taborder("5");
            obj.set_text("총");
            this.divData.form.divGrid.addChild(obj.name, obj);

            obj = new Static("staBg12","79","divGrid:43",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg16_00","80","divGrid:197",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg13","79","divGrid:10",null,"34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebgT");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg14","79","divGrid:110",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebgT");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg15","79","divGrid:139",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_PAY","0","divGrid:110","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablelabelTE");
            obj.set_text("지급구분");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg16","79","divGrid:168",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_PAY","staTY_PAY:7","divGrid:115","409","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_innerdataset("dsPAY");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_direction("vertical");
            obj.set_text("계좌이체");
            obj.set_value("1");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_VENDOR","133","rdoTY_PAY:9","317","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DHX_CFALLVENDOR_CODEFIND");
            obj.getSetter("CDTextWidth").set("60");
            obj.getSetter("FitToContents").set("false");
            obj.set_taborder("24");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("AutoSet").set("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfNO_ACCOUNT","133","cfCD_VENDOR:9","145","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DFX_CFACCOUNTMATCH");
            obj.getSetter("CDTextWidth").set("120");
            obj.getSetter("FitToContents").set("false");
            obj.set_taborder("25");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("AutoSet").set("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_BANK","133","cfNO_ACCOUNT:9","316","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DFX_CFBANKCODE");
            obj.getSetter("CDTextWidth").set("60");
            obj.getSetter("FitToContents").set("false");
            obj.set_taborder("51");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("AutoSet").set("false");
            obj.set_enable("false");
            obj.set_tabstop("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01_00","20","divGrid:221",null,"32","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_text("※신규거래처 등록이 필요한 업체인 경우 거래처 등록과 계좌등록 결재완료 후 교육신청하시기 바랍니다. ");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg17","79","sta01_00:0",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebgT");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_EDUCATION","0","divGrid:10","130","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablelabelTE");
            obj.set_text("교육비용(통화)/\r\n(발생통화금액)");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg10","89","staBg:144",null,"60","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg11","89","staBg:203",null,"60","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_EDU_PLACE","0","staID_SABUN:115","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("교육장소");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_DOCUMENT","0","staID_SABUN:144","130","60",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("교육내용");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_EFFECT","0","staID_SABUN:203","130","60",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("기대효과");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_EDUCATION","0","staID_SABUN:28","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("교육 과정명");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfID_SABUN","staID_SABUN:3","5","247","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("CDTextWidth").set("90");
            obj.getSetter("FitToContents").set("false");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("AutoSet").set("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDesc01","cfID_SABUN:30","120","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("hr");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staFR_EDUCATION","0","staID_SABUN:86","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("교육기간/시간");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_EDUCATION","staDS_EDUCATION:4","cfID_SABUN:38",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_EDU_PLACE","staDS_EDU_PLACE:4","cfID_SABUN:126",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtDS_DOCUMENT","staDS_DOCUMENT:4","cfID_SABUN:154",null,"50","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtDS_EFFECT","staDS_EFFECT:4","cfID_SABUN:213",null,"50","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDesc02","240","cfID_SABUN:95","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_text("~");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_EXEC","staAM_EDUCATION:78","divGrid:18","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_format("#,##0.##");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDesc13_01","mskAM_EXEC:2","divGrid:17","140","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_text("(VAT 포함)");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_RETURN","0","staAM_EDUCATION:-1","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablelabelE");
            obj.set_text("고용보험환급여부");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_RETURN","staYN_RETURN:7","mskAM_EXEC:13","143","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divData_form_rdoYN_RETURN_innerdataset = new nexacro.NormalDataset("divData_form_rdoYN_RETURN_innerdataset", obj);
            divData_form_rdoYN_RETURN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">환급</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미환급</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoYN_RETURN_innerdataset);
            obj.set_text("미환급");
            obj.set_value("N");
            obj.set_index("1");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","20","divGrid:70",null,"42","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_text("※ 환급여부는 교육기관에 확인 후 작성해 주시기 바랍니다.  \r\n※ 오프라인 어학교육_강사초빙의 경우 총 수강기간의 합계금액 입력하시기 바랍니다.");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","0","sta00:27","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablelabelE");
            obj.set_text("입금처");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_ACCOUNT","0","staCD_VENDOR:-1","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablelabelE");
            obj.set_text("계좌번호");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_ACCOUNT","staNO_ACCOUNT:308","cfCD_VENDOR:4","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablelabelE");
            obj.set_text("입금처명");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_ACCOUNT","staDS_ACCOUNT:3","staBg15:4","196","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_maxlength("25");
            obj.set_readonly("false");
            obj.set_enable("false");
            obj.set_tabstop("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staFile","0","staNO_ACCOUNT:55","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablelabelTE");
            obj.set_text("교육관련문서첨부");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staFileUpload","staFile:8","divGrid:258","146","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_text("파일수 :  0 개");
            obj.set_cssclass("sta_WF_notice");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnATTACH","staFileUpload:18","sta01_00:5","73","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_text("파일첨부");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","btnATTACH:8","divGrid:259",null,"18","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            obj.set_text("※상세 강의계획, 강사이력, 교육브로셔, 커리큘럼 등 첨부");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_SUPPORT","mskAM_EXEC:212","divGrid:17","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj.set_enable("false");
            obj.set_readonly("false");
            obj.set_visible("true");
            obj.set_format("#,##0.##");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_BANK","0","staNO_ACCOUNT:-1","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_tablelabelE");
            obj.set_text("입금은행");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclFR_EDUCATION","staFR_EDUCATION:4","cfID_SABUN:96","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_EDUCATION00","0","29","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("53");
            obj.set_text("교육 구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclTO_EDUCATION","253","cfID_SABUN:96","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskTT_EDUCATION","358","121","47","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_format("#,##0.#");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboCD_EDUSUB","134","35","276","21",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("56");
            obj.set_innerdataset("dsEDUSUB");
            obj.set_codecolumn("CD_SUBCODE");
            obj.set_datacolumn("DS_SUBCODE");
            obj.set_enable("false");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_EDUCATION01","0","87","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("57");
            obj.set_text("교육 기관명");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_EDU_ORGAN","134","92",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboCD_CURR","133","461","73","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("59");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsCD_CURR");
            obj.set_text("");
            obj.set_value("KRW");
            obj.set_index("-1");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_EDUCATION00","staAM_EDUCATION:308","453","130","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_tablelabelTE");
            obj.set_text("교육비지원금액");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns","164",null,"310","26",null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btnCANCEL",null,"0","73","26","11",null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("27");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnSAVE","140","0","79","26",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("임시저장");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnVendor",null,"7","90","24","100",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("거래처등록");
            this.addChild(obj.name, obj);

            obj = new Button("btnAPRV00",null,"7","90","24","btnVendor:5",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("결재문서조회");
            this.addChild(obj.name, obj);

            obj = new Button("btnAPRV",null,"7","90","24","btnAPRV00:5",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("결재상신");
            this.addChild(obj.name, obj);

            obj = new Button("btnAccount",null,"7","90","24","5",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("계좌등록");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item4","divData.form.cfID_SABUN.form.CDTextBox","value","dsList","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.cfID_SABUN.form.DSTextBox","value","dsList","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.tclFR_EDUCATION","value","dsList","FR_EDUCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.tclTO_EDUCATION","value","dsList","TO_EDUCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.cfCD_VENDOR.form.CDTextBox","value","dsList","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.cfCD_VENDOR.form.DSTextBox","value","dsList","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.cfNO_ACCOUNT.form.CDTextBox","value","dsList","NO_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.cfNO_ACCOUNT.form.DSTextBox","value","dsList","DS_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.txtDS_ACCOUNT","value","dsList","DS_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.cfCD_BANK.form.CDTextBox","value","dsList","CD_BANK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.cfCD_BANK.form.DSTextBox","value","dsList","DS_BANK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.txtDS_EDUCATION","value","dsList","DS_EDUCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.txtDS_EDU_PLACE","value","dsList","DS_EDU_PLACE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.txtDS_DOCUMENT","value","dsList","DS_DOCUMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.txtDS_EFFECT","value","dsList","DS_EFFECT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.mskAM_EXEC","value","dsList","AM_EXEC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.mskAM_SUPPORT","value","dsList","AM_SUPPORT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.rdoYN_RETURN","value","dsList","YN_RETURN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.rdoTY_PAY","value","dsList","TY_PAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.mskTT_EDUCATION","value","dsList","TT_EDUCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.cboCD_EDUSUB","value","dsList","CD_EDUSUB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.txtDS_EDU_ORGAN","value","dsList","DS_EDU_ORGAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.cboCD_CURR","value","dsList","CD_CURR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_EDU_REQA.xfdl", function() {
        this.objApp = this.gfnGetApplication();


        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();
        	this.fnSetCombo();
        	this.fnSetInit();

        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        };

        //컨트롤 활성화 처리
        this.fnSetEnable = function ()
        {
        	this.cfID_SABUN.set_enable(false);
        	var stAprv = this.dsList.getColumn(0, "ST_APRV");

        	if (stAprv == "1" || stAprv == "2" || stAprv == "3" || stAprv == "4")
        	{
        		this.btnSAVE.set_enable(false);
        		this.btnVendor.set_enable(false);
        		this.btnAccount.set_enable(false);
        		this.btnAPRV.set_enable(false);
        		this.btnCANCEL.set_text("취소");
        		this.gfnSetAllEnable(this.divData , false);

        	} else if(this.dsList.getColumn(0, "TY_WRK") == "I" || this.gfnIsNull(this.dsList.getColumn(0, "NO_EDU"))) {
        		this.btnSAVE.set_enable(true);
        		this.btnVendor.set_enable(true);
        		this.btnAccount.set_enable(true);
        		this.btnAPRV.set_enable(true);
        		this.btnCANCEL.set_text("취소");
        		this.gfnSetAllEnable(this.divData , true);

        		if (this.dsList.getColumn(0, "TY_PAY") == 1 )
        		{
        			this.staCD_VENDOR.set_cssclass("sta_WF_tablelabelE");
        			this.staNO_ACCOUNT.set_cssclass("sta_WF_tablelabelE");
        			this.staDS_ACCOUNT.set_cssclass("sta_WF_tablelabelE");
        			this.staCD_BANK.set_cssclass("sta_WF_tablelabelE");
        			this.cfCD_VENDOR.set_enable(true);
        			this.cfNO_ACCOUNT.set_enable(true);
        			this.txtDS_ACCOUNT.set_enable(false);
        		} else {
        			this.staCD_VENDOR.set_cssclass("sta_WF_tablelabel");
        			this.staNO_ACCOUNT.set_cssclass("sta_WF_tablelabel");
        			this.staDS_ACCOUNT.set_cssclass("sta_WF_tablelabel");
        			this.staCD_BANK.set_cssclass("sta_WF_tablelabel");
        			this.cfCD_VENDOR.set_enable(false);
        			this.cfNO_ACCOUNT.set_enable(false);
        			this.txtDS_ACCOUNT.set_enable(false);
        		}

        	} else {
        		this.btnSAVE.set_enable(true);
        		this.btnVendor.set_enable(true);
        		this.btnAccount.set_enable(true);
        		this.btnAPRV.set_enable(true);
        		this.btnCANCEL.set_text("삭제");

        		this.gfnSetAllEnable(this.divData , true);

        		if (this.dsList.getColumn(0, "TY_PAY") == 1 )
        		{
        			this.staCD_VENDOR.set_cssclass("sta_WF_tablelabelE");
        			this.staNO_ACCOUNT.set_cssclass("sta_WF_tablelabelE");
        			this.staDS_ACCOUNT.set_cssclass("sta_WF_tablelabelE");
        			this.staCD_BANK.set_cssclass("sta_WF_tablelabelE");
        			this.cfCD_VENDOR.set_enable(true);
        			this.cfNO_ACCOUNT.set_enable(true);
        			this.txtDS_ACCOUNT.set_enable(false);
        		} else {
        			this.staCD_VENDOR.set_cssclass("sta_WF_tablelabel");
        			this.staNO_ACCOUNT.set_cssclass("sta_WF_tablelabel");
        			this.staDS_ACCOUNT.set_cssclass("sta_WF_tablelabel");
        			this.staCD_BANK.set_cssclass("sta_WF_tablelabel");
        			this.cfCD_VENDOR.set_enable(false);
        			this.cfNO_ACCOUNT.set_enable(false);
        			this.txtDS_ACCOUNT.set_enable(false);
        		}

        	}
        	if (this.dsList.getColumn(0, "AM_LIMIT") > 0 )
        	{
        		this.cboCD_CURR.set_enable(false);
        	}
        	this.btnATTACH.set_enable(true);
        	this.mskAM_SUPPORT.set_enable(false);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.cfID_SABUN    = this.divData.form.cfID_SABUN;
        	this.txtDS_EDUCATION = this.divData.form.txtDS_EDUCATION;
        	this.tclFR_EDUCATION = this.divData.form.tclFR_EDUCATION;
        	this.tclTO_EDUCATION = this.divData.form.tclTO_EDUCATION;
        	this.txtTT_EDUCATION = this.divData.form.txtTT_EDUCATION;
        	this.txtDS_EDU_PLACE = this.divData.form.txtDS_EDU_PLACE;
        	this.txtDS_DOCUMENT = this.divData.form.txtDS_DOCUMENT;
        	this.txtDS_EFFECT 	= this.divData.form.txtDS_EFFECT;
        	this.cboCD_EDUSUB 	= this.divData.form.cboCD_EDUSUB;

        	this.cboCD_CURR		= this.divData.form.cboCD_CURR;
        	this.mskAM_EDUCATION= this.divData.form.mskAM_EDUCATION;
        	this.mskAM_SUPPORT 	= this.divData.form.mskAM_SUPPORT;
        	this.rdoYN_RETURN 	= this.divData.form.rdoYN_RETURN;
        	this.rdoTY_PAY		= this.divData.form.rdoTY_PAY;
        	this.cfCD_VENDOR 	= this.divData.form.cfCD_VENDOR;
        	this.cfNO_ACCOUNT 	= this.divData.form.cfNO_ACCOUNT;
        	this.txtDS_ACCOUNT 	= this.divData.form.txtDS_ACCOUNT;
        	this.cfCD_BANK 		= this.divData.form.cfCD_BANK;
        	this.staCD_VENDOR 	= this.divData.form.staCD_VENDOR;
        	this.staNO_ACCOUNT 	= this.divData.form.staNO_ACCOUNT;
        	this.staDS_ACCOUNT 	= this.divData.form.staDS_ACCOUNT;
        	this.staCD_BANK 	= this.divData.form.staCD_BANK;

        	this.cfID_SABUN_TARGET = this.divData.form.divGrid.form.cfID_SABUN_TARGET;
        	this.staCnt 		= this.divData.form.divGrid.form.staCnt;

        	this.staFileUpload = this.divData.form.staFileUpload;

        	this.btnAdd        = this.divData.form.divGrid.form.btnAdd;
        	this.btnRemove     = this.divData.form.divGrid.form.btnRemove;
        	this.btnATTACH     = this.divData.form.btnATTACH;
        	this.btnSAVE       = this.divBtns.form.btnSAVE;
        	this.btnCANCEL     = this.divBtns.form.btnCANCEL;

        	this.FileManager = {};

        	this.dxGrid = this.divData.form.divGrid.form.objGrid;

        	this.FileManager.CD_GUBUN = "DAB4";
        	this.FileManager.IS_READONLY = false;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//코드파인드

        	this.gfnGridInit(this.dxGrid, this.dsTarget, "DA", "DAB_EDUTARGET");
        	this.dxGrid.BeforeUserDataSetParam = "fnGridBeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged     = "fnGrid_AfterCDTextChanged";
        	this.dxGrid.setFormatRowProperty(0, "size", 25);
        	this.dxGrid.setFormatRowProperty(1, "size", 23);

        	this.cfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfID_SABUN.AfterCDTextChanged     = "fnAfterCDTextChanged";
        	this.cfCD_VENDOR.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";
        	this.cfCD_VENDOR.AfterCDTextChanged      = "fnAfterCDTextChanged";
        	this.cfNO_ACCOUNT.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";
        	this.cfNO_ACCOUNT.AfterCDTextChanged      = "fnAfterCDTextChanged";

        	this.cfID_SABUN_TARGET.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfID_SABUN_TARGET.AfterCDTextChanged     = "fnAfterCDTextChanged";
        };

        // 부모창에서 받아온것 셋팅
        this.fnSetInit = function() {

        	this.cfID_SABUN.form.set_readonly(true);
        	var frame = this.getOwnerFrame();
        	if(frame.GR_SEARCH =="1"){
        		this.cfID_SABUN.form.set_readonly(false);
        	}

        	this.dsSearch.setColumn(0, "CD_CORP", frame.CD_CORP);
        	this.dsSearch.setColumn(0, "NO_ID", frame.NO_ID);
        	this.dsSearch.setColumn(0, "NO_EDU", frame.NO_EDU);
        	this.dsSearch.setColumn(0, "FR_EDUCATION", frame.FR_EDUCATION);
        	this.dsSearch.setColumn(0, "CD_REPORT", frame.CD_REPORT);
        	this.fnSelect();

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("NO_EDU", "string");
        	this.dsSelect.addColumn("NO_ID", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("FR_EDUCATION", "string");
        	this.dsSelect.addColumn("CD_REPORT", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("TY_AUTH", "string");
        	this.dsSelect.addColumn("GR_DEPT", "string");
        	this.dsSelect.addColumn("ID_USER", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("NO_EDU", "string");
        	this.dsSave.addColumn("NO_ID", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("CD_REPORT", "string");
        	this.dsSave.addColumn("CD_EDU", "string");
        	this.dsSave.addColumn("CD_EDUSUB", "string");
        	this.dsSave.addColumn("FR_EDUCATION", "string");
        	this.dsSave.addColumn("TO_EDUCATION", "string");
        	this.dsSave.addColumn("TT_EDUCATION", "bigint");
        	this.dsSave.addColumn("CD_EDU_INOUT", "string");
        	this.dsSave.addColumn("CD_EDU_TYPE", "string");
        	this.dsSave.addColumn("CD_EDU_GUBUN", "string");
        	this.dsSave.addColumn("DS_EDUCATION", "string");
        	this.dsSave.addColumn("DS_EDU_ORGAN", "string");
        	this.dsSave.addColumn("DS_EDU_PLACE", "string");
        	this.dsSave.addColumn("DS_DOCUMENT", "string");
        	this.dsSave.addColumn("DS_EFFECT", "string");
        	this.dsSave.addColumn("DS_RESULT", "string");
        	this.dsSave.addColumn("CD_LANGUAGE", "string");
        	this.dsSave.addColumn("CD_EXAM", "string");
        	this.dsSave.addColumn("NO_TOTAL", "string");
        	this.dsSave.addColumn("DS_LEVEL", "string");
        	this.dsSave.addColumn("CD_LICENSE", "string");
        	this.dsSave.addColumn("NO_LICENSE", "string");
        	this.dsSave.addColumn("DS_LICENSE_ORGAN", "string");
        	this.dsSave.addColumn("DT_LICENSE", "string");
        	this.dsSave.addColumn("AM_EDUCATION", "bigint");
        	this.dsSave.addColumn("YN_RETURN", "string");
        	this.dsSave.addColumn("AM_RETURN", "bigint");
        	this.dsSave.addColumn("AM_SUPPORT", "bigint");
        	this.dsSave.addColumn("TY_PAY", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("CD_BANK", "string");
        	this.dsSave.addColumn("NO_ACCOUNT", "string");
        	this.dsSave.addColumn("DS_ACCOUNT", "string");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("YN_EDUCATION", "string");
        	this.dsSave.addColumn("DT_ACCOUNT", "string");
        	this.dsSave.addColumn("CD_CURR", "string");
        	this.dsSave.addColumn("AM_EXEC", "bigint");
        	this.dsSave.addColumn("ID_USER", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("NO_EDU", "string");
        	this.dsDelete.addColumn("NO_ID", "string");
        	this.dsDelete.addColumn("CD_CORP", "string");
        	this.dsDelete.addColumn("ID_USER", "string");

        	this.dsInsertTarget = new Dataset();
        	this.dsInsertTarget.addColumn("NO_EDU", "string");
        	this.dsInsertTarget.addColumn("NO_ID", "string");
        	this.dsInsertTarget.addColumn("CD_CORP", "string");
        	this.dsInsertTarget.addColumn("CD_REPORT", "string");
        	this.dsInsertTarget.addColumn("CD_EDU", "string");
        	this.dsInsertTarget.addColumn("CD_EDUSUB", "string");
        	this.dsInsertTarget.addColumn("FR_EDUCATION", "string");
        	this.dsInsertTarget.addColumn("TO_EDUCATION", "string");
        	this.dsInsertTarget.addColumn("CD_LICENSE", "string");
        	this.dsInsertTarget.addColumn("DT_LICENSE", "string");
        	this.dsInsertTarget.addColumn("AM_EDUCATION", "bigint");
        	this.dsInsertTarget.addColumn("YN_EDUCATION", "string");
        	this.dsInsertTarget.addColumn("ID_PERSON", "bigint");
        	this.dsInsertTarget.addColumn("ID_SABUN", "string");
        	this.dsInsertTarget.addColumn("CD_DEPT", "string");
        	this.dsInsertTarget.addColumn("CD_POSITION", "string");
        	this.dsInsertTarget.addColumn("CD_DUTY", "string");
        	this.dsInsertTarget.addColumn("ID_USER", "string");

        	this.dsDeleteTarget = new Dataset();
        	this.dsDeleteTarget.addColumn("NO_EDU", "string");
        	this.dsDeleteTarget.addColumn("NO_ID", "string");
        	this.dsDeleteTarget.addColumn("CD_CORP", "string");
        	this.dsDeleteTarget.addColumn("ID_PERSON", "bigint");
        	this.dsDeleteTarget.addColumn("ID_SABUN", "string");
        	this.dsDeleteTarget.addColumn("ID_USER", "string");

        	// 결재
        	this.dsApproval = new Dataset();
        	this.dsApproval.addColumn("TY_WRK", "string");
        	this.dsApproval.addColumn("CD_CORP", "string");
        	this.dsApproval.addColumn("NO_EDU", "string");

        	this.dsApproval.addColumn("ID_APRV", "string");
        	this.dsApproval.addColumn("NO_APRV", "int");


        	// 지원한도 체크

        	this.dsSelectAprvLimit = new Dataset();
        	this.dsSelectAprvLimit.addColumn("NO_EDU", "string");
        	this.dsSelectAprvLimit.addColumn("CD_CORP", "string");
        	this.dsSelectAprvLimit.addColumn("NO_ID", "string");

        };

        /************************************************************************
         *  이벤트
         ************************************************************************/

        this.fnSelect = function()
        {
        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "NO_EDU", this.dsSearch.getColumn(0, "NO_EDU"));
        	this.dsSelect.setColumn(0, "NO_ID", this.dsSearch.getColumn(0, "NO_ID"));
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "FR_EDUCATION", this.dsSearch.getColumn(0, "FR_EDUCATION"));
        	this.dsSelect.setColumn(0, "CD_REPORT", this.dsSearch.getColumn(0, "CD_REPORT"));
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "TY_AUTH", this.FormInfo.TY_AUTH);
        	this.dsSelect.setColumn(0, "GR_DEPT", this.AuthClient.CD_DEPT);
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	//trace(" dsSelect=>" + this.dsSelect.saveXML());
        	var strSvcId    = "select";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0 dsTarget=select1";
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

        this.fnSave = function ()
        {
        	//if(!this.gfnDataValidate(this.dsList,this.dsRequired)) return;
        	if(!this.fnSaveValidate()) return;
        	this.dxGrid.updateToDataset();

        	this.dsSave.clearData();
        	this.dsDelete.clearData();
        	this.dsInsertTarget.clearData();
        	this.dsDeleteTarget.clearData();

        	this.fnSetSupport();

        	var flag = this.gfnGetFormStatus(this);
        	//trace("fnSave  flag=>" + flag);
        	switch(flag) {
        	case "I":
        	case "U":
        		var nrow = this.dsSave.addRow();
        		this.dsSave.setColumn(nrow, "NO_EDU", this.dsList.getColumn(0, "NO_EDU"));
        		this.dsSave.setColumn(nrow, "NO_ID", this.dsList.getColumn(0, "NO_ID"));
        		this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        		this.dsSave.setColumn(nrow, "CD_REPORT", this.dsList.getColumn(0, "CD_REPORT"));
        		this.dsSave.setColumn(nrow, "CD_EDU", this.dsList.getColumn(0, "CD_EDU"));
        		this.dsSave.setColumn(nrow, "CD_EDUSUB", this.dsList.getColumn(0, "CD_EDUSUB"));
        		this.dsSave.setColumn(nrow, "FR_EDUCATION", this.dsList.getColumn(0, "FR_EDUCATION"));
        		this.dsSave.setColumn(nrow, "TO_EDUCATION", this.dsList.getColumn(0, "TO_EDUCATION"));
        		this.dsSave.setColumn(nrow, "TT_EDUCATION", this.dsList.getColumn(0, "TT_EDUCATION"));
        		this.dsSave.setColumn(nrow, "CD_EDU_INOUT", this.dsList.getColumn(0, "CD_EDU_INOUT"));
        		this.dsSave.setColumn(nrow, "CD_EDU_TYPE", this.dsList.getColumn(0, "CD_EDU_TYPE"));
        		this.dsSave.setColumn(nrow, "CD_EDU_GUBUN", this.dsList.getColumn(0, "CD_EDU_GUBUN"));
        		this.dsSave.setColumn(nrow, "DS_EDUCATION", this.dsList.getColumn(0, "DS_EDUCATION"));
        		this.dsSave.setColumn(nrow, "DS_EDU_ORGAN", this.dsList.getColumn(0, "DS_EDU_ORGAN"));
        		this.dsSave.setColumn(nrow, "DS_EDU_PLACE", this.dsList.getColumn(0, "DS_EDU_PLACE"));
        		this.dsSave.setColumn(nrow, "DS_DOCUMENT", this.dsList.getColumn(0, "DS_DOCUMENT"));
        		this.dsSave.setColumn(nrow, "DS_EFFECT", this.dsList.getColumn(0, "DS_EFFECT"));
        		this.dsSave.setColumn(nrow, "DS_RESULT", this.dsList.getColumn(0, "DS_RESULT"));
        		this.dsSave.setColumn(nrow, "CD_LANGUAGE", this.dsList.getColumn(0, "CD_LANGUAGE"));
        		this.dsSave.setColumn(nrow, "CD_EXAM", this.dsList.getColumn(0, "CD_EXAM"));
        		this.dsSave.setColumn(nrow, "NO_TOTAL", this.dsList.getColumn(0, "NO_TOTAL"));
        		this.dsSave.setColumn(nrow, "DS_LEVEL", this.dsList.getColumn(0, "DS_LEVEL"));
        		this.dsSave.setColumn(nrow, "CD_LICENSE", this.dsList.getColumn(0, "CD_LICENSE"));
        		this.dsSave.setColumn(nrow, "NO_LICENSE", this.dsList.getColumn(0, "NO_LICENSE"));
        		this.dsSave.setColumn(nrow, "DS_LICENSE_ORGAN", this.dsList.getColumn(0, "DS_LICENSE_ORGAN"));
        		this.dsSave.setColumn(nrow, "DT_LICENSE", this.dsList.getColumn(0, "DT_LICENSE"));
        		this.dsSave.setColumn(nrow, "AM_EDUCATION", this.dsList.getColumn(0, "AM_EDUCATION"));
        		this.dsSave.setColumn(nrow, "YN_RETURN", this.dsList.getColumn(0, "YN_RETURN"));
        		this.dsSave.setColumn(nrow, "AM_RETURN", this.dsList.getColumn(0, "AM_RETURN"));
        		this.dsSave.setColumn(nrow, "AM_SUPPORT", this.dsList.getColumn(0, "AM_SUPPORT"));
        		this.dsSave.setColumn(nrow, "TY_PAY", this.dsList.getColumn(0, "TY_PAY"));
        		this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(0, "CD_VENDOR"));
        		this.dsSave.setColumn(nrow, "CD_BANK", this.dsList.getColumn(0, "CD_BANK"));
        		this.dsSave.setColumn(nrow, "NO_ACCOUNT", this.dsList.getColumn(0, "NO_ACCOUNT"));
        		this.dsSave.setColumn(nrow, "DS_ACCOUNT", this.dsList.getColumn(0, "DS_ACCOUNT"));
        		this.dsSave.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(0, "DS_REMARK"));
        		this.dsSave.setColumn(nrow, "YN_EDUCATION", this.dsList.getColumn(0, "YN_EDUCATION"));
        		this.dsSave.setColumn(nrow, "DT_ACCOUNT", this.dsList.getColumn(0, "DT_ACCOUNT"));
        		this.dsSave.setColumn(nrow, "AM_EXEC", this.dsList.getColumn(0, "AM_EXEC"));
        		this.dsSave.setColumn(nrow, "CD_CURR", this.dsList.getColumn(0, "CD_CURR"));
        		this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		break;

        	case "D":
        		var nrow = this.dsDelete.addRow();
        		this.dsDelete.setColumn(nrow, "NO_EDU", this.dsList.getColumn(0, "NO_EDU"));
        		this.dsDelete.setColumn(nrow, "NO_ID", this.dsList.getColumn(0, "NO_ID"));
        		this.dsDelete.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        		this.dsDelete.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		break;
        	default:
        	}

        	for (var i = 0; i < this.dsTarget.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsTarget, i);

        		switch(flag) {
        		case "I":
        			var nrow = this.dsInsertTarget.addRow();
        			this.dsInsertTarget.setColumn(nrow, "NO_EDU", this.dsList.getColumn(0, "NO_EDU"));
        			this.dsInsertTarget.setColumn(nrow, "NO_ID", this.dsList.getColumn(0, "NO_ID"));
        			this.dsInsertTarget.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        			this.dsInsertTarget.setColumn(nrow, "CD_REPORT", this.dsList.getColumn(0, "CD_REPORT"));
        			this.dsInsertTarget.setColumn(nrow, "CD_EDU", this.dsList.getColumn(0, "CD_EDU"));
        			this.dsInsertTarget.setColumn(nrow, "CD_EDUSUB", this.dsList.getColumn(0, "CD_EDUSUB"));
        			this.dsInsertTarget.setColumn(nrow, "FR_EDUCATION", this.dsList.getColumn(0, "FR_EDUCATION"));
        			this.dsInsertTarget.setColumn(nrow, "TO_EDUCATION", this.dsList.getColumn(0, "TO_EDUCATION"));
        			this.dsInsertTarget.setColumn(nrow, "CD_LICENSE", this.dsList.getColumn(0, "CD_LICENSE"));
        			this.dsInsertTarget.setColumn(nrow, "DT_LICENSE", this.dsList.getColumn(0, "DT_LICENSE"));
        			this.dsInsertTarget.setColumn(nrow, "AM_EDUCATION", this.dsList.getColumn(0, "AM_EDUCATION"));
        			this.dsInsertTarget.setColumn(nrow, "YN_EDUCATION", this.dsList.getColumn(0, "YN_EDUCATION"));
        			this.dsInsertTarget.setColumn(nrow, "ID_PERSON", this.dsTarget.getColumn(i, "ID_PERSON"));
        			this.dsInsertTarget.setColumn(nrow, "ID_SABUN", this.dsTarget.getColumn(i, "ID_SABUN"));
        			this.dsInsertTarget.setColumn(nrow, "CD_DEPT", this.dsTarget.getColumn(i, "CD_DEPT"));
        			this.dsInsertTarget.setColumn(nrow, "CD_POSITION", this.dsTarget.getColumn(i, "CD_POSITION"));
        			this.dsInsertTarget.setColumn(nrow, "CD_DUTY", this.dsTarget.getColumn(i, "CD_DUTY"));
        			this.dsInsertTarget.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			break;
        		case "D":
        			var nrow = this.dsDeleteTarget.addRow();
        			this.dsDeleteTarget.setColumn(nrow, "NO_EDU", this.dsList.getColumn(0, "NO_EDU"));
        			this.dsDeleteTarget.setColumn(nrow, "NO_ID", this.dsList.getColumn(0, "NO_ID"));
        			this.dsDeleteTarget.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        			this.dsDeleteTarget.setColumn(nrow, "ID_PERSON", this.dsTarget.getColumn(i, "ID_PERSON"));
        			this.dsDeleteTarget.setColumn(nrow, "ID_SABUN", this.dsTarget.getColumn(i, "ID_SABUN"));
        			this.dsDeleteTarget.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			break;
        		}
        	}

        	if (this.dsSave.rowcount == 0  && this.dsDelete.rowcount == 0 && this.dsDeleteTarget.rowcount == 0 && this.dsInsertTarget.rowcount==0) return;

        	var strSvcId    = "save" ;
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave delete=dsDelete insertTarget=dsInsertTarget deleteTarget=dsDeleteTarget";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg,         // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
        };

        this.fnDelete = function ()
        {
        	//if(!this.fnDelValidate()) return;

        	var flag = this.gfnGetFormStatus(this);

        	this.dsDelete.clearData();

        	if (flag =="D")
        	{
        		var nrow = this.dsDelete.addRow();
        		this.dsDelete.setColumn(nrow, "NO_EDU", this.dsList.getColumn(0, "NO_EDU"));
        		this.dsDelete.setColumn(nrow, "NO_ID", this.dsList.getColumn(0, "NO_ID"));
        		this.dsDelete.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        		this.dsDelete.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}

        	if (this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "delete" ;
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
        						strArg,         // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]

        };
         /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValidate = function() {

        	var strMsg = "";

        	if(this.gfnIsNull(this.dsList.getColumn(0, "ID_SABUN"))) {
        		strMsg += "※사번이 입력되지 않았습니다.\n";
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "NO_EDU"))) {
        		strMsg += "※교육번호가 입력되지 않았습니다.\n";
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "NO_ID"))) {
        		strMsg += "※교육순번이 입력되지 않았습니다.\n";
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "DS_EDUCATION"))) {
        		strMsg += "※ 교육과정명이 입력되지 않았습니다.\n";
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "DS_EDU_ORGAN"))) {
        		strMsg += "※ 교육기관명이 입력되지 않았습니다.\n";
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "FR_EDUCATION")) || this.gfnIsNull(this.dsList.getColumn(0, "TO_EDUCATION"))) {
        		strMsg += "※ 교육일자가 입력되지 않았습니다.\n";
        	}

        	if(this.gfnGetDiffDate(this.dsList.getColumn(0, "FR_EDUCATION"),this.dsList.getColumn(0, "TO_EDUCATION")) < 0) {
        		strMsg += "※ 교육종료일은 교육시작일보다 커야 합니다.\n";
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "TT_EDUCATION")) || this.dsList.getColumn(0, "TT_EDUCATION")==0) {
        		strMsg += "※ 교육시간이 입력되지 않았습니다.\n";
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "DS_EDU_PLACE"))) {
        		strMsg += "※ 교육장소가 입력되지 않았습니다.\n";
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "DS_DOCUMENT"))) {
        		strMsg += "※ 교육내용가 입력되지 않았습니다.\n";
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "DS_EFFECT"))) {
        		strMsg += "※ 기대효과가 입력되지 않았습니다.\n";
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "TY_PAY"))) {
        		strMsg += "※ 지급구분이 입력되지 않았습니다.\n";
        	}

        	if(!this.gfnIsNull(this.dsList.getColumn(0, "TY_PAY")) && (this.dsList.getColumn(0, "TY_PAY")=="1" || this.dsList.getColumn(0, "TY_PAY")=="3") ) {
        		if (this.dsList.getColumn(0, "AM_EDUCATION") ==0)
        		{
        			strMsg += "※ 교육금액이 입력되지 않았습니다.\n";
        		}
        	}

        	if (this.dsList.getColumn(0, "TY_PAY")=="1")
        	{
        		if (this.gfnIsNull(this.dsList.getColumn(0, "CD_VENDOR")))
        		{
        			strMsg += "※ 입금처가 입력되지 않았습니다.\n";
        		}

        		if (this.gfnIsNull(this.dsList.getColumn(0, "NO_ACCOUNT")))
        		{
        			strMsg += "※ 계좌번호가 입력되지 않았습니다.\n";
        		}

        	}

        	if (this.gfnIsNull(this.dsList.getColumn(0, "YN_RETURN")))
        	{
        		strMsg += "※ 고용보험 환급여부가 입력되지 않았습니다.\n";
        	}

        	if(strMsg.length > 0) {
        		this.gfnAlert(strMsg);
        		return false;
        	}

        	return true;
        }

        this.fnDelValidate = function ()
        {
        	var strMsg = "";

        	if(!this.gfnIsNull(this.dsList.getColumn(0, "ST_APRV")) && this.dsList.getColumn(0, "ST_APRV") == "01") {
        		strMsg += "※신청완료된 자료입니다. 삭제할 수 없습니다.\n";
        	}

        	if(strMsg.length > 0) {
        		this.gfnAlert(strMsg);
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
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return false;
        	}

        	//trace(" svcID=>" + svcID);
        	switch(svcID) {
        		case "select" :
        			this.gfnGridAfterSelect(this.dxGrid);

        			if(this.dsList.rowcount > 0) {
        				this.dsList.set_enableevent(false);

        				this.staFileUpload.set_text("파일수 : " + this.dsList.getColumn(0, "URL_PROOF") + " 개");

        				this.dsList.setColumn(0, this.ucFlag, this.dsList.getColumn(0, "TY_WRK"));
        				this.gfnSetFormStatus(this, this.dsList.getColumn(0, "TY_WRK")=="I" ? "I" : "Q" );

        				if (this.dsList.getColumn(0, "TY_WRK")=="I")
        				{
        					this.dsTarget.setColumn(0, this.ucFlag, "I");
        				}
        				this.dsSearch.setColumn(0, "NO_EDU" , this.dsList.getColumn(0, "NO_EDU"));


        				this.fnSetEnable(); //  활성화 처리
        				//trace(" TY_PAY=>" + this.dsList.getColumn(0, "TY_PAY"));

        				this.fnSetSupport();
        				//this.staCnt.set_text(this.dsTarget.rowcount);
        				this.dsList.set_enableevent(true);

        			}
        			break;
        		case "combo" :
        			//trace(" combo=>" + this.dsEDUSUB.saveXML());
        			break;
        		case "save":		// 저장

        				this.gfnSetFormStatus(this, "Q");
        				this.dsList.setColumn(0, this.ucFlag , "Q");
        				this.fnSelect();
        			break;
        		case "APRV":		// 결재신청
        			this.getParentContext().close(true);
        			this.gfnOpenAppr(function() {
        				this.getParentContext().close(true);
        			});
        			break;
        		case "APRV_INIT":	// 결재초기화

        			break;
        		case "delete" :
        			//trace(" delete=>");
        			this.getParentContext().close(true);
        			break;
        		default:
        	}
        };

        this.fnVaidateCallback =  function (svcId, sRtn)
        {
        	this.getParentContext().close(false);
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "cfID_SABUN") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "CD_DEPT", "");
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP", "Y");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "01");
        	}
        	if (id == "cfID_SABUN_TARGET") {
        		//trace("cfID_SABUN_TARGET =>" +  this.dsList.getColumn(0, "CD_EMP"));
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "CD_DEPT", "%");
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP", "Y");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "01");
        		dsUserParam.setColumn(nrow, "CD_EMPTYPE", this.dsList.getColumn(0, "CD_EMP"));
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}
        	if (id == "cfCD_VENDOR") {
        		dsUserParam.setColumn(nrow, "TY_VENDOR1", "전체");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        	}
        	if (id == "cfNO_ACCOUNT") {
        		dsUserParam.setColumn(nrow, "TY_VENDOR", "P");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "CD_PAY", this.dsList.getColumn(0, "CD_VENDOR"));
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id,codeFindData) {
           	var arrData = codeFindData;

        	if(id == "cfCD_VENDOR") {
        		this.dsList.setColumn(0, "CD_BANK", "");
        		this.dsList.setColumn(0, "DS_BANK", "");
        		this.dsList.setColumn(0, "DS_ACCOUNT", "");
        		this.dsList.setColumn(0, "NO_ACCOUNT", "");
        	}

        	if(id == "cfNO_ACCOUNT") {
        		if(arrData.length > 0) {
        			this.dsList.set_enableevent(false);
        			this.dsList.setColumn(this.dsList.rowposition, "CD_BANK", arrData[0]["CD_BANK"]);
        			this.dsList.setColumn(this.dsList.rowposition, "DS_BANK", arrData[0]["DS_BANK"]);
        			this.dsList.setColumn(this.dsList.rowposition, "DS_ACCOUNT", arrData[0]["NM_OPENER"]);
        			this.dsList.set_enableevent(true);
        		}else{
        			this.dsList.set_enableevent(false);
        			this.dsList.setColumn(this.dsList.rowposition, "CD_BANK", "");
        			this.dsList.setColumn(this.dsList.rowposition, "DS_BANK", "");
        			this.dsList.setColumn(this.dsList.rowposition, "DS_ACCOUNT", "");
        			this.dsList.set_enableevent(true);
        		}
        	}
        	else if(id == "cfID_SABUN_TARGET") {
        		if(arrData.length > 0) {
        			for(var r = 0; r < arrData.length; r++) {
        				if (this.dsTarget.getCaseCount("ID_PERSON =='"+ arrData[r]["ID_PERSON"] + "'") == 0)	{
        					var nrow = this.dsTarget.addRow();
        					this.dsTarget.setColumn(nrow, this.ucFlag, "I") ;
        					this.dsTarget.setColumn(nrow, "ID_PERSON" , arrData[r]["ID_PERSON"]);
        					this.dsTarget.setColumn(nrow, "ID_SABUN" , arrData[r]["ID_SABUN"]);
        					this.dsTarget.setColumn(nrow, "DS_HNAME" , arrData[r]["DS_HNAME"]);
        					this.dsTarget.setColumn(nrow, "CD_CORP" , arrData[r]["CD_CORP"]);
        					this.dsTarget.setColumn(nrow, "DS_CORP" , arrData[r]["DS_CORP"]);
        					this.dsTarget.setColumn(nrow, "CD_DUTY" , arrData[r]["CD_DUTY"]);
        					this.dsTarget.setColumn(nrow, "DS_DUTY" , arrData[r]["DS_DUTY"]);
        					this.dsTarget.setColumn(nrow, "CD_DEPT" , arrData[r]["CD_DEPT"]);
        					this.dsTarget.setColumn(nrow, "DS_DEPT" , arrData[r]["DS_DEPT"]);
        					this.dsTarget.setColumn(nrow, "CD_POSITION" , arrData[r]["CD_POSITION"]);
        					this.dsTarget.setColumn(nrow, "DS_POSITION" , arrData[r]["DS_POSITION"]);

        				}
        			}

        			this.fnSetSupport();
        		}
        	}

        };
         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
          // 저장 버튼
         this.divBtns_btnSAVE_onclick = function(obj,e)
        {
        	this.fnSave();
        };

        // 취소버튼
        this.btnCancel_onclick = function(obj,e)
        {

        	if (this.btnCANCEL.text == "삭제")
        	{
        		this.gfnConfirm("신청서 저장내역이 삭제 됩니다. 삭제하시겠습니까?", "fnDelCallback");
        	}else{
        		this.getParentContext().close(false);
        	}
        };

        this.fnDelCallback = function (svcId, sRtn)
        {
        	if (sRtn)
        	{
        		this.gfnSetFormStatus(this, "D");
        		this.dsList.setColumn(0, this.ucFlag , "D");
        		this.fnDelete();

        	}

        };

        // 추가 버튼
        this.divData_divGrid_btnAdd_onclick = function(obj,e)
        {
        	if (this.gfnIsNull(this.dsList.getColumn(0, "CD_CORP"))) {
        		this.gfnAlert("법인을 선택하세요!");
        		return;
        	}

        	this.cfID_SABUN_TARGET.form.fnCodeFindClear();
        	this.cfID_SABUN_TARGET.form.fnCodeFindLoad();

        };

        //교육대상자 삭제버튼
        this.divData_divGrid_btnRemove_onclick = function(obj,e)
        {
        	//trace(" btnRemove=>" + this.dsList.getColumn(0, "ID_SABUN"));
        	if (this.dsList.getColumn(0, "ID_SABUN") == this.dsTarget.getColumn(this.dsTarget.rowposition, "ID_SABUN"))
        	{
        		this.gfnAlert("삭제대상 교육대상자는 교육신청자 입니다. 삭제할 수 없습니다.");
        		return;
        	}

        	this.gfnGridDel(this.dxGrid);
        	this.fnSetSupport();
        	this.gfnSetFormStatus(this, "U");

        };

        // 결재상신 버튼 클릭시
        this.btnAPRV_onclick = function(obj,e)
        {
        	if (this.dsList.rowcount == 0) return;
        	var flag = this.gfnGetFormStatus(this);

        	if (flag == "U" || flag == "I") {
        		this.gfnAlert("수정자료가 존재합니다. 저장후 결재상신 하세요.");
        		return;
        	}

        	var noEdu = this.gfnTrim(this.gfnNvl(this.dsList.getColumn(0, "NO_EDU"),""));

        	if(this.gfnIsNull(noEdu)){
        		this.gfnAlert("교육신청번호 입력하신 후 처리하세요.");
        		return;
        	}

        	var fileCnt = this.gfnNvl(this.dsList.getColumn(0, "FILE_CNT"),0);
        	if(fileCnt == 0 ){
        		this.gfnAlert("교육관련 파일이 첨부되지 않았습니다. 파일 첨부 후 결재상신 처리하세요.");
        		return;
        	}

        	if(this.dsList.findRowExpr("(ST_APRV == '1' || ST_APRV == '2' || ST_APRV == '3' || ST_APRV == '4' ) && nx_flag != '#'") > -1){
        		this.gfnAlert("결재상신된 신청서 입니다. " );
        		return;
        	}

        	// 지원한도 지원 횟수 체크
        	if (!this.fnAprvValid(0 , noEdu)) {
        		return;
        	}

        	var DS_REPORT = this.dsList.getColumn(0, "DS_REPORT");
        	var DS_TITLE = this.dsList.getColumn(0, "DS_EDUCATION");
        	var aprvType = this.fnGetAprvType(this.dsList.getColumn(0, "CD_REPORT"));

        	this.gfnConfirm(this.fnAprvMsg(obj), function(strId, isOk) {
        		if(isOk == true) {
        			var initParam = {
        				CD_CORP: this.dsSearch.getColumn(0, "CD_CORP"),
        				ID_AP_TYPE: aprvType,
        				TY_WRK: "APRV",
        				ID_APRV: this.AuthClient.ID_SABUN,
        				TT_DOC: "[" + DS_REPORT + "] " + DS_TITLE,
        				CD_CORP_SUFFIX : this.gfnGetConfig("DZ" , "CD_CORP_SUFFIX"),
        			}
        			this.gfnAprv(initParam, "fnAprvCallback", "APRV");
        		}
        	});
        };

        //전자결재 문서 번호 가져오기
        this.fnGetAprvType = function(vReport ) {
        	var returnVal = ""
        	switch(vReport) {
        	case "A" : // 교육신청서
        		returnVal  = "DAB07";
        		break;
        	case "B": // 교육비 지원신청서
        		returnVal  = "DAB09";
        		break;
        	case "C": // 교육비 지원신청서
        		returnVal  = "DAB09";
        		break;
        	case "D": // 어학시험응시료
        		returnVal  = "DAB10";
        		break;
        	case "E": // 교육보고서
        		returnVal  = "DAB08";
        		break;
        	default:
        	}
        	return returnVal;
        }

        this.fnAprvValid = function(nrow , strEdu) {
        	//trace(" fnAprvValid=>" + strEdu);
        	this.dsSelectAprvLimit.clearData();
        	this.dsSelectAprvLimit.addRow();
        	this.dsSelectAprvLimit.setColumn(0, "NO_EDU" , strEdu);
        	this.dsSelectAprvLimit.setColumn(0, "NO_ID"  , this.dsList.getColumn(nrow , "NO_ID"));
        	this.dsSelectAprvLimit.setColumn(0, "CD_CORP", this.dsList.getColumn(nrow , "CD_CORP"));

        	var strSvcId    = "select_Limit";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select_Limit=dsSelectAprvLimit";
        	var outData     = "dsLimit=select_Limit0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,	// 통신방법 정의 [생략가능]
        						false);
        	var msg = "";
        	var cnt = 0 ;
        	for (var i = 0; i < this.dsLimit.rowcount; i++) {
        		cnt++;
        		msg =  msg + cnt + ". " +  this.dsLimit.getColumn(i, "ERRMSG") + "\n"
        	}

        	if (!this.gfnIsNull(msg))
        	{
        		this.gfnAlert(msg);
        	    return false;
        	}
        	return true;
        }

        // 결재문서조회 버튼
        this.fnAprvDocQ = function(obj, e) {
        	var cd_corp = this.dsList.getColumn(0, "CD_CORP");
        	var no_aprv = this.dsList.getColumn(0, "NO_APRV");
        	var no_doc = this.dsList.getColumn(0, "NO_DOC");
        	if(this.gfnIsNull(no_aprv) || this.gfnIsNull(no_doc)){
        		return;
        	}

        	var oParams = {
        		CD_CORP: cd_corp,
        		NO_APRV: no_aprv,
        	}
        	this.gfnAprvDoc(oParams, this.fnAprvDocQCallback);
        }

        this.fnAprvDocQCallback = function() {
        	console.log('fnAprvDocQCallback');
        	//alert('fnAprvDocQCallback');
        }

        // 결재상태초기화 버튼
        this.fnAprvInit = function(obj, e) {
        	if (this.dsList.rowcount == 0) return;

        	//this.gfnConfirm(this.fnAprvMsg(obj), "fnAprvCallback", "APRVINIT");
        	this.gfnConfirm(this.fnAprvMsg(obj), function(strId, isOk) {
        		if (isOk == false) {
        			return;
        		}
        		this.fnAprvCallback("APRVINIT", isOk);
        	});
        }

        this.fnAprvMsg = function(obj) {

        	var DS_REPORT = this.dsList.getColumn(0, "DS_REPORT");
        	var DS_TITLE = this.dsList.getColumn(0, "DS_TITLE");
        	var CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");
        	var DS_CORP = this.dsSearch.getColumn(0, "DS_CORP");
        	var msg =  '['+ DS_REPORT +"] " + DS_TITLE + " 을(를) \n";
        	msg += "" + obj.text + " 하시겠습니까?";

        	return msg;
        }

        //거래처 등록 버튼
        this.btnVendor_onclick = function(obj,e)
        {
        	var param = {};
        	param.CD_VENDOR = this.dsList.getColumn(0, "CD_VENDOR");
        	param.DS_VENDOR = this.dsList.getColumn(0, "DS_VENDOR");

        	this.gfnFormOpenNonAuth("DHZ", "DHZ_VENDORALL", "", param);
        };

        //계좌등록 버튼
        this.btnAccount_onclick = function(obj,e)
        {
        	var param = {};
        	param.CD_VENDOR = this.dsList.getColumn(0, "CD_VENDOR");
        	param.DS_VENDOR = this.dsList.getColumn(0, "DS_VENDOR");

        	this.gfnFormOpenNonAuth("DFB", "DFB_ACCOUNT", "", param);
        };


        // 결재상신 버튼 콜백
        // 결재상태초기화 버튼 콜백
        this.fnAprvCallback = function(strId, val) {

        	this.dsApproval.clearData();
        	this.dsApproval.addRow();

         	var noEdu  = this.gfnTrim(this.dsList.getColumn(0, "NO_EDU"));
        	this.dsApproval.setColumn(0, "TY_WRK",  strId);
        	this.dsApproval.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsApproval.setColumn(0, "NO_EDU", noEdu);
        	this.dsApproval.setColumn(0, "ID_APRV", this.AuthClient.ID_SABUN);
        	if (strId == "APRV") {
        		this.dsApproval.setColumn(0, "NO_APRV", this.dsAprvOut.getColumn(0, "NO_APRV"));
        	} else {
        		this.dsApproval.setColumn(0, "NO_APRV", this.dsList.getColumn(0, "NO_APRV"));
        	}

        	var strSvcId    = strId;
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "aprv_execute=dsApproval";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        }


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        this.dsList_onvaluechanged = function(obj,e)
        {

        	//trace(" dsList_onvaluechanged=>" + e.columnid);

        	if(this.gfnDsIsUpdated(obj)){
        		var rowType = obj.getRowType(e.row);
        		this.gfnSetFormStatus(this, (rowType == 2 ? "I" : "U"));
        	}
        	if (e.oldvalue != e.newvalue)
        	{
        		if (e.columnid == "AM_EXEC")
        		{
        			this.dsList.setColumn(0, "AM_EDUCATION", e.newvalue);
        		}
        		this.fnSetSupport();
        	}

        };

        this.fnGridBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var gridIdx = this.dxGrid.currentrow;

        	var sCD_CORP = this.dsList.getColumn(0, "CD_CORP");
        	if (id == "DAX_CFBASEINFO_ALL") {	// 사번

        		if(this.gfnIsNull(sCD_CORP)){
        			this.gfnAlert("법인을 먼저 선택하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_DEPT"  , "");
        		dsUserParam.setColumn(nrow, "CD_CORP"  , sCD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP"  , "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "01");
        	}

        	return true;
        };

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {

        }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        // 첨부파일
        this.fnFileUpload = function(obj,e) {
        	//trace("this.btnFileUpload.text :: " + this.btnFileUpload.text);
        	if (this.dsList.rowcount <= 0) return;

        		var cdGubun = "";
        		var cdDir = "";

        		cdGubun = "DAB4";
        		var fileManager = {};
        		fileManager.CD_GUBUN = cdGubun;
        		fileManager.CD_DIR = [this.dsList.getColumn(this.dsList.rowposition, "NO_EDU")];
        		if(this.dsList.getColumn(0, "ST_APRV")=="01" || this.gfnIsNull(this.dsList.getColumn(0, "ST_APRV"))) {
        			fileManager.IS_READONLY = false;
        		} else {
        			fileManager.IS_READONLY = true;
        		}
        		switch(this.dsList.getColumn(0, "CD_REPORT")) {
        		case "A":
        			fileManager.TXT_MESSAGE = "※ 상세강의계획, 강사이력, 교육브로셔, 커리큘렁 등 첨부"
        			break;
        		case "B":
        			fileManager.TXT_MESSAGE = "※ 결제영수증, 출석확인증등 첨부"
        			break;
        		case "C":
        			fileManager.TXT_MESSAGE = "※ 교육수강증 OR 결제영수증 첨부 "
        			break;
        		case "D":
        			fileManager.TXT_MESSAGE = "※ 결제영수증 첨부 "
        			break;
        		case "E":
        			fileManager.TXT_MESSAGE = "※ 수료증, 출석확인증 첨부 "
        			break;
        		default:
        		}

        		//
        		this.gfnFileManager(fileManager, "fnFileCallback");

        }

        this.fnFileCallback = function(strID, val) {
        	// val.IsChange : 변경여부, val.Cnt : 파일개수

        	// 파일개수를 다시 셋팅
        	var falg = this.gfnGetFormStatus(this);

        	//trace(" fnFileCallback Cnt=>" + val.Cnt  );
        	this.dsList.set_enableevent(false);
        	if(val.Cnt == 0 ) {
        		this.staFileUpload.set_text("파일수 : 0 개");
        	} else {
        		this.staFileUpload.set_text("파일수 : " + val.Cnt + " 개");
        	}

        	this.dsList.setColumn(0, "FILE_CNT", val.Cnt);
        	this.dsList.set_enableevent(true);
        	this.gfnSetFormStatus(this , falg);
        };

        // 절사 처리
        this.fnGetTrunc = function(amVal, vCnt){
        	var returnVal = this.gfnNvl(amVal, 0);
        	if(returnVal > 0){
        		returnVal = Math.floor(amVal/vCnt) * vCnt;
        	}
        	return returnVal;
        }

        // 객체 초기화
        this.fnResetObjectValue = function(obj, dataset, columns) {
        	obj.set_value("");
        	for (var i = 0; i < columns.length; i++) {
        		dataset.setColumn(0, columns[i], "");
        	}
        }

        // 지급구분 변경시
        this.divData_rdoTY_PAY_onitemchanged = function(obj,e)
        {

        	if (obj.value == 1)
        	{
        		this.staCD_VENDOR.set_cssclass("sta_WF_tablelabelE");
        		this.staNO_ACCOUNT.set_cssclass("sta_WF_tablelabelE");
        		this.staDS_ACCOUNT.set_cssclass("sta_WF_tablelabelE");
        		this.staCD_BANK.set_cssclass("sta_WF_tablelabelE");
        		this.cfCD_VENDOR.set_enable(true);
        		this.cfNO_ACCOUNT.set_enable(true);

        	} else {
        		this.staCD_VENDOR.set_cssclass("sta_WF_tablelabel");
        		this.staNO_ACCOUNT.set_cssclass("sta_WF_tablelabel");
        		this.staDS_ACCOUNT.set_cssclass("sta_WF_tablelabel");
        		this.staCD_BANK.set_cssclass("sta_WF_tablelabel");
        		this.cfCD_VENDOR.set_enable(false);
        		this.cfNO_ACCOUNT.set_enable(false);
        		this.dsList.setColumn(0, "NO_ACCOUNT", "");
        		this.dsList.setColumn(0, "DS_ACCOUNT", "");
        		this.dsList.setColumn(0, "CD_VENDOR", "");
        		this.dsList.setColumn(0, "DS_VENDOR", "");
        		this.dsList.setColumn(0, "CD_BANK", "");
        		this.dsList.setColumn(0, "DS_BANK", "");
        	}

        };

        this.fnSetCombo = function ()
        {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("TY_SEL", "string");
        	this.dsCombo.addColumn("CD_CORP", "string");
        	this.dsCombo.addColumn("CD_GUBUN", "string");
        	this.dsCombo.addColumn("CD_UPPREFIX", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "TY_SEL", "P");
        	this.dsCombo.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsCombo.setColumn(0, "CD_GUBUN", "S");
        	this.dsCombo.setColumn(0, "CD_UPPREFIX", "A");

        	this.dsCombo1 = new Dataset();
        	this.dsCombo1.addColumn("CD_PREFIX", "string");

        	this.dsCombo1.addRow();
        	this.dsCombo1.setColumn(0, "CD_PREFIX", "S7");

        	this.dsCombo2 = new Dataset();
        	this.dsCombo2.addColumn("CD_SYSTEM", "string");
        	this.dsCombo2.addColumn("CD_TYPE", "string");

        	this.dsCombo2.addRow();
        	this.dsCombo2.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo2.setColumn(0, "CD_TYPE", "40");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo combo1=dsCombo1 combo2=dsCombo2";
        	var outData     = "dsEDUSUB=combo0 dsPAY=combo10 dsCD_CURR=combo20";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
        };


        // 교육지원금액 계산 처리
        this.fnSetSupport = function() {

        	var vCnt = this.dsTarget.getCaseCountNF( " nx_flag != 'D'" );   // 교육대상자 수
        	var vAmEducation = this.dsList.getColumn(0, "AM_EDUCATION");    // 교육금액

        	var vRtLimit = this.dsList.getColumn(0, "RT_LIMIT");   			// 지원율
        	var vAmLimit = this.dsList.getColumn(0, "AM_LIMIT") * vCnt ;    // 지원한도 한도금액 * 교육대상자수
        	var vDsLimit = this.dsList.getColumn(0, "DS_LIMIT");   			// 지원횟수

        	var vDtStart = this.gfnIsNull(this.dsList.getColumn(0, "FR_EDUCATION")) ? '' : this.dsList.getColumn(0, "FR_EDUCATION");   // 교육시작일자
        	var vDtEnd 	 = this.gfnIsNull(this.dsList.getColumn(0, "TO_EDUCATION")) ? '' : this.dsList.getColumn(0, "TO_EDUCATION");   // 교육종료일자

         	if (vDtStart!= '' && vDtEnd != '' )
        	{var vCntMonth = nexacro.toNumber(this.fnGetDiffMonth(vDtStart , vDtEnd));}
         	else
        	{var vCntMonth = 1;}

        // 	trace(" vCntMonth=>" + vCntMonth);
        // 	trace(" vDsLimit=>" + vDsLimit);

        	if(vCntMonth > 1 && vDsLimit == "월1회")
        	{ vAmLimit = vAmLimit * vCntMonth; }

        	var vResult = Math.ceil(vAmEducation * vRtLimit/100); 			// 총 지원금액 : 1원이하 올림

        	//trace(" vAmLimit=>" + vAmLimit);
        	if (vAmLimit > 0)
        	{
        		//trace(" fnSetSupport=>" + vResult);
        		vResult = vAmLimit <= vResult ? vAmLimit : vResult ;
        	}

        	this.dsList.setColumn(0, "AM_SUPPORT", vResult);
        	this.staCnt.set_text(vCnt);
        }

        this.fnGetDiffMonth = function(sStartDate, sEndDate) {

        	var nStartMon, nEndMon;
        	var nDiffDate, nDiffMonth;

        	nStartMon = parseInt(sStartDate.substr(0,4), 10)*12 + parseInt(sStartDate.substr(4,2), 10);
        	nEndMon = parseInt(sEndDate.substr(0,4), 10)*12 + parseInt(sEndDate.substr(4,2), 10);

        	nDiffMonth = nEndMon - nStartMon;
        	nDiffDate = parseInt(sStartDate.substr(6,2), 10) - parseInt(sEndDate.substr(6,2), 10);

        // 	trace("nDiffMonth =>" +nDiffMonth );
        // 	trace("nDiffDate =>" +nDiffDate );

        	if( nDiffMonth > 1 && nDiffDate <= -15 ) nDiffMonth = nDiffMonth + 1;

        	return (nDiffMonth);
        	//return (1);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.divData.form.divGrid.form.btnRemove.addEventHandler("onclick",this.divData_divGrid_btnRemove_onclick,this);
            this.divData.form.divGrid.form.btnAdd.addEventHandler("onclick",this.divData_divGrid_btnAdd_onclick,this);
            this.divData.form.rdoTY_PAY.addEventHandler("onitemchanged",this.divData_rdoTY_PAY_onitemchanged,this);
            this.divData.form.sta00.addEventHandler("onclick",this.divData_sta00_onclick,this);
            this.divData.form.staDS_ACCOUNT.addEventHandler("onclick",this.divData_staNO_ACCOUNT01_onclick,this);
            this.divData.form.btnATTACH.addEventHandler("onclick",this.fnFileUpload,this);
            this.divBtns.form.btnCANCEL.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.divBtns.form.btnSAVE.addEventHandler("onclick",this.divBtns_btnSAVE_onclick,this);
            this.btnVendor.addEventHandler("onclick",this.btnVendor_onclick,this);
            this.btnAPRV00.addEventHandler("onclick",this.fnAprvDocQ,this);
            this.btnAPRV.addEventHandler("onclick",this.btnAPRV_onclick,this);
            this.btnAccount.addEventHandler("onclick",this.btnAccount_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsTarget.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsEDUSUB.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsPAY.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsLimit.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DAB_EDU_REQA.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
