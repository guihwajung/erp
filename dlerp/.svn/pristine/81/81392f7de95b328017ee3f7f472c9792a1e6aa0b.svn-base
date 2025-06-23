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
            this.set_titletext("하자처리현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("true");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChart", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DS_BUNSO\" type=\"STRING\" size=\"256\"/><Column id=\"CT_JEOBSU\" type=\"INT\" size=\"256\"/><Column id=\"CT_APPROVE\" type=\"INT\" size=\"256\"/><Column id=\"CT_JEOBSU_DISSATIS\" type=\"INT\" size=\"256\"/><Column id=\"CT_APPROVE_DISSATIS\" type=\"INT\" size=\"256\"/><Column id=\"CT_JEOBSU_REJOB\" type=\"INT\" size=\"256\"/><Column id=\"CT_APPROVE_REJOB\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_BUNSO\">수도권 A/S사무소(전표테스트)</Col><Col id=\"CT_JEOBSU\">85</Col><Col id=\"CT_APPROVE\">19</Col><Col id=\"CT_JEOBSU_DISSATIS\">3</Col><Col id=\"CT_APPROVE_DISSATIS\">1</Col><Col id=\"CT_JEOBSU_REJOB\">2</Col><Col id=\"CT_APPROVE_REJOB\">2</Col></Row><Row><Col id=\"DS_BUNSO\">영서권 A/S사무소</Col><Col id=\"CT_JEOBSU\">1</Col><Col id=\"CT_APPROVE\">0</Col><Col id=\"CT_JEOBSU_DISSATIS\">0</Col><Col id=\"CT_APPROVE_DISSATIS\">0</Col><Col id=\"CT_JEOBSU_REJOB\">0</Col><Col id=\"CT_APPROVE_REJOB\">0</Col></Row><Row><Col id=\"DS_BUNSO\">영동권 A/S사무소</Col><Col id=\"CT_JEOBSU\">4</Col><Col id=\"CT_APPROVE\">3</Col><Col id=\"CT_JEOBSU_DISSATIS\">1</Col><Col id=\"CT_APPROVE_DISSATIS\">0</Col><Col id=\"CT_JEOBSU_REJOB\">0</Col><Col id=\"CT_APPROVE_REJOB\">0</Col></Row><Row><Col id=\"DS_BUNSO\">청주권 A/S사무소</Col><Col id=\"CT_JEOBSU\">5</Col><Col id=\"CT_APPROVE\">0</Col><Col id=\"CT_JEOBSU_DISSATIS\">0</Col><Col id=\"CT_APPROVE_DISSATIS\">0</Col><Col id=\"CT_JEOBSU_REJOB\">0</Col><Col id=\"CT_APPROVE_REJOB\">0</Col></Row><Row><Col id=\"DS_BUNSO\">총합</Col><Col id=\"CT_JEOBSU\">95</Col><Col id=\"CT_APPROVE\">22</Col><Col id=\"CT_JEOBSU_DISSATIS\">4</Col><Col id=\"CT_APPROVE_DISSATIS\">1</Col><Col id=\"CT_JEOBSU_REJOB\">2</Col><Col id=\"CT_APPROVE_REJOB\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">EIBPR_WORKSTATE_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">EIBPR_WEEK_MONTH_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"WEEK_MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">W</Col><Col id=\"DS_CODE\">주간</Col></Row><Row><Col id=\"CD_CODE\">M</Col><Col id=\"DS_CODE\">월간</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWEEK_MONTH", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"WEEK_START\" type=\"STRING\" size=\"256\"/><Column id=\"WEEK_END\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","50%","100%","5",null,null,null,null,null,null,this.divData.form);
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

            obj = new BasicChart("BasicChart","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.getSetter("taborder").set("0");
            obj.getSetter("binddataset").set("dsChart");
            obj.getSetter("categorycolumn").set("bind:DS_BUNSO");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"46","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN","0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("조회구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_GUBUN","staTY_GUBUN:0","10","105","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsTY_GUBUN");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("월간");
            obj.set_value("M");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_BUNSO","cboTY_GUBUN:0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("주차/월");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboWEEK_MONTH","staCD_BUNSO:0","10","105","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsWEEK_MONTH");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("");
            obj.set_value("ALL");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT","cboWEEK_MONTH:0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("조회일자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_FROM","staDT:0","10","105","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","calDT_FROM:0","10","30","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_TO","sta00:0","10","105","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.cboTY_GUBUN","value","dsSearch","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.cboWEEK_MONTH","value","dsSearch","WEEK_MONTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.calDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.calDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DYY_WORKSTATE.xfdl", function() {
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
        	this.dsList.clearData();
        	this.dsChart.clearData();
        	this.fnSetCombo();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	// 입력버튼 사용안함
        	//this.alert(this.FormBtns.Add.enable);
        	//this.FormBtns.Add.set_enable(true);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnFormButton1 = this.gfnFormButtonAdd("WorkBtn1", "fnWorkBtn");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.cboTY_GUBUN = this.divSearch.form.cboTY_GUBUN;
        	this.cboWEEK_MONTH = this.divSearch.form.cboWEEK_MONTH;
        	this.calDT_FROM = this.divSearch.form.calDT_FROM;
        	this.calDT_TO = this.divSearch.form.calDT_TO;

        	this.dxGrid = this.divData.form.divDataTop.form.objGrid;
        	this.BasicChart = this.divData.form.divDataBottom.form.BasicChart;
        	this.BasicChart.seriesset[2].set_titletext(" ");
        	this.BasicChart.seriesset[2].set_barfillstyle("#FFFFFF");
        	this.BasicChart.legend.set_iteminvisiblecolor("#FFFFFF");
        	this.cboTY_GUBUN.set_index(1);
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "EI", "EIB_WORKSTATE");  // pForm.gfnGridInit = function(objGrid, objDs, cd_system, id_grid, tree_column, level_column, is_manual)

        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","DS_BUNSO"), "text", "총합");
        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","DS_BUNSO"), "textAlign", "center");

        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","RT_JOB"), "displaytype", "mask");
        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","RT_JOB"), "maskedittype", "number" );
        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","RT_JOB"), "maskeditformat","#,###,##0.##") ;
        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","RT_JOB"), "text", "expr:nexacro.toNumber(dataset.getSum('CT_JEOBSU')) == 0 || nexacro.toNumber(dataset.getSum('CT_APPROVE')) == 0 ? 0 : nexacro.toNumber(dataset.getSum('CT_APPROVE'))/nexacro.toNumber(dataset.getSum('CT_JEOBSU')) * 100");

        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","RT_JOB_DISSATIS"), "displaytype", "mask");
        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","RT_JOB_DISSATIS"), "maskedittype", "number" );
        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","RT_JOB_DISSATIS"), "maskeditformat","#,###,##0.##") ;
        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","RT_JOB_DISSATIS"), "text", "expr:nexacro.toNumber(dataset.getSum('CT_JEOBSU_DISSATIS')) == 0 || nexacro.toNumber(dataset.getSum('CT_APPROVE_DISSATIS')) == 0 ? 0 : nexacro.toNumber(dataset.getSum('CT_APPROVE_DISSATIS'))/nexacro.toNumber(dataset.getSum('CT_JEOBSU_DISSATIS')) * 100");

        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","RT_JOB_REJOB"), "displaytype", "mask");
        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","RT_JOB_REJOB"), "maskedittype", "number" );
        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","RT_JOB_REJOB"), "maskeditformat","#,###,##0.##") ;
        	this.dxGrid.setCellProperty( "summary", this.dxGrid.getBindCellIndex("body","RT_JOB_REJOB"), "text", "expr:nexacro.toNumber(dataset.getSum('CT_JEOBSU_REJOB')) == 0 || nexacro.toNumber(dataset.getSum('CT_APPROVE_REJOB')) == 0 ? 0 : nexacro.toNumber(dataset.getSum('CT_APPROVE_REJOB'))/nexacro.toNumber(dataset.getSum('CT_JEOBSU_REJOB')) * 100");

        	this.dxGrid.set_selecttype("cell");	// IE경우만 multiarea모드에서 master선택후 마우스 이동 빠르게 할 경우 버그가 있어서 cell 모드로 변경
        	this.dxGrid.addEventHandler("oncelldblclick", this.dxGrid_oncelldblclick, this);
        	this.dxGrid.addEventHandler("oncellposchanged", this.dxGrid_oncellposchanged, this);

        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DT_FROM", "string");
        	this.dsSelect.addColumn("DT_TO", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsList.clearData();
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "DT_FROM", this.dsSearch.getColumn(0,"DT_FROM"));
        	this.dsSelect.setColumn(0, "DT_TO", this.dsSearch.getColumn(0,"DT_TO"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0 dsChart=select1";
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
        		var nMaxVal = 0;
        		if( nexacro.toNumber(this.dsChart.getMax("CT_JEOBSU")) < 10 ) {
        			nMaxVal = nexacro.toNumber(this.dsChart.getMax("CT_JEOBSU")) * 2;
        		} else {
        			nMaxVal = nexacro.toNumber(this.dsChart.getMax("CT_JEOBSU")) + 20;
        		}
        		this.BasicChart.valueaxes[0].set_tickmax(nMaxVal);
        		this.dxGrid.setCellPos( this.dxGrid.getBindCellIndex("body","CT_JEOBSU") );
        		this.dxGrid_oncellposchanged();
        		this.dxGrid.setFocus();
        	} else if (svcID == "combo") {
        		this.dsWEEK_MONTH.filter("");
        		this.dsWEEK_MONTH.filter("TY_GUBUN=='"+this.cboTY_GUBUN.value+"'");
        		var strToday = this.gfnGetDate();
        		var strVal = this.cboTY_GUBUN.value== "W" ? this.gfnGetWeek(strToday) : strToday.substr(0,6);
        		this.cboWEEK_MONTH.set_value(strVal);
        		this.calDT_FROM.set_value(this.dsWEEK_MONTH.lookup("CD_CODE",strVal,"WEEK_START"));
        		this.calDT_TO.set_value(this.dsWEEK_MONTH.lookup("CD_CODE",strVal,"WEEK_END"));
        		this.FormBtns.Select.click();
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.dxGrid_oncelldblclick = function(obj,e)
        {

        	 this.fnWorkBtn(this.btnFormButton1);
        };

        this.dxGrid_oncellposchanged = function(obj,e)
        {
        	var strColumnName = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, this.dxGrid.currentcol);

        	if( strColumnName.search("_DISSATIS") > -1 ){
        		this.BasicChart.title.set_text("하자처리현황(불만족)") ;
        		this.BasicChart.seriesset[1].set_valuecolumn("BIND:CT_JEOBSU_DISSATIS");
        		this.BasicChart.seriesset[1].set_titletext("불만족 접수건수");
        		this.BasicChart.seriesset[2].set_valuecolumn("BIND:CT_APPROVE_DISSATIS");
        		this.BasicChart.seriesset[2].set_titletext("불만족 완료건수");
        		this.BasicChart.seriesset[2].set_barfillstyle("#4472C4");
        		this.BasicChart.seriesset[2].set_barlinestyle("#4472C4");
        		this.BasicChart.seriesset[2].set_barvisible(true);
        	} else if( strColumnName.search("_REJOB") > -1 ){
        		this.BasicChart.title.set_text("하자처리현황(재접수)") ;
        		this.BasicChart.seriesset[1].set_valuecolumn("BIND:CT_JEOBSU_REJOB");
        		this.BasicChart.seriesset[1].set_titletext("재접수 접수건수");
        		this.BasicChart.seriesset[2].set_valuecolumn("BIND:CT_APPROVE_REJOB");
        		this.BasicChart.seriesset[2].set_titletext("재접수 완료건수");
        		this.BasicChart.seriesset[2].set_barfillstyle("#4472C4");
        		this.BasicChart.seriesset[2].set_barlinestyle("#4472C4");
        		this.BasicChart.seriesset[2].set_barvisible(true);
        	} else {
        		this.BasicChart.title.set_text("하자처리현황(전체)") ;
        		this.BasicChart.seriesset[1].set_valuecolumn("BIND:CT_APPROVE");
        		this.BasicChart.seriesset[1].set_titletext("AS/BS완료건수");
        		this.BasicChart.seriesset[2].set_barvisible(false);
        		this.BasicChart.seriesset[2].set_titletext(" ");
        		this.BasicChart.seriesset[2].set_barfillstyle("#FFFFFF");
        		this.BasicChart.seriesset[2].set_barlinestyle("#FFFFFF");
        	}
        };

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        /*
         * 커스텀 버튼 이벤트
         */
        this.fnWorkBtn = function(obj,e) {
        	if( obj.id == "btnExt_WorkBtn1"){
        		if(this.dsList.rowcount == 0) return;
        		var strColumnName = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, this.dxGrid.currentcol);

        		var param = {};
        		param.CF_CD_BUNSO = this.dsList.getColumn(this.dsList.rowposition, "CD_BUNSO");
        		param.CF_DS_BUNSO = this.dsList.getColumn(this.dsList.rowposition, "DS_BUNSO");
        		param.CF_DT_FROM = this.dsSearch.getColumn(0,"DT_FROM");
        		param.CF_DT_TO = this.dsSearch.getColumn(0,"DT_TO");
        		this.gfnFormOpen("DBT", "DBT_TOTALSTATE", "", param);
        	}
        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
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

        /*
         *	조회 조건 변경시 초기화
         */
        this.dsSearch_onvaluechanged = function(obj,e)
        {

        	if(e.row > -1 && e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		if( e.columnid == "TY_GUBUN" ){
        			this.dsWEEK_MONTH.filter("");
        			this.dsWEEK_MONTH.filter("TY_GUBUN=='"+this.cboTY_GUBUN.value+"'");
        			var strToday = this.gfnGetDate();
        			var strVal = this.cboTY_GUBUN.value== "W" ? this.gfnGetWeek(strToday) : strToday.substr(0,6);
        			this.cboWEEK_MONTH.set_value(strVal);

        		}

        		if( e.columnid == "WEEK_MONTH" ){
        			this.calDT_FROM.set_value(this.dsWEEK_MONTH.lookup("CD_CODE",this.cboWEEK_MONTH.value,"WEEK_START"));
        			this.calDT_TO.set_value(this.dsWEEK_MONTH.lookup("CD_CODE",this.cboWEEK_MONTH.value,"WEEK_END"));
        		}
        	}
        };

        /*
         *	콤보박스 값 설정
         */
        this.fnSetCombo = function() {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("YEAR", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "YEAR", this.gfnGetDate().substring(0,4));

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsWEEK_MONTH=combo0";
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
        };
        this.loadIncludeScript("DYY_WORKSTATE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
