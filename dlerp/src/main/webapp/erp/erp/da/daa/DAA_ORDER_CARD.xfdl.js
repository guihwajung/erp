(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAA_ORDER_CARD");
            this.set_titletext("인사카드 발령정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAAPR_ORDER_CARD_SELECT</Col></Row><Row><Col id=\"SP\">DAAPR_ORDER_CARD_SAVE</Col><Col id=\"TARGET\">insert</Col></Row><Row><Col id=\"SP\">DAAPR_ORDER_CARD_SAVE</Col><Col id=\"TARGET\">update</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DAAPR_ORDER_CARD_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelUpload", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_SAVE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_RESIDENT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SALARY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SALARY_ETC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SALARY_TOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_SEAL\" type=\"STRING\" size=\"256\"/><Column id=\"ID_INSERT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","0.0","10.0","66.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","10.0","180","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
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
            obj = new BindItem("item2","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAA_ORDER_CARD.xfdl", function() {
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

        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Reset.set_enable(true);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btn1 = this.gfnFormButtonAdd("FormButton1", "fnExcelUpload","엑셀업로드");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;

        	this.dxGrid = this.divData.form.objGrid;

        	this.grSearch = this.FormInfo.GR_SEARCH;					          // 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;					          // 그룹코드
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	//성명
        	this.ccfID_SABUN.CodeFindName = "DAX_CFBASEINFO";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//그리드
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAA_ORDER_CARD");
        	//그리드 이벤트
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("ID_PERSON", "string");	//bigdecimal	성명을 선택하지 않고 조회하면 서버쪽에서 디폴트 값으로 0값을 넘겨 전체조회가 안된다. 그래서 String으로 변경함

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("TY_SAVE", "string");
        	this.dsInsert.addColumn("ID_PERSON", "bigdecimal");
        	this.dsInsert.addColumn("NO_SEQ", "bigdecimal");
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("ID_SABUN", "string");
        	this.dsInsert.addColumn("ID_RESIDENT", "string");
        	this.dsInsert.addColumn("DS_HNAME", "string");
        	this.dsInsert.addColumn("DT_ORDER", "string");
        	this.dsInsert.addColumn("DS_DEPT", "string");
        	this.dsInsert.addColumn("DS_POSITION", "string");
        	this.dsInsert.addColumn("DS_ORDER", "string");
        	this.dsInsert.addColumn("AM_SALARY", "bigdecimal");
        	this.dsInsert.addColumn("AM_SALARY_ETC", "bigdecimal");
        	this.dsInsert.addColumn("AM_SALARY_TOT", "bigdecimal");
        	this.dsInsert.addColumn("DS_SEAL", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("TY_SAVE", "string");
        	this.dsUpdate.addColumn("ID_PERSON", "bigdecimal");
        	this.dsUpdate.addColumn("NO_SEQ", "bigdecimal");
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("ID_SABUN", "string");
        	this.dsUpdate.addColumn("ID_RESIDENT", "string");
        	this.dsUpdate.addColumn("DS_HNAME", "string");
        	this.dsUpdate.addColumn("DT_ORDER", "string");
        	this.dsUpdate.addColumn("DS_DEPT", "string");
        	this.dsUpdate.addColumn("DS_POSITION", "string");
        	this.dsUpdate.addColumn("DS_ORDER", "string");
        	this.dsUpdate.addColumn("AM_SALARY", "bigdecimal");
        	this.dsUpdate.addColumn("AM_SALARY_ETC", "bigdecimal");
        	this.dsUpdate.addColumn("AM_SALARY_TOT", "bigdecimal");
        	this.dsUpdate.addColumn("DS_SEAL", "string");
        	this.dsUpdate.addColumn("ID_INSERT", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("TY_SAVE", "string");
        	this.dsDelete.addColumn("ID_PERSON", "bigdecimal");
        	this.dsDelete.addColumn("NO_SEQ", "bigdecimal");
        	this.dsDelete.addColumn("CD_CORP", "string");
        	this.dsDelete.addColumn("ID_SABUN", "string");
        	this.dsDelete.addColumn("ID_RESIDENT", "string");
        	this.dsDelete.addColumn("DS_HNAME", "string");
        	this.dsDelete.addColumn("DT_ORDER", "string");
        	this.dsDelete.addColumn("DS_DEPT", "string");
        	this.dsDelete.addColumn("DS_POSITION", "string");
        	this.dsDelete.addColumn("DS_ORDER", "string");
        	this.dsDelete.addColumn("AM_SALARY", "bigdecimal");
        	this.dsDelete.addColumn("AM_SALARY_ETC", "bigdecimal");
        	this.dsDelete.addColumn("AM_SALARY_TOT", "bigdecimal");
        	this.dsDelete.addColumn("DS_SEAL", "string");
        	this.dsDelete.addColumn("ID_INSERT", "string");

        	this.dsExcelInsert = new Dataset();
        	this.dsExcelInsert.addColumn("TY_SAVE", "string");
        	this.dsExcelInsert.addColumn("ID_PERSON", "bigdecimal");
        	this.dsExcelInsert.addColumn("NO_SEQ", "bigdecimal");
        	this.dsExcelInsert.addColumn("CD_CORP", "string");
        	this.dsExcelInsert.addColumn("ID_SABUN", "string");
        	this.dsExcelInsert.addColumn("ID_RESIDENT", "string");
        	this.dsExcelInsert.addColumn("DS_HNAME", "string");
        	this.dsExcelInsert.addColumn("DT_ORDER", "string");
        	this.dsExcelInsert.addColumn("DS_DEPT", "string");
        	this.dsExcelInsert.addColumn("DS_POSITION", "string");
        	this.dsExcelInsert.addColumn("DS_ORDER", "string");
        	this.dsExcelInsert.addColumn("AM_SALARY", "bigdecimal");
        	this.dsExcelInsert.addColumn("AM_SALARY_ETC", "bigdecimal");
        	this.dsExcelInsert.addColumn("AM_SALARY_TOT", "bigdecimal");
        	this.dsExcelInsert.addColumn("DS_SEAL", "string");
        	this.dsExcelInsert.addColumn("ID_INSERT", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnValidate()) return;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "ID_SABUN", this.gfnIsNull(this.dsSearch.getColumn(0, "ID_SABUN")) ? "" : this.dsSearch.getColumn(0, "ID_SABUN") );
        	this.dsSelect.setColumn(0, "ID_PERSON", this.gfnIsNull(this.dsSearch.getColumn(0, "ID_PERSON")) ? "" : this.dsSearch.getColumn(0, "ID_PERSON") );

        //trace("this.dsSelect >>>>"+this.dsSelect.saveXML());

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
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid);
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
        	if (!this.fnSaveValidation()) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);

        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();

        				this.dsInsert.setColumn(nrow, "TY_SAVE", flag);
        				this.dsInsert.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(i, "ID_PERSON"));
        				this.dsInsert.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsInsert.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsInsert.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        				this.dsInsert.setColumn(nrow, "ID_RESIDENT", this.dsList.getColumn(i, "ID_RESIDENT"));
        				this.dsInsert.setColumn(nrow, "DS_HNAME", this.dsList.getColumn(i, "DS_HNAME"));
        				this.dsInsert.setColumn(nrow, "DT_ORDER", this.dsList.getColumn(i, "DT_ORDER"));
        				this.dsInsert.setColumn(nrow, "DS_DEPT", this.dsList.getColumn(i, "DS_DEPT"));
        				this.dsInsert.setColumn(nrow, "DS_POSITION", this.dsList.getColumn(i, "DS_POSITION"));
        				this.dsInsert.setColumn(nrow, "DS_ORDER", this.dsList.getColumn(i, "DS_ORDER"));
        				this.dsInsert.setColumn(nrow, "AM_SALARY", this.dsList.getColumn(i, "AM_SALARY"));
        				this.dsInsert.setColumn(nrow, "AM_SALARY_ETC", this.dsList.getColumn(i, "AM_SALARY_ETC"));
        				this.dsInsert.setColumn(nrow, "AM_SALARY_TOT", this.dsList.getColumn(i, "AM_SALARY_TOT"));
        				this.dsInsert.setColumn(nrow, "DS_SEAL", this.dsList.getColumn(i, "DS_SEAL"));
        				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();

        				this.dsUpdate.setColumn(nrow, "TY_SAVE", flag);
        				this.dsUpdate.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(i, "ID_PERSON"));
        				this.dsUpdate.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsUpdate.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsUpdate.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        				this.dsUpdate.setColumn(nrow, "ID_RESIDENT", this.dsList.getColumn(i, "ID_RESIDENT"));
        				this.dsUpdate.setColumn(nrow, "DS_HNAME", this.dsList.getColumn(i, "DS_HNAME"));
        				this.dsUpdate.setColumn(nrow, "DT_ORDER", this.dsList.getColumn(i, "DT_ORDER"));
        				this.dsUpdate.setColumn(nrow, "DS_DEPT", this.dsList.getColumn(i, "DS_DEPT"));
        				this.dsUpdate.setColumn(nrow, "DS_POSITION", this.dsList.getColumn(i, "DS_POSITION"));
        				this.dsUpdate.setColumn(nrow, "DS_ORDER", this.dsList.getColumn(i, "DS_ORDER"));
        				this.dsUpdate.setColumn(nrow, "AM_SALARY", this.dsList.getColumn(i, "AM_SALARY"));
        				this.dsUpdate.setColumn(nrow, "AM_SALARY_ETC", this.dsList.getColumn(i, "AM_SALARY_ETC"));
        				this.dsUpdate.setColumn(nrow, "AM_SALARY_TOT", this.dsList.getColumn(i, "AM_SALARY_TOT"));
        				this.dsUpdate.setColumn(nrow, "DS_SEAL", this.dsList.getColumn(i, "DS_SEAL"));
        				this.dsUpdate.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();

        				this.dsDelete.setColumn(nrow, "TY_SAVE", flag);
        				this.dsDelete.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(i, "ID_PERSON"));
        				this.dsDelete.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsDelete.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsDelete.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        				this.dsDelete.setColumn(nrow, "ID_RESIDENT", this.dsList.getColumn(i, "ID_RESIDENT"));
        				this.dsDelete.setColumn(nrow, "DS_HNAME", this.dsList.getColumn(i, "DS_HNAME"));
        				this.dsDelete.setColumn(nrow, "DT_ORDER", this.dsList.getColumn(i, "DT_ORDER"));
        				this.dsDelete.setColumn(nrow, "DS_DEPT", this.dsList.getColumn(i, "DS_DEPT"));
        				this.dsDelete.setColumn(nrow, "DS_POSITION", this.dsList.getColumn(i, "DS_POSITION"));
        				this.dsDelete.setColumn(nrow, "DS_ORDER", this.dsList.getColumn(i, "DS_ORDER"));
        				this.dsDelete.setColumn(nrow, "AM_SALARY", this.dsList.getColumn(i, "AM_SALARY"));
        				this.dsDelete.setColumn(nrow, "AM_SALARY_ETC", this.dsList.getColumn(i, "AM_SALARY_ETC"));
        				this.dsDelete.setColumn(nrow, "AM_SALARY_TOT", this.dsList.getColumn(i, "AM_SALARY_TOT"));
        				this.dsDelete.setColumn(nrow, "DS_SEAL", this.dsList.getColumn(i, "DS_SEAL"));
        				this.dsDelete.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
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
        /*
         *	리셋 버튼
         */
        this.fnReset = function() {
        	this.ccfID_SABUN.form.CDTextBox.set_value("");
        	this.ccfID_SABUN.form.DSTextBox.set_value("");

        	this.fnSearchInit();
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnValidate = function() {

        // 	if (this.gfnIsNull(this.ccfID_SABUN.form.CDTextBox.value)) {
        // 		this.ccfID_SABUN.form.CDTextBox.setFocus();
        // 		this.gfnAlert("성명을 입력하세요.");
        // 		return false;
        // 	}

        	return true;
        };

        this.fnSaveValidation = function() {
        	// 입력 상태일 때 사번이 있으면 주민록번호 체크를 안한다.

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		if (flag == "" || flag == "D") continue;

        		if (this.gfnGetFlag(this.dsList, i) == "I" && this.dsList.getColumn(i, "ID_SABUN") != "" ){
        			return true;
        		}

        		if (flag == "I" || flag == "U" && this.dsList.getColumn(i, "ID_SABUN") == "") {
        			if (!this.gfnIsSSN(this.dsList.getColumn(i, "ID_RESIDENT").replace(/-/gi, ""))) {
        				this.gfnAlert("주민번호가 틀렸습니다.");
        				return false;
        			}
        		}
        	}
        	return true;
        }


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
        		this.fnSetButton();
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "saveExcel") {
        		if (errorCode == 0) {
        			this.gfnAlert("업로드를 완료했습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        		this.dsExcelUpload.clearData();
        	}

        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnAfterCDTextChanged = function(id, codeFindData) {
        //trace("코드파인드 fnAfterCDTextChanged id :["+id+"]");
        	//this.fnSearchInit();
        	var arr = codeFindData;

        	switch(id){
        		case "ccfID_SABUN" :
        			if(this.gfnIsNull(arr[0])){
        				this.dsSearch.setColumn(0, "ID_SABUN", "");
        				this.dsSearch.setColumn(0, "ID_PERSON", "");
        			}else{
        				this.dsSearch.setColumn(0, "ID_SABUN", arr[0]["ID_SABUN"]);
        				this.dsSearch.setColumn(0, "ID_PERSON", arr[0]["ID_PERSON"]);
        			}
        		break;

        	}

        }

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        //	trace("코드파인드_식별id:" + id);
        	switch(id) {
        		case "ccfCD_CORP":	//법인

        			break;

        		case "ccfID_SABUN":
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", "%");
        			dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        			break;

        		default:
        	}
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        //	trace('grid_코드파인드_식별id: ' + id);

        	switch(id) {
        		case "ID_SABUN":
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", "%");
        			dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        		break;

        		case "CD_POSITION":	//직위
        			 dsUserParam.setColumn(nrow, "CD_PREFIX", 'ED'); // 직위
        		break;

        		default:
        	}

        	return true;
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        /*
         *	엑셀업로드
         */
        this.fnExcelUpload = function() {
        	// this.gfnExcelImport("적용할Dataset명","sheet명","데이터시작좌표","콜백함수명","구분ID",현재폼);
        	// sheet명 없으면 첫번째 sheet
        	this.dsExcelUpload.clearData();
        	this.gfnExcelImport("dsExcelUpload","Sheet1","A2","fnExcelImportCallback","import",this);
        };

        this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet) {

        	for (var i=0; i<dsOut.rowcount; i++) {
        		var nrow = this.dsExcelUpload.addRow();
        		this.dsExcelUpload.setColumn(nrow, this.ucFlag, "I");

        		for (var j=0; j< dsOut.colcount; j++) {
        			if (!this.gfnIsNull(dsOut.getColumn(i,j)) ){
        				dsOut.setColumn(i,j,nexacro.trim(dsOut.getColumn(i,j)));
        				var strColID = dsOut.getColID( j );
        				//날짜 형식 수정
        				if ( strColID == "Column4" ){
        					dsOut.setColumn(i,j,dsOut.getColumn(i,j).replace(/[^0-9]/g,''));
        				}
        			}
        		}
        		// 양식이 일치하는 경우 copyRow
        		//this.dsExcelUpload.copyRow(nrow, dsOut, i);

        		// 양식과 일치하지 않는 경우 아래와 같이 컬럼별로 처리.
        		// PERSON ID,	순번,	법인코드 ( 3개 컬럼을 제거한후 올릴때 )
        // 		this.dsExcelUpload.setColumn(nrow, "TY_SAVE", "I");
        // 		this.dsExcelUpload.setColumn(nrow, "DS_HNAME", dsOut.getColumn(i, "Column2"));
        // 		this.dsExcelUpload.setColumn(nrow, "ID_RESIDENT", dsOut.getColumn(i, "Column3"));
        // 		this.dsExcelUpload.setColumn(nrow, "DT_ORDER", dsOut.getColumn(i, "Column4"));
        // 		this.dsExcelUpload.setColumn(nrow, "DS_DEPT", dsOut.getColumn(i, "Column5"));
        // 		this.dsExcelUpload.setColumn(nrow, "DS_POSITION", dsOut.getColumn(i, "Column6"));
        // 		this.dsExcelUpload.setColumn(nrow, "DS_ORDER", dsOut.getColumn(i, "Column7"));
        // 		this.dsExcelUpload.setColumn(nrow, "AM_SALARY", dsOut.getColumn(i, "Column8"));
        // 		this.dsExcelUpload.setColumn(nrow, "AM_SALARY_ETC", dsOut.getColumn(i, "Column9"));
        // 		this.dsExcelUpload.setColumn(nrow, "AM_SALARY_TOT", dsOut.getColumn(i, "Column10"));
        // 		this.dsExcelUpload.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        		// 엑셀 다운로드 양식으로 업로드데이터를 올릴때
        		this.dsExcelUpload.setColumn(nrow, "TY_SAVE", "I");
        		this.dsExcelUpload.setColumn(nrow, "DS_HNAME", dsOut.getColumn(i, "Column5"));
        		this.dsExcelUpload.setColumn(nrow, "ID_RESIDENT", dsOut.getColumn(i, "Column6"));
        		this.dsExcelUpload.setColumn(nrow, "DT_ORDER", dsOut.getColumn(i, "Column7"));
        		this.dsExcelUpload.setColumn(nrow, "DS_DEPT", dsOut.getColumn(i, "Column8"));
        		this.dsExcelUpload.setColumn(nrow, "DS_POSITION", dsOut.getColumn(i, "Column9"));
        		this.dsExcelUpload.setColumn(nrow, "DS_ORDER", dsOut.getColumn(i, "Column10"));
        		this.dsExcelUpload.setColumn(nrow, "AM_SALARY", dsOut.getColumn(i, "Column11"));
        		this.dsExcelUpload.setColumn(nrow, "AM_SALARY_ETC", dsOut.getColumn(i, "Column12"));
        		this.dsExcelUpload.setColumn(nrow, "AM_SALARY_TOT", dsOut.getColumn(i, "Column13"));
        		this.dsExcelUpload.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        	}

        	this.excelUploadSave();

        };

        this.excelUploadSave = function() {

        //trace("this.dsExcelUpload >>>>>>>"+this.dsExcelUpload.saveXML());

        	if (this.dsExcelUpload.rowcount == 0 ) return;

        	var strSvcId    = "saveExcel";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsExcelUpload";
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
        };

        this.excelUploadSave_OK = function() {
        	this.dsExcelInsert.clearData();
        //trace("this.dsExcelUpload >>>>>>>"+this.dsExcelUpload.saveXML());
        	for (var i = 0; i < this.dsExcelUpload.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsExcelUpload, i);

        		var nrow = this.dsExcelInsert.addRow();

        		this.dsExcelInsert.setColumn(nrow, "TY_SAVE", "I");
        		this.dsExcelInsert.setColumn(nrow, "ID_PERSON", this.dsExcelUpload.getColumn(i, "ID_PERSON"));
        		this.dsExcelInsert.setColumn(nrow, "NO_SEQ", this.dsExcelUpload.getColumn(i, "NO_SEQ"));
        		this.dsExcelInsert.setColumn(nrow, "CD_CORP", this.dsExcelUpload.getColumn(i, "CD_CORP"));
        		this.dsExcelInsert.setColumn(nrow, "ID_SABUN", this.dsExcelUpload.getColumn(i, "ID_SABUN"));
        		this.dsExcelInsert.setColumn(nrow, "ID_RESIDENT", this.dsExcelUpload.getColumn(i, "ID_RESIDENT"));
        		this.dsExcelInsert.setColumn(nrow, "DS_HNAME", this.dsExcelUpload.getColumn(i, "DS_HNAME"));
        		this.dsExcelInsert.setColumn(nrow, "DT_ORDER", this.dsExcelUpload.getColumn(i, "DT_ORDER"));
        		this.dsExcelInsert.setColumn(nrow, "DS_DEPT", this.dsExcelUpload.getColumn(i, "DS_DEPT"));
        		this.dsExcelInsert.setColumn(nrow, "DS_POSITION", this.dsExcelUpload.getColumn(i, "DS_POSITION"));
        		this.dsExcelInsert.setColumn(nrow, "DS_ORDER", this.dsExcelUpload.getColumn(i, "DS_ORDER"));
        		this.dsExcelInsert.setColumn(nrow, "AM_SALARY", this.dsExcelUpload.getColumn(i, "AM_SALARY"));
        		this.dsExcelInsert.setColumn(nrow, "AM_SALARY_ETC", this.dsExcelUpload.getColumn(i, "AM_SALARY_ETC"));
        		this.dsExcelInsert.setColumn(nrow, "AM_SALARY_TOT", this.dsExcelUpload.getColumn(i, "AM_SALARY_TOT"));
        		this.dsExcelInsert.setColumn(nrow, "DS_SEAL", this.dsExcelUpload.getColumn(i, "DS_SEAL"));
        		this.dsExcelInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        	}

        	if (this.dsExcelInsert.rowcount == 0 ) return;

        	var strSvcId    = "saveExcel";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsExcelInsert";
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
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	// 폼상태 초기화
        	this.gfnSetFormStatus(this);
        	this.gfnGridClear(this.dxGrid);
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.dsList_oncolumnchanged = function(obj,e)
        {
        	// 입력 상태가 아니라면 Update 상태로 변경.
        	var status = this.gfnGetFormStatus(this);

        	switch(e.columnid){
        		case "AM_SALARY" :
        			if(e.oldvalue != e.newvalue){
        				if (this.dsList.getColumn(this.dsList.rowposition, "AM_SALARY_ETC") != undefined) {
        					var AM_SALARY = this.dsList.getColumn(this.dsList.rowposition, "AM_SALARY");
        					var AM_SALARY_ETC = this.dsList.getColumn(this.dsList.rowposition, "AM_SALARY_ETC");
        					var AM_SALARY_TOT =  Number(AM_SALARY) + Number(AM_SALARY_ETC);
        					this.dsList.setColumn(this.dsList.rowposition, "AM_SALARY_TOT", AM_SALARY_TOT);
        				}
        			}
        		break;
        		case "AM_SALARY_ETC" :
        			if(e.oldvalue != e.newvalue){
        				if (this.dsList.getColumn(this.dsList.rowposition, "AM_SALARY") != undefined) {
        					var AM_SALARY = this.dsList.getColumn(this.dsList.rowposition, "AM_SALARY");
        					var AM_SALARY_ETC = this.dsList.getColumn(this.dsList.rowposition, "AM_SALARY_ETC");
        					var AM_SALARY_TOT =  Number(AM_SALARY) + Number(AM_SALARY_ETC);
        					this.dsList.setColumn(this.dsList.rowposition, "AM_SALARY_TOT", AM_SALARY_TOT);
        				}
        			}
        		break;
        	}

        };

        this.dsList_onvaluechanged = function(obj,e)
        {
        	this.fnSetButton();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAA_ORDER_CARD.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
