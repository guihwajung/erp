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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWDPR_UNELGSBSN_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWDPR_UNELGSBSN_SAVE</Col></Row><Row><Col id=\"TARGET\">execute</Col><Col id=\"SP\">DWDPR_UNELGSBSN_EXECUTE</Col></Row><Row><Col id=\"TARGET\">sapauto</Col><Col id=\"SP\">DWZPR_SAP_AUTOSLIP_ISSUE_SELECT</Col></Row><Row><Col id=\"TARGET\">sapcancel</Col><Col id=\"SP\">DWZPR_SAP_AUTOSLIP_CANCEL_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"FR_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"TO_WORK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSap", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("작업년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclFR_WORK","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_range","ctclFR_WORK:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclTO_WORK","sta_range:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCalMM.xfdl");
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

            obj = new BindItem("item1","divSearch.form.ctclFR_WORK.form.TextBox","value","dsSearch","FR_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclTO_WORK.form.TextBox","value","dsSearch","TO_WORK");
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
        this.registerScript("DWD_UNELGSBSN.xfdl", function() {
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

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().FR_WORK)
        	&& !this.gfnIsNull(this.getOwnerFrame().TO_WORK))
        	{
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		// 코드파인드의 명칭부분은 직접 접근해서 셋팅
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		this.dsSearch.setColumn(0, "FR_WORK", this.getOwnerFrame().FR_WORK);
        		this.dsSearch.setColumn(0, "TO_WORK", this.getOwnerFrame().TO_WORK);

        		this.FormBtns.Select.click();
        	}
        	else
        	{
        		var today = this.gfnGetDate();

        		this.dsSearch.setColumn(0, "FR_WORK",today.substr(0,4)+"01");
        		this.dsSearch.setColumn(0, "TO_WORK",today.substr(0,6));
        	}

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnUnElgSbsnCrt = this.gfnFormButtonAdd("btnUnElgSbsnCrt", "fnUnElgSbsnCrt");
        	this.btnSlipIssue = this.gfnFormButtonAdd("btnSlipIssue", "fnSlipIssue");

        	this.btnSlipSearch = this.gfnFormButtonAdd("btnSlipSearch","fnSlipSearch");
        	this.btnSlipSearch = this.gfnFormButtonAdd("btnSlipCancel", "fnSlipCancel");

        	this.btnSlipIssueSap = this.gfnFormButtonAdd("btnSlipIssueSap", "fnSlipIssueSap");
        	this.btnSlipCancelSap = this.gfnFormButtonAdd("btnSlipCancelSap", "fnSlipCancelSap");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWD_UNELGSBSN");

        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("FR_WORK", "string");
        	this.dsSelect.addColumn("TO_WORK", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("YM_WORK", "string");
        	this.dsSave.addColumn("AM_UNELG", "bigdecimal");
        	this.dsSave.addColumn("RT_CNSTPRSC", "bigdecimal");
        	this.dsSave.addColumn("RT_UNELGSBSN", "bigdecimal");
        	this.dsSave.addColumn("AM_SBSN", "bigdecimal");
        	this.dsSave.addColumn("AM_ACMCST", "bigdecimal");
        	this.dsSave.addColumn("CD_COST", "string");
        	this.dsSave.addColumn("CD_SITE_SBSN", "string");
        	this.dsSave.addColumn("CD_COST_SBSN", "string");
        	this.dsSave.addColumn("NO_ERPKEY", "string");
        	this.dsSave.addColumn("NO_SLIP", "string");
        	this.dsSave.addColumn("DS_RMKS", "string");

        	this.dsExecute = new Dataset();
        	this.dsExecute.addColumn("TY_WRK", "string");
        	this.dsExecute.addColumn("ID_USER", "string");
        	this.dsExecute.addColumn("CD_SITE", "string");
        	this.dsExecute.addColumn("YM_WORK", "string");
        	this.dsExecute.addColumn("CD_DEPT", "string");
        	this.dsExecute.addColumn("NO_SLIP", "string");

        	this.dsSapAuto = new Dataset();
        	this.dsSapAuto.addColumn("TY_WRK", "string");
        	this.dsSapAuto.addColumn("CD_AUTOSLIP", "string");
        	this.dsSapAuto.addColumn("NO_ERPKEY", "string");
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
        	var nrow = this.dsSelect.addRow();
        	this.dsSelect.setColumn(nrow, "TY_WRK", "Q");
        	this.dsSelect.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(nrow, "FR_WORK", this.dsSearch.getColumn(0, "FR_WORK"));
        	this.dsSelect.setColumn(nrow, "TO_WORK", this.dsSearch.getColumn(0, "TO_WORK"));

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
        	var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
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
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "YM_WORK", this.dsList.getColumn(i, "YM_WORK"));
        				this.dsSave.setColumn(nrow, "AM_UNELG", this.dsList.getColumn(i, "AM_UNELG"));
        				this.dsSave.setColumn(nrow, "RT_CNSTPRSC", this.dsList.getColumn(i, "RT_CNSTPRSC"));
        				this.dsSave.setColumn(nrow, "RT_UNELGSBSN", this.dsList.getColumn(i, "RT_UNELGSBSN"));
        				this.dsSave.setColumn(nrow, "AM_SBSN", this.dsList.getColumn(i, "AM_SBSN"));
        				this.dsSave.setColumn(nrow, "AM_ACMCST", this.dsList.getColumn(i, "AM_ACMCST"));
        				this.dsSave.setColumn(nrow, "CD_COST", this.dsList.getColumn(i, "CD_COST"));
        				this.dsSave.setColumn(nrow, "CD_SITE_SBSN", this.dsList.getColumn(i, "CD_SITE_SBSN"));
        				this.dsSave.setColumn(nrow, "CD_COST_SBSN", this.dsList.getColumn(i, "CD_COST_SBSN"));
        				this.dsSave.setColumn(nrow, "NO_ERPKEY", this.dsList.getColumn(i, "NO_ERPKEY"));
        				this.dsSave.setColumn(nrow, "NO_SLIP", this.dsList.getColumn(i, "NO_SLIP"));
        				this.dsSave.setColumn(nrow, "DS_RMKS", this.dsList.getColumn(i, "DS_RMKS"));
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


        this.fnExecute = function(gubun) {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsExecute.clearData();

        	var nrow = this.dsExecute.addRow();
        	this.dsExecute.setColumn(nrow, "TY_WRK", gubun);
        	this.dsExecute.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsExecute.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsExecute.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);

        	if(gubun == "CRT")
        	{
        		this.dsExecute.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "TO_WORK"));
        		this.dsExecute.setColumn(nrow, "NO_SLIP", "");
        	}
        	else
        	{
        		this.dsExecute.setColumn(nrow, "YM_WORK", this.dsList.getColumn(this.dsList.rowposition, "YM_WORK"));
        		this.dsExecute.setColumn(nrow, "NO_SLIP", this.dsList.getColumn(this.dsList.rowposition, "NO_SLIP"));
        	}

        	if (this.dsExecute.rowcount == 0) return;

        	var strSvcId    = "execute";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "execute=dsExecute";
        	var outData     = "";
        	var strArg      = "gubun="+gubun;
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
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
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
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "FR_WORK"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctclFR_WORK.form.TextBox.setFocus();
        		}
        		this.gfnAlert("작업년월 시작일을 입력하세요.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "TO_WORK"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctclTO_WORK.form.TextBox.setFocus();
        		}
        		this.gfnAlert("작업년월 종료일을 입력하세요.", "fnVaidateCallback");
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

        			this.fnExecuteCallback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			var msg = "";

        			switch(strArg)
        			{
        				case "CRT" : msg += "옵션대체생성이 "; break;
        				case "SLPPUB" : msg += "전표발행이 "; break;
        				case "SLPCNC" : msg += "전표취소가 "; break;
        			}
        			msg += "정상 처리되었습니다.";

        			this.gfnAlert(msg, "fnExecuteCallback");

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
         this.fnGrid_EnterCell = function(obj, row, cell) {
        	// 수정가능 true, false 처리하려는 컬럼에 대해서만 return 처리할것.
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);	// 클릭한 cell의 컬럼명

        	// 클릭했을때 클릭한 cell을 수정 가능 or 불가능 상태로 만든다.
        	// YN_EDIT 값이 Y일때만 수정가능상태
        	if(this.dsList.getColumn(row, "YN_EDIT") == "N") {
        		return false;
        	}

        	return;
        }

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
         	if (id == "DWX_CFCOST_TREE_01") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        			this.gfnAlert("현장코드를 먼저 입력하세요.");
        			return false;
        		}

         		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "CD_GBIMOK", "");
         		dsUserParam.setColumn(nrow, "CD_STDAGG", "SIT");
        	}
        	else if (id == "DWX_CFCOST_SBSN_01") {
        		if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_SITE_SBSN"))) {
        			this.gfnAlert("현장코드를 먼저 입력하세요.");
        			return false;
        		}

         		dsUserParam.setColumn(nrow, "CD_SITE", this.dsList.getColumn(this.dsList.rowposition, "CD_SITE_SBSN"));
        		dsUserParam.setColumn(nrow, "CD_GBIMOK", "");
         		dsUserParam.setColumn(nrow, "CD_STDAGG", "SBSN");
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
        	}
        };


        //아래부터는 확장버튼 이벤트

        // 옵션대체생성 버튼 이벤트
        this.fnUnElgSbsnCrt = function(obj,e) {

        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.divSearch.form.ccfCD_SITE.form.DSTextBox.text + "\n"
        			+ "작업년월 : [" + this.dsSearch.getColumn(0, "TO_WORK") + "] \n"
        			+ "기존자료 삭제 후 재생성 처리 됩니다." + "\n\n"
        			+ "옵션대체생성 처리 하시겠습니까?"
        	;

        	this.gfnConfirm(msg, "fnUnElgSbsnCrt_callback");
        }

        this.fnUnElgSbsnCrt_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.fnExecute("CRT");
        	}
        }

        // 전표발행 버튼 이벤트
        this.fnSlipIssue = function(obj,e) {
        	if(this.dsList.rowposition < 0) return;

        	var nrow = this.dsList.rowposition;
        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.divSearch.form.ccfCD_SITE.form.DSTextBox.text + "\n"
        			+ "작업년월 : [" + this.dsList.getColumn(nrow, "YM_WORK") + "] \n"
        			+ "옵션원가대체 전표발행 하시겠습니까?"
        	;

        	this.gfnConfirm(msg, "fnSlipIssue_callback");
        }

        this.fnSlipIssue_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.fnExecute("SLPPUB");
        	}
        }

        // 전표조회 버튼 이벤트
        this.fnSlipSearch = function(obj,e) {
        	if(this.dsList.rowposition < 0) return;

        	var param = {};
        	param.NO_ERPKEY = this.dsList.getColumn(this.dsList.rowposition, "NO_ERPKEY");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHA_ERPKEY_SLIP", "fnOrderSite_callback", param);
        }

        // 전표취소 버튼 이벤트
        this.fnSlipCancel = function(obj,e) {
        	if(this.dsList.rowposition < 0) return;

        	var nrow = this.dsList.rowposition;
        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.divSearch.form.ccfCD_SITE.form.DSTextBox.text + "\n"
        			+ "작업년월 : [" + this.dsList.getColumn(nrow, "YM_WORK") + "] \n"
        			+ "옵션원가대체 전표취소 하시겠습니까?"
        	;

        	this.gfnConfirm(msg, "fnSlipCancel_callback");
        }

        this.fnSlipCancel_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.fnExecute("SLPCNC");
        	}
        }


        /*
         *	전표발행(SAP)
         */
        this.fnSlipIssueSap = function() {
        	if(this.dsList.rowposition < 0) return;

        	var nrow = this.dsList.rowposition;
        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.divSearch.form.ccfCD_SITE.form.DSTextBox.text + "\n"
        			+ "작업년월 : [" + this.dsList.getColumn(nrow, "YM_WORK") + "] \n"
        			+ "옵션원가대체 전표발행(SAP) 하시겠습니까?"
        	;

        	this.gfnConfirm(msg, "dsList_slipIssueSap_callback");
        }

        this.dsList_slipIssueSap_callback = function(strId, val) {
        	if(val == true) {
        		this.dsSapAuto.clearData();
        		this.dsSapAuto.addRow();

        		this.dsSapAuto.setColumn(0, "TY_WRK", "Q");
        		this.dsSapAuto.setColumn(0, "CD_AUTOSLIP", "DWD0003");
        		this.dsSapAuto.setColumn(0, "NO_ERPKEY", this.dsList.getColumn(this.dsList.rowposition, "NO_ERPKEY"));

        		var strSvcId    = "sapauto";
        		var strSvcType  = "select";
        		var inProc		= "_dsProc";
        		var inData      = "sapauto=dsSapAuto";
        		var outData     = "dsListSap=sapauto0";
        		var strArg      = "";
        		var callBackFnc = "fnSlipIssueSap_Callback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}
        }

        /*
         *	전표취소(SAP)
         */
        this.fnSlipCancelSap = function() {
        	if(this.dsList.rowposition < 0) return;

        	var nrow = this.dsList.rowposition;
        	var msg = "현장코드 : [" + this.dsSearch.getColumn(0, "CD_SITE") + "] " + this.divSearch.form.ccfCD_SITE.form.DSTextBox.text + "\n"
        			+ "작업년월 : [" + this.dsList.getColumn(nrow, "YM_WORK") + "] \n"
        			+ "옵션원가대체 전표취소(SAP) 하시겠습니까?"
        	;

        	this.gfnConfirm(msg, "dsList_slipCancelSap_callback");
        }

        this.dsList_slipCancelSap_callback = function(strId, val) {
        	if(val == true) {
        		this.dsSapAuto.clearData();
        		this.dsSapAuto.addRow();

        		this.dsSapAuto.setColumn(0, "TY_WRK", "Q");
        		this.dsSapAuto.setColumn(0, "CD_AUTOSLIP", "DWD0003");
        		this.dsSapAuto.setColumn(0, "NO_ERPKEY", this.dsList.getColumn(this.dsList.rowposition, "NO_ERPKEY"));

        		var strSvcId    = "sapcancel";
        		var strSvcType  = "select";
        		var inProc		= "_dsProc";
        		var inData      = "sapcancel=dsSapAuto";
        		var outData     = "dsListSap=sapcancel0";
        		var strArg      = "";
        		var callBackFnc = "fnSlipIssueSap_Callback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}
        }

        /*
         *	전표(SAP) CALLBACK
         */
        this.fnSlipIssueSap_Callback = function(svcID, errorCode, errorMsg) {
        	if(errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return false;
        	}

        	if(svcID == "sapauto") {
        		if (this.dsListSap.rowcount > 0) {
        			// 전표발행(SAP) 다중건 처리용 Dataset 생성
        			var ds = new Dataset();
        			ds.addColumn("NO_ERPKEY", "string");
        			ds.addColumn("CD_TRADE", "string");
        			ds.addColumn("ID_USER", "string");

        			for(var i = 0; i < this.dsListSap.rowcount; i++) {
        				var nrow = ds.addRow();
        				ds.setColumn(nrow, "NO_ERPKEY", this.dsListSap.getColumn(i, "NO_ERPKEY"));
        				ds.setColumn(nrow, "CD_TRADE", this.dsListSap.getColumn(i, "CD_TRADE"));
        				ds.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			}

        			// 전표발행(SAP) 다중건 처리
        			this.gfnSlipIssueDs(ds, "fnSlipIssueSap_Complete");
        		}
        	}
        	else if(svcID == "sapcancel") {
        		if (this.dsListSap.rowcount > 0) {
        			// 전표취소(SAP) 다중건 처리용 Dataset 생성
        			var ds = new Dataset();
        			ds.addColumn("NO_ERPKEY", "string");
        			ds.addColumn("CD_TRADE", "string");
        			ds.addColumn("ID_USER", "string");
        			ds.addColumn("BUKRS", "string");
        			ds.addColumn("BELNR", "string");
        			ds.addColumn("GJAHR", "string");

        			for(var i = 0; i < this.dsListSap.rowcount; i++) {
        				var nrow = ds.addRow();
        				ds.setColumn(nrow, "NO_ERPKEY", this.dsListSap.getColumn(i, "NO_ERPKEY"));
        				ds.setColumn(nrow, "CD_TRADE", this.dsListSap.getColumn(i, "CD_TRADE"));
        				ds.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				ds.setColumn(nrow, "BUKRS", this.dsListSap.getColumn(i, "BUKRS"));
        				ds.setColumn(nrow, "BELNR", this.dsListSap.getColumn(i, "BELNR"));
        				ds.setColumn(nrow, "GJAHR", this.dsListSap.getColumn(i, "GJAHR"));
        			}

        			// 전표취소(SAP) 다중건 처리
        			this.gfnSlipCancelDs(ds, "fnSlipCancelSap_Complete");
        		}
        	}
        }

        this.fnSlipIssueSap_Complete = function() {
        	this.fnSlipIssueSap_Complete_callback = function()
        	{
        		this.fnSelect();
        	}

        	this.gfnAlert("전표발행(SAP)가 정상처리되었습니다.", "fnSlipIssueSap_Complete_callback");
        }

        this.fnSlipCancelSap_Complete = function() {
        	this.fnSlipCancelSap_Complete_callback = function()
        	{
        		this.fnSelect();
        	}
        	this.gfnAlert("전표취소(SAP)가 정상처리되었습니다.", "fnSlipCancelSap_Complete_callback");
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWD_UNELGSBSN.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
