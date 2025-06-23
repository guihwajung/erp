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
            this.getSetter("maxwidth").set("330");
            this.getSetter("maxheight").set("350");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_CLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"YY_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YM_SALALY\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"SN_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_INCOME\" type=\"STRING\" size=\"256\"/><Column id=\"DS_INCOME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ALLOW\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ALLOW\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"ID_INSERT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DACPR_MGTVACA_SALARY_CREATRE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DAZPR_PAY_GB_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SALARY", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SALARY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSN_SALARY", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">1</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"VALUE\">5</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_CLOSE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">M</Col><Col id=\"VALUE\">급여적용</Col></Row><Row><Col id=\"CODE\">C</Col><Col id=\"VALUE\">급여취소</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","0","0","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("급여적용");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","8","154","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("지급구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","94","67","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta05","8","67","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("대상년도");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","8","125","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("급여년월");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","94","125","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","94","154","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","8","96","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta07","94","96","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta08","94","212","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta09","8","212","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("소득항목");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","101","101","188","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("ctclYY_BASE","101","72","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.addChild(obj.name, obj);

            obj = new Combo("cboTY_SALARY","101","159","89","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_datacolumn("DS_SALARY");
            obj.set_codecolumn("TY_SALARY");
            obj.set_innerdataset("dsTY_SALARY");
            obj.set_readonly("true");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSN_SALARY","196","159","89","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_innerdataset("dsSN_SALARY");
            obj.set_readonly("false");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_INCOME","101","217","188","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("11");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            obj.set_enable("false");
            obj.set_enableevent("false");
            this.addChild(obj.name, obj);

            obj = new Div("ctclYM_SALALY","101","130","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("sta10","8","37","87",null,null,"sta05:-1",null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("마감여부");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta11","sta10:-1","37","200",null,null,"sta10:-31",null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoTY_CLOSE","105","42","165","20",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_innerdataset("dsTY_CLOSE");
            obj.set_value("03");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","45","260","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Button("btnOK","30","0","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("13");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30","0","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("14");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Static("sta15","8","183","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("급여지급일");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta16","94","183","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_SALARY","101","188","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item9","cboTY_CLOSE","value","dsList","TY_CLOSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","ccfCD_CORP.form.CDTextBox","value","dsList","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","ccfCD_CORP.form.DSTextBox","value","dsList","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","ctclYY_BASE.form.TextBox","value","dsList","YY_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","ccfCD_INCOME.form.CDTextBox","value","dsList","CD_INCOME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","ccfCD_INCOME.form.DSTextBox","value","dsList","DS_INCOME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","ctclYM_SALALY.form.TextBox","value","dsList","YM_SALALY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cboSN_SALARY","value","dsList","SN_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","cboTY_SALARY","value","dsList","TY_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","rdoTY_GUBUN","value","dsList","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","ctclDT_SALARY","value","dsList","DT_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DAC_MGTVACATION_PAY_DLG2.xfdl", function() {
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
        	this.fnSetCombo();

        	var today = this.gfnGetDate().substring(0,6);

        	var yy_base = this.getOwnerFrame().YY_BASE;

        	this.dsList.setColumn(0, "YY_BASE", yy_base);
        	this.dsList.setColumn(0, "YM_SALALY", "");
        	this.dsList.setColumn(0, "TY_SALARY", "S");		// 지급구분 (S : 급여, B : 상여, X : 성과급)
        	this.dsList.setColumn(0, "SN_SALARY", "1");		// 지급차수
        	this.dsList.setColumn(0, "TY_CLOSE", "M");		// 마감여부
        	this.dsList.setColumn(0, "CD_INCOME", "06");	// 소득항목 (06으로 FIX)
        	this.dsList.setColumn(0, "DS_INCOME", "연차수당");
        	//this.ccfCD_INCOME.form.CDTextBox.set_value("06");
        	//this.ccfCD_INCOME.form.CDTextBox_onchanged();
        	//this.dsList.setColumn(0, "DT_SALARY", today+"25"); // 급여적용일

        	//this.cboSN_SALARY.set_index(0);

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.rdoTY_CLOSE = this.rdoTY_CLOSE;	//지급구분
        	this.ctclYY_BASE = this.ctclYY_BASE;	//대상년도
        	this.ccfCD_CORP = this.ccfCD_CORP;	//법인코드
        	this.ctclYM_SALALY = this.ctclYM_SALALY;	//급여년월
        	this.cboTY_SALARY = this.cboTY_SALARY;	//지급구분
        	this.cboSN_SALARY = this.cboSN_SALARY;	//지급차수
        	this.ctclDT_SALARY = this.ctclDT_SALARY;	//급여년월
        	this.ccfCD_INCOME = this.ccfCD_INCOME;	//소득항목
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 코드파인더
        	//법인
        	this.ccfCD_CORP.CodeFindName = "DAX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	//소득항목
        	this.ccfCD_INCOME.CodeFindName = "DAX_CFALLOW_CODE";
        	this.ccfCD_INCOME.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_INCOME.AfterCDTextChanged = "fnAfterCDTextChanged";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSave = new Dataset();

        	this.dsSave.addColumn("TY_CLOSE", "string");
        	this.dsSave.addColumn("YY_BASE", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("YM_SALALY", "string");
        	this.dsSave.addColumn("TY_SALARY", "string");
        	this.dsSave.addColumn("SN_SALARY", "string");
        	this.dsSave.addColumn("CD_INCOME", "string");
        	this.dsSave.addColumn("DT_SALARY", "string");
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
        //trace("this.dsList >>>>>>>"+this.dsList.saveXML());

        	this.dsSave.clearData();
        	var nrow = this.dsSave.addRow();

        	this.dsSave.setColumn(nrow, "TY_CLOSE", this.rdoTY_CLOSE.value);
        	this.dsSave.setColumn(nrow, "YY_BASE", this.dsList.getColumn(0, "YY_BASE"));
        	this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        	this.dsSave.setColumn(nrow, "YM_SALALY", this.dsList.getColumn(0, "YM_SALALY"));
        	this.dsSave.setColumn(nrow, "TY_SALARY", this.dsList.getColumn(0, "TY_SALARY"));
        	this.dsSave.setColumn(nrow, "SN_SALARY", this.dsList.getColumn(0, "SN_SALARY"));
        	this.dsSave.setColumn(nrow, "CD_INCOME", this.dsList.getColumn(0, "CD_INCOME"));
        	this.dsSave.setColumn(nrow, "DT_SALARY", this.dsList.getColumn(0, "DT_SALARY"));
        	this.dsSave.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        //trace("this.dsSave >>>>>>>"+this.dsSave.saveXML());

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

        	if (this.gfnIsNull(this.rdoTY_CLOSE.value)) {
        		this.gfnAlert("마감여부를 선택하세요.");
        		return false;
        	}

        	if (this.gfnIsNull(this.ctclYY_BASE.form.TextBox.value)) {
        		this.ctclYY_BASE.form.TextBox.setFocus();
        		this.gfnAlert("대상년도를 입력하세요.");
        		return false;
        	}

        	if (this.gfnIsNull(this.ctclYM_SALALY.form.TextBox.value)) {
        		this.ctclYM_SALALY.form.TextBox.setFocus();
        		this.gfnAlert("급여년월을 입력하세요.");
        		return false;
        	}

        	if (this.gfnIsNull(this.cboTY_SALARY.value)) {
        		this.gfnAlert("지급구분을 입력하세요.");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsList.getColumn(0, "DT_SALARY"))) {
        		this.gfnAlert("급여지급일을 입력하세요.");
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
        	else if  (id == "ccfCD_INCOME") {	//소득항목
        		dsUserParam.setColumn(nrow, "CD_GUBUN", "06");
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	//this.fnSearchInit();
        	var arr = codeFindData;
        	switch(id){
        		case "ccfCD_INCOME" :
        			this.dsList.setColumn(0, "CD_INCOME", arr[0]["CD_INCOME"]);
        			this.dsList.setColumn(0, "DS_INCOME", arr[0]["DS_INCOME"]);
        			//this.dsList.setColumn(0, "DS_ALLOW", arr[0]["DS_ALLOW"]);
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
        	else if(svcID == "combo"){
        		//this.cboTY_SALARY.set_index(0);
        		this.cboTY_SALARY.set_value("S");
         	}

        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("TY_SEL", "string");
        	this.dsCombo.addColumn("YN_USE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "TY_SEL", "");
        	this.dsCombo.setColumn(0, "YN_USE", "Y");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_SALARY=combo0";
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
        // 		if(strColid == "YY_BASE"){
        // 			if(e.newvalue == ""){
        // 				this.dsList.setColumn(0, "YM_SALALY", "");
        // 			}else{
        // 				this.dsList.setColumn(0, "YM_SALALY", e.newvalue+"12");
        // 			}
        // 		}else if(strColid == "CD_CORP"){
        //
        // 		}else if(strColid == "TY_SALARY"){
        //
        // 		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.cboTY_SALARY.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.cboSN_SALARY.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.rdoTY_CLOSE.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.ctclDT_SALARY.addEventHandler("onchanged",this.fnSearchInit,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAC_MGTVACATION_PAY_DLG2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
