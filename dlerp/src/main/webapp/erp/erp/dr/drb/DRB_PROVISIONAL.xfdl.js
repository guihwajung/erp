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
            this.set_titletext("미수미결조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">selectInfo</Col><Col id=\"SP\">DRBPR_PROVISIONAL_SELECT</Col></Row><Row><Col id=\"SP\">DRAPR_ASSIGNHOUSEINFO_SELECT</Col><Col id=\"TARGET\">selectLabel</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DRBPR_AGREEMENT_SELECT</Col></Row><Row><Col id=\"SP\">DRBPR_PROVISIONAL_UPDATE</Col><Col id=\"TARGET\">update</Col></Row><Row><Col id=\"SP\">DRBPR_PROVISIONAL_DELETE</Col><Col id=\"TARGET\">delete</Col></Row><Row><Col id=\"SP\">DRBPR_PROVISIONAL_CONTRACT</Col><Col id=\"TARGET\">execCont</Col></Row><Row><Col id=\"SP\">DRBPR_PROVISIONAL_DELETE</Col><Col id=\"TARGET\">execCancel</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_ACNTUNIT\"/><Col id=\"NO_DONG\"/><Col id=\"NO_FLOOR\"/><Col id=\"NO_HO\"/><Col id=\"NO_SIZE\"/><Col id=\"DS_ACNTUNIT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_PROVISIONAL\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PROVISIONAL\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PLANCONTRACT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PROVISIONAL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ZIPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR3\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"TY_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BANK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CARD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CARD\" type=\"STRING\" size=\"256\"/><Column id=\"NO_APPROVAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListLabel", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUJA", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">사용</Col><Col id=\"CD_CODE\">Y</Col></Row><Row><Col id=\"DS_CODE\">미사용</Col><Col id=\"CD_CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_POSITION", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">2</Col><Col id=\"VALUE\">은행</Col></Row><Row><Col id=\"CODE\">F</Col><Col id=\"VALUE\">카드</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","60",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,"235","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE1","109","87","500","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE","0","87","110","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("가계약금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE01","608","87","110","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE00","717","87","163","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("edtDS_NAME","723","92","152","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE02","717","116","163","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("edtNO_JUMIN","723","121","152","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE03","608","116","110","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("8");
            obj.set_text("주민증록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE04","109","116","500","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("edtNO_TEL","115","121","152","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE05","0","116","110","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("11");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE06","109","145","771","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("cfNO_ZIPCODE","115","150","380","20",null,null,"200",null,null,null,this.divData.form.divDataTop.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("edtDS_ADDR3","cfNO_ZIPCODE:5","150","375","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE07","0","145","110","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("14");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE08","717","174","163","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE09","608","174","110","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("16");
            obj.set_text("수납처");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE10","109","174","500","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE11","0","174","110","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("18");
            obj.set_text("가상계좌사용여부");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE16","717","58","163","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN00","717","29","163","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("edtDS_BUNYANG","723","34","152","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("21");
            obj.set_enable("false");
            obj.set_readonly("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE17","608","58","110","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("22");
            obj.set_text("본계약예정일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN01","608","29","110","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("23");
            obj.set_text("분양구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE18","109","58","500","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN1","109","29","500","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("edtDS_PROVISIONAL","115","34","258","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("26");
            obj.set_enable("false");
            obj.set_readonly("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE19","0","58","110","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("27");
            obj.set_text("가계약일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN","0","29","110","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("28");
            obj.set_text("분양상태");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staINFO","0","0",null,"22","0",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("29");
            obj.set_text("");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("tclDT_PROVISIONAL","115","63","105","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("30");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_PROVISIONAL","115","92","152","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("31");
            obj.set_limitbymask("both");
            obj.set_format("###,###,###,###,###");
            obj.set_enable("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDT_START01","mskAM_PROVISIONAL:6","92","20","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("32");
            obj.set_text("원");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Combo("cboTY_POSITION","723","178","152","21",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("33");
            obj.set_innerdataset("dsTY_POSITION");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_enable("true");
            obj.set_text("선택");
            obj.set_value("999");
            obj.set_index("0");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("tclDT_PLANCONTRACT","723","63","105","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("34");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("rdoTY_GUJA","116","179","222","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("35");
            obj.set_innerdataset("dsTY_GUJA");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_enable("false");
            obj.set_text("전법인");
            obj.set_value("Y");
            obj.set_index("0");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataTopCard","0","203",null,"30","280",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("37");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE14","109","0","771","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopCard.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.form.divDataTopCard.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE15","0","0","110","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopCard.form);
            obj.set_taborder("3");
            obj.set_text("카드사");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.form.divDataTopCard.addChild(obj.name, obj);

            obj = new Div("cfCD_CARD","114","5","265","20",null,null,"200",null,null,null,this.divData.form.divDataTop.form.divDataTopCard.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            this.divData.form.divDataTop.form.divDataTopCard.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE03","608","0","110","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopCard.form);
            obj.set_taborder("4");
            obj.set_text("승인번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.form.divDataTopCard.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE02","717","0","163","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopCard.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.form.divDataTopCard.addChild(obj.name, obj);

            obj = new Edit("edtNO_APPROVAL","724","5","152","20",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopCard.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divData.form.divDataTop.form.divDataTopCard.addChild(obj.name, obj);

            obj = new Div("divDataTopGuja","0","203",null,"30","350",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("36");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE14","109","0","771","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopGuja.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.form.divDataTopGuja.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE15","0","0","110","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopGuja.form);
            obj.set_taborder("3");
            obj.set_text("계좌");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.form.divDataTopGuja.addChild(obj.name, obj);

            obj = new Edit("edtNO_GUJA","384","5","215","20",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTopGuja.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divData.form.divDataTop.form.divDataTopGuja.addChild(obj.name, obj);

            obj = new Div("cfCD_GUJA","114","5","265","20",null,null,"200",null,null,null,this.divData.form.divDataTop.form.divDataTopGuja.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            this.divData.form.divDataTop.form.divDataTopGuja.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divDataTop:15",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","0",null,"22","0",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("약정정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta02:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Div("divSearch","divData:0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_ACNTUNIT","0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ACNTUNIT","ctxtCD_ACNTUNIT:0.0","10.0","220","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ctxtDS_ACNTUNIT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("사업지코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP00","ctxtDS_ACNTUNIT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("동층호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_DONG","staCD_CORP00:0.0","10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_FLOOR","ctxtNO_DONG:0.0","10.0","33","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_maxlength("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_HO","ctxtNO_FLOOR:0.0","10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_maxlength("3");
            this.divSearch.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctxtCD_ACNTUNIT","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctxtNO_DONG","value","dsSearch","NO_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctxtNO_FLOOR","value","dsSearch","NO_FLOOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctxtNO_HO","value","dsSearch","NO_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataTop.form.cfNO_ZIPCODE.form.CDTextBox","value","dsListInfo","NO_ZIPCODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataTop.form.cfNO_ZIPCODE.form.DSTextBox","value","dsListInfo","DS_ADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataTop.form.edtDS_NAME","value","dsListInfo","DS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataTop.form.edtNO_JUMIN","value","dsListInfo","NO_JUMIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divDataTop.form.tclDT_PROVISIONAL","value","dsListInfo","DT_PROVISIONAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataTop.form.tclDT_PLANCONTRACT","value","dsListInfo","DT_PLANCONTRACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataTop.form.rdoTY_GUJA","value","dsListInfo","TY_GUJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch.form.ctxtDS_ACNTUNIT","value","dsSearch","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divDataTop.form.mskAM_PROVISIONAL","value","dsListInfo","AM_PROVISIONAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divDataTop.form.edtNO_TEL","value","dsListInfo","NO_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divDataTop.form.edtDS_ADDR3","value","dsListInfo","DS_ADDR3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divDataTop.form.cboTY_POSITION","value","dsListInfo","TY_POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataTop.form.divDataTopGuja.form.edtNO_GUJA","value","dsListInfo","NO_GUJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divDataTop.form.divDataTopGuja.form.cfCD_GUJA.form.CDTextBox","value","dsListInfo","CD_GUJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divDataTop.form.divDataTopGuja.form.cfCD_GUJA.form.DSTextBox","value","dsListInfo","DS_BANK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataTop.form.divDataTopCard.form.edtNO_APPROVAL","value","dsListInfo","NO_APPROVAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataTop.form.divDataTopCard.form.cfCD_CARD.form.CDTextBox","value","dsListInfo","CD_CARD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divDataTop.form.divDataTopCard.form.cfCD_CARD.form.DSTextBox","value","dsListInfo","DS_CARD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DRB_PROVISIONAL.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.TY_STATUS = "";

        /*
        this.YN_CONT = "";            //계약 여부
        this.YN_ITEM = "";            //수납 여부
        this.YN_TOTCONTRACT = "";     //품목별계약("N"), 일괄계약("Y")
        this.NO_CONTRACT = "";        //현재 계약품목의 약정내역

        this.YN_VACNT = "";
        this.CD_GUJA = "";
        this.NO_GUJA = "";
        this.DS_BANK = "";
        */

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



        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_ACNTUNIT)) {
        		this.dsSearch.setColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        		this.ctxtDS_ACNTUNIT.set_value(this.getOwnerFrame().DS_ACNTUNIT);
        		this.dsSearch.setColumn(0, "NO_DONG", this.getOwnerFrame().DONG);
        		this.dsSearch.setColumn(0, "NO_FLOOR", this.getOwnerFrame().FLOOR);
        		this.dsSearch.setColumn(0, "NO_HO", this.getOwnerFrame().HO);
        		this.dsSearch.setColumn(0, "NO_SIZE", this.getOwnerFrame().NO_SIZE);

        		this.FormBtns.Select.click();
        	}

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
         	//this.FormBtns.Add.set_enable(false);
         	//this.FormBtns.Save.set_enable(false);
         	//this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnCont = this.gfnFormButtonAdd("btnCont", "fnCont");  //가계약체결
        	this.btnTransfer = this.gfnFormButtonAdd("btnTransfer", "fnTransfer");  //가계약취소
        	this.btnCancelCont = this.gfnFormButtonAdd("btnCancelCont", "fnCancelCont");  //대체
        	this.btnProvisionalCancel = this.gfnFormButtonAdd("btnProvisionalCancel", "fnProvisionalCancel");  //해약
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctxtCD_ACNTUNIT = this.divSearch.form.ctxtCD_ACNTUNIT;
        	this.ctxtDS_ACNTUNIT = this.divSearch.form.ctxtDS_ACNTUNIT;

        	this.staINFO = this.divData.form.divDataTop.form.staINFO;

        	this.edtDS_PROVISIONAL = this.divData.form.divDataTop.form.edtDS_PROVISIONAL;
        	this.edtDS_BUNYANG = this.divData.form.divDataTop.form.edtDS_BUNYANG;
        	this.tclDT_PROVISIONAL = this.divData.form.divDataTop.form.tclDT_PROVISIONAL;
        	this.tclDT_PLANCONTRACT = this.divData.form.divDataTop.form.tclDT_PLANCONTRACT;
        	this.mskAM_PROVISIONAL = this.divData.form.divDataTop.form.mskAM_PROVISIONAL;
        	this.edtDS_NAME = this.divData.form.divDataTop.form.edtDS_NAME;
        	this.edtNO_TEL = this.divData.form.divDataTop.form.edtNO_TEL;
        	this.edtNO_JUMIN = this.divData.form.divDataTop.form.edtNO_JUMIN;
        	this.cfNO_ZIPCODE = this.divData.form.divDataTop.form.cfNO_ZIPCODE;
        	this.edtDS_ADDR3 = this.divData.form.divDataTop.form.edtDS_ADDR3;
        	this.rdoTY_GUJA = this.divData.form.divDataTop.form.rdoTY_GUJA;
        	this.cboTY_POSITION = this.divData.form.divDataTop.form.cboTY_POSITION;
        	this.cfCD_GUJA = this.divData.form.divDataTop.form.divDataTopGuja.form.cfCD_GUJA;
        	this.edtNO_GUJA = this.divData.form.divDataTop.form.divDataTopGuja.form.edtNO_GUJA;
        	this.cfCD_CARD = this.divData.form.divDataTop.form.divDataTopCard.form.cfCD_CARD;
        	this.edtNO_APPROVAL = this.divData.form.divDataTop.form.divDataTopCard.form.edtNO_APPROVAL;

        	this.dxGrid = this.divData.form.divDataBottom.form.objGrid;

        	//this.dxGrid.EnterCell = "fnGridSub_EnterCell";
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DR", "DRB_PROVISIONAL");

        	this.dxGrid.set_selecttype("cell");
        	//this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	//this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);

        	//검색조건 변경 이벤트
        	//this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_Valuechanged, this);

        	this.cfNO_ZIPCODE.CodeFindName = "DZX_CFZIP_STREET";
        	//this.cfNO_ZIPCODE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.cfCD_GUJA.CodeFindName = "DRX_CFACCOUNT_ETC_CODEFIND";
        	this.cfCD_GUJA.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_GUJA.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.cfCD_CARD.CodeFindName = "DRX_CARD_CODEFIND";
        	//this.cfCD_CARD.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";



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

        	this.dsExecCont = new Dataset();
        	this.dsExecCont.addColumn("CD_ACNTUNIT", "string");
        	this.dsExecCont.addColumn("TY_GUBUN", "string");
        	this.dsExecCont.addColumn("NO_CHASU", "string");
        	this.dsExecCont.addColumn("NO_DONG", "string");
        	this.dsExecCont.addColumn("NO_FLOOR", "string");
        	this.dsExecCont.addColumn("NO_HO", "string");
        	this.dsExecCont.addColumn("NO_SIZE", "bigdecimal");
        	this.dsExecCont.addColumn("TY_TYPE", "string");
        	this.dsExecCont.addColumn("DT_PROVISIONAL", "string");
        	this.dsExecCont.addColumn("DT_PLANCONTRACT", "string");
        	this.dsExecCont.addColumn("AM_PROVISIONAL", "int");
        	this.dsExecCont.addColumn("NO_GUJA", "string");
        	this.dsExecCont.addColumn("DS_NAME", "string");
        	this.dsExecCont.addColumn("NO_JUMIN", "string");
        	this.dsExecCont.addColumn("NO_TEL", "string");
        	this.dsExecCont.addColumn("NO_ZIPCODE", "string");
        	this.dsExecCont.addColumn("DS_ADDR2", "string");
        	this.dsExecCont.addColumn("DS_ADDR3", "string");
        	this.dsExecCont.addColumn("TY_GUJA", "string");
        	this.dsExecCont.addColumn("ID_INSERT", "string");
        	this.dsExecCont.addColumn("TY_POSITION", "string");
        	this.dsExecCont.addColumn("CD_CARD", "string");
        	this.dsExecCont.addColumn("DS_CARD", "string");
        	this.dsExecCont.addColumn("NO_APPROVAL", "string");
        	this.dsExecCont.addColumn("DS_REMARK", "string");

        	this.dsExecCancel = new Dataset();
        	this.dsExecCancel.addColumn("CD_ACNTUNIT", "string");
        	this.dsExecCancel.addColumn("TY_GUBUN", "string");
        	this.dsExecCancel.addColumn("NO_CHASU", "string");
        	this.dsExecCancel.addColumn("NO_DONG", "string");
        	this.dsExecCancel.addColumn("NO_FLOOR", "string");
        	this.dsExecCancel.addColumn("NO_HO", "string");
        	this.dsExecCancel.addColumn("ID_UPDATE", "string");
        	this.dsExecCancel.addColumn("NO_PROVISIONAL", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_ACNTUNIT", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("NO_CHASU", "string");
        	this.dsUpdate.addColumn("NO_DONG", "string");
        	this.dsUpdate.addColumn("NO_FLOOR", "string");
        	this.dsUpdate.addColumn("NO_HO", "string");
        	this.dsUpdate.addColumn("DT_PLANCONTRACT", "string");
        	this.dsUpdate.addColumn("NO_TEL", "string");
        	this.dsUpdate.addColumn("NO_ZIPCODE", "string");
        	this.dsUpdate.addColumn("DS_ADDR2", "string");
        	this.dsUpdate.addColumn("DS_ADDR3", "string");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");
        	this.dsUpdate.addColumn("DS_NAME", "string");
        	this.dsUpdate.addColumn("NO_JUMIN", "string");

        	/*
        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_ACNTUNIT", "string");
        	this.dsDelete.addColumn("TY_GUBUN", "string");
        	this.dsDelete.addColumn("NO_CHASU", "string");
        	this.dsDelete.addColumn("NO_DONG", "string");
        	this.dsDelete.addColumn("NO_FLOOR", "string");
        	this.dsDelete.addColumn("NO_HO", "string");
        	this.dsDelete.addColumn("ID_UPDATE", "string");
        	this.dsDelete.addColumn("NO_PROVISIONAL", "string");
        	*/
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelect.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsSelect.setColumn(0, "NO_UNIONMEMBER", "");

        	var strSvcId    = "selectInfo";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectInfo=dsSelect selectLabel=dsSelect";
        	var outData     = "dsListInfo=selectInfo0 dsListLabel=selectLabel0";
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


        this.fnSelectList = function() {
        	//if (!this.fnSelectValidate()) return false;

        	//this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelect.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsSelect.setColumn(0, "NO_UNIONMEMBER", "");

        	var strSvcId    = "selectList";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
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
        	//var nrow = this.gfnGridAdd(this.dxGridSub);
        	//this.gfnSetFormStatus(this, "I");	// 폼상태 업데이트
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGridSub);
        	//this.gfnSetFormStatus(this, "D");	// 폼상태 업데이트
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.fnSaveValidate()) return;
        	//if (!this.gfnDataValidate(this.dsListEtc, this.dsRequired)) return;
        	//if (!this.gfnDataValidate(this.dsListEtc)) return;


        	if(this.cfCD_GUJA.enable){	// 가계약 처리
        		this.fnExecCont();
        	}else{	// 저장 처리
        		this.dsUpdate.clearData();

        		if(this.TY_STATUS == "U")
        		{
        			var nrow = this.dsUpdate.addRow();
        			this.dsUpdate.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        			this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        			this.dsUpdate.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        			this.dsUpdate.setColumn(nrow, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        			this.dsUpdate.setColumn(nrow, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        			this.dsUpdate.setColumn(nrow, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        			this.dsUpdate.setColumn(nrow, "DT_PLANCONTRACT", nexacro.replaceAll(this.dsListInfo.getColumn(0, "DT_PLANCONTRACT"), "-", ""));
        			this.dsUpdate.setColumn(nrow, "NO_TEL", this.dsListInfo.getColumn(0, "NO_TEL"));
        			this.dsUpdate.setColumn(nrow, "NO_ZIPCODE", nexacro.replaceAll(this.dsListInfo.getColumn(0, "NO_ZIPCODE"), "-", ""));
        			this.dsUpdate.setColumn(nrow, "DS_ADDR2", this.dsListInfo.getColumn(0, "DS_ADDR2"));
        			this.dsUpdate.setColumn(nrow, "DS_ADDR3", this.dsListInfo.getColumn(0, "DS_ADDR3"));
        			this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        			this.dsUpdate.setColumn(nrow, "DS_NAME", this.dsListInfo.getColumn(0, "DS_NAME"));
        			this.dsUpdate.setColumn(nrow, "NO_JUMIN", nexacro.replaceAll(this.dsListInfo.getColumn(0, "NO_JUMIN"), "-", ""));
        		}

        		if (this.dsUpdate.rowcount == 0) return;

        		var strSvcId    = "save";
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

        }

        /*
         *	가계약 처리
         */
        this.fnExecCont = function() {

        	this.dsExecCont.clearData();

        	this.dsExecCont.addRow();

        	this.dsExecCont.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsExecCont.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsExecCont.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsExecCont.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsExecCont.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsExecCont.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsExecCont.setColumn(0, "NO_SIZE", this.dsListLabel.getColumn(0, "NO_SIZE"));
        	this.dsExecCont.setColumn(0, "TY_TYPE", this.dsListLabel.getColumn(0, "TY_TYPE"));
        	this.dsExecCont.setColumn(0, "DT_PROVISIONAL", this.dsListInfo.getColumn(0, "DT_PROVISIONAL"));
        	this.dsExecCont.setColumn(0, "DT_PLANCONTRACT", this.dsListInfo.getColumn(0, "DT_PLANCONTRACT"));
        	this.dsExecCont.setColumn(0, "AM_PROVISIONAL", this.dsListInfo.getColumn(0, "AM_PROVISIONAL"));
        	this.dsExecCont.setColumn(0, "NO_GUJA", this.dsListInfo.getColumn(0, "NO_GUJA"));
        	this.dsExecCont.setColumn(0, "DS_NAME", this.dsListInfo.getColumn(0, "DS_NAME"));
        	this.dsExecCont.setColumn(0, "NO_JUMIN", nexacro.replaceAll(this.dsListInfo.getColumn(0, "NO_JUMIN"), "-", ""));
        	this.dsExecCont.setColumn(0, "NO_TEL", this.dsListInfo.getColumn(0, "NO_TEL"));
        	this.dsExecCont.setColumn(0, "NO_ZIPCODE", nexacro.replaceAll(this.dsListInfo.getColumn(0, "NO_ZIPCODE"), "-", ""));
        	this.dsExecCont.setColumn(0, "DS_ADDR2", this.dsListInfo.getColumn(0, "DS_ADDR2"));
        	this.dsExecCont.setColumn(0, "DS_ADDR3", this.dsListInfo.getColumn(0, "DS_ADDR3"));
        	this.dsExecCont.setColumn(0, "TY_GUJA", this.dsListInfo.getColumn(0, "TY_GUJA"));
        	this.dsExecCont.setColumn(0, "ID_INSERT", this.AuthClient.ID_USER);
        	this.dsExecCont.setColumn(0, "TY_POSITION", this.dsListInfo.getColumn(0, "TY_POSITION"));
        	this.dsExecCont.setColumn(0, "CD_CARD", this.dsListInfo.getColumn(0, "CD_CARD"));
        	this.dsExecCont.setColumn(0, "DS_CARD", this.dsListInfo.getColumn(0, "DS_CARD"));
        	this.dsExecCont.setColumn(0, "NO_APPROVAL", this.dsListInfo.getColumn(0, "NO_APPROVAL"));
        	this.dsExecCont.setColumn(0, "DS_REMARK", this.dsListInfo.getColumn(0, "DS_REMARK"));

        	if (this.dsExecCont.rowcount == 0) return;

        	var strSvcId    = "execCont";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "execCont=dsExecCont";
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


        this.fnSaveValidate = function() {
        	var validate = true;

        	if(this.gfnIsNull(this.dsListInfo.getColumn(0, "DT_PROVISIONAL")))
        	{
        		validate = false;
        		this.fnValidate_callback = function()
        		{
        			//this.divSearch.form.ccboTY_GUBUN.setFocus();
        		}

        		this.gfnAlert("가계약일자가 입력되지 않았습니다!", "fnValidate_callback");
        	}
        	else if(this.gfnIsNull(this.dsListInfo.getColumn(0, "DT_PLANCONTRACT")))
        	{
        		validate = false;
        		this.fnValidate_callback = function()
        		{
        			//this.divSearch.form.ctxtNO_CHASU.setFocus();
        		}

        		this.gfnAlert("본계약예정일자가 입력되지 않았습니다!", "fnValidate_callback");
        	}
        	else if(this.gfnIsNull(this.dsListInfo.getColumn(0, "DS_NAME")))
        	{
        		validate = false;
        		this.fnValidate_callback = function()
        		{
        			//this.divSearch.form.ctxtNO_CHASU.setFocus();
        		}

        		this.gfnAlert("성명이 입력되지 않았습니다!", "fnValidate_callback");
        	}
        	else if(this.gfnIsNull(this.dsListInfo.getColumn(0, "NO_TEL")))
        	{
        		validate = false;
        		this.fnValidate_callback = function()
        		{
        			//this.divSearch.form.ctxtNO_CHASU.setFocus();
        		}

        		this.gfnAlert("휴대폰번호가 입력되지 않았습니다!", "fnValidate_callback");
        	}

        	if(this.dsListInfo.getColumn(0, "TY_POSITION") == "2")
        	{
        		if(this.gfnIsNull(this.dsListInfo.getColumn(0, "CD_GUJA")))
        		{
        			validate = false;
        			this.fnValidate_callback = function()
        			{
        				//this.divSearch.form.ctxtNO_CHASU.setFocus();
        			}

        			this.gfnAlert("계좌가 입력되지 않았습니다!", "fnValidate_callback");
        		}
        	}else if(this.dsListInfo.getColumn(0, "TY_POSITION") == "F")
        	{
        		if(this.gfnIsNull(this.dsListInfo.getColumn(0, "CD_CARD")))
        		{
        			validate = false;
        			this.fnValidate_callback = function()
        			{
        				//this.divSearch.form.ctxtNO_CHASU.setFocus();
        			}

        			this.gfnAlert("카드정보가 입력되지 않았습니다!", "fnValidate_callback");
        		}else if(this.gfnIsNull(this.dsListInfo.getColumn(0, "NO_APPROVAL")))
        		{
        			validate = false;
        			this.fnValidate_callback = function()
        			{
        				//this.divSearch.form.ctxtNO_CHASU.setFocus();
        			}

        			this.gfnAlert("카드 승인번호가 입력되지 않았습니다!", "fnValidate_callback");
        		}
        	}



        	return validate;
        }


        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
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


        	return validate;
        };




        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "selectInfo") {
        		//this.fnSetButton();
        		//this.gfnGridAfterSelect(this.dxGrid);


        		if(this.dsListInfo.rowcount > 0){

        			if(this.dsListInfo.getColumn(0, "TY_PROVISIONAL") == "1"){
        				this.edtDS_PROVISIONAL.set_value("가계약");
        			}else if(this.dsListInfo.getColumn(0, "TY_PROVISIONAL") == "2"){
        				this.edtDS_PROVISIONAL.set_value("예약");
        			}

        			this.fnTyPositionSetVisible();
        		}

        		if(this.dsListLabel.rowcount > 0){
        			var NO_SIZE = this.dsListLabel.getColumn(0, "NO_SIZE"); //평
        			var TY_TYPE = this.dsListLabel.getColumn(0, "TY_TYPE"); //형
        			var TY_DISTRICT = this.dsListLabel.getColumn(0, "TY_DISTRICT"); //군
        			var RT_OPTION = this.dsListLabel.getColumn(0, "RT_OPTION"); //옵션
        			var DS_OPTION = this.dsListLabel.getColumn(0, "DS_OPTION"); //옵션명


        			if(this.dsListLabel.getColumn(0, "TY_STATE") == "K"){	// 분양상태
        				this.edtDS_PROVISIONAL.set_value("계약");
        			}else if(this.dsListLabel.getColumn(0, "TY_STATE") == "N"){
        				this.edtDS_PROVISIONAL.set_value("미계약");
        			}else if(this.dsListLabel.getColumn(0, "TY_STATE") == "G"){
        				this.edtDS_PROVISIONAL.set_value("가계약");
        			}else if(this.dsListLabel.getColumn(0, "TY_STATE") == "R"){
        				this.edtDS_PROVISIONAL.set_value("예약");
        			}else{
        				this.edtDS_PROVISIONAL.set_value("예약");
        			}

        			if(this.dsListLabel.getColumn(0, "TY_BUNYANG") == "1"){		// 분양구분
        				this.edtDS_BUNYANG.set_value("일반");
        			}else if(this.dsListLabel.getColumn(0, "TY_BUNYANG") == "2"){
        				this.edtDS_BUNYANG.set_value("조합");
        			}

        			this.staINFO.set_text(NO_SIZE + "평        " + TY_TYPE + "형        군: " + TY_DISTRICT + "        OPTION: " + RT_OPTION + "       " + DS_OPTION);
        		}

        		// 싱글폼 활성화 or 비활성화 처리
        		this.fnEnableSet();

        		// 그리드 조회
        		this.fnSelectList();

        	} else if (svcID == "selectList") {

        		//this.fnSetButton();
        		//this.gfnGridAfterSelect(this.dxGridSub);
        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.TY_STATUS = "";
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if (svcID == "execCont") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if (svcID == "execCancel") {
        		if (errorCode == 0) {
        			this.fnTextClear();
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

        	if(id == "cfCD_GUJA") {
        		dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
        		dsUserParam.setColumn(nrow, "FLAG", "3");
        	}

        	return true;
        };


        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;

        	var noGuja = "";
        	if(!this.gfnIsNull(arrData)) {
        		noGuja = arrData[0]["NO_GUJA"];
        	}

        	if(id == "cfCD_GUJA") {
        		this.dsListInfo.setColumn(0, "NO_GUJA", noGuja);
        	}
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/


        /************************************************************************
         * 서브 버튼 이벤트
         ************************************************************************/
        //검색조건 변경 이벤트
        this.dsSearch_Valuechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };



        // 가계약체결 버튼 클릭시 팝업화면 호출
        this.fnCont = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	//if (this.dsListSub.rowcount < 1) { return false; }

        	// 비활성화 처리되어있을때 처리
        	if(!this.mskAM_PROVISIONAL.enable){
        		this.fnTextClear();
        	}


        }

        this.fnTextClear =  function() {

        	this.tclDT_PROVISIONAL.set_value(this.gfnGetDate());
        	this.tclDT_PROVISIONAL.set_enable(true);

        	this.mskAM_PROVISIONAL.set_enable(true);

        	this.edtNO_TEL.set_value("");
        	this.edtNO_TEL.set_enable(true);

        	this.dsListInfo.setColumn(0, "NO_ZIPCODE", "");
        	this.dsListInfo.setColumn(0, "DS_ADDR2", "");
        	this.dsListInfo.setColumn(0, "DS_ADDR3", "");

        	this.cfNO_ZIPCODE.set_enable(true);
        	this.edtDS_ADDR3.set_enable(true);

        	this.dsListInfo.setColumn(0, "TY_GUJA", "N");

        	this.tclDT_PLANCONTRACT.set_value(this.gfnGetDate());
        	this.tclDT_PLANCONTRACT.set_enable(true);

        	this.edtDS_NAME.set_value("");
        	this.edtDS_NAME.set_enable(true);

        	this.edtNO_JUMIN.set_value("");
        	this.edtNO_JUMIN.set_enable(true);

        	this.dsListInfo.setColumn(0, "CD_GUJA", "");
        	this.dsListInfo.setColumn(0, "DS_BANK", "");
        	this.dsListInfo.setColumn(0, "NO_GUJA", "");
        	this.dsListInfo.setColumn(0, "CD_CARD", "");
        	this.dsListInfo.setColumn(0, "DS_CARD", "");
        	this.dsListInfo.setColumn(0, "NO_APPROVAL", "");
        	this.dsListInfo.setColumn(0, "TY_POSITION", "2");	// 은행선택

        	this.cfCD_GUJA.set_enable(true);
        	this.cfCD_CARD.set_enable(true);
        	this.cboTY_POSITION.set_enable(true);
        	this.edtNO_APPROVAL.set_enable(true);
        }

        // 가계약취소 버튼 클릭시 팝업화면 호출
        this.fnTransfer = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	//if (this.dsListSub.rowcount < 1) { return false; }

        	this.gfnConfirm("가계약을 취소 하시겠습니까?", "fnTransferCallback");

        }

        this.fnTransferCallback = function(strId, val) {

        	if(val == false) return;

        	this.dsExecCancel.clearData();

        	this.dsExecCancel.addRow();

        	this.dsExecCancel.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsExecCancel.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsExecCancel.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsExecCancel.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsExecCancel.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsExecCancel.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsExecCancel.setColumn(0, "ID_UPDATE", this.AuthClient.ID_USER);
        	this.dsExecCancel.setColumn(0, "NO_PROVISIONAL", this.dsListInfo.getColumn(0, "NO_PROVISIONAL"));

        	if (this.dsExecCancel.rowcount == 0) return;

        	var strSvcId    = "execCancel";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "execCancel=dsExecCancel";
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



        // 대체 버튼 클릭시 팝업화면 호출
        this.fnCancelCont = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if (this.dsListInfo.rowcount < 1) { return false; }


        	var param = {};
        	//var nRow = this.dsListSub.rowposition;

        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
            param.DONG = this.dsSearch.getColumn(0, "NO_DONG");
        	param.FLOOR = this.dsSearch.getColumn(0, "NO_FLOOR");
        	param.HO = this.dsSearch.getColumn(0, "NO_HO");
        	param.txtNO_PROVISIONAL = this.dsListInfo.getColumn(0, "NO_PROVISIONAL");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRB_PROVISIONALCHANGE", "fnCancelContCallback", param);

        }

        this.fnCancelContCallback =  function(svcID, val) {
        	if(val == true) {
        		this.FormBtns.Select.click();
        	}
        };

        // 해약 버튼 클릭시 팝업화면 호출
        this.fnProvisionalCancel = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if (this.dsListInfo.rowcount < 1) { return false; }


        	var param = {};
        	//var nRow = this.dsListSub.rowposition;

        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
            param.DONG = this.dsSearch.getColumn(0, "NO_DONG");
        	param.FLOOR = this.dsSearch.getColumn(0, "NO_FLOOR");
        	param.HO = this.dsSearch.getColumn(0, "NO_HO");

        	param.txtDT_PROVISIONAL = this.dsListInfo.getColumn(0, "DT_PROVISIONAL");
        	param.txtDT_PLANCONTRACT = this.dsListInfo.getColumn(0, "DT_PLANCONTRACT");
        	param.txtAM_PROVISIONAL = this.dsListInfo.getColumn(0, "AM_PROVISIONAL");
        	param.txtCD_GUJA = this.dsListInfo.getColumn(0, "CD_GUJA");
        	param.txtDS_BANK = this.dsListInfo.getColumn(0, "DS_BANK");
        	param.txtNO_GUJA = this.dsListInfo.getColumn(0, "NO_GUJA");
        	param.txtDS_NAME = this.dsListInfo.getColumn(0, "DS_NAME");
        	param.txtNO_JUMIN = this.dsListInfo.getColumn(0, "NO_JUMIN");
        	param.txtNO_TEL = this.dsListInfo.getColumn(0, "NO_TEL");
        	param.txtDS_ADDR1 = this.dsListInfo.getColumn(0, "DS_ADDR2");
        	param.txtDS_ADDR2 = this.dsListInfo.getColumn(0, "DS_ADDR3");
        	param.txtNO_PROVISIONAL = this.dsListInfo.getColumn(0, "NO_PROVISIONAL");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRB_DLGCANCELCHANGE", "fnProvisionalCancelCallback", param);

        }

        this.fnProvisionalCancelCallback =  function(svcID, val) {
        	if(val == true) {
        		this.FormBtns.Select.click();
        	}
        };



        this.dsListInfo_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){
        		this.TY_STATUS = "U";
        		this.gfnSetFormStatus(this, "U");	// 폼상태 업데이트

        		if(e.columnid == "TY_POSITION") {
        			this.fnTyPositionSetVisible();
        		}
        	}
        };


        // 수납처 값에 따라 보이고 안보이기(은행 or 카드)
        this.fnTyPositionSetVisible =  function() {
        	if(this.dsListInfo.getColumn(0, "TY_POSITION") == "2"){
        		this.divData.form.divDataTop.form.divDataTopGuja.set_visible(true);
        		this.divData.form.divDataTop.form.divDataTopCard.set_visible(false);

        		this.dsListInfo.set_enableevent(false);
        		this.dsListInfo.setColumn(0, "CD_CARD", "");
        		this.dsListInfo.setColumn(0, "DS_CARD", "");
        		this.dsListInfo.setColumn(0, "NO_APPROVAL", "");
        		this.dsListInfo.set_enableevent(true);
        	}else{
        		this.divData.form.divDataTop.form.divDataTopGuja.set_visible(false);
        		this.divData.form.divDataTop.form.divDataTopCard.set_visible(true);

        		this.dsListInfo.set_enableevent(false);
        		this.dsListInfo.setColumn(0, "CD_GUJA", "");
        		this.dsListInfo.setColumn(0, "DS_BANK", "");
        		this.dsListInfo.setColumn(0, "NO_GUJA", "");
        		this.dsListInfo.set_enableevent(true);
        	}
        };

        // 싱글폼 활성화 or 비활성화 처리
        this.fnEnableSet = function()
        {
        	if(this.edtDS_PROVISIONAL.value == "가계약"){
        		this.tclDT_PROVISIONAL.set_enable(false);
        		this.tclDT_PLANCONTRACT.set_enable(true);
        		this.mskAM_PROVISIONAL.set_enable(false);

        		this.edtNO_TEL.set_enable(true);
        		this.cfNO_ZIPCODE.set_enable(true);
        		this.edtDS_ADDR3.set_enable(true);

        		this.cfCD_GUJA.set_enable(false);
        		this.cfCD_CARD.set_enable(false);
        		this.cboTY_POSITION.set_enable(false);
        		//this.edtNO_GUJA.set_enable(false);
        		this.edtNO_APPROVAL.set_enable(false);

        		this.btnCont.set_enable(false);
        		this.btnTransfer.set_enable(true);
        		this.btnCancelCont.set_enable(true);
        		this.btnProvisionalCancel.set_enable(true);

        		if(this.dsListInfo.getColumn(0, "YN_VACNT") == "Y"){
        			if(this.dsListInfo.getColumn(0, "TY_GUJA") == "Y"){
        				this.dsListInfo.set_enableevent(false);
        				this.edtNO_GUJA.set_value(this.dsListInfo.getColumn(0, "VCD_GUJA"));

        				this.dsListInfo.setColumn(0, "CD_GUJA", this.dsListInfo.getColumn(0, "VNO_GUJA"));
        				this.dsListInfo.setColumn(0, "DS_BANK", this.dsListInfo.getColumn(0, "VDS_BANK"));
        				this.dsListInfo.set_enableevent(true);

        				this.edtNO_GUJA.set_enable(false);
        			}else{
        				this.edtNO_GUJA.set_enable(false);
        			}
        		}else{
        			this.dsListInfo.set_enableevent(false);
        			this.dsListInfo.setColumn(0, "TY_GUJA", "N");
        			this.dsListInfo.set_enableevent(true);

        			this.edtNO_GUJA.set_enable(false);
        		}
        	}else if(this.edtDS_PROVISIONAL.value == "미계약"){
        		this.dsListInfo.set_enableevent(false);
        		if(this.dsListInfo.getColumn(0, "YN_VACNT") == "Y"){
        			this.dsListInfo.setColumn(0, "TY_GUJA", "Y");
        		}else{
        			this.dsListInfo.setColumn(0, "TY_GUJA", "N");
        		}
        		this.dsListInfo.set_enableevent(true);

        		this.tclDT_PROVISIONAL.set_enable(false);
        		this.tclDT_PLANCONTRACT.set_enable(false);
        		this.mskAM_PROVISIONAL.set_enable(false);
        		this.edtNO_GUJA.set_enable(false);
        		this.edtNO_APPROVAL.set_enable(false);

        		this.cboTY_POSITION.set_enable(false);
        		this.cfCD_GUJA.set_enable(false);
        		this.cfCD_CARD.set_enable(false);

        		this.edtDS_NAME.set_enable(false);
        		this.edtNO_JUMIN.set_enable(false);
        		this.edtNO_TEL.set_enable(false);
        		this.cfNO_ZIPCODE.set_enable(false);
        		this.edtDS_ADDR3.set_enable(false);

        		this.btnCont.set_enable(true);
        		this.btnTransfer.set_enable(false);
        		this.btnCancelCont.set_enable(false);
        		this.btnProvisionalCancel.set_enable(false);
        	}else{
        		this.tclDT_PROVISIONAL.set_enable(false);
        		this.tclDT_PLANCONTRACT.set_enable(false);
        		this.mskAM_PROVISIONAL.set_enable(false);
        		this.edtNO_GUJA.set_enable(false);
        		this.edtNO_APPROVAL.set_enable(false);

        		this.edtDS_NAME.set_enable(false);
        		this.edtNO_JUMIN.set_enable(false);
        		this.edtNO_TEL.set_enable(false);
        		this.cfNO_ZIPCODE.set_enable(false);
        		this.edtDS_ADDR3.set_enable(false);

        		this.cboTY_POSITION.set_enable(false);
        		this.cfCD_GUJA.set_enable(false);
        		this.cfCD_CARD.set_enable(false);

        		this.btnCont.set_enable(false);
        		this.btnTransfer.set_enable(false);
        		this.btnCancelCont.set_enable(false);
        		this.btnProvisionalCancel.set_enable(false);
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.divDataTop.form.mskAM_PROVISIONAL.addEventHandler("onchanged",this.divData_mskAM_PAYMENTAMT_onchanged,this);
            this.divData.form.divDataTop.form.staDT_START01.addEventHandler("onclick",this.Common_onclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsListInfo.addEventHandler("onvaluechanged",this.dsListInfo_onvaluechanged,this);
        };
        this.loadIncludeScript("DRB_PROVISIONAL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
