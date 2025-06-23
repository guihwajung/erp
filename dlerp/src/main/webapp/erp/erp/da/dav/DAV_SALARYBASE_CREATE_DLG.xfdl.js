(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAU_SOCIAL_INSURANCE_DLG");
            this.set_titletext("급여이관-자료생성");
            this.getSetter("maxwidth").set("450");
            this.getSetter("maxheight").set("360");
            if (Form == this.constructor)
            {
                this._setFormPosition(426,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"YN_MID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_RESIDENT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAVPR_SALARYBASE_CREATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta03_00","86","162","330","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","2","10","344","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("자료생성");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","72","251","200","40",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new Button("btnOK","60","13","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:10","13","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Static("sta02","86","75","330","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","86","104","330","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ORDER","0","133","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("대상구분");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","86","133","330","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoTY_GUBUN","93","134","189","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdoTY_GUBUN_innerdataset = new nexacro.NormalDataset("rdoTY_GUBUN_innerdataset", obj);
            rdoTY_GUBUN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">특정주민번호</Col></Row></Rows>");
            obj.set_innerdataset(rdoTY_GUBUN_innerdataset);
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("staTY_MAGAM","0","46","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("구분");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","86","46","330","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cboYN_MID","92","51","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            obj.set_readonly("true");
            var cboYN_MID_innerdataset = new nexacro.NormalDataset("cboYN_MID_innerdataset", obj);
            cboYN_MID_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">연말정산</Col><Col id=\"codecolumn\">N</Col></Row><Row><Col id=\"datacolumn\">중도정산</Col><Col id=\"codecolumn\">Y</Col></Row></Rows>");
            obj.set_innerdataset(cboYN_MID_innerdataset);
            obj.set_text("연말정산");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("staWORK_BASE","0","75","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("적용년도");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Div("ctclWORK_BASE","92","80","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_async("false");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","104","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","92","109","250","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("25");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staID_RESIDENT","0","162","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("주민번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Div("ccfID_RESIDENT","92","167","240","20",null,null,null,null,null,null,this);
            obj.getSetter("CodeFindName").set("DAX_CFYEAREND");
            obj.getSetter("CDTextWidth").set("130");
            obj.set_taborder("16");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.addChild(obj.name, obj);

            obj = new Edit("edtID_SABUN","ccfID_RESIDENT:1","167","79","20",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_visible("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cboYN_MID","value","dsList","YN_MID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","ctclWORK_BASE.form.TextBox","value","dsList","WORK_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","ccfCD_CORP.form.CDTextBox","value","dsList","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","ccfCD_CORP.form.DSTextBox","value","dsList","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","rdoTY_GUBUN","value","dsList","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","ccfID_RESIDENT.form.CDTextBox","value","dsList","ID_RESIDENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtID_SABUN","value","dsList","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAV_SALARYBASE_CREATE_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        //상황별 코드파인더 동작을 위한 스위치
        this.CD_CORP = "";
        this.YY_BASE = "";
        this.YN_MID = "";
        this.ID_SABUN = "";

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


        	//작업구분
        	this.cboYN_MID.set_index(0);
        	if(!this.gfnIsNull(this.getOwnerFrame().YN_MID)) this.cboYN_MID.set_value(this.getOwnerFrame().YN_MID);

        	//적용년도(현재)
        	var today = this.gfnGetDate().substring(0,4) - 1; //전년도

        	this.ctclWORK_BASE.set_url(this.cboYN_MID.value == "Y"?"cmm::cmmCalMM.xfdl":"cmm::cmmCalYY.xfdl");
        	this.ctclWORK_BASE.form.TextBox.set_value(today);
        	if(!this.gfnIsNull(this.getOwnerFrame().WORK_BASE)) this.ctclWORK_BASE.form.TextBox.set_value(this.getOwnerFrame().WORK_BASE);
        	this.staWORK_BASE.set_text(this.cboYN_MID.value=="Y"?"적용년월":"적용년도");

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_CORP)){

        	    this.CD_CORP = this.getOwnerFrame().CD_CORP;

        		this.ccfCD_CORP.form.CDTextBox.set_value(this.getOwnerFrame().CD_CORP);
        		this.ccfCD_CORP.form.fnCodeFindLoad();
        	}

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_CORP) && !this.gfnIsNull(this.getOwnerFrame().ID_SABUN)) {

        		this.YY_BASE = this.getOwnerFrame().WORK_BASE;
                this.YN_MID = this.getOwnerFrame().YN_MID;
                this.ID_SABUN = this.getOwnerFrame().ID_SABUN;

        		this.rdoTY_GUBUN.set_value("2");
        		this.ccfID_RESIDENT.set_enable(true);


        		this.ccfID_RESIDENT.form.CDTextBox.set_value(this.getOwnerFrame().ID_SABUN);
        		this.ccfID_RESIDENT.form.fnCodeFindLoad();
        	}else{
        		this.rdoTY_GUBUN.set_value("1");
        		this.ccfID_RESIDENT.set_enable(false);
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function(){
        }
        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
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
        	//자료생성
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("YY_BASE", "string");
        	this.dsSave.addColumn("MM_BASE", "string");
        	this.dsSave.addColumn("NO_APPLY", "int");
        	this.dsSave.addColumn("YN_MID", "string");
        	this.dsSave.addColumn("ID_RESIDENT", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("GR_SEARCH", "string");
        	this.dsSave.addColumn("TY_AUTH", "string");
        	this.dsSave.addColumn("GR_DEPT", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {

        	//구분
        	if (this.gfnIsNull(this.cboYN_MID.value)) {
        		this.fnVaidateCallback = function() {
        			this.cboYN_MID.setFocus();
        		}
        		this.gfnAlert("구분을 입력하세요.");
        		return false;
        	}

        	//적용년도
        	if (this.gfnIsNull(this.ctclWORK_BASE.form.TextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.ctclWORK_BASE.form.TextBox.setFocus();
        		}
        		this.gfnAlert("적용년도를 입력하세요.", "fnVaidateCallback");
        		return false;
        	}

        	//법인
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.", "fnVaidateCallback");
        		return false;
        	}

        	//대상구분
        	if (this.gfnIsNull(this.rdoTY_GUBUN.value)) {
        		this.fnVaidateCallback = function() {
        			this.rdoTY_GUBUN.setFocus();
        		}
        		this.gfnAlert("대상구분을 입력하세요.");
        		return false;
        	}

        	if(this.rdoTY_GUBUN.value != "1"){
        		if (this.gfnIsNull(this.ccfID_RESIDENT.form.CDTextBox.value)) {
        			this.fnVaidateCallback = function() {
        				this.ccfID_RESIDENT.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("주민번호를 입력하세요.", "fnVaidateCallback");
        			return false;
        		}
        	}

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
        	if (svcID == "select") {
        		//this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.fnClose = function() {
        				this.getParentContext().close(true);
        			}
        			this.gfnAlert("자료생성이 완료되었습니다.", "fnClose");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			break;

        		case "ccfID_RESIDENT":
        			if (this.gfnIsNull(this.cboYN_MID.value)) {
        				this.gfnAlert("작업구분을 먼저 입력하세요.");
        				return false;
        			}
        			if (this.gfnIsNull(this.ctclWORK_BASE.form.TextBox.value)) {
        				this.gfnAlert("적용년도를 먼저 입력하세요.");
        				return false;
        			}
        			if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        				this.gfnAlert("법인을 먼저 입력하세요.");
        				return false;
        			}

        			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			dsUserParam.setColumn(nrow, "YY_BASE", this.ctclWORK_BASE.form.TextBox.value);
        			dsUserParam.setColumn(nrow, "YN_MID", this.cboYN_MID.value);
        			dsUserParam.setColumn(nrow, "ID_SABUN", this.gfnNvl(this.ID_SABUN, "")); //타화면에서 넘어온값이 있으면 그걸로 조회되도록. 아니면 입력한 VALUE 값으로 조회

        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			break;

        		default:

         	}
         	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	var arr = codeFindData;
        	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        		    if(this.loadFlag != ""){
        			this.ccfID_RESIDENT.form.CDTextBox.set_value("");
        			this.ccfID_RESIDENT.form.DSTextBox.set_value("");
        			this.edtID_SABUN.set_value("");
        			}
        			break;

        		case "ccfID_RESIDENT"://주민등록번호
        			if(arr.length > 0) {
        				this.edtID_SABUN.set_value(arr[0]["ID_SABUN"]);
        			}else{
        				this.edtID_SABUN.set_value("");
        			}
        			break;

        		default:
        	}

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
        	if(!this.fnSelectValidate()) return false;

        	this.gfnConfirm("기존의 정보는 모두 삭제 됩니다. \n계속진행하시겠습니까?", "fnConfirmCallback", "Confirm");
        }

        this.fnConfirmCallback = function(id, val){
        	trace("fnConfirmCallback", id, val);

        	if(val){

        		this.dsSave.clearData();
        		var nrow = this.dsSave.addRow();

        		this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        		this.dsSave.setColumn(nrow, "YY_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(0,4):this.ctclWORK_BASE.form.TextBox.value);
        		this.dsSave.setColumn(nrow, "MM_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(4,6):"12");
        		this.dsSave.setColumn(nrow, "NO_APPLY", "1");
        		this.dsSave.setColumn(nrow, "YN_MID", this.dsList.getColumn(0, "YN_MID"));
        		this.dsSave.setColumn(nrow, "ID_RESIDENT", this.rdoTY_GUBUN.value == "1" ? "" : this.dsList.getColumn(0, "ID_RESIDENT"));
        		this.dsSave.setColumn(nrow, "ID_SABUN", this.rdoTY_GUBUN.value == "1" ? "" : this.dsList.getColumn(0, "ID_SABUN"));
        		this.dsSave.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		this.dsSave.setColumn(nrow, "TY_AUTH", this.FormInfo.TY_AUTH);
        		this.dsSave.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        		this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        // 		trace("dsSave" ,  this.dsSave.saveXML());
        // 		return;

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

        	}
        };

        this.btnCANCLE_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };

        //작업대상 변경시
        this.rdoTY_GUBUN_onitemchanged = function(obj,e)
        {

        	this.ccfID_RESIDENT.set_enable(obj.value=="1"?false:true);

        	this.ccfID_RESIDENT.form.CDTextBox.set_value("");
        	this.ccfID_RESIDENT.form.DSTextBox.set_value("");

        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.rdoTY_GUBUN.addEventHandler("onitemchanged",this.rdoTY_GUBUN_onitemchanged,this);
        };
        this.loadIncludeScript("DAV_SALARYBASE_CREATE_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
