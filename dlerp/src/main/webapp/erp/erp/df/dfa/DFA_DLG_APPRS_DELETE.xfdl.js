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
            this.set_titletext("단기자금계획 전자결재(초기화)");
            if (Form == this.constructor)
            {
                this._setFormPosition(410,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsYN_FINAL", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle","20","50","350","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("계획정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk","143","257","45","21",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("확인");
            obj.getSetter("uWord").set("popup.ok");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancle","193","257","45","21",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("취소");
            obj.getSetter("uWord").set("popup.cancel");
            this.addChild(obj.name, obj);

            obj = new Static("staBar00","119","80","251","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Static("staItem00","20","80","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("작성년월");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","20","20","350","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("단기자금계획 전자결재(초기화)");
            obj.set_cssclass("sta_POP_Title");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","26","204","264","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("※ 해당자료의 결재상태가 초기화 됩니다.");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","269","204","97","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("[주의]");
            obj.set_color("red");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Div("calYM_PLAN","126","85","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("staBar01","119","109","251","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Static("staItem01","20","109","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("staBar02","119","167","251","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Static("staItem02","20","167","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("작성부서");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","126","114","237","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","126","172","237","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","26","222","264","20",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("※ 취소 전 결재여부 확인!!!");
            obj.set_color("red");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("staBar03","119","138","251","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Static("staItem03","20","138","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Combo("cboYN_FINAL","126","143","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("dsYN_FINAL");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("자금집행일");
            obj.set_index("-1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",410,300,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","calYM_PLAN.form.TextBox","value","dsSearch","YM_PLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cboYN_FINAL","value","dsSearch","YN_FINAL");
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
        this.registerScript("DFA_DLG_APPRS_DELETE.xfdl", function() {
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
        	this.fnSetCombo();

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	var frame = this.getOwnerFrame();

        	if (!this.gfnIsNull(frame.YM_PLAN)) {
        		this.calYM_PLAN.form.TextBox.set_value(frame.YM_PLAN);

        		this.ccfCD_CORP.form.CDTextBox.set_value(frame.CD_CORP);
        		this.ccfCD_CORP.form.DSTextBox.set_value(frame.DS_CORP);

        		this.ccfCD_SITE.form.CDTextBox.set_value(frame.CD_SITE);
        		this.ccfCD_SITE.form.DSTextBox.set_value(frame.DS_SITE);
        	}
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.CodeFindName = "DZX_CFCORP";	// 법인코드
        	this.ccfCD_SITE.CodeFindName = "DFX_CFACNTUNIT";	// 작성부서

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

        // 	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        // 		this.gfnAlert("법인코드를 입력하십시오.");
        // 		this.ccfCD_CORP.form.CDTextBox.setFocus();
        // 		return false;
        // 	}

        	if (this.gfnIsNull(this.cboYN_FINAL.value)) {
        		this.gfnAlert("구분을 입력하십시오.");
        		this.cboYN_FINAL.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.ccfCD_SITE.form.CDTextBox.value)) {
        		this.gfnAlert("작성부서를 입력하십시오.");
        		this.ccfCD_SITE.form.CDTextBox.setFocus();
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
        		dsUserParam.setColumn(nrow, "CD_GROUP", this.cdGroup);
        		break;

        	case "ccfCD_SITE": // 작성부서
        		if ( this.gfnIsNull(cdCorp) ) {
        			this.gfnAlert("법인코드를 먼저 입력하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_GROUP", this.cdGroup);
        		dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        		break;

        	default:
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	switch(id) {

        	case "ccfCD_CORP": // 법인코드
        		break;

        	case "ccfCD_SITE": // 작성부서
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

        	json.YM_PLAN = this.calYM_PLAN.form.TextBox.value;		// 작성년월
        	json.CD_CORP = this.ccfCD_CORP.form.CDTextBox.value;	// 법인코드
        	json.YN_FINAL = this.cboYN_FINAL.value;					// 구분
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


        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(0, "CD_TYPE", "A7");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsYN_FINAL=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };


        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "combo") {
        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	var frame = this.getOwnerFrame();

        		if (!this.gfnIsNull(frame.YM_PLAN)) {
        			this.calYM_PLAN.form.TextBox.set_value(frame.YM_PLAN);

        			this.ccfCD_CORP.form.CDTextBox.set_value(frame.CD_CORP);
        			this.ccfCD_CORP.form.DSTextBox.set_value(frame.DS_CORP);

        			this.ccfCD_SITE.form.CDTextBox.set_value(frame.CD_SITE);
        			this.ccfCD_SITE.form.DSTextBox.set_value(frame.DS_SITE);

        			this.cboYN_FINAL.set_value(frame.YN_FINAL);

        			// 부서팀(N) : 작성부서 셋팅 / 자금팀 : 작성부서 숨김 처리
        			switch(frame.YN_FINAL) {
        			case "Y":
        				this.staItem02.set_visible(false);
        				this.staBar02.set_visible(false);
        				this.ccfCD_SITE.set_visible(false);
        				break;
        			case "N":
        				this.staItem02.set_visible(true);
        				this.staBar02.set_visible(true);
        				this.ccfCD_SITE.set_visible(true);

        				break;
        			default:
        			}
        		}
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
            this.btnCancle.addEventHandler("onclick",this.btnCancle_onclick,this);
            this.cboYN_FINAL.addEventHandler("onitemchanged",this.divSearch_cboYN_FINAL_onitemchanged,this);
        };
        this.loadIncludeScript("DFA_DLG_APPRS_DELETE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
