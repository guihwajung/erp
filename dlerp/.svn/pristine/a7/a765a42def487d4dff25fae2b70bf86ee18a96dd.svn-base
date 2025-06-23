(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DHZ_GYUMJIK");
            this.set_titletext("겸직등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DIQPR_GYUMJIK_SELECT</Col></Row><Row><Col id=\"SP\">DIQPR_GYUMJIK_INSERT</Col><Col id=\"TARGET\">insert</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DIQPR_GYUMJIK_DELETE</Col></Row><Row><Col id=\"TARGET\">selectDept</Col><Col id=\"SP\">DIQPR_ACNTUNIT_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YR_BUDGET\" type=\"STRING\" size=\"256\"/><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"ID_USER\"/><Col id=\"YR_BUDGET\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListDept", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","10",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrollbartype("auto auto");
            this.addChild(obj.name, obj);

            obj = new Static("staYR_BUDGET","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("예산년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cctclYR_BUDGET","staYR_BUDGET:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_USER","cctclYR_BUDGET:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("사용자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfUser","staID_USER:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFIDSABUN");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("4");
            obj.getSetter("FitToContents").set("true");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0","75%",null,null,"0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100%","20",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Grid("objGridMaster","0","sta01:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divSplitter","divDataLeft:5","0","40",null,null,"0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnMove","0","50%",null,"25","0",null,null,null,null,null,this.divData.form.divSplitter.form);
            obj.set_taborder("1");
            obj.set_text(">");
            this.divData.form.divSplitter.addChild(obj.name, obj);

            obj = new Button("btnMoveAll","0","btnMove:5",null,"25","0",null,null,null,null,null,this.divData.form.divSplitter.form);
            obj.set_taborder("0");
            obj.set_text(">>");
            obj.set_visible("false");
            this.divData.form.divSplitter.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","100%","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("겸직귀속부서");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta02:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfUser.form.CDTextBox","value","dsSearch","ID_USER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cctclYR_BUDGET.form.TextBox","value","dsSearch","YR_BUDGET");
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
        this.registerScript("DIQ_GYUMJIK.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.DWA_SILHENG_onload = function(obj,e)
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

        	//this.ccfCorp.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	//this.ccfCorp.form.CDTextBox.set_value(this.AuthClient.CD_CORP);

        	var today = this.gfnGetDate().substr(0,4);
        	this.dsSearch.setColumn(0, "YR_BUDGET", today);
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        // 	this.FormBtns.Add.set_enable(false);
        // 	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btn1 = this.gfnFormButtonAdd("Detail", "fnDetail1");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	//this.ccfCorp = this.divSearch.form.ccfCorp;
        	this.ccfUser = this.divSearch.form.ccfUser;
        	//this.dxGrid = this.divData.form.objGrid;
        	this.dxGrid = this.divData.form.divDataRight.form.objGrid;
        	this.dxGridDept = this.divData.form.divDataLeft.form.objGridMaster;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfUser.CodeFindName = "DZX_CFUSERBYCORP";

        	this.ccfUser.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DI", "DIQ_GYUMJIK");

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGridDept, this.dsListDept, "DI", "DIQ_GYUMJIK1", "CD_DEPT_ACNT", "LV_DEPT_ACNT");
        	this.dsListDept.addEventHandler("oncolumnchanged", this.fnGridDept_ColumnChanged, this);
        	this.dxGridDept.sort="false";

        	//this.dxGridDept.set_selecttype("cell");

        	//this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "CD_ROLE"), "expandshow", "hide");
        	//this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "CD_ROLE"), "edittype"  , "none");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("ID_USER", "string");
        	this.dsSelect.addColumn("YR_BUDGET", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("YR_BUDGET", "string");
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("ID_USER", "string");
        	this.dsInsert.addColumn("CD_DEPT", "string");
        	this.dsInsert.addColumn("CD_ROLE", "string");
        	this.dsInsert.addColumn("DT_EXPIRY", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("ID_USER", "string");
        	this.dsDelete.addColumn("CD_DEPT", "string");
        	this.dsDelete.addColumn("CD_CORP", "string");

        	this.dsSelectDept = new Dataset();
        	this.dsSelectDept.addColumn("YR_BUDGET", "string");
        	this.dsSelectDept.addColumn("YN_USE", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect2 = function() {
        	if(!this.fnValidate()) return;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "ID_USER", this.dsSearch.getColumn(0, "ID_USER"));
        	this.dsSelect.setColumn(0, "YR_BUDGET", this.dsSearch.getColumn(0, "YR_BUDGET"));

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
        }

        /*
          *	부서 조회 버튼
          */
        this.fnSelect = function() {
        //this.fnSelectDept = function() {
        	//if (!this.fnSelectValidate()) return false;
        	if(!this.fnValidate()) return;

        	this.gfnGridBeforeSelect(this.dxGridDept);

        	this.dsSelectDept.clearData();
        	this.dsSelectDept.addRow();

        // 	this.dsSelectDept.setColumn(0, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        // 	this.dsSelectDept.setColumn(0, "TY_USE", this.dsSearch.getColumn(0, "TY_USE"));

        	this.dsSelectDept.setColumn(0, "YR_BUDGET", this.dsSearch.getColumn(0, "YR_BUDGET"));
        	this.dsSelectDept.setColumn(0, "YN_USE", "");

        	var strSvcId    = "selectDept";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectDept=dsSelectDept";
        	var outData     = "dsListDept=selectDept0";
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
        	var nRow = this.gfnGridAdd(this.dxGrid);

        	//this.dsList.set_enableevent(false);
        	this.dsList.setColumn(nRow, "CD_ROLE", "R00"); //기본권한 기본

        	//this.dsList.set_enableevent(true);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	if(!this.gfnGridIsRow(this.dxGrid)){
        		this.gfnAlert("데이터를 선택하세요.");
        		return;
        	}

        	//기본권한이 아닐경우
        	/*
        	if(this.dsList.getColumn(this.dsList.rowposition, "CD_ROLE") != "R00"){
        		this.gfnAlert("기본권한(R00)만 삭제 가능합니다.");
        		return;
        	}
        	*/

        	this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        		// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);

        		switch(flag) {
        			case "I":

        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_CORP", "01");
        				this.dsInsert.setColumn(nrow, "YR_BUDGET", this.dsSearch.getColumn(0, "YR_BUDGET"));
        				this.dsInsert.setColumn(nrow, "ID_USER", this.dsSearch.getColumn(0, "ID_USER"));
        				this.dsInsert.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        				this.dsInsert.setColumn(nrow, "CD_ROLE", this.dsList.getColumn(i, "CD_ROLE"));
        				this.dsInsert.setColumn(nrow, "DT_EXPIRY", this.dsList.getColumn(i, "DT_EXPIRY"));
        				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        			break;

        			case "D":

        				var nrow = this.dsDelete.addRow();

        				this.dsDelete.setColumn(nrow, "ID_USER", this.ccfUser.form.CDTextBox.value);
        				this.dsDelete.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        				this.dsDelete.setColumn(nrow, "CD_CORP", "01");

        			break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert delete=dsDelete";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
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
        this.fnValidate = function() {

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"YR_BUDGET"))) {

        		this.gfnAlert("예산년도를 입력하세요.");
        		return false;
        	}

        	if (this.gfnIsNull(this.ccfUser.form.CDTextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.ccfUser.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("사용자를 입력하세요.");
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
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}

        	if (svcID == "selectDept") {
        		this.fnSelect2();
        		this.gfnGridAfterSelect(this.dxGridDept);
        	}

        	if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(id == "ccfUser"){
        		dsUserParam.setColumn(nrow, "CD_CORP", "");
        	}
        	return true;
        };



        this.fnGrid_BeforuserDataSetParam=function(id, dsUserParam, nrow){

        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/


         //그리드 값변경 이벤트
        this.fnGridDept_ColumnChanged = function(obj,e)
        {
         	if(e.columnid == 'CHK'){
        		this.fnSetCheckedUpperDept(obj, e.row, e.newvalue);
        // 		if(!this.gfnIsNull(e.newvalue) && e.newvalue != e.oldvalue){
        // 			obj.setColumn(e.row, "CD_DEPT_UPPER", "");		//상위귀속부서코드
        // 			obj.setColumn(e.row, "DS_DEPT_ACNT_UPPER", "");	//상위귀속부서명
        // 			obj.setColumn(e.row, "CD_DEPT_SELFACNT", "");	//세무단위코드
        // 			obj.setColumn(e.row, "DS_DEPT_SELFACNT", "");	//세무단위명
        // 		}
         	}
        };

        this.fnSetCheckedUpperDept = function(objDs, nRow, newValue) {
        	var CD_DEPT_UPPER = objDs.getColumn(nRow, "CD_DEPT_UPPER");
        	var CD_DEPT_ACNT = objDs.getColumn(nRow, "CD_DEPT_ACNT");
        	var DS_DEPT_ACNT = objDs.getColumn(nRow, "DS_DEPT_ACNT");
        	var LV_DEPT_ACNT = objDs.getColumn(nRow, "LV_DEPT_ACNT");
        	var findRow = objDs.findRowExpr("!dataset.parent.gfnIsNull(CD_DEPT_UPPER) && CD_DEPT_UPPER =='"+CD_DEPT_ACNT+"' && nx_flag != '#'");
        	var arrRows = objDs.extractRowsNF("!dataset.parent.gfnIsNull(CD_DEPT_UPPER) && CD_DEPT_UPPER =='"+CD_DEPT_ACNT+"' && nx_flag != '#'");
        	//trace("fnSetCheckedUpperDept 호출" + nRow +  " LV_DEPT_ACNT->" + LV_DEPT_ACNT + "/ CD_DEPT_ACNT->" + CD_DEPT_ACNT + "/ DS_DEPT_ACNT->" + DS_DEPT_ACNT + "/ CD_DEPT_UPPER->" + CD_DEPT_UPPER + "\n" +
        	//"findRow->" + findRow+ "\n" + 	"arrRows->" + arrRows )

        	// 하위부서 있는지 확인
        	if(findRow > -1){
        		objDs.set_enableevent(false);
        		for (i = 0; i < arrRows.length; i++) {
        			var deptRows1 = arrRows[i];
        			objDs.setColumn(deptRows1, "CHK", newValue);
        			//this.fnSetCheckedUpperDept(objDs, deptRows, newValue);
        			//trace(deptRows + " " + objDs.getColumn(deptRows, "LV_DEPT_ACNT") + " / " + objDs.getColumn(deptRows, "CD_DEPT_ACNT") + " / " + objDs.getColumn(deptRows, "DS_DEPT_ACNT"));

        			var arrRowsLower2 = objDs.extractRowsNF("!dataset.parent.gfnIsNull(CD_DEPT_UPPER) && CD_DEPT_UPPER =='"+objDs.getColumn(deptRows1, "CD_DEPT_ACNT")+"' && nx_flag != '#'");
        			for (k = 0; k < arrRowsLower2.length; k++) {
        				var deptRows2 = arrRowsLower2[k];
        				objDs.setColumn(deptRows2, "CHK", newValue);

        				var arrRowsLower3 = objDs.extractRowsNF("!dataset.parent.gfnIsNull(CD_DEPT_UPPER) && CD_DEPT_UPPER =='"+objDs.getColumn(deptRows2, "CD_DEPT_ACNT")+"' && nx_flag != '#'");
        				for (j = 0; j < arrRowsLower3.length; j++) {
        					var deptRows3 = arrRowsLower3[j];
        					objDs.setColumn(deptRows3, "CHK", newValue);
        					//trace(deptRows2 + " 하위부서->" + objDs.getColumn(deptRows2, "LV_DEPT_ACNT") + " / " + objDs.getColumn(deptRows2, "CD_DEPT_ACNT") + " / " + objDs.getColumn(deptRows2, "DS_DEPT_ACNT"));

        						var arrRowsLower4 = objDs.extractRowsNF("!dataset.parent.gfnIsNull(CD_DEPT_UPPER) && CD_DEPT_UPPER =='"+objDs.getColumn(deptRows3, "CD_DEPT_ACNT")+"' && nx_flag != '#'");
        						for (t = 0; t < arrRowsLower4.length; t++) {
        							var deptRows4 = arrRowsLower4[t];
        							objDs.setColumn(deptRows4, "CHK", newValue);
        							//trace(deptRows3 + " 하위부서->" + objDs.getColumn(deptRows3, "LV_DEPT_ACNT") + " / " + objDs.getColumn(deptRows3, "CD_DEPT_ACNT") + " / " + objDs.getColumn(deptRows3, "DS_DEPT_ACNT"));


        					}
        				}
        			}
        		}
        		objDs.set_enableevent(true);

        	}else{
        		return;
        	}
        }


        this.fnsetCheckBox = function(objDs, deptRows, newValue) {
        	var arrRowsLower2 = objDs.extractRowsNF("!dataset.parent.gfnIsNull(CD_DEPT_UPPER) && CD_DEPT_UPPER =='"+objDs.getColumn(deptRows, "CD_DEPT_ACNT")+"' && nx_flag != '#'");
        	for (k = 0; k < arrRowsLower2.length; k++) {
        		var deptRows2 = arrRowsLower2[k];
        		objDs.setColumn(deptRows2, "CHK", newValue);
        		trace(deptRows2 + " 하위부서->" + objDs.getColumn(deptRows2, "LV_DEPT_ACNT") + " / " + objDs.getColumn(deptRows2, "CD_DEPT_ACNT") + " / " + objDs.getColumn(deptRows2, "DS_DEPT_ACNT"));
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/


        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridDept);
        	}
        };

        this.divData_divSplitter_btnMove_onclick = function(obj,e)
        {
        	if(!this.fnValidate()) return;

        	if (this.dxGridDept.rowcount == 0) return false;
        	//if(this.dsListDept.getColumn(this.dsListDept.rowposition, this.ucFlag) == "#") return false;
        													//	YN_SLIPACCEPT =='Y'
        	var nChkRow = this.dsListDept.findRowExpr("CHK == 1 && nx_flag != '#'");
        	if(nChkRow == -1){
        		this.gfnAlert("귀속부서를 선택하세요");
        		return;
        	}
        	var nAddRow;
        	this.dsList.set_enableevent(false);
        	for(var i=0; i<this.dsListDept.rowcount; i++){
        		if(this.dsListDept.getColumn(i, "CHK") == 1  && this.dsListDept.getColumn(i, this.ucFlag) != "#"){
        			var CD_DEPT_ACNT = this.dsListDept.getColumn(i, "CD_DEPT_ACNT");
        			var DS_DEPT_ACNT = this.dsListDept.getColumn(i, "DS_DEPT_ACNT");
        			var nExsitsRow = this.dsList.findRowExpr("CD_DEPT =='"+ this.dsListDept.getColumn(i, "CD_DEPT_ACNT") +"'");
        			if(nExsitsRow == -1){
         				//nAddRow = this.gfnGridAdd(this.dxGrid);
        				var nAddRow = this.dsList.addRow();
         				this.dsList.setColumn(nAddRow, "CD_DEPT", this.dsListDept.getColumn(i, "CD_DEPT_ACNT"));	// 겸직부서코드
         				this.dsList.setColumn(nAddRow, "DS_DEPT", this.dsListDept.getColumn(i, "DS_DEPT_ACNT"));	// 겸직부서명
         				this.dsList.setColumn(nAddRow, "CD_ROLE", "R00");	// Role코드
         				this.dsList.setColumn(nAddRow, "NM_ROLE", "기본권한");	// Role명
        				this.dsList.setColumn(nAddRow, this.ucFlag, "I");
        			}
        		}
        	}
        	this.dsList.set_enableevent(true);
        	this.gfnSetFormStatus(this, "I");

        	this.dxGrid.setFocus();
        };
        this.divSearch_stabu_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DWA_SILHENG_onload,this);
            this.divData.form.divSplitter.form.btnMove.addEventHandler("onclick",this.divData_divSplitter_btnMove_onclick,this);
            this.divData.form.divSplitter.form.btnMoveAll.addEventHandler("onclick",this.divData_divSplitter_btnMoveAll_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DIQ_GYUMJIK.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
