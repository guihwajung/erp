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
            this.set_titletext("구매요청리스트");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWZPR_PRLIST_APP_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWZPR_PR_SAVE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DAM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQ_SITE_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQ_SITE_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsID_DAM", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("2");
            obj.getSetter("AutoSet").set("false");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_DAM","ccfCD_SITE:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("담당자");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboID_DAM","staID_DAM:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsID_DAM");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_REQ_SITE","ccboID_DAM:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("발주요청일");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_REQ_SITE_FR","staDT_REQ_SITE:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_range","ctclDT_REQ_SITE_FR:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("~");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_REQ_SITE_TO","sta_range:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccboID_DAM","value","dsSearch","DAM_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_REQ_SITE_FR","value","dsSearch","DT_REQ_SITE_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclDT_REQ_SITE_TO","value","dsSearch","DT_REQ_SITE_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DWZ_PRLIST_APP.xfdl", function() {
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

        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "DT_REQ_SITE_FR", today.substr(0,6) + "01");
        	this.dsSearch.setColumn(0, "DT_REQ_SITE_TO", this.gfnGetLastDate(today.substr(0,6)));
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Save.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btn1 = this.gfnFormButtonAdd("Silhengtohado", "fnSilhengtohado");
        	//this.btn2 = this.gfnFormButtonAdd("btnOrdePlan", "fnOrdePlan");
        //	this.btn3 = this.gfnFormButtonAdd("btnHadoStatus", "fnHadoStatus");
        	this.btnAPP = this.gfnFormButtonAdd("btnAPP", "fnAPP");
        	this.btnOrdePlan = this.gfnFormButtonAdd("btnOrdePlan", "fnOrdePlan");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//this.ccfCD_SYSTEM.CodeFindName = "DZX_CFSITE"
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWZ_PRLIST_APP");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        }
        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("DAM_CODE", "string");
        	this.dsSelect.addColumn("DT_REQ_SITE_FR", "string");
        	this.dsSelect.addColumn("DT_REQ_SITE_TO", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("NO_PR", "string");
        	this.dsSave.addColumn("DS_PR", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("DS_VENDOR", "string");
        	this.dsSave.addColumn("DS_PRESIDENT", "string");
        	this.dsSave.addColumn("TY_BUSINESS", "string");
        	this.dsSave.addColumn("NO_TEL", "string");
        	this.dsSave.addColumn("NO_FAX", "string");
        	this.dsSave.addColumn("AT_ADDR", "string");
        	this.dsSave.addColumn("YN_IMSINO", "string");
        	this.dsSave.addColumn("DT_HDCONT", "string");
        	this.dsSave.addColumn("AM_PL_HADO", "bigdecimal");
        	this.dsSave.addColumn("DT_KONGSA_FROM", "string");
        	this.dsSave.addColumn("DT_KONGSA_TO", "string");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("DS_CONTMETHOD", "string");
        	this.dsSave.addColumn("DT_BAL", "string");
        	this.dsSave.addColumn("SN_SEQ", "string");

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

        	this.dsSelect.setColumn(0, "TY_WRK", "DM");
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "DAM_CODE", this.dsSearch.getColumn(0, "DAM_CODE"));
        	this.dsSelect.setColumn(0, "DT_REQ_SITE_FR", this.dsSearch.getColumn(0, "DT_REQ_SITE_FR"));
        	this.dsSelect.setColumn(0, "DT_REQ_SITE_TO", this.dsSearch.getColumn(0, "DT_REQ_SITE_TO"));

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
        	this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크
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
        				this.dsSave.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0,"CD_SITE"));
        				this.dsSave.setColumn(nrow, "NO_PR", this.dsList.getColumn(i, "NO_PR"));
        				this.dsSave.setColumn(nrow, "DS_PR", this.dsList.getColumn(i, "DS_PR"));
        				this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsSave.setColumn(nrow, "DS_VENDOR", this.dsList.getColumn(i, "DS_VENDOR"));
        				this.dsSave.setColumn(nrow, "DS_PRESIDENT", this.dsList.getColumn(i, "DS_PRESIDENT"));
        				this.dsSave.setColumn(nrow, "TY_BUSINESS", this.dsList.getColumn(i, "TY_BUSINESS"));
        				this.dsSave.setColumn(nrow, "NO_TEL", this.dsList.getColumn(i, "NO_TEL"));
        				this.dsSave.setColumn(nrow, "NO_FAX", this.dsList.getColumn(i, "NO_FAX"));
        				this.dsSave.setColumn(nrow, "AT_ADDR", this.dsList.getColumn(i, "AT_ADDR"));
        				this.dsSave.setColumn(nrow, "YN_IMSINO", this.dsList.getColumn(i, "YN_IMSINO"));
        				this.dsSave.setColumn(nrow, "DT_HDCONT", this.dsList.getColumn(i, "DT_HDCONT"));
        				this.dsSave.setColumn(nrow, "AM_PL_HADO", this.dsList.getColumn(i, "AM_PL_HADO"));
        				this.dsSave.setColumn(nrow, "DT_KONGSA_FROM", this.dsList.getColumn(i, "DT_KONGSA_FROM"));
        				this.dsSave.setColumn(nrow, "DT_KONGSA_TO", this.dsList.getColumn(i, "DT_KONGSA_TO"));
        				this.dsSave.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        				this.dsSave.setColumn(nrow, "DS_CONTMETHOD", this.dsList.getColumn(i, "TY_CONTH"));
        				this.dsSave.setColumn(nrow, "DT_BAL", this.dsList.getColumn(i, "DT_BAL"));
        				this.dsSave.setColumn(nrow, "SN_SEQ", this.dsList.getColumn(i, "SN_SEQ"));
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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
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
        // 	if (this.gfnIsNull(this.ccfCD_SITE.form.CDTextBox.text)) {
        // 		validate = false;
        // 		// Alert후 실행할 처리
        // 		this.fnVaidateCallback = function() {
        // 			this.ccfCD_SITE.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
        // 	}

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

        		this.fnBtnCheckAll();
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

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
        	 if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		this.fnBtnCheckAll();
        		obj.oldrow = -1;
        	}
        }
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
        //
        // // 외주내역작성 버튼 클릭 이벤트
        // this.fnSilhengtohado = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        // 	if(!this.gfnGridIsRow(this.dxGrid))
        // 	{
        // 		this.gfnAlert("외주계약건을 선택하세요.");
        // 		return false;
        // 	}
        //
        // 	var param = {};
        // 	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        // 	param.DS_SITE = this.ccfCD_SITE.form.DSTextBox.text;
        // 	param.NO_PR = this.dsList.getColumn(this.dsList.rowposition, "NO_PR");
        // 	param.DS_PR = this.dsList.getColumn(this.dsList.rowposition, "DS_PR");
        //
        // 	// 화면 오픈.
        // 	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        // 	// 타 모듈 화면 호출시 지정할것.
        // 	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWA_SILHENGTOPR", "", param);
        //
        // }

        // 발주요청 버튼 클릭 이벤트
        this.fnOrdePlan = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid))
        	{
        		this.gfnAlert("자재계약건을 선택하세요.");
        		return false;
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "NO_PR")))
        	{
        		this.gfnAlert("구매요청번호가 없는 건입니다.");
        		return false;
        	}

        	var param = {};
        	param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        	param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");
        	param.NO_PR = this.dsList.getColumn(this.dsList.rowposition, "NO_PR");
        	param.DS_SUBCON = this.dsList.getColumn(this.dsList.rowposition, "DS_PR");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWZ_PRITEM_APP_DETAIL", "", param);
        }

        this.fnAPP = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid))
        	{
        		this.gfnAlert("자재계약건을 선택하세요.");
        		return false;
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "NO_PR")))
        	{
        		this.gfnAlert("구매요청번호가 없는 건입니다.");
        		return false;
        	}

        	var param = {};
        	var nRow = this.dsList.rowposition;

        	param.PARAM01 = this.dsList.getColumn(nRow,"CD_SITE");
        	param.PARAM02 = this.dsList.getColumn(nRow, "NO_PR");
        	param.ID_AP = this.dsList.getColumn(nRow, "NO_ELAPDOC");	// 전자결재문서번호
        	param.YN_LINK = "N";	// 화면에서 팝업을 호출할경우 N, 링크를 통해서 화면을 오픈할경우 null 이다

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen("DMB", "DMB_ORDERPLANSR_SITE_APPROVAL", "fnAprvDialogCallback", param);

        }

         this.fnAprvDialogCallback = function(svcID, value) {
        	// 리턴값
        	if(value){
        		// 결재완료, 결재취소, 결재상신 후에는 재조회를 한다
        		this.FormBtns.Select.click();
        	}
        };

        this.fnBtnCheckAll = function()
        {
        	this.gfnBtnCheck(this.btnAPP, this.dsList);
        	this.gfnBtnCheck(this.btnOrdePlan, this.dsList);
        }


        this.fnSetCombo = function()
        {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DM");
        	this.dsCombo.setColumn(0, "CD_TYPE", "H07");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsID_DAM=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallbackCombo";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnCallbackCombo = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "combo") {
        		this.dsID_DAM.insertRow(0);
        		this.dsID_DAM.setColumn(0, "CD_CODE","");
        		this.dsID_DAM.setColumn(0, "DS_CODE","전체");

        		this.divSearch.form.ccboID_DAM.set_index(0);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWZ_PRLIST_APP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
