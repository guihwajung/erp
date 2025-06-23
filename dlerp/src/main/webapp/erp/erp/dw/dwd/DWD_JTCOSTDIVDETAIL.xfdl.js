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
            this.set_titletext("원가안분조정내역");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWDPR_JTCOSTDIVDETAIL_MASTER_SELECT</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DWDPR_JTCOSTDIVDETAIL_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWDPR_JTCOSTDIVDETAIL_SAVE</Col></Row><Row><Col id=\"TARGET\">execute</Col><Col id=\"SP\">DWDPR_JTCOSTDIV_EXECUTE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
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

            obj = new Div("divSplitter","0","40%","100%","5",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter:5",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","10","4","520","20",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("1");
            obj.set_text("※ 비주간사 안분금액을 수정하여 실안분금액을 조정하십시오.");
            obj.set_textDecoration("none");
            obj.set_color("#ef0000");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","sta00:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
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
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DWD_JTCOSTDIVDETAIL.xfdl", function() {
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
        		this.dsSearch.setColumn(0, "YM_WORK", (this.getOwnerFrame().YM_WORK).substr(0,6));

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
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnJtJibun = this.gfnFormButtonAdd("btnJtJibun", "fnJtJibun");
        	this.btnJtSlip = this.gfnFormButtonAdd("btnJtSlip", "fnJtSlip");
        	this.btnJtCrt = this.gfnFormButtonAdd("btnJtCrt", "fnJtCrt");
        	this.btnJtDel = this.gfnFormButtonAdd("btnJtDel", "fnJtDel");
        	this.btnJtMagam = this.gfnFormButtonAdd("btnJtMagam", "fnJtMagam");
        	this.btnJtMagamCancel = this.gfnFormButtonAdd("btnJtMagamCancel", "fnJtMagamCancel");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.divDataTop.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataBottom.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWD_JTDIVMASTER");
        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);

        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DW", "DWD_JTDIVDETAIL");
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("TY_WRK", "string");
        	this.dsSelectSub.addColumn("CD_SITE", "string");
        	this.dsSelectSub.addColumn("YM_WORK", "string");
        	this.dsSelectSub.addColumn("CD_VENDOR", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("YM_WORK", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("CD_ACCOUNT", "string");
        	this.dsSave.addColumn("AM_AJTAXBILL", "bigdecimal");
        	this.dsSave.addColumn("AM_AJVAT", "bigdecimal");
        	this.dsSave.addColumn("AM_AJBILL", "bigdecimal");
        	this.dsSave.addColumn("AM_AJETC", "bigdecimal");
        	this.dsSave.addColumn("DS_RMKS", "string");

        	this.dsSave.addColumn("AM_STLTAXBILL", "bigdecimal");
        	this.dsSave.addColumn("AM_STLVAT", "bigdecimal");
        	this.dsSave.addColumn("AM_STLBILL", "bigdecimal");
        	this.dsSave.addColumn("AM_STLETC", "bigdecimal");

        	this.dsExecute = new Dataset();
        	this.dsExecute.addColumn("TY_WRK", "string");
        	this.dsExecute.addColumn("ID_USER", "string");
        	this.dsExecute.addColumn("CD_SITE", "string");
        	this.dsExecute.addColumn("YM_WORK", "string");
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.dsListSub.clearData();
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
        	//this.gfnGridAdd(this.dxGrid);
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
        	// 저장을 하단 그리드로 진행함.
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
        				this.dsSave.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
        				this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR"));
        				this.dsSave.setColumn(nrow, "CD_ACCOUNT", this.dsListSub.getColumn(i, "CD_ACCOUNT"));
        				this.dsSave.setColumn(nrow, "AM_AJTAXBILL", this.dsListSub.getColumn(i, "AM_AJTAXBILL"));
        				this.dsSave.setColumn(nrow, "AM_AJVAT", this.dsListSub.getColumn(i, "AM_AJVAT"));
        				this.dsSave.setColumn(nrow, "AM_AJBILL", this.dsListSub.getColumn(i, "AM_AJBILL"));
        				this.dsSave.setColumn(nrow, "AM_AJETC", this.dsListSub.getColumn(i, "AM_AJETC"));
        				this.dsSave.setColumn(nrow, "DS_RMKS", this.dsListSub.getColumn(i, "DS_RMKS"));

        				this.dsSave.setColumn(nrow, "AM_STLTAXBILL", this.dsListSub.getColumn(i, "AM_STLTAXBILL"));
        				this.dsSave.setColumn(nrow, "AM_STLVAT", this.dsListSub.getColumn(i, "AM_STLVAT"));
        				this.dsSave.setColumn(nrow, "AM_STLBILL", this.dsListSub.getColumn(i, "AM_STLBILL"));
        				this.dsSave.setColumn(nrow, "AM_STLETC", this.dsListSub.getColumn(i, "AM_STLETC"));
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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGridSub);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }

        /************************************************************************
         * 서브 버튼 이벤트
         ************************************************************************/
        this.fnSelectSub = function() {
        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return false;

        	this.dsListSub.clearData();

        	var cd_vendor = this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR");
        	if (this.gfnIsNull(cd_vendor)){
        		return false;
        	}

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();
        	this.dsSelectSub.setColumn(0, "TY_WRK", "Q");
        	this.dsSelectSub.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelectSub.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));
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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
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
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if (svcID == "detail") {
        		this.gfnGridAfterSelect(this.dxGridSub);
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
        			var json = this.gfnArgsToJson(strArg);
        			strArg = json.gubun;

        			var msg = "";
        			switch(strArg)
        			{
        				case "CRT_DIV" :
        					msg += "안분자료생성이 ";
        					break;
        				case "CNC_DIV" :
        					msg += "안분전표삭제가 ";
        					break;
        				case "OK_MAGAM" :
        					msg += "원가안분확정이 ";
        					break;
        				case "CNC_MAGAM" :
        					msg += "원가안분확정취소가 ";
        					break;

        			}

        			msg += "정상 처리되었습니다.";

        			this.gfnAlert(msg);
        			this.FormBtns.Select.click();
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
        		//this.FormBtns.SubSelect.click();
        		this.fnSelectSub();
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

        /*
         *	서브 그리드 코드파인드
         */
        this.fnGridSub_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	if (id == "DZX_CFUSERGROUP") {
        		var cd_system = this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_SYSTEM");
        		if(this.gfnIsNull(cd_system)) {
        			this.gfnAlert("시스템코드를 먼저 입력하세요.");
        			return false;
        		}
         		dsUserParam.setColumn(nrow, "CD_MODULE", this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_SYSTEM"));
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
        		this.gfnGridClear(this.dxGridSub);
        	}
        };

        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_top(e.clienty);
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
        		var nrow = this.dsListSub.rowposition;

        		// 조정금액 세금계산서
        		if(e.columnid == "AM_AJTAXBILL")
        		{
        			var AM_AJTAXBILL = nexacro.toNumber(e.newvalue, 0);
        			var AM_AJVAT = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_AJVAT"),0);
        			var AM_AJBILL = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_AJBILL"),0);
        			var AM_AJETC = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_AJETC"),0);

        			// 조정금액 합계
        			this.dsListSub.setColumn(nrow, "AM_AJSUM", AM_AJTAXBILL + AM_AJVAT + AM_AJBILL + AM_AJETC);

        			var AM_TAXBILL = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_TAXBILL"),0);
        			var AM_STLTAXBILL = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_STLTAXBILL"),0);
        			var AM_JTAXBILL = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_JTAXBILL"),0);

        			// 실안분 세금계산서
        			this.dsListSub.setColumn(nrow, "AM_STAXBILL", AM_TAXBILL + AM_STLTAXBILL + AM_AJTAXBILL - AM_JTAXBILL);
        		}
        		// 선급정산금액 세금계산서
        		else if(e.columnid == "AM_STLTAXBILL")
        		{
        			var AM_STLTAXBILL = nexacro.toNumber(e.newvalue, 0);
        			var AM_STLVAT = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_STLVAT"),0);
        			var AM_STLBILL = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_STLBILL"),0);
        			var AM_STLETC = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_STLETC"),0);

        			// 선급정산금액 합계
        			this.dsListSub.setColumn(nrow, "AM_STLSUM", AM_STLTAXBILL + AM_STLVAT + AM_STLBILL + AM_STLETC);

        			var AM_TAXBILL = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_TAXBILL"),0);
        			var AM_AJTAXBILL = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_AJTAXBILL"),0);
        			var AM_JTAXBILL = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_JTAXBILL"),0);

        			// 실안분 세금계산서
        			this.dsListSub.setColumn(nrow, "AM_STAXBILL", AM_TAXBILL + AM_STLTAXBILL + AM_AJTAXBILL - AM_JTAXBILL);
        		}
        		// 조정금액 부가세
        		else if(e.columnid == "AM_AJVAT")
        		{
        			var AM_AJTAXBILL = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_AJTAXBILL"),0);
        			var AM_AJVAT = nexacro.toNumber(e.newvalue, 0);
        			var AM_AJBILL = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_AJBILL"),0);
        			var AM_AJETC = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_AJETC"),0);

        			// 조정금액 합계
        			this.dsListSub.setColumn(nrow, "AM_AJSUM", AM_AJTAXBILL + AM_AJVAT + AM_AJBILL + AM_AJETC);

        			var AM_VAT = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_VAT"),0);
        			var AM_STLVAT = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_STLVAT"),0);
        			var AM_JVAT = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_JVAT"),0);

        			// 실안분 부가세
        			this.dsListSub.setColumn(nrow, "AM_SVAT", AM_VAT + AM_STLVAT + AM_AJVAT - AM_JVAT);
        		}
        		// 선급정산금액 부가세
        		else if(e.columnid == "AM_STLVAT")
        		{
        			var AM_STLTAXBILL = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_STLTAXBILL"),0);
        			var AM_STLVAT = nexacro.toNumber(e.newvalue, 0);
        			var AM_STLBILL = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_STLBILL"),0);
        			var AM_STLETC = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_STLETC"),0);

        			// 선급정산금액 합계
        			this.dsListSub.setColumn(nrow, "AM_STLSUM", AM_STLTAXBILL + AM_STLVAT + AM_STLBILL + AM_STLETC);

        			var AM_VAT = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_VAT"),0);
        			var AM_AJVAT = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_AJVAT"),0);
        			var AM_JVAT = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_JVAT"),0);

        			// 실안분 부가세
        			this.dsListSub.setColumn(nrow, "AM_SVAT", AM_VAT + AM_STLVAT + AM_AJVAT - AM_JVAT);
        		}
        		// 조정금액 계산서
        		else if(e.columnid == "AM_AJBILL")
        		{
        			var AM_AJTAXBILL = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_AJTAXBILL"),0);
        			var AM_AJVAT = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_AJVAT"),0);
        			var AM_AJBILL = nexacro.toNumber(e.newvalue, 0);
        			var AM_AJETC = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_AJETC"),0);

        			// 조정금액 합계
        			this.dsListSub.setColumn(nrow, "AM_AJSUM", AM_AJTAXBILL + AM_AJVAT + AM_AJBILL + AM_AJETC);

        			var AM_BILL = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_BILL"),0);
        			var AM_STLBILL = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_STLBILL"),0);
        			var AM_JBILL = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_JBILL"),0);

        			// 실안분 계산서
        			this.dsListSub.setColumn(nrow, "AM_SBILL", AM_BILL + AM_STLBILL + AM_AJBILL - AM_JBILL);
        		}
        		// 선급정산금액 계산서
        		else if(e.columnid == "AM_STLBILL")
        		{
        			var AM_STLTAXBILL = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_STLTAXBILL"),0);
        			var AM_STLVAT = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_STLVAT"),0);
        			var AM_STLBILL = nexacro.toNumber(e.newvalue, 0);
        			var AM_STLETC = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_STLETC"),0);

        			// 선급정산금액 합계
        			this.dsListSub.setColumn(nrow, "AM_STLSUM", AM_STLTAXBILL + AM_STLVAT + AM_STLBILL + AM_STLETC);

        			var AM_BILL = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_BILL"),0);
        			var AM_AJBILL = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_AJBILL"),0);
        			var AM_JBILL = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_JBILL"),0);

        			// 실안분 계산서
        			this.dsListSub.setColumn(nrow, "AM_SBILL", AM_BILL + AM_STLBILL + AM_AJBILL - AM_JBILL);
        		}
        		// 조정금액 기타금액
        		else if(e.columnid == "AM_AJETC")
        		{
        			var AM_AJTAXBILL = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_AJTAXBILL"),0);
        			var AM_AJVAT = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_AJVAT"),0);
        			var AM_AJBILL = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_AJBILL"),0);
        			var AM_AJETC = nexacro.toNumber(e.newvalue, 0);

        			// 조정금액 합계
        			this.dsListSub.setColumn(nrow, "AM_AJSUM", AM_AJTAXBILL + AM_AJVAT + AM_AJBILL + AM_AJETC);

        			var AM_ETC = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_ETC"),0);
        			var AM_STLETC = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_STLETC"),0);
        			var AM_JETC = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_JETC"),0);

        			// 실안분 기타금액
        			this.dsListSub.setColumn(nrow, "AM_SETC", AM_ETC + AM_STLETC + AM_AJETC - AM_JETC);
        		}
        		// 선급정산금액 기타금액
        		else if(e.columnid == "AM_STLETC")
        		{
        			var AM_STLTAXBILL = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_STLTAXBILL"),0);
        			var AM_STLVAT = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_STLVAT"),0);
        			var AM_STLBILL = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_STLBILL"),0);
        			var AM_STLETC = nexacro.toNumber(e.newvalue, 0);

        			// 선급정산금액 합계
        			this.dsListSub.setColumn(nrow, "AM_AJSUM", AM_STLTAXBILL + AM_STLVAT + AM_STLBILL + AM_STLETC);

        			var AM_ETC = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_ETC"),0);
        			var AM_STLETC = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_STLETC"),0);
        			var AM_JETC = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_JETC"),0);

        			// 실안분 기타금액
        			this.dsListSub.setColumn(nrow, "AM_SETC", AM_ETC + AM_STLETC + AM_AJETC - AM_JETC);
        		}
        		//실안분 세금계산서
        		else if(e.columnid == "AM_STAXBILL")
        		{
        			var AM_STAXBILL = nexacro.toNumber(e.newvalue, 0);
        			var AM_SVAT = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_SVAT"),0);
        			var AM_SBILL = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_SBILL"),0);
        			var AM_SETC = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_SETC"),0);

        			// 실안분 합계
        			this.dsListSub.setColumn(nrow, "AM_SSUM", AM_STAXBILL + AM_SVAT + AM_SBILL + AM_SETC);
        		}
        		//실안분 부가세
        		else if(e.columnid == "AM_SVAT")
        		{
        			var AM_STAXBILL = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_STAXBILL"),0);
        			var AM_SVAT = nexacro.toNumber(e.newvalue, 0);
        			var AM_SBILL = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_SBILL"),0);
        			var AM_SETC = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_SETC"),0);

        			// 실안분 합계
        			this.dsListSub.setColumn(nrow, "AM_SSUM", AM_STAXBILL + AM_SVAT + AM_SBILL + AM_SETC);
        		}
        		//실안분 계산서
        		else if(e.columnid == "AM_SBILL")
        		{
        			var AM_STAXBILL = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_STAXBILL"),0);
        			var AM_SVAT = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_SVAT"),0);
        			var AM_SBILL = nexacro.toNumber(e.newvalue, 0);
        			var AM_SETC = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_SETC"),0);

        			// 실안분 합계
        			this.dsListSub.setColumn(nrow, "AM_SSUM", AM_STAXBILL + AM_SVAT + AM_SBILL + AM_SETC);
        		}
        		//실안분 기타금액
        		else if(e.columnid == "AM_SETC")
        		{
        			var AM_STAXBILL = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_STAXBILL"),0);
        			var AM_SVAT = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_SVAT"),0);
        			var AM_SBILL = nexacro.toNumber(this.dsListSub.getColumn(nrow, "AM_SBILL"),0);
        			var AM_SETC = nexacro.toNumber(e.newvalue, 0);

        			// 실안분 합계
        			this.dsListSub.setColumn(nrow, "AM_SSUM", AM_STAXBILL + AM_SVAT + AM_SBILL + AM_SETC);
        		}
        	}
        };


        // 아래부터는 확장버튼.
        this.fnJtJibun = function(obj,e) {
        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.YM_WORK = this.dsSearch.getColumn(0, "YM_WORK").substr(0,6);

        	this.gfnFormOpen("DWD", "DWD_JTMAGAMJIBUN", "", param);
        }

        this.fnJtSlip = function(obj,e) {
        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.DS_SITE = this.divSearch.form.ccfCD_SITE.form.DSTextBox.text;
        	param.YM_WORK = this.dsSearch.getColumn(0, "YM_WORK").substr(0,6);

        	this.gfnFormOpen("DWD", "DWD_JTSLIP", "", param);
        }

        this.fnJtCrt = function(obj,e) {
        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "]" + this.divSearch.form.ccfCD_SITE.form.DSTextBox.text
        			+ "\n작업년월 : [" + this.dsSearch.getColumn(0, "YM_WORK").substr(0,6) + "]"
        			+ "\n안분자료생성 후 대상정보는 수정하실 수 없습니다."
        			+ "\n\n안분자료생성 처리하시겠습니까?";

        	this.gfnConfirm(msg, "fnJt_callback", "CRT_DIV");
        }

        this.fnJtDel = function(obj,e) {
        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "]" + this.divSearch.form.ccfCD_SITE.form.DSTextBox.text
        			+ "\n작업년월 : [" + this.dsSearch.getColumn(0, "YM_WORK").substr(0,6) + "]"
        			+ "\n\n안분자료삭제 처리하시겠습니까?";

        	this.gfnConfirm(msg, "fnJt_callback", "CNC_DIV");
        }

        this.fnJtMagam = function(obj,e) {
        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "]" + this.divSearch.form.ccfCD_SITE.form.DSTextBox.text
        			+ "\n작업년월 : [" + this.dsSearch.getColumn(0, "YM_WORK").substr(0,6) + "]"
        			+ "\n원가안분확정 후 안분자료정보는 수정하실 수 없습니다."
        			+ "\n\n원가안분확정 처리하시겠습니까?";

        	this.gfnConfirm(msg, "fnJt_callback", "OK_MAGAM");
        }

        this.fnJtMagamCancel = function(obj,e) {
        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "]" + this.divSearch.form.ccfCD_SITE.form.DSTextBox.text
        			+ "\n작업년월 : [" + this.dsSearch.getColumn(0, "YM_WORK").substr(0,6) + "]"
        			+ "\n\n원가안분확정취소 처리하시겠습니까?";

        	this.gfnConfirm(msg, "fnJt_callback", "CNC_MAGAM");
        }

        this.fnJt_callback = function(strId, val) {
        	if(val == true)
        	{
        		this.dsExecute.clearData();
        		var nrow = this.dsExecute.addRow();

        		this.dsExecute.setColumn(nrow, "TY_WRK", strId);
        		this.dsExecute.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		this.dsExecute.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsExecute.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK").substr(0,6));

        		if (this.dsExecute.rowcount == 0) return;

        		var strSvcId    = "execute";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "execute=dsExecute";
        		var outData     = "";
        		var strArg      = "gubun=" + strId;
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        							callBackFnc); 	// 통신방법 정의 [생략가능]
        	}
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
        this.loadIncludeScript("DWD_JTCOSTDIVDETAIL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
