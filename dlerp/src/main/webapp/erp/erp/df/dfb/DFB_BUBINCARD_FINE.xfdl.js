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
            this.set_titletext("법인카드 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DFBPR_CARD_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DFBPR_CARD_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DFBPR_CARD_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DFBPR_CARD_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_STATUS", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">신규</Col><Col id=\"VALUE\">신규</Col></Row><Row><Col id=\"CODE\">폐기</Col><Col id=\"VALUE\">폐기</Col></Row><Row><Col id=\"VALUE\">분실</Col><Col id=\"CODE\">분실</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","10.0",null,"78","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCorpCd","0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCorpCd","staCorpCd:0.0","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ccfCorpCd:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("카드사코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCardCd","sta01:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","ccfCardCd:0.0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTyStatus","sta02:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsTY_STATUS");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_text("신규");
            obj.set_value("신규");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta03","0","staCorpCd:10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("수취부서");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfDeptCd","sta03:0.0","staCorpCd:10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta04","ccfDeptCd:0.0","staCorpCd:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("사용자");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfUserCd","sta04:0.0","staCorpCd:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta05","ccfUserCd:0.0","staCorpCd:10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("카드번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtCardNo","sta05:0.0","staCorpCd:10.0","140","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
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

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DFB_BUBINCARD_FINE.xfdl", function() {
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
        	this.btnHistory = this.gfnFormButtonAdd("btnHistory", "fnHistory","법인카드 이력관리");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ccfCorpCd = this.divSearch.form.ccfCorpCd;
        	this.ccfCardCd = this.divSearch.form.ccfCardCd;
        	this.ccfDeptCd = this.divSearch.form.ccfDeptCd;
        	this.ccfUserCd = this.divSearch.form.ccfUserCd;

        	this.cboTyStatus = this.divSearch.form.cboTyStatus;
        	this.txtCardNo = this.divSearch.form.txtCardNo;

        	this.dxGrid = this.divData.form.objGrid;
        	this.grSearch = this.FormInfo.GR_SEARCH;
        	this.idGroup = this.FormInfo.ID_GROUP;
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCorpCd.CodeFindName = "DZX_CFCORP";			// 법인코드
        	this.ccfCardCd.CodeFindName = "DFX_CFCARDSA";		// 카드사코드
        	this.ccfDeptCd.CodeFindName = "DFX_CFACNTUNIT";	// 수취부서
        	this.ccfUserCd.CodeFindName = "DFX_CFINSA";			// 사용자

        	this.ccfCorpCd.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCardCd.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfDeptCd.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfUserCd.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCorpCd.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCardCd.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfDeptCd.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfUserCd.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFB_BUBINCARD_FINE");

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        	if (this.gfnIsNull(this.ccfCorpCd.form.CDTextBox.value)) {
        		this.ccfCorpCd.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ccfCorpCd.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}
        	if (this.gfnIsNull(this.ccfDeptCd.form.CDTextBox.value)) {
        		this.ccfDeptCd.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);
        		this.ccfDeptCd.form.CDTextBox.set_value(this.AuthClient.CD_DEPT);
        	}


        	// 권한체크 - 해당부서내역만 조회가능
        	if (nexacro.toNumber(this.grSearch) >= 2) {
        		this.ccfCorpCd.set_enable(false);
        		this.ccfDeptCd.set_enable(false);
        	}
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_STATUS", "string");
        	this.dsSelect.addColumn("CD_CARDSA", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("NO_CARD", "string");
        	this.dsSelect.addColumn("ID_RECEIVER", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("CD_GROUP", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("NO_CARD", "string");
        	this.dsInsert.addColumn("CD_CARDSA", "string");
        	this.dsInsert.addColumn("DT_SUBMIT", "string");
        	this.dsInsert.addColumn("YN_PUBLIC", "string");
        	this.dsInsert.addColumn("CD_DEPT", "string");
        	this.dsInsert.addColumn("DT_PUBLISH", "string");
        	this.dsInsert.addColumn("DT_EXPIRE", "string");
        	this.dsInsert.addColumn("DT_RETURN", "string");
        	this.dsInsert.addColumn("ID_RECEIVER", "string");
        	this.dsInsert.addColumn("NO_ACCOUNT", "string");
        	this.dsInsert.addColumn("CD_BANK", "string");
        	this.dsInsert.addColumn("AM_DEPOSIT", "bigdecimal");
        	this.dsInsert.addColumn("AM_ENTER", "bigdecimal");
        	this.dsInsert.addColumn("AM_YEARLY", "bigdecimal");
        	this.dsInsert.addColumn("AM_HANDO", "bigdecimal");
        	this.dsInsert.addColumn("TY_STATUS", "string");
        	this.dsInsert.addColumn("RM_BIGO", "string");
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("TY_GUBUN", "string");
        	this.dsInsert.addColumn("TY_KIND", "string");
        	this.dsInsert.addColumn("TY_USED", "string");
        	this.dsInsert.addColumn("USE_GUBUN", "string");
        	this.dsInsert.addColumn("CD_ENTER", "string");
        	this.dsInsert.addColumn("DS_RANK", "string");
        	this.dsInsert.addColumn("DS_RANK2", "string");
        	this.dsInsert.addColumn("DT_AVAILABLE", "string");
        	this.dsInsert.addColumn("DS_DOMESTIC", "string");
        	this.dsInsert.addColumn("DS_FOREIGN", "string");
        	this.dsInsert.addColumn("LIMIT_TOTAL", "string");
        //	this.dsInsert.addColumn("CD_DEPT2", "string");
        //	this.dsUpdate.addColumn("DS_DEPT2", "string");
        //	this.dsInsert.addColumn("ID_RECEIVER2", "string");
        //	this.dsInsert.addColumn("DT_CHANGE", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");
        	this.dsInsert.addColumn("ID_SLIP", "string");
        	this.dsInsert.addColumn("YN_DEPTCHG", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("NO_CARD", "string");
        	this.dsUpdate.addColumn("CD_CARDSA", "string");
        	this.dsUpdate.addColumn("DT_SUBMIT", "string");
        	this.dsUpdate.addColumn("YN_PUBLIC", "string");
        	this.dsUpdate.addColumn("CD_DEPT", "string");
        	this.dsUpdate.addColumn("DT_PUBLISH", "string");
        	this.dsUpdate.addColumn("DT_EXPIRE", "string");
        	this.dsUpdate.addColumn("DT_RETURN", "string");
        	this.dsUpdate.addColumn("ID_RECEIVER", "string");
        	this.dsUpdate.addColumn("NO_ACCOUNT", "string");
        	this.dsUpdate.addColumn("CD_BANK", "string");
        	this.dsUpdate.addColumn("AM_DEPOSIT", "bigdecimal");
        	this.dsUpdate.addColumn("AM_ENTER", "bigdecimal");
        	this.dsUpdate.addColumn("AM_YEARLY", "bigdecimal");
        	this.dsUpdate.addColumn("AM_HANDO", "bigdecimal");
        	this.dsUpdate.addColumn("TY_STATUS", "string");
        	this.dsUpdate.addColumn("RM_BIGO", "string");
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("TY_KIND", "string");
        	this.dsUpdate.addColumn("TY_USED", "string");
        	this.dsUpdate.addColumn("USE_GUBUN", "string");
        	this.dsUpdate.addColumn("CD_ENTER", "string");
        	this.dsUpdate.addColumn("DS_RANK", "string");
        	this.dsUpdate.addColumn("DS_RANK2", "string");
        	this.dsUpdate.addColumn("DT_AVAILABLE", "string");
        	this.dsUpdate.addColumn("DS_DOMESTIC", "string");
        	this.dsUpdate.addColumn("DS_FOREIGN", "string");
        	this.dsUpdate.addColumn("LIMIT_TOTAL", "string");
        //	this.dsUpdate.addColumn("CD_DEPT2", "string");
        //	this.dsUpdate.addColumn("DS_DEPT2", "string");
        	this.dsUpdate.addColumn("ID_RECEIVER2", "string");
        	this.dsUpdate.addColumn("NM_RECEIVER2", "string");
        	this.dsUpdate.addColumn("DT_CHANGE", "string");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");
        	this.dsUpdate.addColumn("ID_SLIP", "string");
        	this.dsUpdate.addColumn("YN_DEPTCHG", "string");


        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("NO_CARD", "string");
        	this.dsDelete.addColumn("CD_CORP", "string");

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
        	this.dsSelect.setColumn(0, "TY_STATUS", this.cboTyStatus.value);					// 구분(신규,폐기,분실)
        	this.dsSelect.setColumn(0, "CD_CARDSA", this.ccfCardCd.form.CDTextBox.value);		// 카드사
        	this.dsSelect.setColumn(0, "CD_DEPT", this.ccfDeptCd.form.CDTextBox.value);			// 수취부서
        	this.dsSelect.setColumn(0, "NO_CARD", this.txtCardNo.value);						// 카드번호
        	this.dsSelect.setColumn(0, "ID_RECEIVER", this.ccfUserCd.form.CDTextBox.value);		// 사용자
        	this.dsSelect.setColumn(0, "CD_CORP", this.ccfCorpCd.form.CDTextBox.value);			// 법인코드
        	this.dsSelect.setColumn(0, "TY_GUBUN", "");											// 구분(개인,법인)
        	this.dsSelect.setColumn(0, "CD_GROUP", this.idGroup);								// 그룹


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
        	var nRow = this.gfnGridAdd(this.dxGrid);
        	this.dsList.setColumn(nRow, "TY_GUBUN", "법인");
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
        				this.dsInsert.setColumn(nrow, "NO_CARD", this.dsList.getColumn(i, "NO_CARD"));
        				this.dsInsert.setColumn(nrow, "CD_CARDSA", this.dsList.getColumn(i, "CD_CARDSA"));
        				this.dsInsert.setColumn(nrow, "DT_SUBMIT", this.dsList.getColumn(i, "DT_SUBMIT"));
        				this.dsInsert.setColumn(nrow, "YN_PUBLIC", this.dsList.getColumn(i, "YN_PUBLIC"));
        				this.dsInsert.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        				this.dsInsert.setColumn(nrow, "DT_PUBLISH", this.dsList.getColumn(i, "DT_PUBLISH"));
        				this.dsInsert.setColumn(nrow, "DT_EXPIRE", this.dsList.getColumn(i, "DT_EXPIRE"));
        				this.dsInsert.setColumn(nrow, "DT_RETURN", this.dsList.getColumn(i, "DT_RETURN"));
        				this.dsInsert.setColumn(nrow, "ID_RECEIVER", this.dsList.getColumn(i, "ID_RECEIVER"));
        				this.dsInsert.setColumn(nrow, "NO_ACCOUNT", this.dsList.getColumn(i, "NO_ACCOUNT"));
        				this.dsInsert.setColumn(nrow, "CD_BANK", this.dsList.getColumn(i, "CD_BANK"));
        				this.dsInsert.setColumn(nrow, "AM_DEPOSIT", this.dsList.getColumn(i, "AM_DEPOSIT"));
        				this.dsInsert.setColumn(nrow, "AM_ENTER", this.dsList.getColumn(i, "AM_ENTER"));
        				this.dsInsert.setColumn(nrow, "AM_YEARLY", this.dsList.getColumn(i, "AM_YEARLY"));
        				this.dsInsert.setColumn(nrow, "AM_HANDO", this.dsList.getColumn(i, "AM_HANDO"));
        				this.dsInsert.setColumn(nrow, "TY_STATUS", this.dsList.getColumn(i, "TY_STATUS"));
        				this.dsInsert.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsInsert.setColumn(nrow, "CD_CORP", this.ccfCorpCd.form.CDTextBox.value);
        				this.dsInsert.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i, "TY_GUBUN"));
        				this.dsInsert.setColumn(nrow, "TY_KIND", this.dsList.getColumn(i, "TY_KIND"));
        				this.dsInsert.setColumn(nrow, "TY_USED", this.dsList.getColumn(i, "TY_USED"));
        				this.dsInsert.setColumn(nrow,"USE_GUBUN",this.dsList.getColumn(i, "USE_GUBUN"));
        				this.dsInsert.setColumn(nrow,"CD_ENTER",this.dsList.getColumn(i, "CD_ENTER"));
        				this.dsInsert.setColumn(nrow,"DS_RANK",this.dsList.getColumn(i, "DS_RANK"));
        				this.dsInsert.setColumn(nrow,"DT_AVAILABLE", this.dsList.getColumn(i, "DT_AVAILABLE"));
        				this.dsInsert.setColumn(nrow,"DS_DOMESTIC", this.dsList.getColumn(i, "DS_DOMESTIC"));
        				this.dsInsert.setColumn(nrow,"DS_FOREIGN", this.dsList.getColumn(i, "DS_FOREIGN"));
        				this.dsInsert.setColumn(nrow,"LIMIT_TOTAL", this.dsList.getColumn(i, "LIMIT_TOTAL"));
        				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				this.dsInsert.setColumn(nrow,"ID_SLIP", this.dsList.getColumn(i, "ID_SLIP"));
        				this.dsInsert.setColumn(nrow,"YN_DEPTCHG", this.dsList.getColumn(i, "YN_DEPTCHG"));
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "NO_CARD", nexacro.replaceAll(this.dsList.getColumn(i, "NO_CARD"), "-", ""));
        				this.dsUpdate.setColumn(nrow, "CD_CARDSA", this.dsList.getColumn(i, "CD_CARDSA"));
        				this.dsUpdate.setColumn(nrow, "DT_SUBMIT", this.dsList.getColumn(i, "DT_SUBMIT"));
        				this.dsUpdate.setColumn(nrow, "YN_PUBLIC", this.dsList.getColumn(i, "YN_PUBLIC"));
        				this.dsUpdate.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        				this.dsUpdate.setColumn(nrow, "DT_PUBLISH", this.dsList.getColumn(i, "DT_PUBLISH"));
        				this.dsUpdate.setColumn(nrow, "DT_EXPIRE", this.dsList.getColumn(i, "DT_EXPIRE"));
        				this.dsUpdate.setColumn(nrow, "DT_RETURN", this.dsList.getColumn(i, "DT_RETURN"));
        				this.dsUpdate.setColumn(nrow, "ID_RECEIVER", this.dsList.getColumn(i, "ID_RECEIVER"));
        				this.dsUpdate.setColumn(nrow, "NO_ACCOUNT", this.dsList.getColumn(i, "NO_ACCOUNT"));
        				this.dsUpdate.setColumn(nrow, "CD_BANK", this.dsList.getColumn(i, "CD_BANK"));
        				this.dsUpdate.setColumn(nrow, "AM_DEPOSIT", this.dsList.getColumn(i, "AM_DEPOSIT"));
        				this.dsUpdate.setColumn(nrow, "AM_ENTER", this.dsList.getColumn(i, "AM_ENTER"));
        				this.dsUpdate.setColumn(nrow, "AM_YEARLY", this.dsList.getColumn(i, "AM_YEARLY"));
        				this.dsUpdate.setColumn(nrow, "AM_HANDO", this.dsList.getColumn(i, "AM_HANDO"));
        				this.dsUpdate.setColumn(nrow, "TY_STATUS", this.dsList.getColumn(i, "TY_STATUS"));
        				this.dsUpdate.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsUpdate.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsUpdate.setColumn(nrow, "TY_KIND", this.dsList.getColumn(i, "TY_KIND"));
        				this.dsUpdate.setColumn(nrow, "TY_USED", this.dsList.getColumn(i, "TY_USED"));
        				this.dsUpdate.setColumn(nrow,"USE_GUBUN",this.dsList.getColumn(i, "USE_GUBUN"));
        				this.dsUpdate.setColumn(nrow,"CD_ENTER",this.dsList.getColumn(i, "CD_ENTER"));
        				this.dsUpdate.setColumn(nrow,"DS_RANK",this.dsList.getColumn(i, "DS_RANK"));
        				this.dsUpdate.setColumn(nrow,"DT_AVAILABLE", this.dsList.getColumn(i, "DT_AVAILABLE"));
        				this.dsUpdate.setColumn(nrow,"DS_DOMESTIC", this.dsList.getColumn(i, "DS_DOMESTIC"));
        				this.dsUpdate.setColumn(nrow,"DS_FOREIGN", this.dsList.getColumn(i, "DS_FOREIGN"));
        				this.dsUpdate.setColumn(nrow,"LIMIT_TOTAL", this.dsList.getColumn(i, "LIMIT_TOTAL"));
        			//	this.dsUpdate.setColumn(nrow,"CD_DEPT2",this.dsList.getColumn(i, "CD_DEPT2"));
        				this.dsUpdate.setColumn(nrow,"ID_RECEIVER2", this.dsList.getColumn(i, "ID_RECEIVER2"));
        			//	this.dsUpdate.setColumn(nrow,"DS_DEPT2",this.dsList.getColumn(i, "DS_DEPT2"));
        				this.dsUpdate.setColumn(nrow,"NM_RECEIVER2", this.dsList.getColumn(i, "NM_RECEIVER2"));
        				this.dsUpdate.setColumn(nrow,"DS_RANK2",this.dsList.getColumn(i, "DS_RANK2"));
        				this.dsUpdate.setColumn(nrow,"DT_CHANGE", this.dsList.getColumn(i, "DT_CHANGE"));
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				this.dsUpdate.setColumn(nrow,"ID_SLIP", this.dsList.getColumn(i, "ID_SLIP"));
        				this.dsUpdate.setColumn(nrow,"YN_DEPTCHG", this.dsList.getColumn(i, "YN_DEPTCHG"));

        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "NO_CARD", nexacro.replaceAll(this.dsList.getColumn(i, "NO_CARD"), "-", ""));
        				this.dsDelete.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));

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

        		for( var i = 2 ; i < this.dxGrid.getCellCount("body"); i++){
        			//this.dxGrid.setCellProperty( "body", i, "cssclass", "expr:nexacro.toNumber(dataset.getColumn(currow, 'AM_COST')) >= '7000' ? 'BACK_ChongKe': '' " );
        			this.dxGrid.setCellProperty( "body", 36, "cssclass", "expr:dataset.getColumn(currow, 'ALARM')=='ALARM'?'red':'black'" );
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
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	switch(id) {
        	case "ccfCardCd": // 카드사코드
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCorpCd.form.CDTextBox.value);
        		break;
        	case "ccfDeptCd": // 수취부서
        		dsUserParam.setColumn(nrow, "CD_GROUP", "");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCorpCd.form.CDTextBox.value);
        		break;
        	case "ccfUserCd": // 사용자
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCorpCd.form.CDTextBox.value);
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

        	case "ccfCardCd": // 카드사코드
        		this.fnSearchInit();
        		break;
        	case "ccfDeptCd": // 수취부서
        		this.fnSearchInit();
        		break;
        	case "ccfUserCd": // 사용자
        		this.fnSearchInit();
        		break;
        	default:
        	}
        	return true;

        }


        this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow) {

        	switch(id) {
        	case "DFX_CFCARDSA": // 카드사
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCorpCd.form.CDTextBox.value);
        		break;
        	case "DFX_CFACNTUNIT": // 부서코드
        		dsUserParam.setColumn(nrow, "CD_GROUP", this.idGroup);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCorpCd.form.CDTextBox.value);
        		break;
        	case "DFX_CFINSA": // 사용자사번
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCorpCd.form.CDTextBox.value);
        		break;
        	case "DFX_CFDEPT_ACCOUNT": // 계좌번호
        		//var cdDept = this.gfnNvl(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT"), ""));
        		var cdCorp = this.ccfCorpCd.form.CDTextBox.value;
        		dsUserParam.setColumn(nrow, "CD_DEPT", cdCorp);
        		break;

        	default:
        	}
        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {

        	//trace(codeFindData);

        	// 사용자사번
        	if(id == "DFX_CFINSA") {
        		var tyKind = this.dsList.getColumn(this.dsList.rowposition, "TY_KIND");
        		if ( tyKind != "신용" && tyKind != "체크" ) {
        			this.dsList.setColumn(this.dsList.rowposition, "NO_ACCOUNT", "");
        			this.dsList.setColumn(this.dsList.rowposition, "CD_BANK", "");
        			this.dsList.setColumn(this.dsList.rowposition, "DS_BANK", "");
        		}
        	}

        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnFormButton = function(obj,e) {

        	//if(!this.gfnGridIsRow(this.dxGrid)) return;

        	if( obj.id == "btnExt_FormButton1"){

        		this.dsList.filter("CHK == 1");
        		var nCnt = this.dsList.rowcount;

        		if( nCnt == 0) {
        			this.gfnAlert("카드사용자 변경할 행을 체크하세요.", "");
        			this.dsList.filter("");
        			return;
        		}

        		this.dsList.filter("");

        		//if(!this.fnCheckFlag(this.dxGrid)) return;
        		this.gfnConfirm("선택한 데이터의 카드사용자 변경을 하시겠습니까?", "fnUpate");
        	}
        }
        this.fnUpate = function(svcID, value){

        	if(value) {
        		this.gfnGridBeforeSelect(this.dxGrid);

        		var colIdx = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, "CHK");
        		var strSlipKey1 = "";
        		var strSlipKey2 = "";
        		var strSlipKey3 = "";
        		var nRow = 0;
        		for ( var i =0; i < this.dsList.rowcount; i++){
        			 var strDisplaytype = this.dxGrid.getCellPropertyValue( i, this.dxGrid.getBindCellIndex("body","CHK"), "displaytype");

        			if( this.dsList.getColumn(i, this.ucFlag) != "#" && strDisplaytype == "checkboxcontrol" && this.dsList.getColumn(i,"CHK") == 1) {
        			//trace(this.dsList.getOrgColumn(i,"YN_APPROVAL"));
        			 //   if(this.dsList.getOrgColumn(i,"YN_APPROVAL") != "Y"){
        			//	    this.gfnAlert("승인 상태가 아닙니다.");
        			 //       return;
        			//	}
        				if(!this.gfnIsNull(this.dsList.getOrgColumn(i,"NO_AUTOSLIP"))){
        				    this.gfnAlert("이미 전표발행된 데이터가 있습니다.");
        			        return;
        				}
        				//strSlipKey1 += this.dsList.getColumn(i,"DT_REQUEST")+",";
        				//strSlipKey2 += this.dsList.getColumn(i,"ID_PERSON")+",";
        				strSlipKey1 += this.dsList.getColumn(i,"NO_CARD")+",";
        			}
        		}

        		var param = {};
        		param.NO_CARD = this.dsList.getColumn(this.dsList.rowposition, "NO_CARD");

        		trace("param.NO_CARD :: " + param.NO_CARD);

        		this.gfnFormOpen(this.FormInfo.CD_MODULE, "DFB_BUBINCARD_UPDATE", "fnPopupCallback", param, 1350, 400);

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
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.ccfCorp_AfterCDTextChanged = function(id) {
        // 	var arr = this.ccfCorp.form.SelectedData;
        //
        // 	if (arr.length > 0) {
        // 		var cd_system = arr[0]["CD_SYSTEM"];
        // 		var ds_system = arr[0]["DS_SYSTEM"];
        // 		var cd_module = arr[0]["CD_MODULE"];
        // 		var ds_module = arr[0]["DS_MODULE"];
        // 	}
        };

        this.fnHistory = function(obj,e) {

        if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	var param = {};
        	param.CD_CORP = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        	param.NO_CARD = this.dsList.getColumn(this.dsList.rowposition, "NO_CARD");
        	param.DS_CORP = this.dsList.getColumn(this.dsList.rowposition, "DS_CORP");
        	param.NM_CARDSA = this.dsList.getColumn(this.dsList.rowposition, "NM_CARDSA");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen("DFG", "DFB_BUBINCARD_HIS", "", param);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboTyStatus.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.txtCardNo.addEventHandler("onchanged",this.fnSearchInit,this);
        };
        this.loadIncludeScript("DFB_BUBINCARD_FINE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
