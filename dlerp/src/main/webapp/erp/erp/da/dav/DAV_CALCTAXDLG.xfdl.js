(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAV_CALCTAXDLG");
            this.set_titletext("연말중도정산 세액계산");
            this.getSetter("maxwidth").set("410");
            this.getSetter("maxheight").set("430");
            if (Form == this.constructor)
            {
                this._setFormPosition(380,390);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SP\">DAVPR_CLOSEINPUT_UPDATE</Col><Col id=\"TARGET\">update</Col></Row><Row><Col id=\"TARGET\">temp</Col><Col id=\"SP\">DAVPR_CALCTAX_TEMP</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput", this);
            obj._setContents("<ColumnInfo><Column id=\"YN_MESSAGE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","360","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("중도정산 세액계산");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","121","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("법인");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","79","121","281","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:5","126","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns","0","314",null,"27","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","198","0","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.divData.form.divBtns.addChild(obj.name, obj);

            obj = new Button("btnOK","103","0","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            this.divData.form.divBtns.addChild(obj.name, obj);

            obj = new Static("staWORK_BASE","0","34","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("적용년도");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","79","34","281","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ctclWORK_BASE","staWORK_BASE:5","39","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_async("false");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txt00","0","200","360","90",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_value("◆ 자료가 존재할 경우에는 삭제하고 재생성합니다.\n\n◆ 주민번호가 입력되지 않으면 전 직원을 대상으로 작업됩니다.\n\n◆ 중도정산일 경우 적용월을 입력하십시오.");
            obj.set_border("0px none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN","0","63","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","79","63","281","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_GUBUN","staTY_GUBUN:5","68","140","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divData_form_rdoTY_GUBUN_innerdataset = new nexacro.NormalDataset("divData_form_rdoTY_GUBUN_innerdataset", obj);
            divData_form_rdoTY_GUBUN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">E</Col><Col id=\"datacolumn\">임직원</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoTY_GUBUN_innerdataset);
            obj.set_text("임직원");
            obj.set_value("E");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_DAESANG","0","92","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("대상");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","79","92","281","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_DAESANG","staTY_DAESANG:5","97","140","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divData_form_rdoTY_DAESANG_innerdataset = new nexacro.NormalDataset("divData_form_rdoTY_DAESANG_innerdataset", obj);
            divData_form_rdoTY_DAESANG_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">특정사번</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoTY_DAESANG_innerdataset);
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_RESIDENT","0","150","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("주민번호");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta08","79","150","281","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfID_RESIDENT","staID_RESIDENT:5","155","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFEMP");
            obj.getSetter("CDTextWidth").set("130");
            obj.set_taborder("17");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfDEPT","425","184","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFDEPT");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("18");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboYN_MID","275","39","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            obj.set_readonly("true");
            obj.set_visible("false");
            var divData_form_cboYN_MID_innerdataset = new nexacro.NormalDataset("divData_form_cboYN_MID_innerdataset", obj);
            divData_form_cboYN_MID_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">연말정산</Col><Col id=\"codecolumn\">N</Col></Row><Row><Col id=\"datacolumn\">중도정산</Col><Col id=\"codecolumn\">Y</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_cboYN_MID_innerdataset);
            obj.set_text("연말정산");
            obj.set_value("1");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtID_SABUN","277","68","79","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_APPLY","380","69","79","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);
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
        };
        
        // User Script
        this.registerScript("DAV_CALCTAXDLG.xfdl", function() {
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


        	//작업구분
        	this.cboYN_MID.set_value(this.getOwnerFrame().YN_MID);

        	//적용년도(현재)
        	this.ctclWORK_BASE.set_url(this.cboYN_MID.value == "Y"?"cmm::cmmCalMM.xfdl":"cmm::cmmCalYY.xfdl");
        	this.ctclWORK_BASE.form.TextBox.set_value(this.getOwnerFrame().WORK_BASE);
        	this.staWORK_BASE.set_text(this.cboYN_MID.value=="Y"?"적용년월":"적용년도");

        	// 법인코드 및 법인명 기본세팅
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.getOwnerFrame().CD_CORP);
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.getOwnerFrame().DS_CORP);

        	this.edtNO_APPLY.set_value(this.getOwnerFrame().NO_APPLY);

        	//주민번호
        	this.ccfID_RESIDENT.form.CDTextBox.set_value(nexacro.replaceAll(this.getOwnerFrame().ID_RESIDENT, "-", ""));
        	this.ccfID_RESIDENT.form.DSTextBox.set_value(this.getOwnerFrame().DS_HNAME);

        	//부서
        	//this.ccfDEPT.form.CDTextBox.set_value(this.getOwnerFrame().CD_DEPT);
        	//this.ccfDEPT.form.DSTextBox.set_value(this.getOwnerFrame().DS_DEPT);

        	//사번
        	this.edtID_SABUN.set_value(this.getOwnerFrame().ID_SABUN);

        	if(this.getOwnerFrame().YN_QUERY == "Y"){
        		this.rdoTY_DAESANG.set_value("1");
        		this.rdoTY_DAESANG_onitemchanged();
        	}else{
        		this.rdoTY_DAESANG.set_value("0");
        		this.rdoTY_DAESANG_onitemchanged();
        	}


        	//임직원구분
        	this.rdoTY_GUBUN.getInnerDataset().deleteRow(1);

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

        	this.cboYN_MID   = this.divData.form.cboYN_MID;	//
        	this.edtNO_APPLY   = this.divData.form.edtNO_APPLY;	//
        	this.staWORK_BASE   = this.divData.form.staWORK_BASE;	//
        	this.ccfID_RESIDENT    = this.divData.form.ccfID_RESIDENT;	// 사번
        	this.staID_RESIDENT    = this.divData.form.staID_RESIDENT;	// 사번
        	this.sta08    = this.divData.form.sta08;	// 사번

        	this.ctclWORK_BASE  = this.divData.form.ctclWORK_BASE;	// 적용년월
        	this.rdoTY_GUBUN  	= this.divData.form.rdoTY_GUBUN;	// 구분
        	this.rdoTY_DAESANG  = this.divData.form.rdoTY_DAESANG;	// 대상
        	this.ccfCD_CORP 	= this.divData.form.ccfCD_CORP;		// 법인
        	this.edtID_SABUN    = this.divData.form.edtID_SABUN;	// 사번

        	this.grSearch = this.FormInfo.GR_SEARCH;					          // 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;					          // 그룹코드
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
        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("ID_RESIDENT", "string");
        	this.dsUpdate.addColumn("ID_SABUN", "string");
        	this.dsUpdate.addColumn("YY_BASE", "string");
        	this.dsUpdate.addColumn("MM_BASE", "string");
        	this.dsUpdate.addColumn("NO_APPLY", "int");
        	this.dsUpdate.addColumn("YN_MID", "string");
        	this.dsUpdate.addColumn("AM_RESULT", "int");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");
        	this.dsUpdate.addColumn("CD_CORP", "string");

        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.", "fnVaidateCallback");
        		return false;
        	}

        	//적용년월
        	else if (this.gfnIsNull(this.ctclWORK_BASE.form.TextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.ctclWORK_BASE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert(this.staWORK_BASE.text+"을/를 입력하세요.", "fnVaidateCallback");
        		return false;
        	}
        	/*
        	else if(this.cboYN_MID.value == "Y" && this.ctclWORK_BASE.form.TextBox.value.length < 6){
        		this.fnVaidateCallback = function() {
        			this.ctclWORK_BASE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert(this.staWORK_BASE.text+"을/를 입력하세요.", "fnVaidateCallback");
        		return false;
        	}
        	*/

        	if(this.rdoTY_DAESANG.value == 1){
        		//주민등록번호
        		if (this.gfnIsNull(this.ccfID_RESIDENT.form.CDTextBox.value)) {
        			validate = false;
        			this.fnVaidateCallback = function() {
        				this.ccfID_RESIDENT.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("특정주민번호를 입력하세요.", "fnVaidateCallback");
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
        	if(svcID == "update") {
        		if (errorCode == 0) {
        			this.fnTemp();
        		} else {
        			this.gfnAlert(errorMsg);
        		}

        	}else if(svcID == "temp") {
        		if (errorCode == 0) {
        			var sMsg = "세액계산이 완료되었습니다.";
        			//trace(this.dsOutput.saveXML());
        			if(this.dsOutput.rowcount > 0){
        				if(this.gfnNvl(this.dsOutput.getColumn(0, "YN_MESSAGE"), "N") == "Y"){
        					sMsg = "표준세액공제 대상자이므로 재 작업시 PDF업로드 및 입력사항을 반드시 확인하시기 바랍니다.";
        				}
        			}
        			this.fnUpdateCallback = function() {
        				this.getParentContext().close(true);
        			}
        			this.gfnAlert(sMsg, "fnUpdateCallback");
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

        		case "ccfID_RESIDENT"://주민번호
        			if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        				this.fnBeforeUserCallback = function() {
        						this.ccfCD_CORP.form.CDTextBox.setFocus();
        					}
        					this.gfnAlert("법인코드를 입력하세요.", "fnBeforeUserCallback");
        					return false;
        			}
        			dsUserParam.setColumn(nrow, "GUBUN", this.rdoTY_GUBUN.value);
        			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			break;

        		case "ccfDEPT": // 현장코드
        			if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        				this.fnBeforeUserCallback = function() {
        						this.ccfCD_CORP.form.CDTextBox.setFocus();
        					}
        					this.gfnAlert("법인코드를 입력하세요.", "fnBeforeUserCallback");
        					return false;
        			}
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", "%");
        			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			dsUserParam.setColumn(nrow, "YN_CURRENT", "");
        			break;

        		default:
         	}
         	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			//this.ccfDEPT.form.CDTextBox.set_value("");
        			//this.ccfDEPT.form.DSTextBox.set_value("");
        			this.ccfID_RESIDENT.form.CDTextBox.set_value("");
        			this.ccfID_RESIDENT.form.DSTextBox.set_value("");
        			this.edtID_SABUN.set_value("");
        			break;

        		case "ccfID_RESIDENT": // 주민등록번호
        			//this.ccfCD_CORP.form.CDTextBox.set_value(arr[0]["CD_CORP"]);
        			//this.ccfCD_CORP.form.DSTextBox.set_value(arr[0]["DS_CORP"]);
        			//this.ccfID_RESIDENT.form.CDTextBox.set_value(arr[0]["ID_RESIDENT"]);
        			//this.ccfID_RESIDENT.form.DSTextBox.set_value(arr[0]["DS_HNAME"]);
        			//this.ccfDEPT.form.CDTextBox.set_value(arr[0]["CD_DEPT"]);
        			//this.ccfDEPT.form.DSTextBox.set_value(arr[0]["DS_DEPT"]);

        			if(arr.length > 0) {
        				this.edtID_SABUN.set_value(arr[0]["ID_SABUN"]);
        			}else{
        				this.edtID_SABUN.set_value("");
        			}
        			break;


        		case "ccfDEPT"://현장코드
        // 			this.ccfDEPT.form.CDTextBox.set_value(arr[0]["CD_CORP"]);
        // 			this.ccfDEPT.form.DSTextBox.set_value(arr[0]["DS_CORP"]);
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

        	this.dsUpdate.clearData();
        	var nrow = this.dsUpdate.addRow();

        	this.dsUpdate.setColumn(nrow, "ID_RESIDENT", this.ccfID_RESIDENT.form.CDTextBox.value);
        	this.dsUpdate.setColumn(nrow, "ID_SABUN", this.edtID_SABUN.value);
        	this.dsUpdate.setColumn(nrow, "YY_BASE", this.ctclWORK_BASE.form.TextBox.value.substring(0,4));
        	this.dsUpdate.setColumn(nrow, "MM_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(4,6):"12");
        	this.dsUpdate.setColumn(nrow, "NO_APPLY", this.edtNO_APPLY.value);
        	this.dsUpdate.setColumn(nrow, "YN_MID", this.cboYN_MID.value);
        	this.dsUpdate.setColumn(nrow, "AM_RESULT", 0);
        	this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        	this.dsUpdate.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);

        	var strSvcId    = "update";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]

        };

        this.fnTemp = function()
        {
        	this.dsUpdate.clearData();
        	var nrow = this.dsUpdate.addRow();

        	this.dsUpdate.setColumn(nrow, "ID_RESIDENT", this.ccfID_RESIDENT.form.CDTextBox.value);
        	this.dsUpdate.setColumn(nrow, "ID_SABUN", this.edtID_SABUN.value);
        	this.dsUpdate.setColumn(nrow, "YY_BASE", this.ctclWORK_BASE.form.TextBox.value.substring(0,4));
        	this.dsUpdate.setColumn(nrow, "MM_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(4,6):"12");
        	this.dsUpdate.setColumn(nrow, "NO_APPLY", this.edtNO_APPLY.value);
        	this.dsUpdate.setColumn(nrow, "YN_MID", this.cboYN_MID.value);
        	this.dsUpdate.setColumn(nrow, "AM_RESULT", 0);
        	this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        	this.dsUpdate.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);

        	var strSvcId    = "temp";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "temp=dsUpdate";
        	var outData     = "dsOutput=temp";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };



        this.btnCANCLE_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };

        //대상 변경시
        this.rdoTY_DAESANG_onitemchanged = function(obj,e)
        {
        	if(this.rdoTY_DAESANG.value == "0"){
        		this.staID_RESIDENT.set_visible(false);
        		this.ccfID_RESIDENT.set_visible(false);
        		this.ccfID_RESIDENT.form.CDTextBox.set_value("");
        		this.ccfID_RESIDENT.form.DSTextBox.set_value("");
        		this.sta08.set_visible(false);

        		//사번
        		this.edtID_SABUN.set_value("");
        	}else{
        		this.staID_RESIDENT.set_visible(true);
        		this.ccfID_RESIDENT.set_visible(true);
        		//this.ccfID_RESIDENT.form.CDTextBox.set_value(this.getOwnerFrame().ID_SABUN);
        		//this.ccfID_RESIDENT.form.DSTextBox.set_value(this.getOwnerFrame().DS_HNAME);
        		this.sta08.set_visible(true);

        		//사번
        		//this.edtID_SABUN.set_value(this.getOwnerFrame().ID_SABUN);
        	}

        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.divData.form.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divData.form.sta04.addEventHandler("onclick",this.sta04_onclick,this);
            this.divData.form.sta01.addEventHandler("onclick",this.sta04_onclick,this);
            this.divData.form.rdoTY_DAESANG.addEventHandler("onitemchanged",this.rdoTY_DAESANG_onitemchanged,this);
            this.divData.form.cboYN_MID.addEventHandler("onitemchanged",this.fnSearchInit,this);
        };
        this.loadIncludeScript("DAV_CALCTAXDLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
