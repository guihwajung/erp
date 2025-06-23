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
            this.set_titletext("교육관리일괄등록-교육내용");
            if (Form == this.constructor)
            {
                this._setFormPosition(326,268);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"FR_EDUCATION\" type=\"STRING\" size=\"256\"/><Column id=\"TO_EDUCATION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_EDU_INOUT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_EDU_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EDU_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_EDU_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EDU_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EDUCATION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EDU_ORGAN\" type=\"STRING\" size=\"256\"/><Column id=\"AM_EDUCATION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"FR_EDUCATION\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEDU_INOUT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">사내</Col><Col id=\"DS_CODE\">사내</Col></Row><Row><Col id=\"CD_CODE\">사외</Col><Col id=\"DS_CODE\">사외</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","-6","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("일괄등록입력");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staFR_EDUCATION","0","staTITLE:0","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("교육일정");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staFR_EDUCATION_bg","staFR_EDUCATION:-1","staFR_EDUCATION:-30","240","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclFR_EDUCATION","staFR_EDUCATION:5","staFR_EDUCATION:-25","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTO_EDUCATION","ctclFR_EDUCATION:0","staFR_EDUCATION:-25","30","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclTO_EDUCATION","staTO_EDUCATION:0","staFR_EDUCATION:-25","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_EDU_INOUT","0","staFR_EDUCATION:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("사내외구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_EDU_INOUT_bg","staCD_EDU_INOUT:-1","staCD_EDU_INOUT:-30","240","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboCD_EDU_INOUT","staCD_EDU_INOUT:5","staCD_EDU_INOUT:-25","132","18",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_innerdataset("dsEDU_INOUT");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("cbo00");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_EDU_TYPE","0","staCD_EDU_INOUT:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("교육종류");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_EDU_TYPE_bg","staCD_EDU_TYPE:-1","staCD_EDU_TYPE:-30","240","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_EDU_TYPE","staCD_EDU_TYPE:5","staCD_EDU_TYPE:-25","230","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("25");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_EDU_GUBUN","0","staCD_EDU_TYPE:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_EDU_GUBUN_bg","staDS_EDU_GUBUN:-1","staDS_EDU_GUBUN:-30","240","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfDS_EDU_GUBUN","staDS_EDU_GUBUN:5","staDS_EDU_GUBUN:-25","230","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("12");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_EDUCATION","0","staDS_EDU_GUBUN:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_text("교육명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_EDUCATION_bg","staDS_EDUCATION:-1","staDS_EDUCATION:-30","240","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_EDUCATION","staDS_EDUCATION:5","staDS_EDUCATION:-25","230","20",null,null,null,null,null,null,this.divData.form);
            obj.set_visible("true");
            obj.set_taborder("31");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_EDU_ORGAN","0","staDS_EDUCATION:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_text("교육기관명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_EDU_ORGAN_bg","staDS_EDU_ORGAN:-1","staDS_EDU_ORGAN:-30","240","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_EDU_ORGAN","staDS_EDU_ORGAN:5","staDS_EDU_ORGAN:-25","230","20",null,null,null,null,null,null,this.divData.form);
            obj.set_visible("true");
            obj.set_taborder("31");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_EDUCATION","0","staDS_EDU_ORGAN:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_text("교육금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_EDUCATION_bg","staAM_EDUCATION:-1","staAM_EDUCATION:-30","240","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_EDUCATION","staAM_EDUCATION:4","staAM_EDUCATION:-25","230","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_limitbymask("both");
            obj.set_format("###,###,###,###,###");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns","100","staAM_EDUCATION:10","130","30",null,null,null,null,null,null,this.divData.form);
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","0","0","60","30",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            this.divData.form.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:10","0","60","30",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("15");
            obj.set_text("취소");
            this.divData.form.divBtns.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ctclFR_EDUCATION","value","dsData","FR_EDUCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ctclTO_EDUCATION","value","dsData","TO_EDUCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.cboCD_EDU_INOUT","value","dsData","CD_EDU_INOUT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ccfCD_EDU_TYPE.form.CDTextBox","value","dsData","CD_EDU_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ccfCD_EDU_TYPE.form.DSTextBox","value","dsData","DS_EDU_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.ccfDS_EDU_GUBUN.form.CDTextBox","value","dsData","CD_EDU_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.ccfDS_EDU_GUBUN.form.DSTextBox","value","dsData","DS_EDU_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.edtDS_EDUCATION","value","dsData","DS_EDUCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.edtDS_EDU_ORGAN","value","dsData","DS_EDU_ORGAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.mskAM_EDUCATION","value","dsData","AM_EDUCATION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAE_EDUCATION_ALL_REGDLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj, e) {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();
        	this.fnInit();
        }

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {

        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {

        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctclFR_EDUCATION = this.divData.form.ctclFR_EDUCATION;		// 교육일정(FROM)
        	this.ctclTO_EDUCATION = this.divData.form.ctclTO_EDUCATION;		// 교육일정(TO)
        	this.cboCD_EDU_INOUT  = this.divData.form.cboCD_EDU_INOUT;		// 사내외구분
        	this.ccfCD_EDU_TYPE   = this.divData.form.ccfCD_EDU_TYPE;		// 교육종류
        	this.ccfDS_EDU_GUBUN  = this.divData.form.ccfDS_EDU_GUBUN;		// 구분
        	this.edtDS_EDUCATION  = this.divData.form.edtDS_EDUCATION;		// 교육명
        	this.edtDS_EDU_ORGAN  = this.divData.form.edtDS_EDU_ORGAN;		// 교육기관명
        	this.mskAM_EDUCATION  = this.divData.form.mskAM_EDUCATION;		// 교육금액
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_EDU_TYPE.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";	// 교육종류
        	this.ccfCD_EDU_TYPE.AfterCDTextChanged      = "fnAfterCDTextChanged";
        	this.ccfDS_EDU_GUBUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	// 구분
        	this.ccfDS_EDU_GUBUN.AfterCDTextChanged     = "fnAfterCDTextChanged";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        }

        /************************************************************************
         * 화면 및 검색영역 초기화
         ************************************************************************/
        this.fnInit = function() {
        	// 사내외구분
        	this.cboCD_EDU_INOUT.set_index(0);
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /*
         * 조회 버튼
         */
        this.fnSelect = function() {

        }

        /*
         * 추가 버튼
         */
        this.fnAdd = function() {

        }

        /*
         * 삭제 버튼
         */
        this.fnDel = function() {

        }

        /*
         * 저장 버튼
         */
        this.fnSave = function() {

        }

        /*
         * 엑셀 버튼
         */
        this.fnExcel = function() {

        }

        /*
         * 출력 버튼
         */
        this.fnPrint = function() {
        	return false;
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValid = function() {
        	return true;
        }

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        // 확인 버튼
        this.btnOK_onclick = function(obj, e) {
        	var json = {};

        	json.FR_EDUCATION = this.dsData.getColumn(0, "FR_EDUCATION");
        	json.TO_EDUCATION = this.dsData.getColumn(0, "TO_EDUCATION");
        	json.CD_EDU_INOUT = this.dsData.getColumn(0, "CD_EDU_INOUT");
        	json.CD_EDU_TYPE  = this.dsData.getColumn(0, "CD_EDU_TYPE");
        	json.DS_EDU_TYPE  = this.dsData.getColumn(0, "DS_EDU_TYPE");
        	json.CD_EDU_GUBUN = this.dsData.getColumn(0, "CD_EDU_GUBUN");
        	json.DS_EDU_GUBUN = this.dsData.getColumn(0, "DS_EDU_GUBUN");
        	json.DS_EDUCATION = this.dsData.getColumn(0, "DS_EDUCATION");
        	json.DS_EDU_ORGAN = this.dsData.getColumn(0, "DS_EDU_ORGAN");
        	json.AM_EDUCATION = this.dsData.getColumn(0, "AM_EDUCATION");

        	this.getParentContext().close(JSON.stringify(json));
        }

        // 취소 버튼
        this.btnCANCLE_onclick = function(obj,e){
        	this.getParentContext().close(false);
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         * 기본 콜백
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return;
        	}
        }

        // 달력
        this.dsSearch_onvaluechanged = function(obj) {
        	// 교육일정(TO) 초기화
        	this.tclDT_PROVATION_TO.set_value("");
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_EDU_TYPE") {	// 교육종류
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "S3");
        	}
        	else if (id == "ccfDS_EDU_GUBUN") {	// 교육구분
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "S4");
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if (id == "ccfCD_EDU_TYPE") {
        		;
        	} else if (id == "ccfDS_EDU_GUBUN") {
        		;
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGridBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }

        this.fnGridAfterCDTextChanged = function(id, codeFindData) {

        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.ctclFR_EDUCATION.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.ctclTO_EDUCATION.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.mskAM_EDUCATION.addEventHandler("onchanged",this.divData_mskAM_PAYMENTAMT_onchanged,this);
            this.divData.form.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divData.form.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
        };
        this.loadIncludeScript("DAE_EDUCATION_ALL_REGDLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
