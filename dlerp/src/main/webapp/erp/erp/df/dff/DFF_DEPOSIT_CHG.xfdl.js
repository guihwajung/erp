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
            this.set_titletext("예적금변동정보등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DFFPR_YEJUKUMCHG_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DFFPR_YEJUKUMCHG_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DFFPR_YEJUKUMCHG_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DFFPR_YEJUKUMCHG_DELETE</Col></Row><Row><Col id=\"TARGET\">e_create</Col><Col id=\"SP\">DFFPR_YEJUKUMPLAN_CREATE_NEW</Col></Row><Row><Col id=\"TARGET\">selectExc</Col><Col id=\"SP\">DHXPR_CURRENCY_EXCHAGE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_LOAN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRtEx", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">Y</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfCD_CORP","staCD_CORP:0.0","10.0","270","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_YEJUKUM","cfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("관리번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfNO_YEJUKUM","staNO_YEJUKUM:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("2");
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
            obj = new BindItem("item0","divSearch.form.cfNO_YEJUKUM.form.CDTextBox","value","dsSearch","NO_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DFF_DEPOSIT_CHG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.pvDT_FROM;

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

        	// 타화면에서 호출 및 파라미터 존재시 자동 조회
        	if(!this.gfnIsNull(this.getOwnerFrame().NO_YEJUKUM)) {
        		this.divSearch.form.cfCD_CORP.form.CDTextBox.set_value(this.getOwnerFrame().CD_CORP);	// 법인코드
        		this.divSearch.form.cfCD_CORP.form.DSTextBox.set_value(this.getOwnerFrame().DS_CORP);	// 법인명
        		this.divSearch.form.cfNO_YEJUKUM.form.CDTextBox.set_value(this.getOwnerFrame().NO_YEJUKUM);	// 관리번호
        		this.divSearch.form.cfNO_YEJUKUM.form.DSTextBox.set_value(this.getOwnerFrame().NM_YEJUKUM);	// 예적금명
        		this.pvDT_FROM = this.getOwnerFrame().DT_FROM;											// 차입기간(from)

        		// 관리번호 disabled
        		this.divSearch.form.cfNO_YEJUKUM.form.CDTextBox.set_enable(false);
        		this.divSearch.form.cfNO_YEJUKUM.form.BtnSearch.set_enable(false);
        		this.FormBtns.Select.click();
        	}

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	 this.btnPlanCreat = this.gfnFormButtonAdd("btnPlanCreat", "fnPlanCreat")//, "계획생성");
        	 this.btnPlanPerform = this.gfnFormButtonAdd("btnPlanPerform", "fnPlanPerform")//, "계획/실적");
        	 //this.btnApproval = this.gfnFormButtonAdd("btnApproval", "fnApproval", "전자결재상신");
        	 //this.btnApprovalSearch = this.gfnFormButtonAdd("btnApprovalSearch", "fnApprovalSearch", "전자결재조회");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ScfCD_CORP = this.divSearch.form.cfCD_CORP;	// 법인코드
        	this.ScfNO_YEJUKUM = this.divSearch.form.cfNO_YEJUKUM;	// 관리번호
        	this.dxGrid = this.divData.form.objGrid;
        	this.grSearch = this.FormInfo.GR_SEARCH;			//FormInfo : 화면 권한정보
        	this.cdGroup = this.gfnIsNull(this.AuthClient.CD_GROUP) ? "" : this.AuthClient.CD_GROUP;			// 그룹코드
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	////this.ccfDeptCode.CodeFindName = "DFX_CFVENDOR";
        	////this.ccfDeptCode.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	////this.ccfDeptCode.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ScfNO_YEJUKUM.CodeFindName = "DFX_CFNO_YEJUKUM";					// 관리번호(조회조건)
        	this.ScfNO_YEJUKUM.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ScfNO_YEJUKUM.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFF_DEPOSIT_CHG");

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        	this.dsList.addEventHandler("oncolumnchanged", this.dsList_ColumnChanged, this);

        	// BUTTON, BUTTON-IN 처리
        	////this.dxGrid.ExpandUp = "fnGrid_ExpandUp";

        	// 권한체크는 없애기로 함 2019.08.07
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("NO_YEJUKUM", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("NO_YEJUKUM", "string");
        	this.dsInsert.addColumn("DT_CHANGE", "string");
        	this.dsInsert.addColumn("RT_EZA", "bigdecimal");
        	this.dsInsert.addColumn("RT_SPREAD", "bigdecimal");
        	this.dsInsert.addColumn("TO_CHANGE", "string");
        	this.dsInsert.addColumn("AM_IN_CHG", "bigdecimal");
        	this.dsInsert.addColumn("AM_OUT_CHG", "bigdecimal");
        	this.dsInsert.addColumn("RM_BIGO", "string");
        	this.dsInsert.addColumn("TY_DANBOK", "string");
        	this.dsInsert.addColumn("TR_EZASTD", "int");
        	this.dsInsert.addColumn("TR_INTTERM", "int");
        	this.dsInsert.addColumn("TY_SUNHOO", "string");
        	this.dsInsert.addColumn("TY_EZACAL", "string");
        	this.dsInsert.addColumn("TY_YANGDAN", "string");
        	this.dsInsert.addColumn("ID_USER", "string");
        	this.dsInsert.addColumn("CD_CURR", "string");
        	this.dsInsert.addColumn("AM_IN_KRW", "bigdecimal");
        	this.dsInsert.addColumn("AM_OUT_KRW", "bigdecimal");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("NO_YEJUKUM", "string");
        	this.dsUpdate.addColumn("DT_CHANGE", "string");
        	this.dsUpdate.addColumn("RT_EZA", "bigdecimal");
        	this.dsUpdate.addColumn("RT_SPREAD", "bigdecimal");
        	this.dsUpdate.addColumn("TO_CHANGE", "string");
        	this.dsUpdate.addColumn("AM_IN_CHG", "bigdecimal");
        	this.dsUpdate.addColumn("AM_OUT_CHG", "bigdecimal");
        	this.dsUpdate.addColumn("RM_BIGO", "string");
        	this.dsUpdate.addColumn("TY_DANBOK", "string");
        	this.dsUpdate.addColumn("TR_EZASTD", "int");
        	this.dsUpdate.addColumn("TR_INTTERM", "int");
        	this.dsUpdate.addColumn("TY_SUNHOO", "string");
        	this.dsUpdate.addColumn("TY_EZACAL", "string");
        	this.dsUpdate.addColumn("TY_YANGDAN", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");
        	this.dsUpdate.addColumn("AM_IN_KRW", "bigdecimal");
        	this.dsUpdate.addColumn("AM_OUT_KRW", "bigdecimal");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("NO_YEJUKUM", "string");
        	this.dsDelete.addColumn("DT_CHANGE", "string");
        	this.dsDelete.addColumn("ID_USER", "string");

        	this.dsExcute = new Dataset();
        	this.dsExcute.addColumn("NO_YEJUKUM", "string");
        	this.dsExcute.addColumn("DT_DATE", "string");
        	this.dsExcute.addColumn("YN_FIRST", "string");
        	this.dsExcute.addColumn("ID_USER", "string");
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
        	this.dsSelect.setColumn(0, "NO_YEJUKUM", this.ScfNO_YEJUKUM.form.CDTextBox.value);

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
        	var nrow = this.gfnGridAdd(this.dxGrid);
        	this.dsList.set_enableevent(false);
        	this.dsList.setColumn(nrow, "NO_YEJUKUM", this.ScfNO_YEJUKUM.form.CDTextBox.value);	// 예적금번호
        	this.dsList.setColumn(nrow, "CD_CURR", this.dsList.getColumn(nrow + 1 , "CD_CURR"));	// 예적금통화
        	this.dsList.setColumn(nrow, "TO_CHANGE", this.dsList.getColumn(nrow + 1 , "TO_CHANGE"));	// 만기일자
        	this.dsList.setColumn(nrow, "DT_CHANGE", this.gfnGetDate());  //변동일자
        	this.dsList.set_enableevent(true);
        	this.dsList.set_rowposition(nrow);
        	this.dxGrid.setCellPos(1);
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
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	//trace("this.dsList :: " + this.dsList.saveXML());

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "NO_YEJUKUM", this.ScfNO_YEJUKUM.form.CDTextBox.value);
        				this.dsInsert.setColumn(nrow, "DT_CHANGE", this.dsList.getColumn(i, "DT_CHANGE"));
        				this.dsInsert.setColumn(nrow, "RT_EZA", this.dsList.getColumn(i, "RT_EZA"));
        				this.dsInsert.setColumn(nrow, "RT_SPREAD", this.dsList.getColumn(i, "RT_SPREAD"));
        				this.dsInsert.setColumn(nrow, "TO_CHANGE", this.dsList.getColumn(i, "TO_CHANGE"));
        				this.dsInsert.setColumn(nrow, "AM_IN_CHG", this.gfnNvl(this.dsList.getColumn(i, "AM_IN_CHG"), 0));
        				this.dsInsert.setColumn(nrow, "AM_OUT_CHG", this.gfnNvl(this.dsList.getColumn(i, "AM_OUT_CHG"), 0));
        				this.dsInsert.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsInsert.setColumn(nrow, "TY_DANBOK", this.dsList.getColumn(i, "TY_DANBOK"));
        				this.dsInsert.setColumn(nrow, "TR_EZASTD", this.dsList.getColumn(i, "TR_EZASTD"));
        				this.dsInsert.setColumn(nrow, "TR_INTTERM", this.dsList.getColumn(i, "TR_INTTERM"));
        				this.dsInsert.setColumn(nrow, "TY_SUNHOO", this.dsList.getColumn(i, "TY_SUNHOO"));
        				this.dsInsert.setColumn(nrow, "TY_EZACAL", this.dsList.getColumn(i, "TY_EZACAL"));
        				this.dsInsert.setColumn(nrow, "TY_YANGDAN", this.dsList.getColumn(i, "TY_YANGDAN"));
        				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsInsert.setColumn(nrow, "CD_CURR", this.dsList.getColumn(i, "CD_CURR"));
        				this.dsInsert.setColumn(nrow, "AM_IN_KRW", this.dsList.getColumn(i, "AM_IN_KRW"));
        				this.dsInsert.setColumn(nrow, "AM_OUT_KRW", this.dsList.getColumn(i, "AM_OUT_KRW"));

        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "NO_YEJUKUM", this.ScfNO_YEJUKUM.form.CDTextBox.value);
        				this.dsUpdate.setColumn(nrow, "DT_CHANGE", this.dsList.getColumn(i, "DT_CHANGE"));
        				this.dsUpdate.setColumn(nrow, "RT_EZA", this.dsList.getColumn(i, "RT_EZA"));
        				this.dsUpdate.setColumn(nrow, "RT_SPREAD", this.dsList.getColumn(i, "RT_SPREAD"));
        				this.dsUpdate.setColumn(nrow, "TO_CHANGE", this.dsList.getColumn(i, "TO_CHANGE"));
        				this.dsUpdate.setColumn(nrow, "AM_IN_CHG", this.gfnNvl(this.dsList.getColumn(i, "AM_IN_CHG"), 0));
        				this.dsUpdate.setColumn(nrow, "AM_OUT_CHG", this.gfnNvl(this.dsList.getColumn(i, "AM_OUT_CHG"), 0));
        				this.dsUpdate.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsUpdate.setColumn(nrow, "TY_DANBOK", this.dsList.getColumn(i, "TY_DANBOK"));
        				this.dsUpdate.setColumn(nrow, "TR_EZASTD", this.dsList.getColumn(i, "TR_EZASTD"));
        				this.dsUpdate.setColumn(nrow, "TR_INTTERM", this.dsList.getColumn(i, "TR_INTTERM"));
        				this.dsUpdate.setColumn(nrow, "TY_SUNHOO", this.dsList.getColumn(i, "TY_SUNHOO"));
        				this.dsUpdate.setColumn(nrow, "TY_EZACAL", this.dsList.getColumn(i, "TY_EZACAL"));
        				this.dsUpdate.setColumn(nrow, "TY_YANGDAN", this.dsList.getColumn(i, "TY_YANGDAN"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsUpdate.setColumn(nrow, "AM_IN_KRW", this.dsList.getColumn(i, "AM_IN_KRW"));
        				this.dsUpdate.setColumn(nrow, "AM_OUT_KRW", this.dsList.getColumn(i, "AM_OUT_KRW"));
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "NO_YEJUKUM", this.ScfNO_YEJUKUM.form.CDTextBox.value);
        				this.dsDelete.setColumn(nrow, "DT_CHANGE", this.dsList.getColumn(i, "DT_CHANGE"));
        				this.dsDelete.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

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
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
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
        // 	if (this.gfnIsNull(this.ccfDeptCode.form.CDTextBox.text)) {
        // 		this.gfnAlert("거래처코드가 입력되지 않았습니다.");
        // 		this.ccfDeptCode.form.CDTextBox.setFocus();
        // 		return false;
        // 	}
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
        		//trace(this.dsList.saveXML());
        		if (this.dsList.rowcount <= 0 )
        		{
        			this.FormBtns.Add.set_enable(false);
        		}
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "e_create") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "selectExc") {
        		if (errorCode == 0) {
        			if (this.dsRtEx.rowcount > 0)
        			{
        				this.dsList.setColumn(this.dsList.rowposition , "RT_EXCH", this.dsRtEx.getColumn(0, "RT_KRW_EXCH"));
        			}
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var cdCorp = this.ScfCD_CORP.form.CDTextBox.value;

        	switch(id) {

        	// 관리번호(조회조건)
        	case "cfNO_YEJUKUM":
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnIsNull(cdCorp) ? "" : cdCorp);
        		break;

        	default:
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	switch(id) {

        	// 관리번호(조회조건)
        	case "cfNO_YEJUKUM":
        		this.fnSearchInit();
        		break;

        	default:
        	}
        	return true;
        }

        this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow) {

        	switch(id) {
        	case "DFX_CFVENDOR": // 거래처코드
        		dsUserParam.setColumn(nrow, "TY_VENDOR1", "거래처");
        		dsUserParam.setColumn(nrow, "CD_CORP", "");
        		break;
        	default:
        	}

        	return true;
        }

         this.fnGrid_ExpandUp = function(obj, e) {

        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);

        	if(colnm == "URL_PROOF") {
        		// 최초 작성시엔 NO_SEQ가 없기 때문에 저장 후에 파일 첨부를 진행하여야 함.
        		// CD_DIR에 넣어줄 값이 없기에 저장 후 진행!
        		if(this.gfnGetFlag(this.dsList, e.row) == "I"){
        			this.gfnAlert("저장 후 파일첨부 진행하세요.");
        			return false;
        		}

        		var fileManager = {};
        		fileManager.CD_GUBUN = "DH01";
        		fileManager.CD_DIR = [this.dsList.getColumn(e.row, "CD_OWNER")];
        		fileManager.IS_READONLY = false;

        // 		trace("fileManager.CD_GUBUN :: " + fileManager.CD_GUBUN);
        // 		trace("fileManager.CD_DIR :: " + fileManager.CD_DIR);
        // 		trace("fileManager.IS_READONLY :: " + fileManager.IS_READONLY);

        		this.gfnFileManager(fileManager, "fnFileCallback");
        	}
        }


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         //그리드 값변경 이벤트
        this.dsList_ColumnChanged = function(obj, e)
        {
        	trace("그리드 값변경 이벤트 " + e.columnid + "/" + e.newvalue)
        	if(e.newvalue != e.oldvalue){
        		if(e.columnid == "DT_CHANGE"){
        			if ( !this.gfnIsNull(this.dsList.getColumn(e.row , "CD_CURR")) && !this.gfnIsNull(this.dsList.getColumn(e.row , "DT_CHANGE")) )
        			{
        				this.fnSetRtExchange();
        			}
        		}else if (e.columnid == "AM_IN_CHG")
        		{
        			var rtExch = this.dsList.getColumn(e.row, "RT_EXCH");
        			this.dsList.setColumn(e.row, "AM_IN_KRW" , this.fnGetTrunc(e.newvalue * rtExch, 1));
        			this.dsList.setColumn(e.row, "AM_OUT_CHG", 0);
        			this.dsList.setColumn(e.row, "AM_OUT_KRW", 0);
        		}else if (e.columnid == "AM_OUT_CHG")
        		{
        		    if (this.dsList.getColumn(e.row , "CD_CURR")!="KRW"){
        				this.fnSetAmOutKrw(e.row, e.newvalue, this.dsList.getColumn(e.row, "DT_CHANGE"));
        			}else {
        				this.dsList.setColumn(e.row, "AM_OUT_KRW" , e.newvalue);
        			}
        			this.dsList.setColumn(e.row, "AM_IN_CHG" , 0);
        			this.dsList.setColumn(e.row, "AM_IN_KRW" , 0);
        		}
        	}
        }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.ccfCorp_AfterCDTextChanged = function(id) {
        // 	var arr = this.ccfCorp.form.SelectedData;
        //
        // 	if (arr.length > 0) {
        // 		var cd_system = arr[0]["CD_SYSTEM"];
        // 		var ds_system = arr[0]["DS_SYSTEM"];
        // 		var cd_module = arr[0]["CD_MODULE"];
        // 		var ds_module = arr[0]["DS_MODULE"];
        // 	}
        };

        this.fnDetail = function(obj,e) {
        }

        this.fnDetailCallback = function(strId, val) {
        };

        this.fnSetAmOutKrw = function(vRow, val, vDate){
        	trace(" fnSetAmOutKrw=>" +vDate + ":" + val );
        	var sExpr = this.ucFlag +" != 'D' && "+ this.ucFlag + " != 'DU'" + "&& DT_CHANGE < '" + vDate+ "' "  ;
        	var amInKrw = this.dsList.getCaseSum(sExpr , "AM_IN_KRW");
        	var amOutKrw =  this.dsList.getCaseSum(sExpr , "AM_OUT_KRW");
        	var amIn = this.dsList.getCaseSum(sExpr , "AM_IN_CHG");
        	var amOut =  this.dsList.getCaseSum(sExpr , "AM_OUT_CHG");
        	var amJanKrw = amInKrw - amOutKrw; // 현잔액 원화
        	var amJan = amIn - amOut;   // 현잔액 차입통화
        	var amCurrent = val ;       // 현출금액

        	if ( amCurrent == 0 || this.gfnIsNull(amCurrent))
        	{
        		amCurrentKrw = 0;
        	} else {
        		amCurrentKrw = this.fnGetTrunc(amJanKrw * amCurrent / amJan, 1);
        	}

        	trace(" fnSetAmOutKrw=>" +amCurrentKrw + ":" + amJanKrw);
        	this.dsList.setColumn(vRow, "AM_OUT_KRW" ,  amCurrentKrw);

        }

        // 환율 가져오기
        this.fnSetRtExchange = function ()
        {
        	this.dsExchange = new Dataset();
        	this.dsExchange.addColumn("TY_GUBUN", "string");
        	this.dsExchange.addColumn("CN_ROW", "int");
        	this.dsExchange.addColumn("VALUE", "string");
        	this.dsExchange.addColumn("MIN_VALUE", "string");
        	this.dsExchange.addColumn("DT_BASE", "string");
        	this.dsExchange.addColumn("CD_LOCAL_CURR", "string");
        	this.dsExchange.addColumn("CD_EXEC_CURR", "string");

        	this.dsExchange.addRow();
        	this.dsExchange.setColumn(0, "TY_GUBUN", "");
        	this.dsExchange.setColumn(0, "CN_ROW", 0);
        	this.dsExchange.setColumn(0, "VALUE", "");
        	this.dsExchange.setColumn(0, "MIN_VALUE", "");
        	this.dsExchange.setColumn(0, "DT_BASE", this.dsList.getColumn(this.dsList.rowposition, "DT_CHANGE"));
        	this.dsExchange.setColumn(0, "CD_LOCAL_CURR", "KRW");
        	this.dsExchange.setColumn(0, "CD_EXEC_CURR", this.dsList.getColumn(this.dsList.rowposition, "CD_CURR"));

        	var strSvcId    = "selectExc";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectExc=dsExchange";
        	var outData     = "dsRtEx=selectExc0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]


        };

        // 계획생성
        this.fnPlanCreat = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;
        	this.gfnConfirm("예적금 계획생성 합니다.", "fnPlanCreatCallback");
        }


        // 계획생성 Callback
        this.fnPlanCreatCallback = function(strId, val) {

        	if(val == false) return;

        	this.dsExcute.clearData();
        	var nrow = this.dsExcute.addRow();
        	this.dsExcute.setColumn(nrow, "NO_YEJUKUM", this.ScfNO_YEJUKUM.form.CDTextBox.value);
        	this.dsExcute.setColumn(nrow, "DT_DATE", this.dsList.getColumn(this.dsList.rowposition, "DT_CHANGE"));	// 변동일자
        	this.dsExcute.setColumn(nrow, "YN_FIRST", this.dsList.getColumn(this.dsList.rowposition, "YN_FIRST"));	// 최초예적금여부
        	this.dsExcute.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "e_create";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "e_create=dsExcute";
        	var outData     = "dsResult=e_create0";
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

        // 계획/실적
        this.fnPlanPerform = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	param.OWNER_ID = "DFF_DEPOSIT_CHG";

        	param.CD_CORP = this.divSearch.form.cfCD_CORP.form.CDTextBox.value;
        	param.DS_CORP = this.divSearch.form.cfCD_CORP.form.DSTextBox.value;
        	param.DT_FROM = this.pvDT_FROM;
        	param.DT_TO = this.gfnGetLastDate(this.dsList.getColumn(this.dsList.rowposition, "TO_CHANGE"));
        	param.NO_YEJUKUM = this.divSearch.form.cfNO_YEJUKUM.form.CDTextBox.value;
        	param.NM_YEJUKUM = this.divSearch.form.cfNO_YEJUKUM.form.DSTextBox.value;

        	this.gfnFormOpen("DFF", "DFF_PLANSILJUK", "", param);
        }

        // 전자결재상신
        this.fnApproval = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var nICnt = this.dsList.findRow(this.ucFlag,"I");
        	var nUCnt = this.dsList.findRow(this.ucFlag,"U");
        	var nDCnt = this.dsList.findRow(this.ucFlag,"D");

        	if( nICnt > -1|| nUCnt > -1 || nDCnt > -1) {
        		this.gfnAlert("저장 후 처리하세요.", "");
        		return;
        	}

        	// 결재상태 1,2 : 결재중,결재완료 시 return;
        	var tyAppr = this.dsList.getColumn(this.dsList.rowposition, "TY_APPR");
        	if ( tyAppr == "1" || tyAppr == "2" ) {
        		this.gfnAlert("결재상태를 확인 바랍니다.");
        		return;
        	}

        	//var url = "http://ngw.booyoung.co.kr/approval/legacy/goFormLink.do?mode=DRAFT&legacyFormID=WF_FORM_ERP_BORROWINGS";
        	var url = this.gfnGetConfig("DZ" , "GW_APROVAL_URL");
        	url += "approval/legacy/goFormLink.do?mode=DRAFT";
        	url += "&legacyFormID=WF_FORM_ERP_DFG_LOANCHG";
        	url += "&subject="+encodeURI("예적금 공시정보 상신");
        	url += "&dataType=proc";
        	url += "&empno=" + this.AuthClient.ID_USER;
        	//url += "&empno="+this.AuthClient.ID_USER; 현재 하나의 사번만가능하여 사번 고정
        	url += "&P_DS_KEY1="+this.dsSearch.getColumn(0, "NO_YEJUKUM");							// 관리번호
        	url += "&P_DS_KEY2="+this.dsList.getColumn(this.dsList.rowposition, "DT_CHANGE");	// 변동일자
        	url += "&P_DS_KEY3=&P_DS_KEY4=&P_DS_KEY5=";

        	trace("url :: " + url);

        	window.open(url,"_blank", "width=790,height=1000,menubar=no,scrollbars=no,resizable=no,status=no");
        }

        // 전자결재조회
        this.fnApprovalSearch = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var nICnt = this.dsList.findRow(this.ucFlag,"I");
        	var nUCnt = this.dsList.findRow(this.ucFlag,"U");
        	var nDCnt = this.dsList.findRow(this.ucFlag,"D");

        	if( nICnt > -1|| nUCnt > -1 || nDCnt > -1) {
        		this.gfnAlert("저장 후 처리하세요.", "");
        		return;
        	}

        	// 결재상태 0 : 결재전 시 return;
        	var tyAppr = this.dsList.getColumn(this.dsList.rowposition, "TY_APPR");
        	if ( tyAppr == "0") {
        		this.gfnAlert("결재상태를 확인 바랍니다.");
        		return;
        	}

        	var url = this.gfnGetConfig("DZ" , "GW_APROVAL_URL");
        	url += "approval/approval_Form.do?";
        	url +="forminstanceID="+this.dsList.getColumn(this.dsList.rowposition , "NO_APPR");
        	url +="&processID="+this.dsList.getColumn(this.dsList.rowposition , "NM_APPR");

        	trace("url :: " + url);
        	window.open(url,"_blank", "width=790,height=1000,menubar=no,scrollbars=no,resizable=no,status=no");
        }

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if ( e.oldvalue != e.newvalue ) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        };
        // 원단위 절사
        this.fnGetTrunc = function(amVal, vCnt){
        	var returnVal = this.gfnNvl(amVal, 0);
        	if(returnVal > 0){
        		returnVal = Math.floor(amVal/vCnt) * vCnt;
        	}
        	return returnVal;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DFF_DEPOSIT_CHG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
