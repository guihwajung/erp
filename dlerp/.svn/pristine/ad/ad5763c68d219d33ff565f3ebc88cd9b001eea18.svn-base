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
            this.set_titletext("전자결재내역");
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
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_APRV_SCHF_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_APRV_SCHF_TO\" type=\"STRING\" size=\"256\"/><Column id=\"ST_APRV\" type=\"STRING\" size=\"256\"/><Column id=\"ID_AP_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExecute", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_AP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_AP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SYSTEM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_USE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_ALL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SYSTEM\">DZ</Col><Col id=\"CD_TYPE\">DZ_APRV</Col><Col id=\"YN_USE\">Y</Col><Col id=\"YN_ALL\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStAprv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAprvLines", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAprv", this);
            obj._setContents("");
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
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsStAprv");
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

            obj = new Grid("objGrid","0","35",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0",null,"35","901",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("전자결재목록");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccalDT_APRV_SCHF_FR","value","dsSearch","DT_APRV_SCHF_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccalDT_APRV_SCHF_TO","value","dsSearch","DT_APRV_SCHF_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccboST_APRV","value","dsSearch","ST_APRV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctxtID_AP_TYPE","value","dsSearch","ID_AP_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DZR_CALLBACK.xfdl", function() {
        this.objApp = this.gfnGetApplication();

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

        	//this.FormBtns.Select.click();
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function()
        {
        	this.btnApprovalLog = this.gfnFormButtonAdd("ApprovalLog", "fnApprovalLog"); //재실행
        	this.btnPreview2 = this.gfnFormButtonAdd("Preview2", "fnPreview2"); //재실행
        	this.btnPreview = this.gfnFormButtonAdd("Preview", "fnPreview"); //재실행
        	this.btnExecute = this.gfnFormButtonAdd("Execute", "fnExecute"); //재실행
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
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DZ", "DZR_AR_HISTORY");
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
        	this.dsExecute = new Dataset();
        	this.dsExecute.addColumn("CD_CORP", "string");
        	this.dsExecute.addColumn("NO_APRV", "int");
        	this.dsExecute.addColumn("ST_APRV", "string");
        	this.dsExecute.addColumn("NO_DOC", "string");
        	this.dsExecute.addColumn("ID_APRV", "string");
        	this.dsExecute.addColumn("DEPT_APRV", "string");

        	this.dsParam = new Dataset();
        	this.dsParam.addColumn("beginDraftedAt", "string");
        	this.dsParam.addColumn("endDraftedAt", "string");
        	this.dsParam.addColumn("size", "string");
        	this.dsParam.addColumn("page", "string");
        };


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        this.fnSelect = function()
        {
        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSearch.setColumn(this.dsSearch.rowposition, 'CD_CORP', this.AuthClient.CD_CORP);

        	var strSvcId    = "select";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSearch";
        	var outData     = "dsList=select0";
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
        	}
        	else if(svcID == "execute")
        	{
        		this.FormBtns.Select.click();
        	}
        	else if(svcID == "log")
        	{
        		this.FormBtns.Select.click();
        	}
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         * 실행
         ************************************************************************/
        this.fnApprovalLog = function()
        {
        	if (!this.fnSelectValidate())	return false;

        	this.dsParam.clearData();

        	var beginDraftedAt = this.ccalDT_APRV_SCHF_FR.text;
        	var endDraftedAt = this.ccalDT_APRV_SCHF_TO.text;

        	var nRow = this.dsParam.addRow();
        	this.dsParam.setColumn(nRow, 'beginDraftedAt', beginDraftedAt + 'T00:00:00+09:00');
        	this.dsParam.setColumn(nRow, 'endDraftedAt', endDraftedAt + 'T23:59:59+09:00');
        	this.dsParam.setColumn(nRow, "size", "1");
        	this.dsParam.setColumn(nRow, "page", "0");

        	var strSvcId    = "log";
        	var strSvcType  = "dooray/approvalLog";
        	var inProc		= "";
        	var inData      = "dsParam=dsParam";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        };

        this.fnExecute = function(obj,e)
        {
        	if (this.dsList.rowposition > -1 && this.gfnGetFlag(this.dsList, this.dsList.rowposition) != '#')
        	{
        		this.gfnConfirm("실행하시겠습니까?", function(strId, isOk)
        		{
        			if(!isOk) return false;

        				var strSvcId    = "lines";
        				var strSvcType  = "dooray/approval-lines";
        				var inProc		= "";
        				var inData      = "";
        				var outData     = "dsAprvLines=result";
        				var strArg      = "NO_DOC=" + this.dsList.getColumn(this.dsList.rowposition, "NO_DOC");
        				var callBackFnc = "fnExecuteProc";

        				this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        		});
        	}
        	else
        	{
        		this.gfnAlert("실행할 정보가 없습니다.");
        	}
        };

        this.fnExecuteProc = function()
        {
        	this.dsExecute.clearData();

        	var idx = this.dsAprvLines.findRowNF('order', this.dsAprvLines.rowcount);

        	var ST_DOORAY_APRV = this.dsList.getColumn(this.dsList.rowposition, "ST_DOORAY_APRV");
        	var ST_APRV = this.gfnDecode(ST_DOORAY_APRV, 'completion', '4', 'return', '5', 'disposal', '6', null);

        	if (this.gfnIsNull(ST_APRV))
        	{
        		return false;
        	}

        	var nRow = this.dsExecute.addRow();
        	this.dsExecute.setColumn(nRow, "CD_CORP", this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));
        	this.dsExecute.setColumn(nRow, "NO_APRV", this.dsList.getColumn(this.dsList.rowposition, "NO_APRV"));
        	this.dsExecute.setColumn(nRow, "NO_DOC", this.dsList.getColumn(this.dsList.rowposition, "NO_DOC"));
        	this.dsExecute.setColumn(nRow, "ID_APRV", this.dsAprvLines.getColumn(idx, 'organizationMember_id'));
        	this.dsExecute.setColumn(nRow, "DEPT_APRV", this.dsAprvLines.getColumn(idx, 'department_id'));
        	this.dsExecute.setColumn(nRow, "ST_APRV", ST_APRV);

        	var strSvcId    = "execute";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "execute=dsExecute";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        }

        this.fnPreview = function()
        {
        	if (this.dsList.getColumn(this.dsList.rowposition, this.ucFlag) == '#') return false;

        	if (this.dsList.getColumn(this.dsList.rowposition, 'YN_DOC') == 'Y')
        	{
        		var oArg = {
        			//CD_CORP : this.dsList.getColumn(this.dsList.rowposition, 'CD_CORP'),
        			NO_APRV : this.dsList.getColumn(this.dsList.rowposition, 'NO_APRV'),
        			DOORAY_SVC_ID : 'AP_DOC_URL'
        		};
        		var oOption = {
        			width : 1280,
        			height : 768,
        			popuptype : 'modeless'
        		};
        		this.gfnOpenPopup('APRV_POP', 'dz::dzr/DZR_APPROVAL.xfdl', oArg, '', oOption);
        	}
        	else
        	{
        		this.gfnAlert('전자결재문서 생성 전입니다.');
        	}
        };

        this.fnPreview2 = function()
        {
        	if (this.dsList.getColumn(this.dsList.rowposition, this.ucFlag) == '#') return false;


        	if (this.dsList.getColumn(this.dsList.rowposition, 'YN_DOC') == 'Y')
        	{
        		var oArg = {
        			CD_CORP : this.dsList.getColumn(this.dsList.rowposition, 'CD_CORP'),
        			NO_APRV : this.dsList.getColumn(this.dsList.rowposition, 'NO_APRV')
        		};
        		var oOption = {
        			width : 1280,
        			height : 768,
        			popuptype : 'modeless'
        		};
        		this.gfnOpenPopup('APRV_POP', 'dz::dzr/DZR_APPROVAL.xfdl', oArg, '', oOption);
        	}
        	else
        	{
        		this.gfnAlert('전자결재문서 생성 전입니다.');
        	}
        };


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };
        this.dsList_onrowposchanged = function(obj,e)
        {
        	var YN_DOC = obj.getColumn(e.newrow, 'YN_DOC');
        	var ST_APRV = obj.getColumn(e.newrow, 'ST_APRV');
        	var ST_DOORAY_APRV = obj.getColumn(e.newrow, 'ST_DOORAY_APRV');

        	this.btnPreview2.set_enable((YN_DOC == 'Y'));
        	this.btnPreview.set_enable(!this.gfnIsNull(ST_DOORAY_APRV));

        	if (ST_APRV == '4' && ST_DOORAY_APRV == 'completion')
        	{
        		this.btnExecute.set_enable(true);
        	}
        	else if (ST_APRV == '5' && ST_DOORAY_APRV == 'return')
        	{
        		this.btnExecute.set_enable(true);
        	}
        	else if (ST_APRV == '6' && ST_DOORAY_APRV == 'disposal')
        	{
        		this.btnExecute.set_enable(true);
        	}
        	else
        	{
        		this.btnExecute.set_enable(true);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccalDT_APRV_SCHF_FR.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.ccalDT_APRV_SCHF_TO.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.staID_AP_TYPE.addEventHandler("onclick",this.divSearch_staLabel3_01_00_onclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DZR_CALLBACK.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
