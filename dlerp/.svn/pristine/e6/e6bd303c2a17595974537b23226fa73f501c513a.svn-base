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
            this.set_titletext("입주종합현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_STATE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BUNYANG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SIZE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DISTRICT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONTRACT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_RECPOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RECADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RECADDR3\" type=\"STRING\" size=\"256\"/><Column id=\"NO_POST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR3\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_OFFICETEL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_MOBILE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UPTAE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UPJONG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"AM_BUNYANGPLAN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_BUNYANGGET\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_KASU\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"YN_EBILL\" type=\"STRING\" size=\"256\"/><Column id=\"YN_JOINT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_READONLY\" type=\"STRING\" size=\"256\"/><Column id=\"YN_VACNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"NO_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BANK\" type=\"STRING\" size=\"256\"/><Column id=\"AM_LAND\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_BUILDING\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_VAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SELLING\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YN_CANCEL\" type=\"STRING\" size=\"256\"/><Column id=\"TY_ESIGN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CANCEL\" type=\"STRING\" size=\"256\"/><Column id=\"AM_DELMISU\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YN_BUNYANG\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SMS\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SUNSU\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YN_SUNSU\" type=\"STRING\" size=\"256\"/><Column id=\"YN_RETURN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RETURN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LOAN\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SMART\" type=\"STRING\" size=\"256\"/><Column id=\"YN_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"YN_MINUSOPTION\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONTRACT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">selectRemark</Col><Col id=\"SP\">DRBPR_REMARK_INFO_SELECT</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DRBPR_CONTRACTDETAIL_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DRBPR_CONTRACTOR_UPDATE</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DRBPR_RECEIVED_SELECT_DT_DAEBANG</Col></Row><Row><Col id=\"TARGET\">select2_1</Col><Col id=\"SP\">DRCPR_APPROPRIATE_SELECT</Col></Row><Row><Col id=\"TARGET\">select2_2</Col><Col id=\"SP\">DRCPR_PAYBACK_SELECT</Col></Row><Row><Col id=\"TARGET\">select3</Col><Col id=\"SP\">DRBPR_LAWSUIT_SELECT</Col></Row><Row><Col id=\"TARGET\">insert3</Col><Col id=\"SP\">DRCPR_LAWSUIT_INSERT</Col></Row><Row><Col id=\"TARGET\">update3</Col><Col id=\"SP\">DRCPR_LAWSUIT_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete3</Col><Col id=\"SP\">DRCPR_LAWSUIT_DELETE</Col></Row><Row><Col id=\"TARGET\">receiptcancel</Col><Col id=\"SP\">DRCPR_RECEIPT_CANCEL_SHINYOUNG</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_UNIONMEMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_CONTRACTOR", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">P</Col><Col id=\"DS_CODE\">개인</Col></Row><Row><Col id=\"CD_CODE\">C</Col><Col id=\"DS_CODE\">법인</Col></Row><Row><Col id=\"CD_CODE\">A</Col><Col id=\"DS_CODE\">개인사업자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_EBILL", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">전자</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">종이</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_JOINT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">있음</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">없음</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2_1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2_2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList4", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList4_2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRemarkInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("사업지코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_ACNTUNIT","staCD_ACNTUNIT:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ACNTUNIT","ctxtCD_ACNTUNIT:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_BUNYANG","ctxtDS_ACNTUNIT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("동층호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_DONG","staTY_BUNYANG:0.0","10.0","40","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_maxlength("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_FLOOR","ctxtNO_DONG:0.0","10.0","30","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_maxlength("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_HO","ctxtNO_FLOOR:0.0","10.0","40","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_maxlength("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("cbtnNO_DONGHO","ctxtNO_HO:0.0","10.0","25","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_CF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","60%","100%","5",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter:5",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta01","0","sta00:10","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("평형");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta02","sta01:-1","sta00:10","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta03","sta02:-1","sta00:10","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("3");
            obj.set_text("군/OPTION");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta04","sta03:-1","sta00:10",null,"30","0",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta05","0","sta01:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("5");
            obj.set_text("별도계약");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta06","sta05:-1","sta02:-1","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta07","sta06:-1","sta02:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("7");
            obj.set_text("분양구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta08","sta07:-1","sta02:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta09","sta08:-1","sta03:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("9");
            obj.set_text("계약구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta10","sta09:-1","sta04:-1",null,"30","0",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta11","0","sta05:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("11");
            obj.set_text("계약일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta12","sta11:-1","sta06:-1","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta13","sta12:-1","sta07:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("13");
            obj.set_text("계약자명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta14","sta13:-1","sta08:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta15","sta14:-1","sta09:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("15");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta16","sta15:-1","sta10:-1",null,"30","0",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta17","0","sta11:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("17");
            obj.set_text("☎(자택)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta18","sta17:-1","sta12:-1","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta19","sta18:-1","sta13:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("19");
            obj.set_text("☎(직장)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta20","sta19:-1","sta14:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta21","sta20:-1","sta15:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("21");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta22","sta21:-1","sta16:-1",null,"30","0",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta23","0","sta17:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("23");
            obj.set_text("등본상주소");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta24","sta23:-1","sta18:-1",null,"30","0",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta25","0","sta23:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("25");
            obj.set_text("현주소");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta26","sta25:-1","sta24:-1",null,"30","0",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta27","0","sta25:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("27");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta28","sta27:-1","sta26:-1","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta29","sta28:-1","sta26:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("29");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta30","sta29:-1","sta26:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta31","sta30:-1","sta26:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("31");
            obj.set_text("업종");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta32","sta31:-1","sta26:-1",null,"30","0",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta33","0","sta27:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("33");
            obj.set_text("상호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta34","sta33:-1","sta28:-1","246","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta35","sta34:-1","sta29:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("35");
            obj.set_text("세금계산서발급구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta36","sta35:-1","sta30:-1","150","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta37","sta36:-1","sta31:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("37");
            obj.set_text("e-Mail");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta38","sta37:-1","sta32:-1",null,"30","0",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta39","0","sta33:-1","100","50",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("39");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta40","sta39:-1","sta34:-1",null,"50","0",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta45","0","320","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("42");
            obj.set_text("약정분양금");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta46","sta45:-1","320","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta47","sta46:-1","320","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("43");
            obj.set_text("수납분양금");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta41","sta47:-1","320","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta48","sta41:-1","320","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("41");
            obj.set_text("예수금");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta42","sta48:-1","320","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta44","sta42:-1","320","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("76");
            obj.set_text("미정산 연체료");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta49","sta44:-1","320",null,"30","0",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtNO_SIZE","sta01:5","37","100","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("45");
            obj.set_value("");
            obj.set_format("#,###.0000");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta53","txtNO_SIZE:5","37","30","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("49");
            obj.set_text("평");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtTY_TYPE","sta53:5","37","40","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("50");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta43","txtTY_TYPE:5","37","20","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("51");
            obj.set_text("형");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtTY_DISTRICT","sta03:5","37","30","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("52");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("cfRT_OPTION","txtTY_DISTRICT:5","37","260","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.getSetter("CodeFindName").set("DRX_CFCHANGEOPTION_CODEFIND");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("73");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtYN_OPTION","sta05:5","sta02:4","100","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("53");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtTY_BUNYANG","474","sta02:4","120","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("54");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("rdoTY_CONTRACTOR","sta09:5","sta04:4","187","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("55");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_CONTRACTOR");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDT_CONTRACT","sta11:5","sta06:4","100","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("56");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_CONTRACTOR","sta13:5","sta08:4","120","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("57");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtNO_JUMIN","sta15:5","sta10:4","145","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("58");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtNO_TEL","sta17:5","sta12:4","120","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("59");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtNO_MOBILE","sta21:5","sta16:4","145","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("60");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtNO_OFFICETEL","sta19:5","sta14:4","120","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("61");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("cfNO_RECPOST","sta23:5","sta18:4","400","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("62");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_RECADDR2","cfNO_RECPOST:5","sta18:4","437","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("63");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("cfNO_POST","sta25:5","sta24:4","400","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("64");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_ADDR2","cfNO_POST:5","sta24:4","437","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("65");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtCD_VENDOR","sta27:5","sta26:4","200","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("66");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_UPTAE","sta29:5","sta26:4","120","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("67");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_UPJONG","sta31:5","sta26:4","200","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("68");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_VENDOR","sta33:5","sta28:4","120","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("69");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("rdoTY_EBILL","sta35:5","sta30:4","133","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("70");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_EBILL");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_EMAIL","sta37:5","sta38:-25","200","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("71");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new TextArea("txtDS_REMARK","sta39:5","sta40:-45","842","40",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("72");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_BUNYANGPLAN","sta45:5","sta46:-25","110","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("47");
            obj.set_value("");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_BUNYANGGET","sta47:5","sta41:-25","110","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("46");
            obj.set_value("");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_KASU","sta48:5","sta42:-25","110","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("48");
            obj.set_value("");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_DELMISU","sta44:5","sta49:-25","110","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("78");
            obj.set_value("");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta50","0","sta45:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("79");
            obj.set_text("약정토지가");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta51","sta50:-1","sta46:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta52","sta51:-1","sta47:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("81");
            obj.set_text("약정건물가");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta54","sta52:-1","sta41:-1","120","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta55","sta54:-1","sta48:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("83");
            obj.set_text("약정부가세");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta56","sta55:-1","sta42:-1",null,"30","0",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_LAND","sta50:5","sta51:-25","110","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("85");
            obj.set_value("");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_BUILDING","sta52:5","sta54:-25","110","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("86");
            obj.set_value("");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_VAT","sta55:5","sta56:-25","110","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("87");
            obj.set_value("");
            obj.set_format("#,##0");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Tab("tabData","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.divDataBottom.form.tabData);
            obj.set_text("약정/수납내역");
            this.divData.form.divDataBottom.form.tabData.addChild(obj.name, obj);

            obj = new Button("btnSpecialReceipt_2",null,"5","70","20","10",null,null,null,null,null,this.divData.form.divDataBottom.form.tabData.tab1.form);
            obj.set_taborder("3");
            obj.set_text("특별수납");
            this.divData.form.divDataBottom.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Button("btnReceiptCancel",null,"5","70","20","btnSpecialReceipt_2:5",null,null,null,null,null,this.divData.form.divDataBottom.form.tabData.tab1.form);
            obj.set_taborder("2");
            obj.set_text("수납취소");
            this.divData.form.divDataBottom.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Button("btnReceipt",null,"5","70","20","btnReceiptCancel:5",null,null,null,null,null,this.divData.form.divDataBottom.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("수납");
            this.divData.form.divDataBottom.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Grid("objGrid1","5","30",null,null,"5","5",null,null,null,null,this.divData.form.divDataBottom.form.tabData.tab1.form);
            obj.set_taborder("4");
            obj._setContents("");
            this.divData.form.divDataBottom.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.divDataBottom.form.tabData);
            obj.set_text("예수금");
            this.divData.form.divDataBottom.form.tabData.addChild(obj.name, obj);

            obj = new Static("objGrid2_1_1","5","0","100","22",null,null,null,null,null,null,this.divData.form.divDataBottom.form.tabData.tab2.form);
            obj.set_taborder("0");
            obj.set_text("계상내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Grid("objGrid2_1","5","25","400",null,null,"-15",null,null,null,null,this.divData.form.divDataBottom.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("objGrid2_1_2","objGrid2_1:5","0","100","22",null,null,null,null,null,null,this.divData.form.divDataBottom.form.tabData.tab2.form);
            obj.set_taborder("0");
            obj.set_text("반제내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Grid("objGrid2_2","objGrid2_1:5","25",null,null,"5","-15",null,null,null,null,this.divData.form.divDataBottom.form.tabData.tab2.form);
            obj.set_taborder("2");
            obj._setContents("");
            this.divData.form.divDataBottom.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Tabpage("tab3",this.divData.form.divDataBottom.form.tabData);
            obj.set_text("소송내역");
            this.divData.form.divDataBottom.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid3","5","5",null,null,"5","5",null,null,null,null,this.divData.form.divDataBottom.form.tabData.tab3.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.form.tabData.tab3.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctxtCD_ACNTUNIT","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctxtDS_ACNTUNIT","value","dsSearch","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctxtNO_DONG","value","dsSearch","NO_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctxtNO_FLOOR","value","dsSearch","NO_FLOOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ctxtNO_HO","value","dsSearch","NO_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataTop.form.txtNO_SIZE","value","dsList","NO_SIZE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataTop.form.txtTY_TYPE","value","dsList","TY_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataTop.form.txtTY_DISTRICT","value","dsList","TY_DISTRICT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divDataTop.form.cfRT_OPTION.form.CDTextBox","value","dsList","RT_OPTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.divDataTop.form.cfRT_OPTION.form.DSTextBox","value","dsList","DS_OPTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataTop.form.txtYN_OPTION","value","dsList","YN_OPTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataTop.form.txtTY_BUNYANG","value","dsList","TY_BUNYANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataTop.form.rdoTY_CONTRACTOR","value","dsList","TY_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataTop.form.txtDT_CONTRACT","value","dsList","DT_CONTRACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divDataTop.form.txtDS_CONTRACTOR","value","dsList","DS_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divDataTop.form.txtNO_JUMIN","value","dsList","NO_JUMIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divDataTop.form.txtNO_TEL","value","dsList","NO_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divDataTop.form.txtNO_OFFICETEL","value","dsList","NO_OFFICETEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divDataTop.form.txtNO_MOBILE","value","dsList","NO_MOBILE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divDataTop.form.cfNO_RECPOST.form.CDTextBox","value","dsList","NO_RECPOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divDataTop.form.cfNO_RECPOST.form.DSTextBox","value","dsList","DS_RECADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divDataTop.form.txtDS_RECADDR2","value","dsList","DS_RECADDR3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divDataTop.form.cfNO_POST.form.CDTextBox","value","dsList","NO_POST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divDataTop.form.cfNO_POST.form.DSTextBox","value","dsList","DS_ADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divDataTop.form.txtDS_ADDR2","value","dsList","DS_ADDR3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.divDataTop.form.txtCD_VENDOR","value","dsList","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.divDataTop.form.txtDS_UPTAE","value","dsList","DS_UPTAE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.divDataTop.form.txtDS_UPJONG","value","dsList","DS_UPJONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.divDataTop.form.txtDS_VENDOR","value","dsList","DS_VENDOR1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.divDataTop.form.rdoTY_EBILL","value","dsList","YN_EBILL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.divDataTop.form.txtDS_EMAIL","value","dsList","DS_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.divDataTop.form.txtDS_REMARK","value","dsList","DS_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.divDataTop.form.txtAM_BUNYANGPLAN","value","dsList","AM_BUNYANGPLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.divDataTop.form.txtAM_BUNYANGGET","value","dsList","AM_BUNYANGGET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.divDataTop.form.txtAM_KASU","value","dsList","AM_KASU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.divDataTop.form.txtAM_DELMISU","value","dsList","AM_DELMISU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.divDataTop.form.txtAM_LAND","value","dsList","AM_LAND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.divDataTop.form.txtAM_BUILDING","value","dsList","AM_BUILDING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.divDataTop.form.txtAM_VAT","value","dsList","AM_VAT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DRC_RECEIPTDETAIL.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.amSelling = 0;
        this.amBunyang = 0;

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

        	if (!this.gfnIsNull(this.getOwnerFrame().CD_ACNTUNIT)) {
        		this.dsSearch.setColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        		this.dsSearch.setColumn(0, "DS_ACNTUNIT", this.getOwnerFrame().DS_ACNTUNIT);
        		this.dsSearch.setColumn(0, "NO_DONG", this.getOwnerFrame().NO_DONG);
        		this.dsSearch.setColumn(0, "NO_FLOOR", this.getOwnerFrame().NO_FLOOR);
        		this.dsSearch.setColumn(0, "NO_HO", this.getOwnerFrame().NO_HO);
        		this.dsSearch.setColumn(0, "NO_UNIONMEMBER", this.getOwnerFrame().NO_UNIONMEMBER);
        	}

        	this.fnSelectRemark();
        // 	if (!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT")))
        // 		this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnExcReceiptInfo = this.gfnFormButtonAdd("ExcReceiptInfo", "fnExcReceiptInfo");
        	this.btnDlgDetailInfo = this.gfnFormButtonAdd("DlgDetailInfo", "fnDlgDetailInfo");
        	this.btnConfirm = this.gfnFormButtonAdd("Confirm", "fnConfirm");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.tabData = this.divData.form.divDataBottom.form.tabData;

        	this.dxGrid1 = this.tabData.tab1.form.objGrid1;
        	this.dxGrid2_1 = this.tabData.tab2.form.objGrid2_1;
        	this.dxGrid2_2 = this.tabData.tab2.form.objGrid2_2;
        	this.dxGrid3 = this.tabData.tab3.form.objGrid3;

        	this.ctxtCD_ACNTUNIT = this.divSearch.form.ctxtCD_ACNTUNIT;
        	this.ctxtDS_ACNTUNIT = this.divSearch.form.ctxtDS_ACNTUNIT;
        	this.ctxtNO_DONG = this.divSearch.form.ctxtNO_DONG;
        	this.ctxtNO_FLOOR = this.divSearch.form.ctxtNO_FLOOR;
        	this.ctxtNO_HO = this.divSearch.form.ctxtNO_HO;
        	this.cbtnNO_DONGHO = this.divSearch.form.cbtnNO_DONGHO;

        	this.txtDS_CONTRACTOR = this.divData.form.divDataTop.form.txtDS_CONTRACTOR;
        	this.rdoTY_CONTRACTOR = this.divData.form.divDataTop.form.rdoTY_CONTRACTOR;
        	this.txtNO_TEL = this.divData.form.divDataTop.form.txtNO_TEL;
        	this.txtNO_OFFICETEL = this.divData.form.divDataTop.form.txtNO_OFFICETEL;
        	this.txtNO_MOBILE = this.divData.form.divDataTop.form.txtNO_MOBILE;
        	this.cfNO_POST = this.divData.form.divDataTop.form.cfNO_POST;
        	this.txtDS_ADDR2 = this.divData.form.divDataTop.form.txtDS_ADDR2;
        	this.cfNO_RECPOST = this.divData.form.divDataTop.form.cfNO_RECPOST;
        	this.txtDS_RECADDR2 = this.divData.form.divDataTop.form.txtDS_RECADDR2;
        	this.txtDS_EMAIL = this.divData.form.divDataTop.form.txtDS_EMAIL;
        	this.txtCD_VENDOR = this.divData.form.divDataTop.form.txtCD_VENDOR;
        	this.txtDS_VENDOR = this.divData.form.divDataTop.form.txtDS_VENDOR;
        	this.txtDS_UPJONG = this.divData.form.divDataTop.form.txtDS_UPJONG;
        	this.txtDS_UPTAE = this.divData.form.divDataTop.form.txtDS_UPTAE;
        	this.txtDS_REMARK = this.divData.form.divDataTop.form.txtDS_REMARK;
        	this.rdoTY_EBILL = this.divData.form.divDataTop.form.rdoTY_EBILL;
        	this.cfRT_OPTION = this.divData.form.divDataTop.form.cfRT_OPTION;

        	this.sta27 = this.divData.form.divDataTop.form.sta27;
        	this.sta33 = this.divData.form.divDataTop.form.sta33;

        	this.btnReceipt = this.tabData.tab1.form.btnReceipt;
        	this.btnReceiptCancel = this.tabData.tab1.form.btnReceiptCancel;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DR", "DRC_RECEIPTDETAIL_RECEIVED");
        	this.gfnGridInit(this.dxGrid2_1, this.dsList2_1, "DR", "DRC_RECEIPTDETAIL_APPROPRIATE");
        	this.gfnGridInit(this.dxGrid2_2, this.dsList2_2, "DR", "DRC_RECEIPTDETAIL_PAYBACK");
        	this.gfnGridInit(this.dxGrid3, this.dsList3, "DR", "DRC_RECEIPTDETAIL_LOWSUIT");

        	this.dxGrid2_1.addEventHandler("onselectchanged", this.fnGrid2_RowCellChanged, this);

        	this.cfRT_OPTION.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelectRemark = new Dataset();
        	this.dsSelectRemark.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelectRemark.addColumn("TY_GUBUN", "string");
        	this.dsSelectRemark.addColumn("NO_CHASU", "string");
        	this.dsSelectRemark.addColumn("NO_DONG", "string");
        	this.dsSelectRemark.addColumn("NO_FLOOR", "string");
        	this.dsSelectRemark.addColumn("NO_HO", "string");
        	this.dsSelectRemark.addColumn("NO_UNIONMEMBER", "string");

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("NO_CHASU", "string");
        	this.dsSelect.addColumn("NO_DONG", "string");
        	this.dsSelect.addColumn("NO_FLOOR", "string");
        	this.dsSelect.addColumn("NO_HO", "string");
        	this.dsSelect.addColumn("NO_UNIONMEMBER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_ACNTUNIT", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("NO_CHASU", "string");
        	this.dsUpdate.addColumn("NO_DONG", "string");
        	this.dsUpdate.addColumn("NO_FLOOR", "string");
        	this.dsUpdate.addColumn("NO_HO", "string");
        	this.dsUpdate.addColumn("NO_UNIONMEMBER", "string");
        	this.dsUpdate.addColumn("TY_DISTRICT", "string");
        	this.dsUpdate.addColumn("RT_OPTION", "string");
        	this.dsUpdate.addColumn("DT_CONTRACT", "string");
        	this.dsUpdate.addColumn("TY_CONTRACTOR", "string");
        	this.dsUpdate.addColumn("DS_CONTRACTOR", "string");
        	this.dsUpdate.addColumn("NO_JUMIN", "string");
        	this.dsUpdate.addColumn("NO_TEL", "string");
        	this.dsUpdate.addColumn("NO_OFFICETEL", "string");
        	this.dsUpdate.addColumn("NO_MOBILE", "string");
        	this.dsUpdate.addColumn("NO_POST", "string");
        	this.dsUpdate.addColumn("DS_ADDR2", "string");
        	this.dsUpdate.addColumn("DS_ADDR3", "string");
        	this.dsUpdate.addColumn("NO_RECPOST", "string");
        	this.dsUpdate.addColumn("DS_RECADDR2", "string");
        	this.dsUpdate.addColumn("DS_RECADDR3", "string");
        	this.dsUpdate.addColumn("DS_EMAIL", "string");
        	this.dsUpdate.addColumn("CD_VENDOR", "string");
        	this.dsUpdate.addColumn("DS_VENDOR", "string");
        	this.dsUpdate.addColumn("DS_UPTAE", "string");
        	this.dsUpdate.addColumn("DS_UPJONG", "string");
        	this.dsUpdate.addColumn("DS_REMARK", "string");
        	this.dsUpdate.addColumn("YN_EBILL", "string");
        	this.dsUpdate.addColumn("YN_JOINT", "string");
        	this.dsUpdate.addColumn("AM_MLEASE", "bigdecimal");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");
        	this.dsUpdate.addColumn("YN_SMS", "string");
        	this.dsUpdate.addColumn("YN_SUNSU", "string");
        	this.dsUpdate.addColumn("AM_SUNSU", "bigdecimal");
        	this.dsUpdate.addColumn("YN_RETURN", "string");
        	this.dsUpdate.addColumn("DT_RETURN", "string");
        	this.dsUpdate.addColumn("AM_REFUND", "bigdecimal");
        	this.dsUpdate.addColumn("DT_REFUND", "string");
        	this.dsUpdate.addColumn("NO_CONTRACT", "string");


        	this.dsSelect2_2 = new Dataset();
        	this.dsSelect2_2.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect2_2.addColumn("TY_GUBUN", "string");
        	this.dsSelect2_2.addColumn("NO_CHASU", "string");
        	this.dsSelect2_2.addColumn("NO_DONG", "string");
        	this.dsSelect2_2.addColumn("NO_FLOOR", "string");
        	this.dsSelect2_2.addColumn("NO_HO", "string");
        	this.dsSelect2_2.addColumn("NO_UNIONMEMBER", "string");
        	this.dsSelect2_2.addColumn("NO_APPRO", "string");


        	this.dsInsert3 = new Dataset();
        	this.dsInsert3.addColumn("CD_ACNTUNIT", "string");
        	this.dsInsert3.addColumn("TY_GUBUN", "string");
        	this.dsInsert3.addColumn("NO_CHASU", "string");
        	this.dsInsert3.addColumn("NO_DONG", "string");
        	this.dsInsert3.addColumn("NO_FLOOR", "string");
        	this.dsInsert3.addColumn("NO_HO", "string");
        	this.dsInsert3.addColumn("NO_UNIONMEMBER", "string");
        	this.dsInsert3.addColumn("NO_SEQ", "string");
        	this.dsInsert3.addColumn("NO_CASE", "string");
        	this.dsInsert3.addColumn("DS_CASE", "string");
        	this.dsInsert3.addColumn("TY_CHECK", "string");
        	this.dsInsert3.addColumn("DT_DECISION", "string");
        	this.dsInsert3.addColumn("DT_CLOSE", "string");
        	this.dsInsert3.addColumn("DS_CREDITOR", "string");
        	this.dsInsert3.addColumn("AM_DEMAND", "bigdecimal");
        	this.dsInsert3.addColumn("DS_JUDGE", "string");
        	this.dsInsert3.addColumn("DS_COURT", "string");
        	this.dsInsert3.addColumn("ID_INSERT", "string");

        	this.dsUpdate3 = new Dataset();
        	this.dsUpdate3.addColumn("CD_ACNTUNIT", "string");
        	this.dsUpdate3.addColumn("TY_GUBUN", "string");
        	this.dsUpdate3.addColumn("NO_CHASU", "string");
        	this.dsUpdate3.addColumn("NO_DONG", "string");
        	this.dsUpdate3.addColumn("NO_FLOOR", "string");
        	this.dsUpdate3.addColumn("NO_HO", "string");
        	this.dsUpdate3.addColumn("NO_UNIONMEMBER", "string");
        	this.dsUpdate3.addColumn("NO_SEQ", "string");
        	this.dsUpdate3.addColumn("NO_CASE", "string");
        	this.dsUpdate3.addColumn("DS_CASE", "string");
        	this.dsUpdate3.addColumn("TY_CHECK", "string");
        	this.dsUpdate3.addColumn("DT_DECISION", "string");
        	this.dsUpdate3.addColumn("DT_CLOSE", "string");
        	this.dsUpdate3.addColumn("DS_CREDITOR", "string");
        	this.dsUpdate3.addColumn("AM_DEMAND", "bigdecimal");
        	this.dsUpdate3.addColumn("DS_JUDGE", "string");
        	this.dsUpdate3.addColumn("DS_COURT", "string");
        	this.dsUpdate3.addColumn("ID_UPDATE", "string");

        	this.dsDelete3 = new Dataset();
        	this.dsDelete3.addColumn("CD_ACNTUNIT", "string");
        	this.dsDelete3.addColumn("TY_GUBUN", "string");
        	this.dsDelete3.addColumn("NO_CHASU", "string");
        	this.dsDelete3.addColumn("NO_DONG", "string");
        	this.dsDelete3.addColumn("NO_FLOOR", "string");
        	this.dsDelete3.addColumn("NO_HO", "string");
        	this.dsDelete3.addColumn("NO_UNIONMEMBER", "string");
        	this.dsDelete3.addColumn("NO_SEQ", "string");


        	this.dsReceiptCancel = new Dataset();
        	this.dsReceiptCancel.addColumn("CD_ACNTUNIT", "string");
        	this.dsReceiptCancel.addColumn("TY_GUBUN", "string");
        	this.dsReceiptCancel.addColumn("NO_CHASU", "string");
        	this.dsReceiptCancel.addColumn("NO_DONG", "string");
        	this.dsReceiptCancel.addColumn("NO_FLOOR", "string");
        	this.dsReceiptCancel.addColumn("NO_HO", "string");
        	this.dsReceiptCancel.addColumn("NO_UNIONMEMBER", "string");
        	this.dsReceiptCancel.addColumn("TY_NAPIP", "string");
        	this.dsReceiptCancel.addColumn("NO_NAPIP", "string");
        	this.dsReceiptCancel.addColumn("NO_BUNNAP", "string");
        	this.dsReceiptCancel.addColumn("DT_RECEIPT", "string");
        	this.dsReceiptCancel.addColumn("DS_REMARK", "string");
        	this.dsReceiptCancel.addColumn("ID_INSERT", "string");
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelect.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsSelect.setColumn(0, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
         	var inData      = "selectRemark=dsSelectRemark select=dsSelect select1=dsSelect select2_1=dsSelect select3=dsSelect";
         	var outData     = "dsRemarkInfo=selectRemark0 dsList=select0 dsList1=select10 dsList2_1=select2_10 dsList3=select30";
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

        this.fnSelectPayback = function() {
        	this.dsSelect2_2.clearData();
        	this.dsSelect2_2.addRow();
        	this.dsSelect2_2.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect2_2.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect2_2.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect2_2.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect2_2.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelect2_2.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsSelect2_2.setColumn(0, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        	this.dsSelect2_2.setColumn(0, "NO_APPRO", this.dsList2_1.getColumn(this.dsList2_1.rowposition, "NO_APPRO"));

        	var strSvcId    = "selectPayback";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
         	var inData      = "select2_2=dsSelect2_2";
         	var outData     = "dsList2_2=select2_20";
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

        this.fnSelectRemark = function() {
        	this.dsSelectRemark.clearData();
        	this.dsSelectRemark.addRow();
        	this.dsSelectRemark.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelectRemark.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelectRemark.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelectRemark.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelectRemark.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelectRemark.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsSelectRemark.setColumn(0, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));

        	var strSvcId    = "selectRemark";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectRemark=dsSelectRemark";
        	var outData     = "dsRemarkInfo=selectRemark0";
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

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	if (this.tabData.tabindex == 2)
        		this.gfnGridAdd(this.dxGrid3);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	if (this.tabData.tabindex == 2) {
        		this.gfnGridDel(this.dxGrid3);
        		if (this.dsList3.rowcount == 0) {
        			this.FormBtns.Add.set_enable(false);
        			this.FormBtns.Del.set_enable(false);
        		}
        	}
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.fnSaveValidate()) return;

        	// Detail
        	this.dsUpdate.clearData();
        	var nrow = this.dsUpdate.addRow();
        	this.dsUpdate.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsUpdate.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsUpdate.setColumn(nrow, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsUpdate.setColumn(nrow, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsUpdate.setColumn(nrow, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsUpdate.setColumn(nrow, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        	this.dsUpdate.setColumn(nrow, "TY_DISTRICT", this.dsList.getColumn(0, "TY_DISTRICT"));
        	this.dsUpdate.setColumn(nrow, "RT_OPTION", this.dsList.getColumn(0, "RT_OPTION"));
        	this.dsUpdate.setColumn(nrow, "DT_CONTRACT", nexacro.replaceAll(this.dsList.getColumn(0, "DT_CONTRACT"), "-", ""));
        	this.dsUpdate.setColumn(nrow, "TY_CONTRACTOR", this.dsList.getColumn(0, "TY_CONTRACTOR"));
        	this.dsUpdate.setColumn(nrow, "DS_CONTRACTOR", this.dsList.getColumn(0, "DS_CONTRACTOR"));
        	this.dsUpdate.setColumn(nrow, "NO_JUMIN", nexacro.replaceAll(this.dsList.getColumn(0, "NO_JUMIN"), "-", ""));
        	this.dsUpdate.setColumn(nrow, "NO_TEL", this.dsList.getColumn(0, "NO_TEL"));
        	this.dsUpdate.setColumn(nrow, "NO_OFFICETEL", this.dsList.getColumn(0, "NO_OFFICETEL"));
        	this.dsUpdate.setColumn(nrow, "NO_MOBILE", this.dsList.getColumn(0, "NO_MOBILE"));
        	this.dsUpdate.setColumn(nrow, "NO_POST", this.dsList.getColumn(0, "NO_POST"));
        	this.dsUpdate.setColumn(nrow, "DS_ADDR2", this.dsList.getColumn(0, "DS_ADDR2"));
        	this.dsUpdate.setColumn(nrow, "DS_ADDR3", this.dsList.getColumn(0, "DS_ADDR3"));
        	this.dsUpdate.setColumn(nrow, "NO_RECPOST", this.dsList.getColumn(0, "NO_RECPOST"));
        	this.dsUpdate.setColumn(nrow, "DS_RECADDR2", this.dsList.getColumn(0, "DS_RECADDR2"));
        	this.dsUpdate.setColumn(nrow, "DS_RECADDR3", this.dsList.getColumn(0, "DS_RECADDR3"));
        	this.dsUpdate.setColumn(nrow, "DS_EMAIL", this.dsList.getColumn(0, "DS_EMAIL"));
        	this.dsUpdate.setColumn(nrow, "CD_VENDOR", nexacro.replaceAll(this.dsList.getColumn(0, "CD_VENDOR"), "-", ""));
        	this.dsUpdate.setColumn(nrow, "DS_VENDOR", this.dsList.getColumn(0, "DS_VENDOR"));
        	this.dsUpdate.setColumn(nrow, "DS_UPTAE", this.dsList.getColumn(0, "DS_UPTAE"));
        	this.dsUpdate.setColumn(nrow, "DS_UPJONG", this.dsList.getColumn(0, "DS_UPJONG"));
        	this.dsUpdate.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(0, "DS_REMARK"));
        	this.dsUpdate.setColumn(nrow, "YN_EBILL", this.dsList.getColumn(0, "YN_EBILL"));
        	this.dsUpdate.setColumn(nrow, "YN_JOINT", "");
        	this.dsUpdate.setColumn(nrow, "AM_MLEASE", 0);
        	this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        	this.dsUpdate.setColumn(nrow, "YN_SMS", this.dsList.getColumn(0, "YN_SMS"));
        	this.dsUpdate.setColumn(nrow, "YN_SUNSU", "X");
        	this.dsUpdate.setColumn(nrow, "AM_SUNSU", 0);
        	this.dsUpdate.setColumn(nrow, "YN_RETURN", "X");
        	this.dsUpdate.setColumn(nrow, "DT_RETURN", "X");
        	this.dsUpdate.setColumn(nrow, "AM_REFUND", 0);
        	this.dsUpdate.setColumn(nrow, "DT_REFUND", "");
        	this.dsUpdate.setColumn(nrow, "NO_CONTRACT", this.dsList.getColumn(0, "NO_CONTRACT"));

        	// 소송내역 Grid
        	this.dxGrid3.updateToDataset();
        	this.dsInsert3.clearData();
        	this.dsUpdate3.clearData();
        	this.dsDelete3.clearData();

        	for (var i = 0; i < this.dsList3.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList3, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert3.addRow();
        				this.dsInsert3.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        				this.dsInsert3.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        				this.dsInsert3.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        				this.dsInsert3.setColumn(nrow, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        				this.dsInsert3.setColumn(nrow, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        				this.dsInsert3.setColumn(nrow, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        				this.dsInsert3.setColumn(nrow, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        				this.dsInsert3.setColumn(nrow, "NO_SEQ", this.dsList3.getColumn(i, "NO_SEQ"));
        				this.dsInsert3.setColumn(nrow, "NO_CASE", this.dsList3.getColumn(i, "NO_CASE"));
        				this.dsInsert3.setColumn(nrow, "DS_CASE", this.dsList3.getColumn(i, "DS_CASE"));
        				this.dsInsert3.setColumn(nrow, "TY_CHECK", this.dsList3.getColumn(i, "TY_CHECK"));
        				this.dsInsert3.setColumn(nrow, "DT_DECISION", nexacro.replaceAll(this.gfnNvl(this.dsList3.getColumn(i, "DT_DECISION")), "-", ""));
        				this.dsInsert3.setColumn(nrow, "DT_CLOSE", nexacro.replaceAll(this.gfnNvl(this.dsList3.getColumn(i, "DT_CLOSE")), "-", ""));
        				this.dsInsert3.setColumn(nrow, "DS_CREDITOR", this.dsList3.getColumn(i, "DS_CREDITOR"));
        				this.dsInsert3.setColumn(nrow, "AM_DEMAND", this.dsList3.getColumn(i, "AM_DEMAND"));
        				this.dsInsert3.setColumn(nrow, "DS_JUDGE", this.dsList3.getColumn(i, "DS_JUDGE"));
        				this.dsInsert3.setColumn(nrow, "DS_COURT", this.dsList3.getColumn(i, "DS_COURT"));
        				this.dsInsert3.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				break;

        			case "U":
        				var nrow = this.dsUpdate3.addRow();
        				this.dsUpdate3.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        				this.dsUpdate3.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        				this.dsUpdate3.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        				this.dsUpdate3.setColumn(nrow, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        				this.dsUpdate3.setColumn(nrow, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        				this.dsUpdate3.setColumn(nrow, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        				this.dsUpdate3.setColumn(nrow, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        				this.dsUpdate3.setColumn(nrow, "NO_SEQ", this.dsList3.getColumn(i, "NO_SEQ"));
        				this.dsUpdate3.setColumn(nrow, "NO_CASE", this.dsList3.getColumn(i, "NO_CASE"));
        				this.dsUpdate3.setColumn(nrow, "DS_CASE", this.dsList3.getColumn(i, "DS_CASE"));
        				this.dsUpdate3.setColumn(nrow, "TY_CHECK", this.dsList3.getColumn(i, "TY_CHECK"));
        				this.dsUpdate3.setColumn(nrow, "DT_DECISION", nexacro.replaceAll(this.gfnNvl(this.dsList3.getColumn(i, "DT_DECISION"), "-", "")));
        				this.dsUpdate3.setColumn(nrow, "DT_CLOSE", nexacro.replaceAll(this.gfnNvl(this.dsList3.getColumn(i, "DT_CLOSE"), "-", "")));
        				this.dsUpdate3.setColumn(nrow, "DS_CREDITOR", this.dsList3.getColumn(i, "DS_CREDITOR"));
        				this.dsUpdate3.setColumn(nrow, "AM_DEMAND", this.dsList3.getColumn(i, "AM_DEMAND"));
        				this.dsUpdate3.setColumn(nrow, "DS_JUDGE", this.dsList3.getColumn(i, "DS_JUDGE"));
        				this.dsUpdate3.setColumn(nrow, "DS_COURT", this.dsList3.getColumn(i, "DS_COURT"));
        				this.dsUpdate3.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDelete3.addRow();
        				this.dsDelete3.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        				this.dsDelete3.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        				this.dsDelete3.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        				this.dsDelete3.setColumn(nrow, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        				this.dsDelete3.setColumn(nrow, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        				this.dsDelete3.setColumn(nrow, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        				this.dsDelete3.setColumn(nrow, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        				this.dsDelete3.setColumn(nrow, "NO_SEQ", this.dsList3.getColumn(i, "NO_SEQ"));
        				break;
        		}
        	}
        	var strInData = "update=dsUpdate";
        	if (!(this.dsInsert3.rowcount == 0 && this.dsUpdate3.rowcount == 0 && this.dsDelete3.rowcount == 0)) {
        		strInData += " insert3=dsInsert3 update3=dsUpdate3 delete3=dsDelete3";
        	}

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = strInData;
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

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	//this.gfnExcelExport(this.dxGrid);
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
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) {
        		this.gfnAlert("사업지코드가 입력되지 않았습니다.");
        		return false;
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_DONG"))) {
        		this.gfnAlert("동을 입력하지 않았습니다.");
        		return false;
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_FLOOR"))) {
        		this.gfnAlert("층을 입력하지 않았습니다.");
        		return false;
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_HO"))) {
        		this.gfnAlert("호를 입력하지 않았습니다.");
        		return false;
        	}
        	return true;
        };

        /*
         *	저장 Validate
         */
        this.fnSaveValidate = function() {
        	var strMsg = "";

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) {
        		strMsg += "사업지코드는 반드시 입력 하셔야 합니다.\n";
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_DONG"))) {
        		strMsg += "동은 반드시 입력 하셔야 합니다.\n";
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_FLOOR"))) {
        		strMsg += "층은 반드시 입력 하셔야 합니다.\n";
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_HO"))) {
        		strMsg += "호는 반드시 입력 하셔야 합니다.\n";
        	}

        	for (var i = 0; i < this.dsList3.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList3, i);
        		switch(flag) {
        			case "I":
        			case "U":
        				if (this.gfnIsNull(this.dsList3.getColumn(i, "NO_CASE"))) {
        					strMsg += "사건번호는 반드시 입력 하셔야 합니다.\n";
        				}
        				if (this.gfnIsNull(this.dsList3.getColumn(i, "DS_CASE"))) {
        					strMsg += "사건명은 반드시 입력 하셔야 합니다.\n";
        				}
        				if (this.gfnIsNull(this.dsList3.getColumn(i, "TY_CHECK"))) {
        					strMsg += "결정여부는 반드시 입력 하셔야 합니다.\n";
        				}
        				else {
        					if (this.dsList3.getColumn(i, "TY_CHECK") == "설정") {
        						if (this.gfnIsNull(this.dsList3.getColumn(i, "DT_DECISION"))) {
        							strMsg += "결정일자는 반드시 입력 하셔야 합니다.\n";
        						}
        					}
        				}
        				break;
        		}
        	}

        	if (strMsg.length > 0) {
        		this.gfnAlert(strMsg);
        		return false;
        	}

        	return true;
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "select") {
        		this.fnInit();

        		if (this.dsList.rowcount > 0) {
        			this.btnConfirm.set_enable(this.dsList.getColumn(0, "YN_OPTION") == "있음");
        		}
        		else {
        			this.btnConfirm.set_enable(false);
        			this.gfnAlert("자료가 존재하지 않습니다.");
        		}

        		this.fnTabDataIndexChanged();
        	}
        	else if (svcID == "selectRemark") {
        		if (!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT")))
        			this.FormBtns.Select.click();

        		if (this.dsRemarkInfo.rowcount > 0) {
        			if (!this.gfnIsNull(this.dsRemarkInfo.getColumn(0, "MSG"))) {
        				this.gfnAlert(this.dsRemarkInfo.getColumn(0, "MSG"));
        			}
        		}
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == "receiptcancel") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "cfRT_OPTION") {
        		dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
        		dsUserParam.setColumn(nrow, "NO_SIZE", this.dsList.getColumn(0, "NO_SIZE"));
        		dsUserParam.setColumn(nrow, "TY_TYPE", this.dsList.getColumn(0, "TY_TYPE"));
        		dsUserParam.setColumn(nrow, "TY_DISTRICT", this.dsList.getColumn(0, "TY_DISTRICT"));
        	}
        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid2_RowCellChanged = function(obj,e) {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {

        		this.fnSelectPayback();

        		obj.oldrow = -1;
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_top(e.clientx);
        		this.divData.form.resetScroll();
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };

        this.dsSearch_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid1);
        		this.gfnGridClear(this.dxGrid2_1);
        		this.gfnGridClear(this.dxGrid2_2);
        		this.gfnGridClear(this.dxGrid3);
        		this.dsList.clearData();

        		if (e.columnid == "NO_DONG") {
        			this.dsSearch.setColumn(0, "NO_FLOOR", "");
        			this.dsSearch.setColumn(0, "NO_HO", "");
        		}
        		else if (e.columnid == "NO_FLOOR") {
        			this.dsSearch.setColumn(0, "NO_HO", "");
        		}

        	}
        }


        this.divData_tabData_onchanged = function(obj,e)
        {
        	if (e.preindex == e.postindex) return;

        	this.fnTabDataIndexChanged();
        };

        this.fnTabDataIndexChanged = function() {
        	switch (this.tabData.tabindex) {
        		case 2:
        			this.FormBtns.Add.set_enable(true);
        			this.FormBtns.Del.set_enable(true);
        			break;
        		default:
        			this.FormBtns.Add.set_enable(false);
        			this.FormBtns.Del.set_enable(false);
        			break;
        	}
        }

        this.fnInit = function() {
        	if (this.gfnIsNull(this.dsList.getColumn(0, "DT_CONTRACT"))) {
        		this.rdoTY_CONTRACTOR.set_readonly(true);

        		this.txtNO_TEL.set_readonly(true);
        		this.txtNO_OFFICETEL.set_readonly(true);
        		this.txtNO_MOBILE.set_readonly(true);

        		this.cfNO_POST.set_enable(false);
        		this.txtDS_ADDR2.set_readonly(true);
        		this.cfNO_RECPOST.set_enable(false);
        		this.txtDS_RECADDR2.set_readonly(true);
        		this.txtDS_EMAIL.set_readonly(true);
        		this.txtDS_VENDOR.set_readonly(true);
        		this.txtDS_UPJONG.set_readonly(true);
        		this.txtDS_UPTAE.set_readonly(true);
        		this.txtDS_REMARK.set_readonly(true);

        		this.rdoTY_EBILL.set_readonly(true);
        		this.dsList.setColumn(0, "TY_EBILL", "N");
        		this.cfRT_OPTION.set_enable(false);
        	}
        	else {
        		this.rdoTY_CONTRACTOR.set_readonly(false);

        		this.txtNO_TEL.set_readonly(false);
        		this.txtNO_OFFICETEL.set_readonly(false);
        		this.txtNO_MOBILE.set_readonly(false);

        		this.cfNO_POST.set_enable(true);
        		this.txtDS_ADDR2.set_readonly(false);
        		this.cfNO_RECPOST.set_enable(true);
        		this.txtDS_RECADDR2.set_readonly(false);
        		this.txtDS_EMAIL.set_readonly(false);
        		this.txtDS_REMARK.set_readonly(false);

        		this.rdoTY_EBILL.set_readonly(false);

        		var bTyContractor = this.dsList.getColumn(0, "TY_CONTRACTOR") == "P";
        		this.txtCD_VENDOR.set_readonly(bTyContractor);
        		this.txtDS_VENDOR.set_readonly(bTyContractor);
        		this.txtDS_UPJONG.set_readonly(bTyContractor);
        		this.txtDS_UPTAE.set_readonly(bTyContractor);

        		this.sta27.set_textDecoration(bTyContractor ? "" : "underline");
        		this.sta33.set_textDecoration(bTyContractor ? "" : "underline");

        		if (bTyContractor) {
        			this.dsList.setColumn(0, "CD_VENDOR", "");
        			this.dsList.setColumn(0, "DS_VENDOR", "");
        			this.dsList.setColumn(0, "DS_UPJONG", "");
        			this.dsList.setColumn(0, "DS_UPTAE", "");
        		}

        		//Button
        		var bReadonly = this.dsList.getColumn(0, "YN_READONLY") == "Y" ? true : false;
        		if (bReadonly) {
        			this.rdoTY_CONTRACTOR.set_readonly(true);

        			this.txtNO_TEL.set_readonly(true);
        			this.txtNO_OFFICETEL.set_readonly(true);
        			this.txtNO_MOBILE.set_readonly(true);

        			this.cfNO_POST.set_enable(false);
        			this.txtDS_ADDR2.set_readonly(true);
        			this.cfNO_RECPOST.set_enable(false);
        			this.txtDS_RECADDR2.set_readonly(true);
        			this.txtDS_EMAIL.set_readonly(true);
        			this.txtDS_VENDOR.set_readonly(true);
        			this.txtDS_UPJONG.set_readonly(true);
        			this.txtDS_UPTAE.set_readonly(true);
        			this.txtDS_REMARK.set_readonly(true);

        			this.rdoTY_EBILL.set_readonly(true);
        			this.cfRT_OPTION.set_enable(false);

        			this.dsList.setColumn(0, "TY_EBILL", "N");
        		}
        	}
        }


        this.divSearch_cbtnNO_DONGHO_onclick = function(obj,e) {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) {
        		this.gfnAlert("사업지코드가 입력되지 않았습니다.");
        		return;
        	}

        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.FLAG = "1";

        	this.gfnFormOpen("DRI", "DRI_DONGHOCONTRACT", "fnVatPopupCallback", param);
        };

        this.fnVatPopupCallback = function(svcID, val) {
        	if (!val) return;

        	var json = JSON.parse(val);
        	if (json.DONG.length > 0) {
        		this.dsSearch.setColumn(0, "NO_DONG", json.DONG);
        		this.dsSearch.setColumn(0, "NO_FLOOR", json.FLOOR);
        		this.dsSearch.setColumn(0, "NO_HO", json.HO);
        	}
        }

        this.divSearch_ctxtNO_DONG_onkillfocus = function(obj,e) {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_DONG"))) return;
        	if (nexacro.isNumeric(this.dsSearch.getColumn(0, "NO_DONG"))) {
        		this.dsSearch.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG").padLeft(4, "0"));
        	}
        };

        this.divSearch_ctxtNO_FLOOR_onkillfocus = function(obj,e) {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_FLOOR"))) return;
        	if (nexacro.isNumeric(this.dsSearch.getColumn(0, "NO_FLOOR"))) {
        		this.dsSearch.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR").padLeft(2, "0"));
        	}
        };

        this.divSearch_ctxtNO_HO_onkillfocus = function(obj,e) {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_HO"))) return;
        	if (nexacro.isNumeric(this.dsSearch.getColumn(0, "NO_HO"))) {
        		this.dsSearch.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO").padLeft(3, "0"));
        	}
        };

        this.divSearch_ctxt_onkeyup = function(obj,e) {
        	if (obj.value.length == obj.maxlength) {
        		switch (obj.id) {
        			case "ctxtNO_DONG":
        				this.ctxtNO_FLOOR.setFocus();
        				break;
        			case "ctxtNO_FLOOR":
        				this.ctxtNO_HO.setFocus();
        				break;
        			case "ctxtNO_HO":
        				this.cbtnNO_DONGHO.setFocus();
        				break;
        		}
        	}
        };

        this.dsList_oncolumnchanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this, "U");

        		if (e.columnid == "TY_CONTRACTOR") {
        			if (e.newvalue == "P") {
        				this.txtCD_VENDOR.set_readonly(true);
        				this.txtDS_VENDOR.set_readonly(true);
        				this.txtDS_UPJONG.set_readonly(true);
        				this.txtDS_UPTAE.set_readonly(true);

        				this.sta33.set_textDecoration("");
        			}
        			else {
        				this.txtCD_VENDOR.set_readonly(false);
        				this.txtDS_VENDOR.set_readonly(false);
        				this.txtDS_UPJONG.set_readonly(false);
        				this.txtDS_UPTAE.set_readonly(false);

        				this.sta33.set_textDecoration("underline");
        			}
        		}
        	}
        };

        this.divData_divDataTop_txtCD_VENDOR_onkillfocus = function(obj,e) {
        	if (this.gfnTrim(this.dsList.getColumn(0, "CD_VENDOR")) == "") return;

        	var strVendor = nexacro.replaceAll(this.dsList.getColumn(0, "CD_VENDOR"), "-", "");
        	if (this.gfnIsBzIdNo(strVendor)) {
        		strVendor = strVendor.substr(0, 3) + "-" + strVendor.substr(3, 2) + "-" + strVendor.substr(5, 5);
        		this.dsList.setColumn(0, "CD_VENDOR", strVendor);
        	}
        	else {
        		this.gfnConfirm("잘못된 정보입니다. 그래도 입력하시겠습니까?", "txtCD_VENDOR_onkillfocus_callback");
        	}
        };

        this.txtCD_VENDOR_onkillfocus_callback = function(strID, val) {
        	if (val) return;
        	this.dsList.setColumn(0, "CD_VENDOR", "");
        }


        /************************************************************************
         * 확장 버튼 실행
         ************************************************************************/
        //예상수납안내
        this.fnExcReceiptInfo = function(obj,e) {
        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DONG = this.dsSearch.getColumn(0, "NO_DONG");
        	param.FLOOR = this.dsSearch.getColumn(0, "NO_FLOOR");
        	param.HO = this.dsSearch.getColumn(0, "NO_HO");
        	param.NO_UNIONMEMBER = this.dsSearch.getColumn(0, "NO_UNIONMEMBER");

        	this.gfnFormOpen("DRD", "DRD_DLGESTRECEIPT", "", param);
        };

        //일자별납입금조회
        this.fnDlgDetailInfo = function(obj,e) {
        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6);
        	param.TY_GUBUN = this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1);
        	param.NO_CHASU = this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2);
        	param.NO_DONG = this.dsSearch.getColumn(0, "NO_DONG");
        	param.NO_FLOOR = this.dsSearch.getColumn(0, "NO_FLOOR");
        	param.NO_HO = this.dsSearch.getColumn(0, "NO_HO");

        	this.gfnFormOpen("DRC", "DRC_DLGDETAILINFO", "", param);
        };

        //별도계약수납
        this.fnConfirm = function(obj,e) {
        	if (this.dsList.getColumn(0, "RT_OPTION") == "있음") {
        		this.gfnAlert("별도계약이 없습니다.");
        		return;
        	}

        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        	param.NO_DONG = this.dsSearch.getColumn(0, "NO_DONG");
        	param.NO_FLOOR = this.dsSearch.getColumn(0, "NO_FLOOR");
        	param.NO_HO = this.dsSearch.getColumn(0, "NO_HO");
        	param.NO_UNIONMEMBER = this.dsSearch.getColumn(0, "NO_UNIONMEMBER");

        	this.gfnFormOpen("DRF", "DRF_RECEIPTDETAIL", "", param);
        };

        this.fnPopupCallback = function(svcID, val) {
        	if (svcID.indexOf("DRC_DLGRECEIPT") > -1 || svcID.indexOf("DRC_DLGSPECIALRECEIPT") > -1) {
        		this.FormBtns.Select.click();
        	}
        }

        //수납
        this.divData_divDataBottom_tabData_tab1_btnReceipt_onclick = function(obj,e) {
        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.NO_DONG = this.dsSearch.getColumn(0, "NO_DONG");
        	param.NO_FLOOR = this.dsSearch.getColumn(0, "NO_FLOOR");
        	param.NO_HO = this.dsSearch.getColumn(0, "NO_HO");
        	param.NO_UNIONMEMBER = this.dsSearch.getColumn(0, "NO_UNIONMEMBER");
        	param.YN_VACNT = this.dsList.getColumn(0, "YN_VACNT");
        	param.CD_GUJA = this.dsList.getColumn(0, "CD_GUJA");
        	param.NO_GUJA = this.dsList.getColumn(0, "NO_GUJA");
        	if (this.dsList.getColumn(0, "TY_NAPIP1") == "잔금") {
        		param.IsSalediscount = true;
        	}
        	else {
        		param.IsSalediscount = false;
        	}

        	this.gfnFormOpen("DRC", "DRC_DLGRECEIPT", "fnPopupCallback", param);
        };

        //수납취소
        this.divData_divDataBottom_tabData_tab1_btnReceiptCancel_onclick = function(obj,e) {
        	if (this.tabData.tabindex != 0) return;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) return;

        	if ((this.dsSearch.getColumn(0, "NO_DONG") != ""
        		&& this.dsSearch.getColumn(0, "NO_FLOOR") != ""
        		&& this.dsSearch.getColumn(0, "NO_HO") != "")
        		|| this.dsSearch.getColumn(0, "NO_UNIONMEMBER") != "") {
        		this.gfnConfirm("최종 수납내역이 취소됩니다.", "btnReceiptCancel_callback");
        	}
        };

        this.btnReceiptCancel_callback = function(strID, val) {
        	if (!val) return;

        	var i = 0;
        	for (i = this.dsList1.rowcount; i >= 0; i--) {
        		if (this.gfnNvl(this.dsList1.getColumn(i, "DT_RECEIPT")) != "") {
        			break;
        		}
        	}

        	if (i < 0) {
        		this.gfnAlert("수납내역이 없습니다.");
        		return;
        	}
        	else {
        		var strTyNapip = "";
        		switch (this.dsList1.getColumn(i, "TY_NAPIP1")) {
        			case "(1)계약금": strTyNapip = "C"; break;
        			case "(2)중도금": strTyNapip = "J"; break;
        			case "(3)잔금": strTyNapip = "R"; break;
        			default: strTyNapip = ""; break;
        		}

        		this.dsReceiptCancel.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        		this.dsReceiptCancel.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        		this.dsReceiptCancel.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        		this.dsReceiptCancel.setColumn(nrow, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        		this.dsReceiptCancel.setColumn(nrow, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        		this.dsReceiptCancel.setColumn(nrow, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        		this.dsReceiptCancel.setColumn(nrow, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        		this.dsReceiptCancel.setColumn(nrow, "TY_NAPIP", strTyNapip);
        		this.dsReceiptCancel.setColumn(nrow, "NO_NAPIP", nexacro.replaceAll(this.dsList1.getColumn(i, "NO_NAPCHA"), "-", ""));
        		this.dsReceiptCancel.setColumn(nrow, "NO_BUNNAP", this.dsList1.getColumn(i, "NO_BUNNAP"));
        		this.dsReceiptCancel.setColumn(nrow, "DT_RECEIPT", nexacro.replaceAll(this.dsList1.getColumn(i, "DT_RECEIPT"), "-", ""));
        		this.dsReceiptCancel.setColumn(nrow, "DS_REMARK", "");
        		this.dsReceiptCancel.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        		var strSvcId    = "receiptcancel";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "receiptcancel=dsReceiptCancel";
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

        };

        //특별수납
        this.divData_divDataBottom_tabData_tab1_btnSpecialReceipt_2_onclick = function(obj,e) {
        	//if (!this.gfnGridIsRow(this.dxGrid1)) return;

        	var sDate = "";
        	var eDate = "";
        	for (var i=this.dsList1.rowcount; i>=0; i--) {
        		if (this.dsList1.getColumn(i, "NO_BUNNAP") != "99") {
        			sDate = this.dsList1.getColumn(i, "DT_STARTAGREE");
        			eDate = this.dsList1.getColumn(i, "DT_ENDAGREE");
        		}
        		if (this.gfnNvl(this.dsList1.getColumn(i, "DT_RECEIPT")) != "") {
        			break;
        		}
        	}

        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.S_DATE = sDate;
        	param.E_DATE = eDate;
        	param.NO_DONG = this.dsSearch.getColumn(0, "NO_DONG");
        	param.NO_FLOOR = this.dsSearch.getColumn(0, "NO_FLOOR");
        	param.NO_HO = this.dsSearch.getColumn(0, "NO_HO");
        	param.NO_UNIONMEMBER = this.dsSearch.getColumn(0, "NO_UNIONMEMBER");
        	param.CD_GUJA = this.dsList.getColumn(0, "CD_GUJA");
        	param.NO_GUJA = this.dsList.getColumn(0, "NO_GUJA");
        	param.AM_DELMISU = this.dsList.getColumn(0, "AM_DELMISU");

        	this.gfnFormOpen("DRC", "DRC_DLGSPECIALRECEIPT", "fnPopupCallback", param);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ctxtNO_DONG.addEventHandler("onkillfocus",this.divSearch_ctxtNO_DONG_onkillfocus,this);
            this.divSearch.form.ctxtNO_DONG.addEventHandler("onkeyup",this.divSearch_ctxt_onkeyup,this);
            this.divSearch.form.ctxtNO_FLOOR.addEventHandler("onkillfocus",this.divSearch_ctxtNO_FLOOR_onkillfocus,this);
            this.divSearch.form.ctxtNO_FLOOR.addEventHandler("onkeyup",this.divSearch_ctxt_onkeyup,this);
            this.divSearch.form.ctxtNO_HO.addEventHandler("onkillfocus",this.divSearch_ctxtNO_HO_onkillfocus,this);
            this.divSearch.form.ctxtNO_HO.addEventHandler("onkeyup",this.divSearch_ctxt_onkeyup,this);
            this.divSearch.form.cbtnNO_DONGHO.addEventHandler("onclick",this.divSearch_cbtnNO_DONGHO_onclick,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataTop.form.txtCD_VENDOR.addEventHandler("onkillfocus",this.divData_divDataTop_txtCD_VENDOR_onkillfocus,this);
            this.divData.form.divDataBottom.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.divData.form.divDataBottom.form.tabData.tab1.form.btnSpecialReceipt_2.addEventHandler("onclick",this.divData_divDataBottom_tabData_tab1_btnSpecialReceipt_2_onclick,this);
            this.divData.form.divDataBottom.form.tabData.tab1.form.btnReceiptCancel.addEventHandler("onclick",this.divData_divDataBottom_tabData_tab1_btnReceiptCancel_onclick,this);
            this.divData.form.divDataBottom.form.tabData.tab1.form.btnReceipt.addEventHandler("onclick",this.divData_divDataBottom_tabData_tab1_btnReceipt_onclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DRC_RECEIPTDETAIL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
