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
            this.set_titletext("자금일보 자료생성");
            this.getSetter("maxwidth").set("440");
            this.getSetter("maxheight").set("240");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staBar00","119","50","251","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem00","20","50","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("일보일자(F)");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle01","20","20","350","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("자금일보 자료생성");
            obj.set_cssclass("sta_POP_Title");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar01","119","79","251","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem01","20","79","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("일보일자(T)");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_ILBO_FR","126","55","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_ILBO_TO","126","84","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","143","staItem01:20","45","21",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.getSetter("uWord").set("popup.ok");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancle","193","staBar01:20","45","21",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("취소");
            obj.getSetter("uWord").set("popup.cancel");
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
        this.registerScript("DFA_DLG_ILBO_CREATE.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath    cmm > cmmPopup.xfdl (공통 팝업페이지)
        *  @FileName 	cmmPopup.xfdl
        *  @Creator 	consulting
        *  @CreateDate 	2017.10.19
        *  @Desction         스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2017.03.09     	consulting 	                최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this); //초기화[필수]
        	this.gfnFormInfo(this);

        	this.fnSetEvent();
        	this.fnSetParameter();

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	var frame = this.getOwnerFrame();
        	if (!this.gfnIsNull(frame.DT_TO)) {
        		//this.calDT_ILBO_FR.set_value(frame.DT_FROM);
        		this.calDT_ILBO_FR.set_value(this.gfnAddDate(frame.DT_TO,-1)); // TO날짜 -1
        		this.calDT_ILBO_TO.set_value(frame.DT_TO);
        	}
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

        };

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnValidation = function() {
        	if (this.gfnIsNull(this.calDT_ILBO_FR.value)) {
        		this.gfnAlert("일보일자(F)를 입력하십시오.");
        		this.calDT_ILBO_FR.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.calDT_ILBO_TO.value)) {
        		this.gfnAlert("일보일자(T)를 입력하십시오.");
        		this.calDT_ILBO_TO.setFocus();
        		return false;
        	}

        	return true;
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * @ OK버튼이벤트
        */
        this.btnOk_onclick = function(obj,e)
        {
        	if (!this.fnValidation()) return false;

        	// 확인
        	var json = {};

        	json.DT_ILBO_FR = this.calDT_ILBO_FR.value;	// 일보일자(F)
        	json.DT_ILBO_TO = this.calDT_ILBO_TO.value;	// 일보일자(T)

        	this.getParentContext().close(JSON.stringify(json));
        };

        /**
        * @ 취소버튼이벤트
        */
        this.btnCancle_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.calDT_ILBO_FR.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.calDT_ILBO_TO.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
            this.divData.form.btnCancle.addEventHandler("onclick",this.btnCancle_onclick,this);
        };
        this.loadIncludeScript("DFA_DLG_ILBO_CREATE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
