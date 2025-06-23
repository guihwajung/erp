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
            this.set_titletext("외화획득명세서");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"DS_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DOC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UNREASON\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DOC\" type=\"STRING\" size=\"256\"/><Column id=\"DT_DOC\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SUPPLY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NATION\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_WON_SP\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_FOREIGN_SP\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_FOREIGNCUR_GAIN_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHVPR_FOREIGNCUR_GAIN_UPDATE</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHVPR_FOREIGNCUR_GAIN_INSERT</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHVPR_FOREIGNCUR_GAIN_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"YY_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNO_TAX", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">1기예정</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">1기확정</Col></Row><Row><Col id=\"CD_CODE\">3</Col><Col id=\"DS_CODE\">2기예정</Col></Row><Row><Col id=\"CD_CODE\">4</Col><Col id=\"DS_CODE\">2기확정</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_DOC", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">여</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"NAME\">부</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","240","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("세무단위");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","sta00:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFSELFACNT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYY_WORK","ccfCD_DEPT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("작성년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYY_WORK","staYY_WORK:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYY_WORK00","ctclYY_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("작성기수");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboNO_TAX","staYY_WORK00:0.0","10.0","98","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsNO_TAX");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_FROM","ccboNO_TAX:5","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            obj.set_inputtype("digit");
            obj.set_readonly("true");
            obj.set_text("2020-04-04");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_WORK","ctxtDT_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_TO","staDT_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            obj.set_inputtype("digit");
            obj.set_readonly("true");
            obj.set_text("2020-04-04");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","3","30","150","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("7) 영세율 적용근거");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","3","124",null,null,"-3","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg00","sta00:-1","30","1044","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg01","152","56","542","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","573","56","220","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("9) 법정서식 제출 불능사유");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","573","sta00:-27","220","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("10) 법정서식 제출 가능여부 및 일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg03","sta03:-1","staBg00:-1","404","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE","10","-1",null,"30","-10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("기본사항");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03_00","3","56","150","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("8) 법정제출 서류명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_BASE","157","34","383","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_maxlength("0");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_UNREASON","798","59","353","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_maxlength("0");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_DOC","157","59","382","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_maxlength("0");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_DOC","805","34","129","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_direction("vertical");
            obj.set_font("normal 10pt/normal \"Arial\"");
            obj.set_innerdataset("dsYN_DOC");
            obj.set_text("여");
            obj.set_value("Y");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_DOC","921","34","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE00","10","89",null,"30","-10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("외화획득명세");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclYY_WORK.form.TextBox","value","dsSearch","YY_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccboNO_TAX","value","dsSearch","NO_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctxtDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctxtDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.rdoYN_DOC","value","dsList","YN_DOC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.txtDS_BASE","value","dsList","DS_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.calDT_DOC","value","dsList","DT_DOC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.txtDS_UNREASON","value","dsList","DS_UNREASON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.txtDS_DOC","value","dsList","DS_DOC");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DHV_FORCURR_GAIN.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetParameter();
        	this.fnSetEvent();

        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);

        	this.dsSearch.setColumn(0, "YY_WORK", this.gfnGetDate().substring(0, 4));
        	this.dsSearch.setColumn(0, "CD_DEPT", this.UserInfo.CD_DEPT_SELFACNT);
        	if (!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT")))
        		this.ccfCD_DEPT.form.fnCodeFindLoad();
        };

        this.fnSetButton = function() {
        }

        this.fnSetExtendButton = function() {
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;	// 법인코드
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;
        	this.ctclYY_WORK = this.divSearch.form.ctclYY_WORK;
        	this.ccboNO_TAX = this.divSearch.form.ccboNO_TAX;
        	this.ctxtDT_FROM = this.divSearch.form.ctxtDT_FROM;
        	this.ctxtDT_TO = this.divSearch.form.ctxtDT_TO;

        	this.dxGrid = this.divData.form.objGrid;

            this.txtDS_BASE = this.divData.form.txtDS_BASE;
        	this.rdoYN_DOC = this.divData.form.rdoYN_DOC;
        	this.calDT_DOC = this.divData.form.calDT_DOC;
        	this.txtDS_DOC = this.divData.form.txtDS_DOC;
        	this.txtDS_UNREASON = this.divData.form.txtDS_UNREASON;
        };

        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHV_FORCURR_GAIN");

        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";
            this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	this.dsList.addEventHandler("onvaluechanged", this.dsList_onvaluechanged, this);

        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        }

        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsSelect.addColumn("YR_TAX", "string");
        	this.dsSelect.addColumn("NO_TAX", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsInsert.addColumn("YR_TAX", "string");
        	this.dsInsert.addColumn("NO_TAX", "int");
        	this.dsInsert.addColumn("DS_BASE", "string");
        	this.dsInsert.addColumn("DS_DOC", "string");
        	this.dsInsert.addColumn("DS_UNREASON", "string");
        	this.dsInsert.addColumn("YN_DOC", "string");
        	this.dsInsert.addColumn("DT_DOC", "string");
        	this.dsInsert.addColumn("DT_SUPPLY", "string");
        	this.dsInsert.addColumn("DS_VENDOR", "string");
        	this.dsInsert.addColumn("CD_NATION", "string");
        	this.dsInsert.addColumn("TY_GUBUN", "string");
        	this.dsInsert.addColumn("DS_REM", "string");
        	this.dsInsert.addColumn("AM_WON_SP", "bigdecimal");
        	this.dsInsert.addColumn("AM_FOREIGN_SP", "bigdecimal");
        	this.dsInsert.addColumn("ID_INSERT", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsUpdate.addColumn("YR_TAX", "string");
        	this.dsUpdate.addColumn("NO_TAX", "int");
        	this.dsUpdate.addColumn("NO_SEQ", "int");
        	this.dsUpdate.addColumn("DS_BASE", "string");
        	this.dsUpdate.addColumn("DS_DOC", "string");
        	this.dsUpdate.addColumn("DS_UNREASON", "string");
        	this.dsUpdate.addColumn("YN_DOC", "string");
        	this.dsUpdate.addColumn("DT_DOC", "string");
        	this.dsUpdate.addColumn("DT_SUPPLY", "string");
        	this.dsUpdate.addColumn("DS_VENDOR", "string");
        	this.dsUpdate.addColumn("CD_NATION", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("DS_REM", "string");
        	this.dsUpdate.addColumn("AM_WON_SP", "bigdecimal");
        	this.dsUpdate.addColumn("AM_FOREIGN_SP", "bigdecimal");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsDelete.addColumn("YR_TAX", "string");
        	this.dsDelete.addColumn("NO_TAX", "int");
        	this.dsDelete.addColumn("NO_SEQ", "int");

        	this.dsSelectUser = new Dataset();
        	this.dsSelectUser.addColumn("ID_USER", "string");
        	this.dsSelectUser.addColumn("CD_DEPT", "string");
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        this.fnSelect = function() {
        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_DEPT_SELFACNT", this.gfnTrim(this.dsSearch.getColumn(0, "CD_DEPT")));
        	this.dsSelect.setColumn(0, "YR_TAX", this.dsSearch.getColumn(0, "YY_WORK"));
        	this.dsSelect.setColumn(0, "NO_TAX", this.dsSearch.getColumn(0, "NO_TAX"));

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
        };

        this.fnAdd = function() {

            var oldRow = this.dsList.rowcount
            var nRow = this.gfnGridAdd(this.dxGrid);
        	this.dsList.set_enableevent(false);
        	//trace("fnAdd  oldRow=>" + oldRow);

        	if (oldRow == 0)
        	{
        		this.dsList.setColumn(nRow, "DS_BASE", "");
        		this.dsList.setColumn(nRow, "DT_DOC", "");
        		this.dsList.setColumn(nRow, "DS_DOC", "");
        		this.dsList.setColumn(nRow, "DS_UNREASON", "");
        		this.dsList.setColumn(nRow, "YN_DOC", "Y");
        	}
        	else
        	{
        		this.dsList.setColumn(nRow, "DS_BASE", this.dsList.getColumn(oldRow , "DS_BASE"));					// 계좌구분
        		this.dsList.setColumn(nRow, "DT_DOC", this.dsList.getColumn(oldRow , "DT_DOC"));
        		this.dsList.setColumn(nRow, "DS_DOC", this.dsList.getColumn(oldRow , "DS_DOC"));
        		this.dsList.setColumn(nRow, "DS_UNREASON", this.dsList.getColumn(oldRow , "DS_UNREASON"));
        		this.dsList.setColumn(nRow, "YN_DOC", this.dsList.getColumn(oldRow, "YN_DOC"));
        	}

        	this.dsList.set_enableevent(true);

        	this.dsList.set_rowposition(nRow);
        	this.dxGrid.setCellPos(1);
        	this.fnReadOnlySetting(false);
        }

        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        }

        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;
        	if (!this.fnSaveValidate()) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT"));
        				this.dsInsert.setColumn(nrow, "YR_TAX", this.dsSearch.getColumn(0, "YY_WORK"));
        				this.dsInsert.setColumn(nrow, "NO_TAX", this.dsSearch.getColumn(0, "NO_TAX"));
        				this.dsInsert.setColumn(nrow, "DS_BASE", this.dsList.getColumn(i, "DS_BASE"));
        				this.dsInsert.setColumn(nrow, "DS_DOC", this.dsList.getColumn(i, "DS_DOC"));
        				this.dsInsert.setColumn(nrow, "DS_UNREASON", this.dsList.getColumn(i, "DS_UNREASON"));
        				this.dsInsert.setColumn(nrow, "YN_DOC", this.dsList.getColumn(i, "YN_DOC"));
        				this.dsInsert.setColumn(nrow, "DT_DOC", this.dsList.getColumn(i, "DT_DOC"));
        				this.dsInsert.setColumn(nrow, "DT_SUPPLY", this.dsList.getColumn(i, "DT_SUPPLY"));
        				this.dsInsert.setColumn(nrow, "DS_VENDOR", this.dsList.getColumn(i, "DS_VENDOR"));
        				this.dsInsert.setColumn(nrow, "CD_NATION", this.dsList.getColumn(i, "CD_NATION"));
        				this.dsInsert.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i, "TY_GUBUN"));
        				this.dsInsert.setColumn(nrow, "DS_REM", this.dsList.getColumn(i, "DS_REM"));
        				this.dsInsert.setColumn(nrow, "AM_WON_SP", this.dsList.getColumn(i, "AM_WON_SP"));
        				this.dsInsert.setColumn(nrow, "AM_FOREIGN_SP", this.dsList.getColumn(i, "AM_FOREIGN_SP"));
        				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        				break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT"));
        				this.dsUpdate.setColumn(nrow, "YR_TAX", this.dsSearch.getColumn(0, "YY_WORK"));
        				this.dsUpdate.setColumn(nrow, "NO_TAX", this.dsSearch.getColumn(0, "NO_TAX"));
        				this.dsUpdate.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsUpdate.setColumn(nrow, "DS_BASE", this.dsList.getColumn(i, "DS_BASE"));
        				this.dsUpdate.setColumn(nrow, "DS_DOC", this.dsList.getColumn(i, "DS_DOC"));
        				this.dsUpdate.setColumn(nrow, "DS_UNREASON", this.dsList.getColumn(i, "DS_UNREASON"));
        				this.dsUpdate.setColumn(nrow, "YN_DOC", this.dsList.getColumn(i, "YN_DOC"));
        				this.dsUpdate.setColumn(nrow, "DT_DOC", this.dsList.getColumn(i, "DT_DOC"));
        				this.dsUpdate.setColumn(nrow, "DT_SUPPLY", this.dsList.getColumn(i, "DT_SUPPLY"));
        				this.dsUpdate.setColumn(nrow, "DS_VENDOR", this.dsList.getColumn(i, "DS_VENDOR"));
        				this.dsUpdate.setColumn(nrow, "CD_NATION", this.dsList.getColumn(i, "CD_NATION"));
        				this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i, "TY_GUBUN"));
        				this.dsUpdate.setColumn(nrow, "DS_REM", this.dsList.getColumn(i, "DS_REM"));
        				this.dsUpdate.setColumn(nrow, "AM_WON_SP", this.dsList.getColumn(i, "AM_WON_SP"));
        				this.dsUpdate.setColumn(nrow, "AM_FOREIGN_SP", this.dsList.getColumn(i, "AM_FOREIGN_SP"));
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);

        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT"));
        				this.dsDelete.setColumn(nrow, "YR_TAX", this.dsSearch.getColumn(0, "YY_WORK"));
        				this.dsDelete.setColumn(nrow, "NO_TAX", this.dsSearch.getColumn(0, "NO_TAX"));
        				this.dsDelete.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
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

        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        this.fnPrint = function() {
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidation = function() {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_DEPT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("세무단위를 입력하세요.", "fnVaidateCallback");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YY_WORK"))) {
        		this.fnVaidateCallback = function() {
        			this.ctclYY_WORK.form.TextBox.setFocus();
        		}
        		this.gfnAlert("작성년도를 입력하세요.", "fnVaidateCallback");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "NO_TAX"))) {
        		this.fnVaidateCallback = function() {
        			this.ccboNO_TAX.setFocus();
        		}
        		this.gfnAlert("작성기수를 입력하세요.", "fnVaidateCallback");
        		return false;
        	}

        	return true;
        }

        this.fnSaveValidate = function() {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_DEPT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("세무단위를 입력하세요.", "fnVaidateCallback");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YY_WORK"))) {
        		this.fnVaidateCallback = function() {
        			this.ctclYY_WORK.form.TextBox.setFocus();
        		}
        		this.gfnAlert("작성년도를 입력하세요.", "fnVaidateCallback");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "NO_TAX"))) {
        		this.fnVaidateCallback = function() {
        			this.ccboNO_TAX.setFocus();
        		}
        		this.gfnAlert("작성기수를 입력하세요.", "fnVaidateCallback");
        		return false;
        	}

        	return true;
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {

        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		this.fnReadOnlySetting();
        	}
        	else if (svcID == "save") {
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
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var cdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        			break;

        		case "ccfCD_DEPT": // 세무단위
        			if (this.gfnIsNull(cdCorp)) {
        				this.gfnAlert("법인코드를 먼저 선택하세요.");
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        				return false;
        			}
        			dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        			//dsUserParam.setColumn(nrow, "LV_DEPT", this.UserInfo.LEVLV_DEPT_ACNT);
        			break;
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;

        	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			this.ccfCD_DEPT.form.fnCodeFindClear();
        			break;
        	}
        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.dsList_onvaluechanged = function(obj,e)
        {
        	if (e.oldvalue != e.newvalue) {
        		if (e.columnid ==  "YN_DOC") {
        			this.fnReadOnlySetting(true);
        		}
        	}
        }

        this.fnReadOnlySetting  = function(val){
         var ynDoc = this.dsList.getColumn(this.dsList.rowposition, "YN_DOC");

         //trace(" fnReadOnlySetting ynDoc=>" + ynDoc);
         if (ynDoc == "Y")
         {
         	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "DT_DOC"), "edittype", "text");
            this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "DS_DOC"), "edittype", "text");
            this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "DS_UNREASON"), "edittype", "none");
        	this.calDT_DOC.set_enable(true);
        	this.txtDS_DOC.set_enable(true);
        	this.txtDS_UNREASON.set_enable(false);
        	if (val)
        	{
        		this.txtDS_UNREASON.set_value("");
        	}
         }
         else
         {
         	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "DT_DOC"), "edittype", "none");
            this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "DS_DOC"), "edittype", "none");
            this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "DS_UNREASON"), "edittype", "text");
            this.calDT_DOC.set_enable(false);
        	this.txtDS_DOC.set_enable(false);
        	this.txtDS_UNREASON.set_enable(true);
        	if (val)
        	{
        		this.txtDS_DOC.set_value("");
        		this.calDT_DOC.set_value("");
        	}
         }
        }


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
            if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);

        		switch(e.columnid) {
        			case "YY_WORK" :
        			case "NO_TAX" :
        				this.fnMagamSetting();
        				break;
        		}
            }
        }

        this.fnMagamSetting = function() {
        	var dtFrom;
        	var dtTo;

        	var ymMagam = this.dsSearch.getColumn(0, "YY_WORK");
        	var noTax = this.dsSearch.getColumn(0, "NO_TAX");

        	if (this.gfnIsNull(ymMagam) || this.gfnIsNull(noTax)) {
        		dtFrom = "";
        		dtTo = "";
        	}
        	else {
        		switch(noTax) {
        			case "1" :
        				dtFrom = ymMagam + "-01-01";
        				dtTo = ymMagam + "-03-31";
        				break;
        			case "2" :
        				dtFrom = ymMagam + "-04-01";
        				dtTo = ymMagam + "-06-30";
        				break;
        			case "3" :
        				dtFrom = ymMagam + "-07-01";
        				dtTo = ymMagam + "-09-20";
        				break;
        			case "4" :
        				dtFrom = ymMagam + "-10-01";
        				dtTo = ymMagam + "-12-31";
        				break;
        			default :
        				dtFrom = "";
        				dtTo = "";
        				break;
        		}
        	}

        	this.dsSearch.setColumn(0, "DT_FROM", dtFrom);
        	this.dsSearch.setColumn(0, "DT_TO", dtTo);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.rdoYN_DOC.addEventHandler("onitemchanged",this.divData_rdoYN_DOC_onitemchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHV_FORCURR_GAIN.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
