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
            this.set_titletext("공조대출 상환내역");
            this.getSetter("maxwidth").set("460");
            this.getSetter("maxheight").set("214");
            if (Form == this.constructor)
            {
                this._setFormPosition(420,139);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YM_SALARY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"DS_CORP\"/><Col id=\"YM_SALARY\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">report</Col><Col id=\"SP\">DABPR_LOAN_RPT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequired", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">CD_CORP</Col><Col id=\"DS_FIELD\">법인</Col></Row><Row><Col id=\"CD_FIELD\">YM_SALARY</Col><Col id=\"DS_FIELD\">지급년월</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle1","0","-10","126","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("공조대출 상환내역");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("divData","0","staTitle1:0",null,"67","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCdCorp","0","0","100","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablelabelTE");
            obj.set_text("법인");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdCorpBg","staCdCorp:-1","0",null,"34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebgT");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_CORP","staCdCorp:5","5","263","24",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DZX_CFCORP_STD");
            obj.getSetter("CDTextWidth").set("50");
            obj.getSetter("FitToContents").set("false");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYmSalary","0","33","100","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("지급년월");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYmSalaryBg","staYmSalary:-1","staCdCorpBg:-1",null,"34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ctcYM_SALARY","staYmSalary:5","38","100","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns","0","divData:20",null,"27","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btnCANCLE",null,"0","52","26","0",null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_default");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnOK",null,"0","52","26","54",null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_action");
            this.divBtns.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.cfCD_CORP.form.CDTextBox","value","dsList","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.cfCD_CORP.form.DSTextBox","value","dsList","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ctcYM_SALARY.form.TextBox","value","dsList","YM_SALARY");
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
        this.registerScript("DAB_LOAN_RPT.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	var today = this.gfnGetDate();
        	this.dsList.setColumn(0,"YM_SALARY",today.substr(0,6));
        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.cfCD_CORP        = this.divData.form.cfCD_CORP;
        	this.ctcYM_SETTLEMENT = this.divData.form.ctcYM_SETTLEMENT;
        	this.txtAM_INTEREST   = this.divData.form.txtAM_INTEREST;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        };


        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("CD_CORP"   , "STRING");
        	this.dsReport.addColumn("YM_SALARY" , "STRING");

        	this.dsReportParam = new Dataset();
        	this.dsReportParam.addColumn("DT_TERM", "STRING");
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValidate = function() {

        };
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         // 확인 버튼
        this.btnOk_onclick = function(obj,e)
        {

        	if(!this.gfnDataValidate(this.dsList,this.dsRequired)) return;

        	var ymSalary = this.dsList.getColumn(0, "YM_SALARY");
        	var ymTerm = ymSalary.substr(0,4) +"."+ ymSalary.substr(4,2);
        	var lastDate = this.gfnGetLastDate(ymSalary+"01");

        	this.dsReport.clearData();
        	var nrow = this.dsReport.addRow();
        	this.dsReport.setColumn(nrow, "CD_CORP"    , this.dsList.getColumn(0, "CD_CORP"));
        	this.dsReport.setColumn(nrow, "YM_SALARY"  , this.dsList.getColumn(0, "YM_SALARY"));

        	this.dsReportParam.clearData();
        	var nrow = this.dsReportParam.addRow();
        	this.dsReportParam.setColumn(nrow, "DT_TERM", ymTerm + ".01 ~ " + ymTerm+"."+lastDate.substr(6,2) );

        	if (this.dsReport.rowcount == 0) return;

        	var inProc		= "_dsProc";
        	var inParam 	= "params=dsReportParam";	// 조회SP이외 사용할 정보
        	var inData      = "report=dsReport";
        	var reportpath  = "/da/dab/DAB_LOAN.ozr";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        };

        // 취소버튼
        this.btnCancle_onclick = function(obj,e)
        {
        	this.getParentContext().close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCancle_onclick,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOk_onclick,this);
        };
        this.loadIncludeScript("DAB_LOAN_RPT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
