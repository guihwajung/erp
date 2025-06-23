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
            this.set_titletext("대체 전표발행");
            if (Form == this.constructor)
            {
                this._setFormPosition(390,310);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DT_TRADE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DT_TRADE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"NO_YEJUKUM\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PLAN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TRADE\" type=\"STRING\" size=\"256\"/><Column id=\"NM_YEJUKUM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TRAN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staBar00","119","40","251","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar53","119","69","251","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar03","119","98","251","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar04","119","127","251","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar01","119","156","251","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar02","119","217","251","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","20","10","350","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("실적정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem00","20","40","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("거래금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","326","44","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_TRADE","125","44","195","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_format("#,###,###,###,###,###,##0");
            obj.set_limitbymask("integer");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem55","20","69","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("이자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_EZA","125","74","195","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_format("#,###,###,###,###,###,##0");
            obj.set_limitbymask("integer");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","326","74","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem03","20","98","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("법인세/주민세");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_CORP_JUMIN","125","103","195","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_format("#,###,###,###,###,###,##0");
            obj.set_limitbymask("integer");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","326","103","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem04","20","127","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("부대비용");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_ETC","125","132","195","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_format("#,###,###,###,###,###,##0");
            obj.set_limitbymask("integer");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","326","132","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem01","20","156","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("입금예상금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_TOTAL","125","161","195","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_format("#,###,###,###,###,###,##0");
            obj.set_limitbymask("integer");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","326","161","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle00","20","190","350","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("대체정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem02","20","217","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("관리번호");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfNO_TRAN","125","221","238","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("23");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","143","257","45","21",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_text("확인");
            obj.getSetter("uWord").set("popup.ok");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancle","193","257","45","21",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_text("취소");
            obj.getSetter("uWord").set("popup.cancel");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",390,310,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.cfNO_TRAN.form.CDTextBox","value","dsList","NO_YEJUKUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.cfNO_TRAN.form.DSTextBox","value","dsList","NM_YEJUKUM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DFF_DLG_TRANSLIP.xfdl", function() {
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
        	this.fnSetParameter();
        	this.fnSetEvent();


        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	var frame = this.getOwnerFrame();

        	this.pv_AM_TRADE = frame.AM_TRADE;				// 거래금액
        	this.pv_AM_EZA = frame.AM_EZA;					// 이자금액
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
        	trace("법인코드 :: " + this.pv_CD_CORP);

        	this.mskAM_TRADE.set_value(this.pv_AM_TRADE);			// 거래금액
        	this.mskAM_EZA.set_value(this.pv_AM_EZA);				// 이자금액
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

        	this.cfNO_TRAN.CodeFindName = "DFX_CFNO_YEJUKUM";
        	this.cfNO_TRAN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfNO_TRAN.AfterCDTextChanged = "fnAfterCDTextChanged";
        };
        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.mskAM_TRADE = this.divData.form.mskAM_TRADE;		// 거래금액
        	this.mskAM_EZA = this.divData.form.mskAM_EZA;			// 이자금액
        	this.mskAM_CORP_JUMIN = this.divData.form.mskAM_CORP_JUMIN;	// 법인세/주민세
        	this.mskAM_ETC = this.divData.form.mskAM_ETC;				// 부대비용
        	this.mskAM_TOTAL = this.divData.form.mskAM_TOTAL;			// 입금예상금액
        	this.cfNO_TRAN = this.divData.form.cfNO_TRAN;			 //
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnValidation = function() {
        	if (this.gfnIsNull(this.cfNO_TRAN.form.CDTextBox.value)) {
        		this.gfnAlert("관리번호를 입력하십시오.");
        		this.cfLST_TRADE.form.CDTextBox.setFocus();
        		return cfNO_TRAN;
        	}

        	return true;
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "cfNO_TRAN") {
        		trace(this.pv_CD_CORP);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.pv_CD_CORP);
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
        	json.AM_CORP_JUMIN = this.mskAM_CORP_JUMIN.value;		// 법인세/주민세
        	json.AM_ETC = this.mskAM_ETC.value;						// 부대비용
        	json.AM_TOTAL = this.mskAM_TOTAL.value;					// 입금예상금액
        	json.NO_TRAN = this.cfNO_TRAN.form.CDTextBox.value;	    // 관리번호

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
        this.loadIncludeScript("DFF_DLG_TRANSLIP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
