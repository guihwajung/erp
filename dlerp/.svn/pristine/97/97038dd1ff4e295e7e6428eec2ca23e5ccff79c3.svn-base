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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_VATCHECK_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SALEBUY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_DEPT_ACNT\"/><Col id=\"TY_SALEBUY\">I</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SALEBUY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">I</Col><Col id=\"DS_CODE\">매입</Col></Row><Row><Col id=\"CD_CODE\">O</Col><Col id=\"DS_CODE\">매출</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_ACNT","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("귀속부서");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_ACNT","staCD_DEPT_ACNT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT_BY_SELFACNT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_START_END","ccfCD_DEPT_ACNT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("증빙기간");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","staDT_START_END:0.0","10.0","110","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSPACE00","ctclDT_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","staSPACE00:0.0","10.0","110","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN","ctclDT_TO:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("구분");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("crdoTY_SALEBUY","staTY_GUBUN:0.0","10.0","130","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsTY_SALEBUY");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_direction("vertical");
            obj.set_enable("false");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_DEPT_ACNT.form.CDTextBox","value","dsSearch","CD_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_DEPT_ACNT.form.DSTextBox","value","dsSearch","DS_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.crdoTY_SALEBUY","value","dsSearch","TY_SALEBUY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHV_VATCHECK.xfdl", function() {
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

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_DEPT_ACNT) && !this.gfnIsNull(this.getOwnerFrame().DT_FROM)
        	&& !this.gfnIsNull(this.getOwnerFrame().DT_TO) && !this.gfnIsNull(this.getOwnerFrame().TY_SALEBUY)
        	)
        	{
        		this.dsSearch.setColumn(0, "CD_DEPT_ACNT", this.getOwnerFrame().CD_DEPT_ACNT);
        		this.dsSearch.setColumn(0, "DS_DEPT_ACNT", this.getOwnerFrame().DS_DEPT_ACNT);
        		this.dsSearch.setColumn(0, "DT_FROM", this.getOwnerFrame().DT_FROM);
        		this.dsSearch.setColumn(0, "DT_TO", this.getOwnerFrame().DT_TO);
        		this.dsSearch.setColumn(0, "TY_SALEBUY", this.getOwnerFrame().TY_SALEBUY);

        		this.FormBtns.Select.click();
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
        	this.btnUpdateVat = this.gfnFormButtonAdd("btnUpdateVat", "fnUpdateVat");
        	this.btnDetailVat = this.gfnFormButtonAdd("btnDetailVat", "fnDetailVat");
        	this.btnSlipDetail = this.gfnFormButtonAdd("btnSlipDetail", "fnSlipDetail");

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctclDT_FROM = this.divSearch.form.ctclDT_FROM;
        	this.ctclDT_TO = this.divSearch.form.ctclDT_TO;
        	this.ccfCD_DEPT_ACNT = this.divSearch.form.ccfCD_DEPT_ACNT;


        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHV_VATCHECK");

        	this.ccfCD_DEPT_ACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.dsList.addEventHandler("onrowposchanged", this.dsList_onrowposchanged, this);

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSelect.addColumn("FR_PROOF", "string");
        	this.dsSelect.addColumn("TO_PROOF", "string");
        	this.dsSelect.addColumn("TY_SALEBUY", "string");
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

        	this.dsSelect.setColumn(0, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        	this.dsSelect.setColumn(0, "FR_PROOF", this.dsSearch.getColumn(0, "DT_FROM"));
        	this.dsSelect.setColumn(0, "TO_PROOF", this.dsSearch.getColumn(0, "DT_TO"));
        	this.dsSelect.setColumn(0, "TY_SALEBUY", this.dsSearch.getColumn(0, "TY_SALEBUY"));

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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "DT_FROM"))) {
        		validate = false;
        		this.ctclDT_FROM.setFocus();
        		this.gfnAlert("시작 기간이 입력되지 않았습니다.");
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "DT_TO"))) {
        		validate = false;
        		this.ctclDT_TO.setFocus();
        		this.gfnAlert("종료 기간이 입력되지 않았습니다.");

        	}
        	else if (this.dsSearch.getColumn(0, "DT_FROM").substr(0,4) != this.dsSearch.getColumn(0, "DT_TO").substr(0,4)) {
        		validate = false;
        		this.gfnAlert("증빙 기간의 범위는 같은 회기 내에 해야 됩니다.");
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
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(id == "ccfCD_DEPT_SELFACNT") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        	}

        	return true;
        };
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         // 그리드 더블클릭 이벤트.
        this.divData_objGrid_oncelldblclick = function(obj,e)
        {
        	this.fnDetailVat();
        };

        this.dsList_onrowposchanged = function(obj,e)
        {
        	if(e.oldrow > -1 && e.oldrow != e.newrow ){
        		if(this.gfnNvl(this.dsList.getColumn(e.newrow, "NO_VAT"),"") == "")
        		{
        			this.btnUpdateVat.set_enable(false);
        			this.btnDetailVat.set_enable(false);
        		}
        		else
        		{
        			this.btnUpdateVat.set_enable(true);
        			this.btnDetailVat.set_enable(true);
        		}

        		if(this.gfnNvl(this.dsList.getColumn(e.newrow, "CD_TRADE"),"") == "")
        		{
        			this.btnSlipDetail.set_enable(false);
        		}
        		else
        		{
        			this.btnSlipDetail.set_enable(true);
        		}
        	}

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

        this.fnUpdateVat = function()
        {
        	if(this.dsList.rowposition < 0) return;

        	var cd_trade = this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"),"").trim().replace("-","");
        	var no_vat = this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "NO_VAT"),"").trim();

        	this.fnVatOpen("U", cd_trade, no_vat, "");
        }

        this.fnDetailVat = function()
        {
        	if(this.dsList.rowposition < 0) return;

        	var cd_trade = this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"),"").trim().replace("-","");
        	var no_vat = this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "NO_VAT"),"").trim();

        	this.fnVatOpen("S", cd_trade, no_vat, "");
        }

        this.fnSlipDetail = function()
        {
        	if(this.dsList.rowposition < 0) return;
        	var param = {};
        	param.CD_TRADE = this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"),"").trim().replace("-","");
        	param.IUD_FLAG = "S";
        	param.YN_JUNDO_START = "";

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHA_ISSUESLIP", "fnIssueCallback", param);
        }

        this.fnIssueCallback = function(strId, val)
        {
        	if(val == true)
        	{
        		this.FormBtns.Select.click();
        	}
        }

        this.fnVatOpen = function(iud_flag, no_slip, no_vat, yn_direct)
        {
        	var param = {};

        	param.IUD_FLAG = iud_flag;
        	param.NO_VAT = no_vat;
        	param.CD_SLIP = no_slip;
        	param.TY_SALEBUY = this.dsSearch.getColumn(0, "TY_SALEBUY");
        	param.YN_DIRECT = "";

        	param.CD_DEPT = this.dsSearch.getColumn(0, "CD_DEPT_ACNT");
        	param.DS_DEPT = this.ccfCD_DEPT_ACNT.form.DSTextBox.value;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHV_ISSUEVATDLG", "fnVatOpenCallback", param);
        }

        this.fnVatOpenCallback = function(strId, val)
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
            this.divSearch.form.staCD_DEPT_ACNT.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfCD_DEPT_ACNT.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staDT_START_END.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHV_VATCHECK.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
