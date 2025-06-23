(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAW_INITRETIRECREATE_DLG");
            this.set_titletext("퇴직금 시뮬레이션 생성");
            this.set_scrolltype("none");
            this.getSetter("maxwidth").set("405");
            this.getSetter("maxheight").set("359");
            if (Form == this.constructor)
            {
                this._setFormPosition(361,284);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SP\">DAWPR_RETIRE_SIMULATION_SELECT</Col><Col id=\"TARGET\">select</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"YM_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"-20","-6",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","-5","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("퇴직금 시뮬레이션 생성");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_RETIREPENSION","0","203","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("퇴직연금구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYM_BASE_bg","staTY_RETIREPENSION:-1","staTY_RETIREPENSION:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","29","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_tablelabelTE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CORP_bg","staCD_CORP:-1","staCD_CORP:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebgT");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:5","staCD_CORP:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_GROUPJOIN","0","staCD_CORP:28","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("그룹입사일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_DAESANG_bg","staDT_GROUPJOIN:-1","staDT_GROUPJOIN:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","0","58","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabelE");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN_bg","staID_SABUN:-1","staID_SABUN:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:5","staID_SABUN:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO");
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("11");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtID_PERSON","410","64","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_readonly("false");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns","staTY_RETIREPENSION:20","staTY_RETIREPENSION:10","130","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","0","0","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            this.divData.form.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:10","0","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.divData.form.divBtns.addChild(obj.name, obj);

            obj = new Static("staDT_JOIN","0","116","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("입사일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN_bg00","99","116","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_START","0","145","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("기산일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN_bg01","99","145","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_RETIRE","0","174","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("퇴직(정산)일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN_bg02","99","174","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_GROUPJOIN","105","92","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_JOIN","105","121","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_START","105","150","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_RETIRE","106","179","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtTY_RETIREPENSION","106","208","127","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divData.form.ccfCD_CORP.form.CDTextBox","value","dsData","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ccfCD_CORP.form.DSTextBox","value","dsData","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ccfID_SABUN.form.CDTextBox","value","dsData","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.ccfID_SABUN.form.DSTextBox","value","dsData","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.ctclDT_GROUPJOIN","value","dsList","DT_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ctclDT_JOIN","value","dsList","DT_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.ctclDT_START","value","dsList","DT_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.ctclDT_RETIRE","value","dsList","DT_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAW_RETIRESIMUL_CREATE_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e) {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();
            this.fnSetCombo();
        	this.fnInit();
        }

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {

        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {

        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctclYM_BASE = this.divData.form.ctclYM_BASE;		// 적용년월
        	this.ccfCD_CORP  = this.divData.form.ccfCD_CORP;		// 법인

        	this.ccfID_SABUN = this.divData.form.ccfID_SABUN;		// 사원번호
        	this.txtID_PERSON = this.divData.form.txtID_PERSON;		// 사번
        	this.ctclDT_GROUPJOIN = this.divData.form.ctclDT_GROUPJOIN;
        	this.ctclDT_JOIN = this.divData.form.ctclDT_JOIN;
        	this.ctclDT_START = this.divData.form.ctclDT_START;
        	this.ctclDT_RETIRE = this.divData.form.ctclDT_RETIRE;
        	this.edtTY_RETIREPENSION = this.divData.form.edtTY_RETIREPENSION;

        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";	// 법인
        	this.ccfCD_CORP.AfterCDTextChanged      = "fnAfterCDTextChanged";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	// 성명
        	this.ccfID_SABUN.AfterCDTextChanged     = "fnAfterCDTextChanged";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSearch = new Dataset();
        	this.dsSearch.addColumn("CD_CORP", "string");
        	this.dsSearch.addColumn("TY_GUBUN", "string");
        	this.dsSearch.addColumn("ID_PERSON", "int");
        	this.dsSearch.addColumn("ID_SABUN", "string");
        	this.dsSearch.addColumn("DT_START", "string");
        	this.dsSearch.addColumn("DT_RETIRE", "string");
        	this.dsSearch.addColumn("GR_SEARCH", "string");
        	this.dsSearch.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 콤보 데이터 조회 및 설정
         ************************************************************************/
        this.fnSetCombo = function() {

        }

        /************************************************************************
         * 화면 및 검색영역 초기화
         ************************************************************************/
        this.fnInit = function() {
        	//적용년월
        	//this.ctclYM_BASE.form.TextBox.set_value(this.gfnGetDate().substr(0,6));
        	this.ctclYM_BASE.form.TextBox.set_value(this.getOwnerFrame().YM_BASE);

        	//임직원구분
        	this.rdoTY_GUBUN.set_value(this.getOwnerFrame().TY_GUBUN);

        	//법인
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.getOwnerFrame().CD_CORP);
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.getOwnerFrame().DS_CORP);

        	//사번
        	this.ccfID_SABUN.form.CDTextBox.set_value(this.getOwnerFrame().ID_SABUN);
        	this.ccfID_SABUN.form.DSTextBox.set_value(this.getOwnerFrame().DS_HNAME);
        	this.txtID_PERSON.set_value(this.getOwnerFrame().ID_PERSON);
        }


        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {

         	var validate = true;

        	//적용년월
        	if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인을 입력하세요.", "fnVaidateCallback");
        		return validate;
        	} else if (this.gfnIsNull(this.ccfID_SABUN.form.CDTextBox.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfID_SABUN.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("성명을 입력하세요.", "fnVaidateCallback");
        		return validate;
        	} else if (this.gfnIsNull(this.ctclDT_RETIRE.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ctclDT_RETIRE.setFocus();
        		}
        		this.gfnAlert("퇴직정산일자를 입력하세요.", "fnVaidateCallback");
        		return validate;
        	}

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
        	} else if( svcID == "save") {
        		if(errorCode == 0)
        		{
        			this.fnSaveVaidateCallback = function() {
        				this.getParentContext().close(true);
        			}
        			this.gfnAlert("작업이 완료되었습니다.", "fnSaveVaidateCallback");
        		}else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	switch(id) {

        		case "ccfCD_CORP"://법인
        			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			break;
        		case "ccfID_SABUN"://사번
        			if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        				this.gfnAlert("법인을 먼저 선택하시기 바랍니다.");
        				return false;
        			}

        			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "YN_CORP", "N");
        			dsUserParam.setColumn(nrow, "TY_RETIRE", "%");   // 재직구분
        			break;

        		default:
         	}
         	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(id == "ccfCD_CORP"){
        		this.ccfID_SABUN.form.CDTextBox.set_value("");
        		this.ccfID_SABUN.form.DSTextBox.set_value("");
        		this.txtID_PERSON.set_value("");
        	}else if(id == "ccfID_SABUN") {
        		if(arr.length > 0) {
        			this.txtID_PERSON.set_value(arr[0]["ID_PERSON"]);
        			this.ctclDT_GROUPJOIN.set_value(arr[0]["DT_GROUPJOIN"]);
        			this.ctclDT_JOIN.set_value(arr[0]["DT_JOIN"]);
        			this.ctclDT_START.set_value(arr[0]["DT_RETIRESTART"]);
        			//this.edtTY_RETIREPENSION.set_value(arr[0]["TY_RETIREPENSION"]);
        		}else{
        			this.txtID_PERSON.set_value("");
        			this.ctclDT_GROUPJOIN.set_value("");
        			this.ctclDT_JOIN.set_value("");
        			this.ctclDT_START.set_value("");
        			//this.edtTY_RETIREPENSION.set_value("");
        		}
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

        	this.dsSearch.clearData();
        	var nrow = this.dsSearch.addRow();

        	this.dsSearch.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsSearch.setColumn(nrow, "TY_GUBUN", this.rdoTY_GUBUN.value);
        	this.dsSearch.setColumn(nrow, "ID_PERSON", this.txtID_PERSON.value);
        	this.dsSearch.setColumn(nrow, "ID_SABUN", this.ccfID_SABUN.form.CDTextBox.value);
        	this.dsSearch.setColumn(nrow, "DT_START", this.ctclDT_START.value);
        	this.dsSearch.setColumn(nrow, "DT_RETIRE", this.ctclDT_RETIRE.value);
        	this.dsSearch.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSearch.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSearch";
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
            this.divData.form.staYM_BASE_bg.addEventHandler("onclick",this.sta04_onclick,this);
            this.divData.form.staCD_CORP_bg.addEventHandler("onclick",this.sta04_onclick,this);
            this.divData.form.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divData.form.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.divData.form.ctclDT_GROUPJOIN.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.ctclDT_JOIN.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.ctclDT_START.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.ctclDT_RETIRE.addEventHandler("onchanged",this.fnSearchInit,this);
        };
        this.loadIncludeScript("DAW_RETIRESIMUL_CREATE_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
