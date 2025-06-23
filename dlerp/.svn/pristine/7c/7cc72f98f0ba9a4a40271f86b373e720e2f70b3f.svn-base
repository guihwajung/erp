(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DWA_SITEBUDGET");
            this.set_titletext("실행내역업로드");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_2\" type=\"STRING\" size=\"256\"/><Column id=\"CD_3\" type=\"STRING\" size=\"256\"/><Column id=\"CD_4\" type=\"STRING\" size=\"256\"/><Column id=\"CD_5\" type=\"STRING\" size=\"256\"/><Column id=\"CD_6\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ITEM\" type=\"STRING\" size=\"256\"/><Column id=\"SZ_ITEM\" type=\"STRING\" size=\"256\"/><Column id=\"UT_ITEM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BIMOK\" type=\"STRING\" size=\"256\"/><Column id=\"QN_EX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UP_EX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_EX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"QN_SIL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UP_SIL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SIL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CD_CBS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NET\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACT\" type=\"STRING\" size=\"256\"/><Column id=\"RM_BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"ERR_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"nx_flag\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWAPR_EXCELSAP_SELECT</Col></Row><Row><Col id=\"SP\">DWAPR_EXCELSAP_SAVE</Col><Col id=\"TARGET\">save</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DWAPR_EXCELSAP_EXECUTE</Col></Row><Row><Col id=\"TARGET\">exec1</Col><Col id=\"SP\">DWA_EXCELSAP_ERR</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("실행번호");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_SILHENG","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DWX_CFNO_SILHENG_01");
            obj.getSetter("CDTextWidth").set("80");
            obj.getSetter("readonly").set("true");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM","ccfNO_SILHENG:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SYSTEM","staCD_SYSTEM:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_SYSTEM.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DWA_EXCELSAP.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.DWA_SITEBUDGET_onload = function(obj,e)
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

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE)) {

        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);	// 현장코드
        		this.ccfCD_SYSTEM.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);	// 현장코드명
        		this.ccfCD_SYSTEM.form.fnFitToContents();

        		this.fnExcelLoad();
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
        	this.btn1 = this.gfnFormButtonAdd("btn1", "fnbtn1");
        	this.btn2 = this.gfnFormButtonAdd("btn2", "fnbtn2");
        	this.btn3 = this.gfnFormButtonAdd("btn3", "fnbtn3");
        	this.btn4 = this.gfnFormButtonAdd("btn4", "fnbtn4");
        	this.btn5 = this.gfnFormButtonAdd("btn5", "fnbtn5");
        	this.btn6 = this.gfnFormButtonAdd("btnErrorList", "fnErrorList");
        	this.btn7 = this.gfnFormButtonAdd("btnExcel", "fnExcelLoad");
        	this.btn8 = this.gfnFormButtonAdd("btnExcelUp", "fnExcelUp");
        	this.btn9 = this.gfnFormButtonAdd("btnCostTuja", "fnCostTuja");

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SYSTEM = this.divSearch.form.ccfCD_SYSTEM;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_SYSTEM.CodeFindName = "DWX_CFSITE"
        	//this.ccfNO_SILHENG.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWA_EXCELSAP");
        }
        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("NO_SEQ", "int");
        	this.dsSave.addColumn("CD_1", "string");
        	this.dsSave.addColumn("CD_2", "string");
        	this.dsSave.addColumn("CD_3", "string");
        	this.dsSave.addColumn("CD_4", "string");
        	this.dsSave.addColumn("CD_5", "string");
        	this.dsSave.addColumn("CD_6", "string");
        	this.dsSave.addColumn("DS_ITEM", "string");
        	this.dsSave.addColumn("SZ_ITEM", "string");
        	this.dsSave.addColumn("UT_ITEM", "string");
        	this.dsSave.addColumn("CD_BIMOK", "string");
        	this.dsSave.addColumn("QN_EX", "bigdecimal");
        	this.dsSave.addColumn("UP_EX", "bigdecimal");
        	this.dsSave.addColumn("AM_EX", "bigdecimal");
        	this.dsSave.addColumn("QN_SIL", "bigdecimal");
        	this.dsSave.addColumn("UP_SIL", "bigdecimal");
        	this.dsSave.addColumn("AM_SIL", "bigdecimal");
        	this.dsSave.addColumn("CD_CBS", "string");
        	this.dsSave.addColumn("CD_NET", "string");
        	this.dsSave.addColumn("CD_ACT", "string");
        	this.dsSave.addColumn("RM_BIGO", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("CD_SITE", "string");
        	this.dsExec.addColumn("TY_WORK", "string");
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

        	this.dsSelect.setColumn(0, "CD_SITE", this.ccfCD_SYSTEM.form.CDTextBox.text);
        	//this.dsSelect.setColumn(0, "NO_SILHENG", this.ccfNO_SILHENG.form.CDTextBox.value);

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
         *	입력 버튼
         */
        this.fnAdd = function() {
        	this.gfnGridAdd(this.dxGrid);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		if(flag == "I" || flag == "U" || flag == "D"){

        			var nrow = this.dsSave.addRow();

        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "CD_SITE", this.ccfCD_SYSTEM.form.CDTextBox.text);
        				this.dsSave.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsSave.setColumn(nrow, "CD_1", this.dsList.getColumn(i, "CD_1"));
        				this.dsSave.setColumn(nrow, "CD_2", this.dsList.getColumn(i, "CD_2"));
        				this.dsSave.setColumn(nrow, "CD_3", this.dsList.getColumn(i, "CD_3"));
        				this.dsSave.setColumn(nrow, "CD_4", this.dsList.getColumn(i, "CD_4"));
        				this.dsSave.setColumn(nrow, "CD_5", this.dsList.getColumn(i, "CD_5"));
        				this.dsSave.setColumn(nrow, "CD_6", this.dsList.getColumn(i, "CD_6"));
        				this.dsSave.setColumn(nrow, "DS_ITEM", this.dsList.getColumn(i, "DS_ITEM"));
        				this.dsSave.setColumn(nrow, "SZ_ITEM", this.dsList.getColumn(i, "SZ_ITEM"));
        				this.dsSave.setColumn(nrow, "UT_ITEM", this.dsList.getColumn(i, "UT_ITEM"));
        				this.dsSave.setColumn(nrow, "CD_BIMOK", this.dsList.getColumn(i, "CD_BIMOK"));
        				this.dsSave.setColumn(nrow, "QN_EX", this.dsList.getColumn(i, "QN_EX"));
        				this.dsSave.setColumn(nrow, "UP_EX", this.dsList.getColumn(i, "UP_EX"));
        				this.dsSave.setColumn(nrow, "AM_EX", this.dsList.getColumn(i, "AM_EX"));
        				this.dsSave.setColumn(nrow, "QN_SIL", this.dsList.getColumn(i, "QN_SIL"));
        				this.dsSave.setColumn(nrow, "UP_SIL", this.dsList.getColumn(i, "UP_SIL"));
        				this.dsSave.setColumn(nrow, "AM_SIL", this.dsList.getColumn(i, "AM_SIL"));
        				this.dsSave.setColumn(nrow, "CD_CBS", this.dsList.getColumn(i, "CD_CBS"));
        				this.dsSave.setColumn(nrow, "CD_NET", this.dsList.getColumn(i, "CD_NET"));
        				this.dsSave.setColumn(nrow, "CD_ACT", this.dsList.getColumn(i, "CD_ACT"));
        				this.dsSave.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
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
        	if (this.gfnIsNull(this.ccfCD_SYSTEM.form.CDTextBox.text)) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SYSTEM.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
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
           else if(svcID == "save") {
              if (errorCode == 0) {
                 this.FormBtns.Select.click();
              } else {
                 this.gfnAlert(errorMsg);
              }
           }
           else if(svcID == "exec") {
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

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        /*
        this.dsList_oncolumnchanged = function(obj:nexacro.NormalDataset,e:nexacro.DSColChangeEventInfo)
        {
        // 	if(e.col == 9 || e.col == 21){
        // 		this.dsList.setColumn(e.row, "AM_DESIGN", Math.floor(this.dsList.getColumn(e.row, "QN_DESIGN") * this.dsList.getColumn(e.row, "UP_DESIGN")));
        // 	}else if(e.col == 0 || e.col == 29){
        // 		this.dsList.setColumn(e.row, "AM_TT_DOKUB", Math.floor(this.dsList.getColumn(e.row, "QN_TT_DOKUB") * this.dsList.getColumn(e.row, "UP_TT_DOKUB")));
        // 	}else if(e.col == 34 || e.col == 19){
        // 		this.dsList.setColumn(e.row, "AM_EXSILHENG", Math.floor(this.dsList.getColumn(e.row, "QN_EXSILHENG") * this.dsList.getColumn(e.row, "UP_EXSILHENG")));
        // 	}else if(e.col == 13 || e.col == 15){
        // 		this.dsList.setColumn(e.row, "AM_TT_SILHENG", Math.floor(this.dsList.getColumn(e.row, "QN_TT_SILHENG") * this.dsList.getColumn(e.row, "UP_TT_SILHENG")));
        // 	}
        	// 이벤트 오류로 인한 col이 아닌 columnid로 체크로직 변경.
        	if(e.columnid == "QN_DESIGN" || e.columnid == "UP_DESIGN"){
        		this.dsList.setColumn(e.row, "AM_DESIGN", Math.floor(this.dsList.getColumn(e.row, "QN_DESIGN") * this.dsList.getColumn(e.row, "UP_DESIGN")));
        	}else if(e.columnid == "QN_TT_DOKUB" || e.columnid == "UP_TT_DOKUB"){
        		this.dsList.setColumn(e.row, "AM_TT_DOKUB", Math.floor(this.dsList.getColumn(e.row, "QN_TT_DOKUB") * this.dsList.getColumn(e.row, "UP_TT_DOKUB")));
        	}else if(e.columnid == "QN_EXSILHENG" || e.columnid == "UP_EXSILHENG"){
        		this.dsList.setColumn(e.row, "AM_EXSILHENG", Math.floor(this.dsList.getColumn(e.row, "QN_EXSILHENG") * this.dsList.getColumn(e.row, "UP_EXSILHENG")));
        	}else if(e.columnid == "QN_TT_SILHENG" || e.columnid == "UP_TT_SILHENG"){
        		this.dsList.setColumn(e.row, "AM_TT_SILHENG", Math.floor(this.dsList.getColumn(e.row, "QN_TT_SILHENG") * this.dsList.getColumn(e.row, "UP_TT_SILHENG")));
        	}
        };
        */

        this.fnExec = function(ty_work) {

           this.dsExec.clearData();

           this.dsExec.addRow();

           this.dsExec.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
           this.dsExec.setColumn(0, "TY_WORK", ty_work);

           if (this.dsExec.rowcount == 0) return;

           var strSvcId    = "exec";
           var strSvcType  = "save";
           var inProc      = "_dsProc";
           var inData      = "exec=dsExec";
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

        this.fnbtn1 = function(obj,e) {

        	this.fnExec('1');
        }

        this.fnbtn2 = function(obj,e) {

        	this.fnExec('2');
        }

        this.fnbtn3 = function(obj,e) {

        	this.fnExec('3');
        }

        this.fnbtn4 = function(obj,e) {

        	this.fnExec('4');
        }

        this.fnbtn5 = function(obj,e) {

        	this.fnExec('5');
        }

        this.fnErrorList = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	var nRow = this.dsList.rowposition;

        	param.CD_SITE = this.dsSearch.getColumn(0,"CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SYSTEM.form.DSTextBox.value;

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWA_EXCELSAP_ERR", "", param);

        }

        this.fnExcelLoad = function(obj,e) {

           this.gfnExcelImport("dsList","","A3","fnExcelImportCallback","import",this);
        };


        this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet) {
           // 다중 시트 처리시 양식의 해당 시트여부를 체크하고자 할땐 dsSheet 시트명 체크
        //    if (dsSheet.rowcount > 1) {
        //       trace(dsSheet.getColumn(1, "sheetname"));
        //    }

           // 엑셀 양식과 그리드 컬럼이 그대로 일치 하는경우 아래와 같이 처리.
           // 아닌경우는 이부분 주석처리
           for (var i=0; i< this.dsList.getColCount(); i++)
           {
              sColumnId = "Column"+i;
              var sColumnNm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, i);
              if (sColumnNm != "" && sColumnId != sColumnNm)
              {
                 dsOut.updateColID(sColumnId, sColumnNm);
              }
           }

          //for (var i=0; i<dsOut.rowcount; i++){
          //    if(this.gfnIsNull(dsOut.getColumn(i, "CD_1"))) {
          //      return;
          //      }
          //   }

           this.dsList.set_enableevent(false);

           for (var i=0; i<dsOut.rowcount; i++) {
              var cd_1 = dsOut.getColumn(i, "CD_1") == null ? "" : dsOut.getColumn(i, "CD_1");
              var cd_2 = dsOut.getColumn(i, "CD_2") == null ? "" : dsOut.getColumn(i, "CD_2");
              var cd_3 = dsOut.getColumn(i, "CD_3") == null ? "" : dsOut.getColumn(i, "CD_3");
              var cd_4 = dsOut.getColumn(i, "CD_4") == null ? "" : dsOut.getColumn(i, "CD_4");
              var cd_5 = dsOut.getColumn(i, "CD_5") == null ? "" : dsOut.getColumn(i, "CD_5");
              var cd_6 = dsOut.getColumn(i, "CD_6") == null ? "" : dsOut.getColumn(i, "CD_6");

        //       var srow = this.dsList.findRowExpr("CD_1=='" +cd_1 + "'&&CD_2=='" +cd_2+"'&&CD_3=='" +cd_3+"'&&CD_4=='" +cd_4+"'&&CD_5=='" +cd_5+"'&&CD_6=='" +cd_6+"'");
        //
        //       if(srow > -1){
        //          this.dsList.setColumn(srow, this.ucFlag, "U");
        //          this.dsList.copyRow(srow, dsOut, i);
        //       }else{
                 var nrow = this.dsList.addRow();
                 this.dsList.setColumn(nrow, this.ucFlag, "I");

                 // 양식이 일치하는 경우 copyRow
                 this.dsList.copyRow(nrow, dsOut, i);
              //}


              // 양식과 일치하지 않는 경우 아래와 같이 컬럼별로 처리.
        //       this.dsListSub.setColumn(nrow, "CD_SYSTEM", dsOut.getColumn(i, "Column1"));
        //       this.dsListSub.setColumn(nrow, "CD_TYPE", dsOut.getColumn(i, "Column2"));

           }
           this.dsList.set_enableevent(true);

           this.gfnSetFormStatus(this, "I");
        };
        //표준양식업로드
        this.fnExcelUp = function(obj,e) {
        	if (!this.fnSelectValidate()) return false;
        	var param = {};
        	param.CD_SITE =this.divSearch.form.ccfCD_SYSTEM.form.CDTextBox.text;
        	param.DS_SITE =  this.divSearch.form.ccfCD_SYSTEM.form.DSTextBox.text;
        	param.NO_SILHENG = "0001";
        	param.DS_SILHENG = "SAP내역 등록";

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWA_FROMEXCEL", "", param);
        }

        //예산현황
        this.fnCostTuja = function(obj, e){

        	if(!this.gfnGridIsRow(this.dxGrid)){return false;}

        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE =  this.divSearch.form.ccfCD_SYSTEM.form.DSTextBox.text;
        	param.CD_COST = this.dsList.getColumn(this.dsList.rowposition, "CD_COST");
        	param.CD_DKCOST = this.dsList.getColumn(this.dsList.rowposition, "CD_1");
        	param.DS_COST = this.dsList.getColumn(this.dsList.rowposition, "DS_ITEM");
        	param.SZ_SIZE = this.dsList.getColumn(this.dsList.rowposition, "SZ_ITEM");
        	param.DS_UNIT = this.dsList.getColumn(this.dsList.rowposition, "UT_ITEM");
        	param.NO_SEQ = this.dsList.getColumn(this.dsList.rowposition, "NO_SEQ");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWX_COSTTUJA", "", param);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DWA_SITEBUDGET_onload,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWA_EXCELSAP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
