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
            this.set_titletext("안분대상조정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWDPR_JTCOST_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWDPR_JTCOST_SAVE</Col></Row><Row><Col id=\"TARGET\">execute</Col><Col id=\"SP\">DWDPR_JTCOST_EXECUTE</Col></Row><Row><Col id=\"TARGET\">rfc_select</Col><Col id=\"SP\">DWXPR_RFCINFO_SELECT</Col></Row><Row><Col id=\"TARGET\">rfc_save_head</Col><Col id=\"SP\">SIFPR_SITESLIPHD_SAVE</Col></Row><Row><Col id=\"TARGET\">rfc_save_item</Col><Col id=\"SP\">SIFPR_SITESLIPDT_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFunc", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInParam", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutTables", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProcSap", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("작업년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
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
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DWD_JTCOST.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.FR_JTMONTH = 0;

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
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		this.dsSearch.setColumn(0, "YM_WORK", this.getOwnerFrame().YM_WORK);
        	}
        	else
        	{
        		var today = this.gfnGetDate();
        		this.dsSearch.setColumn(0, "YM_WORK", today.substr(0,6));
        	}

        	this.FR_JTMONTH = this.gfnGetConfig("DW", "FR_JTMONTH");
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
        	this.btnGetPrdvSlip = this.gfnFormButtonAdd("btnGetPrdvSlip", "fnGetPrdvSlip");
        	this.btnPrdvSlipDel = this.gfnFormButtonAdd("btnPrdvSlipDel", "fnPrdvSlipDel");
        	this.btnJtJiktu = this.gfnFormButtonAdd("btnJtJiktu", "fnJtJiktu");
        	this.btnJtJibun = this.gfnFormButtonAdd("btnJtJibun", "fnJtJibun");
        	this.btnSlipSearch = this.gfnFormButtonAdd("btnSlipSearch", "fnSlipSearch");

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWD_JTCOST");

        	this.dsList.addEventHandler("oncolumnchanged", this.dsList_ColumnChanged, this);

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("YM_WORK", "string");
        	this.dsSave.addColumn("NO_PERIOD", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("NO_SLIP", "string");
        	this.dsSave.addColumn("NO_LINE", "string");
        	this.dsSave.addColumn("CD_ACCOUNT", "string");
        	this.dsSave.addColumn("DS_ACCOUNT", "string");
        	this.dsSave.addColumn("DT_ACCOUNT", "string");
        	this.dsSave.addColumn("CD_SEMOK", "string");
        	this.dsSave.addColumn("AM_TAXBILL", "bigdecimal");
        	this.dsSave.addColumn("AM_VAT", "bigdecimal");
        	this.dsSave.addColumn("AM_BILL", "bigdecimal");
        	this.dsSave.addColumn("AM_ETC", "bigdecimal");
        	this.dsSave.addColumn("YN_SYSTEM", "string");
        	this.dsSave.addColumn("CD_IPTDIV", "string");
        	this.dsSave.addColumn("YN_DIVTARGET", "string");
        	this.dsSave.addColumn("YN_CHANGE", "string");
        	this.dsSave.addColumn("YN_DIVEXECUTE", "string");
        	this.dsSave.addColumn("DS_VENDOR", "string");
        	this.dsSave.addColumn("RM_BIGO", "string");
        	this.dsSave.addColumn("CD_JIKTU", "string");
        	this.dsSave.addColumn("TY_TAXSAP", "string");

        	this.dsRfcSelect = new Dataset();
        	this.dsRfcSelect.addColumn("TY_WRK", "string");
        	this.dsRfcSelect.addColumn("DS_PARAM", "string");
        	this.dsRfcSelect.addColumn("DS_VALUE", "string");

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

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("TY_WRK", "string");
        	this.dsExec.addColumn("ID_USER", "string");
        	this.dsExec.addColumn("CD_SITE", "string");
        	this.dsExec.addColumn("YM_WORK", "string");
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

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "TY_WRK", "Q");
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	var ym_work = this.dsSearch.getColumn(0, "YM_WORK");
        	this.dsSelect.setColumn(0, "YM_WORK", ym_work.substr(0,6));

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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	//var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
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
        				this.dsSave.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				var ym_work = this.dsSearch.getColumn(0, "YM_WORK");
        				this.dsSave.setColumn(nrow, "YM_WORK", ym_work.substr(0,6));
        				this.dsSave.setColumn(nrow, "NO_PERIOD", this.dsList.getColumn(i, "NO_PERIOD"));
        				this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsSave.setColumn(nrow, "NO_SLIP", this.dsList.getColumn(i, "NO_SLIP"));
        				this.dsSave.setColumn(nrow, "NO_LINE", this.dsList.getColumn(i, "NO_LINE"));
        				this.dsSave.setColumn(nrow, "CD_ACCOUNT", this.dsList.getColumn(i, "CD_ACCOUNT"));
        				this.dsSave.setColumn(nrow, "DS_ACCOUNT", this.dsList.getColumn(i, "DS_ACCOUNT"));
        				var dt_account = this.dsList.getColumn(i, "DT_ACCOUNT");
        				//this.dsSave.setColumn(nrow, "DT_ACCOUNT", dt_account.replace(/[-]/g, ""));
        				if(!this.gfnIsNull(dt_account)){
        					this.dsSave.setColumn(nrow, "DT_ACCOUNT", dt_account.replace(/[-]/g, ""));
        				}else{
        					this.dsSave.setColumn(nrow, "DT_ACCOUNT", dt_account);
        				}

        				this.dsSave.setColumn(nrow, "CD_SEMOK", this.dsList.getColumn(i, "CD_SEMOK"));
        				this.dsSave.setColumn(nrow, "AM_TAXBILL", this.dsList.getColumn(i, "AM_TAXBILL"));
        				this.dsSave.setColumn(nrow, "AM_VAT", this.dsList.getColumn(i, "AM_VAT"));
        				this.dsSave.setColumn(nrow, "AM_BILL", this.dsList.getColumn(i, "AM_BILL"));
        				this.dsSave.setColumn(nrow, "AM_ETC", this.dsList.getColumn(i, "AM_ETC"));
        				this.dsSave.setColumn(nrow, "YN_SYSTEM", this.dsList.getColumn(i, "YN_SYSTEM"));
        				this.dsSave.setColumn(nrow, "CD_IPTDIV", this.dsList.getColumn(i, "CD_IPTDIV"));
        				this.dsSave.setColumn(nrow, "YN_DIVTARGET", this.dsList.getColumn(i, "YN_DIVTARGET"));
        				this.dsSave.setColumn(nrow, "YN_CHANGE", this.dsList.getColumn(i, "YN_CHANGE"));
        				this.dsSave.setColumn(nrow, "YN_DIVEXECUTE", this.dsList.getColumn(i, "YN_DIVEXECUTE"));
        				this.dsSave.setColumn(nrow, "DS_VENDOR", this.dsList.getColumn(i, "DS_VENDOR"));
        				this.dsSave.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsSave.setColumn(nrow, "CD_JIKTU", this.dsList.getColumn(i, "CD_JIKTU"));
        				this.dsSave.setColumn(nrow, "TY_TAXSAP", this.dsList.getColumn(i, "TY_TAXSAP"));


        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
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
        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        		validate = false;

        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_WORK"))) {
        		validate = false;

        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctclYM_WORK.setFocus();
        		}
        		this.gfnAlert("작업년월를 입력하세요.", "fnVaidateCallback");
        	}

        	return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, args)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "execute") {
        		if (errorCode == 0) {
        			var json = this.gfnArgsToJson(args);

        			if(json.gubun == "DEL_SAP")
        			{
        				this.fnCallback_DelSap = function()
        				{
        					this.FormBtns.Select.click();
        				}

        				this.gfnAlert("안분전표삭제가 정상 처리되었습니다.", "fnCallback_DelSap");
        			}
        			else if(json.gubun == "GET_SAP")
        			{
        				this.fnCallback_GetSap = function()
        				{
        					this.FormBtns.Select.click();
        				}
        				this.gfnAlert("안분전표생성이 정상 처리되었습니다.", "fnCallback_GetSap");
        			}
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "rfc_select")
        	{
        		if (errorCode == 0) {
        			this.fnSap();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "sap")
        	{
        		if (errorCode == 0) {
        			if(this.dsList1.rowcount > 0) {
        				this.fnSapHeadSave();
        			}
        		} else {
        			this.gfnAlert(errorMsg);
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
        			this.fnExecute_GetSap();
        		}
        		else
        		{
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

        //그리드 값변경 이벤트
        this.dsList_ColumnChanged = function(obj, e)
        {
        	// trace("그리드 값변경 이벤트"+ "\n columnid->" + e.columnid + "\n oldvalue->" + e.oldvalue 	+ "\n newvalue->" + e.newvalue )

        	// 세금코드
        	if(e.columnid == "TY_TAXSAP"){
        		if(e.newvalue != e.oldvalue && !this.gfnIsNull(e.newvalue)){
        			var amBill = this.dsList.getColumn(e.row, "AM_BILL");	// 계산서
        			var amEtc = this.dsList.getColumn(e.row, "AM_ETC");		// 기타증빙
        			if(e.newvalue == "10" || e.oldvalue == "10" ||e.newvalue == "11" || e.oldvalue == "11"
        			 ||e.newvalue == "13" || e.oldvalue == "13" ||e.newvalue == "14" || e.oldvalue == "14"
        			){
        			// 세금코드가 변경전 10, 변경후 10 아무변화없음
        			/*
        				10	세금계산서(일반매입(10%))
        				11	세금계산서(안분제외(10%))
        				13	세금계산서(불공제)
        				14	세금계산서(영세율)
        			*/
        			}else if(e.oldvalue == "15"){
        			// 15	계산서(면세)
        			// 세금코드가 변경전 15-> 아무거나 AM_BILL금액을 AM_ETC 로 이동
        				obj.setColumn(e.row, "AM_BILL", 0);
        				obj.setColumn(e.row, "AM_ETC", amBill);
        			}else if(e.newvalue == "15"){
        			// 세금코드가 변경전 아무거나 변경후 15 : AM_ETC을 AM_BILL 로 이동
        				obj.setColumn(e.row, "AM_BILL", amEtc);
        				obj.setColumn(e.row, "AM_ETC", 0);
        			}
        		}
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        // 아래부터는 확장버튼.
        this.fnGetPrdvSlip = function(obj,e) {

        	var param = {};
        	//var today = this.gfnGetDate();

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.YM_WORK = this.dsSearch.getColumn(0, "YM_WORK").substr(0,6);
        	param.FR_WORK = this.dsSearch.getColumn(0, "YM_WORK").substr(0,6) + "01";
        	param.TO_WORK = this.gfnGetLastDate(this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWD_JTCOSTDLG", "fnGetPrdvSlip_callback", param, 480, 280);


        // 	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "]" + this.divSearch.form.ccfCD_SITE.form.DSTextBox.text
        // 			+ "\n작업년월 : [" + this.dsSearch.getColumn(0, "YM_WORK") + "]"
        // 			+ "\n안분대상전표 중 추가된 전표만 가져옵니다."
        // 			+ "\n\n안분대상전표를 가져오기 하시겠습니까?";
        //
        // 	this.gfnConfirm(msg, "fnGetPrdvSlip_callback");
        }

        this.fnGetPrdvSlip_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.FormBtns.Select.click();
        	}
        }

        this.fnPrdvSlipDel = function(obj,e) {

        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "]" + this.divSearch.form.ccfCD_SITE.form.DSTextBox.text
        			+ "\n작업년월 : [" + this.dsSearch.getColumn(0, "YM_WORK").substr(0,6) + "]"
        			+ "\n안분대상전표 정보를 모두 삭제합니다."
        			+ "\n\n안분전표삭제 처리하시겠습니까?";

        	this.gfnConfirm(msg, "fnPrdvSlipDel_callback");
        }

        this.fnJtJiktu = function(obj,e) {
        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.YM_WORK = this.dsSearch.getColumn(0, "YM_WORK").substr(0,6);

        	this.gfnFormOpen("DWD", "DWD_JTJIKTU", "fnDialogCallback", param);
        }

        this.fnDialogCallback = function(svcID, value) {
        	this.FormBtns.Select.click();
        };


        this.fnJtJibun = function(obj,e) {
        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.YM_WORK = this.dsSearch.getColumn(0, "YM_WORK").substr(0,6);

        	this.gfnFormOpen("DWD", "DWD_JTMAGAMJIBUN", "", param);
        }

        this.fnSlipSearch = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) {
        		this.gfnAlert("전표조회할 데이터를 선택하세요.");
        		return false;
        	}

        	var param = {};

        	//param.NO_ERPKEY = this.dsList.getColumn(this.dsList.rowposition, "NO_ERPKEY");

        	 param.CD_TRADE = this.dsList.getColumn(this.dsList.rowposition, "NO_SLIP");
        	//this.gfnFormOpen("DHA", "DHA_ERPKEY_SLIP", "", param);
        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);
        }
        //
        // // 안분자료 가져오기 콜백.
        // 팝업화면으로 변경되어 위에 새로 만듬.
        // this.fnGetPrdvSlip_callback = function(strId, val){
        // 	if(val == true)
        // 	{
        // 		this.fnGetPrdvSlipSelect();
        // 	}
        // };

        this.fnGetPrdvSlipSelect = function()
        {
        	if (!this.fnSelectValidate()) return false;

        	this.dsRfcSelect.clearData();
        	this.dsRfcSelect.addRow();

        	var ds_value = [];
        	ds_value.push(this.dsSearch.getColumn(0, "CD_SITE"));
        	ds_value.push(this.gfnAddMonth(this.dsSearch.getColumn(0, "YM_WORK")+"01", nexacro.toNumber(this.FR_JTMONTH)));
        	ds_value.push(this.gfnGetLastDate(this.dsSearch.getColumn(0, "YM_WORK").substr(0,6)));

        	this.dsRfcSelect.setColumn(0, "TY_WRK", "Q");
        	this.dsRfcSelect.setColumn(0, "DS_PARAM", this.FormInfo.DS_PARAM);
        	this.dsRfcSelect.setColumn(0, "DS_VALUE", ds_value.join(','));

        	// SAP 호출
        	var strSvcId    = "rfc_select";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "rfc_select=dsRfcSelect";
        	var outData     = "dsFunc=rfc_select0 dsInParam=rfc_select1 dsOutTables=rfc_select2";
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
        }

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

        this.fnPrdvSlipDel_callback = function(strId, val) {
        	if(val == true)
        	{
        		this.dsExec.clearData();
        		var nrow = this.dsExec.addRow();
        		this.dsExec.setColumn(nrow, "TY_WRK", "DEL_SAP");
        		this.dsExec.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		this.dsExec.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsExec.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));

        		if (this.dsExec.rowcount == 0) return;

        		var strSvcId    = "execute";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "execute=dsExec";
        		var outData     = "";
        		var strArg      = "gubun=DEL_SAP";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}
        }


        this.fnExecute_GetSap = function() {

        	this.dsExec.clearData();
        	var nrow = this.dsExec.addRow();
        	this.dsExec.setColumn(nrow, "TY_WRK", "GET_SAP");
        	this.dsExec.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsExec.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsExec.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));

        	if (this.dsExec.rowcount == 0) return;

        	var strSvcId    = "execute";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "execute=dsExec";
        	var outData     = "";
        	var strArg      = "gubun=GET_SAP";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        }
        // this.divData_objGrid_oncelldblclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
        // {
        // 	this.fnJtJiktu();
        // };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWD_JTCOST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
