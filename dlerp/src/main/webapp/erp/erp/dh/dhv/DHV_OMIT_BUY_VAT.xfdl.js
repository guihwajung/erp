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
            this.set_titletext("누락분매입부가세조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,770);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_OMIT_VAT_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_START\" type=\"STRING\" size=\"256\"/><Column id=\"DT_END\" type=\"STRING\" size=\"256\"/><Column id=\"YN_VATAPPR\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SALEBUY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_SELFACNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YN_VATAPPR\">A</Col><Col id=\"TY_GUBUN\">S</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">회계일자</Col><Col id=\"CD_CODE\">S</Col></Row><Row><Col id=\"DS_CODE\">증빙일자</Col><Col id=\"CD_CODE\">V</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_VATAPPR", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">A</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">승인</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">미승인</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_SELFACNT","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("세무단위");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_SELFACNT","staCD_DEPT_SELFACNT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFSELFACNT_MULTI");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_ACNT","ccfCD_DEPT_SELFACNT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_ACNT","staCD_DEPT_ACNT:0.0","10.0","260","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_VATAPPR","0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("승인구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("crdoTY_VATAPPR","staTY_VATAPPR:0.0","staCD_CORP:10.0","176","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsTY_VATAPPR");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_direction("vertical");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_GUBUN","ccfCD_CORP:3","staCD_CORP:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_GUBUN");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_START","ccboTY_GUBUN:10","staCD_CORP:10.0","110","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_enableevent("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staRange","ctclDT_START:0.0","staCD_CORP:10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_END","staRange:0.0","staCD_CORP:10.0","110","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_DEPT_ACNT.form.CDTextBox","value","dsSearch","CD_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_DEPT_SELFACNT.form.CDTextBox","value","dsSearch","CD_DEPT_SELFACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.crdoTY_VATAPPR","value","dsSearch","YN_VATAPPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccboTY_GUBUN","value","dsSearch","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctclDT_START","value","dsSearch","DT_START");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctclDT_END","value","dsSearch","DT_END");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHV_OMIT_BUY_VAT.xfdl", function() {
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

        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);

        	this.dsSearch.setColumn(0, "CD_DEPT_SELFACNT", this.UserInfo.CD_DEPT_SELFACNT);
        	if (!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT_SELFACNT")))
        		this.ccfCD_DEPT_SELFACNT.form.fnCodeFindLoad();

        	this.dsSearch.setColumn(0, "DT_START", this.gfnGetFirstDate(this.gfnGetDate()));
        	this.dsSearch.setColumn(0, "DT_END",this.gfnGetDate());

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
        	this.btnDetailVat = this.gfnFormButtonAdd("btnDetailVat", "fnDetailVat");
         	this.btnSlipDetail = this.gfnFormButtonAdd("btnSlipDetail", "fnSlipDetail");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;

        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;	// 법인코드
        	this.ccfCD_DEPT_SELFACNT = this.divSearch.form.ccfCD_DEPT_SELFACNT;
        	this.ccfCD_DEPT_ACNT = this.divSearch.form.ccfCD_DEPT_ACNT;
        	this.ccboTY_GUBUN = this.divSearch.form.ccboTY_GUBUN;
        	this.ctclDT_START = this.divSearch.form.ctclDT_START;
        	this.ctclDT_END = this.divSearch.form.ctclDT_END;
        	this.crdoTY_VATAPPR = this.divSearch.form.crdoTY_VATAPPR;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHV_OMIT_BUY_VAT");

        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_DEPT_ACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_DEPT_SELFACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT_SELFACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT_SELFACNT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	this.gfnGridColumnColor(this.dxGrid, "DS_VENDOR","BACK_Soke", "DS_VENDOR == '합계'", true);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSelect.addColumn("DT_START", "string");
        	this.dsSelect.addColumn("DT_END", "string");
        	this.dsSelect.addColumn("YN_VATAPPR", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("TY_SALEBUY", "string");
        	this.dsSelect.addColumn("CD_DEPT_SELFACNT", "string");

        	this.dsSelectUser = new Dataset();
        	this.dsSelectUser.addColumn("ID_USER", "string");
        	this.dsSelectUser.addColumn("CD_DEPT", "string");
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

        	this.dsSelect.setColumn(0, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        	this.dsSelect.setColumn(0, "DT_START", this.dsSearch.getColumn(0, "DT_START"));
        	this.dsSelect.setColumn(0, "DT_END", this.dsSearch.getColumn(0, "DT_END"));
        	this.dsSelect.setColumn(0, "YN_VATAPPR", this.dsSearch.getColumn(0, "YN_VATAPPR"));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        	this.dsSelect.setColumn(0, "TY_SALEBUY", "I");
        	this.dsSelect.setColumn(0, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT_SELFACNT"));

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
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT_SELFACNT"))) {
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_DEPT_SELFACNT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("세무단위를 입력하세요!", "fnVaidateCallback");
        		validate = false;
        	}
        // 	else if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT_ACNT"))){
        // 		// Alert후 실행할 처리
        // 		this.fnVaidateCallback = function() {
        // 			this.ccfCD_DEPT_ACNT.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("귀속부서를 입력하세요!", "fnVaidateCallback");
        // 		validate = false;
        // 	}
        	else if(this.gfnIsNull(this.dsSearch.getColumn(0, "DT_START"))){
        		this.gfnAlert("증빙일자(시작일)은 필수입니다.");
        		this.ctclDT_START.setFocus();
        		validate = false;
        	}

        	else if(this.gfnIsNull(this.dsSearch.getColumn(0, "DT_END"))){
        		this.gfnAlert("증빙일자(종료일)은 필수입니다.");
        		this.ctclDT_END.setFocus();
        		validate = false;
        	}

        	else if(this.gfnGetDiffDate(this.dsSearch.getColumn(0, "DT_START"), this.dsSearch.getColumn(0, "DT_END")) <= -1){
        		this.gfnAlert("증빙일자의 시작일은 종료일보다 작아야 합니다.");
        		this.ctclDT_START.setFocus();
        		validate = false;
        	}

        	if (this.dsSearch.getColumn(0, "DT_START").substr(0,4) != this.dsSearch.getColumn(0, "DT_END").substr(0,4)) {
        		this.fnVaidateCallback = function() {
        			this.ctclDT_START.setFocus();
        		}
        		this.gfnAlert("조회기간의 범위는 같은 회기중으로 입력하셔야 합니다!", "fnVaidateCallback");
        		validate = false;
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

        		if(this.dsList.rowcount > 0)
        		{
        			this.dsList.set_enableevent(false);
        			for(var i = 0 ; i < this.dsList.rowcount; i++)
        			{
        				if(this.dsList.getColumn(i, "DS_VENDOR") == "합계")
        				{
        					this.dsList.setColumn(i, "DS_VATPROOF1", "건수 : " + this.dsList.getColumn(i, "DS_VATPROOF1") + " 건");
        				}
        			}
        			this.dsList.set_enableevent(true);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow)  {
        	var cdCorp = this.ccfCD_CORP.form.CDTextBox.value;

        	if(id == "ccfCD_CORP"){	// 법인코드
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}else if(id == "ccfCD_DEPT_SELFACNT"){	// 세무단위
        		if (this.gfnIsNull(cdCorp)) {
        			this.gfnAlert("법인코드를 먼저 선택하세요.");
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		//dsUserParam.setColumn(nrow, "LV_DEPT", this.UserInfo.LEVCD_DEPT_ACNT);
        	}else if (id == "ccfCD_DEPT_ACNT") {
        // 		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT_SELFACNT"))) {
        // 			this.gfnAlert("세무단위를 먼저 선택하세요.");
        // 			this.ccfCD_DEPT_SELFACNT.form.CDTextBox.setFocus();
        // 			return false;
        // 		}
        // 		dsUserParam.setColumn(nrow, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT_SELFACNT"));
        // 		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER", this.UserInfo.LEVCD_DEPT_ACNT);


        		if (!this.gfnIsNull(cdCorp)) {
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");						//전표발행여부
        		dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);					//법인코드
        		dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        		dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "GR_SEARCH"     , this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER", this.AuthClient.LEVCD_DEPT_UPPER);
        		}else{
        			this.gfnAlert("법인코드는 필수입력 값입니다.");
        			return false;
        		}

        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;

        	switch(id) {

        	case "ccfCD_CORP": // 법인코드
        		this.ccfCD_DEPT_SELFACNT.form.fnCodeFindClear();
        		this.ccfCD_DEPT_ACNT.form.fnCodeFindClear();
        		break;

        	case "ccfCD_DEPT_SELFACNT":	//세무단위

        		if (arrData.length > 0) {
        			var strCdSelfAcnt = "";
        			var strDsSelfAcnt = "";
        			for(var r = 0; r < arrData.length; r++) {
        				strCdSelfAcnt += arrData[r]["CD_DEPT_SELFACNT"]+",";
        				strDsSelfAcnt += arrData[r]["DS_DEPT_SELFACNT"]+",";
        			}

        			strCdSelfAcnt = strCdSelfAcnt.substr(0,strCdSelfAcnt.length-1);
        			strDsSelfAcnt = strDsSelfAcnt.substr(0,strDsSelfAcnt.length-1);

        			this.ccfCD_DEPT_SELFACNT.form.CDTextBox.set_value(strCdSelfAcnt);
        			this.ccfCD_DEPT_SELFACNT.form.DSTextBox.set_value(strDsSelfAcnt);

        		}
        		break;
        	}

        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_RowCellChanged = function(obj,e)
        {
        	//if (!this.gfnGridIsRow(this.dxGrid)) return;
        	var bEnableVat = true;
        	var bEnableSlip = true;
        	if(this.dsList.getColumn(this.dsList.rowposition, "DS_VENDOR") == "합계")
        	{
        		this.btnDetailVat.set_enable(false);
        		this.btnSlipDetail.set_enable(false);
        	}
        	else
        	{
        		if(this.dsList.rowposition == -1){
        			bEnableVat = false;
        			bEnableSlip = false;
        		}else{
        			if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "NO_VAT").trim())){
        				bEnableVat = false;
        			}
        			if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP").trim())){
        				bEnableSlip = false;
        			}
        		}
        		this.btnDetailVat.set_enable(bEnableVat);
        		this.btnSlipDetail.set_enable(bEnableSlip);
        	}
        };


        this.divData_objGrid_oncelldblclick = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var nrow = this.dsList.rowposition;

        	var cd_slip = this.gfnNvl(this.dsList.getColumn(nrow, "CD_SLIP"),"").trim();
        	var no_vat = this.dsList.getColumn(nrow, "NO_VAT");

        	this.fnVatOpen("S", cd_slip, no_vat, "");
        };

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


        // 부가세 상세조회
        this.fnDetailVat = function()
        {
        	if(!this.gfnGridIsRow(this.dxGrid)){
        		this.gfnAlert("데이터를 선택하세요.");
        		return;
        	}
        	var nrow = this.dsList.rowposition;

        	var cd_slip = this.gfnNvl(this.dsList.getColumn(nrow, "CD_SLIP"),"").trim();
        	var no_vat = this.dsList.getColumn(nrow, "NO_VAT");

        	this.fnVatOpen("S", cd_slip, no_vat, "");
        }


        this.fnVatOpen = function(iud_flag, no_slip, no_vat, yn_direct)
        {
        	var param = {};

        	param.IUD_FLAG = iud_flag;
        	param.NO_VAT = no_vat;
        	param.CD_SLIP = no_slip;
        	param.CD_CORP = this.AuthClient.CD_CORP;
        	param.TY_SALEBUY = "O";
        	param.YN_DIRECT = yn_direct;
        	param.VAT_MENU = "Y";
        	param.CD_DEPT = this.dsSearch.getColumn(0, "CD_DEPT_ACNT");
        	param.DS_DEPT = this.divSearch.form.ccfCD_DEPT_ACNT.form.DSTextBox.text;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHV_ISSUEVATDLG", "fnVatOpenCallback", param);
        }

        this.fnVatOpenCallback = function(strId, val)
        {
        	if(val != false)
        	{
        		var json = JSON.parse(val);
        		if(json.blsSave == true)
        		{
        			this.FormBtns.Select.click();
        		}
        	}
        }

        // 전표조회
        this.fnSlipDetail = function()
        {
        	if(!this.gfnGridIsRow(this.dxGrid)){
        		this.gfnAlert("데이터를 선택하세요.");
        		return;
        	}

        	var param = {};

        	param.IUD_FLAG = "S";
        	param.CD_TRADE = this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP"),"").replace("-","");
        	param.YN_JUNDO_START = "";

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHA_ISSUESLIP", "fnSlipDetailCallback", param);
        }


        this.fnSlipDetailCallback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.FormBtns.Select.click();
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccfCD_DEPT_ACNT.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHV_OMIT_BUY_VAT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
