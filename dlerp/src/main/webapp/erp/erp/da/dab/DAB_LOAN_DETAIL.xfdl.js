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
            this.set_titletext("대출신청관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DABPR_LOAN_DETAIL_SELECT</Col></Row><Row><Col id=\"TARGET\">selectSub</Col><Col id=\"SP\">DABPR_LOANREPAYMENT_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TY_END\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BASE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","10.0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staDT_BASE","1","10","118","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_BASE","99","10","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","210","10","72","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","524","10","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","594","10","222","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("CDTextWidth").set("90");
            obj.getSetter("FitToContents").set("true");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_END","850","15","117","15",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("상환완료포함");
            obj.set_value("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","277","10","240","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.getSetter("FitToContents").set("true");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","50%","100.00%","5",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_Splitter");
            obj.set_cursor("ns-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","0",null,"22","0",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("상환정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","sta02:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter:5",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("대출정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctclDT_BASE","value","dsSearch","DT_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.chkYN_END","value","dsSearch","TY_END");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_LOAN_DETAIL.xfdl", function() {
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

        	this.dsSearch.clearData();
        	this.dsSearch.addRow();

        	this.dsSearch.setColumn(0,"CD_CORP",this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0,"DS_CORP",this.AuthClient.DS_CORP);
        	this.dsSearch.setColumn(0, "DT_BASE", this.gfnGetDate());
        	this.chkYN_END.set_value(true);

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
        	this.dxGrid = this.divData.form.divDataTop.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataBottom.form.objGridSub;

        	this.ccfCD_CORP 	= this.divSearch.form.ccfCD_CORP;
        	this.ccfID_SABUN    = this.divSearch.form.ccfID_SABUN;
        	this.chkYN_END      = this.divSearch.form.chkYN_END;
        	this.ctclDT_BASE    = this.divSearch.form.ctclDT_BASE;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged     = "fnAfterCDTextChanged";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged     = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAB_LOAN_DETAIL");
        	//this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DA", "DAB_LOANREPAYMENT");

        	//검색조건 변경 이벤트
        	this.bSelect= false;
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);

        	this.bSave = true;
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP"  , "STRING");
        	this.dsSelect.addColumn("ID_SABUN" , "STRING");
        	this.dsSelect.addColumn("TY_END"   , "STRING");
        	this.dsSelect.addColumn("DT_BASE"   , "STRING");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("NO_LOAN" , "STRING");
        	this.dsSelectSub.addColumn("CD_CORP"  , "STRING");
        	this.dsSelectSub.addColumn("DT_BASE"   , "STRING");
        	this.dsSelectSub.addColumn("YN_SALARY"   , "STRING");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("NO_LOANREQUEST", "INT");
        	this.dsSave.addColumn("TY_GUBUN", "string");
        	this.dsSave.addColumn("CD_LOAN", "string");
        	this.dsSave.addColumn("ST_APRV", "string");
        	this.dsSave.addColumn("DT_APRV", "string");
        	this.dsSave.addColumn("DT_LOAN", "string");
        	this.dsSave.addColumn("YN_EXCUTE", "string");
        	this.dsSave.addColumn("DS_RETURN", "string");
        	this.dsSave.addColumn("NO_LOANSEQ", "int");
        	this.dsSave.addColumn("NO_LOAN", "INT");
        	this.dsSave.addColumn("DT_LOST", "string");
        	this.dsSave.addColumn("ID_USER", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.clearData();
            this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP"  , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "ID_SABUN" , this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "TY_END" , (this.chkYN_END.value) ? "" : "N" );
        	this.dsSelect.setColumn(0, "DT_BASE" , this.dsSearch.getColumn(0, "DT_BASE"));

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
        	// 그리드 필수항목 체크

            if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		trace(" flag=>" + flag );
        		if( flag == "U" ) {
        			var nrow = this.dsSave.addRow();
        			this.dsSave.setColumn(nrow, "CD_CORP"  , this.dsSearch.getColumn(0, "CD_CORP"));
        			this.dsSave.setColumn(nrow, "ID_SABUN" , this.dsList.getColumn(i, "ID_SABUN"));
        			this.dsSave.setColumn(nrow, "NO_LOANREQUEST"  , this.dsList.getColumn(i, "NO_LOANREQUEST"));
        			this.dsSave.setColumn(nrow, "TY_GUBUN"   , this.dsList.getColumn(i, "TY_GUBUN"));
        			this.dsSave.setColumn(nrow, "CD_LOAN"   , this.dsList.getColumn(i, "CD_LOAN"));
        			this.dsSave.setColumn(nrow, "ST_APRV"   , this.dsList.getColumn(i, "ST_APRV") );
        			this.dsSave.setColumn(nrow, "DT_APRV"   , this.dsList.getColumn(i, "DT_APRV"));
        			this.dsSave.setColumn(nrow, "DT_LOAN"   , this.dsList.getColumn(i, "DT_LOAN"));
        			this.dsSave.setColumn(nrow, "NO_LOANSEQ"   , this.dsList.getColumn(i, "NO_LOANSEQ"));
        			this.dsSave.setColumn(nrow, "DS_RETURN"   , this.dsList.getColumn(i, "DS_RETURN"));
        			this.dsSave.setColumn(nrow, "NO_LOAN"  , this.dsList.getColumn(i, "NO_LOAN"));
        			this.dsSave.setColumn(nrow, "DT_LOST"   , this.dsList.getColumn(i, "DT_LOST"));
        			this.dsSave.setColumn(nrow, "ID_USER"   , this.AuthClient.ID_SABUN);
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
        	var arrGrid = [this.dxGrid, this.dxGridSub];
        	var arrSheetName = ["대출정보", "상환정보"];
        	var sFileName = "사내대출현황";

        	// 1 (시트명: sheet1,sheet2.. 사용, 파일명: 화면명_날짜)
        	this.gfnExcelExportMulti(arrGrid, arrSheetName, sFileName);
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
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	} else if (svcID == "selectSub") {
        		this.gfnGridAfterSelect(this.dxGridSub);
        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}

        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		if (!this.gfnIsNull(this.dsList.getColumn(e.row, "NO_LOAN")))
        		{
        			this.fnSelectSub(e.row);
        		} else {
        			this.dsListSub.clearData();
        		}
        		obj.oldrow = -1;
        		//this.fnButtonCheck();
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
        	trace("this.bSelect = " + this.bSelect)
        	if(e.oldvalue != e.newvalue) {
        		if( e.columnid == "CD_CORP" ) {
        			this.dsSearch.setColumn(0,"ID_SABUN","");
        			this.dsSearch.setColumn(0,"DS_HNAME","");
        		}

        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);

        	}

        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfID_SABUN") {
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "CD_DEPT"  , "");
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP"  , "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "");
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id,codeFindData) {
           	var arr = codeFindData;
        	if(id == "ccfID_SABUN") {
        		if(arr.length > 0) {
        			this.dsSearch.setColumn(0,"CD_CORP",arr[0]["CD_CORP"]);
        			this.dsSearch.setColumn(0,"DS_CORP",arr[0]["DS_CORP"]);
        			this.dsSearch.setColumn(0,"ID_SABUN",arr[0]["ID_SABUN"]);
        			this.dsSearch.setColumn(0,"DS_HNAME",arr[0]["DS_HNAME"]);

        		}
        	}

        };
        /************************************************************************
         * 서브 버튼 이벤트
         ************************************************************************/
        this.fnSelectSub = function(nRow) {
        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return false;

        	this.dsListSub.clearData();

        	this.gfnGridBeforeSelect(this.dxGridSub);

            this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();
        	this.dsSelectSub.setColumn(0, "NO_LOAN"  , this.dsList.getColumn(nRow, "NO_LOAN"));
        	this.dsSelectSub.setColumn(0, "CD_CORP"  , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelectSub.setColumn(0, "DT_BASE"  , this.dsSearch.getColumn(0, "DT_BASE"));
        	this.dsSelectSub.setColumn(0, "YN_SALARY"  , "");

            var strSvcId    = "selectSub";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectSub=dsSelectSub";
        	var outData     = "dsListSub=selectSub0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        };


        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
        };
        this.loadIncludeScript("DAB_LOAN_DETAIL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
