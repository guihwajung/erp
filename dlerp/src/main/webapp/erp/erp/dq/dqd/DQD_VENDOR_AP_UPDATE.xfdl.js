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
            this.getSetter("maxwidth").set("950");
            this.getSetter("maxheight").set("500");
            if (Form == this.constructor)
            {
                this._setFormPosition(910,440);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DQDPR_VENDOR_AP_IF_UPDATE</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DQDPR_SAP_PARAM_INSERT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProcSap", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExport", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"AKONT\" type=\"STRING\" size=\"256\"/><Column id=\"CJKTW\" type=\"STRING\" size=\"256\"/><Column id=\"EKGRP\" type=\"STRING\" size=\"256\"/><Column id=\"FDGRV\" type=\"STRING\" size=\"256\"/><Column id=\"FITYP\" type=\"STRING\" size=\"256\"/><Column id=\"INTAD\" type=\"STRING\" size=\"256\"/><Column id=\"J_1KFREPRE\" type=\"STRING\" size=\"256\"/><Column id=\"J_1KFTBUS\" type=\"STRING\" size=\"256\"/><Column id=\"J_1KFTIND\" type=\"STRING\" size=\"256\"/><Column id=\"KTOKK\" type=\"STRING\" size=\"256\"/><Column id=\"LFURL\" type=\"STRING\" size=\"256\"/><Column id=\"NAME1\" type=\"STRING\" size=\"256\"/><Column id=\"ORT01\" type=\"STRING\" size=\"256\"/><Column id=\"PSTLZ\" type=\"STRING\" size=\"256\"/><Column id=\"REGIO\" type=\"STRING\" size=\"256\"/><Column id=\"SORTL\" type=\"STRING\" size=\"256\"/><Column id=\"STCD1\" type=\"STRING\" size=\"256\"/><Column id=\"STCD2\" type=\"STRING\" size=\"256\"/><Column id=\"STRAS\" type=\"STRING\" size=\"256\"/><Column id=\"TELF1\" type=\"STRING\" size=\"256\"/><Column id=\"TELF2\" type=\"STRING\" size=\"256\"/><Column id=\"TLFNS\" type=\"STRING\" size=\"256\"/><Column id=\"TLFXS\" type=\"STRING\" size=\"256\"/><Column id=\"ZTERM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWALFA1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PLIFNR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100.00%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("매입(SAP) 거래처코드 수정");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divData01","0","staTITLE:10",null,"140","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","885","30",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("7");
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
            obj.set_taborder("6");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("ctxtIN_J_1KFREPRE","staIN_J_1KFREPRE:4","ctxtIN_STCD2:9","190","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("2");
            obj.set_value("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Div("ccfIN_REGIO","staIN_REGIO:5","ctxtIN_J_1KFREPRE:9","189","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DQ_S05");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("3");
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
            obj.set_taborder("0");
            obj.set_value("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("ctxtIN_STCD1","staIN_STCD1:4","ctxtIN_NAME1:9","190","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("8");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Div("ccfIN_PSTLZ","staIN_PSTLZ:4","ctxtIN_STCD1:9","190","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("4");
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
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Edit("ctxtIN_STRAS","staIN_STRAS:4","ctxtIN_STCD1:9","190","20",null,null,null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("5");
            obj.set_value("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Div("divData02","0","divData01:5",null,"185","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","884","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("27");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staIN_KTOKK","0","staTITLE:5","110","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("28");
            obj.set_text("공급업체계정그룹");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staIN_J_1KFTBUS","0","staIN_KTOKK:-1","110","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("29");
            obj.set_text("업태");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staIN_EKGRP","0","staIN_J_1KFTBUS:-1","110","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("30");
            obj.set_text("구매그룹");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staIN_FDGRV","0","staIN_EKGRP:-1","110","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("31");
            obj.set_text("계획그룹");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBgIN_KTOKK","staIN_KTOKK:-1","staTITLE:5","200","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBgIN_J_1KFTBUS","staIN_J_1KFTBUS:-1","staBgIN_KTOKK:-1","200","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBgIN_EKGRP","staIN_EKGRP:-1","staBgIN_J_1KFTBUS:-1","200","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBgIN_FDGRV","staIN_FDGRV:-1","staBgIN_EKGRP:-1","200","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Div("ccfIN_KTOKK","staIN_KTOKK:4","staTITLE:10","190","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DQ_S01");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("36");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Edit("ctxtIN_J_1KFTBUS","staIN_J_1KFTBUS:4","ccfIN_KTOKK:9","190","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("37");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Div("ccfIN_EKGRP","staIN_EKGRP:4","ctxtIN_J_1KFTBUS:9","190","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DQ_S02");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("38");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Div("ccfIN_FDGRV","staIN_FDGRV:4","ccfIN_EKGRP:9","190","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DQ_S04");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("39");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staIN_LFURL","staBgIN_KTOKK:-1","staTITLE:5","90","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("40");
            obj.set_text("이메일");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staIN_J_1KFTIND","staBgIN_J_1KFTBUS:-1","staIN_LFURL:-1","90","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("41");
            obj.set_text("업종");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staIN_FITYP","staBgIN_EKGRP:-1","staIN_J_1KFTIND:-1","90","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("42");
            obj.set_text("세금유형");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staIN_ZTERM","staBgIN_FDGRV:-1","staIN_FITYP:-1","90","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("43");
            obj.set_text("지급조건");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBgIN_LFURL","staIN_LFURL:-1","staTITLE:5","200","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBgIN_J_1KFTIND","staIN_J_1KFTIND:-1","staBgIN_LFURL:-1","200","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBgIN_FITYP","staIN_FITYP:-1","staBgIN_J_1KFTIND:-1","200","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBgIN_ZTERM","staIN_ZTERM:-1","staBgIN_FITYP:-1","200","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Edit("ctxtIN_LFURL","staIN_LFURL:4","staTITLE:10","190","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("48");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Edit("ctxtIN_J_1KFTIND","staIN_J_1KFTIND:4","ctxtIN_LFURL:9","190","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("49");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Div("ccfIN_FITYP","staIN_FITYP:4","ctxtIN_J_1KFTIND:9","190","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DQ_S03");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("50");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Div("ccfIN_ZTERM","staIN_ZTERM:4","ccfIN_FITYP:9","190","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DH_S06");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("51");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staSPACE00","staBgIN_J_1KFTIND:-1","staTITLE:5","90","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("52");
            obj.set_text("");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staSPACE01","staBgIN_J_1KFTIND:-1","staSPACE00:-1","90","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("53");
            obj.set_text("");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staIN_AKONT","staBgIN_FITYP:-1","staSPACE01:-1","90","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("54");
            obj.set_text("조정계정");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staIN_CJKTW","staBgIN_ZTERM:-1","staIN_AKONT:-1","90","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("55");
            obj.set_text("지급방법");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBgSPACE00","staSPACE00:-1","staTITLE:5","200","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBgSPACE01","staSPACE01:-1","staBgSPACE00:-1","200","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBgIN_AKONT","staIN_AKONT:-1","staBgSPACE01:-1","200","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Static("staBgIN_CJKTW","staIN_CJKTW:-1","staBgIN_AKONT:-1","200","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Div("ccfIN_AKONT","staIN_AKONT:4","ctxtIN_J_1KFTIND:9","190","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DQ_S07");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("60");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Div("ccfIN_CJKTW","staIN_CJKTW:4","ccfIN_AKONT:9","190","20",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DQ_S06");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("61");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Button("btnOk","35.33%","divData02:10","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","53.33%","divData02:10","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.divData01.form.ctxtIN_STCD2","value","dsList","STCD2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.divData01.form.ctxtIN_NAME1","value","dsList","NAME1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divData01.form.ctxtIN_TELF1","value","dsList","TELF1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divData01.form.ctxtIN_J_1KFREPRE","value","dsList","J_1KFREPRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divData01.form.ccfIN_PSTLZ.form.CDTextBox","value","dsList","PSTLZ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divData01.form.ctxtIN_STRAS","value","dsList","STRAS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divData01.form.ccfIN_REGIO.form.CDTextBox","value","dsList","REGIO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divData02.form.ccfIN_KTOKK.form.CDTextBox","value","dsList","KTOKK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divData02.form.ctxtIN_LFURL","value","dsList","LFURL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divData01.form.ctxtIN_STCD1","value","dsList","STCD1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divData02.form.ctxtIN_J_1KFTBUS","value","dsList","J_1KFTBUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divData02.form.ctxtIN_J_1KFTIND","value","dsList","J_1KFTIND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divData02.form.ccfIN_EKGRP.form.CDTextBox","value","dsList","EKGRP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divData02.form.ccfIN_FITYP.form.CDTextBox","value","dsList","FITYP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divData02.form.ccfIN_AKONT.form.CDTextBox","value","dsList","AKONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divData02.form.ccfIN_FDGRV.form.CDTextBox","value","dsList","FDGRV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divData02.form.ccfIN_ZTERM.form.CDTextBox","value","dsList","ZTERM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divData02.form.ccfIN_CJKTW.form.CDTextBox","value","dsList","CJKTW");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DQD_VENDOR_AP_UPDATE.xfdl", function() {
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

        	if(!this.gfnIsNull(this.getOwnerFrame().PLIFNR))
        	{
        		this.dsSearch.setColumn(0, "PLIFNR", this.getOwnerFrame().PLIFNR);

        		this.FormBtns.Select.click();
        	}
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
        	this.ccfIN_PSTLZ = this.divData.form.divData01.form.ccfIN_PSTLZ;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfIN_PSTLZ.AfterCDTextChanged = "fnAfterCDTextChanged";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelectSap = new Dataset();
        	this.dsSelectSap.addColumn("PLIFNR", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("LIFNR", "string");
        	this.dsUpdate.addColumn("MANDT", "string");
        	this.dsUpdate.addColumn("LAND1", "string");
        	this.dsUpdate.addColumn("NAME1", "string");
        	this.dsUpdate.addColumn("NAME2", "string");
        	this.dsUpdate.addColumn("NAME3", "string");
        	this.dsUpdate.addColumn("NAME4", "string");
        	this.dsUpdate.addColumn("ORT01", "string");
        	this.dsUpdate.addColumn("ORT02", "string");
        	this.dsUpdate.addColumn("PFACH", "string");
        	this.dsUpdate.addColumn("PSTL2", "string");
        	this.dsUpdate.addColumn("PSTLZ", "string");
        	this.dsUpdate.addColumn("REGIO", "string");
        	this.dsUpdate.addColumn("SORTL", "string");
        	this.dsUpdate.addColumn("STRAS", "string");
        	this.dsUpdate.addColumn("ADRNR", "string");
        	this.dsUpdate.addColumn("MCOD1", "string");
        	this.dsUpdate.addColumn("MCOD2", "string");
        	this.dsUpdate.addColumn("MCOD3", "string");
        	this.dsUpdate.addColumn("ANRED", "string");
        	this.dsUpdate.addColumn("BAHNS", "string");
        	this.dsUpdate.addColumn("BBBNR", "string");
        	this.dsUpdate.addColumn("BBSNR", "string");
        	this.dsUpdate.addColumn("BEGRU", "string");
        	this.dsUpdate.addColumn("BRSCH", "string");
        	this.dsUpdate.addColumn("BUBKZ", "string");
        	this.dsUpdate.addColumn("DATLT", "string");
        	this.dsUpdate.addColumn("DTAMS", "string");
        	this.dsUpdate.addColumn("DTAWS", "string");
        	this.dsUpdate.addColumn("ERDAT", "string");
        	this.dsUpdate.addColumn("ERNAM", "string");
        	this.dsUpdate.addColumn("ESRNR", "string");
        	this.dsUpdate.addColumn("KONZS", "string");
        	this.dsUpdate.addColumn("KTOKK", "string");
        	this.dsUpdate.addColumn("KUNNR", "string");
        	this.dsUpdate.addColumn("LNRZA", "string");
        	this.dsUpdate.addColumn("LOEVM", "string");
        	this.dsUpdate.addColumn("SPERR", "string");
        	this.dsUpdate.addColumn("SPERM", "string");
        	this.dsUpdate.addColumn("SPRAS", "string");
        	this.dsUpdate.addColumn("STCD1", "string");
        	this.dsUpdate.addColumn("STCD2", "string");
        	this.dsUpdate.addColumn("STKZA", "string");
        	this.dsUpdate.addColumn("STKZU", "string");
        	this.dsUpdate.addColumn("TELBX", "string");
        	this.dsUpdate.addColumn("TELF1", "string");
        	this.dsUpdate.addColumn("TELF2", "string");
        	this.dsUpdate.addColumn("TELFX", "string");
        	this.dsUpdate.addColumn("TELTX", "string");
        	this.dsUpdate.addColumn("TELX1", "string");
        	this.dsUpdate.addColumn("XCPDK", "string");
        	this.dsUpdate.addColumn("XZEMP", "string");
        	this.dsUpdate.addColumn("VBUND", "string");
        	this.dsUpdate.addColumn("FISKN", "string");
        	this.dsUpdate.addColumn("STCEG", "string");
        	this.dsUpdate.addColumn("STKZN", "string");
        	this.dsUpdate.addColumn("SPERQ", "string");
        	this.dsUpdate.addColumn("GBORT", "string");
        	this.dsUpdate.addColumn("GBDAT", "string");
        	this.dsUpdate.addColumn("SEXKZ", "string");
        	this.dsUpdate.addColumn("KRAUS", "string");
        	this.dsUpdate.addColumn("REVDB", "string");
        	this.dsUpdate.addColumn("QSSYS", "string");
        	this.dsUpdate.addColumn("KTOCK", "string");
        	this.dsUpdate.addColumn("PFORT", "string");
        	this.dsUpdate.addColumn("WERKS", "string");
        	this.dsUpdate.addColumn("LTSNA", "string");
        	this.dsUpdate.addColumn("WERKR", "string");
        	this.dsUpdate.addColumn("PLKAL", "string");
        	this.dsUpdate.addColumn("DUEFL", "string");
        	this.dsUpdate.addColumn("TXJCD", "string");
        	this.dsUpdate.addColumn("SPERZ", "string");
        	this.dsUpdate.addColumn("SCACD", "string");
        	this.dsUpdate.addColumn("SFRGR", "string");
        	this.dsUpdate.addColumn("LZONE", "string");
        	this.dsUpdate.addColumn("XLFZA", "string");
        	this.dsUpdate.addColumn("DLGRP", "string");
        	this.dsUpdate.addColumn("FITYP", "string");
        	this.dsUpdate.addColumn("STCDT", "string");
        	this.dsUpdate.addColumn("REGSS", "string");
        	this.dsUpdate.addColumn("ACTSS", "string");
        	this.dsUpdate.addColumn("STCD3", "string");
        	this.dsUpdate.addColumn("STCD4", "string");
        	this.dsUpdate.addColumn("IPISP", "string");
        	this.dsUpdate.addColumn("TAXBS", "string");
        	this.dsUpdate.addColumn("PROFS", "string");
        	this.dsUpdate.addColumn("STGDL", "string");
        	this.dsUpdate.addColumn("EMNFR", "string");
        	this.dsUpdate.addColumn("LFURL", "string");
        	this.dsUpdate.addColumn("J_1KFREPRE", "string");
        	this.dsUpdate.addColumn("J_1KFTBUS", "string");
        	this.dsUpdate.addColumn("J_1KFTIND", "string");
        	this.dsUpdate.addColumn("CONFS", "string");
        	this.dsUpdate.addColumn("UPDAT", "string");
        	this.dsUpdate.addColumn("UPTIM", "string");
        	this.dsUpdate.addColumn("NODEL", "string");
        	this.dsUpdate.addColumn("QSSYSDAT", "string");
        	this.dsUpdate.addColumn("PODKZB", "string");
        	this.dsUpdate.addColumn("FISKU", "string");
        	this.dsUpdate.addColumn("STENR", "string");
        	this.dsUpdate.addColumn("CARRIER_CONF", "string");
        	this.dsUpdate.addColumn("J_SC_CAPITAL", "string");
        	this.dsUpdate.addColumn("J_SC_CURRENCY", "string");
        	this.dsUpdate.addColumn("ALC", "string");
        	this.dsUpdate.addColumn("PMT_OFFICE", "string");
        	this.dsUpdate.addColumn("PSOFG", "string");
        	this.dsUpdate.addColumn("PSOIS", "string");
        	this.dsUpdate.addColumn("PSON1", "string");
        	this.dsUpdate.addColumn("PSON2", "string");
        	this.dsUpdate.addColumn("PSON3", "string");
        	this.dsUpdate.addColumn("PSOVN", "string");
        	this.dsUpdate.addColumn("PSOTL", "string");
        	this.dsUpdate.addColumn("PSOHS", "string");
        	this.dsUpdate.addColumn("PSOST", "string");
        	this.dsUpdate.addColumn("TRANSPORT_CHAIN", "string");
        	this.dsUpdate.addColumn("STAGING_TIME", "string");
        	this.dsUpdate.addColumn("SCHEDULING_TYPE", "string");
        	this.dsUpdate.addColumn("SUBMI_RELEVANT", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");

        	this.dsSap = new Dataset();
        	this.dsSap.addColumn("IN_BONSA_ADDRESS");
        	this.dsSap.addColumn("IN_BONSA_FAXNO");
        	this.dsSap.addColumn("IN_BONSA_POSTNO");
        	this.dsSap.addColumn("IN_BONSA_TELNO");
        	this.dsSap.addColumn("IN_CT_REP_EMAIL");
        	this.dsSap.addColumn("IN_CT_REP_HP");
        	this.dsSap.addColumn("IN_CT_REP_NAME");
        	this.dsSap.addColumn("IN_CT_REP_TEL");
        	this.dsSap.addColumn("IN_GUBUN");
        	this.dsSap.addColumn("IN_J_1KFREPRE");
        	this.dsSap.addColumn("IN_LIFNR");
        	this.dsSap.addColumn("IN_NAME1");
        	this.dsSap.addColumn("IN_REGIO");
        	this.dsSap.addColumn("IN_REPHP");
        	this.dsSap.addColumn("IN_SALEM");
        	this.dsSap.addColumn("IN_STCD2");
        	this.dsSap.addColumn("IN_TELNO");
        	this.dsSap.addColumn("IN_ZCELPH");
        	this.dsSap.addColumn("IN_ZCONO");
        	this.dsSap.addColumn("IN_ZMAIL");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("PARAM", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
          /*
          *	조회 버튼
          */
        this.fnSelect = function(gubun) {
        	this._dsProcSap.clearData();
        	var nrow = this._dsProcSap.addRow();
        	this._dsProcSap.setColumn(nrow, "TARGET", "select");
        	this._dsProcSap.setColumn(nrow, "SP", "ZSUAS_EDI02");

        	this.dsSelectSap.clearData();
        	this.dsSelectSap.addRow();
        	// IN 파라미터 셋팅
        	this.dsSelectSap.setColumn(0, "PLIFNR", this.dsSearch.getColumn(0, "PLIFNR"));

        	// SAP 호출
        	var strSvcId    = "sap_select";
        	var strSvcType  = "sap";
        	var inProc		= "_dsProcSap";
        	var inData      = "select=dsSelectSap";
        	var outData     = "dsExport=export dsList=WALFA1"
        	if(gubun == "update") outData = "dsExport=export dsWALFA1=WALFA1";
        	var strArg      = "gubun="+gubun;
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
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
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg)
        {
        	if (svcID == "sap_update") {
        		if(this.dsExport.rowcount > 0)
        		{
        			this.fnExec();
        			/*
        			if(this.dsExport.getColumn(0, "RTNCD") == "S")
        			{
        				this.fnCallback_callback = function()
        				{
        					this.fnSelect("update");
        				}

        				this.gfnAlert(this.dsExport.getColumn(0, "RTNMSG"),"fnCallback_callback");
        			}
        			else
        			{
        				this.gfnAlert("입력값을 확인해주세요.");
        				//this.gfnAlert(this.dsExport.getColumn(0, "RTNMSG") + "\n" + this.dsExport.getColumn(0, "RTNCD"));
        			}
        			*/
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "sap_select")
        	{
        		if(this.dsExport.rowcount > 0) {
        			var json = this.gfnArgsToJson(strArg);
        			strArg = json.gubun;

        			//this.dsList.copyRow(0, this.dsWALFA1, 0);

        			if(strArg == "update")
        			{
        				if(this.dsExport.getColumn(0, "RETURN").substr(0,1) == "T")
        				{
        					this.fnSapUpdate();
        				}
        				else
        				{
        					this.gfnAlert(this.dsExport.getColumn(0, "RETURN"));
        					//this.gfnAlert("입력값을 확인해주세요.");
        				}
        			}
        			//this.dsExport.clearData();

        			this.fnCodeFindCheck();
        			this.divData.form.divData01.form.ccfIN_PSTLZ.form.DSTextBox.set_value(this.dsList.getColumn(0, "STRAS"));
        		}
        		else
        		{
        			this.gfnAlert("조회되는 데이터가 없습니다.");
        		}
        	}
        	else if(svcID == "update")
        	{
        		if (errorCode == 0) {
        			this.fnUpdate_callback = function()
        			{
        				//this.getParentContext().close(true);
        			}

        			//this.beAfGun = "af";	// sap처리후 구분값 셋팅
        			//this.fnExec();
        			this.fnSelect();

        // 			var rtn = this.dsExport.getColumn(0, "RETURN");
        // 			if(!this.gfnIsNull(rtn)) {
        // 				if(rtn.substr(0, 1) == "T") {
        //
        // 					var msg1 = "회사명 : " + this.dsWALFA1.getColumn(0, "NAME1") +
        // 								"\n사업자번호 : " + this.dsWALFA1.getColumn(0, "ADRNR")
        // 								;
        // 								this.gfnAlert(msg1, "fnUpdate_callback");
        //
        // 				}
        // 				else if(rtn.substr(0, 1) == "F") {
        // 					this.gfnAlert("업체정보가 없습니다.", "fnUpdate_callback");
        // 				}
        // 			}
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "exec") {
        		if(errorCode == 0) {
        			if(this.dsExport.getColumn(0, "RTNCD") == "S")
        			{
        				this.fnCallback_callback = function()
        				{
        					this.fnSelect("update");
        				}

        				this.gfnAlert(this.dsExport.getColumn(0, "RTNMSG"),"fnCallback_callback");
        			}
        			else
        			{
        				this.gfnAlert("입력값을 확인해주세요.");
        				//this.gfnAlert(this.dsExport.getColumn(0, "RTNMSG") + "\n" + this.dsExport.getColumn(0, "RTNCD"));
        			}
        			/*
        			if(this.beAfGun == "be"){
        				this.fnSap();
        			}else{
        				this.fnSelect();
        				//this.getParentContext().close(true);
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
        this.fnAfterCDTextChanged = function(id, codeFindData){
        	var arr = codeFindData;

        	if(id == "ccfIN_PSTLZ") {
        		if(arr.length > 0){
        			this.dsList.setColumn(0, "STRAS", arr[0].ADDRESS);
        		}
        	}
        }
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
        	this._dsProcSap.setColumn(nrow, "SP", "ZERP_MM_0002");

        	this.dsSap.clearData();
        	var nrow = this.dsSap.addRow();
        	this.dsSap.setColumn(nrow, "IN_BONSA_ADDRESS", this.dsList.getColumn(0, "STRAS"));
        	this.dsSap.setColumn(nrow, "IN_BONSA_FAXNO", this.dsList.getColumn(0, "TELFX"));
        	this.dsSap.setColumn(nrow, "IN_BONSA_POSTNO", this.dsList.getColumn(0, "PSTLZ"));
        	this.dsSap.setColumn(nrow, "IN_BONSA_TELNO", this.dsList.getColumn(0, "TELF1"));
        	this.dsSap.setColumn(nrow, "IN_CT_REP_EMAIL", this.dsList.getColumn(0, "LFURL"));
        	this.dsSap.setColumn(nrow, "IN_CT_REP_HP", this.dsList.getColumn(0, "TELF2"));
        	this.dsSap.setColumn(nrow, "IN_CT_REP_NAME", "CT_REP_NAME");
        	this.dsSap.setColumn(nrow, "IN_CT_REP_TEL", "CT_REP_TEL");
        	this.dsSap.setColumn(nrow, "IN_GUBUN", "GUBUN");
        	this.dsSap.setColumn(nrow, "IN_J_1KFREPRE", this.dsList.getColumn(0, "J_1KFREPRE"));
        	this.dsSap.setColumn(nrow, "IN_LIFNR", this.dsList.getColumn(0, "LIFNR"));
        	this.dsSap.setColumn(nrow, "IN_NAME1", this.dsList.getColumn(0, "NAME1"));
        	this.dsSap.setColumn(nrow, "IN_REGIO", this.dsList.getColumn(0, "REGIO"));
        	this.dsSap.setColumn(nrow, "IN_REPHP", "REPHP");
        	this.dsSap.setColumn(nrow, "IN_SALEM", "SALEM");
        	this.dsSap.setColumn(nrow, "IN_STCD2", this.dsList.getColumn(0, "STCD2"));
        	this.dsSap.setColumn(nrow, "IN_TELNO", "TELNO");
        	this.dsSap.setColumn(nrow, "IN_ZCELPH", "ZCELPH");
        	this.dsSap.setColumn(nrow, "IN_ZCONO", "ZCONO");
        	this.dsSap.setColumn(nrow, "IN_ZMAIL", "ZMAIL");



        	// SAP 호출
        	var strSvcId    = "sap_update";
        	var strSvcType  = "sap";
        	var inProc		= "_dsProcSap";
        	var inData      = "select=dsSap";
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

        this.fnSapUpdate = function()
        {
        	this.dsUpdate.clearData();
        	var nrow = this.dsUpdate.addRow();
        	this.dsUpdate.setColumn(nrow, "LIFNR", this.dsWALFA1.getColumn(0, "LIFNR"));
        	this.dsUpdate.setColumn(nrow, "MANDT", this.dsWALFA1.getColumn(0, "MANDT"));
        	this.dsUpdate.setColumn(nrow, "LAND1", this.dsWALFA1.getColumn(0, "LAND1"));
        	this.dsUpdate.setColumn(nrow, "NAME1", this.dsWALFA1.getColumn(0, "NAME1"));
        	this.dsUpdate.setColumn(nrow, "NAME2", this.dsWALFA1.getColumn(0, "NAME2"));
        	this.dsUpdate.setColumn(nrow, "NAME3", this.dsWALFA1.getColumn(0, "NAME3"));
        	this.dsUpdate.setColumn(nrow, "NAME4", this.dsWALFA1.getColumn(0, "NAME4"));
        	this.dsUpdate.setColumn(nrow, "ORT01", this.dsWALFA1.getColumn(0, "ORT01"));
        	this.dsUpdate.setColumn(nrow, "ORT02", this.dsWALFA1.getColumn(0, "ORT02"));
        	this.dsUpdate.setColumn(nrow, "PFACH", this.dsWALFA1.getColumn(0, "PFACH"));
        	this.dsUpdate.setColumn(nrow, "PSTL2", this.dsWALFA1.getColumn(0, "PSTL2"));
        	this.dsUpdate.setColumn(nrow, "PSTLZ", this.dsWALFA1.getColumn(0, "PSTLZ"));
        	this.dsUpdate.setColumn(nrow, "REGIO", this.dsWALFA1.getColumn(0, "REGIO"));
        	this.dsUpdate.setColumn(nrow, "SORTL", this.dsWALFA1.getColumn(0, "SORTL"));
        	this.dsUpdate.setColumn(nrow, "STRAS", this.dsWALFA1.getColumn(0, "STRAS"));
        	this.dsUpdate.setColumn(nrow, "ADRNR", this.dsWALFA1.getColumn(0, "ADRNR"));
        	this.dsUpdate.setColumn(nrow, "MCOD1", this.dsWALFA1.getColumn(0, "MCOD1"));
        	this.dsUpdate.setColumn(nrow, "MCOD2", this.dsWALFA1.getColumn(0, "MCOD2"));
        	this.dsUpdate.setColumn(nrow, "MCOD3", this.dsWALFA1.getColumn(0, "MCOD3"));
        	this.dsUpdate.setColumn(nrow, "ANRED", this.dsWALFA1.getColumn(0, "ANRED"));
        	this.dsUpdate.setColumn(nrow, "BAHNS", this.dsWALFA1.getColumn(0, "BAHNS"));
        	this.dsUpdate.setColumn(nrow, "BBBNR", this.dsWALFA1.getColumn(0, "BBBNR"));
        	this.dsUpdate.setColumn(nrow, "BBSNR", this.dsWALFA1.getColumn(0, "BBSNR"));
        	this.dsUpdate.setColumn(nrow, "BEGRU", this.dsWALFA1.getColumn(0, "BEGRU"));
        	this.dsUpdate.setColumn(nrow, "BRSCH", this.dsWALFA1.getColumn(0, "BRSCH"));
        	this.dsUpdate.setColumn(nrow, "BUBKZ", this.dsWALFA1.getColumn(0, "BUBKZ"));
        	this.dsUpdate.setColumn(nrow, "DATLT", this.dsWALFA1.getColumn(0, "DATLT"));
        	this.dsUpdate.setColumn(nrow, "DTAMS", this.dsWALFA1.getColumn(0, "DTAMS"));
        	this.dsUpdate.setColumn(nrow, "DTAWS", this.dsWALFA1.getColumn(0, "DTAWS"));
        	this.dsUpdate.setColumn(nrow, "ERDAT", this.dsWALFA1.getColumn(0, "ERDAT"));
        	this.dsUpdate.setColumn(nrow, "ERNAM", this.dsWALFA1.getColumn(0, "ERNAM"));
        	this.dsUpdate.setColumn(nrow, "ESRNR", this.dsWALFA1.getColumn(0, "ESRNR"));
        	this.dsUpdate.setColumn(nrow, "KONZS", this.dsWALFA1.getColumn(0, "KONZS"));
        	this.dsUpdate.setColumn(nrow, "KTOKK", this.dsWALFA1.getColumn(0, "KTOKK"));
        	this.dsUpdate.setColumn(nrow, "KUNNR", this.dsWALFA1.getColumn(0, "KUNNR"));
        	this.dsUpdate.setColumn(nrow, "LNRZA", this.dsWALFA1.getColumn(0, "LNRZA"));
        	this.dsUpdate.setColumn(nrow, "LOEVM", this.dsWALFA1.getColumn(0, "LOEVM"));
        	this.dsUpdate.setColumn(nrow, "SPERR", this.dsWALFA1.getColumn(0, "SPERR"));
        	this.dsUpdate.setColumn(nrow, "SPERM", this.dsWALFA1.getColumn(0, "SPERM"));
        	this.dsUpdate.setColumn(nrow, "SPRAS", this.dsWALFA1.getColumn(0, "SPRAS"));
        	this.dsUpdate.setColumn(nrow, "STCD1", this.dsWALFA1.getColumn(0, "STCD1"));
        	this.dsUpdate.setColumn(nrow, "STCD2", this.dsWALFA1.getColumn(0, "STCD2"));
        	this.dsUpdate.setColumn(nrow, "STKZA", this.dsWALFA1.getColumn(0, "STKZA"));
        	this.dsUpdate.setColumn(nrow, "STKZU", this.dsWALFA1.getColumn(0, "STKZU"));
        	this.dsUpdate.setColumn(nrow, "TELBX", this.dsWALFA1.getColumn(0, "TELBX"));
        	this.dsUpdate.setColumn(nrow, "TELF1", this.dsWALFA1.getColumn(0, "TELF1"));
        	this.dsUpdate.setColumn(nrow, "TELF2", this.dsWALFA1.getColumn(0, "TELF2"));
        	this.dsUpdate.setColumn(nrow, "TELFX", this.dsWALFA1.getColumn(0, "TELFX"));
        	this.dsUpdate.setColumn(nrow, "TELTX", this.dsWALFA1.getColumn(0, "TELTX"));
        	this.dsUpdate.setColumn(nrow, "TELX1", this.dsWALFA1.getColumn(0, "TELX1"));
        	this.dsUpdate.setColumn(nrow, "XCPDK", this.dsWALFA1.getColumn(0, "XCPDK"));
        	this.dsUpdate.setColumn(nrow, "XZEMP", this.dsWALFA1.getColumn(0, "XZEMP"));
        	this.dsUpdate.setColumn(nrow, "VBUND", this.dsWALFA1.getColumn(0, "VBUND"));
        	this.dsUpdate.setColumn(nrow, "FISKN", this.dsWALFA1.getColumn(0, "FISKN"));
        	this.dsUpdate.setColumn(nrow, "STCEG", this.dsWALFA1.getColumn(0, "STCEG"));
        	this.dsUpdate.setColumn(nrow, "STKZN", this.dsWALFA1.getColumn(0, "STKZN"));
        	this.dsUpdate.setColumn(nrow, "SPERQ", this.dsWALFA1.getColumn(0, "SPERQ"));
        	this.dsUpdate.setColumn(nrow, "GBORT", this.dsWALFA1.getColumn(0, "GBORT"));
        	this.dsUpdate.setColumn(nrow, "GBDAT", this.dsWALFA1.getColumn(0, "GBDAT"));
        	this.dsUpdate.setColumn(nrow, "SEXKZ", this.dsWALFA1.getColumn(0, "SEXKZ"));
        	this.dsUpdate.setColumn(nrow, "KRAUS", this.dsWALFA1.getColumn(0, "KRAUS"));
        	this.dsUpdate.setColumn(nrow, "REVDB", this.dsWALFA1.getColumn(0, "REVDB"));
        	this.dsUpdate.setColumn(nrow, "QSSYS", this.dsWALFA1.getColumn(0, "QSSYS"));
        	this.dsUpdate.setColumn(nrow, "KTOCK", this.dsWALFA1.getColumn(0, "KTOCK"));
        	this.dsUpdate.setColumn(nrow, "PFORT", this.dsWALFA1.getColumn(0, "PFORT"));
        	this.dsUpdate.setColumn(nrow, "WERKS", this.dsWALFA1.getColumn(0, "WERKS"));
        	this.dsUpdate.setColumn(nrow, "LTSNA", this.dsWALFA1.getColumn(0, "LTSNA"));
        	this.dsUpdate.setColumn(nrow, "WERKR", this.dsWALFA1.getColumn(0, "WERKR"));
        	this.dsUpdate.setColumn(nrow, "PLKAL", this.dsWALFA1.getColumn(0, "PLKAL"));
        	this.dsUpdate.setColumn(nrow, "DUEFL", this.dsWALFA1.getColumn(0, "DUEFL"));
        	this.dsUpdate.setColumn(nrow, "TXJCD", this.dsWALFA1.getColumn(0, "TXJCD"));
        	this.dsUpdate.setColumn(nrow, "SPERZ", this.dsWALFA1.getColumn(0, "SPERZ"));
        	this.dsUpdate.setColumn(nrow, "SCACD", this.dsWALFA1.getColumn(0, "SCACD"));
        	this.dsUpdate.setColumn(nrow, "SFRGR", this.dsWALFA1.getColumn(0, "SFRGR"));
        	this.dsUpdate.setColumn(nrow, "LZONE", this.dsWALFA1.getColumn(0, "LZONE"));
        	this.dsUpdate.setColumn(nrow, "XLFZA", this.dsWALFA1.getColumn(0, "XLFZA"));
        	this.dsUpdate.setColumn(nrow, "DLGRP", this.dsWALFA1.getColumn(0, "DLGRP"));
        	this.dsUpdate.setColumn(nrow, "FITYP", this.dsWALFA1.getColumn(0, "FITYP"));
        	this.dsUpdate.setColumn(nrow, "STCDT", this.dsWALFA1.getColumn(0, "STCDT"));
        	this.dsUpdate.setColumn(nrow, "REGSS", this.dsWALFA1.getColumn(0, "REGSS"));
        	this.dsUpdate.setColumn(nrow, "ACTSS", this.dsWALFA1.getColumn(0, "ACTSS"));
        	this.dsUpdate.setColumn(nrow, "STCD3", this.dsWALFA1.getColumn(0, "STCD3"));
        	this.dsUpdate.setColumn(nrow, "STCD4", this.dsWALFA1.getColumn(0, "STCD4"));
        	this.dsUpdate.setColumn(nrow, "IPISP", this.dsWALFA1.getColumn(0, "IPISP"));
        	this.dsUpdate.setColumn(nrow, "TAXBS", this.dsWALFA1.getColumn(0, "TAXBS"));
        	this.dsUpdate.setColumn(nrow, "PROFS", this.dsWALFA1.getColumn(0, "PROFS"));
        	this.dsUpdate.setColumn(nrow, "STGDL", this.dsWALFA1.getColumn(0, "STGDL"));
        	this.dsUpdate.setColumn(nrow, "EMNFR", this.dsWALFA1.getColumn(0, "EMNFR"));
        	this.dsUpdate.setColumn(nrow, "LFURL", this.dsWALFA1.getColumn(0, "LFURL"));
        	this.dsUpdate.setColumn(nrow, "J_1KFREPRE", this.dsWALFA1.getColumn(0, "J_1KFREPRE"));
        	this.dsUpdate.setColumn(nrow, "J_1KFTBUS", this.dsWALFA1.getColumn(0, "J_1KFTBUS"));
        	this.dsUpdate.setColumn(nrow, "J_1KFTIND", this.dsWALFA1.getColumn(0, "J_1KFTIND"));
        	this.dsUpdate.setColumn(nrow, "CONFS", this.dsWALFA1.getColumn(0, "CONFS"));
        	this.dsUpdate.setColumn(nrow, "UPDAT", this.dsWALFA1.getColumn(0, "UPDAT"));
        	this.dsUpdate.setColumn(nrow, "UPTIM", this.dsWALFA1.getColumn(0, "UPTIM"));
        	this.dsUpdate.setColumn(nrow, "NODEL", this.dsWALFA1.getColumn(0, "NODEL"));
        	this.dsUpdate.setColumn(nrow, "QSSYSDAT", this.dsWALFA1.getColumn(0, "QSSYSDAT"));
        	this.dsUpdate.setColumn(nrow, "PODKZB", this.dsWALFA1.getColumn(0, "PODKZB"));
        	this.dsUpdate.setColumn(nrow, "FISKU", this.dsWALFA1.getColumn(0, "FISKU"));
        	this.dsUpdate.setColumn(nrow, "STENR", this.dsWALFA1.getColumn(0, "STENR"));
        	this.dsUpdate.setColumn(nrow, "CARRIER_CONF", this.dsWALFA1.getColumn(0, "CARRIER_CONF"));
        	this.dsUpdate.setColumn(nrow, "J_SC_CAPITAL", this.dsWALFA1.getColumn(0, "J_SC_CAPITAL"));
        	this.dsUpdate.setColumn(nrow, "J_SC_CURRENCY", this.dsWALFA1.getColumn(0, "J_SC_CURRENCY"));
        	this.dsUpdate.setColumn(nrow, "ALC", this.dsWALFA1.getColumn(0, "ALC"));
        	this.dsUpdate.setColumn(nrow, "PMT_OFFICE", this.dsWALFA1.getColumn(0, "PMT_OFFICE"));
        	this.dsUpdate.setColumn(nrow, "PSOFG", this.dsWALFA1.getColumn(0, "PSOFG"));
        	this.dsUpdate.setColumn(nrow, "PSOIS", this.dsWALFA1.getColumn(0, "PSOIS"));
        	this.dsUpdate.setColumn(nrow, "PSON1", this.dsWALFA1.getColumn(0, "PSON1"));
        	this.dsUpdate.setColumn(nrow, "PSON2", this.dsWALFA1.getColumn(0, "PSON2"));
        	this.dsUpdate.setColumn(nrow, "PSON3", this.dsWALFA1.getColumn(0, "PSON3"));
        	this.dsUpdate.setColumn(nrow, "PSOVN", this.dsWALFA1.getColumn(0, "PSOVN"));
        	this.dsUpdate.setColumn(nrow, "PSOTL", this.dsWALFA1.getColumn(0, "PSOTL"));
        	this.dsUpdate.setColumn(nrow, "PSOHS", this.dsWALFA1.getColumn(0, "PSOHS"));
        	this.dsUpdate.setColumn(nrow, "PSOST", this.dsWALFA1.getColumn(0, "PSOST"));
        	this.dsUpdate.setColumn(nrow, "TRANSPORT_CHAIN", this.dsWALFA1.getColumn(0, "TRANSPORT_CHAIN"));
        	this.dsUpdate.setColumn(nrow, "STAGING_TIME", this.dsWALFA1.getColumn(0, "STAGING_TIME"));
        	this.dsUpdate.setColumn(nrow, "SCHEDULING_TYPE", this.dsWALFA1.getColumn(0, "SCHEDULING_TYPE"));
        	this.dsUpdate.setColumn(nrow, "SUBMI_RELEVANT", this.dsWALFA1.getColumn(0, "SUBMI_RELEVANT"));
        	this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        	if (this.dsUpdate.rowcount == 0) return;

        	var strSvcId    = "update";
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
        }

        // sap 보낸정보를 저장한다
        this.fnExec = function() {

        	this.dsExec.clearData();

        	this.dsExec.addRow();

        	var paramVal =
        	"<IN_BONSA_ADDRESS:" + this.dsList.getColumn(0, "STRAS") +
        	"><IN_BONSA_FAXNO:" + this.dsList.getColumn(0, "TELFX") +
        	"><IN_BONSA_POSTNO:" + this.dsList.getColumn(0, "PSTLZ") +
        	"><IN_BONSA_TELNO:" + this.dsList.getColumn(0, "TELF1") +
        	"><IN_CT_REP_EMAIL:" + this.dsList.getColumn(0, "LFURL") +
        	"><IN_CT_REP_HP:" + this.dsList.getColumn(0, "TELF2") +
        	"><IN_CT_REP_NAME:" + "CT_REP_NAME" +
        	"><IN_CT_REP_TEL:" + "CT_REP_TEL" +
        	"><IN_GUBUN:" + "GUBUN" +
        	"><IN_J_1KFREPRE:" + this.dsList.getColumn(0, "J_1KFREPRE") +
        	"><IN_LIFNR:" + this.dsList.getColumn(0, "LIFNR") +
        	"><IN_NAME1:" + this.dsList.getColumn(0, "NAME1") +
        	"><IN_REGIO:" + this.dsList.getColumn(0, "REGIO") +
        	"><IN_REPHP:" + "REPHP" +
        	"><IN_SALEM:" + "SALEM" +
        	"><IN_STCD2:" + this.dsList.getColumn(0, "STCD2") +
        	"><IN_TELNO:" + "TELNO" +
        	"><IN_ZCELPH:" + "ZCELPH" +
        	"><IN_ZCONO:" + "ZCONO" +
        	"><IN_ZMAIL:" + "ZMAIL" +
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


        this.fnCodeFindCheck = function()
        {
        	if(!this.gfnIsNull(this.dsList.getColumn(0, "REGIO"))) { this.divData.form.divData01.form.ccfIN_REGIO.form.fnCodeFindLoad(); }
        	//if(!this.gfnIsNull(this.dsList.getColumn(0, "PSTLZ"))) { this.divData.form.divData01.form.ccfIN_PSTLZ.form.fnCodeFindLoad(); }
        	if(!this.gfnIsNull(this.dsList.getColumn(0, "AKONT"))) { this.divData.form.divData02.form.ccfIN_AKONT.form.fnCodeFindLoad(); }
        	if(!this.gfnIsNull(this.dsList.getColumn(0, "CJKTW"))) { this.divData.form.divData02.form.ccfIN_CJKTW.form.fnCodeFindLoad(); }
        	if(!this.gfnIsNull(this.dsList.getColumn(0, "EKGRP"))) { this.divData.form.divData02.form.ccfIN_EKGRP.form.fnCodeFindLoad(); }
        	if(!this.gfnIsNull(this.dsList.getColumn(0, "FDGRV"))) { this.divData.form.divData02.form.ccfIN_FDGRV.form.fnCodeFindLoad(); }
        	if(!this.gfnIsNull(this.dsList.getColumn(0, "FITYP"))) { this.divData.form.divData02.form.ccfIN_FITYP.form.fnCodeFindLoad(); }
        	if(!this.gfnIsNull(this.dsList.getColumn(0, "KTOKK"))) { this.divData.form.divData02.form.ccfIN_KTOKK.form.fnCodeFindLoad(); }
        	if(!this.gfnIsNull(this.dsList.getColumn(0, "ZTERM"))) { this.divData.form.divData02.form.ccfIN_ZTERM.form.fnCodeFindLoad(); }
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
        };
        this.loadIncludeScript("DQD_VENDOR_AP_UPDATE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
