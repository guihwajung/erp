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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCBPR_ESTIMATION_EBID_VENDOR_DX_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DCBPR_ESTIMATION_EBID_VENDOR_DX_UPDATE</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DCBPR_ESTIMATION_EBID_VENDOR_DX_INSERT</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DCBPR_ESTIMATION_EBID_VENDOR_DX_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BID\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"NO_BID\"/><Col id=\"CD_VENDOR\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","sta00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("입찰번호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_BID","sta01:0.0","10.0","270","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","ccfNO_BID:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("거래처");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","sta02:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
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
            obj = new BindItem("item2","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccfNO_BID.form.CDTextBox","value","dsSearch","NO_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCB_NEGODETAILQRY_ENG.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this._AGREE_STATUS = "";

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

        	// 이전 화면에서 데이터 받기.
        	this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        	this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        	this.dsSearch.setColumn(0, "NO_BID", this.getOwnerFrame().NO_BID);
        	this.divSearch.form.ccfNO_BID.form.DSTextBox.set_value(this.getOwnerFrame().DS_BID);
        	this.dsSearch.setColumn(0, "CD_VENDOR", this.getOwnerFrame().CD_VENDOR);
        	this.divSearch.form.ccfCD_VENDOR.form.DSTextBox.set_value(this.getOwnerFrame().DS_VENDOR);

        	this._AGREE_STATUS = this.getOwnerFrame().AGREE_STATUS;
        	this._DS_PARAM = this.getOwnerFrame().DS_PARAM;
        	this.FormBtns.Select.click();
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
        	this.btnAgreement = this.gfnFormButtonAdd("btnAgreement", "fnAgreement");

        	if(!this.gfnIsNull(this.getOwnerFrame().DS_OPENER)) {
        		if(this.getOwnerFrame().DS_OPENER == "DCB_PRECONTRACT_LIST") {
        			//this.FormBtns.Save.set_enable(false);
        			this.divTopBtn.set_visible(false);
        		}
        	}

        	if(this.getOwnerFrame().YN_SUCCESS == "Y") {
        		this.divTopBtn.set_visible(false);
        	}
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfNO_BID = this.divSearch.form.ccfNO_BID;
        	this.ccfCD_VENDOR = this.divSearch.form.ccfCD_VENDOR;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//this.ccfCD_SITE.CodeFindName = "DZX_CFSITE";
        	this.ccfNO_BID.CodeFindName = "DCX_CFORDERPLAN_01";
        	this.ccfCD_VENDOR.CodeFindName = "DCX_CFVENDOR_COMMON";

        	//this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfNO_BID.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCB_NEGODETAILQRY_ENG"/*, "DS_ITEM", "GR_COST"*/);
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        	this.dxGrid.sort = "false";
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
        	this.dsSelect.addColumn("NO_BID", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("NO_BID", "string");
        	this.dsInsert.addColumn("CD_VENDOR", "string");
        	this.dsInsert.addColumn("UP_TT_HADO", "string");
        	this.dsInsert.addColumn("AM_TT_HADO", "string");
        	this.dsInsert.addColumn("UP_MATERIAL", "string");
        	this.dsInsert.addColumn("AM_MATERIAL", "string");
        	this.dsInsert.addColumn("UP_LABOR", "string");
        	this.dsInsert.addColumn("AM_LABOR", "string");
        	this.dsInsert.addColumn("UP_COST", "string");
        	this.dsInsert.addColumn("AM_COST", "string");
        	this.dsInsert.addColumn("DS_ITEM", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("NO_BID", "string");
        	this.dsUpdate.addColumn("NO_PR", "string");
        	this.dsUpdate.addColumn("CD_COST", "string");
        	this.dsUpdate.addColumn("CD_VENDOR", "string");
        	this.dsUpdate.addColumn("UP_TT_HADO", "string");
        	this.dsUpdate.addColumn("AM_TT_HADO", "string");
        	this.dsUpdate.addColumn("UP_MATERIAL", "string");
        	this.dsUpdate.addColumn("AM_MATERIAL", "string");
        	this.dsUpdate.addColumn("UP_LABOR", "string");
        	this.dsUpdate.addColumn("AM_LABOR", "string");
        	this.dsUpdate.addColumn("UP_COST", "string");
        	this.dsUpdate.addColumn("AM_COST", "string");
        	this.dsUpdate.addColumn("DS_ITEM", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("NO_BID", "string");
        	this.dsDelete.addColumn("NO_PR", "string");
        	this.dsDelete.addColumn("CD_COST", "string");
        	this.dsDelete.addColumn("CD_VENDOR", "string");
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

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));

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

        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsUpdate.clearData();
        	this.dsInsert.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        				this.dsInsert.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));

        				this.dsInsert.setColumn(nrow, "UP_TT_HADO", this.dsList.getColumn(i, "UP_TT_HADO"));
        				this.dsInsert.setColumn(nrow, "AM_TT_HADO", this.dsList.getColumn(i, "AM_TT_HADO"));
        				this.dsInsert.setColumn(nrow, "UP_MATERIAL", this.dsList.getColumn(i, "UP_MATERIAL"));
        				this.dsInsert.setColumn(nrow, "AM_MATERIAL", this.dsList.getColumn(i, "AM_MATERIAL"));
        				this.dsInsert.setColumn(nrow, "UP_LABOR", this.dsList.getColumn(i, "UP_LABOR"));
        				this.dsInsert.setColumn(nrow, "AM_LABOR", this.dsList.getColumn(i, "AM_LABOR"));
        				this.dsInsert.setColumn(nrow, "UP_EQUIP", this.dsList.getColumn(i, "UP_EQUIP"));
        				this.dsInsert.setColumn(nrow, "AM_EQUIP", this.dsList.getColumn(i, "AM_EQUIP"));
        				this.dsInsert.setColumn(nrow, "UP_COST", this.dsList.getColumn(i, "UP_COST"));
        				this.dsInsert.setColumn(nrow, "AM_COST", this.dsList.getColumn(i, "AM_COST"));

        				this.dsInsert.setColumn(nrow, "DS_ITEM", this.dsList.getColumn(i, "DS_ITEM"));
        			break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        				this.dsUpdate.setColumn(nrow, "NO_PR", this.dsList.getColumn(i, "NO_PR"));
        				this.dsUpdate.setColumn(nrow, "CD_COST", this.dsList.getColumn(i, "CD_COST"));
        				this.dsUpdate.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        				this.dsUpdate.setColumn(nrow, "UP_TT_HADO", this.dsList.getColumn(i, "UP_TT_HADO"));
        				this.dsUpdate.setColumn(nrow, "AM_TT_HADO", this.dsList.getColumn(i, "AM_TT_HADO"));
        				this.dsUpdate.setColumn(nrow, "UP_MATERIAL", this.dsList.getColumn(i, "UP_MATERIAL"));
        				this.dsUpdate.setColumn(nrow, "AM_MATERIAL", this.dsList.getColumn(i, "AM_MATERIAL"));
        				this.dsUpdate.setColumn(nrow, "UP_LABOR", this.dsList.getColumn(i, "UP_LABOR"));
        				this.dsUpdate.setColumn(nrow, "AM_LABOR", this.dsList.getColumn(i, "AM_LABOR"));
        				this.dsUpdate.setColumn(nrow, "UP_EQUIP", this.dsList.getColumn(i, "UP_EQUIP"));
        				this.dsUpdate.setColumn(nrow, "AM_EQUIP", this.dsList.getColumn(i, "AM_EQUIP"));
        				this.dsUpdate.setColumn(nrow, "UP_COST", this.dsList.getColumn(i, "UP_COST"));
        				this.dsUpdate.setColumn(nrow, "AM_COST", this.dsList.getColumn(i, "AM_COST"));

        				this.dsUpdate.setColumn(nrow, "DS_ITEM", this.dsList.getColumn(i, "DS_ITEM"));
        			break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        				this.dsDelete.setColumn(nrow, "NO_PR", this.dsList.getColumn(i, "NO_PR"));
        				this.dsDelete.setColumn(nrow, "CD_COST", this.dsList.getColumn(i, "CD_COST"));
        				this.dsDelete.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        			break;
        		}
        	}

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
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        	this.dsList.setColumn(nrow, "QN_TT_HADO", 1);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	if(!this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_COST"))) {
        		if(this.dsList.getColumn(this.dsList.rowposition, "CD_COST").substr(0, 2) == "EX") {
        			this.gfnGridDel(this.dxGrid);
        		}
        	} else {
        		this.gfnGridDel(this.dxGrid);
        	}
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0,"NO_BID"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfNO_BID.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("입찰번호는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_VENDOR"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_VENDOR.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("거래처는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
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
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		if(this.dsList.rowcount > 0)
        		{
        			if(this._AGREE_STATUS == "01" || this._DS_PARAM == "MM")
        			{
        				this.btnAgreement.set_enable(false);
        			}
        			else
        			{
        				this.btnAgreement.set_enable(true);
        			}
        		}
        	}
        	else if(svcID == "save") {
        		if(errorCode == 0)
        		{
        			// 저장 후 요청상태로 변경. (버튼제어를 위함)
        			this._AGREE_STATUS = "01";
        			this.FormBtns.Select.click();
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}

        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        // 	if (id == "ccfCD_SITE"){
        // 		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        // 	}else
        	if (id == "ccfNO_BID"){
         		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
         			this.gfnAlert("현장코드를 먼저 입력하세요.");
         			return false;
         		}
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_SITE") {
        		// 현장코드 변경시 입찰번호 초기화
        		this.ccfNO_BID.form.fnCodeFindClear();
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);

        // 	if(colnm == "FILE_NM" || colnm == "BTN_FILE") return true;
        //
        // 	if(this.dsList1.getColumn(row, "YN_EDIT") != "Y")
        // 	{
        // 		return false;
        // 	}

        	if(colnm == "DS_ITEM") {
        		if(!this.gfnIsNull(this.dsList.getColumn(row, "CD_COST"))) {
        			if(this.dsList.getColumn(row, "CD_COST").substr(0,2) != "EX") {
        				return false;
        			}
        		}
        	}

        	if(colnm == "QN_TT_HADO") {
        		if(!this.gfnIsNull(this.dsList.getColumn(row, "CD_COST"))) {
        			if(this.dsList.getColumn(row, "CD_COST").substr(0,2) != "EX") {
        				return false;
        			}
        		}
        	}

        // 	if(nexacro.toNumber(this.dsList.getColumn(row, "QN_TT_HADO"),0) == 1)
        // 	{
        // 		if(colnm == "AM_MATERIAL" || colnm == "AM_LABOR" || colnm == "AM_COST")
        // 		{
        // 			return true;
        // 		}
        // 	}
        // 	else
        // 	{
        // 		if(colnm == "UP_MATERIAL" || colnm == "UP_LABOR" || colnm == "UP_COST")
        // 		{
        // 			return true;
        // 		}
        // 	}

        	return;
        }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		if(e.columnid == "CD_SITE"){
        			this.dsSearch.setColumn(0, "NO_BID", "");
        			this.divSearch.form.ccfNO_BID.form.DSTextBox.set_value("");
        		}
        	}
        };

        // 합의요청 버튼 이벤트
        this.fnAgreement = function(obj,e)
        {
        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.NO_BID = this.dsSearch.getColumn(0, "NO_BID");
        	param.DS_SUBCON = this.divSearch.form.ccfNO_BID.form.DSTextBox.text;
        	param.CD_VENDOR = this.dsSearch.getColumn(0, "CD_VENDOR");
        	param.DS_VENDOR = this.divSearch.form.ccfCD_VENDOR.form.DSTextBox.text;

        	var am_material = 0;
        	var am_labor = 0;
        	var am_cost = 0;

        	for(var i = 0 ; i < this.dsList.rowcount; i++)
        	{
        		am_material += nexacro.toNumber(this.dsList.getColumn(i, "AM_MATERIAL"),0);
        		am_labor += nexacro.toNumber(this.dsList.getColumn(i, "AM_LABOR"),0);
        		am_cost += nexacro.toNumber(this.dsList.getColumn(i, "AM_COST"),0);
        	}

        	param.AM_MATERIAL = am_material;
        	param.AM_LABOR = am_labor;
        	param.AM_COST = am_cost;

        // 	var colAM_MATERIAL = this.dxGrid.getBindCellIndex("body", "AM_MATERIAL");
        // 	param.AM_MATERIAL = nexacro.toNumber(this.dxGrid.getCellProperty("summ", colAM_MATERIAL, "text"),0);
        // 	var colAM_LABOR = this.dxGrid.getBindCellIndex("body", "AM_LABOR");
        // 	param.AM_LABOR = nexacro.toNumber(this.dxGrid.getCellProperty("summ", colAM_LABOR, "text"),0);
        // 	var colAM_COST = this.dxGrid.getBindCellIndex("body", "AM_LABOR");
        // 	param.AM_COST = nexacro.toNumber(this.dxGrid.getCellProperty("summ", colAM_COST, "text"),0);


        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCB_ESTIMATION_AGREEMENT", "fnAgreement_callback", param, 1000, 550);
        }

        this.fnAgreement_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.fnSave();
        	}
        	else if(val == "D")
        	{
        		this.FormBtns.Select.click();
        	}
        }


        // 자동산식.
        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		if(e.columnid == "QN_TT_HADO") {
        			this.dsList.set_enableevent(false);
        			var QN_TT_HADO = e.newvalue;
        			var UP_MATERIAL = nexacro.Decimal(this.dsList.getColumn(e.row, "UP_MATERIAL"),0);
        			var UP_LABOR = nexacro.Decimal(this.dsList.getColumn(e.row, "UP_LABOR"),0);
        			var UP_COST = nexacro.Decimal(this.dsList.getColumn(e.row, "UP_COST"),0);
        			UP_MATERIAL.mulDecimal(QN_TT_HADO);
        			UP_LABOR.mulDecimal(QN_TT_HADO);
        			UP_COST.mulDecimal(QN_TT_HADO);
        			this.dsList.setColumn(e.row, "AM_MATERIAL", nexacro.floor(UP_MATERIAL));
        			this.dsList.setColumn(e.row, "AM_LABOR", nexacro.floor(UP_LABOR));
        			this.dsList.setColumn(e.row, "AM_COST", nexacro.floor(UP_COST));

        			var AM_MATERIAL = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_MATERIAL"),0);
        			var AM_LABOR = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_LABOR"),0);
        			var AM_COST = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_COST"),0);

        			this.dsList.setColumn(e.row, "AM_TT_HADO", AM_MATERIAL + AM_LABOR + AM_COST);
        			this.dsList.set_enableevent(true);
        		}

        		var check_UP = false;
        		var check_AM = false;

        		var QN_TT_HADO = this.dsList.getColumn(e.row, "QN_TT_HADO");

        		if(e.columnid == "UP_MATERIAL")
        		{
        			this.dsList.set_enableevent(false);
        			var nVal = nexacro.Decimal(e.newvalue,0);
        		    nVal.mulDecimal(QN_TT_HADO);

        			this.dsList.setColumn(e.row, "AM_MATERIAL", nexacro.floor(nVal));
        			check_UP = true;
        			this.dsList.set_enableevent(true);
        		}
        		else if(e.columnid == "UP_LABOR")
        		{
        			this.dsList.set_enableevent(false);
        			var nVal = nexacro.Decimal(e.newvalue,0);
        		    nVal.mulDecimal(QN_TT_HADO);

        			this.dsList.setColumn(e.row, "AM_LABOR", nexacro.floor(nVal));
        			check_UP = true;
        			this.dsList.set_enableevent(true);
        		}
        		else if(e.columnid == "UP_COST")
        		{
        			this.dsList.set_enableevent(false);
        			var nVal = nexacro.Decimal(e.newvalue,0);
        		    nVal.mulDecimal(QN_TT_HADO);

        			this.dsList.setColumn(e.row, "AM_COST", nexacro.floor(nVal));
        			check_UP = true;
        			this.dsList.set_enableevent(true);
        		}
        		else if(e.columnid == "AM_MATERIAL")
        		{
        			this.dsList.set_enableevent(false);
        			this.dsList.setColumn(e.row, "UP_MATERIAL", nexacro.toNumber(e.newvalue,0));
        			check_AM = true;
        			this.dsList.set_enableevent(true);
        		}
        		else if(e.columnid == "AM_LABOR")
        		{
        			this.dsList.set_enableevent(false);
        			this.dsList.setColumn(e.row, "UP_LABOR", nexacro.toNumber(e.newvalue,0));
        			check_AM = true;
        			this.dsList.set_enableevent(true);
        		}
        		else if(e.columnid == "AM_COST")
        		{
        			this.dsList.set_enableevent(false);
        			this.dsList.setColumn(e.row, "UP_COST", nexacro.toNumber(e.newvalue,0));
        			check_AM = true;
        			this.dsList.set_enableevent(true);
        		}

        		// 단가 OR 금액에 변동이 있다면.
        		if(check_UP == true || check_AM == true)
        		{
        			if(check_UP == true)
        			{
        				this.dsList.set_enableevent(false);
        				var UP_MATERIAL = nexacro.toNumber(this.dsList.getColumn(e.row, "UP_MATERIAL"),0);
        				var UP_LABOR = nexacro.toNumber(this.dsList.getColumn(e.row, "UP_LABOR"),0);
        				var UP_COST = nexacro.toNumber(this.dsList.getColumn(e.row, "UP_COST"),0);

        				this.dsList.setColumn(e.row, "UP_TT_HADO", UP_MATERIAL + UP_LABOR + UP_COST);

        				var AM_MATERIAL = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_MATERIAL"),0);
        				var AM_LABOR = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_LABOR"),0);
        				var AM_COST = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_COST"),0);

        				this.dsList.setColumn(e.row, "AM_TT_HADO", AM_MATERIAL + AM_LABOR + AM_COST);
        				//this.dsList.setColumn(e.row, "AM_TT_HADO", (UP_MATERIAL + UP_LABOR + UP_COST) * QN_TT_HADO);
        				this.dsList.set_enableevent(true);
        			}
        			else
        			{
        				this.dsList.set_enableevent(false);
        				var AM_MATERIAL = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_MATERIAL"),0);
        				var AM_LABOR = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_LABOR"),0);
        				var AM_COST = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_COST"),0);

        				this.dsList.setColumn(e.row, "UP_TT_HADO", AM_MATERIAL + AM_LABOR + AM_COST);
        				this.dsList.setColumn(e.row, "AM_TT_HADO", AM_MATERIAL + AM_LABOR + AM_COST);
        				this.dsList.set_enableevent(true);
        			}

        			var AM_TT_SILHENG = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_TT_SILHENG"),0);
        			var AM_TT_HADO = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_TT_HADO"),0);
        			if(!this.gfnIsNull(this.dsList.getColumn(e.row, "CD_COST"))) {
        				if(this.dsList.getColumn(e.row, "CD_COST").substr(0, 2) != "EX") {
        					this.dsList.setColumn(e.row, "AM_REDUCE", AM_TT_SILHENG - AM_TT_HADO);
        				}
        			}
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCB_NEGODETAILQRY_ENG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
