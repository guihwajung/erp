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
            this.set_titletext("계정별부가세조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_BUYVAT_ACCOUNT_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DHXPR_VAT_TY_VATPROOF</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SALEBUY\" type=\"STRING\" size=\"256\"/><Column id=\"YN_VATAPPR\" type=\"STRING\" size=\"256\"/><Column id=\"TY_VATPROOF\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_SELFACNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TY_SALEBUY\">I</Col><Col id=\"TY_VATPROOF\"/><Col id=\"YN_VATAPPR\">A</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SALEBUY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">I</Col><Col id=\"DS_CODE\">매입</Col></Row><Row><Col id=\"CD_CODE\">O</Col><Col id=\"DS_CODE\">매출</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_VATAPPR", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">A</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">이체</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">미이체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_VATPROOF", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">A</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">승인</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">미승인</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_SELFACNT","ccfCD_CORP:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("세무단위");
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_SELFACNT","staCD_DEPT_SELFACNT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_ACNT","ccfCD_DEPT_SELFACNT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("귀속부서");
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_ACNT","staCD_DEPT_ACNT:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_FROM","ccfCD_DEPT_ACNT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("증빙기간");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","staDT_FROM:0.0","10.0","115","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_FROM00","ctclDT_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","staDT_FROM00:0.0","10.0","115","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_SALEBUY","0.0","staCD_CORP:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("매입/매출");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("crdoTY_SALEBUY","staTY_SALEBUY:0.0","staCD_CORP:10.0","110","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_innerdataset("dsTY_SALEBUY");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_direction("vertical");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_ACCOUNT","ccfCD_CORP:0.0","staCD_CORP:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("계정코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACCOUNT","staCD_ACCOUNT:0.0","staCD_CORP:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("13");
            obj.getSetter("CodeFindName").set("DHX_CFACNT_SLIP_AND_TRIAL");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_VATPROOF","ccfCD_ACCOUNT:0.0","staCD_CORP:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("증빙구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfTY_VATPROOF","staTY_VATPROOF:0.0","staCD_CORP:10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_VATAPPR","ccfTY_VATPROOF:0.0","staCD_CORP:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("승인구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboYN_VATAPPR","staYN_VATAPPR:0.0","staCD_CORP:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_innerdataset("dsYN_VATAPPR");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("전체");
            obj.set_value("A");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_DEPT_SELFACNT.form.CDTextBox","value","dsSearch","CD_DEPT_SELFACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_DEPT_ACNT.form.CDTextBox","value","dsSearch","CD_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.crdoTY_SALEBUY","value","dsSearch","TY_SALEBUY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_ACCOUNT.form.CDTextBox","value","dsSearch","CD_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfTY_VATPROOF.form.CDTextBox","value","dsSearch","TY_VATPROOF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccboYN_VATAPPR","value","dsSearch","YN_VATAPPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHV_BUYVATACCOUNT.xfdl", function() {
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
        	//this.fnSetCombo();

        	var today = this.gfnGetDate();

        	this.dsSearch.setColumn(0, "DT_FROM", this.gfnGetFirstDate(today));
        	this.dsSearch.setColumn(0, "DT_TO", today);

        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);

        	this.dsSearch.setColumn(0, "CD_DEPT_SELFACNT", this.UserInfo.CD_DEPT_SELFACNT);
        	if (!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT_SELFACNT")))
        		this.ccfCD_DEPT_SELFACNT.form.fnCodeFindLoad();

        // 	this.dsSearch.setColumn(0, "CD_DEPT_ACNT", this.UserInfo.LEVCD_DEPT_ACNT_DOWN);
        // 	this.divSearch.form.ccfCD_DEPT_ACNT.form.fnCodeFindLoad();
        //
        //
        // 	if(!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT_ACNT")) && !this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT_SELFACNT"))
        // 	&& !this.gfnIsNull(this.dsSearch.getColumn(0, "DT_FROM")) && !this.gfnIsNull(this.dsSearch.getColumn(0, "DT_TO")))
        // 	{
        // 		this.FormBtns.Select.click();
        // 	}

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
        	//this.btnInsertVat   = this.gfnFormButtonAdd("btnInsertVat", "fnInsertVat");
        	//this.btnUpdateVat   = this.gfnFormButtonAdd("btnUpdateVat", "fnUpdateVat");
        	this.btnDetailVat   = this.gfnFormButtonAdd("btnDetailVat", "fnDetailVat");
        	this.btnSlipDetail  = this.gfnFormButtonAdd("btnSlipDetail", "fnSlipDetail");

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;	// 법인코드
        	this.ccfCD_ACCOUNT = this.divSearch.form.ccfCD_ACCOUNT;
        	this.ccfCD_DEPT_ACNT = this.divSearch.form.ccfCD_DEPT_ACNT;
        	this.ccfCD_DEPT_SELFACNT = this.divSearch.form.ccfCD_DEPT_SELFACNT;
        	this.ccfTY_VATPROOF = this.divSearch.form.ccfTY_VATPROOF;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {


        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_DEPT_SELFACNT.CodeFindName = "DHX_CFSELFACNT_MULTI"; //"DHX_CFSELFACNT";
        	this.ccfCD_DEPT_SELFACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT_SELFACNT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_DEPT_ACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACCOUNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfTY_VATPROOF.CodeFindName = "DHX_COMMON_CODEFIND_SELECT_MULTI";
        	this.ccfTY_VATPROOF.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfTY_VATPROOF.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHV_BUYVATACCOUNT");
        	this.gfnGridColumnColor(this.dxGrid, "DS_DEPT_ACNT","BACK_Soke", "DS_DEPT_ACNT == '소계'", true);
        	this.gfnGridColumnColor(this.dxGrid, "DS_DEPT_ACNT","BACK_ChongKe", "DS_DEPT_ACNT == '총계'", true);

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("PARAM", "string");

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSelect.addColumn("DT_FROM", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
        	this.dsSelect.addColumn("TY_SALEBUY", "string");
        	this.dsSelect.addColumn("YN_VATAPPR", "string");
        	this.dsSelect.addColumn("CD_PROOF", "string");
        	this.dsSelect.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsSelect.addColumn("CD_ACCOUNT", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");


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
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        	this.dsSelect.setColumn(0, "DT_FROM", this.dsSearch.getColumn(0, "DT_FROM"));
        	this.dsSelect.setColumn(0, "DT_TO", this.dsSearch.getColumn(0, "DT_TO"));
        	this.dsSelect.setColumn(0, "TY_SALEBUY", this.dsSearch.getColumn(0, "TY_SALEBUY"));
        	this.dsSelect.setColumn(0, "YN_VATAPPR", this.dsSearch.getColumn(0, "YN_VATAPPR"));
        	this.dsSelect.setColumn(0, "CD_PROOF", this.dsSearch.getColumn(0, "TY_VATPROOF"));
        	this.dsSelect.setColumn(0, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT_SELFACNT"));
        	this.dsSelect.setColumn(0, "CD_ACCOUNT", this.dsSearch.getColumn(0, "CD_ACCOUNT"));
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));

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
        	//var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
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
        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_DEPT_SELFACNT"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_DEPT_SELFACNT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("세무단위를 입력하세요.", "fnVaidateCallback");
        	}
        // 	else if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_DEPT_ACNT"))) {
        // 		validate = false;
        // 		// Alert후 실행할 처리
        // 		this.fnVaidateCallback = function() {
        // 			this.ccfCD_DEPT_ACNT.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("귀속부서를 입력하세요.", "fnVaidateCallback");
        // 	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0,"DT_FROM")) || this.gfnIsNull(this.dsSearch.getColumn(0,"DT_TO"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctclDT_FROM.setFocus();
        		}
        		this.gfnAlert("증빙기간을 입력하세요.", "fnVaidateCallback");
        	}
        	else if (this.gfnNvl(this.dsSearch.getColumn(0,"DT_FROM"),"").trim().substr(0,4) != this.gfnNvl(this.dsSearch.getColumn(0,"DT_TO"),"").trim().substr(0,4)) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctclDT_FROM.setFocus();
        		}
        		this.gfnAlert("증빙기간의 범위는 같은 기간 중으로 입력하셔야 합니다.", "fnVaidateCallback");
        	}

        	return validate;
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
        	}
        // 	else if(svcID == "combo") {
        // 		if(this.dsTY_VATPROOF.findRow("CD_CODE", this.dsSearch.getColumn(0, "TY_VATPROOF")) < 0)
        // 		{
        // 			this.dsSearch.setColumn(0, "TY_VATPROOF", "AA ");
        // 		}
        // 	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if(id == "ccfCD_CORP"){	// 법인코드
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}else if(id == "ccfCD_DEPT_SELFACNT"){	// 세무단위
        		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			this.gfnAlert("법인코드를 먼저 선택하세요.");
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		//dsUserParam.setColumn(nrow, "LV_DEPT", this.UserInfo.LEVCD_DEPT_ACNT);
        	}else if(id == "ccfCD_DEPT_ACNT"){	// 귀속부서

        		var cdCorp = this.ccfCD_CORP.form.CDTextBox.value;
        		if (!this.gfnIsNull(cdCorp)) {
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");						//전표발행여부
        		dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);					//법인코드
        		dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
         		dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
         		dsUserParam.setColumn(nrow, "GR_SEARCH"     , this.FormInfo.GR_SEARCH);
         		dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER", this.AuthClient.LEVCD_DEPT_UPPER);

        		}else{
        			this.gfnAlert("법인코드는 필수입력 값입니다.");
        			return false;
        		}
        // 		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT_SELFACNT"))){
        // 			this.gfnAlert("세무단위를 먼저 입력해주세요.");
        // 			this.divSearch.form.ccfCD_DEPT_SELFACNT.form.CDTextBox.setFocus();
        //
        // 			return false;
        // 		}
        //
        // 		dsUserParam.setColumn(nrow, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT_SELFACNT"));
        // 		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER", this.UserInfo.LEVCD_DEPT_ACNT);
        	}
        	else if(id == "ccfCD_ACCOUNT"){
        		dsUserParam.setColumn(nrow, "CD_CORP", "D");
        	}
        	else if(id == "ccfTY_VATPROOF"){
        		var tySaleBuy = this.dsSearch.getColumn(0, "TY_SALEBUY");
        		dsUserParam.setColumn(nrow, "DS_ETC1" , "");
        		dsUserParam.setColumn(nrow, "CD_SYSTEM"	, "DH");						//시스템코드
        		//dsUserParam.setColumn(nrow, "CD_TYPE"	, tySaleBuy);					//공통분류코드
        		dsUserParam.setColumn(nrow, "CD_TYPE"	, (tySaleBuy == "I" ? "V10" : "V11"));		//공통분류코드
        	}


        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;

        	switch(id) {

        	case "ccfCD_CORP": // 법인코드
        		this.ccfCD_DEPT_SELFACNT.form.fnCodeFindClear();
        		this.ccfCD_DEPT_ACNT.form.fnCodeFindClear();
        		break;

        	case "ccfCD_DEPT_SELFACNT":	//세무단위
        		//this.ccfCD_DEPT_ACNT.form.fnCodeFindClear();

        		if (arrData.length > 0) {
        			var strCdSelfAcnt = "";
        			var strDsSelfAcnt = "";
        			for(var r = 0; r < arrData.length; r++) {
        				strCdSelfAcnt += arrData[r]["CD_DEPT_SELFACNT"]+",";
        				strDsSelfAcnt += arrData[r]["DS_DEPT_SELFACNT"]+",";
        			}

        			strCdSelfAcnt = strCdSelfAcnt.substr(0,strCdSelfAcnt.length-1);
        			strDsSelfAcnt = strDsSelfAcnt.substr(0,strDsSelfAcnt.length-1);

        			this.ccfCD_DEPT_SELFACNT.form.CDTextBox.set_value(strCdSelfAcnt);
        			this.ccfCD_DEPT_SELFACNT.form.DSTextBox.set_value(strDsSelfAcnt);

        		}
        		break;

        	case "ccfTY_VATPROOF" :
        		if (arrData.length > 0) {
        			var strCdCode = "";
        			var strDsCode = "";
        			for(var r = 0; r < arrData.length; r++) {
        				strCdCode += arrData[r]["CD_CODE"]+",";
        				strDsCode += arrData[r]["DS_CODE"]+",";
        			}

        			strCdCode = strCdCode.substr(0,strCdCode.length-1);
        			strDsCode = strDsCode.substr(0,strDsCode.length-1);

        			this.ccfTY_VATPROOF.form.CDTextBox.set_value(strCdCode);
        			this.ccfTY_VATPROOF.form.DSTextBox.set_value(strDsCode);

        		}
        		break;
        	}
        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.divData_objGrid_oncelldblclick = function(obj,e)
        {
        	if(this.dsList.getColumn(this.dsList.rowposition, "DS_DEPT_ACNT") == "소계" || this.dsList.getColumn(this.dsList.rowposition, "DS_DEPT_ACNT") == "총계")
        	{
        		this.gfnAlert("올바른 데이터를 선택해주세요.");
        		return false;
        	}

        	this.fnDetailVat();
        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        // 		if(e.columnid == "TY_SALEBUY")
        // 		{
        // 			this.fnSetCombo();
        // 		}
        	}
        };

        // 증빙 (사용안함)
        this.fnSetCombo = function()
        {
        	this.dsCombo.clearData();
        	this.dsCombo.addRow();

        	var ty_salebuy = this.dsSearch.getColumn(0, "TY_SALEBUY") + "A";

        	this.dsCombo.setColumn(0, "PARAM", ty_salebuy);

        	var strSvcId    = "combo";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_VATPROOF=combo0";
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

        this.fnVatOpen = function(iud_flag, no_slip, no_vat, yn_direct)
        {
        	var param = {};

        	param.IUD_FLAG = iud_flag;
        	param.NO_VAT = no_vat;
        	param.CD_SLIP = no_slip;
        	param.CD_CORP = this.AuthClient.CD_CORP;
        	param.TY_SALEBUY = this.dsSearch.getColumn(0, "TY_SALEBUY");
        	param.YN_DIRECT = yn_direct;
        	param.VAT_MENU = "Y";
        	param.CD_DEPT = this.dsSearch.getColumn(0, "CD_DEPT_ACNT");
        	param.DS_DEPT = this.ccfCD_DEPT_ACNT.form.DSTextBox.value;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHV_ISSUEVATDLG", "fnVatOpenCallback", param);
        }

        //부가세 팝업 호출
        this.fnCallVatPopup = function ()
        {

        	if(!this.gfnGridIsRow(this.dxGrid)){
        		this.gfnAlert("데이터를 선택하세요.");
        		return;
        	}

        	var CD_SLIP = this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP").trim();	//전표번호
        	var NO_VAT = this.dsList.getColumn(this.dsList.rowposition, "NO_VAT").trim();	//부가세번호
        	if(this.gfnIsNull(CD_SLIP) || this.gfnIsNull(NO_VAT)) {
        		this.gfnAlert("데이터를 선택하세요.");
        		return;
        	}

        	var param = {};
        	param.P_GUBUN    = "VATCONTROL";
        	param.P_CD_SLIP  = this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP");	//전표번호
        	param.P_NO_VAT   = this.dsList.getColumn(this.dsList.rowposition, "NO_VAT");	//부가세번호

        	var sPopupCallBack = "fnVatOpenCallback";

        	this.gfnFormOpenNonAuth("DHA", "DHA_ISSUEVATDLG", sPopupCallBack, param, 550, 620);

        };

        this.fnVatOpenCallback = function(strId, val)
        {
         	if(!this.gfnIsNull(val)) {
        	}
        // 	if(val != false)
        // 	{
        // 		var json = JSON.parse(val);
        // 		if(json.blsSave == true)
        // 		{
        // 			this.FormBtns.Select.click();
        // 		}
        // 	}
        }

        // 입력
        this.fnInsertVat = function()
        {
        	this.fnVatOpen("I",  "", "", "");
        }

        // 부가세 수정
        this.fnUpdateVat = function()
        {
        	if(!this.gfnGridIsRow(this.dxGrid)){
        		this.gfnAlert("데이터를 선택하세요.");
        		return;
        	}
        	var nrow = this.dsList.rowposition;

        	var cd_corp = this.dsList.getColumn(nrow, "CD_CORP");
        	var cd_slip = this.gfnNvl(this.dsList.getColumn(nrow, "CD_SLIP"),"").trim();
        	var no_vat = this.dsList.getColumn(nrow, "NO_VAT");
        	var yn_direct = this.dsList.getColumn(nrow, "YN_DIRECT");


        	this.fnVatOpen("U", cd_slip, no_vat, yn_direct);
        }

        // 부가세 상세조회
        this.fnDetailVat = function()
        {
        	if(!this.gfnGridIsRow(this.dxGrid)){
        		this.gfnAlert("데이터를 선택하세요.");
        		return;
        	}
        	var nrow = this.dsList.rowposition;

        	var cd_corp = this.dsList.getColumn(nrow, "CD_CORP");
        	var cd_slip = this.gfnNvl(this.dsList.getColumn(nrow, "CD_SLIP"),"").trim();
        	var no_vat = this.dsList.getColumn(nrow, "NO_VAT");

        	//this.fnVatOpen("S", cd_slip, no_vat, "");
        	this.fnCallVatPopup();
        }

        // 전표조회
        this.fnSlipDetail = function()
        {
        	if(!this.gfnGridIsRow(this.dxGrid)){
        		this.gfnAlert("데이터를 선택하세요.");
        		return;
        	}

        	var param = {};

        	param.IUD_FLAG = "S";
        	param.CD_TRADE = this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP"),"").replace("-","");
        	param.YN_JUNDO_START = "";

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHA_ISSUESLIP", "fnSlipDetailCallback", param);

        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccfCD_DEPT_SELFACNT.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staCD_DEPT_ACNT.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfCD_DEPT_ACNT.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staDT_FROM.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staDT_FROM00.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.crdoTY_SALEBUY.addEventHandler("onitemchanged",this.divSearch_ccfTY_SALEBUY_onitemchanged,this);
            this.divSearch.form.staCD_ACCOUNT.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfCD_ACCOUNT.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staTY_VATPROOF.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staYN_VATAPPR.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHV_BUYVATACCOUNT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
