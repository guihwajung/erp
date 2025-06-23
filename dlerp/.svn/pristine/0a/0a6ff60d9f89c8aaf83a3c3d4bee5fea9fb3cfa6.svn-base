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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select_single</Col><Col id=\"SP\">DLBPR_JEONGSAN_DEPOSIT_INFO_DETAIL</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DLBPR_AGREEMENT_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DLBPR_AGREEMENT_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DLBPR_AGREEMENT_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DLBPR_AGREEMENT_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"AM_LAND\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSingle", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_LEASE_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_LEASE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"AM_BUNYANGPLAN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_BUNYANGGET\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_KASU\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_LEASE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_APPROLEASE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CK_LAW\" type=\"INT\" size=\"256\"/><Column id=\"CK_REMARK\" type=\"INT\" size=\"256\"/><Column id=\"YN_VACNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"NO_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BANK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("사업지코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_ACNTUNIT","staCD_ACNTUNIT:0.0","10.0","110","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            obj.set_textAlign("left");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_ACNTUNIT","ctxtCD_ACNTUNIT:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            obj.set_textAlign("left");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_DONG","ctxtDS_ACNTUNIT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("동층호");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_DONG","staNO_DONG:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_FLOOR","ctxtNO_DONG:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_maxlength("2");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_HO","ctxtNO_FLOOR:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_maxlength("3");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","100%","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("계약자정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTRACTOR","10","staTitle:5","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_CONTRACTOR","staDS_CONTRACTOR:-1","staTitle:5","250","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_BUNYANGPLAN","staBgDS_CONTRACTOR:-1","staTitle:5","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("약정보증금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_BUNYANGPLAN","staAM_BUNYANGPLAN:-1","staTitle:5","250","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_LEASE","10","staDS_CONTRACTOR:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("계약기간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDT_LEASE","staDT_LEASE:-1","staBgDS_CONTRACTOR:-1","250","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_BUNYANGGET","staBgDT_LEASE:-1","staAM_BUNYANGPLAN:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("수납보증금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_BUNYANGGET","staAM_BUNYANGGET:-1","staBgAM_BUNYANGPLAN:-1","250","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_LEASE","10","staDT_LEASE:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("월임대료");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_LEASE","staAM_LEASE:-1","staBgDT_LEASE:-1","250","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_KASU","staBgAM_LEASE:-1","staAM_BUNYANGGET:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("예수금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_KASU","staAM_KASU:-1","staBgAM_BUNYANGGET:-1","250","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitleBottom","0","staBgAM_KASU:5","100%","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("분양전환금 관리");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","staTitleBottom:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_CONTRACTOR","staDS_CONTRACTOR:5","staTitle:10","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_BUNYANGPLAN","staAM_BUNYANGPLAN:5","staTitle:10","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_value("");
            obj.set_format("#,#0");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_LEASE_FR","staDT_LEASE:5","ctxtDS_CONTRACTOR:9","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_LEASE_range","ctclDT_LEASE_FR:10","ctxtDS_CONTRACTOR:9","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("~");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_LEASE_TO","staDT_LEASE_range:10","ctxtDS_CONTRACTOR:9","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_BUNYANGGET","staAM_BUNYANGGET:5","ctxtAM_BUNYANGPLAN:9","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_value("");
            obj.set_format("#,#0");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_LEASE","staAM_LEASE:5","ctclDT_LEASE_FR:9","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_value("");
            obj.set_format("#,#0");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtAM_KASU","staAM_KASU:5","ctxtAM_BUNYANGGET:9","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_value("");
            obj.set_format("#,#0");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);
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

            obj = new BindItem("item2","divSearch.form.ctxtNO_DONG","value","dsSearch","NO_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctxtNO_FLOOR","value","dsSearch","NO_FLOOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctxtNO_HO","value","dsSearch","NO_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.ctxtDS_CONTRACTOR","value","dsSearch","DS_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.ctxtAM_BUNYANGPLAN","value","dsListSingle","AM_BUNYANGPLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.ctclDT_LEASE_FR","value","dsListSingle","DT_LEASE_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.ctclDT_LEASE_TO","value","dsListSingle","DT_LEASE_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.ctxtAM_BUNYANGGET","value","dsListSingle","AM_BUNYANGGET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.ctxtAM_LEASE","value","dsListSingle","AM_LEASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.ctxtAM_KASU","value","dsListSingle","AM_KASU");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DLB_TRANSAGREEMENT.xfdl", function() {
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
        	this.dsSearch.setColumn(0, "NO_DONG", this.getOwnerFrame().DONG);
        	this.dsSearch.setColumn(0, "NO_FLOOR", this.getOwnerFrame().FLOOR);
        	this.dsSearch.setColumn(0, "NO_HO", this.getOwnerFrame().HO);
        	this.dsSearch.setColumn(0, "DS_CONTRACTOR", this.getOwnerFrame().CONTRACTOR);
        	this.dsSearch.setColumn(0, "AM_LAND", this.getOwnerFrame().AM_LAND);

        	this.FormBtns.Select.click();
        };

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

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DL", "DLB_TRANSAGREEMENT");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("NO_CHASU", "string");
        	this.dsSelect.addColumn("NO_DONG", "string");
        	this.dsSelect.addColumn("NO_FLOOR", "string");
        	this.dsSelect.addColumn("NO_HO", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_ACNTUNIT", "string");
        	this.dsInsert.addColumn("TY_GUBUN", "string");
        	this.dsInsert.addColumn("NO_CHASU", "string");
        	this.dsInsert.addColumn("NO_DONG", "string");
        	this.dsInsert.addColumn("NO_FLOOR", "string");
        	this.dsInsert.addColumn("NO_HO", "string");
        	this.dsInsert.addColumn("TY_NAPIP", "string");
        	this.dsInsert.addColumn("NO_NAPCHA", "string");
        	this.dsInsert.addColumn("DT_STARTAGREE", "string");
        	this.dsInsert.addColumn("DT_ENDAGREE", "string");
        	this.dsInsert.addColumn("AM_LAND", "bigdecimal");
        	this.dsInsert.addColumn("AM_BUILDING", "bigdecimal");
        	this.dsInsert.addColumn("AM_VAT", "bigdecimal");
        	this.dsInsert.addColumn("AM_SELLING", "bigdecimal");
        	this.dsInsert.addColumn("ID_INSERT", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_ACNTUNIT", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("NO_CHASU", "string");
        	this.dsUpdate.addColumn("NO_DONG", "string");
        	this.dsUpdate.addColumn("NO_FLOOR", "string");
        	this.dsUpdate.addColumn("NO_HO", "string");
        	this.dsUpdate.addColumn("TY_NAPIP", "string");
        	this.dsUpdate.addColumn("NO_NAPCHA", "string");
        	this.dsUpdate.addColumn("DT_STARTAGREE", "string");
        	this.dsUpdate.addColumn("DT_ENDAGREE", "string");
        	this.dsUpdate.addColumn("AM_LAND", "bigdecimal");
        	this.dsUpdate.addColumn("AM_BUILDING", "bigdecimal");
        	this.dsUpdate.addColumn("AM_VAT", "bigdecimal");
        	this.dsUpdate.addColumn("AM_SELLING", "bigdecimal");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_ACNTUNIT", "string");
        	this.dsDelete.addColumn("TY_GUBUN", "string");
        	this.dsDelete.addColumn("NO_CHASU", "string");
        	this.dsDelete.addColumn("NO_DONG", "string");
        	this.dsDelete.addColumn("NO_FLOOR", "string");
        	this.dsDelete.addColumn("NO_HO", "string");
        	this.dsDelete.addColumn("TY_NAPIP", "string");
        	this.dsDelete.addColumn("NO_NAPCHA", "string");
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

        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        	this.dsSelect.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelect.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect select_single=dsSelect";
        	var outData     = "dsList=select0 dsListSingle=select_single0";
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
        	this.dsList.setColumn(nrow, "NO_NAPIP", "X"); // 분양전환잔금
        	this.dsList.setColumn(nrow, "AM_LAND", 0);
        	this.dsList.setColumn(nrow, "AM_BUILDING", this.gfnNvl(this.dsSearch.getColumn(0, "AM_LAND"),0));
        	this.dsList.setColumn(nrow, "AM_VAT", 0);
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
        	// 그리드 필수항목 체크
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
        				this.dsInsert.setColumn(nrow, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        				this.dsInsert.setColumn(nrow, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        				this.dsInsert.setColumn(nrow, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        				this.dsInsert.setColumn(nrow, "TY_NAPIP", this.dsList.getColumn(i, "TY_NAPIP"));
        				this.dsInsert.setColumn(nrow, "NO_NAPCHA", this.dsList.getColumn(i, "NO_NAPCHA"));
        				this.dsInsert.setColumn(nrow, "DT_STARTAGREE", this.dsList.getColumn(i, "DT_STARTAGREE"));
        				this.dsInsert.setColumn(nrow, "DT_ENDAGREE", this.dsList.getColumn(i, "DT_ENDAGREE"));
        				this.dsInsert.setColumn(nrow, "AM_LAND", this.dsList.getColumn(i, "AM_LAND"));
        				this.dsInsert.setColumn(nrow, "AM_BUILDING", this.dsList.getColumn(i, "AM_BUILDING"));
        				this.dsInsert.setColumn(nrow, "AM_VAT", this.dsList.getColumn(i, "AM_VAT"));
        				this.dsInsert.setColumn(nrow, "AM_SELLING", this.dsList.getColumn(i, "AM_SELLING"));
        				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        				this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        				this.dsUpdate.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        				this.dsUpdate.setColumn(nrow, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        				this.dsUpdate.setColumn(nrow, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        				this.dsUpdate.setColumn(nrow, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        				// 금성백조 소스에서 아래 부분은 전송하지 않음.
        // 				this.dsUpdate.setColumn(nrow, "TY_NAPIP", this.dsList.getColumn(i, "TY_NAPIP"));
        // 				this.dsUpdate.setColumn(nrow, "NO_NAPCHA", this.dsList.getColumn(i, "NO_NAPCHA"));
        // 				this.dsUpdate.setColumn(nrow, "DT_STARTAGREE", this.dsList.getColumn(i, "DT_STARTAGREE"));
        // 				this.dsUpdate.setColumn(nrow, "DT_ENDAGREE", this.dsList.getColumn(i, "DT_ENDAGREE"));
        // 				this.dsUpdate.setColumn(nrow, "AM_LAND", this.dsList.getColumn(i, "AM_LAND"));
        // 				this.dsUpdate.setColumn(nrow, "AM_BUILDING", this.dsList.getColumn(i, "AM_BUILDING"));
        // 				this.dsUpdate.setColumn(nrow, "AM_VAT", this.dsList.getColumn(i, "AM_VAT"));
        // 				this.dsUpdate.setColumn(nrow, "AM_SELLING", this.dsList.getColumn(i, "AM_SELLING"));
        // 				this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0,6));
        				this.dsDelete.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6,1));
        				this.dsDelete.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7,2));
        				this.dsDelete.setColumn(nrow, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        				this.dsDelete.setColumn(nrow, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        				this.dsDelete.setColumn(nrow, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        				this.dsDelete.setColumn(nrow, "TY_NAPIP", this.dsList.getColumn(i, "TY_NAPIP"));
        				this.dsDelete.setColumn(nrow, "NO_NAPCHA", this.dsList.getColumn(i, "NO_NAPCHA"));
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
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        	/*
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SYSTEM"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SYSTEM.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("시스템을 입력하세요.", "fnVaidateCallback");
        	}
        	*/
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

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

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
        		if(e.columnid == "AM_LAND" || e.columnid == "AM_BUILDING" || e.columnid == "AM_VAT")
        		{
        			var am_land = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_LAND"),0);
        			var am_build = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_BUILDING"),0);
        			var am_vat = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_VAT"),0);

        			this.dsList.setColumn(e.row, "AM_SELLING", am_land + am_build + am_vat);
        		}
        		else if(e.columnid == "NO_NAPCHA")
        		{
        			if(this.gfnNvl(e.newvalue,"").length == 1)
        			{
        				this.dsList.setColumn(e.row, "NO_NAPCHA", "0" + e.newvalue);
        			}
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
        };
        this.loadIncludeScript("DLB_TRANSAGREEMENT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
