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
            obj._setContents("<ColumnInfo><Column id=\"DS_UPMU\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DOCU\" type=\"STRING\" size=\"256\"/><Column id=\"SZ_PYONG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TY_PYONG\" type=\"STRING\" size=\"256\"/><Column id=\"NM_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"RM_BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"SN_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LINK\" type=\"STRING\" size=\"256\"/><Column id=\"TY_UPMU\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DOCU\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBZPR_PJDOCU_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DBZPR_PJDOCU_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DBZPR_PJDOCU_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DBZPR_PJDOCU_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_UPMU\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DOCU\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fdg00", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staTY_UPMU","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("점검업무");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfTY_UPMU","staTY_UPMU:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFCOMM");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_DOCU","ccfTY_UPMU:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("양식구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfTY_DOCU","staTY_DOCU:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFCOMM");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,"185","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","25",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("표준양식등록");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTY_UPMU","0","staTITLE:5","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("점검업무");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgTY_UPMU","staTY_UPMU:-1","staTITLE:5",null,"30","45%",null,"210",null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTY_DOCU","staBgTY_UPMU:-1","staTITLE:5","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("3");
            obj.set_text("양식구분");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgTY_DOCU","staTY_DOCU:-1","staTITLE:5",null,"30","0",null,"210",null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staSZ_PYONG","0","staTY_UPMU:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("5");
            obj.set_text("평형구분");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgSZ_PYONG","staSZ_PYONG:-1","staBgTY_UPMU:-1",null,"30","45%",null,"210",null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTY_PYONG","staBgSZ_PYONG:-1","staTY_DOCU:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("7");
            obj.set_text("평형타입");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgTY_PYONG","staTY_PYONG:-1","staTY_UPMU:-1",null,"30","0",null,"210",null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staFILE_DOCU","0","staSZ_PYONG:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("9");
            obj.set_text("등록양식");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgFILE_DOCU","staFILE_DOCU:-1","staBgSZ_PYONG:-1",null,"30","0",null,"518",null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staRM_BIGO","0","staFILE_DOCU:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("11");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgRM_BIGO","staRM_BIGO:-1","staBgFILE_DOCU:-1",null,"30","0",null,"518",null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("ccfTY_UPMU","staTY_UPMU:5","staTITLE:10","200","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.getSetter("CodeFindName").set("DBX_CFCOMM");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("13");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("ccfTY_DOCU","staTY_DOCU:5","staTITLE:10","200","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.getSetter("CodeFindName").set("DBX_CFCOMM");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("14");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtSZ_PYONG","staSZ_PYONG:5","ccfTY_UPMU:9","200","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("15");
            obj.set_value("");
            obj.set_inputtype("number");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtTY_PYONG","staTY_PYONG:5","ccfTY_DOCU:9","200","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("16");
            obj.set_value("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtFILE_DOCU","staFILE_DOCU:5","ctxtSZ_PYONG:9","250","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("17");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Button("btnFILE_DOCU","ctxtFILE_DOCU:10","ctxtTY_PYONG:9","80","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("18");
            obj.set_text("찾아보기");
            obj.set_enable("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtRM_BIGO","staRM_BIGO:5","ctxtFILE_DOCU:9","350","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("19");
            obj.set_value("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divDataTop:0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","25",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("표준양식");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","staTITLE:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnFileDownload",null,"5","120","24","0",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("2");
            obj.set_text("FILEDOWNLOAD");
            this.divData.form.divDataBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfTY_UPMU.form.CDTextBox","value","dsSearch","TY_UPMU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfTY_DOCU.form.CDTextBox","value","dsSearch","TY_DOCU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divDataTop.form.ccfTY_UPMU.form.CDTextBox","value","dsList","TY_UPMU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divDataTop.form.ccfTY_UPMU.form.DSTextBox","value","dsList","DS_UPMU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataTop.form.ccfTY_DOCU.form.CDTextBox","value","dsList","TY_DOCU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataTop.form.ccfTY_DOCU.form.DSTextBox","value","dsList","DS_DOCU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataTop.form.ctxtSZ_PYONG","value","dsList","SZ_PYONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataTop.form.ctxtTY_PYONG","value","dsList","TY_PYONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataTop.form.ctxtFILE_DOCU","value","dsList","NM_FILE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataTop.form.ctxtRM_BIGO","value","dsList","RM_BIGO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DBZ_PJDOCU.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//
        	this.fileConfig = this.gfnGetFileConfig();

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
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.divDataBottom.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.divSearch.form.ccfTY_UPMU.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.divSearch.form.ccfTY_DOCU.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.divData.form.divDataTop.form.ccfTY_UPMU.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.divData.form.divDataTop.form.ccfTY_DOCU.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DB", "DBZ_SITEDOCU");

        	this.dxGrid.addEventHandler("oncelldblclick", this.fnGrid_CellDblclick, this);
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_UPMU", "string");
        	this.dsSelect.addColumn("TY_DOCU", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("TY_UPMU", "string");
        	this.dsInsert.addColumn("TY_DOCU", "string");
        	this.dsInsert.addColumn("SZ_PYONG", "bigdecimal");
        	this.dsInsert.addColumn("TY_PYONG", "string");
        	this.dsInsert.addColumn("NM_FILE", "string");
        	this.dsInsert.addColumn("RM_BIGO", "string");
        	this.dsInsert.addColumn("DS_PATH", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("TY_UPMU", "string");
        	this.dsUpdate.addColumn("TY_DOCU", "string");
        	this.dsUpdate.addColumn("SN_SEQ", "string");
        	this.dsUpdate.addColumn("SZ_PYONG", "bigdecimal");
        	this.dsUpdate.addColumn("TY_PYONG", "string");
        	this.dsUpdate.addColumn("RM_BIGO", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("TY_UPMU", "string");
        	this.dsDelete.addColumn("TY_DOCU", "string");
        	this.dsDelete.addColumn("SN_SEQ", "string");
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

        	this.dsSelect.setColumn(0, "TY_UPMU", this.gfnIsNull(this.dsSearch.getColumn(0, "TY_UPMU")) == true ? "%" : this.dsSearch.getColumn(0, "TY_UPMU"));
        	this.dsSelect.setColumn(0, "TY_DOCU", this.gfnIsNull(this.dsSearch.getColumn(0, "TY_DOCU")) == true ? "%" : this.dsSearch.getColumn(0, "TY_DOCU"));

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
        	this.dsList.setColumn(nrow, "TY_UPMU", this.dsSearch.getColumn(0, "TY_UPMU"));
        	this.dsList.setColumn(nrow, "DS_UPMU", this.divSearch.form.ccfTY_UPMU.form.DSTextBox.text);
        	this.dsList.setColumn(nrow, "TY_DOCU", this.dsSearch.getColumn(0, "TY_DOCU"));
        	this.dsList.setColumn(nrow, "DS_DOCU", this.divSearch.form.ccfTY_DOCU.form.DSTextBox.text);
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
        				this.dsInsert.setColumn(nrow, "TY_UPMU", this.dsList.getColumn(i, "TY_UPMU"));
        				this.dsInsert.setColumn(nrow, "TY_DOCU", this.dsList.getColumn(i, "TY_DOCU"));
        				this.dsInsert.setColumn(nrow, "SZ_PYONG", this.dsList.getColumn(i, "SZ_PYONG"));
        				this.dsInsert.setColumn(nrow, "TY_PYONG", this.dsList.getColumn(i, "TY_PYONG"));
        				this.dsInsert.setColumn(nrow, "NM_FILE", this.dsList.getColumn(i, "NM_FILE"));
        				this.dsInsert.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsInsert.setColumn(nrow, "DS_PATH", this.dsList.getColumn(i, "DS_PATH"));
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "TY_UPMU", this.dsList.getColumn(i, "TY_UPMU"));
        				this.dsUpdate.setColumn(nrow, "TY_DOCU", this.dsList.getColumn(i, "TY_DOCU"));
        				this.dsUpdate.setColumn(nrow, "SN_SEQ", this.dsList.getColumn(i, "SN_SEQ"));
        				this.dsUpdate.setColumn(nrow, "SZ_PYONG", this.dsList.getColumn(i, "SZ_PYONG"));
        				this.dsUpdate.setColumn(nrow, "TY_PYONG", this.dsList.getColumn(i, "TY_PYONG"));
        				this.dsUpdate.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "TY_UPMU", this.dsList.getColumn(i, "TY_UPMU"));
        				this.dsDelete.setColumn(nrow, "TY_DOCU", this.dsList.getColumn(i, "TY_DOCU"));
        				this.dsDelete.setColumn(nrow, "SN_SEQ", this.dsList.getColumn(i, "SN_SEQ"));
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
        	/*
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SYSTEM"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SYSTEM.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("시스템을 입력하세요.", "fnVaidateCallback");
        	}
        	*/
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
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfTY_UPMU") {
        		dsUserParam.setColumn(nrow, "CD_GUBUN", "S2");
        	}
        	else if (id == "ccfTY_DOCU") {
        		dsUserParam.setColumn(nrow, "CD_GUBUN", "S7");
        	}
        	return true;
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_CellDblclick = function(obj,e)
         {
        	this.fnDownload();
         }

         this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {

        		var flag = this.dsList.getColumn(this.dsList.rowposition, this.ucFlag);
        		if(flag != "I")
        		{
        			this.divData.form.divDataTop.form.ccfTY_UPMU.set_enable(false);
        			this.divData.form.divDataTop.form.ccfTY_DOCU.set_enable(false);
        			this.divData.form.divDataTop.form.btnFILE_DOCU.set_enable(false);
        		}
        		else
        		{
        			this.divData.form.divDataTop.form.ccfTY_UPMU.set_enable(true);
        			this.divData.form.divDataTop.form.ccfTY_DOCU.set_enable(true);
        			this.divData.form.divDataTop.form.btnFILE_DOCU.set_enable(true);
        		}
        		obj.oldrow = -1;
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		//this.gfnGridClear(this.dxGrid);
        	}
        };


        this.divData_divDataTop_btnFILE_DOCU_onclick = function(obj,e)
        {
        	this.fdg00.open('FileOpen', FileDialog.SAVE);
        };


        /* 아래부터는 파일관련 */
        this.fdg00_onclose = function(obj,e)
        {
        	this.addFileList(obj, e.virtualfiles);
        };


        this.addFileList = function(obj, filelist)
        {
        	this.FileList = filelist;
        	if(filelist.length > 0) {
        		var vFile;
        		for (var i = 0; i < filelist.length; i++)
        		{
        			vFile = filelist[i];
        			vFile.addEventHandler("onsuccess", this.FileList_onsuccess, this);
        			vFile.addEventHandler("onerror", this.FileList_onerror , this);

        			vFile.open(null, 1);
        		}
        	}
        }

        this.FileList_onsuccess = function(obj, e)
        {
        	switch (e.reason)
        	{
        		case 1:
        			obj.getFileSize();
        			break;
        		case 9:
        			this.filepath = "/DB/";
        			this.FileUpTransfer00.addFile(obj.filename, obj);
        			this._waitCursor(true);
        			var sUploadUrl = this.fileConfig.host + this.fileConfig.uploadUrl;
        			this.FileUpTransfer00.setPostData("path", this.filepath);
        			this.FileUpTransfer00.upload(sUploadUrl);
        			break;
        	}
        }

        this.FileList_onerror = function(obj, e)
        {
        	trace("errortype: "+e.errortype);
        	trace("errormsg: "+e.errormsg);
        	trace("statuscode: "+e.statuscode);
        }

        this.FileUpTransfer00_onprogress = function(obj,e)
        {
        	trace("FileUpTransfer00_onprogress: " + e.loaded+"/"+e.total);
        };

        this.FileUpTransfer00_onsuccess = function(obj,e)
        {
        	this._waitCursor(false);
        	trace("FileUpTransfer00_onsuccess: " + e.code + "/" + e.message);
        	if(e.code == 0) {
        		if(e.datasets.length > 0) {
        // 			for(var i = 0; i < e.datasets[0].rowcount; i++) {
        // 				var row = obj.filelist[i].row;
        // 				this.dsList.setColumn(row, "FILE_SIZ", e.datasets[0].getColumn(i, "filesize"));
        // 				this.dsList.setColumn(row, "FILE_HASH", e.datasets[0].getColumn(i, "filehash"));
        // 			}

        // 			// 무조건 단건이니까 이렇게 처리해보았..
        // 			var fileNm = e.datasets[0].getColumn(0, "filename");
        // 			var fileSize = e.datasets[0].getColumn(0, "filesize");
        // 			var fileHash = e.datasets[0].getColumn(0, "filehash");

        			this.dsList.setColumn(this.dsList.rowposition, "NM_FILE", e.datasets[0].getColumn(0, "filename"));
        			this.dsList.setColumn(this.dsList.rowposition, "DS_PATH", this.filepath);
        		}
        	}
        };


        this.fnDownload = function() {
        	if(!this.gfnIsNull(this.gfnGetFlag(this.dsList, this.dsList.rowposition))) return;
        	if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "NM_FILE"))) return;

        	var sFilename = this.dsList.getColumn(this.dsList.rowposition, "NM_FILE");
        	var sFilepath = this.dsList.getColumn(this.dsList.rowposition, "DS_PATH");
        	var encodeFileName = encodeURIComponent(sFilename);

        	var surl = this.fileConfig.host+ this.fileConfig.downloadUrl;
        	this.FileDownTransfer00.set_url(surl);
        	this.FileDownTransfer00.setPostData("path", sFilepath);
        	this.FileDownTransfer00.setPostData("fileName", encodeFileName);
        	if( system.navigatorname =="nexacro"){
        		this.FileDownTransfer00.set_downloadfilename(sFilename);
        	}

        	this.FileDownTransfer00.download();
        };

        // 파일 다운로드 버튼
        this.divData_divDataBottom_btnFileDownload_onclick = function(obj,e)
        {
        	this.fnDownload();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.divDataTop.form.btnFILE_DOCU.addEventHandler("onclick",this.divData_divDataTop_btnFILE_DOCU_onclick,this);
            this.divData.form.divDataBottom.form.btnFileDownload.addEventHandler("onclick",this.divData_divDataBottom_btnFileDownload_onclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.fdg00.addEventHandler("onclose",this.fdg00_onclose,this);
            this.FileUpTransfer00.addEventHandler("onprogress",this.FileUpTransfer00_onprogress,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
        };
        this.loadIncludeScript("DBZ_PJDOCU.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
