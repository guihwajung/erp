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
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DABPR_LOANSALARY_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DABPR_LOANSALARY_UPDATE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DAZPR_COMMONCODE_COMBO2</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DABPR_LOANSALARY_CREATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DABPR_LOANSALARY_DELETE</Col></Row><Row><Col id=\"TARGET\">transfer</Col><Col id=\"SP\">DABPR_LOANSALARY_TRANSFER</Col></Row><Row><Col id=\"TARGET\">slip</Col><Col id=\"SP\">DABPR_LOANSALARY_AUTOSLIP</Col></Row><Row><Col id=\"TARGET\">slipCancel</Col><Col id=\"SP\">DABPR_LOANSALARY_AUTOSLIP_CANCEL</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DABPR_LOANSALARY_INSERT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YM_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"YM_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TY_REPAYMENT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_REPAYMENT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","10",null,"45","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_FROM","0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("기준년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_FROM","94","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_TO","204","10","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","174","10","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","462","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_WF_SchLabelE");
            obj.set_taborder("4");
            obj.set_text("법인");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","776","10","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_REPAYMENT","282","10","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_WF_SchLabelE");
            obj.set_taborder("6");
            obj.set_text("상환구분");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_REPAYMENT","373","10","86","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsTY_REPAYMENT");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_readonly("false");
            obj.set_value("1");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","526","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("8");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("onvaluechanged").set("dsSearch_onvaluechanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","842","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("onvaluechanged").set("dsSearch_onvaluechanged");
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
            obj = new BindItem("item0","divSearch.form.ctclYM_FROM.form.TextBox","value","dsSearch","YM_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclYM_TO.form.TextBox","value","dsSearch","YM_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccboTY_REPAYMENT","value","dsSearch","TY_REPAYMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_HNAME");
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
        this.registerScript("DAB_LOANSALARY.xfdl", function() {
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

        	var sCurrentDate = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "YM_FROM", sCurrentDate.substr(0,6));
        	this.dsSearch.setColumn(0, "YM_TO", sCurrentDate.substr(0,6));
        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);
        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Select.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnCreate        = this.gfnFormButtonAdd("btnCreate"    , "fnCreateSalary"); 	// 자료생성
        	this.btnTransfer      = this.gfnFormButtonAdd("btnTransfer"  , "fnTransferSalary"); // 급여이관
        	this.btnTCancel       = this.gfnFormButtonAdd("btnTCancel"   , "fnTCancel"); 		// 이관취소
        	this.btnIssueSlip     = this.gfnFormButtonAdd("btnIssueSlip" , "fnIssueSlip"); 		// 전표발행
        	this.btnSelectSlip    = this.gfnFormButtonAdd("btnSelectSlip", "fnSelectSlip"); 	// 전표조회
        	this.btnCancelSlip    = this.gfnFormButtonAdd("btnCancelSlip", "fnCancelSlip"); 	// 전표취소
        };
        // 버튼 활성/비활성 공통 처리
        this.fnButtonCheck = function (){
            var nrow = this.dsList.rowposition;
        	var bEnable = (nrow > 0) ? true : false;
        	var bExcute = (this.dsList.getColumn(nrow, "YN_SALARY")== "Y" && this.gfnNvl(this.dsList.getColumn(nrow, "NO_LOANREQUEST"),0) == 0 ) ? true : false;

            this.btnTransfer.set_enable(bEnable && !bExcute);
        	this.btnTCancel.set_enable(bEnable && bExcute);

        	this.btnIssueSlip.set_enable(bEnable && bExcute && this.gfnNvl(this.dsList.getColumn(nrow, "CD_TRADE"), "") == "");
        	this.btnSelectSlip.set_enable(bEnable && bExcute && this.gfnNvl(this.dsList.getColumn(nrow, "CD_TRADE"), "") != "");
        	this.btnCancelSlip.set_enable(bEnable && bExcute && this.gfnNvl(this.dsList.getColumn(nrow, "CD_TRADE"), "") != "");
        };
        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctclYM_FROM = this.divSearch.form.ctclYM_FROM;
        	this.ctclYM_TO = this.divSearch.form.ctclYM_TO;
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {


        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAB_LOANSALARY");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "AfterCDTextChanged";

         	// 전체체크박스 체크/해제 이벤트
         	this.dxGrid.AfterAllCheck = "fnGrid_AfterAllCheck";
        	this.dxGrid.BeforeUserDataSetParam = "fnGridBeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged     = "fnGrid_AfterCDTextChanged";
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("YM_FROM", "string");
        	this.dsSelect.addColumn("YM_TO", "string");
        	this.dsSelect.addColumn("TY_REPAYMENT", "string");

        	this.dsInsert = new Dataset();
        //	this.dsInsert.addColumn("NO_ID", "int");
        	this.dsInsert.addColumn("NO_LOAN", "int");
        	this.dsInsert.addColumn("TY_REPAYMENT", "string");
        	this.dsInsert.addColumn("DT_REPAYMENT", "string");
        //	this.dsInsert.addColumn("NO_SEQ", "int");
        	this.dsInsert.addColumn("AM_LOAN", "bigdecimal");
        	this.dsInsert.addColumn("AM_REPAYMENT", "bigdecimal");
        	this.dsInsert.addColumn("DT_FROM", "string");
        	this.dsInsert.addColumn("DT_TO", "string");
        	this.dsInsert.addColumn("RT_RATE", "bigdecimal");
        	this.dsInsert.addColumn("AM_INTEREST", "bigdecimal");
        	this.dsInsert.addColumn("AM_SUMREPAYMENT", "bigdecimal");
        	this.dsInsert.addColumn("AM_JAN", "bigdecimal");
        // 	this.dsInsert.addColumn("YM_SALARY", "string");
        // 	this.dsInsert.addColumn("SN_SALARY", "int");
        // 	this.dsInsert.addColumn("TY_SALARY", "string");
         	this.dsInsert.addColumn("YN_SALARY", "string");
        	this.dsInsert.addColumn("DS_REM", "string");
        	this.dsInsert.addColumn("NO_LOANREQUEST", "int");
        	this.dsInsert.addColumn("ID_USER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("NO_ID", "int");
        	this.dsUpdate.addColumn("NO_LOAN", "int");
        	this.dsUpdate.addColumn("TY_REPAYMENT", "string");
        	this.dsUpdate.addColumn("DT_REPAYMENT", "string");
        	this.dsUpdate.addColumn("NO_SEQ", "int");
        	this.dsUpdate.addColumn("AM_LOAN", "bigdecimal");
        	this.dsUpdate.addColumn("AM_REPAYMENT", "bigdecimal");
        	this.dsUpdate.addColumn("DT_FROM", "string");
        	this.dsUpdate.addColumn("DT_TO", "string");
        	this.dsUpdate.addColumn("RT_RATE", "bigdecimal");
        	this.dsUpdate.addColumn("AM_INTEREST", "bigdecimal");
        	this.dsUpdate.addColumn("AM_SUMREPAYMENT", "bigdecimal");
        	this.dsUpdate.addColumn("AM_JAN", "bigdecimal");
        	this.dsUpdate.addColumn("YM_SALARY", "string");
        	this.dsUpdate.addColumn("SN_SALARY", "int");
        	this.dsUpdate.addColumn("TY_SALARY", "string");
        	this.dsUpdate.addColumn("YN_SALARY", "string");
        	this.dsUpdate.addColumn("DS_REM", "string");
        	this.dsUpdate.addColumn("NO_LOANREQUEST", "int");
        	this.dsUpdate.addColumn("CD_TRADE", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("NO_ID", "int");
        	this.dsDelete.addColumn("ID_USER", "string");

        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("CD_CORP", "string");
        	this.dsCreate.addColumn("ID_SABUN", "string");
        	this.dsCreate.addColumn("YM_REPAYMENT", "string");

        	this.dsSlips = new Dataset();
        	this.dsSlips.addColumn("TM_SLIP", "string");
        	this.dsSlips.addColumn("NO_ID", "INT");
        	this.dsSlips.addColumn("YN_SLIP", "string");
        	this.dsSlips.addColumn("CD_CORP", "string");
        	this.dsSlips.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "YM_FROM", this.dsSearch.getColumn(0, "YM_FROM"));
        	this.dsSelect.setColumn(0, "YM_TO", this.dsSearch.getColumn(0, "YM_TO"));
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "TY_REPAYMENT", this.dsSearch.getColumn(0, "TY_REPAYMENT"));

        	var strSvcId    = "select";
        	var strSvcType  = "select";
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
        	var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current

        	this.dsList.set_enableevent(false);
        	this.dsList.setColumn(nrow, "YN_SALARY", "N");
        	this.dsList.set_enableevent(true);
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
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();
        	this.dsInsert.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        			    //this.dsInsert.setColumn(nrow, "NO_ID", this.dsList.getColumn(i, "NO_ID"));
        				this.dsInsert.setColumn(nrow, "NO_LOAN", this.dsList.getColumn(i, "NO_LOAN"));
        				this.dsInsert.setColumn(nrow, "TY_REPAYMENT", this.dsList.getColumn(i, "TY_REPAYMENT"));
        				this.dsInsert.setColumn(nrow, "DT_REPAYMENT", this.dsList.getColumn(i, "DT_REPAYMENT"));
        				//this.dsInsert.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsInsert.setColumn(nrow, "AM_LOAN", this.dsList.getColumn(i, "AM_LOAN"));
        				this.dsInsert.setColumn(nrow, "AM_REPAYMENT", this.dsList.getColumn(i, "AM_REPAYMENT"));
        				this.dsInsert.setColumn(nrow, "DT_FROM", this.dsList.getColumn(i, "DT_FROM"));
        				this.dsInsert.setColumn(nrow, "DT_TO", this.dsList.getColumn(i, "DT_TO"));
        				this.dsInsert.setColumn(nrow, "RT_RATE", this.dsList.getColumn(i, "RT_RATE"));
        				this.dsInsert.setColumn(nrow, "AM_INTEREST", this.dsList.getColumn(i, "AM_INTEREST"));
        				this.dsInsert.setColumn(nrow, "AM_SUMREPAYMENT", this.dsList.getColumn(i, "AM_SUMREPAYMENT"));
        				this.dsInsert.setColumn(nrow, "AM_JAN", this.dsList.getColumn(i, "AM_JAN"));
        // 				this.dsInsert.setColumn(nrow, "YM_SALARY", this.dsList.getColumn(i, "YM_SALARY"));
        // 				this.dsInsert.setColumn(nrow, "SN_SALARY", this.dsList.getColumn(i, "SN_SALARY"));
        // 				this.dsInsert.setColumn(nrow, "TY_SALARY", this.dsList.getColumn(i, "TY_SALARY"));
         				this.dsInsert.setColumn(nrow, "YN_SALARY", this.dsList.getColumn(i, "YN_SALARY"));
        				this.dsInsert.setColumn(nrow, "DS_REM", this.dsList.getColumn(i, "DS_REM"));
        				this.dsInsert.setColumn(nrow, "NO_LOANREQUEST", this.dsList.getColumn(i, "NO_LOANREQUEST"));
        				//this.dsInsert.setColumn(nrow, "CD_TRADE", this.dsList.getColumn(i, "CD_TRADE"));
        				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        			    this.dsUpdate.setColumn(nrow, "NO_ID", this.dsList.getColumn(i, "NO_ID"));
        				this.dsUpdate.setColumn(nrow, "NO_LOAN", this.dsList.getColumn(i, "NO_LOAN"));
        				this.dsUpdate.setColumn(nrow, "TY_REPAYMENT", this.dsList.getColumn(i, "TY_REPAYMENT"));
        				this.dsUpdate.setColumn(nrow, "DT_REPAYMENT", this.dsList.getColumn(i, "DT_REPAYMENT"));
        				this.dsUpdate.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsUpdate.setColumn(nrow, "AM_LOAN", this.dsList.getColumn(i, "AM_LOAN"));
        				this.dsUpdate.setColumn(nrow, "AM_REPAYMENT", this.dsList.getColumn(i, "AM_REPAYMENT"));
        				this.dsUpdate.setColumn(nrow, "DT_FROM", this.dsList.getColumn(i, "DT_FROM"));
        				this.dsUpdate.setColumn(nrow, "DT_TO", this.dsList.getColumn(i, "DT_TO"));
        				this.dsUpdate.setColumn(nrow, "RT_RATE", this.dsList.getColumn(i, "RT_RATE"));
        				this.dsUpdate.setColumn(nrow, "AM_INTEREST", this.dsList.getColumn(i, "AM_INTEREST"));
        				this.dsUpdate.setColumn(nrow, "AM_SUMREPAYMENT", this.dsList.getColumn(i, "AM_SUMREPAYMENT"));
        				this.dsUpdate.setColumn(nrow, "AM_JAN", this.dsList.getColumn(i, "AM_JAN"));
        				this.dsUpdate.setColumn(nrow, "YM_SALARY", this.dsList.getColumn(i, "YM_SALARY"));
        				this.dsUpdate.setColumn(nrow, "SN_SALARY", this.dsList.getColumn(i, "SN_SALARY"));
        				this.dsUpdate.setColumn(nrow, "TY_SALARY", this.dsList.getColumn(i, "TY_SALARY"));
        				this.dsUpdate.setColumn(nrow, "YN_SALARY", this.dsList.getColumn(i, "YN_SALARY"));
        				this.dsUpdate.setColumn(nrow, "DS_REM", this.dsList.getColumn(i, "DS_REM"));
        				this.dsUpdate.setColumn(nrow, "NO_LOANREQUEST", this.dsList.getColumn(i, "NO_LOANREQUEST"));
        				this.dsUpdate.setColumn(nrow, "CD_TRADE", this.dsList.getColumn(i, "CD_TRADE"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "NO_ID", this.dsList.getColumn(i, "NO_ID"));
        				this.dsDelete.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0 ) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
        	var outData     = "dsOutput=dsUpdate";
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
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"YM_TO"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctclYM_TO.setFocus();
        		}
        		this.gfnAlert("기준년월을 입력하세요.", "fnVaidateCallback");
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
        	else if(svcID == "save") {
        		if (errorCode == 0) {

        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "combo") {
        		if (errorCode == 0) {
        			// 초기 선택값은 아래 3가지 방법으로 가능
         			this.divSearch.form.ccboTY_REPAYMENT.set_index(0);

        		}
        	}else if(svcID == "slipN")
        	{	if (errorCode == 0) {
        			this.fnIssue("Y");
        		}else {
        			this.gfnAlert(errorMsg);
        		}
        	}else
        	{	if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		}else {
        			this.gfnAlert(errorMsg);
        		}
        	}

        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
            if (id == "ccfID_SABUN") {

        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "CD_DEPT"  , "");
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP"  , "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "");
        		trace(" ccfID_SABUN=>" + this.FormInfo.GR_SEARCH );
        	}
        	return true;
        }

        this.AfterCDTextChanged = function(id, codeFindData) {
        	// 코드,명칭 외 추가 컬럼 처리
        	var arr = codeFindData;
        	if(id == "ccfCD_CORP") {
        		this.ccfID_SABUN.form.fnCodeFindClear();

        	} else if(id == "ccfID_SABUN") {
        		if(arr.length > 0) {
        			this.dsSearch.setColumn(0,"CD_CORP",arr[0]["CD_CORP"]);
        			this.dsSearch.setColumn(0,"DS_CORP",arr[0]["DS_CORP"]);
        			this.dsSearch.setColumn(0,"ID_SABUN",arr[0]["ID_SABUN"]);
        			this.dsSearch.setColumn(0,"DS_HNAME",arr[0]["DS_HNAME"]);

        		}
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        // 셀 수정가능 여부 (반드시 EnterCell에서 처리할것)
        // cell 수정안되는것만 return false 할것
        // 마지막에 return true 해버리면 전체 컬럼 수정가능해져버림
        this.fnGrid_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);
        	var objDs = this.dxGrid.getBindDataset();
        	var flag = this.gfnGetFlag(objDs, row);
        	var changFalg = false;

        	var YM_SALARY = this.gfnNvl(this.dsList.getColumn(row, "YM_SALARY"), "");
        	var YN_SALARY = this.dsList.getColumn(row, "YN_SALARY");
        	var CD_TRADE = this.gfnNvl(this.dsList.getColumn(row, "CD_TRADE"), "");
        	var NO_LOANREQUEST = this.gfnNvl(this.dsList.getColumn(row, "NO_LOANREQUEST"), 0);

        	trace(" YN_SALARY=>" + YN_SALARY);
        	if (colnm == "YN_SALARY")
        	{ if(CD_TRADE == "" && YM_SALARY == "" & NO_LOANREQUEST ==0)
        		{
        			changFalg = true;
        		} else {
        			changFalg = false;
        		}
        	} else if (colnm == "TY_REPAYMENT" || colnm == "DT_REPAYMENT" || colnm == "AM_REPAYMENT" || colnm == "DT_FROM" || colnm == "DT_TO" || colnm == "RT_RATE" || colnm == "AM_INTEREST" || colnm == "DS_REM") {
        		if(CD_TRADE == "" && YN_SALARY == "N")
        		{
        			changFalg = true;
        		} else {
        			changFalg = false;
        		}
        	}
        	if (flag = "I" && colnm == "ID_SABUN" ) changFalg = true;
        	if (colnm =="CHK") changFalg = true;

        	return changFalg;
        }

        this.fnGrid_AfterAllCheck = function(obj, cell, check) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);
        	if(colnm == "CHK") {
        		//trace("fnGrid_AfterAllCheck] " + cell + "," + check);
        	}
        }

        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		obj.oldrow = -1;
        		this.fnButtonCheck();
        	}
        };

        this.fnGridBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	switch(id){
        		case "DAX_LOAN" :
        			dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        			break;
        	}

        	return true;
        }
        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	switch(id) {
        		case "DAX_LOAN":
        			this.dsList.set_enableevent(false);
        			this.dsList.setColumn(this.dsList.rowposition, "ID_SABUN", arr[0]["ID_SABUN"]);
        			this.dsList.setColumn(this.dsList.rowposition, "DS_HNAME", arr[0]["DS_HNAME"]);
        			this.dsList.setColumn(this.dsList.rowposition, "CD_LOAN", arr[0]["CD_LOAN"]);
        			this.dsList.setColumn(this.dsList.rowposition, "NO_LOAN", arr[0]["NO_LOAN"]);
        			this.dsList.setColumn(this.dsList.rowposition, "AM_REPAYMENT", arr[0]["AM_MONTH"]);
        			this.dsList.setColumn(this.dsList.rowposition, "AM_SUMREPAYMENT", arr[0]["AM_SUMREPAYMENT"]+ arr[0]["AM_MONTH"]);
        			this.dsList.setColumn(this.dsList.rowposition, "AM_JAN", arr[0]["AM_JAN"] - arr[0]["AM_MONTH"] );
        			this.dsList.setColumn(this.dsList.rowposition, "AM_LOAN", arr[0]["AM_JAN"]);
        			this.dsList.setColumn(this.dsList.rowposition, "DT_FROM", arr[0]["DT_FROM"]);
        			this.dsList.set_enableevent(true);
        			break;
        		default:
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };
        // 자료생성
        this.fnCreateSalary = function(obj,e)
        {
        	var param = {}
        	param.YM_BASE = this.dsSearch.getColumn(0, "YM_TO");
        	param.CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");
        	param.DS_CORP = this.dsSearch.getColumn(0, "DS_CORP");
        	param.ID_SABUN = this.dsSearch.getColumn(0, "ID_SABUN");
        	param.DS_HNAME = this.dsSearch.getColumn(0, "DS_HNAME");
        	param.TY_FLAG = ( this.gfnNvl(this.dsSearch.getColumn(0, "ID_SABUN"), "") == "" ) ? "" : "S" ;
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAB_LOANSALARY_DLG", "fnCreate_callback", param);
        };

        this.fnCreate_callback = function (svcId, sRtn)
        {
            if (sRtn)
            {
        		this.FormBtns.Select.click();
            }
        };

        // 급여이관
        this.fnTransferSalary = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;
        	var param = {};
        	param.DT_REPAYMENT = this.dsList.getColumn(this.dsList.rowposition, "DT_REPAYMENT");
        	param.CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");
        	param.DS_CORP = this.dsSearch.getColumn(0, "DS_CORP");
        	param.ID_SABUN = this.dsSearch.getColumn(0, "ID_SABUN");
        	param.DS_HNAME = this.dsSearch.getColumn(0, "DS_HNAME");
        	param.TY_FLAG = ( this.gfnNvl(this.dsSearch.getColumn(0, "ID_SABUN"), "") == "" ) ? "" : "S" ;
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAB_LOANTRANSPER_DLG", "fnTransfer_callback",  param);
        };


        this.fnTransfer_callback = function (svcId, sRtn){
        	if (sRtn)	{
        		this.FormBtns.Select.click();
        	}
        }

        // 이관취소
        this.fnTCancel = function(obj,e)
        {
        	if(this.dsList.getCaseCount("CHK == '1' && "+this.ucFlag+" != '#'") == 0){
        		this.gfnAlert("이관취소할 행을 선택하세요.");
        		return false;
        	}
        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, this.ucFlag) != "#" && this.dsList.getColumn(i, "CHK") == 1){
        			if( this.dsList.getColumn(i,"TY_REPAYMENT") != "S" ) {
        				this.gfnAlert("상환구분이 급여상환인 경우만 이관취소 가능합니다.");
        				return false;
        			}
        			if( this.dsList.getColumn(i,"YN_SALARY") != "Y" ) {
        				this.gfnAlert("급여이관 완료 자료만 이관취소 가능합니다.");
        				return false;
        			}
        			if( this.gfnNvl(this.dsList.getColumn(i,"CD_TRADE"),"") !="" ) {
        				this.gfnAlert("이미 전표발행된 자료입니다. 이관취소 할 수 없습니다.");
        				return false;
        			}
        		}
        	}

        	this.gfnConfirm("이관취소 처리 하시겠습니까?", "fnTransferCancel_callback" );

        };

        this.fnTransferCancel_callback = function (svcId, sRtn){
        	if (sRtn)	{
        		this.dsTransferCancel = new Dataset();
        		this.dsTransferCancel.addColumn("TY_WORK", "string");
        		this.dsTransferCancel.addColumn("DT_REPAYMENT", "string");
        		this.dsTransferCancel.addColumn("CD_CORP", "string");
        		this.dsTransferCancel.addColumn("ID_SABUN", "string");
        		this.dsTransferCancel.addColumn("YM_SALARY", "string");
        		this.dsTransferCancel.addColumn("TY_SALARY", "string");
        		this.dsTransferCancel.addColumn("SN_SALARY", "int");
        		this.dsTransferCancel.addColumn("ID_USER", "string");

        		this.dsTransferCancel.clearData();

        		for(var i = 0; i < this.dsList.rowcount; i++) {
        			if(this.dsList.getColumn(i, this.ucFlag) != "#" && this.dsList.getColumn(i, "CHK") == 1){
        				var nrow = this.dsTransferCancel.addRow();
        				this.dsTransferCancel.setColumn(nrow, "TY_WORK", "C");
        				this.dsTransferCancel.setColumn(nrow, "DT_REPAYMENT", this.dsList.getColumn(i, "DT_REPAYMENT"));
        				this.dsTransferCancel.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        				this.dsTransferCancel.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        				this.dsTransferCancel.setColumn(nrow, "YM_SALARY", this.dsList.getColumn(i, "YM_SALARY"));
        				this.dsTransferCancel.setColumn(nrow, "TY_SALARY", this.dsList.getColumn(i, "TY_SALARY"));
        				this.dsTransferCancel.setColumn(nrow, "SN_SALARY", this.dsList.getColumn(i, "SN_SALARY"));
        				this.dsTransferCancel.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			}
        		}


        		if (this.dsTransferCancel.rowcount == 0) return;

        		var strSvcId    = "transfer";
        		var strSvcType  = "savesel";
        		var inProc		= "_dsProc";
        		var inData      = "transfer=dsTransferCancel";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        							callBackFnc);   // 통신방법 정의 [생략가능]
        	}

        }



        // 전표발행
        this.fnIssueSlip = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	if(this.dsList.getCaseCount("CHK == '1' && "+this.ucFlag+" != '#'") == 0){
        		this.gfnAlert("전표발행할 행을 선택하세요.");
        		return false;
        	}

        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, this.ucFlag) != "#" && this.dsList.getColumn(i, "CHK") == 1){
        // 			if( this.dsList.getColumn(i,"TY_REPAYMENT") != "S" ) {
        // 				this.gfnAlert("상환구분이 급여상환인 경우만 전표발행 가능합니다.");
        // 				return false;
        // 			}
        			if( this.gfnNvl(this.dsList.getColumn(i,"CD_TRADE"),"") !="" ) {
        				this.gfnAlert("이미 전표발행된 자료입니다. 전표발행 할 수 없습니다.");
        				return false;
        			}
        		}
        	}

        	this.gfnConfirm("전표발행 처리 하시겠습니까?", "fnIssueSlip_callback" );

        };

        this.fnIssueSlip_callback =  function (svcId, value)
        {
        	if (value)
        	{
        		this.fnIssue("N");
        	}
        }

        // 전표조회
        this.fnSelectSlip = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var NO_SLIP = this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE");

        	if ( this.gfnIsNull(NO_SLIP) ) {
        		this.gfnAlert("발행된 전표가 없습니다.");
        		return false;
        	}

        	var param = {};
        	param.CD_TRADE = NO_SLIP;
        	param.IUD_FLAG = "S";
        	param.strYN_JUNDO_START = "";

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnPopCallBack", param);

        };
        // 전표삭제
        this.fnCancelSlip = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	if(this.dsList.getCaseCount("CHK == '1' && "+this.ucFlag+" != '#'") == 0){
        		this.gfnAlert("전표취소할 행을 선택하세요.");
        		return false;
        	}

        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, this.ucFlag) != "#" && this.dsList.getColumn(i, "CHK") == 1){
        			if(this.gfnIsNull(this.dsList.getColumn(i, "CD_TRADE"))) {
        				this.gfnAlert("발행된 전표가 없습니다.");
        				return false;
        			}
        			if( this.dsList.getColumn(i,"TY_REPAYMENT") != "S" &&  this.gfnNvl(this.dsList.getColumn(i,"NO_LOANREQUEST"), 0) != 0 ) {
        				this.gfnAlert("상환구분이 급여상환이거나 상환청구내역이 아닌 경우만 전표취소 가능합니다.");
        				return false;
        			}
        		}
        	}

        	this.gfnConfirm("전표 취소 하시겠습니까?", "fnCancelSlip_callback" );

        };

        this.fnCancelSlip_callback =  function (svcId, value)
        {
        	if (value)
        	{
        		this.dsCancel = new Dataset();
        		this.dsCancel.addColumn("CD_TRADE", "string");
        		this.dsCancel.addColumn("ID_USER", "string");

        		this.dsCancel.clearData();
        		for (var i=0; i < this.dsList.rowcount; i++) {
        			if (this.dsList.getColumn(i, "CHK") == 1) {
        				var nrow = this.dsCancel.addRow();
        				this.dsCancel.setColumn(nrow, "CD_TRADE", this.dsList.getColumn(i, "CD_TRADE"));
        				this.dsCancel.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			}
        		}

        		if (this.dsCancel.rowcount == 0) return;

        		var strSvcId    = "slipCancel";
        		var strSvcType  = "savesel";
        		var inProc		= "_dsProc";
        		var inData      = "slipCancel=dsCancel";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}
        }

        this.fnIssue = function (slipYn)
        {
        	this.dsSlips.clearData();

        	// 전표발행
        	if (slipYn == "N") {

        		tmSlip = this.AuthClient.ID_USER + this.gfnGetDate("milli");

        		for (var i=0; i < this.dsList.rowcount; i++) {
        			if (this.dsList.getColumn(i, "CHK") == 1) {
        				var nrow = this.dsSlips.addRow();
        				this.dsSlips.setColumn(nrow, "TM_SLIP", tmSlip);
        				this.dsSlips.setColumn(nrow, "NO_ID", this.dsList.getColumn(i, "NO_ID"));
        				this.dsSlips.setColumn(nrow, "YN_SLIP", slipYn);
        				this.dsSlips.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        				this.dsSlips.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			}
        		}

        	// 전표발행후처리
        	} else {
        		var nrow = this.dsSlips.addRow();
        		this.dsSlips.setColumn(nrow, "TM_SLIP", tmSlip);
        		this.dsSlips.setColumn(nrow, "NO_ID", -1);
        		this.dsSlips.setColumn(nrow, "YN_SLIP", slipYn);
        		this.dsSlips.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsSlips.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}

        	if (this.dsSlips.rowcount == 0) return;

        	var strSvcId    = "slip" + slipYn;
        	var strSvcType  = "savesel";
        	var inProc		= "_dsProc";
        	var inData      = "slip=dsSlips";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };



        /************************************************************************
         * 콤보 설정
         ************************************************************************/
        this.fnSetCombo = function() {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("TY_SEL", "string");
        	this.dsCombo.addColumn("CD_PREFIX", "string");
        	this.dsCombo.addColumn("CD_UPPREFIX", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "TY_SEL"     , "A");
        	this.dsCombo.setColumn(0, "CD_PREFIX"  , "LQ");
        	this.dsCombo.setColumn(0, "CD_UPPREFIX", "");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_REPAYMENT=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        }
        this.dsList_oncolumnchanged = function(obj,e)
        {
        	if (e.oldvalue != e.newvalue)
        	{
        		switch(e.columnid){
        		case "AM_REPAYMENT" :
        			var AM_SUMREPAYMENT = this.dsList.getColumn(e.row, "AM_SUMREPAYMENT") - e.oldvalue + e.newvalue ;
        			var AM_JAN = this.dsList.getColumn(e.row, "AM_JAN") + e.oldvalue - e.newvalue ;
        			this.dsList.setColumn(e.row, "AM_SUMREPAYMENT", AM_SUMREPAYMENT);
        			this.dsList.setColumn(e.row, "AM_JAN", AM_JAN);
        			break;
        		case "DT_REPAYMENT" :
        			this.dsList.setColumn(e.row, "DT_TO", e.newvalue);
        			this.fnCalcInterest(e.row);
        			break;
        		case "DT_FROM" :
        			this.fnCalcInterest(e.row);
        			break;
        		case "DT_TO" :
        			this.fnCalcInterest(e.row);
        			break;
        		case "RT_RATE" :
        			this.fnCalcInterest(e.row);
        			break;
        		}
        	}


        };

        this.fnCalcInterest = function (nrow)
        {
        	var QN_ILSU = this.gfnGetDiffDate(this.dsList.getColumn(nrow, "DT_FROM") , this.dsList.getColumn(nrow, "DT_TO"))+1;
        	trace(" QN_ILSU=>" + QN_ILSU);
        	var AM_LOAN = this.dsList.getColumn(nrow, "AM_LOAN");
        	var RT_RATE = this.dsList.getColumn(nrow, "RT_RATE");
        	trace(" AM_LOAN=>" + AM_LOAN);
        	trace(" RT_RATE=>" + RT_RATE);
        	var AM_INTEREST = this.fnGetTrunc(AM_LOAN * RT_RATE/100 * QN_ILSU/365,10) ;
        	this.dsList.setColumn(nrow, "QN_ILSU", QN_ILSU);
        	this.dsList.setColumn(nrow, "AM_INTEREST", AM_INTEREST);
        };

        this.fnGetTrunc = function(amVal, vCnt){
        	var returnVal = this.gfnNvl(amVal, 0);
        	if(returnVal > 0){
        		returnVal = Math.floor(amVal/vCnt) * vCnt;
        	}
        	return returnVal;
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccboTY_REPAYMENT.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAB_LOANSALARY.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
