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
            this.set_titletext("대여금거래전표연결");
            if (Form == this.constructor)
            {
                this._setFormPosition(410,130);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnOk","143","95","45","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.getSetter("uWord").set("popup.ok");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancle","193","95","45","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취소");
            obj.getSetter("uWord").set("popup.cancel");
            this.addChild(obj.name, obj);

            obj = new Static("staBar00","109","50","284","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Static("staItem00","20","50","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("전표번호");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","20","20","373","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("대여금거래전표연결");
            obj.set_cssclass("sta_POP_Title");
            this.addChild(obj.name, obj);

            obj = new Div("cfNO_SLIP","116","54","270","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",410,130,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cfNO_SLIP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DFG_DLG_LINKSLIP.xfdl", function() {
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
        //  this.pv_CD_CORP;
        //  this.pv_DS_CORP;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this); //초기화[필수]
        	this.gfnFormInfo(this);

        	this.fnSetEvent();
        	this.fnSetParameter();

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.cfNO_SLIP.CodeFindName = "DFX_NO_SLIP_LOAN";
        	this.cfNO_SLIP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfNO_SLIP.AfterCDTextChanged = "fnAfterCDTextChanged";
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
        	if (this.gfnIsNull(this.cfNO_SLIP.form.CDTextBox.value) || this.gfnIsNull(this.cfNO_SLIP.form.DSTextBox.value)) {
        		this.gfnAlert("전표번호는 필수 입력 항목 입니다.");
        		this.cfNO_SLIP.form.CDtextBox.setFocus();
        		return false;
        	}

        	return true;
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	switch(id) {

        	case "cfNO_SLIP":
        		dsUserParam.setColumn(nrow, "CD_CORP", this.getOwnerFrame().CD_CORP);
        		dsUserParam.setColumn(nrow, "DT_SLIP", this.getOwnerFrame().DT_TRADE);
        		break;

        	default:
        	}
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

        	json.NO_SLIP = this.cfNO_SLIP.form.CDTextBox.value;	// 전표번호
        	json.DT_SLIP = this.cfNO_SLIP.form.DSTextBox.value;	// 전표일자

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
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
            this.btnCancle.addEventHandler("onclick",this.btnCancle_onclick,this);
        };
        this.loadIncludeScript("DFG_DLG_LINKSLIP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
