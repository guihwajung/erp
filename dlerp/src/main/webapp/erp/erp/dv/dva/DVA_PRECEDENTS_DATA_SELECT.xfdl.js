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
            this.set_titletext("판례데이터조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DVAPR_PRECEDENTS_DATA_LIST</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"COURTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"COURTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DT_START\" type=\"STRING\" size=\"256\"/><Column id=\"DT_END\" type=\"STRING\" size=\"256\"/><Column id=\"SUEKIND\" type=\"STRING\" size=\"256\"/><Column id=\"LAWSUIT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"LAWSUIT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LAWSUIT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"KEYWORD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSUEKIND", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staSUEKIND","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("소송유형");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSUEKIND","staSUEKIND:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsSUEKIND");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staKEYWORD","cboSUEKIND:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("키워드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staLAWSUIT_NO","staKEYWORD:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("사건번호");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new TextArea("txtKeyword","staKEYWORD:0.0","10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_START","txtKeyword:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("판결선고일");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_START","staDT_START:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_START_range","ctclDT_START:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_END","staDT_START_range:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_00","0.0","staSUEKIND:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","sta01_00:0.0","staSUEKIND:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCOURTHOUSE","270","13","180","20",null,null,null,"604",null,null,this);
            obj.set_taborder("2");
            obj.getSetter("CodeFindName").set("DVA_COURTHOUSE_CODEFIND");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.addChild(obj.name, obj);

            obj = new Edit("edtLAWSUIT_CODE","525","13","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Edit("edtLAWSUIT_NO","596","13","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edtLAWSUIT_YR","454","13","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divSearch.form.ctclDT_START","value","dsSearch","DT_START");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclDT_END","value","dsSearch","DT_END");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","ccfCOURTHOUSE.form.CDTextBox","value","dsSearch","COURTCODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","ccfCOURTHOUSE.form.DSTextBox","value","dsSearch","COURTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtLAWSUIT_CODE","value","dsSearch","LAWSUIT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edtLAWSUIT_NO","value","dsSearch","LAWSUIT_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.cboSUEKIND","value","dsSearch","SUEKIND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtLAWSUIT_YR","value","dsSearch","LAWSUIT_YAER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.txtKeyword","value","dsSearch","KEYWORD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DVA_PRECEDENTS_DATA_SELECT.xfdl", function() {
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
        	this.fnSetCombo();

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
        	this.dxGrid = this.divData.form.objGrid;
        	this.cboSUEKIND = this.divSearch.form.cboSUEKIND;
        	this.txtKeyword = this.divSearch.form.txtKeyword;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DV", "DVA_PRECEDENTS_DATA");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("COURTCODE", "string");
        	this.dsSelect.addColumn("DT_START", "int");
        	this.dsSelect.addColumn("DT_END", "string");
        	this.dsSelect.addColumn("SUEKIND", "string");
        	this.dsSelect.addColumn("KEYWORD", "string");
        	this.dsSelect.addColumn("LAWSUIT_YEAR", "string");
        	this.dsSelect.addColumn("LAWSUIT_CODE", "string");
        	this.dsSelect.addColumn("LAWSUIT_NO", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSetCombo = function() {

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");


        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DV");
        	this.dsCombo.setColumn(0, "CD_TYPE", "SUEKIND");


        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsSUEKIND=combo0";
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


        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();


        	this.dsSelect.setColumn(0, "COURTCODE", this.dsSearch.getColumn(0, "COURTCODE"));
        	this.dsSelect.setColumn(0, "DT_START", this.dsSearch.getColumn(0, "DT_START"));
        	this.dsSelect.setColumn(0, "DT_END", this.dsSearch.getColumn(0, "DT_END"));
        	this.dsSelect.setColumn(0, "SUEKIND", this.dsSearch.getColumn(0, "SUEKIND"));
        	this.dsSelect.setColumn(0, "KEYWORD",  this.txtKeyword.value);
        	this.dsSelect.setColumn(0, "LAWSUIT_YEAR", this.dsSearch.getColumn(0, "LAWSUIT_YEAR"));
        	this.dsSelect.setColumn(0, "LAWSUIT_CODE", this.dsSearch.getColumn(0, "LAWSUIT_CODE"));
        	this.dsSelect.setColumn(0, "LAWSUIT_NO", this.dsSearch.getColumn(0, "LAWSUIT_NO"));

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
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfLAWSUIT") {
        		dsUserParam.setColumn(nrow, "", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "", this.AuthClient.ID_USER);

        	}
        	return true;
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
        	}
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.staSUEKIND.addEventHandler("onclick",this.divSearch_sta00_onclick,this);
            this.divSearch.form.staKEYWORD.addEventHandler("onclick",this.divSearch_sta01_onclick,this);
            this.divSearch.form.staLAWSUIT_NO.addEventHandler("onclick",this.divSearch_staCD_ACNTUNIT_onclick,this);
            this.divSearch.form.staDT_START.addEventHandler("onclick",this.divSearch_staDT_START_onclick,this);
            this.divSearch.form.sta01_00_00.addEventHandler("onclick",this.divSearch_sta01_00_00_onclick,this);
        };
        this.loadIncludeScript("DVA_PRECEDENTS_DATA_SELECT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
