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
            this.set_titletext("감가상각");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHNPR_ASSETDEP_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ASSET\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ASSET\" type=\"STRING\" size=\"256\"/><Column id=\"YY_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACASSET\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACASSET\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"CD_ASSET\"/><Col id=\"YY_WORK\"/><Col id=\"CD_ACASSET\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staYM","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("회계년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYY_WORK","staYM:0.0","10.0","69","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ctclYY_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","327","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_ACASSET","0.0","staYM:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("자산코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACASSET","staCD_ACASSET:0.0","staYM:10.0","327","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFASSETINFO");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_ACNT","ccfCD_ACASSET:0.0","staYM:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("자산번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ASSET","staCD_DEPT_ACNT:0.0","staYM:10.0","335","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFASSET_BY_ACASSET");
            obj.getSetter("CDTextWidth").set("120");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,"540","0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBLANK","0","objGrid:15","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","staBLANK:-1","objGrid:15","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("전기말잔액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","sta01:-1","objGrid:15","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("당기증가액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","sta02:-1","objGrid:15","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("당기감소액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","sta03:-1","objGrid:15","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("당기말잔액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta05","sta04:-1","objGrid:15","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("미상각잔액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","0","staBLANK:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("자산가액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtAM_GETBEFOR","sta06:-1","staBLANK:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("edttxtAM_GETBEFOR","sta06:4","staBLANK:4","110","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_enable("false");
            obj.set_format("###,###,###,##0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtAM_GETINC","statxtAM_GETBEFOR:-1","staBLANK:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("edttxtAM_GETINC","statxtAM_GETBEFOR:4","staBLANK:4","110","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_enable("false");
            obj.set_format("###,###,###,##0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtAM_GETDEC","statxtAM_GETINC:-1","staBLANK:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("edttxtAM_GETDEC","statxtAM_GETINC:4","staBLANK:4","110","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_enable("false");
            obj.set_format("###,###,###,##0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtAM_GETSUM","statxtAM_GETDEC:-1","staBLANK:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("edttxtAM_GETSUM","statxtAM_GETDEC:4","staBLANK:4","110","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_enable("false");
            obj.set_format("###,###,###,##0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtAM_DEPREMAIN","statxtAM_GETSUM:-1","staBLANK:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("edttxtAM_DEPREMAIN","statxtAM_GETSUM:4","staBLANK:4","110","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_enable("false");
            obj.set_format("###,###,###,##0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07","0","sta06:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("감가상각액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtAM_DEPBEFOR","sta06:-1","statxtAM_GETBEFOR:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("edttxtAM_DEPBEFOR","sta06:4","statxtAM_GETBEFOR:4","110","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_enable("false");
            obj.set_format("###,###,###,##0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtAM_DEPINC","statxtAM_GETBEFOR:-1","statxtAM_GETBEFOR:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("edttxtAM_DEPINC","statxtAM_GETBEFOR:4","statxtAM_GETBEFOR:4","110","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_enable("false");
            obj.set_format("###,###,###,##0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtAM_DEPDEC","statxtAM_GETINC:-1","statxtAM_GETBEFOR:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("edttxtAM_DEPDEC","statxtAM_GETINC:4","statxtAM_GETBEFOR:4","110","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_enable("false");
            obj.set_format("###,###,###,##0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtAM_DEPSUM","statxtAM_GETDEC:-1","statxtAM_GETBEFOR:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("edttxtAM_DEPSUM","statxtAM_GETDEC:4","statxtAM_GETBEFOR:4","110","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_enable("false");
            obj.set_format("###,###,###,##0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtBLANK_2","statxtAM_DEPSUM:-1","statxtAM_GETBEFOR:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_ASSET.form.CDTextBox","value","dsSearch","CD_ASSET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclYY_WORK.form.TextBox","value","dsSearch","YY_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_ACASSET.form.CDTextBox","value","dsSearch","CD_ACASSET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch.form.ccfCD_ASSETSEMOK.form.CDTextBox","value","dsSearch","CD_ASSETSEMOK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_ASSET.form.DSTextBox","value","dsSearch","DS_ASSET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_ACASSET.form.DSTextBox","value","dsSearch","DS_ACASSET");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHN_ASSETDEP.xfdl", function() {
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

        	this.ccfCD_CORP.form.CDTextBox.setFocus();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Add.set_enable(false);
         	this.FormBtns.Save.set_enable(false);
         	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnAssetDep = this.gfnFormButtonAdd("AssetDep", "fnAssetDep");	// 감가상각
        	this.btnDetail   = this.gfnFormButtonAdd("Detail"  , "fnDetail"); 	// 자산정보

        	this.btnDetail.set_enable(false);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ccfCD_CORP         = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_ASSET        = this.divSearch.form.ccfCD_ASSET;
        	this.ctclYY_WORK        = this.divSearch.form.ctclYY_WORK;
        	this.ccfCD_ACASSET      = this.divSearch.form.ccfCD_ACASSET;
        	this.ccfCD_ASSETSEMOK   = this.divSearch.form.ccfCD_ASSETSEMOK;

        	this.edttxtAM_GETBEFOR  = this.divData.form.edttxtAM_GETBEFOR;
        	this.edttxtAM_GETINC    = this.divData.form.edttxtAM_GETINC;
        	this.edttxtAM_GETDEC    = this.divData.form.edttxtAM_GETDEC;
        	this.edttxtAM_GETSUM    = this.divData.form.edttxtAM_GETSUM;
        	this.edttxtAM_DEPREMAIN = this.divData.form.edttxtAM_DEPREMAIN;

        	this.edttxtAM_DEPBEFOR  = this.divData.form.edttxtAM_DEPBEFOR;
        	this.edttxtAM_DEPINC    = this.divData.form.edttxtAM_DEPINC;
        	this.edttxtAM_DEPDEC    = this.divData.form.edttxtAM_DEPDEC;
        	this.edttxtAM_DEPSUM    = this.divData.form.edttxtAM_DEPSUM;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	//법인코드
        	this.ccfCD_CORP.BeforeUserDataSetParam    = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged        = "fnAfterCDTextChanged";

        	//자산코드
        	this.ccfCD_ACASSET.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACASSET.AfterCDTextChanged     = "fnAfterCDTextChanged";

        	//자산번호
        	this.ccfCD_ASSET.BeforeUserDataSetParam   = "fnBeforeUserDataSetParam";
        	this.ccfCD_ASSET.AfterCDTextChanged       = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHN_ASSETDEP");

        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);

        	this.dsSearch.setColumn(0, "YY_WORK", this.gfnGetDate().substring(0, 4));
        };

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var cdCorp = this.dsSearch.getColumn(0, "CD_CORP");

        	// 법인코드
        	if(id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        		//dsUserParam.setColumn(nrow, "LEVLV_DEPT_ACNT", this.UserInfo.LEVLV_DEPT_ACNT);
        		//dsUserParam.setColumn(nrow, "LEVCD_DEPT_ACNT", this.UserInfo.LEVCD_DEPT_ACNT);
        	}

        	// 자산코드
        	if(id == "ccfCD_ACASSET") {
        		if(this.gfnIsNull(cdCorp)){
        			this.gfnAlert("법인코드를 먼저 선택하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        		dsUserParam.setColumn(nrow, "YN_CORP", "Y");
        	}

        	// 자산번호
        	if(id == "ccfCD_ASSET") {
        		if(this.gfnIsNull(cdCorp)){
        			this.gfnAlert("법인코드를 먼저 선택하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_ACASSET" , this.UserInfo.CD_ACASSET);
        		dsUserParam.setColumn(nrow, "YN_ISSUED"  , "Y");
        		dsUserParam.setColumn(nrow, "YN_INDISUSE", "Y");
        		dsUserParam.setColumn(nrow, "CD_CORP"    , cdCorp);
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;

        	switch(id) {
        		case "ccfCD_CORP":	//법인코드
        			this.ccfCD_ACASSET.form.fnCodeFindClear();
        			this.ccfCD_ASSET.form.fnCodeFindClear();
        		break;
        		case "ccfCD_ACASSET":	//자산코드
        			this.ccfCD_ASSET.form.fnCodeFindClear();
        		break;
        	}

        	// 그리드 하단 SUM 초기화.
        	this.edttxtAM_GETBEFOR.set_value(0);
        	this.edttxtAM_GETINC.set_value(0);
        	this.edttxtAM_GETDEC.set_value(0);
        	this.edttxtAM_GETSUM.set_value(0);
        	this.edttxtAM_DEPREMAIN.set_value(0);

        	this.edttxtAM_DEPBEFOR.set_value(0);
        	this.edttxtAM_DEPINC.set_value(0);
        	this.edttxtAM_DEPDEC.set_value(0);
        	this.edttxtAM_DEPSUM.set_value(0);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YEAR"       , "string");
        	this.dsSelect.addColumn("CD_ACASSET" , "string");
        	this.dsSelect.addColumn("CD_ASSET"   , "string");
        	this.dsSelect.addColumn("CD_CORP"    , "string");

        	this.dsSelectUser = new Dataset();
        	this.dsSelectUser.addColumn("ID_USER", "string");
        	this.dsSelectUser.addColumn("CD_DEPT", "string");
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

        	this.dsSelect.setColumn(0, "YEAR"      , this.dsSearch.getColumn(0, "YY_WORK"));
        	this.dsSelect.setColumn(0, "CD_ACASSET", this.dsSearch.getColumn(0, "CD_ACASSET"));
        	this.dsSelect.setColumn(0, "CD_ASSET"  , this.dsSearch.getColumn(0, "CD_ASSET"));
        	this.dsSelect.setColumn(0, "CD_CORP"   , this.dsSearch.getColumn(0, "CD_CORP"));

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

        	if (this.gfnIsNull(this.ctclYY_WORK.form.TextBox.value)) {
        		this.gfnAlert("감가상각년도는 반드시 입력 하셔야 합니다.");
        		this.ctclYY_WORK.form.TextBox.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.gfnAlert("법인 코드는 반드시 입력 하셔야 합니다.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
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
        		this.fnSetButton();
        		this.fnSum();

        		var flag = this.dsList.rowcount == 0 ? false : true;

        		this.btnDetail.set_enable(flag);
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnSum = function() {

        	// 그리드 하단 SUM 자산가액/감가상각액 처리.
        	this.edttxtAM_GETBEFOR.set_value(nexacro.toNumber(this.dsList.getSum("AM_GETBEFOR"), 0));
        	this.edttxtAM_GETINC.set_value(nexacro.toNumber(this.dsList.getSum("AM_GETINC"), 0));
        	this.edttxtAM_GETDEC.set_value(nexacro.toNumber(this.dsList.getSum("AM_GETDEC"), 0));
        	this.edttxtAM_GETSUM.set_value(nexacro.toNumber(this.dsList.getSum("AM_GETSUM"), 0));
        	this.edttxtAM_DEPREMAIN.set_value(nexacro.toNumber(this.dsList.getSum("AM_DEPREMAIN"), 0));

        	this.edttxtAM_DEPBEFOR.set_value(nexacro.toNumber(this.dsList.getSum("AM_DEPBEFOR"), 0));
        	this.edttxtAM_DEPINC.set_value(nexacro.toNumber(this.dsList.getSum("AM_DEPINC"), 0));
        	this.edttxtAM_DEPDEC.set_value(nexacro.toNumber(this.dsList.getSum("AM_DEPDEC"), 0));
        	this.edttxtAM_DEPSUM.set_value(nexacro.toNumber(this.dsList.getSum("AM_DEPSUM"), 0));
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {

        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
           }
        }


        //감가상각
        this.fnAssetDep = function(obj,e) {

        	var objDs = this.dxGrid.getBindDataset();
        	var selRows = this.dxGrid.getSelectedRows();

        	var param = {};

        	param.CD_CORP = this.ccfCD_CORP.form.CDTextBox.value;
        	param.DS_CORP = this.ccfCD_CORP.form.DSTextBox.value;

        	this.gfnFormOpen("DHN", "DHN_ASSETDEPMAGAM", "fnAssetDepCallback", param);
        }

        this.fnAssetDepCallback = function(strId, val) {

        	if(val == true){
        		this.FormBtns.Select.click(true);
        	}
        };


        //자산정보
        this.fnDetail = function(obj,e) {

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

        		this.gfnFormOpen("DHN", "DHN_ASSETREG", "", param);
        	}
        }

        //그리드 더블 클릭 이벤트 - 자산정보
        this.gridCellDbClick = function(obj,e) {

        	var objDs = this.dxGrid.getBindDataset();

        	//DHN_ASSETREG 자산취득
        	if(!this.gfnGridIsRow(this.dxGrid)) {return false;}

        	var param = {};

        	param.CD_CORP    = objDs.getColumn(e.row, "CD_CORP");
        	param.DS_CORP    = objDs.getColumn(e.row, "DS_CORP");
        	param.CD_ACASSET = objDs.getColumn(e.row, "CD_ACASSET");
        	param.DS_ACASSET = objDs.getColumn(e.row, "DS_ACASSET");
        	param.CD_ASSET   = objDs.getColumn(e.row, "CD_ASSET");
        	param.DS_ASSET   = objDs.getColumn(e.row, "DS_ASSET");

        	this.gfnFormOpen("DHN", "DHN_ASSETREG", "", param);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccfCD_CORP.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staCD_ACASSET.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfCD_ACASSET.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfCD_ASSET.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.gridCellDbClick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHN_ASSETDEP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
