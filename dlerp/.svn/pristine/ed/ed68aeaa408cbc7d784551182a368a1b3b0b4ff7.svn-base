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
            this.set_titletext("원가보고서총괄표");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWDPR_FNDWREQSMMZTB_SELECT</Col></Row><Row><Col id=\"TARGET\">appno</Col><Col id=\"SP\">DZZPR_APPSTATE_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAppNoVal", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_AP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_APPR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID_AP\"/><Col id=\"DS_APPR\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProcSap", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExport", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("작업년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE02","staYM_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("결재번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtNO_ELAPDOC","staCD_SITE02:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE03","edtNO_ELAPDOC:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("결재상태");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDS_ELAPPRGS","staCD_SITE03:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","edtDS_ELAPPRGS:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,"152","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100.00%","25",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("1. 공사현황");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_wheelscrollrow("2");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataMedium","0","divDataTop:10",null,"327","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataMedium2","0","divDataMedium:10",null,"132","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divDataMedium2:0",null,"132","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtNO_ELAPDOC","value","dsAppNoVal","ID_AP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.edtDS_ELAPPRGS","value","dsAppNoVal","DS_APPR");
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
        this.registerScript("DWD_FNDWREQSMMZTB.xfdl", function() {
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
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		this.dsSearch.setColumn(0, "YM_WORK", this.getOwnerFrame().YM_WORK);
        		this.FormBtns.Select.click();

        	}else{
        		trace(this.dsSearch.getRowCount());
        		this.dsSearch.setColumn(0, "YM_WORK", this.gfnGetDate().substr(0, 6));
        		trace(this.dsSearch.getColumn(0, "YM_WORK"));
        	}
        // 	var today = this.gfnGetDate().substr(0, 6);
        // 		this.dsSearch.setColumn(0, "YM_WORK", today);

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

        	this.btnAPP = this.gfnFormButtonAdd("btnAPP", "fnAPP");
        	this.btnCnstCurst = this.gfnFormButtonAdd("btnCnstCurst", "fnCnstCurst");
        	this.btnCnstContrct = this.gfnFormButtonAdd("btnCnstContrct", "fnCnstContrct");
        	this.btnCpEnfpl = this.gfnFormButtonAdd("btnCpEnfpl", "fnCpEnfpl");
        	this.btnCpSilheng = this.gfnFormButtonAdd("btnCpSilheng", "fnCpSilheng");
        	this.btnCpSilhengSu = this.gfnFormButtonAdd("btnCpSilhengSu", "fnCpSilhengSu");
        	this.btnCpSilhengMm = this.gfnFormButtonAdd("btnCpSilhengMm", "fnCpSilhengMm");
        	this.btnFndWreqChk = this.gfnFormButtonAdd("btnFndWreqChk", "fnChrProc");
        	this.btnFile =  this.gfnFormButtonAdd("btnFile", "fnFile");

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ctclYM_WORK = this.divSearch.form.ctclYM_WORK;

        	this.dxGrid = this.divData.form.divDataTop.form.objGrid;
        // 	this.dxGrid1 = this.divData.form.divDataMedium.form.objGrid1;
        // 	this.dxGrid2 = this.divData.form.divDataMedium2.form.objGrid2;
        // 	this.dxGrid3 = this.divData.form.divDataBottom.form.objGrid3;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWD_FNDWREQSMMZTB_01");
        // 	this.gfnGridInit(this.dxGrid1, this.dsList1, "DW", "DWD_FNDWREQSMMZTB_02");
        // 	this.gfnGridInit(this.dxGrid2, this.dsList2, "DW", "DWD_FNDWREQSMMZTB_03");
        // 	this.gfnGridInit(this.dxGrid3, this.dsList3, "DW", "DWD_FNDWREQSMMZTB_04");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");

        	this.dsAppNo = new Dataset();
        	this.dsAppNo.addColumn("ID_AP_TYPE", "string");
        	this.dsAppNo.addColumn("V_PARAM01", "string");
        	this.dsAppNo.addColumn("V_PARAM02", "string");
        	this.dsAppNo.addColumn("V_PARAM03", "string");
        	this.dsAppNo.addColumn("V_PARAM04", "string");

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
        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	/*var outData     = "dsList=select0 dsList1=select1 dsList2=select2 dsList3=select3";*/
        	var outData     = "dsList=select0";
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

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	//var nrow = this.gfnGridAdd(this.dxGrid, "bottom"); // top (default), bottom, current
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
        	//var gridList = [this.dxGrid, this.dxGrid1, this.dxGrid2, this.dxGrid3];
        	/*this.gfnExcelExportMulti(gridList, ["sheet1", "sheet1", "sheet1", "sheet1"])*/
        	var gridList = [this.dxGrid];
        	this.gfnExcelExportMulti(gridList, ["sheet1"])

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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;

        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");

        	}else if(this.gfnIsNull(this.divSearch.form.ctclYM_WORK.form.TextBox.value)){
        		validate = false;

        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctclYM_WORK.form.TextBox.setFocus();
        		}
        		this.gfnAlert("작업년월을 입력하세요.", "fnVaidateCallback");
        	}

        	return validate;
        };


        this.fnSap = function() {

        	this._dsProcSap.clearData();
        	var nrow = this._dsProcSap.addRow();
        	this._dsProcSap.setColumn(nrow, "TARGET", "select");
        	this._dsProcSap.setColumn(nrow, "SP", "Z_PS_PRECOST");


        	this.dsSelectSap = new Dataset();
        	this.dsSelectSap.addColumn("PSPID", "string");
        	this.dsSelectSap.addColumn("BUDAT", "datetime");

        	nrow = this.dsSelectSap.addRow();
        	this.dsSelectSap.setColumn(nrow, "PSPID", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelectSap.setColumn(nrow, "BUDAT", this.gfnGetLastDate(this.dsSearch.getColumn(0, "YM_WORK")).substring(0,8)+"235959");


        	// SAP 호출
        	var strSvcId    = "sap";
        	var strSvcType  = "sap";
        	var inProc		= "_dsProcSap";
        	var inData      = "select=dsSelectSap";
        	var outData     = "dsExport=export";
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
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {trace(this.dsList.saveXML());	trace(this.dsList3.saveXML());
        		this.gfnGridAfterSelect(this.dxGrid);

        		if(this.dsList3.getColumn(0,"CD_PRGS") != "00"){
        			this.btnAPP.set_enable(true);
        		}else{
        			this.btnAPP.set_enable(false);
        		}

        		//this.fnAppNoSelect();
        		//this.fnSap();
        	}
        	else if (svcID == "sap") {
        		if(this.dsExport.rowcount > 0 && this.dsList2.rowcount > 0) {
        			// 순투입 = 2.사업실적 투입-본공사 합계금액
        			var am_iptcst = 0;
        			for(var  i = 0; i < this.dsList1.rowcount; i++) {
        				if(this.dsList1.getColumn(i, "DS_CLS") == "투입" && this.dsList1.getColumn(i, "DS_DIV") == "본공사")
        				{
        					am_iptcst = this.dsList1.getColumn(i, "AM_ACM_TSUM");
        					break;
        				}
        			}

        			var am_piptcst_01 = Number((this.dsExport.getColumn(0, "SUM01") * 100).toFixed(0));
        			var am_piptcst_02 = Number((this.dsExport.getColumn(0, "SUM02") * 100).toFixed(0));
        			var am_piptcst_03 = Number((this.dsExport.getColumn(0, "SUM04") * 100).toFixed(0));
        			var am_piptcst_04 = Number((this.dsExport.getColumn(0, "SUM05") * 100).toFixed(0));
        			var am_piptcst_05 = Number((this.dsExport.getColumn(0, "SUMAST") * 100).toFixed(0));
        			var am_piptcst_06 = Number((this.dsExport.getColumn(0, "SUM03") * 100).toFixed(0));
        			var am_piptcst_tsum = am_piptcst_01+am_piptcst_02+am_piptcst_03+am_piptcst_04+am_piptcst_05+am_piptcst_06;

        			this.dsList2.set_enableevent(false);
        			this.dsList2.setColumn(0, "AM_IPTCST", am_iptcst);
        			this.dsList2.setColumn(0, "AM_PIPTCST_01", am_piptcst_01);
        			this.dsList2.setColumn(0, "AM_PIPTCST_02", am_piptcst_02);
        			this.dsList2.setColumn(0, "AM_PIPTCST_03", am_piptcst_03);
        			this.dsList2.setColumn(0, "AM_PIPTCST_04", am_piptcst_04);
        			this.dsList2.setColumn(0, "AM_PIPTCST_05", am_piptcst_05);
        			this.dsList2.setColumn(0, "AM_PIPTCST_06", am_piptcst_06);
        			this.dsList2.setColumn(0, "AM_PIPTCST_TSUM", am_piptcst_tsum);
        			this.dsList2.setColumn(0, "AM_IPTCST_TSUM", am_iptcst+am_piptcst_tsum);
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
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        // 		this.gfnGridClear(this.dxGrid1);
        // 		this.gfnGridClear(this.dxGrid2);
        // 		this.gfnGridClear(this.dxGrid3);
        	}
        };

        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        // 		this.gfnGridClear(this.dxGrid1);
        // 		this.gfnGridClear(this.dxGrid2);
        // 		this.gfnGridClear(this.dxGrid3);
        	}
        };


        this.fnAPP = function(obj,e) {
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if (this.dsList.rowcount < 1) { return false; }

        	var param = {};
        	//var nRow = this.dsList.rowposition;

        	param.PARAM01 = this.dsSearch.getColumn(0,"CD_SITE");
        	param.PARAM02 = this.dsSearch.getColumn(0, "YM_WORK").substr(0,6);
        	param.ID_AP = this.dsAppNoVal.getColumn(0, "ID_AP");	// 전자결재문서번호
        	param.YN_LINK = "N";	// 화면에서 팝업을 호출할경우 N, 링크를 통해서 화면을 오픈할경우 null 이다

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWD_FNDWREQSMMZTB_APP", "fnAprvDialogCallback", param);

        }

         this.fnAprvDialogCallback = function(svcID, value) {
        	// 리턴값
        	if(value){
        		// 결재완료, 결재취소, 결재상신 후에는 재조회를 한다
        		this.FormBtns.Select.click();
        	}
        };


         /*
          *	결재번호와 결재상태 조회
          */
        this.fnAppNoSelect = function() {
        	this.dsAppNo.clearData();
        	this.dsAppNo.addRow();

        	this.dsAppNo.setColumn(0, "ID_AP_TYPE", "DW05");
        	this.dsAppNo.setColumn(0, "V_PARAM01", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsAppNo.setColumn(0, "V_PARAM02", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        	this.dsAppNo.setColumn(0, "V_PARAM03", "");
        	this.dsAppNo.setColumn(0, "V_PARAM04", "");

        	var strSvcId    = "appno";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "appno=dsAppNo";
        	var outData     = "dsAppNoVal=appno0";
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


        this.fnCnstCurst = function(obj,e) {
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if (this.dsList.rowcount < 1) { return false; }

        	var param = {};
        	//var nRow = this.dsList.rowposition;

        	param.CD_SITE = this.dsSearch.getColumn(0,"CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.value;
        	param.YM_WORK = this.dsSearch.getColumn(0, "YM_WORK").substr(0,6);
        	param.AM_UNIT = "1";

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWE_CNSTCURST", "fnCnstCurstCallback", param);
        }

         this.fnCnstCurstCallback = function(svcID, value) {
        	// 리턴값
        	if(value){
        		// 결재완료, 결재취소, 결재상신 후에는 재조회를 한다
        		this.FormBtns.Select.click();
        	}
        };

        this.fnCnstContrct = function(obj,e) {
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	//if (this.dsList.rowcount < 1) { return false; }

        	var param = {};
        	//var nRow = this.dsList.rowposition;

        	//param.CD_SITE = this.dsSearch.getColumn(0,"CD_SITE");
        	//param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.value;
        	this.gfnAlert("추후개발예정");
        	//this.gfnFormOpen(this.FormInfo.CD_MODULE, "", "fnCnstCurstCallback", param);
        }

        this.fnCpEnfpl = function(obj,e) {
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if (this.dsList.rowcount < 1) { return false; }

        	var param = {};
        	//var nRow = this.dsList.rowposition;

        	param.CD_SITE = this.dsSearch.getColumn(0,"CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.value;
        	param.YM_WORK = this.dsSearch.getColumn(0, "YM_WORK").substr(0,6);
        	param.AM_UNIT = "1";
        	param.GR_COST = "1";

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWE_CPSILHENG_ENFPL", "fnCnstCurstCallback", param);
        }

        this.fnCpSilheng = function(obj,e) {
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if (this.dsList.rowcount < 1) { return false; }

        	var param = {};
        	//var nRow = this.dsList.rowposition;

        	param.CD_SITE = this.dsSearch.getColumn(0,"CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.value;
        	param.YM_WORK = this.dsSearch.getColumn(0, "YM_WORK").substr(0,6);

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWE_CPSILHENG", "fnCnstCurstCallback", param);
        }

        this.fnCpSilhengSu = function(obj,e) {
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if (this.dsList.rowcount < 1) { return false; }

        	var param = {};
        	//var nRow = this.dsList.rowposition;

        	param.CD_SITE = this.dsSearch.getColumn(0,"CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.value;
        	param.YM_WORK = this.dsSearch.getColumn(0, "YM_WORK").substr(0,6);
        	param.AM_UNIT = "1";

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWE_CPSILHENG_SU", "fnCnstCurstCallback", param);
        }

        this.fnCpSilhengMm = function(obj,e) {
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if (this.dsList.rowcount < 1) { return false; }

        	var param = {};
        	//var nRow = this.dsList.rowposition;

        	param.CD_SITE = this.dsSearch.getColumn(0,"CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.value;
        	param.YM_WORK = this.dsSearch.getColumn(0, "YM_WORK").substr(0,6);
        	param.AM_UNIT = "1";

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWE_CPSILHENG_MM", "fnCnstCurstCallback", param);
        }

        this.fnChrProc = function(obj,e) {
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	//if (this.dsList.rowcount < 1) { return false; }

        	var param = {};
        	//var nRow = this.dsList.rowposition;

        	this.gfnAlert("추후개발예정");
        	//this.gfnFormOpen(this.FormInfo.CD_MODULE, "fnCpSilhengMm", "fnCnstCurstCallback", param);
        }

        this.fnFile = function() {
        	var fileManager = {};
        	fileManager.CD_GUBUN = "DWD3";
        	fileManager.CD_DIR = [this.dsSearch.getColumn(0,"CD_SITE"), this.dsSearch.getColumn(0, "YM_WORK").substr(0,6)];

        	if(this.FormInfo.TY_AUTH == "R") {
        		fileManager.IS_READONLY = true;
        	} else {
        		fileManager.IS_READONLY = false;
        	}

        	this.gfnFileManager(fileManager, "");
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWD_FNDWREQSMMZTB.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
