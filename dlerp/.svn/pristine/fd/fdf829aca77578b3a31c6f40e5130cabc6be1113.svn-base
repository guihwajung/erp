(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DWA_SITEBUDGET");
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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWAPR_SILHENGEXCEL_SELECT</Col></Row><Row><Col id=\"SP\">DWAPR_SILHENG2EXCEL_INSERT</Col><Col id=\"TARGET\">init</Col></Row><Row><Col id=\"SP\">DWAPR_SILHENGEXCEL_SAVE</Col><Col id=\"TARGET\">save</Col></Row><Row><Col id=\"SP\">DWAPR_SILHENGEXCEL_INSERTERROR</Col><Col id=\"TARGET\">save0</Col></Row><Row><Col id=\"TARGET\">save1</Col><Col id=\"SP\">DWAPR_SILHENGEXCEL_INSERTCHANGE</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DWAPR_SILHENGEXCEL_INSERT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SILHENG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"NO_SILHENG\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_SYSTEM","0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.getSetter("readonly").set("true");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ccfCD_SYSTEM:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("실행번호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_SILHENG","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DWX_CFNO_SILHENG_01");
            obj.getSetter("CDTextWidth").set("80");
            obj.getSetter("readonly").set("true");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM","ccfNO_SILHENG:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP00","staCD_SYSTEM:0.0","10.0","118","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("추가 라인수");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("txtADD_CNT","staCD_CORP00:0.0","10.0","51","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_DOKUB","txtADD_CNT:5.0","10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("도급");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("Y");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_GBIMOK","chkYN_DOKUB:0","10.0","272","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_color("#ff0000");
            obj.set_text("[비목 S:외주 P:경비 M:자재 L:노무 E:중기]");
            obj.set_cssclass("sta_WF_SchLabel");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_SYSTEM.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfNO_SILHENG.form.CDTextBox","value","dsSearch","NO_SILHENG");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DWA_FROMEXCEL.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.DWA_SITEBUDGET_onload = function(obj,e)
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

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().NO_SILHENG)) {

        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);	// 현장코드
        		this.ccfCD_SYSTEM.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);	// 현장코드명
        		this.ccfCD_SYSTEM.form.fnFitToContents();
        		this.dsSearch.setColumn(0, "NO_SILHENG", this.getOwnerFrame().NO_SILHENG);	// 실행번호
        		this.ccfNO_SILHENG.form.DSTextBox.set_value(this.getOwnerFrame().DS_SILHENG);	 // 실행번호명
        		this.ccfNO_SILHENG.form.fnFitToContents();

        		this.fnExcelUpload();
        	}

        	this._AM_CALC = this.gfnGetConfig("DW", "AM_CALC");
        	this.txtADD_CNT.set_value(1);
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        // 	var id_group = this.FormInfo.ID_GROUP;
        // 	var gr_search = this.FormInfo.GR_SEARCH;
        // 	var cd_role = this.FormInfo.CD_ROLE;
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btn1 = this.gfnFormButtonAdd("btnIEMS", "fnIEMSUpLoad");
        	this.btn2 = this.gfnFormButtonAdd("btnExcel", "fnExcelLoad");
        	this.btn3 = this.gfnFormButtonAdd("btnApply", "fnApply");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SYSTEM = this.divSearch.form.ccfCD_SYSTEM;
        	this.ccfNO_SILHENG = this.divSearch.form.ccfNO_SILHENG;
        	this.txtADD_CNT = this.divSearch.form.txtADD_CNT;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_SYSTEM.CodeFindName = "DWX_CFSITE"
        	this.ccfNO_SILHENG.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWA_FROMEXCEL");
        	this.dxGrid.addEventHandler("onselectchanged", this.dxGrid_RowCellChanged, this);
        }
        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsInit = new Dataset();
        	this.dsInit.addColumn("CD_SITE", "string");
        	this.dsInit.addColumn("NO_SILHENG", "string");

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("NO_SILHENG", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("FLAG", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("NO_SILHENG", "string");
        	this.dsSave.addColumn("CD_DKCOST", "string");
        	this.dsSave.addColumn("DS_ITEM", "string");
        	this.dsSave.addColumn("SZ_SIZE", "string");
        	this.dsSave.addColumn("DS_UNIT", "string");
        	this.dsSave.addColumn("CD_GBIMOK", "string");
        	this.dsSave.addColumn("QN_DESIGN", "bigdecimal");
        	this.dsSave.addColumn("UP_DESIGN", "bigdecimal");
        	this.dsSave.addColumn("AM_DESIGN", "bigdecimal");
        	this.dsSave.addColumn("QN_TT_DOKUB", "bigdecimal");
        	this.dsSave.addColumn("UP_TT_DOKUB", "bigdecimal");
        	this.dsSave.addColumn("AM_TT_DOKUB", "bigdecimal");
        	this.dsSave.addColumn("UP_MATERIAL", "bigdecimal");
        	this.dsSave.addColumn("UP_LABOR", "bigdecimal");
        	this.dsSave.addColumn("UP_COST", "bigdecimal");
        	this.dsSave.addColumn("AM_MATERIAL", "bigdecimal");
        	this.dsSave.addColumn("AM_LABOR", "bigdecimal");
        	this.dsSave.addColumn("AM_COST", "bigdecimal");
        	this.dsSave.addColumn("QN_TT_SILHENG", "bigdecimal");
        	this.dsSave.addColumn("UP_TT_SILHENG", "bigdecimal");
        	this.dsSave.addColumn("AM_TT_SILHENG", "bigdecimal");
        	this.dsSave.addColumn("QN_EXSILHENG", "bigdecimal");
        	this.dsSave.addColumn("UP_EXSILHENG", "bigdecimal");
        	this.dsSave.addColumn("AM_EXSILHENG", "bigdecimal");
        	this.dsSave.addColumn("CD_RP", "string");
        	this.dsSave.addColumn("CD_STCOST", "string");
        	this.dsSave.addColumn("CD_STCOST1", "string");
        	this.dsSave.addColumn("CD_STCOST2", "string");
        	this.dsSave.addColumn("CD_STCOST3", "string");
        	this.dsSave.addColumn("RM_BIGO", "string");
        	this.dsSave.addColumn("CD_COST", "string");
        	this.dsSave.addColumn("CD_COST1", "string");
        	this.dsSave.addColumn("CD_COST2", "string");
        	this.dsSave.addColumn("CD_COST3", "string");
        	this.dsSave.addColumn("CD_COST4", "string");
        	this.dsSave.addColumn("CD_COST5", "string");
        	this.dsSave.addColumn("CD_COST6", "string");
        	this.dsSave.addColumn("CD_COST7", "string");
        	this.dsSave.addColumn("CD_COST8", "string");
        	this.dsSave.addColumn("CD_COST9", "string");
        	this.dsSave.addColumn("CD_COST10", "string");
        	this.dsSave.addColumn("CD_COST11", "string");
        	this.dsSave.addColumn("CD_COST12", "string");
        	this.dsSave.addColumn("CD_STD", "string");

        	this.dsSave0 = new Dataset();
        	this.dsSave0.addColumn("CD_SITE", "string");
        	this.dsSave0.addColumn("NO_SILHENG", "string");

        	this.dsSave1 = new Dataset();
        	this.dsSave1.addColumn("CD_SITE", "string");
        	this.dsSave1.addColumn("NO_SILHENG", "string");
        	this.dsSave1.addColumn("ID_USER", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_SITE", "string");
        	this.dsInsert.addColumn("NO_SILHENG", "string");
        	this.dsInsert.addColumn("CD_DKCOST", "string");
        	this.dsInsert.addColumn("DS_ITEM", "string");
        	this.dsInsert.addColumn("SZ_SIZE", "string");
        	this.dsInsert.addColumn("DS_UNIT", "string");
        	this.dsInsert.addColumn("QN_TT_DOKUB", "bigdecimal");
        	this.dsInsert.addColumn("UP_TT_DOKUB", "bigdecimal");
        	this.dsInsert.addColumn("AM_TT_DOKUB", "bigdecimal");
        	this.dsInsert.addColumn("QN_TT_SILHENG", "bigdecimal");
        	this.dsInsert.addColumn("UP_TT_SILHENG", "bigdecimal");
        	this.dsInsert.addColumn("AM_TT_SILHENG", "bigdecimal");
        	this.dsInsert.addColumn("UP_MATERIAL", "bigdecimal");
        	this.dsInsert.addColumn("UP_LABOR", "bigdecimal");
        	this.dsInsert.addColumn("UP_COST", "bigdecimal");
        	this.dsInsert.addColumn("AM_MATERIAL", "bigdecimal");
        	this.dsInsert.addColumn("AM_LABOR", "bigdecimal");
        	this.dsInsert.addColumn("AM_COST", "bigdecimal");
        	this.dsInsert.addColumn("UP_OSMATERIAL", "bigdecimal");
        	this.dsInsert.addColumn("UP_OSLABOR", "bigdecimal");
        	this.dsInsert.addColumn("UP_OSCOST", "bigdecimal");
        	this.dsInsert.addColumn("RM_BIGO", "string");

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

        	this.dsSelect.setColumn(0, "CD_SITE", this.ccfCD_SYSTEM.form.CDTextBox.text);
        	this.dsSelect.setColumn(0, "NO_SILHENG", this.ccfNO_SILHENG.form.CDTextBox.value);

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

        	if(this.txtADD_CNT.value > 99){
        		this.gfnAlert("최대 99까지 입니다.");
        		return;
        	}

        	for (var i = 0; i < this.txtADD_CNT.value; i++) {
        		this.gfnGridAdd(this.dxGrid, "current_bottom");
        	}

        	this.txtADD_CNT.set_value(1);	// 초기화
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);

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
        		if(flag == "I" || flag == "U" || flag == "D"){

        			var nrow = this.dsSave.addRow();

        			this.dsSave.setColumn(nrow, "FLAG", flag);
        			this.dsSave.setColumn(nrow, "CD_SITE", this.ccfCD_SYSTEM.form.CDTextBox.text);
        			this.dsSave.setColumn(nrow, "NO_SILHENG", this.ccfNO_SILHENG.form.CDTextBox.value);
        			this.dsSave.setColumn(nrow, "CD_DKCOST", this.dsList.getColumn(i, "CD_DKCOST"));
        			this.dsSave.setColumn(nrow, "DS_ITEM", this.dsList.getColumn(i, "DS_ITEM"));
        			this.dsSave.setColumn(nrow, "SZ_SIZE", this.dsList.getColumn(i, "SZ_SIZE"));
        			this.dsSave.setColumn(nrow, "DS_UNIT", this.dsList.getColumn(i, "DS_UNIT"));
        			this.dsSave.setColumn(nrow, "CD_GBIMOK", this.dsList.getColumn(i, "CD_GBIMOK"));
        			this.dsSave.setColumn(nrow, "QN_DESIGN", this.dsList.getColumn(i, "QN_DESIGN"));
        			this.dsSave.setColumn(nrow, "UP_DESIGN", this.dsList.getColumn(i, "UP_DESIGN"));
        			this.dsSave.setColumn(nrow, "AM_DESIGN", this.dsList.getColumn(i, "AM_DESIGN"));
        			this.dsSave.setColumn(nrow, "QN_TT_DOKUB", this.dsList.getColumn(i, "QN_TT_DOKUB"));
        			this.dsSave.setColumn(nrow, "UP_TT_DOKUB", this.dsList.getColumn(i, "UP_TT_DOKUB"));
        			this.dsSave.setColumn(nrow, "AM_TT_DOKUB", this.dsList.getColumn(i, "AM_TT_DOKUB"));
        			this.dsSave.setColumn(nrow, "UP_MATERIAL", this.dsList.getColumn(i, "UP_MATERIAL"));
        			this.dsSave.setColumn(nrow, "UP_LABOR", this.dsList.getColumn(i, "UP_LABOR"));
        			this.dsSave.setColumn(nrow, "UP_COST", this.dsList.getColumn(i, "UP_COST"));
        			this.dsSave.setColumn(nrow, "AM_MATERIAL", this.dsList.getColumn(i, "AM_MATERIAL"));
        			this.dsSave.setColumn(nrow, "AM_LABOR", this.dsList.getColumn(i, "AM_LABOR"));
        			this.dsSave.setColumn(nrow, "AM_COST", this.dsList.getColumn(i, "AM_COST"));
        			this.dsSave.setColumn(nrow, "QN_TT_SILHENG", this.dsList.getColumn(i, "QN_TT_SILHENG"));
        			this.dsSave.setColumn(nrow, "UP_TT_SILHENG", this.dsList.getColumn(i, "UP_TT_SILHENG"));
        			this.dsSave.setColumn(nrow, "AM_TT_SILHENG", this.dsList.getColumn(i, "AM_TT_SILHENG"));
        			this.dsSave.setColumn(nrow, "QN_EXSILHENG", this.dsList.getColumn(i, "QN_EXSILHENG"));
        			this.dsSave.setColumn(nrow, "UP_EXSILHENG", this.dsList.getColumn(i, "UP_EXSILHENG"));
        			this.dsSave.setColumn(nrow, "AM_EXSILHENG", this.dsList.getColumn(i, "AM_EXSILHENG"));
        			this.dsSave.setColumn(nrow, "CD_RP", this.dsList.getColumn(i, "CD_RP"));
        			this.dsSave.setColumn(nrow, "CD_STCOST", this.dsList.getColumn(i, "CD_STCOST"));
        			this.dsSave.setColumn(nrow, "CD_STCOST1", this.dsList.getColumn(i, "CD_STCOST1"));
        			this.dsSave.setColumn(nrow, "CD_STCOST2", this.dsList.getColumn(i, "CD_STCOST2"));
        			this.dsSave.setColumn(nrow, "CD_STCOST3", this.dsList.getColumn(i, "CD_STCOST3"));
        			this.dsSave.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        			this.dsSave.setColumn(nrow, "CD_COST", this.dsList.getColumn(i, "CD_COST"));
        			this.dsSave.setColumn(nrow, "CD_COST1", this.dsList.getColumn(i, "CD_COST1"));
        			this.dsSave.setColumn(nrow, "CD_COST2", this.dsList.getColumn(i, "CD_COST2"));
        			this.dsSave.setColumn(nrow, "CD_COST3", this.dsList.getColumn(i, "CD_COST3"));
        			this.dsSave.setColumn(nrow, "CD_COST4", this.dsList.getColumn(i, "CD_COST4"));
        			this.dsSave.setColumn(nrow, "CD_COST5", this.dsList.getColumn(i, "CD_COST5"));
        			this.dsSave.setColumn(nrow, "CD_COST6", this.dsList.getColumn(i, "CD_COST6"));
        			this.dsSave.setColumn(nrow, "CD_COST7", this.dsList.getColumn(i, "CD_COST7"));
        			this.dsSave.setColumn(nrow, "CD_COST8", this.dsList.getColumn(i, "CD_COST8"));
        			this.dsSave.setColumn(nrow, "CD_COST9", this.dsList.getColumn(i, "CD_COST9"));
        			this.dsSave.setColumn(nrow, "CD_COST10", this.dsList.getColumn(i, "CD_COST10"));
        			this.dsSave.setColumn(nrow, "CD_COST11", this.dsList.getColumn(i, "CD_COST11"));
        			this.dsSave.setColumn(nrow, "CD_COST12", this.dsList.getColumn(i, "CD_COST12"));
        			this.dsSave.setColumn(nrow, "CD_STD", this.dsList.getColumn(i, "CD_STD"));

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
        	if (this.gfnIsNull(this.ccfCD_SYSTEM.form.CDTextBox.text)) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SYSTEM.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
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
        			this.fnInsertError();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "saveafter"){
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "saveinit"){
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        };

        this.fnCallbackIEMS = function(strID, value){
        	if(value){
        		this.FormBtns.Select.click();
        	}
        };


        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfNO_SILHENG") {

        // 		if (this.gfnIsNull(this.ccfCD_DEPT_ORG.form.CDTextBox.value)) {
        // 			this.gfnAlert("서브모듈을 먼저 입력하세요.");
        // 			return false;
        // 		}
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));	// 현장코드
        	}
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.dxGrid_RowCellChanged = function(obj,e)
        {
        	var rows = obj.getSelectedDatasetRows();
        	var sum = 0;

        	for(var i = 0; i < rows.length; i++) {
        		var am = this.dsList.getColumn(rows[i], "AM_TT_SILHENG");

        		if(!this.gfnIsNull(am)) {
        			sum += am;
        		}
        	}

        	var colDS_ITEM = this.dxGrid.getBindCellIndex("body", "DS_ITEM");
        	this.dxGrid.setCellProperty("summ", colDS_ITEM, "text", "선택합계=" + this.gfnAppendComma(sum));
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnExcelUpload = function(){

        	this.dsInit.clearData();

        	var nrow = this.dsInit.addRow();
        	this.dsInit.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsInit.setColumn(nrow, "NO_SILHENG", this.dsSearch.getColumn(0, "NO_SILHENG"));

        	var strSvcId    = "saveinit";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "init=dsInit";
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
        };

        this.fnInsertError=function(){
        	this.dsSave0.clearData();

        	var nrow = this.dsSave0.addRow();
        	this.dsSave0.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSave0.setColumn(nrow, "NO_SILHENG", this.dsSearch.getColumn(0, "NO_SILHENG"));

        	var strSvcId    = "saveafter";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save0=dsSave0";
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
        };
        this.fnApply = function(obj,e) {

        	this.dsSave1.clearData();

        	var nrow = this.dsSave1.addRow();
        	this.dsSave1.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSave1.setColumn(nrow, "NO_SILHENG", this.dsSearch.getColumn(0, "NO_SILHENG"));
        	this.dsSave1.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "saveapply";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save1=dsSave1";
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
        };

        this.fnExcelLoad = function(obj,e) {

        	this.gfnExcelImport("dsList","","A3","fnExcelImportCallback","import",this);
        };

        this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet) {
        	// 다중 시트 처리시 양식의 해당 시트여부를 체크하고자 할땐 dsSheet 시트명 체크
        // 	if (dsSheet.rowcount > 1) {
        // 		trace(dsSheet.getColumn(1, "sheetname"));
        // 	}

        	// 엑셀 양식과 그리드 컬럼이 그대로 일치 하는경우 아래와 같이 처리.
        	// 아닌경우는 이부분 주석처리
        	for (var i=0; i< this.dsList.getColCount(); i++)
        	{
        		sColumnId = "Column"+i;
        		var sColumnNm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, i);
        		if (sColumnNm != "" && sColumnId != sColumnNm)
        		{
        			dsOut.updateColID(sColumnId, sColumnNm);
        		}
        	}

        	// 양식이 일치하고 엑셀내역을 기존데이터에 Insert하지 않고
        	// 엑셀내역 그대로 그리드 반영할 시 copyData
        	//this.dsListSub.copyData(dsOut);

        	this.dsList.set_enableevent(false);
        	for (var i=0; i<dsOut.rowcount; i++) {
        		var srow = this.dsList.findRow("CD_COST", dsOut.getColumn(i, "CD_COST"));
        		if(this.gfnIsNull(dsOut.getColumn(i, "CD_COST"))){
        			srow = -1;
        		}
        		if(srow > -1){
        			this.dsList.setColumn(srow, this.ucFlag, "U");
        			this.dsList.copyRow(srow, dsOut, i);
        		}else{
        			var nrow = this.dsList.addRow();
        			this.dsList.setColumn(nrow, this.ucFlag, "I");

        			// 양식이 일치하는 경우 copyRow
        			this.dsList.copyRow(nrow, dsOut, i);
        		}


        		// 양식과 일치하지 않는 경우 아래와 같이 컬럼별로 처리.
        // 		this.dsListSub.setColumn(nrow, "CD_SYSTEM", dsOut.getColumn(i, "Column1"));
        // 		this.dsListSub.setColumn(nrow, "CD_TYPE", dsOut.getColumn(i, "Column2"));

        	}
        	this.dsList.set_enableevent(true);

        	this.gfnSetFormStatus(this, "I");
        };


        //this.dsList_oncolumnchanged = function(obj:nexacro.NormalDataset,e:nexacro.DSColChangeEventInfo)
        //{
        // 	if(e.col == 9 || e.col == 21){
        // 		this.dsList.setColumn(e.row, "AM_DESIGN", Math.floor(this.dsList.getColumn(e.row, "QN_DESIGN") * this.dsList.getColumn(e.row, "UP_DESIGN")));
        // 	}else if(e.col == 0 || e.col == 29){
        // 		this.dsList.setColumn(e.row, "AM_TT_DOKUB", Math.floor(this.dsList.getColumn(e.row, "QN_TT_DOKUB") * this.dsList.getColumn(e.row, "UP_TT_DOKUB")));
        // 	}else if(e.col == 34 || e.col == 19){
        // 		this.dsList.setColumn(e.row, "AM_EXSILHENG", Math.floor(this.dsList.getColumn(e.row, "QN_EXSILHENG") * this.dsList.getColumn(e.row, "UP_EXSILHENG")));
        // 	}else if(e.col == 13 || e.col == 15){
        // 		this.dsList.setColumn(e.row, "AM_TT_SILHENG", Math.floor(this.dsList.getColumn(e.row, "QN_TT_SILHENG") * this.dsList.getColumn(e.row, "UP_TT_SILHENG")));
        // 	}
        	// 이벤트 오류로 인한 col이 아닌 columnid로 체크로직 변경.
        //	if(e.columnid == "QN_DESIGN" || e.columnid == "UP_DESIGN"){
        //		this.dsList.setColumn(e.row, "AM_DESIGN", this.fnRoundOrFloor(this.dsList.getColumn(e.row, "QN_DESIGN") * this.dsList.getColumn(e.row, "UP_DESIGN")));
        //	}else if(e.columnid == "QN_TT_DOKUB" || e.columnid == "UP_TT_DOKUB"){
        //		this.dsList.setColumn(e.row, "AM_TT_DOKUB", this.fnRoundOrFloor(this.dsList.getColumn(e.row, "QN_TT_DOKUB") * this.dsList.getColumn(e.row, "UP_TT_DOKUB")));
        //	}else if(e.columnid == "QN_EXSILHENG" || e.columnid == "UP_EXSILHENG"){
        //		this.dsList.setColumn(e.row, "AM_EXSILHENG", this.fnRoundOrFloor(this.dsList.getColumn(e.row, "QN_EXSILHENG") * this.dsList.getColumn(e.row, "UP_EXSILHENG")));
        //	}else if(e.columnid == "QN_TT_SILHENG" || e.columnid == "UP_TT_SILHENG"){
        //		this.dsList.setColumn(e.row, "AM_TT_SILHENG", this.fnRoundOrFloor(this.dsList.getColumn(e.row, "QN_TT_SILHENG") * this.dsList.getColumn(e.row, "UP_TT_SILHENG")));
        //	}
        //};

        this.fnIEMSUpLoad = function(obj,e) {

        	var param = {};
        	param.pCd_Site = this.dsSearch.getColumn(0, "CD_SITE");
        	param.pNO_Silheng = this.dsSearch.getColumn(0, "NO_SILHENG");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpenNonAuth("DWA", "DWA_IEMSDLG", "fnCallbackIEMS", param, 400, 250);
        }

        this.fnRoundOrFloor = function(val)
        {
        	var result = val;

        	if(this._AM_CALC == "ROUND")
        	{
        		result = nexacro.round(nexacro.toNumber(result.toFixed(0),0));
        	}
        	else if(this._AM_CALC == "TRUNC")
        	{
        		result = nexacro.floor(result);
        	}

        	return result;
        }
        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		/*******************************************************
        		*	참고사항
        		********************************************************
        		* 이전소스 : 자바스크립트 부동소수점 문제로 사용금지
        		* 곱연산, 나누기연산 시 부동소수점으로 인해 결과값-1되는 현상
        		* 넥사크로 공통으로 곱연산, 나누기연산 할 것.
        		* 곱연산 : nexacro.Decimal().mulDecimal();
        		* 나누기연산 : nexacro.Decimal().modDecimal();
        		*/
        		var newDecimalValue = nexacro.Decimal(e.newvalue);

        		// 실행예산-수량 수정 시
        		if(e.columnid == "QN_TT_SILHENG")
        		{
        			/* 실행예산 */
        			var am_tt_silheng = nexacro.Decimal(); // 실행예산-금액
        			var up_tt_silheng = nexacro.Decimal(this.dsList.getColumn(e.row, "UP_TT_SILHENG")); // 실행예산-단가

        			up_tt_silheng.mulDecimal(newDecimalValue); // 연산
        			am_tt_silheng = nexacro.floor(up_tt_silheng); // 소수점 이하 내림

        			this.dsList.setColumn(e.row, "AM_TT_SILHENG", am_tt_silheng);

        			/* 자재 */
        			var am_material = nexacro.Decimal(); // 금액-자재
        			var up_material =nexacro.Decimal( this.dsList.getColumn(e.row, "UP_MATERIAL")); // 단가-자재

        			up_material.mulDecimal(newDecimalValue); // 연산
        			am_material = nexacro.floor(up_material); // 소수점 이하 내림

        			this.dsList.setColumn(e.row, "AM_MATERIAL", am_material);

        			/* 노무 */
        			var am_labor = nexacro.Decimal(); // 금액-노무
        			var up_labor = nexacro.Decimal(this.dsList.getColumn(e.row, "UP_LABOR")); // 단가-노무

        			up_labor.mulDecimal(newDecimalValue); // 연산
        			am_labor = nexacro.floor(up_labor); // 소수점 이하 내림

        			this.dsList.setColumn(e.row, "AM_LABOR", am_labor);

        			/* 경비 */
        			var am_cost = nexacro.Decimal(); // 금액-경비
        			var up_cost = nexacro.Decimal(this.dsList.getColumn(e.row, "UP_COST")); // 단가-경비

        			up_cost.mulDecimal(newDecimalValue); // 연산
        			am_cost = nexacro.floor(up_cost); // 소수점 이하 내림

        			this.dsList.setColumn(e.row, "AM_COST", am_cost);
        		}
        		// 실행예산-단가 수정 시
        		else if(e.columnid == "UP_TT_SILHENG")
        		{
        			var am_tt_silheng = nexacro.Decimal(); // 실행예산-금액
        			var qn_tt_silheng = nexacro.Decimal(this.dsList.getColumn(e.row, "QN_TT_SILHENG")); // 실행예산-수량

        			qn_tt_silheng.mulDecimal(newDecimalValue); // 연산
        			am_tt_silheng = nexacro.floor(qn_tt_silheng); // 소수점 이하 내림

        			this.dsList.setColumn(e.row, "AM_TT_SILHENG", am_tt_silheng);
        		}
        		// 단가-자재 수정 시
        		else if(e.columnid == "UP_MATERIAL")
        		{
        		   var am_material = nexacro.Decimal(); // 금액-자재
        			var qn_tt_silheng = nexacro.Decimal(this.dsList.getColumn(e.row, "QN_TT_SILHENG")); // 실행예산-수량

        			qn_tt_silheng.mulDecimal(newDecimalValue); // 연산
        			am_material = nexacro.floor(qn_tt_silheng); // 소수점 이하 내림

        			this.dsList.setColumn(e.row, "AM_MATERIAL", am_material);

        			var up_labor = this.dsList.getColumn(e.row, "UP_LABOR"); // 단가-노무
        			var up_cost = this.dsList.getColumn(e.row, "UP_COST"); // 단가-경비

        			// 실행예산-단가
        			this.dsList.setColumn(e.row, "UP_TT_SILHENG", nexacro.toNumber(e.newvalue,0) + nexacro.toNumber(up_labor,0) + nexacro.toNumber(up_cost,0));
        		}
        		// 단가-노무 수정 시
        		else if(e.columnid == "UP_LABOR")
        		{
        		   var am_labor = nexacro.Decimal(); // 금액-경비
        			var qn_tt_silheng = nexacro.Decimal(this.dsList.getColumn(e.row, "QN_TT_SILHENG")); // 실행예산-수량

        			qn_tt_silheng.mulDecimal(newDecimalValue); // 연산
        			am_labor = nexacro.floor(qn_tt_silheng); // 소수점 이하 내림

        			this.dsList.setColumn(e.row, "AM_LABOR", am_labor);

        			var up_material = this.dsList.getColumn(e.row, "UP_MATERIAL"); // 단가-자재
        			var up_cost = this.dsList.getColumn(e.row, "UP_COST"); // 단가-경비

        			// 실행예산-단가
        			this.dsList.setColumn(e.row, "UP_TT_SILHENG", nexacro.toNumber(e.newvalue,0) + nexacro.toNumber(up_material,0) + nexacro.toNumber(up_cost,0));
        		}
        		// 단가-경비 수정 시
        		else if(e.columnid == "UP_COST")
        		{
        		   var am_cost = nexacro.Decimal(); // 금액-경비
        			var qn_tt_silheng = nexacro.Decimal(this.dsList.getColumn(e.row, "QN_TT_SILHENG")); // 실행예산-수량

        			qn_tt_silheng.mulDecimal(newDecimalValue); // 연산
        			am_cost = nexacro.floor(qn_tt_silheng); // 소수점 이하 내림

        			this.dsList.setColumn(e.row, "AM_COST", am_cost);

        			var up_material = this.dsList.getColumn(e.row, "UP_MATERIAL"); // 단가-자재
        			var up_labor = this.dsList.getColumn(e.row, "UP_LABOR"); // 단가-노무

        			// 실행예산-단가
        			this.dsList.setColumn(e.row, "UP_TT_SILHENG", nexacro.toNumber(e.newvalue,0) + nexacro.toNumber(up_labor,0) + nexacro.toNumber(up_material,0));
        		}
        		// 도급내역-수량 수정 시
        		else if(e.columnid == "QN_TT_DOKUB")
        		{
        			var am_tt_dokub = nexacro.Decimal(); // 도급내역-금액
        			var up_tt_dokub = nexacro.Decimal(this.dsList.getColumn(e.row, "UP_TT_DOKUB"));

        			up_tt_dokub.mulDecimal(newDecimalValue); // 연산
        			am_tt_dokub = nexacro.floor(up_tt_dokub); // 소수점 이하 내림

        			this.dsList.setColumn(e.row, "AM_TT_DOKUB", am_tt_dokub);
        		}
        		// 도급내역-단가 수정 시
        		else if(e.columnid == "UP_TT_DOKUB")
        		{
        			var am_tt_dokub = nexacro.Decimal(); // 도급내역-금액
        			var qn_tt_dokub = nexacro.Decimal(this.dsList.getColumn(e.row, "QN_TT_DOKUB"));

        			qn_tt_dokub.mulDecimal(newDecimalValue); // 연산
        			am_tt_dokub = nexacro.floor(qn_tt_dokub); // 소수점 이하 내림

        			this.dsList.setColumn(e.row, "AM_TT_DOKUB", am_tt_dokub);
        		}
        	}
        };




        this.divSearch_chkYN_DOKUB_onchanged = function(obj,e)
        {
        	var QN_TT_DOKUB_Index = this.dxGrid.getBindCellIndex("body", "QN_TT_DOKUB");
        	var UP_TT_DOKUB_Index = this.dxGrid.getBindCellIndex("body", "UP_TT_DOKUB");
        	var AM_TT_DOKUB_Index = this.dxGrid.getBindCellIndex("body", "AM_TT_DOKUB");

        	if(obj.isChecked())
        	{
        		this.dxGrid.setRealColSize("body", QN_TT_DOKUB_Index, 70);
        		this.dxGrid.setRealColSize("body", UP_TT_DOKUB_Index, 80);
        		this.dxGrid.setRealColSize("body", AM_TT_DOKUB_Index, 100);
        	}
        	else
        	{
        		this.dxGrid.setRealColSize("body", QN_TT_DOKUB_Index, 0);
        		this.dxGrid.setRealColSize("body", UP_TT_DOKUB_Index, 0);
        		this.dxGrid.setRealColSize("body", AM_TT_DOKUB_Index, 0);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DWA_SITEBUDGET_onload,this);
            this.divSearch.form.chkYN_DOKUB.addEventHandler("onchanged",this.divSearch_chkYN_DOKUB_onchanged,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWA_FROMEXCEL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
