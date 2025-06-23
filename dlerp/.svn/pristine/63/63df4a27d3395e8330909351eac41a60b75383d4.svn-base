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
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DQDPR_VENDOR_AP_IF_INSERT</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DQDPR_SAP_PARAM_INSERT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProcSap", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExport", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"IN_AKONT\" type=\"STRING\" size=\"256\"/><Column id=\"IN_CJKTW\" type=\"STRING\" size=\"256\"/><Column id=\"IN_EKGRP\" type=\"STRING\" size=\"256\"/><Column id=\"IN_FDGRV\" type=\"STRING\" size=\"256\"/><Column id=\"IN_FITYP\" type=\"STRING\" size=\"256\"/><Column id=\"IN_INTAD\" type=\"STRING\" size=\"256\"/><Column id=\"IN_J_1KFREPRE\" type=\"STRING\" size=\"256\"/><Column id=\"IN_J_1KFTBUS\" type=\"STRING\" size=\"256\"/><Column id=\"IN_J_1KFTIND\" type=\"STRING\" size=\"256\"/><Column id=\"IN_KTOKK\" type=\"STRING\" size=\"256\"/><Column id=\"IN_LFURL\" type=\"STRING\" size=\"256\"/><Column id=\"IN_NAME1\" type=\"STRING\" size=\"256\"/><Column id=\"IN_ORT01\" type=\"STRING\" size=\"256\"/><Column id=\"IN_PSTLZ\" type=\"STRING\" size=\"256\"/><Column id=\"IN_REGIO\" type=\"STRING\" size=\"256\"/><Column id=\"IN_SORTL\" type=\"STRING\" size=\"256\"/><Column id=\"IN_STCD1\" type=\"STRING\" size=\"256\"/><Column id=\"IN_STCD2\" type=\"STRING\" size=\"256\"/><Column id=\"IN_STRAS\" type=\"STRING\" size=\"256\"/><Column id=\"IN_TELF1\" type=\"STRING\" size=\"256\"/><Column id=\"IN_TELF2\" type=\"STRING\" size=\"256\"/><Column id=\"IN_TLFNS\" type=\"STRING\" size=\"256\"/><Column id=\"IN_TLFXS\" type=\"STRING\" size=\"256\"/><Column id=\"IN_ZTERM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWALFA1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100.00%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("매입(SAP) 거래처코드 생성");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divData01","0","staTITLE:10",null,"140","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","885","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("8");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staIN_STCD2","0","staTITLE:5","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("9");
            obj.set_text("사업자등록번호");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staIN_J_1KFREPRE","0","staIN_STCD2:-1","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("10");
            obj.set_text("대표자이름");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staIN_REGIO","0","staIN_J_1KFREPRE:-1","110","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("11");
            obj.set_text("지역");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBgIN_STCD2","staIN_STCD2:-1","staTITLE:5","200","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBgIN_J_1KFREPRE","staIN_J_1KFREPRE:-1","staBgIN_STCD2:-1","200","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBgIN_REGIO","staIN_REGIO:-1","staBgIN_J_1KFREPRE:-1","200","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("ctxtIN_STCD2","staIN_STCD2:4","staTITLE:10","190","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("0");
            obj.set_value("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("ctxtIN_J_1KFREPRE","staIN_J_1KFREPRE:4","ctxtIN_STCD2:9","190","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("3");
            obj.set_value("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Div("ccfIN_REGIO","staIN_REGIO:5","ctxtIN_J_1KFREPRE:9","189","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DQ_S05");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staIN_NAME1","staBgIN_STCD2:-1","staTITLE:5","90","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("15");
            obj.set_text("회사명");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staIN_STCD1","staBgIN_J_1KFREPRE:-1","staIN_NAME1:-1","90","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("16");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            obj.set_textDecoration("none");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staIN_PSTLZ","staBgIN_J_1KFREPRE:-1","staIN_STCD1:-1","90","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("17");
            obj.set_text("우편번호");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBgIN_NAME1","staIN_NAME1:-1","staTITLE:5","200","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBgIN_STCD1","staIN_STCD1:-1","staBgIN_NAME1:-1","200","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBgIN_PSTLZ","staIN_PSTLZ:-1","staBgIN_STCD1:-1","200","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("ctxtIN_NAME1","staIN_NAME1:4","staTITLE:10","190","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("ctxtIN_STCD1","staIN_STCD1:4","ctxtIN_NAME1:9","190","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("4");
            obj.set_value("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Div("ccfIN_PSTLZ","staIN_PSTLZ:4","ctxtIN_STCD1:9","190","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staIN_TELF1","staBgIN_NAME1:-1","staTITLE:5","90","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("21");
            obj.set_text("전화번호1");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staSPACE01","staBgIN_STCD1:-1","staIN_TELF1:-1","90","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("22");
            obj.set_text("");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staIN_STRAS","staBgIN_PSTLZ:-1","staSPACE01:-1","90","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("23");
            obj.set_text("상세주소");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBgIN_TELF1","staIN_TELF1:-1","staTITLE:5","200","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBgSPACE01","staSPACE01:-1","staBgIN_TELF1:-1","200","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Static("staBgIN_STRAS","staIN_STRAS:-1","staBgSPACE01:-1","200","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("ctxtIN_TELF1","staIN_TELF1:4","staTITLE:10","190","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("2");
            obj.set_value("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("ctxtIN_STRAS","staIN_STRAS:4","ctxtIN_STCD1:9","190","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("7");
            obj.set_value("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Div("divData02","0","divData01:5",null,"185","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","884","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("0");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staIN_KTOKK","0","staTITLE:5","110","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("1");
            obj.set_text("공급업체계정그룹");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staIN_J_1KFTBUS","0","staIN_KTOKK:-1","110","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("2");
            obj.set_text("업태");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staIN_EKGRP","0","staIN_J_1KFTBUS:-1","110","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("3");
            obj.set_text("구매그룹");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staIN_FDGRV","0","staIN_EKGRP:-1","110","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("4");
            obj.set_text("계획그룹");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBgIN_KTOKK","staIN_KTOKK:-1","staTITLE:5","200","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBgIN_J_1KFTBUS","staIN_J_1KFTBUS:-1","staBgIN_KTOKK:-1","200","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBgIN_EKGRP","staIN_EKGRP:-1","staBgIN_J_1KFTBUS:-1","200","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBgIN_FDGRV","staIN_FDGRV:-1","staBgIN_EKGRP:-1","200","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Div("ccfIN_KTOKK","staIN_KTOKK:4","staTITLE:10","190","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DQ_S01");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("8");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Edit("ctxtIN_J_1KFTBUS","staIN_J_1KFTBUS:4","ccfIN_KTOKK:9","190","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("10");
            obj.set_value("");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Div("ccfIN_EKGRP","staIN_EKGRP:4","ctxtIN_J_1KFTBUS:9","190","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DQ_S02");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("12");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Div("ccfIN_FDGRV","staIN_FDGRV:4","ccfIN_EKGRP:9","190","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DQ_S04");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("15");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staIN_LFURL","staBgIN_KTOKK:-1","staTITLE:5","90","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("19");
            obj.set_text("이메일");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staIN_J_1KFTIND","staBgIN_J_1KFTBUS:-1","staIN_LFURL:-1","90","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("20");
            obj.set_text("업종");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staIN_FITYP","staBgIN_EKGRP:-1","staIN_J_1KFTIND:-1","90","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("21");
            obj.set_text("세금유형");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staIN_ZTERM","staBgIN_FDGRV:-1","staIN_FITYP:-1","90","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("22");
            obj.set_text("지급조건");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBgIN_LFURL","staIN_LFURL:-1","staTITLE:5","200","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBgIN_J_1KFTIND","staIN_J_1KFTIND:-1","staBgIN_LFURL:-1","200","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBgIN_FITYP","staIN_FITYP:-1","staBgIN_J_1KFTIND:-1","200","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBgIN_ZTERM","staIN_ZTERM:-1","staBgIN_FITYP:-1","200","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Edit("ctxtIN_LFURL","staIN_LFURL:4","staTITLE:10","190","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("9");
            obj.set_value("");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Edit("ctxtIN_J_1KFTIND","staIN_J_1KFTIND:4","ctxtIN_LFURL:9","190","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("11");
            obj.set_value("");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Div("ccfIN_FITYP","staIN_FITYP:4","ctxtIN_J_1KFTIND:9","190","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DQ_S03");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("13");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Div("ccfIN_ZTERM","staIN_ZTERM:4","ccfIN_FITYP:9","190","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DH_S06");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("16");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staSPACE00","staBgIN_J_1KFTIND:-1","staTITLE:5","90","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("27");
            obj.set_text("");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staSPACE01","staBgIN_J_1KFTIND:-1","staSPACE00:-1","90","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("28");
            obj.set_text("");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staIN_AKONT","staBgIN_FITYP:-1","staSPACE01:-1","90","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("29");
            obj.set_text("조정계정");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staIN_CJKTW","staBgIN_ZTERM:-1","staIN_AKONT:-1","90","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("30");
            obj.set_text("지급방법");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBgSPACE00","staSPACE00:-1","staTITLE:5","200","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBgSPACE01","staSPACE01:-1","staBgSPACE00:-1","200","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBgIN_AKONT","staIN_AKONT:-1","staBgSPACE01:-1","200","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBgIN_CJKTW","staIN_CJKTW:-1","staBgIN_AKONT:-1","200","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Div("ccfIN_AKONT","staIN_AKONT:4","ctxtIN_J_1KFTIND:9","190","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DQ_S07");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("14");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Div("ccfIN_CJKTW","staIN_CJKTW:4","ccfIN_AKONT:9","190","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DQ_S06");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("17");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Button("btnOk","35.33%","divData02:10","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","53.33%","divData02:10","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.divData01.form.ctxtIN_STCD2","value","dsList","IN_STCD2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.divData01.form.ctxtIN_NAME1","value","dsList","IN_NAME1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divData01.form.ctxtIN_TELF1","value","dsList","IN_TELF1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divData01.form.ctxtIN_J_1KFREPRE","value","dsList","IN_J_1KFREPRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divData01.form.ccfIN_PSTLZ.form.CDTextBox","value","dsList","IN_PSTLZ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divData01.form.ctxtIN_STRAS","value","dsList","IN_STRAS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divData01.form.ccfIN_REGIO.form.CDTextBox","value","dsList","IN_REGIO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divData02.form.ccfIN_KTOKK.form.CDTextBox","value","dsList","IN_KTOKK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divData02.form.ctxtIN_LFURL","value","dsList","IN_LFURL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divData01.form.ctxtIN_STCD1","value","dsList","IN_STCD1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divData02.form.ctxtIN_J_1KFTBUS","value","dsList","IN_J_1KFTBUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divData02.form.ctxtIN_J_1KFTIND","value","dsList","IN_J_1KFTIND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divData02.form.ccfIN_EKGRP.form.CDTextBox","value","dsList","IN_EKGRP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divData02.form.ccfIN_FITYP.form.CDTextBox","value","dsList","IN_FITYP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divData02.form.ccfIN_AKONT.form.CDTextBox","value","dsList","IN_AKONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divData02.form.ccfIN_FDGRV.form.CDTextBox","value","dsList","IN_FDGRV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divData02.form.ccfIN_ZTERM.form.CDTextBox","value","dsList","IN_ZTERM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divData02.form.ccfIN_CJKTW.form.CDTextBox","value","dsList","IN_CJKTW");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DQD_VENDOR_AP_CREATE.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        //this.beAfGun = "";	// sap처리전에는 값이 [be]가 셋팅되고 처리후에는 [af]가 셋팅된다(이력저장 구분용)

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

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Select.set_enable(false);
        	this.FormBtns.Save.set_enable(false);
        	this.FormBtns.Add.set_enable(false);
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
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelectSap = new Dataset();
        	this.dsSelectSap.addColumn("IN_AKONT", "string");
        	this.dsSelectSap.addColumn("IN_CJKTW", "string");
        	this.dsSelectSap.addColumn("IN_EKGRP", "string");
        	this.dsSelectSap.addColumn("IN_FDGRV", "string");
        	this.dsSelectSap.addColumn("IN_FITYP", "string");
        	this.dsSelectSap.addColumn("IN_INTAD", "string");
        	this.dsSelectSap.addColumn("IN_J_1KFREPRE", "string");
        	this.dsSelectSap.addColumn("IN_J_1KFTBUS", "string");
        	this.dsSelectSap.addColumn("IN_J_1KFTIND", "string");
        	this.dsSelectSap.addColumn("IN_KTOKK", "string");
        	this.dsSelectSap.addColumn("IN_LFURL", "string");
        	this.dsSelectSap.addColumn("IN_NAME1", "string");
        	this.dsSelectSap.addColumn("IN_ORT01", "string");
        	this.dsSelectSap.addColumn("IN_PSTLZ", "string");
        	this.dsSelectSap.addColumn("IN_REGIO", "string");
        	this.dsSelectSap.addColumn("IN_SORTL", "string");
        	this.dsSelectSap.addColumn("IN_STCD1", "string");
        	this.dsSelectSap.addColumn("IN_STCD2", "string");
        	this.dsSelectSap.addColumn("IN_STRAS", "string");
        	this.dsSelectSap.addColumn("IN_TELF1", "string");
        	this.dsSelectSap.addColumn("IN_TELF2", "string");
        	this.dsSelectSap.addColumn("IN_TLFNS", "string");
        	this.dsSelectSap.addColumn("IN_TLFXS", "string");
        	this.dsSelectSap.addColumn("IN_ZTERM", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("LIFNR", "string");
        	this.dsInsert.addColumn("MANDT", "string");
        	this.dsInsert.addColumn("LAND1", "string");
        	this.dsInsert.addColumn("NAME1", "string");
        	this.dsInsert.addColumn("NAME2", "string");
        	this.dsInsert.addColumn("NAME3", "string");
        	this.dsInsert.addColumn("NAME4", "string");
        	this.dsInsert.addColumn("ORT01", "string");
        	this.dsInsert.addColumn("ORT02", "string");
        	this.dsInsert.addColumn("PFACH", "string");
        	this.dsInsert.addColumn("PSTL2", "string");
        	this.dsInsert.addColumn("PSTLZ", "string");
        	this.dsInsert.addColumn("REGIO", "string");
        	this.dsInsert.addColumn("SORTL", "string");
        	this.dsInsert.addColumn("STRAS", "string");
        	this.dsInsert.addColumn("ADRNR", "string");
        	this.dsInsert.addColumn("MCOD1", "string");
        	this.dsInsert.addColumn("MCOD2", "string");
        	this.dsInsert.addColumn("MCOD3", "string");
        	this.dsInsert.addColumn("ANRED", "string");
        	this.dsInsert.addColumn("BAHNS", "string");
        	this.dsInsert.addColumn("BBBNR", "string");
        	this.dsInsert.addColumn("BBSNR", "string");
        	this.dsInsert.addColumn("BEGRU", "string");
        	this.dsInsert.addColumn("BRSCH", "string");
        	this.dsInsert.addColumn("BUBKZ", "string");
        	this.dsInsert.addColumn("DATLT", "string");
        	this.dsInsert.addColumn("DTAMS", "string");
        	this.dsInsert.addColumn("DTAWS", "string");
        	this.dsInsert.addColumn("ERDAT", "string");
        	this.dsInsert.addColumn("ERNAM", "string");
        	this.dsInsert.addColumn("ESRNR", "string");
        	this.dsInsert.addColumn("KONZS", "string");
        	this.dsInsert.addColumn("KTOKK", "string");
        	this.dsInsert.addColumn("KUNNR", "string");
        	this.dsInsert.addColumn("LNRZA", "string");
        	this.dsInsert.addColumn("LOEVM", "string");
        	this.dsInsert.addColumn("SPERR", "string");
        	this.dsInsert.addColumn("SPERM", "string");
        	this.dsInsert.addColumn("SPRAS", "string");
        	this.dsInsert.addColumn("STCD1", "string");
        	this.dsInsert.addColumn("STCD2", "string");
        	this.dsInsert.addColumn("STKZA", "string");
        	this.dsInsert.addColumn("STKZU", "string");
        	this.dsInsert.addColumn("TELBX", "string");
        	this.dsInsert.addColumn("TELF1", "string");
        	this.dsInsert.addColumn("TELF2", "string");
        	this.dsInsert.addColumn("TELFX", "string");
        	this.dsInsert.addColumn("TELTX", "string");
        	this.dsInsert.addColumn("TELX1", "string");
        	this.dsInsert.addColumn("XCPDK", "string");
        	this.dsInsert.addColumn("XZEMP", "string");
        	this.dsInsert.addColumn("VBUND", "string");
        	this.dsInsert.addColumn("FISKN", "string");
        	this.dsInsert.addColumn("STCEG", "string");
        	this.dsInsert.addColumn("STKZN", "string");
        	this.dsInsert.addColumn("SPERQ", "string");
        	this.dsInsert.addColumn("GBORT", "string");
        	this.dsInsert.addColumn("GBDAT", "string");
        	this.dsInsert.addColumn("SEXKZ", "string");
        	this.dsInsert.addColumn("KRAUS", "string");
        	this.dsInsert.addColumn("REVDB", "string");
        	this.dsInsert.addColumn("QSSYS", "string");
        	this.dsInsert.addColumn("KTOCK", "string");
        	this.dsInsert.addColumn("PFORT", "string");
        	this.dsInsert.addColumn("WERKS", "string");
        	this.dsInsert.addColumn("LTSNA", "string");
        	this.dsInsert.addColumn("WERKR", "string");
        	this.dsInsert.addColumn("PLKAL", "string");
        	this.dsInsert.addColumn("DUEFL", "string");
        	this.dsInsert.addColumn("TXJCD", "string");
        	this.dsInsert.addColumn("SPERZ", "string");
        	this.dsInsert.addColumn("SCACD", "string");
        	this.dsInsert.addColumn("SFRGR", "string");
        	this.dsInsert.addColumn("LZONE", "string");
        	this.dsInsert.addColumn("XLFZA", "string");
        	this.dsInsert.addColumn("DLGRP", "string");
        	this.dsInsert.addColumn("FITYP", "string");
        	this.dsInsert.addColumn("STCDT", "string");
        	this.dsInsert.addColumn("REGSS", "string");
        	this.dsInsert.addColumn("ACTSS", "string");
        	this.dsInsert.addColumn("STCD3", "string");
        	this.dsInsert.addColumn("STCD4", "string");
        	this.dsInsert.addColumn("IPISP", "string");
        	this.dsInsert.addColumn("TAXBS", "string");
        	this.dsInsert.addColumn("PROFS", "string");
        	this.dsInsert.addColumn("STGDL", "string");
        	this.dsInsert.addColumn("EMNFR", "string");
        	this.dsInsert.addColumn("LFURL", "string");
        	this.dsInsert.addColumn("J_1KFREPRE", "string");
        	this.dsInsert.addColumn("J_1KFTBUS", "string");
        	this.dsInsert.addColumn("J_1KFTIND", "string");
        	this.dsInsert.addColumn("CONFS", "string");
        	this.dsInsert.addColumn("UPDAT", "string");
        	this.dsInsert.addColumn("UPTIM", "string");
        	this.dsInsert.addColumn("NODEL", "string");
        	this.dsInsert.addColumn("QSSYSDAT", "string");
        	this.dsInsert.addColumn("PODKZB", "string");
        	this.dsInsert.addColumn("FISKU", "string");
        	this.dsInsert.addColumn("STENR", "string");
        	this.dsInsert.addColumn("CARRIER_CONF", "string");
        	this.dsInsert.addColumn("J_SC_CAPITAL", "string");
        	this.dsInsert.addColumn("J_SC_CURRENCY", "string");
        	this.dsInsert.addColumn("ALC", "string");
        	this.dsInsert.addColumn("PMT_OFFICE", "string");
        	this.dsInsert.addColumn("PSOFG", "string");
        	this.dsInsert.addColumn("PSOIS", "string");
        	this.dsInsert.addColumn("PSON1", "string");
        	this.dsInsert.addColumn("PSON2", "string");
        	this.dsInsert.addColumn("PSON3", "string");
        	this.dsInsert.addColumn("PSOVN", "string");
        	this.dsInsert.addColumn("PSOTL", "string");
        	this.dsInsert.addColumn("PSOHS", "string");
        	this.dsInsert.addColumn("PSOST", "string");
        	this.dsInsert.addColumn("TRANSPORT_CHAIN", "string");
        	this.dsInsert.addColumn("STAGING_TIME", "string");
        	this.dsInsert.addColumn("SCHEDULING_TYPE", "string");
        	this.dsInsert.addColumn("SUBMI_RELEVANT", "string");
        	this.dsInsert.addColumn("ID_USER", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("PARAM", "string");
        }

        // sap 보낸정보를 저장한다
        this.fnExec = function() {

        	this.dsExec.clearData();

        	this.dsExec.addRow();

        	var paramVal =
        	"<IN_AKONT:" + this.dsList.getColumn(0, "IN_AKONT") +
        	"><IN_CJKTW:" + this.dsList.getColumn(0, "IN_CJKTW") +
        	"><IN_EKGRP:" + this.dsList.getColumn(0, "IN_EKGRP") +
        	"><IN_FDGRV:" + this.dsList.getColumn(0, "IN_FDGRV") +
        	"><IN_FITYP:" + this.dsList.getColumn(0, "IN_FITYP") +
        	"><IN_INTAD:" + "" +
        	"><IN_J_1KFREPRE:" + this.dsList.getColumn(0, "IN_J_1KFREPRE") +
        	"><IN_J_1KFTBUS:" + this.dsList.getColumn(0, "IN_J_1KFTBUS") +
        	"><IN_J_1KFTIND:" + this.dsList.getColumn(0, "IN_J_1KFTIND") +
        	"><IN_KTOKK:" + this.dsList.getColumn(0, "IN_KTOKK") +
        	"><IN_LFURL:" + this.dsList.getColumn(0, "IN_LFURL") +
        	"><IN_NAME1:" + this.dsList.getColumn(0, "IN_NAME1") +
        	"><IN_ORT01:" + this.dsList.getColumn(0, "IN_ORT01") +
        	"><IN_PSTLZ:" + this.dsList.getColumn(0, "IN_PSTLZ") +
        	"><IN_REGIO:" + this.dsList.getColumn(0, "IN_REGIO") +
        	"><IN_SORTL:" + "정렬필드" +
        	"><IN_STCD1:" + this.dsList.getColumn(0, "IN_STCD1") +
        	"><IN_STCD2:" + this.dsList.getColumn(0, "IN_STCD2") +
        	"><IN_STRAS:" + this.divData.form.divData01.form.ccfIN_PSTLZ.form.DSTextBox.text + " "+ this.dsList.getColumn(0, "IN_STRAS") +
        	"><IN_TELF1:" + this.dsList.getColumn(0, "IN_TELF1") +
        	"><IN_TELF2:" + "" +
        	"><IN_TLFNS:" + "" +
        	"><IN_TLFXS:" + "" +
        	"><IN_ZTERM:" + this.dsList.getColumn(0, "IN_ZTERM") +
        	"><RTNCD:" + this.dsExport.getColumn(0, "RTNCD") +
        	"><RTNMSG:" + this.dsExport.getColumn(0, "RTNMSG") + ">";
        	/*
        	if(this.dsExport.rowcount > 0){
        		paramVal = paramVal +
        		"<RTNCD:" + this.dsExport.getColumn(0, "RTNCD") +
        		"><RTNMSG:" + this.dsExport.getColumn(0, "RTNMSG") + ">";
        	}
        	*/

        	this.dsExec.setColumn(0, "PARAM", paramVal);

        	if (this.dsExec.rowcount == 0) return;

        	var strSvcId    = "exec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "exec=dsExec";
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

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
          /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        }
        /************************************************************************
         * Validate
         ************************************************************************/

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "sap") {
        		if(this.dsExport.rowcount > 0) {
        			this.fnExec();
        			/*
        			if(this.dsExport.getColumn(0, "RTNCD") == "S")
        			{
        				this.fnSapSub();
        			}
        			else
        			{
        				this.gfnAlert(this.dsExport.getColumn(0, "RTNMSG"));
        			}
        			*/
        		}
        		else
        		{
        			this.gfnAlert("반환된 데이터가 없습니다.");
        		}

        	}
        	else if (svcID == "sap1") {
        		if(this.dsExport.rowcount > 0) {
        			if(this.dsExport.getColumn(0, "RETURN").substr(0,1) == "T")
        			{
        				this.fnInsert();
        			}
        			else
        			{
        				this.gfnAlert(this.dsExport.getColumn(0, "RETURN"));
        			}
        		}
        		else
        		{
        			this.gfnAlert("반환된 데이터가 없습니다.");
        		}
        	}
        	else if(svcID == "insert") {
        		if(errorCode == 0) {
        			//this.beAfGun = "af";	// sap처리후 구분값 셋팅
        			//this.fnExec();
        			this.getParentContext().close(true);
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "exec") {
        		if(errorCode == 0) {
        			if(this.dsExport.getColumn(0, "RTNCD") == "S")
        			{
        				this.fnSapSub();
        			}
        			else
        			{
        				this.gfnAlert(this.dsExport.getColumn(0, "RTNMSG"));
        			}
        			/*
        			if(this.beAfGun == "be"){
        				this.fnSap();
        			}else{
        				this.getParentContext().close(true);
        			}
        			*/
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.fnSap = function() {

        	this._dsProcSap.clearData();
        	var nrow = this._dsProcSap.addRow();
        	this._dsProcSap.setColumn(nrow, "TARGET", "select");
        	this._dsProcSap.setColumn(nrow, "SP", "ZVENDOR02_0012");

        	nrow = this.dsSelectSap.addRow();

        	// IN 파라미터 셋팅
        	this.dsSelectSap.setColumn(nrow, "IN_AKONT", this.dsList.getColumn(0, "IN_AKONT"));
        	this.dsSelectSap.setColumn(nrow, "IN_CJKTW", this.dsList.getColumn(0, "IN_CJKTW"));
        	this.dsSelectSap.setColumn(nrow, "IN_EKGRP", this.dsList.getColumn(0, "IN_EKGRP"));
        	this.dsSelectSap.setColumn(nrow, "IN_FDGRV", this.dsList.getColumn(0, "IN_FDGRV"));
        	this.dsSelectSap.setColumn(nrow, "IN_FITYP", this.dsList.getColumn(0, "IN_FITYP"));
        	this.dsSelectSap.setColumn(nrow, "IN_INTAD", "");
        	this.dsSelectSap.setColumn(nrow, "IN_J_1KFREPRE", this.dsList.getColumn(0, "IN_J_1KFREPRE"));
        	this.dsSelectSap.setColumn(nrow, "IN_J_1KFTBUS", this.dsList.getColumn(0, "IN_J_1KFTBUS"));
        	this.dsSelectSap.setColumn(nrow, "IN_J_1KFTIND", this.dsList.getColumn(0, "IN_J_1KFTIND"));
        	this.dsSelectSap.setColumn(nrow, "IN_KTOKK", this.dsList.getColumn(0, "IN_KTOKK"));
        	this.dsSelectSap.setColumn(nrow, "IN_LFURL", this.dsList.getColumn(0, "IN_LFURL"));
        	this.dsSelectSap.setColumn(nrow, "IN_NAME1", this.dsList.getColumn(0, "IN_NAME1"));
        	this.dsSelectSap.setColumn(nrow, "IN_ORT01", this.dsList.getColumn(0, "IN_REGIO"));
        	this.dsSelectSap.setColumn(nrow, "IN_PSTLZ", this.dsList.getColumn(0, "IN_PSTLZ"));
        	this.dsSelectSap.setColumn(nrow, "IN_REGIO", this.dsList.getColumn(0, "IN_REGIO"));
        	this.dsSelectSap.setColumn(nrow, "IN_SORTL", "정렬필드");
        	this.dsSelectSap.setColumn(nrow, "IN_STCD1", this.dsList.getColumn(0, "IN_STCD1"));
        	this.dsSelectSap.setColumn(nrow, "IN_STCD2", this.dsList.getColumn(0, "IN_STCD2"));
        	this.dsSelectSap.setColumn(nrow, "IN_STRAS", this.divData.form.divData01.form.ccfIN_PSTLZ.form.DSTextBox.text + " "+ this.dsList.getColumn(0, "IN_STRAS"));
        	this.dsSelectSap.setColumn(nrow, "IN_TELF1", this.dsList.getColumn(0, "IN_TELF1"));
        	this.dsSelectSap.setColumn(nrow, "IN_TELF2", "");
        	this.dsSelectSap.setColumn(nrow, "IN_TLFNS", "");
        	this.dsSelectSap.setColumn(nrow, "IN_TLFXS", "");
        	this.dsSelectSap.setColumn(nrow, "IN_ZTERM", this.dsList.getColumn(0, "IN_ZTERM"));

        	// SAP 호출
        	var strSvcId    = "sap";
        	var strSvcType  = "sap";
        	var inProc		= "_dsProcSap";
        	var inData      = "select=dsSelectSap";
        	var outData     = "dsExport=export";
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


        this.fnSapSub = function() {

        	this._dsProcSap.clearData();
        	var nrow = this._dsProcSap.addRow();
        	this._dsProcSap.setColumn(nrow, "TARGET", "select");
        	this._dsProcSap.setColumn(nrow, "SP", "ZSUAS_EDI02");

        	this.dsSelectSap1 = new Dataset();
        	this.dsSelectSap1.addColumn("PLIFNR", "string");

        	nrow = this.dsSelectSap1.addRow();
        	// IN 파라미터 셋팅
        	this.dsSelectSap1.setColumn(nrow, "PLIFNR", this.dsExport.getColumn(0, "RTNCD1"));

        	// SAP 호출
        	var strSvcId    = "sap1";
        	var strSvcType  = "sap";
        	var inProc		= "_dsProcSap";
        	var inData      = "select=dsSelectSap1";
        	var outData     = "dsExport=export dsWALFA1=WALFA1";
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

        this.fnInsert = function()
        {
        	this.dsInsert.clearData();

        	var nrow = this.dsInsert.addRow();
        	this.dsInsert.setColumn(nrow, "LIFNR", this.dsWALFA1.getColumn(0, "LIFNR"));
        	this.dsInsert.setColumn(nrow, "MANDT", this.dsWALFA1.getColumn(0, "MANDT"));
        	this.dsInsert.setColumn(nrow, "LAND1", this.dsWALFA1.getColumn(0, "LAND1"));
        	this.dsInsert.setColumn(nrow, "NAME1", this.dsWALFA1.getColumn(0, "NAME1"));
        	this.dsInsert.setColumn(nrow, "NAME2", this.dsWALFA1.getColumn(0, "NAME2"));
        	this.dsInsert.setColumn(nrow, "NAME3", this.dsWALFA1.getColumn(0, "NAME3"));
        	this.dsInsert.setColumn(nrow, "NAME4", this.dsWALFA1.getColumn(0, "NAME4"));
        	this.dsInsert.setColumn(nrow, "ORT01", this.dsWALFA1.getColumn(0, "ORT01"));
        	this.dsInsert.setColumn(nrow, "ORT02", this.dsWALFA1.getColumn(0, "ORT02"));
        	this.dsInsert.setColumn(nrow, "PFACH", this.dsWALFA1.getColumn(0, "PFACH"));
        	this.dsInsert.setColumn(nrow, "PSTL2", this.dsWALFA1.getColumn(0, "PSTL2"));
        	this.dsInsert.setColumn(nrow, "PSTLZ", this.dsWALFA1.getColumn(0, "PSTLZ"));
        	this.dsInsert.setColumn(nrow, "REGIO", this.dsWALFA1.getColumn(0, "REGIO"));
        	this.dsInsert.setColumn(nrow, "SORTL", this.dsWALFA1.getColumn(0, "SORTL"));
        	this.dsInsert.setColumn(nrow, "STRAS", this.dsWALFA1.getColumn(0, "STRAS"));
        	this.dsInsert.setColumn(nrow, "ADRNR", this.dsWALFA1.getColumn(0, "ADRNR"));
        	this.dsInsert.setColumn(nrow, "MCOD1", this.dsWALFA1.getColumn(0, "MCOD1"));
        	this.dsInsert.setColumn(nrow, "MCOD2", this.dsWALFA1.getColumn(0, "MCOD2"));
        	this.dsInsert.setColumn(nrow, "MCOD3", this.dsWALFA1.getColumn(0, "MCOD3"));
        	this.dsInsert.setColumn(nrow, "ANRED", this.dsWALFA1.getColumn(0, "ANRED"));
        	this.dsInsert.setColumn(nrow, "BAHNS", this.dsWALFA1.getColumn(0, "BAHNS"));
        	this.dsInsert.setColumn(nrow, "BBBNR", this.dsWALFA1.getColumn(0, "BBBNR"));
        	this.dsInsert.setColumn(nrow, "BBSNR", this.dsWALFA1.getColumn(0, "BBSNR"));
        	this.dsInsert.setColumn(nrow, "BEGRU", this.dsWALFA1.getColumn(0, "BEGRU"));
        	this.dsInsert.setColumn(nrow, "BRSCH", this.dsWALFA1.getColumn(0, "BRSCH"));
        	this.dsInsert.setColumn(nrow, "BUBKZ", this.dsWALFA1.getColumn(0, "BUBKZ"));
        	this.dsInsert.setColumn(nrow, "DATLT", this.dsWALFA1.getColumn(0, "DATLT"));
        	this.dsInsert.setColumn(nrow, "DTAMS", this.dsWALFA1.getColumn(0, "DTAMS"));
        	this.dsInsert.setColumn(nrow, "DTAWS", this.dsWALFA1.getColumn(0, "DTAWS"));
        	this.dsInsert.setColumn(nrow, "ERDAT", this.dsWALFA1.getColumn(0, "ERDAT"));
        	this.dsInsert.setColumn(nrow, "ERNAM", this.dsWALFA1.getColumn(0, "ERNAM"));
        	this.dsInsert.setColumn(nrow, "ESRNR", this.dsWALFA1.getColumn(0, "ESRNR"));
        	this.dsInsert.setColumn(nrow, "KONZS", this.dsWALFA1.getColumn(0, "KONZS"));
        	this.dsInsert.setColumn(nrow, "KTOKK", this.dsWALFA1.getColumn(0, "KTOKK"));
        	this.dsInsert.setColumn(nrow, "KUNNR", this.dsWALFA1.getColumn(0, "KUNNR"));
        	this.dsInsert.setColumn(nrow, "LNRZA", this.dsWALFA1.getColumn(0, "LNRZA"));
        	this.dsInsert.setColumn(nrow, "LOEVM", this.dsWALFA1.getColumn(0, "LOEVM"));
        	this.dsInsert.setColumn(nrow, "SPERR", this.dsWALFA1.getColumn(0, "SPERR"));
        	this.dsInsert.setColumn(nrow, "SPERM", this.dsWALFA1.getColumn(0, "SPERM"));
        	this.dsInsert.setColumn(nrow, "SPRAS", this.dsWALFA1.getColumn(0, "SPRAS"));
        	this.dsInsert.setColumn(nrow, "STCD1", this.dsWALFA1.getColumn(0, "STCD1"));
        	this.dsInsert.setColumn(nrow, "STCD2", this.dsWALFA1.getColumn(0, "STCD2"));
        	this.dsInsert.setColumn(nrow, "STKZA", this.dsWALFA1.getColumn(0, "STKZA"));
        	this.dsInsert.setColumn(nrow, "STKZU", this.dsWALFA1.getColumn(0, "STKZU"));
        	this.dsInsert.setColumn(nrow, "TELBX", this.dsWALFA1.getColumn(0, "TELBX"));
        	this.dsInsert.setColumn(nrow, "TELF1", this.dsWALFA1.getColumn(0, "TELF1"));
        	this.dsInsert.setColumn(nrow, "TELF2", this.dsWALFA1.getColumn(0, "TELF2"));
        	this.dsInsert.setColumn(nrow, "TELFX", this.dsWALFA1.getColumn(0, "TELFX"));
        	this.dsInsert.setColumn(nrow, "TELTX", this.dsWALFA1.getColumn(0, "TELTX"));
        	this.dsInsert.setColumn(nrow, "TELX1", this.dsWALFA1.getColumn(0, "TELX1"));
        	this.dsInsert.setColumn(nrow, "XCPDK", this.dsWALFA1.getColumn(0, "XCPDK"));
        	this.dsInsert.setColumn(nrow, "XZEMP", this.dsWALFA1.getColumn(0, "XZEMP"));
        	this.dsInsert.setColumn(nrow, "VBUND", this.dsWALFA1.getColumn(0, "VBUND"));
        	this.dsInsert.setColumn(nrow, "FISKN", this.dsWALFA1.getColumn(0, "FISKN"));
        	this.dsInsert.setColumn(nrow, "STCEG", this.dsWALFA1.getColumn(0, "STCEG"));
        	this.dsInsert.setColumn(nrow, "STKZN", this.dsWALFA1.getColumn(0, "STKZN"));
        	this.dsInsert.setColumn(nrow, "SPERQ", this.dsWALFA1.getColumn(0, "SPERQ"));
        	this.dsInsert.setColumn(nrow, "GBORT", this.dsWALFA1.getColumn(0, "GBORT"));
        	this.dsInsert.setColumn(nrow, "GBDAT", this.dsWALFA1.getColumn(0, "GBDAT"));
        	this.dsInsert.setColumn(nrow, "SEXKZ", this.dsWALFA1.getColumn(0, "SEXKZ"));
        	this.dsInsert.setColumn(nrow, "KRAUS", this.dsWALFA1.getColumn(0, "KRAUS"));
        	this.dsInsert.setColumn(nrow, "REVDB", this.dsWALFA1.getColumn(0, "REVDB"));
        	this.dsInsert.setColumn(nrow, "QSSYS", this.dsWALFA1.getColumn(0, "QSSYS"));
        	this.dsInsert.setColumn(nrow, "KTOCK", this.dsWALFA1.getColumn(0, "KTOCK"));
        	this.dsInsert.setColumn(nrow, "PFORT", this.dsWALFA1.getColumn(0, "PFORT"));
        	this.dsInsert.setColumn(nrow, "WERKS", this.dsWALFA1.getColumn(0, "WERKS"));
        	this.dsInsert.setColumn(nrow, "LTSNA", this.dsWALFA1.getColumn(0, "LTSNA"));
        	this.dsInsert.setColumn(nrow, "WERKR", this.dsWALFA1.getColumn(0, "WERKR"));
        	this.dsInsert.setColumn(nrow, "PLKAL", this.dsWALFA1.getColumn(0, "PLKAL"));
        	this.dsInsert.setColumn(nrow, "DUEFL", this.dsWALFA1.getColumn(0, "DUEFL"));
        	this.dsInsert.setColumn(nrow, "TXJCD", this.dsWALFA1.getColumn(0, "TXJCD"));
        	this.dsInsert.setColumn(nrow, "SPERZ", this.dsWALFA1.getColumn(0, "SPERZ"));
        	this.dsInsert.setColumn(nrow, "SCACD", this.dsWALFA1.getColumn(0, "SCACD"));
        	this.dsInsert.setColumn(nrow, "SFRGR", this.dsWALFA1.getColumn(0, "SFRGR"));
        	this.dsInsert.setColumn(nrow, "LZONE", this.dsWALFA1.getColumn(0, "LZONE"));
        	this.dsInsert.setColumn(nrow, "XLFZA", this.dsWALFA1.getColumn(0, "XLFZA"));
        	this.dsInsert.setColumn(nrow, "DLGRP", this.dsWALFA1.getColumn(0, "DLGRP"));
        	this.dsInsert.setColumn(nrow, "FITYP", this.dsWALFA1.getColumn(0, "FITYP"));
        	this.dsInsert.setColumn(nrow, "STCDT", this.dsWALFA1.getColumn(0, "STCDT"));
        	this.dsInsert.setColumn(nrow, "REGSS", this.dsWALFA1.getColumn(0, "REGSS"));
        	this.dsInsert.setColumn(nrow, "ACTSS", this.dsWALFA1.getColumn(0, "ACTSS"));
        	this.dsInsert.setColumn(nrow, "STCD3", this.dsWALFA1.getColumn(0, "STCD3"));
        	this.dsInsert.setColumn(nrow, "STCD4", this.dsWALFA1.getColumn(0, "STCD4"));
        	this.dsInsert.setColumn(nrow, "IPISP", this.dsWALFA1.getColumn(0, "IPISP"));
        	this.dsInsert.setColumn(nrow, "TAXBS", this.dsWALFA1.getColumn(0, "TAXBS"));
        	this.dsInsert.setColumn(nrow, "PROFS", this.dsWALFA1.getColumn(0, "PROFS"));
        	this.dsInsert.setColumn(nrow, "STGDL", this.dsWALFA1.getColumn(0, "STGDL"));
        	this.dsInsert.setColumn(nrow, "EMNFR", this.dsWALFA1.getColumn(0, "EMNFR"));
        	this.dsInsert.setColumn(nrow, "LFURL", this.dsWALFA1.getColumn(0, "LFURL"));
        	this.dsInsert.setColumn(nrow, "J_1KFREPRE", this.dsWALFA1.getColumn(0, "J_1KFREPRE"));
        	this.dsInsert.setColumn(nrow, "J_1KFTBUS", this.dsWALFA1.getColumn(0, "J_1KFTBUS"));
        	this.dsInsert.setColumn(nrow, "J_1KFTIND", this.dsWALFA1.getColumn(0, "J_1KFTIND"));
        	this.dsInsert.setColumn(nrow, "CONFS", this.dsWALFA1.getColumn(0, "CONFS"));
        	this.dsInsert.setColumn(nrow, "UPDAT", this.dsWALFA1.getColumn(0, "UPDAT"));
        	this.dsInsert.setColumn(nrow, "UPTIM", this.dsWALFA1.getColumn(0, "UPTIM"));
        	this.dsInsert.setColumn(nrow, "NODEL", this.dsWALFA1.getColumn(0, "NODEL"));
        	this.dsInsert.setColumn(nrow, "QSSYSDAT", this.dsWALFA1.getColumn(0, "QSSYSDAT"));
        	this.dsInsert.setColumn(nrow, "PODKZB", this.dsWALFA1.getColumn(0, "PODKZB"));
        	this.dsInsert.setColumn(nrow, "FISKU", this.dsWALFA1.getColumn(0, "FISKU"));
        	this.dsInsert.setColumn(nrow, "STENR", this.dsWALFA1.getColumn(0, "STENR"));
        	this.dsInsert.setColumn(nrow, "CARRIER_CONF", this.dsWALFA1.getColumn(0, "CARRIER_CONF"));
        	this.dsInsert.setColumn(nrow, "J_SC_CAPITAL", this.dsWALFA1.getColumn(0, "J_SC_CAPITAL"));
        	this.dsInsert.setColumn(nrow, "J_SC_CURRENCY", this.dsWALFA1.getColumn(0, "J_SC_CURRENCY"));
        	this.dsInsert.setColumn(nrow, "ALC", this.dsWALFA1.getColumn(0, "ALC"));
        	this.dsInsert.setColumn(nrow, "PMT_OFFICE", this.dsWALFA1.getColumn(0, "PMT_OFFICE"));
        	this.dsInsert.setColumn(nrow, "PSOFG", this.dsWALFA1.getColumn(0, "PSOFG"));
        	this.dsInsert.setColumn(nrow, "PSOIS", this.dsWALFA1.getColumn(0, "PSOIS"));
        	this.dsInsert.setColumn(nrow, "PSON1", this.dsWALFA1.getColumn(0, "PSON1"));
        	this.dsInsert.setColumn(nrow, "PSON2", this.dsWALFA1.getColumn(0, "PSON2"));
        	this.dsInsert.setColumn(nrow, "PSON3", this.dsWALFA1.getColumn(0, "PSON3"));
        	this.dsInsert.setColumn(nrow, "PSOVN", this.dsWALFA1.getColumn(0, "PSOVN"));
        	this.dsInsert.setColumn(nrow, "PSOTL", this.dsWALFA1.getColumn(0, "PSOTL"));
        	this.dsInsert.setColumn(nrow, "PSOHS", this.dsWALFA1.getColumn(0, "PSOHS"));
        	this.dsInsert.setColumn(nrow, "PSOST", this.dsWALFA1.getColumn(0, "PSOST"));
        	this.dsInsert.setColumn(nrow, "TRANSPORT_CHAIN", this.dsWALFA1.getColumn(0, "TRANSPORT_CHAIN"));
        	this.dsInsert.setColumn(nrow, "STAGING_TIME", this.dsWALFA1.getColumn(0, "STAGING_TIME"));
        	this.dsInsert.setColumn(nrow, "SCHEDULING_TYPE", this.dsWALFA1.getColumn(0, "SCHEDULING_TYPE"));
        	this.dsInsert.setColumn(nrow, "SUBMI_RELEVANT", this.dsWALFA1.getColumn(0, "SUBMI_RELEVANT"));
        	this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        	if (this.dsInsert.rowcount == 0) return;

        	var strSvcId    = "insert";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert";
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

        // 확인 버튼 클릭
        this.divData_btnOk_onclick = function(obj,e)
        {
        	//this.beAfGun = "be";	// sap처리전 구분값 셋팅
        	//this.fnExec();
        	this.fnSap();
        };

        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
        };
        this.loadIncludeScript("DQD_VENDOR_AP_CREATE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
