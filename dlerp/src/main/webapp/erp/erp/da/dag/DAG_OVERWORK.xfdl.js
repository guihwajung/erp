(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAG_OVERWORK");
            this.set_titletext("휴일(연장)근로내역");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAGPR_OVERWORK_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_WORK_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_WORK_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_WORK", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">%</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">H</Col><Col id=\"DS_CODE\">휴일근로</Col></Row><Row><Col id=\"CD_CODE\">O</Col><Col id=\"DS_CODE\">연장근로</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","10.0","79","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFDEPT");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","ccfCD_DEPT:0.0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_WORK","0","staCD_CORP:10.0","79","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("근로일");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclFR_WORK","staDT_WORK:0.0","staCD_CORP:10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_WORK_tilt","ctclFR_WORK:0.0","staCD_CORP:10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclTO_WORK","staDT_WORK_tilt:0.0","staCD_CORP:10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_WORK","ctclTO_WORK:20","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("근무구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCD_WORK","staCD_WORK:0.0","staCD_CORP:10.0","99","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_innerdataset("dsCD_WORK");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:5",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","10",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ctclTO_WORK","value","dsSearch","DT_WORK_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ctclFR_WORK","value","dsSearch","DT_WORK_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.cboCD_WORK","value","dsSearch","CD_WORK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAG_OVERWORK.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	//날짜 from ~ to 셋팅 ( 매월1일 ~ 매월 말일 )
        	var today = this.gfnGetDate();
        	var endDay = this.gfnGetLastDate(today);
        	this.divSearch.form.ctclFR_WORK.set_value(today.substring(0,6)+"01");
        	this.divSearch.form.ctclTO_WORK.set_value(endDay);
        	this.divSearch.form.cboCD_WORK.set_index(0);

        	//법인 셋팅
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        	//this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {

        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;//법인
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;//부서
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;//사번

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 법인
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	// 부서
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.AfterCDTextChanged = "fnAfterCDTextChanged";
        	// 성명
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAG_OVERWORK");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("DT_WORK_FROM", "string");
        	this.dsSelect.addColumn("DT_WORK_TO", "string");
        	this.dsSelect.addColumn("CD_WORK", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("TY_AUTH", "string");
        	this.dsSelect.addColumn("GR_DEPT", "string");
        	this.dsSelect.addColumn("ID_USER", "string");

        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnSelectValidate()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "DT_WORK_FROM", this.dsSearch.getColumn(0, "DT_WORK_FROM"));
        	this.dsSelect.setColumn(0, "DT_WORK_TO", this.dsSearch.getColumn(0, "DT_WORK_TO"));
        	this.dsSelect.setColumn(0, "CD_WORK", this.dsSearch.getColumn(0, "CD_WORK"));
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "TY_AUTH", this.FormInfo.TY_AUTH);
        	this.dsSelect.setColumn(0, "GR_DEPT", this.AuthClient.CD_DEPT);
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	//var nrow = this.gfnGridAdd(this.dxGrid);
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        };

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        	return true;
        }


        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.fnValidCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인을 입력하세요.", "fnValidCallback");
        		return false;
        	}
        	if (this.gfnIsNull(this.divSearch.form.ctclFR_WORK.value)) {
        		this.fnValidCallback = function() {
        			this.divSearch.form.ctclFR_WORK.setFocus();
        		}
        		this.gfnAlert("근로일을 입력하세요.", "fnValidCallback");
        		return false;
        	}
        	if (this.gfnIsNull(this.divSearch.form.ctclTO_WORK.value)) {
        		this.fnValidCallback = function() {
        			this.divSearch.form.ctclTO_WORK.setFocus();
        		}
        		this.gfnAlert("근로일을 입력하세요.", "fnValidCallback");
        		return false;
        	}
        	return true;
        };
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, args)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        }


        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
         	if(id == "ccfCD_CORP") {
        		// 법인코드
        	}
        	else if(id == "ccfCD_DEPT") {
        		//부서코드
        		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			this.fnValidCallback = function() {
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("법인코드를 입력하세요.", "fnValidCallback");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.text);
        		dsUserParam.setColumn(nrow, "YN_CURRENT", "Y");
        	}
        	else if(id == "ccfID_SABUN") {
        		//사번
        		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			this.fnValidCallback = function() {
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("법인코드를 입력하세요.", "fnValidCallback");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.gfnNvl(this.ccfCD_DEPT.form.CDTextBox.value, this.AuthClient.CD_DEPT));
        		dsUserParam.setColumn(nrow, "YN_CORP", "N"); //법인무관(Y: 법인에 관계없이 직원검색 N:조건의 법인의 임직원만 검색)
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");	// 01 재직 02 휴직 04 퇴직 % :전체
         	}
         	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData; //this.ccfCD_DEPT_ORG.form.SelectedData; 둘다 사용가능

        	if(id == "ccfCD_CORP") {
        		this.ccfCD_DEPT.form.fnCodeFindClear();
        		this.ccfID_SABUN.form.fnCodeFindClear();
        	}
        	else if(id == "ccfCD_DEPT") {
        		this.ccfID_SABUN.form.fnCodeFindClear();
        	}
        	else if(id == "ccfID_SABUN") {
        		if (arr.length > 0) {
        			var rowData = arr[0];
        			this.ccfCD_DEPT.form.CDTextBox.set_value(rowData.CD_DEPT);
        			this.ccfCD_DEPT.form.DSTextBox.set_value(rowData.DS_DEPT);
        		}
         	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/


         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/


         /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e){
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        // 결재문서 20220624 기능추가
        this.divData3_objGrid_oncelldblclick = function(obj,e){

        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	var NO_GROUPWARE = this.dsList.getColumn(this.dsList.rowposition, "NO_GROUPWARE"); //그룹웨어번호
        	//20220627 추가 김민영 로그인사번이 아닌 조회된 사번이여야 함.
        	var LINK_SABUN = this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN"); //사번

        	//결재상태, 그룹웨어번호
        	if(colnm != "CD_APPROVAL" && colnm != "NO_GROUPWARE") {
        		return;
        	}
        	if(this.gfnIsNull(NO_GROUPWARE)){
        		return;
        	}

        	var nICnt = this.dsList.findRow(this.ucFlag,"I");
        	var nUCnt = this.dsList.findRow(this.ucFlag,"U");
        	var nDCnt = this.dsList.findRow(this.ucFlag,"D");

        	if( nICnt > -1|| nUCnt > -1 || nDCnt > -1) {
        		this.gfnAlert("저장 후 처리하세요.", "");
        		return;
        	}

        	// 그룹웨어전자결재URL
        	var url = this.gfnGetConfig("DZ" , "GW_APROVAL_URL");
        	url += "approval/legacy/goFormLink.do?mode=complete";
        	//20220627 수정 김민영 로그인사번이 아닌 조회된 사번이여야 함.
        	//url += "&ID_USER="+this.AuthClient.ID_USER;
        	url += "&ID_USER="+LINK_SABUN;
        	url += "&fiid="+NO_GROUPWARE;
        	trace("url>>", url);
        	//http://dev.gw.dsmec.co.kr/approval/legacy/goFormLink.do?mode=complete&ID_USER=ERP1&fiid=

        	window.open(url, "_blank", "width=1024,height=600,menubar=no,scrollbars=no,resizable=no,status=no");
        }






        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ctclFR_WORK.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.ctclTO_WORK.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData3_objGrid_oncelldblclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAG_OVERWORK.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
