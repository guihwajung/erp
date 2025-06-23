(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DWA_SITEBUDGET");
            this.set_titletext("실행EXCEL가져오기");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_DKCOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ITEM\" type=\"STRING\" size=\"256\"/><Column id=\"SZ_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GBIMOK\" type=\"STRING\" size=\"256\"/><Column id=\"QN_DESIGN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UP_DESIGN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_DESIGN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"QN_TT_DOKUB\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UP_TT_DOKUB\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TT_DOKUB\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"QN_EXSILHENG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UP_EXSILHENG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_EXSILHENG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"QN_TT_SILHENG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UP_TT_SILHENG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TT_SILHENG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_STCOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_STDCOST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_RP\" type=\"STRING\" size=\"256\"/><Column id=\"NM_RP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_STD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_STD\" type=\"STRING\" size=\"256\"/><Column id=\"RM_BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"ERR_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COST1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COST2\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COST3\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COST4\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COST5\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COST6\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COST7\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COST8\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COST9\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COST10\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COST11\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COST12\" type=\"STRING\" size=\"256\"/><Column id=\"nx_flag\" type=\"STRING\" size=\"32\"/><Column id=\"QN_EXDOKUB\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UP_EXDOKUB\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_EXDOKUB\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWAPR_RISKEXCEL_SELECT</Col></Row><Row><Col id=\"SP\">DWAPR_RISKEXCEL_INSERT</Col><Col id=\"TARGET\">init</Col></Row><Row><Col id=\"SP\">DWAPR_RISKEXCEL_SAVE</Col><Col id=\"TARGET\">save</Col></Row><Row><Col id=\"SP\">DWAPR_RISKEXCEL_INSERTERROR</Col><Col id=\"TARGET\">save0</Col></Row><Row><Col id=\"TARGET\">save1</Col><Col id=\"SP\">DWAPR_RISKEXCEL_INSERTCHANGE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DWAPR_RISKEXCEL_DELETE</Col></Row><Row><Col id=\"TARGET\">gubun</Col><Col id=\"SP\">DWAPR_SILHENG_LAST_GUBUN</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"ONLY_ERROR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_RISK\" type=\"STRING\" size=\"256\"/><Column id=\"NM_RISK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_DKCOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ITEM\" type=\"STRING\" size=\"256\"/><Column id=\"SZ_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GBIMOK\" type=\"STRING\" size=\"256\"/><Column id=\"QN_DESIGN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UP_DESIGN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_DESIGN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"QN_TT_DOKUB\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UP_TT_DOKUB\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TT_DOKUB\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"QN_EXSILHENG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UP_EXSILHENG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_EXSILHENG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"QN_TT_SILHENG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UP_TT_SILHENG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TT_SILHENG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_STCOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_STDCOST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_RP\" type=\"STRING\" size=\"256\"/><Column id=\"NM_RP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_STD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_STD\" type=\"STRING\" size=\"256\"/><Column id=\"RM_BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"ERR_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COST1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COST2\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COST3\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COST4\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COST5\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COST6\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COST7\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COST8\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COST9\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COST10\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COST11\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COST12\" type=\"STRING\" size=\"256\"/><Column id=\"nx_flag\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGubunResult", this);
            obj._setContents("<ColumnInfo><Column id=\"BTN_EXCELUPLOAD_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_SYSTEM","0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.getSetter("readonly").set("true");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM","ccfCD_SYSTEM:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_RISK","ccfCD_SYSTEM:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("리스크번호");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_RISK","staNO_RISK:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DWX_CFRISK_01");
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkONLY_ERROR","ccfNO_RISK:0.0","10.0","110","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("오류내역만 조회");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
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

            obj = new Grid("objGrid2","0","410",null,null,"0","-410",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SYSTEM.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.chkONLY_ERROR","value","dsSearch","ONLY_ERROR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfNO_RISK.form.CDTextBox","value","dsSearch","NO_RISK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DWA_FROMEXCEL_RISK.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.uploadYn = false;
        this.saveapply = false;

        this.DWA_SITEBUDGET_onload = function(obj,e)
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

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().NO_RISK)) {

        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);	// 현장코드
        		this.ccfCD_SYSTEM.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);	// 현장코드명
        		this.ccfCD_SYSTEM.form.fnFitToContents();
        		this.dsSearch.setColumn(0, "NO_RISK", this.getOwnerFrame().NO_RISK);
        		this.dsSearch.setColumn(0, "NM_RISK", this.getOwnerFrame().NM_RISK);
        		this.ccfNO_RISK.form.fnFitToContents();

        		//this.fnExcelDelete();
        		this.fnExcelInit();
        		//this.fnSelectGubun();
        	}

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        // 	var id_group = this.FormInfo.ID_GROUP;
        // 	var gr_search = this.FormInfo.GR_SEARCH;
        // 	var cd_role = this.FormInfo.CD_ROLE;


        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	/*this.btn1 = this.gfnFormButtonAdd("btnIEMS", "fnIEMSUpLoad");*/
        	this.btn2 = this.gfnFormButtonAdd("btnExcel", "fnExcelLoad");
        	this.btn3 = this.gfnFormButtonAdd("btnApply", "fnApply");
        	this.btn4 = this.gfnFormButtonAdd("btnExcelDown", "fnExcelDown");

        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Save.set_enable(false);
        	this.FormBtns.Excel.set_enable(false);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SYSTEM = this.divSearch.form.ccfCD_SYSTEM;
        	this.ccfNO_RISK = this.divSearch.form.ccfNO_RISK;
        	this.dxGrid = this.divData.form.objGrid;
        	this.dxGrid2 = this.divData.form.objGrid2;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_SYSTEM.CodeFindName = "DWX_CFSITE"
        	this.ccfNO_RISK.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWA_FROMEXCEL_RISK");
        	this.gfnGridInit(this.dxGrid2, this.dsExcelList, "DW", "DWA_FROMEXCEL_RISK");

        }
        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsInit = new Dataset();
        	this.dsInit.addColumn("CD_SITE", "string");
        	this.dsInit.addColumn("NO_RISK", "string");

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("NO_RISK", "string");
        	this.dsSelect.addColumn("ONLY_ERROR", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("FLAG", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("NO_RISK", "string");
        	this.dsSave.addColumn("CD_DKCOST", "string");
        	this.dsSave.addColumn("DS_ITEM", "string");
        	this.dsSave.addColumn("SZ_SIZE", "string");
        	this.dsSave.addColumn("DS_UNIT", "string");
        	this.dsSave.addColumn("CD_GBIMOK", "string");
        	this.dsSave.addColumn("QN_DESIGN", "bigdecimal");
        	this.dsSave.addColumn("UP_DESIGN", "bigdecimal");
        	this.dsSave.addColumn("AM_DESIGN", "bigdecimal");
        	this.dsSave.addColumn("QN_TT_DOKUB", "bigdecimal");
        	this.dsSave.addColumn("UP_TT_DOKUB", "bigdecimal");
        	this.dsSave.addColumn("AM_TT_DOKUB", "bigdecimal");
        	this.dsSave.addColumn("QN_EXDOKUB", "bigdecimal");
        	this.dsSave.addColumn("UP_EXDOKUB", "bigdecimal");
        	this.dsSave.addColumn("AM_EXDOKUB", "bigdecimal");
        	this.dsSave.addColumn("QN_TT_SILHENG", "bigdecimal");
        	this.dsSave.addColumn("UP_TT_SILHENG", "bigdecimal");
        	this.dsSave.addColumn("AM_TT_SILHENG", "bigdecimal");
        	this.dsSave.addColumn("QN_EXSILHENG", "bigdecimal");
        	this.dsSave.addColumn("UP_EXSILHENG", "bigdecimal");
        	this.dsSave.addColumn("AM_EXSILHENG", "bigdecimal");
        	this.dsSave.addColumn("CD_RP", "string");
        	this.dsSave.addColumn("CD_STCOST", "string");
        	this.dsSave.addColumn("RM_BIGO", "string");
        	this.dsSave.addColumn("CD_COST", "string");
        	this.dsSave.addColumn("CD_COST1", "string");
        	this.dsSave.addColumn("CD_COST2", "string");
        	this.dsSave.addColumn("CD_COST3", "string");
        	this.dsSave.addColumn("CD_COST4", "string");
        	this.dsSave.addColumn("CD_COST5", "string");
        	this.dsSave.addColumn("CD_COST6", "string");
        	this.dsSave.addColumn("CD_COST7", "string");
        	this.dsSave.addColumn("CD_COST8", "string");
        	this.dsSave.addColumn("CD_COST9", "string");
        	this.dsSave.addColumn("CD_COST10", "string");
        	this.dsSave.addColumn("CD_COST11", "string");
        	this.dsSave.addColumn("CD_COST12", "string");
        	this.dsSave.addColumn("CD_STD", "string");

        	this.dsSave.addColumn("QN_EXSILSI", "bigdecimal");
        	this.dsSave.addColumn("UP_EXSILSI", "bigdecimal");
        	this.dsSave.addColumn("AM_EXSILSI", "bigdecimal");

        	this.dsSave.addColumn("QN_TT_SILSI", "bigdecimal");
        	this.dsSave.addColumn("UP_TT_SILSI", "bigdecimal");
        	this.dsSave.addColumn("AM_TT_SILSI", "bigdecimal");

        	this.dsSave0 = new Dataset();
        	this.dsSave0.addColumn("CD_SITE", "string");
        	this.dsSave0.addColumn("NO_RISK", "string");

        	this.dsSave1 = new Dataset();
        	this.dsSave1.addColumn("CD_SITE", "string");
        	this.dsSave1.addColumn("NO_RISK", "string");
        	this.dsSave1.addColumn("ID_USER", "string");

        	this.dsDelete= new Dataset();
        	this.dsDelete.addColumn("CD_SITE", "string");
        	this.dsDelete.addColumn("NO_RISK", "string");

        	this.dsGubun= new Dataset();
        	this.dsGubun.addColumn("CD_SITE", "string");
        	this.dsGubun.addColumn("NO_RISK", "string");
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

        	this.dsSelect.setColumn(0, "CD_SITE", this.ccfCD_SYSTEM.form.CDTextBox.text);
        	this.dsSelect.setColumn(0, "NO_RISK", this.ccfNO_RISK.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "ONLY_ERROR", this.dsSearch.getColumn(0, "ONLY_ERROR") == "Y" ? "Y":"N");

        	//에러내역 조회 이후 다시 전체내역이 조회 가능하도록 변경
        	this.dsSearch.setColumn(0, "ONLY_ERROR","N");


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
        	if (!this.gfnGridValidate(this.dxGrid)) return;
        	this.dxGrid.updateToDataset();
        	this.dsSave.clearData();

        	trace("dsList.rowcount:"+this.dsList.rowcount);
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		if(flag == "I" || flag == "U" || flag == "D"){
        			trace("#### i:"+i);

        			var nrow = this.dsSave.addRow();

        			this.dsSave.setColumn(nrow, "FLAG", flag);
        			this.dsSave.setColumn(nrow, "CD_SITE", this.ccfCD_SYSTEM.form.CDTextBox.text);
        			this.dsSave.setColumn(nrow, "NO_RISK", this.ccfNO_RISK.form.CDTextBox.value);
        			this.dsSave.setColumn(nrow, "CD_DKCOST", this.dsList.getColumn(i, "CD_DKCOST"));
        			this.dsSave.setColumn(nrow, "DS_ITEM", this.dsList.getColumn(i, "DS_ITEM"));
        			this.dsSave.setColumn(nrow, "SZ_SIZE", this.dsList.getColumn(i, "SZ_SIZE"));
        			this.dsSave.setColumn(nrow, "DS_UNIT", this.dsList.getColumn(i, "DS_UNIT"));
        			this.dsSave.setColumn(nrow, "CD_GBIMOK", this.dsList.getColumn(i, "CD_GBIMOK"));
        			this.dsSave.setColumn(nrow, "QN_DESIGN", this.dsList.getColumn(i, "QN_DESIGN"));
        			this.dsSave.setColumn(nrow, "UP_DESIGN", this.dsList.getColumn(i, "UP_DESIGN"));
        			this.dsSave.setColumn(nrow, "AM_DESIGN", this.dsList.getColumn(i, "AM_DESIGN"));
        			this.dsSave.setColumn(nrow, "QN_TT_DOKUB", this.dsList.getColumn(i, "QN_TT_DOKUB"));
        			this.dsSave.setColumn(nrow, "UP_TT_DOKUB", this.dsList.getColumn(i, "UP_TT_DOKUB"));
        			this.dsSave.setColumn(nrow, "AM_TT_DOKUB", this.dsList.getColumn(i, "AM_TT_DOKUB"));
        			this.dsSave.setColumn(nrow, "QN_EXDOKUB", this.dsList.getColumn(i, "QN_EXDOKUB"));
        			this.dsSave.setColumn(nrow, "UP_EXDOKUB", this.dsList.getColumn(i, "UP_EXDOKUB"));
        			this.dsSave.setColumn(nrow, "AM_EXDOKUB", this.dsList.getColumn(i, "AM_EXDOKUB"));
        			this.dsSave.setColumn(nrow, "QN_TT_SILHENG", this.dsList.getColumn(i, "QN_TT_SILHENG"));
        			this.dsSave.setColumn(nrow, "UP_TT_SILHENG", this.dsList.getColumn(i, "UP_TT_SILHENG"));
        			this.dsSave.setColumn(nrow, "AM_TT_SILHENG", this.dsList.getColumn(i, "AM_TT_SILHENG"));
        			this.dsSave.setColumn(nrow, "QN_EXSILHENG", this.dsList.getColumn(i, "QN_EXSILHENG"));
        			this.dsSave.setColumn(nrow, "UP_EXSILHENG", this.dsList.getColumn(i, "UP_EXSILHENG"));
        			this.dsSave.setColumn(nrow, "AM_EXSILHENG", this.dsList.getColumn(i, "AM_EXSILHENG"));
        			this.dsSave.setColumn(nrow, "CD_RP", this.dsList.getColumn(i, "CD_RP"));
        			this.dsSave.setColumn(nrow, "CD_STCOST", this.dsList.getColumn(i, "CD_STCOST"));
        			this.dsSave.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        			this.dsSave.setColumn(nrow, "CD_COST", this.dsList.getColumn(i, "CD_COST"));
        			this.dsSave.setColumn(nrow, "CD_COST1", this.dsList.getColumn(i, "CD_COST1"));
        			this.dsSave.setColumn(nrow, "CD_COST2", this.dsList.getColumn(i, "CD_COST2"));
        			this.dsSave.setColumn(nrow, "CD_COST3", this.dsList.getColumn(i, "CD_COST3"));
        			this.dsSave.setColumn(nrow, "CD_COST4", this.dsList.getColumn(i, "CD_COST4"));
        			this.dsSave.setColumn(nrow, "CD_COST5", this.dsList.getColumn(i, "CD_COST5"));
        			this.dsSave.setColumn(nrow, "CD_COST6", this.dsList.getColumn(i, "CD_COST6"));
        			this.dsSave.setColumn(nrow, "CD_COST7", this.dsList.getColumn(i, "CD_COST7"));
        			this.dsSave.setColumn(nrow, "CD_COST8", this.dsList.getColumn(i, "CD_COST8"));
        			this.dsSave.setColumn(nrow, "CD_COST9", this.dsList.getColumn(i, "CD_COST9"));
        			this.dsSave.setColumn(nrow, "CD_COST10", this.dsList.getColumn(i, "CD_COST10"));
        			this.dsSave.setColumn(nrow, "CD_COST11", this.dsList.getColumn(i, "CD_COST11"));
        			this.dsSave.setColumn(nrow, "CD_COST12", this.dsList.getColumn(i, "CD_COST12"));
        			this.dsSave.setColumn(nrow, "CD_STD", this.dsList.getColumn(i, "CD_STD"));

        			this.dsSave.setColumn(nrow, "QN_EXSILSI", this.dsList.getColumn(i, "QN_EXSILSI"));
        			this.dsSave.setColumn(nrow, "UP_EXSILSI", this.dsList.getColumn(i, "UP_EXSILSI"));
        			this.dsSave.setColumn(nrow, "AM_EXSILSI", this.dsList.getColumn(i, "AM_EXSILSI"));

        			this.dsSave.setColumn(nrow, "QN_TT_SILSI", this.dsList.getColumn(i, "QN_TT_SILSI"));
        			this.dsSave.setColumn(nrow, "UP_TT_SILSI", this.dsList.getColumn(i, "UP_TT_SILSI"));
        			this.dsSave.setColumn(nrow, "AM_TT_SILSI", this.dsList.getColumn(i, "AM_TT_SILSI"));

        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
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
         *	EXCEL업로드(저장)
         */
        this.fnUpload = function(dsOut) {
        	trace("dsOut.rowcount:"+dsOut.rowcount);
        	this.dsSave.clearData();
         	for (var i = 0; i < dsOut.rowcount; i++) {
         			var nrow = this.dsSave.addRow();

        			this.dsSave.setColumn(nrow, "FLAG", "I");
         			this.dsSave.setColumn(nrow, "CD_SITE", this.ccfCD_SYSTEM.form.CDTextBox.text);
         			this.dsSave.setColumn(nrow, "NO_RISK", this.ccfNO_RISK.form.CDTextBox.value);
        			this.dsSave.setColumn(nrow, "CD_DKCOST", dsOut.getColumn(i, "CD_DKCOST"));
        			this.dsSave.setColumn(nrow, "DS_ITEM", dsOut.getColumn(i, "DS_ITEM"));
        			this.dsSave.setColumn(nrow, "SZ_SIZE", dsOut.getColumn(i, "SZ_SIZE"));
        			this.dsSave.setColumn(nrow, "DS_UNIT", dsOut.getColumn(i, "DS_UNIT"));
        			this.dsSave.setColumn(nrow, "CD_GBIMOK", dsOut.getColumn(i, "CD_GBIMOK"));
        			this.dsSave.setColumn(nrow, "QN_DESIGN", dsOut.getColumn(i, "QN_DESIGN"));
        			this.dsSave.setColumn(nrow, "UP_DESIGN", dsOut.getColumn(i, "UP_DESIGN"));
        			this.dsSave.setColumn(nrow, "AM_DESIGN", dsOut.getColumn(i, "AM_DESIGN"));
        			this.dsSave.setColumn(nrow, "QN_TT_DOKUB", dsOut.getColumn(i, "QN_TT_DOKUB"));
        			this.dsSave.setColumn(nrow, "UP_TT_DOKUB", dsOut.getColumn(i, "UP_TT_DOKUB"));
        			this.dsSave.setColumn(nrow, "AM_TT_DOKUB", dsOut.getColumn(i, "AM_TT_DOKUB"));
        			this.dsSave.setColumn(nrow, "QN_EXDOKUB", dsOut.getColumn(i, "QN_EXDOKUB"));
        			this.dsSave.setColumn(nrow, "UP_EXDOKUB", dsOut.getColumn(i, "UP_EXDOKUB"));
        			this.dsSave.setColumn(nrow, "AM_EXDOKUB", dsOut.getColumn(i, "AM_EXDOKUB"));
        			this.dsSave.setColumn(nrow, "QN_TT_SILHENG", dsOut.getColumn(i, "QN_TT_SILHENG"));
        			this.dsSave.setColumn(nrow, "UP_TT_SILHENG", dsOut.getColumn(i, "UP_TT_SILHENG"));
        			this.dsSave.setColumn(nrow, "AM_TT_SILHENG", dsOut.getColumn(i, "AM_TT_SILHENG"));
        			this.dsSave.setColumn(nrow, "QN_EXSILHENG", dsOut.getColumn(i, "QN_EXSILHENG"));
        			this.dsSave.setColumn(nrow, "UP_EXSILHENG", dsOut.getColumn(i, "UP_EXSILHENG"));
        			this.dsSave.setColumn(nrow, "AM_EXSILHENG", dsOut.getColumn(i, "AM_EXSILHENG"));
        // 			this.dsSave.setColumn(nrow, "CD_RP", dsOut.getColumn(i, "CD_RP"));
        // 			this.dsSave.setColumn(nrow, "CD_STCOST", dsOut.getColumn(i, "CD_STCOST"));
        			this.dsSave.setColumn(nrow, "RM_BIGO", dsOut.getColumn(i, "RM_BIGO"));
        			this.dsSave.setColumn(nrow, "CD_COST", dsOut.getColumn(i, "CD_COST"));
        			this.dsSave.setColumn(nrow, "CD_COST1", dsOut.getColumn(i, "CD_COST1"));
        			this.dsSave.setColumn(nrow, "CD_COST2", dsOut.getColumn(i, "CD_COST2"));
        			this.dsSave.setColumn(nrow, "CD_COST3", dsOut.getColumn(i, "CD_COST3"));
        			this.dsSave.setColumn(nrow, "CD_COST4", dsOut.getColumn(i, "CD_COST4"));
        			this.dsSave.setColumn(nrow, "CD_COST5", dsOut.getColumn(i, "CD_COST5"));
        			this.dsSave.setColumn(nrow, "CD_COST6", dsOut.getColumn(i, "CD_COST6"));
        			this.dsSave.setColumn(nrow, "CD_COST7", dsOut.getColumn(i, "CD_COST7"));
        			this.dsSave.setColumn(nrow, "CD_COST8", dsOut.getColumn(i, "CD_COST8"));
        			this.dsSave.setColumn(nrow, "CD_COST9", dsOut.getColumn(i, "CD_COST9"));
        			this.dsSave.setColumn(nrow, "CD_COST10", dsOut.getColumn(i, "CD_COST10"));
        			this.dsSave.setColumn(nrow, "CD_COST11", dsOut.getColumn(i, "CD_COST11"));
        			this.dsSave.setColumn(nrow, "CD_COST12", dsOut.getColumn(i, "CD_COST12"));
        			//this.dsSave.setColumn(nrow, "CD_STD", dsOut.getColumn(i, "CD_STD"));

        			this.dsSave.setColumn(nrow, "QN_EXSILSI", dsOut.getColumn(i, "QN_EXSILSI"));
        			this.dsSave.setColumn(nrow, "UP_EXSILSI", dsOut.getColumn(i, "UP_EXSILSI"));
        			this.dsSave.setColumn(nrow, "AM_EXSILSI", dsOut.getColumn(i, "AM_EXSILSI"));

        			this.dsSave.setColumn(nrow, "QN_TT_SILSI", dsOut.getColumn(i, "QN_TT_SILSI"));
        			this.dsSave.setColumn(nrow, "UP_TT_SILSI", dsOut.getColumn(i, "UP_TT_SILSI"));
        			this.dsSave.setColumn(nrow, "AM_TT_SILSI", dsOut.getColumn(i, "AM_TT_SILSI"));

         	}

        	if (this.dsSave.rowcount == 0) return;
        		trace("this.dsSave upload");
        	var strSvcId    = "upload";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
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
        	if (this.gfnIsNull(this.ccfCD_SYSTEM.form.CDTextBox.text)) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SYSTEM.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
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
        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Del.set_enable(false);
        // 		this.FormBtns.Add.visible = false;
        // 		this.FormBtns.Del.set_visible(false);

        		trace("##### getRowCount : "+this.dsList.getRowCount());
        		if(this.uploadYn){

        			//upload 후 조회 0건(에러 0건)일 경우 실행예산을 적용한다.
        			if(this.dsList.getRowCount() <= 1){
        				trace("##### fnApply");
        				this.fnApply();

        			}
        		}
        		this.uploadYn = false;
        		var btnExcelUploadYn = this.dsGubunResult.getColumn(0,"BTN_EXCELUPLOAD_YN");
        		/*if(btnExcelUploadYn == "Y"){
        			this.btn2.set_enable(true);
        		}else{
        			this.btn2.set_enable(false);
        		}*/


        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.fnInsertError();
        			alert("저장 완료되었습니다.");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "saveafter"){
        		if (errorCode == 0) {

        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "saveinit"){
        		trace("####### saveinit end");
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "delete"){
        		if (errorCode == 0) {
        			//실행예산 적용인 경우
        			if(this.saveapply){
        				this.getParentContext().close();
        			}else{ //업로드 이후
        				this.gfnExcelImport("dsList","","A3","fnExcelImportCallback","import",this);
        			}
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "upload") {
        		if (errorCode == 0) {
        			this.dsSearch.setColumn(0, "ONLY_ERROR","Y");
        			this.uploadYn = true;
        			this.fnInsertError();
        			//alert("업로드 완료되었습니다.");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "excelSelect") {
        		this.gfnGridAfterSelect(this.dxGrid2);
        		this.gfnExcelExport(this.dxGrid2);
        	}else if(svcID == "saveapply") {
        		trace("### saveapply end");
        		this.saveapply = true;
        		this.fnExcelDelete();
        		//this.getParentContext().close();
        	}else if(svcID == "gubun") {
        		var btnExcelUploadYn = this.dsGubunResult.getColumn(0,"BTN_EXCELUPLOAD_YN");
        		//alert(btnExcelUploadYn);
        		//alert(this.dsGubunResult.getColumn(0,"BTN_EXCELUPLOAD_YN"));
        		//this.btn2.set_enable(true);
        // 		if(btnExcelUploadYn == "Y"){
        // 			this.btn2.set_enable(true);
        // 		}else{
        // 			this.btn2.set_enable(false);
        // 		}

        	}





        };

        this.fnCallbackIEMS = function(strID, value){
        	if(value){
        		this.FormBtns.Select.click();
        	}
        };


        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfNO_RISK") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")))
        		{
        			this.gfnAlert("현장코드를 먼저 입력해주세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));	// 현장코드
        	}
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnExcelInit = function(){

        	this.dsInit.clearData();

        	var nrow = this.dsInit.addRow();
        	this.dsInit.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsInit.setColumn(nrow, "NO_RISK", this.dsSearch.getColumn(0, "NO_RISK"));

        	var strSvcId    = "saveinit";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "init=dsInit";
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

        //최종실행예산 여부를 조회
        this.fnSelectGubun=function(){

        	var nrow = this.dsGubun.addRow();
        	this.dsGubun.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsGubun.setColumn(nrow, "NO_RISK", this.dsSearch.getColumn(0, "NO_RISK"));

        	var strSvcId    = "gubun";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "gubun=dsGubun";
        	var outData     = "dsGubunResult=gubun0";
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


        //기존엑셀업로드정보 삭제
        this.fnExcelDelete=function(){

        	var nrow = this.dsDelete.addRow();
        	this.dsDelete.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsDelete.setColumn(nrow, "NO_RISK", this.dsSearch.getColumn(0, "NO_RISK"));

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
        };


        //에러정보 INSERT
        this.fnInsertError=function(){
        	this.dsSave0.clearData();

        	var nrow = this.dsSave0.addRow();
        	this.dsSave0.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSave0.setColumn(nrow, "NO_RISK", this.dsSearch.getColumn(0, "NO_RISK"));

        	var strSvcId    = "saveafter";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save0=dsSave0";
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
        this.fnApply = function(obj,e) {

        	this.dsSave1.clearData();

        	var nrow = this.dsSave1.addRow();
        	this.dsSave1.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSave1.setColumn(nrow, "NO_RISK", this.dsSearch.getColumn(0, "NO_RISK"));
        	this.dsSave1.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "saveapply";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save1=dsSave1";
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

        this.fnExcelLoad = function(obj,e) {


        	this.fnExcelDelete();
        	//this.gfnExcelImport("dsList","","A3","fnExcelImportCallback","import",this);

        };

        this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet) {
        	// 다중 시트 처리시 양식의 해당 시트여부를 체크하고자 할땐 dsSheet 시트명 체크
        // 	if (dsSheet.rowcount > 1) {
        // 		trace(dsSheet.getColumn(1, "sheetname"));
        // 	}
        	//alert("fnExcelImportCallback");

        	// 엑셀 양식과 그리드 컬럼이 그대로 일치 하는경우 아래와 같이 처리.
        	// 아닌경우는 이부분 주석처리
        	for (var i=0; i< this.dsList.getColCount(); i++)
        	{
        		sColumnId = "Column"+i;
        		var sColumnNm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, i);
        		if (sColumnNm != "" && sColumnId != sColumnNm)
        		{
        			dsOut.updateColID(sColumnId, sColumnNm);
        		}
        	}
        // 	alert("업로드완료");
        // 	return;
        	//this.dsList.clearData();
        	//this.dsList.copyData(dsOut);
        	this.fnUpload(dsOut);
        	// 양식이 일치하고 엑셀내역을 기존데이터에 Insert하지 않고
        	// 엑셀내역 그대로 그리드 반영할 시 copyData


        	/*this.dsList.updatecontrol = false;
          	for (var i=0; i<this.dsList.rowcount; i++) {
          		this.dsList.setColumn(i, this.ucFlag, "I");
        		this.dsList.setRowType( i, "I" );
          	}*/
        	//this.dsList.updatecontrol = true;


        	//초기화
        	/*this.dsList.clearData();
        	//this.fnExcelDelete();



        	//this.dsList.set_enableevent(false);
        	for (var i=0; i<dsOut.rowcount; i++) {
        // 		var srow = this.dsList.findRow("CD_COST", dsOut.getColumn(i, "CD_COST"));
        // 		if(this.gfnIsNull(dsOut.getColumn(i, "CD_COST"))){
        // 			srow = -1;
        // 		}
        // 		if(srow > -1){
        // 			this.dsList.setColumn(srow, this.ucFlag, "U");
        // 			this.dsList.copyRow(srow, dsOut, i);
        // 		}else{
        			var nrow = this.dsList.addRow();
        			this.dsList.setColumn(nrow, this.ucFlag, "I");

        			// 양식이 일치하는 경우 copyRow
        			this.dsList.copyRow(nrow, dsOut, i);
        		//}


        		// 양식과 일치하지 않는 경우 아래와 같이 컬럼별로 처리.
        // 		this.dsListSub.setColumn(nrow, "CD_SYSTEM", dsOut.getColumn(i, "Column1"));
        // 		this.dsListSub.setColumn(nrow, "CD_TYPE", dsOut.getColumn(i, "Column2"));

        	}
        	//this.dsList.set_enableevent(true);

        	*/
        	this.gfnSetFormStatus(this, "I");

        };

        /* 엑셀다운로드 */
        this.fnExcelDown = function(obj,e) {

        	this.fnExcelSelect();
        }


        /*
          *	엑셀다운로드 데이터 조회
          */
        this.fnExcelSelect = function() {
        	if (!this.fnSelectValidate()) return false;
        	this.gfnGridBeforeSelect(this.dxGrid2);
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_SITE", this.ccfCD_SYSTEM.form.CDTextBox.text);
        	this.dsSelect.setColumn(0, "NO_RISK", this.ccfNO_RISK.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "ONLY_ERROR", "N");

        	var strSvcId    = "excelSelect";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsExcelList=select0";
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


        this.dsList_oncolumnchanged = function(obj,e)
        {
        // 	if(e.col == 9 || e.col == 21){
        // 		this.dsList.setColumn(e.row, "AM_DESIGN", Math.floor(this.dsList.getColumn(e.row, "QN_DESIGN") * this.dsList.getColumn(e.row, "UP_DESIGN")));
        // 	}else if(e.col == 0 || e.col == 29){
        // 		this.dsList.setColumn(e.row, "AM_TT_DOKUB", Math.floor(this.dsList.getColumn(e.row, "QN_TT_DOKUB") * this.dsList.getColumn(e.row, "UP_TT_DOKUB")));
        // 	}else if(e.col == 34 || e.col == 19){
        // 		this.dsList.setColumn(e.row, "AM_EXSILHENG", Math.floor(this.dsList.getColumn(e.row, "QN_EXSILHENG") * this.dsList.getColumn(e.row, "UP_EXSILHENG")));
        // 	}else if(e.col == 13 || e.col == 15){
        // 		this.dsList.setColumn(e.row, "AM_TT_SILHENG", Math.floor(this.dsList.getColumn(e.row, "QN_TT_SILHENG") * this.dsList.getColumn(e.row, "UP_TT_SILHENG")));
        // 	}
        	// 이벤트 오류로 인한 col이 아닌 columnid로 체크로직 변경.
        	if(e.columnid == "QN_DESIGN" || e.columnid == "UP_DESIGN"){
        		this.dsList.setColumn(e.row, "AM_DESIGN", Math.floor(this.dsList.getColumn(e.row, "QN_DESIGN") * this.dsList.getColumn(e.row, "UP_DESIGN")));
        	}else if(e.columnid == "QN_TT_DOKUB" || e.columnid == "UP_TT_DOKUB"){
        		this.dsList.setColumn(e.row, "AM_TT_DOKUB", Math.floor(this.dsList.getColumn(e.row, "QN_TT_DOKUB") * this.dsList.getColumn(e.row, "UP_TT_DOKUB")));
        	}else if(e.columnid == "QN_EXSILHENG" || e.columnid == "UP_EXSILHENG"){
        		this.dsList.setColumn(e.row, "AM_EXSILHENG", Math.floor(this.dsList.getColumn(e.row, "QN_EXSILHENG") * this.dsList.getColumn(e.row, "UP_EXSILHENG")));
        	}else if(e.columnid == "QN_TT_SILHENG" || e.columnid == "UP_TT_SILHENG"){
        		this.dsList.setColumn(e.row, "AM_TT_SILHENG", Math.floor(this.dsList.getColumn(e.row, "QN_TT_SILHENG") * this.dsList.getColumn(e.row, "UP_TT_SILHENG")));
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DWA_SITEBUDGET_onload,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsExcelList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };
        this.loadIncludeScript("DWA_FROMEXCEL_RISK.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
