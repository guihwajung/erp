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
            this.set_titletext("재무제표유형");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHFPR_TYCLOSE_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHFPR_TYCLOSE_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHFPR_TYCLOSE_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHFPR_TYCLOSE_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_TBP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TY_TBP\">T</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_TBP", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">T</Col><Col id=\"VALUE\">합계잔액시산표</Col></Row><Row><Col id=\"CODE\">B</Col><Col id=\"VALUE\">재무상태표</Col></Row><Row><Col id=\"CODE\">P</Col><Col id=\"VALUE\">손익계산서</Col></Row><Row><Col id=\"CODE\">S</Col><Col id=\"VALUE\">원가명세서</Col></Row><Row><Col id=\"CODE\">A</Col><Col id=\"VALUE\">이익잉여금(결손금)처분표</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTY_TBP","0.0","10.0","131.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("재무제표유형");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccfTY_TBP","staTY_TBP:0.0","10.0","125","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsTY_TBP");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_text("합계잔액시산표");
            obj.set_value("I");
            obj.set_index("0");
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
            obj = new BindItem("item0","divSearch.form.ccfTY_TBP","value","dsSearch","TY_TBP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DHF_TYCLOSE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

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
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	//조회
        	this.ccfTY_TBP = this.divSearch.form.ccfTY_TBP;

        	//그리드
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
        	this.dsSelect.addColumn("TY_TBP", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("TY_CLOSE", "string");
        	this.dsInsert.addColumn("TY_TBP", "string");
        	this.dsInsert.addColumn("DS_TBP", "string");
        	this.dsInsert.addColumn("DS_REM", "string");
        	this.dsInsert.addColumn("ID_TRANS", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("TY_CLOSE", "string");
        	this.dsUpdate.addColumn("TY_TBP", "string");
        	this.dsUpdate.addColumn("DS_TBP", "string");
        	this.dsUpdate.addColumn("DS_REM", "string");
        	this.dsUpdate.addColumn("ID_TRANS", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("TY_CLOSE", "string");

        }



        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHF_TYCLOSE");
        }

        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if(svcID == "select") {

        		this.gfnGridAfterSelect(this.dxGrid);

        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}

        }

        this.fnSelectValidation = function() {
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "TY_TBP"))) {
        		this.ccfTY_TBP.form.CDTextBox.setFocus();
        		this.gfnAlert("재무제표유형을 선택하십시요.");
        		return false;
        	}

        	return true;
        }

        this.fnSaveValidation = function() {
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);

        		if (this.gfnIsNull(flag) || flag == "D") continue;

        		if (flag == "I" || flag == "U") {
        			for (var j = 0; j < this.dsList.rowcount; j++) {
        				if (j == i) continue;
        				if (this.dsList.getColumn(i, "TY_CLOSE") == this.dsList.getColumn(j, "TY_CLOSE")) {
        					this.gfnAlert("재무제표유형코드는 중복될 수 없습니다.");
        					return false;
        				}
        			}

        			if (this.dsList.getColumn(i, "TY_CLOSE").length != 7) {
        				this.gfnAlert("재무제표유형코드는 7자리입니다.");
        				return false;
        			}
        		}
        	}

        	return true;
        }

        this.fnSelect = function() {

        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "TY_TBP", this.dsSearch.getColumn(0, "TY_TBP"));

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

        	var TY_TBP_CODE = "";

        	switch(this.dsSearch.getColumn(0, "TY_TBP")) {
        		case "T":
        			TY_TBP_CODE = "TB";
        			break;

        		case "B":
        			TY_TBP_CODE = "BS";
        			break;

        		case "P":
        			TY_TBP_CODE = "PL";
        			break;

        		case "S":
        			TY_TBP_CODE = "SC";
        			break;

        		case "A":
        			TY_TBP_CODE = "SP";
        			break;
        	}

        	var nrow = this.gfnGridAdd(this.dxGrid, "top");

        	this.dsList.set_enableevent(false);
        	this.dsList.setColumn(nrow, "TY_CLOSE", TY_TBP_CODE);
        	this.dsList.setColumn(nrow, "DS_TBP", "");
        	this.dsList.setColumn(nrow, "DS_REM", "");
        	this.dsList.set_enableevent(true);
        }

        this.fnDel = function() {

        	this.gfnGridDel(this.dxGrid);
        }

        this.fnSave = function() {
        	if (!this.fnSaveValidation()) return;
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
        				this.dsInsert.setColumn(nrow, "TY_CLOSE", this.dsList.getColumn(i, "TY_CLOSE"));
        				this.dsInsert.setColumn(nrow, "TY_TBP", this.dsSearch.getColumn(0, "TY_TBP"));
        				this.dsInsert.setColumn(nrow, "DS_TBP", this.dsList.getColumn(i, "DS_TBP"));
        				this.dsInsert.setColumn(nrow, "DS_REM", this.dsList.getColumn(i, "DS_REM"));
        				this.dsInsert.setColumn(nrow, "ID_TRANS", this.AuthClient.ID_USER);
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "TY_CLOSE", this.dsList.getColumn(i, "TY_CLOSE"));
        				this.dsUpdate.setColumn(nrow, "TY_TBP", this.dsSearch.getColumn(0, "TY_TBP"));
        				this.dsUpdate.setColumn(nrow, "DS_TBP", this.dsList.getColumn(i, "DS_TBP"));
        				this.dsUpdate.setColumn(nrow, "DS_REM", this.dsList.getColumn(i, "DS_REM"));
        				this.dsUpdate.setColumn(nrow, "ID_TRANS", this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "TY_CLOSE", this.dsList.getColumn(i, "TY_CLOSE"));
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
         * 그리드 이벤트
         ************************************************************************/



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
        this.loadIncludeScript("DHF_TYCLOSE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
