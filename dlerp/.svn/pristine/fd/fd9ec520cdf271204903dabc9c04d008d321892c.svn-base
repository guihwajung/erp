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
            this.set_titletext("소비");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select0</Col><Col id=\"SP\">DMBPR_CPS_INVOITEM_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DMBPR_INVOMST_SAVE</Col></Row><Row><Col id=\"TARGET\">savedtl</Col><Col id=\"SP\">DMBPR_InvoDtl_Save</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DMBPR_INVOBAS_SELECT </Col></Row><Row><Col id=\"TARGET\">confirm</Col><Col id=\"SP\">DMBPR_InvoStk_Act</Col></Row><Row><Col id=\"TARGET\">jaego</Col><Col id=\"SP\">DMBPR_CPS_INVOITEM_LOAD</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_INVOICE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"BiGo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NO_INVOICE\"/><Col id=\"CD_SITE\"/><Col id=\"BiGo\"/><Col id=\"DT_WORK\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","0","40",null,"22","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("송장정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0.0","sta00:10.0",null,"142.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_CORP:0.0","10.0","180","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("출고일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_JAJIK","0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtBigo","staTY_JAJIK:0.0","ccfCD_SITE:10.0","369","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_WORK","staCD_DEPT:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_COST",null,"10.0","180","24.0","0",null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.getSetter("CodeFindName").set("DWX_CFCOST_TREE_01");
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","0","divSearch:10",null,"22","-10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("품목정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divData","0","sta01:5",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divTop","0","0",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","10","4","60","20",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("0");
            obj.set_text("송장번호");
            this.divTop.addChild(obj.name, obj);

            obj = new MaskEdit("mskNoSong","sta00:10","4","150","20",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            obj.set_maskchar("_");
            this.divTop.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divTop.form.mskNoSong","value","dsSearch","NO_INVOICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_WORK","value","dsSearch","DT_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.edtBigo","value","dsSearch","BiGo");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DMB_INVOICECPS.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.modflg = false;
        // 저장시 dtl부분의 분기가 있어 나누기 위해 사용.
        this._SAVE_SELECT_CHK = false;
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

        	if(!this.gfnIsNull(this.getOwnerFrame().Flag)) {
        		if(this.getOwnerFrame().Flag == "I"){
        			var today = this.gfnGetDate();
        			this.dsSearch.clearData();
        			this.dsSearch.addRow();
        			this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        			this.dsSearch.setColumn(0, "DT_WORK", today);
        			this.dsSearch.setColumn(0, "NO_INVOICE", "");
        			this.ccfCD_SITE.form.fnCodeFindLoad();
        			this.ccfCD_SITE.set_enable(true);
        			this.divSearch.form.ctclDT_WORK.set_enable(true);
        			this.divSearch.form.edtBigo.set_enable(true);
        			this.formMngFlag = "I";
        			this.FormBtns.Select.click();


        		}else if(this.getOwnerFrame().Flag == "U"){

        			this.dsSearch.setColumn(0, "NO_INVOICE", this.getOwnerFrame().NO_INVOICE.replace(/\-/g, ""));
        			this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        			this.dsSearch.setColumn(0, "DT_WORK", this.getOwnerFrame().DT_WORK);
        			this.dsSearch.setColumn(0, "BiGo", this.getOwnerFrame().BiGo);
        			this.ccfCD_SITE.form.fnCodeFindLoad();
        			this.ccfCD_SITE.set_enable(false);
        			this.divSearch.form.ctclDT_WORK.set_enable(true);
        			this.divSearch.form.edtBigo.set_enable(true);
        			this.formMngFlag = "U";
        			this.fn_masterinfo();
        		}
        	}

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Select.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btn1 = this.gfnFormButtonAdd("btnConfirm", "fnConfirm");
        	this.btn2 = this.gfnFormButtonAdd("btnConfirmCancel", "fnConfirmCancel");
        	this.btn3 = this.gfnFormButtonAdd("btnDelete", "fnDelete");
        	this.btn4 = this.gfnFormButtonAdd("btnAddReg", "fnAddReg");
        	this.btn5 = this.gfnFormButtonAdd("btnJaegoLoad", "fnJaegoLoad");
        	this.btnCost = this.gfnFormButtonAdd("btnCost", "fnCost");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DM", "DMB_INVOICECPS");
        	// 그리드 코드파인드 설정
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        	this.divSearch.form.ccfCD_COST.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.divSearch.form.ccfCD_COST.AfterCDTextChanged = "ccfCD_COST_AfterCDTextChanged";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("NO_INVOICE", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_ACT", "string");
        	this.dsSave.addColumn("TY_INVOICE", "string");
        	this.dsSave.addColumn("TY_INVOIO", "string");
        	this.dsSave.addColumn("DT_INVOICE", "string");
        	this.dsSave.addColumn("DT_INVOWK", "string");
        	this.dsSave.addColumn("AM_INVOICE", "bigdecimal");
        	this.dsSave.addColumn("CD_INSIT", "string");
        	this.dsSave.addColumn("CD_OUTSIT", "string");
        	this.dsSave.addColumn("NO_PO", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("NO_INVOICE2", "string");
        	this.dsSave.addColumn("RM_BIGO", "string");
        	this.dsSave.addColumn("YN_TRAN", "string");
        	this.dsSave.addColumn("YN_SELECT", "string");
        	this.dsSave.addColumn("NO_MR", "string");
        	this.dsSave.addColumn("CD_ITEM", "string");
        	this.dsSave.addColumn("CD_SITE_STOCK", "string");
        	this.dsSave.addColumn("CD_VENDOR_STOCK", "string");
        	this.dsSave.addColumn("AM_CMS", "bigdecimal");
        	this.dsSave.addColumn("AM_SUPPLY", "bigdecimal");
        	this.dsSave.addColumn("AM_VAT", "bigdecimal");
        	this.dsSave.addColumn("NO_INVOICE1", "string");

        	this.dsSaveDtl = new Dataset();
        	this.dsSaveDtl.addColumn("TY_ACT", "string");
        	this.dsSaveDtl.addColumn("NO_INVOICE1", "string");
        	this.dsSaveDtl.addColumn("SN_NO", "int");
        	this.dsSaveDtl.addColumn("CD_ITEM", "string");
        	this.dsSaveDtl.addColumn("TY_ITEM", "string");
        	this.dsSaveDtl.addColumn("NO_CONTROL", "string");
        	this.dsSaveDtl.addColumn("QN_ITEM", "bigdecimal");
        	this.dsSaveDtl.addColumn("UP_ITEM", "bigdecimal");
        	this.dsSaveDtl.addColumn("AM_ITEM", "bigdecimal");
        	this.dsSaveDtl.addColumn("CD_COST", "string");
        	this.dsSaveDtl.addColumn("NO_LC", "string");
        	this.dsSaveDtl.addColumn("ID_USER", "string");
        	this.dsSaveDtl.addColumn("NO_REVINVOICE", "string");
        	this.dsSaveDtl.addColumn("SN_REVNO", "int");
        	this.dsSaveDtl.addColumn("YN_INPUT", "string");
        	this.dsSaveDtl.addColumn("NO_SERIAL", "string");
        	this.dsSaveDtl.addColumn("RM_ETC", "string");
        	this.dsSaveDtl.addColumn("SZ_SITEITEM", "string");
        	this.dsSaveDtl.addColumn("YN_TRAN", "string");
        	this.dsSaveDtl.addColumn("YN_SELECT", "string");
        	this.dsSaveDtl.addColumn("NO_GASOLJAE", "string");
        	this.dsSaveDtl.addColumn("UP_CMS", "bigdecimal");
        	this.dsSaveDtl.addColumn("AM_CMS", "bigdecimal");
        	this.dsSaveDtl.addColumn("NO_HADOCONT", "string");
        	this.dsSaveDtl.addColumn("CNT_GASOLJAE_MONTH", "int");
        	this.dsSaveDtl.addColumn("CD_COST_IN", "string");
        	this.dsSaveDtl.addColumn("NO_HADOCONT_IN", "string");
        	this.dsSaveDtl.addColumn("CD_COST_OUT", "string");
        	this.dsSaveDtl.addColumn("NO_HADOCONT_OUT", "string");
        	this.dsSaveDtl.addColumn("CD_VENDOR", "string");
        	this.dsSaveDtl.addColumn("NO_HADOCONT_JAKUP", "string");

        	this.dsCon = new Dataset();
        	this.dsCon.addColumn("TY_ACT", "string");
        	this.dsCon.addColumn("NO_INVOICE1", "string");
        	this.dsCon.addColumn("NO_INVOICE2", "string");
        	this.dsCon.addColumn("ID_USER", "string");
        	this.dsCon.addColumn("CD_DEPT_LOGIN", "string");

        	this.dsSelectJ = new Dataset();
        	this.dsSelectJ.addColumn("CD_SITE", "string");
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "NO_INVOICE", this.dsSearch.getColumn(0, "NO_INVOICE"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select0=dsSelect";
        	var outData     = "dsList=select00";
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

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid);
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if(this.formMngFlag == "I" || this.modflg){

        		this.fn_saveMain();
        	}else{
        		this._SAVE_SELECT_CHK = true;
        		this.fn_dtlSave();
        	}

        };

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
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {

        };


        this.fnSaveValidate = function(){
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))){
        		this.gfnAlert("현장코드는 필수 입니다.");
        		return false;
        	}else if(this.gfnIsNull(this.dsSearch.getColumn(0, "DT_WORK"))){
        		this.gfnAlert("출고일자는 필수 입니다.");
        		return false;
        	}else if(this.formMngFlag == "I" && this.dsList.rowcount < 1){
        		this.gfnAlert("출고 내역(그리드) 데이타가 존재하지 않습니다.");
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
        		this.gfnGridAfterSelect(this.dxGrid);
        		if(this.formMngFlag == "I"){
        			this.gfnSetFormStatus(this, "I");
        		}

        		if(this.dsMaster.rowcount > 0)
        		{
        			// 버튼설정
        			if (this.dsMaster.getColumn(0, "YN_CONFIRM") == "Y") {
        				this.btn1.set_enable(false);
        				this.btn2.set_enable(true);
        				this.btn3.set_enable(false);
        				this.divSearch.form.edtBigo.set_readonly(true);
        			} else {
        				this.btn1.set_enable(true);
        				this.btn2.set_enable(false);
        				this.btn3.set_enable(true);
        				this.divSearch.form.edtBigo.set_readonly(false);
        			}
        		}
        	}else if(svcID == "save"){
        		if (errorCode == 0) {
        			if(this.formMngFlag == "I"){
        				if(this.dsOutput.rowcount > 0) {
        					this.dsSearch.setColumn(0, "NO_INVOICE", this.dsOutput.getColumn(0, "NO_INVOICE1"));
        				}
        				this.formMngFlag = "U";
        				this.ccfCD_SITE.set_enable(false);
        			}
        			//this._SAVE_SELECT_CHK = false;
        			this.modflg = false;
        			/*
        			if(!this.fn_dtlSave()){
        				this.fn_masterinfo();
        			}
        			*/
        			this.fn_dtlSave();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "savedtl"){
        		if (errorCode == 0) {
        			if(this._SAVE_SELECT_CHK == true)
        			{
        				this.FormBtns.Select.click();

        				var chk = false;

        				for(var i = 0 ; i < this.dsList.rowcount; i++)
        				{
        					var flag = this.gfnGetFlag(this.dsList, i);
        					if(flag == "D")
        					{
        						chk = true;
        						break;
        					}
        				}

        				if(chk == true) return;

        				this.gfnConfirm("검수를 확정하시겠습니까?", "fnSaveAf_callback");
        			}
        			else
        			{
        				this.fn_masterinfo();
        			}
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "selectmaster"){
        		//if(this.dsMaster.rowcount > 0)
        		//{
        		this.FormBtns.Select.click();

        		//}
        	}else if(svcID == "jaego"){
        		if(this.dsList.rowcount > 0){
        			for(var i = 0;i<this.dsList.rowcount;i++){
        				this.dsList.setColumn(i, "nx_flag", "I");
        			}
        			this.gfnSetFormStatus(this, "I");
        		}
        	}else if(svcID == "confirm"){
        		if (errorCode == 0) {
        			this.fn_masterinfo();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "delete"){
        		if (errorCode == 0) {
        			this.getParentContext().close();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_COST") {

        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "CD_GBIMOK", "");
        		dsUserParam.setColumn(nrow, "CD_STDAGG", "");
        	}

        	return true;
        }

        this.ccfCD_COST_AfterCDTextChanged = function(id, codeFindData) {
        	// 코드,명칭 외 추가 컬럼 처리
        	var arr = codeFindData; //this.ccfCD_DEPT_ORG.form.SelectedData; 둘다 사용가능
        	var cd_cost = "";
        	var ds_cost = "";
        	if (arr.length > 0) {

        		cd_dkcost = arr[0]["CD_DKCOST"];
        		cd_cost= arr[0]["CD_COST"];
        		ds_cost = arr[0]["DS_COST"];
        		this.dsList.set_enableevent(false);
        		var rows = this.dxGrid.getSelectedDatasetRows();
        		for(var i = 0; i < rows.length; i++)
        		{
        			this.dsList.setColumn(rows[i], "CD_DKCOST", cd_dkcost);
        			this.dsList.setColumn(rows[i], "CD_COST", cd_cost);
        			this.dsList.setColumn(rows[i], "DS_COST", ds_cost);
        			this.dsList.setColumn(rows[i], "CD_DKCOST_OUT", cd_dkcost);
        			this.dsList.setColumn(rows[i], "CD_COST_OUT", cd_cost);
        			this.dsList.setColumn(rows[i], "DS_COST_OUT", ds_cost);
        			this.dsList.setColumn(rows[i], this.ucFlag, "I");
        		}

        		if(rows.length > 0) this.gfnSetFormStatus(this, "U");
        		this.dsList.set_enableevent(true);
        	}
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
         	if(id == "DMX_INVOICECPS_CODEFIND"){
         		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
         	}else if(id == "DWX_CFHADO_CONT"){
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	}else if(id == "DWX_CFCOST"){
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "NO_HADOCONT", this.dsList.getColumn(this.dsList.rowposition, "NO_HADOCONT_OUT"));
        	}else if(id == "DWX_JIK_NOHADOCONT"){
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "CD_COST", this.dsList.getColumn(this.dsList.rowposition, "CD_COST"));
        	}
        	return true;
        };

        this.fnGrid_AfterCDTextChanged=function(id, codeFindData){

        	if(id == "DMX_INVOICECPS_CODEFIND"){
        		var arr = codeFindData;
        		if(arr.length > 0){
        			console.info(arr);
        			this.dsList.setColumn(this.dsList.rowposition, "NO_HADOCONT_OUT", arr[0]["NO_HADOCONT_JAKUP"]);
        			this.dsList.setColumn(this.dsList.rowposition, "DS_HADOCONT_OUT", arr[0]["DS_HADOCONT_JAKUP"]);
        			this.dsList.setColumn(this.dsList.rowposition, "CD_DKCOST_OUT", arr[0]["CD_DKCOST"]);
        			this.dsList.setColumn(this.dsList.rowposition, "CD_COST_OUT", arr[0]["CD_COST"]);
        			this.dsList.setColumn(this.dsList.rowposition, "DS_COST_OUT", arr[0]["DS_COST"]);
        			this.dsList.setColumn(this.dsList.rowposition, "NO_HADOCONT_JAKUP",arr[0]["NO_HADOCONT_JAKUP"]);
        		}

        	}
        };

        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		var bool = false;

        		if(this.gfnIsNull(this.dsList.getColumn(e.row, "CD_DKCOST")))
        		{
        			bool = true;
        		}

        		this.btnCost.set_enable(bool);
        		obj.oldrow = -1;
        	}
        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.dsList_oncolumnchanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){
        		if(e.columnid == "QN_ITEM"){
        			if(nexacro.toNumber(e.newvalue,0) == nexacro.toNumber(this.dsList.getColumn(e.row, "QN_JAEGO"),0))
        			{
        				this.dsList.setColumn(e.row, "AM_ITEM", this.dsList.getColumn(e.row, "AM_JAEGO"));
        			}
        			else
        			{
        				this.dsList.setColumn(e.row, "AM_ITEM", this.dsList.getColumn(e.row, "QN_ITEM")*this.dsList.getColumn(e.row, "UP_IN"));
        			}
        		}
        	}
        };

        this.fn_dtlSave=function(){
        	if(this.dsList.findRow("nx_flag", "I") > -1 || this.dsList.findRow("nx_flag", "U") > -1 || this.dsList.findRow("nx_flag", "D") > -1 ){
        		if (!this.gfnGridValidate(this.dxGrid)) return false;

        		this.dxGrid.updateToDataset();

        		this.dsSaveDtl.clearData();

        		for (var i = 0; i < this.dsList.rowcount; i++) {
        			var flag = this.gfnGetFlag(this.dsList, i);
        			switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSaveDtl.addRow();
        				this.dsSaveDtl.setColumn(nrow, "TY_ACT", flag);
        				this.dsSaveDtl.setColumn(nrow, "NO_INVOICE1", this.dsSearch.getColumn(0, "NO_INVOICE"));
        				this.dsSaveDtl.setColumn(nrow, "SN_NO", this.dsList.getColumn(i, "SN_NO"));
        				this.dsSaveDtl.setColumn(nrow, "CD_ITEM", this.dsList.getColumn(i, "CD_ITEM"));
        				this.dsSaveDtl.setColumn(nrow, "TY_ITEM", this.dsList.getColumn(i, "TY_ITEM"));
        				this.dsSaveDtl.setColumn(nrow, "QN_ITEM", this.dsList.getColumn(i, "QN_ITEM"));
        				this.dsSaveDtl.setColumn(nrow, "UP_ITEM", this.dsList.getColumn(i, "UP_ITEM"));
        				this.dsSaveDtl.setColumn(nrow, "AM_ITEM", this.dsList.getColumn(i, "AM_ITEM"));
        				this.dsSaveDtl.setColumn(nrow, "CD_COST", this.dsList.getColumn(i, "CD_COST"));
        				this.dsSaveDtl.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSaveDtl.setColumn(nrow, "YN_INPUT", this.dsList.getColumn(i, "YN_INPUT"));
        				this.dsSaveDtl.setColumn(nrow, "RM_ETC", this.dsList.getColumn(i, "RM_ETC"));
        				this.dsSaveDtl.setColumn(nrow, "SZ_SITEITEM", this.dsList.getColumn(i, "SZ_SITEITEM"));
        				this.dsSaveDtl.setColumn(nrow, "NO_HADOCONT", this.dsList.getColumn(i, "NO_HADOCONT"));
        				this.dsSaveDtl.setColumn(nrow, "NO_REVINVOICE", this.dsList.getColumn(i, "NO_REVINVOICE"));
        				this.dsSaveDtl.setColumn(nrow, "SN_REVNO", this.dsList.getColumn(i, "SN_REVNO"));
        				this.dsSaveDtl.setColumn(nrow, "CD_COST_OUT", this.dsList.getColumn(i, "CD_COST_OUT"));
        				this.dsSaveDtl.setColumn(nrow, "NO_HADOCONT_OUT", this.dsList.getColumn(i, "NO_HADOCONT_OUT"));
        				this.dsSaveDtl.setColumn(nrow, "NO_LC", this.dsList.getColumn(i, "NO_LC"));
        				this.dsSaveDtl.setColumn(nrow, "NO_HADOCONT_JAKUP", this.dsList.getColumn(i, "NO_HADOCONT_JAKUP"));

        			break;
        			}
        		}

        	if (this.dsSaveDtl.rowcount == 0) return false;

        	this._SAVE_SELECT_CHK = true;
        	for(var i = 0; i < this.dsSaveDtl.rowcount; i++)
        	{
        		if(this.dsSaveDtl.getColumn(nrow, "TY_ACT") == "D")
        		{
        			this._SAVE_SELECT_CHK = false;
        			break;
        		}
        	}

        	var strSvcId    = "savedtl";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "savedtl=dsSaveDtl";
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
        	}else{
        		return false;
        	}

        };

        this.fn_saveMain=function(){
        	if(!this.fnSaveValidate())return;

        	this.dsSave.clearData();
        	this.dsSave.addRow();

        	this.dsSave.setColumn(0, "TY_ACT", this.formMngFlag);
        	this.dsSave.setColumn(0, "TY_INVOICE", "CPS");
        	this.dsSave.setColumn(0, "TY_INVOIO", "O");
        	this.dsSave.setColumn(0, "NO_INVOICE1", this.dsSearch.getColumn(0, "NO_INVOICE"));
        	this.dsSave.setColumn(0, "DT_INVOICE", this.dsSearch.getColumn(0, "DT_WORK"));
        	this.dsSave.setColumn(0, "AM_INVOICE", "0");
        	this.dsSave.setColumn(0, "CD_INSIT", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSave.setColumn(0, "CD_OUTSIT", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSave.setColumn(0, "NO_PO", "");
        	this.dsSave.setColumn(0, "CD_VENDOR", "");
        	this.dsSave.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	this.dsSave.setColumn(0, "RM_BIGO", this.dsSearch.getColumn(0, "BiGo"));

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "dsOutput=save";
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

        this.fn_masterinfo=function(){

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "NO_INVOICE", this.dsSearch.getColumn(0, "NO_INVOICE"));

        	var strSvcId    = "selectmaster";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsMaster=select0";
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

        this.dsSearch_oncolumnchanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){
        		this.modflg = true;
        		this.gfnSetFormStatus(this, "I");
        	}
        };

        this.fnConfirm = function(obj,e) {
        	this.conflag = "I";
        	this.gfnConfirm("검수를 확정하시겠습니까?", "fnConfirm_callback");
        };

        this.fnConfirmCancel = function(obj,e) {
        	this.conflag = "D";
        	this.gfnConfirm("검수 확정을 취소하시겠습니까?", "fnConfirm_callback");

        };

        this.fnDelete = function(obj,e) {
        	this.gfnConfirm("삭제하시겠습니까?", "fnDelete_callback");
        };

        this.fnAddReg = function(obj,e) {
        	this.dsList.clearData();
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();
        	this.dsMaster.clearData();
        	this.ccfCD_SITE.set_enable(true);
        	this.divSearch.form.ctclDT_WORK.set_enable(true);
        	this.divSearch.form.edtBigo.set_enable(true);
        	this.ccfCD_SITE.form.DSTextBox.set_value("");
        	this.formMngFlag = "I";
        };

        this.fnJaegoLoad = function(obj,e) {

        	this.dsSelectJ.clearData();
        	this.dsSelectJ.addRow();

        	this.dsSelectJ.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));

        	var strSvcId    = "jaego";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "jaego=dsSelectJ";
        	var outData     = "dsList=jaego0";
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

        this.fnConfirm_callback = function(strId, val) {
        	if(val == true) {
        		this.dsCon.clearData();

        		this.dsCon.addRow();

        		this.dsCon.setColumn(0, "TY_ACT", this.conflag);
        		this.dsCon.setColumn(0, "NO_INVOICE1", this.dsSearch.getColumn(0, "NO_INVOICE"));
        		this.dsCon.setColumn(0, "NO_INVOICE2","");
        		this.dsCon.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        		var strSvcId    = "confirm";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "confirm=dsCon";
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
        	else
        	{
        		this._SAVE_SELECT_CHK = false;
        	}
        };

        this.fnDelete_callback = function(strId, val) {
        	if(val == true) {
        		this.dsSave.clearData();
        		this.dsSave.addRow();

        		this.dsSave.setColumn(0, "TY_ACT", "D");
        		this.dsSave.setColumn(0, "TY_INVOICE", "CPS");
        		this.dsSave.setColumn(0, "TY_INVOIO", "O");
        		this.dsSave.setColumn(0, "NO_INVOICE1", this.dsSearch.getColumn(0, "NO_INVOICE"));
        		this.dsSave.setColumn(0, "DT_INVOICE", this.dsSearch.getColumn(0, "DT_WORK"));
        		this.dsSave.setColumn(0, "AM_INVOICE", "0");
        		this.dsSave.setColumn(0, "CD_INSIT", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsSave.setColumn(0, "CD_OUTSIT", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsSave.setColumn(0, "NO_PO", "");
        		this.dsSave.setColumn(0, "CD_VENDOR", "");
        		this.dsSave.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        		this.dsSave.setColumn(0, "RM_BIGO", this.dsSearch.getColumn(0, "BiGo"));

        		var strSvcId    = "delete";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "save=dsSave";
        		var outData     = "dsOutput=save";
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
        };
        this.fnSaveAf_callback = function(strId, val) {
        	if(val == true)
        	{
        		this.conflag = "I";
        		this.fnConfirm_callback(strId, val);
        	}
        	else
        	{
        		this._SAVE_SELECT_CHK = false;
        		this.fn_masterinfo();
        	}
        };


        // 공종코드 적용
        this.fnCost = function()
        {
        	this.divSearch.form.ccfCD_COST.form.fnPopup();
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsSearch.addEventHandler("oncolumnchanged",this.dsSearch_oncolumnchanged,this);
        };
        this.loadIncludeScript("DMB_INVOICECPS.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
