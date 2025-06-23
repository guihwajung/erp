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
                this._setFormPosition(500,290);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">updateAS</Col><Col id=\"SP\">DBSPR_RMNY_UPDATE</Col></Row><Row><Col id=\"SP\">DBSPR_BS_RMNY_UPDATE</Col><Col id=\"TARGET\">updateBS</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnCancle","250","256","45","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("취소");
            obj.getSetter("uWord").set("popup.cancel");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk","202","256","45","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.getSetter("uWord").set("popup.ok");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","20","10","470","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("하자내용 변경");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new TextArea("texRM_NY","20","40","470","206",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_wordWrap("char");
            obj.set_maxlength("4000");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",500,290,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DBS_DLG_RMNY.xfdl", function() {
        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.objApp = this.parent.getForm().gfnGetApplication().gvWorkFrame.frames;

        	this.gfnFormOnLoad(this); //초기화[필수]

        	this.fnSetParameter();

        	if(!this.gfnIsNull(this.getOwnerFrame().CF_RM_NY)) {
        		this.texRM_NY.set_value(this.getOwnerFrame().CF_RM_NY);
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

        	this.dsUpdate = new Dataset();

        	this.dsUpdate.addColumn("CD_SITE", "string");
        	this.dsUpdate.addColumn("DT_JEOBSU", "string");
        	this.dsUpdate.addColumn("CD_JOB", "string");
        	this.dsUpdate.addColumn("RM_NY", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSaveValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.texRM_NY.value)) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.texRM_NY.setFocus();
        		}
        		this.gfnAlert("하자내용을 입력하세요.", "fnVaidateCallback");
        	}

        	return validate;
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * @ OK버튼이벤트
        */
        this.btnOk_onclick = function(obj,e)
        {

        	if (!this.fnSaveValidate()) return false;

        	this.dsUpdate.clearData();
        	var nrow = this.dsUpdate.addRow();
        	this.dsUpdate.setColumn(nrow, "CD_SITE", this.getOwnerFrame().CF_CD_SITE);
        	this.dsUpdate.setColumn(nrow, "DT_JEOBSU", this.getOwnerFrame().CF_DT_JEOBSU);
        	this.dsUpdate.setColumn(nrow, "CD_JOB", this.getOwnerFrame().CF_CD_JOB);
        	this.dsUpdate.setColumn(nrow, "RM_NY", this.texRM_NY.value);
        	this.dsUpdate.setColumn(nrow, "ID_USER", this.getOwnerFrame().ID_USER);

        	var strSvcId    = "update";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "";
        	if( this.getOwnerFrame().CF_TY_CODE == "AS" ) {
        		inData      = "updateAS=dsUpdate";
        	} else if( this.getOwnerFrame().CF_TY_CODE == "BS" ) {
        		inData      = "updateBS=dsUpdate";
        	}
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
        	if (svcID == "update") {
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
        this.loadIncludeScript("DBS_DLG_RMNY.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
