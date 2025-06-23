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
            this.getSetter("maxheight").set("295");
            if (Form == this.constructor)
            {
                this._setFormPosition(346,230);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">report</Col><Col id=\"SP\">DAUPR_GANTAXSINGOMM_PRINT_SELECT</Col></Row></Rows>");
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

            obj = new Static("staTITLE","2","0","344","30",null,null,null,null,null,null,this.divData.form);
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

            obj = new Static("sta02","86","35","260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYY_BASE","0","93","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("귀속년도");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","86","93","260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CFSELFACNT","0","122","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("세무단위");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","86","122","260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_CFSELFACNT","92","127","248","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DHX_CFSELFACNT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("12");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_PRINT","0","151","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("출력일자");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta08","86","151","260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_PRINT","92","156","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboYN_GUBUN","92","40","80","20",null,null,null,null,null,null,this.divData.form);
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

            obj = new Div("ctclYY_BASE","92","98","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns","72","185","200","35",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","120","5","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.divData.form.divBtns.addChild(obj.name, obj);

            obj = new Button("btnOK","30","5","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            this.divData.form.divBtns.addChild(obj.name, obj);

            obj = new Static("staSUBMIT_GUBUN","0","64","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("제출구분");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","86","64","260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboSUBMIT_GUBUN","92","69","118","20",null,null,null,null,null,null,this.divData.form);
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
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DAU_GANTAXPRINT_DLGMM.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	//this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();
        	this.fnInit();

        // 	var frame = this.getOwnerFrame();
        // 	if(!this.gfnIsNull(frame.YN_GUBUN) && !this.gfnIsNull(frame.YY_BASE)){
        // 		this.cboYN_GUBUN.set_value(frame.YN_GUBUN); // 작업구분
        // 		this.ctclYY_BASE.form.TextBox.set_value(frame.YY_BASE); // 정산년도
        // 	} else {
        // 		this.ctclYY_BASE.form.TextBox.set_value(this.gfnGetDate().substr(0,4));//정산년도
        // 	}
        //
        // 	//출력일자
        // 	this.ctclDT_PRINT.set_value(this.gfnGetDate());
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	// this.FormBtns.Add.set_enable(false);
        	// this.FormBtns.Del.set_enable(false);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.grSearch = this.FormInfo.GR_SEARCH;					          // 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;					          // 그룹코드
        	this.cboYN_GUBUN      = this.divData.form.cboYN_GUBUN;		// 신고구분
        	this.cboSUBMIT_GUBUN  = this.divData.form.cboSUBMIT_GUBUN;	// 제출구분
        	this.ctclYY_BASE      = this.divData.form.ctclYY_BASE;		// 귀속년도
        	this.ccfCD_CFSELFACNT = this.divData.form.ccfCD_CFSELFACNT;	// 세무단위
        	this.ctclDT_PRINT     = this.divData.form.ctclDT_PRINT;		// 출력일자
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {


        };
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


        };
         /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {

         	var validate = true;

        	//지급년월
        	if (this.gfnIsNull(this.ctclYY_BASE.form.TextBox.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ctclYY_BASE.form.TextBox.setFocus();
        		}
        		this.gfnAlert("귀속년도를 입력하세요.");
        		return validate;
        	}

        	//세무단위
        	if (this.gfnIsNull(this.ccfCD_CFSELFACNT.form.CDTextBox.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CFSELFACNT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("세무단위를 입력하세요.", "fnVaidateCallback");
        		return validate;
        	}

        	//제출일
        	if (this.gfnIsNull(this.ctclDT_PRINT.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ctclDT_PRINT.setFocus();
        		}
        		this.gfnAlert("제출일을 입력하세요.");
        		return false;
        	}
         	return validate;
        };
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		//this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if(svcID == "execute") {
        		if (errorCode == 0) {
        			this.fnClose = function() {
        				this.getParentContext().close(true);
        			}
        			this.gfnAlert("급여소득자료 생성이 완료되었습니다.", "fnClose");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
         	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.btnOK_onclick = function(obj,e)
        {
        	if (!this.fnSelectValidate()) return false;

        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("YN_GUBUN", "string");
        	this.dsReport.addColumn("OUT_YM_IMPUTE", "string");
        	this.dsReport.addColumn("OUT_CD_SELFACNT", "string");
        	this.dsReport.addColumn("SUBMIT_GUBUN", "string");

        	var nrow = this.dsReport.addRow();

        // 	this.dsReport.setColumn(nrow, "YN_GUBUN", 	this.cboYN_GUBUN.value);
        // 	this.dsReport.setColumn(nrow, "OUT_YM_IMPUTE", 	this.ctclYY_BASE.form.TextBox.value);
        // 	this.dsReport.setColumn(nrow, "OUT_CD_SELFACNT", this.ccfCD_CFSELFACNT.form.CDTextBox.value);
        // 	this.dsReport.setColumn(nrow, "SUBMIT_GUBUN", 	this.cboSUBMIT_GUBUN.value);

        	this.dsReport.setColumn(nrow, "YN_GUBUN"       , this.dsData.getColumn(0, "YN_GUBUN"));
        	this.dsReport.setColumn(nrow, "OUT_YM_IMPUTE"  , this.dsData.getColumn(0, "YY_BASE"));
        	this.dsReport.setColumn(nrow, "OUT_CD_SELFACNT", this.dsData.getColumn(0, "CD_CFSELFACNT"));
        	this.dsReport.setColumn(nrow, "SUBMIT_GUBUN"   , this.dsData.getColumn(0, "SUBMIT_GUBUN"));

        // ////////////////test
        //
        // 	var strSvcId    = "report";
        // 	var strSvcType  = "grid";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "report=dsReport";
        // 	var outData     = "";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// trabsaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); // 통신방법 정의 [생략가능]
        //
        // ////////////////test
        // return;

        	var inProc		= "_dsProc";
        	//var inParam 	= "params=dsReportParam";	// 조회SP이외 사용할 정보
        	var inParam 	= "";						// 필요없는 경우 생략
        	var inData      = "report=dsReport";
        	var reportpath  = "/da/dau/DAU_GANTAXPRINT_MM.ozr";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);

        	this.getParentContext().close(true);

        };

        this.btnCANCLE_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.ctclDT_PRINT.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.divData.form.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
        };
        this.loadIncludeScript("DAU_GANTAXPRINT_DLGMM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
