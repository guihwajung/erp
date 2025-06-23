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
            this.set_titletext("공제받지못할 매입세액조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListA", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListB", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListC", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_AC_SELECT</Col></Row><Row><Col id=\"TARGET\">a_select</Col><Col id=\"SP\">DHVPR_AC_SELECT_A</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHVPR_BUYGROUND_INSERT</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DHVPR_TAX_SINGO_BUYING_DIVISION</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"YY_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNO_TAX", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">1기예정</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">1기확정</Col></Row><Row><Col id=\"CD_CODE\">3</Col><Col id=\"DS_CODE\">2기예정</Col></Row><Row><Col id=\"CD_CODE\">4</Col><Col id=\"DS_CODE\">2기확정</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
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

            obj = new Div("ccfCD_DEPT","sta00:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Combo("ccboNO_TAX","staYY_WORK00:0.0","10.0","98","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsNO_TAX");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_FROM","ccboNO_TAX:5","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            obj.set_inputtype("digit");
            obj.set_readonly("true");
            obj.set_text("2020-04-04");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_WORK","ctxtDT_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_TO","staDT_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            obj.set_inputtype("digit");
            obj.set_readonly("true");
            obj.set_text("2020-04-04");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staDS_DEPT_SELFACNT","7","3","70","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("상호(법인명)");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_DEPT_SELFACNT","staDS_DEPT_SELFACNT:5","3","165","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_DAEPYO","txtDS_DEPT_SELFACNT:10","3","85","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("성명(대표자명)");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_DAEPYO","staDS_DAEPYO:5","3","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_SJC1","txtDS_DAEPYO:10","3","85","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("사업자등록번호");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_SJC1","staNO_SJC1:5","3","135","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Tab("tabData","0","36",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.tabData);
            obj.set_text("공제받지 못할 매입세액 내역/공통매입세액 안분계산내역");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("sta01","5","5",null,"22","5",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_text("공제받지 못할 매입세액 내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Grid("objGrid","5","sta01:5",null,"300","5",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("2");
            obj._setContents("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Static("sta02","5","objGrid:5",null,"22","5",null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("3");
            obj.set_text("공통매입세액 안분계산 내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Grid("objGridA","5","sta02:5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("4");
            obj._setContents("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("공통매입세액의 정산내역/납부세액 또는 환급세액 재계산내역");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Static("sta01","5","5",null,"22","5",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj.set_text("공통매입세액의 정산 내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Grid("objGridB","5","sta01:5",null,"300","5",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta02","5","objGridB:5",null,"22","5",null,null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("3");
            obj.set_text("납부세액 또는 환급세액 재계산 내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Grid("objGridC","5","sta02:5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);
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

            obj = new BindItem("item3","divSearch.form.ccboNO_TAX","value","dsSearch","NO_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctxtDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctxtDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.txtDS_DEPT_SELFACNT","value","dsList","DS_DEPT_SELFACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.txtDS_DAEPYO","value","dsList","DS_DAEPYO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.txtNO_SJC1","value","dsList","NO_SJC1");
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
        this.registerScript("DHV_BUYGROUND_SELECT.xfdl", function() {
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
        	this.fnSetParameter();
        	this.fnSetEvent();

        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);
        	this.dsSearch.setColumn(0, "CD_DEPT", this.UserInfo.CD_DEPT_SELFACNT);
        	if (!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT")))
        		this.ccfCD_DEPT.form.fnCodeFindLoad();
        	this.dsSearch.setColumn(0, "YY_WORK", this.gfnGetDate().substring(0, 4));
        	this.dsSearch.setColumn(0, "NO_TAX", "1");

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
        	this.btnCreate = this.gfnFormButtonAdd("Create", "fnCreate"); //자료생성
        	this.btnCreate.set_enable(false);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;
        	this.ctclYY_WORK = this.divSearch.form.ctclYY_WORK;
        	this.ccboNO_TAX = this.divSearch.form.ccboNO_TAX;
        	this.ctxtDT_FROM = this.divSearch.form.ctxtDT_FROM;
        	this.ctxtDT_TO = this.divSearch.form.ctxtDT_TO;

        	this.txtDS_DEPT_SELFACNT = this.divData.form.txtDS_DEPT_SELFACNT;
        	this.txtDS_DAEPYO = this.divData.form.txtDS_DAEPYO;
        	this.txtNO_SJC1 = this.divData.form.txtNO_SJC1;

        	this.dxGrid = this.divData.form.tabData.tab1.form.objGrid;
        	this.dxGridA = this.divData.form.tabData.tab1.form.objGridA;
        	this.dxGridB = this.divData.form.tabData.tab2.form.objGridB;
        	this.dxGridC = this.divData.form.tabData.tab2.form.objGridC;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHV_BUYGROUND_SELECT");
          	this.gfnGridInit(this.dxGridA, this.dsListA, "DH", "DHV_BUYGROUND_SELECT_01");
          	this.gfnGridInit(this.dxGridB, this.dsListB, "DH", "DHV_BUYGROUND_SELECT_02");
          	this.gfnGridInit(this.dxGridC, this.dsListC, "DH", "DHV_BUYGROUND_SELECT_03");

         	this.dxGridA.EnterCell = "fnGridA_EnterCell";
         	this.dxGridB.EnterCell = "fnGridB_EnterCell";
         	this.dxGridC.EnterCell = "fnGridC_EnterCell";

         	this.dxGridA.AfterEdit = "fnGridA_AfterEdit";
         	this.dxGridB.AfterEdit = "fnGridB_AfterEdit";
         	this.dxGridC.AfterEdit = "fnGridC_AfterEdit";

        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsSelect.addColumn("DT_START", "string");
        	this.dsSelect.addColumn("DT_END", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsInsert.addColumn("DT_START", "string");
        	this.dsInsert.addColumn("DT_END", "string");
        	this.dsInsert.addColumn("CD_CODE", "string");
        	this.dsInsert.addColumn("AM_1", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_2", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_3", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_4", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_5", "BIGDECIMAL");
        	this.dsInsert.addColumn("ID_NO", "string");

        	this.dsExcute = new Dataset();
        	this.dsExcute.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsExcute.addColumn("DT_START", "string");
        	this.dsExcute.addColumn("DT_END", "string");
        	this.dsExcute.addColumn("YR_TAX", "string");
        	this.dsExcute.addColumn("NO_TAX", "int");

        	this.dsSelectUser = new Dataset();
        	this.dsSelectUser.addColumn("ID_USER", "string");
        	this.dsSelectUser.addColumn("CD_DEPT", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);
        	this.gfnGridBeforeSelect(this.dxGridA);
        	this.gfnGridBeforeSelect(this.dxGridB);
        	this.gfnGridBeforeSelect(this.dxGridC);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsSelect.setColumn(0, "DT_START", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_FROM"), "-", ""));
        	this.dsSelect.setColumn(0, "DT_END", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_TO"), "-", ""));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect a_select=dsSelect";
        	var outData     = "dsList=select0 dsResult=a_select0";
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

        this.fnSave = function() {
        	this.dxGridA.updateToDataset();
        	this.dxGridB.updateToDataset();
        	this.dxGridC.updateToDataset();

        	this.dsInsert.clearData();

        	for (var i = 0; i < this.dsListA.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListA, i);
        		switch(flag) {
        			case "U":
        				if (this.dsListA.getColumn(i, "CD_CODE") == "합계") continue;

        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT"));
        				this.dsInsert.setColumn(nrow, "DT_START", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_FROM"), "-", ""));
        				this.dsInsert.setColumn(nrow, "DT_END", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_TO"), "-", ""));
        				this.dsInsert.setColumn(nrow, "CD_CODE", "A");
        				this.dsInsert.setColumn(nrow, "AM_1", this.dsListA.getColumn(i, "AM_1"));
        				this.dsInsert.setColumn(nrow, "AM_2", this.dsListA.getColumn(i, "AM_2"));
        				this.dsInsert.setColumn(nrow, "AM_3", this.dsListA.getColumn(i, "AM_3"));
        				this.dsInsert.setColumn(nrow, "AM_4", this.dsListA.getColumn(i, "AM_4"));
        				this.dsInsert.setColumn(nrow, "AM_5", this.dsListA.getColumn(i, "AM_5"));
        				this.dsInsert.setColumn(nrow, "ID_NO", this.dsListA.getColumn(i, "ID_NO"));
        				break;
        		}
        	}

        	for (var i = 0; i < this.dsListB.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListB, i);
        		switch(flag) {
        			case "U":
        				if (this.dsListB.getColumn(i, "CD_CODE") == "합계") continue;

        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT"));
        				this.dsInsert.setColumn(nrow, "DT_START", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_FROM"), "-", ""));
        				this.dsInsert.setColumn(nrow, "DT_END", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_TO"), "-", ""));
        				this.dsInsert.setColumn(nrow, "CD_CODE", "B");
        				this.dsInsert.setColumn(nrow, "AM_1", this.dsListB.getColumn(i, "AM_1"));
        				this.dsInsert.setColumn(nrow, "AM_2", this.dsListB.getColumn(i, "AM_2"));
        				this.dsInsert.setColumn(nrow, "AM_3", this.dsListB.getColumn(i, "AM_3"));
        				this.dsInsert.setColumn(nrow, "AM_4", this.dsListB.getColumn(i, "AM_4"));
        				this.dsInsert.setColumn(nrow, "AM_5", this.dsListB.getColumn(i, "AM_5"));
        				this.dsInsert.setColumn(nrow, "ID_NO", this.dsListB.getColumn(i, "ID_NO"));
        				break;
        		}
        	}

        	for (var i = 0; i < this.dsListC.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListC, i);
        		switch(flag) {
        			case "U":
        				if (this.dsListC.getColumn(i, "CD_CODE") == "합계") continue;

        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT"));
        				this.dsInsert.setColumn(nrow, "DT_START", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_FROM"), "-", ""));
        				this.dsInsert.setColumn(nrow, "DT_END", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_TO"), "-", ""));
        				this.dsInsert.setColumn(nrow, "CD_CODE", "C");
        				this.dsInsert.setColumn(nrow, "AM_1", this.dsListC.getColumn(i, "AM_1"));
        				this.dsInsert.setColumn(nrow, "AM_2", this.dsListC.getColumn(i, "AM_2"));
        				this.dsInsert.setColumn(nrow, "AM_3", this.dsListC.getColumn(i, "AM_3"));
        				this.dsInsert.setColumn(nrow, "AM_4", this.dsListC.getColumn(i, "AM_4"));
        				this.dsInsert.setColumn(nrow, "AM_5", this.dsListC.getColumn(i, "AM_5"));
        				this.dsInsert.setColumn(nrow, "ID_NO", this.dsListC.getColumn(i, "ID_NO"));
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert";
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
        	switch (this.divData.form.tabData.tabindex) {
        		case 0:
        			this.gfnExcelExport(this.dxGrid);
        			break;
        		case 1:
        			this.gfnExcelExport(this.dxGrid3);
        			break;
        	}
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
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_DEPT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("세무단위를 입력하세요.", "fnVaidateCallback");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YY_WORK"))) {
        		this.fnVaidateCallback = function() {
        			this.ctclYY_WORK.form.TextBox.setFocus();
        		}
        		this.gfnAlert("작성년도를 입력하세요.", "fnVaidateCallback");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "NO_TAX"))) {
        		this.fnVaidateCallback = function() {
        			this.ccboNO_TAX.setFocus();
        		}
        		this.gfnAlert("작성기수를 입력하세요.", "fnVaidateCallback");
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
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "select") {
        	    this.gfnGridAfterSelect(this.dxGrid);
        // 		this.gfnGridAfterSelect(this.dxGridA);
        // 		this.gfnGridAfterSelect(this.dxGridB);
        // 		this.gfnGridAfterSelect(this.dxGridC);

        		this.btnCreate.set_enable(true);

        		this.dsListA.clearData();
        		this.dsListB.clearData();
        		this.dsListC.clearData();

        		if (this.dsList.rowcount > 0) {
        			if (this.dsResult.rowcount > 0) {
        				for (var i=0; i<this.dsResult.colcount; i++) {
         					this.dsListA.addColumn(this.dsResult.getColID(i), this.dsResult.getColumnInfo(i).type);
         					this.dsListB.addColumn(this.dsResult.getColID(i), this.dsResult.getColumnInfo(i).type);
         					this.dsListC.addColumn(this.dsResult.getColID(i), this.dsResult.getColumnInfo(i).type);
        				}

        				this.dsListA.set_enableevent(false);
        				this.dsListB.set_enableevent(false);
        				this.dsListC.set_enableevent(false);

        				for (var i=0; i<this.dsResult.rowcount; i++) {
        					var flg = this.dsResult.getColumn(i, "CD_CODE").substr(0, 1);

        					switch (flg) {
        						case "A":
        							var nRowA = this.dsListA.addRow();
        							this.dsListA.copyRow(nRowA, this.dsResult, i);
        							this.dsListA.setColumn(nRowA, "CD_CODE", nRowA+1);
        							break;
        						case "B":
        							var nRowB = this.dsListB.addRow();
        							this.dsListB.copyRow(nRowB, this.dsResult, i);
        							this.dsListB.setColumn(nRowB, "CD_CODE", nRowB+1);
        							break;
        						case "C":
        							var nRowC = this.dsListC.addRow();
        							this.dsListC.copyRow(nRowC, this.dsResult, i);
        							this.dsListC.setColumn(nRowC, "CD_CODE", nRowC+1);
        							break;
        					}
        				}

        				if (this.dsListB.rowcount > 0) {
        					var nRowB = this.dsListB.addRow();
        					this.dsListB.setColumn(nRowB, "CD_CODE", "합계");
        					this.dsListB.setColumn(nRowB, "AM_1", 0);
        					this.dsListB.setColumn(nRowB, "AM_2", 0);
        					this.dsListB.setColumn(nRowB, "AM_3", 0);
        					this.dsListB.setColumn(nRowB, "AM_4", 0);
        					this.dsListB.setColumn(nRowB, "AM_5", 0);
        				}
        				if (this.dsListC.rowcount > 0) {
        					var nRowC = this.dsListC.addRow();
        					this.dsListC.setColumn(nRowC, "CD_CODE", "합계");
        					this.dsListC.setColumn(nRowC, "AM_1", 0);
        					this.dsListC.setColumn(nRowC, "AM_2", 0);
        					this.dsListC.setColumn(nRowC, "AM_3", 0);
        					this.dsListC.setColumn(nRowC, "AM_4", 0);
        					this.dsListC.setColumn(nRowC, "AM_5", 0);
        				}

        				//this.fnAMSumCalcA();
        				this.fnAMSumCalcB();
        				this.fnAMSumCalcC();
        			}
        			else {
        // 				var nRowA = this.dsListA.addRow();
        // 				this.dsListA.setColumn(nRowA, "CD_CODE", 1);
        // 				this.dsListA.setColumn(nRowA, "AM_1", 0);
        // 				this.dsListA.setColumn(nRowA, "AM_2", 0);
        // 				this.dsListA.setColumn(nRowA, "AM_3", 0);
        // 				this.dsListA.setColumn(nRowA, "AM_4", 0);
        // 				this.dsListA.setColumn(nRowA, "AM_5", 0);
        			}
        			this.dsListA.set_enableevent(true);
        			this.dsListB.set_enableevent(true);
        			this.dsListC.set_enableevent(true);

        		}
        	}
        	else if (svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == "create") {
        		if (errorCode == 0) {
        			this.fnExecute_callback = function() {
        				this.FormBtns.Select.click();
        			}
        			this.gfnAlert("자료생성 작업이 완료되었습니다.", "fnExecute_callback");
        		}
        		else {
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
        this.fnGridA_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);
        	var am1 = this.dsListA.getColumn(row, "AM_1");
        	if (am1 != 0 && colnm == "AM_5") {
        		return true;
        	}
        	else {
        		return false;
        	}
        }

        this.fnGridB_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);
        	if (this.dsListB.getColumn(row, "CD_CODE") == "합계") {
        		return false;
        	}

        	//if (colnm == "AM_1" || colnm == "AM_2" || colnm == "AM_3" || colnm == "AM_4" || colnm == "AM_5") {
        	if (colnm == "AM_1" || colnm == "AM_2" || colnm == "AM_4") {
        		return true;
        	}
        	else {
        		return false;
        	}
        }

        this.fnGridC_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);
        	if (this.dsListB.getColumn(row, "CD_CODE") == "합계") {
        		return false;
        	}

        	if (colnm == "AM_1" || colnm == "AM_2" || colnm == "AM_3") {
        		return true;
        	}
        	else {
        		return false;
        	}
        }

        this.fnGridA_AfterEdit = function(obj,e) {
        	//this.gfnSetFormStatus(this, "I");
        	//this.dsListA.setColumn(e.row, this.ucFlag, "I");
        }

        this.fnGridB_AfterEdit = function(obj,e) {
        	//this.gfnSetFormStatus(this, "I");
        	//this.dsListB.setColumn(e.row, this.ucFlag, "I");

        	if (e.columnid == "AM_1" || e.columnid == "AM_2" || e.columnid == "AM_3" || e.columnid == "AM_4" || e.columnid == "AM_5") {
        		this.fnAMSumCalcB();
        	}
        }

        this.fnGridC_AfterEdit = function(obj,e) {
        	//this.gfnSetFormStatus(this, "I");
        	//this.dsListB.setColumn(e.row, this.ucFlag, "C");

        	if (e.columnid == "AM_1" || e.columnid == "AM_2" || e.columnid == "AM_3") {
        		this.fnAMSumCalcC();
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
         		this.gfnGridClear(this.dxGridA);
         		this.gfnGridClear(this.dxGridB);
         		this.gfnGridClear(this.dxGridC);

        		this.btnCreate.set_enable(false);

        		switch(e.columnid) {
        			case "YY_WORK" :
        			case "NO_TAX" :
        				this.fnMagamSetting();
        				break;
        		}
        	}
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
        				dtFrom = ymMagam + "-01-01";
        				dtTo = ymMagam + "-03-31";
        				break;
        			case "2" :
        				dtFrom = ymMagam + "-04-01";
        				dtTo = ymMagam + "-06-30";
        				break;
        			case "3" :
        				dtFrom = ymMagam + "-07-01";
        				dtTo = ymMagam + "-09-30";
        				break;
        			case "4" :
        				dtFrom = ymMagam + "-10-01";
        				dtTo = ymMagam + "-12-31";
        				break;
        			default :
        				dtFrom = "";
        				dtTo = "";
        				break;
        		}
        	}

        	this.dsSearch.set_enableevent(false);
        	this.dsSearch.setColumn(0, "DT_FROM", dtFrom);
        	this.dsSearch.setColumn(0, "DT_TO", dtTo);
        	this.dsSearch.set_enableevent(true);
        }

        this.fnAMSumCalcA = function() {
        	if (this.dsListA.rowcount > 0) {
        		var nrow = this.dsListA.addRow();

        		this.dsListA.setColumn(nrow, "CD_CODE", "합계");
        		this.dsListA.setColumn(nrow, "AM_1", this.dsListA.getSum("AM_1"));
        		this.dsListA.setColumn(nrow, "AM_2", this.dsListA.getSum("AM_2"));
        		this.dsListA.setColumn(nrow, "AM_3", this.dsListA.getSum("AM_3"));
        		this.dsListA.setColumn(nrow, "AM_4", this.dsListA.getSum("AM_4"));
        		this.dsListA.setColumn(nrow, "AM_5", this.dsListA.getSum("AM_5"));
        	}
        }

        this.fnAMSumCalcB = function() {
        	if (this.dsListB.rowcount > 0) {
        		var d = nexacro.toNumber(this.dsListB.getColumn(this.dsListB.rowposition, "AM_1"), 0) * (nexacro.toNumber(this.dsListB.getColumn(this.dsListB.rowposition, "AM_2"), 0) / 100);
        		this.dsListB.setColumn(this.dsListB.rowposition, "AM_3", d);
        		this.dsListB.setColumn(this.dsListB.rowposition, "AM_5", d - nexacro.toNumber(this.dsListB.getColumn(this.dsListB.rowposition, "AM_4"), 0));
        	}
        	else
        		return;

        	//var dt1 = nexacro.toNumber(this.dsListB.getColumn(0, "AM_1"), 0) + nexacro.toNumber(this.dsListB.getColumn(1, "AM_1"), 0);
        	var sum1 = this.dsListB.getCaseSum("CD_CODE != '합계'", "AM_1");
        	var sum3 = this.dsListB.getCaseSum("CD_CODE != '합계'", "AM_3");
        	var sum4 = this.dsListB.getCaseSum("CD_CODE != '합계'", "AM_4");
        	var sum5 = this.dsListB.getCaseSum("CD_CODE != '합계'", "AM_5");
        	this.dsListB.setColumn(this.dsListB.rowcount-1, "AM_1", sum1);

        	if (nexacro.toNumber(this.dsListB.getColumn(0, "AM_2"), 0) > 0)
        		this.dsListB.setColumn(this.dsListB.rowcount-1, "AM_2", sum1 / 2);
        	else
        		this.dsListB.setColumn(this.dsListB.rowcount-1, "AM_2", this.dsListB.getColumn(0, "AM_2"));

        	this.dsListB.setColumn(this.dsListB.rowcount-1, "AM_3", sum3);
        	this.dsListB.setColumn(this.dsListB.rowcount-1, "AM_4", sum4);
        	this.dsListB.setColumn(this.dsListB.rowcount-1, "AM_5", sum5);
        }

        this.fnAMSumCalcC = function() {
        	if (this.dsListC.rowcount > 0) {
        		var d1 = nexacro.toNumber(this.dsListC.getColumn(this.dsListC.rowposition, "AM_1"), 0)
        				* nexacro.toNumber(this.dsListC.getColumn(this.dsListC.rowposition, "AM_2"), 0)
        				* nexacro.toNumber(this.dsListC.getColumn(this.dsListC.rowposition, "AM_3"), 0);
        		this.dsListC.setColumn(this.dsListC.rowposition, "AM_4", d1);
        	}

        	var sum = this.dsListC.getCaseSum("CD_CODE != '합계'", "AM_4");
        	this.dsListC.setColumn(this.dsListC.rowcount-1, "AM_4", sum);
        }

        this.fnCreate = function(obj,e) {
        	this.gfnConfirm("초기화 후 데이터를 생성합니다.\n작업을 진행하시겠습니까?", "fnCreate_callBack");
        }

        this.fnCreate_callBack = function(strId, val) {
        	if(val == false) return;

        	this.dsExcute.clearData();
        	this.dsExcute.addRow();

        	this.dsExcute.setColumn(0, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsExcute.setColumn(0, "DT_START", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_FROM"), "-", ""));
        	this.dsExcute.setColumn(0, "DT_END", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_TO"), "-", ""));
        	this.dsExcute.setColumn(0, "YR_TAX", this.dsSearch.getColumn(0, "YY_WORK"));
        	this.dsExcute.setColumn(0, "NO_TAX", this.dsSearch.getColumn(0, "NO_TAX"));

        	var strSvcId    = "create";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "create=dsExcute";
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHV_BUYGROUND_SELECT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
