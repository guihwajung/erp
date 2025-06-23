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
            this.getSetter("maxwidth").set("600");
            this.getSetter("maxheight").set("380");
            this.getSetter("ttitletext").set("받을어음반제");
            if (Form == this.constructor)
            {
                this._setFormPosition(560,310);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","20","50","510","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("어음기본정보(참조)");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar53","119","109","411","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","233","277","45","21",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("확인");
            obj.getSetter("uWord").set("popup.ok");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancle","283","277","45","21",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("취소");
            obj.getSetter("uWord").set("popup.cancel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar00","119","80","411","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar02","119","237","411","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar03","119","138","411","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem55","20","109","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("발행일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem00","20","80","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("어음번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem02","20","237","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("입금확인내역");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem03","20","138","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("지급은행명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","497","85","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle00","20","210","510","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("입금정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfLST_TRADE","125","241","238","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("212");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle01","20","20","510","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("받을어음반제전표발행");
            obj.set_cssclass("sta_POP_Title");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem01","270","80","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("어음금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_NOTES","376","85","115","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_format("#,###,###,###,###,###,##0");
            obj.set_limitbymask("integer");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_NOTES","125","85","133","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_maxlength("20");
            obj.set_inputtype("number");
            obj.set_inputfilter("none,comma,dot,alpha");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem04","270","109","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("만기일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem05","270","138","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("거래처명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_PUBLISH","125","114","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_BANK","125","143","133","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_maxlength("20");
            obj.set_inputtype("number");
            obj.set_inputfilter("none,comma,dot,alpha");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_EXPIRY","376","114","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_VENDOR","376","143","133","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_maxlength("20");
            obj.set_inputtype("number");
            obj.set_inputfilter("none,comma,dot,alpha");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar01","119","167","411","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem06","20","167","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_text("회계일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_EXPIRY2","125","172","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_enable("true");
            obj.set_autoskip("false");
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
        this.registerScript("DFD_DLG_NOTES_R.xfdl", function() {
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
        this.pv_NO_NOTES;
        this.pv_AM_NOTES;
        this.pv_DT_PUBLISH;
        this.pv_DT_EXPIRY;
        this.pv_DS_BANK;
        this.pv_CD_VENDOR;
        this.pv_CD_CORP;
        this.pv_NO_ACCOUNT;

        this.pv_RTN_NO_ACCOUNT;
        this.pv_RTN_CD_BANK;
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

        	this.pv_NO_NOTES = frame.NO_NOTES;		// 어음번호
        	this.pv_AM_NOTES = frame.AM_NOTES;		// 어음금액
        	this.pv_DT_PUBLISH = frame.DT_PUBLISH;	// 발행일자
        	this.pv_DT_EXPIRY = frame.DT_EXPIRY;	// 만기일자
        	this.pv_DS_BANK = frame.DS_BANK;		// 지급은행명
        	this.pv_CD_VENDOR = frame.DS_VENDOR;	// 거래처명
        	this.pv_CD_CORP = frame.CD_CORP;		// 법인코드
        	this.pv_NO_ACCOUNT = frame.NO_ACCOUNT;	// 계좌번호

        	this.txtNO_NOTES.set_value(this.pv_NO_NOTES);		// 어음번호
        	this.mskAM_NOTES.set_value(this.pv_AM_NOTES);		// 어음금액
        	this.ctclDT_PUBLISH.set_value(this.pv_DT_PUBLISH);	// 발행일자
        	this.ctclDT_EXPIRY.set_value(this.pv_DT_EXPIRY);	// 만기일자
        	this.txtDS_BANK.set_value(this.pv_DS_BANK);			// 지급은행명
        	this.txtDS_VENDOR.set_value(this.pv_CD_VENDOR);		// 거래처명
        	this.ctclDT_EXPIRY2.set_value(this.pv_DT_EXPIRY);	// 회계일자(만기일자)
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        	this.txtNO_NOTES = this.divData.form.txtNO_NOTES;
        	this.mskAM_NOTES = this.divData.form.mskAM_NOTES;
        	this.ctclDT_PUBLISH = this.divData.form.ctclDT_PUBLISH;
        	this.ctclDT_EXPIRY = this.divData.form.ctclDT_EXPIRY;
        	this.txtDS_BANK = this.divData.form.txtDS_BANK;
        	this.txtDS_VENDOR = this.divData.form.txtDS_VENDOR;
        	this.ctclDT_EXPIRY2 = this.divData.form.ctclDT_EXPIRY2;
        	this.cfLST_TRADE = this.divData.form.cfLST_TRADE;

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
        // 	if (this.gfnIsNull(this.cfLST_TRADE.form.CDTextBox.value)) {
        // 		this.gfnAlert("거래내역을 입력하십시오.");
        // 		this.cfLST_TRADE.form.CDTextBox.setFocus();
        // 		return false;
        // 	}

        	return true;
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "cfLST_TRADE") {
        		dsUserParam.setColumn(nrow, "CD_DEPT", "");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.pv_CD_CORP);				// 법인코드
        		dsUserParam.setColumn(nrow, "NO_ACCOUNT", this.pv_NO_ACCOUNT);			// 계좌번호
        		dsUserParam.setColumn(nrow, "DT_TRADE", this.ctclDT_EXPIRY2.value);		// 거래일자(회계일자임 : 기본값은 만기일자이나 변경되면 변경된값이 거래일자임)
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if (id == "cfLST_TRADE") {
        		if (arr.length > 0) {
        			this.pv_RTN_NO_ACCOUNT = arr[0]["NO_ACCOUNT"];
        			this.pv_RTN_CD_BANK = arr[0]["CD_BANK"];
        		}

        	}
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

        	json.DT_SLIP = this.ctclDT_EXPIRY2.value;				// 회계일자(만기일자)
        	json.NO_TRADE = this.cfLST_TRADE.form.CDTextBox.value;	// 거래내역번호(입금번호)
        	json.NO_ACCOUNT = this.pv_RTN_NO_ACCOUNT;				// 계좌번호
        	json.CD_BANK = this.pv_RTN_CD_BANK;						// 은행코드

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
            this.divData.form.ctclDT_PUBLISH.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.ctclDT_EXPIRY.addEventHandler("onchanged",this.fnSearchInit,this);
        };
        this.loadIncludeScript("DFD_DLG_NOTES_R.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
