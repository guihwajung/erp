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
            this.set_titletext("전사인원현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsHead", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"CD_EMPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_POSITION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAAPR_CORPLIST_TOTAL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_REGIST", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"string\" size=\"32\"/><Column id=\"DS_CORP\" type=\"string\" size=\"32\"/><Column id=\"TY_DEPT\" type=\"string\" size=\"32\"/><Column id=\"NM_DEPT\" type=\"string\" size=\"32\"/><Column id=\"01A01\" type=\"int\" size=\"4\"/><Column id=\"01A03\" type=\"int\" size=\"4\"/><Column id=\"01A04\" type=\"int\" size=\"4\"/><Column id=\"01A05\" type=\"int\" size=\"4\"/><Column id=\"01A06\" type=\"int\" size=\"4\"/><Column id=\"01ZZ\" type=\"int\" size=\"4\"/><Column id=\"02A06\" type=\"int\" size=\"4\"/><Column id=\"02A07\" type=\"int\" size=\"4\"/><Column id=\"02A08\" type=\"int\" size=\"4\"/><Column id=\"02A09\" type=\"int\" size=\"4\"/><Column id=\"02A10\" type=\"int\" size=\"4\"/><Column id=\"02A11\" type=\"int\" size=\"4\"/><Column id=\"02A12\" type=\"int\" size=\"4\"/><Column id=\"02A13\" type=\"int\" size=\"4\"/><Column id=\"02A14\" type=\"int\" size=\"4\"/><Column id=\"02A15\" type=\"int\" size=\"4\"/><Column id=\"02ZZ\" type=\"int\" size=\"4\"/><Column id=\"0303\" type=\"BIGDECIMAL\" size=\"4\"/><Column id=\"99ZZ\" type=\"int\" size=\"4\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOut", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"0.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"50\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"4\" text=\"법인\"/><Cell col=\"4\" colspan=\"8\" text=\"임원\"/><Cell col=\"12\" colspan=\"10\" text=\"정규직\"/><Cell col=\"22\" rowspan=\"2\" text=\"계약직\"/><Cell col=\"23\" rowspan=\"2\" text=\"합계\"/><Cell row=\"1\" text=\"법인\"/><Cell row=\"1\" col=\"1\" text=\"법인명\"/><Cell row=\"1\" col=\"2\" text=\"부서\"/><Cell row=\"1\" col=\"3\" text=\"부서명\"/><Cell row=\"1\" col=\"4\" text=\"회장\"/><Cell row=\"1\" col=\"5\" text=\"사장\"/><Cell row=\"1\" col=\"6\" text=\"부사장\"/><Cell row=\"1\" col=\"7\" text=\"전무\"/><Cell row=\"1\" col=\"8\" text=\"상무\"/><Cell row=\"1\" col=\"9\" text=\"대표\"/><Cell row=\"1\" col=\"10\" text=\"상무(전문위원)\"/><Cell row=\"1\" col=\"11\" text=\"소계\"/><Cell row=\"1\" col=\"12\" text=\"이사\"/><Cell row=\"1\" col=\"13\" text=\"이사대우\"/><Cell row=\"1\" col=\"14\" text=\"부장\"/><Cell row=\"1\" col=\"15\" text=\"부장대우\"/><Cell row=\"1\" col=\"16\" text=\"차장\"/><Cell row=\"1\" col=\"17\" text=\"과장\"/><Cell row=\"1\" col=\"18\" text=\"대리\"/><Cell row=\"1\" col=\"19\" text=\"주임\"/><Cell row=\"1\" col=\"20\" text=\"사원\"/><Cell row=\"1\" col=\"21\" text=\"소계\"/></Band><Band id=\"body\"><Cell text=\"bind:CD_CORP\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:DS_CORP\"/><Cell col=\"2\" text=\"bind:TY_DEPT\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:NM_DEPT\"/><Cell col=\"4\" text=\"bind:회장\"/><Cell col=\"5\" text=\"bind:사장\"/><Cell col=\"6\" text=\"bind:부사장\"/><Cell col=\"7\" text=\"bind:전무\"/><Cell col=\"8\" text=\"bind:상무\"/><Cell col=\"9\" text=\"bind:대표\"/><Cell col=\"10\" text=\"bind:상무(전문위원)\"/><Cell col=\"11\" text=\"bind:소계\"/><Cell col=\"12\" text=\"bind:이사\"/><Cell col=\"13\" text=\"bind:이사대우\"/><Cell col=\"14\" text=\"bind:부장\"/><Cell col=\"15\" text=\"bind:부장대우\"/><Cell col=\"16\" text=\"bind:차장\"/><Cell col=\"17\" text=\"bind:과장\"/><Cell col=\"18\" text=\"bind:대리\"/><Cell col=\"19\" text=\"bind:주임\"/><Cell col=\"20\" text=\"bind:사원\"/><Cell col=\"21\"/><Cell col=\"22\" text=\"bind:계약직\"/><Cell col=\"23\" text=\"bind:합계\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" text=\"본사\" textAlign=\"center\"/><Cell col=\"3\"/><Cell col=\"4\" text=\"expr:dataset.getCaseSum( &quot;TY_DEPT == '00'&quot;, &quot;회장&quot; )\" textAlign=\"right\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\"/><Cell row=\"1\" col=\"2\" text=\"현장\" textAlign=\"center\"/><Cell row=\"1\" col=\"3\"/><Cell row=\"1\" col=\"4\" text=\"expr:dataset.getCaseSum( &quot;TY_DEPT == '01'&quot;, &quot;회장&quot; )\" textAlign=\"right\"/><Cell row=\"1\" col=\"5\"/><Cell row=\"1\" col=\"6\"/><Cell row=\"1\" col=\"7\"/><Cell row=\"1\" col=\"8\"/><Cell row=\"1\" col=\"9\"/><Cell row=\"1\" col=\"10\"/><Cell row=\"1\" col=\"11\"/><Cell row=\"1\" col=\"12\"/><Cell row=\"1\" col=\"13\"/><Cell row=\"1\" col=\"14\"/><Cell row=\"1\" col=\"15\"/><Cell row=\"1\" col=\"16\"/><Cell row=\"1\" col=\"17\"/><Cell row=\"1\" col=\"18\"/><Cell row=\"1\" col=\"19\"/><Cell row=\"1\" col=\"20\"/><Cell row=\"1\" col=\"21\"/><Cell row=\"1\" col=\"22\"/><Cell row=\"1\" col=\"23\"/><Cell row=\"2\"/><Cell row=\"2\" col=\"1\"/><Cell row=\"2\" col=\"2\" text=\"합계\" textAlign=\"center\"/><Cell row=\"2\" col=\"3\"/><Cell row=\"2\" col=\"4\" text=\"expr:dataset.getSum( &quot;회장&quot; )\" textAlign=\"right\"/><Cell row=\"2\" col=\"5\"/><Cell row=\"2\" col=\"6\"/><Cell row=\"2\" col=\"7\"/><Cell row=\"2\" col=\"8\"/><Cell row=\"2\" col=\"9\"/><Cell row=\"2\" col=\"10\"/><Cell row=\"2\" col=\"11\"/><Cell row=\"2\" col=\"12\"/><Cell row=\"2\" col=\"13\"/><Cell row=\"2\" col=\"14\"/><Cell row=\"2\" col=\"15\"/><Cell row=\"2\" col=\"16\"/><Cell row=\"2\" col=\"17\"/><Cell row=\"2\" col=\"18\"/><Cell row=\"2\" col=\"19\"/><Cell row=\"2\" col=\"20\"/><Cell row=\"2\" col=\"21\"/><Cell row=\"2\" col=\"22\"/><Cell row=\"2\" col=\"23\"/><Cell row=\"3\"/><Cell row=\"3\" col=\"1\"/><Cell row=\"3\" col=\"2\" text=\"비율\" textAlign=\"center\"/><Cell row=\"3\" col=\"3\"/><Cell row=\"3\" col=\"4\" text=\"expr:expr:dataset.getSum( &quot;회장&quot; )\" textAlign=\"right\"/><Cell row=\"3\" col=\"5\"/><Cell row=\"3\" col=\"6\"/><Cell row=\"3\" col=\"7\"/><Cell row=\"3\" col=\"8\"/><Cell row=\"3\" col=\"9\"/><Cell row=\"3\" col=\"10\"/><Cell row=\"3\" col=\"11\"/><Cell row=\"3\" col=\"12\"/><Cell row=\"3\" col=\"13\"/><Cell row=\"3\" col=\"14\"/><Cell row=\"3\" col=\"15\"/><Cell row=\"3\" col=\"16\"/><Cell row=\"3\" col=\"17\"/><Cell row=\"3\" col=\"18\"/><Cell row=\"3\" col=\"19\"/><Cell row=\"3\" col=\"20\"/><Cell row=\"3\" col=\"21\"/><Cell row=\"3\" col=\"22\"/><Cell row=\"3\" col=\"23\"/></Band></Format></Formats>");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid00","780","350",null,null,"263","233",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"50\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"4\" text=\"법인정보1\"/><Cell col=\"4\" colspan=\"8\" text=\"임원2\"/><Cell col=\"12\" colspan=\"10\" text=\"정규직3\"/><Cell col=\"22\" rowspan=\"2\" text=\"계약직4\"/><Cell col=\"23\" rowspan=\"2\" text=\"합계5\"/><Cell row=\"1\" text=\"법인\"/><Cell row=\"1\" col=\"1\" text=\"법인명\"/><Cell row=\"1\" col=\"2\" text=\"부서\"/><Cell row=\"1\" col=\"3\" text=\"부서명\"/><Cell row=\"1\" col=\"4\" text=\"회장\"/><Cell row=\"1\" col=\"5\" text=\"사장\"/><Cell row=\"1\" col=\"6\" text=\"부사장\"/><Cell row=\"1\" col=\"7\" text=\"전무\"/><Cell row=\"1\" col=\"8\" text=\"상무\"/><Cell row=\"1\" col=\"9\" text=\"대표\"/><Cell row=\"1\" col=\"10\" text=\"상무(전문위원)\"/><Cell row=\"1\" col=\"11\" text=\"임원소계\"/><Cell row=\"1\" col=\"12\" text=\"이사\"/><Cell row=\"1\" col=\"13\" text=\"이사대우\"/><Cell row=\"1\" col=\"14\" text=\"부장\"/><Cell row=\"1\" col=\"15\" text=\"부장대우\"/><Cell row=\"1\" col=\"16\" text=\"차장\"/><Cell row=\"1\" col=\"17\" text=\"과장\"/><Cell row=\"1\" col=\"18\" text=\"대리\"/><Cell row=\"1\" col=\"19\" text=\"주임\"/><Cell row=\"1\" col=\"20\" text=\"사원\"/><Cell row=\"1\" col=\"21\" text=\"정규직소계\"/></Band><Band id=\"body\"><Cell text=\"bind:CD_CORP\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:DS_CORP\"/><Cell col=\"2\" text=\"bind:TY_DEPT\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:NM_DEPT\"/><Cell col=\"4\" text=\"bind:01A01\" displaytype=\"mask\" maskeditformat=\"#,###,##0\"/><Cell col=\"5\" text=\"bind:01A03\"/><Cell col=\"6\" text=\"bind:01A04\"/><Cell col=\"7\" text=\"bind:전무\"/><Cell col=\"8\" text=\"bind:상무\"/><Cell col=\"9\" text=\"bind:대표\"/><Cell col=\"10\" text=\"bind:상무(전문위원)\"/><Cell col=\"11\" text=\"bind:소계\"/><Cell col=\"12\" text=\"bind:이사\"/><Cell col=\"13\" text=\"bind:이사대우\"/><Cell col=\"14\" text=\"bind:부장\"/><Cell col=\"15\" text=\"bind:부장대우\"/><Cell col=\"16\" text=\"bind:차장\"/><Cell col=\"17\" text=\"bind:과장\"/><Cell col=\"18\" text=\"bind:대리\"/><Cell col=\"19\" text=\"bind:주임\"/><Cell col=\"20\" text=\"bind:사원\"/><Cell col=\"21\"/><Cell col=\"22\" text=\"bind:0303\"/><Cell col=\"23\" text=\"bind:합계\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" text=\"본사\" textAlign=\"center\"/><Cell col=\"3\"/><Cell col=\"4\" text=\"expr:dataset.getCaseSum( &quot;TY_DEPT == '00'&quot;, &quot;01A01&quot; )\" textAlign=\"right\"/><Cell col=\"5\" text=\"222222\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\" text=\"expr:dataset.getCaseSum( &quot;TY_DEPT == '00'&quot;, &quot;0303&quot; )\"/><Cell col=\"23\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\"/><Cell row=\"1\" col=\"2\" text=\"현장\" textAlign=\"center\"/><Cell row=\"1\" col=\"3\"/><Cell row=\"1\" col=\"4\" text=\"expr:dataset.getCaseSum( &quot;TY_DEPT == '01'&quot;, &quot;01A01&quot; )\" textAlign=\"right\"/><Cell row=\"1\" col=\"5\"/><Cell row=\"1\" col=\"6\"/><Cell row=\"1\" col=\"7\"/><Cell row=\"1\" col=\"8\"/><Cell row=\"1\" col=\"9\"/><Cell row=\"1\" col=\"10\"/><Cell row=\"1\" col=\"11\"/><Cell row=\"1\" col=\"12\"/><Cell row=\"1\" col=\"13\"/><Cell row=\"1\" col=\"14\"/><Cell row=\"1\" col=\"15\"/><Cell row=\"1\" col=\"16\"/><Cell row=\"1\" col=\"17\"/><Cell row=\"1\" col=\"18\"/><Cell row=\"1\" col=\"19\"/><Cell row=\"1\" col=\"20\"/><Cell row=\"1\" col=\"21\"/><Cell row=\"1\" col=\"22\" text=\"expr:dataset.getCaseSum( &quot;TY_DEPT == '01'&quot;, &quot;0303&quot; )\"/><Cell row=\"1\" col=\"23\"/><Cell row=\"2\"/><Cell row=\"2\" col=\"1\"/><Cell row=\"2\" col=\"2\" text=\"합계\" textAlign=\"center\"/><Cell row=\"2\" col=\"3\"/><Cell row=\"2\" col=\"4\" text=\"expr:dataset.getCaseSum( &quot;TY_DEPT == '00' || TY_DEPT == '01'&quot;, &quot;01A01&quot; )\" textAlign=\"right\"/><Cell row=\"2\" col=\"5\"/><Cell row=\"2\" col=\"6\"/><Cell row=\"2\" col=\"7\"/><Cell row=\"2\" col=\"8\"/><Cell row=\"2\" col=\"9\"/><Cell row=\"2\" col=\"10\"/><Cell row=\"2\" col=\"11\"/><Cell row=\"2\" col=\"12\"/><Cell row=\"2\" col=\"13\"/><Cell row=\"2\" col=\"14\"/><Cell row=\"2\" col=\"15\"/><Cell row=\"2\" col=\"16\"/><Cell row=\"2\" col=\"17\"/><Cell row=\"2\" col=\"18\"/><Cell row=\"2\" col=\"19\"/><Cell row=\"2\" col=\"20\"/><Cell row=\"2\" col=\"21\"/><Cell row=\"2\" col=\"22\" text=\"expr:dataset.getCaseSum( &quot;TY_DEPT == '00' || TY_DEPT == '01'&quot;, &quot;0303&quot; )\"/><Cell row=\"2\" col=\"23\"/><Cell row=\"3\"/><Cell row=\"3\" col=\"1\"/><Cell row=\"3\" col=\"2\" text=\"비율\" textAlign=\"center\"/><Cell row=\"3\" col=\"3\"/><Cell row=\"3\" col=\"4\" textAlign=\"right\" displaytype=\"mask\" text=\"expr:dataset.getSum( &quot;01A01&quot; )+'%'\"/><Cell row=\"3\" col=\"5\"/><Cell row=\"3\" col=\"6\"/><Cell row=\"3\" col=\"7\"/><Cell row=\"3\" col=\"8\"/><Cell row=\"3\" col=\"9\"/><Cell row=\"3\" col=\"10\"/><Cell row=\"3\" col=\"11\"/><Cell row=\"3\" col=\"12\"/><Cell row=\"3\" col=\"13\"/><Cell row=\"3\" col=\"14\"/><Cell row=\"3\" col=\"15\"/><Cell row=\"3\" col=\"16\"/><Cell row=\"3\" col=\"17\"/><Cell row=\"3\" col=\"18\"/><Cell row=\"3\" col=\"19\"/><Cell row=\"3\" col=\"20\"/><Cell row=\"3\" col=\"21\"/><Cell row=\"3\" col=\"22\"/><Cell row=\"3\" col=\"23\"/></Band></Format></Formats>");
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

        };
        
        // User Script
        this.registerScript("DAA_CORPLIST.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.fv_formats = "";

        this.form_onload = function(obj,e) {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        // 	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        // 	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        // 	this.ccfCD_DEPT.form.CDTextBox.set_value(this.AuthClient.CD_DEPT);
        // 	this.ccfCD_DEPT.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);

        	this.fv_formats = this.divData.form.objGrid.formats;

        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 화면버튼관리에서 관리하므로 사용안함.
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

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        // 	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        // 	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        // 	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        // 	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        //
        // 	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        // 	this.ccfCD_DEPT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAA_CORPLIST");

        	this.divData.form.objGrid.set_binddataset(this.dsList);

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("DT_DATE", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("GR_CORP", "string");
        	this.dsSelect.addColumn("ID_USER", "string");
        	this.dsSelect.addColumn("IP_ADDR", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	//if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.divData.form.objGrid.set_formats(this.fv_formats);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        // 	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        // 	this.dsSelect.setColumn(0, "DT_DATE", this.dsSearch.getColumn(0, "DT_DATE"));
        // 	this.dsSelect.setColumn(0, "GR_SEARCH", this.dsSearch.getColumn(0, "GR_SEARCH"));
        // 	this.dsSelect.setColumn(0, "GR_CORP", this.dsSearch.getColumn(0, "GR_CORP"));
        // 	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        // 	this.dsSelect.setColumn(0, "IP_ADDR", this.dsSearch.getColumn(0, "IP_ADDR"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsHead=select0 dsList=select1";
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
        	//var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
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
        // 	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_CORP"))) {
        // 		validate = false;
        // 		// Alert후 실행할 처리
        // 		this.fnVaidateCallback = function() {
        // 			this.ccfCD_CORP.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("법인을 입력하세요.", "fnVaidateCallback");
        // 	}
        // 	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_DEPT"))) {
        // 		validate = false;
        // 		// Alert후 실행할 처리
        // 		this.fnVaidateCallback = function() {
        // 			this.ccfCD_DEPT.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("부서코드를 입력하세요.", "fnVaidateCallback");
        // 	}
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

        		this.fnSetGridFormat();

        		//trace(this.dsHead.saveXML());
        		//trace(this.dsList.saveXML());
        	}

        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        // 	if (id == "ccfCD_CORP") {
        // 		;
        // 	}
        // 	if (id == "ccfCD_DEPT") {
        // 		// GR_SEARCH		조회권한
        // 		// CD_DEPT		로그인부서코드
        // 		// CD_CORP		조회조건 법인코드
        // 		// YN_CURRENT		='N'
        //
        // 		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        // 			this.gfnAlert("법인코드를 먼저 입력하세요.");
        // 			this.ccfCD_CORP.form.CDTextBox.setFocus();
        // 			return false;
        // 		}
        // 		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        // 		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        // 		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        // 		dsUserParam.setColumn(nrow, "YN_CURRENT", "N");
        // 	}
        	return true;
        }


        this.fnAfterCDTextChanged = function(id, codeFindData) {
        // 	// 코드,명칭 외 추가 컬럼 처리
        // 	var arr = codeFindData; //this.ccfCD_DEPT_ORG.form.SelectedData; 둘다 사용가능
        //
        // 	if(id == "ccfCD_CORP"){
        // 		this.ccfCD_DEPT.form.fnCodeFindClear();
        // 	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		this.divData.form.objGrid.set_formats(this.fv_formats);
        	}
        };

        this.fnSetGridFormat = function(){
        	var v_Formats = "";
        	var v_Columns = "";
        	var v_Rows = "";
        	var v_BandHead = "";
        	var v_BandBody = "";
        	var v_BandSumm  = "";

        	v_Columns += '<Column size="0" />\n';
        	v_Columns += '<Column size="100" />\n';
        	v_Columns += '<Column size="0" />\n';
        	v_Columns += '<Column size="50" />\n';

            v_Rows += '<Row size="24" band="head"/>\n';
            v_Rows += '<Row size="24" band="head"/>\n';
            v_Rows += '<Row size="24"/>\n';
            v_Rows += '<Row size="24" band="summ"/>\n';
            v_Rows += '<Row size="24" band="summ"/>\n';
            v_Rows += '<Row size="24" band="summ"/>\n';
            v_Rows += '<Row size="24" band="summ"/>\n';

            v_BandHead += '<Cell colspan="4" text="법인정보"/>\n';
            v_BandHead += '<Cell row="1" text="법인"/>\n';
            v_BandHead += '<Cell row="1" col="1" text="법인명"/>\n';
            v_BandHead += '<Cell row="1" col="2" text="부서"/>\n';
            v_BandHead += '<Cell row="1" col="3" text="부서명"/>\n';

            v_BandBody += '<Cell col="0" text="bind:CD_CORP" textAlign="center" suppress="1"/>\n';
            v_BandBody += '<Cell col="1" text="bind:DS_CORP" textAlign="center" suppress="1"/>\n';
            v_BandBody += '<Cell col="2" text="bind:TY_DEPT" textAlign="center"/>\n';
            v_BandBody += '<Cell col="3" text="bind:NM_DEPT" textAlign="center"/>\n';

        	v_BandSumm += '<Cell/>\n';
        	v_BandSumm += '<Cell col="1" rowspan="4" text="합계" textAlign="center"/>\n';
        	v_BandSumm += '<Cell col="2" textAlign="center"/>\n';
        	v_BandSumm += '<Cell col="3" text="본사" textAlign="center"/>\n';
        	v_BandSumm += '<Cell col="4"/>\n';
        	v_BandSumm += '<Cell row="1"/>\n';
        	v_BandSumm += '<Cell row="1" col="2" textAlign="center"/>\n';
        	v_BandSumm += '<Cell row="1" col="3" text="현장" textAlign="center"/>\n';
        	v_BandSumm += '<Cell row="1" col="4"/>\n';
        	v_BandSumm += '<Cell row="2"/>\n';
        	v_BandSumm += '<Cell row="2" col="2" textAlign="center"/>\n';
        	v_BandSumm += '<Cell row="2" col="3" text="합계" textAlign="center"/>\n';
        	v_BandSumm += '<Cell row="2" col="4"/>\n';
        	v_BandSumm += '<Cell row="3"/>\n';
        	v_BandSumm += '<Cell row="3" col="2" textAlign="center"/>\n';
        	v_BandSumm += '<Cell row="3" col="3" text="비율" textAlign="center"/>\n';
        	v_BandSumm += '<Cell row="3" col="4"/>\n';

        	// 포맷 생성
        	var v_HeadText = '';
        	var v_HeadTextSub = '';
        	var v_HeadColIdx = 4;
        	var v_BodyColIdx = 4;

        	var v_expr0 = "";
        	var v_expr1 = "";
        	var v_expr2 = "";
        	var v_expr3 = "";


        	//var nSumTot = this.dsList.getCaseSum( "TY_DEPT == '00' || TY_DEPT == '10' ", "합계" );
        	var nSumTot = this.dsList.getCaseSum( "TY_DEPT == '00' || TY_DEPT == '10' ", "99ZZ" );
        	//trace("nSumTot", nSumTot);
        	var nSumByPos = 0;
        	var nRate = 0;

        	for (var i=0; i< this.dsHead.getRowCount(); i++) {

        		// Column 생성
        		v_Columns += '<Column size="90" />\n';

        		// Head 생성
        		// 가로병합
        		if (v_HeadText != this.dsHead.getColumn(i, "DS_EMPTYPE")) {
        			v_HeadText = this.dsHead.getColumn(i, "DS_EMPTYPE");
        			v_HeadTextSub = this.gfnNvl(this.dsHead.getColumn(i, "DS_POSITION"),"");

        			var v_Colspan = this.dsHead.getCaseCount("DS_EMPTYPE=='" + v_HeadText + "'");

        			//trace(v_HeadText, v_HeadTextSub, v_Colspan);


        			if(v_HeadText == v_HeadTextSub){
        				// Row 1
        				//trace("headColindex====> " + v_HeadColIdx);
        				v_BandHead += '<Cell col="'+v_HeadColIdx+'" colspan="'+v_Colspan+'" rowspan="2" text="'+v_HeadText+'" />\n';
        				v_HeadColIdx++;
        			}else{

        				// Row 1
        				v_BandHead += '<Cell col="'+v_HeadColIdx+'" colspan="'+v_Colspan+'" text="'+v_HeadText+'"/>\n';

        				// Row 2
        				for (var j=i; j< this.dsHead.getRowCount(); j++) {
        					if (v_HeadText == this.dsHead.getColumn(j, "DS_EMPTYPE")) {
        						//trace("headColindex====> " + v_HeadColIdx);
        						v_BandHead += '<Cell row="1" col="'+v_HeadColIdx+'" text="'+this.gfnNvl(this.dsHead.getColumn(j, "DS_POSITION"),"")+'" />\n';
        						v_HeadColIdx++;
        					}
        				}
        			}
        		}

        		// Body 생성
        		//v_BandBody += '<Cell style="align:right;" col="'+v_BodyColIdx+'" displaytype="mask" maskeditformat="#,###,##0" text="bind:'+this.dsHead.getColumn(i, "DS_POSITION")+'"/>\n';
        		v_BandBody += '<Cell style="align:right;" col="'+v_BodyColIdx+'" displaytype="mask" maskeditformat="#,###,##0" text="bind:'+this.dsHead.getColumn(i, "CD_COLUMNS")+'"/>\n';

        		// summary 생성
        //  	v_expr0 = "expr:dataset.getCaseSum( &quot;TY_DEPT == '00'&quot;, &quot;"+this.dsHead.getColumn(i, "DS_POSITION")+"&quot; )";
        // 		v_expr1 = "expr:dataset.getCaseSum( &quot;TY_DEPT == '10'&quot;, &quot;"+this.dsHead.getColumn(i, "DS_POSITION")+"&quot; )";
        // 		v_expr2 = "expr:dataset.getCaseSum( &quot;TY_DEPT == '00' || TY_DEPT == '10' &quot;, &quot;"+this.dsHead.getColumn(i, "DS_POSITION")+"&quot; )";
         		v_expr0 = "expr:dataset.getCaseSum( &quot;TY_DEPT == '00'&quot;, &quot;"+this.dsHead.getColumn(i, "CD_COLUMNS")+"&quot; )";
        		v_expr1 = "expr:dataset.getCaseSum( &quot;TY_DEPT == '10'&quot;, &quot;"+this.dsHead.getColumn(i, "CD_COLUMNS")+"&quot; )";
        		v_expr2 = "expr:dataset.getCaseSum( &quot;TY_DEPT == '00' || TY_DEPT == '10' &quot;, &quot;"+this.dsHead.getColumn(i, "CD_COLUMNS")+"&quot; )";

        		v_BandSumm += '<Cell row="0" col="'+v_BodyColIdx+'" text="'+v_expr0+'" textAlign="right" displaytype="mask" maskeditformat="###,###,##0"/>\n';
        		v_BandSumm += '<Cell row="1" col="'+v_BodyColIdx+'" text="'+v_expr1+'" textAlign="right" displaytype="mask" maskeditformat="###,###,##0"/>\n';
        		v_BandSumm += '<Cell row="2" col="'+v_BodyColIdx+'" text="'+v_expr2+'" textAlign="right" displaytype="mask" maskeditformat="###,###,##0"/>\n';

        		//trace("DS_POSITION", this.dsHead.getColumn(i, "DS_POSITION"));

         		//nSumByPos = this.dsList.getCaseSum( "TY_DEPT == '00' || TY_DEPT == '10' ", this.dsHead.getColumn(i, "DS_POSITION"));
        		nSumByPos = this.dsList.getCaseSum( "TY_DEPT == '00' || TY_DEPT == '10' ", this.dsHead.getColumn(i, "CD_COLUMNS"));
         		//trace("nSumByPos", nSumByPos);
         		nRate = this.fnGetRateByPos(nSumTot, nSumByPos);
         		//trace("nRate", nRate);

        		v_expr3 = nRate+"%";
        		v_BandSumm += '<Cell row="3" col="'+v_BodyColIdx+'" text="'+v_expr3+'" textAlign="right" />\n';

        		v_BodyColIdx++;
        	}

        	v_Formats = '<Formats>\n';
        	v_Formats += '<Format id="default">\n';
        	v_Formats += '<Columns>\n';
        	v_Formats += v_Columns;
        	v_Formats += '</Columns>\n';
        	v_Formats += '<Rows>\n';
        	v_Formats += v_Rows;
        	v_Formats += '</Rows>\n';
        	v_Formats += '<Band id="head">\n';
        	v_Formats += v_BandHead;
        	v_Formats += '</Band>\n';
        	v_Formats += '<Band id="body">\n';
        	v_Formats += v_BandBody;
        	v_Formats += '</Band>\n';

        	v_Formats += '<Band id="summary">\n';
        	v_Formats += v_BandSumm;
        	v_Formats += '</Band>\n';

        	v_Formats += '</Format>\n';
        	v_Formats += '</Formats>\n';

        	//trace(v_Formats);
        	this.divData.form.objGrid.set_enableredraw(false);
        	this.divData.form.objGrid.set_formats(v_Formats);
        	this.divData.form.objGrid.set_enableredraw(true);

        };

        this.fnGetRateByPos = function(nSumTot, nSumByPos){
        	if(this.gfnIsNull(nSumTot)) return 0;
        	if(nSumTot == 0) return 0;

        	var nRate = nexacro.toNumber(nSumByPos) / nexacro.toNumber(nSumTot) * 100;
        	//trace("nRate", nRate);
        	nRate = nexacro.round(nRate, 2);
        	return nRate;
        }



        // this.divData_btn00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	var nSum = 0;
        // 	for(var i =0;i<this.dsList.rowcount;i++){
        // 		//trace("sVal>>"+i);
        // 		var sTY_DEPT = this.dsList.getColumn(i, "TY_DEPT");
        // 		if(sTY_DEPT == "00" || sTY_DEPT == "10"){
        // 			var sVal = this.gfnNvl(this.dsList.getColumn(i, "0303"),0);
        //
        // 			trace("sVal>>"+i, sTY_DEPT, sVal);
        //
        // 			nSum = nSum + parseFloat(sVal);
        // 			trace("nSum", nSum);
        // 		}
        // 	}
        //
        // 	var ss = this.dsList.getCaseSum( "TY_DEPT == '00' || TY_DEPT == '10' ", "0303");
        // 	trace(ss);
        // };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAA_CORPLIST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
