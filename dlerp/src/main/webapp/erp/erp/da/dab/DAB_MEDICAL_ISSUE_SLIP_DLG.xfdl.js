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
            this.set_titletext("급여적용");
            this.getSetter("maxwidth").set("395");
            this.getSetter("maxheight").set("260");
            if (Form == this.constructor)
            {
                this._setFormPosition(360,215);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_AUTOSLIP\" type=\"STRING\" size=\"256\"/><Column id=\"YM_PROVIDE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SN_PROVIDE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">execute</Col><Col id=\"SP\">DABPR_MEDICAL_AUTOSLIP_ISSUE</Col></Row><Row><Col id=\"TARGET\">cancelSlip</Col><Col id=\"SP\">DABPR_MEDICAL_AUTOSLIP_CANCEL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("<ColumnInfo><Column id=\"RST_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","0","0","359","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("전표발행");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","93","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","99","122",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","99","35",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","99","64",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","99","93",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:5","98","250","20",null,null,null,null,null,null,this);
            obj.getSetter("CodeFindName").set("DAX_CFCORP2");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.addChild(obj.name, obj);

            obj = new Static("staDT_ACCOUNT","0","122","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("회계일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Calendar("calDT_ACCOUNT","105","127","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_PROVIDE","0","64","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("지급년월");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Div("ctclYM_PROVIDE","staYM_PROVIDE:5","69","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("staTY_AUTOSLIP","0","35","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("발행구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoTY_AUTOSLIP","106","40","149","20",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_readonly("true");
            var rdoTY_AUTOSLIP_innerdataset = new nexacro.NormalDataset("rdoTY_AUTOSLIP_innerdataset", obj);
            rdoTY_AUTOSLIP_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">ISSUE</Col><Col id=\"datacolumn\">발행</Col></Row><Row><Col id=\"codecolumn\">CANCEL</Col><Col id=\"datacolumn\">발행취소</Col></Row></Rows>");
            obj.set_innerdataset(rdoTY_AUTOSLIP_innerdataset);
            obj.set_text("발행");
            obj.set_value("ISSUE");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSN_PROVIDE","ctclYM_PROVIDE:10","69","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cboSN_PROVIDE_innerdataset = new nexacro.NormalDataset("cboSN_PROVIDE_innerdataset", obj);
            cboSN_PROVIDE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">6</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">7</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">8</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">9</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row></Rows>");
            obj.set_innerdataset(cboSN_PROVIDE_innerdataset);
            obj.set_text("1");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","73","166","200","27",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","120","0","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnOK","30","0","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","rdoTY_AUTOSLIP","value","dsList","TY_AUTOSLIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","ctclYM_PROVIDE.form.TextBox","value","dsList","YM_PROVIDE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","ccfCD_CORP.form.CDTextBox","value","dsList","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","calDT_ACCOUNT","value","dsList","DT_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cboSN_PROVIDE","value","dsList","SN_PROVIDE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_MEDICAL_ISSUE_SLIP_DLG.xfdl", function() {
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
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//this.ccfCD_DEPT_BH.CodeFindName = "DAX_CFDEPT";
        	//this.ccfCD_DEPT_BH.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        };

        // 부모창에서 받아온것 셋팅
        this.fnSetDisplay = function() {

        	var frame = this.getOwnerFrame();

        	// 발행구분 - ISSUE:전표발행 CANCEL:전표취소
        	this.rdoTY_AUTOSLIP.set_value(frame.TY_AUTOSLIP);
        	var strText = (frame.TY_AUTOSLIP == "CANCEL") ? "발행취소" : "발행";
        	var benable = (frame.TY_AUTOSLIP == "CANCEL") ?  false : true;

        	this.divBtns.form.btnOK.set_text(strText);

        	// 회계일자
        	this.calDT_ACCOUNT.set_enable(benable);

        	// 지급년월
        	this.ctclYM_PROVIDE.form.TextBox.set_value(frame.YM_PROVIDE);

        	// 법인
        	this.ccfCD_CORP.form.CDTextBox.set_value(frame.CD_CORP);
            this.ccfCD_CORP.form.DSTextBox.set_value(frame.DS_CORP);

        	// 회계일자
        	this.dsList.setColumn(0, "DT_ACCOUNT",frame.DT_ACCOUNT);

        	// 지급차수
        	this.dsList.setColumn(0, "SN_PROVIDE", 1);

        /*

        	//지급구분
        	this.cboTY_SALARY.set_index(0);

        	// 법인코드 및 법인명 기본세팅
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
            this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        */

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsExecute = new Dataset();
        	this.dsExecute.addColumn("CD_DEPT_BH", "string");
        	this.dsExecute.addColumn("ID_INSERT", "string");
        	this.dsExecute.addColumn("YM_PROVIDE", "string");
        	this.dsExecute.addColumn("CD_CORP", "string");
        	this.dsExecute.addColumn("DT_ACCOUNT", "string");
        	this.dsExecute.addColumn("SN_PROVIDE", "string");
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

        	var TY_AUTOSLIP = this.dsList.getColumn(0, "TY_AUTOSLIP");	// 발행구분
        	var YM_PROVIDE = this.dsList.getColumn(0, "YM_PROVIDE");	// 지급년월
        	var CD_CORP = this.dsList.getColumn(0, "CD_CORP");			// 법인코드
        	var DT_ACCOUNT = this.dsList.getColumn(0, "DT_ACCOUNT");	// 회계일자

        	if(this.gfnIsNull(YM_PROVIDE)) {
        		strMsg += "지급년월은 반드시 입력 하셔야 합니다.\n";
        	}

        	/*
        	if(this.gfnIsNull(CD_CORP)) {
        		strMsg += "법인코드는 반드시 입력 하셔야 합니다.\n";
        	}
        	*/

        	if(TY_AUTOSLIP == "ISSUE" && this.gfnIsNull(DT_ACCOUNT)) {
        		strMsg += "회계일자는 반드시 입력 하셔야 합니다.\n";
        	}

        	if(strMsg.length > 0) {
        		this.gfnAlert(strMsg);
        		return false;
        	}
        	return true;

        /*
        	//지급년월
        	if(this.gfnIsNull(this.ctclYM_PROVIDE.form.TextBox.value)){
        		this.fnValidateCallback = function() {
        			this.ctclYM_PROVIDE.form.TextBox.setFocus();
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
        		case "execute":		// 전표발행
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
        		case "ccfCD_DEPT_BH":
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
        	//this.dsExecute.setColumn(nrow, "CD_DEPT_BH", this.dsList.getColumn(0, "CD_DEPT_BH"));
        	this.dsExecute.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        	this.dsExecute.setColumn(nrow, "YM_PROVIDE", this.dsList.getColumn(0, "YM_PROVIDE"));
        	this.dsExecute.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        	this.dsExecute.setColumn(nrow, "DT_ACCOUNT", this.dsList.getColumn(0, "DT_ACCOUNT"));
        	this.dsExecute.setColumn(nrow, "SN_PROVIDE", this.dsList.getColumn(0, "SN_PROVIDE"));

        	var strSvcId    = "execute";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "execute=dsExecute";
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

        // 전표발행취소
        this.fnCancelSlip = function()
        {
        	this.dsExecute.clearData();

        	var nrow = this.dsExecute.addRow();
        	this.dsExecute.setColumn(nrow, "CD_DEPT_BH", this.AuthClient.CD_DEPT);
        	this.dsExecute.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        	this.dsExecute.setColumn(nrow, "YM_PROVIDE", this.dsList.getColumn(0, "YM_PROVIDE"));
        	this.dsExecute.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        	this.dsExecute.setColumn(nrow, "DT_ACCOUNT", this.dsList.getColumn(0, "DT_ACCOUNT"));
        	this.dsExecute.setColumn(nrow, "SN_PROVIDE", this.dsList.getColumn(0, "SN_PROVIDE"));

        	var strSvcId    = "cancelSlip";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "cancelSlip=dsExecute";
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.cboSN_PROVIDE.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
        };
        this.loadIncludeScript("DAB_MEDICAL_ISSUE_SLIP_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
