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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWBPR_WOINTLNDEVAL_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWBPR_WOINTLNDEVAL_SAVE</Col></Row><Row><Col id=\"TARGET\">execute</Col><Col id=\"SP\">DWBPR_WOINTLNDEVAL_EXECUTE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YR_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"YN_WOINTLNDEVAL\" type=\"STRING\" size=\"256\"/><Column id=\"YN_RMN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YN_RMN\">Y</Col></Row></Rows>");
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
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYR_WORK","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("기준년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYR_WORK","staYR_WORK:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_SEQ","ctclYR_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("대여차수");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_SEQ","staNO_SEQ:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DWX_CFWOINTLND_01");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccfNO_SEQ:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("기성년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.getSetter("dateformat").set("yyyy-mm");
            obj.getSetter("editformat").set("yyyymm");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enableevent("true");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("cchkYN_RMN","ctclYM_WORK:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("잔여기성");
            obj.set_truevalue("Y");
            obj.set_falsevalue("");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("cchkYN_WOINTLNDEVAL","cchkYN_RMN:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("추정기성");
            obj.set_truevalue("Y");
            obj.set_falsevalue("");
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

            obj = new BindItem("item1","divSearch.form.ctclYR_WORK.form.TextBox","value","dsSearch","YR_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfNO_SEQ.form.CDTextBox","value","dsSearch","NO_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cchkYN_WOINTLNDEVAL","value","dsSearch","YN_WOINTLNDEVAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cchkYN_RMN","value","dsSearch","YN_RMN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DWB_WOINTLNDEVAL.xfdl", function() {
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

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().YR_WORK)
        	&& !this.gfnIsNull(this.getOwnerFrame().NO_SEQ) && !this.gfnIsNull(this.getOwnerFrame().YM_WORK))
        	{
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		this.dsSearch.setColumn(0, "YR_WORK", this.getOwnerFrame().YR_WORK);
        		this.dsSearch.setColumn(0, "NO_SEQ", this.getOwnerFrame().NO_SEQ);
        		this.divSearch.form.ccfNO_SEQ.form.DSTextBox.set_value(this.getOwnerFrame().DT_REQPERD);
        		this.dsSearch.setColumn(0, "YM_WORK", this.getOwnerFrame().YM_WORK);
        		this.dsSearch.setColumn(0, "YN_WOINTLNDEVAL", this.getOwnerFrame().YN_WOINTLNDEVAL);

        		this.FormBtns.Select.click();
        	}
        	else
        	{
        		var today = this.gfnGetDate();
        		this.dsSearch.setColumn(0, "YR_WORK", today.substr(0,4));
        	}
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
        	this.btnWrtCmpl = this.gfnFormButtonAdd("btnWrtCmpl", "fnWrtCmpl");
        	this.btnWrtCnc = this.gfnFormButtonAdd("btnWrtCnc", "fnWrtCnc");

        	this.btnWrtCmpl.set_enable(false);
        	this.btnWrtCnc.set_enable(false);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfNO_SEQ = this.divSearch.form.ccfNO_SEQ;
        	this.ctclYR_WORK = this.divSearch.form.ctclYR_WORK;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfNO_SEQ.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfNO_SEQ.AfterCDTextChanged = "ccfNO_SEQ_AfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWB_WOINTLNDEVAL");

        	// row 수정가능 여부
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("YR_WORK", "string");
        	this.dsSelect.addColumn("NO_SEQ", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");
        	this.dsSelect.addColumn("YN_WOINTLNDEVAL", "string");
        	this.dsSelect.addColumn("YN_RMN", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("YR_WORK", "string");
        	this.dsSave.addColumn("NO_SEQ", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("NO_HADOCONT", "string");
        	this.dsSave.addColumn("YM_WORK", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("AM_ASMEVALSITE", "bigdecimal");
        	this.dsSave.addColumn("AM_ASMEVALHQ", "bigdecimal");
        	this.dsSave.addColumn("YN_OBJ", "string");
        	this.dsSave.addColumn("DS_RMKS", "string");
        	this.dsSave.addColumn("RM_REF", "string");
        	this.dsSave.addColumn("NO_SLIP", "string");

        	this.dsExecute = new Dataset();
        	this.dsExecute.addColumn("TY_WRK", "string");
        	this.dsExecute.addColumn("ID_USER", "string");
        	this.dsExecute.addColumn("YR_WORK", "string");
        	this.dsExecute.addColumn("NO_SEQ", "string");
        	this.dsExecute.addColumn("CD_SITE", "string");
        	this.dsExecute.addColumn("YM_WORK", "string");

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

        	this.dsSelect.setColumn(0, "TY_WRK", "Q");
        	var yr_work = this.dsSearch.getColumn(0, "YR_WORK");
        	this.dsSelect.setColumn(0, "YR_WORK", yr_work.substr(0,4));
        	this.dsSelect.setColumn(0, "NO_SEQ", this.dsSearch.getColumn(0, "NO_SEQ"));
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsSelect.setColumn(0, "YN_RMN", this.dsSearch.getColumn(0, "YN_RMN"));
        	this.dsSelect.setColumn(0, "YN_WOINTLNDEVAL", this.dsSearch.getColumn(0, "YN_WOINTLNDEVAL"));

        // 	var YN_WOINTLNDEVAL = "";
        // 	if(this.dsSearch.getColumn(0, "YN_WOINTLNDEVAL") == "true")
        // 	{
        // 		YN_WOINTLNDEVAL = "Y";
        // 	}

        //	this.dsSelect.setColumn(0, "YN_WOINTLNDEVAL", YN_WOINTLNDEVAL);

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

        	// save SP 한개로 사용하는 경우
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
        				var yr_work = this.dsSearch.getColumn(0, "YR_WORK");
        				this.dsSave.setColumn(nrow, "YR_WORK", yr_work.substr(0,4));
        				//this.dsSave.setColumn(nrow, "YR_WORK", this.dsSearch.getColumn(0, "YR_WORK"));
        				this.dsSave.setColumn(nrow, "NO_SEQ", this.dsSearch.getColumn(0, "NO_SEQ"));
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "NO_HADOCONT", this.dsList.getColumn(i, "NO_HADOCONT"));
        				this.dsSave.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        				this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsSave.setColumn(nrow, "AM_ASMEVALSITE", this.dsList.getColumn(i, "AM_ASMEVALSITE"));
        				this.dsSave.setColumn(nrow, "AM_ASMEVALHQ", this.dsList.getColumn(i, "AM_ASMEVALHQ"));
        				this.dsSave.setColumn(nrow, "YN_OBJ", this.dsList.getColumn(i, "YN_OBJ"));
        				this.dsSave.setColumn(nrow, "DS_RMKS", this.dsList.getColumn(i, "DS_RMKS"));
        				this.dsSave.setColumn(nrow, "RM_REF", this.dsList.getColumn(i, "RM_REF"));
        				this.dsSave.setColumn(nrow, "NO_SLIP", this.dsList.getColumn(i, "NO_SLIP"));
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
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "YR_WORK"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctclYR_WORK.form.TextBox.setFocus();
        		}
        		this.gfnAlert("기준년도를 입력하세요.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_SEQ"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfNO_SEQ.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("대여차수를 입력하세요.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_WORK"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctclYM_WORK.form.TextBox.setFocus();
        		}
        		this.gfnAlert("기준년월을 입력하세요.", "fnVaidateCallback");
        	}

        	return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, args)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Del.set_enable(false);
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "execute")
        	{
        		if (errorCode == 0) {
        			if(args == "CMPL")
        			{
        				this.fnCMPL_callback = function()
        				{
        					this.FormBtns.Select.click();
        				}
        				this.gfnAlert("작업완료가 정상 처리되었습니다.", "fnCMPL_callback");
        			}
        			else if(args == "CNC")
        			{
        				this.fnCNC_callback = function()
        				{
        					this.FormBtns.Select.click();
        				}
        				this.gfnAlert("작업완료취소가 정상 처리되었습니다.", "fnCNC_callback");
        			}
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfNO_SEQ") {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "YR_WORK")))
        		{
        			this.gfnAlert("기준년도를 입력하세요.", "fnVaidateCallback");

        			return false;
        		}

        		dsUserParam.setColumn(nrow, "YR_WORK", this.dsSearch.getColumn(0, "YR_WORK"));
        	}

        	return true;
        }


        this.ccfNO_SEQ_AfterCDTextChanged = function(id, codeFindData) {
        	if(!this.gfnIsNull(this.dsSearch.getColumn(0, "YM_WORK")))
        	{
        		this.fnChangeColumnCaption(false);
        	}

        	var arr = codeFindData;

        	this.divSearch.form.ccfNO_SEQ.form.DSTextBox.set_value("");
        	this.dsSearch.setColumn(0, "YM_WORK", "");

        	if(arr.length > 0)
        	{
        		//this.divSearch.form.ccfNO_SEQ.form.DSTextBox.set_value(arr[0]["DT_REQPERD"]);
        		this.divSearch.form.ccfNO_SEQ.form.DSTextBox.set_value(arr[0]["DS_RMKS"]);
        		this.dsSearch.setColumn(0, "YM_WORK", arr[0]["YM_WORK"]);
        		this.fnChangeColumnCaption(true);
        	}

        }
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

        this.fnChangeColumnCaption = function(check)
        {
        	var CellCount = this.dxGrid.getCellCount("head");
        	var YM_WORK = this.dsSearch.getColumn(0, "YM_WORK");

        	var M_3_temp = this.gfnAddMonth(YM_WORK.concat("01"), -3);
        	var M_2_temp = this.gfnAddMonth(YM_WORK.concat("01"), -2);
        	var M_1_temp = this.gfnAddMonth(YM_WORK.concat("01"), -1);

        	var	M_3 = this.gfnGetHeadCellIndex(this.dxGrid, "AM_GISUNG_M_3");
        	var	M_2 = this.gfnGetHeadCellIndex(this.dxGrid, "AM_GISUNG_M_2");
        	var	M_1 = this.gfnGetHeadCellIndex(this.dxGrid, "AM_GISUNG_M_1");

        	// 조회 전.
        	if(check == true)
        	{
        		this.dxGrid.setCellProperty("head", M_3, "text", M_3_temp.substr(0,4) + "-" + M_3_temp.substr(4,2));
        		this.dxGrid.setCellProperty("head", M_2, "text", M_2_temp.substr(0,4) + "-" + M_2_temp.substr(4,2));
        		this.dxGrid.setCellProperty("head", M_1, "text", M_1_temp.substr(0,4) + "-" + M_1_temp.substr(4,2));
        	}
        	// 초기화
        	else
        	{
        		this.dxGrid.setCellProperty("head", M_3, "text", "M-3");
        		this.dxGrid.setCellProperty("head", M_2, "text", "M-2");
        		this.dxGrid.setCellProperty("head", M_1, "text", "M-1");
        	}
        }
        // 조회값이 변경되었을 때. (기준년도 변경 관련되어 만든 함수)
        this.dsSearch_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "YR_WORK")
        	{
        		if(e.oldvalue != e.newvalue)
        		{
        			this.dsSearch.setColumn(0, "NO_SEQ","");

        			if(!this.gfnIsNull(this.dsSearch.getColumn(0, "YM_WORK")))
        			{
        				this.fnChangeColumnCaption(false);
        			}

        			this.divSearch.form.ccfNO_SEQ.form.DSTextBox.set_value("");
        			this.dsSearch.setColumn(0, "YM_WORK","");
        		}
        	}
        };

        // 아래부터는 확장 버튼.
        this.fnWrtCmpl = function(obj,e) {
        	if (!this.fnSelectValidate()) return false;

        	var str = "작업완료 후 추정기성을 변경하실 수 없습니다.\n작업완료 처리 하시겠습니까?";

        	this.gfnConfirm(str,"fnWrt_callback","CMPL");
        }

        this.fnWrtCnc = function(obj,e) {
        	if (!this.fnSelectValidate()) return false;

        	var str = "작업완료취소 후 추정기성을 변경하실 수 있습니다.\n작업완료취소 처리 하시겠습니까?";

        	this.gfnConfirm(str,"fnWrt_callback","CNC");
        }

        this.fnWrt_callback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.dsExecute.clearData();

        		var nrow = this.dsExecute.addRow();
        		this.dsExecute.setColumn(nrow, "TY_WRK", strId);
        		this.dsExecute.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		// YR_WORK의 달력을 누르면 월,일이 붙어버리는 현상 발생. 강제로 4글자로 보냄.
        		var yr_work = this.dsSearch.getColumn(0, "YR_WORK");
        		this.dsExecute.setColumn(nrow, "YR_WORK", yr_work.substr(0,4));
        		//this.dsExecute.setColumn(nrow, "YR_WORK", this.dsSearch.getColumn(0, "YR_WORK"));
        		this.dsExecute.setColumn(nrow, "NO_SEQ", this.dsSearch.getColumn(0, "NO_SEQ"));
        		this.dsExecute.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsExecute.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));

        		if (this.dsExecute.rowcount == 0) return;

        		var strSvcId    = "execute";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "execute=dsExecute";
        		var outData     = "";
        		var strArg      = strId;
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        							callBackFnc);   // 통신방법 정의 [생략가능]
        	}
        }

        // 그리드 row 변경시 확장버튼 활성화 or 비활성화 처리
        this.dsList_onrowposchanged = function(obj,e)
        {
        	if(this.dsList.getColumn(this.dsList.rowposition, "BTN_WRTCMPL") == "Y"){
        		this.btnWrtCmpl.set_enable(true);
        	}else{
        		this.btnWrtCmpl.set_enable(false);
        	}

        	if(this.dsList.getColumn(this.dsList.rowposition, "BTN_WRTCNC") == "Y"){
        		this.btnWrtCnc.set_enable(true);
        	}else{
        		this.btnWrtCnc.set_enable(false);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsSearch.addEventHandler("oncolumnchanged",this.dsSearch_oncolumnchanged,this);
        };
        this.loadIncludeScript("DWB_WOINTLNDEVAL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
