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
            this.set_titletext("변경계약단가확정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWAPR_HDSILHENGCOMP_SELECT_NEW</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWAPR_HDSILHENGDISKINDLG_UPDATE</Col></Row><Row><Col id=\"TARGET\">execute</Col><Col id=\"SP\">DMAPR_PO_INS_DANGA_APPROVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_ACTURE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HADOCONT\" type=\"STRING\" size=\"256\"/><Column id=\"SN_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_INS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"YN_ACTURE\">현행</Col><Col id=\"NO_HADOCONT\"/><Col id=\"SN_SEQ\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_ACTURE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">전체</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"DS_CODE\">현행</Col><Col id=\"CD_CODE\">현행</Col></Row><Row><Col id=\"DS_CODE\">당초</Col><Col id=\"CD_CODE\">당초</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","sta00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("FitToContents").set("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_CHAIYONG00","ccfCD_SITE:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("현행구분");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_ACTURE","staTY_CHAIYONG00:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsYN_ACTURE");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_visible("false");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ccfCD_SITE:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("외주계약번호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_HADOCONT","sta01:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("FitToContents").set("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtSN_SEQ","ccfNO_HADOCONT:0.0","10.0","41","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_CHAIYONG01","txtSN_SEQ:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("차수");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","staTY_CHAIYONG01:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("거래처");
            obj.set_textDecoration("none");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","staCD_VENDOR:0.0","10.0","185","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DMX_CFVENDORINS_SITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_INS","ccfCD_VENDOR:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_INS","ctxtCD_INS:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
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
            obj = new BindItem("item2","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.cboYN_ACTURE","value","dsSearch","YN_ACTURE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfNO_HADOCONT.form.CDTextBox","value","dsSearch","NO_HADOCONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.txtSN_SEQ","value","dsSearch","SN_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctxtCD_INS","value","dsSearch","CD_INS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DWA_HDSILHENGCOMP.xfdl", function() {
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
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().NO_HADOCONT)) {
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		this.dsSearch.setColumn(0, "NO_HADOCONT", this.getOwnerFrame().NO_HADOCONT);
        		this.divSearch.form.ccfNO_HADOCONT.form.DSTextBox.set_value(this.getOwnerFrame().DS_HADOCONT);
        		this.dsSearch.setColumn(0, "SN_SEQ", this.getOwnerFrame().SN_SEQ);

        		this.FormBtns.Select.click();
        	}

        	if(this.getOwnerFrame().POPUPTYPE == "READONLY")
        	{
        		this.divSearch.form.ccfCD_SITE.set_enable(false);
        		this.divSearch.form.ccfNO_HADOCONT.set_enable(false);
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
        	this.btnINSView = this.gfnFormButtonAdd("btnINSView", "fnINSView");
        	this.btnINSApp = this.gfnFormButtonAdd("btnINSApp", "fnINSApp");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.cboYN_ACTURE = this.divSearch.form.cboYN_ACTURE;
        	this.ccfNO_HADOCONT = this.divSearch.form.ccfNO_HADOCONT;
        	this.ccfCD_VENDOR = this.divSearch.form.ccfCD_VENDOR;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfNO_HADOCONT.CodeFindName = "DCX_CFCONTRACT_03";

        	this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfNO_HADOCONT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_VENDOR.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWA_HDSILHENGCOMP", "DS_COST", "GR_COST");

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
        	this.dsSelect.addColumn("NO_HADOCONT", "string");
        	//this.dsSelect.addColumn("YN_ACTURE", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("NO_HADOCONT", "string");
        	this.dsSave.addColumn("CD_COST", "string");
        	this.dsSave.addColumn("QN_TT_HADO", "bigdecimal");
        	this.dsSave.addColumn("UP_HDMATERIAL", "bigdecimal");
        	this.dsSave.addColumn("UP_HDLABOR", "bigdecimal");
        	this.dsSave.addColumn("UP_HDCOST", "bigdecimal");
        	this.dsSave.addColumn("UP_TT_HADO", "bigdecimal");
        	this.dsSave.addColumn("AM_TT_HADO", "bigdecimal");
        	this.dsSave.addColumn("UP_HDEQUIP", "bigdecimal");

        	this.dsExecute = new Dataset();
        	this.dsExecute.addColumn("NO_CONT", "string");
        	this.dsExecute.addColumn("CD_SITE", "string");
        	this.dsExecute.addColumn("CD_VENDOR", "string");
        	this.dsExecute.addColumn("CD_INS", "string");
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
        	this.dsSelect.setColumn(0, "NO_HADOCONT", this.dsSearch.getColumn(0, "NO_HADOCONT"));
        	//this.dsSelect.setColumn(0, "YN_ACTURE", this.dsSearch.getColumn(0, "YN_ACTURE"));

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
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "NO_HADOCONT", this.dsSearch.getColumn(0, "NO_HADOCONT"));
        				this.dsSave.setColumn(nrow, "CD_COST", this.dsList.getColumn(i, "CD_COST"));
        				this.dsSave.setColumn(nrow, "QN_TT_HADO", this.dsList.getColumn(i, "QN_TT_HADO"));
        				this.dsSave.setColumn(nrow, "UP_HDMATERIAL", this.dsList.getColumn(i, "UP_HDMATERIAL"));
        				this.dsSave.setColumn(nrow, "UP_HDLABOR", this.dsList.getColumn(i, "UP_HDLABOR"));
        				this.dsSave.setColumn(nrow, "UP_HDCOST", this.dsList.getColumn(i, "UP_HDCOST"));
        				this.dsSave.setColumn(nrow, "UP_TT_HADO", this.dsList.getColumn(i, "UP_TT_HADO"));
        				this.dsSave.setColumn(nrow, "AM_TT_HADO", this.dsList.getColumn(i, "AM_TT_HADO"));
        				this.dsSave.setColumn(nrow, "UP_HDEQUIP", this.dsList.getColumn(i, "UP_HDEQUIP"));
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
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0,"NO_HADOCONT"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfNO_HADOCONT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("외주계약번호는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
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
        	else if(svcID == "save") {
        		if (errorCode == 0) {
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
        	if (id == "ccfNO_HADOCONT") {
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
         			this.gfnAlert("현장코드를 먼저 입력하세요.");
         			return false;
         		}
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0,"CD_SITE"));

        	}else if(id == "ccfCD_VENDOR") {
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
         			this.gfnAlert("현장코드를 먼저 입력하세요.");
         			return false;
         		}
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	}

        	return true;

        };


         this.fnAfterCDTextChanged = function(id, codeFindData) {
           if(id == "ccfCD_VENDOR") {
              var arr = codeFindData;

              if(arr.length > 0)
              {
                 this.dsSearch.setColumn(0, "CD_INS", arr[0]["CD_INS"]);
                 this.divSearch.form.ctxtDS_INS.set_value(arr[0]["DS_INS"]);
              }
              else
              {
                 this.dsSearch.setColumn(0, "CD_INS", "");
                 this.divSearch.form.ctxtDS_INS.set_value("");
              }
           }
           else if(id == "ccfCD_SITE") {
              // 현장코드 변경시 초기화
              this.ccfNO_HADOCONT.form.fnCodeFindClear();
           }
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		if(e.columnid == "CD_SITE" || e.columnid == "NO_HADOCONT" || e.columnid == "NO_CONT")
        		{
        			this.gfnSetFormStatus(this);	// 폼상태 초기화
        			this.gfnGridClear(this.dxGrid);
        		}

        		if(e.columnid == "CD_SITE"){
        			this.dsSearch.setColumn(0,"NO_HADOCONT", "");
        			this.divSearch.form.ccfNO_HADOCONT.form.DSTextBox.set_value("");

        			this.dsSearch.setColumn(0, "CD_VENDOR", "");
        			this.divSearch.form.ccfCD_VENDOR.form.DSTextBox.set_value("");

        			this.dsSearch.setColumn(0, "CD_INS", "");
        			this.divSearch.form.ctxtDS_INS.set_value("");
        		}
        	}
        };

        this.dsList_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "UP_HDMATERIAL"){		// 재료비 단가 변경시
        		// 재료비 금액 = 단가 * 발주수량
        		this.dsList.setColumn(e.row, "AM_HDMATERIAL", nexacro.toNumber(this.dsList.getColumn(e.row, "UP_HDMATERIAL"),0) * nexacro.toNumber(this.dsList.getColumn(e.row, "QN_TT_HADO"),0));
        		//this.dsListSub.setColumn(e.row, "AM_VAT", nexacro.floor(nexacro.toNumber(this.dsListSub.getColumn(e.row, "AM_SUPPLY"),0) * 0.1));

        		// 발주단가, 발주금액 자동산식
        		this.fnAutoProc(e.row);
        	}else if(e.columnid == "UP_HDLABOR"){	// 노부비 단가 변경시
        		// 노무비: 금액 = 단가 * 발주수량
        		this.dsList.setColumn(e.row, "AM_HDLABOR", nexacro.toNumber(this.dsList.getColumn(e.row, "UP_HDLABOR"),0) * nexacro.toNumber(this.dsList.getColumn(e.row, "QN_TT_HADO"),0));

        		// 발주단가, 발주금액 자동산식
        		this.fnAutoProc(e.row);
        	}else if(e.columnid == "UP_HDEQUIP"){	// 증기비비 단가 변경시
        		// 증기비: 금액 = 단가 * 발주수량
        		this.dsList.setColumn(e.row, "AM_HDEQUIP", nexacro.toNumber(this.dsList.getColumn(e.row, "UP_HDEQUIP"),0) * nexacro.toNumber(this.dsList.getColumn(e.row, "QN_TT_HADO"),0));

        		// 발주단가, 발주금액 자동산식
        		this.fnAutoProc(e.row);
        	}else if(e.columnid == "UP_HDCOST"){	// 경비 단가 변경시
        		// 경비 :  금액 = 단가 * 발주수량
        		this.dsList.setColumn(e.row, "AM_HDCOST", nexacro.toNumber(this.dsList.getColumn(e.row, "UP_HDCOST"),0) * nexacro.toNumber(this.dsList.getColumn(e.row, "QN_TT_HADO"),0));

        		// 발주단가, 발주금액 자동산식
        		this.fnAutoProc(e.row);
        	}
        };

        // DsCalc 컬럼값이 null이 아닐때 처리(DS_CALC 값인 수식을 각각 해당 CD_TYPE 값을 찾아서 치환해서 eval()함수를 이용해서 계산처리한값을 셋팅함)
        this.fnAutoProc = function(nRow) {
        	// 발주단가 = 재료비 단가 + 노무비 단가 + 경비 단가
        	this.dsList.setColumn(nRow, "UP_TT_HADO", nexacro.toNumber(this.dsList.getColumn(nRow, "UP_HDMATERIAL"),0) + nexacro.toNumber(this.dsList.getColumn(nRow, "UP_HDLABOR"),0) + nexacro.toNumber(this.dsList.getColumn(nRow, "UP_HDEQUIP"),0) + nexacro.toNumber(this.dsList.getColumn(nRow, "UP_HDCOST"),0));
        	this.dsList.setColumn(nRow, "AM_TT_HADO", nexacro.toNumber(this.dsList.getColumn(nRow, "AM_HDMATERIAL"),0) + nexacro.toNumber(this.dsList.getColumn(nRow, "AM_HDLABOR"),0) + nexacro.toNumber(this.dsList.getColumn(nRow, "AM_HDEQUIP"),0) + nexacro.toNumber(this.dsList.getColumn(nRow, "AM_HDCOST"),0));
        }

        this.fnINSView = function(obj, e) {

        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DMA_INSDANGA", "", param);
        }


        this.fnINSApp = function(obj, e) {
        	if(!this.fnINSAppValidate()) return;

            this.gfnConfirm("단가계약적용을 하시겠습니까?", "fnINSApp_callback");
        }

        this.fnINSAppValidate = function()
        {
        	var validate = true;

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")))
        	{
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}

        		validate = false;
        		this.gfnAlert("현장코드를 입력해주십시오.", "fnVaidateCallback");
        	}
        	else if(this.gfnIsNull(this.dsSearch.getColumn(0, "NO_HADOCONT")))
        	{
        		this.fnVaidateCallback = function() {
        			this.ccfNO_HADOCONT.form.CDTextBox.setFocus();
        		}

        		validate = false;
        		this.gfnAlert("외주계약번호를 입력해주십시오.", "fnVaidateCallback");
        	}
        	/*
        	else if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_VENDOR")))
        	{
        		this.fnVaidateCallback = function() {
        			this.ccfCD_VENDOR.form.CDTextBox.setFocus();
        		}

        		validate = false;
        		this.gfnAlert("거래처를 입력해주십시오.", "fnVaidateCallback");
        	}
        	*/
        	return validate;
        }

        this.fnINSApp_callback = function(strId, val) {
        		if (val == false) {
        			return false;
        		}

                this.dsExecute.clearData();
                var nrow = this.dsExecute.addRow();

        		this.dsExecute.setColumn(nrow, "NO_CONT", this.dsSearch.getColumn(0, "NO_HADOCONT"));
        		this.dsExecute.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsExecute.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        		this.dsExecute.setColumn(nrow, "CD_INS", this.dsSearch.getColumn(0, "CD_INS"));

                var strSvcId = "execute";
                var strSvcType = "save";
                var inProc = "_dsProc";
                var inData = "execute=dsExecute";
                var outData = "";
                var strArg = "";
                var callBackFnc = "fnCallback";

                this.gfnTransaction(strSvcId, // transaction을 구분하기 위한 svc id값
                    strSvcType, // transaction을 요청할 구분
                    inProc, // Procedure 정보 Dataset 이름
                    inData, // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
                    outData, // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
                    strArg, // 입력갑스로 보낼 arguments, strFormData="20120607"
                    callBackFnc); // 통신방법 정의 [생략가능]

        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.staTY_CHAIYONG01.addEventHandler("onclick",this.divSearch_staTY_CHAIYONG01_onclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWA_HDSILHENGCOMP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
