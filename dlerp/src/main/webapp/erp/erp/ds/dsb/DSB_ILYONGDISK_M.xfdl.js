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
            this.set_titletext("일용근로소득지급명세서");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTable", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DSBPR_ILYONGDISK_LIST_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DSBPR_ILYONGDISK_LIST_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DSBPR_ILYONGDISK_LIST_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DSBPR_ILYONGDISK_LIST_DELETE</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DSBPR_ILYONGDISK_LIST_CREATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_QUARTER", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">1</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"VALUE\">2</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"VALUE\">3</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"VALUE\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YY_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_QUARTER\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0","1400","46.0",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DSX_CFCORP");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYY_BASE","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("귀속년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYY_BASE","staYY_BASE:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYY_BASE","staYY_BASE:10","10","60","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_QUARTER","ctclYY_BASE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("귀속분기");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCD_QUARTER","staCD_QUARTER:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_innerdataset("dsCD_QUARTER");
            obj.set_visible("false");
            obj.set_text("1");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDSX_CFSITE","cboCD_QUARTER:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("현장코드");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staDSX_CFSITE:0.0","10.0","253","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DSX_CFSITE");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","10",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_DEP","43","10","0","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsYN_DEP");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclYY_BASE.form.TextBox","value","dsSearch","YY_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboCD_QUARTER","value","dsSearch","CD_QUARTER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_SITE.form.DSTextBox","value","dsSearch","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DSB_ILYONGDISK_M.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetParameter();
        	this.fnSetEvent();

        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        // 	this.ccfCD_SITE.form.DSTextBox.set_value(this.AuthClient.DS_SITE);
        // 	this.ccfCD_SITE.form.CDTextBox.set_value(this.AuthClient.CD_SITE);
        // 	if( this.FormInfo.GR_SEARCH  == "1"){
        // 		this.ccfCD_SITE.form.DSTextBox.set_value("");
        // 		this.ccfCD_SITE.form.CDTextBox.set_value("");
        // 	}

         	var sysYear = this.gfnGetDate().substring(0,6);
         	this.divSearch.form.ctclYY_BASE.form.TextBox.set_value(sysYear);

        	this.cboCD_QUARTER.set_index(0);

        	// GR_SEARCH가 2보다 크면.. 법인코드 disable
        	// GR_SEARCH가 7또는 9 인경우 부서코드 disable
        	//trace("GR_SEARCH", this.FormInfo.GR_SEARCH);
        	if( this.FormInfo.GR_SEARCH  >= "2"){
        		this.divSearch.form.ccfCD_CORP.set_enable(false);
        	}

        // 	if(this.FormInfo.GR_SEARCH == "7" || this.FormInfo.GR_SEARCH == "9"){
        // 		this.divSearch.form.ccfCD_SITE.set_enable(false);
        // 	}

        	this.FormBtns.Select.click();

        };

        this.fnSetExtendButton = function() {

        	this.btnCreate = this.gfnFormButtonAdd("Create", "fnCreate", "자료생성");
        	this.btnSingo = this.gfnFormButtonAdd("Singo", "fnSingo", "전자신고");
        	this.btnJigubTotal = this.gfnFormButtonAdd("JigubTotal", "fnJigubTotal", "지급명세제출용인쇄");

        	//this.btnCreate.set_enable(false);
        	//this.btnSingo.set_enable(false);
        	//this.btnJigubTotal.set_enable(false);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	//조회
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	//this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ctclYY_BASE = this.divSearch.form.ctclYY_BASE;
        	this.cboCD_QUARTER = this.divSearch.form.cboCD_QUARTER;

        	//그리드
        	this.dxGrid = this.divData.form.objGrid;
        };

        this.fnSetButton = function() {

        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        }

        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YY_BASE", "string");
        	this.dsSelect.addColumn("CD_QUARTER", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("YY_BASE", "string");
        	this.dsInsert.addColumn("CD_QUARTER", "string");
        	this.dsInsert.addColumn("NO_ID", "string");
        	this.dsInsert.addColumn("YM_JIGUB", "string");
        	this.dsInsert.addColumn("CD_SITE", "string");
        	this.dsInsert.addColumn("DS_HNAME", "string");
        	this.dsInsert.addColumn("TY_FOREIGNER", "string");
        	this.dsInsert.addColumn("NO_TEL1", "string");
        	this.dsInsert.addColumn("YM_WORK", "string");
        	this.dsInsert.addColumn("CT_WORK", "string");
        	this.dsInsert.addColumn("AM_IMGUM", "bigdecimal");
        	this.dsInsert.addColumn("AM_IMGUMNT", "bigdecimal");
        	this.dsInsert.addColumn("AM_SODUK", "bigdecimal");
        	this.dsInsert.addColumn("AM_JUMIN", "bigdecimal");
        	this.dsInsert.addColumn("ID_INSERT", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("YY_BASE", "string");
        	this.dsUpdate.addColumn("CD_QUARTER", "string");
        	this.dsUpdate.addColumn("NO_ID", "string");
        	this.dsUpdate.addColumn("YM_JIGUB", "string");
        	this.dsUpdate.addColumn("YM_WORK", "string");
        	this.dsUpdate.addColumn("CT_WORK", "string");
        	this.dsUpdate.addColumn("AM_IMGUM", "bigdecimal");
        	this.dsUpdate.addColumn("AM_IMGUMNT", "bigdecimal");
        	this.dsUpdate.addColumn("AM_SODUK", "bigdecimal");
        	this.dsUpdate.addColumn("AM_JUMIN", "bigdecimal");
        	this.dsUpdate.addColumn("CD_SITE", "string");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_CORP", "string");
        	this.dsDelete.addColumn("YY_BASE", "string");
        	this.dsDelete.addColumn("CD_QUARTER", "string");
        	this.dsDelete.addColumn("NO_ID", "string");
        	this.dsDelete.addColumn("CD_SITE", "string");
        	this.dsDelete.addColumn("YM_JIGUB", "string");

        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("CD_CORP", "string");
        	this.dsCreate.addColumn("YY_BASE", "string");
        	this.dsCreate.addColumn("CD_QUARTER", "string");
        	this.dsCreate.addColumn("CD_SITE", "string");
        	this.dsCreate.addColumn("ID_INSERT", "string");

        }

        this.fnSetEvent = function() {
         	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
         	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	//this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	//this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DS", "DSB_ILYONGDISK");

        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        }

        this.fnSearchInit = function(id) {
        	this.gfnSetFormStatus(this);
        };

        this.fnCallback = function(svcID, errorCode, errorMsg) {

        	if(svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	} else if(svcID == "save") {

        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}

        	} else if(svcID == "create") {
        		trace(errorCode);
        		if (errorCode == 0) {
        			this.gfnAlert("자료생성이 완료되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}

        	}

        }

        this.fnSelectValidation = function() {

        	if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		this.gfnAlert("소속법인을 입력하세요.");
        		return false;
        	}

        	if (this.ctclYY_BASE.form.TextBox.value == "") {
        		this.ctclYY_BASE.form.TextBox.setFocus();
        		this.gfnAlert("귀속년도를 입력하세요.");
        		return false;
        	}

        // 	if(this.gfnIsNull(this.ccfCD_SITE.form.CDTextBox.value)) {
        // 		this.ccfCD_SITE.form.CDTextBox.setFocus();
        // 		this.gfnAlert("현장코드을 입력하세요.");
        // 		return false;
        // 	}

        	return true;
        }

        this.fnReplace = function(orgText, fromSplit, toSplit){
        	if(this.gfnIsNull(orgText)) return "";

        	var newSplit = "";
        	if(!this.gfnIsNull(toSplit)) newSplit = toSplit;

        	var arrResult = orgText.split(fromSplit);
        	var sResult = arrResult.join(newSplit);
        	return sResult;
        }

        this.fnSaveValidation = function() {

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);

        		if (flag == "" || flag == "D") continue;

        		if (flag == "I" || flag == "U") {
        			if (!this.gfnIsSSN(this.fnReplace(this.dsList.getColumn(i, "NO_ID"), "-", ""))) {
        				this.gfnAlert("주민번호가 틀렸습니다.");
        				return false;
        			}

        			if (this.gfnIsNull(this.dsList.getColumn(i, "CT_WORK")) || this.dsList.getColumn(i, "CT_WORK") == "0") {
        				this.gfnAlert("근무일수는 0이거나 공란일수없습니다.");
        				return false;
        			}

        			if (this.gfnIsNull(this.dsList.getColumn(i, "AM_IMGUM")) || this.dsList.getColumn(i, "AM_IMGUM") == "0") {
        				this.gfnAlert("총지급액은 0이거나 공란일수없습니다.");
        				return false;
        			}
        		}
        	}

        	return true;
        }

        this.fnSelect = function() {

        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.gfnTrim(this.ccfCD_CORP.form.CDTextBox.value));
        	//this.dsSelect.setColumn(0, "CD_SITE", this.gfnTrim(this.ccfCD_SITE.form.CDTextBox.value));
        	this.dsSelect.setColumn(0, "YY_BASE", this.ctclYY_BASE.form.TextBox.value);
        	this.dsSelect.setColumn(0, "CD_QUARTER", this.cboCD_QUARTER.value);

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

        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid, "top");

        	this.dsList.set_enableevent(false);
        	this.dsList.setColumn(nrow, "TY_FOREIGNER", "1");
        	this.dsList.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsList.setColumn(nrow, "DS_SITE", this.dsSearch.getColumn(0, "DS_SITE"));
        	this.dsList.set_enableevent(true);
        }

        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        }

        this.fnSave = function() {
        	if (!this.fnSaveValidation()) return;
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsertMake(nrow, i);
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdateMake(nrow, i);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDeleteMake(nrow, i);
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

        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        this.fnPrint = function() {

        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfCD_CORP") {
         		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "GR_CORP", this.AuthClient.CD_CORP);
         		dsUserParam.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);

        	}else if (id == "ccfCD_SITE"){
        // 		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        // 			this.gfnAlert("법인을 먼저 입력하세요.");
        // 			return false;
        // 		}
        // 		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));	// 법인코드
        // 		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        // 		dsUserParam.setColumn(nrow, "GR_CORP", this.AuthClient.CD_CORP);
        //  		dsUserParam.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	if(id == "ccfCD_CORP") {
        		//this.ccfCD_SITE.form.fnCodeFindClear();
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.fnSetCombo = function(obj,e) {

        };



        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {


        	if(id == "DSX_CFSITE") {
        // 		dsUserParam.setColumn(nrow, "GR_SEARCH", "");
        // 		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        // 		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.text);

        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        			this.gfnAlert("법인을 먼저 입력하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));	// 법인코드
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "GR_CORP", this.AuthClient.CD_CORP);
         		dsUserParam.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);

        	}
        // 	else if(id == "DSX_CFDET_CODE"){
        // 		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        // 	}

        	return true;
        };

        this.dsInsertMake = function(nrow, i) {
        	this.dsInsert.setColumn(nrow, "CD_CORP", this.gfnTrim(this.ccfCD_CORP.form.CDTextBox.value));
        	this.dsInsert.setColumn(nrow, "YY_BASE", this.ctclYY_BASE.form.TextBox.value);
        	this.dsInsert.setColumn(nrow, "CD_QUARTER", this.cboCD_QUARTER.value);
        	this.dsInsert.setColumn(nrow, "NO_ID", this.dsList.getColumn(i, "NO_ID"));
        	this.dsInsert.setColumn(nrow, "YM_JIGUB", this.dsList.getColumn(i, "YM_JIGUB"));
        	this.dsInsert.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        	this.dsInsert.setColumn(nrow, "DS_HNAME", this.dsList.getColumn(i, "DS_HNAME"));
        	this.dsInsert.setColumn(nrow, "TY_FOREIGNER", this.dsList.getColumn(i, "TY_FOREIGNER"));
        	this.dsInsert.setColumn(nrow, "NO_TEL1", this.dsList.getColumn(i, "NO_TEL1"));
        	this.dsInsert.setColumn(nrow, "YM_WORK", this.dsList.getColumn(i, "YM_WORK"));
        	this.dsInsert.setColumn(nrow, "CT_WORK", this.dsList.getColumn(i, "CT_WORK"));
        	this.dsInsert.setColumn(nrow, "AM_IMGUM", this.dsList.getColumn(i, "AM_IMGUM"));
        	this.dsInsert.setColumn(nrow, "AM_IMGUMNT", this.dsList.getColumn(i, "AM_IMGUMNT"));
        	this.dsInsert.setColumn(nrow, "AM_SODUK", this.dsList.getColumn(i, "AM_SODUK"));
        	this.dsInsert.setColumn(nrow, "AM_JUMIN", this.dsList.getColumn(i, "AM_JUMIN"));
        	this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        }

        this.dsUpdateMake = function(nrow, i) {
        	this.dsUpdate.setColumn(nrow, "CD_CORP", this.gfnTrim(this.ccfCD_CORP.form.CDTextBox.value));
        	this.dsUpdate.setColumn(nrow, "YY_BASE", this.ctclYY_BASE.form.TextBox.value);
        	this.dsUpdate.setColumn(nrow, "CD_QUARTER", this.cboCD_QUARTER.value);
        	this.dsUpdate.setColumn(nrow, "NO_ID", this.fnReplace(this.dsList.getColumn(i, "NO_ID"),"-",""));
        	this.dsUpdate.setColumn(nrow, "YM_JIGUB", this.dsList.getColumn(i, "YM_JIGUB"));
        	this.dsUpdate.setColumn(nrow, "YM_WORK", this.dsList.getColumn(i, "YM_WORK"));
        	this.dsUpdate.setColumn(nrow, "CT_WORK", this.dsList.getColumn(i, "CT_WORK"));
        	this.dsUpdate.setColumn(nrow, "AM_IMGUM", this.dsList.getColumn(i, "AM_IMGUM"));
        	this.dsUpdate.setColumn(nrow, "AM_IMGUMNT", this.dsList.getColumn(i, "AM_IMGUMNT"));
        	this.dsUpdate.setColumn(nrow, "AM_SODUK", this.dsList.getColumn(i, "AM_SODUK"));
        	this.dsUpdate.setColumn(nrow, "AM_JUMIN", this.dsList.getColumn(i, "AM_JUMIN"));
        	this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        	this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        }

        this.dsDeleteMake = function(nrow, i) {
        	this.dsDelete.setColumn(nrow, "CD_CORP", this.gfnTrim(this.ccfCD_CORP.form.CDTextBox.value));
        	this.dsDelete.setColumn(nrow, "YY_BASE", this.ctclYY_BASE.form.TextBox.value);
        	this.dsDelete.setColumn(nrow, "CD_QUARTER", this.cboCD_QUARTER.value);
        	this.dsDelete.setColumn(nrow, "NO_ID", this.fnReplace(this.dsList.getColumn(i, "NO_ID"),"-",""));
        	this.dsDelete.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        	this.dsDelete.setColumn(nrow, "YM_JIGUB", this.dsList.getColumn(i, "YM_JIGUB"));
        }

        this.fnCreate = function(obj,e) {
        	this.gfnConfirm("자료를 생성하시겠습니까?\n이전에 생성된 자료는 삭제됩니다.", "fnCreateCallback");
        }

        this.fnCreateCallback = function(strId, val) {
        	if(val) {
        		this.dxGrid.updateToDataset();

        		this.dsCreate.clearData();
        		this.dsCreate.addRow();

        		this.dsCreate.setColumn(0, "CD_CORP", this.gfnTrim(this.ccfCD_CORP.form.CDTextBox.value));
        		this.dsCreate.setColumn(0, "YY_BASE", this.ctclYY_BASE.form.TextBox.value);
        		this.dsCreate.setColumn(0, "CD_QUARTER", this.cboCD_QUARTER.value);
        		//this.dsCreate.setColumn(nrow, "CD_SITE", this.gfnTrim(this.ccfCD_SITE.form.CDTextBox.value));
        		this.dsCreate.setColumn(0, "ID_INSERT", this.AuthClient.ID_USER);

        		if (this.dsCreate.rowcount == 0) return;

        		var strSvcId    = "create";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "create=dsCreate";
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
        }

        this.fnSingo = function(obj,e) {
        	var param = {};

        	param.YY_BASE = this.ctclYY_BASE.form.TextBox.value;
        	param.CD_QUARTER = this.cboCD_QUARTER.value;
        	param.CD_CORP = this.gfnTrim(this.ccfCD_CORP.form.CDTextBox.value);
        	param.DS_CORP = this.gfnTrim(this.ccfCD_CORP.form.DSTextBox.value);
        	param.CD_SITE = ""; //this.gfnTrim(this.ccfCD_SITE.form.CDTextBox.value);
        	param.DS_SITE = ""; //this.gfnTrim(this.ccfCD_SITE.form.DSTextBox.value);
        	param.txtDT_PRINT = this.gfnGetDate().substring(0,8);

        	this.gfnFormOpen("DSB", "DSB_SHINGODISK_DLG_M", "", param);
        }

        this.fnJigubTotal = function(obj,e) {
        	if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		this.gfnAlert("소속법인을 입력하세요.");
        		return false;
        	}

        	var param = {};

        	param.YY_BASE = this.ctclYY_BASE.form.TextBox.value;
        	param.CD_QUARTER = this.cboCD_QUARTER.value;
        	param.CD_CORP = this.gfnTrim(this.ccfCD_CORP.form.CDTextBox.value);
        	param.DS_CORP = this.gfnTrim(this.ccfCD_CORP.form.DSTextBox.value);
        	param.txtDT_PRINT = this.gfnGetDate().substring(0,8);
        	param.txtNO_ID = "";

        	this.gfnFormOpen("DSB", "DSB_JIGUBJOSERPT_DLG_M", "", param);
        }

        this.dsSearch_onvaluechanged = function(obj,e) {
            if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
            }
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccfCD_CORP.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staYY_BASE.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staCD_QUARTER.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.rdoYN_DEP.addEventHandler("onitemchanged",this.rdo00_onitemchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DSB_ILYONGDISK_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
