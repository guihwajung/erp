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
            this.set_titletext("사업수지항목");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_DEPTINVEST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPTINVEST\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DOSPR_BASIS_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DOSPR_BASIS_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DOSPR_BASIS_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DOSPR_BASIS_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ITEM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ITEM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_PROJ\"/><Col id=\"DS_PROJ\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_PROJ","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("프로젝트");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_PROJ","staCD_PROJ:0.0","10.0","350","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DOS_CFPROJ");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ITEM","ccfCD_PROJ:0.0","10.0","350","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DOS_CFITEM");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_ITEM","ccfCD_ITEM:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("사업수지");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
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
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_PROJ.form.CDTextBox","value","dsSearch","CD_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_PROJ.form.DSTextBox","value","dsSearch","DS_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_ITEM.form.CDTextBox","value","dsSearch","CD_ITEM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_ITEM.form.DSTextBox","value","dsSearch","DS_ITEM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DOS_BASIS.xfdl", function() {
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

        	if (!this.gfnIsNull(this.getOwnerFrame().CD_PROJ)) {
        		this.dsSearch.setColumn(0, "CD_PROJ", this.getOwnerFrame().CD_PROJ);
        		this.dsSearch.setColumn(0, "DS_PROJ", this.getOwnerFrame().DS_PROJ);
        		this.dsSearch.setColumn(0, "CD_ITEM", this.getOwnerFrame().CD_ITEM);
        		this.dsSearch.setColumn(0, "DS_ITEM", this.getOwnerFrame().DS_ITEM);
        	}

        	if (!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_PROJ")))
        		this.FormBtns.Select.click();
        };

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
         	this.ccfCD_PROJ = this.divSearch.form.ccfCD_PROJ;
        	this.ccfCD_ITEM = this.divSearch.form.ccfCD_ITEM;

         	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
         	this.gfnGridInit(this.dxGrid, this.dsList, "DO", "DOS_BASIS");

         	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

         	this.ccfCD_PROJ.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ITEM.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_PROJ.AfterCDTextChanged = "fnAfterCDTextChanged";

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_PROJ", "string");
        	this.dsSelect.addColumn("CD_ITEM", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_PROJ", "string");
        	this.dsInsert.addColumn("CD_ITEM", "string");
        	this.dsInsert.addColumn("NO_BASIS", "int");
        	this.dsInsert.addColumn("TY_BASIS", "string");
        	this.dsInsert.addColumn("DS_BASIS", "string");
        	this.dsInsert.addColumn("DS_BASIS1", "string");
        	this.dsInsert.addColumn("TY_BASIS1", "string");
        	this.dsInsert.addColumn("DS_BASIS2", "string");
        	this.dsInsert.addColumn("TY_BASIS2", "string");
        	this.dsInsert.addColumn("DS_BASIS3", "string");
        	this.dsInsert.addColumn("TY_BASIS3", "string");
        	this.dsInsert.addColumn("DS_BASIS4", "string");
        	this.dsInsert.addColumn("TY_BASIS4", "string");
        	this.dsInsert.addColumn("DS_BASIS5", "string");
        	this.dsInsert.addColumn("TY_BASIS5", "string");
        	this.dsInsert.addColumn("DS_BASIS6", "string");
        	this.dsInsert.addColumn("TY_BASIS6", "string");
        	this.dsInsert.addColumn("DS_BASIS7", "string");
        	this.dsInsert.addColumn("RM_BIGO", "string");
        	this.dsInsert.addColumn("ID_USER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_PROJ", "string");
        	this.dsUpdate.addColumn("CD_ITEM", "string");
        	this.dsUpdate.addColumn("NO_BASIS", "int");
        	this.dsUpdate.addColumn("TY_BASIS", "string");
        	this.dsUpdate.addColumn("DS_BASIS", "string");
        	this.dsUpdate.addColumn("DS_BASIS1", "string");
        	this.dsUpdate.addColumn("TY_BASIS1", "string");
        	this.dsUpdate.addColumn("DS_BASIS2", "string");
        	this.dsUpdate.addColumn("TY_BASIS2", "string");
        	this.dsUpdate.addColumn("DS_BASIS3", "string");
        	this.dsUpdate.addColumn("TY_BASIS3", "string");
        	this.dsUpdate.addColumn("DS_BASIS4", "string");
        	this.dsUpdate.addColumn("TY_BASIS4", "string");
        	this.dsUpdate.addColumn("DS_BASIS5", "string");
        	this.dsUpdate.addColumn("TY_BASIS5", "string");
        	this.dsUpdate.addColumn("DS_BASIS6", "string");
        	this.dsUpdate.addColumn("TY_BASIS6", "string");
        	this.dsUpdate.addColumn("DS_BASIS7", "string");
        	this.dsUpdate.addColumn("RM_BIGO", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_PROJ", "string");
        	this.dsDelete.addColumn("CD_ITEM", "string");
        	this.dsDelete.addColumn("NO_BASIS", "int");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        this.fnSelect = function() {
        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        	this.dsSelect.setColumn(0, "CD_ITEM", this.dsSearch.getColumn(0, "CD_ITEM"));

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
        	var nrow = this.gfnGridAdd(this.dxGrid,"");

        // 	this.dsList.setColumn(nrow, "YN_CONTROL", "Y");
        // 	this.dsList.setColumn(nrow, "YN_USE", "Y");
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
        			case "I" :

        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        				this.dsInsert.setColumn(nrow, "CD_ITEM", this.dsList.getColumn(i, "CD_ITEM"));
        				this.dsInsert.setColumn(nrow, "NO_BASIS", this.dsList.getColumn(i, "NO_BASIS"));
        				this.dsInsert.setColumn(nrow, "TY_BASIS", this.dsList.getColumn(i, "TY_BASIS"));
        				this.dsInsert.setColumn(nrow, "DS_BASIS", this.dsList.getColumn(i, "DS_BASIS"));
        				this.dsInsert.setColumn(nrow, "DS_BASIS1", this.dsList.getColumn(i, "DS_BASIS1"));
        				this.dsInsert.setColumn(nrow, "TY_BASIS1", this.dsList.getColumn(i, "TY_BASIS1"));
        				this.dsInsert.setColumn(nrow, "DS_BASIS2", this.dsList.getColumn(i, "DS_BASIS2"));
        				this.dsInsert.setColumn(nrow, "TY_BASIS2", this.dsList.getColumn(i, "TY_BASIS2"));
        				this.dsInsert.setColumn(nrow, "DS_BASIS3", this.dsList.getColumn(i, "DS_BASIS3"));
        				this.dsInsert.setColumn(nrow, "TY_BASIS3", this.dsList.getColumn(i, "TY_BASIS3"));
        				this.dsInsert.setColumn(nrow, "DS_BASIS4", this.dsList.getColumn(i, "DS_BASIS4"));
        				this.dsInsert.setColumn(nrow, "TY_BASIS4", this.dsList.getColumn(i, "TY_BASIS4"));
        				this.dsInsert.setColumn(nrow, "DS_BASIS5", this.dsList.getColumn(i, "DS_BASIS5"));
        				this.dsInsert.setColumn(nrow, "TY_BASIS5", this.dsList.getColumn(i, "TY_BASIS5"));
        				this.dsInsert.setColumn(nrow, "DS_BASIS6", this.dsList.getColumn(i, "DS_BASIS6"));
        				this.dsInsert.setColumn(nrow, "TY_BASIS6", this.dsList.getColumn(i, "TY_BASIS6"));
        				this.dsInsert.setColumn(nrow, "DS_BASIS7", this.dsList.getColumn(i, "DS_BASIS7"));
        				this.dsInsert.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        				break;
        			case "U" :

        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        				this.dsUpdate.setColumn(nrow, "CD_ITEM", this.dsList.getColumn(i, "CD_ITEM"));
        				this.dsUpdate.setColumn(nrow, "NO_BASIS", this.dsList.getColumn(i, "NO_BASIS"));
        				this.dsUpdate.setColumn(nrow, "TY_BASIS", this.dsList.getColumn(i, "TY_BASIS"));
        				this.dsUpdate.setColumn(nrow, "DS_BASIS", this.dsList.getColumn(i, "DS_BASIS"));
        				this.dsUpdate.setColumn(nrow, "DS_BASIS1", this.dsList.getColumn(i, "DS_BASIS1"));
        				this.dsUpdate.setColumn(nrow, "TY_BASIS1", this.dsList.getColumn(i, "TY_BASIS1"));
        				this.dsUpdate.setColumn(nrow, "DS_BASIS2", this.dsList.getColumn(i, "DS_BASIS2"));
        				this.dsUpdate.setColumn(nrow, "TY_BASIS2", this.dsList.getColumn(i, "TY_BASIS2"));
        				this.dsUpdate.setColumn(nrow, "DS_BASIS3", this.dsList.getColumn(i, "DS_BASIS3"));
        				this.dsUpdate.setColumn(nrow, "TY_BASIS3", this.dsList.getColumn(i, "TY_BASIS3"));
        				this.dsUpdate.setColumn(nrow, "DS_BASIS4", this.dsList.getColumn(i, "DS_BASIS4"));
        				this.dsUpdate.setColumn(nrow, "TY_BASIS4", this.dsList.getColumn(i, "TY_BASIS4"));
        				this.dsUpdate.setColumn(nrow, "DS_BASIS5", this.dsList.getColumn(i, "DS_BASIS5"));
        				this.dsUpdate.setColumn(nrow, "TY_BASIS5", this.dsList.getColumn(i, "TY_BASIS5"));
        				this.dsUpdate.setColumn(nrow, "DS_BASIS6", this.dsList.getColumn(i, "DS_BASIS6"));
        				this.dsUpdate.setColumn(nrow, "TY_BASIS6", this.dsList.getColumn(i, "TY_BASIS6"));
        				this.dsUpdate.setColumn(nrow, "DS_BASIS7", this.dsList.getColumn(i, "DS_BASIS7"));
        				this.dsUpdate.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        				break;
        			case "D" :

        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        				this.dsDelete.setColumn(nrow, "CD_ITEM", this.dsList.getColumn(i, "CD_ITEM"));
        				this.dsDelete.setColumn(nrow, "NO_BASIS", this.dsList.getColumn(i, "NO_BASIS"));


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
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_PROJ"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_PROJ.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("프로젝트 코드를 입력하지 않았습니다.", "fnVaidateCallback");
        		return false;
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

        // this.fnDlgButton_callback = function(svcID, val) {
        // 	if(val != false) {
        //
        // 		var json = JSON.parse(val);
        //
        // 		this.dsSearch.setColumn(0, "CD_PROJ", json.CD_PROJ);
        // 		this.dsSearch.setColumn(0, "DS_PROJ", json.DS_PROJ);
        //
        // // 		this.ccfCD_PROJ.form.CDTextBox.set_value(json.CD_PROJ);
        // // 		this.ccfCD_PROJ.form.DSTextBox.set_value(json.DS_PROJ);
        //
        // 		this.FormBtns.Select.click();
        // 	}
        //}
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_PROJ") {
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	} else if (id == "ccfCD_ITEM") {
        		dsUserParam.setColumn(nrow, "CD_PROJ", this.ccfCD_PROJ.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "TY_INOUT", "");
        		dsUserParam.setColumn(nrow, "YN_USE", "");
        	}


        	return true;
        };

         this.fnAfterCDTextChanged = function(id, codeFindData) {
         	var arr = codeFindData;

        	if(id == "ccfCD_PROJ") {
        		this.ccfCD_ITEM.form.fnCodeFindClear();
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	switch(id) {
        		case "DOS_CFITEM": //상위항목
        			dsUserParam.setColumn(nrow, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        			dsUserParam.setColumn(nrow, "TY_INOUT", "");
        			dsUserParam.setColumn(nrow, "YN_USE", "");
        			break;
        // 		case "DOS_CFACNTUNIT": //귀속부서
        // 			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        // 			dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        // 			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        // 			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        // 			dsUserParam.setColumn(nrow, "CD_PROJ", this.ccfCD_PROJ.form.CDTextBox.value);
        // 			break;
        // 		case "DOS_CFVENDOR": //거래처
        // 			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        // 			dsUserParam.setColumn(nrow, "TY_VENDOR1", "전체");
        // 			dsUserParam.setColumn(nrow, "CD_PROJ", this.ccfCD_PROJ.form.CDTextBox.value);
        // 			break;
        // 		case "DOS_CFSIZEINFO": //평형정보
        // 			dsUserParam.setColumn(nrow, "CD_PROJ", this.ccfCD_PROJ.form.CDTextBox.value);
        // 			dsUserParam.setColumn(nrow, "CD_DEPTINVEST", this.dsList.getColumn(this.dsList.rowposition, "CD_DEPTINVEST"));
        // 		default:
        // 			break;
        	}
        	return true;
        };

        /************************************************************************
         * 확장버튼 이벤트
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
            this.divSearch.form.staCD_PROJ.addEventHandler("onclick",this.divSearch_staCD_PROJ_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DOS_BASIS.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
