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
            this.set_titletext("전자세금계산서조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SP\">DHAPR_HOMETAX_UPDATE</Col><Col id=\"TARGET\">update</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHXPR_CFEBILLBUY_ESERO_ALL</Col></Row><Row><Col id=\"TARGET\">selectTax</Col><Col id=\"SP\">DHXPR_TAX_INFO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"TY_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SALEBUY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TRADE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SALEBUY", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">I</Col><Col id=\"VALUE\">매입</Col></Row><Row><Col id=\"CODE\">O</Col><Col id=\"VALUE\">매출</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTax", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_FROM","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("거래일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","staDT_FROM:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_TILDE","ctclDT_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","staCD_TILDE:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_TRADE","ctclDT_TO:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("전표번호");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtCD_TRADE","staCD_TRADE:0.0","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_SALEBUY","0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("거래구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("ccrdTY_SALEBUY","staTY_SALEBUY:0.0","staCD_CORP:10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsTY_SALEBUY");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_columncount("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","ccfCD_CORP:0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("거래처");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","staCD_VENDOR:0.0","staCD_CORP:10.0","264","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFALLVENDOR_CODEFIND");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("11");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtTY_VENDOR","ccfCD_VENDOR:10","staCD_CORP:10.0","20","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_visible("false");
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

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.txtCD_TRADE","value","dsSearch","CD_TRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccrdTY_SALEBUY","value","dsSearch","TY_SALEBUY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfCD_VENDOR.form.DSTextBox","value","dsSearch","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.edtTY_VENDOR","value","dsSearch","TY_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHA_BILL_SELECT.xfdl", function() {
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

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        //  	this.FormBtns.Add.set_enable(false);
        //  	this.FormBtns.Save.set_enable(false);
        //  	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.tbbHistory = this.gfnFormButtonAdd("tbbHistory", "fnTbbHistory", "전표조회");
        	this.btnTaxView     = this.gfnFormButtonAdd("btnTaxView"   	 , "fnTaxView");		//세금계산서 보기
        	this.btnUse     = this.gfnFormButtonAdd("btnUse"   	 , "fnSetUse");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ctclDT_FROM = this.divSearch.form.ctclDT_FROM;
        	this.ctclDT_TO = this.divSearch.form.ctclDT_TO;
        	this.txtCD_TRADE = this.divSearch.form.txtCD_TRADE;
        	this.ccrdTY_SALEBUY = this.divSearch.form.ccrdTY_SALEBUY;
        	this.ccfCD_VENDOR = this.divSearch.form.ccfCD_VENDOR;
        	this.edtTY_VENDOR = this.divSearch.form.edtTY_VENDOR;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHA_BILL_SELECT");

        	//this.dxGrid.addEventHandler("oncelldblclick", this.fnGrid_Celldblclick, this);

        	this.dsList.addEventHandler("onrowposchanged", this.dsList_Rowposchanged, this);

        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}

        	var today = this.gfnGetDate();
        	this.ctclDT_FROM.set_value(this.gfnGetFirstDate(today));
        	this.ctclDT_TO.set_value(today);

        	this.dsSearch.setColumn(0, "TY_SALEBUY", "I");


        	this.ccfCD_VENDOR.CodeFindName = "DHX_CFALLVENDOR_CODEFIND";	// DHX_CFNVENDOR_CODEFIND
        	this.ccfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_VENDOR.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("DT_FROM", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
        	this.dsSelect.addColumn("CD_TRADE", "string");
        	this.dsSelect.addColumn("TY_SALEBUY", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");

        	//세금계산서 조회용 데이터셋
        	this.dsSelectTax = new Dataset();
        	this.dsSelectTax.addColumn("ISSUE_ID"  , "string");
        	this.dsSelectTax.addColumn("TY_SALEBUY", "string");

        	//사용유무 저장 데이터셋
        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("ISSUE_ID"  , "string");
        	this.dsUpdate.addColumn("TY_SALEBUY", "string");
        	this.dsUpdate.addColumn("YN_USE", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
        this.fnGetUserInfo = function() {
        	this.dsSearch.clearData();

        	var nRow = this.dsSearch.addRow();
        	this.dsSearch.setColumn(nRow, "ID_USER", this.AuthClient.ID_USER);
            this.dsSearch.setColumn(nRow, "CD_DEPT", this.AuthClient.CD_DEPT);
            this.dsSearch.setColumn(nRow, "CD_CORP", this.AuthClient.CD_CORP);

        	var strSvcId    = "userinfo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "userinfo=dsSearch";
        	var outData     = "dsUserInfo=userinfo0";
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
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);


        	this.dsSelect.clearData();
        	var nRow = this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "DT_FROM", this.dsSearch.getColumn(0, "DT_FROM"));
        	this.dsSelect.setColumn(0, "DT_TO", this.dsSearch.getColumn(0, "DT_TO"));
        	this.dsSelect.setColumn(0, "CD_TRADE", this.dsSearch.getColumn(0, "CD_TRADE"));
        	this.dsSelect.setColumn(0, "TY_SALEBUY", this.dsSearch.getColumn(0, "TY_SALEBUY"));
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

        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.gfnAlert("법인코드를 입력 하세요.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.ctclDT_FROM.value) || this.gfnIsNull(this.ctclDT_TO.value) )
        	{
        		this.gfnAlert("기간을 입력 하세요.");
        		this.ctclDT_FROM.setFocus();
        		return false;
        	}
        	else if ( this.gfnGetDiffDate(this.ctclDT_FROM.value, this.ctclDT_TO.value) < 0 )
        	{
        		this.gfnAlert("일자가 잘못 입력 되었습니다.");
        		this.ctclDT_TO.setFocus();
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
        		this.fnSetButton();
        		this.gfnGridAfterSelect(this.dxGrid);
        	}

        	if (svcID == "selectTax") {
        		if (errorCode == 0) {
        			if(this.dsTax.rowcount > 0){
        			/*
        				var url = this.gfnGetConfig("DH" , "TAX_URL");
        				url = url+"Tax/TaxView.jsp?";
        				url += "invseq="+this.dsTax.getColumn(0, "INV_SEQ");
        				url += "&status="+this.dsTax.getColumn(0, "STATUS");
        				url += "&burks=" +this.dsTax.getColumn(0, "BUKRS");

        				window.open(url, "_blank", "width=790,height=600,menubar=no,scrollbars=no,resizable=no,status=no");
        			*/
        				var issueId   = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "ISSUE_ID"));
        				var url = this.gfnGetConfig("DH" , "TAX_URL");
        				url = url+"TaxView/view.do?";
        				url += "invseq="+this.dsTax.getColumn(0, "INV_SEQ");
        				url += "&status="+this.dsTax.getColumn(0, "STATUS");
        				url += "&type=dtv3"
        				url += "&issueid="+issueId
        				url += "&aspcode=" +this.dsTax.getColumn(0, "ASP_CODE");

        				trace("TAX_URL url->" + url);
        				//http://중계서버IP:7502/TaxView/view.do?invseq=inv_seq&status=상태&type=dtv3&issueid=승인번호&aspcode=00000000

        				window.open(url, "_blank", "width=790,height=570,menubar=no,scrollbars=no,resizable=no,status=no");
        			}else{
        				this.gfnAlert("세금계산서 정보가 없습니다.");
        			}
        		}else{
        			this.gfnAlert(errorMsg);

        		}
        	}

        	if (svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		}else{
        			this.gfnAlert(errorMsg);

        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var sCdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        	if (id == "ccfCD_CORP")
        	{
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}

        	if (id == "ccfCD_VENDOR") {
        		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			this.gfnAlert("법인코드는 필수입력 값입니다.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "TY_ACCOUNT", "");
        		dsUserParam.setColumn(nrow, "CD_ACCOUNT", "");
        	}
        	return true;

        };

        this.fnAfterCDTextChanged = function(id, codeFindData)
        {
        	var arrData = codeFindData;
        	switch(id) {
        		case "ccfCD_CORP":	//법인코드
        			this.ccfCD_VENDOR.form.fnCodeFindClear();
        			this.dsSearch.setColumn(0, "TY_VENDOR"	, "");
        			break;

        		case "ccfCD_VENDOR":	// 거래처
        			var tyVendor = (arrData.length > 0) ? arrData[0]["TY_VENDOR"] : "";
        			this.dsSearch.setColumn(0, "TY_VENDOR"	, tyVendor);
        		break;
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
        //     if ((obj.oldrow > -1 && obj.oldrow == e.row)
        // 		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        // 		this.FormBtns.SubSelect.click();
        // 		obj.oldrow = -1;
        // 	}
        };

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        this.fnTbbHistory = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	var no_slip = nexacro.replaceAll(this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE")),"-","");
        	//var no_slip = this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE");

        	if(no_slip == "" || this.gfnIsNull(no_slip))
        	{
        		this.gfnAlert("발행된 전표가 없습니다.");
        		return false;
        	}

        	param.CD_TRADE = no_slip;
        	param.IUD_FLAG = "S";
        	param.strYN_JUNDO_START = "";

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);

        }

        //세금계산서 보기
        this.fnTaxView = function (obj,e)
        {
        	var issueId   = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "ISSUE_ID"));
        	var tySalebuy = this.dsList.getColumn(this.dsList.rowposition, "TY_SALEBUY");
        	if(this.gfnIsNull(issueId)){
        		this.gfnAlert("전자세금계산서번호는 필수입니다.");
        		return;
        	}

        	//세금계산서 정보 조회
        	this.fnSelectTax(issueId, tySalebuy);
        };


        //세금계산서 정보 조회
        this.fnSelectTax = function (issueId, tySalebuy)
        {
        	this.dsSelectTax.clearData();
        	var nRow = this.dsSelectTax.addRow();

        	this.dsSelectTax.setColumn(nRow, "ISSUE_ID"  , issueId);		//세금계산서번호
        	this.dsSelectTax.setColumn(nRow, "TY_SALEBUY", tySalebuy);		//매입/매출구분

        	var strSvcId    = "selectTax";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectTax=dsSelectTax";
        	var outData     = "dsTax=selectTax0";
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

        // 사용유무 update
        this.fnSetUse = function (obj,e)
        {
        	if (this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "ISSUE_ID"))) {
        		return;
        	}

        	if (!this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"))) {
        		this.gfnAlert("전표발행된 자료입니다. 수정할 수 없습니다.");
        		return;
        	}

        	var YN_USE = this.dsList.getColumn(this.dsList.rowposition, "YN_USE") == "Y" ? "미사용" : "사용" ;

        	this.gfnConfirm( "해당 자료를 " + YN_USE + " 처리 하시겠습니까?","fnSetUseCallback");

        }

        this.fnSetUseCallback = function(strId, val)
        {
        	if (val) {
        		this.dsUpdate.clearData();
        		var nRow = this.dsUpdate.addRow();

        		this.dsUpdate.setColumn(nRow, "ISSUE_ID"  , this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "ISSUE_ID")));		//세금계산서번호
        		this.dsUpdate.setColumn(nRow, "TY_SALEBUY", this.dsList.getColumn(this.dsList.rowposition, "TY_SALEBUY"));		//매입/매출구분
        		this.dsUpdate.setColumn(nRow, "YN_USE", this.dsList.getColumn(this.dsList.rowposition, "YN_USE") == "Y" ? "N" : "Y") ;
        		this.dsUpdate.setColumn(nRow, "ID_USER", this.AuthClient.ID_USER);

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
        							strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc);   // 통신방법 정의 [생략가능]
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        }

        this.dsSearch_oncolumnchanged = function(obj,e)
        {
        	this.fnSearchInit();
        };


        //그리드 로우변경 이벤트
        this.dsList_Rowposchanged = function(obj,e)
        {
        	this.fnSetExtendButtonEnable();
        };

        this.fnSetExtendButtonEnable = function(){
        	var CD_TRADE = this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE");
        	var ISSUE_ID = this.dsList.getColumn(this.dsList.rowposition, "ISSUE_ID");
        	var Yn_Use = this.dsList.getColumn(this.dsList.rowposition, "YN_USE") == "Y" ? "미사용" : "사용";

        	trace("Yn_Use =>" + Yn_Use);
        	if(!this.gfnIsNull(ISSUE_ID) && this.gfnIsNull(CD_TRADE)){
        		this.btnUse.set_text(Yn_Use + "처리");
        	} else {
        		this.btnUse.set_text("미사용처리");
        	}
        	this.tbbHistory.set_enable(!this.gfnIsNull(CD_TRADE) && !this.gfnIsNull(ISSUE_ID));
        	this.btnTaxView.set_enable(!this.gfnIsNull(ISSUE_ID));
        	this.btnUse.set_enable(!this.gfnIsNull(ISSUE_ID) && this.gfnIsNull(CD_TRADE));
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ctclDT_FROM.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.ctclDT_TO.addEventHandler("onchanged",this.fnSearchInit,this);
            this.dsSearch.addEventHandler("oncolumnchanged",this.dsSearch_oncolumnchanged,this);
        };
        this.loadIncludeScript("DHA_BILL_SELECT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
