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
            this.set_titletext("AS 종합처리현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList1", this);
            obj.set_enableevent("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj.set_enableevent("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj.set_enableevent("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DBTPR_REPORT_ALL_SELECT</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DBTPR_REPORT_BUNSO_SELECT</Col></Row><Row><Col id=\"TARGET\">select3</Col><Col id=\"SP\">DBTPR_REPORT_SITE_SELECT</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBTPR_REPORT_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_BUNSO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BASIC\" type=\"STRING\" size=\"256\"/><Column id=\"YN_PRINT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">D</Col><Col id=\"DS_CODE\">일간</Col></Row><Row><Col id=\"CD_CODE\">W</Col><Col id=\"DS_CODE\">주간</Col></Row><Row><Col id=\"CD_CODE\">M</Col><Col id=\"DS_CODE\">월간</Col></Row><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">연간</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_PRINT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">ALL</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">출력단지</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staDT","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_BASIC","staDT:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN","calDT_BASIC:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("조회구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_GUBUN","staTY_GUBUN:0.0","10.0","9.08%","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsTY_GUBUN");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("일간");
            obj.set_value("D");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_BUNSO","cboTY_GUBUN:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("AS사무소");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_BUNSO","staCD_BUNSO:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_BUNSO00","ccfCD_BUNSO:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("종합현황 출력대상");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_PRINT","staCD_BUNSO00:0.0","10.0","104","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsYN_PRINT");
            obj.set_text("전체");
            obj.set_value("ALL");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Tab("tabData","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.tabData);
            obj.set_text("주간현황");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid1","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList1");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("권역별 현황");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid2","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Tabpage("tab3",this.divData.form.tabData);
            obj.set_text("단지별 현황");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid3","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divSearch.form.calDT_BASIC","value","dsSearch","DT_BASIC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.cboTY_GUBUN","value","dsSearch","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_BUNSO.form.CDTextBox","value","dsSearch","CD_BUNSO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboYN_PRINT","value","dsSearch","YN_PRINT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DBT_REPORT.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//
        	//this.fnSetButton();
        	//this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();
        	this.fnSetTyGubun();

        	if(this.FormInfo.ID_GROUP != "0" && this.FormInfo.ID_GROUP != "A" && this.FormInfo.ID_GROUP != "3"  ){
        		if( this.FormInfo.ID_GROUP == "2" ){
        			this.ccfCD_BUNSO.form.CDTextBox.set_value(this.AuthClient.CD_DEPT.substr(1));
        			this.ccfCD_BUNSO.form.fnCodeFindLoad();
        		}
        		this.ccfCD_BUNSO.form.set_readonly(true);
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// 서브 버튼 사용
        	//this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter); // divSplitter sync
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_BUNSO = this.divSearch.form.ccfCD_BUNSO;
        	this.calDT_BASIC = this.divSearch.form.calDT_BASIC;
        	this.cboTY_GUBUN = this.divSearch.form.cboTY_GUBUN;
        	this.cboYN_PRINT = this.divSearch.form.cboYN_PRINT;

        	this.tabData = this.divData.form.tabData;
        	this.dxGrid1 = this.divData.form.tabData.tab1.form.objGrid1;
        	this.dxGrid2 = this.divData.form.tabData.tab2.form.objGrid2;
        	this.dxGrid3 = this.divData.form.tabData.tab3.form.objGrid3;

        	var today = this.gfnGetDate();
        	this.calDT_BASIC.set_value(today);
        	this.cboTY_GUBUN.set_index(0);
        	this.cboYN_PRINT.set_index(0);
        };
        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_BUNSO.CodeFindName = "DBX_CFBUNSO";
        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DB", "DBT_REPORT_WEEK");  // pForm.gfnGridInit = function(objGrid, objDs, cd_system, id_grid, tree_column, level_column, is_manual)
        	this.dxGrid1.set_selecttype("cell");

        	var colIdx = this.dxGrid1.getBindCellIndex("body","DS_3");
        	this.dxGrid1.setCellProperty( "summary", colIdx, "text", "합  계");
        	this.dxGrid1.setCellProperty( "summary", colIdx, "textAlign", "center");

        	colIdx = this.dxGrid1.getBindCellIndex("body","RT_JOB");
        	this.dxGrid1.setCellProperty( "summary", colIdx, "displaytype", "mask");
        	this.dxGrid1.setCellProperty( "summary", colIdx, "maskedittype", "number" );
        	this.dxGrid1.setCellProperty( "summary", colIdx, "maskeditformat","#,###,##0.00") ;
        	this.dxGrid1.setCellProperty( "summary", colIdx, "text", "expr:nexacro.toNumber(dataset.getCaseSum('"+this.ucFlag+" != \"#\"','CT_APPROVE'),0) == 0 || nexacro.toNumber(dataset.getCaseSum('"+this.ucFlag+" != \"#\"','CT_JEOBSU'),0) == 0 ? 0 : nexacro.toNumber(dataset.getCaseSum('"+this.ucFlag+" != \"#\"','CT_APPROVE'),0)/nexacro.toNumber(dataset.getCaseSum('"+this.ucFlag+" != \"#\"','CT_JEOBSU'),0) * 100");


        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DB", "DBT_REPORT_BUNSO");
        	this.dxGrid2.set_selecttype("cell");


        	this.dxGrid2.setCellProperty( "summary", 1, "text", "합  계");
        	this.dxGrid2.setCellProperty( "summary", 1, "textAlign", "center");
        	this.dxGrid2.setCellProperty( "body", 1, "subsumtext", "소  계");
        	this.dxGrid2.setCellProperty( "body", 1, "textAlign", "center");

        	colIdx = this.dxGrid2.getBindCellIndex("body","RT_JOB");
        	this.dxGrid2.setCellProperty( "body", colIdx, "subsumtext", "expr:CT_APPROVE == 0 || CT_JEOBSU == 0 ? (0).toFixed(2) : (CT_APPROVE / CT_JEOBSU * 100).toFixed(2)");

        	this.dxGrid2.setCellProperty( "summary", colIdx, "displaytype", "mask");
        	this.dxGrid2.setCellProperty( "summary", colIdx, "maskedittype", "number" );
        	this.dxGrid2.setCellProperty( "summary", colIdx, "maskeditformat","#,###,##0.00") ;
        	this.dxGrid2.setCellProperty( "summary", colIdx, "text", "expr:nexacro.toNumber(dataset.getCaseSum('"+this.ucFlag+" != \"#\"','CT_APPROVE'),0) == 0 || nexacro.toNumber(dataset.getCaseSum('"+this.ucFlag+" != \"#\"','CT_JEOBSU'),0) == 0 ? 0 : nexacro.toNumber(dataset.getCaseSum('"+this.ucFlag+" != \"#\"','CT_APPROVE'),0)/nexacro.toNumber(dataset.getCaseSum('"+this.ucFlag+" != \"#\"','CT_JEOBSU'),0) * 100");

        	this.dxGrid2.mergeContentsCell("summary",0,1,0,2,1,false);

        	this.gfnGridInit(this.dxGrid3, this.dsList3, "DB", "DBT_REPORT_SITE");  // pForm.gfnGridInit = function(objGrid, objDs, cd_system, id_grid, tree_column, level_column, is_manual)
        	this.dxGrid3.set_selecttype("cell");
        	this.dxGrid3.setCellProperty( "body", 0, "cssclass", "");
        	this.dxGrid3.setCellProperty( "summary", 1, "text", "합  계");
        	this.dxGrid3.setCellProperty( "summary", 1, "textAlign", "center");

        	this.dxGrid3.setCellProperty( "body", 1, "text", "expr:dataset.getRowLevel(currow) == 2 ? '소  계':DS_BUNSO");
        	this.dxGrid3.setCellProperty( "body", 1, "cssclass", "expr:dataset.getRowLevel(currow) == 2 ? 'BACK_ChongKe':''" );

        	colIdx = this.dxGrid3.getBindCellIndex("body","RT_JOB");
        	this.dxGrid3.setCellProperty( "body", colIdx, "subsumtext", "expr:CT_APPROVE == 0 || CT_JEOBSU == 0 ? (0).toFixed(2) : (CT_APPROVE / CT_JEOBSU * 100).toFixed(2)");
        	this.dxGrid3.setCellProperty( "summary", colIdx, "displaytype", "mask");
        	this.dxGrid3.setCellProperty( "summary", colIdx, "maskedittype", "number" );
        	this.dxGrid3.setCellProperty( "summary", colIdx, "maskeditformat","#,###,##0.00") ;
        	this.dxGrid3.setCellProperty( "summary", colIdx, "text", "expr:nexacro.toNumber(dataset.getCaseSum('"+this.ucFlag+" != \"#\"','CT_APPROVE'),0) == 0 || nexacro.toNumber(dataset.getCaseSum('"+this.ucFlag+" != \"#\"','CT_JEOBSU'),0) == 0 ? 0 : nexacro.toNumber(dataset.getCaseSum('"+this.ucFlag+" != \"#\"','CT_APPROVE'),0)/nexacro.toNumber(dataset.getCaseSum('"+this.ucFlag+" != \"#\"','CT_JEOBSU'),0) * 100");

        	this.dxGrid3.mergeContentsCell("summary",0,1,0,3,1,false);

        	for( var i = 2 ; i < this.dxGrid3.getCellCount("body"); i++){
        		this.dxGrid3.setCellProperty( "body", i, "cssclass", "expr:dataset.getRowLevel(currow) == 2 ? 'BACK_ChongKe':(dataset.getRowLevel(currow) == 1 ? 'BACK_SoKe':'')" );
        	}
        	this.dxGrid3.setCellProperty( "body", 2, "text", "expr:dataset.getRowLevel(currow) == 1 ? '소  계':DS_3");

        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("DT_BASIC", "string");
        	this.dsSelect.addColumn("CD_BUNSO", "string");
        	this.dsSelect.addColumn("YN_PRINT", "string");
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	if (!this.fnSelectValidate()) return false;

        	var objGrid = this.fnCurrentGrid();

        	this.gfnGridBeforeSelect(objGrid);

        	this.dsList1.clearData();
        	this.dsList2.clearData();
        	this.dsList3.clearData();

        	var inDataset = "", outDataSet = "";
        	switch(this.tabData.tabindex) {
        		case 0:
        			inDataset     = "select1=dsSelect";
        			outDataSet     = "dsList1=select10";
        			break;
        		case 1:
        			inDataset     = "select2=dsSelect";
        			outDataSet     = "dsList2=select20";
        			break;
        		case 2:
        			inDataset     = "select3=dsSelect";
        			outDataSet     = "dsList3=select30";

        			break;
        	}


        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        	this.dsSelect.setColumn(0, "DT_BASIC", this.dsSearch.getColumn(0, "DT_BASIC"));
        	this.dsSelect.setColumn(0, "CD_BUNSO", this.dsSearch.getColumn(0, "CD_BUNSO"));
        	this.dsSelect.setColumn(0, "YN_PRINT", this.dsSearch.getColumn(0, "YN_PRINT"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = inDataset;
        	var outData     = outDataSet;
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
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	var arrGrid = [], arrSheetName = [];
        	arrGrid[0] = this.dxGrid1;
        	arrGrid[1] = this.dxGrid2;
        	arrGrid[2] = this.dxGrid3;

        	arrSheetName[0] = this.tabData.tab1.text;
        	arrSheetName[1] = this.tabData.tab2.text;
        	arrSheetName[2] = this.tabData.tab3.text;
        	this.gfnExcelExportMulti(arrGrid,  arrSheetName, this.titletext);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {

        	var reportpath  = "/db/dbt/DBT_REPORT.ozr";
        	var inProc		= "_dsProc";
        	var inParam 	= "params=dsSelect";						// 필요없는 경우 생략
        	var inData      = "select=dsSelect";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        	if ( this.gfnIsNull(this.calDT_BASIC.value) ) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.calDT_BASIC.setFocus();
        			return false;
        		}
        		this.gfnAlert("기준일자는 반듯이 입력해야 합니다.", "fnVaidateCallback"); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)

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
        		var objGrid = this.fnCurrentGrid();
        		this.gfnGridAfterSelect(objGrid);
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnCurrentGrid = function (){
        	var tabIdx = this.tabData.tabindex;
        	var objGrid;
        	switch(tabIdx){
        		case 0:
        			objGrid = this.dxGrid1;
        			break;
        		case 1:
        			objGrid = this.dxGrid2;
        			break;
        		case 2:
        			objGrid = this.dxGrid3;
        			break;
        	}
        	return objGrid;
         }
        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

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
        		this.gfnGridClear(this.dxGrid1);
        		this.gfnGridClear(this.dxGrid2);
        		this.gfnGridClear(this.dxGrid3);
        	}

        	if( e.columnid == "TY_GUBUN" ){
        		this.fnSetTyGubun();
        	}
        };

        this.fnSetTyGubun = function (){
        	this.tabData.tab1.set_text(this.cboTY_GUBUN.text+"현황");
        	var nm = this.cboTY_GUBUN.text;
        	nm = nm.substr(0,1);
        	if( nm == "연") nm = "년";

        	// tab1
        	var colIdx = this.dxGrid1.getBindCellIndex("body","CT_NOT_APPROVE_LAST");
        	this.dxGrid1.setCellProperty("head",colIdx,"text",this.cboTY_GUBUN.text +" 접수 및 완료현황");

        	colIdx = this.gfnGetHeadCellIndex(this.dxGrid1, "CT_NOT_APPROVE_LAST");
        	this.dxGrid1.setCellProperty("head",colIdx,"text","전"+nm+" 미완료");

        	// tab2
        	colIdx = this.dxGrid2.getBindCellIndex("body","CT_NOT_APPROVE_LAST");
        	this.dxGrid2.setCellProperty("head",colIdx,"text",this.cboTY_GUBUN.text +" 접수 및 완료 현황");

        	colIdx = this.gfnGetHeadCellIndex(this.dxGrid2, "CT_NOT_APPROVE_LAST");
        	this.dxGrid2.setCellProperty("head",colIdx,"text","전"+nm+" 미완료");

        	// tab3
        	colIdx = this.dxGrid3.getBindCellIndex("body","CT_NOT_APPROVE_LAST");
        	this.dxGrid3.setCellProperty("head",colIdx,"text",this.cboTY_GUBUN.text +" 접수 및 완료 현황");

        	colIdx = this.gfnGetHeadCellIndex(this.dxGrid3, "CT_NOT_APPROVE_LAST");
        	this.dxGrid3.setCellProperty("head",colIdx,"text","전"+nm+" 미완료");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("DBT_REPORT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
