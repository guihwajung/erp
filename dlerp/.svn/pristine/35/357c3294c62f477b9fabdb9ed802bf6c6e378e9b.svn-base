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
            this.set_titletext("신용정보조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DCZPR_CREDIT_INFO1_SELECT</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DCZPR_CREDIT_INFO2_SELECT</Col></Row><Row><Col id=\"TARGET\">select3</Col><Col id=\"SP\">DCZPR_CREDIT_INFO3_SELECT</Col></Row><Row><Col id=\"TARGET\">select4</Col><Col id=\"SP\">DCZPR_CREDIT_INFO4_SELECT</Col></Row><Row><Col id=\"TARGET\">select5</Col><Col id=\"SP\">DCZPR_CREDIT_INFO5_SELECT</Col></Row><Row><Col id=\"TARGET\">select6</Col><Col id=\"SP\">DCZPR_CREDIT_INFO6_SELECT</Col></Row><Row><Col id=\"TARGET\">select7</Col><Col id=\"SP\">DCZPR_CREDIT_INFO7_SELECT</Col></Row><Row><Col id=\"TARGET\">select8</Col><Col id=\"SP\">DCZPR_CREDIT_INFO8_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CDLT_CMP_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("dsList7", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList8", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCDLT_CMP_CD", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"110.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("업체코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","staCD_VENDOR:0.0","10.0","329","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DCX_CFVENDOR_COMMON");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_SJC","0.0","staCD_VENDOR:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_SJC","staNO_SJC:0.0","ccfCD_VENDOR:10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCDLT_CMP_CD","ctxtNO_SJC:0.0","staCD_VENDOR:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("신용정보회사");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCDLT_CMP_CD","staCDLT_CMP_CD:0.0","ccfCD_VENDOR:10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsCDLT_CMP_CD");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Tab("tabData","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.tabData);
            obj.set_text("신용등급(최근)");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid1","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("신용등급(기본)");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid2","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Tabpage("tab3",this.divData.form.tabData);
            obj.set_text("시공실적");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid3","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab3.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab3.addChild(obj.name, obj);

            obj = new Tabpage("tab4",this.divData.form.tabData);
            obj.set_text("공사실적");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid4","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab4.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab4.addChild(obj.name, obj);

            obj = new Tabpage("tab5",this.divData.form.tabData);
            obj.set_text("매출처");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid5","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab5.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab5.addChild(obj.name, obj);

            obj = new Tabpage("tab6",this.divData.form.tabData);
            obj.set_text("특허및재산권");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid6","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab6.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab6.addChild(obj.name, obj);

            obj = new Tabpage("tab7",this.divData.form.tabData);
            obj.set_text("재무현황");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid7","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab7.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab7.addChild(obj.name, obj);

            obj = new Tabpage("tab8",this.divData.form.tabData);
            obj.set_text("인증현황");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid8","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab8.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.tabData.tab8.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctxtNO_SJC","value","dsSearch","CDLT_CMP_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCZ_CREDIT_INFO.xfdl", function() {
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

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_VENDOR) && !this.gfnIsNull(this.getOwnerFrame().NO_SJC))
        	{
        		this.dsSearch.setColumn(0, "CD_VENDOR", this.getOwnerFrame().CD_VENDOR);
        		this.divSearch.form.ccfCD_VENDOR.form.DSTextBox.set_value(this.getOwnerFrame().DS_VENDOR);
        		this.dsSearch.setColumn(0, "CDLT_CMP_CD", this.getOwnerFrame().NO_SJC);

        		this.FormBtns.Select.click();
        	}


        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Select.set_enable(false);
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
        	this.dxGrid1 = this.divData.form.tabData.tab1.form.objGrid1;
        	this.dxGrid2 = this.divData.form.tabData.tab2.form.objGrid2;
        	this.dxGrid3 = this.divData.form.tabData.tab3.form.objGrid3;
        	this.dxGrid4 = this.divData.form.tabData.tab4.form.objGrid4;
        	this.dxGrid5 = this.divData.form.tabData.tab5.form.objGrid5;
        	this.dxGrid6 = this.divData.form.tabData.tab6.form.objGrid6;
        	this.dxGrid7 = this.divData.form.tabData.tab7.form.objGrid7;
        	this.dxGrid8 = this.divData.form.tabData.tab8.form.objGrid8;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid1, this.dsList1, "DC", "DCZ_CREDIT_INFO_1");
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DC", "DCZ_CREDIT_INFO_2");
        	this.gfnGridInit(this.dxGrid3, this.dsList3, "DC", "DCZ_CREDIT_INFO_3");
        	this.gfnGridInit(this.dxGrid4, this.dsList4, "DC", "DCZ_CREDIT_INFO_4");
        	this.gfnGridInit(this.dxGrid5, this.dsList5, "DC", "DCZ_CREDIT_INFO_5");
        	this.gfnGridInit(this.dxGrid6, this.dsList6, "DC", "DCZ_CREDIT_INFO_6");
        	this.gfnGridInit(this.dxGrid7, this.dsList7, "DC", "DCZ_CREDIT_INFO_7");
        	this.gfnGridInit(this.dxGrid8, this.dsList8, "DC", "DCZ_CREDIT_INFO_8");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_VENDOR", "string");
        	this.dsSelect.addColumn("CDLT_CMP_CD", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid1);
        	this.gfnGridBeforeSelect(this.dxGrid2);
        	this.gfnGridBeforeSelect(this.dxGrid3);
        	this.gfnGridBeforeSelect(this.dxGrid4);
        	this.gfnGridBeforeSelect(this.dxGrid5);
        	this.gfnGridBeforeSelect(this.dxGrid6);
        	this.gfnGridBeforeSelect(this.dxGrid7);
        	this.gfnGridBeforeSelect(this.dxGrid8);

        	var index = this.divData.form.tabData.tabindex + 1;

        	var strSvcId    = "select"+ index;
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select"+ index +"=dsSelect";
        	var outData     = "dsList"+ index+ "=select" + index + "0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        	this.dsSelect.setColumn(0, "CDLT_CMP_CD", this.dsSearch.getColumn(0, "CDLT_CMP_CD"));


        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        // 	switch(this.divData.form.tabData.tabindex) {
        // 		case 0:
        // 			var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        // 			break;
        // 		case 1:
        // 			var nrow = this.gfnGridAdd(this.dxGrid2); // top (default), bottom, current
        // 			break;
        // 	}
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {

        	switch(this.divData.form.tabData.tabindex) {
        		case 0:
        			this.gfnGridDel(this.dxGrid1);
        			break;
        		case 1:
        			this.gfnGridDel(this.dxGrid2);
        			break;
        	}
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
        // 	switch(this.divData.form.tabData.tabindex) {
        // 		case 0:
        // 			this.gfnExcelExport(this.dxGrid);
        // 			break;
        // 		case 1:
        // 			this.gfnExcelExport(this.dxGrid2);
        // 			break;
        // 	}
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
        		this.gfnGridAfterSelect(this.dxGrid1);
        		this.gfnGridAfterSelect(this.dxGrid2);
        		this.gfnGridAfterSelect(this.dxGrid3);
        		this.gfnGridAfterSelect(this.dxGrid4);
        		this.gfnGridAfterSelect(this.dxGrid5);
        		this.gfnGridAfterSelect(this.dxGrid6);
        		this.gfnGridAfterSelect(this.dxGrid7);
        		this.gfnGridAfterSelect(this.dxGrid8);
        	}
        // 	else if (svcID == "select2") {
        // 		this.gfnGridAfterSelect(this.dxGrid2);
        // 	}
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
        		this.gfnGridClear(this.dxGrid7);
        		this.gfnGridClear(this.dxGrid8);
        	}
        };

        this.divData_tabData_onchanged = function(obj,e)
        {
        	// 탭 변경시 조회처리시
        	if(e.preindex != e.postindex) {
        		this.FormBtns.Select.click();
        	}
        };

        this.fnSetCombo = function()
        {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DC");
        	this.dsCombo.setColumn(0, "CD_TYPE", "66");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCDLT_CMP_CD=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallbackCombo";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCZ_CREDIT_INFO.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
