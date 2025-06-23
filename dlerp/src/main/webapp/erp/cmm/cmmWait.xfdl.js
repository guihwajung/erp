(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmWait");
            this.set_titletext("확인");
            if (Form == this.constructor)
            {
                this._setFormPosition(340,160);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staTitle","0","0",null,"33","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("작업대기");
            obj.getSetter("uWord").set("popup.confirm");
            obj.set_cssclass("sta_POP_Title");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"0","26","33","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_CloseBtnPop");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","60","94","94","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("대기순번");
            obj.set_color("blue");
            obj.set_font("20px/normal \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("staWait","173","94","94","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_font("20px/normal \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","15","44","312","33",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("※ 시스템 과부하 방지를 위한 작업대기중입니다.\r\n   기다리시면 순번대로 진행됩니다.");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",340,160,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmWait.xfdl", function() {

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this._Interval;
        this._IntervalStop = false;
        this.queueNum = -100;

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this); //초기화[필수]

        	var queueName = this.getOwnerFrame().QUEUE_NAME;
        	var queueSize = this.getOwnerFrame().QUEUE_SIZE;

        	if(queueName != null && queueSize != null) {
        		var objForm = this;
        		objForm.fnSelect(queueName, queueSize);
        		this._Interval = this.gfnSetInterval(this, function() {
        			if (this._IntervalStop) return;
        			objForm.fnSelect(queueName, queueSize);
        		}, 1000);
        		this._Interval.start();
        	}
        };
        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
        * @description 메세지설정
        */
        this.fnSelect = function (queueName, queueSize)
        {

        	var strSvcId    = "quewait";
        	var strSvcType  = "service/quewait";
        	var inProc		= "";
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "QUEUE_NAME="+queueName+" QUEUE_SIZE="+queueSize+" QUEUE_NUM="+ this.queueNum;
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc,
        						true); 	// 통신방법 정의 [생략가능]
        };

        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if(svcID == "quewait") {
        		if(errorCode == 0) {
        			this.queueNum = errorMsg;
        			this._IntervalStop = true;
        			if(this._Interval != null) {
        				this._Interval.destroy();
        				this._Interval = null;
        			}
        			this.close(this.queueNum);
        		}
        		else if(errorCode == -100) {
        			var spl_msg = errorMsg.split('/');

        			this.queueNum = Number(spl_msg[0]);
        			this.staWait.set_text(spl_msg[1]);
        		}
        		else if(errorCode == -101) {
        			this.staWait.set_text(errorMsg);
        		}
        		else {
        			if(this._Interval != null) {
        				this._Interval.destroy();
        				this._Interval = null;
        			}
        		}
        	}
        }

        this.cmmWait_onbeforeclose = function(obj,e)
        {
        	this._IntervalStop = true;
        	if(this._Interval != null) {
        		this._Interval.destroy();
        		this._Interval = null;
        	}
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onbeforeclose",this.cmmWait_onbeforeclose,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("cmmWait.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
