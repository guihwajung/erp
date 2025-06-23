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
            this.set_titletext("분양원가명세서");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListExcel", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHFPR_SC2_SELECT</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DHFPR_SC2_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHFPR_SC2_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"YM_MAGAM\" type=\"STRING\" size=\"256\"/><Column id=\"YM_MAGAM2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","203","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("회계단위");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:0.0","10.0","230","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFBALANCE_ACNTUNIT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_ID","ccfCD_DEPT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("회계년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","staNO_ID:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("당기");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","sta00:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ctclYM_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("전기");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK2","sta01:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","50%","0","5","100%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_Splitter");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_text("당기");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("전기");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Grid("objGrid1","0","sta02:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Grid("objGridExcel","0","sta02:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);
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

            obj = new BindItem("item2","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_MAGAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ctclYM_WORK2.form.TextBox","value","dsSearch","YM_MAGAM2");
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
        this.registerScript("DHF_SC2.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);

        	if (this.FormInfo.ID_GROUP  == "M"){
        		this.dsSearch.setColumn(0, "CD_DEPT", this.AuthClient.CD_CORP);
        	}else{
        		this.dsSearch.setColumn(0, "CD_DEPT", this.UserInfo.LEVCD_DEPT_ACNT_DOWN);
        	}

        	if (!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT"))){
        		this.ccfCD_DEPT.form.fnCodeFindLoad();
          	}
         	var toDay = this.gfnGetDate();
         	this.dsSearch.setColumn(0, "YM_MAGAM", toDay.substr(0,6));
         	this.dsSearch.setColumn(0, "YM_MAGAM2", toDay.substr(0,6));

        	if (nexacro.toNumber(this.FormInfo.GR_SEARCH) > 1) {
        		this.ccfCD_CORP.set_enable(false);
        	}

        	this.ccfCD_CORP.form.CDTextBox.setFocus();
        };

        /************************************************************************
        * 버튼 설정 : 화면(Tab) 전환시 마다 호출
        ************************************************************************/
        this.fnSetButton = function() {
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
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;
        	this.ctclYM_WORK = this.divSearch.form.ctclYM_WORK;
        	this.ctclYM_WORK2 = this.divSearch.form.ctclYM_WORK2;

        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGrid1 = this.divData.form.divDataRight.form.objGrid1;
        };

        /************************************************************************
        * 이벤트 설정
        ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHF_SC2");
        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DH", "DHF_SC2_1");

        	//this.dxGrid.addEventHandler("oncelldblclick", this.fnGrid_Celldblclick, this);
        	//this.dxGrid1.addEventHandler("oncelldblclick", this.fnGrid1_Celldblclick, this);

        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.AfterCDTextChanged = "fnAfterCDTextChanged";
        }

        /************************************************************************
        * 파라미터 설정
        ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSelect.addColumn("YM_MAGAM", "string");

        	this.dsSelect1 = new Dataset();
        	this.dsSelect1.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSelect1.addColumn("YM_MAGAM", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_DEPT_ACNT", "string");
        	this.dsUpdate.addColumn("YM_MAGAM", "string");
        	this.dsUpdate.addColumn("CD_SC", "string");
        	this.dsUpdate.addColumn("DS_PRINT", "string");
        	this.dsUpdate.addColumn("ID_TRANS", "string");
        }

        /************************************************************************
        * 버튼 이벤트
        ************************************************************************/
        /*
        *	조회 버튼
        */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;
        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsSelect.setColumn(0, "YM_MAGAM", this.dsSearch.getColumn(0, "YM_MAGAM"));

        	this.dsSelect1.clearData();
        	this.dsSelect1.addRow();
        	this.dsSelect1.setColumn(0, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsSelect1.setColumn(0, "YM_MAGAM", this.dsSearch.getColumn(0, "YM_MAGAM2"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect select1=dsSelect1";
        	var outData     = "dsList=select0 dsList1=select10";
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
        	if (!this.gfnGridValidate(this.dxGrid)) return;
        	this.dxGrid.updateToDataset();
         	this.dsUpdate.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        		case "I":
        		case "D":
        		case "U":
        			var nrow = this.dsUpdate.addRow();
        			this.dsUpdate.setColumn(nrow, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT"));
        			this.dsUpdate.setColumn(nrow, "YM_MAGAM", this.dsSearch.getColumn(0, "YM_MAGAM"));
        			this.dsUpdate.setColumn(nrow, "CD_SC", this.dsList.getColumn(i, "CD_SC"));
        			this.dsUpdate.setColumn(nrow, "DS_PRINT", this.dsList.getColumn(i, "DS_PRINT"));
        			this.dsUpdate.setColumn(nrow, "ID_TRANS", this.AuthClient.ID_USER);
        			break;
        		}
        	}
        	if (this.dsUpdate.rowcount == 0) return;
        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate";
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
        	this.gfnExcelExport(this.dxGridExcel);
        }

        /*
        *	출력 버튼
        */
        this.fnPrint = function() {
        }

        /************************************************************************
        * 서브 버튼 이벤트
        ************************************************************************/

        /************************************************************************
        * Validate
        ************************************************************************/
        /*
        *	조회 Validate
        */
        this.fnSelectValidate = function() {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_DEPT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("회계단위를 입력하세요!", "fnVaidateCallback");
        		return false;
        	}
        	else if(this.gfnIsNull(this.dsSearch.getColumn(0, "YM_MAGAM"))) {
        		this.fnVaidateCallback = function() {
        			this.ctclYM_WORK.setFocus();
        		}
        		this.gfnAlert("당기회계년월이 입력되지 않았습니다.!","fnVaidateCallback");
        		return false;
        	}
        	else if(this.gfnIsNull(this.dsSearch.getColumn(0, "YM_MAGAM2"))) {
        		this.fnVaidateCallback = function() {
        			this.ctclYM_WORK2.setFocus();
        		}
        		this.gfnAlert("전기회계년월이 입력되지 않았습니다.!","fnVaidateCallback");
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
        	if (svcID == "select") {
        		// 		if(this.dsList.rowcount < 1) {
        		// 			this.gfnAlert("당기 자료가 존재하지 않습니다.");
        		// 		}
        		// 		else if(this.dsListSub.rowcount <1) {
        		// 			this.gfnAlert("전기 자료가 존재하지 않습니다.");
        		// 		};
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        }

        /************************************************************************
        * 코드파인드 이벤트
        ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_CORP") {
        		//dsUserParam.setColumn(nrow, "LEVLV_DEPT", this.UserInfo.LEVLV_DEPT_ACNT);
        		//dsUserParam.setColumn(nrow, "LEVCD_DEPT", this.UserInfo.LEVCD_DEPT_ACNT);
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}
        	else if (id == "ccfCD_DEPT") {
        		if (this.FormInfo.ID_GROUP == "M") {
        			this.ccfCD_DEPT.CodeFindName = "DHX_CFACNTUNIT_CLOSING";
        			dsUserParam.setColumn(nrow, "LEVEL", this.UserInfo.LEVLV_DEPT_ACNT);
        			dsUserParam.setColumn(nrow, "ACNTUNIT", this.UserInfo.LEVCD_DEPT_ACNT);
        			dsUserParam.setColumn(nrow, "YN_CORP", "Y");
        			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		}
        		else {
        			this.ccfCD_DEPT.CodeFindName = "DHX_CFBALANCE_ACNTUNIT";
        			dsUserParam.setColumn(nrow, "LEVEL", this.UserInfo.LEVLV_DEPT_ACNT);
        			dsUserParam.setColumn(nrow, "ACNTUNIT", this.UserInfo.LEVCD_DEPT_ACNT);
        			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		}
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function ( id , codefindData ){
        	switch(id) {
        	case "ccfCD_DEPT":
        		var arr = codefindData;
        		if (arr.length > 0) {
        			this.dsSearch.setColumn(0, "YM_MAGAM", arr[0]["YM_MAGAM_BS1"].substr(0,6));
        			this.dsSearch.setColumn(0, "YM_MAGAM2", this.gfnAddMonth(arr[0]["YM_MAGAM_BS1"].substr(0,6)+"01", -12));
        		}
        		else {
        			this.dsSearch.setColumn(0, "DS_COMPANY", "");
        		}
        		break;
        	}
        };

        /************************************************************************
        * 그리드 이벤트
        ************************************************************************/
        this.fnGrid_Celldblclick = function(obj,e) {
        	this.fnAccountSlipSelect("L");
        };

        this.fnGrid1_Celldblclick = function(obj,e) {
        	this.fnAccountSlipSelect("R");
        };

        /************************************************************************
        * 기타 이벤트
        ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGrid1);
        	}
        };

        // this.divData_ondragmove = function(obj:nexacro.Div,e:nexacro.DragEventInfo)
        // {
        // 	if(e.userdata == "splitter") {
        // 		this.divData.form.divSplitter.set_left(e.clientx);
        // 		this.divData.form.resetScroll();
        // 	}
        // };
        //
        // this.divData_divSplitter_ondrag = function(obj:nexacro.Div,e:nexacro.DragEventInfo)
        // {
        // 	e.set_userdata("splitter");
        // 	return true;
        // };
        //
        // this.fnAccountSlipSelect = function(gubun) {
        // 	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        //
        // 	var cdAcnt = "";
        // 	if (gubun == "L") {
        // 		var r1 = this.dsList.rowposition;
        // 		if (this.dsList.getColumn(r1, "TY_COMP") != "T" && this.dsList.getColumn(r1, "TY_COMP") != "D")
        // 		return;
        //
        // 		if (this.dsList.getColumn(r1, "CD_ACNT1") == "")
        // 		return;
        //
        // 		cdAcnt = this.dsList.getColumn(r1, "CD_ACNT1");
        // 	}
        // 	else {
        // 		var r1 = this.dsList.rowposition;
        // 		if (this.dsList1.getColumn(r1, "TY_COMP") != "T" && this.dsList1.getColumn(r1, "TY_COMP") != "D")
        // 		return;
        //
        // 		if (this.dsList1.getColumn(r1, "CD_ACNT1") == "")
        // 		return;
        //
        // 		cdAcnt = this.dsList1.getColumn(r1, "CD_ACNT1");
        // 	}
        //
        // 	var param = {};
        // 	param.CD_DEPT_ACNT = this.dsSearch.getColumn(0, "CD_DEPT");
        // 	param.DS_DEPT_ACNT = this.dsSearch.getColumn(0, "DS_DEPT");
        // 	param.CD_CORP_REC = this.dsSearch.getColumn(0, "CD_CORP");
        // 	param.DS_CORP_REC = this.dsSearch.getColumn(0, "DS_CORP");
        // 	param.CD_ACCOUNT = cdAcnt;
        // 	param.DS_ACCOUNT = "";
        //
        // 	param.DT_MAGAM = this.dsSearch.getColumn(0, "YM_MAGAM").substr(0, 4) + "0101";
        // 	param.DT_MAGAM2 = this.gfnGetLastDate(this.dsSearch.getColumn(0, "YM_MAGAM") + "01");
        // 	param.TY_VENDOR = "";
        // 	param.CD_VENDOR = "";
        // 	param.DS_VENDOR = "";
        //
        // 	param.FLAG_LOAD = "DHF_TB";
        //
        // 	this.gfnFormOpen("DHE", "DHE_ACCOUNTSLIPSELECT", "", param);
        //
        // }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHF_SC2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
