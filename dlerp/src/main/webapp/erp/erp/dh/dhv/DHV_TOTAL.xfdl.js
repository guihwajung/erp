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
            this.set_titletext("매입총괄집계표");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNO_TAX", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">1기예정</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">1기확정</Col></Row><Row><Col id=\"CD_CODE\">3</Col><Col id=\"DS_CODE\">2기예정</Col></Row><Row><Col id=\"CD_CODE\">4</Col><Col id=\"DS_CODE\">2기확정</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SALEBUY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">BUY</Col><Col id=\"DS_CODE\">매입</Col></Row><Row><Col id=\"CD_CODE\">SALE</Col><Col id=\"DS_CODE\">매출</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">b_select</Col><Col id=\"SP\">DHVPR_TOTALBUYING_SELECT</Col></Row><Row><Col id=\"TARGET\">s_select</Col><Col id=\"SP\">DHVPR_TOTALSALE_SELECT</Col></Row><Row><Col id=\"TARGET\">b_create</Col><Col id=\"SP\">DHVPR_TOTALBUYING_CREATE</Col></Row><Row><Col id=\"TARGET\">s_create</Col><Col id=\"SP\">DHVPR_TOTALSALE_CREATE</Col></Row><Row><Col id=\"TARGET\">b_delete</Col><Col id=\"SP\">DHVPR_TOTALBUYING_DELETE</Col></Row><Row><Col id=\"TARGET\">s_delete</Col><Col id=\"SP\">DHVPR_TOTALSALE_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SELFACNT\" type=\"STRING\" size=\"256\"/><Column id=\"YM_MAGAM\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SALEBUY\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SELFACNT\"/><Col id=\"YM_MAGAM\"/><Col id=\"NO_TAX\"/><Col id=\"TY_SALEBUY\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","240","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SELFACNT","ccfCD_CORP:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("세무단위");
            obj.set_usedecorate("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SELFACNT","staCD_SELFACNT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFSELFACNT");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_MAGAM","ccfCD_SELFACNT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("작성년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_MAGAM","staYM_MAGAM:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_enableevent("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_TAX","ctclYM_MAGAM:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("작성기수");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboNO_TAX","staNO_TAX:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsNO_TAX");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("1기예정");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclDT_FROM","ccboNO_TAX:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staWAVE","ctclDT_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclDT_TO","staWAVE:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_SALEBUY","ctclDT_TO:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("매입/매출");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("crdoTY_SALEBUY","staTY_SALEBUY:0.0","10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_innerdataset("dsTY_SALEBUY");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_direction("vertical");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","10",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid2","0","10",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SELFACNT.form.CDTextBox","value","dsSearch","CD_SELFACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclYM_MAGAM.form.TextBox","value","dsSearch","YM_MAGAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccboNO_TAX","value","dsSearch","NO_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.crdoTY_SALEBUY","value","dsSearch","TY_SALEBUY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctclDT_FROM.form.TextBox","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctclDT_TO.form.TextBox","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DHV_TOTAL.xfdl", function() {
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


        	this.dsSearch.setColumn(0, "YM_MAGAM", this.gfnGetDate().substr(0, 4));
        	this.crdoTY_SALEBUY.set_index(0);

        	var month = nexacro.toNumber(this.gfnGetDate().substr(4,2),0);

        	var selectedIndex = 0;
        	if(month >= 4 && month <= 6)
        	{
        		selectedIndex = 1;
        	}
        	else if(month >= 7 && month <= 9)
        	{
        		selectedIndex = 2;
        	}
        	else if(month >= 10 && month <= 12)
        	{
        		selectedIndex = 3;
        	}

        	this.ccboNO_TAX.set_index(selectedIndex);

        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);

        	this.dsSearch.setColumn(0, "CD_SELFACNT", this.UserInfo.LEVCD_DEPT_SELFACNT);
        	this.divSearch.form.ccfCD_SELFACNT.form.fnCodeFindLoad();

        	if(!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SELFACNT"))
        	&& !this.gfnIsNull(this.dsSearch.getColumn(0, "YM_MAGAM"))
        	&& !this.gfnIsNull(this.dsSearch.getColumn(0, "NO_TAX")))
        	{
        		this.FormBtns.Select.click();
        	}

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
        	this.btnCreate = this.gfnFormButtonAdd("btnCreate", "fnCreate");
        	this.btnDelete = this.gfnFormButtonAdd("btnDelete", "fnDelete");

        // 	this.btnCreate.set_enable(false);
        // 	this.btnDelete.set_enable(false);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;	// 법인코드
        	this.ccfCD_SELFACNT = this.divSearch.form.ccfCD_SELFACNT;
        	this.ctclYM_MAGAM = this.divSearch.form.ctclYM_MAGAM;
        	this.ccboNO_TAX = this.divSearch.form.ccboNO_TAX;
        	this.ctclDT_FROM = this.divSearch.form.ctclDT_FROM;
        	this.ctclDT_TO = this.divSearch.form.ctclDT_TO;
        	this.crdoTY_SALEBUY = this.divSearch.form.crdoTY_SALEBUY;


        	this.dxGrid = this.divData.form.objGrid;
        	this.dxGrid2 = this.divData.form.objGrid2;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_SELFACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHV_TOTALBUYING");
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DH", "DHV_TOTALSALE");

        	this.gfnGridColumnColor(this.dxGrid, "CD_DEPT_ACNT","BACK_Soke", "TY_GUBUN2 == '002'", true);
        	this.gfnGridColumnColor(this.dxGrid, "CD_DEPT_ACNT","BACK_ChongKe", "TY_GUBUN2 == '003'", true);

        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SELFACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SELFACNT", "string");
        	this.dsSelect.addColumn("YM_MAGAM", "string");
        	this.dsSelect.addColumn("ID_INSERT", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");

        	this.dsSelect2 = new Dataset();
        	this.dsSelect2.addColumn("CD_SELFACNT", "string");
        	this.dsSelect2.addColumn("YM_MAGAM", "string");
        	this.dsSelect2.addColumn("CD_CORP", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_SELFACNT", "string");
        	this.dsDelete.addColumn("YM_MAGAM", "string");

        	this.dsSelectUser = new Dataset();
        	this.dsSelectUser.addColumn("ID_USER", "string");
        	this.dsSelectUser.addColumn("CD_DEPT", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	if (!this.fnSelectValidate()) return false;

        	if(this.dsSearch.getColumn(0, "TY_SALEBUY") == "BUY") {	//매입
        		this.gfnGridBeforeSelect(this.dxGrid);

        		this.dsSelect.clearData();
        		this.dsSelect.addRow();

        		this.dsSelect.setColumn(0, "CD_SELFACNT", this.dsSearch.getColumn(0, "CD_SELFACNT"));
        		this.dsSelect.setColumn(0, "YM_MAGAM", this.dsSearch.getColumn(0, "DT_TO"));
        		this.dsSelect.setColumn(0, "ID_INSERT", this.AuthClient.ID_USER);
        		this.dsSelect.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);

        		var inData      = "b_select=dsSelect";
        		var outData     = "dsList=b_select0";

        	}else{
        		this.gfnGridBeforeSelect(this.dxGrid2);

        		this.dsSelect2.clearData();
        		this.dsSelect2.addRow();

        		this.dsSelect2.setColumn(0, "CD_SELFACNT", this.dsSearch.getColumn(0, "CD_SELFACNT"));
        		this.dsSelect2.setColumn(0, "YM_MAGAM", this.dsSearch.getColumn(0, "DT_TO"));
        		this.dsSelect2.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);

        		var inData      = "s_select=dsSelect2";
        		var outData     = "dsList2=s_select0";

        	}

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	//var inData      = "b_select=dsSelect s_select=dsSelect2";
        	//var outData     = "dsList=b_select0 dsList2=s_select0";
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
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	if(this.crdoTY_SALEBUY.value == "BUY"){
        		this.gfnExcelExport(this.dxGrid);
        	}else{
        		this.gfnExcelExport(this.dxGrid2);
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

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SELFACNT"))) {
        		this.gfnAlert("세무단위를 입력하세요!");
        		validate = false;
        	}
        	else if(this.gfnIsNull(this.dsSearch.getColumn(0, "YM_MAGAM"))) {
        		this.gfnAlert("작성년도를 입력하세요!");
        		validate = false;
        	}
        	else if(this.gfnIsNull(this.dsSearch.getColumn(0, "NO_TAX"))) {
        		this.gfnAlert("작성기수를 선택하세요!");
        		validate = false;
        	}

        	return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "select") {
        		if(this.dsSearch.getColumn(0, "TY_SALEBUY") == "BUY") {
        			this.gfnGridAfterSelect(this.dxGrid);

        			if(this.dsList.rowcount <= 1) {
        				this.btnCreate.set_enable(true);
        				this.btnDelete.set_enable(false);
        			} else {
        				this.btnCreate.set_enable(false);
        				this.btnDelete.set_enable(true);
        			}
        		} else {
        			this.gfnGridAfterSelect(this.dxGrid2);

        			if(this.dsList2.rowcount <= 1) {
        				this.btnCreate.set_enable(true);
        				this.btnDelete.set_enable(false);
        			} else {
        				this.btnCreate.set_enable(false);
        				this.btnDelete.set_enable(true);
        			}
        		}
        	}
        	else if(svcID == "create") {
        		if (errorCode == 0) {
        			this.gfnAlert("마감 작업이 완료되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "delete") {
        		if (errorCode == 0) {
        			this.gfnAlert("마감취소 작업이 완료되었습니다.");
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
        	var cdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        			break;
        		case "ccfCD_SELFACNT": // 세무단위
        			if (this.gfnIsNull(cdCorp)) {
        				this.gfnAlert("법인코드를 먼저 선택하세요.");
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        				return false;
        			}
        			dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        			break;
        	}
        	return true;
        };

         this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;

        	switch(id) {

        	case "ccfCD_CORP": // 법인코드
        		this.ccfCD_SELFACNT.form.fnCodeFindClear();

        		break;
        	}
        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {

        	if(e.oldvalue != e.newvalue) {
        		switch(e.columnid) {
        			case "YM_MAGAM" :
        				this.fnSetDt(e.newvalue, this.dsSearch.getColumn(0, "NO_TAX"));
        				break;
        			case "NO_TAX" :
        				this.fnSetDt(this.dsSearch.getColumn(0, "YM_MAGAM"), e.newvalue);
        				break;
        			case "TY_SALEBUY" :
        				if(e.newvalue == "BUY") {
        					this.dxGrid.set_visible(true);
        					this.dxGrid2.set_visible(false);
        				} else {
        					this.dxGrid.set_visible(false);
        					this.dxGrid2.set_visible(true);
        				}
        				break;
        		}

        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGrid2);

        	}
        }

        this.fnSetDt = function(ymMagam, noTax) {
        	var dtFrom;
        	var dtTo;

        	if(this.gfnIsNull(ymMagam) || this.gfnIsNull(noTax)) {

        		dtFrom = "";
        		dtTo = "";
        	} else {

        		switch(noTax) {
        			case "1" :
        				dtFrom = ymMagam + "01";
        				dtTo = ymMagam + "03";
        				break;
        			case "2" :
        				dtFrom = ymMagam + "04";
        				dtTo = ymMagam + "06";
        				break;
        			case "3" :
        				dtFrom = ymMagam + "07";
        				dtTo = ymMagam + "09";
        				break;
        			case "4" :
        				dtFrom = ymMagam + "10";
        				dtTo = ymMagam + "12";
        				break;
        			default :
        				dtFrom = "";
        				dtTo = "";
        				break;
        		}
        	}

        	this.dsSearch.setColumn(0, "DT_FROM", dtFrom);
        	this.dsSearch.setColumn(0, "DT_TO", dtTo);
        }

        this.fnCreate = function(obj,e) {
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SELFACNT"))) {
        		this.gfnAlert("세무단위를 입력하세요!");
        		return false;
        	}
        	else if(this.gfnIsNull(this.dsSearch.getColumn(0, "YM_MAGAM"))) {
        		this.gfnAlert("작성년도를 입력하세요!");
        		return false;
        	}

        	this.gfnConfirm("마감작업을 하시겠습니까?", "fnCreateCallBack");
        }

        this.fnCreateCallBack = function(strId, val) {

        	if(val == false) return;

        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("CD_SELFACNT", "string");
        	this.dsCreate.addColumn("YM_MAGAM", "string");

        	if(this.dsSearch.getColumn(0, "TY_SALEBUY") == "BUY")
        	{
        		this.dsCreate.addColumn("ID_INSERT", "string");
        	}

        	this.dsCreate.clearData();
        	this.dsCreate.addRow();

        	this.dsCreate.setColumn(0, "CD_SELFACNT", this.dsSearch.getColumn(0, "CD_SELFACNT"));
        	this.dsCreate.setColumn(0, "YM_MAGAM"   , this.dsSearch.getColumn(0, "DT_TO"));

        	var inData      = "s_create=dsCreate";

        	if(this.dsSearch.getColumn(0, "TY_SALEBUY") == "BUY")
        	{
        		this.dsCreate.setColumn(0, "ID_INSERT"  , this.AuthClient.ID_USER);
        		inData      = "b_create=dsCreate";

        	}

        	var strSvcId    = "create";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";

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

        this.fnDeleteCallBack = function(strId, val) {

        	if(val == false) return;

        	this.dsDelete.clearData();
        	this.dsDelete.addRow();

        	this.dsDelete.setColumn(0, "CD_SELFACNT", this.dsSearch.getColumn(0, "CD_SELFACNT"));
        	this.dsDelete.setColumn(0, "YM_MAGAM"	, this.dsSearch.getColumn(0, "DT_TO"));

        	var inData      = "s_delete=dsDelete";
        	if(this.dsSearch.getColumn(0, "TY_SALEBUY") == "BUY")
        	{
        		inData      = "b_delete=dsDelete";
        	}

        	var strSvcId    = "delete";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
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

        this.fnDelete = function(obj,e) {
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SELFACNT"))) {
        		this.gfnAlert("세무단위를 입력하세요!");
        		return false;
        	}
        	else if(this.gfnIsNull(this.dsSearch.getColumn(0, "YM_MAGAM"))) {
        		this.gfnAlert("작성년도를 입력하세요!");
        		return false;
        	}

        	this.gfnConfirm("마감 취소 작업을 하시겠습니까?", "fnDeleteCallBack");
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.crdoTY_SALEBUY.addEventHandler("onitemchanged",this.fnSetCombo,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHV_TOTAL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
