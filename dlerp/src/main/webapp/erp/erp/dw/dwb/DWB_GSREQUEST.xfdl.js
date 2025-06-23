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
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWBPR_GSREQUEST_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWBPR_GSREQUEST_SAVE</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DWBPR_GSREQUEST_SAVE</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DWBPR_GSREQUEST_HD_SELECT</Col></Row><Row><Col id=\"TARGET\">d_save</Col><Col id=\"SP\">DWBPR_GSREQUEST_HD_SAVE</Col></Row><Row><Col id=\"TARGET\">d_exec</Col><Col id=\"SP\">DWBPR_GSREQUEST_HD_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"YN_MAGAM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","0.0","10.0","131.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("작업년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.getSetter("dateformat").set("yyyy-mm");
            obj.getSetter("editformat").set("yyyymm");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ctclYM_WORK:0.0","10.0","131.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","sta00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK00",null,"10.0","131.0","24.0","4",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("(단위: 원)");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","21%","100.00%","5",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter:5",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","26",null,null,"0","4",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnSlip","94.22%","0",null,"20","6",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("4");
            obj.set_text("전표조회");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnDel","88.28%","0",null,"20","btnSlip:5",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnAdd","82.42%","0",null,"20","btnDel:6",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("2");
            obj.set_text("추가");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnCreate","77.03%","0",null,"20","btnAdd:5",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("1");
            obj.set_text("자료생성");
            this.divData.form.divDataBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
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
        this.registerScript("DWB_GSREQUEST.xfdl", function() {
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

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().DS_SITE)) {
        		if(!this.gfnIsNull(this.getOwnerFrame().YM_WORK))
        		{
        			this.dsSearch.setColumn(0, "YM_WORK", this.getOwnerFrame().YM_WORK);
        		}
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		this.FormBtns.Select.click();
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Select.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnMCreate = this.gfnFormButtonAdd("btnMCreate", "fnMCreate");
        	this.btnMEnd = this.gfnFormButtonAdd("btnMEnd", "fnMEnd");
        	this.btnMCancel = this.gfnFormButtonAdd("btnMCancel", "fnMCancel");
        	this.btnAttachFile = this.gfnFormButtonAdd("btnAttachFile", "fnAttachFile");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.dxGrid = this.divData.form.divDataTop.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataBottom.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWB_GSREQUEST");

        	// 셀 수정가능 여부
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        	//this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	// 셀 변경 후 이벤트
        	//this.dxGrid.AfterEdit = "fnGrid_AfterEdit";

        	// 그리드 코드파인드 설정
        	this.dxGridSub.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGridSub.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        	// 전체체크박스 체크/해제 이벤트
        	//this.dxGrid.AfterAllCheck = "fnGrid_AfterAllCheck";

        	// BUTTON, BUTTON-IN 처리
        	//this.dxGrid.ExpandUp = "fnGrid_ExpandUp";

        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DW", "DWB_GSREQUEST_HD");

        	// 셀 수정가능 여부
        	this.dxGridSub.EnterCell = "fnGridSub_EnterCell";
        	//this.dxGridSub.set_selecttype("cell");
        	this.dxGridSub.addEventHandler("onselectchanged", this.fnGridSub_RowCellChanged, this);

        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "YM_WORK", today.substring(0, 6));

        	this.divData.form.divDataBottom.form.btnCreate.set_enable(false);
        	this.divData.form.divDataBottom.form.btnAdd.set_enable(false);
        	this.divData.form.divDataBottom.form.btnDel.set_enable(false);
        	this.divData.form.divDataBottom.form.btnSlip.set_enable(false);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// 조회 Master
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");
        	this.dsSelect.addColumn("AUTH_CD_CORP", "string");

        	// 조회 Detail
        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("TY_WRK", "string");
        	this.dsSelectSub.addColumn("CD_SITE", "string");
        	this.dsSelectSub.addColumn("YM_WORK", "string");
        	this.dsSelectSub.addColumn("AUTH_CD_CORP", "string");

        	// 저장 Master
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("YM_WORK", "string");
        	this.dsSave.addColumn("YM_WORK_REQ", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("AM_GISUNG_PROV", "bigdecimal");
        	this.dsSave.addColumn("AM_GISUNG_VAT", "bigdecimal");
        	this.dsSave.addColumn("AM_GISUNG_TXFR", "bigdecimal");
        	this.dsSave.addColumn("AM_GISUNG_TOT", "bigdecimal");
        	this.dsSave.addColumn("AM_PREPAY_PROV", "bigdecimal");
        	this.dsSave.addColumn("AM_GONGJAE1", "bigdecimal");
        	this.dsSave.addColumn("DS_COLLECT", "string");
        	this.dsSave.addColumn("TY_INPUT", "string");
        	this.dsSave.addColumn("RM_BIGO", "string");

        	// 저장 Detail
        	this.dsSaveSub = new Dataset();
        	this.dsSaveSub.addColumn("TY_WRK", "string");
        	this.dsSaveSub.addColumn("ID_USER", "string");
        	this.dsSaveSub.addColumn("CD_SITE", "string");
        	this.dsSaveSub.addColumn("NO_HADOCONT", "string");
        	this.dsSaveSub.addColumn("YM_WORK", "string");
        	this.dsSaveSub.addColumn("YM_WORK_REQ", "string");
        	this.dsSaveSub.addColumn("YM_WORK_HD", "string");
        	this.dsSaveSub.addColumn("NO_DGR_HD", "string");
        	this.dsSaveSub.addColumn("CD_VENDOR", "string");
        	this.dsSaveSub.addColumn("DS_COLLECT", "string");
        	this.dsSaveSub.addColumn("RM_BIGO", "string");
        	this.dsSaveSub.addColumn("TY_INPUT", "string");
        	this.dsSaveSub.addColumn("NO_SLIP", "string");
        	this.dsSaveSub.addColumn("AM_GISUNG_PROV", "bigdecimal");
        	this.dsSaveSub.addColumn("AM_GISUNG_VAT", "bigdecimal");
        	this.dsSaveSub.addColumn("AM_GISUNG_TXFR", "bigdecimal");
        	this.dsSaveSub.addColumn("AM_GISUNG_TOT", "bigdecimal");
        	this.dsSaveSub.addColumn("AM_PREPAY_PROV", "bigdecimal");
        	this.dsSaveSub.addColumn("AM_GONGJAE1", "bigdecimal");
        	this.dsSaveSub.addColumn("TY_GUBUN", "string");
        	this.dsSaveSub.addColumn("DS_HADOCONT", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("TY_WRK", "string");
        	this.dsExec.addColumn("ID_USER", "string");
        	this.dsExec.addColumn("CD_SITE", "string");
        	this.dsExec.addColumn("YM_WORK", "string");

        	this.dsExecSub = new Dataset();
        	this.dsExecSub.addColumn("TY_WRK", "string");
        	this.dsExecSub.addColumn("ID_USER", "string");
        	this.dsExecSub.addColumn("CD_SITE", "string");
        	this.dsExecSub.addColumn("YM_WORK", "string");
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

        	this.dsSelect.setColumn(0, "TY_WRK", "Q");
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsSelect.setColumn(0, "AUTH_CD_CORP", this.AuthClient.CD_CORP);

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
        						callBackFnc); // 통신방법 정의 [생략가능]


        	this.fnDetail();
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
        	this.gfnGridDel(this.dxGrid);
        	// this.gfnGridDel(this.dxGridSub);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) reurn;

        	this.dxGrid.updateToDataset();

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        				this.dsSave.setColumn(nrow, "YM_WORK_REQ", this.dsList.getColumn(i, "YM_WORK_REQ"));
        				this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsSave.setColumn(nrow, "AM_GISUNG_PROV", this.dsList.getColumn(i, "AM_GISUNG_PROV"));
        				this.dsSave.setColumn(nrow, "AM_GISUNG_VAT", this.dsList.getColumn(i, "AM_GISUNG_VAT"));
        				this.dsSave.setColumn(nrow, "AM_GISUNG_TXFR", this.dsList.getColumn(i, "AM_GISUNG_TXFR"));
        				this.dsSave.setColumn(nrow, "AM_GISUNG_TOT", this.dsList.getColumn(i, "AM_GISUNG_TOT"));
        				this.dsSave.setColumn(nrow, "AM_PREPAY_PROV", this.dsList.getColumn(i, "AM_PREPAY_PROV"));
        				this.dsSave.setColumn(nrow, "AM_GONGJAE1", this.dsList.getColumn(i, "AM_GONGJAE1"));
        				this.dsSave.setColumn(nrow, "DS_COLLECT", this.dsList.getColumn(i, "DS_COLLECT"));
        				this.dsSave.setColumn(nrow, "TY_INPUT", this.dsList.getColumn(i, "TY_INPUT"));
        				this.dsSave.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				break;
        		}
        	}
        	/*
        	if (this.dsSave.rowcount == 0) {
        		this.fnSaveSub();
        		//return;
        	}
        	else
        	{
        	*/

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
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        	//}
        }

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
        				this.dsSaveSub.setColumn(nrow, "TY_WRK", flag);
        				this.dsSaveSub.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        				this.dsSaveSub.setColumn(nrow, "CD_SITE", this.dsListSub.getColumn(i, "CD_SITE"));
        				this.dsSaveSub.setColumn(nrow, "NO_HADOCONT", this.dsListSub.getColumn(i, "NO_HADOCONT"));
        				this.dsSaveSub.setColumn(nrow, "YM_WORK", this.dsListSub.getColumn(i, "YM_WORK"));
        				this.dsSaveSub.setColumn(nrow, "YM_WORK_REQ", this.dsListSub.getColumn(i, "YM_WORK_REQ"));
        				this.dsSaveSub.setColumn(nrow, "YM_WORK_HD", this.dsListSub.getColumn(i, "YM_WORK_HD"));
        				this.dsSaveSub.setColumn(nrow, "NO_DGR_HD", this.dsListSub.getColumn(i, "NO_DGR_HD"));
        				this.dsSaveSub.setColumn(nrow, "CD_VENDOR", this.dsListSub.getColumn(i, "CD_VENDOR"));

        				this.dsSaveSub.setColumn(nrow, "DS_COLLECT", this.dsListSub.getColumn(i, "DS_COLLECT"));
        				this.dsSaveSub.setColumn(nrow, "RM_BIGO", this.dsListSub.getColumn(i, "RM_BIGO"));
        				this.dsSaveSub.setColumn(nrow, "TY_INPUT", this.dsListSub.getColumn(i, "TY_INPUT"));

        /*				if (this.dsListSub.getColumn(i, "TY_INPUT") == "Y") {
        					this.dsSaveSub.setColumn(nrow, "NO_SLIP", "미발행(" + this.dsListSub.getColumn(i, "NO_SLIP") +")");
        				}
        				else {*/
        					this.dsSaveSub.setColumn(nrow, "NO_SLIP", this.dsListSub.getColumn(i, "NO_SLIP"));

        				this.dsSaveSub.setColumn(nrow, "AM_GISUNG_PROV", this.dsListSub.getColumn(i, "AM_GISUNG_PROV"));
        				this.dsSaveSub.setColumn(nrow, "AM_GISUNG_VAT", this.dsListSub.getColumn(i, "AM_GISUNG_VAT"));
        				this.dsSaveSub.setColumn(nrow, "AM_GISUNG_TXFR", this.dsListSub.getColumn(i, "AM_GISUNG_TXFR"));
        				this.dsSaveSub.setColumn(nrow, "AM_GISUNG_TOT", this.dsListSub.getColumn(i, "AM_GISUNG_TOT"));
        				this.dsSaveSub.setColumn(nrow, "AM_PREPAY_PROV", this.dsListSub.getColumn(i, "AM_PREPAY_PROV"));
        				this.dsSaveSub.setColumn(nrow, "AM_GONGJAE1", this.dsListSub.getColumn(i, "AM_GONGJAE1"));
        				this.dsSaveSub.setColumn(nrow, "TY_GUBUN", this.dsListSub.getColumn(i, "TY_GUBUN"));
        				this.dsSaveSub.setColumn(nrow, "DS_HADOCONT", this.dsListSub.getColumn(i, "DS_HADOCONT"));

        				break;
        		}
        	}

        	if (this.dsSaveSub.rowcount == 0)
        	{
        		this.FormBtns.Select.click();
        		return;
        	}

        	var strSvcId    = "saveSub";
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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        this.fnDetail = function()
        {
        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();

        	this.dsSelectSub.setColumn(0, "TY_WRK", "Q");
        	this.dsSelectSub.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelectSub.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsSelectSub.setColumn(0, "AUTH_CD_CORP", this.AuthClient.CD_CORP);

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



        /*
         *	마감 or 마감취소 처리
         */
        this.fnMCreate = function() {
        	this.gfnConfirm("자료생성시 기존데이터가 삭제됩니다. 계속 하시겠습니까?", "fnExec", "CRE");
        }

        this.fnMEnd = function() {
        	this.gfnConfirm("마감 하시겠습니까?", "fnExec", "END");
        }

        this.fnMCancel = function() {
        	this.gfnConfirm("마감취소 하시겠습니까?", "fnExec", "CAN");
        }

        this.fnExec = function(strID, val) {
        	if(val == true) {
        		this.dsExec.clearData();

        		this.dsExec.addRow();

        		this.dsExec.setColumn(0, "TY_WRK", strID);
        		this.dsExec.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        		this.dsExec.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsExec.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));

        		if (this.dsExec.rowcount == 0) return;

        		var strSvcId    = strID;
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "exec=dsExec";
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
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"YM_WORK"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctclYM_WORK.setFocus();
        		}
        		this.gfnAlert("작업년월은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        		return;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        		return;
        	}

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
        		//if(this.dsList.rowposition < 0) this.dsList.set_rowposition(0);
        		this.fnBtnCheckAll();
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.fnSaveSub();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "saveSub") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "CRE") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "END") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "CAN") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "RiskCre") {
         		if (errorCode == 0) {
         			this.gfnAlert("생성이 정상처리되었습니다.");
         			this.FormBtns.Select.click();
         		} else {
         			this.gfnAlert(errorMsg);
         		}
         	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam=function(id, dsUserParam, nrow){
          if(id == "DWX_CFHADO_01")
        	{
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));	// 현장코드
        		//dsUserParam.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));	// 기성년월
        		dsUserParam.setColumn(nrow, "TY_DIV", "ALL");
        	}
        	return true;
        };

        this.fnGrid_AfterCDTextChanged=function(id, codeFindData, nrow){
        	if(id == "DWX_CFHADO_01"){
        		var arr = codeFindData;
        		var cdVendor = "";
        		var dsVendor = "";
        		if(arr.length > 0){
        			cdVendor = arr[0]["CD_VENDOR"];
        			dsVendor = arr[0]["DS_VENDOR"];
        		}
        		this.dsListSub.setColumn(this.dsListSub.rowposition, "CD_VENDOR", cdVendor);
        		this.dsListSub.setColumn(this.dsListSub.rowposition, "DS_VENDOR", dsVendor);
        	}
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	switch(id) {
        		case "ccfCD_DEPT":	//법인코드
        			var sYnBudget = "N";
        			var sGrDeptAcnt = "";
        			if(arr.length > 0) {
        				sYnBudget = arr[0]["YN_BUDGET"];
        				sGrDeptAcnt = arr[0]["GR_DEPT_ACNT"];
        			}

        			this.dsSearch.setColumn(0, "YN_BUDGET", sYnBudget);
        			this.dsSearch.setColumn(0, "GR_DEPT_ACNT", sGrDeptAcnt);

        			var nWidth = (sYnBudget == "Y") ? 80 : 0 ;
        			var sTextDecoration = (sYnBudget == "Y") ? "underline" : "";
        			this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body","CD_SEMOK"),"size",nWidth);
        			this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body","DS_SEMOK"),"size",nWidth);
        			this.dxGrid.setCellProperty("head", this.gfnGetHeadRowCellIndex(this.dxGrid, 1, "CD_SEMOK"), "textDecoration", sTextDecoration);

        		break;
        	}
        }

        // cell 클릭했을때 이벤트(해당 cell에 대한 이벤트를 건다)
        this.fnGrid_EnterCell = function(obj, row, cell) {
        	// 수정가능 true, false 처리하려는 컬럼에 대해서만 return 처리할것.
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);	// 클릭한 cell의 컬럼명

        	// 클릭했을때 클릭한 cell을 수정 가능 or 불가능 상태로 만든다.
        	// YN_MAGAM 값이 N일때만 수정가능상태
        	if(this.dsList.getColumn(row, "YN_MAGAM") == "Y") {
        		return false;
        	}
        	/*
        	else{
        		// YN_DTLS 값이 Y일때만 도급/실행/집행금액 수정가능 상태로 만든다
        		if(colnm == "AM_GISUNG_PROV" || colnm == "AM_PREPAY_PROV" || colnm == "AM_GISUNG_VAT" || colnm == "AM_GONGJAE1"){		//|| colnm == "AM_GISUNG_TXFR"
        			if(this.dsList.getColumn(row, "YN_DTLS") == "N") {
        				return false;
        			}else{
        				return true;
        			}
        		}
        	}
        	*/
        }

        this.fnGridSub_EnterCell = function(obj, row, cell) {
        	// 수정가능 true, false 처리하려는 컬럼에 대해서만 return 처리할것.
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGridSub, cell);	// 클릭한 cell의 컬럼명

        	if(this.dsListSub.getColumn(row,"TY_INPUT") == "Y"){
        		this.divData.form.divDataBottom.form.btnSlip.set_enable(false);
        	}
        	else {
        		this.divData.form.divDataBottom.form.btnSlip.set_enable(true);
        	}

        	// 클릭했을때 클릭한 cell을 수정 가능 or 불가능 상태로 만든다.
        	// YN_MAGAM 값이 N일때만 수정가능상태
        	if(this.dsList.getColumn(0, "YN_MAGAM") == "Y") {
        		return false;
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if (!this.gfnGridIsRow(this.dxGrid)) return;

        	//this.fnDetail();
        };

        this.fnGridSub_RowCellChanged = function(obj,e)
        {
            if (!this.gfnGridIsRow(this.dxGridSub)) return;

        	//this.fnDetail();
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         /*
         // 첨부파일 버튼
         this.fnAttachFile = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if (!this.fnGrid_FlagCheck()) { this.gfnAlert("저장 후 사용 가능합니다."); return false; }

        	var fileManager = {};
        	fileManager.CD_GUBUN = "DWR1";
        	fileManager.CD_DIR = [this.dsSearch.getColumn(0,"CD_SITE"), this.dsList.getColumn(this.dsList.rowposition, "NO_RISK")];
        	//fileManager.IS_READONLY = true;

        	if(this.dsList.getColumn(this.dsList.rowposition, "BTN_ATTACHFILE_AUTH") == "R") {
        			fileManager.IS_READONLY = true;
        	} else {
        			fileManager.IS_READONLY = false;
        	}

        	this.gfnFileManager(fileManager, "fnFileCallback");
        };
        */

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        	}
        };

        this.fnGrid_FlagCheck = function()
        {
        	var flag = this.gfnGetFlag(this.dsList, this.dsList.rowposition);

        	if(flag == "I")
        		return false;

        	return true;
        }

        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_top(e.clienty);
        		this.divData.form.resetScroll();
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };

        this.fnBtnCheckAll = function()
        {
        	this.gfnBtnCheck(this.btnMCreate, this.dsList);
        	this.gfnBtnCheck(this.btnMEnd, this.dsList);
        	this.gfnBtnCheck(this.btnMCancel, this.dsList);

        	// 하위버튼 상태
        	if (this.dsList.getColumn(0, "YN_MAGAM") == "Y") {
        		this.divData.form.divDataBottom.form.btnCreate.set_enable(false);
        		this.divData.form.divDataBottom.form.btnAdd.set_enable(false);
        		this.divData.form.divDataBottom.form.btnDel.set_enable(false);
        	}
        	else {
        		this.divData.form.divDataBottom.form.btnCreate.set_enable(true);
        		this.divData.form.divDataBottom.form.btnAdd.set_enable(true);
        		this.divData.form.divDataBottom.form.btnDel.set_enable(true);
        	}
        }

        this.dsList_oncolumnchanged = function(obj,e)
        {
           if(e.oldvalue != e.newvalue){
              this.fnCalcRow(e.columnid, e.row);
           }
        };

        this.fnCalcRow = function(colnm, row) {
        	if(colnm == "AM_GISUNG_PROV" || colnm == "AM_PREPAY_PROV" || colnm == "AM_GISUNG_VAT" || colnm == "AM_GONGJAE1"){	// || colnm == "AM_GISUNG_TXFR"
        		this.dsList.set_enableevent(false);

        		var AM_GISUNG_PROV = this.gfnIsNull(this.dsList.getColumn(row, "AM_GISUNG_PROV")) ? 0 : Number(this.dsList.getColumn(row, "AM_GISUNG_PROV"));
        		var AM_PREPAY_PROV = this.gfnIsNull(this.dsList.getColumn(row, "AM_PREPAY_PROV")) ? 0 : Number(this.dsList.getColumn(row, "AM_PREPAY_PROV"));
        		var AM_GISUNG_VAT = this.gfnIsNull(this.dsList.getColumn(row, "AM_GISUNG_VAT")) ? 0 : Number(this.dsList.getColumn(row, "AM_GISUNG_VAT"));
        		var AM_GISUNG_TXFR = this.gfnIsNull(this.dsList.getColumn(row, "AM_GISUNG_TXFR")) ? 0 : Number(this.dsList.getColumn(row, "AM_GISUNG_TXFR"));
        		var AM_GONGJAE1 = this.gfnIsNull(this.dsList.getColumn(row, "AM_GONGJAE1")) ? 0 : Number(this.dsList.getColumn(row, "AM_GONGJAE1"));

        		// 공급가액 - 선금공제 + 부가세 = 계산서금액
        		var AM_GISUNG = AM_GISUNG_PROV - AM_PREPAY_PROV + AM_GISUNG_VAT;
        		this.dsList.setColumn(row, "AM_GISUNG_TXFR", AM_GISUNG);

        		// 계산서금액 - 기타공제 = 청구금액
        		var AM_GISUNG_TOT = AM_GISUNG - AM_GONGJAE1;
        		this.dsList.setColumn(row, "AM_GISUNG_TOT", AM_GISUNG_TOT );

        		this.dsList.set_enableevent(true);
        	}
        }

        this.dsListSub_oncolumnchanged = function(obj,e)
        {
           if(e.oldvalue != e.newvalue){
              this.fnCalcRowSub(e.columnid, e.row);
           }
        };

        this.fnCalcRowSub = function(colnm, row) {
        	if(colnm == "AM_GISUNG_PROV" || colnm == "AM_PREPAY_PROV" || colnm == "AM_GISUNG_VAT" || colnm == "AM_GONGJAE1") {	// || colnm == "AM_GISUNG_TXFR"

        		this.dsListSub.set_enableevent(false);

        		var AM_GISUNG_PROV = this.gfnIsNull(this.dsListSub.getColumn(row, "AM_GISUNG_PROV")) ? 0 : Number(this.dsListSub.getColumn(row, "AM_GISUNG_PROV"));
        		var AM_PREPAY_PROV = this.gfnIsNull(this.dsListSub.getColumn(row, "AM_PREPAY_PROV")) ? 0 : Number(this.dsListSub.getColumn(row, "AM_PREPAY_PROV"));
        		var AM_GISUNG_VAT = this.gfnIsNull(this.dsListSub.getColumn(row, "AM_GISUNG_VAT")) ? 0 : Number(this.dsListSub.getColumn(row, "AM_GISUNG_VAT"));
        		var AM_GISUNG_TXFR = this.gfnIsNull(this.dsListSub.getColumn(row, "AM_GISUNG_TXFR")) ? 0 : Number(this.dsListSub.getColumn(row, "AM_GISUNG_TXFR"));
        		var AM_GONGJAE1 = this.gfnIsNull(this.dsListSub.getColumn(row, "AM_GONGJAE1")) ? 0 : Number(this.dsListSub.getColumn(row, "AM_GONGJAE1"));

        		// 공급가액 - 선금공제 + 부가세 = 계산서금액
        		var AM_GISUNG = AM_GISUNG_PROV - AM_PREPAY_PROV + AM_GISUNG_VAT;
        		this.dsListSub.setColumn(row, "AM_GISUNG_TXFR", AM_GISUNG);

        		// 계산서금액 - 기타공제 = 청구금액
        		var AM_GISUNG_TOT = AM_GISUNG - AM_GONGJAE1;
        		this.dsListSub.setColumn(row, "AM_GISUNG_TOT", AM_GISUNG_TOT);

        		this.dsListSub.set_enableevent(true);
        	}
        }

        /************************************************************************
         * Detail 버튼 이벤트
         ************************************************************************/
        this.divData_btnCreate_onclick = function(obj,e)
        {
        	this.gfnConfirm("자료생성시 기존데이터가 삭제됩니다. 계속 하시겠습니까?", "fnExecSub", "CRE");
        };

        this.fnExecSub = function(strID, val) {
        	if(val == true) {
        		this.dsExecSub.clearData();

        		this.dsExecSub.addRow();

        		this.dsExecSub.setColumn(0, "TY_WRK", strID);
        		this.dsExecSub.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        		this.dsExecSub.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsExecSub.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));

        		if (this.dsExecSub.rowcount == 0) return;

        		var strSvcId    = strID;
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "d_exec=dsExecSub";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); 	// 통신방법 정의 [생략가능]
        	}
        }

        this.divData_btnAdd_onclick = function(obj,e)
        {
        	var nrow = this.gfnGridAdd(this.dxGridSub);

        	this.dsListSub.setColumn(nrow,"CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsListSub.setColumn(nrow,"YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	//this.dsListSub.setColumn(nrow,"DS_CONTMETHOD", "10");
        	//this.dsListSub.setColumn(nrow,"TY_GUBUN", "10");
        	this.dsListSub.setColumn(nrow,"NO_DGR_HD", "01");
        	this.dsListSub.setColumn(nrow,"TY_INPUT", "Y");
        };

        this.divData_btnDel_onclick = function(obj,e)
        {
        	this.gfnGridDel(this.dxGridSub);
        };

        this.divData_btnSlip_onclick = function(obj,e)
        {
        	if (!this.gfnGridIsRow(this.dxGridSub)) {
        		this.gfnAlert("전표조회할 데이터를 선택하세요.");
        		return false;
        	}

        	if (this.dsListSub.getColumn(this.dsListSub.rowposition,"TY_INPUT") == "Y"){
        		return false;
        	}

        	var param = {};
        	var no_slip = this.dsListSub.getColumn(this.dsListSub.rowposition, "NO_SLIP");

        	param.CD_TRADE = no_slip;

        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGridSub, this.dxGridSub.getCellPos());

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataBottom.form.btnSlip.addEventHandler("onclick",this.divData_btnSlip_onclick,this);
            this.divData.form.divDataBottom.form.btnDel.addEventHandler("onclick",this.divData_btnDel_onclick,this);
            this.divData.form.divDataBottom.form.btnAdd.addEventHandler("onclick",this.divData_btnAdd_onclick,this);
            this.divData.form.divDataBottom.form.btnCreate.addEventHandler("onclick",this.divData_btnCreate_onclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsListSub.addEventHandler("oncolumnchanged",this.dsListSub_oncolumnchanged,this);
        };
        this.loadIncludeScript("DWB_GSREQUEST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
