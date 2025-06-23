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
            this.set_titletext("외주전표발행(하자)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBSPR_HDGISUNGSLIP_SELECT</Col></Row><Row><Col id=\"SP\">DBSPR_HDGISUNGSLIP_SAVE</Col><Col id=\"TARGET\">save</Col></Row><Row><Col id=\"SP\">DBSPR_HDGISUNGSLIP_ISSUE</Col><Col id=\"TARGET\">slip</Col></Row><Row><Col id=\"SP\">DBSPR_HDGISUNGSLIP_AUTOSLIP_DELETE</Col><Col id=\"TARGET\">slipDelete</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staItem01","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("기성년월");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBar01","staItem01:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("calYM_WORK","staItem01:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staItem02","staBar01:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("계약금(공급가)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBar02","staItem02:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("metAM_CONT_PROV","staItem02:0.0","10.0","118","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_value("");
            obj.set_format("###,###,##,##0");
            obj.set_limitbymask("integer");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staItem03","staBar02:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("계약금(부가세)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBar03","staItem03:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("metAM_CONT_VAT","staItem03:0.0","10.0","118","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_value("");
            obj.set_format("###,###,##,##0");
            obj.set_limitbymask("integer");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staItem04","staBar03:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBar04","staItem04:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtNO_HADOCONT","staItem04:0.0","10.0","118","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staItem06","0.0","staItem01:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("기성청구일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staItem05","staBar04:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("업체구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBar05","staItem05:0.0","10.0",null,"24.0","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtTY_VENDOR","staItem05:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBar06","staItem06:0.0","staItem01:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_HDGISUNG","staItem06:0.0","staItem01:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staItem07","staBar06:0.0","staItem01:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("기성당회(공급가)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBar07","staItem07:0.0","staItem01:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("metAM_GISUNG_PROV","staItem07:0.0","staItem01:10.0","118","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_value("");
            obj.set_format("###,###,##,##0");
            obj.set_limitbymask("integer");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staItem08","staBar07:0.0","staItem01:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("기성당회(부가세)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBar08","staItem08:0.0","staItem01:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("metAM_GISUNG_VAT","staBar08:0.0","staItem01:10.0","118","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_value("");
            obj.set_format("###,###,##,##0");
            obj.set_limitbymask("integer");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staItem09","staBar08:0.0","staItem01:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("업체코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBar09","staItem09:0.0","staItem01:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCD_VENDOR","staBar09:0.0","staItem01:10.0","118","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staItem10","edtCD_VENDOR:0.0","staItem01:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBar10","staItem10:0.0","staItem01:10.0",null,"24.0","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDS_VENDOR","staItem10:0.0","staItem01:10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
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
            obj = new BindItem("item1","divSearch.form.edtTY_VENDOR","value","dsListSub","TY_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.calDT_HDGISUNG","value","dsSearch","DT_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtDS_VENDOR","value","dsListSub","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.edtCD_VENDOR","value","dsListSub","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DBS_HDGISUNGSLIP.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//
        	//this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// 서브 버튼 사용
        	//this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter); // divSplitter sync
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnWork1 = this.gfnFormButtonAdd("btnWork1", "fnWorkBtn1");  // 전표발행
        	this.btnWork2 = this.gfnFormButtonAdd("btnWork2", "fnWorkBtn2");  // 전표취소
        	this.btnWork3 = this.gfnFormButtonAdd("btnWork3", "fnWorkBtn3");  // 전표조회
        	this.btnWork4 = this.gfnFormButtonAdd("btnWork4", "fnWorkBtn4");  // 금액갱신
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.calYM_WORK = this.divSearch.form.calYM_WORK;
        	this.edtNO_HADOCONT = this.divSearch.form.edtNO_HADOCONT;
        	this.metAM_CONT_PROV = this.divSearch.form.metAM_CONT_PROV;
        	this.metAM_CONT_VAT = this.divSearch.form.metAM_CONT_VAT;
        	this.metAM_GISUNG_PROV = this.divSearch.form.metAM_GISUNG_PROV;
        	this.metAM_GISUNG_VAT = this.divSearch.form.metAM_GISUNG_VAT;
        	this.calDT_HDGISUNG = this.divSearch.form.calDT_HDGISUNG;
        	this.edtCD_VENDOR = this.divSearch.form.edtCD_VENDOR;
        	this.edtDS_VENDOR = this.divSearch.form.edtDS_VENDOR;

        	this.dxGrid = this.divData.form.objGrid;

        	//작업일자 셋팅
        	this.calYM_WORK.form.TextBox.set_value(this.gfnNvl(this.getOwnerFrame().YM_WORK,""));
        	this.calYM_WORK.form.set_readonly(true);
        	this.edtNO_HADOCONT.set_value(this.gfnNvl(this.getOwnerFrame().NO_HADOCONT,0));
        	this.metAM_CONT_PROV.set_value(this.gfnNvl(this.getOwnerFrame().AM_CONT_PROV,0));
        	this.metAM_CONT_VAT.set_value(this.gfnNvl(this.getOwnerFrame().AM_CONT_VAT,0));
        	this.metAM_GISUNG_PROV.set_value(this.gfnNvl(this.getOwnerFrame().AM_GISUNG_PROV,0));
        	this.metAM_GISUNG_VAT.set_value(this.gfnNvl(this.getOwnerFrame().AM_GISUNG_VAT,0));
        	this.calDT_HDGISUNG.set_value(this.gfnNvl(this.getOwnerFrame().DT_HDGISUNG,""));
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DB", "DBS_HDGISUNGSLIP");  // pForm.gfnGridInit = function(objGrid, objDs, cd_system, id_grid, tree_column, level_column, is_manual)
        	this.dxGrid.setFormatRowProperty( 1, "size", 48);
        	var strProperty = this.dxGrid.getCellProperty( "body", this.dxGrid.getBindCellIndex("body","AM_VAT"), "edittype" );
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","AM_VAT"), "edittype", "expr:TY_GUBUN=='면세'?'none':'"+strProperty+"'" );
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","AM_SUPPLY"), "edittype", "expr:comp.parent.gfnIsNull(ISSUE_ID)?'mask':'none'" );
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","AM_VAT"), "edittype", "expr:comp.parent.gfnIsNull(ISSUE_ID)?'mask':'none'" );

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged     = "fnGrid_AfterCDTextChanged";

        	this.dxGrid.addEventHandler("oncelldblclick", this.dxGrid_oncelldblclick, this);
        	this.dsList.addEventHandler("onvaluechanged", this.dsList_onvaluechanged, this);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("NO_HADOCONT", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");
        	this.dsSelect.addColumn("YMD_WORK", "string");
        	this.dsSelect.addColumn("ID_USER", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("FLAG", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("NO_HADOCONT", "string");
        	this.dsSave.addColumn("YM_WORK", "string");
        	this.dsSave.addColumn("YMD_WORK", "string");
        	this.dsSave.addColumn("AM_ACCOUNT", "BIGDECIMAL");
        	this.dsSave.addColumn("AM_SUPPLY", "BIGDECIMAL");
        	this.dsSave.addColumn("AM_VAT", "BIGDECIMAL");
        	//this.dsSave.addColumn("TY_VENDOR", "string");
        	//this.dsSave.addColumn("CD_VENDOR", "string");
        	//this.dsSave.addColumn("DS_VENDOR", "string");
        	this.dsSave.addColumn("ISSUE_ID", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("TY_ISSUE", "string");
        	this.dsSave.addColumn("CD_VATPROOF", "string");
        	this.dsSave.addColumn("DT_ACCOUNT", "string");
        	this.dsSave.addColumn("TY_GUBUN", "string");
        	this.dsSave.addColumn("SEQ", "int");

        	this.dsSlip = new Dataset();
        	this.dsSlip.addColumn("NO_HADOCONT", "string");
        	this.dsSlip.addColumn("YM_WORK", "string");
        	this.dsSlip.addColumn("YMD_WORK", "string");
        	this.dsSlip.addColumn("ID_USER", "string");
        	this.dsSlip.addColumn("CD_DEPT_BH", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsList.clearData();
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_SITE", this.gfnNvl(this.getOwnerFrame().CD_SITE,""));
        	this.dsSelect.setColumn(0, "NO_HADOCONT", this.gfnNvl(this.getOwnerFrame().NO_HADOCONT,""));
        	this.dsSelect.setColumn(0, "YM_WORK", this.gfnNvl(this.getOwnerFrame().YM_WORK,""));
        	this.dsSelect.setColumn(0, "YMD_WORK", this.gfnNvl(this.getOwnerFrame().DT_HDGISUNG,""));
        	this.dsSelect.setColumn(0, "ID_USER", this.gfnNvl(this.getOwnerFrame().ID_USER,""));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0 dsListSub=select1";
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

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "FLAG", flag);
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "NO_HADOCONT", this.gfnNvl(this.getOwnerFrame().NO_HADOCONT,""));
        				this.dsSave.setColumn(nrow, "YM_WORK", this.gfnNvl(this.getOwnerFrame().YM_WORK,""));
        				this.dsSave.setColumn(nrow, "YMD_WORK", this.gfnNvl(this.getOwnerFrame().DT_HDGISUNG,""));
        				this.dsSave.setColumn(nrow, "AM_ACCOUNT", this.dsList.getColumn(i, "AM_ACCOUNT"));
        				this.dsSave.setColumn(nrow, "AM_SUPPLY", this.dsList.getColumn(i, "AM_SUPPLY"));
        				this.dsSave.setColumn(nrow, "AM_VAT", this.dsList.getColumn(i, "AM_VAT"));
        				//this.dsSave.setColumn(nrow, "TY_VENDOR", this.dsList.getColumn(this.dsList.rowposition, "TY_VENDOR"));
        				//this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR"));
        				//this.dsSave.setColumn(nrow, "DS_VENDOR", this.dsList.getColumn(this.dsList.rowposition, "DS_VENDOR"));
        				this.dsSave.setColumn(nrow, "ISSUE_ID", this.dsList.getColumn(i, "ISSUE_ID"));
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "TY_ISSUE", this.dsList.getColumn(i, "TY_ISSUE"));
        				this.dsSave.setColumn(nrow, "CD_VATPROOF", this.dsList.getColumn(i, "CD_VATPROOF"));
        				this.dsSave.setColumn(nrow, "DT_ACCOUNT", this.dsList.getColumn(i, "DT_ACCOUNT"));
        				this.dsSave.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i, "TY_GUBUN"));
        				this.dsSave.setColumn(nrow, "SEQ", i);

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
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	if( this.dsList.getColumn(this.dsList.rowposition, "NO_SLIP") != "N" ){
        		this.gfnAlert("전표 발행된 기성은 삭제할 수 없습니다.", "");
        		return;
        	} else {
        		this.gfnGridDel(this.dxGrid);
        	}
        };
        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        };

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	저장 Validate
         */
        this.fnSlipValidate = function() {
        	var validate = true;
        	var msg = "";
        	if( nexacro.toNumber(this.metAM_GISUNG_PROV.value,0) != nexacro.toNumber(this.dsList.getSum("AM_SUPPLY"),0) ){
        		validate = false;
        		msg = "기성당회(공급가)와 전표발행 공급가액 총합이 일치해야 합니다.";
        	}

        	if( nexacro.toNumber(this.metAM_GISUNG_VAT.value,0) != nexacro.toNumber(this.dsList.getSum("AM_VAT"),0) ){
        		validate = false;
        		msg += (msg!=""?"\n":"")+"기성당회(부가세)와 전표발행 부가세 총합이 일치해야 합니다.";
        	}

        	this.gfnAlert(msg, "fnVaidateCallback");
        	return validate;
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
        		this.gfnNvl(this.getOwnerFrame().YM_WORK,"")
        	} else if(svcID == "save" || svcID == "slip" || svcID == "slipDelete"){
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
        /*
         *	코드파인드 Before 이벤트
         */
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "DHX_CFALLVENDOR_CODEFIND") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsList.getColumn(this.dsList.rowposition,"CD_CORP"));
        	}

        	if (id == "DHX_CFEBILLBUY_ESERO") {
        		dsUserParam.setColumn(nrow, "TY_SALEBUY", "I"); // 매입매출구분(매입:I)
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsList.getColumn(this.dsList.rowposition,"CD_CORP"));
        	}

        	if (id == "DHX_COMMON_CODEFIND_SELECT") {
        		dsUserParam.setColumn(nrow, "CD_SYSTEM", "DH");
        		dsUserParam.setColumn(nrow, "CD_TYPE", "V10");
        	}
        	return true;
        };

        /*
         *	코드파인드 After 이벤트
         */
        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	var rowPos = this.dsList.rowposition;
        	var strMsg = "아래 데이터가 일치하지 않습니다.\n";
        	var validate = true;
        	switch(id) {
        		case "DHX_CFEBILLBUY_ESERO":	//전자세금계산서번호
        			if (arrData.length > 0) {
        				// 기성청구일, 발행일자 비교
        				if( arrData[0]["ISSUE_DATE"] != this.calDT_HDGISUNG.value ){
        					//validate = false;
        					var strDate1 = this.calDT_HDGISUNG.value;
        					var strDate2 = arrData[0]["ISSUE_DATE"];
        					strMsg = "* 기성청구일 : "+strDate1.substr(0,4)+"-"+strDate1.substr(4,2)+"-"+strDate1.substr(6,2)+" , 전표발행 발행일자 : " + +strDate2.substr(0,4)+"-"+strDate2.substr(4,2)+"-"+strDate2.substr(6,2);
        				}

        				// 업체코드 비교
        				if( arrData[0]["CD_VENDOR"] != this.edtCD_VENDOR.value ){
        					//validate = false;
        					strMsg += (validate?"":"\n")+"* 업체코드 : "+this.edtCD_VENDOR.value+" , 전표발행 업체코드 : " + arrData[0]["CD_VENDOR"];
        				}

        				// 공급가액 비교
        				if( arrData[0]["CHARGETOTAL"] != this.gfnNvl(this.dsList.getColumn(rowPos,"AM_GISUNG_PROV"),0) ){
        					validate = false;
        					strMsg += (validate?"":"\n")+"* 기성 공급가액 : "+this.gfnNvl(this.dsList.getColumn(rowPos,"AM_GISUNG_PROV"),0)+" , 전표발행 공급가액 : " + arrData[0]["GRANDTOTAL"];
        				}

        				// 부가세 비교
        				/*if( arrData[0]["TAXTOTAL"] != this.gfnNvl(this.dsList.getColumn(rowPos,"AM_GISUNG_VAT"),0) ){
        					validate = false;
        					strMsg += (validate?"":"\n")+"* 기성 공급가액 : "+this.gfnNvl(this.dsList.getColumn(rowPos,"AM_GISUNG_VAT"),0)+" , 전표발행 부가세 : " + arrData[0]["TAXTOTAL"];
        				}*/

        				if( !validate ) {
        					this.dsList.setColumn(rowPos, "ISSUE_ID"	, "");
        					this.dsList.setColumn(rowPos, this.ucFlag, "");
        					this.gfnSetFormStatus(this, "Q");
        					this.gfnAlert(strMsg, "");
        					return false;
        				} else {
        					this.dsList.set_enableevent(false);

        					this.dsList.setColumn(rowPos, "DT_ACCOUNT"	, nexacro.replaceAll(this.gfnNvl(arrData[0]["ISSUE_DATE"],""),"-",""));	//회계일자
        					this.dsList.setColumn(rowPos, "CD_VENDOR" 	, arrData[0]["CD_VENDOR"]);		//거래처코드
        					this.dsList.setColumn(rowPos, "DS_VENDOR" 	, arrData[0]["DS_VENDOR"]);		//거래처명
        					this.dsList.setColumn(rowPos, "TY_VENDOR" 	, arrData[0]["TY_VENDOR"]);		//거래처구분
        					//this.dsList.setColumn(rowPos, "AM_SUPPLY"	, arrData[0]["GRANDTOTAL"]);	//공급가액
        					this.dsList.setColumn(rowPos, "AM_SUPPLY"	, arrData[0]["CHARGETOTAL"]);	//공급가액
        					this.dsList.setColumn(rowPos, "AM_VAT"		, arrData[0]["TAXTOTAL"]);		//부가세
        					this.dsList.setColumn(rowPos, "TY_ISSUE"	, "E");		                    //전자증빙(전자발행)
        					this.dsList.setColumn(rowPos, "AM_ACCOUNT"  , nexacro.toNumber(arrData[0]["CHARGETOTAL"],0) + nexacro.toNumber(arrData[0]["TAXTOTAL"],0));
        					this.dsList.set_enableevent(true);

        					var colCD_ACCOUNT = this.dxGrid.getBindCellIndex("body", "CD_ACCOUNT");
        					this.dxGrid.setCellPos(colCD_ACCOUNT);
        					this.dxGrid.showEditor(true);
        				}
        			}
        		break;
        		case "DHX_COMMON_CODEFIND_SELECT" :
        			if (arrData.length > 0) {
        				if( this.gfnNvl(this.dsList.getColumn(rowPos,"TY_GUBUN"),"") != '면세' && this.gfnNvl(this.dsList.getColumn(rowPos, "TY_ISSUE"),"") != "E"){
        					this.dsList.setColumn(rowPos, "PER_VATPROOF", arrData[0]["DS_ETC2"]);		//증빙코드 부가세율
        					this.dsList.setColumn(rowPos, "AM_VAT"		, nexacro.toNumber(this.dsList.getColumn(rowPos,"AM_SUPPLY"),0) * (nexacro.toNumber(this.dsList.getColumn(rowPos,"PER_VATPROOF"),0)/100));		//증빙코드 부가세율
        					this.dsList.setColumn(rowPos, "AM_ACCOUNT"  , nexacro.toNumber(this.dsList.getColumn(rowPos,"AM_SUPPLY"),0) + nexacro.toNumber(this.dsList.getColumn(rowPos,"AM_VAT"),0));
        				}
        			}
        		break;
         	}
        };
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        /*
         *	전자세금계산서 공급가액,부가세 변경시
         */
        this.dsList_onvaluechanged = function(obj,e)
        {
        	if((e.columnid == "AM_SUPPLY" || e.columnid == "PER_VATPROOF") && obj.getColumn(e.row,"TY_GUBUN") != '면세'){
        		obj.setColumn(e.row,"AM_VAT" , nexacro.toNumber(obj.getColumn(e.row,"AM_SUPPLY"),0) *  (nexacro.toNumber(obj.getColumn(e.row,"PER_VATPROOF"),0)/100));
        	}

        	if(e.columnid.search("AM") > -1 ||  e.columnid == "PER_VATPROOF") {
        		obj.setColumn(e.row,"AM_ACCOUNT" , nexacro.toNumber(obj.getColumn(e.row,"AM_SUPPLY"),0) + nexacro.toNumber(obj.getColumn(e.row,"AM_VAT"),0));
        	}

        	if(e.columnid == "ISSUE_ID" && this.gfnIsNull(e.newvalue)){
        		//obj.setColumn(e.row, "CD_VENDOR" 	, "");		//거래처코드
        		//obj.setColumn(e.row, "DS_VENDOR" 	, "");		//거래처명
        		//obj.setColumn(e.row, "TY_VENDOR" 	, "");		//거래처구분
        		obj.setColumn(e.row, "AM_SUPPLY"	, 0);	    //공급가액
        		obj.setColumn(e.row, "AM_VAT"		, 0);		//부가세
        		obj.setColumn(e.row, "AM_ACCOUNT"   , 0);       //총액
        		obj.setColumn(e.row,"TY_ISSUE","P");            //전자증빙(종이)
        	}
        };

        /*
         *	그리드 더블클릭 이벤트
         */
        this.dxGrid_oncelldblclick = function(obj,e)
        {
        	 if(!this.gfnGridIsRow(this.dxGrid)) return;
        	 var strColumnName = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, this.dxGrid.currentcol);
        	if (strColumnName != "NO_SLIP" ) return 0;
        	this.fnWorkBtn3();

        };
        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        /*
         * 전표발행 버튼 이벤트
         */
        this.fnWorkBtn1 = function(obj,e) {
        	if(this.dsList.rowcount == 0) return;

        	var nICnt = this.dsList.findRow(this.ucFlag,"I");
        	var nUCnt = this.dsList.findRow(this.ucFlag,"U");
        	var nDCnt = this.dsList.findRow(this.ucFlag,"D");

        	if( nICnt > -1|| nUCnt > -1 || nDCnt > -1) {
        		this.gfnAlert("저장 후 전표발행 하세요.", "");
        		return;
        	}

        	var nCnt = this.dsList.findRow("NO_SLIP","N");
        	if( nCnt == -1 ){
        		this.gfnAlert("이미 전표가 생성되었습니다.", "");
        		return;
        	}

        	if( this.gfnNvl(this.getOwnerFrame().TY_WORK,"") != "7") {
        		this.gfnAlert("관리부 검토완료건만 전표발행 가능합니다.", "");
        		return;
        	}

        	if (!this.fnSlipValidate()) return false;

        	this.gfnConfirm("선택한 데이터의 전표발행 작업을 하시겠습니까?", "fnSlipIssue", "slip");

        };



        /*
         * 전표취소 버튼 이벤트
         */
        this.fnWorkBtn2 = function(obj,e) {
        	if(this.dsList.rowcount == 0) return;

        	var nCnt = this.dsList.findRow("NO_SLIP","N");

        	if( nCnt > -1 ){
        		this.gfnAlert("전표가 생성된 경우만 전표취소 가능합니다.", "");
        		return;
        	}

        	nCnt = this.dsList.findRow("YN_APPR","Y");
        	if( nCnt > -1 ){
        		this.gfnAlert("전표 승인이 완료된 경우 전표취소 불가능 합니다.", "");
        		return;
        	}
        	this.gfnConfirm("선택한 데이터의 전표취소 작업을 하시겠습니까?", "fnSlipIssue","slipDelete");

        };

        /*
         * 전표조회 버튼 이벤트
         */
        this.fnWorkBtn3 = function(obj,e) {
        	if(this.dsList.rowcount == 0) return;

        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	if( this.dsList.getColumn(this.dsList.rowposition, "NO_SLIP") != "N" ){
        		var param = {};

        		param.CD_TRADE = this.dsList.getColumn(this.dsList.rowposition,"NO_SLIP");
        		param.IUD_FLAG = "S";

        		this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);
        	} else {
        		this.gfnAlert("전표가 생성된 행만 전표조회 가능합니다.", "");
        	}

        };

        /*
         * 금액갱신 버튼 이벤트
         */
        this.fnWorkBtn4 = function(obj,e) {
        	if(this.dsList.rowcount == 0) return;

        	for( var i=0; i < this.dsList.rowcount; i++ ){
        		this.dsList.setColumn(i,"AM_SUPPLY", this.gfnNvl(this.dsList.getColumn(i,"AM_GISUNG_PROV"),0));
        		this.dsList.setColumn(i,"AM_VAT", this.gfnNvl(this.dsList.getColumn(i,"AM_GISUNG_VAT"),0));
        		this.dsList.setColumn(i,"AM_ACCOUNT", this.gfnNvl(this.dsList.getColumn(i,"AM_GISUNG_TOT"),0));
        	}

        };
        /*
          *	전표발행
          */
        this.fnSlipIssue = function(svcID, value){

        	if(value) {
        		this.gfnGridBeforeSelect(this.dxGrid);

        		this.dsSlip.clearData();
        		this.dsSlip.addRow();
        		this.dsSlip.setColumn(0, "NO_HADOCONT", this.gfnNvl(this.getOwnerFrame().NO_HADOCONT,""));
        		this.dsSlip.setColumn(0, "YM_WORK", this.gfnNvl(this.getOwnerFrame().YM_WORK,""));
        		this.dsSlip.setColumn(0, "YMD_WORK", this.gfnNvl(this.getOwnerFrame().DT_HDGISUNG,""));
        		this.dsSlip.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        		this.dsSlip.setColumn(0, "CD_DEPT_BH", this.gfnNvl(this.AuthClient.CD_DEPT,""));

        		if( svcID == "slip" ) {
        			var strSvcId    = "slip";
        			var inData      = "slip=dsSlip";
        		} else if( svcID == "slipDelete" ) {
        			var strSvcId    = "slipDelete";
        			var inData      = "slipDelete=dsSlip";
        		}
        		var strSvcType  = "grid";
        		var inProc		= "_dsProc";
        		var outData     = "";
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

        };
        /************************************************************************
         * 기타 이벤트
        ************************************************************************/
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("DBS_HDGISUNGSLIP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
