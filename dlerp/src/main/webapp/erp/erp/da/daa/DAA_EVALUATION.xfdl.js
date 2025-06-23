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
            this.set_titletext("평가등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAAPR_EVALUATIONLIST_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAAPR_EVALUATIONLIST_SAVE</Col></Row><Row><Col id=\"TARGET\">saveExcel</Col><Col id=\"SP\">DAAPR_EVALUATIONLIST_EXCEL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_EVALUATION", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">01</Col><Col id=\"DS_CODE\">상반기</Col></Row><Row><Col id=\"CD_CODE\">02</Col><Col id=\"DS_CODE\">하반기</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YY_EVALUATION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"TY_EVALUATION\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YY_EVALUATION\"/><Col id=\"CD_CORP\"/><Col id=\"TY_EVALUATION\"/><Col id=\"ID_SABUN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelForm", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YY_EVALUATION\" type=\"STRING\" size=\"256\"/><Column id=\"TY_EVALUATION\" type=\"STRING\" size=\"256\"/><Column id=\"TY_EVALUATION\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_OPINION\" type=\"STRING\" size=\"256\"/><Column id=\"ID_1ST_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_1ST_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"NO_1ST_POINT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_1ST_OCCUPATION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_1ST_SUPPLEMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_1ST_OPINION\" type=\"STRING\" size=\"256\"/><Column id=\"ID_2ND_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_2ND_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"NO_2ND_POINT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_UPTURN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_UPTURN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_INTERACTION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_INTERACTION\" type=\"STRING\" size=\"256\"/><Column id=\"NO_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_MEDIATION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_MEDIATION\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TOTAL_RANK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","66.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","180","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            obj.getSetter("CDTextWidth").set("30");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYR_WORK","ccfCD_CORP:0.0","10.0","66.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYY_BASE","staYR_WORK:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_EVALUATION","ctclYY_BASE:0.0","10.0","66.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_EVALUATION","staTY_EVALUATION:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsTY_EVALUATION");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.getSetter("onvaluechanged").set("dsSearch_onvaluechanged");
            obj.set_value("");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","cboTY_EVALUATION:0.0","10.0","66.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","10.0","180","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("grdForm","776","15","49","50",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsExcelForm");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"법인코드\"/><Cell col=\"1\" text=\"법인명\"/><Cell col=\"2\" text=\"평가년도\"/><Cell col=\"3\" text=\"구분(01:상반기 02:하반기)\"/><Cell col=\"4\" text=\"구분\"/><Cell col=\"5\" text=\"피평가자-사원번호\"/><Cell col=\"6\" text=\"피평가자-성명\"/><Cell col=\"7\" text=\"피평가자-부서코드\"/><Cell col=\"8\" text=\"부서명\"/><Cell col=\"9\" text=\"자기평가-평가의견\"/><Cell col=\"10\" text=\"1차평가자-사원번호\"/><Cell col=\"11\" text=\"1차평가자-성명\"/><Cell col=\"12\" text=\"1차평가자-점수\"/><Cell col=\"13\" text=\"1차평가자-강점\"/><Cell col=\"14\" text=\"1차평가자-보완점\"/><Cell col=\"15\" text=\"1차평가자-평가의견\"/><Cell col=\"16\" text=\"2차평가자-사원번호\"/><Cell col=\"17\" text=\"2차평가자-성명\"/><Cell col=\"18\" text=\"2차평가자-점수\"/><Cell col=\"19\" text=\"상향평가점수\"/><Cell col=\"20\" text=\"상향평가등급\"/><Cell col=\"21\" text=\"상호평가 점수\"/><Cell col=\"22\" text=\"상호평가 등급\"/><Cell col=\"23\" text=\"종합점수\"/><Cell col=\"24\" text=\"종합등급\"/><Cell col=\"25\" text=\"조정점수-점수\"/><Cell col=\"26\" text=\"조정점수-등급\"/><Cell col=\"27\" text=\"최종평가-점수\"/><Cell col=\"28\" text=\"최종평가-등급\"/><Cell col=\"29\" text=\"최종평가-순위\"/><Cell col=\"30\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:CD_CORP\"/><Cell col=\"1\" text=\"bind:DS_CORP\"/><Cell col=\"2\" text=\"bind:YY_EVALUATION\"/><Cell col=\"3\" text=\"bind:TY_EVALUATION\"/><Cell col=\"4\" text=\"bind:TY_EVALUATION\"/><Cell col=\"5\" text=\"bind:ID_SABUN\"/><Cell col=\"6\" text=\"bind:DS_HNAME\"/><Cell col=\"7\" text=\"bind:CD_DEPT\"/><Cell col=\"8\" text=\"bind:DS_DEPT\"/><Cell col=\"9\" text=\"bind:DS_OPINION\"/><Cell col=\"10\" text=\"bind:ID_1ST_SABUN\"/><Cell col=\"11\" text=\"bind:DS_1ST_HNAME\"/><Cell col=\"12\" text=\"bind:NO_1ST_POINT\"/><Cell col=\"13\" text=\"bind:DS_1ST_OCCUPATION\"/><Cell col=\"14\" text=\"bind:DS_1ST_SUPPLEMENT\"/><Cell col=\"15\" text=\"bind:DS_1ST_OPINION\"/><Cell col=\"16\" text=\"bind:ID_2ND_SABUN\"/><Cell col=\"17\" text=\"bind:DS_2ND_HNAME\"/><Cell col=\"18\" text=\"bind:NO_2ND_POINT\"/><Cell col=\"19\" text=\"bind:NO_UPTURN\"/><Cell col=\"20\" text=\"bind:CD_UPTURN\"/><Cell col=\"21\" text=\"bind:NO_INTERACTION\"/><Cell col=\"22\" text=\"bind:CD_INTERACTION\"/><Cell col=\"23\" text=\"bind:NO_RESULT\"/><Cell col=\"24\" text=\"bind:CD_RESULT\"/><Cell col=\"25\" text=\"bind:NO_MEDIATION\"/><Cell col=\"26\" text=\"bind:CD_MEDIATION\"/><Cell col=\"27\" text=\"bind:NO_TOTAL\"/><Cell col=\"28\" text=\"bind:CD_TOTAL\"/><Cell col=\"29\" text=\"bind:CD_TOTAL_RANK\"/><Cell col=\"30\" text=\"bind:DS_REMARK\"/></Band></Format></Formats>");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctclYY_BASE.form.TextBox","value","dsSearch","YY_EVALUATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboTY_EVALUATION","value","dsSearch","TY_EVALUATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
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
        this.registerScript("DAA_EVALUATION.xfdl", function() {
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

        	var toDay = this.gfnGetDate().substr(0,4);
        	this.dsSearch.setColumn(0, "YY_EVALUATION", toDay);
        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "TY_EVALUATION", "01");	// 상반기 default
        	this.divSearch.form.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
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
        	this.btnFormDown = this.gfnFormButtonAdd("btnFormDown", "fnFormDown"); //양식다운로드
        	this.btnExcelUpload = this.gfnFormButtonAdd("btnExcelUpload", "fnExcelUpload"); 	//엑셀업로드
        };

        /************************************************************************
        * 변수 선언
        ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctclYY_BASE = this.divSearch.form.ctclYY_BASE;
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;
        	this.cboTY_EVALUATION = this.divSearch.form.cboTY_EVALUATION;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
        * 이벤트 설정
        ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAA_EVALUATION");

        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        	// row 수정가능 여부
        	//this.dxGrid.EnterCell = "fnGrid_EnterCell";
        };

        /************************************************************************
        * 파라미터 설정
        ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YY_EVALUATION", "string");
        	this.dsSelect.addColumn("TY_EVALUATION", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("TY_AUTH", "string");
        	this.dsSelect.addColumn("GR_DEPT", "string");
        	this.dsSelect.addColumn("ID_USER", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("YY_EVALUATION", "string");
        	this.dsSave.addColumn("TY_EVALUATION", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("CD_DEPT", "string");
        	this.dsSave.addColumn("DS_OPINION", "string");
        	this.dsSave.addColumn("ID_1ST_SABUN", "string");
        	this.dsSave.addColumn("NO_1ST_POINT", "int");
        	this.dsSave.addColumn("DS_1ST_OCCUPATION", "string");
        	this.dsSave.addColumn("DS_1ST_SUPPLEMENT", "string");
        	this.dsSave.addColumn("DS_1ST_OPINION", "string");
        	this.dsSave.addColumn("ID_2ND_SABUN", "string");
        	this.dsSave.addColumn("NO_2ND_POINT", "int");
        	this.dsSave.addColumn("NO_UPTURN", "int");
        	this.dsSave.addColumn("CD_UPTURN", "string");
        	this.dsSave.addColumn("NO_INTERACTION", "int");
        	this.dsSave.addColumn("CD_INTERACTION", "string");
        	this.dsSave.addColumn("NO_RESULT", "int");
        	this.dsSave.addColumn("CD_RESULT", "string");
        	this.dsSave.addColumn("NO_MEDIATION", "int");
        	this.dsSave.addColumn("CD_MEDIATION", "string");
        	this.dsSave.addColumn("NO_TOTAL", "int");
        	this.dsSave.addColumn("CD_TOTAL", "string");
        	this.dsSave.addColumn("CD_TOTAL_RANK", "int");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("GR_SEARCH", "string");
        	this.dsSave.addColumn("TY_AUTH", "string");
        	this.dsSave.addColumn("GR_DEPT", "string");
        	this.dsSave.addColumn("ID_USER", "string");

        	this.dsSaveExcel = new Dataset();
        	this.dsSaveExcel.addColumn("CD_CORP", "string");
        	this.dsSaveExcel.addColumn("YY_EVALUATION", "string");
        	this.dsSaveExcel.addColumn("TY_EVALUATION", "string");
        	this.dsSaveExcel.addColumn("ID_SABUN", "string");
        	this.dsSaveExcel.addColumn("CD_DEPT", "string");
        	this.dsSaveExcel.addColumn("DS_OPINION", "string");
        	this.dsSaveExcel.addColumn("ID_1ST_SABUN", "string");
        	this.dsSaveExcel.addColumn("NO_1ST_POINT", "int");
        	this.dsSaveExcel.addColumn("DS_1ST_OCCUPATION", "string");
        	this.dsSaveExcel.addColumn("DS_1ST_SUPPLEMENT", "string");
        	this.dsSaveExcel.addColumn("DS_1ST_OPINION", "string");
        	this.dsSaveExcel.addColumn("ID_2ND_SABUN", "string");
        	this.dsSaveExcel.addColumn("NO_2ND_POINT", "int");
        	this.dsSaveExcel.addColumn("NO_UPTURN", "int");
        	this.dsSaveExcel.addColumn("CD_UPTURN", "string");
        	this.dsSaveExcel.addColumn("NO_INTERACTION", "int");
        	this.dsSaveExcel.addColumn("CD_INTERACTION", "string");
        	this.dsSaveExcel.addColumn("NO_RESULT", "int");
        	this.dsSaveExcel.addColumn("CD_RESULT", "string");
        	this.dsSaveExcel.addColumn("NO_MEDIATION", "int");
        	this.dsSaveExcel.addColumn("CD_MEDIATION", "string");
        	this.dsSaveExcel.addColumn("NO_TOTAL", "int");
        	this.dsSaveExcel.addColumn("CD_TOTAL", "string");
        	this.dsSaveExcel.addColumn("CD_TOTAL_RANK", "int");
        	this.dsSaveExcel.addColumn("DS_REMARK", "string");
        	this.dsSaveExcel.addColumn("GR_SEARCH", "string");
        	this.dsSaveExcel.addColumn("TY_AUTH", "string");
        	this.dsSaveExcel.addColumn("GR_DEPT", "string");
        	this.dsSaveExcel.addColumn("ID_USER", "string");
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
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "YY_EVALUATION", this.dsSearch.getColumn(0, "YY_EVALUATION"));
        	this.dsSelect.setColumn(0, "TY_EVALUATION", this.dsSearch.getColumn(0, "TY_EVALUATION"));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "TY_AUTH", this.FormInfo.TY_AUTH);
        	this.dsSelect.setColumn(0, "GR_DEPT", this.AuthClient.CD_DEPT);
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

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
        	var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        	this.dsList.setColumn(nrow, "YY_EVALUATION", this.dsSearch.getColumn(0, "YY_EVALUATION"));
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
        			this.dsSave.setColumn(nrow, "TY_WRK", flag);
        			this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        			this.dsSave.setColumn(nrow, "YY_EVALUATION", this.gfnNvl(this.dsList.getColumn(i, "YY_EVALUATION"), ""));
        			this.dsSave.setColumn(nrow, "TY_EVALUATION", this.gfnNvl(this.dsList.getColumn(i, "TY_EVALUATION"), ""));
        			this.dsSave.setColumn(nrow, "ID_SABUN", this.gfnNvl(this.dsList.getColumn(i, "ID_SABUN"), ""));
        			this.dsSave.setColumn(nrow, "CD_DEPT", this.gfnNvl(this.dsList.getColumn(i, "CD_DEPT"), ""));
        			this.dsSave.setColumn(nrow, "DS_OPINION", this.gfnNvl(this.dsList.getColumn(i, "DS_OPINION"), ""));
        			this.dsSave.setColumn(nrow, "ID_1ST_SABUN", this.gfnNvl(this.dsList.getColumn(i, "ID_1ST_SABUN"), ""));
        			this.dsSave.setColumn(nrow, "NO_1ST_POINT", this.gfnNvl(this.dsList.getColumn(i, "NO_1ST_POINT"), 0));
        			this.dsSave.setColumn(nrow, "DS_1ST_OCCUPATION", this.gfnNvl(this.dsList.getColumn(i, "DS_1ST_OCCUPATION"), ""));
        			this.dsSave.setColumn(nrow, "DS_1ST_SUPPLEMENT", this.gfnNvl(this.dsList.getColumn(i, "DS_1ST_SUPPLEMENT"), ""));
        			this.dsSave.setColumn(nrow, "DS_1ST_OPINION", this.gfnNvl(this.dsList.getColumn(i, "DS_1ST_OPINION"), ""));
        			this.dsSave.setColumn(nrow, "ID_2ND_SABUN", this.gfnNvl(this.dsList.getColumn(i, "ID_2ND_SABUN"), ""));
        			this.dsSave.setColumn(nrow, "NO_2ND_POINT", this.gfnNvl(this.dsList.getColumn(i, "NO_2ND_POINT"), 0));
        			this.dsSave.setColumn(nrow, "NO_UPTURN", this.gfnNvl(this.dsList.getColumn(i, "NO_UPTURN"), 0));
        			this.dsSave.setColumn(nrow, "CD_UPTURN", this.gfnNvl(this.dsList.getColumn(i, "CD_UPTURN"), ""));
        			this.dsSave.setColumn(nrow, "NO_INTERACTION", this.gfnNvl(this.dsList.getColumn(i, "NO_INTERACTION"), 0));
        			this.dsSave.setColumn(nrow, "CD_INTERACTION", this.gfnNvl(this.dsList.getColumn(i, "CD_INTERACTION"), ""));
        			this.dsSave.setColumn(nrow, "NO_RESULT", this.gfnNvl(this.dsList.getColumn(i, "NO_RESULT"), 0));
        			this.dsSave.setColumn(nrow, "CD_RESULT", this.gfnNvl(this.dsList.getColumn(i, "CD_RESULT"), ""));
        			this.dsSave.setColumn(nrow, "NO_MEDIATION", this.gfnNvl(this.dsList.getColumn(i, "NO_MEDIATION"), 0));
        			this.dsSave.setColumn(nrow, "CD_MEDIATION", this.gfnNvl(this.dsList.getColumn(i, "CD_MEDIATION"), ""));
        			this.dsSave.setColumn(nrow, "NO_TOTAL", this.gfnNvl(this.dsList.getColumn(i, "NO_TOTAL"), 0));
        			this.dsSave.setColumn(nrow, "CD_TOTAL", this.gfnNvl(this.dsList.getColumn(i, "CD_TOTAL"), ""));
        			this.dsSave.setColumn(nrow, "CD_TOTAL_RANK", this.gfnNvl(this.dsList.getColumn(i, "CD_TOTAL_RANK"), ""));
        			this.dsSave.setColumn(nrow, "DS_REMARK", this.gfnNvl(this.dsList.getColumn(i, "DS_REMARK"), ""));
        			this.dsSave.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			this.dsSave.setColumn(nrow, "TY_AUTH", this.FormInfo.TY_AUTH);
        			this.dsSave.setColumn(nrow, "GR_CORP", this.AuthClient.CD_CORP);
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

        /*
        *	엑셀업로드(확장버튼)
        */
        this.fnSaveExcel = function() {
        	if (this.dsSaveExcel.rowcount == 0) return;

        	var strSvcId    = "saveExcel";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "saveExcel=dsSaveExcel";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        		strSvcType , 	// transaction을 요청할 구분
        		inProc,			// Procedure 정보 Dataset 이름
        		inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        		outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        		strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        		callBackFnc);   // 통신방법 정의 [생략가능]
        }
        /************************************************************************
        * Validate
        ************************************************************************/
        /*
        *	조회 Validate
        */
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"YY_EVALUATION"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctclYY_BASE.form.TextBox.setFocus();
        		}
        		this.gfnAlert("기준년도를 입력하세요.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_CORP"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인을 입력하세요.", "fnVaidateCallback");
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
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "saveExcel") {
        		if (errorCode == 0) {
        			this.gfnAlert("엑셀업로드 저장되었습니다.");
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

        	if(id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}else if(id == "ccfID_SABUN") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))){
        			this.gfnAlert("법인을 먼저 선택하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP", "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	// 코드,명칭 외 추가 컬럼 처리
        	var arr = codeFindData; //this.ccfCD_DEPT_ORG.form.SelectedData; 둘다 사용가능
        	if(id == "ccfCD_CORP") {
        		this.ccfID_SABUN.form.fnCodeFindClear();
        	}else if(id == "ccfID_SABUN") {
        	}
        }

        /************************************************************************
        * 그리드 이벤트
        ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 사원번호
        	if(id == "DAX_CFBASEINFO_ALL") {
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP", "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        	}
        	// 부서코드
        	if(id == "DAX_CFDEPT") {
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "YN_CURRENT", "%");
        	}
        	return true;
        };

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {

        	if(id == "DAX_CFBASEINFO_ALL") {
        		var arr = codeFindData;
        		var nRow = this.dsList.rowposition;

        		if(arr.length > 0) {
        			this.dsList.setColumn(nRow, "CD_DEPT", arr[0]["CD_DEPT"]);
        			this.dsList.setColumn(nRow, "DS_DEPT", arr[0]["DS_DEPT"]);
        		} else {
        			this.dsList.setColumn(nRow, "CD_DEPT", "");
        			this.dsList.setColumn(nRow, "DS_DEPT", "");
        		}
        	}

        	return true;
        };
        this.fnGrid_EnterCell = function(obj, row, cell) {
        	// 수정가능 true, false 처리하려는 컬럼에 대해서만 return 처리할것.
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);	// 클릭한 cell의 컬럼명

        	// 클릭했을때 클릭한 cell을 수정 가능 or 불가능 상태로 만든다.
        	// YN_EDIT 값이 Y일때만 수정가능상태
        	if(this.dsList.getColumn(row, "YN_EDIT") == "N") {
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
        	}
        };

        this.fnExcelUpload = function(obj,e) {
        	if (!this.fnSelectValidate()) return false;

        	// this.gfnExcelImport("적용할Dataset명","sheet명","데이터시작좌표","콜백함수명","구분ID",현재폼);
        	this.gfnExcelImport("dsExcelForm","Sheet1","A2","fnExcelImportCallback","import",this);
        };

        this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet) {
         	if (dsOut.rowcount == 0)  {
        		this.gfnAlert("엑셀파일에 내용이 없습니다.");
        		return false;
        	}

        	trace(dsOut.saveXML());
        	this.dsSaveExcel.clearData();

        	var bSucc = true;
        	var sMsg = "";

        	this.dsSaveExcel.set_enableevent(false);
        	for (var i=0; i< dsOut.rowcount; i++) {
        		var nrow = this.dsSaveExcel.addRow();

        		this.dsSaveExcel.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsSaveExcel.setColumn(nrow, "YY_EVALUATION", this.dsSearch.getColumn(0, "YY_EVALUATION"));
        		this.dsSaveExcel.setColumn(nrow, "TY_EVALUATION", this.dsSearch.getColumn(0, "TY_EVALUATION"));

        		if(this.gfnIsNull(this.gfnTrim(dsOut.getColumn(i, "Column3")))){
        			sMsg = "사번을 입력하세요!";
        			bSucc = false;
        			break;
        		}
        		this.dsSaveExcel.setColumn(nrow, "ID_SABUN", this.gfnNvl(dsOut.getColumn(i, "Column3"), ""));
        		this.dsSaveExcel.setColumn(nrow, "CD_DEPT", this.gfnNvl(dsOut.getColumn(i, "Column4"), ""));
        		this.dsSaveExcel.setColumn(nrow, "DS_OPINION", this.gfnNvl(dsOut.getColumn(i, "Column5"), ""));
        		this.dsSaveExcel.setColumn(nrow, "ID_1ST_SABUN", this.gfnNvl(dsOut.getColumn(i, "Column6"), ""));
        		this.dsSaveExcel.setColumn(nrow, "NO_1ST_POINT", this.gfnNvl(dsOut.getColumn(i, "Column7"), 0));
        		this.dsSaveExcel.setColumn(nrow, "DS_1ST_OCCUPATION", this.gfnNvl(dsOut.getColumn(i, "Column8"), ""));
        		this.dsSaveExcel.setColumn(nrow, "DS_1ST_SUPPLEMENT", this.gfnNvl(dsOut.getColumn(i, "Column9"), ""));
        		this.dsSaveExcel.setColumn(nrow, "DS_1ST_OPINION", this.gfnNvl(dsOut.getColumn(i, "Column10"), ""));
        		this.dsSaveExcel.setColumn(nrow, "ID_2ND_SABUN", this.gfnNvl(dsOut.getColumn(i, "Column11"), ""));
        		this.dsSaveExcel.setColumn(nrow, "NO_2ND_POINT", this.gfnNvl(dsOut.getColumn(i, "Column12"), 0));
        		this.dsSaveExcel.setColumn(nrow, "NO_UPTURN", this.gfnNvl(dsOut.getColumn(i, "Column13"), 0));
        		this.dsSaveExcel.setColumn(nrow, "CD_UPTURN", this.gfnNvl(dsOut.getColumn(i, "Column14"), ""));
        		this.dsSaveExcel.setColumn(nrow, "NO_INTERACTION", this.gfnNvl(dsOut.getColumn(i, "Column15"), 0));
        		this.dsSaveExcel.setColumn(nrow, "CD_INTERACTION", this.gfnNvl(dsOut.getColumn(i, "Column16"), ""));
        		this.dsSaveExcel.setColumn(nrow, "NO_RESULT", this.gfnNvl(dsOut.getColumn(i, "Column17"), 0));
        		this.dsSaveExcel.setColumn(nrow, "CD_RESULT", this.gfnNvl(dsOut.getColumn(i, "Column18"), ""));
        		this.dsSaveExcel.setColumn(nrow, "NO_MEDIATION", this.gfnNvl(dsOut.getColumn(i, "Column19"), 0));
        		this.dsSaveExcel.setColumn(nrow, "CD_MEDIATION", this.gfnNvl(dsOut.getColumn(i, "Column20"), ""));
        		this.dsSaveExcel.setColumn(nrow, "NO_TOTAL", this.gfnNvl(dsOut.getColumn(i, "Column21"), 0));
        		this.dsSaveExcel.setColumn(nrow, "CD_TOTAL", this.gfnNvl(dsOut.getColumn(i, "Column22"), ""));
        		this.dsSaveExcel.setColumn(nrow, "CD_TOTAL_RANK", this.gfnNvl(dsOut.getColumn(i, "Column23"), ""));
        		this.dsSaveExcel.setColumn(nrow, "DS_REMARK", this.gfnNvl(dsOut.getColumn(i, "Column24"), ""));
        		this.dsSaveExcel.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		this.dsSaveExcel.setColumn(nrow, "TY_AUTH", this.FormInfo.TY_AUTH);
        		this.dsSaveExcel.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        		this.dsSaveExcel.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		this.dsSaveExcel.setColumn(nrow, this.ucFlag, "I");
        	}
        	this.dsSaveExcel.set_enableevent(true);

        	if(!bSucc){
        		this.gfnAlert(sMsg);
        		return;
        	}
        	if(this.dsSaveExcel.rowcount > 0){
        		this.gfnSetFormStatus(this, "I");
        		this.fnSaveExcel();
        	}else{
        		this.gfnAlert("업로드된 데이터가 없습니다.");
        		return;
        	}
        };

        //양식다운로드 확장버튼
        this.fnFormDown = function(){
        	this.dsExcelForm.clearData();
        	this.gfnExcelExport(this.divData.form.grdForm);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAA_EVALUATION.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
