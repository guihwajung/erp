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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DRFPR_CONTRACTOR_ITEM_SELECT</Col></Row><Row><Col id=\"SP\">DRFPR_CONTRACTOR_ITEM_AGREEMENT</Col><Col id=\"TARGET\">selectInfo</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DRFPR_CONTRACTOR_ITEM_AGREEMENT_SELECT</Col></Row><Row><Col id=\"SP\">DRFPR_CONTRACTOR_ITEM_AGREEMENT_INSERT</Col><Col id=\"TARGET\">insert</Col></Row><Row><Col id=\"SP\">DRFPR_CONTRACTOR_ITEM_AGREEMENT_UPDATE</Col><Col id=\"TARGET\">update</Col></Row><Row><Col id=\"SP\">DRFPR_CONTRACTOR_ITEM_AGREEMENT_DELETE</Col><Col id=\"TARGET\">delete</Col></Row><Row><Col id=\"SP\">DRFPR_CONTRACT_CANCEL_ITEM_DT</Col><Col id=\"TARGET\">exec</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_UNIONMEMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_ACNTUNIT\"/><Col id=\"NO_DONG\"/><Col id=\"NO_FLOOR\"/><Col id=\"NO_HO\"/><Col id=\"NO_UNIONMEMBER\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONTRACT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_OFFICETEL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_MOBILE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TOTSUP\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TOTVAT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TOTAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
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

            obj = new Div("divData","0","60",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,"330","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataTop1","0","-5",null,"91","0",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staINFO","0","0",null,"22","0",null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop1.form);
            obj.set_taborder("0");
            obj.set_text("계약방식 : ");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.form.divDataTop1.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE1","99","58","270","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop1.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.form.divDataTop1.addChild(obj.name, obj);

            obj = new Edit("edtNO_TEL","105","63","258","20",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop1.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop.form.divDataTop1.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN1","99","29","270","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop1.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.form.divDataTop1.addChild(obj.name, obj);

            obj = new Edit("edtDS_CONTRACTOR","105","34","258","20",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop1.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop.form.divDataTop1.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE","0","58","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop1.form);
            obj.set_taborder("5");
            obj.set_text("☎(자택)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.form.divDataTop1.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN","0","29","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop1.form);
            obj.set_taborder("6");
            obj.set_text("계약자 성명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.form.divDataTop1.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN00","467","29","270","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop1.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.form.divDataTop1.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE00","467","58","270","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop1.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.form.divDataTop1.addChild(obj.name, obj);

            obj = new Edit("edtNO_OFFICETEL","473","63","258","20",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop1.form);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop.form.divDataTop1.addChild(obj.name, obj);

            obj = new Edit("edtNO_CONTRACT","473","34","258","20",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop1.form);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop.form.divDataTop1.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE01","368","58","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop1.form);
            obj.set_taborder("11");
            obj.set_text("☎(직장)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.form.divDataTop1.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN01","368","29","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop1.form);
            obj.set_taborder("12");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.form.divDataTop1.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN02","835","29","270","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop1.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.form.divDataTop1.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE02","835","58","270","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop1.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.form.divDataTop1.addChild(obj.name, obj);

            obj = new Edit("edtNO_MOBILE","841","63","258","20",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop1.form);
            obj.set_taborder("15");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop.form.divDataTop1.addChild(obj.name, obj);

            obj = new Edit("edtNO_JUMIN","841","34","258","20",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop1.form);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop.form.divDataTop1.addChild(obj.name, obj);

            obj = new Static("statxtNO_ZIP_CODE03","736","58","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop1.form);
            obj.set_taborder("17");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.form.divDataTop1.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN03","736","29","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop1.form);
            obj.set_taborder("18");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.form.divDataTop1.addChild(obj.name, obj);

            obj = new Static("sta01","0","163","100.00%","22",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("계약품목");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataTop2","0","divDataTop1:9",null,"59","0",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("3");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta02","0","0",null,"22","0",null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop2.form);
            obj.set_taborder("0");
            obj.set_text("총계약의 합계");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.form.divDataTop2.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN1","99","29","270","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop2.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.form.divDataTop2.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN","0","29","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop2.form);
            obj.set_taborder("2");
            obj.set_text("공급가");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.form.divDataTop2.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_TOTSUP","105","34","258","20",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop2.form);
            obj.set_taborder("3");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.form.divDataTop.form.divDataTop2.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN00","467","29","270","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop2.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.form.divDataTop2.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_TOTVAT","473","34","258","20",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop2.form);
            obj.set_taborder("5");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.form.divDataTop.form.divDataTop2.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN01","368","29","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop2.form);
            obj.set_taborder("6");
            obj.set_text("부가세");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.form.divDataTop2.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN02","835","29","270","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop2.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.form.divDataTop2.addChild(obj.name, obj);

            obj = new MaskEdit("edtAM_TOTAL","841","34","258","20",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop2.form);
            obj.set_taborder("8");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.form.divDataTop.form.divDataTop2.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN03","736","29","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataTop2.form);
            obj.set_taborder("9");
            obj.set_text("합계");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.form.divDataTop2.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:14",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divDataTop:15",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","0",null,"22","0",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("약정내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","sta02:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);
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

            obj = new BindItem("item4","divData.form.divDataTop.form.divDataTop1.form.edtDS_CONTRACTOR","value","dsListInfo","DS_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataTop.form.divDataTop1.form.edtNO_TEL","value","dsListInfo","NO_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataTop.form.divDataTop2.form.edtAM_TOTSUP","value","dsListInfo","AM_TOTSUP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataTop.form.divDataTop2.form.edtAM_TOTVAT","value","dsListInfo","AM_TOTVAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataTop.form.divDataTop1.form.edtNO_OFFICETEL","value","dsListInfo","NO_OFFICETEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataTop.form.divDataTop1.form.edtNO_JUMIN","value","dsListInfo","NO_JUMIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataTop.form.divDataTop1.form.edtNO_MOBILE","value","dsListInfo","NO_MOBILE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataTop.form.divDataTop2.form.edtAM_TOTAL","value","dsListInfo","AM_TOTAL");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DRF_AGREEMENTITEM.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.YN_CONT = "";            //계약 여부
        this.YN_ITEM = "";            //수납 여부
        this.YN_TOTCONTRACT = "";     //품목별계약("N"), 일괄계약("Y")
        this.NO_CONTRACT = "";        //현재 계약품목의 약정내역

        this.YN_VACNT = "";
        this.CD_GUJA = "";
        this.NO_GUJA = "";
        this.DS_BANK = "";

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
        		this.dsSearch.setColumn(0, "NO_DONG", this.getOwnerFrame().NO_DONG);
        		this.dsSearch.setColumn(0, "NO_FLOOR", this.getOwnerFrame().NO_FLOOR);
        		this.dsSearch.setColumn(0, "NO_HO", this.getOwnerFrame().NO_HO);
        		this.dsSearch.setColumn(0, "NO_UNIONMEMBER", this.getOwnerFrame().NO_UNIONMEMBER);
        		this.YN_TOTCONTRACT = this.getOwnerFrame().YN_TOTCONTRACT;

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
        	this.btnItemReceipt = this.gfnFormButtonAdd("btnItemReceipt", "fnItemReceipt");  //계약금수납

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctxtCD_ACNTUNIT = this.divSearch.form.ctxtCD_ACNTUNIT;
        	this.ctxtDS_ACNTUNIT = this.divSearch.form.ctxtDS_ACNTUNIT;

        	this.staINFO = this.divData.form.divDataTop.form.divDataTop1.form.staINFO;
        	this.edtNO_CONTRACT = this.divData.form.divDataTop.form.divDataTop1.form.edtNO_CONTRACT;

        	this.edtAM_TOTSUP = this.divData.form.divDataTop.form.divDataTop2.form.edtAM_TOTSUP;
        	this.edtAM_TOTVAT = this.divData.form.divDataTop.form.divDataTop2.form.edtAM_TOTVAT;
        	this.edtAM_TOTAL = this.divData.form.divDataTop.form.divDataTop2.form.edtAM_TOTAL;

        	this.dxGrid = this.divData.form.divDataTop.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataBottom.form.objGridSub;

        	this.dxGridSub.EnterCell = "fnGridSub_EnterCell";
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DR", "DRF_AGREEMENTITEM_SUB");
        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DR", "DRF_AGREEMENTITEM");

        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);

        	this.dsListSub.addEventHandler("onvaluechanged", this.dsListSub_onvaluechanged, this);

        	//검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_Valuechanged, this);

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

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelectSub.addColumn("TY_GUBUN", "string");
        	this.dsSelectSub.addColumn("NO_CHASU", "string");
        	this.dsSelectSub.addColumn("NO_DONG", "string");
        	this.dsSelectSub.addColumn("NO_FLOOR", "string");
        	this.dsSelectSub.addColumn("NO_HO", "string");
        	this.dsSelectSub.addColumn("NO_UNIONMEMBER", "string");
        	this.dsSelectSub.addColumn("NO_CONTRACT", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("CD_ACNTUNIT", "string");
        	this.dsExec.addColumn("TY_GUBUN", "string");
        	this.dsExec.addColumn("NO_CHASU", "string");
        	this.dsExec.addColumn("NO_DONG", "string");
        	this.dsExec.addColumn("NO_FLOOR", "string");
        	this.dsExec.addColumn("NO_HO", "string");
        	this.dsExec.addColumn("NO_UNIONMEMBER", "string");
        	this.dsExec.addColumn("ID_UPDATE", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_ACNTUNIT", "string");
        	this.dsInsert.addColumn("TY_GUBUN", "string");
        	this.dsInsert.addColumn("NO_CHASU", "string");
        	this.dsInsert.addColumn("NO_DONG", "string");
        	this.dsInsert.addColumn("NO_FLOOR", "string");
        	this.dsInsert.addColumn("NO_HO", "string");
        	this.dsInsert.addColumn("NO_UNIONMEMBER", "string");
        	this.dsInsert.addColumn("NO_CONTRACT", "string");
        	this.dsInsert.addColumn("TY_NAPIP", "string");
        	this.dsInsert.addColumn("NO_NAPCHA", "string");
        	this.dsInsert.addColumn("DT_STARTAGREE", "string");
        	this.dsInsert.addColumn("DT_ENDAGREE", "string");
        	this.dsInsert.addColumn("AM_SUPPLY", "int");
        	this.dsInsert.addColumn("AM_VAT", "int");
        	this.dsInsert.addColumn("AM_TOTAL", "int");
        	this.dsInsert.addColumn("ID_INSERT", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_ACNTUNIT", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("NO_CHASU", "string");
        	this.dsUpdate.addColumn("NO_DONG", "string");
        	this.dsUpdate.addColumn("NO_FLOOR", "string");
        	this.dsUpdate.addColumn("NO_HO", "string");
        	this.dsUpdate.addColumn("NO_UNIONMEMBER", "string");
        	this.dsUpdate.addColumn("NO_CONTRACT", "string");
        	this.dsUpdate.addColumn("TY_NAPIP", "string");
        	this.dsUpdate.addColumn("NO_NAPCHA", "string");
        	this.dsUpdate.addColumn("DT_STARTAGREE", "string");
        	this.dsUpdate.addColumn("DT_ENDAGREE", "string");
        	this.dsUpdate.addColumn("AM_SUPPLY", "int");
        	this.dsUpdate.addColumn("AM_VAT", "int");
        	this.dsUpdate.addColumn("AM_TOTAL", "int");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_ACNTUNIT", "string");
        	this.dsDelete.addColumn("TY_GUBUN", "string");
        	this.dsDelete.addColumn("NO_CHASU", "string");
        	this.dsDelete.addColumn("NO_DONG", "string");
        	this.dsDelete.addColumn("NO_FLOOR", "string");
        	this.dsDelete.addColumn("NO_HO", "string");
        	this.dsDelete.addColumn("NO_UNIONMEMBER", "string");
        	this.dsDelete.addColumn("NO_CONTRACT", "string");
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
        	this.dsSelect.setColumn(0, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect selectInfo=dsSelect";
        	var outData     = "dsList=select0 dsListInfo=selectInfo0";
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
        	var nrow = this.gfnGridAdd(this.dxGridSub);
        	//this.gfnSetFormStatus(this, "I");	// 폼상태 업데이트
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGridSub);
        	//this.gfnSetFormStatus(this, "D");	// 폼상태 업데이트
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGridSub)) return;

        	if (!this.fnAmountChk()) return;

        	this.dxGridSub.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		if(this.dsListSub.getColumn(i, "NO_NAPCHA").length != 2){
        			this.gfnAlert("납입차수는 2자리로 입력하셔야 합니다.");
        			return;
        		}

        		if(this.gfnGetDiffDate(nexacro.replaceAll(this.dsListSub.getColumn(i, "DT_STARTAGREE"), "-", ""), nexacro.replaceAll(this.dsListSub.getColumn(i, "DT_ENDAGREE"), "-", "")) <= -1){
        			this.gfnAlert("약정종료일자는 약정시작일자보다 크거나 같아야 합니다.");
        			return;
        		}

        		var flag = this.gfnGetFlag(this.dsListSub, i);

        		var tyNapip = "";

        		if(this.dsListSub.getColumn(i, "TY_NAPIP") == "계약금"){
        			tyNapip = "C";
        		}else if(this.dsListSub.getColumn(i, "TY_NAPIP") == "중도금"){
        			tyNapip = "J";
        		}else if(this.dsListSub.getColumn(i, "TY_NAPIP") == "잔금"){
        			tyNapip = "R";
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
        				this.dsInsert.setColumn(nrow, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        				this.dsInsert.setColumn(nrow, "NO_CONTRACT", this.edtNO_CONTRACT.value);
        				this.dsInsert.setColumn(nrow, "TY_NAPIP", tyNapip);
        				this.dsInsert.setColumn(nrow, "NO_NAPCHA", this.dsListSub.getColumn(i, "NO_NAPCHA"));
        				this.dsInsert.setColumn(nrow, "DT_STARTAGREE", nexacro.replaceAll(this.dsListSub.getColumn(i, "DT_STARTAGREE"), "-", ""));
        				this.dsInsert.setColumn(nrow, "DT_ENDAGREE", nexacro.replaceAll(this.dsListSub.getColumn(i, "DT_ENDAGREE"), "-", ""));
        				this.dsInsert.setColumn(nrow, "AM_SUPPLY", this.dsListSub.getColumn(i, "AM_SUPPLY"));
        				this.dsInsert.setColumn(nrow, "AM_VAT", this.dsListSub.getColumn(i, "AM_VAT"));
        				this.dsInsert.setColumn(nrow, "AM_TOTAL", this.dsListSub.getColumn(i, "AM_TOTAL"));
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
        				this.dsUpdate.setColumn(nrow, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        				this.dsUpdate.setColumn(nrow, "NO_CONTRACT", this.edtNO_CONTRACT.value);
        				this.dsUpdate.setColumn(nrow, "TY_NAPIP", tyNapip);
        				this.dsUpdate.setColumn(nrow, "NO_NAPCHA", this.dsListSub.getColumn(i, "NO_NAPCHA"));
        				this.dsUpdate.setColumn(nrow, "DT_STARTAGREE", nexacro.replaceAll(this.dsListSub.getColumn(i, "DT_STARTAGREE"), "-", ""));
        				this.dsUpdate.setColumn(nrow, "DT_ENDAGREE", nexacro.replaceAll(this.dsListSub.getColumn(i, "DT_ENDAGREE"), "-", ""));
        				this.dsUpdate.setColumn(nrow, "AM_SUPPLY", this.dsListSub.getColumn(i, "AM_SUPPLY"));
        				this.dsUpdate.setColumn(nrow, "AM_VAT", this.dsListSub.getColumn(i, "AM_VAT"));
        				this.dsUpdate.setColumn(nrow, "AM_TOTAL", this.dsListSub.getColumn(i, "AM_TOTAL"));
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
        				this.dsDelete.setColumn(nrow, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        				this.dsDelete.setColumn(nrow, "NO_CONTRACT", this.edtNO_CONTRACT.value);
        				this.dsDelete.setColumn(nrow, "TY_NAPIP", tyNapip);
        				this.dsDelete.setColumn(nrow, "NO_NAPCHA", this.dsListSub.getColumn(i, "NO_NAPCHA"));
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

        // 저장전 약정금,공급가,부가세 체크
        this.fnAmountChk = function()
        {
        	var AM_TOTSUPPLY = 0;	// 공급가
        	var AM_TOTVAT = 0;		// 부가세
        	var AM_TOTAL = 0;		// 약정금

        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		AM_TOTSUPPLY = AM_TOTSUPPLY + this.dsListSub.getColumn(i, "AM_SUPPLY");
        		AM_TOTVAT = AM_TOTVAT + this.dsListSub.getColumn(i, "AM_VAT");
        		AM_TOTAL = AM_TOTAL + this.dsListSub.getColumn(i, "AM_TOTAL");
        	}

        	if(AM_TOTSUPPLY > this.edtAM_TOTSUP.value){
        		this.gfnAlert("공급가가 잘못되었습니다.");
        		return false;
        	}else if(AM_TOTVAT > this.edtAM_TOTVAT.value){
        		this.gfnAlert("부가세가 잘못되었습니다.");
        		return false;
        	}else if(AM_TOTAL > this.edtAM_TOTAL.value){
        		this.gfnAlert("합계가 잘못되었습니다.");
        		return false;
        	}
        	return true;
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
        	if (svcID == "select") {
        		//this.fnSetButton();
        		this.gfnGridAfterSelect(this.dxGrid);

        		if(this.dsListInfo.rowcount > 0){

        			this.YN_VACNT = this.dsListInfo.getColumn(0, "YN_VACNT");
        			this.CD_GUJA = this.dsListInfo.getColumn(0, "CD_GUJA");
        			this.NO_GUJA = this.dsListInfo.getColumn(0, "NO_GUJA");
        			this.DS_BANK = this.dsListInfo.getColumn(0, "DS_BANK");

        			var MEMO = "";
        			var NO_SIZE = this.dsListInfo.getColumn(0, "NO_SIZE");
        			var TY_DISTRICT = this.dsListInfo.getColumn(0, "TY_DISTRICT");
        			var TY_TYPE = this.dsListInfo.getColumn(0, "TY_TYPE");
        			var RT_OPTION = this.dsListInfo.getColumn(0, "RT_OPTION");
        			var DS_OPTION = this.dsListInfo.getColumn(0, "DS_OPTION");

        			if (this.YN_TOTCONTRACT == "N"){
        				MEMO = "품목별계약";
        			}else{
        				MEMO = "일괄계약";
        			}

        			this.staINFO.set_text("계약방식: " + MEMO + "    " + NO_SIZE + "m²     " + TY_TYPE + "형     군: " + TY_DISTRICT + "    OPTION: " + RT_OPTION + "    " + DS_OPTION);
        		}

        		// 상단그리드 조회한후에 싱금폼인 계약번호 셋팅
        		if(this.dsList.rowcount > 0){
        			this.edtNO_CONTRACT.set_value(this.dsList.getColumn(0, "NO_CONTRACT"));
        			//this.dsListInfo.setColumn(0, "NO_CONTRACT", this.dsList.getColumn(0, "NO_CONTRACT"));
        			//alert(this.edtNO_CONTRACT.value);
        		}else{	// 계약금수납을 처리 했을때는 그냥 닫는다
        			this.YN_CONT = "Y";
        			this.YN_ITEM = "N";

        			this.fnCloseMsgCallback = function() {
        				this.getParentContext().close();
        			}
        			this.gfnAlert("품목에 대한 계약금 수납이 모두 이루어졌습니다!", "fnCloseMsgCallback");
        		}

        	} else if (svcID == "selectSub") {
        		if (this.dsList.rowcount < 1) {
        			//this.fnSetButton();
        			this.dsListSub.clearData();
        		}
        		//this.fnSetButton();
        		this.gfnGridAfterSelect(this.dxGridSub);
        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if (svcID == "exec") {
        		if (errorCode == 0) {

        			this.fnExecMsg_callback = function(){
        				//this.YN_CONT = "Y";
        				//this.YN_ITEM = "N";
        				//this.fnBeforeClose();
        				this.getParentContext().close();
        			}
        			this.gfnAlert("계약금이 수납되지 않은 계약은 취소되었습니다!", "fnExecMsg_callback");

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }


        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(id == "ccfCD_DEPT_SELFACNT") {
        		dsUserParam.setColumn(nrow, "LV_DEPT", this.UserInfo.LEVCD_DEPT_SELFACNT);
        	}

        	if(id == "ccfCD_DEPT_ACNT") {
        		var CD_DEPT_SELFACNT = this.dsSearch.getColumn(0, "CD_DEPT_SELFACNT");
        		if(this.gfnIsNull(CD_DEPT_SELFACNT)){
        			this.gfnAlert("세무단위를 먼저 선택하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT_SELFACNT"));
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER", this.UserInfo.LEVCD_DEPT_SELFACNT);
        	}

        	return true;
        };


        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	if(id == "ccfCD_DEPT_SELFACNT") {
        		//this.gfnSetFormStatus(this, "I");
        		this.ccfCD_DEPT_ACNT.form.fnCodeFindClear();

        	}else if(id == "ccfCD_DEPT_ACNT") {
        		//this.gfnSetFormStatus(this, "I");
        	}
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {

        		if(this.FormInfo.TY_AUTH == "R") { return; }

        		this.edtNO_CONTRACT.set_value(this.dsList.getColumn(e.row, "NO_CONTRACT"));
        		this.NO_CONTRACT = this.dsList.getColumn(e.row, "NO_CONTRACT");

        		// 마스터 그리드 클릭 이벤트(디테일 그리드 조회)
        		this.FormBtns.SubSelect.click();
        		obj.oldrow = -1;
        	}
        };


        this.dsList_canrowposchange = function(obj,e) {
        	var can_rowchange = true;
        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		if (flag == "I" || flag == "U" || flag == "D") {
        			can_rowchange = false;
        			break;
        		}
        	}
        	if(!can_rowchange) {
        		this._row = e.newrow;
        		this.gfnConfirm("변경된 데이터가 있습니다.\r\n계속 진행하시겠습니까?", "dsList_canrowposchange_callback");
        	}
        	return can_rowchange;
        }

        this.dsList_canrowposchange_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsList.set_enableevent(false);
        		this.dsList.set_rowposition(this._row);
        		this.dsList.set_enableevent(true);
        	}
        }


        this.fnGridSub_EnterCell = function(obj, row, cell) {
        	if(this.FormInfo.TY_AUTH == "R"){
        		return false;
        	}

        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);


        	var flag = this.gfnGetFlag(this.dsListSub, row);

        	if(flag == "I"){
        		if(colnm == "RT_DIVISION"){
        			if(this.dsListSub.getColumn(row, "TY_NAPIP") == "잔금"){
        				return false;
        			}
        		}else if(colnm == "AM_TOTAL"){
        			return false;
        		}
        	}else{
        		if(colnm == "TY_NAPIP" || colnm == "NO_NAPCHA" || colnm == "AM_TOTAL"){
        			return false;
        		}else if(colnm == "RT_DIVISION"){
        			if(this.dsListSub.getColumn(row, "TY_NAPIP") == "잔금"){
        				return false;
        			}
        		}
        	}

        }


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/


        /************************************************************************
         * 서브 버튼 이벤트
         ************************************************************************/
        this.fnSelectSub = function() {

        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return false;

        	this.dsListSub.clearData();
        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();

        	this.dsSelectSub.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelectSub.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelectSub.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelectSub.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelectSub.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelectSub.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsSelectSub.setColumn(0, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        	this.dsSelectSub.setColumn(0, "NO_CONTRACT", this.dsList.getColumn(this.dsList.rowposition, "NO_CONTRACT"));

        	var strSvcId    = "selectSub";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "d_select=dsSelectSub";
         	var outData     = "dsListSub=d_select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };


        //검색조건 변경 이벤트
        this.dsSearch_Valuechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        	}
        };

        // 화면 닫을때 발생하는 이벤트(공통 함수이기때문에 따로 함수 호출해서 처리하도록 함)
        this.fnClose = function()
        {
        	this.fnBeforeClose();

        	// false로 리턴해서 화면을 닫지 않는다.
        	return false;
        };

        this.fnBeforeClose = function()
        {
        	if (this.YN_CONT != "Y" && this.YN_ITEM != "N"){	// 계약금수납을 처리 안했을때
        		this.fnCancel();
        	}else{
        		// this.YN_CONT가 Y이고 this.YN_ITEM가 N이면 화면을 닫는다(계약금수납을 했을때와 안했을때 처리가 다름)
        		this.getParentContext().close();	// 계약금수납을 처리 했을때는 그냥 닫는다
        	}
        };

        this.fnCancel = function()
        {
        	this.dsExec.clearData();

        	this.dsExec.addRow();

        	this.dsExec.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsExec.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsExec.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsExec.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsExec.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsExec.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsExec.setColumn(0, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        	this.dsExec.setColumn(0, "ID_UPDATE", this.AuthClient.ID_USER);

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
        						callBackFnc, false); // 통신방법 정의 [생략가능]
        };

        this.dsListSub_onvaluechanged = function(obj,e)
        {

        	if(e.oldvalue != e.newvalue)
        	{
        		if(this.dsListSub.getColumn(e.row, "TY_NAPIP") == "잔금"){
        			this.dsListSub.setColumn(e.row, "RT_DIVISION", 0);

        			var am_supply = 0;
        			var am_vat = 0;
        			var am_total = 0;

        			for(var i = 0; i < this.dsList.rowcount; i++){
        				am_supply += this.dsList.getColumn(i, "AM_SUPPLY");
        				am_vat += this.dsList.getColumn(i, "AM_VAT");
        				am_total += this.dsList.getColumn(i, "AM_TOT");
        			}

        			var am_supply2 = 0;
        			var am_vat2 = 0;
        			var am_total2 = 0;

        			for(var i = 0; i < this.dsListSub.rowcount; i++){
        				am_supply2 += this.dsListSub.getColumn(i, "AM_SUPPLY");
        				am_vat2 += this.dsListSub.getColumn(i, "AM_VAT");
        				am_total2 += this.dsListSub.getColumn(i, "AM_TOTAL");
        			}

        			this.dsListSub.removeEventHandler("onvaluechanged", this.dsListSub_onvaluechanged, this);
        			this.dsListSub.setColumn(e.row, "AM_SUPPLY", am_supply - am_supply2);
        			this.dsListSub.setColumn(e.row, "AM_VAT", am_vat - am_vat2);
        			this.dsListSub.setColumn(e.row, "AM_TOTAL", am_total - am_total2);
        			this.dsListSub.addEventHandler("onvaluechanged", this.dsListSub_onvaluechanged, this);

        		}

        		if(e.columnid == "RT_DIVISION") {
        			var rt_division = this.dsListSub.getColumn(e.row, "RT_DIVISION");
        			if (rt_division > 0){
        				// 약정 신규입력 시 상단그리드(계약품목)에서 선택된 깉은 계약번호가의
        				// 공급가, 부가세, 합계의 SUM에 비율을 곱하여 자동계산되도록 수정
        				var no_contract = this.dsList.getColumn(this.dsList.rowposition, "NO_CONTRACT");
        				var iAM_SUPPLY = 0;
        				var iAM_VAT = 0;
        				var iAM_TOTAL = 0;

        				for(var i = 0; i < this.dsList.rowcount; i++){
        					if(this.dsList.getColumn(i, "NO_CONTRACT") == no_contract){
        						iAM_SUPPLY += this.dsList.getColumn(i, "AM_SUPPLY");
        						iAM_VAT += this.dsList.getColumn(i, "AM_VAT");
        						iAM_TOTAL += this.dsList.getColumn(i, "AM_TOT");
        					}
        				}

        				var am_supply = Math.round(iAM_SUPPLY * rt_division / 100, 0);
        				var am_total = Math.round(iAM_TOTAL * rt_division / 100, 0);
        				var am_vat = am_total - am_supply;

        				this.dsListSub.setColumn(e.row, "AM_SUPPLY", am_supply);
        				this.dsListSub.setColumn(e.row, "AM_VAT", am_vat);
        				this.dsListSub.setColumn(e.row, "AM_TOTAL", am_total);

        				this.fnSbAM_Sum();
        			}
        		}else if(e.columnid == "AM_SUPPLY" || e.columnid == "AM_VAT") {
        			this.fnSbAM_Sum();
        		}else if(e.columnid == "DT_STARTAGREE") {
        			if(nexacro.replaceAll(this.dsListSub.getColumn(e.row, "DT_STARTAGREE"), "-", "").length == 8){
        				this.dsListSub.setColumn(e.row, "DT_ENDAGREE", this.dsListSub.getColumn(e.row, "DT_STARTAGREE"));
        			}
        		}else if(e.columnid == "NO_NAPCHA") {
        			if(this.dsListSub.getColumn(e.row, "NO_NAPCHA").length == 1){
        				this.dsListSub.setColumn(e.row, "NO_NAPCHA", "0" + this.dsListSub.getColumn(e.row, "NO_NAPCHA"));
        			}
        		}
        	}
        };

        // 공급가,부가세,약정금 합산
         this.fnSbAM_Sum = function() {
        	if(this.dsListSub.rowcount < 1) return;

        	var nRow = this.dsListSub.rowposition;
        	this.dsListSub.removeEventHandler("onvaluechanged", this.dsListSub_onvaluechanged, this);
        	this.dsListSub.setColumn(nRow, "AM_TOTAL", this.dsListSub.getColumn(nRow, "AM_SUPPLY") + this.dsListSub.getColumn(nRow, "AM_VAT"));
        	this.dsListSub.addEventHandler("onvaluechanged", this.dsListSub_onvaluechanged, this);
        }



        // 계약금수납 버튼 클릭시 팝업화면 호출
        this.fnItemReceipt = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if (this.dsListSub.rowcount < 1) { return false; }


        	var am_total = 0;
        	for(var i = 0; i < this.dsList.rowcount; i++){
        		am_total += this.dsList.getColumn(i, "AM_TOT");
        	}

        	var am_total2 = 0;
        	for(var i = 0; i < this.dsListSub.rowcount; i++){
        		am_total2 += this.dsListSub.getColumn(i, "AM_TOTAL");
        	}

        	if (am_total != am_total2){
        		this.gfnAlert("품목금액과 약정금액이 불일치 합니다.");
        		return;
        	}

        	var param = {};
        	//var nRow = this.dsListSub.rowposition;

        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
            param.NO_DONG = this.dsSearch.getColumn(0, "NO_DONG");
        	param.NO_FLOOR = this.dsSearch.getColumn(0, "NO_FLOOR");
        	param.NO_HO = this.dsSearch.getColumn(0, "NO_HO");
        	param.NO_UNIONMEMBER = this.dsSearch.getColumn(0, "NO_UNIONMEMBER");
        	param.NO_CONTRACT = this.edtNO_CONTRACT.value;
        	param.AM_RECEIVED = this.dsListSub.getColumn(0, "AM_TOTAL").toString();
        	param.TITILE = "계약번호 [" + this.dsList.getColumn(this.dsList.rowposition, "NO_CONTRACT") + "] 에 대한 계약금 수납입니다.";

        	if (this.YN_VACNT == "Y"){
        		param.CD_GUJA = this.CD_GUJA;
        		param.NO_GUJA = this.NO_GUJA;
        		param.CD_Code_Find = false;
        	}else{
        		param.CD_GUJA = "";
        		param.NO_GUJA = "";
        		param.CD_Code_Find = true;
        	}


        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRF_DLGCONTRACT", "fnItemReceiptCallback", param);
        }

        this.fnItemReceiptCallback =  function(svcID, val) {
        	if(val == true) {
        		this.YN_CONT = "Y";
        	}else{
        		this.YN_CONT = "N";
        	}

        	this.FormBtns.Select.click();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.divDataTop.form.objGrid.addEventHandler("oncelldblclick",this.divData_divDataTop_objGrid_oncelldblclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };
        this.loadIncludeScript("DRF_AGREEMENTITEM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
