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
            this.set_titletext("상각율표관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHNPR_RTDEP_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHNPR_RTDEP_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHNPR_RTDEP_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHNPR_RTDEP_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","5",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","15",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_DEP","75","-34","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsYN_DEP");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
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
        this.registerScript("DHN_RTDEP.xfdl", function() {
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

        	this.FormBtns.Select.click();
        };

        this.fnSetExtendButton = function() {
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	//그리드
        	this.dxGrid = this.divData.form.objGrid;
        };

        this.fnSetButton = function() {

        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        }

        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("ID_TRANS", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("YR_LIFE", "string");
        	this.dsInsert.addColumn("RT_FIXAMOUNT", "string");
        	this.dsInsert.addColumn("RT_FIXRATE", "string");
        	this.dsInsert.addColumn("ID_TRANS", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("YR_LIFE", "string");
        	this.dsUpdate.addColumn("RT_FIXAMOUNT", "string");
        	this.dsUpdate.addColumn("RT_FIXRATE", "string");
        	this.dsUpdate.addColumn("ID_TRANS", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("YR_LIFE", "string");

        }

        this.fnSetEvent = function() {

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHN_RTDEP");

        	this.dxGrid.set_selecttype("cell");

        }

        this.fnSearchInit = function(id) {
        	this.gfnSetFormStatus(this);
        };

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

        	return true;
        }

        this.fnSaveValidation = function() {
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);

        		if (this.gfnIsNull(flag) || flag == "D") continue;

        		if (flag == "I" || flag == "U") {
        			if (this.dsList.getColumn(i, "RT_FIXAMOUNT") < 0.000 || this.dsList.getColumn(i, "RT_FIXAMOUNT") > 1.000) {
        				this.gfnAlert("정액법은 0~1의 (소숫점3자리이내)숫자로 입력하셔야 됩니다.");
        				return false;
        			}
        			if (this.dsList.getColumn(i, "RT_FIXRATE") < 0.000 || this.dsList.getColumn(i, "RT_FIXRATE") > 1.000) {
        				this.gfnAlert("정율법은 0~1의 (소숫점3자리이내)숫자로 입력하셔야 됩니다.");
        				return false;
        			}

        		}

        		if(this.dsList.getCaseCount("YR_LIFE == '" + this.dsList.getColumn(i, "YR_LIFE") + "'") > 1){
        			this.gfnAlert("내용연수(은)는 중복될수 없습니다.");
        			return false;
        		}
        	}

        	return true;
        }

        this.fnSelect = function() {

        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "ID_TRANS", "");

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

        	this.dsList.setColumn(nrow, "YR_LIFE", "0");

        }

        this.fnDel = function() {
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
        				this.dsInsert.setColumn(nrow, "YR_LIFE", this.dsList.getColumn(i, "YR_LIFE"));
        				this.dsInsert.setColumn(nrow, "RT_FIXAMOUNT", this.dsList.getColumn(i, "RT_FIXAMOUNT"));
        				this.dsInsert.setColumn(nrow, "RT_FIXRATE", this.dsList.getColumn(i, "RT_FIXRATE"));
        				this.dsInsert.setColumn(nrow, "ID_TRANS", this.AuthClient.ID_USER);
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "YR_LIFE", this.dsList.getColumn(i, "YR_LIFE"));
        				this.dsUpdate.setColumn(nrow, "RT_FIXAMOUNT", this.dsList.getColumn(i, "RT_FIXAMOUNT"));
        				this.dsUpdate.setColumn(nrow, "RT_FIXRATE", this.dsList.getColumn(i, "RT_FIXRATE"));
        				this.dsUpdate.setColumn(nrow, "ID_TRANS", this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "YR_LIFE", this.dsList.getColumn(i, "YR_LIFE"));
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


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.rdoYN_DEP.addEventHandler("onitemchanged",this.rdo00_onitemchanged,this);
        };
        this.loadIncludeScript("DHN_RTDEP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
