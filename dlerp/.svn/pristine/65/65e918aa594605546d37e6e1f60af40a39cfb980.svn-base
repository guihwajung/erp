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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZZPR_MDM_MASTERCOL_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DZZPR_MDM_MASTERCOL_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DZZPR_MDM_MASTERCOL_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DZZPR_MDM_MASTERCOL_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SYSTEM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_MASTER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SYSTEM\"/><Col id=\"CD_MASTER\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("시스템코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_SYSTEM","staCD_SYSTEM:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_MASTER","ctxtCD_SYSTEM:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("마스터코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_MASTER","staCD_MASTER:0.0","10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_value("");
            obj.set_readonly("true");
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
            obj = new BindItem("item0","divSearch.form.ctxtCD_SYSTEM","value","dsSearch","CD_SYSTEM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctxtCD_MASTER","value","dsSearch","CD_MASTER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DQZ_MDM_MASTERCOL.xfdl", function() {
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

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	var frame = this.getOwnerFrame();
        	if(!this.gfnIsNull(frame.CD_SYSTEM) && !this.gfnIsNull(frame.CD_MASTER)) {
        		this.dsSearch.setColumn(0, "CD_SYSTEM", frame.CD_SYSTEM);
        		this.dsSearch.setColumn(0, "CD_MASTER", frame.CD_MASTER);

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
        	//this.FormBtns.Select.set_enable(false);
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
        	this.gfnGridInit(this.dxGrid, this.dsList, "DQ", "DQZ_MDM_MASTERCOL");

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SYSTEM", "string");
        	this.dsSelect.addColumn("CD_MASTER", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_SYSTEM", "string");
        	this.dsInsert.addColumn("CD_MASTER", "string");
        	this.dsInsert.addColumn("CD_COLID", "string");
        	this.dsInsert.addColumn("DS_COLID", "string");
        	this.dsInsert.addColumn("DS_COLID2", "string");
        	this.dsInsert.addColumn("DS_COLID3", "string");
        	this.dsInsert.addColumn("DS_ORISYSTEM", "string");
        	this.dsInsert.addColumn("DS_ORITABLE", "string");
        	this.dsInsert.addColumn("DS_ORICOL", "string");
        	this.dsInsert.addColumn("TY_TYPE", "string");
        	this.dsInsert.addColumn("TY_NOTNULL", "string");
        	this.dsInsert.addColumn("CD_LEN", "int");
        	this.dsInsert.addColumn("CD_REGEXP1", "string");
        	this.dsInsert.addColumn("TY_INPUT", "string");
        	this.dsInsert.addColumn("CD_INPUT", "string");
        	this.dsInsert.addColumn("NO_ORDER", "int");
        	this.dsInsert.addColumn("TY_PK", "string");
        	this.dsInsert.addColumn("TY_ALIGN", "string");
        	this.dsInsert.addColumn("DS_COMBOLIS", "string");
        	this.dsInsert.addColumn("CD_CODEFIND", "string");
        	this.dsInsert.addColumn("NM_CODEFIND", "string");
        	this.dsInsert.addColumn("DS_RESULTALIAS", "string");
        	this.dsInsert.addColumn("RM_BIGO", "string");
        	this.dsInsert.addColumn("AT_READONLY", "string");
        	this.dsInsert.addColumn("AT_GRAYBACK", "string");
        	this.dsInsert.addColumn("TY_FIXED", "string");
        	this.dsInsert.addColumn("TY_SUMMARY", "string");
        	this.dsInsert.addColumn("LN_COL", "int");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_SYSTEM", "string");
        	this.dsUpdate.addColumn("CD_MASTER", "string");
        	this.dsUpdate.addColumn("CD_COLID", "string");
        	this.dsUpdate.addColumn("DS_COLID", "string");
        	this.dsUpdate.addColumn("DS_COLID2", "string");
        	this.dsUpdate.addColumn("DS_COLID3", "string");
        	this.dsUpdate.addColumn("DS_ORISYSTEM", "string");
        	this.dsUpdate.addColumn("DS_ORITABLE", "string");
        	this.dsUpdate.addColumn("DS_ORICOL", "string");
        	this.dsUpdate.addColumn("TY_TYPE", "string");
        	this.dsUpdate.addColumn("TY_NOTNULL", "string");
        	this.dsUpdate.addColumn("CD_LEN", "int");
        	this.dsUpdate.addColumn("CD_REGEXP1", "string");
        	this.dsUpdate.addColumn("TY_INPUT", "string");
        	this.dsUpdate.addColumn("CD_INPUT", "string");
        	this.dsUpdate.addColumn("NO_ORDER", "int");
        	this.dsUpdate.addColumn("TY_PK", "string");
        	this.dsUpdate.addColumn("TY_ALIGN", "string");
        	this.dsUpdate.addColumn("DS_COMBOLIS", "string");
        	this.dsUpdate.addColumn("CD_CODEFIND", "string");
        	this.dsUpdate.addColumn("NM_CODEFIND", "string");
        	this.dsUpdate.addColumn("DS_RESULTALIAS", "string");
        	this.dsUpdate.addColumn("RM_BIGO", "string");
        	this.dsUpdate.addColumn("AT_READONLY", "string");
        	this.dsUpdate.addColumn("AT_GRAYBACK", "string");
        	this.dsUpdate.addColumn("TY_FIXED", "string");
        	this.dsUpdate.addColumn("TY_SUMMARY", "string");
        	this.dsUpdate.addColumn("LN_COL", "int");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_SYSTEM", "string");
        	this.dsDelete.addColumn("CD_MASTER", "string");
        	this.dsDelete.addColumn("CD_COLID", "string");
            this.dsDelete.addColumn("CD_INPUT", "string");
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

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_SYSTEM", this.dsSearch.getColumn(0, "CD_SYSTEM"));
        	this.dsSelect.setColumn(0, "CD_MASTER", this.dsSearch.getColumn(0, "CD_MASTER"));

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
        	var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        	this.dsList.setColumn(nrow, "CD_MASTER", this.dsSearch.getColumn(0, "CD_MASTER"));
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

        	var cd_system = this.dsSearch.getColumn(i, "CD_SYSTEM");
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_SYSTEM", cd_system);
        				this.dsInsert.setColumn(nrow, "CD_MASTER", this.dsList.getColumn(i, "CD_MASTER"));
        				this.dsInsert.setColumn(nrow, "CD_COLID", this.dsList.getColumn(i, "CD_COLID"));
        				this.dsInsert.setColumn(nrow, "DS_COLID", this.dsList.getColumn(i, "DS_COLID"));
        				this.dsInsert.setColumn(nrow, "DS_COLID2", this.dsList.getColumn(i, "DS_COLID2"));
        				this.dsInsert.setColumn(nrow, "DS_COLID3", this.dsList.getColumn(i, "DS_COLID3"));
        				this.dsInsert.setColumn(nrow, "DS_ORISYSTEM", this.dsList.getColumn(i, "DS_ORISYSTEM"));
        				this.dsInsert.setColumn(nrow, "DS_ORITABLE", this.dsList.getColumn(i, "DS_ORITABLE"));
        				this.dsInsert.setColumn(nrow, "DS_ORICOL", this.dsList.getColumn(i, "DS_ORICOL"));
        				this.dsInsert.setColumn(nrow, "TY_TYPE", this.dsList.getColumn(i, "TY_TYPE"));
        				this.dsInsert.setColumn(nrow, "TY_NOTNULL", this.dsList.getColumn(i, "TY_NOTNULL"));
        				this.dsInsert.setColumn(nrow, "CD_LEN", this.dsList.getColumn(i, "CD_LEN"));
        				this.dsInsert.setColumn(nrow, "CD_REGEXP1", this.dsList.getColumn(i, "CD_REGEXP1"));
        				this.dsInsert.setColumn(nrow, "TY_INPUT", this.dsList.getColumn(i, "TY_INPUT"));
        				this.dsInsert.setColumn(nrow, "CD_INPUT", this.AuthClient.ID_USER);
        				this.dsInsert.setColumn(nrow, "NO_ORDER", this.dsList.getColumn(i, "NO_ORDER"));
        				this.dsInsert.setColumn(nrow, "TY_PK", this.dsList.getColumn(i, "TY_PK"));
        				this.dsInsert.setColumn(nrow, "TY_ALIGN", this.dsList.getColumn(i, "TY_ALIGN"));
        				this.dsInsert.setColumn(nrow, "DS_COMBOLIS", this.dsList.getColumn(i, "DS_COMBOLIS"));
        				this.dsInsert.setColumn(nrow, "CD_CODEFIND", this.dsList.getColumn(i, "CD_CODEFIND"));
        				this.dsInsert.setColumn(nrow, "NM_CODEFIND", this.dsList.getColumn(i, "NM_CODEFIND"));
        				this.dsInsert.setColumn(nrow, "DS_RESULTALIAS", this.dsList.getColumn(i, "DS_RESULTALIAS"));
        				this.dsInsert.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsInsert.setColumn(nrow, "AT_READONLY", this.dsList.getColumn(i, "AT_READONLY"));
        				this.dsInsert.setColumn(nrow, "AT_GRAYBACK", this.dsList.getColumn(i, "AT_GRAYBACK"));
        				this.dsInsert.setColumn(nrow, "TY_FIXED", this.dsList.getColumn(i, "TY_FIXED"));
        				this.dsInsert.setColumn(nrow, "TY_SUMMARY", this.dsList.getColumn(i, "TY_SUMMARY"));
        				this.dsInsert.setColumn(nrow, "LN_COL", this.dsList.getColumn(i, "LN_COL"));
        				break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_SYSTEM", cd_system);
        				this.dsUpdate.setColumn(nrow, "CD_MASTER", this.dsList.getColumn(i, "CD_MASTER"));
        				this.dsUpdate.setColumn(nrow, "CD_COLID", this.dsList.getColumn(i, "CD_COLID"));
        				this.dsUpdate.setColumn(nrow, "DS_COLID", this.dsList.getColumn(i, "DS_COLID"));
        				this.dsUpdate.setColumn(nrow, "DS_COLID2", this.dsList.getColumn(i, "DS_COLID2"));
        				this.dsUpdate.setColumn(nrow, "DS_COLID3", this.dsList.getColumn(i, "DS_COLID3"));
        				this.dsUpdate.setColumn(nrow, "DS_ORISYSTEM", this.dsList.getColumn(i, "DS_ORISYSTEM"));
        				this.dsUpdate.setColumn(nrow, "DS_ORITABLE", this.dsList.getColumn(i, "DS_ORITABLE"));
        				this.dsUpdate.setColumn(nrow, "DS_ORICOL", this.dsList.getColumn(i, "DS_ORICOL"));
        				this.dsUpdate.setColumn(nrow, "TY_TYPE", this.dsList.getColumn(i, "TY_TYPE"));
        				this.dsUpdate.setColumn(nrow, "TY_NOTNULL", this.dsList.getColumn(i, "TY_NOTNULL"));
        				this.dsUpdate.setColumn(nrow, "CD_LEN", this.dsList.getColumn(i, "CD_LEN"));
        				this.dsUpdate.setColumn(nrow, "CD_REGEXP1", this.dsList.getColumn(i, "CD_REGEXP1"));
        				this.dsUpdate.setColumn(nrow, "TY_INPUT", this.dsList.getColumn(i, "TY_INPUT"));
        				this.dsUpdate.setColumn(nrow, "CD_INPUT", this.AuthClient.ID_USER);
        				this.dsUpdate.setColumn(nrow, "NO_ORDER", this.dsList.getColumn(i, "NO_ORDER"));
        				this.dsUpdate.setColumn(nrow, "TY_PK", this.dsList.getColumn(i, "TY_PK"));
        				this.dsUpdate.setColumn(nrow, "TY_ALIGN", this.dsList.getColumn(i, "TY_ALIGN"));
        				this.dsUpdate.setColumn(nrow, "DS_COMBOLIS", this.dsList.getColumn(i, "DS_COMBOLIS"));
        				this.dsUpdate.setColumn(nrow, "CD_CODEFIND", this.dsList.getColumn(i, "CD_CODEFIND"));
        				this.dsUpdate.setColumn(nrow, "NM_CODEFIND", this.dsList.getColumn(i, "NM_CODEFIND"));
        				this.dsUpdate.setColumn(nrow, "DS_RESULTALIAS", this.dsList.getColumn(i, "DS_RESULTALIAS"));
        				this.dsUpdate.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsUpdate.setColumn(nrow, "AT_READONLY", this.dsList.getColumn(i, "AT_READONLY"));
        				this.dsUpdate.setColumn(nrow, "AT_GRAYBACK", this.dsList.getColumn(i, "AT_GRAYBACK"));
        				this.dsUpdate.setColumn(nrow, "TY_FIXED", this.dsList.getColumn(i, "TY_FIXED"));
        				this.dsUpdate.setColumn(nrow, "TY_SUMMARY", this.dsList.getColumn(i, "TY_SUMMARY"));
        				this.dsUpdate.setColumn(nrow, "LN_COL", this.dsList.getColumn(i, "LN_COL"));
        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_SYSTEM", cd_system);
        				this.dsDelete.setColumn(nrow, "CD_MASTER", this.dsList.getColumn(i, "CD_MASTER"));
        				this.dsDelete.setColumn(nrow, "CD_COLID", this.dsList.getColumn(i, "CD_COLID"));
        				this.dsDelete.setColumn(nrow, "CD_INPUT", this.AuthClient.ID_USER);
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SYSTEM"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctxtCD_SYSTEM.setFocus();
        		}
        		this.gfnAlert("시스템 코드를 입력하세요.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_MASTER"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctxtCD_MASTER.setFocus();
        		}
        		this.gfnAlert("마스터 코드를 입력하세요.", "fnVaidateCallback");
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
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DQZ_MDM_MASTERCOL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
