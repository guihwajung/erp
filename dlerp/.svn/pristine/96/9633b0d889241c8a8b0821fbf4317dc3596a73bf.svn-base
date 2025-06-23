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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DOGPR_SLIPREPLACE_SELECT</Col></Row><Row><Col id=\"TARGET\">d_execute</Col><Col id=\"SP\">DOGPR_SLIPREPLACE_CANCEL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JIPHANG1\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JIPHANG2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TY_GUBUN\"/><Col id=\"CD_SITE\"/><Col id=\"CD_DEPT\"/><Col id=\"DT_JIPHANG1\"/><Col id=\"DT_JIPHANG2\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">01</Col><Col id=\"DS_CODE\">조회</Col></Row><Row><Col id=\"CD_CODE\">02</Col><Col id=\"DS_CODE\">선급비용대체</Col></Row><Row><Col id=\"CD_CODE\">03</Col><Col id=\"DS_CODE\">선급비용대체취소</Col></Row><Row><Col id=\"CD_CODE\">04</Col><Col id=\"DS_CODE\">본공사원가대체</Col></Row><Row><Col id=\"CD_CODE\">05</Col><Col id=\"DS_CODE\">본공사원가대체취소</Col></Row><Row><Col id=\"CD_CODE\">06</Col><Col id=\"DS_CODE\">판관비대체</Col></Row><Row><Col id=\"CD_CODE\">07</Col><Col id=\"DS_CODE\">판관비대체취소</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("사업지코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","ccfCD_SITE:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("집행부서코드");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DOX_CFPRGBIZFORSAUPBI");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN","ccfCD_DEPT:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("구분");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_GUBUN","staTY_GUBUN:0.0","10.0","140","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsTY_GUBUN");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_PERIOD","ccboTY_GUBUN:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("기간");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_JIPHANG1","staCD_PERIOD:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_TILDE","ctclDT_JIPHANG1:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_JIPHANG2","staCD_TILDE:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
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

            obj = new BindItem("item1","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccboTY_GUBUN","value","dsSearch","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclDT_JIPHANG2","value","dsSearch","DT_JIPHANG2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctclDT_JIPHANG1","value","dsSearch","DT_JIPHANG1");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DOG_SLIPREPLACE.xfdl", function() {
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

        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "DT_JIPHANG1", this.gfnGetFirstDate(today));
        	this.dsSearch.setColumn(0, "DT_JIPHANG2", this.gfnGetLastDate(today));

        	this.btnSlip.set_enable(false);
        	this.btnSlipCancel.set_enable(false);

        	this.divSearch.form.ccboTY_GUBUN.set_index(0);
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnSlip = this.gfnFormButtonAdd("btnSlip", "fnSlip");
        	this.btnSlipCancel = this.gfnFormButtonAdd("btnSlipCancel", "fnSlipCancel");
        	this.btnSlipDetail = this.gfnFormButtonAdd("btnSlipDetail", "fnSlipDetail");
        	this.btnSapslip = this.gfnFormButtonAdd("btnSapslip", "fnSapslip");
        	this.btnSapslipCncl = this.gfnFormButtonAdd("btnSapslipCncl", "fnSapslipCncl");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ctclDT_JIPHANG1 = this.divSearch.form.ctclDT_JIPHANG1;
        	this.ctclDT_JIPHANG2 = this.divSearch.form.ctclDT_JIPHANG2;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DO", "DOG_SLIPREPLACE");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("DT_JIPHANG1", "string");
        	this.dsSelect.addColumn("DT_JIPHANG2", "string");

        	this.dsExecuteCl = new Dataset();
        	this.dsExecuteCl.addColumn("CD_SITE", "string");
        	this.dsExecuteCl.addColumn("CD_DEPT", "string");
        	this.dsExecuteCl.addColumn("TY_GUBUN", "string");
        	this.dsExecuteCl.addColumn("ID_USER", "string");
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
        	this.dsSelect.setColumn(0, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        	this.dsSelect.setColumn(0, "DT_JIPHANG1", this.dsSearch.getColumn(0, "DT_JIPHANG1"));
        	this.dsSelect.setColumn(0, "DT_JIPHANG2", this.dsSearch.getColumn(0, "DT_JIPHANG2"));

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
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("사업지코드를 입력하세요.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0, "DT_JIPHANG1"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctclDT_JIPHANG1.setFocus();
        		}
        		this.gfnAlert("기간을 입력하세요.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0, "DT_JIPHANG2"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctclDT_JIPHANG2.setFocus();
        		}
        		this.gfnAlert("기간을 입력하세요.", "fnVaidateCallback");
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
        		this.fnExtandBtnCheck(this.dsSearch.getColumn(0, "TY_GUBUN"));
        	}
        	/*
        	else if(svcID == "execute") {
        		if (errorCode == 0) {
        			this.gfnAlert("전표발행이 완료되었습니다.");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	*/
        	else if(svcID == "d_execute") {
        		if (errorCode == 0) {
        			this.gfnAlert("전표삭제가 완료되었습니다.");
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

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		if(e.columnid == "TY_GUBUN")
        		{
        			this.fnExtandBtnCheck(e.newvalue);
        		}
        	}
        };

        // 아래부터는 확장버튼.
        this.fnSlip = function(obj,e) {

        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0,"CD_SITE");
        	param.CD_DEPT = this.dsSearch.getColumn(0,"CD_DEPT");
        	param.TY_GUBUN = this.dsSearch.getColumn(0,"TY_GUBUN");
        	param.ID_USER = this.AuthClient.ID_USER;
        	param.DT_JIPHANG1 = this.dsSearch.getColumn(0,"DT_JIPHANG1");
        	param.DT_JIPHANG2 = this.dsSearch.getColumn(0,"DT_JIPHANG2");

        	this.gfnFormOpenNonAuth("DOG", "DOG_SLIPREPLACE_DT", "fnSlipDialogCallback", param, 380, 180);
        }

        this.fnSlipDialogCallback = function(svcID, value) {
        	// 리턴값
        	if(value){
        		this.FormBtns.Select.click();
        	}
        };

        this.fnSlipCancel = function(obj,e) {
        	this.dsExecuteCl.clearData();
        	var nrow = this.dsExecuteCl.addRow();

        	this.dsExecuteCl.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsExecuteCl.setColumn(nrow, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsExecuteCl.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        	this.dsExecuteCl.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "d_execute";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "d_execute=dsExecuteCl";
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


        this.fnSlipDetail = function(obj,e) {
        	var param = {};

        	param.CD_TRADE = this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE");

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);
        }

        this.fnExtandBtnCheck = function(gubun)
        {
        	var slip = false;
        	var slipCancel = false;
        	var slipSap = false;
        	var slipSapCancel = false;

        	switch(gubun)
        	{
        		case "01" : slip = false; slipCancel = false;
        		break;
        		case "02" : slip = true; slipCancel = false;
        		break;
        		case "03" : slip = false; slipCancel = true;
        		break;
        		case "04" : slip = true; slipCancel = false;
        		break;
        		case "05" : slip = false; slipCancel = true;
        		break;
        		case "06" : slip = true; slipCancel = false;
        		break;
        		case "07" : slip = false; slipCancel = true;
        		break;
        	}

        	// 조회된 것이 없다면.
        	if(this.dsList.rowcount < 1)
        	{
        		slip = false; slipCancel = false;
        	}

        	this.btnSlip.set_enable(slip);
        	this.btnSlipCancel.set_enable(slipCancel);
        	this.btnSapslip.set_enable(slip);
        	this.btnSapslipCncl.set_enable(slipCancel);
        }

        this.divData_objGrid_oncelldblclick = function(obj,e)
        {
          var ds_field = this.dxGrid.getCellProperty("body", e.col, "text");

          if(ds_field.indexOf("bind:") > -1) {
        	 ds_field = ds_field.replace("bind:", "");
          }

          // 전표번호 관련된 컬럼이 아니라면 return;
          if(ds_field != "CD_TRADE" && ds_field != "CD_TRADE2" && ds_field != "CD_TRADE3" && ds_field != "CD_TRADE4") return;

          var param = {};

          var cd_trade = this.dsList.getColumn(this.dsList.rowposition, ds_field);

          // 비었으면 return.
          if(this.gfnIsNull(cd_trade) || cd_trade == "") return;

          param.CD_TRADE = cd_trade;

          this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);
        };


        this.fnSapslip = function()
        {
        	this.gfnConfirm("전표발행(SAP)를 진행하시겠습니까?", "fnSapslip_Confirm");
        }


        this.fnSapslip_Confirm = function(strId, val) {
        	if(val == true) {
        		var ds = new Dataset();
        		ds.addColumn("NO_ERPKEY", "string");
        		ds.addColumn("CD_TRADE", "string");
        		ds.addColumn("ID_USER", "string");

        		for(var i = 0; i < this.dsList.rowcount; i++)
        		{
        			var check = false;
        			var cd_trade = "";

        			switch(this.dsSearch.getColumn(0, "TY_GUBUN"))
        			{
        				case "02" :
        					if(this.dsList.getColumn(i, "YN_SAPSLIP02") == "Y")
        					{
        						check = true;
        						cd_trade = this.dsList.getColumn(i, "CD_TRADE2");
        					}
        					break;

        				case "04" :
        					if(this.dsList.getColumn(i, "YN_SAPSLIP03") == "Y")
        					{
        						check = true;
        						cd_trade = this.dsList.getColumn(i, "CD_TRADE3");
        					}
        					break;
        				case "06" :
        					if(this.dsList.getColumn(i, "YN_SAPSLIP04") == "Y")
        					{
        						check = true;
        						cd_trade = this.dsList.getColumn(i, "CD_TRADE4");
        					}
        					break;
        			}

        			if(check == true)
        			{
        				var nrow = ds.addRow();
        				ds.setColumn(nrow, "NO_ERPKEY", this.dsList.getColumn(i, "NO_ERPKEY"));
        				ds.setColumn(nrow, "CD_TRADE", cd_trade);
        				ds.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			}
        		}

        		if(ds.rowcount == 0)
        		{
        			this.gfnAlert("전표대상(SAP)이 없습니다.");
        			return;
        		}

        		// 전표발행(SAP) 다중건 처리
        		this.gfnSlipIssueDs(ds, "fnSapslip_Complete");
        	}
        }

        /*
         *	전표취소(SAP)
         */
        this.fnSapslipCncl = function() {

        	this.gfnConfirm("전표발행취소(SAP)를 진행하시겠습니까?", "fnSapslipCncl_Confirm");
        }

        this.fnSapslipCncl_Confirm = function(strId, val) {
        	if(val == true) {
        		// 전표취소(SAP) 다중건 처리용 Dataset 생성
        		var ds = new Dataset();
        		ds.addColumn("NO_ERPKEY", "string");
        		ds.addColumn("CD_TRADE", "string");
        		ds.addColumn("ID_USER", "string");
        		ds.addColumn("BUKRS", "string");
        		ds.addColumn("BELNR", "string");
        		ds.addColumn("GJAHR", "string");

        		for(var i = 0; i < this.dsList.rowcount; i++)
        		{
        			var check = false;
        			var gjahr = "";
        			var belnr = "";
        			var cd_trade = "";

        			switch(this.dsSearch.getColumn(0, "TY_GUBUN"))
        			{
        				case "03" :
        					if(this.dsList.getColumn(i, "YN_SAPCANCEL02") == "Y")
        					{
        						check = true;
        						gjahr = this.dsList.getColumn(i, "GJAHR2");
        						belnr = this.dsList.getColumn(i, "BELNR2");
        						cd_trade = this.dsList.getColumn(i, "CD_TRADE2");
        					}
        					break;

        				case "05" :
        					if(this.dsList.getColumn(i, "YN_SAPCANCEL03") == "Y")
        					{
        						check = true;
        						gjahr = this.dsList.getColumn(i, "GJAHR3");
        						belnr = this.dsList.getColumn(i, "BELNR3");
        						cd_trade = this.dsList.getColumn(i, "CD_TRADE3");
        					}
        					break;
        				case "07" :
        					if(this.dsList.getColumn(i, "YN_SAPCANCEL04") == "Y")
        					{
        						check = true;
        						gjahr = this.dsList.getColumn(i, "GJAHR4");
        						belnr = this.dsList.getColumn(i, "BELNR4");
        						cd_trade = this.dsList.getColumn(i, "CD_TRADE4");
        					}
        					break;
        			}

        			if(check == true)
        			{
        				var nrow = ds.addRow();
        				ds.setColumn(nrow, "NO_ERPKEY", this.dsList.getColumn(i, "NO_ERPKEY"));
        				ds.setColumn(nrow, "CD_TRADE", cd_trade);
        				ds.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				ds.setColumn(nrow, "BUKRS", this.dsList.getColumn(i, "BUKRS"));
        				ds.setColumn(nrow, "BELNR", belnr);
        				ds.setColumn(nrow, "GJAHR", gjahr);
        			}

        		}

        		if(ds.rowcount == 0)
        		{
        			this.gfnAlert("전표취소대상(SAP)이 없습니다.");
        			return;
        		}
        		// 전표취소(SAP) 다중건 처리
        		this.gfnSlipCancelDs(ds, "fnSapslipCncl_Complete");
        	}
        }


        this.fnSapslip_Complete = function() {
        	this.fnSelect();
        }

        this.fnSapslipCncl_Complete = function() {
        	this.fnSelect();
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DOG_SLIPREPLACE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
