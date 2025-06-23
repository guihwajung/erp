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
            this.set_titletext("평가대상자등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAJPR_EVAL_TARGET_SELECT</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DAJPR_EVAL_TARGET_CREATE</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAJPR_EVAL_TARGET_SAVE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DAXPR_EVAL_TERMS_CODEFIND</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DAJPR_EVAL_TARGET_FULLDELETE</Col></Row><Row><Col id=\"TARGET\">saveTargetItem</Col><Col id=\"SP\">DAJPR_EVAL_TARGETITEM_CREATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"TERM_EVAL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DUTY\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTERM_EVAL", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"TERM_EVAL\" type=\"STRING\" size=\"256\"/><Column id=\"YN_STRUCTFINI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("<ColumnInfo><Column id=\"MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staTERM_EVAL","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("평가기수");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTERM_EVAL","staTERM_EVAL:0.0","10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_datacolumn("TERM_EVAL");
            obj.set_codecolumn("TERM_EVAL");
            obj.set_innerdataset("dsTERM_EVAL");
            obj.set_text("");
            obj.set_value("%");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","cboTERM_EVAL:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_POSITION","ccfCD_DEPT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_POSITION","staCD_POSITION:0.0","10.0","235","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DUTY","0.0","staTERM_EVAL:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("직무");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DUTY","staCD_DUTY:0.0","staTERM_EVAL:10.0","180","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","ccfCD_DUTY:0.0","staTERM_EVAL:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","staTERM_EVAL:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboTERM_EVAL","value","dsSearch","TERM_EVAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_POSITION.form.CDTextBox","value","dsSearch","CD_POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_DUTY.form.CDTextBox","value","dsSearch","CD_DUTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAJ_EVALUATION_PERSON.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.gYN_STRUCTFINI = "";	// DAJT_EVALUATE_TERMS 평가기수 테이블 구조확정여부
        this.gTERM_EVAL = "";

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
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SubSave, SubExcel
         	//this.FormBtns.Save.set_enable(false);
        	this.FormBtns.Reset.set_enable(true);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        /*
        	this.btnItem1 = this.gfnFormButtonAdd("btnCreateTarget", "fnCreateTarget");		// 평가대상자생성 (fnCreateTarget)
        	this.btnItem2 = this.gfnFormButtonAdd("btnExcelUpload", "fnExcelUpload");		// 엑셀업로드 (fnExcelUpload)
        	this.btnItem3 = this.gfnFormButtonAdd("btnFullDelete", "fnFullDelete");			// 전체삭제(fnFullDelete)
        	this.btnItem4 = this.gfnFormButtonAdd("btnSetStructfiniY", "fnSetStructfiniY");	// 확정 (fnSetStructfiniY)
        	this.btnItem5 = this.gfnFormButtonAdd("btnSetStructfiniN", "fnSetStructfiniN");	// 확정해지 (fnSetStructfiniN)
        */

        	this.btnItem1 = this.gfnFormButtonAdd("btnCreateTarget", "fnExtendButton");		// 평가대상자생성 (fnCreateTarget)
        	this.btnItem2 = this.gfnFormButtonAdd("btnExcelUpload", "fnExtendButton");		// 엑셀업로드 (fnExcelUpload)
        	this.btnItem3 = this.gfnFormButtonAdd("btnFullDelete", "fnExtendButton");		// 전체삭제(fnFullDelete)
        	this.btnItem4 = this.gfnFormButtonAdd("btnSetStructfiniY", "fnExtendButton");	// 확정 (fnSetStructfiniY)
        	this.btnItem5 = this.gfnFormButtonAdd("btnSetStructfiniN", "fnExtendButton");	// 확정해지 (fnSetStructfiniN)
        	this.btnItem6 = this.gfnFormButtonAdd("btnEvalTargetChange", "fnExtendButton");	// 평가자변경 (fnSetStructfiniN)

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.cboTERM_EVAL = this.divSearch.form.cboTERM_EVAL;
        	this.ccfCD_DEPT =	this.divSearch.form.ccfCD_DEPT;
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;
        	this.ccfCD_POSITION = this.divSearch.form.ccfCD_POSITION;
        	this.ccfCD_DUTY =	this.divSearch.form.ccfCD_DUTY;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	//그리드
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAJ_EVALUATION_PERSON");

        	//그리드 이벤트
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";

        	// 부서
        	//this.ccfCD_DEPT.CodeFindName = "DAX_CFDEPT";
        	this.ccfCD_DEPT.CodeFindName = "DAX_CFDEPT_MST1";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 성명
        	this.ccfID_SABUN.CodeFindName = "DAX_CFBASEINFO";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 직위/직급(ED)
        	this.ccfCD_POSITION.CodeFindName = "DAX_CFCOMMONCODE";
        	this.ccfCD_POSITION.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 직무(EF)
        	this.ccfCD_DUTY.CodeFindName = "DAX_CFCOMMONCODE";
        	this.ccfCD_DUTY.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TERM_EVAL", "string");
        	this.dsSelect.addColumn("SABUN", "string");
        	this.dsSelect.addColumn("DEPT", "string");
        	this.dsSelect.addColumn("POSITION", "string");
        	this.dsSelect.addColumn("DUTY", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("TERM_EVAL", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("TY_EVAL", "string");
        	this.dsSave.addColumn("ID_1STSABUN", "string");
        	this.dsSave.addColumn("ID_2NDSABUN", "string");
        	this.dsSave.addColumn("POINT_1STEVAL", "bigdecimal");
        	this.dsSave.addColumn("POINT_2NDEVAL", "bigdecimal");
        	this.dsSave.addColumn("SERV_1STEVAL", "string");
        	this.dsSave.addColumn("SERV_2NDEVAL", "string");
        	this.dsSave.addColumn("GRADE_1STHEALTH", "string");
        	this.dsSave.addColumn("SERV_1STATTI", "string");
        	this.dsSave.addColumn("GRADE_2NDHEALTH", "string");
        	this.dsSave.addColumn("SERV_2NDATTI", "string");
        	this.dsSave.addColumn("POINT_TOTAL", "bigdecimal");
        	this.dsSave.addColumn("GRADE_FINAL", "string");
        	this.dsSave.addColumn("YN_CLOSE", "string");
        	this.dsSave.addColumn("YN_1STCLOSE", "string");
        	this.dsSave.addColumn("YN_2NDCLOSE", "string");
        	this.dsSave.addColumn("ORDER_FINAL", "bigdecimal");
        	this.dsSave.addColumn("AVG_1STADJ", "bigdecimal");
        	this.dsSave.addColumn("AVG_2NDADJ", "bigdecimal");
        	this.dsSave.addColumn("DEVIATION_1STADJ", "bigdecimal");
        	this.dsSave.addColumn("DEVIATION_2NDADJ", "bigdecimal");
        	this.dsSave.addColumn("REF_OPO", "string");
        	this.dsSave.addColumn("SABUN", "string");

        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("TERM_EVAL", "string");
        	this.dsCreate.addColumn("SABUN", "string");
        	this.dsCreate.addColumn("TAG", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("TERM_EVAL", "string");
        	this.dsDelete.addColumn("SABUN", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnValidate()) return;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "TERM_EVAL", this.cboTERM_EVAL.value);
        	this.dsSelect.setColumn(0, "SABUN", this.ccfID_SABUN.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "DEPT", this.ccfCD_DEPT.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "POSITION", this.ccfCD_POSITION.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "DUTY", this.ccfCD_DUTY.form.CDTextBox.value);

        // 	this.dsSelect.setColumn(0, "TERM_EVAL", this.dsSearch.getColumn(0, "TERM_EVAL"));
        // 	this.dsSelect.setColumn(0, "SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        // 	this.dsSelect.setColumn(0, "DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        // 	this.dsSelect.setColumn(0, "POSITION", this.dsSearch.getColumn(0, "CD_POSITION"));
        // 	this.dsSelect.setColumn(0, "DUTY", this.dsSearch.getColumn(0, "CD_DUTY"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId ,
        						strSvcType ,
        						inProc,
        						inData ,
        						outData ,
        						strArg,
        						callBackFnc);
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid);
        	//this.dsList.setColumn(nrow, "TERM_EVAL", TERM_EVAL);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	var TERM_EVAL = this.dsList.getColumn(this.dsList.rowposition, "TERM_EVAL");
        	var YN_STRUCTFINI = this.dsList.getColumn(this.dsList.rowposition, "YN_STRUCTFINI");
        	if(YN_STRUCTFINI == "Y"){
        		this.gfnAlert( "해당 \"" + TERM_EVAL + "\" 평가대상자의 구조가 확정되어 신규 입력이 불가능합니다.");
        		return;
        	}
        	this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 평가기수 구조확정 여부 확인
        	//if(!this.fnStructfiniValidate("저장이")) return;

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
        				this.dsSave.setColumn(nrow, "TERM_EVAL", this.dsList.getColumn(i, "TERM_EVAL"));
        				this.dsSave.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        				this.dsSave.setColumn(nrow, "TY_EVAL", this.dsList.getColumn(i, "TY_EVAL"));
        				this.dsSave.setColumn(nrow, "ID_1STSABUN", this.dsList.getColumn(i, "ID_1STSABUN"));
        				this.dsSave.setColumn(nrow, "ID_2NDSABUN", this.dsList.getColumn(i, "ID_2NDSABUN"));
        				this.dsSave.setColumn(nrow, "POINT_1STEVAL", this.dsList.getColumn(i, "POINT_1STEVAL"));
        				this.dsSave.setColumn(nrow, "POINT_2NDEVAL", this.dsList.getColumn(i, "POINT_2NDEVAL"));
        				this.dsSave.setColumn(nrow, "SERV_1STEVAL", this.dsList.getColumn(i, "SERV_1STEVAL"));
        				this.dsSave.setColumn(nrow, "SERV_2NDEVAL", this.dsList.getColumn(i, "SERV_2NDEVAL"));
        				this.dsSave.setColumn(nrow, "GRADE_1STHEALTH", this.dsList.getColumn(i, "GRADE_1STHEALTH"));
        				this.dsSave.setColumn(nrow, "SERV_1STATTI", this.dsList.getColumn(i, "SERV_1STATTI"));
        				this.dsSave.setColumn(nrow, "GRADE_2NDHEALTH", this.dsList.getColumn(i, "GRADE_2NDHEALTH"));
        				this.dsSave.setColumn(nrow, "SERV_2NDATTI", this.dsList.getColumn(i, "SERV_2NDATTI"));
        				this.dsSave.setColumn(nrow, "POINT_TOTAL", this.dsList.getColumn(i, "POINT_TOTAL"));
        				this.dsSave.setColumn(nrow, "GRADE_FINAL", this.dsList.getColumn(i, "GRADE_FINAL"));
        				this.dsSave.setColumn(nrow, "YN_CLOSE", "N");		// 마감여부
        				this.dsSave.setColumn(nrow, "YN_1STCLOSE", "N");	// 마감여부1차
        				this.dsSave.setColumn(nrow, "YN_2NDCLOSE", "N");	// 마감여부2차
        				this.dsSave.setColumn(nrow, "ORDER_FINAL", this.dsList.getColumn(i, "ORDER_FINAL"));
        				this.dsSave.setColumn(nrow, "AVG_1STADJ", this.dsList.getColumn(i, "AVG_1STADJ"));
        				this.dsSave.setColumn(nrow, "AVG_2NDADJ", this.dsList.getColumn(i, "AVG_2NDADJ"));
        				this.dsSave.setColumn(nrow, "DEVIATION_1STADJ", this.dsList.getColumn(i, "DEVIATION_1STADJ"));
        				this.dsSave.setColumn(nrow, "DEVIATION_2NDADJ", this.dsList.getColumn(i, "DEVIATION_2NDADJ"));
        				this.dsSave.setColumn(nrow, "REF_OPO", this.dsList.getColumn(i, "REF_OPO"));
        				this.dsSave.setColumn(nrow, "SABUN", this.AuthClient.ID_USER);

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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
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

        	this.cboTERM_EVAL.set_index(0);
        	this.gYN_STRUCTFINI = this.dsTERM_EVAL.getColumn(0, "YN_STRUCTFINI");
        	this.gTERM_EVAL	= this.dsTERM_EVAL.getColumn(0, "TERM_EVAL");

        	this.FormBtns.Select.click();
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnValidate = function() {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "TERM_EVAL"))) {
        		this.cboTERM_EVAL.setFocus();
        		this.gfnAlert("평가기수를 입력하세요.");
        		return false;
        	}
        	return true;
        };

        // 평가기수 구조확정 여부 확인
        this.fnStructfiniValidate = function(sExe) {
        /*
        	구조 확정 후에는
        	TARGET에서 INSERT,DELETE와 평가자 변경 불가능
        	TARGET_ITEMS에서 INSERT, DELETE 불가능

        	구조 확정 취소후
        	TARGET에서 INSERT,DELETE와 평가자 변경 가능
        	TARGET_ITEMS에서 INSERT, DELETE 가능
        */
        	var TERM_EVAL = this.dsSearch.getColumn(0, "TERM_EVAL");
        	if( this.gYN_STRUCTFINI == "Y" ){
        		this.gfnAlert( "해당 \"" + TERM_EVAL + "\" 평가대상자의 구조가 확정되어 " + sExe + " 불가능합니다.");
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
        this.fnCallback = function(svcID, errorCode, errorMsg){
        	//trace("fnCallback >>>>svcID :["+svcID+"] errorCode :["+errorCode+"] errorMsg :["+errorMsg+"]" );
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		// 확정인 상태 일때 평가자 변경버튼 활성화
        		if(this.dsList.rowcount > 1){
        			if(this.dsList.getColumn(1,"YN_STRUCTFINI") == "Y"){
        				this.btnItem6.set_enable(true);
        			}else{
        				this.btnItem6.set_enable(false);
        			}
        		}

        	} else if (svcID == "create") {
        		if (errorCode == 0) {
        			this.gfnAlert("작업이 완료되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.gfnAlert("작업이 완료되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "delete") {
        		if (errorCode == 0) {
        			var MSG = this.dsResult.getColumn(0, "MSG");
        			if(!this.gfnIsNull(MSG)){
        				this.gfnAlert(MSG);
        			}
        			//this.FormBtns.Select.click();
        			// 구조확정값이 변경되서 다시 리로드
        			this.fnSetCombo();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "saveTargetItem") {	// 확정 / 확정해지
        		//trace("확정/ 확정해지 완료");
        		if (errorCode == 0) {

        			this.gfnAlert("정상처리 되었습니다.");

        			// 구조확정값이 변경되서 다시 리로드
        			this.fnSetCombo();

        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}

        	} else if( svcID == "combo"){
        		//YN_STRUCTFINI
        		//trace("확정값->" + this.gTERM_EVAL);
        		if (!this.gfnIsNull(this.gTERM_EVAL)){
        			 this.cboTERM_EVAL.set_value( this.gTERM_EVAL);
        		}else{
        			this.cboTERM_EVAL.set_index(0);
        		}

        		// 평가기수 구조확정여부
        		//var nrow = this.dsTERM_EVAL.rowposition;
        		var nrow = this.cboTERM_EVAL.index;
        		this.gTERM_EVAL	= this.dsTERM_EVAL.getColumn(nrow, "TERM_EVAL");
        		this.gYN_STRUCTFINI = this.dsTERM_EVAL.getColumn(nrow, "YN_STRUCTFINI");

        		//trace("콤보 포지션 :" + nrow + " / TERM_EVAL:" + this.gTERM_EVAL + " / YN_STRUCTFINI:" + this.gYN_STRUCTFINI);

        		// 자동조회
        //  		if (this.dsTERM_EVAL.rowcount > 0) {
        //  		this.FormBtns.Select.click();
        //  		}
        	}

        	this.fnSetButton();
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnAfterCDTextChanged = function(id) {
        	this.fnSearchInit();
        }

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	//trace("코드파인드_식별id:" + id);
        	switch(id) {
        		/*
        		case "ccfCD_DEPT":	// 부서
        			dsUserParam.setColumn(nrow, "GR_SEARCH", "");
        			dsUserParam.setColumn(nrow, "CD_DEPT", "");
        			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        			dsUserParam.setColumn(nrow, "YN_CURRENT", "");
        			break;
        		*/

        		case "ccfID_SABUN"://성명
        			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", "%");
        			dsUserParam.setColumn(nrow, "YN_CORP", "Y");
        			dsUserParam.setColumn(nrow, "TY_RETIRE", "%");	// 재직구분
        			break;

        		case "ccfCD_POSITION":	// 직위
        			dsUserParam.setColumn(nrow, "CD_PREFIX", 'ED');
        			break;

        		case "ccfCD_DUTY":	// 직무
        			dsUserParam.setColumn(nrow, "CD_PREFIX", 'EF');
        			break;
        		default:
        	}
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	//trace('grid_코드파인드_식별id: ' + id);
        	switch(id) {
        		case "DAX_CFBASEINFO":     // DAX_CFBASEINFO
        		case "DAX_CFBASEINFO_1ST":     // 사번 	ID_SABUN
        		case "DAX_CFBASEINFO_2ND":     // 사번 	ID_SABUN
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", "%");
        			dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        		break;

        		case "DAX_EVAL_TY":	// 평가구분
        			var TERM_EVAL = this.dsList.getColumn(this.dsList.rowposition, "TERM_EVAL");
        			if (this.gfnIsNull(TERM_EVAL)) {
        				this.gfnAlert("평가기수를 먼저 입력하세요.");
        				return false;
        			}
        			dsUserParam.setColumn(nrow, "TERM_EVAL", TERM_EVAL);
        		break;

        		case "EL":	// 평가구분
        			dsUserParam.setColumn(nrow, "CD_PREFIX", 'EL');
        		default:
        	}

        	return true;
        };

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	switch(id) {
        		case "DAX_EVAL_TERMS":	// 평가기수
        			var TERM_EVAL = this.dsList.getColumn(this.dsList.rowposition, "TERM_EVAL");
        			var YN_STRUCTFINI = this.dsList.getColumn(this.dsList.rowposition, "YN_STRUCTFINI");
        			if(YN_STRUCTFINI == "Y"){
        				this.gfnAlert( "해당 \"" + TERM_EVAL + "\" 평가대상자의 구조가 확정되어 신규 입력이 불가능합니다.");

        				this.dsList.setColumn(this.dsList.rowposition, "TERM_EVAL", "");
        				this.dsList.setColumn(this.dsList.rowposition, "DT_EVALSTART", "");
        				this.dsList.setColumn(this.dsList.rowposition, "DT_EVALEND", "");
        				this.dsList.setColumn(this.dsList.rowposition, "EVAL_STAT", "");
        				this.dsList.setColumn(this.dsList.rowposition, "YN_STRUCTFINI", "");
        				return;
        			}

        			this.dsList.setColumn(this.dsList.rowposition, "TY_EVAL", "");		// 평가구분
        			this.dsList.setColumn(this.dsList.rowposition, "DS_TY_EVAL", "");	// 평가구분명

        			break;

        		default:
        	}
        	return true;
        };

        // 셀 수정가능 여부 (반드시 EnterCell에서 처리할것)
        this.fnGrid_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);
        	var flag = this.gfnGetFlag(this.dsList, row);

        	// 구조확정건 수정불가처리
        	if(this.dsList.getColumn(row, "YN_STRUCTFINI") == "Y"){
        		return false;
        	}

        	// 공통 > Setting > 그리드정보 에서 셋팅한 내용대로
        	nGrdSpcRow = this.dsGridSpec.findRow( "DS_FIELD", colnm);
        	var YN_READONLY = this.dsGridSpec.getColumn(nGrdSpcRow, "YN_READONLY");
        	if(YN_READONLY == "Y") return false;
        	if(YN_READONLY =="U" && (this.gfnIsNull(flag) || flag == "U")){	// flag 가 U 이거나 빈값
        		return false;
        	}
        	return true;
        }

         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
         this.fnExtendButton = function(obj, e){
        	//trace("확장버튼 아이디->" + obj.id + " / 버튼명 ->" + obj.text + " / e ->" + e);
        	var TERM_EVAL = this.dsSearch.getColumn(0, "TERM_EVAL");
        	switch(obj.id){
        		case "btnExt_btnCreateTarget":	// 평가대상자생성 (fnCreateTarget)
        			if(!this.fnStructfiniValidate(obj.text)) return;
        			this.fnCreateTarget();
        			break;
        		case "btnExt_btnExcelUpload":	// 엑셀업로드 (fnExcelUpload)
        			if(!this.fnStructfiniValidate(obj.text)) return;
        			this.fnExcelUpload();
        			break;
        		case "btnExt_btnFullDelete":	// 전체삭제(fnFullDelete)
        			if(!this.fnStructfiniValidate(obj.text)) return;

        			this.gfnConfirm("해당 \"" + TERM_EVAL + "\" 전체삭제 하시겠습니까?", "fnFullDelete_Callback");

        			//this.fnFullDelete();
        			break;

        		// - '1': 구조 확정을 원할 경우 ,   '2' : 구조확정해제를 원할 경우
        		case "btnExt_btnSetStructfiniY":	// 확정 (fnSetStructfiniY)
        			if(!this.fnStructfiniValidate(obj.text)) return;

        			this.gfnConfirm("해당 \"" + TERM_EVAL + "\" 구조확정 하시겠습니까?", "fnSetStructfiniY_Callback");

        			//this.fnSetStructfini("1");
        			break;
        		case "btnExt_btnSetStructfiniN":	// 확정해지 (fnSetStructfiniN)
        			this.gfnConfirm("해당 \"" + TERM_EVAL + "\" 구조확정해지 하시겠습니까?", "fnSetStructfiniN_Callback");
        			//this.fnSetStructfini("2");
        			break;
        		case "btnExt_btnEvalTargetChange":	// 평가자 변경
        			param={
        				TERM_EVAL: this.dsList.getColumn(this.dsList.rowposition, "TERM_EVAL"), //평가기수
        				ID_SABUN: this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN"), // 피평가자 ID
        				DS_HNAME: this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME"), // 피평가자 DS
        				ID_1STSABUN_BEF: this.dsList.getColumn(this.dsList.rowposition, "ID_1STSABUN"), //1차평가자 ID
        				DS_1STSABUN_BEF: this.dsList.getColumn(this.dsList.rowposition, "DS_1STHNAME"), //1차평가자 DS
        				ID_2NDSABUN_BEF:this.dsList.getColumn(this.dsList.rowposition, "ID_2NDSABUN"), //2차평가자 ID
        				DS_2NDSABUN_BEF: this.dsList.getColumn(this.dsList.rowposition, "DS_2NDHNAME") //2차평가자 DS
        				};
        			btnUrl = "DAJ_EVALTARGET_DLG";
        			this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, btnUrl, "fnPopupCallback", param);
        			break;

        		default:
        	}
         };

        this.fnPopupCallback = function(strId, val) {
        	if(strId.indexOf("DAJ_EVALTARGET_DLG") > 0) {
        		if (val == true) {
        			this.gfnAlert("작업이 완료되었습니다.");
        		}
        	}
        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	var strEventid = e.eventid;
        	var objComp = e.fromobject;
        	var nPostIdx = e.postindex; // 새로 변경된 아이템의 인덱스값
        	//trace("obj->" + obj + " / eventid->" + strEventid  + " / fromobject->" + objComp  + " / nPostIdx->" + nPostIdx );

        	// 평가기수 구조확정여부
        	var nrow = this.dsTERM_EVAL.rowposition;
        	this.gYN_STRUCTFINI = this.dsTERM_EVAL.getColumn(nPostIdx, "YN_STRUCTFINI");
        	this.gTERM_EVAL	= this.dsTERM_EVAL.getColumn(nPostIdx, "TERM_EVAL");

        	//trace("조회 조건 변경시:" + nrow + " / TERM_EVAL:" + this.gTERM_EVAL + " / YN_STRUCTFINI:" + this.gYN_STRUCTFINI);

        	if(e.pretext != e.posttext) {
        		// 폼상태 초기화
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.dsSearch_onvaluechanged = function(obj,e){
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        //평가기수 콤보 조회
        this.fnSetCombo = function() {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("TY_SEL", "string");
        	this.dsCombo.addColumn("YEAR_EVAL", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "TY_SEL", "P");	// A: 전체 P: 필수
        	this.dsCombo.setColumn(0, "YEAR_EVAL", "%");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTERM_EVAL=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        // 평가대상자생성
        this.fnCreateTarget = function(){
        	if(!this.fnValidate()) return;

        	this.dsCreate.clearData();
        	this.dsCreate.addRow();
        	this.dsCreate.setColumn(0, "TERM_EVAL", this.dsSearch.getColumn(0, "TERM_EVAL"));
        	this.dsCreate.setColumn(0, "SABUN", this.AuthClient.ID_USER);

        	var strSvcId    = "create";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "create=dsCreate";
        	var outData     = "dsOutput=create0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        this.fnCreateTarget_callback = function(svcID, val) {
        	if(val){
        		this.FormBtns.Select.click();
        	}
        }

        // 엑셀업로드
        this.fnExcelUpload = function(){
        // this.gfnExcelImport("적용할Dataset명","sheet명","데이터시작좌표","콜백함수명","구분ID",현재폼);
        	this.gfnExcelImport("dsList","sheet1","A2","fnExcelImportCallback","import",this);
        }

        this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet) {
        	// 다중 시트 처리시 양식의 해당 시트여부를 체크하고자 할땐 dsSheet 시트명 체크
        	// 	if (dsSheet.rowcount > 1) {
        	// 		trace(dsSheet.getColumn(1, "sheetname"));
        	// 	}

        	// 엑셀 양식과 그리드 컬럼이 그대로 일치 하는경우 아래와 같이 처리.
        	// 아닌경우는 이부분 주석처리
        	for (var i=0; i< this.dsList.getColCount(); i++)
        	{
        		sColumnId = "Column"+i;
        		var sColumnNm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, i);
        		if (sColumnNm != "" && sColumnId != sColumnNm)
        		{
        			dsOut.updateColID(sColumnId, sColumnNm);
        		}
        	}

        	// 양식이 일치하고 엑셀내역을 기존데이터에 Insert하지 않고
        	// 엑셀내역 그대로 그리드 반영할 시 copyData
        	//this.dsList.copyData(dsOut);

        	this.dsList.set_enableevent(false);
        	for (var i=0; i<dsOut.rowcount; i++) {
        		var nrow = this.dsList.addRow();
        		this.dsList.setColumn(nrow, this.ucFlag, "I");

        	// 양식이 일치하는 경우 copyRow
        	this.dsList.copyRow(nrow, dsOut, i);

        	// 양식과 일치하지 않는 경우 아래와 같이 컬럼별로 처리.
           //this.dsList.setColumn(nrow, "CD_SYSTEM", dsOut.getColumn(i, "Column1"));
           //this.dsList.setColumn(nrow, "CD_TYPE", dsOut.getColumn(i, "Column2"));
        	}

        	this.dsList.set_enableevent(true);

        	this.gfnSetFormStatus(this, "I");
        };


        // 전체삭제
        this.fnFullDelete = function(){
        	if(!this.fnValidate()) return;

        	if (this.dsList.rowcount == 0) return;

        	this.dsResult.clearData();
        	this.dsDelete.clearData();
        	var nrow = this.dsDelete.addRow();
        	this.dsDelete.setColumn(nrow, "TERM_EVAL", this.dsSearch.getColumn(0, "TERM_EVAL"));
        	this.dsDelete.setColumn(nrow, "SABUN", this.AuthClient.ID_USER);

        	if (this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "delete";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "delete=dsDelete";
        	var outData     = "dsResult=delete0";
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

        // 전체삭제 Callback
        this.fnFullDelete_Callback = function(strId, val) {
        	if(val == false) return;
        	this.fnFullDelete();
        }

        // 확정 Callback
        this.fnSetStructfiniY_Callback = function(strId, val) {
        	if(val == false) return;
        	this.fnSetStructfini("1");
        }

        // 확정취소 Callback
        this.fnSetStructfiniN_Callback = function(strId, val) {
        	if(val == false) return;
        	this.fnSetStructfini("2");
        }

        // 확정 / 확정해지
        this.fnSetStructfini = function(sStructfini){
        	if(!this.fnValidate()) return;

        	if (this.dsList.rowcount == 0) return;

        	this.dsCreate.clearData();
        	this.dsCreate.addRow();
        	this.dsCreate.setColumn(0, "TERM_EVAL", this.dsSearch.getColumn(0, "TERM_EVAL"));
        	this.dsCreate.setColumn(0, "SABUN", this.AuthClient.ID_USER);
        	this.dsCreate.setColumn(0, "TAG", sStructfini);
        	// - '1': 구조 확정을 원할 경우 ,   '2' : 구조확정해제를 원할 경우

        	var strSvcId    = "saveTargetItem";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "saveTargetItem=dsCreate";
        	var outData     = "dsOutput=saveTargetItem0";
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboTERM_EVAL.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAJ_EVALUATION_PERSON.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
