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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DXXPR_NXGRIDSPEC_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DXXPR_NXGRIDSPEC_SAVE</Col></Row><Row><Col id=\"TARGET\">loadsp</Col><Col id=\"SP\">DZZPR_SPHELP_SELECT</Col></Row><Row><Col id=\"TARGET\">realsp</Col><Col id=\"SP\"/></Row><Row><Col id=\"TARGET\">info</Col><Col id=\"SP\">DXXPR_NXGRIDINFO_SELECT</Col></Row><Row><Col id=\"TARGET\">info_save</Col><Col id=\"SP\">DXXPR_NXGRIDINFO_SAVE</Col></Row><Row><Col id=\"TARGET\">layout_select</Col><Col id=\"SP\">DXXPR_NXGRIDLAYOUT_SELECT</Col></Row><Row><Col id=\"TARGET\">layout_save</Col><Col id=\"SP\">DXXPR_NXGRIDLAYOUT_SAVE</Col></Row><Row><Col id=\"TARGET\">deploy</Col><Col id=\"SP\">DXXPR_NXGRID_DEPLOY</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSPInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSPSpec", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSP", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListPreview", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBackground", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"FCODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">ChongKe</Col></Row><Row><Col id=\"CODE\">Fixed</Col></Row><Row><Col id=\"CODE\">Footer</Col></Row><Row><Col id=\"CODE\">Frozen</Col></Row><Row><Col id=\"CODE\">GangJo</Col></Row><Row><Col id=\"CODE\">KuBun</Col></Row><Row><Col id=\"CODE\">Line</Col></Row><Row><Col id=\"CODE\">ReadOnly</Col></Row><Row><Col id=\"CODE\">SoKe</Col></Row><Row><Col id=\"CODE\">Sum</Col></Row><Row><Col id=\"CODE\">Title</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsForeground", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BCODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Red</Col></Row><Row><Col id=\"CODE\">Blue</Col></Row><Row><Col id=\"CODE\">Green</Col></Row><Row><Col id=\"CODE\">Yellow</Col></Row><Row><Col id=\"CODE\">Gray</Col></Row><Row><Col id=\"CODE\">Purple</Col></Row><Row><Col id=\"CODE\">Pink</Col></Row><Row><Col id=\"CODE\">Black</Col></Row><Row><Col id=\"CODE\">YGreen</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeploy", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SYSTEM\" type=\"STRING\" size=\"256\"/><Column id=\"ID_GRID\" type=\"STRING\" size=\"256\"/><Column id=\"NM_DB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"45","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM","10","10","40","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("시스템");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SYSTEM","staCD_SYSTEM:10","10","150","25",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.getSetter("readonly").set("true");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_GRID","ccfCD_SYSTEM:10","10","50","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("ID_GRID");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtID_GRID","staID_GRID:10","10","200","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNM_SP","ctxtID_GRID:10","10","30","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("SP");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_SP","staNM_SP:10","10","200","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("cbtnLoadSP","ctxtNM_SP:5","10","69","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("Load");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","120",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divDataRight","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("컬럼정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("divMakeBtns","0","sta01:5",null,"70","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btnFlag","0","0","110","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divMakeBtns.form);
            obj.set_taborder("0");
            obj.set_text("Flag");
            this.divData.form.divDataRight.form.divMakeBtns.addChild(obj.name, obj);

            obj = new Button("btnCode","btnFlag:5","0","110","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divMakeBtns.form);
            obj.set_taborder("0");
            obj.set_text("코드");
            this.divData.form.divDataRight.form.divMakeBtns.addChild(obj.name, obj);

            obj = new Button("btnName","btnFlag:5","btnCode:2","110","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divMakeBtns.form);
            obj.set_taborder("0");
            obj.set_text("명칭");
            this.divData.form.divDataRight.form.divMakeBtns.addChild(obj.name, obj);

            obj = new Button("btnDesc","btnFlag:5","btnName:2","110","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divMakeBtns.form);
            obj.set_taborder("0");
            obj.set_text("비고");
            this.divData.form.divDataRight.form.divMakeBtns.addChild(obj.name, obj);

            obj = new Button("btnAmt","btnCode:5","0","110","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divMakeBtns.form);
            obj.set_taborder("0");
            obj.set_text("금액");
            this.divData.form.divDataRight.form.divMakeBtns.addChild(obj.name, obj);

            obj = new Button("btnRT","btnCode:5","btnAmt:2","110","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divMakeBtns.form);
            obj.set_taborder("0");
            obj.set_text("비율");
            this.divData.form.divDataRight.form.divMakeBtns.addChild(obj.name, obj);

            obj = new Button("btnYYYY","btnAmt:5","0","110","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divMakeBtns.form);
            obj.set_taborder("0");
            obj.set_text("YYYY");
            this.divData.form.divDataRight.form.divMakeBtns.addChild(obj.name, obj);

            obj = new Button("btnYYYYMM","btnAmt:5","btnYYYY:2","110","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divMakeBtns.form);
            obj.set_taborder("0");
            obj.set_text("YYYY-MM");
            this.divData.form.divDataRight.form.divMakeBtns.addChild(obj.name, obj);

            obj = new Button("btnYYYYMMDD","btnAmt:5","btnYYYYMM:2","110","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divMakeBtns.form);
            obj.set_taborder("0");
            obj.set_text("YYYY-MM-DD");
            this.divData.form.divDataRight.form.divMakeBtns.addChild(obj.name, obj);

            obj = new Button("btnCombo","btnYYYY:5","0","110","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divMakeBtns.form);
            obj.set_taborder("0");
            obj.set_text("콤보리스트");
            this.divData.form.divDataRight.form.divMakeBtns.addChild(obj.name, obj);

            obj = new Button("btnCodeFindCD","btnYYYY:5","btnCombo:2","110","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divMakeBtns.form);
            obj.set_taborder("0");
            obj.set_text("코드파인드_코드");
            this.divData.form.divDataRight.form.divMakeBtns.addChild(obj.name, obj);

            obj = new Button("btnCodeFindDS","btnYYYY:5","btnCodeFindCD:2","110","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divMakeBtns.form);
            obj.set_taborder("0");
            obj.set_text("코드파인드_명칭");
            this.divData.form.divDataRight.form.divMakeBtns.addChild(obj.name, obj);

            obj = new Button("btnCheckbox","btnCombo:5","0","110","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divMakeBtns.form);
            obj.set_taborder("0");
            obj.set_text("체크박스");
            this.divData.form.divDataRight.form.divMakeBtns.addChild(obj.name, obj);

            obj = new Button("btnCheckboxYN","575","btnCheckbox:2","110","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divMakeBtns.form);
            obj.set_taborder("16");
            obj.set_text("체크박스YN");
            this.divData.form.divDataRight.form.divMakeBtns.addChild(obj.name, obj);

            obj = new Button("btnCheckboxAll","btnCombo:5","btnCheckboxYN:2","110","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divMakeBtns.form);
            obj.set_taborder("0");
            obj.set_text("체크박스(전체선택)");
            this.divData.form.divDataRight.form.divMakeBtns.addChild(obj.name, obj);

            obj = new Button("btnReadonly","btnCheckbox:5","0","110","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divMakeBtns.form);
            obj.set_taborder("0");
            obj.set_text("읽기전용");
            this.divData.form.divDataRight.form.divMakeBtns.addChild(obj.name, obj);

            obj = new Button("btnReadonlyU","btnCheckbox:5","btnReadonly:2","110","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divMakeBtns.form);
            obj.set_taborder("0");
            obj.set_text("읽기전용(입력만)");
            this.divData.form.divDataRight.form.divMakeBtns.addChild(obj.name, obj);

            obj = new Button("btnOrder","0","btnFlag:2","110","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divMakeBtns.form);
            obj.set_taborder("17");
            obj.set_text("순번재정렬");
            obj.set_color("yellow");
            this.divData.form.divDataRight.form.divMakeBtns.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","divMakeBtns:5",null,null,"0","125",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("divData1","0","objGrid:5",null,"120","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100.00%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divData1.form);
            obj.set_taborder("0");
            obj.set_text("그리드정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.form.divData1.addChild(obj.name, obj);

            obj = new Grid("objGrid3","0","sta01:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form.divData1.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataRight.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta00","120","2","625","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("4");
            obj.set_text("※ 컬럼 드래그로 순서 변경가능. 추가 레이아웃 컬럼정보 삭제시 기본컬럼 정보를 사용합니다.");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Grid("grdBackground","64","165","100","194",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("5");
            obj.set_binddataset("dsBackground");
            obj.set_selecttype("cell");
            obj.set_cssclass("grd_color");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"0\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CODE\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/></Band></Format></Formats>");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Grid("grdForeground","256","165","100","194",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("6");
            obj.set_binddataset("dsForeground");
            obj.set_selecttype("cell");
            obj.set_cssclass("grd_color");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"0\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CODE\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/></Band></Format></Formats>");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("divData2","0","divData:5",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","210","165","500","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_background("#ffffff");
            obj.set_border("1px dotted");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DXX_NXGRIDSPEC.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this._ID_CUSTOM = "";

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

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SYSTEM) && !this.gfnIsNull(this.getOwnerFrame().ID_GRID)) {
        		this.ccfCD_SYSTEM.form.CDTextBox.set_value(this.getOwnerFrame().CD_SYSTEM);
        		if(this.gfnIsNull(this.getOwnerFrame().DS_SYSTEM)) {
        			this.ccfCD_SYSTEM.form.fnCodeFindLoad();
        		} else {
        			this.ccfCD_SYSTEM.form.DSTextBox.set_value(this.getOwnerFrame().DS_SYSTEM);
        		}
        		var id_grid = this.getOwnerFrame().ID_GRID;
        		if(id_grid.indexOf('#') > -1) {
        			this.ctxtID_GRID.set_value(id_grid.substring(0, id_grid.lastIndexOf('#')));
        			this._ID_CUSTOM = id_grid.substring(id_grid.lastIndexOf('#')+1);
        			this._ID_CUSTOM_FIND = this._ID_CUSTOM;
        		} else {
        			this.ctxtID_GRID.set_value(id_grid);
        		}

        	}

        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정
         ************************************************************************/
        this.fnSetButton = function() {
        // 	var id_group = this.FormInfo.ID_GROUP;
        // 	var gr_search = this.FormInfo.GR_SEARCH;
        // 	var cd_role = this.FormInfo.CD_ROLE;
        //	this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter); // divSplitter sync
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btn1 = this.gfnFormButtonAdd("CodeFind", "fnCodeFind"); //"코드파인드",
        	this.btnDeploy = this.gfnFormButtonAdd("Deploy", "fnDeploy"); //그리드정보 운영 배포
        	this.btnGenerate = this.gfnFormButtonAdd("btnGenerate", "fnGenerate"); //SetParameter 정보 생성
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SYSTEM = this.divSearch.form.ccfCD_SYSTEM;
        	this.ctxtID_GRID = this.divSearch.form.ctxtID_GRID;
        	this.ctxtNM_SP = this.divSearch.form.ctxtNM_SP;
        	this.dxGrid = this.divData.form.divDataRight.form.objGrid;
        	this.dxGridInfo = this.divData.form.divDataRight.form.divData1.form.objGrid3;
        	this.grdBackground = this.divData.form.divDataRight.form.grdBackground;
        	this.grdForeground = this.divData.form.divDataRight.form.grdForeground;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_SYSTEM.CodeFindName = "DZX_CFSYSTEM";
        	this.ccfCD_SYSTEM.AfterCDTextChanged = "fnSearchInit";

        	this.dxGridInfo.AfterLoad = "fnGridInfo_AfterLoad";

        	this.dxGrid.layout = false;
        	this.dxGridInfo.layout = false;

        	this.dxGrid.AfterInit = "fnGrid_AfterInit";
        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";

        	this.gfnGridInitAsync(this.dxGrid, this.dsList, "DZ", "DXX_NXGRIDSPEC");
        	this.gfnGridInitAsync(this.dxGridInfo, this.dsListInfo, "DZ", "DXX_NXGRIDINFO");


        	this.dxGrid.addEventHandler("ondrag", this.dxGrid_ondrag, this);
        	this.dxGrid.addEventHandler("ondrop", this.dxGrid_ondrop, this);
        	//this.dxGrid.addEventHandler("ondragleave", this.dxGrid_ondragleave, this);

        	this.dxGrid.addEventHandler("ondropdown", this.dxGrid_ondropdown, this);

        	this.grdBackground.setCellProperty("body", 0, "cssclass", "expr:'BACK_'+CODE +','+FCODE");
        	this.grdForeground.setCellProperty("body", 0, "cssclass", "expr:'BACK_'+BCODE+','+CODE");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_SYSTEM", "string");
        	this.dsSelect.addColumn("ID_GRID", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_FLAG", "string");
        	this.dsSave.addColumn("NO_SEQ", "int");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("CD_SYSTEM", "string");
        	this.dsSave.addColumn("ID_GRID", "string");
        	this.dsSave.addColumn("NO_COL", "int");
        	this.dsSave.addColumn("DS_HEADER1", "string");
        	this.dsSave.addColumn("DS_HEADER2", "string");
        	this.dsSave.addColumn("DS_HEADER3", "string");
        	this.dsSave.addColumn("NO_WIDTH", "int");
        	this.dsSave.addColumn("YN_READONLY", "string");
        	this.dsSave.addColumn("YN_ESSENTIAL", "string");
        	this.dsSave.addColumn("TY_CELLTYPE", "string");
        	this.dsSave.addColumn("TY_ALIGN", "string");
        	this.dsSave.addColumn("TY_INPUT", "string");
        	this.dsSave.addColumn("NO_MAXLENGTH", "int");
        	this.dsSave.addColumn("DS_COMBOLIST", "string");
        	this.dsSave.addColumn("CD_CODEFIND", "string");
        	this.dsSave.addColumn("NM_CODEFIND", "string");
        	this.dsSave.addColumn("DS_RESULTALIAS", "string");
        	this.dsSave.addColumn("TY_IME", "string");
        	this.dsSave.addColumn("AT_READONLY", "string");
        	this.dsSave.addColumn("AT_GRAYBACK", "string");
        	this.dsSave.addColumn("AT_HIGHLIGHTBACK", "string");
        	this.dsSave.addColumn("AT_HIGHLIGHTFORE", "string");
        	this.dsSave.addColumn("AT_COLBACK", "string");
        	this.dsSave.addColumn("AT_COLFORE", "string");
        	this.dsSave.addColumn("RM_BIGO", "string");
        	this.dsSave.addColumn("DS_FIELD", "string");
        	this.dsSave.addColumn("DS_EXPRESSION", "string");
        	this.dsSave.addColumn("TY_FIXED", "string");
        	this.dsSave.addColumn("TY_SUMMARY", "string");
        	this.dsSave.addColumn("EX_SUMMARY", "string");
        	this.dsSave.addColumn("NO_GROUP", "int");
        	this.dsSave.addColumn("NO_MERGE", "int");
        	this.dsSave.addColumn("AT_ROWHIDDEN", "string");
        	this.dsSave.addColumn("YN_LAYOUTHIDDEN", "string");
        	this.dsSave.addColumn("ID_USER", "string");

        	this.dsLoadSP = new Dataset();
        	this.dsLoadSP.addColumn("SPNAME", "string");

        	this.dsSaveLayout = new Dataset();
        	this.dsSaveLayout.addColumn("TY_FLAG", "string");
        	this.dsSaveLayout.addColumn("CD_CORP", "string");
        	this.dsSaveLayout.addColumn("CD_SYSTEM", "string");
        	this.dsSaveLayout.addColumn("ID_GRID", "string");
        	this.dsSaveLayout.addColumn("ID_CUSTOM", "string");
        	this.dsSaveLayout.addColumn("NM_GRID", "string");
        	this.dsSaveLayout.addColumn("NO_SORT", "int");
        	this.dsSaveLayout.addColumn("YN_USE", "string");
        	this.dsSaveLayout.addColumn("ID_USER", "string");

        	this.dsSaveInfo = new Dataset();
        	this.dsSaveInfo.addColumn("TY_FLAG", "string");
        	this.dsSaveInfo.addColumn("CD_CORP", "string");
        	this.dsSaveInfo.addColumn("CD_SYSTEM", "string");
        	this.dsSaveInfo.addColumn("ID_GRID", "string");
        	this.dsSaveInfo.addColumn("NM_GRID", "string");
        	this.dsSaveInfo.addColumn("YN_READONLY", "string");
        	this.dsSaveInfo.addColumn("NO_FIXEDROWS", "int");
        	this.dsSaveInfo.addColumn("NO_FROZENCOL", "int");
        	this.dsSaveInfo.addColumn("YN_MULTILINE", "string");
        	this.dsSaveInfo.addColumn("RM_BIGO1", "string");
        	this.dsSaveInfo.addColumn("RM_BIGO2", "string");
        	this.dsSaveInfo.addColumn("YN_AUTOFILTER", "string");
        	this.dsSaveInfo.addColumn("YN_SEARCHBAR", "string");
        	this.dsSaveInfo.addColumn("YN_GROUPPANNEL", "string");
        	this.dsSaveInfo.addColumn("TY_GROUP", "string");
        	this.dsSaveInfo.addColumn("ID_FORM", "string");
        	this.dsSaveInfo.addColumn("NM_FORM", "string");
        	this.dsSaveInfo.addColumn("DS_REQUEST", "string");
        	this.dsSaveInfo.addColumn("DT_WORK", "string");
        	this.dsSaveInfo.addColumn("DS_WORK", "string");
        	this.dsSaveInfo.addColumn("DS_CONFIRM", "string");
        	this.dsSaveInfo.addColumn("RM_TEST", "string");
        	this.dsSaveInfo.addColumn("YN_COMPLETED", "string");
        	this.dsSaveInfo.addColumn("YN_NODATA", "string");
        	this.dsSaveInfo.addColumn("YN_REVERSESUM", "string");
        	this.dsSaveInfo.addColumn("YN_NUM", "string");
        	this.dsSaveInfo.addColumn("YN_NOSORT", "string");
        	this.dsSaveInfo.addColumn("YN_NOGROUP", "string");
        	this.dsSaveInfo.addColumn("TY_ADD", "string");
        	this.dsSaveInfo.addColumn("YN_AUTOFIT", "string");
        	this.dsSaveInfo.addColumn("ID_USER", "string");
        }

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
        	this._ID_GRID = this.ctxtID_GRID.text;
        	this.gfnGridInitAsync(this.dxGridInfo, this.dsListInfo, "DZ", "DXX_NXGRIDINFO");
        	this.gfnGridInitAsync(this.dxGrid, this.dsList, "DZ", "DXX_NXGRIDSPEC");

        	this.dsSelect.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSelect.setColumn(0, "CD_SYSTEM", this.ccfCD_SYSTEM.form.CDTextBox.text);
        	this.dsSelect.setColumn(0, "ID_GRID", this._ID_GRID);

        	var strSvcId    = "select";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect info=dsSelect";
        	var outData     = "dsList=select0 dsListInfo=info0";
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

        	if(this.dsList.rowcount == 0) {
        		var nrow = this.gfnGridAdd(this.dxGrid, "bottom");
        		this.dsList.setColumn(nrow, "NO_COL", 0);
        	}
        	else {
        		var curNO_COL = this.dsList.getColumn(this.dsList.rowposition, "NO_COL");
        		var nrow = this.gfnGridAdd(this.dxGrid, "current");

        		this.dsList.set_enableevent(false);
        		this.dsList.setColumn(nrow, "CD_SYSTEM", this.ccfCD_SYSTEM.form.CDTextBox.text);
        		this.dsList.setColumn(nrow, "DS_SYSTEM", this.ccfCD_SYSTEM.form.DSTextBox.text);
        		this.dsList.setColumn(nrow, "ID_GRID", this._ID_GRID);
        		this.dsList.setColumn(nrow, "NO_COL", curNO_COL);

        		for(var i = nrow+1; i < this.dsList.rowcount; i++) {
        			var flag = this.gfnGetFlag(this.dsList, i);
        			if(flag != "I" && flag != "D") {
        				this.dsList.setColumn(i, this.ucFlag, "U");
        			}
        			this.dsList.setColumn(i, "NO_COL", ++curNO_COL);
        		}
        		this.dsList.set_enableevent(true);
        	}

        };

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
        	if (!this.gfnGridValidate(this.dxGridInfo)) return;

        	this.dxGrid.updateToDataset();
        	this.dxGridInfo.updateToDataset();

        	this.dsSave.clearData();
        	this.dsSaveInfo.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_FLAG", flag);
        				this.dsSave.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsSave.setColumn(nrow, "CD_SYSTEM", this.dsList.getColumn(i, "CD_SYSTEM"));
        				this.dsSave.setColumn(nrow, "ID_GRID", this.dsList.getColumn(i, "ID_GRID"));
        				this.dsSave.setColumn(nrow, "NO_COL", this.dsList.getColumn(i, "NO_COL"));
        				this.dsSave.setColumn(nrow, "DS_HEADER1", this.dsList.getColumn(i, "DS_HEADER1"));
        				this.dsSave.setColumn(nrow, "DS_HEADER2", this.dsList.getColumn(i, "DS_HEADER2"));
        				this.dsSave.setColumn(nrow, "DS_HEADER3", this.dsList.getColumn(i, "DS_HEADER3"));
        				this.dsSave.setColumn(nrow, "NO_WIDTH", this.dsList.getColumn(i, "NO_WIDTH"));
        				this.dsSave.setColumn(nrow, "YN_READONLY", this.dsList.getColumn(i, "YN_READONLY"));
        				this.dsSave.setColumn(nrow, "YN_ESSENTIAL", this.dsList.getColumn(i, "YN_ESSENTIAL"));
        				this.dsSave.setColumn(nrow, "TY_CELLTYPE", this.dsList.getColumn(i, "TY_CELLTYPE"));
        				this.dsSave.setColumn(nrow, "TY_ALIGN", this.dsList.getColumn(i, "TY_ALIGN"));
        				this.dsSave.setColumn(nrow, "TY_INPUT", this.dsList.getColumn(i, "TY_INPUT"));
        				this.dsSave.setColumn(nrow, "NO_MAXLENGTH", this.dsList.getColumn(i, "NO_MAXLENGTH"));
        				this.dsSave.setColumn(nrow, "DS_COMBOLIST", this.dsList.getColumn(i, "DS_COMBOLIST"));
        				this.dsSave.setColumn(nrow, "CD_CODEFIND", this.dsList.getColumn(i, "CD_CODEFIND"));
        				this.dsSave.setColumn(nrow, "NM_CODEFIND", this.dsList.getColumn(i, "NM_CODEFIND"));
        				this.dsSave.setColumn(nrow, "DS_RESULTALIAS", this.dsList.getColumn(i, "DS_RESULTALIAS"));
        				this.dsSave.setColumn(nrow, "TY_IME", this.dsList.getColumn(i, "TY_IME"));
        				this.dsSave.setColumn(nrow, "AT_READONLY", this.dsList.getColumn(i, "AT_READONLY"));
        				this.dsSave.setColumn(nrow, "AT_GRAYBACK", this.dsList.getColumn(i, "AT_GRAYBACK"));
        				this.dsSave.setColumn(nrow, "AT_HIGHLIGHTBACK", this.dsList.getColumn(i, "AT_HIGHLIGHTBACK"));
        				this.dsSave.setColumn(nrow, "AT_HIGHLIGHTFORE", this.dsList.getColumn(i, "AT_HIGHLIGHTFORE"));
        				this.dsSave.setColumn(nrow, "AT_COLBACK", this.dsList.getColumn(i, "AT_COLBACK"));
        				this.dsSave.setColumn(nrow, "AT_COLFORE", this.dsList.getColumn(i, "AT_COLFORE"));
        				this.dsSave.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsSave.setColumn(nrow, "DS_FIELD", this.dsList.getColumn(i, "DS_FIELD"));
        				this.dsSave.setColumn(nrow, "DS_EXPRESSION", this.dsList.getColumn(i, "DS_EXPRESSION"));
        				this.dsSave.setColumn(nrow, "TY_FIXED", this.dsList.getColumn(i, "TY_FIXED"));
        				this.dsSave.setColumn(nrow, "TY_SUMMARY", this.dsList.getColumn(i, "TY_SUMMARY"));
        				this.dsSave.setColumn(nrow, "EX_SUMMARY", this.dsList.getColumn(i, "EX_SUMMARY"));
        				this.dsSave.setColumn(nrow, "NO_GROUP", this.dsList.getColumn(i, "NO_GROUP"));
        				this.dsSave.setColumn(nrow, "NO_MERGE", this.dsList.getColumn(i, "NO_MERGE"));
        				this.dsSave.setColumn(nrow, "AT_ROWHIDDEN", this.dsList.getColumn(i, "AT_ROWHIDDEN"));
        				this.dsSave.setColumn(nrow, "YN_LAYOUTHIDDEN", this.dsList.getColumn(i, "YN_LAYOUTHIDDEN"));
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	for (var i = 0; i < this.dsListInfo.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListInfo, i);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsSaveInfo.addRow();
        				this.dsSaveInfo.setColumn(nrow, "TY_FLAG", flag);
        				this.dsSaveInfo.setColumn(nrow, "CD_SYSTEM", this.dsListInfo.getColumn(i, "CD_SYSTEM"));
        				this.dsSaveInfo.setColumn(nrow, "ID_GRID", this.dsListInfo.getColumn(i, "ID_GRID"));
        				this.dsSaveInfo.setColumn(nrow, "NM_GRID", this.dsListInfo.getColumn(i, "NM_GRID"));
        				this.dsSaveInfo.setColumn(nrow, "YN_READONLY", this.dsListInfo.getColumn(i, "YN_READONLY"));
        				this.dsSaveInfo.setColumn(nrow, "NO_FIXEDROWS", this.dsListInfo.getColumn(i, "NO_FIXEDROWS"));
        				this.dsSaveInfo.setColumn(nrow, "NO_FROZENCOL", this.dsListInfo.getColumn(i, "NO_FROZENCOL"));
        				this.dsSaveInfo.setColumn(nrow, "YN_MULTILINE", this.dsListInfo.getColumn(i, "YN_MULTILINE"));
        				this.dsSaveInfo.setColumn(nrow, "RM_BIGO1", this.dsListInfo.getColumn(i, "RM_BIGO1"));
        				this.dsSaveInfo.setColumn(nrow, "RM_BIGO2", this.dsListInfo.getColumn(i, "RM_BIGO2"));
        				this.dsSaveInfo.setColumn(nrow, "YN_AUTOFILTER", this.dsListInfo.getColumn(i, "YN_AUTOFILTER"));
        				this.dsSaveInfo.setColumn(nrow, "YN_SEARCHBAR", this.dsListInfo.getColumn(i, "YN_SEARCHBAR"));
        				this.dsSaveInfo.setColumn(nrow, "YN_GROUPPANNEL", this.dsListInfo.getColumn(i, "YN_GROUPPANNEL"));
        				this.dsSaveInfo.setColumn(nrow, "TY_GROUP", this.dsListInfo.getColumn(i, "TY_GROUP"));
        				this.dsSaveInfo.setColumn(nrow, "ID_FORM", this.dsListInfo.getColumn(i, "ID_FORM"));
        				this.dsSaveInfo.setColumn(nrow, "NM_FORM", this.dsListInfo.getColumn(i, "NM_FORM"));
        				this.dsSaveInfo.setColumn(nrow, "DS_REQUEST", this.dsListInfo.getColumn(i, "DS_REQUEST"));
        				this.dsSaveInfo.setColumn(nrow, "DT_WORK", this.dsListInfo.getColumn(i, "DT_WORK"));
        				this.dsSaveInfo.setColumn(nrow, "DS_WORK", this.dsListInfo.getColumn(i, "DS_WORK"));
        				this.dsSaveInfo.setColumn(nrow, "DS_CONFIRM", this.dsListInfo.getColumn(i, "DS_CONFIRM"));
        				this.dsSaveInfo.setColumn(nrow, "RM_TEST", this.dsListInfo.getColumn(i, "RM_TEST"));
        				this.dsSaveInfo.setColumn(nrow, "YN_COMPLETED", this.dsListInfo.getColumn(i, "YN_COMPLETED"));
        				this.dsSaveInfo.setColumn(nrow, "YN_NODATA", this.dsListInfo.getColumn(i, "YN_NODATA"));
        				this.dsSaveInfo.setColumn(nrow, "YN_REVERSESUM", this.dsListInfo.getColumn(i, "YN_REVERSESUM"));
        				this.dsSaveInfo.setColumn(nrow, "YN_NUM", this.dsListInfo.getColumn(i, "YN_NUM"));
        				this.dsSaveInfo.setColumn(nrow, "YN_NOSORT", this.dsListInfo.getColumn(i, "YN_NOSORT"));
        				this.dsSaveInfo.setColumn(nrow, "YN_NOGROUP", this.dsListInfo.getColumn(i, "YN_NOGROUP"));
        				this.dsSaveInfo.setColumn(nrow, "TY_ADD", this.dsListInfo.getColumn(i, "TY_ADD"));
        				this.dsSaveInfo.setColumn(nrow, "YN_AUTOFIT", this.dsListInfo.getColumn(i, "YN_AUTOFIT"));
        				this.dsSaveInfo.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0 && this.dsSaveInfo.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave info_save=dsSaveInfo";
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
         * 확장버튼
         ************************************************************************/
        /*
         *	운영배포
         */
        this.fnDeploy = function() {
        	var CD_SYSTEM = this.ccfCD_SYSTEM.form.CDTextBox.value;
        	if (this.gfnIsNull(CD_SYSTEM))
        	{
        		this.gfnAlert('시스템코드를 입력하세요.', function(){
        			this.ccfCD_SYSTEM.setFocus();
        		});
        		return false;
        	}

        	var ID_GRID = this.ctxtID_GRID.value;
        	if (this.gfnIsNull(ID_GRID))
        	{
        		this.gfnAlert('ID_GRID를 입력하세요.', function(){
        			this.ctxtID_GRID.setFocus();
        		});
        		return false;
        	}

        	this.gfnConfirm('[' + ID_GRID + ']를 운영서버에 배포 하시겠습니까?', function(svcId, isOk) {
        		if (!isOk)	return false;
        		this.dsDeploy.clearData();
        		var dbName = this.gfnGetConfig("DZ", "CD_CORP_SUFFIX");

        		var nRow = this.dsDeploy.addRow();
        		this.dsDeploy.setColumn(nRow, 'NM_DB', "DL"+ dbName + "_PRD");
        		this.dsDeploy.setColumn(nRow, 'CD_SYSTEM', CD_SYSTEM);
        		this.dsDeploy.setColumn(nRow, 'ID_GRID', ID_GRID);
        		//this.dsDeploy.setColumn(nRow, 'ID_INSERT', this.AuthClient.ID_USER);

        		var strSvcId    = "deploy";
        		var strSvcType  = "select";
        		var inProc		= "_dsProc";
        		var inData      = "deploy=dsDeploy";
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
        	}, 'fnDeploy_confirm');
        }
        // fnGenerate
        this.fnGenerate = function ()
        {
        	var CD_SYSTEM = this.ccfCD_SYSTEM.form.CDTextBox.value;
        	if (this.gfnIsNull(CD_SYSTEM))
        	{
        		this.gfnAlert('시스템코드를 입력하세요.', function(){
        			this.ccfCD_SYSTEM.setFocus();
        		});
        		return false;
        	}

        	var ID_GRID = this.ctxtID_GRID.value;
        	if (this.gfnIsNull(ID_GRID))
        	{
        		this.gfnAlert('ID_GRID를 입력하세요.', function(){
        			this.ctxtID_GRID.setFocus();
        		});
        		return false;
        	}

        	this.gfnFormOpen("DXX", "DXX_NXGRIDINFO_DLG", "fnPopupCallback");
        };
        /************************************************************************
         * Validate
         ************************************************************************/

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	this.fnColorOff();

        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		if(this.objGridPreview != null) {
        			this.objGridPreview.destroy();
        			this.objGridPreview = null;
        		}

        		if(this.dxGrid.rowcount > 0) {
        			this.objGridPreview = new Grid();
        			this.objGridPreview.init("objGridPreview", 0, 0, null, null, 0, 0);
        			this.divData2.addChild(this.objGridPreview.id, this.objGridPreview);
        			this.objGridPreview.show();
        			this.gfnGridInitAsync(this.objGridPreview, this.dsListPreview, this.ccfCD_SYSTEM.form.CDTextBox.text, this._ID_GRID);
        		}
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == "deploy") {
        		if (errorCode == 0) {
        		var msg = "그리드 " +
        		          " [" + this.ccfCD_SYSTEM.form.DSTextBox.text + " / " + this.ctxtID_GRID.value +
        				  "] 정보가 운영서버에 배포되었습니다.";
        		this.gfnAlert(msg);
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
        this.fnGrid_AfterEdit = function(obj,e) {
        	if(e.columnid == "NO_COL") {
        		if(e.oldvalue != e.newvalue) {
        			var oldRow = e.row;
        			var oldNO_COL = e.oldvalue;
        			var newNO_COL = e.newvalue;
        			var newRow = oldRow;
        			for(var i = 0; i < obj.rowcount; i++) {
        				if(oldRow == i) continue;
        				var no_col = obj.getColumn(i, "NO_COL");
        				if(no_col < newNO_COL) {
        					newRow = i + (oldNO_COL>newNO_COL?1:0);
        				}
        			}
        			if(newRow >= obj.rowcount) newRow -= 1;

        			obj.moveRow(oldRow, newRow);

        			this.dxGrid.setCellPos(0, newRow);

        			var no_col = newNO_COL;
        			this.dsList.set_enableevent(false);
        			for(var i = newRow; i < this.dsList.rowcount; i++) {
        				var flag = this.gfnGetFlag(this.dsList, i);
        				var oldNO_COL = this.dsList.getColumn(i, "NO_COL");
        				if(no_col != oldNO_COL) {
        					if(flag != "I" && flag != "D") {
        						this.dsList.setColumn(i, this.ucFlag, "U");
        					}
        					this.dsList.setColumn(i, "NO_COL", no_col);
        				}
        				no_col++;
        			}
        			this.dsList.set_enableevent(true);
        		}
        	}
        }

        this.fnGridInfo_AfterLoad = function(objGrid) {
        	this.dxGridInfo.yn_filter = "N";
        };


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(id) {
        	this.gfnSetFormStatus(this);
        	this.gfnGridClear(this.dxGrid);
        };

        this.fnCodeFind = function(obj,e) {
        	this.gfnFormOpen("DZO", "DZU_CDFINDMST", "fnDetailCallback");
        }

        this.fnCodeFindCallback = function(strId, val) {
        	//this.FormBtns.Select.click();
        };

        this.divSearch_cbtnLoadSP_onclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.ctxtNM_SP.text)) {
        		this.gfnAlert("SP명을 입력하세요.");
        		this.ctxtNM_SP.setFocus();
        		return false;
        	}

        	if(this.dsList.rowcount > 0) {
        		this.gfnConfirm("이미 입력된 정보가 있습니다.\n계속 진행시 없는 컬럼만 추가가 됩니다.\n진행하시겠습니까?", "loadSP_confirm_callback")
        	} else {
        		this.loadSP_confirm_callback("loadsp_confirm", true);
        	}
        };

        this.loadSP_confirm_callback = function(strId, val)
        {
        	if(val != true) return false;

        	this.dsLoadSP.clearData();
        	this.dsLoadSP.addRow();

        	this.dsLoadSP.setColumn(0, "SPNAME", this.ctxtNM_SP.text);
        	this._dsProc.setColumn(3, "SP", this.ctxtNM_SP.text);

        	var strSvcId    = "loadsp";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "loadsp=dsLoadSP";
        	var outData     = "dsSPInfo=loadsp0 dsSPSpec=loadsp1";
        	var strArg      = "";
        	var callBackFnc = "fnCallbackLoadSP";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnCallbackLoadSP = function(strId, val) {
        	if(strId == "loadsp") {
        		for(var i = 0; i < this.dsSPInfo.rowcount; i++) {
        			if(this.dsSPInfo.getColumn(i, "Type") == "stored procedure") {

        				if(this.dsSPSpec.rowcount > 0) {
        					this.dsRealSP = new Dataset();

        					for(var j = 0; j < this.dsSPSpec.rowcount; j++) {
        						var pname = this.dsSPSpec.getColumn(j, "Parameter_name");
        						if(pname == "NOT_PARAM") break;
        						this.dsRealSP.addColumn(pname.replace("@", ""), "string");
        					}

        					this.dsRealSP.addRow();
        					for(var j = 0; j < this.dsSPSpec.rowcount; j++) {
        						var pname = this.dsSPSpec.getColumn(j, "Parameter_name");
        						if(pname == "NOT_PARAM") break;
        						this.dsRealSP.setColumn(0, pname.replace("@", ""), "");
        					}
        				}

        				var strSvcId    = "realsp";
        				var strSvcType  = "select";
        				var inProc		= "_dsProc";
        				var inData      = "realsp=dsRealSP";
        				var outData     = "dsListSP=realsp0";
        				var strArg      = "meta=Y";
        				var callBackFnc = "fnCallbackLoadSP";

        				this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        									strSvcType , 	// transaction을 요청할 구분
        									inProc,			// Procedure 정보 Dataset 이름
        									inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        									outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        									strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        									callBackFnc); // 통신방법 정의 [생략가능]
        			}
        		}
        	}
        	else if(strId == "realsp") {
        		this.gfnSetFormStatus(this, "I");
         		this.dsList.set_enableevent(false);

        		this.dxGrid_setRow("", 20);
        		for(var i = 0; i < this.dsListSP.colinfos.length; i++) {
        			this.dxGrid_setRow(this.dsListSP.colinfos[i].name, 0);
        		}

        		this.dsList.set_enableevent(true);
        	}
        }

        this.dxGrid_setRow = function(name, width)
        {
        	var isCol = false;
        	for(var r=0; r<this.dsList.rowcount; r++) {
        		if(name == "") {
        			if(this.dsList.getColumn(r, "DS_FIELD") == "" || this.dsList.getColumn(r, "DS_FIELD") == "dxg_flag") {
        				isCol = true;
        				break;
        			}
        		}
        		else {
        			if(this.dsList.getColumn(r, "DS_FIELD") == name) {
        				isCol = true;
        				break;
        			}
        		}
        	}

        	if(isCol == false) {
        		var nrow = this.dsList.addRow();
        		this.dsList.setColumn(nrow, this.ucFlag, "I");
        		this.dsList.setColumn(nrow, "CD_SYSTEM", this.ccfCD_SYSTEM.form.CDTextBox.text);
        		this.dsList.setColumn(nrow, "ID_GRID", this._ID_GRID);
        		this.dsList.setColumn(nrow, "NO_COL", this.dsList.rowcount - 1);
        		this.dsList.setColumn(nrow, "DS_FIELD", name);
        		if (width > 0) {
        			this.dsList.setColumn(nrow, "NO_WIDTH", width);
        		}
        	}
        };

        /************************************************************************
         * 로우 drag&drop 순번 정렬
         ************************************************************************/
        this.form_ondragmove = function(obj,e)
        {
        	this.DragTextMove(obj, e);
        };

        this.dxGrid_ondrag = function(obj, e)
        {
        	if(e.row < 0 || obj._showEditing)
        	{
        		return false;
        	}

        	this.dxGrid.set_selecttype("cell");

        	sTextDragData = [];
        	sTextDragData.push(obj.getCellValue(e.row, obj.getBindCellIndex("body", "NO_COL")));
        	sTextDragData.push(obj.getCellValue(e.row, obj.getBindCellIndex("body", "DS_FIELD")));
        	sTextDragData.push(obj.getCellValue(e.row, obj.getBindCellIndex("body", "DS_HEADER1")));
        	sTextDragData.push(obj.getCellValue(e.row, obj.getBindCellIndex("body", "DS_HEADER2")));
        	sTextDragData.push(obj.getCellValue(e.row, obj.getBindCellIndex("body", "DS_HEADER3")));

        	var cell_rect = obj.getCellRect(e.row, e.cell);
        	this.Static00.set_left(cell_rect.left);
        	this.Static00.set_top(cell_rect.top);
        	//this.Static00.set_width(cell_rect.width);
        	this.Static00.set_height(cell_rect.height);
        	this.Static00.set_text(sTextDragData.join("     "));
        	this.Static00.set_tooltiptext(e.row);

        	// 드래그가 민감해서 시간차 보이기
        	this.gfnSetTimer(this, function() {
        		if(this.IsDrag == true) {
        			this.Static00.set_visible(true);
        		}
        	}, 300);
        	return true;
        };

        this.DragTextMove = function(obj, e)
        {
        	this.IsDrag = true;
            //if( this.Static00.visible == true )
            {
        		if(e.fromobject.name == "objGrid" || e.fromobject.name == "Static00") {
        			this.Static00.move(e.clientx+5, e.clienty-5);
        		}
            }
        };

        this.dxGrid_ondrop = function(obj,e)
        {
        	this.dxGrid.set_selecttype("multiarea");
        	trace("multiarea");
        	this.IsDrag = false;
        	if( this.Static00.visible == true )
        	{
        		this.Static00.set_visible(false);
        		if(e.row < 0) return false;
        		var dragRow = this.Static00.tooltiptext;
        		var objDs = obj.getBindDataset();
        		var oldRow = dragRow;
        		var newRow = e.row;
        		var minRow = 0;
        		if (dragRow > e.row) {
        			minRow = newRow;
        		} else {
        			minRow = oldRow;
        		}
        		var no_col = nexacro.toNumber(obj.getCellValue(minRow, obj.getBindCellIndex("body", "NO_COL")));

        		objDs.moveRow(oldRow, newRow);
        		for(var i = minRow; i < obj.rowcount; i++) {
        			objDs.setColumn(i, "NO_COL", no_col++);
        		}
        	}
        };

        this.form_ondrop = function(obj,e)
        {
        	this.IsDrag = false;
        	this.Static00.set_visible(false);
        };

        // this.dxGrid_ondragleave = function(obj:nexacro.Grid,e:nexacro.DragEventInfo)
        // {
        // 	if(e.fromobject.name != "objGrid" && e.fromobject.name != "Static00") {
        // 		this.IsDrag = false;
        // 		this.Static00.set_visible(false);
        // 	}
        // };

        this.dxGrid_ondropdown = function(obj,e) {
        	var colnm = this._gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	if (colnm == "AT_COLBACK") {
        		for(var i = 0; i < this.dsBackground.rowcount; i++) {
        			this.dsBackground.setColumn(i, "FCODE", this.dsList.getColumn(this.dsList.rowposition, "AT_COLFORE"));
        		}
        		this.grdBackground.clearSelect();
        		this.grdBackground.scrollTo(0,0);
        		var xy = this.gfnConvertXY(this.divData.form.divDataRight, [0,29], obj._getAccessibilityCurrentCell(e.row,e.cell));
        		this.grdBackground.move(xy[0], xy[1]);
        		this.grdBackground.set_visible(true);
        		return false;
        	}
        	else if (colnm == "AT_COLFORE") {
        		for(var i = 0; i < this.dsForeground.rowcount; i++) {
        			this.dsForeground.setColumn(i, "BCODE", this.dsList.getColumn(this.dsList.rowposition, "AT_COLBACK"));
        		}
        		this.grdForeground.clearSelect();
        		this.grdForeground.scrollTo(0,0);
        		var xy = this.gfnConvertXY(this.divData.form.divDataRight, [0,29], obj._getAccessibilityCurrentCell(e.row,e.cell));
        		this.grdForeground.move(xy[0], xy[1]);
        		this.grdForeground.set_visible(true);
        		return false;
        	}
        };

        this.divData_divDataRight_grdBackground_oncellclick = function(obj,e)
        {
        	this.grdBackground.set_visible(false);
        	this.dsList.setColumn(this.dsList.rowposition, "AT_COLBACK", this.dsBackground.getColumn(e.row, "CODE"));
        };

        this.divData_divDataRight_grdForeground_oncellclick = function(obj,e)
        {
        	this.grdForeground.set_visible(false);
        	this.dsList.setColumn(this.dsList.rowposition, "AT_COLFORE", this.dsForeground.getColumn(e.row, "CODE"));
        };

        this.divData_divDataRight_objGrid_oncellclick = function(obj,e)
        {
        	this.fnColorOff();
        };

        this.fnColorOff = function() {
        	if (this.grdBackground.visible) {
        		this.grdBackground.set_visible(false);
        	}
        	if (this.grdForeground.visible) {
        		this.grdForeground.set_visible(false);
        	}
        };

        this.fnSetMakeBtns = function(json)
        {
        	var keys = Object.keys(json);
        	var row = this.dsList.rowposition;
        	for(var i = 0; i < keys.length; i++) {
        		this.dsList.setColumn(row, keys[i], json[keys[i]]);
        	}
        	var curNO_COL = nexacro.toNumber(this.dsList.getColumn(row, "NO_COL"))+1;
        	var frow = this.dsList.findRow("NO_COL", curNO_COL);
        	if(frow > 0) {
        		var org_selecttype = this.dxGrid.selecttype;

        		this.dxGrid.set_selecttype("cell");
        		this.dsList.set_rowposition(frow);
        		this.dxGrid.set_selecttype(org_selecttype);
        	}
        };

        this.divMakeBtns_btnFlag_onclick = function(obj,e)
        {
        	var json = {};
        	json.DS_FIELD = "";
        	json.DS_HEADER1 = "";
        	json.NO_WIDTH = 20;
        	json.YN_READONLY = "Y";
        	json.YN_ESSENTIAL = "N";
        	json.TY_CELLTYPE = "TEXT";
        	json.TY_ALIGN = "CENTER";
        	json.TY_INPUT = "KEYIN";
        	json.DS_COMBOLIST = "";
        	json.CD_CODEFIND = "";
        	json.NM_CODEFIND = "";
        	json.DS_RESULTALIAS = "";
        	this.fnSetMakeBtns(json);
        };

        this.divMakeBtns_btnCode_onclick = function(obj,e)
        {
        	var json = {};
        	json.NO_WIDTH = 80;
        	json.YN_READONLY = "N";
        	json.YN_ESSENTIAL = "N";
        	json.TY_CELLTYPE = "TEXT";
        	json.TY_ALIGN = "CENTER";
        	json.TY_INPUT = "KEYIN";
        	json.DS_COMBOLIST = "";
        	json.CD_CODEFIND = "";
        	json.NM_CODEFIND = "";
        	json.DS_RESULTALIAS = "";
        	this.fnSetMakeBtns(json);
        };

        this.divMakeBtns_btnName_onclick = function(obj,e)
        {
        	var json = {};
        	json.NO_WIDTH = 150;
        	json.YN_READONLY = "N";
        	json.YN_ESSENTIAL = "N";
        	json.TY_CELLTYPE = "TEXT";
        	json.TY_ALIGN = "LEFT";
        	json.TY_INPUT = "KEYIN";
        	json.DS_COMBOLIST = "";
        	json.CD_CODEFIND = "";
        	json.NM_CODEFIND = "";
        	json.DS_RESULTALIAS = "";
        	this.fnSetMakeBtns(json);
        };

        this.divMakeBtns_btnDesc_onclick = function(obj,e)
        {
        	var json = {};
        	json.NO_WIDTH = 200;
        	json.YN_READONLY = "N";
        	json.YN_ESSENTIAL = "N";
        	json.TY_CELLTYPE = "TEXT";
        	json.TY_ALIGN = "LEFT";
        	json.TY_INPUT = "KEYIN";
        	json.DS_COMBOLIST = "";
        	json.CD_CODEFIND = "";
        	json.NM_CODEFIND = "";
        	json.DS_RESULTALIAS = "";
        	this.fnSetMakeBtns(json);
        };

        this.divMakeBtns_btnAmt_onclick = function(obj,e)
        {
        	var json = {};
        	json.NO_WIDTH = 100;
        	json.YN_READONLY = "N";
        	json.YN_ESSENTIAL = "N";
        	json.TY_CELLTYPE = "INT";
        	json.TY_ALIGN = "RIGHT";
        	json.TY_INPUT = "KEYIN";
        	json.DS_COMBOLIST = "#,###";
        	json.CD_CODEFIND = "";
        	json.NM_CODEFIND = "";
        	json.DS_RESULTALIAS = "";
        	this.fnSetMakeBtns(json);
        };

        this.divMakeBtns_btnRT_onclick = function(obj,e)
        {
        	var json = {};
        	json.NO_WIDTH = 80;
        	json.YN_READONLY = "N";
        	json.YN_ESSENTIAL = "N";
        	json.TY_CELLTYPE = "DOUBLE";
        	json.TY_ALIGN = "RIGHT";
        	json.TY_INPUT = "KEYIN";
        	json.DS_COMBOLIST = "#,###.00%";
        	json.CD_CODEFIND = "";
        	json.NM_CODEFIND = "";
        	json.DS_RESULTALIAS = "";
        	this.fnSetMakeBtns(json);
        };

        this.divMakeBtns_btnYYYY_onclick = function(obj,e)
        {
        	var json = {};
        	json.NO_WIDTH = 60;
        	json.YN_READONLY = "N";
        	json.YN_ESSENTIAL = "N";
        	json.TY_CELLTYPE = "TEXT";
        	json.TY_ALIGN = "CENTER";
        	json.TY_INPUT = "CALENDAR_Y";
        	json.DS_COMBOLIST = "";
        	json.CD_CODEFIND = "";
        	json.NM_CODEFIND = "";
        	json.DS_RESULTALIAS = "";
        	this.fnSetMakeBtns(json);
        };

        this.divMakeBtns_btnYYYYMM_onclick = function(obj,e)
        {
        	var json = {};
        	json.NO_WIDTH = 80;
        	json.YN_READONLY = "N";
        	json.YN_ESSENTIAL = "N";
        	json.TY_CELLTYPE = "TEXT";
        	json.TY_ALIGN = "CENTER";
        	json.TY_INPUT = "CALENDAR_YM";
        	json.DS_COMBOLIST = "";
        	json.CD_CODEFIND = "";
        	json.NM_CODEFIND = "";
        	json.DS_RESULTALIAS = "";
        	this.fnSetMakeBtns(json);
        };

        this.divMakeBtns_btnYYYYMMDD_onclick = function(obj,e)
        {
        	var json = {};
        	json.NO_WIDTH = 100;
        	json.YN_READONLY = "N";
        	json.YN_ESSENTIAL = "N";
        	json.TY_CELLTYPE = "TEXT";
        	json.TY_ALIGN = "CENTER";
        	json.TY_INPUT = "CALENDAR_YMD";
        	json.DS_COMBOLIST = "";
        	json.CD_CODEFIND = "";
        	json.NM_CODEFIND = "";
        	json.DS_RESULTALIAS = "";
        	this.fnSetMakeBtns(json);
        };

        this.divMakeBtns_btnCombo_onclick = function(obj,e)
        {
        	var json = {};
        	json.NO_WIDTH = 100;
        	json.YN_READONLY = "N";
        	json.YN_ESSENTIAL = "N";
        	json.TY_CELLTYPE = "TEXT";
        	json.TY_ALIGN = "LEFT";
        	json.TY_INPUT = "LIST";
        	json.DS_COMBOLIST = "|A|B or |A:에이|B:비 or EXEC";
        	json.CD_CODEFIND = "";
        	json.NM_CODEFIND = "";
        	json.DS_RESULTALIAS = "";
        	this.fnSetMakeBtns(json);
        };

        this.divMakeBtns_btnCodeFindCD_onclick = function(obj,e)
        {
        	var json = {};
        	json.NO_WIDTH = 80;
        	json.YN_READONLY = "N";
        	json.YN_ESSENTIAL = "N";
        	json.TY_CELLTYPE = "TEXT";
        	json.TY_ALIGN = "LEFT";
        	json.TY_INPUT = "CODEFIND";
        	json.DS_COMBOLIST = "";
        	json.CD_CODEFIND = "코드파인드ID";
        	json.NM_CODEFIND = "식별ID";
        	json.DS_RESULTALIAS = "결과ALIAS";
        	this.fnSetMakeBtns(json);
        };

        this.divMakeBtns_btnCodeFindDS_onclick = function(obj,e)
        {
        	var json = {};
        	json.NO_WIDTH = 100;
        	json.YN_READONLY = "Y";
        	json.YN_ESSENTIAL = "N";
        	json.TY_CELLTYPE = "TEXT";
        	json.TY_ALIGN = "LEFT";
        	json.TY_INPUT = "KEYIN";
        	json.DS_COMBOLIST = "";
        	json.CD_CODEFIND = "코드파인드ID";
        	json.NM_CODEFIND = "식별ID";
        	json.DS_RESULTALIAS = "결과ALIAS";
        	this.fnSetMakeBtns(json);
        };

        this.divMakeBtns_btnCheckbox_onclick = function(obj,e)
        {
        	var json = {};
        	json.NO_WIDTH = 60;
        	json.YN_READONLY = "N";
        	json.YN_ESSENTIAL = "N";
        	json.TY_CELLTYPE = "INT";
        	json.TY_ALIGN = "LEFT";
        	json.TY_INPUT = "CHECKBOX";
        	json.DS_COMBOLIST = "";
        	json.CD_CODEFIND = "";
        	json.NM_CODEFIND = "";
        	json.DS_RESULTALIAS = "";
        	this.fnSetMakeBtns(json);
        };

        this.divMakeBtns_btnCheckboxYN_onclick = function(obj,e)
        {
        	var json = {};
        	json.NO_WIDTH = 60;
        	json.YN_READONLY = "N";
        	json.YN_ESSENTIAL = "N";
        	json.TY_CELLTYPE = "TEXT";
        	json.TY_ALIGN = "LEFT";
        	json.TY_INPUT = "CHECKBOX_YN";
        	json.DS_COMBOLIST = "";
        	json.CD_CODEFIND = "";
        	json.NM_CODEFIND = "";
        	json.DS_RESULTALIAS = "";
        	this.fnSetMakeBtns(json);
        };

        this.divMakeBtns_btnCheckboxAll_onclick = function(obj,e)
        {
        	var json = {};
        	json.NO_WIDTH = 60;
        	json.YN_READONLY = "N";
        	json.YN_ESSENTIAL = "N";
        	json.TY_CELLTYPE = "INT";
        	json.TY_ALIGN = "LEFT";
        	json.TY_INPUT = "CHECKBOXALL";
        	json.DS_COMBOLIST = "";
        	json.CD_CODEFIND = "";
        	json.NM_CODEFIND = "";
        	json.DS_RESULTALIAS = "";
        	this.fnSetMakeBtns(json);
        };

        this.divMakeBtns_btnReadonly_onclick = function(obj,e)
        {
        	var json = {};
        	json.YN_READONLY = "Y";
        	this.fnSetMakeBtns(json);
        };

        this.divMakeBtns_btnReadonlyU_onclick = function(obj,e)
        {
        	var json = {};
        	json.YN_READONLY = "U";
        	this.fnSetMakeBtns(json);
        };

        this.divData_divDataRight_divMakeBtns_btnOrder_onclick = function(obj,e)
        {
        	var no_col = 0;
        	this.dsList.set_enableevent(false);
        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		var oldNO_COL = this.dsList.getColumn(i, "NO_COL");
        		if(no_col != oldNO_COL) {
        			if(flag != "I" && flag != "D") {
        				this.dsList.setColumn(i, this.ucFlag, "U");
        			}
        			this.dsList.setColumn(i, "NO_COL", no_col);
        		}
        		no_col++;
        	}
        	this.dsList.set_enableevent(true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ondragmove",this.form_ondragmove,this);
            this.addEventHandler("ondrop",this.form_ondrop,this);
            this.divSearch.form.ctxtID_GRID.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.cbtnLoadSP.addEventHandler("onclick",this.divSearch_cbtnLoadSP_onclick,this);
            this.divData.form.divDataRight.form.divMakeBtns.form.btnFlag.addEventHandler("onclick",this.divMakeBtns_btnFlag_onclick,this);
            this.divData.form.divDataRight.form.divMakeBtns.form.btnCode.addEventHandler("onclick",this.divMakeBtns_btnCode_onclick,this);
            this.divData.form.divDataRight.form.divMakeBtns.form.btnName.addEventHandler("onclick",this.divMakeBtns_btnName_onclick,this);
            this.divData.form.divDataRight.form.divMakeBtns.form.btnDesc.addEventHandler("onclick",this.divMakeBtns_btnDesc_onclick,this);
            this.divData.form.divDataRight.form.divMakeBtns.form.btnAmt.addEventHandler("onclick",this.divMakeBtns_btnAmt_onclick,this);
            this.divData.form.divDataRight.form.divMakeBtns.form.btnRT.addEventHandler("onclick",this.divMakeBtns_btnRT_onclick,this);
            this.divData.form.divDataRight.form.divMakeBtns.form.btnYYYY.addEventHandler("onclick",this.divMakeBtns_btnYYYY_onclick,this);
            this.divData.form.divDataRight.form.divMakeBtns.form.btnYYYYMM.addEventHandler("onclick",this.divMakeBtns_btnYYYYMM_onclick,this);
            this.divData.form.divDataRight.form.divMakeBtns.form.btnYYYYMMDD.addEventHandler("onclick",this.divMakeBtns_btnYYYYMMDD_onclick,this);
            this.divData.form.divDataRight.form.divMakeBtns.form.btnCombo.addEventHandler("onclick",this.divMakeBtns_btnCombo_onclick,this);
            this.divData.form.divDataRight.form.divMakeBtns.form.btnCodeFindCD.addEventHandler("onclick",this.divMakeBtns_btnCodeFindCD_onclick,this);
            this.divData.form.divDataRight.form.divMakeBtns.form.btnCodeFindDS.addEventHandler("onclick",this.divMakeBtns_btnCodeFindDS_onclick,this);
            this.divData.form.divDataRight.form.divMakeBtns.form.btnCheckbox.addEventHandler("onclick",this.divMakeBtns_btnCheckbox_onclick,this);
            this.divData.form.divDataRight.form.divMakeBtns.form.btnCheckboxYN.addEventHandler("onclick",this.divMakeBtns_btnCheckboxYN_onclick,this);
            this.divData.form.divDataRight.form.divMakeBtns.form.btnCheckboxAll.addEventHandler("onclick",this.divMakeBtns_btnCheckboxAll_onclick,this);
            this.divData.form.divDataRight.form.divMakeBtns.form.btnReadonly.addEventHandler("onclick",this.divMakeBtns_btnReadonly_onclick,this);
            this.divData.form.divDataRight.form.divMakeBtns.form.btnReadonlyU.addEventHandler("onclick",this.divMakeBtns_btnReadonlyU_onclick,this);
            this.divData.form.divDataRight.form.divMakeBtns.form.btnOrder.addEventHandler("onclick",this.divData_divDataRight_divMakeBtns_btnOrder_onclick,this);
            this.divData.form.divDataRight.form.objGrid.addEventHandler("oncellclick",this.divData_divDataRight_objGrid_oncellclick,this);
            this.divData.form.divDataRight.form.grdBackground.addEventHandler("oncellclick",this.divData_divDataRight_grdBackground_oncellclick,this);
            this.divData.form.divDataRight.form.grdForeground.addEventHandler("oncellclick",this.divData_divDataRight_grdForeground_oncellclick,this);
        };
        this.loadIncludeScript("DXX_NXGRIDSPEC.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
