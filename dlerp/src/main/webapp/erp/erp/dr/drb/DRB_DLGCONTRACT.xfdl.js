(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DRB_DLGCONTRACT");
            this.set_titletext("분양계약");
            this.getSetter("maxwidth").set("880");
            this.getSetter("maxheight").set("730");
            if (Form == this.constructor)
            {
                this._setFormPosition(850,680);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DRBPR_CONTRACTOR_CONTRACT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CHASU\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_UNIONMEMBER\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONTRACT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_RECPOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RECADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RECADDR3\" type=\"STRING\" size=\"256\"/><Column id=\"NO_POST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR3\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_OFFICETEL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_MOBILE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UPTAE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UPJONG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DISTRICT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"YN_EBILL\" type=\"STRING\" size=\"256\"/><Column id=\"YN_JOINT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONTRACT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_RECEIVED\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TY_RECEIPT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_MONEY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FINANCING\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DELAY\" type=\"STRING\" size=\"256\"/><Column id=\"TY_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"YN_BUNYANG\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CARD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CARD\" type=\"STRING\" size=\"256\"/><Column id=\"NO_APPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CUSTOMER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CUSTOMER\" type=\"STRING\" size=\"256\"/><Column id=\"NO_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_CUSTOMER", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">P</Col><Col id=\"VALUE\">개인</Col></Row><Row><Col id=\"CODE\">C</Col><Col id=\"VALUE\">법인</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_CONTRACTOR", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"VALUE\">개인</Col><Col id=\"CODE\">P</Col></Row><Row><Col id=\"VALUE\">법인</Col><Col id=\"CODE\">C</Col></Row><Row><Col id=\"VALUE\">개인사업자</Col><Col id=\"CODE\">A</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsrYN_DELAY", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">적용함</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">적용안함</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_MONEY", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">본인</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"VALUE\">알선융자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_POSITION", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">M/H(현금)</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"VALUE\">은행</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"VALUE\">본사</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"VALUE\">기타</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"VALUE\">입금미수</Col></Row><Row><Col id=\"CODE\">F</Col><Col id=\"VALUE\">카드</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_BUNYANG", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">분양</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_EBILL", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">전자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_JOINT", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">있음</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">없음</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","90",null,"540","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staNO_JUMIN","0","57","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            obj.set_text("주민등록번호");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_RECEIVED","0","360","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_text("수납금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_POSITION","0","389","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("수납처");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","staNO_JUMIN:-1","57","155","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3_00","staAM_RECEIVED:-1","360",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg5","staTY_POSITION:-1","389",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_RECPOST","0","115","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_text("주민등록주소");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_01_00","staNO_RECPOST:-1","115",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE00","0","3","96.67%","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            obj.set_text("계약자정보");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_CONTRACT","0","28","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_text("계약일자");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_01","staDT_CONTRACT:-1","28","155","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_CONTRACTOR","staBg2_01:-1","28","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_text("계약구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_02","staTY_CONTRACTOR:-1","28",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_CONTRACT","staDT_CONTRACT:5","32","108","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE00_00","0","335","96.59%","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            obj.set_text("계약금 수납");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_GUJA","0","418","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_text("납입계좌");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_GUJA","staCD_GUJA:-1","418",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_RECEIVED","staAM_RECEIVED:5","364","142","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_format("###,###,###,###,##0");
            obj.set_type("number");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_MONEY","0","447","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_text("납입구분");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg5_00_00","staTY_MONEY:-1","447","235","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_FINANCING","staBg5_00_00:-1","447","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_text("융자사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_01_00_00_00","staNO_FINANCING:-1","447",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_DELAY","0","476","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_text("연체적용");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg5_00_00_00","staYN_DELAY:-1","476",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_CONTRACTOR","staTY_CONTRACTOR:5","33","178","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsTY_CONTRACTOR");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_enable("true");
            obj.set_direction("vertical");
            obj.set_text("승인");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTRACTOR","staBg1:-1","57","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            obj.set_text("계약자명");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_02_00","staDS_CONTRACTOR:-1","57","155","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_DISTRICT","staBg2_00_02_00:-1","57","107","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj.set_text("군/OPTIOM");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_02_00_00","staTY_DISTRICT:-1","57",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_TEL","0","86","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            obj.set_text("☎(자택)");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1_00","staNO_TEL:-1","86","155","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_OFFICETEL","staBg1_00:-1","86","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("52");
            obj.set_text("☎(직장)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_02_00_01","staNO_OFFICETEL:-1","86","155","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_MOBILE","staBg2_00_02_00_01:-1","86","107","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("54");
            obj.set_text("휴대폰");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_02_00_00_00","staNO_MOBILE:-1","86",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_POST","0","144","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("56");
            obj.set_text("현주소");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_01_00_01","staNO_POST:-1","144",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_EMAIL","0","173","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            obj.set_text("e-Mail");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1_00_00","staDS_EMAIL:-1","173","155","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statDS_UPTAE","staBg1_00_00:-1","173","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("60");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_02_00_01_00","statDS_UPTAE:-1","173","155","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_UPJONG","560","173","107","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("62");
            obj.set_text("업종");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_02_00_00_00_00","staDS_UPJONG:-1","173",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","0","202","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            obj.set_text("사업자번호");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1_00_00_00","staCD_VENDOR:-1","202","155","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_EBILL","staBg1_00_00_00:-1","202","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("66");
            obj.set_text("세금계산서발급구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_02_00_01_00_00","staTY_EBILL:-1","202","155","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_BUNYANG","staBg2_00_02_00_01_00_00:-1","202","107","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("68");
            obj.set_text("분양구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_02_00_00_00_00_00","staYN_BUNYANG:-1","202",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_VENDOR","0","231","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            obj.set_text("상호");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1_00_00_00_00","staDS_VENDOR:-1","231","155","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_JOINT","staBg1_00_00_00_00:-1","231","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("72");
            obj.set_text("공동명의계약자여부");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_02_00_01_00_00_00","staYN_JOINT:-1","231","155","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_CONTRACT","staBg2_00_02_00_01_00_00_00:-1","231","107","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("74");
            obj.set_text("계약서번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_02_00_00_00_00_00_00","staNO_CONTRACT:-1","231",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_REMARK","0","260","127","70",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            obj.set_text("특이사항");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1_00_00_00_00_00","staDS_REMARK:-1","260",null,"70","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_CONTRACTOR","staDS_CONTRACTOR:5","61",null,"22","295",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_value("");
            obj.set_maxlength("15");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_TEL","staNO_TEL:5","90","143","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_value("");
            obj.set_maxlength("15");
            obj.set_inputtype("number");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_OFFICETEL","staNO_OFFICETEL:5","90",null,"22","295",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_value("");
            obj.set_maxlength("15");
            obj.set_inputtype("number");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtTY_DISTRICT","staTY_DISTRICT:5","61","33","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_value("");
            obj.set_maxlength("15");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfRT_OPTION","txtTY_DISTRICT:5","61",null,"22","6",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DRX_CFCHANGEOPTION_CODEFIND");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfNO_POST","staNO_POST:5","148","402","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_RECADDR","ccfNO_POST:4","148",null,"22","6",null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_value("");
            obj.set_maxlength("30");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfNO_RECPOST","staNO_RECPOST:5","119","402","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_ADDR","ccfNO_RECPOST:4","119",null,"22","6",null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_value("");
            obj.set_maxlength("30");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_EMAIL","staDS_EMAIL:5","177","143","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_value("");
            obj.set_maxlength("30");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_UPTAE","statDS_UPTAE:5","177","143","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("78");
            obj.set_value("");
            obj.set_maxlength("15");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_UPJONG","staDS_UPJONG:5","177",null,"22","6",null,null,null,null,null,this.divData.form);
            obj.set_taborder("79");
            obj.set_value("");
            obj.set_maxlength("15");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtCD_VENDOR","staCD_VENDOR:5","206","143","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("80");
            obj.set_value("");
            obj.set_maxlength("10");
            obj.set_readonly("true");
            obj.set_inputtype("digit");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_VENDOR","staDS_VENDOR:5","235","143","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("81");
            obj.set_value("");
            obj.set_maxlength("15");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_CONTRACT","staNO_CONTRACT:5","235",null,"22","6",null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_value("");
            obj.set_maxlength("20");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_EBILL","staTY_EBILL:5","207","148","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_innerdataset("dsTY_EBILL");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_enable("true");
            obj.set_direction("vertical");
            obj.set_text("승인");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_BUNYANG","staYN_BUNYANG:5","207","138","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_innerdataset("dsYN_BUNYANG");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_enable("true");
            obj.set_direction("vertical");
            obj.set_text("승인");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_JOINT","staYN_JOINT:5","237","148","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_innerdataset("dsYN_JOINT");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_enable("true");
            obj.set_direction("vertical");
            obj.set_text("승인");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtDS_REMARK","staDS_REMARK:5","265",null,"60","6",null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_value("");
            obj.set_visible("true");
            obj.set_enable("true");
            obj.set_maxlength("250");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboTY_POSITION","staTY_POSITION:5","393","142","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_innerdataset("dsTY_POSITION");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboTY_MONEY","staTY_MONEY:5","451","142","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_innerdataset("dsTY_MONEY");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_DELAY","staYN_DELAY:5","481","148","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_innerdataset("dsrYN_DELAY");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_enable("true");
            obj.set_direction("vertical");
            obj.set_readonly("true");
            obj.set_text("승인");
            obj.set_value("APRV");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfNO_FINANCING","staNO_FINANCING:5","451","260","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DRX_CFFINANCING_CODEFIND");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_CARD","653","422","190","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.getSetter("CDTextWidth").set("60");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DRX_CARD_CODEFIND");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_APPROVAL","360","418","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("82");
            obj.set_text("승인번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_APPROVAL","staNO_APPROVAL:5","422","193","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_value("");
            obj.set_maxlength("8");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_GUJA","395","422","193","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("83");
            obj.set_value("");
            obj.set_maxlength("15");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_GUJA","132","422","260","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("84");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DRX_CFACCOUNT_CODEFIND");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskNO_MOBILE","staNO_MOBILE:5","90",null,"22","6",null,null,null,null,null,this.divData.form);
            obj.set_taborder("85");
            obj.set_format("###-####-####");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskNO_JUMIN","staNO_JUMIN:5","61","143","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("86");
            obj.set_format("######-#######");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnConf","42.24%","621","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btnExt");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","49.65%","621","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취소");
            obj.set_cssclass("btnExt");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","31",null,"2","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("sta00");
            obj.set_border("0px none, 0px none, 1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","6","97.31%","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            obj.set_text("분양계약");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0.0","divData:10.0",null,"110.0","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("기존고객검색");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdoTY_CUSTOMER","staCD_ACNTUNIT:0.0","staCD_ACNTUNIT:10.0","138","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsTY_CUSTOMER");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_enable("true");
            obj.set_direction("vertical");
            obj.set_text("승인");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staContent","rdoTY_CUSTOMER:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("주민(사업자)번호");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CUSTOMER","staContent:0.0","staCD_ACNTUNIT:10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.getSetter("CDTextWidth").set("125");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DRX_CFCUSTOMER");
            this.divSearch.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divData.form.calDT_CONTRACT","value","dsData","DT_CONTRACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.mskAM_RECEIVED","value","dsData","AM_RECEIVED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divSearch.form.rdoTY_CUSTOMER","value","dsData","TY_CUSTOMER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divSearch.form.ccfCD_CUSTOMER.form.CDTextBox","value","dsData","CD_CUSTOMER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.rdoTY_CONTRACTOR","value","dsData","TY_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.txtDS_CONTRACTOR","value","dsData","DS_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.txtNO_TEL","value","dsData","NO_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.txtNO_OFFICETEL","value","dsData","NO_OFFICETEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.txtTY_DISTRICT","value","dsData","TY_DISTRICT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.ccfRT_OPTION.form.CDTextBox","value","dsData","RT_OPTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.ccfNO_POST.form.CDTextBox","value","dsData","NO_POST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.ccfNO_POST.form.DSTextBox","value","dsData","DS_ADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.txtDS_RECADDR","value","dsData","DS_RECADDR3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.ccfNO_RECPOST.form.CDTextBox","value","dsData","NO_RECPOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.ccfNO_RECPOST.form.DSTextBox","value","dsData","DS_RECADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.txtDS_ADDR","value","dsData","DS_ADDR3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.txtDS_EMAIL","value","dsData","DS_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.txtDS_UPTAE","value","dsData","DS_UPTAE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.txtDS_UPJONG","value","dsData","DS_UPJONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.txtCD_VENDOR","value","dsData","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.txtDS_VENDOR","value","dsData","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.txtNO_CONTRACT","value","dsData","NO_CONTRACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.rdoYN_EBILL","value","dsData","YN_EBILL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.rdoYN_BUNYANG","value","dsData","YN_BUNYANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.rdoYN_JOINT","value","dsData","YN_JOINT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.txtDS_REMARK","value","dsData","DS_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.rdoYN_DELAY","value","dsData","YN_DELAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.ccfNO_FINANCING.form.CDTextBox","value","dsData","NO_FINANCING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.ccfCD_CARD.form.CDTextBox","value","dsData","CD_CARD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.txtNO_APPROVAL","value","dsData","NO_APPROVAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.cboTY_POSITION","value","dsData","TY_POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.cboTY_MONEY","value","dsData","TY_MONEY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.ccfCD_CARD.form.DSTextBox","value","dsData","DS_CARD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.txtNO_GUJA","value","dsData","NO_GUJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.ccfCD_GUJA.form.CDTextBox","value","dsData","CD_GUJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.ccfRT_OPTION.form.DSTextBox","value","dsData","DS_OPTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.mskNO_MOBILE","value","dsData","NO_MOBILE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.mskNO_JUMIN","value","dsData","NO_JUMIN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DRB_DLGCONTRACT.xfdl", function() {
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

        	// 이전 화면에서 데이터 받기.
        	this.dsData.setColumn(0, "CD_ACNTUNIT"	 , this.getOwnerFrame().CD_ACNTUNIT);
        	this.dsData.setColumn(0, "NO_DONG"		 , this.getOwnerFrame().DONG);
        	this.dsData.setColumn(0, "NO_FLOOR"		 , this.getOwnerFrame().FLOOR)
        	this.dsData.setColumn(0, "NO_HO"		 , this.getOwnerFrame().HO);
        	this.dsData.setColumn(0, "NO_UNIONMEMBER", this.getOwnerFrame().NO_UNIONMEMBER);
        	this.dsData.setColumn(0, "AM_RECEIVED"   , this.getOwnerFrame().AM_RECEIVED);	//수납금액
        	this.dsData.setColumn(0, "TY_DISTRICT"	 , this.getOwnerFrame().TY_DISTRIC);	//군
        	this.dsData.setColumn(0, "RT_OPTION"	 , this.getOwnerFrame().RT_OPTION);		//OPTION
        	this.dsData.setColumn(0, "DS_OPTION"	 , this.getOwnerFrame().DS_OPTION);		//OPTION명
        	this.dsData.setColumn(0, "NO_SIZE"	 	 , this.getOwnerFrame().NO_SIZE);		//면적
        	this.dsData.setColumn(0, "TY_TYPE"	 	 , this.getOwnerFrame().TY_TYPE);		//평형
        	this.dsData.setColumn(0, "DT_CONTRACT"	 , this.gfnGetDate()); 					//계약일자

        	this.dsData.setColumn(0, "TY_CUSTOMER"	 , "P"); 	//기존고객검색(개인)
        	this.dsData.setColumn(0, "TY_CONTRACTOR" , "P"); 	//계약구분(개인)
        	this.dsData.setColumn(0, "YN_EBILL"	     , "Y"); 	//세금계산서발급구븐(전자)
        	this.dsData.setColumn(0, "YN_BUNYANG"	 , "Y"); 	//분양구분(분양)
        	this.dsData.setColumn(0, "YN_JOINT"	     , "N"); 	//공동명의계약자여부(없음)
        	this.dsData.setColumn(0, "YN_DELAY"	     , "N"); 	//연체적용(적용안함)
        	this.dsData.setColumn(0, "TY_POSITION"	 , "2"); 	//수납처(은행)
        	this.dsData.setColumn(0, "TY_MONEY"	     , "1"); 	//납입구분(본인)

        	var titletxt  = this.FormInfo.NM_FORM  +"(";
        		titletxt += this.dsData.getColumn(0, "NO_DONG")  +" 동 ";
        		titletxt += this.dsData.getColumn(0, "NO_FLOOR") +" 층 ";
        		titletxt += this.dsData.getColumn(0, "NO_HO")    +" 호)";

        	this.staTITLE.set_text(titletxt);

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
        	this.staTITLE 			= this.staTITLE;
        	this.rdoTY_CUSTOMER 	= this.divSearch.form.rdoTY_CUSTOMER;
        	this.ccfCD_CUSTOMER 	= this.divSearch.form.ccfCD_CUSTOMER;
        	this.calDT_CONTRACT 	= this.divData.form.calDT_CONTRACT;
        	this.rdoTY_CONTRACTOR 	= this.divData.form.rdoTY_CONTRACTOR;
        	this.makNO_JUMIN 		= this.divData.form.mskNO_JUMIN;
        	this.txtDS_CONTRACTOR 	= this.divData.form.txtDS_CONTRACTOR;
        	this.txtTY_DISTRICT 	= this.divData.form.txtTY_DISTRICT;
        	this.ccfRT_OPTION 		= this.divData.form.ccfRT_OPTION;
        	this.txtNO_TEL 			= this.divData.form.txtNO_TEL;
        	this.txtNO_OFFICETEL 	= this.divData.form.txtNO_OFFICETEL;
        	this.mskNO_MOBILE 		= this.divData.form.mskNO_MOBILE;
        	this.ccfNO_RECPOST 		= this.divData.form.ccfNO_RECPOST;
        	this.txtDS_RECADDR 		= this.divData.form.txtDS_RECADDR;
        	this.ccfNO_POST 		= this.divData.form.ccfNO_POST;
        	this.txtDS_ADDR 		= this.divData.form.txtDS_ADDR;
        	this.txtDS_EMAIL 		= this.divData.form.txtDS_EMAIL;
        	this.txtDS_UPTAE 		= this.divData.form.txtDS_UPTAE;
        	this.txtDS_UPJONG 		= this.divData.form.txtDS_UPJONG;
        	this.txtCD_VENDOR 		= this.divData.form.txtCD_VENDOR;
        	this.txtDS_VENDOR 		= this.divData.form.txtDS_VENDOR;
        	this.rdoYN_EBILL 		= this.divData.form.rdoYN_EBILL;
        	this.rdoYN_JOINT 		= this.divData.form.rdoYN_JOINT;
        	this.rdoYN_BUNYANG 		= this.divData.form.rdoYN_BUNYANG;
        	this.txtNO_CONTRACT     = this.divData.form.txtNO_CONTRACT;
        	this.txtDS_REMARK 		= this.divData.form.txtDS_REMARK;
        	this.mskAM_RECEIVED     = this.divData.form.mskAM_RECEIVED;
        	this.cboTY_POSITION     = this.divData.form.cboTY_POSITION;
        	this.ccfCD_GUJA         = this.divData.form.ccfCD_GUJA;
        	this.txtNO_GUJA         = this.divData.form.txtNO_GUJA;
        	this.ccfCD_CARD         = this.divData.form.ccfCD_CARD;
        	this.txtNO_APPROVAL     = this.divData.form.txtNO_APPROVAL;
        	this.cboTY_MONEY        = this.divData.form.cboTY_MONEY;
        	this.ccfNO_FINANCING    = this.divData.form.ccfNO_FINANCING;
        	this.rdoYN_DELAY        = this.divData.form.rdoYN_DELAY;
        	this.staNO_APPROVAL     = this.divData.form.staNO_APPROVAL;
        	this.staCD_GUJA         = this.divData.form.staCD_GUJA;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//주민(사업자)번호
        	this.ccfCD_CUSTOMER.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CUSTOMER.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//OPTION
        	this.ccfRT_OPTION.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	//주민등록주소
        	this.ccfNO_RECPOST.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//현주소
        	this.ccfNO_POST.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//납입계좌
        	this.ccfCD_GUJA.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_GUJA.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//융자사
        	this.ccfNO_FINANCING.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_ACNTUNIT"	, "string");
        	this.dsInsert.addColumn("TY_GUBUN"		, "string");
        	this.dsInsert.addColumn("NO_CHASU"		, "string");
        	this.dsInsert.addColumn("NO_DONG"		, "string");
        	this.dsInsert.addColumn("NO_FLOOR"		, "string");
        	this.dsInsert.addColumn("NO_HO"			, "string");
        	this.dsInsert.addColumn("NO_UNIONMEMBER", "string");
        	this.dsInsert.addColumn("DT_CONTRACT"	, "string");
        	this.dsInsert.addColumn("TY_CONTRACTOR"	, "string");
        	this.dsInsert.addColumn("DS_CONTRACTOR"	, "string");
        	this.dsInsert.addColumn("NO_JUMIN"		, "string");
        	this.dsInsert.addColumn("NO_RECPOST"	, "string");
        	this.dsInsert.addColumn("DS_RECADDR2"	, "string");
        	this.dsInsert.addColumn("DS_RECADDR3"	, "string");
        	this.dsInsert.addColumn("NO_POST"		, "string");
        	this.dsInsert.addColumn("DS_ADDR2"		, "string");
        	this.dsInsert.addColumn("DS_ADDR3"		, "string");
        	this.dsInsert.addColumn("NO_TEL"		, "string");
        	this.dsInsert.addColumn("NO_OFFICETEL"	, "string");
        	this.dsInsert.addColumn("NO_MOBILE"		, "string");
        	this.dsInsert.addColumn("DS_EMAIL"		, "string");
        	this.dsInsert.addColumn("CD_VENDOR"		, "string");
        	this.dsInsert.addColumn("DS_VENDOR"		, "string");
        	this.dsInsert.addColumn("DS_UPTAE"		, "string");
        	this.dsInsert.addColumn("DS_UPJONG"		, "string");
        	this.dsInsert.addColumn("DS_REMARK"		, "string");
        	this.dsInsert.addColumn("TY_DISTRICT"	, "string");
        	this.dsInsert.addColumn("RT_OPTION"		, "string");
        	this.dsInsert.addColumn("YN_EBILL"		, "string");
        	this.dsInsert.addColumn("YN_JOINT"		, "string");
        	this.dsInsert.addColumn("AM_RECEIVED"	, "BIGDECIMAL");
        	this.dsInsert.addColumn("TY_RECEIPT"	, "string");
        	this.dsInsert.addColumn("TY_MONEY"		, "string");
        	this.dsInsert.addColumn("CD_GUJA"		, "string");
        	this.dsInsert.addColumn("NO_FINANCING"	, "string");
        	this.dsInsert.addColumn("YN_DELAY"		, "string");
        	this.dsInsert.addColumn("TY_POSITION"	, "string");
        	this.dsInsert.addColumn("YN_BUNYANG"	, "string");
        	this.dsInsert.addColumn("ID_UPDATE"		, "string");
        	this.dsInsert.addColumn("CD_CARD"		, "string");
        	this.dsInsert.addColumn("DS_CARD"		, "string");
        	this.dsInsert.addColumn("NO_APPROVAL"	, "string");
        	this.dsInsert.addColumn("DT_PAYBACK"	, "string");
        	this.dsInsert.addColumn("CD_DEPT_BE"	, "string");
        	this.dsInsert.addColumn("NO_CONTRACT"	, "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

         /************************************************************************
         * 콤보 이벤트
         ************************************************************************/


        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValidate = function() {
        	var validate = true;
        	var strMsg   = "";

        	if (this.gfnIsNull(this.dsData.getColumn(0, "CD_ACNTUNIT"))) {
        		strMsg += "사업지코드가 존재하지 않습니다.\n";
        		validate = false;
        	}

        	if (this.gfnIsNull(this.dsData.getColumn(0, "NO_DONG"))) {
        		strMsg += "동정보가 존재하지 않습니다.\n";
        		validate = false;
        	}

        	if (this.gfnIsNull(this.dsData.getColumn(0, "NO_FLOOR"))) {
        		strMsg += "층정보가 존재하지 않습니다.\n";
        		validate = false;
        	}

        	if (this.gfnIsNull(this.dsData.getColumn(0, "NO_HO"))) {
        		strMsg += "호정보가 존재하지 않습니다.\n";
        		validate = false;
        	}

        	if (this.gfnIsNull(this.dsData.getColumn(0, "DT_CONTRACT"))) {
        		strMsg += "계약일자를 입력하지 않았습니다.\n";
        		validate = false;
        	}

        	if (this.gfnIsNull(this.gfnTrim(this.dsData.getColumn(0, "DS_CONTRACTOR")))) {
        		strMsg += "계약자명을 입력하지 않았습니다.\n";
        		validate = false;
        	}

        	if(this.dsData.getColumn(0, "TY_CONTRACTOR") != "C"){	//개인/개인사업자
        		if (this.gfnIsNull(this.gfnTrim(this.dsData.getColumn(0, "NO_JUMIN")))) {
        			strMsg += "주민등록번호를 입력하지 않았습니다.\n";
        			validate = false;
        		} else {
        			if (nexacro.replaceAll(this.dsData.getColumn(0, "NO_JUMIN"),"-","").length != 13) {
        				strMsg += "주민등록번호는 13자리 입니다.\n";
        				validate = false;
        			}
        // 			공통체크 gfnIsSSN 가 2000년대생 체크로직이 안들어가 있어서 무조건 fasle 가 들어옴
        // 			if(!this.gfnIsSSN(nexacro.replaceAll(this.dsData.getColumn(0, "NO_JUMIN"),"-",""))){
        // 				strMsg += "주민등록번호가 잘못 되었습니다.\n";
        // 				validate = false;
        // 			}
        		}
        	}

        	if(this.dsData.getColumn(0, "TY_CONTRACTOR") == "C" || this.dsData.getColumn(0, "TY_CONTRACTOR") == "A"){ //법인/개인사업자
        		if (this.gfnIsNull(this.gfnTrim(this.dsData.getColumn(0, "CD_VENDOR")))) {
        			strMsg += "사업자등록번호를 입력하지 않았습니다.\n";
        			validate = false;
        		} else {
        			if(!this.gfnIsBzIdNo(nexacro.replaceAll(this.dsData.getColumn(0, "CD_VENDOR"),"-",""))){
        				strMsg += "사업자등록번호가 잘못 되었습니다.\n";
        				validate = false;
        			}
        		}

        		if (this.gfnIsNull(this.gfnTrim(this.dsData.getColumn(0, "DS_VENDOR")))) {
        			strMsg += "상호를 입력하지 않았습니다.\n";
        			validate = false;
        		}
        	}

        	if (this.gfnIsNull(this.gfnTrim(this.dsData.getColumn(0, "NO_TEL"))) && this.gfnIsNull(this.gfnTrim(this.dsData.getColumn(0, "NO_MOBILE")))) {
        		strMsg += "자택 전화번호나 휴대폰 번호를 입력하셔야 합니다.\n";
        		validate = false;
        	}

        	if (!this.gfnIsNull(this.gfnTrim(this.dsData.getColumn(0, "NO_TEL")))) {
        		if(!nexacro.isNumeric(nexacro.replaceAll(nexacro.replaceAll(this.dsData.getColumn(0, "NO_TEL"),"-",""),")",""))){
        			strMsg += "자택 전화번호가 정확하지 않습니다.\n";
        			validate = false;
        		}
        	}

        	if (!this.gfnIsNull(this.gfnTrim(this.dsData.getColumn(0, "NO_OFFICETEL")))) {
        		if(!nexacro.isNumeric(nexacro.replaceAll(nexacro.replaceAll(this.dsData.getColumn(0, "NO_OFFICETEL"),"-",""),")",""))){
        			strMsg += "직장 전화번호가 정확하지 않습니다.\n";
        			validate = false;
        		}
        	}

        	if (!this.gfnIsNull(this.gfnTrim(this.dsData.getColumn(0, "NO_MOBILE")))) {
        		if(!nexacro.isNumeric(nexacro.replaceAll(nexacro.replaceAll(this.dsData.getColumn(0, "NO_MOBILE"),"-",""),")",""))){
        			strMsg += "휴대폰번호가 정확하지 않습니다.\n";
        			validate = false;
        		}

        		if (nexacro.replaceAll(this.dsData.getColumn(0, "NO_MOBILE"),"-","").length != 11) {
        			strMsg += "휴대폰 번호 자릿수가 정확하지 않습니다.\n";
        			validate = false;
        		}
        	}

        	if (this.gfnIsNull(this.gfnTrim(this.dsData.getColumn(0, "NO_RECPOST")))) {
        		strMsg += "주민등록주소를 입력하지 않았습니다.\n";
        		validate = false;
        	}

        	if (this.gfnIsNull(this.gfnTrim(this.dsData.getColumn(0, "NO_POST")))) {
        		strMsg += "현주소를 입력하지 않았습니다.\n";
        		validate = false;
        	}

        	if (this.gfnIsNull(this.dsData.getColumn(0, "AM_RECEIVED"))) {
        		strMsg += "수납금액을 입력하지 않았습니다.\n";
        		validate = false;
        	}

        	if (this.gfnIsNull(this.dsData.getColumn(0, "TY_POSITION"))) {
        		strMsg += "수납처를 입력하지 않았습니다.\n";
        		validate = false;
        	}

        	if(this.dsData.getColumn(0, "TY_POSITION") == "F"){	//카드
        		if (this.gfnIsNull(this.dsData.getColumn(0, "CD_CARD"))) {
        			strMsg += "카드사를 입력하지 않았습니다.\n";
        			validate = false;
        		}

        		if (this.gfnIsNull(this.gfnTrim(this.dsData.getColumn(0, "NO_APPROVAL")))) {
        			strMsg += "승인번호를 입력하지 않았습니다.\n";
        			validate = false;
        		}else{
        			if (this.gfnTrim(this.dsData.getColumn(0, "NO_APPROVAL")).length < 8) {
        				strMsg += "승인번호는 8자리입니다.\n";
        				validate = false;
        			}
        		}
        	}

        	//M/H(현금) ,카드가 아닐경우
        	if(this.dsData.getColumn(0, "TY_POSITION") != "1" && this.dsData.getColumn(0, "TY_POSITION") != "F") {
        		if(nexacro.toNumber(this.dsData.getColumn(0, "AM_RECEIVED"),0) > 0){	//수납금액이 있을경우
        			if (this.gfnIsNull(this.dsData.getColumn(0, "CD_GUJA"))) {
        				strMsg += "계좌를 입력하지 않았습니다.\n";
        				validate = false;
        			}
        		}
        	}

        	if (this.gfnIsNull(this.dsData.getColumn(0, "TY_MONEY"))) {
        		strMsg += "납입구분을 입력하지 않았습니다.\n";
        		validate = false;
        	}

        	if (this.dsData.getColumn(0, "TY_MONEY") == "2") {	//알선융자일경우
        		if (this.gfnIsNull(this.dsData.getColumn(0, "NO_FINANCING"))) {
        			strMsg += "융자사를 입력하지 않았습니다.\n";
        			validate = false;
        		}
        	}

        	if(!validate){
        		this.gfnAlert(strMsg);
        	}

        	return validate;
        }
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "save") {
        		if(errorCode == 0){
        			this.getParentContext().close(true);
        		}else{
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_CUSTOMER") {	//주민(사업자)번호
        		dsUserParam.setColumn(nrow, "TY_CONT"	 , this.dsData.getColumn(0, "TY_CUSTOMER"));
        	}else if(id == "ccfRT_OPTION"){ //군/OPTIOM
        		dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.dsData.getColumn(0, "CD_ACNTUNIT"));
        		dsUserParam.setColumn(nrow, "NO_SIZE"	 , this.dsData.getColumn(0, "NO_SIZE"));
        		dsUserParam.setColumn(nrow, "TY_TYPE"	 , this.dsData.getColumn(0, "TY_TYPE"));
        		dsUserParam.setColumn(nrow, "TY_DISTRICT", this.dsData.getColumn(0, "TY_DISTRICT"));
        	}else if(id == "ccfCD_GUJA"){	//납입계좌
        		dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.dsData.getColumn(0, "CD_ACNTUNIT"));
        	}else if(id == "ccfNO_FINANCING"){	//융자사
        		dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.dsData.getColumn(0, "CD_ACNTUNIT"));
        		dsUserParam.setColumn(nrow, "YN_OPTION"  , "N");
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	switch(id){
        		case "ccfCD_CUSTOMER" : //주민(사업자)번호
        			this.dsData.setColumn(0, "NO_JUMIN"	   	, arr[0].NO_JUMIN);
        			this.dsData.setColumn(0, "NO_TEL"	   	, arr[0].NO_TEL);
        			this.dsData.setColumn(0, "NO_OFFICETEL"	, arr[0].NO_OFFICETEL);
        			this.dsData.setColumn(0, "DS_CONTRACTOR", arr[0].DS_CUSTOMER);
        			this.dsData.setColumn(0, "NO_MOBILE"   	, arr[0].NO_MOBILE);
        			this.dsData.setColumn(0, "NO_POST"	  	, this.gfnTrim(arr[0].NO_POST));
        			this.dsData.setColumn(0, "DS_ADDR2"	   	, arr[0].DS_ADDR2);
        			this.dsData.setColumn(0, "DS_ADDR3"	   	, arr[0].DS_ADDR3);
        			this.dsData.setColumn(0, "NO_RECPOST"  	, this.gfnTrim(arr[0].NO_RECPOST));
        			this.dsData.setColumn(0, "DS_RECADDR2" 	, arr[0].DS_RECADDR2);
        			this.dsData.setColumn(0, "DS_RECADDR3" 	, arr[0].DS_RECADDR3);
        			this.dsData.setColumn(0, "DS_EMAIL"    	, arr[0].DS_EMAIL);
        			this.dsData.setColumn(0, "DS_REMARK"   	, arr[0].DS_REMARK);

        			if(this.dsData.getColumn(0, "TY_CUSTOMER") == "P"){	//개인
        				this.dsData.setColumn(0, "TY_CONTRACTOR", "P");
        				this.dsData.setColumn(0, "CD_VENDOR"	, "");
        				this.dsData.setColumn(0, "DS_VENDOR"	, "");
        				this.dsData.setColumn(0, "DS_UPTAE"		, "");
        				this.dsData.setColumn(0, "DS_UPJONG"	, "");
        			}else{	//법인
        				this.dsData.setColumn(0, "TY_CONTRACTOR", "C");
        				this.dsData.setColumn(0, "CD_VENDOR"	, arr[0].CD_VENDOR);
        				this.dsData.setColumn(0, "DS_VENDOR"	, arr[0].DS_VENDOR1);
        				this.dsData.setColumn(0, "DS_UPTAE"		, arr[0].DS_UPTAE);
        				this.dsData.setColumn(0, "DS_UPJONG"	, arr[0].DS_UPJONG);
        			}
        			break;
        		case "ccfNO_RECPOST" : //주민등록주소
        			this.dsData.setColumn(0, "DS_RECADDR3"	, "");
        			break;
        		case "ccfNO_POST" : 	//현주소
        			this.dsData.setColumn(0, "DS_ADDR3"	, "");
        			break;
        		case "ccfCD_GUJA" : 	//납입계좌
        			this.dsData.setColumn(0, "NO_GUJA"	, arr[0].NO_GUJA);
        			break;
        	}
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.dsData_oncolumnchanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){
        		if(e.columnid == "TY_CONTRACTOR"){		//계약구분
        			obj.setColumn(e.row, "NO_JUMIN" 	 , "");
        			obj.setColumn(e.row, "DS_CONTRACTOR" , "");
        			obj.setColumn(e.row, "NO_TEL" 		 , "");
        			obj.setColumn(e.row, "NO_OFFICETEL"  , "");
        			obj.setColumn(e.row, "NO_MOBILE" 	 , "");
        			obj.setColumn(e.row, "DS_EMAIL" 	 , "");
        			obj.setColumn(e.row, "NO_POST" 	  	 , "");
        			obj.setColumn(e.row, "DS_ADDR2" 	 , "");
        			obj.setColumn(e.row, "DS_ADDR3" 	 , "");
        			obj.setColumn(e.row, "NO_RECPOST" 	 , "");
        			obj.setColumn(e.row, "DS_RECADDR2"   , "");
        			obj.setColumn(e.row, "DS_RECADDR3"   , "");
        			obj.setColumn(e.row, "DS_REMARK"     , "");

        			if(e.newvalue == "P"){	//개인
        				this.txtCD_VENDOR.set_readonly(true);
        				this.txtDS_VENDOR.set_readonly(true);
        				this.txtDS_UPJONG.set_readonly(true);
        				this.txtDS_UPTAE.set_readonly(true);

        				obj.setColumn(e.row, "CD_VENDOR", "");
        				obj.setColumn(e.row, "DS_VENDOR", "");
        				obj.setColumn(e.row, "DS_UPJONG", "");
        				obj.setColumn(e.row, "DS_UPTAE" , "");
        			} else if (e.newvalue == "C"){	//법인
        				this.txtCD_VENDOR.set_readonly(false);
        				this.txtDS_VENDOR.set_readonly(false);
        				this.txtDS_UPJONG.set_readonly(false);
        				this.txtDS_UPTAE.set_readonly(false);
        			} else {	//개인사업자
        				this.txtCD_VENDOR.set_readonly(false);
        				this.txtDS_VENDOR.set_readonly(false);
        				this.txtDS_UPJONG.set_readonly(false);
        				this.txtDS_UPTAE.set_readonly(false);
        			}
        		} else if(e.columnid =="TY_POSITION"){	//수납처
        			if(e.newvalue == "F"){	//카드일경우
        				this.ccfCD_GUJA.form.fnCodeFindClear();			//납입계좌 초기화
        				this.ccfNO_FINANCING.form.fnCodeFindClear();	//융자사 초기화
        				obj.setColumn(e.row, "NO_GUJA", "");
        				obj.setColumn(e.row, "TY_MONEY", "1");	//납입구분(본인)

        				this.ccfNO_FINANCING.form.set_readonly(true);
        				this.ccfCD_GUJA.set_visible(false);		//납부계좌은행
        				this.txtNO_GUJA.set_visible(false);		//계좌번호
        				this.cboTY_MONEY.set_enable(false);		//납입구분

        				this.staCD_GUJA.set_text("카드사");

        				this.ccfCD_CARD.set_visible(true);		//카드번호
        				this.txtNO_APPROVAL.set_visible(true);	//승인번호
        				this.staNO_APPROVAL.set_visible(true);	//승인번호 타이틀

        				this.ccfCD_CARD.set_left(this.cboTY_MONEY.left);	//카드번호 위치 조정
        			}else{
        				this.ccfCD_CARD.form.fnCodeFindClear();
        				obj.setColumn(e.row, "NO_APPROVAL", "");

        				this.staCD_GUJA.set_text("납입계좌");

        				if(obj.getColumn(e.row, "TY_MONEY") != "1"){
        					this.ccfNO_FINANCING.form.set_readonly(false);
        				}

        				this.ccfCD_GUJA.set_visible(true);		//납부계좌은행
        				this.txtNO_GUJA.set_visible(true);		//계좌번호
        				this.cboTY_MONEY.set_enable(true);		//납입구분

        				this.ccfCD_CARD.set_visible(false);		//카드번호
        				this.txtNO_APPROVAL.set_visible(false);	//승인번호
        				this.staNO_APPROVAL.set_visible(false); //승인번호 타이틀
        			}
        		} else if(e.columnid =="TY_MONEY"){	//납입구분
        			if(e.newvalue == "1"){	//본인
        				this.ccfNO_FINANCING.form.fnCodeFindClear();
        				this.ccfNO_FINANCING.form.set_readonly(true);
        			}else{
        				this.ccfNO_FINANCING.form.set_readonly(false);
        			}
        		}
        	}
        };

        //확인버튼
        this.btnConf_onclick = function(obj,e)
        {
        	if(!this.fnSaveValidate()) return;

        	this.dsInsert.clearData();
        	var nrow = this.dsInsert.addRow();

        	this.dsInsert.setColumn(nrow, "CD_ACNTUNIT"		, this.dsData.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsInsert.setColumn(nrow, "TY_GUBUN"		, this.dsData.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsInsert.setColumn(nrow, "NO_CHASU"		, this.dsData.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsInsert.setColumn(nrow, "NO_DONG"			, this.dsData.getColumn(0, "NO_DONG"));
        	this.dsInsert.setColumn(nrow, "NO_FLOOR"		, this.dsData.getColumn(0, "NO_FLOOR"));
        	this.dsInsert.setColumn(nrow, "NO_HO"			, this.dsData.getColumn(0, "NO_HO"));
        	this.dsInsert.setColumn(nrow, "NO_UNIONMEMBER"  , this.dsData.getColumn(0, "NO_UNIONMEMBER"));

        	this.dsInsert.setColumn(nrow, "DT_CONTRACT"  	, this.dsData.getColumn(0, "DT_CONTRACT"));
        	this.dsInsert.setColumn(nrow, "TY_CONTRACTOR"   , this.dsData.getColumn(0, "TY_CONTRACTOR"));
        	this.dsInsert.setColumn(nrow, "DS_CONTRACTOR"   , this.dsData.getColumn(0, "DS_CONTRACTOR"));
        	this.dsInsert.setColumn(nrow, "NO_JUMIN"  		, nexacro.replaceAll(this.dsData.getColumn(0, "NO_JUMIN"),"-",""));
        	this.dsInsert.setColumn(nrow, "NO_RECPOST"  	, nexacro.replaceAll(this.dsData.getColumn(0, "NO_RECPOST"),"-",""));
        	this.dsInsert.setColumn(nrow, "DS_RECADDR2"  	, this.dsData.getColumn(0, "DS_RECADDR2"));
        	this.dsInsert.setColumn(nrow, "DS_RECADDR3"  	, this.dsData.getColumn(0, "DS_RECADDR3"));
        	this.dsInsert.setColumn(nrow, "NO_POST"  		, nexacro.replaceAll(this.dsData.getColumn(0, "NO_POST"),"-",""));
        	this.dsInsert.setColumn(nrow, "DS_ADDR2"  		, this.dsData.getColumn(0, "DS_ADDR2"));
        	this.dsInsert.setColumn(nrow, "DS_ADDR3"  		, this.dsData.getColumn(0, "DS_ADDR3"));
        	this.dsInsert.setColumn(nrow, "NO_TEL"  		, this.dsData.getColumn(0, "NO_TEL"));
        	this.dsInsert.setColumn(nrow, "NO_OFFICETEL"  	, this.dsData.getColumn(0, "NO_OFFICETEL"));
        	this.dsInsert.setColumn(nrow, "NO_MOBILE"  		, nexacro.replaceAll(this.dsData.getColumn(0, "NO_MOBILE"),"-",""));
        	this.dsInsert.setColumn(nrow, "DS_EMAIL"  		, this.dsData.getColumn(0, "DS_EMAIL"));
        	this.dsInsert.setColumn(nrow, "CD_VENDOR"  		, nexacro.replaceAll(this.dsData.getColumn(0, "CD_VENDOR"),"-",""));
        	this.dsInsert.setColumn(nrow, "DS_VENDOR"  		, this.dsData.getColumn(0, "DS_VENDOR"));
        	this.dsInsert.setColumn(nrow, "DS_UPTAE"  		, this.dsData.getColumn(0, "DS_UPTAE"));
        	this.dsInsert.setColumn(nrow, "DS_UPJONG"		, this.dsData.getColumn(0, "DS_UPJONG"));
        	this.dsInsert.setColumn(nrow, "DS_REMARK"  		, this.dsData.getColumn(0, "DS_REMARK"));

        	this.dsInsert.setColumn(nrow, "TY_DISTRICT"  	, this.dsData.getColumn(0, "TY_DISTRICT"));
        	this.dsInsert.setColumn(nrow, "RT_OPTION"  		, this.dsData.getColumn(0, "RT_OPTION"));
        	this.dsInsert.setColumn(nrow, "YN_EBILL"  		, this.dsData.getColumn(0, "YN_EBILL"));
        	this.dsInsert.setColumn(nrow, "YN_JOINT"  		, this.dsData.getColumn(0, "YN_JOINT"));


        	this.dsInsert.setColumn(nrow, "AM_RECEIVED"  	, nexacro.toNumber(this.dsData.getColumn(0, "AM_RECEIVED"),0));
        	this.dsInsert.setColumn(nrow, "TY_RECEIPT"  	, "");
        	this.dsInsert.setColumn(nrow, "TY_MONEY"  		, this.dsData.getColumn(0, "TY_MONEY"));
        	this.dsInsert.setColumn(nrow, "CD_GUJA"  		, this.dsData.getColumn(0, "CD_GUJA"));
        	this.dsInsert.setColumn(nrow, "NO_FINANCING"  	, this.dsData.getColumn(0, "NO_FINANCING"));
        	this.dsInsert.setColumn(nrow, "YN_DELAY"  		, this.dsData.getColumn(0, "YN_DELAY"));
        	this.dsInsert.setColumn(nrow, "TY_POSITION"  	, this.dsData.getColumn(0, "TY_POSITION"));
        	this.dsInsert.setColumn(nrow, "YN_BUNYANG"  	, this.dsData.getColumn(0, "YN_BUNYANG"));
        	this.dsInsert.setColumn(nrow, "CD_CARD"  		, this.dsData.getColumn(0, "CD_CARD"));
        	this.dsInsert.setColumn(nrow, "DS_CARD"  		, this.dsData.getColumn(0, "DS_CARD"));
        	this.dsInsert.setColumn(nrow, "NO_APPROVAL"  	, this.dsData.getColumn(0, "NO_APPROVAL"));
        	this.dsInsert.setColumn(nrow, "DT_PAYBACK"  	, "");
        	this.dsInsert.setColumn(nrow, "CD_DEPT_BE"  	, "");
        	this.dsInsert.setColumn(nrow, "NO_CONTRACT"  	, this.dsData.getColumn(0, "NO_CONTRACT"));
        	this.dsInsert.setColumn(nrow, "ID_UPDATE"		, this.AuthClient.ID_USER);

        	var strSvcId    = "save";
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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        //취소버튼
        this.btnCancel_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.txtDS_RECADDR.addEventHandler("onkillfocus",this.divData_txtDS_ADDR_onkillfocus,this);
            this.btnConf.addEventHandler("onclick",this.btnConf_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.dsData.addEventHandler("oncolumnchanged",this.dsData_oncolumnchanged,this);
        };
        this.loadIncludeScript("DRB_DLGCONTRACT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
