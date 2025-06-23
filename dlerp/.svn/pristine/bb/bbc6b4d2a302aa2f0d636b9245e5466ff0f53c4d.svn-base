(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DWD_TUJAADJUST");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DWDPR_TUJAADJUSTDIV_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_YN_COMBO_COMMON_SELECT_01</Col></Row><Row><Col id=\"TARGET\">d_save</Col><Col id=\"SP\">DWDPR_TUJAADJUST_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"YM_WORK\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_GUBUN", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
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
            obj.set_text("기성년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.getSetter("dateformat").set("yyyy-mm");
            obj.getSetter("editformat").set("yyyymm");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_GUBUN","ctclYM_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_GUBUN","staYN_GUBUN:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsYN_GUBUN");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_value("0");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divDataRight","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataBottom","-554","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Grid("objGridSub1","554","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form);
            obj.set_taborder("2");
            obj._setContents("");
            this.divData.form.divDataRight.form.divDataBottom.addChild(obj.name, obj);
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

            obj = new BindItem("item2","divSearch.form.cboYN_GUBUN","value","dsSearch","GUBUN");
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
        this.registerScript("DQZ_TUJAADJUST.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.DWD_TUJAADJUST_onload = function(obj,e)
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

           // 화면 오픈시 조회함
           //this.FormBtns.Select.click();

           	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().YR_WORK))
        	{
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		this.dsSearch.setColumn(0, "YM_WORK", this.getOwnerFrame().YM_WORK);
        	}else{
        		this.dsSearch.setColumn(0, "YM_WORK", this.gfnGetDate());
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
           // 서브 버튼 사용
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {

        	this.btnTujaAdj = this.gfnFormButtonAdd("btnTujaAdj", "fnTujaAdj");				//투입분할조정
        	this.btnEbgtCost = this.gfnFormButtonAdd("btnEbgtCost", "fnEbgtCost");			//예산현황
        	this.btnSlipSearch = this.gfnFormButtonAdd("btnSlipSearch", "fnSlipSearch");	//전표조회

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
           this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
           this.ctclYM_WORK = this.divSearch.form.ctclYM_WORK;

           this.cboYN_GUBUN = this.divSearch.form.cboYN_GUBUN;
           this.staYN_GUBUN = this.divSearch.form.staYN_GUBUN;

           this.dxGridSub1 = this.divData.form.divDataRight.form.divDataBottom.form.objGridSub1;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

           this.gfnGridInit(this.dxGridSub1, this.dsListSub1, "DW", "DWD_TUJAADJUST_GRID");

           this.dxGridSub1.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

           this.dxGridSub1.addEventHandler("onselectchanged", this.fnGridSub1_RowCellChanged, this);


        	// 셀 수정가능 여부
           //this.dxGrid.EnterCell = "fnGrid_EnterCell";

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelectSub1 = new Dataset();
        	this.dsSelectSub1.addColumn("YM_WORK", "string");
        	this.dsSelectSub1.addColumn("CD_SITE", "string");
        	this.dsSelectSub1.addColumn("GUBUN", "string");
        	this.dsSelectSub1.addColumn("NO_SERIAL", "bigdecimal");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("YM_WORK", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("CD_COST", "string");
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

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_YNTYPE", "string");
        	this.dsCombo.addColumn("CD_DSTYPE", "string");
        	this.dsCombo.addColumn("CD_CODE", "string");
        	this.dsCombo.addColumn("YN_USE", "string");
        	this.dsCombo.addColumn("YN_ALL", "string");


        }


        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *   조회 버튼
          */
        this.fnSelect = function() {

           // 디테일 파마리터 데이터셋 셋팅
           this.dsSelectSub1.clearData();
           var nrow =  this.dsSelectSub1.addRow();

        	this.dsSelectSub1.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        	this.dsSelectSub1.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelectSub1.setColumn(nrow, "GUBUN", "");
        	this.dsSelectSub1.setColumn(nrow, "NO_SERIAL", this.dsSearch.getColumn(0, "NO_SERIAL"));


           var strSvcId    = "detail";
           var strSvcType  = "grid";
           var inProc      = "_dsProc";
           var inData      = "d_select=dsSelectSub1";
           var outData     = "dsListSub1=d_select0";
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
         *   입력 버튼
         */
        this.fnAdd = function() {
           //this.gfnGridAdd(this.dxGrid);
        }

        /*
         *   삭제 버튼
         */
        this.fnDel = function() {
           //this.gfnGridDel(this.dxGrid);
        }


        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크``
        	if (!this.gfnGridValidate(this.dxGridSub1)) return;

        	this.dxGridSub1.updateToDataset();

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsListSub1.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub1, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", "U");
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "CD_COST", this.dsListSub1.getColumn(i, "CD_COST"));
        				this.dsSave.setColumn(nrow, "DT_DATE", this.dsListSub1.getColumn(i, "DT_DATE"));
        				this.dsSave.setColumn(nrow, "RM_DESC", this.dsListSub1.getColumn(i, "RM_DESC"));
        				this.dsSave.setColumn(nrow, "QN_QUANTITY", this.dsListSub1.getColumn(i, "QN_QUANTITY"));
        				this.dsSave.setColumn(nrow, "AM_KUMYAEK", this.dsListSub1.getColumn(i, "AM_KUMYAEK"));
        				this.dsSave.setColumn(nrow, "TY_SYSTEM", this.dsListSub1.getColumn(i, "TY_SYSTEM"));
        				this.dsSave.setColumn(nrow, "CD_SLIP", this.dsListSub1.getColumn(i, "CD_SLIP"));
        				this.dsSave.setColumn(nrow, "CD_BIMOK", this.dsListSub1.getColumn(i, "CD_BIMOK"));
        				this.dsSave.setColumn(nrow, "CD_ACCOUNT", this.dsListSub1.getColumn(i, "CD_ACCOUNT"));
        				this.dsSave.setColumn(nrow, "NO_SERIAL", this.dsListSub1.getColumn(i, "NO_SERIAL"));
        				this.dsSave.setColumn(nrow, "CD_SYSPRIMARY", this.dsListSub1.getColumn(i, "CD_SYSPRIMARY"));
        				this.dsSave.setColumn(nrow, "AM_TOTAL", this.dsListSub1.getColumn(i, "AM_TOTAL"));
        				this.dsSave.setColumn(nrow, "CD_HADO", this.dsListSub1.getColumn(i, "CD_HADO"));
        				this.dsSave.setColumn(nrow, "NO_CHA", this.dsListSub1.getColumn(i, "NO_CHA"));
        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "d_save=dsSave";
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
         *   엑셀 버튼
         */
        this.fnExcel = function() {
           this.gfnExcelExport(this.dxGridSub1);
        }

        /*
         *   출력 버튼
         */
        this.fnPrint = function() {
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;

        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
        	}else if(this.gfnIsNull(this.dsSearch.getColumn(0,"YM_WORK"))){
        		validate = false;

        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctclYM_WORK.form.TextBox.setFocus();
        		}
        		this.gfnAlert("기성년월을 입력하세요.", "fnVaidateCallback");
        	}

        	return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "detail") {
        		this.gfnGridAfterSelect(this.dxGridSub1);


        	}else if(svcID == "save") {
        		if (errorCode == 0) {
        			//this.FormBtns.Select.click();
        			this.fnSelect();

        		}
        	}

        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/


        /************************************************************************
         * 그리드 이벤트
         ***********************************************************************

        // cell 클릭했을때 이벤트(해당 cell에 대한 이벤트를 건다)
        this.fnGrid_EnterCell = function(obj:nexacro.Grid, row, cell) {
        	// 수정가능 true, false 처리하려는 컬럼에 대해서만 return 처리할것.
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGridSub1, cell);	// 클릭한 cell의 컬럼명

        	// 클릭했을때 클릭한 cell을 수정 가능 or 불가능 상태로 만든다.
        	// YN_NOCONT 값이 Y일때만 수정가능상태
        	if(this.dsListSub1.getColumn(row, "YN_NOCONT") == "N") {
        		return false;
        	}else{
        		// YN_PSBLE 값이 Y일때만 수정가능 상태로 만든다
        	if(this.dsListSub1.getColumn(row, "YN_PSBLE") == "N") {
        				return false;
        			}else{
        				return true;
        			}
        		}
        }
        */
          this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
         	if (id == "DWX_CFHADO_ADJUST") {
         		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "CD_COST", this.dsListSub1.getColumn(this.dsListSub1.rowposition, "CD_COST"));
        		dsUserParam.setColumn(nrow, "TY_SYSTEM", this.dsListSub1.getColumn(this.dsListSub1.rowposition, "TY_SYSTEM"));

        	}else if (id == "DWX_CFCOST_ADJUST") {
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "NO_HADOCONT", this.dsListSub1.getColumn(this.dsListSub1.rowposition, "CD_HADO"));
         	}
        	return true;
        }


        this.fnGridSub1_RowCellChanged = function(obj,e)
        {
        	var rows = obj.getSelectedDatasetRows();
        	var sum = 0;
        	for(var i = 0; i < rows.length; i++) {
        		var am = this.dsListSub1.getColumn(rows[i], "AM_KUMYAEK");
        		if(!this.gfnIsNull(am)) {
        			sum += am;
        		}
        	}

        	var colDS_HADOCONT = this.dxGridSub1.getBindCellIndex("body", "DS_HADOCONT");
        	this.dxGridSub1.setCellProperty("summ", colDS_HADOCONT, "text", "선택합계=" + this.gfnAppendComma(sum));
        }


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/


        // 작업구분 콤보 셋팅
        this.fnSetCombo = function() {

        	this.dsCombo.clearData();

        	var nrow = this.dsCombo.addRow();
        	this.dsCombo.setColumn(nrow, "CD_SYSTEM", "DW");
        	this.dsCombo.setColumn(nrow, "CD_YNTYPE", "90");
        	this.dsCombo.setColumn(nrow, "CD_DSTYPE", "91");
        	this.dsCombo.setColumn(nrow, "CD_CODE", "YN08");
        	this.dsCombo.setColumn(nrow, "YN_USE", "Y");
        	this.dsCombo.setColumn(nrow, "YN_ALL", "Y");


        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsYN_GUBUN=combo0";
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
        		this.divSearch.form.cboYN_GUBUN.set_index(0);

        	}
        };

        //투입분할 조정
        this.fnTujaAdj = function(obj,e) {
        	//if(!this.gfnGridIsRow(this.dxGridSub1)){return false;}
        	if(this.dsListSub1.getColumn(this.dsListSub1.rowposition,"YN_PSBLE") == "Y"){
        		var param = {};

        		param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        		param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        		param.YM_WORK = this.dsSearch.getColumn(0, "YM_WORK").substr(0,6);
        		param.NO_SERIAL = this.dsListSub1.getColumn(this.dsListSub1.rowposition, "NO_SERIAL");

        		this.gfnFormOpen("DWD", "DWD_TUJAADJUSTDIVDLG", "fnTujaAdj_callback", param);
        	}else{
        		this.gfnAlert("선택하신 내역은 투자조정/불명자료 처리 불가능한 내역입니다.");
        	}
        }

        this.fnTujaAdj_callback = function(strId, val) {
        	if(val == true) {
        		this.fnSelect();
        	}
        }



        //예산현황
        this.fnEbgtCost = function(obj,e) {

        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.CD_COST = this.dsListSub1.getColumn(this.dsListSub1.rowposition, "CD_COST");
        	param.CD_DKCOST = this.dsListSub1.getColumn(this.dsListSub1.rowposition, "CD_DKCOST");
        	param.DS_COST = this.dsListSub1.getColumn(this.dsListSub1.rowposition, "DS_COST");//
        	param.SZ_SIZE = this.dsListSub1.getColumn(this.dsListSub1.rowposition, "SZ_SIZE");
        	param.DS_UNIT = this.dsListSub1.getColumn(this.dsListSub1.rowposition, "DS_UNIT");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWX_COSTTUJA", "", param);
        }


        //전표조회
        this.fnSlipSearch = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGridSub1)){return false;}

        	var param = {};
        	param.NO_SLIP = this.dsListSub1.getColumn(this.dsListSub1.rowposition, "NO_SLIP");

        	//화면ID 추후개발예정
        	this.gfnAlert("추후 진행예정입니다.");

        }

        this.fnSearchInit = function(obj,e) {
           if(e == null || (e.pretext != e.posttext)) {
              this.gfnSetFormStatus(this);
        	  this.gfnGridClear(this.dxGridSub1);
           }
        }


        this.dsSearch_onvaluechanged = function(obj,e)
        {
           if(e.oldvalue != e.newvalue){
        	  this.gfnGridClear(this.dxGridSub1);
           }
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DWD_TUJAADJUST_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DQZ_TUJAADJUST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
