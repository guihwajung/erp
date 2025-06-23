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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DRAPR_GUNOPTION_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DRAPR_GUNOPTION_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DRAPR_GUNOPTION_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DRAPR_GUNOPTION_DELETE</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DRAPR_SIZEDIV_SELECT</Col></Row><Row><Col id=\"TARGET\">d_insert</Col><Col id=\"SP\">DRAPR_SIZEDIV_INFO_INSERT</Col></Row><Row><Col id=\"TARGET\">d_update</Col><Col id=\"SP\">DRAPR_SIZEDIV_INFO_UPDATE</Col></Row><Row><Col id=\"TARGET\">d_delete</Col><Col id=\"SP\">DRAPR_SIZEDIV_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_TAX\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTotal", this);
            obj._setContents("<ColumnInfo><Column id=\"AM_TOTLAND\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TOTBLD\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TOTVAT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TOTSELL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("사업지코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_ACNTUNIT","staCD_ACNTUNIT:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ACNTUNIT","ctxtCD_ACNTUNIT:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            this.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtNO_SIZE","ctxtDS_ACNTUNIT:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_format("#,0.###0");
            obj.set_type("number");
            obj.set_maskchar(" ");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staMETER","ctxtNO_SIZE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("m²");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtTY_TYPE","staMETER:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staMSG00","ctxtTY_TYPE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("형      군는 한자리입니다. 옵션코드는 영문 두자리입니다.");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","50%","0","5","100%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","0",null,"100%","22",null,"40",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("합계");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","0",null,null,"0","staTitle:0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staAM_TOTLAND","0","staTitle:5","60","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("1");
            obj.set_text("토지가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBgAM_TOTLAND","staAM_TOTLAND:-1","staTitle:5",null,"30","75%",null,"91",null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staAM_TOTBLD","staBgAM_TOTLAND:-1","staTitle:5","60","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("3");
            obj.set_text("건물가");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBgAM_TOTBLD","staAM_TOTBLD:-1","staTitle:5",null,"30","50%",null,"91",null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staAM_TOTVAT","staBgAM_TOTBLD:-1","staTitle:5","60","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("5");
            obj.set_text("부가세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBgAM_TOTVAT","staAM_TOTVAT:-1","staTitle:5",null,"30","25%",null,"91",null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staAM_TOTSELL","staBgAM_TOTVAT:-1","staTitle:5","60","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("7");
            obj.set_text("분양금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBgAM_TOTSELL","staAM_TOTSELL:-1","staTitle:5",null,"30","0",null,"91",null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_TOTLAND","staAM_TOTLAND:3","staTitle:10",null,"20","staAM_TOTBLD:3",null,"85",null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("9");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_format("#,0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_TOTBLD","staAM_TOTBLD:3","staTitle:10",null,"20","staAM_TOTVAT:3",null,"85",null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("10");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_format("#,0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_TOTVAT","staAM_TOTVAT:3","staTitle:10",null,"20","staAM_TOTSELL:3",null,"85",null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("11");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_format("#,0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_TOTSELL","staAM_TOTSELL:3","staTitle:10",null,"20","3",null,"85",null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("12");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_format("#,0");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctxtCD_ACNTUNIT","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctxtDS_ACNTUNIT","value","dsSearch","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctxtNO_SIZE","value","dsSearch","NO_SIZE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctxtTY_TYPE","value","dsSearch","TY_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataRight.form.ctxtAM_TOTLAND","value","dsTotal","AM_TOTLAND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataRight.form.ctxtAM_TOTBLD","value","dsTotal","AM_TOTBLD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataRight.form.ctxtAM_TOTVAT","value","dsTotal","AM_TOTVAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataRight.form.ctxtAM_TOTSELL","value","dsTotal","AM_TOTSELL");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DRA_DLGGUNOPTION.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        	this.dsSearch.setColumn(0, "DS_ACNTUNIT", this.getOwnerFrame().DS_ACNTUNIT);
        	this.dsSearch.setColumn(0, "NO_SIZE", this.getOwnerFrame().NO_SIZE);
        	this.dsSearch.setColumn(0, "TY_TYPE", this.getOwnerFrame().TY_TYPE);
        	this.dsSearch.setColumn(0, "YN_TAX", this.getOwnerFrame().YN_TAX);

        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	// 서브 버튼 사용
        	this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter); // divSplitter sync
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnConform = this.gfnFormButtonAdd("btnConform", "fnConform"); // 안분내역복사
        	this.btnAppoint = this.gfnFormButtonAdd("btnAppoint", "fnAppoint"); // 동층호지정
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataRight.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DR", "DRA_DLGGUNOPTION");
        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DR", "DRA_DLGGUNOPTION_2");
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("NO_CHASU", "string");
        	this.dsSelect.addColumn("NO_SIZE", "bigdecimal");
        	this.dsSelect.addColumn("TY_TYPE", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_ACNTUNIT", "string");
        	this.dsInsert.addColumn("TY_GUBUN", "string");
        	this.dsInsert.addColumn("NO_CHASU", "string");
        	this.dsInsert.addColumn("NO_SIZE", "bigdecimal");
        	this.dsInsert.addColumn("TY_TYPE", "string");
        	this.dsInsert.addColumn("TY_DISTRICT", "string");
        	this.dsInsert.addColumn("RT_OPTION", "string");
        	this.dsInsert.addColumn("DS_OPTION", "string");
        	this.dsInsert.addColumn("AM_LAND", "bigdecimal");
        	this.dsInsert.addColumn("AM_BUILDING", "bigdecimal");
        	this.dsInsert.addColumn("AM_VAT", "bigdecimal");
        	this.dsInsert.addColumn("AM_SELLING", "bigdecimal");
        	this.dsInsert.addColumn("RT_LANDRATE", "bigdecimal");
        	this.dsInsert.addColumn("ID_INSERT", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_ACNTUNIT", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("NO_CHASU", "string");
        	this.dsUpdate.addColumn("NO_SIZE", "bigdecimal");
        	this.dsUpdate.addColumn("TY_TYPE", "string");
        	this.dsUpdate.addColumn("TY_DISTRICT", "string");
        	this.dsUpdate.addColumn("RT_OPTION", "string");
        	this.dsUpdate.addColumn("DS_OPTION", "string");
        	this.dsUpdate.addColumn("AM_LAND", "bigdecimal");
        	this.dsUpdate.addColumn("AM_BUILDING", "bigdecimal");
        	this.dsUpdate.addColumn("AM_VAT", "bigdecimal");
        	this.dsUpdate.addColumn("AM_SELLING", "bigdecimal");
        	this.dsUpdate.addColumn("RT_LANDRATE", "bigdecimal");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_ACNTUNIT", "string");
        	this.dsDelete.addColumn("TY_GUBUN", "string");
        	this.dsDelete.addColumn("NO_CHASU", "string");
        	this.dsDelete.addColumn("NO_SIZE", "bigdecimal");
        	this.dsDelete.addColumn("TY_TYPE", "string");
        	this.dsDelete.addColumn("TY_DISTRICT", "string");
        	this.dsDelete.addColumn("RT_OPTION", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelectSub.addColumn("TY_GUBUN", "string");
        	this.dsSelectSub.addColumn("NO_CHASU", "string");
        	this.dsSelectSub.addColumn("NO_SIZE", "bigdecimal");
        	this.dsSelectSub.addColumn("TY_TYPE", "string");
        	this.dsSelectSub.addColumn("TY_DISTRICT", "string");
        	this.dsSelectSub.addColumn("RT_OPTION", "string");

        	this.dsInsertSub = new Dataset();
        	this.dsInsertSub.addColumn("CD_ACNTUNIT", "string");
        	this.dsInsertSub.addColumn("TY_GUBUN", "string");
        	this.dsInsertSub.addColumn("NO_CHASU", "string");
        	this.dsInsertSub.addColumn("NO_SIZE", "bigdecimal");
        	this.dsInsertSub.addColumn("TY_TYPE", "string");
        	this.dsInsertSub.addColumn("TY_DISTRICT", "string");
        	this.dsInsertSub.addColumn("RT_OPTION", "string");
        	this.dsInsertSub.addColumn("TY_NAPIP", "string");
        	this.dsInsertSub.addColumn("NO_NAPIP", "string");
        	this.dsInsertSub.addColumn("RT_DIVISION", "bigdecimal");
        	this.dsInsertSub.addColumn("AM_SELLING_HANDLE", "bigdecimal");
        	this.dsInsertSub.addColumn("DT_STARTAGREE", "string");
        	this.dsInsertSub.addColumn("DT_ENDAGREE", "string");
        	this.dsInsertSub.addColumn("AM_LAND", "bigdecimal");
        	this.dsInsertSub.addColumn("AM_BUILDING", "bigdecimal");
        	this.dsInsertSub.addColumn("AM_VAT", "bigdecimal");
        	this.dsInsertSub.addColumn("AM_SELLING", "bigdecimal");
        	this.dsInsertSub.addColumn("ID_INSERT", "string");

        	this.dsUpdateSub = new Dataset();
        	this.dsUpdateSub.addColumn("CD_ACNTUNIT", "string");
        	this.dsUpdateSub.addColumn("TY_GUBUN", "string");
        	this.dsUpdateSub.addColumn("NO_CHASU", "string");
        	this.dsUpdateSub.addColumn("NO_SIZE", "bigdecimal");
        	this.dsUpdateSub.addColumn("TY_TYPE", "string");
        	this.dsUpdateSub.addColumn("TY_DISTRICT", "string");
        	this.dsUpdateSub.addColumn("RT_OPTION", "string");
        	this.dsUpdateSub.addColumn("TY_NAPIP", "string");
        	this.dsUpdateSub.addColumn("NO_NAPIP", "string");
        	this.dsUpdateSub.addColumn("RT_DIVISION", "bigdecimal");
        	this.dsUpdateSub.addColumn("AM_SELLING_HANDLE", "bigdecimal");
        	this.dsUpdateSub.addColumn("DT_STARTAGREE", "string");
        	this.dsUpdateSub.addColumn("DT_ENDAGREE", "string");
        	this.dsUpdateSub.addColumn("AM_LAND", "bigdecimal");
        	this.dsUpdateSub.addColumn("AM_BUILDING", "bigdecimal");
        	this.dsUpdateSub.addColumn("AM_VAT", "bigdecimal");
        	this.dsUpdateSub.addColumn("AM_SELLING", "bigdecimal");
        	this.dsUpdateSub.addColumn("STRGUBUN", "string");
        	this.dsUpdateSub.addColumn("ID_UPDATE", "string");

        	this.dsDeleteSub = new Dataset();
        	this.dsDeleteSub.addColumn("CD_ACNTUNIT", "string");
        	this.dsDeleteSub.addColumn("TY_GUBUN", "string");
        	this.dsDeleteSub.addColumn("NO_CHASU", "string");
        	this.dsDeleteSub.addColumn("NO_SIZE", "bigdecimal");
        	this.dsDeleteSub.addColumn("TY_TYPE", "string");
        	this.dsDeleteSub.addColumn("TY_DISTRICT", "string");
        	this.dsDeleteSub.addColumn("RT_OPTION", "string");
        	this.dsDeleteSub.addColumn("TY_NAPIP", "string");
        	this.dsDeleteSub.addColumn("NO_NAPIP", "string");
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        	this.dsSelect.setColumn(0, "NO_SIZE", this.dsSearch.getColumn(0, "NO_SIZE"));
        	this.dsSelect.setColumn(0, "TY_TYPE", this.dsSearch.getColumn(0, "TY_TYPE"));

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
        	this.gfnGridAdd(this.dxGrid);
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

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        				this.dsInsert.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        				this.dsInsert.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        				this.dsInsert.setColumn(nrow, "NO_SIZE", this.dsSearch.getColumn(0, "NO_SIZE"));
        				this.dsInsert.setColumn(nrow, "TY_TYPE", this.dsSearch.getColumn(0, "TY_TYPE"));
        				this.dsInsert.setColumn(nrow, "TY_DISTRICT", this.dsList.getColumn(i, "TY_DISTRICT"));
        				this.dsInsert.setColumn(nrow, "RT_OPTION", this.dsList.getColumn(i, "RT_OPTION"));
        				this.dsInsert.setColumn(nrow, "DS_OPTION", this.dsList.getColumn(i, "DS_OPTION"));
        				this.dsInsert.setColumn(nrow, "AM_LAND", this.dsList.getColumn(i, "AM_LAND"));
        				this.dsInsert.setColumn(nrow, "AM_BUILDING", this.dsList.getColumn(i, "AM_BUILDING"));
        				this.dsInsert.setColumn(nrow, "AM_VAT", this.dsList.getColumn(i, "AM_VAT"));
        				this.dsInsert.setColumn(nrow, "AM_SELLING", this.dsList.getColumn(i, "AM_SELLING"));
        				this.dsInsert.setColumn(nrow, "RT_LANDRATE", this.dsList.getColumn(i, "RT_LANDRATE"));
        				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        				this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        				this.dsUpdate.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        				this.dsUpdate.setColumn(nrow, "NO_SIZE", this.dsSearch.getColumn(0, "NO_SIZE"));
        				this.dsUpdate.setColumn(nrow, "TY_TYPE", this.dsSearch.getColumn(0, "TY_TYPE"));
        				this.dsUpdate.setColumn(nrow, "TY_DISTRICT", this.dsList.getColumn(i, "TY_DISTRICT"));
        				this.dsUpdate.setColumn(nrow, "RT_OPTION", this.dsList.getColumn(i, "RT_OPTION"));
        				this.dsUpdate.setColumn(nrow, "DS_OPTION", this.dsList.getColumn(i, "DS_OPTION"));
        				this.dsUpdate.setColumn(nrow, "AM_LAND", this.dsList.getColumn(i, "AM_LAND"));
        				this.dsUpdate.setColumn(nrow, "AM_BUILDING", this.dsList.getColumn(i, "AM_BUILDING"));
        				this.dsUpdate.setColumn(nrow, "AM_VAT", this.dsList.getColumn(i, "AM_VAT"));
        				this.dsUpdate.setColumn(nrow, "AM_SELLING", this.dsList.getColumn(i, "AM_SELLING"));
        				this.dsUpdate.setColumn(nrow, "RT_LANDRATE", this.dsList.getColumn(i, "RT_LANDRATE"));
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        				this.dsDelete.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        				this.dsDelete.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        				this.dsDelete.setColumn(nrow, "NO_SIZE", this.dsSearch.getColumn(0, "NO_SIZE"));
        				this.dsDelete.setColumn(nrow, "TY_TYPE", this.dsSearch.getColumn(0, "TY_TYPE"));
        				this.dsDelete.setColumn(nrow, "TY_DISTRICT", this.dsList.getColumn(i, "TY_DISTRICT"));
        				this.dsDelete.setColumn(nrow, "RT_OPTION", this.dsList.getColumn(i, "RT_OPTION"));

        				break;
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

        	this.dsListSub.clearData();

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();
        	this.dsSelectSub.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        	this.dsSelectSub.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        	this.dsSelectSub.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        	this.dsSelectSub.setColumn(0, "NO_SIZE", this.dsSearch.getColumn(0, "NO_SIZE"));
        	this.dsSelectSub.setColumn(0, "TY_TYPE", this.dsSearch.getColumn(0, "TY_TYPE"));
        	this.dsSelectSub.setColumn(0, "TY_DISTRICT", this.dsList.getColumn(this.dsList.rowposition, "TY_DISTRICT"));
        	this.dsSelectSub.setColumn(0, "RT_OPTION", this.dsList.getColumn(this.dsList.rowposition, "RT_OPTION"));

        	var strSvcId    = "detail";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "d_select=dsSelectSub";
        	var outData     = "dsListSub=d_select0";
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

        this.fnAddSub = function() {
        	this.gfnGridAdd(this.dxGridSub);
        }
        this.fnDelSub = function() {
        	this.gfnGridDel(this.dxGridSub);
        }
        this.fnSaveSub = function() {
        	if (!this.gfnGridValidate(this.dxGridSub)) return;

        	this.dxGridSub.updateToDataset();

        	this.dsInsertSub.clearData();
        	this.dsUpdateSub.clearData();
        	this.dsDeleteSub.clearData();

        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsertSub.addRow();
        				this.dsInsertSub.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        				this.dsInsertSub.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        				this.dsInsertSub.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        				this.dsInsertSub.setColumn(nrow, "NO_SIZE", this.dsSearch.getColumn(0, "NO_SIZE"));
        				this.dsInsertSub.setColumn(nrow, "TY_TYPE", this.dsSearch.getColumn(0, "TY_TYPE"));
        				this.dsInsertSub.setColumn(nrow, "TY_DISTRICT", this.dsList.getColumn(this.dsList.rowposition, "TY_DISTRICT"));
        				this.dsInsertSub.setColumn(nrow, "RT_OPTION", this.dsList.getColumn(this.dsList.rowposition, "RT_OPTION"));
        				this.dsInsertSub.setColumn(nrow, "TY_NAPIP", this.dsListSub.getColumn(i, "TY_NAPIP"));
        				this.dsInsertSub.setColumn(nrow, "NO_NAPIP", this.dsListSub.getColumn(i, "NO_NAPIP"));
        				this.dsInsertSub.setColumn(nrow, "RT_DIVISION", this.dsListSub.getColumn(i, "RT_DIVISION"));
        				this.dsInsertSub.setColumn(nrow, "AM_SELLING_HANDLE", this.dsListSub.getColumn(i, "AM_AMOUNT"));
        				this.dsInsertSub.setColumn(nrow, "DT_STARTAGREE", this.dsListSub.getColumn(i, "DT_STARTAGREE"));
        				this.dsInsertSub.setColumn(nrow, "DT_ENDAGREE", this.dsListSub.getColumn(i, "DT_ENDAGREE"));
        				this.dsInsertSub.setColumn(nrow, "AM_LAND", this.dsListSub.getColumn(i, "AM_LAND"));
        				this.dsInsertSub.setColumn(nrow, "AM_BUILDING", this.dsListSub.getColumn(i, "AM_BUILDING"));
        				this.dsInsertSub.setColumn(nrow, "AM_VAT", this.dsListSub.getColumn(i, "AM_VAT"));
        				this.dsInsertSub.setColumn(nrow, "AM_SELLING", this.dsListSub.getColumn(i, "AM_SELLING"));
        				this.dsInsertSub.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        				break;

        			case "U":
        				var nrow = this.dsUpdateSub.addRow();
        				this.dsUpdateSub.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        				this.dsUpdateSub.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        				this.dsUpdateSub.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        				this.dsUpdateSub.setColumn(nrow, "NO_SIZE", this.dsSearch.getColumn(0, "NO_SIZE"));
        				this.dsUpdateSub.setColumn(nrow, "TY_TYPE", this.dsSearch.getColumn(0, "TY_TYPE"));
        				this.dsUpdateSub.setColumn(nrow, "TY_DISTRICT", this.dsList.getColumn(this.dsList.rowposition, "TY_DISTRICT"));
        				this.dsUpdateSub.setColumn(nrow, "RT_OPTION", this.dsList.getColumn(this.dsList.rowposition, "RT_OPTION"));
        				this.dsUpdateSub.setColumn(nrow, "TY_NAPIP", this.dsListSub.getColumn(i, "TY_NAPIP"));
        				this.dsUpdateSub.setColumn(nrow, "NO_NAPIP", this.dsListSub.getColumn(i, "NO_NAPIP"));
        				this.dsUpdateSub.setColumn(nrow, "RT_DIVISION", this.dsListSub.getColumn(i, "RT_DIVISION"));
        				this.dsUpdateSub.setColumn(nrow, "AM_SELLING_HANDLE", this.dsListSub.getColumn(i, "AM_AMOUNT"));
        				this.dsUpdateSub.setColumn(nrow, "DT_STARTAGREE", this.dsListSub.getColumn(i, "DT_STARTAGREE"));
        				this.dsUpdateSub.setColumn(nrow, "DT_ENDAGREE", this.dsListSub.getColumn(i, "DT_ENDAGREE"));
        				this.dsUpdateSub.setColumn(nrow, "AM_LAND", this.dsListSub.getColumn(i, "AM_LAND"));
        				this.dsUpdateSub.setColumn(nrow, "AM_BUILDING", this.dsListSub.getColumn(i, "AM_BUILDING"));
        				this.dsUpdateSub.setColumn(nrow, "AM_VAT", this.dsListSub.getColumn(i, "AM_VAT"));
        				this.dsUpdateSub.setColumn(nrow, "AM_SELLING", this.dsListSub.getColumn(i, "AM_SELLING"));
        				this.dsUpdateSub.setColumn(nrow, "STRGUBUN", this.dsListSub.getColumn(i, "STRGUBUN"));
        				this.dsUpdateSub.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);

        				break;

        			case "D":
        				var nrow = this.dsDeleteSub.addRow();
        				this.dsDeleteSub.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        				this.dsDeleteSub.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        				this.dsDeleteSub.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        				this.dsDeleteSub.setColumn(nrow, "NO_SIZE", this.dsSearch.getColumn(0, "NO_SIZE"));
        				this.dsDeleteSub.setColumn(nrow, "TY_TYPE", this.dsSearch.getColumn(0, "TY_TYPE"));
        				this.dsDeleteSub.setColumn(nrow, "TY_DISTRICT", this.dsList.getColumn(this.dsList.rowposition, "TY_DISTRICT"));
        				this.dsDeleteSub.setColumn(nrow, "RT_OPTION", this.dsList.getColumn(this.dsList.rowposition, "RT_OPTION"));
        				this.dsDeleteSub.setColumn(nrow, "TY_NAPIP", this.dsListSub.getColumn(i, "TY_NAPIP"));
        				this.dsDeleteSub.setColumn(nrow, "NO_NAPIP", this.dsListSub.getColumn(i, "NO_NAPIP"));
        				break;
        		}
        	}

        	if (this.dsInsertSub.rowcount == 0 && this.dsUpdateSub.rowcount == 0 && this.dsDeleteSub.rowcount == 0) return;

        	var strSvcId    = "savesub";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "d_insert=dsInsertSub d_update=dsUpdateSub d_delete=dsDeleteSub";
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

        this.fnExcelSub = function() {
        	this.gfnExcelExport(this.dxGridSub);
        }

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
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if (svcID == "detail") {
        		this.gfnGridAfterSelect(this.dxGridSub);

        		this.fnGridSub_TotalSum();
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "savesub") {
        		if (errorCode == 0) {
        			this.FormBtns.SubSelect.click();
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
        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		this.FormBtns.SubSelect.click();
        		obj.oldrow = -1;
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        	}
        };

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

        // 좌측 그리드 자동산식.
        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		if(e.columnid == "RT_LANDRATE")
        		{
        			if(nexacro.toNumber(e.newvalue,0) > 1)
        			{
        				this.gfnAlert("1 = 100% 이상 입력하셨습니다. 소수점으로 입력해주세요.");
        				this.dsList.setColumn(this.dsList.rowposition, "RT_LANDRATE", e.oldvalue);
        				return false;
        			}
        			this.dsList.set_enableevent(false);
        			var nrow = this.dsList.rowposition;
        			var rt_landrate = nexacro.round(nexacro.toNumber(e.newvalue,0), 10);
        			var am_selling = nexacro.toNumber(this.dsList.getColumn(nrow, "AM_SELLING"),0);
        			var am_vat = nexacro.toNumber(this.dsList.getColumn(nrow, "AM_VAT"),0);
        			var am_land = nexacro.floor(am_selling * rt_landrate);

        			this.dsList.setColumn(nrow, "RT_LANDRATE", rt_landrate);
        			this.dsList.setColumn(nrow, "AM_LAND", am_land);
        			this.dsList.setColumn(nrow, "AM_BUILDING", am_selling - (am_land + am_vat));
        			this.dsList.set_enableevent(true);
        		}
        		else if(e.columnid == "AM_SELLING")
        		{
        			this.dsList.set_enableevent(false);
        			var nrow = this.dsList.rowposition;
        			var rt_landrate = nexacro.round(nexacro.toNumber(this.dsList.getColumn(nrow, "RT_LANDRATE"),0), 10);
        			var am_selling = nexacro.toNumber(e.newvalue,0);
        			var am_land = nexacro.floor(am_selling * rt_landrate);
        			var am_vat = nexacro.toNumber(this.dsList.getColumn(nrow, "AM_VAT"),0);

        			this.dsList.setColumn(nrow, "RT_LANDRATE", rt_landrate);
        			this.dsList.setColumn(nrow, "AM_LAND", am_land);
        			this.dsList.setColumn(nrow, "AM_BUILDING", am_selling - (am_land + am_vat));
        			this.dsList.set_enableevent(true);
        		}
        		else if(e.columnid == "AM_LAND")
        		{
        			this.dsList.set_enableevent(false);
        			var nrow = this.dsList.rowposition;
        			var am_building = nexacro.toNumber(this.dsList.getColumn(nrow, "AM_BUILDING"),0);
        			var am_land = nexacro.toNumber(e.newvalue, 0);
        			var am_vat = nexacro.toNumber(this.dsList.getColumn(nrow, "AM_VAT"),0);

        			var am_selling = am_land + am_building + am_vat;
        			this.dsList.setColumn(nrow, "AM_SELLING", am_selling);


        			var rt_landrate = am_land / (am_selling == 0 ? 1 : am_selling);

        			this.dsList.setColumn(nrow, "RT_LANDRATE", nexacro.round(rt_landrate, 10));

        			am_land = nexacro.floor(am_selling * rt_landrate);
        			this.dsList.setColumn(nrow, "AM_LAND", am_land);
        			this.dsList.setColumn(nrow, "AM_BUILDING", am_selling - (am_land + am_vat));
        			this.dsList.set_enableevent(true);
        		}
        		else if(e.columnid == "AM_BUILDING")
        		{
        			this.dsList.set_enableevent(false);
        			var nrow = this.dsList.rowposition;
        			var am_building = nexacro.toNumber(e.newvalue,0);
        			var am_land = nexacro.floor(nexacro.toNumber(this.dsList.getColumn(nrow, "AM_LAND"),0));
        			var am_vat = nexacro.toNumber(this.dsList.getColumn(nrow, "AM_VAT"),0);

        			var am_selling = am_building + am_land + am_vat;


        			var rt_landrate = am_land / (am_selling == 0 ? 1 : am_selling);
        			this.dsList.setColumn(nrow, "AM_SELLING", am_selling);
        			this.dsList.setColumn(nrow, "RT_LANDRATE", nexacro.round(rt_landrate, 10));
        			this.dsList.setColumn(nrow, "AM_BUILDING", am_selling - (am_land + am_vat));
        			this.dsList.set_enableevent(true);
        		}
        		else if(e.columnid == "AM_VAT")
        		{
        			this.dsList.set_enableevent(false);
        			var nrow = this.dsList.rowposition;
        			var am_building =  nexacro.toNumber(this.dsList.getColumn(nrow, "AM_BUILDING"),0);
        			var am_land = nexacro.floor(nexacro.toNumber(this.dsList.getColumn(nrow, "AM_LAND"),0));
        			var am_vat = nexacro.toNumber(e.newvalue,0);

        			var am_selling = am_building + am_land + am_vat;

        			var rt_landrate = am_land / (am_selling == 0 ? 1 : am_selling);
        			this.dsList.setColumn(nrow, "AM_SELLING", am_selling);
        			this.dsList.setColumn(nrow, "RT_LANDRATE", nexacro.round(rt_landrate, 10));
        			this.dsList.setColumn(nrow, "AM_BUILDING", am_selling - (am_land + am_vat));
        			this.dsList.set_enableevent(true);
        		}
        	}

        };

        // 우측 그리드 자동산식.
        this.dsListSub_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		var leftRow = this.dsList.rowposition;
        		var rightRow = this.dsListSub.rowposition;

        		if(e.columnid == "RT_DIVISION")
        		{
        			this.dsListSub.set_enableevent(false);

        			var dec_am_selling = nexacro.toNumber(this.dsList.getColumn(leftRow, "AM_SELLING"),0);
        			var dec_am_land = nexacro.toNumber(this.dsList.getColumn(leftRow, "AM_LAND"),0);
        			var dec_am_building = nexacro.toNumber(this.dsList.getColumn(leftRow, "AM_BUILDING"),0);
        			var dec_am_vat = nexacro.toNumber(this.dsList.getColumn(leftRow, "AM_VAT"),0);
        			var rt_division = nexacro.toNumber(e.newvalue,0);

        			var am_land = nexacro.floor(dec_am_land * (rt_division / 100));
        			var am_build = nexacro.floor(dec_am_building * (rt_division / 100));
        			var am_amount = dec_am_selling * rt_division / 100;

        			this.dsListSub.setColumn(rightRow, "AM_AMOUNT", am_amount);
        			var am_vat = am_amount - (am_land + am_build);
        			this.dsListSub.setColumn(rightRow, "AM_LAND", am_land);
        			this.dsListSub.setColumn(rightRow, "AM_BUILD", am_build);
        			this.dsListSub.setColumn(rightRow, "AM_VAT", am_vat);

        			this.fnGridSub_TotalSum();
        			this.dsListSub.set_enableevent(true);
        		}
        		else if(e.columnid == "DT_STARTAGREE")
        		{
        			if(!this.gfnIsNull(e.newvalue))
        			{
        				this.dsListSub.setColumn(this.dsListSub.rowposition, "DT_ENDAGREE", e.newvalue);
        			}
        		}
        		else if(e.columnid == "DT_ENDAGREE")
        		{
        			if(!this.gfnIsNull(e.newvalue))
        			{
        				var dt_startagree = this.dsListSub.getColumn(rightRow, "DT_STARTAGREE");

        				if(this.gfnGetDiffDate(dt_startagree, e.newvalue) < 0)
        				{
        					this.gfnAlert("약정종료일자는 약정시작일자보다 크거나 같아야 합니다.");
        					this.dsListSub.setColumn(rightRow, "DT_ENDAGREE", e.oldvalue);
        					return false;
        				}
        			}
        		}
        		else if(e.columnid == "AM_AMOUNT")
        		{
        			if(!this.gfnIsNull(e.newvalue))
        			{
        				var am_selling = this.dsList.getColumn(leftRow, "AM_SELLING");

        				this.fnCalcAmount();

        				var rtDiv = nexacro.round(this.dsListSub.getColumn(rightRow, "AM_SELLING") / (am_selling == 0 ? 1 : am_selling) * 100, 2);
        				this.dsListSub.setColumn(rightRow, "RT_DIVISION", rtDiv);
        				this.fnGridSub_TotalSum();
        			}
        		}
        		else if(e.columnid == "AM_LAND" || e.columnid == "AM_BUILDING" || e.columnid == "AM_VAT")
        		{
        			this.fnGridSub_TotalSum();
        		}
        	}
        };


        this.fnGridSub_TotalSum = function()
        {
        	if(this.dsListSub.rowcount == 0)
        	{
        		this.dsTotal.setColumn(0, "AM_TOTLAND", 0);
        		this.dsTotal.setColumn(0, "AM_BUILDING", 0);
        		this.dsTotal.setColumn(0, "AM_VAT", 0);
        		this.dsTotal.setColumn(0, "AM_SELLING", 0);
        		return;
        	}

        	var am_totland = 0;
        	var am_totbld = 0;
        	var am_totvat = 0;
        	var am_totsell = 0;

        	for(var i = 0; i < this.dsListSub.rowcount; i++)
        	{
        		am_totland 	+= this.dsListSub.getColumn(i, "AM_LAND");
        		am_totbld   += this.dsListSub.getColumn(i, "AM_BUILDING");
        		am_totvat 	+= this.dsListSub.getColumn(i, "AM_VAT");
        		am_totsell 	+= this.dsListSub.getColumn(i, "AM_SELLING");
        	}

        	this.dsTotal.setColumn(0, "AM_TOTLAND", am_totland);
        	this.dsTotal.setColumn(0, "AM_TOTBLD", am_totbld);
        	this.dsTotal.setColumn(0, "AM_TOTVAT", am_totvat);
        	this.dsTotal.setColumn(0, "AM_TOTSELL", am_totsell);
        }

        this.fnCalcAmount = function()
        {
        	var leftRow = this.dsList.rowposition;
        	var rightRow = this.dsListSub.rowposition;

        	var am_totalLand = 0;
        	var am_totalBuilding = 0;
        	var am_totalVat = 0;

        	var am_land = 0;
        	var am_building = 0;
        	var am_vat = 0;
        	var am_selling = 0;
        	var rt_division = 0;

        	if(nexacro.toNumber(this.dsListSub.getColumn(rightRow, "AM_AMOUNT"),0) > 0)
        	{
        		var dec_amSelling = this.dsList.getColumn(leftRow, "AM_SELLING");
        		var dec_amLand = this.dsList.getColumn(leftRow, "AM_LAND");
        		var dec_amBuilding = this.dsList.getColumn(leftRow, "AM_BUILDING");
        		var dec_amVat = this.dsList.getColumn(leftRow, "AM_VAT");

        		// 잔금이 아니라면.
        		if(this.dsListSub.getColumn(rightRow, "TY_NAPIP") != "R")
        		{
        			var am_amount = nexacro.toNumber(this.dsListSub.getColumn(rightRow, "AM_AMOUNT"),0);
        			rt_division = dec_amSelling / (am_amount == 0 ? 1 : am_amount);
        			am_land = nexacro.floor(dec_amLand / (rt_division == 0 ? 1 : rt_division));
        			am_building = nexacro.floor(dec_amBuilding / (rt_division == 0 ? 1 : rt_division));

        			// 이전화면에서 넘어온 값이 비과세가 아니라면.
        			if(this.dsSearch.getColumn(0, "YN_TAX") != "N")
        			{
        				am_vat = nexacro.floor(dec_amVat / (rt_division == 0 ? 1 : rt_division));
        			}

        			am_selling = am_land + am_building + am_vat;

        			var mod = nexacro.toNumber(this.dsListSub.getColumn(rightRow, "AM_AMOUNT"), 0) - am_selling;

        			if(dec_amVat == 0)
        			{
        				switch(mod)
        				{
        					case 1 : am_building++; break;
        					case 2 : am_building++; am_land++; break;
        				}
        			}
        			else
        			{
        				switch(mod)
        				{
        					case 1 : am_vat++; break;
        					case 2 : am_vat++; am_building++; break;
        					case 3 : am_vat++; am_building++; am_land++; break;
        				}
        			}
        		}
        		else
        		{
        			var gap_land = 0;
        			var gap_building = 0;
        			var gap_vat = 0;
        			for(var i = 0; i < this.dsListSub.rowcount; i++)
        			{
        				am_totalLand += Math.abs(this.dsListSub.getColumn(i, "AM_LAND"));
        				am_totalBuilding += Math.abs(this.dsListSub.getColumn(i, "AM_BUILDING"));
        				am_totalVat += Math.abs(this.dsListSub.getColumn(i, "AM_VAT"));
        			}

        			gap_land = dec_amLand - am_totalLand;
        			gap_building = dec_amBuilding - am_totalBuilding;
        			gap_vat = dec_amVat - am_totalVat;

        			am_land += gap_land;
        			am_building += gap_building;
        			am_vat += gap_vat;
        		}

        		 am_Selling = am_land + am_building + am_vat;
        		 this.dsListSub.set_enableevent(false);
        		 this.dsListSub.setColumn(rightRow, "AM_LAND", am_land);
        		 this.dsListSub.setColumn(rightRow, "AM_BUILDING", am_building);
        		 this.dsListSub.setColumn(rightRow, "AM_VAT", am_vat);
        		 this.dsListSub.setColumn(rightRow, "AM_SELLING", am_Selling);
        		 this.dsListSub.set_enableevent(true);
        	}
        }

        this.fnConform = function()
        {
        	if (!this.gfnGridIsRow(this.dxGrid))
        	{
        		this.gfnAlert("데이터를 선택해주세요.");
        		return false;
        	}

        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.NO_SIZE = this.dsSearch.getColumn(0, "NO_SIZE");
        	param.TY_TYPE = this.dsSearch.getColumn(0, "TY_TYPE");
        	param.GUN = this.dsList.getColumn(this.dsList.rowposition, "TY_DISTRICT");
        	param.OPTION = this.dsList.getColumn(this.dsList.rowposition, "RT_OPTION");
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRA_DLGSIZEDIVCOPY", "", param);
        }

        this.fnAppoint = function()
        {
        	if (!this.gfnGridIsRow(this.dxGrid))
        	{
        		this.gfnAlert("데이터를 선택해주세요.");
        		return false;
        	}

        	var param = {};
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        	param.NO_SIZE = this.dsSearch.getColumn(0, "NO_SIZE");
        	param.TY_TYPE = this.dsSearch.getColumn(0, "TY_TYPE");
        	param.TY_DISTRICT = this.dsList.getColumn(this.dsList.rowposition, "TY_DISTRICT");
        	param.RT_OPTION = this.dsList.getColumn(this.dsList.rowposition, "RT_OPTION");
        	param.YN_TAX = this.dsSearch.getColumn(0, "YN_TAX");
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRA_ASSIGNHOUSE", "", param);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsListSub.addEventHandler("onvaluechanged",this.dsListSub_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DRA_DLGGUNOPTION.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
