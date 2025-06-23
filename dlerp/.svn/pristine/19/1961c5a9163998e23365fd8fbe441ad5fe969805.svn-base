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
            this.set_titletext("예적금이자수익결산");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DFFPR_GYULSAN_SELECT</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DFFPR_GYULSAN_CREATE</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DFFPR_GYULSAN_UPDATE</Col></Row><Row><Col id=\"TARGET\">autoslip</Col><Col id=\"SP\">DFFPR_GYULSAN_AUTOSLIP</Col></Row><Row><Col id=\"TARGET\">autoslipx</Col><Col id=\"SP\">DFFPR_GYULSAN_AUTOSLIPX</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DFFPR_GYULSAN_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRtEx", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">Y</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfCD_CORP","sta04:0.0","10.0","270","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","cfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("회계년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","sta00:110","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("결산종류");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_GUBUN","sta02:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_GUBUN");
            obj.set_text("진행중");
            obj.set_value("N");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("calYM_WORK","453","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
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
            obj = new BindItem("item0","divSearch.form.cfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.calYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboTY_GUBUN","value","dsSearch","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DFF_GYULSAN_MISU.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        var tmSlip = "";	// 병합전표발행KEY

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
        	this.fnSetCombo();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	// 입력,저장,삭제 버튼 비활성화 처리
        //  	this.FormBtns.Add.set_enable(false);
        //  	this.FormBtns.Save.set_enable(false);
        //  	this.FormBtns.Del.set_enable(false);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnCreateData = this.gfnFormButtonAdd("btnCreateData", "fnCreateData");//, "자료생성");
        	this.btnSlipPub = this.gfnFormButtonAdd("btnSlipPub", "fnSlipPub");//, "전표발행");
        	this.btnSlipSelect = this.gfnFormButtonAdd("btnSlipSelect", "fnSlipSelect");//, "전표조회");
        	this.btnSlipCncl = this.gfnFormButtonAdd("btnSlipCncl", "fnSlipCncl");//, "전표취소");
        	this.btnStatusSelect = this.gfnFormButtonAdd("btnStatusSelect", "fnStatusSelect");//, "현황조회");
        	this.btnAgrMntInf = this.gfnFormButtonAdd("btnAgrMntInf", "fnAgrMntInf");//, "약정정보");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	// 조회조건
        	this.cfCD_CORP  = this.divSearch.form.cfCD_CORP;		// 법인코드
        	this.calYM_WORK = this.divSearch.form.calYM_WORK;		// 회계년월
        	this.cboTY_GUBUN = this.divSearch.form.cboTY_GUBUN;		// 결산종류

        	this.dxGrid = this.divData.form.objGrid;				// 그리드
        	this.grSearch = this.FormInfo.GR_SEARCH;				// 권한?
        	this.cdGroup = this.gfnIsNull(this.AuthClient.CD_GROUP) ? "" : this.AuthClient.CD_GROUP;				// 그룹코드
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.cfCD_CORP.CodeFindName = "DZX_CFCORP";								// 법인코드(조회조건)
        	this.cfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFF_GYULSAN_MISU");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        	this.dxGrid.AfterAllCheck = "fnGrid_AfterAllCheck";
        	this.dsList.addEventHandler("oncolumnchanged", this.dsList_ColumnChanged, this);

        	// 법인코드 init
        	if (this.gfnIsNull(this.cfCD_CORP.form.CDTextBox.value)) {
        		this.cfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.cfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}

        	// 회계년월
        	var vToday = this.gfnGetDate().substr(0,6);
        	this.dsSearch.setColumn(0, "YM_WORK", vToday);


        	// 권한체크
        	if (nexacro.toNumber(this.grSearch) >= 2) {
        		this.cfCD_CORP.set_enable(false);
        	}

        	// 법인코드 포커스추가
        	this.cfCD_CORP.form.CDTextBox.setFocus();
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");

        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("CD_CORP", "string");
        	this.dsCreate.addColumn("YM_WORK", "string");
        	this.dsCreate.addColumn("TY_GUBUN", "string");
        	this.dsCreate.addColumn("ID_USER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("YM_WORK", "string");
        	this.dsUpdate.addColumn("NO_YEJUKUM", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("CD_VENDOR", "string");
        	this.dsUpdate.addColumn("CD_DEPT_ACNT", "string");
        	this.dsUpdate.addColumn("AM_WONGEUM", "bigdecimal");
        	this.dsUpdate.addColumn("AM_EZA", "bigdecimal");
        	this.dsUpdate.addColumn("FR_EZA", "string");
        	this.dsUpdate.addColumn("TO_EZA", "string");
        	this.dsUpdate.addColumn("RT_EZA", "bigdecimal");
        	this.dsUpdate.addColumn("RM_BIGO", "string");
        	//this.dsUpdate.addColumn("TM_SLIP", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");
        	this.dsUpdate.addColumn("AM_EZA_KRW", "bigdecimal");
        	this.dsUpdate.addColumn("CD_CURR", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("YM_WORK", "string");
        	this.dsDelete.addColumn("NO_YEJUKUM", "string");
        	this.dsDelete.addColumn("TY_GUBUN", "string");
        	this.dsDelete.addColumn("ID_USER", "string");

        	this.dsAutoSlip = new Dataset();
        	this.dsAutoSlip.addColumn("TM_SLIP", "string");
        	this.dsAutoSlip.addColumn("YN_SLIP", "string");
        	this.dsAutoSlip.addColumn("CD_CORP", "string");
        	this.dsAutoSlip.addColumn("YM_WORK", "string");
        	this.dsAutoSlip.addColumn("TY_GUBUN", "string");
        	this.dsAutoSlip.addColumn("NO_YEJUKUM", "string");
        	this.dsAutoSlip.addColumn("ID_USER", "string");

        	this.dsAutoSlipx = new Dataset();
        	this.dsAutoSlipx.addColumn("NO_SLIP", "string");
        	this.dsAutoSlipx.addColumn("ID_USER", "string");
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
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));

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
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
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
        	this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function(svcId) {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsUpdate.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        				this.dsUpdate.setColumn(nrow, "NO_YEJUKUM", this.dsList.getColumn(i, "NO_YEJUKUM"));
        				this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        				this.dsUpdate.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsUpdate.setColumn(nrow, "CD_DEPT_ACNT", this.dsList.getColumn(i, "CD_DEPT_ACNT"));
        				this.dsUpdate.setColumn(nrow, "AM_WONGEUM", this.dsList.getColumn(i, "AM_WONGEUM"));
        				this.dsUpdate.setColumn(nrow, "AM_EZA", this.dsList.getColumn(i, "AM_EZA"));
        				this.dsUpdate.setColumn(nrow, "FR_EZA", this.dsList.getColumn(i, "FR_EZA"));
        				this.dsUpdate.setColumn(nrow, "TO_EZA", this.dsList.getColumn(i, "TO_EZA"));
        				this.dsUpdate.setColumn(nrow, "RT_EZA", this.dsList.getColumn(i, "RT_EZA"));
        				this.dsUpdate.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsUpdate.setColumn(nrow, "AM_EZA_KRW", this.dsList.getColumn(i, "AM_EZA_KRW"));
        				this.dsUpdate.setColumn(nrow, "CD_CURR", this.dsList.getColumn(i, "CD_CURR"));
        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        				this.dsDelete.setColumn(nrow, "NO_YEJUKUM", this.dsList.getColumn(i, "NO_YEJUKUM"));
        				this.dsDelete.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        				this.dsDelete.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0 ) return;

        	svcId = this.gfnIsNull(svcId) ? "save" : svcId;

        	var strSvcId    = svcId;
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate delete=dsDelete";
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        		this.gfnAlert("법인코드를 입력 하세요.");
        		this.cfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_WORK"))) {
        		this.gfnAlert("회계년월을 입력 하세요.");
        		this.calYM_WORK.form.TextBox.setFocus();
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
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if (svcID == "create") {
        		this.FormBtns.Select.click();

        	} else if(svcID == "combo") {
         		this.cboTY_GUBUN.set_index(0);

        	} else if (svcID == "autoslipN") {
        		if (errorCode == 0) {
        			this.fnAutoSlip("Y");
        		}
        	} else if (svcID == "autoslipY") {
        	trace(" errorCode=>" + errorCode + ",  errorMsg => " + errorMsg);
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "selectExc") {
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

        	var cdCorp = this.cfCD_CORP.form.CDTextBox.value;

        	switch(id) {

        	// 법인코드(조회조건)
        	case "cfCD_CORP":
        		dsUserParam.setColumn(nrow, "CD_GROUP", this.cdGroup);
        		break;

        	default:
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	var arr = codeFindData;

        	switch(id) {

        	// 법인코드(조회조건)
        	case "cfCD_CORP":
        		break;

        	default:
        	}
        	return true;
        }



        this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow) {
        	var cdCorp = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");

        	// 거래처
        	if (id == "DFX_CFVENDOR") {
        		dsUserParam.setColumn(nrow, "TY_VENDOR1", "거래처");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnIsNull(cdCorp) ? this.dsSearch.getColumn(0, "CD_CORP") : cdCorp);
        	}

        	// 귀속부서
        	if (id == "DFX_CFACNTUNIT") {
        		dsUserParam.setColumn(nrow, "CD_GROUP", this.cdGroup);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnIsNull(cdCorp) ? this.dsSearch.getColumn(0, "CD_CORP") : cdCorp);
        	}
        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	// 거래처
        	if (id == "DFX_CFVENDOR") {
        	}

        	// 귀속부서
        	if (id == "DFX_CFACNTUNIT") {
        	}
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        //그리드 값변경 이벤트
        this.dsList_ColumnChanged = function(obj, e)
        {
        	trace("그리드 값변경 이벤트 " + e.columnid + "/" + e.newvalue)
        	if(e.newvalue == e.oldvalue) { return;}
        	//
        	if(e.columnid == "TO_EZA"){

        		if ( !this.gfnIsNull(this.dsList.getColumn(e.row , "CD_CURR")) && this.dsList.getColumn(e.row , "CD_CURR")!="KRW"  )
        		{
        			this.fnSetRtExchange();
        		}

        	}else if(e.columnid == "RT_EXCH")
        	{
        		if (this.dsList.getColumn(e.row , "AM_EZA") > 0)
        		{
        			this.fnSetRtExchangeCallback(e.row, "AM_EZA");
        		}

        	}else if(e.columnid == "AM_EZA")
        	{
        		this.fnSetRtExchangeCallback(e.row, e.columnid);
        	}
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
        	this.dsExchange.setColumn(0, "DT_BASE", this.dsList.getColumn(this.dsList.rowposition, "TO_EZA"));
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

        //환율 계산 처리
        this.fnSetRtExchangeCallback = function(row , column)
        {
        	var rtExchange = this.dsList.getColumn(row, "RT_EXCH");

        	trace("fnSetRtExchangeCallback rtExchage=>" + rtExchange);

        	var amContKrw = nexacro.toNumber(this.dsList.getColumn(row, column )) * rtExchange;

        	this.dsList.setColumn(row, column+"_KRW", this.fnGetTrunc(amContKrw,1));

        };

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

        // 자료생성
        this.fnCreateData = function(obj,e) {

            if (!this.fnPopupValidate("CreateData")) {
        			return false;
        		}

        	this.gfnConfirm( "자료생성 하시겠습니까??", "fnCreateCallback");

        }

        this.fnCreateCallback = function(strId, val) {
        	if(val == false) return;

        	this.dsCreate.clearData();
        	var nRow = this.dsCreate.addRow();

        	this.dsCreate.setColumn(nRow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));					// 법인코드
        	this.dsCreate.setColumn(nRow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));					// 회계년월
        	this.dsCreate.setColumn(nRow, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));					// 결산종류
        	this.dsCreate.setColumn(nRow, "ID_USER", this.AuthClient.ID_USER);	// 로그인id

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
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        this.fnPopupValidate = function(popId) {

        	trace(" fnPopupValidate=>" + popId);
        	switch(popId) {

        	case "CreateSlip":
        		var fndRow = this.dsList.findRow("CHK", 1);
        		if (this.dsList.rowcount == 0 || fndRow <= -1) {
        			this.gfnAlert("전표발행 대상을 체크 하시기 바랍니다!");
        			return false;
        		}
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        		this.gfnAlert("전표발행 시 법인코드는 필수입력 항목입니다.");
        		this.cfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        		}

        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_WORK"))) {
        			this.gfnAlert("전표발행 시 회계년월은 필수입력 항목입니다.");
        			this.calYM_WORK.form.TextBox.setFocus();
        			return false;
        		}
        		break;
        	case "CreateData" :

        		var cdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        		var ymWork = this.dsSearch.getColumn(0, "YM_WORK");
        		var tyGubun = this.dsSearch.getColumn(0, "TY_GUBUN");
        		var key = "";
        		var msg = " 필수 입력 항목 입니다.";

        		if ( this.gfnIsNull(cdCorp) ) {
        			key = "자료생성시 법인코드는";
        			this.gfnAlert(key + msg);
        			this.cfCD_CORP.form.CDTextBox.setFocus();
        			return false;
        		}

        		if ( this.gfnIsNull(ymWork) ) {
        			key = "자료생성시 회계년월은";
        			this.gfnAlert(key + msg);
        			this.calYM_WORK.form.TextBox.setFocus();
        			return false;
        		}

        		if ( this.gfnIsNull(tyGubun) ) {
        			key = "자료생성시 결산종류는";
        			this.gfnAlert(key + msg);
        			this.cboTY_GUBUN.setFocus();
        			return false;
        		}
        		break;
        	case "SelectSlip" :
        		var chkCnt = this.dsList.getCaseCount("CHK == 1");

        		if (chkCnt == 0) {
        			this.gfnAlert("전표취소 대상을 체크 하시기 바랍니다!");
        			return false;
        		}

        		for ( var i=0; i < this.dsList.rowcount; i++ ) {
        			if ( this.dsList.getColumn(i, "CHK") == 1 ) {
        				if ( this.gfnIsNull(this.dsList.getColumn(i, "NO_SLIP") )) {
        					this.gfnAlert("발행된 전표가 없습니다.");
        					return false;
        				}
        			}
        		}
        		break;

        	}

        	return true;
        }

        // 전표발행
        this.fnSlipPub = function(obj,e) {

        	if (!this.fnPopupValidate("CreateSlip")) {
        			return false;
        		}

        	this.gfnConfirm( "전표발행 하시겠습니까?", "fnSlipCallback");
        	//this.fnAutoSlip("N");
        }

        this.fnSlipCallback = function(strID, val) {
        	if (val)
        	{
        		this.fnAutoSlip("N");
        	}

        }

        /*
         * 전표발행
         */
        this.fnAutoSlip = function(slipYn) {

        	this.dsAutoSlip.clearData();

        	// 전표발행
        	if (slipYn == "N") {

        		tmSlip = this.AuthClient.ID_USER + this.gfnGetDate("milli");

        		for (var i=0; i < this.dsList.rowcount; i++) {
        			if (this.dsList.getColumn(i, "CHK") == 1) {
        				var nrow = this.dsAutoSlip.addRow();
        				this.dsAutoSlip.setColumn(nrow, "TM_SLIP", tmSlip);
        				this.dsAutoSlip.setColumn(nrow, "YN_SLIP", slipYn);
        				this.dsAutoSlip.setColumn(nrow, "CD_CORP", this.cfCD_CORP.form.CDTextBox.value);
        				this.dsAutoSlip.setColumn(nrow, "YM_WORK", this.calYM_WORK.form.TextBox.value);
        				this.dsAutoSlip.setColumn(nrow, "TY_GUBUN", this.cboTY_GUBUN.value);
        				this.dsAutoSlip.setColumn(nrow, "NO_YEJUKUM", this.dsList.getColumn(i, "NO_YEJUKUM"));
        				this.dsAutoSlip.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			}
        		}

        	// 전표발행후처리
        	} else {
        		this.dsAutoSlip.clearData();
        		var nrow = this.dsAutoSlip.addRow();
        		this.dsAutoSlip.setColumn(nrow, "TM_SLIP", tmSlip);
        		this.dsAutoSlip.setColumn(nrow, "YN_SLIP", slipYn);
        		this.dsAutoSlip.setColumn(nrow, "CD_CORP", this.cfCD_CORP.form.CDTextBox.value);
        		this.dsAutoSlip.setColumn(nrow, "YM_WORK", this.calYM_WORK.form.TextBox.value);
        		this.dsAutoSlip.setColumn(nrow, "TY_GUBUN", this.cboTY_GUBUN.value);
        		this.dsAutoSlip.setColumn(nrow, "NO_YEJUKUM", this.dsList.getColumn(this.dsList.findRow("CHK", 1), "NO_YEJUKUM"));
        		this.dsAutoSlip.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}

        	if (this.dsAutoSlip.rowcount == 0) return;

        	var strSvcId    = "autoslip" + slipYn;
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "autoslip=dsAutoSlip";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }


        // 전표조회
        this.fnSlipSelect = function(obj,e) {

        	// todo...
        	// 선택된 row가 있을 경우에만 팝업을 띄움

        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if ( this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "NO_SLIP") )) {
        		this.gfnAlert("발행된 전표가 없습니다.");
        		return false;
        	}
        	//var chkRow = this.dsList.findRow("CHK", 1);
        	var param = {};
        	param.CD_TRADE = this.dsList.getColumn(this.dsList.rowposition, "NO_SLIP");
        	param.IUD_FLAG = "S";
        	param.strYN_JUNDO_START = "";

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	//trace("this.FormInfo.CD_MODULE :: " + this.FormInfo.CD_MODULE);
        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnPopCallBack", param);

        }


        this.fnPopCallBack = function(svcID, val) {
        	//if (val != false) {
        		//var json = JSON.parse(val);

        		if (svcID.indexOf("DHA_ISSUESLIP") > -1) {
        			//this.FormBtns.Select.click();
        		}
        	//}
        }


        // 전표취소
        this.fnSlipCncl = function(obj,e) {

        	if (!this.fnPopupValidate("SelectSlip")) {
        			return false;
        		}

        	this.gfnConfirm("전표취소 처리 하시겠습니까?","fnSlipCncl_callback");
        }


        this.fnSlipCncl_callback = function(strId, val) {

        	if (val) {
        		this.dsAutoSlipx.clearData();

        		for (var i=0; i < this.dsList.rowcount; i++) {
        			if (this.dsList.getColumn(i, "CHK") == 1) {
        				var nrow = this.dsAutoSlipx.addRow();
        				this.dsAutoSlipx.setColumn(nrow, "NO_SLIP", this.dsList.getColumn(i, "NO_SLIP"));
        				this.dsAutoSlipx.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			}
        		}

        		if (this.dsAutoSlipx.rowcount == 0) return;

        		var strSvcId    = "save";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "autoslipx=dsAutoSlipx";
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
        }



        // 공통코드콤보
        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");
        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(0, "CD_TYPE", "FC");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_GUBUN=combo0";
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


        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };


        // 현황조회
        this.fnStatusSelect = function(obj,e) {

        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	var popId = "DFF_GYULSAN_MISU2";

        	var param = {};
        	param.CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");		// 법인코드
        	param.DS_CORP = this.cfCD_CORP.form.DSTextBox.value;		// 법인명
        	param.FR_MONTH = this.dsSearch.getColumn(0, "YM_WORK");		// 회계년월_f
        	param.TO_MONTH = this.dsSearch.getColumn(0, "YM_WORK");		// 회계년월_t
        	param.TY_GUBUN = this.dsSearch.getColumn(0, "TY_GUBUN");	// 결산종류

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, popId, "fnPopCallBack", param);
        }


        // 약정정보
        this.fnAgrMntInf = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;
        	var param = {};

        	param.CD_CORP = this.cfCD_CORP.form.CDTextBox.value;							// 법인코드
        	param.DS_CORP = this.cfCD_CORP.form.DSTextBox.value;							// 법인명
        	param.NO_YEJUKUM = this.dsList.getColumn(this.dsList.rowposition,"NO_YEJUKUM");	// 관리번호
        	param.NM_YEJUKUM = this.dsList.getColumn(this.dsList.rowposition,"NM_YEJUKUM");	// 예적금명

        	this.gfnFormOpen("DFF", "DFF_DEPOSIT_REG", "fnPopCallBack", param);
        }

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
            this.divData.form.objGrid.addEventHandler("oncellclick",this.divData_objGrid_oncellclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DFF_GYULSAN_MISU.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
