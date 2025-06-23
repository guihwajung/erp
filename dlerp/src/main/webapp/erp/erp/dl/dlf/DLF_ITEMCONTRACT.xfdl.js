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
            obj._setContents("<ColumnInfo><Column id=\"NO_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"SZ_EXCLUSIVE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ITEM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ITEM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CCODE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SUPPLY\" type=\"STRING\" size=\"256\"/><Column id=\"AM_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_AMOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">selectLeft</Col><Col id=\"SP\">DRFPR_ITEMSFORCONTRACT_SELECT</Col></Row><Row><Col id=\"SP\">DRFPR_ITEMCONTRACT_SELECT</Col><Col id=\"TARGET\">select</Col></Row><Row><Col id=\"SP\">DRFPR_ITEMCONTRACT_INSERT_DT</Col><Col id=\"TARGET\">save</Col></Row><Row><Col id=\"SP\">DRFPR_CONTRACT_NO_SELECT</Col><Col id=\"TARGET\">selectContNo</Col></Row><Row><Col id=\"SP\">DRFPR_DONGHOSIZE_SELECT</Col><Col id=\"TARGET\">selectDongHo</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListLeft", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONTRACT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_UNIONMEMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_ACNTUNIT\"/><Col id=\"NO_DONG\"/><Col id=\"NO_FLOOR\"/><Col id=\"NO_HO\"/><Col id=\"NO_CONTRACT\"/><Col id=\"NO_UNIONMEMBER\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListRight", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsContNo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDongHo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","60",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataTopLeft","0","0","800","250",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","-5","100.00%","22",null,null,null,null,null,null,this.divData.form.divDataTopLeft.form);
            obj.set_taborder("1");
            obj.set_text("별도계약품목");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTopLeft.addChild(obj.name, obj);

            obj = new Grid("objGridLeft","0","sta01:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataTopLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTopLeft.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divDataTopLeft:10",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","-5","100.00%","22",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("1");
            obj.set_text("계약된 품목");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Div("divDataTopRight","divDataTopLeft:80","0",null,"250","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","-5","100.00%","22",null,null,null,null,null,null,this.divData.form.divDataTopRight.form);
            obj.set_taborder("1");
            obj.set_text("계약할 품목");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTopRight.addChild(obj.name, obj);

            obj = new Grid("objGridRight","0","sta01:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataTopRight.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTopRight.addChild(obj.name, obj);

            obj = new Button("btnRight","divDataTopLeft:23","63","35","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("▶");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnLeft","divDataTopLeft:23","137","35","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("◀");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnRightAll","divDataTopLeft:23","100","35","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("▶▶");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnLeftAll","divDataTopLeft:23","174","35","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("◀◀");
            this.divData.addChild(obj.name, obj);

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

            obj = new Static("staCD_CORP","ctxtDS_ACNTUNIT:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("사업지코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divSearchDong","ctxtDS_ACNTUNIT:0.0","10.0","249","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP00","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchDong.form);
            obj.set_taborder("4");
            obj.set_text("동층호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.form.divSearchDong.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_DONG","staCD_CORP00:0.0","10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchDong.form);
            obj.set_taborder("3");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_maxlength("4");
            this.divSearch.form.divSearchDong.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_FLOOR","ctxtNO_DONG:0.0","10.0","33","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchDong.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_maxlength("2");
            this.divSearch.form.divSearchDong.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_HO","ctxtNO_FLOOR:0.0","10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchDong.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_maxlength("3");
            this.divSearch.form.divSearchDong.addChild(obj.name, obj);

            obj = new Button("btnDong","ctxtNO_HO:0.0","10.0","25",null,null,"2",null,null,null,null,this.divSearch.form.divSearchDong.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_CF_Search");
            obj.set_tabstop("10.0");
            this.divSearch.form.divSearchDong.addChild(obj.name, obj);

            obj = new Static("staCD_CORP01","divSearchDong:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("계약자 성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_CONTRACTOR","staCD_CORP01:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_SIZE","ctxtDS_CONTRACTOR:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP00","ctxtNO_SIZE:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("면적");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtTY_TYPE","staCD_CORP00:0.0","10.0","43","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP02","ctxtTY_TYPE:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("형");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctxtCD_ACNTUNIT","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.divSearchDong.form.ctxtNO_HO","value","dsSearch","NO_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.divSearchDong.form.ctxtNO_FLOOR","value","dsSearch","NO_FLOOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.divSearchDong.form.ctxtNO_DONG","value","dsSearch","NO_DONG");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DLF_ITEMCONTRACT.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.YN_TOTCONTRACT = "";	//일괄계약여부
        this.DT_CONTRACT = "";		//계약일자
        this.CN_ServiceCont = "";	//서비스계약 Count
        this.YN_ServiceCont = "";
        this.YN_CONTRACTED = "";	//계약여부
        this.NO_CONTRACT ="";		//현재 계약번호

        this.BTN_GB = "";	// 확장버튼 구분
        this.popupVal = "";	// 서비스 팝업에서 값내려받는 변수

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
        		this.ctxtDS_CONTRACTOR.set_value(this.getOwnerFrame().DS_CONTRACTOR);
        		this.ctxtNO_SIZE.set_value(this.getOwnerFrame().NO_SIZE);
        		this.ctxtTY_TYPE.set_value(this.getOwnerFrame().TY_TYPE);
        		//this.dsSearch.setColumn(0, "NO_CONTRACT", this.getOwnerFrame().NO_CONTRACT);
        		this.dsSearch.setColumn(0, "NO_UNIONMEMBER", this.getOwnerFrame().NO_UNIONMEMBER);
        		this.NO_CONTRACT = this.getOwnerFrame().NO_CONTRACT;

        		this.FormBtns.Select.click();
        	}

        	// 상단버튼 활성화 or 비활성화 처리
        	if(this.FormInfo.TY_AUTH != "R"){
        		this.btnSvcItem.set_enable(true);
        		this.btnItemCont.set_enable(true);
        		this.btnTotCont.set_enable(true);
        		//this.btnEtcPrint.set_enable(true);
        	}else{
        		this.btnSvcItem.set_enable(false);
        		this.btnItemCont.set_enable(false);
        		this.btnTotCont.set_enable(false);
        		//this.btnEtcPrint.set_enable(false);
        	}

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
        	this.btnSvcItem = this.gfnFormButtonAdd("btnSvcItem", "fnSvcItem");
        	this.btnItemCont = this.gfnFormButtonAdd("btnItemCont", "fnItemCont");
        	this.btnTotCont = this.gfnFormButtonAdd("btnTotCont", "fnTotCont");
        	//this.btnEtcPrint = this.gfnFormButtonAdd("btnEtcPrint", "fnEtcPrint");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctxtCD_ACNTUNIT = this.divSearch.form.ctxtCD_ACNTUNIT;
        	this.ctxtDS_ACNTUNIT = this.divSearch.form.ctxtDS_ACNTUNIT;
        	this.ctxtDS_CONTRACTOR = this.divSearch.form.ctxtDS_CONTRACTOR;
        	this.ctxtNO_SIZE = this.divSearch.form.ctxtNO_SIZE;
        	this.ctxtTY_TYPE = this.divSearch.form.ctxtTY_TYPE;
        	this.ctxtNO_DONG = this.divSearch.form.divSearchDong.form.ctxtNO_DONG;
        	this.ctxtNO_FLOOR = this.divSearch.form.divSearchDong.form.ctxtNO_FLOOR;
        	this.ctxtNO_HO = this.divSearch.form.divSearchDong.form.ctxtNO_HO;

        	this.btnRight = this.divData.form.btnRight;
        	this.btnRightAll = this.divData.form.btnRightAll;
        	this.btnLeft = this.divData.form.btnLeft;
        	this.btnLeftAll = this.divData.form.btnLeftAll;

        	this.dxGridLeft = this.divData.form.divDataTopLeft.form.objGridLeft;
        	this.dxGridRight = this.divData.form.divDataTopRight.form.objGridRight;
        	this.dxGrid = this.divData.form.divDataBottom.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//this.ccfTY_TYPE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	//this.ccfTY_TYPE.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGridLeft, this.dsListLeft, "DL", "DLF_ITEMCONTRACT");
        	this.gfnGridInit(this.dxGridRight, this.dsListRight, "DL", "DLF_ITEMCONTRACT");
        	this.gfnGridInit(this.dxGrid, this.dsList, "DL", "DLF_ITEMCONTRACT_2");

        	//this.dxGrid.set_selecttype("cell");
        	//this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	//검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_Valuechanged, this);

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelectLeft = new Dataset();
        	this.dsSelectLeft.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelectLeft.addColumn("TY_GUBUN", "string");
        	this.dsSelectLeft.addColumn("NO_CHASU", "string");
        	this.dsSelectLeft.addColumn("NO_DONG", "bigdecimal");
        	this.dsSelectLeft.addColumn("NO_FLOOR", "string");
        	this.dsSelectLeft.addColumn("NO_HO", "string");
        	this.dsSelectLeft.addColumn("NO_UNIONMEMBER", "string");
        	this.dsSelectLeft.addColumn("NO_SIZE", "string");
        	this.dsSelectLeft.addColumn("TY_TYPE", "string");

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("NO_CHASU", "string");
        	this.dsSelect.addColumn("NO_DONG", "string");
        	this.dsSelect.addColumn("NO_FLOOR", "string");
        	this.dsSelect.addColumn("NO_HO", "string");
        	this.dsSelect.addColumn("NO_UNIONMEMBER", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_ACNTUNIT", "string");
        	this.dsSave.addColumn("TY_GUBUN", "string");
        	this.dsSave.addColumn("NO_CHASU", "string");
        	this.dsSave.addColumn("NO_DONG", "string");
        	this.dsSave.addColumn("NO_FLOOR", "string");
        	this.dsSave.addColumn("NO_HO", "string");
        	this.dsSave.addColumn("NO_UNIONMEMBER", "string");
        	this.dsSave.addColumn("CD_ITEM", "string");
        	this.dsSave.addColumn("YN_SERVICE", "string");
        	this.dsSave.addColumn("NO_NUMBER", "string");
        	this.dsSave.addColumn("YN_TOT_CONTRACT", "string");
        	this.dsSave.addColumn("DT_CONTRACT", "string");
        	this.dsSave.addColumn("ID_INSERT", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	//this.gfnGridBeforeSelect(this.dxGrid);

        	// 오른쪽 그리드 초기화
        	this.dsListRight.clearData();

        	this.dsSelectLeft.clearData();
        	this.dsSelectLeft.addRow();

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	var noSize = this.ctxtNO_SIZE.value;
        	if (this.gfnIsNull(noSize)) {
        		noSize = "0.0000";
        	}
        	this.dsSelectLeft.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelectLeft.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelectLeft.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelectLeft.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelectLeft.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelectLeft.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsSelectLeft.setColumn(0, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        	this.dsSelectLeft.setColumn(0, "NO_SIZE", noSize);
        	this.dsSelectLeft.setColumn(0, "TY_TYPE", this.ctxtTY_TYPE.value);

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
        	var inData      = "selectLeft=dsSelectLeft select=dsSelect selectContNo=dsSelectLeft selectDongHo=dsSelect";
        	var outData     = "dsListLeft=selectLeft0 dsList=select0 dsContNo=selectContNo0 dsDongHo=selectDongHo0";
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
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGridSub);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGridRight)) return;

        	this.dxGridRight.updateToDataset();

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsListRight.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListRight, i);

        		if(flag == "I"){
        			var nrow = this.dsSave.addRow();
        			this.dsSave.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        			this.dsSave.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        			this.dsSave.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        			this.dsSave.setColumn(nrow, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        			this.dsSave.setColumn(nrow, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        			this.dsSave.setColumn(nrow, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        			this.dsSave.setColumn(nrow, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        			this.dsSave.setColumn(nrow, "CD_ITEM", this.dsListRight.getColumn(i, "CD_ITEM"));
        			this.dsSave.setColumn(nrow, "YN_SERVICE", this.dsListRight.getColumn(i, "YN_SERVICE"));
        			this.dsSave.setColumn(nrow, "NO_NUMBER", this.dsContNo.getColumn(0, "NO_CONT"));
        			this.dsSave.setColumn(nrow, "YN_TOT_CONTRACT", this.YN_TOTCONTRACT);
        			this.dsSave.setColumn(nrow, "DT_CONTRACT", nexacro.replaceAll(this.DT_CONTRACT, "-", ""));
        			this.dsSave.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        			this.CN_ServiceCont += 1;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

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
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_ACNTUNIT"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_ACNTUNIT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("사업지코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0,"NO_DONG"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctxtNO_DONG.setFocus();
        		}
        		this.gfnAlert("동은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0,"NO_FLOOR"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctxtNO_FLOOR.setFocus();
        		}
        		this.gfnAlert("층은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0,"NO_HO"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctxtNO_HO.setFocus();
        		}
        		this.gfnAlert("호는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}

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
        		//this.gfnGridAfterSelect(this.dxGridSub);

        		if(!this.gfnIsNull(this.dsDongHo.getColumn(0, "DS_CONTRACTOR")) && this.dsDongHo.rowcount > 0){
        			this.ctxtDS_CONTRACTOR.set_value(this.dsDongHo.getColumn(0, "DS_CONTRACTOR"));
        			this.ctxtNO_SIZE.set_value(this.dsDongHo.getColumn(0, "NO_SIZE"));
        			this.ctxtTY_TYPE.set_value(this.dsDongHo.getColumn(0, "TY_TYPE"));
        		}else{
        			if(this.gfnIsNull(this.ctxtDS_CONTRACTOR.value) && this.dsList.rowcount < 1){
        				this.ctxtNO_SIZE.set_value("");
        				this.ctxtTY_TYPE.set_value("");
        				this.ctxtDS_CONTRACTOR.set_value("");
        				this.ctxtNO_DONG.set_value("");
        				this.ctxtNO_FLOOR.set_value("");
        				this.ctxtNO_HO.set_value("");

        				this.gfnAlert("본계약이 체결되어 있지 않습니다.");
        			}
        		}

        		this.fnArrowBtnEnabled();
        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			if(this.YN_CONTRACTED != "Y"){
        				this.gfnAlert("서비스품목 계약 " + this.CN_ServiceCont + "건이 처리되었습니다.");
        				//처리건수 초기화
                        this.CN_ServiceCont = 0;
        			}

        			if(this.BTN_GB == "btnItemCont"){	// 품목별계약
        				this.BTN_GB = "";
        				var param = {};
        				//var nRow = this.dsList.rowposition;

        				param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        				param.DS_ACNTUNIT = this.ctxtDS_ACNTUNIT.value;
        				param.NO_DONG = this.dsSearch.getColumn(0, "NO_DONG");
        				param.NO_FLOOR = this.dsSearch.getColumn(0, "NO_FLOOR");
        				param.NO_HO = this.dsSearch.getColumn(0, "NO_HO");
        				param.YN_TOTCONTRACT = this.YN_TOTCONTRACT;
        				param.NO_UNIONMEMBER = this.dsSearch.getColumn(0, "NO_UNIONMEMBER");	// 동층호 검색조건 바꿀때 이값은 셋팅 안해주나?

        				// 화면 오픈.
        				// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        				// 타 모듈 화면 호출시 지정할것.

        				this.gfnFormOpen(this.FormInfo.CD_MODULE, "DLF_AGREEMENTITEM", "fnItemContCallback", param);
        			}else if(this.BTN_GB == "btnTotCont"){	// 일괄계약
        				this.BTN_GB = "";
        				var param = {};
        				//var nRow = this.dsList.rowposition;

        				param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        				param.DS_ACNTUNIT = this.ctxtDS_ACNTUNIT.value;
        				param.NO_DONG = this.dsSearch.getColumn(0, "NO_DONG");
        				param.NO_FLOOR = this.dsSearch.getColumn(0, "NO_FLOOR");
        				param.NO_HO = this.dsSearch.getColumn(0, "NO_HO");
        				param.YN_TOTCONTRACT = this.YN_TOTCONTRACT;
        				param.NO_UNIONMEMBER = this.dsSearch.getColumn(0, "NO_UNIONMEMBER");	// 동층호 검색조건 바꿀때 이값은 셋팅 안해주나?

        				// 화면 오픈.
        				// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        				// 타 모듈 화면 호출시 지정할것.

        				this.gfnFormOpen(this.FormInfo.CD_MODULE, "DLF_AGREEMENTITEM", "fnItemContCallback", param);
        			}

        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }


        // 확장 버튼 활성화 처리
        this.fnArrowBtnEnabled = function() {
        	if(this.dsListRight.rowcount > 0)
        	{
        		this.btnSvcItem.set_enable(false);
        		this.btnItemCont.set_enable(false);
        		this.btnTotCont.set_enable(true);
        	}
        	else
        	{
        		this.btnSvcItem.set_enable(false);
        		this.btnItemCont.set_enable(false);
        		this.btnTotCont.set_enable(false);
        	}

        	if(this.dsListLeft.rowcount == 0)
        	{
        		this.btnRight.set_enable(false);
        		this.btnRightAll.set_enable(false);
        	}
        	else
        	{
        		this.btnRight.set_enable(true);
        		this.btnRightAll.set_enable(true);
        	}

        	if(this.dsListRight.rowcount == 0)
        	{
        		this.btnLeft.set_enable(false);
        		this.btnLeftAll.set_enable(false);
        	}
        	else
        	{
        		this.btnLeft.set_enable(true);
        		this.btnLeftAll.set_enable(true);
        	}


        	for(var i = 0; i < this.dsListRight.rowcount; i++)
        	{
        		if(this.dsListRight.getColumn(i, "YN_SERVICE") == "N"){
        			this.btnItemCont.set_enable(true);
        		}else if(this.dsListRight.getColumn(i, "YN_SERVICE") == "Y"){
        			this.btnItemCont.set_enable(false);
        		}
        	}

        };


        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        };


        this.fnAfterCDTextChanged = function(id, codeFindData) {

        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		// 마스터 그리드 클릭 이벤트(디테일 그리드 조회)
        		this.FormBtns.SubSelect.click();
        		obj.oldrow = -1;
        	}
        };


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
        		this.gfnGridClear(this.dxGridLeft);
        		this.gfnGridClear(this.dxGridRight);
        		this.gfnGridClear(this.dxGrid);

        		this.ctxtNO_SIZE.set_value("");
        		this.ctxtTY_TYPE.set_value("");
        		this.ctxtDS_CONTRACTOR.set_value("");

        		this.btnSvcItem.set_enable(false);
        		this.btnItemCont.set_enable(false);
        		this.btnTotCont.set_enable(false);
        		//this.btnEtcPrint.set_enable(false);
        	}
        };



        // 오른쪽 이동 버튼
        this.divData_btnRight_onclick = function(obj,e)
        {
        	var rows = this.dxGridLeft.getSelectedDatasetRows();

        	this.dsListRight.set_enableevent(false);

        	for(var i = 0; i < rows.length; i++)
        	{
        		var nrow = rows[i];

        		var listRow = this.dsListRight.addRow();

        		this.dsListRight.copyRow(listRow, this.dsListLeft, nrow);
        		this.dsListRight.setColumn(listRow, this.ucFlag, "");
        		//this.gfnSetFormStatus(this, "I");

        	}
        	this.dsListRight.set_enableevent(true);
        	this.dsListLeft.deleteMultiRows(rows);

        	this.fnArrowBtnEnabled(">");

        };



        // 왼쪽 이동 버튼
        this.divData_btnLeft_onclick = function(obj,e)
        {
        	var rows = this.dxGridRight.getSelectedDatasetRows();

        	this.dsListLeft.set_enableevent(false);

        	for(var i = 0; i < rows.length; i++)
        	{
        		var nrow = rows[i];

        		var listRow = this.dsListLeft.addRow();

        		this.dsListLeft.copyRow(listRow, this.dsListRight, nrow);
        		this.dsListLeft.setColumn(listRow, this.ucFlag, "");

        	}

        	this.dsListLeft.set_enableevent(true);
        	this.dsListRight.deleteMultiRows(rows);

        	this.fnArrowBtnEnabled("<");

        };


        // 오른쪽 모두 이동 버튼
        this.divData_btnRightAll_onclick = function(obj,e)
        {
        	this.dsListRight.set_enableevent(false);

        	for(var i = 0; i < this.dsListLeft.rowcount; i++)
        	{
        		//var nrow = rows[i];

        		var listRow = this.dsListRight.addRow();

        		this.dsListRight.copyRow(listRow, this.dsListLeft, i);
        		this.dsListRight.setColumn(listRow, this.ucFlag, "");
        		//this.gfnSetFormStatus(this, "I");

        	}
        	this.dsListRight.set_enableevent(true);
        	this.dsListLeft.deleteAll();

        	this.fnArrowBtnEnabled(">");

        };



        // 왼쪽 모두 이동 버튼
        this.divData_btnLeftAll_onclick = function(obj,e)
        {
        	this.dsListLeft.set_enableevent(false);

        	for(var i = 0; i < this.dsListRight.rowcount; i++)
        	{
        		//var nrow = rows[i];

        		var listRow = this.dsListLeft.addRow();

        		this.dsListLeft.copyRow(listRow, this.dsListRight, i);
        		this.dsListLeft.setColumn(listRow, this.ucFlag, "");

        	}

        	this.dsListLeft.set_enableevent(true);
        	this.dsListRight.deleteAll();

        	this.fnArrowBtnEnabled("<");

        };



         // 서비스품목계약 버튼 클릭시 팝업화면 호출
         this.fnSvcItem = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
            param.NO_DONG = this.dsSearch.getColumn(0, "NO_DONG");
        	param.NO_FLOOR = this.dsSearch.getColumn(0, "NO_FLOOR");
        	param.NO_HO = this.dsSearch.getColumn(0, "NO_HO");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DLF_DLGSERVICECONT", "fnSvcItemCallback", param);
        }


        this.fnSvcItemCallback =  function(svcID, val) {
        	if(val == true) {
        		this.DT_CONTRACT = this.popupVal.dtContract;		// 팝업에서 값을 셋팅해줘야함
        		this.YN_TOTCONTRACT = "N";
        		this.YN_ServiceCont = "Y";
        		this.YN_CONTRACTED = "N";

        		// 팝업화면을 그냥 닫을때에서 저장을 태워야하는지 확인.(닫을때도 무조건 저장 태워야한다면 아래 for문을 if문 밖으로 빼놓는다.)
        		for(var i = 0; i < this.dsListRight.rowcount; i++)
        		{
        			if(this.dsListRight.getColumn(i, "YN_SERVICE") == "Y"){
        				this.dsListRight.setColumn(i, this.ucFlag, "I");
        			}
        		}

        	}

        	this.CN_ServiceCont = 0;
        	this.fnSave();
        };


         // 품목별계약 버튼 클릭시 팝업화면 호출
         this.fnItemCont = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }


        	for(var i = 0; i < this.dsListRight.rowcount; i++)
        	{
        		if(this.dsListRight.getColumn(i, "YN_SERVICE") == "Y"){
        			this.gfnAlert("서비스품목계약을 해야만 품목별계약을 할 수 있습니다.");
        			return;
        		}
        	}

        	this.YN_TOTCONTRACT = "N";   //품목별계약(N)
        	this.YN_ServiceCont = "N";
        	this.YN_CONTRACTED = "Y";    //계약체결

        	for(var i = 0; i < this.dsListRight.rowcount; i++)
        	{
        		if(this.dsListRight.getColumn(i, "YN_SERVICE") == "N"){
        			this.dsListRight.setColumn(i, this.ucFlag, "I");
        		}
        	}

        	this.BTN_GB = "btnItemCont";

        	this.fnSave();

        	/*
        	var param = {};
        	//var nRow = this.dsList.rowposition;

        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
            param.DS_ACNTUNIT = this.ctxtDS_ACNTUNIT.value;
        	param.NO_DONG = this.dsSearch.getColumn(0, "NO_DONG");
        	param.NO_FLOOR = this.dsSearch.getColumn(0, "NO_FLOOR");
        	param.NO_HO = this.dsSearch.getColumn(0, "NO_HO");
        	param.YN_TOTCONTRACT = this.YN_TOTCONTRACT;
        	param.NO_UNIONMEMBER = this.dsSearch.getColumn(0, "NO_UNIONMEMBER");	// 동층호 검색조건 바꿀때 이값은 셋팅 안해주나?

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRF_AGREEMENTITEM", "fnItemContCallback", param);
        	*/
        }

        this.fnItemContCallback =  function(svcID, val) {

        	if(val != true) {
        		this.FormBtns.Select.click();
        	}
        };

         // 일괄계약 버튼 클릭시 팝업화면 호출
         this.fnTotCont = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	for(var i = 0; i < this.dsListRight.rowcount; i++)
        	{
        		if(this.dsListRight.getColumn(i, "YN_SERVICE") == "Y"){
        			this.gfnAlert("서비스품목계약을 해야만 품목별계약을 할 수 있습니다.");
        			return;
        		}

        		// 닷넷버전에서 같은컬럼을 비교하고있음.
        		if(this.dsListRight.getColumn(0, "DT_ENDAGREE") != this.dsListRight.getColumn(i, "DT_ENDAGREE")){
        			this.gfnAlert("품목별 약정일자가 다르면 일괄계약할 수 없습니다.");
        			return;
        		}
        	}

        	this.YN_TOTCONTRACT = "Y";   //품목별계약(N)
            this.YN_CONTRACTED = "Y";    //계약체결

        	for(var i = 0; i < this.dsListRight.rowcount; i++)
        	{
        		if(this.dsListRight.getColumn(i, "YN_SERVICE") == "N"){
        			this.dsListRight.setColumn(i, this.ucFlag, "I");
        		}
        	}

        	this.BTN_GB = "btnTotCont";

        	this.fnSave();

        	/*
        	var param = {};
        	//var nRow = this.dsList.rowposition;

        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
            param.DS_ACNTUNIT = this.ctxtDS_ACNTUNIT.value;
        	param.NO_DONG = this.dsSearch.getColumn(0, "NO_DONG");
        	param.NO_FLOOR = this.dsSearch.getColumn(0, "NO_FLOOR");
        	param.NO_HO = this.dsSearch.getColumn(0, "NO_HO");
        	param.YN_TOTCONTRACT = this.YN_TOTCONTRACT;
        	param.NO_UNIONMEMBER = this.dsSearch.getColumn(0, "NO_UNIONMEMBER");	// 동층호 검색조건 바꿀때 이값은 셋팅 안해주나?

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRF_AGREEMENTITEM", "fnItemContCallback", param);
        	*/
        }

         // 별도계약서출력 버튼 클릭시 팝업화면 호출
         this.fnEtcPrint = function(obj,e) {

        }


        // 계약할 품목 그리드 row 변경시 이벤트
        this.dsListRight_onrowposchanged = function(obj,e)
        {
        	if(this.dsListRight.getColumn(this.dsListRight.rowposition, "YN_SERVICE") == "N"){
        		this.btnSvcItem.set_enable(false);
        	}else if(this.dsListRight.getColumn(this.dsListRight.rowposition, "YN_SERVICE") == "Y"){
        		this.btnSvcItem.set_enable(true);
        	}
        };

        // 동층호 팝업 관련
        this.divSearch_divSearchDong_btnDong_onclick = function(obj,e)
        {
        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.FLAG = "1";

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen("DRI", "DRI_DONGHOCONTRACT", "fnDongCallback", param);
        };

        this.fnDongCallback = function(svcID, val) {
        	if (!val) return;

        	var json = JSON.parse(val);
        	if (json.DONG.length > 0) {
        		this.dsSearch.setColumn(0, "NO_DONG", json.DONG);
        		this.dsSearch.setColumn(0, "NO_FLOOR", json.FLOOR);
        		this.dsSearch.setColumn(0, "NO_HO", json.HO);

        		this.FormBtns.Select.click();
        	}
        };


        this.divSearch_divSearchDong_ctxtNO_DONG_onkillfocus = function(obj,e)
        {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_DONG"))) return;
        	this.dsSearch.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG").padLeft(4, "0"));
        };

        this.divSearch_divSearchDong_ctxtNO_FLOOR_onkillfocus = function(obj,e)
        {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_FLOOR"))) return;
        	this.dsSearch.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR").padLeft(2, "0"));
        };

        this.divSearch_divSearchDong_ctxtNO_HO_onkillfocus = function(obj,e)
        {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_HO"))) return;
        	this.dsSearch.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO").padLeft(3, "0"));
        };

        this.divSearch_ctxt_onkeyup = function(obj,e)
        {
        	if (obj.value.length == obj.maxlength) {
        		switch (obj.id) {
        			case "ctxtNO_DONG":
        				this.ctxtNO_FLOOR.setFocus();
        				break;
        			case "ctxtNO_FLOOR":
        				this.ctxtNO_HO.setFocus();
        				break;
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.divDataTopLeft.form.objGridLeft.addEventHandler("oncelldblclick",this.divData_divDataTop_objGrid_oncelldblclick,this);
            this.divData.form.divDataBottom.form.objGrid.addEventHandler("oncelldblclick",this.divData_divDataTop_objGridsub_oncelldblclick,this);
            this.divData.form.divDataTopRight.form.objGridRight.addEventHandler("oncelldblclick",this.divData_divDataTop_objGrid_oncelldblclick,this);
            this.divData.form.btnRight.addEventHandler("onclick",this.divData_btnRight_onclick,this);
            this.divData.form.btnLeft.addEventHandler("onclick",this.divData_btnLeft_onclick,this);
            this.divData.form.btnRightAll.addEventHandler("onclick",this.divData_btnRightAll_onclick,this);
            this.divData.form.btnLeftAll.addEventHandler("onclick",this.divData_btnLeftAll_onclick,this);
            this.divSearch.form.divSearchDong.form.ctxtNO_DONG.addEventHandler("onkillfocus",this.divSearch_divSearchDong_ctxtNO_DONG_onkillfocus,this);
            this.divSearch.form.divSearchDong.form.ctxtNO_DONG.addEventHandler("onkeyup",this.divSearch_ctxt_onkeyup,this);
            this.divSearch.form.divSearchDong.form.ctxtNO_FLOOR.addEventHandler("onkillfocus",this.divSearch_divSearchDong_ctxtNO_FLOOR_onkillfocus,this);
            this.divSearch.form.divSearchDong.form.ctxtNO_FLOOR.addEventHandler("onkeyup",this.divSearch_ctxt_onkeyup,this);
            this.divSearch.form.divSearchDong.form.ctxtNO_HO.addEventHandler("onkillfocus",this.divSearch_divSearchDong_ctxtNO_HO_onkillfocus,this);
            this.divSearch.form.divSearchDong.form.ctxtNO_HO.addEventHandler("onkeyup",this.divSearch_ctxt_onkeyup,this);
            this.divSearch.form.divSearchDong.form.btnDong.addEventHandler("onclick",this.divSearch_divSearchDong_btnDong_onclick,this);
            this.dsListRight.addEventHandler("onrowposchanged",this.dsListRight_onrowposchanged,this);
        };
        this.loadIncludeScript("DLF_ITEMCONTRACT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
