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
            this.set_titletext("자동전표 코드등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHMPR_AREACODE_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHMPR_AREACODE_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHMPR_AREACODE_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHMPR_AREACODE_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
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

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DHM_AREACODE.xfdl", function() {
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

        	this.FormBtns.Select.click();
        };

        this.fnSetButton = function() {
        }

        this.fnSetExtendButton = function() {
        };

        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;
        };

        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHM_AREACODE");
        }

        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_AREA", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_AREA", "string");
        	this.dsInsert.addColumn("DS_AREA", "string");
        	this.dsInsert.addColumn("SZ_AREA", "bigdecimal");
        	this.dsInsert.addColumn("AM_AREA", "bigdecimal");
        	this.dsInsert.addColumn("DT_AREA", "string");
        	this.dsInsert.addColumn("NO_ZIP1", "string");
        	this.dsInsert.addColumn("NO_ZIP2", "string");
        	this.dsInsert.addColumn("DS_ADDR", "string");
        	this.dsInsert.addColumn("DS_ADDR2", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_AREA", "string");
        	this.dsUpdate.addColumn("DS_AREA", "string");
        	this.dsUpdate.addColumn("SZ_AREA", "bigdecimal");
        	this.dsUpdate.addColumn("AM_AREA", "bigdecimal");
        	this.dsUpdate.addColumn("DT_AREA", "string");
        	this.dsUpdate.addColumn("NO_ZIP1", "string");
        	this.dsUpdate.addColumn("NO_ZIP2", "string");
        	this.dsUpdate.addColumn("DS_ADDR", "string");
        	this.dsUpdate.addColumn("DS_ADDR2", "string");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_AREA", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        this.fnSelect = function() {
        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_AREA", "");

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
        	var nrow = this.gfnGridAdd(this.dxGrid);
        }

        this.fnDel = function() {
        	var rows = this.dxGrid.getSelectedDatasetRows();
        	for (var i = 0; i < rows.length; i++) {
        		var nrow = rows[i];
        		var flag = this.gfnGetFlag(this.dsList, nrow);
        		if (flag == "U") {
        			this.gfnAlert("수정한 자료는 삭제할 수 없습니다.");
        			return;
        		}
        	}

        	this.gfnGridDel(this.dxGrid);
        }

        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;
        	if (!this.fnSaveValidation()) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_AREA", this.dsList.getColumn(i, "CD_AREA"));
        				this.dsInsert.setColumn(nrow, "DS_AREA", this.dsList.getColumn(i, "DS_AREA"));
        				this.dsInsert.setColumn(nrow, "SZ_AREA", this.dsList.getColumn(i, "SZ_AREA"));
        				this.dsInsert.setColumn(nrow, "AM_AREA", this.dsList.getColumn(i, "AM_AREA"));
        				this.dsInsert.setColumn(nrow, "DT_AREA", nexacro.replaceAll(this.dsList.getColumn(i, "DT_AREA"), "-", ""));
        				this.dsInsert.setColumn(nrow, "NO_ZIP1", this.dsList.getColumn(i, "NO_ZIP1"));
        				this.dsInsert.setColumn(nrow, "NO_ZIP2", this.dsList.getColumn(i, "NO_ZIP2"));
        				this.dsInsert.setColumn(nrow, "DS_ADDR", this.dsList.getColumn(i, "DS_ADDR"));
        				this.dsInsert.setColumn(nrow, "DS_ADDR2", this.dsList.getColumn(i, "DS_ADDR2"));
        				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_AREA", this.dsList.getColumn(i, "CD_AREA"));
        				this.dsUpdate.setColumn(nrow, "DS_AREA", this.dsList.getColumn(i, "DS_AREA"));
        				this.dsUpdate.setColumn(nrow, "SZ_AREA", this.dsList.getColumn(i, "SZ_AREA"));
        				this.dsUpdate.setColumn(nrow, "AM_AREA", this.dsList.getColumn(i, "AM_AREA"));
        				this.dsUpdate.setColumn(nrow, "DT_AREA", nexacro.replaceAll(this.dsList.getColumn(i, "DT_AREA"), "-", ""));
        				this.dsUpdate.setColumn(nrow, "NO_ZIP1", this.dsList.getColumn(i, "NO_ZIP1"));
        				this.dsUpdate.setColumn(nrow, "NO_ZIP2", this.dsList.getColumn(i, "NO_ZIP2"));
        				this.dsUpdate.setColumn(nrow, "DS_ADDR", this.dsList.getColumn(i, "DS_ADDR"));
        				this.dsUpdate.setColumn(nrow, "DS_ADDR2", this.dsList.getColumn(i, "DS_ADDR2"));
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_AREA", this.dsList.getColumn(i, "CD_AREA"));
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
         * Validate
         ************************************************************************/
        this.fnSelectValidation = function() {
        	var validate = true;
        	return validate;
        }

        this.fnSaveValidation = function() {
        	var msg = "";
        	var validate = true;
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		if (this.gfnIsNull(flag) || flag == "D") continue;

        		if (this.gfnTrim(this.dsList.getColumn(i, "CD_AREA")).length != 6) {
        			msg += (i + 1) + "열: [용지코드]는 6자리입니다.\n";
        			validate = false;
        		}

        		if (flag == "I") {
        			for (var j = 0; j < this.dsList.rowcount; j++) {
        				if (i == j) continue;;

        				if (this.dsList.getColumn(i, "CD_AREA") == this.dsList.getColumn(j, "CD_AREA")) {
        					this.gfnAlert("용지코드는 중복될 수 없습니다.");
        					return false;
        				}
        			}
        		}
        	}

        	if (!validate) {
        		this.gfnAlert(msg);
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
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

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
        this.loadIncludeScript("DHM_AREACODE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
