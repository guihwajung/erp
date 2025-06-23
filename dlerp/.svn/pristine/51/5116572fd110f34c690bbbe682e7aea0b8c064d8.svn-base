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
            this.set_titletext("AS 유지보수비 전표발행");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBSPR_CIVIL_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DBSPR_CIVIL_SAVE</Col></Row><Row><Col id=\"SP\">DBSPR_CIVIL_AUTOSLIP_ISSUE</Col><Col id=\"TARGET\">slip</Col></Row><Row><Col id=\"TARGET\">slipDelete</Col><Col id=\"SP\">DBSPR_CIVIL_AUTOSLIP_DELETE</Col></Row><Row><Col id=\"TARGET\">approve</Col><Col id=\"SP\">DBSPR_CIVIL_APPROVE</Col></Row><Row><Col id=\"TARGET\">approveCancel</Col><Col id=\"SP\">DBSPR_CIVIL_APPROVE_CANCEL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_BE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CONSULT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("회계년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("calYM_WORK","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","calYM_WORK:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","180","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            obj.getSetter("CDTextWidth").set("30");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","ccfCD_CORP:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("AS사무소");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_BE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE00","ccfCD_DEPT_BE:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text(" 원안품의");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_CONSULTDTL","staCD_SITE00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","40",null,null,"0","0",null,null,null,null,this);
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
            obj = new BindItem("item1","divSearch.form.calYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccfCD_DEPT_BE.form.CDTextBox","value","dsSearch","CD_DEPT_BE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfNO_CONSULTDTL.form.CDTextBox","value","dsSearch","NO_CONSULT");
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
        this.registerScript("DBE_CIVILCOST.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//
        	//this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	//접수월 셋팅
        	var today = this.gfnGetDate().substring(0,6);
        	this.divSearch.form.calYM_WORK.form.TextBox.set_value(today);

        	// 실지급거래처
        	this.tyVendorMi = "";
        	this.cdVendorMi = "";
        	this.dsVendorMi = "";

        	if(this.FormInfo.ID_GROUP != "0" && this.FormInfo.ID_GROUP != "A" && this.FormInfo.ID_GROUP != "3" && this.FormInfo.ID_GROUP != "W"  ){
        		if( this.FormInfo.ID_GROUP == "2" ){
        			this.ccfCD_DEPT_BE.form.CDTextBox.set_value(this.AuthClient.CD_DEPT.substr(1));
        			this.ccfCD_DEPT_BE.form.fnCodeFindLoad();
        		}

        		this.ccfCD_DEPT_BE.form.set_readonly(true);
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// 서브 버튼 사용
        	//this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter); // divSplitter sync
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {

        	this.btnFormButton1 = this.gfnFormButtonAdd("WorkBtn1", "fnWorkBtn1", "전표발행");  // 전표발행
        	this.btnFormButton2 = this.gfnFormButtonAdd("WorkBtn2", "fnWorkBtn2", "전표취소");  // 전표취소
        	this.btnFormButton3 = this.gfnFormButtonAdd("WorkBtn3", "fnWorkBtn3", "전표조회");  // 전표조회
        	if ( this.FormInfo.ID_GROUP == "0"|| this.FormInfo.ID_GROUP == "A"|| this.FormInfo.ID_GROUP == "W") {
        		this.btnFormButton4 = this.gfnFormButtonAdd("WorkBtn4", "fnWorkBtn4", "본사승인");  // 본사승인
        		//this.btnFormButton5 = this.gfnFormButtonAdd("WorkBtn5", "fnWorkBtn5");  // 원안품의등록
        		this.btnFormButton6 = this.gfnFormButtonAdd("WorkBtn6", "fnWorkBtn6", "본사승인취소");  // 본사승인취소
        	}
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.calYM_WORK = this.divSearch.form.calYM_WORK;
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPT_BE = this.divSearch.form.ccfCD_DEPT_BE;
        	this.ccfNO_CONSULTDTL = this.divSearch.form.ccfNO_CONSULTDTL;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.CodeFindName = "DAX_CFCORP";
        	this.ccfCD_DEPT_BE.CodeFindName = "DBX_CFBUNSO";
        	this.ccfNO_CONSULTDTL.CodeFindName = "DFX_CFCONSULTDTL";
        	this.ccfNO_CONSULTDTL.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DB", "DBE_CIVILCOST");  // pForm.gfnGridInit = function(objGrid, objDs, cd_system, id_grid, tree_column, level_column, is_manual)
        	this.dxGrid.set_selecttype("cell");	// IE경우만 multiarea모드에서 master선택후 마우스 이동 빠르게 할 경우 버그가 있어서 cell 모드로 변경
        	//this.dxGrid.set_autosizingtype("row");
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","DS_REM"), "tooltiptext", "bind:DS_REM" );
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","DS_REM"), "wordWrap", "char" );
        	this.dxGrid.setFormatRowProperty( 1,"size",this.dxGrid.getFormatRowProperty(0,"size")*2 );

        	//this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","CHK"), "displaytype", "expr:comp.parent.gfnIsNull(CD_SLIP)?'checkboxcontrol':'none'" );
        	//this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","CHK"), "edittype", "expr:comp.parent.gfnIsNull(CD_SLIP)?'checkbox':'none'" );
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex( "body", "TY_ISSUE"), "edittype", "expr:comp.parent.gfnIsNull(ISSUE_ID)?'combo':'none'");

        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex( "body", "CD_VENDOR"), "edittype", "expr:TY_ISSUE=='E'?'readonly':'text'");
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex( "body", "CD_VENDOR"), "expandshow", "expr:TY_ISSUE=='E'?'hide':'show'");
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex( "body", "CD_VENDOR"), "expandsize", "expr:TY_ISSUE=='E'?'0':'16'");

        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","DT_ACCOUNT"), "edittype", "expr:TY_ISSUE=='E'?'none':'date'" );
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","AM_SUPPLY"), "edittype", "expr:TY_ISSUE=='E'?'none':'mask'" );
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","AM_VAT"), "edittype", "expr:TY_ISSUE=='E' || PER_VATPROOF=='0'?'none':'mask'" );

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged     = "fnGrid_AfterCDTextChanged";

        	this.dxGrid.addEventHandler("oncelldblclick", this.dxGrid_oncelldblclick, this);
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);
        	this.dsList.addEventHandler("onvaluechanged", this.dsList_onvaluechanged, this);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_DEPT_BE", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");

        // 	this.dsSave = new Dataset();
        // 	this.dsSave.addColumn("TY_SAVE", "string");           // 'I','U','D'
        // 	this.dsSave.addColumn("NO_SLIPKEY", "int");           // 순번
        // 	this.dsSave.addColumn("CD_DEPT_BE", "string");        // AS사무소코드(귀속부서)
        // 	this.dsSave.addColumn("CD_DEPT_BH", "string");        // AS사무소코드(등록부서)
        // 	this.dsSave.addColumn("DT_ACCOUNT", "string");        // 회계일자(증빙일자)
        // 	this.dsSave.addColumn("CD_ACCOUNT", "string");        // 계정코드
        // 	this.dsSave.addColumn("TY_GUBUN", "string");          // 유지보수비 비목
        // 	this.dsSave.addColumn("CD_SITE", "string");           // 단지코드
        // 	this.dsSave.addColumn("TY_VENDOR", "string");         // 거래처구분
        // 	this.dsSave.addColumn("CD_VENDOR", "string");         // 거래처코드
        // 	this.dsSave.addColumn("DS_VENDOR", "string");         // 거래처명
        // 	this.dsSave.addColumn("TY_VENDOR_MI", "string");      // 거래처구분
        // 	this.dsSave.addColumn("CD_VENDOR_MI", "string");      // 거래처코드
        // 	this.dsSave.addColumn("DS_VENDOR_MI", "string");      // 거래처명
        // 	this.dsSave.addColumn("DS_REM", "string");            // 적요
        // 	this.dsSave.addColumn("TY_ISSUE", "string");          // 전자증빙
        // 	this.dsSave.addColumn("AM_SUPPLY", "int");            // 공급가
        // 	this.dsSave.addColumn("AM_VAT", "int");               // 부가세
        // 	this.dsSave.addColumn("CD_VATPROOF", "string");       // 증빙코드
        // 	this.dsSave.addColumn("ID_TRANS", "string");          // 등록자
        // 	this.dsSave.addColumn("NO_ACCOUNT", "string");        // 계좌번호
        // 	this.dsSave.addColumn("DT_REQ", "string");            // 지급요청일자
        // 	this.dsSave.addColumn("ISSUE_ID", "string");          // 전자세금계산서번호
        // 	this.dsSave.addColumn("CD_CORP", "string");
        // 	this.dsSave.addColumn("SEQ", "int");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");				// 'I','U','D'
        	this.dsSave.addColumn("NO_SLIPKEY", "bigdecimal");		// 순번
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("CD_DEPT_BE", "string");			// AS사무소코드(귀속부서)
        	this.dsSave.addColumn("CD_DEPT_BH", "string");			// AS사무소코드(등록부서)
        	this.dsSave.addColumn("DT_ACCOUNT", "string");			// 회계일자(증빙일자)
        	this.dsSave.addColumn("CD_ACCOUNT", "string");			// 계정코드
        	this.dsSave.addColumn("TY_GUBUN", "string");			// 유지보수비 비목
        	this.dsSave.addColumn("CD_SITE", "string");				// 단지코드
        	this.dsSave.addColumn("TY_VENDOR", "string");			// 거래처구분
        	this.dsSave.addColumn("CD_VENDOR", "string");			// 거래처코드
        	this.dsSave.addColumn("DS_VENDOR", "string");			// 거래처명
        	this.dsSave.addColumn("TY_VENDOR_MI", "string");		// 거래처구분
        	this.dsSave.addColumn("CD_VENDOR_MI", "string");		// 거래처코드
        	this.dsSave.addColumn("DS_VENDOR_MI", "string");		// 거래처명
        	this.dsSave.addColumn("DS_REM", "string");				// 적요
        	this.dsSave.addColumn("TY_ISSUE", "string");			// 전자증빙
        	this.dsSave.addColumn("AM_SUPPLY", "bigdecimal");		// 공급가
        	this.dsSave.addColumn("AM_VAT", "bigdecimal");			// 부가세
        	this.dsSave.addColumn("CD_VATPROOF", "string");			// 증빙코드
        	this.dsSave.addColumn("ID_TRANS", "string");			// 등록자
        	this.dsSave.addColumn("URL_PROOF", "string");
        	this.dsSave.addColumn("NO_ACCOUNT", "string");			// 계좌번호
        	this.dsSave.addColumn("DT_REQ", "string");				// 지급요청일자
        	this.dsSave.addColumn("ISSUE_ID", "string");			// 전자세금계산서번호
        	this.dsSave.addColumn("SEQ", "bigdecimal");
        	this.dsSave.addColumn("CD_BANK_ACCOUNT", "string");
        	this.dsSave.addColumn("DT_CHARGE", "string");

        	this.dsSlip = new Dataset();
        	this.dsSlip.addColumn("CD_DEPT_BE", "string");        // AS사무소코드(귀속부서)
        	this.dsSlip.addColumn("NO_SLIPKEY", "string");        // 순번
        	this.dsSlip.addColumn("ID_USER", "string");           // 로그인ID
        	this.dsSlip.addColumn("CD_DEPT", "string");           // 로그인부서

        	this.dsSlipX = new Dataset();
        	this.dsSlipX.addColumn("CD_TRADE", "string");          // 취소할 전표번호

        	this.dsApprove = new Dataset();
        	this.dsApprove.addColumn("NO_SLIPKEY", "string");        // 순번

        	this.dsConsult = new Dataset();
        	this.dsConsult.addColumn("NO_SLIPKEY", "string");        // 순번
        	this.dsConsult.addColumn("NO_CONSULTDTL", "string");     //  원안품의
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

        	this.dsList.clearData();
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_DEPT_BE", this.dsSearch.getColumn(0, "CD_DEPT_BE"));
        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));

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
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;
        	if (!this.fnSaveValidate()) return false;

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        // 				var nrow = this.dsSave.addRow();
        // 				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        // 				this.dsSave.setColumn(nrow, "NO_SLIPKEY", this.dsList.getColumn(i, "NO_SLIPKEY"));
        // 				this.dsSave.setColumn(nrow, "CD_DEPT_BE", "");
        // 				this.dsSave.setColumn(nrow, "CD_DEPT_BH", "");
        // 				this.dsSave.setColumn(nrow, "DT_ACCOUNT", this.dsList.getColumn(i,"DT_ACCOUNT"));
        // 				this.dsSave.setColumn(nrow, "CD_ACCOUNT", this.dsList.getColumn(i,"CD_ACCOUNT"));
        // 				this.dsSave.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i,"TY_GUBUN"));
        // 				this.dsSave.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i,"CD_SITE"));
        // 				this.dsSave.setColumn(nrow, "TY_VENDOR", this.dsList.getColumn(i,"TY_VENDOR"));
        // 				this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i,"CD_VENDOR"));
        // 				this.dsSave.setColumn(nrow, "DS_VENDOR", this.dsList.getColumn(i,"DS_VENDOR"));
        // 				this.dsSave.setColumn(nrow, "TY_VENDOR_MI", this.dsList.getColumn(i,"TY_VENDOR_MI"));
        // 				this.dsSave.setColumn(nrow, "CD_VENDOR_MI", this.dsList.getColumn(i,"CD_VENDOR_MI"));
        // 				this.dsSave.setColumn(nrow, "DS_VENDOR_MI", this.dsList.getColumn(i,"DS_VENDOR_MI"));
        // 				this.dsSave.setColumn(nrow, "DS_REM", this.dsList.getColumn(i,"DS_REM"));
        // 				this.dsSave.setColumn(nrow, "TY_ISSUE", this.dsList.getColumn(i,"TY_ISSUE"));
        // 				this.dsSave.setColumn(nrow, "AM_SUPPLY", this.dsList.getColumn(i,"AM_SUPPLY"));
        // 				this.dsSave.setColumn(nrow, "AM_VAT", this.dsList.getColumn(i,"AM_VAT"));
        // 				this.dsSave.setColumn(nrow, "CD_VATPROOF", this.dsList.getColumn(i,"CD_VATPROOF"));
        // 				this.dsSave.setColumn(nrow, "ID_TRANS", this.AuthClient.ID_USER);
        // 				this.dsSave.setColumn(nrow, "NO_ACCOUNT", this.dsList.getColumn(i,"NO_ACCOUNT"));
        // 				this.dsSave.setColumn(nrow, "DT_REQ", this.dsList.getColumn(i,"DT_REQ"));
        // 				this.dsSave.setColumn(nrow, "ISSUE_ID", this.dsList.getColumn(i,"ISSUE_ID"));
        // 				this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i,"CD_CORP"));
        // 				this.dsSave.setColumn(nrow, "SEQ", i);

        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "NO_SLIPKEY", this.dsList.getColumn(i, "NO_SLIPKEY"));
        				this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsSave.setColumn(nrow, "CD_DEPT_BE", "");
        				this.dsSave.setColumn(nrow, "CD_DEPT_BH", "");
        				this.dsSave.setColumn(nrow, "DT_ACCOUNT", this.dsList.getColumn(i, "DT_ACCOUNT"));
        				this.dsSave.setColumn(nrow, "CD_ACCOUNT", this.dsList.getColumn(i, "CD_ACCOUNT"));
        				this.dsSave.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i, "TY_GUBUN"));
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "TY_VENDOR", this.dsList.getColumn(i, "TY_VENDOR"));
        				this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsSave.setColumn(nrow, "DS_VENDOR", this.dsList.getColumn(i, "DS_VENDOR"));
        				this.dsSave.setColumn(nrow, "TY_VENDOR_MI", this.dsList.getColumn(i, "TY_VENDOR_MI"));
        				this.dsSave.setColumn(nrow, "CD_VENDOR_MI", this.dsList.getColumn(i, "CD_VENDOR_MI"));
        				this.dsSave.setColumn(nrow, "DS_VENDOR_MI", this.dsList.getColumn(i, "DS_VENDOR_MI"));
        				this.dsSave.setColumn(nrow, "DS_REM", this.dsList.getColumn(i, "DS_REM"));
        				this.dsSave.setColumn(nrow, "TY_ISSUE", this.dsList.getColumn(i, "TY_ISSUE"));
        				this.dsSave.setColumn(nrow, "AM_SUPPLY", this.dsList.getColumn(i, "AM_SUPPLY"));
        				this.dsSave.setColumn(nrow, "AM_VAT", this.dsList.getColumn(i, "AM_VAT"));
        				this.dsSave.setColumn(nrow, "CD_VATPROOF", this.dsList.getColumn(i, "CD_VATPROOF"));
        				this.dsSave.setColumn(nrow, "ID_TRANS", this.dsList.getColumn(i, "ID_TRANS"));
        				this.dsSave.setColumn(nrow, "URL_PROOF", this.dsList.getColumn(i, "URL_PROOF"));
        				this.dsSave.setColumn(nrow, "NO_ACCOUNT", this.dsList.getColumn(i, "NO_ACCOUNT"));
        				this.dsSave.setColumn(nrow, "DT_REQ", this.dsList.getColumn(i, "DT_REQ"));
        				this.dsSave.setColumn(nrow, "ISSUE_ID", this.dsList.getColumn(i, "ISSUE_ID"));
        				this.dsSave.setColumn(nrow, "SEQ", this.dsList.getColumn(i, "SEQ"));
        				this.dsSave.setColumn(nrow, "CD_BANK_ACCOUNT", this.dsList.getColumn(i, "CD_BANK_ACCOUNT"));
        				this.dsSave.setColumn(nrow, "DT_CHARGE", this.dsList.getColumn(i, "DT_CHARGE"));

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
         *	입력 버튼
         */
        this.fnAdd = function() {
        // 	if (this.gfnIsNull(this.ccfCD_DEPT_BE.form.CDTextBox.text)) {
        // 		this.ccfCD_DEPT_BE.form.CDTextBox.setFocus();
        // 		this.gfnAlert("AS사무소를 입력하셔야 합니다."); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        // 		return false;
        // 	}

        	var nrow = this.gfnGridAdd(this.dxGrid,"");
        	this.dsList.setColumn(nrow,"NO_SLIPKEY",0);
        // 	this.dsList.setColumn(nrow,"CD_DEPT_BE",this.dsSearch.getColumn(0, "CD_DEPT_BE"));
        // 	this.dsList.setColumn(nrow,"CD_DEPT_BH",this.AuthClient.CD_DEPT);
        	this.dsList.setColumn(nrow,"AM_SUPPLY",0);
        	this.dsList.setColumn(nrow,"AM_VAT",0);
        	this.dsList.setColumn(nrow,"AM_ACCOUNT",0);
        	this.dsList.setColumn(nrow,"TY_ISSUE","P");
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;
        	if( this.dsList.getColumn(this.dsList.rowposition, "YN_APPROVE") == "Y") {
        		this.gfnAlert("본사승인이 완료된 데이터는 삭제할 수 없습니다.");
        		return false;
        	}

        	if( !this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP")) ){
        		this.gfnAlert("전표번호가 생성된 데이터는 삭제할 수 없습니다.");
        		return false;
        	}

        	this.gfnGridDel(this.dxGrid);

        };
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

        	if (validate && this.gfnIsNull(this.calYM_WORK.form.TextBox.value)) {
        		validate = false;
        		this.fnYmWorkVaidateCallback = function() {
        			this.calYM_WORK.form.TextBox.setFocus();
        			return false;
        		}
        		this.gfnAlert("회계년월을 입력하셔야 합니다.", "fnYmWorkVaidateCallback"); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        	}
        	return validate;
        };
        /*
         *	저장 Validate
         */
        this.fnSaveValidate = function() {
        	var validate = true;
        	for (var i = 1; i < this.dsList.rowcount; i++) {
        		var flag = this.dsList.getColumn(i,this.ucFlag);
        		if( flag == "I" ||  flag == "U" ) {
        			if( nexacro.toNumber(this.dsList.getColumn(i,"AM_VAT")) > 0 && this.gfnIsNull(this.dsList.getColumn(i,"CD_VATPROOF")) ){
        				validate = false;
        				this.fnCdVatproofVaidateCallback = function() {
        					this.dsList.set_rowposition(i);
        					this.dxGrid.setCellPos( this.dxGrid.getBindCellIndex("body","CD_VATPROOF") );
        					return false;
        				}
        				this.gfnAlert((i+1)+"행 : [부가세 입력시 증빙코드]는 필수입력값입니요.", "fnCdVatproofVaidateCallback");
        			}
        		}
        	}
        	return validate;
        }
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
        	} else if(svcID == "save" || svcID == "slip" || svcID == "slipDelete" || svcID == "approve" || svcID == "consult"|| svcID == "approveCancel"){
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        /*
         * 조회조건 코드파인드 전
         */
        this.fnBeforeUserDataSetParam = function (id, dsUserParam, nrow){
        	if(id == "ccfNO_CONSULTDTL"){
        		if( this.gfnIsNull(this.dsSearch.getColumn(0,"CD_CORP")) ){
        			this.gfnAlert("법인코드를 선택하세요.");
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.dsSearch.getColumn(0, "CD_CORP")+this.AuthClient.CD_DEPT.substr(1));
        	}

        	return true;
        };

        /*
         * 그리드 코드파인드 전
         */
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "DBX_CFMAINSITE") {
        		dsUserParam.setColumn(nrow, "CD_AUTHDEPT", "");
        		dsUserParam.setColumn(nrow, "CD_BUNSO", this.dsSearch.getColumn(0,"CD_DEPT_BE"));
        		if( this.FormInfo.ID_GROUP == "2" ){
        			dsUserParam.setColumn(nrow, "CD_BUNSO", this.AuthClient.CD_DEPT.substr(1));
        		}
        		dsUserParam.setColumn(nrow, "ID_GROUP", this.FormInfo.ID_GROUP);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        	}

        	if (id == "DHX_CFALLVENDOR_CODEFIND" ){
        		if( this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition,"CD_SITE")) ){
        			this.dxGrid.setCellPos(this.dxGrid.getBindCellIndex("body", "CD_SITE"));
        			this.gfnAlert("단지코드를 선택하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsList.getColumn(this.dsList.rowposition,"CD_CORP"));
        	}

        	if (id == "DHX_CFEBILLBUY_ESERO") {
        		if( this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition,"CD_SITE")) ){
        			this.dxGrid.setCellPos(this.dxGrid.getBindCellIndex("body", "CD_SITE"));
        			this.gfnAlert("단지코드를 선택하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "TY_SALEBUY", "I"); // 매입매출구분(매입:I)
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsList.getColumn(this.dsList.rowposition,"CD_CORP"));
        	}

        	if (id == "DHX_COMMON_CODEFIND_SELECT") {
        		dsUserParam.setColumn(nrow, "CD_SYSTEM", "DH");
        		dsUserParam.setColumn(nrow, "CD_TYPE", "V10");
        	}
        	return true;
        };

        /*
         * 그리드 코드파인드 후
         */
        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	var rowPos = this.dsList.rowposition;

        	switch(id) {
        		case "DHX_CFEBILLBUY_ESERO":	//전자세금계산서번호
        			if (arrData.length > 0) {
        				this.dsList.set_enableevent(false);
        				this.dsList.setColumn(rowPos, "DT_ACCOUNT"	 , nexacro.replaceAll(this.gfnNvl(arrData[0]["ISSUE_DATE"],""),"-",""));	//회계일자
        				this.dsList.setColumn(rowPos, "CD_VENDOR" 	 , arrData[0]["CD_VENDOR"]);		//거래처코드
        				this.dsList.setColumn(rowPos, "DS_VENDOR" 	 , arrData[0]["DS_VENDOR"]);		//거래처명
        				this.dsList.setColumn(rowPos, "TY_VENDOR" 	 , arrData[0]["TY_VENDOR"]);		//거래처구분
        				this.dsList.setColumn(rowPos, "CD_VENDOR_MI" , arrData[0]["CD_VENDOR"]);		//거래처코드
        				this.dsList.setColumn(rowPos, "DS_VENDOR_MI" , arrData[0]["DS_VENDOR"]);		//거래처명
        				this.dsList.setColumn(rowPos, "TY_VENDOR_MI" , arrData[0]["TY_VENDOR"]);		//거래처구분
        				this.dsList.setColumn(rowPos, "AM_SUPPLY"	 , arrData[0]["CHARGETOTAL"]);		//공급가액
        				this.dsList.setColumn(rowPos, "AM_VAT"		 , arrData[0]["TAXTOTAL"]);			//부가세
        				this.dsList.setColumn(rowPos, "TY_ISSUE"	 , "E");		                    //전자증빙(전자발행)
        				this.dsList.setColumn(rowPos,"AM_ACCOUNT" , nexacro.toNumber(this.dsList.getColumn(rowPos,"AM_SUPPLY"),0) + nexacro.toNumber(this.dsList.getColumn(rowPos,"AM_VAT"),0));
        				this.dsList.set_enableevent(true);

        				var colCD_ACCOUNT = this.dxGrid.getBindCellIndex("body", "CD_ACCOUNT");
        				this.dxGrid.setCellPos(colCD_ACCOUNT);
        				this.dxGrid.showEditor(true);
        			}
        		break;

        		case "DHX_COMMON_CODEFIND_SELECT" :
        			if (arrData.length > 0) {
        				if( this.gfnIsNull(this.dsList.getColumn(rowPos, "ISSUE_ID")) ) {
        					this.dsList.setColumn(rowPos, "PER_VATPROOF"		, arrData[0]["DS_ETC2"]);		//증빙코드 부가세율
        					this.dsList.setColumn(rowPos, "AM_VAT"		, nexacro.toNumber(this.dsList.getColumn(rowPos,"AM_SUPPLY"),0) * (nexacro.toNumber(this.dsList.getColumn(rowPos,"PER_VATPROOF"),0)/100));		//증빙코드 부가세율
        					this.dsList.setColumn(rowPos,"AM_ACCOUNT" , nexacro.toNumber(this.dsList.getColumn(rowPos,"AM_SUPPLY"),0) + nexacro.toNumber(this.dsList.getColumn(rowPos,"AM_VAT"),0));
        				}
        			}
        		break;

        		case "DHX_CFALLVENDOR_CODEFIND" :
        			if (arrData.length > 0) {
        				this.dsList.setColumn(rowPos, "TY_VENDOR" 	, arrData[0]["TY_VENDOR"]);		//거래처구분
        				this.dsList.setColumn(rowPos, "CD_VENDOR" 	, arrData[0]["CD_VENDOR"]);		//거래처코드
        				this.dsList.setColumn(rowPos, "DS_VENDOR" 	, arrData[0]["DS_VENDOR"]);		//거래처명


        				if( this.gfnIsNull(this.dsList.getColumn(rowPos,"CD_VENDOR_MI")) ){
        					this.dsList.setColumn(rowPos, "TY_VENDOR_MI"	, arrData[0]["TY_VENDOR"]);		//거래처구분
        					this.dsList.setColumn(rowPos, "CD_VENDOR_MI"	, arrData[0]["CD_VENDOR"]);		//거래처코드
        					this.dsList.setColumn(rowPos, "DS_VENDOR_MI"	, arrData[0]["DS_VENDOR"]);		//거래처명

        					this.tyVendorMi = arrData[0]["TY_VENDOR"];
        					this.cdVendorMi = arrData[0]["CD_VENDOR"];
        					this.dsVendorMi = arrData[0]["DS_VENDOR"];
        				}
        			}
        		break;

        		case "DHX_CFALLVENDOR_CODEFIND1" :
        			if (arrData.length > 0) {
        				if( this.dsList.getColumn(rowPos,"TY_ISSUE") == "E" ){
        					// 거래처 구분이 S:사번인 경우
        					if( arrData[0]["TY_VENDOR"] == "S" ){
        						this.dsList.setColumn(rowPos, "TY_VENDOR_MI" 	, arrData[0]["TY_VENDOR"]);		//거래처구분
        						this.dsList.setColumn(rowPos, "CD_VENDOR_MI" 	, arrData[0]["CD_VENDOR"]);		//거래처코드
        						this.dsList.setColumn(rowPos, "DS_VENDOR_MI" 	, arrData[0]["DS_VENDOR"]);		//거래처명
        					} else {
        						this.dsList.setColumn(rowPos, "TY_VENDOR_MI" 	, this.gfnIsNull(this.tyVendorMi) ? this.dsList.getColumn(rowPos,"TY_VENDOR") : this.tyVendorMi);		//거래처구분
        						this.dsList.setColumn(rowPos, "CD_VENDOR_MI" 	, this.gfnIsNull(this.tyVendorMi) ? this.dsList.getColumn(rowPos,"CD_VENDOR") : this.cdVendorMi);		//거래처코드
        						this.dsList.setColumn(rowPos, "DS_VENDOR_MI" 	, this.gfnIsNull(this.tyVendorMi) ? this.dsList.getColumn(rowPos,"DS_VENDOR") : this.dsVendorMi);		//거래처명
        						this.gfnAlert("거래처구분은 '사번'만 선택가능합니요.");
        					}

        					this.tyVendorMi = this.dsList.getColumn(rowPos,"TY_VENDOR_MI");
        					this.cdVendorMi = this.dsList.getColumn(rowPos,"CD_VENDOR_MI");
        					this.dsVendorMi = this.dsList.getColumn(rowPos,"DS_VENDOR_MI");
        				}
        			}
        		break;

         	}
        };
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.columnid == "AM_SUPPLY" || e.columnid == "PER_VATPROOF"){
        		obj.setColumn(e.row,"AM_VAT" , nexacro.toNumber(obj.getColumn(e.row,"AM_SUPPLY"),0) * (nexacro.toNumber(obj.getColumn(e.row,"PER_VATPROOF"),0)/100));
        	}

        	if(e.columnid.search("AM") > -1 ||  e.columnid == "PER_VATPROOF") {
        		//trace(e.columnid +" =="+ (nexacro.toNumber(obj.getColumn(e.row,"AM_SUPPLY")) + nexacro.toNumber(obj.getColumn(e.row,"AM_VAT"))));
        		obj.setColumn(e.row,"AM_ACCOUNT" , nexacro.toNumber(obj.getColumn(e.row,"AM_SUPPLY"),0) + nexacro.toNumber(obj.getColumn(e.row,"AM_VAT"),0));
        	}



        	if(e.columnid == "ISSUE_ID" && this.gfnIsNull(e.newvalue)){
        		obj.setColumn(e.row, "DT_ACCOUNT" 	, "");		//회계일자
        		obj.setColumn(e.row, "CD_VENDOR" 	, "");		//거래처코드
        		obj.setColumn(e.row, "DS_VENDOR" 	, "");		//거래처명
        		obj.setColumn(e.row, "TY_VENDOR" 	, "");		//거래처구분
        		obj.setColumn(e.row, "AM_SUPPLY"	, 0);	    //공급가액
        		obj.setColumn(e.row, "AM_VAT"		, 0);		//부가세
        		obj.setColumn(e.row, "TY_ISSUE"	, "");          // 전자증빙(전자발행)
        		obj.setColumn(e.row, "AM_ACCOUNT"  , 0);
        		obj.setColumn(e.row,"TY_ISSUE","P");
        	}
        };

        this.dxGrid_oncelldblclick = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;
        	var strColumnName = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, this.dxGrid.currentcol);

        	if (strColumnName != "CD_SLIP" ) return 0;

        	this.fnWorkBtn3();
        };
        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        /*
         * 확장버튼 체크로직
         */
        this.fnCustomValidate = function(buttonName){
        	var nICnt = this.dsList.findRow(this.ucFlag,"I");
        	var nUCnt = this.dsList.findRow(this.ucFlag,"U");
        	var nDCnt = this.dsList.findRow(this.ucFlag,"D");
        	var param = {};
        	param.bVal = true;
        	param.strRows1 = "";
        	param.strRows2 = "";
        	param.strRows3 = "";

        	if( nICnt > -1|| nUCnt > -1 || nDCnt > -1) {
        		this.gfnAlert("추가,수정,삭제한 데이터를 저장하세요.", "");
        		param.bVal = false;
        		return param;
        	}

        	var nCnt = this.dsList.findRow("CHK",1);
        	if( nCnt == -1) {
        		this.gfnAlert(buttonName + "할 행을 체크하세요.", "");
        		param.bVal = false;
        		return param;
        	}

        	var strRows1 = "";
        	var strRows2 = "";
        	var strRows3 = "";
        	for ( var i =0; i < this.dsList.rowcount; i++){
        		if( this.dsList.getColumn(i, this.ucFlag) != "#" && this.dsList.getColumn(i,"CHK") == 1) {

        			if( !this.gfnIsNull( this.dsList.getColumn(i,"CD_SLIP")) ) {
        				strRows1 = strRows1+ (i+1)+" ," ;
        			} else {
        				strRows3 = strRows3+ (i+1)+" ," ;
        			}

        			if( this.dsList.getColumn(i,"YN_APPROVE") == "N" ) {
        				strRows2 = strRows2+ (i+1)+" ," ;
        			}
        		}
        	}

        	param.strRows1 = strRows1;
        	param.strRows2 = strRows2;
        	param.strRows3 = strRows3;

        	return param;
        }

        /*
         * 전표발행 버튼 클릭
         */
        this.fnWorkBtn1 = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;
        	var param = this.fnCustomValidate(obj.text);

        	if( !param.bVal ) return;
        	var strRows1 = param.strRows1;
        	var strRows2 = param.strRows2;
        	var strRows3 = param.strRows3;

        	if( strRows1 != "" ){
        		this.gfnAlert( "전표발행된 행( "+strRows1.substr(0, strRows1.length-1)+")이 존재합니다.");
        		return false;
        	}

        	if( strRows2 != "" ){
        		this.gfnAlert( "본사승인 처리 후 (미처리행 : "+strRows2.substr(0, strRows2.length-1)+") "+obj.text+" 가능합니다.");
        		return false;
        	}

        // 	if (this.gfnIsNull(this.ccfCD_DEPT_BE.form.CDTextBox.text)) {
        // 		this.ccfCD_DEPT_BE.form.CDTextBox.setFocus();
        // 		this.gfnAlert("AS사무소를 입력하셔야 합니다."); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        // 		return false;
        // 	}
        	this.gfnConfirm("선택한 데이터의 전표발행 작업을 하시겠습니까?", "fnSlipIssue");

        };

        /*
          *	전표발행
          */
        this.fnSlipIssue = function(svcID, value){

        	if(value) {
        		this.gfnGridBeforeSelect(this.dxGrid);

        		var colIdx = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, "CHK");
        		var strSlipKey = "";
        		var nRow = 0;
        		for ( var i =0; i < this.dsList.rowcount; i++){
        			if( this.dsList.getColumn(i, this.ucFlag) != "#" && this.dsList.getColumn(i,"CHK") == 1) {
        				strSlipKey += this.dsList.getColumn(i,"NO_SLIPKEY")+",";
        			}
        		}

        		this.dsSlip.clearData();
        		this.dsSlip.addRow();
        		this.dsSlip.setColumn(0, "CD_DEPT_BE", "A0600611"); // 부서 가져오는 부분 확정시까지만 사용
        		this.dsSlip.setColumn(0, "NO_SLIPKEY", strSlipKey.substr(0,strSlipKey.length-1));
        		this.dsSlip.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        		this.dsSlip.setColumn(0, "CD_DEPT", this.AuthClient.CD_DEPT);

        		var strSvcId    = "slip";
        		var strSvcType  = "grid";
        		var inProc		= "_dsProc";
        		var inData      = "slip=dsSlip";
        		var outData     = "";
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

        };

        /*
         *	전표취소 버튼 클릭
         */
        this.fnWorkBtn2 = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	if( this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP")) ){
        		this.gfnAlert("전표가 생성된 행만 전표취소 가능합니다.", "");
        		return;
        	}
        	this.gfnConfirm("선택한 데이터의 전표취소 작업을 하시겠습니까?", "fnSlipDelete");
        };

        /*
          *	전표취소
          */
        this.fnSlipDelete = function(svcID, value){

        	if(value) {
        		this.gfnGridBeforeSelect(this.dxGrid);

        		this.dsSlipX.clearData();
        		this.dsSlipX.addRow();
        		this.dsSlipX.setColumn(0, "CD_TRADE", this.dsList.getColumn(this.dsList.rowposition,"CD_SLIP"));


        		var strSvcId    = "slipDelete";
        		var strSvcType  = "grid";
        		var inProc		= "_dsProc";
        		var inData      = "slipDelete=dsSlipX";
        		var outData     = "";
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

        };

        /*
         *	전표조회 버튼 클릭
         */
        this.fnWorkBtn3 = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	if( !this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP")) ){
        		var param = {};

        		param.CD_TRADE = this.dsList.getColumn(this.dsList.rowposition,"CD_SLIP");
        		param.IUD_FLAG = "S";

        		this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);
        	} else {
        		this.gfnAlert("전표가 생성된 행만 전표조회 가능합니다.", "");
        	}

        };

        /*
         *	본사승인 버튼 클릭
         */
        this.fnWorkBtn4 = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;
        	var param = this.fnCustomValidate(obj.text);
        	if( !param.bVal ) return;
        	var strRows1 = param.strRows1;
        	var strRows2 = param.strRows2;
        	var strRows3 = param.strRows3;

        	if( strRows1 != "" ){
        		this.gfnAlert( "전표발행된 행( "+strRows1.substr(0, strRows1.length-1)+")이 존재합니다.");
        		return false;
        	}

        	this.gfnConfirm("선택한 데이터의 본사승인 작업을 하시겠습니까?", "fnApprove");

        };

        /*
         *	본사승인
         */
        this.fnApprove = function(svcID, value){

        	if(value) {
        		this.gfnGridBeforeSelect(this.dxGrid);

        		var colIdx = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, "CHK");
        		var strSlipKey = "";
        		var nRow = 0;
        		for ( var i =0; i < this.dsList.rowcount; i++){
        			if( this.dsList.getColumn(i, this.ucFlag) != "#" && this.dsList.getColumn(i,"CHK") == 1) {
        				strSlipKey += this.dsList.getColumn(i,"NO_SLIPKEY")+",";
        			}
        		}

        		this.dsApprove.clearData();
        		this.dsApprove.addRow();
        		this.dsApprove.setColumn(0, "NO_SLIPKEY", strSlipKey.substr(0,strSlipKey.length-1));

        		var strSvcId    = "approve";
        		var strSvcType  = "grid";
        		var inProc		= "_dsProc";
        		var inData      = "approve=dsApprove";
        		var outData     = "";
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

        };

        /*
         * 원안품의등록 버튼 클릭
         */
        // this.fnWorkBtn5 = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        // 	var param = this.fnCustomValidate(obj.text);
        // 	if( !param.bVal ) return;
        //
        // 	var strRows1 = param.strRows1;
        // 	var strRows2 = param.strRows2;
        // 	var strRows3 = param.strRows3;
        //
        // 	if( strRows3 != "" ){
        // 		this.gfnAlert( "전표발행 미발행된 행( "+strRows3.substr(0, strRows3.length-1)+")이 존재합니다.");
        // 		return false;
        // 	}
        //
        // 	if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_CONSULT"))) {
        // 		this.gfnAlert("원안품의를 반드시 입력 하셔야 합니다.");
        // 		return;
        // 	}
        //
        // 	this.gfnConfirm("선택한 항목의 원안품의를 등록하시겠습니까?", "fnConsult");
        //
        // };

        /*
         *	원안품의
         */
        // this.fnConsult = function (id, val){
        // 	if(val) {
        // 		this.gfnGridBeforeSelect(this.dxGrid);
        //
        // 		var colIdx = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, "CHK");
        // 		var strSlipKey = "";
        // 		var nRow = 0;
        // 		for ( var i =0; i < this.dsList.rowcount; i++){
        // 			if( this.dsList.getColumn(i, this.ucFlag) != "#" && this.dsList.getColumn(i,"CHK") == 1) {
        // 				strSlipKey += this.dsList.getColumn(i,"NO_SLIPKEY")+",";
        // 			}
        // 		}
        //
        // 		this.dsConsult.clearData();
        // 		this.dsConsult.addRow();
        // 		this.dsConsult.setColumn(0, "NO_CONSULTDTL", this.dsSearch.getColumn(0, "NO_CONSULT"));
        // 		this.dsConsult.setColumn(0, "NO_SLIPKEY", strSlipKey.substr(0,strSlipKey.length-1));
        // 		this.dsConsult.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        //
        // 		var strSvcId    = "consult";
        // 		var strSvcType  = "grid";
        // 		var inProc		= "_dsProc";
        // 		var inData      = "consult=dsConsult";
        // 		var outData     = "";
        // 		var strArg      = "";
        // 		var callBackFnc = "fnCallback";
        //
        // 		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 							strSvcType , 	// trabsaction을 요청할 구분
        // 							inProc,			// Procedure 정보 Dataset 이름
        // 							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 							strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 							callBackFnc); // 통신방법 정의 [생략가능]
        // 	}
        //
        // };

        /*
         *	본사승인취소  버튼 클릭
         */
        this.fnWorkBtn6 = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;
        	var param = this.fnCustomValidate(obj.text);
        	if( !param.bVal ) return;

        	var strRows1 = param.strRows1;
        	var strRows2 = param.strRows2;
        	var strRows3 = param.strRows3;

        	if( strRows1 != "" ){
        		this.gfnAlert( "전표발행된 행( "+strRows1.substr(0, strRows1.length-1)+")이 존재합니다.");
        		return false;
        	}
        	this.gfnConfirm("선택한 데이터의 본사승인취소를 하시겠습니까?", "fnApproveCancel");


        };

        /*
         *	본사승인 취소
         */
        this.fnApproveCancel = function(svcID, value){

        	if(value) {
        		this.gfnGridBeforeSelect(this.dxGrid);

        		var colIdx = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, "CHK");
        		var strSlipKey = "";
        		var nRow = 0;
        		for ( var i =0; i < this.dsList.rowcount; i++){
        			if( this.dsList.getColumn(i, this.ucFlag) != "#" && this.dsList.getColumn(i,"CHK") == 1) {
        				strSlipKey += this.dsList.getColumn(i,"NO_SLIPKEY")+",";
        			}
        		}

        		this.dsApprove.clearData();
        		this.dsApprove.addRow();
        		this.dsApprove.setColumn(0, "NO_SLIPKEY", strSlipKey.substr(0,strSlipKey.length-1));

        		var strSvcId    = "approveCancel";
        		var strSvcType  = "grid";
        		var inProc		= "_dsProc";
        		var inData      = "approveCancel=dsApprove";
        		var outData     = "";
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

        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.dsSearch_onvaluechanged = function(obj,e)
        {

        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("DBE_CIVILCOST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
