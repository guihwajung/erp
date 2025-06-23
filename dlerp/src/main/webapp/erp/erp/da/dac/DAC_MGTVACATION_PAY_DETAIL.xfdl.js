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
            this.set_titletext("연차수당(상세) 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1330,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"INT\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JOIN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RETIRE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"DS_CORP\"/><Col id=\"CD_DEPT\"/><Col id=\"DS_DEPT\"/><Col id=\"ID_SABUN\"/><Col id=\"DS_HNAME\"/><Col id=\"ID_PERSON\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DACPR_MGTVACA_PAY_DETAIL_SELECT</Col></Row><Row><Col id=\"SP\">DACPR_MGTVACA_PAY_DETAIL_SAVE</Col><Col id=\"TARGET\">save</Col></Row><Row><Col id=\"SP\">DACPR_MGTVACA_PAY_USED_SELECT</Col><Col id=\"TARGET\">d_select</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46","0",null,null,null,null,null,this);
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","10","92","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0","10","250","25",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFCORP_STD");
            obj.getSetter("CDTextWidth").set("50");
            obj.getSetter("FitToContents").set("true");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","ccfCD_CORP:0","10","92","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:0","10","250","25",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFDEPT");
            obj.getSetter("CDTextWidth").set("80");
            obj.getSetter("FitToContents").set("true");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSABUN","ccfCD_DEPT:0","10","66","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("사번");
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staSABUN:0","10","250","25",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("CDTextWidth").set("80");
            obj.getSetter("FitToContents").set("true");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDesc1","ccfID_SABUN:20","10","73","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_blue");
            obj.set_text("※ 입사일자 : ");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_JOIN","staDesc1:4","10","66","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_blue");
            obj.set_text("2021-01-27");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDesc2","staDT_JOIN:10","10","73","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_blue");
            obj.set_text("※ 퇴사일자 : ");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_RETIRE","staDesc2:4","10","66","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_blue");
            obj.set_text("2021-01-27");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:20",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","40%","100.00%","23",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("url(\'theme://images/slt_WF_SplitterH.png\') no-repeat center center");
            obj.set_cursor("ns-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataMain","0","0",null,null,"0","divSplitter:6",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            this.divData.addChild(obj.name, obj);

            obj = new Tab("tabData","0","0",null,"32","0",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.divDataMain.form.tabData);
            obj.set_text("입사일자기준");
            this.divData.form.divDataMain.form.tabData.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.divDataMain.form.tabData);
            obj.set_text("회계연도기준");
            this.divData.form.divDataMain.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","47",null,null,"0","0",null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("1");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Div("divDataSub","0","divSplitter:6",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid2","-5","34",null,null,"5","1",null,null,null,null,this.divData.form.divDataSub.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataSub.addChild(obj.name, obj);

            obj = new Static("staTitle1","0","0","87","35",null,null,null,null,null,null,this.divData.form.divDataSub.form);
            obj.set_taborder("1");
            obj.set_text("사용연차");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataSub.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.staDT_JOIN","text","dsSearch","DT_JOIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.staDT_RETIRE","text","dsSearch","DT_RETIRE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAC_MGTVACATION_PAY_DETAIL.xfdl", function() {
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
        	this.fnSetInit();
        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
         ************************************************************************/
        this.fnSetButton = function() {
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;

        	this.dxGrid = this.divData.form.divDataMain.form.objGrid;
        	this.dxGrid2 = this.divData.form.divDataSub.form.objGrid2;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	//그리드
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAC_MGTVACATION_PAY_DETAIL");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DA", "DAC_MGTVACATION_PAY_DETAIL_USED");
        	//this.dxGrid2.AfterEdit = "fnGrid_AfterEdit";

        	// 셀 수정가능 여부
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";

        	//그리드 이벤트
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	//법인
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	//부서
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.AfterCDTextChanged = "fnAfterCDTextChanged";
        	//성명
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.bSelect = false;
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	//조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP" , "string");
        	this.dsSelect.addColumn("CD_DEPT" , "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");

        	//저장
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK"        , "string");
        	this.dsSave.addColumn("TY_GUBUN"      , "string");
        	this.dsSave.addColumn("CD_CORP"       , "string");
        	this.dsSave.addColumn("ID_SABUN"      , "string");
        	this.dsSave.addColumn("CNT_YEAR"      , "int");
        	this.dsSave.addColumn("YY_BASE"       , "string");
        	this.dsSave.addColumn("QN_BASE"       , "bigdecimal");
        	this.dsSave.addColumn("QN_MONTHLY"    , "bigdecimal");
        	this.dsSave.addColumn("QN_USED"       , "bigdecimal");
        	this.dsSave.addColumn("QN_YEARLYPAY_Y", "bigdecimal");
        	this.dsSave.addColumn("AM_AVERAGEPAY" , "bigdecimal");
        	this.dsSave.addColumn("YN_CHK_Y"      , "string");
        	this.dsSave.addColumn("QN_YEARLYPAY_N", "bigdecimal");
        	this.dsSave.addColumn("YN_CHK_N"      , "string");
        	this.dsSave.addColumn("DS_REMARK"     , "string");
        	this.dsSave.addColumn("ID_USER"       , "string");

        };

        /************************************************************************
         * 초기화 이벤트
         ************************************************************************/
        this.fnSetInit = function ()
        {
        	//기준년월, 작업구분 셋팅
        	this.dsSearch.setColumn(0,"TY_GUBUN", "B");
        	this.dsSearch.setColumn(0,"DT_JOIN",this.getOwnerFrame().DT_JOIN);
        	this.dsSearch.setColumn(0,"DT_RETIRE",this.getOwnerFrame().DT_RETIRE);

        	if( !this.gfnIsNull(this.getOwnerFrame().ID_PERSON) ) {
        		this.dsSearch.setColumn(0,"CD_CORP"  , this.getOwnerFrame().CD_CORP);
        		this.dsSearch.setColumn(0,"DS_CORP"  , this.getOwnerFrame().DS_CORP);
        		this.dsSearch.setColumn(0,"CD_DEPT"  , this.getOwnerFrame().CD_DEPT);
        		this.dsSearch.setColumn(0,"DS_DEPT"  , this.getOwnerFrame().DS_DEPT);
        		this.dsSearch.setColumn(0,"ID_SABUN" , this.getOwnerFrame().ID_SABUN);
        		this.dsSearch.setColumn(0,"DS_HNAME" , this.getOwnerFrame().DS_HNAME);
        		this.dsSearch.setColumn(0,"ID_PERSON", this.getOwnerFrame().ID_PERSON);
        		this.FormBtns.Select.click();
        	} else {
        		this.dsSearch.setColumn(0,"CD_CORP",this.AuthClient.CD_CORP);
        		this.dsSearch.setColumn(0,"DS_CORP",this.AuthClient.DS_CORP);
        	}

        	this.bSelect = true;
        };
        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnValidate()) return;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP" , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "CD_DEPT" , this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect d_select=dsSelect";
        	var outData     = "dsList=select0 dsList2=d_select0";
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
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid);
        	this.dsList.setColumn(nrow,"CD_CORP" ,this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsList.setColumn(nrow,"DS_CORP" ,this.dsSearch.getColumn(0, "DS_CORP"));
        	this.dsList.setColumn(nrow,"CD_DEPT" ,this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsList.setColumn(nrow,"DS_DEPT" ,this.dsSearch.getColumn(0, "DS_DEPT"));
        	this.dsList.setColumn(nrow,"ID_SABUN",this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsList.setColumn(nrow,"DS_DEPT" ,this.dsSearch.getColumn(0, "DS_DEPT"));
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
        				var nrow = 0;
        				if( flag == "D" ){
        					nrow = this.dsSave.insertRow(0);
        				} else {
        					nrow = this.dsSave.addRow();
        				}

        				this.dsSave.setColumn(nrow, "TY_WRK"        , flag);
        				this.dsSave.setColumn(nrow, "TY_GUBUN"      , this.dsList.getColumn(i, "TY_GUBUN"));
        				this.dsSave.setColumn(nrow, "CD_CORP"       , this.dsList.getColumn(i, "CD_CORP"));
        				this.dsSave.setColumn(nrow, "ID_SABUN"      , this.dsList.getColumn(i, "ID_SABUN"));
        				this.dsSave.setColumn(nrow, "CNT_YEAR"      , this.dsList.getColumn(i, "CNT_YEAR"));
        				this.dsSave.setColumn(nrow, "YY_BASE"       , this.dsList.getColumn(i, "YY_BASE"));
        				this.dsSave.setColumn(nrow, "QN_BASE"       , this.dsList.getColumn(i, "QN_BASE"));
        				this.dsSave.setColumn(nrow, "QN_MONTHLY"    , this.dsList.getColumn(i, "QN_MONTHLY"));
        				this.dsSave.setColumn(nrow, "QN_USED"       , this.dsList.getColumn(i, "QN_USED"));
        				this.dsSave.setColumn(nrow, "QN_YEARLYPAY_Y", this.dsList.getColumn(i, "QN_YEARLYPAY_Y"));
        				this.dsSave.setColumn(nrow, "AM_AVERAGEPAY" , this.dsList.getColumn(i, "AM_AVERAGEPAY"));
        				this.dsSave.setColumn(nrow, "YN_CHK_Y"      , this.dsList.getColumn(i, "YN_CHK_Y"));
        				this.dsSave.setColumn(nrow, "QN_YEARLYPAY_N", this.dsList.getColumn(i, "QN_YEARLYPAY_N"));
        				this.dsSave.setColumn(nrow, "YN_CHK_N"      , this.dsList.getColumn(i, "YN_CHK_N"));
        				this.dsSave.setColumn(nrow, "DS_REMARK"     , this.dsList.getColumn(i, "DS_REMARK"));
        				this.dsSave.setColumn(nrow, "ID_USER"       , this.AuthClient.ID_USER);
        				break;

        			default:

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
        };
        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnValidate = function() {
        	var validate = true;
        	if (validate && this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
         		this.ccfCD_CORP.form.CDTextBox.setFocus();
         		this.gfnAlert("법인을 입력하세요.");
         		return false;
         	}

        	if (validate && this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT"))) {
         		this.ccfCD_DEPT.form.CDTextBox.setFocus();
         		this.gfnAlert("부서를 입력하세요.");
         		return false;
         	}

        	if (validate && this.gfnIsNull(this.dsSearch.getColumn(0, "ID_SABUN"))) {
         		this.ccfID_SABUN.form.CDTextBox.setFocus();
         		this.gfnAlert("사번을 입력하세요.");
         		return false;
         	}

        	return true;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        	}
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if(svcID == "save") {
        		this.FormBtns.Select.click();
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfCD_DEPT") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        			this.gfnAlert("법인코드를 먼저 입력하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	}

        	if (id == "ccfID_SABUN") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP", "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE","%");
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(id == "ccfCD_CORP"){
        		if(arr.length > 0) {
        			this.dsSearch.setColumn(0,"CD_DEPT","");
        			this.dsSearch.setColumn(0,"DS_DEPT","");
        			this.dsSearch.setColumn(0,"ID_SABUN","");
        			this.dsSearch.setColumn(0,"DS_HNAME","");
        			this.dsSearch.setColumn(0,"ID_PERSON","");
        		}
        	}else if(id == "ccfCD_DEPT" ){
        		if(arr.length > 0) {
        			this.dsSearch.setColumn(0,"ID_SABUN","");
        			this.dsSearch.setColumn(0,"DS_HNAME","");
        			this.dsSearch.setColumn(0,"ID_PERSON","");
        		}
        	}else if(id == "ccfID_SABUN") {
        		if(arr.length > 0) {
        			this.dsSearch.setColumn(0,"CD_CORP",arr[0]["CD_CORP"]);
        			this.dsSearch.setColumn(0,"DS_CORP",arr[0]["DS_CORP"]);
        			this.dsSearch.setColumn(0,"CD_DEPT",arr[0]["CD_DEPT"]);
        			this.dsSearch.setColumn(0,"DS_DEPT",arr[0]["DS_DEPT"]);
        			this.dsSearch.setColumn(0,"ID_SABUN",arr[0]["ID_SABUN"]);
        			this.dsSearch.setColumn(0,"DS_HNAME",arr[0]["DS_HNAME"]);
        			this.dsSearch.setColumn(0,"ID_PERSON",arr[0]["ID_PERSON"]);
        		}
        	}
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	trace('grid_코드파인드_식별id: ' + id);

        	switch(id) {
        		case "ID_SABUN":     // DAX_CFBASEINFO
        			if(this.dsList.getColumn(this.dsList.rowposition, "TY_GUBUN") == "G") {	//계속근무
        				dsUserParam.setColumn(nrow, "CD_CORP", "%");
        				dsUserParam.setColumn(nrow, "GR_SEARCH",this.FormInfo.GR_SEARCH);
        				dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        				dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        				dsUserParam.setColumn(nrow, "YN_CORP", "N");
        			}else if(this.dsList.getColumn(this.dsList.rowposition, "TY_GUBUN") == "T"){
        				dsUserParam.setColumn(nrow, "CD_CORP", "%");
        				dsUserParam.setColumn(nrow, "GR_SEARCH",this.FormInfo.GR_SEARCH);
        				dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        				dsUserParam.setColumn(nrow, "TY_RETIRE", "04");
        				dsUserParam.setColumn(nrow, "YN_CORP", "N");
        			}else{
        				dsUserParam.setColumn(nrow, "CD_CORP", "%");
        				dsUserParam.setColumn(nrow, "GR_SEARCH",this.FormInfo.GR_SEARCH);
        				dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        				dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        				dsUserParam.setColumn(nrow, "YN_CORP", "N");
        			}
        		break;

        		default:
        	}

        	return true;
        };

        // 셀 수정가능 여부
        this.fnGrid_EnterCell = function(obj, row, cell)
        {
        	var ynEnable = this.dsList.getColumn(0, "YN_ENABLE");
        	//YN_ENABLE = 'N' 인 경우, 입사일자 기준 TAP만  읽기전용으로 해주세요
        	if( ynEnable == "N" && this.divData.form.divDataMain.form.tabData.tabindex == 0){
        		return false;
        	}else{
        		return true;
        	}
        }

         /*
         *	그리드 변경시
         */
        this.fnGrid_AfterEdit = function(obj,e)
        {
        	if( e.newvalue != e.oldvalue ) this.gfnSetFormStatus(this, "U");
        };

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
        	if(this.bSelect && e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.divData_tabData_onchanged = function(obj,e)
        {
        	// 연차생성 방식( A:회계년도기준,B:입사일자기준)
        	if( obj.tabindex == 0 ){
        		this.dsSearch.setColumn(0,"TY_GUBUN", "B");
        		  this.dxGrid.setCellProperty( "head", this.dxGrid.getBindCellIndex("body","CNT_YEAR"), "text" ,"근속년수" );
        	} else {
        		this.dsSearch.setColumn(0,"TY_GUBUN", "A");
        		this.dxGrid.setCellProperty( "head", this.dxGrid.getBindCellIndex("body","CNT_YEAR"), "text" ,"근무년차" );
        	}
        	if ( !this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP")) && !this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT")) && !this.gfnIsNull(this.dsSearch.getColumn(0, "ID_SABUN"))  ) {
        		this.FormBtns.Select.click();
        };	}


        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };

        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_top(e.clienty);
        		this.divData.form.resetScroll();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.staCD_CORP.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staCD_DEPT.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataMain.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
        };
        this.loadIncludeScript("DAC_MGTVACATION_PAY_DETAIL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
