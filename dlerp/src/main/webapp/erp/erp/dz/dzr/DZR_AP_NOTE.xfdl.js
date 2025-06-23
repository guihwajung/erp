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
                this._setFormPosition(550,270);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZRPR_APPLINES_SELECT_NOTE</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DZZPR_APPROVAL_CALLBACK</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_NOTE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_AP\" type=\"STRING\" size=\"256\"/><Column id=\"V_PARAM01\" type=\"STRING\" size=\"256\"/><Column id=\"V_PARAM02\" type=\"STRING\" size=\"256\"/><Column id=\"V_PARAM03\" type=\"STRING\" size=\"256\"/><Column id=\"V_PARAM04\" type=\"STRING\" size=\"256\"/><Column id=\"ST_APPR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_NOTE\"/><Col id=\"ID_AP\"/><Col id=\"V_PARAM01\"/><Col id=\"V_PARAM02\"/><Col id=\"V_PARAM03\"/><Col id=\"V_PARAM04\"/><Col id=\"ST_APPR\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("결재");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE","0","40","66","186",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("의견");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","staDS_SITE:-1","40",null,"186","0.00%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","38.40%","236","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","btnOk:31.67%","236","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtDS_NOTE","71","45",null,"175","6",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnATTACH",null,"10","63","25","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("첨부파일");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divData.form.txtDS_NOTE","value","dsData","DS_NOTE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DZR_AP_NOTE.xfdl", function() {
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

        	// 이전 화면에서 데이터 받기.
        	this.dsData.setColumn(0, "ID_AP", this.getOwnerFrame().ID_AP);
        	this.dsData.setColumn(0, "V_PARAM01",  this.getOwnerFrame().V_PARAM01);
        	this.dsData.setColumn(0, "V_PARAM02",  this.getOwnerFrame().V_PARAM02);
        	this.dsData.setColumn(0, "V_PARAM03",  this.getOwnerFrame().V_PARAM03);
        	this.dsData.setColumn(0, "V_PARAM04",  this.getOwnerFrame().V_PARAM04);
        	this.dsData.setColumn(0, "ST_APPR",  this.getOwnerFrame().ST_APPR);

        	if(this.dsData.getColumn(0, "ST_APPR") == "03"){
        		this.staTITLE.set_text("결재승인");
        	}else if(this.dsData.getColumn(0, "ST_APPR") == "04"){
        		this.staTITLE.set_text("결재반려");
        	}else if(this.dsData.getColumn(0, "ST_APPR") == "05"){
        		this.staTITLE.set_text("결재취소");
        	}

        	this.FormBtns.Select.click();

        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
         ************************************************************************/
        this.fnSetButton = function() {
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
        	//this.dxGrid = this.divData.form.objGrid;
        	this.txtDS_NOTE = this.divData.form.txtDS_NOTE;
        	this.staTITLE = this.divData.form.staTITLE;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("ID_AP", "string");
        	this.dsSelect.addColumn("ID_USER", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("ID_AP", "string");
        	this.dsExec.addColumn("V_PARAM01", "string");
        	this.dsExec.addColumn("V_PARAM02", "string");
        	this.dsExec.addColumn("V_PARAM03", "string");
        	this.dsExec.addColumn("V_PARAM04", "string");
        	this.dsExec.addColumn("ST_APPR", "string");
        	this.dsExec.addColumn("ID_USER", "string");
        	this.dsExec.addColumn("DS_NOTE", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
          /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	//if (!this.fnSelectValidate()) return false;

        	//this.gfnGridBeforeSelect(this.dxGrid);
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "ID_AP", this.dsData.getColumn(0, "ID_AP"));
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

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
        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        	/*
        	if (this.gfnIsNull(this.dsData.getColumn(0,"DS_NOTE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.txtDS_NOTE.setFocus();
        		}
        		this.gfnAlert("의견은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
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
        		//this.gfnGridAfterSelect(this.dxGrid);
        		if(this.dsList.rowcount < 1) return;

        		this.dsData.setColumn(0, "DS_NOTE", this.dsList.getColumn(0, "DS_NOTE"));
        	}
        	else if (svcID == "exec") {
        		if(errorCode == 0)
        		{
        			if(this.dsData.getColumn(0, "ST_APPR") == "03"){	// 승인 버튼 처리시
        				this.fnApprCallback = function() {
        					this.getParentContext().close(true);
        				}
        				this.gfnAlert("승인 정상 처리되었습니다.", "fnApprCallback");
        			}else if(this.dsData.getColumn(0, "ST_APPR") == "04"){	// 반려 버튼 처리시
        				this.fnApprCallback = function() {
        					this.getParentContext().close(true);
        				}
        				this.gfnAlert("반려 정상 처리되었습니다.", "fnApprCallback");
        			}else if(this.dsData.getColumn(0, "ST_APPR") == "05"){	// 결재취소 버튼 처리시
        				this.fnApprCallback = function() {
        					this.getParentContext().close(true);
        				}
        				this.gfnAlert("결재취소 정상 처리되었습니다.", "fnApprCallback");
        			}
        		}else
        		{
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
        // 확인 버튼 클릭
        this.divData_btnOk_onclick = function(obj,e)
        {
        	var msg="";

        	if(this.dsData.getColumn(0, "ST_APPR") == "03"){	// 승인 버튼 처리시
        		msg = "승인처리 하시겠습니까?";
        	}else if(this.dsData.getColumn(0, "ST_APPR") == "04"){	// 반려 버튼 처리시
        		msg = "반려처리 하시겠습니까?";
        	}else if(this.dsData.getColumn(0, "ST_APPR") == "05"){	// 결재취소 버튼 처리시
        		msg = "결재취소처리 하시겠습니까?";
        	}

        	this.gfnConfirm(msg, "fnConfirm_callback");
        };


        this.fnConfirm_callback = function(strId, val)
        {
        	if(val == true) {
        		if (!this.fnSelectValidate()) return false;

        		this.dsExec.clearData();

        		this.dsExec.addRow();

        		this.dsExec.setColumn(0, "ID_AP", this.dsData.getColumn(0, "ID_AP"));
        		this.dsExec.setColumn(0, "V_PARAM01", this.dsData.getColumn(0, "V_PARAM01"));
        		this.dsExec.setColumn(0, "V_PARAM02", this.dsData.getColumn(0, "V_PARAM02"));
        		this.dsExec.setColumn(0, "V_PARAM03", this.dsData.getColumn(0, "V_PARAM03"));
        		this.dsExec.setColumn(0, "V_PARAM04", this.dsData.getColumn(0, "V_PARAM04"));
        		this.dsExec.setColumn(0, "ST_APPR", this.dsData.getColumn(0, "ST_APPR"));
        		this.dsExec.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        		this.dsExec.setColumn(0, "DS_NOTE", this.dsData.getColumn(0, "DS_NOTE"));

        		if (this.dsExec.rowcount == 0) return;

        		var strSvcId    = "exec";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "exec=dsExec";
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
        }


        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };


        this.divData_btnATTACH_onclick = function(obj,e)
        {
        	var fileManager = {};
              fileManager.CD_GUBUN = "DZAP";
              fileManager.CD_DIR = [this.dsData.getColumn(0, "ID_AP") + "_" + this.AuthClient.ID_USER];
        	  if(this.FormInfo.TY_AUTH == "R") {
        		  fileManager.IS_READONLY = true;
        	  } else {
        		  fileManager.IS_READONLY = false;
              }
              this.gfnFileManager(fileManager, "fnFileCallback");
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staTITLE.addEventHandler("onclick",this.divData_staTITLE_onclick,this);
            this.divData.form.staDS_SITE.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.divData.form.btnATTACH.addEventHandler("onclick",this.divData_btnATTACH_onclick,this);
        };
        this.loadIncludeScript("DZR_AP_NOTE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
