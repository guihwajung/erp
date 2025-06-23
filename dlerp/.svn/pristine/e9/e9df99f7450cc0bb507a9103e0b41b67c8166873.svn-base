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
            this.set_titletext("결산기수");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHFPR_CLOSING_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHFPR_CLOSING_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHFPR_CLOSING_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHFPR_CLOSING_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"DS_CORP\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHF_CLOSING.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.max = 0;

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetParameter();
        	this.fnSetEvent();

        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;

        	this.dxGrid = this.divData.form.objGrid;
        };

        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        }

        this.fnSetExtendButton = function() {

        };


        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("NO_CLOSING", "bigdecimal");
        	this.dsInsert.addColumn("DT_CLOSING_FR", "string");
        	this.dsInsert.addColumn("DT_CLOSING_TO", "string");
        	this.dsInsert.addColumn("YM_ALLMAGAM", "string");
        	this.dsInsert.addColumn("ID_TRANS", "string");
        	this.dsInsert.addColumn("CD_CORP", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("NO_CLOSING", "bigdecimal");
        	this.dsUpdate.addColumn("DT_CLOSING_FR", "string");
        	this.dsUpdate.addColumn("DT_CLOSING_TO", "string");
        	this.dsUpdate.addColumn("YM_ALLMAGAM", "string");
        	this.dsUpdate.addColumn("ID_TRANS", "string");
        	this.dsUpdate.addColumn("CD_CORP", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("NO_CLOSING", "bigdecimal");
        	this.dsDelete.addColumn("CD_CORP", "string");

        }

        this.fnSetEvent = function() {

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHF_CLOSING");

        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        }

        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if(svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		this.max = this.dsList.getMax("NO_CLOSING") > 0 ? this.dsList.getMax("NO_CLOSING") : 0;

        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}

        	}

        }

        this.fnSelectValidation = function() {

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        		this.ccfCD_CORP.form.CDTextBox.setFocus();

        		this.gfnAlert("법인코드가 입력되지 않았습니다.");

        		return false;
        	}

        	return true;
        }

        this.fnSelect = function() {

        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));

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
        	var nrow = this.gfnGridAdd(this.dxGrid, "top");
        	this.dsList.setColumn(nrow, "NO_CLOSING", this.max + 1);
        	if(this.max > 0)
        	{
        		var targetRow = this.dsList.findRow("NO_CLOSING", this.max);
        		this.dsList.setColumn(nrow, "DT_CLOSING_FR", this.gfnAddMonth(this.dsList.getColumn(targetRow, "DT_CLOSING_FR"), 12));
        		this.dsList.setColumn(nrow, "DT_CLOSING_TO", this.gfnAddMonth(this.dsList.getColumn(targetRow, "DT_CLOSING_TO"), 12));

        	}
        	else
        	{
        		this.dsList.setColumn(nrow, "DT_CLOSING_FR", this.gfnGetDate());
        		this.dsList.setColumn(nrow, "DT_CLOSING_TO", this.gfnGetDate());
        	}
        	this.dsList.setColumn(nrow, "YM_ALLMAGAM", "");
        	this.max += 1;
        }

        this.fnDel = function() {
        	if(this.dsList.getColumn(this.dsList.rowposition, "NO_CLOSING") != this.max) {
        		this.gfnAlert("최종자료만 삭제할 수 있습니다.");
        		return false;
         	}

        	var flag = this.gfnGetFlag(this.dsList, this.dsList.rowposition);
        	if(flag == "I") this.max -= 1;

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
        				this.dsInsert.setColumn(nrow, "NO_CLOSING", this.dsList.getColumn(i, "NO_CLOSING"));
        				this.dsInsert.setColumn(nrow, "DT_CLOSING_FR", this.dsList.getColumn(i, "DT_CLOSING_FR"));
        				this.dsInsert.setColumn(nrow, "DT_CLOSING_TO", this.dsList.getColumn(i, "DT_CLOSING_TO"));
        				this.dsInsert.setColumn(nrow, "YM_ALLMAGAM", this.dsList.getColumn(i, "YM_ALLMAGAM"));
        				this.dsInsert.setColumn(nrow, "ID_TRANS", this.dsList.getColumn(i, "ID_TRANS"));
        				this.dsInsert.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "NO_CLOSING", this.dsList.getColumn(i, "NO_CLOSING"));
        				this.dsUpdate.setColumn(nrow, "DT_CLOSING_FR", this.dsList.getColumn(i, "DT_CLOSING_FR"));
        				this.dsUpdate.setColumn(nrow, "DT_CLOSING_TO", this.dsList.getColumn(i, "DT_CLOSING_TO"));
        				this.dsUpdate.setColumn(nrow, "YM_ALLMAGAM", this.dsList.getColumn(i, "YM_ALLMAGAM"));
        				this.dsUpdate.setColumn(nrow, "ID_TRANS", this.dsList.getColumn(i, "ID_TRANS"));
        				this.dsUpdate.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "NO_CLOSING", this.dsList.getColumn(i, "NO_CLOSING"));
        				this.dsDelete.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
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
        	this.gfnExcelExport(this.dxGrid);
        }

        this.fnPrint = function() {

        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if(id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	if(id == "ccfCD_CORP") {
        		//this.gfnSetFormStatus(this, "I");
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
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
            this.divSearch.form.ccfCD_CORP.addEventHandler("onclick",this.Common_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHF_CLOSING.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
