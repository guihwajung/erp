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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWDPR_FNDREQDPLNTB01_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWDPR_FNDREQDPLNTB01_SAVE</Col></Row><Row><Col id=\"TARGET\">select_d1</Col><Col id=\"SP\">DWDPR_FNDREQDPLNTB02_SELECT</Col></Row><Row><Col id=\"TARGET\">select_d2</Col><Col id=\"SP\">DWDPR_FNDREQDPLNTB03_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_COMMON_SELECT_01</Col></Row><Row><Col id=\"TARGET\">appno</Col><Col id=\"SP\">DZZPR_APPSTATE_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"AM_UNIT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAM_UNIT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAppNoVal", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_AP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_APPR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID_AP\"/><Col id=\"DS_APPR\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDS_SUMDESCRIPTION", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_SUMDESCRIPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_SUMDESCRIPTION\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("기준년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staAM_UNIT","ctclYM_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("금액단위");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboAM_UNIT","staAM_UNIT:0.0","10.0","99","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsAM_UNIT");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE02","ctclYM_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("결재번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtNO_ELAPDOC","staCD_SITE02:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE03","edtNO_ELAPDOC:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("결재상태");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDS_ELAPPRGS","staCD_SITE03:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,"200","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("Ⅰ. 집계표");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staMsg00",null,"0","90","25","0",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("(단위 :백만원)");
            obj.set_textDecoration("none");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","staTITLE:0",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataMiddle","0","divDataTop:5",null,"200","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataMiddle.form);
            obj.set_taborder("0");
            obj.set_text("Ⅱ. 자금소요계획(현장별)");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.divDataMiddle.addChild(obj.name, obj);

            obj = new Static("staMsg00",null,"0","90","25","0",null,null,null,null,null,this.divData.form.divDataMiddle.form);
            obj.set_taborder("1");
            obj.set_text("(단위 :백만원)");
            obj.set_textDecoration("none");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.divData.form.divDataMiddle.addChild(obj.name, obj);

            obj = new Grid("objGrid1","0","staTITLE:0",null,null,"0","0",null,null,null,null,this.divData.form.divDataMiddle.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataMiddle.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divDataMiddle:5",null,"400","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("Ⅲ. 긴급자금 소요계획(현장별)");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("staMsg00",null,"0","90","25","0",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("1");
            obj.set_text("(단위 :백만원)");
            obj.set_textDecoration("none");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGrid2","0","staTITLE:0",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccboAM_UNIT","value","dsSearch","AM_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtNO_ELAPDOC","value","dsAppNoVal","ID_AP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.edtDS_ELAPPRGS","value","dsAppNoVal","DS_APPR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DWD_FNDREQDPLNTB.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this._ROW_HEIGHT = 0;

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

        	this._ROW_HEIGHT = this.gfnGetConfig("DW" , "ROW_HEIGHT");

        	this.fnSetCombo();

        	if(!this.gfnIsNull(this.getOwnerFrame().YM_WORK))
        	{
        		this.dsSearch.setColumn(0, "YM_WORK", this.getOwnerFrame().YM_WORK.substr(0,6));
        	}
        	else
        	{
        		this.dsSearch.setColumn(0, "YM_WORK", this.gfnGetDate().substr(0,6));
        	}

        	// 20 -> 해당 Div의 Title 높이와 여백.
        	// 2 -> 선 크기.
        	// 15 + 2 -> 가로 스크롤 높이 및 선 크기.
         	this.divData.form.divDataTop.set_height(this._ROW_HEIGHT * 17 + 22 + 17);
         	this.divData.form.divDataMiddle.set_height(this._ROW_HEIGHT * 17 + 22 + 17);
         	this.divData.form.divDataBottom.set_height(this._ROW_HEIGHT * 17 + 22 + 17);

        	this.divData.form.resetScroll();
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
        	this.btnAPP = this.gfnFormButtonAdd("btnAPP", "fnAPP");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.divDataTop.form.objGrid;
        	this.dxGrid1 = this.divData.form.divDataMiddle.form.objGrid1;
        	this.dxGrid2 = this.divData.form.divDataBottom.form.objGrid2;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWD_FNDREQDPLNTB01");
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";

        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DW", "DWD_FNDREQDPLNTB02", "DS_DIV", "GR_DIV");
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DW", "DWD_FNDREQDPLNTB03");

        	// 집계표 그리드 총계row 글자 bold 처리
        	var colDS_DIV = this.dxGrid.getBindCellIndex("body", "DS_DIV");
        	var colAM_CASHOCO = this.dxGrid.getBindCellIndex("body", "AM_CASHOCO");
        	var colAM_NOTEOCO = this.dxGrid.getBindCellIndex("body", "AM_NOTEOCO");
        	var colAM_SUMOCO = this.dxGrid.getBindCellIndex("body", "AM_SUMOCO");
        	var colAM_CASHOTHCO = this.dxGrid.getBindCellIndex("body", "AM_CASHOTHCO");
        	var colAM_NOTEOTHCO = this.dxGrid.getBindCellIndex("body", "AM_NOTEOTHCO");
        	var colAM_SUMOTHCO = this.dxGrid.getBindCellIndex("body", "AM_SUMOTHCO");
        	var colAM_CASHTOT = this.dxGrid.getBindCellIndex("body", "AM_CASHTOT");
        	var colAM_NOTETOT = this.dxGrid.getBindCellIndex("body", "AM_NOTETOT");
        	var colAM_SUMTOT = this.dxGrid.getBindCellIndex("body", "AM_SUMTOT");

        	this.dxGrid.setCellProperty("summ", colDS_DIV, "font", "bold 9pt Dotum");
        	this.dxGrid.setCellProperty("summ", colAM_CASHOCO, "font", "bold 9pt Dotum");
        	this.dxGrid.setCellProperty("summ", colAM_NOTEOCO, "font", "bold 9pt Dotum");
        	this.dxGrid.setCellProperty("summ", colAM_SUMOCO, "font", "bold 9pt Dotum");
        	this.dxGrid.setCellProperty("summ", colAM_CASHOTHCO, "font", "bold 9pt Dotum");
        	this.dxGrid.setCellProperty("summ", colAM_NOTEOTHCO, "font", "bold 9pt Dotum");
        	this.dxGrid.setCellProperty("summ", colAM_SUMOTHCO, "font", "bold 9pt Dotum");
        	this.dxGrid.setCellProperty("summ", colAM_CASHTOT, "font", "bold 9pt Dotum");
        	this.dxGrid.setCellProperty("summ", colAM_NOTETOT, "font", "bold 9pt Dotum");
        	this.dxGrid.setCellProperty("summ", colAM_SUMTOT, "font", "bold 9pt Dotum");

        	// 집계표 그리드에 bold 처리
        	this.gfnGridColumnColor(this.dxGrid, "DS_DIV", "bold", "YN_BOLD == 'Y'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_CASHOCO", "bold", "YN_BOLD == 'Y'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_NOTEOCO", "bold", "YN_BOLD == 'Y'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_SUMOCO", "bold", "YN_BOLD == 'Y'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_CASHOTHCO", "bold", "YN_BOLD == 'Y'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_NOTEOTHCO", "bold", "YN_BOLD == 'Y'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_SUMOTHCO", "bold", "YN_BOLD == 'Y'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_CASHTOT", "bold", "YN_BOLD == 'Y'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_NOTETOT", "bold", "YN_BOLD == 'Y'");
        	this.gfnGridColumnColor(this.dxGrid, "AM_SUMTOT", "bold", "YN_BOLD == 'Y'");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");
        	this.dsSelect.addColumn("AM_UNIT", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("YM_WORK", "string");
        	this.dsSave.addColumn("CD_CLS", "string");
        	this.dsSave.addColumn("CD_DIV", "string");
        	this.dsSave.addColumn("AM_CASHOCO", "bigdecimal");
        	this.dsSave.addColumn("AM_NOTEOCO", "bigdecimal");
        	this.dsSave.addColumn("AM_CASHOTHCO", "bigdecimal");
        	this.dsSave.addColumn("AM_NOTEOTHCO", "bigdecimal");

        	this.dsAppNo = new Dataset();
        	this.dsAppNo.addColumn("ID_AP_TYPE", "string");
        	this.dsAppNo.addColumn("V_PARAM01", "string");
        	this.dsAppNo.addColumn("V_PARAM02", "string");
        	this.dsAppNo.addColumn("V_PARAM03", "string");
        	this.dsAppNo.addColumn("V_PARAM04", "string");
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
        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsSelect.setColumn(0, "AM_UNIT", this.dsSearch.getColumn(0, "AM_UNIT"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect select_d1=dsSelect select_d2=dsSelect";
        	var outData     = "dsList=select0 dsDS_SUMDESCRIPTION=select1 dsList1=select_d10 dsList2=select_d20";
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
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	// save SP 한개로 사용하는 경우

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			//case "I":
        			case "U":
        			//case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        				this.dsSave.setColumn(nrow, "CD_CLS", this.dsList.getColumn(i, "CD_CLS"));
        				this.dsSave.setColumn(nrow, "CD_DIV", this.dsList.getColumn(i, "CD_DIV"));
        				this.dsSave.setColumn(nrow, "AM_CASHOCO", this.dsList.getColumn(i, "AM_CASHOCO"));
        				this.dsSave.setColumn(nrow, "AM_NOTEOCO", this.dsList.getColumn(i, "AM_NOTEOCO"));
        				this.dsSave.setColumn(nrow, "AM_CASHOTHCO", this.dsList.getColumn(i, "AM_CASHOTHCO"));
        				this.dsSave.setColumn(nrow, "AM_NOTEOTHCO", this.dsList.getColumn(i, "AM_NOTEOTHCO"));
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"YM_WORK"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctclYM_WORK.form.TextBox.setFocus();
        		}
        		this.gfnAlert("기준년월을 입력하세요.", "fnVaidateCallback");
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

        		// 그리드 구분 컬럼 총계row에 명칭 셋팅
        		if(this.dsDS_SUMDESCRIPTION.rowcount > 0){
        			var colDS_DIV = this.dxGrid.getBindCellIndex("body", "DS_DIV");
        			this.dxGrid.setCellProperty("summ", colDS_DIV, "textAlign", "center");
        			this.dxGrid.setCellProperty("summ", colDS_DIV, "text", this.dsDS_SUMDESCRIPTION.getColumn(0, "DS_SUMDESCRIPTION"));
        		}

        		this.fnAppNoSelect();
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "combo") {
        		this.divSearch.form.ccboAM_UNIT.set_index(0);
        	}
        	else if(svcID == "appno") {

        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);

        	if(this.dsList.getColumn(this.dsList.rowposition, "YN_EDIT") != "Y") {
        		return false;
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
        		this.gfnGridClear(this.dxGrid1);
        		this.gfnGridClear(this.dxGrid2);
        	}
        };

        this.fnSetCombo = function()
        {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");
        	this.dsCombo.addColumn("YN_USE", "string");
        	this.dsCombo.addColumn("YN_ALL", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DW");
        	this.dsCombo.setColumn(0, "CD_TYPE", "71");
        	this.dsCombo.setColumn(0, "YN_USE", "Y");
        	this.dsCombo.setColumn(0, "YN_ALL", "N");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsAM_UNIT=combo0";
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

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		// 당사 >  현금
        		if(e.columnid == "AM_CASHOCO")
        		{
        			var am_noteoco = this.dsList.getColumn(e.row, "AM_NOTEOCO");
        			var am_cashothco = this.dsList.getColumn(e.row, "AM_CASHOTHCO");

        			this.dsList.setColumn(e.row, "AM_SUMOCO", nexacro.toNumber(e.newvalue,0) + nexacro.toNumber(am_noteoco,0));
        			this.dsList.setColumn(e.row, "AM_CASHTOT", nexacro.toNumber(e.newvalue,0) + nexacro.toNumber(am_cashothco,0));
        		}
        		// 당사 > 어음
        		else if(e.columnid == "AM_NOTEOCO")
        		{
        			var am_cashoco = this.dsList.getColumn(e.row, "AM_CASHOCO");
        			var am_noteothco = this.dsList.getColumn(e.row, "AM_NOTEOTHCO");

        			this.dsList.setColumn(e.row, "AM_SUMOCO", nexacro.toNumber(e.newvalue,0) + nexacro.toNumber(am_cashoco,0));
        			this.dsList.setColumn(e.row, "AM_NOTETOT", nexacro.toNumber(e.newvalue,0) + nexacro.toNumber(am_noteothco,0));
        		}
        		// 타사 > 현금
        		else if(e.columnid == "AM_CASHOTHCO")
        		{
        			var am_cashoco = this.dsList.getColumn(e.row, "AM_CASHOCO");

        			this.dsList.setColumn(e.row, "AM_SUMOCO", nexacro.toNumber(e.newvalue,0) + nexacro.toNumber(am_cashoco,0));
        		}
        		// 타사 > 어음
        		else if(e.columnid == "AM_NOTEOTHCO")
        		{
        			var am_noteoco = this.dsList.getColumn(e.row, "AM_NOTEOCO");

        			this.dsList.setColumn(e.row, "AM_NOTETOT", nexacro.toNumber(e.newvalue,0) + nexacro.toNumber(am_noteoco,0));
        		}
        		// 전체 > 현금
        		else if(e.columnid == "AM_CASHTOT")
        		{
        			var am_notetot = this.dsList.getColumn(e.row, "AM_NOTETOT");

        			this.dsList.setColumn(e.row, "AM_SUMTOT", nexacro.toNumber(e.newvalue,0) + nexacro.toNumber(am_notetot,0));
        		}
        		// 전체 > 어음
        		else if(e.columnid == "AM_NOTETOT")
        		{
        			var am_cashtot = this.dsList.getColumn(e.row, "AM_CASHTOT");

        			this.dsList.setColumn(e.row, "AM_SUMTOT", nexacro.toNumber(e.newvalue,0) + nexacro.toNumber(am_cashtot,0));
        		}
        	}
        };


        this.fnAPP = function(obj,e) {
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if (this.dsList.rowcount < 1) { return false; }

        	var param = {};
        	//var nRow = this.dsList.rowposition;

        	param.PARAM01 = this.dsSearch.getColumn(0, "YM_WORK").substr(0,6);
        	param.ID_AP = this.dsAppNoVal.getColumn(0, "ID_AP");	// 전자결재문서번호
        	param.YN_LINK = "N";	// 화면에서 팝업을 호출할경우 N, 링크를 통해서 화면을 오픈할경우 null 이다

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWD_FNDREQDPLNTB_APP", "fnAprvDialogCallback", param);

        }

         this.fnAprvDialogCallback = function(svcID, value) {
        	// 리턴값
        	if(value){
        		// 결재완료, 결재취소, 결재상신 후에는 재조회를 한다
        		this.FormBtns.Select.click();
        	}
        };


         /*
          *	결재번호와 결재상태 조회
          */
        this.fnAppNoSelect = function() {
        	this.dsAppNo.clearData();
        	this.dsAppNo.addRow();

        	this.dsAppNo.setColumn(0, "ID_AP_TYPE", "DW07");
        	this.dsAppNo.setColumn(0, "V_PARAM01", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        	this.dsAppNo.setColumn(0, "V_PARAM02", "");
        	this.dsAppNo.setColumn(0, "V_PARAM03", "");
        	this.dsAppNo.setColumn(0, "V_PARAM04", "");

        	var strSvcId    = "appno";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "appno=dsAppNo";
        	var outData     = "dsAppNoVal=appno0";
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWD_FNDREQDPLNTB.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
