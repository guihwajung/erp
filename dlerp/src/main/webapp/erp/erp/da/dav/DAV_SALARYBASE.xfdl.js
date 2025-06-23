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
            this.set_titletext("급여이관");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAVPR_SALARYBASE_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DAVPR_SALARYBASE_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYnClose", this);
            obj._setContents("<ColumnInfo><Column id=\"YEAREND_CLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_CLOSE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNecessary", this);
            obj._setContents("<ColumnInfo><Column id=\"TAB\" type=\"STRING\" size=\"256\"/><Column id=\"COMP\" type=\"STRING\" size=\"256\"/><Column id=\"LABEL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TAB\">0</Col><Col id=\"COMP\">txtCD_PRECOMPANY1</Col><Col id=\"LABEL\">사업자등록번호</Col></Row><Row><Col id=\"TAB\">0</Col><Col id=\"COMP\">txtDS_PRECOMPANY1</Col><Col id=\"LABEL\">회사명</Col></Row><Row><Col id=\"TAB\">0</Col><Col id=\"COMP\">ctclDT_JOIN1</Col><Col id=\"LABEL\">입사일자</Col></Row><Row><Col id=\"TAB\">0</Col><Col id=\"COMP\">ctclDT_RETIRE1</Col><Col id=\"LABEL\">퇴사일자</Col></Row><Row><Col id=\"TAB\">1</Col><Col id=\"COMP\">txtCD_PRECOMPANY2</Col><Col id=\"LABEL\">사업자등록번호</Col></Row><Row><Col id=\"TAB\">1</Col><Col id=\"COMP\">txtDS_PRECOMPANY2</Col><Col id=\"LABEL\">회사명</Col></Row><Row><Col id=\"TAB\">1</Col><Col id=\"COMP\">ctclDT_JOIN2</Col><Col id=\"LABEL\">입사일자</Col></Row><Row><Col id=\"TAB\">1</Col><Col id=\"COMP\">ctclDT_RETIRE2</Col><Col id=\"LABEL\">퇴사일자</Col></Row><Row><Col id=\"TAB\">2</Col><Col id=\"COMP\">txtCD_PRECOMPANY3</Col><Col id=\"LABEL\">사업자등록번호</Col></Row><Row><Col id=\"TAB\">2</Col><Col id=\"COMP\">txtDS_PRECOMPANY3</Col><Col id=\"LABEL\">회사명</Col></Row><Row><Col id=\"TAB\">2</Col><Col id=\"COMP\">ctclDT_JOIN3</Col><Col id=\"LABEL\">입사일자</Col></Row><Row><Col id=\"TAB\">2</Col><Col id=\"COMP\">ctclDT_RETIRE3</Col><Col id=\"LABEL\">퇴사일자</Col></Row><Row><Col id=\"TAB\">3</Col><Col id=\"COMP\">txtCD_PRECOMPANY4</Col><Col id=\"LABEL\">사업자등록번호</Col></Row><Row><Col id=\"TAB\">3</Col><Col id=\"COMP\">txtDS_PRECOMPANY4</Col><Col id=\"LABEL\">회사명</Col></Row><Row><Col id=\"TAB\">3</Col><Col id=\"COMP\">ctclDT_JOIN4</Col><Col id=\"LABEL\">입사일자</Col></Row><Row><Col id=\"TAB\">3</Col><Col id=\"COMP\">ctclDT_RETIRE4</Col><Col id=\"LABEL\">퇴사일자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_COMPANY1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMPANY1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TAXOFFICE1\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JOIN1\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RETIRE1\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE1PAYSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PRE1BONUSSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PRE1HEALTHBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE1HIREBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE1ANNUITYBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE1INCTAXBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE1RESTAXBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE1AGRTAXBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_RETIRE1\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE1inBONUSSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_OVERSEASNTAX1\" type=\"INT\" size=\"256\"/><Column id=\"AM_NIGHTWORKNTAX1\" type=\"INT\" size=\"256\"/><Column id=\"AM_BIRTH1\" type=\"INT\" size=\"256\"/><Column id=\"AM_FOREIGNERNTAX1\" type=\"INT\" size=\"256\"/><Column id=\"AM_ETCNTAX1\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE1NTAXSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_COMPANY2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMPANY2\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TAXOFFICE2\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JOIN2\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RETIRE2\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE2PAYSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PRE2BONUSSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PRE2HEALTHBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE2HIREBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE2ANNUITYBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE2INCTAXBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE2RESTAXBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE2AGRTAXBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_RETIRE2\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE2inBONUSSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_OVERSEASNTAX2\" type=\"INT\" size=\"256\"/><Column id=\"AM_NIGHTWORKNTAX2\" type=\"INT\" size=\"256\"/><Column id=\"AM_BIRTH2\" type=\"INT\" size=\"256\"/><Column id=\"AM_FOREIGNERNTAX2\" type=\"INT\" size=\"256\"/><Column id=\"AM_ETCNTAX2\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE2NTAXSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_COMPANY3\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMPANY3\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TAXOFFICE3\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JOIN3\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RETIRE3\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE3PAYSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PRE3BONUSSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PRE3HEALTHBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE3HIREBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE3ANNUITYBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE3INCTAXBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE3RESTAXBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE3AGRTAXBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_RETIRE3\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE3inBONUSSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_OVERSEASNTAX3\" type=\"INT\" size=\"256\"/><Column id=\"AM_NIGHTWORKNTAX3\" type=\"INT\" size=\"256\"/><Column id=\"AM_BIRTH3\" type=\"INT\" size=\"256\"/><Column id=\"AM_FOREIGNERNTAX3\" type=\"INT\" size=\"256\"/><Column id=\"AM_ETCNTAX3\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE3NTAXSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_COMPANY4\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMPANY4\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TAXOFFICE4\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JOIN4\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RETIRE4\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PRE4PAYSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PRE4BONUSSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PRE4HEALTHBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE4HIREBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE4ANNUITYBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE4INCTAXBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE4RESTAXBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE4AGRTAXBEF\" type=\"INT\" size=\"256\"/><Column id=\"AM_RETIRE4\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE4inBONUSSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_OVERSEASNTAX4\" type=\"INT\" size=\"256\"/><Column id=\"AM_NIGHTWORKNTAX4\" type=\"INT\" size=\"256\"/><Column id=\"AM_BIRTH4\" type=\"INT\" size=\"256\"/><Column id=\"AM_FOREIGNERNTAX4\" type=\"INT\" size=\"256\"/><Column id=\"AM_ETCNTAX4\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE4NTAXSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"QN_PRECOMP\" type=\"STRING\" size=\"256\"/><Column id=\"RT_PRE1TAXRDT\" type=\"INT\" size=\"256\"/><Column id=\"RT_PRE2TAXRDT\" type=\"INT\" size=\"256\"/><Column id=\"RT_PRE3TAXRDT\" type=\"INT\" size=\"256\"/><Column id=\"RT_PRE4TAXRDT\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE1TAXREDUCTIONINCOMESUM\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE2TAXREDUCTIONINCOMESUM\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE3TAXREDUCTIONINCOMESUM\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE4TAXREDUCTIONINCOMESUM\" type=\"INT\" size=\"256\"/><Column id=\"AM_PRE1OURSTOCKSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PRE2OURSTOCKSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PRE3OURSTOCKSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PRE4OURSTOCKSUM\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("ctclWORK_BASE","0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_enableevent("true");
            obj.set_async("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ctclWORK_BASE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_MID","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_MID","staYN_MID:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            obj.set_readonly("true");
            var divSearch_form_cboYN_MID_innerdataset = new nexacro.NormalDataset("divSearch_form_cboYN_MID_innerdataset", obj);
            divSearch_form_cboYN_MID_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">연말정산</Col><Col id=\"codecolumn\">N</Col></Row><Row><Col id=\"datacolumn\">중도정산</Col><Col id=\"codecolumn\">Y</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboYN_MID_innerdataset);
            obj.set_text("연말정산");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staWORK_BASE","cboYN_MID:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("적용년도");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtNO_APPLY","ccfCD_CORP:0.0","10.0","79","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_visible("false");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdoTY_GUBUN","edtNO_APPLY:0.0","10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            var divSearch_form_rdoTY_GUBUN_innerdataset = new nexacro.NormalDataset("divSearch_form_rdoTY_GUBUN_innerdataset", obj);
            divSearch_form_rdoTY_GUBUN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">E</Col><Col id=\"datacolumn\">임직원</Col></Row><Row><Col id=\"codecolumn\">T</Col><Col id=\"datacolumn\">노무자</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_rdoTY_GUBUN_innerdataset);
            obj.set_text("임직원");
            obj.set_value("E");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.getSetter("BeforeUserDataSetParam").set("fnGrid_BeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnGrid_AfterCDTextChanged");
            obj._setContents("");
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
        this.registerScript("DAV_SALARYBASE.xfdl", function() {
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

        	//구분 - 일용직 삭제
        	//this.rdoTY_GUBUN.getInnerDataset().deleteRow(1);

        	//적용년도(현재)
        	var today = this.gfnGetDate().substring(0,4) - 1; //전년도

        	this.ctclWORK_BASE.set_url(this.cboYN_MID.value == "Y"?"cmm::cmmCalMM.xfdl":"cmm::cmmCalYY.xfdl");
        	this.ctclWORK_BASE.form.TextBox.set_value(today);
        	if(!this.gfnIsNull(this.getOwnerFrame().WORK_BASE)) this.ctclWORK_BASE.form.TextBox.set_value(this.getOwnerFrame().WORK_BASE);
        	this.divSearch.form.staWORK_BASE.set_text(this.cboYN_MID.value=="Y"?"적용년월":"적용년도");

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_CORP) && !this.gfnIsNull(this.getOwnerFrame().ID_SABUN)) {

        	    this.CD_CORP = this.getOwnerFrame().CD_CORP;
        		this.YY_BASE = this.getOwnerFrame().WORK_BASE;
                this.YN_MID = this.getOwnerFrame().YN_MID;
                this.ID_SABUN = this.getOwnerFrame().ID_SABUN;

        		this.ccfCD_CORP.form.CDTextBox.set_value(this.getOwnerFrame().CD_CORP);
        		this.ccfCD_CORP.form.fnCodeFindLoad();

        		//this.ccfID_RESIDENT.form.CDTextBox.set_value(this.getOwnerFrame().ID_SABUN);
        		//this.ccfID_RESIDENT.form.fnCodeFindLoad();

        		this.edtNO_APPLY.set_value(this.getOwnerFrame().NO_APPLY);

        		if(this.ccfCD_CORP.form.CDTextBox.value != ""){
        			this.FormBtns.Select.click();
        		}

        	}else{

        	    this.CD_CORP = this.AuthClient.CD_CORP;
        		this.YY_BASE = today;
                this.YN_MID = "N";
                this.ID_SABUN = ""; //this.AuthClient.ID_SABUN;

        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        		this.ccfCD_CORP.form.fnCodeFindLoad();
        		//this.ccfID_RESIDENT.form.CDTextBox.set_value(this.AuthClient.ID_SABUN);
        		//this.ccfID_RESIDENT.form.fnCodeFindLoad();

        		this.edtNO_APPLY.set_value("1");

        		if(this.ccfCD_CORP.form.CDTextBox.value != "") this.FormBtns.Select.click();
        	}

        	if(this.FormInfo.GR_SEARCH == "1"){
        		this.ccfCD_CORP.set_enable(true);
        	}else{
        		this.ccfCD_CORP.set_enable(false);
        	}

        	if(this.FormInfo.GR_SEARCH == "9"){
        		//this.ccfID_RESIDENT.set_enable(false);
        	}else{
        		//this.ccfID_RESIDENT.set_enable(true);
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
        this.fnSetExtendButton = function() {
        	this.btnCreate 			= this.gfnFormButtonAdd("Create", 			"fnCreate"); //자료생성
        	this.btnSalaryDivision	= this.gfnFormButtonAdd("SalaryDivision",	"fnSalaryDivision"); //급여분할
        	this.btnSalaryApply 	= this.gfnFormButtonAdd("SalaryApply", 		"fnSalaryApply"); //급여적용
        };

        //자료생성
        this.fnCreate = function(){
        	var param = {};
        	param.YN_MID = this.cboYN_MID.value;
        	param.CD_CORP = this.gfnGridIsRow(this.dxGrid) == false ? this.ccfCD_CORP.form.CDTextBox.value : this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        	param.DS_CORP = this.gfnGridIsRow(this.dxGrid) == false ? this.ccfCD_CORP.form.DSTextBox.value : this.dsList.getColumn(this.dsList.rowposition, "DS_CORP");
         	param.ID_RESIDENT = this.gfnGridIsRow(this.dxGrid) == false ? "" : this.dsList.getColumn(this.dsList.rowposition, "ID_RESIDENT");
         	param.ID_SABUN = this.gfnGridIsRow(this.dxGrid) == false ? "" :  this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN");

        	trace("fnCreate>>param", param);

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAV_SALARYBASE_CREATE_DLG", "fnCreate_callback", param);
        }
        //자료생성-callback
        this.fnCreate_callback = function(){
        	trace("fnCreate_callback");
        	this.FormBtns.Select.click();
        }


        //급여분할
        this.fnSalaryDivision = function(){
        	var param = {};
        	param.YN_MID = this.cboYN_MID.value;
        	param.CD_CORP = this.gfnGridIsRow(this.dxGrid) == false ? this.ccfCD_CORP.form.CDTextBox.value : this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        	param.DS_CORP = this.gfnGridIsRow(this.dxGrid) == false ? this.ccfCD_CORP.form.DSTextBox.value : this.dsList.getColumn(this.dsList.rowposition, "DS_CORP");
         	param.ID_RESIDENT = this.gfnGridIsRow(this.dxGrid) == false ? "" : this.dsList.getColumn(this.dsList.rowposition, "ID_RESIDENT");
         	param.ID_SABUN = this.gfnGridIsRow(this.dxGrid) == false ? "" :  this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN");

        	trace("fnSalaryDivision>>param", param);

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAV_SALARYBASE_DIV_DLG", "fnSalaryDivision_callback", param);
        }
        //급여분할-callback
        this.fnSalaryDivision_callback = function(){
        	trace("fnSalaryDivision_callback");
        	this.FormBtns.Select.click();
        }


        //급여적용
        this.fnSalaryApply = function(){
        	var param = {};
        	param.YN_MID = this.cboYN_MID.value;
        	param.CD_CORP = this.gfnGridIsRow(this.dxGrid) == false ? this.ccfCD_CORP.form.CDTextBox.value : this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        	param.DS_CORP = this.gfnGridIsRow(this.dxGrid) == false ? this.ccfCD_CORP.form.DSTextBox.value : this.dsList.getColumn(this.dsList.rowposition, "DS_CORP");
         	param.ID_RESIDENT = this.gfnGridIsRow(this.dxGrid) == false ? "" : this.dsList.getColumn(this.dsList.rowposition, "ID_RESIDENT");
         	param.ID_SABUN = this.gfnGridIsRow(this.dxGrid) == false ? "" :  this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN");
        	param.YN_CLOSE = this.gfnGridIsRow(this.dxGrid) == false ? "Y" :  this.dsList.getColumn(this.dsList.rowposition, "YN_CLOSE");

        	trace("fnSalaryApply>>param", param);

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAV_SALARYBASE_APPLY_DLG", "fnSalaryApply_callback", param);
        }
        //급여적용-callback
        this.fnSalaryApply_callback = function(){
        	trace("fnSalaryApply_callback");
        	this.FormBtns.Select.click();
        }


        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.cboYN_MID = this.divSearch.form.cboYN_MID; 			//작업구분
        	this.ctclWORK_BASE = this.divSearch.form.ctclWORK_BASE; 	//적용년도
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP; 			//법인코드
        	//this.ccfID_RESIDENT = this.divSearch.form.ccfID_RESIDENT;   //주민번호
        	//this.edtID_SABUN = this.divSearch.form.edtID_SABUN; 		//사번
        	//this.rdoTY_GUBUN = this.divSearch.form.rdoTY_GUBUN; 		//임직원 구분
        	this.edtNO_APPLY = this.divSearch.form.edtNO_APPLY;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAV_SALARYBASE");

        	// 셀 수정가능 여부
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YY_BASE", "string");
        	this.dsSelect.addColumn("MM_BASE", "string");
        	this.dsSelect.addColumn("NO_APPLY", "int");
        	this.dsSelect.addColumn("YN_MID", "string");
        	this.dsSelect.addColumn("ID_INSERT", "string");

        	//저장
        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("ID_RESIDENT", "string");
        	this.dsUpdate.addColumn("YY_BASE", "string");
        	this.dsUpdate.addColumn("MM_BASE", "string");
        	this.dsUpdate.addColumn("NO_APPLY", "int");
        	this.dsUpdate.addColumn("YN_MID", "string");
        	this.dsUpdate.addColumn("ID_SABUN", "string");
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("YN_DIVISION", "string");
        	this.dsUpdate.addColumn("QN_DIVISION", "int");
        	this.dsUpdate.addColumn("AM_INCTAX1", "int");
        	this.dsUpdate.addColumn("AM_RESTAX1", "int");
        	this.dsUpdate.addColumn("AM_AGRTAX1", "int");
        	this.dsUpdate.addColumn("AM_INCTAX2", "int");
        	this.dsUpdate.addColumn("AM_RESTAX2", "int");
        	this.dsUpdate.addColumn("AM_AGRTAX2", "int");
        	this.dsUpdate.addColumn("AM_INCTAX3", "int");
        	this.dsUpdate.addColumn("AM_RESTAX3", "int");
        	this.dsUpdate.addColumn("AM_AGRTAX3", "int");
        	this.dsUpdate.addColumn("YM_SALARY", "string");
        	this.dsUpdate.addColumn("YN_CLOSE", "string");
        	this.dsUpdate.addColumn("DS_REMARK", "string");
        	this.dsUpdate.addColumn("GR_SEARCH", "string");
        	this.dsUpdate.addColumn("TY_AUTH", "string");
        	this.dsUpdate.addColumn("GR_DEPT", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");




        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "YY_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value:this.ctclWORK_BASE.form.TextBox.value.substring(0,4));
        	this.dsSelect.setColumn(0, "MM_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(4,6):"12");
        	this.dsSelect.setColumn(0, "NO_APPLY", this.edtNO_APPLY.value);
        	this.dsSelect.setColumn(0, "YN_MID", this.cboYN_MID.value);
        	this.dsSelect.setColumn(0, "ID_INSERT", this.AuthClient.ID_USER);

        	var strSvcId    = "select";
        	var strSvcType  = "select";
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
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	//this.gfnGridAdd(this.dxGrid);
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
        };
        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsUpdate.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "ID_RESIDENT", this.dsList.getColumn(i, "ID_RESIDENT"));
        				this.dsUpdate.setColumn(nrow, "YY_BASE", this.dsList.getColumn(i, "YY_BASE"));
        				this.dsUpdate.setColumn(nrow, "MM_BASE", this.dsList.getColumn(i, "MM_BASE"));
        				this.dsUpdate.setColumn(nrow, "NO_APPLY", this.dsList.getColumn(i, "NO_APPLY"));
        				this.dsUpdate.setColumn(nrow, "YN_MID", this.dsList.getColumn(i, "YN_MID"));
        				this.dsUpdate.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        				this.dsUpdate.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsUpdate.setColumn(nrow, "YN_DIVISION", this.dsList.getColumn(i, "YN_DIVISION"));
        				this.dsUpdate.setColumn(nrow, "QN_DIVISION", this.dsList.getColumn(i, "QN_DIVISION"));
        				this.dsUpdate.setColumn(nrow, "AM_INCTAX1", this.dsList.getColumn(i, "AM_INCTAX1"));
        				this.dsUpdate.setColumn(nrow, "AM_RESTAX1", this.dsList.getColumn(i, "AM_RESTAX1"));
        				this.dsUpdate.setColumn(nrow, "AM_AGRTAX1", this.dsList.getColumn(i, "AM_AGRTAX1"));
        				this.dsUpdate.setColumn(nrow, "AM_INCTAX2", this.dsList.getColumn(i, "AM_INCTAX2"));
        				this.dsUpdate.setColumn(nrow, "AM_RESTAX2", this.dsList.getColumn(i, "AM_RESTAX2"));
        				this.dsUpdate.setColumn(nrow, "AM_AGRTAX2", this.dsList.getColumn(i, "AM_AGRTAX2"));
        				this.dsUpdate.setColumn(nrow, "AM_INCTAX3", this.dsList.getColumn(i, "AM_INCTAX3"));
        				this.dsUpdate.setColumn(nrow, "AM_RESTAX3", this.dsList.getColumn(i, "AM_RESTAX3"));
        				this.dsUpdate.setColumn(nrow, "AM_AGRTAX3", this.dsList.getColumn(i, "AM_AGRTAX3"));
        				this.dsUpdate.setColumn(nrow, "YM_SALARY", this.dsList.getColumn(i, "YM_SALARY"));
        				this.dsUpdate.setColumn(nrow, "YN_CLOSE", this.dsList.getColumn(i, "YN_CLOSE"));
        				this.dsUpdate.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        				this.dsUpdate.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        				this.dsUpdate.setColumn(nrow, "TY_AUTH", this.FormInfo.TY_AUTH);
        				this.dsUpdate.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsUpdate.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate";
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

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	//this.gfnExcelExport(this.dxGrid);
        };

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {

         	var validate = true;

        	//적용년도
        	if (this.gfnIsNull(this.ctclWORK_BASE.form.TextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.ctclWORK_BASE.form.TextBox.setFocus();
        		}
        		this.gfnAlert(this.divSearch.form.staWORK_BASE.text + "을/를 입력하세요.");
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

        // 	//주민등록번호
        // 	if (this.gfnIsNull(this.ccfID_RESIDENT.form.CDTextBox.value)) {
        // 		validate = false;
        // 		this.fnVaidateCallback = function() {
        // 			this.ccfID_RESIDENT.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("주민번호를 입력하세요.", "fnVaidateCallback");
        // 	}

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
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.gfnAlert("저장되었습니다.");
        			this.FormBtns.Select.click();
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

        // 		case "ccfID_RESIDENT":
        // 			if (this.gfnIsNull(this.cboYN_MID.value)) {
        // 				this.gfnAlert("작업구분을 먼저 입력하세요.");
        // 				return false;
        // 			}
        // 			if (this.gfnIsNull(this.ctclWORK_BASE.form.TextBox.value)) {
        // 				this.gfnAlert("적용년도를 먼저 입력하세요.");
        // 				return false;
        // 			}
        // 			if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        // 				this.gfnAlert("법인을 먼저 입력하세요.");
        // 				return false;
        // 			}
        //
        // 			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        // 			dsUserParam.setColumn(nrow, "YY_BASE", this.ctclWORK_BASE.form.TextBox.value);
        // 			dsUserParam.setColumn(nrow, "YN_MID", this.cboYN_MID.value);
        // 			dsUserParam.setColumn(nrow, "ID_SABUN", this.gfnNvl(this.ID_SABUN, "")); //타화면에서 넘어온값이 있으면 그걸로 조회되도록. 아니면 입력한 VALUE 값으로 조회
        //
        // 			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        // 			dsUserParam.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        // 			dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        // 			break;

        		default:
         	}
         	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	var arr = codeFindData;

        	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			//this.ccfID_RESIDENT.form.CDTextBox.set_value("");
        			//this.ccfID_RESIDENT.form.DSTextBox.set_value("");
        			//this.edtID_SABUN.set_value("");
        			break;
        // 		case "ccfID_RESIDENT"://주민등록번호
        // 			if(arr.length > 0) {
        // 				//this.edtID_SABUN.set_value(arr[0]["ID_SABUN"]);
        // 			}else{
        // 				//this.edtID_SABUN.set_value("");
        // 			}
        // 			break;

        		default:
        	}

        	this.fnSearchInit();
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_EnterCell = function(obj, row, cell) {
        	//var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);

        	if(this.gfnNvl(this.dsList.getColumn(row, "YN_CLOSE"), "N") == "Y") {
        		return false;
        	}
        }

         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		// 폼상태 초기화
        		this.gfnSetFormStatus(this);
        		this.dsList.clearData();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("DAV_SALARYBASE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
