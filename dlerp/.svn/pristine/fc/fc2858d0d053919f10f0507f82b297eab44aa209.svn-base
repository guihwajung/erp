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
            this.set_titletext("임대계약");
            this.getSetter("maxwidth").set("790");
            this.getSetter("maxheight").set("930");
            if (Form == this.constructor)
            {
                this._setFormPosition(790,930);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DLBPR_CONTRACTOR_CONTRACT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONTRACT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_APPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_POST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR3\" type=\"STRING\" size=\"256\"/><Column id=\"NO_RECPOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RECADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RECADDR3\" type=\"STRING\" size=\"256\"/><Column id=\"TO_INTERIOR\" type=\"STRING\" size=\"256\"/><Column id=\"FR_INTERIOR\" type=\"STRING\" size=\"256\"/><Column id=\"TO_RENTFREE\" type=\"STRING\" size=\"256\"/><Column id=\"FR_RENTFREE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_RENTFREE2\" type=\"STRING\" size=\"256\"/><Column id=\"FR_RENTFREE2\" type=\"STRING\" size=\"256\"/><Column id=\"TO_RENTFREE3\" type=\"STRING\" size=\"256\"/><Column id=\"FR_RENTFREE3\" type=\"STRING\" size=\"256\"/><Column id=\"TO_RENTFREE4\" type=\"STRING\" size=\"256\"/><Column id=\"FR_RENTFREE4\" type=\"STRING\" size=\"256\"/><Column id=\"TO_RENTFREE5\" type=\"STRING\" size=\"256\"/><Column id=\"FR_RENTFREE5\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SUNNAP1\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SUNNAP2\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SUNNAP3\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SUNNAP4\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SUNNAP5\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SUNNAP6\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SUNNAP7\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SUNNAP8\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SUBLEASE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_RECEIPT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_MONEY\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DELAY\" type=\"STRING\" size=\"256\"/><Column id=\"TY_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_APPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_IPJUJA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UPJONG\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PAYBACK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_APPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"AM_RECEIVED\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FINANCING\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FINANCING\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CARD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CARD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DISTRICT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"YN_JOINT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONTRACT_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONTRACT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_OFFICETEL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_MOBILE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"DT_IPJUPLAN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_ACNTUNIT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_JOINT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">있음</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">없음</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_SUBLEASE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">있음</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">없음</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_SUNAP", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">선납</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">후납</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_CONTRACTOR", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">P</Col><Col id=\"DS_CODE\">개인</Col></Row><Row><Col id=\"CD_CODE\">C</Col><Col id=\"DS_CODE\">법인</Col></Row><Row><Col id=\"CD_CODE\">C</Col><Col id=\"DS_CODE\">개인사업자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_DELAY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">적용함</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">적용안함</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_RECEIPT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">정상</Col></Row><Row><Col id=\"CD_CODE\">C</Col><Col id=\"DS_CODE\">대체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_POSITION", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">M/H(현금)</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">은행</Col></Row><Row><Col id=\"CD_CODE\">3</Col><Col id=\"DS_CODE\">본사</Col></Row><Row><Col id=\"CD_CODE\">4</Col><Col id=\"DS_CODE\">기타</Col></Row><Row><Col id=\"CD_CODE\">5</Col><Col id=\"DS_CODE\">입금미수</Col></Row><Row><Col id=\"CD_CODE\">F</Col><Col id=\"DS_CODE\">카드</Col></Row><Row><Col id=\"CD_CODE\">J</Col><Col id=\"DS_CODE\">단기대여금</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_MONEY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">본인</Col></Row><Row><Col id=\"CD_CODE\">3</Col><Col id=\"DS_CODE\">알선융자</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","5","5","100.00%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("임대계약");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE","0","35","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("군/OPTION");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","111","35","619","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtTY_DISTRICT","116","40","34","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtRT_OPTION","153","40","57","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_OPTION","213","40","126","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_JOINT","348","35","132","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_text("공동명의계약자여부");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_JOINT","486","40","178","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_direction("vertical");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_JOINT");
            obj.set_fittocontents("width");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_CONTRACT","0","staDS_SITE:-1","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("계약일자");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","staDT_CONTRACT:-1","64","619","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_CONTRACT","116","69","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_IPJUPLAN","348","64","132","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_text("입주예정일자");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_IPJUPLAN","486","69","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_CONTRACT_FROMTO","0","staDT_CONTRACT:-1","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("계약기간");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3","staDT_CONTRACT_FROMTO:-1","staDT_CONTRACT:-1","619","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_CONTRACT_FR","116","98","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_CONTRACT_TO","239","98","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("76");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTRACTOR","0","staDT_CONTRACT_FROMTO:-1","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("계약성명");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg4","staDS_CONTRACTOR:-1","staBg3:-1","619","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_CONTRACTOR","116","127","224","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_CONTRACTOR","348","93","132","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_text("계약구분");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_CONTRACTOR","486","98","224","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_direction("vertical");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_CONTRACTOR");
            obj.set_fittocontents("width");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_JUMIN","348","122","132","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_text("주민등록번호");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_JUMIN","486","127","234","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_POST","0","151","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("현주소");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg5","111","151","619","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfNO_POST","116","156","364","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("59");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_ADDR3","486","156","234","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("60");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_RECPOST","0","180","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("주민등록주소");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg6","111","180","619","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfNO_RECPOST","116","185","364","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("21");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_RECADDR3","486","185","234","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_TEL","0","209","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("☎(자택)");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg7","111","209","619","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_TEL","116","214","224","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_OFFICETEL","348","209","132","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("99");
            obj.set_text("☎(직장)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_OFFICETEL","486","214","234","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("111");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_MOBILE","0","238","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("☎(휴대폰)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg8","111","238","619","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_MOBILE","116","243","224","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_EMAIL","348","238","132","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("103");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_EMAIL","486","243","234","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("112");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","0","267","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg9","111","267","619","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_VENDOR","348","267","132","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("102");
            obj.set_text("상호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_UPTAE","0","296","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg10","111","296","619","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_UPJONG","348","296","132","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("101");
            obj.set_text("업종");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_INTERIOR","0","325","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_text("인테리어기간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg11","111","325","619","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_SUNNAP1","348","325","132","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("100");
            obj.set_text("임대료");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_RENTFREE","0","354","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_text("렌트프리기간 (1)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg12","111","354","619","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_SUNNAP2","348","354","132","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("104");
            obj.set_text("관리비");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_RENTFREE2","0","383","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj.set_text("렌트프리기간 (2)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg13","111","383","619","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_SUNNAP3","348","383","132","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("105");
            obj.set_text("전기료");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_RENTFREE3","0","412","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_text("렌트프리기간 (3)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg14","111","412","619","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_SUNNAP4","348","412","132","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("106");
            obj.set_text("수도료");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_RENTFREE4","0","441","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            obj.set_text("렌트프리기간 (4)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg15","111","441","619","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_SUNNAP5","348","441","132","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("107");
            obj.set_text("열사용료");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_RENTFREE5","0","470","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_text("렌트프리기간 (5)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg16","111","470","619","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_SUNNAP6","348","470","132","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("108");
            obj.set_text("가스료");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_SUBLEASE","0","499","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("57");
            obj.set_text("전대차여부");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg17","111","499","619","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_SUNNAP7","348","499","132","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("109");
            obj.set_text("주차료(월정)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_CONFIRM04_00_00_00","0","528","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("54");
            obj.set_text("실거주자명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg18","111","528","619","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_SUNNAP8","348","528","132","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("110");
            obj.set_text("주차료(후불)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg19","111","557","619","69",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_REMARK","0","557","112","69",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("53");
            obj.set_text("특기사항");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE00","5","636","100.00%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("61");
            obj.set_text("계약금 수납");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_RECEIVED","0","665","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("62");
            obj.set_text("수납내역");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg20","111","665","619","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staGUJA","0","694","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("64");
            obj.set_text("납입계좌");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg21","111","694","619","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_POSITION","0","723","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("66");
            obj.set_text("수납처");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg22","111","723","619","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg25","111","810","619","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CARD","0","810","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("69");
            obj.set_text("카드사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_FINANCING","0","781","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("70");
            obj.set_text("융자사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg24","111","781","619","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg23","111","752","619","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_DELAY","0","752","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("73");
            obj.set_text("연체적용");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboTY_POSITION","116","728","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("74");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTY_POSITION");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRANGE","223","96","10","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("75");
            obj.set_text("~");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclTO_INTERIOR","239","330","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("77");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclFR_INTERIOR","116","330","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("79");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRANGE00","223","328","10","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("78");
            obj.set_text("~");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclTO_RENTFREE","239","359","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("80");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRANGE00_00","223","357","10","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("81");
            obj.set_text("~");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclFR_RENTFREE","116","359","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("82");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclTO_RENTFREE2","239","388","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("83");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRANGE00_00_00","223","386","10","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("84");
            obj.set_text("~");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclFR_RENTFREE2","116","388","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("85");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclTO_RENTFREE3","239","417","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("86");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRANGE00_00_00_00","223","415","10","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("87");
            obj.set_text("~");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclFR_RENTFREE3","116","417","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("88");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclTO_RENTFREE4","239","446","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("89");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRANGE00_00_00_00_00","223","444","10","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("90");
            obj.set_text("~");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclFR_RENTFREE4","116","446","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("91");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclTO_RENTFREE5","239","475","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("92");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRANGE00_00_00_00_01","223","473","10","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("93");
            obj.set_text("~");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclFR_RENTFREE5","116","475","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("94");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_VENDOR","116","272","224","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("95");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_UPTAE","116","301","224","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("96");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_SUBLEASE","116","504","178","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("97");
            obj.set_direction("vertical");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_SUBLEASE");
            obj.set_fittocontents("width");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_IPJUJA","116","533","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("98");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_VENDOR","486","272","234","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("113");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_UPJONG","486","301","234","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("114");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_SUNNAP1","486","330","178","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("115");
            obj.set_direction("vertical");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_SUNAP");
            obj.set_fittocontents("width");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_SUNNAP2","486","359","178","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("116");
            obj.set_direction("vertical");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_SUNAP");
            obj.set_fittocontents("width");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_SUNNAP4","486","417","178","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("117");
            obj.set_direction("vertical");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_SUNAP");
            obj.set_fittocontents("width");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_SUNNAP3","486","388","178","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("118");
            obj.set_direction("vertical");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_SUNAP");
            obj.set_fittocontents("width");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_SUNNAP8","486","533","178","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("119");
            obj.set_direction("vertical");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_SUNAP");
            obj.set_fittocontents("width");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_SUNNAP7","486","504","178","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("120");
            obj.set_direction("vertical");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_SUNAP");
            obj.set_fittocontents("width");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_SUNNAP6","486","475","178","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("121");
            obj.set_direction("vertical");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_SUNAP");
            obj.set_fittocontents("width");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_SUNNAP5","486","446","178","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("122");
            obj.set_direction("vertical");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_SUNAP");
            obj.set_fittocontents("width");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_RECEIPT","348","665","132","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("123");
            obj.set_text("수납구분");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_PAYBACK","348","723","132","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("124");
            obj.set_text("상환일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_MONEY","348","752","132","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("125");
            obj.set_text("납입구분");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_APPROVAL","348","810","132","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("126");
            obj.set_text("승인번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_RECEIPT","486","670","178","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("127");
            obj.set_direction("vertical");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_RECEIPT");
            obj.set_fittocontents("width");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_PAYBACK","486","728","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("128");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboTY_MONEY","486","757","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("129");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTY_MONEY");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_APPROVAL","486","815","234","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("130");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_RECEIVED","116","670","224","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("131");
            obj.set_readonly("false");
            obj.getSetter("maxlength").set("50");
            obj.set_format("###,###,##0");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_DELAY","116","757","178","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("132");
            obj.set_direction("vertical");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_DELAY");
            obj.set_fittocontents("width");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_GUJA","116","699","364","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DLB_CFBANK_ACCOUNT_LEASE_CODEFIND");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("133");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_GUJA","486","699","234","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("134");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_FINANCING","116","786","364","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DRX_CFFINANCING_CODEFIND");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("135");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_CARD","116","815","224","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DRX_CARD_CODEFIND");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("136");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtDS_REMARK","116","563","604","57",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("137");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","37.47%","870","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","48.61%","870","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.tclDT_CONTRACT","value","dsData","DT_CONTRACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.edtNO_APPROVAL","value","dsData","NO_APPROVAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.tclTO_INTERIOR","value","dsData","TO_INTERIOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.tclFR_INTERIOR","value","dsData","FR_INTERIOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.tclTO_RENTFREE","value","dsData","TO_RENTFREE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.tclFR_RENTFREE","value","dsData","FR_RENTFREE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.tclTO_RENTFREE2","value","dsData","TO_RENTFREE2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.tclFR_RENTFREE2","value","dsData","FR_RENTFREE2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.tclTO_RENTFREE3","value","dsData","TO_RENTFREE3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.tclFR_RENTFREE3","value","dsData","FR_RENTFREE3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.tclTO_RENTFREE4","value","dsData","TO_RENTFREE4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.tclFR_RENTFREE4","value","dsData","FR_RENTFREE4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.tclTO_RENTFREE5","value","dsData","TO_RENTFREE5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.tclFR_RENTFREE5","value","dsData","FR_RENTFREE5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.rdoYN_SUNNAP1","value","dsData","YN_SUNNAP1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.rdoYN_SUNNAP2","value","dsData","YN_SUNNAP2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.rdoYN_SUNNAP3","value","dsData","YN_SUNNAP3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.rdoYN_SUNNAP4","value","dsData","YN_SUNNAP4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.rdoYN_SUNNAP5","value","dsData","YN_SUNNAP5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.rdoYN_SUNNAP6","value","dsData","YN_SUNNAP6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.rdoYN_SUNNAP7","value","dsData","YN_SUNNAP7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.rdoYN_SUNNAP8","value","dsData","YN_SUNNAP8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.rdoYN_SUBLEASE","value","dsData","YN_SUBLEASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.rdoTY_RECEIPT","value","dsData","TY_RECEIPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.cboTY_MONEY","value","dsData","TY_MONEY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.rdoYN_DELAY","value","dsData","YN_DELAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.cboTY_POSITION","value","dsData","TY_POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.edtCD_VENDOR","value","dsData","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.edtDS_UPTAE","value","dsData","DS_UPTAE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.edtDS_IPJUJA","value","dsData","DS_IPJUJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.edtDS_VENDOR","value","dsData","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.edtDS_UPJONG","value","dsData","DS_UPJONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.tclDT_PAYBACK","value","dsData","DT_PAYBACK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.edtNO_APPROVAL","value","dsData","NO_APPROVAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.edtAM_RECEIVED","value","dsData","AM_RECEIVED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.cfCD_GUJA.form.CDTextBox","value","dsData","CD_GUJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.cfCD_GUJA.form.DSTextBox","value","dsData","DS_GUJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.cfCD_FINANCING.form.CDTextBox","value","dsData","CD_FINANCING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.cfCD_FINANCING.form.DSTextBox","value","dsData","DS_FINANCING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divData.form.cfCD_CARD.form.CDTextBox","value","dsData","CD_CARD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divData.form.cfCD_CARD.form.DSTextBox","value","dsData","DS_CARD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divData.form.txtDS_REMARK","value","dsData","DS_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divData.form.cfNO_POST.form.CDTextBox","value","dsData","NO_POST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divData.form.cfNO_POST.form.DSTextBox","value","dsData","DS_ADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divData.form.edtDS_ADDR3","value","dsData","DS_ADDR3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divData.form.cfNO_RECPOST.form.CDTextBox","value","dsData","NO_RECPOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divData.form.cfNO_RECPOST.form.DSTextBox","value","dsData","DS_RECADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divData.form.edtDS_RECADDR3","value","dsData","DS_RECADDR3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divData.form.edtTY_DISTRICT","value","dsData","TY_DISTRICT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divData.form.edtRT_OPTION","value","dsData","RT_OPTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","divData.form.edtDS_OPTION","value","dsData","DS_OPTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","divData.form.rdoYN_JOINT","value","dsData","YN_JOINT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","divData.form.tclDT_CONTRACT_FR","value","dsData","DT_CONTRACT_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","divData.form.tclDT_CONTRACT_TO","value","dsData","DT_CONTRACT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","divData.form.edtDS_CONTRACTOR","value","dsData","DS_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","divData.form.rdoTY_CONTRACTOR","value","dsData","TY_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","divData.form.edtNO_JUMIN","value","dsData","NO_JUMIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","divData.form.edtNO_TEL","value","dsData","NO_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","divData.form.edtNO_OFFICETEL","value","dsData","NO_OFFICETEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","divData.form.edtNO_MOBILE","value","dsData","NO_MOBILE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","divData.form.edtDS_EMAIL","value","dsData","DS_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","divData.form.tclDT_IPJUPLAN","value","dsData","DT_IPJUPLAN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DLB_DLGCONTRACT.xfdl", function() {
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

        	this.staTITLE.set_text(  "임대계약 (" + this.getOwnerFrame().DONG  + "동"
        	                                       + this.getOwnerFrame().FLOOR + "층"
        					                       + this.getOwnerFrame().HO    + "호)");

        	this.dsData.setColumn(0, "CD_ACNTUNIT"	 , this.getOwnerFrame().CD_ACNTUNIT);
        	this.dsData.setColumn(0, "NO_DONG"		 , this.getOwnerFrame().DONG);
        	this.dsData.setColumn(0, "NO_FLOOR"		 , this.getOwnerFrame().FLOOR);
        	this.dsData.setColumn(0, "NO_HO"		 , this.getOwnerFrame().HO);
        	this.dsData.setColumn(0, "NO_UNIONMEMBER", this.getOwnerFrame().NO_UNIONMEMBER);
        	this.dsData.setColumn(0, "AM_RECEIVED"	 , this.getOwnerFrame().AM_RECIVE);
        	this.dsData.setColumn(0, "TY_DISTRICT"	 , this.getOwnerFrame().TY_TYPE);
        	this.dsData.setColumn(0, "RT_OPTION"	 , this.getOwnerFrame().RT_OPTION);
        	this.dsData.setColumn(0, "DS_OPTION"	 , this.getOwnerFrame().DS_OPTION);

        	this.dsData.setColumn(0, "YN_JOINT"      , "N");	// 공동명의계약자여부
        	this.dsData.setColumn(0, "TY_CONTRACTOR" , "P");	// 계약구분 => 개인
        	this.dsData.setColumn(0, "TY_RECEIPT"    , "N");	// 수납구분 => 정상(N), 대체(C)
        	this.dsData.setColumn(0, "YN_DELAY"      , "N");	// 연체적용

        	this.dsData.setColumn(0, "TY_POSITION"   , "1");	// 수납처
        	this.dsData.setColumn(0, "TY_MONEY"      , "1");	// 납입구분

        	this.dsData.setColumn(0, "YN_SUNNAP1"    , "N");	// 임대료
        	this.dsData.setColumn(0, "YN_SUNNAP2"    , "N");	// 관리비
        	this.dsData.setColumn(0, "YN_SUNNAP3"    , "N");	// 전기료
        	this.dsData.setColumn(0, "YN_SUNNAP4"    , "N");	// 수도료
        	this.dsData.setColumn(0, "YN_SUNNAP5"    , "N");	// 열사용료
        	this.dsData.setColumn(0, "YN_SUNNAP6"    , "N");	// 가스료
        	this.dsData.setColumn(0, "YN_SUNNAP7"    , "N");	// 주차료(월정)
        	this.dsData.setColumn(0, "YN_SUNNAP8"    , "N");	// 주차료(후불)

        	this.dsData.setColumn(0, "DT_CONTRACT"   , this.gfnGetDate());	// 계약일자
        	this.dsData.setColumn(0, "DT_CONTRACT_FR", this.gfnGetDate());	// 계약기간 FROM
        	this.dsData.setColumn(0, "DT_IPJUPLAN"   , this.gfnGetDate());	// 입주예정일자
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {};

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {};

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.staTITLE 		= this.divData.form.staTITLE;

        	this.tclDT_CONTRACT = this.divData.form.tclDT_CONTRACT;
        	this.edtAM_RECEIVED = this.divData.form.edtAM_RECEIVED;
        	this.cboTY_POSITION = this.divData.form.cboTY_POSITION;
        	this.staGUJA        = this.divData.form.staGUJA;
        	this.cfCD_GUJA 		= this.divData.form.cfCD_GUJA;
        	this.staCD_CARD 	= this.divData.form.staCD_CARD;
        	this.cfCD_CARD 		= this.divData.form.cfCD_CARD;
        	this.staNO_APPROVAL = this.divData.form.staNO_APPROVAL;
        	this.edtNO_APPROVAL = this.divData.form.edtNO_APPROVAL;
        	this.cfCD_FINANCING = this.divData.form.cfCD_FINANCING;
        	this.staDT_PAYBACK  = this.divData.form.staDT_PAYBACK;
        	this.tclDT_PAYBACK  = this.divData.form.tclDT_PAYBACK;
        	this.edtCD_VENDOR   = this.divData.form.edtCD_VENDOR;
        	this.edtDS_VENDOR   = this.divData.form.edtDS_VENDOR;
        	this.edtDS_UPTAE    = this.divData.form.edtDS_UPTAE;
        	this.edtDS_UPJONG   = this.divData.form.edtDS_UPJONG;
        	this.staNO_JUMIN    = this.divData.form.staNO_JUMIN;
        	this.staCD_VENDOR   = this.divData.form.staCD_VENDOR;
        	this.staDS_VENDOR   = this.divData.form.staDS_VENDOR;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	// 납입계좌
        	this.cfCD_GUJA.BeforeUserDataSetParam      = "fnBeforeUserDataSetParam";

        	// 융자사
        	this.cfCD_FINANCING.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_ACNTUNIT"     , "string");
        	this.dsSave.addColumn("TY_GUBUN"        , "string");
        	this.dsSave.addColumn("NO_CHASU"        , "string");
        	this.dsSave.addColumn("NO_DONG"         , "string");
        	this.dsSave.addColumn("NO_FLOOR"        , "string");
        	this.dsSave.addColumn("NO_HO"           , "string");
        	this.dsSave.addColumn("DT_CONTRACT"     , "string");
        	this.dsSave.addColumn("TY_CONTRACTOR"   , "string");
        	this.dsSave.addColumn("DS_CONTRACTOR"   , "string");
        	this.dsSave.addColumn("NO_JUMIN"        , "string");
        	this.dsSave.addColumn("NO_RECPOST"      , "string");
        	this.dsSave.addColumn("DS_RECADDR2"     , "string");
        	this.dsSave.addColumn("DS_RECADDR3"     , "string");
        	this.dsSave.addColumn("NO_POST"         , "string");
        	this.dsSave.addColumn("DS_ADDR2"        , "string");
        	this.dsSave.addColumn("DS_ADDR3"        , "string");
        	this.dsSave.addColumn("NO_TEL"          , "string");
        	this.dsSave.addColumn("NO_OFFICETEL"    , "string");
        	this.dsSave.addColumn("NO_MOBILE"       , "string");
        	this.dsSave.addColumn("DS_EMAIL"        , "string");
        	this.dsSave.addColumn("CD_VENDOR"       , "string");
        	this.dsSave.addColumn("DS_VENDOR"       , "string");
        	this.dsSave.addColumn("DS_UPTAE"        , "string");
        	this.dsSave.addColumn("DS_UPJONG"       , "string");
        	this.dsSave.addColumn("DS_REMARK"       , "string");
        	this.dsSave.addColumn("TY_DISTRICT"     , "string");
        	this.dsSave.addColumn("RT_OPTION"       , "string");
        	this.dsSave.addColumn("DS_IPJUJA"       , "string");
        	this.dsSave.addColumn("NO_JUMIN_IPJUJA" , "string");
        	this.dsSave.addColumn("NO_MOBILE_IPJUJA", "string");
        	this.dsSave.addColumn("RELATION_IPJUJA" , "string");
        	this.dsSave.addColumn("FR_RENTFREE"     , "string");
        	this.dsSave.addColumn("TO_RENTFREE"     , "string");
        	this.dsSave.addColumn("FR_INTERIOR"     , "string");
        	this.dsSave.addColumn("TO_INTERIOR"     , "string");
        	this.dsSave.addColumn("AM_RECEIVED"     , "bigdecimal");
        	this.dsSave.addColumn("TY_RECEIPT"      , "string");
        	this.dsSave.addColumn("TY_MONEY"        , "string");
        	this.dsSave.addColumn("CD_GUJA"         , "string");
        	this.dsSave.addColumn("NO_FINANCING"    , "string");
        	this.dsSave.addColumn("YN_DELAY"        , "string");
        	this.dsSave.addColumn("TY_POSITION"     , "string");
        	this.dsSave.addColumn("ID_UPDATE"       , "string");
        	this.dsSave.addColumn("DT_CONTRACT_FR"  , "string");
        	this.dsSave.addColumn("DT_CONTRACT_TO"  , "string");
        	this.dsSave.addColumn("DT_IPJUPLAN"     , "string");
        	this.dsSave.addColumn("YN_EBILL"        , "string");
        	this.dsSave.addColumn("YN_JOINT"        , "string");
        	this.dsSave.addColumn("YN_AUTOLEASE"    , "string");
        	this.dsSave.addColumn("CD_CARD"         , "string");
        	this.dsSave.addColumn("DS_CARD"         , "string");
        	this.dsSave.addColumn("NO_APPROVAL"     , "string");
        	this.dsSave.addColumn("DT_PAYBACK"      , "string");
        	this.dsSave.addColumn("FR_RENTFREE2"    , "string");
        	this.dsSave.addColumn("TO_RENTFREE2"    , "string");
        	this.dsSave.addColumn("FR_RENTFREE3"    , "string");
        	this.dsSave.addColumn("TO_RENTFREE3"    , "string");
        	this.dsSave.addColumn("FR_RENTFREE4"    , "string");
        	this.dsSave.addColumn("TO_RENTFREE4"    , "string");
        	this.dsSave.addColumn("FR_RENTFREE5"    , "string");
        	this.dsSave.addColumn("TO_RENTFREE5"    , "string");
        	this.dsSave.addColumn("YN_SUBLEASE"     , "string");
        	this.dsSave.addColumn("YN_SUNNAP1"      , "string");
        	this.dsSave.addColumn("YN_SUNNAP2"      , "string");
        	this.dsSave.addColumn("YN_SUNNAP3"      , "string");
        	this.dsSave.addColumn("YN_SUNNAP4"      , "string");
        	this.dsSave.addColumn("YN_SUNNAP5"      , "string");
        	this.dsSave.addColumn("YN_SUNNAP6"      , "string");
        	this.dsSave.addColumn("YN_SUNNAP7"      , "string");
        	this.dsSave.addColumn("YN_SUNNAP8"      , "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

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
        	if (svcID == "save") {
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

        	// 납입계좌
        	if(id == "cfCD_GUJA") {
        		dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.dsData.getColumn(0, "CD_ACNTUNIT"));
        		dsUserParam.setColumn(nrow, "YN_OPTION"  , "N");
        		dsUserParam.setColumn(nrow, "FLG_GUBUN"  , "A");
        	}

        	// 융자사
        	if(id == "cfCD_FINANCING") {
        		dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.dsData.getColumn(0, "CD_ACNTUNIT"));
        		dsUserParam.setColumn(nrow, "YN_OPTION"  , "N");
        	}

        	return true;
        };

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

        	var nrow = this.dsSave.addRow();

        	this.dsSave.setColumn(nrow, "CD_ACNTUNIT"     , this.dsData.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSave.setColumn(nrow, "TY_GUBUN"        , this.dsData.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSave.setColumn(nrow, "NO_CHASU"        , this.dsData.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSave.setColumn(nrow, "NO_DONG"         , this.dsData.getColumn(0, "NO_DONG"));
        	this.dsSave.setColumn(nrow, "NO_FLOOR"        , this.dsData.getColumn(0, "NO_FLOOR"));
        	this.dsSave.setColumn(nrow, "NO_HO"           , this.dsData.getColumn(0, "NO_HO"));
        	this.dsSave.setColumn(nrow, "DT_CONTRACT"     , this.dsData.getColumn(0, "DT_CONTRACT"));
        	this.dsSave.setColumn(nrow, "TY_CONTRACTOR"   , this.dsData.getColumn(0, "TY_CONTRACTOR"));
        	this.dsSave.setColumn(nrow, "DS_CONTRACTOR"   , this.dsData.getColumn(0, "DS_CONTRACTOR"));
        	this.dsSave.setColumn(nrow, "NO_JUMIN"        , this.dsData.getColumn(0, "NO_JUMIN"));
        	this.dsSave.setColumn(nrow, "NO_RECPOST"      , this.dsData.getColumn(0, "NO_RECPOST"));
        	this.dsSave.setColumn(nrow, "DS_RECADDR2"     , this.dsData.getColumn(0, "DS_RECADDR2"));
        	this.dsSave.setColumn(nrow, "DS_RECADDR3"     , this.dsData.getColumn(0, "DS_RECADDR3"));
        	this.dsSave.setColumn(nrow, "NO_POST"         , this.dsData.getColumn(0, "NO_POST"));
        	this.dsSave.setColumn(nrow, "DS_ADDR2"        , this.dsData.getColumn(0, "DS_ADDR2"));
        	this.dsSave.setColumn(nrow, "DS_ADDR3"        , this.dsData.getColumn(0, "DS_ADDR3"));
        	this.dsSave.setColumn(nrow, "NO_TEL"          , this.dsData.getColumn(0, "NO_TEL"));
        	this.dsSave.setColumn(nrow, "NO_OFFICETEL"    , this.dsData.getColumn(0, "NO_OFFICETEL"));
        	this.dsSave.setColumn(nrow, "NO_MOBILE"       , this.dsData.getColumn(0, "NO_MOBILE"));
        	this.dsSave.setColumn(nrow, "DS_EMAIL"        , this.dsData.getColumn(0, "DS_EMAIL"));
        	this.dsSave.setColumn(nrow, "CD_VENDOR"       , this.dsData.getColumn(0, "CD_VENDOR"));
        	this.dsSave.setColumn(nrow, "DS_VENDOR"       , this.dsData.getColumn(0, "DS_VENDOR"));
        	this.dsSave.setColumn(nrow, "DS_UPTAE"        , this.dsData.getColumn(0, "DS_UPTAE"));
        	this.dsSave.setColumn(nrow, "DS_UPJONG"       , this.dsData.getColumn(0, "DS_UPJONG"));
        	this.dsSave.setColumn(nrow, "DS_REMARK"       , this.dsData.getColumn(0, "DS_REMARK"));
        	this.dsSave.setColumn(nrow, "TY_DISTRICT"     , this.dsData.getColumn(0, "TY_DISTRICT"));
        	this.dsSave.setColumn(nrow, "RT_OPTION"       , this.dsData.getColumn(0, "RT_OPTION"));
        	this.dsSave.setColumn(nrow, "DS_IPJUJA"       , this.dsData.getColumn(0, "DS_IPJUJA"));
        	this.dsSave.setColumn(nrow, "NO_JUMIN_IPJUJA" , "");
        	this.dsSave.setColumn(nrow, "NO_MOBILE_IPJUJA", "");
        	this.dsSave.setColumn(nrow, "RELATION_IPJUJA" , "");
        	this.dsSave.setColumn(nrow, "FR_RENTFREE"     , this.dsData.getColumn(0, "FR_RENTFREE"));
        	this.dsSave.setColumn(nrow, "TO_RENTFREE"     , this.dsData.getColumn(0, "TO_RENTFREE"));
        	this.dsSave.setColumn(nrow, "FR_INTERIOR"     , this.dsData.getColumn(0, "FR_INTERIOR"));
        	this.dsSave.setColumn(nrow, "TO_INTERIOR"     , this.dsData.getColumn(0, "TO_INTERIOR"));
        	this.dsSave.setColumn(nrow, "AM_RECEIVED"     , this.dsData.getColumn(0, "AM_RECEIVED"));
        	this.dsSave.setColumn(nrow, "TY_RECEIPT"      , this.dsData.getColumn(0, "TY_RECEIPT"));
        	this.dsSave.setColumn(nrow, "TY_MONEY"        , this.dsData.getColumn(0, "TY_MONEY"));
        	this.dsSave.setColumn(nrow, "CD_GUJA"         , this.dsData.getColumn(0, "CD_GUJA"));
        	this.dsSave.setColumn(nrow, "NO_FINANCING"    , this.dsData.getColumn(0, "NO_FINANCING"));
        	this.dsSave.setColumn(nrow, "YN_DELAY"        , this.dsData.getColumn(0, "YN_DELAY"));
        	this.dsSave.setColumn(nrow, "TY_POSITION"     , this.dsData.getColumn(0, "TY_POSITION"));
        	this.dsSave.setColumn(nrow, "ID_UPDATE"       , this.AuthClient.ID_USER);
        	this.dsSave.setColumn(nrow, "DT_CONTRACT_FR"  , this.dsData.getColumn(0, "DT_CONTRACT_FR"));
        	this.dsSave.setColumn(nrow, "DT_CONTRACT_TO"  , this.dsData.getColumn(0, "DT_CONTRACT_TO"));
        	this.dsSave.setColumn(nrow, "DT_IPJUPLAN"     , this.dsData.getColumn(0, "DT_IPJUPLAN"));
        	this.dsSave.setColumn(nrow, "YN_EBILL"        , "");
        	this.dsSave.setColumn(nrow, "YN_JOINT"        , this.dsData.getColumn(0, "YN_JOINT"));
        	this.dsSave.setColumn(nrow, "YN_AUTOLEASE"    , "");
        	this.dsSave.setColumn(nrow, "CD_CARD"         , this.dsData.getColumn(0, "CD_CARD"));
        	this.dsSave.setColumn(nrow, "DS_CARD"         , this.dsData.getColumn(0, "DS_CARD"));
        	this.dsSave.setColumn(nrow, "NO_APPROVAL"     , this.dsData.getColumn(0, "NO_APPROVAL"));
        	this.dsSave.setColumn(nrow, "DT_PAYBACK"      , this.dsData.getColumn(0, "DT_PAYBACK"));
        	this.dsSave.setColumn(nrow, "FR_RENTFREE2"    , this.dsData.getColumn(0, "FR_RENTFREE2"));
        	this.dsSave.setColumn(nrow, "TO_RENTFREE2"    , this.dsData.getColumn(0, "TO_RENTFREE2"));
        	this.dsSave.setColumn(nrow, "FR_RENTFREE3"    , this.dsData.getColumn(0, "FR_RENTFREE3"));
        	this.dsSave.setColumn(nrow, "TO_RENTFREE3"    , this.dsData.getColumn(0, "TO_RENTFREE3"));
        	this.dsSave.setColumn(nrow, "FR_RENTFREE4"    , this.dsData.getColumn(0, "FR_RENTFREE4"));
        	this.dsSave.setColumn(nrow, "TO_RENTFREE4"    , this.dsData.getColumn(0, "TO_RENTFREE4"));
        	this.dsSave.setColumn(nrow, "FR_RENTFREE5"    , this.dsData.getColumn(0, "FR_RENTFREE5"));
        	this.dsSave.setColumn(nrow, "TO_RENTFREE5"    , this.dsData.getColumn(0, "TO_RENTFREE5"));
        	this.dsSave.setColumn(nrow, "YN_SUBLEASE"     , this.dsData.getColumn(0, "YN_SUBLEASE"));
        	this.dsSave.setColumn(nrow, "YN_SUNNAP1"      , this.dsData.getColumn(0, "YN_SUNNAP1"));
        	this.dsSave.setColumn(nrow, "YN_SUNNAP2"      , this.dsData.getColumn(0, "YN_SUNNAP2"));
        	this.dsSave.setColumn(nrow, "YN_SUNNAP3"      , this.dsData.getColumn(0, "YN_SUNNAP3"));
        	this.dsSave.setColumn(nrow, "YN_SUNNAP4"      , this.dsData.getColumn(0, "YN_SUNNAP4"));
        	this.dsSave.setColumn(nrow, "YN_SUNNAP5"      , this.dsData.getColumn(0, "YN_SUNNAP5"));
        	this.dsSave.setColumn(nrow, "YN_SUNNAP6"      , this.dsData.getColumn(0, "YN_SUNNAP6"));
        	this.dsSave.setColumn(nrow, "YN_SUNNAP7"      , this.dsData.getColumn(0, "YN_SUNNAP7"));
        	this.dsSave.setColumn(nrow, "YN_SUNNAP8"      , this.dsData.getColumn(0, "YN_SUNNAP8"));

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

        	if (this.gfnIsNull(this.dsData.getColumn(0, "CD_ACNTUNIT"))) {
        		this.gfnAlert("사업지코드가 존재하지 않습니다.");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsData.getColumn(0, "DT_CONTRACT"))) {
        		this.gfnAlert("계약일자를 입력하지 않았습니다.");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsData.getColumn(0, "DT_IPJUPLAN"))) {
        		this.gfnAlert("입주예정일자를 입력하지 않았습니다.");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsData.getColumn(0,"DT_CONTRACT_FR"))) {
        		this.gfnAlert("계약기간(From)을 입력하지 않았습니다.");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsData.getColumn(0, "DT_CONTRACT_TO"))) {
        		this.gfnAlert("계약기간(To)을 입력하지 않았습니다.");
        		return false;
        	}

        	if (this.gfnGetDiffDate(this.dsData.getColumn(0, "DT_CONTRACT_FR"), this.dsData.getColumn(0, "DT_CONTRACT_TO")) < 0)
        	{
        		this.gfnAlert("계약기간(To)가 계약기간(From)보다 크거나 같아야 합니다.");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsData.getColumn(0,"DS_CONTRACTOR"))) {
        		this.gfnAlert("계약자성명을 입력하지 않았습니다.");
        		return false;
        	}

        	if(this.dsData.getColumn(0, "TY_CONTRACTOR") == "P") {	// 개인인 경우
        		if (nexacro.replaceAll(this.dsData.getColumn(0, "NO_JUMIN"), "-", "") == "") {
        			this.gfnAlert("주민등록번호가 잘못 되었습니다.");
        			return false;
        		}

        		if (nexacro.replaceAll(this.dsData.getColumn(0, "NO_JUMIN"), "-", "").length != 13) {
        			this.gfnAlert("주민등록번호가 잘못 되었습니다.");
        			return false;
        		}
        	}

        	if (this.gfnIsNull(this.dsData.getColumn(0, "NO_TEL"))) {
        		this.gfnAlert("자택전화번호를 입력하지 않았습니다.");
        		return false;
        	}

        	if(this.dsData.getColumn(0, "TY_CONTRACTOR") == "C") {	// 법인, 개인사업자인 경우
        		if (this.gfnIsNull(this.dsData.getColumn(0, "CD_VENDOR"))) {
        			this.gfnAlert("사업자등록번호를 입력하지 않았습니다.");
        			return false;
        		}

        		if (nexacro.replaceAll(this.dsData.getColumn(0, "NO_JUMIN"), "-", "").length != 10) {
        			this.gfnAlert("10자리 숫자를 입력해 주세요.");
        			return false;
        		}

        		if (this.gfnIsNull(this.dsData.getColumn(0, "DS_VENDOR"))) {
        			this.gfnAlert("상호를 입력하지 않았습니다.");
        			return false;
        		}
        	}

        	if (this.dsData.getColumn(0, "AM_RECEIVED") == "0") {
        		this.gfnAlert("수납금액을 입력하지 않았습니다.");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsData.getColumn(0, "CD_GUJA"))) {
        		this.gfnAlert("납입계좌를 입력하지 않았습니다.");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsData.getColumn(0, "NO_POST"))) {
        		this.gfnAlert("현주소를 입력하지 않았습니다.");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsData.getColumn(0, "NO_RECPOST"))) {
        		this.gfnAlert("주민등록상 주소를 입력하지 않았습니다.");
        		return false;
        	}

        	if (this.dsData.getColumn(0,"TY_POSITION") == "F") {	// 카드일때
        		if (this.gfnIsNull(this.dsData.getColumn(0, "CD_CARD"))) {
        			this.gfnAlert("카드번호가 입력되지 않았습니다.");
        			return false;
        		}
        		if (this.gfnIsNull(this.dsData.getColumn(0, "NO_APPROVAL"))) {
        			this.gfnAlert("승인번호가 입력되지 않았습니다.");
        			return false;
        		}
        	}

        	if (this.dsData.getColumn(0,"TY_POSITION") == "J") {	// 단기대여금일때
        		if (this.gfnIsNull(this.dsData.getColumn(0, "DT_PAYBACK"))) {
        			this.gfnAlert("단기대여금선택시에는 상환일자 필수입력입니다.");
        			return false;
        		}
        	}

        	if ((this.dsData.getColumn(0,"TY_POSITION") != "1" && this.gfnIsNull(this.dsData.getColumn(0,"CD_GUJA"))) || (this.dsData.getColumn(0,"TY_POSITION") != "F" && this.gfnIsNull(this.dsData.getColumn(0,"CD_GUJA")))) {
        		this.gfnAlert("계좌정보가 입력되지 않았습니다.");
        		return false;
        	}

        	return true;
        }

        this.dsData_onvaluechanged = function(obj,e) {

        	if(e.oldvalue != e.newvalue) {

        		// 수납처
        		if(e.columnid == "TY_POSITION") {

        			this.tclDT_PAYBACK.set_enable(false);
        			this.staDT_PAYBACK.set_textDecoration("none");
        			this.dsData.setColumn(0, "DT_PAYBACK", "");

        			this.staNO_APPROVAL.set_textDecoration("none");
        			this.staCD_CARD.set_textDecoration("none");
        			this.staGUJA.set_textDecoration("underline");
        			this.cfCD_FINANCING.set_enable(true);
        			this.cfCD_CARD.set_enable(false);
        			this.edtNO_APPROVAL.set_enable(false);

        			// 카드
        			if(e.newvalue == "F") {
        				this.staNO_APPROVAL.set_textDecoration("underline");
        				this.staCD_CARD.set_textDecoration("underline");
        				this.staGUJA.set_textDecoration("none");
        				this.cfCD_FINANCING.set_enable(false);
        				this.cfCD_CARD.set_enable(true);
        				this.edtNO_APPROVAL.set_enable(true);
        			}

        			// 단기대여금
        			if(e.newvalue == "J") {
        				this.tclDT_PAYBACK.set_enable(true);
        				this.staDT_PAYBACK.set_textDecoration("underline");

        				//2010년10월7일 By김현성 : 상환일자 계약일자로부터 1년뒤세팅
        				this.dsData.setColumn(0, "DT_PAYBACK", this.gfnAddMonth(gfnGetDate(), 12));
        			}
        		}

        		// 납입구분
        		if(e.columnid == "TY_MONEY") {
        			this.cfCD_FINANCING.set_enable(this.dsData.getColumn(0, "TY_MONEY") == 1 ? true : false);
        		}

        		// 계약구분
        		if(e.columnid == "TY_CONTRACTOR") {

        			// P: 개인, C: 법인/개인사업자
        			var cont = this.dsData.getColumn(0, "TY_CONTRACTOR");

        			this.edtCD_VENDOR.set_enable(cont == "P" ? false : true);
        			this.edtDS_VENDOR.set_enable(cont == "P" ? false : true);
        			this.edtDS_UPTAE.set_enable(cont == "P" ? false : true);
        			this.edtDS_UPJONG.set_enable(cont == "P" ? false : true);

        			this.staNO_JUMIN.set_textDecoration(cont == "P" ? "underline" : "none");
        			this.staCD_VENDOR.set_textDecoration(cont == "P" ? "none" : "underline");
        			this.staDS_VENDOR.set_textDecoration(cont == "P" ? "none" : "underline");
        		}
        	}
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staDT_IPJUPLAN.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staTY_CONTRACTOR.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staNO_JUMIN.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staNO_OFFICETEL.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staDS_EMAIL.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staDS_VENDOR.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staDS_UPJONG.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staYN_SUNNAP1.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staYN_SUNNAP2.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staYN_SUNNAP3.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staYN_SUNNAP4.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staYN_SUNNAP5.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staYN_SUNNAP6.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staYN_SUNNAP7.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staYN_SUNNAP8.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staTY_RECEIPT.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staDT_PAYBACK.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staTY_MONEY.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staNO_APPROVAL.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.dsData.addEventHandler("onvaluechanged",this.dsData_onvaluechanged,this);
        };
        this.loadIncludeScript("DLB_DLGCONTRACT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
