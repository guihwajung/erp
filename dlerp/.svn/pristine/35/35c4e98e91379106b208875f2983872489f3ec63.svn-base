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
            this.set_titletext("선투입명세서");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWXPR_RFCINFO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_MAGAM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"DT_MAGAM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFunc", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInParam", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProcSap", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutTables", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList4", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList5", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList6", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_PERIOD","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("마감일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_MAGAM","staCD_PERIOD:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Tab("tabData","0","0",null,null,"0","0",null,null,"300",null,this.divData.form);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.tabData);
            obj.set_text("선급비용");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid1","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("보증금등");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid2","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Tabpage("tab3",this.divData.form.tabData);
            obj.set_text("미수금");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid3","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Tabpage("tab4",this.divData.form.tabData);
            obj.set_text("저장품(재고자재)");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid4","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Tabpage("tab5",this.divData.form.tabData);
            obj.set_text("선급금");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid5","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Tabpage("tab6",this.divData.form.tabData);
            obj.set_text("고정자산(차량, 공기구비품)");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid6","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclDT_MAGAM","value","dsSearch","DT_MAGAM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DWD_ZFIR2120.xfdl", function() {
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

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().DT_MAGAM)) {
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		// 코드파인드의 명칭부분은 직접 접근해서 셋팅
        		this.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		this.dsSearch.setColumn(0, "DT_MAGAM", (this.getOwnerFrame().DT_MAGAM));

        		this.FormBtns.Select.click();
        	}else{
        		var today = this.gfnGetDate();
        		this.dsSearch.setColumn(0, "DT_MAGAM", this.gfnGetLastDate(today));
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

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ctclDT_MAGAM = this.divSearch.form.ctclDT_MAGAM;

        	this.dxGrid1 = this.divData.form.tabData.tab1.form.objGrid1;
        	this.dxGrid2 = this.divData.form.tabData.tab2.form.objGrid2;
        	this.dxGrid3 = this.divData.form.tabData.tab3.form.objGrid3;
        	this.dxGrid4 = this.divData.form.tabData.tab4.form.objGrid4;
        	this.dxGrid5 = this.divData.form.tabData.tab5.form.objGrid5;
        	this.dxGrid6 = this.divData.form.tabData.tab6.form.objGrid6;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DW", "DWD_ZFIR2120_A");
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DW", "DWD_ZFIR2120_B");
        	this.gfnGridInit(this.dxGrid3, this.dsList3, "DW", "DWD_ZFIR2120_C");
        	this.gfnGridInit(this.dxGrid4, this.dsList4, "DW", "DWD_ZFIR2120_D");
        	this.gfnGridInit(this.dxGrid5, this.dsList5, "DW", "DWD_ZFIR2120_E");
        	this.gfnGridInit(this.dxGrid6, this.dsList6, "DW", "DWD_ZFIR2120_F");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("DS_PARAM", "string");
        	this.dsSelect.addColumn("DS_VALUE", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;


        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	var ds_value = [];
        	ds_value.push(this.dsSearch.getColumn(0, "CD_SITE"));
        	ds_value.push(this.dsSearch.getColumn(0, "DT_MAGAM"));

        	this.dsSelect.setColumn(0, "TY_WRK", "Q");
        	this.dsSelect.setColumn(0, "DS_PARAM", this.FormInfo.DS_PARAM);
        	this.dsSelect.setColumn(0, "DS_VALUE", ds_value.join(','));

        	// SAP 호출
        	var strSvcId    = "select";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsFunc=select0 dsInParam=select1 dsOutTables=select2";
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

        this.fnSap = function() {

        	//this.gfnGridBeforeSelect(this.dxGrid);

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

        	var outList = "";
        	for(var i = 0 ; i < this.dsOutTables.rowcount; i++) {
        		outList += " dsList" + (i+1) + "=" + this.dsOutTables.getColumn(i, "NM_OUT");
        	}


        	// SAP 호출
        	var strSvcId    = "sap";
        	var strSvcType  = "sap";
        	var inProc		= "_dsProcSap";
        	var inData      = "select=dsSelectSap";
        	var outData     = "dsExport=export" + outList;
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
        	this.gfnExcelExport(this.dxGrid1);
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
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "DT_MAGAM"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctclDT_MAGAM.setFocus();
        		}
        		this.gfnAlert("마감일자를 입력하세요.", "fnVaidateCallback");
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
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return;
        	}
        	if (svcID == "select") {
        		if(this.dsFunc.rowcount > 0 && this.dsInParam.rowcount > 0) {
        			this.fnSap();
        		}
        	}
        	else if (svcID == "sap") {
        		//this.gfnGridAfterSelect(this.dxGrid);
        		// SAP에서 금액이 소수점 2자리로 return 되기에 금액 * 100을 해준다.
        		this.fnCalcPrice(this.dsList1);
        		this.fnCalcPrice(this.dsList2);
        		this.fnCalcPrice(this.dsList3);
        		this.fnCalcPrice(this.dsList4);
        		this.fnCalcPrice(this.dsList5);
        		this.fnCalcPriceList6();
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
        		this.gfnGridClear(this.dxGrid1);
        		this.gfnGridClear(this.dxGrid2);
        		this.gfnGridClear(this.dxGrid3);
        		this.gfnGridClear(this.dxGrid4);
        		this.gfnGridClear(this.dxGrid5);
        		this.gfnGridClear(this.dxGrid6);
        	}
        };

        this.fnCalcPrice = function(dsList)
        {
        	if(dsList.rowcount > 0)
        	{
        		for(var i = 0 ; i < dsList.rowcount; i++)
        		{
        			dsList.set_enableevent(false);
        			dsList.setColumn(i, "WRBTR", (nexacro.toNumber(dsList.getColumn(i, "WRBTR"),0) * 100).toFixed(0));
        			dsList.set_enableevent(true);
        		}
        	}
        }

        this.fnCalcPriceList6 = function()
        {
        	if(this.dsList6.rowcount > 0)
        	{
        		for(var i = 0 ; i < this.dsList6.rowcount; i++)
        		{
        			this.dsList6.set_enableevent(false);
        			this.dsList6.setColumn(i, "KANSW2", (nexacro.toNumber(this.dsList6.getColumn(i, "KANSW2"),0) * 100).toFixed(0));
        			this.dsList6.setColumn(i, "KNAFA2", (nexacro.toNumber(this.dsList6.getColumn(i, "KNAFA2"),0) * 100).toFixed(0));
        			this.dsList6.setColumn(i, "NAFAG", (nexacro.toNumber(this.dsList6.getColumn(i, "NAFAG"),0) * 100).toFixed(0));
        			this.dsList6.setColumn(i, "KNAFA3", (nexacro.toNumber(this.dsList6.getColumn(i, "KNAFA3"),0) * 100).toFixed(0));
        			this.dsList6.setColumn(i, "JANJON", (nexacro.toNumber(this.dsList6.getColumn(i, "JANJON"),0) * 100).toFixed(0));
        			this.dsList6.set_enableevent(true);
        		}
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWD_ZFIR2120.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
