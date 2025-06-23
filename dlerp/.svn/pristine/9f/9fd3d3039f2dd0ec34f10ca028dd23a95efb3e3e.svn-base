(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAV_MEDICALSUBST");
            this.set_titletext("의료비공제");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYnClose", this);
            obj._setContents("<ColumnInfo><Column id=\"YEAREND_CLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_CLOSE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAVPR_MEDICALSUBST_SELECT</Col></Row><Row><Col id=\"TARGET\">closeCheck</Col><Col id=\"SP\">DAVPR_CLOSE_CHECK2</Col></Row><Row><Col id=\"TARGET\">closeCheck</Col><Col id=\"SP\">DAVPR_CLOSE_CHECK</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DAVPR_MEDICALSUBST_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DAVPR_MEDICALSUBST_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DAVPR_MEDICALSUBST_DELETE</Col></Row><Row><Col id=\"SP\">DAVPR_MEDICALSUBSTRPT2010_SELECT</Col><Col id=\"TARGET\">report</Col></Row><Row><Col id=\"SP\">DAVPR_MEDICALSUBSTRPT2010_SUB1_SELECT</Col><Col id=\"TARGET\">report2010Sub1</Col></Row><Row><Col id=\"TARGET\">report2010Sub2</Col><Col id=\"SP\">DAVPR_MEDICALSUBSTRPT2010_SUB2_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListRpt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc_back", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAVPR_MEDICALSUBST_SELECT</Col></Row><Row><Col id=\"TARGET\">closeCheck</Col><Col id=\"SP\">DAVPR_CLOSE_CHECK2</Col></Row><Row><Col id=\"TARGET\">closeCheck</Col><Col id=\"SP\">DAVPR_CLOSE_CHECK</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DAVPR_MEDICALSUBST_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DAVPR_MEDICALSUBST_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DAVPR_MEDICALSUBST_DELETE</Col></Row><Row><Col id=\"SP\">DAVPR_MEDICALSUBSTRPT2010_SELECT</Col><Col id=\"TARGET\">report2010</Col></Row><Row><Col id=\"SP\">DAVPR_MEDICALSUBSTRPT2010_SUB1_SELECT</Col><Col id=\"TARGET\">report2010Sub1</Col></Row><Row><Col id=\"TARGET\">report2010Sub2</Col><Col id=\"SP\">DAVPR_MEDICALSUBSTRPT2010_SUB2_SELECT</Col></Row></Rows>");
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
            obj.set_cssclass("sta_WF_SchLabel");
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
        this.registerScript("DAV_MEDICALSUBST.xfdl", function() {
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
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	// this.FormBtns.Add.set_enable(false);
        	// this.FormBtns.Del.set_enable(false);
        	// this.FormBtns.Save.set_enable(false);

        	var bRtn = this.fnIsChangePossible();
        	this.FormBtns.Add.set_enable(bRtn);
        	this.FormBtns.Del.set_enable(bRtn);
        	this.FormBtns.Save.set_enable(bRtn);

        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/

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
        	this.edtID_SABUN = this.divSearch.form.edtID_SABUN;

        	//임직원 구분
        	//this.rdoTY_GUBUN = this.divSearch.form.rdoTY_GUBUN;

        	//그리드
        	this.dxGrid = this.divData.form.objGrid;

        	this.grSearch = this.FormInfo.GR_SEARCH;					          // 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;					          // 그룹코드
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAV_MEDICALSUBST");

        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	//조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("ID_RESIDENT", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("YY_BASE", "string");
        	this.dsSelect.addColumn("MM_BASE", "string");
        	this.dsSelect.addColumn("NO_APPLY", "int");
        	this.dsSelect.addColumn("YN_MID", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");

        	//입력
        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("YY_BASE", "string");
        	this.dsInsert.addColumn("MM_BASE", "string");
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("ID_RESIDENT", "string");
        	this.dsInsert.addColumn("YN_MID", "string");
        	this.dsInsert.addColumn("ID_SABUN", "string");
        	this.dsInsert.addColumn("ID_RESIDENT_FAMILY", "string");
        	this.dsInsert.addColumn("DS_NAME", "string");
        	this.dsInsert.addColumn("YN_NTS", "string");
        	this.dsInsert.addColumn("CD_MEDICAL", "string");
        	this.dsInsert.addColumn("DS_MEDICAL", "string");
        	this.dsInsert.addColumn("NO_CARD", "bigdecimal");
        	this.dsInsert.addColumn("AM_CARD", "bigdecimal");
        	this.dsInsert.addColumn("NO_CASH", "bigdecimal");
        	this.dsInsert.addColumn("AM_LOSS", "bigdecimal");
        	this.dsInsert.addColumn("YN_GLASSES", "string");
        	this.dsInsert.addColumn("YN_HANDICAP", "string");
        	this.dsInsert.addColumn("CD_RECEIPT", "string");
        	this.dsInsert.addColumn("YN_NANIM", "string");
        	this.dsInsert.addColumn("YN_SAN", "string");
        	this.dsInsert.addColumn("YN_POST", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");


        	//수정
        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("YN_MID", "string");
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("ID_RESIDENT", "string");
        	this.dsUpdate.addColumn("ID_SABUN", "string");
        	this.dsUpdate.addColumn("YY_BASE", "string");
        	this.dsUpdate.addColumn("MM_BASE", "string");
        	this.dsUpdate.addColumn("ID_RESIDENT_FAMILY", "string");
        	this.dsUpdate.addColumn("CD_MEDICAL", "string");
        	this.dsUpdate.addColumn("CD_MEDICAL_HID", "string");
        	this.dsUpdate.addColumn("DS_MEDICAL", "string");
        	this.dsUpdate.addColumn("NO_CARD", "bigdecimal");
        	this.dsUpdate.addColumn("AM_CARD", "bigdecimal");
        	this.dsUpdate.addColumn("YN_NTS", "string");
        	this.dsUpdate.addColumn("YN_NTS_HID", "string");
        	this.dsUpdate.addColumn("AM_LOSS", "string");
        	this.dsUpdate.addColumn("YN_GLASSES", "string");
        	this.dsUpdate.addColumn("YN_HANDICAP", "string");
        	this.dsUpdate.addColumn("CD_RECEIPT", "string");
        	this.dsUpdate.addColumn("CD_RECEIPT_HID", "string");
        	this.dsUpdate.addColumn("YN_NANIM", "string");
        	this.dsUpdate.addColumn("YN_NANIM_HID", "string");
        	this.dsUpdate.addColumn("YN_SAN", "string");
        	this.dsUpdate.addColumn("YN_POST", "string");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");

        	//삭제
        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("YN_MID", "string");
        	this.dsDelete.addColumn("CD_CORP", "string");
        	this.dsDelete.addColumn("ID_RESIDENT", "string");
        	this.dsDelete.addColumn("ID_SABUN", "string");
        	this.dsDelete.addColumn("ID_RESIDENT_FAMILY", "string");
        	this.dsDelete.addColumn("YY_BASE", "string");
        	this.dsDelete.addColumn("MM_BASE", "string");
        	this.dsDelete.addColumn("CD_MEDICAL", "string");
        	this.dsDelete.addColumn("CD_RECEIPT", "string");
        	this.dsDelete.addColumn("ID_UPDATE", "string");

        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("CD_CORP", "string");
        	this.dsReport.addColumn("ID_RESIDENT", "string");
        	this.dsReport.addColumn("ID_SABUN", "string");
        	this.dsReport.addColumn("YY_BASE", "string");
        	this.dsReport.addColumn("MM_BASE", "string");
        	this.dsReport.addColumn("YN_MID", "string");
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
        	this.dsSelect.setColumn(0, "NO_APPLY", 1);
        	this.dsSelect.setColumn(0, "YN_MID", this.cboYN_MID.value);
        	this.dsSelect.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect closeCheck=dsSelect";
        	var outData     = "dsList=select0 dsYnClose=closeCheck0";
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

        	//this.dsList.setColumn(nrow, "YN_HANDICAP", "N"); //장애여부
        	this.dsList.setColumn(nrow, "YN_GLASSES", "N"); //안경
        	this.dsList.setColumn(nrow, "YN_NANIM", "N"); //난임시술비여부
        	this.dsList.setColumn(nrow, "YN_SAN", "N"); //산정특례자여부
        	this.dsList.setColumn(nrow, "YN_POST", "N"); //산후조리비용여부
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
        				this.dsInsert.setColumn(nrow, "ID_SABUN", this.edtID_SABUN.value);
        				this.dsInsert.setColumn(nrow, "ID_RESIDENT_FAMILY", this.dsList.getColumn(i, "ID_RESIDENT_FAMILY").replace(/-/g,""));
        				this.dsInsert.setColumn(nrow, "DS_NAME", this.dsList.getColumn(i, "DS_NAME"));
        				this.dsInsert.setColumn(nrow, "YN_NTS", this.dsList.getColumn(i, "YN_NTS"));
        				this.dsInsert.setColumn(nrow, "CD_MEDICAL", this.dsList.getColumn(i, "CD_MEDICAL").replace(/-/g,""));
        				this.dsInsert.setColumn(nrow, "DS_MEDICAL", this.dsList.getColumn(i, "DS_MEDICAL"));
        				this.dsInsert.setColumn(nrow, "NO_CARD", this.dsList.getColumn(i, "NO_CARD"));
        				this.dsInsert.setColumn(nrow, "AM_CARD", this.dsList.getColumn(i, "AM_CARD"));
        				this.dsInsert.setColumn(nrow, "NO_CASH", this.dsList.getColumn(i, "NO_CASH"));
        				this.dsInsert.setColumn(nrow, "AM_LOSS", this.dsList.getColumn(i, "AM_LOSS"));
        				this.dsInsert.setColumn(nrow, "YN_GLASSES", this.dsList.getColumn(i, "YN_GLASSES"));
        				this.dsInsert.setColumn(nrow, "YN_HANDICAP", this.dsList.getColumn(i, "YN_HANDICAP"));
        				this.dsInsert.setColumn(nrow, "CD_RECEIPT", this.dsList.getColumn(i, "CD_RECEIPT"));
        				this.dsInsert.setColumn(nrow, "YN_NANIM", this.dsList.getColumn(i, "YN_NANIM"));
        				this.dsInsert.setColumn(nrow, "YN_SAN", this.dsList.getColumn(i, "YN_SAN"));
        				this.dsInsert.setColumn(nrow, "YN_POST", this.dsList.getColumn(i, "YN_POST"));
        				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();

        				this.dsUpdate.setColumn(nrow, "YN_MID", this.cboYN_MID.value);
        				this.dsUpdate.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        				this.dsUpdate.setColumn(nrow, "ID_RESIDENT", this.ccfID_RESIDENT.form.CDTextBox.value.replace(/-/g,""));
        				this.dsUpdate.setColumn(nrow, "ID_SABUN", this.edtID_SABUN.value);
        				this.dsUpdate.setColumn(nrow, "YY_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(0,4):this.ctclWORK_BASE.form.TextBox.value);
        				this.dsUpdate.setColumn(nrow, "MM_BASE",  this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(4,6):"12");
        				this.dsUpdate.setColumn(nrow, "ID_RESIDENT_FAMILY", this.dsList.getColumn(i, "ID_RESIDENT_FAMILY").replace(/-/g,""));
        		        this.dsUpdate.setColumn(nrow, "CD_MEDICAL", this.dsList.getColumn(i, "CD_MEDICAL").replace(/-/g,""));
        				this.dsUpdate.setColumn(nrow, "CD_MEDICAL_HID", this.dsList.getColumn(i, "CD_MEDICAL_HID"));
        				this.dsUpdate.setColumn(nrow, "DS_MEDICAL", this.dsList.getColumn(i, "DS_MEDICAL"));
        				this.dsUpdate.setColumn(nrow, "NO_CARD", this.dsList.getColumn(i, "NO_CARD"));
        				this.dsUpdate.setColumn(nrow, "AM_CARD", this.dsList.getColumn(i, "AM_CARD"));
        				this.dsUpdate.setColumn(nrow, "YN_NTS", this.dsList.getColumn(i, "YN_NTS"));
        				this.dsUpdate.setColumn(nrow, "YN_NTS_HID", this.dsList.getColumn(i, "YN_NTS_HID"));
        				this.dsUpdate.setColumn(nrow, "AM_LOSS", this.dsList.getColumn(i, "AM_LOSS"));
        				this.dsUpdate.setColumn(nrow, "YN_GLASSES", this.dsList.getColumn(i, "YN_GLASSES"));
        				this.dsUpdate.setColumn(nrow, "YN_HANDICAP", this.dsList.getColumn(i, "YN_HANDICAP"));
        				this.dsUpdate.setColumn(nrow, "CD_RECEIPT", this.dsList.getColumn(i, "CD_RECEIPT"));
        				this.dsUpdate.setColumn(nrow, "CD_RECEIPT_HID", this.dsList.getColumn(i, "CD_RECEIPT_HID"));
        				this.dsUpdate.setColumn(nrow, "YN_NANIM", this.dsList.getColumn(i, "YN_NANIM"));
        				this.dsUpdate.setColumn(nrow, "YN_NANIM_HID", this.dsList.getColumn(i, "YN_NANIM_HID"));
        				this.dsUpdate.setColumn(nrow, "YN_SAN", this.dsList.getColumn(i, "YN_SAN"));
        				this.dsUpdate.setColumn(nrow, "YN_POST", this.dsList.getColumn(i, "YN_POST"));
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE",this.AuthClient.ID_USER);
        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();

        				this.dsDelete.setColumn(nrow, "YN_MID", this.dsList.getColumn(i, "YN_MID"));
        				this.dsDelete.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsDelete.setColumn(nrow, "ID_RESIDENT", this.ccfID_RESIDENT.form.CDTextBox.value.replace(/-/g,""));
        				this.dsDelete.setColumn(nrow, "ID_SABUN", this.edtID_SABUN.value);
        				this.dsDelete.setColumn(nrow, "ID_RESIDENT_FAMILY", this.dsList.getColumn(i, "ID_RESIDENT_FAMILY").replace(/-/g,""));
        				this.dsDelete.setColumn(nrow, "YY_BASE", this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(0,4):this.ctclWORK_BASE.form.TextBox.value);
        				this.dsDelete.setColumn(nrow, "MM_BASE",  this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(4,6):"12");
        				this.dsDelete.setColumn(nrow, "CD_MEDICAL", this.dsList.getColumn(i, "CD_MEDICAL").replace(/-/g,""));
        				this.dsDelete.setColumn(nrow, "CD_RECEIPT", this.dsList.getColumn(i, "CD_RECEIPT"));
        				this.dsDelete.setColumn(nrow, "ID_UPDATE",this.AuthClient.ID_USER);

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
        	var nrow = this.dsReport.addRow();

        	this.dsReport.setColumn(0, "CD_CORP", 		this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsReport.setColumn(0, "ID_RESIDENT",	this.ccfID_RESIDENT.form.CDTextBox.value.replace(/-/g,""));
        	this.dsReport.setColumn(0, "ID_SABUN", 		this.edtID_SABUN.value);
        	this.dsReport.setColumn(0, "YY_BASE", 		this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(0,4):this.ctclWORK_BASE.form.TextBox.value);
        	this.dsReport.setColumn(0, "MM_BASE", 		this.cboYN_MID.value=="Y"?this.ctclWORK_BASE.form.TextBox.value.substring(4,6):"12");
        	this.dsReport.setColumn(0, "YN_MID",		this.cboYN_MID.value);

        	trace("callType", callType);

        	if(callType == "S"){
        		var strSvcId    = "report";
        		var strSvcType  = "select";
        		var inProc		= "_dsProc";
        		var inData      = "report=dsReport report2010Sub1=dsReport report2010Sub2=dsReport";
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
        		var inData      = "report=dsReport report2010Sub1=dsReport report2010Sub2=dsReport";						// target=파라미터 Ds
        		var reportpath  = "/da/dav/DAV_MEDICALSUBST.ozr";
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

        	//주민등록번호
        	if (this.gfnIsNull(this.ccfID_RESIDENT.form.CDTextBox.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfID_RESIDENT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("주민등록번호를 입력하세요.", "fnVaidateCallback");
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
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.fnSetButton();

        // 		if(this.dsYnClose.getColumn(0, "YEAREND_CLOSE") != "N" && this.dsYnClose.getColumn(0, "YN_CLOSE") != "N"){
        //
        // 			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","ID_RESIDENT_FAMILY"),"edittype","none");
        // 			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","DS_NAME"),"edittype","none");
        // 			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","YN_HANDICAP"),"edittype","none");
        // 			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","CD_MEDICAL"),"edittype","none");
        // 			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","DS_MEDICAL"),"edittype","none");
        // 			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","NO_CARD"),"edittype","none");
        // 			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","AM_CARD"),"edittype","none");
        // 			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","AM_LOSS"),"edittype","none");
        // 			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","YN_GLASSES"),"edittype","none");
        // 			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","CD_RECEIPT"),"edittype","none");
        // 			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","YN_NANIM"),"edittype","none");
        // 			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","YN_SAN"),"edittype","none");
        // 			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","YN_POST"),"edittype","none");
        // 			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","YN_NTS"),"edittype","none");
        //
        // 			this.FormBtns.Add.set_enable(false);
        // 			this.FormBtns.Del.set_enable(false);
        // 			this.FormBtns.Save.set_enable(false);
        // 			this.FormBtns.Reset.set_enable(false);
        // 			this.FormBtns.Excel.set_enable(false);
        // 			this.FormBtns.Print.set_enable(false);
        //
        // 		}
        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
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
         //CD_RECEIPT가 5일 때 사업자등록번호 유효성 체크
        this.gfValidate = function ()
        {
        	var colCD_MEDICAL = this.dxGrid.getBindCellIndex("body", "CD_MEDICAL");
        	var headText   = this.dxGrid.getCellProperty("head" , colCD_MEDICAL, "text");

        	for(var i=0;i<this.dsList.rowcount;i++){
        		if(this.dsList.getColumn(i, this.ucFlag) == "I" || this.dsList.getColumn(i, this.ucFlag) == "U"){
        			if(this.dsList.getColumn(i, "CD_RECEIPT") == "5"){

        				var cdMedical = nexacro.replaceAll(this.gfnTrim(this.gfnNvl(this.dsList.getColumn(i, "CD_MEDICAL"),"")), "-", "");

        				if(!this.gfnIsBzIdNo(cdMedical)){
        					this.gfnAlert((i + 1) +"열: ["+headText+"]가 유효하지 않습니다.");
        					this.dsList.set_rowposition(i);
        					this.dxGrid.setCellPos(colCD_MEDICAL);
        					return false;
        				}
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
        // 	trace(this.dsYnClose.getColumn(0, "YEAREND_CLOSE"));
        // 	if(this.dsYnClose.getColumn(0, "YEAREND_CLOSE") == "Y"){
        // 		if(colnm == "ID_RESIDENT_FAMILY"){
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

        this.fnIsChangePossible = function(){
        	var bPossible = false;

        	var YEAREND_CLOSE = this.dsYnClose.getColumn(0, "YEAREND_CLOSE");
        	var YN_CLOSE = this.dsYnClose.getColumn(0, "YN_CLOSE");

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
        this.loadIncludeScript("DAV_MEDICALSUBST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
