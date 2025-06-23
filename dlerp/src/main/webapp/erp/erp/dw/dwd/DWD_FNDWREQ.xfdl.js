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
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWDPR_FNDWREQ_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWDPR_FNDWREQ_SAVE</Col></Row><Row><Col id=\"TARGET\">execute</Col><Col id=\"SP\">DWDPR_FNDWREQ_EXECUTE</Col></Row><Row><Col id=\"TARGET\">sap_save</Col><Col id=\"SP\">DWDPR_FNDWREQAGG_SAP_SAVE</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DWDPR_FNDWREQDIFF_SELECT</Col></Row><Row><Col id=\"TARGET\">save1</Col><Col id=\"SP\">DWDPR_FNDWREQDIFF_SAVE</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DWDPR_FNDWREQPLNVSRSLT_SELECT</Col></Row><Row><Col id=\"TARGET\">save2</Col><Col id=\"SP\">DWDPR_FNDWREQPLNVSRSLT_SAVE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_COMMON_SELECT_01</Col></Row><Row><Col id=\"TARGET\">select_sap</Col><Col id=\"SP\">DWXPR_RFCINFO_SELECT</Col></Row><Row><Col id=\"TARGET\">appno</Col><Col id=\"SP\">DZZPR_APPSTATE_SELECT</Col></Row><Row><Col id=\"TARGET\">attch_cnt</Col><Col id=\"SP\">DZRPR_FILE_SELECT_01</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_PRGS", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsSap", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExport", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAppNoVal", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_AP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_APPR\" type=\"STRING\" size=\"256\"/><Column id=\"ST_APPR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID_AP\"/><Col id=\"DS_APPR\"/><Col id=\"ST_APPR\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListAttchCnt", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("AfterCDTextChanged").set("ccfCD_SITE_AfterCDTextChanged");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.getSetter("FitToContents").set("true");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("작업년월");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_PRGS","ctclYM_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("진행상태");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCD_PRGS","staCD_PRGS:0.0","10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsCD_PRGS");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_readonly("true");
            obj.set_visible("false");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE02","ctclYM_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("결재번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtNO_ELAPDOC","staCD_SITE02:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE03","edtNO_ELAPDOC:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("결재상태");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDS_ELAPPRGS","staCD_SITE03:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divData01","0","0",null,"157","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid01","0","5",null,null,"0","0",null,null,null,null,this.divData.form.divData01.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divData01.addChild(obj.name, obj);

            obj = new Div("divData03","0",null,null,"127","0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","100.00%","30",null,null,null,null,null,null,this.divData.form.divData03.form);
            obj.set_taborder("0");
            obj.set_text("※자금소요계획 對 실적");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.divData03.addChild(obj.name, obj);

            obj = new Grid("objGrid03","0","staTitle:5",null,null,"0","0",null,null,null,null,this.divData.form.divData03.form);
            obj.set_taborder("0");
            obj.set_cellclickbound("control");
            obj._setContents("");
            this.divData.form.divData03.addChild(obj.name, obj);

            obj = new Div("divData02","0","divData01:5",null,null,"0","divData03:5",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","100.00%","30",null,null,null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("0");
            obj.set_text("차이내역");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.form.divData02.addChild(obj.name, obj);

            obj = new Grid("objGrid02","0","staTitle:5",null,null,"0","0",null,null,null,null,this.divData.form.divData02.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divData02.addChild(obj.name, obj);
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

            obj = new BindItem("item2","divSearch.form.edtNO_ELAPDOC","value","dsAppNoVal","ID_AP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.edtDS_ELAPPRGS","value","dsAppNoVal","DS_APPR");
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
        this.registerScript("DWD_FNDWREQ.xfdl", function() {
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

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().YM_WORK)) {

        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		this.dsSearch.setColumn(0, "YM_WORK", this.getOwnerFrame().YM_WORK);

        		this.ccfCD_SITE.form.fnFitToContents();

        		this.FormBtns.Select.click();
        	}
        	else
        	{
        		var today = this.gfnGetDate();
        		this.dsSearch.setColumn(0, "YM_WORK", today.substr(0,6));
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	//this.FormBtns.Add.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btnCreate = this.gfnFormButtonAdd("btnCreate", "fnCreate");
        	this.btnFndWreqAgg = this.gfnFormButtonAdd("btnFndWreqAgg", "fnFndWreqAgg");
        	this.btnUnpdStmHq  = this.gfnFormButtonAdd("btnUnpdStmHq", "fnUnpdStmHq");
        	this.btnUnpdStmSit = this.gfnFormButtonAdd("btnUnpdStmSit", "fnUnpdStmSit");
        	this.btnUnpdStmDm = this.gfnFormButtonAdd("btnUnpdStmDm", "fnUnpdStmDm");
        	this.btnFndWreqChkLst = this.gfnFormButtonAdd("btnFndWreqChkLst", "fnFndWreqChkLst");
        	this.btnFndReqDpln = this.gfnFormButtonAdd("btnFndReqDpln", "fnFndReqDpln");
        	this.btnFndReqSexp = this.gfnFormButtonAdd("btnFndReqSexp", "fnFndReqSexp");
        	this.btnAPP = this.gfnFormButtonAdd("btnAPP", "fnAPP");
        	this.btnAttachFile = this.gfnFormButtonAdd("btnAttachFile", "fnAttachFile");

        };


        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccboCD_PRGS = this.divSearch.form.ccboCD_PRGS;
        	this.dxGrid = this.divData.form.divData01.form.objGrid01;
        	this.dxGrid2 = this.divData.form.divData02.form.objGrid02;
        	this.dxGrid3 = this.divData.form.divData03.form.objGrid03;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWD_FNDWREQ");
        	this.gfnGridInit(this.dxGrid2, this.dsList1, "DW", "DWD_FNDWREQDIFF");
        	this.gfnGridInit(this.dxGrid3, this.dsList2, "DW", "DWD_FNDWREQPLNVSRSLT");

        	// 그리드 코드파인드 설정
        	this.dxGrid2.BeforeUserDataSetParam = "fnGrid2_BeforeUserDataSetParam";

        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        	this.dxGrid2.EnterCell = "fnGrid_EnterCell";
        	this.dxGrid3.EnterCell = "fnGrid_EnterCell";
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
        	this.dsSave.addColumn("CD_REQ", "string");
        	this.dsSave.addColumn("AM_CASH_HQ", "bigdecimal");
        	this.dsSave.addColumn("AM_NOTE_HQ", "bigdecimal");
        	this.dsSave.addColumn("AM_CASH_SIT", "bigdecimal");
        	this.dsSave.addColumn("AM_NOTE_SIT", "bigdecimal");
        	this.dsSave.addColumn("AM_CASH_BAL", "bigdecimal");
        	this.dsSave.addColumn("AM_CASH_UNDSPT", "bigdecimal");
        	this.dsSave.addColumn("AM_CASH_SEXP", "bigdecimal");
        	this.dsSave.addColumn("AM_MCST", "bigdecimal");
        	this.dsSave.addColumn("DS_RMKS", "string");

        	this.dsSave1 = new Dataset();
        	this.dsSave1.addColumn("TY_WRK", "string");
        	this.dsSave1.addColumn("ID_USER", "string");
        	this.dsSave1.addColumn("CD_SITE", "string");
        	this.dsSave1.addColumn("YM_WORK", "string");
        	this.dsSave1.addColumn("SN_SEQ", "int");
        	this.dsSave1.addColumn("NO_SLIP", "string");
        	this.dsSave1.addColumn("CD_VNDR", "string");
        	this.dsSave1.addColumn("TY_PAY", "string");
        	this.dsSave1.addColumn("AM_SLIP", "bigdecimal");
        	this.dsSave1.addColumn("CD_PAY", "string");
        	this.dsSave1.addColumn("YN_PRTLPAY", "string");
        	this.dsSave1.addColumn("AM_DIFF", "bigdecimal");
        	this.dsSave1.addColumn("DS_CTS", "string");
        	this.dsSave1.addColumn("DS_RSN", "string");
        	this.dsSave1.addColumn("TP_MTD", "string");
        	this.dsSave1.addColumn("DT_PAYMENT", "string");
        	this.dsSave1.addColumn("YR_ACNT_SAP", "string");
        	this.dsSave1.addColumn("NO_SLIP_SAP", "string");

        	this.dsSave2 = new Dataset();
        	this.dsSave2.addColumn("TY_WRK", "string");
        	this.dsSave2.addColumn("ID_USER", "string");
        	this.dsSave2.addColumn("CD_SITE", "string");
        	this.dsSave2.addColumn("YM_WORK", "string");
        	this.dsSave2.addColumn("CD_CLS", "string");
        	this.dsSave2.addColumn("CD_DIV", "string");
        	this.dsSave2.addColumn("DS_RSN", "string");

        	this.dsSapSave = new Dataset();
        	this.dsSapSave.addColumn("TY_WRK", "string");
        	this.dsSapSave.addColumn("ID_USER", "string");
        	this.dsSapSave.addColumn("MANDT", "string");
        	this.dsSapSave.addColumn("PSPID", "string");
        	this.dsSapSave.addColumn("ZYYMM", "string");
        	this.dsSapSave.addColumn("ZDEGR", "string");
        	this.dsSapSave.addColumn("ZGBN", "string");
        	this.dsSapSave.addColumn("ZGBN_NM", "string");
        	this.dsSapSave.addColumn("ZBON_AMT1", "bigdecimal");
        	this.dsSapSave.addColumn("ZBON_AMT2", "bigdecimal");
        	this.dsSapSave.addColumn("ZBON_AMT3", "bigdecimal");
        	this.dsSapSave.addColumn("ZHUN_AMT1", "bigdecimal");
        	this.dsSapSave.addColumn("ZHUN_AMT2", "bigdecimal");
        	this.dsSapSave.addColumn("ZHUN_AMT3", "bigdecimal");
        	this.dsSapSave.addColumn("ZHUN_AMT4", "bigdecimal");
        	this.dsSapSave.addColumn("ZHUN_AMT5", "bigdecimal");
        	this.dsSapSave.addColumn("ZHUN_AMT6", "bigdecimal");
        	this.dsSapSave.addColumn("ZTOT_AMT1", "bigdecimal");
        	this.dsSapSave.addColumn("ZTOT_AMT2", "bigdecimal");
        	this.dsSapSave.addColumn("ZTOT_AMT3", "bigdecimal");
        	this.dsSapSave.addColumn("ZJAJ_AMT", "bigdecimal");
        	this.dsSapSave.addColumn("ZSTS", "string");
        	this.dsSapSave.addColumn("ZDOCNUM", "string");
        	this.dsSapSave.addColumn("CURRENCY", "string");
        	this.dsSapSave.addColumn("AENAM", "string");

        	this.dsExecute = new Dataset();
        	this.dsExecute.addColumn("TY_WRK", "string");
        	this.dsExecute.addColumn("ID_USER", "string");
        	this.dsExecute.addColumn("CD_SITE", "string");
        	this.dsExecute.addColumn("YM_WORK", "string");

        	this.dsAttchCnt = new Dataset();
        	this.dsAttchCnt.addColumn("CD_SITE", "string");
        	this.dsAttchCnt.addColumn("YM_WORK", "string");

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

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "TY_WRK", "Q");
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));

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
        						callBackFnc);   // 통신방법 정의 [생략가능]
        }

        this.fnSelect1 = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "TY_WRK", "Q");
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));

        	var strSvcId    = "select1";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select1=dsSelect";
        	var outData     = "dsList1=select10";
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

        this.fnSelect2 = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "TY_WRK", "Q");
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));

        	var strSvcId    = "select2";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select2=dsSelect";
        	var outData     = "dsList2=select20";
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
        	var nrow = this.gfnGridAdd(this.dxGrid2); // top (default), bottom, current
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid2);

        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I" :
        			case "U" :
        			case "D" :
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        				this.dsSave.setColumn(nrow, "CD_REQ", this.dsList.getColumn(i, "CD_REQ"));
        				this.dsSave.setColumn(nrow, "AM_CASH_HQ", this.dsList.getColumn(i, "AM_CASH_HQ"));
        				this.dsSave.setColumn(nrow, "AM_NOTE_HQ", this.dsList.getColumn(i, "AM_NOTE_HQ"));
        				this.dsSave.setColumn(nrow, "AM_CASH_SIT", this.dsList.getColumn(i, "AM_CASH_SIT"));
        				this.dsSave.setColumn(nrow, "AM_NOTE_SIT", this.dsList.getColumn(i, "AM_NOTE_SIT"));
        				this.dsSave.setColumn(nrow, "AM_CASH_BAL", this.dsList.getColumn(i, "AM_CASH_BAL"));
        				this.dsSave.setColumn(nrow, "AM_CASH_UNDSPT", this.dsList.getColumn(i, "AM_CASH_UNDSPT"));
        				this.dsSave.setColumn(nrow, "AM_CASH_SEXP", this.dsList.getColumn(i, "AM_CASH_SEXP"));
        				this.dsSave.setColumn(nrow, "AM_MCST", this.dsList.getColumn(i, "AM_MCST"));
        				this.dsSave.setColumn(nrow, "DS_RMKS", this.dsList.getColumn(i, "DS_RMKS"));
        				break;
        		}
        	}

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
        							strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnSave1 = function() {
        	if (!this.gfnGridValidate(this.dxGrid2)) return;

        	this.dsSave1.clearData();

        	for (var i = 0; i < this.dsList1.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList1, i);
        		switch(flag) {
        			case "I" :
        			case "U" :
        			case "D" :
        				var nrow = this.dsSave1.addRow();
        				this.dsSave1.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave1.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave1.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsSave1.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        				this.dsSave1.setColumn(nrow, "SN_SEQ", this.dsList1.getColumn(i, "SN_SEQ"));
        				this.dsSave1.setColumn(nrow, "NO_SLIP", this.dsList1.getColumn(i, "NO_SLIP"));
        				this.dsSave1.setColumn(nrow, "CD_VNDR", this.dsList1.getColumn(i, "CD_VNDR"));
        				this.dsSave1.setColumn(nrow, "TY_PAY", this.dsList1.getColumn(i, "TY_PAY"));
        				this.dsSave1.setColumn(nrow, "AM_SLIP", this.dsList1.getColumn(i, "AM_SLIP"));
        				this.dsSave1.setColumn(nrow, "CD_PAY", this.dsList1.getColumn(i, "CD_PAY"));
        				this.dsSave1.setColumn(nrow, "YN_PRTLPAY", this.dsList1.getColumn(i, "YN_PRTLPAY"));
        				this.dsSave1.setColumn(nrow, "AM_DIFF", this.dsList1.getColumn(i, "AM_DIFF"));
        				this.dsSave1.setColumn(nrow, "DS_CTS", this.dsList1.getColumn(i, "DS_CTS"));
        				this.dsSave1.setColumn(nrow, "DS_RSN", this.dsList1.getColumn(i, "DS_RSN"));
        				this.dsSave1.setColumn(nrow, "TP_MTD", this.dsList1.getColumn(i, "TP_MTD"));
        				this.dsSave1.setColumn(nrow, "DT_PAYMENT", this.dsList1.getColumn(i, "DT_PAYMENT"));
        				this.dsSave1.setColumn(nrow, "YR_ACNT_SAP", this.dsList1.getColumn(i, "YR_ACNT_SAP"));
        				this.dsSave1.setColumn(nrow, "NO_SLIP_SAP", this.dsList1.getColumn(i, "NO_SLIP_SAP"));

        				break;
        		}
        	}

        		var strSvcId    = "save1";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "save1=dsSave1";
        		var outData     = "";
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

        this.fnSave2 = function() {
        	if (!this.gfnGridValidate(this.dxGrid3)) return;

        	this.dsSave2.clearData();

        	for (var i = 0; i < this.dsList2.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList2, i);
        		switch(flag) {
        			case "I" :
        			case "U" :
        			case "D" :
        				var nrow = this.dsSave2.addRow();
        				this.dsSave2.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave2.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave2.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsSave2.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        				this.dsSave2.setColumn(nrow, "CD_CLS", this.dsList2.getColumn(i, "CD_CLS"));
        				this.dsSave2.setColumn(nrow, "CD_DIV", this.dsList2.getColumn(i, "CD_DIV"));
        				this.dsSave2.setColumn(nrow, "DS_RSN", this.dsList2.getColumn(i, "DS_RSN"));
        				break;
        		}
        	}

        		var strSvcId    = "save2";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "save2=dsSave2";
        		var outData     = "";
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
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg)
        {
            if (svcID == "select") {
        	  // 첨부파일 갯수 조회
        	  this.fnAttchCnt();

              if(this.dsList.rowcount < 1) {
                 this.divSearch.form.ccboCD_PRGS.set_index(0);

        		 this.btnFndWreqAgg.set_enable(true);
        		 this.FormBtns.Add.set_visible(true);
        		 this.FormBtns.Del.set_visible(true);
        		 this.FormBtns.Save.set_visible(true);

        		 //this.dxGrid2.set_enable(true);
        		 //this.dxGrid3.set_enable(true);
        		 this.divTopBtn.form.fnSetCommonBtn();

                 return;
              }
        		this.divSearch.form.ccboCD_PRGS.set_value(this.dsList.getColumn(0, "CD_PRGS"));

        		if(this.dsList.getColumn(0, "CD_PRGS") != "00"){
        			this.btnAPP.set_enable(true);
        		}else{
        			this.btnAPP.set_enable(false);
        		}
         		this.fnSelect1();
         		this.fnSelect2();



        		this.fnAppNoSelect();
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.fnSave1();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "save1") {
        		if (errorCode == 0) {
        			this.fnSave2();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "save2") {
        		if (errorCode == 0) {
        			this.fnExecute("AGG", "save");
        			//this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "combo") {
        		this.divSearch.form.ccboCD_PRGS.set_index(0);
        	}
        	else if(svcID == "select_sap") {
        		if (errorCode == 0) {
        			this.fnSap();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "sap") {
        		if(this.dsSap.rowcount < 1)
        		{
        			if(this.dsExport.getColumn(0, "O_RTNCD") == "E")
        			{
        				this.gfnAlert(this.dsExport.getColumn(0, "O_RTNMSG"));
        			}
        			return;
        		}

        		this.fnSapSave();
        	}
        	else if(svcID == "sap_save") {
        		if (errorCode == 0) {
        			this.fnExecute("AGG", "sap");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "execute") {
        		if (errorCode == 0) {
        			this.fnExecute_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			if(strArg == "sap")
        			{
        				this.gfnAlert("자금청구집계가 정상처리되었습니다.", "fnExecute_callback");
        			}
        			else
        			{
        				this.fnExecute_callback();
        			}
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "attch_cnt") {
        		if(this.dsListAttchCnt.rowcount > 0) {
        			this.btnAttachFile.set_text("첨부파일("+this.dsListAttchCnt.getColumn(0, "CNT")+")");
        		}else{
        			this.btnAttachFile.set_text("첨부파일");
        		}
        		this.btnAttachFile.set_fittocontents("width");	// 버튼 텍스트 길이에 맞게 길이 자동조정
        		this.divTopBtn.form.resetScroll();	// 확장버튼 영역DIV
        	}
        	else if(svcID == "appno") {
        		if(this.dsAppNoVal.rowcount < 1){
        			this.btnFndWreqAgg.set_enable(true);
        			this.FormBtns.Add.set_visible(true);
        			this.FormBtns.Del.set_visible(true);
        			this.FormBtns.Save.set_visible(true);

        			//this.dxGrid2.set_enable(true);
        			//this.dxGrid3.set_enable(true);
        		}else{
        			if(this.dsAppNoVal.getColumn(0, "ST_APPR") == "04" || this.dsAppNoVal.getColumn(0, "ST_APPR") == "05"){
        				this.btnFndWreqAgg.set_enable(true);
        				this.FormBtns.Add.set_visible(true);
        				this.FormBtns.Del.set_visible(true);
        				this.FormBtns.Save.set_visible(true);

        				//this.dxGrid2.set_enable(true);
        				//this.dxGrid3.set_enable(true);
        			}else{
        				this.btnFndWreqAgg.set_enable(false);
        				this.FormBtns.Add.set_visible(false);
        				this.FormBtns.Del.set_visible(false);
        				this.FormBtns.Save.set_visible(false);

        				//this.dxGrid2.set_enable(false);
        				//this.dxGrid3.set_enable(false);
        			}
        		}
        		// 공통버튼 visible 처리후 호출해준다
        		this.divTopBtn.form.fnSetCommonBtn();
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        //     if (id == "ccfNO_BID") {
        // 		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")))
        // 		{
        // 			this.gfnAlert("현장코드를 입력해주세요.");
        // 			return false;
        // 		}
        //         dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        //     }

            return true;
        }


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        this.fnGrid_EnterCell = function(obj, row, cell) {

        	if(obj.name == "objGrid01"){
        		var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);

        		if(this.dsList.getColumn(row, "YN_EDIT") != "Y") {
        			return false;
        		}
        	}else if(obj.name == "objGrid02" || obj.name == "objGrid03"){
        		if(this.dsAppNoVal.rowcount > 0){
        			if(this.dsAppNoVal.getColumn(0, "ST_APPR") == "04" || this.dsAppNoVal.getColumn(0, "ST_APPR") == "05"){

        			}else{
        				return false;
        			}
        		}
        	}

        	return;

        }


        this.fnGrid2_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID

        	if(id == "DWX_CFDIFFSLIP_01"){
        			if(this.gfnIsNull(this.dsList1.getColumn(this.dsList1.rowposition, "YR_ACNT_SAP")))
         		{
         			this.gfnAlert("전표정보 년도를 입력해주세요.");
         			return false;
         		}
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
         		dsUserParam.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        		dsUserParam.setColumn(nrow, "YR_WORK", this.dsList1.getColumn(this.dsList1.rowposition, "YR_ACNT_SAP"));
        		dsUserParam.setColumn(nrow, "TY_DIV", "FNDWREQ");
        	}
        	return true;
        }


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGrid2);
        		this.gfnGridClear(this.dxGrid3);
        	}
        };

        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");
        	this.dsCombo.addColumn("YN_USE", "string");
        	this.dsCombo.addColumn("YN_ALL", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DW");
        	this.dsCombo.setColumn(0, "CD_TYPE", "69");
        	this.dsCombo.setColumn(0, "YN_USE", "Y");
        	this.dsCombo.setColumn(0, "YN_ALL", "N");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCD_PRGS=combo0";
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

        this.fnFndWreqAgg = function(obj,e) {
        	if (!this.fnSelectValidate()) return false;

        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.divSearch.form.ccfCD_SITE.form.DSTextBox.text + "\n"
        			+ "작업년월 : [" + this.dsSearch.getColumn(0, "YM_WORK").substr(0,6) + "]" + "\n"
        			+ "기존 자료 삭제 후 재집계 처리 됩니다. \n\n"
        			+ "자금청구집계 처리 하시겠습니까?";

        	this.gfnConfirm(msg, "fnFndWreqAgg_callback");
        }

        this.fnFndWreqAgg_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.dsSelectSap = new Dataset();
        		this.dsSelectSap.addColumn("TY_WRK", "string");
        		this.dsSelectSap.addColumn("DS_PARAM", "string");
        		this.dsSelectSap.addColumn("DS_VALUE", "string");

        		this.dsSelectSap.clearData();
        		this.dsSelectSap.addRow();

        		var ds_value = [];
        		ds_value.push(this.dsSearch.getColumn(0, "CD_SITE"));
        		ds_value.push(this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));

        		this.dsSelectSap.setColumn(0, "TY_WRK", "Q");
        		this.dsSelectSap.setColumn(0, "DS_PARAM", this.FormInfo.DS_PARAM);
        		this.dsSelectSap.setColumn(0, "DS_VALUE", ds_value.join(','));

        		// SAP 호출
        		var strSvcId    = "select_sap";
        		var strSvcType  = "select";
        		var inProc		= "_dsProc";
        		var inData      = "select_sap=dsSelectSap";
        		var outData     = "dsFunc=select_sap0 dsInParam=select_sap1";
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
        }


        this.fnUnpdStmHq = function(obj,e) {
        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.DT_MAGAM = this.gfnGetLastDate(this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWD_ZPSR9350", "", param);
        }

        this.fnUnpdStmSit = function(obj,e) {
        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.DT_MAGAM = this.gfnGetLastDate(this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWD_ZPSR1020", "", param);
        }

        this.fnUnpdStmDm = function(obj,e) {
        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.DT_MAGAM = this.gfnGetLastDate(this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWD_ZPSR6350", "", param);
        }

        this.fnFndWreqChkLst = function(obj,e) {
        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.DT_MAGAM = this.gfnGetLastDate(this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWD_ZPSR6060", "", param);
        }

        this.fnFndReqDpln = function(obj,e) {
        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.YM_WORK = this.dsSearch.getColumn(0, "YM_WORK").substr(0,6);

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWD_FNDREQDPLN", "", param);
        }

        this.fnFndReqSexp = function(obj,e) {
        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.YM_WORK = this.dsSearch.getColumn(0, "YM_WORK").substr(0,6);
        	//param.FR_WORK = this.dsSearch.getColumn(0, "YM_WORK").substr(0,4) + "01";
        	param.FR_WORK = "";

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWD_FNDREQSEXP", "", param);
        }

        this.dsList_onvaluechanged = function(obj,e)
        {
         	if(this.dsList.rowcount < 1) return;

         	if(e.oldvalue != e.newvalue)
         	{
        	}
        };

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

        	// SAP 호출
        	var strSvcId    = "sap";
        	var strSvcType  = "sap";
        	var inProc		= "_dsProcSap";
        	var inData      = "select=dsSelectSap";
        	var outData     = "dsExport=export dsSap=OT_ITAB";
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

        this.fnSapSave = function()
        {
        	this.dsSapSave.clearData();

        	for (var i = 0; i < this.dsSap.rowcount; i++) {
        		var nrow = this.dsSapSave.addRow();
        		this.dsSapSave.setColumn(nrow, "TY_WRK", "I");
        		this.dsSapSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		this.dsSapSave.setColumn(nrow, "MANDT", this.dsSap.getColumn(i, "MANDT"));
        		this.dsSapSave.setColumn(nrow, "PSPID", this.dsSap.getColumn(i, "PSPID"));
        		this.dsSapSave.setColumn(nrow, "ZYYMM", this.dsSap.getColumn(i, "ZYYMM"));
        		this.dsSapSave.setColumn(nrow, "ZDEGR", this.dsSap.getColumn(i, "ZDEGR"));
        		this.dsSapSave.setColumn(nrow, "ZGBN", this.dsSap.getColumn(i, "ZGBN"));
        		this.dsSapSave.setColumn(nrow, "ZGBN_NM", this.dsSap.getColumn(i, "ZGBN_NM"));
        		this.dsSapSave.setColumn(nrow, "ZBON_AMT1", this.dsSap.getColumn(i, "ZBON_AMT1"));
        		this.dsSapSave.setColumn(nrow, "ZBON_AMT2", this.dsSap.getColumn(i, "ZBON_AMT2"));
        		this.dsSapSave.setColumn(nrow, "ZBON_AMT3", this.dsSap.getColumn(i, "ZBON_AMT3"));
        		this.dsSapSave.setColumn(nrow, "ZHUN_AMT1", this.dsSap.getColumn(i, "ZHUN_AMT1"));
        		this.dsSapSave.setColumn(nrow, "ZHUN_AMT2", this.dsSap.getColumn(i, "ZHUN_AMT2"));
        		this.dsSapSave.setColumn(nrow, "ZHUN_AMT3", this.dsSap.getColumn(i, "ZHUN_AMT3"));
        		this.dsSapSave.setColumn(nrow, "ZHUN_AMT4", this.dsSap.getColumn(i, "ZHUN_AMT4"));
        		this.dsSapSave.setColumn(nrow, "ZHUN_AMT5", this.dsSap.getColumn(i, "ZHUN_AMT5"));
        		this.dsSapSave.setColumn(nrow, "ZHUN_AMT6", this.dsSap.getColumn(i, "ZHUN_AMT6"));
        		this.dsSapSave.setColumn(nrow, "ZTOT_AMT1", this.dsSap.getColumn(i, "ZTOT_AMT1"));
        		this.dsSapSave.setColumn(nrow, "ZTOT_AMT2", this.dsSap.getColumn(i, "ZTOT_AMT2"));
        		this.dsSapSave.setColumn(nrow, "ZTOT_AMT3", this.dsSap.getColumn(i, "ZTOT_AMT3"));
        		this.dsSapSave.setColumn(nrow, "ZJAJ_AMT", this.dsSap.getColumn(i, "ZJAJ_AMT"));
        		this.dsSapSave.setColumn(nrow, "ZSTS", this.dsSap.getColumn(i, "ZSTS"));
        		this.dsSapSave.setColumn(nrow, "ZDOCNUM", this.dsSap.getColumn(i, "ZDOCNUM"));
        		this.dsSapSave.setColumn(nrow, "CURRENCY", this.dsSap.getColumn(i, "CURRENCY"));
        		this.dsSapSave.setColumn(nrow, "AENAM", this.dsSap.getColumn(i, "AENAM"));
        	}

        	var strSvcId    = "sap_save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "sap_save=dsSapSave";
        	var outData     = "";
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

        this.fnExecute = function(ty_wrk, gubun)
        {
        	this.dsExecute.clearData();

        	var nrow = this.dsExecute.addRow();
        	this.dsExecute.setColumn(nrow, "TY_WRK", ty_wrk);
        	this.dsExecute.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsExecute.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsExecute.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));

        	var strSvcId    = "execute";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "execute=dsExecute";
        	var outData     = "";
        	var strArg      = gubun;
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }


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
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWD_FNDWREQ_APP", "fnAprvDialogCallback", param);

        }

         this.fnAprvDialogCallback = function(svcID, value) {
        	// 리턴값
        	if(value){
        		// 결재완료, 결재취소, 결재상신 후에는 재조회를 한다
        		this.FormBtns.Select.click();
        	}
        };

         // 첨부파일 버튼
         this.fnAttachFile = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (this.dsList.rowcount < 1) { return false; }

        	var fileManager = {};
        	//fileManager.CD_GUBUN = "DWD1";
        	fileManager.CD_GUBUN = "DW15";
        	fileManager.CD_DIR = [this.dsSearch.getColumn(0,"CD_SITE"), this.dsSearch.getColumn(0, "YM_WORK").substr(0,6)];

        	if(this.FormInfo.TY_AUTH == "R") {
        		fileManager.IS_READONLY = true;
        	} else {
        		fileManager.IS_READONLY = false;
        	}

        	this.gfnFileManager(fileManager, "fnFileCallback");
        };

        this.fnFileCallback = function() {
        	// 첨부파일 갯수 조회
        	this.fnAttchCnt();

        	//this.fnSelect();
        };

        // 첨부파일 갯수 조회
        this.fnAttchCnt = function() {
        	this.dsAttchCnt.clearData();
        	this.dsAttchCnt.addRow();

        	this.dsAttchCnt.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsAttchCnt.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));

        	var strSvcId    = "attch_cnt";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "attch_cnt=dsAttchCnt";
        	var outData     = "dsListAttchCnt=attch_cnt0";
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
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		// 폼상태 초기화
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGrid2);
        		this.gfnGridClear(this.dxGrid3);
        	}
        };


         /*
          *	결재번호와 결재상태 조회
          */
        this.fnAppNoSelect = function() {
        	this.dsAppNo.clearData();
        	this.dsAppNo.addRow();

        	this.dsAppNo.setColumn(0, "ID_AP_TYPE", "DW04");
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWD_FNDWREQ.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
