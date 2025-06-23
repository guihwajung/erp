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
            this.set_titletext("예산현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWXPR_COSTTUJA_SELECT</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DZZPR_GROUPCODE_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListT", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCdSite","sta00:0.0","10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","edtCdSite:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("현장명");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDsSite","sta01:0.0","10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","0.0","sta00:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("공종코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCdDk","sta02:0.0","edtCdSite:10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta03","edtCdDk:0.0","sta01:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("일련번호");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCdCost","sta03:0.0","edtDsSite:10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta04","edtCdCost:0.0","sta00:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("명칭");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDsCost","sta04:0.0","sta00:10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta05","edtDsCost:0.0","sta00:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("규격");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSzSize","sta05:0.0","sta00:10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta06","edtSzSize:0.0","sta00:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("단위");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDsUnit","sta06:0.0","sta00:10.0","40","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_DOKUB","edtDsUnit:0.0","sta00:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("도급");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_EXSILHENG","chkYN_DOKUB:0.0","sta00:10.0","76","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("현장예산");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","50",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Tab("tabData","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_preload("true");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.tabData);
            obj.set_text("실행예산 변경이력");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("분할발주 현황");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid2","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Tabpage("tab3",this.divData.form.tabData);
            obj.set_text("원가투입 현황");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid3","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Div("divBottom","0",null,null,"30","0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","10","4","50","20",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("0");
            obj.set_text("실행예산");
            this.divBottom.addChild(obj.name, obj);

            obj = new MaskEdit("mskTtSil","sta02:10","4","150","20",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_type("number");
            obj.set_limitbymask("decimal");
            obj.set_clipmode("includespace");
            obj.set_format("9,999");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("sta03","mskTtSil:20","4","50","20",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("발주금액");
            obj.set_textAlign("center");
            this.divBottom.addChild(obj.name, obj);

            obj = new MaskEdit("mskHado","sta03:10","4","150","20",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_type("number");
            obj.set_format("9,999");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("sta04","mskHado:20","4","50","20",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("2");
            obj.set_text("투입금액");
            obj.set_textAlign("center");
            this.divBottom.addChild(obj.name, obj);

            obj = new MaskEdit("mskCost","sta04:10","4","150","20",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_type("number");
            obj.set_format("9,999");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("sta05","mskCost:20","4","50","20",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("3");
            obj.set_text("가용예산");
            obj.set_textAlign("center");
            this.divBottom.addChild(obj.name, obj);

            obj = new MaskEdit("mskSil","sta05:10","4","150","20",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_type("number");
            obj.set_format("9,999");
            obj.set_displaynulltext("0");
            obj.set_color("red");
            this.divBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DWX_COSTTUJA.xfdl", function() {
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

        	this.divSearch_chkYN_DOKUB_onchanged(this.divSearch.form.chkYN_DOKUB, {postvalue:this.divSearch.form.chkYN_DOKUB.value});
        	this.divSearch_chkYN_EXSILHENG_onchanged(this.divSearch.form.chkYN_EXSILHENG, {postvalue:this.divSearch.form.chkYN_EXSILHENG.value});

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Save.set_enable(false);
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
        	this.dxGrid = this.divData.form.tabData.tab1.form.objGrid;
        	this.dxGrid2 = this.divData.form.tabData.tab2.form.objGrid2;
        	this.dxGrid3 = this.divData.form.tabData.tab3.form.objGrid3;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWX_COSTTUJA");
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DW", "DWX_COSTTUJA2");
        	this.gfnGridInit(this.dxGrid3, this.dsList3, "DW", "DWX_COSTTUJA3");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("CD_COST", "string");

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE)){

        		this.divSearch.form.edtCdSite.set_value(this.getOwnerFrame().CD_SITE);
        		this.divSearch.form.edtDsSite.set_value(this.getOwnerFrame().DS_SITE);
        		this.divSearch.form.edtCdDk.set_value(this.getOwnerFrame().CD_DKCOST);
        		this.divSearch.form.edtCdCost.set_value(this.getOwnerFrame().CD_COST);
        		this.divSearch.form.edtDsCost.set_value(this.getOwnerFrame().DS_COST);
        		this.divSearch.form.edtSzSize.set_value(this.getOwnerFrame().SZ_SIZE);
        		this.divSearch.form.edtDsUnit.set_value(this.getOwnerFrame().DS_UNIT);

        		this.FormBtns.Select.click();
        	}

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	//if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);
        	this.gfnGridBeforeSelect(this.dxGrid2);
        	this.gfnGridBeforeSelect(this.dxGrid3);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_SITE", this.divSearch.form.edtCdSite.value);
        	this.dsSelect.setColumn(0, "CD_COST", this.divSearch.form.edtCdCost.value);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0 dsList2=select1 dsList3=select2 dsListT=select3";
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

        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {

        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	switch(this.divData.form.tabData.tabindex) {
        		case 0:
        			this.gfnExcelExport(this.dxGrid);
        			break;
        		case 1:
        			this.gfnExcelExport(this.dxGrid2);
        			break;
        		case 2:
        			this.gfnExcelExport(this.dxGrid3);
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
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.gfnGridAfterSelect(this.dxGrid2);
        		this.gfnGridAfterSelect(this.dxGrid3);

        		if(this.dsListT.rowcount > 0){
        			this.divBottom.form.mskTtSil.set_value(this.dsListT.getColumn(0, "AM_TT_SILHENG"));
        			this.divBottom.form.mskHado.set_value(this.dsListT.getColumn(0, "AM_HADO"));
        			this.divBottom.form.mskCost.set_value(this.dsListT.getColumn(0, "AM_COST"));
        			this.divBottom.form.mskSil.set_value(this.dsListT.getColumn(0, "AM_SILHENG"));
        		}

        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGrid2);
        		this.gfnGridClear(this.dxGrid3);
        	}
        };

        this.divData_tabData_onchanged = function(obj,e)
        {

        };



        // 도급 체크박스
        this.divSearch_chkYN_DOKUB_onchanged = function(obj,e)
        {
        	var 도급수량전_Index = this.dxGrid.getBindCellIndex("body", "도급수량전");
        	var 도급단가전_Index = this.dxGrid.getBindCellIndex("body", "도급단가전");
        	var 도급금액전_Index = this.dxGrid.getBindCellIndex("body", "도급금액전");
        	var 도급수량_Index = this.dxGrid.getBindCellIndex("body", "도급수량");
        	var 도급단가_Index = this.dxGrid.getBindCellIndex("body", "도급단가");
        	var 도급금액_Index = this.dxGrid.getBindCellIndex("body", "도급금액");
        	var 도급수량증감_Index = this.dxGrid.getBindCellIndex("body", "도급수량증감");
        	var 도급금액증감_Index = this.dxGrid.getBindCellIndex("body", "도급금액증감");


        	if(obj.isChecked())
        	{
        		this.dxGrid.setRealColSize("body", 도급수량전_Index, 80);
        		this.dxGrid.setRealColSize("body", 도급단가전_Index, 80);
        		this.dxGrid.setRealColSize("body", 도급금액전_Index, 80);
        		this.dxGrid.setRealColSize("body", 도급수량_Index, 80);
        		this.dxGrid.setRealColSize("body", 도급단가_Index, 80);
        		this.dxGrid.setRealColSize("body", 도급금액_Index, 80);
        		this.dxGrid.setRealColSize("body", 도급수량증감_Index, 80);
        		this.dxGrid.setRealColSize("body", 도급금액증감_Index, 80);

        	}
        	else
        	{
        		this.dxGrid.setRealColSize("body", 도급수량전_Index, 0);
        		this.dxGrid.setRealColSize("body", 도급단가전_Index, 0);
        		this.dxGrid.setRealColSize("body", 도급금액전_Index, 0);
        		this.dxGrid.setRealColSize("body", 도급수량_Index, 0);
        		this.dxGrid.setRealColSize("body", 도급단가_Index, 0);
        		this.dxGrid.setRealColSize("body", 도급금액_Index, 0);
        		this.dxGrid.setRealColSize("body", 도급수량증감_Index, 0);
        		this.dxGrid.setRealColSize("body", 도급금액증감_Index, 0);

        	}
        };

        // 현장예산 체크박스
        this.divSearch_chkYN_EXSILHENG_onchanged = function(obj,e)
        {
        	var 계획수량전_Index = this.dxGrid.getBindCellIndex("body", "계획수량전");
        	var 계획단가전_Index = this.dxGrid.getBindCellIndex("body", "계획단가전");
        	var 계획금액전_Index = this.dxGrid.getBindCellIndex("body", "계획금액전");
        	var 계획수량_Index = this.dxGrid.getBindCellIndex("body", "계획수량");
        	var 계획단가_Index = this.dxGrid.getBindCellIndex("body", "계획단가");
        	var 계획금액_Index = this.dxGrid.getBindCellIndex("body", "계획금액");
        	var 계획수량증감_Index = this.dxGrid.getBindCellIndex("body", "계획수량증감");
        	var 계획금액증감_Index = this.dxGrid.getBindCellIndex("body", "계획금액증감");


        	if(obj.isChecked())
        	{
        		this.dxGrid.setRealColSize("body", 계획수량전_Index, 80);
        		this.dxGrid.setRealColSize("body", 계획단가전_Index, 80);
        		this.dxGrid.setRealColSize("body", 계획금액전_Index, 80);
        		this.dxGrid.setRealColSize("body", 계획수량_Index, 80);
        		this.dxGrid.setRealColSize("body", 계획단가_Index, 80);
        		this.dxGrid.setRealColSize("body", 계획금액_Index, 80);
        		this.dxGrid.setRealColSize("body", 계획수량증감_Index, 80);
        		this.dxGrid.setRealColSize("body", 계획금액증감_Index, 80);

        	}
        	else
        	{
        		this.dxGrid.setRealColSize("body", 계획수량전_Index, 0);
        		this.dxGrid.setRealColSize("body", 계획단가전_Index, 0);
        		this.dxGrid.setRealColSize("body", 계획금액전_Index, 0);
        		this.dxGrid.setRealColSize("body", 계획수량_Index, 0);
        		this.dxGrid.setRealColSize("body", 계획단가_Index, 0);
        		this.dxGrid.setRealColSize("body", 계획금액_Index, 0);
        		this.dxGrid.setRealColSize("body", 계획수량증감_Index, 0);
        		this.dxGrid.setRealColSize("body", 계획금액증감_Index, 0);

        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.chkYN_DOKUB.addEventHandler("onchanged",this.divSearch_chkYN_DOKUB_onchanged,this);
            this.divSearch.form.chkYN_EXSILHENG.addEventHandler("onchanged",this.divSearch_chkYN_EXSILHENG_onchanged,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWX_COSTTUJA.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
