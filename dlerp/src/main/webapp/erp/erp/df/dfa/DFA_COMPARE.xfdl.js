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
            this.set_titletext("거래내역전표대사");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DFAPR_COMPARE1_SELECT</Col></Row><Row><Col id=\"TARGET\">selectSub</Col><Col id=\"SP\">DFAPR_COMPARE2_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ACCOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_rtl("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_FROM","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("기준일자");
            obj.set_rtl("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_REQ00","staDT_FROM:103","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","staDT_REQ00:-2","10","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","staDT_FROM:1","10","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_ACCOUNT","ctclDT_TO:4","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_ACCOUNT","staNO_ACCOUNT:1","10","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DFX_CFACCOUNTNO_SUJI");
            obj.getSetter("CDTextWidth").set("110");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","44.30%","0","5","100%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cursor("ew-resize");
            obj.set_cssclass("div_Splitter");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","5",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("0");
            obj.getSetter("BeforeUserDataSetParam").set("fnGrid_BeforeUserDataSetParam");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfNO_ACCOUNT.form.CDTextBox","value","dsSearch","NO_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DFA_COMPARE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	//this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	var frame = this.getOwnerFrame();
        	var today = this.gfnGetDate();

        	if(!this.gfnIsNull(frame.CD_CORP) && !this.gfnIsNull(frame.NO_ACCOUNT) && !this.gfnIsNull(frame.GUBUN)){

        		this.ccfCD_CORP.form.CDTextBox.set_value(frame.CD_CORP);
        		this.ccfCD_CORP.form.DSTextBox.set_value(frame.DS_CORP);

        		this.ccfNO_ACCOUNT.form.CDTextBox.set_value(frame.NO_ACCOUNT);
        		this.ccfNO_ACCOUNT.form.DSTextBox.set_value(frame.NM_ACCOUNT);

        		if(frame.GUBUN == "M"){ // DFA_MANNUAL 에서 호출
        			this.dsSearch.setColumn(0, "DT_FROM", frame.DT_DATE);
        			this.dsSearch.setColumn(0, "DT_TO", frame.DT_DATE);
        		} else if(frame.GUBUN == "B"){  // DFA_BALANCE 에서 호출
        			this.dsSearch.setColumn(0, "DT_FROM", frame.DT_FROM);
        			this.dsSearch.setColumn(0, "DT_TO", frame.DT_TO);
        		}

        		this.FormBtns.Select.click();
        	}else{
        		//this.dsSearch.setColumn(0, "YM_DATE", this.gfnAddDate(today, -1).substring(0,6));
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);		 // 법인코드
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        		this.dsSearch.setColumn(0, "DT_FROM", today.substring(0,6)+"01");
        		this.dsSearch.setColumn(0, "DT_TO", today.substring(0,8));
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Reset.set_enable(false);
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
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ctclDT_FROM = this.divSearch.form.ctclDT_FROM;
        	this.ctclDT_TO = this.divSearch.form.ctclDT_TO;
        	this.ccfNO_ACCOUNT = this.divSearch.form.ccfNO_ACCOUNT;

        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataRight.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFA_COMPARE1");
        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DF", "DFA_COMPARE2");

        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam"; // 법인
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfNO_ACCOUNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam"; // 계좌번호
        	this.ccfNO_ACCOUNT.AfterCDTextChanged = "fnAfterCDTextChanged";

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("DT_FROM", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
        	this.dsSelect.addColumn("NO_ACCOUNT", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_CORP", "string");
        	this.dsSelectSub.addColumn("DT_FROM", "string");
        	this.dsSelectSub.addColumn("DT_TO", "string");
        	this.dsSelectSub.addColumn("NO_ACCOUNT", "string");

        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;
        	this.fnSelectSub();

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsList.clearData();

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "DT_FROM", this.ctclDT_FROM.value);
        	this.dsSelect.setColumn(0, "DT_TO", this.ctclDT_TO.value);
        	this.dsSelect.setColumn(0, "NO_ACCOUNT", this.ccfNO_ACCOUNT.form.CDTextBox.value);

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
         * 서브 버튼 이벤트
         ************************************************************************/
        this.fnSelectSub = function() {
        	this.gfnGridBeforeSelect(this.dxGridSub);
        	this.dsListSub.clearData();

        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();

        	this.dsSelectSub.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsSelectSub.setColumn(0, "DT_FROM", this.ctclDT_FROM.value);
        	this.dsSelectSub.setColumn(0, "DT_TO", this.ctclDT_TO.value);
        	this.dsSelectSub.setColumn(0, "NO_ACCOUNT", this.ccfNO_ACCOUNT.form.CDTextBox.value);

        	var strSvcId    = "selectSub";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectSub=dsSelectSub";
        	var outData     = "dsListSub=selectSub0";
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
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (validate && this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		validate = false;
        		this.fnDtDateCallback = function() {
        			return false;
        		}
        		this.gfnAlert("법인코드를 입력해주세요.", "fnDtDateCallback");
        	}
        	if (validate && (this.gfnIsNull(this.ctclDT_FROM.value) || this.gfnIsNull(this.ctclDT_TO.value))) {
        		validate = false;
        		this.fnDtDateCallback = function() {
        			return false;
        		}
        		this.gfnAlert("기준일자를 입력해주세요.", "fnDtDateCallback");
        	}
        	if (validate && this.gfnIsNull(this.ccfNO_ACCOUNT.form.CDTextBox.value)) {
        		validate = false;
        		this.fnDtDateCallback = function() {
        			return false;
        		}
        		this.gfnAlert("계좌번호를 입력해주세요.", "fnDtDateCallback");
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
        	}else if (svcID == "selectSub"){
        		this.gfnGridAfterSelect(this.dxGridSub);
        	}
        	this.fnSetButton();
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow)  {
        	var cdCorp = this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value) ? "" : this.ccfCD_CORP.form.CDTextBox.value;

        	// 법인코드
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "CD_GROUP", this.cdGroup);
        	}

        	if (id == "ccfNO_ACCOUNT") {
        		dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id) {
        	this.fnSearchInit();
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/


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
        	if (e.columnid == "DT_FROM" || e.columnid == "DT_TO") {
        		if (!this.gfnIsNull(this.dsSearch.getColumn(0, "DT_FROM")) && !this.gfnIsNull(this.dsSearch.getColumn(0, "DT_TO"))) {
        			if (this.dsSearch.getColumn(0, "DT_FROM") > this.dsSearch.getColumn(0, "DT_TO")) {
        				this.fnAlertCallback = function() {
        					this.dsSearch.setColumn(0, e.columnid, e.oldvalue);
        				}
        				this.gfnAlert("기간이 올바르지 않습니다. 다시 입력해주세요.", "fnAlertCallback");
        			}
        		}
        	}

        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ctclDT_TO.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.ctclDT_FROM.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataRight.form.objGridSub.addEventHandler("oncellclick",this.divData_divDataRight_objGridSub_oncellclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DFA_COMPARE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
