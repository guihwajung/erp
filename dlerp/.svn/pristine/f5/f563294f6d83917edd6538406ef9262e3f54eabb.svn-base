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
            this.set_titletext("New Form");
            this.getSetter("maxwidth").set("450");
            this.getSetter("maxheight").set("400");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,330);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"STATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZZPR_DEPT_MASTER_CREATE</Col></Row><Row><Col id=\"TARGET\">selectDeptCheck</Col><Col id=\"SP\">DAZPR_DEPT_MASTER_CHECK</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeptCheck", this);
            obj._setContents("<ColumnInfo><Column id=\"YN_SUCCESS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","0","0","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("본사부서 추가");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_UPDEPT","20","50","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("상위부서");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("staDT_WORK","20","staCD_UPDEPT:10","45","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("생성일");
            this.addChild(obj.name, obj);

            obj = new Static("staTY_DEPT","staDT_WORK:-45","110","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("구분");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","20","staTY_DEPT:10","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("코드");
            this.addChild(obj.name, obj);

            obj = new Static("staDS_DEPT","20","staCD_DEPT:10","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("명칭");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","10","220","260","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("신설된 부서명칭을 입력하세요.");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","110","240","200","100",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new Button("btnOK","30","20","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("12");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30","20","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("13");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Div("ccfCD_UPDEPT","90","50","260","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_WORK","90","ccfCD_UPDEPT:10","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","90","ctclDT_WORK:10","260","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.addChild(obj.name, obj);

            obj = new Edit("txtCD_DEPT","90","ccfCD_DEPT:10","180","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("txtDS_DEPT","90","txtCD_DEPT:10","260","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnExistCheck","txtCD_DEPT:10","ccfCD_DEPT:10","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("중복확인");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","txtCD_DEPT","value","dsList","STATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAZ_NEWDEPTDLG.xfdl", function() {
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

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	var frame = this.getOwnerFrame();
        	if(!this.gfnIsNull(frame.CD_DEPT_MST)) {
        	    this.ccfCD_UPDEPT.form.CDTextBox.set_value(frame.CD_DEPT_MST);
         		this.ccfCD_UPDEPT.form.DSTextBox.set_value(frame.DS_DEPT_MST);
        	}
        	if(!this.gfnIsNull(frame.TY_DEPT)){
        	    this.ccfCD_DEPT.form.CDTextBox.set_value(frame.TY_DEPT);
         		this.ccfCD_DEPT.form.DSTextBox.set_value(frame.TY_DEPT_NM);
        		this.fnNewDept();
        	}

        	//생성일 셋팅
        	var today = this.gfnGetDate();
        	this.ctclDT_WORK.set_value(today);
        };

        this.btnOK_onclick = function(obj,e)
        {
        	// 확인
        	var json = {};

        	json.CD_UPDEPT = this.ccfCD_UPDEPT.form.CDTextBox.value;
        	json.DS_UPDEPT = this.ccfCD_UPDEPT.form.DSTextBox.value;
        	json.DT_WORK = this.ctclDT_WORK.value;
        	json.TYC_DEPT = this.ccfCD_DEPT.form.CDTextBox.value;
        	json.TYD_DEPT = this.ccfCD_DEPT.form.DSTextBox.value;
         	json.CD_DEPT = this.txtCD_DEPT.value;
         	json.DS_DEPT = this.txtDS_DEPT.value;

        	this.getParentContext().close(JSON.stringify(json));
        };

        this.btnCANCLE_onclick = function(obj,e)
        {
        	// 취소
        	this.getParentContext().close(false);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DT_CREATE", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");

        	this.dsSelectDeptCheck = new Dataset();
        	this.dsSelectDeptCheck.addColumn("CD_DEPT_MST", "string");
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
         // 코드파인더
        this.fnSetEvent = function() {
            //상위부서
        	this.ccfCD_UPDEPT.CodeFindName = "DAX_CFDEPT_MST";
        	this.ccfCD_UPDEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_UPDEPT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//구분
        	this.ccfCD_DEPT.CodeFindName = "DAX_CFCOMMONCODE";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.AfterCDTextChanged = "fnAfterCDTextChanged";
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

           var cd_updept_mst = this.ccfCD_UPDEPT.form.CDTextBox.value;

           if (id == "ccfCD_UPDEPT") {
        	 dsUserParam.setColumn(nrow, "CD_DEPT_MST", this.AuthClient.CD_DEPT);
           }
           else if (id == "ccfCD_DEPT") {
        	if ( this.gfnIsNull(cd_updept_mst) ) {
        		this.gfnAlert("상위부서를 먼저 입력하세요.");
        		return false;
        		}
        	dsUserParam.setColumn(nrow, "CD_PREFIX", "DA");
           }
          return true;
        }


        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_UPDEPT") {
        		this.ccfCD_DEPT.form.fnCodeFindClear();
        		this.txtCD_DEPT.set_value("");
        	    this.txtDS_DEPT.set_value("");
        	}
        	else if(id == "ccfCD_DEPT") {
        		this.fnNewDept();
        	}
        }

        this.fnNewDept = function () {
        		this.dsSelect.clearData();
        		var nRow = this.dsSelect.addRow();
        		this.dsSelect.setColumn(nRow, "DT_CREATE", this.ctclDT_WORK.value);
        		this.dsSelect.setColumn(nRow, "TY_GUBUN", this.ccfCD_DEPT.form.CDTextBox.value);

        		var strSvcId    = "select";
        		var strSvcType  = "select";
        		var inProc		= "_dsProc";
        		var inData      = "select=dsSelect";
        		var outData     = "dsList=select0";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId ,
        							strSvcType ,
        							inProc,
        							inData ,
        							outData ,
        							strArg,
        							callBackFnc);

        	   //코드명 지우기
        	   this.txtDS_DEPT.set_value("");
        };
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return;
        	}
        	if (svcID == "select") {
        		if(this.dsList.rowcount > 0 ){
        		//
        		}
        	}

        	if (svcID == "selectDeptCheck") {
        		var YN_SUCCESS = this.dsDeptCheck.getColumn(0, "YN_SUCCESS");
        		var DS_MSG = this.dsDeptCheck.getColumn(0, "DS_MSG");
        		//if(!this.gfnIsNull(DS_MSG)) this.gfnAlert(DS_MSG);
        		if (!this.gfnIsNull(DS_MSG)) {
        			this.fnMsgCallback = function() {
        				switch(YN_SUCCESS) {
        					case "1":
        						this.txtCD_DEPT.set_value("");
        						this.txtCD_DEPT.setFocus();
        					break;
        					case "2":
        						this.getParentContext().close(false);
        					break;
        					case "3":
        					default:
        					break;
        				}
        			}
        			this.gfnAlert(DS_MSG, "fnMsgCallback");
        			return false;
        		}
        	}

        /*
        	P_YN_SUCCESS  := '1' ;
        	P_DS_MSG      := '등록되어 있는 부서 입니다. 다른코드로 등록 확인하시기 바랍니다. 【 부서명 >> ' || v_DS_DEPT_MST || ' 】' ;
        	P_YN_SUCCESS  := '2' ;
        	P_DS_MSG      := '공통에 등록되어 있는 부서 입니다. 화면의 【 입력 】버튼을 이용하여 등록하여 주시기 바랍니다. ' || CHR(10) ||'【 부서명 >> ' || v_DS_DEPT_MST || ' 】' ;
        	P_YN_SUCCESS  := '3' ;
        	P_DS_MSG      := '사용가능한 부서코드 입니다.' ;
        */
        }

        // 중복확인
        this.btnExistCheck_onclick = function(obj,e)
        {
        	this.dsSelectDeptCheck.addColumn("CD_DEPT_MST", "string");

        	var CD_DEPT_MST = this.txtCD_DEPT.value;
        	if(this.gfnIsNull(CD_DEPT_MST)) {
        		this.gfnAlert("부서 코드를 먼저 입력하세요.");
        		return false;
        	}

        	this.dsDeptCheck.clearData();
        	this.dsSelectDeptCheck.clearData();
        	var nRow = this.dsSelectDeptCheck.addRow();
        	this.dsSelectDeptCheck.setColumn(nRow, "CD_DEPT_MST", CD_DEPT_MST);

        	var strSvcId    = "selectDeptCheck";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectDeptCheck=dsSelectDeptCheck";
        	var outData     = "dsDeptCheck=selectDeptCheck0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId ,
        						strSvcType ,
        						inProc,
        						inData ,
        						outData ,
        						strArg,
        						callBackFnc);

        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.btnExistCheck.addEventHandler("onclick",this.btnExistCheck_onclick,this);
        };
        this.loadIncludeScript("DAZ_NEWDEPTDLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
