(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAU_SALARYPAYEMAIL");
            this.set_titletext("급여명세서이메일발송");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAUPR_SALARYPAYTARGET_SELECT</Col></Row><Row><Col id=\"TARGET\">email</Col><Col id=\"SP\">DAUPR_SALARYPAYLIST_EMAIL_HTML</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"SN_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"YM_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_EMPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DAX_CFCORP2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_SALARY","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("지급년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_SALARY","staYM_SALARY:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_SALARY","ctclYM_SALARY:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("지급구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_SALARY","staTY_SALARY:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_readonly("false");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cboTY_SALARY_innerdataset = new nexacro.NormalDataset("divSearch_form_cboTY_SALARY_innerdataset", obj);
            divSearch_form_cboTY_SALARY_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">S</Col><Col id=\"datacolumn\">급여</Col></Row><Row><Col id=\"codecolumn\">B</Col><Col id=\"datacolumn\">상여</Col></Row><Row><Col id=\"codecolumn\">X</Col><Col id=\"datacolumn\">성과급</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboTY_SALARY_innerdataset);
            obj.set_text("급여");
            obj.set_value("S");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSN_SALARY","cboTY_SALARY:5","10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_readonly("false");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cboSN_SALARY_innerdataset = new nexacro.NormalDataset("divSearch_form_cboSN_SALARY_innerdataset", obj);
            divSearch_form_cboSN_SALARY_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">6</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">7</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">8</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">9</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboSN_SALARY_innerdataset);
            obj.set_text("1");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","0.0","staCD_CORP:10","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","staCD_CORP:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFOCORP");
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_EMPTYPE","ccfID_SABUN:0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("직원구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_EMPTYPE","staCD_EMPTYPE:0.0","staCD_CORP:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0",null,"104","90",null,"0",null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtDS_REMARK","sta00:-1",null,null,"90","0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","43",null,null,"0","txtDS_REMARK:5",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_selecttype("multirow");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSalaryTarget","19","5","381","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            obj.set_text("급여대상자");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SENDER","127","9","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("발신자주소");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","226","9","194","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtEMailSender","232","14","183","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclYM_SALARY.form.TextBox","value","dsSearch","YM_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboTY_SALARY","value","dsSearch","TY_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboSN_SALARY","value","dsSearch","SN_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_EMPTYPE.form.CDTextBox","value","dsSearch","CD_EMPTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.txtDS_REMARK","value","dsList","DS_REMARK");
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
        this.registerScript("DAU_SALARYPAYEMAIL.xfdl", function() {
        this.objApp = this.gfnGetApplication();

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

        	//지급년월
        	this.ctclYM_SALARY.form.TextBox.set_value(this.gfnGetDate().substr(0,6));

        	// 법인코드 및 법인명 기본세팅
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
            this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        	this.cboTY_SALARY.set_index(0);
        	this.cboSN_SALARY.set_index(0);

        	// 환경변수 사용
        	var mail = this.gfnGetConfig("DA", "DS_MAILSENDER");
        	this.edtEMailSender.set_value(mail);


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
        this.fnSetExtendButton = function() {
        	this.btnEmail = this.gfnFormButtonAdd("Email", "fnEmail", "메일발송");
        	this.btnEmail.set_enable(false);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;
        	this.ctclYM_SALARY = this.divSearch.form.ctclYM_SALARY;
        	this.cboTY_SALARY = this.divSearch.form.cboTY_SALARY;
        	this.cboSN_SALARY = this.divSearch.form.cboSN_SALARY;
        	this.ccfCD_EMPTYPE = this.divSearch.form.ccfCD_EMPTYPE;

        	this.edtEMailSender = this.divData.form.edtEMailSender;

        	this.dxGrid = this.divData.form.objGrid;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_EMPTYPE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_EMPTYPE.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAU_SALARYPAYEMAIL");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	//조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_SALARY", "string");
        	this.dsSelect.addColumn("SN_SALARY", "int");
        	this.dsSelect.addColumn("YM_SALARY", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("CD_EMPTYPE", "string");

        	//메일발송
        	this.dsEmail = new Dataset();
        	this.dsEmail.addColumn("ID_SABUN", "string");
        	this.dsEmail.addColumn("YM_SALARY", "string");
        	this.dsEmail.addColumn("TY_SALARY", "string");
        	this.dsEmail.addColumn("SN_SALARY", "int");
        	this.dsEmail.addColumn("CD_CORP", "string");
        	this.dsEmail.addColumn("ID_INSERT", "string");
        	this.dsEmail.addColumn("DS_REMARK", "string");


        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	if (!this.fnSelectValid()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	//this.gfnGridClear(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "TY_SALARY", this.gfnNvl(this.dsSearch.getColumn(0, "TY_SALARY"), ""));
        	this.dsSelect.setColumn(0, "SN_SALARY", this.gfnNvl(this.dsSearch.getColumn(0, "SN_SALARY"), "1"));
        	this.dsSelect.setColumn(0, "YM_SALARY", this.gfnNvl(this.dsSearch.getColumn(0, "YM_SALARY"), ""));
        	this.dsSelect.setColumn(0, "CD_CORP", this.gfnNvl(this.dsSearch.getColumn(0, "CD_CORP"), ""));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.gfnNvl(this.dsSearch.getColumn(0, "ID_SABUN"), ""));
        	this.dsSelect.setColumn(0, "CD_EMPTYPE", this.gfnNvl(this.dsSearch.getColumn(0, "CD_EMPTYPE"), ""));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        //	this.gfnGridAdd(this.dxGrid);
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        //	this.gfnGridDel(this.dxGrid);
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        };

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	//this.gfnExcelExport(this.dxGrid);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValid = function() {

        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.fnValidCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.", "fnValidCallback");
        		return false;
        	}
        	else if (this.gfnIsNull(this.ctclYM_SALARY.form.TextBox.value)) {
        		this.fnValidCallback = function() {
        			this.ctclYM_SALARY.form.TextBox.setFocus();
        		}
        		this.gfnAlert("지급년월을 입력하세요.", "fnValidCallback");
        		return false;
        	}

        	return true;
        };
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, args)
        {
        	if (svcID == "select") {
        		if (errorCode == 0) {
        			// 작업버튼 제어
        			trace("건수"+this.dsList.rowcount);
        			if(this.dsList.rowcount > 1){
        				this.btnEmail.set_enable(true);
        			} else {
        				this.btnEmail.set_enable(false);
        			}
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "email") {
        		if (errorCode == 0) {
        			this.gfnAlert("메일발송이 완료되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	if(id == "ccfCD_CORP") {// 법인코드
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);

        	}else if(id == "ccfID_SABUN") {// 성명
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)==true?"%":this.ccfCD_CORP.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "CD_DEPT", "");
        		dsUserParam.setColumn(nrow, "GR_SEARCH", "");

        	}else if(id == "ccfCD_EMPTYPE") {// 직원구분
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "EA");
         	}

         	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
         // 메일발송
         this.fnEmail = function(obj,e) {
        	var nFindRow = this.dsList.findRow("CHK", 1);
        	if (this.dsList.rowcount == 0 || nFindRow <= -1) {
        		this.gfnAlert("메일발송 대상자를 체크해주세요.");
        		return;
        	}

        	this.fnEmailValidCallback = function(id, val){
        		trace("fnEmail>>", id, val);
        		if(val){
        			var param = {};
        			this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAU_SALARYPAYEMAIL_DLG", "fnEmailCallback", param);
        		}
        	}
        	this.gfnConfirm("메일발송을 하시겠습니까?", "fnEmailValidCallback");
        	return;
        }


        this.fnEmailCallback = function(strId, val) {
        trace("fnEmailCallback", strId, val);

        	if(this.gfnIsNull(val)) return;
        	if(val == false) return;

        	var rtnObj = JSON.parse(val);
        	var DS_REMARK = rtnObj.DS_REMARK;

        	trace("DS_REMARK", DS_REMARK);

        	this.dsEmail.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if (this.dsList.getColumn(i, "CHK") == 1) {
        			var nrow = this.dsEmail.addRow();

        			this.dsEmail.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        			this.dsEmail.setColumn(nrow, "YM_SALARY", this.gfnNvl(this.ctclYM_SALARY.form.TextBox.value, ""));
        			this.dsEmail.setColumn(nrow, "TY_SALARY", this.gfnNvl(this.cboTY_SALARY.value, ""));
        			this.dsEmail.setColumn(nrow, "SN_SALARY", this.gfnNvl(this.cboSN_SALARY.value, "1"));
        			this.dsEmail.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        			this.dsEmail.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        			this.dsEmail.setColumn(nrow, "DS_REMARK", DS_REMARK);
        		}
        	}

        // 	trace(this.dsEmail.saveXML());
        // 	return;

        	if (this.dsEmail.rowcount == 0) return;

        	var strSvcId    = "email";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "email=dsEmail";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	this.gfnTransaction( strSvcId ,
        						strSvcType ,
        						inProc,
        						inData ,
        						outData ,
        						strArg,
        						callBackFnc);
        }
         /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAU_SALARYPAYEMAIL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
