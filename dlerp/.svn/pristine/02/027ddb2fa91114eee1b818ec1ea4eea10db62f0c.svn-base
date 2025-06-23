(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DHV_BUYTAXRATE");
            this.set_titletext("현장안분비율관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListExcel", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_EBILLBUYVAT_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHVPR_EBILLBUYVAT_INSERT</Col></Row><Row><Col id=\"TARGET\">execute</Col><Col id=\"SP\">DHVPR_EBILLBUYVAT_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SALEBUY\" type=\"STRING\" size=\"256\"/><Column id=\"YY_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PROOF\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNO_TAX", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">1기예정</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">1기확정</Col></Row><Row><Col id=\"CD_CODE\">3</Col><Col id=\"DS_CODE\">2기예정</Col></Row><Row><Col id=\"CD_CODE\">4</Col><Col id=\"DS_CODE\">2기확정</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SALEBUY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">I</Col><Col id=\"DS_CODE\">매입</Col></Row><Row><Col id=\"CD_CODE\">O</Col><Col id=\"DS_CODE\">매출</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_PROOF", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">AA</Col><Col id=\"DS_CODE\">세금계산서</Col></Row><Row><Col id=\"CD_CODE\">BA</Col><Col id=\"DS_CODE\">계산서</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("세무단위");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","sta00:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFSELFACNT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("crdoTY_SALEBUY","ccfCD_DEPT:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsTY_SALEBUY");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_columncount("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYY_WORK","crdoTY_SALEBUY:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("작성년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYY_WORK","staYY_WORK:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYY_WORK00","ctclYY_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("작성기수");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboNO_TAX","staYY_WORK00:0.0","10.0","98","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsNO_TAX");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_FROM","ccboNO_TAX:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            obj.set_inputtype("digit");
            obj.set_readonly("true");
            obj.set_text("2020-04-04");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_WORK","ctxtDT_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_TO","staDT_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            obj.set_inputtype("digit");
            obj.set_readonly("true");
            obj.set_text("2020-04-04");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_PROOF","ctxtDT_TO:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_PROOF");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridExcel","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.crdoTY_SALEBUY","value","dsSearch","TY_SALEBUY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclYY_WORK.form.TextBox","value","dsSearch","YY_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccboNO_TAX","value","dsSearch","NO_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctxtDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ctxtDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccboTY_PROOF","value","dsSearch","TY_PROOF");
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
        this.registerScript("DHV_EBILLBUYVAT_FILEUP.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.DWA_SILHENG_onload = function(obj,e)
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
        	this.fnUserInfo();

        // 	this.dsSearch.setColumn(0, "CD_DEPT", this.getOwnerFrame().CD_CFSELFACNT);
        // 	this.dsSearch.setColumn(0, "DS_DEPT", this.getOwnerFrame().DS_CFSELFACNT);
        	this.dsSearch.setColumn(0, "YY_WORK", this.getOwnerFrame().YM_MAGAM);
        	this.dsSearch.setColumn(0, "NO_TAX", this.getOwnerFrame().NO_TAX);
        	this.dsSearch.setColumn(0, "TY_SALEBUY", this.getOwnerFrame().BUY_GUBUN);
        	this.dsSearch.setColumn(0, "TY_PROOF", "");

        	this.dsSearch.setColumn(0, "CD_DEPT", this.UserInfo.LEVCD_DEPT_SELFACNT);
        	if (!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT")))
        		this.ccfCD_DEPT.form.fnCodeFindLoad();

        	this.FormBtns.Select.click();
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
        	this.btnFileUpload = this.gfnFormButtonAdd("FileUpload", "fnFileUpload");
        	this.btnFileDelete = this.gfnFormButtonAdd("FileDelete", "fnFileDelete");
        	this.btnSampleDownload = this.gfnFormButtonAdd("SampleDownload", "fnSampleDownload");

        	this.btnFileUpload.set_enable(false);
        	this.btnFileDelete.set_enable(false);
        	this.btnSampleDownload.set_enable(false);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;
        	this.ctclYY_WORK = this.divSearch.form.ctclYY_WORK;
        	this.crdoTY_SALEBUY = this.divSearch.form.crdoTY_SALEBUY;
        	this.ccboNO_TAX = this.divSearch.form.ccboNO_TAX;
        	this.ctxtDT_FROM = this.divSearch.form.ctxtDT_FROM;
        	this.ctxtDT_TO = this.divSearch.form.ctxtDT_TO;
        	this.ccboTY_PROOF = this.divSearch.form.ccboTY_PROOF;

        	this.dxGrid = this.divData.form.objGrid;
        	this.dxGridExcel = this.divData.form.objGridExcel;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHV_EBILLBUYVAT_FILEUP");
        	this.gfnGridInit(this.dxGridExcel, this.dsListExcel, "DH", "DHV_EBILLBUYVAT_FILEUP_EXCEL");

        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsSelect.addColumn("YR_TAX", "string");
        	this.dsSelect.addColumn("NO_TAX", "string");
        	this.dsSelect.addColumn("TY_SALEBUY", "string");
        	this.dsSelect.addColumn("TY_PROOF", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsInsert.addColumn("YR_TAX", "string");
        	this.dsInsert.addColumn("NO_TAX", "string");
        	this.dsInsert.addColumn("APPR_NO", "string");
        	this.dsInsert.addColumn("NO_SJC", "string");
        	this.dsInsert.addColumn("DS_SJC", "string");
        	this.dsInsert.addColumn("DT_PROOF", "string");
        	this.dsInsert.addColumn("DT_BALHAENG", "string");
        	this.dsInsert.addColumn("DT_TRANS", "string");
        	this.dsInsert.addColumn("AM_SUPPLY", "string");
        	this.dsInsert.addColumn("AM_VAT", "string");
        	this.dsInsert.addColumn("TY_PROOF", "string");
        	this.dsInsert.addColumn("TY_SALEBUY", "string");

        	this.dsExecute = new Dataset();
        	this.dsExecute.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsExecute.addColumn("YR_TAX", "string");
        	this.dsExecute.addColumn("NO_TAX", "string");
        	this.dsExecute.addColumn("TY_SALEBUY", "string");
        	this.dsExecute.addColumn("TY_PROOF", "string");

        	this.dsSelectUser = new Dataset();
        	this.dsSelectUser.addColumn("ID_USER", "string");
        	this.dsSelectUser.addColumn("CD_DEPT", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnValidate()) return;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsSelect.setColumn(0, "YR_TAX", this.dsSearch.getColumn(0, "YY_WORK"));
        	this.dsSelect.setColumn(0, "NO_TAX",  this.dsSearch.getColumn(0, "NO_TAX"));
        	this.dsSelect.setColumn(0, "TY_SALEBUY", this.dsSearch.getColumn(0, "TY_SALEBUY"));
        	this.dsSelect.setColumn(0, "TY_PROOF", this.dsSearch.getColumn(0, "TY_PROOF"));

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
        	this.gfnGridAdd(this.dxGrid);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGridExcel);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.fnValidate()) return;
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT"));
        				this.dsInsert.setColumn(nrow, "YR_TAX", this.dsSearch.getColumn(0, "YY_WORK"));
        				this.dsInsert.setColumn(nrow, "NO_TAX", this.dsSearch.getColumn(0, "NO_TAX"));
        				this.dsInsert.setColumn(nrow, "APPR_NO", this.dsList.getColumn(i, "APPR_NO"));
        				this.dsInsert.setColumn(nrow, "NO_SJC", nexacro.replaceAll(this.dsList.getColumn(i, "NO_SJC"), "-", ""));
        				this.dsInsert.setColumn(nrow, "DS_SJC", this.dsList.getColumn(i, "DS_SJC"));
        				this.dsInsert.setColumn(nrow, "DT_PROOF", this.dsList.getColumn(i, "DT_PROOF"));
        				this.dsInsert.setColumn(nrow, "DT_BALHAENG", nexacro.replaceAll(this.dsList.getColumn(i, "DT_BALHAENG"), "-", ""));
        				this.dsInsert.setColumn(nrow, "DT_TRANS", nexacro.replaceAll(this.dsList.getColumn(i, "DT_TRANS"), "-", ""));
        				this.dsInsert.setColumn(nrow, "AM_SUPPLY", this.dsList.getColumn(i, "AM_SUPPLY"));
        				this.dsInsert.setColumn(nrow, "AM_VAT", this.dsList.getColumn(i, "AM_VAT"));
        				this.dsInsert.setColumn(nrow, "TY_PROOF", this.dsList.getColumn(i, "TY_VATPROOF") == "세금계산서" ? "AA" : "BA");
        				this.dsInsert.setColumn(nrow, "TY_SALEBUY", this.dsList.getColumn(i, "TY_SALEBUY") == "매출" ? "O" : "I");
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert";
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
        this.fnValidate = function() {
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "YY_WORK"))) {
        		this.fnVaidateCallback = function() {
        			this.ctclYY_WORK.setFocus();
        		}
        		this.gfnAlert("작성년도를 입력하세요.","fnVaidateCallback");
        		return false;
        	}
        	else if(this.gfnIsNull(this.dsSearch.getColumn(0, "NO_TAX"))) {
        		this.fnVaidateCallback = function() {
        			this.ccboNO_TAX.setFocus();
        		}
        		this.gfnAlert("작성기수를 선택하세요.","fnVaidateCallback");
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

        		if (this.dsList.rowcount > 0) {
        			this.btnFileUpload.set_enable(false);
        			this.btnFileDelete.set_enable(true);
        		}
        		else {
        			this.btnFileUpload.set_enable(true);
        			this.btnFileDelete.set_enable(false);
        		}
        	}
        	else if (svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == "execute") {
        		if (errorCode == 0) {
        			this.fnExecute_callback = function() {
        				this.FormBtns.Select.click();
        			}
        			this.gfnAlert("이세로 업로드자료 삭제 작업이 완료되었습니다.", "fnExecute_callback");
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_DEPT") {
        		dsUserParam.setColumn(nrow, "LV_DEPT", this.UserInfo.LEVLV_DEPT_ACNT);
        	}
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);

        		switch(e.columnid) {
        			case "YY_WORK" :
        			case "NO_TAX" :
        				this.fnMagamSetting();
        				break;
        		}
        	}
        };

        //이세로자료업로드
        this.fnFileUpload = function(obj,e) {
        	this.gfnExcelImport("dsList","Sheet1","A2","fnExcelImportCallback","import",this);
        }

        this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet) {
        	// 엑셀 양식과 그리드 컬럼이 그대로 일치 하는경우 아래와 같이 처리.
        	// 아닌경우는 이부분 주석처리
        	this.dsList.clearData();
        	//for (var i=0; i< this.dsList.getColCount()+10; i++)
        	for (var i=0; i< dsOut.getColCount(); i++)
        	{
        		sColumnId = "Column"+i;
        		var sColumnNm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, i);
        		if (sColumnNm != "" && sColumnId != sColumnNm)
        		{
        			dsOut.updateColID(sColumnId, sColumnNm);
        		}
        	}
        	// 양식이 일치하고 엑셀내역을 기존데이터에 Insert하지 않고
        	// 엑셀내역 그대로 그리드 반영할 시 copyData
        	//this.dsList.copyData(dsOut);

        	this.dsList.set_enableevent(false);
        	for (var i=0; i<dsOut.rowcount; i++) {
        		var nrow = this.dsList.addRow();
        		this.dsList.setColumn(nrow, this.ucFlag, "I");

        		// 양식이 일치하는 경우 copyRow
        		//if(!this.gfnIsNull(dsOut.getColumn(i, "DS_GUBUN"))){
        			this.dsList.copyRow(nrow, dsOut, i);
        		//}

        		// 양식과 일치하지 않는 경우 아래와 같이 컬럼별로 처리.
        // 		this.dsListSub.setColumn(nrow, "CD_SYSTEM", dsOut.getColumn(i, "Column1"));
        // 		this.dsListSub.setColumn(nrow, "CD_TYPE", dsOut.getColumn(i, "Column2"));
        	}
        	this.dsList.set_enableevent(true);
        	this.gfnSetFormStatus(this, "I");

        	this.fnExcelUpLoadEventSetting();
        };

        //업로드자료삭제
        this.fnFileDelete = function (obj,e) {
        	this.dsExecute.clearData();
        	this.dsExecute.addRow();
        	this.dsExecute.setColumn(0, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsExecute.setColumn(0, "YR_TAX", this.dsSearch.getColumn(0, "YY_WORK"));
        	this.dsExecute.setColumn(0, "NO_TAX",  this.dsSearch.getColumn(0, "NO_TAX"));
        	this.dsExecute.setColumn(0, "TY_SALEBUY", this.dsSearch.getColumn(0, "TY_SALEBUY"));
        	this.dsExecute.setColumn(0, "TY_PROOF", this.dsSearch.getColumn(0, "TY_PROOF"));

        	var strSvcId    = "execute";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "execute=dsExecute";
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

        //샘플양식다운로드
        this.fnSampleDownload = function (obj,e) {
        	this.gfnExcelExport(this.dxGridExcel, "", this.gfnGetArgument("NM_FORM")+"_샘플양식");
        };

        this.fnMagamSetting = function() {
        	var dtFrom;
        	var dtTo;

        	var ymMagam = this.dsSearch.getColumn(0, "YY_WORK");
        	var noTax = this.dsSearch.getColumn(0, "NO_TAX");

        	if (this.gfnIsNull(ymMagam) || this.gfnIsNull(noTax)) {
        		dtFrom = "";
        		dtTo = "";
        	}
        	else {
        		switch(noTax) {
        			case "1" :
        				dtFrom = ymMagam + "-01-01";
        				dtTo = ymMagam + "-03-31";
        				break;
        			case "2" :
        				dtFrom = ymMagam + "-04-01";
        				dtTo = ymMagam + "-06-30";
        				break;
        			case "3" :
        				dtFrom = ymMagam + "-07-01";
        				dtTo = ymMagam + "-09-30";
        				break;
        			case "4" :
        				dtFrom = ymMagam + "-10-01";
        				dtTo = ymMagam + "-12-31";
        				break;
        			default :
        				dtFrom = "";
        				dtTo = "";
        				break;
        		}
        	}

        	this.dsSearch.set_enableevent(false);
        	this.dsSearch.setColumn(0, "DT_FROM", dtFrom);
        	this.dsSearch.setColumn(0, "DT_TO", dtTo);
        	this.dsSearch.set_enableevent(true);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DWA_SILHENG_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHV_EBILLBUYVAT_FILEUP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
