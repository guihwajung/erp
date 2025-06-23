(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DWB_ETAX");
            this.set_titletext("전자세금계산서관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(999,640);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_SALEBUY\" type=\"STRING\" size=\"256\"/><Column id=\"CONVERSATION_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CD_AMEND\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VATPROOF\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PROOF\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TAXDEMAND\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DAM_ISU\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMAIL_ISU\" type=\"STRING\" size=\"256\"/><Column id=\"DS_MOBILE_ISU\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DAMDANG\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"BYR_BIZPLACE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REM\" type=\"STRING\" size=\"256\"/><Column id=\"TY_REV\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SUPPLY\" type=\"STRING\" size=\"256\"/><Column id=\"AM_VAT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_ETAXDETAIL_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"CONVERSATION_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ID_TRANS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YR_WORK\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTY_SALEBUY","0","30","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("매입/매출");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","109","30","225","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_ISSUE","190","2","590","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("[전송상태:]");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCONVERSATION_ID","333","30","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("세금계산서번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1_00","442","30","225","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAPPROVE_ID","666","30","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("국세청승인번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1_00_00","775","30","224","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_AMEND","0","59","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("수정구분(사유)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1_01","109","59","890","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_VATPROOF","0","88","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("증빙구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1_02","109","88","225","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_PROOF","333","88","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("증빙일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1_00_01","442","88","225","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_TAXDEMAND","666","88","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("영수구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1_00_00_00","775","88","224","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_VATPROOF00","0","117","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1_02_00","109","117","225","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_PROOF00","333","117","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_text("거래처");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1_00_01_00","442","117","557","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_VATPROOF00_00","0","146","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTopTitle","0","0","186","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("(전자)세금계산서 상세정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1_02_00_00","109","146","225","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_PROOF00_00","333","146","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1_00_01_00_00","442","146","557","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1_02_01","109","175","225","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_PROOF01","333","175","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1_00_01_01","442","175","225","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_TAXDEMAND00","666","175","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_text("종사업자번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1_00_00_00_00","775","175","224","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_VATPROOF01_00","0","204","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            obj.set_text("적요");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1_02_01_00","109","204","558","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_VATPROOF01","0","175","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_REV","666","204","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj.set_text("전송구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1_00_00_00_00_00","775","204","224","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_SUM","0","233","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("50");
            obj.set_text("합계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1_02_01_01","109","233","225","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_SUPPLY","333","233","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("52");
            obj.set_text("공급가액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1_00_01_01_00","442","233","225","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_VAT","666","233","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("54");
            obj.set_text("세액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1_00_00_00_00_01","775","233","224","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","320",null,"250","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","47.00%",null,"60","20",null,"28",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","299",null,"5","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("crdoTY_SALEBUY","117","35","113","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var divData_form_crdoTY_SALEBUY_innerdataset = new nexacro.NormalDataset("divData_form_crdoTY_SALEBUY_innerdataset", obj);
            divData_form_crdoTY_SALEBUY_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">O</Col><Col id=\"datacolumn\">매출</Col></Row><Row><Col id=\"codecolumn\">I</Col><Col id=\"datacolumn\">매입</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_crdoTY_SALEBUY_innerdataset);
            obj.set_text("A");
            obj.set_value("A");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtCONVERSATION_ID","447","35","215","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_value("");
            obj.set_textAlign("center");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtAPPROVE_ID","780","35","215","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_value("");
            obj.set_textAlign("center");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboCD_AMEND","114","64","215","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var divData_form_cboCD_AMEND_innerdataset = new nexacro.NormalDataset("divData_form_cboCD_AMEND_innerdataset", obj);
            divData_form_cboCD_AMEND_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\"/></Row><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">01:기재사항의 착오·정정</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">02:공급가액 변동</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">03:환입</Col></Row><Row><Col id=\"codecolumn\">04</Col><Col id=\"datacolumn\">04:계약의 해제</Col></Row><Row><Col id=\"codecolumn\">05</Col><Col id=\"datacolumn\">05:내국신용장 사후 개설</Col></Row><Row><Col id=\"codecolumn\">06</Col><Col id=\"datacolumn\">06:착오에 의한 이중발급</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_cboCD_AMEND_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboCD_VATPROOF","114","93","215","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var divData_form_cboCD_VATPROOF_innerdataset = new nexacro.NormalDataset("divData_form_cboCD_VATPROOF_innerdataset", obj);
            divData_form_cboCD_VATPROOF_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">세금계산서</Col></Row><Row><Col id=\"codecolumn\">B</Col><Col id=\"datacolumn\">계산서</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_cboCD_VATPROOF_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_PROOF","447","93","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboTY_TAXDEMAND","780","93","215","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var divData_form_cboTY_TAXDEMAND_innerdataset = new nexacro.NormalDataset("divData_form_cboTY_TAXDEMAND_innerdataset", obj);
            divData_form_cboTY_TAXDEMAND_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">영수</Col></Row><Row><Col id=\"codecolumn\">18</Col><Col id=\"datacolumn\">청구</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_cboTY_TAXDEMAND_innerdataset);
            obj.set_text("영수");
            obj.set_value("1");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","114","122","215","20",null,null,"215",null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("AutoSet").set("true");
            obj.getSetter("CDTextWidth").set("80");
            obj.getSetter("fittocontents").set("true");
            obj.set_taborder("30");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","447","122","269","20",null,null,null,"353",null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DWX_CFVENDOR_DH");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("31");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_DAM_ISU","114","151","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_value("");
            obj.set_textAlign("left");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_MOBILE_ISU","197","151","132","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_value("");
            obj.set_textAlign("left");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_DAMDANG","447","151","106","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_value("");
            obj.set_textAlign("left");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtMOBILE","556","151","160","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_value("");
            obj.set_textAlign("left");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_EMAIL_ISU","114","180","214","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("56");
            obj.set_value("");
            obj.set_textAlign("left");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_EMAIL","448","180","214","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("57");
            obj.set_value("");
            obj.set_textAlign("left");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtBYR_BIZPLACE_CODE","780","180","214","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("58");
            obj.set_value("");
            obj.set_textAlign("center");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_REM","114","209","547","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("59");
            obj.set_value("");
            obj.set_textAlign("left");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboTY_REV","780","209","215","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("60");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var divData_form_cboTY_REV_innerdataset = new nexacro.NormalDataset("divData_form_cboTY_REV_innerdataset", obj);
            divData_form_cboTY_REV_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">E</Col><Col id=\"datacolumn\">스마트빌</Col></Row><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">나라장터</Col></Row><Row><Col id=\"codecolumn\">B</Col><Col id=\"datacolumn\">기타</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_cboTY_REV_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_SUM","114","238","214","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("61");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_autoselect("true");
            obj.set_format("#,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_SUPPLY","447","238","214","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("62");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_autoselect("true");
            obj.set_format("#,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_VAT","780","238","214","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("63");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_autoselect("true");
            obj.set_format("#,##0");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTopTitle00","0","273","186","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("64");
            obj.set_text("품목정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.crdoTY_SALEBUY","value","dsList","TY_SALEBUY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ctxtCONVERSATION_ID","value","dsList","CONVERSATION_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ctxtAPPROVE_ID","value","dsList","APPROVE_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.cboCD_AMEND","value","dsList","CD_AMEND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.cboCD_VATPROOF","value","dsList","CD_VATPROOF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.calDT_PROOF","value","dsList","DT_PROOF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.cboTY_TAXDEMAND","value","dsList","TY_TAXDEMAND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.ccfCD_SITE.form.CDTextBox","value","dsList","CD_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.ccfCD_VENDOR.form.CDTextBox","value","dsList","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.ctxtDS_DAM_ISU","value","dsList","DS_DAM_ISU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.ctxtDS_MOBILE_ISU","value","dsList","DS_MOBILE_ISU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.ctxtDS_DAMDANG","value","dsList","DS_DAMDANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.ctxtMOBILE","value","dsList","MOBILE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.ctxtDS_EMAIL_ISU","value","dsList","DS_EMAIL_ISU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.ctxtDS_EMAIL","value","dsList","DS_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.ctxtBYR_BIZPLACE_CODE","value","dsList","BYR_BIZPLACE_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.ctxtDS_REM","value","dsList","DS_REM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.cboTY_REV","value","dsList","TY_REV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.ctxtAM_SUM","value","dsList","AM_SUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.ctxtAM_SUPPLY","value","dsList","AM_SUPPLY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.ctxtAM_VAT","value","dsList","AM_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.ccfCD_VENDOR.form.DSTextBox","value","dsList","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.ccfCD_SITE.form.DSTextBox","value","dsList","DS_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DWB_ETAX.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.execGubun = "";	// 버튼클릭 구분값(본사확정, 본사확정취소, 전표발행, 전표취소)
        //this.m1InVal = "";	// 기성년월 값 셋팅될때 그리드의 헤더명(M-1 컬럼명)을 담는다
        //this.m2InVal = "";	// 기성년월 값 셋팅될때 그리드의 헤더명(M-2 컬럼명)을 담는다
        //this.m3InVal = "";	// 기성년월 값 셋팅될때 그리드의 헤더명(M-3 컬럼명)을 담는다

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
        	this.fnComboSelect();

        	this.divData.form.staYN_ISSUE.set_text("[전송상태:"+ this.getOwnerFrame().YN_ISSUE + "]");

        	this.dsSearch.setColumn(0, "NO_VAT", this.getOwnerFrame().NO_VAT);
        	this.dsSearch.setColumn(0, "CONVERSATION_ID", this.getOwnerFrame().CONVERSATION_ID);
        	this.dsSearch.setColumn(0, "ID_TRANS", this.getOwnerFrame().ID_TRANS);

        	this.FormBtns.Select.click();

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {

        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        };


        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsListSub, "DH", "DHV_ETAX_ITEM");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	//if (!this.fnSelectValidate()) return false;

        	var strSvcId    = "select";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSearch";
        	var outData     = "dsList=select0 dsListSub=select1";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
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

        };

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        };

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        };

         /*
          *	조회 버튼
          */
        this.fnComboSelect = function() {
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {

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
        		// E:스마트빌로 고정 (콤보리스트는 유지되어있음).
        		this.divData.form.cboTY_REV.set_value("E");
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_VENDOR") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")))
        		{
        			this.gfnAlert("현장코드를 먼저 입력해주세요.");
        			return;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "TY_VENDOR", "DLYINT");
        	}
        	return true;
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divSplitter.addEventHandler("ondragmove",this.divData_divSplitter_ondragmove,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsListSub.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };
        this.loadIncludeScript("DWB_ETAX.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
