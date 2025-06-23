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
            this.set_titletext("전자세금계산서발행");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_ETAXBUYLIST_SELECT</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHVPR_ETAXBUYLIST_DELETE</Col></Row><Row><Col id=\"TARGET\">eTaxBuy</Col><Col id=\"SP\">DHVPR_ETAXBUYLIST_AR_INSERT</Col></Row><Row><Col id=\"TARGET\">selectTax</Col><Col id=\"SP\">DHXPR_TAX_INFO_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHVPR_ETAXBUYLIST_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_BH\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"CD_DEPT_ACNT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTax", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCorp","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCorp:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_FROM","0.0","staCorp:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("회계일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","staDT_FROM:0.0","staCorp:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_REQ00","ctclDT_FROM:0.0","staCorp:10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","staDT_REQ00:0.0","staCorp:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSTATUS","ctclDT_TO:10","staCorp:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboSTATUS","staSTATUS:0.0","staCorp:10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_ccboSTATUS_innerdataset = new nexacro.NormalDataset("divSearch_form_ccboSTATUS_innerdataset", obj);
            divSearch_form_ccboSTATUS_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">0000</Col><Col id=\"datacolumn\">저장</Col></Row><Row><Col id=\"codecolumn\">1110</Col><Col id=\"datacolumn\">발행중</Col></Row><Row><Col id=\"codecolumn\">1111</Col><Col id=\"datacolumn\">서명완료</Col></Row><Row><Col id=\"codecolumn\">1113</Col><Col id=\"datacolumn\">서명실패</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_ccboSTATUS_innerdataset);
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_BH","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("발행부서");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_BH","staCD_DEPT_BH:0.0","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT2");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","ccfCD_DEPT_BH:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_ACNT","staCD_DEPT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00",null,"0","430","24","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("※ 메일재전송시 그리드상의 이메일을 클릭하고 \"메일재전송\" 버튼을 누르세요");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta00:0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_FROM","value","dsSearch","DT_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_DEPT_ACNT.form.CDTextBox","value","dsSearch","CD_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_DEPT_BH.form.CDTextBox","value","dsSearch","CD_DEPT_BH");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHA_BILL.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetParameter();
        	this.fnSetEvent();

        	this.ccfCD_CORP.setFocus();

        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);

        	var toDay = this.gfnGetDate();
        	//검색조건 기본일자 셋팅
        	this.divSearch.form.ctclDT_FROM.set_value(toDay.substr(0,6) + "01");	//현재년월 1일
        	this.divSearch.form.ctclDT_TO.set_value(this.gfnGetLastDate(toDay));	//현재년월의 월말

        	this.ccboSTATUS.set_index(0);

        	this.dsSearch.setColumn(0, "CD_DEPT_BH", this.AuthClient.LEVCD_DEPT_UPPER);
        	this.ccfCD_DEPT_BH.form.fnCodeFindLoad();

        // 	this.ccfCD_DEPT_BH.form.CDTextBox.set_value(this.AuthClient.CD_DEPT);
        // 	this.ccfCD_DEPT_BH.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);
        // 	if (nexacro.toNumber(this.FormInfo.GR_SEARCH) >= 7) {
        // 		this.staCD_DEPT_BH.set_textDecoration("underline");
        // 	}

        	//trace(" 메일체크 : "+this.gfnIsEmail("hana_jo@smtb.kr"));

        };

        this.fnSetExtendButton = function() {
        	this.btnMailView      = this.gfnFormButtonAdd("MailView", "fnMailView");			//메일전송
        	this.btnTaxView       = this.gfnFormButtonAdd("TaxView", "fnTaxView");				//세금계산서 보기
        	this.btnETaxBuy 	  = this.gfnFormButtonAdd("ETaxBuy", "fnETaxBuy");   			//전자발행
        	this.btnETaxBuyUpdate = this.gfnFormButtonAdd("ETaxBuyUpdate", "fnETaxBuyUpdate"); 	//전자수정발행
        	this.btnSearchSlip    = this.gfnFormButtonAdd("SearchSlip", "fnSearchSlip"); 		//전표조회
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	//조회
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPT_BH = this.divSearch.form.ccfCD_DEPT_BH;
        	this.ccfCD_DEPT_ACNT = this.divSearch.form.ccfCD_DEPT_ACNT;
        	this.ctclDT_FROM = this.divSearch.form.ctclDT_FROM;
        	this.ctclDT_TO = this.divSearch.form.ctclDT_TO;
        	this.ccboSTATUS = this.divSearch.form.ccboSTATUS;
        	this.staCD_DEPT = this.divSearch.form.staCD_DEPT;

        	//그리드
        	this.dxGrid = this.divData.form.objGrid;
        	this.staCD_DEPT_BH = this.divSearch.form.staCD_DEPT_BH;

        	this.TAX_TYPE = "";
        };

        this.fnSetButton = function() {

        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        }

        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT_BH", "string");
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSelect.addColumn("DT_FR", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
        	this.dsSelect.addColumn("STATUS", "string");
        	this.dsSelect.addColumn("CD_SYSTEM", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_VENDOR", "string");
        	this.dsUpdate.addColumn("IP_EMAIL1", "string");
        	this.dsUpdate.addColumn("IP_EMAIL2", "string");
            this.dsUpdate.addColumn("IP_DEPTNAME1", "string");
        	this.dsUpdate.addColumn("ID_USER"  , "string");
        	this.dsUpdate.addColumn("NO_VAT"  , "string");
        	this.dsUpdate.addColumn("IP_MIN"  , "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("NO_VAT", "string");

        	this.dsETaxBuy = new Dataset();
        	this.dsETaxBuy.addColumn("NO_VAT", "string");
        	this.dsETaxBuy.addColumn("ID_INSERT", "string");
        	this.dsETaxBuy.addColumn("ISSUE_ID_OLD", "string");
        	this.dsETaxBuy.addColumn("AMEND_CODE", "string");

        	//세금계산서 조회용 데이터셋
        	this.dsSelectTax = new Dataset();
        	this.dsSelectTax.addColumn("ISSUE_ID"  , "string");
        	this.dsSelectTax.addColumn("TY_SALEBUY", "string");
        }

        this.fnSetEvent = function() {

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHA_BILL");
        	this.dxGrid.set_selecttype("cell");

        	this.dxGrid.addEventHandler("oncelldblclick", this.dxGrid_CellDBClick, this);

        	this.ccfCD_CORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_DEPT_BH.CodeFindName = "DHX_CFACNTUNIT";
        	this.ccfCD_DEPT_BH.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_DEPT_ACNT.CodeFindName = "DHX_CFACNTUNIT";
        	this.ccfCD_DEPT_ACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	//var bVisible = ( this.AuthClient.ID_USER == "ERP1" || this.AuthClient.ID_USER == "KH171216" ) ? true : false;
        	//this.btnETaxBuyUpdate.set_visible(bVisible);
        }

        this.fnCallback = function(svcID, errorCode, errorMsg) {

        	if(svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "delete") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "eTaxBuy"){
        		if (errorCode == 0) {
        			this.gfnAlert("세금계산서가 발행 되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}

        	}else if(svcID == "selectTax"){
        		if (errorCode == 0) {
        			if(this.dsTax.rowcount > 0){

        				if(this.TAX_TYPE == "VIEW"){
        				    var issueId   = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "ISSUE_ID"));
        					var url = this.gfnGetConfig("DH" , "TAX_URL");
        					url = url+"TaxView/view.do?";
        					url += "invseq="+this.dsTax.getColumn(0, "INV_SEQ");
        					url += "&status="+this.dsTax.getColumn(0, "STATUS");
        					url += "&type=dtv3"
        					url += "&issueid="+issueId
        					url += "&aspcode=" +this.dsTax.getColumn(0, "ASP_CODE");
        // 					var url = this.gfnGetConfig("DH" , "TAX_URL");
        // 					url = url+"Tax/TaxView.jsp?";
        // 					url += "invseq="+this.dsTax.getColumn(0, "INV_SEQ");
        // 					url += "&status="+this.dsTax.getColumn(0, "STATUS");
        // 					url += "&burks=" +this.dsTax.getColumn(0, "BUKRS");
        				}else{
        					var selEmail = this.dxGrid.getCellValue(this.dxGrid.currentrow, this.dxGrid.currentcell);

        					var url = this.gfnGetConfig("DH" , "TAX_URL");
        					url = url+"Tax/SndAlarm.jsp?";
        					url += "issueid="+this.dsTax.getColumn(0, "ISSUE_ID");
        					url += "&ArmType=EMA";
        					url += "&email=" +selEmail;
        					url += "&aspcode=" +this.dsTax.getColumn(0, "ASP_CODE");
        				}

        				trace("url :: "+url);
        				window.open(url, "_blank", "width=790,height=570,menubar=no,scrollbars=no,resizable=no,status=no");
        				//window.open(url, "_blank", "width=790,height=600,menubar=no,scrollbars=no,resizable=no,status=no");
        			}else{
        				this.gfnAlert("세금계산서 정보가 없습니다.");
        			}
        		}else{
        			this.gfnAlert(errorMsg);
        		}
        	}

        }

        this.fnSelectValidation = function() {

        	if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.gfnAlert("법인코드를 입력하세요.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}

        	//if (nexacro.toNumber(this.FormInfo.GR_SEARCH) >= 7) {
        		if (this.gfnIsNull(this.ccfCD_DEPT_BH.form.CDTextBox.value)) {
        			validate = false;
        			this.gfnAlert("발행부서를 입력하세요!", "fnVaidateCallback");
        			this.ccfCD_DEPT_BH.form.CDTextBox.setFocus();
        			return false;
        		}
        	//}

        	if(this.gfnIsNull(this.ctclDT_FROM.value)) {
        		this.gfnAlert("회계일자(시작)을 입력하세요.");
        		this.ctclDT_FROM.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(this.ctclDT_TO.value)) {
        		this.gfnAlert("회계일자(종료)을 입력하세요.");
        		this.ctclDT_TO.setFocus();
        		return false;
        	}

        	if(this.gfnGetDiffDate(this.ctclDT_FROM.value, this.ctclDT_TO.value) <= -1){
        		this.gfnAlert("회계일자의 시작일은 종료일보다 작아야 합니다.");
        		this.ctclDT_FROM.setFocus();
        		return false;
        	}
        	return true;
        }

        this.fnSelect = function() {

        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP"	 , this.gfnTrim(this.ccfCD_CORP.form.CDTextBox.value));
        	this.dsSelect.setColumn(0, "CD_DEPT_BH"  , this.gfnTrim(this.ccfCD_DEPT_BH.form.CDTextBox.value));
        	this.dsSelect.setColumn(0, "CD_DEPT_ACNT", this.gfnTrim(this.ccfCD_DEPT_ACNT.form.CDTextBox.value));
        	this.dsSelect.setColumn(0, "DT_FR"		 , this.gfnTrim(this.ctclDT_FROM.value));
        	this.dsSelect.setColumn(0, "DT_TO"		 , this.gfnTrim(this.ctclDT_TO.value));
        	this.dsSelect.setColumn(0, "STATUS" 	 , this.gfnTrim(this.ccboSTATUS.value));
        	this.dsSelect.setColumn(0, "CD_SYSTEM" 	 , this.gfnNvl(this.FormInfo.DS_PARAM, ""));

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
        };

        this.fnAdd = function() {

        };

        this.fnDel = function() {
        	if(this.dsList.getCaseCount("CHK == 1") == 0){
        		this.gfnAlert("데이터를 선택하세요.");
        		return;
        	}

        	if(!this.gfnGridIsRow(this.dxGrid)) return;


        	if(this.dsList.getCaseCount("CHK == 1 && (STATUS !='0000' && STATUS !='1113')") > 0){
        		this.gfnAlert("진행상태가 저장/서명실패인 데이터만 삭제 가능합니다.");
        		return;
        	}

        	this.gfnConfirm("삭제 하시겠습니까?", "fnDelete_callback");

        };

        this.fnDelete_callback = function(strId, val)
        {
        	if(val == true) {

        		var arrNoVat = "";
        		for(var r = 0; r < this.dsList.rowcount; r++) {	//발행상태가 저장인 데이터만 담기
        			if(this.dsList.getColumn(r, "CHK") == 1 && (this.dsList.getColumn(r, "STATUS") == "1113" || this.dsList.getColumn(r, "STATUS") == "0000")){
        				arrNoVat += this.dsList.getColumn(r, "NO_VAT")+",";
        			}
        		}

        		this.dsDelete.clearData();
        		var nRow = this.dsDelete.addRow();

        		//처리할 데이터 담기
        		this.dsDelete.setColumn(nRow, "NO_VAT", arrNoVat.substr(0,arrNoVat.length-1));

        		var strSvcId    = "delete";
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
        	}
        };

        this.fnSave = function() {
        	if (!this.gfValidate()) return;

        	this.dxGrid.updateToDataset();
        	this.dsUpdate.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_VENDOR"   	, this.dsList.getColumn(i, "CD_VENDOR"));		//거래처코드
        				this.dsUpdate.setColumn(nrow, "IP_EMAIL1"   	, this.dsList.getColumn(i, "IP_EMAIL1"));		//거래처이메일
        				this.dsUpdate.setColumn(nrow, "IP_EMAIL2"   	, this.dsList.getColumn(i, "IP_EMAIL2"));		//거래처이메일2
        				this.dsUpdate.setColumn(nrow, "IP_DEPTNAME1"   	, this.dsList.getColumn(i, "IP_DEPTNAME1"));    //거래처담당자명
        				this.dsUpdate.setColumn(nrow, "NO_VAT"   	, this.dsList.getColumn(i, "NO_VAT"));		// 증빙코드
        				this.dsUpdate.setColumn(nrow, "IP_MIN"   	, this.dsList.getColumn(i, "IP_MIN"));		// 종사업자식별코드
        				this.dsUpdate.setColumn(nrow, "ID_USER"     	, this.AuthClient.ID_USER);

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
        };

        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        };

        this.fnPrint = function() {

        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow)
        {
        	var cdCorp = this.ccfCD_CORP.form.CDTextBox.value;
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}

        	if (id == "ccfCD_DEPT_BH" || id == "ccfCD_DEPT_ACNT") {
        		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        			this.gfnAlert("법인코드를 입력하세요!");
        			return false;
        		}

        		var ynSlipAccept = (id == "ccfCD_DEPT_BH") ? "" : "Y";

        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");				// 상위부서
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, ynSlipAccept);	// 전표발행여부
        		dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);			// 법인코드
        		dsUserParam.setColumn(nrow, "YN_USE"		, "Y");				// 사용여부
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");				// 현장/본사여부
        		dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "GR_SEARCH"	    , this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER", this.AuthClient.LEVCD_DEPT_UPPER);

        // 		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER", "0000000");
        // 		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT", "");
        // 		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        // 		dsUserParam.setColumn(nrow, "YN_USE", "Y");
        // 		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT", "");
        // 		dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        // 		dsUserParam.setColumn(nrow, "GR_SEARCH"	    , this.FormInfo.GR_SEARCH);
        // 		dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);
        	}

        // 	if(id == "ccfCD_DEPT_ACNT") {
        // 		var cdCorp = this.ccfCD_CORP.form.CDTextBox.value;
        // 		if(this.gfnIsNull(cdCorp)){
        // 			this.ccfCD_CORP.form.CDTextBox.setFocus();
        // 			this.gfnAlert("법인코드를 먼저 선택하세요.");
        // 			return false;
        // 		}
        //
        // 		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT", "");
        // 		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER", "");
        // 		dsUserParam.setColumn(nrow, "CD_CORP"	   , cdCorp);
        // 		dsUserParam.setColumn(nrow, "YN_USE"	   , "Y");
        // 		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT" , "01");
        // 		dsUserParam.setColumn(nrow, "ID_USER"	   , this.AuthClient.ID_USER);
        // 		dsUserParam.setColumn(nrow, "GR_SEARCH"    , this.FormInfo.GR_SEARCH);
        // 		dsUserParam.setColumn(nrow, "CD_DEPT"	   , this.AuthClient.CD_DEPT);
        // 	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	if(id == "ccfCD_CORP") {
        		this.ccfCD_DEPT_ACNT.form.fnCodeFindClear();
        		this.ccfCD_DEPT_BH.form.fnCodeFindClear();
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.dxGrid_CellDBClick = function(obj,e)
        {
        	var colName = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);

        	if(colName == "CD_TRADE"){
        		this.fnSearchSlip();
        	}

        	if(colName == "ISSUE_ID"){
        		this.fnTaxView();
        	}
        };

        //전자발행
        this.fnETaxBuy = function (obj,e)
        {
        	if(this.dsList.getCaseCount("CHK == 1") == 0){
        		this.gfnAlert("데이터를 선택하세요.");
        		return;
        	}

        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	if(this.dsList.findRowExpr("CHK == 1 && !dataset.parent.gfnIsNull(STATUS) && nx_flag != '#'") > -1){
        		this.gfnAlert("이미 발행한 데이터가 선택 되었습니다.");
        		return;
        	}

        	for(var i=0;i<this.dsList.rowcount;i++){
        		if(this.dsList.getColumn(i, "CHK") == 1 && this.dsList.getColumn(i, this.ucFlag) != "#"){
        			//거래처 구분 : 개인(P), 사업자번호 유효성 체크
        			var tyVendor = this.dsList.getColumn(i, "TY_VENDOR");
        			var noSjc = nexacro.replaceAll(this.gfnTrim(this.gfnNvl(this.dsList.getColumn(i, "NO_SJC"),"")), "-", "");

        			if(!this.gfnIsNull(noSjc)){

        				//개인거래처일 경우
        				/*
        				if(tyVendor == "P" && !this.gfnIsSSN(noSjc)){
        					this.gfnAlert((i + 1) +"열: [사업자번호]가 유효하지 않습니다.");
        					return false;
        				}
        				*/
        				// 5번6번일경우 gfnIsFrnrIdNo 외국인등록번호 체크
        				var sFrnrIdNoChk = noSjc.substr(6, 1);
        				if(tyVendor == "P"){
        					if( sFrnrIdNoChk == "5" || sFrnrIdNoChk == "6"){
        						if(!this.gfnIsFrnrIdNo(noSjc)){
        							this.gfnAlert((i + 1) +"열: [사업자번호]가 유효하지 않습니다.");
        							return false;
        						}
        					}else{
        						if(!this.gfnIsSSN(noSjc)){
        							this.gfnAlert((i + 1) +"열: [사업자번호]가 유효하지 않습니다.");
        							return false;
        						}
        					}
        				}

        				//개인거래처가 아닐경우
        				if(tyVendor != "P" && !this.gfnIsBzIdNo(noSjc)){
        					this.gfnAlert((i + 1) +"열: [사업자번호]가 유효하지 않습니다.");
        					return false;
        				}
        			}
        		}
        	}

        	this.gfnConfirm("전자발행 하시겠습니까?", "fnETaxBuy_callback");
        };

        this.fnETaxBuy_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsETaxBuy.clearData();
        		var nRow = this.dsETaxBuy.addRow();

        		var arrNoVat = "";
        		for(var r = 0; r < this.dsList.rowcount; r++) {	//발행 상태가 없는 데이터만 담는다
        			if(this.dsList.getColumn(r, "CHK") == 1 && this.gfnIsNull(this.dsList.getColumn(r, "STATUS"))){
        				arrNoVat += this.dsList.getColumn(r, "NO_VAT")+",";
        			}
        		}

        		//처리할 데이터 담기
        		this.dsETaxBuy.setColumn(nRow, "NO_VAT" 	  , arrNoVat.substr(0,arrNoVat.length-1));
        		this.dsETaxBuy.setColumn(nRow, "ID_INSERT"    , this.AuthClient.ID_USER);
        		this.dsETaxBuy.setColumn(nRow, "ISSUE_ID_OLD" , "");
        		this.dsETaxBuy.setColumn(nRow, "AMEND_CODE"   , "");

        		var strSvcId    = "eTaxBuy";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "eTaxBuy=dsETaxBuy";
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
        };

        //전자수정발행
        this.fnETaxBuyUpdate = function (obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var cdCorp = this.gfnTrim(this.dsSearch.getColumn(0, "CD_CORP"));
        	var cdTrade = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"));
        	var noVat = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "NO_VAT"));
        	var issueId = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "ISSUE_ID"));

        	var cdVender = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR"));
        	var dsVender = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "DS_VENDOR"));
        	var tyVender = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "TY_VENDOR"));
        	var dsSDaepyo = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "DS_DAEPYO"));
        	var noSjc = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "NO_SJC"));
        	var dsRem = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "DONGHO"));
        	var cdProof = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_PROOF"));

        	var ntsFlag = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "NTS_SEND_FLAG"));

        	if(ntsFlag != "국세청 전송성공"){
        		this.gfnAlert("국세청 전송성공만 수정세금계산서를 발행할수 있습니다.");
        		return false;
        	}

        	if(this.gfnIsNull(noVat)){
        		this.gfnAlert("증빙코드는 필수입니다.");
        		return;
        	}
        	// , CASE AR.NTS_SEND_FLAG WHEN '31' THEN '국세청 전송성공' WHEN '32' THEN '국세청 전송실패' ELSE NULL END NTS_SEND_FLAG

        // 	if(!this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "STATUS"))){
        // 		this.gfnAlert("이미 발행된 데이터 입니다.");
        // 		return;
        // 	}

        	var param = {};
        	param.P_NO_VAT    	= noVat;
        	param.P_CD_CORP 	= cdCorp;
        	param.P_CD_TRADE 	= cdTrade;
        	param.P_ISSUE_ID 	= issueId;

        	param.P_CD_VENDOR 	= cdVender;
        	param.P_DS_VENDOR 	= dsVender;
        	param.P_TY_VENDOR 	= tyVender;
        	param.P_DS_DAEPYO 	= dsSDaepyo;
        	param.P_NO_SJC 		= noSjc;
        	param.P_DS_REM 	= dsRem;
        	param.P_CD_PROOF	= cdProof;

        	var sPopupCallBack = "fnETaxBuyUpdateCallback";

        	this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DHA_BILLDLG", sPopupCallBack, param);
        };

        //전자수정발행 팝업 콜백
        this.fnETaxBuyUpdateCallback = function(svcID, val) {
         	if(!this.gfnIsNull(val)) {	//정상처리 되었으면 재조회 처리
        		this.FormBtns.Select.click();
        	}
        };


        this.fnPopupCallBack = function(svcID, val) {
         	//if(!this.gfnIsNull(val)) {	//정상처리 되었으면 재조회 처리
        		//this.FormBtns.Select.click();
        	//}
        };

        //전표 조회
        this.fnSearchSlip = function (obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	if (this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE")))) {
        		this.gfnAlert("전표번호는 필수입니다.");
        		return;
        	}

        	var param = {};
        	param.IUD_FLAG = "S";
        	param.CD_TRADE = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"));
        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnPopupCallBack", param, this.getOffsetWidth(), this.getOffsetHeight());
        	//this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DHA_ISSUESLIP", "fnPopupCallBack", param, this.getOffsetWidth(), this.getOffsetHeight());

        };

        //세금계산서 보기
        this.fnTaxView = function (obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var issueId   = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "ISSUE_ID"));
        	if(this.gfnIsNull(issueId)){
        		this.gfnAlert("승인번호는 필수입니다.");
        		return;
        	}

        	this.TAX_TYPE = "VIEW";

        	//세금계산서 정보 조회
        	this.fnSelectTax(issueId, "O");
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

        //메일전송
        this.fnMailView = function (obj,e)
        {
        	trace("getCellValue :: "+this.dxGrid.getCellValue(this.dxGrid.currentrow, this.dxGrid.currentcell));

        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	if(this.dsList.findRow(this.ucFlag, "U") > -1) {
        		this.gfnAlert("저장하지 않은 데이터가 존재합니다. 저장 후 처리하세요.");
        		return;
        	}

        	var issueId   = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "ISSUE_ID"));
        	if(this.gfnIsNull(issueId)){
        		this.gfnAlert("승인번호는 필수입니다.");
        		return;
        	}

        	var ipEmail   = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "IP_EMAIL1"));
        	var ipEmail2  = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "IP_EMAIL2"));
        	if(this.gfnIsNull(ipEmail) && this.gfnIsNull(ipEmail2)){
        		this.gfnAlert("거래처 이메일은 필수입니다.");
        		return;
        	}

        	var selEmail = this.gfnTrim(this.dxGrid.getCellValue(this.dxGrid.currentrow, this.dxGrid.currentcell));

        	if(this.gfnIsNull(selEmail)){
        		this.gfnAlert("재전송할 이메일 주소를 선택하세요.");
        		return;
        	}

        	this.gfnConfirm("["+selEmail+"] 메일 주소로 재전송 하시겠습니까?", "fnEmailSend_callback");

        };

        this.fnEmailSend_callback = function(strId, val)
        {
        	if(val == true) {
        		this.TAX_TYPE = "MAIL";

        		var issueId   = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "ISSUE_ID"));

        		//세금계산서 정보 조회
        		this.fnSelectTax(issueId, "O");
        	}
        };


        //그리드 필수 체크
        this.gfValidate = function ()
        {
        	var colEMAIL1 = this.dxGrid.getBindCellIndex("body", "IP_EMAIL1");
        	var colEMAIL2 = this.dxGrid.getBindCellIndex("body", "IP_EMAIL2");
        	var headText1 = this.dxGrid.getCellProperty("head" , colEMAIL1, "text");
        	var headText2 = this.dxGrid.getCellProperty("head" , colEMAIL2, "text");

        	for(var i=0;i<this.dsList.rowcount;i++){
        		if(this.dsList.getColumn(i, this.ucFlag) == "U"){
        			var email1 = this.gfnNvl(this.gfnTrim(this.dsList.getColumn(i, "IP_EMAIL1")),"");
        			var email2 = this.gfnNvl(this.gfnTrim(this.dsList.getColumn(i, "IP_EMAIL2")),"");

        			if(this.gfnIsNull(email1) && this.gfnIsNull(email2)){
        				this.gfnAlert((i + 1) +"열: 사용자이메일은 하나라도 입력해야 합니다.");
        				this.dsList.set_rowposition(i);
        				this.dxGrid.setCellPos(colEMAIL1);
        				return false;
        			}

        // 			if(!this.gfnIsNull(email1)){
        // 				if(!this.gfnIsEmail(email1)){
        // 					this.gfnAlert((i + 1) +"열: ["+headText1+"] 이메일 형식이 아닙니다.");
        // 					this.dsList.set_rowposition(i);
        // 					this.dxGrid.setCellPos(colEMAIL1);
        // 					return false;
        // 				}
        // 			}
        // 			if(!this.gfnIsNull(email2)){
        // 				if(!this.gfnIsEmail(email2)){
        // 					this.gfnAlert((i + 1) +"열: ["+headText2+"] 이메일 형식이 아닙니다.");
        // 					this.dsList.set_rowposition(i);
        // 					this.dxGrid.setCellPos(colEMAIL2);
        // 					return false;
        // 				}
        // 			}
        		}
        	}

        	return true;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccfCD_CORP.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfCD_DEPT_ACNT.addEventHandler("onclick",this.Common_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHA_BILL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
