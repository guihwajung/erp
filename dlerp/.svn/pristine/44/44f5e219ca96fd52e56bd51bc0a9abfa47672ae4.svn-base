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
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"NM_DAM\" type=\"STRING\" size=\"256\"/><Column id=\"NM_DEV\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DT_FROM\"/><Col id=\"DT_TO\"/><Col id=\"NM_DAM\"/><Col id=\"NM_DEV\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SP\">DZZPR_DEVWORK_SELECT</Col><Col id=\"TARGET\">select</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DZZPR_DEVWORK_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNM_DAM", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">김근태</Col><Col id=\"VALUE\">김근태</Col></Row><Row><Col id=\"CODE\">김상우</Col><Col id=\"VALUE\">김상우</Col></Row><Row><Col id=\"CODE\">김상훈</Col><Col id=\"VALUE\">김상훈</Col></Row><Row><Col id=\"CODE\">김성욱</Col><Col id=\"VALUE\">김성욱</Col></Row><Row><Col id=\"CODE\">양노석</Col><Col id=\"VALUE\">양노석</Col></Row><Row><Col id=\"CODE\">이진형</Col><Col id=\"VALUE\">이진형</Col></Row><Row><Col id=\"CODE\">지광운</Col><Col id=\"VALUE\">지광운</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNM_DEV", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">김상훈</Col><Col id=\"VALUE\">김상훈</Col></Row><Row><Col id=\"CODE\">한정환</Col><Col id=\"VALUE\">한정환</Col></Row><Row><Col id=\"CODE\">이종석</Col><Col id=\"VALUE\">이종석</Col></Row><Row><Col id=\"CODE\">김동길</Col><Col id=\"VALUE\">김동길</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_PERIOD","0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_WF_SchLabelE");
            obj.set_taborder("0");
            obj.set_text("조회기간");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","staCD_PERIOD:0","10","105","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_TILDE","ctclDT_FROM:0","10","20","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","staCD_TILDE:0","10","105","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("cchkYN_MULTILINE","ctclDT_TO:30","10","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("Multiline");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNM_DAM","cchkYN_MULTILINE:0","10","113","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("담당자(쿠키)");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboNM_DAM","staNM_DAM:0","10","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsNM_DAM");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNM_DEV","ccboNM_DAM:0","10","113","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("작업자(쿠키)");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboNM_DEV","staNM_DEV:0","10","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsNM_DEV");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkAuto","ccboNM_DEV:30","10","110","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("자동조회(5분)");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:20",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctclDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccboNM_DEV","value","dsSearch","NM_DEV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccboNM_DAM","value","dsSearch","NM_DAM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DZZ_DEVWORK.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this._Interval;
        this._NO_SEQ = 0;

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	//this.fnSetExtendButton();
         	this.fnSetVariable();
         	this.fnSetEvent();
         	this.fnSetParameter();

        	if(nexacro.getPrivateProfile("DZZ_DEVWORK#NO_SEQ") != null) {
        		this._NO_SEQ = nexacro.getPrivateProfile("DZZ_DEVWORK#NO_SEQ");
        	}
        	if(nexacro.getPrivateProfile("DZZ_DEVWORK#IS_AUTO") != null) {
        		this.divSearch.form.chkAuto.set_value(nexacro.getPrivateProfile("DZZ_DEVWORK#IS_AUTO"));
        		if(this.divSearch.form.chkAuto.value == 1) {
        			this.fnNotificationStart();
        		}
        	}

        	this.FormBtns.Select.click();
        };

        function notify() {
        	if (window.Notification) {
        		if (Notification.permission !== 'granted') {
        			alert('알림 권한이 없습니다.');
        		}
        		else {
        			var notification = new Notification('개발의뢰', {
        				body: '체크',
        			});

        			notification.onclick = function () {
        			};
        		}
        	}
        }

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Select.set_enable(false);
        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.dxGrid = this.divData.form.objGrid;
        };


        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DT_FROM", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
        	this.dsSelect.addColumn("NM_DAM", "string");
        	this.dsSelect.addColumn("NM_DEV", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("NO_SEQ", "int");
        	this.dsSave.addColumn("NM_PROJECT","string");
        	this.dsSave.addColumn("NM_PROJECT_APPLY", "string");
        	this.dsSave.addColumn("NM_DAM","string");
        	this.dsSave.addColumn("DT_WORK", "string");
        	this.dsSave.addColumn("CD_SYSTEM", "string");
        	this.dsSave.addColumn("ID_FORM", "string");
        	this.dsSave.addColumn("NM_FORM", "string");
        	this.dsSave.addColumn("RM_WORK", "string");
        	this.dsSave.addColumn("ST_PROGRESS", "string");
        	this.dsSave.addColumn("NM_DEV", "string");
        	this.dsSave.addColumn("CNT_REQ", "int");
        	this.dsSave.addColumn("CNT_CLOSE", "int");
        	this.dsSave.addColumn("DT_CLOSE","string");
        	this.dsSave.addColumn("RM_BIGO","string");
        	this.dsSave.addColumn("CT_MDAY","BigDecimal");
        	this.dsSave.addColumn("ID_USER","string");
        	this.dsSave.addColumn("TY_DEV","string");
        	this.dsSave.addColumn("RM_BIGO_R","string");
        	this.dsSave.addColumn("TY_DEPT","string");
        	this.dsSave.addColumn("PRIORITY","string");
        	this.dsSave.addColumn("YN_APPROVE", "string");
        	this.dsSave.addColumn("NO_CSR", "string");
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	// 초기값으로 FROM은 한달 전. TO는 한달 후로 설정.
        	var today = this.gfnGetDate();
        	this.dsSearch.set_enableevent(false);
        	this.dsSearch.setColumn(0, "DT_FROM", this.gfnAddDate(today, -31));
        	this.dsSearch.setColumn(0, "DT_TO", this.gfnAddDate(today, 30));
        	if(nexacro.getPrivateProfile("DZZ_DEVWORK#NM_DAM") != null) {
        		this.dsSearch.setColumn(0, "NM_DAM", nexacro.getPrivateProfile("DZZ_DEVWORK#NM_DAM"));
        	}
        	if(nexacro.getPrivateProfile("DZZ_DEVWORK#NM_DEV") != null) {
        		this.dsSearch.setColumn(0, "NM_DEV", nexacro.getPrivateProfile("DZZ_DEVWORK#NM_DEV"));
        	}
        	this.dsSearch.set_enableevent(true);

        	// 그리드 초기화
        	this.dxGrid.AfterInit = "fnGrid_AfterInit";	// AfterInit 은 반드시 gfnGridInit 전에 선언.
        	this.gfnGridInit(this.dxGrid, this.dsList, "DZ", "DZZ_DEVWORK");


        	// BUTTON, BUTTON-IN 처리
        	this.dxGrid.ExpandUp = "fnGrid_ExpandUp";

        };



        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnValidate()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	var dtFrom = this.dsSearch.getColumn(0, "DT_FROM");
        	var dtTo = this.dsSearch.getColumn(0, "DT_TO");
        	var nmDam = this.dsSearch.getColumn(0, "NM_DAM");
        	var nmDev = this.dsSearch.getColumn(0, "NM_DEV");

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "DT_FROM", dtFrom);
        	this.dsSelect.setColumn(0, "DT_TO", dtTo);
        	this.dsSelect.setColumn(0, "NM_DAM", nmDam);
        	this.dsSelect.setColumn(0, "NM_DEV", nmDev);

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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }



        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnValidate = function() {

        	var dt_From = this.dsSearch.getColumn(0, "DT_FROM");
        	var dt_To = this.dsSearch.getColumn(0, "DT_TO");

        	if (this.gfnIsNull(dt_From) || this.gfnIsNull(dt_To)) {
        		this.gfnAlert("조회기간은 필수입력 값입니다.");
        		return false;
        	}

        	return true;
        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        	this.dsList.set_enableevent(false);

        	// 작업일자에 오늘 날짜를 넣어준다.
        	var today = this.gfnGetDate();
        	this.dsList.setColumn(nrow, "DT_WORK", today);

        	this.dsList.set_enableevent(true);
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
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsSave.setColumn(nrow, "NM_PROJECT",this.dsList.getColumn(i, "NM_PROJECT"));
        				this.dsSave.setColumn(nrow, "NM_PROJECT_APPLY",this.dsList.getColumn(i, "NM_PROJECT_APPLY"));
        				this.dsSave.setColumn(nrow, "NM_DAM",this.dsList.getColumn(i, "NM_DAM"));
        				this.dsSave.setColumn(nrow, "DT_WORK",this.dsList.getColumn(i, "DT_WORK"));
        				this.dsSave.setColumn(nrow, "CD_SYSTEM",this.dsList.getColumn(i, "CD_SYSTEM"));
        				this.dsSave.setColumn(nrow, "ID_FORM",this.dsList.getColumn(i, "ID_FORM"));
        				this.dsSave.setColumn(nrow, "NM_FORM",this.dsList.getColumn(i, "NM_FORM"));
        				this.dsSave.setColumn(nrow, "RM_WORK",this.dsList.getColumn(i, "RM_WORK"));
        				this.dsSave.setColumn(nrow, "ST_PROGRESS",this.dsList.getColumn(i, "ST_PROGRESS"));
        				this.dsSave.setColumn(nrow, "NM_DEV",this.dsList.getColumn(i, "NM_DEV"));
        				this.dsSave.setColumn(nrow, "CNT_REQ",this.dsList.getColumn(i, "CNT_REQ"));
        				this.dsSave.setColumn(nrow, "CNT_CLOSE",this.dsList.getColumn(i, "CNT_CLOSE"));
        				this.dsSave.setColumn(nrow, "DT_CLOSE",this.dsList.getColumn(i, "DT_CLOSE"));
        				this.dsSave.setColumn(nrow, "RM_BIGO",this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsSave.setColumn(nrow, "CT_MDAY",this.dsList.getColumn(i, "CT_MDAY"));
        				this.dsSave.setColumn(nrow, "TY_DEV",this.dsList.getColumn(i, "TY_DEV"));
        				this.dsSave.setColumn(nrow, "RM_BIGO_R",this.dsList.getColumn(i, "RM_BIGO_R"));
        				this.dsSave.setColumn(nrow, "TY_DEPT",this.dsList.getColumn(i, "TY_DEPT"));
        				this.dsSave.setColumn(nrow, "PRIORITY",this.dsList.getColumn(i, "PRIORITY"));
        				this.dsSave.setColumn(nrow, "YN_APPROVE", this.dsList.getColumn(i, "YN_APPROVE"));
        				this.dsSave.setColumn(nrow, "NO_CSR", this.dsList.getColumn(i, "NO_CSR"));

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
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		if(this.dsList.rowcount > 0) {
        			if(nexacro.toNumber(this._NO_SEQ) < nexacro.toNumber(this.dsList.getMax("NO_SEQ"))) {
        				this._NO_SEQ = nexacro.toNumber(this.dsList.getMax("NO_SEQ"));
        				nexacro.setPrivateProfile("DZZ_DEVWORK#NO_SEQ", this._NO_SEQ);
        				if(this.divSearch.form.chkAuto.value == 1) {
        					notify();
        				}
        			}
        		}
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
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_AfterInit = function(obj) {
        	// 소계부분 커스텀
        	var colNM_DAM = this.dxGrid.getBindCellIndex("body", "NM_DAM");
        	this.dxGrid.setCellProperty("body", colNM_DAM, "expr", "expr:dataset.getRowLevel(currow)==1?'소계':NM_DAM");

        	// 총계부분 커스텀
        	this.dxGrid.setCellProperty("summ", colNM_DAM, "textAlign", "center");
        	this.dxGrid.setCellProperty("summ", colNM_DAM, "text", "총계");

        	// 소계부분 decoratetext 타입사용 (bold, italic 등 적용하기)
        	// 스타일(tag)부분은 도움말(F1) Grid > Objects > GridCellControl > dispalytype 참고
        	//this.dxGrid.setCellProperty("body", colNM_DAM, "displaytype", "expr:dataset.getRowLevel(currow)==1?'decoratetext':'text'"); // text 부분은 해당 컬럼 타입에 맞게
        	//this.dxGrid.setCellProperty("body", colNM_DAM, "expr", "expr:dataset.getRowLevel(currow)==1?'<b v=\"true\">소계</b>':NM_DAM");

        	var colRM_WORK = this.dxGrid.getBindCellIndex("body", "RM_WORK")
        	this.dxGrid.setCellProperty( "body", colRM_WORK, "wordWrap", "char" );

        	this.dxGrid.set_enableredraw(false);
        	this.gfnGridColumnColor(this.dxGrid, "ST_PROGRESS", "Red", "ST_PROGRESS == '개발의뢰'");
        	this.gfnGridColumnColor(this.dxGrid, "ST_PROGRESS", "Blue", "ST_PROGRESS == '접수완료' || ST_PROGRESS == '개발중'");
        	this.gfnGridColumnColor(this.dxGrid, "ST_PROGRESS", "HotPink", "ST_PROGRESS == '개발완료'");
        	this.dxGrid.set_enableredraw(true);
        }

         this.fnGrid_ExpandUp = function(obj, e) {

        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);

        	if(colnm == "FILE_ATTACH") {
        		// 최초 작성시엔 NO_SEQ가 없기 때문에 저장 후에 파일 첨부를 진행하여야 함.
        		// CD_DIR에 넣어줄 값이 없기에 저장 후 진행!
        		if(this.gfnGetFlag(this.dsList, e.row) == "I"){
        			this.gfnAlert("저장 후 파일첨부 진행.");
        			return false;
        		}

        		var fileManager = {};
        		fileManager.CD_GUBUN = "DZ30";
        		fileManager.CD_DIR = [this.dsList.getColumn(e.row, "NO_SEQ")];
        		fileManager.IS_READONLY = false;
        		this.gfnFileManager(fileManager, "fnFileCallback");
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnFileCallback = function(strID, val) {
        	// val.IsChange : 변경여부, val.Cnt : 파일개수

        	// 변경시 조회를 다시 하거나
        // 	if(val.IsChange == true) {
        // 		this.FormBtns.Select.click();
        // 	}

        	// 파일개수를 다시 셋팅
        	this.dsList.set_enableevent(false);
        	if(val.Cnt == 0) {
        		this.dsList.setColumn(this.dsList.rowposition, "FILE_ATTACH", "첨부");
        	} else {
        		this.dsList.setColumn(this.dsList.rowposition, "FILE_ATTACH", "첨부(" + val.Cnt + ")");
        	}
        	this.dsList.set_enableevent(true);
        };
        this.divSearch_cchkYN_MULTILINE_onchanged = function(obj,e)
        {
        	if(obj.isChecked()) {
        		this.dxGrid.set_autosizingtype("row");
        	} else {
        		this.dxGrid.set_autosizingtype("none");
        	}
        };

        this.divSearch_ccboNM_DAM_onitemchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue) {
        		nexacro.setPrivateProfile("DZZ_DEVWORK#NM_DAM", e.postvalue);
        		this.FormBtns.Select.click();
        	}
        };
        this.divSearch_ccboNM_DEV_onitemchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue) {
        		nexacro.setPrivateProfile("DZZ_DEVWORK#NM_DEV", e.postvalue);
        		this.FormBtns.Select.click();
        	}
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.divSearch_chkAuto_onchanged = function(obj,e)
        {
        	if(this.divSearch.form.chkAuto.value == 1) {
        		this.fnNotificationStart();
        	} else {
        		if(this._Interval != null) {
        			this._Interval.destroy();
        			this._Interval = null;
        		}
        	}
        	nexacro.setPrivateProfile("DZZ_DEVWORK#IS_AUTO", this.divSearch.form.chkAuto.value);
        };

        this.fnNotificationStart = function() {
        	// 알림 권한 얻기
        	if (window.Notification) {
        		Notification.requestPermission();
        	}

        	this._Interval = this.gfnSetInterval(this, function() {
        		this.fnSelect();
        	}, 1000*60*5); // 5분
        	this._Interval.start();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.form_onclose,this);
            this.divSearch.form.cchkYN_MULTILINE.addEventHandler("onchanged",this.divSearch_cchkYN_MULTILINE_onchanged,this);
            this.divSearch.form.ccboNM_DAM.addEventHandler("onitemchanged",this.divSearch_ccboNM_DAM_onitemchanged,this);
            this.divSearch.form.ccboNM_DEV.addEventHandler("onitemchanged",this.divSearch_ccboNM_DEV_onitemchanged,this);
            this.divSearch.form.chkAuto.addEventHandler("onchanged",this.divSearch_chkAuto_onchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DZZ_DEVWORK.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
