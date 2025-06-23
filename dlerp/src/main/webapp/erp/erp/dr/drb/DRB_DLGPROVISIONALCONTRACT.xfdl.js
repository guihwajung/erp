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
            this.set_titletext("일정등록");
            this.getSetter("maxwidth").set("830");
            this.getSetter("maxheight").set("700");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,660);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DRBPR_PROVISIONAL_ALL_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DRBPR_PROVISIONAL_MOVE_CONTRACT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_DISTRICT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ZIPCODE_REC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR2_REC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR3_REC\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ZIPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR3\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BANK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CARD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CARD\" type=\"STRING\" size=\"256\"/><Column id=\"NO_APPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FIN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_PROVISIONAL\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"YN_JOINT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_RECEIPT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DELAY\" type=\"STRING\" size=\"256\"/><Column id=\"TY_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"TY_MONEY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TY_DISTRICT\"/><Col id=\"RT_OPTION\"/><Col id=\"DS_OPTION\"/><Col id=\"NO_ZIPCODE_REC\"/><Col id=\"DS_ADDR2_REC\"/><Col id=\"DS_ADDR3_REC\"/><Col id=\"NO_ZIPCODE\"/><Col id=\"DS_ADDR2\"/><Col id=\"DS_ADDR3\"/><Col id=\"CD_GUJA\"/><Col id=\"DS_BANK\"/><Col id=\"NO_GUJA\"/><Col id=\"CD_CARD\"/><Col id=\"DS_CARD\"/><Col id=\"NO_APPROVAL\"/><Col id=\"CD_FIN\"/><Col id=\"DS_FIN\"/><Col id=\"NO_HO\"/><Col id=\"NO_FLOOR\"/><Col id=\"NO_DONG\"/><Col id=\"CD_ACNTUNIT\"/><Col id=\"NO_PROVISIONAL\"/><Col id=\"TY_MONEY\">1</Col><Col id=\"TY_POSITION\">2</Col><Col id=\"YN_DELAY\">N</Col><Col id=\"TY_RECEIPT\">N</Col><Col id=\"YN_JOINT\">N</Col><Col id=\"TY_CONTRACTOR\">P</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_CONTRACTOR", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">개인</Col><Col id=\"CD_CODE\">P</Col></Row><Row><Col id=\"DS_CODE\">법인</Col><Col id=\"CD_CODE\">C</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_EBILL", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">전자</Col><Col id=\"CD_CODE\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_JOINT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">있음</Col><Col id=\"CD_CODE\">Y</Col></Row><Row><Col id=\"DS_CODE\">없음</Col><Col id=\"CD_CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_RECEIPT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">정상</Col><Col id=\"CD_CODE\">N</Col></Row><Row><Col id=\"DS_CODE\">대체</Col><Col id=\"CD_CODE\">C</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_DELAY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">적용함</Col><Col id=\"CD_CODE\">Y</Col></Row><Row><Col id=\"DS_CODE\">적용안함</Col><Col id=\"CD_CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_POSITION", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">M/H(현금)</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"VALUE\">은행</Col></Row><Row><Col id=\"VALUE\">본사</Col><Col id=\"CODE\">3</Col></Row><Row><Col id=\"VALUE\">기타</Col><Col id=\"CODE\">4</Col></Row><Row><Col id=\"VALUE\">입금미수</Col><Col id=\"CODE\">5</Col></Row><Row><Col id=\"VALUE\">카드</Col><Col id=\"CODE\">F</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_MONEY", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">본인</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"VALUE\">알선융자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_PROVISIONAL\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PROVISIONAL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ZIPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","30","100.00%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("계약자정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE","0","95","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","staDS_SITE:-1","95","207","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","35.00%","616","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","52.50%","616","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg00","111","66","448","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE00","0","66","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("군/OPTION");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtTY_DISTRICT","115","71","35","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_enable("false");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg03","438","95","121","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE02","317","95","122","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("계약자명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divTitle","0","0",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("div_SEARCH_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboTY_DEPT","805","4","89","20",null,null,null,null,null,null,this.divData.form.divTitle.form);
            obj.set_taborder("1");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTY_DEPT");
            obj.set_visible("false");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divData.form.divTitle.addChild(obj.name, obj);

            obj = new Static("staINFO","20","6",null,"22","159",null,null,null,null,null,this.divData.form.divTitle.form);
            obj.set_taborder("1");
            obj.set_text("분양계약");
            this.divData.form.divTitle.addChild(obj.name, obj);

            obj = new Static("staBg01","659","95","141","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg04","659","66","141","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_CONTRACT","663","100","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE03","558","95","102","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("계약(대체)일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE04","558","66","102","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("계약구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfDISTRICT","edtTY_DISTRICT:5","71","277","20",null,null,"200",null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("16");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_JUMIN","115","100","113","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_CONTRACTOR","442","100","113","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_CONTRACTOR","663","71","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_innerdataset("dsTY_CONTRACTOR");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_enable("true");
            obj.set_text("전법인");
            obj.set_value("Y");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg02","659","124","141","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE01","558","124","102","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("휴대폰");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg05","438","124","121","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_OFFICETEL","442","129","113","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE05","317","124","122","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_text("☎(직장)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg06","111","124","207","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_TEL","115","129","113","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE06","0","124","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_text("☎(자택)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_MOBILE","663","129","113","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg07","111","153","689","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE07","0","153","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_text("주민등록주소");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg08","111","182","689","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_ADDR_REC","500","158","296","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfNO_ZIPCODE_REC","115","158","380","20",null,null,"200",null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("35");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE08","0","182","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_text("현주소");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg09","659","211","141","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_UPJONG","663","216","113","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE09","558","211","102","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_text("업종");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg10","438","211","121","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_UPTAE","442","216","113","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE10","317","211","122","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg11","111","211","207","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_EMAIL","115","216","113","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE11","0","211","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_text("e-Mail");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg12","659","240","141","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_CONTRACT","663","245","113","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE12","558","240","102","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj.set_text("계약서번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg13","438","240","121","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE13","317","240","122","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("50");
            obj.set_text("세금계산서발급구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg14","111","240","207","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_VENDOR","115","245","113","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("52");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE14","0","240","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("53");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg16","438","269","362","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE16","317","269","122","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("55");
            obj.set_text("공동명의계약자여부");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg17","111","269","207","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_VENDOR","115","274","113","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("57");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE17","0","269","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("58");
            obj.set_text("상호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg18","111","298","689","59",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE18","0","298","112","59",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("60");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtDS_REMARK","115","303","681","49",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("61");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_EBILL","443","245","112","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("62");
            obj.set_innerdataset("dsTY_EBILL");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_enable("true");
            obj.set_text("전법인");
            obj.set_value("Y");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_JOINT","443","275","117","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("63");
            obj.set_innerdataset("dsYN_JOINT");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_enable("true");
            obj.set_text("전법인");
            obj.set_value("Y");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE00","0","360","100.00%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("64");
            obj.set_text("가계약");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg15","438","389","362","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE15","317","389","122","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("66");
            obj.set_text("가계약금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg19","111","389","207","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE19","0","389","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("68");
            obj.set_text("가계약일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_PROVISIONAL","442","394","152","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("69");
            obj.set_limitbymask("both");
            obj.set_format("###,###,###,###,###");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_PROVISIONAL","115","394","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("70");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg20","438","449","362","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE20","317","449","122","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("72");
            obj.set_text("수납구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg21","111","449","207","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE21","0","449","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("74");
            obj.set_text("수납금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE01","0","420","100.00%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("75");
            obj.set_text("계약금수납");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg22","111","478","689","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE22","0","478","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("77");
            obj.set_text("수납처");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg24","438","536","362","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE24","317","536","122","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("79");
            obj.set_text("융자사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg25","111","536","207","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE25","0","536","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("81");
            obj.set_text("납입구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg26","111","565","689","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE26","0","565","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("83");
            obj.set_text("연체적용");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_DELAY","117","571","163","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("84");
            obj.set_innerdataset("dsYN_DELAY");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_enable("true");
            obj.set_text("전법인");
            obj.set_value("Y");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_RECEIVED","115","454","152","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("85");
            obj.set_limitbymask("both");
            obj.set_format("###,###,###,###,###");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboTY_POSITION","115","483","152","21",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("86");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_enable("true");
            obj.set_innerdataset("dsTY_POSITION");
            obj.set_text("선택");
            obj.set_value("999");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboTY_MONEY","115","541","152","21",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("87");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_enable("true");
            obj.set_innerdataset("dsTY_MONEY");
            obj.set_text("선택");
            obj.set_value("999");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfFINANCING","442","541","265","20",null,null,"200",null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("88");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_RECEIPT","443","455","117","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("89");
            obj.set_innerdataset("dsTY_RECEIPT");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_enable("true");
            obj.set_text("전법인");
            obj.set_value("Y");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataTopCard","0","507",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("91");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE14","109","0","448","30",null,null,null,null,null,null,this.divData.form.divDataTopCard.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTopCard.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE15","0","0","112","30",null,null,null,null,null,null,this.divData.form.divDataTopCard.form);
            obj.set_taborder("3");
            obj.set_text("카드사");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTopCard.addChild(obj.name, obj);

            obj = new Div("cfCD_CARD","115","5","265","20",null,null,"200",null,null,null,this.divData.form.divDataTopCard.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            this.divData.form.divDataTopCard.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE03","556","0","102","30",null,null,null,null,null,null,this.divData.form.divDataTopCard.form);
            obj.set_taborder("4");
            obj.set_text("승인번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTopCard.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE02","657","0","143","30",null,null,null,null,null,null,this.divData.form.divDataTopCard.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTopCard.addChild(obj.name, obj);

            obj = new Edit("edtNO_APPROVAL","664","5","113","20",null,null,null,null,null,null,this.divData.form.divDataTopCard.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_maxlength("8");
            this.divData.form.divDataTopCard.addChild(obj.name, obj);

            obj = new Div("cfNO_ZIPCODE","115","187","380","20",null,null,"200",null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("31");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_ADDR3","500","187","296","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataTopGuja","0","507",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("90");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE14","111","0","689","30",null,null,null,null,null,null,this.divData.form.divDataTopGuja.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTopGuja.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE15","0","0","112","30",null,null,null,null,null,null,this.divData.form.divDataTopGuja.form);
            obj.set_taborder("3");
            obj.set_text("납입계좌");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTopGuja.addChild(obj.name, obj);

            obj = new Edit("edtNO_GUJA","385","5","145","20",null,null,null,null,null,null,this.divData.form.divDataTopGuja.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divData.form.divDataTopGuja.addChild(obj.name, obj);

            obj = new Div("cfCD_GUJA","115","5","265","20",null,null,"200",null,null,null,this.divData.form.divDataTopGuja.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            this.divData.form.divDataTopGuja.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divData.form.cfDISTRICT.form.CDTextBox","value","dsData","RT_OPTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.cfDISTRICT.form.DSTextBox","value","dsData","DS_OPTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.cfNO_ZIPCODE.form.CDTextBox","value","dsData","NO_ZIPCODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.cfNO_ZIPCODE.form.DSTextBox","value","dsData","DS_ADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.cfNO_ZIPCODE_REC.form.CDTextBox","value","dsData","NO_ZIPCODE_REC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.cfNO_ZIPCODE_REC.form.DSTextBox","value","dsData","DS_ADDR2_REC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.mskAM_PROVISIONAL","value","dsListInfo","AM_PROVISIONAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.cfFINANCING.form.CDTextBox","value","dsData","CD_FIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.cfFINANCING.form.DSTextBox","value","dsData","DS_FIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.divDataTopGuja.form.cfCD_GUJA.form.CDTextBox","value","dsData","CD_GUJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.divDataTopGuja.form.cfCD_GUJA.form.DSTextBox","value","dsData","DS_BANK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.divDataTopCard.form.cfCD_CARD.form.CDTextBox","value","dsData","CD_CARD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.divDataTopCard.form.cfCD_CARD.form.DSTextBox","value","dsData","DS_CARD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.tclDT_PROVISIONAL","value","dsListInfo","DT_PROVISIONAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.edtNO_JUMIN","value","dsListInfo","NO_JUMIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.edtDS_CONTRACTOR","value","dsListInfo","DS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.edtNO_MOBILE","value","dsListInfo","NO_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.edtDS_ADDR_REC","value","dsListInfo","DS_ADDR3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.rdoTY_CONTRACTOR","value","dsData","TY_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.rdoYN_JOINT","value","dsData","YN_JOINT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.rdoTY_RECEIPT","value","dsData","TY_RECEIPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.rdoYN_DELAY","value","dsData","YN_DELAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.cboTY_POSITION","value","dsData","TY_POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.cboTY_MONEY","value","dsData","TY_MONEY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DRB_DLGPROVISIONALCONTRACT.xfdl", function() {
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

        	this.tclDT_CONTRACT.set_value(this.gfnGetDate());

        	this.dsData.setColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        	this.dsData.setColumn(0, "NO_DONG", this.getOwnerFrame().DONG);
        	this.dsData.setColumn(0, "NO_FLOOR", this.getOwnerFrame().FLOOR);
        	this.dsData.setColumn(0, "NO_HO", this.getOwnerFrame().HO);
        	this.dsData.setColumn(0, "NO_PROVISIONAL", this.getOwnerFrame().NO_PROVISIONAL);

        	this.mskAM_RECEIVED.set_value(this.getOwnerFrame().AM_RECEIVED);
        	this.edtTY_DISTRICT.set_value(this.getOwnerFrame().TY_DISTRICT);
        	this.cfDISTRICT.form.CDTextBox.set_value(this.getOwnerFrame().RT_OPTION);
        	this.cfDISTRICT.form.DSTextBox.set_value(this.getOwnerFrame().DS_OPTION);

        	if(!this.gfnIsNull(this.getOwnerFrame().VCD_GUJA)){
        		this.cfCD_GUJA.form.CDTextBox.set_value(this.getOwnerFrame().VCD_GUJA);
        		this.cfCD_GUJA.form.DSTextBox.set_value(this.getOwnerFrame().VDS_BANK);
        		this.edtNO_GUJA.set_value(this.getOwnerFrame().VNO_GUJA);
        	}

        	this.staINFO.set_text("분양계약 ("+this.getOwnerFrame().DONG+"동"+this.getOwnerFrame().FLOOR+"층"+this.getOwnerFrame().HO+"호)");

        	this.fnTyContractorSetEnable();
        	this.fnTyMoneySetEnable();
        	this.fnTyPositionSetVisible();

        	this.FormBtns.Select.click();

        	/*
        	this.staTITLE.set_text("가게약해약관리 (" + this.getOwnerFrame().DONG + "동 " + this.getOwnerFrame().FLOOR + " 층 " + this.getOwnerFrame().HO + " 호)");

        	this.dsData.setColumn(0, "TY_STATE", "해약");

        	this.dsData.setColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        	this.dsData.setColumn(0, "NO_DONG", this.getOwnerFrame().DONG);
        	this.dsData.setColumn(0, "NO_FLOOR", this.getOwnerFrame().FLOOR);
        	this.dsData.setColumn(0, "NO_HO", this.getOwnerFrame().HO);
        	this.dsData.setColumn(0, "DT_PROVISIONAL", this.getOwnerFrame().txtDT_PROVISIONAL);
        	this.dsData.setColumn(0, "DT_PLANCONTRACT", this.getOwnerFrame().txtDT_PLANCONTRACT);
        	this.dsData.setColumn(0, "AM_PROVISIONAL", this.getOwnerFrame().txtAM_PROVISIONAL);
        	this.dsData.setColumn(0, "CD_GUJA", this.getOwnerFrame().txtCD_GUJA);
        	this.dsData.setColumn(0, "DS_BANK", this.getOwnerFrame().txtDS_BANK);
        	this.dsData.setColumn(0, "NO_GUJA", this.getOwnerFrame().txtNO_GUJA);
        	this.dsData.setColumn(0, "DS_NAME", this.getOwnerFrame().txtDS_NAME);
        	this.dsData.setColumn(0, "NO_JUMIN", this.getOwnerFrame().txtNO_JUMIN);
        	this.dsData.setColumn(0, "NO_TEL", this.getOwnerFrame().txtNO_TEL);
        	this.dsData.setColumn(0, "DS_ADDR1", this.getOwnerFrame().txtDS_ADDR1);
        	this.dsData.setColumn(0, "DS_ADDR2", this.getOwnerFrame().txtDS_ADDR2);
        	*/

        	//적용년도 셋팅
        	/*
        	var today = this.gfnGetDate();
        	this.dsData.setColumn(0, "YM_BASE", today.substring(0,6));
        	this.dsData.setColumn(0, "DT_PLANFROM", today);
        	this.dsData.setColumn(0, "DT_PLANTO", today);
        	*/
        	//this.fnTycorpEnable();


        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	//this.FormBtns.Select.set_enable(false);
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
        	//this.dxGrid = this.divData.form.objGrid;

        	this.staINFO = this.divData.form.divTitle.form.staINFO;
        	this.edtTY_DISTRICT = this.divData.form.edtTY_DISTRICT;
        	this.cfDISTRICT = this.divData.form.cfDISTRICT;

        	this.rdoTY_CONTRACTOR = this.divData.form.rdoTY_CONTRACTOR;
        	this.edtNO_JUMIN = this.divData.form.edtNO_JUMIN;
        	this.edtDS_CONTRACTOR = this.divData.form.edtDS_CONTRACTOR;
        	this.tclDT_CONTRACT = this.divData.form.tclDT_CONTRACT;
        	this.edtNO_TEL = this.divData.form.edtNO_TEL;
        	this.edtNO_OFFICETEL = this.divData.form.edtNO_OFFICETEL;
        	this.edtNO_MOBILE = this.divData.form.edtNO_MOBILE;
        	this.cfNO_ZIPCODE = this.divData.form.cfNO_ZIPCODE;
        	this.edtDS_ADDR3 = this.divData.form.edtDS_ADDR3;
        	this.cfNO_ZIPCODE_REC = this.divData.form.cfNO_ZIPCODE_REC;
        	this.edtDS_ADDR_REC = this.divData.form.edtDS_ADDR_REC;
        	this.edtDS_EMAIL = this.divData.form.edtDS_EMAIL;
        	this.edtDS_UPTAE = this.divData.form.edtDS_UPTAE;
        	this.edtDS_UPJONG = this.divData.form.edtDS_UPJONG;
        	this.edtCD_VENDOR = this.divData.form.edtCD_VENDOR;
        	this.rdoTY_EBILL = this.divData.form.rdoTY_EBILL;
        	this.edtNO_CONTRACT = this.divData.form.edtNO_CONTRACT;
        	this.edtDS_VENDOR = this.divData.form.edtDS_VENDOR;
        	this.rdoYN_JOINT = this.divData.form.rdoYN_JOINT;
        	this.txtDS_REMARK = this.divData.form.txtDS_REMARK;

        	this.tclDT_PROVISIONAL = this.divData.form.tclDT_PROVISIONAL;
        	this.mskAM_PROVISIONAL = this.divData.form.mskAM_PROVISIONAL;
        	this.mskAM_RECEIVED = this.divData.form.mskAM_RECEIVED;
        	this.rdoTY_RECEIPT = this.divData.form.rdoTY_RECEIPT;
        	this.cboTY_POSITION = this.divData.form.cboTY_POSITION;

        	this.divDataTopGuja = this.divData.form.divDataTopGuja;
        	this.cfCD_GUJA = this.divData.form.divDataTopGuja.form.cfCD_GUJA;
        	this.edtNO_GUJA = this.divData.form.divDataTopGuja.form.edtNO_GUJA;
        	this.divDataTopCard = this.divData.form.divDataTopCard;
        	this.cfCD_CARD = this.divData.form.divDataTopCard.form.cfCD_CARD;
        	this.edtNO_APPROVAL = this.divData.form.divDataTopCard.form.edtNO_APPROVAL;

        	this.cboTY_MONEY = this.divData.form.cboTY_MONEY;
        	this.cfFINANCING = this.divData.form.cfFINANCING;
        	this.rdoYN_DELAY = this.divData.form.rdoYN_DELAY;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.cfDISTRICT.CodeFindName = "DRX_CFCHANGEOPTION_CODEFIND";
        	this.cfDISTRICT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfDISTRICT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.cfNO_ZIPCODE.CodeFindName = "DZX_CFZIP_STREET";
        	this.cfNO_ZIPCODE_REC.CodeFindName = "DZX_CFZIP_STREET";

        	this.cfCD_GUJA.CodeFindName = "DRX_CFACCOUNT_CODEFIND";
        	this.cfCD_GUJA.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_GUJA.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.cfCD_CARD.CodeFindName = "DRX_CARD_CODEFIND";

        	this.cfFINANCING.CodeFindName = "DRX_CFFINANCING_CODEFIND";
        	this.cfFINANCING.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
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
        	this.dsSelect.addColumn("NO_PROVISIONAL", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_ACNTUNIT", "string");
        	this.dsSave.addColumn("TY_GUBUN", "string");
        	this.dsSave.addColumn("NO_CHASU", "string");
        	this.dsSave.addColumn("NO_DONG", "string");
        	this.dsSave.addColumn("NO_FLOOR", "string");
        	this.dsSave.addColumn("NO_HO", "string");
        	this.dsSave.addColumn("NO_UNIONMEMBER", "string");
        	this.dsSave.addColumn("DT_CONTRACT", "string");
        	this.dsSave.addColumn("TY_CONTRACTOR", "string");
        	this.dsSave.addColumn("DS_CONTRACTOR", "string");
        	this.dsSave.addColumn("NO_JUMIN", "string");
        	this.dsSave.addColumn("NO_RECPOST", "string");
        	this.dsSave.addColumn("DS_RECADDR2", "string");
        	this.dsSave.addColumn("DS_RECADDR3", "string");
        	this.dsSave.addColumn("NO_POST", "string");
        	this.dsSave.addColumn("DS_ADDR2", "string");
        	this.dsSave.addColumn("DS_ADDR3", "string");
        	this.dsSave.addColumn("NO_TEL", "string");
        	this.dsSave.addColumn("NO_OFFICETEL", "string");
        	this.dsSave.addColumn("NO_MOBILE", "string");
        	this.dsSave.addColumn("DS_EMAIL", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("DS_VENDOR", "string");
        	this.dsSave.addColumn("DS_UPTAE", "string");
        	this.dsSave.addColumn("DS_UPJONG", "string");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("TY_DISTRICT", "string");
        	this.dsSave.addColumn("RT_OPTION", "string");
        	this.dsSave.addColumn("YN_EBILL", "string");
        	this.dsSave.addColumn("YN_JOINT", "string");
        	this.dsSave.addColumn("DT_PROVISIONAL", "string");
        	this.dsSave.addColumn("AM_PROVISIONAL", "bigdecimal");
        	this.dsSave.addColumn("NO_PROVISIONAL", "string");
        	this.dsSave.addColumn("AM_RECEIVED", "bigdecimal");
        	this.dsSave.addColumn("TY_RECEIPT", "string");
        	this.dsSave.addColumn("TY_MONEY", "string");
        	this.dsSave.addColumn("CD_GUJA", "string");
        	this.dsSave.addColumn("NO_FINANCING", "string");
        	this.dsSave.addColumn("YN_DELAY", "string");
        	this.dsSave.addColumn("TY_POSITION", "string");
        	this.dsSave.addColumn("ID_UPDATE", "string");
        	this.dsSave.addColumn("CD_CARD", "string");
        	this.dsSave.addColumn("DS_CARD", "string");
        	this.dsSave.addColumn("NO_APPROVAL", "string");
        	this.dsSave.addColumn("NO_CONTRACT", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
          /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	//if (!this.fnSelectValidate()) return false;

        	//this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsData.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsData.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsData.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect.setColumn(0, "NO_DONG", this.dsData.getColumn(0, "NO_DONG"));
        	this.dsSelect.setColumn(0, "NO_FLOOR", this.dsData.getColumn(0, "NO_FLOOR"));
        	this.dsSelect.setColumn(0, "NO_HO", this.dsData.getColumn(0, "NO_HO"));
        	this.dsSelect.setColumn(0, "NO_UNIONMEMBER", "");
        	this.dsSelect.setColumn(0, "NO_PROVISIONAL", this.dsData.getColumn(0, "NO_PROVISIONAL"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsListInfo=select0";
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
        	 if (svcID == "select") {

        		//this.fnSetButton();
        		//this.gfnGridAfterSelect(this.dxGridSub);
        	}else if (svcID == "save") {
        		if(errorCode == 0)
        		{
        			// this.close()가 작동하지 않았고,
        			// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        			this.getParentContext().close(true);
        		}else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if(id == "cfDISTRICT") {
        		dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        		dsUserParam.setColumn(nrow, "NO_SIZE", this.getOwnerFrame().NO_SIZE);
        		dsUserParam.setColumn(nrow, "TY_TYPE", this.getOwnerFrame().TY_TYPE);
        		dsUserParam.setColumn(nrow, "TY_DISTRICT", this.getOwnerFrame().TY_DISTRICT);
        	}
        	if(id == "cfCD_GUJA") {
        		dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        	}
        	if(id == "cfFINANCING") {
        		dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        		dsUserParam.setColumn(nrow, "YN_OPTION", "N");
        	}

        	return true;
        };


        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;

        	if(id == "cfCD_GUJA") {
        		var noGuja = "";
        		if(!this.gfnIsNull(arrData)) {
        			noGuja = arrData[0]["NO_GUJA"];
        		}

        		this.edtNO_GUJA.set_value(noGuja);
        	}

        	if(id == "cfDISTRICT") {
        		var tyDistrict = "";
        		if(!this.gfnIsNull(arrData)) {
        			tyDistrict = arrData[0]["TY_DISTRICT"];
        		}

        		this.edtTY_DISTRICT.set_value(tyDistrict);
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        // 확인 버튼 클릭
        this.divData_btnOk_onclick = function(obj,e)
        {
        	if (!this.fnSaveValidate()) return false;

        	this.dsSave.clearData();
        	this.dsSave.addRow();

        	this.dsSave.setColumn(0, "CD_ACNTUNIT", this.dsData.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSave.setColumn(0, "TY_GUBUN", this.dsData.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSave.setColumn(0, "NO_CHASU", this.dsData.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSave.setColumn(0, "NO_DONG", this.dsData.getColumn(0, "NO_DONG"));
        	this.dsSave.setColumn(0, "NO_FLOOR", this.dsData.getColumn(0, "NO_FLOOR"));
        	this.dsSave.setColumn(0, "NO_HO", this.dsData.getColumn(0, "NO_HO"));
        	this.dsSave.setColumn(0, "NO_UNIONMEMBER", "");
        	this.dsSave.setColumn(0, "DT_CONTRACT", nexacro.replaceAll(this.tclDT_CONTRACT.value, "-", ""));
        	this.dsSave.setColumn(0, "TY_CONTRACTOR", this.rdoTY_CONTRACTOR.value);
        	this.dsSave.setColumn(0, "DS_CONTRACTOR", this.edtDS_CONTRACTOR.value);
        	this.dsSave.setColumn(0, "NO_JUMIN", nexacro.replaceAll(this.edtNO_JUMIN.value, "-", ""));
        	this.dsSave.setColumn(0, "NO_RECPOST", nexacro.replaceAll(this.cfNO_ZIPCODE_REC.form.CDTextBox.value, "-", ""));
        	this.dsSave.setColumn(0, "DS_RECADDR2", this.cfNO_ZIPCODE_REC.form.DSTextBox.value);
        	this.dsSave.setColumn(0, "DS_RECADDR3", this.edtDS_ADDR_REC.value);
        	this.dsSave.setColumn(0, "NO_POST", nexacro.replaceAll(this.cfNO_ZIPCODE.form.CDTextBox.value, "-", ""));
        	this.dsSave.setColumn(0, "DS_ADDR2", this.cfNO_ZIPCODE.form.DSTextBox.value);
        	this.dsSave.setColumn(0, "DS_ADDR3", this.edtDS_ADDR3.value);
        	this.dsSave.setColumn(0, "NO_TEL", this.edtNO_TEL.value);
        	this.dsSave.setColumn(0, "NO_OFFICETEL", this.edtNO_OFFICETEL.value);
        	this.dsSave.setColumn(0, "NO_MOBILE", nexacro.replaceAll(this.edtNO_MOBILE.value, "-", ""));
        	this.dsSave.setColumn(0, "DS_EMAIL", this.edtDS_EMAIL.value);
        	this.dsSave.setColumn(0, "CD_VENDOR", nexacro.replaceAll(this.edtCD_VENDOR.value, "-", ""));
        	this.dsSave.setColumn(0, "DS_VENDOR", this.edtDS_VENDOR.value);
        	this.dsSave.setColumn(0, "DS_UPTAE", this.edtDS_UPTAE.value);
        	this.dsSave.setColumn(0, "DS_UPJONG", this.edtDS_UPJONG.value);
        	this.dsSave.setColumn(0, "DS_REMARK", this.txtDS_REMARK.value);
        	this.dsSave.setColumn(0, "TY_DISTRICT", this.edtTY_DISTRICT.value);
        	this.dsSave.setColumn(0, "RT_OPTION", this.cfDISTRICT.form.CDTextBox.value);
        	this.dsSave.setColumn(0, "YN_EBILL", this.rdoTY_EBILL.value);
        	this.dsSave.setColumn(0, "YN_JOINT", this.rdoYN_JOINT.value);
        	this.dsSave.setColumn(0, "DT_PROVISIONAL", nexacro.replaceAll(this.tclDT_PROVISIONAL.value, "-", ""));
        	this.dsSave.setColumn(0, "AM_PROVISIONAL", this.mskAM_PROVISIONAL.value);
        	this.dsSave.setColumn(0, "NO_PROVISIONAL", this.dsData.getColumn(0, "NO_PROVISIONAL"));
        	this.dsSave.setColumn(0, "AM_RECEIVED", this.mskAM_RECEIVED.value);
        	this.dsSave.setColumn(0, "TY_RECEIPT", this.rdoTY_RECEIPT.value);
        	this.dsSave.setColumn(0, "TY_MONEY", this.cboTY_MONEY.value);
        	this.dsSave.setColumn(0, "CD_GUJA", this.cfCD_GUJA.form.CDTextBox.value);
        	this.dsSave.setColumn(0, "NO_FINANCING", this.cfFINANCING.form.CDTextBox.value);
        	this.dsSave.setColumn(0, "YN_DELAY", this.rdoYN_DELAY.value);
        	this.dsSave.setColumn(0, "TY_POSITION", this.cboTY_POSITION.value);
        	this.dsSave.setColumn(0, "ID_UPDATE", this.AuthClient.ID_USER);
        	this.dsSave.setColumn(0, "CD_CARD", this.cfCD_GUJA.form.CDTextBox.value);
        	this.dsSave.setColumn(0, "DS_CARD", this.cfCD_GUJA.form.DSTextBox.value);
        	this.dsSave.setColumn(0, "NO_APPROVAL", this.edtNO_APPROVAL.value);
        	this.dsSave.setColumn(0, "NO_CONTRACT", this.edtNO_CONTRACT.value);

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


        };


        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };


        this.fnSaveValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsData.getColumn(0,"CD_ACNTUNIT"))) {
        		validate = false;
        		this.gfnAlert("사업지코드가 존재하지 않습니다.");
        	}else if (this.gfnIsNull(this.dsData.getColumn(0,"NO_DONG"))) {
        		validate = false;
        		this.gfnAlert("동정보가 존재하지 않습니다.");
        	}else if (this.gfnIsNull(this.dsData.getColumn(0,"NO_FLOOR"))) {
        		validate = false;
        		this.gfnAlert("층정보가 존재하지 않습니다.");
        	}else if (this.gfnIsNull(this.dsData.getColumn(0,"NO_HO"))) {
        		validate = false;
        		this.gfnAlert("호정보가 존재하지 않습니다.");
        	}else if (this.gfnIsNull(this.gfnTrim(this.tclDT_CONTRACT.value))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.tclDT_CONTRACT.setFocus();
        		}
        		this.gfnAlert("계약일자를 입력하지 않았습니다.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.gfnTrim(this.edtDS_CONTRACTOR.value))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.edtDS_CONTRACTOR.setFocus();
        		}
        		this.gfnAlert("계약자성명을 입력하지 않았습니다.", "fnVaidateCallback");
        	}else if (this.rdoTY_CONTRACTOR.value == "P" && this.gfnIsNull(this.gfnTrim(this.edtNO_JUMIN.value))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.edtNO_JUMIN.setFocus();
        		}
        		this.gfnAlert("주민등록번호를 입력하지 않았습니다.", "fnVaidateCallback");
        	}else if (this.rdoTY_CONTRACTOR.value == "C" && this.gfnIsNull(this.gfnTrim(this.edtCD_VENDOR.value))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.edtCD_VENDOR.setFocus();
        		}
        		this.gfnAlert("사업자등록번호를 입력하지 않았습니다.", "fnVaidateCallback");
        	}else if (this.rdoTY_CONTRACTOR.value == "C" && this.gfnIsNull(this.gfnTrim(this.edtDS_VENDOR.value))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.edtDS_VENDOR.setFocus();
        		}
        		this.gfnAlert("상호를 입력하지 않았습니다.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.gfnTrim(this.edtNO_TEL.value)) && this.gfnIsNull(this.gfnTrim(this.edtNO_MOBILE.value))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.edtNO_MOBILE.setFocus();
        		}
        		this.gfnAlert("자택 전화번호나 휴대폰 번호를 입력하셔야 합니다.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.gfnTrim(this.cfNO_ZIPCODE.form.CDTextBox.value))) {
        		validate = false;
        		this.gfnAlert("현주소를 입력하지 않았습니다.");
        	}else if (this.gfnIsNull(this.gfnTrim(this.cfNO_ZIPCODE_REC.form.CDTextBox.value))) {
        		validate = false;
        		this.gfnAlert("주민등록주소를 입력하지 않았습니다.");
        	}else if (this.gfnIsNull(this.gfnTrim(this.mskAM_RECEIVED.value))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.mskAM_RECEIVED.setFocus();
        		}
        		this.gfnAlert("수납금액을 입력하지 않았습니다.", "fnVaidateCallback");
        	}else if (this.cboTY_POSITION.value != "1" && this.cboTY_POSITION.value != "F") {
        		var amReceived = this.mskAM_RECEIVED.value;
        		if(this.gfnIsNull(this.mskAM_RECEIVED.value)){
        			amReceived = "0";
        		}
        		if(amReceived != "0" && this.gfnIsNull(this.gfnTrim(this.cfCD_GUJA.form.CDTextBox.value))){
        			validate = false;
        			this.gfnAlert("계좌를 입력하지 않았습니다.");
        		}
        	}else if (this.cboTY_POSITION.value == "F") {
        		if(this.gfnIsNull(this.gfnTrim(this.cfCD_CARD.form.CDTextBox.value))){
        			validate = false;
        			this.gfnAlert("카드사를 입력하지 않았습니다.");
        		}else if(this.gfnIsNull(this.gfnTrim(this.edtNO_APPROVAL.value))){
        			validate = false;
        			this.gfnAlert("승인번호를 입력하지 않았습니다.");
        		}
        	}else if (this.gfnIsNull(this.cboTY_MONEY.value)) {
        		validate = false;
        		this.gfnAlert("납입구분을 입력하지 않았습니다.");
        	}else if (this.cboTY_MONEY.value == "3" && this.gfnIsNull(this.gfnTrim(this.cfFINANCING.form.CDTextBox.value))) {
        		validate = false;
        		this.gfnAlert("융자사를 입력하지 않았습니다.");
        	}else if (this.gfnIsNull(this.cboTY_POSITION.value)) {
        		validate = false;
        		this.gfnAlert("수납처를 입력하지 않았습니다.");
        	}

        	return validate;
        }

        this.dsData_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		if(e.columnid == "TY_CONTRACTOR") {
        			this.fnTyContractorSetEnable();
        		}else if(e.columnid == "TY_MONEY") {
        			this.fnTyMoneySetEnable();
        		}else if(e.columnid == "TY_POSITION") {
        			this.fnTyPositionSetVisible();
        		}
        	}
        };

        // 계약구분 값에 따라 활성화 or 비활성화
        this.fnTyContractorSetEnable =  function() {
        	if(this.dsData.getColumn(0,"TY_CONTRACTOR") == "P"){	// 개인
        		this.edtCD_VENDOR.set_enable(false);
        		this.edtDS_VENDOR.set_enable(false);
        		this.edtDS_UPTAE.set_enable(false);
        		this.edtDS_UPJONG.set_enable(false);

        		this.edtCD_VENDOR.set_value("");
        		this.edtDS_VENDOR.set_value("");
        		this.edtDS_UPTAE.set_value("");
        		this.edtDS_UPJONG.set_value("");
        	}else{	// 법인
        		this.edtCD_VENDOR.set_enable(true);
        		this.edtDS_VENDOR.set_enable(true);
        		this.edtDS_UPTAE.set_enable(true);
        		this.edtDS_UPJONG.set_enable(true);
        	}
        };

        // 납입구분 값에 따라 활성화 or 비활성화
        this.fnTyMoneySetEnable =  function() {
        	if(this.dsData.getColumn(0,"TY_MONEY") == "3"){	// 알선융자
        		this.cfFINANCING.set_enable(false);
        	}else if(this.dsData.getColumn(0,"TY_MONEY") == "1"){	// 본인
        		this.cfFINANCING.set_enable(true);
        	}
        };

        // 수납처 값에 따라 보이고 안보이기(은행 or 카드)
        this.fnTyPositionSetVisible =  function() {
        	if(this.dsData.getColumn(0, "TY_POSITION") == "F"){
        		this.divData.form.divDataTopGuja.set_visible(false);
        		this.divData.form.divDataTopCard.set_visible(true);

        		this.dsData.setColumn(0, "CD_GUJA", "");
        		this.dsData.setColumn(0, "DS_BANK", "");
        		this.edtNO_GUJA.set_value("");

        	}else{
        		this.divData.form.divDataTopGuja.set_visible(true);
        		this.divData.form.divDataTopCard.set_visible(false);

        		this.dsData.setColumn(0, "CD_CARD", "");
        		this.dsData.setColumn(0, "DS_CARD", "");
        		this.edtNO_APPROVAL.set_value("");
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staDS_SITE.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.divData.form.staDS_SITE02.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.divTitle.form.cboTY_DEPT.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divData.form.staDS_SITE03.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staDS_SITE04.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staDS_SITE01.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staDS_SITE05.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staDS_SITE06.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staDS_SITE07.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staDS_SITE08.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staDS_SITE09.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staDS_SITE10.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staDS_SITE12.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staDS_SITE13.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staDS_SITE14.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staDS_SITE16.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staDS_SITE17.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staDS_SITE18.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.txtDS_REMARK.addEventHandler("oninput",this.divData01_txtDS_REMARK_R_oninput,this);
            this.divData.form.staDS_SITE15.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staDS_SITE19.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.mskAM_PROVISIONAL.addEventHandler("onchanged",this.divData_mskAM_PAYMENTAMT_onchanged,this);
            this.divData.form.staDS_SITE20.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staDS_SITE21.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staDS_SITE22.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staDS_SITE24.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staDS_SITE25.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staDS_SITE26.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.mskAM_RECEIVED.addEventHandler("onchanged",this.divData_mskAM_PAYMENTAMT_onchanged,this);
            this.dsData.addEventHandler("onvaluechanged",this.dsData_onvaluechanged,this);
            this.dsListInfo.addEventHandler("onvaluechanged",this.dsListInfo_onvaluechanged,this);
        };
        this.loadIncludeScript("DRB_DLGPROVISIONALCONTRACT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
