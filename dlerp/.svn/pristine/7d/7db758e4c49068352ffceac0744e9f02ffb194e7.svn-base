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
            this.set_titletext("계좌별예금잔고표조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DFAPR_BALANCE_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DFAPR_BALANCE_CREATE</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DFAPR_BALANCE_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DFAPR_BALANCE_DELETE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_FROM","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","staDT_FROM:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_TO","ctclDT_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","staDT_TO:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN","ctclDT_TO:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("구분");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_GUBUN","staTY_GUBUN:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsTY_GUBUN");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_visible("false");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
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

            obj = new BindItem("item1","divSearch.form.ctclDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboTY_GUBUN","value","dsSearch","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DFA_BALANCE.xfdl", function() {
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

        	if(!this.gfnIsNull(this.getOwnerFrame().FR_ILBO)){
        	      this.dsSearch.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);	// 법인
        	      this.dsSearch.setColumn(0, "DT_FROM", this.getOwnerFrame().FR_ILBO);	// 시작일
        		  this.dsSearch.setColumn(0, "DT_TO", this.getOwnerFrame().TO_ILBO);	// 종료일
        		  this.divSearch.form.ccfCD_CORP.form.fnCodeFindLoad();
        		  this.FormBtns.Select.click();
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	//this.FormBtns.Add.set_enable(false);
         	this.FormBtns.Save.set_enable(false);
         	//this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnFormButtonCr = this.gfnFormButtonAdd("tbbCreate", "fnTbbCreate"); 	//잔액생성
        	this.btnFormButtonDe = this.gfnFormButtonAdd("tbbDelete", "fnTbbDelete"); //잔액삭제
        	this.btnFormButtonMa = this.gfnFormButtonAdd("tbbMaanual", "fnTbbMaanual");   //수기계좌잔액관리
        	this.btnComPare = this.gfnFormButtonAdd("btnComPare", "fnComPare"); //거래내역전표대사
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;

        	this.ctclDT_FROM = this.divSearch.form.ctclDT_FROM;
        	this.ctclDT_TO = this.divSearch.form.ctclDT_TO;

        	this.cboTY_GUBUN = this.divSearch.form.cboTY_GUBUN;

        	this.dxGrid = this.divData.form.objGrid;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.CodeFindName = "DZX_CFCORP";

        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFA_BALANCE1");

        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}

        	this.ctclDT_FROM.set_value(this.gfnGetFirstDate(this.gfnAddDate(this.gfnGetDate(),-1) ));
        	this.ctclDT_TO.set_value(this.gfnAddDate(this.gfnGetDate(),-1) );

        	this.btnFormButtonCr.set_enable(false);
        	this.btnFormButtonDe.set_enable(false);
        	this.btnFormButtonMa.set_enable(false);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("DT_FROM", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_CORP", "string");
        	//this.dsInsert.addColumn("DT_DATE", "string");
        	this.dsInsert.addColumn("FR_DATE", "string");
        	this.dsInsert.addColumn("TO_DATE", "string");
        	this.dsInsert.addColumn("ID_USER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("DT_BALANCE", "string");
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("CD_BANK", "string");
        	this.dsUpdate.addColumn("NO_ACCOUNT", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("AM_INPUT", "bigdecimal");
        	this.dsUpdate.addColumn("AM_INPUT_IN", "bigdecimal");
        	this.dsUpdate.addColumn("AM_INPUT_OUT", "bigdecimal");
        	this.dsUpdate.addColumn("ID_USER", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("DT_BALANCE", "string");
        	this.dsDelete.addColumn("CD_CORP", "string");
        	this.dsDelete.addColumn("CD_BANK", "string");
        	this.dsDelete.addColumn("NO_ACCOUNT", "string");
        	this.dsDelete.addColumn("TY_GUBUN", "string");
        	this.dsDelete.addColumn("ID_USER", "string");
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
        	this.dsSelect.setColumn(0, "DT_FROM", this.ctclDT_FROM.value);
        	this.dsSelect.setColumn(0, "DT_TO", this.ctclDT_TO.value);
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.cboTY_GUBUN.value);


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
        				this.dsInsert.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				//this.dsInsert.setColumn(nrow, "DT_DATE", this.ctclDT_TO.value);
        				this.dsInsert.setColumn(nrow, "FR_DATE", this.ctclDT_FROM.value);
        				this.dsInsert.setColumn(nrow, "TO_DATE", this.ctclDT_TO.value);
         				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "DT_BALANCE", this.dsList.getColumn(i, "DT_BALANCE"));
        				this.dsUpdate.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsUpdate.setColumn(nrow, "CD_BANK", this.dsList.getColumn(i, "CD_BANK"));
        				this.dsUpdate.setColumn(nrow, "NO_ACCOUNT", this.dsList.getColumn(i, "NO_ACCOUNT"));
        				this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i, "TY_GUBUN"));
        				this.dsUpdate.setColumn(nrow, "AM_INPUT", this.dsList.getColumn(i, "AM_INPUT"));
        				this.dsUpdate.setColumn(nrow, "AM_INPUT_IN", this.dsList.getColumn(i, "AM_INPUT_IN"));
        				this.dsUpdate.setColumn(nrow, "AM_INPUT_OUT", this.dsList.getColumn(i, "AM_INPUT_OUT"));
         				this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "DT_BALANCE", this.dsList.getColumn(i, "DT_BALANCE"));
        				this.dsDelete.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsDelete.setColumn(nrow, "CD_BANK", this.dsList.getColumn(i, "CD_BANK"));
        				this.dsDelete.setColumn(nrow, "NO_ACCOUNT", this.dsList.getColumn(i, "NO_ACCOUNT"));
        				this.dsDelete.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i, "TY_GUBUN"));
        				this.dsDelete.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

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
        // 	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.text)) {
        // 		this.gfnAlert("법인코드를 입력 하세요.");
        // 		this.ccfCD_CORP.form.CDTextBox.setFocus();
        // 		return false;
        // 	}

        	if (this.gfnIsNull(this.ctclDT_FROM.value)) {
        		this.gfnAlert("시작일자를 입력 하세요.");
        		this.ctclDT_FROM.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.ctclDT_TO.value)) {
        		this.gfnAlert("종료일자를 입력 하세요.");
        		this.ctclDT_TO.setFocus();
        		return false;
        	}

        	if ( !this.gfnIsNull(this.ctclDT_FROM.value) && !this.gfnIsNull(this.ctclDT_TO.value) ) {
        		if ( this.ctclDT_FROM.value > this.ctclDT_TO.value ) {
        			this.gfnAlert("일자가 잘못 입력 되었습니다..");
        			this.ctclDT_FROM.setFocus();
        			return false;
        		}
        	}

        	return true;
        };

        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	// 계좌구분
        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(0, "CD_TYPE", "A4");

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
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
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
        		if (this.dsList.rowcount == 0) {
        			this.gfnAlert("자료가 존재하지 않습니다.");
        		} else {
        			this.gfnGridAfterSelect(this.dxGrid);
        			this.btnFormButtonCr.set_enable(true);
        			this.btnFormButtonDe.set_enable(true);

        			//계좌_수기관리 = 'y'이면 활성화
        			if(this.dsList.getColumn(this.dsList.rowposition,"YN_MANUAL") == "Y"){
        				this.btnFormButtonMa.set_enable(true);
        			}else {
        				this.btnFormButtonMa.set_enable(false);
        			}
        		}
        	}else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "combo"){
        		var iRow = this.dsTY_GUBUN.insertRow(0);
        		this.dsTY_GUBUN.setColumn(iRow, "CD_CODE", "");
        		this.dsTY_GUBUN.setColumn(iRow, "DS_CODE", "전체");
        		this.cboTY_GUBUN.set_index(0);
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	return true;

        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	this.fnSearchInit();
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row) || (obj.oldrow == -1 && e.oldrow != e.row)) {

        		//계좌_수기관리 = 'y'이면 활성화
        		if(this.dsList.getColumn(this.dsList.rowposition,"YN_MANUAL") == "Y"){
        			this.btnFormButtonMa.set_enable(true);
        		}else {
        			this.btnFormButtonMa.set_enable(false);
        		}

        		obj.oldrow = -1;
        	}
        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		// 폼상태 초기화
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.btnFormButtonCr.set_enable(false);
        		this.btnFormButtonDe.set_enable(false);
        		this.btnFormButtonMa.set_enable(false);
        	}
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        // 		this.btnFormButtonCr.set_enable(false);
        // 		this.btnFormButtonDe.set_enable(false);
        	}
        };

        this.divSearch_cboTY_GUBUN_onitemchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue) {
        		if(e.postvalue == '45'){
        			this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFA_BALANCE2");
        		}
        		else{
        			this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFA_BALANCE1");
        		}
        		this.fnSearchInit();
        	}
        };

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        this.fnTbbCreate = function() {

        	this.gfnConfirm("잔액을 생성하시겠습니까?", "fnTbbCreateCallback");
        	// 문구 수정 ※ 주의! 수기관리계좌의 잔액이 조회기준일(T)  D-1 잔액으로 변경됩니다.
        }

        this.fnTbbCreateCallback = function(svcID, value) {

        	if(value) {

        		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.text)) {
        			this.gfnAlert("법인코드를 입력 하세요.");
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        			return false;
        		}
        		/*
        		if (this.gfnIsNull(this.ctclDT_TO.value)) {
        			this.gfnAlert("종료일자를 입력 하세요.");
        			this.ctclDT_TO.setFocus();
        			return false;
        		}*/

        		this.dsInsert.clearData();
        		var nrow = this.dsInsert.addRow();
        		//this.dsInsert.setColumn(nrow, "CD_CORP", this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));
        		this.dsInsert.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		this.dsInsert.setColumn(nrow, "FR_DATE", this.ctclDT_FROM.value);
        		this.dsInsert.setColumn(nrow, "TO_DATE", this.ctclDT_TO.value);
        		this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

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

        // 		this.gfnAlert("잔액생성이 완료되었습니다.");
        // 		this.fnSearchInit();
        	}
        };

        this.fnTbbMaanual = function(obj,e) {
        	var param = {};

            param.CD_CORP = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"); //법인 코드
        	param.DS_CORP = this.dsList.getColumn(this.dsList.rowposition, "DS_CORP"); //법인명
        	param.YM_DATE = this.ctclDT_TO.value.substring(0,6); //기준년월
        	param.CD_DEPT = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT"); //처리부서 코드
        	param.DS_DEPT = this.dsList.getColumn(this.dsList.rowposition, "DS_DEPT"); //처리부서
        	param.NO_ACCOUNT = this.dsList.getColumn(this.dsList.rowposition, "NO_ACCOUNT"); //계좌번호 코드
        	param.NM_ACCOUNT = this.dsList.getColumn(this.dsList.rowposition, "NM_ACCOUNT"); //계좌번호

        	//trace(param.NO_ACCOUNT);
        	//trace(param.NM_ACCOUNT);

        	this.gfnFormOpen("DFL", "DFA_MANUAL", "fnCallback", param); //gfnFormOpenNonAuth

        }

        this.fnComPare = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var param = {};
        	param.GUBUN = "B";
        	param.CD_CORP = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));	// 법인코드
        	param.DS_CORP = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "DS_CORP"));	// 법인명칭
        	param.DT_FROM = this.gfnTrim(this.dsSearch.getColumn(0, "DT_FROM"));
        	param.DT_TO = this.gfnTrim(this.dsSearch.getColumn(0, "DT_TO"));
        	param.NO_ACCOUNT = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "NO_ACCOUNT"));	// 계좌번호
        	param.NM_ACCOUNT = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "NM_ACCOUNT"));	// 계좌명칭

        	this.gfnFormOpen("DFB", "DFA_COMPARE", "fnPopCallBack", param);
        }

        this.fnPopCallBack = function(svcID, val) {
        	if (val) {
        		var json = JSON.parse(val);

        		if (svcID.indexOf("DFA_COMPARE") > -1) {

        		}

        	}
        }

        this.fnTbbDelete = function() {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) {
        		this.gfnAlert("행을 선택하세요.");
        		return false;
        	}

        	this.gfnConfirm("잔액삭제를 하시겠습니까?", "fnTbbDeleteCallback");
        }

        this.fnTbbDeleteCallback = function(svcID, value) {

        	if(value) {

        		var r = this.dsList.rowposition;

        		this.dsDelete.clearData();
        		var nrow = this.dsDelete.addRow();
        		this.dsDelete.setColumn(nrow, "DT_BALANCE", this.dsList.getColumn(r, "DT_BALANCE"));
        		this.dsDelete.setColumn(nrow, "CD_CORP", this.dsList.getColumn(r, "CD_CORP"));
        		this.dsDelete.setColumn(nrow, "CD_BANK", this.dsList.getColumn(r, "CD_BANK"));
        		this.dsDelete.setColumn(nrow, "NO_ACCOUNT", this.dsList.getColumn(r, "NO_ACCOUNT"));
        		this.dsDelete.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(r, "TY_GUBUN"));
        		this.dsDelete.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        		if (this.dsDelete.rowcount == 0) return;

        		var strSvcId    = "save";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "delete=dsDelete";
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

        // 		this.gfnAlert("잔액삭제가 완료되었습니다.");
        // 		this.fnSearchInit();
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DFA_BALANCE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
