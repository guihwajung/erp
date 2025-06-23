(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DHA_DIVERT_SLIP_DLG");
            this.set_titletext("변경예산관리(등록)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_EXECUTION_MONTHLY_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YR_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPTGROUP1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPTGROUP1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPTOFFICER\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPTOFFICER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YR_ACCOUNT\"/><Col id=\"CD_DEPTGROUP1\"/><Col id=\"DS_DEPTGROUP1\"/><Col id=\"YN_DEPT\"/><Col id=\"CD_DEPTOFFICER\"/><Col id=\"DS_DEPTOFFICER\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_DEPT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">부서</Col><Col id=\"CD_CODE\">Y</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">임원</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle","0","10",null,"22","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("변경예산");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0.0","staTitle:10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("회계년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYR_ACCOUNT","sta00:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPTOFFICER","ctclYR_ACCOUNT:0.0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPTOFFICER","staCD_DEPTOFFICER:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFDEPTOFFICER");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_DEPT","ccfCD_DEPTOFFICER:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("부서/임원");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboYN_DEPT","staYN_DEPT:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsYN_DEPT");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPTGROUP1","ccboYN_DEPT:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("부서1레벨");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPTGROUP1","staCD_DEPTGROUP1:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFDEPTGROUP1");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10.0","40","24.0","20",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("조회");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"5","45",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBottom","0","divData:5",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Button("btnConf","45%",null,"69","27",null,"7",null,null,null,null,this.divBottom.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnCancel","btnConf:10",null,"69","27",null,"7",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.divBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctclYR_ACCOUNT.form.TextBox","value","dsSearch","YR_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccboYN_DEPT","value","dsSearch","YN_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_DEPTGROUP1.form.CDTextBox","value","dsSearch","CD_DEPTGROUP1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_DEPTGROUP1.form.DSTextBox","value","dsSearch","DS_DEPTGROUP1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_DEPTOFFICER.form.CDTextBox","value","dsSearch","CD_DEPTOFFICER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_DEPTOFFICER.form.DSTextBox","value","dsSearch","DS_DEPTOFFICER");
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
        this.registerScript("DHA_DIVERT_SLIP_DLG.xfdl", function() {
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

        	//this.dsSearch.setColumn(0, "YR_ACCOUNT", this.gfnGetDate().substr(0, 4));
        	this.dsSearch.setColumn(0, "YR_ACCOUNT", this.getOwnerFrame().YR_ACCOUNT);
        	this.dsSearch.setColumn(0, "YN_DEPT", "Y");

        	this.ccfCD_DEPTOFFICER.form.CDTextBox.set_value(this.getOwnerFrame().CD_DEPTOFFICER);
        	this.ccfCD_DEPTOFFICER.form.DSTextBox.set_value(this.getOwnerFrame().DS_DEPTOFFICER);
        	//this.ccfCD_DEPTOFFICER.set_enable(this.bSuperUser);

        	//조회처리
        	this.divSearch.form.btnSearch.click();
        };

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

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctclYR_ACCOUNT = this.divSearch.form.ctclYR_ACCOUNT;
        	this.ccboYN_DEPT = this.divSearch.form.ccboYN_DEPT;
        	this.ccfCD_DEPTGROUP1 = this.divSearch.form.ccfCD_DEPTGROUP1;
        	this.ccfCD_DEPTOFFICER = this.divSearch.form.ccfCD_DEPTOFFICER;

        	this.sta04 = this.divSearch.form.sta04;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DIQ_DIVERT_SLIP");

        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body","DS_DEPTOFFICER"), "text","expr:DS_DEPTOFFICER==null?'소계':DS_DEPTOFFICER");

        	this.ccfCD_DEPTGROUP1.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPTOFFICER.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_DEPTGROUP1.AfterCDTextChanged = "fnAfterCDTextChanged";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YR_ACCOUNT", "string");
        	this.dsSelect.addColumn("YN_DEPT", "string");
        	this.dsSelect.addColumn("CD_DEPTOFFICER", "string");
        	this.dsSelect.addColumn("CD_PROJECT", "string");
        	this.dsSelect.addColumn("CD_BIMOK", "string");
        	this.dsSelect.addColumn("CD_SEMOK", "string");

        	//리턴 데이터셋
         	this.dsResult = new Dataset();
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "YR_ACCOUNT", this.dsSearch.getColumn(0, "YR_ACCOUNT"));
        	this.dsSelect.setColumn(0, "YN_DEPT", this.dsSearch.getColumn(0, "YN_DEPT"));
        	this.dsSelect.setColumn(0, "CD_DEPTOFFICER", this.dsSearch.getColumn(0, "CD_DEPTOFFICER"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
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
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YR_ACCOUNT"))) {
        		this.fnVaidateCallback = function() {
        			this.ctclYR_ACCOUNT.form.TextBox.setFocus();
        		}
        		this.gfnAlert("회계년도는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        		validate = false;
        	}

        	if (this.FormInfo.GR_SEARCH != "1" && this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPTOFFICER"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_DEPTOFFICER.form.TextBox.setFocus();
        		}
        		this.gfnAlert(this.sta04.text + "는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        		validate = false;
        	}
        	return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_DEPTGROUP1") {
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "YR_ACCOUNT"))) {
        			this.gfnAlert("년도를 먼저 입력하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "YR_ACCOUNT", this.dsSearch.getColumn(0, "YR_ACCOUNT"));
        	}
        	else if (id == "ccfCD_DEPTOFFICER") {
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "YR_ACCOUNT"))) {
        			this.gfnAlert("년도를 먼저 입력하세요.");
        			return false;
        		}
        		var strLV = "";
        		if (this.FormInfo.ID_GROUP == "S") {
        			strLV = "1";
        		}
        		else {
        			strLV = this.FormInfo.GR_SEARCH;
        		}

        		dsUserParam.setColumn(nrow, "YR_ACCOUNT", this.dsSearch.getColumn(0, "YR_ACCOUNT"));
        		dsUserParam.setColumn(nrow, "YN_DEPT", this.dsSearch.getColumn(0, "YN_DEPT"));
        		dsUserParam.setColumn(nrow, "LV_DEPT", strLV);
        		dsUserParam.setColumn(nrow, "LEVCD_DEPT_ACNT", this.UserInfo.DH_CD_BUDGETCTL_DEPT);
        		dsUserParam.setColumn(nrow, "CD_GROUP1", this.dsSearch.getColumn(0, "CD_DEPTGROUP1"));
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	switch(id){
        		case "ccfCD_DEPTGROUP1":
        			this.dsSearch.setColumn(0, "CD_DEPTOFFICER", "");
        			this.dsSearch.setColumn(0, "DS_DEPTOFFICER", "");
        			break;
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e) {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         //조회버튼 클릭
        this.btnSearch_onclick = function(obj,e)
        {
        	this.fnSelect();
        };

        this.dsSearch_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        // 확인
        this.btnConf_onclick = function(obj,e)
        {
        	if(this.dsList.findRowExprNF("CHK == '1' && "+this.ucFlag+" != '#'") == -1 ){
        		this.gfnAlert("선택된 항목이 없습니다.");
        		return;
        	}

        	this.dsResult.clearData();

        	this.dsResult.set_enableevent(false);

        	//컬럼/데이터 복사
        	this.dsResult.assign(this.dsList);

        	var arrDel = [];
         	for(var i =0;i<this.dsResult.getRowCountNF();i++){
        		this.dsResult.setColumnNF(i, this.ucFlag, "I");
        		//미선택/필터 로우 제외
         		if(this.dsList.getColumnNF(i, "CHK") != "1" || this.dsList.getColumnNF(i, this.ucFlag) == "#"){
        			arrDel[arrDel.length] = i;
         		}
         	}

        	//미선택 데이터 삭제
        	this.dsResult.deleteMultiRows(arrDel);

        	this.dsResult.set_enableevent(true);

        	//팝업 닫기 처리
        	this.getParentContext().close(this.dsResult.saveXML());
        };

        // 취소
        this.btnCancel_onclick = function(obj,e)
        {
        	this.getParentContext().close();
        };

        this.divData_objGrid_oncelldblclick = function(obj,e)
        {
        	this.fnCopyRow();
        };

        this.fnCopyRow = function(){
        	var rPos = this.dsList.rowposition;

        	var CD_BIMOK = this.dsList.getColumn(rPos, "CD_BIMOK");
        	if(this.gfnIsNull(this.gfnTrim(CD_BIMOK))){
        		this.gfnAlert("선택된 항목이 없습니다.");
        		return;
        	}

        	//컬럼/데이터 복사
        	this.dsResult.set_enableevent(false);

        	this.dsResult.assign(this.dsList);

        	this.dsResult.clearData();

        	var nAddRow = this.dsResult.addRow();
        	var bSucc = this.dsResult.copyRow(nAddRow,this.dsList, rPos);

        	this.dsResult.set_enableevent(true);

        	//팝업 닫기 처리
        	this.getParentContext().close(this.dsResult.saveXML());
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.divBottom.form.btnConf.addEventHandler("onclick",this.btnConf_onclick,this);
            this.divBottom.form.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHA_DIVERT_SLIP_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
