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
            this.set_titletext("입금내역등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DLCPR_TRADEDETAIL_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DLCPR_TRADEDETAIL_UPDATE</Col></Row><Row><Col id=\"TARGET\">sunapTrans</Col><Col id=\"SP\">DLCPR_INCOME_Batch</Col></Row><Row><Col id=\"TARGET\">transCancel</Col><Col id=\"SP\">DLCPR_INCOME_CANCEL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TRADE_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TRADE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BANK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BANK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_OWNER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("사업지코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNTUNIT","staCD_ACNTUNIT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DLX_CFLEASESITE_CODEFIND");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_TRADE_FR","ccfCD_ACNTUNIT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("tclDT_TRADE_FR","staDT_TRADE_FR:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_TRADE_TO","tclDT_TRADE_FR:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("tclDT_TRADE_TO","staDT_TRADE_TO:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_GUJA","0.0","staCD_ACNTUNIT:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("계좌코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfCD_GUJA","staCD_GUJA:0.0","staCD_ACNTUNIT:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("4");
            obj.getSetter("CodeFindName").set("DRX_CFACCOUNT_CASHIN");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_GUJA","cfCD_GUJA:0.0","staCD_ACNTUNIT:10.0","119","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_BANK","ctxtDS_GUJA:0.0","staCD_ACNTUNIT:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_BANK","ctxtCD_BANK:0.0","staCD_ACNTUNIT:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_GUJA","ctxtDS_BANK:0.0","staCD_ACNTUNIT:10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_OWNER","ctxtNO_GUJA:0.0","staCD_ACNTUNIT:10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_ACNTUNIT.form.CDTextBox","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_ACNTUNIT.form.DSTextBox","value","dsSearch","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.tclDT_TRADE_FR","value","dsSearch","DT_TRADE_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.tclDT_TRADE_TO","value","dsSearch","DT_TRADE_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cfCD_GUJA.form.CDTextBox","value","dsSearch","CD_GUJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cfCD_GUJA.form.DSTextBox","value","dsSearch","TY_GUJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ctxtDS_GUJA","value","dsSearch","DS_GUJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ctxtCD_BANK","value","dsSearch","CD_BANK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ctxtDS_BANK","value","dsSearch","DS_BANK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.ctxtNO_GUJA","value","dsSearch","NO_GUJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.ctxtDS_OWNER","value","dsSearch","DS_OWNER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DLC_TRADEDETAIL.xfdl", function() {
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
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        // 	this.FormBtns.Add.set_enable(false);
        // 	this.FormBtns.Save.set_enable(false);
        // 	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btnClassifyInput = this.gfnFormButtonAdd("btnClassifyInput", "fnClassifyInput", "거래내역 입력");
        	//this.btnClassifyDelete = this.gfnFormButtonAdd("btnClassifyDelete", "fnClassifyDelete", "거래내역 삭제");
        	this.btnSunapTrans = this.gfnFormButtonAdd("btnSunapTrans", "fnSunapTrans", "수납이관");
        	this.btnTransCancel = this.gfnFormButtonAdd("btnTransCancel", "fnTransCancel", "이관취소");
        	//this.btnAllClear = this.gfnFormButtonAdd("btnAllClear", "fnAllClear", "거래내역 일괄삭제");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {



        	this.tclDT_TRADE_FR   = this.divSearch.form.tclDT_TRADE_FR;	// 수령일자(from)
        	this.tclDT_TRADE_TO   = this.divSearch.form.tclDT_TRADE_TO;	// 수령일자(to)
        	this.ccfCD_ACNTUNIT   = this.divSearch.form.ccfCD_ACNTUNIT;
        	this.cfCD_GUJA        = this.divSearch.form.cfCD_GUJA;

        	this.dxGrid = this.divData.form.objGrid;
        	//this.grSearch = this.FormInfo.GR_SEARCH;		// 권한?
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {




        	this.gfnGridInit(this.dxGrid, this.dsList, "DR", "DRC_TRADEDETAIL");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        	this.ccfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACNTUNIT.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfCD_GUJA.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_GUJA.AfterCDTextChanged = "fnAfterCDTextChanged";


        	var today = this.gfnGetDate();

        	var sDate = today.substr(0,6);

        	this.dsSearch.setColumn(0, "DT_TRADE_FR", this.gfnGetFirstDate(sDate));
        	this.dsSearch.setColumn(0, "DT_TRADE_TO", this.gfnGetLastDate(sDate));

             //this.gfnGridColumnColor(this.dxGrid, "CHK", "BACK_ReadOnly", "TY_INPUT != 'N'");
        	//this.gfnGridColumnColor(this.dxGrid, "CHK", "GRAY", "TY_INPUT != 'Y'");

        	//this.gfnGridColumnColor(this.dxGrid, "", "BACK_ReadOnly", "TY_INPUT=='Y'", true);

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DT_TRADE_FR", "string");
        	this.dsSelect.addColumn("DT_TRADE_TO", "string");
        	this.dsSelect.addColumn("CD_BANK", "string");
        	this.dsSelect.addColumn("NO_ACCOUNT", "string");
        	this.dsSelect.addColumn("CD_GUJA", "string");
        	this.dsSelect.addColumn("TY_GUJA", "string");
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("NO_CHASU", "string");



        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("NO_SEQ", "bigdecimal");
        	this.dsUpdate.addColumn("DT_TRADE", "string");
        	this.dsUpdate.addColumn("CD_BANK", "string");
        	this.dsUpdate.addColumn("TY_CASH", "string");
        	this.dsUpdate.addColumn("NO_ACCOUNT", "string");
        	this.dsUpdate.addColumn("NO_TRADE", "bigdecimal");
        	this.dsUpdate.addColumn("CD_ACNTUNIT", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("NO_CHASU", "string");
        	this.dsUpdate.addColumn("NO_DONG", "string");
        	this.dsUpdate.addColumn("NO_FLOOR", "string");
        	this.dsUpdate.addColumn("NO_HO", "string");
        	this.dsUpdate.addColumn("DS_REMITTER", "string");
        	this.dsUpdate.addColumn("ID_INSERT", "string");
        	this.dsUpdate.addColumn("TY_INPUT", "string");
        	this.dsUpdate.addColumn("AM_TRADE", "bigdecimal");
        	this.dsUpdate.addColumn("NO_CONTRACT", "string");
        	this.dsUpdate.addColumn("CD_GUJA", "string");
        	this.dsUpdate.addColumn("TY_GUJA", "string");

        	this.dsTrans = new Dataset();
        	this.dsTrans.addColumn("CD_ACNTUNIT", "string");
        	this.dsTrans.addColumn("TY_GUBUN", "string");
        	this.dsTrans.addColumn("NO_CHASU", "string");
        	this.dsTrans.addColumn("NO_SEQ", "string");
        	this.dsTrans.addColumn("CD_GUJA", "string");
        	this.dsTrans.addColumn("TY_GUJA", "string");
        	this.dsTrans.addColumn("ID_INSERT", "string");

        	this.dsCancel = new Dataset();
        	this.dsCancel.addColumn("NO_SEQ", "string");
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

        	this.dsSelect.setColumn(0, "DT_TRADE_FR", this.dsSearch.getColumn(0, "DT_TRADE_FR"));
        	this.dsSelect.setColumn(0, "DT_TRADE_TO", this.dsSearch.getColumn(0, "DT_TRADE_TO"));
        	this.dsSelect.setColumn(0, "CD_BANK", this.dsSearch.getColumn(0, "CD_BANK"));
        	this.dsSelect.setColumn(0, "NO_ACCOUNT", this.dsSearch.getColumn(0, "NO_GUJA"));
        	this.dsSelect.setColumn(0, "CD_ACNTUNIT",this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect.setColumn(0, "CD_GUJA", this.dsSearch.getColumn(0, "CD_GUJA"));
        	this.dsSelect.setColumn(0, "TY_GUJA", this.dsSearch.getColumn(0, "TY_GUJA"));

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
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();


        	this.dsUpdate.clearData();


        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsUpdate.setColumn(nrow, "DT_TRADE", this.dsList.getColumn(i, "DT_TRADE"));
        				this.dsUpdate.setColumn(nrow, "CD_BANK", this.dsSearch.getColumn(0, "CD_BANK"));
        				this.dsUpdate.setColumn(nrow, "TY_CASH", this.dsList.getColumn(i, "TY_CASH"));
        				this.dsUpdate.setColumn(nrow, "NO_ACCOUNT", this.dsSearch.getColumn(0, "NO_GUJA"));
        				this.dsUpdate.setColumn(nrow, "NO_TRADE", this.dsList.getColumn(i, "NO_TRADE"));
        				this.dsUpdate.setColumn(nrow, "CD_ACNTUNIT",this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        				this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        				this.dsUpdate.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        				this.dsUpdate.setColumn(nrow, "NO_DONG", this.dsList.getColumn(i, "NO_DONG"));
        				this.dsUpdate.setColumn(nrow, "NO_FLOOR", this.dsList.getColumn(i, "NO_FLOOR"));
        				this.dsUpdate.setColumn(nrow, "NO_HO", this.dsList.getColumn(i, "NO_HO"));
        				this.dsUpdate.setColumn(nrow, "DS_REMITTER", this.dsList.getColumn(i, "DS_REMITTER"));
        				this.dsUpdate.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				this.dsUpdate.setColumn(nrow, "TY_INPUT", this.dsList.getColumn(i, "TY_INPUT"));
        				this.dsUpdate.setColumn(nrow, "AM_TRADE", this.dsList.getColumn(i, "AM_TRADE"));
        				this.dsUpdate.setColumn(nrow, "NO_CONTRACT", this.dsList.getColumn(i, "NO_CONTRACT"));
        				this.dsUpdate.setColumn(nrow, "CD_GUJA", this.dsSearch.getColumn(0, "CD_GUJA"));
        				this.dsUpdate.setColumn(nrow, "TY_GUJA", this.dsSearch.getColumn(0, "TY_GUJA"));
        				break;

        			case "D":
        			break;
        		}
        	}

        	if (this.dsUpdate.rowcount == 0 ) return;

        	var strSvcId    = "update";
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


        	if ( !this.gfnIsNull(this.tclDT_TRADE_FR.value) && !this.gfnIsNull(this.tclDT_TRADE_TO.value) ) {
        		if ( this.tclDT_TRADE_FR.value > this.tclDT_TRADE_TO.value) {
        			this.gfnAlert("조회기간이 잘못 입력 되었습니다.");
        			this.tclDT_TRADE_FR.setFocus();
        			return false;
        		}
        	}

        	if ( this.gfnIsNull(this.tclDT_TRADE_FR.value) || this.gfnIsNull(this.tclDT_TRADE_TO.value) ) {
        		this.gfnAlert("조회기간을 입력하셔야 합니다.");
        		this.tclDT_TRADE_FR.setFocus();
        		return false;
        	}

        	if ( this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) {
        		this.gfnAlert("사업지코드를 입력하셔야 합니다.");
        		this.divSearch.form.ccfCD_ACNTUNIT.form.CDTextBox.setFocus();
        		//this.tclDT_TRADE_FR.setFocus();
        		return false;
        	}

        	if ( this.gfnIsNull(this.dsSearch.getColumn(0, "CD_GUJA"))) {
        		this.gfnAlert("계좌코드를 입력하셔야 합니다.");
        		this.divSearch.form.cfCD_GUJA.form.CDTextBox.setFocus();
        		//this.tclDT_TRADE_FR.setFocus();
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

        	   //var COL_CHK = this.dxGrid.getBindCellIndex("body", "CHK");
        	//	this.dxGrid.setCellProperty("body", COL_CHK, 'edittype', "expr:TY_INPUT == 'Y' ? 'none' : 'checkbox'");
        	 //  this.gfnGridAfterSelect(this.dxGrid);

        	}else if(svcID == "update") {
        		if (errorCode == 0)
        		{

        			this.FormBtns.Select.click();
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}

        	}
        	else if(svcID == "sunapTrans") {
        		if (errorCode == 0)
        		{
        			this.FormBtns.Select.click();
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}

        	else if(svcID == "transCancel") {
        		if (errorCode == 0)
        		{
        			this.FormBtns.Select.click();
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}

        	}

        }




        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {



        	// 법인코드

        		if (id == "ccfCD_ACNTUNIT") {
        // 		dsUserParam.setColumn(nrow, "CD_DEPT"  , this.AuthClient.CD_DEPT);
        // 		dsUserParam.setColumn(nrow, "ID_USER"  , this.AuthClient.ID_USER);
        // 		dsUserParam.setColumn(nrow, "ID_GROUP" , this.FormInfo.ID_GROUP);
        // 		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);

        		dsUserParam.setColumn(nrow, "FLAG", "A");
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "ID_GROUP", this.FormInfo.ID_GROUP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_TOTALCHASU", "");
        	   }

        	   if(id == "cfCD_GUJA"){

        	   dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0,"CD_ACNTUNIT"));
        	   }

        	return true;


        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	if(id == "ccfCD_ACNTUNIT") {
        		var arr = codeFindData;
        		this.cfCD_GUJA.form.fnCodeFindClear();

        		//this.dsSearch.setColumn(0, "CD_GUJA", "");
        		//this.dsSearch.setColumn(0, "TY_GUJA", "");
        		this.dsSearch.setColumn(0, "DS_GUJA", "");
        		this.dsSearch.setColumn(0, "CD_BANK", "");
        		this.dsSearch.setColumn(0, "DS_BANK", "");
        		this.dsSearch.setColumn(0, "NO_GUJA", "");
        		this.dsSearch.setColumn(0, "DS_OWNER", "");
        	}


              if(id == "cfCD_GUJA"){

        	   var arr = codeFindData;
        		if(arr.length > 0 ){
        		    this.dsSearch.setColumn(0, "CD_GUJA", arr[0]["CD_GUJA"]);
        			this.dsSearch.setColumn(0, "TY_GUJA", arr[0]["TY_GUJA"]);
        			this.dsSearch.setColumn(0, "DS_GUJA", arr[0]["DS_GUJA"]);
        			this.dsSearch.setColumn(0, "CD_BANK", arr[0]["CD_BANK"]);
        			this.dsSearch.setColumn(0, "DS_BANK", arr[0]["DS_BANK"]);
        			this.dsSearch.setColumn(0, "NO_GUJA", arr[0]["NO_GUJA"]);
        			this.dsSearch.setColumn(0, "DS_OWNER", arr[0]["DS_OWNER"]);
        		}

        		else {
        		    this.dsSearch.setColumn(0, "CD_GUJA", "");
        			this.dsSearch.setColumn(0, "TY_GUJA", "");
        			this.dsSearch.setColumn(0, "DS_GUJA", "");
        			this.dsSearch.setColumn(0, "CD_BANK", "");
        			this.dsSearch.setColumn(0, "DS_BANK", "");
        			this.dsSearch.setColumn(0, "NO_GUJA", "");
        			this.dsSearch.setColumn(0, "DS_OWNER", "");
        			this.divSearch.form.ctxtDS_GUJA.set_value("");
        			this.divSearch.form.ctxtCD_BANK.set_value("");
        			this.divSearch.form.ctxtDS_BANK.set_value("");
        			this.divSearch.form.ctxtNO_GUJA.set_value("");
        			this.divSearch.form.ctxtDS_OWNER.set_value("");

        		}
        	}



        }

        this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow) {
        	switch(id) {
        	case "DRX_CFSAEDAE_CODEFIND":
        			dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0,"CD_ACNTUNIT"));
        		break;

        	}
        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {

             var arr = codeFindData;
        	 if (id == "DRX_CFSAEDAE_CODEFIND") {
        	    if (arr.length > 0) {
        		    this.dsList.setColumn(this.dsList.rowposition, "NO_DONG", arr[0]["NO_DONG"]);
        			this.dsList.setColumn(this.dsList.rowposition, "NO_FLOOR", arr[0]["NO_FLOOR"]);
        			this.dsList.setColumn(this.dsList.rowposition, "NO_HO", arr[0]["NO_HO"]);

        		}
        	}
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

        this.dsSearch_onvaluechanged = function(obj,e) {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fnSunapTrans = function(obj,e) {

        	if(this.dsList.findRow("CHK", "1") < 0){
        		this.gfnAlert("대상을 선택하시기 바랍니다.");
        		return false;
        	}

        	var chkCnt = 0;
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "CHK") == "1"){
        			chkCnt = chkCnt + 1;
        		}
        	}

        	var msg = "수납이관을 하시겠습니까?";

        	this.gfnConfirm(msg, "fnSunapTrans_callback");
        }

        this.fnSunapTrans_callback = function(strId, val) {
        	if(val == true)
        	{
        	  var seqs ="";
        	     for(var i=0;i < this.dsList.rowcount;i++){
        		  if(this.dsList.getColumn(i, "CHK") == "1"){
        			if(seqs != ""){
        				seqs += ",";
        			}
        			seqs += this.dsList.getColumn(i, "NO_SEQ");
        		}
        	}
        	this.dsTrans.clearData();

        	var nrow = this.dsTrans.addRow();

        	this.dsTrans.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsTrans.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsTrans.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsTrans.setColumn(nrow, "NO_SEQ", seqs);
        	this.dsTrans.setColumn(nrow, "CD_GUJA", this.dsSearch.getColumn(0,"CD_GUJA"));
        	this.dsTrans.setColumn(nrow, "TY_GUJA", this.dsSearch.getColumn(0,"TY_GUJA"));
        	this.dsTrans.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);


        	if (this.dsTrans.rowcount == 0) return;

        	var strSvcId    = "sunapTrans";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "sunapTrans=dsTrans";
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
        }



        this.fnTransCancel = function(obj,e) {

        	if(this.dsList.findRow("CHK", "1") < 0){
        		this.gfnAlert("대상을 선택하시기 바랍니다.");
        		return false;
        	}

        	var chkCnt = 0;
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "CHK") == "1"){
        			chkCnt = chkCnt + 1;
        		}
        	}

        	var msg = "이관취소을 하시겠습니까?";

        	this.gfnConfirm(msg, "fnTransCancel_callback");
        }

        this.fnTransCancel_callback = function(strId, val) {
        	if(val == true)
        	{
        	  var seqs ="";
        	     for(var i=0;i < this.dsList.rowcount;i++){
        		  if(this.dsList.getColumn(i, "CHK") == "1"){
        			if(seqs != ""){
        				seqs += ",";
        			}
        			seqs += this.dsList.getColumn(i, "NO_SEQ");
        		}
        	}
        	this.dsCancel.clearData();

        	var nrow = this.dsCancel.addRow();

            this.dsCancel.setColumn(nrow, "NO_SEQ", seqs);



        	if (this.dsCancel.rowcount == 0) return;

        	var strSvcId    = "transCancel";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "transCancel=dsCancel";
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
        }



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("DLC_TRADEDETAIL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
