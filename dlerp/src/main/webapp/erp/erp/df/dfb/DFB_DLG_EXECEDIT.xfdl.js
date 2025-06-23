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
            this.set_titletext("출금구분및입금계좌변경");
            this.getSetter("maxwidth").set("450");
            this.getSetter("maxheight").set("250");
            if (Form == this.constructor)
            {
                this._setFormPosition(450,230);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DFBPR_EXECDTL_EDIT</Col></Row><Row><Col id=\"SP\">DZXPR_COMBO_SELECT</Col><Col id=\"TARGET\">combo</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PAY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PAY\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CASH\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ_EXEC\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BANK\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PAYMENT2\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BANK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_PAYMENT2", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">모계좌</Col><Col id=\"DS_CODE\">모계좌</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("계좌번호변경");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_PAY","0","40","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("거래처");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","109","40",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_ACCOUNT","0","98","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("거래처계좌");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","staCD_PAY:-111","staBg1:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboTY_PAYMENT2","staCD_PAY:5","74","180","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsTY_PAYMENT2");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_PAYMENT2","0","69","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("출금구분");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3","staTY_PAYMENT2:-1","staBg2:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfNO_ACCOUNT","115","staBg2:4","285","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DFX_CFACCOUNTMATCH");
            obj.getSetter("CDTextWidth").set("150");
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSave","38.00%","staNO_ACCOUNT:20","50","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","50.00%","staNO_ACCOUNT:20","50","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_PAY","114","45","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_PAY","221","45","199","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.cfNO_ACCOUNT.form.CDTextBox","value","dsList","NO_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.cfNO_ACCOUNT.form.DSTextBox","value","dsList","DS_BANK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.edtCD_PAY","value","dsList","CD_PAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.edtDS_PAY","value","dsList","DS_PAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.cboTY_PAYMENT2","value","dsList","TY_PAYMENT2");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DFB_DLG_EXECEDIT.xfdl", function() {
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

        	// 팝업사이즈 조정
         	var nWidth = "500px";
         	var nHeight = "250px";
         	this.getOwnerFrame().set_width(nWidth);
         	this.getOwnerFrame().set_height(nHeight);

        	// 이전 화면에서 데이터 받기.
         	//this.dsList.setColumn(0, "SEQ_EXEC", this.getOwnerFrame().SEQ_EXEC);
        	//this.dsList.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);
        	//this.divData.form.cfCD_CORP.form.DSTextBox.set_value(this.getOwnerFrame().DS_CORP);
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

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.edtCD_PAY = this.divData.form.edtCD_PAY;
        	this.edtDS_PAY = this.divData.form.edtDS_PAY;
        	this.cboTY_GUBUN = this.divData.form.cboTY_GUBUN;
        	this.cfNO_ACCOUNT = this.divData.form.cfNO_ACCOUNT;

        	this.cdGroup = this.gfnIsNull(this.AuthClient.CD_GROUP) ? "" : this.AuthClient.CD_GROUP;			// 그룹코드
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.cfNO_ACCOUNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfNO_ACCOUNT.AfterCDTextChanged = "fnAfterCDTextChanged";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("SEQ_EXEC", "string");
        	this.dsUpdate.addColumn("NO_ACCOUNT", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("CD_BANK", "string");
        	this.dsUpdate.addColumn("TY_PAYMENT2", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

         /*
         *	입력 버튼
         */
        this.fnAdd = function() {


        }

         /*
         *	저장 버튼
         */
        this.fnSave = function() {

        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	//this.gfnExcelExport(this.dxGrid);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }

        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(0, "CD_TYPE", "B2");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_PAYMENT2=combo0";
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
         * Validate
         ************************************************************************/

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
        */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "combo") {
        		// 타화면에서 오픈시 넘어오는 파라미터 처리
        		var frame = this.getOwnerFrame();

        		this.dsList.setColumn(0, "SEQ_EXEC", this.getOwnerFrame().SEQ_EXEC);
        		this.dsList.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);
        		this.dsList.setColumn(0, "TY_CASH", this.getOwnerFrame().TY_CASH);
        		this.dsList.setColumn(0, "TY_VENDOR", this.getOwnerFrame().TY_VENDOR);
        		this.dsList.setColumn(0, "TY_GUBUN", this.getOwnerFrame().TY_ACCOUNT_GU);
        		this.dsList.setColumn(0, "CD_PAY", this.getOwnerFrame().CD_PAY);
        		this.dsList.setColumn(0, "DS_PAY", this.getOwnerFrame().DS_PAY);
        		this.dsList.setColumn(0, "TY_PAYMENT2", this.getOwnerFrame().TY_PAYMENT2);

        		// 거래처계좌
        		this.dsList.setColumn(0, "NO_ACCOUNT", this.getOwnerFrame().DS_PAY_NO_ACCOUNT);
        		this.dsList.setColumn(0, "DS_BANK", this.getOwnerFrame().DS_PAY_NM_BANK);
        		this.dsList.setColumn(0, "CD_BANK", this.getOwnerFrame().CD_BANK);
        	}
        	if (svcID == "save") {
        		if(errorCode == 0){
        			// this.close()가 작동하지 않았고,
        			// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        			this.getParentContext().close(true);
        		}else{
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "cfNO_ACCOUNT") {
        		//TY_VENDOR = 하단 GRID.현재ROW.TY_VENDOR
        		//CD_PAY = TEXT.CD_PAY
        		//TY_CASH = 하단 GRID.현재ROW.TY_CASH
        		//CD_CORP = 하단 GRID.현재ROW.CD_CORP

        		dsUserParam.setColumn(nrow, "TY_VENDOR", this.dsList.getColumn(0, "TY_VENDOR"));
        		dsUserParam.setColumn(nrow, "CD_PAY", this.dsList.getColumn(0, "CD_PAY"));
        		dsUserParam.setColumn(nrow, "TY_CASH", this.dsList.getColumn(0, "TY_CASH"));
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if (id == "cfNO_ACCOUNT") {
        		if(arr.length > 0) {
        			this.dsList.setColumn(0, "NO_ACCOUNT", arr[0]["NO_ACCOUNT"]);		// 계좌번호
        			this.dsList.setColumn(0, "CD_BANK", arr[0]["CD_BANK"]);				// 은행코드
        			this.dsList.setColumn(0, "TY_GUBUN", arr[0]["TY_GUBUN"]);			// 계좌구분
        			//this.dsList.setColumn(0, "CD_SIDEBANK", arr[0]["CD_MANAGEBANK"]);	// 계좌지점코드

        			//@NO_ACCOUNT = DFX_CFACCOUNTMATCH.NO_ACCOUNT
        			//@TY_GUBUN = 하단 GRID.현재ROW.TY_ACCOUNT_GU / DFX_CFACCOUNTMATCH.TY_GUBUN
        			//@CD_BANK = 하단 GRID.현재ROW.CD_BANK / DFX_CFACCOUNTMATCH.CD_BANK
        		}
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        // 저장 버튼 클릭
        this.divData_btnSave_onclick = function(obj,e)
        {
        	if(!this.fnSaveValidate()) return;

        	/*
        	var json = {};

        	json.CD_MAINBANK = this.dsList.getColumn(0, "CD_BANK");			// 은행코드
        	json.NO_MAINACCOUNT = this.dsList.getColumn(0, "NO_ACCOUNT");	// 계좌번호
        	json.CD_MAINSIDEBANK = this.dsList.getColumn(0, "CD_SIDEBANK");	// 계좌지점
        	json.TY_GUBUN = this.dsList.getColumn(0, "TY_GUBUN");			// 계좌구분

        	this.getParentContext().close(JSON.stringify(json));
        	*/

        	this.dsUpdate.clearData();
        	var nrow = this.dsUpdate.addRow();
        	this.dsUpdate.setColumn(nrow, "SEQ_EXEC", this.dsList.getColumn(0, "SEQ_EXEC"));
        	this.dsUpdate.setColumn(nrow, "NO_ACCOUNT", this.dsList.getColumn(0, "NO_ACCOUNT"));
        	this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(0, "TY_GUBUN"));
        	this.dsUpdate.setColumn(nrow, "CD_BANK", this.dsList.getColumn(0, "CD_BANK"));
        	this.dsUpdate.setColumn(nrow, "TY_PAYMENT2", this.dsList.getColumn(0, "TY_PAYMENT2"));
        	this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

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
        };

        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };

        this.fnSaveValidate = function() {

        	var strMsg = "";

        	if(this.gfnIsNull(this.dsList.getColumn(0, "CD_PAY"))) {
        		strMsg += "거래처는 반드시 입력 하셔야 합니다.\n";
        	}
        	//if(this.gfnIsNull(this.dsList.getColumn(0, "TY_PAYMENT2"))) {
        	//	strMsg += "출금구분 코드는 반드시 입력 하셔야 합니다.\n";
        	//}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "NO_ACCOUNT"))) {
        		strMsg += "거래처 계좌는 반드시 입력 하셔야 합니다.\n";
        	}

        	if(strMsg.length > 0) {
        		this.gfnAlert(strMsg);
        		return false;
        	}

        	return true;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnSave.addEventHandler("onclick",this.divData_btnSave_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
        };
        this.loadIncludeScript("DFB_DLG_EXECEDIT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
