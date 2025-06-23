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
            this.set_titletext("자산이동(일괄)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHNPR_ASSETMOVEMULTI_STATE</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHNPR_ASSETMOVE_INSERT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACASSET\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACASSET\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ASSETSEMOK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ASSETSEMOK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GETDEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GETDEPT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"CD_ACASSET\"/><Col id=\"CD_ASSETSEMOK\"/><Col id=\"CD_GETDEPT\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","staCD_CORP:10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_ACASSET","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("자산코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACASSET","staCD_ACASSET:0.0","staCD_ACASSET:10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFASSETINFO");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_ASSETSEMOK","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("자산세목");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ASSETSEMOK","staCD_ASSETSEMOK:0.0","staCD_ASSETSEMOK:10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFASSETSEMOK");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_GETDEPT","0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("보유부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_GETDEPT","staCD_GETDEPT:0.0","staCD_GETDEPT:10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","-5","1260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("전출자산내역");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE00","0","285","1260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("자산이동");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","staTITLE:5",null,"250","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid2","0","381",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_GET","0","321","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("전입일자");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDT_GET","staDT_GET:-1","staDT_GET:-27","400","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_FRDEPT","staBgDT_GET:-1","staBgDT_GET:-27","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("전입부서");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_FRDEPT","staCD_FRDEPT:-1","staCD_FRDEPT:-27","400","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_MAINMAG","staDT_GET:-110","staDT_GET:-1","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("관리자(정)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgID_MAINMAG","staID_MAINMAG:-1","staID_MAINMAG:-27","400","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SUBMAG","staBgID_MAINMAG:-1","staBgID_MAINMAG:-27","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("관리자(부)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgID_SUBMAG","staID_SUBMAG:-1","staID_SUBMAG:-27","400","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnMove","staBgCD_FRDEPT:5","staBgCD_FRDEPT:-27","120","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("선택전출");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","btnMove:5","btnMove:-27","120","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("선택취소");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnMoveAll","staBgID_SUBMAG:5","staBgID_SUBMAG:-27","120","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("전체전출");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancelAll","btnMoveAll:5","btnMoveAll:-27","120","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("전체취소");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_GET","staDT_GET:5","staDT_GET:-23","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_FRDEPT","staCD_FRDEPT:5","staCD_FRDEPT:-23","300","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("17");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfID_MAINMAG","staID_MAINMAG:5","staID_MAINMAG:-23","300","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DHX_CFIDSABUN");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("18");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfID_SUBMAG","staID_SUBMAG:5","staID_SUBMAG:-23","300","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DHX_CFIDSABUN");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("19");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_ACASSET.form.CDTextBox","value","dsSearch","CD_ACASSET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_ASSETSEMOK.form.CDTextBox","value","dsSearch","CD_ASSETSEMOK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_GETDEPT.form.CDTextBox","value","dsSearch","CD_GETDEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_ACASSET.form.DSTextBox","value","dsSearch","DS_ACASSET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_ASSETSEMOK.form.DSTextBox","value","dsSearch","DS_ASSETSEMOK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfCD_GETDEPT.form.DSTextBox","value","dsSearch","DS_GETDEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHN_ASSETMOVEMULTI.xfdl", function() {
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
        	this.btnAssetMoveAll  = this.gfnFormButtonAdd("AssetMoveAll", "fnAssetMoveAll"); 	// 자산이동
        	this.btnViewAssetInfo = this.gfnFormButtonAdd("ViewAssetInfo", "fnViewAssetInfo"); 	// 자산정보

        	this.btnAssetMoveAll.set_enable(false);
        	this.btnViewAssetInfo.set_enable(false);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ccfCD_CORP       = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_ACASSET    = this.divSearch.form.ccfCD_ACASSET;
        	this.ccfCD_ASSETSEMOK = this.divSearch.form.ccfCD_ASSETSEMOK;
        	this.ccfCD_GETDEPT    = this.divSearch.form.ccfCD_GETDEPT;

        	this.calDT_GET        = this.divData.form.calDT_GET;
        	this.cfCD_FRDEPT      = this.divData.form.cfCD_FRDEPT;
        	this.cfID_MAINMAG     = this.divData.form.cfID_MAINMAG;
        	this.cfID_SUBMAG      = this.divData.form.cfID_SUBMAG;

        	this.btnMove          = this.divData.form.btnMove;
        	this.btnMoveAll       = this.divData.form.btnMoveAll;
        	this.btnCancel        = this.divData.form.btnCancel;
        	this.btnCancelAll     = this.divData.form.btnCancelAll;

        	this.dxGrid  = this.divData.form.objGrid;
        	this.dxGrid2 = this.divData.form.objGrid2;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	//법인코드
        	this.ccfCD_CORP.BeforeUserDataSetParam       = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged           = "fnAfterCDTextChanged";

        	//자산코드
        	this.ccfCD_ACASSET.BeforeUserDataSetParam    = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACASSET.AfterCDTextChanged        = "fnAfterCDTextChanged";

        	//자산세목
        	this.ccfCD_ASSETSEMOK.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ASSETSEMOK.AfterCDTextChanged     = "fnAfterCDTextChanged";

        	//보유부서
        	this.ccfCD_GETDEPT.BeforeUserDataSetParam    = "fnBeforeUserDataSetParam";
        	this.ccfCD_GETDEPT.AfterCDTextChanged        = "fnAfterCDTextChanged";

        	//전입부서
        	this.cfCD_FRDEPT.BeforeUserDataSetParam      = "fnBeforeUserDataSetParam";
        	this.cfCD_FRDEPT.AfterCDTextChanged          = "fnAfterCDTextChanged";

        	//관리자(정)
        	this.cfID_MAINMAG.BeforeUserDataSetParam     = "fnBeforeUserDataSetParam";
        	this.cfID_MAINMAG.AfterCDTextChanged         = "fnAfterCDTextChanged";

        	//관리자(부)
        	this.cfID_SUBMAG.BeforeUserDataSetParam      = "fnBeforeUserDataSetParam";
        	this.cfID_SUBMAG.AfterCDTextChanged          = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid , this.dsList , "DH", "DHN_ASSETMOVEMULTI");
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DH", "DHN_ASSETMOVEMULTI_1");

        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);

        	this.btnMove.set_enable(false);
        	this.btnMoveAll.set_enable(false);
        	this.btnCancel.set_enable(false);
        	this.btnCancelAll.set_enable(false);
        };

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	var cdCorp    = this.dsSearch.getColumn(0, "CD_CORP");
        	var cdAcasset = this.dsSearch.getColumn(0, "CD_ACASSET");

        	if(id == "ccfCD_ACASSET" || id == "ccfCD_ASSETSEMOK" || id == "ccfCD_GETDEPT" || id == "cfCD_FRDEPT" || id == "cfID_MAINMAG" || id == "cfID_SUBMAG") {
        		if(this.gfnIsNull(cdCorp)) {
        			this.gfnAlert("법인코드를 먼저 입력하세요.");
        			return false;
        		}
        	}

        	//법인코드
        	if(id == "ccfCD_CORP") {
        		//dsUserParam.setColumn(nrow, "LEVLV_DEPT_ACNT", this.UserInfo.LEVLV_DEPT_ACNT);
        		//dsUserParam.setColumn(nrow, "LEVCD_DEPT_ACNT", this.UserInfo.LEVCD_DEPT_ACNT);
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}

        	//자산코드
        	if(id == "ccfCD_ACASSET") {
        		dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        		dsUserParam.setColumn(nrow, "YN_CORP", "Y");
        	}

        	//자산세목
        	if(id == "ccfCD_ASSETSEMOK") {
        		if(this.gfnIsNull(cdAcasset)) {
        			this.gfnAlert("자산코드를 먼저 입력하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_ACASSET"   , cdAcasset);
        		dsUserParam.setColumn(nrow, "CD_CORP"      , cdCorp);
        	}

        	//보유부서 //전입부서
        	if(id == "ccfCD_GETDEPT" || id == "cfCD_FRDEPT") {
        		if(this.gfnIsNull(cdCorp)){
        			this.gfnAlert("법인코드를 선택하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");						//전표발행여부
        		dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);					//법인코드
        		dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        		dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "GR_SEARCH"     , this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);
        	}

        	//관리자
        	if(id == "cfID_MAINMAG" || id == "cfID_SUBMAG") {
        		dsUserParam.setColumn(nrow, "YN_OFFICER"   , "N");
        		dsUserParam.setColumn(nrow, "CD_CORP"      , cdCorp);
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	var arrData = codeFindData;

        	switch(id) {
        		case "ccfCD_CORP":	//법인코드
        			this.ccfCD_ACASSET.form.fnCodeFindClear();
        			this.ccfCD_ASSETSEMOK.form.fnCodeFindClear();
        			this.ccfCD_GETDEPT.form.fnCodeFindClear();
        		break;
        		case "ccfCD_ACASSET":	//자산코드
        			this.ccfCD_ASSETSEMOK.form.fnCodeFindClear();
        			this.ccfCD_GETDEPT.form.fnCodeFindClear();
        		break;
        		case "ccfCD_ASSETSEMOK":	//자산세목
        			this.ccfCD_GETDEPT.form.fnCodeFindClear();
        		break;
        	}
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP"      , "string");
        	this.dsSelect.addColumn("CD_ACASSET"   , "string");
        	this.dsSelect.addColumn("CD_ASSETSEMOK", "string");
        	this.dsSelect.addColumn("CD_GETDEPT"   , "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_ASSET"     , "string");
        	this.dsInsert.addColumn("NO_SEQ"       , "int");
        	this.dsInsert.addColumn("DT_FRTAKE"    , "string");
        	this.dsInsert.addColumn("CD_FRDEPT"    , "string");
        	this.dsInsert.addColumn("AM_GETNATION" , "bigdecimal");
        	this.dsInsert.addColumn("YN_GET"       , "string");
        	this.dsInsert.addColumn("ID_TRANS"     , "string");
        	this.dsInsert.addColumn("NO_DOC"       , "string");
        	this.dsInsert.addColumn("ID_MAINMAG"   , "string");
        	this.dsInsert.addColumn("ID_SUBMAG"    , "string");
        	this.dsInsert.addColumn("TY_FRDEPT"    , "string");
        	this.dsInsert.addColumn("YN_MULTI"     , "string");
        	this.dsInsert.addColumn("CD_ACASSET"   , "string");
        	this.dsInsert.addColumn("CD_CORP"      , "string");
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
        	this.gfnGridBeforeSelect(this.dxGrid2);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP"      , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "CD_ACASSET"   , this.dsSearch.getColumn(0, "CD_ACASSET"));
        	this.dsSelect.setColumn(0, "CD_ASSETSEMOK", this.dsSearch.getColumn(0, "CD_ASSETSEMOK"));
        	this.dsSelect.setColumn(0, "CD_GETDEPT"   , this.dsSearch.getColumn(0, "CD_GETDEPT"));

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
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        		this.gfnAlert("법인코드를 입력하지 않았습니다.");
        		return false;
        	}

        	return true;
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
        		this.gfnGridAfterSelect(this.dxGrid2);

        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Save.set_enable(false);
        		this.FormBtns.Del.set_enable(false);

        		// 자산이동 그리드 초기화
        		this.gfnGridClear(this.dxGrid2);
        	}

        	if (svcID == "save") {

        		// 자산이동 그리드 초기화
        		this.gfnGridClear(this.dxGrid2);
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
        this.dsSearch_onvaluechanged = function(obj,e) {

        	if(e.oldvalue != e.newvalue) {

        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGrid2);
        		this.clearDivData();
           }
        }

        this.btnOnclick = function(obj,e) {

        	var rows, nrow, i = 0;

        	switch(obj.id) {

        		case "btnMove" :

        			rows = this.dxGrid.getSelectedDatasetRows();

        			if(rows.length > 0) {
        				for(i = (rows.length - 1); i >= 0; i--) {
        					nrow = this.dsList2.addRow();
        					this.moveRow(rows[i], nrow);
        				}
        			}

        			break;

        		case "btnMoveAll" :

        			rows = this.dxGrid.rowcount;

        			if(rows > 0) {

        				for(i = (rows - 1); i >= 0; i--) {
        					nrow = this.dsList2.addRow();
        					this.moveRow(i, nrow);
        				}
        			}

        			break;

        		case "btnCancel" :

        			rows = this.dxGrid2.getSelectedDatasetRows();

        			if(rows.length > 0) {
        				for(i = (rows.length - 1); i >= 0; i--) {
        					nrow = this.dsList.addRow();
        					this.cancelRow(rows[i], nrow);
        				}
        			}

        			break;

        		case "btnCancelAll" :

        			rows = this.dxGrid2.rowcount;

        			if(rows > 0) {

        				for(i = (rows - 1); i >= 0; i--) {
        					nrow = this.dsList.addRow();
        					this.cancelRow(i, nrow);
        				}
        			}

        			break;
        	}
         }

         this.moveRow = function(fromRow, toRow) {
        	this.dsList2.copyRow(toRow, this.dsList, fromRow);
        	this.dsList.deleteRow(fromRow);
         }

         this.cancelRow = function(fromRow, toRow) {
        	this.dsList.copyRow(toRow, this.dsList2, fromRow);
        	this.dsList2.deleteRow(fromRow);
         }

        this.gridCellDbClick = function(obj,e) {

        	switch(obj.ID_GRID) {
        		case "DHN_ASSETMOVEMULTI" :
        			var nrow = this.dsList2.addRow();
        			this.moveRow(e.row, nrow);
        			break;
        		case "DHN_ASSETMOVEMULTI_1" :
        			var nrow = this.dsList.addRow();
        			this.cancelRow(e.row, nrow);
        			break;
        	}
        };

        this.dsRowPosChanged = function(obj,e) {

        	if(this.dsList.rowcount == 0) {
        		this.btnMove.set_enable(false);
        		this.btnMoveAll.set_enable(false);
        		this.btnViewAssetInfo.set_enable(false);
        	} else {
        		this.btnMove.set_enable(true);
        		this.btnMoveAll.set_enable(true);
        		this.btnViewAssetInfo.set_enable(true);
        	}

        	if(this.dsList2.rowcount == 0) {
        		this.btnCancel.set_enable(false);
        		this.btnCancelAll.set_enable(false);
        		this.btnAssetMoveAll.set_enable(false);
        	} else {
        		this.btnCancel.set_enable(true);
        		this.btnCancelAll.set_enable(true);
        		this.btnAssetMoveAll.set_enable(true);
        	}
        }

        this.fnAssetMoveAll = function() {

        	if (this.gfnIsNull(this.calDT_GET.value)) {
        		this.gfnAlert("전입일자를 입력하지 않았습니다.");
        		return false;
        	}

        	if (this.gfnIsNull(this.cfCD_FRDEPT.form.CDTextBox.value)) {
        		this.gfnAlert("전입부서를 입력하지 않았습니다.");
        		return false;
        	}

        	if(this.dxGrid2.rowcount == 0) {
        		this.gfnAlert("전입할 자산을 선택하지 않았습니다.");
        		return false;
        	}

        	//Grid Validation

        	this.gfnConfirm("자산이동을 하시겠습니까?", "assetMoveAll");

        }

        //자산정보
        this.fnViewAssetInfo = function(obj,e) {

        	var objDs   = this.dxGrid.getBindDataset();
        	var selRows = this.dxGrid.getSelectedRows();

        	if(selRows.length > 0) {

        		//DHN_ASSETREG 자산취득
        		if(!this.gfnGridIsRow(this.dxGrid)) {return false;}

        		var param = {};

        		param.CD_CORP    = objDs.getColumn(selRows[0], "CD_CORP");
        		param.DS_CORP    = objDs.getColumn(selRows[0], "DS_CORP");
        		param.CD_ACASSET = objDs.getColumn(selRows[0], "CD_ACASSET");
        		param.DS_ACASSET = objDs.getColumn(selRows[0], "DS_ACASSET");
        		param.CD_ASSET   = objDs.getColumn(selRows[0], "CD_ASSET");
        		param.DS_ASSET   = objDs.getColumn(selRows[0], "DS_ASSET");

        		this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHN_ASSETREG", "", param);
        	}
        }

        this.assetMoveAll = function(strId, val) {

        	if(this.dsList2.rowcount == 0 || val == false) return;

        	this.dsInsert.clearData();

        	var i = 0, len = this.dsList2.rowcount;

        	for(i = 0; i < len; ++i) {

        		var nrow = this.dsInsert.addRow();

        		this.dsInsert.setColumn(nrow, "CD_ASSET"    , this.dsList2.getColumn(i, "CD_ASSET"));
        		this.dsInsert.setColumn(nrow, "NO_SEQ"      , 0);
        		this.dsInsert.setColumn(nrow, "DT_FRTAKE"   , this.calDT_GET.value);
        		this.dsInsert.setColumn(nrow, "CD_FRDEPT"   , this.cfCD_FRDEPT.form.CDTextBox.value);
        		this.dsInsert.setColumn(nrow, "AM_GETNATION", this.dsList2.getColumn(i, "AM_GET"));
        		this.dsInsert.setColumn(nrow, "YN_GET"      , "N");
        		this.dsInsert.setColumn(nrow, "ID_TRANS"    , this.AuthClient.ID_USER);
        		this.dsInsert.setColumn(nrow, "NO_DOC"      , "");
        		this.dsInsert.setColumn(nrow, "ID_MAINMAG"  , this.cfID_MAINMAG.form.CDTextBox.value);
        		this.dsInsert.setColumn(nrow, "ID_SUBMAG"   , this.cfID_SUBMAG.form.CDTextBox.value);
        		this.dsInsert.setColumn(nrow, "TY_FRDEPT"   , "B");
        		this.dsInsert.setColumn(nrow, "YN_MULTI"    , "Y");
        		this.dsInsert.setColumn(nrow, "CD_ACASSET"  , "");
        		this.dsInsert.setColumn(nrow, "CD_CORP"     , this.ccfCD_CORP.form.CDTextBox.value);
        	}

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        /**
        	자산이동 DIV 초기화.
        */
        this.clearDivData = function() {

        	this.calDT_GET.set_value("");
        	this.cfCD_FRDEPT.form.CDTextBox.set_value("");
        	this.cfCD_FRDEPT.form.DSTextBox.set_value("");

        	this.cfID_MAINMAG.form.CDTextBox.set_value("");
        	this.cfID_MAINMAG.form.DSTextBox.set_value("");

        	this.cfID_SUBMAG.form.CDTextBox.set_value("");
        	this.cfID_SUBMAG.form.DSTextBox.set_value("");

        	this.btnMove.set_enable(false);
        	this.btnMoveAll.set_enable(false);
        	this.btnCancel.set_enable(false);
        	this.btnCancelAll.set_enable(false);

        	this.btnAssetMoveAll.set_enable(false);
        	this.btnViewAssetInfo.set_enable(false);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccfCD_CORP.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staCD_ACASSET.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfCD_ACASSET.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staCD_ASSETSEMOK.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfCD_ASSETSEMOK.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfCD_GETDEPT.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.gridCellDbClick,this);
            this.divData.form.objGrid2.addEventHandler("oncelldblclick",this.gridCellDbClick,this);
            this.divData.form.btnMove.addEventHandler("onclick",this.btnOnclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.btnOnclick,this);
            this.divData.form.btnMoveAll.addEventHandler("onclick",this.btnOnclick,this);
            this.divData.form.btnCancelAll.addEventHandler("onclick",this.btnOnclick,this);
            this.divData.form.calDT_GET.addEventHandler("onchanged",this.divData_cal00_onchanged,this);
            this.divData.form.cfCD_FRDEPT.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.cfID_MAINMAG.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.cfID_SUBMAG.addEventHandler("onclick",this.Common_onclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsRowPosChanged,this);
            this.dsList2.addEventHandler("onrowposchanged",this.dsRowPosChanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHN_ASSETMOVEMULTI.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
