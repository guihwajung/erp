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
            this.set_titletext("스포츠공동운영안분");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_BUIDING_DIV_JOIN_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHAPR_BUIDING_DIV_JOIN_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHAPR_BUIDING_DIV_JOIN_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHAPR_BUIDING_DIV_JOIN_DELETE</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DHAPR_BUIDING_DIV_JOIN_SHARE_SELECT</Col></Row><Row><Col id=\"TARGET\">d_insert</Col><Col id=\"SP\">DHAPR_BUIDING_DIV_JOIN_SHARE_INSERT</Col></Row><Row><Col id=\"TARGET\">d_update</Col><Col id=\"SP\">DHAPR_BUIDING_DIV_JOIN_SHARE_UPDATE</Col></Row><Row><Col id=\"TARGET\">d_delete</Col><Col id=\"SP\">DHAPR_BUIDING_DIV_JOIN_SHARE_DELETE</Col></Row><Row><Col id=\"TARGET\">selectA</Col><Col id=\"SP\">DHAPR_BUIDING_JOIN_SITE_SELECT</Col></Row><Row><Col id=\"TARGET\">insertA</Col><Col id=\"SP\">DHAPR_BUIDING_JOIN_SITE_INSERT</Col></Row><Row><Col id=\"TARGET\">updateA</Col><Col id=\"SP\">DHAPR_BUIDING_JOIN_SITE_UPDATE</Col></Row><Row><Col id=\"TARGET\">deleteA</Col><Col id=\"SP\">DHAPR_BUIDING_JOIN_SITE_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"CD_DEPT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListA", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","sta00:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ccfCD_DEPT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","sta01:0.0","10.0","249","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","41.48%","0","5","100.00%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_Splitter");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_text("현장");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Div("div01","0","0",null,"300","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("2");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","100.00%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.div01.form);
            obj.set_taborder("0");
            obj.set_text("관계사");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.form.div01.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","sta02:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form.div01.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataRight.form.div01.addChild(obj.name, obj);

            obj = new Div("div02","0","div01:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("1");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("divBtn","0","0",null,"35","0",null,null,null,null,null,this.divData.form.divDataRight.form.div02.form);
            obj.set_taborder("2");
            this.divData.form.divDataRight.form.div02.addChild(obj.name, obj);

            obj = new Button("btnFind","0","5","30","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.div02.form.divBtn.form);
            obj.set_taborder("0");
            this.divData.form.divDataRight.form.div02.form.divBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd","btnFind:0","5","30","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.div02.form.divBtn.form);
            obj.set_taborder("1");
            this.divData.form.divDataRight.form.div02.form.divBtn.addChild(obj.name, obj);

            obj = new Button("btnSave","btnAdd:0","5","30","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.div02.form.divBtn.form);
            obj.set_taborder("2");
            this.divData.form.divDataRight.form.div02.form.divBtn.addChild(obj.name, obj);

            obj = new Button("btnDel","btnSave:0","5","30","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.div02.form.divBtn.form);
            obj.set_taborder("3");
            this.divData.form.divDataRight.form.div02.form.divBtn.addChild(obj.name, obj);

            obj = new Button("btnExcel","btnDel:0","5","30","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.div02.form.divBtn.form);
            obj.set_taborder("4");
            this.divData.form.divDataRight.form.div02.form.divBtn.addChild(obj.name, obj);

            obj = new Button("btnReset","btnExcel:0","5","30","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.div02.form.divBtn.form);
            obj.set_taborder("5");
            this.divData.form.divDataRight.form.div02.form.divBtn.addChild(obj.name, obj);

            obj = new Static("sta02","0","divBtn:5","100.00%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.div02.form);
            obj.set_taborder("0");
            obj.set_text("원가부서");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.form.div02.addChild(obj.name, obj);

            obj = new Grid("grdA","0","sta02:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form.div02.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataRight.form.div02.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHA_BUIDING_DIV.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	//this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	//법인코드 세션에 코드로 셋팅
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);

        	this.btnFind.set_enable(false);
        	this.btnAdd.set_enable(false);
        	this.btnSave.set_enable(false);
        	this.btnDel.set_enable(false);
        	this.btnExcel.set_enable(false);
        	this.btnReset.set_enable(false);
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	// 서브 버튼 사용
        	this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter); // divSplitter sync

        	//this.FormBtns.SubSelect.set_visible(false);

        	this.FormBtns.SubSelect.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataRight.form.div01.form.objGridSub;
        	this.dxGridA = this.divData.form.divDataRight.form.div02.form.grdA;

        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;

        	this.btnFind = this.divData.form.divDataRight.form.div02.form.divBtn.form.btnFind;
        	this.btnAdd = this.divData.form.divDataRight.form.div02.form.divBtn.form.btnAdd;
        	this.btnSave = this.divData.form.divDataRight.form.div02.form.divBtn.form.btnSave;
        	this.btnDel = this.divData.form.divDataRight.form.div02.form.divBtn.form.btnDel;
        	this.btnExcel = this.divData.form.divDataRight.form.div02.form.divBtn.form.btnExcel;
        	this.btnReset = this.divData.form.divDataRight.form.div02.form.divBtn.form.btnReset;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_DEPT.CodeFindName = "DHX_BUIDING_JOIN";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHA_BUIDING_DIV_JOIN");
        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);
        	// 그리드 코드파인드 설정
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DH", "DHA_BUIDING_DIV_JOIN_SHARE");
        	this.dxGridSub.BeforeUserDataSetParam = "fnGridSub_BeforeUserDataSetParam";

        	this.dsListSub.addEventHandler("oncolumnchanged", this.dsListSub_columnchanged, this);

        	this.dsListA.addEventHandler("oncolumnchanged", this.dsListA_columnchanged, this);

        	this.gfnGridInit(this.dxGridA, this.dsListA, "DH", "DHA_BUIDING_DIV_JOIN_SHARE2");
        	this.dxGridA.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	//검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_Valuechanged, this);

        	//주관사여부 필터 체크박스 제거 처리
        	var colRT_OWNER = this.dxGridSub.getBindCellIndex("body", "RT_OWNER");
        	this.dxGridSub.setCellProperty("body", colRT_OWNER, "edittype"   , "expr:nx_flag == '#' ? 'none':'checkbox'");
        	this.dxGridSub.setCellProperty("body", colRT_OWNER, "displaytype", "expr:nx_flag == '#' ? 'none':'checkboxcontrol'");

        	this.btnFind.set_cssclass("btn_find");
        	this.btnAdd.set_cssclass("btn_add");
        	this.btnSave.set_cssclass("btn_save");
        	this.btnDel.set_cssclass("btn_del");
        	this.btnExcel.set_cssclass("btn_excel");
        	this.btnReset.set_cssclass("btn_reset");

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("CD_DEPT", "string");
        	this.dsInsert.addColumn("TY_GUBUN", "string");
        	this.dsInsert.addColumn("ID_USER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("CD_DEPT", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");

        	this.dsDelete = new Dataset();
        	//this.dsDelete.addColumn("CD_CORP", "string");
        	this.dsDelete.addColumn("CD_DEPT", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_DEPT", "string");

        	this.dsInsertSub = new Dataset();
        	this.dsInsertSub.addColumn("CD_DEPT", "string");
        	this.dsInsertSub.addColumn("CD_VENDOR", "string");
        	this.dsInsertSub.addColumn("RT_SHARE", "string");
        	this.dsInsertSub.addColumn("CD_VENDOR_DEPT", "string");
        	this.dsInsertSub.addColumn("RT_OWNER", "string");
        	this.dsInsertSub.addColumn("CD_DEPT_APT", "string");
        	this.dsInsertSub.addColumn("CD_DEPT_STORE", "string");
        	this.dsInsertSub.addColumn("ID_USER", "string");

        	this.dsUpdateSub = new Dataset();
        	this.dsUpdateSub.addColumn("CD_DEPT", "string");
        	this.dsUpdateSub.addColumn("CD_VENDOR", "string");
        	this.dsUpdateSub.addColumn("RT_SHARE", "string");
        	this.dsUpdateSub.addColumn("CD_VENDOR_DEPT", "string");
        	this.dsUpdateSub.addColumn("RT_OWNER", "string");
        	this.dsUpdateSub.addColumn("CD_DEPT_APT", "string");
        	this.dsUpdateSub.addColumn("CD_DEPT_STORE", "string");
        	this.dsUpdateSub.addColumn("ID_USER", "string");

        	this.dsDeleteSub = new Dataset();
        	this.dsDeleteSub.addColumn("CD_DEPT", "string");
        	this.dsDeleteSub.addColumn("CD_VENDOR", "string");

        	this.dsSelectA = new Dataset();
        	this.dsSelectA.addColumn("CD_CORP", "string");
        	this.dsSelectA.addColumn("CD_DEPT", "string");
        	this.dsSelectA.addColumn("SABUN", "string");

        	this.dsInsertA = new Dataset();
        	this.dsInsertA.addColumn("CD_CORP", "string");
        	this.dsInsertA.addColumn("CD_DEPT", "string");
        	this.dsInsertA.addColumn("CD_SITE", "string");
        	this.dsInsertA.addColumn("YN_MH", "string");
        	this.dsInsertA.addColumn("SABUN", "string");

        	this.dsUpdateA = new Dataset();
        	this.dsUpdateA.addColumn("CD_CORP", "string");
        	this.dsUpdateA.addColumn("CD_DEPT", "string");
        	this.dsUpdateA.addColumn("CD_SITE", "string");
        	this.dsUpdateA.addColumn("YN_MH", "string");
        	this.dsUpdateA.addColumn("SABUN", "string");

        	this.dsDeleteA = new Dataset();
        	this.dsDeleteA.addColumn("CD_CORP", "string");
        	this.dsDeleteA.addColumn("CD_DEPT", "string");
        	this.dsDeleteA.addColumn("CD_SITE", "string");
        	this.dsDeleteA.addColumn("SABUN", "string");

        	//검색조건 법인코드 포커스
        	this.ccfCD_CORP.form.CDTextBox.setFocus();

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
        	this.dsSelect.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "CD_DEPT", this.ccfCD_DEPT.form.CDTextBox.value);

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

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	this.gfnGridAdd(this.dxGrid);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	if(this.dsListSub.rowcount > 1){
        		this.gfnAlert("관계사 데이터를 먼저 삭제 하세요!");
        		return;
        	}

        	this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_CORP" , this.ccfCD_CORP.form.CDTextBox.value);
        				this.dsInsert.setColumn(nrow, "CD_DEPT" , this.dsList.getColumn(i, "CD_DEPT"));
        				this.dsInsert.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i, "TY_GUBUN"));
        				this.dsInsert.setColumn(nrow, "ID_USER" , this.AuthClient.ID_USER);
        				break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_CORP" , this.dsList.getColumn(i, "CD_CORP"));
        				this.dsUpdate.setColumn(nrow, "CD_DEPT" , this.dsList.getColumn(i, "CD_DEPT"));
        				this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i, "TY_GUBUN"));
        				this.dsUpdate.setColumn(nrow, "ID_USER" , this.AuthClient.ID_USER);
        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				//this.dsDelete.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsDelete.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
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
        	this.gfnExcelExport(this.dxGrid , "현장");
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }

        /************************************************************************
         * 서브 버튼 이벤트
         ************************************************************************/
        this.fnSelectSub = function() {
        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return false;

        	this.dsListSub.clearData();
        	var cd_dept = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT");
        	if (this.gfnIsNull(cd_dept)) {
        		return false;
        	}

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();
        	this.dsSelectSub.setColumn(0, "CD_DEPT", cd_dept);

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
        	this.gfnGridAdd(this.dxGridSub);
        }
        this.fnDelSub = function() {
        	this.gfnGridDel(this.dxGridSub);
        }
        this.fnSaveSub = function() {
        	if (!this.gfnGridValidate(this.dxGridSub)) return;

        	//지분율 합계 100초과 체크
        	if(nexacro.toNumber(this.dsListSub.getCaseSumNF(this.ucFlag + " != 'D'", "RT_SHARE")) > 100){
        		this.gfnAlert("지분율 합계는 100을 초과할수 없습니다.");
        		return;
        	}

        	this.dxGridSub.updateToDataset();

        	this.dsInsertSub.clearData();
        	this.dsUpdateSub.clearData();
        	this.dsDeleteSub.clearData();

        	var cd_dept = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT");
        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsertSub.addRow();
        				this.dsInsertSub.setColumn(nrow, "CD_DEPT", cd_dept);
        				this.dsInsertSub.setColumn(nrow, "CD_VENDOR", this.dsListSub.getColumn(i, "CD_VENDOR"));
        				this.dsInsertSub.setColumn(nrow, "RT_SHARE", this.dsListSub.getColumn(i, "RT_SHARE"));
        				this.dsInsertSub.setColumn(nrow, "CD_VENDOR_DEPT", this.dsListSub.getColumn(i, "CD_VENDOR_DEPT"));
        				this.dsInsertSub.setColumn(nrow, "RT_OWNER", this.dsListSub.getColumn(i, "RT_OWNER"));
        				this.dsInsertSub.setColumn(nrow, "CD_DEPT_APT", this.dsListSub.getColumn(i, "CD_DEPT_APT"));
        				this.dsInsertSub.setColumn(nrow, "CD_DEPT_STORE", this.dsListSub.getColumn(i, "CD_DEPT_STORE"));
        				this.dsInsertSub.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;

        			case "U":
        				var nrow = this.dsUpdateSub.addRow();
        				this.dsUpdateSub.setColumn(nrow, "CD_DEPT", cd_dept);
        				this.dsUpdateSub.setColumn(nrow, "CD_VENDOR", this.dsListSub.getColumn(i, "CD_VENDOR"));
        				this.dsUpdateSub.setColumn(nrow, "RT_SHARE", this.dsListSub.getColumn(i, "RT_SHARE"));
        				this.dsUpdateSub.setColumn(nrow, "CD_VENDOR_DEPT", this.dsListSub.getColumn(i, "CD_VENDOR_DEPT"));
        				this.dsUpdateSub.setColumn(nrow, "RT_OWNER", this.dsListSub.getColumn(i, "RT_OWNER"));
        				this.dsUpdateSub.setColumn(nrow, "CD_DEPT_APT", this.dsListSub.getColumn(i, "CD_DEPT_APT"));
        				this.dsUpdateSub.setColumn(nrow, "CD_DEPT_STORE", this.dsListSub.getColumn(i, "CD_DEPT_STORE"));
        				this.dsUpdateSub.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDeleteSub.addRow();
        				this.dsDeleteSub.setColumn(nrow, "CD_DEPT", cd_dept);
        				this.dsDeleteSub.setColumn(nrow, "CD_VENDOR", this.dsListSub.getColumn(i, "CD_VENDOR"));
        				break;
        		}
        	}

        	if (this.dsInsertSub.rowcount == 0 && this.dsUpdateSub.rowcount == 0 && this.dsDeleteSub.rowcount == 0) return;

        	var strSvcId    = "savesub";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "d_insert=dsInsertSub d_update=dsUpdateSub d_delete=dsDeleteSub";
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

        this.fnExcelSub = function() {
        	this.gfnExcelExport(this.dxGridSub, "관계사");
        }

        this.divData_divDataRight_div02_divBtn_btnFind_onclick = function(obj,e)
        {
        	this.fnSelectA();
        };

        this.divData_divDataRight_div02_divBtn_btnAdd_onclick = function(obj,e)
        {
        	this.gfnGridAdd(this.dxGridA);
        	this.btnSave.set_enable(true);
        	this.btnDel.set_enable(true);
        	this.btnExcel.set_enable(false);
        }

        this.divData_divDataRight_div02_divBtn_btnSave_onclick = function(obj,e)
        {
        	if (!this.gfnGridValidate(this.dxGridA)) return;

        	this.dxGridA.updateToDataset();

        	this.dsInsertA.clearData();
        	this.dsUpdateA.clearData();
        	this.dsDeleteA.clearData();

        	for (var i = 0; i < this.dsListA.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListA, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsertA.addRow();
        				this.dsInsertA.setColumn(nrow, "CD_CORP" ,  this.dsSelectA.getColumn(0, "CD_CORP"));
        				this.dsInsertA.setColumn(nrow, "CD_DEPT" , this.dsSelectA.getColumn(0, "CD_DEPT"));
        				this.dsInsertA.setColumn(nrow, "CD_SITE", this.dsListA.getColumn(i, "CD_SITE"));
        				this.dsInsertA.setColumn(nrow, "YN_MH", this.dsListA.getColumn(i, "YN_MH"));
        				this.dsInsertA.setColumn(nrow, "SABUN" , this.AuthClient.ID_USER);
        				break;
        			case "U":
        				var nrow = this.dsUpdateA.addRow();
        				this.dsUpdateA.setColumn(nrow, "CD_CORP" ,  this.dsSelectA.getColumn(0, "CD_CORP"));
        				this.dsUpdateA.setColumn(nrow, "CD_DEPT" , this.dsSelectA.getColumn(0, "CD_DEPT"));
        				this.dsUpdateA.setColumn(nrow, "CD_SITE", this.dsListA.getColumn(i, "CD_SITE"));
        				this.dsUpdateA.setColumn(nrow, "YN_MH", this.dsListA.getColumn(i, "YN_MH"));
        				this.dsUpdateA.setColumn(nrow, "SABUN" , this.AuthClient.ID_USER);
        				break;
        			case "D":
        				var nrow = this.dsDeleteA.addRow();
        				this.dsDeleteA.setColumn(nrow, "CD_CORP" ,  this.dsSelectA.getColumn(0, "CD_CORP"));
        				this.dsDeleteA.setColumn(nrow, "CD_DEPT" , this.dsSelectA.getColumn(0, "CD_DEPT"));
        				this.dsDeleteA.setColumn(nrow, "CD_SITE", this.dsListA.getColumn(i, "CD_SITE"));
        				this.dsDeleteA.setColumn(nrow, "SABUN" , this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	trace(this.dsInsertA.saveXML());
        	trace(this.dsDeleteA.saveXML());

        	if (this.dsInsertA.rowcount == 0 && this.dsUpdateA.rowcount == 0 && this.dsDeleteA.rowcount == 0) return;

        	var strSvcId    = "saveA";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insertA=dsInsertA updateA=dsUpdateA deleteA=dsDeleteA";
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
        };

        this.divData_divDataRight_div02_divBtn_btnDel_onclick = function(obj,e)
        {
        	this.gfnGridDel(this.dxGridA);

        	this.btnSave.set_enable(true);
        	this.btnExcel.set_enable(false);
        };

        this.divData_divDataRight_div02_divBtn_btnExcel_onclick = function(obj,e)
        {
        	this.gfnExcelExport(this.dxGridA , "원가부서");
        };

        this.divData_divDataRight_div02_divBtn_btnReset_onclick = function(obj,e)
        {

        };

        this.fnSelectA = function() {
        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return false;

        	this.dsListA.clearData();
        	var cd_dept = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT");
        	var cd_corp = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        	if (this.gfnIsNull(cd_dept) || this.gfnIsNull(cd_corp)) {
        		return false;
        	}

        	this.gfnGridBeforeSelect(this.dxGridA);

        	this.dsSelectA.clearData();
        	this.dsSelectA.addRow();
        	this.dsSelectA.setColumn(0, "CD_CORP", cd_corp);
        	this.dsSelectA.setColumn(0, "CD_DEPT", cd_dept);
        	this.dsSelectA.setColumn(0, "SABUN", this.AuthClient.ID_USER);

        	trace(this.dsSelectA.saveXML());

        	var strSvcId    = "selectA";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectA=dsSelectA";
        	var outData     = "dsListA=selectA0";
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
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드는 필수입니다.", "fnVaidateCallback");
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

        	}
        	else if (svcID == "detail") {
        		this.gfnGridAfterSelect(this.dxGridSub);
        	}
        	else if (svcID == "selectA") {
        		this.gfnGridAfterSelect(this.dxGridA);

        		trace("saveXML ::: "+this.dsListA.saveXML());

        		if(this.dsListA.rowcount > 0){
        			if(this.dsListA.getColumn(0, this.ucFlag) == "#" && this.dsListA.rowcount == 1){
        				this.btnFind.set_enable(true);
        				this.btnAdd.set_enable(true);
        				this.btnSave.set_enable(false);
        				this.btnDel.set_enable(true);
        				this.btnExcel.set_enable(false);
        				this.btnReset.set_enable(false);
        			}else{
        				this.btnFind.set_enable(true);
        				this.btnAdd.set_enable(true);
        				this.btnSave.set_enable(false);
        				this.btnDel.set_enable(true);
        				this.btnExcel.set_enable(true);
        				this.btnReset.set_enable(false);
        			}
        		}else{
        			this.btnFind.set_enable(true);
        			this.btnAdd.set_enable(true);
        			this.btnSave.set_enable(false);
        			this.btnDel.set_enable(true);
        			this.btnExcel.set_enable(false);
        			this.btnReset.set_enable(false);
        		}

        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        			//this.FormBtns.SubSelect.click();
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
        	}else if(svcID == "saveA") {
        		if (errorCode == 0) {
        			this.fnSelectA();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}
        	if (id == "ccfCD_DEPT") {
        		var cdCorp = this.ccfCD_CORP.form.CDTextBox.text;
        		if(this.gfnIsNull(cdCorp)){
        			this.gfnAlert("법인코드를 먼저 선택하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "TY_GUBUN"	, "01");			//상위부서
        		dsUserParam.setColumn(nrow, "CD_CORP"   , cdCorp);			//법인코드
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	switch(id) {
        		case "ccfCD_CORP":	//법인코드
        			this.ccfCD_DEPT.form.fnCodeFindClear();
        		break;
        	}
        }

        //그리드 코드파인드
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(id == "DHX_CFACNTUNIT") {	//현장
        		var cdCorp = this.ccfCD_CORP.form.CDTextBox.value;

        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");				//상위부서
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "");				//전표발행여부
        		dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);			//법인코드
        		dsUserParam.setColumn(nrow, "YN_USE"		, "Y");				//사용여부
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");				//현장/본사여부
        	}
        	return true;
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {

        		this.FormBtns.SubSelect.click();
        		this.fnSelectA();

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

        /*
         *	서브 그리드 코드파인드
         */
        this.fnGridSub_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	switch(id) {
        		case "DHX_CFVENDOR":	//관계사명
        			dsUserParam.setColumn(nrow, "TY_VENDOR"	, "F");				//거래처구분
        			dsUserParam.setColumn(nrow, "YN_RELATED", "Y");				//관계사여부
        		break;
        		case "DHX_CFACNTUNIT2":	//귀속부서
        			dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");			//상위부서
        			dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "");			//전표발행여부
        			dsUserParam.setColumn(nrow, "CD_CORP"		, "");			//법인코드
        			dsUserParam.setColumn(nrow, "YN_USE"		, "Y");			//사용여부
        			dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");			//현장/본사여부
        		break;
        		case "DHX_CFACNTUNIT_APT":	//귀속부서(아파트)
        			dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");			//상위부서
        			dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "");			//전표발행여부
        			dsUserParam.setColumn(nrow, "CD_CORP"		, "");			//법인코드
        			dsUserParam.setColumn(nrow, "YN_USE"		, "Y");			//사용여부
        			dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");			//현장/본사여부
        		break;
        		case "DHX_CFACNTUNIT_STORE":	//귀속부서(상가)
        			dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");			//상위부서
        			dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "");			//전표발행여부
        			dsUserParam.setColumn(nrow, "CD_CORP"		, "");			//법인코드
        			dsUserParam.setColumn(nrow, "YN_USE"		, "Y");			//사용여부
        			dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");			//현장/본사여부
        		break;
        	}
        	return true;
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        		this.gfnGridClear(this.dxGridA);
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

        //검색조건 변경 이벤트
        this.dsSearch_Valuechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        		this.gfnGridClear(this.dxGridA);
        	}
        };

        //관계사 데이터셋 변경 이벤트
        this.dsListSub_columnchanged = function(obj,e)
        {
        	if(e.columnid == "RT_OWNER"){	//주관사 여부일 경우
        		for(var i=0;i<obj.rowcount;i++){
        			if(obj.getColumn(e.row, this.ucFlag) != "#"){	//필터로우가 아닐경우
        				if(e.row != i){	//자기 자신과 같지 않은 로우의 데이터 체크 해지 처리
        					obj.setColumn(i, e.columnid, "N");
        				}
        			}
        		}
        	}
        };

        //원가부서 데이터셋 변경 이벤트
        this.dsListA_columnchanged = function(obj,e)
        {
        	if(this.gfnDsIsUpdated(obj)){
        		this.btnSave.set_enable(true);
        	}else{
        		this.btnSave.set_enable(false);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataRight.form.div02.form.divBtn.form.btnFind.addEventHandler("onclick",this.divData_divDataRight_div02_divBtn_btnFind_onclick,this);
            this.divData.form.divDataRight.form.div02.form.divBtn.form.btnAdd.addEventHandler("onclick",this.divData_divDataRight_div02_divBtn_btnAdd_onclick,this);
            this.divData.form.divDataRight.form.div02.form.divBtn.form.btnSave.addEventHandler("onclick",this.divData_divDataRight_div02_divBtn_btnSave_onclick,this);
            this.divData.form.divDataRight.form.div02.form.divBtn.form.btnDel.addEventHandler("onclick",this.divData_divDataRight_div02_divBtn_btnDel_onclick,this);
            this.divData.form.divDataRight.form.div02.form.divBtn.form.btnExcel.addEventHandler("onclick",this.divData_divDataRight_div02_divBtn_btnExcel_onclick,this);
            this.divData.form.divDataRight.form.div02.form.divBtn.form.btnReset.addEventHandler("onclick",this.divData_divDataRight_div02_divBtn_btnReset_onclick,this);
        };
        this.loadIncludeScript("DHA_BUIDING_DIV.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
