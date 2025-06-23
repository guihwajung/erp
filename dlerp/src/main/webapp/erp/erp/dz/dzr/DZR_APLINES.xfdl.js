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
                this._setFormPosition(1000,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZRPR_APPLINES_INFO_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DZRPR_APPLINES_NOTE_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_AP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID_AP\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListIdap", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ST_APPR\" type=\"STRING\" size=\"256\"/><Column id=\"AP_STATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","9","800","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("결재선조회");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divTop","0","sta00:9",null,"60","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE","0","0","100","30",null,null,null,null,null,null,this.divData.form.divTop.form);
            obj.set_taborder("1");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divTop.addChild(obj.name, obj);

            obj = new Static("staDS_SILHENG","0","staDS_SITE:-1","100","30",null,null,null,null,null,null,this.divData.form.divTop.form);
            obj.set_taborder("2");
            obj.set_text("기안자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divTop.addChild(obj.name, obj);

            obj = new Static("staBg1","staDS_SITE:-1","0",null,"30","0",null,null,null,null,null,this.divData.form.divTop.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divTop.addChild(obj.name, obj);

            obj = new Static("staBg2","staDS_SILHENG:-1","staBg1:-1","391","30",null,null,null,null,null,null,this.divData.form.divTop.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divTop.addChild(obj.name, obj);

            obj = new Edit("edtID_USER_NM","104","34","356","20",null,null,null,null,null,null,this.divData.form.divTop.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_background("transparent");
            this.divData.form.divTop.addChild(obj.name, obj);

            obj = new Static("staDS_SILHENG00","489","29","100","30",null,null,null,null,null,null,this.divData.form.divTop.form);
            obj.set_taborder("5");
            obj.set_text("결재상태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.form.divTop.addChild(obj.name, obj);

            obj = new Static("staBg00","587","29",null,"30","0",null,null,null,null,null,this.divData.form.divTop.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divTop.addChild(obj.name, obj);

            obj = new Edit("edtST_APPR","592","34","378","20",null,null,null,null,null,null,this.divData.form.divTop.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_background("transparent");
            obj.set_color("red");
            this.divData.form.divTop.addChild(obj.name, obj);

            obj = new Edit("edtID_AP","104","5","866","20",null,null,null,null,null,null,this.divData.form.divTop.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_background("transparent");
            this.divData.form.divTop.addChild(obj.name, obj);

            obj = new Button("btnUpt",null,"8","88","25","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("결재의견수정");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","divTop:10",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.divTop.form.edtID_USER_NM","value","dsListIdap","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divTop.form.edtST_APPR","value","dsListIdap","ST_APPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divTop.form.edtID_AP","value","dsListIdap","DS_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DZR_APLINES.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.popupVal = "";

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
        	if(!this.gfnIsNull(this.getOwnerFrame().ID_AP)) {
        		this.dsSearch.setColumn(0, "ID_AP", this.getOwnerFrame().ID_AP);

        		this.FormBtns.Select.click();
        	}

        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
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
        	//this.btn1 = this.gfnFormButtonAdd("BTN_EXTENSION", "fnExtension");

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.btnUpt = this.divData.form.btnUpt;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.dxGrid.ExpandUp = "fnGrid_ExpandUp";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DZ", "DZR_APLINES_CM");

        	this.dxGrid.set_autosizingtype("row");

        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	// 그리드 코드파인드 설정
        	//this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	// 그리드 onkeyup 이벤트
        	//this.dxGrid.addEventHandler("onkeyup", this.fnGrid_OnKeyUp, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("ID_AP", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("ID_AP", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("SN_ORDER", "string");
        	this.dsSave.addColumn("DS_NOTE", "string");

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

        	this.dsSelect.setColumn(0, "ID_AP", this.dsSearch.getColumn(0, "ID_AP"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0 dsListIdap=select1";
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
        	//var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
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
        	/*
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0,"NO_ID"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfNO_ID.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("성명은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}
        	*/

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

        		this.fnBtnCheck();
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
        this.fnGrid_ExpandUp = function(obj, e) {
           var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);

           if(colnm == "ATTACH_FILE") {
              var fileManager = {};
              fileManager.CD_GUBUN = "DZAP";
              fileManager.CD_DIR = [this.dsList.getColumn(e.row, "ID_AP") + "_" + this.dsList.getColumn(e.row, "ID_AP_USER")];
        	  if(this.FormInfo.TY_AUTH == "R") {
        		  fileManager.IS_READONLY = true;
        	  } else {
        		  fileManager.IS_READONLY = false;
              }

        	  fileManager.IS_READONLY = true;

              this.gfnFileManager(fileManager, "fnFileCallback");
           }
        };

        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		this.fnBtnCheck();

        		obj.oldrow = -1;
        	}
        };

        this.fnBtnCheck = function()
        {
        	if(this.dsListIdap.rowcount < 1) return;

        	this.btnUpt.set_enable(false);

        	var ap_state = this.dsListIdap.getColumn(0, "AP_STATE");
        	if(ap_state == "01" || ap_state == "02"){
        		if(this.dsList.getColumn(this.dsList.rowposition, "ID_AP_USER") == this.AuthClient.ID_USER){
        			this.btnUpt.set_enable(true);
        		}
        	}
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

        this.divData_btnUpt_onclick = function(obj,e)
        {
        	var param = {};
        	param.DS_NOTE = this.dsList.getColumn(this.dsList.rowposition, "DS_NOTE");
        	param.ID_AP = this.dsList.getColumn(this.dsList.rowposition, "ID_AP");
        	param.ID_AP_USER = this.dsList.getColumn(this.dsList.rowposition, "ID_AP_USER");

        	this.gfnFormOpenNonAuth("DZR", "DZR_APLINES_DLG", "fnDetailCallback", param, 1150, 590);
        };


        this.fnDetailCallback = function(strId, val) {
        	if(val == true){
        		this.dsSave.clearData();

        		this.dsSave.addRow();

        		var nRow = this.dsList.rowposition;

        		this.dsSave.setColumn(0, "ID_AP",  this.dsList.getColumn(nRow, "ID_AP"));
        		this.dsSave.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        		this.dsSave.setColumn(0, "SN_ORDER", this.dsList.getColumn(nRow, "SN_ORDER"));
        		this.dsSave.setColumn(0, "DS_NOTE", this.popupVal);

        		if (this.dsSave.rowcount == 0) return;

        		var strSvcId    = "save";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "save=dsSave";
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
        	}else{
        		this.FormBtns.Select.click();
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.divTop.form.staDS_SITE.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.btnUpt.addEventHandler("onclick",this.divData_btnUpt_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DZR_APLINES.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
