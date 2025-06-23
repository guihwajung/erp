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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DRAPR_CALENDAR_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DRAPR_HOLIDAY_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DRAPR_HOLIDAY_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DRAPR_HOLIDAY_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_YYYYMM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HOLIDAY\" type=\"STRING\" size=\"256\"/><Column id=\"DT_HOLIDAY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staDT_YYYYMM","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("조회년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclDT_YYYYMM","staDT_YYYYMM:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_HOLIDAY","0.0","staDT_YYYYMM:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("날짜");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_HOLIDAY","staDT_HOLIDAY:0.0","staDT_YYYYMM:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_HOILDAY","ctclDT_HOLIDAY:0.0","staDT_YYYYMM:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("공휴일명");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_HOILDAY","staDS_HOILDAY:0.0","staDT_YYYYMM:10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_value("");
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
            obj = new BindItem("item0","divSearch.form.ctclDT_YYYYMM.form.TextBox","value","dsSearch","DT_YYYYMM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclDT_HOLIDAY","value","dsSearch","DT_HOLIDAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctxtDS_HOILDAY","value","dsSearch","DS_HOLIDAY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DRA_CALENDAR.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this._STATUS = "";

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

        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "DT_YYYYMM", today.substr(0,6));
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
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DR", "DRA_CALENDAR");

        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	this.gfnGridColumnColor(this.dxGrid, "MON", "Red", "comp.parent.parent.parent.fnSetColor(rowidx," + "'MON'" + ") == true");
        	this.gfnGridColumnColor(this.dxGrid, "TUE", "Red", "comp.parent.parent.parent.fnSetColor(rowidx," + "'TUE'" + ") == true");
        	this.gfnGridColumnColor(this.dxGrid, "WED", "Red", "comp.parent.parent.parent.fnSetColor(rowidx," + "'WED'" + ") == true");
        	this.gfnGridColumnColor(this.dxGrid, "THU", "Red", "comp.parent.parent.parent.fnSetColor(rowidx," + "'THU'" + ") == true");
        	this.gfnGridColumnColor(this.dxGrid, "FRI", "Red", "comp.parent.parent.parent.fnSetColor(rowidx," + "'FRI'" + ") == true");
        	this.gfnGridColumnColor(this.dxGrid, "SAT", "Red", "comp.parent.parent.parent.fnSetColor(rowidx," + "'SAT'" + ") == true");

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DT_YYYYMM", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("DT_HOLIDAY", "string");
        	this.dsInsert.addColumn("DS_HOLIDAY", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("DT_HOLIDAY", "string");
        	this.dsUpdate.addColumn("DS_HOLIDAY", "string");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("DT_HOLIDAY", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "DT_YYYYMM", this.dsSearch.getColumn(0, "DT_YYYYMM"));

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
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "DT_HOLIDAY"))) return;
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "DS_HOLIDAY"))) return;

        	this.gfnConfirm("해당일의 공휴일 정보를 삭제하시겠습니까?", "fnDelete");

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

        	switch(this._STATUS) {
        		case "I":
        			var nrow = this.dsInsert.addRow();
        			this.dsInsert.setColumn(nrow, "DT_HOLIDAY", this.dsSearch.getColumn(0, "DT_HOLIDAY"));
        			this.dsInsert.setColumn(nrow, "DS_HOLIDAY", this.dsSearch.getColumn(0, "DS_HOLIDAY"));
        			this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        			break;

        		case "U":
        			var nrow = this.dsUpdate.addRow();
        			this.dsUpdate.setColumn(nrow, "DT_HOLIDAY", this.dsSearch.getColumn(0, "DT_HOLIDAY"));
        			this.dsUpdate.setColumn(nrow, "DS_HOLIDAY", this.dsSearch.getColumn(0, "DS_HOLIDAY"));
        			this.dsUpdate.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        			break;

        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate";
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
        		for(var i = 0; i < this.dsList.rowcount; i++)
        		{
        			this.dxGrid.setRealRowSize(i, 60);
        		}
        		this._STATUS = "Q";
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

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.divData_objGrid_oncellposchanged = function(obj,e)
        {
        	this.FormBtns.Save.set_enable(false);
        	this.dsSearch.setColumn(0, "DT_HOLIDAY", "");
        	this.dsSearch.setColumn(0, "DS_HOLIDAY", "");

        	var colNm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, e.cell);
        	var day = this.dsList.getColumn(this.dsList.rowposition, colNm);
        	var arrDay = this.gfnNvl(day, "").replace("\n\n", "@").split("@");

        	if(this.gfnNvl(arrDay[0],"").length == 1)
        	{
        		arrDay[0] = "0" + arrDay[0];
        	}

        	if(arrDay[0].length > 1)
        	{
        		this.dsSearch.setColumn(0, "DT_HOLIDAY", this.dsSearch.getColumn(0, "DT_YYYYMM") + arrDay[0]);
        	}

        	if(this.gfnNvl(arrDay[1],"").length > 1)
        	{
        		this.dsSearch.setColumn(0, "DS_HOLIDAY", arrDay[1]);
        	}
        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		if(e.columnid == "DT_YYYYMM")
        		{
        			this.gfnSetFormStatus(this);	// 폼상태 초기화
        			this.gfnGridClear(this.dxGrid);
        		}
        		else if(e.columnid == "DS_HOLIDAY")
        		{
        			if(this.gfnIsNull(e.oldvalue))
        			{
        				this._STATUS = "I";
        			}
        			else
        			{
        				if(!this.gfnIsNull(e.newvalue))
        				{
        					this._STATUS = "U";
        				}
        			}
        		}
        	}
        };

        this.divSearch_ctxtDS_HOILDAY_onkeyup = function(obj,e)
        {
        	this.FormBtns.Save.set_enable(true);
        };


        this.fnDelete = function(strId, val)
        {
        	if(val == true)
        	{
        		this.dsDelete.clearData();

        		this.dsDelete.addRow();
        		this.dsDelete.setColumn(0, "DT_HOLIDAY", this.dsSearch.getColumn(0, "DT_HOLIDAY"));

        		if (this.dsDelete.rowcount == 0) return;

        		var strSvcId    = "save";
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
        	}
        }

        this.fnSetColor = function(currow, column)
        {
        	var day = this.dsList.getColumn(currow, column);
        	var arrDay = this.gfnNvl(day, "").replace("\n\n", "@").split("@");

        	if(this.gfnNvl(arrDay[1],"").length > 1)
        	{
        		return true;
        	}

        	return false;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ctxtDS_HOILDAY.addEventHandler("onkeyup",this.divSearch_ctxtDS_HOILDAY_onkeyup,this);
            this.divData.form.objGrid.addEventHandler("oncellposchanged",this.divData_objGrid_oncellposchanged,this);
            this.divData.form.objGrid.addEventHandler("onselectchanged",this.divData_objGrid_onselectchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DRA_CALENDAR.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
