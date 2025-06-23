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
            this.set_titletext("결재상신");
            this.set_cssclass("borderBG");
            this.getSetter("maxwidth").set("830");
            this.getSetter("maxheight").set("640");
            if (Form == this.constructor)
            {
                this._setFormPosition(790,565);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHBPR_ACNTUNIT_TREELVY_SELECT</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DZRPR_USERINFO_SELECT</Col></Row><Row><Col id=\"TARGET\">s_select</Col><Col id=\"SP\">DZRPR_APP_SAVE</Col></Row><Row><Col id=\"SP\">DZRPR_APPLINES_INSERT</Col><Col id=\"TARGET\">save</Col></Row><Row><Col id=\"SP\">DZRPR_APP_SELECT</Col><Col id=\"TARGET\">select_line</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_NAME\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub2", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SN_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"ID_AP_USER\" type=\"STRING\" size=\"256\"/><Column id=\"DS_AP_USER\" type=\"STRING\" size=\"256\"/><Column id=\"ID_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"YN_FINAL_AP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSaveSel", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"ID_AP_OUT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsParamSave", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_AP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM01\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM02\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM03\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM04\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_NOTE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PARAM01\"/><Col id=\"PARAM02\"/><Col id=\"PARAM03\"/><Col id=\"ID_AP_TYPE\"/><Col id=\"DS_TITLE\"/><Col id=\"PARAM04\"/><Col id=\"DS_NOTE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLine", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"DS_LINE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_BONSA\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","48.95%","10","23","499",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_background("url(\'theme://images/slt_WF_SplitterV.png\') no-repeat center center");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,"520","divSplitter:3",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100%","35",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("1");
            obj.set_text("부서목록");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:0",null,"484","0",null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:7","0",null,null,"0","40",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","0","285",null,"35","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("3");
            obj.set_text("결재선");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta02","0","0",null,"35","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("사용자목록");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Grid("objGridSub2","0","sta00:0",null,"104","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btnAdd","132","251","52","26",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("4");
            obj.set_text("추가");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edtDS_NAME","0","sta02:0","255","24",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("6");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","edtDS_NAME:10",null,"172","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btnDel","btnAdd:4","251","52","26",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("5");
            obj.set_text("삭제");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btnSch","edtDS_NAME:3","sta02:0","24","24",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("7");
            obj.set_icon("url(\'theme://images/btn_TF_Search.png\')");
            obj.set_text("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new TextArea("txtDS_NOTE","0","469",null,"50","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_background("transparent");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta01","0","434",null,"35","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("9");
            obj.set_text("의견");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btnTxt",null,"290","76","26","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("10");
            obj.set_text("전결규정");
            obj.set_cssclass("btn_WF_function");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btnBig",null,"469","24","24","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("11");
            obj.set_text("+");
            obj.set_font("bold 16px/normal \"돋움\"");
            obj.set_background("silver");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btnPreview",null,"439","88","26","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("14");
            obj.set_text("의견미리보기");
            obj.set_visible("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new TextArea("txtDS_NOTE_BIG","16","121",null,"70","170",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_background("white");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btnSmall",null,"249","24","24","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("13");
            obj.set_text("-");
            obj.set_font("bold 16px/normal \"돋움\"");
            obj.set_background("silver");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staYnGb","59","288","209","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("15");
            obj.set_text("");
            obj.set_textDecoration("none");
            obj.set_color("red");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btnOk",null,"539","52","26","55",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("상신");
            obj.set_cssclass("btn_WF_action");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,"539","52","26","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Static("Static00","423","386","360","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_background("#ffffff");
            obj.set_border("1px dotted");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.divDataRight.form.edtDS_NAME","value","dsSearch","DS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.divDataRight.form.txtDS_NOTE","value","dsParamSave","DS_NOTE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divDataRight.form.txtDS_NOTE_BIG","value","dsParamSave","DS_NOTE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DZR_AP_REQUEST.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.popupVal = "";

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

        	this.divData.form.divDataRight.form.txtDS_NOTE_BIG.move(0, 249, null, 250, 0, null );
        	this.divData.form.divDataRight.form.txtDS_NOTE_BIG.set_visible(false);
        	this.divData.form.divDataRight.form.btnSmall.set_visible(false);

        	this.dsParamSave.setColumn(0, "ID_AP_TYPE", this.getOwnerFrame().ID_AP_TYPE);
        	this.dsParamSave.setColumn(0, "PARAM01", this.getOwnerFrame().V_PARAM01);
        	this.dsParamSave.setColumn(0, "PARAM02", this.getOwnerFrame().V_PARAM02);
        	this.dsParamSave.setColumn(0, "PARAM03", this.getOwnerFrame().V_PARAM03);
        	this.dsParamSave.setColumn(0, "PARAM04", this.getOwnerFrame().V_PARAM04);
        	this.dsParamSave.setColumn(0, "DS_TITLE", this.getOwnerFrame().DS_TITLE);

        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정
         ************************************************************************/
        this.fnSetButton = function() {
        	// 서브 버튼 사용(2개 그리드 중간에 있는 파란선) 상단에 공통 셋트가 하나더 생긴다
        	//this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter); // divSplitter sync
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btn1 = this.gfnFormButtonAdd("btnDefinite", "fnDefinite");			// 예산확정
        	//this.btn2 = this.gfnFormButtonAdd("btnDefinitecncl", "fnDefinitecncl");	// 확정취소
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataRight.form.objGridSub;
        	this.dxGridSub2 = this.divData.form.divDataRight.form.objGridSub2;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.gfnGridInit(this.dxGrid, this.dsList, "DZ", "DZG_TEAMSEARCH01", "DEPT", "LV_DEPT_ACNT");
        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	//this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);

        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DZ", "DZG_USERS");
        	this.dxGridSub.set_selecttype("cell");
        	//this.dxGridSub.addEventHandler("onselectchanged", this.fnGridSub_RowCellChanged, this);

        	this.gfnGridInit(this.dxGridSub2, this.dsListSub2, "DZ", "DZR_APLINES");
        	this.dxGridSub2.addEventHandler("ondrag", this.dxGridSub2_ondrag, this);
        	this.dxGridSub2.addEventHandler("ondrop", this.dxGridSub2_ondrop, this);

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelectLine = new Dataset();
        	this.dsSelectLine.addColumn("ID_AP_TYPE", "string");
        	this.dsSelectLine.addColumn("PARAM01", "string");
        	this.dsSelectLine.addColumn("PARAM02", "string");
        	this.dsSelectLine.addColumn("PARAM03", "string");
        	this.dsSelectLine.addColumn("PARAM04", "string");

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSelect.addColumn("TY_USE", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_DEPT", "string");
        	this.dsSelectSub.addColumn("DS_NAME", "string");

        	this.dsSaveSel = new Dataset();
        	this.dsSaveSel.addColumn("ID_AP_OUT", "string");
        	this.dsSaveSel.addColumn("ID_AP_TYPE", "string");
        	this.dsSaveSel.addColumn("PARAM01", "string");
        	this.dsSaveSel.addColumn("PARAM02", "string");
        	this.dsSaveSel.addColumn("PARAM03", "string");
        	this.dsSaveSel.addColumn("PARAM04", "string");
        	this.dsSaveSel.addColumn("DS_TITLE", "string");
        	this.dsSaveSel.addColumn("DS_NOTE", "string");
        	this.dsSaveSel.addColumn("DS_BIGO", "string");
        	this.dsSaveSel.addColumn("ID_USER", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("ID_AP", "string");
        	this.dsSave.addColumn("SN_ORDER", "string");
        	this.dsSave.addColumn("ID_AP_USER", "string");
        	this.dsSave.addColumn("ID_EMAIL", "string");
        	this.dsSave.addColumn("YN_FINALAPP", "string");
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_DEPT_ACNT", "00000000");
        	this.dsSelect.setColumn(0, "TY_USE", "Y");

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

        // 화면 상단 텍스트 내용 조회
        this.fnLineSelect = function() {
        	this.dsSelectLine.clearData();
        	this.dsSelectLine.addRow();

        	this.dsSelectLine.setColumn(0, "ID_AP_TYPE", this.dsParamSave.getColumn(0, "ID_AP_TYPE"));
        	this.dsSelectLine.setColumn(0, "PARAM01", this.dsParamSave.getColumn(0, "PARAM01"));
        	this.dsSelectLine.setColumn(0, "PARAM02", this.dsParamSave.getColumn(0, "PARAM02"));
        	this.dsSelectLine.setColumn(0, "PARAM03", this.dsParamSave.getColumn(0, "PARAM03"));
        	this.dsSelectLine.setColumn(0, "PARAM04", this.dsParamSave.getColumn(0, "PARAM04"));

        	var strSvcId    = "select_line";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select_line=dsSelectLine";
        	var outData     = "dsLine=select_line0";
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
        	//var nrow = this.gfnGridAdd(this.dxGridSub);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGridSub);
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

        /************************************************************************
         * 서브 버튼 이벤트
         ************************************************************************/
        // 디테일 그리드 조회
        this.fnSelectSub = function() {

        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return;
        	if (this.dsList.rowposition < 1) return;

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	// 디테일 데이터셋 데이터 삭제
        	this.dsListSub.clearData();

        	// 디테일 파마리터 데이터셋 셋팅
        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();

        	this.dsSelectSub.setColumn(0, "CD_DEPT", this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT"));
        	this.dsSelectSub.setColumn(0, "DS_NAME", this.dsSearch.getColumn(0, "DS_NAME"));

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

        // 디테일2 그리드 조회
        this.fnSelectSub2 = function() {

        	if (this.dxGridSub.rowcount == 0 || this.dxGridSub.currentrow < 0) return;

        	//this.gfnGridBeforeSelect(this.dxGridSub2);

        	// 디테일 데이터셋 데이터 삭제
        	//this.dsListSub2.clearData();

        	// 디테일 파마리터 데이터셋 셋팅
        	this.dsSelectSub2.clearData();
        	this.dsSelectSub2.addRow();

        	this.dsSelectSub2.setColumn(0, "CD_SAUPCODE", this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_SAUPCODE"));
        	this.dsSelectSub2.setColumn(0, "CD_SITE", this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_SITE"));
        	this.dsSelectSub2.setColumn(0, "CD_DEPTAPPLY", this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_DEPTAPPLY"));

        	var strSvcId    = "detail2";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "d_select2=dsSelectSub2";
        	var outData     = "dsListSub2=d_select20";
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



        this.fnExcelSub = function() {
        	this.gfnExcelExport(this.dxGridSub);
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        	/*
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("사업지코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
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
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		// 화면 상단 텍스트 내용 조회
        		this.fnLineSelect();
        	}
        	else if (svcID == "detail") {
        		this.gfnGridAfterSelect(this.dxGridSub);

        		//this.gfnGridBeforeSelect(this.dxGridSub2);

        		// 3번째 그리드의 데이터셋 데이터 삭제
        		//this.dsListSub2.clearData();
        	}
        	else if (svcID == "savesel") {
        		if (errorCode == 0) {
        			//alert(this.dsSaveSel.getColumn(0, "ID_AP_OUT"));
        			this.fnApplines();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == "save") {
        		if (errorCode == 0) {
        			this.fnAppCallback = function() {
        				// this.close()가 작동하지 않았고,
        				// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        				this.getParentContext().close(true);
        			}
        			this.gfnAlert("결재가 상신되었습니다.", "fnAppCallback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == "select_line") {
        		if(this.dsLine.rowcount > 0){
        			if(this.dsLine.getColumn(0, "YN_BONSA") == "Y"){
        				this.divData.form.divDataRight.form.staYnGb.set_text("(본사결재 품의서)");
        			}else{
        				this.divData.form.divDataRight.form.staYnGb.set_text("");
        			}
        		}else{
        			this.divData.form.divDataRight.form.staYnGb.set_text("");
        		}

        		/*
        		if(this.dsLine.rowcount > 0){
        			this.divData.form.divTitle.form.staTitle.set_text(this.dsLine.getColumn(0, "DS_LINE"));
        		}
        		*/
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		// 마스터 그리드 클릭 이벤트(디테일 그리드 조회)
        		this.dsSearch.setColumn(0, "DS_NAME", "");
        		this.fnSelectSub();
        		obj.oldrow = -1;
        	}
        };

        this.fnGridSub_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		// 마스터 그리드 클릭 이벤트(디테일 그리드 조회)
        		//this.fnSelectSub2();
        		obj.oldrow = -1;
        	}
        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        		this.gfnGridClear(this.dxGridSub2);
        	}
        }

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
        	if(e.oldvalue != e.newvalue){
        	//this.gfnGridClear(this.dxGrid);
        	//this.gfnGridClear(this.dxGridSub);
        	//this.gfnGridClear(this.dxGridSub2);
        	}
        };

        // 사용자목록 조회
        this.divData_divDataRight_btnSch_onclick = function(obj,e)
        {
        	this.fnSelectSub();
        };

        // 결재선 추가
        this.divData_divDataRight_btnAdd_onclick = function(obj,e)
        {
        	if(this.dsListSub.rowcount < 1) return;

        	var nSubRow = this.dsListSub.rowposition;

        	var findRowVal = this.dsListSub2.findRow("ID_AP_USER",this.dsListSub.getColumn(nSubRow, "ID_USER"));

        	if(findRowVal >= 0){
        		this.gfnAlert("이미 추가된 결재자입니다.");
        		return;
        	}

        	var nRow = this.gfnGridAdd(this.dxGridSub2, "bottom");

        	//this.dsListSub2.setColumn(nRow, "SN_ORDER", nRow+1);	// 순번
        	var colSN_ORDER = this.dxGridSub2.getBindCellIndex("body", "SN_ORDER");
        	this.dxGridSub2.setCellProperty("body", colSN_ORDER, "expr", "expr:currow+1");		// 순번
        	this.dsListSub2.setColumn(nRow, "ID_AP_USER", this.dsListSub.getColumn(nSubRow, "ID_USER"));	// 사번
        	this.dsListSub2.setColumn(nRow, "DS_AP_USER", this.dsListSub.getColumn(nSubRow, "DS_HNAME"));	// 결재자
        	this.dsListSub2.setColumn(nRow, "ID_EMAIL", this.dsListSub.getColumn(nSubRow, "ID_EMAIL"));	// 이메일
        	this.dsListSub2.setColumn(nRow, "YN_FINAL_AP", this.dsListSub.getColumn(nSubRow, "TY_DEPT"));	// 현장구분
        };

        // 결재선 삭제
        this.divData_divDataRight_btnDel_onclick = function(obj,e)
        {
        	this.dsListSub2.deleteRow(this.dsListSub2.rowposition);
        };

        // 상신 버튼 클릭(키값을 조회해 온다)
        this.divData_btnOk_onclick = function(obj,e)
        {
        	// 결재자가 추가 된게 없으면 실행하지 않는다.
        	if(this.dsListSub2.rowcount < 1){
        		this.gfnAlert("결재자를 추가해주세요.");
        		return;
        	}

        	if(this.dsLine.getColumn(0, "YN_BONSA") == "Y"){
        		if(this.dsListSub2.findRow("YN_FINAL_AP", "N") < 0){
        			this.gfnAlert("본사 결재자가 필요합니다.");
        			return false;
        		}
        	}

        	this.dsSaveSel.clearData();
        	this.dsSaveSel.addRow();

        	this.dsSaveSel.setColumn(0, "ID_AP_OUT", "");
        	this.dsSaveSel.setColumn(0, "ID_AP_TYPE", this.dsParamSave.getColumn(0, "ID_AP_TYPE"));
        	this.dsSaveSel.setColumn(0, "PARAM01", this.dsParamSave.getColumn(0, "PARAM01"));
        	this.dsSaveSel.setColumn(0, "PARAM02", this.dsParamSave.getColumn(0, "PARAM02"));
        	this.dsSaveSel.setColumn(0, "PARAM03", this.dsParamSave.getColumn(0, "PARAM03"));
        	this.dsSaveSel.setColumn(0, "PARAM04", this.dsParamSave.getColumn(0, "PARAM04"));
        	this.dsSaveSel.setColumn(0, "DS_TITLE", this.dsParamSave.getColumn(0, "DS_TITLE"));
        	this.dsSaveSel.setColumn(0, "DS_NOTE", this.dsParamSave.getColumn(0, "DS_NOTE"));
        	this.dsSaveSel.setColumn(0, "DS_BIGO", "");
        	this.dsSaveSel.setColumn(0, "ID_USER", this.AuthClient.ID_USER);


        	var strSvcId    = "savesel";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "s_select=dsSaveSel";
        	var outData     = "dsSaveSel=s_select";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        // 상신 저장 처리
        this.fnApplines = function() {
        	// 그리드 필수항목 체크``
        	//if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGridSub2.updateToDataset();

        	this.dsSave.clearData();

        	var colSN_ORDER = this.dxGridSub2.getBindCellIndex("body", "SN_ORDER");
        	for (var i = 0; i < this.dsListSub2.rowcount; i++) {
        		var nrow = this.dsSave.addRow();

        		this.dsSave.setColumn(nrow, "ID_AP", this.dsSaveSel.getColumn(0, "ID_AP_OUT"));
        		this.dsSave.setColumn(nrow, "SN_ORDER", this.dxGridSub2.getCellText(i, colSN_ORDER));	// 순번을 currow로 셋팅하면 데이터셋에 반영않됨. 그래서 그리드에 텍스트를 불러옴
        		this.dsSave.setColumn(nrow, "ID_AP_USER", this.dsListSub2.getColumn(i, "ID_AP_USER"));
        		this.dsSave.setColumn(nrow, "ID_EMAIL", this.dsListSub2.getColumn(i, "ID_EMAIL"));
        		this.dsSave.setColumn(nrow, "YN_FINALAPP", this.dsListSub2.getColumn(i, "YN_FINAL_AP"));
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

        // 취소
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };


        /************************************************************************
         * 로우 drag&drop 순번 정렬
         ************************************************************************/

        this.dxGridSub2_ondrag = function(obj, e)
        {
        	trace("dxGridSub2_ondrag:"+e.row+","+obj._showEditing);
        	if(e.row < 0 || obj._showEditing)
        	{
        		return false;
        	}

        	this.dxGridSub2.set_selecttype("cell");
        	trace("dxGridSub2_ondrag:1");
        	sTextDragData = [];
        	// 마우스로 드레그해서 움직일때 보여지는 컬럼 셋팅(Static00 에 컬럼이 셋팅된다)
        	//sTextDragData.push(obj.getCellValue(e.row, obj.getBindCellIndex("body", "SN_ORDER")));
        	sTextDragData.push(obj.getCellValue(e.row, obj.getBindCellIndex("body", "ID_AP_USER")));
        	sTextDragData.push(obj.getCellValue(e.row, obj.getBindCellIndex("body", "DS_AP_USER")));
        	sTextDragData.push(obj.getCellValue(e.row, obj.getBindCellIndex("body", "ID_EMAIL")));
        	sTextDragData.push(obj.getCellValue(e.row, obj.getBindCellIndex("body", "YN_FINAL_AP")));

        	var cell_rect = obj.getCellRect(e.row, e.cell);
        	//alert("cell_rect left : " + cell_rect.left + "\ne.row : " + e.row + "\ncell_top : " + cell_rect.top);
        	this.Static00.set_left(cell_rect.left);
        	this.Static00.set_top(cell_rect.top-5);
        	//this.Static00.set_width(cell_rect.width);
        	this.Static00.set_height(cell_rect.height);
        	this.Static00.set_text(sTextDragData.join("     "));
        	this.Static00.set_tooltiptext(e.row);

        	trace("dxGridSub2_ondrag:3");
        	// 드래그가 민감해서 시간차 보이기
        	this.gfnSetTimer(this, function() {
        	trace("dxGridSub2_ondrag:4,"+this.IsDrag);
        		if(this.IsDrag == true) {
        			this.Static00.set_visible(true);
        		}
        	}, 300);
        	return true;
        };

        this.DragTextMove = function(obj, e)
        {
        	this.IsDrag = true;
            //if( this.Static00.visible == true )
            {
        		if(e.fromobject.name == "objGridSub2" || e.fromobject.name == "Static00") {
        			this.Static00.move(e.clientx+5, e.clienty-5);
        		}
            }
        };

        this.dxGridSub2_ondrop = function(obj,e)
        {
        	trace("dxGridSub2_ondrop");
        	this.dxGridSub2.set_selecttype("multiarea");
        	this.IsDrag = false;
        	if( this.Static00.visible == true )
        	{
        		this.Static00.set_visible(false);
        		if(e.row < 0) return false;
        		var dragRow = this.Static00.tooltiptext;
        		var objDs = obj.getBindDataset();
        		var oldRow = dragRow;
        		var newRow = e.row;
        		var minRow = 0;
        		if (dragRow > e.row) {
        			minRow = newRow;
        		} else {
        			minRow = oldRow;
        		}
        		var no_view = nexacro.toNumber(obj.getCellValue(minRow, obj.getBindCellIndex("body", "SN_ORDER")));

        		objDs.moveRow(oldRow, newRow);
        		for(var i = minRow; i < obj.rowcount; i++) {
        			objDs.setColumn(i, "SN_ORDER", no_view++);
        		}
        	}
        };

        this.form_ondrop = function(obj,e)
        {
        	this.IsDrag = false;
        	this.Static00.set_visible(false);
        };

        this.form_ondragmove = function(obj,e)
        {
        	trace("form_ondragmove");
        	this.DragTextMove(obj, e);
        };

        this.divData_divDataRight_edtDS_NAME_onkeyup = function(obj,e)
        {
        	// 엔터클릭시 조회한다
        	if (e.keycode == 13) {
        		this.fnSelectSub();
        	}
        };

        // 사용자목록 그리드 더블클릭하면 결재선에 추가
        this.divData_divDataRight_objGridSub_oncelldblclick = function(obj,e)
        {
        	this.divData_divDataRight_btnAdd_onclick();
        };

        // 전결규정 스테틱 클릭시 이벤트
        this.divData_divDataRight_btnTxt_onclick = function(obj,e)
        {
        	var param = {};
        	param.TXT_DESC = this.dsLine.getColumn(0, "DS_LINE");

        	this.gfnFormOpenNonAuth("DZR", "DZR_AP_REQUEST_TXT", "", param, 400, 210);
        };

        /*
        // 전결규정 스테틱 클릭시 이벤트
        this.divData_divDataRight_staTxt_onclick = function(obj:nexacro.Static,e:nexacro.ClickEventInfo)
        {
        	var param = {};
        	param.TXT_DESC = this.dsLine.getColumn(0, "DS_LINE");

        	this.gfnFormOpenNonAuth("DZR", "DZR_AP_REQUEST_TXT", "", param, 400, 210);
        };

        // 전결규정 스테틱에 마우스 커서 들어가면 색상 변환
        this.divData_divDataRight_staTxt_onmouseenter = function(obj:nexacro.Static,e:nexacro.MouseEventInfo)
        {
        	this.divData.form.divDataRight.form.staTxt.set_color("tomato");
        };

        // 전결규정 스테틱에 마우스 커서 빠져나오면 색상 변환
        this.divData_divDataRight_staTxt_onmouseleave = function(obj:nexacro.Static,e:nexacro.MouseEventInfo)
        {
        	this.divData.form.divDataRight.form.staTxt.set_color("blue");
        };
        */

        // 의견란 확대
        this.divData_divDataRight_btnBig_onclick = function(obj,e)
        {
        	this.divData.form.divDataRight.form.txtDS_NOTE_BIG.set_visible(true);
        	this.divData.form.divDataRight.form.btnSmall.set_visible(true);
        };

        // 의견란 축소
        this.divData_divDataRight_btnSmall_onclick = function(obj,e)
        {
        	this.divData.form.divDataRight.form.txtDS_NOTE_BIG.set_visible(false);
        	this.divData.form.divDataRight.form.btnSmall.set_visible(false);
        };

        // 의견 미리보기
        this.divData_divDataRight_btnPreview_onclick = function(obj,e)
        {
        	var param = {};
        	param.DS_NOTE = this.dsParamSave.getColumn(0, "DS_NOTE");

        	this.gfnFormOpenNonAuth("DZR", "DZR_AP_VIEW", "fnDetailCallback", param, 1150, 590);
        };

        this.fnDetailCallback = function(strId, val) {
        	if(val == true){
        		this.dsParamSave.setColumn(0, "DS_NOTE", this.popupVal);
        	}
        };

        this.divData_divDataRight_txtDS_NOTE_oneditclick = function(obj,e)
        {
        	this.divData_divDataRight_btnPreview_onclick();
        };

        this.divData_divDataRight_txtDS_NOTE_BIG_oneditclick = function(obj,e)
        {
        	this.divData_divDataRight_btnPreview_onclick();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ondragmove",this.form_ondragmove,this);
            this.addEventHandler("ondrop",this.form_ondrop,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataRight.form.btnAdd.addEventHandler("onclick",this.divData_divDataRight_btnAdd_onclick,this);
            this.divData.form.divDataRight.form.edtDS_NAME.addEventHandler("onkeyup",this.divData_divDataRight_edtDS_NAME_onkeyup,this);
            this.divData.form.divDataRight.form.objGridSub.addEventHandler("oncelldblclick",this.divData_divDataRight_objGridSub_oncelldblclick,this);
            this.divData.form.divDataRight.form.btnDel.addEventHandler("onclick",this.divData_divDataRight_btnDel_onclick,this);
            this.divData.form.divDataRight.form.btnSch.addEventHandler("onclick",this.divData_divDataRight_btnSch_onclick,this);
            this.divData.form.divDataRight.form.txtDS_NOTE.addEventHandler("oneditclick",this.divData_divDataRight_txtDS_NOTE_oneditclick,this);
            this.divData.form.divDataRight.form.btnTxt.addEventHandler("onclick",this.divData_divDataRight_btnTxt_onclick,this);
            this.divData.form.divDataRight.form.btnBig.addEventHandler("onclick",this.divData_divDataRight_btnBig_onclick,this);
            this.divData.form.divDataRight.form.btnPreview.addEventHandler("onclick",this.divData_divDataRight_btnPreview_onclick,this);
            this.divData.form.divDataRight.form.txtDS_NOTE_BIG.addEventHandler("oneditclick",this.divData_divDataRight_txtDS_NOTE_BIG_oneditclick,this);
            this.divData.form.divDataRight.form.btnSmall.addEventHandler("onclick",this.divData_divDataRight_btnSmall_onclick,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DZR_AP_REQUEST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
