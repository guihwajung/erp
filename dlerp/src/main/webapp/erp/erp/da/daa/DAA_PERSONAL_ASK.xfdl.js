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
            this.set_titletext("개인정보변경 신청");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAAPR_FAM_ASK_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAAPR_FAM_ASK_SAVE</Col></Row><Row><Col id=\"TARGET\">select_Licnse_Ask</Col><Col id=\"SP\">DAAPR_LIC_ASK_SELECT</Col></Row><Row><Col id=\"TARGET\">select_School_Ask</Col><Col id=\"SP\">DAAPR_SCH_ASK_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProcLic", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAAPR_LIC_ASK_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProcSch", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAAPR_SCH_ASK_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutLicList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutSchList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsSPChgAsk", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DAAPR_PERSONAL_ASK</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeleteFile", this);
            obj._setContents("<ColumnInfo><Column id=\"filepath\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("ccfCorpCD_CORP","0.0","10.0","66.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","0.0","ccfCorpCD_CORP:10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("onitemchanged").set("fnSearchInit");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","ccfCD_CORP:0.0","ccfCorpCD_CORP:10.0","180","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("onitemchanged").set("fnSearchInit");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","ccfID_SABUN:0.0","ccfCorpCD_CORP:10.0","66.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtID_PERSON","0.0","10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","0",null,"22","210",null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_text("가족정보");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60","22","137",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("추가");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"0","60","22","74",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("삭제");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"0","60","22","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("저장");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta00:5",null,"190","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","objGrid:15",null,"22","210",null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_text("자격정보");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnLic_Add",null,"objGrid:15","60","22","140",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("추가");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnLic_Del",null,"objGrid:15","60","22","77",null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("삭제");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnLic_Save",null,"objGrid:15","60","22","13",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("저장");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridLic","0","sta01:5",null,"190","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","objGridLic:15",null,"22","210",null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_text("학력정보");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSch_Add",null,"objGridLic:15","60","22","140",null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("추가");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSch_Del",null,"objGridLic:15","60","22","77",null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("삭제");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSch_Save",null,"objGridLic:15","60","22","13",null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("저장");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridSchool","0","sta02:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
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
        this.registerScript("DAA_PERSONAL_ASK.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.filepath = "DA/DAA_FAMILY/";
        this.fileuploads = {};
        this.filecnt = 0;

        this.filepathLic = "DA/DAA_LICENSE/";
        this.fileuploadsLic = {};
        this.filecntLic = 0;

        this.filepathSch = "DA/DAA_SCHOOLCARRER/";
        this.fileuploadsSch = {};
        this.filecntSch = 0;

        this.id = 0;



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

        	// 파일설정
        	this.fileConfig = this.gfnGetFileConfig();
        	this.fileConfig.uploadUrl = this.fileConfig.uploadUrl.replace("path=", "path=" + this.filepath);
        	this.fileConfig.downloadUrl = this.fileConfig.downloadUrl.replace("path=", "path=" + this.filepath);

        	this.fileConfigLic = this.gfnGetFileConfig();
        	this.fileConfigLic.uploadUrl = this.fileConfigLic.uploadUrl.replace("path=", "path=" + this.filepathLic);
        	this.fileConfigLic.downloadUrl = this.fileConfigLic.downloadUrl.replace("path=", "path=" + this.filepathLic);

        	this.fileConfigSch = this.gfnGetFileConfig();
        	this.fileConfigSch.uploadUrl = this.fileConfigSch.uploadUrl.replace("path=", "path=" + this.filepathSch);
        	this.fileConfigSch.downloadUrl = this.fileConfigSch.downloadUrl.replace("path=", "path=" + this.filepathSch);

        	this.fnReset();

        	//this.ccfCD_CORP.set_enable(false);
        	//this.ccfID_SABUN.set_enable(false);
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Save.set_enable(false);
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Reset.set_enable(true);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnChangeAsk = this.gfnFormButtonAdd("btnChangeAsk", "fnChangeAsk", "변경요청");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;			// 법인코드
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;         // 사번

        	this.calDtFromAppr = this.divSearch.form.calDtFromAppr;     // 기간 from
            this.calDtToAppr = this.divSearch.form.calDtToAppr;         // 기간 to
        	this.ccfOrderUpperDeptCd = this.divSearch.form.ccfOrderUpperDeptCd;  //발령대분류
        	this.ccfOrderBefccfCD_DEPT = this.divSearch.form.ccfOrderBefccfCD_DEPT;  //발령전부서
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;   //부서코드
        	this.txtID_PERSON = this.divSearch.form.txtID_PERSON;

        	// 그리드변수 세팅
        	this.dxGrid = this.divData.form.objGrid;  // 그리드
        	this.dxGridLic = this.divData.form.objGridLic; //자격그리드
        	this.dxGridSch = this.divData.form.objGridSchool; //학력그리드

        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

          	this.ccfCD_CORP.CodeFindName = "DAX_CFCORP";  //법인코드
        	this.ccfCD_CORP.AfterCDTextChanged = "codefind_AfterCDTextChanged";

        	this.ccfID_SABUN.CodeFindName = "DAX_CFBASEINFO_ALL"; //성명 코드파인드
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "codefind_AfterCDTextChanged";

        	// 그리드세팅
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAA_FAMILY_ASK"); //가족
        	this.gfnGridInit(this.dxGridLic, this.dsOutLicList, "DA", "DAA_LICENSE_ASK"); //자격정보
        	this.gfnGridInit(this.dxGridSch, this.dsOutSchList, "DA", "DAA_SCHOOLCAREER_ASK"); //학력

        	//그리드 이벤트(가족)
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";  // 코드파인더 연동
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
            this.dxGrid.EnterCell = "fnGrid_EnterCell1";
        	this.dxGrid.ExpandUp = "fnGrid_ExpandUp1";
        	this.dxGrid.addEventHandler("oncelldblclick", this.fnGrid_CellDblclick, this);

            //그리드 이벤트(자격)
        	this.dxGridLic.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";  // 코드파인더 연동
        	this.dxGridLic.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        	this.dxGridLic.EnterCell = "fnGrid_EnterCell2";
        	this.dxGridLic.ExpandUp = "fnGrid_ExpandUp2";

        	//그리드 이벤트(학력)
        	this.dxGridSch.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";  // 학력 코드파인더 연동
        	this.dxGridSch.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        	this.dxGridSch.EnterCell = "fnGrid_EnterCell3";
        	this.dxGridSch.ExpandUp = "fnGrid_ExpandUp3";

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	/*** 가족정보 ****/
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("ID_PERSON", "string");  //PERSON ID
        	this.dsSelect.addColumn("CD_CORP", "string"); // 법인코드
        	this.dsSelect.addColumn("ID_SABUN", "string");  // 사원번호

        	this.dsSave = new Dataset();
            this.dsSave.addColumn("NO_SEQ","bigdecimal");// 순번
        	this.dsSave.addColumn("NO_SEQ_ORG","bigdecimal");
            this.dsSave.addColumn("TY_SAVE","string");//저장 I:입력 U:수정 D:삭제
            this.dsSave.addColumn("ID_PERSON","bigdecimal");//PERSON ID
        	this.dsSave.addColumn("CD_CORP","string");//법인코드
            this.dsSave.addColumn("ID_SABUN","string");//사번
            this.dsSave.addColumn("TY_GUBUN","string");//구분 [N:현재|C:변경|A:추가 ]
            this.dsSave.addColumn("CD_FAMILY","string");//가족코드
            this.dsSave.addColumn("DS_HNAME","string");//이름
            this.dsSave.addColumn("ID_RESIDENT","string");//주민번호
            this.dsSave.addColumn("YN_BASE","string");//기본공제
            this.dsSave.addColumn("YN_HANDICAP","string");//장애여부
            this.dsSave.addColumn("YN_FOREIGNER","string");//외국인여부
        	this.dsSave.addColumn("DS_REMARK","string");//비고
        	this.dsSave.addColumn("DS_JOB","string");//직업
            this.dsSave.addColumn("NM_FILE","string");//첨부파일
            this.dsSave.addColumn("DS_PATH","string");//파일경로
        	this.dsSave.addColumn("ID_INSERT","string");

        	/*** 자격정보 ****/
        	this.dsSaveLic = new Dataset(); //DAAPR_FAMILY_SAVE
        	this.dsSaveLic.addColumn("TY_SAVE","string");
        	this.dsSaveLic.addColumn("ID_PERSON", "bigdecimal");
        	this.dsSaveLic.addColumn("CD_CORP", "string");
        	this.dsSaveLic.addColumn("DS_CORP", "string");
        	this.dsSaveLic.addColumn("ID_SABUN", "string");
        	this.dsSaveLic.addColumn("DS_HNAME", "string");
        	this.dsSaveLic.addColumn("NO_SEQ", "bigdecimal");
        	this.dsSaveLic.addColumn("NO_SEQ_ORG", "bigdecimal");
        	this.dsSaveLic.addColumn("TY_GUBUN", "string");
            this.dsSaveLic.addColumn("CD_LICENSE", "string");
        	this.dsSaveLic.addColumn("DS_LICENSE","string");
        	this.dsSaveLic.addColumn("NO_LICENSE","string");
        	this.dsSaveLic.addColumn("DT_ACQUIRE","string");
            this.dsSaveLic.addColumn("DS_ORGAN","string");
        	this.dsSaveLic.addColumn("DT_EXPIRE","string");
        	this.dsSaveLic.addColumn("CD_LEVEL","string");
        	this.dsSaveLic.addColumn("DS_LEVEL", "string");
            this.dsSaveLic.addColumn("NM_FILE","string");
            this.dsSaveLic.addColumn("DS_PATH","string");
            this.dsSaveLic.addColumn("DS_REMARK","string");
        	this.dsSaveLic.addColumn("TY_STATUS","string");
        	this.dsSaveLic.addColumn("ID_INSERT","string");

        	/*** 학력정보 ****/
        	this.dsSaveSch = new Dataset(); //DAAPR_FAMILY_SAVE
        	this.dsSaveSch.addColumn("TY_SAVE","string");	//저장 I:입력 U:수정 D:삭제
        	this.dsSaveSch.addColumn("ID_PERSON","bigdecimal");
        	this.dsSaveSch.addColumn("NO_SEQ","bigdecimal");
        	this.dsSaveSch.addColumn("NO_SEQ_ORG","bigdecimal");
        	this.dsSaveSch.addColumn("CD_CORP", "string");
        	this.dsSaveSch.addColumn("DS_CORP", "string");
        	this.dsSaveSch.addColumn("ID_SABUN", "string");
        	this.dsSaveSch.addColumn("DS_HNAME", "string");
        	this.dsSaveSch.addColumn("TY_GUBUN", "string");
        	this.dsSaveSch.addColumn("CD_LEVEL", "string");
        	this.dsSaveSch.addColumn("DS_LEVEL", "string");
        	this.dsSaveSch.addColumn("CD_SCHOOL", "string");
            this.dsSaveSch.addColumn("DS_SCHOOL", "string");
        	this.dsSaveSch.addColumn("CD_GRADUATION", "string");
        	this.dsSaveSch.addColumn("DS_GRADUATION", "string");
         	this.dsSaveSch.addColumn("DT_SCHOOLFROM","string");
            this.dsSaveSch.addColumn("DT_SCHOOLTO","string");
            this.dsSaveSch.addColumn("CD_MAJOR","string");
        	this.dsSaveSch.addColumn("DS_MAJOR","string");
            this.dsSaveSch.addColumn("CD_DEGREE","string");
        	this.dsSaveSch.addColumn("DS_DEGREE","string");
        	this.dsSaveSch.addColumn("CD_DOUBLE_MAJOR","string");
        	this.dsSaveSch.addColumn("DS_DOUBLE_MAJOR","string");
            this.dsSaveSch.addColumn("NM_FILE","string");
        	this.dsSaveSch.addColumn("DS_PATH","string");
        	this.dsSaveSch.addColumn("DS_REMARK","string");
        	this.dsSaveSch.addColumn("TY_STATUS", "string");
        	this.dsSaveSch.addColumn("ID_INSERT","string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	if (!this.fnSelectValidate()) return false;

        	this.fileuploads = {}
        	this.fileuploadsLic = {}
        	this.fileuploadsSch = {}

        	this.gfnGridBeforeSelect(this.dxGrid);
        	this.gfnGridBeforeSelect(this.dxGridLic);
        	this.gfnGridBeforeSelect(this.dxGridSch);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "ID_PERSON", this.txtID_PERSON.value);
        	this.dsSelect.setColumn(0, "CD_CORP" , this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)==true?"%":this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "ID_SABUN", this.ccfID_SABUN.form.CDTextBox.value);


        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect select_Licnse_Ask=dsSelect select_School_Ask=dsSelect";
        	var outData     = "dsList=select0 dsOutLicList=select_Licnse_Ask0 dsOutSchList=select_School_Ask0";
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
         *	입력 버튼
         */
        this.fnAdd = function() {

        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {

        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {


        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        };
        /*
         *	리셋 버튼
         */
        this.fnReset = function() {
        	trace("ID_PERSON->" + this.AuthClient.ID_PERSON);
        	trace("GR_SEARCH->" + this.FormInfo.GR_SEARCH);

        	if (this.FormInfo.GR_SEARCH == "1") { // 관리자 일 때
         		this.ccfCD_CORP.form.CDTextBox.set_value("");
         		this.ccfCD_CORP.form.DSTextBox.set_value("");
         		this.ccfID_SABUN.form.CDTextBox.set_value("");
         		this.ccfID_SABUN.form.DSTextBox.set_value("");
        	} else if(this.FormInfo.GR_SEARCH != "1" && this.gfnIsNull(this.AuthClient.ID_PERSON)){ // 임직원이 아닐 때
        		this.gfnAlert("개인정보변경 신청 대상자가 아닙니다.");

        		this.ccfID_SABUN.set_enableevent(false);
        		this.ccfID_SABUN.set_enable(false);

        	    this.ccfID_SABUN.form.CDTextBox.set_value(this.AuthClient.ID_USER);
                this.ccfID_SABUN.form.DSTextBox.set_value(this.AuthClient.DS_HNAME);

        		this.FormBtns.Select.set_enable(false);
        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Del.set_enable(false);
        		this.FormBtns.Reset.set_enable(false);
        		this.dxGrid.setFocus();

        		// 작업버튼 비활성화
        		this.divData.form.btnAdd.set_enable(false);
        		this.divData.form.btnDel.set_enable(false);
        		this.divData.form.btnSave.set_enable(false);

        		this.divData.form.btnLic_Add.set_enable(false);
        		this.divData.form.btnLic_Del.set_enable(false);
        		this.divData.form.btnLic_Save.set_enable(false);

        		this.divData.form.btnSch_Add.set_enable(false);
        		this.divData.form.btnSch_Del.set_enable(false);
        		this.divData.form.btnSch_Save.set_enable(false);

        		this.btnChangeAsk.set_enable(false);

        		this.ccfCD_CORP.set_enable(false);
        		this.ccfID_SABUN.set_enable(false);

        		return;

        	} else if(this.FormInfo.GR_SEARCH != "1" && !this.gfnIsNull(this.AuthClient.ID_PERSON)){ //관리자 아니고 직원일때
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
                this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ccfID_SABUN.form.CDTextBox.set_value(this.AuthClient.ID_USER);
                this.ccfID_SABUN.form.DSTextBox.set_value(this.AuthClient.DS_HNAME);
        		this.txtID_PERSON.set_value(this.AuthClient.ID_PERSON);
        		this.ccfCD_CORP.set_enable(false);
        		this.ccfID_SABUN.set_enable(false);

        		this.FormBtns.Select.click();
        	}

        	this.fnSearchInit();
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */

        this.fnSelectValidate = function() {

            cd_corp = this.ccfCD_CORP.form.CDTextBox.value;
            cd_sabun = this.ccfID_SABUN.form.CDTextBox.value;

        // 	if (this.gfnIsNull(cd_corp)) {
        // 		this.gfnAlert("법인코드가 입력되지 않았습니다.");
        // 		this.ccfCorpCd.form.CDTextBox.setFocus();
        // 		return false;
        // 	}
        	if (this.gfnIsNull(cd_sabun)) {
        		this.gfnAlert("사번이 입력되지 않았습니다.");
        		this.ccfID_SABUN.form.CDTextBox.setFocus();
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
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		if (this.dsList.rowcount > 0) {
        			this.dsList.set_rowposition(0);
        		}
        		this.fnSetButton();
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.gfnAlert('개인정보가 저장되었습니다. 변경요청을 하시려면 우측상단의 [변경요청]버튼을 눌러주세요.');
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "save_sp") {
        	  this.gfnAlert('변경요청이 완료되었습니다.');
        	  this.FormBtns.Select.click();
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	switch(id) {
        	case "ccfCD_CORP": // 법인코드
        		break;
        	 case "ccfID_SABUN" :
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)==true?"%":this.ccfCD_CORP.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "");
        		dsUserParam.setColumn(nrow, "YN_CORP", "");
        	 break;
        	default:
        	}
        	return true;
        }

        this.codefind_AfterCDTextChanged = function(id,codeFindData) {
           	if(id == "ccfID_SABUN") {
        		//ID_PERSON 값 바인딩
        		var arr = codeFindData;
        		if(arr.length > 0) {
        			this.txtID_PERSON.set_value(arr[0]["ID_PERSON"]);
        			this.ccfCD_CORP.form.CDTextBox.set_value(arr[0]["CD_CORP"]);
        			this.ccfCD_CORP.form.DSTextBox.set_value(arr[0]["DS_CORP"]);
        		}else{
        			this.txtID_PERSON.set_value("");
        			this.ccfCD_CORP.form.CDTextBox.set_value("");
        			this.ccfCD_CORP.form.DSTextBox.set_value("");
        		}
        	}
        	this.fnSearchInit();
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow) {
        	switch(id) {
        	    case 'FA':
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "FA");
        			break;
        		case "EC":
        			 dsUserParam.setColumn(nrow, "CD_PREFIX", "EC");
        			break;
        		//자격
        		case "LIC":
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "LA");
        			break;
        		//학력
        		case "SA2":
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "SA");
        			break;
        		case "SD":    //학교
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "SD");
        			break;
        		case "SB":   //졸업구분
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "SB");
        			break;
        		case "SE":   //전공코드
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "SE");
        			break;
        		case "SC":   //학위
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "SC");
        			break;
        		case "SE2":  //복수전공
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "SE");
        			break;

        		default:
        		}
        		return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {

        	trace("fnGrid_AfterCDTextChanged id-> " + id );

        	switch(id) {
        		case "LIC":	//자격
        			this.dsOutLicList.setColumn(this.dxGridLic.currentrow, "DS_LICENSE_ETC", "");
        			break;
        		case "SD":    //학교
        			this.dsOutSchList.setColumn(this.dxGridSch.currentrow, "DS_SCHOOL_ETC", "");
        			break;
        		case "SE":   //전공코드
        			this.dsOutSchList.setColumn(this.dxGridSch.currentrow, "DS_MAJOR_ETC", "");
        			break;
        		case "SE2":  //복수전공
        			this.dsOutSchList.setColumn(this.dxGridSch.currentrow, "DS_DOUBLE_MAJOR_ETC", "");
        			break;

        		case "DAX_CFCOMMONCODE":  //전공
        			break;
        		default:
        	}
        	return true;
        };

        // 가족정보 : 삭제요청인 경우 수정불가능
        this.fnGrid_EnterCell1 = function(obj, row, cell)
        {
        	if(this.dsList.getColumn(row, "TY_GUBUN") == "D"){
        		return false;
        	}
        }

        // 자격정보 : 삭제요청인 경우 수정불가능
        this.fnGrid_EnterCell2 = function(obj, row, cell){
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);
        	var objDs = obj.getBindDataset();

        	if(this.dsOutLicList.getColumn(row, "TY_GUBUN") == "D"){
        		return false;
        	}
        	var CD_LICENSE = objDs.getColumn(row,"CD_LICENSE");
        	if(CD_LICENSE != "1671" && colnm == "DS_LICENSE_ETC") return false;
        }

        // 학력정보 : 삭제요청인 경우 수정불가능
        this.fnGrid_EnterCell3 = function(obj, row, cell){
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);
        	var objDs = obj.getBindDataset();
        	if(this.dsOutSchList.getColumn(row, "TY_GUBUN") == "D"){
        		return false;
        	}

        	var CD_SCHOOL = objDs.getColumn(row,"CD_SCHOOL");
        	var CD_MAJOR = objDs.getColumn(row,"CD_MAJOR");
        	var CD_DOUBLE_MAJOR = objDs.getColumn(row,"CD_DOUBLE_MAJOR");

        	if(CD_SCHOOL != "ZZ" && colnm == "DS_SCHOOL_ETC") return false;
        	if(CD_MAJOR != "ZZ" && colnm == "DS_MAJOR_ETC") return false;
        	if(CD_DOUBLE_MAJOR != "ZZ" && colnm == "DS_DOUBLE_MAJOR_ETC") return false;
        }

        // 가족정보 : 첨부파일
        this.fnGrid_ExpandUp1 = function(obj,e) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	if(colnm == "NM_FILE") {
        		var fileid = "fileup_"+e.row+"_"+this.id;
        		var fileup = new FileUpload();
        		fileup.init(fileid, 0,0,0,0);
        		if(this.lookup(fileid)) {
        			delete this.fileuploads[fileid];
        			this.removeChild(fileid);
        		}
        		this.addChild(fileid, fileup);
        		fileup.show();
        		fileup.row = e.row;
        		fileup.addEventHandler("onitemchanged", this.fileup_onitemchanged, this);
        		fileup.addEventHandler("onsuccess", this.fileup_onsuccess, this);
        		fileup.addEventHandler("onerror", this.fileup_onerror, this);

        		this.fileuploads[fileid] = fileup;
        		fileup.filefindbuttons.upfile0.click();

        		this.id++;
        	}
        }

        // 자격정보 : 첨부파일
        this.fnGrid_ExpandUp2 = function(obj,e) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	if(colnm == "NM_FILE") {
        		var fileid = "fileup_"+e.row+this.id;;
        		var fileup = new FileUpload();
        		fileup.init(fileid, 0,0,0,0);
        		if(this.lookup(fileid)) {
        			delete this.fileuploadsLic[fileid];
        			this.removeChild(fileid);
        		}
        		this.addChild(fileid, fileup);
        		fileup.show();
        		fileup.row = e.row;
        		fileup.addEventHandler("onitemchanged", this.fileup2_onitemchanged, this);
        		fileup.addEventHandler("onsuccess", this.fileup2_onsuccess, this);
        		fileup.addEventHandler("onerror", this.fileup2_onerror, this);

        		this.fileuploadsLic[fileid] = fileup;
        		fileup.filefindbuttons.upfile0.click();

        		this.id++;
        	}
        }

        // 학력정보 : 첨부파일
        this.fnGrid_ExpandUp3 = function(obj,e) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	if(colnm == "NM_FILE") {
        		var fileid = "fileup_"+e.row+this.id;;
        		var fileup = new FileUpload();
        		fileup.init(fileid, 0,0,0,0);
        		if(this.lookup(fileid)) {
        			delete this.fileuploadsSch[fileid];
        			this.removeChild(fileid);
        		}
        		this.addChild(fileid, fileup);
        		fileup.show();
        		fileup.row = e.row;
        		fileup.addEventHandler("onitemchanged", this.fileup3_onitemchanged, this);
        		fileup.addEventHandler("onsuccess", this.fileup3_onsuccess, this);
        		fileup.addEventHandler("onerror", this.fileup3_onerror, this);

        		this.fileuploadsSch[fileid] = fileup;
        		fileup.filefindbuttons.upfile0.click();

        		this.id++;
        	}
        }

        this.fileup_onitemchanged = function(obj,e) {
        	var row = obj.row;
        	if(obj.filelist.length > 0) {

        		var rowIdx = this.dsList.rowposition;
        		var key = this.dsList.getColumn(rowIdx, "ID_PERSON");
        		this.dsList.setColumn(row, "DS_PATH", this.filepath + key);
        		this.dsList.setColumn(row, "NM_FILE", obj.filelist[0].filename);
        	}
        }

        this.fileup_onsuccess = function(obj,e) {
        	this.filecnt += 1;
        	if(this.keys.length == this.filecnt) {
        		//this.fnSaveProc();
        	}
        }

        this.fileup_onerror = function(obj,e) {
        	this.filecnt += 1;
        	if(this.keys.length == this.filecnt) {
        		//this.fnSaveProc();
        	}
        }

        this.fileup2_onitemchanged = function(obj,e) {
        	var row = obj.row;
        	if(obj.filelist.length > 0) {
        		var key = this.dsOutLicList.getColumn(this.dsOutLicList.rowposition, "ID_PERSON");
        		this.dsOutLicList.setColumn(row, "DS_PATH", this.filepathLic + key);
        		this.dsOutLicList.setColumn(row, "NM_FILE", obj.filelist[0].filename);
        	}
        }

        this.fileup2_onsuccess = function(obj,e) {
        	this.filecntLic += 1;
        	if(this.keys2.length == this.filecntLic) {
        		//this.fnSaveProc();
        	}
        }

        this.fileup2_onerror = function(obj,e) {
        	this.filecntLic += 1;
        	if(this.keys2.length == this.filecntLic) {
        		//this.fnSaveProc();
        	}
        }

        this.fileup3_onitemchanged = function(obj,e) {
        	var row = obj.row;
        	if(obj.filelist.length > 0) {
        		var key = this.dsOutSchList.getColumn(this.dsOutSchList.rowposition, "ID_PERSON");
        		this.dsOutSchList.setColumn(row, "DS_PATH", this.filepathSch + key);
        		this.dsOutSchList.setColumn(row, "NM_FILE", obj.filelist[0].filename);
        	}
        }

        this.fileup3_onsuccess = function(obj,e) {
        	this.filecntSch += 1;
        	if(this.keys3.length == this.filecntSch) {
        		//this.fnSaveProc();
        	}
        }

        this.fileup3_onerror = function(obj,e) {
        	this.filecntSch += 1;
        	if(this.keys3.length == this.filecntSch) {
        		//this.fnSaveProc();
        	}
        }

        this.fnGrid_CellDblclick = function(obj,e)
        {
        	// 첨부파일 식대승인 DGB_FOODPAY 참고
        	var colId = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	var objDs = obj.getBindDataset();

        	switch(colId){
        		case "NM_FILE":	//파일 다운로드

        			this.fileConfig.downloadUrl = "/file/downloadFile.do";

        			// 파일경로
        			if (this.gfnIsNull(objDs.getColumn(e.row, "NM_FILE"))) { return false; }

        			var DS_FILE_PATH = objDs.getColumn(e.row, "DS_PATH");
        			if(this.gfnIsNull(DS_FILE_PATH)){
        				this.gfnAlert("첨부파일 경로 확인하세요");
        				return false;
        			}

        			var sFilename = objDs.getColumn(e.row, "NM_FILE");
        			var encodeFileName = encodeURIComponent(sFilename);

        			var svrPath = objDs.getColumn(e.row, "DS_PATH").replace(/\//g, "\\") + "\\";
        			var filePath = svrPath.replace(/\\\\/g, "\\");

        			var surl = this.fileConfig.host + this.fileConfig.downloadUrl;

        			// svrPath->DA\DAA_LICENSE\1237\
        			// surl->http://localhost:8080/file/downloadFile.do

        			this.FileDownTransfer00.set_url(surl);
        			this.FileDownTransfer00.setPostData("path", filePath);
        			this.FileDownTransfer00.setPostData("fileName", sFilename);

        			if( system.navigatorname =="nexacro"){
        				this.FileDownTransfer00.set_downloadfilename(sFilename);
        			}

        			this.FileDownTransfer00.download();

        		break;

        		default:
        	}

        	if(obj.id == "objGrid"){	// 가족정보
        	}
        	if(obj.id == "objGridLic"){	// 자격정보
        	}
        	if(obj.id == "objGridSchool"){	// 학력정보
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
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridLic);
        		this.gfnGridClear(this.dxGridSch);
        	}
        };


        // 변경요청
        this.fnChangeAsk = function(obj,e) {
        	if (this.gfnIsNull(this.ccfID_SABUN.form.CDTextBox.value)) {
        		this.gfnAlert("사번이 입력되지 않았습니다.");
        		this.ccfID_SABUN.form.CDTextBox.setFocus();
        		return false;
        	}

        	this.dsUpdateSP = new Dataset();
        	this.dsUpdateSP.addColumn("ID_PERSON","string");
        	this.dsUpdateSP.addColumn("ID_UPDATE","string");
        	this.dsUpdateSP.clearData();
            var nrow = this.dsUpdateSP.addRow();

            this.dsUpdateSP.setColumn(nrow,"ID_PERSON", this.txtID_PERSON.value); //PERSON ID
            this.dsUpdateSP.setColumn(nrow,"ID_UPDATE", this.AuthClient.ID_USER); //수정자

          	if (this.dsUpdateSP.rowcount == 0 ) return;

        	var strSvcId    = "save_sp";
        	var strSvcType  = "save";
        	var inProc		= "_dsSPChgAsk";
        	var inData      = "update=dsUpdateSP";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]


        }

        // 가족정보 : 입력
        this.divData_btnAdd_onclick = function(obj,e)
        {
        	var nrow = this.gfnGridAdd(this.dxGrid);
        	this.dsList.setColumn(nrow, "TY_GUBUN", "A");
        };
        // 가족정보 : 삭제
        this.divData_btnDel_onclick = function(obj,e)
        {

          var selRow = this.dxGrid.currentrow;
          var tyStatus = this.dsList.getColumn(selRow, "TY_STATUS");
          if (selRow > 0 && tyStatus == "3"){
        	this.gfnAlert(" 반려 및 취소 건은 삭제할 수 없습니다.");
            return;
          }

          this.gfnGridDel(this.dxGrid);
        };
        // 가족정보 : 저장
        this.divData_btnSave_onclick = function(obj,e)
        {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	// 파일저장
        	this.keys = Object.keys(this.fileuploads);
        	this.filecnt = 0;
        	if (this.keys.length > 0) {
        		for(var i = 0; i < this.keys.length; i++) {
        			var fileup = this.fileuploads[this.keys[i]];
        			var sFilePath = fileup.value;
        			var dirExpt = sFilePath.lastIndexOf("\\")+1;
        			var sFileName = sFilePath.substr(dirExpt);

        			var key = this.dsList.getColumn(this.dsList.rowposition, "ID_PERSON");
        			var sUploadUrl = this.fileConfig.host + this.fileConfig.uploadUrl + key;
        			trace(sUploadUrl);
        			fileup.upload(sUploadUrl);
        		}
        	}

        	this.dxGrid.updateToDataset();

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		var ty_gubun = this.dsList.getColumn(i,"TY_GUBUN");
        		switch(flag) {
        			case "I":
        			case "U":
        				var nrow = this.dsSave.addRow();
                        this.dsSave.setColumn(nrow,"TY_SAVE", flag);
        				this.dsSave.setColumn(nrow,"ID_PERSON", this.txtID_PERSON.value);
        				this.dsSave.setColumn(nrow,"NO_SEQ",this.dsList.getColumn(i,"NO_SEQ"));//순번
        				this.dsSave.setColumn(nrow,"NO_SEQ_ORG",this.dsList.getColumn(i,"NO_SEQ_ORG"));
        				this.dsSave.setColumn(nrow,"CD_CORP",this.ccfCD_CORP.form.CDTextBox.value);//법인코드
        				this.dsSave.setColumn(nrow,"ID_SABUN",this.ccfID_SABUN.form.CDTextBox.value);//사번
                        this.dsSave.setColumn(nrow,"DS_JOB",this.dsList.getColumn(i,"DS_JOB"));//직업
        				this.dsSave.setColumn(nrow,"TY_GUBUN",this.dsList.getColumn(i,"TY_GUBUN"));//구분[N:현재|C:변경|A:추가|D:삭제]
        				this.dsSave.setColumn(nrow,"CD_FAMILY",this.dsList.getColumn(i,"CD_FAMILY"));//가족코드
        				this.dsSave.setColumn(nrow,"DS_HNAME",this.dsList.getColumn(i,"DS_HNAME"));//이름
        				this.dsSave.setColumn(nrow,"ID_RESIDENT",this.dsList.getColumn(i,"ID_RESIDENT"));//주민번호
        				this.dsSave.setColumn(nrow,"YN_BASE",this.dsList.getColumn(i,"YN_BASE"));//기본공제
        				this.dsSave.setColumn(nrow,"YN_HANDICAP",this.dsList.getColumn(i,"YN_HANDICAP"));//장애여부
        				this.dsSave.setColumn(nrow,"YN_FOREIGNER",this.dsList.getColumn(i,"YN_FOREIGNER"));//외국인여부
        				this.dsSave.setColumn(nrow,"NM_FILE",this.dsList.getColumn(i,"NM_FILE"));//첨부파일
        				this.dsSave.setColumn(nrow,"DS_PATH",this.dsList.getColumn(i,"DS_PATH"));//파일경로
        				this.dsSave.setColumn(nrow,"DS_REMARK",this.dsList.getColumn(i,"DS_REMARK"));//비고
        				this.dsSave.setColumn(nrow,"ID_INSERT",this.AuthClient.ID_USER);
        				break;
        			case "D":
        				if (ty_gubun == "N") { this.fnDeleteValidate("N"); }
        				else { this.fnDeleteValidate("C"); };
        				break;
        		}

        	}

        	if (this.dsSave.rowcount == 0) return;

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
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        };
        this.fnDeleteValidate = function(ty_gubun) {
        	if (ty_gubun == "N") {
        	this.gfnConfirm("변경요청이 있는 경우 요청한 변경건은 삭제됩니다. \n계속 진행하시겠습니까?", "fnvalidate_callback");
        	} else {
        	this.gfnConfirm("요청건을 삭제하시겠습니까?", "fnvalidate_callback");
        	}
        }
        this.fnvalidate_callback = function(strId, val)
        {
        	if(val == true) {
        		// 파일저장
        		this.keys = Object.keys(this.fileuploads);
        		this.filecnt = 0;
        		if (this.keys.length > 0) {
        			for(var i = 0; i < this.keys.length; i++) {
        				var fileup = this.fileuploads[this.keys[i]];
        				var sFilePath = fileup.value;
        				var dirExpt = sFilePath.lastIndexOf("\\")+1;
        				var sFileName = sFilePath.substr(dirExpt);

        				var key = this.dsList.getColumn(this.dsList.rowposition, "ID_PERSON");
        				var sUploadUrl = this.fileConfig.host + this.fileConfig.uploadUrl + key;
        				trace(sUploadUrl);
        				fileup.upload(sUploadUrl);
        			}
        		}

        		this.dxGrid.updateToDataset();

        		this.dsSave.clearData();

        		for (var i = 0; i < this.dsList.rowcount; i++) {
        			var flag = this.gfnGetFlag(this.dsList, i);

        			var nrow = this.dsSave.addRow();
        			this.dsSave.setColumn(nrow,"TY_SAVE", flag);
        			this.dsSave.setColumn(nrow,"NO_SEQ",this.dsList.getColumn(i,"NO_SEQ"));//순번
        			this.dsSave.setColumn(nrow,"NO_SEQ_ORG",this.dsList.getColumn(i,"NO_SEQ_ORG"));
        			this.dsSave.setColumn(nrow,"ID_PERSON",this.dsList.getColumn(i,"ID_PERSON"));	//PERSONID
        			this.dsSave.setColumn(nrow,"CD_CORP",this.dsList.getColumn(i,"CD_CORP"));//법인코드
        			this.dsSave.setColumn(nrow,"ID_SABUN",this.dsList.getColumn(i,"ID_SABUN"));//사번
        			this.dsSave.setColumn(nrow,"DS_JOB",this.dsList.getColumn(i,"DS_JOB"));//직업
        			this.dsSave.setColumn(nrow,"TY_GUBUN",this.dsList.getColumn(i,"TY_GUBUN"));//구분[N:현재|C:변경|A:추가]
        			this.dsSave.setColumn(nrow,"CD_FAMILY",this.dsList.getColumn(i,"CD_FAMILY"));//가족코드
        			this.dsSave.setColumn(nrow,"DS_HNAME",this.dsList.getColumn(i,"DS_HNAME"));//이름
        			this.dsSave.setColumn(nrow,"ID_RESIDENT",this.dsList.getColumn(i,"ID_RESIDENT"));//주민번호
        			this.dsSave.setColumn(nrow,"YN_BASE",this.dsList.getColumn(i,"YN_BASE"));//기본공제
        			this.dsSave.setColumn(nrow,"YN_HANDICAP",this.dsList.getColumn(i,"YN_HANDICAP"));//장애여부
        			this.dsSave.setColumn(nrow,"YN_FOREIGNER",this.dsList.getColumn(i,"YN_FOREIGNER"));//외국인여부
        			this.dsSave.setColumn(nrow,"NM_FILE",this.dsList.getColumn(i,"NM_FILE"));//첨부파일
        			this.dsSave.setColumn(nrow,"DS_PATH",this.dsList.getColumn(i,"DS_PATH"));//파일경로
        			this.dsSave.setColumn(nrow,"DS_REMARK",this.dsList.getColumn(i,"DS_REMARK"));//비고
        			this.dsSave.setColumn(nrow,"ID_INSERT",this.AuthClient.ID_USER);

        			//삭제시 서버파일도 삭제
        			if (!this.gfnIsNull(this.dsList.getColumn(i, "NM_FILE"))) {
        				nrow = this.dsDeleteFile.addRow();
        				var key = this.dsList.getColumn(i, "ID_PERSON");
        				this.dsDeleteFile.setColumn(nrow, "filepath", this.filepath + key); //this.dsList.getColumn(i, "DS_PATH"));
        				this.dsDeleteFile.setColumn(nrow, "filename", this.dsList.getColumn(i, "NM_FILE"));
        			}
        		}
        		if (this.dsSave.rowcount == 0) return;

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
        							strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]

        		// 서버 파일 삭제
        		if(this.dsDeleteFile.rowcount > 0) {

        			var strSvcId    = "deletefile";
        			var strSvcType  = "file/deleteFile";
        			var inProc		= "";
        			var inData      = "input=dsDeleteFile";
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
        	}
        }

        // 자격정보 : 입력
        this.btnLic_Add_onclick = function(obj,e)
        {
        	var nrow = this.gfnGridAdd(this.dxGridLic);
        	this.dsOutLicList.setColumn(nrow, "TY_GUBUN", "A");
        };

        // 자격정보 : 삭제
        this.divData_btnLic_Del_onclick = function(obj,e)
        {
          var selRow = this.dxGridLic.currentrow;
          var tyStatus = this.dsOutLicList.getColumn(selRow, "TY_STATUS");
          if (selRow > 0 && tyStatus == "3"){
        	this.gfnAlert(" 반려 및 취소 건은 삭제할 수 없습니다.");
            return;
          }

          this.gfnGridDel(this.dxGridLic);
        };

        // 자격정보 : 저장
        this.divData_btnLic_Save_onclick = function(obj,e)
        {
           if (this.ccfID_SABUN.form.CDTextBox.value.length == 0) {
        		this.gfnAlert("사번이 입력되지 않았습니다.");
        		this.ccfID_SABUN.form.CDTextBox.setFocus();
        		return false;
           }

        	if (!this.gfnGridValidate(this.dxGridLic)) return;

        	// 파일저장
        	this.keys2 = Object.keys(this.fileuploadsLic);
        	this.filecntLic = 0;
        	if (this.keys2.length > 0) {
        		for(var i = 0; i < this.keys2.length; i++) {
        			var fileup = this.fileuploadsLic[this.keys2[i]];
        			var sFilePath = fileup.value;
        			var dirExpt = sFilePath.lastIndexOf("\\")+1;
        			var sFileName = sFilePath.substr(dirExpt);

        			var key = this.dsOutLicList.getColumn(this.dsOutLicList.rowposition, "ID_PERSON");
        			var sUploadUrl = this.fileConfigLic.host + this.fileConfigLic.uploadUrl + key;
        			trace(sUploadUrl);
        			fileup.upload(sUploadUrl);
        		}
        	}

        	this.dxGridLic.updateToDataset();

        	this.dsSaveLic.clearData();

        	for (var i = 0; i < this.dsOutLicList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsOutLicList, i);
        		var ty_gubun = this.dsOutLicList.getColumn(i,"TY_GUBUN");
        		switch(flag) {
        			case "I":
        			case "U":
        				//if(this.dsList5.getColumn(i, "CD_LICENSE") == "1671"){
        				var DS_LICENSE_COL = (this.dsOutLicList.getColumn(i, "CD_LICENSE") == "1671") ? "DS_LICENSE_ETC" : "DS_LICENSE";

        				var nrow = this.dsSaveLic.addRow();
                        this.dsSaveLic.setColumn(nrow,"TY_SAVE", flag);
                        this.dsSaveLic.setColumn(nrow,"ID_PERSON",this.txtID_PERSON.value);
                        this.dsSaveLic.setColumn(nrow,"NO_SEQ",this.dsOutLicList.getColumn(i,"NO_SEQ"));//순번
        				this.dsSaveLic.setColumn(nrow,"NO_SEQ_ORG",this.dsOutLicList.getColumn(i,"NO_SEQ_ORG"));//순번
        				this.dsSaveLic.setColumn(nrow,"CD_CORP" ,this.ccfCD_CORP.form.CDTextBox.value);//법인코드
        				this.dsSaveLic.setColumn(nrow,"DS_CORP" ,this.ccfCD_CORP.form.DSTextBox);	    // 법인명
        				this.dsSaveLic.setColumn(nrow,"ID_SABUN",this.ccfID_SABUN.form.CDTextBox.value);//사번
                        this.dsSaveLic.setColumn(nrow,"DS_HNAME",this.dsOutLicList.getColumn(i,"DS_HNAME"));//
                        this.dsSaveLic.setColumn(nrow,"TY_GUBUN",this.dsOutLicList.getColumn(i,"TY_GUBUN"));//  구분 [N:현재|C:변경|A:추가|D:삭제 ]
        				this.dsSaveLic.setColumn(nrow,"CD_LICENSE",this.dsOutLicList.getColumn(i,"CD_LICENSE"));//등급코드
        				this.dsSaveLic.setColumn(nrow,"DS_LICENSE",this.dsOutLicList.getColumn(i,DS_LICENSE_COL));//등급명
        				this.dsSaveLic.setColumn(nrow,"NO_LICENSE",this.dsOutLicList.getColumn(i,"NO_LICENSE"));//기본공제
        				this.dsSaveLic.setColumn(nrow,"DT_ACQUIRE",this.dsOutLicList.getColumn(i,"DT_ACQUIRE"));//장애여부
                        this.dsSaveLic.setColumn(nrow,"DS_ORGAN",this.dsOutLicList.getColumn(i,"DS_ORGAN"));//외국인여부
        				this.dsSaveLic.setColumn(nrow,"DT_EXPIRE",this.dsOutLicList.getColumn(i,"DT_EXPIRE"));//만료일
        				this.dsSaveLic.setColumn(nrow,"CD_LEVEL",this.dsOutLicList.getColumn(i,"CD_LEVEL"));//등급코드
        				this.dsSaveLic.setColumn(nrow,"DS_LEVEL",this.dsOutLicList.getColumn(i,"DS_LEVEL"));//등급명
        				this.dsSaveLic.setColumn(nrow,"NM_FILE",this.dsOutLicList.getColumn(i,"NM_FILE"));//첨부파일
        				this.dsSaveLic.setColumn(nrow,"DS_PATH",this.dsOutLicList.getColumn(i,"DS_PATH"));//파일경로
        				this.dsSaveLic.setColumn(nrow,"DS_REMARK",this.dsOutLicList.getColumn(i,"DS_REMARK")); //비고
        				this.dsSaveLic.setColumn(nrow,"TY_STATUS",this.dsOutLicList.getColumn(i,"TY_STATUS")); //상태
        				this.dsSaveLic.setColumn(nrow,"ID_INSERT",this.AuthClient.ID_USER);
        				break;
        			case "D":
        				if (ty_gubun == "N") { this.fnLicDeleteValidate("N"); }
        				else { this.fnLicDeleteValidate("C"); };
        				break;
        		}

        	}

        	if (this.dsSaveLic.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProcLic";  // 콤포넌트
        	var inData      = "save=dsSaveLic";// 콤포넌트내메소드 = 생성한데이타셋
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        };
        this.fnLicDeleteValidate = function(ty_gubun) {
        	if (ty_gubun == "N") {
        	this.gfnConfirm("변경요청이 있는 경우 요청한 변경건은 삭제됩니다. \n계속 진행하시겠습니까?", "fnLicvalidate_callback");
        	} else {
        	this.gfnConfirm("요청건을 삭제하시겠습니까?", "fnLicvalidate_callback");
        	}
        }
        this.fnLicvalidate_callback = function(strId, val)
        {
        	if(val == true) {
        		// 파일저장
        		this.keys = Object.keys(this.fileuploads);
        		this.filecnt = 0;
        		if (this.keys.length > 0) {
        			for(var i = 0; i < this.keys.length; i++) {
        				var fileup = this.fileuploads[this.keys[i]];
        				var sFilePath = fileup.value;
        				var dirExpt = sFilePath.lastIndexOf("\\")+1;
        				var sFileName = sFilePath.substr(dirExpt);

        				var key = this.dsOutLicList.getColumn(this.dsOutLicList.rowposition, "ID_PERSON");
        				var sUploadUrl = this.fileConfig.host + this.fileConfig.uploadUrl + key;
        				trace(sUploadUrl);
        				fileup.upload(sUploadUrl);
        			}
        		}

        		this.dxGridLic.updateToDataset();
        		this.dsSaveLic.clearData();

        		for (var i = 0; i < this.dsOutLicList.rowcount; i++) {
        			var flag = this.gfnGetFlag(this.dsOutLicList, i);

        			var nrow = this.dsSaveLic.addRow();
        			this.dsSaveLic.setColumn(nrow,"TY_SAVE", flag);
        			this.dsSaveLic.setColumn(nrow,"ID_PERSON",this.txtID_PERSON.value);
        			this.dsSaveLic.setColumn(nrow,"NO_SEQ",this.dsOutLicList.getColumn(i,"NO_SEQ"));//순번
        			this.dsSaveLic.setColumn(nrow,"NO_SEQ_ORG",this.dsOutLicList.getColumn(i,"NO_SEQ_ORG"));//순번
        			this.dsSaveLic.setColumn(nrow,"CD_CORP" ,this.ccfCD_CORP.form.CDTextBox.value);//법인코드
        			this.dsSaveLic.setColumn(nrow,"DS_CORP" ,this.ccfCD_CORP.form.DSTextBox);	    // 법인명
        			this.dsSaveLic.setColumn(nrow,"ID_SABUN",this.ccfID_SABUN.form.CDTextBox.value);//사번
        			this.dsSaveLic.setColumn(nrow,"DS_HNAME",this.dsOutLicList.getColumn(i,"DS_HNAME"));//
        			this.dsSaveLic.setColumn(nrow,"TY_GUBUN",this.dsOutLicList.getColumn(i,"TY_GUBUN"));//  구분 [N:현재|C:변경|A:추가|D:삭제 ]
        			this.dsSaveLic.setColumn(nrow,"CD_LICENSE",this.dsOutLicList.getColumn(i,"CD_LICENSE"));//등급코드
        			this.dsSaveLic.setColumn(nrow,"DS_LICENSE",this.dsOutLicList.getColumn(i,"DS_LICENSE"));//등급명
        			this.dsSaveLic.setColumn(nrow,"NO_LICENSE",this.dsOutLicList.getColumn(i,"NO_LICENSE"));//기본공제
        			this.dsSaveLic.setColumn(nrow,"DT_ACQUIRE",this.dsOutLicList.getColumn(i,"DT_ACQUIRE"));//장애여부
        			this.dsSaveLic.setColumn(nrow,"DS_ORGAN",this.dsOutLicList.getColumn(i,"DS_ORGAN"));//외국인여부
        			this.dsSaveLic.setColumn(nrow,"DT_EXPIRE",this.dsOutLicList.getColumn(i,"DT_EXPIRE"));//만료일
        			this.dsSaveLic.setColumn(nrow,"CD_LEVEL",this.dsOutLicList.getColumn(i,"CD_LEVEL"));//등급코드
        			this.dsSaveLic.setColumn(nrow,"DS_LEVEL",this.dsOutLicList.getColumn(i,"DS_LEVEL"));//등급명
        			this.dsSaveLic.setColumn(nrow,"NM_FILE",this.dsOutLicList.getColumn(i,"NM_FILE"));//첨부파일
        			this.dsSaveLic.setColumn(nrow,"DS_PATH",this.dsOutLicList.getColumn(i,"DS_PATH"));//파일경로
        			this.dsSaveLic.setColumn(nrow,"DS_REMARK",this.dsOutLicList.getColumn(i,"DS_REMARK")); //비고
        			this.dsSaveLic.setColumn(nrow,"TY_STATUS",this.dsOutLicList.getColumn(i,"TY_STATUS")); //상태
        			this.dsSaveLic.setColumn(nrow,"ID_INSERT",this.AuthClient.ID_USER);

        			//삭제시 서버파일도 삭제
        			if (!this.gfnIsNull(this.dsOutLicList.getColumn(i, "NM_FILE"))) {
        				nrow = this.dsDeleteFile.addRow();
        				var key = this.dsOutLicList.getColumn(i, "ID_PERSON");
        				this.dsDeleteFile.setColumn(nrow, "filepath", this.filepathLic + key); //this.dsList.getColumn(i, "DS_PATH"));
        				this.dsDeleteFile.setColumn(nrow, "filename", this.dsOutLicList.getColumn(i, "NM_FILE"));
        			}
        		}
        		if (this.dsSaveLic.rowcount == 0) return;

        		var strSvcId    = "save";
        		var strSvcType  = "save";
        		var inProc		= "_dsProcLic";
        		var inData      = "save=dsSaveLic";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]

        		// 서버 파일 삭제
        		if(this.dsDeleteFile.rowcount > 0) {

        			var strSvcId    = "deletefile";
        			var strSvcType  = "file/deleteFile";
        			var inProc		= "";
        			var inData      = "input=dsDeleteFile";
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
        	}
        }


        // 학력정보 : 입력
        this.divData_btnSch_Add_onclick = function(obj,e)
        {
        	var nrow = this.gfnGridAdd(this.dxGridSch);
        	this.dsOutSchList.setColumn(nrow, "TY_GUBUN", "A");
        };

        // 학력정보 : 삭제
        this.divData_btnSch_Del_onclick = function(obj,e)
        {
          var selRow = this.dxGridSch.currentrow;
          var tyStatus = this.dsOutSchList.getColumn(selRow, "TY_STATUS");
          if (selRow > 0 && tyStatus == "3"){
        	this.gfnAlert(" 반려 및 취소 건은 삭제할 수 없습니다.");
            return;
          }
        	this.gfnGridDel(this.dxGridSch);
        };

        // 학력정보 : 저장
        this.divData_btnSch_Save_onclick = function(obj,e)
        {
           if (this.ccfID_SABUN.form.CDTextBox.value.length == 0) {
        		this.gfnAlert("사번이 입력되지 않았습니다.");
        		this.ccfID_SABUN.form.CDTextBox.setFocus();
        		return false;
           }

        	// 파일저장
        	this.keys3 = Object.keys(this.fileuploadsSch);
        	this.filecntSch = 0;
        	if (this.keys3.length > 0) {
        		for(var i = 0; i < this.keys3.length; i++) {
        			var fileup = this.fileuploadsSch[this.keys3[i]];
        			var sFilePath = fileup.value;
        			var dirExpt = sFilePath.lastIndexOf("\\")+1;
        			var sFileName = sFilePath.substr(dirExpt);

        			var key = this.dsOutSchList.getColumn(this.dsOutSchList.rowposition, "ID_PERSON");
        			var sUploadUrl = this.fileConfigSch.host + this.fileConfigSch.uploadUrl + key;
        			trace(sUploadUrl);
        			fileup.upload(sUploadUrl);
        		}
        	}

        	if (!this.gfnGridValidate(this.dxGridSch)) return;

        	this.dxGridSch.updateToDataset();
        	this.dsSaveSch.clearData();

        	for (var i = 0; i < this.dsOutSchList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsOutSchList, i);
        		var ty_gubun = this.dsOutSchList.getColumn(i,"TY_GUBUN");
        		switch(flag) {
        			case "I":
        			case "U":
        				var nrow = this.dsSaveSch.addRow();

        				var DS_SCHOOL_COL = (this.dsOutSchList.getColumn(i, "CD_SCHOOL") == "ZZ") ? "DS_SCHOOL_ETC" : "DS_SCHOOL";
        				var DS_MAJOR_COL = (this.dsOutSchList.getColumn(i, "CD_MAJOR") == "ZZ") ? "DS_MAJOR_ETC" : "DS_MAJOR";
        				var DS_DOUBLE_MAJOR_COL = (this.dsOutSchList.getColumn(i, "CD_DOUBLE_MAJOR") == "ZZ") ? "DS_DOUBLE_MAJOR_ETC" : "DS_DOUBLE_MAJOR";

                        this.dsSaveSch.setColumn(nrow,"TY_SAVE", flag);
                        this.dsSaveSch.setColumn(nrow,"ID_PERSON",this.txtID_PERSON.value);	//PERSONID
                        this.dsSaveSch.setColumn(nrow,"NO_SEQ",this.dsOutSchList.getColumn(i,"NO_SEQ"));//순번
        				this.dsSaveSch.setColumn(nrow,"NO_SEQ_ORG",this.dsOutSchList.getColumn(i,"NO_SEQ_ORG"));
                        this.dsSaveSch.setColumn(nrow,"CD_CORP",this.ccfCD_CORP.form.CDTextBox.value);//법인코드
        				this.dsSaveSch.setColumn(nrow,"ID_SABUN",this.ccfID_SABUN.form.CDTextBox.value);//사번
        				this.dsSaveSch.setColumn(nrow,"DS_HNAME",this.dsOutSchList.getColumn(i,"DS_HNAME"));//
                        this.dsSaveSch.setColumn(nrow,"TY_GUBUN",this.dsOutSchList.getColumn(i,"TY_GUBUN"));//사번  구분 [N:현재|C:변경|A:추가 ]
        				this.dsSaveSch.setColumn(nrow,"CD_LEVEL",this.dsOutSchList.getColumn(i,"CD_LEVEL"));//학력구분
        				this.dsSaveSch.setColumn(nrow,"DS_LEVEL",this.dsOutSchList.getColumn(i,"DS_LEVEL"));//
        				this.dsSaveSch.setColumn(nrow,"CD_SCHOOL",this.dsOutSchList.getColumn(i,"CD_SCHOOL"));//학교쿄드
        				this.dsSaveSch.setColumn(nrow,"DS_SCHOOL",this.dsOutSchList.getColumn(i,DS_SCHOOL_COL));//
        				this.dsSaveSch.setColumn(nrow,"CD_GRADUATION",this.dsOutSchList.getColumn(i,"CD_GRADUATION"));//
        				this.dsSaveSch.setColumn(nrow,"DS_GRADUATION",this.dsOutSchList.getColumn(i,"DS_GRADUATION"));//
        				this.dsSaveSch.setColumn(nrow,"DT_SCHOOLFROM",this.dsOutSchList.getColumn(i,"DT_SCHOOLFROM"));//
                        this.dsSaveSch.setColumn(nrow,"DT_SCHOOLTO",this.dsOutSchList.getColumn(i,"DT_SCHOOLTO"));//
        				this.dsSaveSch.setColumn(nrow,"CD_MAJOR",this.dsOutSchList.getColumn(i,"CD_MAJOR"));//전공코드
        				this.dsSaveSch.setColumn(nrow,"DS_MAJOR",this.dsOutSchList.getColumn(i,DS_MAJOR_COL));//전공
        				this.dsSaveSch.setColumn(nrow,"CD_DEGREE",this.dsOutSchList.getColumn(i,"CD_DEGREE"));//학위코드
        				this.dsSaveSch.setColumn(nrow,"DS_DEGREE",this.dsOutSchList.getColumn(i,"DS_DEGREE"));//학위코드
        				this.dsSaveSch.setColumn(nrow,"CD_DOUBLE_MAJOR",this.dsOutSchList.getColumn(i,"CD_DOUBLE_MAJOR"));//복수전공
        				this.dsSaveSch.setColumn(nrow,"DS_DOUBLE_MAJOR",this.dsOutSchList.getColumn(i,DS_DOUBLE_MAJOR_COL));//학위명
        				this.dsSaveSch.setColumn(nrow,"DS_REMARK",this.dsOutSchList.getColumn(i,"DS_REMARK"));//비고
        				this.dsSaveSch.setColumn(nrow,"NM_FILE",this.dsOutSchList.getColumn(i,"NM_FILE"));//첨부파일
        				this.dsSaveSch.setColumn(nrow,"DS_PATH",this.dsOutSchList.getColumn(i,"DS_PATH"));//파일경로
        				this.dsSaveSch.setColumn(nrow,"TY_STATUS",this.dsOutSchList.getColumn(i,"TY_STATUS"));//파일경로
        				this.dsSaveSch.setColumn(nrow,"ID_INSERT",this.AuthClient.ID_USER);
        				break;
        			case "D":
        				if (ty_gubun == "N") { this.fnSchDeleteValidate("N"); }
        				else { this.fnSchDeleteValidate("C"); };
        				break;
        		}
        	}

        	trace(this.dsSaveSch.saveXML());

        	if (this.dsSaveSch.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProcSch";  // 콤포넌트
        	var inData      = "save=dsSaveSch";// 콤포넌트내메소드 = 생성한데이타셋
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };
        this.fnSchDeleteValidate = function(ty_gubun) {
        	if (ty_gubun == "N") {
        	this.gfnConfirm("변경요청이 있는 경우 요청한 변경건은 삭제됩니다. \n계속 진행하시겠습니까?", "fnSchvalidate_callback");
        	} else {
        	this.gfnConfirm("요청건을 삭제하시겠습니까?", "fnSchvalidate_callback");
        	}
        }
        this.fnSchvalidate_callback = function(strId, val)
        {
        	if(val == true) {
        		// 파일저장
        		this.keys = Object.keys(this.fileuploads);
        		this.filecnt = 0;
        		if (this.keys.length > 0) {
        			for(var i = 0; i < this.keys.length; i++) {
        				var fileup = this.fileuploads[this.keys[i]];
        				var sFilePath = fileup.value;
        				var dirExpt = sFilePath.lastIndexOf("\\")+1;
        				var sFileName = sFilePath.substr(dirExpt);

        				var key = this.dsOutSchList.getColumn(this.dsOutSchList.rowposition, "ID_PERSON");
        				var sUploadUrl = this.fileConfig.host + this.fileConfig.uploadUrl + key;
        				trace(sUploadUrl);
        				fileup.upload(sUploadUrl);
        			}
        		}

        		this.dxGridSch.updateToDataset();

        		this.dsSaveSch.clearData();
        		for (var i = 0; i < this.dsOutSchList.rowcount; i++) {
        			var flag = this.gfnGetFlag(this.dsOutSchList, i);
        				var nrow = this.dsSaveSch.addRow();
                        this.dsSaveSch.setColumn(nrow,"TY_SAVE", flag);
                        this.dsSaveSch.setColumn(nrow,"ID_PERSON",this.txtID_PERSON.value);	//PERSONID
                        this.dsSaveSch.setColumn(nrow,"NO_SEQ",this.dsOutSchList.getColumn(i,"NO_SEQ"));//순번
        				this.dsSaveSch.setColumn(nrow,"NO_SEQ_ORG",this.dsOutSchList.getColumn(i,"NO_SEQ_ORG"));
                        this.dsSaveSch.setColumn(nrow,"CD_CORP",this.ccfCD_CORP.form.CDTextBox.value);//법인코드
        				this.dsSaveSch.setColumn(nrow,"ID_SABUN",this.ccfID_SABUN.form.CDTextBox.value);//사번
        				this.dsSaveSch.setColumn(nrow,"DS_HNAME",this.dsOutSchList.getColumn(i,"DS_HNAME"));//
                        this.dsSaveSch.setColumn(nrow,"TY_GUBUN",this.dsOutSchList.getColumn(i,"TY_GUBUN"));//사번  구분 [N:현재|C:변경|A:추가 ]
        				this.dsSaveSch.setColumn(nrow,"CD_LEVEL",this.dsOutSchList.getColumn(i,"CD_LEVEL"));//학력구분
        				this.dsSaveSch.setColumn(nrow,"DS_LEVEL",this.dsOutSchList.getColumn(i,"DS_LEVEL"));//
        				this.dsSaveSch.setColumn(nrow,"CD_SCHOOL",this.dsOutSchList.getColumn(i,"CD_SCHOOL"));//학교쿄드
        				this.dsSaveSch.setColumn(nrow,"DS_SCHOOL",this.dsOutSchList.getColumn(i,"DS_SCHOOL"));//
        				this.dsSaveSch.setColumn(nrow,"CD_GRADUATION",this.dsOutSchList.getColumn(i,"CD_GRADUATION"));//
        				this.dsSaveSch.setColumn(nrow,"DS_GRADUATION",this.dsOutSchList.getColumn(i,"DS_GRADUATION"));//
        				this.dsSaveSch.setColumn(nrow,"DT_SCHOOLFROM",this.dsOutSchList.getColumn(i,"DT_SCHOOLFROM"));//
                        this.dsSaveSch.setColumn(nrow,"DT_SCHOOLTO",this.dsOutSchList.getColumn(i,"DT_SCHOOLTO"));//
        				this.dsSaveSch.setColumn(nrow,"CD_MAJOR",this.dsOutSchList.getColumn(i,"CD_MAJOR"));//전공코드
        				this.dsSaveSch.setColumn(nrow,"DS_MAJOR",this.dsOutSchList.getColumn(i,"DS_MAJOR"));//전공
        				this.dsSaveSch.setColumn(nrow,"CD_DEGREE",this.dsOutSchList.getColumn(i,"CD_DEGREE"));//학위코드
        				this.dsSaveSch.setColumn(nrow,"DS_DEGREE",this.dsOutSchList.getColumn(i,"DS_DEGREE"));//학위코드
        				this.dsSaveSch.setColumn(nrow,"CD_DOUBLE_MAJOR",this.dsOutSchList.getColumn(i,"CD_DOUBLE_MAJOR"));//복수전공
        				this.dsSaveSch.setColumn(nrow,"DS_DOUBLE_MAJOR",this.dsOutSchList.getColumn(i,"DS_DOUBLE_MAJOR"));//학위명
        				this.dsSaveSch.setColumn(nrow,"DS_REMARK",this.dsOutSchList.getColumn(i,"DS_REMARK"));//비고
        				this.dsSaveSch.setColumn(nrow,"NM_FILE",this.dsOutSchList.getColumn(i,"NM_FILE"));//첨부파일
        				this.dsSaveSch.setColumn(nrow,"DS_PATH",this.dsOutSchList.getColumn(i,"DS_PATH"));//파일경로
        				this.dsSaveSch.setColumn(nrow,"TY_STATUS",this.dsOutSchList.getColumn(i,"TY_STATUS"));//파일경로
        				this.dsSaveSch.setColumn(nrow,"ID_INSERT",this.AuthClient.ID_USER);
        				trace(this.dsOutSchList.getColumn(i,"NO_SEQ_ORG"));

        			//삭제시 서버파일도 삭제
        			if (!this.gfnIsNull(this.dsOutSchList.getColumn(i, "NM_FILE"))) {
        				nrow = this.dsDeleteFile.addRow();
        				var key = this.dsOutSchList.getColumn(i, "ID_PERSON");
        				this.dsDeleteFile.setColumn(nrow, "filepath", this.filepathSch + key); //this.dsList.getColumn(i, "DS_PATH"));
        				this.dsDeleteFile.setColumn(nrow, "filename", this.dsOutSchList.getColumn(i, "NM_FILE"));
        			}
        		}
        		if (this.dsSaveSch.rowcount == 0) return;

        		var strSvcId    = "save";
        		var strSvcType  = "save";
        		var inProc		= "_dsProcSch";
        		var inData      = "save=dsSaveSch";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]

        		// 서버 파일 삭제
        		if(this.dsDeleteFile.rowcount > 0) {

        			var strSvcId    = "deletefile";
        			var strSvcType  = "file/deleteFile";
        			var inProc		= "";
        			var inData      = "input=dsDeleteFile";
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
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnAdd.addEventHandler("onclick",this.divData_btnAdd_onclick,this);
            this.divData.form.btnDel.addEventHandler("onclick",this.divData_btnDel_onclick,this);
            this.divData.form.btnSave.addEventHandler("onclick",this.divData_btnSave_onclick,this);
            this.divData.form.btnLic_Add.addEventHandler("onclick",this.btnLic_Add_onclick,this);
            this.divData.form.btnLic_Del.addEventHandler("onclick",this.divData_btnLic_Del_onclick,this);
            this.divData.form.btnLic_Save.addEventHandler("onclick",this.divData_btnLic_Save_onclick,this);
            this.divData.form.btnSch_Add.addEventHandler("onclick",this.divData_btnSch_Add_onclick,this);
            this.divData.form.btnSch_Del.addEventHandler("onclick",this.divData_btnSch_Del_onclick,this);
            this.divData.form.btnSch_Save.addEventHandler("onclick",this.divData_btnSch_Save_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.fnSetButton,this);
            this.dsOutLicList.addEventHandler("onvaluechanged",this.fnSetButton,this);
            this.dsOutSchList.addEventHandler("onvaluechanged",this.fnSetButton,this);
        };
        this.loadIncludeScript("DAA_PERSONAL_ASK.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
