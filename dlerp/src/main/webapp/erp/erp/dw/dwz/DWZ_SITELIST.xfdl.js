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
            this.set_titletext("프로젝트목록조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWZPR_SITELIST_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWZPR_SITELIST_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_KONG_PRO\" type=\"STRING\" size=\"256\"/><Column id=\"YN_USE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"TY_KONG_PRO\">2</Col><Col id=\"YN_USE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYMList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("공사현황");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfTY_KONG_PRO","staCD_CORP:0.0","10.0","180","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("30");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_CHAIYONG","ccfTY_KONG_PRO:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("관리대상여부");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboYN_USE","staTY_CHAIYONG:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            obj.set_visible("false");
            var divSearch_form_ccboYN_USE_innerdataset = new nexacro.NormalDataset("divSearch_form_ccboYN_USE_innerdataset", obj);
            divSearch_form_ccboYN_USE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_ccboYN_USE_innerdataset);
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ccboYN_USE:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("현장코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfSITE","sta00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_SITE_SEARCH",null,"10.0","200","24.0","5",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
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
            obj = new BindItem("item0","divSearch.form.ccfTY_KONG_PRO.form.CDTextBox","value","dsSearch","TY_KONG_PRO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccboYN_USE","value","dsSearch","YN_USE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfSITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DWZ_SITELIST.xfdl", function() {
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

        	this.divSearch.form.ccfTY_KONG_PRO.form.DSTextBox.set_value("진행");

        	/* hjy
        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SYSTEM) && !this.gfnIsNull(this.getOwnerFrame().DS_SYSTEM)) {
        		this.dsSearch.setColumn(0, "CD_SYSTEM", this.getOwnerFrame().CD_SYSTEM);
        		this.dsSearch.setColumn(0, "DS_SYSTEM", this.getOwnerFrame().DS_SYSTEM);

        		this.FormBtns.Select.click();
        	}
        	*/
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Select.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btn1 = this.gfnFormButtonAdd("btnSite", "fnSite");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfTY_KONG_PRO = this.divSearch.form.ccfTY_KONG_PRO;
        	this.ccfSITE = this.divSearch.form.ccfSITE;
        	this.ccboYN_USE = this.divSearch.form.ccboYN_USE;
        	this.dxGrid = this.divData.form.objGrid;

        	/* hjy
        	this.ccfCD_SYSTEM = this.divSearch.form.ccfCD_SYSTEM;
        	this.ccfCD_DEPT_ORG = this.divSearch.form.ccfCD_DEPT_ORG;
        	this.ctxtDS_UPDEPT = this.divSearch.form.ctxtDS_UPDEPT;
        	this.dxGrid = this.divData.form.objGrid;
        	*/
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfTY_KONG_PRO.CodeFindName = "DZX_CFCODE_COM";

        	this.ccfTY_KONG_PRO.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	//this.ccfTY_KONG_PRO.AfterCDTextChanged = "ccfTY_KONG_PRO_AfterCDTextChanged";

        	/* hjy
        	this.ccfCD_SYSTEM.CodeFindName = "DZX_CFSYSTEM";
        	this.ccfCD_DEPT_ORG.CodeFindName = "DZX_CFDEPT_ORG";
        	this.ccfCD_DEPT_ORG.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT_ORG.AfterCDTextChanged = "ccfCD_DEPT_ORG_AfterCDTextChanged";
        	*/

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWZ_SITELIST");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	// 셀 수정가능 여부
        	//this.dxGrid.EnterCell = "fnGrid_EnterCell";

        	// 셀 변경 후 이벤트
        	//this.dxGrid.AfterEdit = "fnGrid_AfterEdit";

        	// 그리드 코드파인드 설정
        	//this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	// 전체체크박스 체크/해제 이벤트
        	//this.dxGrid.AfterAllCheck = "fnGrid_AfterAllCheck";

        	// BUTTON, BUTTON-IN 처리
        	//this.dxGrid.ExpandUp = "fnGrid_ExpandUp";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("TY_KONG_PRO", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YN_USE", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("DS_SITE", "string");
        	this.dsSave.addColumn("DS_CLIENT", "string");
        	this.dsSave.addColumn("AM_DOCOVOL_PROV", "bigdecimal");
        	this.dsSave.addColumn("RT_SOCOVOL", "bigdecimal");
        	this.dsSave.addColumn("DT_FROM", "string");
        	this.dsSave.addColumn("DT_TO", "string");
        	this.dsSave.addColumn("YN_JOINT", "string");
        	this.dsSave.addColumn("YN_JUGAN", "string");
        	this.dsSave.addColumn("CD_BONBU", "string");
        	this.dsSave.addColumn("TY_SAUPKIND", "string");
        	this.dsSave.addColumn("TY_BALJU", "string");
        	this.dsSave.addColumn("TY_KONG_PRO", "string");
        	this.dsSave.addColumn("YN_USE", "string");
        	this.dsSave.addColumn("AM_SILHENG", "bigdecimal");
        	this.dsSave.addColumn("AM_DOGEUB_PROV", "bigdecimal");
        	this.dsSave.addColumn("AM_DOGEUB_VAT", "bigdecimal");
        	this.dsSave.addColumn("AM_DOCOVOL_PROV", "bigdecimal");
        	this.dsSave.addColumn("AM_DOCOVOL_VAT", "bigdecimal");
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

        	var cd_site = this.dsSearch.getColumn(0, "CD_SITE");
        	if(cd_site != null && cd_site != "")
        	{
        		cd_site += ",";
        	}

        	cd_site += this.divSearch.form.ctxtCD_SITE_SEARCH.text;

        	//this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	if(!this.gfnIsNull(cd_site)){
        		this.dsSelect.setColumn(0, "CD_SITE", cd_site);
        	}else{
        		this.dsSelect.setColumn(0, "CD_SITE", "");
        	}

        	this.dsSelect.setColumn(0, "TY_KONG_PRO", this.dsSearch.getColumn(0, "TY_KONG_PRO"));
        	this.dsSelect.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSelect.setColumn(0, "YN_USE", this.dsSearch.getColumn(0, "YN_USE"));
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);

        	//var AuthClient = this.gfnDataSetToJson(this.objApp.gdsUserInfo, this.objApp.gdsUserInfo.rowposition);
        	//this.dsSelect.setColumn(0, "CD_DEPT", AuthClient.CD_DEPT);
        	this.dsSelect.setColumn(0, "CD_DEPT", this.AuthClient.CD_DEPT);

        	//var objApp = pForm.gfnGetApplication();
        	//this.dsSelect.setColumn(0, "CD_DEPT", objApp.gvUserInfo.CD_DEPT);
        	//alert(AuthClient.CD_DEPT);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0 dsYMList=select1";
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
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current

        	/*
        	this.dsList.set_enableevent(false);
        	this.dsList.setColumn(nrow, "CODEFIND", this.ccfCD_SYSTEM.form.CDTextBox.value);
        	this.dsList.setColumn(nrow, "DS_CODEFIND", this.ccfCD_SYSTEM.form.DSTextBox.value);
        	this.dsList.set_enableevent(true);
        	*/
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

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "DS_SITE", this.dsList.getColumn(i, "DS_SITE"));
        				this.dsSave.setColumn(nrow, "DS_CLIENT", this.dsList.getColumn(i, "DS_CLIENT"));
        				this.dsSave.setColumn(nrow, "AM_DOCOVOL_PROV", this.dsList.getColumn(i, "AM_DOCOVOL_PROV"));
        				this.dsSave.setColumn(nrow, "RT_SOCOVOL", this.dsList.getColumn(i, "RT_SOCOVOL"));
        				this.dsSave.setColumn(nrow, "DT_FROM", this.dsList.getColumn(i, "DT_FROM"));
        				this.dsSave.setColumn(nrow, "DT_TO", this.dsList.getColumn(i, "DT_TO"));
        				this.dsSave.setColumn(nrow, "YN_JOINT", this.dsList.getColumn(i, "YN_JOINT"));
        				this.dsSave.setColumn(nrow, "YN_JUGAN", this.dsList.getColumn(i, "YN_JUGAN"));
        				this.dsSave.setColumn(nrow, "CD_BONBU", this.dsList.getColumn(i, "CD_BONBU"));
        				this.dsSave.setColumn(nrow, "TY_SAUPKIND", this.dsList.getColumn(i, "TY_SAUPKIND"));
        				this.dsSave.setColumn(nrow, "TY_BALJU", this.dsList.getColumn(i, "TY_BALJU"));
        				this.dsSave.setColumn(nrow, "TY_KONG_PRO", this.dsList.getColumn(i, "TY_KONG_PRO"));
        				this.dsSave.setColumn(nrow, "YN_USE", this.dsList.getColumn(i, "YN_USE"));
        				this.dsSave.setColumn(nrow, "AM_SILHENG", this.dsList.getColumn(i, "AM_SILHENG"));
        				this.dsSave.setColumn(nrow, "AM_DOGEUB_PROV", this.dsList.getColumn(i, "AM_DOGEUB_PROV"));
        				this.dsSave.setColumn(nrow, "AM_DOGEUB_VAT", this.dsList.getColumn(i, "AM_DOGEUB_VAT"));
        				this.dsSave.setColumn(nrow, "AM_DOCOVOL_PROV", this.dsList.getColumn(i, "AM_DOCOVOL_PROV"));
        				this.dsSave.setColumn(nrow, "AM_DOCOVOL_VAT", this.dsList.getColumn(i, "AM_DOCOVOL_VAT"));
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
        	/*
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SYSTEM"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SYSTEM.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("시스템을 입력하세요.", "fnVaidateCallback");
        	}
        	*/
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

        		this.fnYMChange();
        	}
        	else if(svcID == "save") {
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

        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfTY_KONG_PRO") {

        // 		if (this.gfnIsNull(this.ccfCD_DEPT_ORG.form.CDTextBox.value)) {
        // 			this.gfnAlert("서브모듈을 먼저 입력하세요.");
        // 			return false;
        // 		}
        		dsUserParam.setColumn(nrow, "CD_SYSTEM", "DW");
        		dsUserParam.setColumn(nrow, "CD_TYPE", "07");
        		dsUserParam.setColumn(nrow, "DS_ETC1", "");
        		dsUserParam.setColumn(nrow, "DS_ETC2", "");
        		dsUserParam.setColumn(nrow, "DS_ETC3", "");
        	}
        	return true;
        }

        // 코드파인드 값의 기본값 코드,명 정보 외에 값을 내려받을때 사용하는 함수
        this.ccfTY_KONG_PRO_AfterCDTextChanged = function(id) {
        	// 코드,명칭 외 추가 컬럼 처리
        	var arr = this.ccfTY_KONG_PRO.form.SelectedData;

        	/* hjy
        	var ds_updept = "";
        	if (arr.length > 0) {
        		ds_updept = arr[0]["DS_UPDEPT"];
        	}

        	this.ctxtDS_UPDEPT.set_value(ds_updept);
        	*/
        }



        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.divData_objGrid_oncelldblclick = function(obj,e)
        {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, e.cell);


        	if(colnm == "CT_HADO"){	// 발주의뢰
        		var param = {};

        		param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        		param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");
        		param.TY_WRK = "SU,MM";

        		// 화면 오픈.
        		this.gfnFormOpen("DWO", "DWZ_PRLIST", "", param);
        	}else if(colnm == "CT_MM"){	// 발주의뢰
        		var param = {};

        		param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        		param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");
        		param.TY_WRK = "SU,MM";

        		// 화면 오픈.
        		this.gfnFormOpen("DWZ", "DWZ_PRLIST", "", param);
        	}else if(colnm == "GT_HADO" || colnm == "GT_MM"){	// 계약
        		var param = {};

        		param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        		param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");

        		// 화면 오픈.
        		this.gfnFormOpen("DCB", "DCB_ORDERPLANPROGRESS", "", param);
        	}else if(colnm == "CT_02C"){	// 기성
        		var param = {};

        		param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        		param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");
        		param.YM_WORK = this.dsYMList.getColumn(0, "YYYYMM_02");
        		param.NO_DGR = "01";
        		param.DS_CONTMETHOD = "SU";

        		// 화면 오픈.
        		this.gfnFormOpen("DWB", "DWB_HDLDGRREQ", "", param);
        	}else if(colnm == "CT_02M"){	// 기성
        		var param = {};

        		param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        		param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");
        		param.YM_WORK = this.dsYMList.getColumn(0, "YYYYMM_02");
        		param.NO_DGR = "01";
        		param.DS_CONTMETHOD = "MM";

        		// 화면 오픈.
        		this.gfnFormOpen("DWB", "DWB_HDLDGRREQ", "", param);
        	}else if(colnm == "CT_02T"){	// 기성
        		var param = {};

        		param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        		param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");
        		param.YM_WORK = this.dsYMList.getColumn(0, "YYYYMM_02");
        		param.NO_DGR = "01";
        		param.DS_CONTMETHOD = "";

        		// 화면 오픈.
        		this.gfnFormOpen("DWB", "DWB_HDLDGRREQ", "", param);
        	}else if(colnm == "CT_01C"){	// 기성
        		var param = {};

        		param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        		param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");
        		param.YM_WORK = this.dsYMList.getColumn(0, "YYYYMM_01");
        		param.NO_DGR = "01";
        		param.DS_CONTMETHOD = "SU";

        		// 화면 오픈.
        		this.gfnFormOpen("DWB", "DWB_HDLDGRREQ", "", param);
        	}else if(colnm == "CT_01M"){	// 기성 5월
        		var param = {};

        		param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        		param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");
        		param.YM_WORK = this.dsYMList.getColumn(0, "YYYYMM_01");
        		param.NO_DGR = "01";
        		param.DS_CONTMETHOD = "MM";

        		// 화면 오픈.
        		this.gfnFormOpen("DWB", "DWB_HDLDGRREQ", "", param);
        	}else if(colnm == "CT_01T"){	// 기성
        		var param = {};

        		param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        		param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");
        		param.YM_WORK = this.dsYMList.getColumn(0, "YYYYMM_01");
        		param.NO_DGR = "01";
        		param.DS_CONTMETHOD = "";

        		// 화면 오픈.
        		this.gfnFormOpen("DWB", "DWB_HDLDGRREQ", "", param);
        	}else if(colnm == "CT_00C"){	// 기성
        		var param = {};

        		param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        		param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");
        		param.YM_WORK = this.dsYMList.getColumn(0, "YYYYMM_00");
        		param.NO_DGR = "01";
        		param.DS_CONTMETHOD = "SU";

        		// 화면 오픈.
        		this.gfnFormOpen("DWB", "DWB_HDLDGRREQ", "", param);
        	}else if(colnm == "CT_00M"){	// 기성
        		var param = {};

        		param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        		param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");
        		param.YM_WORK = this.dsYMList.getColumn(0, "YYYYMM_00");
        		param.NO_DGR = "01";
        		param.DS_CONTMETHOD = "MM";

        		// 화면 오픈.
        		this.gfnFormOpen("DWB", "DWB_HDLDGRREQ", "", param);
        	}else if(colnm == "CT_00T"){	// 기성
        		var param = {};

        		param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        		param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");
        		param.YM_WORK = this.dsYMList.getColumn(0, "YYYYMM_00");
        		param.NO_DGR = "01";
        		param.DS_CONTMETHOD = "";

        		// 화면 오픈.
        		this.gfnFormOpen("DWB", "DWB_HDLDGRREQ", "", param);
        	}else if(colnm == "YM_MAGAM"){	// 기성
        		var param = {};

        		param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        		param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");
        		param.YM_WORK = this.dsYMList.getColumn(0, "YYYYMM_00").substring(0, 4);

        		// 화면 오픈.
        		this.gfnFormOpen("DWD", "DWD_SITEMAGAM", "", param);
        	}else{
        		this.fnSite();
        	}

        };

        this.fnGrid_RowCellChanged = function(obj,e)
        {
        	var colmn = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, e.cell);
        	var rows = obj.getSelectedDatasetRows();
        	var sum = 0;

        	for(var i = 0; i < rows.length; i++) {
        		var am = this.dsList.getColumn(rows[i], colmn);

        		if(!this.gfnIsNull(am)) {
        			sum += am;
        		}
        	}

        	var colDS_SITE = this.dxGrid.getBindCellIndex("body", "DS_SITE");

        	if(sum > 0){
        		this.dxGrid.setCellProperty("summ", colDS_SITE, "text", "선택합계=" + this.gfnAppendComma(sum));
        	}else{
        		this.dxGrid.setCellProperty("summ", colDS_SITE, "text", "");
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
        	}
        };


         // 현장정보관리 버튼 클릭시 팝업화면 호출
        this.fnSite = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        	param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
             this.gfnFormOpen("DWZ", "DWZ_SITE", "", param);
        	//this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWZ_SITE", "", param);
        }

        this.fnYMChange = function(){
        	var idx0 = "";
        	var idx1 = "";
        	var idx2 = "";
        	var strYM = "";

        	for(var i=0; i < this.dxGrid.getCellCount("head"); i++) {
        		if(this.dxGrid.getCellText(-1,i) == "7월"){
        			idx0 = i;
        			strYM = this.dsYMList.getColumn(0, "YYYYMM_02");

        			this.dxGrid.setCellProperty("head", idx0, "text", strYM.substr(strYM.length-2, 2)+"월");

        			//22
        		}else if(this.dxGrid.getCellText(-1,i) == "8월"){
        			idx1 = i;
        			strYM =  this.dsYMList.getColumn(0, "YYYYMM_01");

        			this.dxGrid.setCellProperty("head", idx1, "text", strYM.substr(strYM.length-2, 2)+"월");
        			//23
        		}else if(this.dxGrid.getCellText(-1,i) == "9월"){
        			idx2 = i;
        			strYM =  this.dsYMList.getColumn(0, "YYYYMM_00");

        			this.dxGrid.setCellProperty("head", idx2, "text", strYM.substr(strYM.length-2, 2)+"월");
        			//24
        		}
        	}
        }

        /*

        	아래부터는 현재 미사용

        */


        //프로젝트 고급검색 옵션 버튼 클릭시.
        this.divSearch_btnSEARCH_onclick = function(obj,e)
        {
        	var param = {};
        	param.CD_SITE = this.divSearch.form.ctxtCD_SITE_SEARCH.text;
        	this.gfnFormOpenNonAuth("DWZ", "DWZ_SITELIST_SEARCH", "fnCallback_SITELIST_SEARCH", param, 900, 600);
        };

        this.fnCallback_SITELIST_SEARCH = function(svcID, value) {
        	if(value != null)
        	{
        		this.divSearch.form.ctxtCD_SITE_SEARCH.set_value(value);
        		this.FormBtns.Select.click();
        	}
        	else
        	{
        		this.divSearch.form.ctxtCD_SITE_SEARCH.set_value("");
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWZ_SITELIST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
