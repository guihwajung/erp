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
            this.set_titletext("계정코드별명세서(FROM~TO)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1320,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHEPR_ACCOUNT_SUBLEDGER_SELECT_PW_NEW_DSMEC</Col></Row><Row><Col id=\"TARGET\">report</Col><Col id=\"SP\">DHEPR_ACCOUNT_SUBLEDGER_SELECT_PW_NEW_DSMEC</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT </Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTYPE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">거래처</Col><Col id=\"VALUE\">VENDOR</Col></Row><Row><Col id=\"CODE\">참고번호</Col><Col id=\"VALUE\">REFNO</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CON\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CON\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACNT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACNT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PRINT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListTest", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_PRINT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","10.0",null,"78","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","278","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_ACNT","ccfCD_CORP:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_ACNT","staCD_DEPT_ACNT:0.0","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_FROM","ccfCD_DEPT_ACNT:0.0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("회계일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","staDT_FROM:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_TO","ctclDT_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","staDT_TO:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_ACNT_FROM","0.0","staCD_CORP:10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("계정코드FROM");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNT_FROM","staCD_ACNT_FROM:0.0","staCD_CORP:10.0","277","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNT_SLIP_AND_TRIAL");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_ACNT_TO","ccfCD_ACNT_FROM:0.0","staCD_CORP:10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("계정코드TO");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNT_TO","staCD_ACNT_TO:0.0","staCD_CORP:10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNT_SLIP_AND_TRIAL");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("11");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTYPE","ccfCD_ACNT_TO:10","staCD_CORP:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_innerdataset("dsTYPE");
            obj.set_datacolumn("CODE");
            obj.set_codecolumn("VALUE");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CON","cboTYPE:5","staCD_CORP:10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("13");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtCD_CON","cboTYPE:5.0","staCD_CORP:10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM00_00","1182","10","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_PRINT","1246","10","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_innerdataset("dsTY_PRINT");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("한글");
            obj.set_value("KOR");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
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
            obj = new BindItem("item2","divSearch.form.ctclDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboTYPE","value","dsSearch","TY_CON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_ACNT_FROM.form.CDTextBox","value","dsSearch","CD_ACNT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_ACNT_TO.form.CDTextBox","value","dsSearch","CD_ACNT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfCD_CON.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ccfCD_CON.form.DSTextBox","value","dsSearch","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.ccfCD_ACNT_FROM.form.DSTextBox","value","dsSearch","DS_ACNT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.ccfCD_ACNT_TO.form.DSTextBox","value","dsSearch","DS_ACNT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.txtCD_CON","value","dsSearch","CD_CON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccfCD_DEPT_ACNT.form.CDTextBox","value","dsSearch","CD_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_DEPT_ACNT.form.DSTextBox","value","dsSearch","DS_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSearch.form.ccboTY_PRINT","value","dsSearch","TY_PRINT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHE_ACCOUNTSELECT_PW.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        var UserInfo = this.objApp.gdsUserInfo;

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

        	this.cboTYPE.set_index( 0 );
        	this.ccfCD_CORP.form.CDTextBox.setFocus();

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_CORP_REC)) {

        		trace("부모창 id : "+this.getOwnerFrame().parent.id);


        		//부모창 아이디
        		var parentId = this.getOwnerFrame().parent.id;
        		var idForm = parentId.substring(parentId.indexOf("#")+1, parentId.length);

        		this.dsSearch.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP_REC);
        		this.dsSearch.setColumn(0, "DS_CORP",this.getOwnerFrame().DS_CORP_REC);

        		this.dsSearch.setColumn(0, "CD_DEPT_ACNT", this.getOwnerFrame().CD_DEPT_ACNT);
        		this.dsSearch.setColumn(0, "DS_DEPT_ACNT", this.getOwnerFrame().DS_DEPT_ACNT);

        		if(this.gfnIsNull(this.getOwnerFrame().CD_DEPT_ACNT)){
        			this.dsSearch.setColumn(0, "CD_DEPT_ACNT", this.AuthClient.LEVCD_DEPT_UPPER);
        			this.ccfCD_DEPT_ACNT.form.fnCodeFindLoad();
        		}

        		this.dsSearch.setColumn(0, "DT_FROM",this.getOwnerFrame().DT_MAGAM);
        		this.dsSearch.setColumn(0, "DT_TO",this.getOwnerFrame().DT_MAGAM2);
        		this.dsSearch.setColumn(0, "TY_CON", this.gfnNvl(this.getOwnerFrame().TY_VENDOR, "VENDOR"));

        		this.dsSearch.setColumn(0, "CD_VENDOR",this.getOwnerFrame().CD_VENDOR);
        		this.dsSearch.setColumn(0, "DS_VENDOR",this.getOwnerFrame().DS_VENDOR);

        		if(idForm == "DHD_PREPAY_SLIP" || idForm == "DYA_SILJUK_MONTH" || idForm == "DYA_SILJUK_MONTH_EIS1" || idForm == "DYA_SILJUK_MONTH_EIS2"){	//건설중인 자산관리
        			this.dsSearch.setColumn(0, "CD_ACNT_FROM", this.getOwnerFrame().CD_ACNT_FROM);
        			this.dsSearch.setColumn(0, "DS_ACNT_FROM", this.getOwnerFrame().DS_ACNT_FROM);
        			this.dsSearch.setColumn(0, "CD_ACNT_TO", this.getOwnerFrame().CD_ACNT_TO);
        			this.dsSearch.setColumn(0, "DS_ACNT_TO", this.getOwnerFrame().DS_ACNT_TO);
        		}else if(idForm == "DHA_INVERSTMENT"){	// 투자현황관리
        			this.dsSearch.setColumn(0, "CD_ACNT_FROM", this.getOwnerFrame().CD_ACCOUNT);
        			this.dsSearch.setColumn(0, "CD_ACNT_TO", this.getOwnerFrame().CD_ACCOUNT);
        			this.ccfCD_ACNT_FROM.form.fnCodeFindLoad();
        			this.ccfCD_ACNT_TO.form.fnCodeFindLoad();
        		}else{
        			this.dsSearch.setColumn(0, "CD_ACNT_FROM", this.getOwnerFrame().CD_ACCOUNT);
        			this.dsSearch.setColumn(0, "DS_ACNT_FROM", this.getOwnerFrame().DS_ACCOUNT);
        			this.dsSearch.setColumn(0, "CD_ACNT_TO", this.getOwnerFrame().CD_ACCOUNT);
        			this.dsSearch.setColumn(0, "DS_ACNT_TO", this.getOwnerFrame().DS_ACCOUNT);
        		}

        		this.FormBtns.Select.click(true);
        	} else{

        		var sCurrentDate = this.gfnGetDate();
        		this.ctclDT_FROM.set_value((sCurrentDate.substr(0,4)+"0101"));
        		this.ctclDT_TO.set_value(sCurrentDate);

        		//this.dsSearch.setColumn(0, "DT_FROM", this.gfnGetFirstDate(this.gfnGetDate()));
        		//this.dsSearch.setColumn(0, "DT_TO", this.gfnGetDate());
        		this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        		this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);

        		this.dsSearch.setColumn(0, "CD_DEPT_ACNT", this.AuthClient.LEVCD_DEPT_UPPER);
        		this.ccfCD_DEPT_ACNT.form.fnCodeFindLoad();


        // 		if (nexacro.toNumber(this.FormInfo.GR_SEARCH) == 7) {
        // 			this.ccfCD_DEPT_ACNT.form.CDTextBox.set_value(this.AuthClient.CD_DEPT);
        // 			this.ccfCD_DEPT_ACNT.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);
        // 			this.staCD_DEPT_ACNT.set_textDecoration("underline");
        // 		}

        		//this.ccfCD_DEPT_ACNT.form.CDTextBox.set_value(this.AuthClient.LEVCD_DEPT_UPPER);
        	}


        	//EXEC DHEPR_ACCOUNT_SUBLEDGER_SELECT_PW @CD_CORP='01', @CD_DEPT_ACNT='', @DT_FROM='20210101', @DT_TO='20210131', @TY_CON='VENDOR', @CD_CON='', @CD_ACNT_FROM='2100501', @CD_ACNT_TO='2100501'
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
         	this.FormBtns.Add.set_enable(false);
         	this.FormBtns.Save.set_enable(false);
         	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnFormButtonGe = this.gfnFormButtonAdd("tbbHistory", "fnTbbHistory", "전표조회");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPT_ACNT = this.divSearch.form.ccfCD_DEPT_ACNT;
        	this.ccfCD_ACNT_FROM = this.divSearch.form.ccfCD_ACNT_FROM;
        	this.ccfCD_ACNT_TO = this.divSearch.form.ccfCD_ACNT_TO;
        	this.ccfCD_CON = this.divSearch.form.ccfCD_CON;
        	this.txtCD_CON = this.divSearch.form.txtCD_CON;

        	this.cboTYPE = this.divSearch.form.cboTYPE;

        	this.ctclDT_FROM = this.divSearch.form.ctclDT_FROM;
        	this.ctclDT_TO = this.divSearch.form.ctclDT_TO;

        	this.staCD_DEPT_ACNT = this.divSearch.form.staCD_DEPT_ACNT;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHE_ACCOUNTSELECT_PW");

        	this.dxGrid.addEventHandler("oncelldblclick", this.fnGrid_Celldblclick, this);
        	//this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dxGrid.addEventHandler("onlbuttonup", this.fnGrid_onlbuttonup, this);
        	this.dxGrid.addEventHandler("onlbuttondown", this.fnGrid_onlbuttondown, this);

        	this.ccfCD_DEPT_ACNT.CodeFindName = "DHX_CFACNTUNIT";	// DHX_CFBALANCE_ACNTUNIT
        	this.ccfCD_CON.CodeFindName = "DHX_CFALLVENDOR_CODEFIND";	// DHX_CFNVENDOR_CODEFIND

        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT_ACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACNT_FROM.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACNT_TO.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CON.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSelect.addColumn("DT_FROM", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
        	this.dsSelect.addColumn("TY_CON", "string");
        	this.dsSelect.addColumn("CD_CON", "string");
        	this.dsSelect.addColumn("CD_ACNT_FROM", "string");
        	this.dsSelect.addColumn("CD_ACNT_TO", "string");
        	this.dsSelect.addColumn("YN_MULTI", "string");

        	this.dsSum = new Dataset();
        	this.dsSum.addColumn("ROW", "int");
        	this.dsSum.addColumn("COLUNM", "string");
        	this.dsSum.addColumn("AM_ACCOUNT", "bigdecimal");
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

        	var CD_ACNT_FROM = this.gfnTrim(this.dsSearch.getColumn(0, "CD_ACNT_FROM"));
        	var CD_ACNT_TO = this.gfnTrim(this.dsSearch.getColumn(0, "CD_ACNT_TO"));
        	var CD_CON = (this.cboTYPE.value == "VENDOR") ?  "CD_VENDOR" : "CD_CON";	// VENDOR or REFNO

        	var nRow = this.dsSelect.addRow();
        	this.dsSelect.setColumn(nRow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(nRow, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        	this.dsSelect.setColumn(nRow, "DT_FROM", this.dsSearch.getColumn(0, "DT_FROM"));
        	this.dsSelect.setColumn(nRow, "DT_TO", this.dsSearch.getColumn(0, "DT_TO"));
        	this.dsSelect.setColumn(nRow, "TY_CON", this.dsSearch.getColumn(0, "TY_CON"));
        	this.dsSelect.setColumn(nRow, "CD_CON", this.dsSearch.getColumn(0, CD_CON));
        	//this.dsSelect.setColumn(nRow, "CD_ACNT_FROM", this.gfnNvl(CD_ACNT_FROM, "111110"));
        	//this.dsSelect.setColumn(nRow, "CD_ACNT_TO", this.gfnNvl(CD_ACNT_TO, "949000"));
        	this.dsSelect.setColumn(nRow, "CD_ACNT_FROM", this.gfnNvl(CD_ACNT_FROM, ""));
        	this.dsSelect.setColumn(nRow, "CD_ACNT_TO", this.gfnNvl(CD_ACNT_TO, ""));

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

        	if (!this.fnSelectValidate()) return false;

        	this.dsReportParam = new Dataset();
        	this.dsReportParam.addColumn("CD_CORP", "string");
        	this.dsReportParam.addColumn("DS_CORP", "string");
        	this.dsReportParam.addColumn("DT_FROM", "string");
        	this.dsReportParam.addColumn("DT_TO", "string");
        	this.dsReportParam.addColumn("CD_ACNT_FROM", "string");
        	this.dsReportParam.addColumn("DS_ACNT_FROM", "string");
        	this.dsReportParam.addColumn("CD_ACNT_TO", "string");
        	this.dsReportParam.addColumn("DS_ACNT_TO", "string");
        	this.dsReportParam.addColumn("CD_DEPT_ACNT", "string");
        	this.dsReportParam.addColumn("DS_DEPT_ACNT", "string");
        	this.dsReportParam.addColumn("DT_TERM", "string");

        	this.dsReportParam.clearData();
        	this.dsReportParam.addRow();

        	var CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");
        	var DS_CORP = this.dsSearch.getColumn(0, "DS_CORP");
        	var DT_FROM = this.dsSearch.getColumn(0, "DT_FROM");
        	var DT_TO = this.dsSearch.getColumn(0, "DT_TO");
        	var CD_ACNT_FROM = this.gfnTrim(this.dsSearch.getColumn(0, "CD_ACNT_FROM"));
        	var DS_ACNT_FROM = this.dsSearch.getColumn(0, "DS_ACNT_FROM");
        	var CD_ACNT_TO = this.gfnTrim(this.dsSearch.getColumn(0, "CD_ACNT_TO"));
        	var DS_ACNT_TO = this.dsSearch.getColumn(0, "DS_ACNT_TO");
        	var CD_DEPT_ACNT = this.dsSearch.getColumn(0, "CD_DEPT_ACNT");
        	var DS_DEPT_ACNT = this.dsSearch.getColumn(0, "DS_DEPT_ACNT");

        	DT_FROM = this.gfnNvl(DT_FROM, "20160101");
        	DT_TO = this.gfnNvl(DT_TO, "99991231");

        	var DT_FR_FROMAT = DT_FROM.substr(0,4) + "년 " + DT_FROM.substr(4,2)+"월 " + DT_FROM.substr(6,2) +"일";
        	var DT_TO_FROMAT = DT_TO.substr(0,4) + "년 " + DT_TO.substr(4,2)+"월 " + DT_TO.substr(6,2) +"일";

        	this.dsReportParam.setColumn(0, "CD_CORP", CD_CORP);
        	this.dsReportParam.setColumn(0, "DS_CORP", DS_CORP);
        	this.dsReportParam.setColumn(0, "CD_ACNT_FROM", CD_ACNT_FROM);
        	this.dsReportParam.setColumn(0, "DS_ACNT_FROM", DS_ACNT_FROM);
        	this.dsReportParam.setColumn(0, "CD_ACNT_TO", CD_ACNT_TO);
        	this.dsReportParam.setColumn(0, "DS_ACNT_TO", DS_ACNT_TO);
        	this.dsReportParam.setColumn(0, "DT_FROM", DT_FROM);
        	this.dsReportParam.setColumn(0, "DT_TO", DT_TO);
        	this.dsReportParam.setColumn(0, "DT_TERM", ("기 간 : " + DT_FR_FROMAT + " ~ " + DT_TO_FROMAT));
        	this.dsReportParam.setColumn(0, "CD_DEPT_ACNT", CD_DEPT_ACNT);
        	this.dsReportParam.setColumn(0, "DS_DEPT_ACNT", DS_DEPT_ACNT)


        	var CD_CON = (this.cboTYPE.value == "VENDOR") ?  "CD_VENDOR" : "CD_CON";	// VENDOR or REFNO
        	this.dsSelect.clearData();
        	var nRow = this.dsSelect.addRow();
        	this.dsSelect.setColumn(nRow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(nRow, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        	this.dsSelect.setColumn(nRow, "DT_FROM", this.dsSearch.getColumn(0, "DT_FROM"));
        	this.dsSelect.setColumn(nRow, "DT_TO", this.dsSearch.getColumn(0, "DT_TO"));
        	this.dsSelect.setColumn(nRow, "TY_CON", this.dsSearch.getColumn(0, "TY_CON"));
        	this.dsSelect.setColumn(nRow, "CD_CON", this.dsSearch.getColumn(0, CD_CON));
        	//this.dsSelect.setColumn(nRow, "CD_ACNT_FROM", this.gfnNvl(CD_ACNT_FROM, "111110"));
        	//this.dsSelect.setColumn(nRow, "CD_ACNT_TO", this.gfnNvl(CD_ACNT_TO, "949000"));
        	this.dsSelect.setColumn(nRow, "CD_ACNT_FROM", this.gfnNvl(CD_ACNT_FROM, ""));
        	this.dsSelect.setColumn(nRow, "CD_ACNT_TO", this.gfnNvl(CD_ACNT_TO, ""));

        	var inProc		= "_dsProc";
        	var inParam 	= "params=dsReportParam";
        	var inData      = "select=dsSelect";
        	var reportpath  = "/dh/dhe/DHE_ACCOUNTSELECT_PW.ozr";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        	return false;
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP")))
        	{
        		this.gfnAlert("법인코드를 입력 하세요.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}

        // 	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT_ACNT")))
        // 	{
        // 		this.gfnAlert("귀속부서를 입력 하세요.");
        // 		this.ccfCD_DEPT_ACNT.form.CDTextBox.setFocus();
        // 		return false;
        // 	}

        //	if (nexacro.toNumber(this.FormInfo.GR_SEARCH) == 7) {
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT_ACNT"))) {
        			this.gfnAlert("귀속부서를 입력 하세요.");
        			this.ccfCD_DEPT_ACNT.form.CDTextBox.setFocus();
        			return false;
        		}
        //	}

        	if (
        		this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT_ACNT")) && this.gfnIsNull(this.dsSearch.getColumn(0, "DT_FROM"))
        		&& this.gfnIsNull(this.dsSearch.getColumn(0, "CD_VENDOR")) && this.gfnIsNull(this.dsSearch.getColumn(0, "DS_ACNT_FROM"))
        		&& this.gfnIsNull(this.dsSearch.getColumn(0, "DS_ACNT_TO"))
        	)
        	{
        		this.gfnAlert("[귀속부서/회계일자/거래처/계정코드] 중 한개 이상의 값을 입력하세요.");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "DT_FROM")) || this.gfnIsNull(this.dsSearch.getColumn(0, "DT_TO")) )
        	{
        // 		this.gfnAlert("기간을 입력 하세요.");
        // 		this.ctclDT_FROM.setFocus();
        // 		return false;
        	}
        	else if ( this.gfnGetDiffDate(this.dsSearch.getColumn(0, "DT_FROM"), this.dsSearch.getColumn(0, "DT_TO")) < 0 )
        	{
        		this.gfnAlert("일자가 잘못 입력 되었습니다.");
        		this.ctclDT_TO.setFocus();
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
        		this.fnSetButton();
        		this.gfnGridAfterSelect(this.dxGrid);

        		trace(" fnCallback=>" + this.dsList.rowcount);
        	}
        	if (svcID == "selectTest") {
        		trace(this.dsListTest.saveXML());
        	}
        	if (svcID == "combo") {
        		if (errorCode == 0) {
        			var nrow = this.dsTY_PRINT.addRow();
        			this.dsTY_PRINT.setColumn(nrow, "CD_CODE", "");
        			this.dsTY_PRINT.setColumn(nrow, "DS_CODE", "전체");
        			this.divSearch.form.ccboTY_PRINT.set_index(0);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow)
        {
        	var sCdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        	switch(id) {
        		case "ccfCD_CORP":
        			dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        			//dsUserParam.setColumn(nrow, "LEVLV_DEPT", this.UserInfo.LEVLV_DEPT_ACNT);
        			//dsUserParam.setColumn(nrow, "LEVCD_DEPT", this.UserInfo.LEVCD_DEPT_ACNT);
        			break;
        		case "ccfCD_DEPT_ACNT":

        			if(this.gfnIsNull(sCdCorp)){
        				this.gfnAlert("법인코드를 선택하세요.");
        				return false;
        			}

        			dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        			dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "");						//전표발행여부
        			dsUserParam.setColumn(nrow, "CD_CORP"		, sCdCorp);					//법인코드
        			dsUserParam.setColumn(nrow, "YN_USE"		, "");						//사용여부
        			dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        			dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        			dsUserParam.setColumn(nrow, "GR_SEARCH"     , this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);
        			//dsUserParam.setColumn(nrow, "CD_DEPT"	    , "");
        			dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER", this.AuthClient.LEVCD_DEPT_UPPER);

        	//
        	// 		dsUserParam.setColumn(nrow, "LEVEL"		, this.UserInfo.LV_3);	//법인코드
        	// 		dsUserParam.setColumn(nrow, "ACNTUNIT"		, this.UserInfo.LEVCD_DEPT_ACNT);	//법인코드
        	// 		dsUserParam.setColumn(nrow, "CD_CORP"		, this.ccfCD_CORP.form.CDTextBox.value);	//법인코드
        			break;
        		case "ccfCD_ACNT_FROM":
        		case "ccfCD_ACNT_TO":
        		case "ccfCD_CON":
        			if(!this.gfnIsNull(sCdCorp)){
        				dsUserParam.setColumn(nrow, "CD_CORP", sCdCorp);
        			}else{
        				this.gfnAlert("법인코드는 필수입력 값입니다.");
        				return false;
        			}
        			break;
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData)
        {
        	if(id == "ccfCD_CORP") {
        		this.ccfCD_DEPT_ACNT.form.fnCodeFindClear();
        	}

        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_Celldblclick = function(obj,e)
        {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	//부모창 아이디
        	var parentId = this.getOwnerFrame().parent.id;
        	var idForm = parentId.substring(parentId.indexOf("#")+1, parentId.length);

        	if(idForm == "DHA_INVERSTMENT"){	// 투자현황관리
        		this.fnSetDataInverstment();
        		return;
        	}

        	//총계 합계 데이터일 경우 리턴
        	if(!this.gfnIsDate(nexacro.replaceAll(this.dsList.getColumn(this.dsList.rowposition, "DT_ACCOUNT"), "-", ""))){
        		return false;
        	}

        	var param = {};

        	var no_slip = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"));

        	if(this.gfnIsNull(no_slip))
        	{
        		this.gfnAlert("발행된 전표가 없습니다.");
        		return false;
        	}

        	param.CD_TRADE = no_slip;
        	param.IUD_FLAG = "S";
        	param.YN_JUNDO_START = "";

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);
        };

        // 투자현황관리 (DHA_INVERSTMENT)
        this.fnSetDataInverstment = function(){
        	var nAmDr = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition, "AM_DR"),0);
        	var json = {};
        	json.AM_INVESTMENT = nAmDr;	// 차변
        	this.getParentContext().close(JSON.stringify(json));
        }

        this.fnGrid_RowCellChanged = function(obj,e)
        {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	var objDs = obj.getBindDataset();
        	var rows = obj.getSelectedDatasetRows();
        	var sum = 0;
        	var bRet = true;

        	// 공통 > Setting > 그리드정보 에서 셋팅한 내용대로
        	var nGrdSpcRow = this.dsGridSpec.findRow( "DS_FIELD", colnm);
        	var TY_CELLTYPE = this.dsGridSpec.getColumn(nGrdSpcRow, "TY_CELLTYPE");
        	if(TY_CELLTYPE != "TEXT"){
        		for(var i = 0; i < rows.length; i++) {
        			var am = objDs.getColumn(rows[i], colnm);

        			bRet = isNaN(am); // 문자:true, 숫자:false

        			if(bRet == true){
        				break;
        			}

        			if(!this.gfnIsNull(am)) {
        				sum += nexacro.toNumber(am, 0);
        			}
        		}
        	}

        	// 숫자면 합계표시, 문자면 null
        	var textSummary = (bRet && TY_CELLTYPE == "TEXT") ? "" : this.gfnAppendComma(sum);
        	var colDSummary = obj.getBindCellIndex("body", "CD_ACCOUNT");
        	obj.setCellProperty("summ", colDSummary, "text", textSummary);
        }

        /************************************************************************
         * 로우 drag&drop 합계 구하기
         ************************************************************************/
        this.fnGrid_onlbuttondown = function(obj,e)
        {

            this.IsCtrl = true;

        	//trace("fnGrid_onlbuttondown: "+ this.IsDrag);
        };

        this.fnGrid_onlbuttonup = function(obj,e)
        {
            var colnm = this._gfnGridGetBindColumnNameByIndex(obj, e.cell);
            if(this.IsCtrl == true) {
        	   // trace("fnGrid_onlbuttonup: "+ this.IsDrag);
        		var nStartrow = obj.selectstartrow;
        		var nEndrow = obj.selectendrow;
        		var nStartCol = obj.selectstartcol;
        		var nEndCol = obj.selectendcol;
        		//trace("nStartrow=" +nStartrow+ ", nEndrow=" +nEndrow+", nStartCol=" +nStartCol+", nEndCol=" +nEndCol );
        		var nLoopCnt = nStartrow.length;

        		if(nStartCol == -1 && nEndCol == -1)
        			{
        				var objDs    = this.objects[obj.binddataset];

        				nStartCol = 0;
        				nEndCol = objDs.colcount-1;
        			}

        		this.dsSum.clearData();
        		this.fnSumInit();
        		this.fnSumCellPro();
        		for(var k=0; k < nLoopCnt; k++)
        		{
        			for (var i = nStartrow[k]; i <= nEndrow[k]; i++)
        			{
        				for (var j = nStartCol[k]; j <= nEndCol[k]; j++)
        				{
        				 // trace("i="+ i + " ,j= "+j + " ,k= "+k+"am_account= "+ this.dsList.getColumn(i, rowColumn));

        				  var rowColumn = this._gfnGridGetBindColumnNameByIndex(obj, j);
        				  if (nexacro.toNumber(this.dsList.getColumn(i, rowColumn)) != 0 &&
        					 (rowColumn == "AM_DR" || rowColumn == "AM_CR" || rowColumn =="AM_CHA" || rowColumn == "AM_EXEC_DR" || rowColumn == "AM_EXEC_CR" || rowColumn == "AM_LOCAL_DR" || rowColumn == "AM_LOCAL_CR" )) {
        					  var nRow = this.dsSum.addRow();
        					  this.dsSum.setColumn(nRow, "ROW", i);
        					  this.dsSum.setColumn(nRow, "COLUNM", rowColumn);
        					  this.dsSum.setColumn(nRow, "AM_ACCOUNT", nexacro.toNumber(this.dsList.getColumn(i, rowColumn)));
        					}
        				}
        			}
        		};

        		//trace(this.dsSum.saveXML());
        		if (this.dsSum.rowcount == 0) return;
        		this.gf_distincDsFilter(this.dsSum, "ROW,COLUNM"); // 중복자료 삭제
        		var amDr = this.dsSum.getCaseSum("COLUNM == 'AM_DR'", "AM_ACCOUNT");
        		var amCr = this.dsSum.getCaseSum("COLUNM == 'AM_CR'", "AM_ACCOUNT");
        		var amExecDr = this.dsSum.getCaseSum("COLUNM == 'AM_EXEC_DR'", "AM_ACCOUNT")*100;
        		var amExecCr = this.dsSum.getCaseSum("COLUNM == 'AM_EXEC_CR'", "AM_ACCOUNT")*100;
        		var amLocalDr = this.dsSum.getCaseSum("COLUNM == 'AM_LOCAL_DR'", "AM_ACCOUNT")*100;
        		var amLocalCr = this.dsSum.getCaseSum("COLUNM == 'AM_LOCAL_CR'", "AM_ACCOUNT")*100;
        		var amCha = this.dsSum.getCaseSum("COLUNM == 'AM_CHA'", "AM_ACCOUNT");

        		this.amSum = amDr - amCr;
        		this.amExec = nexacro.floor(amExecDr - amExecCr);
        		this.amLocal = nexacro.floor(amLocalDr - amLocalCr);
        		//trace("amSum="+ this.amSum + ", amExec = "+ this.amExec+ ", amLocal= "+ this.amLocal );
        		this.amCha = amCha;
        		trace(" amCha=>" + amCha);

        		this.fnSumCellPro();
        		//this.fnSumInit();

        	} else {
        		this.fnSumInit();
        	}
        };


        this.gf_distincDsFilter = function(objDs, sColID)
        {
        	var arrArgs	= sColID.split(",");
        	var sFilterExpr		= "";
        	var sFindRowExpr	= "";

        	for (var i=0; i<arrArgs.length; i++)
        	{
        		if (objDs.getColumnInfo(arrArgs[i]) == null) continue;

        		sFindRowExpr	+= (sFindRowExpr) ? " && " : "";
        		sFindRowExpr	+= "" + arrArgs[i] + "=='\" + " + arrArgs[i] + " + \"'";
        	}

        	if (sFindRowExpr) {
        		sFilterExpr	= "rowidx==dataset.findRowExpr(\"" + sFindRowExpr + "\")";
        	}
        	objDs.filter(sFilterExpr);
        };

        this.fnSumInit = function(){
        	this.amSum = 0;
        	this.amExec = 0;
        	this.amLocal = 0;
        	this.amCha = 0;
        }

        this.fnSumCellPro = function(){
        	if (this.amSum != 0) {
        		this.amSum = nexacro.floor(this.amSum)
        		var textSummary = this.gfnAppendComma(this.amSum);
        		this.dxGrid.setCellProperty("summ", this.dxGrid.getBindCellIndex("body", "CD_ACCOUNT"), "text", textSummary);
        	} else {
        		this.dxGrid.setCellProperty("summ", this.dxGrid.getBindCellIndex("body", "CD_ACCOUNT"), "text", "");
        	}
        	if (this.amCha != 0) {
        		this.amCha = nexacro.floor(this.amCha)
        		var textSummary = this.gfnAppendComma(this.amCha);
        		this.dxGrid.setCellProperty("summ", this.dxGrid.getBindCellIndex("body", "AM_CHA"), "text", textSummary);
        	} else {
        		this.dxGrid.setCellProperty("summ", this.dxGrid.getBindCellIndex("body", "AM_CHA"), "text", "");
        	}

        	if (this.amExec != 0) {
        		this.amExec = nexacro.floor(this.amExec)/100
        		var textSummary = this.gfnAppendComma(this.amExec);
        		this.dxGrid.setCellProperty("summ", this.dxGrid.getBindCellIndex("body", "AM_EXEC_DR"), "text", textSummary);
        	} else {
        		this.dxGrid.setCellProperty("summ", this.dxGrid.getBindCellIndex("body", "AM_EXEC_DR"), "text", "");
        	}

        	if (this.amLocal != 0) {
        		this.amLocal = nexacro.floor(this.amLocal)/100
        		var textSummary = this.gfnAppendComma(this.amLocal);
        		this.dxGrid.setCellProperty("summ", this.dxGrid.getBindCellIndex("body", "AM_LOCAL_DR"), "text", textSummary);
        	} else {
        		this.dxGrid.setCellProperty("summ", this.dxGrid.getBindCellIndex("body", "AM_LOCAL_DR"), "text", "");
        	}
        }


        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        this.fnTbbHistory = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	var param = {};

        	var no_slip = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"));

        	if (!this.gfnGridIsRow(this.dxGrid) || no_slip == "SUMMARY") { return false; }

        	if(no_slip == "" || this.gfnIsNull(no_slip)){
        		this.gfnAlert("발행된 전표가 없습니다.");
        		return false;
        	}

        	param.CD_TRADE = no_slip;
        	param.IUD_FLAG = "S";
        	param.YN_JUNDO_START = "";

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);

        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){
        		if (e.columnid=="TY_PRINT")
        		{
        			this.fnsetGridCellProperty();
        		}else{
        			this.gfnSetFormStatus(this);
        			this.gfnGridClear(this.dxGrid);

        			if(e.columnid == "TY_CON"){
        				this.ccfCD_CON.form.fnCodeFindClear();
        				this.dsSearch.setColumn(0, "CD_CON", "");

        				this.ccfCD_CON.set_visible((e.newvalue == "VENDOR"));
        				this.txtCD_CON.set_visible((e.newvalue == "REFNO") );
        			}
        		}
        	}
        };

        this.fnsetGridCellProperty = function() {
        	var TY_PRINT = this.dsSearch.getColumn(0, "TY_PRINT");

        	var nCellIdxNM_ACCOUNT = this.dxGrid.getBindCellIndex("body", "NM_ACCOUNT");
        	var nCellIdxDS_ACCOUNT_ENG = this.dxGrid.getBindCellIndex("body", "DS_ACCOUNT_ENG");
        	this.dxGrid.setFormatColProperty(nCellIdxNM_ACCOUNT	, "size", (TY_PRINT == "ENG") ? 0 : 150);
        	this.dxGrid.setFormatColProperty(nCellIdxDS_ACCOUNT_ENG	, "size", (TY_PRINT == "KOR") ? 0 : 150);
        }

        // 콤보 조회
        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DH");
        	this.dsCombo.setColumn(0, "CD_TYPE", "A25");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_PRINT=combo0";
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ctclDT_FROM.addEventHandler("onchanged",this.divSearch_ctclDT_FROM_onchanged,this);
            this.divSearch.form.ctclDT_TO.addEventHandler("onchanged",this.divSearch_ctclDT_TO_onchanged,this);
            this.divSearch.form.cboTYPE.addEventHandler("onitemchanged",this.divSearch_cboTYPE_onitemchanged,this);
            this.divSearch.form.staCD_SYSTEM00_00.addEventHandler("onclick",this.divSearch_staCD_SYSTEM_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHE_ACCOUNTSELECT_PW.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
