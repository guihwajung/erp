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
            this.set_titletext("전자세금계산서 수정발행(팝업)");
            this.getSetter("maxwidth").set("550");
            this.getSetter("maxheight").set("420");
            if (Form == this.constructor)
            {
                this._setFormPosition(550,420);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">eTaxBuy</Col><Col id=\"SP\">DHVPR_ETAXBUYLIST_AR_INSERT</Col></Row><Row><Col id=\"TARGET\">autoslip</Col><Col id=\"SP\">DHVPR_ETAXBUYLIST_AUTOSLIP</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TRADE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SUPPLY\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ISSUE_ID_OLD\" type=\"STRING\" size=\"256\"/><Column id=\"AM_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"TY_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DAEPYO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REM\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SJC\" type=\"STRING\" size=\"256\"/><Column id=\"TY_VENDOR_OLD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR_OLD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REM_OLD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PROOF\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_UPDATE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_TRADE_CANCEL", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_TRADE_CANCEL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","42",null,"278","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","10","2","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("수정사유");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_ACNT","10","31","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("당초승인번호");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta11","104","2",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta12","104","31",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfISSUE_ID","110","36","270","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("246");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboTY_UPDATE","110","7","270","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsTY_UPDATE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_ACCOUNT","10","145","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("회계일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","104","145",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_SUPPLY","10","174","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("공급가액 변동");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","104","174",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACCOUNT","111","151","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_SUPPLY","110","180","148","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_readonly("false");
            obj.set_format("#,###");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_VAT","10","203","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_text("부가세 변동");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","104","203",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_VAT","109","209","148","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_readonly("false");
            obj.set_format("#,###");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","10","58","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("거래처");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_REM","10","116","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","104","58",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","104","116",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","109","64","355","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("64");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_REM","109","121","355","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_maxlength("100");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtTY_VENDOR","69","63","30","21",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_TRADE_CANCEL","10","232","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_text("수정전표번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta05","104","232",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtCD_TRADE_CANCEL","109","237","235","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_maxlength("100");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_SJC","10","87","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","104","87",null,"30","10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_DAEPYO","295","87","85","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("대표자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_DAEPYO","384","91","80","21",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_visible("true");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_SJC","110","92","182","21",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_visible("true");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","10","10",null,"22","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("전자수정발행");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new Button("btnConf","171",null,"69","27",null,"3",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("발행");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","250",null,"69","27",null,"3",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ccboTY_UPDATE","value","dsSearch","CD_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ccfISSUE_ID.form.CDTextBox","value","dsSearch","ISSUE_ID_OLD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ctclDT_ACCOUNT","value","dsSearch","DT_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.txtAM_SUPPLY","value","dsSearch","AM_SUPPLY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.txtAM_VAT","value","dsSearch","AM_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.edtTY_VENDOR","value","dsSearch","TY_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.ccfCD_VENDOR.form.DSTextBox","value","dsSearch","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.edtDS_DAEPYO","value","dsSearch","DS_DAEPYO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.txtDS_REM","value","dsSearch","DS_REM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.txtCD_TRADE_CANCEL","value","dsCD_TRADE_CANCEL","CD_TRADE_CANCEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.edtNO_SJC","value","dsSearch","NO_SJC");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHA_BILLDLG.xfdl", function() {
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

        	this.dsSearch.set_enableevent(false);

        	this.dsSearch.setColumn(0, "CD_CORP", this.getOwnerFrame().P_CD_CORP);
        	this.dsSearch.setColumn(0, "CD_TRADE", this.getOwnerFrame().P_CD_TRADE);
        	this.dsSearch.setColumn(0, "ISSUE_ID_OLD", this.getOwnerFrame().P_ISSUE_ID);
        	this.dsSearch.setColumn(0, "CD_VENDOR", this.getOwnerFrame().P_CD_VENDOR);
        	this.dsSearch.setColumn(0, "DS_VENDOR", this.getOwnerFrame().P_DS_VENDOR);
        	this.dsSearch.setColumn(0, "TY_VENDOR", this.getOwnerFrame().P_TY_VENDOR);
        	this.dsSearch.setColumn(0, "DS_DAEPYO", this.getOwnerFrame().P_DS_DAEPYO);
        	this.dsSearch.setColumn(0, "NO_SJC", this.getOwnerFrame().P_NO_SJC);
        	this.dsSearch.setColumn(0, "DS_REM", this.getOwnerFrame().P_DS_REM);
        	this.dsSearch.setColumn(0, "DS_REM_OLD", this.getOwnerFrame().P_DS_REM);
        	this.dsSearch.setColumn(0, "CD_VENDOR_OLD", this.getOwnerFrame().P_CD_VENDOR);
        	this.dsSearch.setColumn(0, "TY_VENDOR_OLD", this.getOwnerFrame().P_TY_VENDOR);
        	this.dsSearch.setColumn(0, "CD_PROOF", this.getOwnerFrame().P_CD_PROOF);

        	this.dsSearch.set_enableevent(true);

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
        	this.ccboTY_UPDATE = this.divData.form.ccboTY_UPDATE;
        	this.ccfISSUE_ID   = this.divData.form.ccfISSUE_ID;
        	this.ctclDT_ACCOUNT   = this.divData.form.ctclDT_ACCOUNT;
        	this.txtAM_SUPPLY   = this.divData.form.txtAM_SUPPLY;
        	this.txtAM_VAT   = this.divData.form.txtAM_VAT;
        	this.ccfCD_VENDOR   = this.divData.form.ccfCD_VENDOR;
        	this.txtDS_REM   = this.divData.form.txtDS_REM;
        	this.txtCD_TRADE_CANCEL   = this.divData.form.txtCD_TRADE_CANCEL;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfISSUE_ID.CodeFindName = "DHX_ISSUE_ID_CODEFIND_SELECT";
        	this.ccfISSUE_ID.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_VENDOR.CodeFindName = "DHX_CFALLVENDOR_CODEFIND";
        	this.ccfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_VENDOR.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_Valuechanged, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("CD_TRADE", "string");
        	this.dsSave.addColumn("AMEND_CODE", "string");
        	this.dsSave.addColumn("AM_SUPPLY", "bigdecimal");
        	this.dsSave.addColumn("AM_VAT", "bigdecimal");
        	this.dsSave.addColumn("DT_ACCOUNT", "string");
        	this.dsSave.addColumn("ID_TRANS", "string");
        	this.dsSave.addColumn("ISSUE_ID_OLD", "string");
        	this.dsSave.addColumn("TY_VENDOR_NEW", "string");
        	this.dsSave.addColumn("CD_VENDOR_NEW", "string");
        	this.dsSave.addColumn("DS_REM_NEW", "string");
        	this.dsSave.addColumn("CD_TRADE_CANCEL", "string");
        	this.dsSave.addColumn("TY_VENDOR_OLD", "string");
        	this.dsSave.addColumn("CD_VENDOR_OLD", "string");
        	this.dsSave.addColumn("DS_REM_OLD", "string");
        	this.dsSave.addColumn("CD_PROOF", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        }

         /*
         *	입력 버튼
         */
        this.fnAdd = function() {


        }

         /*
         *	저장 버튼
         */
        this.fnSave = function() {

        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
        }


        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	//this.gfnExcelExport(this.dxGrid);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }
        /************************************************************************
         * Validate
         ************************************************************************/
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
        	if(svcID == "save"){
        		if (errorCode == 0) {

        			trace(this.dsCD_TRADE_CANCEL.saveXML());

        			//this.getParentContext().close("SUSESS");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}

        	if(svcID == "combo"){
        		if (errorCode == 0) {
        			var nRow = this.dsTY_UPDATE.insertRow(0);
        			this.dsTY_UPDATE.setColumn(nRow, "CD_CODE", "");
        			this.dsTY_UPDATE.setColumn(nRow, "DS_CODE", "선택");

        			this.ccboTY_UPDATE.set_index(0);
        			this.ccboTY_UPDATE.setFocus();

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	switch(id) {
        		case "ccfISSUE_ID":	//당초승인번호
        			dsUserParam.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "ISSUE_ID_OLD"));
        		break;
        		case "ccfCD_VENDOR":	//거래처
        			dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		break;
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	switch(id) {
        		case "ccfCD_VENDOR":	// 거래처
        			var TY_VENDOR = (arrData.length > 0) ? arrData[0]["TY_VENDOR"] : "";
        			var DS_DAEPYO = (arrData.length > 0) ? arrData[0]["DS_DAEPYO"] : "";
        			var NO_SJC = (arrData.length > 0) ? arrData[0]["NO_SJC"] : "";

        			this.dsSearch.setColumn(0, "TY_VENDOR"	, TY_VENDOR);
        			this.dsSearch.setColumn(0, "DS_DAEPYO"	, DS_DAEPYO);
        			this.dsSearch.setColumn(0, "NO_SJC"	, NO_SJC);
        		break;
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        //콤보박스 코드 조회
        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DH");
        	this.dsCombo.setColumn(0, "CD_TYPE",  "V23");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_UPDATE=combo0";
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


        //취소버튼 클릭
        this.btnCancel_onclick = function(obj,e)
        {
        	if(this.dsCD_TRADE_CANCEL.rowcount > 0){
        		this.getParentContext().close("SUSESS");
        	}else{
        		this.getParentContext().close();
        	}
        };

        //확인버튼 클릭
        this.btnConf_onclick = function(obj,e)
        {
        	var TY_UPDATE = this.ccboTY_UPDATE.value;
        	if(!this.gfnIsNull(this.txtCD_TRADE_CANCEL.value)){
        		this.gfnAlert("수정 전표발행 되었습니다.");
        		return;
        	}

        	if(this.gfnIsNull(this.ccboTY_UPDATE.value)){
        		this.gfnAlert("수정사유는 필수입니다.");
        		this.ccboTY_UPDATE.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.ccfISSUE_ID.form.CDTextBox.value)){
        		this.gfnAlert("당초승인번호는 필수입니다.");
        		this.ccfISSUE_ID.form.CDTextBox.setFocus();
        		return;
        	}

        	/*
        		01	기재사항 착오정정 등
        		02	공급가액변동
        		03	환입
        		04	계약의 해지
        		05	내국신용장 등 사후 개설
        		06	착오에 의한 이중발급
        	*/

        	if(TY_UPDATE == "01"){
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_VENDOR"))){
        			this.gfnAlert("거래처 필수입니다.");
        			this.ccfCD_VENDOR.form.CDTextBox.setFocus();
        			return;
        		}

        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "NO_SJC"))){
        			this.gfnAlert("사업자번호 필수입니다.");
        			this.ccfCD_VENDOR.form.CDTextBox.setFocus();
        			return;
        		}

        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "DS_DAEPYO"))){
        			this.gfnAlert("대표자 필수입니다.");
        			this.ccfCD_VENDOR.form.CDTextBox.setFocus();
        			return;
        		}

        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "DS_REM"))){
        			this.gfnAlert("품목 필수입니다.");
        			this.txtDS_REM.setFocus();
        			return;
        		}
        	}

        	if(this.ccboTY_UPDATE.value != "06"){

        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "DT_ACCOUNT"))){
        			this.gfnAlert("회계일자는 필수입니다.");
        			this.ctclDT_ACCOUNT.setFocus();
        			return;
        		}

        		if (this.gfnGetDate() < this.dsSearch.getColumn(0, "DT_ACCOUNT")){
        			this.gfnAlert("회계일자는 오늘 이전 일자로 입력 하셔야 합니다.");
        			this.ctclDT_ACCOUNT.setFocus();
        			return;
        		}
        	}

        	if(this.ccboTY_UPDATE.value == "02"){
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "AM_SUPPLY"))){
        			this.gfnAlert("공급가액 변동은 필수입니다.");
        			this.txtAM_SUPPLY.setFocus();
        			return;
        		}

        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "AM_VAT"))){
        			this.gfnAlert("부가세 변동은 필수입니다.");
        			this.txtAM_VAT.setFocus();
        			return;
        		}
        	}

        	var cdProof = this.dsSearch.getColumn(0, "CD_PROOF");
        	if(cdProof == "50" && !this.gfnIsNull(this.dsSearch.getColumn(0, "AM_SUPPLY")) && !this.gfnIsNull(this.dsSearch.getColumn(0, "AM_VAT"))){
        		var amSupply = this.dsSearch.getColumn(0, "AM_SUPPLY");
        		var amVat = this.dsSearch.getColumn(0, "AM_VAT");
        		var amVatLimitFrom = nexacro.round(amSupply / 10, 0) - 100;
        		var amVatLimitTo = nexacro.round(amSupply / 10, 0) + 100;

        		var msgAmLimit = this.gfnAppendComma(amVatLimitFrom) +"~"+ this.gfnAppendComma(amVatLimitTo)

        		if(amVat < amVatLimitFrom || amVat > amVatLimitTo){
        			this.gfnAlert("부가세 변동 값은 오차범위 ±100 ( "+msgAmLimit+" ) 이내로 입력 하셔야 합니다.");
        			this.txtAM_VAT.setFocus();
        			return;
        		}
        	}

        	this.gfnConfirm("전자발행 하시겠습니까?", "fnSave_callback");
        }

        this.fnSave_callback = function(strId, val) {
        	if(val == true) {


        	this.dsCD_TRADE_CANCEL.clearData();
        	this.dsSave.clearData();
        	var nrow = this.dsSave.addRow();

        	this.dsSave.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSave.setColumn(nrow, "CD_TRADE", this.dsSearch.getColumn(0, "CD_TRADE"));
        	this.dsSave.setColumn(nrow, "AMEND_CODE", this.dsSearch.getColumn(0, "CD_CODE"));
        	this.dsSave.setColumn(nrow, "AM_SUPPLY", this.dsSearch.getColumn(0, "AM_SUPPLY"));
        	this.dsSave.setColumn(nrow, "AM_VAT", this.dsSearch.getColumn(0, "AM_VAT"));
        	this.dsSave.setColumn(nrow, "DT_ACCOUNT", this.dsSearch.getColumn(0, "DT_ACCOUNT"));
        	this.dsSave.setColumn(nrow, "ID_TRANS", this.AuthClient.ID_USER);
        	this.dsSave.setColumn(nrow, "ISSUE_ID_OLD", this.dsSearch.getColumn(0, "ISSUE_ID_OLD"));
        	this.dsSave.setColumn(nrow, "TY_VENDOR_NEW", this.dsSearch.getColumn(0, "TY_VENDOR"));
        	this.dsSave.setColumn(nrow, "CD_VENDOR_NEW", this.dsSearch.getColumn(0, "CD_VENDOR"));
        	this.dsSave.setColumn(nrow, "DS_REM_NEW", this.dsSearch.getColumn(0, "DS_REM"));
        	this.dsSave.setColumn(nrow, "DS_REM_OLD", this.dsSearch.getColumn(0, "DS_REM_OLD"));
        	this.dsSave.setColumn(nrow, "CD_TRADE_CANCEL", "");
        	this.dsSave.setColumn(nrow, "CD_VENDOR_OLD", this.dsSearch.getColumn(0, "CD_VENDOR_OLD"));
        	this.dsSave.setColumn(nrow, "TY_VENDOR_OLD", this.dsSearch.getColumn(0, "TY_VENDOR_OLD"));
        	this.dsSave.setColumn(nrow, "CD_PROOF", this.dsSearch.getColumn(0, "CD_PROOF"));


        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "autoslip=dsSave";
        	var outData     = "dsCD_TRADE_CANCEL=autoslip";
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

        };

        this.dsSearch_Valuechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		switch(e.columnid) {
        			case "CD_CODE":
        				this.fnSetAllEnable(e.newvalue);
        			break;
        		}
        	}
        };

        this.fnSetAllEnable = function(sTyCode){
        	/*
        		01	기재사항 착오정정 등
        		02	공급가액변동
        		03	환입
        		04	계약의 해지
        		05	내국신용장 등 사후 개설
        		06	취소발행
        	*/
        	var textDecoration = "";
        	this.divData.form.staAM_SUPPLY.set_textDecoration(textDecoration);
        	this.divData.form.staAM_VAT.set_textDecoration(textDecoration);
        	this.divData.form.staCD_VENDOR.set_textDecoration(textDecoration);
        	this.divData.form.staNO_SJC.set_textDecoration(textDecoration);
        	this.divData.form.staDS_DAEPYO.set_textDecoration(textDecoration);
        	this.divData.form.staDS_REM.set_textDecoration(textDecoration);

        	//this.gfnSetAllEnable(this.divData.form, false);

        	var benable = false;
        	this.ccboTY_UPDATE.set_enable(!benable);
        	this.ccfCD_VENDOR.set_enable(benable);
        	this.ctclDT_ACCOUNT.set_enable(benable);
        	this.txtAM_SUPPLY.set_enable(benable);
        	this.txtAM_VAT.set_enable(benable);
        	this.txtDS_REM.set_enable(benable);

        	this.dsSearch.setColumn(0, "AM_SUPPLY", "")
        	this.dsSearch.setColumn(0, "AM_VAT", "")

        	textDecoration = "underline";
        	benable = true;

        	switch(sTyCode) {
        		case "01":	// 기재사항 착오정정 등
        			this.ccfCD_VENDOR.set_enable(benable);
        			this.txtDS_REM.set_enable(benable);
        			this.ctclDT_ACCOUNT.set_enable(benable);

        			this.txtAM_SUPPLY.set_enable(benable);
        			this.txtAM_VAT.set_enable(benable);

        			this.divData.form.staDT_ACCOUNT.set_textDecoration(textDecoration);
        			this.divData.form.staCD_VENDOR.set_textDecoration(textDecoration);
        			this.divData.form.staNO_SJC.set_textDecoration(textDecoration);
        			this.divData.form.staDS_DAEPYO.set_textDecoration(textDecoration);
        			this.divData.form.staDS_REM.set_textDecoration(textDecoration);
        		break;
        		case "02":	// 공급가액변동
        			this.txtAM_SUPPLY.set_enable(benable);
        			this.txtAM_VAT.set_enable(benable);
        			this.ctclDT_ACCOUNT.set_enable(benable);

        			this.divData.form.staDT_ACCOUNT.set_textDecoration(textDecoration);
        			this.divData.form.staAM_SUPPLY.set_textDecoration(textDecoration);
        			this.divData.form.staAM_VAT.set_textDecoration(textDecoration);
        		break;
        		case "03":	// 환입
        		case "04":	// 계약의 해지
        			this.ctclDT_ACCOUNT.set_enable(benable);

        			this.divData.form.staDT_ACCOUNT.set_textDecoration(textDecoration);
        		break;
        	}
        }

        this.divData_txtAM_SUPPLY_onchanged = function(obj,e)
        {
        	var cdProof = this.dsSearch.getColumn(0, "CD_PROOF");
        	if(cdProof == "50"){
        		var amVat = 0;
        		if(!this.gfnIsNull(e.postvalue) && e.postvalue > 0 ){
        			var amSupply = nexacro.toNumber(e.postvalue);
        			amVat = nexacro.round(amSupply / 10, 0);
        		}
        		this.dsSearch.setColumn(0, "AM_VAT", amVat); // 소수점 한자리에서 사는 버리오 오는 올림
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staCD_DEPT.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.txtAM_SUPPLY.addEventHandler("onchanged",this.divData_txtAM_SUPPLY_onchanged,this);
            this.btnConf.addEventHandler("onclick",this.btnConf_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHA_BILLDLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
