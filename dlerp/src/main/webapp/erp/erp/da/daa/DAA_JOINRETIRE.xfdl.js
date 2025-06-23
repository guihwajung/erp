(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAA_JOINRETIRE");
            this.set_titletext("입퇴사자현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"string\" size=\"32\"/><Column id=\"DS_CORP\" type=\"string\" size=\"32\"/><Column id=\"CD_DEPT\" type=\"string\" size=\"32\"/><Column id=\"DS_DEPT\" type=\"string\" size=\"32\"/><Column id=\"ID_SABUN\" type=\"string\" size=\"32\"/><Column id=\"DS_HNAME\" type=\"string\" size=\"32\"/><Column id=\"CD_POSITION\" type=\"string\" size=\"32\"/><Column id=\"DS_POSITION\" type=\"string\" size=\"32\"/><Column id=\"A01\" type=\"bigdecimal\" size=\"16\"/><Column id=\"A11\" type=\"bigdecimal\" size=\"16\"/><Column id=\"A13\" type=\"bigdecimal\" size=\"16\"/><Column id=\"A14\" type=\"bigdecimal\" size=\"16\"/><Column id=\"A15\" type=\"bigdecimal\" size=\"16\"/><Column id=\"A25\" type=\"bigdecimal\" size=\"16\"/><Column id=\"A99\" type=\"bigdecimal\" size=\"16\"/><Column id=\"S51\" type=\"bigdecimal\" size=\"16\"/><Column id=\"S52\" type=\"bigdecimal\" size=\"16\"/><Column id=\"S53\" type=\"bigdecimal\" size=\"16\"/><Column id=\"S54\" type=\"bigdecimal\" size=\"16\"/><Column id=\"S55\" type=\"bigdecimal\" size=\"16\"/><Column id=\"S60\" type=\"bigdecimal\" size=\"16\"/><Column id=\"S61\" type=\"bigdecimal\" size=\"16\"/><Column id=\"S70\" type=\"bigdecimal\" size=\"16\"/><Column id=\"S72\" type=\"bigdecimal\" size=\"16\"/><Column id=\"S73\" type=\"bigdecimal\" size=\"16\"/><Column id=\"S95\" type=\"bigdecimal\" size=\"16\"/><Column id=\"S96\" type=\"bigdecimal\" size=\"16\"/><Column id=\"S99\" type=\"bigdecimal\" size=\"16\"/><Column id=\"Z99\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAAPR_JOINRETIRE_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"FR_START\" type=\"STRING\" size=\"256\"/><Column id=\"TO_END\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">A</Col><Col id=\"DS_CODE\">재직</Col></Row><Row><Col id=\"CD_CODE\">B</Col><Col id=\"DS_CODE\">입사</Col></Row><Row><Col id=\"CD_CODE\">C</Col><Col id=\"DS_CODE\">퇴사</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_BASE","0.0","10.0","79.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("기준일");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_WORK_FR","staYM_BASE:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_BASE_TERM","ctclDT_WORK_FR:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_WORK_TO","staYM_BASE_TERM:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ctclDT_WORK_TO:0.0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_SALARY","ccfCD_CORP:0.0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdoGUBUN","staTY_SALARY:0.0","10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsTY_GUBUN");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_direction("vertical");
            obj.set_rowcount("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:5",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctclDT_WORK_FR","value","dsSearch","FR_START");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclDT_WORK_TO","value","dsSearch","TO_END");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.rdoGUBUN","value","dsSearch","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAA_JOINRETIRE.xfdl", function() {
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


        	this.rdoGUBUN.set_index(0);
        	var sYYMMDD = this.gfnGetDate().substr(0,8);


        	//대상년월
        	this.ctclDT_WORK_FR.set_value(this.gfnGetDate().substr(0,4)+"0101");
        	this.ctclDT_WORK_TO.set_value(sYYMMDD);

        	//법인 셋팅
        	this.divSearch.form.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.divSearch.form.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	if(this.FormInfo.GR_SEARCH == "1"){
        		this.ccfCD_CORP.set_enable(true);
        	}else{
        		this.ccfCD_CORP.set_enable(false);
        	}

        	//this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	//this.FormBtns.Reset.set_enable(true);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	//대상년월
        	this.ctclDT_WORK_FR = this.divSearch.form.ctclDT_WORK_FR;
        	this.ctclDT_WORK_TO = this.divSearch.form.ctclDT_WORK_TO;

        	//구분
        	this.rdoGUBUN = this.divSearch.form.rdoGUBUN;

        	//법인
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//this.ccfCD_CORP.CodeFindName = "DAX_CFCORP_CODEFIND";
        	//this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	//this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAA_JOINRETIRE");

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("FR_START", "string");
        	this.dsSelect.addColumn("TO_END", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnSelectValidate()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "FR_START", this.dsSearch.getColumn(0, "FR_START"));
        	this.dsSelect.setColumn(0, "TO_END", this.dsSearch.getColumn(0, "TO_END"));
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));

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
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
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

        };

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
        }



        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {

        	var validate = true;

        	if (this.gfnIsNull(this.ctclDT_WORK_FR.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ctclDT_WORK_FR.setFocus();
        		}
        		this.gfnAlert("기준일을 입력하세요.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.ctclDT_WORK_TO.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ctclDT_WORK_TO.setFocus();
        		}
        		this.gfnAlert("기준일을 입력하세요.", "fnVaidateCallback");
        	}
        // 	else if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        // 		validate = false;
        // 		this.fnVaidateCallback = function() {
        // 			this.ccfCD_CORP.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("법인을 입력하세요.", "fnVaidateCallback");
        // 	}

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
        		this.gfnGridAfterSelect(this.dxGrid);
        	}

        }


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
        		default:
         	}

         	return true;
        };

        this.fnAfterCDTextChanged = function (id, codeFindData){

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
        this.loadIncludeScript("DAA_JOINRETIRE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
