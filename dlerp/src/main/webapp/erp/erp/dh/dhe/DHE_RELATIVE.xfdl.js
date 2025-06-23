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
            this.set_titletext("관계사 채권/채무 거래내역");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHEPR_VENDOR_CLAIM_DEBT_SELECT</Col></Row><Row><Col id=\"SP\">DHEPR_VENDOR_CLAIM_DEBT_HEADER_SELECT</Col><Col id=\"TARGET\">selectHeader</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DHEPR_VENDOR_CLAIM_IC_SELECT</Col></Row><Row><Col id=\"TARGET\">selectHeader2</Col><Col id=\"SP\">DHEPR_VENDOR_CLAIM_IC_HEADER_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHeader", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"YN_RELATED\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BOND\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"CD_DEPT_ACNT\"/><Col id=\"CD_VENDOR\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCORP","sta00:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccfCORP:0.0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","staYM_WORK:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ctclDT_TO:0.0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_ACNT","sta01:0.0","10.0","259","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","0","sta00:10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("거래처");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","sta02:0.0","sta00:10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_RELATE","ccfCD_VENDOR:20","sta00:10.0","117","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("관계사 여부");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdoTYPE","chkYN_RELATE:0.0","sta00:10.0","330","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divSearch_form_rdoTYPE_innerdataset = new nexacro.NormalDataset("divSearch_form_rdoTYPE_innerdataset", obj);
            divSearch_form_rdoTYPE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">B</Col><Col id=\"datacolumn\">채권/채무</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_rdoTYPE_innerdataset);
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_DEPT_ACNT.form.CDTextBox","value","dsSearch","CD_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.chkYN_RELATE","value","dsSearch","YN_RELATED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.rdoTYPE","value","dsSearch","TY_BOND");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHE_RELATIVE.xfdl", function() {
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

        	this.ccfCORP.setFocus();
        	//작업년월(현재일자)
        	this.ctclDT_TO.set_value(this.gfnGetDate());
        	//법인코드 세션에 코드로 셋팅
        	this.ccfCORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	this.ccfCORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);

        	this.dsSearch.setColumn(0, "CD_DEPT_ACNT", this.AuthClient.LEVCD_DEPT_UPPER);
        	this.ccfCD_DEPT_ACNT.form.fnCodeFindLoad();

        	//기본 채권/채무로
        	// B	채권/채무
        	// I	수입/비용
        	this.rdoTYPE.set_value("B");
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel

        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnNoRef = this.gfnFormButtonAdd("NoRef", "fnNoRef");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCORP = this.divSearch.form.ccfCORP;
        	this.ctclDT_TO = this.divSearch.form.ctclDT_TO;
        	this.ccfCD_DEPT_ACNT = this.divSearch.form.ccfCD_DEPT_ACNT;
        	this.ccfCD_VENDOR = this.divSearch.form.ccfCD_VENDOR;
        	this.chkYN_RELATE = this.divSearch.form.chkYN_RELATE;
        	this.rdoTYPE = this.divSearch.form.rdoTYPE;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_DEPT_ACNT.CodeFindName = "DHX_CFACNTUNIT";
        	this.ccfCD_DEPT_ACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	//거래처
         	this.ccfCD_VENDOR.CodeFindName = "DHX_CFALLVENDOR_CODEFIND";
         	this.ccfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHE_RELATIVE");
        	//this.dxGrid.set_selecttype("cell");

        	//검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_Valuechanged, this);

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");
        	this.dsSelect.addColumn("YN_RELATED", "string");
        	this.dsSelect.addColumn("TY_BOND", "string");
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
        	this.dsSelect.setColumn(0, "CD_CORP"		, this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "DT_TO"			, this.dsSearch.getColumn(0, "DT_TO"));
        	this.dsSelect.setColumn(0, "CD_DEPT_ACNT"	, this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        	this.dsSelect.setColumn(0, "CD_VENDOR"		, this.dsSearch.getColumn(0, "CD_VENDOR"));
        	this.dsSelect.setColumn(0, "YN_RELATED"		, (this.chkYN_RELATE.value == "N" ? "" : "Y"));
        	this.dsSelect.setColumn(0, "TY_BOND"		, this.dsSearch.getColumn(0, "TY_BOND"));	// B:채권/채무 I:수입/비용

        // 	if(this.rdoTYPE.value == "1"){	//수입/비용일 경우
        // 		inData      = "selectHeader2=dsSelect";
        // 		outData     = "dsHeader=selectHeader20";
        // 	}

        	var strSvcId    = "header";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectHeader=dsSelect";
        	var outData     = "dsHeader=selectHeader0";
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

        	if (this.gfnIsNull(this.ccfCORP.form.CDTextBox.text)) {
        		this.gfnAlert("법인코드가 입력되지 않았습니다.");
        		this.ccfCORP.form.CDTextBox.setFocus();
        		validate = false;
        	}

        	if (this.gfnIsNull(this.ctclDT_TO.value)) {
        		this.gfnAlert("기준일자 입력되지 않았습니다.");
        		this.ctclDT_TO.setFocus();
        		validate = false;
        	}

        	if (this.gfnIsNull(this.ccfCD_DEPT_ACNT.form.CDTextBox.text)) {
        		this.gfnAlert("귀속부서가 입력되지 않았습니다.");
        		this.ccfCD_DEPT_ACNT.form.CDTextBox.setFocus();
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
        	if(svcID == "header"){
        		//그리드 데이터 셋팅 작업
        		this.fnGridDataSetting();

        		//데이터 조회 처리
        		this.fnDataSelect();
        	} else if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	switch(id) {
        		case "ccfCORP":	//법인코드
        			this.ccfCD_DEPT_ACNT.form.fnCodeFindClear();
        			this.ccfCD_VENDOR.form.fnCodeFindClear();
        		break;
        	}
        }

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var cdCorp = this.ccfCORP.form.CDTextBox.value;
        	switch(id) {
        		case "ccfCORP":		//법인코드
        			dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        		break;
        		case "ccfCD_DEPT_ACNT":		//귀속부서
        			if (!this.gfnIsNull(cdCorp)) {
        				dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");			//상위부서
        				dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "");			//전표발행여부
        				dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);		//법인코드
        				dsUserParam.setColumn(nrow, "YN_USE"		, "Y");			//사용여부
        				dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");			//현장/본사여부
        				dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER", this.AuthClient.LEVCD_DEPT_UPPER);
        				dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        				dsUserParam.setColumn(nrow, "GR_SEARCH"     , this.FormInfo.GR_SEARCH);
        				dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);
        			}else{
        				this.gfnAlert("법인코드는 필수입력 값입니다.");
        				return false;
        			}
        		break;
        		case "ccfCD_VENDOR":	//거래처
        			if (!this.gfnIsNull(cdCorp)) {
        				dsUserParam.setColumn(nrow, "CD_CORP" , cdCorp);
        			}else{
        				this.gfnAlert("법인코드는 필수입력 값입니다.");
        				return false;
        			}

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
        //데이터 조회 처리
        this.fnDataSelect = function()
        {
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";

        	if(this.rdoTYPE.value == "1"){	//수입/비용일 경우
        		inData      = "select2=dsSelect";
        		outData     = "dsList=select20";
        	}

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	//var inData      = "select=dsSelect";
        	//var outData     = "dsList=select0";
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

        //그리드 셋팅
        this.fnGridDataSetting = function ()
        {
        	var colNO_SJC = this.dxGrid.getBindCellIndex("body", "NO_SJC");	//사업자번호 컬럼 인덱스
        	var cols = 0; // merge 되면서 cell index가 조정된다.

        	this.dxGrid.set_enableredraw(false);
        	this.dsList.set_enableevent(false);

        	//컬럼 삭제
        	for(var i=0;i<this.dsHeader.rowcount;i++){
        // 		this.dsList.deleteColumn("DEBT_AM_BAL");
        // 		this.dsList.deleteColumn("BOND_AM_BAL");
        		//데이터셋 컬럼 삭제 처리
        		this.dsList.deleteColumn(this.dsHeader.getColumn(i, "CD_TITLE"));
        	}

        	var colCnt = this.dxGrid.getCellCount("body");

        	//그리드 컬럼 삭제 처리(초기화용)
        	var delCnt = 0, delIdx = 0;
        	for(var i=0;i<colCnt;i++){
        		if(i > colNO_SJC){
        			delIdx = ((colCnt-1)-delCnt);
        			this.dxGrid.deleteContentsCol("body", delIdx, false);
        			delCnt++;
        		}
        	}

        	var tyBond = "";
        	var colIdx = (colNO_SJC)+1;

        	var bTotCnt = this.dsHeader.getCaseCount("TY_CD_BOND == 'B'");
        	var dTotCnt = this.dsHeader.getCaseCount("TY_CD_BOND == 'D'");
        	var cellIndex = colIdx;

        	var arrTyBond = [], arrCdAccount = [], arrDsAccount = [];

        	//헤더 컬럼 데이터
        	for(var h=0;h<this.dsHeader.rowcount;h++){
        		tyBond = this.dsHeader.getColumn(h, "TY_NM_BOND");

        		//계정 컬럼 추가(데이터셋)
        		//this.dsList.addColumn(this.dsHeader.getColumn(h, "CD_TITLE"), "BIGDECIMAL");
        		this.dsList.addColumn(this.dsHeader.getColumn(h, "DS_ACCOUNT"), "BIGDECIMAL");

        		//그리드 컬럼 추가(계 제외)
        		this.dxGrid.appendContentsCol("body");

        		//this.dxGrid.setCellProperty("body", cellIndex, "text", "bind:"+this.dsHeader.getColumn(h, "CD_TITLE"));	//바인딩 처리
        		this.dxGrid.setCellProperty("body", cellIndex, "text", "bind:"+this.dsHeader.getColumn(h, "DS_ACCOUNT"));	//바인딩 처리
        		this.dxGrid.setCellProperty("body", cellIndex, "displaytype", "mask");
        		this.dxGrid.setCellProperty("body", cellIndex, "maskeditformat", "#,##0");
        		this.dxGrid.setCellProperty("body", cellIndex, "cssclass", "expr:dataset.getRowLevel(currow) == 1 ? 'subtotal': nx_flag == '#' ? 'filter' : ''");
        		this.dxGrid.setCellProperty("body", cellIndex, "edittype", "expr:nx_flag=='#'?'text':'none'");

        		this.dxGrid.setCellProperty("head", cellIndex, "text", tyBond);
        		this.dxGrid.setCellProperty("summ", cellIndex, "text", "expr:dataset.getSum('"+this.dsHeader.getColumn(h, "DS_ACCOUNT")+"')");
        		this.dxGrid.setCellProperty("summ", cellIndex, "displaytype", "mask");
        		this.dxGrid.setCellProperty("summ", cellIndex, "maskeditformat", "#,###");

        		this.dxGrid.setFormatColProperty(cellIndex, "size", 140); 		//컬럼 사이즈

        		//헤더 셋팅용 데이터 담기
        		arrTyBond[arrTyBond.length] 	  = this.dsHeader.getColumn(h, "TY_NM_BOND");
        		arrCdAccount[arrCdAccount.length] = this.dsHeader.getColumn(h, "CD_ACCOUNT");
        		arrDsAccount[arrDsAccount.length] = this.dsHeader.getColumn(h, "DS_ACCOUNT");

        		if(colIdx != cellIndex) {
        			cellIndex = (cellIndex+1);
        			arrTyBond[arrTyBond.length]  = this.dsHeader.getColumn(h, "TY_NM_BOND");
        		}

        		var rtn = this.dxGrid.mergeContentsCell("head", 0, cellIndex, 0, cellIndex+1, cellIndex - cols, false);
        		if(rtn > -1) {
        			this.dxGrid.setCellProperty("head", rtn, "text", objDataSet.getColumn(i,"DS_CORP"));
        			cols = cols + 1;
        		}

        		colIdx ++;
        		cellIndex++;
        	}

        	//헤더 텍스트 처리
        	var HeaderIdx = (colNO_SJC)+1;
        	var totCnt = arrTyBond.length;
        	for(var i=0;i<totCnt;i++){
        		this.dxGrid.setCellProperty( "head", HeaderIdx, "text", arrTyBond[i]);
        		this.dxGrid.setCellProperty( "head", (HeaderIdx + totCnt), "text", arrDsAccount[i]);
        		this.dxGrid.setCellProperty( "head", (HeaderIdx + totCnt + totCnt), "text", arrCdAccount[i]);

        		HeaderIdx++;
        	}

        	//채권 바인딩 및 사이즈 처리
        	if(bTotCnt > 0){
        		//채권 헤더 상단 병합
        		this.dxGrid.mergeContentsCell("head", 0, (colNO_SJC+1), 0, (colNO_SJC+bTotCnt), (colNO_SJC+1), false);
        	}

        	//채무 바인딩 및 사이즈 처리
        	if(dTotCnt > 0){

        		var startIdx = 0, endIdx = 0;
        		if(bTotCnt == 0){
        			startIdx = (colNO_SJC+1);
        			endIdx = startIdx;
        		}else{
        			startIdx = (colNO_SJC+bTotCnt)+1;
        			endIdx = (startIdx+dTotCnt)-1;
        		}

        		//채무 헤더 상단 병합
        		//this.dxGrid.mergeContentsCell("head", 0, startIdx, 0, endIdx, startIdx, false);
        		this.dxGrid.mergeContentsCell("head", 0, startIdx, 0, endIdx, (colNO_SJC+2), false);
        	}

        	this.dsList.set_enableevent(true);
        	this.dxGrid.set_enableredraw(true);
        };

        //검색조건 변경 이벤트
        this.dsSearch_Valuechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        //잔액원장총괄 조회
        this.fnNoRef = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

         	var nIndex = this.dxGrid.getCellPos();
         	var colId = this.dxGrid.getCellProperty("body", nIndex, "text");
        // 	var findColId = colId.substr(6,colId.length);
        //
        // 	if(!nexacro.isNumeric(findColId)) return;	//계정항목이 아닐경우 리턴
        //
        // 	var fRow = this.dsHeader.findRow("CD_ACCOUNT", findColId);
        //
        // 	var cd_account = findColId;
        // 	var ds_account = this.dsHeader.getColumn(fRow, "DS_ACCOUNT");

        	var sNmAcnt = colId.replace("bind:","");
        	var nRowClk = this.dsHeader.findRow("DS_ACCOUNT", sNmAcnt);
        	var cd_account = this.dsHeader.getColumn(nRowClk, "CD_ACCOUNT");
        	var ds_account = this.dsHeader.getColumn(nRowClk, "DS_ACCOUNT");

        	if(this.gfnIsNull(cd_account)) return;	//계정항목이 아닐경우 리턴


        	//trace("nIndex->" + nIndex + "\n colId->" + colId+ "\n cd_account->" + cd_account + "\n ds_account ->" + ds_account);

        	param.CD_CORP_REC = this.ccfCORP.form.CDTextBox.value;
        	param.DS_CORP_REC = this.ccfCORP.form.DSTextBox.value;
        	param.CD_CORP = this.ccfCORP.form.CDTextBox.value;
        	param.DS_CORP = this.ccfCORP.form.DSTextBox.value;
        	param.CD_DEPT_ACNT = this.ccfCD_DEPT_ACNT.form.CDTextBox.value;
        	param.DS_DEPT_ACNT = this.ccfCD_DEPT_ACNT.form.DSTextBox.value;
        	param.CD_ACCOUNT = cd_account;
        	param.DS_ACCOUNT = ds_account;
        	param.DT_MAGAM = this.gfnGetFirstDate(this.ctclDT_TO.value.substr(0,4)+"01");
        	param.DT_MAGAM2 = this.ctclDT_TO.value;
        	param.TY_VENDOR = "VENDOR";
        	param.CD_VENDOR = this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR");
        	param.DS_VENDOR = this.dsList.getColumn(this.dsList.rowposition, "DS_VENDOR");

        	this.gfnFormOpen("DHE", "DHE_ACCOUNTSELECT_PW", "", param);
        };

        this.divData_objGrid_onheadclick = function(obj,e)
        {
        //  	trace("col >> "+e.col);
        //  	trace("cell >> "+e.cell);
        //  	trace("row >> "+e.row);
        //  	trace("subrow >> "+e.subrow);
        };

        this.divData_objGrid_oncellclick = function(obj,e)
        {
        //  	trace("col >> "+e.col);
        //  	trace("cell >> "+e.cell);
        //  	trace("row >> "+e.row);

        // DS_CORP
        // CD_VENDOR
        // DS_VENDOR
        // NO_SJC
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.rdoTYPE.addEventHandler("onitemchanged",this.divSearch_rdoTYPE_onitemchanged,this);
            this.divData.form.objGrid.addEventHandler("onheadclick",this.divData_objGrid_onheadclick,this);
            this.divData.form.objGrid.addEventHandler("oncellclick",this.divData_objGrid_oncellclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsHeader.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };
        this.loadIncludeScript("DHE_RELATIVE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
