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
            this.set_titletext("평가(현장)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCDPR_EVALUE_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DCDPR_EVALUE_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DCDPR_EVALUE_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YR_EVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_EVALUEKIND\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"ID_EVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HADOCONT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YR_EVALUE\"/><Col id=\"NO_SEQ\"/><Col id=\"CD_SITE\"/><Col id=\"CD_EVALUEKIND\"/><Col id=\"CD_VENDOR\"/><Col id=\"ID_EVALUE\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"110.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrollbartype("auto auto");
            this.addChild(obj.name, obj);

            obj = new Static("staYY_WORK","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("평가년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctcYY_WORK","staYY_WORK:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfMagam","ctcYY_WORK:0.0","10.0","279","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.getSetter("CodeFindName").set("DCX_CFEVALUE_MAGAM_SEQ");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_EVALUEKIND","ccfMagam:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("평가기준");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_EVALUEKIND","staCD_EVALUEKIND:0.0","10.0","246","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DCX_CFEVALUEKIND_YEAR_SITE");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_EVALUE","ccfCD_EVALUEKIND:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("평가자");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_EVALUE","staID_EVALUE:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFUSER");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","staYY_WORK:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","ctcYY_WORK:10.0","351","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("8");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","ccfCD_SITE:0.0","staYY_WORK:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("업체코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","staCD_VENDOR:0.0","staYY_WORK:10.0","245","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DCX_CFVENDOR_DC");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_HADOCONT","ccfCD_VENDOR:0.0","staYY_WORK:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_HADOCONT","staNO_HADOCONT:0.0","ctcYY_WORK:10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DCX_CFCONTRACT_03");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("12");
            obj.set_url("cmm::cmmCodeFind.xfdl");
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
            obj = new BindItem("item0","divSearch.form.ctcYY_WORK.form.TextBox","value","dsSearch","YR_EVALUE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfMagam.form.CDTextBox","value","dsSearch","NO_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_EVALUEKIND.form.CDTextBox","value","dsSearch","CD_EVALUEKIND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfID_EVALUE.form.CDTextBox","value","dsSearch","ID_EVALUE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfNO_HADOCONT.form.CDTextBox","value","dsSearch","NO_HADOCONT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCD_EVALUE_old.xfdl", function() {
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

        	var dt = new Date();
        	//this.divSearch.form.ctcYY_WORK.form.TextBox.set_value(dt.getFullYear());
        	this.dsSearch.setColumn(0, "YR_EVALUE", dt.getFullYear());
        	this.dsSearch.setColumn(0, "ID_EVALUE", this.AuthClient.ID_USER);
        	this.divSearch.form.ccfID_EVALUE.form.DSTextBox.set_value(this.AuthClient.DS_HNAME);

        	if(!this.gfnIsNull(this.getOwnerFrame().NO_SEQ) && !this.gfnIsNull(this.getOwnerFrame().CD_EVALUEKIND))
        	{
        		this.dsSearch.setColumn(0, "NO_SEQ", this.getOwnerFrame().NO_SEQ);
        		this.dsSearch.setColumn(0, "CD_EVALUEKIND", this.getOwnerFrame().CD_EVALUEKIND);
        		this.divSearch.form.ccfCD_EVALUEKIND.form.DSTextBox.set_value(this.getOwnerFrame().DS_EVALUEKIND);
        		this.dsSearch.setColumn(0, "CD_VENDOR", this.getOwnerFrame().CD_VENDOR);
        		this.divSearch.form.ccfCD_VENDOR.form.DSTextBox.set_value(this.getOwnerFrame().DS_VENDOR);
        		this.dsSearch.setColumn(0, "NO_HADOCONT", this.getOwnerFrame().NO_HADOCONT);
        		this.divSearch.form.ccfNO_HADOCONT.form.DSTextBox.set_value(this.getOwnerFrame().DS_HADOCONT);

        		this.FormBtns.Select.click();
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btn1 = this.gfnFormButtonAdd("btnLoad", "fnLoad");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfMagam = this.divSearch.form.ccfMagam;
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfCD_EVALUEKIND = this.divSearch.form.ccfCD_EVALUEKIND;
        	this.ccfCD_VENDOR = this.divSearch.form.ccfCD_VENDOR;
        	this.ccfID_EVALUE = this.divSearch.form.ccfID_EVALUE;
        	this.ccfNO_HADOCONT = this.divSearch.form.ccfNO_HADOCONT;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	// this.ccfMagam.form.DSTextBox.set_width("0");
        	this.ccfMagam.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_EVALUEKIND.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfNO_HADOCONT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCD_EVALUE");

        	// 그리드 코드파인드 설정
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YR_EVALUE", "string");
        	this.dsSelect.addColumn("NO_SEQ", "string");
        	this.dsSelect.addColumn("CD_EVALUEKIND", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");
        	this.dsSelect.addColumn("ID_EVALUE", "string");
        	this.dsSelect.addColumn("NO_HADOCONT", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_SITE", "string");
        	this.dsInsert.addColumn("YR_EVALUE", "string");
        	this.dsInsert.addColumn("NO_SEQ", "string");
        	this.dsInsert.addColumn("CD_EVALUEKIND", "string");
        	this.dsInsert.addColumn("CD_VENDOR", "string");
        	this.dsInsert.addColumn("DS_VENDOR", "string");
        	this.dsInsert.addColumn("CD_LEVEL", "string");
        	this.dsInsert.addColumn("DS_LEVEL", "string");
        	this.dsInsert.addColumn("CD_CODE", "string");
        	this.dsInsert.addColumn("DS_CODE", "string");
        	this.dsInsert.addColumn("AM_EVALUE", "bigdecimal");
        	this.dsInsert.addColumn("CD_STANDARD", "string");
        	this.dsInsert.addColumn("DS_STANDARD", "string");
        	this.dsInsert.addColumn("AM_STANDARD", "bigdecimal");
        	this.dsInsert.addColumn("ID_EVALUE", "string");
        	this.dsInsert.addColumn("DS_EVALUEJUDGE", "string");
        	this.dsInsert.addColumn("RM_BIGO", "string");
        	this.dsInsert.addColumn("NO_HADOCONT", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_SITE", "string");
        	this.dsDelete.addColumn("YR_EVALUE", "string");
        	this.dsDelete.addColumn("NO_SEQ", "string");
        	this.dsDelete.addColumn("CD_EVALUEKIND", "string");
        	this.dsDelete.addColumn("CD_VENDOR", "string");
        	this.dsDelete.addColumn("CD_LEVEL", "string");
        	this.dsDelete.addColumn("CD_CODE", "string");
        	this.dsDelete.addColumn("ID_EVALUE", "string");
        	this.dsDelete.addColumn("NO_HADOCONT", "string");
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnValidate()) return;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "YR_EVALUE", this.dsSearch.getColumn(0, "YR_EVALUE"));
        	this.dsSelect.setColumn(0, "NO_SEQ", this.dsSearch.getColumn(0, "NO_SEQ"));
        	this.dsSelect.setColumn(0, "CD_EVALUEKIND", this.dsSearch.getColumn(0, "CD_EVALUEKIND"));
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        	this.dsSelect.setColumn(0, "ID_EVALUE", this.dsSearch.getColumn(0, "ID_EVALUE"));
        	this.dsSelect.setColumn(0, "NO_HADOCONT", this.dsSearch.getColumn(0, "NO_HADOCONT"));

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
         *	입력 버튼
         */
        this.fnAdd = function() {

        };

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
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        				this.dsInsert.setColumn(nrow, "YR_EVALUE", this.dsList.getColumn(i, "YR_EVALUE"));
        				this.dsInsert.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsInsert.setColumn(nrow, "CD_EVALUEKIND", this.dsList.getColumn(i, "CD_EVALUEKIND"));
        				this.dsInsert.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsInsert.setColumn(nrow, "DS_VENDOR", this.dsList.getColumn(i, "DS_VENDOR"));
        				this.dsInsert.setColumn(nrow, "CD_LEVEL", this.dsList.getColumn(i, "CD_LEVEL"));
        				this.dsInsert.setColumn(nrow, "DS_LEVEL", this.dsList.getColumn(i, "DS_LEVEL"));
        				this.dsInsert.setColumn(nrow, "CD_CODE", this.dsList.getColumn(i, "CD_CODE"));
        				this.dsInsert.setColumn(nrow, "DS_CODE", this.dsList.getColumn(i, "DS_CODE"));
        				this.dsInsert.setColumn(nrow, "AM_EVALUE", this.dsList.getColumn(i, "AM_EVALUE"));
        				this.dsInsert.setColumn(nrow, "CD_STANDARD", this.dsList.getColumn(i, "CD_STANDARD"));
        				this.dsInsert.setColumn(nrow, "DS_STANDARD", this.dsList.getColumn(i, "DS_STANDARD"));
        				this.dsInsert.setColumn(nrow, "AM_STANDARD", this.dsList.getColumn(i, "AM_STANDARD"));
        				this.dsInsert.setColumn(nrow, "ID_EVALUE", this.dsSearch.getColumn(0, "ID_EVALUE"));
        				this.dsInsert.setColumn(nrow, "DS_EVALUEJUDGE", this.dsList.getColumn(i, "DS_EVALUEJUDGE"));
        				this.dsInsert.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsInsert.setColumn(nrow, "NO_HADOCONT", this.dsList.getColumn(i, "NO_HADOCONT"));
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        				this.dsDelete.setColumn(nrow, "YR_EVALUE", this.dsList.getColumn(i, "YR_EVALUE"));
        				this.dsDelete.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsDelete.setColumn(nrow, "CD_EVALUEKIND", this.dsList.getColumn(i, "CD_EVALUEKIND"));
        				this.dsDelete.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsDelete.setColumn(nrow, "CD_LEVEL", this.dsList.getColumn(i, "CD_LEVEL"));
        				this.dsDelete.setColumn(nrow, "CD_CODE", this.dsList.getColumn(i, "CD_CODE"));
        				this.dsDelete.setColumn(nrow, "ID_EVALUE", this.dsSearch.getColumn(0, "ID_EVALUE"));
        				this.dsDelete.setColumn(nrow, "NO_HADOCONT", this.dsList.getColumn(i, "NO_HADOCONT"));
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsDelete.rowcount == 0) return;


        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert delete=dsDelete";
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
        /*
         *	조회 Validate
         */
        this.fnValidate = function() {

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YR_EVALUE"))) {
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctcYY_WORK.form.TextBox.setFocus();
        		}
        		this.gfnAlert("평가년도를 입력하세요.");
        		return false;
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_SEQ"))){
        		this.fnVaidateCallback = function() {
        			this.ccfMagam.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("평가ID를 입력하세요.");
        		return false;
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_EVALUEKIND"))){
        		this.fnVaidateCallback = function() {
        			this.ccfCD_EVALUEKIND.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("평가기준을 입력하세요.");
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
        	}
        	else if(svcID == "save"){
        		if(errorCode == 0)
        		{
        			this.FormBtns.Select.click();
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(id == "ccfMagam"){
        		dsUserParam.setColumn(nrow, "YR_EVALUE", this.dsSearch.getColumn(0, "YR_EVALUE"));
        	}else if(id == "ccfCD_EVALUEKIND"){
        		dsUserParam.setColumn(nrow, "YR_EVALUE", this.dsSearch.getColumn(0, "YR_EVALUE"));
        		dsUserParam.setColumn(nrow, "NO_SEQ", this.dsSearch.getColumn(0, "NO_SEQ"));
        	}
        	else if(id =="ccfNO_HADOCONT") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")))
        		{
        			this.gfnAlert("현장코드를 먼저 입력해주세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id){
        };


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
         	if (id == "DCX_CFCD_STANDARD") {
        		dsUserParam.setColumn(nrow, "CD_EVALUEKIND", this.dsList.getColumn(this.dsList.rowposition, "CD_EVALUEKIND"));
        		dsUserParam.setColumn(nrow, "CD_LEVEL", this.dsList.getColumn(this.dsList.rowposition, "CD_LEVEL"));
         		dsUserParam.setColumn(nrow, "CD_CODE", this.dsList.getColumn(this.dsList.rowposition, "CD_CODE"));
        	}
        	return true;
        }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        // this.fnSearchInit = function(obj,e) {
        // 	if(e == null || (e.pretext != e.posttext)) {
        // 		// 폼상태 초기화
        // 		this.gfnSetFormStatus(this);
        // 		this.gfnGridClear(this.dxGrid);
        // 	}
        // };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		if(e.columnid == "YR_EVALUE")
        		{
        			this.dsSearch.setColumn(0, "NO_SEQ", "");
        			this.dsSearch.setColumn(0, "CD_EVALUEKIND", "");
        			this.ccfCD_EVALUEKIND.form.DSTextBox.set_value("");
        		}
        		else if(e.columnid == "NO_SEQ")
        		{
        			this.dsSearch.setColumn(0, "CD_EVALUEKIND", "");
        			this.ccfCD_EVALUEKIND.form.DSTextBox.set_value("");
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCD_EVALUE_old.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
