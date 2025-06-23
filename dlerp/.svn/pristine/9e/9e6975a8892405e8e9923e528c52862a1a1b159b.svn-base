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
            this.set_titletext("도급기성-청구목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DOFPR_CONST_DEMAND_LIST_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BONBU\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"GRID_HIDE_CHK1\" type=\"STRING\" size=\"256\"/><Column id=\"GRID_HIDE_CHK2\" type=\"STRING\" size=\"256\"/><Column id=\"GRID_HIDE_CHK3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GRID_HIDE_CHK1\">N</Col><Col id=\"GRID_HIDE_CHK2\">N</Col><Col id=\"GRID_HIDE_CHK3\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_BONBU", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_PROJ", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_FIELD","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("현장코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_FIELD","staCD_FIELD:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DOXPR_CONTRCT_CODEFIND");
            obj.getSetter("CDTextWidth").set("65");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_BONBU","ccfCD_FIELD:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("공사분야");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCD_BONBU","staCD_BONBU:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsCD_BONBU");
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("cchkYN_HIDE1","ccboCD_BONBU:0.0","10.0","97","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("계약금 정보");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("N ");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("cchkYN_HIDE3","cchkYN_HIDE1:0.0","10.0","74","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("전표 정보");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("N");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("cchkYN_HIDE2","cchkYN_HIDE3:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("선수금 정보");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("N ");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_PROJ","cchkYN_HIDE2:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("프로젝트구분");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_PROJ","staTY_PROJ:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTY_PROJ");
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","55",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_FIELD.form.CDTextBox","value","dsSearch","CD_FIELD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_FIELD.form.DSTextBox","value","dsSearch","DS_FIELD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccboCD_BONBU","value","dsSearch","CD_BONBU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cchkYN_HIDE1","value","dsSearch","GRID_HIDE_CHK1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cchkYN_HIDE3","value","dsSearch","GRID_HIDE_CHK3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cchkYN_HIDE2","value","dsSearch","GRID_HIDE_CHK2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccboTY_PROJ","value","dsSearch","TY_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DOF_CONST_DEMAND_LIST.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetCombo();
        	this.fnSetParameter();

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE)){
        		this.dsSearch.setColumn(0, "CD_FIELD", this.getOwnerFrame().CD_SITE);
        		this.dsSearch.setColumn(0, "DS_FIELD", this.getOwnerFrame().DS_SITE);
        	}
        	this.fnSetButton();

        };


        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	//권한설정
        	var id_group = this.FormInfo.ID_GROUP;
        	var gr_search = this.FormInfo.GR_SEARCH;
        	var cd_role = this.FormInfo.CD_ROLE;
        	var cd_bonbu = this.objApp.gdsUserInfo.getColumn(0, "CD_COSTCENTER");
        	var cd_field = this.objApp.gdsUserInfo.getColumn(0, "CD_SITE");
        	var ds_field = this.objApp.gdsUserInfo.getColumn(0, "DS_SITE");

        	if(cd_role=="R70") {	//공공민간
        		this.ccboTY_PROJ.set_value("SA00101");
        		this.ccboTY_PROJ.set_enable(false);
        	}else if(cd_role=="R71") {	//주택
        		this.ccboTY_PROJ.set_value("SA00102");
        		this.ccboTY_PROJ.set_enable(false);
        	}else if(cd_role=="R72") {	//soc
        		this.ccboTY_PROJ.set_value("SA00103");
        		this.ccboTY_PROJ.set_enable(false);
        	} else{
        		switch(gr_search) {
        		case "3":	//본부
        			//this.ccboTY_PROJ.set_enable(false);
        			//this.ccboCD_BONBU.set_enable(false);
        			break;
        		case "7":	//부서
        			this.ccboTY_PROJ.set_enable(false);
        			this.dsSearch.setColumn(0,"CD_BONBU",cd_bonbu);
        			this.ccboCD_BONBU.set_enable(false);
        			this.dsSearch.setColumn(0,"CD_FIELD",cd_field);
        			this.dsSearch.setColumn(0,"DS_FIELD",ds_field);
        			this.ccfCD_FIELD.set_enable(false);
        			break;
        		default:
        		}
        	}
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnCreate= this.gfnFormButtonAdd("btnCreate", "fnCreate"); //등록
        	this.btnUpdate = this.gfnFormButtonAdd("btnUpdate", "fnUpdate"); //편집

        	this.btnCreate.set_enable(false);
        	this.btnUpdate.set_enable(false);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	//주택 구분코드
        	this.ARCH_TY_PROJ = "SA00102";

        	this.ccboCD_BONBU = this.divSearch.form.ccboCD_BONBU;
        	this.ccfCD_FIELD = this.divSearch.form.ccfCD_FIELD; //현장코드
        	this.ccboTY_PROJ = this.divSearch.form.ccboTY_PROJ;
        	this.dxGrid = this.divData.form.objGrid;
        	this.dxGrid.sort = "false";
        };


        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_FIELD.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DO", "DOF_CONST_DEMAND_LIST", "NM_CHG_CONT" , "NO_LVL");

        	var flag_cell = this.dxGrid.getBindCellIndex("body", this.ucFlag);
        	var sort_cell = this.dxGrid.getBindCellIndex("body", this.ucSort);
        	for(var i = 0; i < this.dxGrid.getCellCount("body"); i++) {
        		if(i == flag_cell || i == sort_cell) continue;
        		this.dxGrid.setCellProperty("body", i, "cssclass", "expr: NO_LVL == '0' ? 'BACK_GangJo' : TY_CONT == 'SA07502' && NO_LVL == '1' ? 'BACK_SoKe' : ''");
        	}

         	//체크박스에 따른 숨김처리할 index
        	this.hideColAM_SUP = this.dxGrid.getBindCellIndex("body", "AM_SUP"); //100
        	this.hideColAM_VAT = this.dxGrid.getBindCellIndex("body", "AM_VAT"); //100
        	this.hideColAM_TXF = this.dxGrid.getBindCellIndex("body", "AM_TXF"); //100
        	this.hideColAM_TOT = this.dxGrid.getBindCellIndex("body", "AM_TOT"); //100

        	this.hideColAM_PRE_SUP = this.dxGrid.getBindCellIndex("body", "AM_PRE_SUP"); //100
        	this.hideColAM_PRE_VAT = this.dxGrid.getBindCellIndex("body", "AM_PRE_VAT"); //100
        	this.hideColAM_PRE_TXF = this.dxGrid.getBindCellIndex("body", "AM_PRE_TXF"); //100
        	this.hideColAM_PRE_TOT = this.dxGrid.getBindCellIndex("body", "AM_PRE_TOT"); //100

        	this.hideColDS_VENDOR = this.dxGrid.getBindCellIndex("body", "DS_VENDOR"); //150
        	this.hideColCD_SLIP = this.dxGrid.getBindCellIndex("body", "CD_SLIP"); //80
        	this.hideColCD_SLIP2 = this.dxGrid.getBindCellIndex("body", "CD_SLIP2"); //80
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
        	var rowNoCont = this.dsList.getColumn(e.row, "NO_CONT");
        	var rowNoDmd = this.dsList.getColumn(e.row, "NO_DMD");

        	if(!this.gfnIsNull(rowNoCont)){
        		if(!this.gfnIsNull(rowNoDmd)){
        			this.btnUpdate.set_enable(true);
        		} else {
        			this.btnUpdate.set_enable(false);
        		}

        		this.btnCreate.set_enable(true);

        	} else {
        		this.btnCreate.set_enable(false);
        		this.btnUpdate.set_enable(false);
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow)
        {
        	if(id == "ccfCD_FIELD"){
        		dsUserParam.setColumn(nrow, "TY_PROJ", "");
        		this.CD_BONBU = this.gfnIsNull(this.dsSearch.getColumn(0, "CD_BONBU")) ? "" : this.dsSearch.getColumn(0, "CD_BONBU");
        		dsUserParam.setColumn(nrow, "CD_BONBU", this.CD_BONBU);
        	}

        	return true;
        }


        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(0, "CD_TYPE", "16");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(1, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(1, "CD_TYPE", "01");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCD_BONBU=combo0 dsTY_PROJ=combo1";
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
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_PROJ", "string");
        	this.dsSelect.addColumn("CD_BONBU", "string");
        	this.dsSelect.addColumn("CD_FIELD", "string");
        }

        this.fnSelect = function(){
        	this.gfnGridBeforeSelect(this.dxGrid);

        	if(this.gfnIsNull(this.dsSearch.getColumn(0,"TY_PROJ")) && this.gfnIsNull(this.dsSearch.getColumn(0,"CD_BONBU")) && this.gfnIsNull(this.dsSearch.getColumn(0,"CD_FIELD"))){
        		this.gfnAlert("프로젝트 구분, 공사분야, 현장코드 중 하나의 조회 조건은 반드시 입력 하셔야 합니다.");
        		return false;
        	}

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "TY_PROJ", this.dsSearch.getColumn(0, "TY_PROJ"));
        	this.dsSelect.setColumn(0, "CD_BONBU", this.dsSearch.getColumn(0, "CD_BONBU"));
        	this.dsSelect.setColumn(0, "CD_FIELD", this.dsSearch.getColumn(0, "CD_FIELD"));

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
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
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
        	if(svcID == "combo"){
        		this.dsCD_BONBU.insertRow(0);
         		this.dsCD_BONBU.setColumn(0, "CD_CODE", "");
         		this.dsCD_BONBU.setColumn(0, "DS_CODE", "전체");
        		this.ccboCD_BONBU.set_index(0);

        		this.dsTY_PROJ.insertRow(0);
        		this.dsTY_PROJ.setColumn(0, "CD_CODE", "");
        		this.dsTY_PROJ.setColumn(0, "DS_CODE", "전체");
        		this.ccboTY_PROJ.set_index(0);
        	} else if(svcID == "select"){
        		this.gfnGridAfterSelect(this.dxGrid);
        		// 트리 접는 로직.
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_FIELD"))){
        			this.dxGrid.set_treeinitstatus("collapse,all");
        		} else {
        			this._gfnGridTreeOpen(this.dxGrid, 3);
        		}

        		this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	}
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         * 등록
         ************************************************************************/
        this.fnCreate = function(obj,e){

        	if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "NO_CONT"))){
        		return;
        	}
        	var param = {
        		CD_FIELD : this.dsList.getColumn(this.dsList.rowposition, "CD_FIELD")
        	  , NO_CONT  : this.dsList.getColumn(this.dsList.rowposition, "NO_CONT")
        	  , TYPE     : "Y"
        	}

        	this.gfnFormOpen("DOF", "DOF_CONST_DEMAND", "fnDialogCallback", param, 1000, 720);

        }
        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
          * 편집
         ************************************************************************/
        this.fnUpdate = function(obj,e){
        	if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "NO_DMD"))){
        		return;
        	}
        	var param = {
        		CD_FIELD : this.dsList.getColumn(this.dsList.rowposition, "CD_FIELD")
        	  , NO_CONT  : this.dsList.getColumn(this.dsList.rowposition, "NO_CONT")
        	  , NO_DMD   : this.dsList.getColumn(this.dsList.rowposition, "NO_DMD")
        	}

        	this.gfnFormOpen("DOF", "DOF_CONST_DEMAND", "fnDialogCallback", param, 1000, 720);
        }

        this.divSearch_ccboCD_BONBU_onitemchanged = function(obj,e)
        {
        	this.dsSearch.setColumn(0, "CD_FIELD", "");
        	this.dsSearch.setColumn(0, "DS_FIELD", "");
        };

        this.divData_objGrid_oncelldblclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "NO_DMD"))){
        		return;
        	}
        	var param = {
        		CD_FIELD : this.dsList.getColumn(this.dsList.rowposition, "CD_FIELD")
        	  , NO_CONT  : this.dsList.getColumn(this.dsList.rowposition, "NO_CONT")
        	  , NO_DMD   : this.dsList.getColumn(this.dsList.rowposition, "NO_DMD")
        	}

        	this.gfnFormOpen("DOF", "DOF_CONST_DEMAND", "fnDialogCallback", param, 1000, 720);
        };

        this.fnDialogCallback = function(svcID, value) {
        	this.FormBtns.Select.click();
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.columnid=="GRID_HIDE_CHK1" || e.columnid=="GRID_HIDE_CHK2" || e.columnid=="GRID_HIDE_CHK3"){
        		return;
        	}
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };


        this.divSearch_cchkYN_HIDE1_onchanged = function(obj,e)
        {
        // 	this.hideColAM_SUP = this.dxGrid.getBindCellIndex("body", "AM_SUP"); //100
        // 	this.hideColAM_VAT = this.dxGrid.getBindCellIndex("body", "AM_VAT"); //100
        // 	this.hideColAM_TXF = this.dxGrid.getBindCellIndex("body", "AM_TXF"); //100
        // 	this.hideColAM_TOT = this.dxGrid.getBindCellIndex("body", "AM_TOT"); //100

        	if(e.postvalue == "Y"){
        		//표시
        		this.dxGrid.setFormatColProperty(this.hideColAM_SUP, "size", 100);
        		this.dxGrid.setFormatColProperty(this.hideColAM_VAT, "size", 100);
        		this.dxGrid.setFormatColProperty(this.hideColAM_TXF, "size", 100);
        		this.dxGrid.setFormatColProperty(this.hideColAM_TOT, "size", 100);
        	} else {
        		//숨김
        		this.dxGrid.setFormatColProperty(this.hideColAM_SUP, "size", 0);
        		this.dxGrid.setFormatColProperty(this.hideColAM_VAT, "size", 0);
        		this.dxGrid.setFormatColProperty(this.hideColAM_TXF, "size", 0);
        		this.dxGrid.setFormatColProperty(this.hideColAM_TOT, "size", 0);
        	}
        };


        this.divSearch_cchkYN_HIDE2_onchanged = function(obj,e)
        {
        // 	this.hideColAM_PRE_SUP = this.dxGrid.getBindCellIndex("body", "AM_PRE_SUP"); //100
        // 	this.hideColAM_PRE_VAT = this.dxGrid.getBindCellIndex("body", "AM_PRE_VAT"); //100
        // 	this.hideColAM_PRE_TXF = this.dxGrid.getBindCellIndex("body", "AM_PRE_TXF"); //100
        // 	this.hideColAM_PRE_TOT = this.dxGrid.getBindCellIndex("body", "AM_PRE_TOT"); //100

        	if(e.postvalue == "Y"){
        		//표시
        		this.dxGrid.setFormatColProperty(this.hideColAM_PRE_SUP, "size", 100);
        		this.dxGrid.setFormatColProperty(this.hideColAM_PRE_VAT, "size", 100);
        		this.dxGrid.setFormatColProperty(this.hideColAM_PRE_TXF, "size", 100);
        		this.dxGrid.setFormatColProperty(this.hideColAM_PRE_TOT, "size", 100);
        	} else {
        		//숨김
        		this.dxGrid.setFormatColProperty(this.hideColAM_PRE_SUP, "size", 0);
        		this.dxGrid.setFormatColProperty(this.hideColAM_PRE_VAT, "size", 0);
        		this.dxGrid.setFormatColProperty(this.hideColAM_PRE_TXF, "size", 0);
        		this.dxGrid.setFormatColProperty(this.hideColAM_PRE_TOT, "size", 0);
        	}
        };

        this.divSearch_cchkYN_HIDE3_onchanged = function(obj,e)
        {
        // 	this.hideColDS_VENDOR = this.dxGrid.getBindCellIndex("body", "DS_VENDOR"); //150
        // 	this.hideColCD_SLIP = this.dxGrid.getBindCellIndex("body", "CD_SLIP"); //80
        // 	this.hideColCD_SLIP2 = this.dxGrid.getBindCellIndex("body", "CD_SLIP2"); //80

        	if(e.postvalue == "Y"){
        		//표시
        		this.dxGrid.setFormatColProperty(this.hideColDS_VENDOR, "size", 150);
        		this.dxGrid.setFormatColProperty(this.hideColCD_SLIP, "size", 150);
        		this.dxGrid.setFormatColProperty(this.hideColCD_SLIP2, "size", 150);
        	} else {
        		//숨김
        		this.dxGrid.setFormatColProperty(this.hideColDS_VENDOR, "size", 0);
        		this.dxGrid.setFormatColProperty(this.hideColCD_SLIP, "size", 0);
        		this.dxGrid.setFormatColProperty(this.hideColCD_SLIP2, "size", 0);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccboCD_BONBU.addEventHandler("onitemchanged",this.divSearch_ccboCD_BONBU_onitemchanged,this);
            this.divSearch.form.cchkYN_HIDE1.addEventHandler("onchanged",this.divSearch_cchkYN_HIDE1_onchanged,this);
            this.divSearch.form.cchkYN_HIDE3.addEventHandler("onchanged",this.divSearch_cchkYN_HIDE3_onchanged,this);
            this.divSearch.form.cchkYN_HIDE2.addEventHandler("onchanged",this.divSearch_cchkYN_HIDE2_onchanged,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DOF_CONST_DEMAND_LIST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
