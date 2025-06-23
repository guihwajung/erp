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
            this.set_titletext("개인별계획등록-계획생성");
            this.getSetter("maxwidth").set("800");
            this.getSetter("maxheight").set("300");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAGPR_WORKDAY_CREATE_BASE</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAGPR_WORKDAY_CREATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divBtns","0",null,null,"40","0","9",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnOK","310","5","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30","5","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("15");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Div("divData","0","10",null,null,"0","divBtns:5",null,null,null,null,this);
            obj.set_taborder("1");
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

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DAG_WORKDAY_PLAN_NEW_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.gbDel = "";	// 시간과 분 구분자(:) 추가하기위함 변수

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	// 메인창 파라미터 받기
        	this.dsSearch.setColumn(0, "ID_PERSON", this.getOwnerFrame().ID_PERSON);
        	this.dsSearch.setColumn(0, "ID_SABUN", this.getOwnerFrame().ID_SABUN);


        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("ID_PERSON", "int");
        	this.dsSelect.addColumn("ID_USER", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("ID_PERSON", "int");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("DT_WORK_START", "string");
        	this.dsSave.addColumn("DT_WORK_END", "string");
        	this.dsSave.addColumn("TY_PLAN", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAG_WORKDAY_PLAN_NEW_DLG");

        };

         /*
          *	조회
          */
        this.fnSelect = function() {
        	//if (!this.fnSelectValidate()) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "ID_PERSON", this.dsSearch.getColumn(0, "ID_PERSON"));
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	//var callBackFnc = "fnCallbackForce";
        	var callBackFnc = "fnCallback";


        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.btnOK_onclick = function(obj,e)
        {
        	this.fnSaveDlg();
        };


        this.fnSaveDlg = function() {
        	if(this.dsList.rowcount == 0) return;

        	if (!this.gfnGridIsRow(this.dxGrid)) {
        		this.gfnAlert("자료를 선택하세요!");
        		return;
        	}

        	var nCurrRow = this.dsList.rowposition;

        	this.dsSave.clearData();
        	var nrow = this.dsSave.addRow();

        	this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(nCurrRow, "CD_CORP"));
        	this.dsSave.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(nCurrRow, "ID_PERSON"));
        	this.dsSave.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(nCurrRow, "ID_SABUN"));
        	this.dsSave.setColumn(nrow, "DT_WORK_START", this.dsList.getColumn(nCurrRow, "DT_WORK_START"));
        	this.dsSave.setColumn(nrow, "DT_WORK_END", this.dsList.getColumn(nCurrRow, "DT_WORK_END"));
        	this.dsSave.setColumn(nrow, "TY_PLAN", this.dsList.getColumn(nCurrRow, "TY_PLAN"));
        	this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	//trace("dsSave", this.dsSave.saveXML());
        	//return;

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        }

        this.btnCANCLE_onclick = function(obj,e)
        {
        	// 취소
        	this.getParentContext().close(false);
        };


        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/


        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "save") {
        		if (errorCode == 0) {
        			this.fnSaveAfter = function() {
        				this.getParentContext().close(true);
        			}
        			this.gfnAlert("작업이 완료 되었습니다.", "fnSaveAfter");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        }

        // // SP에서 강제리턴시 콜빽받게 처리하는 콜빽함수(콜빽명뒤에 'Force' 붙여준다)
        // this.fnCallbackForce = function(svcID, errorCode, errorMsg)
        // {
        // 	if (svcID == "select") {
        // 		if (errorCode != 0) {	// SP에서 강제리턴시켰을경우
        // 			// 에러메시지가 강제로 뜨기떄문에 그메시지창을 닫고 새로 에러메시지창을 연다
        // 			this.gfnSetTimer(this, function() {
        // 				//this.getParentContext().close(true);
        // 				var arrPopFrame = nexacro.getPopupFrames();
        // 				arrPopFrame[arrPopFrame[1].id].form.btnOk_onclick();
        //
        // 				this.fnCloseVal = function() {
        // 					this.getParentContext().close(false);
        // 				}
        // 				this.gfnAlert(errorMsg, "fnCloseVal");
        // 			}, 100);  // 1000ms = 1초
        //
        // 		}else{	// 정상 조회후 콜빽탔을 경우
        //
        // 		}
        //
        // 	}
        // }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAG_WORKDAY_PLAN_NEW_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
