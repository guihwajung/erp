(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DBT_TOTALSTATE_DB");
            this.set_titletext("하자처리집계표");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_enableevent("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBTPR_SITE_SUM_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_UMGB\" type=\"STRING\" size=\"256\"/><Column id=\"TY_HAJAJS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BUNSO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BUNSO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GBN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">진행</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"VALUE\">종료</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_UMGB", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">002</Col><Col id=\"VALUE\">합동점검</Col></Row><Row><Col id=\"CODE\">003</Col><Col id=\"VALUE\">입주자사전점검</Col></Row><Row><Col id=\"CODE\">004</Col><Col id=\"VALUE\">합동점검(공용)</Col></Row><Row><Col id=\"CODE\">005</Col><Col id=\"VALUE\">입주</Col></Row><Row><Col id=\"CODE\">006</Col><Col id=\"VALUE\">사후</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_HAJAJS", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staDT","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("접수일");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_FROM","staDT:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","calDT_FROM:0.0","staDT:10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_TO","sta00:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_UMGB","calDT_TO:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("진행구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_GBN","staTY_UMGB:0.0","10.0","130","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsTY_GBN");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_UMGB00","cboTY_GBN:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("관리");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_UMGB","staTY_UMGB00:0.0","10.0","130","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_innerdataset("dsTY_UMGB");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_UMGB00_00","cboTY_UMGB:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("접수구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_HAJAJS","staTY_UMGB00_00:0.0","10.0","130","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTY_HAJAJS");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_BUNSO","cboTY_HAJAJS:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFBUNSO");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_UMGB00_00_00","ccfCD_BUNSO:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("센터코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
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
            obj = new BindItem("item2","divSearch.form.calDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.calDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboTY_GBN","value","dsSearch","TY_GBN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.cboTY_UMGB","value","dsSearch","TY_UMGB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboTY_HAJAJS","value","dsSearch","TY_HAJAJS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_BUNSO.form.CDTextBox","value","dsSearch","CD_BUNSO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_BUNSO.form.DSTextBox","value","dsSearch","DS_BUNSO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DBT_TOTALSTATE_DB.xfdl", function() {
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
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {

        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnDetialView = this.gfnFormButtonAdd("DetialView", "fnDetialView");	//상세현황
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.calDT_FROM    = this.divSearch.form.calDT_FROM;
        	this.calDT_TO      = this.divSearch.form.calDT_TO;
        	this.cboTY_GBN     = this.divSearch.form.cboTY_GBN;
        	this.cboTY_UMGB    = this.divSearch.form.cboTY_UMGB;
        	this.cboTY_HAJAJS  = this.divSearch.form.cboTY_HAJAJS;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DB", "DBT_TOTALSTATE_DB");
        	this.dxGrid.set_selecttype("cell");

        	this.dxGrid.addEventHandler("oncelldblclick", this.fnGrid_oncelldblclick, this);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_GBN", "int");
        	this.dsSelect.addColumn("FROMDATE", "string");
        	this.dsSelect.addColumn("TODATE", "string");
        	this.dsSelect.addColumn("TY_HAJAJS", "string");
        	this.dsSelect.addColumn("TY_UMGB", "string");
        	this.dsSelect.addColumn("CD_BUNSO", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /*
         *	입력 버튼
         */
        this.fnAdd = function() {};

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {};

        /*
         *	저장 버튼
         */
        this.fnSave = function() {};

         /*
          *	조회 버튼
          */
        this.fnSelect = function () {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "FROMDATE" , this.gfnNvl(this.dsSearch.getColumn(0, "DT_FROM"),""));
        	this.dsSelect.setColumn(0, "TODATE"	  , this.gfnNvl(this.dsSearch.getColumn(0, "DT_TO"),""));
        	this.dsSelect.setColumn(0, "TY_GBN"	  , this.dsSearch.getColumn(0, "TY_GBN"));
        	this.dsSelect.setColumn(0, "TY_UMGB"  , this.dsSearch.getColumn(0, "TY_UMGB"));
        	this.dsSelect.setColumn(0, "TY_HAJAJS", this.dsSearch.getColumn(0, "TY_HAJAJS"));
        	this.dsSelect.setColumn(0, "CD_BUNSO", this.dsSearch.getColumn(0, "CD_BUNSO"));

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

        	if(!this.gfnIsNull(this.dsSearch.getColumn(0, "DT_FROM")) && !this.gfnIsNull(this.dsSearch.getColumn(0, "DT_TO"))){
        		if(this.gfnGetDiffDate(this.dsSearch.getColumn(0, "DT_FROM"), this.dsSearch.getColumn(0, "DT_TO")) <= -1){
        			this.gfnAlert("접수일의 범위가 올바르지 않습니다.");
        			this.calDT_FROM.setFocus();
        			validate = false;
        		}
        	}

        	return validate;
        }
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
        	} else if (svcID == "combo") {
        		this.dsTY_HAJAJS.insertRow(0);
        		this.dsTY_HAJAJS.setColumn(0,"CD_CODE","");
        		this.dsTY_HAJAJS.setColumn(0,"DS_CODE","전체");

        		this.cboTY_HAJAJS.set_index(0);

        		if(!this.gfnIsNull(this.getOwnerFrame().DT_FROM)){
        			this.dsSearch.setColumn(0, "DT_FROM"  , this.getOwnerFrame().DT_FROM);
        			this.dsSearch.setColumn(0, "DT_TO"    , this.getOwnerFrame().DT_TO);
        			this.dsSearch.setColumn(0, "TY_GBN"   , this.gfnNvl(this.getOwnerFrame().TY_STATE,"0"));
        		}else{
        			this.dsSearch.setColumn(0, "TY_GBN" , "0");		//진행구분
        		}

        		this.dsSearch.setColumn(0, "TY_UMGB", "");		//관리

        		//조회처리
        		this.FormBtns.Select.click();

        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_oncelldblclick = function(obj,e)
        {
        	this.fnDetialView();
        };
        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        /*
         * 상세현황 버튼 이벤트
         */
        this.fnDetialView = function() {
        	if(!this.gfnGridIsRow(this.dxGrid)) {return false;}

        	var param = {};
        	param.DT_FROM = this.dsSearch.getColumn(0, "DT_FROM");
        	param.DT_TO   = this.dsSearch.getColumn(0, "DT_TO");
        	param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        	param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");
        	param.DS_JS   = this.dsSearch.getColumn(0, "TY_HAJAJS");
        	param.DS_UM   = this.dsSearch.getColumn(0, "TY_UMGB");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DBT_TOTALSTATESITE_DB", "", param);

        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        /*
         *	콤보박스 값 설정
         */
        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE"  , "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DB");
        	this.dsCombo.setColumn(0, "CD_TYPE"  , "K1");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_HAJAJS=combo0";
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DBT_TOTALSTATE_DB.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
