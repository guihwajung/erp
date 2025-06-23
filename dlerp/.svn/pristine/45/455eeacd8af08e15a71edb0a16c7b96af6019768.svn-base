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
            this.set_titletext("부가세관리(이세로 거래처기준)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_EBILLBUYVAT_CONTROL_SELECT</Col></Row><Row><Col id=\"TARGET\">send</Col><Col id=\"SP\">DHVPR_EBILLBUYVAT_VAT_SEND</Col></Row><Row><Col id=\"TARGET\">cancel</Col><Col id=\"SP\">DHVPR_EBILLBUYVAT_AUTOSLIP_CANCEL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"YY_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"TAX_MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_VATPROOF\" type=\"STRING\" size=\"256\"/><Column id=\"YN_VATAPPR\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SALEBUY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNO_TAX", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">1기예정</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">1기확정</Col></Row><Row><Col id=\"CD_CODE\">3</Col><Col id=\"DS_CODE\">2기예정</Col></Row><Row><Col id=\"CD_CODE\">4</Col><Col id=\"DS_CODE\">2기확정</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTAX_MONTH", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">1월~3월</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">1월</Col></Row><Row><Col id=\"CD_CODE\">3</Col><Col id=\"DS_CODE\">2월</Col></Row><Row><Col id=\"CD_CODE\">4</Col><Col id=\"DS_CODE\">3월</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_VATPROOF", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">0</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">일반세금계산서</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">계산서</Col></Row><Row><Col id=\"CD_CODE\">3</Col><Col id=\"DS_CODE\">영세율</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_VATAPPR", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">A</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">승인</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">미승인</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SALEBUY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">I</Col><Col id=\"DS_CODE\">매입</Col></Row><Row><Col id=\"CD_CODE\">O</Col><Col id=\"DS_CODE\">매출</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","240","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("세무단위");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","sta00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFSELFACNT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYY_WORK","ccfCD_DEPT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("작성년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYY_WORK","staYY_WORK:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYY_WORK00","ctclYY_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("작성기수");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboNO_TAX","staYY_WORK00:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsNO_TAX");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTAX_MONTH","ccboNO_TAX:5","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTAX_MONTH");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_FROM","ccboTAX_MONTH:5","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            obj.set_inputtype("digit");
            obj.set_readonly("true");
            obj.set_text("2020-04-04");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_WORK","ctxtDT_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_TO","staDT_WORK:5","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            obj.set_inputtype("digit");
            obj.set_readonly("true");
            obj.set_text("2020-04-04");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("증빙구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_VATPROOF","sta01:0.0","staCD_CORP:10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_VATPROOF");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","ccfCD_CORP:0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("승인여부");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboYN_VATAPPR","sta02:0.0","staCD_CORP:10.0","61","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_VATAPPR");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta03","ccboYN_VATAPPR:0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("매입/매출");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("crdoTY_SALEBUY","sta03:0.0","staCD_CORP:10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_innerdataset("dsTY_SALEBUY");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_columncount("3");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclYY_WORK.form.TextBox","value","dsSearch","YY_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctxtDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ctxtDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccboTY_VATPROOF","value","dsSearch","TY_VATPROOF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ccboYN_VATAPPR","value","dsSearch","YN_VATAPPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.crdoTY_SALEBUY","value","dsSearch","TY_SALEBUY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccboNO_TAX","value","dsSearch","NO_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccboTAX_MONTH","value","dsSearch","TAX_MONTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
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
        this.registerScript("DHV_EBILLBUYVAT_CONTROL.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "YY_WORK", this.gfnGetDate().substring(0, 4));
        	this.dsSearch.setColumn(0, "NO_TAX", "1");
        	//this.dsSearch.setColumn(0, "TAX_MONTH", "1");
        	this.dsSearch.setColumn(0, "TY_VATPROOF", "0");
        	this.dsSearch.setColumn(0, "YN_VATAPPR", "A");
        	this.dsSearch.setColumn(0, "TY_SALEBUY", "I");

        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);

        	this.dsSearch.setColumn(0, "CD_DEPT", this.UserInfo.CD_DEPT_SELFACNT);
        	if (!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT")))
        		this.ccfCD_DEPT.form.fnCodeFindLoad();
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
        	this.btnSendVat = this.gfnFormButtonAdd("SendVat", "fnSendVat");
        	this.btnUpdateVat = this.gfnFormButtonAdd("UpdateVat", "fnUpdateVat");
        	this.btnDetailVat = this.gfnFormButtonAdd("DetailVat", "fnDetailVat");
        	this.btnSlipDetail = this.gfnFormButtonAdd("SlipDetail", "fnSlipDetail");
        	this.btnEseroSlipDetail = this.gfnFormButtonAdd("EseroSlipDetail", "fnEseroSlipDetail");
        	this.btnEseroUpload = this.gfnFormButtonAdd("EseroUpload", "fnEseroUpload");
        	this.btnIssueSlip = this.gfnFormButtonAdd("IssueSlip", "fnIssueSlip");
        	this.btnCancelSlip = this.gfnFormButtonAdd("CancelSlip", "fnCancelSlip");

        	this.btnUpdateVat.set_enable(false);
        	this.btnDetailVat.set_enable(false);
        	this.btnSlipDetail.set_enable(false);
        	this.btnEseroSlipDetail.set_enable(false);
        	this.btnIssueSlip.set_enable(false);
        	this.btnCancelSlip.set_enable(false);

        	this.btnUpdateVat.set_visible(false);
        	this.btnSendVat.set_visible(false);	//부가세전송
        	this.btnEseroUpload.set_visible(false);	// 이세로자료업로드
        	this.btnIssueSlip.set_visible(false);	// 전표발행
        	this.btnCancelSlip.set_visible(false);	// 전표취소
        	this.btnEseroSlipDetail.set_visible(false);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;
        	this.ctclYY_WORK = this.divSearch.form.ctclYY_WORK;
        	this.ccboNO_TAX = this.divSearch.form.ccboNO_TAX;
        	this.ccboTAX_MONTH = this.divSearch.form.ccboTAX_MONTH;
        	this.ctxtDT_FROM = this.divSearch.form.ctxtDT_FROM;
        	this.ctxtDT_TO = this.divSearch.form.ctxtDT_TO;
        	this.ccboTY_VATPROOF = this.divSearch.form.ccboTY_VATPROOF;
        	this.ccboYN_VATAPPR = this.divSearch.form.ccboYN_VATAPPR;
        	this.crdoTY_SALEBUY = this.divSearch.form.crdoTY_SALEBUY;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHV_EBILLBUYVAT_CONTROL");

         	//this.gfnGridColumnColor(this.dxGrid, "", "BACK_GangJo", "DS_DEPT_ACNT=='(거래처 소계)'", true);
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","DS_DEPT_ACNT"), "text","expr:dataset.getRowLevel(currow) == 1 ? '(거래처 소계)':DS_DEPT_ACNT");
        	//var sExpr = "expr:dataset.getRowLevel(currow) == 1 ? dataset.getColumn(currow+1, 'DS_VENDOR') :DS_VENDOR";
        	//this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","DS_VENDOR"), "text",sExpr);


        	this.dxGrid.addEventHandler("oncelldblclick", this.fnGrid_Celldblclick, this);
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSelect.addColumn("DT_FROM", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
        	this.dsSelect.addColumn("TY_SALEBUY", "string");
        	this.dsSelect.addColumn("YN_VATAPPR", "string");
        	this.dsSelect.addColumn("TY_VATPROOF", "string");

        	this.dsSend = new Dataset();
        	this.dsSend.addColumn("APPR_NO_STR", "string");

        	this.dsCancel = new Dataset();
        	this.dsCancel.addColumn("CD_SLIP", "string");

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
        	if(!this.fnValidate()) return;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsSelect.setColumn(0, "DT_FROM", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_FROM"), "-", ""));
        	this.dsSelect.setColumn(0, "DT_TO",  nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_TO"), "-", ""));
        	this.dsSelect.setColumn(0, "TY_SALEBUY", this.dsSearch.getColumn(0, "TY_SALEBUY"));
        	this.dsSelect.setColumn(0, "YN_VATAPPR", this.dsSearch.getColumn(0, "YN_VATAPPR"));
        	this.dsSelect.setColumn(0, "TY_VATPROOF", this.dsSearch.getColumn(0, "TY_VATPROOF"));

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
        	this.gfnGridDel(this.dxGrid);
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
        this.fnValidate = function() {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_DEPT_SELFACNT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("세무단위를 입력하세요.", "fnVaidateCallback");
        		return false;
        	}
        	else if(this.gfnIsNull(this.dsSearch.getColumn(0, "DT_FROM")) || this.gfnIsNull(this.dsSearch.getColumn(0, "DT_TO"))) {
        		this.fnVaidateCallback = function() {
        			this.ccboNO_TAX.setFocus();
        		}
        		this.gfnAlert("증빙기간을 입력하세요.","fnVaidateCallback");
        		return false;
        	}
        	else if(this.dsSearch.getColumn(0, "DT_FROM").substr(0,4) != this.dsSearch.getColumn(0, "DT_TO").substr(0,4)) {
        		this.fnVaidateCallback = function() {
        			this.ccboNO_TAX.setFocus();
        		}
        		this.gfnAlert("증빙기간의 범위는 같은 회기중으로 입력하셔야 합니다.","fnVaidateCallback");
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

        		this.btnUpdateVat.set_enable(false);
        		this.btnDetailVat.set_enable(false);
        		this.btnSlipDetail.set_enable(false);
        		this.btnEseroSlipDetail.set_enable(false);
        		this.btnIssueSlip.set_enable(false);
        		this.btnCancelSlip.set_enable(false);

        		if (this.dsList.rowcount > 0) {
        			if (this.FormInfo.TY_AUTH != "R") {
        				this.btnUpdateVat.set_enable(true);
        			}
        			this.btnDetailVat.set_enable(true);
        			this.btnSlipDetail.set_enable(true);
        			this.btnEseroSlipDetail.set_enable(true);
        			this.btnIssueSlip.set_enable(true);

        			if (!this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP")))
        				this.btnCancelSlip.set_enable(true);
        		}
        		else {
        			this.gfnAlert("자료가 없습니다. \n\n해당 기수 이세로 파일 업로드 후 조회하시기 바랍니다!\n");
        		}
        	}
        	else if (svcID == "create") {
        		if (errorCode == 0) {
        			this.fnExecute_callback = function() {
        				this.FormBtns.Select.click();
        			}
        			this.gfnAlert("자료생성 작업이 완료되었습니다.", "fnExecute_callback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var cdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        			break;

        		case "ccfCD_DEPT": // 세무단위
        			if (this.gfnIsNull(cdCorp)) {
        				this.gfnAlert("법인코드를 먼저 선택하세요.");
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        				return false;
        			}
        			dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        			break;
        	}
        	return true;
        };

         this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;

        	switch(id) {

        	case "ccfCD_CORP": // 법인코드
        		this.ccfCD_DEPT.form.fnCodeFindClear();

        		break;
        	}
        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_Celldblclick = function(obj,e) {
        	if (this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "NO_VAT"))) return;

        	this.fnVatOpen("S"
        				, nexacro.replaceAll(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP"), "-", "")
        				, this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "NO_VAT"))
        				, "");
        };

        this.fnGrid_RowCellChanged = function(obj,e)
        {
        	if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		if (!this.gfnIsNull(this.dsList.getColumn(e.row, "CD_SLIP")))
        			this.btnSlipDetail.set_enable(true);
        		else
        			this.btnSlipDetail.set_enable(false);

        		if (!this.gfnIsNull(this.dsList.getColumn(e.row, "ESERO_ISSUESLIP"))) {
        			this.btnEseroSlipDetail.set_enable(true);
        			this.btnSlipDetail.set_enable(false);
        		}
        		else
        			this.btnEseroSlipDetail.set_enable(false);

        		if (!this.gfnIsNull(this.dsList.getColumn(e.row, "NO_VAT"))) {
        			this.btnUpdateVat.set_enable(true);
        			this.btnDetailVat.set_enable(true);
        		}
        		else {
        			this.btnUpdateVat.set_enable(false);
        			this.btnDetailVat.set_enable(false);
        		}
        		obj.oldrow = -1;
        	}

        };

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
        			case "TAX_MONTH" :
        				this.fnMonthSetting();
        				break;
        		}
        	}
        };

        //부가세전송
        this.fnSendVat = function(obj,e) {
        	if (this.dsList.rowcount == 0) return;

        	var nRow = this.dsList.findRow("CHK", 1);
        	if (nRow <= 0) {
        		this.gfnAlert("체크된 항목이 없습니다.");
        		return;
        	}

        	this.gfnConfirm("부가세 전송 작업을 하시겠습니까?", "fnSendVat_callBack");
        }

        this.fnSendVat_callBack = function(strId, val) {
        	if (val == false) return;

        	var arrApprNos = [];
        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "CHK") == 1) {
        			arrApprNos.push(this.dsList.getColumn(i, "APPR_NO"));
        		}
        	}

        	this.dsSend.clearData();
        	this.dsSend.addRow();
        	this.dsSend.setColumn(0, "APPR_NO_STR", arrApprNos.join(';'));

        	var strSvcId    = "send";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "send=dsSend";
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

        //부가세수정
        this.fnUpdateVat = function (obj,e) {
        	if (this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "NO_VAT"))) return;

        	this.fnVatOpen("U"
        				, nexacro.replaceAll(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP"), "-", "")
        				, this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "NO_VAT"))
        				, this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "GUBUN")) );
        };

        //부가세상세조회
        this.fnDetailVat = function (obj,e) {
        	if (this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "NO_VAT"))) return;

        	this.fnVatDetail();

        	return;

        	this.fnVatOpen("S"
        				, nexacro.replaceAll(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP"), "-", "")
        				, this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "NO_VAT"))
        				, "");
        };

        //전표조회
        this.fnSlipDetail = function (obj,e) {
        	if (this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP"))) return;

        	this.fnShowIssueSlip();
        };

        //이세로전표조회
        this.fnEseroSlipDetail = function (obj,e) {
        	if (this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP"))) return;

        	this.fnShowIssueSlip();
        };

        //이세로자료업로드
        this.fnEseroUpload = function (obj,e) {
        	var param = {};
        	param.CD_CFSELFACNT = this.dsSearch.getColumn(0, "CD_DEPT");
        	param.DS_CFSELFACNT = this.dsSearch.getColumn(0, "DS_DEPT");
        	param.YM_MAGAM = this.dsSearch.getColumn(0, "YY_WORK");
        	param.NO_TAX = this.dsSearch.getColumn(0, "NO_TAX");
        	param.BUY_GUBUN = this.dsSearch.getColumn(0, "TY_SALEBUY");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHV_EBILLBUYVAT_FILEUP", "", param);
        };

        //전표발행
        this.fnIssueSlip = function (obj,e) {
        	var nRow = this.dsList.findRow("CHK", 1);
        	if (nRow <= 0) {
        		this.gfnAlert("체크된 항목이 없습니다.");
        		return;
        	}

        	var arrApprNos = [];
        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "CHK") == 1) {
        			arrApprNos.push(this.dsList.getColumn(i, "APPR_NO"));
        		}
        	}

        	var param = {};
        	param.APPR_NO = arrApprNos.join(';');
        	param.TY_SALBUY = this.dsSearch.getColumn(0, "TY_SALEBUY");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHV_EBILLBUYVAT_CONTROL_DLG", "", param);
        };

        //전표취소
        this.fnCancelSlip = function (obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) {return false;}

        	this.dsCancel.clearData();
        	this.dsCancel.addRow();
        	this.dsCancel.setColumn(0, "CD_SLIP", nexacro.replaceAll(this.dsList.getColumn(this.dsList.rowposition, "ESERO_ISSUESLIP"), "-", ""));

        	var strSvcId    = "cancel";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "cancel=dsCancel";
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


        //부가세 상세 조회
        this.fnVatDetail = function ()
        {
        	if(!this.gfnGridIsRow(this.dxGrid)){
        		this.gfnAlert("데이터를 선택하세요.");
        		return;
        	}

        	var param = {};
        	param.P_GUBUN    = "VATCONTROL";
        	param.P_CD_SLIP  = this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP");	//전표번호
        	param.P_NO_VAT   = this.dsList.getColumn(this.dsList.rowposition, "NO_VAT");	//부가세번호

        	var sPopupCallBack = "fnVatRegPopupCallback";

        	this.gfnFormOpenNonAuth("DHA", "DHA_ISSUEVATDLG", sPopupCallBack, param, 550, 620);

        };

        //부가세 팝업 콜백
        this.fnVatRegPopupCallback = function(svcID, val) {

         	if(!this.gfnIsNull(val)) {
        	}

        	trace("부가세 콜백 >>> val :: " + val + "******************************************************************************************" );

        };

        this.fnVatOpen = function(iudFlag, noSlip, noVat, ynDirect) {
        	var param = {};
        	param.IUD_FLAG = iudFlag;
        	param.NO_VAT = noVat;
        	param.CD_SLIP = noSlip;
        	param.TY_SALEBUY = this.dsSearch.getColumn(0, "TY_SALEBUY");
        	param.YN_DIRECT = ynDirect;
        	param.CD_CORP = this.AuthClient.CD_CORP;
        	param.VAT_MENU = "Y";
        	param.CD_DEPT = "";
        	param.DS_DEPT = "";

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHV_ISSUEVATDLG", "", param);
        }

        this.fnShowIssueSlip = function() {
        	var cdTrade = "";
        	if (!this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "ESERO_ISSUESLIP"))) {
        		cdTrade = nexacro.replaceAll(this.dsList.getColumn(this.dsList.rowposition, "ESERO_ISSUESLIP"), "-", "").substr(0, 14);
        	}
        	else {
        		cdTrade = nexacro.replaceAll(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP"), "-", "").substr(0, 14);
        	}

        	var param = {};
        	param.IUD_FLAG = "S";
        	param.strYN_JUNDO_START = "";
        	param.CD_TRADE = cdTrade;

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);
        }

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
        				this.dsTAX_MONTH.setColumn(0, "CD_CODE", "1");
        				this.dsTAX_MONTH.setColumn(0, "DS_CODE", "1월~3월");
        				this.dsTAX_MONTH.setColumn(1, "CD_CODE", "2");
        				this.dsTAX_MONTH.setColumn(1, "DS_CODE", "1월");
        				this.dsTAX_MONTH.setColumn(2, "CD_CODE", "3");
        				this.dsTAX_MONTH.setColumn(2, "DS_CODE", "2월");
        				this.dsTAX_MONTH.setColumn(3, "CD_CODE", "4");
        				this.dsTAX_MONTH.setColumn(3, "DS_CODE", "3월");
        				this.dsSearch.setColumn(0, "TAX_MONTH", "1");

        				dtFrom = ymMagam + "-01-01";
        				dtTo = ymMagam + "-03-31";
        				break;
        			case "2" :
        				this.dsTAX_MONTH.setColumn(0, "CD_CODE", "5");
        				this.dsTAX_MONTH.setColumn(0, "DS_CODE", "4월~6월");
        				this.dsTAX_MONTH.setColumn(1, "CD_CODE", "6");
        				this.dsTAX_MONTH.setColumn(1, "DS_CODE", "4월");
        				this.dsTAX_MONTH.setColumn(2, "CD_CODE", "7");
        				this.dsTAX_MONTH.setColumn(2, "DS_CODE", "5월");
        				this.dsTAX_MONTH.setColumn(3, "CD_CODE", "8");
        				this.dsTAX_MONTH.setColumn(3, "DS_CODE", "6월");
        				this.dsSearch.setColumn(0, "TAX_MONTH", "5");

        				dtFrom = ymMagam + "-04-01";
        				dtTo = ymMagam + "-06-30";
        				break;
        			case "3" :
        				this.dsTAX_MONTH.setColumn(0, "CD_CODE", "9");
        				this.dsTAX_MONTH.setColumn(0, "DS_CODE", "7월~9월");
        				this.dsTAX_MONTH.setColumn(1, "CD_CODE", "10");
        				this.dsTAX_MONTH.setColumn(1, "DS_CODE", "7월");
        				this.dsTAX_MONTH.setColumn(2, "CD_CODE", "11");
        				this.dsTAX_MONTH.setColumn(2, "DS_CODE", "8월");
        				this.dsTAX_MONTH.setColumn(3, "CD_CODE", "12");
        				this.dsTAX_MONTH.setColumn(3, "DS_CODE", "9월");
        				this.dsSearch.setColumn(0, "TAX_MONTH", "9");

        				dtFrom = ymMagam + "-07-01";
        				dtTo = ymMagam + "-09-30";
        				break;
        			case "4" :
        				this.dsTAX_MONTH.setColumn(0, "CD_CODE", "13");
        				this.dsTAX_MONTH.setColumn(0, "DS_CODE", "10월~12월");
        				this.dsTAX_MONTH.setColumn(1, "CD_CODE", "14");
        				this.dsTAX_MONTH.setColumn(1, "DS_CODE", "10월");
        				this.dsTAX_MONTH.setColumn(2, "CD_CODE", "15");
        				this.dsTAX_MONTH.setColumn(2, "DS_CODE", "11월");
        				this.dsTAX_MONTH.setColumn(3, "CD_CODE", "16");
        				this.dsTAX_MONTH.setColumn(3, "DS_CODE", "12월");
        				this.dsSearch.setColumn(0, "TAX_MONTH", "13");

        				dtFrom = ymMagam + "-10-01";
        				dtTo = ymMagam + "-12-31";
        				break;
        			default :
        				dtFrom = "";
        				dtTo = "";
        				break;
        		}
        	}

        	this.dsSearch.setColumn(0, "DT_FROM", dtFrom);
        	this.dsSearch.setColumn(0, "DT_TO", dtTo);
        }

        this.fnMonthSetting = function() {
        	var dtFrom;
        	var dtTo;

        	var ymMagam = this.dsSearch.getColumn(0, "YY_WORK");
        	var taxMonth = this.dsSearch.getColumn(0, "TAX_MONTH");

        	if (this.gfnIsNull(ymMagam) || this.gfnIsNull(taxMonth)) {
        		dtFrom = "";
        		dtTo = "";
        	}
        	else {
        		switch(taxMonth) {
        			case "1" :
        				dtFrom = ymMagam + "-01-01";
        				dtTo = ymMagam + "-03-31";
        				break;
        			case "2" :
        				dtFrom = ymMagam + "-01-01";
        				dtTo = ymMagam + "-01-31";
        				break;
        			case "3" :
        				dtFrom = ymMagam + "-02-01";
        				dtTo = ymMagam + "-02-29";
        				break;
        			case "4" :
        				dtFrom = ymMagam + "-03-01";
        				dtTo = ymMagam + "-03-31";
        				break;
        			case "5" :
        				dtFrom = ymMagam + "-04-01";
        				dtTo = ymMagam + "-06-30";
        				break;
        			case "6" :
        				dtFrom = ymMagam + "-04-01";
        				dtTo = ymMagam + "-04-30";
        				break;
        			case "7" :
        				dtFrom = ymMagam + "-05-01";
        				dtTo = ymMagam + "-05-31";
        				break;
        			case "8" :
        				dtFrom = ymMagam + "-06-01";
        				dtTo = ymMagam + "-06-30";
        				break;
        			case "9" :
        				dtFrom = ymMagam + "-07-01";
        				dtTo = ymMagam + "-09-30";
        				break;
        			case "10" :
        				dtFrom = ymMagam + "-07-01";
        				dtTo = ymMagam + "-07-31";
        				break;
        			case "11" :
        				dtFrom = ymMagam + "-08-01";
        				dtTo = ymMagam + "-08-31";
        				break;
        			case "12" :
        				dtFrom = ymMagam + "-09-01";
        				dtTo = ymMagam + "-09-30";
        				break;
        			case "13" :
        				dtFrom = ymMagam + "-10-01";
        				dtTo = ymMagam + "-12-31";
        				break;
        			case "14" :
        				dtFrom = ymMagam + "-10-01";
        				dtTo = ymMagam + "-10-31";
        				break;
        			case "15" :
        				dtFrom = ymMagam + "-11-01";
        				dtTo = ymMagam + "-11-30";
        				break;
        			case "16" :
        				dtFrom = ymMagam + "-12-01";
        				dtTo = ymMagam + "-12-31";
        				break;
        			default :
        				dtFrom = "";
        				dtTo = "";
        				break;
        		}
        	}

        	this.dsSearch.setColumn(0, "DT_FROM", dtFrom);
        	this.dsSearch.setColumn(0, "DT_TO", dtTo);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DWA_SILHENG_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHV_EBILLBUYVAT_CONTROL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
