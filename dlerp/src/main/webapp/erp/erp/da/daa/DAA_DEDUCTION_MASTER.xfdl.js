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
            this.set_titletext("경조공제관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAAPR_FAMILYEVENTLIST_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAAPR_FAMILYEVENTLIST_SAVE</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DAAPR_DEDUCTION_MASTER_SELECT</Col></Row><Row><Col id=\"TARGET\">d_save</Col><Col id=\"SP\">DAAPR_DEDUCTION_MASTER_SAVE</Col></Row><Row><Col id=\"TARGET\">d_cancel</Col><Col id=\"SP\">DAAPR_DED_MASTER_CANCEL</Col></Row><Row><Col id=\"TARGET\">d_selectSub</Col><Col id=\"SP\">DAAPR_DED_DETAIL_SELECT</Col></Row><Row><Col id=\"TARGET\">d_save2</Col><Col id=\"SP\">DAAPR_DED_DETAIL_SAVE</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DAAPR_DED_DETAIL_CREATE</Col></Row><Row><Col id=\"TARGET\">cancel</Col><Col id=\"SP\">DAAPR_DED_DETAIL_CANCEL</Col></Row><Row><Col id=\"SP\">DAAPR_DED_MASTER_CREATE</Col><Col id=\"TARGET\">d_create</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YM_PAYMENT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"DS_CORP\"/><Col id=\"YM_PAYMENT\"/><Col id=\"ID_SABUN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_PAYMENT","0.0","10.0","79.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("지급월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_PAYMENT","staYM_PAYMENT:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ctclYM_PAYMENT:0.0","10.0","79.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("30");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","ccfCD_CORP:0.0","10.0","79.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","10.0","180","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:20",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","70.86%","25","5","32.99%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divSplitter2","0","38.21%","100.00%","5",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,"36.57%","divSplitter:5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","1","70.95%","22",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("1");
            obj.set_text("경조대상자");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:5",null,"220","5",null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("2");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Button("btn_DAdd",null,"3","80","22","12",null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("3");
            obj.set_text("대상자추가");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,"36.57%","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","1","53.17%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("4");
            obj.set_text("공제사항");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","sta02:5",null,"220","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("5");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btn_Add",null,"1","50","22","110",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("3");
            obj.set_text("등록");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btn_Delete",null,"1","50","22","56",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btn_Save",null,"1","50","22","2",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("3");
            obj.set_text("저장");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter2:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","0","3","57.81%","22",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("7");
            obj.set_text("공제대상자");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGridSub2","0","sta03:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("8");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btn_Add2",null,"5","50","22","321",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("2");
            obj.set_text("등록");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btn_Delete2",null,"5","50","22","266",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btn_Save2",null,"5","50","22","211",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("4");
            obj.set_text("저장");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btn_DAdd2",null,"5","100","22","106",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("5");
            obj.set_text("대상자생성");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btn_DCancel2",null,"5","100","22","1",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("6");
            obj.set_text("대상자취소");
            this.divData.form.divDataBottom.addChild(obj.name, obj);
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

            obj = new BindItem("item2","divSearch.form.ctclYM_PAYMENT.form.TextBox","value","dsSearch","YM_PAYMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
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
        this.registerScript("DAA_DEDUCTION_MASTER.xfdl", function() {
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

        	//법인 셋팅
        	//this.divSearch.form.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	//this.divSearch.form.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        	//공제월 셋팅
        	var today = this.gfnGetDate().substring(0,6);
        	this.divSearch.form.ctclYM_PAYMENT.form.TextBox.set_value(today);
        	this.FormBtns.Select.click(true);

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {

        	this.FormBtns.Reset.set_enable(true);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btn1 = this.gfnFormButtonAdd("Detail", "fnDetail1");
        	this.btnDeduction = this.gfnFormButtonAdd("Deduction", "fnDeduction","공제관리");
        	this.btnDeductInfoCreate = this.gfnFormButtonAdd("DeductInfoCreate", "fnDeductInfoCreate","공제정보생성");
        	this.btnDeductInfoCancel = this.gfnFormButtonAdd("DeductInfoCancel", "fnDeductInfoCancel","공제정보취소");
        	this.btnPayApply = this.gfnFormButtonAdd("PayApply", "fnPayApply","급여적용");

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;

        	this.ctclYM_PAYMENT = this.divSearch.form.ctclYM_PAYMENT;

        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;

        	this.dxGridSub = this.divData.form.divDataRight.form.objGridSub;

        	this.dxGridSub2 = this.divData.form.divDataBottom.form.objGridSub2;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.CodeFindName = "DAX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "codefind_AfterCDTextChanged";

        	this.ccfID_SABUN.CodeFindName = "DAX_CFBASEINFO_ALL";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "codefind_AfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAA_FAMILYEVENTLIST");

        	this.dxGridSub.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";

        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DA", "DAA_DEDUCTION_MASTER");

        	this.gfnGridInit(this.dxGridSub2, this.dsListSub2, "DA", "DAA_DEDUCTION_DETAIL");

        	this.dxGridSub2.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";

        	/*this.divData.form.divDataLeft.form.btn_DAdd.set_enable(true);*/

        	/*this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";*/

        	this.dxGridSub2.EnterCell = "fnGridSub2_EnterCell";
        	this.dxGridSub.EnterCell = "fnGridSub_EnterCell";
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string"); //법인
        	this.dsSelect.addColumn("YM_PAYMENT", "string"); //지급월
        	this.dsSelect.addColumn("ID_SABUN", "string"); //성명

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("NO_SEQ", "int");
        	this.dsSave.addColumn("CD_EVENT", "string");
        	this.dsSave.addColumn("AM_COMPANY", "int");
        	this.dsSave.addColumn("YM_PAYMENT", "string");
        	this.dsSave.addColumn("YM_DEDUCTION", "string");
        	this.dsSave.addColumn("ID_INSERT", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_CORP", "string");
        	this.dsSelectSub.addColumn("YM_DEDUCTION", "string");

        	this.dsSaveSub = new Dataset();

        	this.dsSaveSub.addColumn("TY_SAVE", "string");
        	this.dsSaveSub.addColumn("YM_DEDUCTION", "string");
        	this.dsSaveSub.addColumn("CD_POSITION", "string");
        	this.dsSaveSub.addColumn("CD_CORP", "string");
        	this.dsSaveSub.addColumn("AM_DEDUCTION", "int");
        	this.dsSaveSub.addColumn("QN_DEDUCTION", "int");
        	this.dsSaveSub.addColumn("DS_REMARK", "string");
        	this.dsSaveSub.addColumn("ID_INSERT", "string");

        	this.dsSelectSub2 = new Dataset();
        	this.dsSelectSub2.addColumn("CD_CORP", "string");
        	this.dsSelectSub2.addColumn("YM_DEDUCTION", "string");

        	this.dsSaveSub2 = new Dataset();
        	this.dsSaveSub2.addColumn("TY_SAVE", "string");
        	this.dsSaveSub2.addColumn("CD_CORP", "string");
        	this.dsSaveSub2.addColumn("YM_DEDUCTION", "string");
        	this.dsSaveSub2.addColumn("ID_PERSON", "string");
        	this.dsSaveSub2.addColumn("ID_SABUN", "string");
        	this.dsSaveSub2.addColumn("CD_POSITION", "string");
        	this.dsSaveSub2.addColumn("AM_DEDUCTION", "int");
        	this.dsSaveSub2.addColumn("QN_DEDUCTION", "int");
        	this.dsSaveSub2.addColumn("DS_REMARK", "string");
        	this.dsSaveSub2.addColumn("ID_USER", "string");

        	this.dsCancel = new Dataset();
        	this.dsCancel.addColumn("YM_DEDUCTION", "string");
        	this.dsCancel.addColumn("CD_CORP", "string");
        	this.dsCancel.addColumn("ID_INSERT", "string");

        	this.dsCreateSub = new Dataset();
        	this.dsCreateSub.addColumn("YM_DEDUCTION", "string");
        	this.dsCreateSub.addColumn("CD_CORP", "string");
        	this.dsCreateSub.addColumn("ID_INSERT", "string");

        	this.dsCancelSub = new Dataset();
        	this.dsCancelSub.addColumn("YM_DEDUCTION", "string");
        	this.dsCancelSub.addColumn("CD_CORP", "string");
        	this.dsCancelSub.addColumn("ID_INSERT", "string");

        	this.dsMasterCreate = new Dataset();
        	this.dsMasterCreate.addColumn("YM_DEDUCTION", "string");
        	this.dsMasterCreate.addColumn("CD_CORP", "string");
        	this.dsMasterCreate.addColumn("ID_INSERT", "string");


        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnValidate()) return;

        	var cd_corp = this.dsSearch.getColumn(0, "CD_CORP"); //this.divSearch.form.ccfCD_CORP.value;
        	var id_sabun = this.dsSearch.getColumn(0, "ID_SABUN"); //this.divSearch.form.ccfID_SABUN.value;
        	var ym_payment = this.dsSearch.getColumn(0, "YM_PAYMENT");

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP", cd_corp);
        	this.dsSelect.setColumn(0, "ID_SABUN", id_sabun);
        	this.dsSelect.setColumn(0, "YM_PAYMENT", ym_payment);

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
        				//this.dsSave.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        				this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsSave.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        				this.dsSave.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsSave.setColumn(nrow, "CD_EVENT", this.dsList.getColumn(i, "CD_EVENT"));
        				this.dsSave.setColumn(nrow, "AM_COMPANY", this.dsList.getColumn(i, "AM_COMPANY"));
        				this.dsSave.setColumn(nrow, "YM_PAYMENT", this.dsList.getColumn(i, "YM_PAYMENT"));
        				this.dsSave.setColumn(nrow, "YM_DEDUCTION", this.dsList.getColumn(i, "YM_DEDUCTION"));
        				this.dsSave.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

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
        	this.gfnExcelExport(this.dxGridSub2);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }

        this.fnReset = function() {
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();
        	this.ccfID_SABUN.form.DSTextBox.set_value("");
        }

        /************************************************************************
         * 서브 버튼 이벤트
         ************************************************************************/
        this.fnSelectSub = function() {
        	/*if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return false;*/

        	this.dsListSub.clearData();

        	var cd_corp = this.dsSearch.getColumn(0, "CD_CORP"); //this.divSearch.form.ccfCD_CORP.value;
        	var ym_payment = this.dsSearch.getColumn(0, "YM_PAYMENT");
        	/*var cd_deduction = this.dsList.getColumn(this.dsList.rowposition, "CD_DEDUCTION");*/

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();
        	this.dsSelectSub.setColumn(0, "CD_CORP", cd_corp);
        	this.dsSelectSub.setColumn(0, "YM_DEDUCTION", ym_payment);
        	/*this.dsSelectSub.setColumn(0, "CD_DEDUCTION", cd_deduction);*/


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

        /************************************************************************
         * 서브 버튼 이벤트
         ************************************************************************/
        this.fnSelectSub2 = function() {
        	/*if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return false;*/

        	this.dsListSub2.clearData();

        	var cd_corp = this.dsSearch.getColumn(0, "CD_CORP"); //this.divSearch.form.ccfCD_CORP.value;
        	var ym_payment = this.dsSearch.getColumn(0, "YM_PAYMENT");
        	/*var cd_deduction = this.dsList.getColumn(this.dsList.rowposition, "CD_DEDUCTION");*/

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelectSub2.clearData();
        	this.dsSelectSub2.addRow();
        	this.dsSelectSub2.setColumn(0, "CD_CORP", cd_corp);
        	this.dsSelectSub2.setColumn(0, "YM_DEDUCTION", ym_payment);
        	/*this.dsSelectSub.setColumn(0, "CD_DEDUCTION", cd_deduction);*/


        	var strSvcId    = "detail2";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "d_selectSub=dsSelectSub2";
        	var outData     = "dsListSub2=d_selectSub0";
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

        this.divData_divDataRight_btn_Save_onclick = function(obj,e)
        {
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
        				this.dsSaveSub.setColumn(nrow, "YM_DEDUCTION", this.dsListSub.getColumn(i, "YM_DEDUCTION"));
        				this.dsSaveSub.setColumn(nrow, "CD_POSITION", this.dsListSub.getColumn(i, "CD_POSITION"));
        				this.dsSaveSub.setColumn(nrow, "CD_CORP", this.dsListSub.getColumn(i, "CD_CORP"));
        				this.dsSaveSub.setColumn(nrow, "AM_DEDUCTION", this.dsListSub.getColumn(i, "AM_DEDUCTION"));
        				this.dsSaveSub.setColumn(nrow, "QN_DEDUCTION", this.dsListSub.getColumn(i, "QN_DEDUCTION"));
        				this.dsSaveSub.setColumn(nrow, "DS_REMARK", this.dsListSub.getColumn(i, "DS_REMARK"));
        				this.dsSaveSub.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        				break;
        		}
        	}

        	if (this.dsSaveSub.rowcount == 0) return;

        	var strSvcId    = "saveSub";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "d_save=dsSaveSub";
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
        };


        this.divData_divDataBottom_btn_Save2_onclick = function(obj,e)
        {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGridSub2)) return;

        	this.dxGridSub2.updateToDataset();

        	this.dsSaveSub2.clearData();

        	for (var i = 0; i < this.dsListSub2.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub2, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSaveSub2.addRow();

        				this.dsSaveSub2.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSaveSub2.setColumn(nrow, "YM_DEDUCTION", this.dsListSub2.getColumn(i, "YM_DEDUCTION"));
        				this.dsSaveSub2.setColumn(nrow, "ID_PERSON", this.dsListSub2.getColumn(i, "ID_PERSON"));
        				this.dsSaveSub2.setColumn(nrow, "ID_SABUN", this.dsListSub2.getColumn(i, "ID_SABUN"));
        				this.dsSaveSub2.setColumn(nrow, "CD_POSITION", this.dsListSub2.getColumn(i, "CD_POSITION"));
        				this.dsSaveSub2.setColumn(nrow, "CD_CORP", this.dsListSub2.getColumn(i, "CD_CORP"));
        				this.dsSaveSub2.setColumn(nrow, "AM_DEDUCTION", this.dsListSub2.getColumn(i, "AM_DEDUCTION"));
        				this.dsSaveSub2.setColumn(nrow, "QN_DEDUCTION", this.dsListSub2.getColumn(i, "QN_DEDUCTION"));
        				this.dsSaveSub2.setColumn(nrow, "DS_REMARK", this.dsListSub2.getColumn(i, "DS_REMARK"));
        				this.dsSaveSub2.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        				break;
        		}
        	}

        	if (this.dsSaveSub2.rowcount == 0) return;

        	var strSvcId    = "saveSub2";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "d_save2=dsSaveSub2";
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
        };
        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnValidate = function() {

        // 	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        // 		this.fnVaidateCallback = function() {
        // 			this.ccfCD_CORP.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("법인코드를 입력하세요.");
        // 		return false;
        // 	}

        	if (this.gfnIsNull(this.ctclYM_PAYMENT.form.TextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctclYM_PAYMENT.form.TextBox.setFocus();
        		}
        		this.gfnAlert("지급월을 입력하세요.");
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
        	this.FormBtns.Reset.set_enable(true);

        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.fnSelectSub();
        		this.fnSelectSub2();
        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}

        	} else if (svcID == "saveSub") {
        		if (errorCode == 0) {
        			this.fnSelectSub();
        		} else {
        			this.gfnAlert(errorMsg);
        		}

        	} else if (svcID == "saveSub2") {
        		if (errorCode == 0) {
        			this.fnSelectSub2();
        		} else {
        			this.gfnAlert(errorMsg);
        		}

        	} else if (svcID == "detail") { // 공제사항 조회
        	} else if (svcID == "detail2") { // 공제대상자 조회
        		if (this.dxGridSub2.rowcount == 1 || this.dxGridSub2.currentrow < 0) {
        			this.btnPayApply.set_enable(false);
        		}else {
        			this.btnPayApply.set_enable(true);
        		}
        	} else if (svcID == "d_create") {
        		this.gfnAlert("공제정보가 생성되었습니다.");
        		this.fnSelectSub();
        		this.fnSelectSub2();

        	} else if (svcID == "cancel") {
        		this.gfnAlert("공제정보가 취소되었습니다.");
        		this.fnSelect();
        		this.fnSelectSub();
        		this.fnSelectSub2();

        	} else if (svcID == "createSub") {
        		this.gfnAlert("공제대상자가 생성되었습니다.");
        		this.fnSelect();
        		this.fnSelectSub();
        		this.fnSelectSub2();

        	} else if (svcID == "cancelSub") {
        		this.gfnAlert("공제대상자가 취소되었습니다.");
        		this.fnSelect();
        		this.fnSelectSub();
        		this.fnSelectSub2();
        	}

        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.codefind_AfterCDTextChanged = function(id) {
        	this.fnSearchInit();
        }

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	if(id = "DAX_CFBASEINFO_ALL"){
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", "%");
        		dsUserParam.setColumn(nrow, "YN_CORP", "Y");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");	// 재직구분
        	}

        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow)
        {
        	switch(id) {
        	//구분
        		case "DAX_CFCOMMONCODE":
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "ED");
        		break;

        		case "DAX_CFBASEINFO_ALL":
        			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", "%");
        			dsUserParam.setColumn(nrow, "YN_CORP", "Y");
        			dsUserParam.setColumn(nrow, "TY_RETIRE", "%");	// 재직구분
        		break;

        		case "DAX_CFDEPT":
        			dsUserParam.setColumn(nrow, "GR_SEARCH", "");
        			dsUserParam.setColumn(nrow, "CD_DEPT", "");
        			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        			dsUserParam.setColumn(nrow, "YN_CURRENT", "");
        		break;


        		default:
        	}

        	return true;
        };

        this.fnGrid_EnterCell = function(obj, row, cell) {
        	if (!this.dxGridSub.rowcount == 0 || !this.dxGridSub.currentrow < 0){
        		return false;
        	}
        }

        this.fnGridSub_EnterCell = function(obj, row, cell) {

        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);

        	if (this.dxGridSub2.rowcount == 1 || this.dxGridSub2.currentrow < 0){
        		if(colnm == "DS_POSITION"){
        			return false;
        		}
        	} else {
        		return false;
        	}
        }

        this.fnGridSub2_EnterCell = function(obj, row, cell) {
        	if (this.dsListSub2.getColumn(1,"YN_SALARY") == "Y")
        	{
        		return false;
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
        		// 폼상태 초기화
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        		this.gfnGridClear(this.dxGridSub2);
        	}
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        		this.gfnGridClear(this.dxGridSub2);
        	}
        };

        this.divData_divDataLeft_btn_DAdd_onclick = function(obj,e)
        {
        	if (this.gfnIsNull(this.ctclYM_PAYMENT.form.TextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctclYM_PAYMENT.form.TextBox.setFocus();
        		}
        		this.gfnAlert("지급월을 입력해주세요.");
        		return false;
        	}
          	var param = {};
          	this.gfnFormOpenNonAuth("DAA", "DAA_FAMILYEVENTLIST_POP", "fnFamilyListPopCallback", param, 970, 550);

        };

        this.fnFamilyListPopCallback = function(svcID, val) {
        	if(val == false) return;
        	if(this.gfnIsNull(val)) return;

        	var ds = this.dxGrid.getBindDataset();

        	var jsonArr = JSON.parse(val);

        	var arr = jsonArr.ARR;

        	this.dsList.set_enableevent(false);

        	for(var r = 0; r < arr.length; r++) {
        		var json = JSON.parse(JSON.stringify(arr[r]));

        		var nrow = this.dsList.addRow();

        		for(var c = 0; c < ds.colcount; c++) {
        			this.dsList.setColumn(nrow, ds.getColID(c), json[ds.getColID(c)]);
        		}

        		this.dsList.setColumn(nrow, this.ucFlag, "I");
        		this.dsList.setColumn(nrow, "YM_PAYMENT", this.divSearch.form.ctclYM_PAYMENT.form.TextBox.value);

        	}

        	this.dsList.set_enableevent(true);

        	this.FormBtns.Save.set_enable(true);
        };

        //공제정보 생성
        this.fnDeductInfoCreate = function() {

        	this.dsMasterCreate.clearData();

        	var nrow = this.dsMasterCreate.addRow();
        	this.dsMasterCreate.setColumn(nrow, "YM_DEDUCTION", this.divSearch.form.ctclYM_PAYMENT.form.TextBox.value);
        	this.dsMasterCreate.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsMasterCreate.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        	var strSvcId    = "d_create";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "d_create=dsMasterCreate";
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
        };
        //급여적용
        this.fnPayApply = function() {
        	var param = {};
        	param.YM_SALARY = this.dsSearch.getColumn(0, "YM_PAYMENT");
        	param.CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");
        	param.DS_CORP = this.dsSearch.getColumn(0, "DS_CORP");
        	param.YN_SALARY = this.dsListSub2.getColumn(1, "YN_SALARY") == "Y" ? "C" : "M";
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAA_DEDUCTION_SALARY_DLG", "fnPayApplyCallback", param);
        };

        this.fnDeductInfoCancel = function() {
        	this.gfnConfirm("작업을 계속 진행 할 경우 기존의 공제대상자는 삭제됩니다.\r\n급여 공제정보를 생성하였을 경우 재작업하여야 합니다.\r\n계속 진행하시겠습니까?",
        							"fnDeductInfoCancelCallback");
        };


        this.fnPayApplyCallback = function(strId, val)  {
        	if(val != false) {
        	this.FormBtns.Select.click();
        	}
        };

        this.fnDeductInfoCancelCallback = function(strId, val)  {
        	if(val == false) return;

        	this.dsCancel.clearData();

        	var nrow = this.dsCancel.addRow();

        	this.dsCancel.setColumn(nrow, "YM_DEDUCTION", this.divSearch.form.ctclYM_PAYMENT.form.TextBox.value);
        	this.dsCancel.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsCancel.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        	var strSvcId    = "cancel";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "d_cancel=dsCancel";
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
        };


        this.fnDeduction = function() {
        	var param = {};
        	param.CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");
        	param.DS_CORP = this.dsSearch.getColumn(0, "DS_CORP");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAA_DEDUCTION", "", param);
        };


        this.fnDeductionPopCallback = function(svcID, val) {
        	var json = JSON.parse(val);

        	var cd_corp = json.CD_CORP;
        	var ym_deduction = json.YM_DEDUCTION;

        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();
        	this.dsSelectSub.setColumn(0, "CD_CORP", cd_corp);
        	this.dsSelectSub.setColumn(0, "YM_DEDUCTION", ym_deduction);

        	var strSvcId    = "selectSub";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "d_select=dsSelectSub";
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

        this.fnDetailCallback = function(strId, val) {
        	this.FormBtns.Select.click();
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };

        this.divData_divSplitter2_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter2");
        	return true;
        };

        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_left(e.clientx);
        		this.divData.form.resetScroll();

        	} else if (e.userdata == "splitter2") {
        		this.divData.form.divSplitter2.set_top(e.clienty);
        		this.divData.form.resetScroll();
        	}
        };

        this.divData_divDataRight_btn_Add_onclick = function(obj,e)
        {
        	var nRow = this.gfnGridAdd(this.dxGridSub);

        	this.dsListSub.setColumn(nRow, "YM_DEDUCTION", this.divSearch.form.ctclYM_PAYMENT.form.TextBox.value);
        	this.dsListSub.setColumn(nRow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);

        	this.gfnSetFormStatus(this, "I");
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Save.set_enable(false);
        };

        this.divData_divDataRight_btn_Delete_onclick = function(obj,e)
        {
        	this.gfnGridDel(this.dxGridSub);
        };

        this.divData_divDataBottom_btn_Add2_onclick = function(obj,e)
        {
        	var nRow = this.gfnGridAdd(this.dxGridSub2);

        	this.dsListSub2.setColumn(nRow, "YM_DEDUCTION", this.divSearch.form.ctclYM_PAYMENT.form.TextBox.value);
        	this.dsListSub2.setColumn(nRow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsListSub2.setColumn(nRow, "DS_CORP", this.ccfCD_CORP.form.DSTextBox.value);

        	this.gfnSetFormStatus(this, "I");
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Save.set_enable(false);
        };




        this.divData_divDataBottom_btn_Delete2_onclick = function(obj,e)
        {
        	this.gfnGridDel(this.dxGridSub2);
        };

        this.divData_divDataBottom_btn_DCancel2_onclick = function(obj,e)
        {
        // 	if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        // 		this.gfnAlert("법인을 입력해주세요.");
        // 		return false;
        // 	}
        	this.gfnConfirm("작업을 계속 진행 할 경우 기존의 공제대상자는 삭제됩니다.\r\n급여 공제정보를 생성하였을 경우 재작업하여야 합니다.\r\n계속 진행하시겠습니까?",
        							"fnDeductDetailCancelCallback");
        };

        this.fnDeductDetailCancelCallback = function(strId, val)  {
        	if(val == false) return;

        	this.dsCancelSub.clearData();

        	var nrow = this.dsCancelSub.addRow();

        	this.dsCancelSub.setColumn(nrow, "YM_DEDUCTION", this.divSearch.form.ctclYM_PAYMENT.form.TextBox.value);
        	this.dsCancelSub.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsCancelSub.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        	var strSvcId    = "cancelSub";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "cancel=dsCancelSub";
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
        };

        this.divData_divDataBottom_btn_DAdd2_onclick = function(obj,e)
        {
        // 	if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        // 		this.gfnAlert("법인을 입력해주세요.");
        // 		return false;
        // 	}
        	this.gfnConfirm("작업을 계속 진행할 경우 기존의 공제대상자는 삭제 후 재생성됩니다.\r\n급여 공제정보를 생성하였을 경우 재작업하여야 합니다.\r\n계속 진행하시겠습니까?",
        							"fnDeductDetailCreateCallback");
        };

        this.fnDeductDetailCreateCallback = function(strId, val)  {
        	if(val == false) return;

        	this.dsCreateSub.clearData();

        	var nrow = this.dsCreateSub.addRow();

        	this.dsCreateSub.setColumn(nrow, "YM_DEDUCTION", this.divSearch.form.ctclYM_PAYMENT.form.TextBox.value);
        	this.dsCreateSub.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsCreateSub.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        	var strSvcId    = "createSub";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "create=dsCreateSub";
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
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divSplitter2.addEventHandler("ondrag",this.divData_divSplitter2_ondrag,this);
            this.divData.form.divDataLeft.form.btn_DAdd.addEventHandler("onclick",this.divData_divDataLeft_btn_DAdd_onclick,this);
            this.divData.form.divDataRight.form.btn_Add.addEventHandler("onclick",this.divData_divDataRight_btn_Add_onclick,this);
            this.divData.form.divDataRight.form.btn_Delete.addEventHandler("onclick",this.divData_divDataRight_btn_Delete_onclick,this);
            this.divData.form.divDataRight.form.btn_Save.addEventHandler("onclick",this.divData_divDataRight_btn_Save_onclick,this);
            this.divData.form.divDataBottom.form.btn_Add2.addEventHandler("onclick",this.divData_divDataBottom_btn_Add2_onclick,this);
            this.divData.form.divDataBottom.form.btn_Delete2.addEventHandler("onclick",this.divData_divDataBottom_btn_Delete2_onclick,this);
            this.divData.form.divDataBottom.form.btn_Save2.addEventHandler("onclick",this.divData_divDataBottom_btn_Save2_onclick,this);
            this.divData.form.divDataBottom.form.btn_DAdd2.addEventHandler("onclick",this.divData_divDataBottom_btn_DAdd2_onclick,this);
            this.divData.form.divDataBottom.form.btn_DCancel2.addEventHandler("onclick",this.divData_divDataBottom_btn_DCancel2_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAA_DEDUCTION_MASTER.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
