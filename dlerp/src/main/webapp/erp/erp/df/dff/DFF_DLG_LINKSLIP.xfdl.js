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
            this.set_titletext("전표연결");
            if (Form == this.constructor)
            {
                this._setFormPosition(390,220);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TRADE\" type=\"FLOAT\" size=\"256\"/><Column id=\"DT_TRADE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","-40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staBar02","119","167","251","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","20","60","350","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("전표대상정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle00","20","141","350","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("전표정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem02","20","167","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("전표번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cflCD_TRADE","125","171","238","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("120");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","143","207","45","21",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("확인");
            obj.getSetter("uWord").set("popup.ok");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancle","193","207","45","21",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("취소");
            obj.getSetter("uWord").set("popup.cancel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem01_00","20","88","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("거래일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar01_00","119","88","251","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_TRADE","125","93","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",390,220,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DFF_DLG_LINKSLIP.xfdl", function() {
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
        // this.pv_AM_CORP_JUMIN;
        // this.pv_AM_ETC;
        // this.pv_AM_TOTAL;
         this.pv_CD_CORP;
        //this.pv_NO_ACCOUNT;
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
        // 	this.pv_AM_CORP_JUMIN = frame.AM_CORP_JUMIN;	// 법인/주민세
        // 	this.pv_AM_ETC = frame.AM_ETC;					// 부대비용
        // 	this.pv_AM_TOTAL = frame.AM_TOTAL;				// 합계
         	this.pv_CD_CORP = frame.CD_CORP;				// 법인코드
        // 	this.pv_NO_ACCOUNT = frame.NO_ACCOUNT;			// 계좌번호
        	this.pv_DT_TRADE = frame.DT_TRADE;				// 거래일자

        // 	this.mskAM_TRADE.set_value(this.pv_AM_TRADE);			// 거래금액
        // 	this.mskAM_EZA.set_value(this.pv_AM_EZA);				// 이자금액
        // 	this.mskAM_CORP_JUMIN.set_value(this.pv_AM_CORP_JUMIN);	// 법인세/주민세
        // 	this.mskAM_ETC.set_value(this.pv_AM_ETC);				// 부대비용
        // 	this.mskAM_TOTAL.set_value(this.pv_AM_TOTAL);			// 입금예상금액
        	this.calDT_TRADE.set_value(this.pv_DT_TRADE);

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.cflCD_TRADE.CodeFindName = "DFX_NO_SLIP_YEJUKUM";
        	this.cflCD_TRADE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cflCD_TRADE.AfterCDTextChanged = "fnAfterCDTextChanged";
        };
        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        // 	this.mskAM_TRADE = this.divData.form.mskAM_TRADE;			// 거래금액
        // 	this.mskAM_EZA = this.divData.form.mskAM_EZA;					// 이자금액
        // 	this.mskAM_CORP_JUMIN = this.divData.form.mskAM_CORP_JUMIN;		// 법인세/주민세
        // 	this.mskAM_ETC = this.divData.form.mskAM_ETC;			// 부대비용
        // 	this.mskAM_TOTAL = this.divData.form.mskAM_TOTAL;			// 입금예상금액
        	this.cflCD_TRADE = this.divData.form.cflCD_TRADE;		//전표번호
        	this.calDT_TRADE = this.divData.form.calDT_TRADE;		//전표일자
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnValidation = function() {
        	if (this.gfnIsNull(this.cflCD_TRADE.form.CDTextBox.value)) {
        		this.gfnAlert("전표 번호를 입력하십시오.");
        		this.cflCD_TRADE.form.CDTextBox.setFocus();
        		return false;
        	}

        	return true;
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	dsUserParam.setColumn(nrow, "CD_CORP", this.pv_CD_CORP);
        	dsUserParam.setColumn(nrow, "DT_SLIP", this.pv_DT_TRADE);

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

        	json.CD_TRADE = this.cflCD_TRADE.form.CDTextBox.value;	// 거래내역번호(입금번호)


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
        this.loadIncludeScript("DFF_DLG_LINKSLIP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
