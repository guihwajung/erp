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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHZPR_EXRATE_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHZPR_EXRATE_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHZPR_EXRATE_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHZPR_EXRATE_DELETE</Col></Row><Row><Col id=\"TARGET\">copy</Col><Col id=\"SP\">DHZPR_EXRATE_COPY</Col></Row><Row><Col id=\"TARGET\">deleteall</Col><Col id=\"SP\">DHZPR_EXRATE_DELETEALL</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DHZPR_EXRATE_CURRCD_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YM_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"CURR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YM_BASE\"/><Col id=\"CURR_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCURR_CD", this);
            obj._setContents("<ColumnInfo><Column id=\"CURR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","staDT_FROM:0.0","staDT_FROM:10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("회계년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclYM_BASE","staCD_SYSTEM:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SUB_SYSTEM","ctclYM_BASE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("기준통화");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCURR_CD","staCD_SUB_SYSTEM:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsCURR_CD");
            obj.set_datacolumn("CURR_CD");
            obj.set_codecolumn("CURR_CD");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","30",null,null,"0","0",null,null,null,null,this);
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
            obj = new BindItem("item0","divSearch.form.ctclYM_BASE","value","dsSearch","YM_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccboCURR_CD","value","dsSearch","CURR_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DHZ_EXRATE.xfdl", function() {
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


        	var today = this.gfnGetDate().substring(0,6);
        	this.dsSearch.setColumn(0, "YM_BASE", today);
        	this.fnCombo();

        	this.FormBtns.Select.click();
        };

        this.fnSetButton = function() {

        }

        this.fnSetExtendButton = function() {
        	this.btnCopy = this.gfnFormButtonAdd("Copy", "fnCopy", "전월자료복사");
        	this.btnUpload = this.gfnFormButtonAdd("Upload", "fnUpload", "Excel Upload");

        	this.btnCopy.set_enable(false);
        	this.btnUpload.set_enable(false);
        };

        this.fnSetVariable = function() {
        	this.ctclYM_BASE = this.divSearch.form.ctclYM_BASE;
        	this.ccboCURR_CD = this.divSearch.form.ccboCURR_CD;

        	this.dxGrid = this.divData.form.objGrid;
        };

        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHZ_EXRATE");

        }

        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YM_BASE", "string");
        	this.dsSelect.addColumn("CURR_CD", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("YM_BASE", "string");
        	this.dsInsert.addColumn("CURR_CD", "string");
        	this.dsInsert.addColumn("LAST_EXRATE", "bigdecimal");
        	this.dsInsert.addColumn("AVG_EXRATE", "bigdecimal");
        	this.dsInsert.addColumn("GEN_SIZE", "bigdecimal");
        	this.dsInsert.addColumn("ID_INSERT", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("YM_BASE", "string");
        	this.dsUpdate.addColumn("CURR_CD", "string");
        	this.dsUpdate.addColumn("LAST_EXRATE", "bigdecimal");
        	this.dsUpdate.addColumn("AVG_EXRATE", "bigdecimal");
        	this.dsUpdate.addColumn("GEN_SIZE", "bigdecimal");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("YM_BASE", "string");
        	this.dsDelete.addColumn("CURR_CD", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        this.fnSelect = function() {
        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "YM_BASE", this.dsSearch.getColumn(0, "YM_BASE"));
        	this.dsSelect.setColumn(0, "CURR_CD", this.dsSearch.getColumn(0, "CURR_CD"));

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
        }

        this.fnDel = function() {
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
        				this.dsInsert.setColumn(nrow, "YM_BASE", this.dsSearch.getColumn(0, "YM_BASE"));
        				this.dsInsert.setColumn(nrow, "CURR_CD", this.dsList.getColumn(i, "CURR_CD"));
        				this.dsInsert.setColumn(nrow, "LAST_EXRATE", this.dsList.getColumn(i, "LAST_EXRATE"));
        				this.dsInsert.setColumn(nrow, "AVG_EXRATE", this.dsList.getColumn(i, "AVG_EXRATE"));
        				this.dsInsert.setColumn(nrow, "GEN_SIZE", this.dsList.getColumn(i, "GEN_SIZE"));
        				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "YM_BASE", this.dsSearch.getColumn(0, "YM_BASE"));
        				this.dsUpdate.setColumn(nrow, "CURR_CD", this.dsList.getColumn(i, "CURR_CD"));
        				this.dsUpdate.setColumn(nrow, "LAST_EXRATE", this.dsList.getColumn(i, "LAST_EXRATE"));
        				this.dsUpdate.setColumn(nrow, "AVG_EXRATE", this.dsList.getColumn(i, "AVG_EXRATE"));
        				this.dsUpdate.setColumn(nrow, "GEN_SIZE", this.dsList.getColumn(i, "GEN_SIZE"));
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "YM_BASE", this.dsSearch.getColumn(0, "YM_BASE"));
        				this.dsDelete.setColumn(nrow, "CURR_CD", this.dsList.getColumn(i, "CURR_CD"));
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
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"YM_BASE"))) {
        		// Alert후 실행할 처리
        		this.fnVaidateCallback1 = function() {
        			this.ctclYM_BASE.setFocus();
        		}
        		this.gfnAlert("회계년월은 반드시 입력 하셔야 합니다.", "fnVaidateCallback1");
        		return false;
        	}
        	return true;
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if(svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.btnCopy.set_enable(true);
        			this.btnUpload.set_enable(true);

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
        /*
         *	조회 조건 변경시 초기화
         */
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		this.btnCopy.set_enable(false);
        		this.btnUpload.set_enable(false);

        		if (e.columnid == "YM_BASE") {
        			this.fnCombo();
        		}
        	}
        };

        this.fnCopy = function() {
        	if (this.dsSearch.getColumn(0, "YM_BASE") == "") {
        		this.gfnAlert("회계년월은 반드시 입력 하셔야 합니다.");
        		return;
        	}

        	var msg = "";
        	if (this.dsList.rowcount > 0)
        		msg = "기존자료가 존재합니다. 변경하시겠습니까?";
        	else
        		msg = "전월자료를 복사하시겠습니까?";

        	this.gfnConfirm(msg, "fnCopyCallback");
        }

        this.fnCopyCallback = function(id, val){
        	if (val) {

        	}
        }

        this.fnUpload = function() {
        }

        this.fnCombo = function() {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("YM_BASE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "YM_BASE", this.dsSearch.getColumn(0, "YM_BASE"));

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCURR_CD=combo0";
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.rdoYN_DEP.addEventHandler("onitemchanged",this.rdo00_onitemchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHZ_EXRATE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
