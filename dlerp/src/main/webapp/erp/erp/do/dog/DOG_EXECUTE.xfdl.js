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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DOGPR_EXECUTE_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DOGPR_EXECUTE_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DOGPR_EXECUTE_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DOGPR_EXECUTE_DELETE</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DOGPR_EXECUTESLIP</Col></Row><Row><Col id=\"TARGET\">cancel</Col><Col id=\"SP\">DOGPR_EXECUTESLIP_CANCEL</Col></Row><Row><Col id=\"SP\">DOGPR_MONTH_MAGAM</Col><Col id=\"TARGET\">exec1</Col></Row><Row><Col id=\"TARGET\">magam</Col><Col id=\"SP\">DOGPR_MAGAM_INFO</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JIPHANG1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"CD_DEPT\"/><Col id=\"DT_JIPHANG1\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMagam", this);
            obj._setContents("<ColumnInfo><Column id=\"YN_MAGAM\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ELAPDOC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ELAPPRGS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ELAPPRGS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListMagam", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("사업지코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","219","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("FitToContents").set("true");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.getSetter("AutoSet").set("false");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE00","ccfCD_SITE:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("집행부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_SITE00:0.0","10.0","219","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DOX_CFPRGBIZFORSAUPBI");
            obj.getSetter("FitToContents").set("true");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ccfCD_DEPT:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("집행월");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclDT_JIPHANG1","sta01:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE01","ctclDT_JIPHANG1:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("마감여부");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtYN_MAGAM","staCD_SITE01:0.0","10.0","30","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE02","edtYN_MAGAM:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("결재번호");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtNO_ELAPDOC","staCD_SITE02:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE03","edtNO_ELAPDOC:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("결재상태");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDS_ELAPPRGS","staCD_SITE03:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE04","edtDS_ELAPPRGS:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("결재상태코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCD_ELAPPRGS","staCD_SITE04:0.0","10.0","0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_JIPHANG1.form.TextBox","value","dsSearch","DT_JIPHANG1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.edtYN_MAGAM","value","dsListMagam","YN_MAGAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.edtNO_ELAPDOC","value","dsListMagam","NO_ELAPDOC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.edtDS_ELAPPRGS","value","dsListMagam","DS_ELAPPRGS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.edtCD_ELAPPRGS","value","dsListMagam","CD_ELAPPRGS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DOG_EXECUTE.xfdl", function() {
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
        	//this.fnMagamInfo();

        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "DT_JIPHANG1", today.substr(0, 6));

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btn1 = this.gfnFormButtonAdd("btnBudChng", "fnBudChng");
        	this.btn2 = this.gfnFormButtonAdd("btnExecSlip", "fnExecSlip");
        	this.btn3 = this.gfnFormButtonAdd("btnExecSlipCncl", "fnExecSlipCncl");
        	this.btn4 = this.gfnFormButtonAdd("btnSlipSearch", "fnSlipSearch");
        	this.btn5 = this.gfnFormButtonAdd("btnProof", "fnProof");
        	this.btn6 = this.gfnFormButtonAdd("btnSapslip","fnSapslip");
        	this.btn7 = this.gfnFormButtonAdd("btnSapslipCncl","fnSapslipCncl");
        	this.btn8 = this.gfnFormButtonAdd("btnMagam","fnMagamYnCheck");
        	this.btn9 = this.gfnFormButtonAdd("btnMagamCncl","fnMagamCnclYnCheckCancel");
        	this.btn10 = this.gfnFormButtonAdd("btnAPP","fnAPP");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;
        	this.ctclDT_JIPHANG1 = this.divSearch.form.ctclDT_JIPHANG1;
        	this.edtYN_MAGAM = this.divSearch.form.edtYN_MAGAM;
        	this.edtNO_ELAPDOC = this.divSearch.form.edtNO_ELAPDOC;
        	this.edtDS_ELAPPRGS = this.divSearch.form.edtDS_ELAPPRGS;
        	this.edtCD_ELAPPRGS = this.divSearch.form.edtCD_ELAPPRGS;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DO", "DOG_EXECUTE");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("DT_JIPHANG1", "string");
        	this.dsSelect.addColumn("DT_JIPHANG2", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_SITE", "string");
        	this.dsInsert.addColumn("CD_DEPT", "string");
        	this.dsInsert.addColumn("CD_ACCOUNT", "string");
        	this.dsInsert.addColumn("CD_SAUPCODE", "string");
        	this.dsInsert.addColumn("DT_JIPHANG", "string");
        	this.dsInsert.addColumn("AM_BUDGET_CONFIRM", "bigdecimal");
        	this.dsInsert.addColumn("AM_ACCOUNT", "bigdecimal");
        	this.dsInsert.addColumn("AM_TAX", "bigdecimal");
        	this.dsInsert.addColumn("CD_VATPROOF", "string");
        	this.dsInsert.addColumn("CD_VENDOR", "string");
        	this.dsInsert.addColumn("CD_PAYCON", "string");
        	this.dsInsert.addColumn("DS_REM", "string");
        	this.dsInsert.addColumn("ID_USER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_SITE", "string");
        	this.dsUpdate.addColumn("CD_DEPT", "string");
        	this.dsUpdate.addColumn("CD_ACCOUNT", "string");
        	this.dsUpdate.addColumn("CD_SAUPCODE", "string");
        	this.dsUpdate.addColumn("NO_SEQ", "int");
        	this.dsUpdate.addColumn("DT_JIPHANG", "string");
        	this.dsUpdate.addColumn("AM_BUDGET_CONFIRM", "bigdecimal");
        	this.dsUpdate.addColumn("AM_ACCOUNT", "bigdecimal");
        	this.dsUpdate.addColumn("AM_TAX", "bigdecimal");
        	this.dsUpdate.addColumn("CD_VATPROOF", "string");
        	this.dsUpdate.addColumn("CD_VENDOR", "string");
        	this.dsUpdate.addColumn("CD_PAYCON", "string");
        	this.dsUpdate.addColumn("DS_REM", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_SITE", "string");
        	this.dsDelete.addColumn("CD_DEPT", "string");
        	this.dsDelete.addColumn("CD_ACCOUNT", "string");
        	this.dsDelete.addColumn("CD_SAUPCODE", "string");
        	this.dsDelete.addColumn("NO_SEQ", "int");
        	this.dsDelete.addColumn("ID_USER", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("CD_SITE", "string");
        	this.dsExec.addColumn("CD_DEPT", "string");
        	this.dsExec.addColumn("CD_ACCOUNT", "string");
        	this.dsExec.addColumn("CD_SAUPCODE", "string");
        	this.dsExec.addColumn("NO_SEQ", "int");
        	this.dsExec.addColumn("ID_USER", "string");

        	this.dsCancel = new Dataset();
        	this.dsCancel.addColumn("CD_SITE", "string");
        	this.dsCancel.addColumn("CD_DEPT", "string");
        	this.dsCancel.addColumn("CD_ACCOUNT", "string");
        	this.dsCancel.addColumn("CD_SAUPCODE", "string");
        	this.dsCancel.addColumn("NO_SEQ", "int");
        	this.dsCancel.addColumn("ID_USER", "string");

        	this.dsExec1 = new Dataset();
        	this.dsExec1.addColumn("CD_SITE", "string");
        	this.dsExec1.addColumn("CD_DEPT", "string");
        	this.dsExec1.addColumn("DT_MONTH", "string");
        	this.dsExec1.addColumn("TY_MAGAM", "string");
        	this.dsExec1.addColumn("ID_USER", "string");

        	this.dsMagam = new Dataset();
        	this.dsMagam.addColumn("CD_SITE", "string");
        	this.dsMagam.addColumn("CD_DEPT", "string");
        	this.dsMagam.addColumn("DT_MONTH", "string");


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

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsSelect.setColumn(0, "DT_JIPHANG1", this.dsSearch.getColumn(0, "DT_JIPHANG1").substr(0,6));
        	this.dsSelect.setColumn(0, "DT_JIPHANG2", "");

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
        	var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current

        	if(!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT")))
        	{
        		this.dsList.setColumn(nrow, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        		this.dsList.setColumn(nrow, "DS_DEPT", this.divSearch.form.ccfCD_DEPT.form.DSTextBox.text);
        	}
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

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsInsert.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        				this.dsInsert.setColumn(nrow, "CD_ACCOUNT", this.dsList.getColumn(i, "CD_ACCOUNT"));
        				this.dsInsert.setColumn(nrow, "CD_SAUPCODE", this.dsList.getColumn(i, "CD_SAUPCODE"));
        				this.dsInsert.setColumn(nrow, "DT_JIPHANG", this.dsList.getColumn(i, "DT_JIPHANG"));
        				this.dsInsert.setColumn(nrow, "AM_BUDGET_CONFIRM", this.dsList.getColumn(i, "AM_BUDGET_CONFIRM"));
        				this.dsInsert.setColumn(nrow, "AM_ACCOUNT", this.dsList.getColumn(i, "AM_ACCOUNT"));
        				this.dsInsert.setColumn(nrow, "AM_TAX", this.dsList.getColumn(i, "AM_TAX"));
        				this.dsInsert.setColumn(nrow, "CD_VATPROOF", this.dsList.getColumn(i, "CD_VATPROOF"));
        				this.dsInsert.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsInsert.setColumn(nrow, "CD_PAYCON", this.dsList.getColumn(i, "CD_PAYCON"));
        				this.dsInsert.setColumn(nrow, "DS_REM", this.dsList.getColumn(i, "DS_REM"));
        				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsUpdate.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        				this.dsUpdate.setColumn(nrow, "CD_ACCOUNT", this.dsList.getColumn(i, "CD_ACCOUNT"));
        				this.dsUpdate.setColumn(nrow, "CD_SAUPCODE", this.dsList.getColumn(i, "CD_SAUPCODE"));
        				this.dsUpdate.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsUpdate.setColumn(nrow, "DT_JIPHANG", this.dsList.getColumn(i, "DT_JIPHANG"));
        				this.dsUpdate.setColumn(nrow, "AM_BUDGET_CONFIRM", this.dsList.getColumn(i, "AM_BUDGET_CONFIRM"));
        				this.dsUpdate.setColumn(nrow, "AM_ACCOUNT", this.dsList.getColumn(i, "AM_ACCOUNT"));
        				this.dsUpdate.setColumn(nrow, "AM_TAX", this.dsList.getColumn(i, "AM_TAX"));
        				this.dsUpdate.setColumn(nrow, "CD_VATPROOF", this.dsList.getColumn(i, "CD_VATPROOF"));
        				this.dsUpdate.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsUpdate.setColumn(nrow, "CD_PAYCON", this.dsList.getColumn(i, "CD_PAYCON"));
        				this.dsUpdate.setColumn(nrow, "DS_REM", this.dsList.getColumn(i, "DS_REM"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsDelete.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        				this.dsDelete.setColumn(nrow, "CD_ACCOUNT", this.dsList.getColumn(i, "CD_ACCOUNT"));
        				this.dsDelete.setColumn(nrow, "CD_SAUPCODE", this.dsList.getColumn(i, "CD_SAUPCODE"));
        				this.dsDelete.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsDelete.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

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
        // 	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        // 		validate = false;
        // 		// Alert후 실행할 처리
        // 		this.fnVaidateCallback = function() {
        // 			this.ccfCD_SITE.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("사업지코드를 입력하세요.", "fnVaidateCallback");
        // 	}
        // 	else if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_DEPT"))) {
        // 		validate = false;
        // 		// Alert후 실행할 처리
        // 		this.fnVaidateCallback = function() {
        // 			this.ccfCD_DEPT.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("집행부서를 입력하세요.", "fnVaidateCallback");
        // 	}

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

        		this.fnMagamInfo();
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "exec") {
        		if (errorCode == 0) {
        			this.fnExec_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("집행전표발행이 정상처리되었습니다.", "fnExec_callback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "cancel") {
        		if (errorCode == 0) {
        			this.fnExec_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("전표발행취소가 정상처리되었습니다.", "fnExec_callback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "exec1") {
        		if (errorCode == 0) {
        			this.fnExec1_callback = function()
        			{
        				this.FormBtns.Select.click();
        				this.fnMagamInfo();
        			}

        			this.gfnAlert("요청하신 작업이 정상처리되었습니다.", "fnExec1_callback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}	else if(svcID == "magam") {

        			if(this.dsListMagam.rowcount > 0) {

                     var ynMagam = this.dsListMagam.getColumn(0, "YN_MAGAM");

        			if(ynMagam == "Y")
        			{
        				this.divSearch.form.staCD_SITE04.set_width(80);
        				this.divSearch.form.edtCD_ELAPPRGS.set_width(70);
        				this.divSearch.form.resetScroll();
        			}
        			else if(ynMagam == "N")
        			{
        				this.divSearch.form.staCD_SITE04.set_width(0);
        				this.divSearch.form.edtCD_ELAPPRGS.set_width(0);
        				this.divSearch.form.resetScroll();
        			}
        		} 	this.setBtnUsable();
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	if(id == "DOX_CFSAUPCODE2"){
        		if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "DT_JIPHANG"))){
        			this.gfnAlert("집행일자를 입력하세요.");
        			return false;
        		}else{
        			dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        			dsUserParam.setColumn(nrow, "CD_DEPTAPPLY", this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT"));
        			dsUserParam.setColumn(nrow, "YN_SLIP", "Y");
        			dsUserParam.setColumn(nrow, "DT_JIPHANG", this.dsList.getColumn(this.dsList.rowposition, "DT_JIPHANG"));
        		}

        	}else if(id == "DOX_CFSAUPACNT"){
        		if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_SAUPCODE"))){
        			this.gfnAlert("사업비코드를 입력하세요.");
        			return false;
        		}else{
        			dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        			dsUserParam.setColumn(nrow, "CD_SAUPCODE", this.dsList.getColumn(this.dsList.rowposition, "CD_SAUPCODE"));
        		}
        	}
        	return true;
        };


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        this.fnGrid_EnterCell = function(obj, row, cell) {
        	// 수정가능 true, false 처리하려는 컬럼에 대해서만 return 처리할것.
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);

        	if(colnm != "chk" && !this.gfnIsNull(this.dsList.getColumn(row, "CD_TRADE"))) {
        		return false;
        		}
        	};


        this.fnGrid_AfterEdit = function(obj,e) {
        	if(e.columnid == "DT_JIPHANG") {
        		// 집행일자 변경시 사업비코드,계정코드 초기화
        		if(e.oldvalue != e.newvalue) {
        			this.dsList.setColumn(this.dsList.rowposition, "CD_SAUPCODE", "");
        			this.dsList.setColumn(this.dsList.rowposition, "DS_SAUPCODE", "");
        			this.dsList.setColumn(this.dsList.rowposition, "TY_TYPE", "");
        			this.dsList.setColumn(this.dsList.rowposition, "AM_BUDGET_CONFIRM", "");
        			this.dsList.setColumn(this.dsList.rowposition, "AM_REMAIN", "");

        			this.dsList.setColumn(this.dsList.rowposition, "CD_ACCOUNT", "");
        			this.dsList.setColumn(this.dsList.rowposition, "DS_ACCOUNT", "");
        		}
        	}
        	else if(e.columnid == "CD_SAUPCODE") {
        		// 사업비코드 변경시 계정코드 초기화
        		if(e.oldvalue != e.newvalue) {
        			this.dsList.setColumn(this.dsList.rowposition, "CD_ACCOUNT", "");
        			this.dsList.setColumn(this.dsList.rowposition, "DS_ACCOUNT", "");
        		}
        	}
        }


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         /*
         버튼제어
         */
        this.setBtnUsable = function() {

        	this.btn5.set_enable(true);	 //스캔증빙확인

           var ynBtn = this.dsListMagam.getColumn(0, "YN_BTNCOMM");
           var ynConSlip = this.dsListMagam.getColumn(0, "YN_CONSLIP");
           var ynConSlipCncl = this.dsListMagam.getColumn(0, "YN_CONSLIPCNCL");
           var ynSapSlip = this.dsListMagam.getColumn(0, "YN_SAPSLIP");
           var ynSapSlipCncl = this.dsListMagam.getColumn(0, "YN_SAPSLIPCNCL");
           var ynMonthMagam = this.dsListMagam.getColumn(0, "YN_MONTHMAGAM");
           var ynMonthMagamCncl = this.dsListMagam.getColumn(0, "YN_MONTHMAGAMCNCL");
           var ynApp = this.dsListMagam.getColumn(0, "YN_APP");


        	if(ynBtn == 'N'){
        			this.FormBtns.Add.set_enable(false);
        			this.FormBtns.Save.set_enable(false);
        			this.FormBtns.Del.set_enable(false);
        		}else if(ynBtn == 'Y'){
        			this.FormBtns.Add.set_enable(true);
        			this.FormBtns.Save.set_enable(true);
        			this.FormBtns.Del.set_enable(true);
        		}

        		if(ynConSlip == 'N'){
        			this.btn2.set_enable(false);
        		}else if(ynConSlip == 'Y'){
        			this.btn2.set_enable(true);
        		}

        		if(ynConSlipCncl == 'N'){
        			 this.btn3.set_enable(false);
        		}else if(ynConSlipCncl == 'Y'){
        			this.btn3.set_enable(true);
        		}

        		if(ynSapSlip == 'N'){
        			this.btn6.set_enable(false);
        		}else if(ynSapSlip == 'Y'){
        			this.btn6.set_enable(true);
        		}

        		if(ynSapSlipCncl == 'N'){
        			this.btn7.set_enable(false);
        		}else if(ynSapSlipCncl == 'Y'){
        			this.btn7.set_enable(true);
        		}

        		if(ynMonthMagam == 'N'){
        			this.btn8.set_enable(false);
        		}else if(ynMonthMagam == 'Y'){
        			this.btn8.set_enable(true);
        		}

        		if(ynMonthMagamCncl == 'N'){
        			this.btn9.set_enable(false);
        		}else if(ynMonthMagamCncl == 'Y'){
        			this.btn9.set_enable(true);
        		}

        		if(ynApp == 'N'){
        			this.btn10.set_enable(false);
        		}else if(ynApp == 'Y'){
        			this.btn10.set_enable(true);

        	}

        }


        // row 선택이 변경될때 발생하는 이벤트
        this.dsList_onrowposchanged = function(obj,e)
        {
        	//this.setBtnUsable();
        };


        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvaluqe) {

        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		//this.setBtnUsable();
        		//this.btn2.set_enable(true);
        		//this.btn3.set_enable(true);
        		//this.FormBtns.Add.set_enable(true);
        		//this.FormBtns.Save.set_enable(true);
        		//this.FormBtns.Del.set_enable(true);

        	}
        };

        this.fnBudChng = function(obj,e) {
        		if (!this.fnSelectValidate()) return false;

        		var param = {};

        		param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        		param.DS_SITE = this.ccfCD_SITE.form.DSTextBox.value;
        		param.CD_DEPT = this.dsSearch.getColumn(0, "CD_DEPT");
        		param.DS_DEPT = this.ccfCD_DEPT.form.DSTextBox.value;

        		this.gfnFormOpen(this.FormInfo.CD_MODULE, "DOG_BUDGET_CHNG", "", param);
        };


        // 집행전표발행 버튼 이벤트
        this.fnExecSlip = function(obj,e) {
        	if(this.dsList.findRow("chk","1") < 0){
        		this.gfnAlert("선택된 행이 없습니다.");
        		return false;
        	}

        	this.gfnAlert("집행전표발행을 진행하시겠습니까?", "fnExecSlip_callback");
        };

        // 집행전표발행 이벤트 callback
        this.fnExecSlip_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.dsExec.clearData();

        		for(var i =0;i < this.dsList.rowcount;i++){
        			if(this.dsList.getColumn(i , "chk") == "1" && this.gfnIsNull(this.dsList.getColumn(i , "CD_TRADE"))){
        				var nrow = this.dsExec.addRow();
        				this.dsExec.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsExec.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        				this.dsExec.setColumn(nrow, "CD_ACCOUNT", this.dsList.getColumn(i, "CD_ACCOUNT"));
        				this.dsExec.setColumn(nrow, "CD_SAUPCODE", this.dsList.getColumn(i, "CD_SAUPCODE"));
        				this.dsExec.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsExec.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			}
        		}

        		if (this.dsExec.rowcount == 0) return;

        		var strSvcId    = "exec";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "exec=dsExec";
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

        // 집행전표취소 버튼 이벤트
        this.fnExecSlipCncl = function(obj,e) {

        		if(this.dsList.findRow("chk","1") < 0){
        			this.gfnAlert("선택된 행이 없습니다.");
        			return false;
        		}

        	this.gfnAlert("집행전표취소를 진행하시겠습니까?", "fnExecSlipCncl_callback");

        };

        this.fnExecSlipCncl_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.dsCancel.clearData();

        		for(var i =0;i < this.dsList.rowcount;i++){
        			if(this.dsList.getColumn(i , "chk") == "1" && !this.gfnIsNull(this.dsList.getColumn(i , "CD_TRADE"))){
        				var nrow = this.dsCancel.addRow();
        				this.dsCancel.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsCancel.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        				this.dsCancel.setColumn(nrow, "CD_ACCOUNT", this.dsList.getColumn(i, "CD_ACCOUNT"));
        				this.dsCancel.setColumn(nrow, "CD_SAUPCODE", this.dsList.getColumn(i, "CD_SAUPCODE"));
        				this.dsCancel.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsCancel.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			}
        		}

        		if (this.dsCancel.rowcount == 0) return;

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
        	}
        }


        // 전표조회 버튼 이벤트
        this.fnSlipSearch = function(obj,e) {
        	if (!this.fnSelectValidate()) return false;
        	if(this.dsList.rowposition < 0){
        		this.gfnAlert("선택된 행이 없습니다.");
        		return false;
        	}

        	var param = {};

        	param.CD_TRADE = this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE");

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);
        };

        // 스캔증빙확인
        this.fnProof = function(obj,e) {
        	if(this.dsList.rowposition < 0)
        	{
        		this.gfnAlert("집행내역을 선택해주세요.");
        		return;
        	}

        	var fileManager = {};
        	fileManager.CD_GUBUN = "DH03";
        	fileManager.CD_DIR = [ this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE") ];
        	// CD_DIR 만 지정시 CD_DIR 배열 순대로 키1,키2,키3 까지 자동지정
        	// 저장되는 디렉토리와 키값이 다른경우 CD_REF 추가로 사용
        	//fileManager.CD_REF = [ "A1" ];
        	// 권한 및 상태에 따라 업로드,삭제 가능여부 지정 (기본: true)

        	if(this.FormInfo.TY_AUTH == "R") {
        		fileManager.IS_READONLY = true;
        	} else {
        		fileManager.IS_READONLY = false;
        	}

        	this.gfnFileManager(fileManager, "fnFileCallback");
        };


        /*
         *	전표발행(SAP)
         */
         this.fnSapslip = function() {

        	if(this.dsList.findRow("chk", 1) < 0){
        		this.gfnAlert("전표발행(SAP) 하실 정보를 선택하시기 바랍니다.");
        		return false;
        	}

        	this.gfnConfirm("전표발행(SAP)를 진행하시겠습니까?", "fnSapslip_Confirm");
        }


        this.fnSapslip_Confirm = function(strId, val) {
        	if(val == true) {
        		var ds = new Dataset();
        		ds.addColumn("NO_ERPKEY", "string");
        		ds.addColumn("CD_TRADE", "string");
        		ds.addColumn("ID_USER", "string");

        		for(var i = 0; i < this.dsList.rowcount; i++)
        		{
        			if(this.dsList.getColumn(i, "chk") == 1)
        			{
        				if(!this.gfnIsNull(this.dsList.getColumn(i, "CD_TRADE"))
        				&& this.gfnIsNull(this.dsList.getColumn(i, "BELNR")))
        				{
        					var nrow = ds.addRow();
        					ds.setColumn(nrow, "NO_ERPKEY", this.dsList.getColumn(i, "NO_ERPKEY"));
        					ds.setColumn(nrow, "CD_TRADE", this.dsList.getColumn(i, "CD_TRADE"));
        					ds.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				}
        			}
        		}

        		if(ds.rowcount == 0) return;

        		// 전표발행(SAP) 다중건 처리
        		this.gfnSlipIssueDs(ds, "fnSapslip_Complete");
        	}
        }

        /*
         *	전표취소(SAP)
         */
        this.fnSapslipCncl = function() {
        	if(this.dsList.findRow("chk", 1) < 0){
        		this.gfnAlert("전표발행취소(SAP) 하실 정보를 선택하시기 바랍니다.");
        		return false;
        	}

        	this.gfnConfirm("전표발행취소(SAP)를 진행하시겠습니까?", "fnSapslipCncl_Confirm");
        }

        this.fnSapslipCncl_Confirm = function(strId, val) {
        	if(val == true) {
        		// 전표취소(SAP) 다중건 처리용 Dataset 생성
        		var ds = new Dataset();
        		ds.addColumn("NO_ERPKEY", "string");
        		ds.addColumn("CD_TRADE", "string");
        		ds.addColumn("ID_USER", "string");
        		ds.addColumn("BUKRS", "string");
        		ds.addColumn("BELNR", "string");
        		ds.addColumn("GJAHR", "string");

        		for(var i = 0; i < this.dsList.rowcount; i++)
        		{
        			if(this.dsList.getColumn(i, "chk") == 1)
        			{
        				if(!this.gfnIsNull(this.dsList.getColumn(i, "CD_TRADE"))
        				&& !this.gfnIsNull(this.dsList.getColumn(i, "BELNR")))
        				{
        					var nrow = ds.addRow();
        					ds.setColumn(nrow, "NO_ERPKEY", this.dsList.getColumn(i, "NO_ERPKEY"));
        					ds.setColumn(nrow, "CD_TRADE", this.dsList.getColumn(i, "CD_TRADE"));
        					ds.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        					ds.setColumn(nrow, "BUKRS", this.dsList.getColumn(i, "BUKRS"));
        					ds.setColumn(nrow, "BELNR", this.dsList.getColumn(i, "BELNR"));
        					ds.setColumn(nrow, "GJAHR", this.dsList.getColumn(i, "GJAHR"));
        				}
        			}
        		}

        		if(ds.rowcount == 0) return;

        		// 전표취소(SAP) 다중건 처리
        		this.gfnSlipCancelDs(ds, "fnSapslipCncl_Complete");
        	}
        }

        this.fnSapslip_Complete = function() {
        	this.fnSelect();
        }

        this.fnSapslipCncl_Complete = function() {
        	this.fnSelect();
        }

        //월마감 진행여부 확인
        this.fnMagamYnCheck = function(obj, e) {
            this.gfnConfirm("월마감 작업을 수행하시겠습니까?", "fnMagam");
        }

        //월마감 진행
        this.fnMagam = function(strId, val) {
            if (val == true) {
                this.dsExec1.clearData();
                this.dsExec1.addRow();

                this.dsExec1.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
                this.dsExec1.setColumn(0, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        		this.dsExec1.setColumn(0, "DT_MONTH", this.dsSearch.getColumn(0, "DT_JIPHANG1"));
                this.dsExec1.setColumn(0, "TY_MAGAM", "Y");
        		this.dsExec1.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

                var strSvcId = "exec1";
                var strSvcType = "save";
                var inProc = "_dsProc";
                var inData = "exec1=dsExec1";
                var outData = "";
                var strArg = "";
                var callBackFnc = "fnCallback";

                this.gfnTransaction(strSvcId, // transaction을 구분하기 위한 svc id값
                    strSvcType, // transaction을 요청할 구분
                    inProc, // Procedure 정보 Dataset 이름
                    inData, // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
                    outData, // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
                    strArg, // 입력갑스로 보낼 arguments, strFormData="20120607"
                    callBackFnc); // 통신방법 정의 [생략가능]
            }
        }


        //월마감 취소여부 확인
        this.fnMagamCnclYnCheckCancel = function(obj, e) {
            this.gfnConfirm("월마감작업을 취소하시겠습니까?", "fnMagamCncl");
        }

        //월마감 취소
        this.fnMagamCncl = function(strId, val) {
            if (val == true) {
        		this.dsExec1.clearData();
        		this.dsExec1.addRow();

                this.dsExec1.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
                this.dsExec1.setColumn(0, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        		this.dsExec1.setColumn(0, "DT_MONTH", this.dsSearch.getColumn(0, "DT_JIPHANG1"));
                this.dsExec1.setColumn(0, "TY_MAGAM", "N");
        		this.dsExec1.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        		if (this.dsExec1.rowcount == 0) return;

        		var strSvcId = "exec1";
        		var strSvcType = "save";
        		var inProc = "_dsProc";
        		var inData = "exec1=dsExec1";
        		var outData = "";
        		var strArg = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction(strSvcId, // transaction을 구분하기 위한 svc id값
        			strSvcType, // transaction을 요청할 구분
        			inProc, // Procedure 정보 Dataset 이름
        			inData, // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        			outData, // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        			strArg, // 입력갑스로 보낼 arguments, strFormData="20120607"
        			callBackFnc); // 통신방법 정의 [생략가능]
        	}
        }

        //마감 및 결재상태조회
        this.fnMagamInfo = function() {

        	this.dsMagam.clearData();
        	this.dsMagam.addRow();

        	this.dsMagam.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsMagam.setColumn(0, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsMagam.setColumn(0, "DT_MONTH", this.dsSearch.getColumn(0, "DT_JIPHANG1"));

        	var strSvcId    = "magam";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "magam=dsMagam";
        	var outData     = "dsListMagam=magam0"
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

        this.fnAPP = function(obj,e) {

        		this.gfnAlert("개발중");

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DOG_EXECUTE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
