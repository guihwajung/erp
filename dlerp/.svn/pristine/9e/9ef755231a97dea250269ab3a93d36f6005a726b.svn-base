(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAM_CAR");
            this.set_titletext("차량등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAMPR_CAR_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAMPR_CAR_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CAR\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CAR\" type=\"STRING\" size=\"256\"/><Column id=\"YN_GROUPWARE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DISPOSE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_GROUPWARE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">%</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">대상</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">미대상</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_DISPOSE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">%</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">매각(반납)</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">유지</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("30");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:0.0","10.0","260","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFDEPT");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_CAR","ccfCD_DEPT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_CAR","0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("차종");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_GROUPWARE","staTY_CAR:0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("그룹웨어여부");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtTY_CAR","staTY_CAR:0.0","staCD_CORP:10.0","140","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_GROUPWARE","staYN_GROUPWARE:0.0","staCD_CORP:10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsYN_GROUPWARE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_DISPOSE","cboYN_GROUPWARE:0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("매각(반납)여부 ");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_DISPOSE","staYN_DISPOSE:0.0","staCD_CORP:10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsYN_DISPOSE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtNO_CAR","staNO_CAR:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
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

            obj = new BindItem("item4","divSearch.form.edtNO_CAR","value","dsSearch","NO_CAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.edtTY_CAR","value","dsSearch","TY_CAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.cboYN_GROUPWARE","value","dsSearch","YN_GROUPWARE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.cboYN_DISPOSE","value","dsSearch","YN_DISPOSE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAM_CAR.xfdl", function() {
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

        	this.divSearch.form.cboYN_GROUPWARE.set_index(0);
        	this.divSearch.form.cboYN_DISPOSE.set_index(0);

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
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fn_AfterCDTextChanged";

        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.AfterCDTextChanged = "fn_AfterCDTextChanged";

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAM_CAR");

        	// BUTTON, BUTTON-IN 처리
        	this.dxGrid.ExpandUp = "fnGrid_ExpandUp";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("NO_CAR", "string");
        	this.dsSelect.addColumn("TY_CAR", "string");
        	this.dsSelect.addColumn("YN_GROUPWARE", "string");
        	this.dsSelect.addColumn("YN_DISPOSE", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("GR_DEPT", "string");
        	this.dsSelect.addColumn("ID_USER", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("CD_CAR", "string");
        	this.dsSave.addColumn("NO_CAR", "string");
        	this.dsSave.addColumn("TY_CAR", "string");
        	this.dsSave.addColumn("DT_CAR", "string");
        	this.dsSave.addColumn("DT_DISPOSE", "string");
        	this.dsSave.addColumn("CD_CAR_FUEL", "string");
        	this.dsSave.addColumn("DS_INSURANCE", "string");
        	this.dsSave.addColumn("DT_FR_INSURANCE", "string");
        	this.dsSave.addColumn("DT_TO_INSURANCE", "string");
        	this.dsSave.addColumn("AM_CAR_INSURANCE", "bigdecimal");
        	this.dsSave.addColumn("YN_RENT", "string");
        	this.dsSave.addColumn("YN_ENVIRONMENT", "string");
        	this.dsSave.addColumn("DT_CAR_CHECK", "string");
        	this.dsSave.addColumn("CD_DEPT", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("QN_INWON", "int");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("YN_GROUPWARE", "string");
        	this.dsSave.addColumn("ID_INSERT", "string");
        	this.dsSave.addColumn("YR_BUY", "string");
        	this.dsSave.addColumn("AM_BUY", "bigdecimal");
        	this.dsSave.addColumn("DS_USE", "string");
        	this.dsSave.addColumn("GR_SEARCH", "string");
        	this.dsSave.addColumn("TY_AUTH", "string");
        	this.dsSave.addColumn("GR_DEPT", "string");

        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnSelectValidate()) return;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsSelect.setColumn(0, "NO_CAR", this.dsSearch.getColumn(0, "NO_CAR"));
        	this.dsSelect.setColumn(0, "TY_CAR", this.dsSearch.getColumn(0, "TY_CAR"));
        	this.dsSelect.setColumn(0, "YN_GROUPWARE", this.dsSearch.getColumn(0, "YN_GROUPWARE"));
        	this.dsSelect.setColumn(0, "YN_DISPOSE", this.dsSearch.getColumn(0, "YN_DISPOSE"));
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
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
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid);

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))){
        		this.gfnAlert("법인을 선택하세요!");
        		return;
        	}

        	this.dsList.setColumn(nrow, "CD_CORP", this.gfnNvl(this.dsSearch.getColumn(0, "CD_CORP"),""));
        	this.dsList.setColumn(nrow, "DS_CORP", this.gfnNvl(this.dsSearch.getColumn(0, "DS_CORP"),""));
        	this.dsList.setColumn(nrow, "CD_DEPT", this.gfnNvl(this.dsSearch.getColumn(0, "CD_DEPT"),""));
        	this.dsList.setColumn(nrow, "DS_DEPT", this.gfnNvl(this.dsSearch.getColumn(0, "DS_DEPT"),""));

        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	var rows = this.dxGrid.getSelectedDatasetRows();
        	if(rows.length > 0) {
        		for(var i =0; i < rows.length; i++) {
        			var nrow = rows[i];
        			if(this.gfnNvl(this.dsList.getColumn(nrow, "FILE_CNT"), 0) > 0){
        				this.gfnAlert("첨부파일 먼저 삭제하세요!");
        				return;
        			}
        		}
        	}
        	this.gfnGridDel(this.dxGrid);
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크
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
        				this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsSave.setColumn(nrow, "CD_CAR", (flag == "I" ? "" : this.dsList.getColumn(i, "CD_CAR")));
        				this.dsSave.setColumn(nrow, "NO_CAR", this.dsList.getColumn(i, "NO_CAR"));
        				this.dsSave.setColumn(nrow, "TY_CAR", this.dsList.getColumn(i, "TY_CAR"));
        				this.dsSave.setColumn(nrow, "DT_CAR", this.dsList.getColumn(i, "DT_CAR"));
        				this.dsSave.setColumn(nrow, "DT_DISPOSE", this.dsList.getColumn(i, "DT_DISPOSE"));
        				this.dsSave.setColumn(nrow, "CD_CAR_FUEL", this.dsList.getColumn(i, "CD_CAR_FUEL"));
        				this.dsSave.setColumn(nrow, "DS_INSURANCE", this.dsList.getColumn(i, "DS_INSURANCE"));
        				this.dsSave.setColumn(nrow, "DT_FR_INSURANCE", this.dsList.getColumn(i, "DT_FR_INSURANCE"));
        				this.dsSave.setColumn(nrow, "DT_TO_INSURANCE", this.dsList.getColumn(i, "DT_TO_INSURANCE"));
        				this.dsSave.setColumn(nrow, "AM_CAR_INSURANCE", this.dsList.getColumn(i, "AM_CAR_INSURANCE"));
        				this.dsSave.setColumn(nrow, "YN_RENT", this.dsList.getColumn(i, "YN_RENT"));
        				this.dsSave.setColumn(nrow, "YN_ENVIRONMENT", this.dsList.getColumn(i, "YN_ENVIRONMENT"));
        				this.dsSave.setColumn(nrow, "DT_CAR_CHECK", this.dsList.getColumn(i, "DT_CAR_CHECK"));
        				this.dsSave.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        				this.dsSave.setColumn(nrow, "ID_USER", this.dsList.getColumn(i, "ID_USER"));
        				this.dsSave.setColumn(nrow, "QN_INWON", this.dsList.getColumn(i, "QN_INWON"));
        				this.dsSave.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        				this.dsSave.setColumn(nrow, "YN_GROUPWARE", this.dsList.getColumn(i, "YN_GROUPWARE"));
        				this.dsSave.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "YR_BUY", this.dsList.getColumn(i, "YR_BUY"));
        				this.dsSave.setColumn(nrow, "AM_BUY", this.dsList.getColumn(i, "AM_BUY"));
        				this.dsSave.setColumn(nrow, "DS_USE", this.dsList.getColumn(i, "DS_USE"));
        				this.dsSave.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        				this.dsSave.setColumn(nrow, "TY_AUTH", this.FormInfo.TY_AUTH);
        				this.dsSave.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
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
        };

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        	return true;
        };


        /************************************************************************
         * 서브 버튼 이벤트
         ************************************************************************/

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.");
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
        		this.fnSetButton();

        	} else if(svcID == "save") {
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
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow){

        	switch(id) {
        		case "ccfCD_CORP":
        			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			break;
        		case "ccfCD_DEPT":
        			var sCD_CORP = this.ccfCD_CORP.form.CDTextBox.value;
        			if (this.gfnIsNull(sCD_CORP)) {
        				this.gfnAlert("법인을 먼저 입력하세요.");
        				return false;
        			}
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.gfnNvl(this.ccfCD_DEPT.form.CDTextBox.value, this.AuthClient.CD_DEPT));
        			dsUserParam.setColumn(nrow, "CD_CORP", sCD_CORP);
        			dsUserParam.setColumn(nrow, "YN_CURRENT", "N");
        			break;
        		default:
        	}
        	return true;
        };

        this.fn_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData; //this.ccfCD_DEPT_ORG.form.SelectedData; 둘다 사용가능

        	switch(id) {
        		case "ccfCD_CORP":
        			this.ccfCD_DEPT.form.fnCodeFindClear();
        			break;
        		case "ccfCD_DEPT":
        			break;
        		default:
        	}
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	if (id == "DAX_CFCORP_CODEFIND") { //법인
        		;
         	}
        	else if (id == "DAX_CFDEPT") { //부서
        		var sCD_CORP = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        		if(this.gfnIsNull(sCD_CORP)) {
        			this.gfnAlert("법인을 먼저 입력하세요.");
        			return false;
        		}
         		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT"), this.AuthClient.CD_DEPT));
        		dsUserParam.setColumn(nrow, "CD_CORP", sCD_CORP);
        		dsUserParam.setColumn(nrow, "YN_CURRENT", "N");
        	}
        	else if(id == "DAX_CFBASEINFO_ALL"){ //사용자
        		var sCD_CORP = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        		if(this.gfnIsNull(sCD_CORP)) {
        			this.gfnAlert("법인을 먼저 입력하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP", sCD_CORP);
         		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT"), this.AuthClient.CD_DEPT));
        		dsUserParam.setColumn(nrow, "YN_CORP", "Y");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        	}
        	return true;
        };

        this.fnGrid_ExpandUp = function(obj, e) {

        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);

        	if(colnm == "DS_FILE_NAME") {
        		// 최초 작성시엔 NO_SEQ가 없기 때문에 저장 후에 파일 첨부를 진행하여야 함.
        		// CD_DIR에 넣어줄 값이 없기에 저장 후 진행!
        		if(this.gfnGetFlag(this.dsList, e.row) == "I"){
        			this.gfnAlert("저장 후 파일첨부 진행.");
        			return false;
        		}

        		var fileManager = {};
        		fileManager.CD_GUBUN = "DA50";
        		fileManager.CD_DIR = [this.dsList.getColumn(e.row, "CD_CORP"), this.dsList.getColumn(e.row, "CD_CAR")];
        		fileManager.IS_READONLY = false;
        		this.gfnFileManager(fileManager, "fnFileCallback");
        	}
        }

        this.fnFileCallback = function(strID, val) {
        	// val.IsChange : 변경여부, val.Cnt : 파일개수

        	// 변경시 조회를 다시 하거나
        // 	if(val.IsChange == true) {
        // 		this.FormBtns.Select.click();
        // 	}

        	// 파일개수를 다시 셋팅
        	this.dsList.set_enableevent(false);
        	this.dsList.setColumn(this.dsList.rowposition, "FILE_CNT", val.Cnt);
        	if(val.Cnt == 0) {
        		this.dsList.setColumn(this.dsList.rowposition, "DS_FILE_NAME", "첨부");
        		this.dsList.setColumn(this.dsList.rowposition, "DS_FILE_PATH", "");
        	} else {
        		this.dsList.setColumn(this.dsList.rowposition, "DS_FILE_NAME", "첨부(" + val.Cnt + ")");
        	}
        	this.dsList.set_enableevent(true);
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



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAM_CAR.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
