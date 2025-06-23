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
                this._setFormPosition(1280,770);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_BALANCESHEET_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"LIST_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ACCOUNT_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ACCOUNT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"YM_ACCOUNT_FR\" type=\"STRING\" size=\"256\"/><Column id=\"YM_ACCOUNT_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLIST_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">일계표</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">월계표</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","276","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DFX_CFCORP");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("회계단위");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:0.0","10.0","276","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFBALANCE_ACNTUNIT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staLIST_GUBUN","ccfCD_DEPT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("crdoLIST_GUBUN","staLIST_GUBUN:0.0","10.0","140","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsLIST_GUBUN");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_columncount("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_ACCOUNT","crdoLIST_GUBUN:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("회계일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACCOUNT_FR","staDT_ACCOUNT:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_ACCOUNT_FR","staDT_ACCOUNT:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_REQ00","ctclDT_ACCOUNT_FR:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACCOUNT_TO","staDT_REQ00:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_ACCOUNT_TO","staDT_REQ00:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","8",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.crdoLIST_GUBUN","value","dsSearch","LIST_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctclDT_ACCOUNT_FR","value","dsSearch","DT_ACCOUNT_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ctclDT_ACCOUNT_TO","value","dsSearch","DT_ACCOUNT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ctclYM_ACCOUNT_FR.form.TextBox","value","dsSearch","YM_ACCOUNT_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ctclYM_ACCOUNT_TO.form.TextBox","value","dsSearch","YM_ACCOUNT_TO");
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
        this.registerScript("DHA_BALANCESHEET.xfdl", function() {
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
        	this.fnSetParameter();
        	this.fnSetEvent();

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
        	this.btnAccountVendorSelect = this.gfnFormButtonAdd("AccountVendorSelect", "fnAccountVendorSelect");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;
        	this.crdoLIST_GUBUN = this.divSearch.form.crdoLIST_GUBUN;
        	this.ctclDT_ACCOUNT_FR = this.divSearch.form.ctclDT_ACCOUNT_FR;
        	this.ctclDT_ACCOUNT_TO = this.divSearch.form.ctclDT_ACCOUNT_TO;
        	this.ctclYM_ACCOUNT_FR = this.divSearch.form.ctclYM_ACCOUNT_FR;
        	this.ctclYM_ACCOUNT_TO = this.divSearch.form.ctclYM_ACCOUNT_TO;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHA_BALANCESHEET");

        	this.gfnGridColumnColor(this.dxGrid, "", "BACK_KuBun", "comp.parent.gfnIsNull(DS_ACCOUNT, 1) == '['", true);
        	this.gfnGridColumnColor(this.dxGrid, "", "BACK_SoKe", "DS_ACCOUNT == '소계'", true);
        	this.gfnGridColumnColor(this.dxGrid, "", "BACK_ChongKe", "DS_ACCOUNT == '합계'", true);

        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dxGrid.addEventHandler("oncelldblclick", this.fnGrid_oncelldblclick, this);

        	this.dsSearch.set_enableevent(false);
        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);


        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "DT_ACCOUNT_FR", today);
        	this.dsSearch.setColumn(0, "DT_ACCOUNT_TO", today);
        	this.dsSearch.setColumn(0, "YM_ACCOUNT_FR", today.substr(0, 6));
        	this.dsSearch.setColumn(0, "YM_ACCOUNT_TO", today.substr(0, 6));

        	this.dsSearch.setColumn(0, "LIST_GUBUN", "1");

        	this.dsSearch.setColumn(0, "CD_DEPT", this.UserInfo.LEVCD_DEPT_ACNT_DOWN);
        	if (!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT")))
        		this.ccfCD_DEPT.form.fnCodeFindLoad();

        	this.dsSearch.set_enableevent(true);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSelect.addColumn("DT_ACCOUNT_FR", "string");
        	this.dsSelect.addColumn("DT_ACCOUNT_TO", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("LIST_GUBUN", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("CD_GROUP", "string");

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

        	var fr_account = this.dsSearch.getColumn(0, "DT_ACCOUNT_FR");
        	var to_account = this.dsSearch.getColumn(0, "DT_ACCOUNT_TO");
        	if (this.dsSearch.getColumn(0, "LIST_GUBUN") == "2") {
        		fr_account = this.dsSearch.getColumn(0, "YM_ACCOUNT_FR");
        		to_account = this.dsSearch.getColumn(0, "YM_ACCOUNT_TO");
        	}

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsSelect.setColumn(0, "DT_ACCOUNT_FR", fr_account);
        	this.dsSelect.setColumn(0, "DT_ACCOUNT_TO", to_account);
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "LIST_GUBUN", this.dsSearch.getColumn(0, "LIST_GUBUN"));
        	this.dsSelect.setColumn(0, "GR_SEARCH", "");
        	this.dsSelect.setColumn(0, "CD_GROUP", "");

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
        	//Dha_JournalReport
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_DEPT.setFocus();
        		}
        		this.gfnAlert("회계단위 (은)는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        		return false;
        	}

        	if (this.dsSearch.getColumn(0, "LIST_GUBUN") == "1") {
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "DT_ACCOUNT_FR"))) {
        			validate = false;
        			this.fnVaidateCallback = function() {
        				this.ctclDT_ACCOUNT_FR.setFocus();
        			}
        			this.gfnAlert("회계년 시작일(은)는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        		}
        		else if (this.gfnIsNull(this.dsSearch.getColumn(0, "DT_ACCOUNT_TO"))) {
        			validate = false;
        			this.fnVaidateCallback = function() {
        				this.ctclDT_ACCOUNT_TO.setFocus();
        			}
        			this.gfnAlert("회계년 종료일(은)는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        		}
        	}
        	else
        	{
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_ACCOUNT_FR"))) {
        			validate = false;
        			this.fnVaidateCallback = function() {
        				this.ctclYM_ACCOUNT_FR.setFocus();
        			}
        			this.gfnAlert("회계년 시작월(은)는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        		}
        		else if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_ACCOUNT_TO"))) {
        			validate = false;
        			this.fnVaidateCallback = function() {
        				this.ctclYM_ACCOUNT_TO.setFocus();
        			}
        			this.gfnAlert("회계년 종료월(은)는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        		}
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
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow)  {
        	if (id == "ccfCD_DEPT") {
        		dsUserParam.setColumn(nrow, "LV_DEPT", this.UserInfo.LEVLV_DEPT_ACNT);
        		dsUserParam.setColumn(nrow, "ACNTUNIT", this.UserInfo.LEVCD_DEPT_ACNT);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	}
        	else if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "CD_GROUP", this.UserInfo.DZ_GROUPCODE);
        	}

        	return true;
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
         	if (!this.gfnGridIsRow(this.dxGrid)) return;
        };

        this.fnGrid_oncelldblclick = function(obj,e)
        {
         	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	this.fnSlipDetail();
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		if (e.columnid == "LIST_GUBUN") {
        			var today = this.gfnGetDate();
        			if (e.newvalue == "1") {
        				this.ctclDT_ACCOUNT_FR.set_visible(true);
        				this.ctclDT_ACCOUNT_TO.set_visible(true);
        				this.ctclYM_ACCOUNT_FR.set_visible(false);
        				this.ctclYM_ACCOUNT_TO.set_visible(false);

        				this.dsSearch.setColumn(0, "DT_ACCOUNT_FR", today);
        				this.dsSearch.setColumn(0, "DT_ACCOUNT_TO", today);
        			}
        			else {
        				this.ctclDT_ACCOUNT_FR.set_visible(false);
        				this.ctclDT_ACCOUNT_TO.set_visible(false);
        				this.ctclYM_ACCOUNT_FR.set_visible(true);
        				this.ctclYM_ACCOUNT_TO.set_visible(true);

        				this.dsSearch.setColumn(0, "YM_ACCOUNT_FR", today.substr(0, 6));
        				this.dsSearch.setColumn(0, "YM_ACCOUNT_TO", today.substr(0, 6));
        			}
        		}
        	}
        };

        this.fnAccountVendorSelect = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) {return false;}

        	var param = {};

        	param.CD_DEPT_ACNT = this.dsSearch.getColumn(0, "CD_DEPT");
        	param.DS_DEPT_ACNT = this.dsSearch.getColumn(0, "DS_DEPT");
        	param.CD_CORP_REC= this.dsSearch.getColumn(0, "CD_CORP");
        	param.DS_CORP_RED= this.dsSearch.getColumn(0, "DS_CORP");
        	param.CD_ACCOUNT = this.dsList.getColumn(this.dsList.rowposition, "CD_ACCOUNT")
        	param.CD_ACCOUNT = this.dsList.getColumn(this.dsList.rowposition, "DS_ACCOUNT")

        	if (this.dsSearch.getColumn(0, "LIST_GUBUN") == "1") {
        		param.DT_MAGAM = this.dsSearch.getColumn(0, "DT_ACCOUNT_FR");
        		param.DT_MAGAM2 = this.dsSearch.getColumn(0, "DT_ACCOUNT_TO");
        	}
        	else {
        // 		var to_account = this.dsSearch.getColumn(0, "YM_ACCOUNT_TO");
        // 		var d = new Date(to_account.substr(0, 4), to_account.substr(4, 2)-1, 1);
        		param.DT_MAGAM = this.dsSearch.getColumn(0, "YM_ACCOUNT_FR")+"01";
        		param.DT_MAGAM2 = this.gfnGetLastDate(this.dsSearch.getColumn(0, "YM_ACCOUNT_TO")+"01");
        	}

        	param.TY_VENDOR = "";
        	param.CD_VENDOR = "";
        	param.DS_VENDOR = "";

        	this.gfnFormOpen("DHE", "DHE_ACCOUNTVENDORSELECT", "", param);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_divDataTop_objGrid_oncelldblclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHA_BALANCESHEET.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
