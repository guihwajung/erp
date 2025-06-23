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
            this.set_titletext("지방소득세 특별징수분");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">selectHeader</Col><Col id=\"SP\">DHVPR_LOCAL_HEADER_SELECT</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_LOCAL_SELECT</Col></Row><Row><Col id=\"TARGET\">selectHeaderV</Col><Col id=\"SP\">DHVPR_LOCAL_HEADER_SELECT2</Col></Row><Row><Col id=\"TARGET\">selectV</Col><Col id=\"SP\">DHVPR_LOCAL_SELECT2</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DHVPR_LOCAL_IWOL_SELECT</Col></Row><Row><Col id=\"SP\">DHVPR_LOCAL_IWOL_UPDATE</Col><Col id=\"TARGET\">update</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DHVPR_LOCAL_CREATE</Col></Row><Row><Col id=\"TARGET\">report</Col><Col id=\"SP\">DHVPR_LOCAL_BILL_SELECT</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHVPR_LOCAL_IWOL_DELETE</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHVPR_LOCAL_IWOL_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHeader", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReportParam", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_PRINT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","sta00:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("회계년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclDT_WORK","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ctclDT_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdoTYPE","sta01:0.0","10.0","159","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divSearch_form_rdoTYPE_innerdataset = new nexacro.NormalDataset("divSearch_form_rdoTYPE_innerdataset", obj);
            divSearch_form_rdoTYPE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">부서</Col><Col id=\"codecolumn\">D</Col></Row><Row><Col id=\"codecolumn\">V</Col><Col id=\"datacolumn\">시군구청</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_rdoTYPE_innerdataset);
            obj.set_text("부서");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Tab("tabData","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_tabindex("1");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.tabData);
            obj.set_text("지방소득세");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("이월금액");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid2","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_WORK.form.TextBox","value","dsSearch","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.rdoTYPE","value","dsSearch","TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DHV_LOCAL.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetButton();
        	this.fnSetParameter();

        	this.ccfCD_CORP.form.CDTextBox.setFocus();

        	//부서
        	//this.ccfCD_DEPT.form.CDTextBox.set_value(this.AuthClient.CD_DEPT);
        	//this.ccfCD_DEPT.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);
        	//회계년월
        	this.ctclDT_WORK.form.TextBox.set_value(this.gfnGetDate().substr(0,6));

        	//법인코드 세션에 코드로 셋팅
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        	this.rdoTYPE.set_value("D");	//구분 기본 부서

        	//탭 초기화
        	this.divData.form.tabData.set_enableevent(false);
        	this.divData.form.tabData.set_tabindex(0);
        	this.divData.form.tabData.set_enableevent(true);

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Select.set_enable(false);
        	if(this.divData.form.tabData.tabindex == 1 && this.rdoTYPE.value == "V"){
        		this.FormBtns.Add.set_enable(true);
        		this.FormBtns.Del.set_enable(true);
        	}else{
        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Del.set_enable(false);
        	}
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
         	this.btnDataCreate = this.gfnFormButtonAdd("DataCreate", "fnDataCreate");	//지방소득세 생성
        	this.btnBillPrint  = this.gfnFormButtonAdd("BillPrint", "fnBillPrint");		//영수증 출력

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP  = this.divSearch.form.ccfCD_CORP;
        	this.ctclDT_WORK = this.divSearch.form.ctclDT_WORK;
        	this.rdoTYPE = this.divSearch.form.rdoTYPE;

        	this.dxGrid  = this.divData.form.tabData.tab1.form.objGrid;
        	this.dxGrid2 = this.divData.form.tabData.tab2.form.objGrid2;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_CORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHV_LOCAL");
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DH", "DHV_LOCAL_IWOL");

        	//검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_Valuechanged, this);

        	this.dxGrid.setCellProperty("body", 0, "cssclass", "expr:comp.parent.parent.parent.parent.parent.parent.fnSetGridCss(rowidx)");

        	var dsCode = this.dxGrid.getBindCellIndex("body", "DS_CODE");
        	this.dxGrid.setCellProperty("body", dsCode, "cssclass", "expr:comp.parent.parent.parent.parent.parent.parent.fnSetGridCss(rowidx)");

        	var dsEtc1 = this.dxGrid.getBindCellIndex("body", "DS_ETC1");
        	this.dxGrid.setCellProperty("body", dsEtc1, "cssclass", "expr:comp.parent.parent.parent.parent.parent.parent.fnSetGridCss(rowidx)");

        	var sumDeptDtl = this.dxGrid.getBindCellIndex("body", "SUM_DEPT_DTL");
        	this.dxGrid.setCellProperty("body", sumDeptDtl, "cssclass", "expr:comp.parent.parent.parent.parent.parent.parent.fnSetGridCss(rowidx)");

        	//헤더 클릭 이벤트 삭제(소팅 막기 위해 처리)
        	this.dxGrid.removeEventHandlerLookup("onheadclick", "gfnGrid_onheadclick", this);

        	//이월금액 tab 그리드 코드파인드
        	this.dxGrid2.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid2.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        	this.dxGrid.setFormatRowProperty(0, "size", 48);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("DT_WORK", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("DT_WORK", "string");
        	this.dsInsert.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsInsert.addColumn("CD_JUMIN", "string");
        	this.dsInsert.addColumn("AM_IWOL_YEAR", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_JUMIN", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_PAY", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_IWOL", "BIGDECIMAL");
        	this.dsInsert.addColumn("ID_USER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("DT_WORK", "string");
        	this.dsUpdate.addColumn("CD_DEPT_SELFACNT", "string");
        	//this.dsUpdate.addColumn("CD_DEPT", "string");
        	this.dsUpdate.addColumn("CD_JUMIN", "string");
        	this.dsUpdate.addColumn("AM_IWOL_YEAR", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_JUMIN", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_PAY", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_IWOL", "BIGDECIMAL");
        	this.dsUpdate.addColumn("ID_USER", "string");

        	//삭제
        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("DT_WORK", "string");
        	this.dsDelete.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsDelete.addColumn("CD_JUMIN", "string");


        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("CD_CORP", "string");
        	this.dsCreate.addColumn("DT_WORK", "string");
        	this.dsCreate.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP"	, this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "DT_WORK"	, this.ctclDT_WORK.form.TextBox.value);

        	var strSvcId    = "";
        	var strSvcType  = "";
        	var inData      = "";
        	var outData     = "";
        	switch(this.divData.form.tabData.tabindex) {
        		case 0:
        			this.gfnGridBeforeSelect(this.dxGrid);

        			inData  = "selectHeader=dsSelect";
        			outData = "dsHeader=selectHeader0";
        			if(this.rdoTYPE.value == "V"){
        				inData = "selectHeaderV=dsSelect";
        				outData = "dsHeader=selectHeaderV0";
        			}

        			strSvcId    = "header";
        			strSvcType  = "select";
        			//inData      = "selectHeader=dsSelect";
        			//outData     = "dsHeader=selectHeader0";

        			break;
        		case 1:
        			this.gfnGridBeforeSelect(this.dxGrid2);
        			strSvcId    = "select";
        			strSvcType  = "grid";
        			inData      = "select2=dsSelect";
        			outData     = "dsList2=select20";

        			break;
        	}

        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
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

        //데이터 조회 처리
        this.fnDataSelect = function()
        {
        	var inData  = "select=dsSelect";
        	var outData = "dsList=select0";
        	if(this.rdoTYPE.value == "V"){
        		inData  = "selectV=dsSelect";
        		outData = "dsList=selectV0";
        	}

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
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

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var tabIdx = this.divData.form.tabData.tabindex;

        	if(tabIdx == 1){
        		if(this.dsList.rowcount != 0){
        			var nRow = this.gfnGridAdd(this.dxGrid2, "bottom", true);
        			this.dsList2.setColumn(nRow, "CD_DEPT_SELFACNT", this.ccfCD_CORP.form.CDTextBox.value);

        		}else{
        			this.gfnAlert("지방소득세를 먼저 조회하세요.");
        		}
        	}
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	var tabIdx = this.divData.form.tabData.tabindex;

        	if(tabIdx == 1){
        		this.gfnGridDel(this.dxGrid2);
        	}
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        	if(this.divData.form.tabData.tabindex == 0) {
        		this.gfnAlert("저장할 데이터가 없습니다.");
        		return;
        	}

        	if (!this.gfnGridValidate(this.dxGrid2)) return;

        	this.dxGrid2.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList2.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList2, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "DT_WORK"				, this.gfnIsNull(this.dsList2.getColumn(i, "DT_WORK"))==true?this.ctclDT_WORK.form.TextBox.value:this.dsList2.getColumn(i, "DT_WORK"));
        				this.dsInsert.setColumn(nrow, "CD_DEPT_SELFACNT"	, this.dsList2.getColumn(i, "CD_DEPT_SELFACNT"));
        				this.dsInsert.setColumn(nrow, "CD_JUMIN"			, this.dsList2.getColumn(i, "CD_JUMIN"));
        				this.dsInsert.setColumn(nrow, "AM_IWOL_YEAR" 		, this.dsList2.getColumn(i, "AM_IWOL_YEAR"));
        				this.dsInsert.setColumn(nrow, "AM_JUMIN"			, this.dsList2.getColumn(i, "AM_JUMIN"));
        				this.dsInsert.setColumn(nrow, "AM_PAY"				, this.dsList2.getColumn(i, "AM_PAY"));
        				this.dsInsert.setColumn(nrow, "AM_IWOL"				, this.dsList2.getColumn(i, "AM_IWOL"));
        				this.dsInsert.setColumn(nrow, "ID_USER"				, this.AuthClient.ID_USER);
        				break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "DT_WORK"				, this.gfnIsNull(this.dsList2.getColumn(i, "DT_WORK"))==true?this.ctclDT_WORK.form.TextBox.value:this.dsList2.getColumn(i, "DT_WORK"));
        				this.dsUpdate.setColumn(nrow, "CD_DEPT_SELFACNT"	, this.dsList2.getColumn(i, "CD_DEPT_SELFACNT"));
        				//this.dsUpdate.setColumn(nrow, "CD_DEPT"				, this.dsList2.getColumn(i, "CD_DEPT"));
        				this.dsUpdate.setColumn(nrow, "CD_JUMIN"			, this.dsList2.getColumn(i, "CD_JUMIN"));
        				this.dsUpdate.setColumn(nrow, "AM_IWOL_YEAR" 		, this.dsList2.getColumn(i, "AM_IWOL_YEAR"));
        				this.dsUpdate.setColumn(nrow, "AM_JUMIN"			, this.dsList2.getColumn(i, "AM_JUMIN"));
        				this.dsUpdate.setColumn(nrow, "AM_PAY"				, this.dsList2.getColumn(i, "AM_PAY"));
        				this.dsUpdate.setColumn(nrow, "AM_IWOL"				, this.dsList2.getColumn(i, "AM_IWOL"));
        				this.dsUpdate.setColumn(nrow, "ID_USER"				, this.AuthClient.ID_USER);
        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();

        				this.dsDelete.setColumn(nrow, "DT_WORK", this.dsList2.getColumn(i, "DT_WORK"));
        				this.dsDelete.setColumn(nrow, "CD_DEPT_SELFACNT", this.dsList2.getColumn(i, "CD_DEPT_SELFACNT"));
        				this.dsDelete.setColumn(nrow, "CD_JUMIN", this.dsList2.getColumn(i, "CD_JUMIN"));
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
        	switch(this.divData.form.tabData.tabindex) {
        		case 0:
        			this.gfnExcelExport(this.dxGrid);
        		break;
        		case 1:
        			this.gfnExcelExport(this.dxGrid2);
        		break;
        	}
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
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.text)) {
        		this.gfnAlert("법인코드가 입력되지 않았습니다.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		validate = false;
        	}

        	if (this.gfnIsNull(this.ctclDT_WORK.form.TextBox.value)) {
        		this.gfnAlert("회계년월이 입력되지 않았습니다.");
        		this.ctclDT_WORK.form.TextBox.setFocus();
        		validate = false;
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
        	switch(svcID) {
        		case "header" :
        			//그리드 데이터 셋팅 작업
        			this.fnGridDataSetting();

        			//데이터 조회 처리
        			this.fnDataSelect();
        			break;
        		case "select" :
        			switch(this.divData.form.tabData.tabindex) {
        				case 0:
        					this.gfnGridAfterSelect(this.dxGrid);
        					this.FormBtns.Add.set_enable(false);
        					this.FormBtns.Del.set_enable(false);
        					this.FormBtns.Save.set_enable(false);
        					break;
        				case 1:
        					this.gfnGridAfterSelect(this.dxGrid2);
        					this.fnSetButton();
        					break;
        			}
        			break;
        		case "save" :
        			if (errorCode == 0) {
        				this.FormBtns.Select.click();
        			} else {
        				this.gfnAlert(errorMsg);
        			}
        			break;
        		case "create":
        			if (errorCode == 0) {
        				this.gfnAlert("생성되었습니다.");
        				this.FormBtns.Select.click();
        			} else {
        				this.gfnAlert(errorMsg);
        			}
        		break;
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	//var arrData = codeFindData;
        	switch(id) {
        		case "ccfCD_CORP":	//법인코드


        		break;
        	}
        };

        //그리드 코드 파인드
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){

        	switch(id) {
        		case "DHX_LOCAL_IWOL_DEPT":
        			dsUserParam.setColumn(nrow, "DT_WORK", this.ctclDT_WORK.form.TextBox.value)
        			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			//dsUserParam.setColumn(nrow, "VALUE", this.dsList2.getColumn(this.dsList2.rowposition, "DS_DEPT_ACNT"));
        			break;
        // 		case "DHX_CFVENDOR":
        // 			dsUserParam.setColumn(nrow, "TY_VENDOR" , "");
        // 			dsUserParam.setColumn(nrow, "YN_RELATED", "");
        // 			break;
        		default:
        	}

        	return true;
        };

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(id == "DHX_LOCAL_IWOL_DEPT"){
        		var nrow = arr[0]["rowInfo"];

        		//시군구청일때
        		if(this.rdoTYPE.value == "V"){
        			//지방 소득세 탭 - 당월납부 주민세
        // 			var nCol = this.dsList.getColIndex('C'+arr[0]["CD_JUMIN"]);
        // 			var nRow = this.dsList.filter("DS_CODE == '당월납부주민세'");
        // 			var nVal = this.dsList.getColumn(0, nCol);
        // 			this.dsList2.setColumn(nrow, "AM_PAY", nVal);
        // 			this.dsList.filter("");

        			var nCol = this.dsList.getColIndex("C"+arr[0]["CD_JUMIN"]);
        			var nRow = this.dsList.findRow("DS_CODE", "주민세합");

        			var amJumimTot = nexacro.toNumber(this.dsList.getColumn(nRow, nCol),0);
        			var amIwolYear = nexacro.toNumber(arr[0]["AM_IWOL"],0);
        			var amJumin = nexacro.toNumber(this.dsList2.getColumn(this.dsList2.rowposition, "AM_JUMIN"),0);
        			var amPay = nexacro.toNumber(this.dsList2.getColumn(this.dsList2.rowposition, "AM_PAY"),0);
        			var amIwol = nexacro.toNumber(this.dsList2.getColumn(this.dsList2.rowposition, "AM_IWOL"),0);

         			trace("## amJumimTot :: "+amJumimTot);
         			trace("## amIwolYear :: "+amIwolYear);
         			trace("## amJumin :: "+amJumin);
        			trace("## amPay :: "+amPay);
        			trace("## amIwol :: "+amIwol);

        			this.dsList2.set_enableevent(false);
        		 	if(amJumimTot > amIwolYear){
        		 		this.dsList2.setColumn(this.dsList2.rowposition, "AM_JUMIN", amIwolYear);	//당월대체 주민세
        		 	}else{
        		 		this.dsList2.setColumn(this.dsList2.rowposition, "AM_JUMIN", amJumimTot);	//당월대체 주민세
        		 	}
        			this.dsList2.set_enableevent(true);

         			var calParam = { nrow: this.dsList2.rowposition,
         							 amIwolYear: amIwolYear,			//전기이월 주민세
         							 amJumin   : amJumin,				//당월대체 주민세
         							 amPay     : amPay,					//AM_PAY 당월납부 주민세
         							 amIwol    : amIwol,				//AM_IWOL 차이월 주민세
         							 amJumimTot: amJumimTot 			//주민세 합계
         			};

        			this.fnCalAmtJumin(calParam);
        		}
        	}
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_Valuechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGrid2);
        	}

        	if(e.columnid == "TYPE"){
        		if(e.newvalue == "D"){	//부서
        			this.gfnSetFormStatus(this);	// 폼상태 초기화
        		}else if(e.newvalue == "V"){	//시군구청
        			if(this.divData.form.tabData.tabindex == 1){	//이월금액 탭일경우
        				this.gfnSetFormStatus(this, "Q");	// 폼상태 조회상태
        			}
        		}

        		this.divData.form.tabData.set_enableevent(false);
        		this.divData.form.tabData.set_tabindex(0);	//탭변경
        		this.divData.form.tabData.set_enableevent(true);
        	}
        };

        //자료생성 처리
        this.fnDataCreate = function (obj,e)
        {
        	if (this.gfnIsNull(this.gfnTrim(this.ccfCD_CORP.form.CDTextBox.value))) {
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.ctclDT_WORK.form.TextBox.value)){
        		this.gfnAlert("회계년월은 필수입니다.");
        		this.ctclDT_WORK.form.TextBox.setFocus();
        		return;
        	}

        	this.gfnConfirm("생성 하시겠습니까?", "fnDataCreate_callback");

        };

        this.fnDataCreate_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsCreate.clearData();
        		var nRow = this.dsCreate.addRow();

        		//처리할 데이터 담기
        		this.dsCreate.setColumn(nRow, "CD_CORP" 	, this.ccfCD_CORP.form.CDTextBox.value);
        		this.dsCreate.setColumn(nRow, "DT_WORK"	 	, this.ctclDT_WORK.form.TextBox.value);
        		this.dsCreate.setColumn(nRow, "ID_USER"  	, this.AuthClient.ID_USER);

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
        							strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); 	// 통신방법 정의 [생략가능]
        	}
        };

        //영수증 출력
        this.fnBillPrint = function (obj,e)
        {
        	if (this.gfnIsNull(this.gfnTrim(this.ccfCD_CORP.form.CDTextBox.value))) {
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.ctclDT_WORK.form.TextBox.value)){
        		this.gfnAlert("회계년월은 필수입니다.");
        		this.ctclDT_WORK.form.TextBox.setFocus();
        		return;
        	}


        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("CD_CORP" , "string");
        	this.dsReport.addColumn("DT_WORK" , "string");

        // 	this.dsReportParam.clearData();
        // 	this.dsReportParam.addRow();
        // 	this.dsReportParam.setColumn(0, "DT_PRINT", this.gfnGetDate());


        	this.dsReport.clearData();
        	var nRow = this.dsReport.addRow();
        	this.dsReport.setColumn(nRow, "CD_CORP" 	, this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsReport.setColumn(nRow, "DT_WORK"		, this.ctclDT_WORK.form.TextBox.value);

        	var inProc		= "_dsProc";
        	var inParam 	= "";						// 필요없는 경우 생략
        	//var inParam 	= "params=dsReportParam";
        	var inData      = "report=dsReport";
        	var reportpath  = "/dh/dhv/DHV_LOCAL_RPT.ozr";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);

        };

        this.divData_tabData_canchange = function(obj,e)
        {
        	if(e.postindex != e.preindex){

        		if(e.preindex == 1){
        			var fRow = this.dsList2.findRowExprNF(  this.ucFlag+" != '#' && !dataset.parent.gfnIsNull("+this.ucFlag+ ")");
        			if(fRow > -1){
        				this.gfnConfirm("변경된 데이터가 있습니다.\r\n계속 진행하시겠습니까?", "tabData_canchange_callback");
        				return false;
        			}
        		}else{
        			if(this.rdoTYPE.value == "D"){
        				this.gfnAlert("구분이 시군구청일 경우 이동 가능합니다.");
        				return false;
        			}

        			if(this.dsList.rowcount == 0){
        				this.gfnAlert("지방소득세를 먼저 조회하세요.");
        				return false;
        			}
        		}
        	}
        };

        this.tabData_canchange_callback = function(strId, val)
        {

        	if(val == true) {
        		this.divData.form.tabData.set_enableevent(false);
        		this.divData.form.tabData.set_tabindex(0);	//탭변경
        		this.divData.form.tabData.set_enableevent(true);

        		this.dsList2.reset();	//데이터셋 리셋
        	}
        };


        //그리드 셋팅
        this.fnGridDataSetting = function ()
        {
        	var colDS_CODE = this.dxGrid.getBindCellIndex("body", "SUM_DEPT_DTL");	//계 컬럼 인덱스

        	this.dxGrid.set_enableredraw(false);
        	this.dsList.set_enableevent(false);

        	var colCnt = this.dxGrid.getCellCount("body");

        	//그리드 컬럼 삭제 처리(초기화용)
        	var delCnt = 0, delIdx = 0;
        	for(var i=0;i<colCnt;i++){
        		if(i > colDS_CODE){
        			delIdx = ((colCnt-1)-delCnt);
        			this.dxGrid.deleteContentsCol("body", delIdx, false);

        			delCnt++;
        		}
        	}

        	var cellIndex = colDS_CODE + 1;
        	//헤더 컬럼 데이터
        	for(var h=0;h<this.dsHeader.rowcount;h++){
        		// 컬럼 추가(데이터셋)
        		this.dsList.addColumn(this.dsHeader.getColumn(h, "CD_DEPT"), "BIGDECIMAL");

        		//그리드 컬럼 추가
        		this.dxGrid.appendContentsCol("body");

        		this.dxGrid.setCellProperty("head", cellIndex, "text", this.dsHeader.getColumn(h, "DS_DEPT_ACNT"));
        		this.dxGrid.setCellProperty("body", cellIndex, "text", "bind:"+this.dsHeader.getColumn(h, "CD_DEPT"));	//바인딩 처리
        		this.dxGrid.setCellProperty("summ", cellIndex, "text", "expr:dataset.getSum('"+this.dsHeader.getColumn(h, "CD_DEPT")+"')");
        		this.dxGrid.setCellProperty("summ", cellIndex, "displaytype", "mask");
        		this.dxGrid.setCellProperty("summ", cellIndex, "maskeditformat", "#,###");

        		//CSS 처리
        		this.dxGrid.setCellProperty("body", cellIndex, "cssclass", "expr:comp.parent.parent.parent.parent.parent.parent.fnSetGridCss(rowidx)");

        		this.dxGrid.setFormatColProperty(cellIndex, "size", 120); 		//컬럼 사이즈

        		cellIndex++;
        	}

        	this.dsList.set_enableevent(true);
        	this.dxGrid.set_enableredraw(true);

        	//trace("saveXML :: "+this.dsList.saveXML());
        };

        //그리드 Css 적용
        this.fnSetGridCss = function (row)
        {
        	var cdCode = nexacro.toNumber(this.dsList.getColumn(row, "CD_CODE"),0);

        	var rtnCss = "";
         	if(cdCode > 0){
        		if(cdCode == null){
        			rtnCss = "update";
        		}else{
        			if((cdCode <= 19) || (cdCode > 30 && cdCode <= 39) || (cdCode > 50 && cdCode <= 59) ||
        			   (cdCode > 70 && cdCode <= 79) || (cdCode > 100 && cdCode <= 109)){
        				rtnCss = "BACK_GangJo";
        			}
        		}
        	}else{
        		rtnCss = "BACK_GangJo";
        	}

        	return rtnCss;
        };

        this.dsList2_onvaluechanged = function(obj,e)
        {
        	switch(e.columnid){

        		case "AM_IWOL_YEAR":
        // 			var calParam = { nrow:e.row,
        // 							 amIwolYear:this.gfnNvl(this.dsList2.getColumn(e.row, "AM_IWOL_YEAR"),0),			//전기이월 주민세
        // 							 amJumin:this.gfnNvl(this.dsList2.getColumn(e.row, "AM_JUMIN"),this.gfnNvl(this.dsList2.getColumn(e.row, "AM_IWOL_YEAR"),0)),					//당월대체 주민세
        // 							 amPay:this.gfnNvl(this.dsList2.getColumn(e.row, "AM_PAY"),0),						//AM_PAY 당월납부 주민세
        // 							 amIwol:this.gfnNvl(this.dsList2.getColumn(e.row, "AM_IWOL"),0),					//AM_IWOL 차이월 주민세
        // 							 amJumimTot:this.gfnNvl(this.dsList2.getColumn(e.row, "AM_PAY"),0)+this.gfnNvl(this.dsList2.getColumn(e.row, "AM_JUMIN"),0) //주민세 합계
        // 			};
        //
        // 			trace("## AM_PAY :: "+this.dsList2.getColumn(e.row, "AM_PAY"));
        // 			trace("## AM_JUMIN :: "+this.dsList2.getColumn(e.row, "AM_JUMIN"));
        //
        // 			trace("## 11 amJumin :: "+calParam.amJumin);
        // 			trace("## 11 amIwolYear :: "+calParam.amIwolYear);
        // 			trace("## 11 amJumimTot :: "+calParam.amJumimTot);

        // 			if(calParam.amJumin > calParam.amIwolYear){
        // 				this.dsList2.setColumn(e.row, "AM_JUMIN", calParam.amIwolYear);
        // 			}else{
        // 				this.fnCalJumin(calParam);
        // 			}
        			var nCol = this.dsList.getColIndex("C"+this.dsList2.getColumn(e.row, "CD_JUMIN"));
        			var nRow = this.dsList.findRow("DS_CODE", "주민세합");

        			var amJumimTot = nexacro.toNumber(this.dsList.getColumn(nRow, nCol),0);
        			var amIwolYear = nexacro.toNumber(e.newvalue,0);
        			var amJumin = nexacro.toNumber(this.dsList2.getColumn(e.row, "AM_JUMIN"),0);
        			var amPay = nexacro.toNumber(this.dsList2.getColumn(e.row, "AM_PAY"),0);
        			var amIwol = nexacro.toNumber(this.dsList2.getColumn(e.row, "AM_IWOL"),0);

         			trace("## amJumimTot :: "+amJumimTot);
         			trace("## amIwolYear :: "+amIwolYear);
         			trace("## amJumin :: "+amJumin);
        			trace("## amPay :: "+amPay);
        			trace("## amIwol :: "+amIwol);

        			if(amJumimTot > amIwolYear){
        				this.dsList2.setColumn(e.row, "AM_JUMIN", amIwolYear);	//당월대체 주민세
        			}else{
        				this.dsList2.setColumn(e.row, "AM_JUMIN", amJumimTot);	//당월대체 주민세
        			}

        			this.dsList2.setColumn(e.row, "AM_PAY"  , amJumimTot-amIwolYear);	//당월납부 주민세
        			this.dsList2.setColumn(e.row, "AM_IWOL"  , amIwolYear-nexacro.toNumber(this.dsList2.getColumn(e.row, "AM_JUMIN"),0));	//차이월 주민세


        			break;
        		case "AM_JUMIN":

        			var nCol = this.dsList.getColIndex("C"+this.dsList2.getColumn(e.row, "CD_JUMIN"));
        			var nRow = this.dsList.findRow("DS_CODE", "주민세합");

        			var amJumimTot = nexacro.toNumber(this.dsList.getColumn(nRow, nCol),0);
        			var amIwolYear = nexacro.toNumber(this.dsList2.getColumn(e.row, "AM_IWOL_YEAR"),0);
        			var amJumin = nexacro.toNumber(e.newvalue,0);
        			var amPay = nexacro.toNumber(this.dsList2.getColumn(e.row, "AM_PAY"),0);
        			var amIwol = nexacro.toNumber(this.dsList2.getColumn(e.row, "AM_IWOL"),0);

         			trace("## amJumimTot :: "+amJumimTot);
         			trace("## amIwolYear :: "+amIwolYear);
         			trace("## amJumin :: "+amJumin);
        			trace("## amPay :: "+amPay);
        			trace("## amIwol :: "+amIwol);

        			if(amJumimTot > amIwolYear){
        				this.dsList2.setColumn(e.row, "AM_JUMIN", amIwolYear);	//당월대체 주민세
        			}else{
        				this.dsList2.setColumn(e.row, "AM_JUMIN", amJumimTot);	//당월대체 주민세
        			}

        			this.dsList2.setColumn(e.row, "AM_PAY"   , amJumimTot-amIwolYear);	//당월납부 주민세
        			this.dsList2.setColumn(e.row, "AM_IWOL"  , amIwolYear-nexacro.toNumber(this.dsList2.getColumn(e.row, "AM_JUMIN"),0));	//차이월 주민세

        // 			var calParam = { nrow:e.row,
        // 							 amIwolYear:this.gfnNvl(this.dsList2.getColumn(e.row, "AM_IWOL_YEAR"),0),			//전기이월 주민세
        // 							 amJumin:this.gfnNvl(this.dsList2.getColumn(e.row, "AM_JUMIN"),this.gfnNvl(this.dsList2.getColumn(e.row, "AM_IWOL_YEAR"),0)),					//당월대체 주민세
        // 							 amPay:this.gfnNvl(this.dsList2.getColumn(e.row, "AM_PAY"),0),						//AM_PAY 당월납부 주민세
        // 							 amIwol:this.gfnNvl(this.dsList2.getColumn(e.row, "AM_IWOL"),0),					//AM_IWOL 차이월 주민세
        // 							 amJumimTot:this.gfnNvl(this.dsList2.getColumn(e.row, "AM_PAY"),0)+this.gfnNvl(e.oldvalue,0) 		//주민세 합계
        // 			};
        //
        // 			if(calParam.amJumin > calParam.amIwolYear){
        // 				this.gfnAlert("당월대체 주민세는 전기이월 주민세보다 클 수 없습니다.");
        // 				this.dsList2.set_enableevent(false);
        // 				this.dsList2.setColumn(e.row, "AM_JUMIN", e.oldvalue);
        // 				this.dsList2.set_enableevent(true);
        // 				return false;
        // 			}
        //
        // 			this.fnCalJumin(calParam);
        			break;
        		default:

        	}

        };

        //당월납부 주민세와 차이월 주민세 계산
        this.fnCalJumin = function(param){

        	//당월대체 주민세가 주민세 합계 보다 크면
        	if(param.amJumimTot < param.amJumin){
        		this.dsList2.set_enableevent(false);
        		this.dsList2.setColumn(param.nrow, "AM_JUMIN", param.amJumimTot);
        		this.dsList2.set_enableevent(true);
        		param.amJumin = param.amJumimTot;
        	}

        	trace("## amJumin :: "+param.amJumin);
        	trace("## amJumimTot :: "+param.amJumimTot);

        	param.amPay = param.amJumimTot - param.amJumin;
        	param.amIwol = param.amIwolYear - param.amJumin;

        	trace("## amPay :: "+param.amPay);

        	this.dsList2.set_enableevent(false);
        	this.dsList2.setColumn(param.nrow, "AM_PAY", param.amPay);
        	this.dsList2.setColumn(param.nrow, "AM_IWOL", param.amIwol);
        	this.dsList2.setColumn(param.nrow, "AM_JUMIN", param.amJumin);
        	this.dsList2.set_enableevent(true);
        };

        this.divData_tabData_onchanged = function(obj,e)
        {
        	this.FormBtns.Select.click();
        };
        this.dsList_onvaluechanged = function(obj,e)
        {
        	this.fnSetButton();
        };

        this.dsList2_cancolumnchange = function(obj,e)
        {
        	switch(e.columnid){
        		case "AM_IWOL_YEAR":
        			var amIwolYear = nexacro.toNumber(e.newvalue,0);
        			var amJumin = nexacro.toNumber(this.dsList2.getColumn(e.row, "AM_JUMIN"),0);

        			if(amJumin > amIwolYear){
         				this.gfnAlert("당월대체 주민세는 전기이월 주민세보다 클 수 없습니다.");
         				return false;
         			}
        			break;
        		case "AM_JUMIN":

        			var amIwolYear = nexacro.toNumber(this.dsList2.getColumn(e.row, "AM_IWOL_YEAR"),0);
        			var amJumin = nexacro.toNumber(e.newvalue,0);

         			if(amJumin > amIwolYear){
         				this.gfnAlert("당월대체 주민세는 전기이월 주민세보다 클 수 없습니다.");
         				return false;
         			}

        			break;
        		default:

        	}
        };

        this.dsList2_oncolumnchanged = function(obj,e)
        {
        	switch(e.columnid){

        		case "AM_IWOL_YEAR":

        			var nCol = this.dsList.getColIndex("C"+this.dsList2.getColumn(e.row, "CD_JUMIN"));
        			var nRow = this.dsList.findRow("DS_CODE", "주민세합");

        			var amJumimTot = nexacro.toNumber(this.dsList.getColumn(nRow, nCol),0);
        			var amIwolYear = nexacro.toNumber(e.newvalue,0);
        			var amJumin = nexacro.toNumber(this.dsList2.getColumn(e.row, "AM_JUMIN"),0);
        			var amPay = nexacro.toNumber(this.dsList2.getColumn(e.row, "AM_PAY"),0);
        			var amIwol = nexacro.toNumber(this.dsList2.getColumn(e.row, "AM_IWOL"),0);

         			trace("## amJumimTot :: "+amJumimTot);
         			trace("## amIwolYear :: "+amIwolYear);
         			trace("## amJumin :: "+amJumin);
        			trace("## amPay :: "+amPay);
        			trace("## amIwol :: "+amIwol);

         			var calParam = { nrow:e.row,
         							 amIwolYear: amIwolYear,			//전기이월 주민세
         							 amJumin   : amJumin,				//당월대체 주민세
         							 amPay     : amPay,					//AM_PAY 당월납부 주민세
         							 amIwol    : amIwol,				//AM_IWOL 차이월 주민세
         							 amJumimTot: amJumimTot 			//주민세 합계
         			};

        			this.fnCalAmtJumin(calParam);
        			break;
        		case "AM_JUMIN":

        			var nCol = this.dsList.getColIndex("C"+this.dsList2.getColumn(e.row, "CD_JUMIN"));
        			var nRow = this.dsList.findRow("DS_CODE", "주민세합");

        			var amJumimTot = nexacro.toNumber(this.dsList.getColumn(nRow, nCol),0);
        			var amIwolYear = nexacro.toNumber(this.dsList2.getColumn(e.row, "AM_IWOL_YEAR"),0);
        			var amJumin = nexacro.toNumber(e.newvalue,0);
        			var amPay = nexacro.toNumber(this.dsList2.getColumn(e.row, "AM_PAY"),0);
        			var amIwol = nexacro.toNumber(this.dsList2.getColumn(e.row, "AM_IWOL"),0);

         			trace("## amJumimTot :: "+amJumimTot);
         			trace("## amIwolYear :: "+amIwolYear);
         			trace("## amJumin :: "+amJumin);
        			trace("## amPay :: "+amPay);
        			trace("## amIwol :: "+amIwol);

         			var calParam = { nrow:e.row,
         							 amIwolYear: amIwolYear,			//전기이월 주민세
         							 amJumin   : amJumin,				//당월대체 주민세
         							 amPay     : amPay,					//AM_PAY 당월납부 주민세
         							 amIwol    : amIwol,				//AM_IWOL 차이월 주민세
         							 amJumimTot: amJumimTot 			//주민세 합계
         			};

        			this.fnCalAmtJumin(calParam);


        			break;
        		default:

        	}
        };


        //당월납부 주민세와 차이월 주민세 계산
        this.fnCalAmtJumin = function(param){

        // 	//당월대체 주민세가 주민세 합계 보다 크면
        // 	if(param.amJumimTot < param.amJumin){
        // 		this.dsList2.set_enableevent(false);
        // 		this.dsList2.setColumn(param.nrow, "AM_JUMIN", param.amJumimTot);
        // 		this.dsList2.set_enableevent(true);
        // 		param.amJumin = param.amJumimTot;
        // 	}

        // 	if(param.amJumimTot > param.amIwolYear){
        // 		this.dsList2.setColumn(param.nrow, "AM_JUMIN", param.amIwolYear);	//당월대체 주민세
        // 	}else{
        // 		this.dsList2.setColumn(param.nrow, "AM_JUMIN", param.amJumimTot);	//당월대체 주민세
        // 	}

        	var amPay = param.amJumimTot-param.amIwolYear;

        	this.dsList2.set_enableevent(false);
        	this.dsList2.setColumn(param.nrow, "AM_PAY" , (amPay < 0 ? 0 : amPay));
        	this.dsList2.setColumn(param.nrow, "AM_IWOL", param.amIwolYear-nexacro.toNumber(this.dsList2.getColumn(param.nrow, "AM_JUMIN"),0));
        	//this.dsList2.setColumn(param.nrow, "AM_JUMIN", param.amJumin);
        	this.dsList2.set_enableevent(true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.tabData.addEventHandler("canchange",this.divData_tabData_canchange,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsList2.addEventHandler("cancolumnchange",this.dsList2_cancolumnchange,this);
            this.dsList2.addEventHandler("oncolumnchanged",this.dsList2_oncolumnchanged,this);
            this.dsHeader.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };
        this.loadIncludeScript("DHV_LOCAL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
