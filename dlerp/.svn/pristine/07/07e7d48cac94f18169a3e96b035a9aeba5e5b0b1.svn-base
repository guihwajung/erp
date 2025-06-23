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
            this.set_titletext("퇴직공제부금계산");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"CT_WORK\" type=\"INT\" size=\"256\"/><Column id=\"AM_DEDUCT\" type=\"INT\" size=\"256\"/><Column id=\"DS_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_JIKJONG\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NATION\" type=\"STRING\" size=\"256\"/><Column id=\"NO_PASSPORT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_INSERT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ERPKEY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TRADE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DSEPR_RETIRE_DEDUCT_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"CD_SITE\"/><Col id=\"YM_WORK\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("30");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DSX_CFCORP");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("현장코드");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DSX_CFSITE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("작업년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","30",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","30",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_DEP","44","10","0","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsYN_DEP");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_SITE.form.DSTextBox","value","dsSearch","DS_SITE");
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
        this.registerScript("DSE_RETIRE_DEDUCT.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetParameter();
        	this.fnSetEvent();

        	//화면 넘어올 때
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_CORP)) {
        		this.dsSearch.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);
        		this.dsSearch.setColumn(0, "DS_CORP", this.getOwnerFrame().DS_CORP);
        		this.divSearch.form.ccfCD_CORP.set_enable(false);
        	}else{
        		this.divSearch.form.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        		this.divSearch.form.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	}

        	/* CD_SITE, DS_SITE 이전 값 받아오는 부분 START */
        	var cd_site = "";
        	var ds_site = "";
        	if(!this.gfnIsNull(this.objApp.DW_SPACE98)) {
        		cd_site = this.objApp.DW_SPACE98;
        		ds_site = this.objApp.DW_SPACE99;
        	} else {
        		cd_site = this.AuthClient.CD_SITE;
        		ds_site = this.AuthClient.DS_SITE;
        	}

        	this.dsSearch.setColumn(0, "CD_SITE", cd_site);
        	this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(ds_site)
        	/* CD_SITE, DS_SITE 이전 값 받아오는 부분 END */

        // 	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE)) {
        // 		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        // 		this.dsSearch.setColumn(0, "DS_SITE", this.getOwnerFrame().DS_SITE);
        // 		this.divSearch.form.ccfCD_SITE.set_enable(false);
        // 	}else{
        // 		this.divSearch.form.ccfCD_SITE.form.CDTextBox.set_value(this.AuthClient.CD_SITE);
        // 		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.AuthClient.DS_SITE);
        // 	}

        	if(!this.gfnIsNull(this.getOwnerFrame().YM_WORK)) {
        		this.dsSearch.setColumn(0, "YM_WORK", this.getOwnerFrame().YM_WORK);
        		this.divSearch.form.ctclYM_WORK.set_enable(false);
        	}else{
        		//월 셋팅
        		var today = this.gfnGetDate().substring(0,6);
        		this.divSearch.form.ctclYM_WORK.form.TextBox.set_value(today);
        	}

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_CORP)
        			&& !this.gfnIsNull(this.getOwnerFrame().CD_SITE)
        			&& !this.gfnIsNull(this.getOwnerFrame().YM_WORK)) {
        		this.FormBtns.Select.click(true);
        	}

        	// GR_SEARCH가 2보다 크면.. 법인코드 disable
        	// GR_SEARCH가 7또는 9 인경우 부서코드 disable
        	//trace("GR_SEARCH", this.FormInfo.GR_SEARCH);
        	if( this.FormInfo.GR_SEARCH  >= "2"){
        		this.divSearch.form.ccfCD_CORP.set_enable(false);
        	}

        	if(this.FormInfo.GR_SEARCH == "7" || this.FormInfo.GR_SEARCH == "9"){
        		this.divSearch.form.ccfCD_SITE.set_enable(false);
        	}

        	//this.fnSelect();
        	this.FormBtns.Select.click();

        };

        this.fnSetExtendButton = function() {

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	//조회
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ctclYM_WORK = this.divSearch.form.ctclYM_WORK;

        	//그리드
        	this.dxGrid = this.divData.form.objGrid;
        };

        this.fnSetButton = function() {
        // 	// Select, Add, Del, Save, Excel, Print
        // 	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        // 	this.FormBtns.Add.set_enable(false);
        //  	this.FormBtns.Del.set_enable(false);
        // 	this.FormBtns.Save.set_enable(false);
        }

        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");
        	this.dsSelect.addColumn("ID_INSERT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        }

        this.fnSetEvent = function() {
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DS", "DSE_RETIRE_DEDUCT");
        }

        this.fnSelectValidation = function() {

        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.gfnAlert("소속법인을 입력 하세요.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.ccfCD_SITE.form.CDTextBox.value)) {
        		this.gfnAlert("현장코드를 입력 하세요.");
        		this.ccfCD_SITE.form.CDTextBox.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.ctclYM_WORK.form.TextBox.value)) {
        		this.gfnAlert("작업년월을 입력 하세요.");
        		this.ctclYM_WORK.form.TextBox.setFocus();
        		return false;
        	}

        	return true;
        }

        this.fnSelect = function() {

        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsSelect.setColumn(0, "ID_INSERT", this.AuthClient.ID_USER);
        	this.dsSelect.setColumn(0, "TY_GUBUN", "");

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

        this.fnAdd = function() {

        }

        this.fnDel = function() {

        }

        this.fnSave = function() {

        }

        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        this.fnPrint = function() {

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
        		this.gfnGridAfterSelect(this.dxGrid);
        	}

        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	//조회조건 코드파인드
        	if (id == "ccfCD_CORP") {
         		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "GR_CORP", this.AuthClient.CD_CORP);
         		dsUserParam.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        	}
        	else if (id == "ccfCD_SITE"){
        		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			this.gfnAlert("법인을 먼저 입력하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));	// 법인코드
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "GR_CORP", this.AuthClient.CD_CORP);
         		dsUserParam.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_CORP") {
        		this.ccfCD_SITE.form.fnCodeFindClear();
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/


        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {

        	if(e == null || (e.pretext != e.posttext)) {
        		// 폼상태 초기화
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);


        	}
        };

        this.dsSearch_onvaluechanged = function(obj,e) {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);


        	}
        };


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.rdoYN_DEP.addEventHandler("onitemchanged",this.rdo00_onitemchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DSE_RETIRE_DEDUCT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
