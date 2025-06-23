(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DWB_HDGISUNGAPPV");
            this.set_titletext("기성승인작업(본사)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWBPR_HDGISUNGAPPV_SELECT</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DWBPR_HDGISUNGMONTHDTL_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DWBPR_HDGISUNGMONTH_MAX_SELECT</Col></Row><Row><Col id=\"TARGET\">appr</Col><Col id=\"SP\">DWBPR_HDGISUNGAPPV_CONFIRM_OK</Col></Row><Row><Col id=\"TARGET\">cancel</Col><Col id=\"SP\">DWBPR_HDGISUNGAPPV_CONFIRM_CANCEL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DGR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"YM_WORK\"/><Col id=\"NO_DGR\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNO_DGR", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_DGR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DGR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSubCal", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_HDGISUNG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboNO_DGR","ccfCD_SITE:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsNO_DGR");
            obj.set_codecolumn("NO_DGR");
            obj.set_datacolumn("DS_DGR");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccboNO_DGR:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Div("divDataLeft","0","0",null,null,"8","3",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","-20","100.00%","22",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:5",null,null,"10","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divData.form.divDataLeft.addChild(obj.name, obj);
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

            obj = new BindItem("item2","divSearch.form.ccboNO_DGR","value","dsSearch","NO_DGR");
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
        this.registerScript("DWB_HDGISUNGAPPV.xfdl", function() {
        this.DWB_HDGISUNGAPPV_onload = function(obj,e)
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

           var today = this.gfnGetDate();
           this.dsSearch.setColumn(0, "YM_WORK", today.substr(0,6));

        	// 기성차수 조회조건 보이기/숨기기
        	this.YN_DGR = this.gfnGetConfig("DW" , "YN_DGR");
        	if(this.YN_DGR != "Y")
        	{
        		this.divSearch.form.ccboNO_DGR.set_width(0);
        		this.divSearch.form.ccboNO_DGR.set_readonly(true);
        		this.divSearch.form.resetScroll();
        	}
        	else if(this.YN_DGR == "Y")
        	{
        		this.divSearch.form.ccboNO_DGR.set_width(100);
        		this.divSearch.form.ccboNO_DGR.set_readonly(false);
        		this.divSearch.form.resetScroll();
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
           // 서브 버튼 사용
           //this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter); // divSplitter sync
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnAppr = this.gfnFormButtonAdd("btnAppr", "fnAppr");
        	this.btnCancel = this.gfnFormButtonAdd("btnCancel", "fnCancel");
        	this.btnDetail = this.gfnFormButtonAdd("btnDetail", "fnDetail");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
           this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
           this.ctclYM_WORK = this.divSearch.form.ctclYM_WORK;

           this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
           /*this.dxGridSub = this.divData.form.divDataRight.form.objGridSub;*/
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

           this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWB_HDGISUNGAPPV_M");

           this.dxGrid.set_selecttype("cell");
           this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
           this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);

           /*this.gfnGridInit(this.dxGridSub, this.dsListSub, "DW", "DWB_HDGISUNGAPPV_D");*/
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
            this.dsSelect = new Dataset();
            this.dsSelect.addColumn("CD_SITE", "string");
            this.dsSelect.addColumn("YM_WORK", "string");
            this.dsSelect.addColumn("NO_DGR", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("DS_CONTMETHOD", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_SITE", "string");
        	this.dsSelectSub.addColumn("YM_WORK", "string");
        	this.dsSelectSub.addColumn("NO_HADOCONT", "string");
        	this.dsSelectSub.addColumn("NO_DGR", "string");
        	this.dsSelectSub.addColumn("CD_VENDOR", "string");
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

        	this.dsSelect.setColumn(0, "CD_SITE", this.divSearch.form.ccfCD_SITE.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "YM_WORK", this.divSearch.form.ctclYM_WORK.form.TextBox.value);
         	this.dsSelect.setColumn(0, "NO_DGR", this.dsSearch.getColumn(0, "NO_DGR"));
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "DS_CONTMETHOD", this.FormInfo.DS_PARAM);

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
         *   저장 버튼

        this.fnSave = function() {

        }
         */



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
         * 서브 버튼 이벤트
         ************************************************************************/
         // 디테일 그리드 조회
        this.fnSelectSub = function() {
        //     if (this.dsSearch.getColumn(0,"CD_ROLE") == "") {
        // 		//this.gfnAlert("Role 코드를 입력하세요.");
        // 	return;
        // 	}

        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return false;

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	// 디테일 데이터셋 데이터 삭제
        	this.dsListSub.clearData();

        	/*
        	var cd_role = this.dsList.getColumn(this.dsList.rowposition, "CD_ROLE");
        	if (this.gfnIsNull(cd_role)) {
        		return false;
        	}
        	*/

        	// 디테일 파라미터 데이터셋 셋팅
        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();
        	this.dsSelectSub.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
            this.dsSelectSub.setColumn(0, "YM_WORK", this.divSearch.form.ctclYM_WORK.form.TextBox.value);
            this.dsSelectSub.setColumn(0, "NO_HADOCONT", this.dsList.getColumn(this.dsList.rowposition, "NO_HADOCONT"));
            this.dsSelectSub.setColumn(0, "NO_DGR", this.dsSearch.getColumn(0, "NO_DGR"));
        	this.dsSelectSub.setColumn(0, "CD_VENDOR", this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR"));

        	var strSvcId    = "detail";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "d_select=dsSelectSub";
        	var outData     = "dsListSub=d_select0 dsListSubCal=d_select1";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }


        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {
        	var validate = true;

        // 	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        // 		validate = false;
        //
        // 		this.fnVaidateCallback = function() {
        // 			this.ccfCD_SITE.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
        // 	}


        	if(this.gfnIsNull(this.dsSearch.getColumn(0,"YM_WORK"))){
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
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		}
        	else if(svcID == "detail") {
        		if (errorCode == 0) {
        			this.gfnGridAfterSelect(this.dxGridSub);
        		} else {
        			//this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "combo")
        	{
        		this.divSearch.form.ccboNO_DGR.set_index(0);
        	}
        	else if(svcID == "appr")
        	{
        		if (errorCode == 0) {
        			this.fnafter = function(){
        				this.FormBtns.Select.click();
        			};
        			this.gfnAlert("기성승인이 정상 처리되었습니다.", "fnafter");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "cancel")
        	{
        		if (errorCode == 0) {
        			this.fnafter = function(){
        				this.FormBtns.Select.click();
        			};
        			this.gfnAlert("승인취소가 정상 처리되었습니다.", "fnafter");
        		} else {
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

        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
              || (obj.oldrow == -1 && e.oldrow != e.row)) {
              this.FormBtns.SubSelect.click();
              obj.oldrow = -1;
           }
        };

        this.dsList_canrowposchange = function(obj,e) {
           var can_rowchange = true;
           for (var i = 0; i < this.dsListSub.rowcount; i++) {
              var flag = this.gfnGetFlag(this.dsListSub, i);
              if (flag == "I" || flag == "U" || flag == "D") {
                 can_rowchange = false;
              }
           }
           if(!can_rowchange) {
              this._row = e.newrow;
              this.gfnConfirm("변경된 데이터가 있습니다.\r\n계속 진행하시겠습니까?", "dsList_canrowposchange_callback");
           }
           return can_rowchange;
        }



        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSearchInit = function(obj,e) {
           if(e == null || (e.pretext != e.posttext)) {
              this.gfnSetFormStatus(this);
              this.gfnGridClear(this.dxGrid);
              /*this.gfnGridClear(this.dxGridSub);*/
           }
        }

        this.divData_ondragmove = function(obj,e)
        {
           if(e.userdata == "splitter") {
              this.divData.form.divSplitter.set_left(e.clientx);
              this.divData.form.resetScroll();
           }
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
           e.set_userdata("splitter");
           return true;
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
           if(e.oldvalue != e.newvalue){
        	  this.gfnGridClear(this.dxGrid);
        	  /*this.gfnGridClear(this.dxGridSub);*/

        	  if(e.columnid == "CD_SITE" || e.columnid == "YM_WORK"){
        	  this.fnSetCombo();
        	  }
           }
        }

        this.fnSetCombo = function()
        {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SITE", "string");
        	this.dsCombo.addColumn("YM_WORK", "string");
        	this.dsCombo.addColumn("DS_CONTMETHOD", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsCombo.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        	this.dsCombo.setColumn(0, "DS_CONTMETHOD", this.FormInfo.DS_PARAM);

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsNO_DGR=combo0";
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

        // 아래부터는 확장버튼 이벤트
        this.fnAppr = function(obj,e) {
        	if(this.dsList.findRow("CHK", "1") < 0){
        		this.gfnAlert("기성승인 하실 정보를 선택하시기 바랍니다.");
        		return false;
        	}

        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.divSearch.form.ccfCD_SITE.form.DSTextBox.text
        			+ "\n기성년월 : [" + this.dsSearch.getColumn(0, "YM_WORK").substr(0,6) + "]"
        			+ "\n기성승인상태가 [미승인]인 건만 [승인]처리 됩니다."
        			+ "\n\n[기성승인] 하시겠습니까?";

        	this.gfnConfirm(msg, "fnExecute", "CONFIRM");



        	/*
        	this.dsAppr = new Dataset();
        	this.dsAppr.addColumn("CD_SITE", "string");
        	this.dsAppr.addColumn("NO_HADOCONT", "string");
        	this.dsAppr.addColumn("YM_WORK", "string");
        	this.dsAppr.addColumn("ID_UPDATE", "string");
        	this.dsAppr.addColumn("NO_DGR", "string");
        	this.dsAppr.addColumn("CD_VENDOR", "string");


        	var row = -1;

        	while(1)
        	{
        		row = this.dsList.findRow("CHK", "1", row+1);

        		if(row < 0) break;

        		var nrow = this.dsAppr.addRow();
        		this.dsAppr.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsAppr.setColumn(nrow, "NO_HADOCONT", this.dsList.getColumn(row, "NO_HADOCONT"));
        		this.dsAppr.setColumn(nrow, "YM_WORK", this.divSearch.form.ctclYM_WORK.form.TextBox.value);
        		this.dsAppr.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        		this.dsAppr.setColumn(nrow, "NO_DGR", this.dsSearch.getColumn(0, "NO_DGR"));
        		this.dsAppr.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(row, "CD_VENDOR"));
        	};

        	if (this.dsAppr.rowcount == 0) return;

        	var strSvcId    = "appr";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "appr=dsAppr";
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
        	*/
        }

        this.fnCancel = function(obj,e) {
        	if(this.dsList.findRow("CHK", "1") < 0){
        		this.gfnAlert("승인취소 하실 정보를 선택하시기 바랍니다.");
        		return false;
        	}

        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.divSearch.form.ccfCD_SITE.form.DSTextBox.text
        			+ "\n기성년월 : [" + this.dsSearch.getColumn(0, "YM_WORK").substr(0,6) + "]"
        			+ "\n기성확정상태가 [승인]인 건만 [승인취소]처리 됩니다."
        			+ "\n\n[기성승인취소] 하시겠습니까?";

        	this.gfnConfirm(msg, "fnExecute", "CANCEL");

        	/*
        	this.dsCancel = new Dataset();
        	this.dsCancel.addColumn("CD_SITE", "string");
        	this.dsCancel.addColumn("NO_HADOCONT", "string");
        	this.dsCancel.addColumn("YM_WORK", "string");
        	this.dsCancel.addColumn("ID_UPDATE", "string");
        	this.dsCancel.addColumn("NO_DGR", "string");
        	this.dsCancel.addColumn("CD_VENDOR", "string");

        	var row = -1;

        	while(1)
        	{
        		row = this.dsList.findRow("CHK", "1", row + 1);

        		if(row < 0) break;

        		var nrow = this.dsCancel.addRow();
        		this.dsCancel.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsCancel.setColumn(nrow, "NO_HADOCONT", this.dsList.getColumn(row, "NO_HADOCONT"));
        		this.dsCancel.setColumn(nrow, "YM_WORK", this.divSearch.form.ctclYM_WORK.form.TextBox.value);
        		this.dsCancel.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        		this.dsCancel.setColumn(nrow, "NO_DGR", this.dsSearch.getColumn(0, "NO_DGR"));
        		this.dsCancel.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(row, "CD_VENDOR"));
        	};

        	if (this.dsCancel.rowcount == 0) return;

        	var strSvcId    = "cancel";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "cancel=dsCancel";
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
        	*/
        }

        this.fnExecute = function(ty_wrk ,val)
        {
        	if(val != true){
        		return;
        	}

        	if(ty_wrk == "CONFIRM"){
        		this.dsAppr = new Dataset();
        		this.dsAppr.addColumn("CD_SITE", "string");
        		this.dsAppr.addColumn("NO_HADOCONT", "string");
        		this.dsAppr.addColumn("YM_WORK", "string");
        		this.dsAppr.addColumn("ID_UPDATE", "string");
        		this.dsAppr.addColumn("NO_DGR", "string");
        		this.dsAppr.addColumn("CD_VENDOR", "string");
        		this.dsAppr.addColumn("TY_LEVEL", "string");

        		var row = -1;

        		while(1)
        		{
        			row = this.dsList.findRow("CHK", "1", row+1);

        			if(row < 0) break;

        			var nrow = this.dsAppr.addRow();
        			this.dsAppr.setColumn(nrow, "CD_SITE", this.dsList.getColumn(row, "CD_SITE"));
        			this.dsAppr.setColumn(nrow, "NO_HADOCONT", this.dsList.getColumn(row, "NO_HADOCONT"));
        			this.dsAppr.setColumn(nrow, "YM_WORK", this.divSearch.form.ctclYM_WORK.form.TextBox.value);
        			this.dsAppr.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        			this.dsAppr.setColumn(nrow, "NO_DGR", this.dsSearch.getColumn(0, "NO_DGR"));
        			this.dsAppr.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(row, "CD_VENDOR"));
        			this.dsAppr.setColumn(nrow, "TY_LEVEL", "2");
        		};

        		if (this.dsAppr.rowcount == 0) return;

        		var strSvcId    = "appr";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "appr=dsAppr";
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

        	}else if(ty_wrk == "CANCEL"){
        		this.dsCancel = new Dataset();
        		this.dsCancel.addColumn("CD_SITE", "string");
        		this.dsCancel.addColumn("NO_HADOCONT", "string");
        		this.dsCancel.addColumn("YM_WORK", "string");
        		this.dsCancel.addColumn("ID_UPDATE", "string");
        		this.dsCancel.addColumn("NO_DGR", "string");
        		this.dsCancel.addColumn("CD_VENDOR", "string");
        		this.dsCancel.addColumn("TY_LEVEL", "string");

        		var row = -1;

        		while(1)
        		{
        			row = this.dsList.findRow("CHK", "1", row + 1);

        			if(row < 0) break;

        			var nrow = this.dsCancel.addRow();
        			this.dsCancel.setColumn(nrow, "CD_SITE", this.dsList.getColumn(row, "CD_SITE"));
        			this.dsCancel.setColumn(nrow, "NO_HADOCONT", this.dsList.getColumn(row, "NO_HADOCONT"));
        			this.dsCancel.setColumn(nrow, "YM_WORK", this.divSearch.form.ctclYM_WORK.form.TextBox.value);
        			this.dsCancel.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        			this.dsCancel.setColumn(nrow, "NO_DGR", this.dsSearch.getColumn(0, "NO_DGR"));
        			this.dsCancel.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(row, "CD_VENDOR"));
        			this.dsCancel.setColumn(nrow, "TY_LEVEL", "2");
        		};

        		if (this.dsCancel.rowcount == 0) return;

        		var strSvcId    = "cancel";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "cancel=dsCancel";
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
        }

        this.fnDetail = function(obj,e) {
        	var param = {};
        	var rowposition = this.dsList.rowposition;

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.YM_WORK = this.dsSearch.getColumn(0, "YM_WORK");

        	if(rowposition > -1){
        		param.NO_HADOCONT = this.dsList.getColumn(rowposition, "NO_HADOCONT");
        		param.DS_HADOCONT = this.dsList.getColumn(rowposition, "DS_HADOCONT");

        		param.CD_VENDOR = this.dsList.getColumn(rowposition, "CD_VENDOR");
        		param.DS_VENDOR = this.dsList.getColumn(rowposition, "DS_VENDOR");


        		param.DS_STATUS1 = this.dsList.getColumn(rowposition, "DS_PERMITB2B");
        		param.DS_STATUS2 = this.dsList.getColumn(rowposition, "DS_PERMIT");
        		param.DS_STATUS3 = this.dsList.getColumn(rowposition, "DS_PERMITPM");

        	}

        	param.NO_DGR = this.dsSearch.getColumn(0, "NO_DGR");
        	param.DS_CONTMETHOD = this.FormInfo.DS_PARAM;
        	param.TY_CONTS = this.dsList.getColumn(rowposition, "TY_CONTS");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWB_HDGISUNGMONTH_DETAIL", "fnDialogCallback", param);
        }

        this.divData_divDataLeft_objGrid_oncelldblclick = function(obj,e)
        {
        	this.fnDetail();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DWB_HDGISUNGAPPV_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divDataLeft.form.objGrid.addEventHandler("oncelldblclick",this.divData_divDataLeft_objGrid_oncelldblclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWB_HDGISUNGAPPV.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
