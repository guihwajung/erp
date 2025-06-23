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
            this.set_titletext("총괄현황");
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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBTPR_DONGSTATE_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"FROMDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TODATE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CTM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"FROMDATE\"/><Col id=\"TODATE\"/><Col id=\"CD_CTM\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFMAINSITE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("접수일");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","staDT:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ctclDT_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","sta00:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ctclDT_TO:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP00","ctclDT_TO:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("협력업체");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CTM","staCD_CORP00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFHADO");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","60",null,null,"0","0",null,null,null,null,this);
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
            obj = new BindItem("item2","divSearch.form.ctclDT_FROM","value","dsSearch","FROMDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclDT_TO","value","dsSearch","TODATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_CTM.form.CDTextBox","value","dsSearch","CD_CTM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DBT_DONGSTATE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//
        	//this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().DS_SITE)) {
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		this.dsSearch.setColumn(0, "FROMDATE", this.getOwnerFrame().DT_FROM);
        		this.dsSearch.setColumn(0, "TODATE", this.getOwnerFrame().DT_TO);

        		this.FormBtns.Select.click();
        	}

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// 서브 버튼 사용
        	//this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter); // divSplitter sync
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btnDongState = this.gfnFormButtonAdd("btnDongState", "fnDongState");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ctclDT_FROM = this.divSearch.form.ctclDT_FROM;
        	this.ctclDT_TO = this.divSearch.form.ctclDT_TO;
        	this.ccfCD_CTM = this.divSearch.form.ccfCD_CTM;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_CTM.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DB", "DBT_DONGSTATE");
        	this.dxGrid.set_selecttype("cell");	// IE경우만 multiarea모드에서 master선택후 마우스 이동 빠르게 할 경우 버그가 있어서 cell 모드로 변경

        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","PER_JOBEND_002"), "displaytype", "mask");
        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","PER_JOBEND_002"), "maskedittype", "number" );
        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","PER_JOBEND_002"), "maskeditformat","#,###,##0.00") ;
        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","PER_JOBEND_002"), "text", "expr:nexacro.toNumber(dataset.getCaseSum('"+this.ucFlag+" != \"#\"','CNT_JOEBSU_002'),0) == 0 ? 0 :100-(nexacro.toNumber(dataset.getCaseSum('"+this.ucFlag+" != \"#\"','CNT_NOTEND_002'),0)/nexacro.toNumber(dataset.getCaseSum('"+this.ucFlag+" != \"#\"','CNT_JOEBSU_002'),0)*100)");

        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","CNT_JOBEND_003"), "displaytype", "mask");
        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","CNT_JOBEND_003"), "maskedittype", "number" );
        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","CNT_JOBEND_003"), "maskeditformat","#,###,##0.00") ;
        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","CNT_JOBEND_003"), "text", "expr:nexacro.toNumber(dataset.getCaseSum('"+this.ucFlag+" != \"#\"','CNT_JOEBSU_003'),0) == 0 ? 0 :100-(nexacro.toNumber(dataset.getCaseSum('"+this.ucFlag+" != \"#\"','CNT_NOTEND_003'),0)/nexacro.toNumber(dataset.getCaseSum('"+this.ucFlag+" != \"#\"','CNT_JOEBSU_003'),0)*100)");

        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","CNT_JOBEND_005"), "displaytype", "mask");
        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","CNT_JOBEND_005"), "maskedittype", "number" );
        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","CNT_JOBEND_005"), "maskeditformat","#,###,##0.00") ;
        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","CNT_JOBEND_005"), "text", "expr:nexacro.toNumber(dataset.getCaseSum('"+this.ucFlag+" != \"#\"','CNT_JOEBSU_005'),0) == 0 ? 0 :100-(nexacro.toNumber(dataset.getCaseSum('"+this.ucFlag+" != \"#\"','CNT_NOTEND_005'),0)/nexacro.toNumber(dataset.getCaseSum('"+this.ucFlag+" != \"#\"','CNT_JOEBSU_005'),0)*100)");

        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","CNT_JOBEND_006"), "displaytype", "mask");
        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","CNT_JOBEND_006"), "maskedittype", "number" );
        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","CNT_JOBEND_006"), "maskeditformat","#,###,##0.00") ;
        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","CNT_JOBEND_006"), "text", "expr:nexacro.toNumber(dataset.getCaseSum('"+this.ucFlag+" != \"#\"','CNT_JOEBSU_006'),0) == 0 ? 0 :100-(nexacro.toNumber(dataset.getCaseSum('"+this.ucFlag+" != \"#\"','CNT_NOTEND_006'),0)/nexacro.toNumber(dataset.getCaseSum('"+this.ucFlag+" != \"#\"','CNT_JOEBSU_006'),0)*100)");

        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","TOT_PER"), "displaytype", "mask");
        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","TOT_PER"), "maskedittype", "number" );
        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","TOT_PER"), "maskeditformat","#,###,##0.00") ;
        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","TOT_PER"), "text", "expr:nexacro.toNumber(dataset.getCaseSum('"+this.ucFlag+" != \"#\"','TOT_JOEBSU'),0) == 0 ? 0 :100-(nexacro.toNumber(dataset.getCaseSum('"+this.ucFlag+" != \"#\"','TOT_NOTEND'),0)/nexacro.toNumber(dataset.getCaseSum('"+this.ucFlag+" != \"#\"','TOT_JOEBSU'),0)*100)");

        	this.dxGrid.addEventHandler("oncelldblclick", this.dxGrid_oncelldblclick, this);
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("CD_CTM", "string");
        	this.dsSelect.addColumn("FROMDATE", "string");
        	this.dsSelect.addColumn("TODATE", "string");
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

        	this.dsList.clearData();
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "CD_CTM", this.dsSearch.getColumn(0, "CD_CTM"));
        	this.dsSelect.setColumn(0, "FROMDATE", this.dsSearch.getColumn(0, "FROMDATE"));
        	this.dsSelect.setColumn(0, "TODATE", this.dsSearch.getColumn(0, "TODATE"));

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
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}else if(this.gfnGetDiffDate(this.dsSearch.getColumn(0, "FROMDATE"), this.dsSearch.getColumn(0, "TODATE")) <= -1){
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ctclDT_TO.setFocus();
        			return false;
        		}
        		this.gfnAlert("접수일의 범위가 올바르지 않습니다.", "fnVaidateCallback"); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
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

        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if(id == "ccfCD_SITE") {
        		dsUserParam.setColumn(nrow, "CD_AUTHDEPT", this.AuthClient.CD_DEPT);
        	}

        	if(id == "ccfCD_CTM") {
        		var CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        		if(this.gfnIsNull(CD_SITE)){
        			this.gfnAlert("현장코드를 먼저 선택하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	if(id == "ccfCD_SITE") {
        		this.ccfCD_CTM.form.fnCodeFindClear();

        	}
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccfCD_SITE.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfCD_CTM.addEventHandler("onclick",this.Common_onclick,this);
        };
        this.loadIncludeScript("DBT_DONGSTATE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
