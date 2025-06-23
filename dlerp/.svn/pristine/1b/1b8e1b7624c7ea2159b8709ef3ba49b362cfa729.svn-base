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
            this.set_titletext("상호평가관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAJPR_INTERACTION_GROUP_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAJPR_INTERACTION_GROUP_SAVE</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DAJPR_INTERACTION_MASTER_SELECT</Col></Row><Row><Col id=\"TARGET\">d_save</Col><Col id=\"SP\">DAJPR_INTERACTION_MASTER_SAVE</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DAJPR_INTERACTION_CREATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YY_EVALUATION\" type=\"STRING\" size=\"256\"/><Column id=\"TY_EVALUATION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"DS_CORP\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_EVALUATION", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">01</Col><Col id=\"DS_CODE\">상반기</Col></Row><Row><Col id=\"CD_CODE\">02</Col><Col id=\"DS_CODE\">하반기</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYY_EVALUATION","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("평가년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfYY_EVALUATION","staYY_EVALUATION:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_EVALUATION","ccfYY_EVALUATION:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("구분");
            obj.set_rtl("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_EVALUATION","staTY_EVALUATION:0.0","10.0","94","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsTY_EVALUATION");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","50%","0","5","100%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100","22",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("1");
            obj.set_text("부문 정보");
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
            obj.set_text("대상자");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfYY_EVALUATION.form.TextBox","value","dsSearch","YY_EVALUATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboTY_EVALUATION","value","dsSearch","TY_EVALUATION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DAJ_INTERACTION_MASTER.xfdl", function() {
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

        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        	var today = this.gfnGetDate();
        	this.ccfYY_EVALUATION.form.TextBox.set_value(today.substr(0,4));
        	this.cboTY_EVALUATION.set_index(0);

        	//화면 로드시 자동조회
        	//this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// 서브 버튼 사용
        	this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnCreateTarget = this.gfnFormButtonAdd("CreateTarget", "fnCreateTarget"); 	//대상자생성
        };

        // 대상자생성 버튼 클릭(팝업에서 처리)
        this.fnCreateTarget = function(obj,e) {
        	var param = {};

        	param.YY_EVALUATION = this.dsSearch.getColumn(0, "YY_EVALUATION"); 	// 평가년도
            param.CD_CORP = this.dsSearch.getColumn(0, "CD_CORP"); 				// 법인 코드
        	param.DS_CORP = this.dsSearch.getColumn(0, "DS_CORP"); 				// 법인명
        	param.TY_EVALUATION = this.dsSearch.getColumn(0, "TY_EVALUATION");	// 상하반기구분
        	param.ID_FORM = "DAJ_INTERACTION_MASTER";

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAJ_EVALUATION_TARGET_DLG1", "fnCreateTarget_Callback", param);
        }

        this.fnCreateTarget_Callback = function(svcID, value){
        	if(value != false) {
        		var json = JSON.parse(value);
        		this.dsSearch.set_enableevent(false);
        		this.dsSearch.setColumn(0, "YY_EVALUATION", json.YY_EVALUATION);
        		this.dsSearch.setColumn(0, "CD_CORP", json.CD_CORP);
        		this.dsSearch.setColumn(0, "DS_CORP", json.DS_CORP);
        		this.dsSearch.setColumn(0, "TY_EVALUATION", json.TY_EVALUATION);
        		this.dsSearch.set_enableevent(true);
        	}
        	this.FormBtns.Select.click();
        }

        /*
        //대상자생성 (팝업으로변경 20220404)
        this.fnCreateTarget = function(){
        	if(!this.fnCreateValid()) return;

        	this.gfnConfirm("기존의 정보가 삭제되고 재 생성 됩니다. \n대상자를 생성하시겠습니까?", "fnCreateTarget_callback");
        }
        this.fnCreateTarget_callback = function(id, val){
        	if(val){
        		this.dsCreate.clearData();

        		var nrow = this.dsCreate.addRow();

        		this.dsCreate.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsCreate.setColumn(nrow, "YY_EVALUATION", this.dsSearch.getColumn(0, "YY_EVALUATION"));
        		this.dsCreate.setColumn(nrow, "TY_EVALUATION", this.dsSearch.getColumn(0, "TY_EVALUATION"));
        		this.dsCreate.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		this.dsCreate.setColumn(nrow, "TY_AUTH", this.FormInfo.TY_AUTH);
        		this.dsCreate.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        		this.dsCreate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);


        		if (this.dsCreate.rowcount == 0) return;

        		var strSvcId    = "create";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "create=dsCreate";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        							callBackFnc);   // 통신방법 정의 [생략가능]
        	}
        }
        */

        this.fnCreateValid = function(){
        	if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)){
        		this.fnValidCallback = function(){
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인을 선택하세요!", "fnValidCallback");
        		return false;
        	}
        	if(this.gfnIsNull(this.ccfYY_EVALUATION.form.TextBox.value)){
        		this.fnValidCallback = function(){
        			this.ccfYY_EVALUATION.form.TextBox.setFocus();
        		}
        		this.gfnAlert("평가년도를 입력하세요!", "fnValidCallback");
        		return false;
        	}
        	if(this.gfnIsNull(this.cboTY_EVALUATION.value)){
        		this.fnValidCallback = function(){
        			this.cboTY_EVALUATION.setFocus();
        		}
        		this.gfnAlert("구분을 입력하세요!", "fnValidCallback");
        		return false;
        	}
        	return true;
        }


        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfYY_EVALUATION = this.divSearch.form.ccfYY_EVALUATION;
        	this.cboTY_EVALUATION = this.divSearch.form.cboTY_EVALUATION;
        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataRight.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";


        	// 그리드 초기화
        	/*this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAJ_INTERACTION_MASTER"); //   DAJ_UPTURN_MASTER*/
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAJ_INTERACTION_GROUP"); //   DAJ_UPTURN_MASTER
        	/*this.gfnGridInit(this.dxGridSub, this.dsListSub, "DA", "DAJ_INTERACTION_MASTER_D"); //  //DAJ_UPTURN_DETAIL*/
        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DA", "DAJ_INTERACTION_MASTER");


        	//그리드master
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";	// 그리드 코드파인드 설정
        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";	// 셀 변경 후 이벤트

        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);

        	//그리드detail
        	this.dxGridSub.BeforeUserDataSetParam = "fnGridSub_BeforeUserDataSetParam";	// 그리드 코드파인드 설정
        	this.dxGridSub.AfterEdit = "fnGridSub_AfterEdit";	// 셀 변경 후 이벤트



        // 	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body", "CD_CODE"), "editinputtype", "alpha,digit");
        // 	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body", "CD_CODE"), "editmaxlength", "10");
        // 	this.dxGridSub.setCellProperty( "body", this.dxGridSub.getBindCellIndex("body", "CD_ORDER2"), "editinputtype", "alpha,digit");
        // 	this.dxGridSub.setCellProperty( "body", this.dxGridSub.getBindCellIndex("body", "CD_ORDER2"), "editmaxlength", "10");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	//메인
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YY_EVALUATION", "string");
        	this.dsSelect.addColumn("TY_EVALUATION", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("TY_AUTH", "string");
        	this.dsSelect.addColumn("GR_DEPT", "string");
        	this.dsSelect.addColumn("ID_USER", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("NO_SEQ", "int");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("YY_EVALUATION", "string");
        	this.dsSave.addColumn("TY_EVALUATION", "string");
        	this.dsSave.addColumn("CD_GROUP", "string");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("GR_SEARCH", "string");
        	this.dsSave.addColumn("TY_AUTH", "string");
        	this.dsSave.addColumn("GR_DEPT", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("TY_DEPT", "string");

            //서브
        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_CORP", "string");
        	this.dsSelectSub.addColumn("YY_EVALUATION", "string");
        	this.dsSelectSub.addColumn("TY_EVALUATION", "string");
        	this.dsSelectSub.addColumn("CD_GROUP", "string");
        	this.dsSelectSub.addColumn("GR_SEARCH", "string");
        	this.dsSelectSub.addColumn("TY_AUTH", "string");
        	this.dsSelectSub.addColumn("TY_DEPT", "string");
        	this.dsSelectSub.addColumn("GR_DEPT", "string");
        	this.dsSelectSub.addColumn("ID_USER", "string");

        	this.dsSaveSub = new Dataset();
        	this.dsSaveSub.addColumn("TY_SAVE", "string");
        	this.dsSaveSub.addColumn("CD_CORP", "string");
        	this.dsSaveSub.addColumn("YY_EVALUATION", "string");
        	this.dsSaveSub.addColumn("TY_EVALUATION", "string");
        	this.dsSaveSub.addColumn("ID_PERSON", "int");
        	this.dsSaveSub.addColumn("ID_SABUN", "string");
        	this.dsSaveSub.addColumn("ID_TARGET", "string");
        	this.dsSaveSub.addColumn("CD_DEPT", "string");
        	this.dsSaveSub.addColumn("CD_PAYSTEP", "string");
        	this.dsSaveSub.addColumn("CD_POSITION", "string");
        	this.dsSaveSub.addColumn("DS_REMARK", "string");
        	this.dsSaveSub.addColumn("GR_SEARCH", "string");
        	this.dsSaveSub.addColumn("TY_AUTH", "string");
        	this.dsSaveSub.addColumn("GR_DEPT", "string");
        	this.dsSaveSub.addColumn("ID_USER", "string");
        	this.dsSaveSub.addColumn("TY_DEPT", "string");

        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("CD_CORP", "string");
        	this.dsCreate.addColumn("YY_EVALUATION", "string");
        	this.dsCreate.addColumn("TY_EVALUATION", "string");
        	this.dsCreate.addColumn("GR_SEARCH", "string");
        	this.dsCreate.addColumn("TY_AUTH", "string");
        	this.dsCreate.addColumn("GR_DEPT", "string");
        	this.dsCreate.addColumn("ID_USER", "string");
        }


        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnSelectValid()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);
        	this.gfnSetFormStatus(this);

        	this.dsListSub.clearData();

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "YY_EVALUATION", this.dsSearch.getColumn(0, "YY_EVALUATION"));
        	this.dsSelect.setColumn(0, "TY_EVALUATION", this.dsSearch.getColumn(0, "TY_EVALUATION"));
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "TY_AUTH", this.FormInfo.TY_AUTH);
        	this.dsSelect.setColumn(0, "GR_DEPT", this.AuthClient.CD_DEPT);
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

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
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnSelectValid = function(){
        	if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)){
        		this.fnValidCallback = function(){
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인을 선택하세요!", "fnValidCallback");
        		return false;
        	}
        	if(this.gfnIsNull(this.ccfYY_EVALUATION.form.TextBox.value)){
        		this.fnValidCallback = function(){
        			this.ccfYY_EVALUATION.form.TextBox.setFocus();
        		}
        		this.gfnAlert("평가년도를 입력하세요!", "fnValidCallback");
        		return false;
        	}
        	if(this.gfnIsNull(this.cboTY_EVALUATION.value)){
        		this.fnValidCallback = function(){
        			this.cboTY_EVALUATION.setFocus();
        		}
        		this.gfnAlert("구분을 입력하세요!", "fnValidCallback");
        		return false;
        	}
        	return true;
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid);
        	this.dsList.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsList.setColumn(nrow, "YY_EVALUATION", this.dsSearch.getColumn(0, "YY_EVALUATION"));
        	this.dsList.setColumn(nrow, "TY_EVALUATION", this.dsSearch.getColumn(0, "TY_EVALUATION"));
        }
        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
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
        				this.dsSave.setColumn(nrow, "NO_SEQ", this.gfnNvl(this.dsList.getColumn(i, "NO_SEQ"), ""));
        				this.dsSave.setColumn(nrow, "CD_CORP", flag == "I" ? this.dsSearch.getColumn(0, "CD_CORP") : this.gfnNvl(this.dsList.getColumn(i, "CD_CORP"), ""));
        				this.dsSave.setColumn(nrow, "YY_EVALUATION", flag == "I" ? this.dsSearch.getColumn(0, "YY_EVALUATION") : this.gfnNvl(this.dsList.getColumn(i, "YY_EVALUATION"), ""));
        				this.dsSave.setColumn(nrow, "TY_EVALUATION", flag == "I" ? this.dsSearch.getColumn(0, "TY_EVALUATION") : this.gfnNvl(this.dsList.getColumn(i, "TY_EVALUATION"), ""));
        				this.dsSave.setColumn(nrow, "CD_GROUP", this.gfnNvl(this.dsList.getColumn(i, "CD_GROUP"), ""));
        				this.dsSave.setColumn(nrow, "TY_DEPT", this.dsList.getColumn(i, "TY_DEPT"));
        				this.dsSave.setColumn(nrow, "DS_REMARK", this.gfnNvl(this.dsList.getColumn(i, "DS_REMARK"), ""));
        				this.dsSave.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        				this.dsSave.setColumn(nrow, "TY_AUTH", this.FormInfo.TY_AUTH);
        				this.dsSave.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
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
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid, "", this.gfnGetArgument("NM_FORM")+"_대상자정보_"+this.gfnGetDate());
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }

        /************************************************************************
         * 서브 버튼 이벤트 (조회, 입력, 수정, 삭제)
         ************************************************************************/
         this.fnSelectSub = function() {
        	if (!this.gfnGridIsRow(this.dxGrid)) {
        		return false;
        	}

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();

        	this.dsSelectSub.setColumn(0, "CD_CORP", this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));
        	this.dsSelectSub.setColumn(0, "YY_EVALUATION", this.dsList.getColumn(this.dsList.rowposition, "YY_EVALUATION"));
        	this.dsSelectSub.setColumn(0, "TY_EVALUATION", this.dsList.getColumn(this.dsList.rowposition, "TY_EVALUATION"));
        	this.dsSelectSub.setColumn(0, "CD_GROUP", this.dsList.getColumn(this.dsList.rowposition, "CD_GROUP"));
        	this.dsSelectSub.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelectSub.setColumn(0, "TY_DEPT", this.dsList.getColumn(this.dsList.rowposition, "TY_DEPT"));
        	this.dsSelectSub.setColumn(0, "TY_AUTH", this.FormInfo.TY_AUTH);
        	this.dsSelectSub.setColumn(0, "GR_DEPT", this.AuthClient.CD_DEPT);
        	this.dsSelectSub.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

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
        	this.dsListSub.setColumn(nrow, "CD_CORP", this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));
        	this.dsListSub.setColumn(nrow, "YY_EVALUATION", this.dsList.getColumn(this.dsList.rowposition, "YY_EVALUATION"));
        	this.dsListSub.setColumn(nrow, "TY_EVALUATION", this.dsList.getColumn(this.dsList.rowposition, "TY_EVALUATION"));
        	this.dsListSub.setColumn(nrow, "CD_GROUP", this.dsList.getColumn(this.dsList.rowposition, "CD_GROUP"));
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
        				this.dsSaveSub.setColumn(nrow, "CD_CORP", flag == "I" ? this.dsList.getColumn(this.dsList.rowposition, "CD_CORP") : this.dsListSub.getColumn(i, "CD_CORP"));
        				this.dsSaveSub.setColumn(nrow, "YY_EVALUATION", flag == "I" ? this.dsList.getColumn(this.dsList.rowposition, "YY_EVALUATION") : this.dsListSub.getColumn(i, "YY_EVALUATION"));
        				this.dsSaveSub.setColumn(nrow, "TY_EVALUATION", flag == "I" ? this.dsList.getColumn(this.dsList.rowposition, "TY_EVALUATION") : this.dsListSub.getColumn(i, "TY_EVALUATION"));
        				this.dsSaveSub.setColumn(nrow, "ID_PERSON", flag == "I" ? this.dsList.getColumn(this.dsList.rowposition, "ID_PERSON") : this.dsListSub.getColumn(i, "ID_PERSON"));
        				this.dsSaveSub.setColumn(nrow, "ID_SABUN", flag == "I" ? this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN") : this.dsListSub.getColumn(i, "ID_SABUN"));
        				this.dsSaveSub.setColumn(nrow, "TY_DEPT", this.dsList.getColumn(this.dsList.rowposition, "TY_DEPT"));
        				this.dsSaveSub.setColumn(nrow, "CD_DEPT", this.gfnNvl(this.dsListSub.getColumn(i, "CD_DEPT"), ""));
        				this.dsSaveSub.setColumn(nrow, "CD_JOBTYPE", this.gfnNvl(this.dsListSub.getColumn(i, "CD_JOBTYPE"), ""));
        				this.dsSaveSub.setColumn(nrow, "CD_EMPTYPE", this.gfnNvl(this.dsListSub.getColumn(i, "CD_EMPTYPE"), ""));
        				this.dsSaveSub.setColumn(nrow, "CD_PAYSTEP", this.gfnNvl(this.dsListSub.getColumn(i, "CD_PAYSTEP"), ""));
        				this.dsSaveSub.setColumn(nrow, "CD_POSITION", this.gfnNvl(this.dsListSub.getColumn(i, "CD_POSITION"), ""));
        				this.dsSaveSub.setColumn(nrow, "CD_OCCUPATION", this.gfnNvl(this.dsListSub.getColumn(i, "CD_OCCUPATION"), ""));
        				this.dsSaveSub.setColumn(nrow, "CD_DUTY", this.gfnNvl(this.dsListSub.getColumn(i, "CD_DUTY"), ""));
        				this.dsSaveSub.setColumn(nrow, "CD_GROUP", this.gfnNvl(this.dsListSub.getColumn(i, "CD_GROUP"), ""));
        				this.dsSaveSub.setColumn(nrow, "DS_REMARK", this.gfnNvl(this.dsListSub.getColumn(i, "DS_REMARK"), ""));
        				this.dsSaveSub.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        				this.dsSaveSub.setColumn(nrow, "TY_AUTH", this.FormInfo.TY_AUTH);
        				this.dsSaveSub.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
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
        	this.gfnExcelExport(this.dxGridSub, "", this.gfnGetArgument("NM_FORM")+"_평가자_"+this.gfnGetDate());
        }



        /************************************************************************
         * Validate
         ************************************************************************/

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
        	else if (svcID == "detail") {
        		this.gfnGridAfterSelect(this.dxGridSub);
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "savesub") {
        		if (errorCode == 0) {
        			this.FormBtns.SubSelect.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "create") {
        		if (errorCode == 0) {
        			this.gfnAlert("대상자생성이 완료되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(id == "ccfCD_CORP"){
        		;
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(id == "ccfCD_CORP"){
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         //master
         this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	if (id == "DAX_CFBASEINFO") { //피평가자-사번
        // 		if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        // 			this.ccfCD_CORP.form.CDTextBox.setFocus();
        // 			this.gfnAlert("법인을 먼저 선택하시기 바랍니다.");
        // 			return false;
        // 		}
        // 		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        // 		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        // 		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        // 		dsUserParam.setColumn(nrow, "YN_CORP", "N");
        // 		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");   // 재직구분


        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");   // 재직구분
        	}
        	else if(id == "DA"){
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "DA");
        	}
        	else if(id == "DAX_CFDEPT"){
        		if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        			this.gfnAlert("법인을 먼저 선택하시기 바랍니다.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "YN_CURRENT", "N");
        	}

        	return true;
        }

        this.fnGrid_AfterEdit = function(obj,e) {
        }

        //detail
         this.fnGridSub_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	if (id == "DAX_CFBASEINFO") { //피평가자-사번
        // 		if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        // 			this.ccfCD_CORP.form.CDTextBox.setFocus();
        // 			this.gfnAlert("법인을 먼저 선택하시기 바랍니다.");
        // 			return false;
        // 		}
        // 		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        // 		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        // 		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        // 		dsUserParam.setColumn(nrow, "YN_CORP", "N");
        // 		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");   // 재직구분


        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");   // 재직구분
        	}

        	return true;
        }

        this.fnGridSub_AfterEdit = function(obj,e) {
        }

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

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);

        	}
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
        this.loadIncludeScript("DAJ_INTERACTION_MASTER.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
