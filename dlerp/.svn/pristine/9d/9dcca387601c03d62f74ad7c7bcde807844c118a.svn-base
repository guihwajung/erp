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
            this.set_titletext("전자결재내역(두레이)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_COMMON_SELECT_01</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZZPR_APRV_LIST_SELECT</Col></Row><Row><Col id=\"TARGET\">execute</Col><Col id=\"SP\">DZZPR_APRV_STAT_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"beginDraftedAt\" type=\"STRING\" size=\"256\"/><Column id=\"endDraftedAt\" type=\"STRING\" size=\"256\"/><Column id=\"size\" type=\"STRING\" size=\"256\"/><Column id=\"page\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"size\">20</Col><Col id=\"page\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staDT_ACQ","0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("조회기간");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ccalDT_APRV_SCHF_FR","staDT_ACQ:0","9","110","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_ID02","ccalDT_APRV_SCHF_FR:0","9","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ccalDT_APRV_SCHF_TO","staNO_ID02:0","9","110","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staST_APRV","ccalDT_APRV_SCHF_TO:0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("결재상태");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboST_APRV","staST_APRV:0","10","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            var divSearch_form_ccboST_APRV_innerdataset = new nexacro.NormalDataset("divSearch_form_ccboST_APRV_innerdataset", obj);
            divSearch_form_ccboST_APRV_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">temporary</Col><Col id=\"datacolumn\">임시저장</Col></Row><Row><Col id=\"codecolumn\">progress</Col><Col id=\"datacolumn\">진행중</Col></Row><Row><Col id=\"codecolumn\">completion</Col><Col id=\"datacolumn\">완료</Col></Row><Row><Col id=\"codecolumn\">return</Col><Col id=\"datacolumn\">완료</Col></Row><Row><Col id=\"codecolumn\">disposal</Col><Col id=\"datacolumn\">폐기</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_ccboST_APRV_innerdataset);
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_AP_TYPE","ccboST_APRV:0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_text("결재유형");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtID_AP_TYPE","staID_AP_TYPE:0","10","100","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","35",null,null,"0","60",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0",null,"35","901",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("전자결재목록");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divPaging","0",null,null,"37","0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_url("cmm::cmmPaging.xfdl");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divSearch.form.ccboST_APRV","value","dsSearch","status");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctxtID_AP_TYPE","value","dsSearch","title");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmPaging.xfdl");
        };
        
        // User Script
        this.registerScript("DZR_APRV_DOORAY.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.totalCount = 0;
        this.page = 0;

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();
        	this.fnSetCombo();
        };

        this.fnInit = function()
        {
        	var date = this.gfnGetDate('date');
        	//var firstDate = this.gfnGetFirstDate(date);

        	this.ccalDT_APRV_SCHF_FR.set_value(date);
        	this.ccalDT_APRV_SCHF_TO.set_value(date);
        	this.ccboST_APRV.set_index(0);
        	this.divPaging.form.fnInitPage();
        	//this.FormBtns.Select.click();
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function()
        {
        	this.btnAprvDetail = this.gfnFormButtonAdd("AprvDetail", "fnAprvDetail");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function()
        {
        	this.ccalDT_APRV_SCHF_FR = this.divSearch.form.ccalDT_APRV_SCHF_FR;
        	this.ccalDT_APRV_SCHF_TO = this.divSearch.form.ccalDT_APRV_SCHF_TO;
        	this.ccboST_APRV = this.divSearch.form.ccboST_APRV;
        	this.ctxtID_AP_TYPE = this.divSearch.form.ctxtID_AP_TYPE;

        	this.dxGrid = this.divData.form.objGrid;
        	this.divPaging = this.divData.form.divPaging;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DZ", "DZR_APRV_DOORAY");
        };

        /************************************************************************
         * 콤보리스트 이벤트
         ************************************************************************/
        this.fnSetCombo = function()
        {
        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsStAprv=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        };


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        this.fnSelect = function(nPage)
        {
        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.page = this.gfnIsNull(nPage) ? 0 : nPage;

        	var beginDraftedAt = this.ccalDT_APRV_SCHF_FR.text;
        	var endDraftedAt = this.ccalDT_APRV_SCHF_TO.text;

        	this.dsSearch.setColumn(this.dsSearch.rowposition, 'beginDraftedAt', beginDraftedAt + 'T00:00:00+09:00');
        	this.dsSearch.setColumn(this.dsSearch.rowposition, 'endDraftedAt', endDraftedAt + 'T23:59:59+09:00');
        	this.dsSearch.setColumn(this.dsSearch.rowposition, 'page', this.page + 1);

        	var strSvcId    = "select";
        	var strSvcType  = "dooray/approvals";
        	var inProc		= "";
        	var inData      = "dsParam=dsSearch";
        	var outData     = "dsList=result";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function()
        {
        	var DT_APRV_SCHF_FR = this.ccalDT_APRV_SCHF_FR.value;
        	var DT_APRV_SCHF_TO = this.ccalDT_APRV_SCHF_TO.value;

         	if (this.gfnIsNull(DT_APRV_SCHF_FR))
        	{
         		this.gfnAlert("조회 시작일을 입력 하세요.", function(){
        			this.ccalDT_APRV_SCHF_FR.setFocus();
        		});
         		return false;
         	}

        	if (this.gfnIsNull(DT_APRV_SCHF_TO))
        	{
         		this.gfnAlert("조회 종료일을 입력 하세요.", function(){
        			this.ccalDT_APRV_SCHF_TO.setFocus();
        		});
         		return false;
         	}

        	if (this.gfnGetDiffDate(DT_APRV_SCHF_FR, DT_APRV_SCHF_TO) < 0)
        	{
        		this.gfnAlert("조회 종료일이 시작일보다 클수없습니다.", function(){
        			this.ccalDT_APRV_SCHF_TO.setFocus();
        		});
         		return false;
        	}

        	return true;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "combo")
        	{
        		this.fnInit();
        	}
        	else if(svcID == "select")
        	{
        		this.gfnGridAfterSelect(this.dxGrid);
        		console.log(this.totalCount);
        		this.divPaging.form.fnCreatePage('fnSelect', this.totalCount, 20, this.page, Math.ceil(this.totalCount / 20));
        	}
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         * 실행
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fnAprvDetail = function()
        {
        	if (this.dsList.getColumn(this.dsList.rowposition, this.ucFlag) == '#') return false;

        	var oArg = {
        		ID : this.dsList.getColumn(this.dsList.rowposition, 'id')
        	};
        	var oOption = {
        		width : 1280,
        		height : 768,
        		popuptype : 'modeless'
        	};
        	this.gfnOpenPopup('APRV_POP', 'dzr::DZR_APRV_DOORAY_DLG.xfdl', oArg, '', oOption);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccalDT_APRV_SCHF_FR.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.ccalDT_APRV_SCHF_TO.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.staID_AP_TYPE.addEventHandler("onclick",this.divSearch_staLabel3_01_00_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DZR_APRV_DOORAY.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
