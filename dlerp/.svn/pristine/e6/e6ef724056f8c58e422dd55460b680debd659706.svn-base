(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAV_HOUSESUBMIT_DLG");
            this.set_titletext("거주자간 주택임차차입금 원리금 상환액 소득공제 명세");
            this.getSetter("maxwidth").set("400");
            this.getSetter("maxheight").set("300");
            if (Form == this.constructor)
            {
                this._setFormPosition(370,260);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","0","10","360","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("거주자간 주택임차차입금 원리금 상환액 소득공제 명세");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","2","200","368","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","198","10","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnOK","108","10","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","103","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("법인코드");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","79","103",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:4","108","250","20",null,null,null,null,null,null,this);
            obj.getSetter("CodeFindName").set("DAX_CFCORP2");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.addChild(obj.name, obj);

            obj = new Static("staYN_MID","0","45","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("작업구분");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","79","45",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staWORK_BASE","0","74","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("적용년도");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta07","79","74",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Combo("cboYN_MID","84","50","129","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            var cboYN_MID_innerdataset = new nexacro.NormalDataset("cboYN_MID_innerdataset", obj);
            cboYN_MID_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">중도정산</Col><Col id=\"codecolumn\">Y</Col></Row><Row><Col id=\"datacolumn\">연말정산</Col><Col id=\"codecolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(cboYN_MID_innerdataset);
            obj.set_text("연말정산");
            obj.set_value("N");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Div("ctclWORK_BASE","84","79","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.getSetter("onchanged").set("fnSearchInit");
            obj.set_async("false");
            this.addChild(obj.name, obj);

            obj = new Static("staID_RESIDENT","0","132","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("주민번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta08","79","132",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Div("ccfID_RESIDENT","84","137","250","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("130");
            obj.set_taborder("13");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFEMP");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoTY_MONEY","65","167","268","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdoTY_MONEY_innerdataset = new nexacro.NormalDataset("rdoTY_MONEY_innerdataset", obj);
            rdoTY_MONEY_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">금전소비대차 계약</Col><Col id=\"codecolumn\">0</Col></Row><Row><Col id=\"datacolumn\">임대차 계약</Col><Col id=\"codecolumn\">1</Col></Row></Rows>");
            obj.set_innerdataset(rdoTY_MONEY_innerdataset);
            obj.set_text("금전소비대차 계약");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edtID_SABUN","205","80","127","20",null,null,null,null,null,null,this);
            obj.set_taborder("15");
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
        };
        
        // User Script
        this.registerScript("DAV_HOUSESUBMIT_DLG.xfdl", function() {
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

        	if(!this.gfnIsNull(this.getOwnerFrame().WORK_BASE)){
        		//작업구분
        		this.cboYN_MID.set_value(this.getOwnerFrame().YN_MID);

        		//적용년도(현재)
        		this.ctclWORK_BASE.set_url(this.cboYN_MID.value == "Y"?"cmm::cmmCalMM.xfdl":"cmm::cmmCalYY.xfdl");
        		this.ctclWORK_BASE.form.TextBox.set_value(this.getOwnerFrame().WORK_BASE);
        		this.staWORK_BASE.set_text(this.cboYN_MID.value=="Y"?"적용년월":"적용년도");

        		// 법인코드 및 법인명 기본세팅
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.getOwnerFrame().CD_CORP);
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.getOwnerFrame().DS_CORP);

        		//주민번호
        		this.ccfID_RESIDENT.form.CDTextBox.set_value(this.getOwnerFrame().ID_RESIDENT);
        		this.ccfID_RESIDENT.form.DSTextBox.set_value(this.getOwnerFrame().DS_HNAME);

        		//사번
        		this.edtID_SABUN.set_value(this.getOwnerFrame().ID_SABUN);

        		//READONLY
        		this.ccfCD_CORP.form.set_enable(false);
        		this.ccfID_RESIDENT.form.set_enable(false);

        	}else{
        		//적용년도(현재)
        		this.ctclWORK_BASE.set_url("cmm::cmmCalMM.xfdl");
        		this.ctclWORK_BASE.form.TextBox.set_value(this.gfnGetDate().substr(0,6));
        		this.divSearch.form.staWORK_BASE.set_text("적용년월");

        		// 법인코드 및 법인명 기본세팅
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	}

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

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {

         	var validate = true;

        	//적용년도
        	if (this.gfnIsNull(this.ctclYY_BASE.form.TextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.ctclYY_BASE.form.TextBox.setFocus();
        		}
        		this.gfnAlert("적용년도를 입력하세요.");
        		return false;
        	}

        	//법인
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.", "fnVaidateCallback");
        	}

         	return validate;
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
        		//this.gfnGridAfterSelect(this.dxGrid);
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

        		case "ccfID_RESIDENT":
        			if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        				this.fnBeforeUserCallback = function() {
        						this.ccfCD_CORP.form.CDTextBox.setFocus();
        					}
        					this.gfnAlert("법인코드를 입력하세요.", "fnBeforeUserCallback");
        					return false;
        			}
        			dsUserParam.setColumn(nrow, "GUBUN", "%");
        			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			break;

        		default:
         	}
         	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

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
        	var json = {OPEN_URL : this.rdoTY_MONEY.value == 0?"DAV_HOUSEMONEY":"DAV_HOUSERENT"};
        	this.getParentContext().close(JSON.stringify(json));
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
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
        };
        this.loadIncludeScript("DAV_HOUSESUBMIT_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
