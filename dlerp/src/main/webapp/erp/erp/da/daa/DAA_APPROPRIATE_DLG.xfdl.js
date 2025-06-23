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
            this.set_titletext("경조금책정");
            this.getSetter("maxwidth").set("400");
            this.getSetter("maxheight").set("300");
            if (Form == this.constructor)
            {
                this._setFormPosition(330,240);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CNT_PAYMENT\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_PAYMENT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PAYMENT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PAYMENT_PARAM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YM_PAYMENT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAAPR_DED_APPROPRIATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","0","10","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            obj.set_text("경조금 책정");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_PAYMENT","20","60","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("경조책정월");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Button("btnOK","200","57","60","27",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","270","57","60","27",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("닫기");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("ctclYM_PAYMENT","95","60","90","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("staCNT_PAYMENT","28","113","272","27",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("staSUM_PAYMENT","28","153","272","27",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("staAM_PAYMENT","28","190","272","27",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAM_PAYMENT_PARAM","211","18","104","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","ctclYM_PAYMENT.form.TextBox","value","dsSearch","YM_PAYMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","staCNT_PAYMENT","value","dsList","CNT_PAYMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","staSUM_PAYMENT","value","dsList","SUM_PAYMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","staAM_PAYMENT","value","dsList","AM_PAYMENT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DAA_APPROPRIATE_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	var today = this.gfnGetDate().substring(0,6);
        	this.dsSearch.setColumn(0, "YM_PAYMENT", today);
            this.btnOK_onclick();
        };

        // 확인
        this.btnOK_onclick = function(obj,e)
        {
        	this.dsSelect.clearData();

        	var nrow = this.dsSelect.addRow();
        	this.dsSelect.setColumn(nrow, "YM_PAYMENT", this.dsSearch.getColumn(0, "YM_PAYMENT"));

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
        						callBackFnc); // 통신방법 정의 [생략가능]

        };

        this.SelectValidate = function ()
        {
        // 	var strMsg = "";
        // 	trace(this.dsSearch.getColumn(0, "YM_PAYMENT"));
        // 	if(this.gfnIsNull(this.dsSearch.getColumn(0, "YM_PAYMENT"))) {
        // 		strMsg += "경조책정월은 반드시 입력 하셔야 합니다.\n";
        // 	}
        // 	if(strMsg.length > 0) {
        // 		this.gfnAlert(strMsg);
        // 		return false;
        // 	}
        // 	return true;
        };

        this.btnCANCLE_onclick = function(obj,e)
        {
        	var json = {};

        	json.am_param = this.edtAM_PAYMENT_PARAM.value;
        	this.getParentContext().close(JSON.stringify(json));
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctclYM_PAYMENT = this.ctclYM_PAYMENT; //기준일자
        	this.staCNT_PAYMENT = this.staCNT_PAYMENT;
        	this.staSUM_PAYMENT = this.staSUM_PAYMENT;
        	this.staAM_PAYMENT = this.staAM_PAYMENT;
        	this.edtAM_PAYMENT_PARAM = this.edtAM_PAYMENT_PARAM;
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YM_PAYMENT", "string");
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
         // 코드파인더
        this.fnSetEvent = function() {

        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		if (errorCode == 0) {
        			var cnt = this.dsList.getColumn(0, "CNT_PAYMENT");
        			var sum = this.dsList.getColumn(0, "SUM_PAYMENT");
        			var am = this.dsList.getColumn(0, "AM_PAYMENT");
        			var am_param = this.dsList.getColumn(0, "AM_PAYMENT_PARAM");

        			this.staCNT_PAYMENT.set_text(cnt);
        			this.staSUM_PAYMENT.set_text(sum);
        			this.staAM_PAYMENT.set_text(am);
        			this.edtAM_PAYMENT_PARAM.set_value(am_param);

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }
        this.dsSearch_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "YM_PAYMENT"){
        		if(e.oldvalue != e.newvalue){
        			this.staCNT_PAYMENT.set_text("");
        			this.staSUM_PAYMENT.set_text("");
        			this.staAM_PAYMENT.set_text("");
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.dsSearch.addEventHandler("oncolumnchanged",this.dsSearch_oncolumnchanged,this);
        };
        this.loadIncludeScript("DAA_APPROPRIATE_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
