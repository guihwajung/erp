(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAU_GANTAXPRINT_DLG");
            this.set_titletext("간이지급명세서(근로소득)출력");
            this.getSetter("maxwidth").set("406");
            this.getSetter("maxheight").set("293");
            if (Form == this.constructor)
            {
                this._setFormPosition(366,218);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">report</Col><Col id=\"SP\">DAUPR_GANTAXPRINT_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"YN_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"SUBMIT_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"YY_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CFSELFACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CFSELFACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PRINT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YN_GUBUN\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","-5","344","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("간이지급명세서(근로소득) 출력");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_GUBUN","0","35","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("신고구분");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_GUBUN_bg","staYN_GUBUN:-1","staYN_GUBUN:-30","280","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboYN_GUBUN","staYN_GUBUN:5","staYN_GUBUN:-25","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divData_form_cboYN_GUBUN_innerdataset = new nexacro.NormalDataset("divData_form_cboYN_GUBUN_innerdataset", obj);
            divData_form_cboYN_GUBUN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">상반기</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">하반기</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_cboYN_GUBUN_innerdataset);
            obj.set_text("상반기");
            obj.set_value("1");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSUBMIT_GUBUN","0","staYN_GUBUN:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("제출구분");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSUBMIT_GUBUN_bg","staSUBMIT_GUBUN:-1","staSUBMIT_GUBUN:-30","280","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboSUBMIT_GUBUN","staSUBMIT_GUBUN:5","staSUBMIT_GUBUN:-25","118","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divData_form_cboSUBMIT_GUBUN_innerdataset = new nexacro.NormalDataset("divData_form_cboSUBMIT_GUBUN_innerdataset", obj);
            divData_form_cboSUBMIT_GUBUN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">지급자보관용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">지급자제출용</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_cboSUBMIT_GUBUN_innerdataset);
            obj.set_text("지급자보관용");
            obj.set_value("1");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYY_BASE","0","staSUBMIT_GUBUN:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("귀속년도");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYY_BASE_bg","staYY_BASE:-1","staYY_BASE:-30","280","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ctclYY_BASE","staYY_BASE:5","staYY_BASE:-25","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CFSELFACNT","0","staYY_BASE:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("세무단위");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CFSELFACNT_bg","86","122","280","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_CFSELFACNT","staCD_CFSELFACNT:5","staCD_CFSELFACNT:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DHX_CFSELFACNT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("12");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_PRINT","0","staCD_CFSELFACNT:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("출력일자");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_PRINT_bg","staDT_PRINT:-1","staDT_PRINT:-30","280","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_PRINT","staDT_PRINT:5","staDT_PRINT:-25","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns","120","staDT_PRINT:10","130","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","0","0","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            this.divData.form.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:10","0","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.divData.form.divBtns.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.cboYN_GUBUN","value","dsData","YN_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.cboSUBMIT_GUBUN","value","dsData","SUBMIT_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ctclYY_BASE.form.TextBox","value","dsData","YY_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ccfCD_CFSELFACNT.form.CDTextBox","value","dsData","CD_CFSELFACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ccfCD_CFSELFACNT.form.DSTextBox","value","dsData","DS_CFSELFACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.ctclDT_PRINT","value","dsData","DT_PRINT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAU_GANTAXPRINT_DLG.xfdl", function() {
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
            this.fnSetCombo();
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
        	this.cboYN_GUBUN      = this.divData.form.cboYN_GUBUN;		// 신고구분
        	this.cboSUBMIT_GUBUN  = this.divData.form.cboSUBMIT_GUBUN;	// 제출구분
        	this.ctclYY_BASE      = this.divData.form.ctclYY_BASE;		// 귀속년도
        	this.ccfCD_CFSELFACNT = this.divData.form.ccfCD_CFSELFACNT;	// 세무단위
        	this.ctclDT_PRINT     = this.divData.form.ctclDT_PRINT;		// 출력일자
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CFSELFACNT.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";		// 세무단위
        	this.ccfCD_CFSELFACNT.AfterCDTextChanged      = "fnAfterCDTextChanged";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        }

        /************************************************************************
         * 콤보 데이터 조회 및 설정
         ************************************************************************/
        this.fnSetCombo = function() {

        }

        /************************************************************************
         * 화면 및 검색영역 초기화
         ************************************************************************/
        this.fnInit = function() {
        	var frame = this.getOwnerFrame();
        	if (!this.gfnIsNull(frame.YN_GUBUN) && !this.gfnIsNull(frame.YY_BASE)) {
        		this.dsData.setColumn(0, "YN_GUBUN", frame.YN_GUBUN);	// 작업구분
        		this.dsData.setColumn(0, "YY_BASE", frame.YY_BASE);		// 정산년도
        	} else {
        		this.dsData.setColumn(0, "YY_BASE", this.gfnGetDate().substr(0, 4));		// 정산년도
        	}

        	this.dsData.setColumn(0, "YN_GUBUN", "Y");					// 신고구분
        	this.dsData.setColumn(0, "SUBMIT_GUBUN", "Y");				// 제출구분
        	this.dsData.setColumn(0, "DT_PRINT", this.gfnGetDate());	// 출력일자
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /*
         *	조회 버튼
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
        	return true
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {
         	var validate = true;

        	// 지급년월
        	if (this.gfnIsNull(this.dsData.getColumn(0, "YY_BASE"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ctclYY_BASE.form.TextBox.setFocus();
        		}
        		this.gfnAlert("귀속년도를 입력하세요.");
        		return validate;
        	}

        	// 세무단위
        	if (this.gfnIsNull(this.dsData.getColumn(0, "CD_CFSELFACNT"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CFSELFACNT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("세무단위를 입력하세요.", "fnVaidateCallback");
        		return validate;
        	}

        	// 제출일
        	if (this.gfnIsNull(this.dsData.getColumn(0, "DT_PRINT"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ctclDT_PRINT.setFocus();
        		}
        		this.gfnAlert("제출일을 입력하세요.");
        		return false;
        	}

         	return validate;
        }

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        // 확인 버튼
        this.btnOK_onclick = function(obj, e) {
        	if (!this.fnSelectValidate()) return false;

        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("YN_GUBUN", "string");
        	this.dsReport.addColumn("OUT_YM_IMPUTE", "string");
        	this.dsReport.addColumn("OUT_CD_SELFACNT", "string");
        	this.dsReport.addColumn("SUBMIT_GUBUN", "string");

        	var nrow = this.dsReport.addRow();
        	this.dsReport.setColumn(nrow, "YN_GUBUN"       , this.dsData.getColumn(0, "YN_GUBUN"));
        	this.dsReport.setColumn(nrow, "OUT_YM_IMPUTE"  , this.dsData.getColumn(0, "YY_BASE"));
        	this.dsReport.setColumn(nrow, "OUT_CD_SELFACNT", this.dsData.getColumn(0, "CD_CFSELFACNT"));
        	this.dsReport.setColumn(nrow, "SUBMIT_GUBUN"   , this.dsData.getColumn(0, "SUBMIT_GUBUN"));

        	var inProc     = "_dsProc";
        	var inParam    = "";						// 필요없는 경우 생략
        	var inData     = "report=dsReport";
        	var reportpath = "/da/dau/DAU_GANTAXPRINT.ozr";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);

        	this.getParentContext().close(true);
        }

        // 취소 버튼
        this.btnCANCLE_onclick = function(obj, e) {
        	this.getParentContext().close(false);
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         * 기본 콜백
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "execute") {
        		if (errorCode == 0) {
        			this.fnClose = function() {
        				this.getParentContext().close(true);
        			}
        			this.gfnAlert("급여소득자료 생성이 완료되었습니다.", "fnClose");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
         	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
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
            this.divData.form.staDT_PRINT.addEventHandler("onclick",this.divData_staDT_PRINT_onclick,this);
            this.divData.form.ctclDT_PRINT.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divData.form.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
        };
        this.loadIncludeScript("DAU_GANTAXPRINT_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
