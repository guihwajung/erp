(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAU_SALARYAUTOSLIP_DLG");
            this.set_titletext("급여전표발행");
            this.getSetter("maxwidth").set("395");
            this.getSetter("maxheight").set("295");
            if (Form == this.constructor)
            {
                this._setFormPosition(346,220);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">slip</Col><Col id=\"SP\">DAUPR_SALARY_AUTOSLIP_CREATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SALARY", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">S</Col><Col id=\"VALUE\">급여</Col></Row><Row><Col id=\"VALUE\">상여</Col><Col id=\"CODE\">B</Col></Row><Row><Col id=\"VALUE\">성과급</Col><Col id=\"CODE\">X</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSN_SALARY", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">1</Col></Row><Row><Col id=\"VALUE\">2</Col><Col id=\"CODE\">2</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"VALUE\">3</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"VALUE\">4</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"VALUE\">5</Col></Row><Row><Col id=\"CODE\">6</Col><Col id=\"VALUE\">6</Col></Row><Row><Col id=\"CODE\">7</Col><Col id=\"VALUE\">7</Col></Row><Row><Col id=\"CODE\">8</Col><Col id=\"VALUE\">8</Col></Row><Row><Col id=\"CODE\">9</Col><Col id=\"VALUE\">9</Col></Row><Row><Col id=\"CODE\">10</Col><Col id=\"VALUE\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","0","0","361","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("전표발행");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","63","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("법인");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","86","63","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","0","226","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("발행부서");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta08","86","226","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:5","68","240","20",null,null,null,null,null,null,this);
            obj.getSetter("CodeFindName").set("DAX_CFCORP2");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","78","163","200","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","120","10","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnOK","30","10","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);

            obj = new Static("staYM_BASE","0","34","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("귀속년월");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","86","34","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Div("ctclYM_BASE","staYM_BASE:5","39","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("staTY_SALARY","0","92","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("지급구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","86","92","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cboTY_SALARY","staTY_SALARY:5","97","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_innerdataset("dsTY_SALARY");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_readonly("false");
            obj.set_value("1");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSN_SALARY","157","97","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_innerdataset("dsSN_SALARY");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_readonly("false");
            obj.set_value("1");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("staDT_EXEC","0","121","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("집행일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","86","121","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_EXEC","92","126","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:5","231","240","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("17");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DAU_SALARYAUTOSLIP_DLG.xfdl", function() {
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

        	var frame = this.getOwnerFrame();
        	if(!this.gfnIsNull(frame.YM_SALARY)){

        		this.ctclYM_BASE.form.TextBox.set_value(frame.YM_SALARY); //귀속년월
        		this.cboTY_SALARY.set_value(frame.TY_SALARY); //지급구분
        		this.cboSN_SALARY.set_value(frame.SN_SALARY);
        		this.ccfCD_CORP.form.CDTextBox.set_value(frame.CD_CORP); //법인
        		this.ccfCD_CORP.form.DSTextBox.set_value(frame.DS_CORP);
        		this.ccfCD_DEPT.form.CDTextBox.set_value(frame.CD_DEPT); //부서
        		this.ccfCD_DEPT.form.DSTextBox.set_value(frame.DS_DEPT);

        	}else{
        		this.ctclYM_BASE.form.TextBox.set_value(frame.ctclYM_BASE); //귀속년월
        		this.cboTY_SALARY.set_value(frame.cboTY_SALARY); //지급구분
        		this.cboSN_SALARY.set_value(frame.cboSN_SALARY);
        		this.ccfCD_CORP.form.CDTextBox.set_value(frame.ccfCD_CORP); //법인
        		this.ccfCD_CORP.form.DSTextBox.set_value(frame.ccfDS_CORP);
        		this.ccfCD_DEPT.form.CDTextBox.set_value(frame.ccfCD_DEPT); //부서
        		this.ccfCD_DEPT.form.DSTextBox.set_value(frame.ccfDS_DEPT);
        	}
        		//집행일 : 오늘날짜로 변경
        		this.ctclDT_EXEC.set_value(this.gfnGetDate());//(frame.DT_SALARY);

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
        	this.cboTY_SALARY = this.cboTY_SALARY;
        	this.grSearch = this.FormInfo.GR_SEARCH;	// 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;	// 그룹코드
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_DEPT.CodeFindName = "DAX_CFDEPT";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSlip = new Dataset();
        	this.dsSlip.addColumn("YM_SALARY", "string");
        	this.dsSlip.addColumn("TY_SALARY", "string");
        	this.dsSlip.addColumn("SN_SALARY", "string");
        	this.dsSlip.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSlip.addColumn("CD_BANK", "string"); 		// 미사용
        	this.dsSlip.addColumn("CD_ACCOUNT", "string");  	// 미사용
        	this.dsSlip.addColumn("YN_FBS", "string");   		// 미사용


        	this.dsSlip.addColumn("ID_INSERT", "string");
        	this.dsSlip.addColumn("CD_CORP", "string");
        	this.dsSlip.addColumn("TY_FBS", "string");   		// 미사용
        	this.dsSlip.addColumn("TY_AUTOSLIP", "string");		// C : 급상여, P :파견용역(타법인 대체전표)
        	this.dsSlip.addColumn("DT_REQUEST", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {

         	var validate = true;

        	//귀속년월
        	if(this.gfnIsNull(this.ctclYM_BASE.form.TextBox.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ctclYM_BASE.form.TextBox.setFocus();
        		}
        		this.gfnAlert("귀속년월을 입력하세요.", "fnVaidateCallback");
        		return validate;
        	}
        	//법인
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.", "fnVaidateCallback");
        		return validate;
        	}
        	//부서
        	/*
        	if (this.gfnIsNull(this.ccfCD_DEPT.form.CDTextBox.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCD_DEPT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("부서코드를 입력하세요.", "fnVaidateCallback");
        		return validate;
        	}
        	*/
        	//발행일
        	if (this.gfnIsNull(this.ctclDT_EXEC.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ctclDT_EXEC.setFocus();
        		}
        		this.gfnAlert("발행일을 입력하세요.", "fnVaidateCallback");
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
        	}
        	if(svcID == "slip"){
        		if (errorCode == 0) {
        			// 부모화면 조회 호출
        			//this.parent.parent.opener.divWork.form.fnSelect();
        			// 자기자신창 닫기
        			this.getParentContext().close(true);

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
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			break;


        		/*
        		case "ccfCD_DEPT":
        			//var cd_corp = this.ccfCD_CORP.form.CDTextBox.value;
        			var cd_corp = this.gfnNvl(this.ccfCD_CORP.form.CDTextBox.value, this.AuthClient.CD_CORP);
        			var gr_search = this.gfnNvl(this.FormInfo.GR_SEARCH, this.getOwnerFrame().GR_SEARCH)

        			dsUserParam.setColumn(nrow, "GR_SEARCH", gr_search);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			//dsUserParam.setColumn(nrow, "CD_CORP", this.gfnNvl(this.ccfCD_CORP.form.CDTextBox.value,this.AuthClient.CD_CORP));
        			dsUserParam.setColumn(nrow, "CD_CORP", cd_corp);
        			dsUserParam.setColumn(nrow, "YN_CURRENT", "");

        			break;


        		case "ccfCD_DEPT": //부서
        			if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        				this.fnBeforeUserCallback = function() {
        						this.ccfCD_CORP.form.CDTextBox.setFocus();
        					}
        					this.gfnAlert("법인코드를 입력하세요.", "fnBeforeUserCallback");
        					return false;
        			}
        			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);

        			*/

        			break;

        		default:
         	}
         	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			break;
        		case "ccfCD_DEPT": // 부서코드
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
        	//this.gfnConfirm("전표발행 하시겠습니까?", "fnDlgfnSaveCallback");
        	this.dlgfnSave();

        };

        this.btnCANCLE_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };

        this.dlgfnSave = function() {

        	this.dsSlip.clearData();
        	var nrow = this.dsSlip.addRow();

        	this.dsSlip.setColumn(nrow, "YM_SALARY", this.ctclYM_BASE.form.TextBox.value);
        	this.dsSlip.setColumn(nrow, "TY_SALARY", this.cboTY_SALARY.value);
        	this.dsSlip.setColumn(nrow, "SN_SALARY", this.cboSN_SALARY.value);
        	this.dsSlip.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	//this.dsSlip.setColumn(nrow, "CD_DEPT_ACNT", this.ccfCD_DEPT.form.CDTextBox.value);
        	this.dsSlip.setColumn(nrow, "CD_DEPT_ACNT", "");
        	//this.dsSlip.setColumn(nrow, "DT_ACCOUNT", this.ctclDT_EXEC.value);
        	this.dsSlip.setColumn(nrow, "DT_REQUEST", this.ctclDT_EXEC.value);
        	this.dsSlip.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        trace("this.dsSlip >>>>>>>"+this.dsSlip.saveXML());

        	var strSvcId    = "slip";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "slip=dsSlip";
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.sta04.addEventHandler("onclick",this.sta04_onclick,this);
            this.cboTY_SALARY.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.cboSN_SALARY.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.ctclDT_EXEC.addEventHandler("onchanged",this.fnSearchInit,this);
        };
        this.loadIncludeScript("DAU_SALARYAUTOSLIP_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
