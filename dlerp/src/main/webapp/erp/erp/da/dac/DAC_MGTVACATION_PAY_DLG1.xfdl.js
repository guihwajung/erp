(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAC_MGTVACATION_PAY_DLG1");
            this.set_titletext("대상자 생성");
            this.getSetter("maxwidth").set("320");
            this.getSetter("maxheight").set("340");
            if (Form == this.constructor)
            {
                this._setFormPosition(286,290);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"YY_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YM_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/><Column id=\"ID_INSERT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID_SABUN\">%</Col><Col id=\"CD_DEPT\">%</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DACPR_MGTVACA_PAY_CREATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">G</Col><Col id=\"VALUE\">계속근로</Col></Row><Row><Col id=\"CODE\">T</Col><Col id=\"VALUE\">퇴직자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_FLAG", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">%</Col><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">D</Col><Col id=\"VALUE\">특정부서</Col></Row><Row><Col id=\"CODE\">S</Col><Col id=\"VALUE\">특정사번</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","0","0",null,"30","6",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("대상자 생성");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","0","124","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("기준년월");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","86","37","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta05","0","37","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoTY_GUBUN","91","42","165","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_innerdataset("dsTY_GUBUN");
            obj.set_value("03");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","95","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta22","0","182","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("특정부서");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta23","86","182","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","86","95","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","86","124","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","43","250","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Button("btnOK","30","3","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("16");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30","3","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("17");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","93","100","188","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","0","66","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("대상년도");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta07","86","66","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta08","86","153","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta09","0","153","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("대상자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoTY_FLAG","91","158","195","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_innerdataset("dsTY_FLAG");
            obj.set_value("03");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta10","0","211","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("특정사번");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta11","86","211","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","93","187","188","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("11");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","93","216","188","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("13");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("ctclYY_BASE","93","71","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("ctclYM_BASE","93","129","90","20",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","rdoTY_GUBUN","value","dsList","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","ctclYM_BASE.form.TextBox","value","dsList","YM_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","ccfCD_CORP.form.CDTextBox","value","dsList","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","ccfCD_CORP.form.DSTextBox","value","dsList","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","ctclYY_BASE.form.TextBox","value","dsList","YY_BASE");
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
        this.registerScript("DAC_MGTVACATION_PAY_DLG1.xfdl", function() {
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

        	var today = this.gfnGetDate().substring(0,4);
        	//this.ctclYY_BASE.form.TextBox.set_value(today);
        	var yy_base = this.getOwnerFrame().YY_BASE;

        	this.dsList.setColumn(0, "TY_GUBUN", "G");	//구분 (G: 계속근로 T: 퇴직자)
        	this.dsList.setColumn(0, "YY_BASE", yy_base);
        	this.dsList.setColumn(0, "YM_BASE", yy_base+"12");

        	this.ccfCD_DEPT.set_enable(false);
        	this.ccfID_SABUN.set_enable(false);

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.rdoWK_GUBUN = this.rdoWK_GUBUN;	//구분
        	this.ctclYY_BASE = this.ctclYY_BASE;	//대상년도
        	this.ccfCD_CORP = this.ccfCD_CORP;		//법인코드
        	this.ctclYM_BASE = this.ctclYM_BASE;	//정산일자
        	this.rdoTG_GUBUN = this.rdoTG_GUBUN;	//대상자
        	this.ccfCD_DEPT = this.ccfCD_DEPT;		//특정부서
        	this.ccfID_SABUN = this.ccfID_SABUN;	//특정사번

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_GUBUN", "string");
        	this.dsSave.addColumn("YY_BASE", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("YM_BASE", "string");
        	this.dsSave.addColumn("CD_DEPT", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("ID_PERSON", "string");
        	this.dsSave.addColumn("ID_INSERT", "string");
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 코드파인더
        	//법인
        	this.ccfCD_CORP.CodeFindName = "DAX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	//특정부서
        	this.ccfCD_DEPT.CodeFindName = "DAX_CFDEPT";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//특정사번
        	this.ccfID_SABUN.CodeFindName = "DAX_CFBASEINFO_ALL";	//	DAX_CFBASEINFOCORP
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "fnAfterCDTextChanged";
        };

        this.btnOK_onclick = function(obj,e)
        {
        	// 확인
        	if(!this.fnSaveValidate()) return;
        	this.gfnConfirm("기존의 생성된 대상자는 지워집니다.  계속하시겠습니까?", "fnDialogCallback");
        };

        this.fnDialogCallback = function(strId, val)  {
        	if(val) {
        		this.dlgfnSave();
        		//this.getParentContext().close(true);  // fnCallback 에서 닫기처리
        	}
        };

        this.dlgfnSave = function() {

        	this.dsSave.clearData();
        	var nrow = this.dsSave.addRow();

        	this.dsSave.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(0, "TY_GUBUN"));
        	this.dsSave.setColumn(nrow, "YY_BASE", this.dsList.getColumn(0, "YY_BASE"));
        	this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        	this.dsSave.setColumn(nrow, "YM_BASE", this.dsList.getColumn(0, "YM_BASE"));
        	this.dsSave.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(0, "CD_DEPT"));
        	this.dsSave.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(0, "ID_SABUN"));
        	this.dsSave.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(0, "ID_PERSON"));
        	this.dsSave.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

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

        // 	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        // 		this.ccfCD_CORP.form.CDTextBox.setFocus();
        // 		this.gfnAlert("법인코드를 입력하세요.");
        // 		return false;
        // 	}

        	if (this.gfnIsNull(this.dsList.getColumn(0, "YY_BASE"))) {
        		this.ctclYY_BASE.form.TextBox.setFocus();
        		this.gfnAlert("대상년도를 입력하세요.");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsList.getColumn(0, "YM_BASE"))) {
        		this.ctclYM_BASE.setFocus();
        		this.gfnAlert("기준년월을 입력하세요.");
        		return false;
        	}

        	//대상자 체크
        	if(this.rdoTY_FLAG.value == "D"){
        		if(this.gfnIsNull(this.ccfCD_DEPT.form.CDTextBox.value)){
        			this.fnAlertCallback = function() {
        				this.ccfCD_DEPT.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("특정부서를 입력하세요.", "fnAlertCallback");
        			return false;
        		}
        	}else if(this.rdoTY_FLAG.value == "S"){
        		if(this.gfnIsNull(this.ccfID_SABUN.form.CDTextBox.value)){
        			this.fnAlertCallback = function() {
        				this.ccfID_SABUN.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("특정사번을 입력하세요.","fnAlertCallback");
        			return false;
        		}
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
        	else if  (id == "ccfCD_DEPT") {	//특정부서
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnNvl(this.ccfCD_CORP.form.CDTextBox.value,"%"));
        		dsUserParam.setColumn(nrow, "YN_CURRENT", '');
        	}
        	else if  (id == "ccfID_SABUN_OLD") {	//특정사번 ( DAX_CFBASEINFOCORP )
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", "%");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnNvl(this.ccfCD_CORP.form.CDTextBox.value,"%"));
        	}
        	else if  (id == "ccfID_SABUN") {	//특정사번
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnNvl(this.ccfCD_CORP.form.CDTextBox.value,"%"));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "YN_CORP", "");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	//this.fnSearchInit();
        	var arr = codeFindData;
        	switch(id){
        		case "ccfCD_DEPT" :
        			if(arr.length > 0){
        				this.dsList.setColumn(0, "TY_DEPT", arr[0]["CD_DEPT"]);
        				this.dsList.setColumn(0, "CD_DEPT", arr[0]["CD_DEPT"]);
        				this.dsList.setColumn(0, "DS_DEPT", arr[0]["DS_DEPT"]);
        			}
        		break;
        		case "ccfID_SABUN" :
        			if(arr.length > 0){
        				this.dsList.setColumn(0, "TY_SABUN", arr[0]["ID_SABUN"]);
        				this.dsList.setColumn(0, "ID_SABUN", arr[0]["ID_SABUN"]);
        				this.dsList.setColumn(0, "DS_HNAME", arr[0]["DS_HNAME"]);
        				this.dsList.setColumn(0, "ID_PERSON", arr[0]["ID_PERSON"]);
        			}
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
        	} if(svcID == "save") {
        		if (errorCode == 0) {
        			this.getParentContext().close(true);
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        this.dsList_onvaluechanged = function(obj,e)
        {
        	trace("dsList_onvaluechanged >>>"+ e.columnid);
        	var strColid = e.columnid;

        	if(e.oldvalue != e.newvalue) {

        		this.dsList.set_enableevent(false);

        		if(strColid == "YY_BASE"){
        			if(e.newvalue == ""){
        				this.dsList.setColumn(0, "YM_BASE", "");
        			}else{
        				this.dsList.setColumn(0, "YM_BASE", e.newvalue+"12");
        			}
        		}else if(strColid == "CD_CORP"){
        			this.dsList.setColumn(0, "TY_SABUN", "");
        			this.dsList.setColumn(0, "ID_SABUN", "");
        			this.dsList.setColumn(0, "DS_HNAME", "");
        			this.dsList.setColumn(0, "ID_PERSON", "");
        			this.dsList.setColumn(0, "TY_DEPT", "");
        			this.dsList.setColumn(0, "CD_DEPT", "");
        			this.dsList.setColumn(0, "DS_DEPT", "");

        		}

        		this.dsList.set_enableevent(true);
        	}
        };

        this.rdoTY_FLAG_onitemchanged = function(obj,e)
        {
        	/*
        		%	전체
        		D	특정부서
        		S	특정사번
        	*/
        	this.dsList.set_enableevent(false);

        	if(obj.value == "D"){
        		this.ccfCD_DEPT.set_enable(true);
        		this.ccfID_SABUN.set_enable(false);
        		this.ccfID_SABUN.form.CDTextBox.set_value("");
        		this.ccfID_SABUN.form.DSTextBox.set_value("");

        		this.dsList.setColumn(0, "ID_SABUN", "%");
        		this.dsList.setColumn(0, "ID_PERSON", "");
        	}else if(obj.value == "S"){
        		this.ccfCD_DEPT.set_enable(false);
        		this.ccfID_SABUN.set_enable(true);
        		this.ccfCD_DEPT.form.CDTextBox.set_value("");
        		this.ccfCD_DEPT.form.DSTextBox.set_value("");

        		this.dsList.setColumn(0, "CD_DEPT", "%");
        	}else{
        		this.ccfCD_DEPT.set_enable(false);
        		this.ccfCD_DEPT.form.CDTextBox.set_value("");
        		this.ccfCD_DEPT.form.DSTextBox.set_value("");
        		this.ccfID_SABUN.set_enable(false);
        		this.ccfID_SABUN.form.CDTextBox.set_value("");
        		this.ccfID_SABUN.form.DSTextBox.set_value("");

        		this.dsList.setColumn(0, "ID_SABUN", "%");
        		this.dsList.setColumn(0, "ID_PERSON", "");
        		this.dsList.setColumn(0, "CD_DEPT", "%");
        	}
        	this.dsList.set_enableevent(true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.rdoTY_GUBUN.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.rdoTY_FLAG.addEventHandler("onitemchanged",this.rdoTY_FLAG_onitemchanged,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DAC_MGTVACATION_PAY_DLG1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
