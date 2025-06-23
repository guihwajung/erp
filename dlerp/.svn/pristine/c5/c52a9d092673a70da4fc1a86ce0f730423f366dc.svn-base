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
            this.set_titletext("반려사유");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,180);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staDS_SITE00_00","0","34","87","60",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("사유");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg00_00","86","34","544","60",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnConfirm","255","107","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","317","107","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("닫기");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("ctxtDS_RETURN","90","39","536","50",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_value("");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","7","8","165","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("반려정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ctxtDS_RETURN","value","dsList","DS_WORK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DCH_WORKORDER_RTN_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj, e) {
            // -- 필수 -------------------//
            this.gfnFormOnLoad(this);
            this.gfnFormInfo(this);
            // ---------------------------//

            this.fnSetButton();
            this.fnSetExtendButton();
            this.fnSetVariable();
            this.fnSetEvent();
            this.fnSetParameter();
        	this.fnSetCombo();

        	if(!this.gfnIsNull(this.getOwnerFrame().DS_RETURN)) {
        		this.divData.form.ctxtDS_RETURN.set_value(this.getOwnerFrame().DS_RETURN);
        		this.divData.form.ctxtDS_RETURN.set_readonly(true);
        		this.divData.form.btnConfirm.set_visible(false);
        	};
        };

        this.fnSetCombo = function(){
        }

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
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
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /*
         *	조회 버튼
         */
        this.fnSelect = function() {
        }


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
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {}

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnValidate = function() {
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {

        }


        this.fnCloseForm = function() {
            this.getParentContext().close(null);
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회1 버튼
         */

         this.fnConfirm = function(obj,e) {
        	var json = {};
        	json.TY_STATUS  = this.getOwnerFrame().TY_STATUS;
        	json.DS_RETURN 	= this.divData.form.ctxtDS_RETURN.value;

        	this.getParentContext().close(JSON.stringify(json));
         };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.btnConfirm.addEventHandler("onclick",this.fnConfirm,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.fnCloseForm,this);
        };
        this.loadIncludeScript("DCH_WORKORDER_RTN_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
