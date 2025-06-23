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
            this.set_titletext("현장별공사원가명세서");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">selectHeader</Col><Col id=\"SP\">DHFPR_SITECOST_TITLE_SELECT</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHFPR_SITECOST_SELECT</Col></Row><Row><Col id=\"TARGET\">selectYmMagam</Col><Col id=\"SP\">DHXPR_ACNTUNIT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SALE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_MAGAM_FR\" type=\"STRING\" size=\"256\"/><Column id=\"YM_MAGAM_TO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_COST\" type=\"STRING\" size=\"256\"/><Column id=\"YN_CORE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"TY_COST\">A</Col><Col id=\"YN_SALE\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SEARCH", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">A</Col><Col id=\"DS_CODE\">공사원가</Col></Row><Row><Col id=\"CD_CODE\">B</Col><Col id=\"DS_CODE\">분양원가</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHeader", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"YN_READONLY\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FIXEDROWS\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FROZENCOL\" type=\"STRING\" size=\"256\"/><Column id=\"YN_AUTOFILTER\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"YN_GROUPPANNEL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YN_READONLY\">N</Col><Col id=\"NO_FIXEDROWS\">1</Col><Col id=\"NO_FROZENCOL\">0</Col><Col id=\"YN_AUTOFILTER\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridSpec", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_WIDTH\" type=\"INT\" size=\"256\"/><Column id=\"YN_READONLY\" type=\"STRING\" size=\"256\"/><Column id=\"YN_ESSENTIAL\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CELLTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_ALIGN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_INPUT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HEADER1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HEADER2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HEADER3\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMBOLIST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CODEFIND\" type=\"STRING\" size=\"256\"/><Column id=\"NM_CODEFIND\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RESULTALIAS\" type=\"STRING\" size=\"256\"/><Column id=\"NO_MAXLENGTH\" type=\"INT\" size=\"256\"/><Column id=\"NO_GROUP\" type=\"INT\" size=\"256\"/><Column id=\"NO_MERGE\" type=\"INT\" size=\"256\"/><Column id=\"TY_SUMMARY\" type=\"STRING\" size=\"256\"/><Column id=\"AT_COLBACK\" type=\"STRING\" size=\"256\"/><Column id=\"AT_COLFORE\" type=\"STRING\" size=\"256\"/><Column id=\"AT_READONLY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYmMagam", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_COST", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">SC00000</Col><Col id=\"VALUE\">용역원가</Col></Row><Row><Col id=\"CODE\">SC00001</Col><Col id=\"VALUE\">국내공사원가</Col></Row><Row><Col id=\"CODE\">SC00002</Col><Col id=\"VALUE\">해외공사원가</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_CORE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">상세</Col></Row><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">요약</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_ACNT","ccfCD_CORP:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_ACNT","staCD_DEPT_ACNT:0.0","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_CORE","ccfCD_DEPT_ACNT:0.0","10","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("사용구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboYN_CORE","staYN_CORE:0.0","10","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsYN_CORE");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("cchkYN_SALE","ccboYN_CORE:0.0","10.0","175","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("매출액 표시");
            obj.set_value("Y");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_MAGAM_FR","0.0","staCD_CORP:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("회계년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_MAGAM_FR","staYM_MAGAM_FR:0.0","staCD_CORP:10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_WORK","ctclYM_MAGAM_FR:0.0","staCD_CORP:10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_MAGAM_TO","staDT_WORK:0.0","staCD_CORP:10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_COST","ccfCD_CORP:0.0","staCD_CORP:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("원가구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_COST","staTY_COST:0.0","staCD_CORP:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsTY_COST");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_text("");
            obj.set_value("0");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("crdoTY_COST","ccboTY_COST:10","staCD_CORP:10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsTY_SEARCH");
            obj.set_direction("vertical");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
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

            obj = new BindItem("item2","divSearch.form.ccfCD_DEPT_ACNT.form.CDTextBox","value","dsSearch","CD_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_DEPT_ACNT.form.DSTextBox","value","dsSearch","DS_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cchkYN_SALE","value","dsSearch","YN_SALE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctclYM_MAGAM_FR.form.TextBox","value","dsSearch","YM_MAGAM_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ctclYM_MAGAM_TO.form.TextBox","value","dsSearch","YM_MAGAM_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccboTY_COST","value","dsSearch","TY_COST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ccboYN_CORE","value","dsSearch","YN_CORE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DHF_SC_DETAIL.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);

        // 	if(this.FormInfo.ID_GROUP == "M"){
        // 		this.dsSearch.setColumn(0, "CD_DEPT_ACNT", this.UserInfo.CD_CORP);
        // 	}else{
        // 		this.dsSearch.setColumn(0, "CD_DEPT_ACNT", this.UserInfo.LEVCD_DEPT_ACNT_DOWN);
        // 	}

        	this.dsSearch.setColumn(0, "CD_DEPT_ACNT", this.AuthClient.LEVCD_DEPT_UPPER);
        	this.ccfCD_DEPT_ACNT.form.fnCodeFindLoad();

        	this.dsSearch.setColumn(0, "YN_CORE", "N");

        	// 회계년월 셋팅
        	//this.fnGetYmMagam();
        	var sYmMagam = this.AuthClient.YM_MAGAM_MONTH1;
        	this.dsSearch.setColumn(0, "YM_MAGAM_FR", sYmMagam);
        	this.dsSearch.setColumn(0, "YM_MAGAM_TO", sYmMagam);

        	//this.divSearch.form.ccfCD_DEPT_ACNT.form.fnCodeFindLoad();
        };

        /************************************************************************
        * 버튼 설정 : 화면(Tab) 전환시 마다 호출
        * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
        ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Select.set_enable(false);
        }

        /************************************************************************
        * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
        ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btnPL2 = this.gfnFormButtonAdd("PL2", "fnPL2");
        	this.btnAccountSelect = this.gfnFormButtonAdd("btnAccountSelect", "fnAccountSelect");
        };

        /************************************************************************
        * 변수 선언
        ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPT_ACNT = this.divSearch.form.ccfCD_DEPT_ACNT;
        	this.cchkYN_SALE = this.divSearch.form.cchkYN_SALE;
        	this.ctclYM_MAGAM_FR = this.divSearch.form.ctclYM_MAGAM_FR;
        	this.ctclYM_MAGAM_TO = this.divSearch.form.ctclYM_MAGAM_TO;
        	this.crdoTY_COST = this.divSearch.form.crdoTY_COST;
        	this.ccboTY_COST = this.divSearch.form.ccboTY_COST;
        	this.staCD_DEPT_ACNT = this.divSearch.form.staCD_DEPT_ACNT;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
        * 이벤트 설정
        ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_DEPT_ACNT.CodeFindName = "DHX_CFACNTUNIT";	// DHX_CFBALANCE_ACNTUNIT
        	this.ccfCD_DEPT_ACNT.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_DEPT_ACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccboTY_COST.set_index(0);

        	this.fnAddFlagRow();
        	this.gfnGridSet(this, this.dxGrid, this.dsGridInfo, this.dsGridSpec);

        	/*


        	//trace("AM_TOTAL sGetProperty->" + sGetPropertyTotal);

        	//var sSetPropertyTotal = sGetPropertyTotal.replace(": '')", ": AM_TOTAL < 0 ? 'Red' : '')");
        	var sSetPropertyTotal = sGetPropertyTotal.replace(": '')", sReplaceStr);

        	//trace("AM_TOTAL sSetPropertyTotal->" + sSetPropertyTotal);
        	this.dxGrid.setCellProperty( "body", nIdxTotal , "cssclass" , sSetPropertyTotal );
        	*/


        	this.dxGrid.sort = "false";

        	this.dxGrid.addEventHandler("oncelldblclick", this.fnGrid_Celldblclick, this);

        };

        /************************************************************************
        * 파라미터 설정
        ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YM_MAGAM_FR", "string");
        	this.dsSelect.addColumn("YM_MAGAM_TO", "string");
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSelect.addColumn("TY_COST", "string");
        	this.dsSelect.addColumn("YN_SALE", "string");
        	this.dsSelect.addColumn("YN_CORE", "string");

        	this.dsReportParam = new Dataset();
        	this.dsReportParam.addColumn("DS_CORP", "string");
        	this.dsReportParam.addColumn("YM_MAGAM", "string");
        }

        /************************************************************************
        * 컨트롤 이벤트
        ************************************************************************/
        /*
        *	조회 버튼
        */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	//this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "YM_MAGAM_FR", this.dsSearch.getColumn(0, "YM_MAGAM_FR"));
        	this.dsSelect.setColumn(0, "YM_MAGAM_TO", this.dsSearch.getColumn(0, "YM_MAGAM_TO"));
        	this.dsSelect.setColumn(0, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        	this.dsSelect.setColumn(0, "TY_COST", this.dsSearch.getColumn(0, "TY_COST"));
        	//this.dsSelect.setColumn(0, "YN_SALE", this.gfnNvl(this.dsSearch.getColumn(0, "YN_SALE"),"N"));
        	this.dsSelect.setColumn(0, "YN_SALE", "N");
        	this.dsSelect.setColumn(0, "YN_CORE", this.dsSearch.getColumn(0, "YN_CORE"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectHeader=dsSelect";
        	var outData     = "dsHeader=selectHeader0";
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

        this.fnRealSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	//this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "YM_MAGAM_FR", this.dsSearch.getColumn(0, "YM_MAGAM_FR"));
        	this.dsSelect.setColumn(0, "YM_MAGAM_TO", this.dsSearch.getColumn(0, "YM_MAGAM_TO"));
        	this.dsSelect.setColumn(0, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        	this.dsSelect.setColumn(0, "TY_COST", this.dsSearch.getColumn(0, "TY_COST"));
        	//this.dsSelect.setColumn(0, "YN_SALE", this.gfnNvl(this.dsSearch.getColumn(0, "YN_SALE"),"N"));
        	this.dsSelect.setColumn(0, "YN_SALE", "N");
        	this.dsSelect.setColumn(0, "YN_CORE", this.dsSearch.getColumn(0, "YN_CORE"));

        	var strSvcId    = "real";
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
        }

        /*
        *	삭제 버튼
        */
        this.fnDel = function() {
        }

        /*
        *	저장 버튼
        */
        this.fnSave = function() {
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
        	/*
        	--파일이 없음.........
        	this.dsReportParam.clearData();
        	this.dsReportParam.addRow();

        	this.dsReportParam.setColumn(0, "DS_CORP", "법인명 : "+ this.ccfCD_CORP.form.DSTextBox.value);

        	var reportpath  = "/dh/dhf/DHF_SC_DETAIL_RPT.ozr";
        	var inProc		= "_dsProc";
        	var inParam 	= "params=dsReportParam";
        	var inData   = "select=dsSelect";
        	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        	*/
        	return false;
        }

        /************************************************************************
        * Validate
        ************************************************************************/
        /*
        *	조회 Validate
        */
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드가 입력되지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}

         	//if (nexacro.toNumber(this.FormInfo.GR_SEARCH) == 7) {
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT_ACNT"))) {
        			this.fnVaidateCallback = function() {
        				this.ccfCD_DEPT_ACNT.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("귀속부서를 입력하세요.", "fnVaidateCallback");
        			return false;
        		}
         	//}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_MAGAM_FR"))) {
        		this.fnVaidateCallback = function() {
        			this.ctclYM_MAGAM_FR.form.TextBox.setFocus();
        		}
        		this.gfnAlert("회계년월이 입력되지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_MAGAM_TO"))) {
        		this.fnVaidateCallback = function() {
        			this.ctclYM_MAGAM_TO.form.TextBox.setFocus();
        		}
        		this.gfnAlert("회계년월이 입력되지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}

        	if (this.dsSearch.getColumn(0, "YM_MAGAM_FR").substr(0,4) != this.dsSearch.getColumn(0, "YM_MAGAM_TO").substr(0,4)) {
        		this.fnVaidateCallback = function() {
        			this.ctclYM_MAGAM_TO.form.TextBox.setFocus();
        		}
        		this.gfnAlert("회계년도가 다릅니다.", "fnVaidateCallback");
        		return false;
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
        		if(this.dsHeader.rowcount > 0)
        		{
        			this.fnSetGrid();
        			this.fnRealSelect();
        		}
        	}
        	else if (svcID == "selectYmMagam") {
        		var sYmMagam = this.gfnGetDate().substring(0, 6);
        		var sYmMagam2 = sYmMagam;
        		if(this.dsYmMagam.rowcount > 0){
        			sYmMagam = this.dsYmMagam.getColumn(0, "YM_MAGAM");
        			sYmMagam2 = sYmMagam.substr(0, 4) + "01";
        		}
        		this.dsSearch.setColumn(0, "YM_MAGAM_FR", sYmMagam2);
        		this.dsSearch.setColumn(0, "YM_MAGAM_TO", sYmMagam);
        	}
        }

        /************************************************************************
        * 코드파인드 이벤트
        ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var sCdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        		//dsUserParam.setColumn(nrow, "LEVLV_DEPT", this.UserInfo.LEVLV_DEPT_ACNT);
        		//dsUserParam.setColumn(nrow, "LEVCD_DEPT", this.UserInfo.LEVCD_DEPT_ACNT);
        	}
        	if (id == "ccfCD_DEPT_ACNT") {
        		if(this.gfnIsNull(sCdCorp)){
        			this.gfnAlert("법인코드를 선택하세요.");
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "");						//전표발행여부
        		dsUserParam.setColumn(nrow, "CD_CORP"		, sCdCorp);					//법인코드
        		dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        		dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "GR_SEARCH"     , this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER", this.AuthClient.LEVCD_DEPT_UPPER);

        // 		if (this.FormInfo.ID_GROUP == "M") {
        // 			this.ccfCD_DEPT_ACNT.CodeFindName = "DHX_CFACNTUNIT_CLOSING";
        // 			dsUserParam.setColumn(nrow, "LEVEL", this.UserInfo.LEVLV_DEPT_ACNT);
        // 			dsUserParam.setColumn(nrow, "ACNTUNIT", this.UserInfo.LEVCD_DEPT_ACNT);
        // 			dsUserParam.setColumn(nrow, "YN_CORP", "Y");
        // 			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        // 		}else {
        // 			this.ccfCD_DEPT_ACNT.CodeFindName = "DHX_CFBALANCE_ACNTUNIT";
        // 			dsUserParam.setColumn(nrow, "LEVEL", this.UserInfo.LEVLV_DEPT_ACNT);
        // 			dsUserParam.setColumn(nrow, "ACNTUNIT", this.UserInfo.LEVCD_DEPT_ACNT);
        // 			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        // 		}
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function ( id , codefindData ){

        	var arr = codefindData;
        	switch(id) {
        		case "ccfCD_CORP":
         			if (arr.length > 0) {
        				//var sCdCorp = arr[0]["CD_CORP"];
        				this.fnGetYmMagam();
        			}
        			this.ccfCD_DEPT_ACNT.form.fnCodeFindClear();
        		break;

        // 	case "ccfCD_DEPT_ACNT":
        // 		var arr = codefindData;
        // 		if (arr.length > 0) {
        // 			trace(" ID_GROUP ->" + this.FormInfo.ID_GROUP);
        //
        // 			if (this.FormInfo.ID_GROUP == "M") {
        // 				trace(" YM_MAGAM_FR ->" + arr[0]["YM_MAGAM_MONTH1"]);
        //
        // 				this.dsSearch.setColumn(0, "YM_MAGAM_FR", arr[0]["YM_MAGAM_MONTH1"]);
        // 				this.dsSearch.setColumn(0, "YM_MAGAM_TO", arr[0]["YM_MAGAM_MONTH1"]);
        // 			}
        // 			else {
        // 				trace(" YM_MAGAM_FR ->" + arr[0]["YM_MAGAM_BS1"]);
        // 				trace(" DS_COMPANYNAME ->" + arr[0]["DS_CORP"]);
        //
        // 				this.dsSearch.setColumn(0, "YM_MAGAM_FR", arr[0]["YM_MAGAM_BS1"]);
        // 				this.dsSearch.setColumn(0, "YM_MAGAM_TO", arr[0]["YM_MAGAM_BS1"]);
        // 				this.dsSearch.setColumn(0, "DS_COMPANYNAME", arr[0]["DS_CORP"]);
        // 			}
        // 		}
        // 		break;
        	}
        };

        /************************************************************************
        * 그리드 이벤트
        ************************************************************************/
        this.fnGrid_Celldblclick = function(obj,e)
        {
        	this.fnAccountSelect();
        };

        /************************************************************************
        * 기타 이벤트
        ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		if (e.columnid == "YM_MAGAM_FR") {
        			this.dsSearch.setColumn(0, "YM_MAGAM_TO", e.newvalue);
        		}
        	}
        };

        this.fnAddFlagRow = function() {
        	var nrow = this.dsGridSpec.addRow();
        	this.dsGridSpec.setColumn(nrow, "NO_WIDTH", 20);
        	this.dsGridSpec.setColumn(nrow, "YN_READONLY", "Y");
        	this.dsGridSpec.setColumn(nrow, "YN_ESSENTIAL", "N");
        	this.dsGridSpec.setColumn(nrow, "TY_CELLTYPE", "TEXT");
        	this.dsGridSpec.setColumn(nrow, "TY_ALIGN", "CENTER");
        	this.dsGridSpec.setColumn(nrow, "TY_INPUT", "KEYIN");
        	this.dsGridSpec.setColumn(nrow, "DS_FIELD", this.ucFlag);

        	nrow = this.dsGridSpec.addRow();
        	this.dsGridSpec.setColumn(nrow, "NO_WIDTH", 200);
        	this.dsGridSpec.setColumn(nrow, "YN_READONLY", "Y");
        	this.dsGridSpec.setColumn(nrow, "YN_ESSENTIAL", "N");
        	this.dsGridSpec.setColumn(nrow, "TY_CELLTYPE", "TEXT");
        	this.dsGridSpec.setColumn(nrow, "TY_ALIGN", "LEFT");
        	this.dsGridSpec.setColumn(nrow, "TY_INPUT", "KEYIN");
        	this.dsGridSpec.setColumn(nrow, "DS_FIELD", "DS_TITLE");
        	this.dsGridSpec.setColumn(nrow, "DS_HEADER1", "현장코드");
        	this.dsGridSpec.setColumn(nrow, "DS_HEADER2", "현 장 명");

        // 	this.dsGridSpec.setColumn(nrow, "DS_HEADER1", "발 주 처");
        // 	this.dsGridSpec.setColumn(nrow, "DS_HEADER2", "현장코드");
        // 	this.dsGridSpec.setColumn(nrow, "DS_HEADER3", "현 장 명");

        	nrow = this.dsGridSpec.addRow();
        	this.dsGridSpec.setColumn(nrow, "NO_WIDTH", 130);
        	this.dsGridSpec.setColumn(nrow, "YN_READONLY", "Y");
        	this.dsGridSpec.setColumn(nrow, "YN_ESSENTIAL", "N");
        	this.dsGridSpec.setColumn(nrow, "TY_CELLTYPE", "DOUBLE");
        	this.dsGridSpec.setColumn(nrow, "TY_ALIGN", "RIGHT");
        	this.dsGridSpec.setColumn(nrow, "TY_INPUT", "KEYIN");
        	this.dsGridSpec.setColumn(nrow, "DS_FIELD", "AM_TOTAL");
        	this.dsGridSpec.setColumn(nrow, "DS_HEADER1", "공사원가명세서 합계");
        	this.dsGridSpec.setColumn(nrow, "DS_HEADER2", "공사원가명세서 합계");
        // 	this.dsGridSpec.setColumn(nrow, "DS_HEADER1", "공사원가명세서 합계");
        // 	this.dsGridSpec.setColumn(nrow, "DS_HEADER2", "공사원가명세서 합계");
        // 	this.dsGridSpec.setColumn(nrow, "DS_HEADER3", "공사원가명세서 합계");
        	//this.dsGridSpec.setColumn(nrow, "DS_COMBOLIST", "9,990");
        	this.dsGridSpec.setColumn(nrow, "DS_COMBOLIST", "#,###");
        	//this.dsGridSpec.setColumn(nrow, "DS_COMBOLIST", "#,###;(#,###)");
        };


        this.fnSetGrid = function() {
        	this.dsGridSpec.clearData();

        	if (this.dsHeader.rowcount > 0) {
        		var ds = this.dsHeader;

        		// Flag 및 기초데이터
        		this.fnAddFlagRow();

        		for(var i = 0; i < ds.rowcount; i++) {
        			var nrow = this.dsGridSpec.addRow();
        			this.dsGridSpec.setColumn(nrow, "NO_WIDTH", 100);
        			this.dsGridSpec.setColumn(nrow, "YN_READONLY", "Y");
        			this.dsGridSpec.setColumn(nrow, "YN_ESSENTIAL", "N");
        			this.dsGridSpec.setColumn(nrow, "TY_CELLTYPE", "DOUBLE");
        			this.dsGridSpec.setColumn(nrow, "TY_ALIGN", "RIGHT");
        			this.dsGridSpec.setColumn(nrow, "TY_INPUT", "KEYIN");
        			this.dsGridSpec.setColumn(nrow, "DS_FIELD",  ds.getColumn(i, "CD_DEPT_ACNT"));

        			this.dsGridSpec.setColumn(nrow, "DS_HEADER1", ds.getColumn(i, "CD_DEPT_ACNT"));
        			this.dsGridSpec.setColumn(nrow, "DS_HEADER2", ds.getColumn(i, "DS_DEPT_ACNT"));

        			/*
        			this.dsGridSpec.setColumn(nrow, "DS_HEADER1", ds.getColumn(i, "DS_VENDOR"));
        			this.dsGridSpec.setColumn(nrow, "DS_HEADER2", ds.getColumn(i, "CD_DEPT_ACNT"));
        			this.dsGridSpec.setColumn(nrow, "DS_HEADER3", ds.getColumn(i, "DS_DEPT_ACNT"));
        			*/
        			//this.dsGridSpec.setColumn(nrow, "DS_COMBOLIST", "9,990");
        			this.dsGridSpec.setColumn(nrow, "DS_COMBOLIST", "#,###");
        			//this.dsGridSpec.setColumn(nrow, "DS_COMBOLIST", "#,###;(#,###)");
        		}
        	}

        	this.dsGridInfo.setColumn(0, "NO_FROZENCOL", 2);
        	//this.dsGridInfo.setColumn(0, "NO_FIXEDROWS", 3);
        	this.dsGridInfo.setColumn(0, "NO_FIXEDROWS", 2);
        	this.dsGridInfo.setColumn(0, "YN_AUTOFILTER", "N");

        	this.gfnGridSet(this, this.dxGrid, this.dsGridInfo, this.dsGridSpec);

        	var nIdxTotal = this.dxGrid.getBindCellIndex("body", "AM_TOTAL");
        	var sGetPropertyTotal = this.dxGrid.getCellProperty( "body", nIdxTotal, "cssclass" );

        	var sSetPropertyTotal = sGetPropertyTotal.replace(": '')", ": AM_TOTAL < 0 ? 'Red' : '')");
        	this.dxGrid.setCellProperty( "body", nIdxTotal , "cssclass" , sSetPropertyTotal );

        	for(var i = 0; i < ds.rowcount; i++) {
        		var DS_FIELD = ds.getColumn(i, "CD_DEPT_ACNT");
        		var nIdx = this.dxGrid.getBindCellIndex("body", DS_FIELD);
        		var sGetProperty = this.dxGrid.getCellProperty( "body", nIdx, "cssclass" );
        		var sSetProperty = sGetProperty.replace(": '')", ": " + DS_FIELD +" < 0 ? 'Red' : '')");
        		this.dxGrid.setCellProperty( "body", nIdx , "cssclass" , sSetProperty );
        	}

        }

        this.fnAccountSelect = function()
        {
        	trace("fnAccountSelect");

        	if(!this.gfnGridIsRow(this.dxGrid)) return;
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, this.dxGrid.getCellPos());

        	if(colnm == "AM_TOTAL" || colnm == "DS_TITLE") return;

        	if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_ACCOUNT"))) return;

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "YM_MAGAM_FR")))
        	{
        		this.gfnAlert("회계년월을 입력하세요.");
        		return;
        	}

        	var param = {};

        	var colIndex = this.dxGrid.getCellPos();
        	var CD_DEPT_ACNT = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, colIndex);
        	var realIndex = this.gfnGetHeadRowCellIndex(this.dxGrid, 2, CD_DEPT_ACNT);
        	var DS_DEPT_ACNT = this.dxGrid.getCellProperty("head", realIndex, "text");

         	param.CD_DEPT_ACNT = CD_DEPT_ACNT;
         	param.DS_DEPT_ACNT = DS_DEPT_ACNT;
         	param.CD_CORP_REC = this.dsSearch.getColumn(0, "CD_CORP");
         	param.DS_CORP_REC = this.dsSearch.getColumn(0, "DS_CORP");
        	param.CD_ACCOUNT = this.dsList.getColumn(this.dsList.rowposition, "CD_ACCOUNT");
         	param.DS_ACCOUNT = this.dsList.getColumn(this.dsList.rowposition, "DS_ACCOUNT");
        	param.DT_MAGAM = this.dsSearch.getColumn(0, "YM_MAGAM_FR") + "01";
        	param.DT_MAGAM2 = this.gfnGetLastDate(this.dsSearch.getColumn(0, "YM_MAGAM_TO"));
        	param.TY_VENDOR = "";
        	param.CD_VENDOR = "";
        	param.DS_VENDOR = "";

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHE_ACCOUNTSELECT_PW", "fnPopupCallback", param);
        }

        // 회계년월 가져오기
        this.fnGetYmMagam = function() {
        	return;

        	this.dsSelectYmMagam = new Dataset();
        	this.dsSelectYmMagam.addColumn("TY_GUBUN", "string");
        	this.dsSelectYmMagam.addColumn("CN_ROW", "string");
        	this.dsSelectYmMagam.addColumn("VALUE", "string");
        	this.dsSelectYmMagam.addColumn("MIN_VALUE", "string");
        	this.dsSelectYmMagam.addColumn("YN_SLIPACCEPT", "string");
        	this.dsSelectYmMagam.addColumn("CD_CORP", "string");
        	this.dsSelectYmMagam.addColumn("YN_USE", "string");
        	this.dsSelectYmMagam.addColumn("GR_DEPT_ACNT", "string");
        	this.dsSelectYmMagam.addColumn("ID_USER", "string");
        	this.dsSelectYmMagam.addColumn("GR_SEARCH", "string");
        	this.dsSelectYmMagam.addColumn("CD_DEPT", "string");

        	this.dsSelectYmMagam.clearData();
        	this.dsSelectYmMagam.addRow();
        	this.dsSelectYmMagam.setColumn(0, "TY_GUBUN", "0");
        	this.dsSelectYmMagam.setColumn(0, "CN_ROW", 100);
        	//this.dsSelectYmMagam.setColumn(0, "VALUE", this.UserInfo.LEVCD_DEPT_ACNT_DOWN);
        	this.dsSelectYmMagam.setColumn(0, "MIN_VALUE", "");
        	this.dsSelectYmMagam.setColumn(0, "YN_SLIPACCEPT", "Y");
        	this.dsSelectYmMagam.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelectYmMagam.setColumn(0, "YN_USE", "Y");

        	var strSvcId    = "selectYmMagam";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectYmMagam=dsSelectYmMagam";
        	var outData     = "dsYmMagam=selectYmMagam0";
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
            this.divSearch.form.ccboYN_CORE.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.crdoTY_COST.addEventHandler("onitemchanged",this.divSearch_rdoTY_SEARCH_onitemchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHF_SC_DETAIL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
