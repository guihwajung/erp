(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DWA_SILHENG");
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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWBPR_HDGISUNGSLIP_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DWBPR_HDGISUNGMONTH_MAX_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWBPR_HDGISUNGSLIP_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DGR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"YM_WORK\"/><Col id=\"NO_DGR\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNO_DGR", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChangeColumn", this);
            obj._setContents("<ColumnInfo><Column id=\"AM_PREPAY\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PAYSCHD\" type=\"STRING\" size=\"256\"/><Column id=\"AM_GONGJAE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_REAL_TOT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"AM_PREPAY\">AM_PREPAY_PROV|AM_PREPAY_VAT|AM_PREPAY_TOT</Col><Col id=\"AM_PAYSCHD\">AM_PAYSCHD_TAX|AM_PAYSCHD_TXFR|AM_PAYSCHD_PROV|AM_PAYSCHD_VAT|AM_PAYSCHD_TOT</Col><Col id=\"AM_GONGJAE\">AM_GONGJAE1|AM_GONGJAE3|AM_GONGJAE5|AM_GONGJAE_TOT|AM_GONGJAE2|AM_GONGJAE3VAT|AM_GONGJAE4|AM_GONGJAE6|AM_GONGJAE6VAT</Col><Col id=\"AM_REAL_TOT\">AM_REAL_TOT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAM_GONGJAE", this);
            obj._setContents("<ColumnInfo><Column id=\"AM_GONGJAE1\" type=\"INT\" size=\"256\"/><Column id=\"AM_GONGJAE3\" type=\"INT\" size=\"256\"/><Column id=\"AM_GONGJAE5\" type=\"INT\" size=\"256\"/><Column id=\"AM_GONGJAE_TOT\" type=\"INT\" size=\"256\"/><Column id=\"AM_GONGJAE2\" type=\"INT\" size=\"256\"/><Column id=\"AM_GONGJAE3VAT\" type=\"INT\" size=\"256\"/><Column id=\"AM_GONGJAE4\" type=\"INT\" size=\"256\"/><Column id=\"AM_GONGJAE6\" type=\"INT\" size=\"256\"/><Column id=\"AM_GONGJAE6VAT\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfSite","sta00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboNO_DGR","ccfSite:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsNO_DGR");
            obj.set_datacolumn("DS_DGR");
            obj.set_codecolumn("NO_DGR");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","cboNO_DGR:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("작업년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("cchkAM_PREPAY","ctclYM_WORK:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("선급금");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("cchkAM_PAYSCHD","cchkAM_PREPAY:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("지급예정");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("cchkAM_GONGJAE","cchkAM_PAYSCHD:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("공제금");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("cchkAM_REAL_TOT","cchkAM_GONGJAE:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("실집행금");
            obj.set_value("true");
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
            obj = new BindItem("item1","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccfSite.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboNO_DGR","value","dsSearch","NO_DGR");
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
        this.registerScript("DQZ_HDGISUNGSLIP.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.DWA_SILHENG_onload = function(obj,e)
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
        		this.ccfSite.form.DSTextBox.set_value(this.getOwnerFrame().CD_SITE);
        	}else{
        		var today = this.gfnGetDate();
        		this.dsSearch.setColumn(0,"YM_WORK",today.substr(0,6));
        	}

        	// 기성차수 조회조건 보이기/숨기기
        	this.YN_DGR = this.gfnGetConfig("DW" , "YN_DGR");
        	if(this.YN_DGR != "Y")
        	{
        		this.divSearch.form.cboNO_DGR.set_width(0);
        		this.divSearch.form.cboNO_DGR.set_readonly(true);
        		this.divSearch.form.resetScroll();
        	}
        	else if(this.YN_DGR == "Y")
        	{
        		this.divSearch.form.cboNO_DGR.set_width(100);
        		this.divSearch.form.cboNO_DGR.set_readonly(false);
        		this.divSearch.form.resetScroll();
        	}

        	//this.btn1.set_enable(false);

        	this.fnGetAM_GONGJAE_Size();

        	// checkbox 이벤트 강제 실행. (grid width 조절 onLoad시 적용하기 위해서)
        	this.divSearch_cchkAM_PREPAY_onchanged(this.divSearch.form.cchkAM_PREPAY, {postvalue:false});
        	this.divSearch_cchkAM_PAYSCHD_onchanged(this.divSearch.form.cchkAM_PAYSCHD, {postvalue:false});
        	this.divSearch_cchkAM_GONGJAE_onchanged(this.divSearch.form.cchkAM_GONGJAE, {postvalue:false});
        	this.divSearch_cchkAM_REAL_TOT_onchanged(this.divSearch.form.cchkAM_REAL_TOT, {postvalue:true});
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        // 	this.FormBtns.Add.set_enable(false);
        // 	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btn1 = this.gfnFormButtonAdd("btnHadoDj", "fnHadoDj");

        	this.btn1.set_enable(false);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfSite = this.divSearch.form.ccfSite;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWB_HDGISUNGSLIP", "DS_COST", "GR_COST");
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YM_WORK", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("NO_DGR", "string");

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SITE", "string");
        	this.dsCombo.addColumn("YM_WORK", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("YM_WORK", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("NO_DGR", "string");
        	this.dsSave.addColumn("NO_HADOCONT", "string");
        	this.dsSave.addColumn("YMD_WORK", "string");
        	this.dsSave.addColumn("AM_GISUNG_VAT", "bigdecimal");
        	this.dsSave.addColumn("AM_PREPAY_VAT", "bigdecimal");
        	this.dsSave.addColumn("AM_JIKBUL", "bigdecimal");
        	this.dsSave.addColumn("CD_PAYMENT", "string");
        	this.dsSave.addColumn("DT_PAYMENT", "string");
        	this.dsSave.addColumn("CD_VATPROOF", "string");
        	this.dsSave.addColumn("DT_VATPROOF", "string");
        	this.dsSave.addColumn("YN_ETAX", "string");
        	this.dsSave.addColumn("YN_FORWARD", "string");
        	this.dsSave.addColumn("NO_VAT1", "string");
        	this.dsSave.addColumn("NO_VAT2", "string");
        	this.dsSave.addColumn("CONVERSATION_ID1", "string");
        	this.dsSave.addColumn("CONVERSATION_ID2", "string");
        	this.dsSave.addColumn("CD_ACCOUNT", "string");
        	this.dsSave.addColumn("YN_DIVTARGET", "string");
        	this.dsSave.addColumn("YN_JIKBUL", "string");


        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "NO_DGR", this.dsSearch.getColumn(0, "NO_DGR"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
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
        	this.gfnGridAdd(this.dxGrid);
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "NO_DGR", this.dsSearch.getColumn(0, "NO_DGR"));
        				this.dsSave.setColumn(nrow, "NO_HADOCONT", this.dsList.getColumn(i, "NO_HADOCONT"));
        				this.dsSave.setColumn(nrow, "YMD_WORK", this.dsList.getColumn(i, "YMD_WORK"));
        				this.dsSave.setColumn(nrow, "AM_GISUNG_VAT", this.dsList.getColumn(i, "AM_GISUNG_VAT"));
        				this.dsSave.setColumn(nrow, "AM_PREPAY_VAT", this.dsList.getColumn(i, "AM_PREPAY_VAT"));
        				this.dsSave.setColumn(nrow, "AM_JIKBUL", this.dsList.getColumn(i, "AM_JIKBUL"));
        				this.dsSave.setColumn(nrow, "CD_PAYMENT", this.dsList.getColumn(i, "CD_PAYMENT"));
        				this.dsSave.setColumn(nrow, "DT_PAYMENT", this.dsList.getColumn(i, "DT_PAYMENT"));
        				this.dsSave.setColumn(nrow, "CD_VATPROOF", this.dsList.getColumn(i, "CD_VATPROOF"));
        				this.dsSave.setColumn(nrow, "DT_VATPROOF", this.dsList.getColumn(i, "DT_VATPROOF"));
        				this.dsSave.setColumn(nrow, "YN_ETAX", this.dsList.getColumn(i, "YN_ETAX"));
        				this.dsSave.setColumn(nrow, "YN_FORWARD", this.dsList.getColumn(i, "YN_FORWARD"));
        				this.dsSave.setColumn(nrow, "NO_VAT1", this.dsList.getColumn(i, "NO_VAT1"));
        				this.dsSave.setColumn(nrow, "NO_VAT2", this.dsList.getColumn(i, "NO_VAT2"));
        				this.dsSave.setColumn(nrow, "CONVERSATION_ID1", this.dsList.getColumn(i, "CONVERSATION_ID1"));
        				this.dsSave.setColumn(nrow, "CONVERSATION_ID2", this.dsList.getColumn(i, "CONVERSATION_ID2"));
        				this.dsSave.setColumn(nrow, "CD_ACCOUNT", this.dsList.getColumn(i, "CD_ACCOUNT"));
        				this.dsSave.setColumn(nrow, "YN_DIVTARGET", this.dsList.getColumn(i, "YN_DIVTARGET"));
        				this.dsSave.setColumn(nrow, "YN_JIKBUL", this.dsList.getColumn(i, "YN_JIKBUL"));
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
        };

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

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {

        		if(this.dsList.rowcount > 0){
        			this.btn1.set_enable(true);
        		}else{
        			this.btn1.set_enable(false);

        		}

        		this.gfnGridAfterSelect(this.dxGrid);

        	}else if(svcID == "save"){
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        };

        this.fnCallbackCombo = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "combo") {
        		this.divSearch.form.cboNO_DGR.set_index(0);
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		// 폼상태 초기화
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		this.btn1.set_enable(false);
        	}

        	if(e.columnid == "CD_SITE" || e.columnid == "YM_WORK"){
        	  this.fnSetCombo();
           }
        };

        this.fnSetCombo = function() {

        	this.dsCombo.clearData();

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsCombo.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsNO_DGR=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallbackCombo";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnHadoDj = function(obj,e) {
        	var param = {};
        	var rowposition = this.dsList.rowposition;

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.ccfSite.form.DSTextBox.text;

        	if(rowposition > -1){
        		param.NO_HADOCONT = this.dsList.getColumn(rowposition, "NO_HADOCONT");
        		param.DS_HADOCONT = this.dsList.getColumn(rowposition, "DS_HADOCONT");
        	}

        	// TODO : param 추가가 있을지 모르겠음.

        	this.gfnFormOpen("DWB", "DWB_HADODJ", "", param);
        };


        this.fnSetGridSize = function(check, columnNames, width)
        {
        	for(var k=0; k<this.dxGrid.getFormatColCount(); k++){
              var ds_field = this.dxGrid.getCellProperty("body", k, "text");
              if(ds_field.indexOf("bind:") > -1) {
                 ds_field = ds_field.replace("bind:", "");

        		 for(var i=0; i < columnNames.length; i++)
        		 {
        			 if(ds_field == columnNames[i])
        			 {
        				if(check == true)
        				{
        					this.dxGrid.setFormatColProperty(k, "size", width);
        				}
        				else
        				{
        					this.dxGrid.setFormatColProperty(k, "size", 0);
        				}
        				break;
        			 }
        		 }
              }
           }
        }

        // 공제금들의 경우 무조건 보이게하면 안되는 컬럼들이 존재하여 기존의 크기를 저장해둔다.
        this.fnGetAM_GONGJAE_Size = function()
        {
        	var temp = this.dsChangeColumn.getColumn(0, "AM_GONGJAE");
        	var columnNames = temp.split('|');

        	for(var i = 0; i < columnNames.length; i++)
        	{
        		var index = this.dxGrid.getBindCellIndex("body", columnNames[i]);
        		this.dsAM_GONGJAE.setColumn(0, columnNames[i], this.dxGrid.getFormatColProperty(index, "size"));
        	}
        }

        // 선급금 checkbox onchanged
        this.divSearch_cchkAM_PREPAY_onchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue)
        	{
        		var temp = this.dsChangeColumn.getColumn(0, "AM_PREPAY");
        		var columnNames = temp.split('|');

        		this.fnSetGridSize(e.postvalue, columnNames, 100);
        	}
        };
        // 지급예정 checkbox onchanged
        this.divSearch_cchkAM_PAYSCHD_onchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue)
        	{
        		var temp = this.dsChangeColumn.getColumn(0, "AM_PAYSCHD");
        		var columnNames = temp.split('|');

        		this.fnSetGridSize(e.postvalue, columnNames, 100);
        	}
        };

        // 공제금 checkbox onchanged
        // 공제금은 컬럼별로 크기가 다르기 때문에 별도 관리.
        this.divSearch_cchkAM_GONGJAE_onchanged = function(obj,e)
        {
        	var temp = this.dsChangeColumn.getColumn(0, "AM_GONGJAE");
        	var columnNames = temp.split('|');

        	for(var k=0; k<this.dxGrid.getFormatColCount(); k++){
              var ds_field = this.dxGrid.getCellProperty("body", k, "text");
              if(ds_field.indexOf("bind:") > -1) {
                 ds_field = ds_field.replace("bind:", "");

        		 for(var i=0; i < columnNames.length; i++)
        		 {
        			 if(ds_field == columnNames[i])
        			 {
        				if(e.postvalue == true)
        				{
        					this.dxGrid.setFormatColProperty(k, "size", this.dsAM_GONGJAE.getColumn(0, columnNames[i]));
        				}
        				else
        				{
        					this.dxGrid.setFormatColProperty(k, "size", 0);
        				}
        				break;
        			 }
        		 }
              }
           }
        };

        // 실집행금 checkbox onchanged
        this.divSearch_cchkAM_REAL_TOT_onchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue)
        	{
        		var temp = this.dsChangeColumn.getColumn(0, "AM_REAL_TOT");
        		var columnNames = temp.split('|');

        		this.fnSetGridSize(e.postvalue, columnNames, 100);
        	}
        };


        // 그리드 데이터 변경시 이벤트 처리
        this.dsList_onvaluechanged = function(obj,e)
        {
        	// 그리드에서 값 변경이 일어났을경우 확정버튼 비활성화 처리(체크박스 체크시에는 제외시킴)
        	if(e.columnid != "CHK"){
        		if(e.oldvalue != e.newvalue){
        			this.btn1.set_enable(false);
        		}
        	}

        	// 자동산식
        	if(e.oldvalue != e.newvalue)
        	{
        		if(e.columnid == "AM_GISUNG_VAT")
        		{
        			var am_gisung_prov = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_GISUNG_PROV"), 0);
        			var am_prepay_vat = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_PREPAY_VAT"), 0);

        			this.dsList.setColumn(e.row, "AM_GISUNG_TOT", nexacro.toNumber(e.newvalue + am_gisung_prov, 0));
        			this.dsList.setColumn(e.row, "AM_PAYSCHD_VAT", nexacro.toNumber(e.newvalue - am_prepay_vat, 0));
        		}

        		if(e.columnid == "AM_PREPAY_VAT")
        		{
        			var am_prepay_prov = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_PREPAY_PROV"), 0);
        			var am_gisung_vat = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_GISUNG_VAT"), 0);

        			this.dsList.setColumn(e.row, "AM_PREPAY_TOT", nexacro.toNumber(am_prepay_prov + e.newvalue, 0));
        			this.dsList.setColumn(e.row, "AM_PAYSCHD_VAT", nexacro.toNumber(am_gisung_vat - e.newvalue, 0));
        		}

        		if(e.columnid == "AM_PAYSCHD_VAT")
        		{
        			var am_payschd_prov = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_PAYSCHD_PROV"), 0);

        			this.dsList.setColumn(e.row, "AM_PAYSCHD_TOT", nexacro.toNumber(am_payschd_prov + e.newvalue, 0));
        		}

        		if(e.columnid == "AM_PAYSCHD_TOT")
        		{
        			var am_gongjae_tot = nexacro.toNumber(this.dsList.getColumn(e.row, "AM_GONGJAE_TOT"), 0);

        			this.dsList.setColumn(e.row, "AM_REAL_TOT", nexacro.toNumber(e.newvalue - am_gongjae_tot, 0));
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DWA_SILHENG_onload,this);
            this.divSearch.form.cchkAM_PREPAY.addEventHandler("onchanged",this.divSearch_cchkAM_PREPAY_onchanged,this);
            this.divSearch.form.cchkAM_PAYSCHD.addEventHandler("onchanged",this.divSearch_cchkAM_PAYSCHD_onchanged,this);
            this.divSearch.form.cchkAM_GONGJAE.addEventHandler("onchanged",this.divSearch_cchkAM_GONGJAE_onchanged,this);
            this.divSearch.form.cchkAM_REAL_TOT.addEventHandler("onchanged",this.divSearch_cchkAM_REAL_TOT_onchanged,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DQZ_HDGISUNGSLIP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
