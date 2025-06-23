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
            this.set_titletext("퇴직자연차수당");
            this.getSetter("maxwidth").set("330");
            this.getSetter("maxheight").set("260");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,210);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"YY_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/><Column id=\"ID_INSERT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DACPR_MGTVACA_RETIRE_CREATRE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","0","0","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("퇴직자 연차수당");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","8","124","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("대상자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","94","37","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta05","8","37","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("대상년도");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","8","95","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("퇴직일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","94","95","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","94","124","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","45","160","200","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Button("btnOK","30","10","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("10");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30","10","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("11");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Static("sta06","8","66","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta07","94","66","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","101","71","188","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("ctclYY_BASE","101","42","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_BASE","101","100","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","101","129","188","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("8");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","ccfCD_CORP.form.CDTextBox","value","dsList","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","ccfCD_CORP.form.DSTextBox","value","dsList","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","ctclYY_BASE.form.TextBox","value","dsList","YY_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","ctclDT_BASE","value","dsList","DT_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","ccfID_SABUN.form.CDTextBox","value","dsList","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","ccfID_SABUN.form.DSTextBox","value","dsList","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DAC_MGTVACATION_PAY_DLG3.xfdl", function() {
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

        	var today = this.gfnGetDate().substring(0,4);
        	//this.ctclYY_BASE.form.TextBox.set_value(today);
        	var yy_base = this.getOwnerFrame().YY_BASE;

        	this.dsList.setColumn(0, "YY_BASE", yy_base);
        	this.dsList.setColumn(0, "DT_BASE", yy_base+"1231");

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctclYY_BASE = this.ctclYY_BASE;	//대상년도
        	this.ccfCD_CORP = this.ccfCD_CORP;	//법인코드
        	this.ctclDT_BASE = this.ctclDT_BASE;	//기준일자
        	this.ccfID_SABUN = this.ccfID_SABUN;	//대상자
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 코드파인더
        	//법인
        	this.ccfCD_CORP.CodeFindName = "DAX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	//대상자
        	this.ccfID_SABUN.CodeFindName = "DAX_CFBASEINFO_ALL";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "fnAfterCDTextChanged";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSave = new Dataset();

        	this.dsSave.addColumn("YY_BASE", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("DT_BASE", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("ID_PERSON", "string");
        	this.dsSave.addColumn("ID_INSERT", "string");
        }

        this.btnOK_onclick = function(obj,e)
        {
        	// 확인
        	if(!this.fnSaveValidate()) return;
        	this.dlgfnSave();
        	//this.getParentContext().close(true);  // fnCallback 에서 닫기처리
        };

        this.dlgfnSave = function() {
        trace("this.dsList >>>>>>>"+this.dsList.saveXML());

        	this.dsSave.clearData();
        	var nrow = this.dsSave.addRow();

        	this.dsSave.setColumn(nrow, "YY_BASE", this.dsList.getColumn(0, "YY_BASE"));
        	this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        	this.dsSave.setColumn(nrow, "DT_BASE", this.dsList.getColumn(0, "DT_BASE"));
        	this.dsSave.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(0, "ID_SABUN"));
        	this.dsSave.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(0, "ID_PERSON"));
        	this.dsSave.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        trace("this.dsSave >>>>>>>"+this.dsSave.saveXML());

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

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	저장 Validate
         */
        this.fnSaveValidate = function() {
        	if (this.gfnIsNull(this.dsList.getColumn(0, "YY_BASE"))) {
        		this.ctclYY_BASE.form.TextBox.setFocus();
        		this.gfnAlert("대상년도를 입력하세요.");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsList.getColumn(0, "CD_CORP"))) {
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		this.gfnAlert("법인코드를 입력하세요.");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsList.getColumn(0, "DT_BASE"))) {
        		this.ctclDT_BASE.setFocus();
        		this.gfnAlert("퇴직일자를 입력하세요.");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsList.getColumn(0, "ID_SABUN"))) {
        		this.ccfID_SABUN.form.CDTextBox.setFocus();
        		this.gfnAlert("대상자를 입력하세요.");
        		return false;
        	}

        	return true;
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        //trace("코드파인드 id :["+id+"] nrow :["+nrow+"]");
        	if (id == "ccfCD_CORP") {	//법인
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        	}
        	else if  (id == "ccfID_SABUN") {	//대상자

        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnNvl(this.ccfCD_CORP.form.CDTextBox.value,"%"));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", "");
        		dsUserParam.setColumn(nrow, "CD_DEPT", "");
        		dsUserParam.setColumn(nrow, "YN_CORP", "");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "");

        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	//this.fnSearchInit();
        	var arr = codeFindData;
        	switch(id){
        		case "ccfID_SABUN" :
        			this.dsList.setColumn(0, "ID_SABUN", arr[0]["ID_SABUN"]);
        			this.dsList.setColumn(0, "DS_HNAME", arr[0]["DS_HNAME"]);
        			this.dsList.setColumn(0, "ID_PERSON", arr[0]["ID_PERSON"]);
        		break;

        	}

        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	//trace("fnCallback >>>> svcID:["+svcID+"] errorMsg:["+errorMsg+"]");

        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return;
        	}

        	if(svcID == "save") {
        		if (errorCode == 0) {
        			this.fnClose = function() {
        				this.getParentContext().close(true);
        			}
        			this.gfnAlert("작업이 완료되었습니다.", "fnClose");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}

        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e.pretext != e.posttext) {
        		// 폼상태 초기화
        		//this.gfnSetFormStatus(this);
        		//this.gfnGridClear(this.dxGrid);
        	}
        };

        this.dsList_onvaluechanged = function(obj,e)
        {
        	trace("dsList_onvaluechanged >>>"+ e.columnid);
        	var strColid = e.columnid;

        	if(e.oldvalue != e.newvalue) {
        		if(strColid == "YY_BASE"){
        			if(e.newvalue == ""){
        				this.dsList.setColumn(0, "DT_BASE", "");
        			}else{
        				this.dsList.setColumn(0, "DT_BASE", e.newvalue+"1231");
        			}
        		}else if(strColid == "CD_CORP"){
        			this.dsList.setColumn(0, "ID_SABUN", "");
        			this.dsList.setColumn(0, "DS_HNAME", "");
        			this.dsList.setColumn(0, "ID_PERSON", "");
        		}else if(strColid == "TY_SALARY"){

        		}
        		//this.gfnSetFormStatus(this);	// 폼상태 초기화
        		//this.gfnGridClear(this.dxGrid);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.ctclDT_BASE.addEventHandler("onchanged",this.fnSearchInit,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAC_MGTVACATION_PAY_DLG3.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
