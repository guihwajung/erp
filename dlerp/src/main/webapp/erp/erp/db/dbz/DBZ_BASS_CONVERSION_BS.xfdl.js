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
            this.set_titletext("BS 하자 일괄 업로드");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBZPR_BASS_CONVERSION_BS_SELECT</Col></Row><Row><Col id=\"SP\">DBZPR_BASS_CONVERSION_BS_DELETE</Col><Col id=\"TARGET\">delete</Col></Row><Row><Col id=\"SP\">DBZPR_BASS_CONVERSION_BS_INSERT</Col><Col id=\"TARGET\">insert</Col></Row><Row><Col id=\"SP\">DBZPR_BASS_CONVERSION_BS_UPDATE</Col><Col id=\"TARGET\">update</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DBXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo2</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo3</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"SP\">DBXPR_ACT_CODEFIND</Col><Col id=\"TARGET\">combo4</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DBZPR_BASS_CONVERSION_BS_CREATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VALIDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_VALIDATE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">%</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"DS_CODE\">미검증</Col><Col id=\"CD_CODE\">N</Col></Row><Row><Col id=\"DS_CODE\">검증</Col><Col id=\"CD_CODE\">Y</Col></Row><Row><Col id=\"DS_CODE\">검증오류</Col><Col id=\"CD_CODE\">E</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_UMGB", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_SIL", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_UH", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_ACT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("단지코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFMAINSITE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("검증구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCD_VALIDATE","staTY_GUBUN:0.0","10.0","109","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsCD_VALIDATE");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","57",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_selecttype("multirow");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staLeftTitle","0","0","100%","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("하자접수 리스트");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboTY_UMGB","0","26","130","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsTY_UMGB");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_type("filterlike");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnTY_UMGB","cboTY_UMGB:4","26","81","21",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("접수구분적용");
            obj.getSetter("uWord").set("popup.ok");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboCD_SIL","btnTY_UMGB:4","26","130","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsCD_SIL");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_type("filterlike");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCD_SIL","cboCD_SIL:4","26","81","21",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("위치적용");
            obj.getSetter("uWord").set("popup.ok");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboCD_UH","btnCD_SIL:4","26","130","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsCD_UH");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_type("filterlike");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCD_UH","cboCD_UH:4","26","81","21",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("하자유형적용");
            obj.getSetter("uWord").set("popup.ok");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboCD_ACT","btnCD_UH:4","26","220","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsCD_ACT");
            obj.set_datacolumn("DS_ACT");
            obj.set_codecolumn("CD_ACT");
            obj.set_type("filterlike");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCD_ACT","cboCD_ACT:4","26","81","21",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("공종적용");
            obj.getSetter("uWord").set("popup.ok");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_JEOBSU","btnCD_ACT:4","26","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnDT_JEOBSU","calDT_JEOBSU:4","26","81","21",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("접수일");
            obj.getSetter("uWord").set("popup.ok");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboCD_VALIDATE","value","dsSearch","CD_VALIDATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DBZ_BASS_CONVERSION_BS.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {

        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	//this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	this.fnSetCombo();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnFormButton1 = this.gfnFormButtonAdd("WorkBtn1", "fnWorkBtn");  //Excel 선택
        	this.btnFormButton2 = this.gfnFormButtonAdd("WorkBtn2", "fnWorkBtn");  // 하자자료 이관
        	this.btnFormButton3 = this.gfnFormButtonAdd("WorkBtn3", "fnWorkBtn");  // 코드적용
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.cboCD_VALIDATE = this.divSearch.form.cboCD_VALIDATE;

        	this.cboTY_UMGB = this.divData.form.cboTY_UMGB;
        	this.cboCD_SIL = this.divData.form.cboCD_SIL;
        	this.cboCD_UH = this.divData.form.cboCD_UH;
        	this.cboCD_ACT = this.divData.form.cboCD_ACT;
        	this.calDT_JEOBSU = this.divData.form.calDT_JEOBSU;

        	this.dxGrid = this.divData.form.objGrid;

        	this.cboCD_VALIDATE.set_index(0);
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DB", "DBZ_BASS_CONVERSION_BS");  // pForm.gfnGridInit = function(objGrid, objDs, cd_system, id_grid, tree_column, level_column, is_manual)
        	this.dxGrid.set_selecttype("multirow");	// IE경우만 multiarea모드에서 master선택후 마우스 이동 빠르게 할 경우 버그가 있어서 cell 모드로 변경

        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);
        	this.dsList.addEventHandler("cancolumnchange", this.dsList_cancolumnchange, this);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("CD_VALIDATE", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_SITE", "string");        // 단지코드
        	this.dsInsert.addColumn("TY_UMGB", "string");        // 접수구분
        	this.dsInsert.addColumn("DS_DONG", "string");        // 동
        	this.dsInsert.addColumn("DS_HO", "string");	         // 호
        	this.dsInsert.addColumn("CD_SIL", "string");	     // 위치코드
        	this.dsInsert.addColumn("CD_UH", "string");          // 하자유형
        	this.dsInsert.addColumn("CD_APPLY", "string");	     // 신고유형
        	this.dsInsert.addColumn("CD_TYPE", "string");        // 하자형태
        	this.dsInsert.addColumn("CD_CTM", "string");         // 협력업체
        	this.dsInsert.addColumn("NO_HADOCONT", "string");    // 하도계약번호
        	this.dsInsert.addColumn("CD_ACT", "string");         // 공종
        	this.dsInsert.addColumn("CD_FIX", "string");         // 보수유형
        	this.dsInsert.addColumn("DT_JEOBSU", "string");      // 접수일
        	this.dsInsert.addColumn("RM_NY", "string");          // 하자내용
        	this.dsInsert.addColumn("DT_JOBEND", "string");      // 작업완료일
        	this.dsInsert.addColumn("DT_APPROVE", "string");     // 승인일
        	this.dsInsert.addColumn("RM_JOBEND", "string");      // 처리내용
        	this.dsInsert.addColumn("PN_SC", "string");          // 신청자명
        	this.dsInsert.addColumn("NO_SCTEL", "string");       // 핸드폰번호
        	this.dsInsert.addColumn("NO_SCTELHOME", "string");   // 집전화번호
        	this.dsInsert.addColumn("PIC_BEFORE", "string");     // 점검전사진 파일명
        	this.dsInsert.addColumn("ID_INSERT", "string");      // 등록자
        	this.dsInsert.addColumn("SEQ", "int");               // SEQ   -> 동일한 데이터를 저장하기 위해 임시로 처리


        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("SN_SEQ", "string");         // 일련번호
        	this.dsUpdate.addColumn("CD_SITE", "string");        // 단지코드
        	this.dsUpdate.addColumn("TY_UMGB", "string");        // 접수구분
        	this.dsUpdate.addColumn("DS_DONG", "string");        // 동
        	this.dsUpdate.addColumn("DS_HO", "string");	         // 호
        	this.dsUpdate.addColumn("CD_SIL", "string");	     // 위치코드
        	this.dsUpdate.addColumn("CD_UH", "string");          // 하자유형
        	this.dsUpdate.addColumn("CD_APPLY", "string");	     // 신고유형
        	this.dsUpdate.addColumn("CD_TYPE", "string");        // 하자형태
        	this.dsUpdate.addColumn("CD_CTM", "string");         // 협력업체
        	this.dsUpdate.addColumn("NO_HADOCONT", "string");    // 하도계약번호
        	this.dsUpdate.addColumn("CD_ACT", "string");         // 공종
        	this.dsUpdate.addColumn("CD_FIX", "string");         // 보수유형
        	this.dsUpdate.addColumn("DT_JEOBSU", "string");      // 접수일
        	this.dsUpdate.addColumn("RM_NY", "string");          // 하자내용
        	this.dsUpdate.addColumn("DT_JOBEND", "string");      // 작업완료일
        	this.dsUpdate.addColumn("DT_APPROVE", "string");     // 승인일
        	this.dsUpdate.addColumn("RM_JOBEND", "string");      // 처리내용
        	this.dsUpdate.addColumn("PN_SC", "string");          // 신청자명
        	this.dsUpdate.addColumn("NO_SCTEL", "string");       // 핸드폰번호
        	this.dsUpdate.addColumn("NO_SCTELHOME", "string");   // 집전화번호
        	this.dsUpdate.addColumn("PIC_BEFORE", "string");     // 점검전사진 파일명
        	this.dsUpdate.addColumn("ID_UPDATE", "string");      // 등록자

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("SN_SEQ", "string");        // 일련번호

        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("CD_SITE", "string");       // 단지코드
        	this.dsCreate.addColumn("ID_INSERT", "string");     // 등록자

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.dsList.clearData();
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0,"CD_SITE"));
        	this.dsSelect.setColumn(0, "CD_VALIDATE", this.dsSearch.getColumn(0,"CD_VALIDATE"));

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
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        	if (!this.gfnGridValidate(this.dxGrid)) return;
        	if (!this.fnSaveValidate()) return false;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.getRowCountNF(); i++) {
        		var flag = this.dsList.getColumnNF(i,this.ucFlag);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0,"CD_SITE"));
        				this.dsInsert.setColumn(nrow, "TY_UMGB", this.dsList.getColumnNF(i,"TY_UMGB"));
        				this.dsInsert.setColumn(nrow, "DS_DONG", this.dsList.getColumnNF(i,"DS_DONG"));
        				this.dsInsert.setColumn(nrow, "DS_HO", this.dsList.getColumnNF(i,"DS_HO"));
        				this.dsInsert.setColumn(nrow, "CD_SIL", this.dsList.getColumnNF(i,"CD_SIL"));
        				this.dsInsert.setColumn(nrow, "CD_UH", this.dsList.getColumnNF(i,"CD_UH"));
        				this.dsInsert.setColumn(nrow, "CD_APPLY", this.dsList.getColumnNF(i,"CD_APPLY"));
        				this.dsInsert.setColumn(nrow, "CD_TYPE", this.dsList.getColumnNF(i,"CD_TYPE"));
        				this.dsInsert.setColumn(nrow, "CD_CTM", this.dsList.getColumnNF(i,"CD_CTM"));
        				this.dsInsert.setColumn(nrow, "NO_HADOCONT", this.dsList.getColumnNF(i,"NO_HADOCONT"));
        				this.dsInsert.setColumn(nrow, "CD_ACT", this.dsList.getColumnNF(i,"CD_ACT"));
        				this.dsInsert.setColumn(nrow, "CD_FIX", this.dsList.getColumnNF(i,"CD_FIX"));
        				this.dsInsert.setColumn(nrow, "DT_JEOBSU", this.dsList.getColumnNF(i,"DT_JEOBSU"));
        				this.dsInsert.setColumn(nrow, "RM_NY", this.dsList.getColumnNF(i,"RM_NY"));
        				this.dsInsert.setColumn(nrow, "DT_JOBEND", this.dsList.getColumnNF(i,"DT_JOBEND"));
        				this.dsInsert.setColumn(nrow, "DT_APPROVE", this.dsList.getColumnNF(i,"DT_APPROVE"));
        				this.dsInsert.setColumn(nrow, "RM_JOBEND", this.dsList.getColumnNF(i,"RM_JOBEND"));
        				this.dsInsert.setColumn(nrow, "PN_SC", this.dsList.getColumnNF(i,"PN_SC"));
        				this.dsInsert.setColumn(nrow, "NO_SCTEL", this.dsList.getColumnNF(i,"NO_SCTEL"));
        				this.dsInsert.setColumn(nrow, "NO_SCTELHOME", this.dsList.getColumnNF(i,"NO_SCTELHOME"));
        				this.dsInsert.setColumn(nrow, "PIC_BEFORE", this.dsList.getColumnNF(i,"PIC_BEFORE"));
        				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				this.dsInsert.setColumn(nrow, "SEQ", i);

        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "SN_SEQ", this.dsList.getColumnNF(i,"SN_SEQ"));
        				this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0,"CD_SITE"));
        				this.dsUpdate.setColumn(nrow, "TY_UMGB", this.dsList.getColumnNF(i,"TY_UMGB"));
        				this.dsUpdate.setColumn(nrow, "DS_DONG", this.dsList.getColumnNF(i,"DS_DONG"));
        				this.dsUpdate.setColumn(nrow, "DS_HO", this.dsList.getColumnNF(i,"DS_HO"));
        				this.dsUpdate.setColumn(nrow, "CD_SIL", this.dsList.getColumnNF(i,"CD_SIL"));
        				this.dsUpdate.setColumn(nrow, "CD_UH", this.dsList.getColumnNF(i,"CD_UH"));
        				this.dsUpdate.setColumn(nrow, "CD_APPLY", this.dsList.getColumnNF(i,"CD_APPLY"));
        				this.dsUpdate.setColumn(nrow, "CD_TYPE", this.dsList.getColumnNF(i,"CD_TYPE"));
        				this.dsUpdate.setColumn(nrow, "CD_CTM", this.dsList.getColumnNF(i,"CD_CTM"));
        				this.dsUpdate.setColumn(nrow, "NO_HADOCONT", this.dsList.getColumnNF(i,"NO_HADOCONT"));
        				this.dsUpdate.setColumn(nrow, "CD_ACT", this.dsList.getColumnNF(i,"CD_ACT"));
        				this.dsUpdate.setColumn(nrow, "CD_FIX", this.dsList.getColumnNF(i,"CD_FIX"));
        				this.dsUpdate.setColumn(nrow, "DT_JEOBSU", this.dsList.getColumnNF(i,"DT_JEOBSU"));
        				this.dsUpdate.setColumn(nrow, "RM_NY", this.dsList.getColumnNF(i,"RM_NY"));
        				this.dsUpdate.setColumn(nrow, "DT_JOBEND", this.dsList.getColumnNF(i,"DT_JOBEND"));
        				this.dsUpdate.setColumn(nrow, "DT_APPROVE", this.dsList.getColumnNF(i,"DT_APPROVE"));
        				this.dsUpdate.setColumn(nrow, "RM_JOBEND", this.dsList.getColumnNF(i,"RM_JOBEND"));
        				this.dsUpdate.setColumn(nrow, "PN_SC", this.dsList.getColumnNF(i,"PN_SC"));
        				this.dsUpdate.setColumn(nrow, "NO_SCTEL", this.dsList.getColumnNF(i,"NO_SCTEL"));
        				this.dsUpdate.setColumn(nrow, "NO_SCTELHOME", this.dsList.getColumnNF(i,"NO_SCTELHOME"));
        				this.dsUpdate.setColumn(nrow, "PIC_BEFORE", this.dsList.getColumnNF(i,"PIC_BEFORE"));
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "SN_SEQ", this.dsList.getColumnNF(i,"SN_SEQ"));
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0 ) return;
        	trace(this.dsInsert.saveXML());
        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "delete=dsDelete insert=dsInsert update=dsUpdate";
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
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid,"");
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
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
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("단지코드를 입력하셔야 합니다.", "fnVaidateCallback"); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        	}
        	return validate;
        }

        /*
         *	저장 Validate
         */
        this.fnSaveValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        			return false;
        		}
        		this.gfnAlert("단지코드를 입력하셔야 합니다.", "fnVaidateCallback"); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        	}


        	return validate;
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

        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if( svcID == "combo"){
        		this.cboTY_UMGB.set_index(0);
        		this.cboCD_SIL.set_index(0);
        		this.cboCD_UH.set_index(0);
        		this.cboCD_ACT.set_index(0);

        		var strToday = this.gfnGetDate();
        		this.calDT_JEOBSU.set_value(strToday);

        		if( this.FormInfo.ID_GROUP == "6" || this.FormInfo.ID_GROUP == "C" ){
        			this.dsSearch.setColumn(0, "CD_SITE", this.AuthClient.CD_DEPT);
        			this.ccfCD_SITE.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);
        			this.ccfCD_SITE.form.set_readonly(true);
        		}

        	} else if ( svcID== "create" ){
        		if (errorCode == 0) {
        			this.gfnAlert("하자자료 이관이 완료되었습니다");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        		this.FormBtns.Select.click();
        	}
        }

        /*
         *	엑셀업로드 Callback
         */
        this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet) {

        	// 다중 시트 처리시 양식의 해당 시트여부를 체크하고자 할땐 dsSheet 시트명 체크
        // 	if (dsSheet.rowcount > 1) {
        // 		trace(dsSheet.getColumn(1, "sheetname"));
        // 	}

        	// 엑셀 양식과 그리드 컬럼이 그대로 일치 하는경우 아래와 같이 처리.
        	// 아닌경우는 이부분 주석처리
        	if (dsOut.rowcount == 0)  {
        		this.gfnAlert("엑셀파일에 내용이 없습니다."); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        		return false;
        	}

        	for (var i=0; i< this.dsList.getColCount(); i++)
        	{
        		sColumnId = "Column"+i;

        		var sColumnNm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, i);
        		if (sColumnNm != "" && sColumnId != sColumnNm)
        		{
        			dsOut.updateColID(sColumnId, sColumnNm);
        		}
        	}

        	// 양식이 일치하고 엑셀내역을 기존데이터에 Insert하지 않고
        	// 엑셀내역 그대로 그리드 반영할 시 copyData
        	//this.dsList.copyData(dsOut);

        	this.dsList.set_enableevent(false);
        	for (var i=0; i< dsOut.rowcount; i++) {
        		for (var j=0; j< dsOut.colcount; j++) {
        			if (!this.gfnIsNull(dsOut.getColumn(i,j)) ){
        				dsOut.setColumn(i,j,nexacro.trim(dsOut.getColumn(i,j)));
        				var strColID = dsOut.getColID( j );
        				if ( strColID == "DT_JEOBSU" ){
        					dsOut.setColumn(i,j,dsOut.getColumn(i,j).replace(/\-/g,''));
        				}
        			}
        		}
        		var nrow = this.dsList.addRow();
        		this.dsList.setColumn(nrow, this.ucFlag, "I");

        		// 양식이 일치하는 경우 copyRow
        		this.dsList.copyRow(nrow, dsOut, i);

        	// 양식과 일치하지 않는 경우 아래와 같이 컬럼별로 처리.
           //this.dsList.setColumn(nrow, "CD_SYSTEM", dsOut.getColumn(i, "Column1"));
           //this.dsList.setColumn(nrow, "CD_TYPE", dsOut.getColumn(i, "Column2"));

        	}

        	this.dsList.set_enableevent(true);
        	this.gfnSetFormStatus(this, "I");
        };
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        /*
         * 코드파인드 변경전
         */
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfCD_SITE") {
        		dsUserParam.setColumn(nrow, "CD_AUTHDEPT", "");
        		dsUserParam.setColumn(nrow, "CD_BUNSO", "");
        		if( this.FormInfo.ID_GROUP == "2" ){
        			dsUserParam.setColumn(nrow, "CD_BUNSO", this.AuthClient.CD_DEPT.substr(1));
        		}
        		dsUserParam.setColumn(nrow, "ID_GROUP", this.FormInfo.ID_GROUP);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        	} else if (id == "DBX_CF_DW_HADO") {
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0,"CD_SITE"));
        		dsUserParam.setColumn(nrow, "VALUE", "");
        	}
        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.dsList_cancolumnchange = function(obj,e)
        {
        	var allowTypes = ["jpg","jpeg","gif","png"];

        	if(e.columnid == "PIC_BEFORE") {
        		var fileext = e.newvalue;
        		fileext = fileext.toLocaleLowerCase().substring(fileext.lastIndexOf('.')+1);
        		if(!this.gfnIsExistInArray(allowTypes, fileext)) {
        			this.gfnAlert("점검전 사진 컬럼의 확장자를 (" + allowTypes.join(',') + ")로 입력하세요.");
        			return 0;
        		}
        	}
        };
        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        /*
         * 이미지 크기 설정 버튼
         */
        this.fnWorkBtn = function(obj,e) {
        	if( obj.id == "btnExt_WorkBtn1"){
        		this.fnExcelUpload();  // 엑셀 업로드
        	} else if( obj.id == "btnExt_WorkBtn2"){
        		this.fnCreate();       // 하자자료 이관
        	} else if( obj.id == "btnExt_WorkBtn3"){
        		this.fnGetCodeInComboBox();
        	}
        };

        /*
         *	하자자료 이관
         */
        this.fnCreate = function() {

        	if (!this.fnSaveValidate()) return false;

        	this.dsCreate.clearData();
        	var nrow = this.dsCreate.addRow();
        	this.dsCreate.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0,"CD_SITE"));
        	this.dsCreate.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        	if (this.dsCreate.rowcount == 0 ) return;

        	var strSvcId    = "create";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "create=dsCreate";
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

        this.fnGetCodeInComboBox = function (strColunmId, strValue){
        	for (var i=0; i< this.dsList.rowcount; i++) {
        		// 접수구분
        		if ( !this.gfnIsNull(this.dsList.getColumn(i,"DS_UMGB")) ){
        			var nFindRow = this.dsTY_UMGB.findRow("DS_CODE",nexacro.trim(this.dsList.getColumn(i,"DS_UMGB")));
        			if( nFindRow > -1 ){
        				this.dsList.setColumn(i,"TY_UMGB", this.dsTY_UMGB.getColumn(nFindRow,"CD_CODE"));
        			}
        		}

        		// 위치
        		if ( !this.gfnIsNull(this.dsList.getColumn(i,"DS_SIL")) ){
        			nFindRow = this.dsCD_SIL.findRow("DS_CODE",nexacro.trim(this.dsList.getColumn(i,"DS_SIL")));
        			if( nFindRow > -1 ){
        				this.dsList.setColumn(i,"CD_SIL", this.dsCD_SIL.getColumn(nFindRow,"CD_CODE"));
        			}
        		}

        		// 하자유형
        		if ( !this.gfnIsNull(this.dsList.getColumn(i,"DS_UH")) ){
        			nFindRow = this.dsCD_UH.findRow("DS_CODE",nexacro.trim(this.dsList.getColumn(i,"DS_UH")));
        			if( nFindRow > -1 ){
        				this.dsList.setColumn(i,"CD_UH", this.dsCD_UH.getColumn(nFindRow,"CD_CODE"));
        			}
        		}

        		// 공종
        		if ( !this.gfnIsNull(this.dsList.getColumn(i,"DS_ACT")) ){
        			nFindRow = this.dsCD_ACT.findRow("DS_ACT",nexacro.trim(this.dsList.getColumn(i,"DS_ACT")));
        			if( nFindRow > -1 ){
        				this.dsList.setColumn(i,"CD_ACT", this.dsCD_ACT.getColumn(nFindRow,"CD_ACT"));
        			}
        		}

        		// 접수일
        		if ( this.gfnIsNull(this.dsList.getColumn(i,"DT_JEOBSU")) ){
        			this.dsList.setColumn(i,"DT_JEOBSU", this.calDT_JEOBSU.value);
        		}
        	}
        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         /*
         *	조회 조건 변경시 초기화
         */
         this.dsSearch_onvaluechanged = function(obj,e)
        {

        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        /*
         *	콤보박스 값 설정
         */
        this.fnSetCombo = function() {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");
        	this.dsCombo.addColumn("DS_ETC1", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DB");
        	this.dsCombo.setColumn(0, "CD_TYPE", "S2");    // 접수구분
        	this.dsCombo.setColumn(0, "DS_ETC1", "BS");    // 접수구분

        	this.dsCombo2 = new Dataset();
        	this.dsCombo2.addColumn("CD_SYSTEM", "string");
        	this.dsCombo2.addColumn("CD_TYPE", "string");

        	this.dsCombo2.addRow();
        	this.dsCombo2.setColumn(0, "CD_SYSTEM", "DB");
        	this.dsCombo2.setColumn(0, "CD_TYPE", "S3");   // 위치구분

        	this.dsCombo3 = new Dataset();
        	this.dsCombo3.addColumn("CD_SYSTEM", "string");
        	this.dsCombo3.addColumn("CD_TYPE", "string");

        	this.dsCombo3.addRow();
        	this.dsCombo3.setColumn(0, "CD_SYSTEM", "DB");
        	this.dsCombo3.setColumn(0, "CD_TYPE", "S1");   // 하자유형

        	this.dsCombo4 = new Dataset();
        	this.dsCombo4.addColumn("TY_GUBUN", "deciaml");
        	this.dsCombo4.addColumn("CN_ROW", "deciaml");
        	this.dsCombo4.addColumn("VALUE", "string");
        	this.dsCombo4.addColumn("MIN_VALUE", "string");

        	this.dsCombo4.addRow();
        	this.dsCombo4.setColumn(0, "TY_GUBUN", "0");
        	this.dsCombo4.setColumn(0, "CN_ROW", "0");
        	this.dsCombo4.setColumn(0, "VALUE", "");
        	this.dsCombo4.setColumn(0, "MIN_VALUE", "");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo combo2=dsCombo2 combo3=dsCombo3 combo4=dsCombo4";
        	var outData     = "dsTY_UMGB=combo0 dsCD_SIL=combo20 dsCD_UH=combo30 dsCD_ACT=combo40";
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
         *	엑셀업로드
         */
        this.fnExcelUpload = function() {
        	if (!this.fnSelectValidate()) return false;
        	// this.gfnExcelImport("적용할Dataset명","sheet명","데이터시작좌표","콜백함수명","구분ID",현재폼);
        	// sheet명 없으면 첫번째 sheet
        	//this.gfnExcelImport("dsList","","A2","fnExcelImportCallback","import",this);
        	for(var nrow = this.dsList.rowcount; -1 < nrow; nrow--){
        		if( this.dsList.getColumn(nrow, this.ucFlag) == "I" ){
        			this.dsList.deleteRow(nrow);
        		} else {
        			this.dsList.setColumn(nrow, this.ucFlag, "D");
        			this.dsList.filterRow(nrow);
        		}
        	}

        	this.gfnExcelImport("dsList","","A2","fnExcelImportCallback","import",this);
        };

        /*
         *	접수구분적용 버튼 클릭
         */
        this.divData_btnSetComboVal_onclick = function(obj,e)
        {
        	for(var i = 0; i < this.dsList.rowcount; i++){
        		var bExist1 = false;
        		var bExist2 = false;
        		bExist1 = this.dxGrid.isSelectedCell(this.dxGrid.currentcol,'body',i);
        		bExist2 = this.dxGrid.isSelectedCell(this.dxGrid.currentcol,'body',i);

        		// 접수구분적용
        		if( obj.id == "btnTY_UMGB"){
        			if(bExist1 || bExist2){
        				this.dsList.setColumn(i,"TY_UMGB", this.cboTY_UMGB.value);
        				this.dsList.setColumn(i,"DS_UMGB", this.cboTY_UMGB.text);
        			}
        		}

        		// 위치적용
        		if( obj.id == "btnCD_SIL"){
        			if(bExist1 || bExist2){
        				this.dsList.setColumn(i,"CD_SIL", this.cboCD_SIL.value);
        				this.dsList.setColumn(i,"DS_SIL", this.cboCD_SIL.text);
        			}
        		}

        		// 하자유형적용
        		if( obj.id == "btnCD_UH"){
        			if(bExist1 || bExist2){
        				this.dsList.setColumn(i,"CD_UH", this.cboCD_UH.value);
        				this.dsList.setColumn(i,"DS_UH", this.cboCD_UH.text);
        			}
        		}

        		// 공종적용
        		if( obj.id == "btnCD_ACT"){
        			if(bExist1 || bExist2){
        				this.dsList.setColumn(i,"CD_ACT", this.cboCD_ACT.value);
        				this.dsList.setColumn(i,"DS_ACT", this.cboCD_ACT.text);
        			}
        		}

        		// 접수일
        		if( obj.id == "btnDT_JEOBSU"){
        			if(bExist1 || bExist2){
        				this.dsList.setColumn(i,"DT_JEOBSU", this.calDT_JEOBSU.value);
        			}
        		}
        	}
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnTY_UMGB.addEventHandler("onclick",this.divData_btnSetComboVal_onclick,this);
            this.divData.form.btnCD_SIL.addEventHandler("onclick",this.divData_btnSetComboVal_onclick,this);
            this.divData.form.btnCD_UH.addEventHandler("onclick",this.divData_btnSetComboVal_onclick,this);
            this.divData.form.btnCD_ACT.addEventHandler("onclick",this.divData_btnSetComboVal_onclick,this);
            this.divData.form.btnDT_JEOBSU.addEventHandler("onclick",this.divData_btnSetComboVal_onclick,this);
        };
        this.loadIncludeScript("DBZ_BASS_CONVERSION_BS.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
