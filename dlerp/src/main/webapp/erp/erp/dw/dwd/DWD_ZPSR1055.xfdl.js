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
            obj._setContents("<ColumnInfo><Column id=\"C_JUNIL_JAN\" type=\"STRING\" size=\"256\"/><Column id=\"C_IWRBTR\" type=\"STRING\" size=\"256\"/><Column id=\"C_CWRBTR\" type=\"STRING\" size=\"256\"/><Column id=\"C_JANEK\" type=\"STRING\" size=\"256\"/><Column id=\"C_MI_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"C_JANEK_PURE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWXPR_RFCINFO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_COMMON_SELECT_01</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SELECT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("<ColumnInfo><Column id=\"B_IWRBTR\" type=\"STRING\" size=\"256\"/><Column id=\"B_CWRBTR\" type=\"STRING\" size=\"256\"/><Column id=\"B_JANEK\" type=\"STRING\" size=\"256\"/><Column id=\"D\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_POST_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_POST_TO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SELECT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TY_SELECT\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExport", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInParam", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutTables", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInfoSap", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProcSap", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWXPR_RFCINFO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_COMMON_SELECT_01</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFunc", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_POST_FROM_TO","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("전기일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_POST_FROM","staDT_POST_FROM_TO:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_range","ctclDT_POST_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_POST_TO","sta_range:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_SELECT","ctclDT_POST_TO:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("조회구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_SELECT","staTY_SELECT:0.0","10.0","120","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsTY_SELECT");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,"160","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divSplitter","50%","0","5","100%",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_text("현금보유현황");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.form.divDataLeft.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","staTitle:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTop.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataTop.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("어음보유현황");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.form.divDataRight.addChild(obj.name, obj);

            obj = new Grid("objGrid1","0","staTitle:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form.divDataRight.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTop.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divDataTop:10",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("금일 입출금 명세");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGrid2","0","staTitle:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclDT_POST_FROM","value","dsSearch","DT_POST_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_POST_TO","value","dsSearch","DT_POST_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccboTY_SELECT","value","dsSearch","TY_SELECT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DWD_ZPSR1055.xfdl", function() {
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

        	this.fnSetCombo();

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE))
        	{
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        	}

        	var today = this.gfnGetDate();

        	this.dsSearch.setColumn(0, "DT_POST_FROM", today.substr(0,6) + "01");
        	this.dsSearch.setColumn(0, "DT_POST_TO", this.gfnGetLastDate(today.substr(0,6)));

        //	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	// 서브 버튼 사용
        	//this.gfnUseSubBtn(true, this.divData, this.divData.form.divDataTop.form.divSplitter); // divSplitter sync
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btn1 = this.gfnFormButtonAdd("Detail", "fnDetail1");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.divDataTop.form.divDataLeft.form.objGrid;
        	this.dxGrid1 = this.divData.form.divDataTop.form.divDataRight.form.objGrid1;
        	this.dxGrid2 = this.divData.form.divDataBottom.form.objGrid2;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
         	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWD_ZPSR1055_01");
         	this.gfnGridInit(this.dxGrid1, this.dsList1, "DW", "DWD_ZPSR1055_02");
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DW", "DWD_ZPSR1055_03");
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsInfoSap = new Dataset();
        	this.dsInfoSap.addColumn("TY_WRK", "string");
        	this.dsInfoSap.addColumn("DS_PARAM", "string");
        	this.dsInfoSap.addColumn("DS_VALUE", "string");
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	this.dsInfoSap.clearData();
        	this.dsInfoSap.addRow();

        	var ds_value = [];
        	ds_value.push(this.dsSearch.getColumn(0, "CD_SITE"));
        	ds_value.push(this.dsSearch.getColumn(0, "DT_POST_FROM"));
        	ds_value.push(this.dsSearch.getColumn(0, "DT_POST_TO"));
        	ds_value.push(this.dsSearch.getColumn(0, "TY_SELECT"));

        	this.dsInfoSap.setColumn(0, "TY_WRK", "Q");
        	this.dsInfoSap.setColumn(0, "DS_PARAM", this.FormInfo.DS_PARAM);
        	this.dsInfoSap.setColumn(0, "DS_VALUE", ds_value.join(','));

        	// SAP 호출
        	var strSvcId    = "select";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsInfoSap";
        	var outData     = "dsFunc=select0 dsInParam=select1 dsOutTables=select2";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnSap = function() {

        	this.dsList.clearData();
        	this.dsList1.clearData();
        	this.dsList2.clearData();

        	this._dsProcSap.clearData();
        	var nrow = this._dsProcSap.addRow();
        	this._dsProcSap.setColumn(nrow, "TARGET", "select");
        	this._dsProcSap.setColumn(nrow, "SP", this.dsFunc.getColumn(0, "NM_RFC"));

        	this.dsSelectSap = new Dataset();

        	// IN 파라미터 셋팅
        	for(var i = 0 ; i < this.dsInParam.rowcount; i++) {
        		this.dsSelectSap.addColumn(this.dsInParam.getColumn(i, "IN_PARAM"), "string");
        	}

        	nrow = this.dsSelectSap.addRow();
        	for(var i = 0 ; i < this.dsInParam.rowcount; i++) {
        		this.dsSelectSap.setColumn(nrow, this.dsInParam.getColumn(i, "IN_PARAM"), this.dsInParam.getColumn(i, "IN_VALUE"));
        	}

        // 	var outList = "";
        // 	for(var i = 0 ; i < this.dsOutTables.rowcount; i++) {
        // 		outList += " dsList" + (i+1) + "=" + this.dsOutTables.getColumn(i, "NM_OUT");
        // 	}

        	// SAP 호출
        	var strSvcId    = "sap";
        	var strSvcType  = "sap";
        	var inProc		= "_dsProcSap";
        	var inData      = "select=dsSelectSap";
        	var outData     = "dsExport=export dsList2=OT_ITAB";
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
         *	입력 버튼
         */
        this.fnAdd = function() {
        	//this.gfnGridAdd(this.dxGrid);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
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
        	var validate = true;
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")))
        	{
        		this.fnValidate = function()
        		{
        			this.divSearch.form.ccfCD_SITE.form.CDTextBox.setFocus();
        		}

        		this.gfnAlert("현장코드를 입력해주십시오.", "fnValidate");
        		return false;
        	}else if(this.gfnIsNull(this.dsSearch.getColumn(0, "DT_POST_FROM")))
        	{
        		this.fnValidate = function()
        		{
        			this.divSearch.form.ctclDT_POST_FROM.setFocus();
        		}

        		this.gfnAlert("전기일자 시작일을 입력해주십시오.", "fnValidate");
        		return false;
        	}
        	else if(this.gfnIsNull(this.dsSearch.getColumn(0, "DT_POST_TO")))
        	{
        		this.fnValidate = function()
        		{
        			this.divSearch.form.ctclDT_POST_TO.setFocus();
        		}

        		this.gfnAlert("전기일자 종료일을 입력해주십시오.", "fnValidate");
        		return false;
        	}
        	else if(this.gfnIsNull(this.dsSearch.getColumn(0, "TY_SELECT")))
        	{
        		this.fnValidate = function()
        		{
        			this.divSearch.form.ccboTY_SELECT.setFocus();
        		}

        		this.gfnAlert("조회구분을 입력해주십시오.", "fnValidate");
        		return false;
        	}

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
        		if (errorCode == 0) {
        			this.fnSap();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "sap")
        	{
        		if(this.dsExport.rowcount > 0)
        		{
        			var nrow = this.gfnGridAdd(this.dxGrid);
         			this.dsList.setColumn(nrow, "C_JUNIL_JAN", (nexacro.toNumber(this.dsExport.getColumn(0, "C_JUNIL_JAN"),0) * 100).toFixed(0));
         			this.dsList.setColumn(nrow, "C_IWRBTR", (nexacro.toNumber(this.dsExport.getColumn(0, "C_IWRBTR"),0) * 100).toFixed(0));
         			this.dsList.setColumn(nrow, "C_CWRBTR", (nexacro.toNumber(this.dsExport.getColumn(0, "C_CWRBTR"),0) * 100).toFixed(0));
         			this.dsList.setColumn(nrow, "C_JANEK", (nexacro.toNumber(this.dsExport.getColumn(0, "C_JANEK"),0) * 100).toFixed(0));
         			this.dsList.setColumn(nrow, "C_MI_PRICE", (nexacro.toNumber(this.dsExport.getColumn(0, "C_MI_PRICE"),0) * 100).toFixed(0));
         			this.dsList.setColumn(nrow, "C_JANEK_PURE", (nexacro.toNumber(this.dsExport.getColumn(0, "C_JANEK_PURE"),0) * 100).toFixed(0));

        			//this.dsList.copyRow(nrow, this.dsExport, 0);

        			var nrow = this.gfnGridAdd(this.dxGrid1);
        			//this.dsList1.copyRow(nrow, this.dsExport, 0);
         			this.dsList1.setColumn(nrow, "B_IWRBTR", (nexacro.toNumber(this.dsExport.getColumn(0, "B_IWRBTR"),0) * 100).toFixed(0));
         			this.dsList1.setColumn(nrow, "B_CWRBTR", (nexacro.toNumber(this.dsExport.getColumn(0, "B_CWRBTR"),0) * 100).toFixed(0));
         			this.dsList1.setColumn(nrow, "B_JANEK", (nexacro.toNumber(this.dsExport.getColumn(0, "B_JANEK"),0) * 100).toFixed(0));

        			this.dsList2.set_enableevent(false);
        			for(var i = 0 ; i < this.dsList2.rowcount; i++)
        			{
        				this.dsList2.setColumn(i, "IWRBTR", (nexacro.toNumber(this.dsList2.getColumn(i, "IWRBTR"),0) * 100).toFixed(0));
        				this.dsList2.setColumn(i, "CWRBTR", (nexacro.toNumber(this.dsList2.getColumn(i, "CWRBTR"),0) * 100).toFixed(0));
        			}
        			this.dsList2.set_enableevent(true);
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
         * 콤보 이벤트 설정
         ************************************************************************/
        this.fnSetCombo = function() {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");
        	this.dsCombo.addColumn("YN_USE", "string");
        	this.dsCombo.addColumn("YN_ALL", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DW");
        	this.dsCombo.setColumn(0, "CD_TYPE", "SAP05");
        	this.dsCombo.setColumn(0, "YN_USE", "Y");
        	this.dsCombo.setColumn(0, "YN_ALL", "N");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_SELECT=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divDataTop.form.divSplitter.set_left(e.clientx);
        		this.divData.form.divDataTop.form.resetScroll();

        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGrid1);
        		this.gfnGridClear(this.dxGrid2);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divDataTop.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divDataTop.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataBottom.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWD_ZPSR1055.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
