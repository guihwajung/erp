(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("formTab6");
            this.set_titletext("대학교탭");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,629);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staTitle1","0","0","90","31",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("학자금");
            obj.set_cssclass("sta_TITLE_Bg2");
            obj.set_textDecoration("none");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","34.66%","100.00%","23",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("url(\'theme://images/slt_WF_SplitterH.png\') no-repeat center center");
            obj.set_cursor("ns-resize");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid3","0","31",null,null,"0","divSplitter:6",null,null,null,null,this);
            obj.set_taborder("0");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Div("divData","0","divSplitter:6",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle2","0","0","78","31",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("학자금 추가");
            obj.set_cssclass("sta_TITLE_Bg2");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid4","0","staTitle2:0",null,"160","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_selecttype("cell");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle3","0","objGrid4:0","140","31",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("학자금 지급제외자");
            obj.set_cssclass("sta_TITLE_Bg2");
            obj.set_textDecoration("none");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid5","0","staTitle3:0",null,null,"0","0",null,null,"156",null,this.divData.form);
            obj.set_taborder("2");
            obj.set_selecttype("cell");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
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
        this.registerScript("DAB_TUITION_APPROVE_TAB06.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.nRptAppend = 0;
        this.form_onload = function(obj,e)
        {
        	this.parentForm = this.parent.parent.parent.parent.parent;
        	trace("tab6 onload");
        	this.gfnFormOnLoad(this);
        	if(this.gfnFormInfo(this, this.parentForm)) {
        		trace("tab6 onload ---------");
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
        	this.dsList12 = this.parentForm.dsList12;
        	this.dsList13 = this.parentForm.dsList13;
        	this.dsList14 = this.parentForm.dsList14;
        	this.parentForm.dxGrid12 = this.objGrid3;
        	this.parentForm.dxGrid13 = this.divData.form.objGrid4;
        	this.parentForm.dxGrid14 = this.divData.form.objGrid5;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.objGrid3, this.dsList12, "DA", "DAB_TUITION_LIST03");
        	this.gfnGridInit(this.divData.form.objGrid4, this.dsList13, "DA", "DAB_TUITION_LIST04");
        	this.gfnGridInit(this.divData.form.objGrid5, this.dsList14, "DA", "DAB_TUITION_LIST05");
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
        this.divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };

        this.form_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		trace("e.clienty = " + e.clienty)
        		this.divSplitter.set_top(e.clienty);
        		this.resetScroll();
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ondragmove",this.form_ondragmove,this);
            this.divSplitter.addEventHandler("ondrag",this.divSplitter_ondrag,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
        };
        this.loadIncludeScript("DAB_TUITION_APPROVE_TAB06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
