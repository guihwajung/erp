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
            this.set_titletext("실행예산관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWAPR_SILHENGREGITEMTREE_SELECT</Col></Row><Row><Col id=\"TARGET\">selectSub</Col><Col id=\"SP\">DWAPR_SILHENGREGITEM_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWAPR_SILHENGREGITEM_SAVE</Col></Row><Row><Col id=\"TARGET\">save_after</Col><Col id=\"SP\">DWAPR_SILHENGGHG_SUMUPPER</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SILHENG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_SILHENG","ccfCD_SITE:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("실행번호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_SILHENG","staNO_SILHENG:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DWX_CFNO_SILHENG_01");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_DOKUB","ccfNO_SILHENG:0.0","10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("도급");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_visible("true");
            obj.set_value("Y");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP00","ccfNO_SILHENG:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("추가 라인수");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("txtADD_CNT","staCD_CORP00:0.0","10.0","51","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_value("");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","30%","0","5","100%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","5",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfNO_SILHENG.form.CDTextBox","value","dsSearch","NO_SILHENG");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DWA_SILHENGREGITEM.xfdl", function() {
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

        	// 이전 화면에서 데이터 받기.
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().NO_SILHENG)) {
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		this.dsSearch.setColumn(0, "NO_SILHENG", this.getOwnerFrame().NO_SILHENG);
        		this.divSearch.form.ccfNO_SILHENG.form.DSTextBox.set_value(this.getOwnerFrame().DS_SILHENG);

        		this.FormBtns.Select.click();
        	}

        	//this.divSearch_chkYN_DOKUB_onchanged(this.divSearch.form.chkYN_DOKUB, {postvalue:this.divSearch.form.chkYN_DOKUB.value});

        	this._AM_CALC = this.gfnGetConfig("DW", "AM_CALC");
        	this.txtADD_CNT.set_value(1);
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	// 서브 버튼 사용
        	//this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter); // divSplitter sync
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btn1 = this.gfnFormButtonAdd("Detail", "fnDetail1");
        	this.btnCostTuja = this.gfnFormButtonAdd("btnCostTuja", "fnCostTuja");
        	this.btnIndirectSilInput = this.gfnFormButtonAdd("btnIndirectSilInput", "fnIndirectSilInput");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfNO_SILHENG = this.divSearch.form.ccfNO_SILHENG;
        	this.txtADD_CNT = this.divSearch.form.txtADD_CNT;

        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataRight.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWA_SILHENGREGITEMTREE","DS_COST","GR_COST");
        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	// 트리 접는 로직.
        	this.dxGrid.set_treeinitstatus("collapse,all");

        	this.ccfCD_SITE.AfterCDTextChanged = "ccfCD_SITE_AfterCDTextChanged";
        	this.ccfNO_SILHENG.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.dxGridSub.BeforeUserDataSetParam = "fnGridSub_BeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DW", "DWA_SILHENGREGITEM");
        	this.dxGridSub.addEventHandler("onselectchanged", this.dxGrid_RowCellChanged, this);

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("NO_SILHENG", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_SITE", "string");
        	this.dsSelectSub.addColumn("NO_SILHENG", "string");
        	this.dsSelectSub.addColumn("CD_UPPER", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("NO_SILHENG", "string");
        	this.dsSave.addColumn("CD_COST", "string");
        	this.dsSave.addColumn("CD_UPPER", "string");
        	this.dsSave.addColumn("YN_COST", "string");
        	this.dsSave.addColumn("CD_ITEM", "string");
        	this.dsSave.addColumn("DS_COST", "string");
        	this.dsSave.addColumn("SZ_SIZE", "string");
        	this.dsSave.addColumn("DS_UNIT", "string");
        	this.dsSave.addColumn("CD_GBIMOK", "string");
        	this.dsSave.addColumn("QN_TT_DOKUB", "bigdecimal");
        	this.dsSave.addColumn("UP_TT_DOKUB", "bigdecimal");
        	this.dsSave.addColumn("AM_TT_DOKUB", "bigdecimal");
        	this.dsSave.addColumn("QN_TT_SILHENG", "bigdecimal");
        	this.dsSave.addColumn("UP_TT_SILHENG", "bigdecimal");
        	this.dsSave.addColumn("UP_MATERIAL", "bigdecimal");
        	this.dsSave.addColumn("UP_LABOR", "bigdecimal");
        	this.dsSave.addColumn("UP_COST", "bigdecimal");
        	this.dsSave.addColumn("AM_MATERIAL", "bigdecimal");
        	this.dsSave.addColumn("AM_LABOR", "bigdecimal");
        	this.dsSave.addColumn("AM_COST", "bigdecimal");
        	this.dsSave.addColumn("AM_TT_SILHENG", "bigdecimal");
        	this.dsSave.addColumn("QN_EXSILHENG", "bigdecimal");
        	this.dsSave.addColumn("UP_EXSILHENG", "bigdecimal");
        	this.dsSave.addColumn("AM_EXSILHENG", "bigdecimal");
        	this.dsSave.addColumn("RM_BIGO", "string");
        	this.dsSave.addColumn("CD_RP", "string");
        	this.dsSave.addColumn("CD_STDITEM", "string");
        	this.dsSave.addColumn("CD_STCOST1", "string");
        	this.dsSave.addColumn("CD_STCOST2", "string");
        	this.dsSave.addColumn("CD_STD", "string");
        	this.dsSave.addColumn("ID_USER", "string");


        	this.dsAfterSave = new Dataset();
        	this.dsAfterSave.addColumn("CD_SITE", "string");
        	this.dsAfterSave.addColumn("NO_SILHENG", "string");
        	this.dsAfterSave.addColumn("YN_DKCHANGE", "string");
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

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "NO_SILHENG", this.dsSearch.getColumn(0, "NO_SILHENG"));

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

        	this.FormBtns.SubSelect.click();
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
        		var nrow = this.gfnGridAdd(this.dxGridSub);

        		this.dsListSub.set_enableevent(false);
        		this.dsListSub.setColumn(nrow, "CD_PREVIOUS", this.dsList.getColumn(this.dsList.rowposition, "CD_DKCOST"));
        		this.dsListSub.setColumn(nrow, "CD_UPPER", this.dsList.getColumn(this.dsList.rowposition, "CD_COST"));
        		this.dsListSub.set_enableevent(true);
        	}

        	this.txtADD_CNT.set_value(1);	// 초기화
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {

        	this.gfnGridDel(this.dxGridSub, "YN_COST");
        }


        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGridSub)) return;

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "NO_SILHENG", this.dsSearch.getColumn(0, "NO_SILHENG"));
        				this.dsSave.setColumn(nrow, "CD_COST", this.dsListSub.getColumn(i, "CD_COST"));
        				this.dsSave.setColumn(nrow, "CD_UPPER", this.dsListSub.getColumn(i, "CD_UPPER"));
        				this.dsSave.setColumn(nrow, "YN_COST", this.dsListSub.getColumn(i, "YN_COST"));
        				this.dsSave.setColumn(nrow, "CD_ITEM", this.dsListSub.getColumn(i, "CD_ITEM"));
        				this.dsSave.setColumn(nrow, "DS_COST", this.dsListSub.getColumn(i, "DS_COST"));
        				this.dsSave.setColumn(nrow, "SZ_SIZE", this.dsListSub.getColumn(i, "SZ_SIZE"));
        				this.dsSave.setColumn(nrow, "DS_UNIT", this.dsListSub.getColumn(i, "DS_UNIT"));
        				this.dsSave.setColumn(nrow, "CD_GBIMOK", this.dsListSub.getColumn(i, "CD_GBIMOK"));
        				this.dsSave.setColumn(nrow, "QN_TT_DOKUB", this.dsListSub.getColumn(i, "QN_TT_DOKUB"));
        				this.dsSave.setColumn(nrow, "UP_TT_DOKUB", this.dsListSub.getColumn(i, "UP_TT_DOKUB"));
        				this.dsSave.setColumn(nrow, "AM_TT_DOKUB", this.dsListSub.getColumn(i, "AM_TT_DOKUB"));
        				this.dsSave.setColumn(nrow, "QN_TT_SILHENG", this.dsListSub.getColumn(i, "QN_TT_SILHENG"));
        				this.dsSave.setColumn(nrow, "UP_TT_SILHENG", this.dsListSub.getColumn(i, "UP_TT_SILHENG"));
        				this.dsSave.setColumn(nrow, "UP_MATERIAL", this.dsListSub.getColumn(i, "UP_MATERIAL"));
        				this.dsSave.setColumn(nrow, "UP_LABOR", this.dsListSub.getColumn(i, "UP_LABOR"));
        				this.dsSave.setColumn(nrow, "UP_COST", this.dsListSub.getColumn(i, "UP_COST"));
        				this.dsSave.setColumn(nrow, "AM_MATERIAL", this.dsListSub.getColumn(i, "AM_MATERIAL"));
        				this.dsSave.setColumn(nrow, "AM_LABOR", this.dsListSub.getColumn(i, "AM_LABOR"));
        				this.dsSave.setColumn(nrow, "AM_COST", this.dsListSub.getColumn(i, "AM_COST"));
        				this.dsSave.setColumn(nrow, "AM_TT_SILHENG", this.dsListSub.getColumn(i, "AM_TT_SILHENG"));
        				this.dsSave.setColumn(nrow, "QN_EXSILHENG", this.dsListSub.getColumn(i, "QN_EXSILHENG"));
        				this.dsSave.setColumn(nrow, "UP_EXSILHENG", this.dsListSub.getColumn(i, "UP_EXSILHENG"));
        				this.dsSave.setColumn(nrow, "AM_EXSILHENG", this.dsListSub.getColumn(i, "AM_EXSILHENG"));
        				this.dsSave.setColumn(nrow, "RM_BIGO", this.dsListSub.getColumn(i, "RM_BIGO"));
        				this.dsSave.setColumn(nrow, "CD_RP", this.dsListSub.getColumn(i, "CD_RP"));
        				this.dsSave.setColumn(nrow, "CD_STDITEM", this.dsListSub.getColumn(i, "CD_STDITEM"));
        				this.dsSave.setColumn(nrow, "CD_STCOST1", this.dsListSub.getColumn(i, "CD_STCOST1"));
        				this.dsSave.setColumn(nrow, "CD_STCOST2", this.dsListSub.getColumn(i, "CD_STCOST2"));
        				this.dsSave.setColumn(nrow, "CD_STD", "");
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
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

        this.fnAfterSave = function()
        {
        	this.dsAfterSave.clearData();
        	var nrow = this.dsAfterSave.addRow();

        	this.dsAfterSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsAfterSave.setColumn(nrow, "NO_SILHENG", this.dsSearch.getColumn(0, "NO_SILHENG"));
        	this.dsAfterSave.setColumn(nrow, "YN_DKCHANGE", "Y");

        	if (this.dsAfterSave.rowcount == 0) return;

        	var strSvcId    = "save_after";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save_after=dsAfterSave";
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
        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelectSub.clearData();

        	this.dsSelectSub.addRow();

        	this.dsSelectSub.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelectSub.setColumn(0, "NO_SILHENG", this.dsSearch.getColumn(0, "NO_SILHENG"));
        	this.dsSelectSub.setColumn(0, "CD_UPPER", this.dsList.getColumn(this.dsList.rowposition, "CD_COST"));

        	var strSvcId    = "selectSub";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectSub=dsSelectSub";
        	var outData     = "dsListSub=selectSub0";
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

        this.fnAddSub = function() {
        	this.gfnGridAdd(this.dxGridSub);
        }
        this.fnDelSub = function() {
        	this.gfnGridDel(this.dxGridSub);
        }
        this.fnSaveSub = function() {
        	if (!this.gfnGridValidate(this.dxGridSub)) return;

        // 	this.dxGridSub.updateToDataset();
        //
        // 	this.dsInsertSub.clearData();
        // 	this.dsUpdateSub.clearData();
        // 	this.dsDeleteSub.clearData();
        //
        // 	var cd_role = this.dsList.getColumn(this.dsList.rowposition, "CD_ROLE");
        // 	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        // 		var flag = this.gfnGetFlag(this.dsListSub, i);
        // 		switch(flag) {
        // 			case "I":
        // 				var nrow = this.dsInsertSub.addRow();
        // 				this.dsInsertSub.setColumn(nrow, "CD_ROLE", cd_role);
        // 				this.dsInsertSub.setColumn(nrow, "CD_SYSTEM", this.dsListSub.getColumn(i, "CD_SYSTEM"));
        // 				this.dsInsertSub.setColumn(nrow, "ID_GROUP", this.dsListSub.getColumn(i, "ID_GROUP"));
        // 				this.dsInsertSub.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        // 				break;
        //
        // 			case "U":
        // 				var nrow = this.dsUpdateSub.addRow();
        // 				this.dsUpdateSub.setColumn(nrow, "CD_ROLE", cd_role);
        // 				this.dsUpdateSub.setColumn(nrow, "CD_SYSTEM", this.dsListSub.getColumn(i, "CD_SYSTEM"));
        // 				this.dsUpdateSub.setColumn(nrow, "ID_GROUP", this.dsListSub.getColumn(i, "ID_GROUP"));
        // 				this.dsUpdateSub.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        // 				break;
        //
        // 			case "D":
        // 				var nrow = this.dsDeleteSub.addRow();
        // 				this.dsDeleteSub.setColumn(nrow, "CD_ROLE", cd_role);
        // 				this.dsDeleteSub.setColumn(nrow, "CD_SYSTEM", this.dsListSub.getColumn(i, "CD_SYSTEM"));
        // 				break;
        // 		}
        // 	}
        //
        // 	if (this.dsInsertSub.rowcount == 0 && this.dsUpdateSub.rowcount == 0 && this.dsDeleteSub.rowcount == 0) return;
        //
        // 	var strSvcId    = "savesub";
        // 	var strSvcType  = "save";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "d_insert=dsInsertSub d_update=dsUpdateSub d_delete=dsDeleteSub";
        // 	var outData     = "";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";

        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// transaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnExcelSub = function() {
        	this.gfnExcelExport(this.dxGridSub);
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        		return validate;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"NO_SILHENG"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfNO_SILHENG.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("실행번호는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        		return validate;
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
        		this._gfnGridTreeOpen(this.dxGrid, 1);
        	}
        	else if (svcID == "selectSub") {

        		this.gfnGridAfterSelect(this.dxGridSub);
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.fnAfterSave();
        			//this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "save_after") {
        		if (errorCode == 0) {
        			//this.FormBtns.Select.click();
        			this.gfnSetFormStatus(this, "Q");	// 이부분 처리하지 않으면 저장후에 바로 화면 닫을때 변경된 데이터있다고 메시지 나옴
        			this.FormBtns.SubSelect.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfNO_SILHENG") {
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));	// 현장코드
        	}
        	return true;
        }

        this.ccfCD_SITE_AfterCDTextChanged = function(id, codeFindData){
        	this.gfnSetFormStatus(this);
        	this.dsSearch.setColumn(0,"NO_SILHENG", "");
        	this.divSearch.form.ccfNO_SILHENG.form.DSTextBox.set_value("");
        	this.gfnGridClear(this.dxGridSub);
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGridSub_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
         	if (id == "DWX_CFUPPERCOST") {
         		dsUserParam.setColumn(nrow, "CD_SITE",  this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "NO_SILHENG",  this.dsSearch.getColumn(0, "NO_SILHENG"));
         	}
        	return true;
        }


        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		this.FormBtns.SubSelect.click();
        		obj.oldrow = -1;
        	}
        };

        this.dxGrid_RowCellChanged = function(obj,e)
        {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGridSub, e.cell);	// 컬럼 인덱스로 컬럼명 가져오기
        	var rows = obj.getSelectedDatasetRows();
        	var sum = 0;
        	var bRet = "";

        	for(var i = 0; i < rows.length; i++) {
        		/*var am = this.dsListSub.getColumn(rows[i], "AM_TT_SILHENG");*/
        		var am = this.gfnIsNull(this.dsListSub.getColumn(rows[i], colnm)) ? 0 : this.dsListSub.getColumn(rows[i], colnm);

        		bRet = isNaN(am); // 문자:true, 숫자:false

        		if(bRet){
        			break;
        		}

        		if(!this.gfnIsNull(am)) {
        			sum += am;
        		}
        	}

        	var colDS_COST = this.dxGridSub.getBindCellIndex("body", "DS_COST");

        	if(!bRet){	// 숫자면 합계표시, 문자면 null
        		this.dxGridSub.setCellProperty("summ", colDS_COST, "text", "선택합계=" + this.gfnAppendComma(sum));
        	}else{
        		this.dxGridSub.setCellProperty("summ", colDS_COST, "text", "");
        	}
        }
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
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_left(e.clientx);
        		this.divData.form.resetScroll();
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };


        this.dsListSub_onvaluechanged= function(obj,e)
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

        		// 도급내역-수량 수정 시
        		if(e.columnid == "QN_TT_DOKUB")
        		{
        			var am_tt_dokub = nexacro.Decimal(); // 도급내역-금액
        			var up_tt_dokub = nexacro.Decimal(this.dsListSub.getColumn(e.row, "UP_TT_DOKUB")); // 도급내역-단가

        			up_tt_dokub.mulDecimal(newDecimalValue); // 연산

        			am_tt_dokub = nexacro.floor(up_tt_dokub);

        			this.dsListSub.setColumn(e.row, "AM_TT_DOKUB", am_tt_dokub);

        		}
        		// 도급내역 단가 수정 시
        		else if(e.columnid == "UP_TT_DOKUB")
        		{
        			var am_tt_dokub = nexacro.Decimal(); // 도급내역-금액
        			var qn_tt_dokub =  nexacro.Decimal(this.dsListSub.getColumn(e.row, "QN_TT_DOKUB")); // 도급내역-수량

        			qn_tt_dokub.mulDecimal(newDecimalValue); // 연산

        			am_tt_dokub = nexacro.floor(qn_tt_dokub);

        			this.dsListSub.setColumn(e.row, "AM_TT_DOKUB", am_tt_dokub);

        		}
        		// 현장예산-수량 수정 시
        		else if(e.columnid == "QN_EXSILHENG")
        		{
        			var am_exsilheng = nexacro.Decimal(); // 현장예산-금액
        			var up_exsilheng = nexacro.Decimal(this.dsListSub.getColumn(e.row, "UP_EXSILHENG")); // 현장예산-단가

        			up_exsilheng.mulDecimal(newDecimalValue); // 연산

        			am_exsilheng = nexacro.floor(up_exsilheng);

        			this.dsListSub.setColumn(e.row, "AM_EXSILHENG", am_exsilheng);
        		}
        		// 현장예산-단가 수정 시
        		else if(e.columnid == "UP_EXSILHENG")
        		{
        			var am_exsilheng = nexacro.Decimal(); // 현장예산-금액
        			var qn_exsilheng = nexacro.Decimal(this.dsListSub.getColumn(e.row, "QN_EXSILHENG")); // 현장예산-수량

        			qn_exsilheng.mulDecimal(newDecimalValue); // 연산

        			am_exsilheng = nexacro.floor(qn_exsilheng);

        			this.dsListSub.setColumn(e.row, "AM_EXSILHENG", am_exsilheng);

        		}
        		// 수량-수량 수정 시
        		else if(e.columnid == "QN_TT_SILHENG")
        		{
        			/* 실행예산 */
        			var am_tt_silheng = nexacro.Decimal(); // 실행예산-금액
        			var up_tt_silheng = nexacro.Decimal(this.dsListSub.getColumn(e.row, "UP_TT_SILHENG")); // 실행예산-단가

        			up_tt_silheng.mulDecimal(newDecimalValue); // 연산

        			am_tt_silheng = nexacro.floor(up_tt_silheng);

        			this.dsListSub.setColumn(e.row, "AM_TT_SILHENG", am_tt_silheng);

        			/* 자재 */
        			var am_material = nexacro.Decimal(); // 금액-자재
        			var up_material = nexacro.Decimal(this.dsListSub.getColumn(e.row, "UP_MATERIAL")); // 단가-자재

        			up_material.mulDecimal(newDecimalValue); // 연산

        			am_material = nexacro.floor(up_material);

        			this.dsListSub.setColumn(e.row, "AM_MATERIAL", am_material);

        			/* 노무 */
        			var am_labor = nexacro.Decimal(); // 금액-노무
        			var up_labor = nexacro.Decimal(this.dsListSub.getColumn(e.row, "UP_LABOR")); // 단가-노무

        			up_labor.mulDecimal(newDecimalValue); // 연산

        			am_labor = nexacro.floor(up_labor);

        			this.dsListSub.setColumn(e.row, "AM_LABOR", am_labor);

        			/* 경비 */
        			var am_cost = nexacro.Decimal(); // 금액-경비
        			var up_cost = nexacro.Decimal(this.dsListSub.getColumn(e.row, "UP_COST")); // 단가-경비

        			up_cost.mulDecimal(newDecimalValue); //연산

        			am_cost = nexacro.floor(up_cost);

        			this.dsListSub.setColumn(e.row, "AM_COST", am_cost);
        		}
        		// 실행예산-단가 수정 시
        		else if(e.columnid == "UP_TT_SILHENG")
        		{
        			var am_tt_silheng = nexacro.Decimal(); // 실행예산-금액
        			var qn_tt_silheng = nexacro.Decimal(this.dsListSub.getColumn(e.row, "QN_TT_SILHENG")); // 수량-수량

        			qn_tt_silheng.mulDecimal(newDecimalValue); // 연산

        			am_tt_silheng = nexacro.floor(qn_tt_silheng);

        			this.dsListSub.setColumn(e.row, "AM_TT_SILHENG", am_tt_silheng);
        		}
        		// 단가-자재 수정 시
        		else if(e.columnid == "UP_MATERIAL")
        		{
        			var am_material = nexacro.Decimal(); // 금액-자재
        			var qn_tt_silheng = nexacro.Decimal(this.dsListSub.getColumn(e.row, "QN_TT_SILHENG")); // 수량-수량

        			qn_tt_silheng.mulDecimal(newDecimalValue); // 연산

        			am_matarial = nexacro.floor(qn_tt_silheng);

        			this.dsListSub.setColumn(e.row, "AM_MATERIAL", am_matarial);

        			var up_labor = this.dsListSub.getColumn(e.row, "UP_LABOR"); // 단가-노무
        			var up_cost = this.dsListSub.getColumn(e.row, "UP_COST"); // 단가-경비

        			this.dsListSub.setColumn(e.row, "UP_TT_SILHENG", nexacro.toNumber(e.newvalue,0) + nexacro.toNumber(up_labor,0) + nexacro.toNumber(up_cost,0));
        		}
        		// 단가-노무 수정 시
        		else if(e.columnid == "UP_LABOR")
        		{
        			var am_labor = nexacro.Decimal(); // 금액-경비
        			var qn_tt_silheng = nexacro.Decimal(this.dsListSub.getColumn(e.row, "QN_TT_SILHENG")); // 수량-수량

        			qn_tt_silheng.mulDecimal(newDecimalValue); // 연산

        			am_labor = nexacro.floor(qn_tt_silheng);

        			this.dsListSub.setColumn(e.row, "AM_LABOR", am_labor);

        			var up_material = this.dsListSub.getColumn(e.row, "UP_MATERIAL"); // 단가-자재
        			var up_cost = this.dsListSub.getColumn(e.row, "UP_COST"); // 단가-경비

        			this.dsListSub.setColumn(e.row, "UP_TT_SILHENG", nexacro.toNumber(e.newvalue,0) + nexacro.toNumber(up_material,0) + nexacro.toNumber(up_cost,0));
        		}
        		// 단가-경비 수정 시
        		else if(e.columnid == "UP_COST")
        		{
        			var am_cost = nexacro.Decimal(); // 금액-경비
        			var qn_tt_silheng = nexacro.Decimal(this.dsListSub.getColumn(e.row, "QN_TT_SILHENG")); // 수량-수량

        			qn_tt_silheng.mulDecimal(newDecimalValue); // 연산

        			am_cost = nexacro.floor(qn_tt_silheng);

        			this.dsListSub.setColumn(e.row, "AM_COST", am_cost);

        			var up_material = this.dsListSub.getColumn(e.row, "UP_MATERIAL"); // 단가-자재
        			var up_labor = this.dsListSub.getColumn(e.row, "UP_LABOR"); // 단가-노무

        			this.dsListSub.setColumn(e.row, "UP_TT_SILHENG", nexacro.toNumber(e.newvalue,0) + nexacro.toNumber(up_material,0) + nexacro.toNumber(up_labor,0));
        		}
        	}
        };




        this.dsListSub_oncolumnchanged = function(obj,e){
            if(e.oldvalue != e.newvalue){
              if(e.columnid == "UP_TT_SILHENG"){
        	     this.dsListSub.setColumn(e.row, "UP_TT_SILHENG", this.dsListSub.getColumn(e.row, "UP_MATERIAL") + this.dsListSub.getColumn(e.row, "UP_LABOR") + this.dsListSub.getColumn(e.row, "UP_COST"));
        	  }
            }
        };



        // 도급 체크박스
        this.divSearch_chkYN_DOKUB_onchanged = function(obj,e)
        {
        	var QN_TT_DOKUB_Index = this.dxGridSub.getBindCellIndex("body", "QN_TT_DOKUB");
        	var UP_TT_DOKUB_Index = this.dxGridSub.getBindCellIndex("body", "UP_TT_DOKUB");
        	var AM_TT_DOKUB_Index = this.dxGridSub.getBindCellIndex("body", "AM_TT_DOKUB");

        	if(obj.isChecked())
        	{
        		this.dxGridSub.setRealColSize("body", QN_TT_DOKUB_Index, 70);
        		this.dxGridSub.setRealColSize("body", UP_TT_DOKUB_Index, 90);
        		this.dxGridSub.setRealColSize("body", AM_TT_DOKUB_Index, 100);
        	}
        	else
        	{
        		this.dxGridSub.setRealColSize("body", QN_TT_DOKUB_Index, 0);
        		this.dxGridSub.setRealColSize("body", UP_TT_DOKUB_Index, 0);
        		this.dxGridSub.setRealColSize("body", AM_TT_DOKUB_Index, 0);
        	}
        };

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


        //예산현황
        this.fnCostTuja = function(obj, e){

        	if(!this.gfnGridIsRow(this.dxGridSub)){return false;}

        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE =  this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.CD_COST = this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_COST");
        	param.CD_DKCOST = this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_DKCOST");
        	param.DS_COST = this.dsListSub.getColumn(this.dsListSub.rowposition, "DS_COST");
        	param.SZ_SIZE = this.dsListSub.getColumn(this.dsListSub.rowposition, "SZ_SIZE");
        	param.DS_UNIT = this.dsListSub.getColumn(this.dsListSub.rowposition, "DS_UNIT");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWX_COSTTUJA", "", param);
        };


        this.fnIndirectSilInput = function(obj, e){

        	//if(!this.gfnGridIsRow(this.dxGridSub)){return false;}

        	var param = {};
        	param.CD_SITE    = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE    =  this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.NO_SILHENG = this.dsSearch.getColumn(0, "NO_SILHENG");
        	param.DS_SILHENG = this.divSearch.form.ccfNO_SILHENG.form.DSTextBox.text;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWA_INDIRECT_SILINPUT", "", param);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.chkYN_DOKUB.addEventHandler("onchanged",this.divSearch_chkYN_DOKUB_onchanged,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.dsListSub.addEventHandler("onvaluechanged",this.dsListSub_onvaluechanged,this);
        };
        this.loadIncludeScript("DWA_SILHENGREGITEM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
