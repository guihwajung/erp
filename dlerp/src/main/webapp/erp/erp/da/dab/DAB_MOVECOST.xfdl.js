(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAB_MOVECOST");
            this.set_titletext("이사비지원");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DABPR_MOVECOST_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DABPR_MOVECOST_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFDEPT");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","ccfCD_DEPT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ccfID_SABUN:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("부서코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:5",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
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
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_MOVECOST.xfdl", function() {
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

        	//법인 셋팅
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	this.ccfID_SABUN.form.CDTextBox.set_value(this.AuthClient.ID_SABUN);
        	this.ccfID_SABUN.form.DSTextBox.set_value(this.AuthClient.DS_HNAME);
         	if(!this.gfnIsNull(this.ccfID_SABUN.form.CDTextBox.value)){
        		this.ccfID_SABUN.form.fnCodeFindLoad();
        	}

        	if(this.FormInfo.GR_SEARCH == "9"){
        		this.ccfCD_CORP.set_enable(false);
        		this.ccfID_SABUN.set_enable(false);
        		this.ccfCD_DEPT.set_enable(false);
        	}

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

        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAB_MOVECOST");

        	//그리드 이벤트
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	//this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("TY_AUTH", "string");
        	this.dsSelect.addColumn("GR_DEPT", "string");
        	this.dsSelect.addColumn("ID_USER", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("NO_SEQ", "bigdecimal");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("CD_DEPT", "string");
        	this.dsSave.addColumn("CD_POSITION", "string");
        	this.dsSave.addColumn("DS_DEPT_BEF", "string");
        	this.dsSave.addColumn("DS_AREA_BEF", "string");
        	this.dsSave.addColumn("DT_ORDER_BEF", "string");
        	this.dsSave.addColumn("DS_ADDRESS_BEF", "string");
        	this.dsSave.addColumn("DS_TOGETHER_BEF", "string");
        	this.dsSave.addColumn("QN_TOGETHER_BEF", "bigdecimal");
        	this.dsSave.addColumn("DS_DEPT_AFT", "string");
        	this.dsSave.addColumn("DS_AREA_AFT", "string");
        	this.dsSave.addColumn("DT_ORDER_AFT", "string");
        	this.dsSave.addColumn("DS_ADDRESS_AFT", "string");
        	this.dsSave.addColumn("DS_TOGETHER_AFT", "string");
        	this.dsSave.addColumn("QN_TOGETHER_AFT", "bigdecimal");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("DS_MOVECOST1", "string");
        	this.dsSave.addColumn("AM_MOVECOST1", "bigdecimal");
        	this.dsSave.addColumn("DS_MOVECOST2", "string");
        	this.dsSave.addColumn("AM_MOVECOST2", "bigdecimal");
        	this.dsSave.addColumn("DS_MOVECOST3", "string");
        	this.dsSave.addColumn("AM_MOVECOST3", "bigdecimal");
        	this.dsSave.addColumn("CD_APPROVAL", "string");
        	this.dsSave.addColumn("ID_APPROVAL", "string");
        	this.dsSave.addColumn("DT_APPROVAL", "datetime");
        	this.dsSave.addColumn("NO_GROUPWARE", "string");
        	this.dsSave.addColumn("ID_DOCUMENT", "string");
        	this.dsSave.addColumn("DT_MOVE", "string");
        	this.dsSave.addColumn("AM_MOVECOST", "bigdecimal");
        	this.dsSave.addColumn("DS_MOVE_KM", "string");
        	this.dsSave.addColumn("GR_SEARCH", "string");
        	this.dsSave.addColumn("TY_AUTH", "string");
        	this.dsSave.addColumn("GR_DEPT", "string");
        	this.dsSave.addColumn("ID_USER", "string");

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
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.dsSearch.getColumn(0, "GR_SEARCH"));
        	this.dsSelect.setColumn(0, "TY_AUTH", this.dsSearch.getColumn(0, "TY_AUTH"));
        	this.dsSelect.setColumn(0, "GR_DEPT", this.dsSearch.getColumn(0, "GR_DEPT"));
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
        	var nrow = this.gfnGridAdd(this.dxGrid);
        	this.dsList.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsList.setColumn(nrow, "DS_CORP", this.ccfCD_CORP.form.DSTextBox.value);
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	var sNO_GROUPWARE = this.dsList.getColumn(this.dsList.rowposition, "NO_GROUPWARE");
        	if(this.gfnIsNull(sNO_GROUPWARE)){
        		this.gfnGridDel(this.dxGrid);
        	}else{
        		this.gfnAlert("그룹웨어KEY가 존재합니다. 삭제할 수 없습니다.");
        		return;
        	}
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();
        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "NO_SEQ", (flag == "I" ? 0 : this.dsList.getColumn(i, "NO_SEQ")));
        				this.dsSave.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        				this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsSave.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        				this.dsSave.setColumn(nrow, "CD_POSITION", this.dsList.getColumn(i, "CD_POSITION"));
        				this.dsSave.setColumn(nrow, "DS_DEPT_BEF", this.dsList.getColumn(i, "DS_DEPT_BEF"));
        				this.dsSave.setColumn(nrow, "DS_AREA_BEF", this.dsList.getColumn(i, "DS_AREA_BEF"));
        				this.dsSave.setColumn(nrow, "DT_ORDER_BEF", this.dsList.getColumn(i, "DT_ORDER_BEF"));
        				this.dsSave.setColumn(nrow, "DS_ADDRESS_BEF", this.dsList.getColumn(i, "DS_ADDRESS_BEF"));
        				this.dsSave.setColumn(nrow, "DS_TOGETHER_BEF", this.dsList.getColumn(i, "DS_TOGETHER_BEF"));
        				this.dsSave.setColumn(nrow, "QN_TOGETHER_BEF", this.dsList.getColumn(i, "QN_TOGETHER_BEF"));
        				this.dsSave.setColumn(nrow, "DS_DEPT_AFT", this.dsList.getColumn(i, "DS_DEPT_AFT"));
        				this.dsSave.setColumn(nrow, "DS_AREA_AFT", this.dsList.getColumn(i, "DS_AREA_AFT"));
        				this.dsSave.setColumn(nrow, "DT_ORDER_AFT", this.dsList.getColumn(i, "DT_ORDER_AFT"));
        				this.dsSave.setColumn(nrow, "DS_ADDRESS_AFT", this.dsList.getColumn(i, "DS_ADDRESS_AFT"));
        				this.dsSave.setColumn(nrow, "DS_TOGETHER_AFT", this.dsList.getColumn(i, "DS_TOGETHER_AFT"));
        				this.dsSave.setColumn(nrow, "QN_TOGETHER_AFT", this.dsList.getColumn(i, "QN_TOGETHER_AFT"));
        				this.dsSave.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        				this.dsSave.setColumn(nrow, "DS_MOVECOST1", this.dsList.getColumn(i, "DS_MOVECOST1"));
        				this.dsSave.setColumn(nrow, "AM_MOVECOST1", this.dsList.getColumn(i, "AM_MOVECOST1"));
        				this.dsSave.setColumn(nrow, "DS_MOVECOST2", this.dsList.getColumn(i, "DS_MOVECOST2"));
        				this.dsSave.setColumn(nrow, "AM_MOVECOST2", this.dsList.getColumn(i, "AM_MOVECOST2"));
        				this.dsSave.setColumn(nrow, "DS_MOVECOST3", this.dsList.getColumn(i, "DS_MOVECOST3"));
        				this.dsSave.setColumn(nrow, "AM_MOVECOST3", this.dsList.getColumn(i, "AM_MOVECOST3"));
        				this.dsSave.setColumn(nrow, "CD_APPROVAL", this.dsList.getColumn(i, "CD_APPROVAL"));
        				this.dsSave.setColumn(nrow, "ID_APPROVAL", this.dsList.getColumn(i, "ID_APPROVAL"));
        				this.dsSave.setColumn(nrow, "DT_APPROVAL", this.dsList.getColumn(i, "DT_APPROVAL"));
        				this.dsSave.setColumn(nrow, "NO_GROUPWARE", this.dsList.getColumn(i, "NO_GROUPWARE"));
        				this.dsSave.setColumn(nrow, "ID_DOCUMENT", this.dsList.getColumn(i, "ID_DOCUMENT"));
        				this.dsSave.setColumn(nrow, "DT_MOVE", this.dsList.getColumn(i, "DT_MOVE"));
        				this.dsSave.setColumn(nrow, "AM_MOVECOST", this.dsList.getColumn(i, "AM_MOVECOST"));
        				this.dsSave.setColumn(nrow, "DS_MOVE_KM", this.dsList.getColumn(i, "DS_MOVE_KM"));
        				this.dsSave.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        				this.dsSave.setColumn(nrow, "TY_AUTH", this.FormInfo.TY_AUTH);
        				this.dsSave.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
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
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.gfnAlert("저장이 완료되었습니다.");
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
         	if(id == "ccfCD_CORP") {
        		// 법인코드
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
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
        		dsUserParam.setColumn(nrow, "YN_CURRENT", "");
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
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.ccfCD_DEPT.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "YN_CORP", "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");	// 재직구분
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
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){

        	var gridIdx = this.dxGrid.currentrow;

        	if(id == "DAX_CFBASEINFO_ALL") {
        		// 사번 	ID_SABUN
        		var sCD_CORP = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        		if(this.gfnIsNull(sCD_CORP)){
        			this.gfnAlert("법인을 먼저 선택하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "CD_CORP", sCD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP", "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        	}
        	else if (id == "ED"){
        		//직위
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "ED");
        	}

        	return true;
        };

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	return true;
        };

        // 셀 수정가능 여부 (반드시 EnterCell에서 처리할것)
        this.fnGrid_EnterCell = function(obj, row, cell) {
         	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);

        	//cell 수정안되는것만 return false 할것
        	//마지막에 return true 해버리면 전체 컬럼 수정가능해져버림

        	var sNO_GROUPWARE = this.dsList.getColumn(row, "NO_GROUPWARE");

        	if(this.FormInfo.GR_SEARCH <= 2 && this.FormInfo.TY_AUTH == "F"){
        		if(!this.gfnIsNull(sNO_GROUPWARE)){
        			//해당ROW 의 NO_GROUPWARE 값이 있으면  이사일자 , 이사비지원, 이사거리, 비고 만 수정 가능
        			if(colnm == "DT_MOVE"
        					||colnm == "AM_MOVECOST"
        					||colnm == "DS_MOVE_KM"
        					||colnm == "DS_REMARK"){
        					;
        			}else{
        				return false;
        			}
        		}
        	}else{
        		//NOT ( GR_SEARCH <= 2 AND  TY_AUTH = F )
        		//읽기만 가능
        		return false;
        	}
        }


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



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAB_MOVECOST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
