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
            this.set_titletext("자동전표 코드등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBTPR_CAUSESTATE_SELECT2</Col></Row><Row><Col id=\"TARGET\">selectHeader</Col><Col id=\"SP\">DBSPR_CT_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"FROMDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TODATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"DS_SITE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHeader", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"YN_READONLY\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FIXEDROWS\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FROZENCOL\" type=\"STRING\" size=\"256\"/><Column id=\"YN_AUTOFILTER\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"YN_GROUPPANNEL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YN_READONLY\">Y</Col><Col id=\"NO_FIXEDROWS\">2</Col><Col id=\"NO_FROZENCOL\">6</Col><Col id=\"YN_AUTOFILTER\">N</Col><Col id=\"TY_GROUP\">T</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridSpec", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_WIDTH\" type=\"INT\" size=\"256\"/><Column id=\"YN_READONLY\" type=\"STRING\" size=\"256\"/><Column id=\"YN_ESSENTIAL\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CELLTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_ALIGN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_INPUT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HEADER1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HEADER2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HEADER3\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COMBOLIST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CODEFIND\" type=\"STRING\" size=\"256\"/><Column id=\"NM_CODEFIND\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RESULTALIAS\" type=\"STRING\" size=\"256\"/><Column id=\"NO_MAXLENGTH\" type=\"INT\" size=\"256\"/><Column id=\"NO_GROUP\" type=\"INT\" size=\"256\"/><Column id=\"NO_MERGE\" type=\"INT\" size=\"256\"/><Column id=\"TY_SUMMARY\" type=\"STRING\" size=\"256\"/><Column id=\"AT_COLBACK\" type=\"STRING\" size=\"256\"/><Column id=\"AT_COLFORE\" type=\"STRING\" size=\"256\"/><Column id=\"AT_READONLY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFMAINSITE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("접수일");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclFROMDATE","sta00:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ctclFROMDATE:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclTODATE","sta01:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_SITE.form.DSTextBox","value","dsSearch","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclFROMDATE","value","dsSearch","FROMDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclTODATE","value","dsSearch","TODATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DBT_CAUSESTATE2.xfdl", function() {
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

        	if (nexacro.toNumber(this.FormInfo.GR_SEARCH) >= 7) {
        		this.dsSearch.setColumn(0, "CD_SITE", this.AuthClient.CD_DEPT);
        		this.dsSearch.setColumn(0, "DS_SITE", this.AuthClient.DS_DEPT);
        		this.ccfCD_SITE.set_enable(false);
        	}

        	if (!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")))
        		this.FormBtns.Select.click();
        };

        this.fnSetButton = function() {
        }

        this.fnSetExtendButton = function() {
        	this.btnHajaList = this.gfnFormButtonAdd("HajaList", "fnHajaList");
        };

        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ctclFROMDATE = this.divSearch.form.ctclFROMDATE;
        	this.ctclTODATE = this.divSearch.form.ctclTODATE;

        	this.dxGrid = this.divData.form.objGrid;
        };

        this.fnSetEvent = function() {
        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.fnAddFlagRow();
        	this.gfnGridSet(this, this.dxGrid, this.dsGridInfo, this.dsGridSpec);
        }

        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_GBN", "int");
        	this.dsSelect.addColumn("FROMDATE", "string");
        	this.dsSelect.addColumn("TODATE", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");

        	this.dsSelectHeader = new Dataset();
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        this.fnSelect = function() {
        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelectHeader.clearData();
        	this.dsSelectHeader.addRow();

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "TY_GBN", 0);
        	this.dsSelect.setColumn(0, "FROMDATE", this.dsSearch.getColumn(0, "FROMDATE"));
        	this.dsSelect.setColumn(0, "TODATE", this.dsSearch.getColumn(0, "TODATE"));
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));


        	var strSvcId    = "selectHeader";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectHeader=dsSelectHeader select=dsSelect";
        	var outData     = "dsHeader=selectHeader0 dsList=select0";
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

        this.fnAdd = function() {
        }

        this.fnDel = function() {
        }

        this.fnSave = function() {
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
        	if (!this.gfnIsNull(this.dsSearch.getColumn(0, "FROMDATE")) && !this.gfnIsNull(this.dsSearch.getColumn(0, "TODATE"))) {
        		if (this.gfnGetDiffDate(this.dsSearch.getColumn(0, "FROMDATE"), this.dsSearch.getColumn(0, "TODATE")) < 0) {
        			this.fnVaidateCallback = function() {
        				this.ctclTODATE.setFocus();
        			}
        			this.gfnAlert("접수일의 범위가 올바르지 않습니다.", "fnVaidateCallback");
        			return false;
        		}
        	}
        	return true;
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "selectHeader") {
        		if(this.dsHeader.rowcount > 0)
        		{
        			this.fnSetGrid();
        		}
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_SITE") {
        		dsUserParam.setColumn(nrow, "CD_AUTHDEPT", this.AuthClient.CD_DEPT);
        	}
        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fnSetGrid = function() {
        	this.dsGridSpec.clearData();

        	this.fnAddFlagRow();

        	if (this.dsHeader.rowcount > 0) {
        		var c = 6;
        		for (var i = 0; i < this.dsHeader.rowcount; i++) {
        			var nrow = this.dsGridSpec.addRow();
        			this.dsGridSpec.setColumn(nrow, "NO_WIDTH", 90);
        			this.dsGridSpec.setColumn(nrow, "YN_READONLY", "Y");
        			this.dsGridSpec.setColumn(nrow, "YN_ESSENTIAL", "N");
        			this.dsGridSpec.setColumn(nrow, "TY_CELLTYPE", "DOUBLE");
        			this.dsGridSpec.setColumn(nrow, "TY_ALIGN", "RIGHT");
        			this.dsGridSpec.setColumn(nrow, "TY_INPUT", "KEYIN");
        			this.dsGridSpec.setColumn(nrow, "DS_FIELD",  this.dsList.colinfos[c].name);
        			this.dsGridSpec.setColumn(nrow, "DS_HEADER1", "접수");
        			this.dsGridSpec.setColumn(nrow, "DS_HEADER2", this.dsHeader.getColumn(i, "DS_CODE"));
        			this.dsGridSpec.setColumn(nrow, "DS_COMBOLIST", "#,##0");
        			this.dsGridSpec.setColumn(nrow, "TY_SUMMARY", "SUM");

        			c++;
        		}

        		var nrow = this.dsGridSpec.addRow();
        		this.dsGridSpec.setColumn(nrow, "NO_WIDTH", 100);
        		this.dsGridSpec.setColumn(nrow, "YN_READONLY", "Y");
        		this.dsGridSpec.setColumn(nrow, "YN_ESSENTIAL", "N");
        		this.dsGridSpec.setColumn(nrow, "TY_CELLTYPE", "DOUBLE");
        		this.dsGridSpec.setColumn(nrow, "TY_ALIGN", "CENTER");
        		this.dsGridSpec.setColumn(nrow, "TY_INPUT", "KEYIN");
        		this.dsGridSpec.setColumn(nrow, "DS_FIELD",  this.dsList.colinfos[c].name);
        		this.dsGridSpec.setColumn(nrow, "DS_HEADER1", "접수");
        		this.dsGridSpec.setColumn(nrow, "DS_HEADER2", "계");
        		this.dsGridSpec.setColumn(nrow, "DS_COMBOLIST", "#,##0");
        		this.dsGridSpec.setColumn(nrow, "AT_COLBACK", "Soke");
        		this.dsGridSpec.setColumn(nrow, "TY_SUMMARY", "SUM");

        		c++;

        		for (var i = 0; i < this.dsHeader.rowcount; i++) {
        			var nrow = this.dsGridSpec.addRow();
        			this.dsGridSpec.setColumn(nrow, "NO_WIDTH", 90);
        			this.dsGridSpec.setColumn(nrow, "YN_READONLY", "Y");
        			this.dsGridSpec.setColumn(nrow, "YN_ESSENTIAL", "N");
        			this.dsGridSpec.setColumn(nrow, "TY_CELLTYPE", "DOUBLE");
        			this.dsGridSpec.setColumn(nrow, "TY_ALIGN", "RIGHT");
        			this.dsGridSpec.setColumn(nrow, "TY_INPUT", "KEYIN");
        			this.dsGridSpec.setColumn(nrow, "DS_FIELD",  this.dsList.colinfos[c].name);
        			this.dsGridSpec.setColumn(nrow, "DS_HEADER1", "처리");
        			this.dsGridSpec.setColumn(nrow, "DS_HEADER2", this.dsHeader.getColumn(i, "DS_CODE"));
        			this.dsGridSpec.setColumn(nrow, "DS_COMBOLIST", "#,##0");
        			this.dsGridSpec.setColumn(nrow, "TY_SUMMARY", "SUM");

        			c++;
        		}

        		var nrow = this.dsGridSpec.addRow();
        		this.dsGridSpec.setColumn(nrow, "NO_WIDTH", 100);
        		this.dsGridSpec.setColumn(nrow, "YN_READONLY", "Y");
        		this.dsGridSpec.setColumn(nrow, "YN_ESSENTIAL", "N");
        		this.dsGridSpec.setColumn(nrow, "TY_CELLTYPE", "DOUBLE");
        		this.dsGridSpec.setColumn(nrow, "TY_ALIGN", "CENTER");
        		this.dsGridSpec.setColumn(nrow, "TY_INPUT", "KEYIN");
        		this.dsGridSpec.setColumn(nrow, "DS_FIELD",  this.dsList.colinfos[c].name);
        		this.dsGridSpec.setColumn(nrow, "DS_HEADER1", "처리");
        		this.dsGridSpec.setColumn(nrow, "DS_HEADER2", "계");
        		this.dsGridSpec.setColumn(nrow, "DS_COMBOLIST", "#,##0");
        		this.dsGridSpec.setColumn(nrow, "AT_COLBACK", "Soke");
        		this.dsGridSpec.setColumn(nrow, "TY_SUMMARY", "SUM");

        		c++;

        		var nrow = this.dsGridSpec.addRow();
        		this.dsGridSpec.setColumn(nrow, "NO_WIDTH", 100);
        		this.dsGridSpec.setColumn(nrow, "YN_READONLY", "Y");
        		this.dsGridSpec.setColumn(nrow, "YN_ESSENTIAL", "N");
        		this.dsGridSpec.setColumn(nrow, "TY_CELLTYPE", "DOUBLE");
        		this.dsGridSpec.setColumn(nrow, "TY_ALIGN", "CENTER");
        		this.dsGridSpec.setColumn(nrow, "TY_INPUT", "KEYIN");
        		this.dsGridSpec.setColumn(nrow, "DS_FIELD",  this.dsList.colinfos[c].name);
        		this.dsGridSpec.setColumn(nrow, "DS_HEADER1", "처리");
        		this.dsGridSpec.setColumn(nrow, "DS_HEADER2", "처리율(%)");
        		this.dsGridSpec.setColumn(nrow, "DS_COMBOLIST", "#,##0.00");
        		this.dsGridSpec.setColumn(nrow, "AT_COLBACK", "ChongKe");
        		this.dsGridSpec.setColumn(nrow, "TY_SUMMARY", "SUM");

        	}

        	this.gfnGridSet(this, this.dxGrid, this.dsGridInfo, this.dsGridSpec);

        	var idx = this.dxGrid.getBindCellIndex("body", "PER_TOTAL_JOBEND");
        	this.dxGrid.setCellProperty("summ", idx , "text", "expr:dataset.getSum('CNT_TOTAL_JOBEND') / dataset.getSum('CNT_TOTAL_JEOBSU') * 100");
        }

        this.fnAddFlagRow = function() {
        	var nrow = this.dsGridSpec.addRow();
        	this.dsGridSpec.setColumn(nrow, "NO_WIDTH", 20);
        	this.dsGridSpec.setColumn(nrow, "YN_READONLY", "Y");
        	this.dsGridSpec.setColumn(nrow, "YN_ESSENTIAL", "N");
        	this.dsGridSpec.setColumn(nrow, "TY_CELLTYPE", "TEXT");
        	this.dsGridSpec.setColumn(nrow, "TY_ALIGN", "CENTER");
        	this.dsGridSpec.setColumn(nrow, "TY_INPUT", "KEYIN");
        	this.dsGridSpec.setColumn(nrow, "DS_FIELD", this.ucFlag);

        	nrow = this.dsGridSpec.addRow();
        	this.dsGridSpec.setColumn(nrow, "NO_WIDTH", 80);
        	this.dsGridSpec.setColumn(nrow, "YN_READONLY", "Y");
        	this.dsGridSpec.setColumn(nrow, "YN_ESSENTIAL", "N");
        	this.dsGridSpec.setColumn(nrow, "TY_CELLTYPE", "TEXT");
        	this.dsGridSpec.setColumn(nrow, "TY_ALIGN", "CENTER");
        	this.dsGridSpec.setColumn(nrow, "TY_INPUT", "KEYIN");
        	this.dsGridSpec.setColumn(nrow, "DS_FIELD", "CD_SITE");
        	this.dsGridSpec.setColumn(nrow, "DS_HEADER1", "현장코드");
        	this.dsGridSpec.setColumn(nrow, "DS_HEADER2", "현장코드");
        	this.dsGridSpec.setColumn(nrow, "AT_COLBACK", "GangJo");

        	nrow = this.dsGridSpec.addRow();
        	this.dsGridSpec.setColumn(nrow, "NO_WIDTH", 220);
        	this.dsGridSpec.setColumn(nrow, "YN_READONLY", "Y");
        	this.dsGridSpec.setColumn(nrow, "YN_ESSENTIAL", "N");
        	this.dsGridSpec.setColumn(nrow, "TY_CELLTYPE", "TEXT");
        	this.dsGridSpec.setColumn(nrow, "TY_ALIGN", "CENTER");
        	this.dsGridSpec.setColumn(nrow, "TY_INPUT", "KEYIN");
        	this.dsGridSpec.setColumn(nrow, "DS_FIELD", "DS_SITE");
        	this.dsGridSpec.setColumn(nrow, "DS_HEADER1", "현장명");
        	this.dsGridSpec.setColumn(nrow, "DS_HEADER2", "현장명");
        	this.dsGridSpec.setColumn(nrow, "AT_COLBACK", "KuBun");

        	nrow = this.dsGridSpec.addRow();
        	this.dsGridSpec.setColumn(nrow, "NO_WIDTH", 80);
        	this.dsGridSpec.setColumn(nrow, "YN_READONLY", "Y");
        	this.dsGridSpec.setColumn(nrow, "YN_ESSENTIAL", "N");
        	this.dsGridSpec.setColumn(nrow, "TY_CELLTYPE", "TEXT");
        	this.dsGridSpec.setColumn(nrow, "TY_ALIGN", "CENTER");
        	this.dsGridSpec.setColumn(nrow, "TY_INPUT", "KEYIN");
        	this.dsGridSpec.setColumn(nrow, "DS_FIELD", "CD_ACT");
        	this.dsGridSpec.setColumn(nrow, "DS_HEADER1", "협력업체코드");
        	this.dsGridSpec.setColumn(nrow, "DS_HEADER2", "협력업체코드");
        	this.dsGridSpec.setColumn(nrow, "AT_COLBACK", "GangJo");

        	nrow = this.dsGridSpec.addRow();
        	this.dsGridSpec.setColumn(nrow, "NO_WIDTH", 180);
        	this.dsGridSpec.setColumn(nrow, "YN_READONLY", "Y");
        	this.dsGridSpec.setColumn(nrow, "YN_ESSENTIAL", "N");
        	this.dsGridSpec.setColumn(nrow, "TY_CELLTYPE", "TEXT");
        	this.dsGridSpec.setColumn(nrow, "TY_ALIGN", "CENTER");
        	this.dsGridSpec.setColumn(nrow, "TY_INPUT", "KEYIN");
        	this.dsGridSpec.setColumn(nrow, "DS_FIELD", "DS_CTM");
        	this.dsGridSpec.setColumn(nrow, "DS_HEADER1", "협력업체명");
        	this.dsGridSpec.setColumn(nrow, "DS_HEADER2", "협력업체명");
        	this.dsGridSpec.setColumn(nrow, "AT_COLBACK", "KuBun");

        	nrow = this.dsGridSpec.addRow();
        	this.dsGridSpec.setColumn(nrow, "NO_WIDTH", 80);
        	this.dsGridSpec.setColumn(nrow, "YN_READONLY", "Y");
        	this.dsGridSpec.setColumn(nrow, "YN_ESSENTIAL", "N");
        	this.dsGridSpec.setColumn(nrow, "TY_CELLTYPE", "TEXT");
        	this.dsGridSpec.setColumn(nrow, "TY_ALIGN", "CENTER");
        	this.dsGridSpec.setColumn(nrow, "TY_INPUT", "KEYIN");
        	this.dsGridSpec.setColumn(nrow, "DS_FIELD", "CD_CODE");
        	this.dsGridSpec.setColumn(nrow, "DS_HEADER1", "공종코드");
        	this.dsGridSpec.setColumn(nrow, "DS_HEADER2", "공종코드");
        	this.dsGridSpec.setColumn(nrow, "AT_COLBACK", "GangJo");

        	nrow = this.dsGridSpec.addRow();
        	this.dsGridSpec.setColumn(nrow, "NO_WIDTH", 100);
        	this.dsGridSpec.setColumn(nrow, "YN_READONLY", "Y");
        	this.dsGridSpec.setColumn(nrow, "YN_ESSENTIAL", "N");
        	this.dsGridSpec.setColumn(nrow, "TY_CELLTYPE", "TEXT");
        	this.dsGridSpec.setColumn(nrow, "TY_ALIGN", "CENTER");
        	this.dsGridSpec.setColumn(nrow, "TY_INPUT", "KEYIN");
        	this.dsGridSpec.setColumn(nrow, "DS_FIELD", "DS_CODE");
        	this.dsGridSpec.setColumn(nrow, "DS_HEADER1", "공공명");
        	this.dsGridSpec.setColumn(nrow, "DS_HEADER2", "공공명");
        	this.dsGridSpec.setColumn(nrow, "AT_COLBACK", "KuBun");

        };

        this.fnHajaList = function() {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, this.dxGrid.getCellPos());
        	var colnames = colnm.split("_");
        	var idx1 = -1;
        	var idx2 = -1;
        	if (colnames.length == 3) {
        		idx1 = this.gfnGetHeadRowCellIndex(this.dxGrid, 1, colnames[0] + "_" + "001" + "_" + colnames[2]);
        		idx2 = this.gfnGetHeadRowCellIndex(this.dxGrid, 2, colnm);
        	}
        	else {
        		idx1 = this.gfnGetHeadRowCellIndex(this.dxGrid, 1, colnm);
        		idx2 = this.dxGrid.getBindCellIndex("body", colnm);
        	}

        	var param = {};
        	param.CD_PROGRAM = "DBT_CAUSESTATE2";
        	param.DT_FROM = this.dsSearch.getColumn(0, "FROMDATE");
        	param.DT_TO = this.dsSearch.getColumn(0, "TODATE");
        	param.CD_ACT = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        	param.DS_ACT = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");
        	param.DS_UH = this.dxGrid.getCellProperty("head", idx2, "text");
        	param.TY_GUBUN = this.dxGrid.getCellProperty("head", idx1, "text");



        	this.gfnFormOpen("DBS", "DBS_KSBJ_HAJALIST", "", param);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DBT_CAUSESTATE2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
