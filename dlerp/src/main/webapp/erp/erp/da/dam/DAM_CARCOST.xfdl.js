(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAM_CARCOST");
            this.set_titletext("차량관련비용");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAMPR_CARCOST_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAMPR_CARCOST_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YM_CARCOST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CAR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CAR\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CAR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_CARCOST","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("작업년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtNO_CAR","0.0","staYM_CARCOST:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_CAR","edtNO_CAR:0.0","staYM_CARCOST:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("차종");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtTY_CAR","staTY_CAR:0.0","staYM_CARCOST:10.0","110","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_maxlength("50");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("30");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CAR","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("차량코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CAR","staCD_CAR:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DHX_CAR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_CARCOST","staYM_CARCOST:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_enableevent("true");
            obj.set_async("false");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_CAR","0.0","staYM_CARCOST:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("차량번호");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.getSetter("BeforeUserDataSetParam").set("fnGrid_BeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnGrid_AfterCDTextChanged");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctclYM_CARCOST.form.TextBox","value","dsSearch","YM_CARCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_CAR.form.CDTextBox","value","dsSearch","CD_CAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.edtNO_CAR","value","dsSearch","NO_CAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.edtTY_CAR","value","dsSearch","TY_CAR");
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
        this.registerScript("DAM_CARCOST.xfdl", function() {
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

        	//작업년월 셋팅
        	var today = this.gfnGetDate();
        	this.ctclYM_CARCOST.form.TextBox.set_value(today.substring(0,6));

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
        	this.ctclYM_CARCOST = this.divSearch.form.ctclYM_CARCOST;
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_CAR = this.divSearch.form.ccfCD_CAR;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_CAR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CAR.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAM_CARCOST");

        	// 그리드 코드파인드 설정
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	// 그리드 코드파인드 값 변경
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YM_CARCOST", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_CAR", "string");
        	this.dsSelect.addColumn("NO_CAR", "string");
        	this.dsSelect.addColumn("TY_CAR", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("GR_DEPT", "string");
        	this.dsSelect.addColumn("ID_USER", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("NO_SEQ", "int");
        	this.dsSave.addColumn("DT_CARCOST", "string");
        	this.dsSave.addColumn("CD_CAR", "string");
        	this.dsSave.addColumn("AM_INSURANCE", "bigdecimal");
        	this.dsSave.addColumn("AM_CARTAX", "bigdecimal");
        	this.dsSave.addColumn("AM_RENT", "bigdecimal");
        	this.dsSave.addColumn("AM_WASH", "bigdecimal");
        	this.dsSave.addColumn("AM_ETC", "bigdecimal");
        	this.dsSave.addColumn("AM_REPAIR", "bigdecimal");
        	this.dsSave.addColumn("AM_HIPASS", "bigdecimal");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
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
        	this.dsSelect.setColumn(0, "YM_CARCOST", this.gfnNvl(this.dsSearch.getColumn(0, "YM_CARCOST"),""));
        	this.dsSelect.setColumn(0, "CD_CORP", this.gfnNvl(this.dsSearch.getColumn(0, "CD_CORP"),""));
        	this.dsSelect.setColumn(0, "CD_CAR", this.gfnNvl(this.dsSearch.getColumn(0, "CD_CAR"),""));
        	this.dsSelect.setColumn(0, "NO_CAR", this.gfnNvl(this.dsSearch.getColumn(0, "NO_CAR"),""));
        	this.dsSelect.setColumn(0, "TY_CAR", this.gfnNvl(this.dsSearch.getColumn(0, "TY_CAR"),""));
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
        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.fnValidCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.", "fnValidCallback");
        		return false;
        	}

        	var nrow = this.gfnGridAdd(this.dxGrid);

        	this.dsList.setColumn(nrow, "DT_CARCOST", this.gfnGetDate());
        	this.dsList.setColumn(nrow, "CD_CORP", this.gfnNvl(this.ccfCD_CORP.form.CDTextBox.value,""));
        	this.dsList.setColumn(nrow, "CD_CAR", this.gfnNvl(this.ccfCD_CAR.form.CDTextBox.value,""));
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
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
        				this.dsSave.setColumn(nrow, "NO_SEQ", (flag == "I"? 0 : this.dsList.getColumn(i, "NO_SEQ")));
        				this.dsSave.setColumn(nrow, "DT_CARCOST", this.dsList.getColumn(i, "DT_CARCOST"));
        				this.dsSave.setColumn(nrow, "CD_CAR", this.gfnNvl(this.dsList.getColumn(i, "CD_CAR"),""));
        				this.dsSave.setColumn(nrow, "AM_INSURANCE", this.gfnNvl(this.dsList.getColumn(i, "AM_INSURANCE"),0));
        				this.dsSave.setColumn(nrow, "AM_CARTAX", this.gfnNvl(this.dsList.getColumn(i, "AM_CARTAX"),0));
        				this.dsSave.setColumn(nrow, "AM_RENT", this.gfnNvl(this.dsList.getColumn(i, "AM_RENT"),0));
        				this.dsSave.setColumn(nrow, "AM_WASH", this.gfnNvl(this.dsList.getColumn(i, "AM_WASH"),0));
        				this.dsSave.setColumn(nrow, "AM_ETC", this.gfnNvl(this.dsList.getColumn(i, "AM_ETC"),0));
        				this.dsSave.setColumn(nrow, "AM_REPAIR", this.gfnNvl(this.dsList.getColumn(i, "AM_REPAIR"),0));
        				this.dsSave.setColumn(nrow, "AM_HIPASS", this.gfnNvl(this.dsList.getColumn(i, "AM_HIPASS"),0));
        				this.dsSave.setColumn(nrow, "DS_REMARK", this.gfnNvl(this.dsList.getColumn(i, "DS_REMARK"),""));
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
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
        	if (this.gfnIsNull(this.ctclYM_CARCOST.form.TextBox.value)) {
        		this.fnValidCallback = function() {
        			this.ctclYM_CARCOST.form.TextBox.setFocus();
        		}
        		this.gfnAlert("작업년월을 입력하세요.", "fnValidCallback");
        		return false;
        	}
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.fnValidCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.", "fnValidCallback");
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
        	} else if(svcID == "save") {
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
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}
         	else if (id == "ccfCD_CAR") {
        		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			this.fnValidCallback = function() {
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("법인코드를 입력하세요.", "fnValidCallback");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.text);
        	}
        	return true;
        };
        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	if (id == "ccfCD_CORP") {
        		this.ccfCD_CAR.form.fnCodeFindClear();
        	}
         	else if (id == "ccfCD_CAR") {
        		;
        	}
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(id == "DAX_CFCAR"){
        		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			this.fnValidCallback = function() {
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("법인코드를 입력하세요.", "fnValidCallback");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	}
        	return true;
        };
        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsList_onvaluechanged = function(obj,e){

        	if(e.columnid == "AM_INSURANCE"	//보험료
        			||e.columnid == "AM_CARTAX"	//자동차세
        			||e.columnid == "AM_RENT"	//렌트비
        			||e.columnid == "AM_WASH"	//세차비
        			||e.columnid == "AM_ETC"	//기타
        			||e.columnid == "AM_REPAIR"	//수선비
        			||e.columnid == "AM_HIPASS"	//하이패스
        	){
        		var AmSum = this.gfnNvl(this.dsList.getColumn(e.row, "AM_INSURANCE"),0)
        				+ this.gfnNvl(this.dsList.getColumn(e.row, "AM_CARTAX"),0)
        				+ this.gfnNvl(this.dsList.getColumn(e.row, "AM_RENT"),0)
        				+ this.gfnNvl(this.dsList.getColumn(e.row, "AM_WASH"),0)
        				+ this.gfnNvl(this.dsList.getColumn(e.row, "AM_ETC"),0)
        				+ this.gfnNvl(this.dsList.getColumn(e.row, "AM_REPAIR"),0);
        				+ this.gfnNvl(this.dsList.getColumn(e.row, "AM_HIPASS"),0);

        		//this.dsList.set_enableevent(false);
        		this.dsList.setColumn(e.row, "AM_SUM", AmSum);
        		//this.dsList.set_enableevent(true);
        	}
        };

        //
        // // 엑셀업로드
        // this.fnUPloadExecl = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        // 	this.dsList.clearData();
        // 	this.gfnExcelImport("dsList","sheet1","A2","fnExcelImportCallback","import",this);
        // }
        //
        // /*
        //  *	엑셀업로드 Callback
        //  */
        // this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet) {
        //
        // 	// 다중 시트 처리시 양식의 해당 시트여부를 체크하고자 할땐 dsSheet 시트명 체크
        // // 	if (dsSheet.rowcount > 1) {
        // // 		trace(dsSheet.getColumn(1, "sheetname"));
        // // 	}
        //
        // 	// 엑셀 양식과 그리드 컬럼이 그대로 일치 하는경우 아래와 같이 처리.
        // 	// 아닌경우는 이부분 주석처리
        // 	if (dsOut.rowcount == 0)  {
        // 		this.gfnAlert("엑셀파일에 내용이 없습니다.");
        // 		return false;
        // 	}
        //
        // 	for (var i=0; i< this.dsList.getColCount(); i++)
        // 	{
        // 		sColumnId = "Column"+i;
        //
        // 		var sColumnNm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, i);
        // 		if (sColumnNm != "" && sColumnId != sColumnNm)
        // 		{
        // 			dsOut.updateColID(sColumnId, sColumnNm);
        // 		}
        // 	}
        //
        // 	// 양식이 일치하고 엑셀내역을 기존데이터에 Insert하지 않고
        // 	// 엑셀내역 그대로 그리드 반영할 시 copyData
        // 	//this.dsList.copyData(dsOut);
        //
        // 	this.dsList.set_enableevent(false);
        // 	for (var i=0; i< dsOut.rowcount; i++) {
        // 		for (var j=0; j< dsOut.colcount; j++) {
        // 			if (!this.gfnIsNull(dsOut.getColumn(i,j)) ){
        // 				dsOut.setColumn(i,j,nexacro.trim(dsOut.getColumn(i,j)));
        // 				var strColID = dsOut.getColID( j );
        // 		if ( strColID == "YM_CARCOST" ){
        // 					dsOut.setColumn(i,j,dsOut.getColumn(i,j).replace(/\-/g,''));
        // 				}
        // 			}
        // 		}
        // 		var nrow = this.dsList.addRow();
        // 		this.dsList.setColumn(nrow, this.ucFlag, "I");
        //
        // 		// 양식이 일치하는 경우 copyRow
        // 		this.dsList.copyRow(nrow, dsOut, i);
        //
        // 	}
        //
        // 	this.dsList.set_enableevent(true);
        // 	this.gfnSetFormStatus(this, "I");
        // };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAM_CARCOST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
