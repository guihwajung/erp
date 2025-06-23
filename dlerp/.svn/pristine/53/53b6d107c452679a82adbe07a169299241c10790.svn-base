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
            this.set_titletext("인사발령");
            this.getSetter("maxwidth").set("370");
            this.getSetter("maxheight").set("200");
            if (Form == this.constructor)
            {
                this._setFormPosition(336,150);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"YM_BASE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DT_ACCOUNT\"/><Col id=\"CD_CORP\"/><Col id=\"ID_SABUN\"/><Col id=\"YM_BASE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAVPR_YEAREND_AUTOSLIP</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","0","10","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("중도정산 전표발행");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","86","47","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta05","0","47","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("회계일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","47","100","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btnOK","50","0","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30","0","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("15");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACCOUNT","93","52","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_visible("true");
            obj.set_enable("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item8","ctclDT_ACCOUNT","value","dsList","DT_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DAV_YEARENDAUTOSLIP_DLG.xfdl", function() {
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
        	this.dsList.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);
        	this.dsList.setColumn(0, "ID_SABUN", this.getOwnerFrame().ID_SABUN);
        	this.dsList.setColumn(0, "YM_BASE", this.getOwnerFrame().YM_BASE);

        	//this.fnSelect();
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	//this.ccfCD_CORP = this.ccfCD_CORP;

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	/*
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("DT_BASE", "string");
        	this.dsSelect.addColumn("TY_PLAN", "string");
        	*/

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("YM_BASE", "string");
        	this.dsSave.addColumn("DT_ACCOUNT", "string");
        	this.dsSave.addColumn("CD_DEPT_BH", "string");
        	this.dsSave.addColumn("ID_INSERT", "string");
        	this.dsSave.addColumn("CD_TRADE", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        };

         /*
          *	조회
          */
        /*
        this.fnSelect = function() {
        	//if (!this.fnSelectValidate()) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	var dtBase = this.dsList.getColumn(0, "DT_BASE");
        	var tyPlan = this.dsList.getColumn(0, "TY_PLAN");
        	if(this.gfnIsNull(this.dsList.getColumn(0, "CD_CORP"))){
        		dtBase = "";
        		tyPlan = "";
        	}else if(this.dsList.getColumn(0, "CD_CORP") != this.getOwnerFrame().CD_CORP){
        		dtBase = "";
        		tyPlan = "";
        	}

        	this.dsSelect.setColumn(0, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "DT_BASE", dtBase);
        	this.dsSelect.setColumn(0, "TY_PLAN", tyPlan);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsData=select0";
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
        */

        this.btnOK_onclick = function(obj,e)
        {
        	//this.gfnConfirm("기존에 생성된 계획에 대해서는 삭제 후 재 생성됩니다.\n계속진행하시겠습니까?", "fnCorpCrtCallback");

        	this.dlgfnSave();
        };
        /*
        this.fnCorpCrtCallback = function(strId, val)  {
        	if(val == false) return;

        	// 확인
        	this.dlgfnSave();
        };
        */

        this.dlgfnSave = function() {
        	if (!this.fnDataValidate()) return;

        	this.dsSave.clearData();
        	var nrow = this.dsSave.addRow();

        	this.dsSave.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(0, "ID_SABUN"));
        	this.dsSave.setColumn(nrow, "YM_BASE", this.dsList.getColumn(0, "YM_BASE"));
        	this.dsSave.setColumn(nrow, "DT_ACCOUNT", this.dsList.getColumn(0, "DT_ACCOUNT"));
        	this.dsSave.setColumn(nrow, "CD_DEPT_BH", this.AuthClient.CD_DEPT);
        	this.dsSave.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        	this.dsSave.setColumn(nrow, "CD_TRADE", "");
        	this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));

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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        }

        this.btnCANCLE_onclick = function(obj,e)
        {
        	// 취소
        	this.getParentContext().close(false);
        };

        this.fnDataValidate = function(){

        	if(this.gfnIsNull(this.ctclDT_ACCOUNT.value)) {
        		this.ctclDT_ACCOUNT.setFocus();
        		this.gfnAlert("회계일자를 입력해주세요");
        		return false;
        	}

        	return true;
        }
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if  (id == "ccfCD_CORP") {

        	}

        	return true;
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "save") {
        		if (errorCode == 0) {
        			this.fnClose = function() {
        				this.getParentContext().close(true);
        			}
        			this.gfnAlert("전표발행이 완료되었습니다.", "fnClose");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /*
        this.dsList_onvaluechanged = function(obj:nexacro.NormalDataset,e:nexacro.DSColChangeEventInfo)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		// 법인 변경시 조회한다
        		if(e.columnid == "CD_CORP") {
        			this.fnSelect();
        		}
        	}
        };
        */

        /*
        // onkeyup 이벤트(시간 관련 컬럼에서 사용)
        this.divData_divDataRight_onkeyup = function(obj:nexacro.Edit,e:nexacro.KeyEventInfo)
        {
        	if(obj.value.length == 1){
        		this.gbDel = "N";
        	}else if(obj.value.length == 3){
        		this.gbDel = "Y";
        	}

        	if(obj.value.length == 2){
        		if(this.gbDel == "N"){	// N일때 (:) 추가한다
        			obj.set_value(obj.value + ":");
        		}
        	}

        };

        // 시간을 네자리만 입력했을경우  : 입력
        this.divData_divDataRight_onkillfocus = function(obj:nexacro.Edit,e:nexacro.KillFocusEventInfo)
        {
        	if(obj.value.length == 4){
        		if(obj.value.indexOf(":") < 0){
        			obj.set_value(obj.value.substr(0,2) + ":" + obj.value.substr(2,2));
        		}
        	}


        	//if(obj.value.length == 5){
        	//	if(obj.value.indexOf(":") < 0){
        	//		this.gfnAlert("시간 입력이 잘못되었습니다.");
        	//	}
        	//}

        };
        */


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.sta04.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta05.addEventHandler("onclick",this.sta05_onclick,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
        };
        this.loadIncludeScript("DAV_YEARENDAUTOSLIP_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
