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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCBPR_ESTIMATION_DOCU_BID_VENDOR_DX_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DCBPR_ESTIMATIONDETAIL_UPDATE_ENG</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DCBPR_ESTIMATION_EBID_VENDOR_DX_INSERT</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DCBPR_ESTIMATION_EBID_VENDOR_DX_DELETE</Col></Row><Row><Col id=\"TARGET\">t_select</Col><Col id=\"SP\">DCBPR_ESTIMATIONDETAIL_EXCEL_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BID\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
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
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("FitToContents").set("true");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_BID","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("입찰번호");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_BID","staNO_BID:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DCX_CFORDERPLAN_01");
            obj.getSetter("FitToContents").set("true");
            obj.getSetter("CDTextWidth").set("120");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","ccfNO_BID:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("거래처");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","staCD_VENDOR:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DCX_CFVENDOR_COMMON");
            obj.getSetter("FitToContents").set("true");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridExcel","521","125",null,null,"119","220",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfNO_BID.form.CDTextBox","value","dsSearch","NO_BID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCB_ESTIMATIONVENDORSAV_ENG.xfdl", function() {
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

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().NO_BID)
        	&& !this.gfnIsNull(this.getOwnerFrame().CD_VENDOR))
        	{
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		this.dsSearch.setColumn(0, "NO_BID", this.getOwnerFrame().NO_BID);
        		this.divSearch.form.ccfNO_BID.form.DSTextBox.set_value(this.getOwnerFrame().DS_BID);
        		this.dsSearch.setColumn(0, "CD_VENDOR", this.getOwnerFrame().CD_VENDOR);
        		this.divSearch.form.ccfCD_VENDOR.form.DSTextBox.set_value(this.getOwnerFrame().DS_VENDOR);

        		this.FormBtns.Select.click();
        	}

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	if(this.getOwnerFrame().YN_SUCCESS == "Y") {
        		this.divTopBtn.set_visible(false);
        	}
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
             this.btnExcelDn = this.gfnFormButtonAdd("btnExcelDn", "fnExcelDn"); 	//엑셀양식다운
        	 this.btnExcelUp = this.gfnFormButtonAdd("btnExcelUp", "fnExcelUp"); 	//엑셀양식업로드
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfNO_BID = this.divSearch.form.ccfNO_BID;
        	this.ccfCD_VENDOR = this.divSearch.form.ccfCD_VENDOR;

        	this.dxGrid = this.divData.form.objGrid;
        	this.dxGrid1 = this.divData.form.objGridExcel;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfNO_BID.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCB_ESTIMATIONVENDORSAVE_ENG", "DS_COST", "GR_COST");
        	//this.dxGrid.AfterEdit = "fnGrid_AfterEdit";
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        	this.dxGrid.sort = "false";

        	this.gfnGridInit(this.dxGrid1, this.dsList, "DC", "DCB_ESTIMATIONDETAIL_EXCEL");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("NO_BID", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("NO_BID", "string");
        	this.dsUpdate.addColumn("CD_SITE", "string");
        	this.dsUpdate.addColumn("NO_PR", "string");
        	this.dsUpdate.addColumn("CD_COST", "string");
        	this.dsUpdate.addColumn("CD_VENDOR", "string");
        	this.dsUpdate.addColumn("UP_TT_HADO", "string");
        	this.dsUpdate.addColumn("AM_TT_HADO", "string");
        	this.dsUpdate.addColumn("UP_MATERIAL", "string");
        	this.dsUpdate.addColumn("UP_LABOR", "string");
        	this.dsUpdate.addColumn("UP_COST", "string");
        	this.dsUpdate.addColumn("UP_EQUIP", "string");
        	this.dsUpdate.addColumn("AM_MATERIAL", "string");
        	this.dsUpdate.addColumn("AM_LABOR", "string");
        	this.dsUpdate.addColumn("AM_COST", "string");
        	this.dsUpdate.addColumn("AM_EQUIP", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");
        	this.dsUpdate.addColumn("DS_ITEM", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("NO_BID", "string");
        	this.dsInsert.addColumn("CD_VENDOR", "string");
        	this.dsInsert.addColumn("UP_TT_HADO", "string");
        	this.dsInsert.addColumn("AM_TT_HADO", "string");
        	this.dsInsert.addColumn("UP_MATERIAL", "string");
        	this.dsInsert.addColumn("AM_MATERIAL", "string");
        	this.dsInsert.addColumn("UP_LABOR", "string");
        	this.dsInsert.addColumn("AM_LABOR", "string");
        	this.dsInsert.addColumn("UP_COST", "string");
        	this.dsInsert.addColumn("AM_COST", "string");
        	this.dsInsert.addColumn("DS_ITEM", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("NO_BID", "string");
        	this.dsDelete.addColumn("NO_PR", "string");
        	this.dsDelete.addColumn("CD_COST", "string");
        	this.dsDelete.addColumn("CD_VENDOR", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect t_select=dsSelect";
        	var outData     = "dsList=select0 dsList1=t_select0";
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
        	var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        	this.dsList.setColumn(nrow, "QN_TT_HADO", 1);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	if(!this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_COST"))) {
        		if(this.dsList.getColumn(this.dsList.rowposition, "CD_COST").substr(0, 2) == "EX") {
        			this.gfnGridDel(this.dxGrid);
        		}
        	} else {
        		this.gfnGridDel(this.dxGrid);
        	}
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for(var i =0;i<this.dsList.rowcount;i++){
        		var flag = this.gfnGetFlag(this.dsList, i);
        		if(flag == "I"){
        			var nrow = this.dsInsert.addRow();
        			this.dsInsert.setColumn(nrow, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        			this.dsInsert.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));

        			this.dsInsert.setColumn(nrow, "UP_TT_HADO", this.dsList.getColumn(i, "UP_TT_HADO"));
        			this.dsInsert.setColumn(nrow, "AM_TT_HADO", this.dsList.getColumn(i, "AM_TT_HADO"));
        			this.dsInsert.setColumn(nrow, "UP_MATERIAL", this.dsList.getColumn(i, "UP_MATERIAL"));
        			this.dsInsert.setColumn(nrow, "AM_MATERIAL", this.dsList.getColumn(i, "AM_MATERIAL"));
        			this.dsInsert.setColumn(nrow, "UP_LABOR", this.dsList.getColumn(i, "UP_LABOR"));
        			this.dsInsert.setColumn(nrow, "AM_LABOR", this.dsList.getColumn(i, "AM_LABOR"));
        			this.dsInsert.setColumn(nrow, "UP_EQUIP", this.dsList.getColumn(i, "UP_EQUIP"));
        			this.dsInsert.setColumn(nrow, "AM_EQUIP", this.dsList.getColumn(i, "AM_EQUIP"));
        			this.dsInsert.setColumn(nrow, "UP_COST", this.dsList.getColumn(i, "UP_COST"));
        			this.dsInsert.setColumn(nrow, "AM_COST", this.dsList.getColumn(i, "AM_COST"));

        			this.dsInsert.setColumn(nrow, "DS_ITEM", this.dsList.getColumn(i, "DS_ITEM"));
        		}
        		if(flag == "U"){
        			var nrow = this.dsUpdate.addRow();
        			this.dsUpdate.setColumn(nrow, "NO_BID", this.dsList.getColumn(i, "NO_BID"));
        			this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        			this.dsUpdate.setColumn(nrow, "NO_PR", this.dsList.getColumn(i, "NO_PR"));
        			this.dsUpdate.setColumn(nrow, "CD_COST", this.dsList.getColumn(i, "CD_COST"));
        			this.dsUpdate.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        			this.dsUpdate.setColumn(nrow, "UP_TT_HADO", this.dsList.getColumn(i, "UP_TT_HADO"));
        			this.dsUpdate.setColumn(nrow, "AM_TT_HADO", this.dsList.getColumn(i, "AM_TT_HADO"));
        			this.dsUpdate.setColumn(nrow, "UP_MATERIAL", this.dsList.getColumn(i, "UP_MATERIAL"));
        			this.dsUpdate.setColumn(nrow, "UP_LABOR", this.dsList.getColumn(i, "UP_LABOR"));
        			this.dsUpdate.setColumn(nrow, "UP_COST", this.dsList.getColumn(i, "UP_COST"));
        			this.dsUpdate.setColumn(nrow, "UP_EQUIP", this.dsList.getColumn(i, "UP_EQUIP"));
        			this.dsUpdate.setColumn(nrow, "AM_MATERIAL", this.dsList.getColumn(i, "AM_MATERIAL"));
        			this.dsUpdate.setColumn(nrow, "AM_LABOR", this.dsList.getColumn(i, "AM_LABOR"));
        			this.dsUpdate.setColumn(nrow, "AM_COST", this.dsList.getColumn(i, "AM_COST"));
        			this.dsUpdate.setColumn(nrow, "AM_EQUIP", this.dsList.getColumn(i, "AM_EQUIP"));
        			this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        			this.dsUpdate.setColumn(nrow, "DS_ITEM", this.dsList.getColumn(i, "DS_ITEM"));
        		}
        		if(flag == "D"){
        			var nrow = this.dsDelete.addRow();
        			this.dsDelete.setColumn(nrow, "NO_BID", this.dsSearch.getColumn(0, "NO_BID"));
        			this.dsDelete.setColumn(nrow, "NO_PR", this.dsList.getColumn(i, "NO_PR"));
        			this.dsDelete.setColumn(nrow, "CD_COST", this.dsList.getColumn(i, "CD_COST"));
        			this.dsDelete.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
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
        }

        /************************************************************************
         * 엑셀 양식관련
         ************************************************************************/
        this.fnExcelDn = function() {
        	this.gfnExcelExport(this.dxGrid1);
        };

        this.fnExcelUp = function() {
        	this.gfnExcelImport("dsList1","","A2","fnExcelImportCallback","import",this);
        };

        this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet) {

            dsOut.updateColID("Column1", "NO_BID")
            dsOut.updateColID("Column2", "CD_COST")
            dsOut.updateColID("Column3", "CD_DKCOST")
            dsOut.updateColID("Column4", "DS_ITEM")
            dsOut.updateColID("Column5", "SZ_SIZE")
            dsOut.updateColID("Column6", "DS_UNIT")
            dsOut.updateColID("Column7", "QN_TT_HADO")
            dsOut.updateColID("Column8", "UP_TT_SILHENG")
        	dsOut.updateColID("Column9", "AM_TT_SILHENG")
            dsOut.updateColID("Column10", "UP_MATERIAL")
        	dsOut.updateColID("Column11", "UP_LABOR")
        	dsOut.updateColID("Column12", "UP_COST")
        	dsOut.updateColID("Column13", "YN_COST")

        	this.dsList.set_enableevent(false);

        	for (var i=0; i<dsOut.rowcount; i++) {
        	     var dsOutCost = dsOut.getColumn(i, "CD_COST");
        	    for (var j=0; j<this.dsList.rowcount; j++) {
        		     var dsListCost = this.dsList.getColumn(j, "CD_COST")
        			 if(dsOutCost.toString() == dsListCost.toString()){
        			   this.dsList.setColumn(j, this.ucFlag	  , "U");
        			   this.dsList.setColumn(j, "CD_DKCOST"	  , dsOut.getColumn(i, "CD_DKCOST"));
        			   this.dsList.setColumn(j, "DS_ITEM"	  , dsOut.getColumn(i, "DS_ITEM"));
        			   this.dsList.setColumn(j, "SZ_SIZE"	  , dsOut.getColumn(i, "SZ_SIZE"));
        			   this.dsList.setColumn(j, "DS_UNIT"	  , dsOut.getColumn(i, "DS_UNIT"));
        			   this.dsList.setColumn(j, "QN_TT_HADO"  , dsOut.getColumn(i, "QN_TT_HADO"));
        			   this.dsList.setColumn(j, "UP_MATERIAL" , dsOut.getColumn(i, "UP_MATERIAL"));
        			   this.dsList.setColumn(j, "UP_LABOR"	  , dsOut.getColumn(i, "UP_LABOR"));
        			   this.dsList.setColumn(j, "UP_COST"	  , dsOut.getColumn(i, "UP_COST"));
        			 }
        	    }
        	}
        	this.fnExcelUpDataCal();
        };

        this.fnExcelUpDataCal = function(){

        	for(var i=0; i<this.dsList.rowcount; i++){

        	   var qn_tt_hado = this.dsList.getColumn(i, "QN_TT_HADO");

        	   var up_material = this.dsList.getColumn(i, "UP_MATERIAL");
        	   var up_materialval = nexacro.Decimal(up_material,0);
        	   up_materialval.mulDecimal(qn_tt_hado);
        	   this.dsList.setColumn(i, "AM_MATERIAL", nexacro.floor(up_materialval));

        	   var up_labor = this.dsList.getColumn(i, "UP_LABOR");
        	   var up_laborval = nexacro.Decimal(up_labor,0);
        	   up_laborval.mulDecimal(qn_tt_hado);
        	   this.dsList.setColumn(i, "AM_LABOR", nexacro.floor(up_laborval));

        	   var up_equip = this.dsList.getColumn(i, "UP_EQUIP");
        	   var up_equipval = nexacro.Decimal(up_equip,0);
        	   up_equipval.mulDecimal(qn_tt_hado);
        	   this.dsList.setColumn(i, "AM_EQUIP", nexacro.floor(up_equipval));

        	   var up_cost = this.dsList.getColumn(i, "UP_COST");
        	   var up_costval = nexacro.Decimal(up_cost,0);
        	   up_costval.mulDecimal(qn_tt_hado);
        	   this.dsList.setColumn(i, "AM_COST", nexacro.floor(up_costval));

        	   this.dsList.setColumn(i, "UP_TT_HADO",
        							 nexacro.toNumber(up_material,0) +
        							 nexacro.toNumber(up_labor,0) +
        							 nexacro.toNumber(up_equip,0) +
        							 nexacro.toNumber(up_cost,0));

        	   var am_material = nexacro.toNumber(this.dsList.getColumn(i, "AM_MATERIAL"),0);
        	   var am_labor = nexacro.toNumber(this.dsList.getColumn(i, "AM_LABOR"),0);
        	   var am_equip = nexacro.toNumber(this.dsList.getColumn(i, "AM_EQUIP"),0);
        	   var am_cost = nexacro.toNumber(this.dsList.getColumn(i, "AM_COST"),0);

        	   this.dsList.setColumn(i, "AM_TT_HADO", am_material + am_labor + am_equip + am_cost);

        	}

        	this.dsList.set_enableevent(true);
        	this.gfnSetFormStatus(this, "U");
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
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_BID"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfNO_BID.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("입찰번호를 입력하세요.", "fnVaidateCallback");
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_VENDOR"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_VENDOR.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("거래처를 입력하세요.", "fnVaidateCallback");
        	}

        	return validate;
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
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        // 	if (id == "ccfCD_SITE") {
        // 		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        // 	}

        	if (id == "ccfNO_BID") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")))
        		{
        			this.gfnAlert("현장코드를 입력해주세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_SITE") {
        		// 현장코드 변경시 입찰번호 초기화
        		this.ccfNO_BID.form.fnCodeFindClear();
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        //  this.fnGrid_AfterEdit = function(obj:nexacro.NormalDataset, e:nexacro.DSColChangeEventInfo)
        //  {
        //
        // 	if(e.columnid == "UP_MATERIAL" || e.columnid == "UP_LABOR" || e.columnid == "UP_EQUIP" || e.columnid == "UP_COST")
        // 	{
        // 		if(e.oldvalue != e.newvalue)
        // 		{
        // 			/*
        // 			수식
        // 			재료비금액 = 절사(하도수량 * 재료비단가)
        // 			노무비금액,중기비금액,경비금액
        // 			하도단가 = 재료비단가+노무비단가+중기비단가+경비단가
        // 			하도금액 = 재료비금액+노무비금액+중기비금액+경비금액
        // 			*/
        // 			this.dsList.setColumn(this.dsList.rowposition, "AM_MATERIAL", Math.floor(this.dsList.getColumn(this.dsList.rowposition, "UP_MATERIAL") * this.dsList.getColumn(this.dsList.rowposition, "QN_TT_HADO")));
        // 			this.dsList.setColumn(this.dsList.rowposition, "AM_LABOR", Math.floor(this.dsList.getColumn(this.dsList.rowposition, "UP_LABOR") * this.dsList.getColumn(this.dsList.rowposition, "QN_TT_HADO")));
        // 			this.dsList.setColumn(this.dsList.rowposition, "AM_EQUIP", Math.floor(this.dsList.getColumn(this.dsList.rowposition, "UP_EQUIP") * this.dsList.getColumn(this.dsList.rowposition, "QN_TT_HADO")));
        // 			this.dsList.setColumn(this.dsList.rowposition, "AM_COST", Math.floor(this.dsList.getColumn(this.dsList.rowposition, "UP_COST") * this.dsList.getColumn(this.dsList.rowposition, "QN_TT_HADO")));
        //
        // 			var mdan = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition, "UP_MATERIAL"));	//재료비단가
        // 			var ldan = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition, "UP_LABOR"));		//노무비단가
        // 			var edan = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition, "UP_EQUIP"));		//중기비단가
        // 			var cdan = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition, "UP_COST"));		//경비단가
        // 			this.dsList.setColumn(this.dsList.rowposition, "UP_TT_HADO", mdan+ldan+edan+cdan);
        //
        // 			var mamt = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition, "AM_MATERIAL"));	//재료비금액
        // 			var lamt = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition, "AM_LABOR"));		//노무비금액
        // 			var eamt = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition, "AM_EQUIP"));		//중기비금액
        // 			var camt = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition, "AM_COST"));		//경비금액
        // 			this.dsList.setColumn(this.dsList.rowposition, "AM_TT_HADO", mamt+lamt+eamt+camt);
        // 		}
        // 	}
        //
         //}
        this.fnGrid_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);

        // 	if(colnm == "FILE_NM" || colnm == "BTN_FILE") return true;
        //
        // 	if(this.dsList1.getColumn(row, "YN_EDIT") != "Y")
        // 	{
        // 		return false;
        // 	}

        	if(colnm == "DS_ITEM") {
        		if(!this.gfnIsNull(this.dsList.getColumn(row, "CD_COST"))) {
        			if(this.dsList.getColumn(row, "CD_COST").substr(0,2) != "EX") {
        				return false;
        			}
        		}
        	}

        	if(colnm == "QN_TT_HADO") {
        		if(!this.gfnIsNull(this.dsList.getColumn(row, "CD_COST"))) {
        			if(this.dsList.getColumn(row, "CD_COST").substr(0,2) != "EX") {
        				return false;
        			}
        		}
        	}

        // 	if(nexacro.toNumber(this.dsList.getColumn(row, "QN_TT_HADO"),0) == 1)
        // 	{
        // 		if(colnm == "AM_MATERIAL" || colnm == "AM_LABOR" || colnm == "AM_COST")
        // 		{
        // 			return true;
        // 		}
        // 	}
        // 	else
        // 	{
        // 		if(colnm == "UP_MATERIAL" || colnm == "UP_LABOR" || colnm == "UP_COST")
        // 		{
        // 			return true;
        // 		}
        // 	}

        	return;
        }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };


        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		if(e.columnid == "QN_TT_HADO") {
        			this.dsList.set_enableevent(false);
        			var QN_TT_HADO = e.newvalue;
        			var UP_MATERIAL = nexacro.Decimal(this.dsList.getColumn(e.row, "UP_MATERIAL"),0);
        			var UP_LABOR = nexacro.Decimal(this.dsList.getColumn(e.row, "UP_LABOR"),0);
        			var UP_COST = nexacro.Decimal(this.dsList.getColumn(e.row, "UP_COST"),0);
        			UP_MATERIAL.mulDecimal(QN_TT_HADO);
        			UP_LABOR.mulDecimal(QN_TT_HADO);
        			UP_COST.mulDecimal(QN_TT_HADO);
        			this.dsList.setColumn(e.row, "AM_MATERIAL", nexacro.floor(UP_MATERIAL));
        			this.dsList.setColumn(e.row, "AM_LABOR", nexacro.floor(UP_LABOR));
        			this.dsList.setColumn(e.row, "AM_COST", nexacro.floor(UP_COST));

        			var AM_MATERIAL = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_MATERIAL"),0);
        			var AM_LABOR = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_LABOR"),0);
        			var AM_COST = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_COST"),0);

        			this.dsList.setColumn(e.row, "AM_TT_HADO", AM_MATERIAL + AM_LABOR + AM_COST);
        			this.dsList.set_enableevent(true);
        		}

        		var qn_tt_hado = this.dsList.getColumn(e.row, "QN_TT_HADO");
        		var up_material = nexacro.toNumber(this.dsList.getColumn(e.row, "UP_MATERIAL"),0);
        		var up_labor = nexacro.toNumber(this.dsList.getColumn(e.row, "UP_LABOR"),0);
        		var up_equip = nexacro.toNumber(this.dsList.getColumn(e.row, "UP_EQUIP"),0);
        		var up_cost = nexacro.toNumber(this.dsList.getColumn(e.row, "UP_COST"),0);
        		var am_material = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_MATERIAL"),0);
        		var am_labor = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_LABOR"),0);
        		var am_equip = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_EQUIP"),0);
        		var am_cost = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_COST"),0);

        		if(e.columnid == "UP_MATERIAL")
        		{
        		    var nVal = nexacro.Decimal(e.newvalue,0);
        		    nVal.mulDecimal(qn_tt_hado);

        			this.dsList.setColumn(e.row, "AM_MATERIAL", nexacro.floor(nVal));
        			this.dsList.setColumn(e.row, "UP_TT_HADO", nexacro.toNumber(e.newvalue,0) + up_labor + up_equip + up_cost);
        		}
        		else if(e.columnid == "UP_LABOR")
        		{
        		    var nVal = nexacro.Decimal(e.newvalue,0);
        		    nVal.mulDecimal(qn_tt_hado);

        			this.dsList.setColumn(e.row, "AM_LABOR", nexacro.floor(nVal));
        			this.dsList.setColumn(e.row, "UP_TT_HADO", nexacro.toNumber(e.newvalue,0) + up_material + up_equip + up_cost);

        		}
        		else if(e.columnid == "UP_EQUIP")
        		{
        		    var nVal = nexacro.Decimal(e.newvalue,0);
        		    nVal.mulDecimal(qn_tt_hado);

        			this.dsList.setColumn(e.row, "AM_EQUIP", nexacro.floor(nVal));
        			this.dsList.setColumn(e.row, "UP_TT_HADO", nexacro.toNumber(e.newvalue,0) + up_material + up_labor + up_cost);
        		}
        		else if(e.columnid == "UP_COST")
        		{
        		    var nVal = nexacro.Decimal(e.newvalue,0);
        		    nVal.mulDecimal(qn_tt_hado);

        			this.dsList.setColumn(e.row, "AM_COST", nexacro.floor(nVal));
        			this.dsList.setColumn(e.row, "UP_TT_HADO", nexacro.toNumber(e.newvalue,0) + up_material + up_labor + up_equip);
        		}
        		else if(e.columnid == "AM_MATERIAL")
        		{
        			this.dsList.setColumn(e.row, "AM_TT_HADO", nexacro.toNumber(e.newvalue,0) + am_labor + am_equip + am_cost);
        		}
        		else if(e.columnid == "AM_LABOR")
        		{
        			this.dsList.setColumn(e.row, "AM_TT_HADO", nexacro.toNumber(e.newvalue,0) + am_material + am_equip + am_cost);
        		}
        		else if(e.columnid == "AM_EQUIP")
        		{
        			this.dsList.setColumn(e.row, "AM_TT_HADO", nexacro.toNumber(e.newvalue,0) + am_labor + am_material + am_cost);
        		}
        		else if(e.columnid == "AM_COST")
        		{
        			this.dsList.setColumn(e.row, "AM_TT_HADO", nexacro.toNumber(e.newvalue,0) + am_labor + am_equip + am_material);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsList1.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DCB_ESTIMATIONVENDORSAV_ENG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
