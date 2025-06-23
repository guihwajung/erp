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
            this.set_titletext("입금 전표발행");
            if (Form == this.constructor)
            {
                this._setFormPosition(410,370);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staTitle","20","50","350","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("실적정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staBar53","119","109","251","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk","143","327","45","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.getSetter("uWord").set("popup.ok");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancle","193","327","45","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취소");
            obj.getSetter("uWord").set("popup.cancel");
            this.addChild(obj.name, obj);

            obj = new Static("staBar00","119","80","251","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Static("staBar01","119","225","251","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Static("staBar02","119","287","251","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Static("staBar03","119","167","251","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_CORP_JUMIN","125","172","195","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_format("#,###,###,###,###,###,##0");
            obj.set_limitbymask("integer");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staItem55","20","109","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("이자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("staItem00","20","80","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("거래금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("staItem01","20","225","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("입금예상금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("staItem02","20","287","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("거래내역");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("staItem03","20","167","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("법인세/주민세");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","326","172","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00","20","260","350","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("입금정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_EZA","125","114","195","20",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_format("#,###,###,###,###,###,##0");
            obj.set_limitbymask("integer");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","326","114","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_TRADE","125","84","195","20",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_format("#,###,###,###,###,###,##0");
            obj.set_limitbymask("integer");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","326","84","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_TOTAL","125","230","195","20",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_format("#,###,###,###,###,###,##0");
            obj.set_limitbymask("integer");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","326","230","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new Div("cfLST_TRADE","125","291","238","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("212");
            obj.set_taborder("22");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","20","20","350","22",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("입금 전표발행");
            obj.set_cssclass("sta_POP_Title");
            this.addChild(obj.name, obj);

            obj = new Static("staBar04","119","196","251","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_ETC","125","201","195","20",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_format("#,###,###,###,###,###,##0");
            obj.set_limitbymask("integer");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staItem04","20","196","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("부대비용");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","326","201","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new Static("staBar05","119","138","251","30",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Static("staItem05","20","138","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("처분이익");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_PROFIT","125","143","195","20",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_format("#,###,###,###,###,###,##0");
            obj.set_limitbymask("integer");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta05","326","143","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("원");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",410,370,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cfLST_TRADE.form.CDTextBox","value","dsSearch","NO_CHAIP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DFE_DLG_INSLIP.xfdl", function() {
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
        this.pv_AM_TRADE;
        this.pv_AM_EZA;
        this.pv_AM_CORP_JUMIN;
        this.pv_AM_ETC;
        this.pv_AM_TOTAL;
        this.pv_CD_CORP;
        this.pv_NO_ACCOUNT;
        this.pv_DT_TRADE;
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

        	this.pv_AM_TRADE = frame.AM_TRADE;				// 거래금액
        	this.pv_AM_EZA = frame.AM_EZA;					// 이자금액
        	this.pv_AM_PROFIT = frame.AM_PROFIT;			// 이자금액
        	this.pv_AM_CORP_JUMIN = frame.AM_CORP_JUMIN;	// 법인/주민세
        	this.pv_AM_ETC = frame.AM_ETC;					// 부대비용
        	this.pv_AM_TOTAL = frame.AM_TOTAL;				// 입금예상금액
        	this.pv_CD_CORP = frame.CD_CORP;				// 법인코드
        	this.pv_NO_ACCOUNT = frame.NO_ACCOUNT;			// 계좌번호
        	this.pv_DT_TRADE = frame.DT_TRADE;				// 거래일자

        	//trace("차입금액 :: " + this.pv_AM_TRADE);
        	//trace("이자금액 :: " + this.pv_AM_EZA);
        	//trace("부대비용 :: " + this.pv_AM_ETC);
        	//trace("법인세/주민세 ::: " + this.pv_AM_CORP_JUMIN);
        	//trace("입금예상금액 :: " + this.pv_AM_TOTAL);
        	//trace("법인코드 :: " + this.pv_CD_CORP);

        	this.mskAM_TRADE.set_value(this.pv_AM_TRADE);			// 거래금액
        	this.mskAM_EZA.set_value(this.pv_AM_EZA);				// 이자금액
        	this.mskAM_PROFIT.set_value(this.pv_AM_PROFIT);			// 처분이익
        	this.mskAM_CORP_JUMIN.set_value(this.pv_AM_CORP_JUMIN);	// 법인세/주민세
        	this.mskAM_ETC.set_value(this.pv_AM_ETC);				// 부대비용
        	this.mskAM_TOTAL.set_value(this.pv_AM_TOTAL);			// 입금예상금액
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.cfLST_TRADE.CodeFindName = "DFX_CFNO_INCOMELIST";
        	this.cfLST_TRADE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfLST_TRADE.AfterCDTextChanged = "fnAfterCDTextChanged";
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
        	if (this.gfnIsNull(this.cfLST_TRADE.form.CDTextBox.value)) {
        		this.gfnAlert("거래내역을 입력하십시오.");
        		this.cfLST_TRADE.form.CDTextBox.setFocus();
        		return false;
        	}

        	return true;
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "cfLST_TRADE") {
        		dsUserParam.setColumn(nrow, "CD_DEPT", "");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.pv_CD_CORP);
        		dsUserParam.setColumn(nrow, "NO_ACCOUNT", this.pv_NO_ACCOUNT);
        		dsUserParam.setColumn(nrow, "DT_TRADE", this.pv_DT_TRADE);
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

        	json.AM_TRADE = this.mskAM_TRADE.value;					// 차입금액
        	json.AM_EZA = this.mskAM_EZA.value;						// 이자금액
        	json.AM_PROFIT = this.mskAM_PROFIT.value;				// 처분이익
        	json.AM_CORP_JUMIN = this.mskAM_CORP_JUMIN.value;		// 법인세/주민세
        	json.AM_ETC = this.mskAM_ETC.value;						// 부대비용
        	json.AM_TOTAL = this.mskAM_TOTAL.value;					// 입금예상금액
        	json.NO_TRADE = this.cfLST_TRADE.form.CDTextBox.value;	// 거래내역번호(입금번호)

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
        this.loadIncludeScript("DFE_DLG_INSLIP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
