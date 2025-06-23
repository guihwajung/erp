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
            this.set_titletext("동호정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBZPR_DONGHO_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DBZPR_DONGHO_INSERT</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DBZPR_DONGHO_DELETE</Col></Row><Row><Col id=\"TARGET\">apply</Col><Col id=\"SP\">DBZPR_DONGHOPUBLIC_INSERT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDongHo", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"AD_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"CT_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CUNG\" type=\"STRING\" size=\"256\"/><Column id=\"AD_CUNG\" type=\"STRING\" size=\"256\"/><Column id=\"CT_CUNG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HO\" type=\"STRING\" size=\"256\"/><Column id=\"AD_HO\" type=\"STRING\" size=\"256\"/><Column id=\"CT_HO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_DONG\"/><Col id=\"AD_DONG\"/><Col id=\"CT_DONG\"/><Col id=\"DS_CUNG\"/><Col id=\"AD_CUNG\"/><Col id=\"CT_CUNG\"/><Col id=\"DS_HO\"/><Col id=\"AD_HO\"/><Col id=\"CT_HO\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staMODULE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staMODULE:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFMAINSITE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","57%","0","5","100%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_text("동호정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","staTitle01:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Button("btnFileDownload",null,"2","120","24","4",null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("2");
            obj.set_text("엑셀자료올리기");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle02","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("동호정보생성");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btnDongHoCreate",null,"0","120","22","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("2");
            obj.set_text("동호생성");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staItem01","0","staTitle02:8","87","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("1");
            obj.set_text("시작동수");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBar01","staItem01:-1","30","90","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staItem02","staBar01:-1","30","87","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("3");
            obj.set_text("증가동수");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBar02","staItem02:-1","30","90","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staItem03","staBar02:-1","30","87","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("5");
            obj.set_text("생성동수");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBar03","staItem03:-1","30","90","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edtDS_DONG","staItem01:5","35","78","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("7");
            obj.set_inputtype("digit");
            obj.set_maxlength("4");
            obj.set_inputmode("upper");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edtAD_DONG","staItem02:5","35","78","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("8");
            obj.set_inputtype("digit");
            obj.set_maxlength("4");
            obj.set_inputmode("upper");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edtCT_DONG","staItem03:5","35","78","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("9");
            obj.set_inputtype("digit");
            obj.set_maxlength("4");
            obj.set_inputmode("upper");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staItem04","0","staItem01:-1","87","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("10");
            obj.set_text("시작층수");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBar04","staItem04:-1","staBar01:-1","90","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edtDS_CUNG","staItem04:5","staBar01:4","78","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("12");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_inputmode("upper");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staItem05","staBar04:-1","staItem02:-1","87","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("13");
            obj.set_text("증가층수");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBar05","staItem05:-1","staBar02:-1","90","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edtAD_CUNG","staItem05:5","staBar02:4","78","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("15");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_inputmode("upper");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staItem06","staBar05:-1","staItem03:-1","87","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("16");
            obj.set_text("생성층수");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBar06","staItem06:-1","staBar03:-1","90","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edtCT_CUNG","442","staBar03:4","78","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("18");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_inputmode("upper");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staItem07","0","staItem04:-1","87","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("19");
            obj.set_text("시작호수");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBar07","staItem07:-1","staBar04:-1","90","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edtDS_HO","staItem07:5","staBar04:4","78","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("21");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_inputmode("upper");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staItem08","staBar07:-1","staItem05:-1","87","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("22");
            obj.set_text("증가호수");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBar08","staItem08:-1","staBar05:-1","90","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edtAD_HO","staItem08:5","staBar05:4","78","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("24");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_inputmode("upper");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staItem09","staBar08:-1","88","87","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("25");
            obj.set_text("생성호수");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBar09","436","88","90","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("edtCT_HO","staItem09:5","staBar06:5","78","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("27");
            obj.set_inputtype("digit");
            obj.set_maxlength("2");
            obj.set_inputmode("upper");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staTitle03","0","staItem07:8","100.00%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("28");
            obj.set_text("공용정보생성");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btnDongHoPublicCreate",null,"staItem07:8","120","22","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("2");
            obj.set_text("공용부위생성");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBar99",null,"staTitle03:8","100.00%","22","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("26");
            obj.set_text("동호 정보를 생성, 저장하신 후에 공용부위를 생성 하세요.");
            obj.set_background("#ceddf7");
            obj.set_padding("0px 0px 0px 10px");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staBar98",null,"staBar99:0","100.00%","22","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("26");
            obj.set_text("주차장, 엘리베이터 등 공용부위 정보가 추가 됩니다.");
            obj.set_background("#ceddf7");
            obj.set_padding("0px 0px 0px 10px");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.divDataRight.form.edtDS_DONG","value","dsDongHo","DS_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divDataRight.form.edtAD_DONG","value","dsDongHo","AD_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divDataRight.form.edtCT_DONG","value","dsDongHo","CT_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataRight.form.edtDS_CUNG","value","dsDongHo","DS_CUNG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataRight.form.edtAD_CUNG","value","dsDongHo","AD_CUNG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataRight.form.edtCT_CUNG","value","dsDongHo","CT_CUNG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataRight.form.edtDS_HO","value","dsDongHo","DS_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataRight.form.edtAD_HO","value","dsDongHo","AD_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataRight.form.edtCT_HO","value","dsDongHo","CT_HO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DBZ_DONGHO.xfdl", function() {
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
        	this.fnBtnCtrl(false);

        	if( this.FormInfo.ID_GROUP == "6" || this.FormInfo.ID_GROUP == "C" ){
        		this.dsSearch.setColumn(0, "CD_SITE", this.AuthClient.CD_DEPT);
        		this.ccfCD_SITE.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);
        		this.ccfCD_SITE.form.set_readonly(true);

        		if(this.gfnIsNull(this.getOwnerFrame().CF_CD_SITE) ) {
        			this.FormBtns.Select.click();
        		}
        	}

        	if(!this.gfnIsNull(this.getOwnerFrame().CF_CD_SITE)) {
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CF_CD_SITE);
        		this.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().CF_DS_SITE);
        		this.FormBtns.Select.click();
        	}
        };

        /************************************************************************
        * 버튼 설정 : 화면(Tab) 전환시 마다 호출
        * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
        ************************************************************************/
        this.fnSetButton = function() {
        };

        /************************************************************************
        * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
        ************************************************************************/
        this.fnSetExtendButton = function() {
        };

        /************************************************************************
        * 변수 선언
        ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;

        	this.edtDS_DONG = this.divData.form.divDataRight.form.edtDS_DONG;
        	this.edtAD_DONG = this.divData.form.divDataRight.form.edtAD_DONG;
        	this.edtCT_DONG = this.divData.form.divDataRight.form.edtCT_DONG;

        	this.edtDS_CUNG = this.divData.form.divDataRight.form.edtDS_CUNG;
        	this.edtAD_CUNG = this.divData.form.divDataRight.form.edtAD_CUNG;
        	this.edtCT_CUNG = this.divData.form.divDataRight.form.edtCT_CUNG;

        	this.edtDS_HO = this.divData.form.divDataRight.form.edtDS_HO;
        	this.edtAD_HO = this.divData.form.divDataRight.form.edtAD_HO;
        	this.edtCT_HO = this.divData.form.divDataRight.form.edtCT_HO;
        };

        /************************************************************************
        * 이벤트 설정
        ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DB", "DBZ_DONGHO");
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);

        	this.edtDS_DONG.clearEventHandler( "onkeydown" );
        	this.edtAD_DONG.clearEventHandler( "onkeydown" );
        	this.edtCT_DONG.clearEventHandler( "onkeydown" );
        	this.edtDS_CUNG.clearEventHandler( "onkeydown" );
        	this.edtAD_CUNG.clearEventHandler( "onkeydown" );
        	this.edtCT_CUNG.clearEventHandler( "onkeydown" );
        	this.edtDS_HO.clearEventHandler( "onkeydown" );
        	this.edtAD_HO.clearEventHandler( "onkeydown" );
        	this.edtCT_HO.clearEventHandler( "onkeydown" );
        };

        /************************************************************************
        * 파라미터 설정
        ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_SITE", "string");
        	this.dsInsert.addColumn("DS_DONG", "string");
        	this.dsInsert.addColumn("DS_CUNG", "string");
        	this.dsInsert.addColumn("DS_HO", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_SITE", "string");
        	this.dsDelete.addColumn("DS_DONG", "string");
        	this.dsDelete.addColumn("DS_CUNG", "string");
        	this.dsDelete.addColumn("DS_HO", "string");

        	this.dsApply = new Dataset();
        	this.dsApply.addColumn("CD_SITE", "string");
        };

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
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0,"CD_SITE"));

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

        };

        /*
        *	저장 버튼
        */
        this.fnSave = function() {

        	this.dsInsert.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        		case "I":
        			var nrow = this.dsInsert.addRow();
        			this.dsInsert.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0,"CD_SITE"));
        			this.dsInsert.setColumn(nrow, "DS_DONG", this.dsList.getColumn(i, "DS_DONG"));
        			this.dsInsert.setColumn(nrow, "DS_CUNG", this.dsList.getColumn(i, "DS_CUNG"));
        			this.dsInsert.setColumn(nrow, "DS_HO", this.dsList.getColumn(i, "DS_HO"));
        			break;
        		case "D":
        			var nrow = this.dsDelete.addRow();
        			this.dsDelete.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0,"CD_SITE"));
        			this.dsDelete.setColumn(nrow, "DS_DONG", this.dsList.getColumn(i, "DS_DONG"));
        			this.dsDelete.setColumn(nrow, "DS_CUNG", this.dsList.getColumn(i, "DS_CUNG"));
        			this.dsDelete.setColumn(nrow, "DS_HO", this.dsList.getColumn(i, "DS_HO"));
        			break;
        		}
        	}
        	if (this.dsInsert.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert delete=dsDelete";
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
        /*
        *	입력 버튼
        */
        this.fnAdd = function() {
        	this.gfnGridAdd(this.dxGrid);
        };
        /*
        *	삭제 버튼
        */
        this.fnDel = function() {
        	if( !this.gfnGridIsRow(this.dxGrid) ) return;
        	this.gfnGridDel(this.dxGrid);
        	// 	var aDSRowidx = this.dxGrid.getSelectedDatasetRows();//
        	// 	var strMsg = "";
        	// 	for ( var idx in aDSRowidx ){
        	// 		if( this.dsList.getColumn(aDSRowidx[idx],"TY_WORK") == "DL" ){
        	// 			this.dsList.setColumn(aDSRowidx[idx], this.ucFlag, "");
        	// 			strMsg += " - 동 : "+ this.dsList.getColumn(aDSRowidx[idx],"DS_DONG")+" , 호 : "+ this.dsList.getColumn(aDSRowidx[idx],"DS_HO") +"\n";
        	// 		}
        	// 	}//
        	// 	if ( strMsg != "" ){
        	// 		this.gfnAlert("단지생성시 등록된 정보는 삭제할 수 없습니다.\n"+strMsg.substr(0,strMsg.length-1));
        	// 	}
        };
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
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드는 반드시 입력하셔야 합니다.", "fnVaidateCallback"); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        	}
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
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return false;
        	}

        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        		if(this.dsList.rowcount > 0){
        			this.fnBtnCtrl(true);
        		}else {
        			this.fnBtnCtrl(false);
        		}
        	}else if(svcID == "save") {
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
        * 코드파인드 변경전
        */
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_SITE") {
        		dsUserParam.setColumn(nrow, "CD_GROUP", this.AuthClient.CD_DEPT);
        	}
        	return true;
        };

        /*
        * 코드파인드 변경후
        */
        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if (id == "ccfCD_SITE") {
        		var arr = codeFindData;
        		if(arr.length > 0) {
        		}
        	}
        };

        /************************************************************************
        * 그리드 이벤트
        ************************************************************************/

        /************************************************************************
        * 확장버튼 이벤트
        ************************************************************************/
        /*
        * 동호 생성 버튼 클릭
        */
        this.fnCreateDongHo = function(){
        	// 화면(Form) Status 설정 => 조회 : Q , 0건 : X
        	var status = this.gfnGetFormStatus(this);
        	if( status == "I" || status == "U" || status == "D" ) {
        		this.gfnAlert("추가/수정/삭제인 행을 저장한 후 생성하세요.");
        		return false;
        	} else if( status != "Q" && status != "X") {
        		this.gfnAlert("조회후 동호 생성 가능합니다.");
        		return false;
        	}

        	// 필수 입력 요소 체크
        	if( this.gfnIsNull(this.dsDongHo.getColumn(0, "DS_DONG")) || this.gfnIsNull(this.dsDongHo.getColumn(0, "AD_DONG")) || this.gfnIsNull(this.dsDongHo.getColumn(0, "CT_DONG")) ||
        	    this.gfnIsNull(this.dsDongHo.getColumn(0, "DS_CUNG")) || this.gfnIsNull(this.dsDongHo.getColumn(0, "AD_CUNG")) || this.gfnIsNull(this.dsDongHo.getColumn(0, "CT_CUNG")) ||
        	    this.gfnIsNull(this.dsDongHo.getColumn(0, "DS_HO")) || this.gfnIsNull(this.dsDongHo.getColumn(0, "AD_HO")) || this.gfnIsNull(this.dsDongHo.getColumn(0, "CT_HO")) )	{

        		this.gfnAlert("동호 생성을 위한 필수 입력 요소가 없습니다. 확인해주세요!");
        		this.edtDS_DONG.setFocus();
        		return false;
        	}

        	var intAdDong = nexacro.toNumber(this.dsDongHo.getColumn(0, "AD_DONG"));
        	var	intAdCung = nexacro.toNumber(this.dsDongHo.getColumn(0, "AD_CUNG"));
        	var intAdHo = nexacro.toNumber(this.dsDongHo.getColumn(0, "AD_HO"));

        	var rsCnt  = nexacro.toNumber(this.dsDongHo.getColumn(0, "CT_DONG"),0) * nexacro.toNumber(this.dsDongHo.getColumn(0, "CT_CUNG"),0) * nexacro.toNumber(this.dsDongHo.getColumn(0, "CT_HO"),0);

        	if (rsCnt > 0) {
        		this.dsList.set_enableevent(false);

        		this.gfnGridClear(this.dxGrid);

        		// 동 정보 초기화
        		var strDsDong = this.dsDongHo.getColumn(0, "DS_DONG").padLeft(4, '0');
        		for (var d = 1; d <= nexacro.toNumber(this.dsDongHo.getColumn(0, "CT_DONG"),0); d++) {  //동
        			// 층 정보 초기화
        			var strDsCung = this.dsDongHo.getColumn(0, "CT_CUNG").padLeft(2, '0');

        			for (var c = 1; c <= nexacro.toNumber(this.dsDongHo.getColumn(0, "CT_CUNG"),0); c++) {  //층
        				// 호 정보 초기화
        				var strDsHo = this.dsDongHo.getColumn(0, "DS_HO").padLeft(2, '0');

        				for (var h = 1; h <= nexacro.toNumber(this.dsDongHo.getColumn(0, "CT_HO"),0); h++) { // 호
        					var nRow = this.dsList.addRow();
        					this.dsList.setColumn(nRow,this.ucFlag,"I");
        					this.dsList.setColumn(nRow,"DS_DONG",strDsDong);
        					this.dsList.setColumn(nRow,"DS_HO",strDsCung+strDsHo);
        					this.dsList.setColumn(nRow,"TY_WORK","DB");
        					strDsHo = (nexacro.toNumber(strDsHo,0) + intAdHo).toString().padLeft(2, '0');
        				}

        				strDsCung = (nexacro.toNumber(strDsCung,0) + intAdCung).toString().padLeft(2, '0');
        			}

        			strDsDong = (nexacro.toNumber(strDsDong,0) + intAdDong).toString().padLeft(4, '0');

        		}
        		this.dsList.set_enableevent(true);
        		this.gfnSetFormStatus(this, "I");	// 폼상태 추가
        	}
        };

        /*
        * 공용부위생성 버튼 클릭
        */
        this.fnApplyDongHo = function (){
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		if( flag == "I"  || flag == "U" || flag == "D"){
        			this.gfnAlert("수정중인 데이터가 존재합니다.");
        			return false;
        		}
        	}
        	this.dxGrid.updateToDataset();
        	this.dsApply.clearData();
        	var nrow = this.dsApply.addRow();
        	this.dsApply.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0,"CD_SITE"));

        	var strSvcId    = "apply";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "apply=dsApply";
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

        // 엑셀업로드버튼
        this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet) {

        	for (var i = 0; i < this.dsList.getColCount(); ++i)
        	{
        		sColumnId = "Column" + i;
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
        	for (var i = 0; i < dsOut.rowcount; ++i) {
        		var nrow = this.dsList.addRow();
        		this.dsList.setColumn(nrow, this.ucFlag, "I");

        		// 양식이 일치하는 경우 copyRow
        		this.dsList.copyRow(nrow, dsOut, i);
        	}
        	this.dsList.set_enableevent(true);
        	this.gfnSetFormStatus(this, "I");
        };

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

        //동호생성 버튼
        this.divData_divDataBottom_btnDongHoCreate_onclick = function(obj,e)
        {
        	this.fnCreateDongHo();
        };

        //공용부위생성
        this.divData_divDataBottom_btnDongHoPublicCreate_onclick = function(obj,e)
        {
        	this.fnApplyDongHo();
        };

        //엑셀 업로드 버튼
        this.divData_divDataBottom_btnFileDownload_onclick = function(obj,e)
        {
        	this.gfnExcelImport("dsList", "Sheet1", "A2", "fnExcelImportCallback", "import", this);
        };

        //확장버튼컨트롤
        this.fnBtnCtrl = function(val){
        	this.divData.form.divDataLeft.form.btnFileDownload.set_enable(val);
        	this.divData.form.divDataRight.form.btnDongHoCreate.set_enable(val);
        	this.divData.form.divDataRight.form.btnDongHoPublicCreate.set_enable(val);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataLeft.form.btnFileDownload.addEventHandler("onclick",this.divData_divDataBottom_btnFileDownload_onclick,this);
            this.divData.form.divDataRight.form.btnDongHoCreate.addEventHandler("onclick",this.divData_divDataBottom_btnDongHoCreate_onclick,this);
            this.divData.form.divDataRight.form.btnDongHoPublicCreate.addEventHandler("onclick",this.divData_divDataBottom_btnDongHoPublicCreate_onclick,this);
        };
        this.loadIncludeScript("DBZ_DONGHO.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
