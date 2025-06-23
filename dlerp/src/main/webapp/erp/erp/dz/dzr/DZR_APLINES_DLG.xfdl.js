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
                this._setFormPosition(1120,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_NOTE\" type=\"STRING\" size=\"3000\"/><Column id=\"ID_AP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_AP_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_NOTE\"/><Col id=\"ID_AP\"/><Col id=\"ID_AP_USER\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">attch_cnt</Col><Col id=\"SP\">DZRPR_FILE_SELECT_APP</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListAttchCnt", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","567","40","553","460",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","0","9","180","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("결재의견");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtDS_NOTE","0","40","550","460",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","43.84%","515","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","50.54%","515","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnAttachFile",null,"8","80","25","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("첨부파일");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.txtDS_NOTE","value","dsList","DS_NOTE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.divDataRight.form.txtDS_NOTE_BIG","value","dsParamSave","DS_NOTE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DZR_APLINES_DLG.xfdl", function() {
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
        	if(!this.gfnIsNull(this.getOwnerFrame().DS_NOTE)) {
        		this.dsList.set_enableevent(false);
        		this.dsList.setColumn(0, "DS_NOTE", this.getOwnerFrame().DS_NOTE);
        		this.dsList.setColumn(0, "ID_AP", this.getOwnerFrame().ID_AP);
        		this.dsList.setColumn(0, "ID_AP_USER", this.getOwnerFrame().ID_AP_USER);
        		this.dsList.set_enableevent(true);

        		// 첨부파일 갯수 조회
        		this.fnAttchCnt();
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
        	this.dxGrid = this.divData.form.objGrid;
        	this.btnAttachFile = this.divData.form.btnAttachFile;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DZ", "DZR_APLINES_VIEW");

        	this.dxGrid.set_autosizingtype("row");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsAttchCnt = new Dataset();
        	this.dsAttchCnt.addColumn("CD_REF1", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

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

        	}
        	else if(svcID == "attch_cnt") {
        		if(this.dsListAttchCnt.rowcount > 0) {
        			this.btnAttachFile.set_text("첨부파일("+this.dsListAttchCnt.getColumn(0, "CNT")+")");
        		}else{
        			this.btnAttachFile.set_text("첨부파일");
        		}

        		//this.btnAttachFile.set_fittocontents("width");	// 버튼 텍스트 길이에 맞게 길이 자동조정
        		//this.divData.form.fnSetBtn();	// 확장버튼 영역DIV
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
        // 확인 버튼 클릭
        this.divData_btnOk_onclick = function(obj,e)
        {
        	// 부모창 변수 값 셋팅
        	this.getParentContext().opener.popupVal = this.dsList.getColumn(0, "DS_NOTE");

        	this.getParentContext().close(true);
        };


        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };

        // 데이터셋에 onkeyup시 바로 데이터 반영함(현재 사용 않함)
        this.divData_txtDS_NOTE_onkeyup = function(obj,e)
        {
        	this.divData.form.txtDS_NOTE.updateToDataset();
        };

        this.divData_btnAttachFile_onclick = function(obj,e)
        {
        	var fileManager = {};
        	  fileManager.CD_GUBUN = "DZAP";
        	  fileManager.CD_DIR = [this.dsList.getColumn(0, "ID_AP") + "_" + this.dsList.getColumn(0, "ID_AP_USER")];
        	  if(this.FormInfo.TY_AUTH == "R") {
        		  fileManager.IS_READONLY = true;
        	  } else {
        		  fileManager.IS_READONLY = false;
        	  }
        	  this.gfnFileManager(fileManager, "fnFileCallback");
        };

        this.fnFileCallback = function() {
        	// 첨부파일 갯수 조회
        	this.fnAttchCnt();
        };


        // 첨부파일 갯수 조회
        this.fnAttchCnt = function() {
        	this.dsAttchCnt.clearData();
        	this.dsAttchCnt.addRow();

        	this.dsAttchCnt.setColumn(0, "CD_REF1", this.dsList.getColumn(0, "ID_AP") + "_" + this.dsList.getColumn(0, "ID_AP_USER"));

        	var strSvcId    = "attch_cnt";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "attch_cnt=dsAttchCnt";
        	var outData     = "dsListAttchCnt=attch_cnt0";
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
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.divData.form.btnAttachFile.addEventHandler("onclick",this.divData_btnAttachFile_onclick,this);
        };
        this.loadIncludeScript("DZR_APLINES_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
