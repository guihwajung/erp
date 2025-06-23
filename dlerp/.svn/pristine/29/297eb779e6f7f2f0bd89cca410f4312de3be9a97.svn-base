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
            this.set_titletext("채용발령");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DARPR_RECRUIT_ORDERINFO_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DARPR_RECRUIT_ORDERINFO_SAVE</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DARPR_RECRUIT_ORDER_SELECT</Col></Row><Row><Col id=\"TARGET\">d_save</Col><Col id=\"SP\">DARPR_RECRUIT_ORDER_SAVE</Col></Row><Row><Col id=\"TARGET\">selectRecruit</Col><Col id=\"SP\">DARPR_RECRUIT_ORDER_CREATE</Col></Row><Row><Col id=\"TARGET\">approval</Col><Col id=\"SP\">DARPR_RECRUIT_ORDER_APPROVAL</Col></Row><Row><Col id=\"TARGET\">cancel</Col><Col id=\"SP\">DARPR_RECRUIT_ORDER_CANCEL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YY_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListRecruit", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListApproval", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staYY_ORDER","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("채용년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYY_ORDER","staYY_ORDER:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ctclYY_ORDER:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","270","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","30%","0","5","100%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_text("채용문서");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("채용내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","sta02:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctclYY_ORDER.form.TextBox","value","dsSearch","YY_ORDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAR_RECRUIT_ORDER.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.gNO_NOTICE;	// 채용공고 값 (엑셀업로드시 사용)
        this.gCD_CORP;		// 채용법인 값 (엑셀업로드시 사용)

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

        	this.fnReset();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        // 	this.FormBtns.Add.set_enable(true);
        	this.FormBtns.Reset.set_enable(true);

        	// 서브 버튼 사용
        	this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter);
        }

        this.fnSetSubButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SubSave, SubExcel



         	this.FormBtns.SubAdd.set_enable(false);
         	this.FormBtns.SubDel.set_enable(false);
         	this.FormBtns.SubSave.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btn1 = this.gfnFormButtonAdd("btnGetRecruitInfo", "fnGetRecruitInfo");		// 대상자가져오기
        	this.btn2 = this.gfnFormButtonAdd("btnApproval", "fnApproval");					// 채용승인
        	this.btn3 = this.gfnFormButtonAdd("btnCancel", "fnCancel");						// 채용승인취소
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ctclYY_ORDER = this.divSearch.form.ctclYY_ORDER;

        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataRight.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAR_RECRUIT_ORDERINFO");
        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);

        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DA", "DAR_RECRUIT_ORDER");
        	this.dxGridSub.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGridSub.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body", "CD_CODE"), "editinputtype", "alpha,digit");
        	this.dxGridSub.setCellProperty( "body", this.dxGridSub.getBindCellIndex("body", "CD_ORDER2"), "editinputtype", "alpha,digit");

        	this.ccfCD_CORP.CodeFindName = "DAX_CFCORP";
        	this.ccfCD_CORP.AfterCDTextChanged = "codefind_AfterCDTextChanged";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	//메인
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YY_ORDER", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("YY_ORDER", "string");
        	this.dsSave.addColumn("NO_RECRUIT", "string");
        	this.dsSave.addColumn("DT_ORDER", "string");
        	this.dsSave.addColumn("DS_ORDER", "string");
        	this.dsSave.addColumn("ID_USER", "string");

            //서브
        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_CORP", "string");
        	this.dsSelectSub.addColumn("NO_RECRUIT", "string");
        	this.dsSelectSub.addColumn("CV_1", "string");

        	this.dsSaveSub = new Dataset();
        	this.dsSaveSub.addColumn("TY_SAVE", "string");
        	this.dsSaveSub.addColumn("CD_CORP", "string");
        	this.dsSaveSub.addColumn("NO_RECRUIT", "string");
        	this.dsSaveSub.addColumn("NO_SEQ", "string");
        	this.dsSaveSub.addColumn("DT_RECRUIT", "string");
        	this.dsSaveSub.addColumn("DS_HNAME", "string");
        	this.dsSaveSub.addColumn("ID_RECRUIT", "string");
        	this.dsSaveSub.addColumn("CD_RECRUIT", "string");
        	this.dsSaveSub.addColumn("CD_EXAMINEE", "string");
        	this.dsSaveSub.addColumn("CD_ORDER1", "string");
        	this.dsSaveSub.addColumn("CD_ORDER2", "string");
        	this.dsSaveSub.addColumn("CD_ADOPTYPE", "string");
        	this.dsSaveSub.addColumn("CD_EMPTYPE", "string");
        	this.dsSaveSub.addColumn("CD_POSITION", "string");
        	this.dsSaveSub.addColumn("CD_PAYSTEP", "string");
        	this.dsSaveSub.addColumn("CD_OCCUPATION", "string");
        	this.dsSaveSub.addColumn("CD_DUTY", "string");
        	this.dsSaveSub.addColumn("CD_JOBTYPE", "string");
        	this.dsSaveSub.addColumn("CD_DEPT", "string");
        	this.dsSaveSub.addColumn("ID_SABUN", "string");
        	this.dsSaveSub.addColumn("ID_PERSON", "string");
        	this.dsSaveSub.addColumn("YN_REFLECT", "string");
        	this.dsSaveSub.addColumn("CD_AGREEMENT", "string");
        	this.dsSaveSub.addColumn("NO_GISU", "string");
        	this.dsSaveSub.addColumn("ID_USER", "string");

        	// 대상자가져오기
        	this.dsSelectRecruit = new Dataset();
        	this.dsSelectRecruit.addColumn("CD_CORP", "string");
        	this.dsSelectRecruit.addColumn("NO_NOTICE", "string");
        	this.dsSelectRecruit.addColumn("NO_RECRUIT", "string");
        	this.dsSelectRecruit.addColumn("DT_RECRUIT", "string");

        	this.dsApproval = new Dataset();
        	this.dsApproval.addColumn("TY_STATUS", "string");
        	this.dsApproval.addColumn("CD_CORP", "string");
        	this.dsApproval.addColumn("YY_ORDER", "string");
        	this.dsApproval.addColumn("NO_RECRUIT", "string");
        	this.dsApproval.addColumn("ID_USER", "string");
        }

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

        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "YY_ORDER", this.dsSearch.getColumn(0, "YY_ORDER"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid);
        	this.dsList.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsList.setColumn(nrow, "YY_ORDER", this.dsSearch.getColumn(0, "YY_ORDER"));
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	var nrow = this.dsList.rowposition;

        	if (this.dsList.getColumn(nrow, "YN_REFLECT") == "Y"){
        		this.gfnAlert("승인된 채용발령건은 삭제할 수 없습니다.", "");
        	}

        	this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsSave.setColumn(nrow, "YY_ORDER", this.dsList.getColumn(i, "YY_ORDER"));
        				this.dsSave.setColumn(nrow, "NO_RECRUIT", this.dsList.getColumn(i, "NO_RECRUIT"));
        				this.dsSave.setColumn(nrow, "DT_ORDER", this.dsList.getColumn(i, "DT_ORDER"));
        				this.dsSave.setColumn(nrow, "DS_ORDER", this.dsList.getColumn(i, "DS_ORDER"));
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "dsOutput=save";
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
        	this.gfnExcelExport(this.dxGrid);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }

        /*
         *	초기화 버튼
         */
        this.fnReset  = function() {
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();

        	//적용년도 셋팅
        	var today = this.gfnGetDate().substring(0,4);
        	this.divSearch.form.ctclYY_ORDER.form.TextBox.set_value(today);

        	//법인 셋팅
        	//this.divSearch.form.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	//this.divSearch.form.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	this.FormBtns.Select.click();
        }

        /************************************************************************
         * 서브 버튼 이벤트 (조회, 입력, 수정, 삭제)
         ************************************************************************/
         this.fnSelectSub = function() {
        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return false;

        	//마스터 그리드값  가져오기
        	this.dsListSub.clearData();

        	var CD_CORP = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");	// 법인코드
        	var NO_RECRUIT = this.dsList.getColumn(this.dsList.rowposition, "NO_RECRUIT");	// 문서번호
        	if (this.gfnIsNull(CD_CORP) || this.gfnIsNull(NO_RECRUIT)) {
        		return false;
        	}

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();
        	this.dsSelectSub.setColumn(0, "CD_CORP", CD_CORP);
        	this.dsSelectSub.setColumn(0, "NO_RECRUIT", NO_RECRUIT);

        	var strSvcId    = "detail";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "d_select=dsSelectSub";
        	var outData     = "dsListSub=d_select0";
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

        this.fnAddSub = function() {
        	var nrow = this.gfnGridAdd(this.dxGridSub);
        	var CD_CORP = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");		// 법인코드
        	var NO_RECRUIT = this.dsList.getColumn(this.dsList.rowposition, "NO_RECRUIT");	// 문서번호
        	var DT_ORDER = this.dsList.getColumn(this.dsList.rowposition, "DT_ORDER");		// 채용일자

        	this.dsListSub.setColumn(nrow, "CD_CORP", CD_CORP);
        	this.dsListSub.setColumn(nrow, "NO_RECRUIT", NO_RECRUIT);
        	this.dsListSub.setColumn(nrow, "DT_RECRUIT", DT_ORDER);
        	this.dsListSub.setColumn(nrow, "CD_ORDER1", "01");	// 발령대분류 - 01 : 채용
        }

        this.fnDelSub = function() {
        	this.gfnGridDel(this.dxGridSub);
        }

        /*
         *	저장 버튼
         */
        this.fnSaveSub = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGridSub)) return;

        	this.dxGridSub.updateToDataset();
        	this.dsSaveSub.clearData();

        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSaveSub.addRow();
        				this.dsSaveSub.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSaveSub.setColumn(nrow, "CD_CORP", this.dsListSub.getColumn(i, "CD_CORP"));
        				this.dsSaveSub.setColumn(nrow, "NO_RECRUIT", this.dsListSub.getColumn(i, "NO_RECRUIT"));
        				this.dsSaveSub.setColumn(nrow, "NO_SEQ", this.dsListSub.getColumn(i, "NO_SEQ"));
        				this.dsSaveSub.setColumn(nrow, "DT_RECRUIT", this.gfnGetDigit(this.dsListSub.getColumn(i, "DT_RECRUIT")));
        				this.dsSaveSub.setColumn(nrow, "DS_HNAME", this.dsListSub.getColumn(i, "DS_HNAME"));
        				this.dsSaveSub.setColumn(nrow, "ID_RECRUIT", this.dsListSub.getColumn(i, "ID_RECRUIT"));
        				this.dsSaveSub.setColumn(nrow, "CD_RECRUIT", this.dsListSub.getColumn(i, "CD_RECRUIT"));
        				this.dsSaveSub.setColumn(nrow, "CD_EXAMINEE", this.dsListSub.getColumn(i, "CD_EXAMINEE"));
        				this.dsSaveSub.setColumn(nrow, "CD_ORDER1", this.dsListSub.getColumn(i, "CD_ORDER1"));
        				this.dsSaveSub.setColumn(nrow, "CD_ORDER2", this.dsListSub.getColumn(i, "CD_ORDER2"));
        				this.dsSaveSub.setColumn(nrow, "CD_ADOPTYPE", this.dsListSub.getColumn(i, "CD_ADOPTYPE"));
        				this.dsSaveSub.setColumn(nrow, "CD_EMPTYPE", this.dsListSub.getColumn(i, "CD_EMPTYPE"));
        				this.dsSaveSub.setColumn(nrow, "CD_POSITION", this.dsListSub.getColumn(i, "CD_POSITION"));
        				this.dsSaveSub.setColumn(nrow, "CD_PAYSTEP", this.dsListSub.getColumn(i, "CD_PAYSTEP"));
        				this.dsSaveSub.setColumn(nrow, "CD_OCCUPATION", this.dsListSub.getColumn(i, "CD_OCCUPATION"));
        				this.dsSaveSub.setColumn(nrow, "CD_DUTY", this.dsListSub.getColumn(i, "CD_DUTY"));
        				this.dsSaveSub.setColumn(nrow, "CD_JOBTYPE", this.dsListSub.getColumn(i, "CD_JOBTYPE"));
        				this.dsSaveSub.setColumn(nrow, "CD_DEPT", this.dsListSub.getColumn(i, "CD_DEPT"));
        				this.dsSaveSub.setColumn(nrow, "ID_SABUN", this.dsListSub.getColumn(i, "ID_SABUN"));
        				this.dsSaveSub.setColumn(nrow, "ID_PERSON", this.dsListSub.getColumn(i, "ID_PERSON"));
        				this.dsSaveSub.setColumn(nrow, "YN_REFLECT", this.dsListSub.getColumn(i, "YN_REFLECT"));
        				this.dsSaveSub.setColumn(nrow, "CD_AGREEMENT", this.dsListSub.getColumn(i, "CD_AGREEMENT"));
        				this.dsSaveSub.setColumn(nrow, "NO_GISU", this.dsListSub.getColumn(i, "NO_GISU"));
        				this.dsSaveSub.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        				break;
        		}
        	}

        	if (this.dsSaveSub.rowcount == 0) return;

        	var strSvcId    = "savesub";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "d_save=dsSaveSub";
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
        this.fnExcelSub = function() {
        	this.gfnExcelExport(this.dxGridSub);
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
        	var cd_corp = this.ccfCD_CORP.form.CDTextBox.value;
        	var yy_order = this.divSearch.form.ctclYY_ORDER.form.TextBox.value;

        	if (this.gfnIsNull(yy_order)) {
        		validate = false;
        		this.gfnAlert("채용년도를 입력하세요.", "fnVaidateCallback");
        	}

        	/*
        	if (this.gfnIsNull(cd_corp)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.", "fnVaidateCallback");
        	}
        	*/

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

        	switch(svcID) {
        		case "select":
        			this.gfnGridAfterSelect(this.dxGrid);
        			//if (this.dsList.rowcount == 0) this.gfnAlert("자료가 존재하지 않습니다.");
        			break;
        		case "detail":
        			var nrow = this.dsList.rowposition;
        			var YN_REFLECT = this.dsList.getColumn(nrow, "YN_REFLECT");	// 반영여부
        			if(YN_REFLECT == "Y"){
        				this.fnSetSubButton();
        			}
        			this.gfnGridAfterSelect(this.dxGridSub);
        			break;
        		case "save":
        			if (errorCode == 0) {
        				this.gfnAlert("작업이 완료되었습니다.");
        				this.FormBtns.Select.click();
        			} else {
        				this.gfnAlert(errorMsg);
        			}
        			break;
        		case "savesub":
        			if (errorCode == 0) {
        				this.gfnAlert("작업이 완료되었습니다.");
        				this.FormBtns.SubSelect.click();
        			} else {
        				this.gfnAlert(errorMsg);
        			}
        			break;
        		case "approval":	// 승인
        		case "cancel":		// 승인취소
        			if (errorCode == 0) {
        				this.gfnAlert("작업이 완료되었습니다.");
        				this.FormBtns.Select.click();
        			} else {
        				this.gfnAlert(errorMsg);
        			}
        			break;

        		case "selectRecruit":
        			if (errorCode == 0) {
        				if(this.dsListRecruit.rowcount == 0) return;
        				this.dsListSub.set_enableevent(false);

        				for(var i = 0; i < this.dsListRecruit.rowcount; i++){
        					//var nrow = this.dsListSub.addRow();
        					var nrow = this.gfnGridAdd(this.dxGridSub);

        					this.dsListSub.copyRow(nrow, this.dsListRecruit, i);
        					this.dsListSub.setColumn(nrow, this.ucFlag, "I");
        				}
        				this.gfnSetFormStatus(this, "I");
        				this.dsListSub.set_enableevent(true);

        			} else {
        				this.gfnAlert(errorMsg);
        			}
        			break;

        		default:
        	}
        	this.fnSetButton();
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.codefind_AfterCDTextChanged = function(id) {
        	if(id == "ccfCD_CORP") {
        		this.fnSearchInit();
        		this.FormBtns.Select.click();
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	trace('grid_코드파인드_식별id:[' + id + "] nrow:[" + nrow +"] grid_currentrow:" + this.dxGridSub.currentrow + "]" );

        	switch(id) {
        		case "DAX_CFCORP":     // 법인
        		case "DAX_CFPAYSTEPSUB":     // 급호

        		break;

        		case "DAX_CFDEPT":     // 부서
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.text);
        			dsUserParam.setColumn(nrow, "YN_CURRENT", "");
        		break;

        		case "DAX_CFORDER":     // 발령코드
        			/*
        			var nRow = this.dxGridSub.currentrow;
        			var CD_ORDER1 = this.dsListSub.getColumn(nRow, "CD_ORDER1");
        			if (this.gfnIsNull(CD_ORDER1)) {
        				this.gfnAlert("발령코드 대분류를 입력하세요.", "fnVaidateCallback");
        				return false;
        			}

        			trace( "["+nrow +  "] CD_ORDER1->" + CD_ORDER1);
        			*/
        			var CD_ORDER1 = "01";	// 채용
        			dsUserParam.setColumn(nrow, "CD_ORDER1", CD_ORDER1);
        		break;

        		case "OA":     // 발령대분류
        		case "AD":     // 채용구분
        		case "EA":     // 계약구분
        		case "ED":     // 직위
        		case "EC":     // 직책
        		case "EF":     // 직무
        		case "EB":     // 직종

        			dsUserParam.setColumn(nrow, "CD_PREFIX", id);
        		break;

        		default:
        	}

        	return true;
        };

        // 그리드 코드파인드 코드값 변경 (추가 데이터 처리를 위한) 이벤트
        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	switch(id) {
        		case "OA":     // 발령대분류
        			this.dsListSub.setColumn(this.dxGridSub.currentrow, "CD_ORDER2", "");
        			this.dsListSub.setColumn(this.dxGridSub.currentrow, "DS_ORDER2", "");
        		break;
        		default:
        	}
        	return true;
        };

        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		this.FormBtns.SubSelect.click();
        		obj.oldrow = -1;
        	}
        };

        this.dsList_canrowposchange = function(obj,e) {
        	var can_rowchange = true;
        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		if (flag == "I" || flag == "U" || flag == "D") {
        			can_rowchange = false;
        			break;
        		}
        	}
        	if(!can_rowchange) {
        		this._row = e.newrow;
        		this.gfnConfirm("변경된 데이터가 있습니다.\r\n계속 진행하시겠습니까?", "dsList_canrowposchange_callback");
        	}
        	return can_rowchange;
        }

        this.dsList_canrowposchange_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsList.set_enableevent(false);
        		this.dsList.set_rowposition(this._row);
        		this.dsList.set_enableevent(true);
        	}
        }

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
        		this.gfnGridClear(this.dxGridSub);
        		this.fnSetButton();
        	}
        }

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        		this.fnSetButton();
        	}
        };

        // 대상자 가져오기 (팝업에서 선택 - 파일업로드 or 테이블조회)
        this.fnGetRecruitInfo = function(obj,e) {
        	gNO_NOTICE = "";	// 채용공고
        	gCD_CORP = "";;		// 채용법인

        	var param = {};
        	param.CD_CORP = this.ccfCD_CORP.form.CDTextBox.value;
        	param.DS_CORP = this.ccfCD_CORP.form.DSTextBox.value;

        	//this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DAR_RECRUIT_ORDER_DLG", "fnOrderCreateCallback", param);
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAR_RECRUIT_ORDER_DLG", "fnOrderCreateCallback", param, 390,270);
        };

        this.fnOrderCreateCallback = function(svcID, value) {
        	if(value) {
        		var json = JSON.parse(value);
        		gNO_NOTICE = json.NO_NOTICE;	// 채용공고
        		gCD_CORP = json.CD_CORP;		// 채용법인

        		//trace("CD_TYPE->" + json.CD_TYPE + " / gNO_NOTICE->" + gNO_NOTICE + " / gCD_CORP->"+ gCD_CORP);
        		// 여기서 분기처리 파일업로드 or 테이블조회해서 입력하는것
        		if(json.CD_TYPE == "EXCEL"){
        			this.fnExcelImport();
        		}else {
        			this.fnRecruitOrderCreate(gNO_NOTICE, gCD_CORP);
        		}
        	}
        }

        // 대상자 엑셀 업로드
        this.fnExcelImport = function(){
        // this.gfnExcelImport("적용할Dataset명","sheet명","데이터시작좌표","콜백함수명","구분ID",현재폼);
        	this.gfnExcelImport("dsListSub","sheet1","A2","fnExcelImportCallback","import",this);
        }

        this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet) {
        	// 다중 시트 처리시 양식의 해당 시트여부를 체크하고자 할땐 dsSheet 시트명 체크
        	// 	if (dsSheet.rowcount > 1) {
        	// 		trace(dsSheet.getColumn(1, "sheetname"));
        	// 	}

        	// 엑셀 양식과 그리드 컬럼이 그대로 일치 하는경우 아래와 같이 처리.
        	// 아닌경우는 이부분 주석처리
        	for (var i=0; i< this.dsListSub.getColCount(); i++)
        	{
        		sColumnId = "Column"+i;
        		var sColumnNm = this.gfnGridGetBindColumnNameByIndex(this.dxGridSub, i);
        		if (sColumnNm != "" && sColumnId != sColumnNm)
        		{
        			dsOut.updateColID(sColumnId, sColumnNm);
        		}
        	}

        	// 양식이 일치하고 엑셀내역을 기존데이터에 Insert하지 않고
        	// 엑셀내역 그대로 그리드 반영할 시 copyData
        	//this.dsList.copyData(dsOut);

        	this.dsListSub.set_enableevent(false);
        	for (var i=0; i<dsOut.rowcount; i++) {
        		//var nrow = this.dsListSub.addRow();
        		var nrow = this.gfnGridAdd(this.dxGridSub);
        		this.dsListSub.setColumn(nrow, this.ucFlag, "I");

        	// 양식이 일치하는 경우 copyRow
        	this.dsListSub.copyRow(nrow, dsOut, i);

        	// 양식과 일치하지 않는 경우 아래와 같이 컬럼별로 처리.
           //this.dsList.setColumn(nrow, "CD_SYSTEM", dsOut.getColumn(i, "Column1"));
           //this.dsList.setColumn(nrow, "CD_TYPE", dsOut.getColumn(i, "Column2"));

        	}
        	this.dsListSub.set_enableevent(true);

        	this.gfnSetFormStatus(this, "I");
        	this.dxGridSub.setFocus();
        };

         /*
          *	대상자 데이터 가져오기 (DART_RECRUIT_LIST 테이블에서)
          */
        this.fnRecruitOrderCreate = function(NO_NOTICE, CD_CORP) {
        	this.dsSelectRecruit.clearData();
        	this.dsSelectRecruit.addRow();

        	var NO_RECRUIT = this.dsList.getColumn(this.dsList.rowposition, "NO_RECRUIT");
        	var DT_ORDER = this.dsList.getColumn(this.dsList.rowposition, "DT_ORDER");

        	this.dsSelectRecruit.setColumn(0, "CD_CORP", CD_CORP);			// 채용법인
        	this.dsSelectRecruit.setColumn(0, "NO_NOTICE", NO_NOTICE);		// 채용공고
        	this.dsSelectRecruit.setColumn(0, "NO_RECRUIT", NO_RECRUIT);	// 문서번호
        	this.dsSelectRecruit.setColumn(0, "DT_RECRUIT", DT_ORDER);		// 채용일자

        	var strSvcId    = "selectRecruit";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectRecruit=dsSelectRecruit";
        	var outData     = "dsListRecruit=selectRecruit0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        this.fnCheckFlag = function(checkCallback) {
        	if (this.dsListSub.rowcount == 0){
        		this.gfnAlert("처리 대상 항목이 없습니다.", "");
        		return;
        	}

        	var can_rowchange = true;
        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		if (flag == "I" || flag == "U" || flag == "D") {
        			can_rowchange = false;
        		}
        	}

        	if(!can_rowchange) {
        		this.gfnConfirm("변경된 데이터가 있습니다.\r\n계속 진행하시겠습니까?", checkCallback);
        	}
        	return can_rowchange;
        }

        // 승인 처리
        this.fnApproval = function(obj,e) {
        	var nrow = this.dsList.rowposition;
        	var YN_REFLECT = this.dsList.getColumn(nrow, "YN_REFLECT");	// 반영여부
        	if(YN_REFLECT == "Y"){
        		this.gfnAlert("채용발령 승인된 내역입니다.", "");
        		return;
        	}

        	var checkCallback = "fnExeApproval";
        	if(!this.fnCheckFlag(checkCallback)) return;

        	this.gfnConfirm("선택한 내역을 승인하시겠습니까?", checkCallback);
        }

        // 반려취소 처리
        this.fnCancel = function(obj,e) {
        	var nrow = this.dsList.rowposition;
        	var YN_REFLECT = this.dsList.getColumn(nrow, "YN_REFLECT");	// 반영여부
        	if(YN_REFLECT != "Y"){
        		this.gfnAlert("채용발령 승인된건만 취소가능합니다.", "");
        		return;
        	}

        	var checkCallback = "fnExeCancel";
        	if(!this.fnCheckFlag(checkCallback)) return;
        	this.gfnConfirm("선택한 내역을 승인취소하시겠습니까?", checkCallback);
        }

        // 반려 (Callback)
        this.fnExeCancel = function(strId, val) {
        	if(val == false) return;

        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return false;

        	var nrow = this.dsList.rowposition;
        	var CD_CORP = this.dsList.getColumn(nrow, "CD_CORP");		// 법인코드
        	var YY_ORDER = this.dsList.getColumn(nrow, "YY_ORDER");		// 년도
        	var NO_RECRUIT = this.dsList.getColumn(nrow, "NO_RECRUIT");	// 문서번호
        	if (this.gfnIsNull(CD_CORP) || this.gfnIsNull(YY_ORDER) || this.gfnIsNull(NO_RECRUIT)) {
        		return false;
        	}

        	this.dsApproval.clearData();
        	this.dsApproval.addRow();

        	this.dsApproval.setColumn(0, "CD_CORP", CD_CORP);
        	this.dsApproval.setColumn(0, "YY_ORDER", YY_ORDER);
        	this.dsApproval.setColumn(0, "NO_RECRUIT", NO_RECRUIT);
        	this.dsApproval.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "cancel";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "cancel=dsApproval";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        // 승인처리 (Callback)
        this.fnExeApproval = function(strId, val) {
        	if(val == false) return;
        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return false;


        	var nrow = this.dsList.rowposition;
        	var CD_CORP = this.dsList.getColumn(nrow, "CD_CORP");		// 법인코드
        	var YY_ORDER = this.dsList.getColumn(nrow, "YY_ORDER");		// 년도
        	var NO_RECRUIT = this.dsList.getColumn(nrow, "NO_RECRUIT");	// 문서번호
        	if (this.gfnIsNull(CD_CORP) || this.gfnIsNull(YY_ORDER) || this.gfnIsNull(NO_RECRUIT)) {
        		return false;
        	}

        	this.dsApproval.clearData();
        	this.dsApproval.addRow();

        	this.dsApproval.setColumn(0, "CD_CORP", CD_CORP);
        	this.dsApproval.setColumn(0, "YY_ORDER", YY_ORDER);
        	this.dsApproval.setColumn(0, "NO_RECRUIT", NO_RECRUIT);
        	this.dsApproval.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "approval";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "approval=dsApproval";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	splitter
         */
        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_left(e.clientx);
        		this.divData.form.resetScroll();
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAR_RECRUIT_ORDER.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
