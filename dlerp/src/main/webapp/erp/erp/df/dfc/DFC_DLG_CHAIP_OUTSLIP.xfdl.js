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
            this.getSetter("maxwidth").set("440");
            this.getSetter("maxheight").set("400");
            if (Form == this.constructor)
            {
                this._setFormPosition(410,340);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","20","50","350","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("전표참고정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar53","119","79","251","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","143","299","45","21",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.getSetter("uWord").set("popup.ok");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancle","193","299","45","21",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("취소");
            obj.getSetter("uWord").set("popup.cancel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar01","119","166","251","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar03","119","137","251","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_ETC","125","142","195","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_format("#,###,###,###,###,###,##0");
            obj.set_limitbymask("integer");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem55","20","79","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("이자금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem01","20","166","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("상환금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem03","20","137","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("부대비용");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","326","142","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_EZA","125","84","195","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_format("#,###,###,###,###,###,##0");
            obj.set_limitbymask("integer");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","326","84","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_TRADE","125","171","195","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_format("#,###,###,###,###,###,##0");
            obj.set_limitbymask("integer");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","326","171","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle01","20","20","350","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("출금 전표발행");
            obj.set_cssclass("sta_POP_Title");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar00","119","195","251","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem00","20","195","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("출금예상금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_TOTAL","125","200","195","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_format("#,###,###,###,###,###,##0");
            obj.set_limitbymask("integer");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","326","200","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar05","119","108","251","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem05","20","108","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("법인세/주민세");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_CORP_JUMIN","125","112","195","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_format("#,###,###,###,###,###,##0");
            obj.set_limitbymask("integer");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta05","326","112","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem02","20","224","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar02","119","224","251","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfNO_ACCOUNT","125","229","238","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("212");
            obj.set_taborder("25");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
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
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DFC_DLG_CHAIP_OUTSLIP.xfdl", function() {
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

        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	var frame = this.getOwnerFrame();

        	this.pv_AM_EZA = frame.AM_EZA;			// 이자금액
        	this.pv_AM_ETC = frame.AM_ETC;			// 부대비용
        	this.pv_AM_TRADE = frame.AM_TRADE;		// 상환금액
        	this.pv_AM_TOTAL = frame.AM_TOTAL;		// 출금예상금액
        	this.pv_CD_CORP = frame.CD_CORP;		// 법인코드
        	this.pv_NO_ACCOUNT = frame.NO_ACCOUNT;	//
        	this.pv_DS_BANK = frame.DS_BANK;		//
        	this.pv_TY_GUBUN = frame.TY_GUBUN;		//
        	this.pv_CD_BANK = frame.CD_BANK;		//

        	this.pv_AM_CORP_JUMIN = frame.AM_CORP_JUMIN;		// 법인세

        	this.mskAM_EZA.set_value(this.pv_AM_EZA);		// 이자금액
        	this.mskAM_ETC.set_value(this.pv_AM_ETC);		// 부대비용
        	this.mskAM_TRADE.set_value(this.pv_AM_TRADE);	// 상환금액
        	this.mskAM_TOTAL.set_value(this.pv_AM_TOTAL);	// 출금예상금액

        	this.mskAM_CORP_JUMIN.set_value(this.pv_AM_CORP_JUMIN);		// 법인세

        	this.cfNO_ACCOUNT.form.CDTextBox.set_value(this.pv_NO_ACCOUNT);	//
        	this.cfNO_ACCOUNT.form.DSTextBox.set_value(this.pv_DS_BANK);	//
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.mskAM_EZA = this.divData.form.mskAM_EZA;
        	this.mskAM_ETC = this.divData.form.mskAM_ETC;
        	this.mskAM_TRADE = this.divData.form.mskAM_TRADE;
        	this.mskAM_TOTAL = this.divData.form.mskAM_TOTAL;
        	this.mskAM_CORP_JUMIN = this.divData.form.mskAM_CORP_JUMIN;

        	this.cfNO_ACCOUNT = this.divData.form.cfNO_ACCOUNT;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
         	this.cfNO_ACCOUNT.CodeFindName = "DFX_CFACCOUNTNO_SUJI";
         	this.cfNO_ACCOUNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
         	this.cfNO_ACCOUNT.AfterCDTextChanged = "fnAfterCDTextChanged";
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
        //
        	return true;
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	if (id == "cfNO_ACCOUNT") {
         		dsUserParam.setColumn(nrow, "CD_CORP", this.pv_CD_CORP);
         	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	var arr = codeFindData;

        	this.pv_TY_GUBUN = arr[0]["TY_GUBUN"];
        	this.pv_CD_BANK = arr[0]["CD_BANK"];

         	//trace("cd :: " + this.cfNO_ACCOUNT.form.CDTextBox.value);
         	//trace("nm :: " + this.cfNO_ACCOUNT.form.DSTextBox.value);
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
        	json.AM_TRADE = this.mskAM_TRADE.value;						// 상환금액
         	json.NO_ACCOUNT = this.cfNO_ACCOUNT.form.CDTextBox.value;	// 계좌번호
        	json.DS_BANK = this.cfNO_ACCOUNT.form.DSTextBox.value;
        	json.TY_GUBUN = this.pv_TY_GUBUN;
        	json.CD_BANK = this.pv_CD_BANK;

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
        };
        this.loadIncludeScript("DFC_DLG_CHAIP_OUTSLIP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
