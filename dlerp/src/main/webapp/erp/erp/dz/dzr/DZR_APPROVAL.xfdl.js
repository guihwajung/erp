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
            this.set_titletext("전자결재 상신");
            if (Form == this.constructor)
            {
                this._setFormPosition(1120,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_NOTE\" type=\"STRING\" size=\"3000\"/></ColumnInfo><Rows><Row><Col id=\"DS_NOTE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SP\">DZZPR_APRV_VIEW_SELECT</Col><Col id=\"TARGET\">select</Col></Row><Row><Col id=\"TARGET\">execute</Col><Col id=\"SP\">DZZPR_APRV_STAT_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"NO_APRV\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"NO_APRV\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExecute", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"NO_APRV\" type=\"STRING\" size=\"256\"/><Column id=\"ST_APRV\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DOC\" type=\"STRING\" size=\"256\"/><Column id=\"ID_APRV\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_APRV\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("staTT_DOC","10","10","730","35",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_fittocontents("none");
            this.divData.addChild(obj.name, obj);

            obj = new WebBrowser("webView","10","staTT_DOC:0",null,null,"10","10",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divButton",null,"10","380","35","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.set_urlchangeeffect("W");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnConfirm",null,"4","76",null,"0","5",null,null,null,null,this.divData.form.divButton.form);
            obj.set_taborder("0");
            obj.set_text("결재");
            obj.set_cssclass("btn_WF_function");
            obj.set_enable("false");
            obj.set_visible("true");
            this.divData.form.divButton.addChild(obj.name, obj);

            obj = new Button("btnReject",null,"4","52",null,"btnConfirm:3","5",null,null,null,null,this.divData.form.divButton.form);
            obj.set_taborder("1");
            obj.set_text("반려");
            obj.set_cssclass("btn_WF_action");
            obj.set_enable("false");
            this.divData.form.divButton.addChild(obj.name, obj);

            obj = new Button("btnCancle",null,"4","76",null,"btnReject:3","5",null,null,null,null,this.divData.form.divButton.form);
            obj.set_taborder("2");
            obj.set_text("상신취소");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_action");
            this.divData.form.divButton.addChild(obj.name, obj);

            obj = new Button("btnRequest",null,"4","76",null,"btnCancle:3","5",null,null,null,null,this.divData.form.divButton.form);
            obj.set_taborder("3");
            obj.set_text("결재상신");
            obj.set_enable("false");
            this.divData.form.divButton.addChild(obj.name, obj);
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
        this.registerScript("DZR_APPROVAL.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	//this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();
        	this.fnSearch();
        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
         ************************************************************************/
        this.fnSetButton = function()
        {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Select.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function()
        {
        	//this.btn1 = this.gfnFormButtonAdd("BTN_EXTENSION", "fnExtension");

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function()
        {
        	this.btnRequest = this.divData.form.divButton.form.btnRequest;
        	this.btnCancle = this.divData.form.divButton.form.btnCancle;
        	this.btnReject = this.divData.form.divButton.form.btnReject;
        	this.btnConfirm = this.divData.form.divButton.form.btnConfirm;

        	this.webView = this.divData.form.webView;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function()
        {
        	// 그리드 초기화
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function()
        {
        	var CD_CORP = this.gfnGetParam('CD_CORP');
        	var NO_APRV = this.gfnGetParam('NO_APRV');

        	if (this.gfnIsNull(CD_CORP))
        	{
        		CD_CORP = this.objApp.gdsUserInfo.getColumn(this.objApp.gdsUserInfo.rowposition, 'CD_CORP');
        	}

        	this.dsSearch.setColumn(this.dsSearch.rowposition, 'CD_CORP', CD_CORP);
        	this.dsSearch.setColumn(this.dsSearch.rowposition, 'NO_APRV', NO_APRV);
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        this.fnSearch = function ()
        {
        	var strSvcId = "select";
            var strSvcType = "select";
            var inProc = "_dsProc";
            var inData = "select=dsSearch";
            var outData = "dsList=select0";
            var strArg = "";
            var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        };

        this.fnExecute = function(ST_APRV)
        {
        	var date = this.gfnGetDate("milli");

        	var CD_CORP = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        	var NO_APRV = this.dsList.getColumn(this.dsList.rowposition, "NO_APRV");
        	var NO_DOC = this.dsList.getColumn(this.dsList.rowposition, "NO_DOC");
        	var ID_USER = this.objApp.gdsUserInfo.getColumn(this.objApp.gdsUserInfo.rowposition, 'ID_USER');
        	var CD_DEPT_ACNT = this.objApp.gdsUserInfo.getColumn(this.objApp.gdsUserInfo.rowposition, 'CD_DEPT_ACNT');

        	this.dsExecute.clearData();

        	if (this.gfnIsNull(NO_DOC))
        	{
        		NO_DOC = "TEST_DOC_" + date;
        	}

        	var nRow = this.dsExecute.addRow();
        	this.dsExecute.setColumn(nRow, "CD_CORP", CD_CORP);
        	this.dsExecute.setColumn(nRow, "NO_APRV", NO_APRV);
        	this.dsExecute.setColumn(nRow, "ST_APRV", ST_APRV);
        	this.dsExecute.setColumn(nRow, "NO_DOC", NO_DOC);
        	this.dsExecute.setColumn(nRow, "ID_APRV", ID_USER);
        	this.dsExecute.setColumn(nRow, "DEPT_APRV", CD_DEPT_ACNT);

        	var strSvcId    = "execute";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "execute=dsExecute";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        }
        /************************************************************************
         * Validate
         ************************************************************************/


        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select")
        	{
        		var staTT_DOC = this.divData.form.staTT_DOC;
        		var divButton = this.divData.form.divButton;

        		var SVC_ID = this.gfnGetParam('DOORAY_SVC_ID');

        		if (!this.gfnIsNull(SVC_ID))
        		{
        			staTT_DOC.set_visible(false);
        			divButton.set_visible(false);
        			this.set_visible(false);
        			var that = this;
        			var sUrl = this.gfnGetConfig('DZ', 'AP_DOMAIN');
        			var sUri = this.gfnGetConfig('DZ', SVC_ID);
        			if (this.gfnIsNull(sUri))
        			{
        				this.gfnAlert('존재하지 않는 페이지 입니다.[' + SVC_ID + ']');
        				return false;
        			}

        			var oParam = this.gfnDataSetToJson(this.dsList, this.dsList.rowposition);
        			if (nexacro.getEnvironmentVariable("evRunMode") == '2')
        			{
        				oParam.POST_URL = encodeURIComponent(this.gfnGetServerUrl() + "/quickview.html?screenid=ScreenDeskTop&formname=dzr::DZR_APRV_RELOAD.xfdl");
        			}
        			else
        			{
        				if (location.hostname == "localhost" || location.hostname == "127.0.0.1")
        				{
        					oParam.POST_URL = encodeURIComponent(this.gfnGetServerUrl() + "/erp/quickview.html?screenid=ScreenDeskTop&formname=dzr::DZR_APRV_RELOAD.xfdl");
        				}
        				else
        				{
        					oParam.POST_URL = encodeURIComponent(this.gfnGetServerUrl() + "/quickview.html?screenid=ScreenDeskTop&formname=dzr::DZR_APRV_RELOAD.xfdl");
        				}
        			}

        			sUrl += sUri.replace(/\{(\w+)\}/g, function(idx, val) {
        				var sValue = that.gfnGetParam(val);
        				if (that.gfnIsNull(sValue))
        				{
        					return that.gfnNvl(oParam[val], '');
        				}

        				return sValue;
        			});

        			var nWidth = 1028;
        			var nHeight = 760;
        			var nLeft = Math.ceil(( window.screen.width - nWidth )/2);
        			var nTop = Math.ceil(( window.screen.height - nHeight )/2);

        			var win = window.open(sUrl, 'approval', "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width=" + nWidth + ", height=" + nHeight + ", left=" + nLeft + ", top=" + nTop);

        			if (win == null || typeof(win) == "undefined" || (win == null && win.outerWidth == 0) || (win != null && win.outerHeight == 0) || win.test == "undefined")
        			{
        				alert("팝업 차단 기능이 설정되어있습니다\n\n차단 기능을 해제(팝업허용) 한 후 다시 이용해 주십시오.");
        			}

        			this.close();
        		}
        		else
        		{
        			staTT_DOC.set_visible(true);
        			divButton.set_visible(true);

        			var ST_APRV = this.dsList.getColumn(this.dsList.rowposition, 'ST_APRV');
        			var TT_DOC = this.dsList.getColumn(this.dsList.rowposition, 'TT_DOC');
        			var DS_DOC = this.dsList.getColumn(this.dsList.rowposition, 'DS_DOC');

        			this.divData.form.staTT_DOC.set_text(TT_DOC);
        			this.webView.getProperty("document").getProperty("body").setProperty("innerHTML", DS_DOC);

        			this.btnConfirm.set_text('결재');

        			if (ST_APRV == '1')
        			{
        				this.btnRequest.set_enable(true);
        				this.btnCancle.set_enable(false);
        				this.btnReject.set_enable(false);
        				this.btnConfirm.set_enable(false);
        			}
        			else if (ST_APRV == '2')
        			{
        				this.btnRequest.set_enable(false);
        				this.btnCancle.set_enable(true);
        				this.btnReject.set_enable(true);
        				this.btnConfirm.set_enable(true);
        			}
        			else if (ST_APRV == '3')
        			{
        				this.btnRequest.set_enable(false);
        				this.btnCancle.set_enable(false);
        				this.btnReject.set_enable(true);
        				this.btnConfirm.set_enable(true);
        				this.btnConfirm.set_text('결재완료');
        			}
        			else
        			{
        				this.btnRequest.set_enable(false);
        				this.btnCancle.set_enable(false);
        				this.btnReject.set_enable(false);
        				this.btnConfirm.set_enable(false);
        			}

        			this.resetScroll();
        		}
        	}
        	else if (svcID == "execute")
        	{
        		this.fnSearch();
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.divData_divButton_btnRequest_onclick = function(obj,e)
        {
        	this.fnExecute('2');
        };

        this.divData_divButton_btnCancle_onclick = function(obj,e)
        {
        	this.fnExecute('6');
        };

        this.divData_divButton_btnReject_onclick = function(obj,e)
        {
        	this.fnExecute('5');
        };

        this.divData_divButton_btnConfirm_onclick = function(obj,e)
        {
        	if (obj.text == '결재완료')
        	{
        		this.fnExecute('4');
        	}
        	else
        	{
        		this.fnExecute('3');
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.webView.addEventHandler("onusernotify",this.divData_web00_onusernotify,this);
            this.divData.form.divButton.form.btnConfirm.addEventHandler("onclick",this.divData_divButton_btnConfirm_onclick,this);
            this.divData.form.divButton.form.btnReject.addEventHandler("onclick",this.divData_divButton_btnReject_onclick,this);
            this.divData.form.divButton.form.btnCancle.addEventHandler("onclick",this.divData_divButton_btnCancle_onclick,this);
            this.divData.form.divButton.form.btnRequest.addEventHandler("onclick",this.divData_divButton_btnRequest_onclick,this);
        };
        this.loadIncludeScript("DZR_APPROVAL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
