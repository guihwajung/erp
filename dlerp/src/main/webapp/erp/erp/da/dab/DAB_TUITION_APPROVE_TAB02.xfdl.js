(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("formTab2");
            this.set_titletext("급여지급탭");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,629);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("objGrid1","0","20",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj._setContents("");
            this.addChild(obj.name, obj);
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
        this.registerScript("DAB_TUITION_APPROVE_TAB02.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.nRptAppend = 0;
        this.form_onload = function(obj,e)
        {
        	this.parentForm = this.parent.parent.parent.parent.parent;
        	trace("tab2 onload");
        	this.gfnFormOnLoad(this);
        	if(this.gfnFormInfo(this, this.parentForm)) {
        		trace("tab2 onload ---------");
        		this.fnSetButton();
        		this.fnSetExtendButton();
        		this.fnSetVariable();
        		this.fnSetEvent();
        		this.fnSetParameter();
        	}
        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
         ************************************************************************/
        this.fnSetButton = function() {
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dsSearch = this.parentForm.dsSearch;
        	this.dsList2 = this.parentForm.dsList2;
        	this.parentForm.dxGrid2 = this.objGrid1;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.objGrid1, this.dsList2, "DA", "DAB_TUITION_LIST02");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /************************************************************************
         * Validate
         ************************************************************************/

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
        ************************************************************************/
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onactivate",this.formTab11_onactivate,this);
        };
        this.loadIncludeScript("DAB_TUITION_APPROVE_TAB02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
