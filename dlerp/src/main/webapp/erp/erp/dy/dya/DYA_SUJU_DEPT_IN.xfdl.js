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
            this.set_titletext("사업계획관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DYAPR_SUJU_DEPT_IN_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DYAPR_SUJU_DEPT_IN_INSERT</Col></Row><Row><Col id=\"SP\">DYAPR_SUJU_DEPT_IN_INSERT</Col><Col id=\"TARGET\">exec</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","219","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DYA_SUJU_DEPT_IN.xfdl", function() {
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

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_CORP)) {
        		this.dsSearch.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);

        		this.ccfCD_CORP.form.fnCodeFindLoad();

        		this.FormBtns.Select.click();
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel

        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnCreate = this.gfnFormButtonAdd("btnCreate", "fnCreate");
        	this.btnAcc = this.gfnFormButtonAdd("btnAcc", "fnAcc");
        	this.btnSuju = this.gfnFormButtonAdd("btnSuju", "fnSuju");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_CORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DY", "DYA_SUJU_DEPT_IN");

        	// 그리드 코드파인드 설정
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	//this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        	//this.dsList.addEventHandler("oncolumnchanged", this.fnGrid_ColumnChanged, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP"      , "string");	//법인코드


        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("CD_DEPT", "string");
        	this.dsUpdate.addColumn("DS_DEPT", "string");
        	this.dsUpdate.addColumn("DT_FROM", "string");
        	this.dsUpdate.addColumn("DT_TO", "string");
        	this.dsUpdate.addColumn("GUBUN1", "string");
        	this.dsUpdate.addColumn("GUBUN2", "string");
        	this.dsUpdate.addColumn("GUBUN3", "string");
        	this.dsUpdate.addColumn("CD_SILJUK_DEPT", "string");
        	this.dsUpdate.addColumn("DS_SILJUK_DEPT", "string");
        	this.dsUpdate.addColumn("GB_SITE", "string");
        	this.dsUpdate.addColumn("CD_GUBUN", "string");
        	this.dsUpdate.addColumn("RT_AM", "bigdecimal");
        	this.dsUpdate.addColumn("RT_PER", "bigdecimal");
        	this.dsUpdate.addColumn("YN_SUJU", "string");
        	this.dsUpdate.addColumn("YN_SAUP", "string");
        	this.dsUpdate.addColumn("CD_SAUP_DEPT", "string");
        	this.dsUpdate.addColumn("YN_SILJUK", "string");
        	this.dsUpdate.addColumn("DS_REMARK", "string");
        	this.dsUpdate.addColumn("YN_USE", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("CD_CORP", "string");
        	this.dsExec.addColumn("CD_DEPT", "string");
        	this.dsExec.addColumn("DS_DEPT", "string");
        	this.dsExec.addColumn("DT_FROM", "string");
        	this.dsExec.addColumn("DT_TO", "string");
        	this.dsExec.addColumn("GUBUN1", "string");
        	this.dsExec.addColumn("GUBUN2", "string");
        	this.dsExec.addColumn("GUBUN3", "string");
        	this.dsExec.addColumn("CD_SILJUK_DEPT", "string");
        	this.dsExec.addColumn("DS_SILJUK_DEPT", "string");
        	this.dsExec.addColumn("GB_SITE", "string");
        	this.dsExec.addColumn("CD_GUBUN", "string");
        	this.dsExec.addColumn("RT_AM", "bigdecimal");
        	this.dsExec.addColumn("RT_PER", "bigdecimal");
        	this.dsExec.addColumn("YN_SUJU", "string");
        	this.dsExec.addColumn("YN_SAUP", "string");
        	this.dsExec.addColumn("CD_SAUP_DEPT", "string");
        	this.dsExec.addColumn("YN_SILJUK", "string");
        	this.dsExec.addColumn("DS_REMARK", "string");
        	this.dsExec.addColumn("YN_USE", "string");
        	this.dsExec.addColumn("ID_USER", "string");


        	this.dsSelectUser = new Dataset();
        	this.dsSelectUser.addColumn("CD_CORP", "string");
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

        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));	//법인코드


        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        // 	if(this.dsList.findRow(this.ucFlag, "I") > -1){
        // 		this.gfnAlert("신규 추가된 데이터가 이미 있습니다.");
        // 		return;
        // 	}

        	var nRow = this.gfnGridAdd(this.dxGrid);

        	this.dsList.set_rowposition(nRow);
        	this.dxGrid.setCellPos(this.dxGrid.getBindCellIndex("body", "GUBUN"));

        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크

        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsUpdate.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {

        			case "U":
        				if (this.dsList.getColumn(i, "CHK")=="Y")
        				{
        					var nrow = this.dsUpdate.addRow();
        					this.dsUpdate.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        					this.dsUpdate.setColumn(nrow, "DS_DEPT", this.dsList.getColumn(i, "DS_SILJUK_DEPT"));
        					this.dsUpdate.setColumn(nrow, "DT_FROM", this.dsList.getColumn(i, "DT_FROM"));
        					this.dsUpdate.setColumn(nrow, "DT_TO", this.dsList.getColumn(i, "DT_TO"));
        					this.dsUpdate.setColumn(nrow, "GUBUN1", this.dsList.getColumn(i, "GUBUN1"));
        					this.dsUpdate.setColumn(nrow, "GUBUN2", this.dsList.getColumn(i, "GUBUN2"));
        					this.dsUpdate.setColumn(nrow, "GUBUN3", this.dsList.getColumn(i, "GUBUN3"));
        					this.dsUpdate.setColumn(nrow, "CD_SILJUK_DEPT", this.dsList.getColumn(i, "CD_SILJUK_DEPT"));
        					this.dsUpdate.setColumn(nrow, "DS_SILJUK_DEPT", this.dsList.getColumn(i, "DS_SILJUK_DEPT"));
        					this.dsUpdate.setColumn(nrow, "GB_SITE", this.dsList.getColumn(i, "GB_SITE"));
        					this.dsUpdate.setColumn(nrow, "CD_GUBUN", this.dsList.getColumn(i, "CD_GUBUN"));
        					this.dsUpdate.setColumn(nrow, "RT_AM", this.dsList.getColumn(i, "RT_AM"));
        					this.dsUpdate.setColumn(nrow, "RT_PER", this.dsList.getColumn(i, "RT_PER"));
        					this.dsUpdate.setColumn(nrow, "YN_SUJU", "N");
        					this.dsUpdate.setColumn(nrow, "YN_SAUP", "N");
        					this.dsUpdate.setColumn(nrow, "CD_SAUP_DEPT", this.dsList.getColumn(i, "CD_SAUP_DEPT"));
        					this.dsUpdate.setColumn(nrow, "YN_SILJUK", this.dsList.getColumn(i, "YN_SILJUK"));
        					this.dsUpdate.setColumn(nrow, "DS_REMARK", "");
        					this.dsUpdate.setColumn(nrow, "YN_USE", "Y");
        					this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				}
        				break;

        		}
        	}

        	if (this.dsUpdate.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

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
        // 	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT_ACNT"))) {
        // 		validate = false;
        // 		// Alert후 실행할 처리
        // 		this.fnVaidateCallback = function() {
        // 			this.ccfCD_DEPT_ACNT.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("귀속부서코드는 필수입니다.", "fnVaidateCallback");
        // 	}

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
        		this.gfnGridAfterSelect(this.dxGrid);
        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}

        	return true;

        };
        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	switch(id) {
        		case "ccfCD_CORP":	//법인코드
        			this.ccfCD_DEPT.form.fnCodeFindClear();
        		break;
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
        	switch(id) {
        		case "DHX_CFACNT_YNSLIP":
         			dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		break;
        		case "DAX_CFDEPT":
        			dsUserParam.setColumn(nrow, "GR_SEARCH", "1");
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        			dsUserParam.setColumn(nrow, "YN_CURRENT", "Y");
        		break;


        	}

        	return true;
        }

        this.fnGrid_AfterCDTextChanged=function(id, codeFindData){
        	if(id == "DYX_ACC_DEPT"){
        		var arr = codeFindData;
        		var cdCorp = "";
        		if(arr.length > 0){
        			cdCorp = arr[0]["CD_CORP"];
        		}
        		this.dsList.setColumn(this.dsList.rowposition, "CD_CORP", cdCorp);
        		this.dsList.setColumn(this.dsList.rowposition, "CD_DEPT_BUY", "");
        		this.dsList.setColumn(this.dsList.rowposition, "DS_DEPT_BUY", "");
        	}
        };

        //그리드 값변경 이벤트
        this.fnGrid_ColumnChanged = function(obj,e)
        {
        //  파인건설 기준으로는 뒷내용 지우지 않음.
        // 	if(e.columnid == 'LV_DEPT_ACNT'){	//레벨이 변경되었을 경우
        // 		if(!this.gfnIsNull(e.newvalue) && e.newvalue != e.oldvalue){
        // 			obj.setColumn(e.row, "CD_DEPT_UPPER", "");		//상위귀속부서코드
        // 			obj.setColumn(e.row, "DS_DEPT_ACNT_UPPER", "");	//상위귀속부서명
        // 			obj.setColumn(e.row, "CD_DEPT_SELFACNT", "");	//세무단위코드
        // 			obj.setColumn(e.row, "DS_DEPT_SELFACNT", "");	//세무단위명
        // 		}
        // 	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        // 사업부서이관
        this.fnSuju = function(obj,e) {

        	var chkRow = this.dsList.findRow("CHK","Y");

        	if(this.gfnGetFlag(this.dsList, chkRow) == "#")
        	{
        		chkRow = this.dsList.findRow("CHK","1", chkRow+1);
        	}

        	if(chkRow < 0){
        		this.gfnAlert("선택된 행이 없습니다.");
        		return false;
        	}

        	this.gfnConfirm("해당내역을 사업관리 계획부서로 등록하시겠습니까?", "fnSuju_callback");
        }

        this.fnSuju_callback = function(strId, val)
        {

        	if(val == true)
        	{
        		this.dsExec.clearData();


        		for (var i = 0; i < this.dsList.rowcount; i++) {
        					if (this.dsList.getColumn(i, "CHK")=="Y")
        					{

        						var nrow = this.dsExec.addRow();
        						this.dsExec.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        						this.dsExec.setColumn(nrow, "DS_DEPT", this.dsList.getColumn(i, "DS_SILJUK_DEPT"));
        						this.dsExec.setColumn(nrow, "DT_FROM", this.dsList.getColumn(i, "DT_FROM"));
        						this.dsExec.setColumn(nrow, "DT_TO", this.dsList.getColumn(i, "DT_TO"));
        						this.dsExec.setColumn(nrow, "GUBUN1", this.dsList.getColumn(i, "GUBUN1"));
        						this.dsExec.setColumn(nrow, "GUBUN2", this.dsList.getColumn(i, "GUBUN2"));
        						this.dsExec.setColumn(nrow, "GUBUN3", this.dsList.getColumn(i, "GUBUN3"));
        						this.dsExec.setColumn(nrow, "CD_SILJUK_DEPT", this.dsList.getColumn(i, "CD_SILJUK_DEPT"));
        						this.dsExec.setColumn(nrow, "DS_SILJUK_DEPT", this.dsList.getColumn(i, "DS_SILJUK_DEPT"));
        						this.dsExec.setColumn(nrow, "GB_SITE", this.dsList.getColumn(i, "GB_SITE"));
        						this.dsExec.setColumn(nrow, "CD_GUBUN", this.dsList.getColumn(i, "CD_GUBUN"));
        						this.dsExec.setColumn(nrow, "RT_AM", this.dsList.getColumn(i, "RT_AM"));
        						this.dsExec.setColumn(nrow, "RT_PER", this.dsList.getColumn(i, "RT_PER"));
        						this.dsExec.setColumn(nrow, "YN_SUJU", "N");
        						this.dsExec.setColumn(nrow, "YN_SAUP", "N");
        						this.dsExec.setColumn(nrow, "CD_SAUP_DEPT", this.dsList.getColumn(i, "CD_SAUP_DEPT"));
        						this.dsExec.setColumn(nrow, "YN_SILJUK", this.dsList.getColumn(i, "YN_SILJUK"));
        						this.dsExec.setColumn(nrow, "DS_REMARK", "");
        						this.dsExec.setColumn(nrow, "YN_USE", "Y");
        						this.dsExec.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        					}

        		}

        		if(this.dsExec.rowcount == 0) return;

        		var strSvcId    = "save";
        		var strSvcType  = "save";
        		var inProc      = "_dsProc";
        		var inData      = "exec=dsExec";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId ,    // transaction을 구분하기 위한 svc id값
        					    strSvcType ,    // transaction을 요청할 구분
        					    inProc,         // Procedure 정보 Dataset 이름
        					    inData ,        // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        					    outData ,       // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        					    strArg,         // 입력값으로 보낼 arguments, strFormData="20120607"
        					    callBackFnc); // 통신방법 정의 [생략가능]
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DYA_SUJU_DEPT_IN.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
