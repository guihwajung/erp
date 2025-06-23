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
            this.set_titletext("주택-약정관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DOAPR_SOC_PROJ_AGREE_LOAN_LIST_SELECT</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DOAPR_SOC_PROJ_AGREE_ASSU_LIST_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DOAPR_SOC_PROJ_AGREE_MERGE</Col></Row><Row><Col id=\"TARGET\">saveLoan</Col><Col id=\"SP\">DOAPR_SOC_PROJ_AGREE_LOAN_LIST_SAVE</Col></Row><Row><Col id=\"TARGET\">saveAssu</Col><Col id=\"SP\">DOAPR_SOC_PROJ_AGREE_ASSU_LIST_SAVE</Col></Row><Row><Col id=\"TARGET\">selectCharge</Col><Col id=\"SP\">DOAPR_PROJ_YNCHARGE_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"DT_STD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_STD\" type=\"STRING\" size=\"256\"/><Column id=\"YN_READ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequired", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">DT_STD</Col><Col id=\"DS_FIELD\">기준일자</Col></Row><Row><Col id=\"CD_FIELD\">DS_STD</Col><Col id=\"DS_FIELD\">기준명</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRcvYNCharge", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"YN_EXISTS\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_PROJ","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("프로젝트코드");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_PROJ","0.0","staCD_PROJ:10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_PROJ","ctxtCD_PROJ:0.0","staCD_PROJ:10.0","186","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","50",null,"750","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta27","124","540",null,"140","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","622","17","378","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","124","17","380","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_STD","5","17","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_text("기준일자");
            obj.set_textAlign("left");
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_STD","128","22","110","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("20200101");
            obj.set_enable("true");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrd1","0","81",null,"249","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSave","42.03%",null,"60","24",null,"27",null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("저장");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","btnSave:3",null,"60","24",null,"27",null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("닫기");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_STD","503","17","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("기준명");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_STD","626","22","298","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTab1Title","10","56","82","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("차입현황");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrd2","0","367",null,"163","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTab1Title00","10","341","82","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("보증현황");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_FILE_ATTCH","5","540","120","140",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divFile","118","534",null,"141","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_url("cmm::cmmFileManager.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnAdd01",null,"56","50","20","74",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("추가");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnDelete01",null,"56","50","20","7",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("삭제");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnAdd01_00",null,"341","50","20","74",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("추가");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnDelete01_00",null,"341","50","20","7",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("삭제");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctxtCD_PROJ","value","dsSearch","CD_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctxtDS_PROJ","value","dsSearch","DS_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ctclDT_STD","value","dsSearch","DT_STD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ctxtDS_STD","value","dsSearch","DS_STD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmFileManager.xfdl");
        };
        
        // User Script
        this.registerScript("DOC_SOC_AGREE.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.AGREE_GUBUN = this.getOwnerFrame().AGREE_GUBUN;

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//
        	this.fnSetButton();
        	this.fnSetExtendButton();

        	this.fnSetVariable();
        	this.fnSetParameter();
        	this.fnSetEvent();

        	// 파일관리자 - 조회전에는 disable
        	this.divData.form.divFile.form.set_enable(false);

        	this.dsSearch.setColumn(0, "CD_PROJ", this.getOwnerFrame().CD_PROJ);
        	this.dsSearch.setColumn(0, "DS_PROJ", this.getOwnerFrame().DS_PROJ);
        	this.dsSearch.setColumn(0, "DT_STD", this.getOwnerFrame().DT_STD);
        	this.dsSearch.setColumn(0, "DS_STD", this.getOwnerFrame().DS_STD);

        	if(this.AGREE_GUBUN == 'U'){
        		this.divData.form.ctclDT_STD.set_readonly(true);
        	}

        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 담당자 여부 검사
         ************************************************************************/
         this.fnGetYNCharge = function(){

        	this.dsReqYNCharge = new Dataset();
        	this.dsReqYNCharge.addColumn("CD_PROJ", "string");
        	this.dsReqYNCharge.addColumn("ID_USER", "string");

        	this.dsReqYNCharge.addRow();
        	this.dsReqYNCharge.setColumn(0, "CD_PROJ", this.getOwnerFrame().CD_PROJ);
        	this.dsReqYNCharge.setColumn(0, "ID_USER", this.objApp.gdsUserInfo.getColumn(0, "ID_USER"));

        	var strSvcId    = "selectCharge";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        		inData      = "selectCharge=dsReqYNCharge";
        		outData     = "dsRcvYNCharge=selectCharge0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,false); // 통신방법 정의 [생략가능]
         }

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel

        	if(this.FormInfo.TY_AUTH == "R") {
        		this.divData.form.btnAdd01.set_enable(false);
        		this.divData.form.btnDelete01.set_enable(false);

        		this.divData.form.btnAdd01_00.set_enable(false);
        		this.divData.form.btnDelete01_00.set_enable(false);

        		this.divData.form.btnSave.set_enable(false);
        	}
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.dxGrid1 = this.divData.form.objGrd1;	// 차입현황
        	this.dxGrid2 = this.divData.form.objGrd2;	// 보증현황
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DO", "DOC_SOC_AGREE_LOAN_DTL_LIST");	// 차입현황
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DO", "DOC_SOC_AGREE_ASSU_LIST");	// 보증현황
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSave = new Dataset();

        	this.dsSave.addColumn("TY_WRK", "string");	//
        	this.dsSave.addColumn("CD_PROJ", "string");	// 프로젝트코드
        	this.dsSave.addColumn("DT_STD", "string");	// 기준일자
        	this.dsSave.addColumn("DS_STD", "string");	// 기준명
        	this.dsSave.addColumn("ID_USER", "string");	// 사용자ID

        	this.dsSaveLoan = new Dataset();

        	this.dsSaveLoan.addColumn("TY_WRK", "string");
        	this.dsSaveLoan.addColumn("CD_PROJ", "string");
        	this.dsSaveLoan.addColumn("DT_STD", "string");
        	this.dsSaveLoan.addColumn("NO_LOAN", "int");
        	this.dsSaveLoan.addColumn("TY_AGREE", "string");
        	this.dsSaveLoan.addColumn("DS_TRANCHE", "string");
        	this.dsSaveLoan.addColumn("NM_FI", "string");
        	this.dsSaveLoan.addColumn("AM_LOAN", "bigdecimal");
        	this.dsSaveLoan.addColumn("DS_RT_LOAN", "string");
        	this.dsSaveLoan.addColumn("DS_TERM", "string");
        	this.dsSaveLoan.addColumn("DS_REPAY_CND", "string");
        	this.dsSaveLoan.addColumn("DS_RM", "string");
        	this.dsSaveLoan.addColumn("ID_USER", "string");

        	this.dsSaveAssu = new Dataset();

        	this.dsSaveAssu.addColumn("TY_WRK", "string");
        	this.dsSaveAssu.addColumn("CD_PROJ", "string");
        	this.dsSaveAssu.addColumn("DT_STD", "string");
        	this.dsSaveAssu.addColumn("NO_ASSU", "int");
        	this.dsSaveAssu.addColumn("DS_ASSU", "string");
        	this.dsSaveAssu.addColumn("AM_FUND_LIMT", "string");
        	this.dsSaveAssu.addColumn("YN_JNT_ASSU", "string");
        	this.dsSaveAssu.addColumn("DS_WHT_BILL", "string");
        	this.dsSaveAssu.addColumn("DS_SUBMIT", "string");
        	this.dsSaveAssu.addColumn("DS_RM", "string");
        	this.dsSaveAssu.addColumn("ID_USER", "string");
        }


        /************************************************************************
         * 트렌젝션 버튼 이벤트
         ************************************************************************/
        this.fnSelect = function(obj,e){

        	this.dsSelect = new Dataset();
        	this.dsSelect.copyData(this.dsSearch);

        	this.dsSelect.setColumn(0, "YN_READ", "N");

        	var strSvcId    = "select";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select1=dsSelect select2=dsSelect";
        	var outData     = "dsList1=select10 dsList2=select20";
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
         *	저장 버튼
         */
        this.fnSave = function(obj,e){

        	if(!this.gfnDataValidate(this.dsSearch, this.dsRequired))return;

        	this.dsSave.clearData();
        	var nrow = this.dsSave.addRow();
        	this.dsSave.setColumn(nrow, "CD_PROJ", this.getOwnerFrame().CD_PROJ);			// 프로젝트코드
        	this.dsSave.setColumn(nrow, "DT_STD", this.dsSearch.getColumn(0, "DT_STD"));	// 기준일자
        	this.dsSave.setColumn(nrow, "DS_STD", this.dsSearch.getColumn(0, "DS_STD"));	// 기준명
        	this.dsSave.setColumn(nrow, "ID_FILE_ATTCH", this.dsSearch.getColumn(0, "ID_FILE_ATTCH"));			// 첨부파일
        	this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

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
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "select") {
        		this.divData.form.divFile.form.set_enable(true);
        		// 첨부파일
        		//var cd_site = this.ccfCD_SITE.form.CDTextBox.value;
        		var fileManager = {};
        		fileManager.CD_GUBUN = "DOS4";
        		fileManager.CD_DIR = [ this.getOwnerFrame().CD_PROJ , this.getOwnerFrame().DT_STD ];
        		fileManager.CD_REF1 = this.getOwnerFrame().CD_PROJ;
        		fileManager.CD_REF2 = this.getOwnerFrame().DT_STD;

        		if(this.FormInfo.TY_AUTH == "R") {
        			fileManager.IS_READONLY = true;
        		} else {
        			fileManager.IS_READONLY = false;
        		}
        		// div FileManager 셋팅
        		this.divData.form.divFile.form.setFileManager(fileManager);
        	} else if(svcID == "save") {
        		this.fnSaveLoanList();
        		this.fnSaveAssuList();
        	} else if(svcID == "saveAssu") {
        		this.divData.form.ctclDT_STD.set_readonly(true);
        		this.FormBtns.Select.click();
        	} else if(svcID == "delete") {
        		this.FormBtns.Select.click();
        	}
        	this.fnSetButton();
        };

        /************************************************************************
         * 기타 이벤트 설정
         ************************************************************************/
        // 리스트 저장
         this.fnSaveLoanList = function(){

        	this.dsSaveLoan.clearData();

        	for (var i = 0; i < this.dsList1.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList1, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSaveLoan.addRow();
        				this.dsSaveLoan.setColumn(nrow, "TY_WRK", flag);
        				this.dsSaveLoan.setColumn(nrow, "CD_PROJ", this.getOwnerFrame().CD_PROJ);						// 프로젝트코드
        				this.dsSaveLoan.setColumn(nrow, "DT_STD", this.dsSearch.getColumn(0, "DT_STD"));
        				this.dsSaveLoan.setColumn(nrow, "NO_LOAN", this.dsList1.getColumn(i, "NO_LOAN"));
        				this.dsSaveLoan.setColumn(nrow, "TY_AGREE", this.dsList1.getColumn(i, "TY_AGREE"));
        				this.dsSaveLoan.setColumn(nrow, "DS_TRANCHE", this.dsList1.getColumn(i, "DS_TRANCHE"));
        				this.dsSaveLoan.setColumn(nrow, "NM_FI", this.dsList1.getColumn(i, "NM_FI"));
        				this.dsSaveLoan.setColumn(nrow, "AM_LOAN", this.dsList1.getColumn(i, "AM_LOAN"));
        				this.dsSaveLoan.setColumn(nrow, "DS_RT_LOAN", this.dsList1.getColumn(i, "DS_RT_LOAN"));
        				this.dsSaveLoan.setColumn(nrow, "DS_TERM", this.dsList1.getColumn(i, "DS_TERM"));
        				this.dsSaveLoan.setColumn(nrow, "DS_REPAY_CND", this.dsList1.getColumn(i, "DS_REPAY_CND"));
        				this.dsSaveLoan.setColumn(nrow, "DS_RM", this.dsList1.getColumn(i, "DS_RM"));
        				this.dsSaveLoan.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	var strSvcId    = "saveLoan";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "saveLoan=dsSaveLoan";
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


        this.fnSaveAssuList = function(){

        	this.dsSaveAssu.clearData();

        	for (var i = 0; i < this.dsList2.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList2, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSaveAssu.addRow();
        				this.dsSaveAssu.setColumn(nrow, "TY_WRK", flag);
        				this.dsSaveAssu.setColumn(nrow, "CD_PROJ", this.getOwnerFrame().CD_PROJ);					// 프로젝트코드
        				this.dsSaveAssu.setColumn(nrow, "DT_STD", this.dsSearch.getColumn(0, "DT_STD"));			// 기준일자
        				this.dsSaveAssu.setColumn(nrow, "NO_ASSU", this.dsList2.getColumn(i, "NO_ASSU"));			// 보증순번
        				this.dsSaveAssu.setColumn(nrow, "DS_ASSU", this.dsList2.getColumn(i, "DS_ASSU"));			// 보증구분명
        				this.dsSaveAssu.setColumn(nrow, "AM_FUND_LIMT", this.dsList2.getColumn(i, "AM_FUND_LIMT"));	// 자금보충한도
        				this.dsSaveAssu.setColumn(nrow, "YN_JNT_ASSU", this.dsList2.getColumn(i, "YN_JNT_ASSU"));	// 연대보증여부
        				this.dsSaveAssu.setColumn(nrow, "DS_WHT_BILL", this.dsList2.getColumn(i, "DS_WHT_BILL"));	// 백지어음수
        				this.dsSaveAssu.setColumn(nrow, "DS_SUBMIT", this.dsList2.getColumn(i, "DS_SUBMIT"));		// 제출처
        				this.dsSaveAssu.setColumn(nrow, "DS_RM", this.dsList2.getColumn(i, "DS_RM"));				// 비고
        				this.dsSaveAssu.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	var strSvcId    = "saveAssu";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "saveAssu=dsSaveAssu";
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

        this.divData_btnCancel_onclick = function(obj,e)
        {
        	this.getParentContext().close(true);
        };

        this.divData_btnAdd01_onclick = function(obj,e)
        {
        	var nRow = this.gfnGridAdd(this.dxGrid1,"bottom");
        };

        this.divData_btnDelete01_onclick = function(obj,e)
        {
        	this.gfnGridDel(this.dxGrid1);
        };

        this.divData_btnAdd01_00_onclick = function(obj,e)
        {
        	this.gfnGridAdd(this.dxGrid2,"bottom");
        };

        this.divData_btnDelete01_00_onclick = function(obj,e)
        {
        	this.gfnGridDel(this.dxGrid2);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnSave.addEventHandler("onclick",this.fnSave,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.divData.form.btnAdd01.addEventHandler("onclick",this.divData_btnAdd01_onclick,this);
            this.divData.form.btnDelete01.addEventHandler("onclick",this.divData_btnDelete01_onclick,this);
            this.divData.form.btnAdd01_00.addEventHandler("onclick",this.divData_btnAdd01_00_onclick,this);
            this.divData.form.btnDelete01_00.addEventHandler("onclick",this.divData_btnDelete01_00_onclick,this);
        };
        this.loadIncludeScript("DOC_SOC_AGREE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
