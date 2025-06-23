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
            this.set_titletext("내역등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWAPR_SILHENGCOMPARE_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWAPR_SILHENGREGEXCEL_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DWAPR_SILHENGREGEXCEL_DELETE</Col></Row><Row><Col id=\"TARGET\">insertSAP</Col><Col id=\"SP\">DWAPR_SAPWBS_INSERT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SILHENG\" type=\"STRING\" size=\"256\"/><Column id=\"YN_CHANGE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_RP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BIMOK\" type=\"STRING\" size=\"256\"/><Column id=\"YN_AMT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"NO_SILHENG\"/><Col id=\"YN_CHANGE\">N</Col><Col id=\"CD_RP\"/><Col id=\"YN_AMT\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTemp", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","sta00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("실행번호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_SILHENG","staCD_CORP:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP00","ccfNO_SILHENG:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("표준집계코드");
            obj.set_textDecoration("none");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_RP","staCD_CORP00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_CHANGE","ccfNO_SILHENG:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("변경분");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_DOKUB","chkYN_CHANGE:0.0","10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("도급");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chk_GISUNGREQ","ccfNO_SILHENG:0.0","10.0","175","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("도급실행금액 0원 제외");
            obj.set_value("1");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_treeinitstatus("collapse,all");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfNO_SILHENG.form.CDTextBox","value","dsSearch","NO_SILHENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_RP.form.CDTextBox","value","dsSearch","CD_RP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.chkYN_CHANGE","value","dsSearch","YN_CHANGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.chk_GISUNGREQ","value","dsSearch","YN_AMT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DWA_SILHENGCOMPAREITEM_Back20220112.xfdl", function() {
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
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().NO_SILHENG)) {
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);	// 현장코드
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);	// 현장코드명
        		this.dsSearch.setColumn(0, "NO_SILHENG", this.getOwnerFrame().NO_SILHENG);	// 실행번호
        		this.divSearch.form.ccfNO_SILHENG.form.DSTextBox.set_value(this.getOwnerFrame().DS_SILHENG);	 // 실행번호명

        		this.FormBtns.Select.click();
        	}

        	//this.divSearch_chkYN_DOKUB_onchanged(this.divSearch.form.chkYN_DOKUB, {postvalue:this.divSearch.form.chkYN_DOKUB.value});

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
        	this.btn1 = this.gfnFormButtonAdd("SilhengregItem", "fnSilhengregItem");
        	//this.btn2 = this.gfnFormButtonAdd("btnExcelDown", "fnExcelDown");
        	this.btn3 = this.gfnFormButtonAdd("btnExcelUp", "fnExcelUp");
        	//this.btn4 = this.gfnFormButtonAdd("btnDeleteAll", "fnDeleteAll");
        	this.btn5 = this.gfnFormButtonAdd("btnCostTuja", "fnCostTuja");
        	//this.btn6 = this.gfnFormButtonAdd("btnRequest", "fnRequest");
        	//this.btn7 = this.gfnFormButtonAdd("btnRequestCancel", "fnRequestCancel");
        	this.btn8 = this.gfnFormButtonAdd("btnSAP", "fnSAP");
        	this.btn9 = this.gfnFormButtonAdd("btnWBSUpload", "fnWBSUpload");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfNO_SILHENG = this.divSearch.form.ccfNO_SILHENG;
        	this.ccfCD_RP = this.divSearch.form.ccfCD_RP;
        	this.chkYN_CHANGE = this.divSearch.form.chkYN_CHANGE;

        	this.dxGrid = this.divData.form.objGrid

        	/* hjy
        	this.ccfCD_SYSTEM = this.divSearch.form.ccfCD_SYSTEM;
        	this.ccfCD_DEPT_ORG = this.divSearch.form.ccfCD_DEPT_ORG;
        	this.ctxtDS_UPDEPT = this.divSearch.form.ctxtDS_UPDEPT;
        	this.dxGrid = this.divData.form.objGrid;
        	*/
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfNO_SILHENG.CodeFindName = "DWX_CFNO_SILHENG_01";
        	this.ccfCD_RP.CodeFindName = "DWX_CFRP";

        	this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfNO_SILHENG.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_RP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	//this.ccfTY_KONG_PRO.AfterCDTextChanged = "ccfTY_KONG_PRO_AfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWA_SILHENGCOMPAREITEM", "DS_COST", "GR_COST");
        	//this.dxGrid.addEventHandler("oncelldblclick", this.fnGrid_oncelldblclick, this);
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_onselectchanged, this);

        	// 셀 수정가능 여부
        	//this.dxGrid.EnterCell = "fnGrid_EnterCell";

        	// 셀 변경 후 이벤트
        	//this.dxGrid.AfterEdit = "fnGrid_AfterEdit";

        	// 그리드 코드파인드 설정
        	//this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	// 전체체크박스 체크/해제 이벤트
        	//this.dxGrid.AfterAllCheck = "fnGrid_AfterAllCheck";

        	// BUTTON, BUTTON-IN 처리
        	//this.dxGrid.ExpandUp = "fnGrid_ExpandUp";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("NO_SILHENG", "string");
        	this.dsSelect.addColumn("YN_CHANGE", "string");
        	this.dsSelect.addColumn("YN_QNITEM", "string");
        	this.dsSelect.addColumn("TY_COST", "string");
        	this.dsSelect.addColumn("CD_RP", "string");
        	this.dsSelect.addColumn("YN_AMT", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("NO_SILHENG", "string");
        	this.dsSave.addColumn("CD_COST", "string");
        	this.dsSave.addColumn("CD_DKCOST", "string");
        	this.dsSave.addColumn("DS_COST", "string");
        	this.dsSave.addColumn("SZ_SIZE", "string");
        	this.dsSave.addColumn("DS_UNIT", "string");
        	this.dsSave.addColumn("CD_GBIMOK", "string");
        	this.dsSave.addColumn("QN_TT_DOKUB", "bigdecimal");
        	this.dsSave.addColumn("UP_TT_DOKUB", "bigdecimal");
        	this.dsSave.addColumn("AM_TT_DOKUB", "bigdecimal");
        	this.dsSave.addColumn("QN_TT_SILHENG", "bigdecimal");
        	this.dsSave.addColumn("UP_TT_SILHENG", "bigdecimal");
        	this.dsSave.addColumn("AM_TT_SILHENG", "bigdecimal");
        	this.dsSave.addColumn("QN_EXSILHENG", "bigdecimal");
        	this.dsSave.addColumn("UP_EXSILHENG", "bigdecimal");
        	this.dsSave.addColumn("AM_EXSILHENG", "bigdecimal");
        	this.dsSave.addColumn("RM_BIGO", "string");
        	this.dsSave.addColumn("CD_STDITEM", "string");
        	this.dsSave.addColumn("CD_RP", "string");
        	this.dsSave.addColumn("CD_STD", "string");
        	this.dsSave.addColumn("UP_MATERIAL", "bigdecimal");
        	this.dsSave.addColumn("UP_LABOR", "bigdecimal");
        	this.dsSave.addColumn("UP_OUTSOURCING", "bigdecimal");
        	this.dsSave.addColumn("UP_EQUIPMENT", "bigdecimal");
        	this.dsSave.addColumn("UP_COST", "bigdecimal");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("ID_USER", "string");
        	this.dsDelete.addColumn("CD_SITE", "string");
        	this.dsDelete.addColumn("NO_SILHENG", "string");

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

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "NO_SILHENG", this.dsSearch.getColumn(0, "NO_SILHENG"));
        	this.dsSelect.setColumn(0, "YN_QNITEM", "");
        	this.dsSelect.setColumn(0, "TY_COST", "");
        	this.dsSelect.setColumn(0, "CD_RP", this.dsSearch.getColumn(0, "CD_RP"));
        	this.dsSelect.setColumn(0, "YN_AMT", this.dsSearch.getColumn(0, "YN_AMT"));

        	if(this.dsSearch.getColumn(0, "YN_CHANGE") == "N") {
        		this.dsSelect.setColumn(0, "YN_CHANGE", "");
        	}else{
        		this.dsSelect.setColumn(0, "YN_CHANGE", this.dsSearch.getColumn(0, "YN_CHANGE"));
        	}

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
        	var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current

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
        	// 그리드 필수항목 체크``
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
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));			// 현장코드 검색조건값 셋팅
        				this.dsSave.setColumn(nrow, "NO_SILHENG", this.dsSearch.getColumn(0, "NO_SILHENG"));	// 실행번호 검색조건값 셋팅
        				this.dsSave.setColumn(nrow, "CD_COST", this.dsList.getColumn(i, "CD_COST"));
        				this.dsSave.setColumn(nrow, "CD_DKCOST", this.dsList.getColumn(i, "CD_DKCOST"));
        				this.dsSave.setColumn(nrow, "DS_COST", this.dsList.getColumn(i, "DS_COST"));
        				this.dsSave.setColumn(nrow, "SZ_SIZE", this.dsList.getColumn(i, "SZ_SIZE"));
        				this.dsSave.setColumn(nrow, "DS_UNIT", this.dsList.getColumn(i, "DS_UNIT"));
        				this.dsSave.setColumn(nrow, "CD_GBIMOK", this.dsList.getColumn(i, "CD_GBIMOK"));
        				this.dsSave.setColumn(nrow, "QN_TT_DOKUB", this.dsList.getColumn(i, "QN_TT_DOKUB"));
        				this.dsSave.setColumn(nrow, "UP_TT_DOKUB", this.dsList.getColumn(i, "UP_TT_DOKUB"));
        				this.dsSave.setColumn(nrow, "AM_TT_DOKUB", this.dsList.getColumn(i, "AM_TT_DOKUB"));
        				this.dsSave.setColumn(nrow, "QN_TT_SILHENG", this.dsList.getColumn(i, "QN_TT_SILHENG"));
        				this.dsSave.setColumn(nrow, "UP_TT_SILHENG", this.dsList.getColumn(i, "UP_TT_SILHENG"));
        				this.dsSave.setColumn(nrow, "AM_TT_SILHENG", this.dsList.getColumn(i, "AM_TT_SILHENG"));
        				this.dsSave.setColumn(nrow, "QN_EXSILHENG", this.dsList.getColumn(i, "QN_EXSILHENG"));
        				this.dsSave.setColumn(nrow, "UP_EXSILHENG", this.dsList.getColumn(i, "UP_EXSILHENG"));
        				this.dsSave.setColumn(nrow, "AM_EXSILHENG", this.dsList.getColumn(i, "AM_EXSILHENG"));
        				this.dsSave.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsSave.setColumn(nrow, "CD_STDITEM", this.dsList.getColumn(i, "CD_STDITEM"));
        				this.dsSave.setColumn(nrow, "CD_RP", this.dsList.getColumn(i, "CD_RP"));
        				this.dsSave.setColumn(nrow, "CD_STD", this.dsList.getColumn(i, "CD_STD"));
        				this.dsSave.setColumn(nrow, "UP_MATERIAL", this.dsList.getColumn(i, "UP_MATERIAL"));
        				this.dsSave.setColumn(nrow, "UP_LABOR", this.dsList.getColumn(i, "UP_LABOR"));
        				this.dsSave.setColumn(nrow, "UP_OUTSOURCING", this.dsList.getColumn(i, "UP_OUTSOURCING"));
        				this.dsSave.setColumn(nrow, "UP_EQUIPMENT", this.dsList.getColumn(i, "UP_EQUIPMENT"));
        				this.dsSave.setColumn(nrow, "UP_COST", this.dsList.getColumn(i, "UP_COST"));
        				break;
        		}
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        		return validate;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"NO_SILHENG"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfNO_SILHENG.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("실행번호는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        		return validate;
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
        		//alert(this.dsList.rowcount);
        		this.gfnGridAfterSelect(this.dxGrid);
        		this._gfnGridTreeOpen(this.dxGrid, 1);

        		this.fnBtnCheckAll();
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "insertSAP")
        	{
        		if (errorCode == 0) {
        			this.gfnAlert("SAP내역등록을 완료하였습니다.");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfNO_SILHENG") {

         		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
         			this.gfnAlert("현장코드를 먼저 입력하세요.");
         			return false;
         		}
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));	// 현장코드
        	}
        	if (id == "ccfCD_RP") {

        		dsUserParam.setColumn(nrow, "CD_SITE", this.divSearch.form.ccfCD_RP.form.CDTextBox.value);	// 현장코드
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_SITE") {
        		// 현장코드 변경시 초기화
        		this.ccfNO_SILHENG.form.fnCodeFindClear();
        	}
        }


        // 코드파인드 값의 기본값 코드,명 정보 외에 값을 내려받을때 사용하는 함수
        this.ccfNO_SILHENG_AfterCDTextChanged = function(id) {
        	// 코드,명칭 외 추가 컬럼 처리
        	var arr = this.ccfNO_SILHENG.form.SelectedData;

        	/* hjy
        	var ds_updept = "";
        	if (arr.length > 0) {
        		ds_updept = arr[0]["DS_UPDEPT"];
        	}

        	this.ctxtDS_UPDEPT.set_value(ds_updept);
        	*/
        }



        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_oncelldblclick = function(obj,e)
        {
        	//if tree cell column
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, e.cell);
        	if(colnm == "DS_COST")
        	{
        		var nCellIdx = obj.currentcell;
        		obj.setCellProperty("body", nCellIdx, "edittype", "normal");
        		obj.setCellPos(e.cell);
        	}
        }

        this.fnGrid_onselectchanged = function(obj,e)
        {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, e.cell);
        	if(colnm == "DS_COST")
        	{
        		var nCellIdx = obj.currentcell;
        		if (this.gfnGetFlag(this.dsList, this.dsList.rowposition) == "I") {
        			obj.setCellProperty("body", nCellIdx, "edittype", "normal");
        		} else {
        			obj.setCellProperty("body", nCellIdx, "edittype", "tree");
        		}
        	}

        	if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		this.fnBtnCheckAll();
        		obj.oldrow = -1;
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fnSilhengregItem = function(obj,e) {
        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.NO_SILHENG = this.dsSearch.getColumn(0, "NO_SILHENG");
        	param.DS_SILHENG = this.divSearch.form.ccfNO_SILHENG.form.DSTextBox.text;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWA_SILHENGREGITEM", "", param);
        }

        //표준양식다운로드
        this.fnExcelDown = function(obj,e) {
        	if (!this.fnSelectValidate()) return false;
        	var param = {};
        	param.CD_SITE =this.divSearch.form.ccfCD_SITE.form.CDTextBox.text;
        	param.DS_SITE =  this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.NO_SILHENG = this.divSearch.form.ccfNO_SILHENG.form.CDTextBox.text;
        	param.DS_SILHENG = this.divSearch.form.ccfNO_SILHENG.form.DSTextBox.text;
        	if(!this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_COST"))){
        		param.CD_COST = this.dsList.getColumn(this.dsList.rowposition, "CD_COST");
        	}else{
        		param.CD_COST = "";
        	}

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWA_FROMIEMS", "", param);
        }

        //표준양식업로드
        this.fnExcelUp = function(obj,e) {
        	if (!this.fnSelectValidate()) return false;
        	var param = {};
        	param.CD_SITE =this.divSearch.form.ccfCD_SITE.form.CDTextBox.text;
        	param.DS_SITE =  this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.NO_SILHENG = this.divSearch.form.ccfNO_SILHENG.form.CDTextBox.text;
        	param.DS_SILHENG = this.divSearch.form.ccfNO_SILHENG.form.DSTextBox.text;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWA_FROMEXCEL", "", param);
        }


        //실행내역일괄삭제
        this.fnDeleteAll = function(obj,e) {
           var cdSite = this.dsSearch.getColumn(0, "CD_SITE");
           var dsSite = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
           var noSilheng = this.dsSearch.getColumn(0, "NO_SILHENG");
           var dsSilheng = this.divSearch.form.ccfNO_SILHENG.form.DSTextBox.text;
           this.gfnConfirm("현장코드 : ["+cdSite+"]"+dsSite+"\r\n예산번호 : ["+noSilheng+"] 가설예산["+dsSilheng+"]\r\n실행예산내역을 일괄삭제 하시겠습니까?", "fnRunDeleteAll");
        }

        this.fnRunDeleteAll = function(strId, val) {
        	if(val == true) {
        	  //this.gfnGridDel(this.dxGrid);
              this.dsDelete.clearData();
              var nrow = this.dsDelete.addRow();

              this.dsDelete.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
              this.dsDelete.setColumn(nrow, "CD_SITE", this.ccfCD_SITE.form.CDTextBox.value);
              this.dsDelete.setColumn(nrow, "NO_SILHENG", this.ccfNO_SILHENG.form.CDTextBox.value);

              var strSvcId    = "save";
              var strSvcType  = "save";
              var inProc      = "_dsProc";
              var inData      = "delete=dsDelete";
              var outData     = "";
              var strArg      = "";
              var callBackFnc = "fnCallback";

              this.gfnTransaction( strSvcId ,    // transaction을 구분하기 위한 svc id값
                             strSvcType ,    // transaction을 요청할 구분
                             inProc,         // Procedure 정보 Dataset 이름
                             inData ,       // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
                             outData ,       // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
                             strArg,       // 입력값으로 보낼 arguments, strFormData="20120607"
                             callBackFnc); // 통신방법 정의 [생략가능]

        				}
        }

        //예산현황
        this.fnCostTuja = function(obj, e){

        	if(!this.gfnGridIsRow(this.dxGrid)){return false;}

        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE =  this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.CD_COST = this.dsList.getColumn(this.dsList.rowposition, "CD_COST");
        	param.CD_DKCOST = this.dsList.getColumn(this.dsList.rowposition, "CD_DKCOST");
        	param.DS_COST = this.dsList.getColumn(this.dsList.rowposition, "DS_COST");
        	param.SZ_SIZE = this.dsList.getColumn(this.dsList.rowposition, "SZ_SIZE");
        	param.DS_UNIT = this.dsList.getColumn(this.dsList.rowposition, "DS_UNIT");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWX_COSTTUJA", "", param);
        };

        //실행예산승인요청
        this.fnRequest = function(obj,e) {

        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.NO_SILHENG = this.dsSearch.getColumn(0, "NO_SILHENG");
        	param.DS_SILHENG =  this.divSearch.form.ccfNO_SILHENG.form.DSTextBox.text;
        	param.CD_RP = this.dsSearch.getColumn(0, "CD_RP");
        	param.TY_APPROVAL = 1;
        	param.RM_BIGO = this.dsList.getColumn(this.dsList.rowposition, "RM_BIGO");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWA_SILHENGAPPREQ", "fnCallbackApprove", param, 400, 360);
        }

        //실행예산요청취소
        this.fnRequestCancel = function(obj,e) {

        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.NO_SILHENG = this.dsSearch.getColumn(0, "NO_SILHENG");
        	param.DS_SILHENG =  this.divSearch.form.ccfNO_SILHENG.form.DSTextBox.text;
        	param.CD_RP = this.dsSearch.getColumn(0, "CD_RP");
        	param.TY_APPROVAL = 0;
        	param.RM_BIGO = this.dsList.getColumn(this.dsList.rowposition, "RM_BIGO");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWA_SILHENGAPPREQ", "fnCallbackApprove", param, 400, 360);
        }

        this.fnSAP = function(obj,e) {
        	if (!this.fnSelectValidate()) return false;

        	this.dsInsertSAP = new Dataset();
        	this.dsInsertSAP.addColumn("CD_SITE", "string");
        	this.dsInsertSAP.addColumn("NO_SILHENG", "string");
        	this.dsInsertSAP.addColumn("CD_SITE_SAP", "string");

        	this.dsInsertSAP.addRow();
        	this.dsInsertSAP.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsInsertSAP.setColumn(0, "NO_SILHENG", this.dsSearch.getColumn(0, "NO_SILHENG"));
        	this.dsInsertSAP.setColumn(0, "CD_SITE_SAP", this.dsSearch.getColumn(0, "CD_SITE"));

        	if (this.dsInsertSAP.rowcount == 0) return;

        	var strSvcId    = "insertSAP";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insertSAP=dsInsertSAP";
        	var outData     = "";
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

        //WBS업로드
        this.fnWBSUpload = function(obj,e) {
        	if (!this.fnSelectValidate()) return false;
        	var param = {};
        	param.CD_SITE =this.divSearch.form.ccfCD_SITE.form.CDTextBox.text;
        	param.DS_SITE =  this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.NO_SILHENG = this.divSearch.form.ccfNO_SILHENG.form.CDTextBox.text;
        	param.DS_SILHENG = this.divSearch.form.ccfNO_SILHENG.form.DSTextBox.text;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWA_WBSUPLOAD", "", param);
        };

        // 도급 체크박스
        this.divSearch_chkYN_DOKUB_onchanged = function(obj,e)
        {
        	var QN_TT_ENG_Index = this.dxGrid.getBindCellIndex("body", "QN_TT_ENG");
        	var UP_TT_ENG_Index = this.dxGrid.getBindCellIndex("body", "UP_TT_ENG");
        	var AM_TT_ENG_Index = this.dxGrid.getBindCellIndex("body", "AM_TT_ENG");
        	var QN_TT_DOKUB_Index = this.dxGrid.getBindCellIndex("body", "QN_TT_DOKUB");
        	var UP_TT_DOKUB_Index = this.dxGrid.getBindCellIndex("body", "UP_TT_DOKUB");
        	var AM_TT_DOKUB_Index = this.dxGrid.getBindCellIndex("body", "AM_TT_DOKUB");

        	if(obj.isChecked())
        	{
        		this.dxGrid.setRealColSize("body", QN_TT_ENG_Index, 70);
        		this.dxGrid.setRealColSize("body", UP_TT_ENG_Index, 80);
        		this.dxGrid.setRealColSize("body", AM_TT_ENG_Index, 100);
        		this.dxGrid.setRealColSize("body", QN_TT_DOKUB_Index, 70);
        		this.dxGrid.setRealColSize("body", UP_TT_DOKUB_Index, 80);
        		this.dxGrid.setRealColSize("body", AM_TT_DOKUB_Index, 100);
        	}
        	else
        	{
        		this.dxGrid.setRealColSize("body", QN_TT_ENG_Index, 0);
        		this.dxGrid.setRealColSize("body", UP_TT_ENG_Index, 0);
        		this.dxGrid.setRealColSize("body", AM_TT_ENG_Index, 0);
        		this.dxGrid.setRealColSize("body", QN_TT_DOKUB_Index, 0);
        		this.dxGrid.setRealColSize("body", UP_TT_DOKUB_Index, 0);
        		this.dxGrid.setRealColSize("body", AM_TT_DOKUB_Index, 0);
        	}
        };

        this.fnBtnCheckAll = function()
        {
        	this.gfnBtnCheck(this.btn1, this.dsList);
        	//this.gfnBtnCheck(this.btn2, this.dsList);
        	this.gfnBtnCheck(this.btn3, this.dsList);
        	this.gfnBtnCheck(this.btn4, this.dsList);
        	this.gfnBtnCheck(this.btn5, this.dsList);
        	this.gfnBtnCheck(this.btn6, this.dsList);
        	this.gfnBtnCheck(this.btn7, this.dsList);
        	this.gfnBtnCheck(this.btn8, this.dsList);
        	this.gfnBtnCheck(this.btn9, this.dsList);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.chkYN_DOKUB.addEventHandler("onchanged",this.divSearch_chkYN_DOKUB_onchanged,this);
            this.divSearch.form.chk_GISUNGREQ.addEventHandler("onchanged",this.divSearch_cchkHADOGS_GISUNGTOT_onchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWA_SILHENGCOMPAREITEM_Back20220112.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
