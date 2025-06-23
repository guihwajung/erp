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
            this.set_titletext("출금 전표발행");
            if (Form == this.constructor)
            {
                this._setFormPosition(410,310);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staTitle","20","50","350","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("전표참고정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staBar53","119","79","251","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk","143","267","45","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.getSetter("uWord").set("popup.ok");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancle","193","267","45","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("취소");
            obj.getSetter("uWord").set("popup.cancel");
            this.addChild(obj.name, obj);

            obj = new Static("staBar01","119","166","251","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Static("staBar03","119","137","251","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_ETC","125","142","195","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_format("#,###,###,###,###,###,##0");
            obj.set_limitbymask("integer");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staItem55","20","79","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("이자금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("staItem01","20","166","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("대여금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("staItem03","20","137","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("부대비용");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","326","142","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_EZA","125","84","195","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_format("#,###,###,###,###,###,##0");
            obj.set_limitbymask("integer");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","326","84","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_TRADE","125","171","195","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_format("#,###,###,###,###,###,##0");
            obj.set_limitbymask("integer");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","326","171","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","20","20","350","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("출금 전표발행");
            obj.set_cssclass("sta_POP_Title");
            this.addChild(obj.name, obj);

            obj = new Static("staBar00","119","195","251","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Static("staItem00","20","195","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("출금예상금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_TOTAL","125","200","195","20",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_format("#,###,###,###,###,###,##0");
            obj.set_limitbymask("integer");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","326","200","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new Static("staBar04","119","108","251","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Static("staItem04","20","108","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("법인세/주민세");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_CORP_JUMIN","125","112","195","20",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_format("#,###,###,###,###,###,##0");
            obj.set_limitbymask("integer");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","326","112","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("원");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",410,310,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DFG_DLG_LOAN_OUTSLIP.xfdl", function() {
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
        this.pv_AM_EZA;
        this.pv_AM_ETC;
        this.pv_AM_TRADE;
        this.pv_AM_TOTAL;
        this.pv_CD_CORP;
        this.pv_NO_ACCOUNT;
        this.pv_AM_CORP_JUMIN;
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

        	this.pv_AM_EZA = frame.AM_EZA;			// 이자금액
        	this.pv_AM_ETC = frame.AM_ETC;			// 부대비용
        	this.pv_AM_TRADE = frame.AM_TRADE;		// 대여금액
        	this.pv_AM_TOTAL = frame.AM_TOTAL;		// 출금예상금액
        	this.pv_CD_CORP = frame.CD_CORP;		// 법인코드
        	this.pv_NO_ACCOUNT = frame.NO_ACCOUNT;	// 이자계좌
        	this.pv_AM_CORP_JUMIN = frame.AM_CORP_JUMIN;	// 법인/주민세

        	this.mskAM_EZA.set_value(this.pv_AM_EZA);						// 이자금액
        	this.mskAM_CORP_JUMIN.set_value(this.pv_AM_CORP_JUMIN);	// 법인세/주민세
        	this.mskAM_ETC.set_value(this.pv_AM_ETC);						// 부대비용
        	this.mskAM_TRADE.set_value(this.pv_AM_TRADE);					// 대여금액
        	this.mskAM_TOTAL.set_value(this.pv_AM_TOTAL);					// 출금예상금액
        	//this.cfNO_ACCOUNT.form.CDTextBox.set_value(this.pv_NO_ACCOUNT);	// 인출계좌(이자계좌 setting)
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        // 	this.cfNO_ACCOUNT.CodeFindName = "DFX_CFNO_ACCOUNT";
        // 	this.cfNO_ACCOUNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        // 	this.cfNO_ACCOUNT.AfterCDTextChanged = "fnAfterCDTextChanged";
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
        // 	if (this.gfnIsNull(this.cfNO_ACCOUNT.form.CDTextBox.value)) {
        // 		this.gfnAlert("인출계좌를 입력하십시오.");
        // 		this.cfNO_ACCOUNT.form.CDTextBox.setFocus();
        // 		return false;
        // 	}

        	return true;
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 인출계좌(SU)
        // 	if (id == "cfNO_ACCOUNT") {
        // 		dsUserParam.setColumn(nrow, "GUBUN", "MAIN");
        // 		dsUserParam.setColumn(nrow, "CD_CORP", this.pv_CD_CORP);
        // 	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        // 	trace("cd :: " + this.cfNO_ACCOUNT.form.CDTextBox.value);
        // 	trace("nm :: " + this.cfNO_ACCOUNT.form.DSTextBox.value);
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

        	json.AM_EZA = this.mskAM_EZA.value;							// 이자금액
        	json.AM_ETC = this.mskAM_ETC.value;							// 부대비용
        	json.AM_TRADE = this.mskAM_TRADE.value;						// 대여금액
        	json.AM_TOTAL = this.mskAM_TOTAL.value;						// 출금예상금액
        	//json.NO_ACCOUNT = this.cfNO_ACCOUNT.form.DSTextBox.value;	// 계좌번호
        	//json.TY_GUBUN = this.cfNO_ACCOUNT.form.CDTextBox.value;		// 계좌구분

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
        this.loadIncludeScript("DFG_DLG_LOAN_OUTSLIP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
