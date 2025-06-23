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
            if (Form == this.constructor)
            {
                this._setFormPosition(400,81);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DBSPR_DAYWORK_YESTERDAY_COPY</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staDT_WORK","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("복사대상일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_WORK","staDT_WORK:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnCancle","200","divSearch:10","45","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.getSetter("uWord").set("popup.cancel");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk","152","divSearch:10","45","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.getSetter("uWord").set("popup.ok");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,81,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.calDT_WORK","value","dsSearch","DT_WORK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DBS_DAYWORK_CONFIRM.xfdl", function() {
        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this); //초기화[필수]

        	this.divTopBtn.set_visible(false);
        	this.btnCancle.set_top(this.btnOk.top);
        	this.resetScroll();

        	this.fnSetParameter();

        	if(!this.gfnIsNull(this.getOwnerFrame().CF_DT_WORK_TARGET)) {
        		this.divSearch.form.calDT_WORK.set_value(this.getOwnerFrame().CF_DT_WORK_TARGET);
        	}

        	this.isUpdate = false;
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        };
        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSave = new Dataset();

        	this.dsSave.addColumn("CD_BUNSO", "string");
        	this.dsSave.addColumn("DT_WORK", "string");
        	this.dsSave.addColumn("DT_WORK_TARGET", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSaveValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.divSearch.form.calDT_WORK.value)) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.calDT_WORK.setFocus();
        		}
        		this.gfnAlert("복사대상일자를 입력하세요.", "fnVaidateCallback");
        	}

        	return validate;
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /*
         *	Confirm Dialog CallBack
         */
        this.fnDialogCallback = function(svcID, value){
        	if(value) {
        		this.dsSave.clearData();
        		var nrow = this.dsSave.addRow();
        		this.dsSave.setColumn(nrow, "CD_BUNSO", this.getOwnerFrame().CF_CD_BUNSO);
        		this.dsSave.setColumn(nrow, "DT_WORK", this.getOwnerFrame().CF_DT_WORK);
        		this.dsSave.setColumn(nrow, "DT_WORK_TARGET", this.divSearch.form.calDT_WORK.value);
        		this.dsSave.setColumn(nrow, "ID_USER", this.getOwnerFrame().ID_USER);

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
        }

        /**
        * @ OK버튼이벤트
        */
        this.btnOk_onclick = function(obj,e)
        {

        	if (!this.fnSaveValidate()) return false;
        	this.gfnConfirm("복사대상날짜에 선택한 날짜의 데이터를\n작업일자(조회조건)의 정보로 복사 하시겠습니까?\n\n※ 복사대상날짜에 데이터가 없는 경우 복사가 되지 않습니다.", "fnDialogCallback");
        };

        /**
        * @ 취소버튼이벤트
        */
        this.btnCancle_onclick = function(obj,e)
        {
        	this.close();
        };
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return;
        	}
        	if (svcID == "save") {
        		// Alert후 실행할 처리
        		this.fnClose = function() {
        			this.isUpdate = true;
        			this.close();
        		}
        		this.gfnAlert("정상적으로 처리되었습니다.", "fnClose");
        	}
        }

        this.form_onbeforeclose = function(obj,e)
        {
        	this.getOwnerFrame()._close_argument = { isUpdate : this.isUpdate };
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.btnCancle.addEventHandler("onclick",this.btnCancle_onclick,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
        };
        this.loadIncludeScript("DBS_DAYWORK_CONFIRM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
