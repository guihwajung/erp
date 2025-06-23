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
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZZPR_TRAN_LOG_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">select</Col><Col id=\"VALUE\">조회</Col></Row><Row><Col id=\"CODE\">save</Col><Col id=\"VALUE\">저장</Col></Row><Row><Col id=\"CODE\">print</Col><Col id=\"VALUE\">출력</Col></Row><Row><Col id=\"CODE\">download</Col><Col id=\"VALUE\">다운로드</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"45","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM","10","10","40","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("시스템");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SYSTEM","staCD_SYSTEM:5","10","150","25",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSYSTEM");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","670","59","30","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("법인");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:5","59","200","25",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_USER","ccfCD_SYSTEM:25","10","40","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("사용자");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_USER","staID_USER:5","10","200","25",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFUSER");
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT","ccfID_USER:30","10","50","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("작업일자");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","staDT:5","10","105","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_range","ctclDT_FROM:10","10","10","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("~");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","staDT_range:10","10","105","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSP_NAME","ctclDT_TO:30","10","50","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("작업내용");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtSP_NAME","staSP_NAME:5","10","140","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN","ctxtSP_NAME:20","10","30","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("구분");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_GUBUN","staTY_GUBUN:5","10","90","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsTY_GUBUN");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_text("전체");
            obj.set_value("");
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

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DZU_TRAN_LOG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	this.fnSetParameter();
        	this.fnSetEvent();
        };

        this.fnSetButton = function() {

        	var id_group = this.FormInfo.ID_GROUP;
        	var gr_search = this.FormInfo.GR_SEARCH;
        	var cd_role = this.FormInfo.CD_ROLE;
        }

        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SYSTEM", "string");
        	this.dsSelect.addColumn("ID_USER", "string");
        	this.dsSelect.addColumn("DT_FROM", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
        	this.dsSelect.addColumn("SP_NAME", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");

        }


        this.fnSetEvent = function() {

        	this.ccfCD_SYSTEM = this.divSearch.form.ccfCD_SYSTEM;
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfID_USER = this.divSearch.form.ccfID_USER;
        	this.ctclDT_FROM = this.divSearch.form.ctclDT_FROM;
        	this.ctclDT_TO = this.divSearch.form.ctclDT_TO;
        	this.ctxtSP_NAME = this.divSearch.form.ctxtSP_NAME;
        	this.ccboTY_GUBUN = this.divSearch.form.ccboTY_GUBUN;

        	this.ccfCD_SYSTEM.AfterCDTextChanged = "fnSearchInit";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnSearchInit";
        	this.ccfID_USER.AfterCDTextChanged = "fnSearchInit";
        	this.ccfCD_SYSTEM.AfterCDTextChanged = "fnSearchInit";

        	this.dxGrid = this.divData.form.objGrid;
        	this.gfnGridInit(this.dxGrid, this.dsList, "DZ", "DZU_TRAN_LOG");

        	// 그룹핑
        // 	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "DS_SYSTEM"), "suppress", 1);
        // 	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "DS_MODULE"), "suppress", 2);
        // 	this.dsList.set_keystring("G:DS_SYSTEM,DS_MODULE");

        	this.ctclDT_FROM.set_value(this.gfnGetDate());
        	this.ctclDT_TO.set_value(this.gfnGetDate());
        }

        this.fnSearchInit = function(id) {
        	this.gfnSetFormStatus(this);
        	this.gfnGridClear(this.dxGrid);
        };

        this.fnSelect = function() {
        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_SYSTEM", this.ccfCD_SYSTEM.form.CDTextBox.text);
        	this.dsSelect.setColumn(0, "ID_USER", this.ccfID_USER.form.CDTextBox.text);
        	this.dsSelect.setColumn(0, "DT_FROM", this.ctclDT_FROM.value);
        	this.dsSelect.setColumn(0, "DT_TO", this.ctclDT_TO.value);
        	this.dsSelect.setColumn(0, "SP_NAME", this.ctxtSP_NAME.text);
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.ccboTY_GUBUN.value);
        	this.dsSelect.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.text);

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

        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        }

        this.fnAdd = function() {
        }

        this.fnDel = function() {
        }

        this.fnSave = function() {
        }

        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        this.fnPrint = function() {
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ctclDT_FROM.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.ctclDT_TO.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.ctxtSP_NAME.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.ccboTY_GUBUN.addEventHandler("onitemchanged",this.fnSearchInit,this);
        };
        this.loadIncludeScript("DZU_TRAN_LOG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
