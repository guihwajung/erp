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
            this.set_titletext("기성미지급분할(긴급자금)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWBPR_HDLEDGERSPLTLDGR_SELECT</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DWBPR_HDLEDGERSPLT_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DWBPR_HDGISUNGMONTH_MAX_SELECT</Col></Row><Row><Col id=\"TARGET\">d_save</Col><Col id=\"SP\">DWBPR_HDLEDGERSPLT_SAVE</Col></Row><Row><Col id=\"TARGET\">d_exec</Col><Col id=\"SP\">DWBPR_HDLEDGERSPLT_EXECUTE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HADOCONT\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DGR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"NO_HADOCONT\"/><Col id=\"YM_WORK\"/><Col id=\"NO_DGR\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNO_DGR", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboNO_DGR","ccfCD_SITE:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsNO_DGR");
            obj.set_datacolumn("DS_DGR");
            obj.set_codecolumn("NO_DGR");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","cboNO_DGR:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("기성년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.getSetter("dateformat").set("yyyy-mm");
            obj.getSetter("editformat").set("yyyymm");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","ctclYM_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_HADOCONT","ctclYM_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_HADOCONT","staNO_HADOCONT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DWX_CFHADO_01");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","ccfNO_HADOCONT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("업체코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","staCD_VENDOR:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DWX_CFHADOVENDOR_01");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("8");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","130",null,"3","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cursor("ns-resize");
            obj.set_background("navy");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter:5",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","35",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_scrollbartype("none none");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta02","0","103",null,"22","0",null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("기성미지급분할내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("1");
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

            obj = new BindItem("item1","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfNO_HADOCONT.form.CDTextBox","value","dsSearch","NO_HADOCONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cboNO_DGR","value","dsSearch","NO_DGR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
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
        this.registerScript("DWB_HDGISUNGSPLT.xfdl", function() {
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

        	// 기성차수 조회조건 보이기/숨기기
        	this.YN_DGR = this.gfnGetConfig("DW" , "YN_DGR");
        	if(this.YN_DGR == "Y")
        	{
        		this.divSearch.form.cboNO_DGR.set_width(100);
        		this.divSearch.form.cboNO_DGR.set_readonly(false);
        		this.divSearch.form.resetScroll();
        	}
        	else
        	{
        		this.divSearch.form.cboNO_DGR.set_width(0);
        		this.divSearch.form.cboNO_DGR.set_readonly(true);
        		this.divSearch.form.resetScroll();
        	}

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().YM_WORK))
        	{
        		this.dsSearch.setColumn(0,"CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		this.dsSearch.setColumn(0,"YM_WORK", this.getOwnerFrame().YM_WORK);
        		this.dsSearch.setColumn(0,"NO_HADOCONT", this.getOwnerFrame().NO_HADOCONT);
        		this.ccfNO_HADOCONT.form.DSTextBox.set_value(this.getOwnerFrame().DS_HADOCONT);
        		this.dsSearch.setColumn(0,"CD_VENDOR", this.getOwnerFrame().CD_VENDOR);
        		this.ccfCD_VENDOR.form.DSTextBox.set_value(this.getOwnerFrame().DS_VENDOR);
        		this.dsSearch.setColumn(0,"NO_DGR", this.getOwnerFrame().NO_DGR);

        		this.FormBtns.Select.click();
        	}else{
        		var today = this.gfnGetDate();
        		this.dsSearch.setColumn(0,"YM_WORK",today.substr(0,6));
        	}

        	//this.ccfCD_VENDOR.form.fnCodeFindLoad();
        	//this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ctclYM_WORK = this.divSearch.form.ctclYM_WORK;
        	this.ccfNO_HADOCONT = this.divSearch.form.ccfNO_HADOCONT;
        	this.ccfCD_VENDOR = this.divSearch.form.ccfCD_VENDOR;
        	this.cboNO_DGR =  this.divSearch.form.cboNO_DGR;

        	this.dxGrid = this.divData.form.divDataTop.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataBottom.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfNO_HADOCONT.CodeFindName = "DWX_CFHADO_01";
        	this.ccfNO_HADOCONT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfNO_HADOCONT.AfterCDTextChanged = "ccfNO_HADOCONT_AfterCDTextChanged";
        	this.ccfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_VENDOR.AfterCDTextChanged = "ccfCD_VENDOR_AfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWB_HDLEDGERSPLTLDGR");
        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DW", "DWB_HDLEDGERSPLT");

        	this.dxGridSub.EnterCell = "fnGridSub_EnterCell";
        	this.dxGridSub.BeforeUserDataSetParam = "fnGridSub_BeforeUserDataSetParam";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("NO_HADOCONT", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");
        	this.dsSelect.addColumn("NO_DGR", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");
        	this.dsSelect.addColumn("DS_CONTMETHOD", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("TY_WRK", "string");
        	this.dsSelectSub.addColumn("CD_SITE", "string");
        	this.dsSelectSub.addColumn("NO_HADOCONT", "string");
        	this.dsSelectSub.addColumn("YM_WORK", "string");
        	this.dsSelectSub.addColumn("NO_DGR", "string");
        	this.dsSelectSub.addColumn("CD_VENDOR", "string");
        	this.dsSelectSub.addColumn("DS_CONTMETHOD", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("NO_HADOCONT", "string");
        	this.dsSave.addColumn("YM_WORK", "string");
        	this.dsSave.addColumn("NO_DGR", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("NO_SPLT", "string");
        	this.dsSave.addColumn("YN_TXVOL", "string");
        	this.dsSave.addColumn("AM_SPLT", "bigdecimal");
        	this.dsSave.addColumn("CD_PAYMENT", "string");
        	this.dsSave.addColumn("DT_PAYMENT", "string");
        	this.dsSave.addColumn("DS_OLN", "string");
        	this.dsSave.addColumn("DS_RMKS", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("TY_WRK", "string");
        	this.dsExec.addColumn("ID_USER", "string");
        	this.dsExec.addColumn("CD_SITE", "string");
        	this.dsExec.addColumn("NO_HADOCONT", "string");
        	this.dsExec.addColumn("YM_WORK", "string");
        	this.dsExec.addColumn("NO_DGR", "string");
        	this.dsExec.addColumn("CD_VENDOR", "string");

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SITE", "string");
        	this.dsCombo.addColumn("YM_WORK", "string");
        	this.dsCombo.addColumn("DS_CONTMETHOD", "string");
        };

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);
        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "TY_WRK", "Q");
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "NO_HADOCONT", this.dsSearch.getColumn(0, "NO_HADOCONT"));
        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsSelect.setColumn(0, "NO_DGR", this.dsSearch.getColumn(0, "NO_DGR"));
        	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        	if(!this.gfnIsNull(this.getOwnerFrame().DS_CONTMETHOD)){
        		this.dsSelect.setColumn(0, "DS_CONTMETHOD", this.getOwnerFrame().DS_CONTMETHOD);
        	}else{
        		this.dsSelect.setColumn(0, "DS_CONTMETHOD", this.FormInfo.DS_PARAM);
        	}


        	// 디테일 파마리터 데이터셋 셋팅
        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();

        	this.dsSelectSub.setColumn(0, "TY_WRK", "Q");
        	this.dsSelectSub.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelectSub.setColumn(0, "NO_HADOCONT", this.dsSearch.getColumn(0, "NO_HADOCONT"));
        	this.dsSelectSub.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsSelectSub.setColumn(0, "NO_DGR", this.dsSearch.getColumn(0, "NO_DGR"));
        	this.dsSelectSub.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        	if(!this.gfnIsNull(this.getOwnerFrame().DS_CONTMETHOD)){
        		this.dsSelectSub.setColumn(0, "DS_CONTMETHOD", this.getOwnerFrame().DS_CONTMETHOD);
        	}else{
        		this.dsSelectSub.setColumn(0, "DS_CONTMETHOD", this.FormInfo.DS_PARAM);
        	}

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect d_select=dsSelectSub";
        	var outData     = "dsList=select0 dsListSub=d_select0";
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
         * 서브 버튼 이벤트
         ************************************************************************/

        /*
         *	서브 저장 버튼
         */
        this.fnSave = function() {
              if(this.dsListSub.rowcount < 1) return;
              if (!this.gfnGridValidate(this.dxGridSub)) return;

              this.dxGridSub.updateToDataset();
              this.dsSave.clearData();

              for (var i = 0; i < this.dsListSub.rowcount; i++) {
                 var flag = this.gfnGetFlag(this.dsListSub, i);
                 switch(flag) {
                 case "I":
                 case "U":
                 case "D":
                 var nrow = this.dsSave.addRow();
                    this.dsSave.setColumn(nrow, "TY_WRK", flag);
                    this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
                    this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
                    this.dsSave.setColumn(nrow, "NO_HADOCONT", this.dsSearch.getColumn(0, "NO_HADOCONT"));
                    this.dsSave.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
                    this.dsSave.setColumn(nrow, "NO_DGR", this.dsSearch.getColumn(0, "NO_DGR"));
                    this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
                    this.dsSave.setColumn(nrow, "NO_SPLT", this.dsListSub.getColumn(i, "NO_SPLT"));
                    this.dsSave.setColumn(nrow, "YN_TXVOL", this.dsListSub.getColumn(i, "YN_TXVOL"));
                    this.dsSave.setColumn(nrow, "AM_SPLT", this.dsListSub.getColumn(i, "AM_SPLT"));
                    this.dsSave.setColumn(nrow, "CD_PAYMENT", this.dsListSub.getColumn(i, "CD_PAYMENT"));
                    this.dsSave.setColumn(nrow, "DT_PAYMENT", this.dsListSub.getColumn(i, "DT_PAYMENT"));
                    this.dsSave.setColumn(nrow, "DS_OLN", this.dsListSub.getColumn(i, "DS_OLN"));
                    this.dsSave.setColumn(nrow, "DS_RMKS", this.dsListSub.getColumn(i, "DS_RMKS"));
                 break;
              }
           }

          if (this.dsSave.rowcount == 0) return;


           this.dsExec.clearData();
           this.dsExec.addRow();

           this.dsExec.setColumn(0, "TY_WRK", "CHK");
           this.dsExec.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
           this.dsExec.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
           this.dsExec.setColumn(0, "NO_HADOCONT", this.dsSearch.getColumn(0, "NO_HADOCONT"));
           this.dsExec.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
           this.dsExec.setColumn(0, "NO_DGR", this.dsSearch.getColumn(0, "NO_DGR"));
           this.dsExec.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));

           var strSvcId    = "save";
           var strSvcType  = "save";
           var inProc      = "_dsProc";
            var inData     = "d_save=dsSave d_exec=dsExec";
           var outData     = "";
           var strArg      = "";
           var callBackFnc = "fnCallback";

           this.gfnTransaction( strSvcId ,    // transaction을 구분하기 위한 svc id값
                          strSvcType ,    // transaction을 요청할 구분
                          inProc,         // Procedure 정보 Dataset 이름
                          inData ,       // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
                          outData ,       // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
                          strArg,          // 입력갑스로 보낼 arguments, strFormData="20120607"
                          callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
           var nrow = this.gfnGridAdd(this.dxGridSub, "bottom"); // top (default), bottom, current

           this.dsListSub.set_enableevent(false);
           this.dsListSub.setColumn(nrow, "YN_EDIT", "Y");
           this.dsListSub.setColumn(nrow, "CD_PAYMENT", this.dsList.getColumn(this.dsList.rowposition, "CD_PAYMENT"));
           this.dsListSub.setColumn(nrow, "DS_PAYMENT", this.dsList.getColumn(this.dsList.rowposition, "DS_PAYMENT"));
           this.dsListSub.setColumn(nrow, "DT_PAYMENT", this.dsList.getColumn(this.dsList.rowposition, "DT_PAYMENT"));
           this.dsListSub.set_enableevent(true);
        }


        /*
         *   삭제 버튼
        */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGridSub);
        }

        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGridSub);
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;

        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
        	}else if(this.gfnIsNull(this.dsSearch.getColumn(0,"YM_WORK"))){
        		validate = false;

        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctclYM_WORK.form.TextBox.setFocus();
        		}
        		this.gfnAlert("기성년월을 입력하세요.", "fnVaidateCallback");
        	}else if(this.gfnIsNull(this.dsSearch.getColumn(0,"NO_HADOCONT"))){
        		validate = false;

        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ccfNO_HADOCONT.CDTextBox.setFocus();
        		}
        		this.gfnAlert("계약번호를 입력하세요.", "fnVaidateCallback");
        	}else if(this.gfnIsNull(this.dsSearch.getColumn(0,"CD_VENDOR"))){
        		validate = false;

        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ccfCD_VENDOR.CDTextBox.setFocus();
        		}
        		this.gfnAlert("업체코드를 입력하세요.", "fnVaidateCallback");
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
        		else if(svcID == "save"){
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        };
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfNO_HADOCONT") {
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));	// 현장코드
        		dsUserParam.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));	// 기성년월
        		dsUserParam.setColumn(nrow, "TY_DIV", "APRV");
        		if(!this.gfnIsNull(this.getOwnerFrame().DS_CONTMETHOD)){
        			dsUserParam.setColumn(nrow, "DS_CONTMETHOD", this.getOwnerFrame().DS_CONTMETHOD);
        		}else{
        			dsUserParam.setColumn(nrow, "DS_CONTMETHOD", "");
        		}
        		dsUserParam.setColumn(nrow, "CD_VENDOR", "");

        	}
        	else if(id == "ccfCD_VENDOR") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")))
        		{
        			this.gfnAlert("현장코드를 먼저 입력하십시오.");
        			return false;
        		}
        		else if(this.gfnIsNull(this.dsSearch.getColumn(0, "YM_WORK")))
        		{
        			this.gfnAlert("기성년월을 먼저 입력하십시오.");
        			return false;
        		}
        		else if(this.gfnIsNull(this.dsSearch.getColumn(0, "NO_HADOCONT")))
        		{
        			this.gfnAlert("계약번호를 먼저 입력하십시오.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        		dsUserParam.setColumn(nrow, "NO_HADOCONT", this.dsSearch.getColumn(0, "NO_HADOCONT"));
        	}

        	return true;
        }

        this.ccfNO_HADOCONT_AfterCDTextChanged = function(id, codeFindData) {

        	var arr = this.ccfNO_HADOCONT.form.SelectedData;

        	if(arr.length > 0)
        	{
        		this.dsSearch.setColumn(0, "CD_VENDOR", arr[0]["CD_VENDOR"]);
        		this.ccfCD_VENDOR.form.DSTextBox.set_value(arr[0]["DS_VENDOR"]);
        	}
        	else
        	{
        		this.dsSearch.setColumn(0, "CD_VENDOR", "");
        		this.ccfCD_VENDOR.form.DSTextBox.set_value("");
        	}
        }

        this.ccfCD_VENDOR_AfterCDTextChanged = function(id, codeFindData) {

        	   var arr = this.ccfCD_VENDOR.form.SelectedData;

        	   this.dsSearch.set_enableevent(false);
        	   if(arr.length > 0)
        	   {
        		  this.dsSearch.setColumn(0, "CD_VENDOR", arr[0]["CD_VENDOR"]);
        		  this.ccfCD_VENDOR.form.DSTextBox.set_value(arr[0]["DS_VENDOR"]);
        	   }
        	   else
        	   {
        		  this.dsSearch.setColumn(0, "CD_VENDOR", "");
        		  this.ccfCD_VENDOR.form.DSTextBox.set_value("");
        	   }

        	   this.dsSearch.set_enableevent(true);
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGridSub_BeforeUserDataSetParam = function(id, dsUserParam, nrow)
         {
        	if(id == "DWX_CFPAYMENT_01")
        		{
        			var cd_site = this.dsSearch.getColumn(0, "CD_SITE");
        			if(this.gfnIsNull(cd_site)) {
        				this.gfnAlert("현장코드를 먼저 입력하세요.");
        				return false;
        			}

        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "TY_DIV", "DWB03");
        	}

        	return true;
         }

        this.fnGridSub_EnterCell = function(obj, row, cell) {
        	// 수정가능 true, false 처리하려는 컬럼에 대해서만 return 처리할것.
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGridSub, cell);	// 클릭한 cell의 컬럼명

        	// 클릭했을때 클릭한 cell을 수정 가능 or 불가능 상태로 만든다.
        	// YN_EDIT 값이 Y일때만 수정가능상태
        	if(this.dsListSub.getColumn(row, "YN_EDIT") == "N") {
        		return false;
        	}
        	return;
        }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        	}
        }

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        	}
        };

        // 기성차수 콤보 셋팅
        this.fnSetCombo = function() {

        	this.dsCombo.clearData();

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsCombo.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        	if(!this.gfnIsNull(this.getOwnerFrame().DS_CONTMETHOD)){
        		this.dsCombo.setColumn(0, "DS_CONTMETHOD", this.getOwnerFrame().DS_CONTMETHOD);
        	}else{
        		this.dsCombo.setColumn(0, "DS_CONTMETHOD", this.FormInfo.DS_PARAM);
        	}

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

        this.fnCallbackCombo = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "combo") {
        		/*
        		this.dsNO_DGR.insertRow(0);
        		this.dsNO_DGR.setColumn(0, "CD_DGR", "");
        		this.dsNO_DGR.setColumn(0, "DS_DGR", "전체");
         		*/
        		this.divSearch.form.cboNO_DGR.set_index(0);

        	}
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_SITE") {
        		// 현장코드 변경시 초기화
        		this.ccfNO_HADOCONT.form.fnCodeFindClear();
        		this.ccfCD_VENDOR.form.fnCodeFindClear();
        		this.ccfCD_SITE.setFocus();
        		}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.dsListSub.addEventHandler("oncolumnchanged",this.dsListSub_oncolumnchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWB_HDGISUNGSPLT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
