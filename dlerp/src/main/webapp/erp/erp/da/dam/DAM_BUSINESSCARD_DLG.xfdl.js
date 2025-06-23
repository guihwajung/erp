(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAM_BUSINESSCARD_DLG");
            this.set_titletext("명함신청");
            if (Form == this.constructor)
            {
                this._setFormPosition(680,620);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP_ZIP_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP_ADD_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE_ZIP_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE_ADD_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_NAME_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_POSITION_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_OCCUPATION_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TEL_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FAX_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HANDPHONE_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMAIL_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP_ZIP_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP_ADD_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE_ZIP_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE_ADD_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_NAME_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_POSITION_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_OCCUPATION_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TEL_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FAX_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HANDPHONE_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMAIL_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"TY_APPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"DT_APPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"DT_COMPLETION\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JIGUB\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RECEIPT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_RECEIPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">selectBase</Col><Col id=\"SP\">DAMPR_BUSINESSCARD_CHECK</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAMPR_BUSINESSCARD_SAVE</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAMPR_BUSINESSCARD_SELECT_DTL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_HNAME\"/><Col id=\"ID_SABUN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBase", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP_ZIP_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP_ADD_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE_ZIP_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE_ADD_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_NAME_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_POSITION_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_OCCUPATION_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TEL_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FAX_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HANDPHONE_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMAIL_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP_ZIP_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP_ADD_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE_ZIP_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE_ADD_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_NAME_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_POSITION_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_OCCUPATION_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TEL_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FAX_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HANDPHONE_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMAIL_ENG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","0.0","10.0","92.0%","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta04","staID_SABUN:0.0","staID_SABUN:10.0",null,"24.0","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_TITLE_T","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("신청정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","staID_SABUN:10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","52",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("staDS_EMAIL_KOR00","0","445","12.83%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("83");
            obj.set_text("사유");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta_BG_DS_REQUEST","staDS_EMAIL_KOR00:-1","445",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_NAME_KOR","0","37","12.83%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_DEPT_KOR","0","153","12.83%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("소속(그룹)");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CORP_ADD_KOR","0","124","12.83%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("회사주소");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_POSITION_KOR","0","240","12.83%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_OCCUPATION_KOR","0","269","12.83%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("보직");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_TEL_KOR","0","298","12.83%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("회사전화");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_FAX_KOR","0","327","12.83%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("FAX번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_HANDPHONE_KOR","0","356","12.83%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("휴대전화");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_EMAIL_KOR","0","385","12.83%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("E-MAIL");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_NAME_ENG","50%","37","12.83%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta_BG_L_01","staDS_NAME_KOR:-1","37",null,"30","staDS_NAME_ENG:-1",null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_NAME_KOR","staDS_NAME_KOR:8","42",null,"20","staDS_NAME_ENG:8",null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CORP_ADD_ENG","50.00%","124","12.83%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_text("회사주소");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta_BG_L_02","staDS_CORP_ADD_KOR:-1","124",null,"30","staDS_CORP_ADD_ENG:-1",null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_CORP_ADD_KOR","staDS_CORP_ADD_KOR:8","129",null,"20","staDS_CORP_ADD_ENG:8",null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_DEPT_ENG","50.00%","153","12.83%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_text("소속(그룹)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta_BG_L_03","staDS_DEPT_KOR:-1","153",null,"30","staDS_DEPT_ENG:-1",null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_DEPT_KOR","staDS_DEPT_KOR:8","158",null,"20","staDS_DEPT_ENG:8",null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_POSITION_ENG","50.00%","240","12.83%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta_BG_L_04","staDS_POSITION_KOR:-1","240",null,"30","staDS_POSITION_ENG:-1",null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_POSITION_KOR","staDS_POSITION_KOR:8","245",null,"20","staDS_POSITION_ENG:8",null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_OCCUPATION_ENG","50.00%","269","12.83%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_text("보직");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta_BG_L_05","staDS_OCCUPATION_KOR:-1","269",null,"30","staDS_OCCUPATION_ENG:-1",null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_OCCUPATION_KOR","staDS_OCCUPATION_KOR:8","274",null,"20","staDS_OCCUPATION_ENG:8",null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_TEL_ENG","50.00%","298","12.83%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_text("회사전화");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta_BG_L_06","staDS_TEL_KOR:-1","298",null,"30","staDS_TEL_ENG:-1",null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_TEL_KOR","staDS_TEL_KOR:8","303",null,"20","staDS_TEL_ENG:8",null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_FAX_ENG","50.00%","327","12.83%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj.set_text("FAX번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta_BG_L_07","staDS_FAX_KOR:-1","327",null,"30","staDS_FAX_ENG:-1",null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_FAX_KOR","staDS_FAX_KOR:8","332",null,"20","staDS_FAX_ENG:8",null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_HANDPHONE_ENG","50.00%","356","12.83%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("51");
            obj.set_text("휴대전화");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta_BG_L_08","staDS_HANDPHONE_KOR:-1","356",null,"30","staDS_HANDPHONE_ENG:-1",null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_HANDPHONE_KOR","staDS_HANDPHONE_KOR:8","361",null,"20","staDS_HANDPHONE_ENG:8",null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_EMAIL_ENG","50.00%","385","12.83%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("54");
            obj.set_text("E-MAIL");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta_BG_L_09","staDS_EMAIL_KOR:-1","385",null,"30","staDS_EMAIL_ENG:-1",null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_EMAIL_KOR","staDS_EMAIL_KOR:8","390",null,"20","staDS_EMAIL_ENG:8",null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta_TITLE_L","9","9","70","18",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_text("국문정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta_BG_R_01","staDS_NAME_ENG:-1","37",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_NAME_ENG","staDS_NAME_ENG:8","42",null,"20","8",null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta_BG_R_02","staDS_CORP_ADD_ENG:-1","124",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_CORP_ADD_ENG","staDS_CORP_ADD_ENG:8","129",null,"20","8",null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta_BG_R_03","staDS_DEPT_ENG:-1","153",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_DEPT_ENG","staDS_DEPT_ENG:8","158",null,"20","8",null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta_BG_R_04","staDS_POSITION_ENG:-1","240",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_POSITION_ENG","staDS_POSITION_ENG:8","245",null,"20","8",null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta_BG_R_05","staDS_OCCUPATION_ENG:-1","269",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_OCCUPATION_ENG","staDS_OCCUPATION_ENG:8","274",null,"20","8",null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta_BG_R_06","staDS_TEL_ENG:-1","298",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_TEL_ENG","staDS_TEL_ENG:8","303",null,"20","8",null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta_BG_R_07","staDS_FAX_ENG:-1","327",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_FAX_ENG","staDS_FAX_ENG:8","332",null,"20","8",null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta_BG_R_08","staDS_HANDPHONE_ENG:-1","356",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_HANDPHONE_ENG","staDS_HANDPHONE_ENG:8","361",null,"20","8",null,null,null,null,null,this.divData.form);
            obj.set_taborder("50");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta_BG_R_09","staDS_EMAIL_ENG:-1","385",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_EMAIL_ENG","staDS_EMAIL_ENG:8","390",null,"20","8",null,null,null,null,null,this.divData.form);
            obj.set_taborder("53");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta_TITLE_R","50%","9","70","18",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("55");
            obj.set_text("영문정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta_TITLE_B","9","staDS_EMAIL_KOR:10","70","18",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("56");
            obj.set_text("신청사유");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_REQUEST","staDS_EMAIL_KOR00:8","staDS_EMAIL_ENG:35",null,"20","8",null,null,null,null,null,this.divData.form);
            obj.set_taborder("57");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CORP_KOR","0","66","12.83%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("58");
            obj.set_text("회사");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CORP_ENG","50.00%","66","12.83%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("60");
            obj.set_text("회사");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta_BG_DS_CORP_KOR","staDS_CORP_KOR:-1","66",null,"30","staDS_CORP_ENG:-1",null,null,null,null,null,this.divData.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta_BG_DS_CORP_ENG","staDS_CORP_ENG:-1","66",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CORP_ZIP_KOR","0","95","12.83%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("62");
            obj.set_text("회사\r\n우편번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CORP_ZIP_ENG","50%","95","12.83%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("64");
            obj.set_text("회사\r\n우편번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta_BG_DS_CORP_ZIP_KOR","staDS_CORP_ZIP_KOR:-1","95",null,"30","staDS_CORP_ZIP_ENG:-1",null,null,null,null,null,this.divData.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta_BG_DS_CORP_ZIP_ENG","staDS_CORP_ZIP_ENG:-1","95",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE_ZIP_KOR","0","182","12.83%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("66");
            obj.set_text("현장\r\n우편번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta_BG_DS_SITE_ZIP_KOR","staDS_SITE_ZIP_KOR:-1","182",null,"30","338",null,null,null,null,null,this.divData.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE_ZIP_ENG","50.00%","182","12.83%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("68");
            obj.set_text("현장\r\n우편번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta_BG_DS_SITE_ZIP_ENG","staDS_SITE_ZIP_ENG:-1","182",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE_ADD_KOR","0","211","12.83%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("70");
            obj.set_text("현장주소");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta_BG_DS_SITE_ADD_KOR","staDS_SITE_ADD_KOR:-1","211",null,"30","338",null,null,null,null,null,this.divData.form);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE_ADD_ENG","50.00%","211","12.83%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("72");
            obj.set_text("현장주소");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta_BG_DS_SITE_ADD_ENG","staDS_SITE_ADD_ENG:-1","211",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_CORP_KOR","staDS_CORP_KOR:8","71",null,"20","staDS_CORP_ENG:8",null,null,null,null,null,this.divData.form);
            obj.set_taborder("74");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_SITE_ADD_KOR","staDS_SITE_ADD_KOR:8","216",null,"20","staDS_SITE_ADD_ENG:8",null,null,null,null,null,this.divData.form);
            obj.set_taborder("75");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_CORP_ENG","staDS_CORP_ENG:8","71",null,"20","8",null,null,null,null,null,this.divData.form);
            obj.set_taborder("76");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_SITE_ADD_ENG","staDS_SITE_ADD_ENG:8","216",null,"20","8",null,null,null,null,null,this.divData.form);
            obj.set_taborder("77");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfDS_CORP_ZIP_KOR","staDS_CORP_ZIP_KOR:8","100",null,"20","staDS_CORP_ZIP_ENG:8",null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("78");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfDS_SITE_ZIP_KOR","staDS_SITE_ZIP_KOR:8","187",null,"20","staDS_SITE_ZIP_ENG:8",null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("79");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfDS_CORP_ZIP_ENG","staDS_CORP_ZIP_ENG:8","100",null,"20","7",null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("80");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfDS_SITE_ZIP_ENG","staDS_SITE_ZIP_ENG:8","187",null,"20","7",null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("81");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","39.12%","divData:15","69","27",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:10","divData:15","69","27",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취소");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.edtDS_NAME_KOR","value","dsList","DS_NAME_KOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.edtDS_CORP_ADD_KOR","value","dsList","DS_CORP_ADD_KOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.edtDS_DEPT_KOR","value","dsList","DS_DEPT_KOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.edtDS_POSITION_KOR","value","dsList","DS_POSITION_KOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.edtDS_OCCUPATION_KOR","value","dsList","DS_OCCUPATION_KOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.edtDS_TEL_KOR","value","dsList","DS_TEL_KOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.edtDS_FAX_KOR","value","dsList","DS_FAX_KOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.edtDS_HANDPHONE_KOR","value","dsList","DS_HANDPHONE_KOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.edtDS_EMAIL_KOR","value","dsList","DS_EMAIL_KOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.edtDS_NAME_ENG","value","dsList","DS_NAME_ENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.edtDS_CORP_ADD_ENG","value","dsList","DS_CORP_ADD_ENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.edtDS_DEPT_ENG","value","dsList","DS_DEPT_ENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.edtDS_POSITION_ENG","value","dsList","DS_POSITION_ENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.edtDS_OCCUPATION_ENG","value","dsList","DS_OCCUPATION_ENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.edtDS_TEL_ENG","value","dsList","DS_TEL_ENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.edtDS_FAX_ENG","value","dsList","DS_FAX_ENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.edtDS_HANDPHONE_ENG","value","dsList","DS_HANDPHONE_ENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.edtDS_EMAIL_ENG","value","dsList","DS_EMAIL_ENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.edtDS_REQUEST","value","dsList","DS_REQUEST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.edtDS_CORP_KOR","value","dsList","DS_CORP_KOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.edtDS_SITE_ADD_KOR","value","dsList","DS_SITE_ADD_KOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.edtDS_CORP_ENG","value","dsList","DS_CORP_ENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.edtDS_SITE_ADD_ENG","value","dsList","DS_SITE_ADD_ENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.ccfDS_CORP_ZIP_KOR.form.CDTextBox","value","dsList","DS_CORP_ZIP_KOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.ccfDS_CORP_ZIP_KOR.form.DSTextBox","value","dsList","DS_CORP_ADD_KOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.ccfDS_SITE_ZIP_KOR.form.CDTextBox","value","dsList","DS_SITE_ZIP_KOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.ccfDS_SITE_ZIP_KOR.form.DSTextBox","value","dsList","DS_SITE_ADD_KOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.ccfDS_CORP_ZIP_ENG.form.CDTextBox","value","dsList","DS_CORP_ZIP_ENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.ccfDS_CORP_ZIP_ENG.form.DSTextBox","value","dsList","DS_CORP_ADD_ENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.ccfDS_SITE_ZIP_ENG.form.CDTextBox","value","dsList","DS_SITE_ZIP_ENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.ccfDS_SITE_ZIP_ENG.form.DSTextBox","value","dsList","DS_SITE_ADD_ENG");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAM_BUSINESSCARD_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.fv_NO_SEQ = "";
        this.fv_DT_REQUEST = "";

        this.fv_CD_CORP = "";
        this.fv_CD_DEPT = "";
        this.fv_ID_SABUN = "";
        this.fv_DS_HNAME = "";

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	this.ccfDS_CORP_ZIP_KOR.form.DSTextBox.set_visible(false);
        	this.ccfDS_SITE_ZIP_KOR.form.DSTextBox.set_visible(false);
        	this.ccfDS_CORP_ZIP_ENG.form.DSTextBox.set_visible(false);
        	this.ccfDS_SITE_ZIP_ENG.form.DSTextBox.set_visible(false);

        	this.fv_NO_SEQ = this.gfnNvl(this.getOwnerFrame().NO_SEQ, "");
        	this.fv_DT_REQUEST = this.gfnNvl(this.getOwnerFrame().DT_REQUEST, "");
        	this.fv_CD_CORP = this.gfnNvl(this.getOwnerFrame().CD_CORP, "");
        	this.fv_CD_DEPT = this.gfnNvl(this.getOwnerFrame().CD_DEPT, "");
        	this.fv_ID_SABUN = this.gfnNvl(this.getOwnerFrame().ID_SABUN, "");
        	this.fv_DS_HNAME = this.gfnNvl(this.getOwnerFrame().DS_HNAME, "");

        	if(!this.gfnIsNull(this.fv_NO_SEQ)){
        		this.dsSearch.setColumn(0, "ID_SABUN", this.fv_ID_SABUN);
        		this.dsSearch.setColumn(0, "DS_HNAME", this.fv_DS_HNAME);
        		this.ccfID_SABUN.set_enable(false);
        		this.fnSelect();
        	}else{
        		if(!this.gfnIsNull(this.fv_ID_SABUN)){
        			this.dsSearch.setColumn(0, "ID_SABUN", this.fv_ID_SABUN);
        			this.dsSearch.setColumn(0, "DS_HNAME", this.fv_DS_HNAME);
        			this.fnSelectBase();
        		}
        	}

        	if(this.FormInfo.GR_SEARCH == "9"){
        		//GR_SEARCH 가 9인경우에는 본인것만 신청 가능
        		this.ccfID_SABUN.set_enable(false);
        	}

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;

        	this.ccfDS_CORP_ZIP_KOR = this.divData.form.ccfDS_CORP_ZIP_KOR;
        	this.ccfDS_SITE_ZIP_KOR = this.divData.form.ccfDS_SITE_ZIP_KOR;
        	this.ccfDS_CORP_ZIP_ENG = this.divData.form.ccfDS_CORP_ZIP_ENG;
        	this.ccfDS_SITE_ZIP_ENG = this.divData.form.ccfDS_SITE_ZIP_ENG;

        	this.edtDS_NAME_KOR     = this.divData.form.edtDS_NAME_KOR    ;
        	this.edtDS_DEPT_KOR     = this.divData.form.edtDS_DEPT_KOR    ;
        	this.edtDS_POSITION_KOR = this.divData.form.edtDS_POSITION_KOR;
        	this.edtDS_NAME_ENG     = this.divData.form.edtDS_NAME_ENG    ;
        	this.edtDS_REQUEST	    = this.divData.form.edtDS_REQUEST	  ;

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelectBase = new Dataset();
        	this.dsSelectBase.addColumn("ID_SABUN", "string");

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("NO_SEQ", "int");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("DT_REQUEST", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("ID_USER", "string");
        	this.dsSelect.addColumn("TY_AUTH", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("NO_SEQ", "int");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("DT_REQUEST", "string");
        	this.dsSave.addColumn("DS_CORP_KOR", "string");
        	this.dsSave.addColumn("DS_CORP_ZIP_KOR", "string");
        	this.dsSave.addColumn("DS_CORP_ADD_KOR", "string");
        	this.dsSave.addColumn("DS_DEPT_KOR", "string");
        	this.dsSave.addColumn("DS_SITE_ZIP_KOR", "string");
        	this.dsSave.addColumn("DS_SITE_ADD_KOR", "string");
        	this.dsSave.addColumn("DS_NAME_KOR", "string");
        	this.dsSave.addColumn("DS_POSITION_KOR", "string");
        	this.dsSave.addColumn("DS_OCCUPATION_KOR", "string");
        	this.dsSave.addColumn("DS_TEL_KOR", "string");
        	this.dsSave.addColumn("DS_FAX_KOR", "string");
        	this.dsSave.addColumn("DS_HANDPHONE_KOR", "string");
        	this.dsSave.addColumn("DS_EMAIL_KOR", "string");
        	this.dsSave.addColumn("DS_CORP_ENG", "string");
        	this.dsSave.addColumn("DS_CORP_ZIP_ENG", "string");
        	this.dsSave.addColumn("DS_CORP_ADD_ENG", "string");
        	this.dsSave.addColumn("DS_DEPT_ENG", "string");
        	this.dsSave.addColumn("DS_SITE_ZIP_ENG", "string");
        	this.dsSave.addColumn("DS_SITE_ADD_ENG", "string");
        	this.dsSave.addColumn("DS_NAME_ENG", "string");
        	this.dsSave.addColumn("DS_POSITION_ENG", "string");
        	this.dsSave.addColumn("DS_OCCUPATION_ENG", "string");
        	this.dsSave.addColumn("DS_TEL_ENG", "string");
        	this.dsSave.addColumn("DS_FAX_ENG", "string");
        	this.dsSave.addColumn("DS_HANDPHONE_ENG", "string");
        	this.dsSave.addColumn("DS_EMAIL_ENG", "string");
        	this.dsSave.addColumn("DS_REQUEST", "string");
        	this.dsSave.addColumn("GR_SEARCH", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("TY_AUTH", "string");
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfDS_CORP_ZIP_KOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfDS_CORP_ZIP_KOR.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfDS_SITE_ZIP_KOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfDS_SITE_ZIP_KOR.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfDS_CORP_ZIP_ENG.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfDS_CORP_ZIP_ENG.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfDS_SITE_ZIP_ENG.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfDS_SITE_ZIP_ENG.AfterCDTextChanged = "fnAfterCDTextChanged";

        };


         /*
          *	기초데이타 조회
          */
        this.fnSelectBase = function() {

        	if (!this.fnSelectBaseValidate()) return false;

        	this.dsSelectBase.clearData();
        	this.dsSelectBase.addRow();
        	this.dsSelectBase.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));

         	var strSvcId    = "selectBase";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectBase=dsSelectBase";
        	var outData     = "dsBase=selectBase0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId ,
        						strSvcType ,
        						inProc,
        						inData ,
        						outData ,
        						strArg,
        						callBackFnc);
        }

        this.fnSelectBaseValidate = function(){
        	var sID_SABUN = this.dsSearch.getColumn(0, "ID_SABUN");
        	if(this.gfnIsNull(sID_SABUN)){
        		this.fnValidCallback = function(){
        			this.ccfID_SABUN.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("성명을 입력하세요.", "fnValidCallback");
        		return false;
        	}
        	return true;
        }

         /*
          *	등록된 데이타 조회
          */
        this.fnSelect = function() {
        	if(this.gfnIsNull(this.fv_NO_SEQ)
        			||this.gfnIsNull(this.fv_ID_SABUN)
        			||this.gfnIsNull(this.fv_DT_REQUEST) ) return;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "NO_SEQ", this.fv_NO_SEQ);
        	this.dsSelect.setColumn(0, "ID_SABUN", this.fv_ID_SABUN);
        	this.dsSelect.setColumn(0, "DT_REQUEST", this.fv_DT_REQUEST);
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	this.dsSelect.setColumn(0, "TY_AUTH", this.FormInfo.TY_AUTH);

         	var strSvcId    = "select";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId ,
        						strSvcType ,
        						inProc,
        						inData ,
        						outData ,
        						strArg,
        						callBackFnc);
        }


        this.btnOK_onclick = function(obj,e){
        	this.fnSave();
        };

        this.fnSave = function() {
        	if(this.dsList.rowcount == 0) return;
        	if (!this.fnSaveValid()) return;

        	this.dsSave.clearData();
        	var nrow = this.dsSave.addRow();

        	var nNO_SEQ = this.gfnNvl(this.dsList.getColumn(0, "NO_SEQ"), 0);
        	var flag = (nNO_SEQ == 0) ? "I" : "U";
        	this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        	this.dsSave.setColumn(nrow, "NO_SEQ", nNO_SEQ);
        	this.dsSave.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(0, "ID_SABUN"));
        	this.dsSave.setColumn(nrow, "DT_REQUEST", this.dsList.getColumn(0, "DT_REQUEST"));
        	this.dsSave.setColumn(nrow, "DS_CORP_KOR", this.dsList.getColumn(0, "DS_CORP_KOR"));
        	this.dsSave.setColumn(nrow, "DS_CORP_ZIP_KOR", this.dsList.getColumn(0, "DS_CORP_ZIP_KOR"));
        	this.dsSave.setColumn(nrow, "DS_CORP_ADD_KOR", this.dsList.getColumn(0, "DS_CORP_ADD_KOR"));
        	this.dsSave.setColumn(nrow, "DS_DEPT_KOR", this.dsList.getColumn(0, "DS_DEPT_KOR"));
        	this.dsSave.setColumn(nrow, "DS_SITE_ZIP_KOR", this.dsList.getColumn(0, "DS_SITE_ZIP_KOR"));
        	this.dsSave.setColumn(nrow, "DS_SITE_ADD_KOR", this.dsList.getColumn(0, "DS_SITE_ADD_KOR"));
        	this.dsSave.setColumn(nrow, "DS_NAME_KOR", this.dsList.getColumn(0, "DS_NAME_KOR"));
        	this.dsSave.setColumn(nrow, "DS_POSITION_KOR", this.dsList.getColumn(0, "DS_POSITION_KOR"));
        	this.dsSave.setColumn(nrow, "DS_OCCUPATION_KOR", this.dsList.getColumn(0, "DS_OCCUPATION_KOR"));
        	this.dsSave.setColumn(nrow, "DS_TEL_KOR", this.dsList.getColumn(0, "DS_TEL_KOR"));
        	this.dsSave.setColumn(nrow, "DS_FAX_KOR", this.dsList.getColumn(0, "DS_FAX_KOR"));
        	this.dsSave.setColumn(nrow, "DS_HANDPHONE_KOR", this.dsList.getColumn(0, "DS_HANDPHONE_KOR"));
        	this.dsSave.setColumn(nrow, "DS_EMAIL_KOR", this.dsList.getColumn(0, "DS_EMAIL_KOR"));
        	this.dsSave.setColumn(nrow, "DS_CORP_ENG", this.dsList.getColumn(0, "DS_CORP_ENG"));
        	this.dsSave.setColumn(nrow, "DS_CORP_ZIP_ENG", this.dsList.getColumn(0, "DS_CORP_ZIP_ENG"));
        	this.dsSave.setColumn(nrow, "DS_CORP_ADD_ENG", this.dsList.getColumn(0, "DS_CORP_ADD_ENG"));
        	this.dsSave.setColumn(nrow, "DS_DEPT_ENG", this.dsList.getColumn(0, "DS_DEPT_ENG"));
        	this.dsSave.setColumn(nrow, "DS_SITE_ZIP_ENG", this.dsList.getColumn(0, "DS_SITE_ZIP_ENG"));
        	this.dsSave.setColumn(nrow, "DS_SITE_ADD_ENG", this.dsList.getColumn(0, "DS_SITE_ADD_ENG"));
        	this.dsSave.setColumn(nrow, "DS_NAME_ENG", this.dsList.getColumn(0, "DS_NAME_ENG"));
        	this.dsSave.setColumn(nrow, "DS_POSITION_ENG", this.dsList.getColumn(0, "DS_POSITION_ENG"));
        	this.dsSave.setColumn(nrow, "DS_OCCUPATION_ENG", this.dsList.getColumn(0, "DS_OCCUPATION_ENG"));
        	this.dsSave.setColumn(nrow, "DS_TEL_ENG", this.dsList.getColumn(0, "DS_TEL_ENG"));
        	this.dsSave.setColumn(nrow, "DS_FAX_ENG", this.dsList.getColumn(0, "DS_FAX_ENG"));
        	this.dsSave.setColumn(nrow, "DS_HANDPHONE_ENG", this.dsList.getColumn(0, "DS_HANDPHONE_ENG"));
        	this.dsSave.setColumn(nrow, "DS_EMAIL_ENG", this.dsList.getColumn(0, "DS_EMAIL_ENG"));
        	this.dsSave.setColumn(nrow, "DS_REQUEST", this.dsList.getColumn(0, "DS_REQUEST"));
        	this.dsSave.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsSave.setColumn(nrow, "TY_AUTH", this.FormInfo.TY_AUTH);

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
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

        this.btnCANCLE_onclick = function(obj,e){
        	// 취소
        	this.getParentContext().close(false);
        };

        this.fnSaveValid = function(){
        	if(this.gfnIsNull(this.edtDS_NAME_KOR.value)) {
        		this.edtDS_NAME_KOR.setFocus();
        		this.gfnAlert("성명을 입력해주세요");
        		return false;
        	}
        	if(this.gfnIsNull(this.edtDS_DEPT_KOR.value)) {
        		this.edtDS_DEPT_KOR.setFocus();
        		this.gfnAlert("소속(그룹)을 입력해주세요");
        		return false;
        	}
        	if(this.gfnIsNull(this.edtDS_POSITION_KOR.value)) {
        		this.edtDS_POSITION_KOR.setFocus();
        		this.gfnAlert("직급을 입력해주세요");
        		return false;
        	}
        	if(this.gfnIsNull(this.edtDS_NAME_ENG.value)) {
        		this.edtDS_NAME_ENG.setFocus();
        		this.gfnAlert("성명(영문)을 입력해주세요");
        		return false;
        	}
        	if(this.gfnIsNull(this.edtDS_REQUEST.value)) {
        		this.edtDS_REQUEST.setFocus();
        		this.gfnAlert("사유를 입력해주세요");
        		return false;
        	}
        	return true;
        }
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(id == "ccfID_SABUN"){
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.gfnNvl(this.getOwnerFrame().CD_DEPT,""));
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnNvl(this.getOwnerFrame().CD_CORP,"%"));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP", "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        	}
        	else if(id == "ccfDS_CORP_ZIP_KOR"){
        	}
        	else if(id == "ccfDS_SITE_ZIP_KOR"){
        	}
        	else if(id == "ccfDS_CORP_ZIP_ENG"){
        	}
        	else if(id == "ccfDS_SITE_ZIP_ENG"){
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(id == "ccfID_SABUN"){
        // 		this.edtID_PERSON.set_value("");
         		if(arr.length >0){
        			this.fnSelectBase();
         		}else{
        		}
        	}
        	else if(id == "ccfDS_CORP_ZIP_KOR"){
        // 		this.ccfDS_CORP_ZIP_KOR.form.fnCodeFindClear();
        // 		this.dsList.setColumn(0, "DS_CORP_ADD_KOR", "");
        		if(arr.length >0){
        		}
        	}
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg){
        	if(svcID == "save") {
        		if (errorCode == 0) {
        			this.fnSaveAfter = function() {
        				this.getParentContext().close(true);
        			}
        			this.gfnAlert("저장되었습니다.", "fnSaveAfter");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "selectBase") {
        trace("this.dsBase.rowcount", this.dsBase.rowcount);
        		if(this.dsBase.rowcount == 0){
        			this.gfnAlert("사원정보가 없습니다.");
        			return;
        		}else{
        			this.dsList.clearData();
        			this.dsList.addRow();

        			this.dsList.setColumn(0,"ID_SABUN", this.dsBase.getColumn(0, "ID_SABUN"));

        			this.dsList.setColumn(0,"DS_CORP_KOR", this.dsBase.getColumn(0, "DS_CORP_KOR"));
        			this.dsList.setColumn(0,"DS_CORP_ZIP_KOR", this.dsBase.getColumn(0, "DS_CORP_ZIP_KOR"));
        			this.dsList.setColumn(0,"DS_CORP_ADD_KOR", this.dsBase.getColumn(0, "DS_CORP_ADD_KOR"));
        			this.dsList.setColumn(0,"DS_DEPT_KOR", this.dsBase.getColumn(0, "DS_DEPT_KOR"));
        			this.dsList.setColumn(0,"DS_SITE_ZIP_KOR", this.dsBase.getColumn(0, "DS_SITE_ZIP_KOR"));
        			this.dsList.setColumn(0,"DS_SITE_ADD_KOR", this.dsBase.getColumn(0, "DS_SITE_ADD_KOR"));
        			this.dsList.setColumn(0,"DS_NAME_KOR", this.dsBase.getColumn(0, "DS_NAME_KOR"));
        			this.dsList.setColumn(0,"DS_POSITION_KOR", this.dsBase.getColumn(0, "DS_POSITION_KOR"));
        			this.dsList.setColumn(0,"DS_OCCUPATION_KOR", this.dsBase.getColumn(0, "DS_OCCUPATION_KOR"));
        			this.dsList.setColumn(0,"DS_TEL_KOR", this.dsBase.getColumn(0, "DS_TEL_KOR"));
        			this.dsList.setColumn(0,"DS_FAX_KOR", this.dsBase.getColumn(0, "DS_FAX_KOR"));
        			this.dsList.setColumn(0,"DS_HANDPHONE_KOR", this.dsBase.getColumn(0, "DS_HANDPHONE_KOR"));
        			this.dsList.setColumn(0,"DS_EMAIL_KOR", this.dsBase.getColumn(0, "DS_EMAIL_KOR"));

        			this.dsList.setColumn(0,"DS_CORP_ENG", this.dsBase.getColumn(0, "DS_CORP_ENG"));
        			this.dsList.setColumn(0,"DS_CORP_ZIP_ENG", this.dsBase.getColumn(0, "DS_CORP_ZIP_ENG"));
        			this.dsList.setColumn(0,"DS_CORP_ADD_ENG", this.dsBase.getColumn(0, "DS_CORP_ADD_ENG"));
        			this.dsList.setColumn(0,"DS_DEPT_ENG", this.dsBase.getColumn(0, "DS_DEPT_ENG"));
        			this.dsList.setColumn(0,"DS_SITE_ZIP_ENG", this.dsBase.getColumn(0, "DS_SITE_ZIP_ENG"));
        			this.dsList.setColumn(0,"DS_SITE_ADD_ENG", this.dsBase.getColumn(0, "DS_SITE_ADD_ENG"));
        			this.dsList.setColumn(0,"DS_NAME_ENG", this.dsBase.getColumn(0, "DS_NAME_ENG"));
        			this.dsList.setColumn(0,"DS_POSITION_ENG", this.dsBase.getColumn(0, "DS_POSITION_ENG"));
        			this.dsList.setColumn(0,"DS_OCCUPATION_ENG", this.dsBase.getColumn(0, "DS_OCCUPATION_ENG"));
        			this.dsList.setColumn(0,"DS_TEL_ENG", this.dsBase.getColumn(0, "DS_TEL_ENG"));
        			this.dsList.setColumn(0,"DS_FAX_ENG", this.dsBase.getColumn(0, "DS_FAX_ENG"));
        			this.dsList.setColumn(0,"DS_HANDPHONE_ENG", this.dsBase.getColumn(0, "DS_HANDPHONE_ENG"));
        			this.dsList.setColumn(0,"DS_EMAIL_ENG", this.dsBase.getColumn(0, "DS_EMAIL_ENG"));

        		}
        	}else if(svcID == "select"){
        		if(this.dsList.rowcount >0){
        			var sTY_APPROVAL = this.dsList.getColumn(0, "TY_APPROVAL");
        // --01	신청
        // --02	승인
        // --03	승인취소
        			if(sTY_APPROVAL == "02"){
        				this.btnOK.set_enable(false);
        			}
        		}
        	}
        }

        this.dsSearch_onvaluechanged = function(obj,e){
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		//this.gfnGridClear(this.dxGrid);
        		this.dsList.clearData();
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.sta04.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staDS_EMAIL_KOR00.addEventHandler("onclick",this.sta05_onclick,this);
            this.divData.form.sta_BG_DS_REQUEST.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staDS_NAME_KOR.addEventHandler("onclick",this.sta05_onclick,this);
            this.divData.form.staDS_DEPT_KOR.addEventHandler("onclick",this.sta05_onclick,this);
            this.divData.form.staDS_CORP_ADD_KOR.addEventHandler("onclick",this.sta05_onclick,this);
            this.divData.form.staDS_POSITION_KOR.addEventHandler("onclick",this.sta05_onclick,this);
            this.divData.form.staDS_OCCUPATION_KOR.addEventHandler("onclick",this.sta05_onclick,this);
            this.divData.form.staDS_TEL_KOR.addEventHandler("onclick",this.sta05_onclick,this);
            this.divData.form.staDS_FAX_KOR.addEventHandler("onclick",this.sta05_onclick,this);
            this.divData.form.staDS_HANDPHONE_KOR.addEventHandler("onclick",this.sta05_onclick,this);
            this.divData.form.staDS_EMAIL_KOR.addEventHandler("onclick",this.sta05_onclick,this);
            this.divData.form.staDS_NAME_ENG.addEventHandler("onclick",this.sta05_onclick,this);
            this.divData.form.sta_BG_L_01.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staDS_CORP_ADD_ENG.addEventHandler("onclick",this.sta05_onclick,this);
            this.divData.form.sta_BG_L_02.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staDS_DEPT_ENG.addEventHandler("onclick",this.sta05_onclick,this);
            this.divData.form.sta_BG_L_03.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staDS_POSITION_ENG.addEventHandler("onclick",this.sta05_onclick,this);
            this.divData.form.sta_BG_L_04.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staDS_OCCUPATION_ENG.addEventHandler("onclick",this.sta05_onclick,this);
            this.divData.form.sta_BG_L_05.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staDS_TEL_ENG.addEventHandler("onclick",this.sta05_onclick,this);
            this.divData.form.sta_BG_L_06.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staDS_FAX_ENG.addEventHandler("onclick",this.sta05_onclick,this);
            this.divData.form.sta_BG_L_07.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staDS_HANDPHONE_ENG.addEventHandler("onclick",this.sta05_onclick,this);
            this.divData.form.sta_BG_L_08.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staDS_EMAIL_ENG.addEventHandler("onclick",this.sta05_onclick,this);
            this.divData.form.sta_BG_L_09.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.sta_BG_R_01.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.sta_BG_R_02.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.sta_BG_R_03.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.sta_BG_R_04.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.sta_BG_R_05.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.sta_BG_R_06.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.sta_BG_R_07.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.sta_BG_R_08.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.sta_BG_R_09.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staDS_CORP_KOR.addEventHandler("onclick",this.sta05_onclick,this);
            this.divData.form.staDS_CORP_ENG.addEventHandler("onclick",this.sta05_onclick,this);
            this.divData.form.sta_BG_DS_CORP_KOR.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.sta_BG_DS_CORP_ENG.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staDS_CORP_ZIP_KOR.addEventHandler("onclick",this.sta05_onclick,this);
            this.divData.form.staDS_CORP_ZIP_ENG.addEventHandler("onclick",this.sta05_onclick,this);
            this.divData.form.sta_BG_DS_CORP_ZIP_KOR.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.sta_BG_DS_CORP_ZIP_ENG.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staDS_SITE_ZIP_KOR.addEventHandler("onclick",this.sta05_onclick,this);
            this.divData.form.sta_BG_DS_SITE_ZIP_KOR.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staDS_SITE_ZIP_ENG.addEventHandler("onclick",this.sta05_onclick,this);
            this.divData.form.sta_BG_DS_SITE_ZIP_ENG.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staDS_SITE_ADD_KOR.addEventHandler("onclick",this.sta05_onclick,this);
            this.divData.form.sta_BG_DS_SITE_ADD_KOR.addEventHandler("onclick",this.sta23_onclick,this);
            this.divData.form.staDS_SITE_ADD_ENG.addEventHandler("onclick",this.sta05_onclick,this);
            this.divData.form.sta_BG_DS_SITE_ADD_ENG.addEventHandler("onclick",this.sta23_onclick,this);
            this.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAM_BUSINESSCARD_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
