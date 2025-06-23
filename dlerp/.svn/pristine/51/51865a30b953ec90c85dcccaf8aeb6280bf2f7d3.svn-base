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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">selectInfo</Col><Col id=\"SP\">DRBPR_PROVISIONAL_SELECT</Col></Row><Row><Col id=\"SP\">DRAPR_ASSIGNHOUSEINFO_SELECT</Col><Col id=\"TARGET\">selectLabel</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DRBPR_AGREEMENT_SELECT</Col></Row><Row><Col id=\"SP\">DRBPR_AGREEMENT_INSERT</Col><Col id=\"TARGET\">insert</Col></Row><Row><Col id=\"SP\">DRBPR_AGREEMENT_UPDATE</Col><Col id=\"TARGET\">update</Col></Row><Row><Col id=\"SP\">DRBPR_AGREEMENT_DELETE</Col><Col id=\"TARGET\">delete</Col></Row><Row><Col id=\"SP\">DRBPR_PROVISIONAL_CONTRACT</Col><Col id=\"TARGET\">execCont</Col></Row><Row><Col id=\"SP\">DRBPR_PROVISIONAL_TRANSFER_DT</Col><Col id=\"TARGET\">execCancel</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_PROVISIONAL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_ACNTUNIT\"/><Col id=\"NO_DONG\"/><Col id=\"NO_FLOOR\"/><Col id=\"NO_HO\"/><Col id=\"NO_PROVISIONAL\"/><Col id=\"DS_ACNTUNIT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_PROVISIONAL\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PROVISIONAL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BANK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_GUJA\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListLabel", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUJA", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">사용</Col><Col id=\"CD_CODE\">Y</Col></Row><Row><Col id=\"DS_CODE\">미사용</Col><Col id=\"CD_CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","60",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,"225","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE02","517","116","363","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE03","408","116","110","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("계좌");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE04","109","116","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE05","0","116","110","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("3");
            obj.set_text("가상계좌사용여부");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE08","517","188","363","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE09","408","188","110","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("5");
            obj.set_text("변경동층호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE10","109","188","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE11","0","188","110","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("7");
            obj.set_text("동층호변경일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN00","517","29","363","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN01","408","29","110","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("9");
            obj.set_text("가계약금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE18","109","58","771","59",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN1","109","29","300","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE19","0","58","110","59",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("12");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN","0","29","110","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("13");
            obj.set_text("가계약일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staINFO","0","0",null,"22","0",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("14");
            obj.set_text("");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("tclDT_PROVISIONAL","115","34","105","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("15");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Radio("rdoTY_GUJA","116","121","222","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("16");
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

            obj = new MaskEdit("mskAM_PROVISIONAL","522","34","152","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("17");
            obj.set_limitbymask("both");
            obj.set_format("###,###,###,###,###");
            obj.set_enable("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new TextArea("txtDS_REMARK","115","63","760","49",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("18");
            obj.set_enable("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta02","0","160",null,"22","0",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("19");
            obj.set_text("동층호변경");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("tclDT_CHANGED","115","193","105","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("20");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("edtNO_TRANSDONG","522","193","50","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("21");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_maxlength("3");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("edtNO_TRANSFLOOR","edtNO_TRANSDONG:5","193","33","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("22");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_maxlength("2");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("edtNO_TRANSHO","edtNO_TRANSFLOOR:5","193","50","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("23");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_maxlength("3");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("edtNO_GUJA","522","121","116","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("24");
            obj.set_enable("false");
            obj.set_readonly("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("cfCD_GUJA","edtNO_GUJA:5","121","232","20",null,null,"200",null,null,null,this.divData.form.divDataTop.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("25");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Button("btnOk","edtNO_TRANSHO:5","193","50","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("26");
            obj.set_text("확인");
            this.divData.form.divDataTop.addChild(obj.name, obj);

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

            obj = new BindItem("item16","divData.form.divDataTop.form.tclDT_PROVISIONAL","value","dsListInfo","DT_PROVISIONAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataTop.form.rdoTY_GUJA","value","dsListInfo","TY_GUJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch.form.ctxtDS_ACNTUNIT","value","dsSearch","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataTop.form.txtDS_REMARK","value","dsListInfo","DS_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataTop.form.edtNO_GUJA","value","dsListInfo","NO_GUJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataTop.form.cfCD_GUJA.form.CDTextBox","value","dsListInfo","CD_GUJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataTop.form.cfCD_GUJA.form.DSTextBox","value","dsListInfo","DS_BANK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataTop.form.mskAM_PROVISIONAL","value","dsListInfo","AM_PROVISIONAL");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DRB_PROVISIONALCHANGE.xfdl", function() {
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

        	this.tclDT_CHANGED.set_value(this.gfnGetDate());

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_ACNTUNIT)) {
        		this.dsSearch.setColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        		this.dsSearch.setColumn(0, "DS_ACNTUNIT", this.getOwnerFrame().DS_ACNTUNIT);
        		this.dsSearch.setColumn(0, "NO_DONG", this.getOwnerFrame().DONG);
        		this.dsSearch.setColumn(0, "NO_FLOOR", this.getOwnerFrame().FLOOR);
        		this.dsSearch.setColumn(0, "NO_HO", this.getOwnerFrame().HO);
        		this.dsSearch.setColumn(0, "NO_PROVISIONAL", this.getOwnerFrame().txtNO_PROVISIONAL);

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
        	this.btnCont = this.gfnFormButtonAdd("btnCont", "fnCont");  //본계약체결
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctxtCD_ACNTUNIT = this.divSearch.form.ctxtCD_ACNTUNIT;
        	this.ctxtDS_ACNTUNIT = this.divSearch.form.ctxtDS_ACNTUNIT;

        	this.staINFO = this.divData.form.divDataTop.form.staINFO;

        	this.tclDT_PROVISIONAL = this.divData.form.divDataTop.form.tclDT_PROVISIONAL;
        	this.mskAM_PROVISIONAL = this.divData.form.divDataTop.form.mskAM_PROVISIONAL;
        	this.txtDS_REMARK = this.divData.form.divDataTop.form.txtDS_REMARK;
        	this.rdoTY_GUJA = this.divData.form.divDataTop.form.rdoTY_GUJA;
        	this.edtNO_GUJA = this.divData.form.divDataTop.form.edtNO_GUJA;
        	this.cfCD_GUJA = this.divData.form.divDataTop.form.cfCD_GUJA;
        	this.tclDT_CHANGED = this.divData.form.divDataTop.form.tclDT_CHANGED;
        	this.edtNO_TRANSDONG = this.divData.form.divDataTop.form.edtNO_TRANSDONG;
        	this.edtNO_TRANSFLOOR = this.divData.form.divDataTop.form.edtNO_TRANSFLOOR;
        	this.edtNO_TRANSHO = this.divData.form.divDataTop.form.edtNO_TRANSHO;

        	this.dxGrid = this.divData.form.divDataBottom.form.objGrid;

        	//this.dxGrid.EnterCell = "fnGridSub_EnterCell";
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DR", "DRB_PROVISIONALCHANGE");

        	this.dxGrid.set_selecttype("cell");
        	//this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	//this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);

        	//검색조건 변경 이벤트
        	//this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_Valuechanged, this);

        	//this.cfNO_ZIPCODE.CodeFindName = "DZX_CFZIP_STREET";
        	//this.cfNO_ZIPCODE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.cfCD_GUJA.CodeFindName = "DRX_CFACCOUNT_ETC_CODEFIND";
        	this.cfCD_GUJA.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_GUJA.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//this.cfCD_CARD.CodeFindName = "DRX_CARD_CODEFIND";
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

        	this.dsExecCancel = new Dataset();
        	this.dsExecCancel.addColumn("CD_ACNTUNIT", "string");
        	this.dsExecCancel.addColumn("TY_GUBUN", "string");
        	this.dsExecCancel.addColumn("NO_CHASU", "string");
        	this.dsExecCancel.addColumn("NO_PROVISIONAL", "string");
        	this.dsExecCancel.addColumn("NO_DONG", "string");
        	this.dsExecCancel.addColumn("NO_FLOOR", "string");
        	this.dsExecCancel.addColumn("NO_HO", "string");
        	this.dsExecCancel.addColumn("DT_CHANGED", "string");
        	this.dsExecCancel.addColumn("NO_TRANSDONG", "string");
        	this.dsExecCancel.addColumn("NO_TRANSFLOOR", "string");
        	this.dsExecCancel.addColumn("NO_TRANSHO", "string");
        	this.dsExecCancel.addColumn("ID_UPDATE", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_ACNTUNIT", "string");
        	this.dsInsert.addColumn("TY_GUBUN", "string");
        	this.dsInsert.addColumn("NO_CHASU", "string");
        	this.dsInsert.addColumn("NO_DONG", "string");
        	this.dsInsert.addColumn("NO_FLOOR", "string");
        	this.dsInsert.addColumn("NO_HO", "string");
        	this.dsInsert.addColumn("NO_UNIONMEMBER", "string");
        	this.dsInsert.addColumn("NO_SIZE", "bigdecimal");
        	this.dsInsert.addColumn("TY_TYPE", "string");
        	this.dsInsert.addColumn("TY_DISTRICT", "string");
        	this.dsInsert.addColumn("RT_OPTION", "string");
        	this.dsInsert.addColumn("TY_NAPIP", "string");
        	this.dsInsert.addColumn("NO_NAPCHA", "string");
        	this.dsInsert.addColumn("DT_STARTAGREE", "string");
        	this.dsInsert.addColumn("DT_ENDAGREE", "string");
        	this.dsInsert.addColumn("AM_SELLING_HANDLE", "bigdecimal");
        	this.dsInsert.addColumn("AM_LAND", "bigdecimal");
        	this.dsInsert.addColumn("AM_BUILDING", "bigdecimal");
        	this.dsInsert.addColumn("AM_VAT", "bigdecimal");
        	this.dsInsert.addColumn("AM_SELLING", "bigdecimal");
        	this.dsInsert.addColumn("ID_INSERT", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_ACNTUNIT", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("NO_CHASU", "string");
        	this.dsUpdate.addColumn("NO_DONG", "string");
        	this.dsUpdate.addColumn("NO_FLOOR", "string");
        	this.dsUpdate.addColumn("NO_HO", "string");
        	this.dsUpdate.addColumn("NO_UNIONMEMBER", "string");
        	this.dsUpdate.addColumn("NO_SIZE", "bigdecimal");
        	this.dsUpdate.addColumn("TY_TYPE", "string");
        	this.dsUpdate.addColumn("TY_DISTRICT", "string");
        	this.dsUpdate.addColumn("RT_OPTION", "string");
        	this.dsUpdate.addColumn("TY_NAPIP", "string");
        	this.dsUpdate.addColumn("NO_NAPCHA", "string");
        	this.dsUpdate.addColumn("DT_STARTAGREE", "string");
        	this.dsUpdate.addColumn("DT_ENDAGREE", "string");
        	this.dsUpdate.addColumn("AM_SELLING_HANDLE", "bigdecimal");
        	this.dsUpdate.addColumn("AM_LAND", "bigdecimal");
        	this.dsUpdate.addColumn("AM_BUILDING", "bigdecimal");
        	this.dsUpdate.addColumn("AM_VAT", "bigdecimal");
        	this.dsUpdate.addColumn("AM_SELLING", "bigdecimal");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_ACNTUNIT", "string");
        	this.dsDelete.addColumn("TY_GUBUN", "string");
        	this.dsDelete.addColumn("NO_CHASU", "string");
        	this.dsDelete.addColumn("NO_DONG", "string");
        	this.dsDelete.addColumn("NO_FLOOR", "string");
        	this.dsDelete.addColumn("NO_HO", "string");
        	this.dsDelete.addColumn("NO_UNIONMEMBER", "string");
        	this.dsDelete.addColumn("TY_NAPIP", "string");
        	this.dsDelete.addColumn("NO_NAPCHA", "string");
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
        	var nrow = this.gfnGridAdd(this.dxGrid);
        	//this.gfnSetFormStatus(this, "I");	// 폼상태 업데이트
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        	//this.gfnSetFormStatus(this, "D");	// 폼상태 업데이트
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);

        		var tyNapip = "";
        		if(this.dsList.getColumn(i, "TY_NAPIP") == "계약금"){
        			tyNapip = "C";
        		}else if(this.dsList.getColumn(i, "TY_NAPIP") == "중도금"){
        			tyNapip = "J";
        		}else if(this.dsList.getColumn(i, "TY_NAPIP") == "잔금"){
        			tyNapip = "R";
        		}else if(this.dsList.getColumn(i, "TY_NAPIP") == "재계약"){
        			tyNapip = "S";
        		}else if(this.dsList.getColumn(i, "TY_NAPIP") == "분양전환계약금"){
        			tyNapip = "T";
        		}else if(this.dsList.getColumn(i, "TY_NAPIP") == "분양전환중도금"){
        			tyNapip = "V";
        		}else if(this.dsList.getColumn(i, "TY_NAPIP") == "분양전환잔금"){
        			tyNapip = "X";
        		}

        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        				this.dsInsert.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        				this.dsInsert.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        				this.dsInsert.setColumn(nrow, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        				this.dsInsert.setColumn(nrow, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        				this.dsInsert.setColumn(nrow, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        				this.dsInsert.setColumn(nrow, "NO_UNIONMEMBER", "");
        				this.dsInsert.setColumn(nrow, "NO_SIZE", this.dsListLabel.getColumn(0, "NO_SIZE"));
        				this.dsInsert.setColumn(nrow, "TY_TYPE", this.dsListLabel.getColumn(0, "TY_TYPE"));
        				this.dsInsert.setColumn(nrow, "TY_DISTRICT", this.dsListLabel.getColumn(0, "TY_DISTRICT"));
        				this.dsInsert.setColumn(nrow, "RT_OPTION", this.dsListLabel.getColumn(0, "RT_OPTION"));
        				this.dsInsert.setColumn(nrow, "TY_NAPIP", tyNapip);
        				this.dsInsert.setColumn(nrow, "NO_NAPCHA", this.dsList.getColumn(i, "NO_NAPCHA"));
        				this.dsInsert.setColumn(nrow, "DT_STARTAGREE", nexacro.replaceAll(this.dsList.getColumn(i, "DT_STARTAGREE"), "-", ""));
        				this.dsInsert.setColumn(nrow, "DT_ENDAGREE", nexacro.replaceAll(this.dsList.getColumn(i, "DT_ENDAGREE"), "-", ""));
        				this.dsInsert.setColumn(nrow, "AM_SELLING_HANDLE", this.dsList.getColumn(i, "처리금액"));
        				this.dsInsert.setColumn(nrow, "AM_LAND", this.dsList.getColumn(i, "AM_LAND"));
        				this.dsInsert.setColumn(nrow, "AM_BUILDING", this.dsList.getColumn(i, "AM_BUILDING"));
        				this.dsInsert.setColumn(nrow, "AM_VAT", this.dsList.getColumn(i, "AM_VAT"));
        				this.dsInsert.setColumn(nrow, "AM_SELLING", this.dsList.getColumn(i, "AM_SELLING"));
        				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        				this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        				this.dsUpdate.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        				this.dsUpdate.setColumn(nrow, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        				this.dsUpdate.setColumn(nrow, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        				this.dsUpdate.setColumn(nrow, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        				this.dsUpdate.setColumn(nrow, "NO_UNIONMEMBER", "");
        				this.dsUpdate.setColumn(nrow, "NO_SIZE", this.dsListLabel.getColumn(0, "NO_SIZE"));
        				this.dsUpdate.setColumn(nrow, "TY_TYPE", this.dsListLabel.getColumn(0, "TY_TYPE"));
        				this.dsUpdate.setColumn(nrow, "TY_DISTRICT", this.dsListLabel.getColumn(0, "TY_DISTRICT"));
        				this.dsUpdate.setColumn(nrow, "RT_OPTION", this.dsListLabel.getColumn(0, "RT_OPTION"));
        				this.dsUpdate.setColumn(nrow, "TY_NAPIP", tyNapip);
        				this.dsUpdate.setColumn(nrow, "NO_NAPCHA", this.dsList.getColumn(i, "NO_NAPCHA"));
        				this.dsUpdate.setColumn(nrow, "DT_STARTAGREE", nexacro.replaceAll(this.dsList.getColumn(i, "DT_STARTAGREE"), "-", ""));
        				this.dsUpdate.setColumn(nrow, "DT_ENDAGREE", nexacro.replaceAll(this.dsList.getColumn(i, "DT_ENDAGREE"), "-", ""));
        				this.dsUpdate.setColumn(nrow, "AM_SELLING_HANDLE", this.dsList.getColumn(i, "처리금액"));
        				this.dsUpdate.setColumn(nrow, "AM_LAND", this.dsList.getColumn(i, "AM_LAND"));
        				this.dsUpdate.setColumn(nrow, "AM_BUILDING", this.dsList.getColumn(i, "AM_BUILDING"));
        				this.dsUpdate.setColumn(nrow, "AM_VAT", this.dsList.getColumn(i, "AM_VAT"));
        				this.dsUpdate.setColumn(nrow, "AM_SELLING", this.dsList.getColumn(i, "AM_SELLING"));
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        				this.dsDelete.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        				this.dsDelete.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        				this.dsDelete.setColumn(nrow, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        				this.dsDelete.setColumn(nrow, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        				this.dsDelete.setColumn(nrow, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        				this.dsDelete.setColumn(nrow, "NO_UNIONMEMBER", "");
        				this.dsDelete.setColumn(nrow, "TY_NAPIP", tyNapip);
        				this.dsDelete.setColumn(nrow, "NO_NAPCHA", this.dsList.getColumn(i, "NO_NAPCHA"));
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
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

        		if(this.dsListLabel.rowcount > 0){
        			var NO_SIZE = this.dsListLabel.getColumn(0, "NO_SIZE"); //평
        			var TY_TYPE = this.dsListLabel.getColumn(0, "TY_TYPE"); //형
        			var TY_DISTRICT = this.dsListLabel.getColumn(0, "TY_DISTRICT"); //군
        			var RT_OPTION = this.dsListLabel.getColumn(0, "RT_OPTION"); //옵션
        			var DS_OPTION = this.dsListLabel.getColumn(0, "DS_OPTION"); //옵션명

        			this.staINFO.set_text(NO_SIZE + "평        " + TY_TYPE + "형        군: " + TY_DISTRICT + "        OPTION: " + RT_OPTION + "       " + DS_OPTION);
        		}

        		// 싱글폼 활성화 or 비활성화 처리
        		//this.fnEnableSet();

        		// 그리드 조회
        		this.fnSelectList();

        	} else if (svcID == "selectList") {

        		//this.fnSetButton();
        		//this.gfnGridAfterSelect(this.dxGridSub);
        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if (svcID == "execCancel") {
        		if (errorCode == 0) {
        			//this.FormBtns.Select.click();
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


        // 본계약체결 버튼 클릭시 팝업화면 호출
        this.fnCont = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if (this.dsList.rowcount < 1) {
        		this.gfnAlert("계약금을 입력하셔야 합니다.");
        		return;
        	}

        	var param = {};
        	//var nRow = this.dsListSub.rowposition;

            param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        	param.NO_PROVISIONAL = this.dsSearch.getColumn(0, "NO_PROVISIONAL");
        	param.SCOPE = "1";
        	param.DONG = this.dsSearch.getColumn(0, "NO_DONG");
        	param.FLOOR = this.dsSearch.getColumn(0, "NO_FLOOR");
        	param.HO = this.dsSearch.getColumn(0, "NO_HO");
        	param.UNIONMEMBER = "";
        	param.NO_SIZE = this.dsListLabel.getColumn(0, "NO_SIZE");
        	param.TY_TYPE = this.dsListLabel.getColumn(0, "TY_TYPE");
        	param.TY_DISTRICT = this.dsListLabel.getColumn(0, "TY_DISTRICT");
        	param.RT_OPTION = this.dsListLabel.getColumn(0, "RT_OPTION");
        	param.DS_OPTION = this.dsListLabel.getColumn(0, "DS_OPTION");
        	param.AM_RECEIVED = nexacro.toNumber(this.dsList.getColumn(0, "AM_SELLING"),0) - nexacro.toNumber(this.dsListInfo.getColumn(0, "AM_PROVISIONAL"),0);

        	if(this.dsListInfo.getColumn(0, "YN_VACNT") == "Y"){
        		param.VCD_GUJA = this.dsListInfo.getColumn(0, "VCD_GUJA");
        		param.VNO_GUJA = this.dsListInfo.getColumn(0, "VNO_GUJA");
        		param.VDS_BANK = this.dsListInfo.getColumn(0, "VDS_BANK");
        	}

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRB_DLGPROVISIONALCONTRACT", "fnContCallback", param);

        }

        this.fnContCallback =  function(svcID, val) {
        	if(val == true) {
        		this.FormBtns.Select.click();
        	}
        };


        this.dsListInfo_onvaluechanged = function(obj,e)
        {
        	/*
        	if(e.oldvalue != e.newvalue){
        		this.TY_STATUS = "U";
        		this.gfnSetFormStatus(this, "U");	// 폼상태 업데이트

        		if(e.columnid == "TY_POSITION") {
        			this.fnTyPositionSetVisible();
        		}
        	}
        	*/
        };


        /*
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
        				this.edtNO_GUJA.set_value(this.dsListInfo.getColumn(0, "VCD_GUJA"));

        				this.dsListInfo.setColumn(0, "CD_GUJA", this.dsListInfo.getColumn(0, "VNO_GUJA"));
        				this.dsListInfo.setColumn(0, "DS_BANK", this.dsListInfo.getColumn(0, "VDS_BANK"));

        				this.edtNO_GUJA.set_enable(false);
        			}else{
        				this.edtNO_GUJA.set_enable(false);
        			}
        		}else{
        			this.dsListInfo.setColumn(0, "TY_GUJA", "N");

        			this.edtNO_GUJA.set_enable(false);
        		}
        	}else if(this.edtDS_PROVISIONAL.value == "미계약"){
        		if(this.dsListInfo.getColumn(0, "YN_VACNT") == "Y"){
        			this.dsListInfo.setColumn(0, "TY_GUJA", "Y");
        		}else{
        			this.dsListInfo.setColumn(0, "TY_GUJA", "N");
        		}

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
        */

        // 확인 버튼 클릭 이벤트
        this.divData_divDataTop_btnOk_onclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.edtNO_TRANSDONG.value)){
        		this.gfnAlert("동을 입력하셔야 합니다.");
        		return;
        	}
        	if(this.gfnIsNull(this.edtNO_TRANSFLOOR.value)){
        		this.gfnAlert("층을 입력하셔야 합니다.");
        		return;
        	}
        	if(this.gfnIsNull(this.edtNO_TRANSHO.value)){
        		this.gfnAlert("호를 입력하셔야 합니다.");
        		return;
        	}

        	this.fnExecCancel();
        };

        this.fnExecCancel = function() {

        	this.dsExecCancel.clearData();
        	this.dsExecCancel.addRow();

        	this.dsExecCancel.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsExecCancel.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsExecCancel.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsExecCancel.setColumn(0, "NO_PROVISIONAL", this.dsSearch.getColumn(0, "NO_PROVISIONAL"));
        	this.dsExecCancel.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsExecCancel.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsExecCancel.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsExecCancel.setColumn(0, "DT_CHANGED", nexacro.replaceAll(this.tclDT_CHANGED.value, "-", ""));
        	this.dsExecCancel.setColumn(0, "NO_TRANSDONG", this.edtNO_TRANSDONG.value);
        	this.dsExecCancel.setColumn(0, "NO_TRANSFLOOR", this.edtNO_TRANSFLOOR.value);
        	this.dsExecCancel.setColumn(0, "NO_TRANSHO", this.edtNO_TRANSHO.value);
        	this.dsExecCancel.setColumn(0, "ID_UPDATE", this.AuthClient.ID_USER);

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

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		if(e.columnid == "DT_STARTAGREE") {
        			if(!this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition,"DT_STARTAGREE"))){
        				this.dsList.setColumn(this.dsList.rowposition, "DT_ENDAGREE", this.dsList.getColumn(this.dsList.rowposition,"DT_STARTAGREE"));
        			}
        		}

        		this.fnSbCalcAmount();
        	}
        };

        this.fnSbCalcAmount = function()
        {
        	var i;
        	var gap_Land = 0;
        	var gap_Building = 0;
        	var gap_Vat = 0;
        	var am_totalLand = 0;
        	var am_totalBuilding = 0;
        	var am_totalVat = 0;

        	var am_Land = 0;
        	var am_Building = 0;
        	var am_Vat = 0;
        	var am_Selling = 0;
        	var rt_Division = 0;

        	var nRow = this.dsList.rowposition;

        	if(this.dsList.getColumn(nRow,"처리금액") > 0){
        		rt_Division = nexacro.toNumber(this.dsListLabel.getColumn(0,"AM_SELLING"),0) / nexacro.toNumber(this.dsList.getColumn(nRow,"처리금액"),0);

        		am_Land = Math.floor(nexacro.toNumber(this.dsListLabel.getColumn(0,"AM_LAND"),0) / rt_Division);
        		am_Building = Math.floor(nexacro.toNumber(this.dsListLabel.getColumn(0,"AM_BUILDING"),0) / rt_Division);
        		am_Vat = Math.floor(nexacro.toNumber(this.dsListLabel.getColumn(0,"AM_VAT"),0) / rt_Division);

        		am_Selling = am_Land + am_Building + am_Vat;

        		if (this.dsListLabel.getColumn(0,"AM_VAT") > 0){
        			if (nexacro.toNumber(this.dsList.getColumn(nRow,"처리금액"),0) - am_Selling == 1)
        			{
        				am_Vat++;
        			}
        			else if (nexacro.toNumber(this.dsList.getColumn(nRow,"처리금액"),0) - am_Selling == 2)
        			{
        				am_Vat++;
        				am_Building++;
        			}
        			else if (nexacro.toNumber(this.dsList.getColumn(nRow,"처리금액"),0) - am_Selling == 3)
        			{
        				am_Vat++;
        				am_Building++;
        				am_Land++;
        			}
        		}
        		else
        		{
        			if (nexacro.toNumber(this.dsList.getColumn(nRow,"처리금액"),0) - am_Selling == 1)
        			{
        				am_Building++;
        			}
        			else if (nexacro.toNumber(this.dsList.getColumn(nRow,"처리금액"),0) - am_Selling == 2)
        			{
        				am_Building++;
        				am_Land++;
        			}
        		}

        		am_Selling = am_Land + am_Building + am_Vat;

        		this.dsList.setColumn(nRow, "AM_LAND", am_Land);
        		this.dsList.setColumn(nRow, "AM_BUILDING", am_Building);
        		this.dsList.setColumn(nRow, "AM_VAT", am_Vat);
        		this.dsList.setColumn(nRow, "AM_SELLING", am_Selling);
        	}
        };


        this.divSearch_ctxt_onkeyup = function(obj,e)
        {
        	if (obj.value.length == obj.maxlength) {
        		switch (obj.id) {
        			case "edtNO_TRANSDONG":
        				this.edtNO_TRANSFLOOR.setFocus();
        				break;
        			case "edtNO_TRANSFLOOR":
        				this.edtNO_TRANSHO.setFocus();
        				break;
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.divDataTop.form.mskAM_PROVISIONAL.addEventHandler("onchanged",this.divData_mskAM_PAYMENTAMT_onchanged,this);
            this.divData.form.divDataTop.form.txtDS_REMARK.addEventHandler("oninput",this.divData01_txtDS_REMARK_R_oninput,this);
            this.divData.form.divDataTop.form.edtNO_TRANSDONG.addEventHandler("onkeyup",this.divSearch_ctxt_onkeyup,this);
            this.divData.form.divDataTop.form.edtNO_TRANSFLOOR.addEventHandler("onkeyup",this.divSearch_ctxt_onkeyup,this);
            this.divData.form.divDataTop.form.edtNO_TRANSHO.addEventHandler("onkeyup",this.divSearch_ctxt_onkeyup,this);
            this.divData.form.divDataTop.form.btnOk.addEventHandler("onclick",this.divData_divDataTop_btnOk_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsListInfo.addEventHandler("onvaluechanged",this.dsListInfo_onvaluechanged,this);
        };
        this.loadIncludeScript("DRB_PROVISIONALCHANGE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
