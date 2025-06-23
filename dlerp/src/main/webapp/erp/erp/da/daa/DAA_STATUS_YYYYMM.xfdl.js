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
            this.set_titletext("부서별입사자현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAAPR_STATUS_YYYYMM</Col></Row><Row><Col id=\"SP\">DAAPR_STATUS_YYYYMM_SUB</Col><Col id=\"TARGET\">selectSub</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_DATE","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("기준년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("calDT_DATE","staDT_DATE:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","39.60%","100.00%","5",null,"0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cursor("ew-resize");
            obj.set_cssclass("div_Splitter");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataMain","0","0",null,null,"0","divSplitter:5",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Div("divDataSub","0","divSplitter:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","0",null,null,"0","1",null,null,null,null,this.divData.form.divDataSub.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataSub.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.calDT_DATE.form.TextBox","value","dsSearch","DT_DATE");
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
        this.registerScript("DAA_STATUS_YYYYMM.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e) {

        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	//this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);

        	// 법인코드 및 법인명 기본세팅
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        	//적용년도 셋팅
        	var today = this.gfnGetDate().substring(0,4);
        	this.dsSearch.setColumn(0,"DT_DATE",today);
        	this.dsSearch.applyChange();

        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	// 입력버튼 사용안함
        	//this.alert(this.FormBtns.Add.enable);
        	//this.FormBtns.Add.set_enable(false);
        	//this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Reset.set_enable(true);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;  // 법인코드
        	this.calDT_DATE = this.divSearch.form.calDT_DATE;  // 기준일(입사일자)

        	this.dxGrid = this.divData.form.divDataMain.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataSub.form.objGridSub;


        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.CodeFindName = "DAX_CFCORP";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAA_STATUS_YYYYMM");
        	this.dxGrid.set_selecttype("cell");	// IE경우만 multiarea모드에서 master선택후 마우스 이동 빠르게 할 경우 버그가 있어서 cell 모드로 변경
        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DA", "DAA_STATUS_DEPTJOIN2");
        	this.dxGrid.set_selecttype("cell");	// IE경우만 multiarea모드에서 master선택후 마우스 이동 빠르게 할 경우 버그가 있어서 cell 모드로 변경

        	this.dxGrid.addEventHandler("oncellposchanged", this.dxGrid_oncellposchanged, this);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");     // 법인코드
        	this.dsSelect.addColumn("DT_DATE", "string");     // 기준일자
        	this.dsSelect.addColumn("CD_EMPTYPE", "string");  //

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("TY_GUBUN", "string");
        	this.dsSelectSub.addColumn("CD_CORP", "string");
        	this.dsSelectSub.addColumn("DT_DATE", "string");
        	this.dsSelectSub.addColumn("CD_EMPTYPE", "string");
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
        	this.dsSelect.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "DT_DATE", this.calDT_DATE.form.TextBox.value);
        	this.dsSelect.setColumn(0, "CD_EMPTYPE", "%");

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
          *	조회 버튼
          */
        this.fnSelectSub = function(strTY_GUBUN,strMM,strCD_EMPTYPE) {
        	if (!this.fnSelectValidate()) return false;

        	this.dsListSub.clearData();

        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();
        	this.dsSelectSub.setColumn(0, "TY_GUBUN", strTY_GUBUN);
        	this.dsSelectSub.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsSelectSub.setColumn(0, "DT_DATE", this.calDT_DATE.form.TextBox.value + strMM);
        	this.dsSelectSub.setColumn(0, "CD_EMPTYPE", strCD_EMPTYPE);

        	var strSvcId    = "selectSub";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectSub=dsSelectSub";
        	var outData     = "dsListSub=selectSub0";
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

        /*
         *	reset 버튼
         */
        this.fnReset = function() {
        	this.ccfCD_CORP.form.CDTextBox.set_value("");
        	this.ccfCD_CORP.form.DSTextBox.set_value("");

        	this.divSearch.form.calDT_DATE.form.TextBox.set_value("");
        };
        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        // 	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.text)) {
        // 		validate = false;
        // 		this.fnCdCorpVaidateCallback = function() {
        // 			this.ccfCD_CORP.form.CDTextBox.setFocus();
        // 			return false;
        // 		}
        // 		this.gfnAlert("법인코드를 입력하셔야 합니다.", "fnCdCorpVaidateCallback"); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        // 	}

        	if (validate && this.gfnIsNull(this.calDT_DATE.form.TextBox.value)) {
        		validate = false;
        		this.fnDtDateCallback = function() {
        			this.calDT_DATE.form.TextBox.setFocus();
        			return false;
        		}
        		this.gfnAlert("기준일자를 입력하셔야 합니다.", "fnDtDateCallback"); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
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

        // 		// 총계, 남자, 여자, 주민 미등록 빼고 합산하기
        // 		var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0, sum5 = 0, sum6 = 0, sum7 = 0, sum8 = 0, sum9 = 0, sum10 = 0, sum11 = 0, sum12 = 0;
        // 		var sumtotal = 0;
        //
        // 		for(var i = 1; i < this.dsList.rowcount; i++){
        // 			if(this.dsList.getColumn(i, "GUBUN") == "S"){
        //
        // 				sum1 += this.dsList.getColumn(i, "SUM1");
        // 				sum2 += this.dsList.getColumn(i, "SUM2");
        // 				sum3 += this.dsList.getColumn(i, "SUM3");
        // 				sum4 += this.dsList.getColumn(i, "SUM4");
        // 				sum5 += this.dsList.getColumn(i, "SUM5");
        // 				sum6 += this.dsList.getColumn(i, "SUM6");
        // 				sum7 += this.dsList.getColumn(i, "SUM7");
        // 				sum8 += this.dsList.getColumn(i, "SUM8");
        // 				sum9 += this.dsList.getColumn(i, "SUM9");
        // 				sum10 += this.dsList.getColumn(i, "SUM10");
        // 				sum11 += this.dsList.getColumn(i, "SUM11");
        // 				sum12 += this.dsList.getColumn(i, "SUM12");
        // 				sumtotal += this.dsList.getColumn(i, "TOTAL_SUM");
        // 			}
        // 		}
        //
        // 		this.dxGrid.setCellProperty("summary",4,"text", sum1 );
        // 		this.dxGrid.setCellProperty("summary",5,"text", sum2 );
        // 		this.dxGrid.setCellProperty("summary",6,"text", sum3 );
        // 		this.dxGrid.setCellProperty("summary",7,"text", sum4 );
        // 		this.dxGrid.setCellProperty("summary",8,"text", sum5 );
        // 		this.dxGrid.setCellProperty("summary",9,"text", sum6 );
        // 		this.dxGrid.setCellProperty("summary",10,"text", sum7 );
        // 		this.dxGrid.setCellProperty("summary",11,"text", sum8 );
        // 		this.dxGrid.setCellProperty("summary",12,"text", sum9 );
        // 		this.dxGrid.setCellProperty("summary",13,"text", sum10);
        // 		this.dxGrid.setCellProperty("summary",14,"text", sum11);
        // 		this.dxGrid.setCellProperty("summary",15,"text", sum12);
        // 		this.dxGrid.setCellProperty("summary",16,"text", sumtotal);

        		this.fnSetButton();
        	} else if (svcID == "selectSub") {
        			this.FormBtns.Add.set_enable(false);
        			this.FormBtns.Del.set_enable(false);
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

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
        		this.gfnGridClear(this.dxGridSub);
        	}
        };

        this.dxGrid_oncellposchanged = function(obj,e)
        {
        	if(e.oldcol != e.col || e.oldrow != e.row){
        		var strMM = "";
        		var strTY_GUBUN = "";
        		var strCD_EMPTYPE = "";
        		if( this.gfnGridGetBindColumnNameByIndex( this.dxGrid, e.col ).indexOf("SUM") > -1 ){
        			if(this.dxGrid.getCellProperty( "head", e.col, "text" ) != "합계") {
        				strMM = this.dxGrid.getCellProperty( "head", e.col, "text" ).replace("월",""); // 년도 + 01~12
        			} else {
        				strMM = "%";
        			}
        			strTY_GUBUN = this.dsList.getColumn(this.dsList.rowposition,"GUBUN");
        			strCD_EMPTYPE = this.dsList.getColumn(this.dsList.rowposition,"CD_EMPTYPE");
        			var strColid = this.gfnGridGetBindColumnNameByIndex( this.dxGrid, e.col );
        			if (this.dsList.getColumn(this.dsList.rowposition,strColid) !="")
        			{
        				this.fnSelectSub(strTY_GUBUN,strMM,strCD_EMPTYPE);
        			}
        		} else {
        			this.gfnGridClear(this.dxGridSub);
        		}
        	}
        };

        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_top(e.clienty);
        		this.divData.form.resetScroll();
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };

        this.dsList_onvaluechanged = function(obj,e)
        {
        	this.fnSetButton();
        };

        this.dsListSub_onvaluechanged = function(obj,e)
        {
        	this.fnSetButton();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsListSub.addEventHandler("onvaluechanged",this.dsListSub_onvaluechanged,this);
        };
        this.loadIncludeScript("DAA_STATUS_YYYYMM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
