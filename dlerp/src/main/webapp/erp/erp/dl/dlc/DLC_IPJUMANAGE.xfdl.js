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
                this._setFormPosition(1340,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsLeft", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_STATE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BUNYANG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SIZE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NO_PSIZE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DISTRICT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONTRACT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_RECPOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RECADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RECADDR3\" type=\"STRING\" size=\"256\"/><Column id=\"NO_POST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR3\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_OFFICETEL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_MOBILE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UPTAE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UPJONG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"AM_BUNYANGPLAN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_BUNYANGGET\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_KASU\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"AM_MLEASE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_MANAGEMENT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_LEASEKASU\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DT_LEASE_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_LEASE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_RENEW\" type=\"INT\" size=\"256\"/><Column id=\"YN_EBILL\" type=\"STRING\" size=\"256\"/><Column id=\"DT_IPJUPLAN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_IPJU\" type=\"STRING\" size=\"256\"/><Column id=\"YN_READONLY\" type=\"STRING\" size=\"256\"/><Column id=\"YN_VACNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"NO_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BANK\" type=\"STRING\" size=\"256\"/><Column id=\"AM_LEASE_DELAY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_MINAP_LEASE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YN_AUTOLEASE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TRANSFER\" type=\"STRING\" size=\"256\"/><Column id=\"YN_JOINT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_APPQUIT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONTRACT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_CONTRACT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">selectleft</Col><Col id=\"SP\">DLCPR_RESIDENTSTATUS_SELECT</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DLCPR_CONTRACT_DETAIL_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DLBPR_CONTRACTOR_UPDATE</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DLCPR_RECEIVED_SELECT</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DLBPR_LAWSUIT_SELECT</Col></Row><Row><Col id=\"TARGET\">select3</Col><Col id=\"SP\">DRCPR_SETUP_SELECT</Col></Row><Row><Col id=\"TARGET\">select4</Col><Col id=\"SP\">DLCPR_APPROPRIATELEASE_SELECT</Col></Row><Row><Col id=\"TARGET\">select5</Col><Col id=\"SP\">DLCPR_QUITHISTORY_SELECT</Col></Row><Row><Col id=\"TARGET\">select6</Col><Col id=\"SP\">DLCPR_RECONTRACT_SELECT</Col></Row><Row><Col id=\"TARGET\">selectBasic</Col><Col id=\"SP\">DLAPR_BASICINFO_SELECT</Col></Row><Row><Col id=\"TARGET\">insert2</Col><Col id=\"SP\">DLBPR_LAWSUIT_INSERT</Col></Row><Row><Col id=\"TARGET\">update2</Col><Col id=\"SP\">DLBPR_LAWSUIT_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete2</Col><Col id=\"SP\">DLBPR_LAWSUIT_DELETE</Col></Row><Row><Col id=\"TARGET\">insert3</Col><Col id=\"SP\">DRCPR_SETUP_INSERT</Col></Row><Row><Col id=\"TARGET\">update3</Col><Col id=\"SP\">DRCPR_SETUP_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete3</Col><Col id=\"SP\">DRCPR_SETUP_DELETE</Col></Row><Row><Col id=\"TARGET\">selectmsg</Col><Col id=\"SP\">DLCPR_REMARK_INFO_SELECT</Col></Row><Row><Col id=\"TARGET\">receiptcancel</Col><Col id=\"SP\">DLCPR_LEASE_SUNAP_CANCEL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BUNYANG\" type=\"STRING\" size=\"256\"/><Column id=\"TY_IPJU\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_BUNYANG", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">일반</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">조합</Col></Row><Row><Col id=\"DS_CODE\">임대</Col><Col id=\"CD_CODE\">3</Col></Row><Row><Col id=\"CD_CODE\">4</Col><Col id=\"DS_CODE\">분양전환</Col></Row><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\">전체보기</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_IPJU", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">입주세대</Col><Col id=\"DS_CODE\">입주세대</Col></Row><Row><Col id=\"CD_CODE\">퇴거신청세대</Col><Col id=\"DS_CODE\">퇴거신청세대</Col></Row><Row><Col id=\"DS_CODE\">미계약세대</Col><Col id=\"CD_CODE\">미계약세대</Col></Row><Row><Col id=\"CD_CODE\">임대계약세대</Col><Col id=\"DS_CODE\">임대계약세대</Col></Row><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\">전체보기</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_CONTRACTOR", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">P</Col><Col id=\"DS_CODE\">개인</Col></Row><Row><Col id=\"CD_CODE\">C</Col><Col id=\"DS_CODE\">법인</Col></Row><Row><Col id=\"CD_CODE\">A</Col><Col id=\"DS_CODE\">개인사업자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_AUTOLEASE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">자동이체</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">수동이체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList4", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList5", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList6", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMsg", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBasic", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("사업지코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNTUNIT","sta00:0.0","10.0","350","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DLX_CFLEASESITE_CODEFIND");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ccfCD_ACNTUNIT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("분양구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_BUNYANG","sta01:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsTY_BUNYANG");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","ccboTY_BUNYANG:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("분양상태");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_IPJU","sta02:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsTY_IPJU");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta03","ccboTY_IPJU:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("동층호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_DONG","sta03:0.0","10.0","40","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_maxlength("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_FLOOR","ctxtNO_DONG:0.0","10.0","30","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_maxlength("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_HO","ctxtNO_FLOOR:0.0","10.0","40","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_maxlength("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("cbtnNO_DONGHO","ctxtNO_HO:0.0","10.0","25","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_CF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","20%","0","5","100%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divSplitter2","0","57%","100%","5",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter2:5",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta00","0","0","100.00%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta01","0","32","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("면적");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta02","sta01:-1","32","225","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta03","sta02:-1","32","125","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("3");
            obj.set_text("군/OPTION");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta04","sta03:-1","32","270","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta05","sta04:-1","32","125","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("5");
            obj.set_text("입주일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta06","sta05:-1","32",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta07","0","sta01:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("7");
            obj.set_text("별도계약");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta08","sta07:-1","sta02:-1","225","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta09","sta08:-1","sta03:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("9");
            obj.set_text("입주상태");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta10","sta09:-1","sta04:-1","270","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta11","sta10:-1","sta05:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("11");
            obj.set_text("입주기산일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta12","sta11:-1","sta06:-1",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta13","0","sta07:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("13");
            obj.set_text("계약일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta14","sta13:-1","sta08:-1","225","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta15","sta14:-1","sta09:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("15");
            obj.set_text("계약기간");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta16","sta15:-1","sta10:-1","270","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta17","sta16:-1","sta11:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("17");
            obj.set_text("재계약");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta18","sta17:-1","sta12:-1",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta19","0","sta13:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("19");
            obj.set_text("계약자명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta20","sta19:-1","sta14:-1","225","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta21","sta20:-1","sta15:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("21");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta22","sta21:-1","sta16:-1","270","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta23","sta22:-1","sta17:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("23");
            obj.set_text("계약구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta24","sta23:-1","sta18:-1",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta25","0","sta19:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("25");
            obj.set_text("☎(자택)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta26","sta25:-1","sta20:-1","225","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta27","sta26:-1","sta21:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("27");
            obj.set_text("☎(직장)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta28","sta27:-1","sta22:-1","270","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta29","sta28:-1","sta23:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("29");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta30","sta29:-1","sta24:-1",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta31","0","sta25:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("31");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta32","sta31:-1","sta26:-1","225","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta33","sta32:-1","sta27:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("33");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta34","sta33:-1","sta28:-1","270","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta35","sta34:-1","sta29:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("35");
            obj.set_text("업종");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta36","sta35:-1","sta30:-1",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta37","0","sta31:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("37");
            obj.set_text("상호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta38","sta37:-1","sta32:-1","225","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta39","sta38:-1","sta33:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("39");
            obj.set_text("자동이체");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta40","sta39:-1","sta34:-1","270","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta41","sta40:-1","sta35:-1","125","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("41");
            obj.set_text("e_Mail");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta42","sta41:-1","sta36:-1",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta43","0","sta37:-1","100","50",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("43");
            obj.set_text("명의변경사유");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta44","sta43:-1","sta38:-1",null,"50","0",null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta45","0","sta43:-1","100","50",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("45");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta46","sta45:-1","sta44:-1",null,"50","0",null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta47","0","343","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("47");
            obj.set_text("약정분양금");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta48","sta47:-1","343","140","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta49","sta48:-1","343","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("49");
            obj.set_text("수납분양금");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta50","sta49:-1","343","140","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta51","sta50:-1","343","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("51");
            obj.set_text("월임대료");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta52","sta51:-1","343","140","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta53","sta52:-1","343","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("53");
            obj.set_text("관리비");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta54","sta53:-1","343",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtNO_SIZE","sta01:5","sta02:-25","100","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("55");
            obj.set_value("");
            obj.set_format("#,###.0000");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta55","txtNO_SIZE:5","sta02:-25","30","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("56");
            obj.set_text("면적");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtTY_TYPE","sta55:10","sta02:-25","20","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("57");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta56","txtTY_TYPE:5","sta02:-25","20","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("58");
            obj.set_text("형");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtTY_DISTRICT","sta03:5","sta04:-25","30","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("59");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("cfRT_OPTION","txtTY_DISTRICT:5","sta04:-25","220","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.getSetter("CodeFindName").set("DRX_CFCHANGEOPTION_CODEFIND");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("60");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("tclDT_IPJUPLAN","sta05:5","sta06:-25","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("61");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtYN_OPTION","sta07:5","sta08:-25","110","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("62");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtTY_STATE","sta09:5","sta10:-25","80","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("63");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta57","txtTY_STATE:10","sta10:-25","50","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("64");
            obj.set_text("분양구분");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtTY_BUNYANG","sta57:5","sta10:-25","80","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("65");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("tclDT_IPJUPLAN_G","sta11:5","sta12:-25","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("66");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("tclDT_CONTRACT","sta13:5","sta14:-25","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("67");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("tclDT_LEASE_FR","sta15:5","sta16:-25","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("68");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta58","tclDT_LEASE_FR:10","sta16:-25","20","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("69");
            obj.set_text("~");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("tclDT_LEASE_TO","sta58:0","sta16:-25","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("70");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtNO_RENEW","sta17:5","sta18:-25","80","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("71");
            obj.set_value("");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta59","txtNO_RENEW:5","sta18:-25","20","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("72");
            obj.set_text("차");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_CONTRACTOR","sta19:5","sta20:-25","110","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("73");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtNO_JUMIN","sta21:5","sta22:-25","140","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("74");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("rdoTY_CONTRACTOR","sta23:5","sta24:-25","187","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("75");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_CONTRACTOR");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtNO_TEL","sta25:5","sta26:-25","110","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("76");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtNO_OFFICETEL","sta27:5","sta28:-25","140","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("77");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtNO_MOBILE","sta29:5","sta30:-25","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("78");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtCD_VENDOR","sta31:5","sta32:-25","140","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("79");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_UPTAE","sta33:5","sta34:-25","140","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("80");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_UPJONG","sta35:5","sta36:-25","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("81");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_VENDOR","sta37:5","sta38:-25","210","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("82");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("rdoYN_AUTOLEASE","sta39:5","sta40:-25","133","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("83");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_AUTOLEASE");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtDS_EMAIL","sta41:5","sta42:-25","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("84");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new TextArea("txtDS_TRANSFER","sta43:5","sta44:-45","917","40",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("85");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new TextArea("txtDS_REMARK","sta45:5","sta46:-45","917","40",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("86");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_BUNYANGPLAN","sta47:5","sta48:-25","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("87");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_BUNYANGGET","sta49:5","sta50:-25","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("88");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_MLEASE","sta51:5","sta52:-25","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("89");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_MANAGEMENT","sta53:5","sta54:-25","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("90");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter2:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Tab("tabData","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            this.divData.form.divDataRight.form.divDataBottom.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.divDataRight.form.divDataBottom.form.tabData);
            obj.set_text("임대료부과/수납");
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.addChild(obj.name, obj);

            obj = new Button("btnReceiptUpdate",null,"-25","70","20","10",null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("수납정정");
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Button("btnReceiptCancel",null,"5","70","20","5",null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("수납취소");
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Button("btnReceipt",null,"5","70","20","btnReceiptCancel:5",null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("수납");
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.addChild(obj.name, obj);

            obj = new CheckBox("chk_SUNAP",null,"5","50","20","btnReceipt:10",null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.form);
            obj.set_taborder("4");
            obj.set_text("수납");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_value("Y");
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.addChild(obj.name, obj);

            obj = new CheckBox("chk_GOJI",null,"5","50","20","chk_SUNAP:5",null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.form);
            obj.set_taborder("4");
            obj.set_text("고지");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.addChild(obj.name, obj);

            obj = new CheckBox("chk_MISU",null,"5","50","20","chk_GOJI:5",null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.form);
            obj.set_taborder("4");
            obj.set_text("미수");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Grid("objGrid1","5","30",null,null,"5","5",null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.divDataRight.form.divDataBottom.form.tabData);
            obj.set_text("제한사항");
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid2","5","5",null,null,"5","5",null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Tabpage("tab3",this.divData.form.divDataRight.form.divDataBottom.form.tabData);
            obj.set_text("설정사항");
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid3","5","5",null,null,"5","5",null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab3.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Tabpage("tab4",this.divData.form.divDataRight.form.divDataBottom.form.tabData);
            obj.set_text("예수금");
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.addChild(obj.name, obj);

            obj = new Static("sta00","5","5",null,"22","5",null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab4.form);
            obj.set_taborder("1");
            obj.set_text("계상내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Grid("objGrid4","5","sta00:5",null,null,"5","5",null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab4.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Tabpage("tab5",this.divData.form.divDataRight.form.divDataBottom.form.tabData);
            obj.set_text("퇴거History");
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid5","5","5",null,null,"5","5",null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab5.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Tabpage("tab6",this.divData.form.divDataRight.form.divDataBottom.form.tabData);
            obj.set_text("재계약History");
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid6","5","5",null,null,"5","5",null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab6.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab6.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_ACNTUNIT.form.CDTextBox","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_ACNTUNIT.form.DSTextBox","value","dsSearch","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccboTY_BUNYANG","value","dsSearch","TY_BUNYANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccboTY_IPJU","value","dsSearch","TY_IPJU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctxtNO_DONG","value","dsSearch","NO_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctxtNO_FLOOR","value","dsSearch","NO_FLOOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ctxtNO_HO","value","dsSearch","NO_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataRight.form.divDataTop.form.txtNO_SIZE","value","dsList","NO_SIZE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataRight.form.divDataTop.form.txtTY_TYPE","value","dsList","TY_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataRight.form.divDataTop.form.txtTY_DISTRICT","value","dsList","TY_DISTRICT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataRight.form.divDataTop.form.cfRT_OPTION.form.CDTextBox","value","dsList","RT_OPTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataRight.form.divDataTop.form.cfRT_OPTION.form.DSTextBox","value","dsList","DS_OPTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataRight.form.divDataTop.form.tclDT_IPJUPLAN","value","dsList","DT_IPJUPLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divDataRight.form.divDataTop.form.txtYN_OPTION","value","dsList","YN_OPTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divDataRight.form.divDataTop.form.txtTY_STATE","value","dsList","TY_STATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divDataRight.form.divDataTop.form.txtTY_BUNYANG","value","dsList","TY_BUNYANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divDataRight.form.divDataTop.form.tclDT_IPJUPLAN_G","value","dsList","DT_IPJU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divDataRight.form.divDataTop.form.tclDT_CONTRACT","value","dsList","DT_CONTRACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divDataRight.form.divDataTop.form.tclDT_LEASE_FR","value","dsList","DT_LEASE_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divDataRight.form.divDataTop.form.tclDT_LEASE_TO","value","dsList","DT_LEASE_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divDataRight.form.divDataTop.form.txtNO_RENEW","value","dsList","NO_RENEW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divDataRight.form.divDataTop.form.txtDS_CONTRACTOR","value","dsList","DS_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divDataRight.form.divDataTop.form.txtNO_JUMIN","value","dsList","NO_JUMIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divDataRight.form.divDataTop.form.rdoTY_CONTRACTOR","value","dsList","TY_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.divDataRight.form.divDataTop.form.txtNO_TEL","value","dsList","NO_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.divDataRight.form.divDataTop.form.txtNO_OFFICETEL","value","dsList","NO_OFFICETEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.divDataRight.form.divDataTop.form.txtNO_MOBILE","value","dsList","NO_MOBILE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.divDataRight.form.divDataTop.form.txtCD_VENDOR","value","dsList","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.divDataRight.form.divDataTop.form.txtDS_UPTAE","value","dsList","DS_UPTAE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.divDataRight.form.divDataTop.form.txtDS_UPJONG","value","dsList","DS_UPJONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.divDataRight.form.divDataTop.form.txtDS_VENDOR","value","dsList","DS_VENDOR1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.divDataRight.form.divDataTop.form.rdoYN_AUTOLEASE","value","dsList","YN_AUTOLEASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.divDataRight.form.divDataTop.form.txtDS_EMAIL","value","dsList","DS_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.divDataRight.form.divDataTop.form.txtDS_TRANSFER","value","dsList","DS_TRANSFER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.divDataRight.form.divDataTop.form.txtDS_REMARK","value","dsList","DS_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.divDataRight.form.divDataTop.form.txtAM_BUNYANGPLAN","value","dsList","AM_BUNYANGPLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.divDataRight.form.divDataTop.form.txtAM_BUNYANGGET","value","dsList","AM_BUNYANGGET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.divDataRight.form.divDataTop.form.txtAM_MLEASE","value","dsList","AM_MLEASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.divDataRight.form.divDataTop.form.txtAM_MANAGEMENT","value","dsList","AM_MANAGEMENT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DLC_IPJUMANAGE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.YN_READONLY = false;

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


        	this.dsSearch.setColumn(0, "TY_BUNYANG", "");
        	this.dsSearch.setColumn(0, "TY_IPJU", "");

        	this.chk_MISU_onchanged();
        	this.chk_GOJI_onchanged();
        	this.chk_SUNAP_onchanged();
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
        	this.btnQuitApply = this.gfnFormButtonAdd("QuitApply", "fnQuitApply");		//퇴거신청
        	this.btnQuit = this.gfnFormButtonAdd("Quit", "fnQuit");						//퇴거
        	this.btnPerImpose = this.gfnFormButtonAdd("PerImpose", "fnPerImpose");		//임대료개별부과
        	this.btnRenew = this.gfnFormButtonAdd("Renew", "fnRenew");					//재계약
        	this.btnPerCancel = this.gfnFormButtonAdd("PerCancel", "fnPerCancel");		//임대료개별취소
        	this.btnDetailInfo = this.gfnFormButtonAdd("DetailInfo", "fnDetailInfo");	//일자별납입금조회
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.tabData = this.divData.form.divDataRight.form.divDataBottom.form.tabData;

        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGrid1 = this.tabData.tab1.form.objGrid1;
        	this.dxGrid2 = this.tabData.tab2.form.objGrid2;
        	this.dxGrid3 = this.tabData.tab3.form.objGrid3;
        	this.dxGrid4 = this.tabData.tab4.form.objGrid4;
        	this.dxGrid5 = this.tabData.tab5.form.objGrid5;
        	this.dxGrid6 = this.tabData.tab6.form.objGrid6;

        	this.ccfCD_ACNTUNIT = this.divSearch.form.ccfCD_ACNTUNIT;
        	this.ccboTY_BUNYANG = this.divSearch.form.ccboTY_BUNYANG;
        	this.ccboTY_IPJU = this.divSearch.form.ccboTY_IPJU;
        	this.ctxtNO_DONG = this.divSearch.form.ctxtNO_DONG;
        	this.ctxtNO_FLOOR = this.divSearch.form.ctxtNO_FLOOR;
        	this.ctxtNO_HO = this.divSearch.form.ctxtNO_HO;
        	this.cbtnNO_DONGHO = this.divSearch.form.cbtnNO_DONGHO;

        	this.rdoTY_CONTRACTOR = this.divData.form.divDataRight.form.divDataTop.form.rdoTY_CONTRACTOR;
        	this.txtNO_TEL = this.divData.form.divDataRight.form.divDataTop.form.txtNO_TEL;
        	this.txtNO_OFFICETEL = this.divData.form.divDataRight.form.divDataTop.form.txtNO_OFFICETEL;
        	this.txtNO_MOBILE = this.divData.form.divDataRight.form.divDataTop.form.txtNO_MOBILE;
        	this.txtDS_EMAIL = this.divData.form.divDataRight.form.divDataTop.form.txtDS_EMAIL;
        	this.txtCD_VENDOR = this.divData.form.divDataRight.form.divDataTop.form.txtCD_VENDOR;
        	this.txtDS_VENDOR = this.divData.form.divDataRight.form.divDataTop.form.txtDS_VENDOR;
        	this.txtDS_UPJONG = this.divData.form.divDataRight.form.divDataTop.form.txtDS_UPJONG;
        	this.txtDS_UPTAE = this.divData.form.divDataRight.form.divDataTop.form.txtDS_UPTAE;
        	this.txtDS_REMARK = this.divData.form.divDataRight.form.divDataTop.form.txtDS_REMARK;
        	this.tclDT_IPJUPLAN = this.divData.form.divDataRight.form.divDataTop.form.tclDT_IPJUPLAN;
        	this.tclDT_IPJUPLAN_G = this.divData.form.divDataRight.form.divDataTop.form.tclDT_IPJUPLAN_G;
        	this.sta05 = this.divData.form.divDataRight.form.divDataTop.form.sta05;
        	this.sta37 = this.divData.form.divDataRight.form.divDataTop.form.sta37;

        	this.chk_SUNAP = this.tabData.tab1.form.chk_SUNAP;
        	this.chk_GOJI = this.tabData.tab1.form.chk_GOJI;
        	this.chk_MISU = this.tabData.tab1.form.chk_MISU;

        	this.btnReceipt = this.tabData.tab1.form.btnReceipt;
        	this.btnReceiptCancel = this.tabData.tab1.form.btnReceiptCancel;
        	this.btnSpecialReceipt_2 = this.tabData.tab1.form.btnSpecialReceipt_2;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsLeft, "DL", "DLC_IPJUMANAGE");
        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DL", "DLC_IPJUMANAGE_01");
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DL", "DLB_CONTRACTMANAGE_03");
        	this.gfnGridInit(this.dxGrid3, this.dsList3, "DL", "DLB_CONTRACTMANAGE_04");
        	this.gfnGridInit(this.dxGrid4, this.dsList4, "DL", "DLC_IPJUMANAGE_02");
        	this.gfnGridInit(this.dxGrid5, this.dsList5, "DL", "DLC_IPJUMANAGE_03");
        	this.gfnGridInit(this.dxGrid6, this.dsList6, "DL", "DLC_IPJUMANAGE_04");


        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);


        	this.ccfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACNTUNIT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.dsSearch.setColumn(0, "DS_RECEIPTSTAT", "");
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelectLeft = new Dataset();
        	this.dsSelectLeft.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelectLeft.addColumn("TY_GUBUN", "string");
        	this.dsSelectLeft.addColumn("NO_CHASU", "string");
        	this.dsSelectLeft.addColumn("TY_IPJU", "string");
        	this.dsSelectLeft.addColumn("NO_DONG", "string");
        	this.dsSelectLeft.addColumn("NO_FLOOR", "string");
        	this.dsSelectLeft.addColumn("NO_HO", "string");
        	this.dsSelectLeft.addColumn("TY_BUNYANG", "string");

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("NO_CHASU", "string");
        	this.dsSelect.addColumn("NO_DONG", "string");
        	this.dsSelect.addColumn("NO_FLOOR", "string");
        	this.dsSelect.addColumn("NO_HO", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_ACNTUNIT", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("NO_CHASU", "string");
        	this.dsUpdate.addColumn("NO_DONG", "string");
        	this.dsUpdate.addColumn("NO_FLOOR", "string");
        	this.dsUpdate.addColumn("NO_HO", "string");
        	this.dsUpdate.addColumn("TY_DISTRICT", "string");
        	this.dsUpdate.addColumn("RT_OPTION", "string");
        	this.dsUpdate.addColumn("TY_CONTRACTOR", "string");
        	this.dsUpdate.addColumn("DS_CONTRACTOR", "string");
        	this.dsUpdate.addColumn("NO_JUMIN", "string");
        	this.dsUpdate.addColumn("NO_TEL", "string");
        	this.dsUpdate.addColumn("NO_OFFICETEL", "string");
        	this.dsUpdate.addColumn("NO_MOBILE", "string");
        	this.dsUpdate.addColumn("DS_EMAIL", "string");
        	this.dsUpdate.addColumn("NO_POST", "string");
        	this.dsUpdate.addColumn("DS_ADDR2", "string");
        	this.dsUpdate.addColumn("DS_ADDR3", "string");
        	this.dsUpdate.addColumn("NO_RECPOST", "string");
        	this.dsUpdate.addColumn("DS_RECADDR2", "string");
        	this.dsUpdate.addColumn("DS_RECADDR3", "string");
        	this.dsUpdate.addColumn("CD_VENDOR", "string");
        	this.dsUpdate.addColumn("DS_VENDOR", "string");
        	this.dsUpdate.addColumn("DS_UPTAE", "string");
        	this.dsUpdate.addColumn("DS_UPJONG", "string");
        	this.dsUpdate.addColumn("DS_REMARK", "string");
        	this.dsUpdate.addColumn("YN_EBILL", "string");
        	this.dsUpdate.addColumn("DT_IPJUPLAN", "string");
        	this.dsUpdate.addColumn("DT_IPJU", "string");
        	this.dsUpdate.addColumn("DT_CONTRACT", "string");
        	this.dsUpdate.addColumn("DT_LEASE_FR", "string");
        	this.dsUpdate.addColumn("DT_LEASE_TO", "string");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");
        	this.dsUpdate.addColumn("YN_JOINT", "string");
        	this.dsUpdate.addColumn("YN_AUTOLEASE", "string");
        	this.dsUpdate.addColumn("DS_TRANSFER", "string");
        	this.dsUpdate.addColumn("YN_SUNSU", "string");
        	this.dsUpdate.addColumn("AM_SUNSU", "bigdecimal");
        	this.dsUpdate.addColumn("YN_RETURN", "string");
        	this.dsUpdate.addColumn("DT_RETURN", "string");
        	this.dsUpdate.addColumn("NO_CONTRACT", "string");

        	this.dsInsert2 = new Dataset();
        	this.dsInsert2.addColumn("CD_ACNTUNIT", "string");
        	this.dsInsert2.addColumn("TY_GUBUN", "string");
        	this.dsInsert2.addColumn("NO_CHASU", "string");
        	this.dsInsert2.addColumn("NO_DONG", "string");
        	this.dsInsert2.addColumn("NO_FLOOR", "string");
        	this.dsInsert2.addColumn("NO_HO", "string");
        	this.dsInsert2.addColumn("NO_SEQ", "string");
        	this.dsInsert2.addColumn("DT_DECISION", "string");
        	this.dsInsert2.addColumn("DS_COURT", "string");
        	this.dsInsert2.addColumn("NO_CASE", "string");
        	this.dsInsert2.addColumn("DS_CASE", "string");
        	this.dsInsert2.addColumn("YN_ENDCASE", "string");
        	this.dsInsert2.addColumn("DS_CREDITOR", "string");
        	this.dsInsert2.addColumn("AM_DEMAND", "bigdecimal");
        	this.dsInsert2.addColumn("DT_CLOSE", "string");
        	this.dsInsert2.addColumn("DS_JUDGE", "string");
        	this.dsInsert2.addColumn("DS_REMARK", "string");
        	this.dsInsert2.addColumn("ID_INSERT", "string");

        	this.dsUpdate2 = new Dataset();
        	this.dsUpdate2.addColumn("CD_ACNTUNIT", "string");
        	this.dsUpdate2.addColumn("TY_GUBUN", "string");
        	this.dsUpdate2.addColumn("NO_CHASU", "string");
        	this.dsUpdate2.addColumn("NO_DONG", "string");
        	this.dsUpdate2.addColumn("NO_FLOOR", "string");
        	this.dsUpdate2.addColumn("NO_HO", "string");
        	this.dsUpdate2.addColumn("NO_SEQ", "string");
        	this.dsUpdate2.addColumn("DT_DECISION", "string");
        	this.dsUpdate2.addColumn("DS_COURT", "string");
        	this.dsUpdate2.addColumn("NO_CASE", "string");
        	this.dsUpdate2.addColumn("DS_CASE", "string");
        	this.dsUpdate2.addColumn("YN_ENDCASE", "string");
        	this.dsUpdate2.addColumn("DS_CREDITOR", "string");
        	this.dsUpdate2.addColumn("AM_DEMAND", "bigdecimal");
        	this.dsUpdate2.addColumn("DT_CLOSE", "string");
        	this.dsUpdate2.addColumn("DS_JUDGE", "string");
        	this.dsUpdate2.addColumn("DS_REMARK", "string");
        	this.dsUpdate2.addColumn("ID_UPDATE", "string");

        	this.dsDelete2 = new Dataset();
        	this.dsDelete2.addColumn("CD_ACNTUNIT", "string");
        	this.dsDelete2.addColumn("TY_GUBUN", "string");
        	this.dsDelete2.addColumn("NO_CHASU", "string");
        	this.dsDelete2.addColumn("NO_DONG", "string");
        	this.dsDelete2.addColumn("NO_FLOOR", "string");
        	this.dsDelete2.addColumn("NO_HO", "string");
        	this.dsDelete2.addColumn("NO_SEQ", "string");


        	this.dsInsert3 = new Dataset();
        	this.dsInsert3.addColumn("CD_ACNTUNIT", "string");
        	this.dsInsert3.addColumn("TY_GUBUN", "string");
        	this.dsInsert3.addColumn("NO_CHASU", "string");
        	this.dsInsert3.addColumn("NO_UNIONMEMBER", "string");
        	this.dsInsert3.addColumn("NO_DONG", "string");
        	this.dsInsert3.addColumn("NO_FLOOR", "string");
        	this.dsInsert3.addColumn("NO_HO", "string");
        	this.dsInsert3.addColumn("DT_SETUP", "string");
        	this.dsInsert3.addColumn("DS_CASE", "string");
        	this.dsInsert3.addColumn("AM_SETUP", "bigdecimal");
        	this.dsInsert3.addColumn("DT_START", "string");
        	this.dsInsert3.addColumn("DT_END", "string");
        	this.dsInsert3.addColumn("YN_ENDCASE", "string");
        	this.dsInsert3.addColumn("DT_CLOSE", "string");
        	this.dsInsert3.addColumn("DS_JUDGE", "string");
        	this.dsInsert3.addColumn("DS_REMARK", "string");
        	this.dsInsert3.addColumn("ID_INSERT", "string");

        	this.dsUpdate3 = new Dataset();
        	this.dsUpdate3.addColumn("CD_ACNTUNIT", "string");
        	this.dsUpdate3.addColumn("TY_GUBUN", "string");
        	this.dsUpdate3.addColumn("NO_CHASU", "string");
        	this.dsUpdate3.addColumn("NO_UNIONMEMBER", "string");
        	this.dsUpdate3.addColumn("NO_DONG", "string");
        	this.dsUpdate3.addColumn("NO_FLOOR", "string");
        	this.dsUpdate3.addColumn("NO_HO", "string");
        	this.dsUpdate3.addColumn("NO_SEQ", "string");
        	this.dsUpdate3.addColumn("DT_SETUP", "string");
        	this.dsUpdate3.addColumn("DS_CASE", "string");
        	this.dsUpdate3.addColumn("AM_SETUP", "bigdecimal");
        	this.dsUpdate3.addColumn("DT_START", "string");
        	this.dsUpdate3.addColumn("DT_END", "string");
        	this.dsUpdate3.addColumn("YN_ENDCASE", "string");
        	this.dsUpdate3.addColumn("DT_CLOSE", "string");
        	this.dsUpdate3.addColumn("DS_JUDGE", "string");
        	this.dsUpdate3.addColumn("DS_REMARK", "string");
        	this.dsUpdate3.addColumn("ID_UPDATE", "string");

        	this.dsDelete3 = new Dataset();
        	this.dsDelete3.addColumn("CD_ACNTUNIT", "string");
        	this.dsDelete3.addColumn("TY_GUBUN", "string");
        	this.dsDelete3.addColumn("NO_CHASU", "string");
        	this.dsDelete3.addColumn("NO_DONG", "string");
        	this.dsDelete3.addColumn("NO_FLOOR", "string");
        	this.dsDelete3.addColumn("NO_HO", "string");
        	this.dsDelete3.addColumn("NO_SEQ", "string");

        	this.dsSelectBasic = new Dataset();
        	this.dsSelectBasic.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelectBasic.addColumn("TY_GUBUN", "string");
        	this.dsSelectBasic.addColumn("NO_CHASU", "string");


        // 	this.dsReceiptCancel = new Dataset();
        // 	this.dsReceiptCancel.addColumn("CD_ACNTUNIT", "string");
        // 	this.dsReceiptCancel.addColumn("TY_GUBUN", "string");
        // 	this.dsReceiptCancel.addColumn("NO_CHASU", "string");
        // 	this.dsReceiptCancel.addColumn("NO_DONG", "string");
        // 	this.dsReceiptCancel.addColumn("NO_FLOOR", "string");
        // 	this.dsReceiptCancel.addColumn("NO_HO", "string");
        // 	this.dsReceiptCancel.addColumn("YM_IMPOSE", "string");
        // 	this.dsReceiptCancel.addColumn("DT_RECEIPT", "string");
        // 	this.dsReceiptCancel.addColumn("ID_INSERT", "string");
        // 	this.dsReceiptCancel.addColumn("NO_SUNAP", "string");

        	this.dsReceiptCancel = new Dataset();
        	this.dsReceiptCancel.addColumn("CD_ACNTUNIT", "string");
        	this.dsReceiptCancel.addColumn("TY_GUBUN", "string");
        	this.dsReceiptCancel.addColumn("NO_CHASU", "string");
        	this.dsReceiptCancel.addColumn("NO_DONG", "string");
        	this.dsReceiptCancel.addColumn("NO_FLOOR", "string");
        	this.dsReceiptCancel.addColumn("NO_HO", "string");
        	this.dsReceiptCancel.addColumn("YM_IMPOSE", "string");
        	this.dsReceiptCancel.addColumn("DT_RECEIPT", "string");
        	this.dsReceiptCancel.addColumn("ID_INSERT", "string");
        	this.dsReceiptCancel.addColumn("DT_TRADE", "string");
        	this.dsReceiptCancel.addColumn("TM_TRADE", "string");
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelectLeft.clearData();
        	this.dsSelectLeft.addRow();
        	this.dsSelectLeft.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelectLeft.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelectLeft.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelectLeft.setColumn(0, "TY_IPJU", this.dsSearch.getColumn(0, "TY_IPJU"));
        	this.dsSelectLeft.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelectLeft.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelectLeft.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsSelectLeft.setColumn(0, "TY_BUNYANG", this.dsSearch.getColumn(0, "TY_BUNYANG"));

        	var strSvcId    = "selectleft";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectleft=dsSelectLeft";
        	var outData     = "dsLeft=selectleft0";
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

        this.fnSelectDetail = function() {
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect.setColumn(0, "NO_DONG", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_DONG"));
        	this.dsSelect.setColumn(0, "NO_FLOOR", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_FLOOR"));
        	this.dsSelect.setColumn(0, "NO_HO", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_HO"));

        	this.dsSelectBasic.clearData();
        	this.dsSelectBasic.addRow();
        	this.dsSelectBasic.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelectBasic.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelectBasic.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
          	var inData      = "selectmsg=dsSelect select=dsSelect select1=dsSelect select2=dsSelect select3=dsSelect select4=dsSelect select5=dsSelect select6=dsSelect selectBasic=dsSelectBasic";
          	var outData     = "dsMsg=selectmsg0 dsList=select0 dsList1=select10 dsList2=select20 dsList3=select30 dsList4=select40 dsList5=select50 dsList6=select60 dsBasic=selectBasic0";
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
        	if (this.tabData.tabindex == 1)
        		this.gfnGridAdd(this.dxGrid2);
        	else if (this.tabData.tabindex == 2)
        		this.gfnGridAdd(this.dxGrid3);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	if (this.tabData.tabindex == 1) {
        		this.gfnGridDel(this.dxGrid2);
        		if (this.dsList2.rowcount == 0) {
        			this.FormBtns.Del.set_enable(false);
        		}
        	}
        	else if (this.tabData.tabindex == 2) {
        		this.gfnGridDel(this.dxGrid3);
        		if (this.dsList3.rowcount == 0) {
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
        	this.dsUpdate.setColumn(nrow, "NO_DONG", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_DONG"));
        	this.dsUpdate.setColumn(nrow, "NO_FLOOR", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_FLOOR"));
        	this.dsUpdate.setColumn(nrow, "NO_HO", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_HO"));
        	this.dsUpdate.setColumn(nrow, "TY_DISTRICT", this.dsList.getColumn(i, "TY_DISTRICT"));
        	this.dsUpdate.setColumn(nrow, "RT_OPTION", this.dsList.getColumn(i, "RT_OPTION"));
        	this.dsUpdate.setColumn(nrow, "TY_CONTRACTOR", this.dsList.getColumn(i, "TY_CONTRACTOR"));
        	this.dsUpdate.setColumn(nrow, "DS_CONTRACTOR", this.dsList.getColumn(i, "DS_CONTRACTOR"));
        	this.dsUpdate.setColumn(nrow, "NO_JUMIN", nexacro.replaceAll(this.dsList.getColumn(i, "NO_JUMIN"), "-", ""));
        	this.dsUpdate.setColumn(nrow, "NO_TEL", this.dsList.getColumn(i, "NO_TEL"));
        	this.dsUpdate.setColumn(nrow, "NO_OFFICETEL", this.dsList.getColumn(i, "NO_OFFICETEL"));
        	this.dsUpdate.setColumn(nrow, "NO_MOBILE", this.dsList.getColumn(i, "NO_MOBILE"));
        	this.dsUpdate.setColumn(nrow, "DS_EMAIL", this.dsList.getColumn(i, "DS_EMAIL"));
        	this.dsUpdate.setColumn(nrow, "NO_POST", this.dsList.getColumn(i, "NO_POST"));
        	this.dsUpdate.setColumn(nrow, "DS_ADDR2", this.dsList.getColumn(i, "DS_ADDR2"));
        	this.dsUpdate.setColumn(nrow, "DS_ADDR3", this.dsList.getColumn(i, "DS_ADDR3"));
        	this.dsUpdate.setColumn(nrow, "NO_RECPOST", this.dsList.getColumn(i, "NO_RECPOST"));
        	this.dsUpdate.setColumn(nrow, "DS_RECADDR2", this.dsList.getColumn(i, "DS_RECADDR2"));
        	this.dsUpdate.setColumn(nrow, "DS_RECADDR3", this.dsList.getColumn(i, "DS_RECADDR3"));
        	this.dsUpdate.setColumn(nrow, "CD_VENDOR", nexacro.replaceAll(this.dsList.getColumn(i, "CD_VENDOR"), "-", ""));
        	this.dsUpdate.setColumn(nrow, "DS_VENDOR", this.dsList.getColumn(i, "DS_VENDOR"));
        	this.dsUpdate.setColumn(nrow, "DS_UPTAE", this.dsList.getColumn(i, "DS_UPTAE"));
        	this.dsUpdate.setColumn(nrow, "DS_UPJONG", this.dsList.getColumn(i, "DS_UPJONG"));
        	this.dsUpdate.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        	this.dsUpdate.setColumn(nrow, "YN_EBILL", this.dsList.getColumn(i, "YN_EBILL"));
        	this.dsUpdate.setColumn(nrow, "DT_IPJUPLAN", nexacro.replaceAll(this.dsList.getColumn(i, "DT_IPJUPLAN"), "-", ""));
        	this.dsUpdate.setColumn(nrow, "DT_IPJU", this.dsList.getColumn(i, "DT_IPJU"));
        	this.dsUpdate.setColumn(nrow, "DT_CONTRACT", nexacro.replaceAll(this.dsList.getColumn(i, "DT_CONTRACT"), "-", ""));
        	this.dsUpdate.setColumn(nrow, "DT_LEASE_FR", nexacro.replaceAll(this.dsList.getColumn(i, "DT_LEASE_FR"), "-", ""));
        	this.dsUpdate.setColumn(nrow, "DT_LEASE_TO", nexacro.replaceAll(this.dsList.getColumn(i, "DT_LEASE_TO"), "-", ""));
        	this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        	this.dsUpdate.setColumn(nrow, "YN_JOINT", "");
        	this.dsUpdate.setColumn(nrow, "YN_AUTOLEASE", this.dsList.getColumn(i, "YN_AUTOLEASE"));
        	this.dsUpdate.setColumn(nrow, "DS_TRANSFER", this.dsList.getColumn(i, "DS_TRANSFER"));
        	this.dsUpdate.setColumn(nrow, "YN_SUNSU", "X");
        	this.dsUpdate.setColumn(nrow, "AM_SUNSU", 0);
        	this.dsUpdate.setColumn(nrow, "YN_RETURN", "X");
        	this.dsUpdate.setColumn(nrow, "DT_RETURN", "X");
        	this.dsUpdate.setColumn(nrow, "NO_CONTRACT", "");

        	// 제한사항 Grid
        	this.dxGrid3.updateToDataset();

        	this.dsInsert2.clearData();
        	this.dsUpdate2.clearData();
        	this.dsDelete2.clearData();

        	for (var i = 0; i < this.dsList2.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList2, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert2.addRow();
        				this.dsInsert2.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        				this.dsInsert2.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        				this.dsInsert2.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        				this.dsInsert2.setColumn(nrow, "NO_DONG", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_DONG"));
        				this.dsInsert2.setColumn(nrow, "NO_FLOOR", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_FLOOR"));
        				this.dsInsert2.setColumn(nrow, "NO_HO", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_HO"));
        				this.dsInsert2.setColumn(nrow, "NO_SEQ", this.dsList2.getColumn(i, "NO_SEQ"));
        				this.dsInsert2.setColumn(nrow, "DT_DECISION", nexacro.replaceAll(this.dsList2.getColumn(i, "DT_DECISION"), "-", ""));
        				this.dsInsert2.setColumn(nrow, "DS_COURT", this.dsList2.getColumn(i, "DS_COURT"));
        				this.dsInsert2.setColumn(nrow, "NO_CASE", this.dsList2.getColumn(i, "NO_CASE"));
        				this.dsInsert2.setColumn(nrow, "DS_CASE", this.dsList2.getColumn(i, "DS_CASE"));
        				this.dsInsert2.setColumn(nrow, "YN_ENDCASE", this.dsList2.getColumn(i, "YN_ENDCASE") == "종결" ? "Y" : "N");
        				this.dsInsert2.setColumn(nrow, "DS_CREDITOR", this.dsList2.getColumn(i, "DS_CREDITOR"));
        				this.dsInsert2.setColumn(nrow, "AM_DEMAND", this.dsList2.getColumn(i, "AM_DEMAND"));
        				this.dsInsert2.setColumn(nrow, "DT_CLOSE", this.dsList2.getColumn(i, "DT_CLOSE"));
        				this.dsInsert2.setColumn(nrow, "DS_JUDGE", this.dsList2.getColumn(i, "DS_JUDGE"));
        				this.dsInsert2.setColumn(nrow, "DS_REMARK", this.dsList2.getColumn(i, "DS_REMARK"));
        				this.dsInsert2.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				break;

        			case "U":
        				var nrow = this.dsUpdate2.addRow();
        				this.dsUpdate2.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        				this.dsUpdate2.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        				this.dsUpdate2.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        				this.dsUpdate2.setColumn(nrow, "NO_DONG", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_DONG"));
        				this.dsUpdate2.setColumn(nrow, "NO_FLOOR", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_FLOOR"));
        				this.dsUpdate2.setColumn(nrow, "NO_HO", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_HO"));
        				this.dsUpdate2.setColumn(nrow, "NO_SEQ", this.dsList2.getColumn(i, "NO_SEQ"));
        				this.dsUpdate2.setColumn(nrow, "DT_DECISION", nexacro.replaceAll(this.dsList2.getColumn(i, "DT_DECISION"), "-", ""));
        				this.dsUpdate2.setColumn(nrow, "DS_COURT", this.dsList2.getColumn(i, "DS_COURT"));
        				this.dsUpdate2.setColumn(nrow, "NO_CASE", this.dsList2.getColumn(i, "NO_CASE"));
        				this.dsUpdate2.setColumn(nrow, "DS_CASE", this.dsList2.getColumn(i, "DS_CASE"));
        				this.dsUpdate2.setColumn(nrow, "YN_ENDCASE", this.dsList2.getColumn(i, "YN_ENDCASE") == "종결" ? "Y" : "N");
        				this.dsUpdate2.setColumn(nrow, "DS_CREDITOR", this.dsList2.getColumn(i, "DS_CREDITOR"));
        				this.dsUpdate2.setColumn(nrow, "AM_DEMAND", this.dsList2.getColumn(i, "AM_DEMAND"));
        				this.dsUpdate2.setColumn(nrow, "DT_CLOSE", this.dsList2.getColumn(i, "DT_CLOSE"));
        				this.dsUpdate2.setColumn(nrow, "DS_JUDGE", this.dsList2.getColumn(i, "DS_JUDGE"));
        				this.dsUpdate2.setColumn(nrow, "DS_REMARK", this.dsList2.getColumn(i, "DS_REMARK"));
        				this.dsUpdate2.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDelete2.addRow();
        				this.dsDelete2.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        				this.dsDelete2.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        				this.dsDelete2.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        				this.dsDelete2.setColumn(nrow, "NO_DONG", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_DONG"));
        				this.dsDelete2.setColumn(nrow, "NO_FLOOR", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_FLOOR"));
        				this.dsDelete2.setColumn(nrow, "NO_HO", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_HO"));
        				this.dsDelete2.setColumn(nrow, "NO_SEQ", this.dsList2.getColumn(i, "NO_SEQ"));
        				break;
        		}
        	}

        	// 설정사항 Grid
        	this.dxGrid4.updateToDataset();

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
        				this.dsInsert3.setColumn(nrow, "NO_UNIONMEMBER", "");
        				this.dsInsert3.setColumn(nrow, "NO_DONG", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_DONG"));
        				this.dsInsert3.setColumn(nrow, "NO_FLOOR", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_FLOOR"));
        				this.dsInsert3.setColumn(nrow, "NO_HO", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_HO"));
        				this.dsInsert3.setColumn(nrow, "DT_SETUP", this.dsList3.getColumn(i, "DT_SETUP"));
        				this.dsInsert3.setColumn(nrow, "DS_CASE", this.dsList3.getColumn(i, "DS_CASE"));
        				this.dsInsert3.setColumn(nrow, "AM_SETUP", this.dsList3.getColumn(i, "AM_SETUP"));
        				this.dsInsert3.setColumn(nrow, "DT_START", this.dsList3.getColumn(i, "DT_START"));
        				this.dsInsert3.setColumn(nrow, "DT_END", this.dsList3.getColumn(i, "DT_END"));
        				this.dsInsert3.setColumn(nrow, "YN_ENDCASE", this.dsList3.getColumn(i, "YN_ENDCASE") == "종결" ? "Y" : "N");
        				this.dsInsert3.setColumn(nrow, "DT_CLOSE", this.dsList3.getColumn(i, "DT_CLOSE"));
        				this.dsInsert3.setColumn(nrow, "DS_JUDGE", this.dsList3.getColumn(i, "DS_JUDGE"));
        				this.dsInsert3.setColumn(nrow, "DS_REMARK", this.dsList3.getColumn(i, "DS_REMARK"));
        				this.dsInsert3.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				break;

        			case "U":
        				var nrow = this.dsUpdate3.addRow();
        				this.dsUpdate3.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        				this.dsUpdate3.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        				this.dsUpdate3.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        				this.dsUpdate3.setColumn(nrow, "NO_UNIONMEMBER", "");
        				this.dsUpdate3.setColumn(nrow, "NO_DONG", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_DONG"));
        				this.dsUpdate3.setColumn(nrow, "NO_FLOOR", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_FLOOR"));
        				this.dsUpdate3.setColumn(nrow, "NO_HO", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_HO"));
        				this.dsUpdate3.setColumn(nrow, "NO_SEQ", this.dsList3.getColumn(i, "NO_SEQ"));
        				this.dsUpdate3.setColumn(nrow, "DT_SETUP", this.dsList3.getColumn(i, "DT_SETUP"));
        				this.dsUpdate3.setColumn(nrow, "DS_CASE", this.dsList3.getColumn(i, "DS_CASE"));
        				this.dsUpdate3.setColumn(nrow, "AM_SETUP", this.dsList3.getColumn(i, "AM_SETUP"));
        				this.dsUpdate3.setColumn(nrow, "DT_START", this.dsList3.getColumn(i, "DT_START"));
        				this.dsUpdate3.setColumn(nrow, "DT_END", this.dsList3.getColumn(i, "DT_END"));
        				this.dsUpdate3.setColumn(nrow, "YN_ENDCASE", this.dsList3.getColumn(i, "YN_ENDCASE") == "종결" ? "Y" : "N");
        				this.dsUpdate3.setColumn(nrow, "DT_CLOSE", this.dsList3.getColumn(i, "DT_CLOSE"));
        				this.dsUpdate3.setColumn(nrow, "DS_JUDGE", this.dsList3.getColumn(i, "DS_JUDGE"));
        				this.dsUpdate3.setColumn(nrow, "DS_REMARK", this.dsList3.getColumn(i, "DS_REMARK"));
        				this.dsUpdate3.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);

        				break;

        			case "D":
        				var nrow = this.dsDelete3.addRow();
        				this.dsDelete3.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        				this.dsDelete3.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        				this.dsDelete3.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        				this.dsDelete3.setColumn(nrow, "NO_DONG", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_DONG"));
        				this.dsDelete3.setColumn(nrow, "NO_FLOOR", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_FLOOR"));
        				this.dsDelete3.setColumn(nrow, "NO_HO", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_HO"));
        				this.dsDelete3.setColumn(nrow, "NO_SEQ", this.dsList3.getColumn(i, "NO_SEQ"));
        				break;
        		}
        	}

        	var strInData = "update=dsUpdate";
        	if (!(this.dsInsert2.rowcount == 0 && this.dsUpdate2.rowcount == 0 && this.dsDelete2.rowcount == 0)) {
        		strInData += " insert2=dsInsert2 update2=dsUpdate2 delete2=dsDelete2";
        	}
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
        	switch (this.tabData.tabindex) {
        		case 0:
        			this.gfnExcelExport(this.dxGrid1);
        			break;
        		case 1:
        			this.gfnExcelExport(this.dxGrid2);
        			break;
        		case 2:
        			this.gfnExcelExport(this.dxGrid3);
        			break;
        		case 3:
        			this.gfnExcelExport(this.dxGrid4);
        			break;
        		case 4:
        			this.gfnExcelExport(this.dxGrid5);
        			break;
        		case 5:
        			this.gfnExcelExport(this.dxGrid6);
        			break;
        	}
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
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_ACNTUNIT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("사업지코드가 입력되지 않았습니다.", "fnVaidateCallback");
        		validate = false;
        	}
        	return validate;
        };

        /*
         *	저장 Validate
         */
        this.fnSaveValidate = function() {
        	var strMsg = "";
        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) {
        		strMsg += "사업지코드는 반드시 입력 하셔야 합니다.\n";
        		validate = false;
        	}

        	if (!validate) {
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
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "selectleft") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if (svcID == "select") {
        		if (this.dsMsg.rowcount > 0) {
        			if (this.gfnNvl(this.dsMsg.getColumn(0, "MSG")).length > 0)
        				this.gfnAlert(this.dsMsg.getColumn(0, "MSG"));
        		}

        		this.gfnSetFormStatus(this, "Q");
        		this.fnSelectDetailAfter();
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.fnTabDataIndexChanged();
        			this.fnSelectDetail();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == "receiptcancel") {
        		if (errorCode == 0) {
        			this.fnTabDataIndexChanged();
        			this.fnSelectDetail();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_ACNTUNIT") {
        		dsUserParam.setColumn(nrow, "FLAG", "A");
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "ID_GROUP", this.FormInfo.ID_GROUP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_TOTALCHASU", "");
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	switch(id){
        		case "ccfCD_ACNTUNIT" :
        			this.dsSearch.setColumn(0, "NO_DONG", "");
        			this.dsSearch.setColumn(0, "NO_FLOOR", "");
        			this.dsSearch.setColumn(0, "NO_HO", "");
        			break;
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {

        		this.fnSelectDetail();
        		this.fnTabDataIndexChanged();

        		obj.oldrow = -1;
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_left(e.clientx);
        		this.divData.form.resetScroll();
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };

        this.divDataRight_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter2") {
        		this.divData.form.divDataRight.form.divSplitter2.set_top(e.clienty);
        		this.divData.form.divDataRight.form.resetScroll();
        	}
        };

        this.divData_divSplitter2_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter2");
        	return true;
        };

        this.dsSearch_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGrid1);
        		this.gfnGridClear(this.dxGrid2);
        		this.gfnGridClear(this.dxGrid3);
        		this.gfnGridClear(this.dxGrid4);
        		this.gfnGridClear(this.dxGrid5);
        		this.gfnGridClear(this.dxGrid6);
        		this.dsList.clearData();

        		if (e.columnid == "TY_IPJU") {
        			this.dsSearch.setColumn(0, "NO_DONG", "");
        			this.dsSearch.setColumn(0, "NO_FLOOR", "");
        			this.dsSearch.setColumn(0, "NO_HO", "");

        			var isDT_QUITAPPLY = !(e.newvalue == "입주세대" || e.newvalue == "미계약세대" || e.newvalue == "임대계약세대");
        			this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "AM_LEFT_ASSU"), "size", isDT_QUITAPPLY ? 100 : 0);
        		}
        		else if (e.columnid == "TY_BUNYANG") {
        			this.dsSearch.setColumn(0, "NO_DONG", "");
        			this.dsSearch.setColumn(0, "NO_FLOOR", "");
        			this.dsSearch.setColumn(0, "NO_HO", "");
        		}
        		if (e.columnid == "NO_DONG") {
        			this.dsSearch.setColumn(0, "NO_FLOOR", "");
        			this.dsSearch.setColumn(0, "NO_HO", "");
        		}
        		else if (e.columnid == "NO_FLOOR") {
        			this.dsSearch.setColumn(0, "NO_HO", "");
        		}

        	}
        }

        this.dsList_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this, "U");

        		if (e.columnid == "TY_CONTRACTOR") {
        			var isChecked = e.newvalue == "P";

        			this.txtDS_VENDOR.set_readonly(isChecked);
        			this.txtDS_UPJONG.set_readonly(isChecked);
        			this.txtDS_UPTAE.set_readonly(isChecked);
        			this.txtCD_VENDOR.set_readonly(isChecked);

        			this.sta37.set_textDecoration(isChecked ? "" : "underline");
        		}
        	}
        };


        this.divData_tabData_onchanged = function(obj,e)
        {
        	if (e.preindex == e.postindex) return;

        	this.fnTabDataIndexChanged();
        };

        this.fnTabDataIndexChanged = function() {
        	switch (this.tabData.tabindex) {
        		case 1:
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

        this.fnSelectDetailAfter = function() {
        	var hasDT_CONTRACT = this.gfnNvl(this.dsList.getColumn(0, "DT_CONTRACT")).length == 0;

        	this.rdoTY_CONTRACTOR.set_readonly(hasDT_CONTRACT);

        	this.txtNO_TEL.set_readonly(hasDT_CONTRACT);
        	this.txtNO_OFFICETEL.set_readonly(hasDT_CONTRACT);
        	this.txtNO_MOBILE.set_readonly(hasDT_CONTRACT);
        	this.txtDS_EMAIL.set_readonly(hasDT_CONTRACT);
        	this.txtDS_REMARK.set_readonly(hasDT_CONTRACT);

        	if (hasDT_CONTRACT) {
        		this.txtDS_VENDOR.set_readonly(true);
        		this.txtDS_UPJONG.set_readonly(true);
        		this.txtDS_UPTAE.set_readonly(true);

        		this.btnQuitApply.set_enable(false);
        		this.btnQuit.set_enable(false);
        		this.btnPerImpose.set_enable(false);
        		this.btnRenew.set_enable(false);
        		this.btnPerCancel.set_enable(false);

        		this.btnReceipt.set_enable(false);
        		this.btnReceiptCancel.set_enable(false);
        	}
        	else {
        		var bTY_CONTRACTOR = this.dsList.getColumn(0, "TY_CONTRACTOR") == "P";

        		this.txtDS_VENDOR.set_readonly(bTY_CONTRACTOR);
        		this.txtDS_UPJONG.set_readonly(bTY_CONTRACTOR);
        		this.txtDS_UPTAE.set_readonly(bTY_CONTRACTOR);
        		this.txtCD_VENDOR.set_readonly(bTY_CONTRACTOR);

        		this.sta37.set_textDecoration(bTY_CONTRACTOR ? "" : "underline");

        		this.btnQuitApply.set_enable(true);
        		this.btnQuit.set_enable(true);
        		this.btnPerImpose.set_enable(true);
        		this.btnRenew.set_enable(true);
        		this.btnPerCancel.set_enable(true);

        		this.btnReceipt.set_enable(true);
        		this.btnReceiptCancel.set_enable(true);
        	}

        	this.tclDT_IPJUPLAN.set_enable(true);
        	this.tclDT_IPJUPLAN_G.set_enable(true);
        	this.sta05.set_text(this.dsList.getColumn(0, "TY_STATE") == "임대계약"? "입주예정일자" : "입주일자");

        	this.fnTabDataIndexChanged();
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
        //  	if (e.keycode == 112) {	//F1
        //  		this.divSearch_cbtnNO_DONGHO_onclick();
        //  	}
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

        this.divSearch_cbtnNO_DONGHO_onclick = function(obj,e) {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_ACNTUNIT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("사업지코드를 입력하세요!", "fnVaidateCallback");
        		return;
        	}

        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.FLAG = "1";

        	this.gfnFormOpen("DRI", "DRI_DONGHOCONTRACT", "fnDonghoPopupCallback", param);
        };

        this.fnDonghoPopupCallback = function(svcID, val) {
        	if (!val) return;

        	var json = JSON.parse(val);
        	if (json.DONG.length > 0) {
        		this.dsSearch.setColumn(0, "NO_DONG", json.DONG);
        		this.dsSearch.setColumn(0, "NO_FLOOR", json.FLOOR);
        		this.dsSearch.setColumn(0, "NO_HO", json.HO);
        	}
        }


        this.chk_MISU_onchanged = function(obj,e) {
        	var width = 0;
        	if (this.chk_MISU.value == "Y") {
        		width = 100;
        	}

        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "MM_AR"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "AM_RECEIVABLE"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "AM_DELAYRECEIVABLE"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "AM_RECEIVABLE_ASSU"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "AM_DELAYRECEIVABLE_ASSU"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "AM_TTRECEIVABLE"), "size", width);
        };

        this.chk_GOJI_onchanged = function(obj,e) {
        	var width = 0;
        	if (this.chk_GOJI.value == "Y") {
        		width = 100;
        	}

        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "DT_IN"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "AM_INLEASE"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "AM_ASSU"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "AM_INLEASE_TOTAL"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "AM_DELAY"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "AM_DELAY_ASSU"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "AM_AFTERLEASE"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "AM_AFTERLEASE1"), "size", width);
        };

        this.chk_SUNAP_onchanged = function(obj,e) {
        	var width = 0;
        	if (this.chk_SUNAP.value == "Y") {
        		width = 100;
        	}

        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "DT_RECEIPT"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "NO_SUNAP"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "AM_RECEIPT"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "AM_MLEASE"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "AM_DELAY1"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "AM_ASSU1"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "AM_DELAY_ASSU1"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "AM_LEFT"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "AM_LEFT_ASSU"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "DT_ADDUPBACK"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "TY_POSITION"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "CD_GUJA"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "NO_GUJA"), "size", width);
        	this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "DS_REMARK"), "size", width);
        };

        /************************************************************************
         * 확장 버튼 실행
         ************************************************************************/
        //퇴거신청
        this.fnQuitApply = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.NO_DONG = this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_DONG");
        	param.NO_FLOOR = this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_FLOOR");
        	param.NO_HO = this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_HO");
        	param.TY_STATE = this.dsList.getColumn(0, "TY_STATE");
        	param.DS_CONTRACTOR = this.dsList.getColumn(0, "DS_CONTRACTOR");
        	var strDongFloorHo = this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_DONG") + "동"
        						+ this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_FLOOR") + "층"
        						+ this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_HO") + "호";
        	param.DONG_FLOOR_HO = strDongFloorHo;

        	this.gfnFormOpen("DLC", "DLC_DLGQUITAPPLY", "fnPopupCallback", param);
        }

        //퇴거
        this.fnQuit = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	if (this.dsList.getColumn(0, "TY_STATE") != "퇴거신청") {
        		this.gfnAlert("퇴거신청을 하지 않았으므로, 퇴거처리를 할 수 없습니다!\n퇴거신청을 먼저 하세요.");
        		return;
        	}

        	var param = {};
        	param.CD_ACNTUNIT =  this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.NO_DONG = this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_DONG");
        	param.NO_FLOOR = this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_FLOOR");
        	param.NO_HO = this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_HO");
        	param.DS_CONTRACTOR = this.dsList.getColumn(0, "DS_CONTRACTOR");
        	var strDongFloorHo = this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_DONG") + "동"
        						+ this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_FLOOR") + "층"
        						+ this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_HO") + "호";
        	param.DS_DONGHO = strDongFloorHo;

        	this.gfnFormOpen("DLC", "DLC_DLGQUIT", "fnPopupCallback", param);
        }

        //임대료개별부과
        this.fnPerImpose = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        	param.NO_DONG = this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_DONG");
        	param.NO_FLOOR = this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_FLOOR");
        	param.NO_HO = this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_HO");
        	param.Day_NAPGI = this.gfnNvl(this.dsBasic.getColumn(0, "NO_NAPGI_DAY")).length == 1 ? "0" + this.dsBasic.getColumn(0, "NO_NAPGI_DAY") : this.dsBasic.getColumn(0, "NO_NAPGI_DAY");
        	param.YN_DAY = this.dsBasic.getColumn(0, "YN_DAY");

        	this.gfnFormOpen("DLC", "DLC_PERLEASEIMPOSE", "fnPopupCallback", param);
        }

        //재계약
        this.fnRenew = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	if (this.dsList.getColumn(0, "TY_STATE") == "퇴거신청") {
        		this.gfnAlert("퇴거신청자이므로 재계약을 체결할 수 없습니다!");
        		return;
        	}

        	if (this.gfnNvl(this.dsList.getColumn(0, "DT_LEASE_TO")) == "") {
        		this.dsList.setColumn(0, "DT_LEASE_TO", this.gfnGetDate());
        	}

        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.NO_DONG = this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_DONG");
        	param.NO_FLOOR = this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_FLOOR");
        	param.NO_HO = this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_HO");
        	param.DS_CONTRACTOR = this.dsList.getColumn(0, "DS_CONTRACTOR");
        	param.AM_DEPOSIT = nexacro.toNumber(this.dsList.getColumn(0, "AM_BUNYANGPLAN"));
        	param.AM_LEASE = nexacro.toNumber(this.dsList.getColumn(0, "AM_MLEASE"));
        	param.DT_LEASE_FR = this.gfnAddDate(nexacro.replaceAll(this.dsList.getColumn(0, "DT_LEASE_TO"), "-", ""), 1);
        	var strDongFloorHo = this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_DONG") + "동"
        						+ this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_FLOOR") + "층"
        						+ this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_HO") + "호";
        	param.DS_DONGHO = strDongFloorHo;


        	this.gfnFormOpen("DLC", "DLC_DLGRENEW", "fnPopupCallback", param);
        }

        //임대료개별취소
        this.fnPerCancel = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	if (this.dsList1.rowcount == 0) {
        		this.gfnAlert("임대료부과정보가 존재하지 않습니다!");
        		return;
        	}

        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        	param.NO_DONG = this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_DONG");
        	param.NO_FLOOR = this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_FLOOR");
        	param.NO_HO = this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_HO");
        	param.YM_IMPOSE = this.dsList1.getColumn(this.dsList1.rowposition, "YM_IMPOSE");

        	this.gfnFormOpen("DLC", "DLC_PERLEASEIMPOSECANCEL", "fnPopupCallback", param);
        }

        //일자별납입금조회
        this.fnDetailInfo = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6);
        	param.TY_GUBUN = this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1);
        	param.NO_CHASU = this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2);
        	param.NO_DONG = this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_DONG");
        	param.NO_FLOOR = this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_FLOOR");
        	param.NO_HO = this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_HO");

        	this.gfnFormOpen("DLC", "DLC_DLGDETAILINFO", "", param);
        }


        this.fnPopupCallback = function(svcID, val) {
        	if (svcID.indexOf("DLC_DLGSUNAP") > -1 || svcID.indexOf("DLC_DLGUPDATESUNAP") > -1 || svcID.indexOf("DLC_DLGQUITAPPLY") > -1) {
        		if (val) {
        			this.fnSelectDetail();
        		}
        	}
        	else if (svcID.indexOf("DLC_DLGQUIT") > -1) {
        		if (val) {
        			this.tabData.set_tabindex(3);
        			this.fnSelectDetail();
        		}
        	}
        	else if (svcID.indexOf("DLC_PERLEASEIMPOSE") > -1 || svcID.indexOf("DLC_PERLEASEIMPOSECANCEL") > -1) {
        		if (val) {
        			this.tabData.set_tabindex(0);
        			this.fnSelectDetail();
        		}
        	}
        	else if (svcID.indexOf("DLC_DLGRENEW") > -1) {
        		if (val) {
        			this.tabData.set_tabindex(4);
        			this.fnSelectDetail();
        		}
        	}
        }


        //수납
        this.divData_divDataRight_divDataBottom_tabData_tab1_btnReceipt_onclick = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	if (this.dsList1.rowcount == 0) {
        		this.gfnAlert("부과내역이 존재하지 않습니다!");
        		return;
        	}

        	var param = {};
        	param.YM_IMPOSE = this.dsList1.getColumn(this.dsList1.rowposition, "YM_IMPOSE");
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        	param.NO_DONG = this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_DONG");
        	param.NO_FLOOR = this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_FLOOR");
        	param.NO_HO = this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_HO");
        	param.YN_VACNT = this.dsList.getColumn(0, "YN_VACNT");
        	param.CD_GUJA = this.dsList.getColumn(0, "CD_GUJA");
        	param.NO_GUJA = this.dsList.getColumn(0, "NO_GUJA");

        	this.gfnFormOpen("DLC", "DLC_DLGSUNAP", "fnPopupCallback", param);
        };

        //수납취소
        this.divData_divDataRight_divDataBottom_tabData_tab1_btnReceiptCancel_onclick = function(obj,e) {
        	if (this.tabData.tabindex != 0) return;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) return;
        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	if (this.dsList1.rowcount == 0) {
        		this.gfnAlert("부과된 수납내역이 없으므로, 수납취소를 할 수 없습니다!");
        		return;
        	}

        	this.gfnConfirm("해당 수납내역이 취소됩니다.", "btnReceiptCancel_callback");
        };

        this.btnReceiptCancel_callback = function(strID, val) {
        	if (!val) return;

        	this.dsReceiptCancel.clearData();
        	var nrow = this.dsReceiptCancel.addRow();
        	this.dsReceiptCancel.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsReceiptCancel.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsReceiptCancel.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsReceiptCancel.setColumn(nrow, "NO_DONG", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_DONG"));
        	this.dsReceiptCancel.setColumn(nrow, "NO_FLOOR", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_FLOOR"));
        	this.dsReceiptCancel.setColumn(nrow, "NO_HO", this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_HO"));
        	this.dsReceiptCancel.setColumn(nrow, "YM_IMPOSE", nexacro.replaceAll(this.dsList1.getColumn(this.dsList1.rowposition, "YM_IMPOSE"), "-", ""));
        	this.dsReceiptCancel.setColumn(nrow, "DT_RECEIPT", nexacro.replaceAll(this.dsList1.getColumn(this.dsList1.rowposition, "DT_RECEIPT"), "-", ""));
        	this.dsReceiptCancel.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        	//this.dsReceiptCancel.setColumn(nrow, "NO_SUNAP", this.dsList1.getColumn(this.dsList1.rowposition, "NO_SUNAP"));
        	this.dsReceiptCancel.setColumn(nrow, "DT_TRADE", this.dsList1.getColumn(this.dsList1.rowposition, "DT_TRADE"));
        	this.dsReceiptCancel.setColumn(nrow, "TM_TRADE", this.dsList1.getColumn(this.dsList1.rowposition, "TM_TRADE"));

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

        //수납정정
        this.divData_divDataRight_divDataBottom_tabData_tab1_btnReceiptUpdate_onclick = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	if (this.dsList1.rowcount == 0) {
        		this.gfnAlert("부과된 수납내역이 없으므로, 수납정정을 할 수 없습니다!");
        		return;
        	}

        	var i = 0;
        	for (i = 0; i < this.dsList1.rowcount; i++) {
        		if (this.gfnNvl(this.dsList1.getColumn(i, "DT_RECEIPT")) != "") {
        			break;
        		}
        	}

        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        	param.NO_DONG = this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_DONG");
        	param.NO_FLOOR = this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_FLOOR");
        	param.NO_HO = this.dsLeft.getColumn(this.dsLeft.rowposition, "NO_HO");
        	param.YM_IMPOSE = nexacro.replaceAll(this.dsList1.getColumn(i, "YM_IMPOSE"), "-", "");
        	param.DT_RECEIPT = nexacro.replaceAll(this.dsList1.getColumn(i, "DT_RECEIPT"), "-", "");
        	param.AM_RECEIPT = nexacro.toNumber(this.dsList1.getColumn(i, "AM_RECEIPT"));
        	param.AM_MLEASE = nexacro.toNumber(this.dsList1.getColumn(i, "AM_MLEASE"));
        	param.AM_DELAY = nexacro.toNumber(this.dsList1.getColumn(i, "AM_DELAY1"));

        	if (this.dsList1.getColumn(i, "NO_SUNAP") == "01") {
        		param.AM_INLEASE = nexacro.toNumber(this.dsList1.getColumn(i, "AM_INLEASE"));
        	}
        	else if (this.dsList1.getColumn(i, "NO_SUNAP") == "99") {
        		if (i + 1 < this.dsList1.rowcount && this.dsList1.getColumn(i + 1, "NO_SUNAP") == "99") {
        			param.AM_INLEASE = nexacro.toNumber(this.dsList1.getColumn(i, "AM_INLEASE"));
        		}
        		else if (i + 1 < this.dsList1.rowcount && this.dsList1.getColumn(i + 1, "NO_SUNAP") != "99") {
        			param.AM_INLEASE = nexacro.toNumber(this.dsList1.getColumn(i + 1, "AM_LEFT"));
        		}
        		else {
        			param.AM_INLEASE = nexacro.toNumber(this.dsList1.getColumn(i, "AM_INLEASE"));
        		}
        	}
        	else {
        		if (i + 1 < this.dsList1.rowcount) {
        			param.AM_INLEASE = nexacro.toNumber(this.dsList1.getColumn(i + 1, "AM_LEFT"));
        		}
        		else {
        			param.AM_INLEASE = nexacro.toNumber(this.dsList1.getColumn(i, "AM_INLEASE"));
        		}
        	}

        	param.AM_LEFT = nexacro.toNumber(this.dsList1.getColumn(i, "AM_LEFT"));
        	param.NO_SUNAP = this.dsList1.getColumn(i, "NO_SUNAP");

        	this.gfnFormOpen("DLC", "DLC_DLGUPDATESUNAP", "fnPopupCallback", param);
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
            this.divData.form.divDataRight.addEventHandler("ondragmove",this.divDataRight_ondragmove,this);
            this.divData.form.divDataRight.form.divSplitter2.addEventHandler("ondrag",this.divData_divSplitter2_ondrag,this);
            this.divData.form.divDataRight.form.divDataTop.form.txtCD_VENDOR.addEventHandler("onkillfocus",this.divData_divDataRight_divDataTop_txtCD_VENDOR_onkillfocus,this);
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.form.btnReceiptUpdate.addEventHandler("onclick",this.divData_divDataRight_divDataBottom_tabData_tab1_btnReceiptUpdate_onclick,this);
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.form.btnReceiptCancel.addEventHandler("onclick",this.divData_divDataRight_divDataBottom_tabData_tab1_btnReceiptCancel_onclick,this);
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.form.btnReceipt.addEventHandler("onclick",this.divData_divDataRight_divDataBottom_tabData_tab1_btnReceipt_onclick,this);
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.form.chk_SUNAP.addEventHandler("onchanged",this.chk_SUNAP_onchanged,this);
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.form.chk_GOJI.addEventHandler("onchanged",this.chk_GOJI_onchanged,this);
            this.divData.form.divDataRight.form.divDataBottom.form.tabData.tab1.form.chk_MISU.addEventHandler("onchanged",this.chk_MISU_onchanged,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DLC_IPJUMANAGE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
