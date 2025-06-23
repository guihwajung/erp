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
            this.set_titletext("손익계산서");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHFPR_PL_SELECT_FORDEPT</Col></Row><Row><Col id=\"TARGET\">selectHeader</Col><Col id=\"SP\">DHFPR_PL_SELECT_FORDEPT_HEADER</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHFPR_PL_UPDATE</Col></Row><Row><Col id=\"TARGET\">selectYmMagam</Col><Col id=\"SP\">DHXPR_ACNTUNIT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_CORE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SEARCH\" type=\"STRING\" size=\"256\"/><Column id=\"YM_MAGAM\" type=\"STRING\" size=\"256\"/><Column id=\"YM_MAGAM2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_CORE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">상세</Col></Row><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">요약</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SEARCH", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">A</Col><Col id=\"DS_CODE\">누계</Col></Row><Row><Col id=\"CD_CODE\">B</Col><Col id=\"DS_CODE\">기간</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYmMagam", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHeader", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","10.0",null,"45","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_ORG","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_DEPT_ORG:0.0","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","0.0","staCD_DEPT_ORG:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_SchLabelE");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:0.0","staCD_DEPT_ORG:10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("crdoTY_SEARCH","ccfCD_DEPT:20","staCD_DEPT_ORG:10.0","104","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsTY_SEARCH");
            obj.set_direction("vertical");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_CORE","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("사용구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboYN_CORE","staYN_CORE:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsYN_CORE");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_ZERO","ccboYN_CORE:20","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("0 제외");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("N");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdoCD_CURR","chkYN_ZERO:25","10","120","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_visible("false");
            var divSearch_form_rdoCD_CURR_innerdataset = new nexacro.NormalDataset("divSearch_form_rdoCD_CURR_innerdataset", obj);
            divSearch_form_rdoCD_CURR_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">KRW</Col><Col id=\"datacolumn\">KRW</Col></Row><Row><Col id=\"codecolumn\">SGD</Col><Col id=\"datacolumn\">SGD</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_rdoCD_CURR_innerdataset);
            obj.set_text("KRW");
            obj.set_value("KRW");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_MAGAM","crdoTY_SEARCH:84","staCD_DEPT_ORG:-23","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("회계년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_MAGAM","staYM_MAGAM:0","staCD_DEPT_ORG:-23","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_WORK","ctclYM_MAGAM:0.0","staCD_DEPT_ORG:10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("~");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_MAGAM2","staDT_WORK:0.0","staCD_DEPT_ORG:10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_visible("false");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccboYN_CORE","value","dsSearch","YN_CORE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.crdoTY_SEARCH","value","dsSearch","TY_SEARCH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ctclYM_MAGAM.form.TextBox","value","dsSearch","YM_MAGAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ctclYM_MAGAM2.form.TextBox","value","dsSearch","YM_MAGAM2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.chkYN_ZERO","value","dsSearch","YN_ZERO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.rdoCD_CURR","value","dsSearch","CD_CURR");
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
        this.registerScript("DHF_PLDEPT.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);
        	this.dsSearch.setColumn(0, "YN_CORE", "N");
        	this.dsSearch.setColumn(0, "TY_SEARCH", "A");
        	//this.dsSearch.setColumn(0, "YN_ZERO", "Y");
        	this.dsSearch.setColumn(0, "YN_ZERO", "N");

        	var sYmMagam = this.AuthClient.YM_MAGAM_MONTH1;
        	this.dsSearch.setColumn(0, "YM_MAGAM", sYmMagam);

        	//this.dsSearch.setColumn(0, "CD_CURR", "KRW");

        	this.dsSearch.setColumn(0, "CD_DEPT", this.AuthClient.LEVCD_DEPT_UPPER);
        	this.ccfCD_DEPT.form.fnCodeFindLoad();

        	if (nexacro.toNumber(this.FormInfo.GR_SEARCH) > 1) {
        		this.ccfCD_CORP.set_enable(false);
        	}

        	// 회계년월 셋팅
        	//this.fnGetYmMagam();
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
        	//this.btnPL2 = this.gfnFormButtonAdd("PL2", "fnPL2");
        	this.btnAccountSelect = this.gfnFormButtonAdd("AccountSelect", "fnAccountSelect");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;
        	this.ccboYN_CORE = this.divSearch.form.ccboYN_CORE;
        	this.crdoTY_SEARCH = this.divSearch.form.crdoTY_SEARCH;
        	this.ctclYM_MAGAM = this.divSearch.form.ctclYM_MAGAM;
        	this.ctclYM_MAGAM2 = this.divSearch.form.ctclYM_MAGAM2;
        	this.staDT_WORK = this.divSearch.form.staDT_WORK;
        	this.chkYN_ZERO = this.divSearch.form.chkYN_ZERO;
        	//this.rdoCD_CURR = this.divSearch.form.rdoCD_CURR;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHF_PL_FORDEPT");
        	this.dxGrid.sort = "false";

        	//this.fnsetGridCssCellProperty();

        	this.dxGrid.addEventHandler("oncelldblclick", this.fnGrid_Celldblclick, this);

        	this.ccfCD_DEPT.CodeFindName = "DHX_CFACNTUNIT";	// DHX_CFBALANCE_ACNTUNIT
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        };

        this.fnsetGridCssCellProperty = function() {
        	var nCellIdxAM_CURRENT = this.dxGrid.getBindCellIndex("body", "AM_CURRENT");

        	var sGetProperty = this.dxGrid.getCellProperty( "body", nCellIdxAM_CURRENT, "cssclass" );

        	var sSetPropertyAM_CURRENT = sGetProperty.replace(": '')", ": AM_CURRENT < 0 ? 'Red' : '')");

        	this.dxGrid.setCellProperty( "body", nCellIdxAM_CURRENT, "cssclass" , sSetPropertyAM_CURRENT);

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YM_MAGAM", "string");
        	this.dsSelect.addColumn("YN_CHECK", "string");
        	this.dsSelect.addColumn("YN_ZERO", "string");
        	//this.dsSelect.addColumn("CD_CURR", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_DEPT_ACNT", "string");
        	this.dsUpdate.addColumn("YM_MAGAM", "string");
        	this.dsUpdate.addColumn("CD_PL", "string");
        	this.dsUpdate.addColumn("DS_PRINT", "string");
        	this.dsUpdate.addColumn("ID_TRANS", "string");

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
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "YM_MAGAM", this.dsSearch.getColumn(0, "YM_MAGAM"));
        	this.dsSelect.setColumn(0, "YN_CHECK", this.dsSearch.getColumn(0, "YN_CORE"));
        	this.dsSelect.setColumn(0, "YN_ZERO", this.dsSearch.getColumn(0, "YN_ZERO"));

        	var strSvcId    = "selectHeader";
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

        //데이터 조회 처리
        this.fnDataSelect = function()
        {
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
        						callBackFnc);   // 통신방법 정의 [생략가능]
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
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsUpdate.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT"));
        				this.dsUpdate.setColumn(nrow, "YM_MAGAM", this.dsSearch.getColumn(0, "YM_MAGAM"));
        				this.dsUpdate.setColumn(nrow, "CD_PL", this.dsList.getColumn(i, "CD_PL"));
        				this.dsUpdate.setColumn(nrow, "DS_PRINT", this.dsList.getColumn(i, "DS_PRINT"));
        				this.dsUpdate.setColumn(nrow, "ID_TRANS", this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsUpdate.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate";
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드가 입력되지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}

        	else
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_MAGAM"))) {
        		this.fnVaidateCallback = function() {
        			this.ctclYM_MAGAM.form.TextBox.setFocus();
        		}
        		this.gfnAlert("회계년월이 입력되지 않았습니다.", "fnVaidateCallback");
        		return false;
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
        	else if(svcID == "selectHeader") {
        		if (errorCode == 0) {
        			//그리드 데이터 셋팅 작업
        			this.fnGridHeaderSetting();

        			//데이터 조회 처리
        			this.fnDataSelect();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == "selectYmMagam") {
        		var sTySearch = this.dsSearch.getColumn(0, "TY_SEARCH");	// A누계 B기간
        		var sYmMagam = this.gfnGetDate().substring(0, 6);
        		var sYmMagam2 = sYmMagam;
        		if(this.dsYmMagam.rowcount > 0){
        			sYmMagam = this.dsYmMagam.getColumn(0, "YM_MAGAM");
        			sYmMagam2 = sYmMagam.substr(0, 4) + "01";
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var sCdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        	var idSabun = this.AuthClient.ID_USER;
        	var grSerch = this.FormInfo.GR_SEARCH;

        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function ( id , codefindData ){
        	var arr = codefindData;
        	switch(id) {
        		case "ccfCD_CORP":
         			if (arr.length > 0) {
        				//var sCdCorp = arr[0]["CD_CORP"];
        				this.fnGetYmMagam();
        			}
        			//this.ccfCD_DEPT.form.fnCodeFindClear();
        		break;
        	}
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_Celldblclick = function(obj,e)
        {
        	var column = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, e.cell);
        	this.fnAccountSelectPopup(column, e.cell);
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fnAccountSelect =  function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var nIndex = this.dxGrid.getCellPos();
        	var column = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, nIndex);

        	this.fnAccountSelectPopup(column, nIndex);
        }

        this.fnAccountSelectPopup = function(column, nIndex) {
            trace(" nIndex=>" + nIndex);
        	trace(" CD_ACNT1=>" + this.dsList.getColumn(this.dsList.rowposition, "CD_ACNT1"));
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if(this.dsList.getColumn(this.dsList.rowposition, "CD_ACNT1") == ""  ){
        		this.gfnAlert("하위항목을 선택하세요. ");
        		return;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_MAGAM"))) {
        		this.gfnAlert("회계년월을 입력하세요.");
        		return;
        	}

        	var param = {};
        	if (( nIndex > 6) )
        		{
        			param.CD_DEPT_ACNT = column ;
        		} else {
        			param.CD_DEPT_ACNT = this.dsSearch.getColumn(0, "CD_CORP");
        			param.DS_DEPT_ACNT = this.dsSearch.getColumn(0, "DS_CORP");
        		}
        // 	param.CD_DEPT_ACNT = this.dsSearch.getColumn(0, "CD_DEPT");
        // 	param.DS_DEPT_ACNT = this.dsSearch.getColumn(0, "DS_DEPT");
        	param.CD_CORP_REC = this.dsSearch.getColumn(0, "CD_CORP");
        	param.DS_CORP_REC = this.dsSearch.getColumn(0, "DS_CORP");
        	param.CD_ACCOUNT = this.dsList.getColumn(this.dsList.rowposition, "CD_ACNT1");
        	param.DS_ACCOUNT = this.dsList.getColumn(this.dsList.rowposition, "DS_ACNT");

        	param.DT_MAGAM = this.dsSearch.getColumn(0, "YM_MAGAM").substr(0, 4) + "0101";
        	param.DT_MAGAM2 = this.gfnGetLastDate(this.dsSearch.getColumn(0, "YM_MAGAM") + "01");
        	param.TY_VENDOR = "";
        	param.CD_VENDOR = "";
        	param.DS_VENDOR = "";

        	this.gfnFormOpen("DHE", "DHE_ACCOUNTSELECT_PW", "", param);
        };

        // 회계년월 가져오기
        this.fnGetYmMagam = function() {

        	return;

        	this.dsSelectYmMagam = new Dataset();
        	this.dsSelectYmMagam.addColumn("TY_GUBUN", "string");
        	this.dsSelectYmMagam.addColumn("CN_ROW", "string");
        	this.dsSelectYmMagam.addColumn("VALUE", "string");
        	this.dsSelectYmMagam.addColumn("MIN_VALUE", "string");
        	this.dsSelectYmMagam.addColumn("YN_SLIPACCEPT", "string");
        	this.dsSelectYmMagam.addColumn("CD_CORP", "string");
        	this.dsSelectYmMagam.addColumn("YN_USE", "string");
        	this.dsSelectYmMagam.addColumn("GR_DEPT_ACNT", "string");
        	this.dsSelectYmMagam.addColumn("ID_USER", "string");
        	this.dsSelectYmMagam.addColumn("GR_SEARCH", "string");
        	this.dsSelectYmMagam.addColumn("CD_DEPT", "string");

        	this.dsSelectYmMagam.clearData();
        	this.dsSelectYmMagam.addRow();
        	this.dsSelectYmMagam.setColumn(0, "TY_GUBUN", "0");
        	this.dsSelectYmMagam.setColumn(0, "CN_ROW", 100);
        	//this.dsSelectYmMagam.setColumn(0, "VALUE", this.UserInfo.LEVCD_DEPT_ACNT_DOWN);
        	this.dsSelectYmMagam.setColumn(0, "MIN_VALUE", "");
        	this.dsSelectYmMagam.setColumn(0, "YN_SLIPACCEPT", "Y");
        	this.dsSelectYmMagam.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelectYmMagam.setColumn(0, "YN_USE", "Y");

        	var strSvcId    = "selectYmMagam";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectYmMagam=dsSelectYmMagam";
        	var outData     = "dsYmMagam=selectYmMagam0";
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

        //그리드 헤더 셋팅
        this.fnGridHeaderSetting = function ()
        {
        	var colBase = this.dxGrid.getBindCellIndex("body", "TY_TITLENUM");	//  컬럼 인덱스
        	var cols = 0; // merge 되면서 cell index가 조정된다.

        	this.dxGrid.set_enableredraw(false);
        	this.dsList.set_enableevent(false);

        	//컬럼 삭제
        	for(var i=0;i<this.dsHeader.rowcount;i++){
        		//데이터셋 컬럼 삭제 처리
        		this.dsList.deleteColumn(this.dsHeader.getColumn(i, "CD_DEPT"));
        	}

        	var colCnt = this.dxGrid.getCellCount("body");

        	//그리드 컬럼 삭제 처리(초기화용)
        	var delCnt = 0, delIdx = 0;
        	for(var i=0;i<colCnt;i++){
        		if(i > colBase){
        			delIdx = ((colCnt-1)-delCnt);
        			this.dxGrid.deleteContentsCol("body", delIdx, false);
        			delCnt++;
        		}
        	}

        	//trace(this.dsHeader.saveXML());

        	var colIdx = (colBase+1);

        	var cellIndex = colIdx;

        	var arrCdDept = [];
        	var arrDsDept = [];

        	//헤더 컬럼 데이터
        	for(var h=0;h<this.dsHeader.rowcount;h++){

        		//계정 컬럼 추가(데이터셋)
        	    this.dsList.addColumn(this.dsHeader.getColumn(h, "CD_DEPT"), "BIGDECIMAL");
        		//그리드 컬럼 추가(계 제외)
        		this.dxGrid.appendContentsCol("body");

        		//this.dxGrid.setCellProperty("body", cellIndex, "text", "bind:"+this.dsHeader.getColumn(h, "CD_TITLE"));	//바인딩 처리
        		this.dxGrid.setCellProperty("body", cellIndex, "text", "bind:"+this.dsHeader.getColumn(h, "CD_DEPT"));	//바인딩 처리
        		this.dxGrid.setCellProperty("body", cellIndex, "displaytype", "mask");
        		this.dxGrid.setCellProperty("body", cellIndex, "maskeditformat", "#,###");
        		this.dxGrid.setCellProperty("body", cellIndex, "cssclass", "expr:dataset.getRowLevel(currow) == 1 ? 'subtotal': nx_flag == '#' ? 'filter' : (TY_TITLENUM=='L1') ? 'BACK_ReadOnly' : ''");
        		this.dxGrid.setCellProperty("body", cellIndex, "edittype", "expr:nx_flag=='#'?'text':'none'");


        		this.dxGrid.setCellProperty("head", cellIndex, "text", "bind:"+this.dsHeader.getColumn(h, "DS_DEPT"));
        		this.dxGrid.setCellProperty("summ", cellIndex, "text", "expr:dataset.getSum('"+this.dsHeader.getColumn(h, "CD_DEPT")+"')");
        		this.dxGrid.setCellProperty("summ", cellIndex, "displaytype", "mask");
        		this.dxGrid.setCellProperty("summ", cellIndex, "maskeditformat", "#,###");
        		this.dxGrid.setFormatColProperty(cellIndex, "size", 120); 		//컬럼 사이즈

        		//헤더 셋팅용 데이터 담기
        		arrCdDept[arrCdDept.length] = this.dsHeader.getColumn(h, "CD_DEPT");
        		arrDsDept[arrDsDept.length] = this.dsHeader.getColumn(h, "DS_DEPT");

        		if(colIdx != cellIndex) {
        			cellIndex = (cellIndex+1);
        		}

        		var rtn = this.dxGrid.mergeContentsCell("head", 0, cellIndex, 0, cellIndex+1, false);
        		if(rtn > -1) {
        			this.dxGrid.setCellProperty("head", rtn, "text", this.dsList.getColumn(i,"DS_PRINT"));
        			cols = cols + 1;
        		}

        		colIdx ++;
        		cellIndex++;
        	}

        	//헤더 텍스트 처리
        	var HeaderIdx = (colBase+1);
        	var totCnt = arrCdDept.length;
        	for(var i=0;i<totCnt;i++){
        		this.dxGrid.setCellProperty( "head", (HeaderIdx), "text", arrDsDept[i]);
        		this.dxGrid.setCellProperty( "head", (HeaderIdx+totCnt), "text", arrCdDept[i]);

        		HeaderIdx++;
        	}

        	// 바인딩 및 사이즈 처리
        	startIdx = (colBase+1);
        	endIdx = startIdx;

        	this.dsList.set_enableevent(true);
        	this.dxGrid.set_enableredraw(true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.crdoTY_SEARCH.addEventHandler("onitemchanged",this.divSearch_rdoTY_SEARCH_onitemchanged,this);
            this.divSearch.form.ccboYN_CORE.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHF_PLDEPT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
