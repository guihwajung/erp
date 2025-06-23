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
            this.set_titletext("장기자금계획 생성");
            if (Form == this.constructor)
            {
                this._setFormPosition(410,250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staTitle","20","50","350","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("계획정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk","143","207","45","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.getSetter("uWord").set("popup.ok");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancle","193","207","45","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.getSetter("uWord").set("popup.cancel");
            this.addChild(obj.name, obj);

            obj = new Static("staBar00","119","80","251","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Static("staItem00","20","80","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("작성년월");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","20","20","350","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("장기자금계획 생성");
            obj.set_cssclass("sta_POP_Title");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","26","174","337","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("※ 해당 조건의 모든자료가 생성됩니다.");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Div("calYM_PLAN","126","85","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("staItem01","20","109","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.addChild(obj.name, obj);

            obj = new Static("staItem02","20","138","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("작성부서");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.addChild(obj.name, obj);

            obj = new Static("staBar01","119","109","251","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","126","114","240","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staBar02","119","138","251","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","126","143","240","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("12");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",410,210,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DFA_DLG_PLANL_CREATE.xfdl", function() {
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

        	if (!this.gfnIsNull(frame.YM_PLAN)) {
        		this.calYM_PLAN.form.TextBox.set_value(frame.YM_PLAN);
        		this.ccfCD_CORP.form.CDTextBox.set_value(frame.CD_CORP);
        		this.ccfCD_CORP.form.DSTextBox.set_value(frame.DS_CORP);
        		this.ccfCD_SITE.form.CDTextBox.set_value(frame.CD_SITE_CD);
        		this.ccfCD_SITE.form.DSTextBox.set_value(frame.DS_SITE_CD);
        	}
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.CodeFindName = "DFX_CFCORP_SUJI";	// 법인코드
        	this.ccfCD_SITE.CodeFindName = "DFX_CFACNTUNIT_SUJI";	// 작성부서

        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";
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
        	if (this.gfnIsNull(this.calYM_PLAN.form.TextBox.value)) {
        		this.gfnAlert("작성년월을 입력하십시오.");
        		this.calYM_PLAN.form.TextBox.setFocus();
        		return false;
        	}

        	return true;
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	var cdCorp = this.ccfCD_CORP.form.CDTextBox.value;

        	switch(id) {
        	case "ccfCD_CORP": // 법인코드
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		break;

        	case "ccfCD_SITE": // 작성부서
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		break;
        	default:
        	}
        	return true;

        }
        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	switch(id) {
        	case "ccfCD_CORP": // 작성부서
        		this.ccfCD_SITE.form.CDTextBox.set_value("");
        		this.ccfCD_SITE.form.DSTextBox.set_value("");
        		break;
        	default:
        	}
        	return true;
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

        	json.YM_PLAN = this.calYM_PLAN.form.TextBox.value;	// 계획년월
        	json.CD_CORP = this.ccfCD_CORP.form.CDTextBox.value;	// 법인코드
        	json.CD_SITE = this.ccfCD_SITE.form.CDTextBox.value;	// 작성부서

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
        this.loadIncludeScript("DFA_DLG_PLANL_CREATE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
