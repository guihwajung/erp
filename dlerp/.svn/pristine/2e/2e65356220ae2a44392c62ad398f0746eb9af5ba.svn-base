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
            this.set_titletext("전표발행");
            this.getSetter("maxwidth").set("420");
            this.getSetter("maxheight").set("275");
            if (Form == this.constructor)
            {
                this._setFormPosition(380,240);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_AUTOSLIP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JIGUB\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">createSlip</Col><Col id=\"SP\">DAWPR_RETIRE_AUTOSLIP_CREATE</Col></Row><Row><Col id=\"TARGET\">cancelSlip</Col><Col id=\"SP\">DAWPR_RETIRE_AUTOSLIP_CANCEL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("<ColumnInfo><Column id=\"RST_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","359","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("전표발행");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","95","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("법인");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","99","95",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:5","100","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFCORP2");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYM_PROVIDE","0","37","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("지급일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","99","37",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","0","66","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","99","66",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_ACCOUNT","0","124","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("회계일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","99","124",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_ACCOUNT","105","129","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_dateformat("yyyy-MM-dd");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_JIGUB","105","43","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_editformat("yyyyMMdd");
            obj.set_dateformat("yyyy-MM-dd");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_ACNT","99","230","248","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("16");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:5","71","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("17");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_AUTOSLIP","107","8","149","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_readonly("true");
            obj.set_visible("false");
            var divData_form_rdoTY_AUTOSLIP_innerdataset = new nexacro.NormalDataset("divData_form_rdoTY_AUTOSLIP_innerdataset", obj);
            divData_form_rdoTY_AUTOSLIP_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">ISSUE</Col><Col id=\"datacolumn\">발행</Col></Row><Row><Col id=\"codecolumn\">CANCEL</Col><Col id=\"datacolumn\">발행취소</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoTY_AUTOSLIP_innerdataset);
            obj.set_text("발행");
            obj.set_value("ISSUE");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns","73","168","200","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","120","0","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.divData.form.divBtns.addChild(obj.name, obj);

            obj = new Button("btnOK","30","0","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            this.divData.form.divBtns.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.rdoTY_AUTOSLIP","value","dsList","TY_AUTOSLIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ccfCD_CORP.form.CDTextBox","value","dsList","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ccfCD_DEPT_ACNT.form.CDTextBox","value","dsList","CD_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.calDT_ACCOUNT","value","dsList","DT_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.ctclDT_JIGUB","value","dsList","DT_JIGUB");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAW_RETIRESLIP_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	//this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	this.fnSetDisplay();

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	// this.FormBtns.Add.set_enable(false);
        	// this.FormBtns.Del.set_enable(false);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.grSearch = this.FormInfo.GR_SEARCH;					          // 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;					          // 그룹코드

        	this.rdoTY_AUTOSLIP = this.divData.form.rdoTY_AUTOSLIP;
        	this.ccfID_SABUN = this.divData.form.ccfID_SABUN;
        	this.ctclDT_JIGUB = this.divData.form.ctclDT_JIGUB;
        	this.ccfCD_CORP = this.divData.form.ccfCD_CORP;
        	this.calDT_ACCOUNT = this.divData.form.calDT_ACCOUNT;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//this.ccfCD_DEPT_ACNT.CodeFindName = "DAX_CFDEPT";
        	//this.ccfCD_DEPT_ACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        };

        // 부모창에서 받아온것 셋팅
        this.fnSetDisplay = function() {

        	var frame = this.getOwnerFrame();
        	// 발행구분 - ISSUE:전표발행 CANCEL:전표취소
        	this.rdoTY_AUTOSLIP.set_value(frame.TY_AUTOSLIP);
        	var strText = (frame.TY_AUTOSLIP == "CANCEL") ? "발행취소" : "발행";
        	this.divData.form.divBtns.form.btnOK.set_text(strText);

        	trace("적용년월->" + frame.YM_RETIRE +
        		  "/n 퇴직금지급일->" + frame.DT_JIGUB +
        		  "/n 적용차수->" + frame.NO_RETIRE +
        		  "/n 사원번호->" + frame.ID_SABUN +
        		  "/n ID_PERSON->" + frame.ID_PERSON +
        		  "/n CD_CORP->" + frame.CD_CORP +
        		  "/n DS_CORP->" + frame.DS_CORP
        	);

        	// 사번
        	this.ccfID_SABUN.form.CDTextBox.set_value(frame.ID_SABUN);
            this.ccfID_SABUN.form.DSTextBox.set_value(frame.DS_HNAME);

        	// 퇴직금지급일
        	this.ctclDT_JIGUB.set_value(frame.DT_JIGUB);
        	//회계일자
        	this.calDT_ACCOUNT.set_value(this.gfnGetDate("date"));


        	// 법인
        	this.ccfCD_CORP.form.CDTextBox.set_value(frame.CD_CORP);
            this.ccfCD_CORP.form.DSTextBox.set_value(frame.DS_CORP);

        	// 법인코드 및 법인명 기본세팅
        	//this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
            //this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsExecute = new Dataset();
        	this.dsExecute.addColumn("YM_RETIRE", "string");
        	this.dsExecute.addColumn("NO_RETIRE", "int");
        	this.dsExecute.addColumn("CD_CORP", "string");
        	this.dsExecute.addColumn("ID_SABUN", "string");
        	this.dsExecute.addColumn("ID_PERSON", "int");
        	this.dsExecute.addColumn("CD_DEPT_ACNT", "string");
        	this.dsExecute.addColumn("DT_ACCOUNT", "string");
        	this.dsExecute.addColumn("DT_JIGUB", "string");
        	this.dsExecute.addColumn("ID_INSERT", "string");


        	this.dsExecuteCanc = new Dataset();
        	this.dsExecuteCanc.addColumn("CD_TRADE", "string");
        	this.dsExecuteCanc.addColumn("YM_RETIRE", "string");
        	this.dsExecuteCanc.addColumn("NO_RETIRE", "float");
        	this.dsExecuteCanc.addColumn("CD_CORP", "string");
        	this.dsExecuteCanc.addColumn("ID_SABUN", "string");
        	this.dsExecuteCanc.addColumn("ID_PERSON", "float");
        	this.dsExecuteCanc.addColumn("CD_DEPT_BH", "string");

        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValidate = function() {
        	var validate = true;
        	var strMsg = "";

        	var TY_AUTOSLIP = this.dsList.getColumn(0, "TY_AUTOSLIP");		// 발행구분
        	var DT_JIGUB = this.dsList.getColumn(0, "DT_JIGUB");			// 지급일자
        	var CD_CORP = this.dsList.getColumn(0, "CD_CORP");				// 법인코드
        	var DT_ACCOUNT = this.dsList.getColumn(0, "DT_ACCOUNT");		// 회계일자
        	var CD_DEPT_ACNT = this.dsList.getColumn(0, "CD_DEPT_ACNT");	// 관리부서

        	/*
        	if(this.gfnIsNull(YM_PROVIDE)) {
        		strMsg += "지급년월은 반드시 입력 하셔야 합니다.\n";
        	}
        	*/

        	if(this.gfnIsNull(CD_CORP)) {
        		strMsg += "법인코드는 반드시 입력 하셔야 합니다.\n";
        	}

        	if(TY_AUTOSLIP == "ISSUE" && this.gfnIsNull(DT_ACCOUNT)) {
        		strMsg += "회계일자는 반드시 입력 하셔야 합니다.\n";
        	}

        	/*
        	if(TY_AUTOSLIP == "ISSUE" && this.gfnIsNull(CD_DEPT_ACNT)) {
        		strMsg += "관리부서는 반드시 입력 하셔야 합니다.\n";
        	}
        	*/

        	if(strMsg.length > 0) {
        		this.gfnAlert(strMsg);
        		return false;
        	}
        	return true;

        /*
        	//지급년월
        	if(this.gfnIsNull(DT_JIGUB)){
        		this.fnValidateCallback = function() {
        			this.ctclDT_JIGUB.setFocus();
        		}
        		this.gfnAlert("지급년월을 입력하세요.", "fnValidateCallback");
        		return false;
        	}
        	*/

         	return true;
        };
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	switch(svcID) {
        		case "createSlip":	// 전표발행
        		case "cancelSlip":	// 전표발행취소
        			if (errorCode == 0) {
        				var json = {TY_AUTOSLIP : this.rdoTY_AUTOSLIP.value};
        				this.getParentContext().close(JSON.stringify(json));
        				//this.getParentContext().close(true);
        			} else {
        				this.gfnAlert(errorMsg);
        			}
        		break;

        		default:
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	switch(id) {
        		case "ccfCD_DEPT_ACNT":
        			//var cd_corp = this.ccfCD_CORP.form.CDTextBox.value;
        			var cd_corp = this.gfnNvl(this.ccfCD_CORP.form.CDTextBox.value, this.AuthClient.CD_CORP);
        			var gr_search = this.gfnNvl(this.FormInfo.GR_SEARCH, this.getOwnerFrame().GR_SEARCH)

        			dsUserParam.setColumn(nrow, "GR_SEARCH", gr_search);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			//dsUserParam.setColumn(nrow, "CD_CORP", this.gfnNvl(this.ccfCD_CORP.form.CDTextBox.value,this.AuthClient.CD_CORP));
        			dsUserParam.setColumn(nrow, "CD_CORP", cd_corp);
        			dsUserParam.setColumn(nrow, "YN_CURRENT", "");

        			break;

        		case "ccfCD_CORP": // 법인코드
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			break;

        		case "ccfID_SABUN":
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
         			dsUserParam.setColumn(nrow, "CD_DEPT", "%");
         			dsUserParam.setColumn(nrow, "TY_RETIRE", "04");
        			break;

        		default:
         	}
         	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.btnOK_onclick = function(obj,e)
        {

        	if(!this.fnSaveValidate()) return false;

        	//발행구분 - ISSUE:전표발행 CANCEL:전표취소
        	if(this.dsList.getColumn(0, "TY_AUTOSLIP") == "ISSUE"){
        		this.fnIssueSlip();
        	}else{
        		this.fnCancelSlip();
        	}
        };

        // 전표발행
        this.fnIssueSlip = function() {

        	this.dsExecute.clearData();
        	var nrow = this.dsExecute.addRow();

        	var frame = this.getOwnerFrame();

        	this.dsExecute.setColumn(nrow, "YM_RETIRE", frame.YM_RETIRE);
        	this.dsExecute.setColumn(nrow, "NO_RETIRE", frame.NO_RETIRE);
        	this.dsExecute.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        	this.dsExecute.setColumn(nrow, "ID_SABUN", frame.ID_SABUN);
        	this.dsExecute.setColumn(nrow, "ID_PERSON", frame.ID_PERSON);
        	//this.dsExecute.setColumn(nrow, "CD_DEPT_ACNT", this.dsList.getColumn(0, "CD_DEPT_ACNT")); //관리부서
        	this.dsExecute.setColumn(nrow, "DT_ACCOUNT", this.dsList.getColumn(0, "DT_ACCOUNT"));
        	this.dsExecute.setColumn(nrow, "DT_JIGUB", this.dsList.getColumn(0, "DT_JIGUB"));
        	this.dsExecute.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        	var strSvcId    = "createSlip";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "createSlip=dsExecute";
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

        // 전표발행취소
        this.fnCancelSlip = function()
        {
        	this.dsExecuteCanc.clearData();

        	var frame = this.getOwnerFrame();

        	var nrow = this.dsExecuteCanc.addRow();
        	this.dsExecuteCanc.setColumn(nrow, "CD_TRADE", frame.CD_TRADE);
        	this.dsExecuteCanc.setColumn(nrow, "YM_RETIRE", frame.YM_RETIRE);
        	this.dsExecuteCanc.setColumn(nrow, "NO_RETIRE", frame.NO_RETIRE);
        	this.dsExecuteCanc.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        	this.dsExecuteCanc.setColumn(nrow, "ID_SABUN", frame.ID_SABUN);
        	this.dsExecuteCanc.setColumn(nrow, "ID_PERSON", frame.ID_PERSON);
        	this.dsExecuteCanc.setColumn(nrow, "CD_DEPT_BH", this.AuthClient.CD_DEPT);	//발행부서 (로그인부서)


        	var strSvcId    = "cancelSlip";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "cancelSlip=dsExecuteCanc";
        	var outData     = "dsResult=cancelSlip0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]

        };

        this.btnCANCLE_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };

        this.ctclDT_JIGUB_onchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue){
        		// 회계일자
        		this.calDT_ACCOUNT.set_value(e.postvalue);
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.sta04.addEventHandler("onclick",this.sta04_onclick,this);
            this.divData.form.sta00.addEventHandler("onclick",this.sta04_onclick,this);
            this.divData.form.sta02.addEventHandler("onclick",this.sta04_onclick,this);
            this.divData.form.ctclDT_JIGUB.addEventHandler("onchanged",this.ctclDT_JIGUB_onchanged,this);
            this.divData.form.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.divData.form.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
        };
        this.loadIncludeScript("DAW_RETIRESLIP_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
