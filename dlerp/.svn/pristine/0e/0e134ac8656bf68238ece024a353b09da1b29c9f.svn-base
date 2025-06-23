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
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBBPR_INVEST_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DBBPR_INVEST_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DBBPR_INVEST_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DBBPR_INVEST_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staDT","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","staDT:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_FROM","sta00:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_TO","calDT_FROM:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","calDT_TO:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("현장코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFMAINSITE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","30",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","13",null,null,"0","2",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.calDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.calDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DBB_INVEST.xfdl", function() {
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

        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnSlip = this.gfnFormButtonAdd("btnFile", "fnFile"); //첨부파일

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
         	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;

         	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
         	this.gfnGridInit(this.dxGrid, this.dsList, "DB", "DBB_INVEST");

          	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
         	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("DT_FROM", "string");
        	this.dsSelect.addColumn("DT_TO", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("DT_REQUEST", "string");
        	this.dsInsert.addColumn("CD_SITE", "string");
        	this.dsInsert.addColumn("CD_ACT", "string");
        	this.dsInsert.addColumn("DT_JEOBSU", "string");
        	this.dsInsert.addColumn("DS_SAEDAE", "string");
        	this.dsInsert.addColumn("DS_JOB", "string");
        	this.dsInsert.addColumn("DS_REASON", "string");
        	this.dsInsert.addColumn("DT_TARGET", "string");
        	this.dsInsert.addColumn("UP_GIGONG", "bigdecimal");
        	this.dsInsert.addColumn("UP_JOGONG", "bigdecimal");
        	this.dsInsert.addColumn("CT_GIGONG", "int");
        	this.dsInsert.addColumn("CT_JOGONG", "int");
        	this.dsInsert.addColumn("AM_EXPECT", "bigdecimal");
        	this.dsInsert.addColumn("DS_BIGO", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("NO_SEQ", "bigdecimal");
        	this.dsUpdate.addColumn("DT_REQUEST", "string");
        	this.dsUpdate.addColumn("CD_SITE", "string");
        	this.dsUpdate.addColumn("CD_ACT", "string");
        	this.dsUpdate.addColumn("DT_JEOBSU", "string");
        	this.dsUpdate.addColumn("DS_SAEDAE", "string");
        	this.dsUpdate.addColumn("DS_JOB", "string");
        	this.dsUpdate.addColumn("DS_REASON", "string");
        	this.dsUpdate.addColumn("DT_TARGET", "string");
        	this.dsUpdate.addColumn("UP_GIGONG", "bigdecimal");
        	this.dsUpdate.addColumn("UP_JOGONG", "bigdecimal");
        	this.dsUpdate.addColumn("CT_GIGONG", "int");
        	this.dsUpdate.addColumn("CT_JOGONG", "int");
        	this.dsUpdate.addColumn("AM_EXPECT", "bigdecimal");
        	this.dsUpdate.addColumn("DS_BIGO", "string");
        	this.dsUpdate.addColumn("ID_INSERT", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("NO_SEQ", "bigdecimal");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        this.fnSelect = function() {
        	//if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "DT_FROM", this.dsSearch.getColumn(0, "DT_FROM"));
        	this.dsSelect.setColumn(0, "DT_TO", this.dsSearch.getColumn(0, "DT_TO"));


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
        	this.gfnGridAdd(this.dxGrid);

        // 	var nrow = this.gfnGridAdd(this.dxGrid,"");
        //
        // 	this.dsList.setColumn(nrow, "CD_DEPTOPER", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        // 	this.dsList.setColumn(nrow, "DS_DEPTOPER", this.dsSearch.getColumn(0, "DS_DEPT_ACNT"));

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
        				this.dsInsert.setColumn(nrow, "DT_REQUEST", this.dsList.getColumn(i, "DT_REQUEST"));
        				this.dsInsert.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        				this.dsInsert.setColumn(nrow, "CD_ACT", this.dsList.getColumn(i, "CD_ACT"));
        				this.dsInsert.setColumn(nrow, "DT_JEOBSU", this.dsList.getColumn(i, "DT_JEOBSU"));
        				this.dsInsert.setColumn(nrow, "DS_SAEDAE", this.dsList.getColumn(i, "DS_SAEDAE"));
        				this.dsInsert.setColumn(nrow, "DS_JOB", this.dsList.getColumn(i, "DS_JOB"));
        				this.dsInsert.setColumn(nrow, "DS_REASON", this.dsList.getColumn(i, "DS_REASON"));
        				this.dsInsert.setColumn(nrow, "DT_TARGET", this.dsList.getColumn(i, "DT_TARGET"));
        				this.dsInsert.setColumn(nrow, "UP_GIGONG", this.dsList.getColumn(i, "UP_GIGONG"));
        				this.dsInsert.setColumn(nrow, "UP_JOGONG", this.dsList.getColumn(i, "UP_JOGONG"));
        				this.dsInsert.setColumn(nrow, "CT_GIGONG", this.dsList.getColumn(i, "CT_GIGONG"));
        				this.dsInsert.setColumn(nrow, "CT_JOGONG", this.dsList.getColumn(i, "CT_JOGONG"));
        				this.dsInsert.setColumn(nrow, "AM_EXPECT", this.dsList.getColumn(i, "AM_EXPECT"));
        				this.dsInsert.setColumn(nrow, "DS_BIGO", this.dsList.getColumn(i, "DS_BIGO"));
        				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				break;
         			case "U":
         				var nrow = this.dsUpdate.addRow();
         				this.dsUpdate.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsUpdate.setColumn(nrow, "DT_REQUEST", this.dsList.getColumn(i, "DT_REQUEST"));
        				this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        				this.dsUpdate.setColumn(nrow, "CD_ACT", this.dsList.getColumn(i, "CD_ACT"));
        				this.dsUpdate.setColumn(nrow, "DT_JEOBSU", this.dsList.getColumn(i, "DT_JEOBSU"));
        				this.dsUpdate.setColumn(nrow, "DS_SAEDAE", this.dsList.getColumn(i, "DS_SAEDAE"));
        				this.dsUpdate.setColumn(nrow, "DS_JOB", this.dsList.getColumn(i, "DS_JOB"));
        				this.dsUpdate.setColumn(nrow, "DS_REASON", this.dsList.getColumn(i, "DS_REASON"));
        				this.dsUpdate.setColumn(nrow, "DT_TARGET", this.dsList.getColumn(i, "DT_TARGET"));
        				this.dsUpdate.setColumn(nrow, "UP_GIGONG", this.dsList.getColumn(i, "UP_GIGONG"));
        				this.dsUpdate.setColumn(nrow, "UP_JOGONG", this.dsList.getColumn(i, "UP_JOGONG"));
        				this.dsUpdate.setColumn(nrow, "CT_GIGONG", this.dsList.getColumn(i, "CT_GIGONG"));
        				this.dsUpdate.setColumn(nrow, "CT_JOGONG", this.dsList.getColumn(i, "CT_JOGONG"));
        				this.dsUpdate.setColumn(nrow, "AM_EXPECT", this.dsList.getColumn(i, "AM_EXPECT"));
        				this.dsUpdate.setColumn(nrow, "DS_BIGO", this.dsList.getColumn(i, "DS_BIGO"));
        				this.dsUpdate.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));

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
        // this.fnSelectValidation = function() {
        // 	var validate = true;
        // 	if (this.gfnIsNull(this.dsSearch.getColumn(0, "DT_FROM")) && this.gfnIsNull(this.dsSearch.getColumn(0, "DT_TO"))) {
        // 		this.fnVaidateCallback = function() {
        // 			this.ccfCD_SITE.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("조회기간을 입력하지 않았습니다.", "fnVaidateCallback");
        // 		return false;
        // 	}
        //
        //   	return validate;
        //  }


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
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(id == "ccfCD_SITE") {
        		dsUserParam.setColumn(nrow, "CD_AUTHDEPT", this.AuthClient.CD_DEPT);
        	}
        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	switch(id) {
        		case "DBX_CFMAINSITE": //현장코드
        			dsUserParam.setColumn(nrow, "CD_AUTHDEPT", this.AuthClient.CD_DEPT);
        			break;
        		default:
        			break;
        	}
        	return true;
        };

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        // 첨부파일 버튼 클릭시 팝업화면 호출
        this.fnFile = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var nRow = this.dsList.rowposition;
        	var fileManager = {};
        	fileManager.CD_GUBUN = "DB58";
        	fileManager.CD_DIR = [this.dsSearch.getColumn(0,"CD_SITE"), this.dsList.getColumn(nRow,"NO_SEQ")];

        	if(this.FormInfo.TY_AUTH == "R") {
        		fileManager.IS_READONLY = true;
        	} else {
        		fileManager.IS_READONLY = false;
        	}

        	this.gfnFileManager(fileManager, "fnFileCallback");
        }

        this.fnFileCallback = function(strID, val) {
        	// val.IsChange : 변경여부, val.Cnt : 파일개수
        	/*
        	// 파일개수를 다시 셋팅
        	this.dsList.set_enableevent(false);
        	if(val.Cnt == 0) {
        		this.dsList.setColumn(this.dsList.rowposition, "FILE_ATTACH", "첨부");
        	} else {
        		this.dsList.setColumn(this.dsList.rowposition, "FILE_ATTACH", "첨부(" + val.Cnt + ")");
        	}
        	this.dsList.set_enableevent(true);
        	*/
        };
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
            this.divSearch.form.ccfCD_SITE.addEventHandler("onclick",this.Common_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DBB_INVEST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
