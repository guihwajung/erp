(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DWA_SILHENG");
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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCDPR_EVALUEITEM_SELECT</Col></Row><Row><Col id=\"SP\">DCDPR_EVALUEITEM_INSERT</Col><Col id=\"TARGET\">insert</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DCDPR_EVALUEITEM_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DCDPR_EVALUEITEM_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YR_EVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_EVALUEKIND\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SYSTEM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_EVALUEKIND\"/><Col id=\"YR_EVALUE\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrollbartype("auto auto");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("평가년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYR_JUDGE","staCD_SYSTEM:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ctclYR_JUDGE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("평가기준");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfEvalueKind","sta00:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
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
            obj = new BindItem("item0","divSearch.form.ccfEvalueKind.form.CDTextBox","value","dsSearch","CD_EVALUEKIND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclYR_JUDGE.form.TextBox","value","dsSearch","YR_EVALUE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCD_EVALUEITEM.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.DWA_SILHENG_onload = function(obj,e)
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

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_EVALUEKIND) && !this.gfnIsNull(this.getOwnerFrame().YR_EVALUE)){

        		this.dsSearch.setColumn(0, "YR_EVALUE", this.getOwnerFrame().YR_EVALUE);
        		this.dsSearch.setColumn(0, "CD_EVALUEKIND", this.getOwnerFrame().CD_EVALUEKIND);
        		this.ccfEvalueKind.form.DSTextBox.set_value(this.getOwnerFrame().DS_EVALUEKIND);
        		this.dsSearch.setColumn(0, "TY_SYSTEM", this.getOwnerFrame().TY_SYSTEM);

        		this.FormBtns.Select.click();
        	}

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        // 	this.FormBtns.Add.set_enable(false);
        // 	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btn1 = this.gfnFormButtonAdd("btnDetail", "fnDetail");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfEvalueKind = this.divSearch.form.ccfEvalueKind;
        	this.dxGrid = this.divData.form.objGrid;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfEvalueKind.CodeFindName = "DCX_CFEVALUEKIND";
        	this.ccfEvalueKind.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCD_EVALUEITEM");

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YR_EVALUE", "string");
        	this.dsSelect.addColumn("CD_EVALUEKIND", "string");
        	this.dsSelect.addColumn("CD_LEVEL", "string");
        	this.dsSelect.addColumn("CD_CODE", "string");
        	this.dsSelect.addColumn("TY_SYSTEM", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("YR_EVALUE", "string");
        	this.dsInsert.addColumn("CD_EVALUEKIND", "string");
        	this.dsInsert.addColumn("CD_TYPE", "string");
        	this.dsInsert.addColumn("CD_LEVEL", "string");
        	this.dsInsert.addColumn("CD_CODE", "string");
        	this.dsInsert.addColumn("DS_CODE", "string");
        	this.dsInsert.addColumn("AM_EVALUE", "bigdecimal");
        	this.dsInsert.addColumn("RT_WEIGHT", "bigdecimal");
        	this.dsInsert.addColumn("RM_BIGO", "string");
        	this.dsInsert.addColumn("YN_ADDITIONAL", "string");
        	this.dsInsert.addColumn("YN_DIRECTINPUT", "string");
        	this.dsInsert.addColumn("TY_SYSTEM", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("YR_EVALUE", "string");
        	this.dsUpdate.addColumn("CD_EVALUEKIND", "string");
        	this.dsUpdate.addColumn("CD_TYPE", "string");
        	this.dsUpdate.addColumn("CD_LEVEL", "string");
        	this.dsUpdate.addColumn("CD_CODE", "string");
        	this.dsUpdate.addColumn("DS_CODE", "string");
        	this.dsUpdate.addColumn("AM_EVALUE", "bigdecimal");
        	this.dsUpdate.addColumn("RT_WEIGHT", "bigdecimal");
        	this.dsUpdate.addColumn("RM_BIGO", "string");
        	this.dsUpdate.addColumn("YN_ADDITIONAL", "string");
        	this.dsUpdate.addColumn("YN_DIRECTINPUT", "string");
        	this.dsUpdate.addColumn("TY_SYSTEM", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("YR_EVALUE", "string");
        	this.dsDelete.addColumn("CD_EVALUEKIND", "string");
        	this.dsDelete.addColumn("CD_LEVEL", "string");
        	this.dsDelete.addColumn("CD_CODE", "string");
        	this.dsDelete.addColumn("TY_SYSTEM", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnValidate()) return;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "YR_EVALUE", this.dsSearch.getColumn(0, "YR_EVALUE"));
        	this.dsSelect.setColumn(0, "CD_EVALUEKIND", this.dsSearch.getColumn(0, "CD_EVALUEKIND"));
        	this.dsSelect.setColumn(0, "CD_CODE", "00");
        	this.dsSelect.setColumn(0, "TY_SYSTEM", this.dsSearch.getColumn(0, "TY_SYSTEM"));

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
        				this.dsInsert.setColumn(nrow, "YR_EVALUE", this.dsSearch.getColumn(0, "YR_EVALUE"));
        				this.dsInsert.setColumn(nrow, "CD_EVALUEKIND", this.dsSearch.getColumn(0, "CD_EVALUEKIND"));
        				this.dsInsert.setColumn(nrow, "CD_TYPE", this.dsList.getColumn(i, "CD_TYPE"));
        				this.dsInsert.setColumn(nrow, "CD_LEVEL", this.dsList.getColumn(i, "CD_LEVEL"));
        				//this.dsInsert.setColumn(nrow, "CD_CODE", this.dsList.getColumn(i, "CD_CODE")); CD_CODE가 ERP에선 00으로 들어감
        				this.dsInsert.setColumn(nrow, "CD_CODE", "00");
        				this.dsInsert.setColumn(nrow, "DS_CODE", this.dsList.getColumn(i, "DS_CODE"));
        				this.dsInsert.setColumn(nrow, "AM_EVALUE", this.dsList.getColumn(i, "AM_EVALUE"));
        				this.dsInsert.setColumn(nrow, "RT_WEIGHT", this.dsList.getColumn(i, "RT_WEIGHT"));
        				this.dsInsert.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsInsert.setColumn(nrow, "YN_ADDITIONAL", this.dsList.getColumn(i, "YN_ADDITIONAL"));
        				this.dsInsert.setColumn(nrow, "YN_DIRECTINPUT", this.dsList.getColumn(i, "YN_DIRECTINPUT"));
        				this.dsInsert.setColumn(nrow, "TY_SYSTEM", this.dsSearch.getColumn(0, "TY_SYSTEM"));
        			break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "YR_EVALUE", this.dsSearch.getColumn(0, "YR_EVALUE"));
        				this.dsUpdate.setColumn(nrow, "CD_EVALUEKIND", this.dsList.getColumn(i, "CD_EVALUEKIND"));
        				this.dsUpdate.setColumn(nrow, "CD_TYPE", this.dsList.getColumn(i, "CD_TYPE"));
        				this.dsUpdate.setColumn(nrow, "CD_LEVEL", this.dsList.getColumn(i, "CD_LEVEL"));
        				//this.dsUpdate.setColumn(nrow, "CD_CODE", this.dsList.getColumn(i, "CD_CODE"));
        				this.dsUpdate.setColumn(nrow, "CD_CODE", "00");
        				this.dsUpdate.setColumn(nrow, "DS_CODE", this.dsList.getColumn(i, "DS_CODE"));
        				this.dsUpdate.setColumn(nrow, "AM_EVALUE", this.dsList.getColumn(i, "AM_EVALUE"));
        				this.dsUpdate.setColumn(nrow, "RT_WEIGHT", this.dsList.getColumn(i, "RT_WEIGHT"));
        				this.dsUpdate.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsUpdate.setColumn(nrow, "YN_ADDITIONAL", this.dsList.getColumn(i, "YN_ADDITIONAL"));
        				this.dsUpdate.setColumn(nrow, "YN_DIRECTINPUT", this.dsList.getColumn(i, "YN_DIRECTINPUT"));
        				this.dsUpdate.setColumn(nrow, "TY_SYSTEM", this.dsSearch.getColumn(0, "TY_SYSTEM"));

        			break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "YR_EVALUE", this.dsSearch.getColumn(0, "YR_EVALUE"));
        				this.dsDelete.setColumn(nrow, "CD_EVALUEKIND", this.dsList.getColumn(i, "CD_EVALUEKIND"));
        				this.dsDelete.setColumn(nrow, "CD_LEVEL", this.dsList.getColumn(i, "CD_LEVEL"));
        				//this.dsDelete.setColumn(nrow, "CD_CODE", this.dsList.getColumn(i, "CD_CODE"));
        				this.dsDelete.setColumn(nrow, "CD_CODE", "00");
        				this.dsDelete.setColumn(nrow, "TY_SYSTEM", this.dsSearch.getColumn(0, "TY_SYSTEM"));
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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
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
        this.fnValidate = function() {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_EVALUEKIND"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfEvalueKind.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("평가기준코드를 입력하세요.");
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
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        	}else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(id == "ccfEvalueKind"){
        		if(!this.gfnIsNull(this.dsSearch.getColumn(0, "YR_EVALUE"))){
        			dsUserParam.setColumn(nrow, "YR_EVALUE", this.dsSearch.getColumn(0, "YR_EVALUE"));
        			dsUserParam.setColumn(nrow, "TY_SYSTEM", this.dsSearch.getColumn(0, "TY_SYSTEM"));
        		}else{
        			this.gfnAlert("평가년도를 입력해주세요.");
        			return false;
        		}
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id){

        };


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		// 폼상태 초기화
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		if(e.columnid == "YR_EVALUE")
        		{
        			this.divSearch.form.ccfEvalueKind.form.fnCodeFindClear();
        		}
        	}
        };

        this.fnDetail = function(obj, e){
        	if(!this.gfnGridIsRow(this.dxGrid)){return false;}
        	var param = {};
        	param.YR_EVALUE = this.dsSearch.getColumn(0, "YR_EVALUE");
        	param.CD_EVALUEKIND = this.dsSearch.getColumn(0, "CD_EVALUEKIND");
        	param.DS_EVALUEKIND = this.ccfEvalueKind.form.DSTextBox.value;
        	param.CD_LEVEL = this.dsList.getColumn(this.dsList.rowposition, "CD_LEVEL");
        	param.DS_LEVEL = this.dsList.getColumn(this.dsList.rowposition, "DS_CODE");
        	param.AM_EVALUE = this.dsList.getColumn(this.dsList.rowposition, "AM_EVALUE");
        	param.TY_SYSTEM = this.dsSearch.getColumn(0, "TY_SYSTEM");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCD_EVALUEITEMDETAIL", "fnEvalueItemDetailCallback", param);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DWA_SILHENG_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCD_EVALUEITEM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
