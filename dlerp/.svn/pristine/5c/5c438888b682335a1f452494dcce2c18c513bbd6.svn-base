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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DQZPR_HDLEDGERTRANSCONT_SELECT</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DQZPR_HDLEDGERTRANS_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DQZPR_HDLEDGERTRANS_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
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

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.getSetter("FitToContents").set("true");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","36.4%","0","5","100%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DQZ_HDLEDGERTRANS.xfdl", function() {
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

        	// 화면 오픈시 조회함
        	//this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	// 서브 버튼 사용(2개 그리드 중간에 있는 파란선) 상단에 공통 셋트가 하나더 생긴다
        	//this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter); // divSplitter sync
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnHdGisungMonthDtl = this.gfnFormButtonAdd("btnHdGisungMonthDtl", "fnHdGisungMonthDtl");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
         	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;

        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataRight.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DQ", "DQZ_HDLEDGERTRANSCONT");
        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);

        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DQ", "DQZ_HDLEDGERTRANS");
        	this.dxGridSub.EnterCell = "fnGridSub_EnterCell";
        	//this.dxGridSub.BeforeUserDataSetParam = "fnGridSub_BeforeUserDataSetParam";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("TY_WRK", "string");
        	this.dsSelectSub.addColumn("CD_SITE", "string");
        	this.dsSelectSub.addColumn("NO_HADOCONT", "string");
        	this.dsSelectSub.addColumn("CD_VENDOR", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("NO_HADOCONT", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("YM_WORK", "string");
        	this.dsSave.addColumn("NO_DGR", "string");
        	this.dsSave.addColumn("GU_WORK", "string");
        	this.dsSave.addColumn("AM_GISUNG_TX", "bigdecimal");
        	this.dsSave.addColumn("AM_GISUNG_TXFR", "bigdecimal");
        	this.dsSave.addColumn("AM_GISUNG_PROV", "bigdecimal");
        	this.dsSave.addColumn("AM_GISUNG_VAT", "bigdecimal");
        	this.dsSave.addColumn("AM_GISUNG_TOT", "bigdecimal");
        	this.dsSave.addColumn("AM_PREPAY_TX", "bigdecimal");
        	this.dsSave.addColumn("AM_PREPAY_TXFR", "bigdecimal");
        	this.dsSave.addColumn("AM_PREPAY_PROV", "bigdecimal");
        	this.dsSave.addColumn("AM_PREPAY_VAT", "bigdecimal");
        	this.dsSave.addColumn("AM_PREPAY_TOT", "bigdecimal");
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnSelectValidate()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "TY_WRK", "Q");
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));

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
        	if (!this.fnSelectValidate()) return;
        	if (!this.gfnGridValidate(this.dxGridSub)) return;

        	this.dxGridSub.updateToDataset();
        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "NO_HADOCONT", this.dsList.getColumn(this.dsList.rowposition, "NO_HADOCONT"));
        				this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR"));
        				this.dsSave.setColumn(nrow, "YM_WORK", this.dsListSub.getColumn(i, "YM_WORK"));
        				this.dsSave.setColumn(nrow, "NO_DGR", this.dsListSub.getColumn(i, "NO_DGR"));
        				this.dsSave.setColumn(nrow, "AM_GISUNG_TX", this.dsListSub.getColumn(i, "AM_GISUNG_TX"));
        				this.dsSave.setColumn(nrow, "AM_GISUNG_TXFR", this.dsListSub.getColumn(i, "AM_GISUNG_TXFR"));
        				this.dsSave.setColumn(nrow, "AM_GISUNG_PROV", this.dsListSub.getColumn(i, "AM_GISUNG_PROV"));
        				this.dsSave.setColumn(nrow, "AM_GISUNG_VAT", this.dsListSub.getColumn(i, "AM_GISUNG_VAT"));
        				this.dsSave.setColumn(nrow, "AM_GISUNG_TOT", this.dsListSub.getColumn(i, "AM_GISUNG_TOT"));
        				this.dsSave.setColumn(nrow, "AM_PREPAY_TX", this.dsListSub.getColumn(i, "AM_PREPAY_TX"));
        				this.dsSave.setColumn(nrow, "AM_PREPAY_TXFR", this.dsListSub.getColumn(i, "AM_PREPAY_TXFR"));
        				this.dsSave.setColumn(nrow, "AM_PREPAY_PROV", this.dsListSub.getColumn(i, "AM_PREPAY_PROV"));
        				this.dsSave.setColumn(nrow, "AM_PREPAY_VAT", this.dsListSub.getColumn(i, "AM_PREPAY_VAT"));
        				this.dsSave.setColumn(nrow, "AM_PREPAY_TOT", this.dsListSub.getColumn(i, "AM_PREPAY_TOT"));
        				this.dsSave.setColumn(nrow, "GU_WORK", this.dsListSub.getColumn(i, "GU_WORK"));

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
         * 서브 버튼 이벤트
         ************************************************************************/
        // 디테일 그리드 조회
        this.fnSelectSub = function() {
        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return false;

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	// 디테일 파라미터 데이터셋 셋팅
        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();
        	this.dsSelectSub.setColumn(0, "TY_WRK", "Q");
        	this.dsSelectSub.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelectSub.setColumn(0, "NO_HADOCONT", this.dsList.getColumn(this.dsList.rowposition, "NO_HADOCONT"));
        	this.dsSelectSub.setColumn(0, "CD_VENDOR", this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR"));

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



        this.fnExcelSub = function() {
        	this.gfnExcelExport(this.dxGridSub);
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {
           var validate = true;

           if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
              validate = false;
              // Alert후 실행할 처리
              this.fnVaidateCallback = function() {
                 this.divSearch.form.ccfCD_SITE.form.CDTextBox.setFocus();
              }
              this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
           }

        	return validate;
        }
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
        			this.fnSelectSub();
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
        		// 마스터 그리드 클릭 이벤트(디테일 그리드 조회)
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
        			break;
        		}
        	}
        	if(!can_rowchange) {
        		this._row = e.newrow;
        		this.gfnConfirm("변경된 데이터가 있습니다.\r\n계속 진행하시겠습니까?", "dsList_canrowposchange_callback");
        	}
        	return can_rowchange;
        }

        this.dsList_canrowposchange_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsList.set_enableevent(false);
        		this.dsList.set_rowposition(this._row);
        		this.dsList.set_enableevent(true);
        	}
        }

        this.fnGridSub_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGridSub, cell);

        	if(this.dsListSub.getColumn(row, "YN_EDIT") != "Y"){
        		return false;
        	}
        	else
        	{
        		if(this.dsListSub.getColumn(row, "YN_EDIT_PREPAY") != "Y")
        		{
        			switch(colnm)
        			{
        				case "AM_PREPAY_TX" :
        				case "AM_PREPAY_TXFR" :
        				case "AM_PREPAY_PROV" :
        				case "AM_PREPAY_VAT" :
        				case "AM_PREPAY_TOT" :
        					return false;
        					break;
        			}
        		}

        		if(this.dsListSub.getColumn(row, "YN_EDIT_GISUNG") != "Y")
        		{
        			switch(colnm)
        			{
        				case "AM_GISUNG_TX" :
        				case "AM_GISUNG_TXFR" :
        				case "AM_GISUNG_PROV" :
        				case "AM_GISUNG_VAT" :
        				case "AM_GISUNG_TOT" :
        					return false;
        					break;
        			}
        		}
        	}

        	return;
         }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        	}
        };

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


        this.dsListSub_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		if(e.columnid == "AM_GISUNG_TX")
        		{
        			var AM_GISUNG_PROV = this.dsListSub.getColumn(e.row, "AM_GISUNG_PROV");
        			var AM_GISUNG_TXFR = nexacro.toNumber(AM_GISUNG_PROV) - nexacro.toNumber(e.newvalue);

        			this.dsListSub.setColumn(e.row, "AM_GISUNG_TXFR", AM_GISUNG_TXFR);
        		}
        		else if(e.columnid == "AM_GISUNG_VAT")
        		{
        			var AM_GISUNG_PROV = this.dsListSub.getColumn(e.row, "AM_GISUNG_PROV");
        			var AM_GISUNG_TOT = nexacro.toNumber(AM_GISUNG_PROV) + nexacro.toNumber(e.newvalue);

        			this.dsListSub.setColumn(e.row, "AM_GISUNG_TOT", AM_GISUNG_TOT);
        		}
        		else if(e.columnid == "AM_PREPAY_TX")
        		{
        			var AM_PREPAY_TXFR = this.dsListSub.getColumn(e.row, "AM_PREPAY_TXFR");
        			var AM_PREPAY_PROV = nexacro.toNumber(e.newvalue) + AM_PREPAY_TXFR;

        			this.dsListSub.setColumn(e.row, "AM_PREPAY_PROV", AM_PREPAY_PROV);

        			var AM_PREPAY_VAT = this.dsListSub.getColumn(e.row, "AM_PREPAY_VAT");
        			var AM_PREPAY_TOT = nexacro.toNumber(AM_PREPAY_PROV) + nexacro.toNumber(AM_PREPAY_VAT);
        			this.dsListSub.setColumn(e.row, "AM_PREPAY_TOT", AM_PREPAY_TOT);
        		}
        		else if(e.columnid == "AM_PREPAY_TXFR")
        		{
        			var AM_PREPAY_TX = this.dsListSub.getColumn(e.row, "AM_PREPAY_TX");
        			var AM_PREPAY_PROV = nexacro.toNumber(e.newvalue) + AM_PREPAY_TX;

        			this.dsListSub.setColumn(e.row, "AM_PREPAY_PROV", AM_PREPAY_PROV);

        			var AM_PREPAY_VAT = this.dsListSub.getColumn(e.row, "AM_PREPAY_VAT");
        			var AM_PREPAY_TOT = nexacro.toNumber(AM_PREPAY_PROV) + nexacro.toNumber(AM_PREPAY_VAT);
        			this.dsListSub.setColumn(e.row, "AM_PREPAY_TOT", AM_PREPAY_TOT);
        		}
        		else if(e.columnid == "AM_PREPAY_VAT")
        		{
        			var AM_PREPAY_PROV = this.dsListSub.getColumn(e.row, "AM_PREPAY_PROV");
        			var AM_PREPAY_TOT = nexacro.toNumber(AM_PREPAY_PROV) + nexacro.toNumber(e.newvalue);
        			this.dsListSub.setColumn(e.row, "AM_PREPAY_TOT", AM_PREPAY_TOT);
        		}
        	}
        };


        this.fnHdGisungMonthDtl = function(obj,e) {
        	if (!this.fnSelectValidate()) return false;
        	if (!this.gfnGridIsRow(this.dxGrid))
        	{
        		this.gfnAlert("좌측 그리드의 데이터를 선택해주세요.");
        		return false;
        	}
        	if (!this.gfnGridIsRow(this.dxGridSub))
        	{
        		this.gfnAlert("우측 그리드의 데이터를 선택해주세요.");
        		return false;
        	}

        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.NO_HADOCONT = this.dsList.getColumn(this.dsList.rowposition, "NO_HADOCONT");
        	param.DS_HADOCONT = this.dsList.getColumn(this.dsList.rowposition, "DS_HADOCONT");
        	param.CD_VENDOR = this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR");
        	param.DS_VENDOR = this.dsList.getColumn(this.dsList.rowposition, "DS_VENDOR");
        	param.DS_CONTMETHOD = this.dsList.getColumn(this.dsList.rowposition, "TY_CONTMETHOD");
        	param.YM_WORK = this.dsListSub.getColumn(this.dsListSub.rowposition, "YM_WORK");
        	param.NO_DGR = this.dsListSub.getColumn(this.dsListSub.rowposition, "NO_DGR");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWB_HDGISUNGMONTH_DETAIL", "fnHdGisungMonthDtl_callback", param);
        }

        this.fnHdGisungMonthDtl_callback = function(strID, val)
        {
        	this.FormBtns.Select.click();
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.dsListSub.addEventHandler("onvaluechanged",this.dsListSub_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DQZ_HDLEDGERTRANS.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
