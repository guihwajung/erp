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
            this.set_titletext("어음번호 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DFDPR_NOTESNUMBER_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DFDPR_NOTESNUMBER_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DFDPR_NOTESNUMBER_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DFDPR_NOTESNUMBER_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SIDEBANK\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REGIST_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REGIST_TO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_USE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_NOTES\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_USE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">발행</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">미발행</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_NOTES", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">어음</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">B2B</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_USE","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("발행유무");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_USE","staTY_USE:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsTY_USE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SIDEBANK","cboTY_USE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SIDEBANK","staCD_SIDEBANK:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("110");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_REGIST_FROM","ccfCD_SIDEBANK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("수령일자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_REGIST_FROM","staDT_REGIST_FROM:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_REGIST_TO","ctclDT_REGIST_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_REGIST_TO","staDT_REGIST_TO:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_NOTES","ctclDT_REGIST_TO:0.0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_NOTES","staYN_NOTES:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsYN_NOTES");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_text("전체");
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

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DFD_NOTES_NUMBER.xfdl", function() {
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

        	// 법인코드 포커스추가
        	this.ccfCD_CORP.form.CDTextBox.setFocus();
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
        	//this.btnUPloadExecl = this.gfnFormButtonAdd("btnUPloadExecl", "fnUPloadExecl", "엑셀 업로드");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;			// 법인코드
        	this.ccfCD_SIDEBANK = this.divSearch.form.ccfCD_SIDEBANK;	// 은행지점

        	this.cboTY_USE = this.divSearch.form.cboTY_USE;				// 발행유무
        	this.cboYN_NOTES = this.divSearch.form.cboYN_NOTES;			// 구분

        	this.ctclDT_REGIST_FROM = this.divSearch.form.ctclDT_REGIST_FROM;	// 수령일자(from)
        	this.ctclDT_REGIST_TO = this.divSearch.form.ctclDT_REGIST_TO;		// 수령일자(to)

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.CodeFindName = "DZX_CFCORP";
        	this.ccfCD_SIDEBANK.CodeFindName = "DFX_CFNO_ACCOUNT";

        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SIDEBANK.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_SIDEBANK.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFD_NOTES_NUMBER");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("NO_ACCOUNT", "string");
        	this.dsSelect.addColumn("DT_REGIST_FROM", "string");
        	this.dsSelect.addColumn("DT_REGIST_TO", "string");
        	this.dsSelect.addColumn("TY_USE", "string");
        	this.dsSelect.addColumn("YN_NOTES", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_BANK", "string");
        	this.dsInsert.addColumn("CD_SIDEBANK", "string");
        	this.dsInsert.addColumn("DT_REGIST", "string");
        	this.dsInsert.addColumn("NO_NOTES", "string");
        	this.dsInsert.addColumn("TY_USE", "string");
        	this.dsInsert.addColumn("NO_ACCOUNT", "string");
        	this.dsInsert.addColumn("ID_REGIST", "string");
        	this.dsInsert.addColumn("TY_GUBUN", "string");
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("NO_NOTES_E", "string");
        	this.dsInsert.addColumn("ID_USER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_BANK", "string");
        	this.dsUpdate.addColumn("CD_SIDEBANK", "string");
        	this.dsUpdate.addColumn("DT_REGIST", "string");
        	this.dsUpdate.addColumn("NO_NOTES", "string");
        	this.dsUpdate.addColumn("TY_USE", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("NO_ACCOUNT", "string");
        	this.dsUpdate.addColumn("NO_NOTES_E", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_SIDEBANK", "string");
        	this.dsDelete.addColumn("DT_REGIST", "string");
        	this.dsDelete.addColumn("NO_NOTES", "string");
        	this.dsDelete.addColumn("CD_BANK", "string");
        	this.dsDelete.addColumn("CD_CORP", "string");
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

        	this.dsSelect.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);			// 법인코드
        	this.dsSelect.setColumn(0, "TY_USE", this.cboTY_USE.value);								// 발행유무
        	this.dsSelect.setColumn(0, "NO_ACCOUNT", this.ccfCD_SIDEBANK.form.CDTextBox.value);		// 은행지점
        	this.dsSelect.setColumn(0, "DT_REGIST_FROM", this.ctclDT_REGIST_FROM.value);			// 수령일자(from)
        	this.dsSelect.setColumn(0, "DT_REGIST_TO", this.ctclDT_REGIST_TO.value);				// 수령일자(to)
        	this.dsSelect.setColumn(0, "YN_NOTES", this.cboYN_NOTES.value);							// 구분

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
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	param.CD_CORP = this.ccfCD_CORP.form.CDTextBox.value;
        	param.DS_CORP = this.ccfCD_CORP.form.DSTextBox.value;

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	//trace("this.FormInfo.CD_MODULE :: " + this.FormInfo.CD_MODULE);
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DFD_DLG_NOTES_NUMBER", "fnPopCallBack", param);
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

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_BANK", this.dsList.getColumn(i, "CD_BANK"));
        				this.dsInsert.setColumn(nrow, "CD_SIDEBANK", this.dsList.getColumn(i, "CD_SIDEBANK"));
        				this.dsInsert.setColumn(nrow, "DT_REGIST", this.dsList.getColumn(i, "DT_REGIST"));
        				this.dsInsert.setColumn(nrow, "NO_NOTES", this.dsList.getColumn(i, "NO_NOTES"));
        				this.dsInsert.setColumn(nrow, "TY_USE", this.dsList.getColumn(i, "TY_USE"));
        				this.dsInsert.setColumn(nrow, "NO_ACCOUNT", this.dsList.getColumn(i, "NO_ACCOUNT"));
        				this.dsInsert.setColumn(nrow, "ID_REGIST", this.AuthClient.ID_USER);
        				this.dsInsert.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i, "TY_GUBUN"));
        				this.dsInsert.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        				this.dsInsert.setColumn(nrow, "NO_NOTES_E", this.dsList.getColumn(i, "NO_NOTES_E"));
        				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_BANK", this.dsList.getColumn(i, "CD_BANK"));
        				this.dsUpdate.setColumn(nrow, "CD_SIDEBANK", this.dsList.getColumn(i, "CD_SIDEBANK"));
        				this.dsUpdate.setColumn(nrow, "DT_REGIST", this.dsList.getColumn(i, "DT_REGIST"));
        				this.dsUpdate.setColumn(nrow, "NO_NOTES", this.dsList.getColumn(i, "NO_NOTES"));
        				this.dsUpdate.setColumn(nrow, "TY_USE", this.dsList.getColumn(i, "TY_USE"));
        				this.dsUpdate.setColumn(nrow, "NO_ACCOUNT", this.dsList.getColumn(i, "NO_ACCOUNT"));
        				this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i, "TY_GUBUN"));
        				this.dsUpdate.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        				this.dsUpdate.setColumn(nrow, "NO_NOTES_E", this.dsList.getColumn(i, "NO_NOTES_E"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_SIDEBANK", this.dsList.getColumn(i, "CD_SIDEBANK"));
        				this.dsDelete.setColumn(nrow, "DT_REGIST", this.dsList.getColumn(i, "DT_REGIST"));
        				this.dsDelete.setColumn(nrow, "NO_NOTES", this.dsList.getColumn(i, "NO_NOTES"));
        				this.dsDelete.setColumn(nrow, "CD_BANK", this.dsList.getColumn(i, "CD_BANK"));
        				this.dsDelete.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
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
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.text)) {
        		this.gfnAlert("법인코드를 입력 하세요.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}

        	if ( !this.gfnIsNull(this.ctclDT_REGIST_FROM.value) && !this.gfnIsNull(this.ctclDT_REGIST_TO.value) ) {
        		if ( this.ctclDT_REGIST_FROM.value > this.ctclDT_REGIST_TO.value ) {
        			this.gfnAlert("수령일자가 잘못 입력 되었습니다..");
        			this.ctclDT_REGIST_FROM.setFocus();
        			return false;
        		}
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

        this.fnPopCallBack = function(svcID, val) {
        	if (val != false) {
        		var json = JSON.parse(val);
        		var no_to = parseInt(json.NO_TO);
        		var orgNote = json.NO_FROM;
        		var note = parseInt(json.NO_FROM);


        		//trace("no_to :: " + no_to);
        		//trace("note :: " + note);

        		this.dsList.set_enableevent(false);

        		for (var row = no_to - 1; row >= 0; row--) {
        			var nRow = this.dsList.addRow();
        			//trace("note.Length :: " + note.toString().length);
        			var newNoteNumber = (note + row).toString().padLeft(orgNote.toString().length, "0");

        			this.dsList.setColumn(nRow, this.ucFlag, "I");

        			//this.dsList.setColumn(nRow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			this.dsList.setColumn(nRow, "CD_SIDEBANK", JSON.CD_MANAGEBANK);
        			this.dsList.setColumn(nRow, "CD_BANK", json.CD_BANK);
        			this.dsList.setColumn(nRow, "DS_BANK", json.DS_BANK);
        			this.dsList.setColumn(nRow, "NO_ACCOUNT", json.NO_ACCOUNT);
        			this.dsList.setColumn(nRow, "DS_VENDOR", json.DS_VENDOR);
        			this.dsList.setColumn(nRow, "DT_REGIST", json.DT_REGIST);
        			this.dsList.setColumn(nRow, "NO_NOTES", newNoteNumber);
        			this.dsList.setColumn(nRow, "TY_USE", "N");
        			this.dsList.setColumn(nRow, "TY_GUBUN", json.TY_GUBUN);
        		}

        		this.gfnSetFormStatus(this, "I");
        		this.dsList.set_enableevent(true);

        		//trace(this.dsList.saveXML());
        		this.fnSave();
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	// 법인코드
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "CD_GROUP", "A");
        	}

        	if (id == "ccfCD_SIDEBANK") {
        		if (!this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			dsUserParam.setColumn(nrow, "GUBUN", "NOTE");
        			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		}else{
        			this.gfnAlert("법인코드는 필수입력 값입니다.");
        			return false;
        		}
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_CORP") {
        		this.fnSearchInit();
        	}

        	if (id == "ccfCD_SIDEBANK") {
        		this.fnSearchInit();
        	}
        }

        this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow) {
        	var cdCorp = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");

        	// 법인코드
        	if (id == "DZX_CFCORP") {
        		dsUserParam.setColumn(nrow, "CD_GROUP", this.idGroup);
        	}

        	// 계좌
        	if (id == "DFX_CFACCOUNTNO_SUJI") {
        		if ( this.gfnIsNull(cdCorp) ) {
        			this.gfnAlert("법인코드를 먼저 입력하세요.");
        			return false;
        		} else {
        			dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        		}
        	}

        	// 수지
        	if (id == "DFX_CFSUJICODE") {
        		dsUserParam.setColumn(nrow, "TY_INOUT", "");
        		dsUserParam.setColumn(nrow, "YN_USE", "Y");
        	}

        	// 부서
        	if (id == "DFX_CFACNTUNIT") {
        		if ( !this.gfnIsNull(cdCorp) ) {
        			dsUserParam.setColumn(nrow, "CD_GROUP", this.idGroup);
        			dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        		} else {
        			this.gfnAlert("법인코드를 먼저 입력하세요.");
        			return false;
        		}
        	}

        	// 거래처
        	if (id == "DFX_CFVENDOR") {
        		if ( !this.gfnIsNull(cdCorp) ) {
        			// TODO TY_VENDOR1 확인해봐야함.
        			dsUserParam.setColumn(nrow, "TY_VENDOR1", "금융");
        			dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        		} else {
        			this.gfnAlert("법인코드를 먼저 입력하세요.");
        			return false;
        		}
        	}

        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {

        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

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
        	}
        };




        this.fnOnitemchanged = function(obj,e)
        {
        	this.gfnGridClear(this.dxGrid);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboTY_USE.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.ctclDT_REGIST_FROM.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.ctclDT_REGIST_TO.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.cboYN_NOTES.addEventHandler("onitemchanged",this.fnSearchInit,this);
        };
        this.loadIncludeScript("DFD_NOTES_NUMBER.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
