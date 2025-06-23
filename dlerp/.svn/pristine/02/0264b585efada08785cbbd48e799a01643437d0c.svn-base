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
            this.set_titletext("투자내역 분할/조정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWDPR_TUJAADJUSTDIV_SELECT</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DWDPR_TUJAADJUSTDIV_SELECT</Col></Row><Row><Col id=\"TARGET\">d_save</Col><Col id=\"SP\">DWDPR_TUJAADJUST_SAVE</Col></Row><Row><Col id=\"TARGET\">d_delete</Col><Col id=\"SP\">DWDPR_TUJAADJUST_CHECK_AND_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SERIAL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtNO_SERIAL","0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","edtNO_SERIAL:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("readonly").set("true");
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,"150","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100.00%","22",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("대상원가내역");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divDataTop:10",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","0",null,"22","0",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("분할/투자조정내역");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","sta02:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsListSub");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divData.form.divDataBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE","text","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtNO_SERIAL","value","dsSearch","NO_SERIAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
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
        this.registerScript("DWD_TUJAADJUSTDIVDLG.xfdl", function() {
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

        	this.divSearch.form.ctclYM_WORK.form.TextBox.set_readonly(true);

           	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE))
        	{
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		this.dsSearch.setColumn(0, "YM_WORK", this.getOwnerFrame().YM_WORK);
        		this.dsSearch.setColumn(0, "NO_SERIAL", this.getOwnerFrame().NO_SERIAL);

        		this.FormBtns.Select.click();
        	}
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
        	//this.btn1 = this.gfnFormButtonAdd("Detail", "fnDetail1");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
            this.ctclYM_WORK = this.divSearch.form.ctclYM_WORK;
        	this.dxGrid = this.divData.form.divDataTop.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataBottom.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWD_TUJAADJUSTDIVDLG_M");
        	this.dxGrid.set_selecttype("cell");
        // 	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        // 	this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);
        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DW", "DWD_TUJAADJUSTDIVDLG_D");
        	this.dxGridSub.BeforeUserDataSetParam = "fnGridSub_BeforeUserDataSetParam";

        	// 그리드 코드파인드 값 변경
        	this.dxGridSub.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        }
        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	if(id == "DWX_CFHADO_JIK") {
        		var arr = codeFindData;
        		if(arr.length > 0) {
        // 			var NO_HADOCONT = arr[0].NO_HADOCONT;
        // 			var GRID_DATA = this.dsList.getColumn(this.dsList.rowposition,"NO_HADOCONT")
        // 			if(NO_HADOCONT != GRID_DATA){
        				this.dsListSub.setColumn(this.dsListSub.rowposition,"CD_COST","");
        				this.dsListSub.setColumn(this.dsListSub.rowposition,"CD_DKCOST","");
        				this.dsListSub.setColumn(this.dsListSub.rowposition,"DS_COST","");
        			/*}*/
        		}
        	}

        	return true;
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YM_WORK", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("GUBUN", "string");
        	this.dsSelect.addColumn("NO_SERIAL", "bigdecimal");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("YM_WORK", "string");
        	this.dsSelectSub.addColumn("CD_SITE", "string");
        	this.dsSelectSub.addColumn("GUBUN", "string");
        	this.dsSelectSub.addColumn("NO_SERIAL", "bigdecimal");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("YM_WORK", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("CD_COST", "string");
        	this.dsSave.addColumn("CD_DKCOST", "string");
        	this.dsSave.addColumn("DT_DATE", "string");
        	this.dsSave.addColumn("RM_DESC", "string");
        	this.dsSave.addColumn("QN_QUANTITY", "bigdecimal");
        	this.dsSave.addColumn("AM_KUMYAEK", "bigdecimal");
        	this.dsSave.addColumn("TY_SYSTEM", "string");
        	this.dsSave.addColumn("CD_SLIP", "string");
        	this.dsSave.addColumn("CD_BIMOK", "string");
        	this.dsSave.addColumn("CD_ACCOUNT", "string");
        	this.dsSave.addColumn("NO_SERIAL", "bigdecimal");
        	this.dsSave.addColumn("CD_SYSPRIMARY", "string");
        	this.dsSave.addColumn("AM_TOTAL", "bigdecimal");
        	this.dsSave.addColumn("CD_HADO", "string");
        	this.dsSave.addColumn("NO_CHA", "int");
        	this.dsSave.addColumn("CD_AUTOSLIP", "string");
        	this.dsSave.addColumn("DS_VENDOR", "string");
        	this.dsSave.addColumn("DS_COST", "string");


        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("TY_SAVE", "string");
        	this.dsDelete.addColumn("ID_USER", "string");
        	this.dsDelete.addColumn("YM_WORK", "string");
        	this.dsDelete.addColumn("CD_SITE", "string");
        	this.dsDelete.addColumn("CD_COST", "string");
        	this.dsDelete.addColumn("CD_DKCOST", "string");
        	this.dsDelete.addColumn("DT_DATE", "string");
        	this.dsDelete.addColumn("RM_DESC", "string");
        	this.dsDelete.addColumn("QN_QUANTITY", "bigdecimal");
        	this.dsDelete.addColumn("AM_KUMYAEK", "bigdecimal");
        	this.dsDelete.addColumn("TY_SYSTEM", "string");
        	this.dsDelete.addColumn("CD_SLIP", "string");
        	this.dsDelete.addColumn("CD_BIMOK", "string");
        	this.dsDelete.addColumn("CD_ACCOUNT", "string");
        	this.dsDelete.addColumn("NO_SERIAL", "bigdecimal");
        	this.dsDelete.addColumn("CD_SYSPRIMARY", "string");
        	this.dsDelete.addColumn("AM_TOTAL", "bigdecimal");
        	this.dsDelete.addColumn("CD_HADO", "string");
        	this.dsDelete.addColumn("NO_CHA", "int");
        	this.dsDelete.addColumn("CD_AUTOSLIP", "string");
        	this.dsDelete.addColumn("DS_VENDOR", "string");
        	this.dsDelete.addColumn("DS_COST", "string");



        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
           if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "GUBUN", "");
        	this.dsSelect.setColumn(0, "NO_SERIAL", this.dsSearch.getColumn(0, "NO_SERIAL"));

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
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]


        	// 디테일 데이터셋 데이터 삭제
        	this.dsListSub.clearData();

        	// 디테일 파마리터 데이터셋 셋팅
        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();

        	this.dsSelectSub.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        	this.dsSelectSub.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelectSub.setColumn(0, "GUBUN", "");
        	this.dsSelectSub.setColumn(0, "NO_SERIAL", "-1");


        	var strSvcId    = "detail";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "d_select=dsSelectSub";
        	var outData     = "dsListSub=d_select0";
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

        this.fnSave = function() {
        		if (!this.gfnGridValidate(this.dxGridSub)) return;
        		if(this.dsListSub.rowcount < 1) return;
        		if (!this.fnSaveValidate()) return false;

        		this.dxGridSub.updateToDataset();
        		this.dsSave.clearData();

        		for (var i = 0; i < this.dsListSub.rowcount; i++) {
        			var flag = this.gfnGetFlag(this.dsListSub, i);
        			switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "CD_COST", this.dsListSub.getColumn(i, "CD_COST"));
        				this.dsSave.setColumn(nrow, "CD_DKCOST", this.dsListSub.getColumn(i, "CD_DKCOST"));
        				this.dsSave.setColumn(nrow, "DT_DATE", this.dsListSub.getColumn(i, "DT_DATE"));
        				this.dsSave.setColumn(nrow, "RM_DESC", this.dsListSub.getColumn(i, "RM_DESC"));
        				this.dsSave.setColumn(nrow, "QN_QUANTITY", this.dsListSub.getColumn(i, "QN_QUANTITY"));
        				this.dsSave.setColumn(nrow, "AM_KUMYAEK", this.dsListSub.getColumn(i, "AM_KUMYAEK"));
        				this.dsSave.setColumn(nrow, "TY_SYSTEM", this.dsListSub.getColumn(i, "TY_SYSTEM"));
        				this.dsSave.setColumn(nrow, "CD_SLIP", this.dsListSub.getColumn(i, "CD_SLIP"));
        				this.dsSave.setColumn(nrow, "CD_BIMOK", this.dsListSub.getColumn(i, "CD_BIMOK"));
        				this.dsSave.setColumn(nrow, "CD_ACCOUNT", this.dsListSub.getColumn(i, "CD_ACCOUNT"));
        				this.dsSave.setColumn(nrow, "NO_SERIAL", this.dsListSub.getColumn(i, "NO_SERIAL"));
        				this.dsSave.setColumn(nrow, "CD_SYSPRIMARY", this.dsListSub.getColumn(i, "CD_SYSPRIMARY"));
        				this.dsSave.setColumn(nrow, "AM_TOTAL", this.dsListSub.getColumn(i, "AM_TOTAL"));
        				this.dsSave.setColumn(nrow, "CD_HADO", this.dsListSub.getColumn(i, "CD_HADO"));
        				this.dsSave.setColumn(nrow, "NO_CHA", this.dsList.getColumn(i, "NO_CHA"));
        				this.dsSave.setColumn(nrow, "CD_AUTOSLIP", this.dsListSub.getColumn(i, "CD_AUTOSLIP"));
        				this.dsSave.setColumn(nrow, "DS_VENDOR", this.dsListSub.getColumn(i, "DS_VENDOR"));

        				this.dsSave.setColumn(nrow, "DS_COST", this.dsListSub.getColumn(i, "DS_COST"));
        				trace(this.dsSave.getColumn(nrow, "DS_COST"));
        				break;
        		}


        		this.dsDelete.clearData();
        		var row = this.dsDelete.addRow();
        		this.dsDelete.setColumn(row, "TY_SAVE", "D");
        		this.dsDelete.setColumn(row, "ID_USER", this.AuthClient.ID_USER);
        		this.dsDelete.setColumn(row, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        		this.dsDelete.setColumn(row, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsDelete.setColumn(row, "CD_COST", this.dsList.getColumn(0, "CD_COST"));
        		this.dsDelete.setColumn(row, "CD_DKCOST", this.dsList.getColumn(0, "CD_DKCOST"));
        		this.dsDelete.setColumn(row, "DT_DATE", this.dsList.getColumn(0, "DT_DATE"));
        		this.dsDelete.setColumn(row, "NO_SERIAL", this.dsList.getColumn(0, "NO_SERIAL"));

        	}

          if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
            var inData     = "d_save=dsSave d_delete=dsDelete";
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


        this.fnDelete = function() {
        	this.dsSave.clearData();

        	if(this.dsList.rowcount > 0) {
        		var nrow = this.dsSave.addRow();
        		this.dsSave.setColumn(nrow, "TY_SAVE", "D");
        		this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		this.dsSave.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        		this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsSave.setColumn(nrow, "CD_COST", this.dsList.getColumn(0, "CD_COST"));
        		this.dsSave.setColumn(nrow, "CD_DKCOST", this.dsList.getColumn(0, "CD_DKCOST"));
        		this.dsSave.setColumn(nrow, "DT_DATE", this.dsList.getColumn(0, "DT_DATE"));
        		this.dsSave.setColumn(nrow, "NO_SERIAL", this.dsList.getColumn(0, "NO_SERIAL"));

        	}

          if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "delete";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
            var inData     = "d_save=dsSave";
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
         *	입력 버튼
         */
        this.fnAdd = function() {

        	var sum_qn_quantity = this.dsListSub.getSum("QN_QUANTITY");
        	var sum_am_kumyaek = this.dsListSub.getSum("AM_KUMYAEK");
            var nrow = this.gfnGridAdd(this.dxGridSub, "bottom"); // top (default), bottom, current

           	this.dsListSub.set_enableevent(false);
        	this.dsListSub.setColumn(nrow, "CD_HADO", this.dsList.getColumn(this.dsList.rowposition,"CD_HADO"));//계약명
        	this.dsListSub.setColumn(nrow, "DS_HADOCONT", this.dsList.getColumn(this.dsList.rowposition,"DS_HADOCONT"));//계약명
        	this.dsListSub.setColumn(nrow, "NO_CHA", this.dsList.getColumn(this.dsList.rowposition,"NO_CHA"));
        	this.dsListSub.setColumn(nrow, "CD_COST", this.dsList.getColumn(this.dsList.rowposition,"CD_COST"));
        	this.dsListSub.setColumn(nrow, "CD_DKCOST", this.dsList.getColumn(this.dsList.rowposition,"CD_DKCOST"));
        	this.dsListSub.setColumn(nrow, "DS_COST", this.dsList.getColumn(this.dsList.rowposition,"DS_COST"));
        	this.dsListSub.setColumn(nrow, "CD_BIMOK", this.dsList.getColumn(this.dsList.rowposition,"CD_BIMOK"));
        	this.dsListSub.setColumn(nrow, "DS_BIMOK", this.dsList.getColumn(this.dsList.rowposition,"DS_BIMOK"));
        	this.dsListSub.setColumn(nrow, "RM_DESC", this.dsList.getColumn(this.dsList.rowposition,"RM_DESC"));
        	this.dsListSub.setColumn(nrow, "QN_QUANTITY", this.dsList.getColumn(this.dsList.rowposition, "QN_QUANTITY") - this.gfnNvl(sum_qn_quantity,0)); //수량
        	this.dsListSub.setColumn(nrow, "AM_KUMYAEK", this.dsList.getColumn(this.dsList.rowposition, "AM_KUMYAEK") - this.gfnNvl(sum_am_kumyaek, 0));
        	this.dsListSub.setColumn(nrow, "DT_DATE", this.dsList.getColumn(this.dsList.rowposition,"DT_DATE"));
        	this.dsListSub.setColumn(nrow, "TY_SYSTEM", this.dsList.getColumn(this.dsList.rowposition,"TY_SYSTEM"));
        	this.dsListSub.setColumn(nrow, "DS_SYSTEM", this.dsList.getColumn(this.dsList.rowposition,"DS_SYSTEM"));
        	this.dsListSub.setColumn(nrow, "NO_SERIAL", this.dsList.getColumn(this.dsList.rowposition,"NO_SERIAL"));
        	this.dsListSub.setColumn(nrow, "CD_SLIP", this.dsList.getColumn(this.dsList.rowposition,"CD_SLIP"));
        	this.dsListSub.setColumn(nrow, "CD_ACCOUNT", this.dsList.getColumn(this.dsList.rowposition,"CD_ACCOUNT"));
        	this.dsListSub.setColumn(nrow, "CD_SYSPRIMARY", this.dsList.getColumn(this.dsList.rowposition,"CD_SYSPRIMARY"));
        	this.dsListSub.setColumn(nrow, "DS_UNIT", this.dsList.getColumn(this.dsList.rowposition,"DS_UNIT"));
        	this.dsListSub.setColumn(nrow, "CD_AUTOSLIP", this.dsList.getColumn(this.dsList.rowposition,"CD_AUTOSLIP"));
        	this.dsListSub.setColumn(nrow, "DS_VENDOR", this.dsList.getColumn(this.dsList.rowposition,"DS_VENDOR"));


        	this.dsListSub.set_enableevent(true);

        }


        /*
         *   삭제 버튼
        */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGridSub);
        }
        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGridSub);
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
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"YM_WORK"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctclYM_WORK.form.TextBox.setFocus();
        		}
        		this.gfnAlert("기성년월은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}
        	return validate;

        };

        /*
         *	저장 Validate
         */
        this.fnSaveValidate = function() {

        var validate = true;
        	if(nexacro.toNumber(this.dsList.getColumn(0, "QN_QUANTITY")) != nexacro.toNumber(this.dsListSub.getSum("QN_QUANTITY"))
        		|| nexacro.toNumber(this.dsList.getColumn(0, "AM_KUMYAEK")) != nexacro.toNumber(this.dsListSub.getSum("AM_KUMYAEK"))){
        		validate = false;
        		this.gfnAlert("분할/투자조정내역의 수량/금액 합계는 반드시 대상원가내역의 수량/금액과 같아야 합니다.");
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
        		this.gfnGridAfterSelect(this.dxGrid);
        		}
        	else if (svcID == "detail") {
        		this.gfnGridAfterSelect(this.dxGridSub);
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			//this.FormBtns.Select.click();
        			//this.fnDelete();
        			this.getParentContext().close(true);
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "delete") {
        		this.getParentContext().close(true);
        	}
        }



        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        // this.fnGrid_RowCellChanged = function(obj:nexacro.Grid,e:nexacro.GridSelectEventInfo)
        // {
        //     if ((obj.oldrow > -1 && obj.oldrow == e.row)
        // 		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        // 		this.fnSelectSub();
        // 		obj.oldrow = -1;
        // 	}
        // };
        //
        // this.dsList_canrowposchange = function(obj:nexacro.NormalDataset,e:nexacro.DSRowPosChangeEventInfo) {
        // 	var can_rowchange = true;
        // 	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        // 		var flag = this.gfnGetFlag(this.dsListSub, i);
        // 		if (flag == "I" || flag == "U" || flag == "D") {
        // 			can_rowchange = false;
        // 			break;
        // 		}
        // 	}
        // 	if(!can_rowchange) {
        // 		this._row = e.newrow;
        // 		this.gfnConfirm("변경된 데이터가 있습니다.\r\n계속 진행하시겠습니까?", "dsList_canrowposchange_callback");
        // 	}
        // 	return can_rowchange;
        // }
        //
        // this.dsList_canrowposchange_callback = function(strId, val)
        // {
        // 	if(val == true) {
        // 		this.dsListSub.set_enableevent(false);
        // 		this.dsListSub.set_rowposition(this._row);
        // 		this.dsListSub.set_enableevent(true);
        // 	}
        // }

        /*
         *	서브 그리드 코드파인드
         */
        this.fnGridSub_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "DWX_CFHADO_ADJUST") {
         		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "CD_COST", this.dsList.getColumn(0, "CD_COST"));
        		dsUserParam.setColumn(nrow, "TY_SYSTEM", this.dsList.getColumn(0, "TY_SYSTEM"));

        	}else if (id == "DWX_CFCOST_ADJUST") {
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "NO_HADOCONT", this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_HADO"));
        		//dsUserParam.setColumn(nrow, "NO_HADOCONT", "직영");
        	}else if (id == "DWX_CFCOST_BATSEL") {
        		if(this.gfnIsNull(this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_HADO"))){
        			this.gfnAlert("계약번호를 선택후 공종코드 선택이 가능합니다.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "NO_HADOCONT", this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_HADO"));
         	}else if (id == "DWX_CFHADO_JIK") {
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "NO_HADOCONT", this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_HADO"));

         	}
        	return true;
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
        		this.dsList.clearData();
        		this.dsListSub.clearData();
        	}
        };

        this.dsListSub_onvaluechanged = function(obj,e)
        {
        	trace("oldvalue:"+e.oldvalue);
        	trace("newvalue:"+e.newvalue);

        	if(e.oldvalue != e.newvalue){
        		if(e.columnid =="DS_HADOCONT"){
        			this.dsListSub.setColumn(e.row,"CD_COST","");
        			this.dsListSub.setColumn(e.row,"CD_DKCOST","");
        			this.dsListSub.setColumn(e.row,"DS_COST","");

        		}
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.dsListSub.addEventHandler("onvaluechanged",this.dsListSub_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWD_TUJAADJUSTDIVDLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
