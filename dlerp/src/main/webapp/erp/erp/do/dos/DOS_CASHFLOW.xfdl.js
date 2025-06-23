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
            this.set_titletext("사업수지항목");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">selectGrHead</Col><Col id=\"SP\">DOSPR_CASHFLOW_TITLE_SELECT</Col></Row><Row><Col id=\"SP\">DOSPR_CASHFLOW_SELECT</Col><Col id=\"TARGET\">select</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"YM_MAGAM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_PROJ\"/><Col id=\"DS_PROJ\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHeader", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridSpec", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_WIDTH\" type=\"INT\" size=\"256\"/><Column id=\"YN_READONLY\" type=\"STRING\" size=\"256\"/><Column id=\"YN_ESSENTIAL\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CELLTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_ALIGN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_INPUT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HEADER1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HEADER2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HEADER3\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMBOLIST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CODEFIND\" type=\"STRING\" size=\"256\"/><Column id=\"NM_CODEFIND\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RESULTALIAS\" type=\"STRING\" size=\"256\"/><Column id=\"NO_MAXLENGTH\" type=\"INT\" size=\"256\"/><Column id=\"NO_GROUP\" type=\"INT\" size=\"256\"/><Column id=\"NO_MERGE\" type=\"INT\" size=\"256\"/><Column id=\"TY_SUMMARY\" type=\"STRING\" size=\"256\"/><Column id=\"AT_COLBACK\" type=\"STRING\" size=\"256\"/><Column id=\"AT_COLFORE\" type=\"STRING\" size=\"256\"/><Column id=\"AT_READONLY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"YN_READONLY\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FIXEDROWS\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FROZENCOL\" type=\"STRING\" size=\"256\"/><Column id=\"YN_AUTOFILTER\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"YN_GROUPPANNEL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YN_READONLY\">N</Col><Col id=\"NO_FIXEDROWS\">1</Col><Col id=\"NO_FROZENCOL\">0</Col><Col id=\"YN_AUTOFILTER\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_PROJ","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("프로젝트");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_PROJ","staCD_PROJ:0.0","10.0","350","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DOS_CFPROJ");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYR_ACCOUNT","ccfCD_PROJ:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("기준년월");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("tclYM_MAGAM","staYR_ACCOUNT:0.0","10.0","84","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enableevent("true");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","30",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","13",null,null,"0","2",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_PROJ.form.CDTextBox","value","dsSearch","CD_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_PROJ.form.DSTextBox","value","dsSearch","DS_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.tclYM_MAGAM.form.TextBox","value","dsSearch","YM_MAGAM");
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
        this.registerScript("DOS_CASHFLOW.xfdl", function() {
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

        	if (!this.gfnIsNull(this.getOwnerFrame().CD_PROJ)) {
        		this.dsSearch.setColumn(0, "CD_PROJ", this.getOwnerFrame().CD_PROJ);
        		this.dsSearch.setColumn(0, "DS_PROJ", this.getOwnerFrame().DS_PROJ);
        		this.dsSearch.setColumn(0, "YM_MAGAM", this.getOwnerFrame().YM_MAGAM);
        	}
        	else {
        		this.dsSearch.setColumn(0, "YM_MAGAM", this.gfnGetDate().substr(0,6));
        	}

        	if (!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_PROJ")))
        		this.FormBtns.Select.click();

        };

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
         	this.ccfCD_PROJ = this.divSearch.form.ccfCD_PROJ;
        	this.tclYM_WORK = this.divSearch.form.tclYM_WORK;

         	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
         	//this.gfnGridInit(this.dxGrid, this.dsList, "DO", "DOS_TOT");
        	this.gfnGridInit(this.dxGrid, this.dsList, "DO", "DOS_CASHFLOW", "DS_ITEM", "NO_LEVEL"); //TREE 형태 그리드

        	this.ccfCD_PROJ.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_PROJ.AfterCDTextChanged = "fnAfterCDTextChanged";

         	//his.fnAddFlagRow();
         	//this.gfnGridSet(this, this.dxGrid, this.dsGridInfo, this.dsGridSpec);

        	//this.grdFormat = this.dxGrid.getCurFormatString();
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_PROJ", "string");
        	this.dsSelect.addColumn("YM_MAGAM", "string");

        	this.dsSetHead = new Dataset();
        	this.dsSetHead.addColumn("CD_PROJ", "string");
        	this.dsSetHead.addColumn("YM_MAGAM", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        this.fnSelect = function() {
        	//if (!this.fnSelectValidate()) return false;

        	// 그리드 헤더 조회후 설정
        	this.fnSetHeader();
        }

        // 그리드 컬럼 조회
        this.fnSetHeader = function() {

        	this.dsSetHead.clearData();
        	this.dsSetHead.addRow();

        	this.dsSetHead.setColumn(0, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        	this.dsSetHead.setColumn(0, "YM_MAGAM", this.dsSearch.getColumn(0, "YM_MAGAM"));

        	var strSvcId    = "header";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectGrHead=dsSetHead";
        	var outData     = "dsHeader=selectGrHead0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc, false); // 통신방법 정의 [생략가능]
        };

        // 그리드 컬럼 추가
        this.fnSetGridColunm = function (){

        	//this.dxGrid.set_binddataset(this.dsHeader);

        	var ncol1 = 0;

        	this.dxGrid.set_enableredraw(false);
        	this.dsList.set_enableevent(false);

        	// 재조회할때 이전 조회한 컬럼정보를 지우고 다시 셋팅함
        	for ( var i =this.dxGrid.getCellCount("body")-1; 1 < i ; i--){
         		if( this.gfnGridGetBindColumnNameByIndex( this.dxGrid, i).search("CD_") > -1 ){
         			this.dxGrid.deleteContentsCol("body",i);
         		}
         	}
        	for ( var i =this.dsList.colcount-1; -1 < i ; i--){
        		//trace(i+"=" + this.dsList.getColID(i));
        		if( this.dsList.getColID(i).search("CD_") > -1 ){
        			this.dsList.deleteColumn(i);
        		}
        	}

        	// 그리드 헤더 셋팅(컬럼 추가)
        	for (var i = 0; i < this.dsHeader.rowcount; i++) {

        		trace("asdfasdf>>>" + this.dsHeader.rowcount);

        		var objColinfo = new ColumnInfo() ;
        		objColinfo.set_type( "TEXT" );
        		objColinfo.set_size( 256 );

        		this.dsList.addColumnInfo(this.dsHeader.getColumn(i,"DS_01"),objColinfo);

        		ncol1 = this.dxGrid.appendContentsCol();
        		headCol = (ncol1+3) + i * 12;
        		headCol1 = 5 + i * 12;
        		trace("ncol1>>>" + ncol1);
        		trace("headCol>>>" + headCol);
        		trace("headCol1>>>" + headCol1);
        		this.dxGrid.setFormatColProperty(ncol1, "size", 120);
        		this.dxGrid.setCellProperty("head", headCol1, "text", this.dsHeader.getColumn(i, "DS_01") );		//헤더 상단
        		this.dxGrid.setCellProperty("head", headCol	, "text", this.dsHeader.getColumn(i, "YM_01"));			//헤더 하단
        		this.dxGrid.setCellProperty("body", ncol1, "displaytype", "number");
        		this.dxGrid.setCellProperty("body", ncol1, "text", "bind:" + (this.dsHeader.getColumn(i, "YY_YEAR"))+"-01");
        		//this.dxGrid.setCellProperty("summ", ncol1, "displaytype", "number");
        		//this.dxGrid.setCellProperty("summ", ncol1 , "text", "expr:dataset.getSum('" + this.dsHeader.getColumn(i,"CD_CORP") + "')");

        		ncol1 = this.dxGrid.appendContentsCol();
        		headCol = (ncol1+4) + i * 12;
        		headCol1 = 6 + i * 12;
        		this.dxGrid.setFormatColProperty(ncol1, "size", 120);
        		this.dxGrid.setCellProperty("head", headCol1, "text", this.dsHeader.getColumn(i,"DS_02") );
        		this.dxGrid.setCellProperty("head", headCol	, "text", this.dsHeader.getColumn(i, "YM_02"));			//헤더 하단
        		this.dxGrid.setCellProperty("body", ncol1, "displaytype", "number");
        		this.dxGrid.setCellProperty("body", ncol1, "text", "bind:" + (this.dsHeader.getColumn(i, "YY_YEAR"))+"-02");

        		ncol1 = this.dxGrid.appendContentsCol();
        		headCol = (ncol1+5) + i * 12;
        		headCol1 = 7 + i * 12;
        		this.dxGrid.setFormatColProperty(ncol1, "size", 120);
        		this.dxGrid.setCellProperty("head", headCol1, "text", this.dsHeader.getColumn(i,"DS_03") );
        		this.dxGrid.setCellProperty("head", headCol	, "text", this.dsHeader.getColumn(i, "YM_03"));			//헤더 하단
        		this.dxGrid.setCellProperty("body", ncol1, "displaytype", "number");
        		this.dxGrid.setCellProperty("body", ncol1, "text", "bind:" + (this.dsHeader.getColumn(i, "YY_YEAR"))+"-03");

        		ncol1 = this.dxGrid.appendContentsCol();
        		headCol = (ncol1+6) + i * 12;
        		headCol1 = 8 + i * 12;
        		this.dxGrid.setFormatColProperty(ncol1, "size", 120);
        		this.dxGrid.setCellProperty("head", headCol1, "text", this.dsHeader.getColumn(i,"DS_04") );
        		this.dxGrid.setCellProperty("head", headCol	, "text", this.dsHeader.getColumn(i, "YM_04"));			//헤더 하단
        		this.dxGrid.setCellProperty("body", ncol1, "displaytype", "number");
        		this.dxGrid.setCellProperty("body", ncol1, "text", "bind:" + (this.dsHeader.getColumn(i, "YY_YEAR"))+"-04");

        		ncol1 = this.dxGrid.appendContentsCol();
        		headCol = (ncol1+7) + i * 12;
        		headCol1 = 9 + i * 12;
        		this.dxGrid.setFormatColProperty(ncol1, "size", 120);
        		this.dxGrid.setCellProperty("head", headCol1, "text", this.dsHeader.getColumn(i,"DS_05") );
        		this.dxGrid.setCellProperty("head", headCol	, "text", this.dsHeader.getColumn(i, "YM_05"));			//헤더 하단
        		this.dxGrid.setCellProperty("body", ncol1, "displaytype", "number");
        		this.dxGrid.setCellProperty("body", ncol1, "text", "bind:" + (this.dsHeader.getColumn(i, "YY_YEAR"))+"-05");

        		ncol1 = this.dxGrid.appendContentsCol();
        		headCol = (ncol1+8) + i * 12;
        		headCol1 = 10 + i * 12;
        		this.dxGrid.setFormatColProperty(ncol1, "size", 120);
        		this.dxGrid.setCellProperty("head", headCol1, "text", this.dsHeader.getColumn(i,"DS_06") );
        		this.dxGrid.setCellProperty("head", headCol	, "text", this.dsHeader.getColumn(i, "YM_06"));			//헤더 하단
        		this.dxGrid.setCellProperty("body", ncol1, "displaytype", "number");
        		this.dxGrid.setCellProperty("body", ncol1, "text", "bind:" + (this.dsHeader.getColumn(i, "YY_YEAR"))+"-06");

        		ncol1 = this.dxGrid.appendContentsCol();
        		headCol = (ncol1+9) + i * 12;
        		headCol1 = 11 + i * 12;
        		this.dxGrid.setFormatColProperty(ncol1, "size", 120);
        		this.dxGrid.setCellProperty("head", headCol1, "text", this.dsHeader.getColumn(i,"DS_07") );
        		this.dxGrid.setCellProperty("head", headCol	, "text", this.dsHeader.getColumn(i, "YM_07"));			//헤더 하단
        		this.dxGrid.setCellProperty("body", ncol1, "displaytype", "number");
        		this.dxGrid.setCellProperty("body", ncol1, "text", "bind:" + (this.dsHeader.getColumn(i, "YY_YEAR"))+"-07");

        		ncol1 = this.dxGrid.appendContentsCol();
        		headCol = (ncol1+10) + i * 12;
        		headCol1 = 12 + i * 12;
        		this.dxGrid.setFormatColProperty(ncol1, "size", 120);
        		this.dxGrid.setCellProperty("head", headCol1, "text", this.dsHeader.getColumn(i,"DS_08") );
        		this.dxGrid.setCellProperty("head", headCol	, "text", this.dsHeader.getColumn(i, "YM_08"));			//헤더 하단
        		this.dxGrid.setCellProperty("body", ncol1, "displaytype", "number");
        		this.dxGrid.setCellProperty("body", ncol1, "text", "bind:" + (this.dsHeader.getColumn(i, "YY_YEAR"))+"-08");

        		ncol1 = this.dxGrid.appendContentsCol();
        		headCol = (ncol1+11) + i * 12;
        		headCol1 = 13 + i * 12;
        		this.dxGrid.setFormatColProperty(ncol1, "size", 120);
        		this.dxGrid.setCellProperty("head", headCol1, "text", this.dsHeader.getColumn(i,"DS_09") );
        		this.dxGrid.setCellProperty("head", headCol	, "text", this.dsHeader.getColumn(i, "YM_09"));			//헤더 하단
        		this.dxGrid.setCellProperty("body", ncol1, "displaytype", "number");
        		this.dxGrid.setCellProperty("body", ncol1, "text", "bind:" + (this.dsHeader.getColumn(i, "YY_YEAR"))+"-09");

        		ncol1 = this.dxGrid.appendContentsCol();
        		headCol = (ncol1+12) + i * 12;
        		headCol1 = 14 + i * 12;
        		this.dxGrid.setFormatColProperty(ncol1, "size", 120);
        		this.dxGrid.setCellProperty("head", headCol1, "text", this.dsHeader.getColumn(i,"DS_10") );
        		this.dxGrid.setCellProperty("head", headCol	, "text", this.dsHeader.getColumn(i, "YM_10"));			//헤더 하단
        		this.dxGrid.setCellProperty("body", ncol1, "displaytype", "number");
        		this.dxGrid.setCellProperty("body", ncol1, "text", "bind:" + (this.dsHeader.getColumn(i, "YY_YEAR"))+"-10");

        		ncol1 = this.dxGrid.appendContentsCol();
        		headCol = (ncol1+13) + i * 12;
        		headCol1 = 15 + i * 12;
        		this.dxGrid.setFormatColProperty(ncol1, "size", 120);
        		this.dxGrid.setCellProperty("head", headCol1, "text", this.dsHeader.getColumn(i,"DS_11") );
        		this.dxGrid.setCellProperty("head", headCol	, "text", this.dsHeader.getColumn(i, "YM_11"));			//헤더 하단
        		this.dxGrid.setCellProperty("body", ncol1, "displaytype", "number");
        		this.dxGrid.setCellProperty("body", ncol1, "text", "bind:" + (this.dsHeader.getColumn(i, "YY_YEAR"))+"-11");

        		ncol1 = this.dxGrid.appendContentsCol();
        		headCol = (ncol1+14) + i * 12;
        		headCol1 = 16 + i * 12;
        		this.dxGrid.setFormatColProperty(ncol1, "size", 120);
        		this.dxGrid.setCellProperty("head", headCol1, "text", this.dsHeader.getColumn(i,"DS_12") );
        		this.dxGrid.setCellProperty("head", headCol	, "text", this.dsHeader.getColumn(i, "YM_12"));			//헤더 하단
        		this.dxGrid.setCellProperty("body", ncol1, "displaytype", "number");
        		this.dxGrid.setCellProperty("body", ncol1, "text", "bind:" + (this.dsHeader.getColumn(i, "YY_YEAR"))+"-12");
        	}

        	this.dxGrid.set_enableredraw(true);
        	this.dsList.set_enableevent(true);

        };

        this.fnDtSelect = function() {
        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        	this.dsSelect.setColumn(0, "YM_MAGAM", this.dsSearch.getColumn(0, "YM_MAGAM"));

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

        // this.fnRealSelect = function() {
        // 	//if (!this.fnSelectValidate()) return false;
        //
        // 	//this.gfnGridBeforeSelect(this.dxGrid);
        //
        // 	this.dsSelect.clearData();
        // 	this.dsSelect.addRow();
        // 	this.dsSelect.setColumn(0, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        // 	this.dsSelect.setColumn(0, "YM_MAGAM", this.dsSearch.getColumn(0, "YM_MAGAM"));
        //
        // 	var strSvcId    = "real";
        // 	var strSvcType  = "grid";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "select=dsSelect";
        // 	var outData     = "dsList=select0";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						 strSvcType , 	// transaction을 요청할 구분
        // 						 inProc,			// Procedure 정보 Dataset 이름
        // 						 inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						 outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						 strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 						 callBackFnc); // 통신방법 정의 [생략가능]
        // }

        this.fnAdd = function() {

        }

        this.fnDel = function() {

        }

        this.fnSave = function() {

        }

        this.fnExcel = function() {

        }

        this.fnPrint = function() {

        }

        /************************************************************************
         * Validate
         ************************************************************************/
        // this.fnSelectValidation = function() {
        // 	var validate = true;
        // 	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_PROJ"))) {
        // 		this.fnVaidateCallback = function() {
        // 			this.ccfCD_PROJ.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("프로젝트 코드를 입력하지 않았습니다.", "fnVaidateCallback");
        // 		return false;
        // 	}
        //
        //   	return validate;
        //  }


        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	} else if(svcID == "header") {
         		trace("fnCallback dsHeader >>>>"+this.dsHeader.saveXML());

        		// 그리드 설정(컬럼추가)
        		this.fnSetGridColunm();

        		// 데이터 조회
        		this.fnDtSelect();
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_PROJ") {
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	}

        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_EnterCell = function(obj, row, cell) {
        	// 수정가능 true, false 처리하려는 컬럼에 대해서만 return 처리할것.
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);	// 클릭한 cell의 컬럼명
        }

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fnAddFlagRow = function() {

        	//this.gfnGridInit(this.dxGrid, this.dsList, "DO", "DOS_CASHFLOW", "DS_ITEM", "NO_LEVEL"); //TREE 형태 그리드

        // 	var nrow = this.dsGridSpec.addRow();
        // 	this.dsGridSpec.setColumn(nrow, "NO_WIDTH", 20);
        // 	this.dsGridSpec.setColumn(nrow, "YN_READONLY", "Y");
        // 	this.dsGridSpec.setColumn(nrow, "YN_ESSENTIAL", "N");
        // 	this.dsGridSpec.setColumn(nrow, "TY_CELLTYPE", "TEXT");
        // 	this.dsGridSpec.setColumn(nrow, "TY_ALIGN", "CENTER");
        // 	this.dsGridSpec.setColumn(nrow, "TY_INPUT", "KEYIN");
        // 	this.dsGridSpec.setColumn(nrow, "DS_FIELD", this.ucFlag);
        //
        // 	nrow = this.dsGridSpec.addRow();
        // 	this.dsGridSpec.setColumn(nrow, "NO_WIDTH", 200);
        // 	this.dsGridSpec.setColumn(nrow, "YN_READONLY", "Y");
        // 	this.dsGridSpec.setColumn(nrow, "YN_ESSENTIAL", "N");
        // 	this.dsGridSpec.setColumn(nrow, "TY_CELLTYPE", "TEXT");
        // 	this.dsGridSpec.setColumn(nrow, "TY_ALIGN", "LEFT");
        // 	this.dsGridSpec.setColumn(nrow, "TY_INPUT", "KEYIN");
        // 	this.dsGridSpec.setColumn(nrow, "DS_FIELD", "DS_ITEM");
        // 	this.dsGridSpec.setColumn(nrow, "DS_HEADER1", "사업수지항목");
        // 	this.dsGridSpec.setColumn(nrow, "DS_HEADER2", "명칭");
        //
        // 	nrow = this.dsGridSpec.addRow();
        // 	this.dsGridSpec.setColumn(nrow, "NO_WIDTH", 80);
        // 	this.dsGridSpec.setColumn(nrow, "YN_READONLY", "Y");
        // 	this.dsGridSpec.setColumn(nrow, "YN_ESSENTIAL", "N");
        // 	this.dsGridSpec.setColumn(nrow, "TY_CELLTYPE", "TEXT");
        // 	this.dsGridSpec.setColumn(nrow, "TY_ALIGN", "CENTER");
        // 	this.dsGridSpec.setColumn(nrow, "TY_INPUT", "KEYIN");
        // 	this.dsGridSpec.setColumn(nrow, "DS_FIELD", "CD_ITEM");
        // 	this.dsGridSpec.setColumn(nrow, "DS_HEADER1", "사업수지항목");
        // 	this.dsGridSpec.setColumn(nrow, "DS_HEADER2", "코드");
        //
        // 	nrow = this.dsGridSpec.addRow();
        // 	this.dsGridSpec.setColumn(nrow, "NO_WIDTH", 0);
        // 	this.dsGridSpec.setColumn(nrow, "YN_READONLY", "Y");
        // 	this.dsGridSpec.setColumn(nrow, "YN_ESSENTIAL", "N");
        // 	this.dsGridSpec.setColumn(nrow, "TY_CELLTYPE", "TEXT");
        // 	this.dsGridSpec.setColumn(nrow, "TY_ALIGN", "CENTER");
        // 	this.dsGridSpec.setColumn(nrow, "TY_INPUT", "KEYIN");
        // 	this.dsGridSpec.setColumn(nrow, "DS_FIELD", "CD_ITEM");
        // 	this.dsGridSpec.setColumn(nrow, "DS_HEADER1", "사업수지항목");
        // 	this.dsGridSpec.setColumn(nrow, "DS_HEADER2", "레벨");
        //
        // 	nrow = this.dsGridSpec.addRow();
        // 	this.dsGridSpec.setColumn(nrow, "NO_WIDTH", 0);
        // 	this.dsGridSpec.setColumn(nrow, "YN_READONLY", "Y");
        // 	this.dsGridSpec.setColumn(nrow, "YN_ESSENTIAL", "N");
        // 	this.dsGridSpec.setColumn(nrow, "TY_CELLTYPE", "TEXT");
        // 	this.dsGridSpec.setColumn(nrow, "TY_ALIGN", "CENTER");
        // 	this.dsGridSpec.setColumn(nrow, "TY_INPUT", "KEYIN");
        // 	this.dsGridSpec.setColumn(nrow, "DS_FIELD", "CD_ITEM");
        // 	this.dsGridSpec.setColumn(nrow, "DS_HEADER1", "사업수지항목");
        // 	this.dsGridSpec.setColumn(nrow, "DS_HEADER2", "사용여부");
        //
        // 	nrow = this.dsGridSpec.addRow();
        // 	this.dsGridSpec.setColumn(nrow, "NO_WIDTH", 120);
        // 	this.dsGridSpec.setColumn(nrow, "YN_READONLY", "Y");
        // 	this.dsGridSpec.setColumn(nrow, "YN_ESSENTIAL", "N");
        // 	this.dsGridSpec.setColumn(nrow, "TY_CELLTYPE", "DOUBLE");
        // 	this.dsGridSpec.setColumn(nrow, "TY_ALIGN", "RIGHT");
        // 	this.dsGridSpec.setColumn(nrow, "TY_INPUT", "KEYIN");
        // 	this.dsGridSpec.setColumn(nrow, "DS_FIELD", "AM_PLAN");
        // 	this.dsGridSpec.setColumn(nrow, "DS_HEADER1", "사업예산");
        // 	this.dsGridSpec.setColumn(nrow, "DS_HEADER2", "사업예산");
        // 	this.dsGridSpec.setColumn(nrow, "DS_COMBOLIST", "#,###.##");
        //
        // 	nrow = this.dsGridSpec.addRow();
        // 	this.dsGridSpec.setColumn(nrow, "NO_WIDTH", 120);
        // 	this.dsGridSpec.setColumn(nrow, "YN_READONLY", "Y");
        // 	this.dsGridSpec.setColumn(nrow, "YN_ESSENTIAL", "N");
        // 	this.dsGridSpec.setColumn(nrow, "TY_CELLTYPE", "DOUBLE");
        // 	this.dsGridSpec.setColumn(nrow, "TY_ALIGN", "RIGHT");
        // 	this.dsGridSpec.setColumn(nrow, "TY_INPUT", "KEYIN");
        // 	this.dsGridSpec.setColumn(nrow, "DS_FIELD", "AM_EXEC");
        // 	this.dsGridSpec.setColumn(nrow, "DS_HEADER1", "사업수지분석");
        // 	this.dsGridSpec.setColumn(nrow, "DS_HEADER2", "기집행");
        // 	this.dsGridSpec.setColumn(nrow, "DS_COMBOLIST", "#,###.##");
        //
        // 	nrow = this.dsGridSpec.addRow();
        // 	this.dsGridSpec.setColumn(nrow, "NO_WIDTH", 80);
        // 	this.dsGridSpec.setColumn(nrow, "YN_READONLY", "Y");
        // 	this.dsGridSpec.setColumn(nrow, "YN_ESSENTIAL", "N");
        // 	this.dsGridSpec.setColumn(nrow, "TY_CELLTYPE", "DOUBLE");
        // 	this.dsGridSpec.setColumn(nrow, "TY_ALIGN", "RIGHT");
        // 	this.dsGridSpec.setColumn(nrow, "TY_INPUT", "KEYIN");
        // 	this.dsGridSpec.setColumn(nrow, "DS_FIELD", "RT_EXEC");
        // 	this.dsGridSpec.setColumn(nrow, "DS_HEADER1", "사업수지분석");
        // 	this.dsGridSpec.setColumn(nrow, "DS_HEADER2", "기집행율");
        // 	this.dsGridSpec.setColumn(nrow, "DS_COMBOLIST", "0.##");
        //
        // 	nrow = this.dsGridSpec.addRow();
        // 	this.dsGridSpec.setColumn(nrow, "NO_WIDTH", 120);
        // 	this.dsGridSpec.setColumn(nrow, "YN_READONLY", "Y");
        // 	this.dsGridSpec.setColumn(nrow, "YN_ESSENTIAL", "N");
        // 	this.dsGridSpec.setColumn(nrow, "TY_CELLTYPE", "DOUBLE");
        // 	this.dsGridSpec.setColumn(nrow, "TY_ALIGN", "RIGHT");
        // 	this.dsGridSpec.setColumn(nrow, "TY_INPUT", "KEYIN");
        // 	this.dsGridSpec.setColumn(nrow, "DS_FIELD", "AM_JAN");
        // 	this.dsGridSpec.setColumn(nrow, "DS_HEADER1", "사업수지분석");
        // 	this.dsGridSpec.setColumn(nrow, "DS_HEADER2", "잔액");
        // 	this.dsGridSpec.setColumn(nrow, "DS_COMBOLIST", "#,###.##");

        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DOS_CASHFLOW.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
