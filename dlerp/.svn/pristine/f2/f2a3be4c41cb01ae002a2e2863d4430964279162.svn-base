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
                this._setFormPosition(500,250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">sync_ap</Col><Col id=\"SP\">DZZPR_AP_VENDOR_SYNC_FROM_SAP</Col></Row><Row><Col id=\"TARGET\">sync_ar</Col><Col id=\"SP\">DZZPR_AR_VENDOR_SYNC_FROM_SAP</Col></Row><Row><Col id=\"TARGET\">sync_account</Col><Col id=\"SP\">DZZPR_VENDOR_ACCOUNT_SYNC_FROM_SAP</Col></Row></Rows>");
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

            obj = new Static("staTITLE","0","0","100%","45",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("거래처/계좌정보 동기화");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staMSG","0","staTITLE:0",null,"60","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("※ SAP거래처/계좌정보를 동기화합니다. 이 기능은 일시적으로 ERP시스템 성능저하의 원인이 될수 있으니 꼭 필요한 경우만 사용하십시오.");
            obj.set_textAlign("left");
            obj.set_wordWrap("english");
            obj.set_color("red");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAP_SYNC","0","staMSG:5","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("매입거래처 동기화");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAR_SYNC","0","staAP_SYNC:-1","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("매출거래처 동기화");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staACCOUNT_SYNC","0","staAR_SYNC:-1","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("계좌정보 동기화");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAP_SYNC","staAP_SYNC:-1","staMSG:5",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAR_SYNC","staAR_SYNC:-1","staBgAP_SYNC:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgACCOUNT_SYNC","staACCOUNT_SYNC:-1","staBgAR_SYNC:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","42%","staACCOUNT_SYNC:20","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("닫기");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnAP_SYNC","staAP_SYNC:5","staMSG:10","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("매입거래처 동기화");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnAR_SYNC","staAP_SYNC:5","btnAP_SYNC:9","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("매출거래처 동기화");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnACCOUNT_SYNC","staAP_SYNC:5","btnAR_SYNC:9","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("계좌정보 동기화");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ccboTY_GUBUN","value","dsData","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ctxtMDM_CD_VENDOR","value","dsData","MDM_CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ctxtMDM_DS_VENDOR","value","dsData","MDM_DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DQD_VENDOR_SYNC.xfdl", function() {
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
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	//this.FormBtns.Select.set_enable(false);
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
        	this.dxGrid = this.divData.form.objGrid;
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
        	this.dsSync = new Dataset();
        	this.dsSync.addColumn("PARAM", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
          /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	저장 Validate
         */
        this.fnSaveValidate = function() {
        	var validate = true;

        	return validate;

        };
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg)
        {
        	if(svcID == "sync") {
        		if (errorCode == 0) {

        			var msg = "";

        			if(strArg == "ap")
        			{
        				msg = "매입거래처 동기화가 정상처리되었습니다.";
        			}
        			else if(strArg == "ar")
        			{
        				msg = "매출거래처 동기화가 정상처리되었습니다.";
        			}
        			else if(strArg == "account")
        			{
        				msg = "계좌정보 동기화가 정상처리되었습니다.";
        			}

        			this.gfnAlert(msg);
        		} else {
        			this.gfnAlert(errorMsg);
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
        // 닫기 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };


        this.divData_btnAP_SYNC_onclick = function(obj,e)
        {
        	this.gfnConfirm("매입거래처 동기화를 진행하시겠습니까?","fnAP_SYNC_callback");
        };

        this.fnAP_SYNC_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.fnSync("ap");
        	}
        }

        this.divData_btnAR_SYNC_onclick = function(obj,e)
        {
        	this.gfnConfirm("매출거래처 동기화를 진행하시겠습니까?","fnAR_SYNC_callback");
        };

        this.fnAR_SYNC_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.fnSync("ar");
        	}
        }

        this.divData_btnACCOUNT_SYNC_onclick = function(obj,e)
        {
        	this.gfnConfirm("계좌정보 동기화를 진행하시겠습니까?","fnACCOUNT_SYNC_callback");
        };

        this.fnACCOUNT_SYNC_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.fnSync("account");
        	}
        }

        this.fnSync = function(sync)
        {
        	this.dsSync.clearData();
        	var nrow = this.dsSync.addRow();

        	if (this.dsSync.rowcount == 0) return;

        	var inData = "";

        	if(sync == "ap")
        	{
        		inData = "sync_ap=dsSync";
        	}
        	else if(sync == "ar")
        	{
        		inData = "sync_ar=dsSync";
        	}
        	else
        	{
        		inData = "sync_account=dsSync";
        	}

        	var strSvcId    = "sync";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var outData     = "";
        	var strArg      = sync;
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.divData.form.btnAP_SYNC.addEventHandler("onclick",this.divData_btnAP_SYNC_onclick,this);
            this.divData.form.btnAR_SYNC.addEventHandler("onclick",this.divData_btnAR_SYNC_onclick,this);
            this.divData.form.btnACCOUNT_SYNC.addEventHandler("onclick",this.divData_btnACCOUNT_SYNC_onclick,this);
        };
        this.loadIncludeScript("DQD_VENDOR_SYNC.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
