(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAU_SALARYLIST");
            this.set_titletext("급여현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"string\" size=\"32\"/><Column id=\"DS_CORP\" type=\"string\" size=\"32\"/><Column id=\"CD_DEPT\" type=\"string\" size=\"32\"/><Column id=\"DS_DEPT\" type=\"string\" size=\"32\"/><Column id=\"ID_SABUN\" type=\"string\" size=\"32\"/><Column id=\"DS_HNAME\" type=\"string\" size=\"32\"/><Column id=\"CD_POSITION\" type=\"string\" size=\"32\"/><Column id=\"DS_POSITION\" type=\"string\" size=\"32\"/><Column id=\"A01\" type=\"bigdecimal\" size=\"16\"/><Column id=\"A11\" type=\"bigdecimal\" size=\"16\"/><Column id=\"A13\" type=\"bigdecimal\" size=\"16\"/><Column id=\"A14\" type=\"bigdecimal\" size=\"16\"/><Column id=\"A15\" type=\"bigdecimal\" size=\"16\"/><Column id=\"A25\" type=\"bigdecimal\" size=\"16\"/><Column id=\"A99\" type=\"bigdecimal\" size=\"16\"/><Column id=\"S51\" type=\"bigdecimal\" size=\"16\"/><Column id=\"S52\" type=\"bigdecimal\" size=\"16\"/><Column id=\"S53\" type=\"bigdecimal\" size=\"16\"/><Column id=\"S54\" type=\"bigdecimal\" size=\"16\"/><Column id=\"S55\" type=\"bigdecimal\" size=\"16\"/><Column id=\"S60\" type=\"bigdecimal\" size=\"16\"/><Column id=\"S61\" type=\"bigdecimal\" size=\"16\"/><Column id=\"S70\" type=\"bigdecimal\" size=\"16\"/><Column id=\"S72\" type=\"bigdecimal\" size=\"16\"/><Column id=\"S73\" type=\"bigdecimal\" size=\"16\"/><Column id=\"S95\" type=\"bigdecimal\" size=\"16\"/><Column id=\"S96\" type=\"bigdecimal\" size=\"16\"/><Column id=\"S99\" type=\"bigdecimal\" size=\"16\"/><Column id=\"Z99\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAUPR_SALARYLIST_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DAZPR_COMMONCODE_COMBO</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"SN_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"YM_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SALARY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSN_SALARY", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">1</Col></Row><Row><Col id=\"VALUE\">2</Col><Col id=\"CODE\">2</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"VALUE\">3</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"VALUE\">4</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"VALUE\">5</Col></Row><Row><Col id=\"CODE\">6</Col><Col id=\"VALUE\">6</Col></Row><Row><Col id=\"CODE\">7</Col><Col id=\"VALUE\">7</Col></Row><Row><Col id=\"CODE\">8</Col><Col id=\"VALUE\">8</Col></Row><Row><Col id=\"CODE\">9</Col><Col id=\"VALUE\">9</Col></Row><Row><Col id=\"CODE\">10</Col><Col id=\"VALUE\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSalCate", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_SEQ\" type=\"int\" size=\"4\"/><Column id=\"CD_GUBUN\" type=\"string\" size=\"32\"/><Column id=\"CD_CODE\" type=\"string\" size=\"32\"/><Column id=\"DS_CODE\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_BASE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("대상년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_BASE","staYM_BASE:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_SALARY","ctclYM_BASE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("지급구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_SALARY","staTY_SALARY:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsTY_SALARY");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_readonly("false");
            obj.set_text("급여");
            obj.set_value("S");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSN_SALARY","cboTY_SALARY:5","10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsSN_SALARY");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_readonly("false");
            obj.set_text("급여");
            obj.set_value("1");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","cboSN_SALARY:0.0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
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
            obj = new BindItem("item0","divSearch.form.ctclYM_BASE.form.TextBox","value","dsSearch","YM_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboTY_SALARY","value","dsSearch","TY_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cboSN_SALARY","value","dsSearch","SN_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAU_SALARYLIST.xfdl", function() {
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

        	this.fnSetCombo();

        	this.cboSN_SALARY.set_index(0);

        	//대상년월
        	this.ctclYM_BASE.form.TextBox.set_value(this.gfnGetDate().substr(0,6));

        	//법인 셋팅
        	this.divSearch.form.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.divSearch.form.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

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
        	this.ctclYM_BASE = this.divSearch.form.ctclYM_BASE;
        	//지급구분
        	this.cboTY_SALARY = this.divSearch.form.cboTY_SALARY;
        	this.cboSN_SALARY = this.divSearch.form.cboSN_SALARY;
        	//법인
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;

        	this.dxGrid = this.divData.form.objGrid;

        	this.grSearch = this.FormInfo.GR_SEARCH;					          // 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;					          // 그룹코드
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAU_SALARYLIST");

        	//this.dsSearch.setColumn(0, "TY_SALARY", "S");
        	//this.dsSearch.setColumn(0, "SN_SALARY", "1");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_SALARY", "string");
        	this.dsSelect.addColumn("YM_SALARY", "string");
        	this.dsSelect.addColumn("SN_SALARY", "bigdecimal");
        	this.dsSelect.addColumn("CD_CORP", "string");
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

        	this.dsSelect.setColumn(0, "TY_SALARY", this.dsSearch.getColumn(0, "TY_SALARY"));
        	this.dsSelect.setColumn(0, "SN_SALARY", this.dsSearch.getColumn(0, "SN_SALARY"));
        	this.dsSelect.setColumn(0, "YM_SALARY", this.dsSearch.getColumn(0, "YM_SALARY"));
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsSalCate=select0 dsList=select1";
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

        	if (this.gfnIsNull(this.ctclYM_BASE.form.TextBox.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ctclYM_BASE.form.TextBox.setFocus();
        		}
        		this.gfnAlert("대상년월을 입력하세요.", "fnVaidateCallback");
        	}

        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인을 입력하세요.", "fnVaidateCallback");
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
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.fnSetGridCol();

        	}else if (svcID == "combo") {
        		this.cboTY_SALARY.set_index(1);
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
        	//this.fnSearchInit();
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

        this.dsSearch_onvaluechanged = function(obj,e)
        {

        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };


        this.fnSetCombo = function() {

           this.dsCombo = new Dataset();
           this.dsCombo.addColumn("TY_SEL", "string");
           this.dsCombo.addColumn("CD_PREFIX", "string");
           this.dsCombo.addColumn("CD_UPPREFIX", "string");

           this.dsCombo.addRow();
           this.dsCombo.setColumn(0, "TY_SEL", "P");
           this.dsCombo.setColumn(0, "CD_PREFIX", "GS");
           this.dsCombo.setColumn(0, "CD_UPPREFIX", "");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_SALARY=combo0";
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


        this.fnSetGridCol = function (){

        	var dsTarget = this.dsSalCate;

        	var ncol1 = 0;
        	var ncol2 = 0;
        	var ncol3 = 1;
        	var cols = 0; // merge 되면서 cell index가 조정된다.
        	this.dxGrid.set_enableredraw(false);
        	this.dsList.set_enableevent(false);

        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAU_SALARYLIST");


            this.setWaitCursor(true);
        	for (var i = 0; i < this.dsSalCate.rowcount; i++) {
        		//if(this.dsSalCate.getColumn(i, "YN_GUBUN") == 1){
        // 			var GUBUN1 = this.dsSalCate.getColumn(i, "GUBUN1");
        // 			var objColinfo = new ColumnInfo();
        // 			objColinfo.set_type("DOUBLE");
        // 			objColinfo.set_size(256);
        //
        //			this.dsList.addColumn(dsTarget.getColumn(i,"CD_GUBUN"),objColinfo);
        //
        // 			var gubunCd = ""
        // 			if(GUBUN1 == "소득"){
        // 				gubunCd = "S"
        // 			}else if(GUBUN1 == "공제"){
        // 				gubunCd = "G"
        // 			}

        			ncol1 = this.dxGrid.appendContentsCol();
        			this.dxGrid.setFormatColProperty(ncol1, "size", 150);

        			//디버깅용
        			//this.dxGrid.setCellProperty("head", ncol1, "text", "["+dsTarget.getColumn(i,"CD_GUBUN") + "] " +dsTarget.getColumn(i, "DS_CODE"));

        			this.dxGrid.setCellProperty("head", ncol1, "text", dsTarget.getColumn(i, "DS_CODE"));

        			this.dxGrid.setCellProperty("body", ncol1, "displaytype", "number");
        			this.dxGrid.setCellProperty("body", ncol1, "text", "bind:" + dsTarget.getColumn(i,"CD_GUBUN"));
        			this.dxGrid.setCellProperty("body", ncol1, "cssclass", "expr:dataset.getRowLevel(currow) == 1 ? 'subtotal': nx_flag == '#' ? 'filter' : ''");
        			// 총합계 추가
        			this.dxGrid.setCellProperty("summ", ncol1, "displaytype", "number");
        			this.dxGrid.setCellProperty("summ", ncol1 , "text", "expr:dataset.getSum('" + dsTarget.getColumn(i,"CD_GUBUN") + "')");
        //
        // 			var rtn = this.dxGrid.mergeContentsCell("head", 0, ncol1, 0, ncol1+1, ncol1 - cols, false);
        // 			if(rtn > -1) {
        // 				this.dxGrid.setCellProperty("head", rtn, "text", dsTarget.getColumn(i,"DS_ALLOW"));
        // 				cols = cols + 1;
        // 			}
        		//}
        	}

        	this.dxGrid.set_enableredraw(true);
        	this.dsList.set_enableevent(true);
        	this.setWaitCursor(false);

        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsSalCate.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };
        this.loadIncludeScript("DAU_SALARYLIST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
