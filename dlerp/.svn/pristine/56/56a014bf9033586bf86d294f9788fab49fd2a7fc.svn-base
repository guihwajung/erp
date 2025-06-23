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
            this.set_titletext("본사마감확인");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DSEPR_SLIP_BONSA</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DSEPR_SLIP_BONSA_SAVE</Col></Row><Row><Col id=\"TARGET\">exec1</Col><Col id=\"SP\">DSEPR_MAGAM_SLIP_UPDATE</Col></Row><Row><Col id=\"TARGET\">slip</Col><Col id=\"SP\">DSEPR_RETIRE_SLIP_INSERT2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"YM_WORK\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장/부서 코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","sta02:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFDEPTCORP");
            obj.getSetter("AutoSet").set("true");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccfCD_SITE:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("마감년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_WORK00","ctclYM_WORK:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("전기일자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACCOUNT","staDT_WORK00:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_SITE.form.DSTextBox","value","dsSearch","DS_SITE");
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
        this.addIncludeScript("DSE_RETIRE_SLIP_BONSA.xfdl","lib::libCommon.xjs");
        this.registerScript("DSE_RETIRE_SLIP_BONSA.xfdl", function() {
        this.executeIncludeScript("lib::libCommon.xjs"); /*include "lib::libCommon.xjs"*/;
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

        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Select.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btn1= this.gfnFormButtonAdd("BTN_APPROVAL", "fnApproval"); //전표발행
        	this.btn2= this.gfnFormButtonAdd("BTN_APPROVAL_CANCEL", "fnApprovalCancel"); //전표발행취소
        	this.btnShowSlip = this.gfnFormButtonAdd("BTN_SHOW_SLIP", "fnSlipSearch"); //전표조회
        	this.btnSlipCreate  = this.gfnFormButtonAdd("btnSlipCreate", "fnSlipCreate");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ctclYM_WORK = this.divSearch.form.ctclYM_WORK;
        	this.ctclDT_ACCOUNT = this.divSearch.form.ctclDT_ACCOUNT;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DS", "DSE_RETIRE_SLIP_BONSA");
        	// 그리드 코드파인드 설정
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	this.dsSearch.setColumn(0, "YM_WORK", this.gfnGetDate().substr(0,6));
        	this.ctclDT_ACCOUNT.set_value(this.gfnGetDate());
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("NO_ID", "string");
        	this.dsSave.addColumn("DS_NAME", "string");
        	this.dsSave.addColumn("DT_ACCOUNT", "string");
        	this.dsSave.addColumn("YM_WORK", "string");
        	this.dsSave.addColumn("CD_GUBUN", "string");
        	this.dsSave.addColumn("DS_GUBUN", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("DS_SITE", "string");
        	this.dsSave.addColumn("CD_SITE_BH", "string");
        	this.dsSave.addColumn("DS_SITE_BH", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("DS_VENDOR", "string");
        	this.dsSave.addColumn("CD_ACCOUNT_D", "string");
        	this.dsSave.addColumn("DS_ACCOUNT_D", "string");
        	this.dsSave.addColumn("CD_ACCOUNT_C", "string");
        	this.dsSave.addColumn("DS_ACCOUNT_C", "string");
        	this.dsSave.addColumn("AM_IMGUM", "string");
        	this.dsSave.addColumn("AM_SODUK", "string");
        	this.dsSave.addColumn("AM_JUMIN", "string");
        	this.dsSave.addColumn("AM_GOYONG", "string");
        	this.dsSave.addColumn("CD_DHPC", "string");
        	this.dsSave.addColumn("DS_DHPC", "string");
        	this.dsSave.addColumn("CD_DHPG", "string");
        	this.dsSave.addColumn("DS_DHPG", "string");
        	this.dsSave.addColumn("CD_DHPM", "string");
        	this.dsSave.addColumn("DS_DHPM", "string");
        	this.dsSave.addColumn("CD_SEMOK", "string");
        	this.dsSave.addColumn("DS_SEMOK", "string");
        	this.dsSave.addColumn("DS_BIGO", "string");
        	this.dsSave.addColumn("ID_INSERT", "string");

        	this.dsExec1 = new Dataset(); //전표발행 및 전자결재
            this.dsExec1.addColumn("CD_SITE", "string");
            this.dsExec1.addColumn("YM_WORK", "string");
            this.dsExec1.addColumn("DT_SLIP", "string");
        	this.dsExec1.addColumn("NO_KOOKMIN_VENDOR", "string");
            this.dsExec1.addColumn("NO_MEDICARE_VENDOR", "string");
        	this.dsExec1.addColumn("CD_JIGUB", "string");
        	this.dsExec1.addColumn("CD_JIGUB2", "string");

        	this.dsSlip = new Dataset();
        	this.dsSlip.addColumn("CD_SITE", "string");
        	this.dsSlip.addColumn("DT_SLIP", "string");
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

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));

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
        	//var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
        }

        /*
         *   저장 버튼
         */
        this.fnSave = function() {

        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();
        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        // 		switch(flag) {
        // 			case "I":
        // 			case "U":
        // 			case "D":
        				var nRow = this.dsSave.addRow();

        				this.dsSave.setColumn(nRow, "NO_ID", this.dsList.getColumn(i,"NO_ID"));
        				this.dsSave.setColumn(nRow, "DS_NAME", this.dsList.getColumn(i,"DS_NAME"));
        				this.dsSave.setColumn(nRow, "DT_ACCOUNT", this.ctclDT_ACCOUNT.value);
        				this.dsSave.setColumn(nRow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        				this.dsSave.setColumn(nRow, "CD_GUBUN", this.dsList.getColumn(i,"CD_GUBUN"));
        				this.dsSave.setColumn(nRow, "DS_GUBUN", this.dsList.getColumn(i,"DS_GUBUN"));
        				this.dsSave.setColumn(nRow, "CD_SITE", this.dsList.getColumn(i,"CD_SITE"));
        				this.dsSave.setColumn(nRow, "DS_SITE", this.dsList.getColumn(i,"DS_SITE"));
        				this.dsSave.setColumn(nRow, "CD_SITE_BH", this.dsList.getColumn(i,"CD_SITE_BH"));
        				this.dsSave.setColumn(nRow, "DS_SITE_BH", this.dsList.getColumn(i,"DS_SITE_BH"));
        				this.dsSave.setColumn(nRow, "CD_VENDOR", this.dsList.getColumn(i,"CD_VENDOR"));
        				this.dsSave.setColumn(nRow, "DS_VENDOR", this.dsList.getColumn(i,"DS_VENDOR"));
        				this.dsSave.setColumn(nRow, "CD_ACCOUNT_D", this.dsList.getColumn(i,"CD_ACCOUNT_D"));
        				this.dsSave.setColumn(nRow, "DS_ACCOUNT_D", this.dsList.getColumn(i,"DS_ACCOUNT_D"));
        				this.dsSave.setColumn(nRow, "CD_ACCOUNT_C", this.dsList.getColumn(i,"CD_ACCOUNT_C"));
        				this.dsSave.setColumn(nRow, "DS_ACCOUNT_C", this.dsList.getColumn(i,"DS_ACCOUNT_C"));
        				this.dsSave.setColumn(nRow, "AM_IMGUM", this.dsList.getColumn(i,"AM_IMGUM"));
        				this.dsSave.setColumn(nRow, "AM_SODUK", this.dsList.getColumn(i,"AM_SODUK"));
        				this.dsSave.setColumn(nRow, "AM_JUMIN", this.dsList.getColumn(i,"AM_JUMIN"));
        				this.dsSave.setColumn(nRow, "AM_GOYONG", this.dsList.getColumn(i,"AM_GOYONG"));
        				this.dsSave.setColumn(nRow, "CD_DHPC", this.dsList.getColumn(i,"CD_DHPC"));
        				this.dsSave.setColumn(nRow, "DS_DHPC", this.dsList.getColumn(i,"DS_DHPC"));
        				this.dsSave.setColumn(nRow, "CD_DHPG", this.dsList.getColumn(i,"CD_DHPG"));
        				this.dsSave.setColumn(nRow, "DS_DHPG", this.dsList.getColumn(i,"DS_DHPG"));

        				var CD_DHPM = this.dsList.getColumn(i,"CD_DHPM");
        				var DS_DHPM = "";
        				// B:전자(EFT)|C:정산(CLEARING)|D:청구서(WIRE)
        				if(CD_DHPM == "B")
        				{
        					DS_DHPM = "전자(EFT)";
        				}
        				else if(CD_DHPM == "C")
        				{
        					DS_DHPM = "정산(CLEARING)";
        				}
        				else if(CD_DHPM == "D")
        				{
        					DS_DHPM = "청구서(WIRE)";
        				}

        				this.dsSave.setColumn(nRow, "CD_DHPM", CD_DHPM);
        				this.dsSave.setColumn(nRow, "DS_DHPM", DS_DHPM);
        				this.dsSave.setColumn(nRow, "CD_SEMOK", this.dsList.getColumn(i,"CD_SEMOK"));
        				this.dsSave.setColumn(nRow, "DS_SEMOK", this.dsList.getColumn(i,"DS_SEMOK"));
        				this.dsSave.setColumn(nRow, "DS_BIGO", this.dsList.getColumn(i,"DS_BIGO"));
        				this.dsSave.setColumn(nRow, "ID_INSERT", this.objApp.gdsUserInfo.getColumn(0, "ID_USER"));
        //				break;
        //		}
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"YM_WORK"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctclYM_WORK.form.TextBox.setFocus();
        		}
        		this.gfnAlert("마감년월 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
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

        		if(this.dsList.rowcount > 0)
        		{
        			for (var i = 0; i < this.dsList.rowcount; i++) {
        				// STATE 컬럼값이 'U'이면 그리드 row 상태값을 update 상태로 변환한다
        				if(this.dsList.getColumn(i,"STATE") == "U"){
        					this.dsList.setColumn(i, this.ucFlag, "U");
        					this.gfnSetFormStatus(this, "U");
        				}
        			}

        			var colDS_VENDOR = this.dxGrid.getBindCellIndex("body", "DS_VENDOR");
        			this.dxGrid.setCellProperty("body", colDS_VENDOR, "edittype", "expr: CD_GUBUN == '1' ? 'none' : 'text'");
        			this.dxGrid.setCellProperty("body", colDS_VENDOR, "expandshow", "expr:nx_flag=='#' ? 'hide' : CD_GUBUN == '1' ? 'hide' : 'show'");
        			this.dxGrid.setCellProperty("body", colDS_VENDOR, "cssclass", "expr: CD_GUBUN == '1' ? 'BACK_ReadOnly' : ''");

        			if(this.gfnIsNull(this.dsList.getColumn(0, "CD_TRADE")))
        			{
        				this.btn1.set_enable(true);
        				this.btn2.set_enable(false);
        			}
        			else
        			{
        				this.btn1.set_enable(false);
        				this.btn2.set_enable(true);
        			}
        		}
        		else
        		{
        			this.btn1.set_enable(false);
        			this.btn2.set_enable(false);
        		}
        	}
        	else if(svcID == "save") {
        		this.FormBtns.Select.click();
        	}
        	else if(svcID == "exec1") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        			this.fnSlipApproval("UPDATE");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "exec2") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        			this.fnSlipApproval("DELETE");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "slip") {
        		if (errorCode == 0) {
        			this.fnCallback_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			this.gfnAlert("전표내역생성이 정상처리되었습니다.","fnCallback_callback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfCD_SITE") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.objApp.gdsUserInfo.getColumn(0, "CD_CORP"));
        	}

        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        //그리드 코드파인드
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){

        	if (id == "DOX_CFVENDOR_DH") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.objApp.gdsUserInfo.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsList.getColumn(nrow, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "TY_VENDOR", "");
        	}
        	return true;

        	return true;
        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		//this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.dsList_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "DS_BIGO"){
        		for(var i = 0; i < this.dsList.rowcount; i++)
        		{
        			if(this.dsList.getColumn(e.row, "NO_ID") == this.dsList.getColumn(i, "NO_ID")){
        				this.dsList.setColumn(i, "DS_BIGO", e.newvalue);
        			}
        		}
        	}
        };

        this.fnApproval = function()
        {
        	if (this.dsList.rowcount < 1) { return false; }

        	if(this.gfnGetFormStatus(this) == "U") {
        		this.gfnAlert("저장 후 진행해 주세요.");
        		return;
        	}

        	this.gfnConfirm("전표발행 및 전자결재를 진행하시겠습니까?", "fnApproval_callback");

        }

        this.fnApproval_callback = function(strId, val){
        	if(val == false){
        		return false;
        	}
        	this.dsExec1.clearData();
        	this.dsExec1.addRow();

            this.dsExec1.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
            this.dsExec1.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsExec1.setColumn(0, "DT_SLIP", this.divSearch.form.ctclDT_ACCOUNT.value); //전기일자
            this.dsExec1.setColumn(0, "NO_KOOKMIN_VENDOR", ""); //국민연금 거래처 코드
            this.dsExec1.setColumn(0, "NO_MEDICARE_VENDOR", ""); //건강보험 거래처 코드
        	this.dsExec1.setColumn(0, "CD_JIGUB", ""); // 익월 결재구분
        	this.dsExec1.setColumn(0, "CD_JIGUB2", ""); // 당월 결재구분

        	var strSvcId    = "exec1";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "exec1=dsExec1";
        	var outData     = "";
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


        this.fnApprovalCancel = function()
        {
        	if (this.dsList.rowcount < 1) { return false; }

        	this.gfnConfirm("전표발행취소 및 전자결재취소를 진행하시겠습니까?", "fnApprovalCancel_callback");


        	var DETAIL = "";
        	for(var i = 0; i < this.dsList.rowcount; i++){
        		DETAIL += "<TR>";
        		DETAIL += "	  <TD class=td_c>" + this.dsList.getColumn(i, "DS_NAME") + "</TD>";			// 성명
        		DETAIL += "	  <TD class=td_c>" + this.dsList.getColumn(i, "DS_GUBUN") + "</TD>";		// 구분
        		DETAIL += "	  <TD class=td_c>" + this.dsList.getColumn(i, "DS_SITE_BH") + "</TD>";		// 귀속부서
        		DETAIL += "	  <TD class=td_c>" + this.dsList.getColumn(i, "DS_VENDOR") + "</TD>";		// 거래처
        		DETAIL += "	  <TD class=td_C>" + this.dsList.getColumn(i, "DS_ACCOUNT_D") + "</TD>";	// 차변계정
        		DETAIL += "	  <TD class=td_c>" + this.dsList.getColumn(i, "DS_ACCOUNT_C") + "</TD>";	// 대변계정
        		DETAIL += "	  <TD class=td_c>" + this.dsList.getColumn(i, "DS_DHPG") + "</TD>";			// 지불그룹
        		DETAIL += "	  <TD class=td_c>" + this.dsList.getColumn(i, "CD_DHPM") + "</TD>";			// 지불방법
        		DETAIL += "	  <TD class=td_r>즉시지급</TD>";											// 지불조건
        		DETAIL += "</TR>";
        	}

        	var sRef04  = "";
        	var oParam  = {};

        	oParam.DETAIL = DETAIL;

        	this.gfnApprove(sApType, sTitle, sRef01, sRef02, sRef03, "", oParam, "fnAprvDialogCallback");
        }

        this.fnMagamSlipDelete_callback = function(strId, val){

        	if(val == false){
        		return false;
        	}
        	this.dsExec1.clearData();
        	this.dsExec1.addRow();

            this.dsExec1.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
            this.dsExec1.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsExec1.setColumn(0, "DT_SLIP", this.divSearch.form.ctclDT_ACCOUNT.value); //전기일자
            this.dsExec1.setColumn(0, "NO_KOOKMIN_VENDOR", ""); //국민연금 거래처 코드
            this.dsExec1.setColumn(0, "NO_MEDICARE_VENDOR", ""); //건강보험 거래처 코드
        	this.dsExec1.setColumn(0, "CD_JIGUB", ""); // 익월 결재구분
        	this.dsExec1.setColumn(0, "CD_JIGUB2", ""); // 당월 결재구분

        	var strSvcId    = "exec2";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "exec1=dsExec1";
        	var outData     = "";
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

        this.fnSlipApproval = function(flag){

        	var DETAIL = "";
        	for(var i = 0; i < this.dsList.rowcount; i++){

        		var AM_IMGUM = this.gfnAppendComma(this.dsList.getColumn(i, "AM_IMGUM"));
        		var AM_SODUK = this.gfnAppendComma(this.dsList.getColumn(i, "AM_SODUK"));
        		var AM_JUMIN = this.gfnAppendComma(this.dsList.getColumn(i, "AM_JUMIN"));

        		DETAIL += "<TR>";
        		DETAIL += "	  <TD class=td_c>" + this.dsList.getColumn(i, "DS_NAME") + "</TD>";			// 성명
        		DETAIL += "	  <TD class=td_c>" + this.dsList.getColumn(i, "DS_SITE_BH") + "</TD>";		// 귀속부서
        		DETAIL += "	  <TD class=td_c>" + this.dsList.getColumn(i, "DS_VENDOR") + "</TD>";		// 거래처
        		DETAIL += "	  <TD class=td_c>" + this.dsList.getColumn(i, "DS_ACCOUNT_D") + "</TD>";	// 차변계정
        		DETAIL += "	  <TD class=td_c>" + this.dsList.getColumn(i, "DS_ACCOUNT_C") + "</TD>";	// 대변계정

        		if(flag == "UPDATE"){
        			DETAIL += "	  <TD class=td_r>" + AM_IMGUM + "</TD>";		// 금액
        			DETAIL += "	  <TD class=td_r>" + AM_SODUK + "</TD>";		// 소득세
        			DETAIL += "	  <TD class=td_r>" + AM_JUMIN + "</TD>";		// 주민세
        		}else{
        			DETAIL += "	  <TD class=td_r>" + (AM_IMGUM  == "0" ? "" : "-") + AM_IMGUM  + "</TD>";		// 금액
        			DETAIL += "	  <TD class=td_r>" + (AM_SODUK  == "0" ? "" : "-") + AM_SODUK  + "</TD>";		// 소득세
        			DETAIL += "	  <TD class=td_r>" + (AM_JUMIN  == "0" ? "" : "-") + AM_JUMIN  + "</TD>";		// 주민세
        		}

        		DETAIL += "	  <TD class=td_c>" + this.dsList.getColumn(i, "DS_DHPG") + "</TD>";			// 지불그룹
        		DETAIL += "	  <TD class=td_c>" + this.dsList.getColumn(i, "CD_DHPM") + "</TD>";			// 지불방법
        		DETAIL += "	  <TD class=td_c>즉시지급</TD>";											// 지불조건
        		DETAIL += "</TR>";
        	}


        	var sApType = "";
        	var sTitle  = "";
        	var sRef03  = "";

        	if(flag == "UPDATE"){
        		sApType = "DS11";
        		sTitle  = "퇴직금 전표발행 전자결재";
        		sRef03  = this.dsList.getColumn(0, "NO_APPROVAL_SEQ");
        	}else{
        		sApType = "DS12";
        		sTitle  = "퇴직금 전표발행 전자결재취소";
        		sRef03  = this.dsList.getColumn(0, "NO_APPROVAL_CANCEL_SEQ");
        	}

        	var sRef01  = this.dsSearch.getColumn(0, "CD_SITE");
        	var sRef02  = this.dsSearch.getColumn(0, "YM_WORK").substr(0,6);
        	var sRef04  = "";
        	var oParam  = {};

        	oParam.DETAIL = DETAIL;

        	this.gfnApprove(sApType, sTitle, sRef01, sRef02, sRef03, "", oParam, "fnAprvDialogCallback");
        }

        this.divSearch_ctclDT_ACCOUNT_onchanged = function(obj,e)
        {
        	this.gfnSetFormStatus(this, "U");
        };

        // 전표조회 버튼 클릭
        this.fnSlipSearch = function(obj, e) {

            if (this.dsList.rowcount > 0) {
                if (this.gfnIsNull(this.dsList.getColumn(0, "CD_TRADE")))
        		{
                    this.gfnAlert("발행된 전표가 없습니다.");
                }
        		else
        		{
                    this.gfnConfirm("전표를 조회하시겠습니까?", "fnSlipSearch_callback");
                }
            }
        }


        //전표조회 콜백
        this.fnSlipSearch_callback = function(strId, val) {
         if (val == true) {
                var param = {};
                //
                param.CD_TRADE = this.dsList.getColumn(0, "CD_TRADE");

                //전표발행시 팝업창 띄움
                this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnDialogCallback", param);
            }
        };


        this.fnSlipCreate = function()
        {
        	this.gfnConfirm("전표 내역생성을 진행하시겠습니까?","fnSlipCreate_callback");
        }

        this.fnSlipCreate_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.dsSlip.clearData();
        		var nrow = this.dsSlip.addRow();

        		this.dsSlip.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsSlip.setColumn(nrow, "DT_SLIP", this.dsSearch.getColumn(0, "YM_WORK"));

        		var strSvcId    = "slip";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "slip=dsSlip";
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ctclDT_ACCOUNT.addEventHandler("onchanged",this.divSearch_ctclDT_ACCOUNT_onchanged,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DSE_RETIRE_SLIP_BONSA.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
