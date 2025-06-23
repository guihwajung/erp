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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DOSPR_DIVIDEMST_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DOSPR_DIVIDE_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DOSPR_DIVIDE_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DOSPR_DIVIDE_DELETE</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DOSPR_DIVIDE_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DOSPR_DIVIDEMST_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SUJI\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_PROJ","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("프로젝트");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_PROJ","staCD_PROJ:0.0","10.0","299","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DOS_CFPROJ");
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("1");
            obj.getSetter("FirToContents").set("true");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccfCD_PROJ:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("회계년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("tclYM_WORK","staYM_WORK:0.0","10.0","97","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enableevent("true");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","40.00%","100.00%","5",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter:5",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0",null,"30","0",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("대상실적내역");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","staTITLE:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0",null,"30","0",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("분할/투자조정내역");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGrid1","0","staTITLE:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_PROJ.form.CDTextBox","value","dsSearch","CD_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_PROJ.form.DSTextBox","value","dsSearch","DS_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.tclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
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
        this.registerScript("DOS_DIVIDE.xfdl", function() {
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

        	if (!this.gfnIsNull(this.getOwnerFrame().CD_PROJ)) {
        		this.dsSearch.setColumn(0, "CD_PROJ", this.getOwnerFrame().CD_PROJ);
        		this.dsSearch.setColumn(0, "DS_PROJ", this.getOwnerFrame().DS_PROJ);
        		this.dsSearch.setColumn(0, "YM_WORK", this.getOwnerFrame().YM_WORK);
        		this.dsSearch.setColumn(0, "NO_SUJI", this.getOwnerFrame().NO_SUJI);
        	}

        	this.FormBtns.Select.click();
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
        	this.ccfCD_PROJ = this.divSearch.form.ccfCD_PROJ;

        	this.dxGrid = this.divData.form.divDataTop.form.objGrid;
        	this.dxGrid1 = this.divData.form.divDataBottom.form.objGrid1;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_PROJ.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DO", "DOS_DIVIDEMST");
        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DO", "DOS_DIVIDE");

        	this.dxGrid1.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_PROJ", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");
        	this.dsSelect.addColumn("NO_SUJI", "bigdecimal");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_PROJ", "string");
        	this.dsInsert.addColumn("YM_WORK", "string");
        	this.dsInsert.addColumn("DT_TRADE", "string");
        	this.dsInsert.addColumn("DT_CASH", "string");
        	this.dsInsert.addColumn("CD_ITEM", "string");
        	this.dsInsert.addColumn("AM_SUJI", "bigdecimal");
        	this.dsInsert.addColumn("CD_SUJI", "string");
        	this.dsInsert.addColumn("TY_INVEST", "string");
        	this.dsInsert.addColumn("CD_DEPT", "string");
        	this.dsInsert.addColumn("TY_VENDOR", "string");
        	this.dsInsert.addColumn("CD_VENDOR", "string");
        	this.dsInsert.addColumn("CD_BANK", "string");
        	this.dsInsert.addColumn("NO_ACCOUNT", "string");
        	this.dsInsert.addColumn("RM_BIGO", "string");
        	this.dsInsert.addColumn("NO_SUJI", "bigdecimal");
        	this.dsInsert.addColumn("ID_USER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_PROJ", "string");
        	this.dsUpdate.addColumn("YM_WORK", "string");
        	this.dsUpdate.addColumn("DT_TRADE", "string");
        	this.dsUpdate.addColumn("DT_CASH", "string");
        	this.dsUpdate.addColumn("CD_ITEM", "string");
        	this.dsUpdate.addColumn("AM_SUJI", "bigdecimal");
        	this.dsUpdate.addColumn("CD_SUJI", "string");
        	this.dsUpdate.addColumn("TY_INVEST", "string");
        	this.dsUpdate.addColumn("CD_DEPT", "string");
        	this.dsUpdate.addColumn("TY_VENDOR", "string");
        	this.dsUpdate.addColumn("CD_VENDOR", "string");
        	this.dsUpdate.addColumn("CD_BANK", "string");
        	this.dsUpdate.addColumn("NO_ACCOUNT", "string");
        	this.dsUpdate.addColumn("RM_BIGO", "string");
        	this.dsUpdate.addColumn("NO_SUJI", "bigdecimal");
        	this.dsUpdate.addColumn("NO_DIVIDE", "bigdecimal");
        	this.dsUpdate.addColumn("ID_USER", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_PROJ", "string");
        	this.dsDelete.addColumn("YM_WORK", "string");
        	this.dsDelete.addColumn("NO_SUJI", "bigdecimal");
        	this.dsDelete.addColumn("NO_DIVIDE", "bigdecimal");
        	this.dsDelete.addColumn("ID_USER", "string");

        	this.dsSelect1 = new Dataset();
        	this.dsSelect1.addColumn("CD_PROJ", "string");
        	this.dsSelect1.addColumn("YM_WORK", "string");
        	this.dsSelect1.addColumn("NO_SUJI", "bigdecimal");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_PROJ", "string");
        	this.dsSave.addColumn("YM_WORK", "string");
        	this.dsSave.addColumn("NO_SUJI", "bigdecimal");
        	this.dsSave.addColumn("ID_USER", "string");

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

        	this.dsSelect.setColumn(0, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsSelect.setColumn(0, "NO_SUJI", this.dsSearch.getColumn(0, "NO_SUJI"));

        	this.dsSelect1.clearData();
        	this.dsSelect1.addRow();

        	this.dsSelect1.setColumn(0, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        	this.dsSelect1.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsSelect1.setColumn(0, "NO_SUJI", this.dsSearch.getColumn(0, "NO_SUJI"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect select1=dsSelect1";
        	var outData     = "dsList=select0 dsList1=select10";
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
        	//this.gfnGridInit(this.dxGrid1, this.dsList, "DO", "DOS_DIVIDE");
        	//var nrow = this.gfnGridAdd(this.dxGrid1); // top (default), bottom, current
        	var nrow = this.gfnGridAdd(this.dxGrid1,"");

        	this.dsList1.setColumn(nrow, "NO_SUJI", this.dsList.getColumn(1, "NO_SUJI"));
        	this.dsList1.setColumn(nrow, "CO_CORP", this.dsList.getColumn(1, "CO_CORP"));
        	this.dsList1.setColumn(nrow, "DS_CORP", this.dsList.getColumn(1, "DS_CORP"));
        	this.dsList1.setColumn(nrow, "DT_INPUT", this.dsList.getColumn(1, "DT_INPUT"));
        	this.dsList1.setColumn(nrow, "DT_CASH", this.dsList.getColumn(1, "DT_CASH"));
        	this.dsList1.setColumn(nrow, "DT_TRADE", this.dsList.getColumn(1, "DT_TRADE"));
        	this.dsList1.setColumn(nrow, "AM_SUJI", this.dsList.getColumn(1, "AM_SUJI"));
        	this.dsList1.setColumn(nrow, "NO_ACCOUNT", this.dsList.getColumn(1, "NO_ACCOUNT"));
        	this.dsList1.setColumn(nrow, "CD_BANK", this.dsList.getColumn(1, "CD_BANK"));
        	this.dsList1.setColumn(nrow, "DS_BANK", this.dsList.getColumn(1, "DS_BANK"));
        	this.dsList1.setColumn(nrow, "CD_ITEM", this.dsList.getColumn(1, "CD_ITEM"));
        	this.dsList1.setColumn(nrow, "TY_INOUT", this.dsList.getColumn(1, "TY_INOUT"));
        	this.dsList1.setColumn(nrow, "DS_ITEM", this.dsList.getColumn(1, "DS_ITEM"));
        	this.dsList1.setColumn(nrow, "CD_SUJI", this.dsList.getColumn(1, "CD_SUJI"));
        	this.dsList1.setColumn(nrow, "TY_SUJI", this.dsList.getColumn(1, "TY_SUJI"));
        	this.dsList1.setColumn(nrow, "DS_SUJI", this.dsList.getColumn(1, "DS_SUJI"));
        	this.dsList1.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(1, "CD_DEPT"));
        	this.dsList1.setColumn(nrow, "DS_DEPT", this.dsList.getColumn(1, "DS_DEPT"));
        	this.dsList1.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(1, "CD_VENDOR"));
        	this.dsList1.setColumn(nrow, "TY_VENDOR", this.dsList.getColumn(1, "TY_VENDOR"));
        	this.dsList1.setColumn(nrow, "DS_VENDOR", this.dsList.getColumn(1, "DS_VENDOR"));
        	this.dsList1.setColumn(nrow, "TY_INVEST", this.dsList.getColumn(1, "TY_INVEST"));
        	this.dsList1.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(1, "RM_BIGO"));
        	this.dsList1.setColumn(nrow, "NO_SLIP", this.dsList.getColumn(1, "NO_SLIP"));

        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid1);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid1)) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList1.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList1, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        				this.dsInsert.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        				this.dsInsert.setColumn(nrow, "DT_TRADE", this.dsList1.getColumn(i, "DT_TRADE"));
        				this.dsInsert.setColumn(nrow, "DT_CASH", this.dsList1.getColumn(i, "DT_CASH"));
        				this.dsInsert.setColumn(nrow, "CD_ITEM", this.dsList1.getColumn(i, "CD_ITEM"));
        				this.dsInsert.setColumn(nrow, "AM_SUJI", this.dsList1.getColumn(i, "AM_SUJI"));
        				this.dsInsert.setColumn(nrow, "CD_SUJI", this.dsList1.getColumn(i, "CD_SUJI"));
        				this.dsInsert.setColumn(nrow, "TY_INVEST", this.dsList1.getColumn(i, "TY_INVEST"));
        				this.dsInsert.setColumn(nrow, "CD_DEPT", this.dsList1.getColumn(i, "CD_DEPT"));
        				this.dsInsert.setColumn(nrow, "TY_VENDOR", this.dsList1.getColumn(i, "TY_VENDOR"));
        				this.dsInsert.setColumn(nrow, "CD_VENDOR", this.dsList1.getColumn(i, "CD_VENDOR"));
        				this.dsInsert.setColumn(nrow, "CD_BANK", this.dsList1.getColumn(i, "CD_BANK"));
        				this.dsInsert.setColumn(nrow, "NO_ACCOUNT", this.dsList1.getColumn(i, "NO_ACCOUNT"));
        				this.dsInsert.setColumn(nrow, "RM_BIGO", this.dsList1.getColumn(i, "RM_BIGO"));
        				this.dsInsert.setColumn(nrow, "NO_SUJI", this.dsSearch.getColumn(0, "NO_SUJI"));
        				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        				this.dsUpdate.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        				this.dsUpdate.setColumn(nrow, "DT_TRADE", this.dsList1.getColumn(i, "DT_TRADE"));
        				this.dsUpdate.setColumn(nrow, "DT_CASH", this.dsList1.getColumn(i, "DT_CASH"));
        				this.dsUpdate.setColumn(nrow, "CD_ITEM", this.dsList1.getColumn(i, "CD_ITEM"));
        				this.dsUpdate.setColumn(nrow, "AM_SUJI", this.dsList1.getColumn(i, "AM_SUJI"));
        				this.dsUpdate.setColumn(nrow, "CD_SUJI", this.dsList1.getColumn(i, "CD_SUJI"));
        				this.dsUpdate.setColumn(nrow, "TY_INVEST", this.dsList1.getColumn(i, "TY_INVEST"));
        				this.dsUpdate.setColumn(nrow, "CD_DEPT", this.dsList1.getColumn(i, "CD_DEPT"));
        				this.dsUpdate.setColumn(nrow, "TY_VENDOR", this.dsList1.getColumn(i, "TY_VENDOR"));
        				this.dsUpdate.setColumn(nrow, "CD_VENDOR", this.dsList1.getColumn(i, "CD_VENDOR"));
        				this.dsUpdate.setColumn(nrow, "CD_BANK", this.dsList1.getColumn(i, "CD_BANK"));
        				this.dsUpdate.setColumn(nrow, "NO_ACCOUNT", this.dsList1.getColumn(i, "NO_ACCOUNT"));
        				this.dsUpdate.setColumn(nrow, "RM_BIGO", this.dsList1.getColumn(i, "RM_BIGO"));
        				this.dsUpdate.setColumn(nrow, "NO_SUJI", this.dsSearch.getColumn(0, "NO_SUJI"));
        				this.dsUpdate.setColumn(nrow, "NO_DIVIDE", this.dsList1.getColumn(i, "NO_DIVIDE"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        				this.dsDelete.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        				this.dsDelete.setColumn(nrow, "NO_SUJI", this.dsSearch.getColumn(0, "NO_SUJI"));
        				this.dsDelete.setColumn(nrow, "NO_DIVIDE", this.dsList1.getColumn(i, "NO_DIVIDE"));
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_PROJ"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_PROJ.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("프로젝트를 입력하세요.", "fnVaidateCallback");
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
        			this.fnSave1();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "save1") {
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
        	if (id == "ccfCD_PROJ") {
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	}
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	switch(id) {
        		case "DOS_CFITEM": //사업수지항목
        			//dsUserParam.setColumn(nrow, "CD_PROJ", this.ccfCD_PROJ.form.CDTextBox.value);
        			dsUserParam.setColumn(nrow, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        			dsUserParam.setColumn(nrow, "TY_INOUT", "");
        			dsUserParam.setColumn(nrow, "YN_USE", "Y");
        			break;
        		case "DOS_CFACNTUNIT": //귀속부서
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_PROJ", this.ccfCD_PROJ.form.CDTextBox.value);
        			break;
        		case "DOS_CFVENDOR": //거래처
        			dsUserParam.setColumn(nrow, "TY_VENDOR1", "");
        			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        			dsUserParam.setColumn(nrow, "CD_PROJ", this.ccfCD_PROJ.form.CDTextBox.value);
        			break;
        		case "DFX_CFACCOUNTNO_SUJI": //발생정보
        			dsUserParam.setColumn(nrow, "CD_CORP", this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));
        			break;
        		case "DOS_CFSUJI": //자금수지
        			dsUserParam.setColumn(nrow, "CD_PROJ", this.ccfCD_PROJ.form.CDTextBox.value);
        			dsUserParam.setColumn(nrow, "TY_INOUT", "");
        			dsUserParam.setColumn(nrow, "TY_SIGN", "");
        			dsUserParam.setColumn(nrow, "CD_ITEM", "");
        			dsUserParam.setColumn(nrow, "YN_USE", "Y");
        			break;
        		default:
        			break;
        	}
        	return true;
        };

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

        // 최종 SAVE SP 호출
        this.fnSave1 = function(obj,e) {

        	this.dsSave.clearData();
        	var nrow = this.dsSave.addRow();

        	this.dsSave.setColumn(nrow, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        	this.dsSave.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsSave.setColumn(nrow, "NO_SUJI", this.dsSearch.getColumn(0, "NO_SUJI"));
        	this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "save1";
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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataBottom.form.objGrid1.addEventHandler("oncelldblclick",this.divData_divDataBottom_objGrid1_oncelldblclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsList1.addEventHandler("onvaluechanged",this.dsList1_onvaluechanged,this);
        };
        this.loadIncludeScript("DOS_DIVIDE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
