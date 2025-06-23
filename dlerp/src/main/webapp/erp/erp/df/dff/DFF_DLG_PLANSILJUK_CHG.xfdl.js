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
            this.set_titletext("거래정보 일괄변경");
            if (Form == this.constructor)
            {
                this._setFormPosition(410,340);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_TRADE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDlg", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_TRADE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TRADE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_WONGEUM\" type=\"FLOAT\" size=\"256\"/><Column id=\"RT_EZA\" type=\"FLOAT\" size=\"256\"/><Column id=\"AM_EZA\" type=\"FLOAT\" size=\"256\"/><Column id=\"FR_EZA\" type=\"STRING\" size=\"256\"/><Column id=\"TO_EZA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staBar05","109","41","261","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar00","109","70","261","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar04","109","99","261","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar53","109","128","261","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar03","109","157","261","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar01","109","186","261","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar02","109","215","261","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","20","10","350","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("거래정보 일괄변경");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem05","20","41","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("거래구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboTY_TRADE","115","46","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_TRADE");
            obj.set_text("진행중");
            obj.set_value("N");
            obj.set_index("-1");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem00","20","70","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("거래일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_TRADE","115","75","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem04","20","99","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("원금");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_WONGEUM","115","104","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_format("#,###,###,###,###,###,##0.##");
            obj.set_limitbymask("integer");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","256","104","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem55","20","128","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("이율");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskRT_EZA","115","133","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_format("#,##0.####");
            obj.set_limitbymask("integer");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","256","133","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("%");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem03","20","157","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("이자금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_EZA","115","162","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_format("#,###,###,###,###,###,##0.##");
            obj.set_limitbymask("integer");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","256","162","20","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem01","20","186","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("이자기간(F)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calFR_EZA","115","191","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem02","20","215","90","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("이자기간(T)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calTO_EZA","115","220","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","143","265","45","21",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_text("확인");
            obj.getSetter("uWord").set("popup.ok");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancle","193","265","45","21",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_text("취소");
            obj.getSetter("uWord").set("popup.cancel");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",410,340,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.cboTY_TRADE","value","dsDlg","TY_TRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.calDT_TRADE","value","dsDlg","DT_TRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.calFR_EZA","value","dsDlg","FR_EZA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.calTO_EZA","value","dsDlg","TO_EZA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.mskAM_WONGEUM","value","dsDlg","AM_WONGEUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.mskRT_EZA","value","dsDlg","RT_EZA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.mskAM_EZA","value","dsDlg","AM_EZA");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DFF_DLG_PLANSILJUK_CHG.xfdl", function() {
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
        	this.fnSetCombo();

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        // 	var frame = this.getOwnerFrame();
        // 	if(!this.gfnIsNull(frame.CD_CORP) && !this.gfnIsNull(frame.DS_CORP)) {
        // 	    this.pv_CD_CORP = frame.CD_CORP;
        //  		this.pv_DS_CORP = frame.DS_CORP;
        // 	}
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        // 	this.cfCD_SideBank.CodeFindName = "DFX_CFCD_SIDEBANK";
        // 	this.cfCD_SideBank.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        // 	this.cfCD_SideBank.AfterCDTextChanged = "fnAfterCDTextChanged";
        };
        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.cboTY_TRADE = this.divData.form.cboTY_TRADE;		// 거래구분
        	this.calDT_TRADE = this.divData.form.calDT_TRADE;		// 거래일자
        	this.mskAM_WONGEUM = this.divData.form.mskAM_WONGEUM;	// 원금
        	this.mskRT_EZA = this.divData.form.mskRT_EZA;			// 이율
        	this.mskAM_EZA = this.divData.form.mskAM_EZA;			// 이자금액
        	this.calFR_EZA = this.divData.form.calFR_EZA;			// 이자기간(from)
        	this.calTO_EZA = this.divData.form.calTO_EZA;			// 이자기간(to)
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnValidation = function() {
        // 	if (this.gfnIsNull(this.cboTY_TRADE.value)) {
        // 		this.gfnAlert("거래구분을 선택하십시오.");
        // 		this.cboTY_TRADE.setFocus();
        // 		return false;
        // 	}

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

        	json.TY_TRADE = this.cboTY_TRADE.value;		// 거래구분
        	json.DT_TRADE = this.calDT_TRADE.value;		// 거래일자
        	json.AM_WONGEUM = this.dsDlg.getColumn(0, "AM_WONGEUM") ;	// 원금
        	json.RT_EZA = this.dsDlg.getColumn(0, "RT_EZA"); //this.mskRT_EZA.value;			// 이율
        	json.AM_EZA = this.dsDlg.getColumn(0, "AM_EZA") ;	// 원금			// 이자금액
        	json.FR_EZA = this.calFR_EZA.value;			// 이자기간(from)
        	json.TO_EZA = this.calTO_EZA.value;			// 이자기간(to)

        	//trace(" json chg=>" + this.dsList.getColumn(0, "AM_WONGEUM"));
        	this.getParentContext().close(JSON.stringify(json));
        };

        /**
        * @ 취소버튼이벤트
        */
        this.btnCancle_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };


        // 공통코드콤보
        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");
        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(0, "CD_TYPE", "FB");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_TRADE=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "combo") {

        		//  거래구분
        		var iRow = this.dsTY_TRADE.insertRow(0);
        		this.dsTY_TRADE.setColumn(iRow, "CD_CODE", "");
        		this.dsTY_TRADE.setColumn(iRow, "DS_CODE", "선택");
        		this.cboTY_TRADE.set_index(0);

        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.cboTY_TRADE.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
            this.divData.form.btnCancle.addEventHandler("onclick",this.btnCancle_onclick,this);
        };
        this.loadIncludeScript("DFF_DLG_PLANSILJUK_CHG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
