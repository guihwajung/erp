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
            this.set_titletext("반제현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHCPR_MISUMIKYUL_SLIP_SELECT</Col></Row><Row><Col id=\"TARGET\">selectSub</Col><Col id=\"SP\">DHCPR_MISUMIKYUL_SELECT_DTL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SLIP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_taborder("0");
            obj.set_text("법인코드");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0","10","259","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DZX_CFCORP_STD");
            obj.getSetter("AutoSet").set("false");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SLIP","ccfCD_CORP:0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("미결번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_SLIP","staCD_SLIP:0","10","170","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_cssclass("borderBG");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:-3",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","34.38%","17.30%","400","23",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cursor("ns-resize");
            obj.set_edge("url(\'theme://images/slt_WF_SplitterH.png\') 2px 0px");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter:0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staGrdTitleSub","0","-10",null,"35","0",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("반제정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","staGrdTitleSub:0",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter:6",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staGrdTitle","0","0","100%","35",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("미결정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","staGrdTitle:0",null,null,"0","1",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch.form.ctxtCD_SLIP","value","dsSearch","CD_SLIP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHC_MIKYUL_SLIP_SELECT.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);		//법인코드
        	this.dsSearch.setColumn(0, "DS_CORP", this.getOwnerFrame().DS_CORP);		//법인코드명
        	this.dsSearch.setColumn(0, "CD_SLIP", this.getOwnerFrame().CD_SLIP);		//반제번호

        	this.ccfCD_CORP.form.set_readonly(true);

        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
         ************************************************************************/
        this.fnSetButton = function() {

        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnSlipSearch   = this.gfnFormButtonAdd("SlipSearch"  , "fnSlipSearch");		//전표조회
        	this.btnBanjaeSearch = this.gfnFormButtonAdd("BanjaeSearch", "fnBanjaeSearch");		//반제전표조회
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.gfnSetElements();

        	this.staGrdTitle    = this.divData.form.divDataTop.form.staGrdTitle;
        	this.staGrdTitleSub = this.divData.form.divDataBottom.form.staGrdTitleSub;

        	this.dxGrid    = this.divData.form.divDataTop.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataBottom.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid , this.dsList, "DH", "DHC_MIKYUL_SLIP_SELECT");

        	this.dxGrid.addEventHandler("oncelldblclick" , this.fnGrid_OnCelldblclick, this);
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DH", "DHC_BOND_SELECT_DTL");

        	this.dxGridSub.addEventHandler("oncelldblclick" , this.fnGridSub_OnCelldblclick, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP"	 , "string");
        	this.dsSelect.addColumn("CD_SLIP"	 , "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_CORP"   , "string");
        	this.dsSelectSub.addColumn("CD_SLIP_MI", "string");

        	this.dsResult = new Dataset();
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	var nRow = this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP"	 , this.dsSearch.getColumn(0, "CD_CORP"));          // 법인코드
        	this.dsSelect.setColumn(0, "CD_SLIP"	 , this.dsSearch.getColumn(0, "CD_SLIP"));          // 반제번호

        	var strSvcId    = "select";
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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        this.fnSelectSub = function() {
        	if (this.dxGrid.rowcount == 0) return false;

        	this.dsListSub.clearData();
        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelectSub.clearData();
        	var nRow = this.dsSelectSub.addRow();
        	this.dsSelectSub.setColumn(nRow, "CD_CORP"   , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelectSub.setColumn(nRow, "CD_SLIP_MI", this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP_MI"));

        	var strSvcId    = "selectSub";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectSub=dsSelectSub";
        	var outData     = "dsListSub=selectSub0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

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
        	var arrGrid = [], arrSheetName = [];
        	arrGrid[0] = this.dxGrid;
        	arrGrid[1] = this.dxGridSub;

        	arrSheetName[0] = this.staGrdTitle.text;
        	arrSheetName[1] = this.staGrdTitleSub.text;

        	this.gfnExcelExportMulti(arrGrid, arrSheetName, this.FormInfo.NM_FORM);
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
        	switch(svcID) {
        	case "select" :
        		this.gfnGridAfterSelect(this.dxGrid);

        		break;
        	case "selectSub" :
        		this.gfnGridAfterSelect(this.dxGridSub);
        		break;
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
        	//필터 로우일 경우
        	if(this.dsList.getColumn(e.row, this.ucFlag) == "#"){
        		this.gfnGridClear(this.dxGridSub);
        	}

            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		this.fnSelectSub();
        		obj.oldrow = -1;
        	}
        };

        //그리드 더블클릭 이벤트
        this.fnGrid_OnCelldblclick = function(obj,e){
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);

        	this.fnSlipSearch();
        };

        //상세그리드 더블클릭 이벤트
        this.fnGridSub_OnCelldblclick = function(obj,e){
        	this.fnBanjaeSearch();
        };
        /************************************************************************
         * 서브 버튼 이벤트
         ************************************************************************/


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.divData_ondragmove = function(obj,e){
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_top(e.clienty);
        		this.divData.form.resetScroll();
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e){
        	e.set_userdata("splitter");
        	return true;
        };

        //전표발행 팝업 콜백
        this.fnIssueSlipCallbak = function (strID, val){
        	if(!this.gfnIsNull(val)){
        		var json = JSON.parse(val);

        		if(json.IsChange){
        			this.FormBtns.Select.click();
        		}
        	}
        };

        //전표조회
        this.fnSlipSearch = function (obj,e){
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP_MI"))){
        		return;
        	}

        	var param = {};
        	param.CD_CORP  = this.dsSearch.getColumn(0, "CD_CORP");
        	param.CD_TRADE = this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP_MI");

        	this.gfnPopIssueSlip(param);
        }

        //반제전표조회
        this.fnBanjaeSearch = function (obj,e){
        	if(!this.gfnGridIsRow(this.dxGridSub)) return;

        	if(this.gfnIsNull(this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_SLIP_JU"))){
        		return;
        	}

        	var param = {};
        	param.CD_CORP  = this.dsSearch.getColumn(0, "CD_CORP");

        	// 환경변수에 법인코드의 전표번호 길이
        	var codeLen = this.gfnGetConfig(this.dsSearch.getColumn(0, "CD_CORP"), "CD_TRADE_LENGTH");

        	param.CD_TRADE = this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_SLIP_JU");
        	//환경변수에 값이 있을경우
        	if(!this.gfnIsNull(codeLen)){
        		// 길이만큼 잘라서 다시 셋팅
        		param.CD_TRADE = this.gfnLeft(this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_SLIP_JU"), codeLen);
        	}

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP_STD", "", param);

        	//this.gfnPopIssueSlip(param);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
        };
        this.loadIncludeScript("DHC_MIKYUL_SLIP_SELECT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
