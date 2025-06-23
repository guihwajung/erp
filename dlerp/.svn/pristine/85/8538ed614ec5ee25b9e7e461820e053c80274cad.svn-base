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
            this.set_titletext("사업수지항목");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DOSPR_PLANBAS_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DOSPR_PLANBAS_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DOSPR_PLANBAS_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DOSPR_PLANBAS_DELETE</Col></Row><Row><Col id=\"TARGET\">calc</Col><Col id=\"SP\">DOSPR_PLANBAS_CALC</Col></Row><Row><Col id=\"TARGET\">appr</Col><Col id=\"SP\">DOSPR_PLANBAS_APPR</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"NO_PLAN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PLAN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ITEM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ITEM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_PROJ\"/><Col id=\"DS_PROJ\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_PROJ","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("프로젝트");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_PROJ","staCD_PROJ:0.0","10.0","350","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DOS_CFPROJ");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_PLAN","ccfCD_PROJ:0.0","10.0","350","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DOS_CFNOPLAN");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_PLAN","ccfCD_PROJ:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("예산번호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_ITEM","ccfNO_PLAN:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("사업수지");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ITEM","staCD_ITEM:0.0","10.0","319","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DOS_CFITEM");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","30",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","15",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_PROJ.form.CDTextBox","value","dsSearch","CD_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_PROJ.form.DSTextBox","value","dsSearch","DS_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfNO_PLAN.form.CDTextBox","value","dsSearch","NO_PLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfNO_PLAN.form.DSTextBox","value","dsSearch","DS_PLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_ITEM.form.CDTextBox","value","dsSearch","CD_ITEM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_ITEM.form.DSTextBox","value","dsSearch","DS_ITEM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DOS_PLANBAS.xfdl", function() {
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
        		this.dsSearch.setColumn(0, "NO_PLAN", this.getOwnerFrame().NO_PLAN);
        		this.dsSearch.setColumn(0, "DS_PLAN", this.getOwnerFrame().DS_PLAN);
        		this.dsSearch.setColumn(0, "CD_ITEM", this.getOwnerFrame().CD_ITEM);
        		this.dsSearch.setColumn(0, "DS_ITEM", this.getOwnerFrame().DS_ITEM);
        	}

        	if (!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_PROJ")))
        		this.FormBtns.Select.click();
        };

        this.fnSetButton = function() {
        // 	this.FormBtns.Add.set_enable(false);
        // 	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
         	this.btnCalc = this.gfnFormButtonAdd("btnCalc", "fnCalc");
        	this.btnCalcF = this.gfnFormButtonAdd("btnCalcF", "fnCalcF");
         	this.btnAppr = this.gfnFormButtonAdd("btnAppr", "fnAppr");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
         	this.ccfCD_PROJ = this.divSearch.form.ccfCD_PROJ;
        	this.ccfNO_PLAN = this.divSearch.form.ccfNO_PLAN;
        	this.ccfCD_ITEM = this.divSearch.form.ccfCD_ITEM;

         	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
         	this.gfnGridInit(this.dxGrid, this.dsList, "DO", "DOS_PLANBAS");
        	//this.gfnGridInit(this.dxGrid, this.dsList, "DO", "DOS_PLANDTL", "DS_ITEM", "NO_LEVEL");

         	//this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

         	this.ccfCD_PROJ.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfNO_PLAN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ITEM.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_PROJ.AfterCDTextChanged = "fnAfterCDTextChanged";

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_PROJ", "string");
        	this.dsSelect.addColumn("NO_PLAN", "string");
        	this.dsSelect.addColumn("CD_ITEM", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_PROJ", "string");
        	this.dsInsert.addColumn("NO_PLAN", "string");
        	this.dsInsert.addColumn("CD_ITEM", "string");
        	this.dsInsert.addColumn("NO_BASIS", "int");
        	this.dsInsert.addColumn("TY_BASIS", "string");
        	this.dsInsert.addColumn("DS_BASIS", "string");
        	this.dsInsert.addColumn("AM_VALUE", "bigdecimal");
        	this.dsInsert.addColumn("AM_RESULT", "bigdecimal");
        	this.dsInsert.addColumn("DS_BASIS1", "string");
        	this.dsInsert.addColumn("AM_INPUT1", "bigdecimal");
        	this.dsInsert.addColumn("TY_BASIS1", "string");
        	this.dsInsert.addColumn("DS_BASIS2", "string");
        	this.dsInsert.addColumn("AM_INPUT2", "bigdecimal");
        	this.dsInsert.addColumn("TY_BASIS2", "string");
        	this.dsInsert.addColumn("DS_BASIS3", "string");
        	this.dsInsert.addColumn("AM_INPUT3", "bigdecimal");
        	this.dsInsert.addColumn("TY_BASIS3", "string");
        	this.dsInsert.addColumn("DS_BASIS4", "string");
        	this.dsInsert.addColumn("AM_INPUT4", "bigdecimal");
        	this.dsInsert.addColumn("TY_BASIS4", "string");
        	this.dsInsert.addColumn("DS_BASIS5", "string");
        	this.dsInsert.addColumn("AM_INPUT5", "bigdecimal");
        	this.dsInsert.addColumn("TY_BASIS5", "string");
        	this.dsInsert.addColumn("DS_BASIS6", "string");
        	this.dsInsert.addColumn("AM_INPUT6", "bigdecimal");
        	this.dsInsert.addColumn("TY_BASIS6", "string");
        	this.dsInsert.addColumn("DS_BASIS7", "string");
        	this.dsInsert.addColumn("AM_INPUT7", "bigdecimal");
        	this.dsInsert.addColumn("RM_BIGO", "string");
        	this.dsInsert.addColumn("ID_USER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_PROJ", "string");
        	this.dsUpdate.addColumn("NO_PLAN", "string");
        	this.dsUpdate.addColumn("CD_ITEM", "string");
        	this.dsUpdate.addColumn("NO_BASIS", "int");
        	this.dsUpdate.addColumn("TY_BASIS", "string");
        	this.dsUpdate.addColumn("DS_BASIS", "string");
        	this.dsUpdate.addColumn("AM_VALUE", "bigdecimal");
        	this.dsUpdate.addColumn("AM_RESULT", "bigdecimal");
        	this.dsUpdate.addColumn("DS_BASIS1", "string");
        	this.dsUpdate.addColumn("AM_INPUT1", "bigdecimal");
        	this.dsUpdate.addColumn("TY_BASIS1", "string");
        	this.dsUpdate.addColumn("DS_BASIS2", "string");
        	this.dsUpdate.addColumn("AM_INPUT2", "bigdecimal");
        	this.dsUpdate.addColumn("TY_BASIS2", "string");
        	this.dsUpdate.addColumn("DS_BASIS3", "string");
        	this.dsUpdate.addColumn("AM_INPUT3", "bigdecimal");
        	this.dsUpdate.addColumn("TY_BASIS3", "string");
        	this.dsUpdate.addColumn("DS_BASIS4", "string");
        	this.dsUpdate.addColumn("AM_INPUT4", "bigdecimal");
        	this.dsUpdate.addColumn("TY_BASIS4", "string");
        	this.dsUpdate.addColumn("DS_BASIS5", "string");
        	this.dsUpdate.addColumn("AM_INPUT5", "bigdecimal");
        	this.dsUpdate.addColumn("TY_BASIS5", "string");
        	this.dsUpdate.addColumn("DS_BASIS6", "string");
        	this.dsUpdate.addColumn("AM_INPUT6", "bigdecimal");
        	this.dsUpdate.addColumn("TY_BASIS6", "string");
        	this.dsUpdate.addColumn("DS_BASIS7", "string");
        	this.dsUpdate.addColumn("AM_INPUT7", "bigdecimal");
        	this.dsUpdate.addColumn("RM_BIGO", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_PROJ", "string");
        	this.dsDelete.addColumn("NO_PLAN", "string");
        	this.dsDelete.addColumn("CD_ITEM", "string");
        	this.dsDelete.addColumn("NO_BASIS", "int");

        	this.dsCalc = new Dataset();
        	this.dsCalc.addColumn("CD_PROJ", "string");
        	this.dsCalc.addColumn("NO_PLAN", "string");
        	this.dsCalc.addColumn("CD_ITEM", "string");
        	this.dsCalc.addColumn("ID_USER", "string");
        	this.dsCalc.addColumn("TY_CALC", "string");

        	this.dsAppr = new Dataset();
        	this.dsAppr.addColumn("CD_PROJ", "string");
        	this.dsAppr.addColumn("NO_PLAN", "string");
        	this.dsAppr.addColumn("CD_ITEM", "string");
        	this.dsAppr.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        this.fnSelect = function() {
        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        	this.dsSelect.setColumn(0, "NO_PLAN", this.dsSearch.getColumn(0, "NO_PLAN"));
        	this.dsSelect.setColumn(0, "CD_ITEM", this.dsSearch.getColumn(0, "CD_ITEM"));

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

        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid,"");
        }

        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        }

        this.fnSave = function() {
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
        				this.dsInsert.setColumn(nrow, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        				this.dsInsert.setColumn(nrow, "NO_PLAN", this.dsSearch.getColumn(0, "NO_PLAN"));
        				this.dsInsert.setColumn(nrow, "CD_ITEM", this.dsSearch.getColumn(0, "CD_ITEM"));
        				this.dsInsert.setColumn(nrow, "NO_BASIS", this.dsList.getColumn(i, "NO_BASIS"));
        				this.dsInsert.setColumn(nrow, "TY_BASIS", this.dsList.getColumn(i, "TY_BASIS"));
        				this.dsInsert.setColumn(nrow, "DS_BASIS", this.dsList.getColumn(i, "DS_BASIS"));
        				this.dsInsert.setColumn(nrow, "AM_VALUE", this.dsList.getColumn(i, "AM_VALUE"));
        				this.dsInsert.setColumn(nrow, "AM_RESULT", this.dsList.getColumn(i, "AM_RESULT"));
        				this.dsInsert.setColumn(nrow, "DS_BASIS1", this.dsList.getColumn(i, "DS_BASIS1"));
        				this.dsInsert.setColumn(nrow, "AM_INPUT1", this.dsList.getColumn(i, "AM_INPUT1"));
        				this.dsInsert.setColumn(nrow, "TY_BASIS1", this.dsList.getColumn(i, "TY_BASIS1"));
        				this.dsInsert.setColumn(nrow, "DS_BASIS2", this.dsList.getColumn(i, "DS_BASIS2"));
        				this.dsInsert.setColumn(nrow, "AM_INPUT2", this.dsList.getColumn(i, "AM_INPUT2"));
        				this.dsInsert.setColumn(nrow, "TY_BASIS2", this.dsList.getColumn(i, "TY_BASIS2"));
        				this.dsInsert.setColumn(nrow, "DS_BASIS3", this.dsList.getColumn(i, "DS_BASIS3"));
        				this.dsInsert.setColumn(nrow, "AM_INPUT3", this.dsList.getColumn(i, "AM_INPUT3"));
        				this.dsInsert.setColumn(nrow, "TY_BASIS3", this.dsList.getColumn(i, "TY_BASIS3"));
        				this.dsInsert.setColumn(nrow, "DS_BASIS4", this.dsList.getColumn(i, "DS_BASIS4"));
        				this.dsInsert.setColumn(nrow, "AM_INPUT4", this.dsList.getColumn(i, "AM_INPUT4"));
        				this.dsInsert.setColumn(nrow, "TY_BASIS4", this.dsList.getColumn(i, "TY_BASIS4"));
        				this.dsInsert.setColumn(nrow, "DS_BASIS5", this.dsList.getColumn(i, "DS_BASIS5"));
        				this.dsInsert.setColumn(nrow, "AM_INPUT5", this.dsList.getColumn(i, "AM_INPUT5"));
        				this.dsInsert.setColumn(nrow, "TY_BASIS5", this.dsList.getColumn(i, "TY_BASIS5"));
        				this.dsInsert.setColumn(nrow, "DS_BASIS6", this.dsList.getColumn(i, "DS_BASIS6"));
        				this.dsInsert.setColumn(nrow, "AM_INPUT6", this.dsList.getColumn(i, "AM_INPUT6"));
        				this.dsInsert.setColumn(nrow, "TY_BASIS6", this.dsList.getColumn(i, "TY_BASIS6"));
        				this.dsInsert.setColumn(nrow, "DS_BASIS7", this.dsList.getColumn(i, "DS_BASIS7"));
        				this.dsInsert.setColumn(nrow, "AM_INPUT7", this.dsList.getColumn(i, "AM_INPUT7"));
        				this.dsInsert.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        				break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        				this.dsUpdate.setColumn(nrow, "NO_PLAN", this.dsSearch.getColumn(0, "NO_PLAN"));
        				this.dsUpdate.setColumn(nrow, "CD_ITEM", this.dsSearch.getColumn(0, "CD_ITEM"));
        				this.dsUpdate.setColumn(nrow, "NO_BASIS", this.dsList.getColumn(i, "NO_BASIS"));
        				this.dsUpdate.setColumn(nrow, "TY_BASIS", this.dsList.getColumn(i, "TY_BASIS"));
        				this.dsUpdate.setColumn(nrow, "DS_BASIS", this.dsList.getColumn(i, "DS_BASIS"));
        				this.dsUpdate.setColumn(nrow, "AM_VALUE", this.dsList.getColumn(i, "AM_VALUE"));
        				this.dsUpdate.setColumn(nrow, "AM_RESULT", this.dsList.getColumn(i, "AM_RESULT"));
        				this.dsUpdate.setColumn(nrow, "DS_BASIS1", this.dsList.getColumn(i, "DS_BASIS1"));
        				this.dsUpdate.setColumn(nrow, "AM_INPUT1", this.dsList.getColumn(i, "AM_INPUT1"));
        				this.dsUpdate.setColumn(nrow, "TY_BASIS1", this.dsList.getColumn(i, "TY_BASIS1"));
        				this.dsUpdate.setColumn(nrow, "DS_BASIS2", this.dsList.getColumn(i, "DS_BASIS2"));
        				this.dsUpdate.setColumn(nrow, "AM_INPUT2", this.dsList.getColumn(i, "AM_INPUT2"));
        				this.dsUpdate.setColumn(nrow, "TY_BASIS2", this.dsList.getColumn(i, "TY_BASIS2"));
        				this.dsUpdate.setColumn(nrow, "DS_BASIS3", this.dsList.getColumn(i, "DS_BASIS3"));
        				this.dsUpdate.setColumn(nrow, "AM_INPUT3", this.dsList.getColumn(i, "AM_INPUT3"));
        				this.dsUpdate.setColumn(nrow, "TY_BASIS3", this.dsList.getColumn(i, "TY_BASIS3"));
        				this.dsUpdate.setColumn(nrow, "DS_BASIS4", this.dsList.getColumn(i, "DS_BASIS4"));
        				this.dsUpdate.setColumn(nrow, "AM_INPUT4", this.dsList.getColumn(i, "AM_INPUT4"));
        				this.dsUpdate.setColumn(nrow, "TY_BASIS4", this.dsList.getColumn(i, "TY_BASIS4"));
        				this.dsUpdate.setColumn(nrow, "DS_BASIS5", this.dsList.getColumn(i, "DS_BASIS5"));
        				this.dsUpdate.setColumn(nrow, "AM_INPUT5", this.dsList.getColumn(i, "AM_INPUT5"));
        				this.dsUpdate.setColumn(nrow, "TY_BASIS5", this.dsList.getColumn(i, "TY_BASIS5"));
        				this.dsUpdate.setColumn(nrow, "DS_BASIS6", this.dsList.getColumn(i, "DS_BASIS6"));
        				this.dsUpdate.setColumn(nrow, "AM_INPUT6", this.dsList.getColumn(i, "AM_INPUT6"));
        				this.dsUpdate.setColumn(nrow, "TY_BASIS6", this.dsList.getColumn(i, "TY_BASIS6"));
        				this.dsUpdate.setColumn(nrow, "DS_BASIS7", this.dsList.getColumn(i, "DS_BASIS7"));
        				this.dsUpdate.setColumn(nrow, "AM_INPUT7", this.dsList.getColumn(i, "AM_INPUT7"));
        				this.dsUpdate.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        				this.dsDelete.setColumn(nrow, "NO_PLAN", this.dsSearch.getColumn(0, "NO_PLAN"));
        				this.dsDelete.setColumn(nrow, "CD_ITEM", this.dsSearch.getColumn(0, "CD_ITEM"));
        				this.dsDelete.setColumn(nrow, "NO_BASIS", this.dsList.getColumn(i, "NO_BASIS"));

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

        this.fnExcel = function() {

        }

        this.fnPrint = function() {

        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidation = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_PROJ"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_PROJ.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("프로젝트 코드를 입력하지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_PLAN"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_PROJ.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("예산번호를 입력하지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ITEM"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_PROJ.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("사업수지를 입력하지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}

          	return validate;
         }


        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if(svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "calc") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}
         }

         this.fnDlgButton_callback = function(svcID, val) {
        	if(val != false) {
        		this.FormBtns.Select.click();
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
        	} else if (id == "ccfNO_PLAN") {
        		dsUserParam.setColumn(nrow, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        	} else if (id == "ccfCD_ITEM") {
        		dsUserParam.setColumn(nrow, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        		dsUserParam.setColumn(nrow, "TY_INOUT", "");
        		dsUserParam.setColumn(nrow, "YN_USE", "Y");
        	}


        	return true;
        };

         this.fnAfterCDTextChanged = function(id, codeFindData) {
         	var arr = codeFindData;

        	if(id == "ccfCD_PROJ") {
        		this.ccfNO_PLAN.form.fnCodeFindClear();
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){

        };

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
         // 조정연산
        this.fnCalc = function(obj,e) {

        	var flag = "";
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		if (flag == "I" || flag == "U" || flag == "D") {
        			this.FormBtns.Save.click();
        			break;
        		}
        	}

        // 	var nFlagRowCnt = this.dsList.getCaseCount( "flag == 'U'" );
        // 	this.alert(nFlagRowCnt);

        // 	if (nChkRowCnt <= 0){
        // 		this.gfnAlert("선택한 자료가 없습니다. 출력할 자료를 선택하세요!");
        // 		return;
        // 	}




        	this.dlgfnCalc();
        }

        this.dlgfnCalc = function() {

        	this.dsCalc.clearData();
        	var nrow = this.dsCalc.addRow();
        	this.dsCalc.setColumn(nrow, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        	this.dsCalc.setColumn(nrow, "NO_PLAN", this.dsSearch.getColumn(0, "NO_PLAN"));
        	this.dsCalc.setColumn(nrow, "CD_ITEM", this.dsSearch.getColumn(0, "CD_ITEM"));
        	this.dsCalc.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsCalc.setColumn(nrow, "TY_CALC", "C");

        	// DOSPR_PLAN_APPR
        	var strSvcId    = "calc";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "calc=dsCalc";
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

        	// 자기자신창 닫기
        	//this.getParentContext().close(true);

        }

         // 최종연산
        this.fnCalcF = function(obj,e) {

        	var flag = "";
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		if (flag == "I" || flag == "U" || flag == "D") {
        			this.FormBtns.Save.click();
        			break;
        		}
        	}

        	this.dlgfnCalcF();
        }

        this.dlgfnCalcF = function() {

        	this.dsCalc.clearData();
        	var nrow = this.dsCalc.addRow();
        	this.dsCalc.setColumn(nrow, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        	this.dsCalc.setColumn(nrow, "NO_PLAN", this.dsSearch.getColumn(0, "NO_PLAN"));
        	this.dsCalc.setColumn(nrow, "CD_ITEM", this.dsSearch.getColumn(0, "CD_ITEM"));
        	this.dsCalc.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsCalc.setColumn(nrow, "TY_CALC", "F");

        	// DOSPR_PLAN_APPR
        	var strSvcId    = "calc";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "calc=dsCalc";
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

        	// 자기자신창 닫기
        	//this.getParentContext().close(true);

        }

         // 연산내역반영
        this.fnAppr = function(obj,e) {
        	this.dlgfnAppr();
        }

        this.dlgfnAppr = function(id, val){

        	this.dsAppr.clearData();
        	var nrow = this.dsAppr.addRow();
        	this.dsAppr.setColumn(nrow, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        	this.dsAppr.setColumn(nrow, "NO_PLAN", this.dsSearch.getColumn(0, "NO_PLAN"));
        	this.dsAppr.setColumn(nrow, "CD_ITEM", this.dsSearch.getColumn(0, "CD_ITEM"));
        	this.dsAppr.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        	// DOSPR_PLAN_APPR
        	var strSvcId    = "appr";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "appr=dsAppr";
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

        	// 자기자신창 닫기
        	this.getParentContext().close(true);
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DOS_PLANBAS.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
