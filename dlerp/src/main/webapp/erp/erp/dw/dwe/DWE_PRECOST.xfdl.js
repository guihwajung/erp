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
            this.set_titletext("추정원가집계표");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWAPR_CPSILHENG_MASTER_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWAPR_CPSILHENG_MASTER_SAVE</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DWAPR_CPSILHENG_CSTDTLS_SELECT</Col></Row><Row><Col id=\"TARGET\">d_save</Col><Col id=\"SP\">DWAPR_CPSILHENG_CSTDTLS_SAVE</Col></Row><Row><Col id=\"TARGET\">d_select1</Col><Col id=\"SP\">DWAPR_CPSILHENG_PLITEM_SELECT</Col></Row><Row><Col id=\"TARGET\">d_save1</Col><Col id=\"SP\">DWAPR_CPSILHENG_PLITEM_SAVE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_COMMON_SELECT_01</Col></Row><Row><Col id=\"TARGET\">d_select2</Col><Col id=\"SP\">DWAPR_CPSILHENG_RISK_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_WRK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"AM_UNIT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"AM_UNIT\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAM_UNIT", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("staYM_WORK","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("작업년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.getSetter("dateformat").set("yyyy-mm");
            obj.getSetter("editformat").set("yyyymm");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staAM_UNIT","ctclYM_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("금액단위");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboAM_UNIT","staAM_UNIT:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsAM_UNIT");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_value("0");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,"121","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100.00%","25",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("계약고/예산정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_wheelscrollrow("2");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataMedium","0","divDataTop:10",null,"260","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","100.00%","25",null,null,null,null,null,null,this.divData.form.divDataMedium.form);
            obj.set_taborder("0");
            obj.set_text("원가정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataMedium.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","sta02:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataMedium.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsListSub");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divData.form.divDataMedium.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divDataMedium:10",null,"220","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","0","0","100.00%","25",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("손익변동");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGridSub1","0","sta03:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsListSub1");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Div("divDataBottom1","0","divDataBottom:10",null,"207","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","0","0","100.00%","25",null,null,null,null,null,null,this.divData.form.divDataBottom1.form);
            obj.set_taborder("0");
            obj.set_text("미확정반영분");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom1.addChild(obj.name, obj);

            obj = new Grid("objGridSub2","0","sta04:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom1.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsListSub2");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divData.form.divDataBottom1.addChild(obj.name, obj);
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

            obj = new BindItem("item2","divSearch.form.cboAM_UNIT","value","dsSearch","AM_UNIT");
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
        this.registerScript("DWE_PRECOST.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this._ROW_HEIGHT = 0;

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
        	this.fnSetCombo();

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().YM_WORK))
        	{
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		this.dsSearch.setColumn(0, "YM_WORK", this.getOwnerFrame().YM_WORK);
        		this.FormBtns.Select.click();

        	}else{
        		this.dsSearch.setColumn(0, "YM_WORK", this.gfnGetDate());
        	}

        	this._ROW_HEIGHT = this.gfnGetConfig("DW" , "ROW_HEIGHT");

        	// 30 -> 해당 Div의 Title 높이와 여백.
        	// 2 -> 선 크기.
        	// 15 + 2 -> 가로 스크롤 높이 및 선 크기.
         	this.divData.form.divDataTop.set_height(this._ROW_HEIGHT * 3 + 32 + 17);
         	this.divData.form.divDataMedium.set_height(this._ROW_HEIGHT * 8 + 32 + 17);
         	this.divData.form.divDataBottom.set_height(this._ROW_HEIGHT * 6 + 32 + 17);
        	this.divData.form.divDataBottom1.set_height(this._ROW_HEIGHT * 6 + 32 + 17);
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
        	this.btn1 = this.gfnFormButtonAdd("btnCpSilheng", "fnCpSilheng");
        	this.btnSiteClrDlg = this.gfnFormButtonAdd("btnSiteClrDlg", "fnSiteClrDlg");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ctclYM_WORK = this.divSearch.form.ctclYM_WORK;
        	this.cboAM_UNIT = this.divSearch.form.cboAM_UNIT;

        	this.dxGrid = this.divData.form.divDataTop.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataMedium.form.objGridSub;
        	this.dxGridSub1 = this.divData.form.divDataBottom.form.objGridSub1;
        	this.dxGridSub2 = this.divData.form.divDataBottom1.form.objGridSub2;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.gfnGridInit(this.dxGrid, this.dsList, "DWE", "DWE_CPSILHENG_MASTER");
        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DWE", "DWE_CPSILHENG_CSTDTLS");
        	this.gfnGridInit(this.dxGridSub1, this.dsListSub1, "DWE", "DWE_CPSILHENG_PLITEM");
        	this.gfnGridInit(this.dxGridSub2, this.dsListSub2, "DWE", "DWE_CPSILHENG_RISKPRTL");

        	// row 수정가능 여부
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        	this.dxGridSub.EnterCell = "fnGrid_EnterCell";
        	this.dxGridSub1.EnterCell = "fnGrid_EnterCell";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");
        	this.dsSelect.addColumn("AM_UNIT", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("YM_WORK", "string");
        	this.dsSave.addColumn("NO_SILHENG", "string");
        	this.dsSave.addColumn("YM_CPSILHENG", "string");
        	this.dsSave.addColumn("RT_CPSILHENG", "bigdecimal");
        	this.dsSave.addColumn("AM_PRECOST_DOKUB", "bigdecimal");
        	this.dsSave.addColumn("AM_PRECOST_SILHENG", "bigdecimal");
        	this.dsSave.addColumn("AM_PRECOST_EXSILHENG", "bigdecimal");
        	this.dsSave.addColumn("AM_PRECOST_CPSILHENG", "bigdecimal");
        	this.dsSave.addColumn("AM_PRECOST_TUJA", "bigdecimal");
        	this.dsSave.addColumn("RT_PRECOST_DOKUB", "bigdecimal");
        	this.dsSave.addColumn("RT_PRECOST_SILHENG", "bigdecimal");
        	this.dsSave.addColumn("RT_PRECOST_EXSILHENG", "bigdecimal");
        	this.dsSave.addColumn("RT_PRECOST_CPSILHENG", "bigdecimal");
        	this.dsSave.addColumn("RT_PRECOST_TUJA", "bigdecimal");
        	this.dsSave.addColumn("AM_DOKUB_OUR", "bigdecimal");
        	this.dsSave.addColumn("AM_SILHENG_OUR", "bigdecimal");
        	this.dsSave.addColumn("AM_EXSILHENG_OUR", "bigdecimal");
        	this.dsSave.addColumn("AM_CPSILHENG_OUR", "bigdecimal");
        	this.dsSave.addColumn("AM_TUJA_OUR", "bigdecimal");
        	this.dsSave.addColumn("RT_CNSTPRSC", "bigdecimal");
        	this.dsSave.addColumn("AM_PROC_TYER", "bigdecimal");
        	this.dsSave.addColumn("AM_PROC_NYER", "bigdecimal");
        	this.dsSave.addColumn("AM_BILCLT_TYER", "bigdecimal");
        	this.dsSave.addColumn("DS_RMKS", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("TY_WRK", "string");
        	this.dsSelectSub.addColumn("CD_SITE", "string");
        	this.dsSelectSub.addColumn("YM_WORK", "string");
        	this.dsSelectSub.addColumn("AM_UNIT", "string");

        	this.dsSaveSub = new Dataset();
        	this.dsSaveSub.addColumn("TY_WRK", "string");
        	this.dsSaveSub.addColumn("ID_USER", "string");
        	this.dsSaveSub.addColumn("CD_SITE", "string");
        	this.dsSaveSub.addColumn("YM_WORK", "string");
        	this.dsSaveSub.addColumn("CD_CST", "string");
        	this.dsSaveSub.addColumn("AM_SILHENG", "bigdecimal");
        	this.dsSaveSub.addColumn("AM_TUJA", "bigdecimal");
        	this.dsSaveSub.addColumn("AM_CPSILHENG", "bigdecimal");
        	this.dsSaveSub.addColumn("DS_RMKS", "string");

        	this.dsSelectSub1 = new Dataset();
        	this.dsSelectSub1.addColumn("TY_WRK", "string");
        	this.dsSelectSub1.addColumn("CD_SITE", "string");
        	this.dsSelectSub1.addColumn("YM_WORK", "string");
        	this.dsSelectSub1.addColumn("AM_UNIT", "string");

        	this.dsSaveSub1 = new Dataset();
        	this.dsSaveSub1.addColumn("TY_WRK", "string");
        	this.dsSaveSub1.addColumn("ID_USER", "string");
        	this.dsSaveSub1.addColumn("YM_WORK", "string");
        	this.dsSaveSub1.addColumn("CD_SITE", "string");
        	this.dsSaveSub1.addColumn("CD_COST", "string");
        	this.dsSaveSub1.addColumn("CD_PL", "string");
        	this.dsSaveSub1.addColumn("CD_PLITEM", "string");
        	this.dsSaveSub1.addColumn("AM_PL", "bigdecimal");
        	this.dsSaveSub1.addColumn("DS_REMARK", "string");
        	this.dsSaveSub1.addColumn("CD_IMPWITEM", "string");

        	this.dsSelectSub2 = new Dataset();
        	this.dsSelectSub2.addColumn("TY_WRK", "string");
        	this.dsSelectSub2.addColumn("CD_SITE", "string");
        	this.dsSelectSub2.addColumn("YM_WORK", "string");
        	this.dsSelectSub2.addColumn("NO_RISK", "string");
        	this.dsSelectSub2.addColumn("CD_SRCH", "string");
        	this.dsSelectSub2.addColumn("YN_NRFLT", "string");
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
        	this.dsSelect.setColumn(0, "TY_WRK", "Q");
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        	this.dsSelect.setColumn(0, "AM_UNIT", this.dsSearch.getColumn(0, "AM_UNIT"));

        	//1
        	// 디테일 데이터셋 데이터 삭제
        	this.dsListSub.clearData();

        	// 디테일 파라미터 데이터셋 셋팅
        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();

        	this.dsSelectSub.setColumn(0, "TY_WRK", "Q");
        	this.dsSelectSub.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelectSub.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        	this.dsSelectSub.setColumn(0, "AM_UNIT", this.dsSearch.getColumn(0, "AM_UNIT"));

        	//2
        	// 디테일 데이터셋 데이터 삭제
        	this.dsListSub1.clearData();

        	// 디테일 파라미터 데이터셋 셋팅
        	this.dsSelectSub1.clearData();
        	this.dsSelectSub1.addRow();

        	this.dsSelectSub1.setColumn(0, "TY_WRK", "Q");
        	this.dsSelectSub1.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelectSub1.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        	this.dsSelectSub1.setColumn(0, "AM_UNIT", this.dsSearch.getColumn(0, "AM_UNIT"));

        	// 3
        	// 디테일 데이터셋 데이터 삭제
        	this.dsListSub2.clearData();

        	// 디테일 파라미터 데이터셋 셋팅
        	this.dsSelectSub2.clearData();
        	this.dsSelectSub2.addRow();

        	this.dsSelectSub2.setColumn(0, "TY_WRK", "Q");
        	this.dsSelectSub2.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelectSub2.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsSelectSub2.setColumn(0, "NO_RISK", "");
        	this.dsSelectSub2.setColumn(0, "CD_SRCH", "NRFLT");
        	this.dsSelectSub2.setColumn(0, "YN_NRFLT", "Y");

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect d_select=dsSelectSub d_select1=dsSelectSub1 d_select2=dsSelectSub2";
        	var outData     = "dsList=select0 dsListSub=d_select0 dsListSub1=d_select10 dsListSub2=d_select20";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]

        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	//var nrow = this.gfnGridAdd(this.dxGrid, "bottom"); // top (default), bottom, current
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
        }


        /*
         *	저장 버튼
         */
         this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;
        	if (!this.gfnGridValidate(this.dxGridSub)) return;
        	if (!this.gfnGridValidate(this.dxGridSub1)) return;

        	this.dxGrid.updateToDataset();
        	this.dxGridSub.updateToDataset();
        	this.dxGridSub1.updateToDataset();
        	this.dsSave.clearData();
        	this.dsSaveSub.clearData();
        	this.dsSaveSub1.clearData();

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
        			this.dsSave.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        			this.dsSave.setColumn(nrow, "NO_SILHENG", this.dsList.getColumn(i, "NO_SILHENG"));
        			this.dsSave.setColumn(nrow, "YM_CPSILHENG", this.dsList.getColumn(i, "YM_CPSILHENG"));
        			this.dsSave.setColumn(nrow, "RT_CPSILHENG", this.dsList.getColumn(i, "RT_CPSILHENG"));
        			this.dsSave.setColumn(nrow, "AM_PRECOST_DOKUB", this.dsList.getColumn(i, "AM_PRECOST_DOKUB"));
        			this.dsSave.setColumn(nrow, "AM_PRECOST_SILHENG", this.dsList.getColumn(i, "AM_PRECOST_SILHENG"));
        			this.dsSave.setColumn(nrow, "AM_PRECOST_EXSILHENG", this.dsList.getColumn(i, "AM_PRECOST_EXSILHENG"));
        			this.dsSave.setColumn(nrow, "AM_PRECOST_CPSILHENG", this.dsList.getColumn(i, "AM_PRECOST_CPSILHENG"));
        			this.dsSave.setColumn(nrow, "AM_PRECOST_TUJA", this.dsList.getColumn(i, "AM_PRECOST_TUJA"));
        			this.dsSave.setColumn(nrow, "RT_PRECOST_DOKUB", this.dsList.getColumn(i, "RT_PRECOST_DOKUB"));
        			this.dsSave.setColumn(nrow, "RT_PRECOST_SILHENG", this.dsList.getColumn(i, "RT_PRECOST_SILHENG"));
        			this.dsSave.setColumn(nrow, "RT_PRECOST_EXSILHENG", this.dsList.getColumn(i, "RT_PRECOST_EXSILHENG"));
        			this.dsSave.setColumn(nrow, "RT_PRECOST_CPSILHENG", this.dsList.getColumn(i, "RT_PRECOST_CPSILHENG"));
        			this.dsSave.setColumn(nrow, "RT_PRECOST_TUJA", this.dsList.getColumn(i, "RT_PRECOST_TUJA"));
        			this.dsSave.setColumn(nrow, "AM_DOKUB_OUR", this.dsList.getColumn(i, "AM_DOKUB_OUR"));
        			this.dsSave.setColumn(nrow, "AM_SILHENG_OUR", this.dsList.getColumn(i, "AM_SILHENG_OUR"));
        			this.dsSave.setColumn(nrow, "AM_EXSILHENG_OUR", this.dsList.getColumn(i, "AM_EXSILHENG_OUR"));
        			this.dsSave.setColumn(nrow, "AM_CPSILHENG_OUR", this.dsList.getColumn(i, "AM_CPSILHENG_OUR"));
        			this.dsSave.setColumn(nrow, "AM_TUJA_OUR", this.dsList.getColumn(i, "AM_TUJA_OUR"));
        			this.dsSave.setColumn(nrow, "RT_CNSTPRSC", this.dsList.getColumn(i, "RT_CNSTPRSC"));
        			this.dsSave.setColumn(nrow, "AM_PROC_TYER", this.dsList.getColumn(i, "AM_PROC_TYER"));
        			this.dsSave.setColumn(nrow, "AM_PROC_NYER", this.dsList.getColumn(i, "AM_PROC_NYER"));
        			this.dsSave.setColumn(nrow, "AM_BILCLT_TYER", this.dsList.getColumn(i, "AM_BILCLT_TYER"));
        			this.dsSave.setColumn(nrow, "DS_RMKS", this.dsList.getColumn(i, "DS_RMKS"));
        			break;
        		}
        	}

        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSaveSub.addRow();
        				this.dsSaveSub.setColumn(nrow, "TY_WRK", flag);
        				this.dsSaveSub.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSaveSub.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsSaveSub.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        				this.dsSaveSub.setColumn(nrow, "CD_CST", this.dsListSub.getColumn(i, "CD_CST"));
        				this.dsSaveSub.setColumn(nrow, "AM_SILHENG", this.dsListSub.getColumn(i, "AM_SILHENG"));
        				this.dsSaveSub.setColumn(nrow, "AM_TUJA", this.dsListSub.getColumn(i, "AM_TUJA"));
        				this.dsSaveSub.setColumn(nrow, "AM_CPSILHENG", this.dsListSub.getColumn(i, "AM_CPSILHENG"));
        				this.dsSaveSub.setColumn(nrow, "DS_RMKS", this.dsListSub.getColumn(i, "DS_RMKS"));
        				break;
        		}
        	}
        	for (var i = 0; i < this.dsListSub1.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub1, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSaveSub1.addRow();
        				this.dsSaveSub1.setColumn(nrow, "TY_WRK", flag);
        				this.dsSaveSub1.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSaveSub1.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        				this.dsSaveSub1.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsSaveSub1.setColumn(nrow, "CD_COST", "");
        				this.dsSaveSub1.setColumn(nrow, "CD_PL", "");
        				this.dsSaveSub1.setColumn(nrow, "CD_PLITEM", this.dsListSub1.getColumn(i, "CD_PLITEM"));
        				this.dsSaveSub1.setColumn(nrow, "AM_PL", this.dsListSub1.getColumn(i, "AM_PL"));
        				this.dsSaveSub1.setColumn(nrow, "DS_REMARK", this.dsListSub1.getColumn(i, "DS_REMARK"));
        				this.dsSaveSub1.setColumn(nrow, "CD_IMPWITEM", "");
        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0 && this.dsSaveSub.rowcount == 0 && this.dsSaveSub1.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
            var inData     = "save=dsSave d_save=dsSaveSub d_save1=dsSaveSub1";
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;

        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");

        	}else if(this.gfnIsNull(this.divSearch.form.ctclYM_WORK.form.TextBox.value)){
        		validate = false;

        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctclYM_WORK.form.TextBox.setFocus();
        		}
        		this.gfnAlert("작업년월을 입력하세요.", "fnVaidateCallback");
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
        		if(this.dsList.rowcount > 0) {
        			//this.dxGrid.setRealRowSize(0, this._ROW_HEIGHT);
        		}
        		this.gfnGridAfterSelect(this.dxGridSub);
        		if(this.dsListSub.rowcount > 0) {
        			//this.dxGridSub.setRealRowSize(0, this._ROW_HEIGHT);
        		}
        		this.gfnGridAfterSelect(this.dxGridSub1);
        		if(this.dsListSub1.rowcount > 0) {
        		//	this.dxGridSub1.setRealRowSize(0, this._ROW_HEIGHT);
        		}
        		this.gfnGridAfterSelect(this.dxGridSub2);
        		if(this.dsListSub2.rowcount > 0) {
        			//this.dxGridSub2.setRealRowSize(0, this._ROW_HEIGHT);
        		}
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

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_EnterCell = function(obj, row, cell) {
        	// 수정가능 true, false 처리하려는 컬럼에 대해서만 return 처리할것.
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);	// 클릭한 cell의 컬럼명

        	// 클릭했을때 클릭한 cell을 수정 가능 or 불가능 상태로 만든다.
        	// YN_EDIT 값이 Y일때만 수정가능상태
        	if(this.dsList.getColumn(row, "YN_EDIT") == "N") {
        		return false;
        	}
        }

         this.fnGridSub_EnterCell = function(obj, row, cell) {
        	// 수정가능 true, false 처리하려는 컬럼에 대해서만 return 처리할것.
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGridSub, cell);	// 클릭한 cell의 컬럼명

        	// 클릭했을때 클릭한 cell을 수정 가능 or 불가능 상태로 만든다.
        	// YN_EDIT 값이 Y일때만 수정가능상태
        	if(this.dsListSub.getColumn(row, "YN_EDIT") == "N") {
        		return false;
        	}
        }

         this.fnGridSub1_EnterCell = function(obj, row, cell) {
        	// 수정가능 true, false 처리하려는 컬럼에 대해서만 return 처리할것.
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGridSub1, cell);	// 클릭한 cell의 컬럼명

        	// 클릭했을때 클릭한 cell을 수정 가능 or 불가능 상태로 만든다.
        	// YN_EDIT 값이 Y일때만 수정가능상태
        	if(this.dsListSub1.getColumn(row, "YN_EDIT") == "N") {
        		return false;
        	}
        }

         this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");
        	this.dsCombo.addColumn("YN_USE", "string");
        	this.dsCombo.addColumn("YN_ALL", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DW");
        	this.dsCombo.setColumn(0, "CD_TYPE", "71");
        	this.dsCombo.setColumn(0, "YN_USE", "Y");
        	this.dsCombo.setColumn(0, "YN_ALL", "N");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsAM_UNIT=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallbackCombo";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnCallbackCombo = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "combo") {
        		/*
        		this.dsNO_DGR.insertRow(0);
        		this.dsNO_DGR.setColumn(0, "CD_DGR", "");
        		this.dsNO_DGR.setColumn(0, "DS_DGR", "전체");
         		*/
        		this.divSearch.form.cboAM_UNIT.set_index(0);

        	}
        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.fnCpSilheng = function(obj,e) {

        	var param = {};
        	param.CD_SITE =  this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE =  this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.YM_WORK =  this.dsSearch.getColumn(0, "YM_WORK");

        	this.gfnFormOpen("DWE", "DWE_CPSILHENG", "", param);
        }

        this.fnSiteClrDlg = function(obj,e) {

        	var param = {};
        	param.CD_SITE =  this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE =  this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.DT_END =   this.gfnGetLastDate(this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));

        	this.gfnFormOpenNonAuth("DWE", "DWE_SITECLRDLG", "", param, 500, 250);
        }

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        		this.gfnGridClear(this.dxGridSub1);
        		this.gfnGridClear(this.dxGridSub2);
        	}
        };

        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        		this.gfnGridClear(this.dxGridSub1);
        		this.gfnGridClear(this.dxGridSub2);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWE_PRECOST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
