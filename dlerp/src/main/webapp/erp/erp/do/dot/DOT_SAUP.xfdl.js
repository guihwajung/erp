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
            this.set_titletext("수주현장총괄표");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DOTPR_SAUP_SELECT</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DOTPR_CARD_CREATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROJ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_PROJ","0.0","10.0","400","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DOXPR_PROJ_CODEFIND");
            obj.getSetter("CDTextWidth").set("65");
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enableevent("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_PROJ","ccfCD_PROJ:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("프로젝트코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00",null,"ccfCD_PROJ:10.0","92.0","24.0","1",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("(단위:백만원, 부가세포함)");
            obj.set_cssclass("sta_WF_SchLabel");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_PROJ.form.CDTextBox","value","dsSearch","CD_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_PROJ.form.DSTextBox","value","dsSearch","DS_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DOT_SAUP.xfdl", function() {
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
            this.btnCard = this.gfnFormButtonAdd("btnCard", "fnCard");        //수주현장별진행사항표
        	this.btnCreate = this.gfnFormButtonAdd("btnCreate", "fnCreate");  //자료생성
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;
        	this.ccfCD_PROJ = this.divSearch.form.ccfCD_PROJ;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DO", "DOT_SAUP");
        	this.dxGrid.setFormatRowProperty(3, "size", 60);
        	this.ccfCD_PROJ.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	//그리드 코드파인드
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	//멀티라인설정 (한개 로우 내부 value에 여러줄로 엔터가 있는 경우)
        	//this.dxGrid.set_autosizingtype("row");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_PROJ", "string");

        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("CD_PROJ", "string");
        	this.dsCreate.addColumn("ID_USER", "string");

        // 	this.dsInsert = new Dataset();
        // 	this.dsInsert.addColumn("CD_PROJ", "string");
        // 	this.dsInsert.addColumn("DS_COMPANY", "string");
        // 	this.dsInsert.addColumn("DS_ADDR", "string");
        // 	this.dsInsert.addColumn("DS_DEPT", "string");
        // 	this.dsInsert.addColumn("DS_NAME", "string");
        // 	this.dsInsert.addColumn("DS_TITLE", "string");
        // 	this.dsInsert.addColumn("DS_PHONE", "string");
        // 	this.dsInsert.addColumn("DS_MOBILE", "string");
        // 	this.dsInsert.addColumn("DS_FAX", "string");
        // 	this.dsInsert.addColumn("DS_EMAIL", "string");
        // 	this.dsInsert.addColumn("RM_BIGO", "string");
        // 	this.dsInsert.addColumn("ID_USER", "string");
        //
        // 	this.dsUpdate = new Dataset();
        // 	this.dsUpdate.addColumn("CD_PROJ", "string");
        // 	this.dsUpdate.addColumn("NO_SEQ", "int");
        // 	this.dsUpdate.addColumn("DS_COMPANY", "string");
        // 	this.dsUpdate.addColumn("DS_ADDR", "string");
        // 	this.dsUpdate.addColumn("DS_DEPT", "string");
        // 	this.dsUpdate.addColumn("DS_NAME", "string");
        // 	this.dsUpdate.addColumn("DS_TITLE", "string");
        // 	this.dsUpdate.addColumn("DS_PHONE", "string");
        // 	this.dsUpdate.addColumn("DS_MOBILE", "string");
        // 	this.dsUpdate.addColumn("DS_FAX", "string");
        // 	this.dsUpdate.addColumn("DS_EMAIL", "string");
        // 	this.dsUpdate.addColumn("RM_BIGO", "string");
        // 	this.dsUpdate.addColumn("ID_USER", "string");
        //
        // 	this.dsDelete = new Dataset();
        // 	this.dsDelete.addColumn("CD_PROJ", "string");
        // 	this.dsDelete.addColumn("NO_SEQ", "int");
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

        	this.dsSelect.setColumn(0, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));

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
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        }

        /*
         *	생성 버튼
         */
        this.fnCreate = function() {

        	// 그리드 필수항목 체크
         	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dsCreate.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsCreate.addRow();
        				this.dsCreate.setColumn(nrow, "CD_PROJ", this.dsList.getColumn(i, "CD_PROJ"));
        				this.dsCreate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsCreate.rowcount == 0) return;

        	var strSvcId    = "create";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "create=dsCreate";
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

        // 	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_PROJ"))) {
        // 		validate = false;
        // 		// Alert후 실행할 처리
        // 		this.fnVaidateCallback = function() {
        // 			this.ccfCD_PROJ.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("프로젝트코드를 입력하세요.", "fnVaidateCallback");
        // 	}

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
        	} else if(svcID == "create") {
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
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow)
         {
        	if(id == "ccfCD_PROJ")
        	{
        		dsUserParam.setColumn(nrow, "TY_PROJ", this.getOwnerFrame().TY_PROJ);
        	}
        	return true;
         }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
        	switch(id) {
        		case "DOXPR_PROJ_CODEFIND":
         			dsUserParam.setColumn(nrow, "TY_PROJ", "%");
        		break;
        	}

        	return true;
        }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fnCard = function(obj,e)
        {
        	var param = {};
        	param.CD_PROJ = this.dsList.getColumn(this.dsList.rowposition, "CD_PROJ");
        	param.DS_PROJ = this.dsList.getColumn(this.dsList.rowposition, "DS_PROJ");

        	this.gfnFormOpen("DOT", "DOT_CARD", "", param, 1650, 850);
        };

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.columnid == "CHK") {
        		this.dsList.set_enableevent(false);
        		if(this.dsList.getColumn(e.row, e.columnid) != 0){
        			this.dsList.setColumn(e.row, this.ucFlag, "U");
        		}
        		else{
        			this.dsList.setColumn(e.row, this.ucFlag, "");
        		}
        		this.dsList.set_enableevent(true);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DOT_SAUP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
