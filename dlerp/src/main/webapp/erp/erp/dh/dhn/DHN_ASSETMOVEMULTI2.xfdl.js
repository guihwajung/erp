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
                this._setFormPosition(1270,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHNPR_ASSETMOVEMULTI_STATE</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHNPR_ASSETMOVE_INSERT</Col></Row><Row><Col id=\"TARGET\">selectMove</Col><Col id=\"SP\">DHNPR_ASSETMOVEMULTI_SELECT</Col></Row><Row><Col id=\"TARGET\">autoslip</Col><Col id=\"SP\">DHNPR_ASSETMOVEMULTI_AUTOSLIP</Col></Row><Row><Col id=\"TARGET\">autoslipX</Col><Col id=\"SP\">DHNPR_ASSETMOVEMULTI_AUTOSLIPX</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHNPR_ASSETMOVE_DELETE</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHNPR_ASSETMOVE_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACASSET\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACASSET\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ASSETSEMOK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ASSETSEMOK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GETDEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GETDEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_MOVE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"CD_ACASSET\"/><Col id=\"CD_ASSETSEMOK\"/><Col id=\"CD_GETDEPT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSlips", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ASSET\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TM_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","10.0",null,"78","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","10","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:-2","staCD_CORP:-22","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_ACASSET","390","10","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("자산코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACASSET","staCD_ACASSET:4","staCD_ACASSET:-24","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFASSETINFO");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_ASSETSEMOK","791","10","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("자산세목");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ASSETSEMOK","staCD_ASSETSEMOK:4","staCD_ASSETSEMOK:-24","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFASSETSEMOK");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_GETDEPT","-6","41","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("보유부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_GETDEPT","staCD_GETDEPT:4","staCD_GETDEPT:-21","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_GETDEPT00","390","41","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("이동일자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_MOVE","486","41","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","60%","100%","5",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cursor("ns-resize");
            obj.set_cssclass("div_Splitter");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter:3",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","27",null,null,"0","60",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgDT_GET","102","objGrid:4","327","27",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgID_MAINMAG","102","objGrid:30","327","27",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgCD_FRDEPT","530","objGrid:4","327","27",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBgID_SUBMAG","530","objGrid:30","327","27",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","-5","1260","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("전출자산내역");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staID_MAINMAG","0","objGrid:30","110","27",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("3");
            obj.set_text("관리자(정)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("cfID_MAINMAG","staID_MAINMAG:5","objGrid:34","300","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.getSetter("CodeFindName").set("DHX_CFIDSABUN");
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staCD_FRDEPT","428","objGrid:4","110","27",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("8");
            obj.set_text("전입부서");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("cfID_SUBMAG","543","objGrid:34","300","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.getSetter("CodeFindName").set("DHX_CFIDSABUN");
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("12");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Button("btnMove","883","objGrid:5","80","22",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("14");
            obj.set_text("자산이동");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("calDT_GET","115","objGrid:8","120","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("4");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("cfCD_FRDEPT","staCD_FRDEPT:5","objGrid:8","300","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDT_GET","0","objGrid:4","110","27",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_text("전입일자");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staID_SUBMAG","428","objGrid:30","110","27",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("11");
            obj.set_text("관리자(부)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE00","0","2","300","28",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("1");
            obj.set_text("자산이동내역");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGrid2","0","staTITLE00:0",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnSlipCancel",null,"2","80","22","0",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("5");
            obj.set_text("전표취소");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnSlipSearch",null,"2","80","22","btnSlipCancel:5",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("4");
            obj.set_text("전표조회");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnSlip",null,"2","80","22","btnSlipSearch:5",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("2");
            obj.set_text("전표발행");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,"2","80","22","btnSlip:5",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("3");
            obj.set_text("이동취소");
            this.divData.form.divDataBottom.addChild(obj.name, obj);
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

            obj = new BindItem("item8","divSearch.form.ctclDT_MOVE","value","dsSearch","DT_MOVE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHN_ASSETMOVEMULTI2.xfdl", function() {
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

            this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);

        	if (nexacro.toNumber(this.FormInfo.GR_SEARCH) > 1) {
         		this.ccfCD_CORP.set_enable(false);
         	}
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
        	this.btnAssetMoveAll  = this.gfnFormButtonAdd("AssetMove", "fnAssetMoveInfo"); 	// 자산이동정보
        	this.btnViewAssetInfo = this.gfnFormButtonAdd("ViewAssetInfo", "fnViewAssetInfo"); 	// 자산정보
        	this.btnAssetChg = this.gfnFormButtonAdd("AssetChg", "fnAssetChgInfo");  		//자산변동정보
        	this.btnAssetInfo = this.gfnFormButtonAdd("AssetInfo", "fnAssetInfo");  		//자산변동정보
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ccfCD_CORP       = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_ACASSET    = this.divSearch.form.ccfCD_ACASSET;
        	this.ccfCD_ASSETSEMOK = this.divSearch.form.ccfCD_ASSETSEMOK;
        	this.ccfCD_GETDEPT    = this.divSearch.form.ccfCD_GETDEPT;
        	this.ctclDT_MOVE      = this.divSearch.form.ctclDT_MOVE;

        	this.calDT_GET        = this.divData.form.divDataTop.form.calDT_GET;
        	this.cfCD_FRDEPT      = this.divData.form.divDataTop.form.cfCD_FRDEPT;
        	this.cfID_MAINMAG     = this.divData.form.divDataTop.form.cfID_MAINMAG;
        	this.cfID_SUBMAG      = this.divData.form.divDataTop.form.cfID_SUBMAG;

        	this.btnMove          = this.divData.form.divDataTop.form.btnMove;

        	//this.btnMoveAll       = this.divData.form.divDataBottom.form.btnMoveAll;
        	this.btnCancel        = this.divData.form.divDataBottom.form.btnCancel;
        	//this.btnCancelAll     = this.divData.form.divDataBottom.form.btnCancelAll;
        	this.btnSlip 	      = this.divData.form.divDataBottom.form.btnSlip;
        	this.btnSlipSearch 	  = this.divData.form.divDataBottom.form.btnSlipSearch;
        	this.btnSlipCancel 	  = this.divData.form.divDataBottom.form.btnSlipCancel;

        	this.dxGrid  = this.divData.form.divDataTop.form.objGrid;
        	this.dxGrid2 = this.divData.form.divDataBottom.form.objGrid2;
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

        	this.dxGrid2.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	this.btnMove.set_enable(false);
        	//this.btnMoveAll.set_enable(false);
        	this.btnCancel.set_enable(false);
        	//this.btnCancelAll.set_enable(false);
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
        		dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER", this.AuthClient.LEVCD_DEPT_UPPER);
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
        		case "ccfCD_CORP":			//법인코드
        			this.ccfCD_ACASSET.form.fnCodeFindClear();
        			this.ccfCD_ASSETSEMOK.form.fnCodeFindClear();
        			this.ccfCD_GETDEPT.form.fnCodeFindClear();
        		break;
        		case "ccfCD_ACASSET":	    //자산코드
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

        	this.dsSelectMove = new Dataset();
        	this.dsSelectMove.addColumn("CD_CORP"      , "string");
        	this.dsSelectMove.addColumn("CD_ACASSET"   , "string");
        	this.dsSelectMove.addColumn("CD_ASSETSEMOK", "string");
        	this.dsSelectMove.addColumn("CD_GETDEPT"   , "string");
        	this.dsSelectMove.addColumn("DT_MOVE"    , "string");

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

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_ASSET"			, "string");
        	this.dsUpdate.addColumn("NO_SEQ"			, "BIGDECIMAL");
        	this.dsUpdate.addColumn("DT_FRTAKE"			, "string");
        	this.dsUpdate.addColumn("CD_FRDEPT"			, "string");
        	this.dsUpdate.addColumn("AM_GETNATION"		, "BIGDECIMAL");
        	this.dsUpdate.addColumn("YN_GET"			, "string");
        	this.dsUpdate.addColumn("ID_TRANS"			, "string");
        	this.dsUpdate.addColumn("NO_DOC"			, "string");
        	this.dsUpdate.addColumn("ID_MAINMAG"		, "string");
        	this.dsUpdate.addColumn("ID_SUBMAG"			, "string");
        	this.dsUpdate.addColumn("TY_FRDEPT"			, "string");
        	this.dsUpdate.addColumn("CD_CORP"			, "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_CORP"      , "string");
        	this.dsDelete.addColumn("CD_ASSET"     , "string");
        	this.dsDelete.addColumn("NO_SEQ"       , "int");

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

        this.fnSelectMove = function ()
        {
        	if (!this.fnSelectValidate()) return false;

        	this.dsSelectMove.clearData();
        	this.dsSelectMove.addRow();

        	this.dsSelectMove.setColumn(0, "CD_CORP"      , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelectMove.setColumn(0, "CD_ACASSET"   , this.dsSearch.getColumn(0, "CD_ACASSET"));
        	this.dsSelectMove.setColumn(0, "CD_ASSETSEMOK", this.dsSearch.getColumn(0, "CD_ASSETSEMOK"));
        	this.dsSelectMove.setColumn(0, "CD_GETDEPT"   , this.dsSearch.getColumn(0, "CD_GETDEPT"));
        	this.dsSelectMove.setColumn(0, "DT_MOVE"   , this.dsSearch.getColumn(0, "DT_MOVE"));

        	var strSvcId    = "selectMove";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectMove=dsSelectMove";
        	var outData     = "dsList2=selectMove0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

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
        	if (!this.gfnGridValidate(this.dxGrid2)) return;

        	if (!this.fnSaveValidate()) return;

        	this.dxGrid2.updateToDataset();

        	this.dsUpdate.clearData();

        	for (var i = 0; i < this.dsList2.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList2, i);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_ASSET"		, this.dsList2.getColumn(i, "CD_ASSET"));											//자산번호
        				this.dsUpdate.setColumn(nrow, "NO_SEQ"			, this.dsList2.getColumn(i, "NO_SEQ"));				//순번
        				this.dsUpdate.setColumn(nrow, "DT_FRTAKE"		, this.dsList2.getColumn(i, "DT_FRTAKE"));			//전입일자
        				this.dsUpdate.setColumn(nrow, "CD_FRDEPT"		, this.dsList2.getColumn(i, "CD_FRDEPT"));			//전입부서
        				this.dsUpdate.setColumn(nrow, "AM_GETNATION"	, this.dsList2.getColumn(i, "AM_GETNATION"));		//취득금액
        				this.dsUpdate.setColumn(nrow, "YN_GET"			, "N");												//취득여부
        				this.dsUpdate.setColumn(nrow, "ID_TRANS"		, this.AuthClient.ID_USER);							//등록자ID
        				this.dsUpdate.setColumn(nrow, "ID_MAINMAG"		, this.dsList2.getColumn(i, "ID_MAINMAG"));			//사번
        				this.dsUpdate.setColumn(nrow, "ID_SUBMAG"		, this.dsList2.getColumn(i, "ID_SUBMAG"));			//사번(부)
        				this.dsUpdate.setColumn(nrow, "CD_CORP"			, this.dsSearch.getColumn(0, "CD_CORP"));    		//법인코드
        				this.dsUpdate.setColumn(nrow, "TY_FRDEPT"		, "B");  //부서구분

        				break;
        		}
        	}

        	if (this.dsUpdate.rowcount == 0 ) return;

        	var strSvcId    = "update";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate";
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        		this.gfnAlert("법인코드를 입력하지 않았습니다.");
        		return false;
        	}

        	return true;
        };

        this.fnSaveValidate = function() {
        	var strMsg = "";
        	var bInEmpty = true;

        	var cntCdChange = 0;

        	var rowCnt = this.dsList2.rowcount;

        	for(var i = 0 ; i < this.dsList2.rowcount ; i++) {
        		var flag = this.gfnGetFlag(this.dsList2, i);

        		if(this.gfnIsNull(flag) || flag != "U") {
        			continue;
        		}

        		if( i > 0) {
        			if(this.gfnGetDiffDate(this.dsList2.getColumn(i, "DT_FRTAKE"), this.dsList2.getColumn(i, "DT_TOTAKE")) >= 0) {
        				strMsg += "최종 전입일자보다 커야합니다.\n";
        				bInEmpty = false;
        			}

        			if(this.dsList2.getColumn(i, "CD_FRDEPT") == this.dsList2.getColumn(i, "CD_TODEPT")){
        			strMsg += "전입부서와 전출부서는 달라야합니다\n";
        			bInEmpty = false;
        			}
        		}

        		if(!bInEmpty) {
        			this.gfnAlert(strMsg);
        			return bInEmpty;
        		}
        	}
        	return bInEmpty;
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
        		this.fnSelectMove();
        	}

        	if (svcID == "selectMove") {
        		this.gfnGridAfterSelect(this.dxGrid2);
        	}

        	if (svcID == "save") {
        		if (errorCode == 0) {
        			this.ctclDT_MOVE.set_value(this.calDT_GET.value);
        			this.FormBtns.Select.click();
        			this.gfnAlert("정상적으로 처리되었습니다.");

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}

        	if (svcID == "update") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}

        	if (svcID == "delete") {
        		if (errorCode == 0) {
        			this.gfnAlert("정상적으로 처리되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	if (svcID =="slipN")
        	{	if (errorCode == 0) {
        		this.fnAutoSlip("Y", true);
        		}
        	}
        	if (svcID =="slipY")
        	{
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        			this.gfnAlert(" 전표발행이 정상적으로 처리되었습니다.", "", "전표발행", "fnMsgCallback");
        		}

        	}
        	if (svcID =="autoslipX")
        	{
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        			this.gfnAlert(" 전표취소가 정상적으로 처리되었습니다.", "", "전표취소", "fnMsgCallback");
        		}

        	}

        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(id == "DHX_CFACNTUNIT_FIXEDASSET") {	//전입부서
        		dsUserParam.setColumn(nrow, "LV_DEPT"		, this.UserInfo.LEVLV_DEPT_ACNT);
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, this.UserInfo.LEVCD_DEPT_ACNT);
        		dsUserParam.setColumn(nrow, "YN_SELECT"		, "A");
        		dsUserParam.setColumn(nrow, "CD_CORP"		, this.AuthClient.CD_CORP);
        	} else if(id == "DHX_CFIDSABUN1" || id == "DHX_CFIDSABUN2") {	//관리자
         		dsUserParam.setColumn(nrow, "YN_OFFICER", "N");
         		dsUserParam.setColumn(nrow, "CD_CORP"	, this.AuthClient.CD_CORP);		//구분
        	}
        	if(id == "DHX_CFACNTUNIT_T0" || id == "DHX_CFACNTUNIT_FR") {	//전입/전출부서

        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");			//상위부서
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");			//전표발행여부
        		dsUserParam.setColumn(nrow, "CD_CORP"		, this.AuthClient.CD_CORP);		//법인코드
        		dsUserParam.setColumn(nrow, "YN_USE"		, "Y");			//사용여부
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");			//현장/본사여부
        		dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER" , this.AuthClient.CD_CORP);
        	}

        	return true;
        };
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

        			var chkCnt = this.dsList.getCaseCount("CHK == 1");
        			trace("이동자산수 chkCnt=>" + chkCnt);
        			if (chkCnt <= 0) {
        				this.gfnAlert("이동처리할 자산을 선택하세요.");
        				return false;
        			}

        			if (chkCnt > 100)
        			{
        				this.gfnAlert("이동처리할 자산 선택은 100건 이하로 선택하세요. 선택된자산(" + chkCnt + "건)");
        				return false;
        			}

        			if (this.gfnIsNull(this.calDT_GET.value)) {
        				this.gfnAlert("전입일자를 입력하지 않았습니다.");
        				return false;
        			}

        			if (this.gfnIsNull(this.cfCD_FRDEPT.form.CDTextBox.value)) {
        				this.gfnAlert("전입부서를 입력하지 않았습니다.");
        				return false;
        			}
        			var now = this.dsList.findRowExpr("CD_TAKEDEPT == '"+ this.cfCD_FRDEPT.form.CDTextBox.value+"'");
        			if (now != -1)
        			{
        				this.gfnAlert("보유부서와 전입부서가 동일한 자료가 존재합니다. 이동처리할 수 없습니다.");
        				return false;
        			}

        			var cnow = this.dsList.findRowExpr("DT_FRTAKE >= '"+ this.calDT_GET.value+"'");

        			trace("자산이동 =>" + now + "," + cnow);
        			if (cnow != -1)
        			{
        				this.gfnAlert("이동일자 이후 이동자료가 존재합니다. 이동처리할 수 없습니다.");
        				return false;
        			}

        			//Grid Validation

        			this.gfnConfirm("자산이동을 하시겠습니까?", "assetMove");

        			break;

        		case "btnCancel" :

        			var chkCnt = this.dsList2.getCaseCount("CHK == 1");
        			if (chkCnt <= 0) {
        				this.gfnAlert("이동취소 처리할 자산을 선택하세요.");
        				return false;
        			}

        			//Grid Validation

        			this.gfnConfirm("자산이동을 취소 하시겠습니까?", "assetMoveCancel");

        			break;

        		case "btnSlip" :
        		    this.gfnConfirm("자산이동 전표발행 하시겠습니까?", "fnAutoSlip", "N");
        			//this.fnAutoSlip("N");

        			break;
        		case "btnSlipSearch" :
        			this.fnSlipSearch();
        			break;

        		case "btnSlipCancel" :
        			if(!this.gfnGridIsRow(this.dxGrid2)) return;

        			var NO_SLIP = this.dsList2.getColumn(this.dsList2.rowposition, "CD_TRADE_FR");

        			if ( this.gfnIsNull(NO_SLIP) ) {
        				this.gfnAlert("발행된 전표가 없습니다.");
        				return false;
        			}

        			this.gfnConfirm("자산이동 전표취소 하시겠습니까?", "fnSlipCancel");
        			break;

        	}
         }

        this.dsRowPosChanged = function(obj,e) {

        	if(this.dsList.rowcount == 0) {
        		this.btnMove.set_enable(false);
        // 		this.btnMoveAll.set_enable(false);
        // 		this.btnViewAssetInfo.set_enable(false);
        	} else {
        		this.btnMove.set_enable(true);
        // 		this.btnMoveAll.set_enable(true);
        // 		this.btnViewAssetInfo.set_enable(true);
        	}

        	if(this.dsList2.rowcount == 0) {
        		this.btnCancel.set_enable(false);
        		this.btnSlip.set_enable(false);
        		this.btnSlipCancel.set_enable(false);
        		this.btnSlipSearch.set_enable(false);
        // 		this.btnCancelAll.set_enable(false);
        // 		this.btnAssetMoveAll.set_enable(false);
        	} else {
        		this.btnCancel.set_enable(true);
        		this.btnSlip.set_enable(true);
        		this.btnSlipCancel.set_enable(true);
        		this.btnSlipSearch.set_enable(true);
        // 		this.btnCancelAll.set_enable(true);
        // 		this.btnAssetMoveAll.set_enable(true);
        	}
        }

        //자산정보
        this.fnAssetInfo = function(obj,e) {

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

        		this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHN_ASSETREGINFO", "", param);
        	}
        }

        //자산취득정보
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
        //자산이동정보
        this.fnAssetMoveInfo = function(obj,e) {

        	var objDs   = this.dxGrid.getBindDataset();
        	var selRows = this.dxGrid.getSelectedRows();

        	if(selRows.length > 0) {

        		//DHN_ASSETMOVE 자산이동 정보
        		if(!this.gfnGridIsRow(this.dxGrid)) {return false;}

        		var param = {};

        		param.CD_CORP    = objDs.getColumn(selRows[0], "CD_CORP");
        		param.DS_CORP    = objDs.getColumn(selRows[0], "DS_CORP");
        		param.CD_ACASSET = objDs.getColumn(selRows[0], "CD_ACASSET");
        		param.DS_ACASSET = objDs.getColumn(selRows[0], "DS_ACASSET");
        		param.CD_ASSET   = objDs.getColumn(selRows[0], "CD_ASSET");
        		param.DS_ASSET   = objDs.getColumn(selRows[0], "DS_ASSET");

        		this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHN_ASSETMOVE", "", param);
        	}
        }


        //자산변동정보
        this.fnAssetChgInfo = function(obj,e) {

        	var objDs   = this.dxGrid.getBindDataset();
        	var selRows = this.dxGrid.getSelectedRows();

        	if(selRows.length > 0) {

        		//DHN_ASSETMOVE 자산이동 정보
        		if(!this.gfnGridIsRow(this.dxGrid)) {return false;}

        		var param = {};

        		param.CD_CORP    = objDs.getColumn(selRows[0], "CD_CORP");
        		param.DS_CORP    = objDs.getColumn(selRows[0], "DS_CORP");
        		param.CD_ACASSET = objDs.getColumn(selRows[0], "CD_ACASSET");
        		param.DS_ACASSET = objDs.getColumn(selRows[0], "DS_ACASSET");
        		param.CD_ASSET   = objDs.getColumn(selRows[0], "CD_ASSET");
        		param.DS_ASSET   = objDs.getColumn(selRows[0], "DS_ASSET");

        		this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHN_ASSETCHG", "", param);
        	}
        }

        //자산이동 처리
        this.assetMove = function(strId, val) {
        	//trace(" assetMove=>" + val);
        	if (!val) return;

        	if(this.dsList.getCaseCount("CHK == 1") <= 0) return;

        	this.dsInsert.clearData();

        	for (var i=0; i < this.dsList.rowcount; i++) {
        		if (this.dsList.getColumn(i, "CHK") == 1) {

        			var nrow = this.dsInsert.addRow();

        			this.dsInsert.setColumn(nrow, "CD_ASSET"    , this.dsList.getColumn(i, "CD_ASSET"));
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
        // 자산이동 취소
        this.assetMoveCancel = function(strId, val) {
        	if (!val) return;

        	if(this.dsList2.getCaseCount("CHK == 1") <= 0) return;

        	this.dsDelete.clearData();

        	for (var i=0; i < this.dsList2.rowcount; i++) {
        		if (this.dsList2.getColumn(i, "CHK") == 1) {

        			var nrow = this.dsDelete.addRow();
        			this.dsDelete.setColumn(nrow, "CD_CORP"     , this.ccfCD_CORP.form.CDTextBox.value);
        			this.dsDelete.setColumn(nrow, "CD_ASSET"    , this.dsList2.getColumn(i, "CD_ASSET"));
        			this.dsDelete.setColumn(nrow, "NO_SEQ"    , this.dsList2.getColumn(i, "NO_SEQ"));
        		}
        	}
        	var strSvcId    = "delete";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "delete=dsDelete";
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
        };

        //전표조회
        this.fnSlipSearch = function() {

            if(!this.gfnGridIsRow(this.dxGrid2)) return;

        	var NO_SLIP = this.dsList2.getColumn(this.dsList2.rowposition, "CD_TRADE_FR");

        	if ( this.gfnIsNull(NO_SLIP) ) {
        		this.gfnAlert("발행된 전표가 없습니다.");
        		return false;
        	}

        	var param = {};
        	param.CD_TRADE = NO_SLIP;
        	param.IUD_FLAG = "S";
        	param.strYN_JUNDO_START = "";

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnPopCallBack", param);
        }

        // 전표발행 (slipYn:Y/N)
        this.fnAutoSlip = function(strId, val) {

        	if(!val) return;

        	this.dsSlips.clearData();
        	trace("fnAutoSlip =>" + strId);

        	// 전표발행
        	if (strId == "N") {

        		tmSlip = this.AuthClient.ID_USER + this.gfnGetDate("milli");

        		for (var i=0; i < this.dsList2.rowcount; i++) {
        			if (this.dsList2.getColumn(i, "CHK") == 1) {
        			 trace( "CHK : " + i + "=" + this.dsList2.getColumn(i, "CHK"));
        				var nrow = this.dsSlips.addRow();
        				this.dsSlips.setColumn(nrow, "CD_ASSET", this.dsList2.getColumn(i, "CD_ASSET"));
        				this.dsSlips.setColumn(nrow, "NO_SEQ", this.dsList2.getColumn(i, "NO_SEQ"));
        				this.dsSlips.setColumn(nrow, "TM_SLIP", tmSlip);
        				this.dsSlips.setColumn(nrow, "YN_SLIP", strId);
        				this.dsSlips.setColumn(nrow, "CD_CORP", this.dsList2.getColumn(i, "CD_CORP"));
        				this.dsSlips.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				cdCorp = this.dsList2.getColumn(i, "CD_CORP");
        			}
        		}
        	// 전표발행후처리
        	} else {
        		var nrow = this.dsSlips.addRow();
        		this.dsSlips.setColumn(nrow, "TM_SLIP", tmSlip);
        		this.dsSlips.setColumn(nrow, "CD_ASSET", "");
        		this.dsSlips.setColumn(nrow, "NO_SEQ", 0);
        		this.dsSlips.setColumn(nrow, "YN_SLIP", strId);
        		this.dsSlips.setColumn(nrow, "CD_CORP", cdCorp);
        		this.dsSlips.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}

        	trace("dsSlips =>" + this.dsSlips.rowcount);
        	if (this.dsSlips.rowcount == 0) return;

        	var strSvcId    = "slip" + strId;
        	var strSvcType  = "savesel";
        	var inProc		= "_dsProc";
        	var inData      = "autoslip=dsSlips";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        //전표취소
        this.fnSlipCancel = function(strId, val) {

        	if(!val) return;

            this.dsSlipCancel = new Dataset();
        	this.dsSlipCancel.addColumn("CD_TRADE", "string");
        	this.dsSlipCancel.addColumn("CD_CORP", "string");

        	this.dsSlipCancel.clearData();
        	for (var i=0; i < this.dsList2.rowcount; i++) {
        		if (this.dsList2.getColumn(i, "CHK") == 1) {
        			var nrow = this.dsSlipCancel.addRow();
        			this.dsSlipCancel.setColumn(nrow, "CD_TRADE", this.dsList2.getColumn(i, "CD_TRADE_FR"));
        			this.dsSlipCancel.setColumn(nrow, "CD_CORP", this.dsList2.getColumn(i, "CD_CORP"));
        		}
        	}

        	if (this.dsSlipCancel.rowcount == 0) return;

        	var strSvcId    = "autoslipX";
        	var strSvcType  = "savesel";
        	var inProc		= "_dsProc";
        	var inData      = "autoslipX=dsSlipCancel";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
        };


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
        	//this.btnMoveAll.set_enable(false);
        	this.btnCancel.set_enable(false);
        	this.btnSlip.set_enable(false);
        	this.btnSlipCancel.set_enable(false);
        	this.btnSlipSearch.set_enable(false);
        	//this.btnCancelAll.set_enable(false);
        	//this.btnAssetMoveAll.set_enable(false);
        	//this.btnViewAssetInfo.set_enable(false);
        }

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };

        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_top(e.clienty);
        		this.divData.form.resetScroll();
        	}
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
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataTop.form.cfID_MAINMAG.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.divDataTop.form.cfID_SUBMAG.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.divDataTop.form.btnMove.addEventHandler("onclick",this.btnOnclick,this);
            this.divData.form.divDataTop.form.calDT_GET.addEventHandler("onchanged",this.divData_cal00_onchanged,this);
            this.divData.form.divDataTop.form.cfCD_FRDEPT.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.divDataBottom.form.btnSlipCancel.addEventHandler("onclick",this.btnOnclick,this);
            this.divData.form.divDataBottom.form.btnSlipSearch.addEventHandler("onclick",this.btnOnclick,this);
            this.divData.form.divDataBottom.form.btnSlip.addEventHandler("onclick",this.btnOnclick,this);
            this.divData.form.divDataBottom.form.btnCancel.addEventHandler("onclick",this.btnOnclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsRowPosChanged,this);
            this.dsList2.addEventHandler("onrowposchanged",this.dsRowPosChanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsSlips.addEventHandler("onrowposchanged",this.dsRowPosChanged,this);
        };
        this.loadIncludeScript("DHN_ASSETMOVEMULTI2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
