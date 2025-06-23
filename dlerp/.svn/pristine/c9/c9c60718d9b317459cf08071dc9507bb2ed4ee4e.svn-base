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
            this.getSetter("maxwidth").set("440");
            this.getSetter("maxheight").set("350");
            this.getSetter("ttitletext").set("지급어음반제");
            if (Form == this.constructor)
            {
                this._setFormPosition(410,280);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","20","50","350","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("어음 기본정보(참조)");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar53","119","79","251","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","143","238","45","21",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("확인");
            obj.getSetter("uWord").set("popup.ok");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancle","193","238","45","21",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("취소");
            obj.getSetter("uWord").set("popup.cancel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar03","119","108","251","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_NOTES","125","113","155","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_format("#,###,###,###,###,###,##0");
            obj.set_limitbymask("integer");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem55","20","79","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("총반제건수");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem03","20","108","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("총반제금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","286","113","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskCNT_BANJE","125","84","155","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_format("#,###,###,###,###,###,##0");
            obj.set_limitbymask("integer");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","286","84","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("건");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle01","20","20","350","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("지급어음반제전표발행");
            obj.set_cssclass("sta_POP_Title");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar00","119","175","251","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem00","20","175","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("회계일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle00","20","149","350","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("회계정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_EXPIRY","125","180","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
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
        this.registerScript("DFD_DLG_NOTES_P.xfdl", function() {
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
        this.pv_CNT_BANJE;
        this.pv_AM_NOTES;
        this.pv_DT_EXPIRY;
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

        	this.pv_CNT_BANJE = frame.CNT_BANJE;	// 반제건수
        	this.pv_AM_NOTES = frame.AM_NOTES;		// 반제금액
        	this.pv_DT_EXPIRY = frame.DT_EXPIRY;	// 회계일자(만기일자)

        	this.mskCNT_BANJE.set_value(this.pv_CNT_BANJE);		// 반제건수
        	this.mskAM_NOTES.set_value(this.pv_AM_NOTES);		// 반제금액
        	this.ctclDT_EXPIRY.set_value(this.pv_DT_EXPIRY);	// 회계일자(만기일자)
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.mskCNT_BANJE = this.divData.form.mskCNT_BANJE;
        this.mskAM_NOTES = this.divData.form.mskAM_NOTES;
        this.ctclDT_EXPIRY = this.divData.form.ctclDT_EXPIRY;

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

        	json.CNT_BANJE = this.mskCNT_BANJE.value;		// 반제건수
        	json.AM_NOTES = this.mskAM_NOTES.value;			// 반제금액
        	json.DT_SLIP = this.ctclDT_EXPIRY.value;		// 회계일자(만기일자)

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
            this.divData.form.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
            this.divData.form.btnCancle.addEventHandler("onclick",this.btnCancle_onclick,this);
            this.divData.form.ctclDT_EXPIRY.addEventHandler("onchanged",this.fnSearchInit,this);
        };
        this.loadIncludeScript("DFD_DLG_NOTES_P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
