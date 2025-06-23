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
            this.set_titletext("기간별 입찰결과표");
            if (Form == this.constructor)
            {
                this._setFormPosition(1210,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DOZPR_CIVL_BID_TERM_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_ORD\" type=\"STRING\" size=\"256\"/><Column id=\"NM_ORD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PRC_BID\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CLS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CLS_CONST\" type=\"STRING\" size=\"256\"/><Column id=\"NM_CLS_CONST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CONCERN\" type=\"STRING\" size=\"256\"/><Column id=\"NM_CONCERN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CV_GO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROJ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDS_CD_CLS", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_DT", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDS_CD_PRC_BID", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">01</Col><Col id=\"DS_CODE\">참여공사</Col></Row><Row><Col id=\"CD_CODE\">00</Col><Col id=\"DS_CODE\">불참공사</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDS_CD_CV_GO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_PROJ","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("기간");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CLS","0.0","staCD_PROJ:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("상품명");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_ORD","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("발주방식");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfTY_ORD","staTY_ORD:0.0","10.0","277","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("CF_CODE_DO_30");
            obj.getSetter("CDTextWidth").set("80");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CLS_CONST","0.0","staCD_PROJ:10.0","277","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("CF_CODE_DO_41");
            obj.getSetter("CDTextWidth").set("80");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_PRC_BID","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("참여공사여부");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCD_PRC_BID","staCD_PRC_BID:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsDS_CD_PRC_BID");
            obj.set_text("");
            obj.set_value("N");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCD_CLS","staCD_CLS:0.0","staCD_PROJ:10.0","138","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsDS_CD_CLS");
            obj.set_text("");
            obj.set_value("N");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CV_GO00","ccboCD_CLS:0.0","staCD_PROJ:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("발주처");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FR","0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("20200101");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","ctclDT_FR:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("20200101");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CV_GO00_00","ctclDT_TO:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CONCERN","0.0","staCD_PROJ:10.0","277","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DOX_CFVENDOR_DH");
            obj.getSetter("CDTextWidth").set("120");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_DT","0.0","10.0","139","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTY_DT");
            obj.set_text("");
            obj.set_value("N");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCD_CV_GO","ccboTY_DT:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsDS_CD_CV_GO");
            obj.set_text("");
            obj.set_value("N");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CV_GO","ccboCD_CV_GO:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("공공/민간");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CV_GO01","0.0","staCD_PROJ:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("프로젝트명");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt00","staCD_CV_GO01:0.0","staCD_PROJ:10.0","270","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","5",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.ctclDT_FR","value","dsSearch","DT_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfTY_ORD.form.CDTextBox","value","dsSearch","TY_ORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfTY_ORD.form.DSTextBox","value","dsSearch","NM_ORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccboCD_PRC_BID","value","dsSearch","CD_PRC_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccboCD_CLS","value","dsSearch","CD_CLS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfCD_CLS_CONST.form.CDTextBox","value","dsSearch","CD_CLS_CONST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ccfCD_CLS_CONST.form.DSTextBox","value","dsSearch","NM_CLS_CONST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.ccfCD_CONCERN.form.CDTextBox","value","dsSearch","CD_CONCERN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.ccfCD_CONCERN.form.DSTextBox","value","dsSearch","NM_CONCERN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccboTY_DT","value","dsSearch","TY_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.ccboCD_CV_GO","value","dsSearch","CD_CV_GO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch.form.edt00","value","dsSearch","DS_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DOB_CIVL_BID_TERM.xfdl", function() {
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
        	this.fnSetCombo();
        	this.fnSetParameter();
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
           this.ccfTY_ORD = this.divSearch.form.ccfTY_ORD;	//발주방식
           this.ccfCD_CLS_CONST = this.divSearch.form.ccfCD_CLS_CONST;//상품분류
           this.ccfCD_CONCERN = this.divSearch.form.ccfCD_CONCERN;//발주처
           this.dxGrid = this.divData.form.objGrid;
        };


        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CONCERN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.gfnGridInit(this.dxGrid, this.dsList, "DO", "DOB_CIVL_BID_TERM");

        	var colDS_PROJ = this.dxGrid.getBindCellIndex("body", "DS_PROJ");
        	var colDS_DSN_CONSOR = this.dxGrid.getBindCellIndex("body", "DS_DSN_CONSOR");
        	var colDS_CO_CONT_RLT = this.dxGrid.getBindCellIndex("body", "DS_CO_CONT_RLT");


        	this.dxGrid.setCellProperty("body", colDS_PROJ, "wordWrap", "char");
        	this.dxGrid.setCellProperty("body", colDS_DSN_CONSOR, "wordWrap", "char");
        	this.dxGrid.setCellProperty("body", colDS_CO_CONT_RLT, "wordWrap", "char");

        	this.dxGrid.set_autosizingtype("row");
        	this.dxGrid.set_extendsizetype("row");

        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow)
         {
        	if (id == "ccfCD_CONCERN") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.objApp.gdsUserInfo.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "CD_SITE", "");
        		dsUserParam.setColumn(nrow, "TY_VENDOR", "CIVLJNT");
         	}

        	return true;
         }

        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();	// 공사분야
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(0, "CD_TYPE", "24");

        	this.dsCombo.addRow();	// 진행예정일자구분코드
        	this.dsCombo.setColumn(1, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(1, "CD_TYPE", "43");

        	this.dsCombo.addRow();	// 공공/민간
        	this.dsCombo.setColumn(2, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(2, "CD_TYPE", "25");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsDS_CD_CLS=combo0 dsTY_DT=combo1 dsDS_CD_CV_GO=combo2";
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

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	var today = this.gfnGetDate();

        	var dt_from = this.gfnAddMonth(today, -12);

        	this.dsSearch.setColumn(0, "DT_FR", dt_from);
        	this.dsSearch.setColumn(0, "DT_TO", today);

        	this.dsSelect = new Dataset();

        	this.dsSelect.addColumn("TY_DT", "string");
        	this.dsSelect.addColumn("DT_FR", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
        	this.dsSelect.addColumn("TY_ORD", "string");
        	this.dsSelect.addColumn("CD_PRC_BID", "string");
        	this.dsSelect.addColumn("CD_CLS", "string");
        	this.dsSelect.addColumn("CD_CLS_CONST", "string");
        	this.dsSelect.addColumn("CD_CONCERN", "string");
        	this.dsSelect.addColumn("CD_CV_GO", "string");
        	this.dsSelect.addColumn("DS_PROJ", "string");


        }

        this.fnSelect = function(){
        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();

        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "TY_DT", this.dsSearch.getColumn(0, "TY_DT"));
        	this.dsSelect.setColumn(0, "DT_FR", this.dsSearch.getColumn(0, "DT_FR"));
        	this.dsSelect.setColumn(0, "DT_TO", this.dsSearch.getColumn(0, "DT_TO"));
        	this.dsSelect.setColumn(0, "TY_ORD", this.dsSearch.getColumn(0, "TY_ORD"));
        	this.dsSelect.setColumn(0, "CD_PRC_BID", this.dsSearch.getColumn(0, "CD_PRC_BID"));
        	this.dsSelect.setColumn(0, "CD_CLS", this.dsSearch.getColumn(0, "CD_CLS"));
        	this.dsSelect.setColumn(0, "CD_CLS_CONST", this.dsSearch.getColumn(0, "CD_CLS_CONST"));
        	this.dsSelect.setColumn(0, "CD_CONCERN", this.dsSearch.getColumn(0, "CD_CONCERN"));
        	this.dsSelect.setColumn(0, "CD_CV_GO", this.dsSearch.getColumn(0, "CD_CV_GO"));
        	this.dsSelect.setColumn(0, "DS_PROJ", this.dsSearch.getColumn(0, "DS_PROJ"));

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
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "combo")
        	{
         		this.divSearch.form.ccboTY_DT.set_index(0);
        		this.divSearch.form.ccboCD_PRC_BID.set_index(0);

        		this.dsDS_CD_CLS.insertRow(0);
        		this.dsDS_CD_CLS.setColumn(0, "CD_CODE", "");
        		this.dsDS_CD_CLS.setColumn(0, "DS_CODE", "전체");
         		this.divSearch.form.ccboCD_CLS.set_index(0);

        		this.dsDS_CD_CV_GO.insertRow(0);
        		this.dsDS_CD_CV_GO.setColumn(0, "CD_CODE", "");
        		this.dsDS_CD_CV_GO.setColumn(0, "DS_CODE", "전체");
         		this.divSearch.form.ccboCD_CV_GO.set_index(0);

        	} else if(svcID == "select") {
        		return;
        	}
        };


        /*
            조회 조건 변경시 초기화
         */
        this.dsSearch_onvaluechanged = function(obj,e){
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
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DOB_CIVL_BID_TERM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
