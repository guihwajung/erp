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
            this.set_titletext("소득자료 집계");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_DEFRAYMENTTOTAL_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHVPR_DEFRAYMENTTOTAL_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHVPR_DEFRAYMENTTOTAL_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHVPR_DEFRAYMENTTOTAL_DELETE</Col></Row><Row><Col id=\"TARGET\">bagCreate</Col><Col id=\"SP\">DHVPR_DEFRAYMENTTOTAL_CREATE</Col></Row><Row><Col id=\"SP\">DHVPR_DEFRAYMENTTOTAL_DELETE_ALL</Col><Col id=\"TARGET\">bagDel</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_DEPT_SELFACNT\" type=\"STRING\" size=\"256\"/><Column id=\"YM_IMPUTE_FR\" type=\"STRING\" size=\"256\"/><Column id=\"YM_IMPUTE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"YM_SUPPLY_FR\" type=\"STRING\" size=\"256\"/><Column id=\"YM_SUPPLY_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YM_IMPUTE_TO\"/><Col id=\"CD_DEPT_SELFACNT\"/><Col id=\"YM_IMPUTE_FR\"/><Col id=\"YM_SUPPLY_FR\"/><Col id=\"YM_SUPPLY_TO\"/><Col id=\"CD_CORP\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_SELFACNT","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("세무단위");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_SELFACNT","staCD_DEPT_SELFACNT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFSELFACNT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_IMPUTE_FR","ccfCD_DEPT_SELFACNT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("귀속기간");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_IMPUTE_FR","staYM_IMPUTE_FR:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_IMPUTE_TO","ctclYM_IMPUTE_FR:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_IMPUTE_TO","staYM_IMPUTE_TO:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_SUPPLY_FR","ctclYM_IMPUTE_TO:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("지급기간");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_SUPPLY_FR","staYM_SUPPLY_FR:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_SUPPLY_TO","ctclYM_SUPPLY_FR:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_SUPPLY_TO","staYM_SUPPLY_TO:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","-5","0",null,null,"5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","divSearch.form.ctclYM_SUPPLY_TO.form.TextBox","value","dsSearch","YM_SUPPLY_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctclYM_SUPPLY_FR.form.TextBox","value","dsSearch","YM_SUPPLY_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccfCD_DEPT_SELFACNT.form.CDTextBox","value","dsSearch","CD_DEPT_SELFACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclYM_IMPUTE_TO.form.TextBox","value","dsSearch","YM_IMPUTE_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclYM_IMPUTE_FR.form.TextBox","value","dsSearch","YM_IMPUTE_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
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
        this.registerScript("DHV_DEFRAYMENTTOTAL_SLIP.xfdl", function() {
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


        	// 법인코드세션
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}


        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_DEPT_SELFACNT) && !this.gfnIsNull(this.getOwnerFrame().YM_IMPUTE_FR) && !this.gfnIsNull(this.getOwnerFrame().YM_SUPPLY_FR)) {
        		trace("타화면에서 오픈시 넘어오는");
        		this.dsSearch.setColumn(0, "CD_DEPT_SELFACNT", this.getOwnerFrame().CD_DEPT_SELFACNT);
        		this.divSearch.form.ccfCD_DEPT_SELFACNT.form.DSTextBox.set_value(this.getOwnerFrame().DS_DEPT_SELFACNT);

        		this.dsSearch.set_enableevent(false);

        		this.dsSearch.setColumn(0, "YM_IMPUTE_FR", this.getOwnerFrame().YM_IMPUTE_FR);
        		this.dsSearch.setColumn(0, "YM_IMPUTE_TO", this.getOwnerFrame().YM_IMPUTE_TO);
        		this.dsSearch.setColumn(0, "YM_SUPPLY_FR", this.getOwnerFrame().YM_SUPPLY_FR);
        		this.dsSearch.setColumn(0, "YM_SUPPLY_TO", this.getOwnerFrame().YM_SUPPLY_TO);

        		this.dsSearch.set_enableevent(true);
        		this.FormBtns.Select.click();
        	}else{

        		this.dsSearch.set_enableevent(false);

        		var toDay = this.gfnGetDate().substring(0,6);
        		this.dsSearch.setColumn(0, "YM_IMPUTE_FR", toDay);
        		this.dsSearch.setColumn(0, "YM_IMPUTE_TO", toDay);
        		this.dsSearch.setColumn(0, "YM_SUPPLY_FR", toDay);
        		this.dsSearch.setColumn(0, "YM_SUPPLY_TO", toDay);

        		this.dsSearch.set_enableevent(true);

        		// 세무단위 초기값 설정
        		this.dsSearch.setColumn(0, "CD_DEPT_SELFACNT", this.UserInfo.CD_DEPT_SELFACNT);
        		this.divSearch.form.ccfCD_DEPT_SELFACNT.form.fnCodeFindLoad();
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel

        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnBagCreate = this.gfnFormButtonAdd("btnBagCreate", "fnBagCreate");	//기초자료생성
        	this.btnBagDel = this.gfnFormButtonAdd("btnBagDel", "fnBagDel");	//기초자료삭제
        	//this.btnBagRpt = this.gfnFormButtonAdd("btnBagRpt", "fnBagRpt");	//소득자료제출 집계표출력
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;	// 법인코드
        	this.ccfCD_DEPT_SELFACNT = this.divSearch.form.ccfCD_DEPT_SELFACNT;
         	this.ctclYM_IMPUTE_FR 	 = this.divSearch.form.ctclYM_IMPUTE_FR;
         	this.ctclYM_IMPUTE_TO  	 = this.divSearch.form.ctclYM_IMPUTE_TO;
        	this.ctclYM_SUPPLY_FR 	 = this.divSearch.form.ctclYM_SUPPLY_FR;
        	this.ctclYM_SUPPLY_TO  	 = this.divSearch.form.ctclYM_SUPPLY_TO;

        	this.dxGrid 		     = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_CORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";


        	this.ccfCD_DEPT_SELFACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	// 그리드 초기화
        	//this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHV_DEFRAYMENTTOTAL_SLIP", "TY_INCOMETYPE", "TY_INCOMETYPE");
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHV_DEFRAYMENTTOTAL_SLIP",  "TY_INCOMETYPE", "TY_INCOMETYPE2");
        	//this.dxGrid.set_selecttype("cell");

        	var colTY_INCOMETYPE = this.dxGrid.getBindCellIndex("body", "TY_INCOMETYPE");
        	var colDS_INCOMETYPE = this.dxGrid.getBindCellIndex("body", "DS_INCOMETYPE");
        	//this.dxGrid.setCellProperty("body", colTY_INCOMETYPE, "expr", "expr:dataset.getRowLevel(currow)==1?dataset.getColumn(currow+1, 'TY_INCOMETYPE'):''");
        	//this.dxGrid.setCellProperty("body", colTY_INCOMETYPE, "expr", "expr:dataset.getRowLevel(currow)==1?dataset.getColumn(currow+1, 'TY_INCOMETYPE'):dataset.getColumn(currow, 'TY_INCOMETYPE')");
        	this.dxGrid.setCellProperty("body", colDS_INCOMETYPE, "expr", "expr:dataset.getRowLevel(currow)==1?dataset.getColumn(currow+1, 'DS_INCOMETYPE'):dataset.getColumn(currow, 'DS_INCOMETYPE')");

        	//헤더 클릭 이벤트 삭제(소팅 막기 위해 처리)
        	this.dxGrid.removeEventHandlerLookup("onheadclick", "gfnGrid_onheadclick", this);

        	//검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_Valuechanged, this);

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSelect.addColumn("YM_IMPUTE_FR", "string");
        	this.dsSelect.addColumn("YM_IMPUTE_TO", "string");
        	this.dsSelect.addColumn("TY_INCOMETYPE", "string");
        	this.dsSelect.addColumn("YM_SUPPLY_FR", "string");
        	this.dsSelect.addColumn("YM_SUPPLY_TO", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_DEPT_ACNT", "string");
        	this.dsInsert.addColumn("YM_IMPUTE", "string");
        	this.dsInsert.addColumn("TY_INCOMETYPE", "string");
        	this.dsInsert.addColumn("NO_PERSONCNT", "int");
        	this.dsInsert.addColumn("NO_PAYMENTCNT", "int");
        	this.dsInsert.addColumn("AM_PAYMENTTOTALAMT", "bigdecimal");
        	this.dsInsert.addColumn("AM_TAXPAY", "bigdecimal");
        	this.dsInsert.addColumn("AM_NTAXPAY", "bigdecimal");
        	this.dsInsert.addColumn("AM_INCOMETAX", "bigdecimal");
        	this.dsInsert.addColumn("AM_CORPTAX", "bigdecimal");
        	this.dsInsert.addColumn("AM_INHERBANTTAX", "bigdecimal");
        	this.dsInsert.addColumn("AM_FARMTAX", "bigdecimal");
        	this.dsInsert.addColumn("AM_TAXTOTAL", "bigdecimal");
        	this.dsInsert.addColumn("AM_AMOUNTAMT", "bigdecimal");
        	this.dsInsert.addColumn("CD_VENDOR", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");
        	this.dsInsert.addColumn("YM_SUPPLY", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_DEPT_ACNT", "string");
        	this.dsUpdate.addColumn("YM_IMPUTE", "string");
        	this.dsUpdate.addColumn("TY_INCOMETYPE", "string");
        	this.dsUpdate.addColumn("NO_PERSONCNT", "int");
        	this.dsUpdate.addColumn("NO_PAYMENTCNT", "int");
        	this.dsUpdate.addColumn("AM_PAYMENTTOTALAMT", "bigdecimal");
        	this.dsUpdate.addColumn("AM_TAXPAY", "bigdecimal");
        	this.dsUpdate.addColumn("AM_NTAXPAY", "bigdecimal");
        	this.dsUpdate.addColumn("AM_INCOMETAX", "bigdecimal");
        	this.dsUpdate.addColumn("AM_CORPTAX", "bigdecimal");
        	this.dsUpdate.addColumn("AM_INHERBANTTAX", "bigdecimal");
        	this.dsUpdate.addColumn("AM_FARMTAX", "bigdecimal");
        	this.dsUpdate.addColumn("AM_TAXTOTAL", "bigdecimal");
        	this.dsUpdate.addColumn("AM_AMOUNTAMT", "bigdecimal");
        	this.dsUpdate.addColumn("CD_VENDOR", "string");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");
        	this.dsUpdate.addColumn("YM_SUPPLY", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_DEPT_ACNT", "string");
        	this.dsDelete.addColumn("YM_IMPUTE", "string");
        	this.dsDelete.addColumn("TY_INCOMETYPE", "string");
        	this.dsDelete.addColumn("YM_SUPPLY", "string");

        	this.dsBagCreate = new Dataset();
        	this.dsBagCreate.addColumn("CD_CORP", "string");
        	this.dsBagCreate.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsBagCreate.addColumn("YM_IMPUTE_TO", "string");
        	this.dsBagCreate.addColumn("YM_IMPUTE_FROM", "string");
        	this.dsBagCreate.addColumn("YM_SUPPLY_TO", "string");
        	this.dsBagCreate.addColumn("YM_SUPPLY_FROM", "string");

        	this.dsBagDel = new Dataset();
        	this.dsBagDel.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsBagDel.addColumn("YM_IMPUTE", "string");
        	this.dsBagDel.addColumn("YM_SUPPLY", "string");
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

        	this.dsSelect.setColumn(0, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT_SELFACNT"));
        	//this.dsSelect.setColumn(0, "CD_DEPT_ACNT", "");
        	this.dsSelect.setColumn(0, "YM_IMPUTE_FR", this.dsSearch.getColumn(0, "YM_IMPUTE_FR"));
        	this.dsSelect.setColumn(0, "YM_IMPUTE_TO", this.dsSearch.getColumn(0, "YM_IMPUTE_TO"));
        	this.dsSelect.setColumn(0, "TY_INCOMETYPE", "");
        	this.dsSelect.setColumn(0, "YM_SUPPLY_FR", this.dsSearch.getColumn(0, "YM_SUPPLY_FR"));
        	this.dsSelect.setColumn(0, "YM_SUPPLY_TO", this.dsSearch.getColumn(0, "YM_SUPPLY_TO"));

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
        	var nrow = this.gfnGridAdd(this.dxGrid);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

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

        				this.dsInsert.setColumn(nrow, "TY_INCOMETYPE", this.dsList.getColumn(i, "TY_INCOMETYPE"));
        				this.dsInsert.setColumn(nrow, "CD_DEPT_ACNT", this.dsList.getColumn(i, "CD_DEPT_ACNT"));
        				this.dsInsert.setColumn(nrow, "YM_IMPUTE", this.dsSearch.getColumn(0, "YM_IMPUTE_FR"));
        				//this.dsInsert.setColumn(nrow, "TY_INCOMETYPE", this.dsList.getColumn(i, "TY_INCOMETYPE"));
        				this.dsInsert.setColumn(nrow, "NO_PERSONCNT", this.dsList.getColumn(i, "NO_PERSONCNT"));
        				this.dsInsert.setColumn(nrow, "NO_PAYMENTCNT", this.dsList.getColumn(i, "NO_PAYMENTCNT"));
        				this.dsInsert.setColumn(nrow, "AM_PAYMENTTOTALAMT", this.dsList.getColumn(i, "AM_PAYMENTTOTALAMT"));
        				this.dsInsert.setColumn(nrow, "AM_TAXPAY", this.dsList.getColumn(i, "AM_TAXPAY"));
        				this.dsInsert.setColumn(nrow, "AM_NTAXPAY", this.dsList.getColumn(i, "AM_NTAXPAY"));
        				this.dsInsert.setColumn(nrow, "AM_INCOMETAX", this.dsList.getColumn(i, "AM_INCOMETAX"));
        				this.dsInsert.setColumn(nrow, "AM_CORPTAX", this.dsList.getColumn(i, "AM_CORPTAX"));
        				this.dsInsert.setColumn(nrow, "AM_INHERBANTTAX", this.dsList.getColumn(i, "AM_INHERBANTTAX"));
        				this.dsInsert.setColumn(nrow, "AM_FARMTAX", this.dsList.getColumn(i, "AM_FARMTAX"));
        				this.dsInsert.setColumn(nrow, "AM_TAXTOTAL", this.dsList.getColumn(i, "AM_TAXTOTAL"));
        				this.dsInsert.setColumn(nrow, "AM_AMOUNTAMT", this.dsList.getColumn(i, "AM_AMOUNTAMT"));
        				this.dsInsert.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				this.dsInsert.setColumn(nrow, "YM_SUPPLY", this.dsSearch.getColumn(0, "YM_SUPPLY_FR"));
        				break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "TY_INCOMETYPE", this.dsList.getColumn(i, "TY_INCOMETYPE"));
        				this.dsUpdate.setColumn(nrow, "CD_DEPT_ACNT", this.dsList.getColumn(i, "CD_DEPT_ACNT"));
        				this.dsUpdate.setColumn(nrow, "YM_IMPUTE", nexacro.replaceAll(this.dsList.getColumn(i, "YM_IMPUTE"), "-", ""));
        				//this.dsUpdate.setColumn(nrow, "TY_INCOMETYPE", this.dsList.getColumn(i, "TY_INCOMETYPE"));
        				this.dsUpdate.setColumn(nrow, "NO_PERSONCNT", this.dsList.getColumn(i, "NO_PERSONCNT"));
        				this.dsUpdate.setColumn(nrow, "NO_PAYMENTCNT", this.dsList.getColumn(i, "NO_PAYMENTCNT"));
        				this.dsUpdate.setColumn(nrow, "AM_PAYMENTTOTALAMT", this.dsList.getColumn(i, "AM_PAYMENTTOTALAMT"));
        				this.dsUpdate.setColumn(nrow, "AM_TAXPAY", this.dsList.getColumn(i, "AM_TAXPAY"));
        				this.dsUpdate.setColumn(nrow, "AM_NTAXPAY", this.dsList.getColumn(i, "AM_NTAXPAY"));
        				this.dsUpdate.setColumn(nrow, "AM_INCOMETAX", this.dsList.getColumn(i, "AM_INCOMETAX"));
        				this.dsUpdate.setColumn(nrow, "AM_CORPTAX", this.dsList.getColumn(i, "AM_CORPTAX"));
        				this.dsUpdate.setColumn(nrow, "AM_INHERBANTTAX", this.dsList.getColumn(i, "AM_INHERBANTTAX"));
        				this.dsUpdate.setColumn(nrow, "AM_FARMTAX", this.dsList.getColumn(i, "AM_FARMTAX"));
        				this.dsUpdate.setColumn(nrow, "AM_TAXTOTAL", this.dsList.getColumn(i, "AM_TAXTOTAL"));
        				this.dsUpdate.setColumn(nrow, "AM_AMOUNTAMT", this.dsList.getColumn(i, "AM_AMOUNTAMT"));
        				this.dsUpdate.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				this.dsUpdate.setColumn(nrow, "YM_SUPPLY", nexacro.replaceAll(this.dsList.getColumn(i, "YM_SUPPLY"), "-", ""));
        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "TY_INCOMETYPE", this.dsList.getColumn(i, "TY_INCOMETYPE"));
        				this.dsDelete.setColumn(nrow, "CD_DEPT_ACNT", this.dsList.getColumn(i, "CD_DEPT_ACNT"));
        				this.dsDelete.setColumn(nrow, "YM_IMPUTE", nexacro.replaceAll(this.dsList.getColumn(i, "YM_IMPUTE"), "-", ""));
        				//this.dsDelete.setColumn(nrow, "TY_INCOMETYPE", this.dsList.getColumn(i, "TY_INCOMETYPE"));
        				this.dsDelete.setColumn(nrow, "YM_SUPPLY", nexacro.replaceAll(this.dsList.getColumn(i, "YM_SUPPLY"), "-", ""));
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_CORP"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_DEPT_SELFACNT"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_DEPT_SELFACNT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("세무단위는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0,"YM_IMPUTE_FR"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctclYM_IMPUTE_FR.form.TextBox.setFocus();
        		}
        		this.gfnAlert("귀속기간은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0,"YM_IMPUTE_TO"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctclYM_IMPUTE_TO.form.TextBox.setFocus();
        		}
        		this.gfnAlert("귀속기간은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0,"YM_SUPPLY_FR"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctclYM_SUPPLY_FR.form.TextBox.setFocus();
        		}
        		this.gfnAlert("지급기간은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0,"YM_SUPPLY_TO"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctclYM_SUPPLY_TO.form.TextBox.setFocus();
        		}
        		this.gfnAlert("지급기간은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
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
        	if(svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	} else if(svcID == "save") {

        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "bagCreate")
        	{
        		if (errorCode == 0) {
        			this.fnBagCreateMsg_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}
        			this.gfnAlert("자료가 생성되었습니다.", "fnBagCreateMsg_callback");

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "bagDel")
        	{
        		if (errorCode == 0) {
        			this.fnBagDelMsg_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}
        			this.gfnAlert("자료가 삭제 되었습니다.", "fnBagDelMsg_callback");

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }


        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var cdCorp = this.ccfCD_CORP.form.CDTextBox.value;

        	if(id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}

        	if(id == "ccfCD_DEPT_SELFACNT") {
        		if (this.gfnIsNull(cdCorp)) {
        			this.gfnAlert("법인코드를 먼저 선택하세요.");
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		//dsUserParam.setColumn(nrow, "LV_DEPT", this.UserInfo.LEVCD_DEPT_SELFACNT);
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	if(id == "ccfCD_CORP") {
        		this.ccfCD_DEPT_SELFACNT.form.fnCodeFindClear();
        	}
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 거래처코드
        	if(id == "DHX_CFACNTUNIT_BY_SELFACNT") {
        		dsUserParam.setColumn(nrow, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT_SELFACNT"));
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER", this.UserInfo.LEVCD_DEPT_SELFACNT);
        	}
        	if(id == "DHX_CFACNTUNIT") {
        		var cdCorp = this.ccfCD_CORP.form.CDTextBox.value;
        		if (this.gfnIsNull(cdCorp)) {
        			this.gfnAlert("법인코드를 먼저 선택하세요.");
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");				//상위부서
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");				//전표발행여부
        		dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);			//법인코드
        		dsUserParam.setColumn(nrow, "YN_USE"		, "Y");				//사용여부
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");				//현장/본사여부
        		dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER"	, cdCorp);		//회계단위
        	}

        	if(id == "DHX_CFALLVENDOR_CODEFIND") {	// 거래처코드
        		dsUserParam.setColumn(nrow, "CD_CORP" , sCdCorp);
        	}

        	if(id == "DHXPR_COMMON_CODEFIND_V22") {	// 지급구분
        		dsUserParam.setColumn(nrow, "CD_SYSTEM" , "DH");
        		dsUserParam.setColumn(nrow, "CD_TYPE" , "V22");
        	}

        	return true;
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        //검색조건 변경 이벤트
        this.dsSearch_Valuechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		switch(e.columnid) {
        			case "YM_IMPUTE_FR":
        				var sYmImputeFr = e.newvalue;
        				this.dsSearch.setColumn(0, "YM_IMPUTE_TO", sYmImputeFr);
        				this.dsSearch.setColumn(0, "YM_SUPPLY_FR", sYmImputeFr);
        				this.dsSearch.setColumn(0, "YM_SUPPLY_TO", sYmImputeFr);
        				break;
        		}
        	}
        };


        //자료생성 처리
        this.fnBagCreate = function (obj,e)
        {
        	if(!this.fnSelectValidate()) return;

        	this.gfnConfirm("소득자료를 생성합니다", "fnBagCreate_callback");

        };

        this.fnBagCreate_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsBagCreate.clearData();
        		var nRow = this.dsBagCreate.addRow();

        		//처리할 데이터 담기

        		this.dsBagCreate.setColumn(nRow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsBagCreate.setColumn(nRow, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT_SELFACNT"));
        		this.dsBagCreate.setColumn(nRow, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT_SELFACNT"));
        		this.dsBagCreate.setColumn(nRow, "YM_IMPUTE_TO", this.dsSearch.getColumn(0, "YM_IMPUTE_TO"));
        		this.dsBagCreate.setColumn(nRow, "YM_IMPUTE_FROM", this.dsSearch.getColumn(0, "YM_IMPUTE_FR"));
        		this.dsBagCreate.setColumn(nRow, "YM_SUPPLY_TO", this.dsSearch.getColumn(0, "YM_SUPPLY_TO"));
        		this.dsBagCreate.setColumn(nRow, "YM_SUPPLY_FROM", this.dsSearch.getColumn(0, "YM_SUPPLY_FR"));

        		var strSvcId    = "bagCreate";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "bagCreate=dsBagCreate";
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


        //자료삭제 처리
        this.fnBagDel = function (obj,e)
        {
        	if(!this.fnSelectValidate()) return;

        	this.gfnConfirm("기존에 생성된 자료를 삭제하시겠습니까?", "fnBagDel_callback");

        };

        this.fnBagDel_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsBagDel.clearData();
        		var nRow = this.dsBagDel.addRow();

        		this.dsBagDel.setColumn(nRow, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT_SELFACNT"));
        		this.dsBagDel.setColumn(nRow, "YM_IMPUTE", this.dsSearch.getColumn(0, "YM_IMPUTE_FR"));
        		this.dsBagDel.setColumn(nRow, "YM_SUPPLY", this.dsSearch.getColumn(0, "YM_SUPPLY_FR"));

        		var strSvcId    = "bagDel";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "bagDel=dsBagDel";
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

        //레포트 처리
        this.fnBagRpt = function (obj,e)
        {
        	this.gfnAlert("레포트출력 준비중입니다.");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccfCD_DEPT_SELFACNT.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.objGrid.addEventHandler("oncellclick",this.divData_objGrid_oncellclick,this);
        };
        this.loadIncludeScript("DHV_DEFRAYMENTTOTAL_SLIP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
