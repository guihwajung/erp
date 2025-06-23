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
            this.set_titletext("현장공통매입세액관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_IMMOVABLE_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHVPR_IMMOVABLE_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHVPR_IMMOVABLE_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHVPR_IMMOVABLE_DELETE</Col></Row><Row><Col id=\"TARGET\">transfer</Col><Col id=\"SP\">DHVPR_IMMOVABLE_ALL_INSERT</Col></Row><Row><Col id=\"TARGET\">monthly</Col><Col id=\"SP\">DHVPR_IMMOVABLE_GET</Col></Row><Row><Col id=\"TARGET\">calc</Col><Col id=\"SP\">DHVPR_IMMOVABLE_CALCULATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"YY_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNO_TAX", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">1기예정</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">1기확정</Col></Row><Row><Col id=\"CD_CODE\">3</Col><Col id=\"DS_CODE\">2기예정</Col></Row><Row><Col id=\"CD_CODE\">4</Col><Col id=\"DS_CODE\">2기확정</Col></Row></Rows>");
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

            obj = new Grid("objGrid","0","15",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_DEP","405","-34","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsYN_DEP");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
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
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DHV_IMMOVABLE.xfdl", function() {
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
        	this.btnDataTransfer = this.gfnFormButtonAdd("DataTransfer", "fnDataTransfer")
         	this.btnCalcMonthlyRent = this.gfnFormButtonAdd("CalcMonthlyRent", "fnCalcMonthlyRent"); ;
         	this.btnCalcInterest = this.gfnFormButtonAdd("CalcInterest", "fnCalcInterest");

        	this.btnDataTransfer.set_enable(false);
        	this.btnCalcInterest.set_enable(false);
        	this.btnCalcMonthlyRent.set_enable(false);
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
        };

        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHV_IMMOVABLE");

         	this.gfnGridColumnColor(this.dxGrid, "", "BACK_SoKe", "[YM_MAGAM]=='000000'", true);

        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        }

        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SELFACNT", "string");
        	this.dsSelect.addColumn("YM_MAGAM", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_SELFACNT", "string");
        	this.dsInsert.addColumn("YM_MAGAM", "string");
        	this.dsInsert.addColumn("RT_TAX", "bigdecimal");
        	this.dsInsert.addColumn("TY_FLOOR", "string");
        	this.dsInsert.addColumn("DS_FLOOR", "bigdecimal");
        	this.dsInsert.addColumn("DS_HO", "string");
        	this.dsInsert.addColumn("NO_SIZE", "bigdecimal");
        	this.dsInsert.addColumn("DS_DONG", "string");
        	this.dsInsert.addColumn("CD_VENDOR", "string");
        	this.dsInsert.addColumn("DT_IN", "string");
        	this.dsInsert.addColumn("DT_OUT", "string");
        	this.dsInsert.addColumn("AM_DEPOSIT", "bigdecimal");
        	this.dsInsert.addColumn("AM_MONTHLYRENT", "bigdecimal");
        	this.dsInsert.addColumn("AM_INTEREST", "bigdecimal");
        	this.dsInsert.addColumn("AM_TOTALRENT", "bigdecimal");
        	this.dsInsert.addColumn("DT_RENEW", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_SELFACNT", "string");
        	this.dsUpdate.addColumn("YM_MAGAM", "string");
        	this.dsUpdate.addColumn("NO_SEQ", "string");
        	this.dsUpdate.addColumn("RT_TAX", "bigdecimal");
        	this.dsUpdate.addColumn("TY_FLOOR", "string");
        	this.dsUpdate.addColumn("DS_FLOOR", "bigdecimal");
        	this.dsUpdate.addColumn("DS_HO", "string");
        	this.dsUpdate.addColumn("NO_SIZE", "bigdecimal");
        	this.dsUpdate.addColumn("DS_DONG", "string");
        	this.dsUpdate.addColumn("CD_VENDOR", "string");
        	this.dsUpdate.addColumn("DT_IN", "string");
        	this.dsUpdate.addColumn("DT_OUT", "string");
        	this.dsUpdate.addColumn("AM_DEPOSIT", "bigdecimal");
        	this.dsUpdate.addColumn("AM_MONTHLYRENT", "bigdecimal");
        	this.dsUpdate.addColumn("AM_INTEREST", "bigdecimal");
        	this.dsUpdate.addColumn("AM_TOTALRENT", "bigdecimal");
        	this.dsUpdate.addColumn("DT_RENEW", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_SELFACNT", "string");
        	this.dsDelete.addColumn("YM_MAGAM", "string");
        	this.dsDelete.addColumn("NO_SEQ", "string");

        	this.dsExecute = new Dataset();
        	this.dsExecute.addColumn("CD_SELFACNT", "string");
        	this.dsExecute.addColumn("YM_MAGAM", "string");

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

        	this.dsSelect.setColumn(0, "CD_SELFACNT", this.gfnTrim(this.dsSearch.getColumn(0, "CD_DEPT")));
        	this.dsSelect.setColumn(0, "YM_MAGAM", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_TO"), "-", ""));

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
        	var nrow = this.gfnGridAdd(this.dxGrid);
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
        				this.dsInsert.setColumn(nrow, "CD_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT"));
        				this.dsInsert.setColumn(nrow, "YM_MAGAM", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_TO"), "-", ""));
        				this.dsInsert.setColumn(nrow, "RT_TAX", this.dsList.getColumn(i, "RT_TAX"));
        				this.dsInsert.setColumn(nrow, "TY_FLOOR", this.dsList.getColumn(i, "TY_FLOOR"));
        				this.dsInsert.setColumn(nrow, "DS_FLOOR", this.dsList.getColumn(i, "DS_FLOOR"));
        				this.dsInsert.setColumn(nrow, "DS_HO", this.dsList.getColumn(i, "DS_HO"));
        				this.dsInsert.setColumn(nrow, "NO_SIZE", this.dsList.getColumn(i, "NO_SIZE"));
        				this.dsInsert.setColumn(nrow, "DS_DONG", this.dsList.getColumn(i, "DS_DONG"));
        				this.dsInsert.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsInsert.setColumn(nrow, "DT_IN", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(i, "DT_IN")), "-", ""));
        				this.dsInsert.setColumn(nrow, "DT_OUT", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(i, "DT_OUT")), "-", ""));
        				this.dsInsert.setColumn(nrow, "AM_DEPOSIT", this.dsList.getColumn(i, "AM_DEPOSIT"));
        				this.dsInsert.setColumn(nrow, "AM_MONTHLYRENT", this.dsList.getColumn(i, "AM_MONTHLYRENT"));
        				this.dsInsert.setColumn(nrow, "AM_INTEREST", this.dsList.getColumn(i, "AM_INTEREST"));
        				this.dsInsert.setColumn(nrow, "AM_TOTALRENT", this.dsList.getColumn(i, "AM_TOTALRENT"));
        				this.dsInsert.setColumn(nrow, "DT_RENEW", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(i, "DT_RENEW")), "-", ""));
        				break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT"));
        				this.dsUpdate.setColumn(nrow, "YM_MAGAM", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_TO"), "-", ""));
        				this.dsUpdate.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsUpdate.setColumn(nrow, "RT_TAX", this.dsList.getColumn(i, "RT_TAX"));
        				this.dsUpdate.setColumn(nrow, "TY_FLOOR", this.dsList.getColumn(i, "TY_FLOOR"));
        				this.dsUpdate.setColumn(nrow, "DS_FLOOR", this.dsList.getColumn(i, "DS_FLOOR"));
        				this.dsUpdate.setColumn(nrow, "DS_HO", this.dsList.getColumn(i, "DS_HO"));
        				this.dsUpdate.setColumn(nrow, "NO_SIZE", this.dsList.getColumn(i, "NO_SIZE"));
        				this.dsUpdate.setColumn(nrow, "DS_DONG", this.dsList.getColumn(i, "DS_DONG"));
        				this.dsUpdate.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsUpdate.setColumn(nrow, "DT_IN", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(i, "DT_IN")), "-", ""));
        				this.dsUpdate.setColumn(nrow, "DT_OUT", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(i, "DT_OUT")), "-", ""));
        				this.dsUpdate.setColumn(nrow, "AM_DEPOSIT", this.dsList.getColumn(i, "AM_DEPOSIT"));
        				this.dsUpdate.setColumn(nrow, "AM_MONTHLYRENT", this.dsList.getColumn(i, "AM_MONTHLYRENT"));
        				this.dsUpdate.setColumn(nrow, "AM_INTEREST", this.dsList.getColumn(i, "AM_INTEREST"));
        				this.dsUpdate.setColumn(nrow, "AM_TOTALRENT", this.dsList.getColumn(i, "AM_TOTALRENT"));
        				this.dsUpdate.setColumn(nrow, "DT_RENEW", nexacro.replaceAll(this.gfnNvl(this.dsList.getColumn(i, "DT_RENEW")), "-", ""));
        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_SELFACNT", this.dsList.getColumn(i, "CD_SELFACNT"));
        				this.dsDelete.setColumn(nrow, "YM_MAGAM", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_TO"), "-", ""));
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
        	//DHV_IMMOVABLE_REPORT
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
        	var validate = true;
        	var msg = "";

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		if (flag == "" || flag == "D") continue;

        		var tax = nexacro.toNumber(this.dsList.getColumn(i, "RT_TAX"), 0);
        		if (tax >= 100) {
        			msg += (i + 1) + "열: 적용 이율은 100을 넘지 못합니다.\n";
        			validate = false;
        		}

        		if (!this.gfnIsNull(this.dsList.getColumn(i, "DT_RENEW"))
        			&& (this.gfnIsNull(this.dsList.getColumn(i, "DT_IN")) || this.gfnIsNull(this.dsList.getColumn(i, "DT_OUT")))) {
        			msg += (i + 1) + "열: 갱신일이 입력된경우 입주일과 퇴거일을 반드시 입력 하셔야 합니다.\n";
        			validate = false;
        		}
        	}

        	if (!validate) {
        		var arrError = [msg];
        		this.gfnAlert("msg.err.validator", arrError);
        		return false;
        	}
        	return validate;
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {

        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		if (this.dsList.rowcount > 0) {
        			if (this.FormInfo.TY_AUTH != "R") {
        				this.btnCalcInterest.set_enable(true);
        				this.btnCalcMonthlyRent.set_enable(true);
        			}
        			this.btnDataTransfer.set_enable(false);

        			if (this.dsList.getColumn(this.dsList.rowcount-1, "YM_MAGAM") == "000000") {
        				this.dsList.set_enableevent(false);
        				this.dsList.setColumn(this.dsList.rowcount-1, "DS_FLOOR", "");
        				this.dsList.setColumn(this.dsList.rowcount-1, "CD_VENDOR", "합계");
        				this.dsList.set_enableevent(true);
        			}
        		}
        		else {
        			if (this.FormInfo.TY_AUTH != "R") {
        				this.btnDataTransfer.set_enable(true);
        			}
        		}
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == "transfer") {
        		if (errorCode == 0) {
        			this.gfnAlert("자료이관 작업이 완료되었습니다.");
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == "monthly"){
        		if (errorCode == 0) {
        			this.fnExecute_callback = function() {
        				this.FormBtns.Select.click();
        			}
        			this.gfnAlert("월세계산 작업이 완료되었습니다.", "fnExecute_callback");
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "calc"){
        		if (errorCode == 0) {
        			this.fnExecute_callback = function() {
        				this.FormBtns.Select.click();
        			}
        			this.gfnAlert("이자계산 작업이 완료되었습니다.", "fnExecute_callback");
        		}
        		else {
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
        this.fnGrid_EnterCell = function(obj, row, cell) {
        	if (this.dsList.getColumn(row, "YM_MAGAM") == "000000")
        		return false;
        }

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "DHX_CFVENDOR") {
        		dsUserParam.setColumn(nrow, "TY_VENDOR", "Z");
        		dsUserParam.setColumn(nrow, "CD_CORP", "");
        	}
        	return true;
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

        //전기수 자료이관
        this.fnDataTransfer = function(obj,e) {
        	this.gfnConfirm("자료이관 하시겠습니까?", "fnDataTransfer_callBack");
        }

        this.fnDataTransfer_callBack = function(strId, val) {
        	if (val == false) return;

        	this.dsExecute.clearData();
        	this.dsExecute.addRow();
        	this.dsExecute.setColumn(0, "CD_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsExecute.setColumn(0, "YM_MAGAM", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_TO"), "-", ""));

        	var strSvcId    = "transfer";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "transfer=dsExecute";
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

        //월세계산
        this.fnCalcMonthlyRent = function (obj,e) {
        	this.gfnConfirm("월세계산 하시겠습니까?", "fnCalcMonthlyRent_callBack");
        };

        this.fnCalcMonthlyRent_callBack = function(strId, val) {
        	if (val == false) return;

        	this.dsExecute.clearData();
        	this.dsExecute.addRow();
        	this.dsExecute.setColumn(0, "CD_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsExecute.setColumn(0, "YM_MAGAM", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_TO"), "-", ""));

        	var strSvcId    = "monthly";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "monthly=dsExecute";
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

        //이자계산
        this.fnCalcInterest = function (obj,e) {
        	this.gfnConfirm("이자계산 하시겠습니까?", "fnCalcInterest_callBack");
        };

        this.fnCalcInterest_callBack = function(strId, val) {
        	if (val == false) return;

        	this.dsExecute.clearData();
        	this.dsExecute.addRow();
        	this.dsExecute.setColumn(0, "CD_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsExecute.setColumn(0, "YM_MAGAM", nexacro.replaceAll(this.dsSearch.getColumn(0, "DT_TO"), "-", ""));

        	var strSvcId    = "calc";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "calc=dsExecute";
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
        				dtFrom = ymMagam + "-01";
        				dtTo = ymMagam + "-03";
        				break;
        			case "2" :
        				dtFrom = ymMagam + "-04";
        				dtTo = ymMagam + "-06";
        				break;
        			case "3" :
        				dtFrom = ymMagam + "-07";
        				dtTo = ymMagam + "-09";
        				break;
        			case "4" :
        				dtFrom = ymMagam + "-10";
        				dtTo = ymMagam + "-12";
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
            this.divData.form.rdoYN_DEP.addEventHandler("onitemchanged",this.rdo00_onitemchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHV_IMMOVABLE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
