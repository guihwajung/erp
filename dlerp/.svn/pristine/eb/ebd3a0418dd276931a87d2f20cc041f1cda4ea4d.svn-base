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
            this.set_titletext("평가자평가");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">selectSite</Col><Col id=\"SP\">DAJPR_TY_SITE_SELECT</Col></Row><Row><Col id=\"TARGET\">selectDist</Col><Col id=\"SP\">DAJPR_EVALUATION_ASSESSOR_DIST</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAJPR_EVALUATION_ASSESSOR_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YY_EVALUATION\" type=\"STRING\" size=\"256\"/><Column id=\"TY_EVALUATION\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"EVALUATION_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TY_EMPLOY\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SITE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"DS_CORP\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_EVALUATION", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">01</Col><Col id=\"DS_CODE\">상반기</Col></Row><Row><Col id=\"CD_CODE\">02</Col><Col id=\"DS_CODE\">하반기</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEVALUATION_SEQ", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">01</Col><Col id=\"DS_CODE\">1차</Col></Row><Row><Col id=\"CD_CODE\">02</Col><Col id=\"DS_CODE\">2차</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_EMPLOY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">01</Col><Col id=\"DS_CODE\">정직(본사)</Col></Row><Row><Col id=\"CD_CODE\">02</Col><Col id=\"DS_CODE\">정직(현장)</Col></Row><Row><Col id=\"CD_CODE\">03</Col><Col id=\"DS_CODE\">임직</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SITE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new GroupBox("grb00","0.0","10.0","690","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","grb00:0.0","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYY_EVALUATION","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("평가년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfYY_EVALUATION","staYY_EVALUATION:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_EVALUATION","ccfYY_EVALUATION:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("구분");
            obj.set_rtl("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","staTY_EVALUATION:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_EVALUATION","staTY_EVALUATION:0.0","10.0","94","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsTY_EVALUATION");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","cboTY_EVALUATION:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("평가자");
            obj.set_usedecorate("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","10.0","210","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFEVALUATION_CODEFIND");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staEVALUATION_SEQ","0.0","grb00:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("평가");
            obj.set_rtl("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdoEVALUATION_SEQ","staEVALUATION_SEQ:0.0","grb00:10.0","102","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_innerdataset("dsEVALUATION_SEQ");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_direction("vertical");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_EMPLOY","rdoEVALUATION_SEQ:0.0","grb00:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("고용구분");
            obj.set_rtl("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdoTY_EMPLOY","staTY_EMPLOY:0.0","grb00:10.0","260","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_innerdataset("dsTY_EMPLOY");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_direction("vertical");
            obj.set_rowcount("0");
            obj.set_columncount("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_SITE","rdoTY_EMPLOY:0.0","grb00:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("현장구분");
            obj.set_rtl("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_SITE","staTY_SITE:0.0","grb00:10.0","125","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_innerdataset("dsTY_SITE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_EMPLOY","cboTY_SITE:0.0","grb00:10.0","94","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_innerdataset("dsTY_EMPLOY");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_visible("false");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboEVALUATION_SEQ","cboTY_EMPLOY:0.0","grb00:10.0","94","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsEVALUATION_SEQ");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_visible("false");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","26%","100%","5",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter:5",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","0",null,"22","170",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("인사고과 평가집계표");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","sta02:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnEval2",null,"0","80","22","0",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("3");
            obj.set_text("2차평가");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnEval1",null,"0","80","22","btnEval2:5",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("2");
            obj.set_text("1차평가");
            this.divData.form.divDataBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfYY_EVALUATION.form.TextBox","value","dsSearch","YY_EVALUATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboTY_EVALUATION","value","dsSearch","TY_EVALUATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.cboEVALUATION_SEQ","value","dsSearch","EVALUATION_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.cboTY_EMPLOY","value","dsSearch","TY_EMPLOY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.cboTY_SITE","value","dsSearch","TY_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.rdoEVALUATION_SEQ","value","dsSearch","EVALUATION_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.rdoTY_EMPLOY","value","dsSearch","TY_EMPLOY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DAJ_EVALUATION_ASSESSOR.xfdl", function() {
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

        	var today = this.gfnGetDate();
        	this.dsSearch.set_enableevent(false);
        	this.ccfYY_EVALUATION.form.TextBox.set_value(today.substr(0,4));
        	this.cboTY_EVALUATION.set_index(0);

        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        	this.cboEVALUATION_SEQ.set_index(0);
        	this.cboTY_EMPLOY.set_index(0);
        	this.dsSearch.set_enableevent(true);

        	if(this.FormInfo.GR_SEARCH == "9"){
        		this.ccfID_SABUN.form.CDTextBox.set_value(this.AuthClient.ID_SABUN);
        		this.ccfID_SABUN.form.fnCodeFindLoad();
        	}

        	if(this.FormInfo.GR_SEARCH == "1"){
        		this.ccfCD_CORP.set_enable(true);
        	}else{
        		this.ccfCD_CORP.set_enable(false);
        	}

        	if(this.FormInfo.GR_SEARCH == "9"){
        		this.ccfID_SABUN.set_enable(false);
        	}else{
        		this.ccfID_SABUN.set_enable(true);
        	}

        	//화면 로드시 자동조회
        	//this.FormBtns.Select.click();
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

        };


        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.divDataTop.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataBottom.form.objGridSub;

        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfYY_EVALUATION = this.divSearch.form.ccfYY_EVALUATION;
        	this.cboTY_EVALUATION = this.divSearch.form.cboTY_EVALUATION;
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;

        	this.cboEVALUATION_SEQ = this.divSearch.form.cboEVALUATION_SEQ;
        	this.cboTY_EMPLOY = this.divSearch.form.cboTY_EMPLOY;
        	this.cboTY_SITE = this.divSearch.form.cboTY_SITE;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAJ_EVALUATION_ASSESSOR_DIST"); //평가배분표
        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DA", "DAJ_EVALUATION_ASSESSOR"); //평가대상자

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";	// 그리드 코드파인드 설정
        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";	// 셀 변경 후 이벤트
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	//현장구분
        	this.dsSelectSite = new Dataset();
        	this.dsSelectSite.addColumn("CD_CORP", "string");
        	this.dsSelectSite.addColumn("YY_EVALUATION", "string");
        	this.dsSelectSite.addColumn("TY_EVALUATION", "string");
        	this.dsSelectSite.addColumn("ID_SABUN", "string");
        	this.dsSelectSite.addColumn("EVALUATION_SEQ", "string");
        	this.dsSelectSite.addColumn("GR_SEARCH", "string");
        	this.dsSelectSite.addColumn("TY_AUTH", "string");
        	this.dsSelectSite.addColumn("GR_DEPT", "string");
        	this.dsSelectSite.addColumn("ID_USER", "string");

        	//평가등급배분
        	this.dsSelectDist = new Dataset();
        	this.dsSelectDist.addColumn("CD_CORP", "string");
        	this.dsSelectDist.addColumn("YY_EVALUATION", "string");
        	this.dsSelectDist.addColumn("TY_EVALUATION", "string");
        	this.dsSelectDist.addColumn("ID_SABUN", "string");
        	this.dsSelectDist.addColumn("EVALUATION_SEQ", "string");
        	this.dsSelectDist.addColumn("TY_EMPLOY", "string");
        	this.dsSelectDist.addColumn("TY_SITE", "string");
        	this.dsSelectDist.addColumn("GR_SEARCH", "string");
        	this.dsSelectDist.addColumn("TY_AUTH", "string");
        	this.dsSelectDist.addColumn("GR_DEPT", "string");
        	this.dsSelectDist.addColumn("ID_USER", "string");

        	//평가대상자
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YY_EVALUATION", "string");
        	this.dsSelect.addColumn("TY_EVALUATION", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("EVALUATION_SEQ", "string");
        	this.dsSelect.addColumn("TY_EMPLOY", "string");
        	this.dsSelect.addColumn("TY_SITE", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("TY_AUTH", "string");
        	this.dsSelect.addColumn("GR_DEPT", "string");
        	this.dsSelect.addColumn("ID_USER", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

        this.fnSelectSite = function() {
        	if(!this.fnSelectValid()) return;

        	this.dsSelectSite.clearData();
        	this.dsSelectSite.addRow();

        	this.dsSelectSite.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelectSite.setColumn(0, "YY_EVALUATION", this.dsSearch.getColumn(0, "YY_EVALUATION"));
        	this.dsSelectSite.setColumn(0, "TY_EVALUATION", this.dsSearch.getColumn(0, "TY_EVALUATION"));
        	this.dsSelectSite.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelectSite.setColumn(0, "EVALUATION_SEQ", this.dsSearch.getColumn(0, "EVALUATION_SEQ"));
        	this.dsSelectSite.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelectSite.setColumn(0, "TY_AUTH", this.FormInfo.TY_AUTH);
        	this.dsSelectSite.setColumn(0, "GR_DEPT", this.AuthClient.CD_DEPT);
        	this.dsSelectSite.setColumn(0, "ID_USER", this.AuthClient.ID_USER);


        	var strSvcId    = "selectSite";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectSite=dsSelectSite";
        	var outData     = "dsTY_SITE=selectSite0";
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
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnSelectValid()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);
        	this.gfnGridBeforeSelect(this.dxGridSub);
        	this.gfnSetFormStatus(this);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "YY_EVALUATION", this.dsSearch.getColumn(0, "YY_EVALUATION"));
        	this.dsSelect.setColumn(0, "TY_EVALUATION", this.dsSearch.getColumn(0, "TY_EVALUATION"));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "EVALUATION_SEQ", this.dsSearch.getColumn(0, "EVALUATION_SEQ"));
        	this.dsSelect.setColumn(0, "TY_EMPLOY", this.dsSearch.getColumn(0, "TY_EMPLOY"));
        	this.dsSelect.setColumn(0, "TY_SITE", this.dsSearch.getColumn(0, "TY_SITE"));
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "TY_AUTH", this.FormInfo.TY_AUTH);
        	this.dsSelect.setColumn(0, "GR_DEPT", this.AuthClient.CD_DEPT);
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	this.dsSelectDist.clearData();
        	this.dsSelectDist.addRow();
        	this.dsSelectDist.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelectDist.setColumn(0, "YY_EVALUATION", this.dsSearch.getColumn(0, "YY_EVALUATION"));
        	this.dsSelectDist.setColumn(0, "TY_EVALUATION", this.dsSearch.getColumn(0, "TY_EVALUATION"));
        	this.dsSelectDist.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelectDist.setColumn(0, "EVALUATION_SEQ", this.dsSearch.getColumn(0, "EVALUATION_SEQ"));
        	this.dsSelectDist.setColumn(0, "TY_EMPLOY", this.dsSearch.getColumn(0, "TY_EMPLOY"));
        	this.dsSelectDist.setColumn(0, "TY_SITE", this.dsSearch.getColumn(0, "TY_SITE"));
        	this.dsSelectDist.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelectDist.setColumn(0, "TY_AUTH", this.FormInfo.TY_AUTH);
        	this.dsSelectDist.setColumn(0, "GR_DEPT", this.AuthClient.CD_DEPT);
        	this.dsSelectDist.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectDist=dsSelectDist select=dsSelect";
        	var outData     = "dsList=selectDist0 dsListSub=select0";
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

        this.fnSelectValid = function(){
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))){
        		this.fnValidCallback = function(){
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인을 선택하세요!", "fnValidCallback");
        		return false;
        	}
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "YY_EVALUATION"))){
        		this.fnValidCallback = function(){
        			this.ccfYY_EVALUATION.form.TextBox.setFocus();
        		}
        		this.gfnAlert("평가년도를 입력하세요!", "fnValidCallback");
        		return false;
        	}
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "TY_EVALUATION"))){
        		this.fnValidCallback = function(){
        			this.cboTY_EVALUATION.setFocus();
        		}
        		this.gfnAlert("구분을 입력하세요!", "fnValidCallback");
        		return false;
        	}
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "ID_SABUN"))){
        		this.fnValidCallback = function(){
        			this.ccfID_SABUN.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("피평가자를 입력하세요!", "fnValidCallback");
        		return false;
        	}

        	return true;
        }

        this.fnAdd = function() {
        	//var nrow = this.gfnGridAdd(this.dxGrid);
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
        }

        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        	this.gfnExcelExport(this.dxGridSub);
        }

        this.fnPrint = function() {
        }

        /************************************************************************
         * Validate
         ************************************************************************/

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "selectSite") {
        		/*
        		this.dsTY_SITE.insertRow(0);
        		this.dsTY_SITE.setColumn(0, "CD_CODE", "%");
        		this.dsTY_SITE.setColumn(0, "DS_CODE", "전체");
        		*/
        		this.cboTY_SITE.set_index(0);
        	}
        	else if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.gfnGridAfterSelect(this.dxGridSub);
        	}
        // 	else if(svcID == "save") {
        // 		if (errorCode == 0) {
        // 			this.gfnAlert("저장이 완료되었습니다.");
        // 			this.FormBtns.Select.click();
        //
        // 		} else {
        // 			this.gfnAlert(errorMsg);
        // 		}
        // 	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(id == "ccfCD_CORP"){

        	}
        	else if (id == "ccfID_SABUN") {
        		if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)){
        			this.gfnAlert("법인코드를 먼저 입력하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "GR_SEARCH",this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YY_EVALUATION", this.dsSearch.getColumn(0, "YY_EVALUATION"));
        		dsUserParam.setColumn(nrow, "TY_EVALUATION", this.dsSearch.getColumn(0, "TY_EVALUATION"));
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(id == "ccfCD_CORP"){
        	}
        	if (id == "ccfID_SABUN") {
        		this.dsTY_SITE.clearData();
        		if(arr.length >0){
        			this.fnSelectSite();
        		}
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }

        this.fnGrid_AfterEdit = function(obj,e) {
        }

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e){
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);

        		if(e.columnid == "EVALUATION_SEQ"){
        			this.fnSelectSite();
        		}
        	}
        };

        this.fnDetail = function(obj,e){
        	if (!this.gfnGridIsRow(this.dxGridSub)) {
        		this.gfnAlert("평가대상자를 선택하세요");
        		return false;
        	}

        	var nRow = this.dsListSub.rowposition;

        	var CD_SLEDDING = this.gfnNvl(this.dsListSub.getColumn(nRow, "CD_SLEDDING"), "01"); //자기평가-진행상태 : |01:작성중(임시저장)|02:제출
        	var CD_1ST_SLEDDING = this.gfnNvl(this.dsListSub.getColumn(nRow, "CD_1ST_SLEDDING"), "01"); //1차평가자-진행상태 : |01:작성중(임시저장)|02:제출
        	var CD_2ST_SLEDDING = this.gfnNvl(this.dsListSub.getColumn(nRow, "CD_2ST_SLEDDING"), "01"); //2차평가자-진행상태 : |01:작성중(임시저장)|02:제출

        	var TARGET_1ST_YN = this.dsListSub.getColumn(nRow, "TARGET_1ST_YN"); //01 평가대상자
        	var TARGET_2ND_YN = this.dsListSub.getColumn(nRow, "TARGET_2ND_YN"); //02 평가대상자

        	if(CD_SLEDDING != "02"){
        		this.gfnAlert("자기평가 작성중 상태입니다.\n(자기평가 제출된 상태만 평가가능합니다.)");
        		return false;
        	}

        	if(obj.id == "btnEval1"){
        		if(TARGET_1ST_YN != "Y"){
        			this.gfnAlert("1차 평가대상자가 아닙니다.\n(1차 평가대상자를 선태하세요)");
        			return false;
        		}
        		if(CD_2ST_SLEDDING == "02"){
        			this.gfnAlert("2차 평가제출된상태입니다.\n(수정할 수 없습니다.)");
        			return false;
        		}
        	}
        	if(obj.id == "btnEval2"){
        		if(TARGET_2ND_YN != "Y"){
        			this.gfnAlert("2차 평가대상자가 아닙니다.\n(2차 평가대상자를 선태하세요)");
        			return false;
        		}
        		if(CD_1ST_SLEDDING != "02"){
        			this.gfnAlert("1차평가 작성중 상태입니다.\n(1차평가 제출된 상태만 평가가능합니다.)");
        			return false;
        		}
        	}

        	var param = {};


        	param.CD_CORP = this.dsListSub.getColumn(nRow, "CD_CORP");// 	법인
        	param.DS_CORP = this.dsListSub.getColumn(nRow, "DS_CORP");// 	법인
        	param.YY_EVALUATION = this.dsListSub.getColumn(nRow, "YY_EVALUATION");// 	평가년도
        	param.TY_EVALUATION = this.dsListSub.getColumn(nRow, "TY_EVALUATION");// 	구분
        	param.ID_SABUN = this.dsListSub.getColumn(nRow, "ID_SABUN");// 	피평가자	사원번호
        	param.DS_HNAME = this.dsListSub.getColumn(nRow, "DS_HNAME");// 	피평가자	성명
        	param.CD_POSITION = this.dsListSub.getColumn(nRow, "CD_POSITION");// 	피평가자	직위코드
        	param.DS_POSITION = this.dsListSub.getColumn(nRow, "DS_POSITION");// 	피평가자	직위
        	param.CD_DEPT = this.dsListSub.getColumn(nRow, "CD_DEPT");// 	피평가자	부서코드
        	param.DS_DEPT = this.dsListSub.getColumn(nRow, "DS_DEPT");// 	피평가자	부서
        	param.EVALUATION_SEQ = (obj.id == "btnEval1") ? "01" : "02"; //평가차수
        	param.DS_EVALUATION_SEQ = (obj.id == "btnEval1") ? "1차" : "2차"; //평가차수설명

        	trace("param", param);

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAJ_EVALUATION_ASSESSOR_PUT", "fnPopup_callback", param);
        }

        this.fnPopup_callback = function(id, val){
        	this.FormBtns.Select.click();
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

        this.divData_divDataBottom_objGridSub_oncelldblclick = function(obj,e)
        {
        	if (!this.gfnGridIsRow(this.dxGridSub)) {
        		this.gfnAlert("평가대상자를 선태하세요");
        		return false;
        	}

        	var nRow = this.dsListSub.rowposition;

        	var TARGET_1ST_YN = this.dsListSub.getColumn(nRow, "TARGET_1ST_YN"); //01 평가대상자
        	var TARGET_2ND_YN = this.dsListSub.getColumn(nRow, "TARGET_2ND_YN"); //02 평가대상자

        	if(TARGET_1ST_YN == "Y"){
        		this.fnDetail(this.divData.form.divDataBottom.form.btnEval1, null);
        	}
        	else if(TARGET_2ND_YN == "Y"){
        		this.fnDetail(this.divData.form.divDataBottom.form.btnEval2, null);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataBottom.form.objGridSub.addEventHandler("oncelldblclick",this.divData_divDataBottom_objGridSub_oncelldblclick,this);
            this.divData.form.divDataBottom.form.btnEval2.addEventHandler("onclick",this.fnDetail,this);
            this.divData.form.divDataBottom.form.btnEval1.addEventHandler("onclick",this.fnDetail,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAJ_EVALUATION_ASSESSOR.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
