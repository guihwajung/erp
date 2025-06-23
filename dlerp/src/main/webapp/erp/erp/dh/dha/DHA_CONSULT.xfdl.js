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
            this.set_titletext("원안품의 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_CONSULT_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHAPR_CONSULT_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHAPR_CONSULT_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHAPR_CONSULT_DELETE</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DHAPR_CONSULTDTL_SELECT</Col></Row><Row><Col id=\"TARGET\">insert2</Col><Col id=\"SP\">DHAPR_CONSULTDTL_INSERT</Col></Row><Row><Col id=\"TARGET\">update2</Col><Col id=\"SP\">DHAPR_CONSULTDTL_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete2</Col><Col id=\"SP\">DHAPR_CONSULTDTL_DELETE</Col></Row><Row><Col id=\"TARGET\">renew</Col><Col id=\"SP\">DHAPR_CONSULT_RENEW</Col></Row><Row><Col id=\"TARGET\">ynUse</Col><Col id=\"SP\">DHAPR_CONSULT_USE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_USE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">Y</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCorpCd","sta00:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta03","0.0","sta00:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("품의부서");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfApprDeptCd","sta03:0.0","sta00:10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_PERIOD","0.0","10.0",null,"24.0","859",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("품의일자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDtFromAppr","staCD_PERIOD:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_TILDE","calDtFromAppr:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDtToAppr","staCD_TILDE:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","50%","100%","5",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_Splitter");
            obj.set_cursor("ns-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter:2",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","12",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divDataTop:38",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid2","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("staDtl","0","divDataTop:14",null,"22","200",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnAdd2",null,"divDataTop:9","27","27","60",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_tooltiptext("입력");
            obj.set_cssclass("btn_add");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSav2",null,"divDataTop:9","27","27","30",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_tooltiptext("저장");
            obj.set_cssclass("btn_save");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnDel2",null,"divDataTop:9","27","27","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_tooltiptext("삭제");
            obj.set_cssclass("btn_del");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.calDtFromAppr","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.calDtToAppr","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHA_CONSULT.xfdl", function() {
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

        	// 법인코드 포커스추가
        	this.ccfCorpCd.form.CDTextBox.setFocus();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnUseDayExt = this.gfnFormButtonAdd("btnUseDayExt", "fnUseDayExt");                 // 사용가능일연장
        	this.btnElctrncPmnt = this.gfnFormButtonAdd("btnElctrncPmnt", "fnElctrncPmnt");           //전자결재상신
        	this.btnElctrncPmntDoc = this.gfnFormButtonAdd("btnElctrncPmntDoc", "fnElctrncPmntDoc");  // 전자결재문서조회
        	this.btnShareDept = this.gfnFormButtonAdd("btnShareDept", "fnShareDept");                 // 공유부서추가
        	this.btnChitPrcsStatus = this.gfnFormButtonAdd("btnChitPrcsStatus", "fnChitPrcsStatus");  // 전표처리현황
        	this.btnYnUse = this.gfnFormButtonAdd("btnYnUse", "fnYnUse");                             // 사용여부변경
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ccfCorpCd = this.divSearch.form.ccfCorpCd;			// 법인코드
        	this.ccfApprDeptCd = this.divSearch.form.ccfApprDeptCd;	// 품의부서코드

        	this.calDtFromAppr = this.divSearch.form.calDtFromAppr;	// 품의시작일자
        	this.calDtToAppr = this.divSearch.form.calDtToAppr;		// 품의종료일자


        	this.dxGrid = this.divData.form.divDataTop.form.objGrid;
        	this.dxGrid2 = this.divData.form.divDataBottom.form.objGrid2;
        	this.grSearch = this.FormInfo.GR_SEARCH;
        	this.idGroup = this.FormInfo.ID_GROUP;
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCorpCd.CodeFindName = "DZX_CFCORP";			// 법인코드
        	this.ccfApprDeptCd.CodeFindName = "DFX_CFACNTUNIT_GROUP";	// 품의부서

        	this.ccfCorpCd.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfApprDeptCd.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCorpCd.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfApprDeptCd.AfterCDTextChanged = "fnAfterCDTextChanged";


        	// 품의일자 15일전부터 현재까지 일단 설정.
        	var vToday = this.gfnGetDate();
        	this.calDtFromAppr.set_value(this.gfnAddDate(vToday, -15));
        	this.calDtToAppr.set_value(vToday);

        	// 그리드
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHA_CONSULT");
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DH", "DHA_CONSULTDTL");

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        	this.dxGrid2.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        	this.dxGrid2.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        	// 법인코드세션
        	if (this.gfnIsNull(this.ccfCorpCd.form.CDTextBox.value)) {
        		this.ccfCorpCd.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ccfCorpCd.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}

        	//this.grSearch = "7";

        	// ToDo 테스트필요
        	// 권한체크 - 해당부서내역만 조회가능
        	if (nexacro.toNumber(this.grSearch) >= 7) {
        		this.divSearch.form.sta03.set_textDecoration("underline");
        	}
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");		// 법인코드
        	this.dsSelect.addColumn("DT_FROM", "string");		// 품의일자(F)
        	this.dsSelect.addColumn("DT_TO", "string");			// 품의일자(T)
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");	// 품의부서코드

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_CORP", "string");		// 법인코드
        	this.dsInsert.addColumn("DT_CONSULT", "string");	// 품의일자
        	this.dsInsert.addColumn("CD_DEPT_ACNT", "string");	// 품의부서코드
        	this.dsInsert.addColumn("RM_TITLE", "string");		// 제목
        	this.dsInsert.addColumn("DT_FROM", "string");		// 품의일자(F)
        	this.dsInsert.addColumn("DT_TO", "string");			// 품의일자(T)
        	//this.dsInsert.addColumn("AM_REQ", "string");		// 품의금액(신청금액)
        	this.dsInsert.addColumn("ID_USER", "string");		// ID


        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_CORP", "string");		// 법인코드
        	this.dsUpdate.addColumn("DT_CONSULT", "string");	// 품의일자
        	this.dsUpdate.addColumn("CD_DEPT_ACNT", "string");	// 품의부서코드
        	this.dsUpdate.addColumn("RM_TITLE", "string");		// 제목
        	this.dsUpdate.addColumn("DT_FROM", "string");		// 품의일자(F)
        	this.dsUpdate.addColumn("DT_TO", "string");			// 품의일자(T)
        	//this.dsUpdate.addColumn("AM_REQ", "string");		// 품의금액(신청금액)
        	this.dsUpdate.addColumn("ID_USER", "string");		// ID
        	this.dsUpdate.addColumn("ID_CONSULT", "string");	// 품의번호
        	this.dsUpdate.addColumn("SN_CONSULT", "string");	// 품의차수


        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_CORP", "string");		// 법인코드
        	this.dsDelete.addColumn("ID_CONSULT", "string");	// 품의번호
        	this.dsDelete.addColumn("SN_CONSULT", "string");	// 품의차수

        	this.dsRenew = new Dataset();
        	this.dsRenew.addColumn("CD_CORP", "string");		// 법인코드
        	this.dsRenew.addColumn("ID_CONSULT", "string");		// 품의번호
        	this.dsRenew.addColumn("SN_CONSULT", "string");		// 품의차수
        	this.dsRenew.addColumn("ID_USER", "string");		// ID

        	this.dsSelect2 = new Dataset();
        	this.dsSelect2.addColumn("ID_CONSULT", "string");		// 품의번호
        	//this.dsSelect2.addColumn("SN_CONSULT", "bigdecimal");		// 품의차수

        	this.dsInsert2 = new Dataset();
        	this.dsInsert2.addColumn("ID_CONSULT", "string");		// 품의번호
        	//this.dsInsert2.addColumn("SN_CONSULT", "bigdecimal");	// 품의차수
        	this.dsInsert2.addColumn("CD_CORP", "string");			// 법인코드
        	this.dsInsert2.addColumn("DS_CONSULT", "string");		// 내용
        	this.dsInsert2.addColumn("DS_VENDOR", "string");		// 상대처
        	this.dsInsert2.addColumn("AM_REQ", "bigdecimal");		// 금액
        	this.dsInsert2.addColumn("RM_BIGO", "string");			// 비고
        	this.dsInsert2.addColumn("ID_USER", "string");			// ID

        	this.dsUpdate2 = new Dataset();
        	this.dsUpdate2.addColumn("NO_CONSULT", "string");		// 세부번호
        	this.dsUpdate2.addColumn("DS_CONSULT", "string");		// 내용
        	this.dsUpdate2.addColumn("DS_VENDOR", "string");		// 상대처
        	this.dsUpdate2.addColumn("AM_REQ", "bigdecimal");		// 금액
        	this.dsUpdate2.addColumn("RM_BIGO", "string");			// 비고
        	this.dsUpdate2.addColumn("ID_USER", "string");			// 입력자

        	this.dsDelete2 = new Dataset();
        	this.dsDelete2.addColumn("NO_CONSULT", "bigdecimal");	// 세부번호
        	this.dsDelete2.addColumn("ID_USER", "string");			// 입력자


        	this.dsYnUse = new Dataset();
        	this.dsYnUse.addColumn("CD_CORP", "string");		// 법인코드
        	this.dsYnUse.addColumn("ID_CONSULT", "string");		// 품의번호
        	this.dsYnUse.addColumn("SN_CONSULT", "string");		// 품의차수
        	this.dsYnUse.addColumn("YN_USE", "string");		    // 사용여부
        	this.dsYnUse.addColumn("ID_USER", "string");		// ID
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
        	this.dsSelect.setColumn(0, "CD_CORP", this.ccfCorpCd.form.CDTextBox.value);				// 법인코드
        	this.dsSelect.setColumn(0, "DT_FROM", this.calDtFromAppr.value);						// 품의일자(F)
        	this.dsSelect.setColumn(0, "DT_TO", this.calDtToAppr.value);							// 품의일자(T)
        	this.dsSelect.setColumn(0, "CD_DEPT_ACNT", this.ccfApprDeptCd.form.CDTextBox.value);	// 품의부서코드

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
          *	상세조회
          */
        this.fnSelectDtl = function() {
        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return false;
        	//this.dsList2.clearData();

        	this.dsSelect2.clearData();
        	var nrow = this.dsSelect2.addRow();

        	this.dsSelect2.setColumn(nrow, "ID_CONSULT", this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "ID_CONSULT")));
        	//this.dsSelect2.setColumn(nrow, "SN_CONSULT", this.dsList.getColumn(this.dsList.rowposition, "SN_CONSULT"));

        	//trace(this.dsSelect2.saveXML());

        	var strSvcId    = "selectDtl";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select2=dsSelect2";
        	var outData     = "dsList2=select20";
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


        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nRow = this.gfnGridAdd(this.dxGrid);

        	this.fnSetBtn(true);	// 비활성화(true)
        }

        this.fnAddSub = function() {
        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return false;
        	//if (!this.fnFlagValid()) {return false;}
        	var nRow = this.gfnGridAdd(this.dxGrid2);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        }

        this.fnDelSub = function() {
        	//if (!this.fnFlagValid()) {return false;}
        	this.gfnGridDel(this.dxGrid2);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_CORP", this.ccfCorpCd.form.CDTextBox.value);				// 법인코드
        				this.dsInsert.setColumn(nrow, "DT_CONSULT", this.dsList.getColumn(i, "DT_CONSULT"));		// 품의일자
        				this.dsInsert.setColumn(nrow, "CD_DEPT_ACNT", this.dsList.getColumn(i, "CD_DEPT_ACNT"));	// 품의부서코드
        				this.dsInsert.setColumn(nrow, "RM_TITLE", this.dsList.getColumn(i, "RM_TITLE"));			// 제목
        				this.dsInsert.setColumn(nrow, "DT_FROM", this.dsList.getColumn(i, "DT_FROM"));				// 품의일자(F)
        				this.dsInsert.setColumn(nrow, "DT_TO", this.dsList.getColumn(i, "DT_TO"));					// 품의일자(T)
        				//this.dsInsert.setColumn(nrow, "AM_REQ", this.dsList.getColumn(i, "AM_REQ"));				// 품의금액(신청금액)
        				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);							// ID
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));				// 법인코드
        				this.dsUpdate.setColumn(nrow, "DT_CONSULT", this.dsList.getColumn(i, "DT_CONSULT"));		// 품의일자
        				this.dsUpdate.setColumn(nrow, "CD_DEPT_ACNT", this.dsList.getColumn(i, "CD_DEPT_ACNT"));	// 품의부서코드
        				this.dsUpdate.setColumn(nrow, "RM_TITLE", this.dsList.getColumn(i, "RM_TITLE"));			// 제목
        				this.dsUpdate.setColumn(nrow, "DT_FROM", this.dsList.getColumn(i, "DT_FROM"));				// 품의일자(F)
        				this.dsUpdate.setColumn(nrow, "DT_TO", this.dsList.getColumn(i, "DT_TO"));					// 품의일자(T)
        				//this.dsUpdate.setColumn(nrow, "AM_REQ", this.dsList.getColumn(i, "AM_REQ"));				// 품의금액(신청금액)
        				this.dsUpdate.setColumn(nrow, "ID_CONSULT", this.dsList.getColumn(i, "ID_CONSULT"));		// 품의번호
        				this.dsUpdate.setColumn(nrow, "SN_CONSULT", this.dsList.getColumn(i, "SN_CONSULT"));		// 품의차수
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);							// ID
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_CORP", this.ccfCorpCd.form.CDTextBox.value);				// 법인코드
        				this.dsDelete.setColumn(nrow, "ID_CONSULT", this.dsList.getColumn(i, "ID_CONSULT"));		// 품의번호
        				this.dsDelete.setColumn(nrow, "SN_CONSULT", this.dsList.getColumn(i, "SN_CONSULT"));		// 품의차수
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
         *	저장 버튼
         */
        this.fnSaveSub = function() {
        	if (!this.gfnGridValidate(this.dxGrid2)) return;
        	//if (!this.fnFlagValid()) {return false;}

        	this.dxGrid2.updateToDataset();

        	this.dsInsert2.clearData();
        	this.dsUpdate2.clearData();
        	this.dsDelete2.clearData();

        	for (var i = 0; i < this.dsList2.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList2, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert2.addRow();
        				this.dsInsert2.setColumn(nrow, "ID_CONSULT", this.dsList.getColumn(this.dsList.rowposition, "ID_CONSULT"));		// 품의번호
        				//this.dsInsert2.setColumn(nrow, "SN_CONSULT", this.dsList.getColumn(this.dsList.rowposition, "SN_CONSULT"));		// 품의차수
        				this.dsInsert2.setColumn(nrow, "CD_CORP", this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));			// 법인코드
        				this.dsInsert2.setColumn(nrow, "DS_CONSULT", this.dsList2.getColumn(i, "DS_CONSULT"));							// 내용
        				this.dsInsert2.setColumn(nrow, "DS_VENDOR", this.dsList2.getColumn(i, "DS_VENDOR"));							// 상대처
        				this.dsInsert2.setColumn(nrow, "AM_REQ", this.dsList2.getColumn(i, "AM_REQ"));									// 금액
        				this.dsInsert2.setColumn(nrow, "RM_BIGO", this.dsList2.getColumn(i, "RM_BIGO"));								// 비고
        				this.dsInsert2.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);												// ID
        				break;

        			case "U":
        				var nrow = this.dsUpdate2.addRow();
        				this.dsUpdate2.setColumn(nrow, "NO_CONSULT", this.dsList2.getColumn(i, "NO_CONSULT"));	// 세부번호
        				this.dsUpdate2.setColumn(nrow, "DS_CONSULT", this.dsList2.getColumn(i, "DS_CONSULT"));	// 내용
        				this.dsUpdate2.setColumn(nrow, "DS_VENDOR", this.dsList2.getColumn(i, "DS_VENDOR"));	// 상대처
        				this.dsUpdate2.setColumn(nrow, "AM_REQ", this.dsList2.getColumn(i, "AM_REQ"));			// 금액
        				this.dsUpdate2.setColumn(nrow, "RM_BIGO", this.dsList2.getColumn(i, "RM_BIGO"));		// 비고
        				this.dsUpdate2.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);						// ID
        				break;

        			case "D":
        				var nrow = this.dsDelete2.addRow();
        				this.dsDelete2.setColumn(nrow, "NO_CONSULT", this.dsList2.getColumn(i, "NO_CONSULT"));	// 세부번호
        				this.dsDelete2.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);						// ID
        				break;
        		}
        	}

        	if (this.dsInsert2.rowcount == 0 && this.dsUpdate2.rowcount == 0 && this.dsDelete2.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert2=dsInsert2 update2=dsUpdate2 delete2=dsDelete2";
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
        	if (this.gfnIsNull(this.ccfCorpCd.form.CDTextBox.text)) {
        		this.gfnAlert("법인코드가 입력되지 않았습니다.");
        		this.ccfCorpCd.form.CDTextBox.setFocus();
        		return false;
        	}

        	if (nexacro.toNumber(this.grSearch) >= 7) {
        		if (this.gfnIsNull(this.ccfApprDeptCd.form.CDTextBox.text)) {
        			this.gfnAlert("품의부서가 입력되지 않았습니다.");
        			this.ccfApprDeptCd.form.CDTextBox.setFocus();
        			return false;
        		}
        	}

        	return true;
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

        		this.fnSetBtn(false);	// 활성화(false)

        	} else if (svcID == "selectDtl") {
        		this.gfnGridAfterSelect(this.dxGrid2);
        	}
        	else if(svcID == "save" || svcID == "ynUse") {
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

        	switch(id) {
        	case "ccfCorpCd": // 법인코드
        		break;

        	case "ccfApprDeptCd": // 품의부서코드
        		dsUserParam.setColumn(nrow, "CD_GROUP", "");
        		//dsUserParam.setColumn(nrow, "CD_GROUP", this.idGroup);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCorpCd.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		break;

        	default:
        	}
        	return true;

        }

        this.fnAfterCDTextChanged = function(id) {
        	switch(id) {

        	case "ccfCorpCd": // 법인코드
        		this.fnSearchInit();
        		break;

        	case "ccfApprDeptCd": // 품의부서코드
        		this.fnSearchInit();
        		break;

        	default:
        	}
        	return true;
        }


        this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow) {

        	switch(id) {
        	case "DFX_CFACNTUNIT_GROUP":  //품의부서코드
        		dsUserParam.setColumn(nrow, "CD_GROUP", "");	//this.idGroup);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCorpCd.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		break;
        	case "DFX_CFACNTUNIT": //품의부서코드
        		dsUserParam.setColumn(nrow, "CD_GROUP", "");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCorpCd.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);

        	default:
        	}
        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {

        	switch(id) {
        	case "DFX_CFACNTUNIT": // 품의부서코드
        		break;

        	default:
        	}
        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGrid2);
        	}
        };


        // 사용가능일연장
        this.fnUseDayExt = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	this.dsRenew.clearData();

        	var nrow = this.dsRenew.addRow();

        	this.dsRenew.setColumn(nrow, "CD_CORP", this.ccfCorpCd.form.CDTextBox.value);
        	this.dsRenew.setColumn(nrow, "ID_CONSULT", this.dsList.getColumn(this.dsList.rowposition, "ID_CONSULT"));
        	this.dsRenew.setColumn(nrow, "SN_CONSULT", this.dsList.getColumn(this.dsList.rowposition, "SN_CONSULT"));
        	this.dsRenew.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        	if (this.dsRenew.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "renew=dsRenew";
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

        // 전자결재상신
        this.fnElctrncPmnt = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var nICnt = this.dsList.findRow(this.ucFlag,"I");
        	var nUCnt = this.dsList.findRow(this.ucFlag,"U");
        	var nDCnt = this.dsList.findRow(this.ucFlag,"D");

        	if( nICnt > -1|| nUCnt > -1 || nDCnt > -1) {
        		this.gfnAlert("저장 후 처리하세요.", "");
        		return;
        	}

        	if ( this.dsList.getColumn(this.dsList.rowposition, "CT_DTL") == "0") {
        		this.gfnAlert("상세정보 입력 및 저장 후 전자결재 상신바랍니다.");
        		return;
        	}

        	// 결재상태 1,2 : 결재중,결재완료 시 return;
        	var tyAppr = this.dsList.getColumn(this.dsList.rowposition, "TY_APPR");
        	if ( tyAppr == "1" || tyAppr == "2" ) {
        		this.gfnAlert("결재상태를 확인 바랍니다.");
        		return;
        	}

        	//var url = "http://ngw.booyoung.co.kr/approval/legacy/goFormLink.do?mode=DRAFT&legacyFormID=WF_FORM_ERP_DHA_CONSULT";
        	var url = this.gfnGetConfig("DZ" , "GW_APROVAL_URL");
        	url += "approval/legacy/goFormLink.do?mode=DRAFT";
        	url += "&legacyFormID=WF_FORM_ERP_DHA_CONSULT";
        	url += "&subject="+encodeURI("원안품의 상신");
        	url += "&dataType=proc";
        	url += "&empno=" + this.AuthClient.ID_USER;
        	//url += "&empno="+this.AuthClient.ID_USER; 현재 하나의 사번만가능하여 사번 고정
         	url += "&P_DS_KEY1="+this.dsList.getColumn(this.dsList.rowposition, "ID_CONSULT");	// 품의번호
         	url += "&P_DS_KEY2="+this.dsList.getColumn(this.dsList.rowposition, "SN_CONSULT");	// 품의차수

        	url += "&P_DS_KEY3=&P_DS_KEY4=&P_DS_KEY5=";
        	trace("url :: " + url);
        	window.open(url,"_blank", "width=790,height=1000,menubar=no,scrollbars=no,resizable=no,status=no");
        }


        // 전자결재문서조회
        this.fnElctrncPmntDoc = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var nICnt = this.dsList.findRow(this.ucFlag,"I");
        	var nUCnt = this.dsList.findRow(this.ucFlag,"U");
        	var nDCnt = this.dsList.findRow(this.ucFlag,"D");

        	if( nICnt > -1|| nUCnt > -1 || nDCnt > -1) {
        		this.gfnAlert("저장 후 처리하세요.", "");
        		return;
        	}

        	// 결재상태 0 : 결재전 시 return;
        	var tyAppr = this.dsList.getColumn(this.dsList.rowposition, "TY_APPR");
        	if ( tyAppr == "0") {
        		this.gfnAlert("결재상태를 확인 바랍니다.");
        		return;
        	}

        	var url = this.gfnGetConfig("DZ" , "GW_APROVAL_URL");
        	url += "approval/approval_Form.do?";
        	url +="forminstanceID="+this.dsList.getColumn(this.dsList.rowposition , "NO_APPR");
        	url +="&processID="+this.dsList.getColumn(this.dsList.rowposition , "NM_APPR");

        	trace("url :: " + url);
        	window.open(url,"_blank", "width=790,height=1000,menubar=no,scrollbars=no,resizable=no,status=no");
        }


        // 전표처리현황
        this.fnChitPrcsStatus = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;
        	var param = {};
        	param.CD_CORP = this.dsList.getColumn(this.dsList.rowposition,"CD_CORP");			// 법인코드
        	param.ID_CONSULT = this.dsList.getColumn(this.dsList.rowposition,"ID_CONSULT");		// 품의번호
        	param.RM_TITLE = this.dsList.getColumn(this.dsList.rowposition,"RM_TITLE");		// 품의명칭(제목)



        // 	trace("this.divData.form.divDataTop.form.objGrid :: " + this.divData.form.divDataTop.form.objGrid.currentrow);
        // 	trace("this.dsList.rowposition :: " + this.dsList.rowposition);
        // 	trace("this.FormInfo.CD_MODULE :: " + this.FormInfo.CD_MODULE);
        // 	trace("param.CD_CORP :: " + param.CD_CORP);
        // 	trace("param.ID_CONSULT :: " + param.ID_CONSULT);

        	this.gfnFormOpen("DFB", "DHA_CONSULT_SLIP", "", param, this.getOffsetWidth(), this.getOffsetHeight());
        }


        // 공유부서
        this.fnShareDept = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var param = {};
         	param.CD_CORP = this.dsList.getColumn(this.dsList.rowposition,"CD_CORP");
         	param.ID_CONSULT = this.dsList.getColumn(this.dsList.rowposition,"ID_CONSULT");
         	param.DS_CONSULT = this.dsList.getColumn(this.dsList.rowposition,"RM_TITLE");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHA_CONSULT_DEPT", "fnDialogCallback", param);
        }

        // 사용여부변경
        this.fnYnUse = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var options = {
        		resizable: true
        	}
        	this.gfnOpenPopup("DHA_CONSULTDTL","dha::DHA_CONSULTDTL.xfdl",{},"fnYnUseCallback",options);
        }

        // 사용여부변경  Callback
        this.fnYnUseCallback = function(strId, val) {

        	if(!this.gfnIsNull(val)){  // 취소가 아니면
        		this.dsYnUse.clearData();

        		var nrow = this.dsYnUse.addRow();

        		this.dsYnUse.setColumn(nrow, "CD_CORP", this.ccfCorpCd.form.CDTextBox.value);
        		this.dsYnUse.setColumn(nrow, "ID_CONSULT", this.dsList.getColumn(this.dsList.rowposition, "ID_CONSULT"));
        		this.dsYnUse.setColumn(nrow, "SN_CONSULT", this.dsList.getColumn(this.dsList.rowposition, "SN_CONSULT"));
        		this.dsYnUse.setColumn(nrow, "YN_USE", val);
        		this.dsYnUse.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        		if (this.dsYnUse.rowcount == 0) return;

        		var strSvcId    = "ynUse";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "ynUse=dsYnUse";
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

        this.dsList_onrowposchanged = function(obj,e)
        {
        	if (obj.getColumn(e.newrow, "SN_CONSULT") != 0) {
        		this.dxGrid2.set_readonly(true);
        	}

        	if (obj.getColumn(e.newrow, "SN_CONSULT") == 0) {
        		this.dxGrid2.set_readonly(false);
        	}

        	this.fnSelectDtl();
        };

        this.dsList_oncolumnchanged = function(obj,e)
        {
        // 	trace("this.FormBtns.Save.enable :: " + this.FormBtns.Save.enable);
        //
        // 	this.fnSetBtn(this.FormBtns.Save.enable);
        };


        this.fnSetBtn = function(isEnable) {
        	trace("isEnable ::: " + isEnable);
        	if (isEnable) {
        		this.divData.form.btnAdd2.set_enable(false);
        		this.divData.form.btnSav2.set_enable(false);
        		this.divData.form.btnDel2.set_enable(false);
        	} else {
        		this.divData.form.btnAdd2.set_enable(true);
        		this.divData.form.btnSav2.set_enable(true);
        		this.divData.form.btnDel2.set_enable(true);
        	}
        }
        this.dsList_onvaluechanged = function(obj,e)
        {
        	if (!this.fnFlagValid()) {
        		this.fnSetBtn(true);
        	} else {
        		this.fnSetBtn(false);
        	}

        };


        this.fnFlagValid = function() {
        	var chkCnt = 0;
        	for (var i=0; i < this.dsList.rowcount; i++) {
        		trace("gfnGetFlag :: " + this.gfnGetFlag(this.dsList, i));
        		if ( this.gfnGetFlag(this.dsList, i) ==  "I" || this.gfnGetFlag(this.dsList, i) ==  "U" || this.gfnGetFlag(this.dsList, i) ==  "D") {
        			chkCnt++;
        		}
        	}

        	if (chkCnt > 0) {
        		return false;
        	}

        	return true;
        }


        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_top(e.clienty);
        		this.divData.form.resetScroll();
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.calDtFromAppr.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.calDtToAppr.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.btnAdd2.addEventHandler("onclick",this.fnAddSub,this);
            this.divData.form.btnSav2.addEventHandler("onclick",this.fnSaveSub,this);
            this.divData.form.btnDel2.addEventHandler("onclick",this.fnDelSub,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DHA_CONSULT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
