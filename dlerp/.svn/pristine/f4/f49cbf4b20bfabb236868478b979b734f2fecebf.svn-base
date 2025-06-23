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
            this.set_titletext("전표발행(대체)");
            this.getSetter("maxwidth").set("480");
            this.getSetter("maxheight").set("480");
            if (Form == this.constructor)
            {
                this._setFormPosition(410,420);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TRADE\" type=\"FLOAT\" size=\"256\"/><Column id=\"NO_ACCOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","30","5",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staBar04_00","99","255","251","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","229","350","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("입금/출금 정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar00_00","99","106","251","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar02","99","313","251","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar00","99","36","251","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar03","99","164","251","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar04","99","193","251","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar01","99","284","251","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar53","99","135","251","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","0","6","350","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("가입(출금)금액");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem00","0","36","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("가입금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_INTRADE","105","40","195","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_format("#,##0.##");
            obj.set_limitbymask("integer");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem55","0","135","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("이자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_EZA","105","140","195","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_format("#,##0.##");
            obj.set_limitbymask("integer");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","306","140","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem03","0","164","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("법인세/주민세");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_CORP_JUMIN","105","169","195","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_format("#,###,###,###,###,###,##0.##");
            obj.set_limitbymask("integer");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem04","0","193","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("부대비용");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_ETC","105","198","195","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_format("#,##0.##");
            obj.set_limitbymask("integer");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem01","0","284","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("입금예상금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_INCOME","105","289","195","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_format("#,##0.##");
            obj.set_limitbymask("integer");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem02","0","313","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("입금거래내역");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfLST_TRADE","105","317","238","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("18");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","123","366","45","21",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("확인");
            obj.getSetter("uWord").set("popup.ok");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancle","173","366","45","21",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("취소");
            obj.getSetter("uWord").set("popup.cancel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","306","169","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","306","40","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","306","198","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","306","289","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","76","350","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_text("만기/해약(입금)금액");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem00_00","0","106","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_text("거래금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_OUTTRADE","105","110","195","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_format("#,##0.##");
            obj.set_limitbymask("integer");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02_00","306","110","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem04_00","0","255","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("출금예상금액");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_OUT","105","260","195","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_format("#,##0.##");
            obj.set_limitbymask("integer");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04_00","306","260","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",410,420,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.cfLST_TRADE.form.CDTextBox","value","dsSearch","NO_TRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.cfLST_TRADE.form.DSTextBox","value","dsSearch","NO_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DFF_DLG_INOUTSLIP.xfdl", function() {
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
        this.pv_AM_INTRADE;
        this.pv_AM_OUTTRADE;
        this.pv_AM_EZA;
        this.pv_AM_CORP_JUMIN;
        this.pv_AM_ETC;
        this.pv_AM_INCOME;
        this.pv_CD_CORP;
        this.pv_NO_ACCOUNT;
        this.pv_DT_TRADE;
        this.pv_CT_INCOME;
        this.pv_AM_EZAINCOME;
        this.pv_AM_OUT;
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

        	this.pv_AM_INTRADE = frame.AM_INTRADE;			// 거래금액
        	this.pv_AM_OUTTRADE = frame.AM_OUTTRADE;		// 거래금액
        	this.pv_AM_EZA = frame.AM_EZA;					// 이자금액
        	this.pv_AM_CORP_JUMIN = frame.AM_CORP_JUMIN;	// 법인/주민세
        	this.pv_AM_ETC = frame.AM_ETC;					// 부대비용
        	this.pv_AM_INCOME = frame.AM_INCOME;			// 입금예상금액
        	this.pv_CD_CORP = frame.CD_CORP;				// 법인코드
        	this.pv_NO_ACCOUNT = frame.NO_ACCOUNT;			// 계좌번호
        	this.pv_DT_TRADE = frame.DT_TRADE;				// 거래일자
        	this.pv_CT_INCOME = frame.CT_INCOME;			// 입금분류건수
        	this.pv_AM_EZAINCOME = frame.AM_EZAINCOME;      // 이자 입금액 (입금예상액)
        	this.pv_AM_OUT = frame.AM_OUT;				    // 출금예상액

        	//trace("차입금액 :: " + this.pv_AM_TRADE);
        	//trace("이자금액 :: " + this.pv_AM_EZA);
        	//trace("부대비용 :: " + this.pv_AM_ETC);
        	//trace("법인세/주민세 ::: " + this.pv_AM_CORP_JUMIN);
        	//trace("입금예상금액 :: " + this.pv_AM_TOTAL);
        	//trace("법인코드 :: " + this.pv_CD_CORP);

        	this.mskAM_INTRADE.set_value(this.pv_AM_INTRADE);			// 거래금액
        	this.mskAM_OUTTRADE.set_value(this.pv_AM_OUTTRADE);			// 거래금액
        	this.mskAM_EZA.set_value(this.pv_AM_EZA);				// 이자금액
        	this.mskAM_CORP_JUMIN.set_value(this.pv_AM_CORP_JUMIN);	// 법인세/주민세
        	this.mskAM_ETC.set_value(this.pv_AM_ETC);				// 부대비용
        	this.mskAM_INCOME.set_value(this.pv_AM_INCOME + this.pv_AM_EZAINCOME);			// 입금예상금액
        	this.mskAM_OUT.set_value(this.pv_AM_OUT);

        	trace("이자금액 :: " + this.pv_AM_EZAINCOME);
        	if (this.pv_AM_INCOME == 0)
        	{
        		this.mskAM_INCOME.set_value(this.pv_AM_EZAINCOME);
        		//this.cfLST_TRADE.set_enable(false);
        	}

        	if (this.pv_CT_INCOME == -1 || this.pv_AM_INCOME + this.pv_AM_EZAINCOME == 0 )
        	{	this.cfLST_TRADE.set_enable(false);	}
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

        	this.mskAM_INTRADE = this.divData.form.mskAM_INTRADE;			// 거래금액
        	this.mskAM_OUTTRADE = this.divData.form.mskAM_OUTTRADE;			// 거래금액
        	this.mskAM_EZA = this.divData.form.mskAM_EZA;					// 이자금액
        	this.mskAM_CORP_JUMIN = this.divData.form.mskAM_CORP_JUMIN;		// 법인세/주민세
        	this.mskAM_ETC = this.divData.form.mskAM_ETC;					// 부대비용

        	this.mskAM_INCOME = this.divData.form.mskAM_INCOME;				// 입금예상금액
        	this.mskAM_OUT = this.divData.form.mskAM_OUT;                   // 출금예상금액
        	this.cfLST_TRADE = this.divData.form.cfLST_TRADE;
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnValidation = function() {
        	if (this.gfnIsNull(this.cfLST_TRADE.form.CDTextBox.value) && this.pv_CT_INCOME != -1 && this.pv_AM_INCOME > 0) {
        		this.gfnAlert("입금 거래내역을 입력하십시오.");
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
            var arrData = codeFindData;
        	if (arrData.length > 0) {
        		var strCdCode = "";
        		var strDsCode = "";
        		for(var r = 0; r < arrData.length; r++) {
        			strCdCode += arrData[r]["NO_INCONFIRM"]+",";
        			strDsCode += arrData[r]["AM_IN"]+",";
        		}

        		strCdCode = strCdCode.substr(0,strCdCode.length-1);
        		strDsCode = strDsCode.substr(0,strDsCode.length-1);

        		this.cfLST_TRADE.form.CDTextBox.set_value(strCdCode);
        		this.cfLST_TRADE.form.DSTextBox.set_value(strDsCode);

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

        	json.AM_INTRADE = this.mskAM_INTRADE.value;				// 차입금액
        	json.AM_OUTTRADE = this.mskAM_OUTTRADE.value;			// 차입금액
        	json.AM_EZA = this.mskAM_EZA.value;						// 이자금액
        	json.AM_CORP_JUMIN = this.mskAM_CORP_JUMIN.value;		// 법인세/주민세
        	json.AM_ETC = this.mskAM_ETC.value;						// 부대비용
        	json.AM_INCOME = this.mskAM_INCOME.value;				// 입금예상금액
        	json.NO_TRADE = this.cfLST_TRADE.form.CDTextBox.value;	// 거래내역번호(입금번호)
        	json.CT_INCOME = this.pv_CT_INCOME;

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
        this.loadIncludeScript("DFF_DLG_INOUTSLIP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
