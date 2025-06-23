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
            this.set_titletext("신고자료생성");
            this.getSetter("maxwidth").set("400");
            this.getSetter("maxheight").set("385");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,340);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PLACE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PLACE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"YM_PAYMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_DELIVERY\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PAY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"CD_PLACE\"/><Col id=\"DS_PLACE\"/><Col id=\"TY_WORK\"/><Col id=\"YM_WORK\"/><Col id=\"YM_PAYMENT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DHVPR_EMPTAX_CREATE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DHXPR_LOCALTAXPLACE_CODE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_WORK", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">정기</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">수시</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsText", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_PLACE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PLACE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PLACE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_PLACE\"/><Col id=\"DS_PLACE\">전체</Col></Row><Row><Col id=\"CD_PLACE\">0000</Col><Col id=\"DS_PLACE\">본사</Col></Row><Row><Col id=\"CD_PLACE\">0001</Col><Col id=\"DS_PLACE\">기술연구소</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","50","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta08_00_00","0","sta00:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("신고사업장");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta09_00_00","sta08_00_00:-1","79",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboCD_PLACE","sta08_00_00:6","84",null,"20","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_innerdataset("dsCD_PLACE");
            obj.set_codecolumn("CD_PLACE");
            obj.set_datacolumn("DS_PLACE");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","10",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("신고자료생성");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","sta00:-1","staTITLE:10",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta15","0","sta08_00_00:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("신고구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta18","sta15:-1","sta01:28",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","sta15:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("귀속년월");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","sta02:-1","sta02:-30",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","0","sta02:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("지급년월");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07","sta06:-1","sta06:-30",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta08","0","sta06:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("신고제출일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta09","sta08:-1","sta07:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","sta00:5","staTITLE:15",null,"20","20",null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_DELIVERY","sta08:5","sta03:33","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSave","36.00%",null,"50","20",null,"22",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","52.00%",null,"50","20",null,"22",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","sta02:5","142","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enableevent("true");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta08_00","0","sta08:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("급여지급일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta09_00","sta08_00:-1","224",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_PAY","sta08_00:5","230","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboTY_WORK","sta15:6","114","79","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsTY_WORK");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("정기");
            obj.set_value("1");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ctclYM_PAYMENT","sta06:5","171","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enableevent("true");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ccfCD_CORP.form.CDTextBox","value","dsList","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.tclDT_DELIVERY","value","dsList","DT_DELIVERY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ctclYM_WORK.form.TextBox","value","dsList","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.tclDT_PAY","value","dsList","DT_PAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ctclYM_PAYMENT.form.TextBox","value","dsList","YM_PAYMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.ccfCD_CORP.form.DSTextBox","value","dsList","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.cboCD_PLACE","value","dsList","CD_PLACE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.cboTY_WORK","value","dsList","TY_WORK");
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
        this.registerScript("DHV_EMPTAX_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        var context = "/";
        if (nexacro.getEnvironmentVariable("evContextPath") != undefined) {
        	context = nexacro.getEnvironmentVariable("evContextPath");
        }

        this.fileConfig = {
        	host : this.gfnGetServerUrl(),
        	downloadUrl : context + "file/downloadText.do",
        	allowTypes : ["txt"],
        	maxCount : 1,
        	maxSize : "200MB",
        	maxTotalSize : "200MB"
        };

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
        	this.fnCombo();
        };

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

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divData.form.ccfCD_CORP;
        	this.cboTY_WORK = this.divData.form.cboTY_WORK;
        	this.ctclYM_WORK = this.divData.form.ctclYM_WORK;
        	this.ctclYM_PAYMENT = this.divData.form.ctclYM_PAYMENT;
        	this.tclDT_DELIVERY = this.divData.form.tclDT_DELIVERY;
        	this.tclDT_PAY = this.divData.form.tclDT_PAY;
        	this.cboCD_PLACE = this.divData.form.cboCD_PLACE;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.dsList.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsList.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);

        	this.dsList.setColumn(0, "TY_WORK", "1");
         	this.dsList.setColumn(0, "YM_WORK", this.getOwnerFrame().YM_WORK);
        	this.dsList.setColumn(0, "YM_PAYMENT", this.getOwnerFrame().YM_PAYMENT);
        	var dtNotify = this.gfnAddMonth(this.getOwnerFrame().YM_PAYMENT +"01", 1);
        	this.dsList.setColumn(0, "DT_DELIVERY", dtNotify.substr(0,6) +"10");
         	this.dsList.setColumn(0, "DT_PAY",this.getOwnerFrame().YM_PAYMENT + "25");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("CD_CORP", "string");
        	this.dsCreate.addColumn("TY_WORK", "string");
        	this.dsCreate.addColumn("YM_WORK", "string");
        	this.dsCreate.addColumn("YM_PAYMENT", "string");
        	this.dsCreate.addColumn("DT_DELIVERY", "string");
        	this.dsCreate.addColumn("DT_PAY", "string");
        	this.dsCreate.addColumn("CD_PLACE", "string");
        	this.dsCreate.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

        /************************************************************************
         * Validate
         ************************************************************************/

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
        */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "create") {
        		if (errorCode == 0) {
        			this.gfnAlert("작업이 완료되었습니다.");
        			this.getParentContext().close(true);
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if (svcID == "combo"){
        		if (errorCode == 0) {
        			this.cboCD_PLACE.set_index(0);
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if (id == "ccfCD_CORP") {
        		var arr = codeFindData;
        		if(arr.length > 0) {
        			this.fnCombo();
        			//this.strSaupNo = arr[0]["NO_CORP"];
        			//this.strSaupNo = arr[0]["NO_SJC"];	// 사업자번호
        		}
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.dsList_oncolumnchanged = function(obj,e)
        {
        };

        // 저장 버튼 클릭
        this.divData_btnSave_onclick = function(obj,e)
        {
        	if(!this.fnSaveValidate()) return;

        	this.dsCreate.clearData();
        	this.dsCreate.addRow();
        	this.dsCreate.setColumn(0, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        	this.dsCreate.setColumn(0, "TY_WORK", this.dsList.getColumn(0, "TY_WORK"));
        	this.dsCreate.setColumn(0, "YM_WORK", this.dsList.getColumn(0, "YM_WORK"));
        	this.dsCreate.setColumn(0, "YM_PAYMENT", this.dsList.getColumn(0, "YM_PAYMENT"));
        	this.dsCreate.setColumn(0, "DT_DELIVERY", this.dsList.getColumn(0, "DT_DELIVERY"));
        	this.dsCreate.setColumn(0, "DT_PAY", this.dsList.getColumn(0, "DT_PAY"));
        	this.dsCreate.setColumn(0, "CD_PLACE", this.dsList.getColumn(0, "CD_PLACE"));
        	this.dsCreate.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "create";
        	var strSvcType  = "savesel";
        	var inProc		= "_dsProc";
        	var inData      = "create=dsCreate";
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


        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };

        this.fnSaveValidate = function() {

        	var strMsg = "";

        	if(this.gfnIsNull(this.dsList.getColumn(0, "CD_CORP"))){
        		strMsg += "법인코드는 반드시 입력 하셔야 합니다.\n";
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "TY_WORK"))) {
        		strMsg += "신고구분 반드시 입력 하셔야 합니다.\n";
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "YM_WORK"))) {
        		strMsg += "귀속년월 반드시 입력 하셔야 합니다.\n";
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "YM_PAYMENT"))) {
        		strMsg += "지급년월 반드시 입력 하셔야 합니다.\n";
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "DT_DELIVERY"))) {
        		strMsg += "신고제출일자 반드시 입력 하셔야 합니다.\n";
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "DT_PAY"))) {
        		strMsg += "급여일자 반드시 입력 하셔야 합니다.\n";
        	}


        	if(strMsg.length > 0) {
        		this.gfnAlert(strMsg);
        		return false;
        	}

        	return true;
        }

        this.fnCombo = function(){

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_CORP", "string");

        	this.dsCombo.clearData();
        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCD_PLACE=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]

        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnSave.addEventHandler("onclick",this.divData_btnSave_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };
        this.loadIncludeScript("DHV_EMPTAX_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
