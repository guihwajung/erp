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
            this.set_titletext("잔액원장총괄조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">userinfo</Col><Col id=\"SP\">DZZPR_USERINFO_SELECT</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHEPR_VENDOR_SLIP_SELECT1_DSMEC</Col></Row><Row><Col id=\"TARGET\">e_select</Col><Col id=\"SP\">DHEPR_ETC1_SLIP_SELECT_DSMEC</Col></Row><Row><Col id=\"TARGET\">r_select</Col><Col id=\"SP\">DHEPR_REFNO_SLIP_SELECT_DSMEC</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTYPE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">A</Col><Col id=\"VALUE\">거래처</Col></Row><Row><Col id=\"CODE\">B</Col><Col id=\"VALUE\">기타1</Col></Row><Row><Col id=\"CODE\">D</Col><Col id=\"VALUE\">참고번호</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_REF\" type=\"STRING\" size=\"256\"/><Column id=\"TY_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","278","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_ACNT","ccfCD_CORP:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_ACNT","staCD_DEPT_ACNT:0.0","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_FROM","ccfCD_DEPT_ACNT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("회계일자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","staDT_FROM:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_TO","ctclDT_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","staDT_TO:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_FLAG","0.0","staCD_CORP:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("조건선택");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_FLAG","staTY_FLAG:0.0","staCD_CORP:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsTYPE");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_value("A");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_ACNT","cboTY_FLAG:0.0","staCD_CORP:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("계정코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNT","staCD_ACNT:0.0","staCD_CORP:10.0","277","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","ccfCD_ACNT:0.0","staCD_CORP:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("거래처코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtCD_CON","staCD_VENDOR:0.0","staCD_CORP:10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","staCD_VENDOR:0.0","staCD_CORP:10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtTY_VENDOR","ccfCD_VENDOR:0.0","staCD_CORP:10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
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
            obj = new BindItem("item3","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboTY_FLAG","value","dsSearch","TY_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_ACNT.form.CDTextBox","value","dsSearch","CD_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.txtCD_CON","value","dsSearch","NO_REF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.edtTY_VENDOR","value","dsSearch","TY_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.ccfCD_VENDOR.form.DSTextBox","value","dsSearch","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch.form.ccfCD_ACNT.form.DSTextBox","value","dsSearch","DS_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_DEPT_ACNT.form.CDTextBox","value","dsSearch","CD_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ccfCD_DEPT_ACNT.form.DSTextBox","value","dsSearch","DS_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHE_SUPPORTTOTALSLIPSELECT.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.OPEN_FLAG = "N";

        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);

        //	var today = this.gfnGetDate();
        // 	this.ctclDT_FROM.set_value(this.gfnGetFirstDate(today));
        // 	this.ctclDT_TO.set_value(today);
        	var sCurrentDate = this.gfnGetDate();
        	this.ctclDT_FROM.set_value((sCurrentDate.substr(0,4)+"0101"));
        	this.ctclDT_TO.set_value(sCurrentDate);

        	this.dsSearch.setColumn(0, "CD_DEPT_ACNT", this.AuthClient.LEVCD_DEPT_UPPER);
        	this.ccfCD_DEPT_ACNT.form.fnCodeFindLoad();

        	this.fnSetExtendOpen();

        	this.ccfCD_CORP.form.CDTextBox.setFocus();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
         	this.FormBtns.Add.set_enable(false);
         	this.FormBtns.Save.set_enable(false);
         	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnFormButtonGe = this.gfnFormButtonAdd("tbbHistory", "fnTbbHistory", "전표조회");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPT_ACNT = this.divSearch.form.ccfCD_DEPT_ACNT;
        	this.ccfCD_ACNT = this.divSearch.form.ccfCD_ACNT;
        	this.ccfCD_VENDOR = this.divSearch.form.ccfCD_VENDOR;

        	this.cboTY_FLAG = this.divSearch.form.cboTY_FLAG;

        	this.txtCD_CON = this.divSearch.form.txtCD_CON;

        	this.ctclDT_FROM = this.divSearch.form.ctclDT_FROM;
        	this.ctclDT_TO = this.divSearch.form.ctclDT_TO;

        	this.staCD_VENDOR = this.divSearch.form.staCD_VENDOR;

        	this.edtTY_VENDOR = this.divSearch.form.edtTY_VENDOR;


        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHE_SUPPORTTOTALSLIPSELECT");

        	this.dxGrid.addEventHandler("oncelldblclick", this.fnGrid_Celldblclick, this);
        	//this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	this.dxGrid.addEventHandler("onlbuttonup", this.fnGrid_onlbuttonup, this);
        	this.dxGrid.addEventHandler("onlbuttondown", this.fnGrid_onlbuttondown, this);

        	this.ccfCD_DEPT_ACNT.CodeFindName = "DHX_CFACNTUNIT";	// DHX_CFBALANCE_ACNTUNIT
        	this.ccfCD_VENDOR.CodeFindName = "DHX_CFALLVENDOR_CODEFIND";	// DHX_CFNVENDOR_CODEFIND
        	this.ccfCD_ACNT.CodeFindName = "DHX_CFACNT_SLIP_AND_TRIAL";	// DHX_CFACNT_YNVENDOR

        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_DEPT_ACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_VENDOR.AfterCDTextChanged = "fnAfterCDTextChanged";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.set_name("dsSelect");
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSelect.addColumn("DT_FR", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
        	this.dsSelect.addColumn("CD_ACCOUNT", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");

        	this.dsSelect_E = new Dataset();
        	this.dsSelect_E.set_name("dsSelect_E");
        	this.dsSelect_E.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSelect_E.addColumn("DT_FR", "string");
        	this.dsSelect_E.addColumn("DT_TO", "string");
        	this.dsSelect_E.addColumn("CD_ACCOUNT", "string");
        	this.dsSelect_E.addColumn("TY_ETC1" , "string");
        	this.dsSelect_E.addColumn("CD_ETC1" , "string");
        	this.dsSelect_E.addColumn("CD_CORP", "string");

        	this.dsSelect_R = new Dataset();
        	this.dsSelect_R.set_name("dsSelect_R");
        	this.dsSelect_R.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSelect_R.addColumn("DT_FR", "string");
        	this.dsSelect_R.addColumn("DT_TO", "string");
        	this.dsSelect_R.addColumn("CD_ACCOUNT", "string");
        	this.dsSelect_R.addColumn("NO_REF" , "string");
        	this.dsSelect_R.addColumn("CD_CORP", "string");

        	this.dsSum = new Dataset();
        	this.dsSum.addColumn("ROW", "int");
        	this.dsSum.addColumn("COLUNM", "string");
        	this.dsSum.addColumn("AM_ACCOUNT", "bigdecimal");
        	//this.fnGetUserInfo();
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

        	var TY_FLAG = this.dsSearch.getColumn(0, "TY_FLAG");

        	var objDs = (TY_FLAG == "A")? this.dsSelect : (TY_FLAG == "B")? this.dsSelect_E : this.dsSelect_R;
        	objDs.clearData();

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	var nRow = objDs.addRow();
        	objDs.setColumn(nRow, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        	objDs.setColumn(nRow, "DT_FR", this.dsSearch.getColumn(0, "DT_FROM"));
        	objDs.setColumn(nRow, "DT_TO", this.dsSearch.getColumn(0, "DT_TO"));
        	objDs.setColumn(nRow, "CD_ACCOUNT", this.dsSearch.getColumn(0, "CD_ACCOUNT"));
        	objDs.setColumn(nRow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));

        	if(TY_FLAG == "A") {
        		strSvcId    = "select";
        		inData      = "select="+objDs.name;
        		outData     = "dsList=select0";

        		objDs.setColumn(nRow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));

        	}else if(TY_FLAG == "B") {
        		strSvcId    = "e_select";
        		inData      = "e_select="+objDs.name;
        		outData     = "dsList=e_select0";

        		objDs.setColumn(nRow, "TY_ETC1", this.dsSearch.getColumn(0, "TY_VENDOR"));
        		objDs.setColumn(nRow, "CD_ETC1", this.dsSearch.getColumn(0, "CD_VENDOR"));

        	}else if(TY_FLAG == "D") {
        		strSvcId    = "r_select";
        		inData      = "r_select="+objDs.name;
        		outData     = "dsList=r_select0";

        		objDs.setColumn(nRow, "NO_REF", this.dsSearch.getColumn(0, "NO_REF"));
        	}

        	//거래처일경우 거래처 코드파인더 참고번호일겨우 텍스트 박스
        	//this.dsSelect.setColumn(nRow, "CD_CON", (this.cboTY_FLAG.value == "D" ? this.txtCD_CON.value : this.ccfCD_CON.form.CDTextBox.value) );

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

        	this.dsReportParam = new Dataset();
        	this.dsReportParam.addColumn("CD_CORP", "string");
        	this.dsReportParam.addColumn("DS_CORP", "string");
        	this.dsReportParam.addColumn("DT_FROM", "string");
        	this.dsReportParam.addColumn("DT_TO", "string");
        	this.dsReportParam.addColumn("CD_VENDOR", "string");
        	this.dsReportParam.addColumn("DS_VENDOR", "string");
        	this.dsReportParam.addColumn("CD_ACCOUNT", "string");
        	this.dsReportParam.addColumn("DS_ACCOUNT", "string");
        	this.dsReportParam.addColumn("CD_DEPT_ACNT", "string");
        	this.dsReportParam.addColumn("DS_DEPT_ACNT", "string");
        	this.dsReportParam.addColumn("DT_TERM", "string");

        	this.dsReportParam.clearData();
        	this.dsReportParam.addRow();

        	var CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");
        	var DS_CORP = this.dsSearch.getColumn(0, "DS_CORP");
        	var DT_FROM = this.dsSearch.getColumn(0, "DT_FROM");
        	var DT_TO = this.dsSearch.getColumn(0, "DT_TO");
        	var CD_ACCOUNT = this.dsSearch.getColumn(0, "CD_ACCOUNT");
        	var DS_ACCOUNT = this.dsSearch.getColumn(0, "DS_ACCOUNT");
        	var CD_VENDOR = this.dsSearch.getColumn(0, "CD_VENDOR");
        	var DS_VENDOR = this.dsSearch.getColumn(0, "DS_VENDOR");

        	DT_FROM = this.gfnNvl(DT_FROM, "20160101");
        	DT_TO = this.gfnNvl(DT_TO, "99991231");

        	var DT_FR_FROMAT = DT_FROM.substr(0,4) + "년 " + DT_FROM.substr(4,2)+"월 " + DT_FROM.substr(6,2) +"일";
        	var DT_TO_FROMAT = DT_TO.substr(0,4) + "년 " + DT_TO.substr(4,2)+"월 " + DT_TO.substr(6,2) +"일";
        	var CD_DEPT_ACNT = this.dsSearch.getColumn(0, "CD_DEPT_ACNT");
        	var DS_DEPT_ACNT = this.dsSearch.getColumn(0, "DS_DEPT_ACNT");

        	this.dsReportParam.setColumn(0, "CD_CORP", CD_CORP);
        	this.dsReportParam.setColumn(0, "DS_CORP", DS_CORP);
        	this.dsReportParam.setColumn(0, "CD_ACCOUNT", CD_ACCOUNT);
        	this.dsReportParam.setColumn(0, "DS_ACCOUNT", DS_ACCOUNT);
        	this.dsReportParam.setColumn(0, "CD_VENDOR", CD_VENDOR);
        	this.dsReportParam.setColumn(0, "DS_VENDOR", DS_VENDOR);
        	this.dsReportParam.setColumn(0, "DT_FROM", DT_FROM);
        	this.dsReportParam.setColumn(0, "DT_TO", DT_TO);
        	this.dsReportParam.setColumn(0, "DT_TERM", ("기 간 : " + DT_FR_FROMAT + " ~ " + DT_TO_FROMAT));
        	this.dsReportParam.setColumn(0, "CD_DEPT_ACNT", CD_DEPT_ACNT);
        	this.dsReportParam.setColumn(0, "DS_DEPT_ACNT", DS_DEPT_ACNT);

        	var TY_FLAG = this.dsSearch.getColumn(0, "TY_FLAG");

        	var objDs = (TY_FLAG == "A")? this.dsSelect : (TY_FLAG == "B")? this.dsSelect_E : this.dsSelect_R;
        	objDs.clearData();

        	var nRow = objDs.addRow();
        	objDs.setColumn(nRow, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        	objDs.setColumn(nRow, "DT_FR", this.dsSearch.getColumn(0, "DT_FROM"));
        	objDs.setColumn(nRow, "DT_TO", this.dsSearch.getColumn(0, "DT_TO"));
        	objDs.setColumn(nRow, "CD_ACCOUNT", this.dsSearch.getColumn(0, "CD_ACCOUNT"));
        	objDs.setColumn(nRow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	var inData      = "select=dsSelect";
        	if(TY_FLAG == "A") {
        		inData      = "select="+objDs.name;
        		objDs.setColumn(nRow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        	}else if(TY_FLAG == "B") {
        		inData      = "e_select="+objDs.name;
        		objDs.setColumn(nRow, "TY_ETC1", this.dsSearch.getColumn(0, "TY_VENDOR"));
        		objDs.setColumn(nRow, "CD_ETC1", this.dsSearch.getColumn(0, "CD_VENDOR"));

        	}else if(TY_FLAG == "D") {
        		inData      = "r_select="+objDs.name;
        		objDs.setColumn(nRow, "NO_REF", this.dsSearch.getColumn(0, "NO_REF"));
        	}

        	var inProc		= "_dsProc";
        	var inParam 	= "params=dsReportParam";
        	var reportpath  = "/dh/dhe/DHE_SUPPORTTOTALSLIPSELECT.ozr";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        	return false;
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {


        // trace("1->" + this.ccfCD_CORP.form.CDTextBox.value);
        // trace("2->" + this.dsSearch.getColumn(0,"CD_CORP"));


        	if (
        		this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT_ACNT")) && this.gfnIsNull(this.dsSearch.getColumn(0, "DT_FROM"))
        		&& this.gfnIsNull(this.dsSearch.getColumn(0, "CD_VENDOR")) && this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACCOUNT"))
        	)
        	{
        		this.gfnAlert("[귀속부서/회계일자/거래처/계정코드] 중 한개 이상의 값을 입력하세요.");
        		return false;
        	}

        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value))
        	{
        		this.gfnAlert("법인코드를 입력 하세요.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.ccfCD_DEPT_ACNT.form.CDTextBox.text))
        	{
        		this.gfnAlert("귀속부서를 입력 하세요.");
        		this.ccfCD_DEPT_ACNT.form.CDTextBox.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.ctclDT_FROM.value) || this.gfnIsNull(this.ctclDT_TO.value) )
        	{
        // 		this.gfnAlert("기간을 입력 하세요.");
        // 		this.ctclDT_FROM.setFocus();
        // 		return false;
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
        		this.fnAmRemCalc();
        	}
        	else if (svcID == "e_select")
        	{
        		this.fnSetButton();
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.fnAmRemCalc();
        	}
        	else if (svcID == "r_select")
        	{
        		this.fnSetButton();
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.fnAmRemCalc();
        	}
        }

        //잔액계산
        this.fnAmRemCalc = function ()
        {
        	this.dsList.set_enableevent(false);
        	var nSum = 0;
        	for(var i=0;i<this.dsList.rowcount;i++){
        		var AmDr = nexacro.toNumber(this.dsList.getColumn(i, "AM_DR"),0);
        		var AmCr = nexacro.toNumber(this.dsList.getColumn(i, "AM_CR"),0);

        		if(this.dsList.getColumn(i, "CD_ACCOUNT") != this.dsList.getColumn(i-1, "CD_ACCOUNT")){
        			nSum = 0;
        		}
        		if(this.dsList.getColumn(i, "TY_DCO") == "D"){	//차변일 경우
        			//nSum = nSum + (AmDr - AmCr);
        			nSum = nSum + (AmDr - AmCr);
        		}else{
        			//nSum = nSum - (AmDr + AmCr);
        			nSum = nSum + (AmCr - AmDr);
        		}
        		this.dsList.setColumn(i , "AM_REM", nSum);

        	}
        	this.dsList.set_enableevent(true);
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var sCdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        	if (id == "ccfCD_CORP")
        	{
        		//var LEVLV_DEPT_ACNT = this.dsUserInfo.getColumn(this.dsUserInfo.rowposition, "LEVLV_DEPT_ACNT");
        		//var LEVCD_DEPT_ACNT = this.dsUserInfo.getColumn(this.dsUserInfo.rowposition, "LEVCD_DEPT_ACNT");
        		//dsUserParam.setColumn(nrow, "LEVLV_DEPT", LEVLV_DEPT_ACNT);
        		//dsUserParam.setColumn(nrow, "LEVCD_DEPT", LEVCD_DEPT_ACNT);
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}
        	else if (id == "ccfCD_DEPT_ACNT") {
        		var cdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			this.gfnAlert("법인코드를 선택하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "");						//전표발행여부
        		dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);					//법인코드
        		dsUserParam.setColumn(nrow, "YN_USE"		, "");						//사용여부
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        		dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER", this.AuthClient.LEVCD_DEPT_UPPER);
        		//dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        		//dsUserParam.setColumn(nrow, "GR_SEARCH"     , this.FormInfo.GR_SEARCH);
        		//dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);

        // 		var LV_3 = this.dsUserInfo.getColumn(this.dsUserInfo.rowposition, "LV_3");
        // 		var LEVCD_DEPT_ACNT = this.dsUserInfo.getColumn(this.dsUserInfo.rowposition, "LEVCD_DEPT_ACNT");
        // 		dsUserParam.setColumn(nrow, "LEVEL"		, LV_3);	//법인코드
        // 		dsUserParam.setColumn(nrow, "ACNTUNIT"		, LEVCD_DEPT_ACNT);	//법인코드
        // 		dsUserParam.setColumn(nrow, "CD_CORP"		, this.ccfCD_CORP.form.CDTextBox.value);	//법인코드
        	}else if (id == "ccfCD_ACNT") {
        		if(!this.gfnIsNull(sCdCorp)){
        			dsUserParam.setColumn(nrow, "CD_CORP", sCdCorp);
        		}else{
        			this.gfnAlert("법인코드는 필수입력 값입니다.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP", "");
        	}

        	if (id == "ccfCD_VENDOR") {
        		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			this.gfnAlert("법인코드는 필수입력 값입니다.");
        			return false;
        		}

        		if (this.gfnIsNull(this.cboTY_FLAG.value)) {
        			this.gfnAlert("거래처구분을 먼저 선택하세요");
        			return false;
        		}

        		//dsUserParam.setColumn(nrow, "TY_FLAG", this.cboTY_FLAG.value);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	}
        	return true;

        };

        this.fnAfterCDTextChanged = function(id, codeFindData)
        {
        	var arrData = codeFindData;
        	switch(id) {
        		case "ccfCD_CORP":	//법인코드
        			this.ccfCD_DEPT_ACNT.form.fnCodeFindClear();
        			this.ccfCD_VENDOR.form.fnCodeFindClear();

        			this.ccfCD_DEPT_ACNT.form.CDTextBox.setFocus();
        			break;

        		case "ccfCD_VENDOR":	// 거래처
        			this.dsSearch.setColumn(0, "TY_VENDOR"	, arrData[0]["TY_VENDOR"]);
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

        this.fnGrid_Celldblclick = function(obj,e)
        {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	var no_slip = nexacro.replaceAll(this.gfnTrim(this.dsList.getColumn(e.row, "CD_TRADE")),"-","");

        	if(this.gfnIsNull(no_slip))
        	{
        		this.gfnAlert("발행된 전표가 없습니다.");
        		return false;
        	}

        	param.CD_TRADE = no_slip;
        	param.IUD_FLAG = "S";

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);
        };

        this.fnGrid_RowCellChanged = function(obj,e)
        {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	var objDs = obj.getBindDataset();
        	var rows = obj.getSelectedDatasetRows();
        	var sum = 0;
        	var bRet = true;

        	// 공통 > Setting > 그리드정보 에서 셋팅한 내용대로
        	var nGrdSpcRow = this.dsGridSpec.findRow( "DS_FIELD", colnm);
        	var TY_CELLTYPE = this.dsGridSpec.getColumn(nGrdSpcRow, "TY_CELLTYPE");
        	if(TY_CELLTYPE != "TEXT"){
        		for(var i = 0; i < rows.length; i++) {
        			var am = objDs.getColumn(rows[i], colnm);

        			bRet = isNaN(am); // 문자:true, 숫자:false

        			if(bRet == true){
        				break;
        			}

        			if(!this.gfnIsNull(am)) {
        				sum += nexacro.toNumber(am, 0);
        			}
        		}
        	}

        	// 숫자면 합계표시, 문자면 null
        	var textSummary = (bRet && TY_CELLTYPE == "TEXT") ? "" : this.gfnAppendComma(sum);
        	var colDSummary = obj.getBindCellIndex("body", "DT_ACCOUNT");
        	obj.setCellProperty("summ", colDSummary, "text", textSummary);
        }

        /************************************************************************
         * 로우 drag&drop 합계 구하기
         ************************************************************************/

        this.fnGrid_onlbuttondown = function(obj,e)
        {
        		this.IsCtrl = true;

        	//trace("fnGrid_onlbuttondown: "+ this.IsDrag);
        };

        this.fnGrid_onlbuttonup = function(obj,e)
        {
            var colnm = this._gfnGridGetBindColumnNameByIndex(obj, e.cell);
            if(this.IsCtrl == true) {
        	   // trace("fnGrid_onlbuttonup: "+ this.IsDrag);
        		var nStartrow = obj.selectstartrow;
        		var nEndrow = obj.selectendrow;
        		var nStartCol = obj.selectstartcol;
        		var nEndCol = obj.selectendcol;
        		//trace("nStartrow=" +nStartrow+ ", nEndrow=" +nEndrow+", nStartCol=" +nStartCol+", nEndCol=" +nEndCol );
        		var nLoopCnt = nStartrow.length;

        		if(nStartCol == -1 && nEndCol == -1)
        			{
        				var objDs    = this.objects[obj.binddataset];

        				nStartCol = 0;
        				nEndCol = objDs.colcount-1;
        			}

        		this.dsSum.clearData();
        		this.fnSumInit();
        		this.fnSumCellPro();
        		for(var k=0; k < nLoopCnt; k++)
        		{
        			for (var i = nStartrow[k]; i <= nEndrow[k]; i++)
        			{
        				for (var j = nStartCol[k]; j <= nEndCol[k]; j++)
        				{
        				 // trace("i="+ i + " ,j= "+j + " ,k= "+k+"am_account= "+ this.dsList.getColumn(i, rowColumn));

        				  var rowColumn = this._gfnGridGetBindColumnNameByIndex(obj, j);
        				  if (nexacro.toNumber(this.dsList.getColumn(i, rowColumn)) != 0 &&
        					 (rowColumn == "AM_DR" || rowColumn == "AM_CR" || rowColumn == "AM_EXEC_DR" || rowColumn == "AM_EXEC_CR" || rowColumn == "AM_LOCAL_DR" || rowColumn == "AM_LOCAL_CR" )) {
        					  var nRow = this.dsSum.addRow();
        					  this.dsSum.setColumn(nRow, "ROW", i);
        					  this.dsSum.setColumn(nRow, "COLUNM", rowColumn);
        					  this.dsSum.setColumn(nRow, "AM_ACCOUNT", nexacro.toNumber(this.dsList.getColumn(i, rowColumn)));
        					}
        				}
        			}
        		};

        		//trace(this.dsSum.saveXML());
        		if (this.dsSum.rowcount == 0) return;
        		this.gf_distincDsFilter(this.dsSum, "ROW,COLUNM"); // 중복자료 삭제
        		var amDr = this.dsSum.getCaseSum("COLUNM == 'AM_DR'", "AM_ACCOUNT");
        		var amCr = this.dsSum.getCaseSum("COLUNM == 'AM_CR'", "AM_ACCOUNT");
        		var amExecDr = this.dsSum.getCaseSum("COLUNM == 'AM_EXEC_DR'", "AM_ACCOUNT")*100;
        		var amExecCr = this.dsSum.getCaseSum("COLUNM == 'AM_EXEC_CR'", "AM_ACCOUNT")*100;
        		var amLocalDr = this.dsSum.getCaseSum("COLUNM == 'AM_LOCAL_DR'", "AM_ACCOUNT")*100;
        		var amLocalCr = this.dsSum.getCaseSum("COLUNM == 'AM_LOCAL_CR'", "AM_ACCOUNT")*100;

        		this.amSum = amDr - amCr;
        		this.amExec = nexacro.floor(amExecDr - amExecCr);
        		this.amLocal = nexacro.floor(amLocalDr - amLocalCr);
        		//trace("amSum="+ this.amSum + ", amExec = "+ this.amExec+ ", amLocal= "+ this.amLocal );

        		this.fnSumCellPro();
        		//this.fnSumInit();

        	} else {
        		this.fnSumInit();
        	}
        };

        this.gf_distincDsFilter = function(objDs, sColID)
        {
        	var arrArgs	= sColID.split(",");
        	var sFilterExpr		= "";
        	var sFindRowExpr	= "";

        	for (var i=0; i<arrArgs.length; i++)
        	{
        		if (objDs.getColumnInfo(arrArgs[i]) == null) continue;

        		sFindRowExpr	+= (sFindRowExpr) ? " && " : "";
        		sFindRowExpr	+= "" + arrArgs[i] + "=='\" + " + arrArgs[i] + " + \"'";
        	}

        	if (sFindRowExpr) {
        		sFilterExpr	= "rowidx==dataset.findRowExpr(\"" + sFindRowExpr + "\")";
        	}
        	objDs.filter(sFilterExpr);
        };

        this.fnSumInit = function(){
        	this.amSum = 0;
        	this.amExec = 0;
        	this.amLocal = 0;
        }

        this.fnSumCellPro = function(){
        	if (this.amSum != 0) {
        		this.amSum = nexacro.floor(this.amSum)
        		var textSummary = this.gfnAppendComma(this.amSum);
        		this.dxGrid.setCellProperty("summ", this.dxGrid.getBindCellIndex("body", "DT_ACCOUNT"), "text", textSummary);
        	} else {
        		this.dxGrid.setCellProperty("summ", this.dxGrid.getBindCellIndex("body", "DT_ACCOUNT"), "text", "");
        	}

        	if (this.amExec != 0) {
        		this.amExec = nexacro.floor(this.amExec)/100
        		var textSummary = this.gfnAppendComma(this.amExec);
        		this.dxGrid.setCellProperty("summ", this.dxGrid.getBindCellIndex("body", "AM_EXEC_DR"), "text", textSummary);
        	} else {
        		this.dxGrid.setCellProperty("summ", this.dxGrid.getBindCellIndex("body", "AM_EXEC_DR"), "text", "");
        	}

        	if (this.amLocal != 0) {
        		this.amLocal = nexacro.floor(this.amLocal)/100
        		var textSummary = this.gfnAppendComma(this.amLocal);
        		this.dxGrid.setCellProperty("summ", this.dxGrid.getBindCellIndex("body", "AM_LOCAL_DR"), "text", textSummary);
        	} else {
        		this.dxGrid.setCellProperty("summ", this.dxGrid.getBindCellIndex("body", "AM_LOCAL_DR"), "text", "");
        	}
        }
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

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        }

        this.divSearch_cboTY_FLAG_onitemchanged = function(obj,e)
        {
        	this.fnSearchInit();
        	this.ccfCD_VENDOR.form.fnCodeFindClear();
        	this.txtCD_CON.set_value("");
        	this.edtTY_VENDOR.set_value("");

        	if(e.postvalue == "D")
        	{
        		this.ccfCD_VENDOR.set_visible(false);
        		this.txtCD_CON.set_visible(true);
        		this.staCD_VENDOR.set_text("참고번호");
        		this.ccfCD_ACNT.CodeFindName = "DHX_CFACNT_SLIP_AND_TRIAL";	// DHX_CFACNT_YNREFNO

        	}
        	else
        	{
        		this.ccfCD_VENDOR.set_visible(true);
        		this.txtCD_CON.set_visible(false);
        		this.staCD_VENDOR.set_text("거래처코드");
        		this.ccfCD_ACNT.CodeFindName = "DHX_CFACNT_SLIP_AND_TRIAL";	// DHX_CFACNT_YNVENDOR
        	}

        	var nCellIdx = this.dxGrid.getBindCellIndex("body", "CD_CODE");
        	this.dxGrid.setCellProperty( "head", nCellIdx, "text", this.staCD_VENDOR.text )
        };

        this.fnSetExtendOpen = function() {

        	this.OPEN_FLAG = this.getOwnerFrame().OPEN_FLAG;

        	this.cboTY_FLAG.set_index(0);

        	if(this.OPEN_FLAG == "Y") {
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.getOwnerFrame().CD_CORP);
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.getOwnerFrame().DS_CORP);
        		this.ccfCD_DEPT_ACNT.form.CDTextBox.set_value(this.getOwnerFrame().CD_DEPT_ACNT);
        		this.ccfCD_DEPT_ACNT.form.DSTextBox.set_value(this.getOwnerFrame().DS_DEPT_ACNT);
        		this.ctclDT_FROM.set_value(this.getOwnerFrame().DT_FR);
        		this.ctclDT_TO.set_value(this.getOwnerFrame().DT_TO);
        		this.ccfCD_ACNT.form.CDTextBox.set_value(this.getOwnerFrame().CD_ACCOUNT);
        		this.ccfCD_ACNT.form.DSTextBox.set_value(this.getOwnerFrame().DS_ACCOUNT);

        		this.cboTY_FLAG.set_value("D");	//참고번호로 셋팅

        		this.ccfCD_VENDOR.set_visible(false);
        		this.txtCD_CON.set_visible(true);
        		this.staCD_VENDOR.set_text("참고번호");

        		this.txtCD_CON.set_value(this.gfnTrim(this.getOwnerFrame().NO_REF));

        // 		if(this.getOwnerFrame().CD_CORP != "" ||  this.getOwnerFrame().DT_FR != "" ||
        // 			this.getOwnerFrame().DT_TO != "" || this.getOwnerFrame().CD_ACCOUNT != "") {
        // 			this.fnSelect();
        // 		}

        		this.FormBtns.Select.click();
        	}
        };

        this.dsSearch_oncolumnchanged = function(obj,e)
        {
        	this.fnSearchInit();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboTY_FLAG.addEventHandler("onitemchanged",this.divSearch_cboTY_FLAG_onitemchanged,this);
            this.dsSearch.addEventHandler("oncolumnchanged",this.dsSearch_oncolumnchanged,this);
        };
        this.loadIncludeScript("DHE_SUPPORTTOTALSLIPSELECT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
