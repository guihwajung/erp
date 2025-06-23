(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DWA_SILHENG");
            this.set_titletext("작업현황모니터링");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWZPR_SITE_WORK_STATUS_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BONBU\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_RP", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_RP\" type=\"STRING\" size=\"256\"/><Column id=\"NM_RP\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CSCT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_RP\"/><Col id=\"NM_RP\"/><Col id=\"NO_CSCT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_BONBU", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_LOC", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_PROJ", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_CONT", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","sta00:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("기성년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.getSetter("dateformat").set("yyyy-mm");
            obj.getSetter("editformat").set("yyyymm");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_BONBU","ctclYM_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("본부");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCD_BONBU","staCD_BONBU:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsCD_BONBU");
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccboCD_BONBU","value","dsSearch","CD_BONBU");
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
        this.registerScript("DWZ_SITE_WORK_STATUS.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.DWA_SILHENG_onload = function(obj,e)
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
        	this.fnSetCombo();


        	// 기성년월 초기값 추가.
           if(this.gfnIsNull(this.getOwnerFrame().YM_WORK))
           {
        		var today = this.gfnGetDate();
        		this.dsSearch.setColumn(0,"YM_WORK",today.substr(0,6));
           }

        	//this.divSearch_chkYN_DOKUB_onchanged(this.divSearch.form.chkYN_DOKUB, {postvalue:this.divSearch.form.chkYN_DOKUB.value});
        	//this.divSearch_chkYN_GAP_onchanged(this.divSearch.form.chkYN_GAP, {postvalue:this.divSearch.form.chkYN_GAP.value});
        	//divSearch.form.chkYN_GAP
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {

        	this.btn3=this.gfnFormButtonAdd("dodContList","fnDodContList");
        	this.btn4=this.gfnFormButtonAdd("dofConstDemandList","fnDofConstDemandList");
        	this.btn5=this.gfnFormButtonAdd("dofConstCollectList","fnDofConstCollectList");
        	this.btn6=this.gfnFormButtonAdd("dwbHdgisungmonth","fnDwbHdgisungmonth");
        	this.btn7=this.gfnFormButtonAdd("dwbHdgisungslip","fnDwbHdgisungslip");
        	this.btn8=this.gfnFormButtonAdd("dwbEtax_list","fnDwbEtax_list");
        	this.btn9=this.gfnFormButtonAdd("dwdMagamlist","fnDwdMagamlist");
        	this.btn10=this.gfnFormButtonAdd("dwdSitemagam","fnDwdSitemagam");
        	this.btn11=this.gfnFormButtonAdd("dwtTujaadjust","fnDwtTujaadjust");
        	this.btn12=this.gfnFormButtonAdd("dwdJtcost","fnDwdJtcost");
        	this.btn13=this.gfnFormButtonAdd("dweDaebiDhAll","fnDweDaebiDhAll");


        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	//this.ccfCD_RP = this.divSearch.form.ccfCD_RP;
        	this.dxGrid = this.divData.form.objGrid;
        };

        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(0, "CD_TYPE", "16");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(1, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(1, "CD_TYPE", "10");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(2, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(2, "CD_TYPE", "02");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(3, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(3, "CD_TYPE", "01");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCD_BONBU=combo0 dsTY_CONT=combo1 dsCD_LOC=combo2 dsTY_PROJ=combo3";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,false); // 통신방법 정의 [생략가능]
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        // 	this.ccfCD_RP.CodeFindName = "DWX_CFRP";
        // 	this.dxGrid.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        //
        // 	this.ccfCD_RP.AfterCDTextChanged = "ccfCD_RP_AfterCDTextChanged";
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWZ_SITE_WORK_STATUS", "DS_SITE");
        	//this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        }


        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");
        	this.dsSelect.addColumn("TY_KONG_PRO", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("CD_COST", "string");
        	this.dsSave.addColumn("CD_RP", "string");
        	this.dsSave.addColumn("CD_STD", "string");
        	this.dsSave.addColumn("RM_BIGO", "string");
        	this.dsSave.addColumn("CD_GBIMOK", "string");
        	this.dsSave.addColumn("YN_COST", "string");
        	this.dsSave.addColumn("DS_UNIT", "string");

        	this.dsSave.addColumn("CD_DKCOST", "string");
        	this.dsSave.addColumn("DS_COST", "string");





        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	/*if(!this.fnValidate()) return;*/

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsSelect.setColumn(0, "TY_KONG_PRO", this.dsSearch.getColumn(0, "CD_BONBU"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
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
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);

        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "CD_COST", this.dsList.getColumn(i, "CD_COST"));
        				this.dsSave.setColumn(nrow, "CD_RP", this.dsList.getColumn(i, "CD_RP"));
        				this.dsSave.setColumn(nrow, "CD_STD", this.dsList.getColumn(i, "CD_STD"));
        				this.dsSave.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsSave.setColumn(nrow, "CD_GBIMOK", this.dsList.getColumn(i, "CD_GBIMOK"));
        				this.dsSave.setColumn(nrow, "YN_COST", this.dsList.getColumn(i, "YN_COST"));
        				this.dsSave.setColumn(nrow, "DS_UNIT", this.dsList.getColumn(i, "DS_UNIT"));
        				this.dsSave.setColumn(nrow, "DS_COST", this.dsList.getColumn(i, "DS_COST"));
        				this.dsSave.setColumn(nrow, "CD_DKCOST", this.dsList.getColumn(i, "CD_DKCOST"));
        				break;
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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
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
        this.fnValidate = function() {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드는 필수입력 값입니다.");
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
         		this._gfnGridTreeOpen(this.dxGrid, 1);
        	}else if(svcID == "save") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		this.FormBtns.Select.click();
        	}
        }



        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };


        this.fnDodContList = function(obj,e) {
        	var param = {};
        	var rowposition = this.dsList.rowposition;

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.DS_CONTMETHOD = this.FormInfo.DS_PARAM;
        	param.YM_WORK = this.dsSearch.getColumn(0, "YM_WORK");
        	/*param.CD_BONBU = this.dsSearch.getColumn(0, "CD_BONBU");*/

        	// TODO : param 추가가 있을지 모르겠음.
        	if(rowposition > -1){
        		param.CD_SITE = this.dsList.getColumn(rowposition, "CD_SITE");
        		param.DS_SITE = this.dsList.getColumn(rowposition, "DS_SITE");
        		param.CD_BONBU = this.dsList.getColumn(rowposition, "CD_BONBU");

        	}

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DOD_CONT_LIST", "", param);
        }

        this.fnDofConstDemandList = function(obj,e) {
        	var param = {};
        	var rowposition = this.dsList.rowposition;

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.DS_CONTMETHOD = this.FormInfo.DS_PARAM;
        	param.YM_WORK = this.dsSearch.getColumn(0, "YM_WORK");
        	/*param.CD_BONBU = this.dsSearch.getColumn(0, "CD_BONBU");*/

        	// TODO : param 추가가 있을지 모르겠음.
        	if(rowposition > -1){
        		param.CD_SITE = this.dsList.getColumn(rowposition, "CD_SITE");
        		param.DS_SITE = this.dsList.getColumn(rowposition, "DS_SITE");
        		param.CD_BONBU = this.dsList.getColumn(rowposition, "CD_BONBU");

        	}

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DOF_CONST_DEMAND_LIST", "", param);
        }
        this.fnDofConstCollectList = function(obj,e) {
        	var param = {};
        	var rowposition = this.dsList.rowposition;

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.DS_CONTMETHOD = this.FormInfo.DS_PARAM;
        	param.YM_WORK = this.dsSearch.getColumn(0, "YM_WORK");
        	/*param.CD_BONBU = this.dsSearch.getColumn(0, "CD_BONBU");*/

        	// TODO : param 추가가 있을지 모르겠음.
        	if(rowposition > -1){
        		param.CD_SITE = this.dsList.getColumn(rowposition, "CD_SITE");
        		param.DS_SITE = this.dsList.getColumn(rowposition, "DS_SITE");
        		param.CD_BONBU = this.dsList.getColumn(rowposition, "CD_BONBU");

        	}

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DOF_CONST_COLLECT_LIST", "", param);
        }
        this.fnDwbHdgisungmonth = function(obj,e) {
        	var param = {};
        	var rowposition = this.dsList.rowposition;

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.DS_CONTMETHOD = this.FormInfo.DS_PARAM;
        	param.YM_WORK = this.dsSearch.getColumn(0, "YM_WORK");
        	/*param.CD_BONBU = this.dsSearch.getColumn(0, "CD_BONBU");*/

        	// TODO : param 추가가 있을지 모르겠음.
        	if(rowposition > -1){
        		param.CD_SITE = this.dsList.getColumn(rowposition, "CD_SITE");
        		param.DS_SITE = this.dsList.getColumn(rowposition, "DS_SITE");
        		param.CD_BONBU = this.dsList.getColumn(rowposition, "CD_BONBU");

        	}

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWB_HDGISUNGMONTH", "", param);
        }
        this.fnDwbHdgisungslip = function(obj,e) {
        	var param = {};
        	var rowposition = this.dsList.rowposition;

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.DS_CONTMETHOD = this.FormInfo.DS_PARAM;
        	param.YM_WORK = this.dsSearch.getColumn(0, "YM_WORK");
        	/*param.CD_BONBU = this.dsSearch.getColumn(0, "CD_BONBU");*/

        	// TODO : param 추가가 있을지 모르겠음.
        	if(rowposition > -1){
        		param.CD_SITE = this.dsList.getColumn(rowposition, "CD_SITE");
        		param.DS_SITE = this.dsList.getColumn(rowposition, "DS_SITE");
        		param.CD_BONBU = this.dsList.getColumn(rowposition, "CD_BONBU");

        	}

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWB_HDGISUNGSLIP", "", param);
        }
        this.fnDwbEtax_list = function(obj,e) {
        	var param = {};
        	var rowposition = this.dsList.rowposition;

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.DS_CONTMETHOD = this.FormInfo.DS_PARAM;
        	param.YM_WORK = this.dsSearch.getColumn(0, "YM_WORK");
        	/*param.CD_BONBU = this.dsSearch.getColumn(0, "CD_BONBU");*/

        	// TODO : param 추가가 있을지 모르겠음.
        	if(rowposition > -1){
        		param.CD_SITE = this.dsList.getColumn(rowposition, "CD_SITE");
        		param.DS_SITE = this.dsList.getColumn(rowposition, "DS_SITE");
        		param.CD_BONBU = this.dsList.getColumn(rowposition, "CD_BONBU");

        	}

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWB_ETAX_LIST", "", param);
        }
        this.fnDwdMagamlist = function(obj,e) {
        	var param = {};
        	var rowposition = this.dsList.rowposition;

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.DS_CONTMETHOD = this.FormInfo.DS_PARAM;
        	param.YM_WORK = this.dsSearch.getColumn(0, "YM_WORK");
        	/*param.CD_BONBU = this.dsSearch.getColumn(0, "CD_BONBU");*/

        	// TODO : param 추가가 있을지 모르겠음.
        	if(rowposition > -1){
        		param.CD_SITE = this.dsList.getColumn(rowposition, "CD_SITE");
        		param.DS_SITE = this.dsList.getColumn(rowposition, "DS_SITE");
        		param.CD_BONBU = this.dsList.getColumn(rowposition, "CD_BONBU");

        	}

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWD_MAGAMLIST", "", param);
        }
        this.fnDwdSitemagam = function(obj,e) {
        	var param = {};
        	var rowposition = this.dsList.rowposition;

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.DS_CONTMETHOD = this.FormInfo.DS_PARAM;
        	param.YM_WORK = this.dsSearch.getColumn(0, "YM_WORK");
        	/*param.CD_BONBU = this.dsSearch.getColumn(0, "CD_BONBU");*/

        	// TODO : param 추가가 있을지 모르겠음.
        	if(rowposition > -1){
        		param.CD_SITE = this.dsList.getColumn(rowposition, "CD_SITE");
        		param.DS_SITE = this.dsList.getColumn(rowposition, "DS_SITE");
        		param.CD_BONBU = this.dsList.getColumn(rowposition, "CD_BONBU");

        	}

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWD_SITEMAGAM", "", param);
        }
        this.fnDwtTujaadjust = function(obj,e) {
        	var param = {};
        	var rowposition = this.dsList.rowposition;

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.DS_CONTMETHOD = this.FormInfo.DS_PARAM;
        	param.YM_WORK = this.dsSearch.getColumn(0, "YM_WORK");
        	/*param.CD_BONBU = this.dsSearch.getColumn(0, "CD_BONBU");*/

        	// TODO : param 추가가 있을지 모르겠음.
        	if(rowposition > -1){
        		param.CD_SITE = this.dsList.getColumn(rowposition, "CD_SITE");
        		param.DS_SITE = this.dsList.getColumn(rowposition, "DS_SITE");
        		param.CD_BONBU = this.dsList.getColumn(rowposition, "CD_BONBU");

        	}

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWT_TUJAADJUST", "", param);
        }
        this.fnDwdJtcost = function(obj,e) {
        	var param = {};
        	var rowposition = this.dsList.rowposition;

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.DS_CONTMETHOD = this.FormInfo.DS_PARAM;
        	param.YM_WORK = this.dsSearch.getColumn(0, "YM_WORK");
        	/*param.CD_BONBU = this.dsSearch.getColumn(0, "CD_BONBU");*/

        	// TODO : param 추가가 있을지 모르겠음.
        	if(rowposition > -1){
        		param.CD_SITE = this.dsList.getColumn(rowposition, "CD_SITE");
        		param.DS_SITE = this.dsList.getColumn(rowposition, "DS_SITE");
        		param.CD_BONBU = this.dsList.getColumn(rowposition, "CD_BONBU");

        	}

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWD_JTCOST", "", param);
        }
        this.fnDweDaebiDhAll = function(obj,e) {
        	var param = {};
        	var rowposition = this.dsList.rowposition;

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.DS_CONTMETHOD = this.FormInfo.DS_PARAM;
        	param.YM_WORK = this.dsSearch.getColumn(0, "YM_WORK");
        	/*param.CD_BONBU = this.dsSearch.getColumn(0, "CD_BONBU");*/

        	// TODO : param 추가가 있을지 모르겠음.
        	if(rowposition > -1){
        		param.CD_SITE = this.dsList.getColumn(rowposition, "CD_SITE");
        		param.DS_SITE = this.dsList.getColumn(rowposition, "DS_SITE");
        		param.CD_BONBU = this.dsList.getColumn(rowposition, "CD_BONBU");

        	}

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWE_DAEBI_DH_ALL", "", param);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DWA_SILHENG_onload,this);
            this.divData.form.objGrid.addEventHandler("oncellposchanged",this.divData_objGrid_oncellposchanged,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWZ_SITE_WORK_STATUS.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
