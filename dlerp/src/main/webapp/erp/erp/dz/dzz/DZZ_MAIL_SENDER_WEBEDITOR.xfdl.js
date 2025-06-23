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
                this._setFormPosition(930,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZZPR_COM_MAIL_LIST_SELECT</Col></Row><Row><Col id=\"SP\">DZZPR_COM_MAIL_HTML_SELECT</Col><Col id=\"TARGET\">select</Col></Row><Row><Col id=\"TARGET\">send</Col><Col id=\"SP\">DZZPR_COM_MAIL_SEND</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM1\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM2\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM3\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM4\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM5\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM6\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboTY_GUBUN","10","10",null,"24","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsTY_GUBUN");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_TITLE");
            obj.set_text("cbo00");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,"650","81","22","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSend",null,"650","80","22","btnCancel:5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("발송");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divEditor","10","44",null,"596","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.cboTY_GUBUN","value","dsSearch","CD_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DZZ_MAIL_SENDER_WEBEDITOR.xfdl", function() {
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

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_GUBUN))
        	{
        		this.dsSearch.setColumn(0, "CD_GUBUN", this.getOwnerFrame().CD_GUBUN);
        	}
        	if(!this.gfnIsNull(this.getOwnerFrame().PARAM1))
        	{
        		this.dsSearch.setColumn(0, "PARAM1", this.getOwnerFrame().PARAM1);
        	}
        	if(!this.gfnIsNull(this.getOwnerFrame().PARAM2))
        	{
        		this.dsSearch.setColumn(0, "PARAM2", this.getOwnerFrame().PARAM2);
        	}
        	if(!this.gfnIsNull(this.getOwnerFrame().PARAM3))
        	{
        		this.dsSearch.setColumn(0, "PARAM3", this.getOwnerFrame().PARAM3);
        	}
        	if(!this.gfnIsNull(this.getOwnerFrame().PARAM4))
        	{
        		this.dsSearch.setColumn(0, "PARAM4", this.getOwnerFrame().PARAM4);
        	}
        	if(!this.gfnIsNull(this.getOwnerFrame().PARAM5))
        	{
        		this.dsSearch.setColumn(0, "PARAM5", this.getOwnerFrame().PARAM5);
        	}
        	if(!this.gfnIsNull(this.getOwnerFrame().PARAM6))
        	{
        		this.dsSearch.setColumn(0, "PARAM6", this.getOwnerFrame().PARAM6);
        	}

        	var form = this;
        	this.gfnLoadSmartEditor(function() {
        		// Script Onload후 호출되는 영역
        		var et = form.divData.form.divEditor._unique_id;
        		var textarea = document.createElement("textarea");
        		textarea.setAttribute("id", "txtEditor");
        		textarea.setAttribute("name", "txtEditor");
        		textarea.style.width = form.divData.form.divEditor._adjust_width-2;
        		textarea.style.height = form.divData.form.divEditor._adjust_height-50;
        		document.getElementById(et).appendChild(textarea);

        		form._txtEditor = textarea;

        		var oEditors = [];
        		nhn.husky.EZCreator.createInIFrame({
        		 oAppRef: oEditors,
        		 elPlaceHolder:  "txtEditor",
        		 sSkinURI: "./js/se2/SmartEditor2Skin.html",
        		 fCreator: "createSEditor2",
        		 elIFrameID: "WebEditor",
        		 fOnAppLoad : function(){
        			// 웹에디터 완전 로딩 전 웹에이터를 접근하는 경우 로딩후 이벤트에 선언.
        			form.fnSetCombo();
        		 }
        		});
        		form._webEditor = oEditors;

        	});

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

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_GUBUN", "string");

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_GUBUN", "string");
        	this.dsSelect.addColumn("CD_CODE", "string");
        	this.dsSelect.addColumn("PARAM1", "string");
        	this.dsSelect.addColumn("PARAM2", "string");
        	this.dsSelect.addColumn("PARAM3", "string");
        	this.dsSelect.addColumn("PARAM4", "string");
        	this.dsSelect.addColumn("PARAM5", "string");
        	this.dsSelect.addColumn("PARAM6", "string");

        	this.dsSend = new Dataset();
        	this.dsSend.addColumn("CD_GUBUN", "string");
        	this.dsSend.addColumn("CD_CODE", "string");
        	this.dsSend.addColumn("PARAM1", "string");
        	this.dsSend.addColumn("PARAM2", "string");
        	this.dsSend.addColumn("PARAM3", "string");
        	this.dsSend.addColumn("PARAM4", "string");
        	this.dsSend.addColumn("PARAM5", "string");
        	this.dsSend.addColumn("PARAM6", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         this.fnSelect = function()
         {
        	this.dsSelect.clearData();
        	var nrow = this.dsSelect.addRow();

        	this.dsSelect.setColumn(nrow, "CD_GUBUN", this.dsSearch.getColumn(0, "CD_GUBUN"));
        	this.dsSelect.setColumn(nrow, "CD_CODE", this.dsSearch.getColumn(0, "CD_CODE"));
        	this.dsSelect.setColumn(nrow, "PARAM1", this.dsSearch.getColumn(0, "PARAM1"));
        	this.dsSelect.setColumn(nrow, "PARAM2", this.dsSearch.getColumn(0, "PARAM2"));
        	this.dsSelect.setColumn(nrow, "PARAM3", this.dsSearch.getColumn(0, "PARAM3"));
        	this.dsSelect.setColumn(nrow, "PARAM4", this.dsSearch.getColumn(0, "PARAM4"));
        	this.dsSelect.setColumn(nrow, "PARAM5", this.dsSearch.getColumn(0, "PARAM5"));
        	this.dsSelect.setColumn(nrow, "PARAM6", this.dsSearch.getColumn(0, "PARAM6"));

        	var strSvcId    = "select";
        	var strSvcType  = "select";
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
        						callBackFnc); // 통신방법 정의 [생략가능]
         }

        this.fnSend = function()
        {
        	this._webEditor.getById["txtEditor"].exec("UPDATE_CONTENTS_FIELD", []);
        	var contents = this._txtEditor.value;

        	this.dsSend.clearData();
        	this.dsSend.addRow();

        	this.dsSend.setColumn(nrow, "CD_GUBUN", this.dsSearch.getColumn(0, "CD_GUBUN"));
        	this.dsSend.setColumn(nrow, "CD_CODE", this.dsSearch.getColumn(0, "CD_CODE"));
        	this.dsSend.setColumn(nrow, "PARAM1", this.dsSearch.getColumn(0, "PARAM1"));
        	this.dsSend.setColumn(nrow, "PARAM2", this.dsSearch.getColumn(0, "PARAM2"));
        	this.dsSend.setColumn(nrow, "PARAM3", this.dsSearch.getColumn(0, "PARAM3"));
        	this.dsSend.setColumn(nrow, "PARAM4", this.dsSearch.getColumn(0, "PARAM4"));
        	this.dsSend.setColumn(nrow, "PARAM5", this.dsSearch.getColumn(0, "PARAM5"));
        	this.dsSend.setColumn(nrow, "PARAM6", this.dsSearch.getColumn(0, "PARAM6"));

        	var strSvcId    = "send";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "send=dsSend";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
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
        	if (svcID == "send") {
        		if(errorCode == 0)
        		{
        			// this.close()가 작동하지 않았고,
        			// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        			this.fnCallback_callback = function()
        			{
        				this.getParentContext().close(true);
        			}

        			this.gfnAlert("메일 발송이 정상처리되었습니다.", "fnCallback_callback");
        		}else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "select") {
        		if(this.dsList.rowcount > 0)
        		{
        			var htmlVal = "";
        			if(!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CODE"))){
        				htmlVal = this.dsList.getColumn(0, "DS_HTML");
        			}
        			this._txtEditor.value = htmlVal;
        			this._webEditor.getById["txtEditor"].exec("LOAD_CONTENTS_FIELD");


        // 			var vHtml = this.divData.form.webMESSAGE_BODY.getProperty("document").getProperty("body");
        // 			vHtml.setProperty("innerHTML", htmlVal);

        			//this.divData.form.webMESSAGE_BODY.set_value(html);
        		}
        	}else if(svcID == "combo") {
        		this.dsTY_GUBUN.insertRow(0);
        		this.dsTY_GUBUN.setColumn(0, "CD_CODE", "");
        		this.dsTY_GUBUN.setColumn(0, "DS_TITLE", "=== 메일 유형 목록 ===");
        		if(this.dsTY_GUBUN.rowcount == 2) {
        			this.divData.form.cboTY_GUBUN.set_index(1);
        			this.fnSelect();
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

        this.fnSetCombo = function()
        {
        	this.dsCombo.clearData();
        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_GUBUN", this.dsSearch.getColumn(0, "CD_GUBUN"));

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_GUBUN=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }


        this.divData_cbo00_onitemchanged = function(obj,e)
        {
        	this.fnSelect();
        };

        this.divData_btnSend_onclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CODE"))) {
        		this.gfnAlert("메일 유형 목록을 선택하세요.");
        		return false;
        	}
        	this.fnSend();
        };

        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.cboTY_GUBUN.addEventHandler("onitemchanged",this.divData_cbo00_onitemchanged,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.divData.form.btnSend.addEventHandler("onclick",this.divData_btnSend_onclick,this);
        };
        this.loadIncludeScript("DZZ_MAIL_SENDER_WEBEDITOR.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
