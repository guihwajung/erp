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
            this.set_titletext("원가배분");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_COST_DIV_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHAPR_COST_DIV_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHAPR_COST_DIV_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHAPR_COST_DIV_DELETE</Col></Row><Row><Col id=\"TARGET\">costDiv</Col><Col id=\"SP\">DHAPR_COST_DIV_CREATE</Col></Row><Row><Col id=\"SP\">DHAPR_COST_DIV_SITE_SELECT</Col><Col id=\"TARGET\">costSiteSelect</Col></Row><Row><Col id=\"TARGET\">apply</Col><Col id=\"SP\">DHAPR_COST_DIV_TRANS</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_WORK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"CD_DEPT\"/><Col id=\"DT_WORK\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCostSite", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo00","0.0","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","rdo00:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","sta00:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("사업지");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","sta01:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","65",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_SUPPLY00","363","0","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("대지비");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta13","188","0",null,"30","staAM_SUPPLY00:-1",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_SUPPLY02","94","0","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("건축비");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_APT_BUIDING","staAM_SUPPLY02:6","5",null,"20","staAM_SUPPLY00:10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_limitbymask("both");
            obj.set_format("###,###,###,###,###,###");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","457","0",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_APT_LAND","464","5","158","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_limitbymask("both");
            obj.set_format("###,###,###,###,###,###");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_SUPPLY03","94","29","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("건축비");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_SUPPLY04","363","29","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("대지비");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","188","29",null,"30","staAM_SUPPLY04:-1",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_STORE_BUIDING","staAM_SUPPLY03:6","34",null,"20","staAM_SUPPLY04:10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_limitbymask("both");
            obj.set_format("###,###,###,###,###,###");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","457","29",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_STORE_LAND","464","34","158","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_limitbymask("both");
            obj.set_format("###,###,###,###,###,###");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_SUPPLY01","0","0","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("아파트");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_SUPPLY05","0","29","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("상가");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHA_COST_DIV.xfdl", function() {
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

        	this.ccfCD_CORP.setFocus();

        	//다른화면에서 들어왔을 경우
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_CORP)) {
        		//법인코드
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.getOwnerFrame().CD_CORP);
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.getOwnerFrame().DS_CORP);
        		//사업지
        		this.ccfCD_DEPT.form.CDTextBox.set_value(this.getOwnerFrame().CD_DEPT);
        		this.ccfCD_DEPT.form.DSTextBox.set_value(this.getOwnerFrame().DS_DEPT);

        		//아파트,상가 금액
        		this.mskAM_APT_BUIDING.set_value(this.getOwnerFrame().AM_APT_BUIDING);
        		this.mskAM_APT_LAND.set_value(this.getOwnerFrame().AM_APT_LAND);
        		this.mskAM_STORE_BUIDING.set_value(this.getOwnerFrame().AM_STORE_BUIDING);
        		this.mskAM_STORE_LAND.set_value(this.getOwnerFrame().AM_STORE_LAND);

        		this.ccfCD_CORP.form.set_readonly(true);
        		this.ccfCD_DEPT.form.set_readonly(true);

        		this.FormBtns.Select.click();
        	}else{
        		//법인코드 세션에 코드로 셋팅
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
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
        	this.btnCostDiv = this.gfnFormButtonAdd("CostDiv", "fnCostDiv"); 	//원가배분 버튼
        	this.btnApply   = this.gfnFormButtonAdd("Apply", "fnApply"); 		//적용 버튼
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;
        	this.mskAM_APT_BUIDING 	 = this.divData.form.mskAM_APT_BUIDING;
        	this.mskAM_APT_LAND 	 = this.divData.form.mskAM_APT_LAND;
        	this.mskAM_STORE_BUIDING = this.divData.form.mskAM_STORE_BUIDING;
        	this.mskAM_STORE_LAND 	 = this.divData.form.mskAM_STORE_LAND;
        	this.dxGrid = this.divData.form.objGrid;
        	this.vApplyFlag = false;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_DEPT.CodeFindName = "DHX_CFACNTUNIT";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHA_COST_DIV");
        	this.dxGrid.set_selecttype("cell");

        	//this.dsList.addEventHandler("oncolumnchanged", this.dsList_ColumnChanged, this);

        	//검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_Valuechanged, this);

        	var colNO = this.dxGrid.getBindCellIndex("body", "NO");
        	if(this.dxGrid.yn_filter == "Y"){	//필터가 있을경우
        		this.dxGrid.setCellProperty("body", colNO, "text", "expr:nx_flag == '#' ? '' : currow");
        	}else{
        		this.dxGrid.setCellProperty("body", colNO, "text", "expr:currow+1");
        	}
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("CD_DEPT", "string");
        	this.dsInsert.addColumn("ID_USER", "string");

        	//아파트
        	this.dsInsert.addColumn("YN_APT_APT" 	 , "string");
        	this.dsInsert.addColumn("NO_SIZE_APT"	 , "string");
        	this.dsInsert.addColumn("NO_DONG_APT"	 , "string");
        	this.dsInsert.addColumn("NO_HO_APT"  	 , "string");
        	this.dsInsert.addColumn("SZ_BUILDING_APT", "bigdecimal");
        	this.dsInsert.addColumn("SZ_LAND_APT"	 , "bigdecimal");
        	this.dsInsert.addColumn("AM_BUILDING_APT", "bigdecimal");
        	this.dsInsert.addColumn("AM_LAND_APT"	 , "bigdecimal");
        	this.dsInsert.addColumn("AM_SUM_APT"	 , "bigdecimal");
        	this.dsInsert.addColumn("DT_SALES_APT"	 , "string");

        	//상가
        	this.dsInsert.addColumn("YN_APT_STORE" 	 	, "string");
        	this.dsInsert.addColumn("NO_SIZE_STORE"	 	, "string");
        	this.dsInsert.addColumn("NO_DONG_STORE"	 	, "string");
        	this.dsInsert.addColumn("NO_HO_STORE"  	 	, "string");
        	this.dsInsert.addColumn("SZ_BUILDING_STORE" , "bigdecimal");
        	this.dsInsert.addColumn("SZ_LAND_STORE"	 	, "bigdecimal");
        	this.dsInsert.addColumn("AM_BUILDING_STORE" , "bigdecimal");
        	this.dsInsert.addColumn("AM_LAND_STORE"	 	, "bigdecimal");
        	this.dsInsert.addColumn("AM_SUM_STORE"	 	, "bigdecimal");
        	this.dsInsert.addColumn("DT_SALES_STORE"	, "string");


        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("CD_DEPT", "string");
        	this.dsUpdate.addColumn("DT_WORK", "string");
        	this.dsUpdate.addColumn("CD_SLIP", "string");
        	this.dsUpdate.addColumn("YN_DIV",  "string");
        	this.dsUpdate.addColumn("ID_USER", "string");

        	//프로시저 호출용 데이터셋
        	this.dsPrCall = new Dataset();
        	this.dsPrCall.addColumn("CD_CORP", "string");
        	this.dsPrCall.addColumn("CD_DEPT", "string");
        	this.dsPrCall.addColumn("ID_USER", "string");

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

        	this.dsSelect.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "CD_DEPT", this.ccfCD_DEPT.form.CDTextBox.value);

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
        	if (!this.fnSelectValidate()) return false;

        	var nRow = this.gfnGridAdd(this.dxGrid);

        	//this.dsList.setColumn(nRow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	//this.dsList.setColumn(nRow, "CD_DEPT", this.ccfCD_DEPT.form.CDTextBox.value);
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
        	//if (!this.gfnGridValidate(this.dxGrid)) return;
        	if (!this.fnSaveValidate()) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_CORP"  , this.dsList.getColumn(i, "CD_CORP"));		//법인코드
        				this.dsInsert.setColumn(nrow, "CD_DEPT"  , this.dsList.getColumn(i, "CD_DEPT"));		//부서코드
        				this.dsInsert.setColumn(nrow, "DT_WORK"  , this.dsList.getColumn(i, "DT_WORK"));		//작업년월
        				this.dsInsert.setColumn(nrow, "CD_SLIP"  , this.dsList.getColumn(i, "CD_SLIP"));		//전표번호
        				this.dsInsert.setColumn(nrow, "YN_DIV"   , this.dsList.getColumn(i, "YN_DIV"));			//안분대상여부
        				this.dsInsert.setColumn(nrow, "ID_USER"  , this.AuthClient.ID_USER);					//사용자 아이디
        				break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_CORP"  , this.dsList.getColumn(i, "CD_CORP"));		//법인코드
        				this.dsUpdate.setColumn(nrow, "CD_DEPT"  , this.dsList.getColumn(i, "CD_DEPT"));		//부서코드
        				this.dsUpdate.setColumn(nrow, "DT_WORK"  , this.dsList.getColumn(i, "DT_WORK"));		//작업년월
        				this.dsUpdate.setColumn(nrow, "CD_SLIP"  , this.dsList.getColumn(i, "CD_SLIP"));		//전표번호
        				this.dsUpdate.setColumn(nrow, "YN_DIV"   , this.dsList.getColumn(i, "YN_DIV"));			//안분대상여부
        				this.dsUpdate.setColumn(nrow, "ID_USER"  , this.AuthClient.ID_USER);					//사용자 아이디
        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_CORP"  , this.dsList.getColumn(i, "CD_CORP"));		//법인코드
        				this.dsDelete.setColumn(nrow, "CD_DEPT"  , this.dsList.getColumn(i, "CD_DEPT"));		//부서코드
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

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.text)) {
        		this.gfnAlert("법인코드가 입력되지 않았습니다.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		validate = false;
        	}

        	if (this.gfnIsNull(this.gfnTrim(this.ccfCD_DEPT.form.CDTextBox.value))) {
        		this.gfnAlert("사업지가 입력되지 않았습니다.");
        		this.ccfCD_DEPT.form.CDTextBox.setFocus();
        		return;
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

        	switch(svcID) {
        	case "select" :
        		this.gfnGridAfterSelect(this.dxGrid);
        		break;
        	case "save" :
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        		break;
        	case "costDiv":
        	case "apply"  :
        		if (errorCode == 0) {
        			this.gfnAlert("처리되었습니다.");

        			this.vApplyFlag = true;
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        		break;
        	case "costSiteSelect" :
        		if(this.dsCostSite.rowcount > 0){
        			this.mskAM_APT_BUIDING.set_value(this.dsCostSite.getColumn(0, "AM_APT_BUIDING"));
        			this.mskAM_APT_LAND.set_value(this.dsCostSite.getColumn(0, "AM_APT_LAND"));
        			this.mskAM_STORE_BUIDING.set_value(this.dsCostSite.getColumn(0, "AM_STORE_BUIDING"));
        			this.mskAM_STORE_LAND.set_value(this.dsCostSite.getColumn(0, "AM_STORE_LAND"));
        		}
        		break;
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}

        	if (id == "ccfCD_DEPT") {	//사업지
        		var cdCorp = this.ccfCD_CORP.form.CDTextBox.text;
        		if(this.gfnIsNull(cdCorp)){
        			this.gfnAlert("법인코드를 먼저 선택하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");					//상위부서
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "");					//전표발행여부
        		dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);				//법인코드
        		dsUserParam.setColumn(nrow, "YN_USE"		, "Y");					//사용여부
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "02");				//현장/본사여부(02:현장)
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	switch(id) {
        		case "ccfCD_CORP":	//법인코드
        			this.ccfCD_DEPT.form.fnCodeFindClear();

        			this.mskAM_APT_BUIDING.set_value("");
        			this.mskAM_APT_LAND.set_value("");
        			this.mskAM_STORE_BUIDING.set_value("");
        			this.mskAM_STORE_LAND.set_value("");

        		break;
        		case "ccfCD_DEPT":	//사업지코드

        			this.mskAM_APT_BUIDING.set_value("");
        			this.mskAM_APT_LAND.set_value("");
        			this.mskAM_STORE_BUIDING.set_value("");
        			this.mskAM_STORE_LAND.set_value("");

        			//원가배분 사업지 정보 조회
        			this.fnCostSiteSelect();

        		break;
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        //원가배분 처리
        this.fnCostDiv = function (obj,e)
        {
        	if (this.gfnIsNull(this.gfnTrim(this.ccfCD_CORP.form.CDTextBox.value))) {
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return;
        	}

        	if (this.gfnIsNull(this.gfnTrim(this.ccfCD_DEPT.form.CDTextBox.value))) {
        		this.gfnAlert("사업지는 필수입니다.");
        		this.ccfCD_DEPT.form.CDTextBox.setFocus();
        		return;
        	}

        	this.gfnConfirm("원가배분 처리 하시겠습니까?", "fnCostDiv_callback");

        };

        this.fnCostDiv_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsPrCall.clearData();
        		var nRow = this.dsPrCall.addRow();

        		//처리할 데이터 담기
        		this.dsPrCall.setColumn(nRow, "CD_CORP"  , this.ccfCD_CORP.form.CDTextBox.value);
        		this.dsPrCall.setColumn(nRow, "CD_DEPT"  , this.ccfCD_DEPT.form.CDTextBox.value);
        		this.dsPrCall.setColumn(nRow, "ID_USER"  , this.AuthClient.ID_USER);

        		var strSvcId    = "costDiv";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "costDiv=dsPrCall";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); 	// 통신방법 정의 [생략가능]
        	}
        };


        //적용 처리
        this.fnApply = function (obj,e)
        {
        	if (this.gfnIsNull(this.gfnTrim(this.ccfCD_CORP.form.CDTextBox.value))) {
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return;
        	}

        	if (this.gfnIsNull(this.gfnTrim(this.ccfCD_DEPT.form.CDTextBox.value))) {
        		this.gfnAlert("사업지는 필수입니다.");
        		this.ccfCD_DEPT.form.CDTextBox.setFocus();
        		return;
        	}

        	this.gfnConfirm("적용 처리 하시겠습니까?", "fnApply_callback");

        };

        this.fnApply_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsPrCall.clearData();
        		var nRow = this.dsPrCall.addRow();

        		//처리할 데이터 담기
        		this.dsPrCall.setColumn(nRow, "CD_CORP"  , this.ccfCD_CORP.form.CDTextBox.value);
        		this.dsPrCall.setColumn(nRow, "CD_DEPT"  , this.ccfCD_DEPT.form.CDTextBox.value);
        		this.dsPrCall.setColumn(nRow, "ID_USER"  , this.AuthClient.ID_USER);

        		var strSvcId    = "apply";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "apply=dsPrCall";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); 	// 통신방법 정의 [생략가능]
        	}
        };

        //검색조건 변경 이벤트
        this.dsSearch_Valuechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        //저장 전 체크
        this.fnSaveValidate = function ()
        {
        //	var amBuildingApt   = 0, amLandApt   = 0;
        //	var amBuildingStore = 0, amLandStore = 0;
        // 	for(var i=0;i<this.dsList.rowcount;i++){
        // 		amBuildingApt 	+= nexacro.toNumber(this.dsList.getColumn(i, "AM_BUILDING_APT"), 0);
        // 		amLandApt 	  	+= nexacro.toNumber(this.dsList.getColumn(i, "AM_LAND_APT"), 0);
        // 		amBuildingStore += nexacro.toNumber(this.dsList.getColumn(i, "AM_BUILDING_STORE"), 0);
        // 		amLandStore 	+= nexacro.toNumber(this.dsList.getColumn(i, "AM_LAND_STORE"), 0);
        // 	}

        	var amBuildingApt 	 = this.dsList.getSum("AM_BUILDING_APT");
        	var amLandApt 	  	 = this.dsList.getSum("AM_LAND_APT");
        	var amBuildingStore  = this.dsList.getSum("AM_BUILDING_STORE");
        	var amLandStore 	 = this.dsList.getSum("AM_LAND_STORE");

        	var sumBuildingApt 	 = nexacro.toNumber(this.mskAM_APT_BUIDING.value,0);	//건축비(아파트)
        	var sumLandApt 		 = nexacro.toNumber(this.mskAM_APT_LAND.value,0);		//대지비(아파트)
        	var sumBuildingStore = nexacro.toNumber(this.mskAM_STORE_BUIDING.value,0);	//건축비(상가)
        	var sumLandStore 	 = nexacro.toNumber(this.mskAM_STORE_LAND.value,0);		//대지비(상가)

        	if(amBuildingApt != sumBuildingApt){
        		this.gfnAlert("건축비(아파트) 합계와 그리드 데이터의 합계는 같아야합니다.");
        		return false;
        	}
        	if(amLandApt != sumLandApt){
        		this.gfnAlert("대지비(아파트) 합계와 그리드 데이터의 합계는 같아야합니다.");
        		return false;
        	}
        	if(amBuildingStore != sumBuildingStore){
        		this.gfnAlert("건축비(상가) 합계와 그리드 데이터의 합계는 같아야합니다.");
        		return false;
        	}
        	if(amLandStore != sumLandStore){
        		this.gfnAlert("대지비(상가) 합계와 그리드 데이터의 합계는 같아야합니다.");
        		return false;
        	}
        };

        //원가배분 사업지 조회
        this.fnCostSiteSelect = function ()
        {

        	this.dsSelect.clearData();
        	var nRow = this.dsSelect.addRow();
        	this.dsSelect.setColumn(nRow, "CD_CORP"  , this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsSelect.setColumn(nRow, "CD_DEPT"  , this.ccfCD_DEPT.form.CDTextBox.value);

        	var strSvcId    = "costSiteSelect";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "costSiteSelect=dsSelect";
        	var outData     = "dsCostSite=costSiteSelect0";
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

        this.fnClose = function()
        {

        	trace("@@@### fnclose");
        	this.getOwnerFrame()._close_argument = { IsChange: this.vApplyFlag};
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };
        this.loadIncludeScript("DHA_COST_DIV.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
