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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAUPR_SALARY_AUTOSLIPMAIN_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DAZPR_COMMONCODE_COMBO</Col></Row><Row><Col id=\"SP\">DAUPR_SALARY_AUTOSLIP_CANCEL</Col><Col id=\"TARGET\">slipCalc</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DAUPR_SALARY_AUTOSLIPMAIN_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YM_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"SN_SALARY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YM_SALARY\"/><Col id=\"CD_CORP\"/><Col id=\"TY_SALARY\"/><Col id=\"SN_SALARY\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SALARY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_BASE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("귀속년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_SALARY","staYM_BASE:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.getSetter("AfterCDTextChanged").set("fnSearchInit");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_SALARY","ctclYM_SALARY:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("지급구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_SALARY","staTY_SALARY:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsTY_SALARY");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_readonly("false");
            obj.set_value("S");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSN_SALARY","cboTY_SALARY:5","10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_readonly("false");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cboSN_SALARY_innerdataset = new nexacro.NormalDataset("divSearch_form_cboSN_SALARY_innerdataset", obj);
            divSearch_form_cboSN_SALARY_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">6</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">7</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">8</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">9</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboSN_SALARY_innerdataset);
            obj.set_text("1");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","cboSN_SALARY:0.0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
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
            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ctclYM_SALARY.form.TextBox","value","dsSearch","YM_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSN_SALARY","value","dsSearch","SN_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboTY_SALARY","value","dsSearch","TY_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAU_AUTOSLIPMAIN.xfdl", function() {
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

        	this.fnSetCombo();

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().YM_SALARY) && !this.gfnIsNull(this.getOwnerFrame().TY_SALARY)) {
        		this.dsSearch.setColumn(0, "YM_SALARY", this.getOwnerFrame().YM_SALARY);
        		this.dsSearch.setColumn(0, "TY_SALARY", this.getOwnerFrame().TY_SALARY);
        		this.dsSearch.setColumn(0, "SN_SALARY", this.getOwnerFrame().SN_SALARY);
        		this.dsSearch.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);
        		this.divSearch.form.ccfCD_CORP.form.DSTextBox.set_value(this.getOwnerFrame().DS_CORP);

        		this.FormBtns.Select.click();
        	}else{
        		var toDay = this.gfnGetDate().substr(0,6);
        		this.dsSearch.setColumn(0, "YM_SALARY", toDay);

        		this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        		this.divSearch.form.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.divSearch.form.cboTY_SALARY.set_index(1);	// 급여 선택
        		this.dsSearch.setColumn(0, "SN_SALARY", "1");

        		this.fnBtnEnable();
        	}


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
        	//this.btnExcelUpload = this.gfnFormButtonAdd("btnExcelUpload", "fnExcelUpload"); 	//엑셀업로드
        	this.btnSlip = this.gfnFormButtonAdd("btnSlip", "fnSlip"); 	//전표발행
        	this.btnSlipCalc = this.gfnFormButtonAdd("btnSlipCalc", "fnSlipCalc"); 	//전표취소
        	this.btnSlipSel = this.gfnFormButtonAdd("btnSlipSel", "fnSlipSel"); 	//전표조회
        };



        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctclYM_SALARY = this.divSearch.form.ctclYM_SALARY;
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.cboTY_SALARY = this.divSearch.form.cboTY_SALARY;
        	this.cboSN_SALARY = this.divSearch.form.cboSN_SALARY;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAU_AUTOSLIPMAIN");

        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 셀 수정가능 여부
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YM_SALARY", "string");
        	this.dsSelect.addColumn("TY_SALARY", "string");
        	this.dsSelect.addColumn("SN_SALARY", "int");
        	this.dsSelect.addColumn("ID_USER", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("GR_CORP", "string");

        	this.dsSlipCalc = new Dataset();
        	this.dsSlipCalc.addColumn("CD_CORP", "string");
        	this.dsSlipCalc.addColumn("YM_SALARY", "string");
        	this.dsSlipCalc.addColumn("TY_SALARY", "string");
        	this.dsSlipCalc.addColumn("SN_SALARY", "int");
        	this.dsSlipCalc.addColumn("CD_TRADE", "string");
        	this.dsSlipCalc.addColumn("CD_DEPT_BH", "string");
        	this.dsSlipCalc.addColumn("ID_USER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("YM_SALARY", "string");
        	this.dsUpdate.addColumn("TY_SALARY", "string");
        	this.dsUpdate.addColumn("SN_SALARY", "bigdecimal");
        	this.dsUpdate.addColumn("ID_SABUN", "string");
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("CD_DEPT", "string");
        	this.dsUpdate.addColumn("DT_ORDER", "string");
        	this.dsUpdate.addColumn("AM_RETURN", "bigdecimal");
        	this.dsUpdate.addColumn("ID_USER", "string");
        	this.dsUpdate.addColumn("GR_SEARCH", "string");
        	this.dsUpdate.addColumn("GR_CORP", "string");

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
        	this.dsSelect.setColumn(0, "YM_SALARY", this.dsSearch.getColumn(0, "YM_SALARY"));
        	this.dsSelect.setColumn(0, "TY_SALARY", this.dsSearch.getColumn(0, "TY_SALARY"));
        	this.dsSelect.setColumn(0, "SN_SALARY", this.dsSearch.getColumn(0, "SN_SALARY"));
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "GR_CORP", this.AuthClient.CD_CORP);

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
        	//var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current

        	//this.dsList.setColumn(nrow, "YR_BASE", this.dsSearch.getColumn(0, "YR_BASE"));
        	//this.dsList.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsUpdate.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "YM_SALARY", this.dsList.getColumn(i, "YM_SALARY"));
        				this.dsUpdate.setColumn(nrow, "TY_SALARY", this.dsList.getColumn(i, "TY_SALARY"));
        				this.dsUpdate.setColumn(nrow, "SN_SALARY", this.dsList.getColumn(i, "SN_SALARY"));
        				this.dsUpdate.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        				this.dsUpdate.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsUpdate.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        				this.dsUpdate.setColumn(nrow, "DT_ORDER", this.dsList.getColumn(i, "DT_ORDER"));
        				this.dsUpdate.setColumn(nrow, "AM_RETURN", this.dsList.getColumn(i, "AM_RETURN"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsUpdate.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        				this.dsUpdate.setColumn(nrow, "GR_CORP", this.AuthClient.CD_CORP);
        				break;
        		}
        	}

        	if (this.dsUpdate.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate";
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"YM_SALARY"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctclYM_SALARY.form.TextBox.setFocus();
        		}
        		this.gfnAlert("귀속년월을 입력하세요.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_CORP"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인을 입력하세요.", "fnVaidateCallback");
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

        		this.fnBtnEnable();
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.gfnAlert("저장되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "combo") {
        		//this.divSearch.form.cboTY_SALARY.set_index(1);	// 급여 선택
        	}else if (svcID == "slipCalc") {
        		if(errorCode == 0){
        			this.fnSlipVaidateCallback = function() {
        				this.FormBtns.Select.click();
        			}
        			this.gfnAlert("전표가 취소되었습니다.", "fnSlipVaidateCallback");
        		}else{
        			this.gfnAlert(errorMsg);
        		}
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
        	}else if(id == "ccfID_SABUN") {

        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(id == "ccfCD_CORP"){

        	}else if(id == "ccfID_SABUN") {

        	}
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);

        	if(colnm == "AM_RETURN") { //급여환수
        		if(!this.gfnIsNull(this.dsList.getColumn(row, "CD_TRADE"))){ //전표번호
        			return false;
        		}
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

        /*
        this.dsList_onvaluechanged = function(obj:nexacro.NormalDataset,e:nexacro.DSColChangeEventInfo)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		// 생년월일 변경시 나이 셋팅
        		if(e.columnid == "ID_RESIDENT") {
        			this.dsList.setColumn(e.row, "NO_AGE", this.dsList.getColumn(e.row,"YR_BASE") - this.dsList.getColumn(e.row,"ID_RESIDENT").substr(0,4) + 1);
        		}
        	}
        };
        */

        // 확장버튼 활성화 or 비활성화 처리
        this.fnBtnEnable = function() {
        	if(this.dsList.rowcount < 2){	// 필터row가 있는 그리드이기때문에 데이터가 없어도 카운트는1이다.
        		this.btnSlip.set_enable(false); 		//전표발행
        		this.btnSlipCalc.set_enable(false); 	//전표취소
        		this.btnSlipSel.set_enable(false); 	//전표조회
        	}else{
        		if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"))){
        			this.btnSlip.set_enable(true); 		//전표발행
        			this.btnSlipCalc.set_enable(false); 	//전표취소
        			this.btnSlipSel.set_enable(false); 	//전표조회
        		}else{
        			this.btnSlip.set_enable(false); 		//전표발행
        			this.btnSlipCalc.set_enable(true); 	//전표취소
        			this.btnSlipSel.set_enable(true); 	//전표조회
        		}
        	}
        };

         // 전표발행 버튼 클릭시 팝업화면 호출
         this.fnSlip = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	param.YM_SALARY = this.dsSearch.getColumn(0, "YM_SALARY");
        	param.TY_SALARY = this.dsSearch.getColumn(0, "TY_SALARY");
            param.SN_SALARY = this.dsSearch.getColumn(0, "SN_SALARY");
        	param.CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");
        	param.DS_CORP = this.ccfCD_CORP.form.DSTextBox.value;
        	param.CD_DEPT_INSA = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT_INSA");
        	param.DS_DEPT_INSA = this.dsList.getColumn(this.dsList.rowposition, "DS_DEPT_INSA");
        	param.DT_SALARY = this.dsList.getColumn(this.dsList.rowposition, "DT_SALARY");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAU_AUTOSLIPMAIN_ISSUE", "fnSlipCallback", param);
        }

         this.fnSlipCallback = function(svcID, value) {
        	if(value == true){
        		this.FormBtns.Select.click();
        	}
        };

         // 전표취소 버튼 클릭시 팝업화면 호출
         this.fnSlipCalc = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	this.gfnConfirm("급여자동전표를 취소하시겠습니까?", "fnExec_callback");
        }

        // 전표취소 버튼 클릭 후 callback
        this.fnExec_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsSlipCalc.clearData();
        		this.dsSlipCalc.addRow();

        		this.dsSlipCalc.setColumn(0, "CD_CORP", this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));
        		this.dsSlipCalc.setColumn(0, "YM_SALARY", this.dsList.getColumn(this.dsList.rowposition, "YM_SALARY"));
        		this.dsSlipCalc.setColumn(0, "TY_SALARY", this.dsList.getColumn(this.dsList.rowposition, "TY_SALARY"));
        		this.dsSlipCalc.setColumn(0, "SN_SALARY", this.dsList.getColumn(this.dsList.rowposition, "SN_SALARY"));
        		this.dsSlipCalc.setColumn(0, "CD_TRADE", this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"));
        		this.dsSlipCalc.setColumn(0, "CD_DEPT_BH", this.AuthClient.CD_DEPT);
        		this.dsSlipCalc.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        		var strSvcId    = "slipCalc";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "slipCalc=dsSlipCalc";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}else{
        		this.FormBtns.Select.click();
        	}
        }

         // 전표조회 버튼 클릭시 팝업화면 호출
         this.fnSlipSel = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	if (this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE")))) {
         		this.gfnAlert("전표번호는 필수입니다.");
         		return;
         	}

         	var cdSlip = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE")).substr(0,14);

         	var param = {};
         	param.IUD_FLAG = "S";
         	param.CD_TRADE = cdSlip;
         	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param, this.getOffsetWidth(), this.getOffsetHeight());
        }


        // 콤보 조회
        this.fnSetCombo = function() {

           this.dsCombo = new Dataset();
           this.dsCombo.addColumn("TY_SEL", "string");
           this.dsCombo.addColumn("CD_PREFIX", "string");
           this.dsCombo.addColumn("CD_UPPREFIX", "string");

           this.dsCombo.addRow();
           this.dsCombo.setColumn(0, "TY_SEL", "P");
           this.dsCombo.setColumn(0, "CD_PREFIX", "GS");
           this.dsCombo.setColumn(0, "CD_UPPREFIX", "");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_SALARY=combo0";
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboTY_SALARY.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.cboSN_SALARY.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAU_AUTOSLIPMAIN.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
