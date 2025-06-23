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
            this.set_titletext("회계전표조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWDPR_COSTTUJA_DH_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWDPR_COSTTUJA_DH_TUJA</Col></Row><Row><Col id=\"TARGET\">rfc_select</Col><Col id=\"SP\">DWXPR_RFCINFO_SELECT</Col></Row><Row><Col id=\"TARGET\">rfc_save_head</Col><Col id=\"SP\">SIFPR_SITESLIPHD_SAVE</Col></Row><Row><Col id=\"TARGET\">rfc_save_item</Col><Col id=\"SP\">SIFPR_SITESLIPDT_SAVE</Col></Row><Row><Col id=\"TARGET\">getSlip</Col><Col id=\"SP\">DWDPR_COSTTUJA_DH_CREATE</Col></Row><Row><Col id=\"TARGET\">save_exclude</Col><Col id=\"SP\">DWDPR_COSTTUJA_DH_SAVE</Col></Row><Row><Col id=\"SP\">DWDPR_COSTTUJA_DH_CREATE</Col><Col id=\"TARGET\">getSlipClear</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SAP\" type=\"STRING\" size=\"256\"/><Column id=\"YN_IPT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_EXCLUDE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"YM_WORK\"/><Col id=\"YN_SAP\">Y</Col><Col id=\"YN_IPT\">N</Col><Col id=\"YN_EXCLUDE\">N</Col></Row></Rows>");
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


            obj = new Dataset("dsExport", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccfCD_SITE:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("작업년월");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_IPT","ctclYM_WORK:0.0","10.0","72","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("미처리분");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_SAP","chkYN_IPT:0.0","10.0","72","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("SAP전표");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_EXCLUDE","chkYN_IPT:0.0","10.0","127","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("원가제외포함");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.chkYN_SAP","value","dsSearch","YN_SAP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.chkYN_IPT","value","dsSearch","YN_IPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.chkYN_EXCLUDE","value","dsSearch","YN_EXCLUDE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DWD_COSTTUJA_DH_VIEW.xfdl", function() {
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

           if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().YM_WORK))
           {
              this.dsSearch.setColumn(0,"CD_SITE", this.getOwnerFrame().CD_SITE);
              this.dsSearch.setColumn(0,"YM_WORK", this.getOwnerFrame().YM_WORK);
              this.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);

              this.FormBtns.Select.click();
           }else{
              var today = this.gfnGetDate();
              this.dsSearch.setColumn(0,"YM_WORK",today.substr(0,6));
           }
           this.dsSearch.setColumn(0,"YN_IPT", "Y");
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
           this.gfnFormButtonAdd("btnGetCstSlip", "fnGetCstSlip");
           this.gfnFormButtonAdd("btnSlipSearch", "fnSlipSearch");
           this.gfnFormButtonAdd("btnCostSapTuja", "fnCostSapTuja");
           this.gfnFormButtonAdd("btnSlipClear", "fnSlipClear");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
           this.ccfCD_SITE =  this.divSearch.form.ccfCD_SITE;
           this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
           // 그리드 초기화
           this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWD_COSTTUJA_SAP");
           this.dxGrid.addEventHandler("onselectchanged", this.dxGrid_RowCellChanged, this);

           // 그리드 코드파인드 설정
           this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
           this.dxGrid.setEventHandler("onheadclick", this.fnGrid_onheadclick, this);

           this.dxGrid.EnterCell = "fnGrid_EnterCell";
           this.dxGrid.AfterCDTextChanged = "codefind_AfterCDTextChanged";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");
        	this.dsSelect.addColumn("YN_IPT", "string");
        	this.dsSelect.addColumn("YN_EXCLUDE", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("YM_WORK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_SLIP", "string");
        	this.dsSave.addColumn("CD_TRADE", "string");
        	this.dsSave.addColumn("CD_ACCOUNT", "string");
        	this.dsSave.addColumn("AM_ACCOUNT", "string");
        	this.dsSave.addColumn("DS_REM", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("DS_VENDOR", "string");
        	this.dsSave.addColumn("CD_SAUPCODE", "string");
        	this.dsSave.addColumn("YN_EXCLUDE", "string");
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("CD_DEPT_BH", "string");

        	this.dsTujaSave = new Dataset();
        	this.dsTujaSave.addColumn("CD_SITE", "string");
        	this.dsTujaSave.addColumn("YM_WORK", "string");
        	this.dsTujaSave.addColumn("ID_USER", "string");
        	this.dsTujaSave.addColumn("CD_SLIP", "string");
        	this.dsTujaSave.addColumn("CD_TRADE", "string");
        	this.dsTujaSave.addColumn("CD_ACCOUNT", "string");

        	this.dsInfoSap = new Dataset();
        	this.dsInfoSap.addColumn("TY_WRK", "string");
        	this.dsInfoSap.addColumn("DS_PARAM", "string");
        	this.dsInfoSap.addColumn("DS_VALUE", "string");
        	this.dsInfoSap.addColumn("CD_SITE", "string");
        	this.dsInfoSap.addColumn("YM_WORK", "string");

        	this.dsRfcSave = new Dataset();
        	this.dsRfcSave.addColumn("TY_WRK", "string");
        	this.dsRfcSave.addColumn("ID_USER", "string");
        	this.dsRfcSave.addColumn("BUKRS", "string");
        	this.dsRfcSave.addColumn("BELNR", "string");
        	this.dsRfcSave.addColumn("GJAHR", "string");
        	this.dsRfcSave.addColumn("BLART", "string");
        	this.dsRfcSave.addColumn("BLDAT", "string");
        	this.dsRfcSave.addColumn("BUDAT", "string");
        	this.dsRfcSave.addColumn("MONAT", "string");
        	this.dsRfcSave.addColumn("CPUDT", "string");
        	this.dsRfcSave.addColumn("CPUTM", "string");
        	this.dsRfcSave.addColumn("USNAM", "string");
        	this.dsRfcSave.addColumn("XBLNR", "string");
        	this.dsRfcSave.addColumn("STBLG", "string");
        	this.dsRfcSave.addColumn("STJAH", "string");
        	this.dsRfcSave.addColumn("BKTXT", "string");
        	this.dsRfcSave.addColumn("WAERS", "string");
        	this.dsRfcSave.addColumn("BSTAT", "string");

        	this.dsRfcItemSave = new Dataset();
        	this.dsRfcItemSave.addColumn("TY_WRK", "string");
        	this.dsRfcItemSave.addColumn("ID_USER", "string");
        	this.dsRfcItemSave.addColumn("BUKRS", "string");
        	this.dsRfcItemSave.addColumn("BELNR", "string");
        	this.dsRfcItemSave.addColumn("GJAHR", "string");
        	this.dsRfcItemSave.addColumn("BUZEI", "string");
        	this.dsRfcItemSave.addColumn("AUGDT", "string");
        	this.dsRfcItemSave.addColumn("AUGCP", "string");
        	this.dsRfcItemSave.addColumn("AUGBL", "string");
        	this.dsRfcItemSave.addColumn("KOART", "string");
        	this.dsRfcItemSave.addColumn("SHKZG", "string");
        	this.dsRfcItemSave.addColumn("GSBER", "string");
        	this.dsRfcItemSave.addColumn("MWSKZ", "string");
        	this.dsRfcItemSave.addColumn("DMBTR", "bigdecimal");
        	this.dsRfcItemSave.addColumn("WRBTR", "bigdecimal");
        	this.dsRfcItemSave.addColumn("PSWBT", "bigdecimal");
        	this.dsRfcItemSave.addColumn("PSWSL", "bigdecimal");
        	this.dsRfcItemSave.addColumn("WMWST", "bigdecimal");
        	this.dsRfcItemSave.addColumn("HWBAS", "bigdecimal");
        	this.dsRfcItemSave.addColumn("FWBAS", "bigdecimal");
        	this.dsRfcItemSave.addColumn("VALUT", "string");
        	this.dsRfcItemSave.addColumn("ZUONR", "string");
        	this.dsRfcItemSave.addColumn("SGTXT", "string");
        	this.dsRfcItemSave.addColumn("KOKRS", "string");
        	this.dsRfcItemSave.addColumn("KOSTL", "string");
        	this.dsRfcItemSave.addColumn("AUFNR", "string");
        	this.dsRfcItemSave.addColumn("PERNR", "string");
        	this.dsRfcItemSave.addColumn("SAKNR", "string");
        	this.dsRfcItemSave.addColumn("HKONT", "string");
        	this.dsRfcItemSave.addColumn("KUNNR", "string");
        	this.dsRfcItemSave.addColumn("LIFNR", "string");
        	this.dsRfcItemSave.addColumn("HZUON", "string");
        	this.dsRfcItemSave.addColumn("ZFBDT", "string");
        	this.dsRfcItemSave.addColumn("ZTERM", "string");
        	this.dsRfcItemSave.addColumn("ZLSCH", "string");
        	this.dsRfcItemSave.addColumn("ZLSPR", "string");
        	this.dsRfcItemSave.addColumn("ZBFIX", "string");
        	this.dsRfcItemSave.addColumn("HBKID", "string");
        	this.dsRfcItemSave.addColumn("BVTYP", "string");
        	this.dsRfcItemSave.addColumn("PRCTR", "string");
        	this.dsRfcItemSave.addColumn("FISTL", "string");
        	this.dsRfcItemSave.addColumn("XREF1", "string");
        	this.dsRfcItemSave.addColumn("XREF2", "string");
        	this.dsRfcItemSave.addColumn("XREF3", "string");
        	this.dsRfcItemSave.addColumn("BUPLA", "string");
        	this.dsRfcItemSave.addColumn("SECCO", "string");
        	this.dsRfcItemSave.addColumn("HKTID", "string");
        	this.dsRfcItemSave.addColumn("BSCHL", "string");

        	this.dsSlipClear = new Dataset();
        	this.dsSlipClear.addColumn("TY_WRK", "string");
        	this.dsSlipClear.addColumn("DS_PARAM", "string");
        	this.dsSlipClear.addColumn("DS_VALUE", "string");
        	this.dsSlipClear.addColumn("CD_SITE", "string");
        	this.dsSlipClear.addColumn("YM_WORK", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *   조회 버튼
          */
        this.fnSelect = function() {
           if (!this.fnSelectValidate()) return false;

           this.gfnGridBeforeSelect(this.dxGrid);

           this.dsSelect.clearData();
           this.dsSelect.addRow();

           var ynIpt = "Y";
           if(this.dsSearch.getColumn(0, "YN_IPT") != "Y"){
        		ynIpt = "";
           }

           this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
           this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
           this.dsSelect.setColumn(0, "YN_IPT", ynIpt);
           this.dsSelect.setColumn(0, "YN_EXCLUDE", this.dsSearch.getColumn(0, "YN_EXCLUDE"));

           var strSvcId    = "select";
           var strSvcType  = "grid";
           var inProc      = "_dsProc";
           var inData      = "select=dsSelect";
           var outData     = "dsList=select0";
           var strArg      = "";
           var callBackFnc = "fnCallback";

           this.gfnTransaction( strSvcId ,    // transaction을 구분하기 위한 svc id값
                          strSvcType ,    // transaction을 요청할 구분
                          inProc,         // Procedure 정보 Dataset 이름
                          inData ,       // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
                          outData ,       // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
                          strArg,       // 입력값으로 보낼 arguments, strFormData="20120607"
                          callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *   입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        	this.dsList.setColumn(nrow, "TY_SYSTEM", "USR");
        	this.dsList.setColumn(nrow, "YN_DEL", "Y");
        	this.dsList.setColumn(nrow, "YN_NEW", "Y");
        	this.dsList.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        }

        /*
         *   삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid,"YN_DEL");
        }

        /*
         *   저장 버튼
         */
        this.fnSave = function() {
           // 그리드 필수항목 체크
           if (!this.gfnGridValidate(this.dxGrid)) return;

           this.dxGrid.updateToDataset();

           this.dsSave.clearData();

           for (var i = 0; i < this.dsList.rowcount; i++) {
              var flag = this.gfnGetFlag(this.dsList, i);

              switch(flag) {
                 case "I":
        		 case "U":
        		 case "D":
                    var nrow = this.dsSave.addRow();
                    this.dsSave.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        			this.dsSave.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
                    this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			this.dsSave.setColumn(nrow, "CD_SLIP", this.dsList.getColumn(i, "CD_SLIP"));
        			this.dsSave.setColumn(nrow, "CD_TRADE", this.dsList.getColumn(i, "CD_TRADE"));
        			this.dsSave.setColumn(nrow, "CD_ACCOUNT", this.dsList.getColumn(i, "CD_ACCOUNT"));
        			this.dsSave.setColumn(nrow, "AM_ACCOUNT", this.dsList.getColumn(i, "AM_ACCOUNT"));
        			this.dsSave.setColumn(nrow, "DS_REM", this.dsList.getColumn(i, "DS_REM"));
        			this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        			this.dsSave.setColumn(nrow, "DS_VENDOR", this.dsList.getColumn(i, "DS_VENDOR"));
        			this.dsSave.setColumn(nrow, "CD_SAUPCODE", this.dsList.getColumn(i, "CD_SAUPCODE"));
        			this.dsSave.setColumn(nrow, "YN_EXCLUDE", this.dsList.getColumn(i, "YN_EXCLUDE"));
        			this.dsSave.setColumn(nrow, "TY_WRK", flag);
                    this.dsSave.setColumn(nrow, "CD_DEPT_BH", this.dsList.getColumn(i, "CD_DEPT_BH"));
                    break;
              }
           }

           if (this.dsSave.rowcount == 0) return;

           var strSvcId    = "save_exclude";
           var strSvcType  = "save";
           var inProc      = "_dsProc";
           var inData      = "save_exclude=dsSave";
           var outData     = "";
           var strArg      = "";
           var callBackFnc = "fnCallback";

           this.gfnTransaction( strSvcId ,    // transaction을 구분하기 위한 svc id값
                          strSvcType ,    // transaction을 요청할 구분
                          inProc,         // Procedure 정보 Dataset 이름
                          inData ,       // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
                          outData ,       // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
                          strArg,       // 입력갑스로 보낼 arguments, strFormData="20120607"
                          callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *   엑셀 버튼
         */
        this.fnExcel = function() {
           this.gfnExcelExport(this.dxGrid);
        }

        /*
         *   출력 버튼
         */
        this.fnPrint = function() {
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *   조회 Validate
         */
        this.fnSelectValidate = function() {
           var validate = true;

           if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
              validate = false;
              //Alert후 실행할 처리
              this.fnVaidateCallback = function() {
                 this.divSearch.form.ccfCD_SITE.form.CDTextBox.setFocus();
              }
              this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
           }
           else if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_WORK"))) {
              validate = false;
              //Alert후 실행할 처리
              this.fnVaidateCallback = function() {
                 this.divSearch.form.ctclYM_WORK.form.TextBox.setFocus();
              }
              this.gfnAlert("작업년월을 입력하세요.", "fnVaidateCallback");
           }

           return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *   콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
           if (svcID == "select") {
              this.gfnGridAfterSelect(this.dxGrid);
           }
           else if(svcID == "save") {
              if (errorCode == 0) {
                 this.gfnAlert("원가자료투입/취소 정상 처리되었습니다.");
                 this.FormBtns.Select.click();
              } else {
                 this.gfnAlert(errorMsg);
              }
           }
           else if(svcID == "rfc_select") {
        	  if (errorCode == 0) {
        		 this.fnSap();
        	  }
        	  else {
        		 this.gfnAlert(errorMsg);
        	  }
           }
           else if(svcID == "sap") {
        		if(this.dsExport.rowcount > 0) {
        			if(this.dsExport.getColumn(0, "E_RTNCD") == "S") {
        				this.fnSapHeadSave();
        			}
        			else {
        				// 실패
        				this.gfnAlert(this.dsExport.getColumn(0, "E_RTNMSG"));
        				return false;
        			}
        		}
           }
           else if(svcID == "rfc_save_head")
        	{
        		if (errorCode == 0) {
        			if(this.dsList2.rowcount > 0) {
        				this.fnSapItemSave();
        			}
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}

        	}
        	else if(svcID == "rfc_save_item")
        	{
        		if (errorCode == 0) {
        			this.fnMessage_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("원가전표(SAP)가져오기가 완료되었습니다.", "fnMessage_callback");
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "getSlip")
        	{
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		}
        		else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "save_exclude") {
              if (errorCode == 0) {
                 this.FormBtns.Select.click();
              } else {
                 this.gfnAlert(errorMsg);
              }
           }
           else if(svcID == "getSlipClear"){
        	  if (errorCode == 0) {
                 this.gfnAlert("원가자료 초기화가 정상 처리되었습니다.");
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
           return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.dxGrid_RowCellChanged = function(obj,e)
        {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, e.cell);	// 컬럼 인덱스로 컬럼명 가져오기
        	var rows = obj.getSelectedDatasetRows();
        	var sum = 0;
        	var bRet = "";
        	var nGrdSpcRow = this.dsGridSpec.findRow("DS_FIELD", colnm);

        	for(var i = 0; i < rows.length; i++) {
        		/*var am = this.dsList.getColumn(rows[i], colnm);*/
        		var am = this.gfnIsNull(this.dsList.getColumn(rows[i], colnm)) ? 0 : this.dsList.getColumn(rows[i], colnm);

        		//bRet = nexacro.isNumeric(am);
        		bRet = isNaN(am); // 문자:true, 숫자:false
        		//alert(am+":::"+bRet);
        		if(bRet){
        			break;
        		}

        		if(!this.gfnIsNull(am)) {
        			sum += am;
        		}
        	}

        	if(this.dsGridSpec.getColumn(nGrdSpcRow, "TY_CELLTYPE") == "TEXT" || this.dsGridSpec.getColumn(nGrdSpcRow, "TY_CELLTYPE") === undefined){
        		bRet = true;
        	}else{
        		bRet = false;
        	}

        	var colDS_BIMOK = this.dxGrid.getBindCellIndex("body", "DS_BIMOK");

        	if(!bRet){	// 숫자면 합계표시, 문자면 null
        		this.dxGrid.setCellProperty("summ", colDS_BIMOK, "text", "선택합계=" + this.gfnAppendComma(sum));
        	}else{
        		this.dxGrid.setCellProperty("summ", colDS_BIMOK, "text", "");
        	}
        }

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
        	if (id == "DZX_CFSITE") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	}else if(id == "DWB_MAIN_SUB_SITE"){
        		var cd_site = this.dsSearch.getColumn(0, "CD_SITE");

        		if(this.gfnIsNull(cd_site)) {
        			this.gfnAlert("현장코드를 먼저 입력하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	}else if(id="DWB_COSTTUJA_CDACCOUNT"){
        		dsUserParam.setColumn(nrow, "CD_ACCOUNT", "");
        	}
        	return true;
        }


        // 그리드 헤드 클릭 이벤트 재정의
        // this.fnGrid_onheadclick = function(objGrid, e) {
        // 	var cell = this._gfnGridGetBodyCellIndex(objGrid, e.cell);
        // 	var colnm = this.gfnGridGetBindColumnNameByIndex(objGrid, cell);
        // 	// 체크박스 클릭한 경우.
        // 	if(colnm == "YN_TUJA") {
        // 		var sVal = objGrid.getCellProperty("head", e.cell, "text");
        // 		var sChk;
        // 		if (sVal == "1") {
        // 			objGrid.setCellProperty("head", e.cell, "text", "0");
        // 			sChk="0";
        // 		} else {
        // 			objGrid.setCellProperty("head", e.cell, "text", "1");
        // 			sChk="1";
        // 		}
        //
        // 		for(var i = 0; i < this.dsList.rowcount; i++)
        // 		{
        // 			if(this.dsList.getColumn(i, "YN_ERP") != "Y" && this.gfnGetFlag(this.dsList, i) != "#")
        // 			{
        // 				this.dsList.setColumn(i, "YN_TUJA", sChk);
        // 			}
        // 		}
        // 	}
        // 	// 체크박스를 클릭한게 아니라면 기존의 공통의 그리드 헤드 클릭 이벤트를 탄다.
        // 	else {
        // 		this.gfnGrid_onheadclick(objGrid, e);
        // 	}
        // };


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         //원가자료투입/취소 버튼 추가
        this.fnCostSapTuja = function(obj,e) {
        	if(this.dsList.findRow("YN_TUJA", "Y") < 0){
        		this.gfnAlert("원가자료투입/취소 하실 정보를 선택하시기 바랍니다.");
        		return false;
        	}

        	var chkCnt = 0;

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "YN_TUJA") == "Y"){
        			chkCnt = chkCnt + 1;
        		}
        	}

        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.divSearch.form.ccfCD_SITE.form.DSTextBox.text + "\n"
        			+ "기성년월 : [" + this.dsSearch.getColumn(0, "YM_WORK").substr(0,6) + "] \n"
        			/*+ "기존자료 삭제 후 투입/취소 처리됩니다." +  "\n\n"*/
        			+ "원가자료투입 처리 하시겠습니까?";

        	this.gfnConfirm(msg, "fnCostSapTuja_callback");
        }

        this.fnCostSapTuja_callback = function(strId, val) {
        	if(val == true) {
        		this.dsTujaSave.clearData();

        		for (var i = 0; i < this.dsList.rowcount; i++) {
        			/*if(this.dsList.getColumn(i, this.ucFlag) == "U"){*/
        			if(this.dsList.getColumn(i, "YN_TUJA") == "Y"){
        				var nrow = this.dsTujaSave.addRow();

        				this.dsTujaSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsTujaSave.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        				this.dsTujaSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsTujaSave.setColumn(nrow, "CD_SLIP", this.dsList.getColumn(i, "CD_SLIP"));
        				this.dsTujaSave.setColumn(nrow, "CD_TRADE", this.dsList.getColumn(i, "CD_TRADE"));
        				this.dsTujaSave.setColumn(nrow, "CD_ACCOUNT", this.dsList.getColumn(i, "CD_ACCOUNT"));
        			}
        		}
        	}

        	if (this.dsTujaSave.rowcount == 0) return;

        	var strSvcId = "save";
        	var strSvcType = "save";
        	var inProc = "_dsProc";
        	var inData = "save=dsTujaSave";
        	var outData = "";
        	var strArg = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, // transaction을 구분하기 위한 svc id값
        						strSvcType, // transaction을 요청할 구분
        						inProc, // Procedure 정보 Dataset 이름
        						inData, // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, // 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        //전표조회 버튼 이벤트
        this.fnSlipSearch = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        // 	param.GJAHR = this.dsList.getColumn(this.dsList.rowposition, "GJAHR");
        // 	param.BELNR = this.dsList.getColumn(this.dsList.rowposition, "BELNR");
        	param.CD_TRADE = this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE");

        	/*this.gfnFormOpen("DHA", "DHA_SAPSLIP_SEARCH", "", param);*/
        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);
        }

        //원가전표(SAP)가져오기
        this.fnGetCstSlip = function(obj,e) {
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))){
        		this.gfnAlert("현장코드를 입력하세요.", "");
        	}

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "YM_WORK"))){
        		this.gfnAlert("작업년월을 입력하세요.", "");
        	}

        	//this.fnSelectSap();
        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.divSearch.form.ccfCD_SITE.form.DSTextBox.text + "\n"
                  + "기성년월 : [" + this.dsSearch.getColumn(0, "YM_WORK").substr(0,6) + "] \n"
                  + "해당 원가전표 가져오기를 처리 하시겠습니까?";

           this.gfnConfirm(msg, "fnGetSlip");
        };

        this.fnGetSlip = function(strId, val) {
        	if(val == true) {
        		this.dsInfoSap.clearData();
        		this.dsInfoSap.addRow();
        		this.dsInfoSap.setColumn(0, "TY_WRK", "Q");
        		this.dsInfoSap.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsInfoSap.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));

        		if(this.dsInfoSap.rowcount == 0) return;

        		var strSvcId    = "getSlip";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "getSlip=dsInfoSap";
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
        	}
        }

        // 원가전표 초기화
        this.fnSlipClear = function(){
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))){
        		this.gfnAlert("현장코드를 입력하세요.", "");
        	}

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "YM_WORK"))){
        		this.gfnAlert("작업년월을 입력하세요.", "");
        	}

        	//this.fnSelectSap();
        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.divSearch.form.ccfCD_SITE.form.DSTextBox.text + "\n"
                  + "기성년월 : [" + this.dsSearch.getColumn(0, "YM_WORK").substr(0,6) + "] \n"
                 + "해당 원가전표를 초기화 하시겠습니까?";

        	this.gfnConfirm(msg, "fnGetSlipClear");
        }

        this.fnGetSlipClear = function(strId, val){
        	if(val == true) {
        		this.dsSlipClear.clearData();
        		this.dsSlipClear.addRow();
        		this.dsSlipClear.setColumn(0, "TY_WRK", "DD");
        		this.dsSlipClear.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsSlipClear.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));

        		if(this.dsSlipClear.rowcount == 0) return;

        		var strSvcId    = "getSlipClear";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "getSlipClear=dsSlipClear";
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
        	}
        }

         /*
          *	SAP 처리
          */
         this.fnSelectSap = function() {

        	this.dsInfoSap.clearData();
        	this.dsInfoSap.addRow();

        	var ds_value = [];
        	ds_value.push(this.dsSearch.getColumn(0, "CD_SITE"));
        	trace(this.dsSearch.getColumn(0, "YM_WORK"));
        	ds_value.push(this.dsSearch.getColumn(0, "YM_WORK").substr(0,6)+"01");
        	ds_value.push(this.gfnGetLastDate(this.dsSearch.getColumn(0, "YM_WORK").substr(0,6)));

        	this.dsInfoSap.setColumn(0, "TY_WRK", "Q");
        	this.dsInfoSap.setColumn(0, "DS_PARAM", this.FormInfo.DS_PARAM);
        	this.dsInfoSap.setColumn(0, "DS_VALUE", ds_value.join(','));

        	// SAP 호출
        	var strSvcId    = "rfc_select";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "rfc_select=dsInfoSap";
        	var outData     = "dsFunc=rfc_select0 dsInParam=rfc_select1 dsOutTables=rfc_select2";
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
        };

        this.fnSapHeadSave = function()
        {
        	this.dsRfcSave.clearData();

        	if(this.dsList1.rowcount == 0) return;

        	for (var i = 0; i < this.dsList1.rowcount; i++) {
        		var nrow = this.dsRfcSave.addRow();
        		this.dsRfcSave.setColumn(nrow, "TY_WRK", "I");
        		this.dsRfcSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		this.dsRfcSave.setColumn(nrow, "BUKRS", this.dsList1.getColumn(i, "BUKRS"));
        		this.dsRfcSave.setColumn(nrow, "BELNR", this.dsList1.getColumn(i, "BELNR"));
        		this.dsRfcSave.setColumn(nrow, "GJAHR", this.dsList1.getColumn(i, "GJAHR"));
        		this.dsRfcSave.setColumn(nrow, "BLART", this.dsList1.getColumn(i, "BLART"));
        		this.dsRfcSave.setColumn(nrow, "BLDAT", this.dsList1.getColumn(i, "BLDAT"));
        		this.dsRfcSave.setColumn(nrow, "BUDAT", this.dsList1.getColumn(i, "BUDAT"));
        		this.dsRfcSave.setColumn(nrow, "MONAT", this.dsList1.getColumn(i, "MONAT"));
        		this.dsRfcSave.setColumn(nrow, "CPUDT", this.dsList1.getColumn(i, "CPUDT"));
        		this.dsRfcSave.setColumn(nrow, "CPUTM", this.dsList1.getColumn(i, "CPUTM"));
        		this.dsRfcSave.setColumn(nrow, "USNAM", this.dsList1.getColumn(i, "USNAM"));
        		this.dsRfcSave.setColumn(nrow, "XBLNR", this.dsList1.getColumn(i, "XBLNR"));
        		this.dsRfcSave.setColumn(nrow, "STBLG", this.dsList1.getColumn(i, "STBLG"));
        		this.dsRfcSave.setColumn(nrow, "STJAH", this.dsList1.getColumn(i, "STJAH"));
        		this.dsRfcSave.setColumn(nrow, "BKTXT", this.dsList1.getColumn(i, "BKTXT"));
        		this.dsRfcSave.setColumn(nrow, "WAERS", this.dsList1.getColumn(i, "WAERS"));
        		this.dsRfcSave.setColumn(nrow, "BSTAT", this.dsList1.getColumn(i, "BSTAT"));
        	}

        	if (this.dsRfcSave.rowcount == 0) return;

        	var strSvcId    = "rfc_save_head";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "rfc_save_head=dsRfcSave";
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
        }

        this.fnSapItemSave = function()
        {
        	this.dsRfcItemSave.clearData();

        	if(this.dsList2.rowcount == 0) return;

        	for (var i = 0; i < this.dsList2.rowcount; i++) {
        		var nrow = this.dsRfcItemSave.addRow();
        		this.dsRfcItemSave.setColumn(nrow, "TY_WRK", "I");
        		this.dsRfcItemSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		this.dsRfcItemSave.setColumn(nrow, "BUKRS", this.dsList2.getColumn(i, "BUKRS"));
        		this.dsRfcItemSave.setColumn(nrow, "BELNR", this.dsList2.getColumn(i, "BELNR"));
        		this.dsRfcItemSave.setColumn(nrow, "GJAHR", this.dsList2.getColumn(i, "GJAHR"));
        		this.dsRfcItemSave.setColumn(nrow, "BUZEI", this.dsList2.getColumn(i, "BUZEI"));
        		this.dsRfcItemSave.setColumn(nrow, "AUGDT", this.dsList2.getColumn(i, "AUGDT"));
        		this.dsRfcItemSave.setColumn(nrow, "AUGCP", this.dsList2.getColumn(i, "AUGCP"));
        		this.dsRfcItemSave.setColumn(nrow, "AUGBL", this.dsList2.getColumn(i, "AUGBL"));
        		this.dsRfcItemSave.setColumn(nrow, "KOART", this.dsList2.getColumn(i, "KOART"));
        		this.dsRfcItemSave.setColumn(nrow, "SHKZG", this.dsList2.getColumn(i, "SHKZG"));
        		this.dsRfcItemSave.setColumn(nrow, "GSBER", this.dsList2.getColumn(i, "GSBER"));
        		this.dsRfcItemSave.setColumn(nrow, "MWSKZ", this.dsList2.getColumn(i, "MWSKZ"));
        		this.dsRfcItemSave.setColumn(nrow, "DMBTR", this.dsList2.getColumn(i, "DMBTR"));
        		this.dsRfcItemSave.setColumn(nrow, "WRBTR", this.dsList2.getColumn(i, "WRBTR"));
        		this.dsRfcItemSave.setColumn(nrow, "PSWBT", this.dsList2.getColumn(i, "PSWBT"));
        		this.dsRfcItemSave.setColumn(nrow, "PSWSL", this.dsList2.getColumn(i, "PSWSL"));
        		this.dsRfcItemSave.setColumn(nrow, "WMWST", this.dsList2.getColumn(i, "WMWST"));
        		this.dsRfcItemSave.setColumn(nrow, "HWBAS", this.dsList2.getColumn(i, "HWBAS"));
        		this.dsRfcItemSave.setColumn(nrow, "FWBAS", this.dsList2.getColumn(i, "FWBAS"));
        		this.dsRfcItemSave.setColumn(nrow, "VALUT", this.dsList2.getColumn(i, "VALUT"));
        		this.dsRfcItemSave.setColumn(nrow, "ZUONR", this.dsList2.getColumn(i, "ZUONR"));
        		this.dsRfcItemSave.setColumn(nrow, "SGTXT", this.dsList2.getColumn(i, "SGTXT"));
        		this.dsRfcItemSave.setColumn(nrow, "KOKRS", this.dsList2.getColumn(i, "KOKRS"));
        		this.dsRfcItemSave.setColumn(nrow, "KOSTL", this.dsList2.getColumn(i, "KOSTL"));
        		this.dsRfcItemSave.setColumn(nrow, "AUFNR", this.dsList2.getColumn(i, "AUFNR"));
        		this.dsRfcItemSave.setColumn(nrow, "PERNR", this.dsList2.getColumn(i, "PERNR"));
        		this.dsRfcItemSave.setColumn(nrow, "SAKNR", this.dsList2.getColumn(i, "SAKNR"));
        		this.dsRfcItemSave.setColumn(nrow, "HKONT", this.dsList2.getColumn(i, "HKONT"));
        		this.dsRfcItemSave.setColumn(nrow, "KUNNR", this.dsList2.getColumn(i, "KUNNR"));
        		this.dsRfcItemSave.setColumn(nrow, "LIFNR", this.dsList2.getColumn(i, "LIFNR"));
        		this.dsRfcItemSave.setColumn(nrow, "HZUON", this.dsList2.getColumn(i, "HZUON"));
        		this.dsRfcItemSave.setColumn(nrow, "ZFBDT", this.dsList2.getColumn(i, "ZFBDT"));
        		this.dsRfcItemSave.setColumn(nrow, "ZTERM", this.dsList2.getColumn(i, "ZTERM"));
        		this.dsRfcItemSave.setColumn(nrow, "ZLSCH", this.dsList2.getColumn(i, "ZLSCH"));
        		this.dsRfcItemSave.setColumn(nrow, "ZLSPR", this.dsList2.getColumn(i, "ZLSPR"));
        		this.dsRfcItemSave.setColumn(nrow, "ZBFIX", this.dsList2.getColumn(i, "ZBFIX"));
        		this.dsRfcItemSave.setColumn(nrow, "HBKID", this.dsList2.getColumn(i, "HBKID"));
        		this.dsRfcItemSave.setColumn(nrow, "BVTYP", this.dsList2.getColumn(i, "BVTYP"));
        		this.dsRfcItemSave.setColumn(nrow, "PRCTR", this.dsList2.getColumn(i, "PRCTR"));
        		this.dsRfcItemSave.setColumn(nrow, "FISTL", this.dsList2.getColumn(i, "FISTL"));
        		this.dsRfcItemSave.setColumn(nrow, "XREF1", this.dsList2.getColumn(i, "XREF1"));
        		this.dsRfcItemSave.setColumn(nrow, "XREF2", this.dsList2.getColumn(i, "XREF2"));
        		this.dsRfcItemSave.setColumn(nrow, "XREF3", this.dsList2.getColumn(i, "XREF3"));
        		this.dsRfcItemSave.setColumn(nrow, "BUPLA", this.dsList2.getColumn(i, "BUPLA"));
        		this.dsRfcItemSave.setColumn(nrow, "SECCO", this.dsList2.getColumn(i, "SECCO"));
        		this.dsRfcItemSave.setColumn(nrow, "HKTID", this.dsList2.getColumn(i, "HKTID"));
        		this.dsRfcItemSave.setColumn(nrow, "BSCHL", this.dsList2.getColumn(i, "BSCHL"));
        	}

        	if (this.dsRfcItemSave.rowcount == 0) return;

        	var strSvcId    = "rfc_save_item";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "rfc_save_item=dsRfcItemSave";
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
        }

        this.dsSearch_onvaluechanged = function(obj,e)
        {
           if(e.oldvalue != e.newvalue) {
              this.gfnSetFormStatus(this);   // 폼상태 초기화
              /*this.gfnGridClear(this.dxGrid);   */
        	  /*this.FormBtns.Select.click();*/
        // 	  if(e.columnid == "YN_IPT"){
        // 		if("Y" == this.dsSearch.getColumn(0,"YN_IPT")){
        // 			for(var i = 0; i < this.dsList.rowcount; i++){
        // 				if("미처리" == this.dsList.getColumn(i,"YN_IPT")){
        // 					this.dsList.setColumn(i,"YN_TUJA","Y");
        // 				}
        // 			}
        // 		}
        // 	  }
           }
        };
        this.divData_objGrid_oncelldblclick = function(obj,e)
        {
        	if (obj.getCellPropertyValue(e.row, e.cell, 'cssclass') != 'BACK_ReadOnly')
        	{
        		return false;
        	}
        	this.fnSlipSearch();
        };


        this.fnGrid_EnterCell = function(obj, row, cell) {
        	// 수정가능 true, false 처리하려는 컬럼에 대해서만 return 처리할것.
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);	// 클릭한 cell의 컬럼명

        	if(colnm == "CD_SLIP" || colnm == "CD_SLIP" || colnm == "CD_SLIP" || colnm == "CD_AUTOSLIP" || colnm == "DS_AUTOSLIP" || colnm == "CD_DEPT_BH" || colnm == "YN_IPT"|| colnm == "DS_SYSTEM"|| colnm == "DS_SITE"|| colnm == "DS_BIMOK" ||colnm == "DT_ACCOUNT"){
        		return false;
        	}else if(colnm == "CD_SITE" && this.dsList.getColumn(row, "YN_NEW") == "Y"){
        		return false;
        	//원가제외, 체크박스만 전체허용
        	}else if(colnm == "YN_EXCLUDE" || colnm == "YN_TUJA"||colnm == "CD_SITE"){
        		return true;
        	//사용자 추가건만 수정가능
        	}else if(this.dsList.getColumn(row, "TY_SYSTEM") != "USR"){
        		return false;
        	//신규항목만 계정코드 변경가능
        	}else if(colnm == "CD_ACCOUNT" && this.dsList.getColumn(row, "YN_NEW") != "Y"){
        		return false;
        	}
         	return true;
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.codefind_AfterCDTextChanged = function(id) {
        	if(id == "DWB_COSTTUJA_CDACCOUNT") {
        		var row = this.dsList.rowposition
        		this.dsList.setColumn(row, "DS_BIMOK", "");
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWD_COSTTUJA_DH_VIEW.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
