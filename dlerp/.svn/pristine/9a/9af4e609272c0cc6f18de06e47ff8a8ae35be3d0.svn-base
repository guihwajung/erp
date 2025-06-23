(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAV_GIVESUBST");
            this.set_titletext("기부금공제");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAVPR_GIVESUBST_SELECT</Col></Row><Row><Col id=\"TARGET\">closeCheck</Col><Col id=\"SP\">DAVPR_CLOSE_CHECK2</Col></Row><Row><Col id=\"TARGET\">closeCheck</Col><Col id=\"SP\">DAVPR_CLOSE_CHECK</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DAVPR_GIVESUBST_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DAVPR_GIVESUBST_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DAVPR_GIVESUBST_DELETE</Col></Row><Row><Col id=\"TARGET\">autoCreate</Col><Col id=\"SP\">DAVPR_GIVESUBST_FORWARD_AUTOCREATE</Col></Row><Row><Col id=\"TARGET\">report</Col><Col id=\"SP\">DAVPR_GIVESUBST_RPT_SELECT</Col></Row><Row><Col id=\"TARGET\">reportSub1</Col><Col id=\"SP\">DAVPR_GIVESUBSTSUB1_RPT_SELECT</Col></Row><Row><Col id=\"TARGET\">reportSub2</Col><Col id=\"SP\">DAVPR_GIVESUBSTRPT2_SELECT</Col></Row><Row><Col id=\"TARGET\">dsAuthForm</Col><Col id=\"SP\">DZZPR_DOTNET_AUTHORITYFORM_SELECT_NEW</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCloseCheck", this);
            obj._setContents("<ColumnInfo><Column id=\"YEAREND_CLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_CLOSE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListRpt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","179","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DAX_CFCORP2");
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
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclWORK_BASE","staWORK_BASE:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_enableevent("true");
            obj.set_async("false");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_RESIDENT","ctclWORK_BASE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("주민번호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_RESIDENT","staID_RESIDENT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFEMP");
            obj.getSetter("CDTextWidth").set("130");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtID_SABUN","ccfID_RESIDENT:0.0","10.0","79","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.getSetter("BeforeUserDataSetParam").set("fnGrid_BeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnGrid_AfterCDTextChanged");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
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
        this.registerScript("DAV_GIVESUBST.xfdl", function() {
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

        	if(!this.gfnIsNull(this.getOwnerFrame().WORK_BASE)){
        		//작업구분
        		this.cboYN_MID.set_value(this.getOwnerFrame().YN_MID);

        		//적용년도(현재)
        		this.ctclWORK_BASE.set_url(this.cboYN_MID.value=="Y"?"cmm::cmmCalMM.xfdl":"cmm::cmmCalYY.xfdl");
        		this.ctclWORK_BASE.form.TextBox.set_value(this.getOwnerFrame().WORK_BASE);
        		this.divSearch.form.staWORK_BASE.set_text(this.cboYN_MID.value=="Y"?"적용년월":"적용년도");

        		// 법인코드 및 법인명 기본세팅
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.getOwnerFrame().CD_CORP);
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.getOwnerFrame().DS_CORP);

        		//주민번호
        		this.ccfID_RESIDENT.form.CDTextBox.set_value(this.getOwnerFrame().ID_RESIDENT);
        		this.ccfID_RESIDENT.form.DSTextBox.set_value(this.getOwnerFrame().DS_HNAME);

        		//사번
        		this.edtID_SABUN.set_value(this.getOwnerFrame().ID_SABUN);

        		//READONLY
        		this.ctclWORK_BASE.set_enable(false);
        		this.ccfCD_CORP.form.set_enable(false);
        		this.ccfID_RESIDENT.form.set_enable(false);

        		if(!this.gfnIsNull(this.getOwnerFrame().ID_RESIDENT)){
        			this.FormBtns.Select.click();
        		}
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

        	this.FormBtns.Print.set_enable(true);


        	var bRtn = this.fnIsChangePossible();
        	this.FormBtns.Add.set_enable(bRtn);
        	this.FormBtns.Del.set_enable(bRtn);
        	this.FormBtns.Save.set_enable(bRtn);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnLastYearGiveAutoCreate = this.gfnFormButtonAdd("LastYearGiveAutoCreate", "fnExtBtnEvent", "전년이월기부금자동생성");
        	this.btnLastYearGiveSelect = this.gfnFormButtonAdd("LastYearGiveSelect", "fnExtBtnEvent", "전년이월기부금조회/임의생성");
        };
        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	//작업구분
        	this.cboYN_MID = this.divSearch.form.cboYN_MID;

        	//적용년도
        	this.ctclWORK_BASE = this.divSearch.form.ctclWORK_BASE;

        	//법인코드
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;

        	//주민번호
        	this.ccfID_RESIDENT = this.divSearch.form.ccfID_RESIDENT;

        	//임직원 구분
        	//this.rdoTY_GUBUN = this.divSearch.form.rdoTY_GUBUN;

        	//사번
        	this.edtID_SABUN = this.divSearch.form.edtID_SABUN;

        	//그리드
        	this.dxGrid = this.divData.form.objGrid;

        	this.grSearch = this.FormInfo.GR_SEARCH;					          // 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;					          // 그룹코드
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAV_GIVESUBST");
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	//조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YN_MID", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("ID_RESIDENT", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("YY_BASE", "string");
        	this.dsSelect.addColumn("MM_BASE", "string");
        	this.dsSelect.addColumn("NO_APPLY", "bigdecimal");


        	//기부금자동생성
        	this.dsAutoCreate = new Dataset();
        	this.dsAutoCreate.addColumn("YN_MID", "string");
        	this.dsAutoCreate.addColumn("CD_CORP", "string");
        	this.dsAutoCreate.addColumn("ID_RESIDENT", "string");
        	this.dsAutoCreate.addColumn("ID_SABUN", "string");
        	this.dsAutoCreate.addColumn("YY_BASE", "string");
        	this.dsAutoCreate.addColumn("MM_BASE", "string");
        	this.dsAutoCreate.addColumn("NO_APPLY", "bigdecimal");
        	this.dsAutoCreate.addColumn("ID_INSERT", "string");


        	//입력
        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("YY_BASE", "string");
        	this.dsInsert.addColumn("MM_BASE", "string");
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("ID_RESIDENT", "string");
        	this.dsInsert.addColumn("YN_MID", "string");
        	this.dsInsert.addColumn("ID_SABUN", "string");
        	this.dsInsert.addColumn("ID_RESIDENT_FAMILY", "string");
        	this.dsInsert.addColumn("YN_NTS", "string");
        	this.dsInsert.addColumn("CD_GIVE", "string");
        	this.dsInsert.addColumn("DS_GIVE", "string");
        	this.dsInsert.addColumn("TY_GIVE", "bigdecimal");
        	this.dsInsert.addColumn("NO_GIVE", "bigdecimal");
        	this.dsInsert.addColumn("AM_GIVE", "bigdecimal");
        	this.dsInsert.addColumn("NO_SERIAL", "string");
        	this.dsInsert.addColumn("YM_GIVE", "string");
        	this.dsInsert.addColumn("DS_MEMO", "string");
        	this.dsInsert.addColumn("DS_NAME", "string");
        	this.dsInsert.addColumn("ID_LOGIN", "string");

        	//수정
        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("YN_MID", "string");
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("ID_RESIDENT", "string");
        	this.dsUpdate.addColumn("ID_SABUN", "string");
        	this.dsUpdate.addColumn("ID_RESIDENT_FAMILY", "string");
        	this.dsUpdate.addColumn("YY_BASE", "string");
        	this.dsUpdate.addColumn("MM_BASE", "string");
        	this.dsUpdate.addColumn("CD_GIVE", "string");
        	this.dsUpdate.addColumn("DS_GIVE", "string");
        	this.dsUpdate.addColumn("NO_GIVE", "bigdecimal");
        	this.dsUpdate.addColumn("AM_GIVE", "bigdecimal");
        	this.dsUpdate.addColumn("YN_NTS", "string");
        	this.dsUpdate.addColumn("TY_GIVE", "string");
        	this.dsUpdate.addColumn("NO_SERIAL", "string");
        	this.dsUpdate.addColumn("YM_GIVE", "string");
        	this.dsUpdate.addColumn("DS_MEMO", "string");
        	this.dsUpdate.addColumn("DS_NAME", "string");
        	this.dsUpdate.addColumn("ID_LOGIN", "string");

        	//삭제
        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("YN_MID", "string");
        	this.dsDelete.addColumn("CD_CORP", "string");
        	this.dsDelete.addColumn("ID_RESIDENT", "string");
        	this.dsDelete.addColumn("ID_SABUN", "string");
        	this.dsDelete.addColumn("ID_RESIDENT_FAMILY", "string");
        	this.dsDelete.addColumn("CD_GIVE", "string");
        	this.dsDelete.addColumn("YY_BASE", "string");
        	this.dsDelete.addColumn("MM_BASE", "string");
        	this.dsDelete.addColumn("TY_GIVE", "string");
        	this.dsDelete.addColumn("YN_NTS", "string");
        	this.dsDelete.addColumn("ID_LOGIN", "string");

        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("CD_CORP", "string");
        	this.dsReport.addColumn("ID_RESIDENT", "string");
        	this.dsReport.addColumn("ID_SABUN", "string");
        	this.dsReport.addColumn("YY_BASE", "string");
        	this.dsReport.addColumn("MM_BASE", "string");
        	this.dsReport.addColumn("YN_MID", "string");

        	this.dsReport2 = new Dataset();
        	this.dsReport2.addColumn("ID_RESIDENT", "string");
        	this.dsReport2.addColumn("YY_BASE", "string");
        	this.dsReport2.addColumn("MM_BASE", "string");
        	this.dsReport2.addColumn("YN_MID", "string");
        	this.dsReport2.addColumn("CD_CORP", "string");
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	if (!this.fnSelectValidate()) return false;


        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "ID_RESIDENT", this.ccfID_RESIDENT.form.CDTextBox.value.replace(/-/g,""));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.edtID_SABUN.value);
        	this.dsSelect.setColumn(0, "YY_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(0,4):this.ctclWORK_BASE.form.TextBox.value);
        	this.dsSelect.setColumn(0, "MM_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(4,6):"12");
        	this.dsSelect.setColumn(0, "NO_APPLY", "1");
        	this.dsSelect.setColumn(0, "YN_MID", this.cboYN_MID.value);
        	this.dsSelect.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect closeCheck=dsSelect";
        	var outData     = "dsList=select0 dsCloseCheck=closeCheck0";
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
        	var nrow = this.gfnGridAdd(this.dxGrid);

        	this.dsList.setColumn(nrow, "ID_RESIDENT", this.ccfID_RESIDENT.form.CDTextBox.value.replace(/-/g,""));
        	this.dsList.setColumn(nrow, "ID_SABUN", this.edtID_SABUN.value);
        	this.dsList.setColumn(nrow, "YN_NTS", "N"); //국세청자료
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	//  그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;
        	if (!this.gfValidate()) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();

        				this.dsInsert.setColumn(nrow, "YY_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(0,4):this.ctclWORK_BASE.form.TextBox.value);
        				this.dsInsert.setColumn(nrow, "MM_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(4,6):"12");
        				this.dsInsert.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        				this.dsInsert.setColumn(nrow, "ID_RESIDENT", this.ccfID_RESIDENT.form.CDTextBox.value.replace(/-/g,""));
        				this.dsInsert.setColumn(nrow, "YN_MID", this.cboYN_MID.value);
        				this.dsInsert.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        				this.dsInsert.setColumn(nrow, "ID_RESIDENT_FAMILY", this.dsList.getColumn(i, "ID_RESIDENT_FAMILY").replace(/-/g,""));
        				this.dsInsert.setColumn(nrow, "YN_NTS", this.dsList.getColumn(i, "YN_NTS"));
        				this.dsInsert.setColumn(nrow, "CD_GIVE", this.dsList.getColumn(i, "CD_GIVE").replace(/-/g,""));
        				this.dsInsert.setColumn(nrow, "DS_GIVE", this.dsList.getColumn(i, "DS_GIVE"));
        				this.dsInsert.setColumn(nrow, "TY_GIVE", this.dsList.getColumn(i, "TY_GIVE"));
        				this.dsInsert.setColumn(nrow, "NO_GIVE", this.dsList.getColumn(i, "NO_GIVE"));
        				this.dsInsert.setColumn(nrow, "AM_GIVE", this.dsList.getColumn(i, "AM_GIVE"));
        				this.dsInsert.setColumn(nrow, "NO_SERIAL", this.dsList.getColumn(i, "NO_SERIAL"));
        				this.dsInsert.setColumn(nrow, "YM_GIVE", this.dsList.getColumn(i, "YM_GIVE"));
        				this.dsInsert.setColumn(nrow, "DS_MEMO", this.dsList.getColumn(i, "DS_MEMO"));
        				this.dsInsert.setColumn(nrow, "DS_NAME", this.dsList.getColumn(i, "DS_NAME"));
        				this.dsInsert.setColumn(nrow, "ID_LOGIN", this.AuthClient.ID_USER);
        			case "U":
        				var nrow = this.dsUpdate.addRow();

        				this.dsUpdate.setColumn(nrow, "YN_MID", this.cboYN_MID.value);
        				this.dsUpdate.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        				this.dsUpdate.setColumn(nrow, "ID_RESIDENT", this.ccfID_RESIDENT.form.CDTextBox.value.replace(/-/g,""));
        				this.dsUpdate.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        				this.dsUpdate.setColumn(nrow, "ID_RESIDENT_FAMILY", this.dsList.getColumn(i, "ID_RESIDENT_FAMILY").replace(/-/g,""));
        				this.dsUpdate.setColumn(nrow, "YY_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(0,4):this.ctclWORK_BASE.form.TextBox.value);
        				this.dsUpdate.setColumn(nrow, "MM_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(4,6):"12");
        				this.dsUpdate.setColumn(nrow, "CD_GIVE", this.dsList.getColumn(i, "CD_GIVE").replace(/-/g,""));
        				this.dsUpdate.setColumn(nrow, "DS_GIVE", this.dsList.getColumn(i, "DS_GIVE"));
        				this.dsUpdate.setColumn(nrow, "NO_GIVE", this.dsList.getColumn(i, "NO_GIVE"));
        				this.dsUpdate.setColumn(nrow, "AM_GIVE", this.dsList.getColumn(i, "AM_GIVE"));
        				this.dsUpdate.setColumn(nrow, "YN_NTS", this.dsList.getColumn(i, "YN_NTS"));
        				this.dsUpdate.setColumn(nrow, "TY_GIVE", this.dsList.getColumn(i, "TY_GIVE"));
        				this.dsUpdate.setColumn(nrow, "NO_SERIAL", this.dsList.getColumn(i, "NO_SERIAL"));
        				this.dsUpdate.setColumn(nrow, "YM_GIVE", this.dsList.getColumn(i, "YM_GIVE"));
        				this.dsUpdate.setColumn(nrow, "DS_MEMO", this.dsList.getColumn(i, "DS_MEMO"));
        				this.dsUpdate.setColumn(nrow, "DS_NAME", this.dsList.getColumn(i, "DS_NAME"));
        				this.dsUpdate.setColumn(nrow, "ID_LOGIN", this.AuthClient.ID_USER);

        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();

        				this.dsDelete.setColumn(nrow, "YN_MID", this.cboYN_MID.value);
        				this.dsDelete.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        				this.dsDelete.setColumn(nrow, "ID_RESIDENT", this.ccfID_RESIDENT.form.CDTextBox.value.replace(/-/g,""));
        				this.dsDelete.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        				this.dsDelete.setColumn(nrow, "ID_RESIDENT_FAMILY", this.dsList.getColumn(i, "ID_RESIDENT_FAMILY").replace(/-/g,""));
        				this.dsDelete.setColumn(nrow, "CD_GIVE", this.dsList.getColumn(i, "CD_GIVE").replace(/-/g,""));
        				this.dsDelete.setColumn(nrow, "YY_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(0,4):this.ctclWORK_BASE.form.TextBox.value);
        				this.dsDelete.setColumn(nrow, "MM_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(4,6):"12");
        				this.dsDelete.setColumn(nrow, "TY_GIVE", this.dsList.getColumn(i, "TY_GIVE"));
        				this.dsDelete.setColumn(nrow, "YN_NTS", this.dsList.getColumn(i, "YN_NTS"));
        				this.dsDelete.setColumn(nrow, "ID_LOGIN", this.AuthClient.ID_USER);

        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
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

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        };

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        	this.fnPrintProc("S");
        	return false;
        };

        this.fnPrintProc = function(callType){
        	if(!this.fnSelectValidate()) return false;

        	this.dsReport.clearData();
        	this.dsReport2.clearData();

        	this.dsReport.addRow();
        	this.dsReport2.addRow();

        	this.dsReport.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsReport.setColumn(0, "ID_RESIDENT", this.ccfID_RESIDENT.form.CDTextBox.value.replace(/-/g,""));
        	this.dsReport.setColumn(0, "ID_SABUN", this.edtID_SABUN.value);
        	this.dsReport.setColumn(0, "YY_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(0,4):this.ctclWORK_BASE.form.TextBox.value);
        	this.dsReport.setColumn(0, "MM_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(4,6):"12");
        	this.dsReport.setColumn(0, "YN_MID", this.cboYN_MID.value);

        	this.dsReport2.setColumn(0, "ID_RESIDENT", this.ccfID_RESIDENT.form.CDTextBox.value.replace(/-/g,""));
        	this.dsReport2.setColumn(0, "YY_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(0,4):this.ctclWORK_BASE.form.TextBox.value);
        	this.dsReport2.setColumn(0, "MM_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(4,6):"12");
        	this.dsReport2.setColumn(0, "YN_MID", this.cboYN_MID.value);
        	this.dsReport2.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);


        	if(callType == "S"){
        		var strSvcId    = "report";
        		var strSvcType  = "select";
        		var inProc		= "_dsProc";
        		var inData      = "report=dsReport reportSub1=dsReport reportSub2=dsReport2";
        		var outData     = "dsListRpt=report0";
        		var strArg 		= "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// trabsaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}else{

        		var inProc		= "_dsProc"; 								//이건 없으면 에러나서 그냥둠
        		//var inParam 	= "params=dsReport";						// 조회SP이외 사용할 정보
        		var inParam		= "";
        		var inData      = "report=dsReport reportSub1=dsReport reportSub2=dsReport2";						// target=파라미터 Ds
        		var reportpath  = "/da/dav/DAV_GIVESUBST.ozr";
        		gfnOpenReport(this, reportpath, inProc, inParam, inData);

        	}
        }

        /*
         *	리셋 버튼
         */
        this.fnReset = function() {
        	this.ctclWORK_BASE.form.TextBox.set_value("");
        	this.ccfCD_CORP.form.CDTextBox.set_value("");
        	this.ccfCD_CORP.form.DSTextBox.set_value("");
        	this.ccfID_RESIDENT.form.CDTextBox.set_value("");
        	this.ccfID_RESIDENT.form.DSTextBox.set_value("");
        	this.edtID_SABUN.set_value("");
        };
        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {

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
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.", "fnVaidateCallback");
        		return false
        	}

        	//주민등록번호
        	if (this.gfnIsNull(this.ccfID_RESIDENT.form.CDTextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.ccfID_RESIDENT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("주민등록번호를 입력하세요.", "fnVaidateCallback");
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
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.fnSetButton();

        		//확장버튼 제어
        		var val = true;
        // 		if(this.dsCloseCheck.getColumn(0, "YEAREND_CLOSE") != "N" && this.dsCloseCheck.getColumn(0, "YN_CLOSE") != "N"){
        // 			val = false;
        //
        // 			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","ID_RESIDENT_FAMILY"),"edittype","none");
        // 			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","DS_HNAME"),"edittype","none");
        // 			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","TY_GIVE"),"edittype","none");
        // 			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","CD_GIVE"),"edittype","none");
        // 			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","DS_GIVE"),"edittype","none");
        // 			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","NO_GIVE"),"edittype","none");
        // 			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","AM_GIVE"),"edittype","none");
        // 			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","YM_GIVE"),"edittype","none");
        // 			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","DS_MEMO"),"edittype","none");
        // 			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","YN_NTS"),"edittype","none");
        //
        // 			this.FormBtns.Add.set_enable(false);
        // 			this.FormBtns.Del.set_enable(false);
        // 			this.FormBtns.Save.set_enable(false);
        // 			this.FormBtns.Reset.set_enable(false);
        // 			this.FormBtns.Excel.set_enable(false);
        // 			this.FormBtns.Print.set_enable(false);
        // 		}

        		var bRtn = this.fnIsChangePossible();
        		this.btnLastYearGiveAutoCreate.set_enable(bRtn);
        		this.btnLastYearGiveSelect.set_enable(bRtn);

        	} else if(svcID == "save"){
        		if(errorCode == 0 ){
        			this.FormBtns.Select.click();
        		}else{
        			this.gfnAlert(errorMsg);
        		}
        	} else if( svcID == "autoCreate"){
        		if(errorCode != 0) {
        			this.fnSelect();
        		}else{
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "report"){
        		if (errorCode == 0) {
        			if(this.dsListRpt.rowcount >0){
        				this.fnPrintProc("P");
        			}
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

        		case "ccfID_RESIDENT"://주민번호
        			if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        				this.fnBeforeUserCallback = function() {
        						this.ccfCD_CORP.form.CDTextBox.setFocus();
        					}
        					this.gfnAlert("법인코드를 입력하세요.", "fnBeforeUserCallback");
        					return false;
        			}
        			dsUserParam.setColumn(nrow, "GUBUN", "E");	//임직원구분 rdoTY_GUBUN 없음
        			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			break;

        		default:
         	}
         	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	var arr = codeFindData;

        	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			this.ccfID_RESIDENT.form.CDTextBox.set_value("");
        			this.ccfID_RESIDENT.form.DSTextBox.set_value("");
        			break;

        		case "ccfID_RESIDENT"://주민등록번호
        			this.ccfID_RESIDENT.form.CDTextBox.set_value(arr[0]["ID_RESIDENT"]);
        			this.ccfID_RESIDENT.form.DSTextBox.set_value(arr[0]["DS_HNAME"]);
        			this.edtID_SABUN.set_value(arr[0]["ID_SABUN"]);
        			break;

        		default:
        	}

        	this.fnSearchInit();
        };

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){

        	switch(id) {

        		case "DAX_CFBASESUBST":     // 부양가족
        			dsUserParam.setColumn(nrow, "YY_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(0,4):this.ctclWORK_BASE.form.TextBox.value);
        			dsUserParam.setColumn(nrow, "MM_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(4,6):"12");
        			dsUserParam.setColumn(nrow, "YN_MID", this.cboYN_MID.value);
        			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			dsUserParam.setColumn(nrow, "ID_RESIDENT", this.ccfID_RESIDENT.form.CDTextBox.value.replace(/-/g,""));
        		break;

        		default:
        	}
        	return true;
        };

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	switch(id) {
        		case "DAX_CFBASESUBST":     // 부양가족
        		break;

        		default:
        	}
        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.gfValidate = function ()
        {
        	var colCD_GIVE = this.dxGrid.getBindCellIndex("body", "CD_GIVE");
        	var headText   = this.dxGrid.getCellProperty("head" , colCD_GIVE, "text");

        	for(var i=0;i<this.dsList.rowcount;i++){
        	if(this.dsList.getColumn(i, this.ucFlag) == "I" || this.dsList.getColumn(i, this.ucFlag) == "U"){
        			var cdGive = nexacro.replaceAll(this.gfnTrim(this.gfnNvl(this.dsList.getColumn(i, "CD_GIVE"),"")), "-", "");

        			if(!this.gfnIsBzIdNo(cdGive)){
        				this.gfnAlert((i + 1) +"열: ["+headText+"]가 유효하지 않습니다.");
        				this.dsList.set_rowposition(i);
        				this.dxGrid.setCellPos(colCD_GIVE);
        				return false;
        			}
        		}
        	}
        	return true;
        };

        // 셀 수정가능 여부 (반드시 EnterCell에서 처리할것)
        this.fnGrid_EnterCell = function(obj, row, cell) {
        // 	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);
        // 	var rowFlag = this.gfnGetFlag(this.dsList, row);
        //
        // 	if(this.dsCloseCheck.getColumn(0, "YEAREND_CLOSE") == "Y"){
        // 		if(colnm == "ID_RESIDENT_FAMILY" || colnm == "YM_GIVE"){
        // 			return false;
        // 		}
        // 	}
        //
        // 	return true;

        	var bRtn = this.fnIsChangePossible();

        	if(bRtn == false){
        		return false;
        	}
        }
         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
         this.fnExtBtnEvent = function(btn){

        	var param = {};
        	var btnUrl;

        	switch(btn.id){

        		case "btnExt_LastYearGiveAutoCreate": //전년이월기부금자동생성
        			this.fnGiveAutoCreate();
        			break;
        		case "btnExt_LastYearGiveSelect": //전년이월기부금조회/임의생성
        			param={
        					WORK_BASE: this.ctclWORK_BASE.form.TextBox.value,
        					CD_CORP: this.ccfCD_CORP.form.CDTextBox.value,
        					DS_CORP: this.ccfCD_CORP.form.DSTextBox.value,
        					ID_RESIDENT: this.ccfID_RESIDENT.form.CDTextBox.value,
        					DS_HNAME:this.ccfID_RESIDENT.form.DSTextBox.value,
        					ID_SABUN:this.edtID_SABUN.value,
        					YN_MID: this.cboYN_MID.value
        					};
        			btnUrl = "DAV_GIVEFORWARD";
        			this.gfnFormOpen(this.FormInfo.CD_MODULE, btnUrl, "전년이월기부금조회/임의생성", param, this.width, this.height);
        			break;

        		default:
        	}
        };
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
        		this.gfnGridClear(this.dxGrid);
        	}
        };
        this.dsList_onvaluechanged = function(obj,e)
        {
        	this.fnSetButton();
        };

        //전년이월기부금자동생성
        this.fnGiveAutoCreate = function(){

        	if (!this.fnSelectValidate()) return false;

        	this.dsAutoCreate.clearData();
        	this.dsAutoCreate.addRow();

        	this.dsAutoCreate.setColumn(0, "YN_MID", this.cboYN_MID.value);
        	this.dsAutoCreate.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsAutoCreate.setColumn(0, "ID_RESIDENT", this.ccfID_RESIDENT.form.CDTextBox.value.replace(/-/g,""));
        	this.dsAutoCreate.setColumn(0, "ID_SABUN", this.edtID_SABUN.value);
        	this.dsAutoCreate.setColumn(0, "YY_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(0,4):this.ctclWORK_BASE.form.TextBox.value);
        	this.dsAutoCreate.setColumn(0, "MM_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(4,6):"12");
        	this.dsAutoCreate.setColumn(0, "NO_APPLY", "1");
        	this.dsAutoCreate.setColumn(0, "ID_INSERT", this.AuthClient.ID_USER);


        	var strSvcId    = "autoCreate";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "autoCreate=dsAutoCreate";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnIsChangePossible = function(){
        	var bPossible = false;

        	var YEAREND_CLOSE = this.dsCloseCheck.getColumn(0, "YEAREND_CLOSE");
        	var YN_CLOSE = this.dsCloseCheck.getColumn(0, "YN_CLOSE");

        	if(YEAREND_CLOSE == "Y" && YN_CLOSE == "Y"){
        		bPossible = false;
        	}
        	else if(YEAREND_CLOSE == "Y" && YN_CLOSE == "N"){
        		bPossible = false;
        	}
        	else if(YEAREND_CLOSE == "N" && YN_CLOSE == "Y"){
        		bPossible = false;
        	}
        	else if(YEAREND_CLOSE == "N" && YN_CLOSE == "N"){
        		bPossible = true;
        	}

        	if(bPossible){
        		trace("fnIsChangePossible>>수정가능");
        	}else{
        		trace("fnIsChangePossible>>수정불가");
        	}

        	return bPossible;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboYN_MID.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DAV_GIVESUBST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
