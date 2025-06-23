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
            this.set_titletext("원가안분조정확인");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DWDPR_JTCOST_SELECT</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DWDPR_JTCOST_SELECT</Col></Row><Row><Col id=\"TARGET\">select3</Col><Col id=\"SP\">DWDPR_JTCOSTDIV_PRINT_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWDPR_JTMAGAM_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"TY_WRK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("작업년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Tab("tabData","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab0",this.divData.form.tabData);
            obj.set_text("안분대상");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid0","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab0.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab0.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.tabData);
            obj.set_text("안분대상(타사)");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid1","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("안분내역");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid2","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
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
        this.registerScript("DWD_JTCOSTDIVPRINT.xfdl", function() {
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

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().YM_WORK)){
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		this.dsSearch.setColumn(0, "YM_WORK", this.getOwnerFrame().YM_WORK);
        	}else{
        		// 10일까지는 전월로 표시한다
        		var today = this.gfnGetDate();
        		var day = today.substr(4,2);
        		var ymWork = "";
        		if(day < 11){
        			ymWork = this.gfnAddMonth(today,-1).substr(0,6);
        		}else{
        			ymWork = today.substr(0,6);
        		}

        		//this.dsSearch.setColumn(0, "YM_WORK", today.substr(0,6));
        		this.dsSearch.setColumn(0, "YM_WORK", ymWork);
        	}
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
        	this.dxGrid0 = this.divData.form.tabData.tab0.form.objGrid0; // 안분대상
        	this.dxGrid1 = this.divData.form.tabData.tab1.form.objGrid1; // 안분대상(타사)
        	this.dxGrid2 = this.divData.form.tabData.tab2.form.objGrid2; // 안분내역 - tab1이라 그리드명도 1

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid0, this.dsList, "DW", "DWD_JTCOSTPRINT");
        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DW", "DWD_JTCOSTPRINT");
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DW", "DWD_JTCOSTDIVPRINT");

        	this.dxGrid0.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid1.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid2.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("YM_WORK", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	var strSvcId    = "";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnGridBeforeSelect(this.dxGrid0);
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	var ym_work = this.dsSearch.getColumn(0, "YM_WORK");
        	this.dsSelect.setColumn(0, "YM_WORK", ym_work.substr(0,6));

        	var tIdx = this.fnGetTabIndex();

        	switch(tIdx) {
        		case 0:
        			this.dsSelect.setColumn(0, "TY_WRK", "A");

        			strSvcId    = "select1";
        			inData      = "select1=dsSelect";
        			outData     = "dsList=select10";
        			break;
        		case 1:
        			this.dsSelect.setColumn(0, "TY_WRK", "T");

        			strSvcId    = "select2";
        			inData      = "select2=dsSelect";
        			outData     = "dsList1=select20";
        			break;
        		case 2:
        			this.dsSelect.setColumn(0, "TY_WRK", "Q");

        			strSvcId    = "select3";
        			inData      = "select3=dsSelect";
        			outData     = "dsList2=select30";
        			break;
        	}

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        // 	var nrow = this.gfnGridAdd(this.dxGrid1); // top (default), bottom, current
        //
        // 	this.dsList2.set_enableevent(false);
        // 	this.dsList2.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        // 	this.dsList2.setColumn(nrow, "DS_SITE", this.divSearch.form.ccfCD_SITE.form.DSTextBox.value);
        // 	this.dsList2.set_enableevent(true);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid2);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크
        // 	if (!this.gfnGridValidate(this.dxGrid2)) return;
        //
        // 	this.dxGrid2.updateToDataset();
        //
        // 	this.dsSave.clearData();
        //
        // 	for (var i = 0; i < this.dsList2.rowcount; i++) {
        // 		var flag = this.gfnGetFlag(this.dsList2, i);
        // 		switch(flag) {
        // 			case "I":
        // 			case "U":
        // 			case "D":
        // 				var nrow = this.dsSave.addRow();
        // 				this.dsSave.setColumn(nrow, "TY_WRK", flag);
        // 				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        // 				this.dsSave.setColumn(nrow, "CD_SITE", this.dsList2.getColumn(i, "CD_SITE"));
        // 				var ym_work = this.dsSearch.getColumn(0, "YM_WORK");
        // 				this.dsSave.setColumn(nrow, "YM_WORK", ym_work.substr(0,6));
        // 				break;
        // 		}
        // 	}
        //
        // 	if (this.dsSave.rowcount == 0) return;
        //
        // 	var strSvcId    = "save";
        // 	var strSvcType  = "save";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "save=dsSave";
        // 	var outData     = "";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// transaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	var gridName = "";
        	var tIdx = this.fnGetTabIndex();

        	switch(tIdx) {
        		case 0:
        			gridName = this.dxGrid0;
        			break;
        		case 1:
        			gridName = this.dxGrid1;
        			break;
        		case 2:
        			gridName = this.dxGrid2;
        			break;
        	}

        	//this.gfnExcelExport(this.dxGrid0);
        	this.gfnExcelExport(gridName);
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
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드가 입력되지 않았습니다.", "fnVaidateCallback");
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_WORK"))) {
        		validate = false;

        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctclYM_WORK.setFocus();
        		}
        		this.gfnAlert("작업년월를 입력하세요.", "fnVaidateCallback");
        	}

        	return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, args)
        {
        	if (svcID == "select1") {
        		if (errorCode == 0) {
        			this.gfnGridAfterSelect(this.dxGrid0);
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if (svcID == "select2") {
        		if (errorCode == 0) {
        			this.gfnGridAfterSelect(this.dxGrid1);
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if (svcID == "select3") {
        		if (errorCode == 0) {
        			this.gfnGridAfterSelect(this.dxGrid2);

        			this.fnHeadNmCh(); //헤더명 변경 로직
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        // 	else if(svcID == "save") {
        // 		if (errorCode == 0) {
        // 			this.FormBtns.Select.click();
        // 		} else {
        // 			this.gfnAlert(errorMsg);
        // 		}
        // 	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
         	if (id == "DZX_CFSITE") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
         	}
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid1);
        	}
        };

        this.fnHeadNmCh = function(){
        	var idx0 = "";
        	var idx1 = "";
        	var idx2 = "";
        	var idx3 = "";

        	for(var i=0; i < this.dxGrid2.getCellCount("head"); i++) {
        		if(this.dxGrid2.getCellText(-1,i) == "공동도급사1"){
        			idx0 = i;
        		}else if(this.dxGrid2.getCellText(-1,i) == "공동도급사2"){
        			idx1 = i;
        		}else if(this.dxGrid2.getCellText(-1,i) == "공동도급사3"){
        			idx2 = i;
        		}else if(this.dxGrid2.getCellText(-1,i) == "공동도급사4"){
        			idx3 = i;
        		}
        	}

        	for (var i = 0; i < this.dsList2.colcount; i++) {
        	/*
        		if(i == 0){
        			this.dxGrid2.setCellProperty("head", idx0, "text", this.dsList2.getColumn(i, "DS_VENDOR_2"));
        		}else if(i == 1){
        			this.dxGrid2.setCellProperty("head", idx1, "text", this.dsList2.getColumn(i, "DS_VENDOR_3"));
        		}else if(i == 2){
        			this.dxGrid2.setCellProperty("head", idx2, "text", this.dsList2.getColumn(i, "DS_VENDOR_4"));
        		}else if(i == 3){
        			this.dxGrid2.setCellProperty("head", idx3, "text", this.dsList2.getColumn(i, "DS_VENDOR_5"));
        		}
        	*/
        		for(var j = 0; j <this.dsList2.rowcount; j++){
        			if(this.dsList2.getColumn(j, "DS_VENDOR_2") != "" || this.dsList2.getColumn(j, "DS_VENDOR_2") !== undefined)
        			{
        				this.dxGrid2.setCellProperty("head", idx0, "text", this.dsList2.getColumn(j, "DS_VENDOR_2"));
        			}

        			if(this.dsList2.getColumn(j, "DS_VENDOR_3") != "" || this.dsList2.getColumn(j, "DS_VENDOR_3") !== undefined)
        			{
        				this.dxGrid2.setCellProperty("head", idx1, "text", this.dsList2.getColumn(j, "DS_VENDOR_3"));
        			}

        			if(this.dsList2.getColumn(j, "DS_VENDOR_4") != "" || this.dsList2.getColumn(j, "DS_VENDOR_4") !== undefined)
        			{
        				this.dxGrid2.setCellProperty("head", idx2, "text", this.dsList2.getColumn(j, "DS_VENDOR_4"));
        			}

        			if(this.dsList2.getColumn(j, "DS_VENDOR_5") != "" || this.dsList2.getColumn(j, "DS_VENDOR_5") !== undefined)
        			{
        				this.dxGrid2.setCellProperty("head", idx3, "text", this.dsList2.getColumn(j, "DS_VENDOR_5"));
        			}
        		}

        		// 조회할때 조회조건이 다룰수 있기 때문에 컬럼 보이기
        		//this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "CD_VENDOR_"+(i+2)),"size",80);
        		//this.dxGrid1.setFormatColProperty(this.dxGrid1.getBindCellIndex("body", "DS_VENDOR_"+(i+2)),"size",150);
        		this.dxGrid2.setFormatColProperty(this.dxGrid2.getBindCellIndex("body", "RT_JIBUN_"+(i+2)),"size",90);
        		this.dxGrid2.setFormatColProperty(this.dxGrid2.getBindCellIndex("body", "AM_TAXBILL_TOT_"+(i+2)),"size",100);
        		this.dxGrid2.setFormatColProperty(this.dxGrid2.getBindCellIndex("body", "AM_VAT_TOT_"+(i+2)),"size",100);
        		this.dxGrid2.setFormatColProperty(this.dxGrid2.getBindCellIndex("body", "AM_BILL_TOT_"+(i+2)),"size",100);
        		this.dxGrid2.setFormatColProperty(this.dxGrid2.getBindCellIndex("body", "AM_ETC_TOT_"+(i+2)),"size",100);
        		this.dxGrid2.setFormatColProperty(this.dxGrid2.getBindCellIndex("body", "AM_TOTAL_TOT_"+(i+2)),"size",100);
        	}

        	// 컬럼 숨기기
        	//공동도급사1
        	if(this.dxGrid2.getCellProperty("head", 6, "text") == "" || this.dxGrid2.getCellProperty("head", 6, "text") === undefined){
        		this.dxGrid2.setFormatColProperty(this.dxGrid2.getBindCellIndex("body", "CD_VENDOR_2"),"size",0);
        		this.dxGrid2.setFormatColProperty(this.dxGrid2.getBindCellIndex("body", "DS_VENDOR_2"),"size",0);
        		this.dxGrid2.setFormatColProperty(this.dxGrid2.getBindCellIndex("body", "RT_JIBUN_2"),"size",0);
        		this.dxGrid2.setFormatColProperty(this.dxGrid2.getBindCellIndex("body", "AM_TAXBILL_TOT_2"),"size",0);
        		this.dxGrid2.setFormatColProperty(this.dxGrid2.getBindCellIndex("body", "AM_VAT_TOT_2"),"size",0);
        		this.dxGrid2.setFormatColProperty(this.dxGrid2.getBindCellIndex("body", "AM_BILL_TOT_2"),"size",0);
        		this.dxGrid2.setFormatColProperty(this.dxGrid2.getBindCellIndex("body", "AM_ETC_TOT_2"),"size",0);
        		this.dxGrid2.setFormatColProperty(this.dxGrid2.getBindCellIndex("body", "AM_TOTAL_TOT_2"),"size",0);
        	}
        	//공동도급사2
        	if(this.dxGrid2.getCellProperty("head", 7, "text") == "" || this.dxGrid2.getCellProperty("head", 7, "text") === undefined){
        		this.dxGrid2.setFormatColProperty(this.dxGrid2.getBindCellIndex("body", "CD_VENDOR_3"),"size",0);
        		this.dxGrid2.setFormatColProperty(this.dxGrid2.getBindCellIndex("body", "DS_VENDOR_3"),"size",0);
        		this.dxGrid2.setFormatColProperty(this.dxGrid2.getBindCellIndex("body", "RT_JIBUN_3"),"size",0);
        		this.dxGrid2.setFormatColProperty(this.dxGrid2.getBindCellIndex("body", "AM_TAXBILL_TOT_3"),"size",0);
        		this.dxGrid2.setFormatColProperty(this.dxGrid2.getBindCellIndex("body", "AM_VAT_TOT_3"),"size",0);
        		this.dxGrid2.setFormatColProperty(this.dxGrid2.getBindCellIndex("body", "AM_BILL_TOT_3"),"size",0);
        		this.dxGrid2.setFormatColProperty(this.dxGrid2.getBindCellIndex("body", "AM_ETC_TOT_3"),"size",0);
        		this.dxGrid2.setFormatColProperty(this.dxGrid2.getBindCellIndex("body", "AM_TOTAL_TOT_3"),"size",0);
        	}

        	//공동도급사3
        	if(this.dxGrid2.getCellProperty("head", 8, "text") == "" || this.dxGrid2.getCellProperty("head", 8, "text") === undefined){
        		this.dxGrid2.setFormatColProperty(this.dxGrid2.getBindCellIndex("body", "CD_VENDOR_4"),"size",0);
        		this.dxGrid2.setFormatColProperty(this.dxGrid2.getBindCellIndex("body", "DS_VENDOR_4"),"size",0);
        		this.dxGrid2.setFormatColProperty(this.dxGrid2.getBindCellIndex("body", "RT_JIBUN_4"),"size",0);
        		this.dxGrid2.setFormatColProperty(this.dxGrid2.getBindCellIndex("body", "AM_TAXBILL_TOT_4"),"size",0);
        		this.dxGrid2.setFormatColProperty(this.dxGrid2.getBindCellIndex("body", "AM_VAT_TOT_4"),"size",0);
        		this.dxGrid2.setFormatColProperty(this.dxGrid2.getBindCellIndex("body", "AM_BILL_TOT_4"),"size",0);
        		this.dxGrid2.setFormatColProperty(this.dxGrid2.getBindCellIndex("body", "AM_ETC_TOT_4"),"size",0);
        		this.dxGrid2.setFormatColProperty(this.dxGrid2.getBindCellIndex("body", "AM_TOTAL_TOT_4"),"size",0);
        	}

        	//공동도급사4
        	if(this.dxGrid2.getCellProperty("head", 9, "text") == "" || this.dxGrid2.getCellProperty("head", 9, "text") === undefined){
        		this.dxGrid2.setFormatColProperty(this.dxGrid2.getBindCellIndex("body", "CD_VENDOR_5"),"size",0);
        		this.dxGrid2.setFormatColProperty(this.dxGrid2.getBindCellIndex("body", "DS_VENDOR_5"),"size",0);
        		this.dxGrid2.setFormatColProperty(this.dxGrid2.getBindCellIndex("body", "RT_JIBUN_5"),"size",0);
        		this.dxGrid2.setFormatColProperty(this.dxGrid2.getBindCellIndex("body", "AM_TAXBILL_TOT_5"),"size",0);
        		this.dxGrid2.setFormatColProperty(this.dxGrid2.getBindCellIndex("body", "AM_VAT_TOT_5"),"size",0);
        		this.dxGrid2.setFormatColProperty(this.dxGrid2.getBindCellIndex("body", "AM_BILL_TOT_5"),"size",0);
        		this.dxGrid2.setFormatColProperty(this.dxGrid2.getBindCellIndex("body", "AM_ETC_TOT_5"),"size",0);
        		this.dxGrid2.setFormatColProperty(this.dxGrid2.getBindCellIndex("body", "AM_TOTAL_TOT_5"),"size",0);
        	}
        }

        this.fnGetTabIndex = function()
        {
        	var index = -1;
        	var text = this.divData.form.tabData.tabpages[this.divData.form.tabData.tabindex].text;

        	switch(text)
        	{
        		case "안분대상" : index = 0;
        			break;
        		case "안분대상(타사)" : index = 1;
        			break;
        		case "안분내역" : index = 2;
        			break;
        	}

        	return index;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWD_JTCOSTDIVPRINT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
