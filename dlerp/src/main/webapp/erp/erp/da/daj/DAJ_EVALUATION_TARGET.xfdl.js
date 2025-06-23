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
            this.set_titletext("인사 평가대상자 설정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAJPR_EVALUATION_TARGET_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAJPR_EVALUATION_TARGET_SAVE</Col></Row><Row><Col id=\"SP\">DAJPR_EVALUATION_TARGET_CREATE</Col><Col id=\"TARGET\">create</Col></Row><Row><Col id=\"TARGET\">close</Col><Col id=\"SP\">DAJPR_EVALUATION_TARGET_CLOSE</Col></Row><Row><Col id=\"TARGET\">delAll</Col><Col id=\"SP\">DAJPR_EVALUATION_TARGET_DEL_ALL</Col></Row><Row><Col id=\"TARGET\">saveExcel</Col><Col id=\"SP\">DAJPR_EVALUATION_TARGET_SAVE_EXCEL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YY_EVALUATION\" type=\"STRING\" size=\"256\"/><Column id=\"TY_EVALUATION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"DS_CORP\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_EVALUATION\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_1ST_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_1ST_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_1ST_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_2ND_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_2ND_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_2ND_HNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_EVALUATION", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">01</Col><Col id=\"DS_CODE\">상반기</Col></Row><Row><Col id=\"CD_CODE\">02</Col><Col id=\"DS_CODE\">하반기</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelForm", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_1ST_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_1ST_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_1ST_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_2ND_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_2ND_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_2ND_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","0.0","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYY_EVALUATION","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("평가년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfYY_EVALUATION","staYY_EVALUATION:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_EVALUATION","ccfYY_EVALUATION:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("구분");
            obj.set_rtl("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","staTY_EVALUATION:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("법인");
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
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("grdForm","71","55","49","50",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsExcelForm");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"118\"/><Column size=\"105\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"113\"/><Column size=\"103\"/><Column size=\"102\"/><Column size=\"124\"/><Column size=\"107\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"피평가자-사원번호\"/><Cell col=\"1\" text=\"피평가자-성명\"/><Cell col=\"2\" text=\"피평가자-부서코드\"/><Cell col=\"3\" text=\"피평가자-부서명\"/><Cell col=\"4\" text=\"1차평가자-그룹\"/><Cell col=\"5\" text=\"1차평가자-사원번호\"/><Cell col=\"6\" text=\"1차평가자-성명\"/><Cell col=\"7\" text=\"2차평가자-그룹\"/><Cell col=\"8\" text=\"2차평가자-사원번호\"/><Cell col=\"9\" text=\"2차평가자-성명\"/></Band><Band id=\"body\"><Cell text=\"bind:ID_SABUN\"/><Cell col=\"1\" text=\"bind:DS_HNAME\"/><Cell col=\"2\" text=\"bind:CD_DEPT\"/><Cell col=\"3\" text=\"bind:DS_DEPT\"/><Cell col=\"4\" text=\"bind:CD_1ST_GROUP\"/><Cell col=\"5\" text=\"bind:ID_1ST_SABUN\"/><Cell col=\"6\" text=\"bind:DS_1ST_HNAME\"/><Cell col=\"7\" text=\"bind:CD_2ND_GROUP\"/><Cell col=\"8\" text=\"bind:ID_2ND_SABUN\"/><Cell col=\"9\" text=\"bind:DS_2ND_HNAME\"/></Band></Format></Formats>");
            this.divData.addChild(obj.name, obj);
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
        this.registerScript("DAJ_EVALUATION_TARGET.xfdl", function() {
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
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
         	this.btnFormDown = this.gfnFormButtonAdd("FormDown", "fnFormDown"); //양식다운로드
        	this.btnExcelImport = this.gfnFormButtonAdd("ExcelImport", "fnExcelImport"); 	//엑셀업로드(양식대로 업로드할때)
        	//this.btnGridImport = this.gfnFormButtonAdd("GridImport", "fnGridImport"); 	//엑셀업로드(화면 그리드 다운받아서 그대로 업로드)
        	this.btnCreateTarget = this.gfnFormButtonAdd("CreateTarget", "fnCreateTarget"); 	//대상자생성
        // 	this.btnCloseTarget = this.gfnFormButtonAdd("CloseTarget", "fnCloseTarget"); 	//마감
        // 	this.btnUndoClose = this.gfnFormButtonAdd("UndoClose", "fnUndoClose"); 	//마감해제
        };


        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;

        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfYY_EVALUATION = this.divSearch.form.ccfYY_EVALUATION;
        	this.cboTY_EVALUATION = this.divSearch.form.cboTY_EVALUATION;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAJ_EVALUATION_TARGET");


        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";	// 그리드 코드파인드 설정
        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";	// 셀 변경 후 이벤트

        	// 셀 수정가능 여부
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
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
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("YY_EVALUATION", "string");
        	this.dsSave.addColumn("TY_EVALUATION", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("DS_HNAME", "string");
        	this.dsSave.addColumn("CD_POSITION", "string");
        	this.dsSave.addColumn("CD_DEPT", "string");
        	this.dsSave.addColumn("CD_EMPTYPE", "string");
        	this.dsSave.addColumn("CD_OCCUPATION", "string");
        	this.dsSave.addColumn("CD_PAYSTEP", "string");
        	this.dsSave.addColumn("CD_DUTY", "string");
        	this.dsSave.addColumn("CD_JOBTYPE", "string");
        	this.dsSave.addColumn("DT_JOIN", "string");
        	this.dsSave.addColumn("CD_GROUP", "string");
        	this.dsSave.addColumn("NO_POINT", "int");
        	this.dsSave.addColumn("CD_POINT", "string");
        	this.dsSave.addColumn("DS_OPINION", "string");
        	this.dsSave.addColumn("CD_SLEDDING", "string");
        	this.dsSave.addColumn("CD_1ST_GROUP", "string");
        	this.dsSave.addColumn("ID_1ST_SABUN", "string");
        	this.dsSave.addColumn("DS_1ST_HNAME", "string");
        	this.dsSave.addColumn("NO_1ST_POINT", "int");
        	this.dsSave.addColumn("CD_1ST_POINT", "string");
        	this.dsSave.addColumn("DS_1ST_OCCUPATION", "string");
        	this.dsSave.addColumn("DS_1ST_SUPPLEMENT", "string");
        	this.dsSave.addColumn("DS_1ST_OPINION", "string");
        	this.dsSave.addColumn("CD_1ST_SLEDDING", "string");
        	this.dsSave.addColumn("CD_2ND_GROUP", "string");
        	this.dsSave.addColumn("ID_2ND_SABUN", "string");
        	this.dsSave.addColumn("DS_2ND_HNAME", "string");
        	this.dsSave.addColumn("NO_2ND_POINT", "int");
        	this.dsSave.addColumn("CD_2ND_POINT", "string");
        	this.dsSave.addColumn("DS_2ND_OCCUPATION", "string");
        	this.dsSave.addColumn("DS_2ND_SUPPLEMENT", "string");
        	this.dsSave.addColumn("DS_2ND_OPINION", "string");
        	this.dsSave.addColumn("CD_2ST_SLEDDING", "string");
        	this.dsSave.addColumn("CD_RANK", "int");
        	this.dsSave.addColumn("NO_MEDIATION", "int");
        	this.dsSave.addColumn("CD_MEDIATION", "string");
        	this.dsSave.addColumn("NO_TOTAL", "int");
        	this.dsSave.addColumn("CD_TOTAL", "string");
        	this.dsSave.addColumn("YN_CLOSE", "string");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("GR_SEARCH", "string");
        	this.dsSave.addColumn("TY_AUTH", "string");
        	this.dsSave.addColumn("GR_DEPT", "string");
        	this.dsSave.addColumn("ID_USER", "string");

        	//생성
        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("CD_CORP", "string");
        	this.dsCreate.addColumn("YY_EVALUATION", "string");
        	this.dsCreate.addColumn("TY_EVALUATION", "string");
        	this.dsCreate.addColumn("GR_SEARCH", "string");
        	this.dsCreate.addColumn("TY_AUTH", "string");
        	this.dsCreate.addColumn("GR_DEPT", "string");
        	this.dsCreate.addColumn("ID_USER", "string");

        	//마감/마감해제
        	this.dsClose = new Dataset();
        	this.dsClose.addColumn("TY_CLOSE", "string");
        	this.dsClose.addColumn("CD_CORP", "string");
        	this.dsClose.addColumn("YY_EVALUATION", "string");
        	this.dsClose.addColumn("TY_EVALUATION", "string");
        	this.dsClose.addColumn("GR_SEARCH", "string");
        	this.dsClose.addColumn("TY_AUTH", "string");
        	this.dsClose.addColumn("GR_DEPT", "string");
        	this.dsClose.addColumn("ID_USER", "string");

        	//전체삭제
        	this.dsDelAll = new Dataset();
        	this.dsDelAll.addColumn("CD_CORP", "string");
        	this.dsDelAll.addColumn("YY_EVALUATION", "string");
        	this.dsDelAll.addColumn("TY_EVALUATION", "string");
        	this.dsDelAll.addColumn("GR_SEARCH", "string");
        	this.dsDelAll.addColumn("TY_AUTH", "string");
        	this.dsDelAll.addColumn("GR_DEPT", "string");
        	this.dsDelAll.addColumn("ID_USER", "string");

        	//엑셀업로드 저장
        	this.dsSaveExcel = new Dataset();
        	this.dsSaveExcel.addColumn("CD_CORP", "string");
        	this.dsSaveExcel.addColumn("YY_EVALUATION", "string");
        	this.dsSaveExcel.addColumn("TY_EVALUATION", "string");
        	this.dsSaveExcel.addColumn("ID_SABUN", "string");
        	this.dsSaveExcel.addColumn("CD_DEPT", "string");
        	this.dsSaveExcel.addColumn("CD_1ST_GROUP", "string");
        	this.dsSaveExcel.addColumn("ID_1ST_SABUN", "string");
        	this.dsSaveExcel.addColumn("CD_2ND_GROUP", "string");
        	this.dsSaveExcel.addColumn("ID_2ND_SABUN", "string");
        	this.dsSaveExcel.addColumn("GR_SEARCH", "string");
        	this.dsSaveExcel.addColumn("TY_AUTH", "string");
        	this.dsSaveExcel.addColumn("GR_DEPT", "string");
        	this.dsSaveExcel.addColumn("ID_USER", "string");

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

        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid);
        	this.dsList.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsList.setColumn(nrow, "DS_CORP", this.ccfCD_CORP.form.DSTextBox.value);
        	this.dsList.setColumn(nrow, "YY_EVALUATION", this.ccfYY_EVALUATION.form.TextBox.value);
        	this.dsList.setColumn(nrow, "TY_EVALUATION", this.gfnNvl(this.cboTY_EVALUATION.value, ""));
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

        	if(!this.fnSaveValid()) return;

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
        				this.dsSave.setColumn(nrow, "YY_EVALUATION", this.dsList.getColumn(i, "YY_EVALUATION"));
        				this.dsSave.setColumn(nrow, "TY_EVALUATION", this.dsList.getColumn(i, "TY_EVALUATION"));
        				this.dsSave.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        				this.dsSave.setColumn(nrow, "DS_HNAME", this.dsList.getColumn(i, "DS_HNAME"));
        				this.dsSave.setColumn(nrow, "CD_POSITION", this.dsList.getColumn(i, "CD_POSITION"));
        				this.dsSave.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        				this.dsSave.setColumn(nrow, "CD_EMPTYPE", this.dsList.getColumn(i, "CD_EMPTYPE"));
        				this.dsSave.setColumn(nrow, "CD_OCCUPATION", this.dsList.getColumn(i, "CD_OCCUPATION"));
        				this.dsSave.setColumn(nrow, "CD_PAYSTEP", this.dsList.getColumn(i, "CD_PAYSTEP"));
        				this.dsSave.setColumn(nrow, "CD_DUTY", this.dsList.getColumn(i, "CD_DUTY"));
        				this.dsSave.setColumn(nrow, "CD_JOBTYPE", this.dsList.getColumn(i, "CD_JOBTYPE"));
        				this.dsSave.setColumn(nrow, "DT_JOIN", this.dsList.getColumn(i, "DT_JOIN"));
        				this.dsSave.setColumn(nrow, "CD_GROUP", this.dsList.getColumn(i, "CD_GROUP"));
        				this.dsSave.setColumn(nrow, "NO_POINT", this.dsList.getColumn(i, "NO_POINT"));
        				this.dsSave.setColumn(nrow, "CD_POINT", this.dsList.getColumn(i, "CD_POINT"));
        				this.dsSave.setColumn(nrow, "DS_OPINION", this.dsList.getColumn(i, "DS_OPINION"));
        				this.dsSave.setColumn(nrow, "CD_SLEDDING", this.dsList.getColumn(i, "CD_SLEDDING"));
        				this.dsSave.setColumn(nrow, "CD_1ST_GROUP", this.dsList.getColumn(i, "CD_1ST_GROUP"));
        				this.dsSave.setColumn(nrow, "ID_1ST_SABUN", this.dsList.getColumn(i, "ID_1ST_SABUN"));
        				this.dsSave.setColumn(nrow, "DS_1ST_HNAME", this.dsList.getColumn(i, "DS_1ST_HNAME"));
        				this.dsSave.setColumn(nrow, "NO_1ST_POINT", this.dsList.getColumn(i, "NO_1ST_POINT"));
        				this.dsSave.setColumn(nrow, "CD_1ST_POINT", this.dsList.getColumn(i, "CD_1ST_POINT"));
        				this.dsSave.setColumn(nrow, "DS_1ST_OCCUPATION", this.dsList.getColumn(i, "DS_1ST_OCCUPATION"));
        				this.dsSave.setColumn(nrow, "DS_1ST_SUPPLEMENT", this.dsList.getColumn(i, "DS_1ST_SUPPLEMENT"));
        				this.dsSave.setColumn(nrow, "DS_1ST_OPINION", this.dsList.getColumn(i, "DS_1ST_OPINION"));
        				this.dsSave.setColumn(nrow, "CD_1ST_SLEDDING", this.dsList.getColumn(i, "CD_1ST_SLEDDING"));
        				this.dsSave.setColumn(nrow, "CD_2ND_GROUP", this.dsList.getColumn(i, "CD_2ND_GROUP"));
        				this.dsSave.setColumn(nrow, "ID_2ND_SABUN", this.dsList.getColumn(i, "ID_2ND_SABUN"));
        				this.dsSave.setColumn(nrow, "DS_2ND_HNAME", this.dsList.getColumn(i, "DS_2ND_HNAME"));
        				this.dsSave.setColumn(nrow, "NO_2ND_POINT", this.dsList.getColumn(i, "NO_2ND_POINT"));
        				this.dsSave.setColumn(nrow, "CD_2ND_POINT", this.dsList.getColumn(i, "CD_2ND_POINT"));
        				this.dsSave.setColumn(nrow, "DS_2ND_OCCUPATION", this.dsList.getColumn(i, "DS_2ND_OCCUPATION"));
        				this.dsSave.setColumn(nrow, "DS_2ND_SUPPLEMENT", this.dsList.getColumn(i, "DS_2ND_SUPPLEMENT"));
        				this.dsSave.setColumn(nrow, "DS_2ND_OPINION", this.dsList.getColumn(i, "DS_2ND_OPINION"));
        				this.dsSave.setColumn(nrow, "CD_2ST_SLEDDING", this.dsList.getColumn(i, "CD_2ST_SLEDDING"));
        				this.dsSave.setColumn(nrow, "CD_RANK", this.dsList.getColumn(i, "CD_RANK"));
        				this.dsSave.setColumn(nrow, "NO_MEDIATION", this.dsList.getColumn(i, "NO_MEDIATION"));
        				this.dsSave.setColumn(nrow, "CD_MEDIATION", this.dsList.getColumn(i, "CD_MEDIATION"));
        				this.dsSave.setColumn(nrow, "NO_TOTAL", this.dsList.getColumn(i, "NO_TOTAL"));
        				this.dsSave.setColumn(nrow, "CD_TOTAL", this.dsList.getColumn(i, "CD_TOTAL"));
        				this.dsSave.setColumn(nrow, "YN_CLOSE", this.dsList.getColumn(i, "YN_CLOSE"));
        				this.dsSave.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
        }

        this.fnSaveValid = function(){
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		if(flag == "I" || flag == "U"){

        		}
        	}

        	return true;
        }

        //전체삭제
        this.fnDelAll = function(){

        	if(!this.fnCreateValid()) return;

        	this.dsDelAll.clearData();

        	var nrow = this.dsDelAll.addRow();

        	this.dsDelAll.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsDelAll.setColumn(nrow, "YY_EVALUATION", this.dsSearch.getColumn(0, "YY_EVALUATION"));
        	this.dsDelAll.setColumn(nrow, "TY_EVALUATION", this.dsSearch.getColumn(0, "TY_EVALUATION"));
        	this.dsDelAll.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsDelAll.setColumn(nrow, "TY_AUTH", this.FormInfo.TY_AUTH);
        	this.dsDelAll.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        	this.dsDelAll.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);


        	if (this.dsDelAll.rowcount == 0) return;

        	var strSvcId    = "delAll";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "delAll=dsDelAll";
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

        this.fnSaveExcel = function() {
        	if (this.dsSaveExcel.rowcount == 0) return;

        	var strSvcId    = "saveExcel";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "saveExcel=dsSaveExcel";
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

        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        this.fnPrint = function() {
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

        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.gfnAlert("저장이 완료되었습니다.");
        			this.FormBtns.Select.click();

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
        	} else if(svcID == "close") {
        		if (errorCode == 0) {
        			this.gfnAlert("처리가 완료되었습니다.");
        			this.FormBtns.Select.click();

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "delAll") {
        		if (errorCode == 0) {

        			this.fnSaveExcel(); //전체삭제후 엑셀업로드 저장

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "saveExcel") {
        		if (errorCode == 0) {
        			this.gfnAlert("엑셀업로드 저장되었습니다.");
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
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	if (id == "DAX_CFBASEINFO_ALL") { //피평가자-사번
        		if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        			this.gfnAlert("법인을 먼저 선택하시기 바랍니다.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "YN_CORP", "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");   // 재직구분
        	}
         	else if (id == "SABUN_1ST") { //1차평가자-사번
        		if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        			this.gfnAlert("법인을 먼저 선택하시기 바랍니다.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "YN_CORP", "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");   // 재직구분
        	}
         	else if (id == "SABUN_2ST") { //2차평가자-사번
        		if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        			this.gfnAlert("법인을 먼저 선택하시기 바랍니다.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "YN_CORP", "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");   // 재직구분
        	}
        	else if(id == "DAX_CFDEPT"){
        		var sCD_CORP = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        		if(this.gfnIsNull(sCD_CORP)) {
        			this.gfnAlert("법인코드를 먼저 입력하시기 바랍니다.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", "");
        		dsUserParam.setColumn(nrow, "CD_CORP", sCD_CORP);
        		dsUserParam.setColumn(nrow, "YN_CURRENT", "N");
        	}
        	else if(id == "DAX_CFDEPT1"){
        		if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        			this.gfnAlert("법인을 먼저 선택하시기 바랍니다.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "YN_CURRENT", "Y");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	}
        	else if(id == "DAX_CFDEPT2"){
        		if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        			this.gfnAlert("법인을 먼저 선택하시기 바랍니다.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "YN_CURRENT", "Y");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	}
         	else if (id == "J4") {
        		// 2차 평가자 그룹
         		dsUserParam.setColumn(nrow, "CD_PREFIX", "J4");
         	}
        	return true;
        }

        this.fnGrid_AfterEdit = function(obj,e) {
        }

        this.fnGrid_EnterCell = function(obj, row, cell) {
        	//var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);
        	if(this.gfnNvl(this.dsList.getColumn(row, "YN_CLOSE"), "N") == "Y") {
        		return false;
        	}
        }

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        this.fnFormDown = function(){
        	this.dsExcelForm.clearData();
        	this.gfnExcelExport(this.divData.form.grdForm);
        }

        this.fnExcelImport = function(){
        	if(!this.fnCreateValid()) return;

        	this.fnExcelImportProc = function(id, val){
        		trace("val", val);
        		if(val){
        			this.gfnExcelImport("dsExcelForm","Sheet1","A2","fnExcelImportCallback","import",this);
        		}
        	}
        	this.gfnConfirm("기존데이타는 삭제됩니다.\n계속하시겠습니까?", "fnExcelImportProc");
        	return;
        }


        this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet) {
        	//trace("sImportId", sImportId);

         	if (dsOut.rowcount == 0)  {
        		this.gfnAlert("엑셀파일에 내용이 없습니다.");
        		return false;
        	}

        	// 주석시작(양식 다운로드해서 업로드하는게 아니면 아래 부분 주석처리하고 값셋하는부분 더 아래부분 주석 풀어서 처리하면 됨, copyRow로 주석처리해야함)
        // 	trace(dsOut.saveXML());
        // 	for (var i=0; i< this.dsList.getColCount(); i++)
        // 	{
        // 		sColumnId = "Column"+i;
        //
        // 		var sColumnNm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, i);
        // 		if (sColumnNm != "" && sColumnId != sColumnNm)
        // 		{
        // 			dsOut.updateColID(sColumnId, sColumnNm);
        // 		}
        // 	}
        // trace("==============111===============");
        // trace(dsOut.saveXML());

        	this.dsSaveExcel.clearData();

        	var bSucc = true;
        	var sMsg = "";

        	this.dsSaveExcel.set_enableevent(false);
        	for (var i=0; i< dsOut.rowcount; i++) {
        		var nrow = this.dsSaveExcel.addRow();

        		//아래 copyRow가 컬럼변경 이벤트를 실행하지 않음. 코드파인더 실행때문에 이 위치로 이동
        		// 양식이 일치하는 경우 copyRow
        		//this.dsExcelSave.copyRow(nrow, dsOut, i);

        		this.dsSaveExcel.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsSaveExcel.setColumn(nrow, "YY_EVALUATION", this.dsSearch.getColumn(0, "YY_EVALUATION"));
        		this.dsSaveExcel.setColumn(nrow, "TY_EVALUATION", this.dsSearch.getColumn(0, "TY_EVALUATION"));

        		if(this.gfnIsNull(this.gfnTrim(dsOut.getColumn(i, "Column1")))){
        			sMsg = "사번을 입력하세요!";
        			bSucc = false;
        			break;
        		}

        		this.dsSaveExcel.setColumn(nrow, "ID_SABUN", this.gfnNvl(dsOut.getColumn(i, "Column0"), ""));
        		//this.dsSaveExcel.setColumn(nrow, "DS_HNAME", dsOut.getColumn(i, "Column1"));
        		this.dsSaveExcel.setColumn(nrow, "CD_DEPT", this.gfnNvl(dsOut.getColumn(i, "Column2"), ""));
        		//this.dsSaveExcel.setColumn(nrow, "DS_DEPT", this.gfnNvl(dsOut.getColumn(i, "Column3"), ""));
        		this.dsSaveExcel.setColumn(nrow, "CD_1ST_GROUP", this.gfnNvl(dsOut.getColumn(i, "Column4"), ""));
        		this.dsSaveExcel.setColumn(nrow, "ID_1ST_SABUN", this.gfnNvl(dsOut.getColumn(i, "Column5"), ""));
        		//this.dsSaveExcel.setColumn(nrow, "DS_1ST_HNAME", dsOut.getColumn(i, "Column6"));
        		this.dsSaveExcel.setColumn(nrow, "CD_2ND_GROUP", this.gfnNvl(dsOut.getColumn(i, "Column7"), ""));
        		this.dsSaveExcel.setColumn(nrow, "ID_2ND_SABUN", this.gfnNvl(dsOut.getColumn(i, "Column8"), ""));
        		//this.dsSaveExcel.setColumn(nrow, "DS_2ND_HNAME", dsOut.getColumn(i, "Column9"));

        		this.dsSaveExcel.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		this.dsSaveExcel.setColumn(nrow, "TY_AUTH", this.FormInfo.TY_AUTH);
        		this.dsSaveExcel.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        		this.dsSaveExcel.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        		this.dsSaveExcel.setColumn(nrow, this.ucFlag, "I");
        	}
        	this.dsSaveExcel.set_enableevent(true);

        	if(!bSucc){
        		this.gfnAlert(sMsg);
        		return;
        	}

        	if(this.dsSaveExcel.rowcount > 0){
        		this.gfnSetFormStatus(this, "I");

        		this.fnDelAll();
        	}else{
        		this.gfnAlert("업로드된 데이타가 없습니다.");
        		return;
        	}
        };

        /*
         *	그리드업로드
         */
        this.fnGridImport = function() {
        	//this.gfnExcelImport("dsList","Sheet1","A2","fnGridImportCallback","import",this);
        	this.gfnExcelImport("dsList",null,"A2","fnGridImportCallback","import",this);
        }

        this.fnGridImportCallback = function(sImportId, dsOut, dsSheet) {
        	for (var i=0; i<dsOut.rowcount; i++) {
        		var nrow = this.dsList.addRow();
        		this.dsList.setColumn(nrow, this.ucFlag, "I");

        		for (var j=0; j< dsOut.colcount; j++) {
        			if (!this.gfnIsNull(dsOut.getColumn(i,j)) ){
        				dsOut.setColumn(i,j,nexacro.trim(dsOut.getColumn(i,j)));
        				var strColID = dsOut.getColID( j );
        // 				//날짜 형식 수정
        // 				if ( strColID == "Column7" || strColID == "Column8"){
        // 					dsOut.setColumn(i,j,dsOut.getColumn(i,j).replace(/[^0-9]/g,''));
        // 				}
        			}
        		}

        		// 양식과 일치하지 않는 경우 아래와 같이 컬럼별로 처리.
        		this.dsList.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		this.dsList.setColumn(nrow, "DS_CORP", this.ccfCD_CORP.form.DSTextBox.value);
        		this.dsList.setColumn(nrow, "YY_EVALUATION", this.ccfYY_EVALUATION.form.TextBox.value);
        		this.dsList.setColumn(nrow, "TY_EVALUATION", this.gfnNvl(this.cboTY_EVALUATION.value, ""));
        	}
        	this.gfnSetFormStatus(this, "I");

        };

        // 대상자생성 버튼 클릭(팝업에서 처리)
        this.fnCreateTarget = function(obj,e) {
        	var param = {};

        	param.YY_EVALUATION = this.dsSearch.getColumn(0, "YY_EVALUATION"); 	// 평가년도
            param.CD_CORP = this.dsSearch.getColumn(0, "CD_CORP"); 				// 법인 코드
        	param.DS_CORP = this.dsSearch.getColumn(0, "DS_CORP"); 				// 법인명
        	param.TY_EVALUATION = this.dsSearch.getColumn(0, "TY_EVALUATION");	// 상하반기구분
        	param.ID_FORM = "DAJ_EVALUATION_TARGET";

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

        //대상자생성 (팝업으로변경 20220404)
        /*
        this.fnCreateTarget = function(){
        	if(!this.fnCreateValid()) return;

        	this.gfnConfirm("기존데이타는 삭제됩니다. \n대상자를 생성하시겠습니까?", "fnCreateTarget_callback");
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

        //마감
        this.fnCloseTarget = function(){
        	if(!this.fnCreateValid()) return;

        	this.gfnConfirm("마감하시겠습니까?", "fnCloseTarget_callback", "CloseTarget");
        }

        //마감/마감해제 callback
        this.fnCloseTarget_callback = function(id, val){
        	if(val){
        		this.dsClose.clearData();

        		var nrow = this.dsClose.addRow();

        		var sTY_CLOSE = "";
        		if(id == "UndoClose"){
        			sTY_CLOSE = "N";
        		}else if(id == "CloseTarget"){
        			sTY_CLOSE = "Y";
        		}else{
        			return;
        		}

        		this.dsClose.setColumn(nrow, "TY_CLOSE", sTY_CLOSE);
        		this.dsClose.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsClose.setColumn(nrow, "YY_EVALUATION", this.dsSearch.getColumn(0, "YY_EVALUATION"));
        		this.dsClose.setColumn(nrow, "TY_EVALUATION", this.dsSearch.getColumn(0, "TY_EVALUATION"));
        		this.dsClose.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		this.dsClose.setColumn(nrow, "TY_AUTH", this.FormInfo.TY_AUTH);
        		this.dsClose.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        		this.dsClose.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        		if (this.dsClose.rowcount == 0) return;

        		var strSvcId    = "close";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "close=dsClose";
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

        //마감해제
        this.fnUndoClose = function(){
        	if(!this.fnCreateValid()) return;

        	if(this.gfnIsNull(this.cboTY_EVALUATION.value)){
        		this.fnValidCallback = function(){
        			this.cboTY_EVALUATION.setFocus();
        		}
        		this.gfnAlert("구분을 입력하세요!", "fnValidCallback");
        		return;
        	}

        	this.gfnConfirm("마감해제하시겠습니까?", "fnCloseTarget_callback", "UndoClose");
        }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e){
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		if(e.columnid == "TY_EVALUATION"){
        			//this.FormBtns.Select.click();
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAJ_EVALUATION_TARGET.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
