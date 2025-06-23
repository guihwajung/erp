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
            this.set_titletext("현설/입찰업체관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_EXPLAIN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BIDMAGAM\" type=\"STRING\" size=\"256\"/><Column id=\"AT_SITEEXPLAIN\" type=\"STRING\" size=\"256\"/><Column id=\"AT_BIDMAGAM\" type=\"STRING\" size=\"256\"/><Column id=\"NO_PR\" type=\"STRING\" size=\"256\"/><Column id=\"CT_BID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCBPR_JOINBID_SELECT_HDC</Col></Row><Row><Col id=\"TARGET\">detail</Col><Col id=\"SP\">DCBPR_JOINBID_SELECT_HDC</Col></Row><Row><Col id=\"TARGET\">u_detail</Col><Col id=\"SP\">DCBPR_JOINBID_UPDATE_HDC</Col></Row><Row><Col id=\"TARGET\">update_attend</Col><Col id=\"SP\">DCBPR_SITE_EXPLAIN_ATTEND_UPDATE</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DCBPR_ESTIMATION_SUBMIT_CANCEL</Col></Row><Row><Col id=\"TARGET\">approve</Col><Col id=\"SP\">DCBPR_EXPLAIN_BIDGONGO_APPROVE</Col></Row><Row><Col id=\"TARGET\">mail</Col><Col id=\"SP\">DZZPR_BID_MAIL_SMS_SEND</Col></Row><Row><Col id=\"TARGET\">mail1</Col><Col id=\"SP\">DZZPR_BID_MAIL_SEND</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("FitToContents").set("true");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_BID","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("입찰번호");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_BID","staNO_BID:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DCX_CFORDERPLAN_01");
            obj.getSetter("FitToContents").set("true");
            obj.getSetter("CDTextWidth").set("120");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,"100","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTopTitle","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("입찰계획");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDT_EXPLAIN","0","staTopTitle:5","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("현설일시");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDT_BIDMAGAM","0","staDT_EXPLAIN:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_text("입찰마감일시");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta00","staDT_EXPLAIN:-1","staTopTitle:5","250","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta01","staDT_BIDMAGAM:-1","sta00:-1","250","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staAT_SITEEXPLAIN","sta00:-1","staTopTitle:5","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("5");
            obj.set_text("현설장소");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staAT_BIDMAGAM","sta00:-1","staAT_SITEEXPLAIN:-1","100","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("6");
            obj.set_text("입찰마감장소");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta02","staAT_SITEEXPLAIN:-1","staTopTitle:5","250","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta03","staAT_BIDMAGAM:-1","sta02:-1","250","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_EXPLAIN","staDT_EXPLAIN:4","staTopTitle:10","166","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("9");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_BIDMAGAM","staDT_BIDMAGAM:4","sta00:4","166","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("10");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtAT_SITEEXPLAIN","staAT_SITEEXPLAIN:4","staTopTitle:10","240","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("11");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtAT_BIDMAGAM","staAT_BIDMAGAM:4","sta02:4","240","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("12");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Button("btnDT_CHANGE","ctxtDT_BIDMAGAM:3","sta00:4","70","21",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("13");
            obj.set_text("변경일자");
            obj.set_enable("true");
            obj.set_visible("false");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("ctxtCT_BID","ctxtDT_EXPLAIN:3","staTopTitle:10","40","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("14");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staCT_BID","ctxtCT_BID:3","staTopTitle:5","20","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("15");
            obj.set_text("차");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divDataTop:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBottomTitle","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("입찰참여업체");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","staBottomTitle:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btn03","1214","divDataTop:0","60","23",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("현설불참메일");
            obj.set_fittocontents("width");
            obj.set_padding("4px 7px 4px 7px");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btn04",null,"divDataTop:0","60","23","btn03:5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("입찰불참메일");
            obj.set_fittocontents("width");
            obj.set_padding("4px 7px 4px 7px");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btn02",null,"divDataTop:0","60","23","btn03:5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("현설참석여부확인");
            obj.set_fittocontents("width");
            obj.set_padding("4px 7px 4px 7px");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btn01",null,"divDataTop:0","60","23","btn02:5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("현설질의응답정보");
            obj.set_fittocontents("width");
            obj.set_padding("4px 7px 4px 7px");
            obj.set_color("crimson");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btn00",null,"divDataTop:0","60","23","btn02:5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("현설참석자명단첨부");
            obj.set_fittocontents("width");
            obj.set_padding("4px 7px 4px 7px");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btn06","987","divDataTop:0","95","23",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("현설확인");
            obj.set_fittocontents("width");
            obj.set_padding("4px 7px 4px 7px");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfNO_BID.form.CDTextBox","value","dsSearch","NO_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divDataTop.form.ctxtDT_EXPLAIN","value","dsList","DT_EXPLAIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divDataTop.form.ctxtDT_BIDMAGAM","value","dsList","DT_BIDMAGAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataTop.form.ctxtAT_SITEEXPLAIN","value","dsList","AT_SITEEXPLAIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataTop.form.ctxtAT_BIDMAGAM","value","dsList","AT_BIDMAGAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataTop.form.ctxtDT_EXPLAIN00","value","dsList","DT_EXPLAIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataTop.form.ctxtCT_BID","value","dsList","CT_BID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCB_JOINEXPLAINBIDMR_BIDING.xfdl", function() {
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
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().NO_BID)) {

        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.dsSearch.setColumn(0, "NO_BID", this.getOwnerFrame().NO_BID);
        		// 코드파인드의 명칭부분은 직접 접근해서 셋팅
        		this.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		if(!this.gfnIsNull(this.getOwnerFrame().DS_SUBCON)) {
        			this.ccfNO_BID.form.DSTextBox.set_value(this.getOwnerFrame().DS_SUBCON);
        		}

        		this.ccfCD_SITE.form.fnFitToContents();
        		this.ccfNO_BID.form.fnFitToContents();

        		this.FormBtns.Select.click();
        	}

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnExplainApp = this.gfnFormButtonAdd("btnExplainApp", "fnExplainApp");
        	this.btnExplainCancel = this.gfnFormButtonAdd("btnExplainCancel", "fnExplainCancel");
        	this.btnBtnConfirm    = this.gfnFormButtonAdd("btnBtnConfirm", "fnBtnConfirm");

        	this.btnExplainResult = this.gfnFormButtonAdd("btnExplainResult", "fnExplainResult");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfNO_BID = this.divSearch.form.ccfNO_BID;
        	this.dxGrid = this.divData.form.divDataBottom.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfNO_BID.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGrid, this.dsList2, "DC", "DCB_JOINEXPLAINBIDMR_BIDING");
        	// 그리드 더블 클릭 이벤트
        	this.dxGrid.addEventHandler("oncelldblclick", this.fnGrid_oncelldblclick, this);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("NO_BID", "string");

        	this.dsDetail = new Dataset();
        	this.dsDetail.addColumn("CD_SITE", "string");
        	this.dsDetail.addColumn("NO_BID", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("NO_BID", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("TY_BIDOREXPLAIN", "string");
        	this.dsSave.addColumn("DS_REASON", "string");
        	this.dsSave.addColumn("DS_CONTACTNAME", "string");
        	this.dsSave.addColumn("DT_CONTACTTEL", "string");
        	this.dsSave.addColumn("DS_CONTACTEMAIL", "string");
        	this.dsSave.addColumn("DT_REQUEST", "string");
        	this.dsSave.addColumn("YN_QUALIFY", "string");
        	this.dsSave.addColumn("YN_JOIN", "string");
        	this.dsSave.addColumn("YN_QUALIFY_BID", "string");
        	this.dsSave.addColumn("YN_PRE_BID", "string");
        	this.dsSave.addColumn("YN_SUBMIT_BID", "string");
        	this.dsSave.addColumn("CD_ABSENT", "string");
        	this.dsSave.addColumn("CD_ABSENT_BID", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("NO_BID", "string");
        	this.dsExec.addColumn("CD_VENDOR", "string");

        	this.dsApprove = new Dataset();
        	this.dsApprove.addColumn("NO_BID", "string");
        	this.dsApprove.addColumn("IN_FLAG", "string");

        	this.dsMail = new Dataset();
        	this.dsMail.addColumn("NO_BID", "string");
        	this.dsMail.addColumn("TY_GUBUN", "string");
        	this.dsMail.addColumn("CD_CODE", "string");

        	this.dsMail1 = new Dataset();
        	this.dsMail1.addColumn("NO_BID", "string");
        	//this.dsMail1.addColumn("TY_GUBUN", "string");
        	this.dsMail1.addColumn("CD_CODE", "string");

        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;
        	//this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));

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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnDetail = function() {
        	this.dsDetail.clearData();
        	this.dsDetail.addRow();

        	this.dsDetail.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsDetail.setColumn(0, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));

        	var strSvcId    = "detail";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "detail=dsDetail";
        	var outData     = "dsList2=detail0";
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
         *	입력 버튼
         */
        this.fnAdd = function() {
        	//this.gfnGridAdd(this.dxGrid);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList2.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList2, i);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        				this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsList2.getColumn(i, "CD_VENDOR"));
        				this.dsSave.setColumn(nrow, "TY_BIDOREXPLAIN", this.dsList2.getColumn(i, "TY_BIDOREXPLAIN"));
        				this.dsSave.setColumn(nrow, "DS_REASON", this.dsList2.getColumn(i, "DS_REASON"));
        				this.dsSave.setColumn(nrow, "DS_CONTACTNAME", this.dsList2.getColumn(i, "DS_CONTACTNAME"));
        				this.dsSave.setColumn(nrow, "DT_CONTACTTEL", this.dsList2.getColumn(i, "DT_CONTACTTEL"));
        				this.dsSave.setColumn(nrow, "DS_CONTACTEMAIL", this.dsList2.getColumn(i, "DS_CONTACTEMAIL"));
        				this.dsSave.setColumn(nrow, "DT_REQUEST", this.dsList2.getColumn(i, "DT_REQUEST"));
        				this.dsSave.setColumn(nrow, "YN_QUALIFY", this.dsList2.getColumn(i, "YN_QUALIFY"));
        				this.dsSave.setColumn(nrow, "YN_JOIN", this.dsList2.getColumn(i, "YN_JOIN"));
        				this.dsSave.setColumn(nrow, "YN_QUALIFY_BID", this.dsList2.getColumn(i, "YN_QUALIFY_BID"));
        				this.dsSave.setColumn(nrow, "YN_PRE_BID", this.dsList2.getColumn(i, "YN_PRE_BID"));
        				this.dsSave.setColumn(nrow, "YN_SUBMIT_BID", this.dsList2.getColumn(i, "YN_SUBMIT_BID"));
        				this.dsSave.setColumn(nrow, "CD_ABSENT", this.dsList2.getColumn(i, "CD_ABSENT"));
        				this.dsSave.setColumn(nrow, "CD_ABSENT_BID", this.dsList2.getColumn(i, "CD_ABSENT_BID"));
        			break;
        		}
        	}

        	var strSvcId    = "u_detail";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "u_detail=dsSave";
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
        			this.divSearch.form.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0,"NO_BID"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ccfNO_BID.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("입찰번호를 입력하세요.", "fnVaidateCallback");
        	}
        	return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg)
        {
        	if (svcID == "select") {
        		//this.gfnGridAfterSelect(this.dxGrid);

        		if(this.dsList.rowcount > 0)
        		{
        // 			if(this.dsList.getColumn(0, "CT_BID") == "1")
        // 			{
        // 				this.btnBidApp.set_text("입찰공고...");
        // 				this.btnBidApp.parent.fnSetBtn();
        // 			}
        // 			else
        // 			{
        // 				this.btnBidApp.set_text("재입찰공고...");
        // 				this.btnBidApp.parent.fnSetBtn();
        // 			}
        //
        			if(this.dsList.getColumn(0, "TY_SYSTEM") == "DM")
        			{
        				this.divData.form.btn06.set_visible(false);
        			}
        			else
        			{
        				this.divData.form.btn06.set_visible(false);
        			}
        		}

        		this.fnDetail();
        		this.fnBtnCheckAll();
        	}
        	else if (svcID == "detail") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if(svcID == "u_detail") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "update_attend")
        	{
        		if (errorCode == 0) {
        			this.fnAttend_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("현설참석여부확인이 정상처리되었습니다.", "","","fnAttend_callback");
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "exec") {
        		if (errorCode == 0) {
        			this.gfnAlert("마감해제 정상처리되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "approve") {
        		if(errorCode == 0) {
        			this.fnCallbackApprove_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			var json = this.gfnArgsToJson(strArg);
        			strArg = json.gubun;

        			var msg = "";

        			switch(strArg)
        			{
        				case "1" : msg = "현설공고가 정상처리되었습니다.";
        				break;
        				case "2" : msg = "현설공고취소가 정상처리되었습니다.";
        				break;
        				case "3" : msg = "입찰공고가 정상처리되었습니다.";
        				break;
        				case "4" : msg = "입찰공고취소가 정상처리되었습니다.";
        				break;
        				case "6" : msg = "확인완료가 정상처리되었습니다.";
        				break;
        			}

        			this.gfnAlert(msg, "fnCallbackApprove_callback");
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "mail")
        	{
        		if(errorCode == 0)
        		{
        			this.fnCallback_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			if(strArg == "DC05")
        			{
        				this.gfnAlert("입찰불참메일 발송을 정상처리하였습니다.", "fnCallback_callback");
        			}
        			else if(strArg == "DC01")
        			{
        				this.gfnAlert("현설불참메일 발송을 정상처리하였습니다.", "fnCallback_callback");
        			}
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	/*
        	else if(svcID == "mail1")
        	{
        		if(errorCode == 0)
        		{
        			this.fnCallback_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			if(strArg == "DC02")
        			{
        				this.gfnAlert("입찰유의서발송을 정상처리하였습니다.", "fnCallback_callback");
        			}
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}*/
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        // 	if (id == "ccfCD_SITE") {
        // 		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        // 	}
        //
        	if (id == "ccfNO_BID") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")))
        		{
        			this.gfnAlert("현장코드를 입력해주세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_SITE") {
        		// 현장코드 변경시 입찰번호 초기화
        		this.ccfNO_BID.form.fnCodeFindClear();
        	}
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         // 그리드 더블 클릭 이벤트
        this.fnGrid_oncelldblclick = function(obj,e)
        {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	param.CD_VENDOR = this.dsList2.getColumn(this.dsList2.rowposition, "CD_VENDOR");
        	param.DS_VENDOR = this.dsList2.getColumn(this.dsList2.rowposition, "DS_VENDOR");
        	param.DT_INPUT = this.dsList2.getColumn(this.dsList2.rowposition, "DT_INPUT");
        	param.SDS_PARAM = this.FormInfo.DS_PARAM;

        	this.gfnFormOpen("DCA", "DCA_REGISTDETAIL_R", "", param);
        };
        // this.fnGrid_RowCellChanged = function(obj:nexacro.Grid,e:nexacro.GridSelectEventInfo)
        // {
        //     if ((obj.oldrow > -1 && obj.oldrow == e.row)
        // 		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        // 		this.FormBtns.SubSelect.click();
        // 		obj.oldrow = -1;
        // 	}
        // };
        //
        // this.dsList_canrowposchange = function(obj:nexacro.NormalDataset,e:nexacro.DSRowPosChangeEventInfo) {
        // 	var can_rowchange = true;
        // 	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        // 		var flag = this.gfnGetFlag(this.dsListSub, i);
        // 		if (flag == "I" || flag == "U" || flag == "D") {
        // 			can_rowchange = false;
        // 			break;
        // 		}
        // 	}
        // 	if(!can_rowchange) {
        // 		this._row = e.newrow;
        // 		this.gfnConfirm("변경된 데이터가 있습니다.\r\n계속 진행하시겠습니까?", "dsList_canrowposchange_callback");
        // 	}
        // 	return can_rowchange;
        // }
        //
        // this.dsList_canrowposchange_callback = function(strId, val)
        // {
        // 	if(val == true) {
        // 		this.dsList.set_enableevent(false);
        // 		this.dsList.set_rowposition(this._row);
        // 		this.dsList.set_enableevent(true);
        // 	}
        // }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		this.dsList.clearData();

        		if(e.columnid == "CD_SITE")
        		{
        			this.dsSearch.setColumn(0, "NO_BID", "");
        			this.divSearch.form.ccfNO_BID.form.DSTextBox.set_value("");
        		}
        	}
        }
        //
        // this.divData_ondragmove = function(obj:nexacro.Div,e:nexacro.DragEventInfo)
        // {
        // 	if(e.userdata == "splitter") {
        // 		this.divData.form.divSplitter.set_top(e.clienty);
        // 		this.divData.form.resetScroll();
        // 	}
        // };
        //
        // this.divData_divSplitter_ondrag = function(obj:nexacro.Div,e:nexacro.DragEventInfo)
        // {
        // 	e.set_userdata("splitter");
        // 	return true;
        // };


        this.fnApprove_Bidgongo = function(flag)
        {
        	this.dsApprove.clearData();

        	var nrow = this.dsApprove.addRow();
        	this.dsApprove.setColumn(nrow, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        	this.dsApprove.setColumn(nrow, "IN_FLAG", flag);

        	if (this.dsApprove.rowcount == 0) return;

        	var strSvcId    = "approve";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "approve=dsApprove";
        	var outData     = "";
        	var strArg      = "gubun=" + flag;
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        }


        //
        // /*
        //  *	EPS 파라미터 공통 조회
        //  */
        // this.fnSelectEPS = function(lv_app) {
        //
        // 	this.dsEPS = new Dataset();
        //
        // 	this._dsProcEPS = new Dataset();
        // 	this._dsProcEPS.addColumn("TARGET", "string");
        // 	this._dsProcEPS.addColumn("SP", "string");
        //
        // 	this._dsProcEPS.addRow();
        // 	this._dsProcEPS.setColumn(0, "TARGET", "eps");
        // 	this._dsProcEPS.setColumn(0, "SP", "DZZPR_EPS_BID_SAP_MIDDLE_POPUP_SELECT");
        //
        // 	this.dsSelectEPS = new Dataset();
        // 	this.dsSelectEPS.addColumn("NO_BID", "string");		// ERP발주(입찰)번호
        // 	this.dsSelectEPS.addColumn("YN_UNION", "string");	// 통합입찰여부
        // 	this.dsSelectEPS.addColumn("ID_USER", "string");
        //
        // 	this.dsSelectEPS.addRow();
        //
        // 	this.dsSelectEPS.setColumn(0, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        // 	this.dsSelectEPS.setColumn(0, "YN_UNION", "N");
        // 	this.dsSelectEPS.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        //
        // 	var strSvcId    = "eps";
        // 	var strSvcType  = "select";
        // 	var inProc		= "_dsProcEPS";
        // 	var inData      = "eps=dsSelectEPS";
        // 	var outData     = "dsEPS=eps0";
        // 	var strArg      = "P_APP=" + lv_app;
        // 	var callBackFnc = "fnCallbackEPS";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// transaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); // 통신방법 정의 [생략가능]
        //
        // }
        //
        // this.fnCallbackEPS = function(svcID, errorCode, errorMsg, strArg)
        // {
        // 	if (errorCode!=0) {
        // 		this.gfnAlert(errorMsg);
        // 		return;
        // 	}
        //
        // 	var url = "";
        // 	if (svcID == "eps") {
        // 		url = "/buyer/bid/pop/bid_sap_middle_pop.do";
        // 	}
        // 	else if (svcID == "eps2") {
        // 		url = "/buyer/bid/open_su_nosave.do";
        // 	}
        //
        // 	if(this.dsEPS.rowcount > 0) {
        // 		var arr_param = [];
        //
        // 		arr_param.push(strArg);
        // 		for(var c = 0; c < this.dsEPS.colinfos.length; c++) {
        // 			var colid = this.dsEPS.colinfos[c].name;
        // 			var val = this.dsEPS.getColumn(0, colid);
        // 			if(val==null) val="";
        // 			arr_param.push(colid + "=" + val);
        // 		}
        //
        // 		this.gfnOpenEPS(url, arr_param.join('&'));
        // 	}
        // };

        this.fnExplainApp = function(obj,e) {
        	if (!this.fnSelectValidate()) return false;

        	//this.fnSelectEPS("N");	// N : 현설공고
        	this.fnApprove_Bidgongo("1");
        }

        this.fnExplainCancel = function(obj,e) {
        	if (!this.fnSelectValidate()) return false;

        	//this.fnSelectEPS("NC");	// NC : 현설공고취소
        	this.fnApprove_Bidgongo("2");
        }

        this.fnBidApp = function(obj,e) {
        	if (!this.fnSelectValidate()) return false;

        	//this.fnSelectEPS("O");	// O : 입찰공고
        	this.fnApprove_Bidgongo("3");
        }

        this.fnBidCancel = function(obj,e) {
        	if (!this.fnSelectValidate()) return false;

        	//this.fnSelectEPS("OC");	// OC : 입찰공고취소
        	this.fnApprove_Bidgongo("4");
        }

        this.fnAttachEtc = function() {
        	if (!this.fnSelectValidate()) return false;

        	// 현설자료별도적용
        	var param = "&P_ZBANF=" + this.dsSearch.getColumn(0, "NO_BID");
        	this.gfnOpenEPS("/buyer/bid/pop/bid_site_file_del.do", param);
        }

        this.fnMail = function() {
        	var param = {};

        	param.NO_BID = this.dsSearch.getColumn(0, "NO_BID");

        	this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DCB_MAIL_SENDER", "", param, 910, 550);
        }

        this.fnSMS = function() {
        	var param = {};

        	param.NO_BID = this.dsSearch.getColumn(0, "NO_BID");

        	this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DCB_SMS_SENDER", "", param, 910, 550);
        }



        // 현설참석자명단첨부 버튼 클릭
        this.divData_btn00_onclick = function(obj,e)
        {
        	//if(this.gfnIsNull(this.dsSearch.getColumn(0, "NO_BID"))) return;

        	var fileManager = {};
        	fileManager.CD_GUBUN = "DC51";
        	trace("NO_PR : " + this.dsList.getColumn(0, "NO_PR"));
        	fileManager.CD_DIR = [ this.dsList.getColumn(0, "NO_PR") ];
        	// CD_DIR 만 지정시 CD_DIR 배열 순대로 키1,키2,키3 까지 자동지정
        	// 저장되는 디렉토리와 키값이 다른경우 CD_REF 추가로 사용
        	//fileManager.CD_REF = [ "A1" ];
        	// 권한 및 상태에 따라 업로드,삭제 가능여부 지정 (기본: true)

        	if(this.FormInfo.TY_AUTH == "R") {
        		fileManager.IS_READONLY = true;
        	} else {
        		fileManager.IS_READONLY = false;
        	}

        	this.gfnFileManager(fileManager, "fnFileCallback");
        };

        // 현설질의응답정보 버튼 클릭
        this.divData_btn01_onclick = function(obj,e)
        {
        	if (!this.fnSelectValidate()) return false;

        	this.fnSelectEPS("Q");	// Q : 현설질의응답정보관리
        };

        // 현설참석여부확인 버튼 클릭
        this.divData_btn02_onclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "NO_BID"))) return;

        	this.dsAttendUpdate = new Dataset();
        	this.dsAttendUpdate.addColumn("NO_BID", "string");
        	this.dsAttendUpdate.addColumn("ID_USER", "string");

        	this.dsAttendUpdate.clearData();
        	var nrow = this.dsAttendUpdate.addRow();

        	this.dsAttendUpdate.setColumn(nrow, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        	this.dsAttendUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        	if (this.dsAttendUpdate.rowcount == 0) return;

        	var strSvcId    = "update_attend";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update_attend=dsAttendUpdate";
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


        // 마감해제 버튼 클릭
        this.divData_btnMagamCancel_onclick = function(obj,e)
        {
        	if (!this.fnSelectValidate()) return false;

        	this.fnExecMagam();	// R : 마감해제
        };

        this.fnExecMagam = function() {

        	this.dsExec.clearData();

        	this.dsExec.addRow();

        	var nRow = this.dsList2.rowposition;

        	this.dsExec.setColumn(0, "NO_BID", this.dsList2.getColumn(nRow, "NO_BID"));
        	this.dsExec.setColumn(0, "CD_VENDOR", this.dsList2.getColumn(nRow, "CD_VENDOR"));

        	if (this.dsExec.rowcount == 0) return;

        	var strSvcId    = "exec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "exec=dsExec";
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

        this.divData_divDataTop_btnDT_CHANGE_onclick = function(obj,e)
        {
        	var param = {};

        	var dt_bidmagam =  this.dsList.getColumn(0, "DT_BIDMAGAM");

        	var dt_bidmagam_pre = dt_bidmagam.substr(0,10).replace(/-/g, '');
        	var dt_bidmagam_hour = dt_bidmagam.substr(11,2);
        	var dt_bidmagam_min = dt_bidmagam.substr(14,2);

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.NO_BID = this.dsSearch.getColumn(0, "NO_BID");
        	param.DS_BID = this.divSearch.form.ccfNO_BID.form.DSTextBox.text;
        	param.DT_BIDMAGAM_PRE = dt_bidmagam_pre;
        	param.DT_BIDMAGAM_PRE_HOUR = dt_bidmagam_hour;
        	param.DT_BIDMAGAM_PRE_MIN = dt_bidmagam_min;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCB_BIDMAGAMTIMEDLG", "fnDT_CHANGE_callback", param, 400, 300);
        };

        this.fnDT_CHANGE_callback = function(strId, val) {
        	if(val == true)
        	{
        		this.FormBtns.Select.click();
        	}
        }


        // 현설불참메일 버튼 클릭
        this.divData_btn03_onclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "NO_BID")))
        	{
        		this.gfnAlert("입찰번호를 먼저 입력해주세요.");
        		return false;
        	}

        	this.gfnConfirm("현설불참메일을 발송하시겠습니까?","btn03_onclick_callback");
        };

        this.btn03_onclick_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.fnSendMail("DC01");
        	}
        }

        // 입찰불참메일 버튼 클릭 이벤트
        this.divData_btn04_onclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "NO_BID")))
        	{
        		this.gfnAlert("입찰번호를 먼저 입력해주세요.");
        		return false;
        	}

        	this.gfnConfirm("입찰불참메일을 발송하시겠습니까?","btn04_onclick_callback");
        };

        this.btn04_onclick_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.fnSendMail("DC05");
        	}
        }

        this.fnSendMail = function(cd_code)
        {
        	this.dsMail.clearData();
        	var nrow = this.dsMail.addRow();

        	this.dsMail.setColumn(0, "NO_BID", this.dsSearch.getColumn(nrow, "NO_BID"));
        	this.dsMail.setColumn(0, "TY_GUBUN", "M");
        	this.dsMail.setColumn(0, "CD_CODE", cd_code);

        	if (this.dsMail.rowcount == 0) return;

        	var strSvcId    = "mail";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "mail=dsMail";
        	var outData     = "";
        	var strArg      = cd_code;
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        // 입찰유의서발송 버튼 클릭 이벤트
        this.divData_btn05_onclick = function(obj,e)
        {
        	if(this.dsList2.findRow("CHK", 1) == -1) {
        		this.gfnAlert("입찰유의서를 발송할 업체를 선택하세요.");
        		return;
        	}
        	var arrCD_VENDOR = [];
        	for(var i = 0; i < this.dsList2.rowcount; i++) {
        		if(this.dsList2.getColumn(i, "CHK") == 1) {
        			arrCD_VENDOR.push(this.dsList2.getColumn(i, "CD_VENDOR"));
        		}
        	}

        	var param	= {};

        	param.CD_GUBUN = "BID";
        	param.PARAM1 = this.dsSearch.getColumn(0, "NO_BID");
        	param.PARAM2 = arrCD_VENDOR.join(',');

        	this.gfnFormOpen("DZO", "DZZ_MAIL_SENDER", "btn05_onclick_callback", param, 960, 730);

        // 	param.NO_BID = this.dsSearch.getColumn(0, "NO_BID");
        //
        // 	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCB_BID_MAIL_SENDER", "btn05_onclick_callback", param, 960, 730);
        };


        this.btn05_onclick_callback = function(strId, val) {
        	if(val == true)
        	{
        		this.FormBtns.Select.click();
        	}
        }


        /*
        // 입찰유의서발송 버튼 클릭 이벤트
        this.divData_btn05_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        {
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "NO_BID")))
        	{
        		this.gfnAlert("입찰번호를 먼저 입력해주세요.");
        		return false;
        	}

        	this.gfnConfirm("입찰유의서를 발송하시겠습니까?","btn05_onclick_callback");
        };

        this.btn05_onclick_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.fnSendMail1("DC02");
        	}
        }

        this.fnSendMail1 = function(cd_code)
        {
        	this.dsMail1.clearData();
        	var nrow = this.dsMail1.addRow();

        	this.dsMail1.setColumn(0, "NO_BID", this.dsSearch.getColumn(nrow, "NO_BID"));
        	this.dsMail1.setColumn(0, "CD_CODE", cd_code);

        	if (this.dsMail1.rowcount == 0) return;

        	var strSvcId    = "mail1";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "mail1=dsMail1";
        	var outData     = "";
        	var strArg      = cd_code;
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }
        */

        this.fnBtnCheckAll = function()
        {
        	this.gfnBtnCheck(this.btnExplainApp, this.dsList);
        	this.gfnBtnCheck(this.btnExplainCancel, this.dsList);
        // 	this.gfnBtnCheck(this.btnBidApp, this.dsList);
        // 	this.gfnBtnCheck(this.btnBidCancel, this.dsList);
        // 	this.gfnBtnCheck(this.btnAttachEtc, this.dsList);
        // 	this.gfnBtnCheck(this.btnMail, this.dsList);
        // 	this.gfnBtnCheck(this.btnSMS, this.dsList);
        }

        this.divData_btn06_onclick = function(obj,e)
        {
        	var param = {};
        	param.NO_BID = this.dsSearch.getColumn(0, "NO_BID");
        	param.DS_SUBCON = this.divSearch.form.ccfNO_BID.form.DSTextBox.text;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCB_EXPLAIN_JOINBID_SITE", "fnJOINBID_SITE_callback", param);
        };

        this.fnJOINBID_SITE_callback = function()
        {
        	this.FormBtns.Select.click();
        }

        this.fnBtnConfirm = function(obj,e)
        {
        	if (!this.fnSelectValidate()) return false;

        	this.fnApprove_Bidgongo("6");
        }

        this.fnExplainResult = function() {
        	//if(this.gfnIsNull(this.dsSearch.getColumn(0, "NO_BID"))) return;

        	var fileManager = {};
        	fileManager.CD_GUBUN = "DC48"; //외주_현설결과자료(일단 자재도 동일하게 써야할 듯)
        	trace("NO_PR : " + this.dsSearch.getColumn(0, "CD_SITE") + this.dsSearch.getColumn(0, "NO_BID"));
        	fileManager.CD_DIR = [ this.dsSearch.getColumn(0, "CD_SITE"), this.dsSearch.getColumn(0, "NO_BID") ];
        	// CD_DIR 만 지정시 CD_DIR 배열 순대로 키1,키2,키3 까지 자동지정
        	// 저장되는 디렉토리와 키값이 다른경우 CD_REF 추가로 사용
        	//fileManager.CD_REF = [ "A1" ];
        	// 권한 및 상태에 따라 업로드,삭제 가능여부 지정 (기본: true)

        	if(this.FormInfo.TY_AUTH == "R") {
        		fileManager.IS_READONLY = true;
        	} else {
        		fileManager.IS_READONLY = false;
        	}

        	this.gfnFileManager(fileManager, "fnFileCallback");
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divDataTop.form.btnDT_CHANGE.addEventHandler("onclick",this.divData_divDataTop_btnDT_CHANGE_onclick,this);
            this.divData.form.divDataBottom.form.staBottomTitle.addEventHandler("onclick",this.divData_divDataBottom_staBottomTitle_onclick,this);
            this.divData.form.btn03.addEventHandler("onclick",this.divData_btn03_onclick,this);
            this.divData.form.btn04.addEventHandler("onclick",this.divData_btn04_onclick,this);
            this.divData.form.btn02.addEventHandler("onclick",this.divData_btn02_onclick,this);
            this.divData.form.btn01.addEventHandler("onclick",this.divData_btn01_onclick,this);
            this.divData.form.btn00.addEventHandler("onclick",this.divData_btn00_onclick,this);
            this.divData.form.btn06.addEventHandler("onclick",this.divData_btn06_onclick,this);
            this.dsSearch.addEventHandler("oncolumnchanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCB_JOINEXPLAINBIDMR_BIDING.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
