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


            obj = new Dataset("dsListSub01", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub02", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAJPR_RTNG_STD_SELECT</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DAJPR_RTNG_CTRN_SELECT</Col></Row><Row><Col id=\"TARGET\">save1</Col><Col id=\"SP\">DAJPR_RTNG_CTRN_SAVE</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DAJPR_RTNG_ITEM_SELECT</Col></Row><Row><Col id=\"TARGET\">save2</Col><Col id=\"SP\">DAJPR_RTNG_ITEM_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YR_RTNG\" type=\"STRING\" size=\"256\"/><Column id=\"ID_RTNG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RTNG\" type=\"STRING\" size=\"256\"/><Column id=\"CD_RTNG_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RTNG_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RTNG_BEGN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RTNG_END\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RTNG_STD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_RTNG_ASBLNEXT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RTNG_ASBLNEXT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"45","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYR_RTNG","ccfCD_CORP:0.0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfYR_RTNG","staYR_RTNG:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_RTNG","ccfYR_RTNG:0.0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("평가회차");
            obj.set_rtl("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_RTNG","staDS_RTNG:0.0","10.0","350","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFRTNG_STD");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","35%","100%","5",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("#c9c9c9");
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

            obj = new Tab("tabData","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("38");
            obj.set_tabindex("0");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Tabpage("tab01",this.divData.form.divDataBottom.form.tabData);
            obj.set_text("평가척도");
            this.divData.form.divDataBottom.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGridSub01","0","5",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form.tabData.tab01.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataBottom.form.tabData.tab01.addChild(obj.name, obj);

            obj = new Tabpage("tab02",this.divData.form.divDataBottom.form.tabData);
            obj.set_text("평가항목");
            this.divData.form.divDataBottom.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGridSub02","0","5",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form.tabData.tab02.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataBottom.form.tabData.tab02.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfYR_RTNG.form.TextBox","value","dsSearch","YR_RTNG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfID_RTNG.form.CDTextBox","value","dsSearch","ID_RTNG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfID_RTNG.form.DSTextBox","value","dsSearch","DS_RTNG");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DAJ_RTNG_CTRN.xfdl", function() {
        this.objApp = this.gfnGetApplication();

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
        	this.fnSetCombo();
        	this.fnInit();
        }

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

        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	// 그리드영역
        	this.dxGrid      = this.divData.form.divDataTop.form.objGrid;
        	this.dxGridSub01 = this.divData.form.divDataBottom.form.tabData.tab01.form.objGridSub01;
        	this.dxGridSub02 = this.divData.form.divDataBottom.form.tabData.tab02.form.objGridSub02;

        	// 검색영역
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfYR_RTNG = this.divSearch.form.ccfYR_RTNG;
        	this.ccfID_RTNG = this.divSearch.form.ccfID_RTNG;
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAJ_RTNG_STD_R");
        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGridRowCellChanged, this);

        	// 평가척도
        	this.gfnGridInit(this.dxGridSub01, this.dsListSub01, "DA", "DAJ_RTNG_CTRN");
        	this.dxGridSub01.BeforeUserDataSetParam = "fnGridBeforeUserDataSetParam";
        	this.dxGridSub01.AfterCDTextChanged     = "fnGridAfterCDTextChanged";

        	// 평가항목
        	this.gfnGridInit(this.dxGridSub02, this.dsListSub02, "DA", "DAJ_RTNG_ITEM");
        	this.dxGridSub02.BeforeUserDataSetParam = "fnGridBeforeUserDataSetParam";
        	this.dxGridSub02.AfterCDTextChanged     = "fnGridAfterCDTextChanged";
        	this.dxGridSub02.setCellProperty("body", this.dxGridSub02.getBindCellIndex("body", "DS_ITEM_DFNT"), "displaytype", "decoratetext");

        	// 검색영역
        	this.ccfCD_CORP.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";	// 법인
        	this.ccfCD_CORP.AfterCDTextChanged      = "fnAfterCDTextChanged";
        	this.ccfID_RTNG.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";	// 법인
        	this.ccfID_RTNG.AfterCDTextChanged      = "fnAfterCDTextChanged";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// 평가기준 조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YR_RTNG", "string");
        	this.dsSelect.addColumn("ID_RTNG", "string");

        	// 평가기준 척도 조회
        	this.dsSelect1 = new Dataset();
        	this.dsSelect1.addColumn("CD_CORP", "string");
        	this.dsSelect1.addColumn("ID_RTNG", "string");

        	// 평가기준 척도 저장
        	this.dsSave1 = new Dataset();
        	this.dsSave1.addColumn("TY_WRK", "string");
        	this.dsSave1.addColumn("CD_CORP", "string");
        	this.dsSave1.addColumn("ID_RTNG", "string");
        	this.dsSave1.addColumn("CD_CTRN", "string");
        	this.dsSave1.addColumn("DS_CTRN", "string");
        	this.dsSave1.addColumn("PONT_GRD", "int");
        	this.dsSave1.addColumn("RMK", "string");
        	this.dsSave1.addColumn("ID_USER", "string");

        	// 평가기준 항목 조회
        	this.dsSelect2 = new Dataset();
        	this.dsSelect2.addColumn("CD_CORP", "string");
        	this.dsSelect2.addColumn("ID_RTNG", "string");

        	// 평가기준 항목 저장
        	this.dsSave2 = new Dataset();
        	this.dsSave2.addColumn("TY_WRK", "string");
        	this.dsSave2.addColumn("CD_CORP", "string");
        	this.dsSave2.addColumn("ID_RTNG", "string");
        	this.dsSave2.addColumn("SEQ_ITEM", "int");
        	this.dsSave2.addColumn("CD_RTNG_TYPE", "string");
        	this.dsSave2.addColumn("CD_ITEM_GR", "string");
        	this.dsSave2.addColumn("DS_ITEM_GR", "string");
        	this.dsSave2.addColumn("CD_ITEM", "string");
        	this.dsSave2.addColumn("DS_ITEM", "string");
        	this.dsSave2.addColumn("DS_ITEM_DFNT", "string");
        	this.dsSave2.addColumn("WGTV_RTNG", "bigdecimal");
        	this.dsSave2.addColumn("ODER", "int");
        	this.dsSave2.addColumn("RMK", "string");
        	this.dsSave2.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 콤보 데이터 조회 및 설정
         ************************************************************************/
        this.fnSetCombo = function() {

        }

        /************************************************************************
         * 화면 및 검색영역 초기화
         ************************************************************************/
        this.fnInit = function() {
        	// 법인
        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);

        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "YR_RTNG", today.substr(0, 4));
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
        /*
         * 조회 버튼
         */
        // 평가기준
        this.fnSelect = function() {
        	if (!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	// 평가기준
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "YR_RTNG", this.dsSearch.getColumn(0, "YR_RTNG"));
        	this.dsSelect.setColumn(0, "ID_RTNG", this.dsSearch.getColumn(0, "ID_RTNG"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect"
        	var outData     = "dsList=select0"
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        }

        // 평가척도
        this.fnSelectSub01 = function() {
        	if (this.dsList.getColumn(this.dsList.rowposition, "CD_CORP") == undefined ||
        	    this.dsList.getColumn(this.dsList.rowposition, "CD_CORP") == "") {
        		return;
        	}

        	var tabIdx = this.divData.form.divDataBottom.form.tabData.tabindex;
        	if (tabIdx != 0) {
        		return;
        	}

        	this.gfnGridBeforeSelect(this.dxGridSub01);

        	// 평가기준
        	this.dsSelect1.clearData();
        	this.dsSelect1.addRow();
        	this.dsSelect1.setColumn(0, "CD_CORP", this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));
        	this.dsSelect1.setColumn(0, "ID_RTNG", this.dsList.getColumn(this.dsList.rowposition, "ID_RTNG"));

        	var strSvcId    = "select1";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select1=dsSelect1"
        	var outData     = "dsListSub01=select10"
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        }

        // 평가항목
        this.fnSelectSub02 = function() {
        	if (this.dsList.getColumn(this.dsList.rowposition, "CD_CORP") == undefined ||
        	    this.dsList.getColumn(this.dsList.rowposition, "CD_CORP") == "") {
        		return;
        	}

        	var tabIdx = this.divData.form.divDataBottom.form.tabData.tabindex;
        	if (tabIdx != 1) {
        		return;
        	}

        	this.gfnGridBeforeSelect(this.dxGridSub02);

        	// 평가기준
        	this.dsSelect2.clearData();
        	this.dsSelect2.addRow();
        	this.dsSelect2.setColumn(0, "CD_CORP", this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));
        	this.dsSelect2.setColumn(0, "ID_RTNG", this.dsList.getColumn(this.dsList.rowposition, "ID_RTNG"));

        	var strSvcId    = "select2";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select2=dsSelect2"
        	var outData     = "dsListSub02=select20"
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var tabIdx = this.divData.form.divDataBottom.form.tabData.tabindex;
        	switch (tabIdx) {
        	// 평가척도
        	case 0:
        		var nrow = this.gfnGridAdd(this.dxGridSub01);
        		this.dsListSub01.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsListSub01.setColumn(nrow, "DS_CORP", this.dsSearch.getColumn(0, "DS_CORP"));
        		this.dsListSub01.setColumn(nrow, "ID_RTNG", this.dsList.getColumn(this.dsList.rowposition, "ID_RTNG"));
        		this.FormBtns.Save.set_enable(true);
        		break;

        	// 평가항목
        	case 1:
        		var nrow = this.gfnGridAdd(this.dxGridSub02);
        		this.dsListSub02.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsListSub02.setColumn(nrow, "DS_CORP", this.dsSearch.getColumn(0, "DS_CORP"));
        		this.dsListSub02.setColumn(nrow, "ID_RTNG", this.dsList.getColumn(this.dsList.rowposition, "ID_RTNG"));
        		this.dsListSub02.setColumn(nrow, "CD_RTNG_TYPE", this.dsList.getColumn(this.dsList.rowposition, "CD_RTNG_TYPE"));
        		this.dsListSub02.setColumn(nrow, "DS_RTNG_TYPE", this.dsList.getColumn(this.dsList.rowposition, "DS_RTNG_TYPE"));
        		this.SetGridSub02Height();
        		break;
        	}
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	var tabIdx = this.divData.form.divDataBottom.form.tabData.tabindex;
        	switch (tabIdx) {
        	// 평가척도
        	case 0:
        		this.gfnGridDel(this.dxGridSub01);
        		break;

        	// 평가항목
        	case 1:
        		this.gfnGridDel(this.dxGridSub02);
        		break;
        	}
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	var tabIdx = this.divData.form.divDataBottom.form.tabData.tabindex;
        	switch (tabIdx) {
        	// 평가척도
        	case 0:
        		this.fnSaveSub01();
        		break;

        	// 평가항목
        	case 1:
        		this.fnSaveSub02();
        		break;
        	}
        }

        this.fnSaveSub01 = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGridSub01)) return;

        	this.dxGridSub01.updateToDataset();
        	this.dsSave1.clearData();
        	for (var i = 0; i < this.dsListSub01.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub01, i);
        		switch(flag) {
        		case "I":
        		case "U":
        		case "D":
        			var nrow = this.dsSave1.addRow();
        			this.dsSave1.setColumn(nrow, "TY_WRK"  , flag);
        			this.dsSave1.setColumn(nrow, "CD_CORP" , this.dsListSub01.getColumn(i, "CD_CORP"));
        			this.dsSave1.setColumn(nrow, "ID_RTNG" , this.dsListSub01.getColumn(i, "ID_RTNG"));
        			this.dsSave1.setColumn(nrow, "CD_CTRN" , this.dsListSub01.getColumn(i, "CD_CTRN"));
        			this.dsSave1.setColumn(nrow, "DS_CTRN" , this.dsListSub01.getColumn(i, "DS_CTRN"));
        			this.dsSave1.setColumn(nrow, "PONT_GRD", this.dsListSub01.getColumn(i, "PONT_GRD"));
        			this.dsSave1.setColumn(nrow, "RMK"     , this.dsListSub01.getColumn(i, "RMK"));
        			this.dsSave1.setColumn(nrow, "ID_USER" , this.AuthClient.ID_USER);
        			break;
        		}
        	}

        	if (this.dsSave1.rowcount == 0) return;

        	var strSvcId    = "save1";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save1=dsSave1";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        }

        this.fnSaveSub02 = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGridSub02)) return;

        	this.dxGridSub02.updateToDataset();
        	this.dsSave2.clearData();
        	for (var i = 0; i < this.dsListSub02.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub02, i);
        		switch(flag) {
        		case "I":
        		case "U":
        		case "D":
        			var nrow = this.dsSave2.addRow();
        			this.dsSave2.setColumn(nrow, "TY_WRK"      , flag);
        			this.dsSave2.setColumn(nrow, "CD_CORP"     , this.dsListSub02.getColumn(i, "CD_CORP"));
        			this.dsSave2.setColumn(nrow, "ID_RTNG"     , this.dsListSub02.getColumn(i, "ID_RTNG"));
        			this.dsSave2.setColumn(nrow, "SEQ_ITEM"    , this.dsListSub02.getColumn(i, "SEQ_ITEM"));
        			this.dsSave2.setColumn(nrow, "CD_RTNG_TYPE", this.dsListSub02.getColumn(i, "CD_RTNG_TYPE"));
        			this.dsSave2.setColumn(nrow, "CD_ITEM_GR"  , this.dsListSub02.getColumn(i, "CD_ITEM_GR"));
        			this.dsSave2.setColumn(nrow, "DS_ITEM_GR"  , this.dsListSub02.getColumn(i, "DS_ITEM_GR"));
        			this.dsSave2.setColumn(nrow, "CD_ITEM"     , this.dsListSub02.getColumn(i, "CD_ITEM"));
        			this.dsSave2.setColumn(nrow, "DS_ITEM"     , this.dsListSub02.getColumn(i, "DS_ITEM"));
        			this.dsSave2.setColumn(nrow, "DS_ITEM_DFNT", this.dsListSub02.getColumn(i, "DS_ITEM_DFNT"));
        			this.dsSave2.setColumn(nrow, "WGTV_RTNG"   , this.dsListSub02.getColumn(i, "WGTV_RTNG"));
        			this.dsSave2.setColumn(nrow, "ODER"        , this.dsListSub02.getColumn(i, "ODER"));
        			this.dsSave2.setColumn(nrow, "RMK"         , this.dsListSub02.getColumn(i, "RMK"));
        			this.dsSave2.setColumn(nrow, "ID_USER"     , this.AuthClient.ID_USER);
        			break;
        		}
        	}

        	if (this.dsSave2.rowcount == 0) return;

        	var strSvcId    = "save2";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save2=dsSave2";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {

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
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return;
        	}

        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	// 평가척도
        	else if (svcID == "select1") {
        		this.gfnGridAfterSelect(this.dxGridSub01);
        	} else if (svcID == "save1") {
        		this.FormBtns.Select.click();
        	}
        	// 평가항목
        	else if (svcID == "select2") {
        		this.gfnGridAfterSelect(this.dxGridSub02);
        		this.SetGridSub02Height();
        	} else if (svcID == "save2") {
        		this.FormBtns.Select.click();
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
        		dsUserParam.setColumn(nrow, "YR_RTNG"     , this.dsSearch.getColumn(0, "YR_RTNG"));
        		dsUserParam.setColumn(nrow, "CD_RTNG_TYPE", "JA");
        		dsUserParam.setColumn(nrow, "CD_ROLE"     , this.AuthClient.CD_ROLE);
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if (codeFindData[0] == undefined) {
        		return;
        	}

        	if (id == "ccfID_RTNG") {
        		this.dsSearch.setColumn(0, "CD_RTNG_TYPE"    , codeFindData[0]["CD_RTNG_TYPE"]);
        		this.dsSearch.setColumn(0, "DS_RTNG_TYPE"    , codeFindData[0]["DS_RTNG_TYPE"]);
        		this.dsSearch.setColumn(0, "DT_RTNG_BEGN"    , codeFindData[0]["DT_RTNG_BEGN"]);
        		this.dsSearch.setColumn(0, "DT_RTNG_END"     , codeFindData[0]["DT_RTNG_END"]);
        		this.dsSearch.setColumn(0, "DT_RTNG_STD"     , codeFindData[0]["DT_RTNG_STD"]);
        		this.dsSearch.setColumn(0, "CD_RTNG_ASBLNEXT", codeFindData[0]["CD_RTNG_ASBLNEXT"]);
        		this.dsSearch.setColumn(0, "DS_RTNG_ASBLNEXT", codeFindData[0]["DS_RTNG_ASBLNEXT"]);
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGridBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "DAX_CFRTNG_CTRN") {
        		var CD_PREFIX = "";
        		var CD_RTNG_TYPE = this.dsList.getColumn(this.dsList.rowposition, "CD_RTNG_TYPE");
        		console.log('CD_RTNG_TYPE', CD_RTNG_TYPE);
        		if (CD_RTNG_TYPE == "JA01") {			// 동료다면평가
        			CD_PREFIX = "JG";
        		} else if (CD_RTNG_TYPE == "JA02") {	// 리더십평가
        			CD_PREFIX = "JF";
        		}
        		dsUserParam.setColumn(nrow, "CD_PREFIX", CD_PREFIX);
        	} else if (id == "DAX_CFRTNG_ITEM_GR") {
        		var CD_PREFIX = "";
        		var CD_RTNG_TYPE = this.dsList.getColumn(this.dsList.rowposition, "CD_RTNG_TYPE");
        		if (CD_RTNG_TYPE == "JA01") {			// 동료다면평가
        			CD_PREFIX = "JD";
        		} else if (CD_RTNG_TYPE == "JA02") {	// 리더십평가
        			CD_PREFIX = "JB";
        		}
        		dsUserParam.setColumn(nrow, "CD_PREFIX", CD_PREFIX);
        	} else if (id == "DAX_CFRTNG_ITEM") {
        		if (this.dsListSub02.getColumn(this.dsListSub02.rowposition, "CD_ITEM_GR") == undefined ||
        		    this.dsListSub02.getColumn(this.dsListSub02.rowposition, "CD_ITEM_GR") == "") {
        			this.gfnAlert("역량을 먼저 선택하세요.");
        			return false;
        		}
        		var CD_PREFIX = "";
        		var CD_RTNG_TYPE = this.dsList.getColumn(this.dsList.rowposition, "CD_RTNG_TYPE");
        		if (CD_RTNG_TYPE == "JA01") {			// 동료다면평가
        			CD_PREFIX = "JE";
        		} else if (CD_RTNG_TYPE == "JA02") {	// 리더십평가
        			CD_PREFIX = "JC";
        		}
        		dsUserParam.setColumn(nrow, "CD_PREFIX", CD_PREFIX);
        		dsUserParam.setColumn(nrow, "CD_UPCODE", this.dsListSub02.getColumn(this.dsListSub02.rowposition, "CD_ITEM_GR"));
         	}

        	return true;
        }

        this.fnGridAfterCDTextChanged = function(id, codeFindData) {
        	if (id == "DAX_CFRTNG_ITEM") {
        		this.SetGridSub02Height();
        	}
        }

        this.fnGridRowCellChanged = function(obj, e) {
            if ((obj.oldrow > -1 && obj.oldrow == e.row) || (obj.oldrow == -1 && e.oldrow != e.row)) {
        		var tabIdx = this.divData.form.divDataBottom.form.tabData.tabindex;
        		switch (tabIdx) {
        		// 평가척도
        		case 0:
        			if (this.gfnDsIsUpdated(this.dsListSub02)) {
        				this.fnDsUpdateCallback = function(id, val) {
        					if (!val) {
        						return false;
        					} else {
        						this.fnSelectSub01();
        					}
        				}
        				this.gfnConfirm("저장되지 않은 정보가 있습니다.\n 계속하시겠습니까?", "fnDsUpdateCallback");
        			} else {
        				this.fnSelectSub01();
        			}
        			break;

        		// 평가항목
        		case 1:
        			if (this.gfnDsIsUpdated(this.dsListSub02)) {
        				this.fnDsUpdateCallback = function(id, val) {
        					if (!val) {
        						return false;
        					} else {
        						this.fnSelectSub02();
        					}
        				}
        				this.gfnConfirm("저장되지 않은 정보가 있습니다.\n 계속하시겠습니까?", "fnDsUpdateCallback");
        			} else {
        				this.fnSelectSub02();
        			}
        			break;
        		}
        		obj.oldrow = -1;
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub01);
        		this.gfnGridClear(this.dxGridSub02);
        	}
        }

        this.divData_ondragmove = function(obj,e) {
        	if (e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_top(e.clienty);
        		this.divData.form.resetScroll();
        	}
        }

        this.divData_divSplitter_ondrag = function(obj, e) {
        	e.set_userdata("splitter");
        	return true;
        }

        // 탭 선택 이벤트
        this.divData_tabData_onchanged = function(obj, e) {
        	var tabIdx = this.divData.form.divDataBottom.form.tabData.tabindex;
        	var objDS = this.fnGetBindDataset(e.preindex);

        	if (this.gfnDsIsUpdated(objDS)) {
        		this.fnDsUpdateCallback = function(id, val) {
        			if (!val) {
        				this.divData.form.divDataBottom.form.tabData.set_enableevent(false);
        				this.divData.form.divDataBottom.form.tabData.set_tabindex(e.preindex);
        				this.divData.form.divDataBottom.form.tabData.set_enableevent(true);
        				return false;
        			} else {
        				this.fnTabChage_Callback(tabIdx);
        				if (tabIdx == 0) this.gfnGridClear(this.dxGridSub02);
        				if (tabIdx == 1) this.gfnGridClear(this.dxGridSub01);
        			}
        		}
        		this.gfnConfirm("저장되지 않은 정보가 있습니다.\n 계속하시겠습니까?", "fnDsUpdateCallback");
        	} else {
        		this.fnTabChage_Callback(tabIdx);
        	}
        }

        this.fnTabChage_Callback = function(tabIdx) {
        	switch(tabIdx){
        	case 0:
        		// 평가척도
        		this.fnSelectSub01();
        		break;

        	case 1:
        		// 평가항목
        		this.fnSelectSub02();
        		break;
        	}
        }

        this.fnGetBindDataset = function(tabIdx) {
        	var objDS;
        	switch (tabIdx) {
        	case 0:
        		objDS = this.dsListSub01;
        		break;
        	case 1:
        		objDS = this.dsListSub02;
        		break;
        	}
        	return objDS;
        }

        this.dsListSub01_onvaluechanged = function(obj, e) {
        	if (this.gfnDsIsUpdated(this.dsListSub01)) {
        		this.FormBtns.Save.set_enable(true);
        	}
        }

        this.dsListSub02_onvaluechanged = function(obj, e) {
        	if (this.gfnDsIsUpdated(this.dsListSub02)) {
        		this.FormBtns.Save.set_enable(true);
        	}
        	this.SetGridSub02Height();
        }

        this.SetGridSub02Height = function() {
        	for (var i = 0; i < this.dsListSub02.rowcount; i++) {
        		var text = this.dsListSub02.getColumn(i, "DS_ITEM_DFNT");
        		if (text == undefined || text == "") {
        			this.dxGridSub02.setRealRowSize(i, 30);
        			continue;
        		}

        		var arr = text.split("<br/>")
        		if (arr.length > 1) {
        			var height = (arr.length * 17) + 10;
        			this.dxGridSub02.setRealRowSize(i, height);
        		}
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataBottom.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.dsListSub01.addEventHandler("onvaluechanged",this.dsListSub01_onvaluechanged,this);
            this.dsListSub02.addEventHandler("onvaluechanged",this.dsListSub02_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAJ_RTNG_CTRN.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
