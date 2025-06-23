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
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAJPR_RTNG_GOAL_SEARCH_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAJPR_RTNG_GOAL_SEARCH_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YR_RTNG\" type=\"STRING\" size=\"256\"/><Column id=\"ID_RTNG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RTNG\" type=\"STRING\" size=\"256\"/><Column id=\"CD_RTNG_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RTNG_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RTNG_BEGN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RTNG_END\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RTNG_STD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_RTNG_ASBLNEXT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RTNG_ASBLNEXT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staID_RTNG","322","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("평가회차");
            obj.set_rtl("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_RTNG","414","10.0","350","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFRTNG_STD");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","66","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:-3",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","50%","0","23","100%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("url(\'theme://images/slt_WF_SplitterV.png\') no-repeat center center");
            obj.set_cursor("e-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:6","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100%","35",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_text("보직자");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:0",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:6","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","100%","35",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("조회대상자");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","sta02:0",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfID_RTNG.form.CDTextBox","value","dsSearch","ID_RTNG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfID_RTNG.form.DSTextBox","value","dsSearch","DS_RTNG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAJ_RTNG_GOAL_SEARCH.xfdl", function() {
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

        	//this.FormBtns.Select.click();

        	// 법인
        	this.dsSearch.setColumn(0, "CD_CORP",  this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP",  this.AuthClient.DS_CORP);
        	this.FormBtns.Del.set_enable(false);
        };

        /************************************************************************
         * 버튼 설정
         ************************************************************************/
        this.fnSetButton = function() {
        	// 서브 버튼 사용
        	this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter); // divSplitter sync
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnAddSub    = this.gfnFormButtonAdd("btnAddSub"   , "fnSetAddSub" , "조회자등록");		// 조회자 등록
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataRight.form.objGridSub;

        	// 검색영역
        	this.ccfCD_CORP   = this.divSearch.form.ccfCD_CORP;
        	this.ccfID_RTNG   = this.divSearch.form.ccfID_RTNG;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAJ_RTNG_GOAL_SEARCH");
        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);
        	this.dxGrid.BeforeUserDataSetParam = "fnGridSub_BeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DA", "DAJ_RTNG_GOAL_SEARCH_B");
        	this.dxGridSub.BeforeUserDataSetParam = "fnGridSub_BeforeUserDataSetParam";
        	//this.dxGridSub.AfterEdit = "fnGridSub_AfterEdit";
            this.dsListSub.addEventHandler("onvaluechanged", this.dsList_onvaluechanged, this);

        		// 검색영역
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	// 법인
        	this.ccfCD_CORP.AfterCDTextChanged     = "fnAfterCDTextChanged";
        	this.ccfID_RTNG.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	// 평가기준
        	this.ccfID_RTNG.AfterCDTextChanged     = "fnAfterCDTextChanged";

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("ID_RTNG", "string");
        	this.dsSelect.addColumn("ID_ITVWPRSN", "string");
        	this.dsSelect.addColumn("TY_PTCP", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("ID_RTNG", "string");
        	this.dsSave.addColumn("ID_ITVWPRSN", "string");
        	this.dsSave.addColumn("SEQ_BGVDPRSN", "int");
        	this.dsSave.addColumn("ID_BGVDPRSN", "string");
        	this.dsSave.addColumn("ID_USER", "string");

        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	this.gfnSetFormSubStatus(this);

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "ID_RTNG", this.dsSearch.getColumn(0, "ID_RTNG"));
        	this.dsSelect.setColumn(0, "ID_ITVWPRSN", "");
        	this.dsSelect.setColumn(0, "TY_PTCP", "R"); //면담자


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
        	var nrow = this.gfnGridAdd(this.dxGrid);

        	this.dsList.set_enableevent(false);
        	this.dsList.setColumn(nrow , "ID_ITVWPRSN" , this.dsList.getColumn(this.dsList.rowposition,"ID_ITVWPRSN"));
        	this.dsList.setColumn(nrow , "ID_ITVWPRSN" , this.dsList.getColumn(this.dsList.rowposition,"ID_ITVWPRSN"));
        	this.dsList.set_enableevent(true);

        	this.dsListSub.clearData();
        	this.fnAddSub();
        	this.FormBtns.Del.set_enable(true);
        }


        this.fnAddSub = function() {

        	var nrow = this.gfnGridAdd(this.dxGridSub);

        	this.dsListSub.set_enableevent(false);
        	this.dsListSub.setColumn(nrow , "ID_ITVWPRSN" , this.dsList.getColumn(this.dsList.rowposition,"ID_ITVWPRSN"));
        	this.dsListSub.set_enableevent(true);
        	//trace("flag" + this.dsList.getColumn(this.dsList.rowposition, this.ucFlag));
        	if (this.dsList.getColumn(this.dsList.rowposition, this.ucFlag) == "I") {this.FormBtns.Del.set_enable(true);}
        	else {this.FormBtns.Del.set_enable(false);}


        }
        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);

        	this.gfnGridDel(this.dxGridSub);
        	this.dsListSub.clearData();
        	this.FormBtns.Del.set_enable(false);
        }

        this.fnDelSub = function() {
        	this.gfnGridDel(this.dxGridSub);
        	this.FormBtns.Del.set_enable(false);
        }


        /*
         *	저장 버튼
         */


        this.fnSaveSub = function() {
        	if (!this.gfnGridValidate(this.dxGridSub)) return;

        	this.dxGridSub.updateToDataset();

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		if (flag =="I" || flag == "D" )
        		{
        			var nrow = this.dsSave.addRow();
        			this.dsSave.setColumn(nrow, "TY_WRK", flag);
        			this.dsSave.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        			this.dsSave.setColumn(nrow, "ID_RTNG", this.dsSearch.getColumn(0, "ID_RTNG"));
        			this.dsSave.setColumn(nrow, "ID_ITVWPRSN", this.dsList.getColumn(this.dsList.rowposition, "ID_ITVWPRSN"));
        			this.dsSave.setColumn(nrow, "SEQ_BGVDPRSN", this.dsListSub.getColumn(i, "SEQ_BGVDPRSN"));
        			this.dsSave.setColumn(nrow, "ID_BGVDPRSN", this.dsListSub.getColumn(i, "ID_BGVDPRSN"));
        			this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

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
        	this.gfnExcelExport(this.dxGridSub);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }

        /************************************************************************
         * 서브 버튼 이벤트
         ************************************************************************/
        this.fnSelectSub = function() {
        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return false;
        	//trace(" fnSelectSub=>" + nRow);

        	var nRowType = this.dsList.getRowType(this.dsList.rowposition);
        	if(nRowType == Dataset.ROWTYPE_INSERT){
        		this.dsListSub.clearData();
        		return false;
        	}
        	this.dsListSub.clearData();

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "ID_RTNG", this.dsSearch.getColumn(0, "ID_RTNG"));
        	this.dsSelect.setColumn(0, "ID_ITVWPRSN", this.dsList.getColumn(this.dsList.rowposition, "ID_ITVWPRSN"));
        	this.dsSelect.setColumn(0, "TY_PTCP", "B"); //피평가자

        	var strSvcId    = "detail";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsListSub=select0";
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
        		this.FormBtns.Del.set_enable(false);
        	}
        	else if (svcID == "detail") {
        		this.gfnGridAfterSelect(this.dxGridSub);
        		this.FormBtns.Del.set_enable(false);
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.fnSelectSub(this.dsList.rowposition);
        			this.FormBtns.Select.click();
        			this.FormBtns.Del.set_enable(false);
        			//this.FormBtns.SubSelect.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}

        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER"  , this.AuthClient.ID_USER);
        	} else if (id == "ccfID_RTNG") {
        		dsUserParam.setColumn(nrow, "CD_CORP"     , this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "YR_RTNG"     , "");
        		dsUserParam.setColumn(nrow, "CD_RTNG_TYPE", "JA1");
        		dsUserParam.setColumn(nrow, "CD_ROLE"     , this.AuthClient.CD_ROLE);
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if (codeFindData[0] == undefined) {
        		return;
        	}

        	if (id == "ccfID_RTNG") {
        		this.dsSearch.setColumn(0, "TY_PTCP", codeFindData[0]["TY_PTCP"]);
        		this.dsSearch.setColumn(0, "CD_RTNG_ASBLNEXT", codeFindData[0]["CD_RTNG_ASBLNEXT"]);
        		this.dsSearch.setColumn(0, "DS_RTNG_ASBLNEXT", codeFindData[0]["DS_RTNG_ASBLNEXT"]);
        		this.dsSearch.setColumn(0, "CNTN_RTNG_ID", codeFindData[0]["CNTN_RTNG_ID"]);
        		//this.FormBtns.Select.click();
        	}
        }

        /*
         *	서브 그리드 코드파인드
         */
        this.fnGridSub_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	if (id == "DAX_CFRTNG_BGRN") {

         		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "ID_RTNG", this.dsSearch.getColumn(0, "ID_RTNG"));
         	}
        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
            var arrData = codeFindData;
        	if(id == "DAX_CFRTNG_BGRN") {
        		this.dsListSub.set_enableevent(false);
        		this.dsListSub.setColumn(0, "ID_ITVWPRSN", arrData[0]["ID_SABUN"]);
        		this.dsListSub.set_enableevent(true);
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

         this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		this.FormBtns.SubSelect.click();
        		//this.fnSelectSub(e.row);
        		obj.oldrow = -1;
        	}
        };

        this.dsList_canrowposchange = function(obj,e) {
        	var can_rowchange = true;
        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		if (flag == "I" || flag == "U" || flag == "D") {
        			can_rowchange = false;
        			break;
        		}
        	}
        	if(!can_rowchange) {
        		this._row = e.newrow;
        		this.gfnConfirm("변경된 데이터가 있습니다.\r\n계속 진행하시겠습니까?", "dsList_canrowposchange_callback");
        	}
        	return can_rowchange;
        }

        this.dsList_canrowposchange_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsList.set_enableevent(false);
        		this.dsList.set_rowposition(this._row);
        		this.dsList.set_enableevent(true);
        	}
        }

        this.dsList_onvaluechanged = function(obj,e)
        {

        	//trace(" dsListSub_onvaluechanged=>" + this.gfnDsIsUpdated(obj));

        	if(this.gfnDsIsUpdated(obj)){
        		var rowType = obj.getRowType(e.row);
        		this.gfnSetFormStatus(this, (rowType == 2 ? "I" : "U"));
        	}

        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        	}
        }

        this.divData_ondragmove = function(obj,e)
        {
        	this.divData.form.divSplitter.set_left(e.clientx);
        	this.divData.form.resetScroll();
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	return true;
        };

        // 조회자 muity 추가
        this.fnSetAddSub = function(){

        	var param = {}

        	param.CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");
        	param.DS_CORP = this.dsSearch.getColumn(0, "DS_CORP");
        	param.YR_RTNG = this.dsSearch.getColumn(0, "YR_RTNG");
        	param.ID_RTNG = this.dsSearch.getColumn(0, "ID_RTNG");
        	param.DS_RTNG = this.dsSearch.getColumn(0, "DS_RTNG");
        	param.CD_RTNG_TYPE = this.dsSearch.getColumn(0, "CD_RTNG_TYPE");
        	param.DS_RTNG_TYPE = this.dsSearch.getColumn(0, "DS_RTNG_TYPE");
        	param.DT_RTNG_BEGN = this.dsSearch.getColumn(0, "DT_RTNG_BEGN");
        	param.DT_RTNG_END = this.dsSearch.getColumn(0, "DT_RTNG_END");
        	param.DT_RTNG_STD = this.dsSearch.getColumn(0, "DT_RTNG_STD");
        	param.CD_RTNG_ASBLNEXT = this.dsSearch.getColumn(0, "CD_RTNG_ASBLNEXT");
        	param.DS_RTNG_ASBLNEXT = this.dsSearch.getColumn(0, "DS_RTNG_ASBLNEXT");

        	trace("ID_RTNG =>" + param.ID_RTNG);
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAJ_RTNG_GOAL_SEARCH_DLG", "fnAddSub_callback", param, 700, 600);

        }

        this.fnAddSub_callback = function (svcId, value)
        {

            if (value)
            {
        		var json = JSON.parse(value);
        		if (json.length > 0) {
        			var nCount = 0 ;
        			//this.dsListSub.set_enableevent(false);
        			for (var i=0; i < json.length; i++) {
        				if (this.dsListSub.getCaseCount("ID_BGVDPRSN =='"+ json[i].ID_CPNYDUTY + "'") == 0)	{
        					var nrow = this.dsListSub.addRow();
        					this.dsListSub.setColumn(nrow, this.ucFlag, "I") ;
        					this.dsListSub.setColumn(nrow, "ID_ITVWPRSN"	, this.dsList.getColumn(this.dsList.rowposition, "ID_ITVWPRSN"));
        					this.dsListSub.setColumn(nrow, "SEQ_BGVDPRSN"	, json[i].SEQ_BGVDPRSN);
        					this.dsListSub.setColumn(nrow, "ID_BGVDPRSN"	, json[i].ID_CPNYDUTY);
        					this.dsListSub.setColumn(nrow, "DS_HNAME"		, json[i].DS_HNAME);
        					this.dsListSub.setColumn(nrow, "DS_DEPT"		, json[i].DS_DEPT);
        					this.dsListSub.setColumn(nrow, "DS_DUTY"		, json[i].DS_DUTY);
        					this.dsListSub.setColumn(nrow, "CD_POSITION"	, json[i].CD_POSITION);
        					this.dsListSub.setColumn(nrow, "DS_POSITION"	, json[i].DS_POSITION);
        					this.dsListSub.setColumn(nrow, "CD_OCCUPATION"	, json[i].CD_OCCUPATION);
        					this.dsListSub.setColumn(nrow, "DT_JOIN"		, json[i].DT_JOIN);
        					nCount = nCount +1;
        					this.gfnSetFormSubStatus(this, "I");
        				}
        			}
        			//this.dsListSub.set_enableevent(true);
        			//this.gfnAlert(nCount.toString() + "건의 자료가 추가되었습니다.");
        		}
            }
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		if( e.columnid == "YR_RTNG" ){
        			this.dsSearch.setColumn(0,"ID_RTNG","");
        			this.dsSearch.setColumn(0,"DS_RTNG","");
        			this.dsSearch.setColumn(0,"CD_RTNG_TYPE","");
        			this.dsSearch.setColumn(0,"DS_RTNG_TYPE","");
        			this.dsSearch.setColumn(0,"DT_RTNG_BEGN","");
        			this.dsSearch.setColumn(0,"DT_RTNG_END","");
        			this.dsSearch.setColumn(0,"DT_RTNG_STD","");
        			this.dsSearch.setColumn(0,"CD_RTNG_ASBLNEXT","");
        			this.dsSearch.setColumn(0,"DS_RTNG_ASBLNEXT","");
        		}
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);

        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAJ_RTNG_GOAL_SEARCH.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
