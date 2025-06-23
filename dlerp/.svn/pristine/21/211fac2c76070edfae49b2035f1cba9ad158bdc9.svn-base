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
            this.set_titletext("자금일보 작성");
            if (Form == this.constructor)
            {
                this._setFormPosition(1340,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DFAPR_ILBODTL_SELECT</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DFAPR_ILBO_DF_SELECT</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DFAPR_ILBO_DH_SELECT</Col></Row><Row><Col id=\"TARGET\">select3</Col><Col id=\"SP\">DFAPR_ILBO_CHA_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DFAPR_ILBODTL_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DFAPR_ILBODTL_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DFAPR_ILBODTL_DELETE</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DFAPR_ILBO_CREATE</Col></Row><Row><Col id=\"TARGET\">createx</Col><Col id=\"SP\">DFAPR_ILBO_CREATEX</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">report1</Col><Col id=\"SP\">DFAPR_ILBO1_PRINT</Col></Row><Row><Col id=\"TARGET\">report2</Col><Col id=\"SP\">DFAPR_ILBO2_PRINT</Col></Row><Row><Col id=\"TARGET\">report3</Col><Col id=\"SP\">DFAPR_ILBO3_PRINT</Col></Row><Row><Col id=\"TARGET\">report4</Col><Col id=\"SP\">DFAPR_ILBO4_PRINT</Col></Row><Row><Col id=\"TARGET\">report5</Col><Col id=\"SP\">DFAPR_ILBO5_PRINT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_INOUT", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ILBO\" type=\"STRING\" size=\"256\"/><Column id=\"FR_ILBO\" type=\"STRING\" size=\"256\"/><Column id=\"TO_ILBO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfCD_CORP","sta04:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","cfCD_CORP:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("일보적용일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calFR_ILBO","sta00:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_ILBO","calFR_ILBO:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calTO_ILBO","staDT_ILBO:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","764","10","5",null,null,"2",null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","0","10","660","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("회사별 입출금내역(통장시재)");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid1","0","sta00:0",null,"180","divSplitter:10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","divSplitter:15","10",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("입출금내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","divSplitter:10","sta02:0",null,null,"5","15",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00_00","0","objGrid1:20","660","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("회사별 입출금내역(회계)");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid2","0","sta00_00:0",null,"180","divSplitter:10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","0","objGrid2:20","660","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("회사별 입출금내역(차이)");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid3","0","sta00_00_00:0",null,"180","divSplitter:10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.calFR_ILBO","value","dsSearch","FR_ILBO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.calTO_ILBO","value","dsSearch","TO_ILBO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DFA_ILBO.xfdl", function() {
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
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	// 입력,저장,삭제 버튼 비활성화 처리
          	this.FormBtns.Add.set_enable(false);
        //  	this.FormBtns.Save.set_enable(false);
          	this.FormBtns.Del.set_enable(false);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnDataCreat = this.gfnFormButtonAdd("btnDataCreat", "fnDataCreat");
        	this.btnDataCncl = this.gfnFormButtonAdd("btnDataCncl", "fnDataCncl");
        	this.btnIlboList = this.gfnFormButtonAdd("btnIlboList", "fnIlboList");
        	this.btnIlboReport = this.gfnFormButtonAdd("btnIlboReport", "fnIlboReport");
        	this.btnElctrncPmnt = this.gfnFormButtonAdd("btnElctrncPmnt", "fnElctrncPmnt");
        	this.btnElctrncPmntDoc = this.gfnFormButtonAdd("btnElctrncPmntDoc", "fnElctrncPmntDoc");
        	this.btnBalance = this.gfnFormButtonAdd("btnBalance", "fnBalance");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	// 조회조건
        	this.cfCD_CORP  = this.divSearch.form.cfCD_CORP;	// 법인코드
        	this.calFR_ILBO = this.divSearch.form.calFR_ILBO;	// 일보적용일자
        	this.calTO_ILBO = this.divSearch.form.calTO_ILBO;	// 일보적용일자
        	//this.cboTY_INOUT = this.divData.form.cboTY_INOUT;	// 입출금내역구분

        	this.dxGrid = this.divData.form.objGrid;			// 그리드(입출금내역)
        	this.dxGrid1 = this.divData.form.objGrid1;			// 그리드(전일시재현황)
        	this.dxGrid2 = this.divData.form.objGrid2;			// 그리드(회사별 입출금내역)
        	this.dxGrid3 = this.divData.form.objGrid3;			// 그리드(금일자금현황)

        	this.grSearch = this.FormInfo.GR_SEARCH;			// 권한?
        	this.cdGroup = this.gfnIsNull(this.AuthClient.CD_GROUP) ? "" : this.AuthClient.CD_GROUP;			// 그룹코드
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.cfCD_CORP.CodeFindName = "DZX_CFCORP";
        	this.cfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFA_ILBO4");		// 입출금내역
        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DF", "DFA_ILBO_DF");	// 전일시재현황
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DF", "DFA_ILBO_DH");	// 회사별입출금내역
        	this.gfnGridInit(this.dxGrid3, this.dsList3, "DF", "DFA_ILBO_CHA");	// 금일자금현황

        	// 그리드 코드파인드
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";


        	// 법인코드 init
        	if (this.gfnIsNull(this.cfCD_CORP.form.CDTextBox.value)) {
        		this.cfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.cfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}

        	var today = this.gfnAddDate(this.gfnGetDate(), -1);
        	this.dsSearch.setColumn(0, "FR_ILBO", today);
        	this.dsSearch.setColumn(0, "TO_ILBO", today);

        	// 권한체크
        	if (nexacro.toNumber(this.grSearch) >= 2) {
        		this.cfCD_CORP.set_enable(false);
        	}

        	// 기준일자 포커스추가
        	this.cfCD_CORP.form.CDTextBox.setFocus();
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("FR_ILBO", "string");
        	this.dsSelect.addColumn("TO_ILBO", "string");
        	this.dsSelect.addColumn("TY_INOUT", "string");

        // 	this.dsSelect1 = new Dataset();
        // 	this.dsSelect1.addColumn("CD_CORP", "string");
        // 	this.dsSelect1.addColumn("DT_ILBO", "string");
        //
        // 	this.dsSelect2 = new Dataset();
        // 	this.dsSelect2.addColumn("DT_ILBO", "string");
        // 	this.dsSelect2.addColumn("CD_CORP", "string");
        //
        // 	this.dsSelect3 = new Dataset();
        // 	this.dsSelect3.addColumn("CD_CORP", "string");
        // 	this.dsSelect3.addColumn("DT_ILBO", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("DT_ILBO", "string");
        	this.dsInsert.addColumn("TY_INOUT", "string");
        	this.dsInsert.addColumn("RM_BIGO", "string");
        	this.dsInsert.addColumn("AM_AMT", "bigdecimal");
        	this.dsInsert.addColumn("ID_USER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("DT_ILBO", "string");
        	this.dsUpdate.addColumn("TY_INOUT", "string");
        	this.dsUpdate.addColumn("RM_BIGO", "string");
        	this.dsUpdate.addColumn("AM_AMT", "bigdecimal");
        	this.dsUpdate.addColumn("SN_SEQ", "bigdecimal");
        	this.dsUpdate.addColumn("ID_USER", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_CORP", "string");
        	this.dsDelete.addColumn("DT_ILBO", "string");
        	this.dsDelete.addColumn("TY_INOUT", "string");
        	this.dsDelete.addColumn("SN_SEQ", "bigdecimal");
        	this.dsDelete.addColumn("ID_USER", "string");

        	this.dscreate = new Dataset();
        	this.dscreate.addColumn("CD_CORP", "string");
        	this.dscreate.addColumn("FR_ILBO", "string");
        	this.dscreate.addColumn("TO_ILBO", "string");
        	this.dscreate.addColumn("ID_USER", "string");

        	this.dscreatex = new Dataset();
        	this.dscreatex.addColumn("CD_CORP", "string");
        	//this.dscreatex.addColumn("DT_ILBO", "string");
        	this.dscreatex.addColumn("FR_ILBO", "string");
        	this.dscreatex.addColumn("TO_ILBO", "string");
        	this.dscreatex.addColumn("ID_USER", "string");

        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("CD_CORP", "string");	// 법인코드
        	this.dsReport.addColumn("FR_ILBO", "string");	// 일보일자(F)
        	this.dsReport.addColumn("TO_ILBO", "string");	// 일보일자(T)
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
        	this.gfnGridBeforeSelect(this.dxGrid1);
        	this.gfnGridBeforeSelect(this.dxGrid2);
        	this.gfnGridBeforeSelect(this.dxGrid3);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "FR_ILBO", this.dsSearch.getColumn(0, "FR_ILBO"));
        	this.dsSelect.setColumn(0, "TO_ILBO", this.dsSearch.getColumn(0, "TO_ILBO"));
        	//this.dsSelect.setColumn(0, "TY_INOUT", this.cboTY_INOUT.value);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect select1=dsSelect select2=dsSelect select3=dsSelect";
        	var outData     = "dsList=select0 dsList1=select10 dsList2=select20 dsList3=select30";
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

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nRow = this.gfnGridAdd(this.dxGrid);

        	// 실적구분: 신규는 무조건 계획으로 set(insert sp에 '계획'으로 하드코딩)
        	// this.dsList.setColumn(nRow, "TY_PLAN", "계획");
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
        				this.dsInsert.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsInsert.setColumn(nrow, "DT_ILBO", this.dsList.getColumn(i, "DT_ILBO"));
        				//this.dsInsert.setColumn(nrow, "DT_ILBO", this.calFR_ILBO.value);
        				//this.dsInsert.setColumn(nrow, "TY_INOUT", this.cboTY_INOUT.value);
        				this.dsInsert.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsInsert.setColumn(nrow, "AM_AMT", this.dsList.getColumn(i, "AM_AMT"));
        				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsUpdate.setColumn(nrow, "DT_ILBO", this.dsList.getColumn(i, "DT_ILBO"));
        				//this.dsUpdate.setColumn(nrow, "DT_ILBO", this.calFR_ILBO.value);
        				//this.dsUpdate.setColumn(nrow, "TY_INOUT", this.cboTY_INOUT.value);
        				this.dsUpdate.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsUpdate.setColumn(nrow, "AM_AMT", this.dsList.getColumn(i, "AM_AMT"));
        				this.dsUpdate.setColumn(nrow, "SN_SEQ", this.dsList.getColumn(i, "SN_SEQ"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsDelete.setColumn(nrow, "DT_ILBO", this.dsList.getColumn(i, "DT_ILBO"));
        				//this.dsDelete.setColumn(nrow, "DT_ILBO", this.calFR_ILBO.value);
        				//this.dsDelete.setColumn(nrow, "TY_INOUT", this.cboTY_INOUT.value);
        				this.dsDelete.setColumn(nrow, "SN_SEQ", this.dsList.getColumn(i, "SN_SEQ"));
        				this.dsDelete.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
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
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
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

        this.fnIlboReport = function() {
        	if (!this.fnSelectReportValidate()) return false;
        	this.dsReportParam = new Dataset();
        	this.dsReportParam.addColumn("DS_CORP", "string");	// 법인
        	this.dsReportParam.addColumn("DT_ILBO", "string");	// 일보일자

        	var strDate = this.dsSearch.getColumn(0, "FR_ILBO");
        	var frIlboFomat  = strDate.substr(0,4) + "." + strDate.substr(4,2) + "." + strDate.substr(6,8);

        	strDate = this.dsSearch.getColumn(0, "TO_ILBO");
        	var toIlboFomat  = strDate.substr(0,4) + "." + strDate.substr(4,2) + "." + strDate.substr(6,8);

        	var dtIlboTxt = "(" + frIlboFomat + "~" + toIlboFomat + ")";

        	this.dsReportParam.clearData();
        	this.dsReportParam.addRow();
        	this.dsReportParam.setColumn(0, "DS_CORP", this.dsSearch.getColumn(0, "DS_CORP"));
        	this.dsReportParam.setColumn(0, "DT_ILBO", dtIlboTxt);

        	this.dsReport.clearData();
        	this.dsReport.addRow();
        	this.dsReport.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsReport.setColumn(0, "FR_ILBO", this.dsSearch.getColumn(0, "FR_ILBO"));
        	this.dsReport.setColumn(0, "TO_ILBO", this.dsSearch.getColumn(0, "TO_ILBO"));

         	var inProc		= "_dsProc";
         	var inParam 	= "params=dsReportParam";						// 조회SP이외 사용할 정보
         	var inData      = "report1=dsReport report2=dsReport report3=dsReport report4=dsReport report5=dsReport";// reportSub2=dsReport";// target=파라미터 Ds
         	var reportpath  = "/df/dfa/DFA_ILBO.ozr";

         	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {

        	if (this.gfnIsNull(this.calFR_ILBO.value)) {
        		this.gfnAlert("일보적용 시작일자를 입력 하세요.");
        		this.calFR_ILBO.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.calTO_ILBO.value)) {
        		this.gfnAlert("일보적용 종료일자를 입력 하세요.");
        		this.calTO_ILBO.setFocus();
        		return false;
        	}

        	if ( !this.gfnIsNull(this.calFR_ILBO.value) && !this.gfnIsNull(this.calTO_ILBO.value) ) {
        		if ( this.calFR_ILBO.value > this.calTO_ILBO.value ) {
        			this.gfnAlert("일보적용일자가 잘못 입력 되었습니다..");
        			this.calFR_ILBO.setFocus();
        			return false;
        		}
        	}

        // 	if (this.gfnIsNull(this.cboTY_INOUT.value)) {
        // 		this.gfnAlert("입출금내역구분을 선택 하세요.");
        // 		this.cboTY_INOUT.setFocus();
        // 		return false;
        // 	}

        	return true;
        };

        /*
         *	조회출력 Validate
         */
        this.fnSelectReportValidate = function() {
        	if (this.gfnIsNull(this.cfCD_CORP.form.CDTextBox.value)) {
        		this.gfnAlert("법인코드를 입력 하세요.");
        		this.cfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.calFR_ILBO.value)) {
        		this.gfnAlert("일보적용 시작일자를 입력 하세요.");
        		this.calFR_ILBO.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.calTO_ILBO.value)) {
        		this.gfnAlert("일보적용 종료일자를 입력 하세요.");
        		this.calTO_ILBO.setFocus();
        		return false;
        	}

        	if ( !this.gfnIsNull(this.calFR_ILBO.value) && !this.gfnIsNull(this.calTO_ILBO.value) ) {
        		if ( this.calFR_ILBO.value > this.calTO_ILBO.value ) {
        			this.gfnAlert("일보적용일자가 잘못 입력 되었습니다..");
        			this.calFR_ILBO.setFocus();
        			return false;
        		}
        	}

        	return true;
        };

        /*
         *	팝업 Validate
         */

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

        		// 버튼설정
        // 		var tyInout = this.cboTY_INOUT.value;
        // 		this.fnSetBtn(tyInout);

        		// TODO 삭제예정
        		this.fnSetBtn('YES');

        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "combo") {
        		//this.cboTY_INOUT.set_value("NO");
        	} else if (svcID == "create") {
        		this.gfnAlert("정상적으로 처리되었습니다.", "","cr", "fnMsgCallback");
        	}
        }

        this.fnMsgCallback = function(strId, strVal) {
        	switch(strId) {
        		case "cr":
        			this.FormBtns.Select.click();
        		break;
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	switch(id) {

        	// 법인코드(조회조건)
        	case "cfCD_CORP":
        		dsUserParam.setColumn(nrow, "CD_GROUP", this.cdGroup);
        		break;

        	default:
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	var arr = codeFindData;

        	switch(id) {

        	// 법인코드(조회조건)
        	case "cfCD_CORP":
        		//this.fnSearchInit();

        	default:
        	}
        	return true;
        }



        this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow) {
        	var cdCorp = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");

        	// 법인코드
        	if (id == "DFX_CFCORP") {
        		dsUserParam.setColumn(nrow, "CD_GROUP", this.cdGroup);
        	}
        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	// 법인코드
        	if (id == "DFX_CFCORP") {
        	}
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

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
        	}
        };

        // 자료생성
        this.fnDataCreat = function(obj,e) {
        	//this.fnPopupOpen("DFA_DLG_ILBO_CREATE");
        	var popId = "DFA_DLG_ILBO_CREATE";
         	if (!this.fnPopupValidate(popId)) {
        		return false;
        	}

        	this.dscreate.clearData();
        	var nrow = this.dscreate.addRow();

        	this.dscreate.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dscreate.setColumn(nrow, "FR_ILBO", this.dsSearch.getColumn(0, "FR_ILBO"));
        	this.dscreate.setColumn(nrow, "TO_ILBO", this.dsSearch.getColumn(0, "TO_ILBO"));
        	this.dscreate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        	if (this.dscreate.rowcount == 0) return;

        	var strSvcId    = "create";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "create=dscreate";
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

        // 생성취소
        this.fnDataCncl = function(obj,e) {
        	this.dscreatex.clearData();

        	var nrow = this.dscreatex.addRow();

        	this.dscreatex.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dscreatex.setColumn(nrow, "FR_ILBO", this.dsSearch.getColumn(0, "FR_ILBO"));
        	this.dscreatex.setColumn(nrow, "TO_ILBO", this.dsSearch.getColumn(0, "TO_ILBO"));
        	this.dscreatex.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        	if (this.dscreatex.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "createx=dscreatex";
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


        this.fnPopupOpen = function(popId) {

        	if (!this.fnPopupValidate(popId)) {
        		return false;
        	}

        	var param = {};
        	param.DT_FROM = this.gfnTrim(this.calFR_ILBO.value);	// 일보적용일자F
        	param.DT_TO = this.gfnTrim(this.calTO_ILBO.value);		// 일보적용일자T

        	var width = 425;
        	var height = 230;

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, popId, "fnPopCallBack", param, width, height);
        }

        this.fnPopCallBack = function(svcID, val) {
        	if (val) {
        		var json = JSON.parse(val);

        		// 자금일보 자료생성 콜백
        		if (svcID.indexOf("DFA_DLG_ILBO_CREATE") > -1) {
        			this.fnIlboCreate("create", json);
        		}
        		// 자금일보 전자결재
        		if (svcID.indexOf("DFA_ILBO_APP") > -1) {
        			this.FormBtns.Select.click();
        		}
        	}
        }

        // 전자결재상신
        this.fnElctrncPmnt = function(obj,e) {
        // 	if(!this.gfnGridIsRow(this.dxGrid)) return;
        //
        // 	var nICnt = this.dsList.findRow(this.ucFlag,"I");
        // 	var nUCnt = this.dsList.findRow(this.ucFlag,"U");
        // 	var nDCnt = this.dsList.findRow(this.ucFlag,"D");
        //
        // 	if( nICnt > -1|| nUCnt > -1 || nDCnt > -1) {
        // 		this.gfnAlert("저장 후 처리하세요.", "");
        // 		return;
        // 	}
        //
        // 	// 결재상태 1,2 : 결재중,결재완료 시 return;
        // 	var tyAppr = this.dsList.getColumn(this.dsList.rowposition, "TY_APPR");
        // 	if ( tyAppr == "1" || tyAppr == "2" ) {
        // 		this.gfnAlert("결재상태를 확인 바랍니다.");
        // 		return;
        // 	}

        // 	if (!this.fnSelectReportValidate()) return false;
        //
        // 	var sDateFr = this.dsSearch.getColumn(0, "FR_ILBO");
        // 	var sDateTo = this.dsSearch.getColumn(0, "TO_ILBO");
        //
        // 	var sFrIlbo = sDateFr.substr(0,4) + "." + sDateFr.substr(4,2) + "." + sDateFr.substr(6,2);
        // 	var sToIlbo = sDateTo.substr(0,4) + "." + sDateTo.substr(4,2) + "." + sDateTo.substr(6,2);
        // 	var sDsTitle = this.dsSearch.getColumn(0, "DS_CORP") + " 자금일보 상신 (" +  sFrIlbo + " ~ " + sToIlbo+")";
        //
        // 	var param = {};
        // 	param.V1 =	// 법인코드
        // 	param.V2 = 	// 일보적용시작일자
        // 	param.V3 =	// 일보적용종료일자
        // 	param.V4 = "";		// 구분
        // 	param.ID_AP = this.dsList2.getColumn(this.dsList2.rowposition, "NO_APPR");	// 전자결재문서번호
        // 	param.DS_ETITLE = sDsTitle;
        //
        // 	this.gfnFormOpen("DFA", "DFA_ILBO_APP", "fnPopCallBack", param, 1200, 700);

        	var strFormId = "DSMEC_FUNDS_ILBO";
        	var strSubject = "자금일보 상신";
        	strSubject = encodeURI(strSubject);
        	var url = this.gfnGetConfig("DZ" , "GW_APROVAL_URL");
        	url = url + "approval/legacy/goFormLink.do?legacyFormID=" + strFormId;
        	url += "&mode=DRAFT";
        	url += "&ID_USER=" + this.AuthClient.ID_USER;
        	url += "&DS_KEY1=" + this.dsSearch.getColumn(0, "CD_CORP");  // 법인코드
        	url += "&DS_KEY2=" + this.dsSearch.getColumn(0, "FR_ILBO");  // 일보적용시작일자
        	url += "&DS_KEY3=" + this.dsSearch.getColumn(0, "TO_ILBO");  // 일보적용종료일자
        	url += "&DS_KEY4="
        	url += "&DS_KEY5="
        	url += "&RTN_TITLE=" + strSubject;

        			var new_window = window.open(url,"_blank", "width=790,height=1000,menubar=no,scrollbars=no,resizable=no,status=no");
        			new_window.onbeforeunload = this.fnAprvDialogCallback();
        }

         this.fnAprvDialogCallback = function(svcID, value) {
        	// 리턴값
        	//if(value){
        		// 결재완료, 결재취소, 결재상신 후에는 재조회를 한다
        		this.FormBtns.Select.click();
        }

        // 전자결재문서조회
        this.fnElctrncPmntDoc = function(obj,e) {
        // 	if(!this.gfnGridIsRow(this.dxGrid)) return;
        //
        // 	var nICnt = this.dsList.findRow(this.ucFlag,"I");
        // 	var nUCnt = this.dsList.findRow(this.ucFlag,"U");
        // 	var nDCnt = this.dsList.findRow(this.ucFlag,"D");
        //
        // 	if( nICnt > -1|| nUCnt > -1 || nDCnt > -1) {
        // 		this.gfnAlert("저장 후 처리하세요.", "");
        // 		return;
        // 	}

        	// 회사별입출금내역
        	var nRow = this.dsList2.rowposition;
        	if(this.gfnIsNull(this.dsList2.getColumn(this.dsList2.rowposition , "NO_APPR"))){
        		this.gfnAlert("결재번호 정보가 존재하지 않습니다.");
        		return;
        	}

        // 	// 결재상태 0 : 결재전 시 return;
        // 	var tyAppr = this.dsList.getColumn(this.dsList.rowposition, "TY_APPR");
        // 	if ( tyAppr == "0") {
        // 		this.gfnAlert("결재상태를 확인 바랍니다.");
        // 		return;
        // 	}

            var url = this.gfnGetConfig("DZ" , "GW_APROVAL_URL");
        	url = url+"approval/legacy/goFormLink.do?";
        	url +="mode=complete";
        	url +="&ID_USER=" + this.AuthClient.ID_USER;
        	url +="&fiid=" + this.dsList.getColumn(nRow, "NO_APPR");
        	var new_window = window.open(url,"_blank", "width=790,height=1000,menubar=no,scrollbars=no,resizable=no,status=no");
        	new_window.onbeforeunload = this.fnAprvDialogCallback();
        }

        // 자료생성 및 자료삭제 -- 사용안함
        this.fnIlboCreate = function(svcId, json) {
        	var varInData = "";

        	if (svcId == "create") {
        		this.dscreate.clearData();
        		var nrow = this.dscreate.addRow();

        		this.dscreate.setColumn(nrow, "CD_CORP", this.cfCD_CORP.form.CDTextBox.value);
        		this.dscreate.setColumn(nrow, "DT_FROM", json.DT_ILBO_FR);
        		this.dscreate.setColumn(nrow, "DT_TO", json.DT_ILBO_TO);
        		this.dscreate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        		if (this.dscreate.rowcount == 0) return;

        		varInData = svcId + "=dscreate";
        	}


        	var strSvcId    = svcId;
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = varInData;
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


        /*
         *	팝업 Validate
         */
        this.fnPopupValidate = function(popId) {

        	trace("popId->" + popId);

        	switch(popId) {

        	// 자금일보자료생성
        	case "DFA_DLG_ILBO_CREATE":
        			if (this.gfnIsNull(this.calFR_ILBO.value)) {
        				this.gfnAlert("일보적용 시작일자를 입력 하세요.");
        				this.calFR_ILBO.setFocus();
        				return false;
        			}

        			if (this.gfnIsNull(this.calTO_ILBO.value)) {
        				this.gfnAlert("일보적용 종료일자를 입력 하세요.");
        				this.calTO_ILBO.setFocus();
        				return false;
        			}
        		break;

        	case "DFA_ILBOLIST":
        // 			if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        // 				this.gfnAlert("법인코드를 입력 하세요.");
        // 				this.cfCD_CORP.form.CDTextBox.setFocus();
        // 				return false;
        // 			}



        			if (this.gfnIsNull(this.calFR_ILBO.value)) {
        				this.gfnAlert("일보적용 시작일자를 입력 하세요.");
        				this.calFR_ILBO.setFocus();
        				return false;
        			}

        			if (this.gfnIsNull(this.calTO_ILBO.value)) {
        				this.gfnAlert("일보적용 종료일자를 입력 하세요.");
        				this.calTO_ILBO.setFocus();
        				return false;
        			}

        		break;


        	default:
        	}

        	return true;
        }


        this.fnIlboList = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var popId = "DFA_ILBOLIST";
        	if (!this.fnPopupValidate(popId)) {
        		return false;
        	}

        	var param = {};
        	param.CD_CORP = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));	// 법인코드
        	param.DS_CORP = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "DS_CORP"));	// 법인명칭
        	//param.DT_ILBO = this.gfnTrim(this.dsSearch.getColumn(0, "FR_ILBO"));						// 일보일자
        	param.DT_ILBO = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "DT_ILBO"));	// 일보일자
        	//param.TY_INOUT = this.gfnTrim(this.cboTY_INOUT.value);										// 입출구분
        	param.CD_SUJI = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_SUJI"));	// 수지코드
        	param.DS_SUJI = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "DS_SUJI"));	// 수지명칭

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, popId, "fnPopCallBack", param);
        }


        // 공통코드콤보
        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");
        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(0, "CD_TYPE", "A6");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_INOUT=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };


        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGrid1);
        		this.gfnGridClear(this.dxGrid2);
        		this.gfnGridClear(this.dxGrid3);
        	}
        };


        this.divData_cboTY_INOUT_onitemchanged = function(obj,e)
        {
        	trace("e.postvalue :: " + e.postvalue);
        	//this.fnSetBtn(e.postvalue);

        	//this.FormBtns.Select.click();
        };

        // 버튼설정(입력,삭제)
        this.fnSetBtn = function(cboVal) {
        	if (cboVal == "NO") {
        		this.FormBtns.Add.set_enable(true);
        		this.FormBtns.Del.set_enable(true);
        	} else {
        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Del.set_enable(false);
        	}
        }


        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };

        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_left(e.clientx);
        		this.divData.form.resetScroll();
        	}
        };
        this.divData_ondrag = function(obj,e)
        {

        };

        // 계좌별예금잔고조회
        this.fnBalance = function(obj,e) {
        	//if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var popId = "DFA_BALANCE";
        	if (!this.fnPopupValidate(popId)) {
        		return false;
        	}

        	var param = {};
        	param.CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");	// 법인
        	param.FR_ILBO = this.dsSearch.getColumn(0, "FR_ILBO");	// 시작일
        	param.TO_ILBO = this.dsSearch.getColumn(0, "TO_ILBO");	// 종료일

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, popId, "fnPopCallBack", param);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.calFR_ILBO.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.calTO_ILBO.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsList1.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsList2.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsList3.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };
        this.loadIncludeScript("DFA_ILBO.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
