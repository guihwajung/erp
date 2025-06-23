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
            this.set_titletext("사업수지 항목 복사");
            this.getSetter("maxwidth").set("500");
            this.getSetter("maxheight").set("210");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,170);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROJT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PROJF\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROJF\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DOSPR_ITEM_COPY</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","0","0","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("복사정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","114","37","356","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta05","8","66","107","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("프로젝트(T)");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","8","37","107","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("프로젝트(F)");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","114","66","356","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_PROJT","121","71","339","20",null,null,null,null,null,null,this);
            obj.getSetter("CodeFindName").set("DOS_CFPROJ");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_PROJF","121","42","339","20",null,null,null,null,null,null,this);
            obj.getSetter("CodeFindName").set("DOS_CFPROJ");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","65","110","200","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("btnOK","30","10","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("10");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30","10","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("11");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","ccfCD_PROJT.form.CDTextBox","value","dsList","CD_PROJT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","ccfCD_PROJT.form.DSTextBox","value","dsList","DS_PROJT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","ccfCD_PROJF.form.CDTextBox","value","dsList","CD_PROJF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","ccfCD_PROJF.form.DSTextBox","value","dsList","DS_PROJF");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DOS_COPY_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();
        	//this.fnSetCombo();

        	var frame = this.getOwnerFrame();
        	this.dsList.setColumn(0, "CD_PROJF", frame.CD_PROJF);
        	this.dsList.setColumn(0, "DS_PROJF", frame.DS_PROJF);
        	this.dsList.setColumn(0, "CD_PROJT", frame.CD_PROJF);
        	this.dsList.setColumn(0, "DS_PROJT", frame.DS_PROJF);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ccfID_PROJT = this.ccfID_PROJT;	//프로젝트T
        	this.ccfID_PROJF = this.ccfID_PROJF;	//프로젝트F
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	// 프로젝트T
        	this.ccfCD_PROJT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_PROJT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//프로젝트F
        	this.ccfCD_PROJF.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TO_PROJ", "string");
        	this.dsSave.addColumn("FR_PROJ", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        }

        this.btnOK_onclick = function(obj,e)
        {
        	// 확인
        	if(!this.fnSaveValidate()) return;
        	this.dlgfnSave();

        // 	var json = {};
        //
        // 	json.CD_PROJ = this.dsList.getColumn(0, "CD_PROJT");
        // 	json.DS_PROJ = this.dsList.getColumn(0, "DS_PROJT");
        //
        // 	this.getParentContext().close(JSON.stringify(json));
        };

        this.dlgfnSave = function() {

        	this.dsSave.clearData();
        	var nrow = this.dsSave.addRow();

        	this.dsSave.setColumn(nrow, "TO_PROJ", this.dsList.getColumn(0, "CD_PROJT"));
        	this.dsSave.setColumn(nrow, "FR_PROJ", this.dsList.getColumn(0, "CD_PROJF"));
        	this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

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
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        this.btnCANCLE_onclick = function(obj,e)
        {
        	// 취소
        	this.getParentContext().close(false);
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	저장 Validate
         */
        this.fnSaveValidate = function() {

        	if (this.gfnIsNull(this.dsList.getColumn(0, "CD_PROJT"))) {
        		this.ccfID_PROJT.form.CDTextBox.setFocus();
        		this.gfnAlert("프로젝트명을 입력하세요.");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsList.getColumn(0, "CD_PROJF"))) {
        		this.ccfID_PROJF.form.CDTextBox.setFocus();
        		this.gfnAlert("프로젝트명을 입력하세요.");
        		return false;
        	}

        	return true;
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfCD_PROJT") {	// 프로젝트T
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "ID_GROUP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	}
        	else if  (id == "ccfCD_PROJF") {	// 프로젝트F
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "ID_GROUP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	}

        	return true;
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        // 	if (errorCode != 0) {
        // 		this.gfnAlert(errorMsg);
        // 		return;
        // 	}
        //
        	if(svcID == "save") {
        		if (errorCode == 0) {

        			var json = {};

        			json.CD_PROJ = this.dsList.getColumn(0, "CD_PROJT");
        			json.DS_PROJ = this.dsList.getColumn(0, "DS_PROJT");

        			this.getParentContext().close(JSON.stringify(json));

        // 			this.fnClose = function() {
        // 				this.getParentContext().close(true);
        // 			}
        			// 자기자신창 닫기
        //			this.getParentContext().close();

        			this.gfnAlert("작업이 완료되었습니다.", "fnClose");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DOS_COPY_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
