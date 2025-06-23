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
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAGPR_WORKDAY_DEPT_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DAGPR_WORKDAY_DEPT_COMBO</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YR_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TERM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDay", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_DAY\" type=\"string\" size=\"32\"/><Column id=\"DS_WEEK\" type=\"string\" size=\"32\"/><Column id=\"DS_DAY\" type=\"string\" size=\"32\"/><Column id=\"SN_DAY\" type=\"string\" size=\"32\"/><Column id=\"WK_DAY\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTERM", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_WORK_START\" type=\"STRING\" size=\"256\"/><Column id=\"DT_WORK_END\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staYR_WORK00","0.0","10.0","66.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("기한");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTERM","staYR_WORK00:0.0","10.0","232","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsTERM");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","0.0","staYR_WORK00:10.0","66.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:0.0","staYR_WORK00:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFDEPT");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP00","0.0","10.0","66.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYR_WORK","ccfCD_CORP:0.0","10.0","66.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYR_BASE","staYR_WORK:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","ccfCD_DEPT:0.0","staYR_WORK00:10.0","66.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","staYR_WORK00:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtID_PERSON","ccfID_SABUN:0.0","staYR_WORK00:10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_enable("false");
            obj.set_visible("false");
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

            obj = new BindItem("item2","divSearch.form.ctclYR_BASE.form.TextBox","value","dsSearch","YR_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboTERM","value","dsSearch","CD_TERM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.edtID_PERSON","value","dsSearch","ID_PERSON");
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
        this.registerScript("DAG_WORKDAY_PLAN_DEPT.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.fv_nSize = 60;

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

        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "YR_BASE", today.substr(0,6));


        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        // 	this.ccfCD_DEPT.form.CDTextBox.set_value(this.AuthClient.CD_DEPT);
        // 	this.ccfCD_DEPT.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);

        //
        // 	//20210708
        // 	//GR_SEARCH = 1인 경우에 법인 ENABLE성명 ENABLE
        // 	//GR_SEARCH = 2인 경우에 법인 DISABLE 성명 ENABLE
        // 	//GR_SEARCH > 2인 경우에 법인 DISABLE 성명 DISABLE
        // 	if(this.FormInfo.GR_SEARCH == "1"){
        // 		this.ccfCD_CORP.set_enable(true);
        // 	}
        // 	else if(this.FormInfo.GR_SEARCH == "2"){
        // 		this.ccfCD_CORP.set_enable(false);
        // 	}
        // 	else if(this.FormInfo.GR_SEARCH > "2"){
        // 		this.ccfCD_CORP.set_enable(false);
        // 	}
        //


        // 	//헤더 뭐지
         	this.divData.form.objGrid.mergeContentsCell( "head", 0, 32, 0, 38, 32, false); //4주
         	this.divData.form.objGrid.mergeContentsCell( "head", 0, 24, 0, 30, 24, false); //3주
         	this.divData.form.objGrid.mergeContentsCell( "head", 0, 16, 0, 22, 16, false); //2주
         	this.divData.form.objGrid.mergeContentsCell( "head", 0, 8, 0, 14, 8, false); //1주

         	this.fnSetGridTitleInit();
        // 	this.fv_nSize = this.dxGrid.getFormatColProperty(this.dxGrid.getBindCellIndex("body", "DS_11"), "size");
        // 	trace("this.fv_nSize", this.fv_nSize);
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
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;
        	this.ctclYR_BASE = this.divSearch.form.ctclYR_BASE;
        	this.edtID_PERSON = this.divSearch.form.edtID_PERSON;
        	this.cboTERM = this.divSearch.form.cboTERM;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAG_WORKDAY_PLAN_DEPT");

        	//this.dxGrid.set_selecttype("cell");
        	//this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	//this.dxGrid.addEventHandler("oncelldblclick", this.fnGrid_CellDblclick, this);


        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("DT_WORK_START", "string");
        	this.dsSelect.addColumn("DT_WORK_END", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("ID_PERSON", "int");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("GR_CORP", "string");
        	this.dsSelect.addColumn("GR_DEPT", "string");
        	this.dsSelect.addColumn("ID_USER", "string");

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_CORP", "string");
        	this.dsCombo.addColumn("YY_BASE", "string");
        	this.dsCombo.addColumn("GR_SEARCH", "string");
        	this.dsCombo.addColumn("GR_CORP", "string");
        	this.dsCombo.addColumn("GR_USER", "string");
        }


        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        //콤보
        this.fnSelectCombo = function() {
        	//trace("fnSelectCombo>>>111");


        	var sCD_CORP = this.dsSearch.getColumn(0,"CD_CORP");
        // 	if (this.gfnIsNull(sCD_CORP)) {
        // 		this.fnVaidateCallback = function() {
        // 			this.ccfCD_CORP.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("법인을 입력하세요.", "fnVaidateCallback");
        // 		return;
        // 	}
        	var sYR_BASE= this.dsSearch.getColumn(0,"YR_BASE");
        // 	if (this.gfnIsNull(sYR_BASE)) {
        // 		this.fnVaidateCallback = function() {
        // 			this.ctclYR_BASE.form.TextBox.setFocus();
        // 		}
        // 		this.gfnAlert("년도를 입력하세요.", "fnVaidateCallback");
        // 		return;
        // 	}

        	if (this.gfnIsNull(sCD_CORP) || this.gfnIsNull(sYR_BASE)) {
        		return;
        	}

        	//trace("fnSelectCombo>>>222");

        	this.dsCombo.clearData();
        	this.dsCombo.addRow();

        	this.dsCombo.setColumn(0, "CD_CORP", sCD_CORP);
        	this.dsCombo.setColumn(0, "YY_BASE", sYR_BASE);
        	this.dsCombo.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsCombo.setColumn(0, "GR_CORP", this.AuthClient.CD_CORP);
        	this.dsCombo.setColumn(0, "GR_USER", this.AuthClient.ID_USER);


        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTERM=combo0";
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
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	var nTermSelectedRow = this.fnGetTermSelectedRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.gfnNvl(this.dsSearch.getColumn(0, "CD_CORP"),""));
        	this.dsSelect.setColumn(0, "DT_WORK_START", this.gfnNvl(this.dsTERM.getColumn(nTermSelectedRow, "DT_WORK_START"),""));
        	this.dsSelect.setColumn(0, "DT_WORK_END", this.gfnNvl(this.dsTERM.getColumn(nTermSelectedRow, "DT_WORK_END"),""));
        	this.dsSelect.setColumn(0, "CD_DEPT", this.gfnNvl(this.dsSearch.getColumn(0, "CD_DEPT"),""));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.gfnNvl(this.dsSearch.getColumn(0, "ID_SABUN"),""));
        	this.dsSelect.setColumn(0, "ID_PERSON", this.gfnNvl(this.dsSearch.getColumn(0, "ID_PERSON"),""));
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "GR_CORP", this.AuthClient.CD_CORP);
        	this.dsSelect.setColumn(0, "GR_DEPT", this.AuthClient.CD_DEPT);
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);


        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsDay=select0 dsList=select1";
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

        this.fnGetTermSelectedRow = function(){
        	var CD_TERM = this.dsSearch.getColumn(0, "CD_TERM");
        	if(this.gfnIsNull(CD_TERM)) return -9;

        	//trace("CD_TERM", CD_TERM);
        	var nFindRow =  this.dsTERM.findRowExpr("CD_CODE == '" + CD_TERM + "'");
        	//trace("nFindRow", nFindRow);
        	return nFindRow;
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {


        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크

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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_CORP"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인을 입력하세요.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0,"YR_BASE"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ctclYR_BASE.form.TextBox.setFocus();
        		}
        		this.gfnAlert("년도를 입력하세요.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_TERM"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.cboTERM.setFocus();
        		}
        		this.gfnAlert("기한을 입력하세요.", "fnVaidateCallback");
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
        	if (svcID == "combo") {
        		this.cboTERM.set_index(0);

        	} else if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		this.fnSetGridHead();

        	}
        }



        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if(id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}
        	else if (id == "ccfCD_DEPT") {
        		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			this.gfnAlert("법인코드를 먼저 입력하세요.");
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "YN_CURRENT", "N");
        	}
        	else if(id == "ccfID_SABUN"){
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "YN_CORP", "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");   // 재직구분
        	}

        	return true;
        };


        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(id == "ccfCD_CORP") {
        		this.ccfCD_DEPT.form.fnCodeFindClear();
        		this.ccfID_SABUN.form.fnCodeFindClear();
        		this.edtID_PERSON.set_value("");

        	}else if(id == "ccfCD_DEPT") {
        		this.ccfID_SABUN.form.fnCodeFindClear();
        		this.edtID_PERSON.set_value("");

        	} else if(id == "ccfID_SABUN") {
        		if(arr.length > 0) {
        			this.ccfCD_CORP.form.CDTextBox.set_value(codeFindData[0]["CD_CORP"]);
        			this.ccfCD_CORP.form.DSTextBox.set_value(codeFindData[0]["DS_CORP"]);
        			this.dsSearch.set_enableevent(false);
        			this.edtID_PERSON.set_value(codeFindData[0]["ID_PERSON"]);
        			this.dsSearch.set_enableevent(true);
        		}

        	}
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		if(e.columnid == "CD_CORP"||e.columnid == "YR_BASE"){
        			this.fnSelectCombo();
        		}
        	}
        };

        this.fnSetGridHead = function(){

         	this.fnSetGridTitleInit();

        	this.dsDay.set_filterstr("DT_DAY != null");
        	this.dsDay.set_keystring("S:DT_DAY");

        	var nCellIdx = 16;
        	for(var i=0;i<this.dsDay.rowcount;i++){
        		var sDT_DAY = this.dsDay.getColumn(i, "DT_DAY");
        		if(this.gfnIsNull(sDT_DAY)) continue;

        		var sTITLE = this.gfnRight(sDT_DAY, 2);
        		nCellIdx++;
        		this.divData.form.objGrid.setCellProperty("head", nCellIdx, "text", sTITLE);
        	}

        	this.dsDay.set_filterstr();

        // 	this.fnSetGridCol();
        }

        this.fnSetGridTitleInit = function(){
        	for(var i=17;i<=44;i++){
        		this.divData.form.objGrid.setCellProperty("head", i, "text", "");
        	}
        }



        this.divData_objGrid_onheadclick = function(obj,e)
        {
        // 	trace("row", e.row);
        //  	trace("cell", e.cell);
        //  	trace("col", e.col);
        };


        this.fnSetGridCol = function(){
        	var sYM_BASE = this.dsSearch.getColumn(0, "YM_BASE");
        	var nMax = 0;
        	for(var i=0;i<this.dsDay.rowcount;i++){
        		var sDT_DAY = this.dsDay.getColumn(i, "DT_DAY");
        		if(this.gfnIsNull(sDT_DAY)) continue;

        		var sYY = this.gfnLeft(sDT_DAY, 6);

        		if( sYY != sYM_BASE) continue;

        		var sDS_WEEK = this.dsDay.getColumn(i, "DS_WEEK");
        		if(nMax < parseInt(sDS_WEEK)){
        			nMax = parseInt(sDS_WEEK);
        		}
        	}
        // 	trace("nMax", nMax);
        // 	this.fnSetGridColVisible(5, true);
        // 	this.fnSetGridColVisible(6, true);
        // 	for(var nWeek=nMax+1;nWeek<=6;nWeek++){
        // 		this.fnSetGridColVisible(nWeek, false);
        // 	}
        }

        // this.fnSetGridColVisible = function(nWeek, bVisible){
        // 	var nSize = 0;
        // 	if(bVisible){
        // 		nSize = this.fv_nSize;
        // 	}
        //
        // 	this.divData.form.objGrid.set_enableredraw(false);
        // 	if(nWeek == 5){
        // 		//col   39 ~ 46
        // 		for(var nCol = 39;nCol<=46;nCol++){
        // 			this.dxGrid.setFormatColProperty(nCol, "size", nSize);
        // 		}
        // 	}
        // 	if(nWeek == 6){
        // 		//col   47 ~ 54
        // 		for(var nCol = 47;nCol<=54;nCol++){
        // 			this.dxGrid.setFormatColProperty(nCol, "size", nSize);
        // 		}
        // 	}
        // 	this.divData.form.objGrid.set_enableredraw(true);
        // }




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.staCD_CORP00.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfCD_CORP.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.objGrid.addEventHandler("onheadclick",this.divData_objGrid_onheadclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAG_WORKDAY_PLAN_DEPT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
