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
            this.set_titletext("분담금액 산출");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">basecreate</Col><Col id=\"SP\">DAUPR_CORPANTE_CREATE</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAUPR_CORPANTE_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAUPR_CORPANTE_SAVE</Col></Row><Row><Col id=\"TARGET\">execute</Col><Col id=\"SP\">DAUPR_CORPANTE_EXECUTE</Col></Row><Row><Col id=\"TARGET\">autoslip</Col><Col id=\"SP\">DAUPR_CORPANTE_AUTOSLIP</Col></Row><Row><Col id=\"TARGET\">autoslipcancel</Col><Col id=\"SP\">DAUPR_CORPANTE_AUTOSLIP_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YY_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YY_BASE\"/><Col id=\"TY_GUBUN\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staYY_BASE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("대상년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYY_BASE","staYY_BASE:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.getSetter("onchanged").set("fnSearchInit");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN","ctclYY_BASE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdoTY_GUBUN","staTY_GUBUN:0.0","10.0","180","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divSearch_form_rdoTY_GUBUN_innerdataset = new nexacro.NormalDataset("divSearch_form_rdoTY_GUBUN_innerdataset", obj);
            divSearch_form_rdoTY_GUBUN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">E</Col><Col id=\"datacolumn\">예상분담금</Col></Row><Row><Col id=\"codecolumn\">D</Col><Col id=\"datacolumn\">확정분담금</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_rdoTY_GUBUN_innerdataset);
            obj.set_text("상반기");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:5",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.getSetter("BeforeUserDataSetParam").set("fnGrid_BeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnGrid_AfterCDTextChanged");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctclYY_BASE.form.TextBox","value","dsSearch","YY_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.rdoTY_GUBUN","value","dsSearch","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DAU_CORPANTE.xfdl", function() {
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

        	//기준년도
        	var thisYear = this.gfnGetDate().substr(0,4);
        	var thisMon = this.gfnGetDate().substr(4,2);
        	var preYear = (parseInt(this.gfnGetDate().substring(0,4))-1);
        	this.ctclYY_BASE.form.TextBox.set_value(preYear);

        	// E	예상분담금 / 	D	확정분담금
        	var tyGubun = (thisMon == "01" || thisMon == "02") ? 0 : 1;
        	this.rdoTY_GUBUN.set_index(tyGubun);
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        // 	this.FormBtns.Add.set_enable(false);
        // 	this.FormBtns.Del.set_enable(false);
        // 	this.FormBtns.Save.set_enable(false);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnBaseCreate			 		= this.gfnFormButtonAdd("BaseCreate", "fnBaseCreate", "기초생성");
        	this.btnDetailPop			 		= this.gfnFormButtonAdd("DetailPop", "fnDetailPop", "상세내역");
        	this.btnCorpanteExecute			 	= this.gfnFormButtonAdd("CorpanteExecute", "fnCorpanteExecute", "분담금계산");
        	this.btnCorpanteList			 	= this.gfnFormButtonAdd("CorpanteList", "fnCorpanteList", "분담내역");
        	this.btnAutoSlip			 		= this.gfnFormButtonAdd("AutoSlip", "fnAutoSlip", "전표발행");
        	this.btnAutoSlipCancel			 	= this.gfnFormButtonAdd("AutoSlipCancel", "fnAutoSlipCancel", "전표취소");
        	this.btnAutoSlipSelect			 	= this.gfnFormButtonAdd("AutoSlipSelect", "fnAutoSlipSelect", "전표조회");
        // 	this.btnGanTaxSingoClose 		= this.gfnFormButtonAdd("GanTaxSingoClose", "fnExtBtnEvent", "마감");
        // 	this.btnGanTaxSingoCloseCancel 	= this.gfnFormButtonAdd("GanTaxSingoCloseCancel", "fnExtBtnEvent", "마감해제");
        // 	this.btnGanTaxSingoDiskDlg.set_enable(false);
        // 	this.btnGanTaxSingoPrint.set_enable(false);

        };

        this.fnDetailPop = function()
        {
          	var param = {};

        	param.CD_CORP = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        	param.DS_CORP = this.dsList.getColumn(this.dsList.rowposition, "DS_CORP");
        	param.YY_BASE = this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "YY_BASE")) ? this.ctclYY_BASE.form.TextBox.value : this.dsList.getColumn(this.dsList.rowposition, "YY_BASE") ;
        	param.TY_GUBUN = this.rdoTY_GUBUN.value;

          	this.gfnFormOpen("DAU", "DAU_CORPANTE_BASE", "fnDetailPopCallback", param);
        };

        this.fnDetailPopCallback = function(svcID, val) {
        	if(val == false) return;
        }

        this.fnCorpanteList = function()
        {
          	var param = {};
        	param.YY_BASE = this.ctclYY_BASE.form.TextBox.value;
        	param.TY_GUBUN = this.rdoTY_GUBUN.value;

          	this.gfnFormOpen("DAU", "DAU_CORPANTE_CORP", "fnCorpanteListCallback", param);
        };

        this.fnCorpanteListCallback = function(svcID, val) {
        	if(val == false) return;
        }

        // 전표발행
        this.fnAutoSlip = function () {

        	if(!this.gfnGridIsRow(this.dxGrid)) return;
        	this.gfnConfirm("전표발행 작업을 하시겠습니까?", "fnSlipIssue");

        };
        this.fnSlipIssue = function(svcID, value){
        	if(value) {
        		this.dsAutoSlip.clearData();
        		this.dsAutoSlip.addRow();

        		this.dsAutoSlip.setColumn(0, "YY_BASE", this.ctclYY_BASE.form.TextBox.value);
        		this.dsAutoSlip.setColumn(0, "TY_GUBUN", this.rdoTY_GUBUN.value);
        		this.dsAutoSlip.setColumn(0, "ID_TRANS", this.AuthClient.ID_USER);

        	//trace("전표발행 데이터 : "+this.dsAutoSlip.saveXML());

        		var strSvcId    = "autoslip";
        		var strSvcType  = "grid";
        		var inProc		= "_dsProc";
        		var inData      = "autoslip=dsAutoSlip";
        		var outData     = "dsList=autoslip";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId ,
        							strSvcType ,
        							inProc,
        							inData ,
        							outData ,
        							strArg,
        							callBackFnc);
        	}
        };

        // 전표발행 취소
        this.fnAutoSlipCancel = function () {
        	if(!this.gfnGridIsRow(this.dxGrid)) {return false;}

        	this.gfnConfirm("전표를 취소 하시겠습니까?", "fnAutoSlipCancel_callback");
        };

        this.fnAutoSlipCancel_callback = function(strId, val)
        {
        	if(val == true) {
        		if (!this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"))) {
        			this.dsAutoSlipCancel.clearData();
        			this.dsAutoSlipCancel.addRow();
        			this.dsAutoSlipCancel.setColumn(0, "YY_BASE", this.ctclYY_BASE.form.TextBox.value);
        			this.dsAutoSlipCancel.setColumn(0, "TY_GUBUN", this.rdoTY_GUBUN.value);
        			this.dsAutoSlipCancel.setColumn(0, "ID_TRANS", this.AuthClient.ID_USER);

        			var strSvcId    = "autoslipcancel";
        			var strSvcType  = "grid";
        			var inProc		= "_dsProc";
        			var inData      = "autoslipcancel=dsAutoSlipCancel";
        			var outData     = "dsList=autoslipcancel0";
        			var strArg      = "";
        			var callBackFnc = "fnCallback";

        			this.gfnTransaction( strSvcId ,
        								strSvcType ,
        								inProc,
        								inData ,
        								outData ,
        								strArg,
        								callBackFnc);
        		}
        	}
        };

        // 전표조회
        this.fnAutoSlipSelect = function () {
        	if(!this.gfnGridIsRow(this.dxGrid)) {return false;}
        	var cd_trade = this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE");

        	if (this.gfnIsNull(cd_trade)) return;

        	var param = {};

        	param.CD_TRADE = cd_trade;
        	param.IUD_FLAG = "S";

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	//기준년도
        	this.ctclYY_BASE = this.divSearch.form.ctclYY_BASE;

            //구분
        	this.rdoTY_GUBUN = this.divSearch.form.rdoTY_GUBUN;

        	this.dxGrid = this.divData.form.objGrid;
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	this.dxGrid.EnterCell = "fnGrid_EnterCell";

        	this.grSearch = this.FormInfo.GR_SEARCH;					          // 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;					          // 그룹코드
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAU_CORPANTE");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	//기초생성
        	this.dsBasecreate = new Dataset();
        	this.dsBasecreate.addColumn("YY_BASE", "string");
        	this.dsBasecreate.addColumn("TY_GUBUN", "string");
        	this.dsBasecreate.addColumn("ID_INSERT", "string");

        	//조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YY_BASE", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");

        	//입력
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("YY_BASE", "string");
        	this.dsSave.addColumn("TY_GUBUN", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("AM_SALARY_TOT", "decimal");
        	this.dsSave.addColumn("AM_RETIRE_TOT", "decimal");
        	this.dsSave.addColumn("AM_INSURANCE_TOT", "decimal");
        	this.dsSave.addColumn("NO_INWON_TOT", "int");

        	this.dsSave.addColumn("AM_EMPSAL", "decimal");
        	this.dsSave.addColumn("AM_EXECSAL", "decimal");
        	this.dsSave.addColumn("AM_EMPBONUS", "decimal");
        	this.dsSave.addColumn("AM_EXECBONUS", "decimal");

        	this.dsSave.addColumn("AM_SALARY", "decimal");
        	this.dsSave.addColumn("AM_RETIRE", "decimal");
        	this.dsSave.addColumn("AM_INSURANCE", "decimal");
        	this.dsSave.addColumn("NO_INWON", "int");
        	this.dsSave.addColumn("RT_SALARY", "double");
        	this.dsSave.addColumn("AM_SALES", "decimal");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("ID_INSERT", "string");

        	this.dsSave.addColumn("AM_ANNUITY", "decimal"); // 20200408 추가
        	this.dsSave.addColumn("AM_HEALTH", "decimal");
        	this.dsSave.addColumn("AM_HEALTH_OLD", "decimal");
        	this.dsSave.addColumn("AM_HIRE", "decimal");
        	this.dsSave.addColumn("AM_ACCIDENT", "decimal");

        	//분담금액 계산
        	this.dsExecute = new Dataset();
        	this.dsExecute.addColumn("YY_BASE", "string");
        	this.dsExecute.addColumn("TY_GUBUN", "string");
        	this.dsExecute.addColumn("ID_INSERT", "string");

        	//전표발행
        	this.dsAutoSlip = new Dataset();
        	this.dsAutoSlip.addColumn("YY_BASE", "string");
        	this.dsAutoSlip.addColumn("TY_GUBUN", "string");
        	this.dsAutoSlip.addColumn("ID_TRANS", "string");

        	//전표발행 취소
        	this.dsAutoSlipCancel = new Dataset();
        	this.dsAutoSlipCancel.addColumn("YY_BASE", "string");
        	this.dsAutoSlipCancel.addColumn("TY_GUBUN", "string");
        	this.dsAutoSlipCancel.addColumn("ID_TRANS", "string");
        };

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

        	this.dsSelect.setColumn(0, "YY_BASE", this.ctclYY_BASE.form.TextBox.value);
        	this.dsSelect.setColumn(0, "TY_GUBUN", 	this.rdoTY_GUBUN.value);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nRow = this.gfnGridAdd(this.dxGrid);
        	this.dsList.setColumn(nRow, "YY_BASE", this.dsSearch.getColumn(0, "YY_BASE"));
        	this.dsList.setColumn(nRow, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        //  그리드 필수항목 체크
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

        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "YY_BASE", this.ctclYY_BASE.form.TextBox.value);
        				this.dsSave.setColumn(nrow, "TY_GUBUN", this.rdoTY_GUBUN.value);

        				this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsSave.setColumn(nrow, "AM_SALARY_TOT", this.dsList.getColumn(i, "AM_SALARY_TOT"));
        				this.dsSave.setColumn(nrow, "AM_RETIRE_TOT", this.dsList.getColumn(i, "AM_RETIRE_TOT"));
        				this.dsSave.setColumn(nrow, "AM_INSURANCE_TOT", this.dsList.getColumn(i, "AM_INSURANCE_TOT"));
        				this.dsSave.setColumn(nrow, "NO_INWON_TOT", this.dsList.getColumn(i, "NO_INWON_TOT"));

        				this.dsSave.setColumn(nrow, "AM_EMPSAL", this.dsList.getColumn(i, "AM_EMPSAL"));
        				this.dsSave.setColumn(nrow, "AM_EXECSAL", this.dsList.getColumn(i, "AM_EXECSAL"));
        				this.dsSave.setColumn(nrow, "AM_EMPBONUS", this.dsList.getColumn(i, "AM_EMPBONUS"));
        				this.dsSave.setColumn(nrow, "AM_EXECBONUS", this.dsList.getColumn(i, "AM_EXECBONUS"));

        				this.dsSave.setColumn(nrow, "AM_SALARY", this.dsList.getColumn(i, "AM_SALARY"));
        				this.dsSave.setColumn(nrow, "AM_RETIRE", this.dsList.getColumn(i, "AM_RETIRE"));
        				this.dsSave.setColumn(nrow, "AM_INSURANCE", this.dsList.getColumn(i, "AM_INSURANCE"));
        				this.dsSave.setColumn(nrow, "NO_INWON", this.dsList.getColumn(i, "NO_INWON"));
        				this.dsSave.setColumn(nrow, "RT_SALARY", this.dsList.getColumn(i, "RT_SALARY"));
        				this.dsSave.setColumn(nrow, "AM_SALES", this.dsList.getColumn(i, "AM_SALES"));
        				this.dsSave.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));

        				this.dsSave.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        				this.dsSave.setColumn(nrow, "AM_ANNUITY", this.dsList.getColumn(i, "AM_ANNUITY"));
        				this.dsSave.setColumn(nrow, "AM_HEALTH", this.dsList.getColumn(i, "AM_HEALTH"));
        				this.dsSave.setColumn(nrow, "AM_HEALTH_OLD", this.dsList.getColumn(i, "AM_HEALTH_OLD"));
        				this.dsSave.setColumn(nrow, "AM_HIRE", this.dsList.getColumn(i, "AM_HIRE"));
        				this.dsSave.setColumn(nrow, "AM_ACCIDENT", this.dsList.getColumn(i, "AM_ACCIDENT"));
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
        };

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
        this.fnSelectValidate = function() {

        	var validate = true;

        	if (this.gfnIsNull(this.ctclYY_BASE.form.TextBox.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ctclYY_BASE.form.TextBox.setFocus();
        		}
        		this.gfnAlert("기준년도를 입력하세요.", "fnVaidateCallback");
        	}

        	return validate;
        };
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, args)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		if (!this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"))) {
        			this.btnAutoSlip.set_enable(false); //전표발행
        			this.btnAutoSlipCancel.set_enable(true);  //전표취소
        			this.btnAutoSlipSelect.set_enable(true);  //전표조회
        		} else {
        			this.btnAutoSlip.set_enable(true); //전표발행
        			this.btnAutoSlipCancel.set_enable(false);  //전표취소
        			this.btnAutoSlipSelect.set_enable(false);  //전표조회
        		}

        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "basecreate") {
        		if (errorCode == 0) {
        			this.gfnAlert("기초생성이 완료되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if (svcID == "execute") {
        		if (errorCode == 0) {
        			this.gfnAlert("분담금 계산 처리되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if (svcID == "autoslip") {
        		if (errorCode == 0) {
        			this.gfnAlert("전표가 발행되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if (svcID == "autoslipcancel") {
        		if (errorCode == 0) {
        			this.gfnAlert("전표가 취소되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
         	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	this.fnSearchInit();
        };

        //그리드 코드파인드
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){

        	return true;
        };

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        };
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e) {
           if ((obj.oldrow > -1 && obj.oldrow == e.row) || (obj.oldrow == -1 && e.oldrow != e.row)) {

        		if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return false;

        		if (!this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"))) {
        			this.btnAutoSlip.set_enable(false); //전표발행
        			this.btnAutoSlipCancel.set_enable(true);  //전표취소
        			this.btnAutoSlipSelect.set_enable(true);  //전표조회
        		} else {
        			this.btnAutoSlip.set_enable(true); //전표발행
        			this.btnAutoSlipCancel.set_enable(false);  //전표취소
        			this.btnAutoSlipSelect.set_enable(false);  //전표조회
        		}

        		obj.oldrow = -1;
        	}
        };

        // 셀 수정가능 여부 (반드시 EnterCell에서 처리할것)
        this.fnGrid_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);

        	var rowFlag = this.gfnGetFlag(this.dsList, row);
        	if (rowFlag != "#" && rowFlag != "I"  && !this.gfnIsNull(this.dsList.getColumn(row, "CD_TRADE"))) { // 전표발행했다면
        		return false;
        	}

        	// 공통 > Setting > 그리드정보 에서 셋팅한 내용대로
        	nGrdSpcRow = this.dsGridSpec.findRow( "DS_FIELD", colnm);
        	if(this.dsGridSpec.getColumn(nGrdSpcRow, "YN_READONLY") == "Y"){
        		return false;
        	}

        	return true;
        }

         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        this.fnBaseCreate = function() {
        	this.gfnConfirm("기존의 정보는 삭제되고 급여정보가 재 생성 됩니다.\n계속 진행하시겠습니까?","fnBaseCreateCallback");
        };

        this.fnBaseCreateCallback = function(strId, val) {
        	if(val) {
        		/*if (!this.fnSelectValidate()) return false;*/

        		this.gfnGridBeforeSelect(this.dxGrid);

        		this.dsBasecreate.clearData();
        		this.dsBasecreate.addRow();

        		this.dsBasecreate.setColumn(0, "YY_BASE", this.ctclYY_BASE.form.TextBox.value);
        		this.dsBasecreate.setColumn(0, "TY_GUBUN", 	this.rdoTY_GUBUN.value);
        		this.dsBasecreate.setColumn(0, "ID_INSERT", this.AuthClient.ID_USER);

        		var strSvcId    = "basecreate";
        		var strSvcType  = "grid";
        		var inProc		= "_dsProc";
        		var inData      = "basecreate=dsBasecreate";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// trabsaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}
        };

        this.fnCorpanteExecute = function() {
        	this.gfnConfirm("기존의 정보는 삭제되고 분담금정보가 재 생성 됩니다.\n계속 진행하시겠습니까?","fnCorpanteExecuteCallback");
        };

        this.fnCorpanteExecuteCallback = function(strId, val) {
        	if(val) {
        		/*if (!this.fnSelectValidate()) return false;*/

        		this.gfnGridBeforeSelect(this.dxGrid);

        		this.dsExecute.clearData();
        		this.dsExecute.addRow();

        		this.dsExecute.setColumn(0, "YY_BASE", this.ctclYY_BASE.form.TextBox.value);
        		this.dsExecute.setColumn(0, "TY_GUBUN", 	this.rdoTY_GUBUN.value);
        		this.dsExecute.setColumn(0, "ID_INSERT", this.AuthClient.ID_USER);

        		var strSvcId    = "execute";
        		var strSvcType  = "grid";
        		var inProc		= "_dsProc";
        		var inData      = "execute=dsExecute";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// trabsaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}
        };
         /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		// 폼상태 초기화
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(!this.gfnIsNull(e.columnid)){
        		this.fnSearchInit();
        	}
        };

        //자료생성
        this.fnGanTaxSingoCreate = function() {
        	this.gfnConfirm("기존자료 삭제 후 생성 됩니다.\n자료생성 하시겠습니까?","fnGanTaxSingoCreateCallback");
        };
        this.fnGanTaxSingoCreateCallback = function(strId, val) {
        	if(val) {

        		if(this.gfnIsNull(this.dsSelect.getColumn(0,"ID_INSERT"))) this.dsSelect.setColumn(0, "ID_INSERT", this.AuthClient.ID_USER);

        		var strSvcId    = "ganTaxSingoCreate";
        		var strSvcType  = "grid";
        		var inProc		= "_dsProc";
        		var inData      = "ganTaxSingoCreate=dsSelect";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// trabsaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}
        };

        //마감
        this.fnGanTaxSingoClose = function(){
        	this.gfnConfirm("마감작업을 수행하시겠습니까?", "fnGanTaxSingoCloseCallback");
        };
        this.fnGanTaxSingoCloseCallback = function(strId, val) {
        	if(val) {

        		var strSvcId    = "ganTaxSingoClose";
        		var strSvcType  = "grid";
        		var inProc		= "_dsProc";
        		var inData      = "ganTaxSingoClose=dsSelect";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// trabsaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}
        };

        //마감해제
        this.fnGanTaxSingoCloseCancel = function(){
        	this.gfnConfirm("마감해제 작업을 수행하시겠습니까?", "fnGanTaxSingoCloseCanceleCallback");
        };

        this.fnGanTaxSingoCloseCanceleCallback = function(strId, val) {
        	if(val) {

        		var strSvcId    = "ganTaxSingoCloseCancel";
        		var strSvcType  = "grid";
        		var inProc		= "_dsProc";
        		var inData      = "ganTaxSingoCloseCancel=dsSelect";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// trabsaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}
        };

        this.dsList_onvaluechanged = function(obj,e)
        {

        	if(e.oldvalue == e.newvalue) return;

        	switch(e.columnid) {
        		case "AM_EMPSAL":
        		case "AM_EXECSAL":
        		case "AM_EMPBONUS":
        		case "AM_EXECBONUS":
        			// 급여총계 = 급여(직원) + 급여(임원) + 상여(직원) + 상여(임웜)
        			// AM_SALARY = AM_EMPSAL + AM_EXECSAL +  AM_EMPBONUS + AM_EXECBONUS

        			var AM_EMPSAL = isNaN(parseFloat(this.dsList.getColumn(e.row,"AM_EMPSAL")))==true?0:parseFloat(this.dsList.getColumn(e.row,"AM_EMPSAL"));
        			var AM_EXECSAL = isNaN(parseFloat(this.dsList.getColumn(e.row,"AM_EXECSAL")))==true?0:parseFloat(this.dsList.getColumn(e.row,"AM_EXECSAL"));
        			var AM_EMPBONUS = isNaN(parseFloat(this.dsList.getColumn(e.row,"AM_EMPBONUS")))==true?0:parseFloat(this.dsList.getColumn(e.row,"AM_EMPBONUS"));
        			var AM_EXECBONUS = isNaN(parseFloat(this.dsList.getColumn(e.row,"AM_EXECBONUS")))==true?0:parseFloat(this.dsList.getColumn(e.row,"AM_EXECBONUS"));

        			var AM_SALARY = AM_EMPSAL + AM_EXECSAL + AM_EMPBONUS + AM_EXECBONUS;
        			this.dsList.setColumn(e.row,"AM_SALARY", AM_SALARY);
        		break;

        		case "AM_ANNUITY":
        		case "AM_HEALTH":
        		case "AM_HEALTH_OLD":
        		case "AM_HIRE":
        		case "AM_ACCIDENT":
        			// 4대보험 = 국민연금 + 건강보험 + 노인장기요양보험 + 고용보험 + 산재보험
        			// AM_INSURANCE = AM_ANNUITY + AM_HEALTH + AM_HEALTH_OLD + AM_HIRE + AM_ACCIDENT

        			var AM_ANNUITY = isNaN(parseFloat(this.dsList.getColumn(e.row,"AM_ANNUITY")))==true?0:parseFloat(this.dsList.getColumn(e.row,"AM_ANNUITY"));
        			var AM_HEALTH = isNaN(parseFloat(this.dsList.getColumn(e.row,"AM_HEALTH")))==true?0:parseFloat(this.dsList.getColumn(e.row,"AM_HEALTH"));
        			var AM_HEALTH_OLD = isNaN(parseFloat(this.dsList.getColumn(e.row,"AM_HEALTH_OLD")))==true?0:parseFloat(this.dsList.getColumn(e.row,"AM_HEALTH_OLD"));
        			var AM_HIRE = isNaN(parseFloat(this.dsList.getColumn(e.row,"AM_HIRE")))==true?0:parseFloat(this.dsList.getColumn(e.row,"AM_HIRE"));
        			var AM_ACCIDENT = isNaN(parseFloat(this.dsList.getColumn(e.row,"AM_ACCIDENT")))==true?0:parseFloat(this.dsList.getColumn(e.row,"AM_ACCIDENT"));

        			var AM_INSURANCE = AM_ANNUITY + AM_HEALTH + AM_HEALTH_OLD + AM_HIRE + AM_ACCIDENT;
        			this.dsList.setColumn(e.row,"AM_INSURANCE", AM_INSURANCE);
        		break;

        		default:
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAU_CORPANTE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
